// LƯU BÚT — Cloudflare Pages Function, chạy ở đường dẫn /api/guestbook
// Cần: cơ sở dữ liệu D1 gắn với tên biến DB, và biến môi trường SALT (chuỗi ngẫu nhiên bất kỳ). Xem GUESTBOOK.md.
//
// GET  /api/guestbook  -> 50 lời nhắn ĐÃ DUYỆT mới nhất: { items: [{ name, msg, created }] }
// POST /api/guestbook  -> { name, msg, hp } ; lưu ở trạng thái CHỜ DUYỆT (approved = 0)
//
// Chống spam: ô bẫy "hp" phải để trống, giới hạn độ dài, mỗi địa chỉ IP 1 lời nhắn/phút và 5 lời nhắn/ngày,
// chỉ nhận yêu cầu gửi từ chính trang này. IP không được lưu thẳng, chỉ lưu mã băm (SHA-256 + SALT).

const MAX_NAME = 40;
const MAX_MSG = 500;

function json(body, status = 200, extra = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...extra },
  });
}

function clean(s, max) {
  return String(s ?? '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/\s+\n/g, '\n')
    .trim()
    .slice(0, max);
}

async function hashIp(ip, salt) {
  const data = new TextEncoder().encode(`${ip}|${salt}`);
  const buf = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function onRequestGet({ env }) {
  if (!env.DB) return json({ off: true, items: [] });
  const { results } = await env.DB.prepare(
    'SELECT name, msg, created FROM guestbook WHERE approved = 1 ORDER BY id DESC LIMIT 50'
  ).all();
  return json({ items: results || [] }, 200, { 'cache-control': 'public, max-age=60' });
}

export async function onRequestPost({ request, env }) {
  if (!env.DB) return json({ error: 'off' }, 503);

  // chỉ nhận từ chính trang này
  const origin = request.headers.get('origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) return json({ error: 'origin' }, 403);
  if (!(request.headers.get('content-type') || '').includes('application/json')) return json({ error: 'type' }, 415);

  let body;
  try { body = await request.json(); } catch { return json({ error: 'json' }, 400); }

  // ô bẫy: người thật không thấy nên để trống; bot hay điền vào
  if (body.hp) return json({ ok: true });

  const name = clean(body.name, MAX_NAME).replace(/\n/g, ' ');
  const msg = clean(body.msg, MAX_MSG);
  if (name.length < 1 || msg.length < 2) return json({ error: 'empty' }, 400);
  if (/https?:\/\/|www\./i.test(name)) return json({ error: 'link' }, 400);

  const ip = request.headers.get('cf-connecting-ip') || '0.0.0.0';
  const iph = await hashIp(ip, env.SALT || 'ming-guestbook');

  const recent = await env.DB.prepare(
    "SELECT SUM(created > datetime('now','-60 seconds')) AS m, COUNT(*) AS d FROM guestbook WHERE iph = ? AND created > datetime('now','-1 day')"
  ).bind(iph).first();
  if ((recent?.m || 0) > 0 || (recent?.d || 0) >= 5) return json({ error: 'rate' }, 429);

  await env.DB.prepare('INSERT INTO guestbook (name, msg, iph) VALUES (?, ?, ?)').bind(name, msg, iph).run();
  return json({ ok: true, pending: true }, 201);
}
