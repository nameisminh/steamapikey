// Cập nhật steam.json từ Steam. Cần Node 18 trở lên, không cần cài gói nào.
//
//   STEAM_API_KEY=xxxx node tools/steam-sync.mjs            (khuyên dùng, dữ liệu chính xác)
//   node tools/steam-sync.mjs                               (không có key: đọc trang hồ sơ, kém bền hơn)
//
// Lấy key miễn phí ở https://steamcommunity.com/dev/apikey
// Hồ sơ phải để công khai: Profile > Edit Profile > Privacy Settings
// (Profile = Public, Game details = Public).
//
// Trường nào không lấy được thì giữ giá trị cũ trong steam.json (ví dụ "achievements"
// chỉ có khi đọc trang hồ sơ, bạn có thể sửa tay).

import { readFile, writeFile } from 'node:fs/promises';

const ID = process.argv[2] || process.env.STEAM_ID || '76561199474355109';
const KEY = process.env.STEAM_API_KEY;
const OUT = new URL('../steam.json', import.meta.url);
const API = 'https://api.steampowered.com';

async function getJson(url) {
  const r = await fetch(url, { headers: { 'user-agent': 'steam-sync' } });
  if (!r.ok) throw new Error(`${r.status} ${url.replace(/key=[^&]+/, 'key=***')}`);
  return r.json();
}

async function viaApi() {
  const q = `key=${KEY}&steamid=${ID}&format=json`;
  const [sum, lvl, owned, recent, badges] = await Promise.all([
    getJson(`${API}/ISteamUser/GetPlayerSummaries/v2/?key=${KEY}&steamids=${ID}`),
    getJson(`${API}/IPlayerService/GetSteamLevel/v1/?${q}`),
    getJson(`${API}/IPlayerService/GetOwnedGames/v1/?${q}&include_played_free_games=1`),
    getJson(`${API}/IPlayerService/GetRecentlyPlayedGames/v1/?${q}`),
    getJson(`${API}/IPlayerService/GetBadges/v1/?${q}`),
  ]);
  const p = sum.response?.players?.[0] || {};
  const games = recent.response?.games || [];
  const minutes = games.reduce((a, g) => a + (g.playtime_2weeks || 0), 0);
  return {
    name: p.personaname,
    avatar: p.avatarfull,
    url: p.profileurl,
    level: lvl.response?.player_level,
    games: owned.response?.game_count,
    badges: badges.response?.badges?.length,
    hours2w: games.length || minutes ? Math.round(minutes / 6) / 10 : 0,
    recent: games.slice(0, 5).map((g) => ({
      n: g.name,
      h: Math.round(((g.playtime_forever || 0) / 60) * 10) / 10,
      id: g.appid,
    })),
  };
}

async function viaPage() {
  const r = await fetch(`https://steamcommunity.com/profiles/${ID}/?l=english`, {
    headers: { 'user-agent': 'Mozilla/5.0 (steam-sync)' },
  });
  if (!r.ok) throw new Error(`profile page ${r.status}`);
  const html = await r.text();
  const num = (m) => (m ? Number(m[1].replace(/[,.\s]/g, '')) : undefined);
  const out = {
    name: html.match(/<span class="actual_persona_name">([^<]+)</)?.[1]?.trim(),
    avatar: html.match(/<meta property="og:image" content="([^"]+)"/)?.[1],
    level: num(html.match(/class="friendPlayerLevelNum">(\d+)</)),
    games: num(html.match(/\/games\/\?tab=all"[^>]*>\s*<span class="count_link_label">Games<\/span>\s*(?:&nbsp;)?\s*<span class="profile_count_link_total">\s*([\d,]+)/)),
    badges: num(html.match(/\/badges\/?"[^>]*>\s*<span class="count_link_label">Badges<\/span>\s*(?:&nbsp;)?\s*<span class="profile_count_link_total">\s*([\d,]+)/)),
  };
  const h = html.match(/([\d.,]+) hrs past 2 weeks/);
  if (h) out.hours2w = Number(h[1].replace(/,/g, ''));
  return out;
}

let old = {};
try { old = JSON.parse(await readFile(OUT, 'utf8')); } catch {}

let fresh;
try {
  fresh = KEY ? await viaApi() : await viaPage();
  if (!KEY) console.warn('Không có STEAM_API_KEY: đang đọc trang hồ sơ, có thể thiếu một số trường.');
} catch (e) {
  console.error('Lấy dữ liệu thất bại, giữ nguyên steam.json:', e.message);
  process.exit(1);
}

const clean = Object.fromEntries(Object.entries(fresh).filter(([, v]) => v !== undefined && v !== null && v !== '' && !Number.isNaN(v)));
if (!clean.level && !clean.games && !clean.name) {
  console.error('Không đọc được gì từ Steam (hồ sơ có đang công khai không?). Giữ nguyên steam.json.');
  process.exit(1);
}
const data = { ...old, ...clean, updated: new Date().toISOString() };
await writeFile(OUT, JSON.stringify(data, null, 2) + '\n');
console.log('Đã ghi steam.json:', data.name, 'level', data.level, '·', data.games, 'game');
