#!/usr/bin/env node
/* ============================================================
   THÊM NHẠC CHO TRANG  (không cần cài thêm gì, chỉ cần Node.js)

   Cách dùng nhanh nhất:
     1) Bỏ file nhạc vào thư mục music/ (tên gì cũng được, có dấu cũng được)
     2) Bấm đúp them-nhac.bat   (hoặc chạy: node tools/add-music.mjs)
     -> Tool tự đọc tên bài + ca sĩ trong file, đổi tên file cho gọn,
        rồi ghi vào danh sách riêng: music/tracks.js  (index.html không bị đụng tới).

   Kéo thả: kéo file mp3 (hoặc cả thư mục) thả lên them-nhac.bat,
   tool tự chép vào music/ rồi thêm luôn.

   Các lệnh khác:
     node tools/add-music.mjs --list            xem danh sách hiện có
     node tools/add-music.mjs --remove 5        bỏ bài số 5 (file được cất sang music/_da-bo/, không mất)
     node tools/add-music.mjs --remove "anh sai"  bỏ bài có chữ này trong tên
     node tools/add-music.mjs --clean           bỏ các bài mà file không còn trong music/
     node tools/add-music.mjs --yes             không hỏi gì, dùng luôn tên đoán được
   ============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HTML = path.join(ROOT, 'index.html');
const MUSIC = path.join(ROOT, 'music');
const EXT = /\.(mp3|m4a|aac|ogg|opus|wav|flac)$/i;

/* ---------- tiện ích ---------- */
const noAccent = (s) => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, 'd');
const slug = (s) =>
  noAccent(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80).replace(/-+$/, '') || 'bai-hat';
const isSafeName = (n) => /^[a-z0-9][a-z0-9._-]*$/.test(n);
const titleCase = (s) => s.replace(/\S+/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
const norm = (s) => noAccent(s).toLowerCase();

/* ---------- đọc thẻ ID3 (mp3) ---------- */
const syncsafe = (b, o) => ((b[o] & 127) << 21) | ((b[o + 1] & 127) << 14) | ((b[o + 2] & 127) << 7) | (b[o + 3] & 127);

function decodeText(buf, enc) {
  if (!buf.length) return '';
  if (enc === 1 || enc === 2) {
    let b = buf, be = enc === 2;
    if (b[0] === 0xff && b[1] === 0xfe) b = b.subarray(2);
    else if (b[0] === 0xfe && b[1] === 0xff) { b = b.subarray(2); be = true; }
    b = Buffer.from(b.subarray(0, b.length - (b.length % 2)));
    return (be ? b.swap16() : b).toString('utf16le');
  }
  return buf.toString(enc === 3 ? 'utf8' : 'latin1');
}
const frameText = (d) =>
  decodeText(d.subarray(1), d[0]).split('\u0000').map((x) => x.trim()).filter(Boolean).join(', ');

function readTags(file) {
  const out = { title: '', artist: '' };
  if (!/\.mp3$/i.test(file)) return out;
  let fd;
  try {
    fd = fs.openSync(file, 'r');
    const h = Buffer.alloc(10);
    fs.readSync(fd, h, 0, 10, 0);
    if (h.toString('latin1', 0, 3) === 'ID3') {
      const ver = h[3], size = syncsafe(h, 6);
      if (size > 0 && size < 32 * 1024 * 1024) {
        const tag = Buffer.alloc(size);
        fs.readSync(fd, tag, 0, size, 10);
        let o = 0;
        if (h[5] & 0x40 && ver >= 3) o = ver === 4 ? syncsafe(tag, 0) : tag.readUInt32BE(0) + 4;
        const hdr = ver === 2 ? 6 : 10;
        while (o + hdr <= size) {
          const id = tag.toString('latin1', o, o + (ver === 2 ? 3 : 4));
          if (!id.trim() || id.charCodeAt(0) === 0) break;
          const sz = ver === 2 ? (tag[o + 3] << 16) | (tag[o + 4] << 8) | tag[o + 5]
            : ver === 4 ? syncsafe(tag, o + 4) : tag.readUInt32BE(o + 4);
          if (sz <= 0 || o + hdr + sz > size) break;
          const data = tag.subarray(o + hdr, o + hdr + sz);
          if (id === 'TIT2' || id === 'TT2') out.title = frameText(data);
          else if (id === 'TPE1' || id === 'TP1') out.artist = frameText(data);
          else if ((id === 'TPE2' || id === 'TP2') && !out.artist) out.artist = frameText(data);
          o += hdr + sz;
        }
      }
    }
    if (!out.title) { /* ID3v1 ở cuối file (chỉ là dự phòng, thường không có dấu) */
      const st = fs.fstatSync(fd);
      if (st.size > 128) {
        const t = Buffer.alloc(128);
        fs.readSync(fd, t, 0, 128, st.size - 128);
        if (t.toString('latin1', 0, 3) === 'TAG') {
          out.title = t.toString('latin1', 3, 33).replace(/\u0000.*$/s, '').trim();
          if (!out.artist) out.artist = t.toString('latin1', 33, 63).replace(/\u0000.*$/s, '').trim();
        }
      }
    }
  } catch { /* đọc lỗi thì thôi, dùng tên file */ }
  finally { if (fd !== undefined) try { fs.closeSync(fd); } catch {} }
  return out;
}

/* ---------- đoán tên bài từ tên file ---------- */
function guessFromName(base) {
  let s = base.replace(/_+/g, ' ')
    .replace(/\s*[(\[][^)\]]*(official|lyric|audio|video|mv|m\/v|visualizer|4k|hd|full|version)[^)\]]*[)\]]/gi, '')
    .replace(/\s*\|.*$/, '').replace(/\s+/g, ' ').trim();
  if (!/\s/.test(s) && /-/.test(s) && s === s.toLowerCase() && /^[\x00-\x7f]+$/.test(s)) s = titleCase(s.replace(/-+/g, ' '));
  const i = s.indexOf(' - ');
  return i > 0 ? { title: s.slice(0, i).trim(), artist: s.slice(i + 3).trim() } : { title: s, artist: '' };
}

