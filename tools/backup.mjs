// Sao lưu index.html theo NỘI DUNG file, không quan tâm bạn sửa hay đè trực tiếp.
// Mỗi lần chạy: so mã băm với bản sao lưu mới nhất; khác thì lưu thêm một bản có ghi ngày giờ.
//   node tools/backup.mjs                  sao lưu nếu file đã đổi
//   node tools/backup.mjs --list           xem các bản đã lưu
//   node tools/backup.mjs --restore <tên>  khôi phục một bản (bản hiện tại được lưu lại trước)
//   node tools/backup.mjs --keep 60        giữ tối đa 60 bản (mặc định 40)
import { readFileSync, writeFileSync, mkdirSync, readdirSync, copyFileSync, unlinkSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, resolve } from 'node:path';

const args = process.argv.slice(2);
const opt = (n) => { const i = args.indexOf(n); return i < 0 ? null : (args[i + 1] ?? true); };
const root = resolve('.');
const src = join(root, 'index.html');
const dir = join(root, 'backups');
const keep = Math.max(5, parseInt(opt('--keep'), 10) || 40);
const hash = (b) => createHash('sha256').update(b).digest('hex');
const stamp = () => {
  const p = {};
  new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Ho_Chi_Minh', hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
    .formatToParts(new Date()).forEach((x) => { p[x.type] = x.value; });
  return `${p.year}-${p.month}-${p.day}_${p.hour}-${p.minute}-${p.second}`;
};
const list = () => (existsSync(dir) ? readdirSync(dir).filter((f) => /^index_.*\.html$/.test(f)).sort() : []);

mkdirSync(dir, { recursive: true });

if (opt('--list')) {
  const l = list();
  console.log(l.length ? l.join('\n') : 'Chưa có bản sao lưu nào.');
  process.exit(0);
}

if (opt('--restore')) {
  const name = opt('--restore');
  const f = join(dir, String(name));
  if (!existsSync(f)) { console.error('Không thấy bản:', name, '(xem bằng --list)'); process.exit(1); }
  if (existsSync(src)) copyFileSync(src, join(dir, `index_${stamp()}_truoc-khi-khoi-phuc.html`));
  copyFileSync(f, src);
  console.log('Đã khôi phục từ', name);
  process.exit(0);
}

if (!existsSync(src)) { console.error('Không thấy index.html ở', root); process.exit(1); }
const cur = readFileSync(src);
const l = list();
const last = l.length ? readFileSync(join(dir, l[l.length - 1])) : null;
if (last && hash(last) === hash(cur)) {
  console.log('index.html chưa đổi so với bản mới nhất, không cần sao lưu.');
} else {
  const name = `index_${stamp()}.html`;
  writeFileSync(join(dir, name), cur);
  console.log('Đã sao lưu ->', name, `(${(cur.length / 1024).toFixed(0)} KB)`);
}
const all = list();
all.slice(0, Math.max(0, all.length - keep)).forEach((f) => { unlinkSync(join(dir, f)); console.log('Xoá bản cũ:', f); });
