<div align="center">

# ⚡ MING

**Một trang web nhỏ, một file duy nhất, đủ thứ để chơi.**

Nghe nhạc · Đọc truyện · Xem Ming đang làm gì · Đập phím lấy combo

[**🌐 Xem trực tiếp → lmingl.pages.dev**](https://lmingl.pages.dev)

![HTML](https://img.shields.io/badge/single_file-index.html-000?style=for-the-badge&logo=html5&logoColor=white)
![No build](https://img.shields.io/badge/build-none-000?style=for-the-badge)
![No framework](https://img.shields.io/badge/framework-zero-000?style=for-the-badge)
![Hosted](https://img.shields.io/badge/host-Cloudflare-000?style=for-the-badge&logo=cloudflare&logoColor=F38020)

</div>

---

## 🧠 Đây là gì?

Trang cá nhân để bạn bè biết dạo này mình chơi gì, dịch gì, nghe gì. Không bán gì cả, ghé xem cho vui.

Toàn bộ trang nằm trong **một file `index.html`**. Không framework, không bước build, không npm. Mở file lên là chạy.

## 🔥 Có gì hay

| | |
|---|---|
| 🎮 **Góc chơi** | Test chuột (bắt lỗi double click), test bàn phím, test tốc độ gõ, phản xạ, bắn bia, nhớ dãy. Điểm cao lưu ngay trên máy bạn |
| 💥 **COMBO** | Bấm chuột, chạm hay gõ phím là chữ COMBO hiện ra, **tối đa x9999**. Càng cao càng to, đổi màu và rung mạnh |
| 📡 **Trạng thái trực tiếp** | Xem Ming đang làm gì trên Discord, cập nhật theo thời gian thực |
| 🎵 **Trình phát nhạc** | Nhạc nền và playlist, bấm nghe ngay tại trang |
| 🌗 **Sáng / Tối** | Tự theo hệ thống, đổi tay được |
| 🌏 **Hai ngôn ngữ** | Tiếng Việt và English, đổi bằng một nút |
| 🔎 **Tìm nhanh** | Gõ `/` hoặc `Ctrl + K` |
| 📈 **Đo FPS** | Nút FPS ngay trên trang để xem trang chạy mượt cỡ nào |

## ⌨️ Phím tắt

| Phím | Làm gì |
|:---:|---|
| `/` hoặc `Ctrl + K` | Tìm nhanh |
| `T` | Đổi giao diện sáng / tối |
| `M` | Tắt / bật hiệu ứng |
| `P` | Bật / tắt nhạc |
| `R` | Một điều ngẫu nhiên về Ming |
| `F` | Hiện / ẩn FPS |

## 🚀 Nhẹ và mượt

Trang được chăm cho cả máy yếu:

- **Tự nhận máy yếu** (ít nhân CPU, ít RAM, bật tiết kiệm dữ liệu) rồi tắt bớt hiệu ứng.
- **Tự tắt hiệu ứng** khi đo thấy FPS thấp kéo dài.
- **Giới hạn FPS** cho mọi hiệu ứng JavaScript, màn hình 120Hz hay 144Hz cũng không bị đốt pin.
- Tôn trọng `prefers-reduced-motion`.
- Ảnh tải lười (lazy-load), font tải không chặn trang.
- Combo ghi `localStorage` chỉ khi hết chuỗi, không ghi mỗi lần bấm.

## 🛠️ Chạy thử

```bash
# cách 1: mở thẳng
mở index.html bằng trình duyệt

# cách 2: chạy server tĩnh
npx serve .
# hoặc
python3 -m http.server 8000
```

## 🗂️ Cấu trúc

```
.
├── index.html        # toàn bộ trang: HTML + CSS + JS
├── images/
│   └── og.jpg        # ảnh xem trước khi dán link (1200×630)
└── music/            # bỏ file nhạc vào đây rồi tải lại trang
```

## ✏️ Tuỳ chỉnh nhanh

- **Mức combo tối đa, thời gian giữ combo:** biến `MAX` và `IDLE` trong script `COMBO`. Tên các bậc nằm ở mảng `TIERS`.
- **Giới hạn FPS:** biến `window.FPS_CAP` ở đầu file.
- **Xem trước khi dán link (Discord, Facebook, Zalo...):** các thẻ `og:` trong `<head>`. `og:image` phải là link đầy đủ bắt đầu bằng `https://`. Nếu đổi tên miền thì sửa lại các thẻ có `lmingl.pages.dev`. Discord nhớ link rất lâu, sửa xong hãy dán kèm `?v=2`.
- **Trạng thái Discord:** điền Discord ID vào biến `ME.discordId` và vào server [Lanyard](https://discord.gg/lanyard) bằng đúng tài khoản đó.

## ☁️ Đưa lên mạng

Vì chỉ là file tĩnh nên host ở đâu cũng được. Trang này đang chạy trên Cloudflare, miễn phí. Kéo thả thư mục lên Cloudflare Pages là xong.

## 🔒 Quyền riêng tư

Mọi bài test chạy ngay trên máy bạn, không gửi đi đâu. Điểm cao và cài đặt chỉ lưu trong trình duyệt của bạn.

## ⚖️ Ghi chú

Đây là trang của người hâm mộ, không liên kết với Riot Games. League of Legends và ảnh tướng thuộc Riot Games.

---

<div align="center">

Làm bằng tay, lần thứ 3. 🖤

</div>