/* ---------- đọc / ghi danh sách: music/tracks.js ---------- */
const TJS = path.join(MUSIC, 'tracks.js');
const HEAD = `/* DANH SÁCH NHẠC NỀN — tool tools/add-music.mjs (them-nhac.bat) tự cập nhật file này.
   Bạn cũng có thể sửa tay: mỗi bài một dòng, t = tên bài, a = ca sĩ, src = đường dẫn file.
   Muốn có lời bài hát thì thêm lrc:'music/ten-file.lrc' hoặc q:'tên bài ca sĩ' vào dòng bài đó. */
`;
const q = (v) => typeof v === 'string'
  ? "'" + v.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r?\n/g, ' ') + "'" : JSON.stringify(v);
function entryLine(e) {
  const keys = ['t', 'a', 'src', ...Object.keys(e).filter((k) => !['t', 'a', 'src'].includes(k))];
  return '  {' + keys.filter((k) => e[k] !== undefined).map((k) => k + ':' + q(e[k])).join(',') + '}';
}
const render = (list) => HEAD + 'window.TRACKS=[\n' + list.map(entryLine).join(',\n') + '\n];\n';

function loadList() {
  if (fs.existsSync(TJS)) {
    const w = {};
    try { new Function('window', fs.readFileSync(TJS, 'utf8'))(w); }
    catch (e) { throw new Error('music/tracks.js đang bị lỗi cú pháp: ' + e.message + '\n  (sửa lại, hoặc đổi tên file đó rồi chạy lại để tạo mới)'); }
    if (!Array.isArray(w.TRACKS)) throw new Error('music/tracks.js phải có dạng: window.TRACKS=[ ... ];');
    return { list: w.TRACKS, from: 'js' };
  }
  /* lần đầu: nếu index.html bản cũ còn danh sách TRACKS thì chuyển sang file riêng */
  try {
    const m = fs.readFileSync(HTML, 'utf8').match(/var TRACKS=\[([\s\S]*?)\r?\n[ \t]*\];/);
    if (m) { const l = new Function('return [' + m[1] + '\n]')(); if (l.length) return { list: l, from: 'html' }; }
  } catch { /* không có thì thôi */ }
  return { list: [], from: 'new' };
}

