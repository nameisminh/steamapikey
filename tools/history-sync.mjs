// Ghi lịch sử hoạt động Discord vào history.json (Node 18+).
//   node tools/history-sync.mjs --once   : hỏi Lanyard một lần rồi thoát (dùng cho GitHub Actions)
//   node tools/history-sync.mjs          : chạy liên tục, hỏi mỗi 30 giây (chạy trên máy của bạn)
import { readFile, writeFile } from 'node:fs/promises';
const ID = '873073921589661698', FILE = new URL('../history.json', import.meta.url), MAX = 200;
async function load() { try { const j = JSON.parse(await readFile(FILE, 'utf8')); return Array.isArray(j) ? j : []; } catch { return []; } }
async function tick() {
  const r = await fetch(`https://api.lanyard.rest/v1/users/${ID}`); if (!r.ok) return;
  const L = (await r.json()).data; if (!L) return;
  const now = Date.now(), list = [];
  for (const a of L.activities || []) {
    if (a.type === 4) continue;
    if (L.listening_to_spotify && (a.id === 'spotify:1' || a.name === 'Spotify')) continue;
    list.push({ ty: a.type, n: a.name || '', d: a.details || a.assets?.large_text || '', s: a.state || a.assets?.small_text || '', u: a.url || a.sync_id || '', st: a.timestamps?.start || 0 });
  }
  if (L.listening_to_spotify && L.spotify) list.push({ ty: 2, n: 'Spotify', d: L.spotify.song || '', s: L.spotify.artist || '', st: L.spotify.timestamps?.start || 0 });
  if (!list.length) return;
  const H = await load(); let changed = false;
  for (const x of list) {
    const k = `${x.ty}|${x.n}|${x.d}|${x.s}|${x.u || ''}|${x.st || ''}`, e = H.find(h => h.k === k);
    if (e) { if (now - e.l > 30000) { e.l = now; changed = true; } }
    else { H.unshift({ k, ...x, f: now, l: now }); changed = true; }
  }
  if (!changed) return;
  H.sort((a, b) => b.l - a.l);
  await writeFile(FILE, JSON.stringify(H.slice(0, MAX)));
}
if (process.argv.includes('--once')) await tick();
else { await tick(); setInterval(() => tick().catch(() => {}), 30000); }
