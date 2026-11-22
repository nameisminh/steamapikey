-- Bảng lưu bút cho Cloudflare D1. Chạy một lần (xem GUESTBOOK.md).
CREATE TABLE IF NOT EXISTS guestbook (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  name      TEXT    NOT NULL,
  msg       TEXT    NOT NULL,
  iph       TEXT    NOT NULL,              -- mã băm IP (không lưu IP thật), dùng để chống spam
  approved  INTEGER NOT NULL DEFAULT 0,    -- 0 = chờ duyệt, 1 = hiện trên trang
  created   TEXT    NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_gb_approved ON guestbook (approved, id);
CREATE INDEX IF NOT EXISTS idx_gb_iph ON guestbook (iph, created);