/* ---------- hỏi người dùng ---------- */
const interactive = process.stdin.isTTY && process.stdout.isTTY;
let rl = null;
function ask(question, def) {
  return new Promise((res) => {
    rl ||= readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(question, (a) => res(a.trim() || def));
  });
}

/* ---------- main ---------- */
const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const val = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : undefined; };
const YES = flag('--yes') || flag('-y') || !interactive;

if (flag('--help') || flag('-h')) {
  console.log(fs.readFileSync(fileURLToPath(import.meta.url), 'utf8').split('\n').slice(1, 22).join('\n').replace(/^   ?/gm, ''));
  process.exit(0);
}
const { list: old, from } = loadList();
let list = old.map((e) => ({ ...e, t: String(e.t ?? '').trim(), a: String(e.a ?? '').trim() }));
const log = [];
if (from === 'html') log.push('• Chuyển danh sách nhạc từ index.html sang music/tracks.js (lần đầu).');

/* bỏ bài trùng (cùng file) */
{
  const seen = new Set(), keep = [];
  for (const e of list) {
    const k = String(e.src).toLowerCase();
    if (seen.has(k)) { log.push('• Bỏ bài bị trùng: ' + e.t); continue; }
    seen.add(k); keep.push(e);
  }
  list = keep;
}

if (flag('--list')) {
  list.forEach((e, i) => console.log(String(i + 1).padStart(3) + '. ' + e.t + (e.a ? '  —  ' + e.a : '')));
  console.log('\nTổng: ' + list.length + ' bài');
  process.exit(0);
}

