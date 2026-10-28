<div align="center">

# ⚡ MING

**Một trang web nhỏ, một file duy nhất, đủ thứ để chơi.**

Nghe nhạc · Đọc truyện · Xem Ming đang làm gì · Đập phím lấy combo

[**🌐 Xem trực tiếp → lmingl.pages.dev**](https://lmingl.pages.dev)

![HTML](https://img.shields.io/badge/single_file-index.html-000?style=for-the-badge\&logo=html5\&logoColor=white)

![No build](https://img.shields.io/badge/build-none-000?style=for-the-badge)

![No framework](https://img.shields.io/badge/framework-zero-000?style=for-the-badge)

![Offline](https://img.shields.io/badge/offline-ready-000?style=for-the-badge)

![Hosted](https://img.shields.io/badge/host-Cloudflare-000?style=for-the-badge\&logo=cloudflare\&logoColor=F38020)

</div>

---

## 🧠 Đây là gì?

Một góc nhỏ trên mạng để bạn bè biết dạo này Ming chơi gì, dịch gì, nghe gì. Không bán gì, không quảng cáo, ghé xem cho vui.

Toàn bộ trang nằm trong **một file `index.html`**: không framework, không bước build, không npm. Mở lên là chạy, kéo thả lên host là xong.

## 🔥 Có gì hay

|                             |                                                                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 🎮 **Góc chơi**             | Test chuột (bắt lỗi double click), test bàn phím, tốc độ gõ, phản xạ, bắn bia, nhớ dãy. Điểm cao lưu ngay trên máy bạn |
| 💥 **COMBO**                | Bấm chuột, chạm hay gõ phím là chữ COMBO hiện ra, **tối đa x9999**. Càng cao càng to, đổi màu và rung mạnh             |
| 📡 **Trạng thái trực tiếp** | Xem Ming đang làm gì trên Discord, cập nhật theo thời gian thực                                                        |
| 🎵 **Trình phát nhạc**      | Nhạc nền và playlist, bấm nghe ngay tại trang. Trang không bao giờ tự phát nhạc                                        |
| 🌦️ **Thời tiết thật**      | Mưa hoặc tuyết rơi theo thời tiết thật nơi Ming ở. Mặc định tắt, bật bằng một nút ở mục Bản đồ                         |
| 🖼️ **Nút GIF**             | Ẩn hoặc hiện toàn bộ ảnh động bằng một nút (hoặc phím `G`). Ẩn rồi thì GIF cũng không tải, đỡ tốn mạng                 |
| 📴 **Mất mạng vẫn lướt**    | Trang, ảnh và font đã xem được lưu lại, tắt wifi vẫn mở được. Cài được như một app                                     |
| 🌗 **Sáng / Tối**           | Tự theo hệ thống, đổi tay được                                                                                         |
| 🌏 **Hai ngôn ngữ**         | Tiếng Việt và English, đổi bằng một nút                                                                                |
| 🔎 **Tìm nhanh**            | Gõ `/` hoặc `Ctrl + K`                                                                                                 |
| 📈 **Đo FPS**               | Nút FPS ngay trên trang để xem trang chạy mượt cỡ nào                                                                  |

## ⌨️ Phím tắt

|         Phím        | Làm gì                      |
| :-----------------: | --------------------------- |
| `/` hoặc `Ctrl + K` | Tìm nhanh                   |
|         `T`         | Đổi giao diện sáng / tối    |
|         `M`         | Tắt / bật hiệu ứng          |
|         `G`         | Ẩn / hiện GIF               |
|         `P`         | Bật / tắt nhạc              |
|         `R`         | Một điều ngẫu nhiên về Ming |
|         `H`         | Về đầu trang                |
|         `F`         | Hiện / ẩn FPS               |

## 🚀 Nhẹ và mượt

Trang được chăm cho cả máy yếu:

- **Tự nhận máy yếu** (ít nhân CPU, ít RAM, bật tiết kiệm dữ liệu) rồi tắt bớt hiệu ứng và lớp kính mờ.
- **Tự tắt hiệu ứng** khi đo thấy FPS thấp kéo dài.
- **Giới hạn FPS** cho mọi hiệu ứng JavaScript, màn hình 120Hz hay 144Hz cũng không đốt pin.
- Hiệu ứng ngoài màn hình tự tạm dừng.
- Tôn trọng `prefers-reduced-motion`.
- Ảnh tải lười, font tải không chặn trang.
- Dữ liệu thời tiết chỉ tải khi bạn bật hiệu ứng hoặc cuộn gần tới mục Bản đồ.
- Combo chỉ ghi `localStorage` khi hết chuỗi, không ghi mỗi lần bấm.

## 📴 Chế độ offline

Trang có một service worker (`sw.js`) lưu lại những gì bạn đã xem:

- **Trang chính:** có mạng thì luôn lấy bản mới nhất, mất mạng thì mở bản đã lưu.
- **Ảnh, font, `steam.json`:** hiện ngay bản đã lưu, tải bản mới ngầm phía sau.
- **Nhạc, Discord trực tiếp, lời bài hát, bản đồ:** vẫn cần mạng.
- Muốn ép mọi máy xoá cache cũ thì đổi `VERSION` trong `sw.js`.
- Chỉ hoạt động khi trang chạy qua `https` (hoặc `localhost`), mở thẳng file `index.html` thì không có.

## 🛠️ Chạy thử

```bash
# cách 1: mở thẳng index.html (chưa có chế độ offline)
# cách 2: chạy server tĩnh, có đủ tính năng
npx serve .
# hoặc
python3 -m http.server 8000
```

## 🗂️ Cấu trúc

```
.
├── index.html                 # toàn bộ trang: HTML + CSS + JS
├── sw.js                      # service worker (chế độ offline)
├── manifest.webmanifest       # để cài trang như một app
├── icon-192.png  icon-512.png  icon-512-maskable.png  apple-touch-icon.png
├── _headers                   # cache và bảo mật cho Cloudflare Pages
├── robots.txt  sitemap.xml
├── steam.json                 # dữ liệu Steam do tools/steam-sync.mjs ghi
├── images/                    # ảnh, GIF, og.jpg (1200×630)
├── audio/  music/             # nhạc: bỏ file vào rồi tải lại trang
├── tools/
│   ├── steam-sync.mjs         # cập nhật steam.json
│   ├── stamp.mjs              # tự ghi giờ "Cập nhật lần cuối"
│   └── backup.mjs             # sao lưu index.html
└── backups/                   # các bản sao lưu (do backup.mjs tạo)
```

## ✏️ Tuỳ chỉnh nhanh

- **Mức combo tối đa, thời gian giữ combo:** biến `MAX` và `IDLE` trong script `COMBO`. Tên các bậc ở mảng `TIERS`.
- **Giới hạn FPS:** biến `window.FPS_CAP` ở đầu file.
- **Vị trí thời tiết:** `LAT`, `LON` trong script thời tiết. Xem thử không cần chờ: thêm `?wx=rain` hoặc `?wx=snow` vào đường dẫn.
- **Xem trước khi dán link (Discord, Facebook, Zalo...):** các thẻ `og:` trong `<head>`. `og:image` phải là link đầy đủ bắt đầu bằng `https://`. Đổi tên miền thì sửa lại mọi chỗ có `lmingl.pages.dev` (cả `canonical`, `robots.txt`, `sitemap.xml`). Discord nhớ link rất lâu, sửa xong hãy dán kèm `?v=2`.
- **Trạng thái Discord:** điền Discord ID vào `ME.discordId` và vào server [Lanyard](https://discord.gg/lanyard) bằng đúng tài khoản đó.

## 🔄 Mỗi lần cập nhật trang

```bash
node tools/backup.mjs   # lưu bản cũ trước khi đè
node tools/stamp.mjs    # ghi giờ "Cập nhật lần cuối" mới
```

Rồi đưa thư mục lên Cloudflare Pages. Cả hai lệnh chỉ đọc nội dung file nên dùng được dù bạn sửa bên trong hay đè trực tiếp `index.html`.

Các lệnh phụ của backup: `--list` xem các bản đã lưu, `--restore <tên>` khôi phục một bản (bản hiện tại được lưu lại trước), `--keep 60` giữ tối đa 60 bản (mặc định 40).

## ☁️ Đưa lên mạng

Vì chỉ là file tĩnh nên host ở đâu cũng được. Trang này chạy trên Cloudflare, miễn phí. Kéo thả thư mục lên Cloudflare Pages là xong.

## 🔒 Quyền riêng tư

Mọi bài test chạy ngay trên máy bạn, không gửi đi đâu. Điểm cao và cài đặt chỉ lưu trong trình duyệt của bạn.

## ⚖️ Ghi chú

Đây là trang của người hâm mộ, không liên kết với Riot Games. League of Legends và ảnh tướng thuộc Riot Games.

---
