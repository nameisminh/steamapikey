// Tự ghi giờ "Cập nhật lần cuối" vào index.html (và sitemap.xml) theo giờ Việt Nam.
// Chạy trước khi đưa file lên:  node tools/stamp.mjs
// Có thể truyền đường dẫn thư mục trang nếu không đứng ở gốc:  node tools/stamp.mjs ./
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(process.argv[2] || '.');
const p = {};
new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Ho_Chi_Minh', hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
  .formatToParts(new Date()).forEach((x) => { p[x.type] = x.value; });

const iso = `${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}:${p.second}+07:00`;
const shown = `${p.day}/${p.month}/${p.year.slice(-2)} · ${p.hour}:${p.minute}:${p.second}`;

const f = join(root, 'index.html');
let s = readFileSync(f, 'utf8');
const a = s.replace(/updated:'[^']*'/, `updated:'${iso}'`);
const b = a.replace(/(<span id="upd">Cập nhật lần cuối: )[^<]*(<\/span>)/, `$1${shown}$2`);
if (a === s) { console.error('Không thấy updated:\'...\' trong index.html'); process.exit(1); }
writeFileSync(f, b);
console.log('index.html ->', iso);

const sm = join(root, 'sitemap.xml');
if (existsSync(sm)) {
  const t = readFileSync(sm, 'utf8').replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${p.year}-${p.month}-${p.day}</lastmod>`);
  writeFileSync(sm, t); console.log('sitemap.xml ->', `${p.year}-${p.month}-${p.day}`);
}