if (flag('--remove')) {
  const key = val('--remove');
  if (!key) { console.error('Thiếu số hoặc từ khoá. Ví dụ: --remove 5'); process.exit(1); }
  let hit;
  if (/^\d+$/.test(key)) hit = list[+key - 1] ? [list[+key - 1]] : [];
  else hit = list.filter((e) => norm(e.t + ' ' + e.a + ' ' + e.src).includes(norm(key)));
  if (hit.length !== 1) {
    console.error(hit.length ? 'Có ' + hit.length + ' bài khớp, hãy gõ cụ thể hơn hoặc dùng số thứ tự (xem bằng --list):' : 'Không có bài nào khớp "' + key + '".');
    hit.forEach((e) => console.error('  - ' + e.t));
    process.exit(1);
  }
  list = list.filter((e) => e !== hit[0]);
  /* chuyển file sang music/_da-bo/ (không xoá hẳn) để lần quét sau không tự thêm lại */
  const f = path.join(ROOT, String(hit[0].src));
  let moved = '';
  if (fs.existsSync(f) && path.dirname(f) === MUSIC) {
    fs.mkdirSync(path.join(MUSIC, '_da-bo'), { recursive: true });
    fs.renameSync(f, path.join(MUSIC, '_da-bo', path.basename(f)));
    moved = '  (file được cất vào music/_da-bo/, muốn dùng lại thì kéo ra)';
  }
  log.push('✓ Đã bỏ khỏi danh sách: ' + hit[0].t + moved);
} else {
  fs.mkdirSync(MUSIC, { recursive: true });

  /* 1) gom file: đối số dòng lệnh (file hoặc thư mục) + mọi file trong music/ */
  const inputs = args.filter((a, i) => !a.startsWith('-') && args[i - 1] !== '--remove');
  const incoming = [];
  for (const p of inputs) {
    const abs = path.resolve(p);
    if (!fs.existsSync(abs)) { log.push('✗ Không thấy: ' + p); continue; }
    if (fs.statSync(abs).isDirectory()) {
      for (const f of fs.readdirSync(abs)) if (EXT.test(f)) incoming.push(path.join(abs, f));
    } else if (EXT.test(abs)) incoming.push(abs);
    else log.push('✗ Bỏ qua (không phải file nhạc): ' + p);
  }
  for (const f of fs.readdirSync(MUSIC)) if (EXT.test(f)) incoming.push(path.join(MUSIC, f));

  const used = new Set(list.map((e) => String(e.src).toLowerCase()));
  const added = [];
  for (const file of [...new Set(incoming)]) {
    const original = path.basename(file).replace(EXT, '');
    const ext = path.extname(file).toLowerCase();
    const inMusic = path.dirname(file) === MUSIC;

    /* tên file đích: gọn, không dấu, không khoảng trắng */
    let name = path.basename(file);
    let target = path.join(MUSIC, name);
    if (!(inMusic && isSafeName(name))) {
      const base = slug(original);
      name = base + ext; target = path.join(MUSIC, name);
      for (let n = 2; fs.existsSync(target) && !(fs.statSync(target).size === fs.statSync(file).size) && target !== file; n++) {
        name = base + '-' + n + ext; target = path.join(MUSIC, name);
      }
    }
    const src = 'music/' + name;
    if (used.has(src.toLowerCase())) { /* đã có trong danh sách */
      if (!inMusic && !fs.existsSync(target)) fs.copyFileSync(file, target);
      continue;
    }
    /* đọc thẻ trước khi đổi tên/chép */
    const tg = readTags(file);
    if (target !== file) {
      if (inMusic) fs.renameSync(file, target); else if (!fs.existsSync(target)) fs.copyFileSync(file, target);
    }
    let title = tg.title, artist = tg.artist, from = 'thẻ';
    if (!title) {
      const g = guessFromName(original);
      title = g.title; artist = artist || g.artist; from = 'tên file';
      if (!YES) {
        const line = await ask(`\n♪ ${name}\n  Chưa có tên bài trong file. Gõ "Tên bài - Ca sĩ" (Enter = giữ gợi ý)\n  [${title}${artist ? ' - ' + artist : ''}]: `, '');
        if (line) {
          const i = line.indexOf(' - ');
          title = i > 0 ? line.slice(0, i).trim() : line;
          artist = i > 0 ? line.slice(i + 3).trim() : '';
          from = 'bạn nhập';
        }
      }
    }
    list.push({ t: title, a: artist, src });
    used.add(src.toLowerCase());
    added.push({ title, artist, from, renamed: name !== path.basename(file) ? name : '' });
  }
  if (rl) rl.close();
  added.forEach((x) => log.push('✓ Thêm: ' + x.title + (x.artist ? '  —  ' + x.artist : '') + '   (' + x.from + ')' + (x.renamed ? '   → file: ' + x.renamed : '')));
  if (!added.length && !incoming.length) log.push('Không có file nhạc nào trong music/. Hãy bỏ file .mp3 vào đó rồi chạy lại.');
  else if (!added.length) log.push('Không có bài mới (tất cả file trong music/ đã có trong danh sách).');

  /* 2) kiểm tra file thiếu */
  const missing = list.filter((e) => !fs.existsSync(path.join(ROOT, String(e.src))));
  if (missing.length) {
    if (flag('--clean')) {
      list = list.filter((e) => !missing.includes(e));
      missing.forEach((e) => log.push('• Bỏ vì không còn file: ' + e.t));
    } else {
      log.push('\n⚠ ' + missing.length + ' bài có trong danh sách nhưng chưa thấy file (trang sẽ tự bỏ qua):');
      missing.slice(0, 8).forEach((e) => log.push('   - ' + e.t + '  [' + e.src + ']'));
      if (missing.length > 8) log.push('   … và ' + (missing.length - 8) + ' bài nữa');
      log.push('   Muốn xoá hẳn khỏi danh sách thì chạy lại với --clean');
    }
  }
}

/* ghi music/tracks.js (có bản sao lưu) */
fs.mkdirSync(MUSIC, { recursive: true });
const next = render(list);
const prev = fs.existsSync(TJS) ? fs.readFileSync(TJS, 'utf8') : null;
if (next !== prev) {
  if (prev !== null) fs.copyFileSync(TJS, TJS + '.bak');
  fs.writeFileSync(TJS, next, 'utf8');
  log.push('\n✔ Đã cập nhật music/tracks.js (' + list.length + ' bài).');
} else {
  log.push('\nmusic/tracks.js giữ nguyên (' + list.length + ' bài).');
}
try {
  if (!fs.readFileSync(HTML, 'utf8').includes('music/tracks.js'))
    log.push('⚠ index.html của bạn chưa nạp music/tracks.js. Hãy dùng bản index.html mới để trang đọc được danh sách này.');
} catch { /* không thấy index.html cũng không sao */ }
console.log(log.join('\n'));
