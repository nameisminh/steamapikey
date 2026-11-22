# Bật lưu bút (Cloudflare Pages + D1, miễn phí)

Trang đã có sẵn khung Lưu bút. Khi chưa bật phần dưới đây, khung tự khoá và hiện "Lưu bút sắp mở".

## 1. Tạo cơ sở dữ liệu D1
Cloudflare Dashboard → **Storage & Databases → D1** → **Create** → đặt tên `ming-guestbook`.
Mở database vừa tạo → tab **Console** → dán toàn bộ nội dung file `guestbook.sql` → **Execute**.

## 2. Gắn D1 và đặt SALT cho dự án Pages
Dashboard → **Workers & Pages** → chọn dự án của trang → **Settings**:
- **Bindings → Add → D1 database**: Variable name `DB`, chọn `ming-guestbook`.
- **Variables and Secrets → Add**: tên `SALT`, giá trị là một chuỗi ngẫu nhiên bất kỳ (bấm **Encrypt**).

## 3. Đưa code lên
Tải lên cả thư mục, giữ đúng cấu trúc:
```
index.html
404.html
functions/api/guestbook.js
```
Cloudflare Pages tự biến `functions/api/guestbook.js` thành đường dẫn `/api/guestbook`.

## 4. Duyệt lời nhắn
Lời nhắn mới ở trạng thái **chờ duyệt** (không hiện trên trang). Trong tab **Console** của D1:

Xem lời nhắn đang chờ:
```sql
SELECT id, name, msg, created FROM guestbook WHERE approved = 0 ORDER BY id DESC;
```
Duyệt một lời nhắn (đổi 12 thành id thật):
```sql
UPDATE guestbook SET approved = 1 WHERE id = 12;
```
Xoá spam:
```sql
DELETE FROM guestbook WHERE id = 12;
```

## Chống spam có sẵn
- Ô bẫy ẩn: bot điền vào là bị bỏ qua.
- Tên tối đa 40 ký tự, lời nhắn tối đa 500, tên không được chứa link.
- Mỗi người (theo mã băm IP, không lưu IP thật) gửi tối đa 1 lời nhắn/phút và 5 lời nhắn/ngày.
- Chỉ nhận lời nhắn gửi từ chính trang của bạn.
- Không gì hiện lên trang khi bạn chưa duyệt.

# Thống kê lượt xem không cookie
Dashboard → **Workers & Pages** → dự án → **Metrics → Web Analytics → Enable**. Cloudflare tự chèn mã, không cần sửa `index.html`.
(Hoặc lấy token ở **Analytics & Logs → Web Analytics** rồi dán vào biến `CF_BEACON` trong `index.html`. Người xem bật Do Not Track sẽ không bị đếm.)
