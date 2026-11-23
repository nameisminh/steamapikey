# Ming

Trang cá nhân của Ming: game đang chơi, nhạc hay nghe, góc setup và vài công cụ nhỏ (test bàn phím, chuột, loa, micro, tốc độ gõ).

Xem trang: https://ming-dev.id.vn (bản phụ: https://lmingl.pages.dev)

## Cấu trúc

| Đường dẫn | Dùng để |
|---|---|
| `index.html` | Nội dung trang |
| `assets/site.css` | Toàn bộ giao diện |
| `assets/app.js` | Chức năng chính (nhạc, Góc chơi, menu, đổi màu, ngôn ngữ…) |
| `assets/config.js` | Cấu hình: game, ảnh bìa, liên kết |
| `assets/ascii.js` | Hiệu ứng chữ/ảnh ASCII khi cuộn |
| `music/` | Nhạc nền; danh sách bài ở `music/tracks.js` |
| `images/` | Ảnh |
| `functions/api/` | API chạy trên Cloudflare: `scores.js` (xếp hạng Góc chơi), `checkin.js` (điểm danh) |
| `sw.js` | Cho trang mở được khi mất mạng |
| `reset.html` | Xoá bộ nhớ đệm khi máy bị kẹt ở bản cũ (mở `/reset`) |
| `404.html` | Trang không tìm thấy |
| `_headers` | Cách trình duyệt lưu đệm từng loại file |

Không có bước build: sửa file, đẩy lên GitHub là Cloudflare tự triển khai.

## Thêm nhạc

Mỗi bài là một dòng trong `music/tracks.js`: `t` tên bài, `a` ca sĩ, `src` đường dẫn file. Nhạc nước ngoài thêm `g:'en'` để hiện ở mục Quốc tế.

## Bật bảng xếp hạng online (Góc chơi)

1. Cloudflare Dashboard → **Storage & Databases → KV** → **Create**, đặt tên bất kỳ.
2. Vào dự án trang → **Settings → Bindings** → **Add → KV namespace**: Variable name `CHECKIN`, chọn namespace vừa tạo.
3. Triển khai lại (đẩy một commit bất kỳ).

Chưa làm bước này thì tab "Xếp hạng online" chỉ báo "chưa bật", phần còn lại của trang vẫn chạy bình thường. Điểm do trình duyệt tự gửi nên chỉ chặn được điểm vô lý và gửi dồn dập, không chống gian lận tuyệt đối.

## Quyền riêng tư

Các bài test chạy ngay trên máy người xem. Chỉ khi bấm "Gửi kỷ lục" thì tên và điểm mới được gửi đi. Cài đặt (sáng/tối, màu, ngôn ngữ) lưu trong trình duyệt.

## Ghi chú

Trang không liên kết với Riot Games. League of Legends và ảnh tướng thuộc về Riot Games.
