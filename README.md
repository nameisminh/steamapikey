# Trang của Ming

Trang tĩnh, không cần build. Mở `index.html` là chạy (một số phần như `steam.json` cần chạy qua host hoặc `npx serve`).

## Cấu trúc thư mục

```
index.html            trang chính
404.html              trang báo lỗi khi gõ sai link
steam.json            số liệu Steam (do tools/steam-sync.mjs ghi)
tools/steam-sync.mjs  script cập nhật steam.json
music/                file nhạc: bai-01.mp3 ... bai-10.mp3
images/
  avatar.jpg          ảnh của bạn (vuông)
  og.jpg              ảnh khi dán link (1200x630)
  lol-share.jpg       ảnh LoL ở mục Game
  cover-game.jpg, cover-truyen.jpg, cover-nhac.jpg, cover-phim.jpg
  photo-1.jpg ... photo-10.jpg      mục "Vài tấm ảnh"
  trail-1.jpg ... trail-6.jpg       ảnh chạy theo chuột ở đồng hồ
  games/  lol.jpg, delta-force.jpg, poe2.jpg
  mod/    minecraft.jpg, stardew-valley.jpg
  truyen/ truyen-1.jpg ...
  nhac/   vietnam-songs.jpg, listen-and-feel.jpg, bai-hat-1.jpg
  phim/   phim-1.jpg ...
  idol/   son-tung.jpg, den-vau.jpg, vu.jpg, hieuthuhai.jpg, mck.jpg,
          vu-cat-tuong.jpg, changg.jpg, datg.jpg, greyd.jpg, chillies.jpg
  gif/    gif-1.gif ... gif-8.gif, banner-1.gif, banner-2.gif
  log/    ảnh cho mục Nhật ký (tuỳ chọn)
```

Tên file phải đúng từng ký tự. Ảnh nào thiếu thì trang tự bỏ qua.

## Chỗ cần sửa trong index.html

Tìm theo từ khoá (Ctrl+F):

| Muốn sửa | Tìm |
|---|---|
| Link mạng xã hội (Spotify, TikTok, Facebook, GitHub, Email) | `var LINKS=[` |
| Tài khoản Steam, Discord, Riot, OP.GG, địa chỉ, ngày sửa trang, thống kê | `var ME=` |
| Nhạc nền (10 bài) | `var TRACKS=[` |
| Playlist YouTube / Spotify | `var PLAYLISTS=[` |
| Nghệ sĩ | `var IDOLS=[` |
| Game, truyện, nhạc, phim, việt hoá | `var DATA={` |
| Thời khoá biểu | `var TKB=[` |
| Nhật ký | `<ol class="log` |
| Câu "ngẫu nhiên" (phím R) | `var FACTS=[` |
| Tiêu đề và ảnh khi dán link | `og:title` |

**Nội dung còn để mẫu thì tự ẩn:** chữ trong [ngoặc vuông], tên kiểu "Tên bộ truyện 1", link để trống / chỉ là trang chủ (`https://facebook.com/`) / `ban@example.com`. Điền thật vào là hiện ra. Playlist không có link nào thì cả mục tự ẩn.

## Đưa lên GitHub để sao lưu

Làm một lần trong thư mục trang:

```
git init
git add .
git commit -m "trang cua Ming"
git branch -M main
git remote add origin https://github.com/TEN-BAN/TEN-REPO.git
git push -u origin main
```

Tạo repo trống trên github.com trước (nên để **Private**). Về sau mỗi lần sửa:

```
git add .
git commit -m "mo ta ngan"
git push
```

Lưu ý: nhạc (mp3) và GIF nặng. GitHub từ chối file trên 100 MB, nên giữ mỗi file nhỏ hơn nhiều mức đó.

## Xem số liệu thật

Mở `index.html`, ở `var ME=` điền `goatcounter:'ten-cua-ban'` (đăng ký miễn phí tại goatcounter.com) hoặc `cfBeacon:'token'` (Cloudflare Web Analytics). Để trống thì không đếm và không gọi ra ngoài.

## Kiểm tra Discord trực tiếp

Mục "Ngay lúc này" cần bạn vào server discord.gg/lanyard bằng chính tài khoản đó. Mở trang với `?dev` ở cuối link (ví dụ `index.html?dev`) để thấy ghi chú lỗi nếu chưa kết nối.
