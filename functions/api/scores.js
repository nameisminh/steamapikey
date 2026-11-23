// Bảng xếp hạng online của Góc chơi (Cloudflare Pages Functions + KV).
// Dùng chung KV namespace với điểm danh: biến tên CHECKIN (xem README).
//
// GET  /api/scores?g=wpm|combo&t=<token>   -> top 10 + hạng của bạn (nếu gửi token)
// POST /api/scores {g, name, score, token}  -> lưu điểm nếu cao hơn điểm cũ của bạn
//
// Điểm do trình duyệt tự báo nên không chống gian lận tuyệt đối; ở đây chỉ chặn điểm vô lý,
// gửi dồn dập (1 lần / 15 giây mỗi IP) và tên bậy (chỉ chữ, số, khoảng trắng, _ . -).

const GAMES = {
  wpm:   { min: 1, max: 250 },   // gõ chữ 60 giây: trên 250 WPM là không thật
  combo: { min: 1, max: 9999 },  // combo tối đa của trang là 9999
};
const KEEP = 200;                // mỗi bảng giữ tối đa 200 người
const GAP_MS = 15000;            // khoảng cách tối thiểu giữa 2 lần gửi của cùng một IP

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

async function sha(s) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 24);
}

function cleanName(s) {
  return String(s == null ? '' : s).normalize('NFC')
    .replace(/[^\p{L}\p{N} _.\-]/gu, '')
    .replace(/\s+/g, ' ').trim().slice(0, 16);
}

const today = () => new Date(Date.now() + 7 * 3600e3).toISOString().slice(0, 10); // giờ Việt Nam

async function load(env, g) {
  const raw = await env.CHECKIN.get('lb:' + g, 'json');
  return Array.isArray(raw) ? raw : [];
}

function view(list, myId) {
  const top = list.slice(0, 10).map((p, i) => ({ r: i + 1, n: p.n, s: p.s, d: p.d, me: !!myId && p.id === myId }));
  const i = myId ? list.findIndex(p => p.id === myId) : -1;
  return { top, players: list.length, me: i >= 0 ? { r: i + 1, n: list[i].n, s: list[i].s } : null };
}

export async function onRequestGet({ request, env }) {
  if (!env.CHECKIN) return json({ error: 'kv' }, 503);
  const u = new URL(request.url), g = u.searchParams.get('g') || '';
  if (!GAMES[g]) return json({ error: 'game' }, 400);
  const t = u.searchParams.get('t') || '';
  const myId = /^[a-f0-9]{32}$/.test(t) ? await sha(t) : '';
  return json({ g, ...view(await load(env, g), myId) });
}

export async function onRequestPost({ request, env }) {
  if (!env.CHECKIN) return json({ error: 'kv' }, 503);
  let body;
  try { body = await request.json(); } catch (e) { return json({ error: 'json' }, 400); }

  const g = String(body.g || ''), rule = GAMES[g];
  if (!rule) return json({ error: 'game' }, 400);
  const token = String(body.token || '');
  if (!/^[a-f0-9]{32}$/.test(token)) return json({ error: 'token' }, 400);
  const name = cleanName(body.name);
  if (name.length < 2) return json({ error: 'name' }, 400);
  const score = Math.floor(Number(body.score));
  if (!Number.isFinite(score) || score < rule.min || score > rule.max) return json({ error: 'score' }, 400);

  // chống gửi dồn dập theo IP (KV cần TTL tối thiểu 60 giây, nên lưu thời điểm rồi tự so)
  const ip = request.headers.get('cf-connecting-ip') || '0';
  const rk = 'rl:' + (await sha(ip + 'ming'));
  const last = Number(await env.CHECKIN.get(rk)) || 0;
  if (Date.now() - last < GAP_MS) return json({ error: 'slow' }, 429);
  await env.CHECKIN.put(rk, String(Date.now()), { expirationTtl: 60 });

  const id = await sha(token);
  const list = await load(env, g);
  const i = list.findIndex(p => p.id === id);
  let better = false;
  if (i < 0) { list.push({ id, n: name, s: score, d: today() }); better = true; }
  else {
    list[i].n = name;                                   // đổi tên thì cập nhật luôn
    if (score > list[i].s) { list[i].s = score; list[i].d = today(); better = true; }
  }
  list.sort((a, b) => b.s - a.s || (a.d < b.d ? -1 : a.d > b.d ? 1 : 0));
  list.length = Math.min(list.length, KEEP);
  await env.CHECKIN.put('lb:' + g, JSON.stringify(list));
  return json({ g, better, ...view(list, id) });
}
