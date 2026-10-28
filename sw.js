/* Service worker của trang Ming: lưu trang, ảnh, font đã xem để mất mạng vẫn lướt được.
   Đổi VERSION (ví dụ 'v2') khi muốn ép mọi máy xoá cache cũ và tải lại từ đầu.
   Cách hoạt động:
   - Trang chính: ưu tiên mạng (luôn thấy bản mới nhất), mất mạng thì mở bản đã lưu.
   - Ảnh, font, steam.json: cho xem bản đã lưu ngay, đồng thời tải bản mới ngầm.
   - Nhạc, video, API (thời tiết, Discord, lời bài hát, thống kê): không lưu, để trình duyệt tự xử lý. */
const VERSION = 'v1';
const CORE = 'ming-core-' + VERSION;
const RT = 'ming-rt-' + VERSION;
const MAX_RT = 300;
const ROOT = new URL('./', self.registration.scope).href;
const PRECACHE = ['./', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];
const STATIC_HOSTS = [
  'fonts.googleapis.com', 'fonts.gstatic.com',
  'ddragon.leagueoflegends.com',
  'avatars.akamai.steamstatic.com', 'cdn.akamai.steamstatic.com', 'cdn.cloudflare.steamstatic.com',
  'cdn.discordapp.com', 'media.discordapp.net', 'upload.wikimedia.org', 'cdn.jsdelivr.net'
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CORE);
    await Promise.allSettled(PRECACHE.map((u) => c.add(new Request(u, { cache: 'reload' }))));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keep = [CORE, RT];
    const names = await caches.keys();
    await Promise.all(names.filter((n) => n.startsWith('ming-') && !keep.includes(n)).map((n) => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (e) => {
  const d = e.data || {};
  if (d.type === 'SKIP_WAITING') self.skipWaiting();
  if (d.type === 'WARM') e.waitUntil(warm());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (req.headers.has('range')) return;
  const url = new URL(req.url);
  if (req.destination === 'audio' || req.destination === 'video' || /\.(mp3|mp4|webm|ogg|m4a|wav)$/i.test(url.pathname)) return;
  if (url.origin === self.location.origin) {
    if (url.pathname.endsWith('/sw.js')) return;
    if (req.mode === 'navigate') { e.respondWith(navigate(req)); return; }
    e.respondWith(swr(e, req));
    return;
  }
  if (STATIC_HOSTS.indexOf(url.hostname) !== -1) e.respondWith(swr(e, req));
});

function race(p, ms) {
  return Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms))]);
}

async function navigate(req) {
  const c = await caches.open(CORE);
  const cached = await c.match(ROOT, { ignoreSearch: true });
  try {
    const res = await (cached ? race(fetch(req), 4500) : fetch(req));
    if (res && res.ok && !res.redirected) c.put(ROOT, res.clone());
    return res;
  } catch (_) {
    if (cached) return cached;
    return new Response('Bạn đang offline và trang chưa được lưu. Hãy mở lại khi có mạng.', {
      status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}

async function swr(e, req) {
  const c = await caches.open(RT);
  const hit = await c.match(req);
  const net = fetch(req).then((res) => {
    if (res && res.status !== 206 && (res.ok || res.type === 'opaque')) {
      c.put(req, res.clone()).then(() => trim(c)).catch(() => {});
    }
    return res;
  }).catch(() => null);
  if (hit) { e.waitUntil(net); return hit; }
  const res = await net;
  return res || Response.error();
}

async function trim(c) {
  const keys = await c.keys();
  for (let i = 0; i < keys.length - MAX_RT; i++) await c.delete(keys[i]);
}

/* Tải sẵn mọi ảnh trong thư mục images/ mà trang nhắc tới (GIF để sau cùng), để lần sau mất mạng vẫn thấy đủ. */
async function warm() {
  try {
    const conn = self.navigator && self.navigator.connection;
    if (conn && conn.saveData) return;
    const html = await (await fetch(ROOT, { cache: 'no-cache' })).text();
    const found = Array.from(new Set(html.match(/images\/[A-Za-z0-9_\-./%]+\.(?:jpe?g|png|webp|avif|svg|gif)/g) || []));
    found.sort((a, b) => (/\.gif$/i.test(a) ? 1 : 0) - (/\.gif$/i.test(b) ? 1 : 0));
    found.push('steam.json');
    const c = await caches.open(RT);
    for (let i = 0; i < found.length; i += 5) {
      await Promise.allSettled(found.slice(i, i + 5).map(async (u) => {
        const req = new Request(new URL(u, ROOT).href);
        if (await c.match(req)) return;
        const r = await fetch(req);
        if (r && r.ok) await c.put(req, r);
      }));
    }
    await trim(c);
  } catch (_) { /* bỏ qua */ }
}
