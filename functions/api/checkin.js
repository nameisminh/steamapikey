// Bảng xếp hạng điểm danh cho Cloudflare Pages (Pages Functions + KV).
// Cần gắn một KV namespace vào dự án Pages với tên biến là CHECKIN.
// GET  /api/checkin                      -> bảng xếp hạng top 10
// POST /api/checkin {token,name,check}   -> check=true: điểm danh hôm nay; check=false: chỉ xem hạng của tôi

const KEY = 'board';
const MAX_PLAYERS = 3000;        // chống đầy bộ nhớ nếu có người spam tạo tên
const TZ_HOURS = 7;              // "ngày" tính theo giờ Việt Nam để mọi người cùng một mốc

const json = (obj, status = 200, extra = {}) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...extra },
  });

function dayKey(offset = 0) {
  const d = new Date(Date.now() + TZ_HOURS * 3600e3 + offset * 864e5);
  return d.toISOString().slice(0, 10);
}

async function sha(token) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(token));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 24);
}

function cleanName(s) {
  s = String(s == null ? '' : s).normalize('NFC')
    .replace(/[^\p{L}\p{N} _.\-]/gu, '')
    .replace(/\s+/g, ' ').trim().slice(0, 16);
  return s;
}

// streak hiện tại: nếu bỏ lỡ hơn một ngày thì về 0
function liveStreak(u, today, yest) {
  return u.l === today || u.l === yest ? u.s : 0;
}

function ranked(board, today, yest) {
  return Object.entries(board.u)
    .map(([id, u]) => ({ id, n: u.n, s: liveStreak(u, today, yest), b: u.b || u.s, t: u.t, l: u.l }))
    .sort((a, b) => b.s - a.s || b.t - a.t || (a.l < b.l ? 1 : a.l > b.l ? -1 : 0) || (a.id < b.id ? -1 : 1));
}

function view(list, myId) {
  const top = list.slice(0, 10).map((p, i) => ({ r: i + 1, n: p.n, s: p.s, t: p.t, me: p.id === myId }));
  const idx = myId ? list.findIndex(p => p.id === myId) : -1;
  const me = idx >= 0 ? { r: idx + 1, n: list[idx].n, s: list[idx].s, b: list[idx].b, t: list[idx].t } : null;
  return { top, players: list.length, me };
}

async function load(env) {
  const raw = await env.CHECKIN.get(KEY, 'json');
  return raw && raw.u ? raw : { u: {} };
}

export async function onRequestGet({ env }) {
  if (!env.CHECKIN) return json({ error: 'kv' }, 503);
  const today = dayKey(), yest = dayKey(-1);
  const board = await load(env);
  return json({ date: today, ...view(ranked(board, today, yest), '') });
}

export async function onRequestPost({ request, env }) {
  if (!env.CHECKIN) return json({ error: 'kv' }, 503);
  let body;
  try { body = await request.json(); } catch (e) { return json({ error: 'json' }, 400); }
  const token = String(body.token || '');
  if (!/^[a-f0-9]{32}$/.test(token)) return json({ error: 'token' }, 400);

  const today = dayKey(), yest = dayKey(-1);
  const id = await sha(token);
  const board = await load(env);
  const u = board.u[id];

  if (body.check === true) {
    const name = cleanName(body.name);
    if (name.length < 2) return json({ error: 'name' }, 400);
    if (!u && Object.keys(board.u).length >= MAX_PLAYERS) return json({ error: 'full' }, 503);
    if (!u) {
      board.u[id] = { n: name, s: 1, b: 1, t: 1, l: today };
    } else {
      u.n = name;
      if (u.l !== today) {
        u.s = u.l === yest ? u.s + 1 : 1;
        u.t += 1;
        u.l = today;
        if (u.s > (u.b || 0)) u.b = u.s;
      }
    }
    await env.CHECKIN.put(KEY, JSON.stringify(board));
  }
  return json({ date: today, checked: !!(board.u[id] && board.u[id].l === today), ...view(ranked(board, today, yest), id) });
}
