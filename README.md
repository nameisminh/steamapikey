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
| `sw.js` | Cho trang mở được khi mất mạng |
| `reset.html` | Xoá bộ nhớ đệm khi máy bị kẹt ở bản cũ (mở `/reset`) |
| `404.html` | Trang không tìm thấy |
| `_headers` | Cách trình duyệt lưu đệm từng loại file |

Không có bước build: sửa file, đẩy lên GitHub là Cloudflare tự triển khai.

## Thêm nhạc

Cách dễ nhất: mở `tools/them-nhac.html` bằng Chrome/Edge (bấm đúp), chọn thư mục web, kéo thả mp3 vào rồi bấm Lưu. Tool tự đọc tên bài và ca sĩ trong file, đổi tên file cho gọn, chép vào `music/`, ghi `music/tracks.js`, báo bài trùng, và có tab làm lời `.lrc` chạy theo nhạc. Xong thì commit và đẩy lên GitHub. (`tools/` không bị đưa lên web.)

Sửa tay cũng được: mỗi bài là một dòng trong `music/tracks.js`: `t` tên bài, `a` ca sĩ, `src` đường dẫn file. Nhạc nước ngoài thêm `g:'en'` để hiện ở mục Quốc tế. Lời bài hát là file `.lrc` cùng tên với file mp3.

## Quyền riêng tư

Các bài test chạy ngay trên máy người xem, kỷ lục chỉ lưu trên máy đó, không gửi đi đâu. Cài đặt (sáng/tối, màu, ngôn ngữ) lưu trong trình duyệt.

## Ghi chú

Trang không liên kết với Riot Games. League of Legends và ảnh tướng thuộc về Riot Games.
