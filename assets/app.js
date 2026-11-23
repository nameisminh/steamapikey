/* Ming · JS chính của trang (tách từ index.html). Các khối giữ đúng thứ tự cũ; mỗi khối ghi tên khối gốc. */

/* ===================== [khối 41] ===================== */
try{
(function(){
  /* ===== ngôn ngữ: tự chọn theo múi giờ + ngôn ngữ trình duyệt (xem __autoLang ở đầu trang), đổi tay bằng nút VI·EN. Thêm bản dịch ở EN: 'câu tiếng Việt':'English' ===== */
  var LANG='vi';
  try{LANG=window.__autoLang?window.__autoLang():((/^vi/i.test(navigator.language||''))?'vi':'en')}catch(e){}
  var EN={ "Nhìn chéo 45°": "45° angled view", "Từ trên 90° (mã QR)": "90° top view (QR code)", "Cây 3D nhìn chéo 45°": "3D tree, 45° angled view", "Nhìn thẳng từ trên xuống 90° để quét mã QR": "Straight 90° top-down view to scan the QR code", "Chọn góc nhìn cây QR": "Choose the QR tree view", "Chạm vào cây để chuyển giữa cây 3D nhìn chéo 45° và mã QR nhìn từ trên 90° (quét được).": "Tap the tree to switch between the 45° 3D tree and the scannable 90° top-down QR code.", "Xoay tự do 360°: kéo để xoay, kéo xuống hoặc lên để nhìn từ trên hoặc từ dưới": "Free 360° rotation: drag to rotate, drag down or up to look from above or below", "↑ Nhìn từ trên": "↑ View from above", "↓ Nhìn từ dưới": "↓ View from below", "Nâng góc nhìn lên (giữ để nâng liên tục)": "Raise the view (hold to keep raising)", "Hạ góc nhìn xuống để xem phía dưới (giữ để hạ liên tục)": "Lower the view to see underneath (hold to keep lowering)","Hiện hoặc ẩn menu vòng tròn bên cạnh": "Show or hide the side circle menu", "Menu vòng tròn bên cạnh (bật hoặc tắt)": "Side circle menu (on or off)", "Mã QR": "QR code", "Quét để ghé trang tôi": "Scan to visit my page", "Mặc định là mã của ming-dev.id.vn, bạn dán link khác vào ô bên dưới để tạo mã của mình. Cây 3D vươn cao với tán lá xum xuê theo mùa (Hoa đào xuân, Đại thụ mùa hè, Phong đỏ mùa thu, Thông tuyết mùa đông, Cây dạ quang). Bấm hoặc chạm vào cây để xem mã QR quét chuẩn.": "It defaults to the code for ming-dev.id.vn; paste another link below to make your own. A tall 3D tree with a lush canopy for every season (cherry blossom in spring, a great tree in summer, red maple in autumn, snowy pine in winter, a glowing night tree). Tap the tree to see a QR code that scans properly.", "Cây QR 3D vươn cao hướng lên trời": "Tall 3D QR tree reaching for the sky", "Dán liên kết hoặc văn bản bất kỳ": "Paste any link or text", "Chọn mùa": "Choose a season", "Xuân": "Spring", "Hạ": "Summer", "Thu": "Autumn", "Đông": "Winter", "Đen": "Black", "Điều khiển xoay 4 góc và xem mã QR": "Rotate (4 corners) and view QR controls", "◀ Xoay trái": "◀ Rotate left", "Xoay phải ▶": "Rotate right ▶", "Xoay sang góc trước (1 trong 4 góc)": "Rotate to the previous corner (1 of 4)", "Bấm để đổi góc nhìn (1 trong 4 góc)": "Press to change the view (1 of 4 corners)", "Xoay sang góc tiếp theo (1 trong 4 góc)": "Rotate to the next corner (1 of 4)", "Chuyển đổi giữa dáng cây 3D và quét mã QR": "Switch between the 3D tree and the scannable QR", "↻ Dựng lại": "↻ Rebuild", "Dựng lại cây từ đầu": "Rebuild the tree from the start", "Tải ảnh PNG": "Download PNG", "Sao chép liên kết": "Copy link", "Chạm vào cây để chuyển giữa mã QR quét chuẩn và cây 3D. Xoay 4 góc, hoặc bấm Xoay tự do để xoay 360° và xem cả phía dưới.": "Tap the tree to switch between the scannable QR code and the 3D tree. Rotate between 4 corners, or press Free rotate to spin 360 degrees and look from below.", "Thời khoá biểu": "Timetable", "Lịch học": "Schedule", "Một tuần của tôi": "My week", "Tôi làm gì, vào khung giờ nào, theo từng ngày trong tuần.": "What I do and when, day by day through the week.", "Thời khoá biểu: thứ 2 đến thứ 6 tôi đi học.": "Timetable: I'm at school Monday to Friday.", "Chọn ngày": "Choose a day", "Hôm nay": "Today", "Đang diễn ra": "Happening now", "Chưa có lịch": "Nothing planned", "Thứ 2": "Monday", "Thứ 3": "Tuesday", "Thứ 4": "Wednesday", "Thứ 5": "Thursday", "Thứ 6": "Friday", "Thứ 7": "Saturday", "Chủ nhật": "Sunday", "T2": "Mon", "T3": "Tue", "T4": "Wed", "T5": "Thu", "T6": "Fri", "T7": "Sat", "CN": "Sun", "Đi học": "School", "Ăn trưa, nghỉ ngơi": "Lunch and rest", "Khi nào tôi có thời gian?": "When are you free?", "Từ thứ 2 đến thứ 6 tôi đi học, nên có thể tôi sẽ trả lời chậm.": "I'm at school from Monday to Friday, so I might reply slowly.", "Nhóm nhạc": "Band", "Ca sĩ, nhà sản xuất âm nhạc": "Singer, music producer", "[Viết vì sao tôi thích MCK: flow, giai điệu, bài hay nghe lại.]": "[Write why you like MCK: the flow, the melodies, the songs you replay.]", "[Viết vì sao tôi thích Vũ Cát Tường: giọng hát, lời nhạc, bài làm tôi nhớ nhất.]": "[Write why you like Vũ Cát Tường: the voice, the lyrics, the song you remember most.]", "[Viết vì sao tôi thích Changg: giọng hát, màu nhạc, bài hay nghe.]": "[Write why you like Changg: the voice, the sound, the songs you play.]", "[Viết vì sao tôi thích DatG: giọng hát, màu nhạc, bài hay nghe.]": "[Write why you like DatG: the voice, the sound, the songs you play.]", "[Viết vì sao tôi thích GreyD: giọng hát, màu nhạc, bài hay nghe.]": "[Write why you like GreyD: the voice, the sound, the songs you play.]", "[Viết vì sao tôi thích Chillies: màu nhạc, thành viên, bài hay nghe.]": "[Write why you like Chillies: the sound, the members, the songs you play.]", "Tôi đã chơi game này hơn 11 năm rồi nên tới giờ vẫn chơi.": "I’ve been playing this game for over 11 years, so I still do.", "Tôi chơi vì game giải trí rất cao, nhịp độ nhanh.": "I play it because it’s very entertaining and fast-paced.", "Tôi chơi vì game có tính chi tiết rất cao, đồ hoạ ổn định và có nhiều thứ để học hỏi.": "I play it for its high level of detail, stable graphics and plenty to learn.", "Tôi đã chơi LoL hơn 11 năm rồi.": "I’ve played LoL for over 11 years.", "Bản đồ": "Map", "Tôi ở đây": "Find me here", "Tìm địa điểm trên Google Maps": "Search a place on Google Maps", "Chỉ đường": "Directions", "Mở Google Maps": "Open Google Maps", "Về chỗ của tôi": "Back to my place", "Không chơi rank": "I don’t play ranked", "Ghi chú: muốn chơi chung thì thêm tôi qua Riot ID ming#0811 (server VN).": "Note: to play together, add me with Riot ID ming#0811 (VN server).", "Hồ sơ League of Legends của ming, thông thạo Zed": "ming’s League of Legends profile, Zed mastery", "Playlist": "Playlist", "Playlist tôi muốn chia sẻ": "Playlists I want to share", "YouTube, Spotify hay nền tảng khác đều được. Bấm nghe ngay tại đây hoặc mở bằng app.": "YouTube, Spotify or any other platform. Listen right here or open it in the app.", "Sắp cập nhật": "Coming soon", "Nghe ngay": "Listen now", "Mở ở app": "Open in app", "Năm 2026 của tôi": "My 2026", "Playlist YouTube của tôi": "My YouTube playlist", "Nhạc tôi hay bật khi làm việc.": "Music I play while working.", "Playlist Spotify của tôi": "My Spotify playlist", "Những bài tôi nghe đi nghe lại.": "Songs I keep replaying.", "Playlist ở nền tảng khác": "Playlist on another platform", "SoundCloud, Apple Music, Zing MP3... cũng được.": "SoundCloud, Apple Music, Zing MP3... also work.", "Mở Discord": "Open Discord", "Máy chủ": "Server", "Tướng thông thạo cao nhất": "Top mastery champions", "Ghi chú: chơi LoL thì thêm tôi qua Riot ID ming#0811 (server VN).": "Note: for LoL, add me with Riot ID ming#0811 (VN server).", "Lee Sin, Zed và Yasuo là ba tướng tôi thông thạo cao nhất.": "Lee Sin, Zed and Yasuo are my top three champions by mastery.", "Tag LoL của tôi là ming#0811, server VN.": "My LoL tag is ming#0811, VN server.", "Tháng 8 và 9 tôi đang đi thực tập tại công ty.": "In August and September I’m doing an internship at a company.", "Tháng 6 và 7 là hai tháng nghỉ hè của tôi.": "June and July are my summer break.", "Thực tập tại công ty": "Internship at a company", "Vẫn đang đi thực tập, vừa làm vừa học thêm.": "Still interning, learning more while working.", "Đi thực tập và làm quen với môi trường làm việc.": "Interning and getting used to the working environment.", "Nghỉ hè": "Summer break", "Nghỉ ngơi, chơi game và nạp lại năng lượng.": "Resting, playing games and recharging.", "Bắt đầu kỳ nghỉ hè.": "The start of summer break.", "Tháng 8 và 9 tôi đang đi thực tập, vừa làm vừa học thêm.": "In August and September I’m interning, learning while I work.", "Dạo này tôi bận gì?": "What have you been busy with lately?", "Tháng 8 và 9 tôi đang đi thực tập tại công ty. Tháng 6 và 7 thì tôi nghỉ hè.": "In August and September I’m interning at a company. In June and July I was on summer break.", "Tag LoL của tôi là gì?": "What is your LoL tag?", "ming#0811, server VN. Tướng tôi thông thạo cao nhất là Lee Sin, Zed và Yasuo.": "ming#0811, VN server. My top mastery champions are Lee Sin, Zed and Yasuo.", "MOBA 5v5. Tag của tôi là ming#0811, server VN. Ba tướng tôi thông thạo cao nhất là Lee Sin, Zed và Yasuo.": "5v5 MOBA. My tag is ming#0811 on the VN server. My top three by mastery are Lee Sin, Zed and Yasuo.", "Đang tải trang của Ming": "Loading Ming’s page", "Trang nhỏ để mọi người biết dạo này tôi đang làm gì.": "A small page so people know what I’ve been up to lately.", "Trang nhỏ để mọi người biết dạo này tôi đang làm gì: chơi gì, dịch gì, nghe gì.": "A small page so people know what I’ve been up to lately: what I play, translate and listen to.", "Bỏ qua tới nội dung": "Skip to content", "Điều hướng chính": "Main navigation", "Liên kết": "Links", "Dạo này": "Lately", "Game": "Games", "Dự án": "Projects", "Sở thích": "Hobbies", "Nghệ sĩ": "Artists", "Nhật ký": "Log", "Hỏi đáp": "FAQ", "Mở danh sách nhạc": "Open playlist", "Danh sách nhạc": "Playlist", "Bật hoặc tắt nhạc": "Turn music on or off", "Bật hoặc tắt nhạc (P)": "Turn music on or off (P)", "Tìm nhanh": "Quick search", "Tìm nhanh (/ hoặc Ctrl+K)": "Quick search (/ or Ctrl+K)", "Tắt hoặc bật hiệu ứng chuyển động": "Turn motion effects off or on", "Tắt/bật hiệu ứng (M)": "Turn effects off/on (M)", "Bật lại hiệu ứng (M)": "Turn effects back on (M)", "Tắt hiệu ứng (M)": "Turn effects off (M)", "Đổi giao diện sáng hoặc tối": "Switch light or dark theme", "Đổi ngôn ngữ": "Change language", "Liên hệ": "Contact", "Bây giờ ở chỗ tôi là": "Right now where I am it’s", "Giờ hiện tại": "Current time", "Di chuột để thả ảnh ·": "Move your mouse to drop photos ·", "Cuộn xuống để gặp tôi": "Scroll down to meet me", "Rất vui được gặp bạn": "Nice to meet you", "Chào buổi sáng": "Good morning", "Chúc bạn buổi trưa vui vẻ": "Have a nice noon", "Chào buổi chiều": "Good afternoon", "Chào buổi tối": "Good evening", "Khuya rồi mà bạn vẫn ghé, cảm ơn nhé": "It’s late and you still dropped by, thank you", "Ảnh của Ming": "Photo of Ming", "Ngoại tuyến": "Offline", "Trực tuyến": "Online", "Vắng mặt": "Idle", "Đừng làm phiền": "Do not disturb", "game": "games", "thành tựu": "achievements", "Xin chào, tôi là Ming.": "Hi, I’m Ming.", "Tôi vẫn còn đang học.": "I’m still learning.", "Dạo này tôi đang mê": "Lately I’m into", "việt hoá game": "game localization", "phim Marvel và DC": "Marvel & DC movies", "nhạc chill": "chill music", "nhạc Việt": "Vietnamese music", "sao Hỏa": "Mars", "Trang nhỏ ghi lại dạo này tôi làm gì, chơi gì và học gì. Không bán gì cả, bạn ghé xem cho vui là được.": "A small page about what I’ve been doing, playing and learning lately. I’m not selling anything, just drop by for fun.", "Xem dạo này tôi làm gì": "See what I’ve been up to", "Liên kết nhanh": "Quick links", "Trạng thái hiện tại": "Current status", "Đang học:": "Learning:", "Đang làm:": "Making:", "Đang chơi:": "Playing:", "Đang dịch:": "Translating:", "Đang đọc:": "Reading:", "Đang nghe:": "Listening:", "[Điều tôi đang học]": "[What you’re learning]", "[Thứ tôi đang làm]": "[What you’re working on]", "Nhạc chill": "Chill music", "Việt hoá game": "Game localization", "Hồ sơ Discord của tôi, trạng thái và hoạt động cập nhật trực tiếp (bấm tab Hoạt động).": "My Discord profile, with my status and activity updating live (click the Activity tab).", "Hồ sơ Discord của ming": "ming's Discord profile", "Ảnh trước": "Previous photo", "Ảnh sau": "Next photo", "Hiệu ứng đang tắt, bật lại để ảnh tự quay.": "Effects are off. Turn them on to make the photos spin on their own.", "Bật lại": "Turn on", "Cày game thâu đêm": "Gaming all night", "Chill cùng nhạc Việt": "Chilling to Vietnamese music", "Đắm chìm trong manhwa": "Lost in manhwa", "Mơ về sao Hỏa": "Dreaming of Mars", "Tò mò đủ thứ": "Curious about everything", "Làm web cho vui": "Building websites for fun", "Đang học": "Learning", "Đang làm": "Making", "Đang chơi": "Playing", "Đang đọc": "Reading", "Tìm tôi ở đâu": "Find me here", "Bấm vào biểu tượng để tới đúng nơi tôi hay có mặt.": "Click an icon to go to where I usually hang out.", "Nghe cùng tôi": "Listen with me", "Theo dõi": "Follow", "Kết bạn": "Add friend", "Vào server": "Join server", "Gửi thư": "Send mail", "Ngay lúc này": "Right now", "Tôi đang làm gì lúc này?": "What am I doing right now?", "Trạng thái Discord của tôi, cập nhật trực tiếp.": "My Discord status, updated live.", "Discord · trực tiếp": "Discord · live", "Đang nghe Spotify": "Listening to Spotify", "Không làm gì cả": "Doing nothing special", "Chưa kết nối Discord. Điền Discord ID ở biến ME.discordId và vào server Lanyard (discord.gg/lanyard).": "Discord isn’t connected yet. Fill in your Discord ID in ME.discordId and join the Lanyard server (discord.gg/lanyard).", "Tôi đang bận những gì": "What I’m busy with", "Những thứ tôi đang bận dạo này. Có gì mới tôi sẽ cập nhật.": "What I’ve been busy with lately. I’ll update when there’s something new.", "Viết một hai câu: vì sao tôi học nó, học tới đâu rồi.": "Write a sentence or two: why you’re learning it and how far you’ve got.", "Việt hoá Minecraft và Stardew Valley": "Localizing Minecraft and Stardew Valley", "Dịch mod, dịch game, làm từng chút một.": "Translating mods and games, a little at a time.", "Chơi vì thấy vui, không cần giỏi.": "Playing because it’s fun, no need to be good.", "Đang đọc và xem": "Reading and watching", "Cuối ngày tôi hay nằm đọc hoặc xem một tập.": "At the end of the day I like to lie down and read or watch an episode.", "Nhạc chill, nhạc Việt": "Chill music, Vietnamese music", "Bật lên lúc nào cũng được, nhất là khi đang làm.": "Always on, especially while I work.", "Ba game dạo này": "Three games lately", "Ba lá bài, ba game. Bấm vào lá bài để lật xem chi tiết.": "Three cards, three games. Click a card to flip it open.", "Hồ sơ công khai": "Public profile", "Cấp độ": "Level", "Game trong thư viện": "Games in library", "Huy hiệu": "Badges", "Thành tựu": "Achievements", "Giờ chơi hai tuần qua": "Hours in the past 2 weeks", "giờ": "hrs", "Chơi gần đây": "Recently played", "Mở hồ sơ Steam": "Open Steam profile", "Vừa cập nhật": "Just updated", "Chế độ chơi": "Mode", "Chỉ chơi giải trí": "Casual only", "Xếp hạng": "Ranked", "Không chơi, không leo rank": "Not playing, not climbing", "Tướng hay chơi": "Favorite champions", "Ảnh chia sẻ": "Shared screenshot", "Ảnh chia sẻ từ League of Legends": "Screenshot shared from League of Legends", "Trang của người hâm mộ, không liên kết với Riot Games. League of Legends và ảnh tướng thuộc Riot Games.": "Fan page, not affiliated with Riot Games. League of Legends and champion art belong to Riot Games.", "Việt hoá những game tôi thích": "Localizing games I like", "Dịch mod cho những game tôi hay chơi, để bạn bè đọc cho dễ.": "Translating mods for games I play a lot, so friends can read them easily.", "Những thứ tôi thích": "Things I like", "Mỗi mục có một trang riêng: tôi thích gì và vì sao.": "Each one has its own page: what I like and why.", "Những game tôi chơi": "Games I play", "Truyện tranh": "Comics", "Nhạc": "Music", "Playlist tôi hay nghe": "Playlists I often listen to", "Phim": "Movies", "Marvel, DC và vài phim khác": "Marvel, DC and a few others", "Những người làm nhạc tôi mê": "Musicians I love", "Bấm vào từng người để xem vì sao tôi thích.": "Click each one to see why I like them.", "Xem thêm nghệ sĩ": "Show more artists", "Thu gọn": "Show less", "Xem thêm ảnh": "Show more photos", "Vì sao tôi thích": "Why I like it", "Đặc điểm": "Highlights", "Bài tôi hay nghe": "Songs I often play", "Tôi chơi thế nào": "How I play", "Mở trang game": "Open game page", "Xem trang chi tiết": "See details page", "Vài con số": "Numbers", "Những con số vu vơ": "Random numbers", "Không để khoe, chỉ để cho vui.": "Not for bragging, just for fun.", "ngày tôi có mặt trên đời": "days I’ve been alive", "game trong thư viện Steam": "games in my Steam library", "Không đếm được": "Uncountable", "bộ truyện đã đọc": "comics read", "bài hát trong playlist": "songs in my playlist", "Ảnh": "Photos", "Vài tấm ảnh": "A few photos", "Ảnh động": "GIFs", "Vài tấm ảnh động": "A few GIFs", "Bấm vào để xem lớn.": "Click to view larger.", "Gần đây": "Recently", "Mới nhất ở trên cùng.": "Newest at the top.", "Tháng 10, 2026": "October 2026", "Tháng 9, 2026": "September 2026", "Tháng 8, 2026": "August 2026", "Làm trang web này": "Made this website", "Lần đầu tự làm một trang giới thiệu về bản thân và đưa nó lên mạng với tên miền riêng.": "First time building a page about myself and putting it online with my own domain.", "[Việc tôi đã làm]": "[Something you did]", "Một hai câu về chuyện đó, kể cả khi nó chưa hoàn chỉnh.": "A sentence or two about it, even if it isn’t finished.", "Điều tôi học được hoặc thấy thú vị.": "Something you learned or found interesting.", "Có thể bạn muốn biết": "You might want to know", "Trang này để làm gì?": "What is this page for?", "Chỉ để bạn bè và người quen biết dạo này tôi đang làm gì. Không có hàng bán, không có bảng giá.": "Just so friends and acquaintances know what I’m up to lately. Nothing for sale, no price list.", "Tôi có nhận việc không?": "Do you take on work?", "Hiện tại thì chưa. Tôi vẫn còn đang học nhiều thứ, nên muốn làm những gì tôi thích trước.": "Not at the moment. I’m still learning a lot, so I want to do what I like first.", "Tôi đang học gì?": "What are you learning?", "Tôi hay thử nhiều hướng: thiết kế, code, mod game, dựng video. Cái nào vui thì tôi đào sâu hơn.": "I try many directions: design, code, game mods, video editing. Whatever is fun I dig into further.", "Muốn chơi game chung thì sao?": "What if I want to play together?", "Cứ nhắn tôi qua Discord hoặc Facebook ở cuối trang, tôi sẽ trả lời khi online.": "Just message me on Discord or Facebook at the bottom of the page, I’ll reply when I’m online.", "Muốn nói chuyện thì cứ ghé": "Want to chat? Just drop by", "Chào nhau, rủ chơi game hay chia sẻ một bài nhạc hay đều được.": "Say hi, invite me to a game or share a great song, anything works.", "Sao chép email": "Copy email", "Một trang nhỏ để ghi lại dạo này tôi đang làm gì.": "A small page to record what I’ve been up to lately.", "Trang": "Pages", "Kết nối": "Connect", "Phím tắt": "Shortcuts", "Tắt hoặc bật hiệu ứng": "Turn effects off or on", "Lên đầu trang": "Back to top", "Tìm nhanh (hoặc Ctrl + K)": "Quick search (or Ctrl + K)", "Ngẫu nhiên một điều về trang này": "A random fact about this page", "Cập nhật lần cuối: tháng 10/2026": "Last updated: October 2026", "Trình phát nhạc": "Music player", "Nhạc nền": "Background music", "Bài trước": "Previous track", "Phát nhạc": "Play", "Phát hoặc tạm dừng": "Play or pause", "Bài tiếp theo": "Next track", "Chưa tìm thấy file nhạc. Bỏ file vào thư mục music/ rồi tải lại trang.": "No music file found. Put files in the music/ folder and reload the page.", "Mở trình phát nhạc": "Open music player", "Bật nhạc": "Play music", "Tắt nhạc": "Stop music", "Tạm dừng": "Pause", "Nhạc mẫu 1": "Sample track 1", "Nhạc mẫu 2": "Sample track 2", "Nhạc mẫu 3": "Sample track 3", "Tạo bằng code": "Made with code", "thiếu file": "missing file", "Đang phát:": "Now playing:", "Đã tạm dừng nhạc": "Music paused", "Một điều ngẫu nhiên về trang này": "A random fact about this page", "Ngẫu nhiên (R)": "Random (R)", "Bấm để tới chỗ này": "Click to go there", "Gõ để tìm: game, nhạc, nhật ký, đổi giao diện...": "Type to search: games, music, log, switch theme...", "↑↓ Chọn": "↑↓ Select", "Enter Mở": "Enter Open", "Esc Đóng": "Esc Close", "Không tìm thấy gì": "Nothing found", "Mục": "Section", "Hành động": "Action", "Sao chép link trang này": "Copy this page link", "Đã sao chép link trang": "Page link copied", "Đã sao chép": "Copied", "Đã tắt hiệu ứng": "Effects turned off", "Đã bật hiệu ứng": "Effects turned on", "Bạn tìm ra điều bí mật rồi, tôi cũng hay ngồi bấm đồng hồ": "You found the secret, I also like sitting here clicking the clock", "Đi đâu đấy? Quay lại nhé": "Where are you going? Come back!", "Các mục trên trang": "Sections on this page", "Đồng hồ": "Clock", "Giới thiệu": "About", "Dự án việt hoá": "Localization projects", "Việt hoá": "Localization", "← Trang chủ": "← Home", "← Tất cả": "← All", "Tiến độ": "Progress", "tiến độ": "progress", "Xem thêm": "See more", "Tiến độ và cách cài": "Progress and how to install", "Những game tôi chơi nhiều nhất và lý do tôi quay lại với chúng.": "The games I play the most and why I keep coming back to them.", "Manhwa, manhua tôi đã đọc và đang theo dõi.": "Manhwa and manhua I’ve read and am following.", "Những playlist và bài hát tôi hay bật khi làm việc hoặc nằm nghỉ.": "Playlists and songs I put on while working or resting.", "Những dự án dịch tôi đang làm.": "The translation projects I’m working on.", "Những bộ phim tôi xem đi xem lại.": "Movies I watch again and again.", "Chơi hằng ngày": "Daily", "MOBA 5v5. Tôi chỉ chơi chế độ giải trí để xả hơi, không chơi xếp hạng.": "5v5 MOBA. I only play casual mode to unwind, no ranked.", "[Vì sao tôi thích: lên đồ, combo đẹp, chơi cùng bạn bè...]": "[Why you like it: builds, nice combos, playing with friends...]", "Giải trí": "Casual", "FPS chiến thuật · PC": "Tactical FPS · PC", "Đang cày": "Grinding", "Game bắn súng chiến thuật theo đội, có chế độ chiến dịch và đánh quy mô lớn.": "Team-based tactical shooter with a campaign mode and large-scale battles.", "[Điều khiến tôi thích: cảm giác súng, phối hợp đội, chế độ yêu thích...]": "[What you like: gunplay, teamwork, favorite mode...]", "Đồng đội": "Teamwork", "Đang build": "Building", "Game nhập vai hành động kiểu Diablo, build nhân vật rất sâu.": "Diablo-style action RPG with very deep character builds.", "[Build tôi đang làm, class tôi chọn, vì sao tôi mê...]": "[The build you’re making, your class, why you love it...]", "Tên bộ truyện 1": "Comic title 1", "Manhwa · Hành động": "Manhwa · Action", "Đang theo": "Following", "Bộ truyện này nói về điều gì, không cần kể hết nội dung.": "What this comic is about, no need to spoil it.", "Điều làm tôi muốn đọc tiếp mỗi tuần.": "What makes you want to keep reading every week.", "Tên bộ truyện 2": "Comic title 2", "Manhua · Tu tiên": "Manhua · Cultivation", "Đọc xong": "Finished", "Giới thiệu ngắn về bộ thứ hai.": "A short intro to the second one.", "Vì sao tôi nhớ bộ này.": "Why you remember this one.", "Tên bộ truyện 3": "Comic title 3", "Manhwa · Đời thường": "Manhwa · Slice of life", "Muốn đọc": "Want to read", "Giới thiệu ngắn về bộ thứ ba.": "A short intro to the third one.", "Vì sao tôi muốn đọc.": "Why you want to read it.", "Hay nghe": "Often played", "Playlist nhạc Việt tôi nghe nhiều nhất.": "The Vietnamese playlist I listen to the most.", "Nghe lúc nào, cảm giác ra sao.": "When I listen and how it feels.", "Nhạc Việt": "Vietnamese music", "Playlist để thư giãn, bật lên là quên hết mọi thứ.": "A playlist to relax, put it on and forget everything.", "Vì sao tôi thích nó.": "Why you like it.", "Tên bài hát": "Song title", "Ca sĩ": "Singer", "Lặp lại hoài": "On repeat", "Một bài tôi đang nghe đi nghe lại.": "A song you keep listening to on repeat.", "Câu chuyện nhỏ về bài hát này. Điền ID video vào \"yt\" để nhúng trình phát.": "A small story about this song. Fill the video ID into \"yt\" to embed a player.", "Yêu thích": "Favorite", "Việt hoá Minecraft": "Minecraft localization", "Gói ngôn ngữ cho mod và modpack": "Language packs for mods and modpacks", "Đang dịch": "Translating", "Dịch giao diện, vật phẩm và mô tả của các mod Minecraft sang tiếng Việt.": "Translating the interface, items and descriptions of Minecraft mods into Vietnamese.", "[Dịch tới đâu rồi, cách cài bản dịch.]": "[How far the translation is, how to install it.]", "Việt hoá Stardew Valley": "Stardew Valley localization", "Bản dịch cho mod · SMAPI": "Translations for mods · SMAPI", "Dịch các mod Stardew Valley sang tiếng Việt để bạn bè chơi cho dễ.": "Translating Stardew Valley mods into Vietnamese so friends can play easily.", "Tên phim 1": "Movie title 1", "Marvel · Hành động": "Marvel · Action", "Xem lại nhiều lần": "Rewatched often", "Phim nói về điều gì.": "What the movie is about.", "Cảnh hoặc nhân vật tôi thích nhất.": "Your favorite scene or character.", "Tên phim 2": "Movie title 2", "DC · Hành động": "DC · Action", "Mới xem": "Just watched", "Giới thiệu ngắn về phim thứ hai.": "A short intro to the second movie.", "Cảm nhận của tôi.": "Your thoughts.", "Ca sĩ, nhạc sĩ, nhà sản xuất âm nhạc": "Singer, songwriter, music producer", "Rapper, nhạc sĩ": "Rapper, songwriter", "Ca sĩ, nhạc sĩ": "Singer, songwriter", "Ca sĩ, diễn viên": "Singer, actress", "Rapper, ca sĩ": "Rapper, singer", "[Viết vì sao tôi thích Sơn Tùng: bài đầu tiên tôi nghe, điều làm tôi nhớ mãi.]": "[Write why you like Sơn Tùng: the first song you heard, what stuck with you.]", "Tự sáng tác và sản xuất nhiều bài hát của tôi": "Writes and produces many of his own songs", "Ra mắt từ khoảng năm 2012, nổi lên với \"Cơn mưa ngang qua\"": "Debuted around 2012 and rose to fame with \"Cơn mưa ngang qua\"", "MV thường được đầu tư kỹ về hình ảnh": "Music videos usually have strong visuals", "Pha pop với R&B, hip hop và điện tử": "Blends pop with R&B, hip hop and electronic", "[Viết vì sao tôi thích Đen: lời nhạc, giọng rap, hay cảm giác khi nghe.]": "[Write why you like Đen: the lyrics, the rap voice, how it feels to listen.]", "Lời nhạc giản dị, gần gũi, hay kể chuyện đời thường": "Simple, relatable lyrics that often tell everyday stories", "Nhiều bài vừa chill vừa có thông điệp": "Many songs are both chill and meaningful", "Giọng rap nhẹ, dễ nghe, hợp để bật lúc làm việc": "A soft, easy rap voice that suits working", "[Viết vì sao tôi thích Vũ.: giọng hát, lời nhạc, hay bài làm tôi nhớ nhất.]": "[Write why you like Vũ.: the voice, the lyrics, the song you remember most.]", "Giọng hát nhẹ, lời nhạc trữ tình": "A soft voice and lyrical songwriting", "Dòng nhạc nghiêng về indie và ballad": "Leans toward indie and ballads", "Hay viết về nỗi nhớ và những cảm xúc lặng": "Often writes about longing and quiet feelings", "[Viết vì sao tôi thích Mỹ Tâm: giọng hát, bài đầu tiên tôi nghe.]": "[Write why you like Mỹ Tâm: her voice, the first song you heard.]", "Giọng hát giàu cảm xúc, hợp những bản ballad": "An expressive voice that suits ballads", "Là một trong những ca sĩ pop nữ được biết đến lâu năm ở Việt Nam": "One of the long-standing female pop singers in Vietnam", "Thường tổ chức liveshow và có nhiều fan trung thành": "Often holds live shows and has many loyal fans", "[Viết vì sao tôi thích Hoàng Thùy Linh: giai điệu, hình ảnh, MV.]": "[Write why you like Hoàng Thùy Linh: the melodies, the imagery, the MVs.]", "Hay đưa chất liệu dân gian Việt Nam vào nhạc pop": "Often brings Vietnamese folk elements into pop", "MV và hình ảnh được đầu tư theo từng concept": "Music videos and visuals are built around each concept", "Nhiều bài sôi động, dễ nhớ": "Many upbeat, catchy songs", "[Viết vì sao tôi thích Binz: flow, lời nhạc, bài làm tôi nhớ.]": "[Write why you like Binz: the flow, the lyrics, the song you remember.]", "Nổi lên từ cộng đồng rap Việt": "Rose from the Vietnamese rap scene", "Flow mượt, hay kết hợp rap với giai điệu pop": "Smooth flow, often mixes rap with pop melodies", "Làm cả nhạc solo lẫn hợp tác với nhiều nghệ sĩ khác": "Makes both solo music and collaborations with many artists", "[Viết vì sao tôi thích HIEUTHUHAI: giọng, phong cách, bài hay nghe lại.]": "[Write why you like HIEUTHUHAI: the voice, the style, the song you replay.]", "Gương mặt trẻ của rap và pop Việt": "A young face of Vietnamese rap and pop", "Giọng trầm, flow gọn": "Deep voice, tight flow", "Hay hợp tác cùng producer và nghệ sĩ trẻ": "Often collaborates with young producers and artists", "[Viết vì sao tôi thích Jack: giai điệu, cảm xúc, bài đầu tiên tôi nghe.]": "[Write why you like Jack: the melodies, the emotion, the first song you heard.]", "Nổi tiếng với những bài pop ballad buồn": "Known for sad pop ballads", "Có lượng người nghe lớn trên mạng xã hội": "A large audience on social media", "Hay hợp tác cùng producer và nghệ sĩ khác": "Often collaborates with producers and other artists", "[Viết vì sao tôi thích MONO: giọng hát, màu nhạc, bài hay nghe.]": "[Write why you like MONO: the voice, the sound, the songs you play.]", "Giọng hát nhẹ, màu nhạc pop mang hơi hướng indie": "A soft voice and an indie-leaning pop sound", "Nổi lên cùng album \"22\"": "Rose to fame with the album \"22\"", "Có phong cách hình ảnh riêng": "Has a visual style of his own", "Chơi game vì thấy vui, không cần giỏi.": "I play games because they’re fun, not because I’m good.", "Thư viện Steam có hơn 80 game, chơi hết được vài cái.": "My Steam library has over 80 games and I’ve finished only a few.", "Thích nhạc chill, nhất là khi đang làm việc.": "I like chill music, especially while working.", "Dịch game từng chút một cũng là một kiểu chơi game.": "Translating a game bit by bit is also a way of playing it.", "Đang việt hoá Minecraft và Stardew Valley, chưa vội, làm tới đâu hay tới đó.": "Localizing Minecraft and Stardew Valley, no rush, one step at a time.", "Thành tựu Steam đã hơn 6.000, và chưa định dừng.": "Over 6,000 Steam achievements, and I’m not stopping yet.", "Ahri, Yasuo, Jinx là ba tướng tôi hay chọn nhất.": "Ahri, Yasuo and Jinx are the three champions I pick the most.", "Nghe nhạc Việt khi làm việc, nhạc chill khi mệt.": "Vietnamese music while working, chill music when tired.", "ShareX là thứ chạy lâu nhất trên Steam của tôi, hơn cả mọi game.": "ShareX has run longer on my Steam than any game.", "Mini Cozy Room: Lo-Fi hay được bật lên chỉ để làm nền.": "Mini Cozy Room: Lo-Fi often just plays in the background.", "Tôi vẫn còn đang học, và thấy vậy cũng ổn.": "I’m still learning, and that feels fine.", "Manhwa, manhua, Marvel, DC: cuối ngày nào cũng có một thứ để xem.": "Manhwa, manhua, Marvel, DC: there’s always something to watch at the end of the day.", "Delta Force và Path of Exile 2 là hai game tôi hay quay lại.": "Delta Force and Path of Exile 2 are two games I keep coming back to.", "Hay chơi game để xả hơi hơn là để lên rank.": "I play games to unwind more than to climb the ranks.", "LoL tôi chỉ chơi chế độ giải trí, không leo rank.": "I only play LoL in casual mode, no ranked climbing.", "Bật nhạc lên là làm việc nhanh hơn hẳn.": "With music on I work much faster.", "Thích những thứ nhỏ nhỏ và gọn, như trang này.": "I like small, tidy things, like this page.", "Dịch mod đôi khi mất cả buổi chỉ vì một câu thoại.": "Translating a mod sometimes takes a whole afternoon over a single line.", "Graveyard Keeper nằm trong danh sách chơi gần đây, nhưng mới chơi chút xíu.": "Graveyard Keeper is on my recently played list, but I’ve barely started.", "Có hơn 80 game mà vẫn hay chơi đi chơi lại vài game quen.": "Over 80 games and I still replay the same few favorites.", "Trang này có một mục riêng cho những nghệ sĩ tôi hay nghe.": "This page has a section just for the artists I listen to.", "Ảnh 1": "Photo 1", "Ảnh 2": "Photo 2", "Ảnh 3": "Photo 3", "Ảnh 4": "Photo 4", "Ảnh 5": "Photo 5", "Ảnh 6": "Photo 6", "Ảnh 7": "Photo 7", "Ảnh 8": "Photo 8", "Ảnh 9": "Photo 9"};
  Object.assign(EN,{"Danh hiệu":"Title","Game thủ kiêm dịch giả":"Gamer and translator","Cú đêm":"Night owl","Dịch giả":"Translator","Game thủ":"Gamer","Mê nhạc":"Music lover","Hay thức khuya":"Often up late","Dịch mod sang tiếng Việt":"Translates mods into Vietnamese","Chơi game mỗi ngày":"Plays games every day","Nhạc là bạn đồng hành":"Music is my companion","Xem ảnh động":"View animated image"});
  Object.assign(EN,{"Bấm để tắt":"Tap to turn off","Giới hạn 60 FPS":"60 FPS limit","Số này đếm khung hình của các hiệu ứng JavaScript trên trang, được giữ tối đa 60 để máy đỡ nóng và đỡ tốn pin. Màn hình 60Hz trở xuống thì không bị ảnh hưởng. Cuộn trang và hiệu ứng CSS vẫn chạy theo tần số quét của màn hình.":"This counts frames of the page’s JavaScript effects, which are capped at 60 to keep your device cooler and save battery. Screens at 60Hz or lower are not affected. Scrolling and CSS effects still follow your screen’s refresh rate.","Trang này giới hạn tối đa 60 FPS, bấm nút tròn FPS để xem ghi chú.":"This page is capped at 60 FPS, press the round FPS button for a note.","Tạm dừng (R)":"Pause (R)","Chạy tiếp (R)":"Resume (R)"});
  Object.assign(EN,{"Tắt tiếng":"Mute","Bật tiếng":"Unmute","Lùi 10 giây":"Back 10 seconds","Tua tới 10 giây":"Forward 10 seconds","Đóng":"Close","Tua nhạc":"Seek","Vào trang, có nhạc":"Enter with music","Vào trang, không nhạc":"Enter without music","Vào trang":"Enter","Sẵn sàng rồi":"Ready","Lời bài hát":"Lyrics","Ẩn":"Hide","Hiện":"Show","Đang tìm lời...":"Looking for lyrics...","Chưa tìm thấy lời đồng bộ cho bài này.":"No synced lyrics found for this track.","Bài này chưa có lời chạy theo nhạc, đây là lời thường.":"No time-synced lyrics for this track, showing plain lyrics.","Không tải được lời lúc này (có thể đang mất mạng).":"Could not load lyrics right now (you may be offline).","Tìm":"Search","Bấm phát để tải lời.":"Press play to load lyrics.","Xem hồ sơ":"View profile","Lịch sử đấu":"Match history","Đăng ký":"Subscribe","Xem ảnh":"View image"});
  Object.assign(EN,{"Ẩn hoặc hiện GIF":"Hide or show GIFs","Góc chơi":"Playground","Thử tay một chút":"Try your hands","Test chuột, test bàn phím hoặc đánh combo cho vui. Mọi thứ chạy ngay trên máy bạn, không gửi đi đâu.":"Test your mouse, test your keyboard or chain combos for fun. Everything runs on your device and nothing is sent anywhere.","Chọn công cụ":"Choose a tool","Test chuột":"Mouse test","Test bàn phím":"Keyboard test","Combo":"Combo","Số lần bấm mỗi giây (CPS)":"Clicks per second (CPS)","Số lần bấm":"Clicks","Giây còn lại":"Seconds left","Kỷ lục":"Best","5 giây":"5 seconds","10 giây":"10 seconds","30 giây":"30 seconds","Thời gian thử":"Test length","Bấm vào đây để bắt đầu":"Click here to start","Bấm tiếp đi!":"Keep clicking!","Hết giờ":"Time's up","Kỷ lục mới!":"New record!","Bấm để thử lại":"Click to try again","Chuột trái":"Left","Chuột giữa":"Middle","Chuột phải":"Right","Cuộn":"Scroll","Bắt đầu test":"Start test","Dừng test":"Stop test","Đặt lại":"Reset","Chưa bấm phím nào":"No key pressed yet","Phím vừa bấm":"Last key","Phím đã thử":"Keys tested","Lần bấm":"Presses","Nhiều phím cùng lúc":"Keys at once (rollover)","Bấm \"Bắt đầu test\" rồi gõ thử. Khi đang test, các phím tắt của trang tạm thời bị tắt. Phím Windows và tổ hợp của hệ điều hành thì trình duyệt không bắt được. Cần bàn phím thật để thử.":"Press \"Start test\" and type. While testing, the page shortcuts are turned off. The browser can't catch the Windows key or OS shortcuts. You need a real keyboard.","Điểm":"Score","Combo cao nhất":"Best combo","Bắt đầu 30 giây":"Start 30 seconds","Chơi lại":"Play again","Lên":"Up","Xuống":"Down","Trái":"Left","Phải":"Right","Hạng":"Rank","điểm":"points","Đang chạy... bấm đúng mũi tên hiện trên màn hình!":"Running... press the arrow shown on screen!","Bấm đúng mũi tên (hoặc W A S D) hiện trên màn hình. Đúng liên tiếp thì combo tăng và nhân điểm, bấm sai là mất combo.":"Press the arrow shown on screen (or W A S D). Hit them in a row to grow the combo and multiply points; a wrong key resets it.","Mỗi ngày chia thành các khung 3 giờ: tôi làm gì, vào lúc nào.":"Each day is split into 3-hour blocks: what I do and when.","Ba playlist tôi hay bật. Bấm nghe ngay tại đây hoặc mở bằng app.":"Three playlists I play a lot. Listen right here or open them in the app.","Đọc truyện":"Reading comics","Xem phim":"Watching movies","Game PC":"PC games","Game điện thoại":"Mobile games","Sắp cập nhật, tôi sẽ thêm dần.":"Coming soon, I'll add more over time.","Bấm vào một playlist để nghe ngay tại đây.":"Click a playlist to listen right here.","Đang phát trực tiếp":"Live streaming","Đang xem":"Watching","Đang thi đấu":"Competing","Chưa nhận được trạng thái Discord. Hãy vào server discord.gg/lanyard bằng đúng tài khoản này, bật hiển thị hoạt động trong Discord và kiểm tra lại ID.":"No Discord status received yet. Join discord.gg/lanyard with this exact account, turn on activity sharing in Discord and double-check the ID.","Ngủ":"Sleep","Nghỉ ngơi":"Rest","Dậy, ăn sáng, đến trường":"Wake up, breakfast, head to school","Các môn buổi sáng":"Morning classes","Đi học hoặc học thêm":"School or extra classes","Việc buổi chiều":"Afternoon stuff","Ăn tối, học bài":"Dinner, homework","Chơi game, nghe nhạc":"Gaming, music","Thức khuya, chơi game":"Up late, gaming","Ngủ nướng":"Sleeping in","Dậy, ăn sáng, việc riêng":"Wake up, breakfast, own stuff","Dịch mod, việc riêng":"Translating mods, own stuff","Ăn tối, đọc truyện, xem phim":"Dinner, comics, movies","Dọn dẹp, chuẩn bị cho tuần mới":"Tidy up, get ready for the week","Nghe nhạc, thư giãn":"Music, chill","Tháng 5, 2026":"May 2026","Tháng 4, 2026":"April 2026","Tháng 3, 2026":"March 2026","Tháng 2, 2026":"February 2026","Tháng 1, 2026":"January 2026","Đi học trên lớp, chuẩn bị kết thúc kỳ học.":"Going to class, getting ready to wrap up the term.","Đi học và làm bài đều đặn.":"Going to school and doing assignments steadily.","Đi học sau kỳ nghỉ Tết.":"Back to school after the Tet break.","Bắt đầu năm mới, vẫn đi học như thường.":"A new year begins, school as usual."});
  Object.assign(EN,{"Về Ming":"About Ming","Chơi và xem":"Play and watch","Cuối trang":"Wrap-up","Tôi là ai, tìm tôi ở đâu và dạo này tôi đang làm gì.":"Who I am, where to find me and what I'm up to lately.","Game, dự án việt hoá, nhạc và những thứ tôi mê.":"Games, translation projects, music and the things I love.","Mấy món để nghịch, vài tấm ảnh và chuyện vui.":"Things to tinker with, a few photos and fun facts.","Chuyện gần đây và một tuần của tôi.":"Recent updates and my week.","Hỏi đáp nhanh và cách liên hệ với tôi.":"Quick Q&A and how to reach me.","Tôi là Ming, game thủ kiêm dịch giả. Trang nhỏ này ghi lại dạo này tôi chơi gì, làm gì và học gì.":"I'm Ming, a gamer and translator. This little page keeps track of what I'm playing, doing and learning lately.","Bản đồ và thời tiết":"Map and weather"});
  function T(s){return (LANG==='en'&&typeof s==='string'&&Object.prototype.hasOwnProperty.call(EN,s))?EN[s]:s}
  function LOC(){return LANG==='en'?'en-US':'vi-VN'}
  /* Nội dung còn để mẫu thì trang tự ẩn đi, điền thật vào là hiện ra:
     PH: chữ nằm trong [ngoặc vuông]. GEN: link chưa điền (để trống, ban@example.com, hoặc chỉ là trang chủ như https://facebook.com/) */
  function PH(s){s=String(s==null?'':s).trim();return /^\[[^\]]*\]$/.test(s)}
  function GEN(u){
    if(typeof ME!=='undefined'&&ME.hideEmpty===false)return false; /* công tắc: hideEmpty:false thì hiện hết, kể cả link mẫu */
    u=String(u||'').trim();if(!u)return true;
    if(/^mailto:/i.test(u))return /example\.(com|org)|ban@/i.test(u);
    try{var x=new URL(u);return (x.pathname==='/'||x.pathname==='')&&!x.search&&!x.hash}catch(e){return true}
  }
  var hh=document.getElementById('hh'),mm=document.getElementById('mm'),ss=document.getElementById('ss'),dt=document.getElementById('date');
  function setv(el,v){
    if(el.textContent==='--'){el.textContent=v;return}
    /* đổi qua lại 2 class có hiệu ứng giống nhau để chạy lại animation mà không phải ép trình duyệt tính lại bố cục */
    if(el.textContent!==v){el.textContent=v;var a=el.classList.contains('tk');el.classList.remove(a?'tk':'tk2');el.classList.add(a?'tk2':'tk')}
  }
  /* tạo bộ định dạng giờ một lần rồi dùng lại (tạo mới mỗi giây rất tốn) */
  var FT=null,FD=null,FDL='',FV=null;
  function fmtTime(d){
    if(FT===null){try{FT=new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23',timeZone:'Asia/Ho_Chi_Minh'})}catch(e){FT=false}}
    return FT?FT.format(d):d.toTimeString().slice(0,8);
  }
  function fmtDate(d){
    if(FD===null||FDL!==LANG){FDL=LANG;try{FD=new Intl.DateTimeFormat(LOC(),{weekday:'long',day:'numeric',month:'long',year:'numeric',timeZone:'Asia/Ho_Chi_Minh'})}catch(e){FD=false}}
    return FD?FD.format(d):d.toDateString();
  }
  var gEl=document.getElementById('greet'),gLast='';
  function greet(h){
    var g=(h>=5&&h<11)?'Chào buổi sáng':(h>=11&&h<13)?'Chúc bạn buổi trưa vui vẻ':(h>=13&&h<18)?'Chào buổi chiều':(h>=18&&h<22)?'Chào buổi tối':'Khuya rồi mà bạn vẫn ghé, cảm ơn nhé';g=T(g);
    if(gEl&&g!==gLast){gLast=g;gEl.textContent=g}
  }
  function tick(){
    var d=new Date(),t,ds='';
    try{t=fmtTime(d).split(':');ds=fmtDate(d)}catch(e){t=d.toTimeString().slice(0,8).split(':')}
    setv(hh,t[0]);setv(mm,t[1]);setv(ss,t[2]);
    ds=ds.charAt(0).toUpperCase()+ds.slice(1);if(dt.textContent!==ds)dt.textContent=ds;
    greet(+t[0]);
  }
  tick();setInterval(function(){if(!document.hidden)tick()},1000);document.addEventListener('visibilitychange',function(){if(!document.hidden)tick()});

  /* ảnh nhỏ chạy theo chuột ở màn hình đồng hồ.
     Đổi danh sách ảnh ở TRAIL (đặt file vào thư mục images/). */
  var clk=document.getElementById('hero'),trail=document.getElementById('trail');
  var calm=(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
  function mOff(){return document.documentElement.getAttribute('data-motion')==='off'}
  if(clk&&trail&&!calm&&trail.animate){
    var TRAIL=['images/trail-1.jpg','images/trail-2.jpg','images/trail-3.jpg','images/trail-4.jpg','images/trail-5.jpg','images/trail-6.jpg','images/trail-7.jpg','images/trail-8.jpg','images/trail-9.jpg','images/trail-10.jpg','images/trail-11.jpg','images/trail-12.jpg','images/trail-13.jpg','images/trail-14.jpg','images/trail-15.jpg'];
    var MAX=10; /* số ảnh tối đa cùng lúc */
    /* nạp sẵn khi trình duyệt rảnh để lần rê chuột đầu tiên không bị khựng. Điện thoại và máy yếu thì bỏ qua */
    if(matchMedia('(pointer:fine)').matches&&!document.documentElement.classList.contains('lite'))
      (function(go){if(document.readyState==='complete')setTimeout(go,1500);else addEventListener('load',function(){setTimeout(go,1500)})})(function(){(window.requestIdleCallback||function(f){setTimeout(f,500)})(function(){TRAIL.forEach(function(u){var im=new Image();im.decoding='async';im.src=u})})});
    var ti=0,lx=null,ly=null,live=0,q=[];
    function drop(x,y){
      if(mOff())return;

      var r=clk.getBoundingClientRect(),el=document.createElement('div'),im=document.createElement('img'),rot=0;
      el.className='drop';
      im.alt='';im.src=TRAIL[ti++%TRAIL.length];im.onerror=function(){im.remove()};
      el.appendChild(im);
      el.style.left=(x-r.left)+'px';el.style.top=(y-r.top)+'px';
      trail.appendChild(el);live++;
      var base='translate(-50%,-50%) ',tr='rotate('+rot+'deg)';
      var a=el.animate([
        {opacity:0,transform:base+'scale(.4) '+tr},
        {opacity:1,transform:base+'scale(1) '+tr,offset:.18},
        {opacity:1,transform:base+'scale(1) '+tr,offset:.65},
        {opacity:0,transform:'translate(-50%,-58%) scale(.9) '+tr}
      ],{duration:1600,easing:'ease-out',fill:'forwards'});
      q.push(a);
      a.onfinish=function(){el.remove();live--;var i=q.indexOf(a);if(i>-1)q.splice(i,1)};
      /* quá MAX thì ảnh cũ nhất mờ đi nhanh hơn để nhường chỗ */
      for(var k=0;k<q.length-MAX;k++)q[k].playbackRate=4;
    }
    /* ảnh sau đè lên ảnh trước một phần (xem OVERLAP) nên thành một dải dày.
       Chuột đi nhanh thì lấp thêm ảnh dọc đường để không bị hở. */
    var small=matchMedia('(max-width:40rem)');
    var OVERLAP=0.5; /* mỗi ảnh đè lên ảnh trước 2/3 bề rộng. 0 = chỉ chạm cạnh, 0.8 = đè nhiều hơn */
    function gap(){return (small.matches?170:250)*(1-OVERLAP)} /* bằng bề rộng ảnh (.drop trong CSS) nhân (1-OVERLAP) */
    clk.addEventListener('pointermove',function(e){
      if(e.pointerType==='touch')return;
      if(lx===null){lx=e.clientX;ly=e.clientY;return}
      var dx=e.clientX-lx,dy=e.clientY-ly,d=Math.hypot(dx,dy),g=gap(),n=0;
      while(d>=g&&n<20){
        lx+=dx/d*g;ly+=dy/d*g;drop(lx,ly);n++;
        dx=e.clientX-lx;dy=e.clientY-ly;d=Math.hypot(dx,dy);
      }
      if(n===20){lx=e.clientX;ly=e.clientY}
    });
    clk.addEventListener('pointerleave',function(){lx=null});
    clk.addEventListener('pointerdown',function(e){drop(e.clientX,e.clientY)});
  }

  /* ===== hiệu ứng thêm ===== */
  var inEl=document.querySelector('.clk .in'),tx=0,ty=0,cx=0,cy=0,sp=0,raf=0;
  function paint(){
    cx+=(tx-cx)*.08;cy+=(ty-cy)*.08;
    inEl.style.transform='translate3d('+cx.toFixed(1)+'px,'+cy.toFixed(1)+'px,0) scale('+(1-sp*.3).toFixed(3)+')';
    inEl.style.opacity=Math.max(0,1-sp*1.15).toFixed(3);
    raf=(Math.abs(tx-cx)>.1||Math.abs(ty-cy)>.1)?requestAnimationFrame(paint):0;
  }
  function kick(){if(!calm&&inEl&&!raf)raf=requestAnimationFrame(paint)}

  /* cuộn: thanh tiến độ, đồng hồ thu nhỏ và mờ dần */
  var progEl=document.querySelector('.prog'),totopEl=document.getElementById('totop'),scR=0,pmax=0,chH=0;
  function measure(){pmax=document.documentElement.scrollHeight-innerHeight;chH=(clk&&clk.offsetHeight)||1}
  function doScroll(){
    scR=0;
    var v=(pmax>0?Math.min(1,scrollY/pmax):0).toFixed(4);
    if(progEl)progEl.style.setProperty('--p',v);
    if(totopEl)totopEl.style.setProperty('--p',v);
    sp=Math.min(1,Math.max(0,scrollY/(chH*.7)));
    kick();
  }
  function onScroll(){if(!scR)scR=requestAnimationFrame(doScroll)}
  addEventListener('resize',function(){measure();onScroll()});
  addEventListener('load',function(){measure();onScroll()});
  if('ResizeObserver' in window)new ResizeObserver(function(){measure()}).observe(document.body);
  measure();
  addEventListener('scroll',onScroll,{passive:true});onScroll();

  /* nút lên đầu trang */
  var totop=document.getElementById('totop');
  /* nút này mặc định là nút XUỐNG: bấm một lần nhảy xuống mục kế tiếp. Chỉ khi đã xuống hẳn cuối trang nó mới đổi thành nút LÊN (về đầu trang) */
  var tdTxt=function(x){try{return typeof T==='function'?T(x):x}catch(e){return x}};
  function atBottom(){return document.documentElement.scrollHeight-innerHeight-scrollY<6}
  /* gộp vào 1 lần mỗi khung hình và chỉ ghi DOM khi trạng thái đổi (trước đây mỗi sự kiện cuộn đều đọc scrollHeight và ghi lại thuộc tính, gây giật khi cuộn) */
  var s2R=0,s2Up=null,s2Lang=null;
  function doScroll2(){
    s2R=0;
    var up=atBottom(),lg=document.documentElement.lang;
    if(up===s2Up&&lg===s2Lang)return;
    s2Up=up;s2Lang=lg;
    totop.classList.add('show');
    totop.classList.toggle('dn',!up);
    var lb=up?'Lên đầu trang':'Xuống mục tiếp theo';
    totop.setAttribute('aria-label',tdTxt(lb));totop.setAttribute('title',tdTxt(lb));
  }
  function onScroll2(){if(!s2R)s2R=requestAnimationFrame(doScroll2)}
  addEventListener('scroll',onScroll2,{passive:true});addEventListener('resize',onScroll2);doScroll2();
  function nextSection(){
    var hb=document.querySelector('header'),hh=hb?hb.getBoundingClientRect().height:0,list=document.querySelectorAll('main section[id]'),y=null;
    for(var i=0;i<list.length;i++){
      var r=list[i].getBoundingClientRect();
      if(!r.height||list[i].offsetParent===null)continue;
      if(r.top-hh>16){y=r.top+scrollY-hh;break}
    }
    return y;
  }
  totop.addEventListener('click',function(){
    var b=calm?'auto':'smooth';
    if(atBottom()){window.scrollTo({top:0,behavior:b});return}
    var y=nextSection(),max=document.documentElement.scrollHeight-innerHeight;
    window.scrollTo({top:y==null?max:Math.min(y,max),behavior:b});
  });


  /* đổi giao diện sáng/tối, nhớ lựa chọn lần sau */
  var tgl=document.getElementById('theme'),rootEl=document.documentElement;
  function applyTheme(t,save){
    rootEl.setAttribute('data-theme',t);
    tgl.setAttribute('aria-pressed',t==='light');
    var m=document.querySelector('meta[name="color-scheme"]');if(m)m.content=t==='light'?'only light':'dark';
    var c=document.querySelector('meta[name="theme-color"]');if(c)c.content=t==='light'?'#fafafa':'#000000';
    if(save){try{localStorage.setItem('theme',t)}catch(e){}}
  }
  applyTheme(rootEl.getAttribute('data-theme')==='light'?'light':'dark',false);
  /* chưa tự chọn sáng/tối thì đi theo cài đặt của máy, máy đổi thì trang đổi theo */
  try{var mqT=matchMedia('(prefers-color-scheme: light)'),onSys=function(e){var sv=null;try{sv=localStorage.getItem('theme')}catch(x){}if(sv!=='light'&&sv!=='dark')applyTheme(e.matches?'light':'dark',false)};
    if(mqT.addEventListener)mqT.addEventListener('change',onSys);else if(mqT.addListener)mqT.addListener(onSys)}catch(e){}
  /* thấu kính: chép cảnh pixel vào trong kính để phóng to phần nằm bên dưới */
  (function(){var s=tgl.querySelector('.sc svg'),m=tgl.querySelector('.kn .mg');if(s&&m&&!m.firstChild)m.appendChild(s.cloneNode(true))})();
  Object.assign(EN,{"Chế độ sáng":"Light mode","Chế độ tối":"Dark mode","Đổi giao diện sáng hoặc tối (T)":"Switch light or dark theme (T)"});
  function swTitle(){var d=new Date(),l=rootEl.getAttribute('data-theme')==='light';tgl.title=T(l?'Chế độ sáng':'Chế độ tối')+' · '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')+' (T)'}
  tgl.addEventListener('pointerenter',swTitle);tgl.addEventListener('focus',swTitle);
  var swT=0,motionOk=function(){return !calm&&rootEl.getAttribute('data-motion')!=='off'&&!matchMedia('(prefers-reduced-motion: reduce)').matches};
  tgl.addEventListener('click',function(){
    var next=rootEl.getAttribute('data-theme')==='light'?'dark':'light';
    if(motionOk()){tgl.classList.remove('mv');void tgl.offsetWidth;tgl.classList.add('mv');clearTimeout(swT);swT=setTimeout(function(){tgl.classList.remove('mv')},760)}
    /* trang mới loang ra thành vòng tròn từ công tắc; trình duyệt không hỗ trợ thì đổi ngay */
    if(motionOk()&&document.startViewTransition&&!document.hidden){
      var r=tgl.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2,rad=Math.ceil(Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y)));
      rootEl.classList.add('vtt');
      try{
        var vt=document.startViewTransition(function(){applyTheme(next,true);swTitle()});
        vt.ready.then(function(){rootEl.animate({clipPath:['circle(0px at '+x+'px '+y+'px)','circle('+rad+'px at '+x+'px '+y+'px)']},{duration:620,easing:'cubic-bezier(.45,0,.2,1)',pseudoElement:'::view-transition-new(root)'})}).catch(function(){});
        vt.finished.then(function(){rootEl.classList.remove('vtt')},function(){rootEl.classList.remove('vtt')});
        return;
      }catch(e){rootEl.classList.remove('vtt')}
    }
    applyTheme(next,true);swTitle();
  });

  /* ===== thêm chi tiết chuyển động ===== */
  /* tiêu đề: tách từng từ để trồi lên lần lượt */
  function splitWords(root){
    if(root.__vih===undefined)root.__vih=root.innerHTML;
    var n=0;
    (function walk(node){
      Array.prototype.slice.call(node.childNodes).forEach(function(c){
        if(c.nodeType===3){
          var f=document.createDocumentFragment();
          c.nodeValue.split(/(\s+)/).forEach(function(p){
            if(!p)return;
            if(/^\s+$/.test(p)){f.appendChild(document.createTextNode(p));return}
            var w=document.createElement('span'),i=document.createElement('span');
            w.className='w';i.textContent=p;i.style.transitionDelay=(100+n++*70)+'ms';
            w.appendChild(i);f.appendChild(w);
          });
          c.parentNode.replaceChild(f,c);
        }else if(c.nodeType===1)walk(c);
      });
    })(root);
  }
  /* khung terminal: dòng nào còn để mẫu [..] thì ẩn */
  document.querySelectorAll('.panel pre .c').forEach(function(c){
    if(!PH(c.textContent))return;
    var k=c.previousElementSibling,n=c.nextSibling;
    if(n&&n.nodeType===3)n.nodeValue=n.nodeValue.replace(/^\n/,'');
    c.remove();if(k&&k.classList.contains('k'))k.remove();
  });
  if(!calm){
    document.querySelectorAll('.rv h2,.intro h1').forEach(splitWords);
    /* khung terminal: mỗi dòng một nhịp */
    var pre=document.querySelector('.panel pre');
    if(pre)pre.innerHTML=pre.innerHTML.split('\n').map(function(l,i){return '<span class="ln" style="transition-delay:'+(350+i*110)+'ms">'+l+'</span>'}).join('');
  }

  /* chuột: nút bị hút nhẹ, thẻ và ảnh nghiêng 3D */
  if(!calm&&matchMedia('(pointer:fine)').matches){
    var mag=null,tilt=null;
    function rest(){
      if(mag){mag.style.setProperty('--bx','0px');mag.style.setProperty('--by','0px');mag=null}
    }
    function untilt(){
      if(tilt){tilt.style.setProperty('--rx','0deg');tilt.style.setProperty('--ry','0deg');tilt=null}
    }
    var tE=null,tR=0;
    document.addEventListener('pointermove',function(ev){tE=ev;if(!tR)tR=requestAnimationFrame(function(){tR=0;tiltMove(tE)})},{passive:true});
    function tiltMove(e){
      if(e.pointerType==='touch')return;
      var tg=e.target.closest?e.target:null,b=tg&&tg.closest('.btn'),t=tg&&tg.closest('.hob,.me'),r;
      if(b!==mag)rest();
      if(b){r=b.getBoundingClientRect();b.style.setProperty('--bx',((e.clientX-r.left-r.width/2)*.22).toFixed(1)+'px');b.style.setProperty('--by',((e.clientY-r.top-r.height/2)*.35).toFixed(1)+'px');mag=b}
      if(t!==tilt)untilt();
      if(t){r=t.getBoundingClientRect();t.style.setProperty('--rx',(((e.clientY-r.top)/r.height-.5)*-7).toFixed(2)+'deg');t.style.setProperty('--ry',(((e.clientX-r.left)/r.width-.5)*7).toFixed(2)+'deg');tilt=t}
    }
    document.documentElement.addEventListener('mouseleave',function(){rest();untilt()});
  }

  /* cuộn: ảnh trong mục "Vài tấm ảnh" trôi lệch nhau, dải chữ nghiêng theo tốc độ cuộn */
  if(!calm){
    var band=document.querySelector('.band'),lastY=scrollY,skT=0,homeEl=document.getElementById('home');
    var s3=0;
    function onScroll3(){if(!s3)s3=requestAnimationFrame(doScroll3)}
    function doScroll3(){
      s3=0;
      if(homeEl.hidden)return;
      if(band){
        var v=scrollY-lastY;lastY=scrollY;
        band.style.setProperty('--sk',Math.max(-10,Math.min(10,-v*.35)).toFixed(1)+'deg');
        clearTimeout(skT);skT=setTimeout(function(){band.style.setProperty('--sk','0deg')},120);
      }
    }
    addEventListener('scroll',onScroll3,{passive:true});onScroll3();
  }

  if(!calm&&clk){
    /* chuột: ánh sáng đi theo, đồng hồ nghiêng nhẹ ngược hướng chuột */
    clk.addEventListener('pointermove',function(e){
      if(e.pointerType==='touch')return;
      var r=clk.getBoundingClientRect();
      tx=((e.clientX-r.left)/r.width-.5)*-30;ty=((e.clientY-r.top)/r.height-.5)*-20;kick();
    });
    clk.addEventListener('pointerleave',function(){tx=0;ty=0;kick()});
  }

  /* ánh sáng chạy trên thẻ (kể cả thẻ tạo ra ở trang con) */
  var gE=null,gR=0;
  document.addEventListener('pointermove',function(ev){gE=ev;if(gR)return;gR=requestAnimationFrame(function(){gR=0;var e=gE,t=e.target.closest&&e.target.closest('.card,.hob');
    if(t){var r=t.getBoundingClientRect();t.style.setProperty('--x',(e.clientX-r.left)+'px');t.style.setProperty('--y',(e.clientY-r.top)+'px')}})},{passive:true});

  /* đã bỏ vòng tròn đi theo chuột */
  document.getElementById('year').textContent=new Date().getFullYear();

  var items=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){window.AXR&&AXR.cover(e.target);e.target.classList.add('in');io.unobserve(e.target)}});
    },{threshold:.1,rootMargin:'0px 0px -5% 0px'});
    items.forEach(function(n){io.observe(n)});
  }else{items.forEach(function(n){n.classList.add('in')})}

  var map={};
  document.querySelectorAll('.bar nav a').forEach(function(a){map[a.getAttribute('href').slice(1)]=a});
  if('IntersectionObserver' in window){
    var nav=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting&&map[e.target.id]){
          Object.keys(map).forEach(function(k){map[k].classList.remove('on')});
          map[e.target.id].classList.add('on');
        }
      });
    },{rootMargin:'-40% 0px -55% 0px'});
    document.querySelectorAll('main .grp[id]').forEach(function(s){nav.observe(s)});
  }

  /* ===== chi tiết thêm (đợt 3) ===== */
  /* màn chào: đếm 0 đến 100 rồi kéo lên, chỉ lần đầu trong mỗi phiên */
  var rootE=document.documentElement;
  /* ===== nhạc mở đầu: bé rồi to dần, hết sau khoảng 10 giây (không phải nhạc trong trình phát) =====
     Trình duyệt chỉ cho phát tiếng sau khi người xem bấm, nên màn chào có nút "Vào trang, có nhạc".
     Nhạc intro: audio/intro.mp3 (33 giây, to dần rồi giữ ở mức vừa; chỉnh INTRO_PEAK nếu muốn to/nhỏ hơn).
     Không có file thì trang tự tạo một đoạn nhạc vui, hồi hộp rồi bùng nổ (160 BPM) bằng trình duyệt, không cần tải gì thêm. */
  var INTRO_SRC='audio/intro.mp3',INTRO_MS=33000,INTRO_PEAK=.3,INTRO_IN=.45,INTRO_UP=.92; /* INTRO_PEAK: âm lượng tối đa (0 đến 1); INTRO_IN: phần đầu to dần; INTRO_UP: từ đó nhỏ dần về 0 */ /* INTRO_UP: phần trăm thời gian to dần, phần còn lại nhỏ dần về 0 */
  var Intro=(function(){
    var ctx=null,master=null,au=null,nodes=[],endT=0,running=false;
    function probe(){}
    function curve(inn){
      var n=240,a=new Float32Array(n);
      for(var i=0;i<n;i++){
        var u=i/(n-1),x=Math.min(1,u/inn),up=x*x*(3-2*x),rel=u>INTRO_UP?Math.cos((u-INTRO_UP)/(1-INTRO_UP)*Math.PI/2):1;
        a[i]=INTRO_PEAK*up*rel;
      }
      return a;
    }
    function start(){
      if(running)return;
      try{
        var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
        ctx=new AC();if(ctx.resume)ctx.resume();
        master=ctx.createGain();master.gain.value=0;master.connect(ctx.destination);
        master.gain.setValueCurveAtTime(curve(INTRO_IN),ctx.currentTime+.05,INTRO_MS/1000);
        running=true;
        au=new Audio(INTRO_SRC);au.loop=false;
        try{ctx.createMediaElementSource(au).connect(master)}catch(e){au.volume=INTRO_PEAK}
        au.addEventListener('error',function(){stop(0)});
        var p=au.play();if(p&&p.catch)p.catch(function(){stop(0)});
        endT=setTimeout(function(){stop(0)},INTRO_MS+150);
      }catch(e){running=false}
    }

    /* dừng sớm: tắt dần trong fade giây (hoặc dừng ngay khi fade = 0) */
    function stop(fade){
      if(!running)return;running=false;clearTimeout(endT);
      var c=ctx,m=master,a=au,ns=nodes;nodes=[];au=null;
      function kill(){try{if(a){a.pause();a.removeAttribute('src');a.load()}}catch(e){}ns.forEach(function(o){try{o.stop()}catch(e){}});try{c.close()}catch(e){}}
      if(fade>0){try{m.gain.cancelScheduledValues(c.currentTime);m.gain.setValueAtTime(m.gain.value,c.currentTime);m.gain.linearRampToValueAtTime(0,c.currentTime+fade)}catch(e){}setTimeout(kill,fade*1000+80)}
      else kill();
    }
    return {probe:probe,start:start,stop:stop};
  })();
  Intro.probe();
  if(rootE.classList.contains('pre-on')){
    var curt=document.querySelector('.pre'),cb=curt.querySelector('b'),t0=performance.now(),fin=false;
    /* đếm xong thì hiện 2 nút; bấm "có nhạc" mới phát được tiếng (quy định của trình duyệt) */
    function gate(){
      if(fin)return;
      curt.classList.add('gate');curt.removeAttribute('aria-hidden');curt.setAttribute('role','dialog');curt.setAttribute('aria-label',T('Vào trang'));
      var sm=curt.querySelector('small');if(sm)sm.textContent=T('Sẵn sàng rồi');
      var yes=curt.querySelector('.pgo');try{yes.focus({preventScroll:true})}catch(e){}
    }
    curt.addEventListener('click',function(e){
      var b=e.target.closest&&e.target.closest('[data-snd]');if(!b||fin)return;
      if(b.getAttribute('data-snd')==='1')Intro.start();
      done();
    });
    document.addEventListener('keydown',function(e){if(!fin&&e.key==='Escape'&&curt.classList.contains('gate'))done()});
    function done(){
      if(fin)return;fin=true;
      rootE.classList.add('ready');curt.classList.add('up');
      try{sessionStorage.setItem('seen','1')}catch(e){}
      setTimeout(function(){rootE.classList.remove('pre-on','ready')},950);
    }
    function step(now){
      var k=Math.min(1,(now-t0)/1100),e=1-Math.pow(1-k,3);
      cb.textContent=('00'+Math.round(e*100)).slice(-3);
      curt.style.setProperty('--k',e.toFixed(3));
      if(k<1&&!fin)requestAnimationFrame(step);else setTimeout(gate,150);
    }
    requestAnimationFrame(step);setTimeout(done,30000);
  }

  /* đổi tiêu đề tab khi bạn rời đi */
  var prevT=document.title;
  document.addEventListener('visibilitychange',function(){
    if(document.hidden){prevT=document.title;document.title=T('Đi đâu đấy? Quay lại nhé')}
    else document.title=prevT;
  });

  /* thông báo nhỏ + nút sao chép */
  var toastEl=document.getElementById('toast'),toastT=0;
  function say(m){toastEl.textContent=m;toastEl.classList.add('show');clearTimeout(toastT);toastT=setTimeout(function(){toastEl.classList.remove('show')},1900)}
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('[data-copy]');
    if(!b)return;
    var v=b.getAttribute('data-copy');b.classList.add('ok');setTimeout(function(){b.classList.remove('ok')},1600);
    if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(v).then(function(){say(T('Đã sao chép')+' '+v)},function(){say(v)});
    else say(v);
  });

  /* nút tắt/bật hiệu ứng: lưu lựa chọn rồi tải lại trang để áp dụng cho mọi hiệu ứng */
  var mtn=document.getElementById('motion'),motionOff=rootE.getAttribute('data-motion')==='off';
  function syncMtn(){motionOff=rootE.getAttribute('data-motion')==='off';mtn.setAttribute('aria-pressed',motionOff);mtn.title=T(motionOff?'Bật lại hiệu ứng (M)':'Tắt hiệu ứng (M)')}
  syncMtn();
  /* áp dụng NGAY, không tải lại trang: CSS đổi theo thuộc tính data-motion, các hiệu ứng JS tự theo dõi thuộc tính này */
  mtn.addEventListener('click',function(){
    var off=rootE.getAttribute('data-motion')!=='off';
    try{localStorage.setItem('motion',off?'off':'on')}catch(e){}
    if(off)rootE.setAttribute('data-motion','off');else rootE.removeAttribute('data-motion');
    say(T(off?'Đã tắt hiệu ứng':'Đã bật hiệu ứng'));
  });
  new MutationObserver(syncMtn).observe(rootE,{attributes:true,attributeFilter:['data-motion']});


  /* màu chữ: nút palette và phím C để tắt hoặc bật; hiệu ứng màu chỉ chạy khi chữ đang trên màn hình */
  (function(){
    /* nút tắt/bật màu chữ đã bỏ: màu chữ luôn bật, đổi màu bằng bảng màu (phím C) */
    Object.assign(EN,{"Đổi màu trang":"Change page colour","Bấm phím C để đổi màu trang.":"Press C to change the page colour."});
    var seen=typeof WeakSet==='function'?new WeakSet():null,io=null;
    if('IntersectionObserver' in window)io=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle('vis',e.isIntersecting)})},{rootMargin:'80px 0px'});
    function scan(){
      if(!io)return;
      document.querySelectorAll('h1,h2,.bye-t,#greet,.eyebrow,.big').forEach(function(el){if(seen){if(seen.has(el))return;seen.add(el)}io.observe(el)});
    }
    scan();window.addEventListener('hashchange',function(){setTimeout(scan,150)});
  })();

  /* mobile: dồn các nút phụ (nhạc, âm thanh, hiệu ứng, ngôn ngữ) vào nút ⋯ cho thanh menu gọn một hàng */
  (function(){
    var more=document.getElementById('more'),pan=document.getElementById('morep');if(!more||!pan||!window.matchMedia)return;
    Object.assign(EN,{"Thêm tuỳ chọn":"More options","Thêm":"More"});
    var items=['bgmlist','bgmtop','sfx','gifbtn','motion','lang'].map(function(i){return document.getElementById(i)}).filter(Boolean),
        marks=items.map(function(b){var m=document.createComment('');b.parentNode.insertBefore(m,b);return m}),
        mq=matchMedia('(max-width:40rem)');
    function close(){pan.hidden=true;more.setAttribute('aria-expanded','false')}
    function place(){
      items.forEach(function(b,i){if(mq.matches)pan.appendChild(b);else marks[i].parentNode.insertBefore(b,marks[i].nextSibling)});
      if(!mq.matches)close();
    }
    place();
    if(mq.addEventListener)mq.addEventListener('change',place);else if(mq.addListener)mq.addListener(place);
    more.addEventListener('click',function(){var o=pan.hidden;pan.hidden=!o;more.setAttribute('aria-expanded',o?'true':'false')});
    document.addEventListener('click',function(e){if(!pan.hidden&&!pan.contains(e.target)&&!more.contains(e.target))close()});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
    var bl=document.getElementById('bgmlist');if(bl)bl.addEventListener('click',close);
  })();

  /* điện thoại bật "xem bản dành cho máy tính": trang rộng 980px nhưng màn nhỏ, tăng cỡ chữ và nút cho dễ đọc, dễ bấm */
  (function(){
    try{
      var coarse=(matchMedia('(pointer:coarse)').matches)||navigator.maxTouchPoints>0,sw=Math.min(screen.width||9999,screen.height||9999);
      if(coarse&&sw<=640&&window.innerWidth>=760)rootE.classList.add('dm');
    }catch(e){}
  })();

  /* thanh "hôm nay đã trôi qua bao nhiêu phần trăm", tính theo đúng giờ đang hiện trên đồng hồ */
  (function(){
    var t=document.getElementById('dayt'),i=document.getElementById('dayi');if(!t||!i)return;
    Object.assign(EN,{"Hôm nay đã trôi qua":"Today so far"});
    function upd(){
      if(document.hidden)return;
      var h=+document.getElementById('hh').textContent,m=+document.getElementById('mm').textContent,sc=+document.getElementById('ss').textContent;
      if(isNaN(h)||isNaN(m))return;
      var p=Math.round((h*3600+m*60+(isNaN(sc)?0:sc))/864);
      i.style.setProperty('--p',p+'%');i.style.width=p+'%';t.textContent=T('Hôm nay đã trôi qua')+' · '+p+'%';
    }
    setTimeout(upd,900);setInterval(upd,20000);document.addEventListener('langchange',upd);
  })();

  /* phím tắt: T đổi sáng/tối, M tắt/bật hiệu ứng, C mở bảng màu, H lên đầu trang */
  document.addEventListener('keydown',function(e){
    if(e.metaKey||e.ctrlKey||e.altKey)return;
    var tg=e.target;
    if(tg&&(tg.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(tg.tagName)))return;
    var k=(e.key||'').toLowerCase();
    if(k==='t')tgl.click();
    else if(k==='m')mtn.click();
    else if(k==='c'){var cb=document.getElementById('accent');if(cb)cb.click()} /* C: mở bảng màu (nút tắt/bật màu chữ đã bỏ) */
    else if(k==='h'){
      if(location.hash.indexOf('#/')===0)location.hash='#hero';
      else window.scrollTo({top:0,behavior:calm?'auto':'smooth'});
    }
  });

  /* ===== chi tiết thêm (đợt 4) ===== */
  function once(sel,thr,fn){
    var els=document.querySelectorAll(sel);
    if(!('IntersectionObserver' in window)){els.forEach(fn);return}
    var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){o.unobserve(e.target);fn(e.target)}})},{threshold:thr});
    els.forEach(function(el){o.observe(el)});
  }
  var SECS=[['hero','Đồng hồ','profile hồ sơ clock'],['intro','Giới thiệu','profile ming avatar'],['links','Liên kết','link social mạng xã hội'],['live','Ngay lúc này','discord status trạng thái'],['now','Dạo này','now'],['play','Đang chơi','game'],['mod','Dự án việt hoá','mod dịch translate'],['hobby','Sở thích','hobby'],['idol','Nghệ sĩ','ca sĩ idol artist'],['playlist','Playlist','nhạc music bài hát'],['stats','Vài con số','số liệu thống kê numbers stats'],['facts','Sự thật thú vị','sự thật facts fun'],['qr','Mã QR','qr code quét mã'],['lab','Góc chơi','mini game lab'],['photos','Vài tấm ảnh','ảnh hình photo gallery'],['shelf','Kệ của tôi','kệ game backlog setup máy pc đang chơi phá đảo'],['log','Nhật ký','blog diary'],['tkb','Thời khoá biểu','lịch học tkb schedule timetable'],['faq','Hỏi đáp','faq câu hỏi'],['contact','Liên hệ','contact discord facebook email'],['map','Bản đồ','map địa chỉ vị trí thời tiết weather']];
  /* bấm tên Ming: đang ở đầu trang thì tải lại, còn không thì cuộn lên đầu (không để lại #hero trên link) */
  (function(){
    var br=document.getElementById('brand');if(!br)return;
    br.addEventListener('click',function(e){
      if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button)return;
      e.preventDefault();
      if(location.hash.indexOf('#/')===0){location.hash='';return}
      if((window.scrollY||0)<40){location.reload();return}
      try{history.replaceState(null,'',location.pathname+location.search)}catch(x){}
      window.scrollTo({top:0,behavior:(typeof calm!=='undefined'&&calm)?'auto':'smooth'});
    });
  })();

  /* từ xoay vòng ở phần giới thiệu */
  var trk=document.querySelector('.trk');
  if(trk&&!calm){
    var rn=trk.children.length-1,ri=0;
    setInterval(function(){
      if(document.hidden)return;ri++;trk.style.transform='translateY(-'+(ri*1.6)+'em)';
      if(ri===rn){setTimeout(function(){trk.style.transition='none';trk.style.transform='translateY(0)';ri=0;void trk.offsetWidth;trk.style.transition=''},750)}
    },2200);
  }

  /* con số đếm lên khi cuộn tới. Sửa ngày sinh ở dòng BIRTH */
  var BIRTH='2004-11-08'; /* năm-tháng-ngày */
  var bd=document.getElementById('days');
  if(bd){var dd=Math.floor((Date.now()-new Date(BIRTH+'T00:00:00+07:00'))/864e5);if(dd>0)bd.setAttribute('data-count',dd)}
  function fmt(n){return n.toLocaleString(LOC())}
  function countUp(el){
    var to=+el.getAttribute('data-count')||0,t0=performance.now();
    (function f(now){var k=Math.min(1,(now-t0)/1500),e=1-Math.pow(1-k,3);el.textContent=fmt(Math.round(to*e));if(k<1)requestAnimationFrame(f)})(t0);
  }
  var cn=document.querySelectorAll('[data-count]');
  if(calm){cn.forEach(function(el){el.textContent=fmt(+el.getAttribute('data-count')||0)})}
  else{
    cn.forEach(function(el){el.textContent='0'});
    once('.stats',.4,function(box){box.querySelectorAll('[data-count]').forEach(countUp)});
  }

  /* nhãn mục giải mã từng chữ */
  function scramble(el){
    var fin=el.textContent,ch='abcdefghijklmnopqrstuvwxyz0123456789/_<>',t0=performance.now();
    (function f(now){
      var k=Math.min(1,(now-t0)/700),n=Math.floor(k*fin.length),out='';
      for(var i=0;i<fin.length;i++){var c=fin.charAt(i);out+=(i<n||c===' ')?c:ch.charAt(Math.random()*ch.length|0)}
      el.textContent=k<1?out:fin;
      if(k<1)requestAnimationFrame(f);
    })(t0);
  }
  if(!calm)once('.eyebrow',.8,function(e){scramble(e.querySelector('span')||e)});

  /* chấm điều hướng bên phải */
  var dots=document.createElement('nav');
  dots.className='dots';dots.setAttribute('aria-label','Các mục trên trang');
  dots.innerHTML=SECS.map(function(x){return '<a href="#'+x[0]+'" data-l="'+T(x[1])+'" aria-label="'+T(x[1])+'"><i></i></a>'}).join('');
  document.body.appendChild(dots);
  if('IntersectionObserver' in window){
    var dmap={};
    dots.querySelectorAll('a').forEach(function(a){dmap[a.getAttribute('href').slice(1)]=a});
    var dio=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting&&dmap[e.target.id]){Object.keys(dmap).forEach(function(k){dmap[k].classList.remove('on')});dmap[e.target.id].classList.add('on')}});
    },{rootMargin:'-45% 0px -50% 0px'});
    SECS.forEach(function(x){var el=document.getElementById(x[0]);if(el)dio.observe(el)});
  }

  /* gợn sóng mỗi lần bấm */
  if(!calm){
    document.addEventListener('pointerdown',function(e){
      var r=document.createElement('div');r.className='rip';r.style.left=e.clientX+'px';r.style.top=e.clientY+'px';
      document.body.appendChild(r);
      if(r.animate){r.animate([{transform:'scale(.3)',opacity:.7},{transform:'scale(5)',opacity:0}],{duration:700,easing:'ease-out'}).onfinish=function(){r.remove()}}else r.remove();
    });
  }

  /* điều bí mật: bấm liên tiếp 7 lần vào đồng hồ */
  var ck=document.getElementById('clock'),cc=0,cT=0;
  function burst(x,y){
    for(var i=0;i<40;i++){
      var p=document.createElement('i');p.className='pt';p.style.left=x+'px';p.style.top=y+'px';document.body.appendChild(p);
      var ang=Math.random()*Math.PI*2,d=80+Math.random()*220,dx=Math.cos(ang)*d,dy=Math.sin(ang)*d+60,rot=Math.random()*540-270;
      (function(p,dx,dy,rot){
        p.animate([{transform:'translate(0,0) rotate(0deg)',opacity:1},{transform:'translate('+dx+'px,'+dy+'px) rotate('+rot+'deg)',opacity:0}],{duration:900+Math.random()*700,easing:'cubic-bezier(.2,.7,.3,1)'}).onfinish=function(){p.remove()};
      })(p,dx,dy,rot);
    }
  }
  if(ck)ck.addEventListener('click',function(){
    cc++;clearTimeout(cT);cT=setTimeout(function(){cc=0},1800);
    if(cc>=7){cc=0;if(!calm&&ck.animate){var r=ck.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2)}say(T('Bạn tìm ra điều bí mật rồi, tôi cũng hay ngồi bấm đồng hồ'))}
  });

  /* đếm lần ghé thăm và thời gian ở lại */
  var vEl=document.getElementById('visits');
  if(vEl){
    var vn=1,vt0=Date.now();
    try{
      vn=+localStorage.getItem('visits')||0;
      if(!sessionStorage.getItem('counted')){vn++;localStorage.setItem('visits',vn);sessionStorage.setItem('counted','1')}
      if(!vn)vn=1;
    }catch(e){vn=1}
    var vtick=function(){var sec=Math.floor((Date.now()-vt0)/1000),m=Math.floor(sec/60),r=sec%60;vEl.textContent=(LANG==='en'?'Visit #'+vn+' · Here for ':'Lần ghé thứ '+vn+' · Ở đây ')+('0'+m).slice(-2)+':'+('0'+r).slice(-2)};
    vtick();setInterval(function(){if(!document.hidden)vtick()},1000);
  }

  /* bảng tìm nhanh: / hoặc Ctrl+K */
  var cmd=document.getElementById('cmd'),cq=document.getElementById('cmdq'),cl=document.getElementById('cmdl'),cItems=[],cSel=0,cPrev=null;
  function copyTxt(v,msg){
    if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(v).then(function(){say(msg)},function(){say(v)});
    else say(v);
  }
  function norm(t){return String(t).toLowerCase().replace(/đ/g,'d').normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
  function cmdBuild(){
    var L=[];
    SECS.forEach(function(x){L.push({t:x[1],k:'Mục',h:'#'+x[0],w:x[2]||''})});
    Object.keys(DATA).forEach(function(k){
      L.push({t:DATA[k].label,k:DATA[k].kind||'Sở thích',h:'#/'+k});
      DATA[k].items.forEach(function(it){L.push({t:it.t,k:DATA[k].label,h:'#/'+k+'/'+it.id})});
    });
    L.push({t:'Đổi giao diện sáng hoặc tối',k:'Hành động',f:function(){tgl.click()}});
    L.push({t:'Tắt hoặc bật hiệu ứng',k:'Hành động',f:function(){mtn.click()}});
    L.push({t:'Xem một sự thật ngẫu nhiên',k:'Hành động',w:'fact sự thật',f:function(){var b=document.getElementById('ffrnd');if(b)b.click()}});
    [['Ngẫu nhiên một điều về trang này','rndb'],['Bật hoặc tắt nhạc','bgmq']].forEach(function(a){
      L.push({t:a[0],k:'Hành động',f:function(){document.getElementById(a[1]).click()}});
    });
    L.push({t:'Sao chép link trang này',k:'Hành động',f:function(){copyTxt(location.href,T('Đã sao chép link trang'))}});
    L.push({t:'Lên đầu trang',k:'Hành động',f:function(){window.scrollTo({top:0,behavior:calm?'auto':'smooth'})}});
    return L.map(function(x){return {t:T(x.t),k:T(x.k),h:x.h,f:x.f,w:(x.w||'')+' '+x.t+' '+x.k}});
  }
  function cmdRender(){
    var q=norm(cq.value.trim());
    cItems=cmdBuild().filter(function(x){return !q||norm(x.t+' '+x.k+' '+x.w).indexOf(q)>-1}).slice(0,7);
    cSel=0;
    cl.innerHTML=cItems.length?cItems.map(function(x,i){return '<li role="option" data-i="'+i+'"'+(i===0?' class="sel"':'')+'><span>'+esc(x.t)+'</span><small>'+esc(x.k)+'</small></li>'}).join(''):'<li><span>'+T('Không tìm thấy gì')+'</span></li>';
  }
  function cmdOpen(){cPrev=document.activeElement;cmd.hidden=false;cq.value='';cmdRender();cq.focus()}
  window.__cmdOpen=cmdOpen; /* thanh tiện ích bên trái gọi để mở Tìm nhanh */
  function cmdClose(){cmd.hidden=true;if(cPrev&&cPrev.focus)cPrev.focus()}
  function cmdMove(d){
    if(!cItems.length)return;
    var lis=cl.children;lis[cSel].classList.remove('sel');
    cSel=(cSel+d+cItems.length)%cItems.length;
    lis[cSel].classList.add('sel');lis[cSel].scrollIntoView({block:'nearest'});
  }
  function cmdGo(i){
    var x=cItems[i];if(!x)return;
    cmdClose();
    if(x.f){x.f();return}
    if(location.hash===x.h&&x.h.charAt(1)!=='/'){window.__openSec&&window.__openSec(x.h.slice(1));var el=document.getElementById(x.h.slice(1));if(el)el.scrollIntoView({behavior:calm?'auto':'smooth'})}
    else location.hash=x.h;
  }
  cq.addEventListener('input',cmdRender);
  cq.addEventListener('keydown',function(e){
    if(e.key==='Escape')cmdClose();
    else if(e.key==='ArrowDown'){e.preventDefault();cmdMove(1)}
    else if(e.key==='ArrowUp'){e.preventDefault();cmdMove(-1)}
    else if(e.key==='Enter'){e.preventDefault();cmdGo(cSel)}
  });
  cl.addEventListener('click',function(e){var li=e.target.closest('li[data-i]');if(li)cmdGo(+li.getAttribute('data-i'))});
  cl.addEventListener('mousemove',function(e){
    var li=e.target.closest('li[data-i]');if(!li)return;
    var i=+li.getAttribute('data-i');
    if(i!==cSel){cl.children[cSel].classList.remove('sel');cSel=i;li.classList.add('sel')}
  });
  cmd.addEventListener('click',function(e){if(e.target===cmd)cmdClose()});
  var srchB=document.getElementById('search');if(srchB)srchB.addEventListener('click',cmdOpen); /* nút tìm trên thanh menu đã thay bằng nút đổi màu; vẫn tìm bằng / hoặc Ctrl+K */
  document.addEventListener('keydown',function(e){
    var k=(e.key||'').toLowerCase();
    if(k==='escape'&&!cmd.hidden){cmdClose();return}
    if((e.ctrlKey||e.metaKey)&&k==='k'){e.preventDefault();if(cmd.hidden)cmdOpen();else cmdClose();return}
    if(k==='/'&&cmd.hidden&&!e.ctrlKey&&!e.metaKey&&!e.altKey){
      var tg=e.target;
      if(tg&&(tg.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(tg.tagName)))return;
      e.preventDefault();cmdOpen();
    }
  });

  /* ============ NỘI DUNG SỞ THÍCH: sửa ở đây ============
     id: viết thường, không dấu, không khoảng trắng (dùng cho đường dẫn)
     img: đường dẫn ảnh bìa (bỏ vào thư mục images/)
     s: nhãn nhỏ (ví dụ "Đang chơi"), m: dòng phụ, d: giới thiệu, w: vì sao tôi thích
     tags: danh sách nhãn, link: link ngoài (tuỳ chọn), yt: ID video YouTube (tuỳ chọn, chỉ để nhúng nhạc) */
  var FBERR='if(this.dataset.f){this.src=this.dataset.f;delete this.dataset.f}else this.remove()';
  var DATA={
    /* Game điện thoại: chép một dòng game, thêm plat:'mobile' (ví dụ {id:'wild-rift',plat:'mobile',t:'Tên game',m:'MOBA · Điện thoại',s:'Hay chơi',img:'images/games/wild-rift.jpg',d:'...',w:'...',tags:['MOBA'],link:''}). Game PC không cần plat. */
    game:{label:'Game',shape:'',groups:[['pc','Game PC'],['mobile','Game điện thoại']],lead:'Những game tôi chơi nhiều nhất và lý do tôi quay lại với chúng.',items:[
      {id:'lol',ic:'crown',t:'League of Legends',m:'MOBA 5v5 · PC',s:'Chơi hằng ngày',img:'images/games/lol.jpg',fb:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg',d:'MOBA 5v5. Tag của tôi là ming#0811, server VN. Ba tướng tôi thông thạo cao nhất là Lee Sin, Zed và Yasuo.',w:'Tôi đã chơi game này hơn 11 năm rồi nên tới giờ vẫn chơi.',tags:['5v5','VN'],link:'https://www.op.gg/'},
      {id:'delta-force',ic:'crosshair',t:'Delta Force',m:'FPS chiến thuật · PC',s:'Đang cày',img:'images/games/delta-force.jpg',fb:'https://cdn.akamai.steamstatic.com/steam/apps/2507950/header.jpg',d:'Game bắn súng chiến thuật theo đội, có chế độ chiến dịch và đánh quy mô lớn.',w:'Tôi chơi vì game giải trí rất cao, nhịp độ nhanh.',tags:['FPS','Đồng đội'],link:'https://store.steampowered.com/app/2507950'},
      {id:'poe2',ic:'flame',t:'Path of Exile 2',m:'ARPG · PC',s:'Đang build',img:'images/games/poe2.jpg',fb:'https://cdn.akamai.steamstatic.com/steam/apps/2694490/header.jpg',d:'Game nhập vai hành động kiểu Diablo, build nhân vật rất sâu.',w:'Tôi chơi vì game có tính chi tiết rất cao, đồ hoạ ổn định và có nhiều thứ để học hỏi.',tags:['ARPG','Build'],link:'https://store.steampowered.com/app/2694490'}
    ]},
    truyen:{label:'Đọc truyện',shape:'',lead:'Manhwa, manhua tôi đã đọc và đang theo dõi.',items:[
      {id:'truyen-1',t:'Tên bộ truyện 1',m:'Manhwa · Hành động',s:'Đang theo',img:'images/truyen/truyen-1.jpg',d:'Bộ truyện này nói về điều gì, không cần kể hết nội dung.',w:'Điều làm tôi muốn đọc tiếp mỗi tuần.',tags:['Manhwa','Hành động'],link:''},
      {id:'truyen-2',t:'Tên bộ truyện 2',m:'Manhua · Tu tiên',s:'Đọc xong',img:'images/truyen/truyen-2.jpg',d:'Giới thiệu ngắn về bộ thứ hai.',w:'Vì sao tôi nhớ bộ này.',tags:['Manhua'],link:''},
      {id:'truyen-3',t:'Tên bộ truyện 3',m:'Manhwa · Đời thường',s:'Muốn đọc',img:'images/truyen/truyen-3.jpg',d:'Giới thiệu ngắn về bộ thứ ba.',w:'Vì sao tôi muốn đọc.',tags:['Manhwa'],link:''}
    ]},
    nhac:{label:'Nhạc',shape:'sq',lead:'Bấm vào một playlist để nghe ngay tại đây.',items:[
      {id:'vietnam-songs',t:'Vietnam songs',m:'Playlist · YouTube',s:'Hay nghe',img:'images/nhac/vietnam-songs.jpg',d:'Playlist nhạc Việt tôi nghe nhiều nhất.',w:'',tags:['Nhạc Việt','YouTube'],link:'https://www.youtube.com/playlist?list=PLHVf9HneIWTjOiAODKlMP_rgjO724R_PS',embed:'https://www.youtube-nocookie.com/embed/videoseries?list=PLHVf9HneIWTjOiAODKlMP_rgjO724R_PS'},
      {id:'listen-and-feel',t:'Listen and feel',m:'Playlist · YouTube',s:'Chill',img:'images/nhac/listen-and-feel.jpg',d:'Playlist để thư giãn, bật lên là quên hết mọi thứ.',w:'',tags:['Chill','YouTube'],link:'https://www.youtube.com/playlist?list=PLHVf9HneIWTjwGeV-a52daOvAwexYT8rm',embed:'https://www.youtube-nocookie.com/embed/videoseries?list=PLHVf9HneIWTjwGeV-a52daOvAwexYT8rm'},
      {id:'heal-or-broken-heart',t:'Heal or broken heart',m:'Playlist · Spotify',s:'Tâm trạng',img:'images/nhac/heal-or-broken-heart.jpg',d:'Playlist Spotify cho lúc cần chữa lành hoặc đang tan vỡ.',w:'',tags:['Spotify','Tâm trạng'],link:'https://open.spotify.com/playlist/4uAY7TdJVBdeEyHZ4EX26b',embed:'https://open.spotify.com/embed/playlist/4uAY7TdJVBdeEyHZ4EX26b',eh:352}
    ]},
    mod:{label:'Việt hoá',kind:'Dự án',home:'mod',wl:'Tiến độ và cách cài',shape:'',lead:'Những dự án dịch tôi đang làm.',items:[
      /* thêm cho mỗi bản dịch (để trong [ngoặc vuông] hoặc bỏ trống thì tự ẩn):
         ver = phiên bản game/mod hỗ trợ, up = ngày cập nhật 'YYYY-MM-DD', dl = link tải bản dịch, cl = những gì mới (mới nhất ở trên) */
      {id:'minecraft',ic:'cube',t:'Việt hoá Minecraft',m:'Gói ngôn ngữ cho mod và modpack',s:'Đang dịch',p:42,img:'images/mod/minecraft.jpg',d:'Dịch giao diện, vật phẩm và mô tả của các mod Minecraft sang tiếng Việt.',w:'[Dịch tới đâu rồi, cách cài bản dịch.]',tags:['Minecraft','Mod','vi_vn'],link:'https://modrinth.com/',
        ver:'[vd: 1.21.1]',up:'[YYYY-MM-DD]',dl:'',cl:['[Mới: dịch xong phần ...]','[Sửa: ...]']},
      {id:'stardew-valley',ic:'sprout',t:'Việt hoá Stardew Valley',m:'Bản dịch cho mod · SMAPI',s:'Đang dịch',p:18,img:'images/mod/stardew-valley.jpg',d:'Dịch các mod Stardew Valley sang tiếng Việt để bạn bè chơi cho dễ.',w:'[Dịch tới đâu rồi, cách cài bản dịch.]',tags:['Stardew Valley','SMAPI','Mod'],link:'https://www.nexusmods.com/stardewvalley',
        ver:'[vd: 1.6 · SMAPI 4.x]',up:'[YYYY-MM-DD]',dl:'',cl:['[Mới: ...]']}
    ]},
    phim:{label:'Xem phim',shape:'',lead:'Những bộ phim tôi xem đi xem lại.',items:[
      {id:'phim-1',t:'Tên phim 1',m:'Marvel · Hành động',s:'Xem lại nhiều lần',img:'images/phim/phim-1.jpg',d:'Phim nói về điều gì.',w:'Cảnh hoặc nhân vật tôi thích nhất.',tags:['Marvel'],link:''},
      {id:'phim-2',t:'Tên phim 2',m:'DC · Hành động',s:'Mới xem',img:'images/phim/phim-2.jpg',d:'Giới thiệu ngắn về phim thứ hai.',w:'Cảm nhận của tôi.',tags:['DC'],link:''}
    ]}
  };
  /* mục còn để mẫu thì ẩn: tên bắt đầu bằng "Tên bộ truyện/phim/bài hát", hoặc chữ trong [ngoặc vuông].
     Danh mục nào hết mục thì ẩn luôn thẻ của nó. Đổi tên thật vào là tự hiện lại. */
  Object.keys(DATA).forEach(function(k){
    var c=DATA[k];
    c.items=c.items.filter(function(x){return !/^(Tên (bộ truyện|phim|bài hát)|\[)/.test(x.t||'')});
    c.items.forEach(function(x){['d','w','m','s','ver','up'].forEach(function(f){if(PH(x[f]))x[f]=''});if(x.cl)x.cl=x.cl.filter(function(t){return t&&!PH(t)});if(x.dl&&!/^https?:\/\//.test(x.dl))x.dl=''});
    if(c.groups)c.items.forEach(function(x){x.plat=x.plat||'pc'});
  });

  /* ============ BỘ CHUYỂN TRANG (không cần sửa) ============ */
  var home=document.getElementById('home'),view=document.getElementById('view'),base=document.title;
  function esc(s){return T(String(s==null?'':s)).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  function fdate(s){var m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s||''));return m?m[3]+'/'+m[2]+'/'+m[1]:esc(s)}
  function ph(src,alt,i,fb){return '<div class="ph" data-i="'+esc(String(i||'?').charAt(0))+'"><img src="'+esc(src)+'" alt="'+esc(alt)+'"'+(fb?' data-f="'+esc(fb)+'"':'')+' loading="lazy" decoding="async" onerror="'+FBERR+'"></div>'}
  function list(k){
    var c=DATA[k];
    function card(x,i){return '<a class="item '+c.shape+'" style="--n:'+i+'" href="#/'+k+'/'+esc(x.id)+'">'+ph(x.img,x.t,x.t,x.fb)+(x.s?'<span class="pill">'+esc(x.s)+'</span>':'')+'<h3>'+esc(x.t)+'</h3><p>'+esc(x.m)+'</p></a>'}
    function grid(its){return its.length?'<div class="items">'+its.map(card).join('')+'</div>':'<p class="empty">'+T('Sắp cập nhật, tôi sẽ thêm dần.')+'</p>'}
    var body;
    if(c.groups){
      body=c.groups.map(function(g){
        var its=c.items.filter(function(x){return x.plat===g[0]});
        return '<h3 class="gh">'+icn(g[0]==='mobile'?'phone':'monitor')+esc(g[1])+' <small>'+its.length+'</small></h3>'+grid(its);
      }).join('');
    }else body=grid(c.items);
    return '<a class="back" href="#'+(c.home||'hobby')+'">'+T('← Trang chủ')+'</a><p class="eyebrow">'+esc(c.kind||'Sở thích')+'</p><h2>'+esc(c.label)+'</h2><p class="lead">'+esc(c.lead)+'</p>'+body+'<a class="back bot" href="#'+(c.home||'hobby')+'">'+T('← Trang chủ')+'</a>';
  }
  function detail(k,id){
    var c=DATA[k],i=-1;
    c.items.forEach(function(x,n){if(x.id===id)i=n});
    if(i<0)return list(k);
    var x=c.items[i],p=c.items[i-1],n=c.items[i+1];
    var ok=/^https?:\/\//.test(x.link||'');
    return '<a class="back" href="#/'+k+'">'+T('← Tất cả')+' '+esc(c.label).toLowerCase()+'</a>'+
      '<div class="detail '+c.shape+'"><div>'+ph(x.img,x.t,x.t,x.fb)+'</div><div>'+
      (x.s?'<span class="pill">'+esc(x.s)+'</span>':'')+'<h1>'+esc(x.t)+'</h1><p class="meta">'+esc(x.m)+'</p>'+
      (x.p!=null?'<p class="rows" style="border:0"><span class="pg" style="margin:.4rem 0 .3rem;flex:none;width:12rem"><i style="--v:'+x.p+'%"></i></span><em style="font:400 .78rem var(--mono);font-style:normal;color:var(--muted)">'+T('Tiến độ')+' '+x.p+'%</em></p>':'')+
      /* bản dịch: phiên bản hỗ trợ, ngày cập nhật, nút tải */
      ((x.ver||x.up)?'<dl class="mdi">'+(x.ver?'<dt>'+T('Phiên bản')+'</dt><dd>'+esc(x.ver)+'</dd>':'')+(x.up?'<dt>'+T('Cập nhật')+'</dt><dd>'+fdate(x.up)+'</dd>':'')+'</dl>':'')+
      (x.dl?'<p class="mdlk"><a class="btn" href="'+esc(x.dl)+'" target="_blank" rel="noopener">'+T('Tải bản dịch')+'</a></p>':'')+
      (x.d?'<h4>'+T('Giới thiệu')+'</h4><p>'+esc(x.d)+'</p>':'')+(x.w?'<h4>'+esc(c.wl||'Vì sao tôi thích')+'</h4><p>'+esc(x.w)+'</p>':'')+
      ((x.cl&&x.cl.length)?'<h4>'+T('Có gì mới')+'</h4><ul class="clog">'+x.cl.map(function(t){return '<li>'+esc(t)+'</li>'}).join('')+'</ul>':'')+
      ((x.tags&&x.tags.length)?'<ul class="chips">'+x.tags.map(function(t){return '<li>'+esc(t)+'</li>'}).join('')+'</ul>':'')+
      (ok?'<p style="margin-top:1.5rem"><a class="btn line" href="'+esc(x.link)+'" target="_blank" rel="noopener">'+T('Xem thêm')+'</a></p>':'')+
      (x.embed&&/^https:\/\//.test(x.embed)?'<div class="embed"'+(x.eh?' style="aspect-ratio:auto;height:'+x.eh+'px;max-width:40rem"':'')+'><iframe title="'+esc(x.t)+'" loading="lazy" decoding="async" allow="autoplay; encrypted-media; picture-in-picture; clipboard-write; fullscreen" allowfullscreen src="'+String(x.embed).replace(/"/g,'&quot;')+'"></iframe></div>':'')+(x.yt?'<div class="embed"><iframe title="'+esc(x.t)+'" loading="lazy" decoding="async" allow="encrypted-media; picture-in-picture" allowfullscreen src="https://www.youtube-nocookie.com/embed/'+encodeURIComponent(x.yt)+'"></iframe></div>':'')+
      '</div></div><div class="pn"><span>'+(p?'<a href="#/'+k+'/'+esc(p.id)+'">← '+esc(p.t)+'</a>':'')+'</span><span>'+(n?'<a href="#/'+k+'/'+esc(n.id)+'">'+esc(n.t)+' →</a>':'')+'</span></div>';
  }
  function routeApply(){
    var h=location.hash,m=h.match(/^#\/([a-z]+)(?:\/([^\/]+))?$/);
    if(m&&!DATA[m[1]]){location.replace('#hobby');return}
    if(m&&DATA[m[1]]){
      var k=m[1];
      view.innerHTML=m[2]?detail(k,decodeURIComponent(m[2])):list(k);
      document.title=T(DATA[k].label)+' · '+base;
      home.hidden=true;view.hidden=false;window.scrollTo({top:0,behavior:'instant'});
    }else{
      var was=!view.hidden;
      view.hidden=true;home.hidden=false;document.title=base;
      if(was){var t=h.length>1&&document.getElementById(h.slice(1));if(t)t.scrollIntoView({behavior:'instant'});else window.scrollTo({top:0,behavior:'instant'})}
    }
  }
  function route(){routeApply();document.body.classList.toggle('in-view',!view.hidden)}
  window.addEventListener('hashchange',function(){
    if(!calm&&document.startViewTransition)document.startViewTransition(route);else route();
  });
  /* ===== hồ sơ game: sửa ở đây =====
     champs: tên tướng viết liền, đúng tên trong Data Dragon (ví dụ MissFortune, KaiSa, LeeSin) */
  var ME={steam:'https://steamcommunity.com/profiles/76561199474355109/',steamName:'ming',discordId:'873073921589661698' /* ID Discord (dãy số) để hiện trạng thái trực tiếp ở mục "Tôi đang làm gì lúc này". Bật Developer Mode > chuột phải vào tên tôi > Copy User ID, rồi vào server discord.gg/lanyard */,address:'Hải Phòng, Việt Nam' /* vị trí hiện ở bản đồ cuối trang: chỉ để thành phố cho riêng tư */,discordUser:'ming0811_' /* tên Discord hiển thị trên trang */,discordInvite:'' /* link mời vào server hoặc link kết bạn, dạng https://discord.gg/xxxx. Để trống thì nút Discord mở discord.com */,manualGame:'' /* chế độ thủ công khi Lanyard không nhận được game. Điền tên game, ví dụ 'League of Legends', thì thẻ Discord sẽ hiện "Đang chơi" game đó. Xoá trắng để tắt. Chỉ hiện khi Lanyard không gửi game nào khác. */,manualDetails:'' /* dòng phụ, ví dụ 'ARAM: Hỗn Loạn'. Có thể để trống */,hideRecent:[],riot:'ming#0811',opgg:'https://playaram.gg/en/profile/vn/ming%230811',champs:['LeeSin','Zed','Yasuo'],hideEmpty:false /* true: tự ẩn link chưa điền. false: hiện hết các link mẫu */,updated:'2026-10-28T17:35:00+07:00' /* lúc bạn sửa trang lần cuối (năm-tháng-ngàyTgiờ:phút:giây+07:00), hiện ở chân trang kèm giờ, phút, giây */,goatcounter:'ming' /* tên tài khoản GoatCounter (ming.goatcounter.com) để đếm lượt xem thật. Để trống thì không đếm */,cfBeacon:'' /* hoặc token Cloudflare Web Analytics */};
  (function(){
    var e=document.getElementById('upd');
    if(e){
      var MN=['January','February','March','April','May','June','July','August','September','October','November','December'];
      var r=function(){
        var u=String(ME.updated||''),d=new Date(u.length<=10?u+'T00:00:00+07:00':u),p={};
        if(isNaN(d))return;
        try{new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Ho_Chi_Minh',hourCycle:'h23',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).formatToParts(d).forEach(function(x){p[x.type]=x.value})}catch(x){return}
        var ds=p.day+'/'+p.month+'/'+String(p.year).slice(-2)+' · '+p.hour+':'+p.minute+':'+p.second;
        e.textContent=(LANG==='en'?'Last updated: ':'Cập nhật lần cuối: ')+ds};
      r();document.addEventListener('langchange',r);
    }
    /* ===== SỰ THẬT THÚ VỊ =====
       Muốn thêm: chép một dòng {k:'space|nature|body|tech|vn|life',t:'nội dung',e:'bản tiếng Anh'} vào FUNFACTS. Thẻ úp sẵn, bấm vào mới lật ra. */
    var FUNFACTS=[
      {k:"space",t:"Một ngày trên sao Kim dài hơn một năm của nó.",e:"A day on Venus is longer than its year."},
      {k:"space",t:"Ánh sáng Mặt Trời mất khoảng 8 phút 20 giây để đến Trái Đất.",e:"Sunlight takes about 8 minutes 20 seconds to reach Earth."},
      {k:"space",t:"Núi lửa Olympus Mons trên sao Hỏa cao khoảng 22 km, gấp khoảng 2,5 lần đỉnh Everest.",e:"Olympus Mons on Mars is about 22 km tall, roughly 2.5 times the height of Everest."},
      {k:"space",t:"Một ngày trên sao Hỏa dài khoảng 24 giờ 40 phút, chỉ nhỉnh hơn ngày của Trái Đất một chút.",e:"A day on Mars lasts about 24 hours 40 minutes, only slightly longer than an Earth day."},
      {k:"space",t:"Mặt Trăng đang rời xa Trái Đất khoảng 3,8 cm mỗi năm.",e:"The Moon is drifting away from Earth by about 3.8 cm every year."},
      {k:"space",t:"Một năm trên sao Thuỷ chỉ dài khoảng 88 ngày Trái Đất.",e:"A year on Mercury lasts only about 88 Earth days."},
      {k:"space",t:"Mật độ trung bình của sao Thổ thấp hơn nước, nên nếu có bồn nước đủ to thì nó sẽ nổi.",e:"Saturn is less dense than water, so in a big enough bathtub it would float."},
      {k:"space",t:"Các nhà khoa học cho rằng sâu trong Sao Mộc và Sao Thổ có thể có mưa kim cương.",e:"Scientists think it may rain diamonds deep inside Jupiter and Saturn."},
      {k:"space",t:"Theo ước tính, vũ trụ quan sát được có nhiều ngôi sao hơn số hạt cát trên mọi bãi biển của Trái Đất.",e:"By some estimates, the observable universe has more stars than there are grains of sand on all of Earth’s beaches."},
      {k:"space",t:"Trên Mặt Trăng gần như không có gió, nên dấu chân của các phi hành gia có thể tồn tại rất lâu.",e:"The Moon has almost no wind, so the astronauts’ footprints can last a very long time."},
      {k:"nature",t:"Bạch tuộc có ba trái tim và máu màu xanh.",e:"Octopuses have three hearts and blue blood."},
      {k:"nature",t:"Mật ong gần như không bao giờ hỏng; người ta từng tìm thấy mật ong còn ăn được trong lăng mộ Ai Cập.",e:"Honey almost never spoils; edible honey has been found in Egyptian tombs."},
      {k:"nature",t:"Về mặt thực vật học, chuối là quả mọng còn dâu tây thì không.",e:"Botanically, a banana is a berry and a strawberry is not."},
      {k:"nature",t:"Cá mập xuất hiện trên Trái Đất sớm hơn cả cây cối.",e:"Sharks appeared on Earth before trees did."},
      {k:"nature",t:"Rái cá biển nắm tay nhau khi ngủ để không bị nước cuốn trôi xa nhau.",e:"Sea otters hold hands while sleeping so they do not drift apart."},
      {k:"nature",t:"Phân của gấu túi wombat có hình khối vuông.",e:"Wombat droppings are shaped like cubes."},
      {k:"nature",t:"Hươu cao cổ chỉ có 7 đốt sống cổ, bằng con người, chỉ là mỗi đốt dài hơn rất nhiều.",e:"Giraffes have just 7 neck vertebrae, the same as humans, each one is simply much longer."},
      {k:"nature",t:"Sao biển không có não và cũng không có máu.",e:"Starfish have no brain and no blood."},
      {k:"nature",t:"Cú không thể đảo mắt nên phải quay cả đầu, có loài quay được khoảng 270 độ.",e:"Owls cannot move their eyes, so they turn their whole head, some species by about 270 degrees."},
      {k:"nature",t:"Cá vàng có thể nhớ được nhiều tháng, không phải chỉ 3 giây như người ta hay đồn.",e:"Goldfish can remember things for months, not just 3 seconds as people say."},
      {k:"nature",t:"Một đám mây tích bình thường có thể nặng hơn 500 tấn.",e:"An ordinary cumulus cloud can weigh more than 500 tonnes."},
      {k:"nature",t:"Tia sét có thể nóng gấp khoảng năm lần bề mặt Mặt Trời.",e:"Lightning can be about five times hotter than the surface of the Sun."},
      {k:"nature",t:"Hạt cà phê thật ra là hạt nằm trong quả cà phê, trông giống một quả anh đào nhỏ.",e:"A coffee bean is really the seed inside a coffee fruit that looks like a small cherry."},
      {k:"nature",t:"Dứa phải mất khoảng hai năm mới cho ra một quả.",e:"A pineapple plant takes about two years to produce a single fruit."},
      {k:"nature",t:"Chuối có chút phóng xạ vì chứa kali-40, nhưng hoàn toàn vô hại.",e:"Bananas are slightly radioactive because of potassium-40, but completely harmless."},
      {k:"nature",t:"Cá heo ngủ bằng một nửa bộ não, nửa còn lại vẫn thức để nổi lên thở.",e:"Dolphins sleep with half of their brain while the other half stays awake to surface and breathe."},
      {k:"body",t:"Bộ não chỉ nặng khoảng 2% cơ thể nhưng dùng tới khoảng 20% năng lượng.",e:"The brain is about 2% of body weight but uses roughly 20% of its energy."},
      {k:"body",t:"Tim người đập khoảng 100.000 lần mỗi ngày.",e:"The human heart beats roughly 100,000 times a day."},
      {k:"body",t:"DNA trong một tế bào người nếu kéo thẳng ra sẽ dài khoảng 2 mét.",e:"The DNA in a single human cell would be about 2 metres long if stretched out."},
      {k:"body",t:"Người và tinh tinh giống nhau khoảng 98 đến 99% DNA.",e:"Humans and chimpanzees share about 98 to 99% of their DNA."},
      {k:"body",t:"Mỗi người chớp mắt khoảng 15 đến 20 lần mỗi phút.",e:"People blink about 15 to 20 times a minute."},
      {k:"body",t:"Vân lưỡi của mỗi người đều khác nhau, giống như vân tay.",e:"Everyone’s tongue print is unique, just like a fingerprint."},
      {k:"tech",t:"Email đầu tiên được gửi năm 1971 bởi Ray Tomlinson, người cũng chọn ký hiệu @ cho địa chỉ.",e:"The first email was sent in 1971 by Ray Tomlinson, who also picked the @ sign for addresses."},
      {k:"tech",t:"Con chuột máy tính đầu tiên có vỏ bằng gỗ.",e:"The first computer mouse had a wooden shell."},
      {k:"tech",t:"Tetris do Alexey Pajitnov tạo ra năm 1984 tại Liên Xô.",e:"Tetris was created by Alexey Pajitnov in the Soviet Union in 1984."},
      {k:"tech",t:"Minecraft là trò chơi điện tử bán chạy nhất mọi thời đại, với hơn 300 triệu bản.",e:"Minecraft is the best-selling video game of all time, with over 300 million copies sold."},
      {k:"tech",t:"Từ robot bắt nguồn từ tiếng Séc robota, nghĩa là lao dịch, và xuất hiện trong một vở kịch năm 1920.",e:"The word robot comes from the Czech robota, meaning forced labour, and first appeared in a 1920 play."},
      {k:"tech",t:"Mã Konami nổi tiếng ban đầu được tạo ra để lập trình viên thử game cho đỡ vất vả.",e:"The famous Konami code was originally made so a developer could test a game more easily."},
      {k:"tech",t:"Từ bug trong lập trình thường gắn với con bướm đêm kẹt trong máy Harvard Mark II năm 1947, dù từ này đã được dùng từ trước đó.",e:"The word bug is often tied to a moth stuck in the Harvard Mark II in 1947, though the term was already in use before that."},
      {k:"vn",t:"Tiếng Việt có 29 chữ cái và 6 thanh điệu.",e:"Vietnamese has 29 letters and 6 tones."},
      {k:"vn",t:"Việt Nam là nước xuất khẩu cà phê lớn thứ hai thế giới, chỉ sau Brazil.",e:"Vietnam is the world’s second-largest coffee exporter, behind only Brazil."},
      {k:"vn",t:"Vịnh Hạ Long có gần 2.000 hòn đảo đá vôi.",e:"Ha Long Bay has nearly 2,000 limestone islands."},
      {k:"vn",t:"Hang Sơn Đoòng ở Quảng Bình được cho là hang tự nhiên lớn nhất thế giới, có đoạn đủ cao để chứa một toà nhà 40 tầng.",e:"Son Doong Cave in Quang Binh is considered the largest natural cave in the world, with sections tall enough to hold a 40-storey building."},
      {k:"vn",t:"Hải Phòng được mệnh danh là Thành phố Hoa phượng đỏ.",e:"Hai Phong is nicknamed the City of Red Flamboyant Flowers."},
      {k:"life",t:"Tháp Eiffel có thể cao thêm tới khoảng 15 cm vào mùa hè vì sắt nở ra khi nóng.",e:"The Eiffel Tower can grow up to about 15 cm taller in summer as the iron expands in the heat."},
      {k:"life",t:"Mèo ngủ trung bình 12 đến 16 giờ mỗi ngày.",e:"Cats sleep 12 to 16 hours a day on average."},
      {k:"life",t:"Hộp đen của máy bay thật ra có màu cam.",e:"A plane’s black box is actually bright orange."},
      {k:"life",t:"SOS không viết tắt của cụm từ nào cả, nó chỉ là chuỗi mã Morse dễ gửi và dễ nhận ra nhất.",e:"SOS does not stand for anything, it is simply an easy Morse sequence to send and recognise."},
      {k:"life",t:"Tờ giấy A4 gấp đôi lại sẽ thành khổ A5 mà tỉ lệ các cạnh vẫn giữ nguyên.",e:"Fold an A4 sheet in half and you get A5 with exactly the same proportions."},
      {k:"space",t:"Một thìa vật chất của sao neutron nặng cỡ hàng tỉ tấn."},
      {k:"space",t:"Voyager 1 được phóng năm 1977 và hiện là vật thể do con người chế tạo ở xa Trái Đất nhất."},
      {k:"space",t:"Sao Kim quay quanh trục theo chiều ngược với hầu hết các hành tinh khác."},
      {k:"space",t:"Sao Thiên Vương có trục quay nghiêng gần 98 độ nên trông như đang lăn nghiêng quanh Mặt Trời."},
      {k:"space",t:"Mặt Trời chiếm khoảng 99,8% tổng khối lượng của cả Hệ Mặt Trời."},
      {k:"nature",t:"Kiến chúa của một số loài có thể sống hơn 20 năm."},
      {k:"nature",t:"Một số loài tre mọc nhanh gần 1 mét mỗi ngày."},
      {k:"nature",t:"Tim của tôm nằm ở phần đầu."},
      {k:"nature",t:"Quạ có thể nhớ và nhận ra khuôn mặt của từng người."},
      {k:"nature",t:"Tim cá voi xanh nặng khoảng 180 kg."},
      {k:"nature",t:"Sâu bướm biến thành bướm bằng cách tan gần như hoàn toàn bên trong kén rồi tái cấu trúc."},
      {k:"nature",t:"Nọc độc của ong mật có thể gây đau ngay cả khi con ong đã chết."},
      {k:"body",t:"Người trưởng thành có 206 chiếc xương, còn trẻ sơ sinh có khoảng 270 đến 300 chiếc."},
      {k:"body",t:"Ruột non của người dài khoảng 6 mét."},
      {k:"body",t:"Mỗi ngày cơ thể người tiết ra khoảng 1 lít nước bọt."},
      {k:"body",t:"Mắt người có thể phân biệt khoảng một triệu sắc thái màu."},
      {k:"body",t:"Xương đùi là xương dài và khoẻ nhất cơ thể."},
      {k:"body",t:"Mỗi người sinh ra đời đều có dấu vân tay riêng, ngay cả cặp song sinh giống hệt cũng khác nhau."},
      {k:"tech",t:"World Wide Web được Tim Berners-Lee đề xuất năm 1989 tại CERN."},
      {k:"tech",t:"Google lúc đầu có tên là BackRub."},
      {k:"tech",t:"Tên miền .com đầu tiên được đăng ký là symbolics.com vào năm 1985."},
      {k:"tech",t:"iPhone đời đầu ra mắt năm 2007."},
      {k:"tech",t:"Mật khẩu 123456 nhiều năm liền nằm trong nhóm bị dùng nhiều nhất thế giới."},
      {k:"tech",t:"Ổ cứng đầu tiên của IBM năm 1956 nặng hơn một tấn và chỉ chứa khoảng 5 MB."},
      {k:"vn",t:"Việt Nam có 54 dân tộc."},
      {k:"vn",t:"Đỉnh Fansipan cao 3.143 m, được gọi là nóc nhà Đông Dương."},
      {k:"vn",t:"Bờ biển Việt Nam dài hơn 3.260 km."},
      {k:"vn",t:"Văn Miếu Quốc Tử Giám ở Hà Nội được xây từ năm 1070."},
      {k:"vn",t:"Việt Nam là nước xuất khẩu hạt điều và hạt tiêu hàng đầu thế giới."},
      {k:"vn",t:"Chữ Quốc ngữ dùng chữ cái Latinh, được các giáo sĩ phương Tây hoàn thiện từ thế kỷ 17."},
      {k:"history",t:"Cleopatra sống gần thời Mặt Trăng đổ bộ hơn là thời xây Đại Kim tự tháp Giza."},
      {k:"history",t:"Chiến tranh Anh Zanzibar năm 1896 chỉ kéo dài khoảng 40 phút, ngắn nhất lịch sử."},
      {k:"history",t:"Đại học Oxford đã có người dạy học trước khi Đế chế Aztec ra đời."},
      {k:"history",t:"Từ Mặt Trăng không thể nhìn thấy Vạn Lý Trường Thành bằng mắt thường."},
      {k:"history",t:"Thế vận hội cổ đại đầu tiên được cho là diễn ra vào năm 776 trước Công nguyên."},
      {k:"history",t:"Chữ viết sớm nhất ra đời ở Lưỡng Hà khoảng 3.000 năm trước Công nguyên."},
      {k:"history",t:"Tàu Titanic chìm năm 1912 ngay trong chuyến đi đầu tiên."},
      {k:"science",t:"Không khí có khoảng 78% là khí nitơ, oxy chỉ chiếm khoảng 21%."},
      {k:"science",t:"Kim cương và than chì đều được tạo từ nguyên tố cacbon."},
      {k:"science",t:"Âm thanh truyền trong nước nhanh hơn trong không khí khoảng 4 lần."},
      {k:"science",t:"Bảng tuần hoàn hiện có 118 nguyên tố."},
      {k:"science",t:"Thuỷ ngân là kim loại duy nhất ở thể lỏng trong điều kiện phòng."},
      {k:"science",t:"Ánh sáng đi khoảng 300.000 km mỗi giây trong chân không."},
      {k:"science",t:"Ở điểm ba, nước có thể cùng tồn tại ở thể rắn, lỏng và khí."},
      {k:"food",t:"Về mặt thực vật học, cà chua là một loại quả."},
      {k:"food",t:"Wasabi thật rất hiếm, nhiều loại bán ngoài chợ chỉ là cải ngựa nhuộm xanh."},
      {k:"food",t:"Chim không cảm nhận được vị cay của capsaicin trong ớt."},
      {k:"food",t:"Cà rốt ban đầu có màu tím hoặc vàng, màu cam là về sau."},
      {k:"food",t:"Sô cô la làm từ hạt của cây ca cao."},
      {k:"food",t:"Gạo là lương thực chính của hơn một nửa dân số thế giới."},
      {k:"food",t:"Nước Ý có hàng trăm hình dạng mì ống khác nhau."},
      {k:"geo",t:"Nga trải dài qua 11 múi giờ."},
      {k:"geo",t:"Canada có đường bờ biển dài nhất thế giới."},
      {k:"geo",t:"Vatican là quốc gia nhỏ nhất thế giới."},
      {k:"geo",t:"Sa mạc lớn nhất thế giới là Nam Cực, không phải Sahara."},
      {k:"geo",t:"Indonesia có hơn 17.000 hòn đảo."},
      {k:"geo",t:"Hồ Baikal sâu khoảng 1.640 m, là hồ sâu nhất thế giới."},
      {k:"geo",t:"Nam Cực chứa phần lớn lượng băng và nước ngọt dạng băng trên Trái Đất."},
      {k:"math",t:"Có khoảng 8 nhân 10 mũ 67 cách xếp một bộ bài 52 lá."},
      {k:"math",t:"Gauss khi còn nhỏ đã tính nhanh tổng từ 1 đến 100 bằng 5050."},
      {k:"math",t:"Số thế cờ vua có thể xảy ra nhiều hơn số nguyên tử trong vũ trụ quan sát được."},
      {k:"math",t:"Số pi vô hạn và không tuần hoàn."},
      {k:"math",t:"Tổ ong hình lục giác vì hình này tiết kiệm sáp nhất khi lấp đầy mặt phẳng."},
      {k:"math",t:"Số La Mã không có chữ số 0."},
      {k:"lang",t:"Thế giới có hơn 7.000 ngôn ngữ đang được sử dụng."},
      {k:"lang",t:"Tiếng Quan Thoại là ngôn ngữ có nhiều người nói tiếng mẹ đẻ nhất."},
      {k:"lang",t:"Papua New Guinea có hơn 800 ngôn ngữ, nhiều nhất thế giới."},
      {k:"lang",t:"Từ quarantine xuất phát từ tiếng Ý quaranta giorni, nghĩa là 40 ngày."},
      {k:"lang",t:"Từ điển Việt Bồ La của Alexandre de Rhodes in năm 1651 là nền móng cho chữ Quốc ngữ."},
      {k:"game",t:"Mario ban đầu có tên là Jumpman và xuất hiện trong Donkey Kong."},
      {k:"game",t:"Pac-Man ra mắt năm 1980."},
      {k:"game",t:"Pong của Atari năm 1972 là một trong những game thương mại đầu tiên."},
      {k:"game",t:"League of Legends ra mắt năm 2009 do Riot Games phát triển."},
      {k:"game",t:"Stardew Valley do một mình Eric Barone làm ra."},
      {k:"game",t:"Steam ra mắt năm 2003 của Valve."},
      {k:"game",t:"Pokémon bản đầu tiên ra mắt ở Nhật năm 1996."},
      {k:"music",t:"Beethoven vẫn sáng tác nhạc dù bị điếc dần."},
      {k:"music",t:"Đàn piano tiêu chuẩn có 88 phím."},
      {k:"music",t:"Bản 4 phút 33 giây của John Cage là một bản nhạc gần như không có âm thanh."},
      {k:"music",t:"Tên các nốt Đô Rê Mi bắt nguồn từ một bài thánh ca Latinh thời Trung Cổ."},
      {k:"music",t:"Mozart bắt đầu sáng tác từ khi mới 5 tuổi."},
      {k:"sport",t:"Cự ly marathon là 42,195 km."},
      {k:"sport",t:"Bóng rổ do James Naismith phát minh năm 1891, lúc đầu dùng giỏ đựng đào làm rổ."},
      {k:"sport",t:"Cờ vua bắt nguồn từ trò chơi chaturanga của Ấn Độ."},
      {k:"sport",t:"Quả bóng golf thường có khoảng 300 đến 500 lỗ nhỏ trên bề mặt."},
      {k:"sport",t:"Argentina vô địch World Cup 2022 tại Qatar."},
      {k:"culture",t:"Emoji đầu tiên do Shigetaka Kurita tạo ra ở Nhật năm 1999."},
      {k:"culture",t:"Giấy được phát minh ở Trung Quốc."},
      {k:"culture",t:"Nhiều nền văn hoá có truyền thống ăn mừng năm mới âm lịch, trong đó Tết Nguyên Đán của Việt Nam."},
      {k:"culture",t:"Nhạc cụ cổ nhất từng tìm thấy là những cây sáo làm từ xương, tuổi đời hàng chục nghìn năm."},
      {k:"space",t:"Trên Mặt Trăng, trọng lực chỉ bằng khoảng một phần sáu so với Trái Đất."},
      {k:"space",t:"Sao Mộc có cơn bão Vết Đỏ lớn hơn cả Trái Đất và đã tồn tại hàng trăm năm."},
      {k:"space",t:"Một năm ánh sáng dài khoảng 9,46 nghìn tỉ km."},
      {k:"space",t:"Sao Thuỷ gần Mặt Trời nhất nhưng sao Kim mới là hành tinh nóng nhất."},
      {k:"space",t:"Trái Đất không tròn hoàn hảo mà hơi phình ở xích đạo."},
      {k:"space",t:"Sao Hỏa có hai mặt trăng nhỏ là Phobos và Deimos."},
      {k:"space",t:"Neil Armstrong là người đầu tiên đặt chân lên Mặt Trăng vào năm 1969."},
      {k:"space",t:"Dải Ngân Hà của chúng ta có hàng trăm tỉ ngôi sao."},
      {k:"nature",t:"Kangaroo không thể đi lùi."},
      {k:"nature",t:"Cá ngựa đực là bên mang thai và sinh con."},
      {k:"nature",t:"Lưỡi của hươu cao cổ dài khoảng 45 cm và có màu tím đen."},
      {k:"nature",t:"Ếch có thể hấp thụ nước qua da thay vì uống."},
      {k:"nature",t:"Một con ong mật thợ cả đời chỉ làm ra khoảng một phần mười hai thìa cà phê mật."},
      {k:"nature",t:"Nhện có tám chân và không phải côn trùng."},
      {k:"nature",t:"Chim ruồi là nhóm chim duy nhất có thể bay lùi liên tục."},
      {k:"nature",t:"Con mực có ba trái tim giống bạch tuộc."},
      {k:"nature",t:"Voi là động vật trên cạn duy nhất không thể nhảy."},
      {k:"nature",t:"Gấu Bắc Cực có da màu đen dưới lớp lông trong suốt."},
      {k:"nature",t:"Lạc đà dự trữ mỡ trong bướu, không phải nước."},
      {k:"nature",t:"Cá sấu có thể nhịn ăn hàng tháng trời."},
      {k:"body",t:"Con người dành khoảng một phần ba cuộc đời để ngủ."},
      {k:"body",t:"Phổi người có khoảng 300 triệu phế nang."},
      {k:"body",t:"Móng tay mọc nhanh hơn móng chân."},
      {k:"body",t:"Máu người chảy hết một vòng cơ thể chỉ trong khoảng một phút."},
      {k:"body",t:"Cơ lớn nhất cơ thể là cơ mông."},
      {k:"body",t:"Cơ nhỏ nhất cơ thể nằm trong tai và có tên là cơ bàn đạp."},
      {k:"body",t:"Mỗi ngày bạn thở ra thở vào khoảng 20.000 lần."},
      {k:"body",t:"Cơ thể người có khoảng 60% là nước."},
      {k:"tech",t:"Hơn một nửa lượng truy cập web ngày nay đến từ điện thoại."},
      {k:"tech",t:"Máy tính Apple đầu tiên được bán năm 1976."},
      {k:"tech",t:"QR code do một công ty Nhật Bản phát minh năm 1994."},
      {k:"tech",t:"Bàn phím QWERTY ra đời từ thế kỷ 19 để tránh kẹt cần gõ của máy chữ."},
      {k:"tech",t:"GPS là viết tắt của Global Positioning System, hệ thống định vị toàn cầu."},
      {k:"tech",t:"Một cái USB ngày nay chứa nhiều dữ liệu hơn máy tính của NASA lúc đưa người lên Mặt Trăng."},
      {k:"vn",t:"Cầu Vàng ở Đà Nẵng nổi tiếng với đôi bàn tay khổng lồ nâng đỡ."},
      {k:"vn",t:"Cố đô Huế là di sản thế giới của UNESCO."},
      {k:"vn",t:"Phố cổ Hội An cũng là di sản thế giới của UNESCO."},
      {k:"vn",t:"Cà phê trứng là thức uống bắt nguồn từ Hà Nội."},
      {k:"vn",t:"Hà Nội có Hồ Gươm gắn với truyền thuyết rùa thần."},
      {k:"vn",t:"Bánh mì Việt Nam đã được từ điển Oxford ghi nhận."},
      {k:"history",t:"Kim tự tháp Giza được xây cách đây khoảng 4.500 năm."},
      {k:"history",t:"Gutenberg phát minh máy in chữ rời vào khoảng năm 1440."},
      {k:"history",t:"Thế chiến thứ hai kết thúc vào năm 1945."},
      {k:"history",t:"Đế chế Mông Cổ từng là đế chế liền kề lớn nhất lịch sử."},
      {k:"history",t:"Trận Bạch Đằng năm 1288 là chiến thắng nổi tiếng của quân dân nhà Trần."},
      {k:"history",t:"Việt Nam tuyên bố độc lập ngày 2 tháng 9 năm 1945."},
      {k:"history",t:"Người Ai Cập cổ đại đã dùng một dạng giấy làm từ cây cói."},
      {k:"science",t:"Sấm đến sau chớp vì ánh sáng đi nhanh hơn âm thanh rất nhiều."},
      {k:"science",t:"Nước đóng băng thì giãn ra nên đá nổi trên nước."},
      {k:"science",t:"Cầu vồng là kết quả của ánh sáng bị khúc xạ và phản xạ trong giọt nước."},
      {k:"science",t:"Giọt mưa không có hình giọt nước như hay vẽ mà gần giống chiếc bánh bao."},
      {k:"science",t:"Độ không tuyệt đối là khoảng âm 273,15 độ C."},
      {k:"food",t:"Dưa hấu có hơn 90% là nước."},
      {k:"food",t:"Trà là đồ uống được dùng nhiều thứ hai thế giới sau nước."},
      {k:"food",t:"Pizza hiện đại bắt nguồn từ thành phố Naples của Ý."},
      {k:"food",t:"Sushi ban đầu là cách bảo quản cá bằng cơm lên men."},
      {k:"food",t:"Hạt vani là một trong những gia vị đắt nhất thế giới."},
      {k:"food",t:"Sầu riêng được gọi là vua của các loại trái cây ở Đông Nam Á."},
      {k:"food",t:"Mì ăn liền được phát minh ở Nhật Bản năm 1958."},
      {k:"geo",t:"Châu Á là châu lục lớn nhất cả về diện tích lẫn dân số."},
      {k:"geo",t:"Đỉnh Everest cao khoảng 8.849 m."},
      {k:"geo",t:"Úc vừa là một quốc gia vừa là một lục địa."},
      {k:"geo",t:"Thái Bình Dương là đại dương lớn nhất thế giới."},
      {k:"geo",t:"Biển Chết là điểm thấp nhất trên đất liền."},
      {k:"geo",t:"Nhật Bản có hơn 6.800 hòn đảo."},
      {k:"geo",t:"Trung Quốc dùng một múi giờ duy nhất dù lãnh thổ rất rộng."},
      {k:"geo",t:"Maldives là quốc gia thấp nhất thế giới so với mực nước biển."},
      {k:"math",t:"Số 1 không phải số nguyên tố."},
      {k:"math",t:"Số 2 là số nguyên tố chẵn duy nhất."},
      {k:"math",t:"Một googol là số 1 theo sau bởi 100 số 0."},
      {k:"math",t:"Dãy số Fibonacci xuất hiện trong cách sắp xếp của nhiều loài hoa."},
      {k:"lang",t:"Chữ cái được dùng nhiều nhất trong tiếng Anh là chữ E."},
      {k:"lang",t:"Từ mama gần giống nhau ở rất nhiều ngôn ngữ trên thế giới."},
      {k:"lang",t:"Tiếng Tây Ban Nha có hơn 400 triệu người nói tiếng mẹ đẻ."},
      {k:"game",t:"Tennis for Two năm 1958 là một trong những trò chơi điện tử sớm nhất."},
      {k:"game",t:"Link trong The Legend of Zelda không phải là Zelda."},
      {k:"game",t:"Minecraft do Markus Persson tạo ra và có bản đầu năm 2009."},
      {k:"music",t:"Nghe nhạc có thể khiến cơ thể tiết ra dopamine."},
      {k:"music",t:"Đàn bầu là nhạc cụ một dây độc đáo của Việt Nam."},
      {k:"music",t:"Một octave có 12 nửa cung."},
      {k:"sport",t:"Bóng đá là môn thể thao phổ biến nhất thế giới."},
      {k:"sport",t:"Thế vận hội hiện đại đầu tiên diễn ra tại Athens năm 1896."},
      {k:"sport",t:"Quả bóng bàn chỉ nặng khoảng 2,7 gam."},
      {k:"sport",t:"Usain Bolt giữ kỷ lục chạy 100 m với 9,58 giây."},
      {k:"sport",t:"Tennis tính điểm theo kiểu 15, 30, 40."},
      {k:"culture",t:"Tết Nguyên Đán là dịp lễ lớn nhất trong năm của người Việt."},
      {k:"culture",t:"Áo dài được xem là trang phục truyền thống của Việt Nam."},
      {k:"culture",t:"Origami là nghệ thuật gấp giấy của Nhật Bản."},
      {k:"culture",t:"Truyện tranh Nhật gọi là manga, Hàn Quốc là manhwa, Trung Quốc là manhua."},
      {k:"space",t:"Một ngày trên Mặt Trăng dài bằng khoảng 29,5 ngày Trái Đất."},
      {k:"space",t:"Tàu vũ trụ Parker của NASA đã bay lại gần Mặt Trời hơn bất kỳ vật thể nhân tạo nào khác."},
      {k:"space",t:"Trạm vũ trụ quốc tế bay quanh Trái Đất khoảng 16 vòng mỗi ngày."},
      {k:"space",t:"Phi hành gia có thể cao thêm vài cm khi ở trong không gian do cột sống giãn ra."},
      {k:"space",t:"Sao chổi có đuôi luôn hướng ra xa Mặt Trời."},
      {k:"space",t:"Sao Thổ có hơn 100 mặt trăng đã được xác nhận."},
      {k:"space",t:"Hố đen không phải là cái lỗ mà là vùng không gian có trọng lực cực mạnh."},
      {k:"space",t:"Mặt Trời sẽ cháy thêm khoảng 5 tỉ năm nữa."},
      {k:"nature",t:"Rùa có thể sống hơn 100 năm."},
      {k:"nature",t:"Cá mập không có xương mà chỉ có sụn."},
      {k:"nature",t:"Bướm nếm vị bằng chân."},
      {k:"nature",t:"Con cá heo gọi nhau bằng những tiếng huýt riêng giống như tên."},
      {k:"nature",t:"Cây xương rồng lưu trữ nước trong thân."},
      {k:"nature",t:"Sâu bọ chiếm số lượng loài nhiều nhất trong giới động vật."},
      {k:"nature",t:"Linh cẩu cười thật ra là cách chúng giao tiếp."},
      {k:"nature",t:"Hoa hướng dương xoay theo hướng Mặt Trời khi còn non."},
      {k:"nature",t:"Chuột túi con sinh ra chỉ to bằng hạt đậu."},
      {k:"nature",t:"Khỉ đột có vân tay riêng giống con người."},
      {k:"nature",t:"Gà có thể nhớ khuôn mặt của hơn 100 con gà khác."},
      {k:"nature",t:"Chim cánh cụt hoàng đế ấp trứng trên chân suốt mùa đông."},
      {k:"body",t:"Cơ thể người có khoảng 37 nghìn tỉ tế bào."},
      {k:"body",t:"Tóc mọc trung bình khoảng 1 cm mỗi tháng."},
      {k:"body",t:"Mỗi người có khoảng 5 triệu nang tóc."},
      {k:"body",t:"Gan có khả năng tự tái sinh sau khi bị tổn thương."},
      {k:"body",t:"Mũi người có thể phân biệt hàng nghìn mùi khác nhau."},
      {k:"body",t:"Giấc mơ thường diễn ra nhiều nhất ở giai đoạn ngủ REM."},
      {k:"body",t:"Một cái chớp mắt chỉ kéo dài khoảng một phần mười giây."},
      {k:"body",t:"Da là cơ quan lớn nhất của cơ thể người."},
      {k:"tech",t:"Từ pixel là cách nói ngắn của picture element."},
      {k:"tech",t:"Bitcoin được giới thiệu năm 2009."},
      {k:"tech",t:"YouTube ra đời năm 2005."},
      {k:"tech",t:"Chữ Wi-Fi và Bluetooth đều là tên thương mại."},
      {k:"tech",t:"HTML là ngôn ngữ đánh dấu chứ không phải ngôn ngữ lập trình."},
      {k:"tech",t:"Ngôn ngữ lập trình Python được đặt tên theo nhóm hài Monty Python."},
      {k:"tech",t:"JavaScript được viết ra chỉ trong khoảng 10 ngày vào năm 1995."},
      {k:"vn",t:"Hang Én ở Quảng Bình nằm trong nhóm hang lớn nhất thế giới."},
      {k:"vn",t:"Sapa nổi tiếng với ruộng bậc thang và thỉnh thoảng có tuyết."},
      {k:"vn",t:"Phú Quốc là đảo lớn nhất Việt Nam."},
      {k:"vn",t:"Việt Nam có hơn 100 triệu dân."},
      {k:"history",t:"Tượng Nữ thần Tự do là món quà của nước Pháp tặng nước Mỹ."},
      {k:"history",t:"Thành Athens của Hy Lạp cổ đại là một trong những nơi đầu tiên có chế độ dân chủ trực tiếp."},
      {k:"history",t:"Cuộc cách mạng công nghiệp bắt đầu ở nước Anh vào thế kỷ 18."},
      {k:"history",t:"Thành cổ Angkor Wat ở Campuchia là công trình tôn giáo lớn nhất thế giới."},
      {k:"history",t:"Lịch hiện nay dùng phổ biến là lịch Gregory ra đời năm 1582."},
      {k:"history",t:"Hoàng thành Thăng Long là di sản thế giới của UNESCO."},
      {k:"history",t:"Tàu Apollo 11 hạ cánh xuống Mặt Trăng ngày 20 tháng 7 năm 1969."},
      {k:"history",t:"Trống đồng Đông Sơn là biểu tượng của nền văn hoá cổ Việt Nam."},
      {k:"science",t:"Ánh sáng trắng có thể tách ra thành bảy màu qua lăng kính."},
      {k:"science",t:"Một mét vuông bề mặt Trái Đất chịu sức nén khí quyển rất lớn mà ta không cảm thấy."},
      {k:"science",t:"Trái Đất quay một vòng quanh trục trong khoảng 24 giờ."},
      {k:"science",t:"Hạt nhân nguyên tử nhỏ hơn nguyên tử hàng chục nghìn lần."},
      {k:"science",t:"Thời gian trôi chậm hơn một chút ở nơi có trọng lực mạnh hơn."},
      {k:"food",t:"Bơ là một loại quả chứ không phải rau."},
      {k:"food",t:"Cà phê phin là cách pha cà phê đặc trưng của Việt Nam."},
      {k:"food",t:"Bánh chưng là món truyền thống trong ngày Tết của người Việt."},
      {k:"geo",t:"Sa mạc Sahara rộng gần bằng nước Mỹ."},
      {k:"geo",t:"Hồ Victoria là hồ lớn nhất châu Phi."},
      {k:"geo",t:"Singapore là một quốc đảo và là thành phố."},
      {k:"geo",t:"Thái Lan có tên cũ là Xiêm."},
      {k:"math",t:"Số nguyên tố có vô hạn."},
      {k:"math",t:"Số thập phân vô hạn tuần hoàn luôn viết được thành phân số."},
      {k:"lang",t:"Từ cà phê trong tiếng Việt mượn từ tiếng Pháp."},
      {k:"lang",t:"Từ ô tô trong tiếng Việt mượn từ tiếng Pháp."},
      {k:"sport",t:"Marathon được đặt tên theo trận chiến Marathon của Hy Lạp cổ."},
      {k:"culture",t:"Tết Trung thu còn được gọi là Tết của trẻ em ở Việt Nam."},
      {k:"culture",t:"Truyện Kiều là tác phẩm kinh điển của Nguyễn Du."},
      {k:"culture",t:"Ca trù là loại hình nghệ thuật truyền thống của Việt Nam."},
      {k:"culture",t:"Múa rối nước là nét văn hoá đặc sắc của đồng bằng Bắc Bộ."},
      {k:"culture",t:"Dân ca quan họ Bắc Ninh được UNESCO ghi danh."},
      {k:"space",t:"Sao Hải Vương có gió mạnh nhất Hệ Mặt Trời, có lúc vượt 2.000 km mỗi giờ."},
      {k:"space",t:"Sao Diêm Vương từng là hành tinh thứ chín cho đến năm 2006, khi bị xếp lại thành hành tinh lùn."},
      {k:"space",t:"Mặt Trăng luôn quay cùng một mặt về phía Trái Đất."},
      {k:"space",t:"Hai tàu Voyager mang theo đĩa vàng chứa âm thanh và hình ảnh của Trái Đất."},
      {k:"space",t:"Kính viễn vọng không gian James Webb được phóng vào cuối năm 2021."},
      {k:"space",t:"Ánh sáng từ ngôi sao Proxima Centauri mất hơn 4 năm để tới Trái Đất."},
      {k:"space",t:"Vành đai tiểu hành tinh nằm giữa quỹ đạo Sao Hỏa và Sao Mộc."},
      {k:"space",t:"Một ngày trên Sao Mộc chỉ dài khoảng 10 giờ."},
      {k:"space",t:"Bầu trời ban ngày trên Sao Hỏa có màu hồng cam còn hoàng hôn lại xanh."},
      {k:"nature",t:"Tắc kè hoa đổi màu chủ yếu để giao tiếp và điều hoà thân nhiệt hơn là để ngụy trang."},
      {k:"nature",t:"Cá voi lưng gù hát những bài hát kéo dài hàng chục phút."},
      {k:"nature",t:"Cá hồi bơi ngược sông để trở về nơi mình sinh ra."},
      {k:"nature",t:"Bọ cánh cứng là nhóm động vật có nhiều loài nhất."},
      {k:"nature",t:"Thằn lằn có thể tự cắt đuôi để thoát thân rồi mọc lại."},
      {k:"nature",t:"Có những cây thông Bristlecone sống hơn 4.000 năm."},
      {k:"nature",t:"Dơi là loài thú duy nhất biết bay thật sự."},
      {k:"nature",t:"Rắn không có mí mắt."},
      {k:"nature",t:"Thú mỏ vịt là loài thú đẻ trứng."},
      {k:"nature",t:"Ngọc trai hình thành khi một hạt nhỏ lọt vào trong vỏ con trai."},
      {k:"nature",t:"Chỉ muỗi cái mới hút máu, muỗi đực thì không."},
      {k:"nature",t:"Mỗi con ngựa vằn có bộ sọc riêng, không con nào giống con nào."},
      {k:"nature",t:"Sừng tê giác làm từ keratin, cùng chất với móng tay người."},
      {k:"nature",t:"Sứa không có não, tim và xương."},
      {k:"body",t:"Hộp sọ người trưởng thành gồm 22 xương."},
      {k:"body",t:"Mỗi bàn tay có 27 xương."},
      {k:"body",t:"Mỗi bàn chân có 26 xương."},
      {k:"body",t:"Hồng cầu sống được khoảng 120 ngày."},
      {k:"body",t:"Nhịp tim lúc nghỉ của người trưởng thành thường từ 60 đến 100 nhịp mỗi phút."},
      {k:"body",t:"Men răng là phần cứng nhất của cơ thể người."},
      {k:"body",t:"Mắt người có một điểm mù, nhưng não tự lấp đầy nên ta không nhận ra."},
      {k:"body",t:"Lưỡi người có hàng nghìn nụ vị giác."},
      {k:"body",t:"Việc mất nhiều nhiệt nhất qua đầu chỉ là một lầm tưởng phổ biến."},
      {k:"tech",t:"Facebook ra đời năm 2004."},
      {k:"tech",t:"Cuộc gọi bằng điện thoại di động đầu tiên được thực hiện vào năm 1973 bởi Martin Cooper của Motorola."},
      {k:"tech",t:"Internet bắt nguồn từ mạng ARPANET những năm 1960."},
      {k:"tech",t:"Intel 4004 năm 1971 là bộ vi xử lý thương mại đầu tiên."},
      {k:"tech",t:"Wikipedia ra mắt năm 2001."},
      {k:"tech",t:"ChatGPT ra mắt vào cuối năm 2022."},
      {k:"tech",t:"Laser là viết tắt của Light Amplification by Stimulated Emission of Radiation."},
      {k:"tech",t:"Bluetooth được đặt tên theo vị vua Harald Bluetooth của Đan Mạch."},
      {k:"tech",t:"Độ phân giải 4K có 3840 nhân 2160 điểm ảnh."},
      {k:"vn",t:"Việt Nam có hơn 3.000 hòn đảo lớn nhỏ."},
      {k:"vn",t:"Thăng Long được chọn làm kinh đô vào năm 1010, đặt nền móng cho Hà Nội ngày nay."},
      {k:"vn",t:"Việt Nam gia nhập ASEAN năm 1995."},
      {k:"vn",t:"Vịnh Hạ Long được UNESCO công nhận là di sản thiên nhiên thế giới từ năm 1994."},
      {k:"vn",t:"Mũi Cà Mau là điểm cực Nam của Việt Nam."},
      {k:"vn",t:"Lũng Cú ở Hà Giang là điểm cực Bắc của Việt Nam."},
      {k:"vn",t:"Việt Nam là một trong những nước xuất khẩu gạo hàng đầu thế giới."},
      {k:"vn",t:"Chữ Nôm là chữ viết cổ do người Việt tạo ra dựa trên chữ Hán."},
      {k:"vn",t:"Đồng bằng sông Cửu Long được gọi là vựa lúa của cả nước."},
      {k:"vn",t:"Đà Lạt được gọi là thành phố ngàn hoa."},
      {k:"vn",t:"Sài Gòn là tên cũ của Thành phố Hồ Chí Minh, đổi tên năm 1976."},
      {k:"vn",t:"Đảo Cát Bà thuộc thành phố Hải Phòng."},
      {k:"vn",t:"Việt Nam trồng chủ yếu cà phê robusta."},
      {k:"history",t:"Leonardo da Vinci vẽ bức Mona Lisa vào đầu thế kỷ 16."},
      {k:"history",t:"Tần Thuỷ Hoàng thống nhất Trung Quốc vào năm 221 trước Công nguyên."},
      {k:"history",t:"Cách mạng Pháp bùng nổ năm 1789."},
      {k:"history",t:"Bức tường Berlin sụp đổ năm 1989."},
      {k:"history",t:"Christopher Columbus đặt chân đến châu Mỹ năm 1492."},
      {k:"history",t:"Yuri Gagarin là người đầu tiên bay vào vũ trụ, vào năm 1961."},
      {k:"history",t:"Chiến thắng Điện Biên Phủ diễn ra vào năm 1954."},
      {k:"history",t:"Tháp nghiêng Pisa được khởi công xây từ năm 1173."},
      {k:"history",t:"Alexander Fleming phát hiện ra penicillin vào năm 1928."},
      {k:"history",t:"Vạn Lý Trường Thành có tổng chiều dài lên tới hàng nghìn km."},
      {k:"science",t:"Tầng ozon bảo vệ Trái Đất khỏi phần lớn tia cực tím từ Mặt Trời."},
      {k:"science",t:"Nước biển mặn vì có muối khoáng hoà tan từ đất đá."},
      {k:"science",t:"Động đất xảy ra do các mảng kiến tạo dịch chuyển."},
      {k:"science",t:"Càng lên cao thì nước sôi ở nhiệt độ càng thấp."},
      {k:"science",t:"Cấu trúc xoắn kép của DNA được mô tả vào năm 1953."},
      {k:"science",t:"Bầu trời có màu xanh nhờ hiện tượng ánh sáng bị tán xạ trong khí quyển."},
      {k:"science",t:"Vắc xin đầu tiên do Edward Jenner phát triển vào cuối thế kỷ 18."},
      {k:"science",t:"Thuyết tương đối rộng của Einstein được công bố vào năm 1915."},
      {k:"food",t:"Nước mắm làm từ cá ủ với muối."},
      {k:"food",t:"Sữa chua được làm nhờ vi khuẩn lactic lên men sữa."},
      {k:"food",t:"Nấm không phải thực vật cũng không phải động vật mà thuộc một giới riêng."},
      {k:"food",t:"Kimchi là món lên men truyền thống của Hàn Quốc."},
      {k:"food",t:"Tỏi đã được dùng làm gia vị và dược liệu từ hàng nghìn năm."},
      {k:"food",t:"Khoai tây chiên có nguồn gốc còn tranh cãi giữa Bỉ và Pháp."},
      {k:"geo",t:"Rừng Amazon là khu rừng nhiệt đới lớn nhất thế giới."},
      {k:"geo",t:"Greenland là hòn đảo lớn nhất thế giới."},
      {k:"geo",t:"Thủ đô của Úc là Canberra chứ không phải Sydney."},
      {k:"geo",t:"Thủ đô của Brazil là Brasília."},
      {k:"geo",t:"Hồ Superior là hồ nước ngọt lớn nhất thế giới tính theo diện tích."},
      {k:"geo",t:"Thổ Nhĩ Kỳ nằm vắt ngang hai châu lục Á và Âu."},
      {k:"geo",t:"Burj Khalifa ở Dubai cao khoảng 828 m."},
      {k:"geo",t:"K2 là đỉnh núi cao thứ hai thế giới."},
      {k:"geo",t:"Nam Phi có ba thủ đô."},
      {k:"math",t:"Số 6 là số hoàn hảo đầu tiên vì 1 cộng 2 cộng 3 bằng 6."},
      {k:"math",t:"Dấu bằng được Robert Recorde đưa ra vào năm 1557."},
      {k:"math",t:"Hình lập phương có 12 cạnh."},
      {k:"math",t:"Con số 360 độ của vòng tròn thường được cho là bắt nguồn từ hệ đếm cơ số 60 của người Babylon."},
      {k:"math",t:"Căn bậc hai của 2 không thể viết thành một phân số."},
      {k:"lang",t:"Hangul của tiếng Hàn do vua Sejong cho tạo ra."},
      {k:"lang",t:"Tiếng Nhật dùng ba hệ chữ là Hiragana, Katakana và Kanji."},
      {k:"lang",t:"Chữ Ả Rập được viết từ phải sang trái."},
      {k:"lang",t:"Esperanto là một ngôn ngữ nhân tạo được tạo ra để ai cũng học được."},
      {k:"lang",t:"Hiến pháp Ấn Độ công nhận 22 ngôn ngữ chính thức theo danh sách."},
      {k:"game",t:"Nintendo Switch ra mắt vào năm 2017."},
      {k:"game",t:"PlayStation đầu tiên ra mắt tại Nhật Bản vào năm 1994."},
      {k:"game",t:"Super Mario Bros. ra mắt vào năm 1985."},
      {k:"game",t:"Delta Force là loạt game bắn súng đã có từ năm 1998."},
      {k:"game",t:"Path of Exile bản đầu tiên ra mắt vào năm 2013."},
      {k:"game",t:"Grand Theft Auto V nằm trong nhóm game bán chạy nhất lịch sử."},
      {k:"music",t:"Đàn tranh Việt Nam thường có 16 dây."},
      {k:"music",t:"Cồng chiêng Tây Nguyên được UNESCO ghi danh là di sản."},
      {k:"music",t:"Tai người nghe được khoảng từ 20 Hz đến 20.000 Hz."},
      {k:"music",t:"Thomas Edison phát minh máy hát đĩa vào năm 1877."},
      {k:"sport",t:"Thế vận hội mùa đông bắt đầu từ năm 1924."},
      {k:"sport",t:"Vành rổ bóng rổ cao 3,05 m."},
      {k:"sport",t:"Judo có nguồn gốc từ Nhật Bản."},
      {k:"sport",t:"World Cup bóng đá được tổ chức bốn năm một lần."},
      {k:"culture",t:"Halloween bắt nguồn từ lễ hội Samhain của người Celt."},
      {k:"culture",t:"Songkran là Tết cổ truyền của Thái Lan vào tháng 4."},
      {k:"culture",t:"Diwali là lễ hội ánh sáng nổi tiếng của Ấn Độ."},
      {k:"culture",t:"Kimono là trang phục truyền thống của Nhật, hanbok là của Hàn Quốc."},
      {k:"culture",t:"Hanami là truyền thống ngắm hoa anh đào của người Nhật."},
      {k:"culture",t:"Cosplay là việc hoá trang thành nhân vật trong anime, game hoặc phim."},
      {k:"culture",t:"Giỗ Tổ Hùng Vương diễn ra vào mùng 10 tháng 3 âm lịch."},
      {k:"space",t:"Kính viễn vọng Hubble được phóng vào năm 1990."},
      {k:"space",t:"Nhật thực toàn phần xảy ra khi Mặt Trăng che khuất hoàn toàn Mặt Trời."},
      {k:"space",t:"Một ngày nắng trên sao Thuỷ dài hơn một năm của nó."},
      {k:"space",t:"Trạm Vũ trụ Quốc tế được lắp ráp dần trên quỹ đạo từ năm 1998."},
      {k:"space",t:"Sao Mộc là hành tinh lớn nhất Hệ Mặt Trời."},
      {k:"nature",t:"Cá voi xanh là loài động vật lớn nhất từng sống trên Trái Đất."},
      {k:"nature",t:"Bồ câu có thể tìm đường về nhà từ rất xa."},
      {k:"nature",t:"Lưỡi ốc sên có hàng nghìn chiếc răng nhỏ."},
      {k:"nature",t:"Ong chúa có thể đẻ hàng nghìn trứng mỗi ngày."},
      {k:"nature",t:"Cây bao báp lưu trữ nước trong thân để sống qua mùa khô."},
      {k:"nature",t:"Sư tử đực ngủ hơn 16 tiếng mỗi ngày."},
      {k:"nature",t:"Hà mã tiết ra chất nhờn màu hồng giúp bảo vệ da khỏi nắng."},
      {k:"nature",t:"Gấu trúc ăn gần như toàn tre dù thuộc bộ ăn thịt."},
      {k:"nature",t:"Chuồn chuồn điều khiển hai cặp cánh một cách độc lập."},
      {k:"nature",t:"Cá chép koi có thể sống hàng chục năm, thậm chí hơn 100 năm."},
      {k:"body",t:"Mạch máu trong cơ thể người dài tới hàng chục nghìn km."},
      {k:"body",t:"Bản thân não không có thụ thể đau."},
      {k:"body",t:"Người có thể nhịn ăn lâu hơn rất nhiều so với nhịn uống nước."},
      {k:"body",t:"Mỗi người có dấu vân giọng nói riêng."},
      {k:"tech",t:"ASCII là bộ mã ký tự ban đầu dùng 7 bit."},
      {k:"tech",t:"Máy tính ENIAC ra đời vào giữa thập niên 1940 và nặng khoảng 27 tấn."},
      {k:"tech",t:"Ada Lovelace thường được coi là lập trình viên đầu tiên của lịch sử."},
      {k:"tech",t:"Tin nhắn SMS đầu tiên được gửi năm 1992 với nội dung Merry Christmas."},
      {k:"tech",t:"Netflix bắt đầu bằng việc cho thuê đĩa DVD qua đường bưu điện."},
      {k:"tech",t:"Hơn 5 tỉ người trên thế giới đang dùng internet."},
      {k:"vn",t:"Phong Nha Kẻ Bàng là di sản thiên nhiên thế giới của UNESCO."},
      {k:"vn",t:"Chùa Một Cột ở Hà Nội được xây từ năm 1049."},
      {k:"vn",t:"Ruộng bậc thang Mù Cang Chải ở Yên Bái là di tích quốc gia đặc biệt."},
      {k:"history",t:"Theo truyền thuyết, thành Rome được lập vào năm 753 trước Công nguyên."},
      {k:"history",t:"Đế quốc Tây La Mã sụp đổ vào năm 476."},
      {k:"history",t:"Nhà Nguyễn là triều đại phong kiến cuối cùng của Việt Nam."},
      {k:"history",t:"Anh em nhà Wright đã bay chiếc máy bay đầu tiên vào năm 1903."},
      {k:"history",t:"Alexander Graham Bell nhận bằng sáng chế điện thoại vào năm 1876."},
      {k:"history",t:"Chiến tranh Trăm Năm giữa Anh và Pháp thực tế kéo dài tới 116 năm."},
      {k:"history",t:"Tháp Eiffel được xây xong vào năm 1889."},
      {k:"history",t:"Đội quân đất nung của Tần Thuỷ Hoàng có hàng nghìn bức tượng."},
      {k:"science",t:"Nước chiếm khoảng 71% bề mặt Trái Đất."},
      {k:"science",t:"Kim cương là chất tự nhiên cứng nhất."},
      {k:"science",t:"Hydro là nguyên tố phổ biến nhất trong vũ trụ."},
      {k:"science",t:"Heli được phát hiện trên Mặt Trời trước khi tìm thấy trên Trái Đất."},
      {k:"science",t:"Âm thanh truyền trong không khí với tốc độ khoảng 343 m trên giây."},
      {k:"science",t:"Lực hấp dẫn là yếu nhất trong bốn lực cơ bản của tự nhiên."},
      {k:"science",t:"Phương pháp tiệt trùng Pasteur mang tên nhà khoa học Louis Pasteur."},
      {k:"food",t:"Tiramisu trong tiếng Ý có nghĩa là kéo tôi lên."},
      {k:"food",t:"Bánh mì baguette của Pháp được UNESCO ghi danh năm 2022."},
      {k:"food",t:"Nước Pháp có hàng trăm loại phô mai khác nhau."},
      {k:"geo",t:"Châu Phi có 54 quốc gia."},
      {k:"geo",t:"Dãy Andes là dãy núi dài nhất thế giới trên đất liền."},
      {k:"geo",t:"Hồ Titicaca là hồ lớn cao nhất thế giới mà tàu thuyền đi lại được."},
      {k:"geo",t:"Monaco là quốc gia nhỏ thứ hai thế giới sau Vatican."},
      {k:"geo",t:"Đảo Phục Sinh nổi tiếng với những bức tượng đá khổng lồ Moai."},
      {k:"geo",t:"Núi Phú Sĩ cao 3.776 m."},
      {k:"geo",t:"Ấn Độ là quốc gia đông dân nhất thế giới."},
      {k:"geo",t:"Sa mạc Atacama ở Chile là một trong những nơi khô hạn nhất hành tinh."},
      {k:"geo",t:"Sông Mê Kông dài khoảng 4.350 km."},
      {k:"math",t:"Kỷ lục số chữ số của pi đã tính được vượt 100 nghìn tỉ."},
      {k:"math",t:"Trong tam giác Pascal, mỗi số bằng tổng hai số nằm ngay phía trên nó."},
      {k:"math",t:"Số 0 là số chẵn."},
      {k:"math",t:"Euclid được gọi là cha đẻ của hình học."},
      {k:"math",t:"Ký hiệu vô cực được John Wallis đưa ra vào năm 1655."},
      {k:"lang",t:"Tiếng Anh là ngoại ngữ được học nhiều nhất thế giới."},
      {k:"lang",t:"Tiếng Hawaii chỉ có 13 chữ cái."},
      {k:"lang",t:"Ở đảo La Gomera có ngôn ngữ huýt sáo Silbo Gomero."},
      {k:"lang",t:"Người Iceland ngày nay vẫn đọc hiểu được nhiều văn bản cổ vì tiếng Iceland thay đổi rất ít."},
      {k:"game",t:"Pokémon Go ra mắt vào năm 2016."},
      {k:"game",t:"Deep Blue đã thắng nhà vô địch cờ vua Kasparov vào năm 1997."},
      {k:"game",t:"AlphaGo đã thắng kỳ thủ cờ vây Lee Sedol vào năm 2016."},
      {k:"game",t:"Space Invaders ra mắt năm 1978."},
      {k:"music",t:"Cây đàn piano được Bartolomeo Cristofori phát minh ở Ý khoảng năm 1700."},
      {k:"music",t:"Ngày Âm nhạc thế giới là 21 tháng 6."},
      {k:"sport",t:"Michael Phelps giữ kỷ lục 23 huy chương vàng Olympic."},
      {k:"sport",t:"Pelé đã ba lần vô địch World Cup."},
      {k:"sport",t:"Thế vận hội mùa hè 2024 được tổ chức ở Paris."},
      {k:"sport",t:"Wimbledon là giải quần vợt lâu đời nhất thế giới."},
      {k:"culture",t:"Lễ hội Carnival ở Rio de Janeiro là một trong những lễ hội lớn nhất hành tinh."},
      {k:"culture",t:"Oktoberfest được tổ chức hằng năm ở Munich, Đức."},
      {k:"culture",t:"Taj Mahal ở Ấn Độ được xây làm lăng mộ."},
      {k:"culture",t:"Bức Mona Lisa được trưng bày tại bảo tàng Louvre."},
      {k:"space",t:"Trên sao Kim, Mặt Trời mọc ở phía tây và lặn ở phía đông."},
      {k:"space",t:"Trong chân không vũ trụ, hai mảnh kim loại sạch chạm vào nhau có thể dính liền thành một, hiện tượng này gọi là hàn nguội."},
      {k:"space",t:"Sao Hải Vương chỉ vừa hoàn thành vòng quanh Mặt Trời đầu tiên kể từ lúc được phát hiện (1846) vào năm 2011."},
      {k:"space",t:"Mặt Trăng cũng có động đất, gọi là moonquake."},
      {k:"space",t:"Đồng hồ đặt trên đỉnh núi chạy nhanh hơn một chút so với đồng hồ ở mực nước biển."},
      {k:"nature",t:"Cá hề đều sinh ra là cá đực, và con lớn nhất trong đàn có thể chuyển thành cá cái."},
      {k:"nature",t:"Kỳ nhông axolotl có thể mọc lại cả chi và một phần tim, não."},
      {k:"nature",t:"Bọ hung biết định hướng bằng cách nhìn vào Dải Ngân Hà."},
      {k:"nature",t:"Hồng hạc có màu hồng nhờ sắc tố trong tôm và tảo mà chúng ăn."},
      {k:"nature",t:"Vòi voi có hàng chục nghìn bó cơ."},
      {k:"nature",t:"Gián có thể sống tới khoảng một tuần sau khi mất đầu."},
      {k:"nature",t:"Cá voi sát thủ orca thật ra thuộc họ cá heo."},
      {k:"nature",t:"Ếch gỗ có thể đóng băng phần lớn cơ thể vào mùa đông rồi hồi sinh khi trời ấm."},
      {k:"nature",t:"Gấu nước tardigrade từng sống sót khi được đưa ra ngoài chân không vũ trụ."},
      {k:"nature",t:"Một số loài rùa nước ngọt có thể hấp thụ oxy qua huyệt khi ngủ đông dưới nước."},
      {k:"body",t:"Lớp niêm mạc dạ dày của người được thay mới sau mỗi vài ngày."},
      {k:"body",t:"Cảm giác nổi da gà khi nghe nhạc hay gọi là frisson."},
      {k:"body",t:"Giác mạc của mắt không có mạch máu mà nhận oxy trực tiếp từ không khí."},
      {k:"body",t:"Người có 20 chiếc răng sữa và 32 chiếc răng vĩnh viễn."},
      {k:"body",t:"Vị umami được nhà khoa học Nhật Kikunae Ikeda xác định năm 1908."},
      {k:"body",t:"Cơ thể người phát ra ánh sáng cực yếu mà mắt thường không thấy."},
      {k:"tech",t:"Từ spam trong email bắt nguồn từ một tiểu phẩm của nhóm hài Monty Python."},
      {k:"tech",t:"Máy tính xách tay Osborne 1 ra đời năm 1981 và nặng khoảng 11 kg."},
      {k:"tech",t:"CAPTCHA là viết tắt của Completely Automated Public Turing test to tell Computers and Humans Apart."},
      {k:"tech",t:"Tên Google bắt nguồn từ googol, số 1 theo sau bởi 100 số 0."},
      {k:"tech",t:"Trang web đầu tiên của thế giới vẫn có thể xem được trên info.cern.ch."},
      {k:"tech",t:"Biểu tượng nút nguồn được cho là kết hợp từ số 1 và số 0."},
      {k:"vn",t:"Tên Hà Nội theo nghĩa Hán Việt có nghĩa là bên trong sông."},
      {k:"vn",t:"Tín ngưỡng thờ cúng Hùng Vương ở Phú Thọ được UNESCO ghi danh năm 2012."},
      {k:"vn",t:"Đờn ca tài tử Nam Bộ được UNESCO ghi danh năm 2013."},
      {k:"vn",t:"Dân ca ví dặm Nghệ Tĩnh được UNESCO ghi danh năm 2014."},
      {k:"vn",t:"Thành nhà Hồ ở Thanh Hoá được xây bằng những khối đá lớn vào năm 1397."},
      {k:"vn",t:"Quốc hiệu Việt Nam chính thức được dùng từ năm 1804 dưới thời vua Gia Long."},
      {k:"vn",t:"Đồ Sơn ở Hải Phòng là khu nghỉ mát biển có từ thời Pháp thuộc."},
      {k:"vn",t:"Mỹ Sơn ở Quảng Nam là quần thể đền tháp Chăm được UNESCO ghi danh."},
      {k:"history",t:"Napoleon cao khoảng 1,69 m, không hề thấp như người ta hay đồn."},
      {k:"history",t:"Người Viking trong lịch sử không đội mũ có sừng."},
      {k:"history",t:"Sputnik 1 là vệ tinh nhân tạo đầu tiên, được Liên Xô phóng năm 1957."},
      {k:"history",t:"Tháp Eiffel khi xây chỉ được cấp phép tồn tại khoảng 20 năm."},
      {k:"history",t:"Công nhân xây kim tự tháp Giza chủ yếu là lao động làm thuê, và họ được trả bằng bánh mì và bia."},
      {k:"history",t:"Dân số thế giới vượt mốc 8 tỉ người vào cuối năm 2022."},
      {k:"history",t:"Hạt ca cao từng được người Maya và Aztec dùng làm tiền."},
      {k:"history",t:"Magna Carta được ký năm 1215."},
      {k:"science",t:"Hiệu ứng Mpemba cho rằng trong một số điều kiện nước nóng có thể đóng băng nhanh hơn nước lạnh, nhưng vẫn còn tranh cãi."},
      {k:"science",t:"Hơn 99% các loài từng sống trên Trái Đất đã tuyệt chủng."},
      {k:"science",t:"Nước có khối lượng riêng lớn nhất ở khoảng 4 độ C."},
      {k:"science",t:"Mùi của đất sau cơn mưa có tên là petrichor."},
      {k:"science",t:"Oxy chiếm khoảng một nửa khối lượng của vỏ Trái Đất."},
      {k:"science",t:"Đá khô là khí CO2 ở thể rắn và thăng hoa ở khoảng âm 78 độ C."},
      {k:"science",t:"Nhiều loài chim cảm nhận được từ trường Trái Đất để định hướng khi di cư."},
      {k:"food",t:"Hạt điều thật ra mọc ở đầu một quả giả to hơn gọi là quả điều."},
      {k:"food",t:"Sô cô la trắng không chứa bột ca cao mà chỉ có bơ ca cao."},
      {k:"food",t:"Hạt tiêu đen, tiêu trắng và tiêu xanh đều đến từ cùng một loài cây."},
      {k:"food",t:"Trà đen, trà xanh và ô long đều làm từ cùng một loài cây là Camellia sinensis."},
      {k:"food",t:"Hành tây làm cay mắt vì giải phóng các hợp chất chứa lưu huỳnh khi bị cắt."},
      {k:"food",t:"Món sandwich được cho là mang tên Bá tước Sandwich của nước Anh."},
      {k:"geo",t:"Chile dài khoảng 4.300 km nhưng chỗ rộng trung bình chỉ khoảng 177 km."},
      {k:"geo",t:"Hồ Baikal chứa khoảng 20% lượng nước ngọt dạng lỏng trên mặt đất."},
      {k:"geo",t:"Cờ của Nepal là lá cờ quốc gia duy nhất không có hình chữ nhật."},
      {k:"geo",t:"Pháp là nước có nhiều múi giờ nhất nếu tính cả các vùng lãnh thổ hải ngoại."},
      {k:"geo",t:"Trên toàn bộ chiều dài sông Amazon không có cây cầu nào bắc qua dòng chính."},
      {k:"geo",t:"Bolivia có hai thủ đô là La Paz và Sucre."},
      {k:"geo",t:"Bắc Cực không có đất liền mà chỉ là biển băng."},
      {k:"geo",t:"Ở eo biển Bering, hai đảo Little Diomede của Mỹ và Big Diomede của Nga chỉ cách nhau khoảng 4 km."},
      {k:"geo",t:"Trung Quốc có chung biên giới với 14 quốc gia."},
      {k:"math",t:"Khối Rubik có hơn 43 tỉ tỉ trạng thái khác nhau."},
      {k:"math",t:"Chỉ cần 23 người trong một phòng là xác suất có hai người trùng ngày sinh đã vượt 50%."},
      {k:"math",t:"Dải Möbius chỉ có một mặt."},
      {k:"math",t:"Dấu nhân × được William Oughtred đưa ra năm 1631."},
      {k:"math",t:"Cờ vây có số thế cờ khoảng 10 mũ 170, vượt xa cờ vua."},
      {k:"lang",t:"Tiếng Rotokas ở Papua New Guinea chỉ có 12 chữ cái."},
      {k:"lang",t:"Từ set được ghi trong từ điển Oxford là từ có nhiều nghĩa nhất tiếng Anh."},
      {k:"lang",t:"Khoảng 40% ngôn ngữ trên thế giới đang có nguy cơ biến mất."},
      {k:"lang",t:"Từ hello mới trở nên phổ biến từ thế kỷ 19 cùng với điện thoại."},
      {k:"lang",t:"Bảng chữ cái tiếng Khmer có 74 ký tự, một trong những bảng dài nhất thế giới."},
      {k:"lang",t:"Chữ W tiếng Anh đọc là double U, còn tiếng Pháp gọi nó là double V."},
      {k:"game",t:"Doom được cộng đồng cho chạy trên cả que thử thai, máy ATM và nhiều thiết bị kỳ lạ."},
      {k:"game",t:"Con Creeper trong Minecraft ra đời do một lỗi khi tạo mô hình con lợn."},
      {k:"game",t:"Hàng nghìn hộp game E.T. của Atari bị chôn ở sa mạc New Mexico và được đào lên năm 2014."},
      {k:"game",t:"Sonic được tạo ra để cạnh tranh trực tiếp với Mario của Nintendo."},
      {k:"game",t:"Wii Sports là game được tặng kèm máy nên có doanh số cực lớn."},
      {k:"game",t:"PlayStation ban đầu là một dự án hợp tác với Nintendo."},
      {k:"game",t:"League of Legends hiện có hơn 160 vị tướng."},
      {k:"game",t:"Path of Exile 2 do studio Grinding Gear Games ở New Zealand phát triển."},
      {k:"music",t:"Theremin là nhạc cụ có thể chơi mà không cần chạm vào đàn."},
      {k:"music",t:"Nốt A chuẩn quốc tế có tần số 440 Hz."},
      {k:"music",t:"Một cây đàn piano có khoảng 12.000 chi tiết."},
      {k:"music",t:"Đàn violin Stradivari được chế tác ở thành phố Cremona của Ý."},
      {k:"sport",t:"Kéo co từng là môn thi đấu Olympic từ năm 1900 đến 1920."},
      {k:"sport",t:"Bóng quần vợt được nhuộm vàng từ thập niên 1970 để người xem truyền hình dễ nhìn."},
      {k:"sport",t:"Ván cờ vua kết thúc nhanh nhất có thể chiếu hết chỉ sau hai nước đi của mỗi bên."},
      {k:"culture",t:"Cử chỉ giơ ngón cái ở một số nước lại mang nghĩa xúc phạm."},
      {k:"culture",t:"Ngày Pi được kỷ niệm vào 14 tháng 3."},
      {k:"culture",t:"Tháp Eiffel từng bị nhiều văn nghệ sĩ Paris phản đối khi mới xây."},
      {k:"life",t:"Một nghiên cứu ở Đại học College London cho thấy trung bình mất khoảng 66 ngày để một thói quen mới thành tự động, nhưng có người chỉ cần vài tuần, có người cần gần một năm.",e:"A University College London study found a new habit takes about 66 days on average to become automatic, but it ranged from a few weeks to nearly a year."},
      {k:"life",t:"Hiệu ứng Zeigarnik: người ta thường nhớ những việc dang dở rõ hơn những việc đã làm xong.",e:"The Zeigarnik effect: people tend to remember unfinished tasks better than finished ones."},
      {k:"life",t:"Hiệu ứng IKEA: ta thường đánh giá cao hơn món đồ do chính mình lắp ráp.",e:"The IKEA effect: people value things more when they have helped build them."},
      {k:"life",t:"Hiệu ứng tiệc cocktail: giữa chỗ ồn ào, ta vẫn nhận ra tên mình khi ai đó nhắc ở xa.",e:"The cocktail party effect: in a noisy room you can still pick out your own name when someone says it across the room."},
      {k:"life",t:"Hiệu ứng tiếp xúc đơn thuần: càng thấy một thứ nhiều lần, ta càng có xu hướng thấy nó dễ chịu.",e:"The mere-exposure effect: the more often we see something, the more we tend to like it."},
      {k:"life",t:"Một chu kỳ giấc ngủ trọn vẹn kéo dài khoảng 90 phút.",e:"A full sleep cycle lasts about 90 minutes."},
      {k:"life",t:"Giật mình như rơi khi vừa chợp mắt gọi là giật cơ lúc ngủ (hypnic jerk), và rất phổ biến.",e:"That falling jolt just as you drift off is called a hypnic jerk, and it is very common."},
      {k:"life",t:"Quy tắc 20-20-20 cho mắt: cứ 20 phút nhìn màn hình thì nhìn xa khoảng 6 mét trong 20 giây.",e:"The 20-20-20 rule for your eyes: every 20 minutes of screen time, look at something about 6 meters away for 20 seconds."},
      {k:"life",t:"Một giấc ngủ ngắn chừng 10 đến 20 phút thường đủ để tỉnh táo hơn mà không bị uể oải khi dậy.",e:"A nap of about 10 to 20 minutes usually boosts alertness without leaving you groggy."},
      {k:"life",t:"Dấu vân tay bắt đầu hình thành khi thai nhi còn trong bụng mẹ, khoảng tuần thứ 10 đến 17.",e:"Fingerprints start forming before birth, around weeks 10 to 17 of pregnancy."},
      {k:"life",t:"Ngón tay nhăn lại khi ngâm nước lâu là phản ứng của hệ thần kinh, được cho là giúp cầm nắm đồ ướt tốt hơn.",e:"Pruney fingers after a long soak are a nervous system response, thought to improve grip on wet objects."},
      {k:"life",t:"Mùi hương gợi lại ký ức rất mạnh vì khứu giác nối khá gần với vùng não xử lý cảm xúc và trí nhớ.",e:"Smells trigger vivid memories because the sense of smell connects closely to brain areas for emotion and memory."},
      {k:"life",t:"Ngáp có tính lây: nhìn hoặc nghe người khác ngáp cũng dễ làm ta ngáp theo.",e:"Yawning is contagious: seeing or hearing someone yawn often makes you yawn too."},
      {k:"life",t:"Trí nhớ ngắn hạn của người lớn thường giữ được khoảng bảy mục thông tin cùng lúc, hơn kém hai.",e:"Adult short-term memory typically holds about seven items at once, give or take two."},
      {k:"life",t:"Hiệu ứng placebo vẫn có thể có tác dụng ngay cả khi người dùng biết rõ đó là giả dược.",e:"The placebo effect can work even when people know they are taking a placebo."},
      {k:"life",t:"Một năm thường có 52 tuần cộng thêm 1 ngày, vì 365 chia cho 7 dư 1.",e:"A normal year is 52 weeks plus one day, because 365 divided by 7 leaves a remainder of 1."},
      {k:"life",t:"Cảm giác điện thoại rung hoặc đổ chuông dù thực ra không có gì được gọi là rung ảo (phantom vibration).",e:"Feeling your phone buzz when it did not is called phantom vibration."},
      {k:"life",t:"Khi vừa mua xe hay mua đồ mới, ta bỗng thấy nó xuất hiện khắp nơi: đó là ảo giác tần suất (frequency illusion).",e:"Buy a new car and suddenly you see it everywhere: that is the frequency illusion."},
      {k:"life",t:"Đa số các khuyến nghị cho rằng phòng ngủ mát, khoảng 16 đến 19 độ C, giúp ngủ ngon hơn.",e:"Many sleep guidelines suggest a cool bedroom, around 16 to 19 degrees Celsius, for better sleep."},
      {k:"life",t:"Màu xanh dương thường đứng đầu trong các khảo sát về màu được yêu thích nhất trên thế giới.",e:"Blue often tops surveys of the world's favorite color."},
      {k:"life",t:"Hiệu ứng Dunning-Kruger: người mới biết ít về một lĩnh vực thường có xu hướng đánh giá quá cao khả năng của mình.",e:"The Dunning-Kruger effect: people with little knowledge of a field often overestimate their own ability."},
      {k:"life",t:"Một nghiên cứu năm 2020 ước tính não người nảy ra khoảng 6.000 suy nghĩ mỗi ngày.",e:"A 2020 study estimated the human mind has around 6,000 thoughts a day."},
      {k:"life",t:"Ước tính một người sống đến tuổi thọ trung bình có thể đi bộ vượt 100.000 km, hơn hai lần chu vi Trái Đất.",e:"A person living an average lifespan may walk over 100,000 km, more than twice around the Earth."},
      {k:"life",t:"Hiện tượng \"đầu lưỡi\" là khi ta biết mình biết một từ nhưng chưa thể nhớ ra ngay.",e:"The tip-of-the-tongue state is when you know that you know a word but cannot quite retrieve it."},
      {k:"life",t:"Mỗi người có một dấu lưỡi riêng, giống như dấu vân tay.",e:"Everyone has a unique tongue print, much like a fingerprint."},
      {k:"life",t:"Cười thật sự (nụ cười Duchenne) làm cả cơ quanh mắt co lại, không chỉ cơ miệng.",e:"A genuine smile, the Duchenne smile, also engages the muscles around the eyes, not just the mouth."},
      {k:"life",t:"Nhiều người thấy mình sáng tạo hơn ngay sau khi đi bộ, theo một nghiên cứu của Đại học Stanford.",e:"Many people think more creatively right after walking, according to a Stanford study."},
      {k:"life",t:"Tiếng ồn trắng, như tiếng quạt hay tiếng mưa đều đều, giúp một số người ngủ dễ hơn vì che bớt tiếng động đột ngột.",e:"Steady white noise, like a fan or rain, helps some people sleep by masking sudden sounds."},
      {k:"music",t:"Nốt La chuẩn dùng để lên dây nhạc cụ thường có tần số 440 Hz.",e:"The standard tuning note A is usually set at 440 Hz."},
      {k:"music",t:"Máy Walkman của Sony ra mắt năm 1979 và biến việc nghe nhạc di động thành thói quen phổ biến.",e:"Sony's Walkman launched in 1979 and made portable listening an everyday habit."},
      {k:"music",t:"Đĩa than LP thường quay 33⅓ vòng mỗi phút.",e:"LP vinyl records usually spin at 33⅓ revolutions per minute."},
      {k:"music",t:"Đĩa CD thương mại đầu tiên được bán ở Nhật năm 1982.",e:"The first commercial compact discs went on sale in Japan in 1982."},
      {k:"music",t:"\"Gangnam Style\" là video đầu tiên trên YouTube vượt một tỷ lượt xem, vào cuối năm 2012.",e:"\"Gangnam Style\" was the first YouTube video to pass one billion views, in late 2012."},
      {k:"music",t:"Bản \"Seikilos epitaph\" của Hy Lạp cổ đại thường được xem là bản nhạc hoàn chỉnh cổ nhất còn được ghi lại gần nguyên vẹn.",e:"The ancient Greek \"Seikilos epitaph\" is often cited as the oldest surviving complete musical composition."},
      {k:"music",t:"Mozart mất năm 1791 khi bản \"Requiem\" của ông còn dang dở.",e:"Mozart died in 1791 with his \"Requiem\" unfinished."},
      {k:"music",t:"\"Bohemian Rhapsody\" của Queen dài khoảng 5 phút 55 giây, rất dài so với một đĩa đơn thời đó.",e:"Queen's \"Bohemian Rhapsody\" runs about 5 minutes 55 seconds, very long for a single at the time."},
      {k:"music",t:"\"Hiệu ứng Mozart\" cho rằng nghe Mozart làm trẻ thông minh hơn, nhưng các nghiên cứu sau đó không xác nhận điều này.",e:"The \"Mozart effect\" claimed that listening to Mozart makes children smarter, but later studies did not confirm it."},
      {k:"music",t:"Âm lượng trên khoảng 85 decibel nếu nghe kéo dài nhiều giờ có thể làm hại thính giác.",e:"Sound above roughly 85 decibels, if heard for hours, can damage hearing."},
      {k:"music",t:"Hát chung trong dàn hợp xướng có thể làm nhịp tim của các thành viên dần đồng bộ với nhau.",e:"Singing together in a choir can make members' heart rates gradually synchronize."},
      {k:"music",t:"Spotify ra mắt năm 2008 tại Thụy Điển.",e:"Spotify launched in 2008 in Sweden."},
      {k:"music",t:"Máy đếm nhịp (metronome) được cấp bằng sáng chế bởi Johann Maelzel vào năm 1815.",e:"Johann Maelzel patented the metronome in 1815."},
      {k:"music",t:"Đàn Stradivarius do gia đình Stradivari chế tác ở Cremona (Ý) cách đây hơn 300 năm, và một số chiếc có giá hàng triệu đô la.",e:"Stradivarius instruments, made in Cremona, Italy over 300 years ago, can sell for millions of dollars."},
      {k:"music",t:"Bài \"Yesterday\" của The Beatles thuộc nhóm ca khúc được các nghệ sĩ khác thu âm lại nhiều nhất trong lịch sử.",e:"The Beatles' \"Yesterday\" is among the most-covered songs in history."},
      {k:"music",t:"Một quãng tám trong âm nhạc phương Tây có 12 nốt bán cung khác nhau.",e:"A Western octave contains 12 distinct semitones."},
      {k:"music",t:"Nhạc trưởng chỉ huy dàn nhạc chủ yếu để giữ nhịp, định hình cách diễn tấu và ra tín hiệu cho từng nhóm nhạc cụ.",e:"A conductor mainly keeps time, shapes the interpretation, and cues each group of instruments."},
      {k:"music",t:"Tiếng đàn guitar bass thường trầm hơn guitar thường vì dây của nó dài và dày hơn và lên dây thấp hơn một quãng tám.",e:"A bass guitar sounds lower because its strings are longer and thicker, tuned an octave below a regular guitar's lowest strings."},
      {k:"sport",t:"Thế vận hội Mùa đông đầu tiên diễn ra ở Chamonix (Pháp) năm 1924.",e:"The first Winter Olympics took place in Chamonix, France, in 1924."},
      {k:"sport",t:"Năm vòng tròn Olympic thường được hiểu là tượng trưng cho năm châu lục có vận động viên tham gia.",e:"The five Olympic rings are commonly understood to represent the five participating continents."},
      {k:"sport",t:"Huy chương vàng Olympic thực chất chủ yếu làm bằng bạc, mạ một lớp vàng bên ngoài.",e:"Olympic gold medals are mostly silver, plated with gold."},
      {k:"sport",t:"Năm 2019 Eliud Kipchoge chạy marathon dưới 2 giờ ở Vienna (1 giờ 59 phút 40 giây), dù kết quả này không được công nhận kỷ lục chính thức do điều kiện hỗ trợ.",e:"In 2019 Eliud Kipchoge ran a marathon in 1:59:40 in Vienna, though it was not an official record because of the assisted conditions."},
      {k:"sport",t:"Bóng chuyền ra đời năm 1895 và ban đầu mang tên \"Mintonette\".",e:"Volleyball was created in 1895 and was first called \"Mintonette\"."},
      {k:"sport",t:"Giải đua xe đạp Tour de France được tổ chức lần đầu năm 1903.",e:"The Tour de France was first held in 1903."},
      {k:"sport",t:"Judo do Kanō Jigorō sáng lập ở Nhật Bản vào năm 1882.",e:"Judo was founded by Kanō Jigorō in Japan in 1882."},
      {k:"sport",t:"Taekwondo trở thành môn thi đấu chính thức của Olympic từ năm 2000.",e:"Taekwondo became an official Olympic sport in 2000."},
      {k:"sport",t:"Sân golf tiêu chuẩn có 18 lỗ, thói quen này xuất phát từ sân Old Course ở St Andrews (Scotland).",e:"A standard golf course has 18 holes, a convention that traces back to the Old Course at St Andrews in Scotland."},
      {k:"sport",t:"Quả cầu lông có thể bay nhanh trên 400 km/h khi bị đập mạnh, nhanh nhất trong các môn dùng vợt.",e:"A badminton shuttlecock can top 400 km/h when smashed, the fastest of any racket sport."},
      {k:"sport",t:"Một trận cricket Test có thể kéo dài tới năm ngày.",e:"A Test cricket match can last up to five days."},
      {k:"sport",t:"Cầu thủ bóng đá thường chạy khoảng 10 đến 12 km trong một trận đấu.",e:"Footballers typically run about 10 to 12 km in a match."},
      {k:"sport",t:"FIFA được thành lập năm 1904 tại Paris.",e:"FIFA was founded in Paris in 1904."},
      {k:"sport",t:"Hoàng Xuân Vinh giành huy chương vàng Olympic đầu tiên cho Việt Nam ở nội dung bắn súng 10 m súng ngắn hơi tại Rio 2016.",e:"Hoàng Xuân Vinh won Vietnam's first Olympic gold medal in the 10 m air pistol at Rio 2016."},
      {k:"sport",t:"U23 Việt Nam giành ngôi á quân giải U23 châu Á 2018 ở Thường Châu (Trung Quốc) trong trời tuyết.",e:"Vietnam's U23 team were runners-up at the 2018 AFC U23 Championship in Changzhou, China, playing in the snow."},
      {k:"sport",t:"Đội tuyển Việt Nam từng vô địch giải Đông Nam Á (AFF Cup) vào các năm 2008, 2018 và 2024.",e:"The Vietnamese national team has won the Southeast Asian championship in 2008, 2018 and 2024."},
      {k:"sport",t:"Sumo là môn võ truyền thống của Nhật Bản, và võ sĩ ném muối vào sàn đấu trước trận để thanh tẩy.",e:"Sumo is a traditional Japanese sport, and wrestlers throw salt into the ring before a bout as a purification ritual."},
      {k:"sport",t:"Bóng đá nữ từng bị cấm thi đấu ở Anh từ năm 1921 đến năm 1971.",e:"Women's football was banned from English league grounds from 1921 to 1971."},
      {k:"sport",t:"Đường bơi trong bể Olympic dài 50 mét.",e:"An Olympic swimming pool is 50 meters long."},
      {k:"sport",t:"Cờ vua được Ủy ban Olympic Quốc tế công nhận là môn thể thao, dù chưa từng có mặt ở Thế vận hội.",e:"Chess is recognized as a sport by the International Olympic Committee, though it has never been in the Games."},
      {k:"lang",t:"Bia Rosetta giúp Champollion giải mã chữ tượng hình Ai Cập vào năm 1822.",e:"The Rosetta Stone helped Champollion decode Egyptian hieroglyphs in 1822."},
      {k:"lang",t:"Từ \"quarantine\" (kiểm dịch) bắt nguồn từ cụm tiếng Ý có nghĩa là \"bốn mươi ngày\".",e:"The word \"quarantine\" comes from an Italian phrase meaning \"forty days\"."},
      {k:"lang",t:"Câu \"The quick brown fox jumps over the lazy dog\" chứa đủ 26 chữ cái tiếng Anh.",e:"\"The quick brown fox jumps over the lazy dog\" uses all 26 English letters."},
      {k:"lang",t:"\"OK\" được cho là xuất phát từ cách viết tắt hài hước \"oll korrect\" trên báo ở Boston năm 1839.",e:"\"OK\" is thought to come from a humorous abbreviation of \"oll korrect\" in Boston newspapers in 1839."},
      {k:"lang",t:"Từ \"typewriter\" có thể gõ hoàn toàn chỉ bằng một hàng phím chữ trên cùng của bàn phím QWERTY.",e:"The word \"typewriter\" can be typed entirely using the top letter row of a QWERTY keyboard."},
      {k:"lang",t:"Ký hiệu @ được gọi là \"ốc sên\" trong tiếng Ý (chiocciola) và \"đuôi khỉ\" trong tiếng Hà Lan (apenstaartje).",e:"The @ sign is called \"snail\" in Italian (chiocciola) and \"monkey tail\" in Dutch (apenstaartje)."},
      {k:"lang",t:"Ngôn ngữ ký hiệu không phải là một thứ tiếng chung toàn cầu: mỗi vùng có ngôn ngữ ký hiệu riêng.",e:"Sign language is not universal: different regions have their own sign languages."},
      {k:"lang",t:"Từ \"set\" được xem là một trong những từ có nhiều nghĩa nhất trong tiếng Anh.",e:"\"Set\" is often cited as one of the English words with the most meanings."},
      {k:"lang",t:"Tiếng Việt từng được viết bằng chữ Nôm, một hệ chữ dựa trên chữ Hán nhưng có thêm ký tự do người Việt tạo ra.",e:"Vietnamese was once written in Chữ Nôm, a script based on Chinese characters with extra ones created by the Vietnamese."},
      {k:"lang",t:"Từ dài nhất trong nhiều từ điển tiếng Anh là \"pneumonoultramicroscopicsilicovolcanoconiosis\" với 45 chữ cái.",e:"The longest word in many English dictionaries is \"pneumonoultramicroscopicsilicovolcanoconiosis\", at 45 letters."},
      {k:"lang",t:"Tiếng Tây Ban Nha có số người dùng làm tiếng mẹ đẻ đứng thứ hai thế giới, sau tiếng Quan thoại.",e:"Spanish has the second most native speakers in the world, after Mandarin."},
      {k:"game",t:"Nintendo được thành lập năm 1889 và ban đầu bán bài hanafuda của Nhật.",e:"Nintendo was founded in 1889 and originally sold Japanese hanafuda playing cards."},
      {k:"game",t:"Game Boy ra mắt năm 1989 và đi kèm game Tetris.",e:"The Game Boy launched in 1989 and came with Tetris."},
      {k:"game",t:"Pokémon ra mắt trên Game Boy ở Nhật năm 1996, do Tajiri Satoshi sáng tạo.",e:"Pokémon debuted on Game Boy in Japan in 1996, created by Satoshi Tajiri."},
      {k:"game",t:"Flappy Bird do lập trình viên người Việt Nguyễn Hà Đông tạo ra và bùng nổ toàn cầu vào đầu năm 2014.",e:"Flappy Bird was made by Vietnamese developer Nguyễn Hà Đông and exploded worldwide in early 2014."},
      {k:"game",t:"Game đầu tiên được cho là có \"Easter egg\" ẩn là Adventure của Atari năm 1979, do Warren Robinett giấu tên mình vào.",e:"The first game with a hidden \"Easter egg\" is thought to be Atari's Adventure in 1979, where Warren Robinett hid his name."},
      {k:"game",t:"Monopoly bắt nguồn từ \"The Landlord's Game\" do Elizabeth Magie thiết kế năm 1904.",e:"Monopoly grew out of \"The Landlord's Game\", designed by Elizabeth Magie in 1904."},
      {k:"game",t:"Tên \"Lego\" là từ ghép của cụm tiếng Đan Mạch \"leg godt\", nghĩa là \"chơi vui vẻ\".",e:"The name \"Lego\" comes from the Danish phrase \"leg godt\", meaning \"play well\"."},
      {k:"game",t:"Kỷ lục giải khối Rubik 3x3 hiện nay đã xuống dưới 4 giây.",e:"The Rubik's Cube 3x3 solving record is now under 4 seconds."},
      {k:"game",t:"Pac-Man ra mắt năm 1980 ở Nhật và trở thành biểu tượng của game arcade.",e:"Pac-Man arrived in Japan in 1980 and became an icon of arcade gaming."},
      {k:"game",t:"Doom năm 1993 giúp định hình thể loại bắn súng góc nhìn thứ nhất và cho phép người chơi tự tạo bản đồ.",e:"Doom in 1993 helped define the first-person shooter and let players make their own levels."},
      {k:"game",t:"The Legend of Zelda ra mắt năm 1986 và là một trong những game phiêu lưu thế giới mở đầu tiên.",e:"The Legend of Zelda arrived in 1986 and was one of the first open-world adventure games."},
      {k:"game",t:"Pokémon GO ra mắt năm 2016 và đưa hàng chục triệu người ra đường tìm bắt Pokémon bằng điện thoại.",e:"Pokémon GO launched in 2016 and sent tens of millions of people outdoors catching Pokémon on their phones."},
      {k:"game",t:"Sudoku có tên gọi tiếng Nhật và được công ty Nikoli phổ biến từ thập niên 1980, dù bản gốc là trò chơi Mỹ.",e:"Sudoku has a Japanese name and was popularized by Nikoli in the 1980s, though the puzzle originated in the United States."},
      {k:"game",t:"Một ván speedrun Super Mario Bros hoàn thành toàn bộ game chỉ trong khoảng 5 phút.",e:"Top speedruns finish the whole of Super Mario Bros in around five minutes."},
      {k:"game",t:"Fortnite Battle Royale ra mắt năm 2017 và có hàng trăm triệu người chơi đăng ký.",e:"Fortnite Battle Royale launched in 2017 and attracted hundreds of millions of registered players."},
      {k:"culture",t:"Bức \"Mona Lisa\" bị đánh cắp khỏi bảo tàng Louvre năm 1911 và được tìm lại sau hơn hai năm, điều này góp phần làm nó nổi tiếng toàn cầu.",e:"The \"Mona Lisa\" was stolen from the Louvre in 1911 and recovered over two years later, which boosted its worldwide fame."},
      {k:"culture",t:"Van Gogh vẽ \"Đêm đầy sao\" năm 1889 khi đang điều trị ở một bệnh viện tâm thần ở Saint-Rémy (Pháp).",e:"Van Gogh painted \"The Starry Night\" in 1889 while being treated at an asylum in Saint-Rémy, France."},
      {k:"culture",t:"Tượng Oscar cao khoảng 34 cm và nặng gần 4 kg.",e:"The Oscar statuette stands about 34 cm tall and weighs nearly 4 kg."},
      {k:"culture",t:"Cuốn Harry Potter đầu tiên từng bị khoảng 12 nhà xuất bản từ chối trước khi được nhận in.",e:"The first Harry Potter book was reportedly turned down by around 12 publishers before being accepted."},
      {k:"culture",t:"Shakespeare được ghi nhận là người đầu tiên dùng bằng chữ viết nhiều từ tiếng Anh quen thuộc ngày nay, như \"eyeball\" (nhãn cầu).",e:"Shakespeare is credited with the earliest written use of many familiar English words, such as \"eyeball\"."},
      {k:"culture",t:"\"Don Quixote\" của Cervantes thường được xem là một trong những tiểu thuyết hiện đại đầu tiên, xuất bản năm 1605.",e:"Cervantes's \"Don Quixote\", published in 1605, is often regarded as one of the first modern novels."},
      {k:"culture",t:"Truyện Kiều của Nguyễn Du gồm 3.254 câu thơ lục bát.",e:"Nguyễn Du's \"The Tale of Kiều\" has 3,254 lines of lục bát verse."},
      {k:"culture",t:"Kinh thánh Gutenberg, in khoảng năm 1455, là một trong những cuốn sách đầu tiên in bằng kỹ thuật chữ rời ở châu Âu.",e:"The Gutenberg Bible, printed around 1455, was among the first books printed with movable type in Europe."},
      {k:"culture",t:"Origami có nghĩa là \"gấp giấy\" trong tiếng Nhật.",e:"Origami means \"folding paper\" in Japanese."},
      {k:"culture",t:"Nhà hát Opera Sydney do kiến trúc sư người Đan Mạch Jørn Utzon thiết kế và khánh thành năm 1973.",e:"The Sydney Opera House was designed by Danish architect Jørn Utzon and opened in 1973."},
      {k:"culture",t:"Taj Mahal được hoàng đế Shah Jahan xây dựng để tưởng nhớ người vợ Mumtaz Mahal.",e:"The Taj Mahal was built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal."},
      {k:"culture",t:"Nhà thờ Sagrada Família ở Barcelona do Antoni Gaudí thiết kế, khởi công năm 1882 và đã được xây suốt hơn một thế kỷ.",e:"The Sagrada Família in Barcelona, designed by Antoni Gaudí, began construction in 1882 and has been built over more than a century."},
      {k:"culture",t:"Lễ hội Oktoberfest ở Munich bắt nguồn từ đám cưới của Thái tử Bavaria vào năm 1810.",e:"Munich's Oktoberfest began with the wedding of a Bavarian crown prince in 1810."},
      {k:"culture",t:"Lễ hội La Tomatina ở Buñol (Tây Ban Nha) là nơi hàng nghìn người ném cà chua vào nhau mỗi năm.",e:"At Spain's La Tomatina festival in Buñol, thousands of people throw tomatoes at each other every year."},
      {k:"culture",t:"Mickey Mouse ra mắt công chúng năm 1928 trong phim hoạt hình \"Steamboat Willie\".",e:"Mickey Mouse made his public debut in 1928 in the cartoon \"Steamboat Willie\"."},
      {k:"culture",t:"\"The Jazz Singer\" năm 1927 thường được xem là bộ phim có tiếng nói thương mại đầu tiên.",e:"\"The Jazz Singer\" in 1927 is often regarded as the first commercial feature with synchronized speech."},
      {k:"culture",t:"\"Bạch Tuyết và bảy chú lùn\" (1937) là phim hoạt hình dài vẽ tay có tiếng đầu tiên của Disney.",e:"\"Snow White and the Seven Dwarfs\" (1937) was Disney's first feature-length hand-drawn animated film."},
      {k:"culture",t:"Nghệ sĩ đường phố Banksy gây chấn động năm 2018 khi tranh của ông tự cắt vụn ngay sau khi được bán đấu giá.",e:"Street artist Banksy caused a stir in 2018 when his painting shredded itself right after selling at auction."},
      {k:"culture",t:"Tezuka Osamu, tác giả \"Astro Boy\", thường được gọi là \"cha đẻ của manga hiện đại\".",e:"Tezuka Osamu, creator of \"Astro Boy\", is often called the \"father of modern manga\"."},
      {k:"culture",t:"Bảo tàng Louvre ở Paris thường là bảo tàng đón nhiều khách nhất thế giới.",e:"The Louvre in Paris is usually the most visited museum in the world."},
      {k:"culture",t:"Lễ hội Carnival ở Venice nổi tiếng với những chiếc mặt nạ tinh xảo.",e:"The Carnival of Venice is famous for its elaborate masks."},
      {k:"culture",t:"Kabuki là loại hình sân khấu truyền thống của Nhật, nổi tiếng với trang điểm cầu kỳ và diễn viên nam đóng cả vai nữ.",e:"Kabuki is a traditional Japanese theatre known for elaborate makeup and male actors playing female roles."},
      {k:"culture",t:"Rối nước là loại hình nghệ thuật dân gian đặc sắc của Việt Nam, biểu diễn trên mặt nước với phông nền là làng quê.",e:"Water puppetry is a distinctive Vietnamese folk art performed on water against a village backdrop."},
      {k:"culture",t:"Khi còn sống, Van Gogh chỉ bán được rất ít tranh, và danh tiếng của ông lớn dần sau khi mất.",e:"Van Gogh sold very few paintings in his lifetime, and his fame grew after his death."},
      {k:"culture",t:"Nhạc kịch \"The Phantom of the Opera\" từng là vở diễn liên tục lâu nhất trong lịch sử Broadway, trước khi hạ màn năm 2023.",e:"\"The Phantom of the Opera\" was Broadway's longest-running show before closing in 2023."},
      {k:"math",t:"Số pi là số vô tỉ và siêu việt, nên phần thập phân của nó không bao giờ lặp lại hay kết thúc.",e:"Pi is irrational and transcendental, so its decimals never repeat or end."},
      {k:"math",t:"Số 0 như một con số thực thụ được nhà toán học Ấn Độ Brahmagupta mô tả quy tắc tính toán vào khoảng thế kỷ thứ 7.",e:"The Indian mathematician Brahmagupta described rules for calculating with zero as a true number around the 7th century."},
      {k:"math",t:"Euclid chứng minh từ hơn 2.000 năm trước rằng có vô hạn số nguyên tố.",e:"Euclid proved over 2,000 years ago that there are infinitely many prime numbers."},
      {k:"math",t:"Đến năm 2024, số nguyên tố lớn nhất được biết có hơn 41 triệu chữ số.",e:"As of 2024, the largest known prime had more than 41 million digits."},
      {k:"math",t:"Dãy Fibonacci (1, 1, 2, 3, 5, 8...) được Leonardo ở Pisa giới thiệu cho châu Âu trong sách xuất bản năm 1202.",e:"The Fibonacci sequence (1, 1, 2, 3, 5, 8...) was introduced to Europe by Leonardo of Pisa in a book from 1202."},
      {k:"math",t:"Tỷ lệ vàng xấp xỉ 1,618 và là giới hạn của tỷ số giữa hai số Fibonacci liên tiếp.",e:"The golden ratio is about 1.618 and is the limit of the ratio of consecutive Fibonacci numbers."},
      {k:"math",t:"Định lý lớn Fermat tồn tại như một bài toán mở hơn 350 năm cho đến khi Andrew Wiles chứng minh vào năm 1994 đến 1995.",e:"Fermat's Last Theorem stayed open for over 350 years until Andrew Wiles proved it in 1994 to 1995."},
      {k:"math",t:"Đẳng thức Euler e^(iπ) + 1 = 0 nối năm hằng số quan trọng: e, i, π, 1 và 0.",e:"Euler's identity e^(iπ) + 1 = 0 links five fundamental constants: e, i, π, 1 and 0."},
      {k:"math",t:"Trong bài toán Monty Hall, đổi cửa giúp bạn thắng với xác suất 2/3 thay vì 1/3.",e:"In the Monty Hall problem, switching doors wins with probability 2/3 instead of 1/3."},
      {k:"math",t:"0,999... (lặp vô hạn) bằng đúng 1, chứ không chỉ gần bằng 1.",e:"0.999... repeating forever equals exactly 1, not merely close to it."},
      {k:"math",t:"Số 142857 có tính chất lạ: nhân nó với 2, 3, 4, 5 hay 6 đều cho ra các chữ số hoán vị vòng của chính nó.",e:"The number 142857 is curious: multiplying it by 2, 3, 4, 5 or 6 gives a rotation of its own digits."},
      {k:"math",t:"Dải Möbius chỉ có một mặt và một cạnh.",e:"A Möbius strip has only one side and one edge."},
      {k:"math",t:"Định lý bốn màu khẳng định chỉ cần bốn màu là đủ để tô mọi bản đồ sao cho hai vùng kề nhau khác màu, và được chứng minh năm 1976 với sự trợ giúp của máy tính.",e:"The four color theorem says four colors suffice to color any map so neighbors differ, and it was proved with computer help in 1976."},
      {k:"math",t:"Giả thuyết Goldbach nói mọi số chẵn lớn hơn 2 đều là tổng của hai số nguyên tố, và đến nay vẫn chưa ai chứng minh được.",e:"Goldbach's conjecture says every even number above 2 is a sum of two primes, and nobody has proved it yet."},
      {k:"math",t:"Bài toán bảy cây cầu ở Königsberg do Euler giải năm 1736 đã khai sinh ngành lý thuyết đồ thị.",e:"Euler's 1736 solution to the Seven Bridges of Königsberg problem founded graph theory."},
      {k:"math",t:"Một googol là 10 mũ 100, và tên công ty Google xuất phát từ cách viết sai của từ này.",e:"A googol is 10 to the power 100, and the company name Google came from a misspelling of it."},
      {k:"math",t:"Số La Mã không có ký hiệu cho số 0.",e:"Roman numerals have no symbol for zero."},
      {k:"food",t:"Khoai tây có nguồn gốc từ vùng núi Andes ở Nam Mỹ.",e:"Potatoes originate in the Andes mountains of South America."},
      {k:"food",t:"Vani là một trong những gia vị đắt nhất thế giới, chỉ sau nghệ tây.",e:"Vanilla is among the most expensive spices in the world, after saffron."},
      {k:"food",t:"Một kilôgam nghệ tây cần khoảng 150.000 bông hoa trở lên, vì chỉ lấy nhụy hoa.",e:"A kilogram of saffron takes roughly 150,000 flowers or more, since only the stigmas are used."},
      {k:"food",t:"Khi thái hành tây, một loại khí kích ứng được tạo ra khiến mắt cay và chảy nước.",e:"Cutting an onion releases an irritating gas that stings your eyes and makes them water."},
      {k:"food",t:"Dưa hấu chứa khoảng 92% là nước.",e:"Watermelon is about 92% water."},
      {k:"food",t:"Từ \"espresso\" trong tiếng Ý có nghĩa là \"ép ra\" hoặc \"nhanh\", ám chỉ cách pha nước nóng qua cà phê dưới áp suất.",e:"The Italian \"espresso\" means \"pressed out\" or \"fast\", describing hot water forced through coffee under pressure."},
      {k:"food",t:"Bánh pizza Margherita được cho là ra đời ở Naples năm 1889 để tôn vinh Hoàng hậu Margherita, với ba màu đỏ, trắng, xanh như quốc kỳ Ý.",e:"Pizza Margherita is said to have been created in Naples in 1889 for Queen Margherita, in the red, white and green of the Italian flag."},
      {k:"food",t:"Bánh quy sô-cô-la chip được phát minh năm 1938 bởi Ruth Wakefield ở nhà trọ Toll House (Mỹ).",e:"The chocolate chip cookie was invented in 1938 by Ruth Wakefield at the Toll House Inn in the US."},
      {k:"food",t:"Ketchup từng được bán như một loại thuốc vào thập niên 1830 ở Mỹ.",e:"Ketchup was once sold as a medicine in the United States in the 1830s."},
      {k:"food",t:"Sô-cô-la làm từ hạt ca cao, và người Maya cùng Aztec đã uống nó từ hàng nghìn năm trước.",e:"Chocolate is made from cacao beans, which the Maya and Aztecs drank thousands of years ago."},
      {k:"food",t:"Nhiều giống cà rốt ban đầu có màu tím hoặc vàng trước khi giống màu cam trở nên phổ biến.",e:"Many early carrot varieties were purple or yellow before orange ones became common."},
      {k:"food",t:"Hạt điều mọc dưới quả điều, và vỏ của nó chứa chất gây kích ứng nên hạt điều không bao giờ được bán còn nguyên vỏ.",e:"The cashew nut grows beneath the cashew apple, and its shell contains an irritating oil, so cashews are never sold in the shell."},
      {k:"food",t:"Trà thường được xem là đồ uống được tiêu thụ nhiều thứ hai thế giới, sau nước.",e:"Tea is often described as the second most consumed drink in the world, after water."},
      {k:"food",t:"Nước mắm truyền thống được làm từ cá ủ muối trong thời gian dài, thường nhiều tháng.",e:"Traditional fish sauce is made by fermenting fish with salt, often for many months."},
      {k:"food",t:"Gia vị muối thông thường là natri clorua, và cơ thể cần một lượng nhỏ natri để dây thần kinh và cơ bắp hoạt động.",e:"Table salt is sodium chloride, and the body needs a little sodium for nerves and muscles to work."},
      {k:"science",t:"Nguyên tử gần như là khoảng trống: hạt nhân chiếm một phần cực nhỏ thể tích của nó.",e:"Atoms are mostly empty space: the nucleus takes up a tiny fraction of their volume."},
      {k:"science",t:"Marie Curie là người đầu tiên nhận hai giải Nobel, ở hai lĩnh vực khác nhau là Vật lý và Hóa học.",e:"Marie Curie was the first person to win two Nobel Prizes, in two different fields: Physics and Chemistry."},
      {k:"science",t:"Einstein nhận giải Nobel Vật lý năm 1921 nhờ giải thích hiệu ứng quang điện, chứ không phải nhờ thuyết tương đối.",e:"Einstein won the 1921 Nobel Prize in Physics for explaining the photoelectric effect, not for relativity."},
      {k:"science",t:"Đồng hồ nguyên tử xác định một giây bằng 9.192.631.770 chu kỳ dao động của nguyên tử xêsi.",e:"Atomic clocks define a second as 9,192,631,770 oscillations of a cesium atom."},
      {k:"science",t:"Từ năm 2019, kilôgam được định nghĩa dựa trên hằng số Planck chứ không còn dựa vào một khối kim loại ở Pháp.",e:"Since 2019 the kilogram has been defined by the Planck constant rather than a metal cylinder in France."},
      {k:"science",t:"Hạt Higgs được xác nhận tại CERN vào năm 2012.",e:"The Higgs boson was confirmed at CERN in 2012."},
      {k:"science",t:"Graphene, một lớp cacbon dày một nguyên tử, được Geim và Novoselov tách ra năm 2004 và nhận Nobel Vật lý 2010.",e:"Graphene, a one-atom-thick sheet of carbon, was isolated by Geim and Novoselov in 2004 and won the 2010 Nobel Prize in Physics."},
      {k:"science",t:"Aerogel là một trong những vật liệu rắn nhẹ nhất, và phần lớn thể tích của nó là không khí.",e:"Aerogel is one of the lightest solid materials, and most of its volume is air."},
      {k:"science",t:"Chất lỏng phi Newton như hỗn hợp bột bắp và nước (oobleck) cứng lại khi bị tác động mạnh và chảy khi để yên.",e:"Non-Newtonian fluids like cornstarch and water (oobleck) stiffen under sudden force and flow when left alone."},
      {k:"science",t:"Hiện tượng siêu dẫn được Heike Kamerlingh Onnes phát hiện năm 1911 khi làm lạnh thủy ngân.",e:"Superconductivity was discovered by Heike Kamerlingh Onnes in 1911 while cooling mercury."},
      {k:"science",t:"Phương pháp xác định tuổi bằng cacbon-14 dựa trên chu kỳ bán rã khoảng 5.730 năm của đồng vị này.",e:"Carbon-14 dating relies on that isotope's half-life of about 5,730 years."},
      {k:"science",t:"Thạch anh có tính áp điện, nên được dùng trong đồng hồ thạch anh để giữ nhịp rất đều.",e:"Quartz is piezoelectric, which is why it keeps time so steadily in quartz watches."},
      {k:"science",t:"Trong bốn lực cơ bản của tự nhiên, lực hấp dẫn là lực yếu nhất.",e:"Of nature's four fundamental forces, gravity is the weakest."},
      {k:"science",t:"Heli là nguyên tố nhiều thứ hai trong vũ trụ, sau hydro.",e:"Helium is the second most abundant element in the universe, after hydrogen."},
      {k:"science",t:"Cầu vồng thực ra là một vòng tròn đầy đủ, ta chỉ thường thấy một phần của nó vì mặt đất chắn mất.",e:"A rainbow is actually a full circle, but we usually see only part of it because the ground gets in the way."},
      {k:"science",t:"Isaac Newton xuất bản \"Principia\", trình bày các định luật chuyển động và hấp dẫn, vào năm 1687.",e:"Isaac Newton published the \"Principia\", setting out the laws of motion and gravity, in 1687."},
      {k:"science",t:"Natri và các kim loại kiềm khác phản ứng mạnh với nước và giải phóng khí hydro.",e:"Sodium and other alkali metals react vigorously with water, releasing hydrogen gas."},
      {k:"science",t:"Đèn LED xanh dương, được phát minh vào thập niên 1990, đã mang lại giải Nobel Vật lý 2014 và giúp tạo ra ánh sáng trắng tiết kiệm điện.",e:"The blue LED, invented in the 1990s, earned the 2014 Nobel Prize in Physics and enabled efficient white lighting."},
      {k:"science",t:"Hiệu ứng Doppler khiến còi xe cứu thương nghe cao hơn khi xe lại gần và thấp hơn khi xe đi xa.",e:"The Doppler effect makes an ambulance siren sound higher as it approaches and lower as it moves away."},
      {k:"science",t:"Tầng ôzôn đang dần hồi phục nhờ Nghị định thư Montreal, được ký năm 1987 để hạn chế các chất làm suy giảm ôzôn.",e:"The ozone layer is slowly recovering thanks to the Montreal Protocol, signed in 1987 to restrict ozone-depleting substances."},
      {k:"science",t:"Vật chất tối ước tính chiếm khoảng 27% tổng năng lượng và vật chất của vũ trụ, nhưng chưa ai quan sát trực tiếp được nó.",e:"Dark matter is estimated to make up about 27% of the universe's total mass and energy, yet nobody has observed it directly."},
      {k:"science",t:"Newton không bị quả táo rơi trúng đầu, nhưng ông kể rằng việc nhìn một quả táo rơi đã gợi ý cho ông về lực hấp dẫn.",e:"Newton was not hit on the head by an apple, but he said watching one fall helped inspire his thinking about gravity."},
      {k:"science",t:"Một nguyên tử có đường kính cỡ một phần mười tỷ mét.",e:"An atom is about a ten-billionth of a meter across."},
      {k:"science",t:"Pin lithium-ion giúp Whittingham, Goodenough và Yoshino nhận giải Nobel Hóa học năm 2019.",e:"The lithium-ion battery earned Whittingham, Goodenough and Yoshino the 2019 Nobel Prize in Chemistry."},
      {k:"geo",t:"Rãnh Challenger ở vực Mariana sâu khoảng 10.900 mét, sâu hơn chiều cao của đỉnh Everest.",e:"The Challenger Deep in the Mariana Trench is about 10,900 meters deep, deeper than Everest is tall."},
      {k:"geo",t:"Nam Cực được xem là sa mạc lớn nhất thế giới vì lượng mưa tuyết rất ít.",e:"Antarctica counts as the world's largest desert because it receives so little precipitation."},
      {k:"geo",t:"Nhật Bản có hơn 6.800 hòn đảo, dù phần lớn dân cư sống trên bốn đảo chính.",e:"Japan has over 6,800 islands, though most people live on the four main ones."},
      {k:"geo",t:"Greenland là hòn đảo lớn nhất thế giới nếu không tính lục địa Úc.",e:"Greenland is the world's largest island if you do not count the continent of Australia."},
      {k:"geo",t:"Vatican là quốc gia nhỏ nhất thế giới, chỉ rộng khoảng 0,44 km².",e:"Vatican City is the world's smallest country, at only about 0.44 square kilometers."},
      {k:"geo",t:"Thác Angel ở Venezuela cao khoảng 979 mét, là thác nước cao nhất thế giới.",e:"Venezuela's Angel Falls is about 979 meters high, the tallest waterfall in the world."},
      {k:"geo",t:"Sa mạc Atacama ở Chile thuộc nhóm nơi khô hạn nhất Trái Đất, có những vùng nhiều năm không mưa.",e:"Chile's Atacama Desert is among the driest places on Earth, with some areas going years without rain."},
      {k:"geo",t:"Dãy Andes là dãy núi trên đất liền dài nhất thế giới, kéo dài khoảng 7.000 km dọc Nam Mỹ.",e:"The Andes are the world's longest continental mountain range, stretching about 7,000 km along South America."},
      {k:"geo",t:"Istanbul là thành phố lớn nằm trên hai châu lục, châu Âu và châu Á.",e:"Istanbul is a major city spanning two continents, Europe and Asia."},
      {k:"geo",t:"Bolivia có hai thủ đô: La Paz là nơi đặt chính phủ, còn Sucre là thủ đô theo hiến pháp.",e:"Bolivia has two capitals: La Paz seats the government, while Sucre is the constitutional capital."},
      {k:"geo",t:"Kinh tuyến gốc đi qua Greenwich (Anh) được chọn làm chuẩn quốc tế tại hội nghị năm 1884.",e:"The prime meridian through Greenwich, England, was set as the international standard at a conference in 1884."},
      {k:"geo",t:"Biển Sargasso là vùng biển duy nhất không có bờ đất liền bao quanh, mà được xác định bởi các dòng hải lưu.",e:"The Sargasso Sea is the only sea with no land boundary, defined instead by ocean currents."},
      {k:"geo",t:"Sông Amazon đổ ra Đại Tây Dương khoảng một phần năm lượng nước ngọt mà các con sông đưa vào đại dương.",e:"The Amazon discharges roughly a fifth of all the fresh water that rivers carry into the oceans."},
      {k:"geo",t:"Quần đảo Hawaii đang di chuyển chậm về phía tây bắc khoảng 7 đến 10 cm mỗi năm cùng mảng Thái Bình Dương.",e:"The Hawaiian islands drift northwest about 7 to 10 cm a year with the Pacific plate."},
      {k:"geo",t:"Hẻm vực Grand Canyon ở Mỹ dài khoảng 446 km và sâu hơn 1.800 mét.",e:"The Grand Canyon in the US is about 446 km long and over 1,800 meters deep."},
      {k:"geo",t:"Nhiệt độ cao nhất từng được ghi nhận chính thức là 56,7 độ C ở Thung lũng Chết (Mỹ) vào năm 1913.",e:"The highest officially recorded air temperature is 56.7 degrees Celsius, at Death Valley in the US in 1913."},
      {k:"geo",t:"Đường đổi ngày quốc tế cắt qua Thái Bình Dương, và Kiribati đã dời đường này để cả quốc gia dùng chung một ngày.",e:"The International Date Line runs through the Pacific, and Kiribati shifted it so the whole country shares one day."},
      {k:"geo",t:"Dòng sông Nile và sông Amazon thường được tranh luận xem sông nào dài nhất, tuỳ cách đo nguồn và cửa sông.",e:"People debate whether the Nile or the Amazon is the longest river, depending on how source and mouth are measured."},
      {k:"geo",t:"Thành phố Lhasa (Tây Tạng) nằm ở độ cao hơn 3.600 mét, thuộc nhóm thủ phủ cao nhất thế giới.",e:"Lhasa in Tibet sits at over 3,600 meters, among the highest major cities in the world."},
      {k:"history",t:"Núi lửa Vesuvius phun trào năm 79 sau Công nguyên và chôn vùi thành phố Pompeii dưới tro bụi.",e:"Mount Vesuvius erupted in AD 79 and buried the city of Pompeii under ash."},
      {k:"history",t:"Đế chế La Mã Tây phương sụp đổ năm 476 sau Công nguyên.",e:"The Western Roman Empire fell in AD 476."},
      {k:"history",t:"Đại dịch Cái chết đen ở thế kỷ 14 được cho là đã giết chết một phần ba hoặc hơn dân số châu Âu.",e:"The 14th-century Black Death is thought to have killed a third or more of Europe's population."},
      {k:"history",t:"Ferdinand Magellan mất ở Philippines, nhưng đoàn thám hiểm của ông là đoàn đầu tiên hoàn tất chuyến đi vòng quanh thế giới vào năm 1522.",e:"Ferdinand Magellan died in the Philippines, but his expedition completed the first circumnavigation of the globe in 1522."},
      {k:"history",t:"Machu Picchu được người Inca xây dựng vào thế kỷ 15 trên đỉnh núi ở Peru.",e:"Machu Picchu was built by the Inca in the 15th century on a mountain ridge in Peru."},
      {k:"history",t:"Vasco da Gama đến Ấn Độ bằng đường biển vào năm 1498, mở ra tuyến đường trực tiếp từ châu Âu.",e:"Vasco da Gama reached India by sea in 1498, opening a direct route from Europe."},
      {k:"history",t:"Nhà vua Ashoka của Ấn Độ cổ đại, sau những cuộc chiến đẫm máu, đã theo Phật giáo và cổ vũ hoà bình.",e:"After bloody wars, India's ancient emperor Ashoka embraced Buddhism and promoted peace."},
      {k:"history",t:"Chữ ký trên Tuyên ngôn Độc lập Mỹ được thực hiện chủ yếu vào tháng 8 năm 1776, còn văn kiện được thông qua ngày 4 tháng 7 năm 1776.",e:"The US Declaration of Independence was adopted on 4 July 1776, though most delegates signed it in August."},
      {k:"history",t:"Đế quốc Ottoman chiếm Constantinople năm 1453, đánh dấu sự kết thúc của Đế quốc Byzantine.",e:"The Ottomans captured Constantinople in 1453, ending the Byzantine Empire."},
      {k:"space",t:"Vết Đỏ Lớn trên sao Mộc là một cơn bão khổng lồ đã được quan sát từ hơn một thế kỷ nay.",e:"Jupiter's Great Red Spot is a giant storm that has been observed for well over a century."},
      {k:"space",t:"Bức ảnh đầu tiên chụp một lỗ đen, ở trung tâm thiên hà M87, được công bố năm 2019.",e:"The first image of a black hole, at the center of galaxy M87, was published in 2019."},
      {k:"space",t:"Vũ trụ có tuổi khoảng 13,8 tỷ năm.",e:"The universe is about 13.8 billion years old."},
      {k:"space",t:"Sao chổi Halley quay lại gần Trái Đất sau mỗi khoảng 76 năm, và lần tới là vào năm 2061.",e:"Halley's Comet returns about every 76 years, next in 2061."},
      {k:"space",t:"Mặt trăng Titan của sao Thổ có khí quyển dày và những hồ chứa metan lỏng.",e:"Saturn's moon Titan has a thick atmosphere and lakes of liquid methane."},
      {k:"space",t:"Mặt trăng Europa của sao Mộc được cho là có đại dương nước lỏng nằm dưới lớp băng.",e:"Jupiter's moon Europa is thought to hide an ocean of liquid water beneath its ice."},
      {k:"space",t:"Trong chân không của vũ trụ không có âm thanh vì không có môi trường để sóng âm truyền đi.",e:"There is no sound in the vacuum of space because there is no medium to carry sound waves."},
      {k:"space",t:"Hoạt động của Mặt Trời tăng giảm theo một chu kỳ khoảng 11 năm.",e:"The Sun's activity rises and falls in a cycle of about 11 years."},
      {k:"space",t:"Ceres, hành tinh lùn lớn nhất trong vành đai tiểu hành tinh, được phát hiện năm 1801.",e:"Ceres, the largest dwarf planet in the asteroid belt, was discovered in 1801."},
      {k:"space",t:"Ánh sáng từ những thiên hà xa xôi mà ta thấy hôm nay đã đi hàng tỷ năm, nên nhìn vào vũ trụ cũng là nhìn về quá khứ.",e:"Light from distant galaxies has traveled for billions of years, so looking into space is looking into the past."},
      {k:"nature",t:"Dơi là loài thú duy nhất có thể bay thật sự bằng đôi cánh.",e:"Bats are the only mammals capable of true, sustained flight."},
      {k:"nature",t:"Chim ruồi có thể bay lùi, và đập cánh hàng chục lần mỗi giây.",e:"Hummingbirds can fly backwards and beat their wings dozens of times per second."},
      {k:"nature",t:"Nhạn biển Bắc Cực di cư gần như từ cực này sang cực kia, bay khoảng 70.000 km mỗi năm.",e:"The Arctic tern migrates almost pole to pole, flying about 70,000 km a year."},
      {k:"nature",t:"Cây sequoia Hyperion ở California cao khoảng 115 mét, thuộc loại cây cao nhất thế giới.",e:"The Hyperion redwood in California is about 115 meters tall, among the tallest trees in the world."},
      {k:"nature",t:"Một số loài tre có thể mọc cao tới gần một mét trong một ngày.",e:"Some bamboo species can grow nearly a meter in a single day."},
      {k:"nature",t:"Con rùa Jonathan ở đảo St Helena sinh khoảng năm 1832 và được xem là động vật trên cạn già nhất còn sống.",e:"Jonathan the tortoise on St Helena, hatched around 1832, is considered the oldest living land animal."},
      {k:"nature",t:"Ếch gỗ Bắc Mỹ có thể bị đóng băng gần như hoàn toàn qua mùa đông rồi sống lại khi trời ấm.",e:"The North American wood frog can freeze nearly solid over winter and thaw back to life in spring."},
      {k:"nature",t:"Cá voi lưng gù đực hát những bài dài và phức tạp, và các bài này thay đổi theo thời gian trong cả quần thể.",e:"Male humpback whales sing long, complex songs that evolve over time across a whole population."},
      {k:"nature",t:"Cây Pando ở Utah (Mỹ) là một cụm cây dương run cùng dòng gen, nối chung một hệ rễ và thường được coi là một sinh vật khổng lồ.",e:"Pando in Utah is a cluster of genetically identical quaking aspens sharing one root system, often seen as a single giant organism."},
      {k:"nature",t:"Tơ nhện cùng khối lượng có thể bền hơn thép, mà vẫn co giãn được.",e:"Spider silk can be stronger than steel by weight while remaining stretchy."},
      {k:"nature",t:"Cá hồi sinh ra ở sông, ra biển sống nhiều năm rồi quay về đúng dòng sông cũ để đẻ trứng.",e:"Salmon are born in rivers, spend years at sea, then return to the same river to spawn."},
      {k:"nature",t:"Cây xương rồng saguaro mọc chậm và có thể sống 150 đến 200 năm.",e:"The saguaro cactus grows slowly and can live 150 to 200 years."},
      {k:"nature",t:"Các loài côn trùng đã được mô tả vượt quá một triệu loài, nhiều hơn mọi nhóm động vật khác cộng lại.",e:"More than a million insect species have been described, more than all other animal groups combined."},
      {k:"nature",t:"Voi châu Phi là động vật có vú trên cạn lớn nhất, có thể nặng trên sáu tấn.",e:"The African elephant is the largest land mammal and can weigh over six tonnes."},
      {k:"nature",t:"Tê tê (pangolin) thuộc nhóm thú bị buôn lậu nhiều nhất thế giới và là loài thú duy nhất có vảy sừng phủ kín người.",e:"Pangolins are among the most trafficked mammals in the world and the only mammals covered in true scales."},
      {k:"nature",t:"Ong mật vỗ cánh khoảng 200 lần mỗi giây, tạo ra tiếng vo ve quen thuộc.",e:"Honeybees beat their wings about 200 times a second, producing their familiar buzz."},
      {k:"nature",t:"Sứa Turritopsis dohrnii có thể quay ngược lại giai đoạn ấu trùng khi gặp stress, nên thường được gọi là \"sứa bất tử\".",e:"The jellyfish Turritopsis dohrnii can revert to an earlier larval stage under stress, which is why it is called \"immortal\"."},
      {k:"nature",t:"Chó có khứu giác nhạy hơn con người rất nhiều lần, nên được huấn luyện để tìm chất cấm, người mất tích và cả một số bệnh.",e:"Dogs have a far keener sense of smell than humans, so they are trained to find contraband, missing people and even some diseases."},
      {k:"nature",t:"Cá heo ngủ bằng cách cho từng nửa não nghỉ luân phiên, nên chúng vẫn bơi và thở được khi ngủ.",e:"Dolphins sleep by resting one half of the brain at a time, so they can keep swimming and breathing."},
      {k:"body",t:"Gan là một trong số ít cơ quan có khả năng tự tái tạo sau khi bị cắt bỏ một phần.",e:"The liver is one of the few organs that can regenerate after part of it is removed."},
      {k:"body",t:"Men răng là mô cứng nhất trong cơ thể người.",e:"Tooth enamel is the hardest tissue in the human body."},
      {k:"body",t:"Xương đùi là xương dài nhất của cơ thể, còn xương bàn đạp trong tai là xương nhỏ nhất.",e:"The thigh bone is the body's longest bone, and the stapes in the ear is the smallest."},
      {k:"body",t:"Não người có khoảng 86 tỷ nơ-ron.",e:"The human brain has about 86 billion neurons."},
      {k:"body",t:"Hai quả thận lọc khoảng 150 đến 180 lít máu mỗi ngày.",e:"The two kidneys filter roughly 150 to 180 liters of blood a day."},
      {k:"body",t:"Con người cảm nhận được năm vị cơ bản: ngọt, mặn, chua, đắng và umami.",e:"Humans detect five basic tastes: sweet, salty, sour, bitter and umami."},
      {k:"body",t:"Mạng lưới mạch máu trong cơ thể người lớn dài gần 100.000 km nếu nối thẳng ra.",e:"An adult's blood vessels would stretch nearly 100,000 km laid end to end."},
      {k:"body",t:"Diện tích bề mặt trao đổi khí của hai lá phổi có thể lên tới khoảng 70 mét vuông.",e:"The gas-exchange surface of the two lungs can reach roughly 70 square meters."},
      {k:"body",t:"Dạ dày tiết axit đủ mạnh để tiêu hóa thức ăn, và lớp niêm mạc của nó được thay mới liên tục để không bị tổn thương.",e:"The stomach makes acid strong enough to digest food, and its lining is constantly renewed to protect itself."},
      {k:"body",t:"Bộ xương người trưởng thành được làm mới dần, gần như thay hết sau khoảng 10 năm.",e:"The adult skeleton is gradually remodeled, with most of it replaced about every 10 years."},
      {k:"body",t:"Cơ thể mỗi người chứa hàng nghìn tỷ vi khuẩn, phần lớn sống trong ruột và có vai trò hỗ trợ tiêu hoá cũng như miễn dịch.",e:"Each body hosts trillions of bacteria, mostly in the gut, helping with digestion and immunity."},
      {k:"body",t:"Phản xạ của con người với một tín hiệu nhìn thấy thường mất khoảng một phần tư giây.",e:"Human reaction time to a visual signal is typically around a quarter of a second."},
      {k:"body",t:"Nhiệt độ cơ thể trung bình của người khỏe mạnh vào khoảng 36,5 đến 37 độ C.",e:"Average body temperature in a healthy person is around 36.5 to 37 degrees Celsius."},
      {k:"body",t:"Cơ nhai ở hàm là một trong những cơ khỏe nhất của cơ thể so với kích thước của nó.",e:"The masseter in the jaw is one of the strongest muscles in the body for its size."},
      {k:"body",t:"Một người trưởng thành có khoảng 5 lít máu.",e:"An adult has about 5 liters of blood."},
      {k:"body",t:"Tai trong chứa cơ quan tiền đình, giúp ta giữ thăng bằng chứ không chỉ để nghe.",e:"The inner ear holds the vestibular system, which helps with balance as well as hearing."},
      {k:"tech",t:"iPhone đầu tiên ra mắt năm 2007.",e:"The first iPhone launched in 2007."},
      {k:"tech",t:"Google được hai sinh viên Larry Page và Sergey Brin lập ra năm 1998.",e:"Google was founded in 1998 by students Larry Page and Sergey Brin."},
      {k:"tech",t:"Một byte gồm 8 bit.",e:"One byte consists of 8 bits."},
      {k:"tech",t:"Linus Torvalds công bố nhân Linux lần đầu vào năm 1991.",e:"Linus Torvalds first released the Linux kernel in 1991."},
      {k:"tech",t:"Phần lớn lưu lượng internet giữa các châu lục đi qua cáp quang đặt dưới đáy biển chứ không phải qua vệ tinh.",e:"Most intercontinental internet traffic travels through undersea fiber-optic cables, not satellites."},
      {k:"tech",t:"Định luật Moore, nêu năm 1965, dự đoán số bóng bán dẫn trên một con chip sẽ tăng gấp đôi sau mỗi vài năm.",e:"Moore's law, stated in 1965, predicted that the number of transistors on a chip would double every couple of years."},
      {k:"tech",t:"Thời gian trong hệ thống Unix được tính từ ngày 1 tháng 1 năm 1970.",e:"Unix time counts seconds from 1 January 1970."},
      {k:"tech",t:"Máy tính ENIAC hoàn thành năm 1945 và chiếm cả một căn phòng lớn.",e:"The ENIAC computer was completed in 1945 and filled an entire large room."},
      {k:"tech",t:"ChatGPT ra mắt công chúng vào ngày 30 tháng 11 năm 2022.",e:"ChatGPT was released to the public on 30 November 2022."},
      {k:"tech",t:"Hệ thống GPS do Mỹ vận hành, và máy thu cần nhận tín hiệu từ ít nhất bốn vệ tinh để xác định vị trí ba chiều.",e:"The US-run GPS needs signals from at least four satellites to fix a three-dimensional position."},
      {k:"tech",t:"Larry Tesler, làm việc ở Xerox PARC, là người gắn liền với việc phát triển các thao tác cắt, sao chép và dán.",e:"Larry Tesler, working at Xerox PARC, is associated with developing cut, copy and paste."},
      {k:"tech",t:"Lỗi năm 2038 sẽ xảy ra với các hệ thống 32 bit lưu giờ Unix, vì số giây sẽ vượt giới hạn vào ngày 19 tháng 1 năm 2038.",e:"The Year 2038 problem affects 32-bit systems storing Unix time, which will overflow on 19 January 2038."},
      {k:"tech",t:"Microsoft được thành lập năm 1975 và Apple năm 1976.",e:"Microsoft was founded in 1975 and Apple in 1976."},
      {k:"vn",t:"Việt Nam có 54 dân tộc anh em, trong đó người Kinh chiếm đa số.",e:"Vietnam has 54 ethnic groups, with the Kinh forming the majority."},
      {k:"vn",t:"Phố cổ Hội An và Thánh địa Mỹ Sơn đều được UNESCO công nhận là Di sản Thế giới năm 1999.",e:"Hội An Ancient Town and the Mỹ Sơn Sanctuary were both inscribed as UNESCO World Heritage Sites in 1999."},
      {k:"vn",t:"Thành nhà Hồ ở Thanh Hóa được UNESCO công nhận là Di sản Thế giới năm 2011.",e:"The Citadel of the Hồ Dynasty in Thanh Hóa was inscribed as a UNESCO World Heritage Site in 2011."},
      {k:"vn",t:"Quần thể danh thắng Tràng An ở Ninh Bình là di sản hỗn hợp văn hóa và thiên nhiên thế giới từ năm 2014.",e:"The Tràng An Landscape Complex in Ninh Bình became a mixed cultural and natural World Heritage Site in 2014."},
      {k:"vn",t:"Nhã nhạc cung đình Huế được UNESCO ghi danh là kiệt tác di sản phi vật thể năm 2003.",e:"Huế royal court music, Nhã nhạc, was recognized by UNESCO as an intangible heritage masterpiece in 2003."},
      {k:"vn",t:"Phú Quốc là đảo lớn nhất của Việt Nam.",e:"Phú Quốc is Vietnam's largest island."},
      {k:"vn",t:"Vườn quốc gia Cúc Phương, thành lập năm 1962, là vườn quốc gia đầu tiên của Việt Nam.",e:"Cúc Phương, established in 1962, is Vietnam's first national park."},
      {k:"vn",t:"Tuyến đường sắt Bắc - Nam dài khoảng 1.700 km, nối Hà Nội với Thành phố Hồ Chí Minh.",e:"The North-South railway runs about 1,700 km, linking Hanoi with Ho Chi Minh City."},
      {k:"vn",t:"Cầu Long Biên ở Hà Nội do người Pháp xây dựng, khánh thành năm 1902.",e:"Long Biên Bridge in Hanoi was built by the French and opened in 1902."},
      {k:"vn",t:"Sông Mê Kông đổ ra biển qua nhiều cửa ở đồng bằng sông Cửu Long, nên được gọi là sông \"Cửu Long\" (chín con rồng).",e:"The Mekong reaches the sea through many mouths in the delta, which is why it is called the \"Nine Dragons\" river."},
      {k:"vn",t:"Chợ nổi Cái Răng ở Cần Thơ là một trong những chợ nổi nổi tiếng nhất vùng đồng bằng sông Cửu Long.",e:"Cái Răng floating market in Cần Thơ is among the best-known in the Mekong Delta."},
      {k:"vn",t:"Núi Bà Đen ở Tây Ninh cao khoảng 986 mét, là ngọn núi cao nhất Nam Bộ.",e:"Bà Đen Mountain in Tây Ninh is about 986 meters high, the tallest peak in southern Vietnam."},
      {k:"vn",t:"Chiến thắng Bạch Đằng năm 938 của Ngô Quyền chấm dứt hơn nghìn năm Bắc thuộc.",e:"Ngô Quyền's victory at Bạch Đằng in 938 ended over a thousand years of Chinese rule."},
      {k:"vn",t:"Hát Xoan ở Phú Thọ được UNESCO đưa vào danh sách di sản cần bảo vệ khẩn cấp năm 2011 và chuyển sang danh sách đại diện năm 2017.",e:"Xoan singing in Phú Thọ was placed on UNESCO's urgent safeguarding list in 2011 and moved to the representative list in 2017."},
      {k:"vn",t:"Tết Nguyên đán của Việt Nam tính theo âm lịch, nên ngày dương lịch của Tết thay đổi mỗi năm.",e:"Vietnam's Tết follows the lunar calendar, so its date on the solar calendar changes every year."},
      {k:"history",t:"Đấu trường Colosseum ở Rome hoàn thành năm 80 sau Công nguyên và có sức chứa khoảng 50.000 khán giả.",e:"The Colosseum in Rome was completed in AD 80 and could hold around 50,000 spectators."},
      {k:"history",t:"Alexander Đại đế mất năm 323 trước Công nguyên khi mới 32 tuổi, sau khi chinh phục một đế quốc trải dài từ Hy Lạp đến Ấn Độ.",e:"Alexander the Great died in 323 BC aged just 32, after conquering an empire stretching from Greece to India."},
      {k:"history",t:"Julius Caesar bị ám sát vào ngày 15 tháng 3 năm 44 trước Công nguyên, ngày mà người La Mã gọi là Ides of March.",e:"Julius Caesar was assassinated on 15 March 44 BC, the day the Romans called the Ides of March."},
      {k:"history",t:"Bộ luật Hammurabi của Babylon, khắc trên bia đá khoảng năm 1754 trước Công nguyên, là một trong những bộ luật thành văn sớm nhất.",e:"The Code of Hammurabi of Babylon, carved on stone around 1754 BC, is one of the earliest written law codes."},
      {k:"history",t:"Con đường Tơ lụa là mạng lưới thương mại nối Trung Quốc với châu Âu từ khoảng thế kỷ 2 trước Công nguyên, chuyển đi cả hàng hóa lẫn tôn giáo và ý tưởng.",e:"The Silk Road, a trade network linking China with Europe from around the 2nd century BC, carried goods, religions and ideas."},
      {k:"history",t:"Giấy, la bàn, thuốc súng và kỹ thuật in thường được gọi là \"tứ đại phát minh\" của Trung Quốc cổ đại.",e:"Paper, the compass, gunpowder and printing are often called the Four Great Inventions of ancient China."},
      {k:"history",t:"Thế chiến thứ nhất bùng nổ năm 1914, sau vụ ám sát Thái tử Franz Ferdinand của Áo ở Sarajevo.",e:"World War I broke out in 1914 after the assassination of Archduke Franz Ferdinand of Austria in Sarajevo."},
      {k:"history",t:"Hiệp ước Versailles, ký năm 1919, chính thức kết thúc Thế chiến thứ nhất với nước Đức.",e:"The Treaty of Versailles, signed in 1919, formally ended World War I with Germany."},
      {k:"history",t:"Vụ tấn công Trân Châu Cảng ngày 7 tháng 12 năm 1941 đưa nước Mỹ vào Thế chiến thứ hai.",e:"The attack on Pearl Harbor on 7 December 1941 brought the United States into World War II."},
      {k:"history",t:"Vụ phun trào núi lửa Krakatoa năm 1883 gây ra tiếng nổ nghe được ở nơi cách xa hàng nghìn km.",e:"The 1883 eruption of Krakatoa produced a bang heard thousands of kilometers away."},
      {k:"history",t:"Núi lửa Tambora phun trào năm 1815 khiến năm 1816 được gọi là \"năm không có mùa hè\" ở châu Âu và Bắc Mỹ.",e:"Mount Tambora's 1815 eruption led to 1816 being called the \"year without a summer\" in Europe and North America."},
      {k:"history",t:"Người Viking dưới sự dẫn dắt của Leif Erikson đã đặt chân tới Bắc Mỹ khoảng năm 1000, sớm hơn Columbus nhiều thế kỷ.",e:"Vikings led by Leif Erikson reached North America around the year 1000, centuries before Columbus."},
      {k:"history",t:"Đế chế Inca không có chữ viết theo kiểu thông thường mà dùng quipu, những sợi dây thắt nút, để ghi chép.",e:"The Inca Empire had no conventional writing and used quipu, knotted cords, to keep records."},
      {k:"history",t:"Cuộc khủng hoảng tên lửa Cuba năm 1962 kéo dài 13 ngày và đưa thế giới đến gần chiến tranh hạt nhân.",e:"The Cuban Missile Crisis of 1962 lasted 13 days and brought the world close to nuclear war."},
      {k:"history",t:"Liên Xô chính thức tan rã vào cuối năm 1991.",e:"The Soviet Union formally dissolved at the end of 1991."},
      {k:"history",t:"Nelson Mandela được trả tự do năm 1990 sau 27 năm bị giam, và trở thành tổng thống Nam Phi năm 1994.",e:"Nelson Mandela was freed in 1990 after 27 years in prison and became South Africa's president in 1994."},
      {k:"history",t:"Cuộc Hành trình muối của Gandhi năm 1930 là một cuộc đi bộ phản đối thuế muối của thực dân Anh, dài khoảng 380 km.",e:"Gandhi's 1930 Salt March was a roughly 380 km walk protesting the British salt tax."},
      {k:"history",t:"Thời kỳ Phục hưng bắt đầu ở Ý vào khoảng thế kỷ 14 và lan ra khắp châu Âu.",e:"The Renaissance began in Italy around the 14th century and spread across Europe."},
      {k:"history",t:"Khởi nghĩa Hai Bà Trưng nổ ra năm 40 sau Công nguyên.",e:"The Trưng Sisters' uprising broke out in AD 40."},
      {k:"history",t:"Vua Quang Trung đại phá quân Thanh vào đầu năm 1789 trong trận Ngọc Hồi - Đống Đa.",e:"Emperor Quang Trung routed the Qing army in early 1789 at the Battle of Ngọc Hồi - Đống Đa."},
      {k:"history",t:"82 bia tiến sĩ ở Văn Miếu - Quốc Tử Giám được UNESCO công nhận là Di sản Tư liệu Thế giới năm 2010.",e:"The 82 doctoral stelae at the Temple of Literature were recognized by UNESCO as Memory of the World documentary heritage in 2010."},
      {k:"lang",t:"Tiếng Basque, nói ở vùng biên giới Tây Ban Nha và Pháp, không có quan hệ họ hàng với bất kỳ ngôn ngữ nào khác còn được biết đến.",e:"Basque, spoken on the Spanish-French border, has no known relatives among other living languages."},
      {k:"lang",t:"Tiếng Hebrew gần như chỉ còn dùng trong tôn giáo trước khi được hồi sinh thành ngôn ngữ nói hằng ngày vào thế kỷ 19 và 20, với vai trò lớn của Eliezer Ben-Yehuda.",e:"Hebrew was mostly liturgical before being revived as an everyday spoken language in the 19th and 20th centuries, with a major role played by Eliezer Ben-Yehuda."},
      {k:"lang",t:"Từ \"ketchup\" có thể bắt nguồn từ một từ trong tiếng Mân Nam (Trung Quốc) chỉ nước sốt cá lên men.",e:"The word \"ketchup\" may come from a Hokkien Chinese word for a fermented fish sauce."},
      {k:"lang",t:"\"Tsunami\" trong tiếng Nhật nghĩa là \"sóng ở bến cảng\".",e:"\"Tsunami\" is Japanese for \"harbor wave\"."},
      {k:"lang",t:"\"Karaoke\" trong tiếng Nhật ghép từ \"kara\" (trống không) và \"oke\", viết tắt của \"orchestra\" (dàn nhạc).",e:"\"Karaoke\" in Japanese combines \"kara\" (empty) and \"oke\", short for \"orchestra\"."},
      {k:"lang",t:"Từ \"algorithm\" (thuật toán) bắt nguồn từ tên nhà toán học Ba Tư al-Khwarizmi ở thế kỷ 9.",e:"The word \"algorithm\" comes from the name of the 9th-century Persian mathematician al-Khwarizmi."},
      {k:"lang",t:"Từ \"algebra\" (đại số) bắt nguồn từ chữ \"al-jabr\" trong tiếng Ả Rập.",e:"The word \"algebra\" comes from the Arabic \"al-jabr\"."},
      {k:"lang",t:"Tiếng Klingon trong loạt phim Star Trek là ngôn ngữ nhân tạo, có từ điển và cả người học.",e:"Klingon from Star Trek is a constructed language with a dictionary and real learners."},
      {k:"lang",t:"Một phần lớn từ vựng tiếng Việt, thường được ước tính khoảng 60%, có gốc Hán (từ Hán Việt).",e:"A large share of Vietnamese vocabulary, often estimated around 60%, has Chinese roots (Sino-Vietnamese words)."},
      {k:"lang",t:"Từ \"alphabet\" xuất phát từ tên hai chữ cái đầu tiên của tiếng Hy Lạp là alpha và beta.",e:"The word \"alphabet\" comes from the first two Greek letters, alpha and beta."},
      {k:"lang",t:"Trong tiếng Quan thoại, âm \"ma\" có thể mang nghĩa khác nhau tùy theo bốn thanh điệu, ví dụ \"mẹ\" và \"ngựa\".",e:"In Mandarin the syllable \"ma\" changes meaning with its four tones, for example \"mother\" and \"horse\"."},
      {k:"lang",t:"Từ \"pajamas\" trong tiếng Anh bắt nguồn từ một từ trong tiếng Hindi/Urdu chỉ loại quần rộng.",e:"The English word \"pajamas\" comes from a Hindi/Urdu word for loose trousers."},
      {k:"space",t:"Mặt Trời cách Trái Đất trung bình khoảng 150 triệu km, khoảng cách này được gọi là một đơn vị thiên văn.",e:"The Sun is on average about 150 million km from Earth, a distance called one astronomical unit."},
      {k:"space",t:"Nhiệt độ ở lõi Mặt Trời vào khoảng 15 triệu độ C.",e:"The temperature at the Sun's core is around 15 million degrees Celsius."},
      {k:"space",t:"Hẻm vực Valles Marineris trên sao Hỏa dài khoảng 4.000 km.",e:"Valles Marineris on Mars stretches about 4,000 km."},
      {k:"space",t:"Theo giả thuyết va chạm khổng lồ, Mặt Trăng hình thành khi một vật thể cỡ sao Hỏa va vào Trái Đất sơ khai.",e:"According to the giant-impact hypothesis, the Moon formed when a Mars-sized body struck the early Earth."},
      {k:"space",t:"Bức ảnh \"Chấm xanh nhạt\" do Voyager 1 chụp năm 1990 cho thấy Trái Đất chỉ là một điểm sáng nhỏ xíu.",e:"The \"Pale Blue Dot\" photo, taken by Voyager 1 in 1990, shows Earth as a tiny speck of light."},
      {k:"space",t:"Valeri Polyakov giữ kỷ lục ở liên tục trong không gian dài nhất, khoảng 437 ngày trên trạm Mir.",e:"Valeri Polyakov holds the record for the longest single spaceflight, about 437 days aboard Mir."},
      {k:"space",t:"Tiểu hành tinh va xuống bán đảo Yucatán khoảng 66 triệu năm trước (Chicxulub) được cho là nguyên nhân chính gây ra tuyệt chủng của loài khủng long không biết bay.",e:"The asteroid that hit the Yucatán about 66 million years ago (Chicxulub) is thought to have caused the extinction of the non-avian dinosaurs."},
      {k:"space",t:"'Oumuamua, phát hiện năm 2017, là vật thể liên sao đầu tiên được ghi nhận đi qua Hệ Mặt Trời.",e:"'Oumuamua, found in 2017, was the first interstellar object observed passing through the Solar System."},
      {k:"space",t:"Áp suất khí quyển ở bề mặt sao Kim cao gấp khoảng 90 lần so với Trái Đất.",e:"Atmospheric pressure at Venus's surface is about 90 times that of Earth."},
      {k:"space",t:"Chương trình Apollo đã đưa tổng cộng 12 người đi bộ trên Mặt Trăng.",e:"The Apollo program put a total of 12 people on the surface of the Moon."},
      {k:"space",t:"Jocelyn Bell phát hiện sao xung (pulsar) đầu tiên vào năm 1967.",e:"Jocelyn Bell discovered the first pulsar in 1967."},
      {k:"space",t:"Bức xạ nền vi sóng vũ trụ, \"ánh sáng còn lại\" của Vụ Nổ Lớn, được phát hiện tình cờ vào năm 1965.",e:"The cosmic microwave background, the afterglow of the Big Bang, was discovered by accident in 1965."},
      {k:"space",t:"Trực thăng Ingenuity năm 2021 thực hiện chuyến bay có động cơ đầu tiên trên một hành tinh khác.",e:"In 2021 the Ingenuity helicopter made the first powered flight on another planet."},
      {k:"space",t:"Sao Hải Vương được phát hiện năm 1846 nhờ tính toán toán học trước khi được nhìn thấy qua kính viễn vọng.",e:"Neptune was found in 1846 through mathematical prediction before being seen in a telescope."},
      {k:"space",t:"Cơn bão Mặt Trời Carrington năm 1859 gây nhiễu loạn điện báo trên diện rộng và tạo cực quang thấy được ở xa xích đạo.",e:"The 1859 Carrington solar storm disrupted telegraph systems and produced auroras seen far from the poles."},
      {k:"tech",t:"Bóng bán dẫn (transistor) được phát minh tại Bell Labs năm 1947.",e:"The transistor was invented at Bell Labs in 1947."},
      {k:"tech",t:"Dennis Ritchie tạo ra ngôn ngữ lập trình C vào đầu thập niên 1970 tại Bell Labs.",e:"Dennis Ritchie created the C programming language in the early 1970s at Bell Labs."},
      {k:"tech",t:"Linus Torvalds cũng là người viết ra Git, hệ thống quản lý phiên bản, vào năm 2005.",e:"Linus Torvalds also wrote Git, the version-control system, in 2005."},
      {k:"tech",t:"Phép thử Turing do Alan Turing đề xuất năm 1950 để xem máy móc có thể bắt chước hội thoại của người đến mức nào.",e:"The Turing test, proposed by Alan Turing in 1950, asks how well a machine can imitate human conversation."},
      {k:"tech",t:"Ngày 1 tháng 1 năm 1983 là \"ngày chuyển đổi\" khi ARPANET chuyển sang dùng giao thức TCP/IP, nền tảng của internet ngày nay.",e:"On 1 January 1983 ARPANET switched to TCP/IP, the foundation of today's internet."},
      {k:"tech",t:"Biểu tượng \"lưu\" hình đĩa mềm xuất phát từ đĩa mềm 3,5 inch, thứ từng lưu được khoảng 1,44 MB.",e:"The floppy-disk \"save\" icon comes from the 3.5-inch disk, which held about 1.44 MB."},
      {k:"tech",t:"Tweet ban đầu giới hạn 140 ký tự, một phần vì tin nhắn SMS khi đó bị giới hạn khoảng 160 ký tự.",e:"Tweets were originally limited to 140 characters partly because SMS messages were capped at around 160."},
      {k:"tech",t:"Hashtag trên mạng xã hội được Chris Messina đề xuất vào năm 2007.",e:"The social media hashtag was proposed by Chris Messina in 2007."},
      {k:"tech",t:"Thuật toán PageRank, nền tảng của Google thuở đầu, xếp hạng trang web dựa trên số và chất lượng liên kết trỏ tới nó.",e:"PageRank, the algorithm behind early Google, ranks web pages by the number and quality of links pointing to them."},
      {k:"tech",t:"Amazon được Jeff Bezos thành lập năm 1994 và ban đầu chỉ bán sách.",e:"Amazon was founded by Jeff Bezos in 1994 and initially sold only books."},
      {k:"tech",t:"Máy tính Raspberry Pi, nhỏ cỡ một tấm thẻ, ra mắt năm 2012 với giá khoảng 35 đô la.",e:"The credit-card-sized Raspberry Pi computer launched in 2012 at around 35 dollars."},
      {k:"tech",t:"Máy tính lượng tử dùng qubit, có thể ở trạng thái chồng chập của 0 và 1, thay vì bit thông thường.",e:"Quantum computers use qubits, which can be in a superposition of 0 and 1, instead of ordinary bits."},
      {k:"game",t:"Angry Birds do công ty Rovio của Phần Lan phát hành năm 2009.",e:"Angry Birds was released in 2009 by Finland's Rovio."},
      {k:"game",t:"Dungeons & Dragons ra mắt năm 1974 và đặt nền móng cho nhiều game nhập vai sau này.",e:"Dungeons & Dragons debuted in 1974 and laid the groundwork for many later role-playing games."},
      {k:"game",t:"Roblox ra mắt năm 2006 và cho phép người chơi tự tạo các trò chơi cho nhau chơi.",e:"Roblox launched in 2006 and lets players build games for each other to play."},
      {k:"game",t:"Tamagotchi, thú nuôi ảo của hãng Bandai, ra mắt ở Nhật năm 1996.",e:"Bandai's Tamagotchi virtual pet launched in Japan in 1996."},
      {k:"game",t:"Trò Uno xuất hiện năm 1971 do một thợ cắt tóc ở Ohio phát minh.",e:"The card game Uno appeared in 1971, invented by a barber in Ohio."},
      {k:"game",t:"Giải The International của Dota 2 năm 2021 có tổng giải thưởng hơn 40 triệu đô la, cao nhất lịch sử esports.",e:"The International 2021 for Dota 2 had a prize pool of over 40 million dollars, the largest in esports history."},
      {k:"game",t:"Cờ vây có lịch sử hơn 2.500 năm, bắt nguồn từ Trung Quốc.",e:"Go has a history of more than 2,500 years, originating in China."},
      {k:"food",t:"Thang Scoville đo độ cay của ớt do dược sĩ Wilbur Scoville đề ra năm 1912.",e:"The Scoville scale for chili heat was devised by pharmacist Wilbur Scoville in 1912."},
      {k:"food",t:"Với một số người, rau mùi có vị như xà phòng, điều này liên quan đến yếu tố di truyền.",e:"To some people cilantro tastes like soap, a trait linked to genetics."},
      {k:"food",t:"Phần lớn người trưởng thành trên thế giới không dung nạp lactose hoàn toàn, tức khó tiêu hóa sữa.",e:"Most adults worldwide cannot fully digest lactose, the sugar in milk."},
      {k:"food",t:"Cà phê arabica chiếm khoảng 60% sản lượng cà phê thế giới, phần còn lại chủ yếu là robusta.",e:"Arabica makes up about 60% of the world's coffee, with most of the rest being robusta."},
      {k:"food",t:"Ớt chuông đỏ, vàng và xanh thực ra cùng một loại cây, chỉ khác độ chín.",e:"Red, yellow and green bell peppers come from the same plant, differing mostly in ripeness."},
      {k:"food",t:"Cây táo thuộc họ Hoa hồng.",e:"The apple tree belongs to the rose family."},
      {k:"food",t:"Hầu hết chuối Cavendish bán trên thị trường đều là bản sao vô tính của nhau, nên rất dễ bị cùng một loại bệnh tấn công.",e:"Nearly all Cavendish bananas are clones of each other, which leaves them vulnerable to the same diseases."},
      {k:"food",t:"Cà phê chồn (kopi luwak) làm từ hạt cà phê đã qua đường tiêu hóa của cầy vòi hương.",e:"Kopi luwak is made from coffee beans that have passed through the digestive tract of civets."},
      {k:"food",t:"Giống ớt Carolina Reaper từng giữ kỷ lục cay nhất thế giới, với hơn 1,6 triệu đơn vị Scoville.",e:"The Carolina Reaper chili once held the record as the hottest in the world, at over 1.6 million Scoville units."},
      {k:"food",t:"Gạo ST25 của Việt Nam từng được vinh danh là \"gạo ngon nhất thế giới\" vào năm 2019.",e:"Vietnam's ST25 rice was named the \"world's best rice\" in 2019."},
      {k:"food",t:"Năm 2016, Tổng thống Obama và đầu bếp Anthony Bourdain từng dùng bún chả ở Hà Nội, khiến món ăn này nổi tiếng toàn cầu.",e:"In 2016 President Obama and chef Anthony Bourdain shared bún chả in Hanoi, making the dish famous worldwide."},
      {k:"food",t:"Phở có hai kiểu nổi tiếng là phở Bắc thanh đạm và phở Nam ăn kèm nhiều rau thơm.",e:"Phở has two well-known styles: the plainer northern kind and the southern kind served with lots of herbs."},
      {k:"math",t:"Số nguyên tố sinh đôi là hai số nguyên tố cách nhau 2, như 11 và 13, và đến nay chưa ai biết có vô hạn cặp như vậy hay không.",e:"Twin primes are primes that differ by 2, like 11 and 13, and nobody knows whether there are infinitely many pairs."},
      {k:"math",t:"Hằng số e, xấp xỉ 2,71828, xuất hiện trong bài toán lãi kép và là cơ số của logarit tự nhiên.",e:"The constant e, about 2.71828, appears in compound interest and is the base of natural logarithms."},
      {k:"math",t:"Giả thuyết Collatz: lấy bất kỳ số nguyên dương nào, nếu chẵn thì chia 2, nếu lẻ thì nhân 3 cộng 1; ai cũng đoán sẽ về 1 nhưng chưa ai chứng minh được.",e:"The Collatz conjecture: take any positive integer, halve it if even, or triple it and add 1 if odd; it is believed to always reach 1, but nobody has proved it."},
      {k:"math",t:"Bài toán Tháp Hà Nội với n đĩa cần ít nhất 2 mũ n trừ 1 lần di chuyển.",e:"The Tower of Hanoi puzzle with n disks needs at least 2 to the power n minus 1 moves."},
      {k:"math",t:"Tấm đất sét Babylon Plimpton 322 chứa các bộ ba số Pythagoras, cổ hơn Pythagoras hơn một nghìn năm.",e:"The Babylonian clay tablet Plimpton 322 lists Pythagorean triples, over a thousand years before Pythagoras."},
      {k:"math",t:"Archimedes ước lượng số pi nằm giữa khoảng 3,1408 và 3,1429 bằng cách dùng các đa giác 96 cạnh.",e:"Archimedes estimated pi to lie between about 3.1408 and 3.1429 using 96-sided polygons."},
      {k:"math",t:"Khách sạn Hilbert là thí nghiệm tưởng tượng: một khách sạn có vô hạn phòng đã kín khách vẫn xếp được thêm khách mới.",e:"Hilbert's hotel is a thought experiment: a hotel with infinitely many rooms, all full, can still fit new guests."},
      {k:"math",t:"Phép chia cho 0 không có nghĩa trong toán học thông thường.",e:"Division by zero is undefined in ordinary mathematics."},
      {k:"nature",t:"Một cây nấm Armillaria ở Oregon (Mỹ) trải rộng hơn 9 km² dưới đất, thuộc loại sinh vật lớn nhất thế giới.",e:"An Armillaria fungus in Oregon spreads over more than 9 square kilometers underground, among the largest organisms on Earth."},
      {k:"nature",t:"Kiến lửa có thể liên kết thân mình thành bè nổi để sống sót khi lũ về.",e:"Fire ants can link their bodies into floating rafts to survive floods."},
      {k:"nature",t:"Lươn điện có thể tạo ra điện áp hơn 800 vôn.",e:"An electric eel can generate over 800 volts."},
      {k:"nature",t:"Rùa biển thường quay lại đúng bãi biển nơi chúng nở ra để đẻ trứng.",e:"Sea turtles often return to the very beach where they hatched to lay their eggs."},
      {k:"nature",t:"Mắt của mực khổng lồ có thể rộng tới khoảng 27 cm, thuộc loại lớn nhất trong giới động vật.",e:"The giant squid's eye can reach about 27 cm across, among the largest in the animal kingdom."},
      {k:"nature",t:"Cá voi mõm khoằm Cuvier từng được ghi nhận lặn sâu gần 3.000 mét, sâu nhất trong các loài thú có vú.",e:"Cuvier's beaked whale has been recorded diving nearly 3,000 meters, the deepest of any mammal."},
      {k:"nature",t:"Các loài chim ngày nay là hậu duệ của một nhóm khủng long có chân thú.",e:"Today's birds are descendants of a group of theropod dinosaurs."},
      {k:"nature",t:"Cây trinh nữ (Mimosa pudica) cụp lá lại khi bị chạm vào.",e:"The sensitive plant Mimosa pudica folds its leaves when touched."},
      {k:"nature",t:"Cây bắt ruồi Venus chỉ khép bẫy khi con mồi chạm vào lông cảm biến hai lần trong khoảng 20 giây.",e:"A Venus flytrap snaps shut only when prey touches its trigger hairs twice within about 20 seconds."},
      {k:"nature",t:"Cá sấu nước mặn có lực cắn mạnh nhất trong các loài còn sống đã được đo.",e:"The saltwater crocodile has the strongest bite force of any living animal measured."},
      {k:"nature",t:"Quạ và vẹt thuộc nhóm chim thông minh nhất, có thể dùng công cụ và giải các bài toán khá phức tạp.",e:"Crows and parrots rank among the smartest birds, able to use tools and solve fairly complex puzzles."},
      {k:"nature",t:"Chim cú mèo có lông cánh mềm đặc biệt giúp bay gần như không phát ra tiếng động.",e:"Owls have specially soft feathers that let them fly almost silently."},
      {k:"body",t:"Nhóm máu ABO được Karl Landsteiner phát hiện vào năm 1901.",e:"The ABO blood groups were discovered by Karl Landsteiner in 1901."},
      {k:"body",t:"Buổi sáng ta cao hơn buổi tối khoảng một centimét vì các đĩa đệm cột sống giãn ra khi nằm ngủ.",e:"You are about a centimeter taller in the morning because spinal discs expand while you sleep."},
      {k:"body",t:"Tim có hệ thống điện riêng, bắt đầu từ nút xoang nhĩ, tạo nhịp cho mỗi nhịp đập.",e:"The heart has its own electrical system, starting at the sinoatrial node, which sets each beat."},
      {k:"body",t:"Da tạo ra vitamin D khi tiếp xúc với tia cực tím trong ánh nắng.",e:"Skin makes vitamin D when exposed to ultraviolet rays in sunlight."},
      {k:"body",t:"Tổng diện tích da của một người trưởng thành vào khoảng 1,5 đến 2 mét vuông.",e:"An adult's total skin surface is roughly 1.5 to 2 square meters."},
      {k:"body",t:"Xung thần kinh có thể truyền với tốc độ lên tới khoảng 120 mét mỗi giây.",e:"Nerve impulses can travel at speeds up to about 120 meters per second."},
      {k:"body",t:"Phổi trái nhỏ hơn phổi phải một chút để nhường chỗ cho tim.",e:"The left lung is slightly smaller than the right to make room for the heart."},
      {k:"body",t:"Lớp ngoài của da (biểu bì) được thay mới hoàn toàn khoảng mỗi bốn tuần.",e:"The outer layer of skin, the epidermis, is renewed roughly every four weeks."},
      {k:"body",t:"Võng mạc có tế bào que giúp nhìn khi thiếu sáng và tế bào nón giúp phân biệt màu sắc.",e:"The retina has rods for seeing in dim light and cones for telling colors apart."},
      {k:"body",t:"Tim người có bốn ngăn: hai tâm nhĩ và hai tâm thất.",e:"The human heart has four chambers: two atria and two ventricles."},
      {k:"vn",t:"Chùa Thiên Mụ ở Huế được chúa Nguyễn Hoàng cho xây năm 1601.",e:"Thiên Mụ Pagoda in Huế was built in 1601 under Lord Nguyễn Hoàng."},
      {k:"vn",t:"Hệ thống địa đạo Củ Chi gồm hàng trăm km đường hầm ngầm, từng là căn cứ trong chiến tranh.",e:"The Củ Chi tunnel network covers hundreds of kilometers of underground passages that served as a base during the war."},
      {k:"vn",t:"Hầm đường bộ Hải Vân dài khoảng 6,3 km, nối Huế và Đà Nẵng, thuộc loại dài nhất Đông Nam Á.",e:"The Hải Vân road tunnel is about 6.3 km long, linking Huế and Đà Nẵng, among the longest in Southeast Asia."},
      {k:"vn",t:"Năm 2010, Hà Nội kỷ niệm 1.000 năm Thăng Long - Hà Nội.",e:"In 2010 Hanoi celebrated 1,000 years of Thăng Long - Hà Nội."},
      {k:"vn",t:"Chợ Bến Thành ở Thành phố Hồ Chí Minh được khánh thành năm 1914.",e:"Bến Thành Market in Ho Chi Minh City opened in 1914."},
      {k:"vn",t:"Cầu Rồng ở Đà Nẵng, khánh thành năm 2013, có thể phun lửa và phun nước vào cuối tuần.",e:"The Dragon Bridge in Đà Nẵng, opened in 2013, can breathe fire and water on weekends."},
      {k:"vn",t:"Đèo Mã Pí Lèng ở Hà Giang là một trong \"tứ đại đỉnh đèo\" của vùng Đông Bắc.",e:"The Mã Pí Lèng Pass in Hà Giang is one of the \"four great passes\" of the northeast."},
      {k:"vn",t:"Thác Bản Giốc ở Cao Bằng nằm trên biên giới Việt - Trung và là một trong những thác xuyên quốc gia lớn nhất thế giới.",e:"Bản Giốc Falls in Cao Bằng straddles the Vietnam-China border and is among the largest transnational waterfalls in the world."},
      {k:"vn",t:"Làng gốm Bát Tràng ở ngoại thành Hà Nội nổi tiếng với nghề gốm truyền thống lâu đời.",e:"Bát Tràng village outside Hanoi is famed for its long-standing pottery tradition."},
      {k:"vn",t:"Nhà thờ Đức Bà ở Sài Gòn được xây từ năm 1863 đến 1880, với gạch đỏ nhập từ Marseille (Pháp).",e:"Saigon's Notre-Dame Cathedral was built between 1863 and 1880 with red bricks imported from Marseille, France."},
      {k:"music",t:"Đàn bầu của Việt Nam chỉ có một dây nhưng tạo ra được âm thanh rất nhiều sắc thái nhờ cần đàn mềm và kỹ thuật bồi âm.",e:"Vietnam's đàn bầu has just one string, yet produces many subtle tones through its flexible rod and harmonics."},
      {k:"music",t:"Đàn t'rưng là nhạc cụ làm từ ống nứa của các dân tộc Tây Nguyên.",e:"The t'rưng is a bamboo-tube instrument of the Central Highlands peoples."},
      {k:"music",t:"Album \"Thriller\" của Michael Jackson (1982) thường được coi là album bán chạy nhất mọi thời đại.",e:"Michael Jackson's \"Thriller\" (1982) is often cited as the best-selling album of all time."},
      {k:"music",t:"Bản \"As Slow As Possible\" của John Cage đang được trình diễn ở một nhà thờ ở Halberstadt (Đức) trong khoảng 639 năm, bắt đầu từ năm 2001.",e:"John Cage's \"As Slow As Possible\" is being performed in a church in Halberstadt, Germany, over about 639 years, starting in 2001."},
      {k:"music",t:"Bài \"Dynamite\" của BTS đứng đầu bảng xếp hạng Billboard Hot 100 năm 2020, lần đầu một nhóm nhạc Hàn Quốc làm được điều này.",e:"BTS's \"Dynamite\" topped the Billboard Hot 100 in 2020, a first for a South Korean group."},
      {k:"sport",t:"Larisa Latynina, vận động viên thể dục dụng cụ Liên Xô, giành tổng cộng 18 huy chương Olympic, kỷ lục tồn tại gần nửa thế kỷ.",e:"Soviet gymnast Larisa Latynina won 18 Olympic medals in total, a record that stood for nearly half a century."},
      {k:"sport",t:"Rafael Nadal giành kỷ lục 14 danh hiệu đơn nam Roland Garros.",e:"Rafael Nadal won a record 14 men's singles titles at Roland Garros."},
      {k:"sport",t:"Lionel Messi giữ kỷ lục 8 Quả bóng vàng, danh hiệu cá nhân cao quý nhất của làng bóng đá, tính đến năm 2023.",e:"Lionel Messi holds the record with 8 Ballon d'Or awards, football's top individual honor, as of 2023."},
      {k:"sport",t:"Marathon Boston được tổ chức từ năm 1897, là một trong những cuộc chạy marathon lâu đời nhất thế giới.",e:"The Boston Marathon has been held since 1897, among the oldest marathons in the world."},
      {k:"history",t:"Tượng Nhân sư ở Giza dài khoảng 73 mét và cao khoảng 20 mét, được tạc từ chính nền đá vôi tại chỗ.",e:"The Great Sphinx of Giza is about 73 meters long and 20 meters high, carved from the bedrock at the site."},
      {k:"science",t:"Nước biển trung bình chứa khoảng 3,5% muối.",e:"Seawater contains about 3.5% salt on average."},
      {k:"geo",t:"Núi Kilimanjaro ở Tanzania cao khoảng 5.895 mét, là đỉnh núi cao nhất châu Phi.",e:"Mount Kilimanjaro in Tanzania rises about 5,895 meters, the highest peak in Africa."},
      {k:"culture",t:"Nhà hát Globe của Shakespeare ở London mở cửa năm 1599, và bản dựng lại hiện đại của nó vẫn biểu diễn ngày nay.",e:"Shakespeare's Globe Theatre in London opened in 1599, and a modern reconstruction still stages plays today."},
      {k:"life",t:"Người thuận tay trái chiếm khoảng 10% dân số thế giới.",e:"Left-handed people make up about 10% of the world's population."},
      {k:"food",t:"Một con gà mái đẻ trứng có thể cho khoảng 250 quả mỗi năm.",e:"A laying hen can produce roughly 250 eggs a year."},
      {k:"tech",t:"Bletchley Park ở Anh là nơi nhóm của Alan Turing giải mã máy mật mã Enigma của Đức trong Thế chiến thứ hai.",e:"Bletchley Park in England is where Alan Turing's team broke Germany's Enigma cipher during World War II."},
      {k:"space",t:"Sao Mộc có hơn 90 mặt trăng đã được xác nhận.",e:"Jupiter has more than 90 confirmed moons."},
      {k:"geo",t:"Lưu vực sông Nile trải qua 11 quốc gia ở châu Phi.",e:"The Nile basin spans 11 countries in Africa."},
      {k:"culture",t:"Songkran, Tết cổ truyền của Thái Lan vào giữa tháng 4, nổi tiếng với tục té nước vào nhau.",e:"Songkran, Thailand's traditional new year in mid-April, is famous for people splashing water on each other."},
      {k:"space",t:"Mặt trăng Io của sao Mộc là thiên thể có nhiều núi lửa hoạt động nhất Hệ Mặt Trời.",e:"Jupiter's moon Io is the most volcanically active body in the Solar System."}
    ];
    var FFC={space:['Vũ trụ','Space'],nature:['Thiên nhiên','Nature'],body:['Cơ thể','Body'],tech:['Công nghệ','Tech'],vn:['Việt Nam','Vietnam'],life:['Đời sống','Life'],history:['Lịch sử','History'],science:['Khoa học','Science'],food:['Ẩm thực','Food'],geo:['Địa lý','Geography'],math:['Toán học','Math'],lang:['Ngôn ngữ','Language'],game:['Game','Games'],music:['Âm nhạc','Music'],sport:['Thể thao','Sports'],culture:['Văn hoá','Culture']};
    var ffs=document.getElementById('ffs'),ffCat='all',ffView=false,ffCur=null,ffSeen={},ffOpen={};
    FUNFACTS.forEach(function(f,i){f.i=i});
    try{ffSeen=JSON.parse(localStorage.getItem('ffseen')||'{}')||{}}catch(e){ffSeen={}}
    function ffSave(){try{localStorage.setItem('ffseen',JSON.stringify(ffSeen))}catch(e){}}
    function ffEsc(s){return String(s).replace(/[<>&]/g,function(c){return{'<':'&lt;','>':'&gt;','&':'&amp;'}[c]})}
    function ffIn(f){return ffCat==='all'||f.k===ffCat}
    function ffPool(){return FUNFACTS.filter(function(f){return ffIn(f)&&!ffSeen[f.i]})}
    function ffTxt(f,en){return ffEsc(en&&f.e?f.e:f.t)}
    function ffRender(){
      if(!ffs)return;var en=(typeof LANG!=='undefined'&&LANG==='en'),pool=ffPool(),seen=FUNFACTS.filter(function(f){return ffIn(f)&&ffSeen[f.i]}),cats=['all'].concat(Object.keys(FFC)),h='';
      h+='<div class="ffchips" role="group" aria-label="'+(en?'Category':'Danh mục')+'">'+cats.map(function(c){
        var n=FUNFACTS.filter(function(f){return (c==='all'||f.k===c)&&!ffSeen[f.i]}).length;
        return '<button type="button" class="ffchip'+(c===ffCat?' on':'')+'" data-c="'+c+'" aria-pressed="'+(c===ffCat)+'">'+(c==='all'?(en?'All':'Tất cả'):FFC[c][en?1:0])+' <small>'+n+'</small></button>'}).join('')+'</div>';
      var cur=ffCur!=null?FUNFACTS[ffCur]:null;
      h+='<div class="ffshow" aria-live="polite">';
      if(cur)h+='<small>'+(FFC[cur.k]||FFC.life)[en?1:0]+'</small><p>'+ffTxt(cur,en)+'</p>';
      else if(!pool.length)h+='<p class="mut">'+(en?'You have seen every fact in this category.':'Bạn đã xem hết sự thật ở danh mục này rồi.')+'</p><button type="button" class="btn line" id="ffreset">'+(en?'Start over':'Xem lại từ đầu')+'</button>';
      else h+='<p class="mut">'+(en?'Press the button to see a fun fact.':'Bấm nút bên dưới để xem một sự thật thú vị.')+'</p>';
      h+='</div>';
      h+='<div class="ffbar">'+(pool.length?'<button type="button" class="btn" id="ffrnd">'+(en?'Random fact':'Sự thật ngẫu nhiên')+'</button>':'<button type="button" class="btn" id="ffreset">'+(en?'Start over':'Xem lại từ đầu')+'</button>')+'<button type="button" class="btn line" id="ffview" aria-expanded="'+ffView+'">'+(en?'Review facts':'Xem lại sự thật thú vị')+' ('+seen.length+')</button><span class="cnt">'+pool.length+' '+(en?'left':'chưa xem')+'</span></div>';
      if(ffView)h+=seen.length?'<div class="ffgs">'+Object.keys(FFC).map(function(k){
        var g=seen.filter(function(f){return f.k===k});if(!g.length)return '';var o=!!ffOpen[k];
        return '<div class="ffg"><button type="button" class="ffgh" data-g="'+k+'" aria-expanded="'+o+'"><span class="ffgc" aria-hidden="true">›</span>'+FFC[k][en?1:0]+' <small>'+g.length+'</small></button>'+
          (o?'<ul class="ffrvl ffgl">'+g.map(function(f){return '<li><button type="button" class="ffrv" data-i="'+f.i+'">'+ffTxt(f,en)+'</button></li>'}).join('')+'</ul>':'')+'</div>'}).join('')+'</div>':'<p class="mut">'+(en?'No facts seen yet.':'Chưa có sự thật nào được xem.')+'</p>';
      ffs.innerHTML=h;
    }
    if(ffs)ffs.addEventListener('click',function(e){
      var t=e.target,q=function(s){return t.closest&&t.closest(s)},x;
      if((x=q('.ffchip'))){ffCat=x.getAttribute('data-c');ffCur=null;ffRender();return}
      if(q('#ffrnd')){var p=ffPool();if(!p.length){ffRender();return}var f=p[Math.floor(Math.random()*p.length)];ffSeen[f.i]=1;ffCur=f.i;ffSave();ffRender();
        var sh=ffs.querySelector('.ffshow');if(sh&&sh.scrollIntoView)sh.scrollIntoView({block:'nearest',behavior:(typeof calm!=='undefined'&&calm)?'auto':'smooth'});return}
      if(q('#ffview')){ffView=!ffView;ffRender();return}
      if((x=q('.ffgh'))){var g=x.getAttribute('data-g');ffOpen[g]=!ffOpen[g];ffRender();return}
      if(q('#ffreset')){FUNFACTS.forEach(function(f){if(ffIn(f))delete ffSeen[f.i]});ffCur=null;ffSave();ffRender();return}
      if((x=q('.ffrv'))){ffCur=+x.getAttribute('data-i');ffRender();var s2=ffs.querySelector('.ffshow');if(s2&&s2.scrollIntoView)s2.scrollIntoView({block:'nearest'})}
    });
    ffRender();document.addEventListener('langchange',ffRender);
    /* danh hiệu xoay vòng dưới tên */
    var TT=[['Game thủ kiêm dịch giả','Gamer and translator'],['Chúa tể thức khuya','Lord of late nights'],['Dịch giả không lương','Unpaid translator'],['Nhà sưu tầm game chưa chơi','Collector of unplayed games'],['Thợ việt hoá cần mẫn','Diligent localizer']],ti=0,tb=document.querySelector('.ptitle b');
    function tset(){if(tb)tb.textContent=TT[ti][(typeof LANG!=='undefined'&&LANG==='en')?1:0]}
    if(tb&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
      setInterval(function(){if(document.hidden||document.documentElement.getAttribute('data-motion')==='off')return;ti=(ti+1)%TT.length;tb.style.opacity=0;setTimeout(function(){tset();tb.style.opacity=''},250)},4000);
      tb.style.transition='opacity .25s';
    }
    document.addEventListener('langchange',tset);
    /* thống kê lượt xem thật: mặc định tắt, không gọi gì ra ngoài. Tôn trọng chế độ Do Not Track */
    function add(src,at){var t=document.createElement('script');t.async=true;t.src=src;for(var k in at)t.setAttribute(k,at[k]);document.head.appendChild(t)}
    if(location.protocol==='file:'||navigator.doNotTrack==='1')return;
    if(ME.goatcounter)add('https://gc.zgo.at/count.js',{'data-goatcounter':'https://'+ME.goatcounter+'.goatcounter.com/count'});
    if(ME.cfBeacon)add('https://static.cloudflareinsights.com/beacon.min.js',{'data-cf-beacon':JSON.stringify({token:ME.cfBeacon})});
  })();
  /* ===== bộ icon: thêm <i data-ic="tên"></i> ở bất cứ đâu là có icon ===== */
  var ICONS={
    gamepad:'<rect x="2.5" y="7" width="19" height="11" rx="5.5"/><path d="M7.5 10.5v4M5.5 12.5h4"/><path d="M15.5 11.5h.01M18 13.5h.01"/>',
    book:'<path class="pl" d="M12 6.5C10.5 5 8 4.5 4 4.5v13c4 0 6.5.5 8 2z"/><path class="pr" d="M12 6.5c1.5-1.5 4-2 8-2v13c-4 0-6.5.5-8 2z"/>',
    music:'<path d="M9 18V6l11-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
    film:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
    pulse:'<path d="M3 12h4l3-8 4 16 3-8h4"/>',
    translate:'<path d="M4 6h9M8.5 4v2M6 6c0 4 3 7 6.5 8M12 6c-.5 3-3 6.5-7 8"/><path d="M13 20l4-9 4 9M14.5 17h5"/>',
    heart:'<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
    hash:'<path d="M5 9h14M5 15h14M10 4L8 20M16 4l-2 16"/>',
    image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M21 16l-5-5-8 8"/>',
    terminal:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3"/><path class="cur" d="M12 15h5"/>',
    help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 1-1 1.7M12 17h.01"/>',
    send:'<path d="M21 3L10 14M21 3l-7 18-4-7-7-4z"/>',
    pin:'<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    crown:'<path d="M3 8l4 4 5-7 5 7 4-4-2 11H5z"/>',
    crosshair:'<circle cx="12" cy="12" r="8"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/>',
    flame:'<path d="M12 21c-4 0-6.5-2.8-6.5-6.2 0-3 2-4.8 3.2-6.6C9.7 6.6 10 5 10 3c3 1.5 6.5 5.2 6.5 9.5.8-.6 1.3-1.6 1.5-2.7 1.2 1.6 2 3.4 2 5C20 18.4 16.5 21 12 21z"/>',
    cube:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12L4 7.5M12 12v9"/>',
    sprout:'<path d="M12 21v-9"/><path d="M12 12c0-4-3-6-7-6 0 4 3 6 7 6z"/><path d="M12 14c0-3 2.5-5 6-5 0 3-2.5 5-6 5z"/>',
    calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    grid:'<rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/>',
    medal:'<circle cx="12" cy="9" r="5"/><path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5"/>',
    trophy:'<path d="M8 4h8v6a4 4 0 0 1-8 0z"/><path d="M8 6H4c0 3 1.5 4.5 4 5M16 6h4c0 3-1.5 4.5-4 5M12 14v4M8 20h8"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path class="h" d="M12 7v5l3 2"/>',
    id:'<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M5.5 16c.5-2 2-3 3.5-3s3 1 3.5 3M15 10h3M15 14h3"/>',
    chevrons:'<path d="M6 11l6-6 6 6M6 18l6-6 6 6"/>',
    compass:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    dice:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8.5 8.5h.01M15.5 8.5h.01M12 12h.01M8.5 15.5h.01M15.5 15.5h.01"/>',
    mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M9 21h6"/>',
    headphones:'<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
    disc:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/><path d="M12 3a9 9 0 0 1 9 9"/>',
    notes:'<path d="M9 17V6l9-2v11M9 10l9-2"/><circle cx="6.5" cy="17" r="2.5"/><circle cx="15.5" cy="15" r="2.5"/>',
    arrowdown:'<path d="M12 5v14M6 13l6 6 6-6"/>',
    link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    radio:'<circle cx="12" cy="12" r="2"/><path d="M16.2 7.8a6 6 0 0 1 0 8.4M7.8 16.2a6 6 0 0 1 0-8.4M19 5a10 10 0 0 1 0 14M5 19A10 10 0 0 1 5 5"/>',
    spotify:'<circle cx="12" cy="12" r="9"/><path d="M7 9.5c3.5-1 7-.7 10 1M7.5 12.8c3-.8 6-.5 8.5 1M8 16c2.3-.6 4.7-.4 6.7.7"/>',
    discord:'<path d="M7 6.5c1.6-.8 3-1.2 5-1.2s3.4.4 5 1.2c1.5 2.5 2.4 5.2 2.6 8.5-1.2 1-2.6 1.7-4.1 2.2l-.9-1.5c.5-.2 1-.4 1.4-.7-3 1.3-6 1.3-9 0 .4.3.9.5 1.4.7l-.9 1.5c-1.5-.5-2.9-1.2-4.1-2.2.2-3.3 1.1-6 2.6-8.5z"/><circle cx="9.3" cy="12" r="1"/><circle cx="14.7" cy="12" r="1"/>',
    steam:'<circle cx="12" cy="12" r="9"/><circle cx="14.6" cy="9.8" r="2.3"/><circle cx="9" cy="15" r="1.7"/><path d="M3.2 10.5l5.4 2.3"/>',
    tiktok:'<path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 4c.3 2.3 1.8 3.8 4.2 4"/>',
    github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
    facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    youtube:'<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z"/>',
    instagram:'<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17 7h.01"/>',
    opgg:'<path d="M12 3l7.5 3v5.5c0 4.5-3.2 8-7.5 9.5-4.3-1.5-7.5-5-7.5-9.5V6z"/><path d="M9 13l3-3 3 3"/>',
    mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>',
    moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
    x:'<path d="M4 4h4l12 16h-4z"/><path d="M4.5 20l6.8-7.2M19.5 4l-6.8 7.2"/>',
    mouse:'<rect x="6" y="3" width="12" height="18" rx="6"/><path d="M12 3v7M6 10h12"/>',
    keyboard:'<rect x="2.5" y="6" width="19" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>',
    zap:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    phone:'<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
    monitor:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    translate:'<path d="M4 5h9M8.5 3v2M6 5c.5 3 2.5 5.5 6 7M11 5c-.5 3-3 6-7 8"/><path d="M13 21l4-9 4 9M14.5 18h5"/>',
    user:'<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20c.8-4 3.7-6 7.5-6s6.7 2 7.5 6"/>',
    joystick:'<path d="M12 4v8"/><circle cx="12" cy="4.5" r="2"/><path d="M4 20v-2.5a2.5 2.5 0 0 1 2.5-2.5h11a2.5 2.5 0 0 1 2.5 2.5V20z"/><path d="M8 18h.01M16 18h.01"/>',
    notebook:'<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M9 3.5v17M12.5 8.5h3.5M12.5 12h3.5"/><path d="M3.5 7.5h3M3.5 12h3M3.5 16.5h3"/>',
    flag:'<path d="M5 21V4"/><path d="M5 4.5c4-2 6 2 10 0 1.7-.8 3-.8 4-.3v8.3c-1-.5-2.3-.5-4 .3-4 2-6-2-10 0"/>',
    cap:'<path d="M2.5 9.5L12 5l9.5 4.5L12 14z"/><path d="M6.5 11.5v4.5c1.5 1.5 3.3 2.2 5.5 2.2s4-.7 5.5-2.2v-4.5"/><path d="M21.5 9.5v5"/>',
    briefcase:'<rect x="3" y="7.5" width="18" height="12.5" rx="2.2"/><path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 13h18"/><path d="M11 13h2"/>',
    palm:'<path d="M12 21c0-5 .5-8 1.5-10.5"/><path d="M13.5 10.5C12 7 8.5 5.5 4.5 6.5c2.5.5 4 2 5 4"/><path d="M13.5 10.5C14 7 17 4.5 21 5c-2.5 1-4 2.5-4.5 5"/><path d="M13.5 10.5c-3-.5-5.5.5-7.5 3 2.5-.5 4.5 0 6 1.5"/><path d="M4 21h16"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.5 1.5M17.2 17.2l1.5 1.5M5.3 18.700l1.5-1.5M17.2 6.8l1.5-1.5"/>',
    sunrise:'<path d="M3 19h18"/><path d="M7 19a5 5 0 0 1 10 0"/><path d="M12 5v4M5.5 9.5l1.8 1.8M18.5 9.5l-1.8 1.8"/>',
    bed:'<path d="M3 19V6M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-7v6"/><circle cx="7" cy="11" r="1.8"/>',
    utensils:'<path d="M7 3v8M4.5 3v5a2.5 2.5 0 0 0 5 0V3M7 11v10"/><path d="M17 21V3c-2.5 1.5-3.5 4.5-3.5 8H17"/>',
    broom:'<path d="M14.5 3.5l5 5"/><path d="M13 5l6 6-5.5 5.5c-2 2-5 3-9 3 .5-4 1.5-7 3.5-9z"/><path d="M8 13.5l2.5 2.5M5.5 16l2 2"/>',
    sparkle:'<path d="M12 3c.8 4.5 2.5 6.2 7 7-4.5.8-6.2 2.5-7 7-.8-4.5-2.5-6.2-7-7 4.5-.8 6.2-2.5 7-7z"/><path d="M19 17v4M17 19h4"/>',
    code:'<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 5l-4 14"/>',
    chat:'<path d="M4 5h16v11H9l-4 4v-4H4z"/><path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01"/>',
    keycap:'<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M9 9l6 6M15 9l-6 6"/>',
    home:'<path d="M4 11l8-7 8 7"/><path d="M6 9.5V20h12V9.5M10 20v-5h4v5"/>',
    plug:'<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4"/>',
    bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.600 1-2.1A6 6 0 0 0 12 3z"/>',
    smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14c1 1.5 2.2 2.2 3.5 2.2s2.5-.7 3.5-2.2M9 9.5h.01M15 9.5h.01"/>',
    eye:'<path d="M2 12s3.600-7 10-7 10 7 10 7-3.600 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/>'
  };
  function icn(n){return ICONS[n]?'<svg class="ic2 '+n+'" viewBox="0 0 24 24" aria-hidden="true">'+ICONS[n]+'</svg>':''}
  document.querySelectorAll('[data-ic]').forEach(function(el){el.innerHTML=icn(el.getAttribute('data-ic'))});
  function thumb(x){
    return '<span class="th ph" data-i="">'+(x.ic?icn(x.ic):'')+(x.img?'<img decoding="async" src="'+esc(x.img)+'" alt="'+esc(x.t)+'"'+(x.fb?' data-f="'+esc(x.fb)+'"':'')+' loading="lazy" decoding="async" onerror="'+FBERR+'">':'')+'</span>';
  }
  function fillRows(id,k){
    var el=document.getElementById(id);if(!el)return;
    el.innerHTML=DATA[k].items.map(function(x,i){
      return '<li style="--n:'+i+'"><a href="#/'+k+'/'+esc(x.id)+'">'+(k==='game'?thumb(x):'')+'<span class="ix">'+('0'+(i+1)).slice(-2)+'</span><span class="nm">'+(x.ic&&k!=='game'?icn(x.ic):'')+esc(x.t)+'</span><span class="ds">'+esc(x.m)+(x.ver?' · '+esc(x.ver):'')+(x.up?' · '+T('cập nhật')+' '+fdate(x.up):'')+'</span>'+
        (x.p!=null?'<span class="pg" role="img" aria-label="'+T('tiến độ')+' '+x.p+'%"><i style="--v:'+x.p+'%"></i></span><em>'+x.p+'%</em>':'')+
        '<span class="st">'+esc(x.s||'')+'</span><span class="ar" aria-hidden="true">→</span></a></li>';
    }).join('');
  }
  fillRows('gamerows','game');fillRows('modrows','mod');
  document.querySelectorAll('[data-steam]').forEach(function(a){a.href=ME.steam});
  document.querySelectorAll('[data-opgg]').forEach(function(a){a.href=ME.opgg});
  var sn=document.getElementById('steamname');if(sn)sn.textContent=ME.steamName;
  var rb=document.getElementById('riot');if(rb){rb.textContent=ME.riot;rb.setAttribute('data-copy',ME.riot)}
  var ce=document.getElementById('champs');
  if(ce)ce.innerHTML=ME.champs.map(function(c){
    return '<figure class="champ"><div class="ph" data-i="'+esc(c.charAt(0))+'"><img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+encodeURIComponent(c)+'_0.jpg" alt="'+esc(c.replace(/([a-z])([A-Z])/g,'$1 $2'))+'" loading="lazy" decoding="async" onerror="this.remove()"></div><figcaption>'+esc(c.replace(/([a-z])([A-Z])/g,'$1 $2'))+'</figcaption></figure>';
  }).join('');
  /* ===== steam: đọc steam.json (do tools/steam-sync.mjs ghi). Không đọc được thì dùng số mẫu bên dưới ===== */
  var STEAMD=null;var STEAM_DEFAULT={updated:'2026-10-17T14:20:00Z',name:'ming',avatar:'https://avatars.akamai.steamstatic.com/7d8c1937b7bf439198974eae0be807f4ea8cc2ac_full.jpg',level:12,games:85,badges:7,achievements:6468,hours2w:179.7,recent:[{n:'ShareX',h:1518},{n:'Mini Cozy Room: Lo-Fi',h:42},{n:'Graveyard Keeper',h:0,id:599140}]};
  function fmtN(n,dec){return Number(n).toLocaleString(LOC(),{maximumFractionDigits:dec||0})}
  function ago(iso){
    var m=Math.round((Date.now()-new Date(iso))/6e4),en=LANG==='en';
    if(!(m>=0))return '';
    if(m<2)return T('Vừa cập nhật');
    if(m<60)return en?'Updated '+m+' min ago':'Cập nhật '+m+' phút trước';
    var h=Math.round(m/60);
    return h<48?(en?'Updated '+h+' h ago':'Cập nhật '+h+' giờ trước'):(en?'Updated '+Math.round(h/24)+' days ago':'Cập nhật '+Math.round(h/24)+' ngày trước');
  }
  function applySteam(d,still){
    var box=document.getElementById('steam');if(!box||!d)return;STEAMD=d;
    var nm=d.name||ME.steamName,e;
    ['steamname','steamn'].forEach(function(id){e=document.getElementById(id);if(e)e.textContent=nm});
    e=document.getElementById('steamav');if(e&&d.avatar)e.src=d.avatar;
    e=document.getElementById('steamsync');if(e&&d.updated)e.textContent=ago(d.updated);
    box.querySelectorAll('[data-sv]').forEach(function(el){
      var k=el.getAttribute('data-sv'),v=d[k];if(v==null)return;
      var dec=k==='hours2w'?1:0;
      el.setAttribute('data-v',v);el.setAttribute('data-dec',dec);
      el.textContent=(calm||still)?fmtN(v,dec):fmtN(0,dec);
    });
    var sg=document.getElementById('stgames');
    if(sg&&d.games!=null){sg.setAttribute('data-count',d.games);if(calm||sg.textContent!=='0')sg.textContent=fmt(d.games)}
    document.querySelectorAll('[data-pc]').forEach(function(el){var v=d[el.getAttribute('data-pc')];if(v!=null)el.textContent=fmtN(v,0)});
    var rl=document.getElementById('steamrecent');
    if(rl&&d.recent&&d.recent.length){
      rl.innerHTML=d.recent.filter(function(r){return ME.hideRecent.indexOf(r.n)<0}).slice(0,4).map(function(r){
        var u=r.id?'https://store.steampowered.com/app/'+r.id:'https://store.steampowered.com/search/?term='+encodeURIComponent(r.n);
        return '<li><a href="'+esc(u)+'" target="_blank" rel="noopener"><span>'+esc(r.n)+'</span><b>'+fmtN(r.h,0)+' '+T('giờ')+'</b></a></li>';
      }).join('');
    }
    if(!calm&&!still)once('#steam',.3,function(b){
      b.querySelectorAll('[data-sv][data-v]').forEach(function(el){
        var to=+el.getAttribute('data-v'),dec=+el.getAttribute('data-dec'),t0=performance.now();
        (function f(now){var k=Math.min(1,(now-t0)/1400),q=1-Math.pow(1-k,3);el.textContent=fmtN(to*q,dec);if(k<1)requestAnimationFrame(f)})(t0);
      });
    });
  }
  fetch('steam.json',{cache:'no-cache'}).then(function(r){return r.ok?r.json():Promise.reject()}).catch(function(){return STEAM_DEFAULT}).then(applySteam);
  /* ===== ngẫu nhiên: bấm icon xúc xắc ở góc phải dưới, chữ chạy ngang; bấm vào chữ để tới đúng chỗ.
     Sửa FACTS: t = câu hiện ra, h = chỗ sẽ tới (#now, #play, #mod, #steam, #lol, #idol, #intro, #/nhac, #/truyen...). Bỏ h nếu không muốn nhảy tới đâu ===== */
  var FACTS=[
    {t:"Ảnh ở trang này trắng đen, rê chuột vào mới lên màu.",h:"#photos"},
    {t:"Góc chơi có test bàn phím, test chuột, test tốc độ gõ chữ và combo.",h:"#lab"},
    {t:"Gõ / hoặc Ctrl + K để tìm nhanh trong trang.",h:"#hero"},
    {t:"Bấm phím T để đổi giao diện sáng hoặc tối.",h:"#hero"},
    {t:"Bấm phím M để tắt hoặc bật toàn bộ hiệu ứng của trang.",h:"#hero"},
    {t:"Bấm phím C để đổi màu trang.",h:"#hero"},
    {t:"Bấm phím H để về đầu trang thật nhanh.",h:"#hero"},
    {t:"Trang không bao giờ tự phát nhạc. Bấm phím P hoặc nút nhạc thì mới nghe.",h:"#hero"},
    {t:"Trang có thể đổi giữa tiếng Việt và tiếng Anh ngay trên thanh menu.",h:"#hero"},
    {t:"Các ô ở Nhật ký tự sáng lên mỗi ngày bạn ghé trang, không cần bấm gì cả.",h:"#log"},
    {t:"Ảnh ở mục Vài tấm ảnh xoay được theo bốn kiểu: Helix, Barrel, Ring và Sphere.",h:"#photos"},
    {t:"Trình phát nhạc nền của trang có cả lời bài hát.",h:"#hero"},
    {t:"Thẻ Discord ở mục Ngay lúc này có tab Hoạt động, hiện cả lịch sử hoạt động đã ghi lại.",h:"#live"},
    {t:"Mưa hoặc tuyết trên trang chạy theo thời tiết thật nơi tôi ở (mặc định tắt, bật ở mục Bản đồ).",h:"#hero"},
    {t:"Đồng hồ ở đầu trang chạy theo giờ thật ở chỗ tôi.",h:"#hero"},
    {t:"Bản đồ cuối trang chỉ hiện thành phố, không hiện địa chỉ cụ thể.",h:"#map"},
    {t:"Mục Nghệ sĩ cho bấm vào từng người để xem vì sao tôi thích và vài bài hát của họ.",h:"#idol"},
    {t:"Mục Playlist có những playlist tôi chia sẻ để bạn mở nghe luôn.",h:"#playlist"}
  ];
  window.__FACTS=FACTS;window.__T=(typeof T==='function')?T:null;
  Object.assign(EN,{"Bấm phím M để tắt hoặc bật toàn bộ hiệu ứng của trang.":"Press M to turn all of the page's effects off or on.", "Bấm phím H để về đầu trang thật nhanh.":"Press H to jump back to the top of the page.", "Trang không bao giờ tự phát nhạc. Bấm phím P hoặc nút nhạc thì mới nghe.":"The page never plays music by itself. Press P or the music button to listen.", "Bấm phím F để xem số khung hình mỗi giây của các hiệu ứng trên trang.":"Press F to see the frames per second of the page's effects.", "Trang có thể đổi giữa tiếng Việt và tiếng Anh ngay trên thanh menu.":"You can switch the page between Vietnamese and English from the menu bar.", "Các ô ở Nhật ký tự sáng lên mỗi ngày bạn ghé trang, không cần bấm gì cả.":"The squares in the Log light up on their own each day you visit, no clicking needed.", "Ảnh ở mục Vài tấm ảnh xoay được theo bốn kiểu: Helix, Barrel, Ring và Sphere.":"The photos can spin in four layouts: Helix, Barrel, Ring and Sphere.", "Khung ảnh 3D xoay chậm 0.25x theo mặc định, chỉnh được tới 3x.":"The 3D photo gallery spins at 0.25x by default, adjustable up to 3x.", "Trình phát nhạc nền của trang có cả lời bài hát.":"The page's music player shows song lyrics too.", "Thẻ Discord ở mục Ngay lúc này có tab Hoạt động, hiện cả lịch sử hoạt động đã ghi lại.":"The Discord card in Right now has an Activity tab that also shows the recorded activity history.", "Mưa hoặc tuyết trên trang chạy theo thời tiết thật nơi tôi ở (mặc định tắt, bật ở mục Bản đồ).":"Rain or snow on the page follows the real weather where I live (off by default, switch it on in the Map section).", "Đồng hồ ở đầu trang chạy theo giờ thật ở chỗ tôi.":"The clock at the top shows the real time where I am.", "Mấy con thú ASCII chạy quanh trang mặc định đang tắt, bấm nút hình dấu chân để gọi chúng ra.":"The ASCII animals that roam the page are off by default. Press the paw button to call them out.", "Chữ giải mã dần và ảnh vỡ thành khối pixel rồi gộp lại là hiệu ứng ASCII của trang.":"Text that decodes bit by bit and photos that break into pixel blocks and merge back are the page's ASCII effect.", "Hiệu ứng chỉ chạy khi phần đó đang nằm trên màn hình, rời đi là tạm dừng cho đỡ nóng máy.":"Effects only run while their part is on screen; they pause when you scroll away to save your device.", "Máy yếu hoặc bật chế độ giảm chuyển động thì trang tự tắt hiệu ứng.":"On weak devices or with reduced motion on, the page turns its effects off by itself.", "Bản đồ cuối trang chỉ hiện thành phố, không hiện địa chỉ cụ thể.":"The map at the bottom shows only the city, not a specific address.", "Mục Nghệ sĩ cho bấm vào từng người để xem vì sao tôi thích và vài bài hát của họ.":"In Artists, click each one to see why I like them and a few of their songs.", "Mục Playlist có những playlist tôi chia sẻ để bạn mở nghe luôn.":"The Playlist section has playlists I share so you can open and listen right away.", "Cả trang này nằm trong một file index.html dài hơn năm nghìn dòng.":"This whole page lives in a single index.html file of more than five thousand lines."});
  Object.assign(EN,{"Câu nói dối phổ biến nhất của game thủ: \"chỉ một trận nữa thôi\".": "The most common lie a gamer tells: \"just one more match\".", "Lag không bao giờ đến lúc đang đi dạo, nó chỉ đến đúng lúc giao tranh.": "Lag never shows up while you're just walking around, only in the middle of a fight.", "Thắng là nhờ kỹ năng, thua là do lag. Luật bất thành văn của game thủ.": "Winning is skill, losing is lag. The unwritten rule of every gamer.", "Game nào cũng vậy: nhặt đầy túi đồ rồi vẫn tiếc không dám bỏ món nào.": "Every game: your bag is full and you still can't bring yourself to drop anything.", "Cái hay của game nhập vai là được làm một người khác trong một buổi tối.": "The best thing about RPGs is getting to be someone else for an evening.", "Con boss nào cũng có quy luật, chỉ là mình chưa nhìn ra thôi.": "Every boss has a pattern, you just haven't spotted it yet.", "Nút \"bỏ qua cắt cảnh\" là phát minh vĩ đại, cho tới lúc cần hiểu cốt truyện.": "The \"skip cutscene\" button is a great invention, right up until you need to understand the plot.", "Dịch xong câu nào cũng thấy chưa ổn, còn câu ổn rồi thì chẳng ai để ý.": "Every line feels not quite right once translated, and the ones that are right go unnoticed.", "Dịch game là nghề lạ: làm tốt thì vô hình, làm dở thì cả server biết.": "Game translation is a strange job: done well it's invisible, done badly the whole server knows.", "Có từ tiếng Anh dịch ra nghe lạ hơn là để nguyên, và đó là lúc đau đầu nhất.": "Some English words sound stranger translated than left alone, and that's when the headache starts.", "Sai một dấu câu trong bản dịch cũng đủ làm cả đoạn thoại mất cảm xúc.": "One wrong punctuation mark in a translation can drain all the emotion from a scene.", "Người góp ý sửa bản dịch là người đọc kỹ nhất mà mình từng có.": "Whoever sends corrections for a translation is the most careful reader you'll ever have.", "Nhạc không lời là lựa chọn an toàn nhất khi cần tập trung.": "Music without lyrics is the safest pick when you need to focus.", "Bài nào nghe đi nghe lại cả tuần rồi cũng có ngày chán, rồi vài tháng sau lại nghiện.": "Any song on repeat for a week gets old, then months later you're hooked again.", "Có những bài chỉ cần nghe vài giây đầu là nhớ ra đúng một khoảng thời gian.": "Some songs only need a few seconds to bring back one exact stretch of time.", "Đọc truyện kiểu \"thêm một chương\" và xong là hai giờ sáng.": "Reading \"just one more chapter\" and suddenly it's two in the morning.", "Tập cuối của một bộ truyện hay luôn đến sớm hơn mình nghĩ.": "The last chapter of a good series always arrives sooner than you expect.", "Lỗi biến mất khi mở dev tools, rồi quay lại ngay khi đóng nó.": "The bug disappears when you open dev tools and comes back the moment you close them.", "Bấm F5 là cách sửa lỗi đầu tiên, và đôi khi cũng là cách cuối cùng.": "Pressing F5 is the first fix, and sometimes the last.", "Cả trang này nằm trong một file index.html, và nó đã dài hơn ba nghìn dòng.": "This whole page lives in a single index.html, and it's now over three thousand lines.", "Comment trong code là viết cho chính mình sáu tháng sau, người sẽ chẳng nhớ gì.": "Code comments are written for yourself six months from now, who will remember nothing.", "Việc nào làm xong rồi mới thấy dễ, trước đó ai cũng thấy khó.": "Everything feels easy once it's done, and hard before that.", "Đừng so bản nháp của mình với bản hoàn chỉnh của người khác.": "Don't compare your rough draft to someone else's finished version.", "Chậm nhưng không dừng thì vẫn là tiến độ.": "Slow but not stopping is still progress.", "Nghỉ một chút không phải lười, máy tính cũng cần khởi động lại.": "Taking a break isn't laziness, even computers need a restart.", "Nước, giấc ngủ và một bài nhạc hay: ba thứ sửa được hầu hết những hôm tệ.": "Water, sleep and a good song: three things that fix most bad days.", "Mục điểm danh ở Nhật ký đếm chuỗi ngày ghé trang của riêng bạn, lưu ngay trong trình duyệt.": "The check-in in the Log counts your own streak of visits, saved right in your browser."});
  Object.assign(EN,{"Bản dịch tốt là bản mà người chơi không nhận ra đó là bản dịch.": "A good translation is one the player never notices is a translation.", "Dịch một câu thoại sao cho nghe như người thật nói còn khó hơn dịch đúng nghĩa.": "Making a line sound like a real person said it is harder than translating it correctly.", "Dịch Stardew Valley là làm quen dần với từng người trong làng, mỗi người một giọng.": "Translating Stardew Valley means getting to know the villagers one by one, each with their own voice.", "Minecraft có những câu rất ngắn mà dịch mãi không ra, câu ngắn khó hơn câu dài.": "Minecraft has very short lines that are hard to translate. Short is harder than long.", "Việt hoá không cần hoàn hảo ngay, cứ chạy được rồi sửa dần.": "A localization does not have to be perfect on day one. Get it running, then fix it little by little.", "Lúc mệt thì chơi game, lúc rảnh thì dịch game, đúng một vòng lặp.": "Tired: play games. Free: translate games. A perfect loop.", "Một trận LoL dài hơn một tập phim, vậy mà vẫn bấm thêm trận nữa.": "A LoL match is longer than an episode, and I still queue one more.", "Vừa thua một trận LoL thì cách tốt nhất là tắt máy đi đọc truyện.": "Just lost a LoL match? The best move is to switch off and read a comic.", "Cây kỹ năng của Path of Exile 2 to tới mức ngắm nó cũng là một phần của trò chơi.": "The Path of Exile 2 skill tree is so big that staring at it is part of the game.", "Link hồ sơ LoL của tôi dùng PlayARAM thay vì OP.GG.": "My LoL profile link uses PlayARAM instead of OP.GG.", "Double click chuột là kẻ thù thầm lặng của mọi game thủ.": "A double-clicking mouse is every gamer's quiet enemy.", "Chuột và bàn phím xịn không làm bạn giỏi hơn, chỉ làm bạn bớt cớ.": "A fancy mouse and keyboard will not make you better, only leave you with fewer excuses.", "Câu hay nhất trong mọi trò chơi là \"đã lưu\".": "The best line in any game is \"game saved\".", "Có hai kiểu người: tắt nhạc để tập trung và bật nhạc để tập trung. Tôi thuộc kiểu thứ hai.": "There are two kinds of people: those who turn music off to focus and those who turn it on. I am the second kind.", "Playlist hay nhất là cái bật lên rồi quên mất mình đang nghe.": "The best playlist is the one you put on and forget you are listening to.", "Heal or broken heart là playlist cho lúc cần chữa lành hoặc đang tan vỡ, tuỳ hôm.": "Heal or broken heart is for when I need healing or am falling apart, depending on the day.", "Vietnam songs là playlist nhạc Việt tôi nghe nhiều nhất.": "Vietnam songs is the Vietnamese playlist I listen to the most.", "Đọc truyện, xem phim và chơi game đều là cách tôi nạp lại năng lượng.": "Reading, watching films and playing games are all how I recharge.", "Marvel hay DC? Tôi xem cả hai, không chọn phe.": "Marvel or DC? I watch both and pick no side.", "Discord của tôi là ming0811_, ghé nói chuyện cũng được.": "My Discord is ming0811_, feel free to drop by and talk.", "GitHub của tôi là nameisminh.": "My GitHub is nameisminh.", "PreMiD giúp Discord của tôi hiện đang xem gì trên YouTube.": "PreMiD lets my Discord show what I am watching on YouTube.", "Làm web: sửa một dòng, hỏng ba chỗ, sửa ba chỗ, hỏng thêm một dòng.": "Web work: fix one line, break three things, fix three things, break one more line.", "Làm trang web này giống dọn phòng: sửa mãi vẫn thấy còn chỗ chưa vừa ý.": "Building this site is like tidying a room: there is always one more spot that is not quite right.", "Trang này cố tình để tối, ít màu, ít chữ, giống cách tôi thích dọn bàn làm việc.": "This page is dark, with few colours and few words on purpose, like I like my desk."});
  (function(){
    var b=document.getElementById('rndb'),t=document.getElementById('rndt'),tx=document.getElementById('rndtx');
    if(!b||!t||!tx)return;
    var last=-1,cur=null;
    /* điện thoại/máy tính bảng không có bàn phím: bỏ qua mẹo "Bấm phím ..." / "Gõ / ..." */
    var noKb=matchMedia('(hover:none) and (pointer:coarse)');
    function kbTip(f){return noKb.matches&&/^(Bấm phím|Gõ \/)/.test(f.t)}
    function pick(){var i,g=0;do{i=Math.floor(Math.random()*FACTS.length);g++}while(((i===last&&FACTS.length>1)||kbTip(FACTS[i]))&&g<50);last=i;return FACTS[i]}
    /* mỗi lần bấm hiện ngay một câu mới, đứng yên để đọc */
    function show(){
      cur=pick();tx.textContent=T(cur.t);
      t.title=touch?T('Bấm để tắt'):(cur.h?T('Bấm để tới chỗ này'):'');
      t.hidden=false;b.setAttribute('aria-expanded','true');
    }
    function hide(){t.hidden=true;b.setAttribute('aria-expanded','false')}
    function goTo(h){
      if(!h)return;
      if(h.charAt(1)==='/'){location.hash=h;return}
      var el=document.getElementById(h.slice(1));
      if(location.hash===h){window.__openSec&&window.__openSec(h.slice(1));if(el)el.scrollIntoView({behavior:calm?'auto':'smooth'})}
      else location.hash=h;
    }
    /* TỰ CHẠY: cứ FACT_MS mili giây (4000 = 4 giây) hiện một câu mới. Rê chuột vào câu thì tạm đứng để đọc, bấm nút xúc xắc để dừng hoặc chạy tiếp.
       Máy bật chế độ giảm chuyển động thì không tự chạy, chỉ đổi câu khi bấm. */
    var FACT_MS=4000,timer=0,running=false,hov=false,touch=matchMedia('(hover:none)').matches;
    function pref(v){try{localStorage.setItem('rnd',v)}catch(e){}}
    function off(){try{return localStorage.getItem('rnd')==='0'}catch(e){return false}}
    function tick(){if(!document.hidden&&!hov)show()}
    function start(){running=true;b.setAttribute('aria-pressed','true');b.title=T('Tạm dừng (R)');show();clearInterval(timer);timer=setInterval(tick,FACT_MS)}
    function stop(){running=false;clearInterval(timer);b.setAttribute('aria-pressed','false');b.title=T('Chạy tiếp (R)')}
    b.addEventListener('click',function(){if(calm){show();return}if(running)stop();else{pref('1');start()}});
    t.addEventListener('pointerenter',function(){hov=true});
    t.addEventListener('pointerleave',function(){hov=false});
    /* điện thoại: bấm vào câu để TẮT hẳn (nhớ cho lần sau, bấm nút xúc xắc để bật lại). Máy tính: bấm để tới chỗ liên quan */
    var xb=document.createElement('span');xb.className='rndx';xb.setAttribute('aria-hidden','true');xb.textContent='\u00d7';xb.title=T('Tắt')+' (Esc)';t.appendChild(xb);
    t.addEventListener('click',function(e){var h=cur&&cur.h,onX=!!(e.target&&e.target.closest&&e.target.closest('.rndx'));stop();hide();if(touch||onX)pref('0');else goTo(h)});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!t.hidden){stop();hide();pref('0');b.focus()}});
    if(!calm&&!off()){if(document.readyState==='complete')setTimeout(start,2500);else addEventListener('load',function(){setTimeout(start,2500)})}
    document.addEventListener('langchange',function(){if(cur&&!t.hidden){tx.textContent=T(cur.t);t.title=touch?T('Bấm để tắt'):(cur.h?T('Bấm để tới chỗ này'):'')}});
  })();
  /* ===== nhạc nền: danh sách bài nằm ở file riêng music/tracks.js (không cần sửa trong này) =====
     Thêm nhạc: bỏ file .mp3 vào thư mục music/ rồi bấm đúp them-nhac.bat (hoặc kéo thả mp3 lên nó).
     Tool tự đọc tên bài, ca sĩ và ghi vào music/tracks.js. Xem thêm đầu file music/tracks.js.
     Nên dùng mp3 128 đến 192 kbps, mỗi file dưới khoảng 6 MB. Dùng nhạc bạn có quyền dùng.
     Trang KHÔNG tự phát nhạc: chỉ phát khi người xem bấm nút, và file chỉ tải khi bấm nghe. File nào thiếu thì tự bỏ qua. */
  var TRACKS=window.TRACKS||[];

  /* ===== thư viện ảnh 3D (Helix / Barrel / Ring / Sphere), dựng từ các ảnh của #gallery ===== */
  Object.assign(EN,{"Profile":"Profile","Số liệu":"Numbers","Sự thật ngẫu nhiên":"Random fact","Lật hết":"Flip all","Úp lại":"Hide all","Xem thêm sự thật":"More facts","Xem một sự thật ngẫu nhiên":"Show a random fact","Chọn danh mục rồi bấm nút để xem một sự thật. Sự thật đã xem sẽ không hiện lại, muốn xem lại thì bấm Xem lại.":"Pick a category and press the button for a fact. Seen facts will not repeat, press Review to see them again.","Tìm: game, nhạc, sự thật, bản đồ...":"Search: games, music, facts, map...","Về đầu trang":"Back to top"});
  Object.assign(EN,{"Sự thật":"Facts","Sự thật thú vị":"Fun facts","Vài điều về cuộc sống và về tôi. Bấm vào thẻ để lật.":"A few things about life and about me.","Mọt truyện":"Bookworm","Chiến thần LoL":"LoL legend","Nhà sưu tầm":"Collector","Dev tay ngang":"Self-taught dev","Lịch sử chung, tự cập nhật từ Discord của Ming.":"Shared history, auto-updated from Ming's Discord.","Chưa có hoạt động nào được ghi lại.":"No activity recorded yet.","Tốc độ xoay":"Rotation speed","Cảm ơn bạn đã ghé qua":"Thanks for stopping by","Hẹn gặp lại ở lần cập nhật sau.":"See you at the next update.","↑ Lên đầu trang":"↑ Back to top"});
  Object.assign(EN,{"Kéo để xoay, bấm vào ảnh để xem lớn.":"Drag to rotate, click a photo to enlarge.","Thư viện ảnh 3D":"3D photo gallery","Chọn kiểu sắp xếp":"Choose a layout"});
  (function(){
    var gal=document.getElementById('gallery');if(!gal||!window.IntersectionObserver)return;
    var src=Array.prototype.slice.call(gal.querySelectorAll('.ph'));if(!src.length)return;
    var MODES=[['helix','Helix'],['barrel','Barrel'],['ring','Ring'],['sphere','Sphere']];
    /* AXIS: y = xoay quanh trục dọc (barrel, sphere), z = quay như bánh xe/mặt đồng hồ (ring), h = leo dọc theo đường xoắn ốc (helix) */
    var AXIS={helix:'h',barrel:'y',sphere:'y',ring:'z'},DRAG={y:.35,z:.4,h:.7};
    var GSP=[.25,.5,1,1.5,2,3],GI=0;try{var _g=parseInt(localStorage.getItem('g3dspd2'),10);if(_g>=0&&_g<GSP.length)GI=_g}catch(e){}
    var AUTO={helix:26,barrel:4.5,ring:6,sphere:4.5},TILT={helix:-6,barrel:0,ring:16,sphere:-12},FADE={helix:.16,barrel:.04,ring:1,sphere:.16};
    var wrap,stage,pan,rig,tabsEl,spdEl,hintEl,slots=[],lay=[],cfg={mode:'helix',iw:140,ih:175,panZ:200,hx:null},
        ry=0,lY=0,lZ=0,rx=TILT.helix,vel=0,dragging=false,hover=false,moved=0,visible=false,raf=0,last=0,mtimer=0,built=false;
    var synth=false;
    function openItem(el){synth=true;try{el.click()}finally{synth=false}}
    function calm(){return (window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)||document.documentElement.getAttribute('data-motion')==='off'}
    function rad(d){return d*Math.PI/180}
    function norm(d){return ((d+180)%360+360)%360-180}
    function morphing(){return stage.classList.contains('morph')}

    function place(el,L){
      el.style.transform='rotateZ('+(L.Z||0).toFixed(2)+'deg) translate3d(0,'+L.y.toFixed(1)+'px,0) rotateY('+L.A.toFixed(2)+'deg) rotateX('+(L.B||0).toFixed(2)+'deg) translateZ('+L.R.toFixed(1)+'px) scale('+L.S.toFixed(3)+')';
    }
    /* Helix: các ảnh trượt dọc theo đường xoắn ốc (vừa xoay vừa đi xuống), tới đầu cuối thì mờ dần rồi quay lại đầu kia */
    function helixStep(){
      var h=cfg.hx,ph=ry/(360/h.per),i,L,s,d;
      for(i=0;i<h.K;i++){
        L=lay[i];if(!L)continue;
        s=(((i+ph)%h.K)+h.K)%h.K;
        L.A=s*360/h.per;L.y=(s-h.K/2)*h.dy;
        d=Math.min(s,h.K-s)/1.8;d=d<0?0:d>1?1:d;L.eo=d*d*(3-2*d);
        place(slots[i],L);
      }
    }
    function layout(mode){
      var n=src.length,iw=cfg.iw,ih=cfg.ih,g=Math.max(5,iw*.06),out=[],i,j,r,K,R,S,w;
      var W=stage.clientWidth,H=stage.clientHeight;
      cfg.hx=null;
      if(mode==='ring'){
        /* ring: các ảnh xếp thành một vòng tròn nằm trên mặt phẳng màn hình (như mặt đồng hồ), đỉnh ảnh hướng ra ngoài, cả vòng quay quanh tâm */
        K=Math.max(n,10);g=Math.max(6,iw*.08);
        var sn=Math.sin(Math.PI/K),fit=Math.min(H,W)*.82/Math.cos(rad(TILT.ring));
        S=(fit-g/sn)/(iw/sn+2*ih);S=Math.max(.25,Math.min(1,S));
        R=(iw*S+g)/(2*sn)+ih*S/2;
        for(i=0;i<K;i++)out.push({Z:i*360/K,A:0,B:0,y:-R,R:0,S:S,p:i%n});
        cfg.panZ=0;
      }else if(mode==='barrel'){
        K=Math.max(n,8);g=Math.max(10,iw*.1);R=(iw/2+g)/Math.tan(Math.PI/K);
        var rh=Math.min(ih+g*1.6,(H-ih)*.92);
        rh=Math.max(rh,ih+g*.6);
        for(r=0;r<2;r++)for(j=0;j<K;j++)out.push({Z:0,A:(j+(r?.5:0))*360/K,B:0,y:(r-.5)*rh,R:R,S:1,p:(j+r*3)%n});
        cfg.panZ=R;
      }else if(mode==='helix'){
        var per=8;K=16;S=.78;w=iw*S;R=(w/2+g)/Math.tan(Math.PI/per);
        var dy=(ih*S+g)/per;
        cfg.hx={per:per,K:K,dy:dy};
        for(i=0;i<K;i++)out.push({Z:0,A:0,B:0,y:0,R:R,S:S,p:i%n,eo:1});
        cfg.panZ=R;
      }else{
        K=28;var R0=Math.min(W,H)*.36,sp=R0/Math.sqrt(K/(4*Math.PI));w=sp/1.65;S=Math.max(.35,Math.min(1,w/iw));R=R0;
        for(i=0;i<K;i++){
          var yy=1-2*(i+.5)/K,el=Math.asin(yy)*180/Math.PI;
          out.push({Z:0,A:(i*137.508)%360,B:el,y:0,R:R,S:S,p:i%n});
        }
        cfg.panZ=R;
      }
      return out;
    }
    function size(){
      var W=stage.clientWidth,H=stage.clientHeight;if(!W||!H)return false;
      var iw=Math.max(60,Math.min(150,H*.3,(W*.95-8)/4.3));
      cfg.iw=iw;cfg.ih=iw*1.25;
      stage.style.setProperty('--iw',cfg.iw.toFixed(1)+'px');stage.style.setProperty('--ih',cfg.ih.toFixed(1)+'px');
      return true;
    }
    function apply(){
      lastKey='';
      lay=layout(cfg.mode);
      pan.style.transform='translateZ('+(-cfg.panZ).toFixed(1)+'px)';
      slots.forEach(function(el,k){
        var L=lay[k];
        if(!L){el.style.transform='rotateZ(0deg) translate3d(0,0,0) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(.01)';el.__on=false;el.style.opacity=0;el.style.pointerEvents='none';el.__o=0;el.__pe='none';return}
        el.__on=true;el.__L=L;el.__o=-1;el.__pe=null;
        place(el,L);
        var sp=src[L.p].querySelector('img'),im=el.querySelector('img'),u=sp&&sp.getAttribute('src');
        if(im&&u&&im.getAttribute('src')!==u){im.setAttribute('src',u);im.alt=sp.alt||''}
        el.setAttribute('data-i',src[L.p].getAttribute('data-i')||'');
      });
      if(cfg.mode==='helix')helixStep();
    }
    function rigAngles(){
      var m=cfg.mode;
      if(m==='barrel'||m==='sphere')return [ry+lY,lZ];
      if(m==='ring')return [lY,ry+lZ];
      return [lY,lZ];
    }
    /* độ sâu mặt trước của từng ô sau khi xoay => ô ở phía sau mờ đi và không bấm được */
    var lastKey='';
    function render(){
      var a2=rigAngles(),rY=a2[0],rZ=a2[1];
      var key=rx.toFixed(2)+'|'+rY.toFixed(2)+'|'+rZ.toFixed(2)+'|'+ry.toFixed(2);
      if(key===lastKey)return;lastKey=key;
      rig.style.transform='rotateX('+rx.toFixed(2)+'deg) rotateY('+rY.toFixed(2)+'deg) rotateZ('+rZ.toFixed(2)+'deg)';
      if(cfg.mode==='helix'&&!morphing())helixStep();
      var sx=Math.sin(rad(rx)),cx=Math.cos(rad(rx)),sy=Math.sin(rad(rY)),cy=Math.cos(rad(rY)),sz=Math.sin(rad(rZ)),cz=Math.cos(rad(rZ));
      var fm=FADE[cfg.mode];
      for(var k=0;k<slots.length;k++){
        var el=slots[k];if(!el.__on)continue;
        var L=el.__L,a=rad(L.A),b=rad(L.B);
        var nx=Math.cos(b)*Math.sin(a),ny=-Math.sin(b),nz=Math.cos(b)*Math.cos(a);
        var x0=nx*cz-ny*sz,y0=nx*sz+ny*cz;
        var z1=-x0*sy+nz*cy;
        var z2=y0*sx+z1*cx;
        var t=Math.max(0,Math.min(1,(z2+.1)/.7)),o=fm+(1-fm)*t*t*(3-2*t);
        if(L.eo!==undefined)o*=L.eo;
        o=Math.round(o*100)/100;
        if(el.__o!==o){el.__o=o;el.style.opacity=o}
        var pe=(z2>.1&&o>.25)?'auto':'none';if(el.__pe!==pe){el.__pe=pe;el.style.pointerEvents=pe}
        el.__d=z2;
      }
    }
    function frame(t){
      raf=0;if(!visible||document.hidden)return;
      var dt=Math.min(.05,(t-last)/1000||0);last=t;
      var m=cfg.mode;
      if(!dragging){
        var c=calm(),target=(hover||c)?0:AUTO[m]*GSP[GI];
        vel+=(target-vel)*(1-Math.exp(-dt*(c?12:2.2)));
        if(!(m==='helix'&&morphing()))ry+=vel*dt;
        if(m!=='sphere')rx+=(TILT[m]-rx)*(1-Math.exp(-dt*4));
      }
      if(lY||lZ){var k=Math.exp(-dt*3.2);lY*=k;lZ*=k;if(Math.abs(lY)<.05)lY=0;if(Math.abs(lZ)<.05)lZ=0}
      render();raf=requestAnimationFrame(frame);
    }
    function run(){if(!raf&&visible&&!document.hidden){last=performance.now();raf=requestAnimationFrame(frame)}}

    function setMode(m,instant){
      if(m===cfg.mode&&slots.length&&!instant&&stage.__init)return;
      if(stage.__init&&AXIS[m]!==AXIS[cfg.mode]){
        /* đổi kiểu xoay: giữ góc hiện tại làm "phần dư" rồi tháo dần về 0 để không bị giật */
        var a2=rigAngles();lY=norm(a2[0]);lZ=norm(a2[1]);ry=0;vel=0;
      }
      cfg.mode=m;stage.__init=1;
      if(!instant&&!calm()){stage.classList.add('morph');clearTimeout(mtimer);mtimer=setTimeout(function(){stage.classList.remove('morph')},1100)}
      else stage.classList.remove('morph');
      apply();render();
      Array.prototype.forEach.call(tabsEl.children,function(b){
        var on=b.getAttribute('data-m')===m;b.setAttribute('aria-selected',on?'true':'false');b.tabIndex=on?0:-1;
        if(on)stage.setAttribute('aria-labelledby',b.id);
      });
    }
    function texts(){
      hintEl.textContent=T('Kéo để xoay, bấm vào ảnh để xem lớn.');
      stage.setAttribute('aria-label',T('Thư viện ảnh 3D'));
      tabsEl.setAttribute('aria-label',T('Chọn kiểu sắp xếp'));
      spdEl.setAttribute('aria-label',T('Tốc độ xoay'));spdEl.title=T('Tốc độ xoay');
    }
    function build(){
      if(built)return;built=true;
      wrap=document.createElement('div');wrap.className='g3d';
      wrap.innerHTML='<div class="g3d-top"><div class="labtabs" role="tablist"></div><div class="labtabs g3d-spd" role="group"></div><p class="g3d-hint"></p></div>'
        +'<div class="g3d-stage" role="tabpanel" tabindex="0"><div class="g3d-pan"><div class="g3d-rig"></div></div></div>';
      tabsEl=wrap.querySelector('.labtabs');hintEl=wrap.querySelector('.g3d-hint');
      spdEl=wrap.querySelector('.g3d-spd');
      GSP.forEach(function(v,i){
        var sb=document.createElement('button');sb.type='button';sb.textContent=v+'x';
        sb.setAttribute('aria-pressed',i===GI?'true':'false');
        sb.addEventListener('click',function(){
          GI=i;try{localStorage.setItem('g3dspd2',String(i))}catch(e){}
          Array.prototype.forEach.call(spdEl.children,function(x,k){x.setAttribute('aria-pressed',k===GI?'true':'false')});
        });
        spdEl.appendChild(sb);
      });
      stage=wrap.querySelector('.g3d-stage');pan=wrap.querySelector('.g3d-pan');rig=wrap.querySelector('.g3d-rig');
      MODES.forEach(function(m){
        var b=document.createElement('button');b.type='button';b.setAttribute('role','tab');b.id='g3dt-'+m[0];b.setAttribute('data-m',m[0]);b.textContent=m[1];
        b.addEventListener('click',function(){setMode(m[0])});tabsEl.appendChild(b);
      });
      tabsEl.addEventListener('keydown',function(e){
        if(e.key!=='ArrowLeft'&&e.key!=='ArrowRight')return;
        var ix=MODES.map(function(m){return m[0]}).indexOf(cfg.mode),nx=(ix+(e.key==='ArrowRight'?1:-1)+MODES.length)%MODES.length;
        e.preventDefault();setMode(MODES[nx][0]);document.getElementById('g3dt-'+MODES[nx][0]).focus();
      });
      /* tạo sẵn đủ ô cho kiểu nhiều ô nhất, dùng lại cho các kiểu còn lại */
      var cnt=Math.max(28,Math.max(src.length,8)*2);
      for(var k=0;k<cnt;k++){
        var c=src[k%src.length].cloneNode(true);c.classList.remove('ext');c.removeAttribute('tabindex');c.removeAttribute('role');c.removeAttribute('aria-label');
        var im=c.querySelector('img');if(im){im.loading='eager';im.draggable=false}
        rig.appendChild(c);slots.push(c);
      }
      gal.style.display='none';
      var more=document.getElementById('phmore');if(more&&more.parentNode)more.parentNode.style.display='none';
      gal.insertAdjacentElement('afterend',wrap);
      texts();document.addEventListener('langchange',texts);
      size();setMode('helix',true);

      /* kéo để xoay (không dùng pointer capture để vẫn tự xác định được ảnh được bấm) */
      var lx=0,ly=0,lt=0;
      stage.addEventListener('pointerdown',function(e){
        if(e.button>0)return;dragging=true;moved=0;lx=e.clientX;ly=e.clientY;lt=performance.now();vel=0;stage.classList.add('drag');
        window.addEventListener('pointermove',mv);window.addEventListener('pointerup',up);window.addEventListener('pointercancel',up);
      });
      function mv(e){
        var dx=e.clientX-lx,dy=e.clientY-ly,now=performance.now(),dt=Math.max(.008,(now-lt)/1000),f=DRAG[AXIS[cfg.mode]];
        lx=e.clientX;ly=e.clientY;lt=now;moved+=Math.abs(dx)+Math.abs(dy);
        if(!(cfg.mode==='helix'&&morphing()))ry+=dx*f;
        var lim=cfg.mode==='sphere'?75:22;rx=Math.max(-lim,Math.min(lim,rx-dy*.25));
        vel=vel*.6+(dx*f/dt)*.4;vel=Math.max(-420,Math.min(420,vel));
        render();
      }
      function pick(x,y){
        var best=null;
        slots.forEach(function(el){
          if(!el.__on||!(el.__d>.1)||!(el.__o>.25))return;
          var r=el.getBoundingClientRect();
          if(x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom&&(!best||el.__d>best.__d))best=el;
        });
        return best;
      }
      function up(e){
        dragging=false;stage.classList.remove('drag');
        window.removeEventListener('pointermove',mv);window.removeEventListener('pointerup',up);window.removeEventListener('pointercancel',up);
        if(calm())vel=0;
        if(e&&e.type==='pointerup'&&moved<=6){var it=pick(e.clientX,e.clientY);if(it)openItem(it)}
      }
      stage.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse')hover=true});
      stage.addEventListener('pointerleave',function(){hover=false});
      /* click gốc trong khung 3D: bỏ qua, vì ảnh được mở ở pointerup (openItem) để chắc chắn bấm là xem được */
      stage.addEventListener('click',function(e){
        if(synth)return;
        if(moved>6||(e.target.closest&&e.target.closest('.ph'))){e.stopPropagation();e.preventDefault()}
        moved=0;
      },true);
      stage.addEventListener('dragstart',function(e){e.preventDefault()});
      stage.addEventListener('keydown',function(e){
        if(e.key==='ArrowLeft'){e.preventDefault();vel=Math.min(300,vel+140)}
        else if(e.key==='ArrowRight'){e.preventDefault();vel=Math.max(-300,vel-140)}
        else if(e.key==='Enter'||e.key===' '){
          e.preventDefault();var best=null;
          slots.forEach(function(el){if(el.__on&&el.__o>.25&&(!best||el.__d>best.__d))best=el});
          if(best){moved=0;openItem(best)}
        }
      });
      if(window.ResizeObserver)new ResizeObserver(function(){
        if(!size())return;stage.classList.remove('morph');apply();render();
      }).observe(stage);
    }
    var sec=document.getElementById('photos')||gal;
    var io=new IntersectionObserver(function(es){
      es.forEach(function(en){
        if(en.target===sec){
          if(en.isIntersecting){build();visible=true;run();if(stage){io.unobserve(sec);io.observe(stage)}}else{visible=false}
          return;
        }
        visible=en.isIntersecting;stage.classList.toggle('idle',!visible);if(visible)run();
      });
    },{rootMargin:'40px 0px'});
    io.observe(sec);
    document.addEventListener('visibilitychange',run);
  })();
  Object.assign(EN,{"Xuống mục tiếp theo":"Next section","Sắp xếp":"Sort","Thứ tự gốc":"Original order","Tên A → Z":"Title A → Z","Tên Z → A":"Title Z → A","Ca sĩ A → Z":"Artist A → Z","Phát ngẫu nhiên":"Shuffle","Đang phát ngẫu nhiên":"Shuffle on","Thể loại":"Genre","Lọc theo thể loại":"Filter by genre","Tất cả":"All","Nhạc Việt":"Vietnamese","Nhạc Việt Nam":"Vietnamese music","Nhạc nước ngoài":"International","Chưa có bài nào ở mục này.":"No tracks in this category yet."});
  (function(){
    var au=document.getElementById('bgmau'),btn=document.getElementById('bgm'),top=document.getElementById('bgmtop'),lst=document.getElementById('bgmlist'),pan=document.getElementById('bgmp');
    if(!au||!btn||!pan||!TRACKS.length)return;
    var tt=document.getElementById('bgmt'),ta=document.getElementById('bgma'),list=document.getElementById('bgml'),vol=document.getElementById('bgmvol'),msg=document.getElementById('bgmmsg');
    var cur=0,bad={},want=false,shuf=false,hist=[],ord=[],sm='0',ss=document.getElementById('bgmsort'),gf='all',gs=document.getElementById('bgmgen');
    function syncG(){if(gs)[].forEach.call(gs.querySelectorAll('button'),function(b){b.setAttribute('aria-pressed',b.getAttribute('data-g')===gf?'true':'false')})}
    try{sm=localStorage.getItem('bgsort')||'0'}catch(e){}
    if(ss){if(!/^(0|new|az|za|ar)$/.test(sm))sm='0';ss.value=sm}
    try{gf=localStorage.getItem('bggen')||'all'}catch(e){}
    if(!/^(all|vn|en)$/.test(gf))gf='all';
    syncG();
    function mkOrd(){
      var o=TRACKS.map(function(_,i){return i}).filter(function(i){return gf==='all'||(TRACKS[i].g||'vn')===gf}),col=function(x){return String(x||'').trim()},cmp=function(a,b){return a.localeCompare(b,'vi',{sensitivity:'base'})};
      if(sm==='az')o.sort(function(a,b){return cmp(col(TRACKS[a].t),col(TRACKS[b].t))||a-b});
      else if(sm==='za')o.sort(function(a,b){return cmp(col(TRACKS[b].t),col(TRACKS[a].t))||a-b});
      else if(sm==='ar')o.sort(function(a,b){return cmp(col(TRACKS[a].a),col(TRACKS[b].a))||cmp(col(TRACKS[a].t),col(TRACKS[b].t))||a-b});
      else if(sm==='new')o.reverse(); /* bài mới được thêm vào cuối music/tracks.js, nên đảo ngược = mới nhất lên đầu */
      ord=o;
    }
    mkOrd();
    try{shuf=localStorage.getItem('shuf')==='1'}catch(e){}
    au.volume=.35;
    try{var sv=localStorage.getItem('vol');if(sv!==null&&!isNaN(+sv)){vol.value=sv;au.volume=sv/100}}catch(e){}
    function allBad(){return Object.keys(bad).length>=TRACKS.length}
    function render(){
      tt.textContent=T(TRACKS[cur].t);ta.textContent=T(TRACKS[cur].a||'');
      var st=list.scrollTop,fi=document.activeElement&&list.contains(document.activeElement)?document.activeElement.getAttribute('data-i'):null;
      if(!ord.length){list.innerHTML='<li class="bgmempty" style="padding:.6rem .4rem;color:var(--muted);font:400 .72rem var(--mono)">'+T('Chưa có bài nào ở mục này.')+'</li>';msg.hidden=!allBad();return}
      list.innerHTML=ord.map(function(i,p){var x=TRACKS[i];
        return '<li><button type="button" data-i="'+i+'" title="'+esc(((x.t||'').trim()+(x.a?' · '+x.a.trim():'')))+'"'+(i===cur?' class="cur" aria-current="true"':'')+(bad[i]?' disabled':'')+'><span class="ix">'+('0'+(p+1)).slice(-2)+'</span><span class="tx"><span class="nm">'+esc((x.t||'').trim())+'</span><small>'+(bad[i]?T('thiếu file'):esc((x.a||'').trim()))+'</small></span></button></li>';
      }).join('');
      msg.hidden=!allBad();
      list.scrollTop=st;
      if(fi!==null){var nf=list.querySelector('button[data-i="'+fi+'"]');if(nf&&!nf.disabled)try{nf.focus({preventScroll:true})}catch(e){}}
      reveal();
    }
    function reveal(){
      var c=list.querySelector('.cur');if(!c||pan.hidden)return;
      var r=c.getBoundingClientRect(),lr=list.getBoundingClientRect();
      if(!lr.height)return;
      if(r.top<lr.top)list.scrollTop-=lr.top-r.top;
      else if(r.bottom>lr.bottom)list.scrollTop+=r.bottom-lr.top-lr.height;
    }
    function load(i){cur=i;au.src=TRACKS[i].src;render();lyReset()}
    function go(i){
      if(allBad())return;
      load(i);want=true;
      var p=au.play();if(p&&p.catch)p.catch(function(){});
    }
    function pickRand(){
      var c=ord.filter(function(k){return k!==cur&&!bad[k]});
      return c.length?c[Math.floor(Math.random()*c.length)]:-1;
    }
    function step(d){
      if(allBad())return;
      if(shuf){
        var r=-1;
        if(d<0){while(hist.length){var h=hist.pop();if(h!==cur&&!bad[h]&&ord.indexOf(h)>=0){r=h;break}}}
        else{r=pickRand();if(r>=0){hist.push(cur);if(hist.length>100)hist.shift()}}
        if(r>=0){if(want)go(r);else load(r);return}
      }
      var n=ord.length;if(!n)return;var q=ord.indexOf(cur),i=cur;if(q<0)q=d>0?-1:0;
      for(var k=0;k<n;k++){q=(q+d+n)%n;i=ord[q];if(!bad[i])break}
      if(bad[i])return;
      if(want)go(i);else load(i);
    }
    function togglePanel(open){
      if(open==null)open=pan.hidden;
      pan.hidden=!open;
      if(open)setTimeout(reveal,30);
      [btn,lst].forEach(function(x){if(x)x.setAttribute('aria-expanded',open?'true':'false')});
      if(lst)lst.classList.toggle('on',open);
    }
    function toggle(){
      if(allBad()){togglePanel(true);return}
      if(au.paused){if(au.getAttribute('src')&&!bad[cur]){want=true;var rp=au.play();if(rp&&rp.catch)rp.catch(function(){})}else go(cur)}else{want=false;au.pause()}
    }
    var qb=document.getElementById('bgmq'),nb=document.getElementById('bgmn');
    function nextNow(){
      if(allBad()){togglePanel(true);return}
      if(!au.getAttribute('src')){go(cur);return}
      want=true;step(1);
    }
    function sync(){
      var on=!au.paused;
      if(qb){qb.classList.toggle('playing',on);qb.setAttribute('aria-label',T(on?'Tắt nhạc':'Bật nhạc'))}
      btn.classList.toggle('on',on);pan.classList.toggle('playing',on);
      document.getElementById('bgmplay').setAttribute('aria-label',T(on?'Tạm dừng':'Phát nhạc'));
      if(top){top.classList.toggle('on',on);top.setAttribute('aria-pressed',on?'true':'false');top.setAttribute('aria-label',T(on?'Tắt nhạc':'Bật nhạc'))}
    }
    au.addEventListener('play',sync);au.addEventListener('pause',sync);
    au.addEventListener('ended',function(){step(1)});
    au.addEventListener('error',function(){
      bad[cur]=true;render();
      if(allBad()){want=false;togglePanel(true);return}
      step(1);
    });
    btn.addEventListener('click',function(){togglePanel()});
    if(lst)lst.addEventListener('click',function(){togglePanel()});
    if(top)top.addEventListener('click',toggle);
    if(qb)qb.addEventListener('click',toggle);
    if(nb)nb.addEventListener('click',nextNow);
    document.getElementById('bgmplay').addEventListener('click',toggle);
    var sb=g('bgmshuf');
    function shufUI(){
      if(!sb)return;
      sb.classList.toggle('on',shuf);sb.setAttribute('aria-pressed',shuf?'true':'false');
      var l=T(shuf?'Đang phát ngẫu nhiên':'Phát ngẫu nhiên');sb.setAttribute('aria-label',l);sb.title=l;
    }
    if(sb)sb.addEventListener('click',function(){
      if(allBad()){togglePanel(true);return}
      var wasPlaying=!au.paused&&!au.ended;
      shuf=!shuf;hist=[];shufUI();
      try{localStorage.setItem('shuf',shuf?'1':'0')}catch(e){}
      if(wasPlaying)return; /* đang phát: chỉ đổi chế độ, bài đang phát vẫn tiếp tục */
      /* chưa phát: phát luôn. Bật ngẫu nhiên thì chọn một bài bất kỳ, tắt thì phát bài hiện tại */
      if(shuf){var r=pickRand();if(r>=0){hist.push(cur);go(r);return}}
      toggle();
    });
    shufUI();
    if(gs)gs.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('button[data-g]');if(!b)return;gf=b.getAttribute('data-g');try{localStorage.setItem('bggen',gf)}catch(x){}syncG();mkOrd();list.scrollTop=0;render()});
    if(ss)ss.addEventListener('change',function(){sm=ss.value;try{localStorage.setItem('bgsort',sm)}catch(e){}mkOrd();list.scrollTop=0;render()});
    document.getElementById('bgmprev').addEventListener('click',function(){step(-1)});
    document.getElementById('bgmnext').addEventListener('click',function(){step(1)});
    vol.addEventListener('input',function(){au.volume=vol.value/100;try{localStorage.setItem('vol',vol.value)}catch(e){}});
    document.addEventListener('click',function(e){
      if(pan.hidden)return;
      var t=e.target;
      if(!t.isConnected)return; /* nút vừa bị render() thay mới: không phải click ra ngoài */
      if(pan.contains(t)||btn.contains(t)||(lst&&lst.contains(t))||(t.closest&&t.closest('.bgq')))return;
      togglePanel(false);
    });
    list.addEventListener('click',function(e){var b=e.target.closest('button[data-i]');if(!b||b.disabled)return;var i=+b.getAttribute('data-i');if(i===cur&&au.getAttribute('src'))toggle();else go(i)});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!pan.hidden){togglePanel(false);btn.focus()}});

    /* ===== lời bài hát chạy theo nhạc =====
       Thứ tự tìm lời cho mỗi bài:
         1) File lời cùng tên với file nhạc, đuôi .lrc (ví dụ music/bai-01.mp3 thì lời là music/bai-01.lrc). Cách này chắc nhất.
         2) Thêm lrc:'music/ten-file.lrc' vào dòng bài trong music/tracks.js nếu muốn đặt tên khác.
         3) Tự tìm trên LRCLIB (lrclib.net, kho lời miễn phí). Khi tìm, tên bài được gửi tới trang đó.
            Nếu tìm sai bài, thêm q:'tên bài ca sĩ' vào dòng bài trong music/tracks.js.
       Lời tìm được được nhớ trong trình duyệt nên lần sau không phải tìm lại. */
    function g(id){return document.getElementById(id)}
    var lyb=g('lyb'),lyn=g('lyn'),lys=g('lys'),lyx=g('lyx'),lyw=g('lyw');
    var LY={lines:null,plain:false,idx:-1,tok:0,timer:0,show:true};
    try{if(localStorage.getItem('lyshow')==='0')LY.show=false}catch(e){}
    function lnorm(x){return String(x||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/đ/g,'d').replace(/[^a-z0-9]+/g,' ').trim()}
    function parseLRC(txt){
      var out=[],off=0,m=/\[offset:\s*(-?\d+)\]/i.exec(txt);if(m)off=(+m[1])/1000;
      String(txt).split(/\r?\n/).forEach(function(line){
        var re=/\[(\d{1,3}):(\d{1,2}(?:[.:]\d{1,3})?)\]/g,ts=[],mm,last=0;
        while((mm=re.exec(line))){ts.push((+mm[1])*60+parseFloat(mm[2].replace(':','.')));last=re.lastIndex}
        if(!ts.length)return;
        var tx=line.slice(last).replace(/<\d+:\d+(?:[.:]\d+)?>/g,'').trim();
        ts.forEach(function(t){out.push({t:t-off,s:tx})});
      });
      out.sort(function(a,b){return a.t-b.t});
      return out;
    }
    function qFor(tr){
      var parts=String(tr.t||'').split(/\s{2,}|\s[-–|]\s/).map(function(x){return x.trim()}).filter(Boolean);
      var name=(parts[0]||'').replace(/[\(\[][^)\]]*[\)\]]/g,'').trim();
      var art=tr.a||(parts[1]||'').replace(/[\(\[][^)\]]*[\)\]]/g,'').replace(/\b(ft|feat)\b\.?.*$/i,'').replace(/\bofficial\b.*$/i,'').trim();
      return {name:name,art:art};
    }
    function getJSON(url,ms){
      return new Promise(function(res,rej){
        var done=false,ac=window.AbortController?new AbortController():null,tm=setTimeout(function(){if(!done){done=true;if(ac)ac.abort();rej(new Error('timeout'))}},ms||8000);
        fetch(url,ac?{signal:ac.signal}:{}).then(function(r){if(!r.ok)throw new Error('http');return r.json()}).then(function(j){if(!done){done=true;clearTimeout(tm);res(j)}}).catch(function(e){if(!done){done=true;clearTimeout(tm);rej(e)}});
      });
    }
    function pickLrc(list,dur,nm){
      var best=null,bs=1e9,plain=null;
      (list||[]).forEach(function(r){
        var tn=lnorm(r.trackName),same=tn&&nm&&(tn.indexOf(nm)>-1||nm.indexOf(tn)>-1),d=(dur&&r.duration)?Math.abs(r.duration-dur):0;
        if(r.syncedLyrics){
          if(dur&&r.duration&&d>8)return;
          var sc=d+(same?0:6);if(sc<bs){bs=sc;best=r}
        }else if(r.plainLyrics&&same&&!plain)plain=r;
      });
      return best?{lrc:best.syncedLyrics}:(plain?{plain:plain.plainLyrics}:null);
    }
    function lyStatus(msg){lyn.textContent=msg||'';lyn.hidden=!msg}
    function lyClear(){LY.lines=null;LY.idx=-1;lyb.innerHTML='';lyb.hidden=true;lys.textContent=''}
    function lyReset(){
      LY.tok++;lyClear();
      lyStatus(T('Bấm phát để tải lời.'));
    }
    function lyShow(lines,plain){
      LY.lines=lines;LY.plain=!!plain;LY.idx=-1;
      lyb.className='lyb'+(plain?' plain':'');
      lyb.innerHTML='<div class="pad"></div>'+lines.map(function(l,i){
        return '<p'+(plain?'':' data-t="'+l.t.toFixed(2)+'"')+' data-i="'+i+'">'+(l.s?esc(l.s):'&nbsp;')+'</p>';
      }).join('')+'<div class="pad"></div>';
      lyb.hidden=!LY.show;lyb.scrollTop=0;
      lys.textContent=plain?T('lời thường'):'';
      lyStatus(plain?T('Bài này chưa có lời chạy theo nhạc, đây là lời thường.'):'');
      tickLy(true,true);
    }
    function lyFind(){
      var i=cur,tr=TRACKS[i],tok=++LY.tok,key='ly1:'+tr.src;
      function ok(){return tok===LY.tok&&i===cur}
      function useLrc(txt,plain,cache){
        if(!ok())return false;
        if(plain){var ls=String(txt).split(/\r?\n/).map(function(x){return {t:0,s:x.trim()}});lyShow(ls,true)}
        else{var p=parseLRC(txt);if(!p.length)return false;lyShow(p,false)}
        if(cache){try{localStorage.setItem(key,JSON.stringify({p:plain?1:0,t:txt}))}catch(e){}}
        return true;
      }
      lyClear();lyStatus(T('Đang tìm lời...'));
      var dur=au.duration&&isFinite(au.duration)?au.duration:0;
      try{var c=JSON.parse(localStorage.getItem(key)||'null');if(c&&c.t&&useLrc(c.t,!!c.p,false))return}catch(e){}
      var local=tr.lrc||tr.src.replace(/\.[^./]+$/,'.lrc');
      var step1=fetch(local).then(function(r){return r.ok?r.text():''}).then(function(t){return /\[\d{1,3}:\d{1,2}/.test(t)&&useLrc(t,false,false)}).catch(function(){return false});
      step1.then(function(done){
        if(done||!ok())return;
        var q=qFor(tr),nm=lnorm(q.name),qs=[];
        if(tr.q)qs.push(tr.q);if(q.name&&q.art)qs.push(q.name+' '+q.art);if(q.name)qs.push(q.name)
        var seen={},i2=0,net=false;
        function next(){
          if(!ok())return;
          while(i2<qs.length&&seen[qs[i2]])i2++;
          if(i2>=qs.length){lyStatus(net?T('Không tải được lời lúc này (có thể đang mất mạng).'):T('Chưa tìm thấy lời đồng bộ cho bài này.'));return}
          var qq=qs[i2++];seen[qq]=1;
          getJSON('https://lrclib.net/api/search?q='+encodeURIComponent(qq),9000).then(function(list){
            if(!ok())return;
            var d2=au.duration&&isFinite(au.duration)?au.duration:dur,hit=pickLrc(list,d2,nm);
            if(hit&&hit.lrc&&useLrc(hit.lrc,false,true))return;
            if(hit&&hit.plain&&useLrc(hit.plain,true,true))return;
            next();
          }).catch(function(){net=true;next()});
        }
        next();
      });
    }
    function lyBsearch(t){
      var a=LY.lines,lo=0,hi=a.length-1,r=-1;
      while(lo<=hi){var m=(lo+hi)>>1;if(a[m].t<=t){r=m;lo=m+1}else hi=m-1}
      return r;
    }
    function tickLy(force,instant){
      var fz=window.__lyForce;if(!LY.lines||LY.plain||(pan.hidden&&!fz)||(!LY.show&&!fz))return;
      var i=lyBsearch(au.currentTime);
      if(i===LY.idx&&!force)return;
      var ps=lyb.children,p0=LY.idx+1,p1=i+1;
      if(LY.idx>=0&&ps[p0])ps[p0].classList.remove('on');
      for(var k=1;k<ps.length-1;k++){var el=ps[k];if(k-1<i){if(!el.classList.contains('past'))el.classList.add('past')}else if(el.classList.contains('past'))el.classList.remove('past')}
      LY.idx=i;
      var el2=ps[Math.max(i,0)+1];
      if(!el2)return;
      if(i>=0){el2.classList.add('on');el2.classList.remove('past')}
      /* dòng đang hát (hoặc dòng đầu tiên, khi chưa tới câu đầu) luôn nằm giữa khung */
      var rb=lyb.getBoundingClientRect(),re=el2.getBoundingClientRect(),top=lyb.scrollTop+(re.top-rb.top)-lyb.clientHeight/2+re.height/2;
      var reduce=instant||(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)||document.documentElement.getAttribute('data-motion')==='off';
      try{lyb.scrollTo({top:top,behavior:reduce?'auto':'smooth'})}catch(e){lyb.scrollTop=top}
    }
    function lyLoop(on){clearInterval(LY.timer);LY.timer=0;if(on&&((LY.show&&!pan.hidden)||window.__lyForce))LY.timer=setInterval(function(){if(!document.hidden)tickLy()},200)}
    function lySetShow(v){
      LY.show=v;try{localStorage.setItem('lyshow',v?'1':'0')}catch(e){}
      lyw.hidden=!v;lyx.textContent=T(v?'Ẩn':'Hiện');lyx.setAttribute('aria-expanded',v?'true':'false');
      if(v)tickLy(true);lyLoop(!au.paused);
    }
    lyx.addEventListener('click',function(){lySetShow(!LY.show)});
    lyb.addEventListener('click',function(e){var p=e.target.closest&&e.target.closest('p[data-t]');if(!p)return;try{au.currentTime=Math.max(0,parseFloat(p.getAttribute('data-t')))}catch(x){}tickLy(true)});
    au.addEventListener('loadedmetadata',lyFind);
    au.addEventListener('play',function(){lyLoop(true);tickLy(true)});
    au.addEventListener('pause',function(){lyLoop(false)});
    au.addEventListener('ended',function(){lyLoop(false)});
    au.addEventListener('seeked',function(){tickLy()});
    document.addEventListener('langchange',function(){lyx.textContent=T(LY.show?'Ẩn':'Hiện')});
    lySetShow(LY.show);
    window.__ly={loop:lyLoop,tick:tickLy};
    /* mở trình phát thì canh lại dòng đang hát */
    new MutationObserver(function(){if(!pan.hidden){lyLoop(!au.paused);setTimeout(function(){tickLy(true,true)},60)}else lyLoop(!!window.__lyForce&&!au.paused)}).observe(pan,{attributes:true,attributeFilter:['hidden']});
    /* bật trình phát thì tắt nhạc mở đầu */
    au.addEventListener('play',function(){try{Intro.stop(.5)}catch(e){}});

    /* ===== tua 10 giây và tắt tiếng ===== */
    function skipBy(d){
      if(!au.getAttribute('src'))return;
      var t=au.currentTime+d,m=au.duration&&isFinite(au.duration)?au.duration-.2:1e9;
      try{au.currentTime=Math.min(Math.max(0,t),m)}catch(e){}
      tickLy(true);
    }
    g('bgmback').addEventListener('click',function(){skipBy(-10)});
    g('bgmfwd').addEventListener('click',function(){skipBy(10)});
    var mb=g('bgmmute'),vbox=mb.parentNode;
    var vn=g('bgmvn');
    function volNum(){if(vn&&document.activeElement!==vn)vn.value=Math.round(vol.value)}
    function muteUI(){
      var m=au.muted||au.volume===0;vbox.classList.toggle('muted',m);volNum();
      mb.setAttribute('aria-label',T(m?'Bật tiếng':'Tắt tiếng'));
    }
    mb.addEventListener('click',function(){
      if(au.volume===0){au.volume=.35;vol.value=35;au.muted=false}else au.muted=!au.muted;
      muteUI();
    });
    vol.addEventListener('input',function(){if(au.muted&&vol.value>0)au.muted=false;muteUI()});
    if(vn){
      vn.addEventListener('input',function(){
        if(vn.value==='')return;
        var n=Math.round(+vn.value);if(isNaN(n))return;
        n=Math.max(0,Math.min(100,n));
        vol.value=n;au.volume=n/100;
        try{localStorage.setItem('vol',n)}catch(e){}
        if(au.muted&&n>0)au.muted=false;
        muteUI();
      });
      vn.addEventListener('change',function(){vn.value=Math.round(vol.value)});
      vn.addEventListener('blur',function(){vn.value=Math.round(vol.value)});
      vn.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();vn.blur()}});
    }
    muteUI();
    /* ===== thanh tua nhạc ===== */
    var sk=g('sk'),skc=g('skc'),skd=g('skd'),skDrag=false;
    function mmss(t){t=Math.max(0,Math.floor(t||0));return Math.floor(t/60)+':'+('0'+(t%60)).slice(-2)}
    function skUpd(){
      var d=au.duration;
      if(!d||!isFinite(d)){sk.disabled=true;skd.textContent='0:00';if(!skDrag){sk.value=0;skc.textContent='0:00'}return}
      sk.disabled=false;skd.textContent=mmss(d);
      if(!skDrag){sk.value=Math.round(au.currentTime/d*1000);skc.textContent=mmss(au.currentTime)}
    }
    sk.addEventListener('input',function(){skDrag=true;if(au.duration)skc.textContent=mmss(sk.value/1000*au.duration)});
    sk.addEventListener('change',function(){
      if(au.duration&&isFinite(au.duration)){try{au.currentTime=sk.value/1000*au.duration}catch(e){}}
      skDrag=false;tickLy(true);skUpd();
    });
    sk.addEventListener('keydown',function(e){e.stopPropagation()});
    ['timeupdate','durationchange','loadedmetadata','emptied'].forEach(function(ev){au.addEventListener(ev,skUpd)});

    lyReset();
    render();sync();
    document.addEventListener('langchange',function(){render();sync()});
  })();
  /* phím tắt: R ngẫu nhiên, P bật/tắt nhạc */
  document.addEventListener('keydown',function(e){
    if(e.metaKey||e.ctrlKey||e.altKey||e.repeat)return;
    var tg=e.target;
    if(tg&&(tg.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(tg.tagName)))return;
    var id={r:'rndb',p:'bgmq'}[(e.key||'').toLowerCase()];
    var el=id&&document.getElementById(id);
    if(el){
      e.preventDefault();el.click();
      if(id==='bgmq')setTimeout(function(){
        var au=document.getElementById('bgmau');
        if(!au.paused)say(T('Đang phát:')+' '+document.getElementById('bgmt').textContent);
        else if(au.getAttribute('src'))say(T('Đã tạm dừng nhạc'));
      },120);
    }
  });
  /* ===== nghệ sĩ: sửa danh sách IDOLS. Ảnh bỏ vào images/idol/ (tên file khớp với img).
     Phần "đặc điểm" tôi viết theo hiểu biết chung, bạn kiểm tra lại cho chắc; "vì sao tôi thích" là chỗ bạn tự viết ===== */
  var IDOLS=[
    {n:'Sơn Tùng M-TP',img:'images/idol/son-tung.jpg',tag:'Ca sĩ, nhạc sĩ, nhà sản xuất âm nhạc',
     why:'[Viết vì sao tôi thích Sơn Tùng: bài đầu tiên tôi nghe, điều làm tôi nhớ mãi.]',
     traits:['Tên thật Nguyễn Thanh Tùng, sinh ngày 5/7/1994 tại Thái Bình, được gọi là "Hoàng tử V-pop"','Bắt đầu hoạt động năm 2012 và nhận giải Nghệ sĩ Đông Nam Á xuất sắc nhất tại MTV EMA 2015','Năm 2016 lập công ty riêng M-TP Entertainment, sau đó dẫn dắt thêm nhiều nghệ sĩ trẻ','Tự sáng tác, pha pop với R&B, hip hop, điện tử và chất liệu dân gian','Có tự truyện "Chạm tới giấc mơ" (2017) và tour Sky Tour (2019); em trai là ca sĩ MONO','Năm 2023 ra đĩa đơn tiếng Anh "Making My Way" qua The Orchard, hướng ra thị trường quốc tế'],
     songs:['Lạc trôi','Nơi này có anh','Chúng ta không thuộc về nhau','Hãy trao cho anh','Muộn rồi mà sao còn','Making My Way']},
    {n:'Đen Vâu',img:'images/idol/den-vau.jpg',tag:'Rapper, nhạc sĩ',
     why:'[Viết vì sao tôi thích Đen: lời nhạc, giọng rap, hay cảm giác khi nghe.]',
     traits:['Tên thật Nguyễn Đức Cường, sinh ngày 13/5/1989, lớn lên chủ yếu ở Quảng Ninh','Viết rap từ thời học sinh, từng làm công nhân thu gom rác trước khi theo nghề; hoạt động từ năm 2009','Bài "Cây bàng" nhận giải khán giả bình chọn ở chương trình Bài hát Việt năm 2011','Năm 2021 giữ kỷ lục nhiều MV lên top 1 thịnh hành YouTube Việt Nam (11 MV)','Concert "Show của Đen" năm 2019 bán 5.000 vé trong 10 phút','Lời nhạc giản dị, hay kể chuyện đời thường, nhẹ nhàng nhưng có chiều sâu'],
     songs:['Đi theo bóng mặt trời','Lối nhỏ','Bài này chill phết','Mười năm','Trốn tìm','Diễn viên tồi','Luôn yêu đời','Mang tiền về cho mẹ']},
    {n:'Vũ.',img:'images/idol/vu.jpg',tag:'Ca sĩ, nhạc sĩ',
     why:'[Viết vì sao tôi thích Vũ.: giọng hát, lời nhạc, hay bài làm tôi nhớ nhất.]',
     traits:['Tên thật Hoàng Thái Vũ, sinh ngày 3/10/1995 tại Hà Nội; Billboard từng gọi là "Hoàng tử indie Việt Nam"','Bắt đầu phát hành nhạc từ năm 2013, nổi lên trên SoundCloud với "Đông kiếm em" (2015) và "Lạ lùng" (2016)','Nhận giải Nghệ sĩ underground xuất sắc nhất tại WeChoice Awards 2016','Chịu ảnh hưởng từ John Mayer, Damien Rice, Jason Mraz; nhạc mộc, tiếng guitar và giọng hát nhẹ','Album "Hành Tinh Song Song" (2018) và "Vũ Trụ Song Song" (2019, ký với Warner Music)'],
     songs:['Đông kiếm em','Lạ lùng','Mùa hè của em','Bước qua mùa cô đơn','Vì anh đâu có biết']},
    {n:'HIEUTHUHAI',img:'images/idol/hieuthuhai.jpg',tag:'Rapper, ca sĩ, nhạc sĩ',
     why:'[Viết vì sao tôi thích HIEUTHUHAI: giọng, phong cách, bài hay nghe lại.]',
     traits:['Tên thật Trần Minh Hiếu, sinh ngày 28/9/1999 tại TP.HCM','Nổi lên từ Rap Việt mùa 1 (King of Rap) và là thành viên nhóm Gerdnang','Được nhiều người biết tới qua chương trình thực tế 2 Ngày 1 Đêm với hình ảnh "út khờ"','Mê âm nhạc từ khi nghe guitar fingerstyle của Sungha Jung; từng làm nhiều việc để có tiền mua đồ thu âm','Album đầu tay "Ai cũng phải bắt đầu từ đâu đó" (2023)'],
     songs:['Cua','Nghe như tình yêu','Bật nhạc lên','Không thể say','Ngủ một tôi','Exit Sign']},
    {n:'MCK',img:'images/idol/mck.jpg',tag:'Rapper, ca sĩ, nhạc sĩ',
     why:'[Viết vì sao tôi thích MCK: flow, giai điệu, bài hay nghe lại.]',
     traits:['Tên thật Nghiêm Vũ Hoàng Long, sinh ngày 2/3/1999 tại Hà Nội; từng làm nhạc indie với nghệ danh Nger hoặc Ngơ','Ra mắt với "Tình đắng như ly cà phê" cùng Nân, vượt 50 triệu lượt xem','Năm 2020 vào tới chung kết Rap Việt mùa 1 và nhận giải Gương mặt Rap/Hip-hop triển vọng của WeChoice','"Chìm sâu" là bài được nghe nhiều nhất trên Spotify Việt Nam năm 2022','Album "99%" từng đứng đầu bảng xếp hạng album iTunes và Apple Music Việt Nam'],
     songs:['Chìm sâu','Tại vì sao','Tình đắng như ly cà phê','Nếu như ta chẳng còn','Nguyễn Văn Mười']},
    {n:'Vũ Cát Tường',img:'images/idol/vu-cat-tuong.jpg',tag:'Ca sĩ, nhạc sĩ',
     why:'[Viết vì sao tôi thích Vũ Cát Tường: giọng hát, lời nhạc, bài làm tôi nhớ nhất.]',
     traits:['Á quân Giọng hát Việt 2013; tốt nghiệp kỹ sư loại giỏi tại ĐH Quốc tế (ĐH Quốc gia TP.HCM)','Tự sáng tác nhiều thể loại: pop, ballad, R&B, rock, neo-soul','Các album và EP: "Giải mã" (2014), "Stardom" (2018), "Một triệu năm ánh sáng" (2020)','Từng là huấn luyện viên Giọng hát Việt nhí 2018','Từng sáng tác "Mơ", "Yêu xa", "Cô gái ngày hôm qua" trước khi trở thành ca sĩ'],
     songs:['Vết mưa','Từng là','Người bình thường','Mơ','Yêu xa']},
    {n:'Changg',img:'images/idol/changg.jpg',tag:'Ca sĩ, rapper, nhạc sĩ',
     why:'[Viết vì sao tôi thích Changg: giọng hát, màu nhạc, bài hay nghe.]',
     traits:['Vừa hát, vừa rap, vừa tự viết nhạc','Được yêu thích với hình ảnh "cô gái nhà bên" gần gũi','Nhạc hay nói về tình yêu, nhìn lại chính tôi và những cảm xúc dễ vỡ của đêm khuya','Từng biểu diễn tại OzAsia Festival 2025 ở Adelaide, Úc, trong chương trình V-Pop Vibe'],
     songs:['Tự sự','Cưới đi','Hướng dương','Lỡ say bye là bye']},
    {n:'DatG',img:'images/idol/datg.jpg',tag:'Rapper, ca sĩ, nhạc sĩ',
     why:'[Viết vì sao tôi thích DatG: giọng hát, màu nhạc, bài hay nghe.]',
     traits:['Đi lên từ rap underground, sau chuyển sang viết và hát nhạc tình buồn','Được nhiều người biết tới từ đầu năm 2018 với "Buồn của anh"','Được gọi là hit-maker thế hệ mới, còn viết nhạc cho nghệ sĩ khác như "Anh ơi ở lại" (Chi Pu)','Từng nằm trong nhiều đề cử tại Zing Music Awards 2019'],
     songs:['Buồn của anh','Buồn không em','Bánh mì không','Về','Anh ơi ở lại']},
    {n:'GREY D',img:'images/idol/greyd.jpg',tag:'Ca sĩ, nhạc sĩ',
     why:'[Viết vì sao tôi thích GREY D: giọng hát, màu nhạc, bài hay nghe.]',
     traits:['Từng hoạt động trong một nhóm nhạc rồi ra mắt solo; hát R&B nghiêng về màu Hàn Quốc và tự sáng tác','Thuộc ST.319 Entertainment, theo đuổi hình tượng nghệ sĩ 4D: tài năng, ngoại hình, cá tính, tâm hồn','Từng tạm dừng hoạt động khoảng hai năm rồi trở lại với album mới','Live concert "Ánh sáng • Màn đêm" tại TP.HCM diễn ra hai đêm liền'],
     songs:['dự báo thời tiết hôm nay mưa','Anh sẽ đến cùng cơn mưa','Để tôi ôm em bằng giai điệu này','1001 câu trả lời']},
    {n:'Chillies',img:'images/idol/chillies.jpg',tag:'Ban nhạc',
     why:'[Viết vì sao tôi thích Chillies: màu nhạc, thành viên, bài hay nghe.]',
     traits:['Ban nhạc 5 thành viên: Duy Khang (hát chính, sáng tác), Nhím Biển (guitar chính, producer), Sĩ Phú (trống), Văn Phước (bass) và Đức','Thành lập khoảng năm 2018 ở Sài Gòn, ban đầu chơi cover rồi chuyển sang nhạc gốc','Năm 2020 cùng Vũ. là hai nghệ sĩ Việt đầu tiên ký với Warner Music Việt Nam','Album đầu tay "Qua khung cửa sổ" do Duy Khang sáng tác, đứng số 1 bảng Top Album Việt Nam trên Spotify','Không bó tôi vào một thể loại; đầu năm 2024 ra đĩa đơn kép "Đại lộ mặt trời" cùng Morisaki Win'],
     songs:['Mascara','Vùng ký ức','Và thế là hết','Cứ chill thôi','Đại lộ mặt trời']}
  ];
  (function(){
    var grid=document.getElementById('idgrid'),box=document.getElementById('idm');if(!grid||!box)return;
    grid.innerHTML=IDOLS.map(function(x,i){
      return '<button class="idc'+(i>=3?' ext':'')+'" type="button" data-i="'+i+'" style="--n:'+i+'"><div class="ph" data-i="'+esc(x.n.charAt(0))+'"><img src="'+esc(x.img)+'" alt="'+esc(x.n)+'" loading="lazy" decoding="async" onerror="this.remove()"></div><span class="nm">'+esc(x.n)+'<i aria-hidden="true">→</i></span></button>';
    }).join('');
    var opener=null,closeB=document.getElementById('idx');
    function open(i,from){
      var x=IDOLS[i];opener=from||null;
      var ph=document.getElementById('idph');ph.setAttribute('data-i',x.n.charAt(0));
      ph.innerHTML='<img loading="lazy" decoding="async" src="'+esc(x.img)+'" alt="'+esc(x.n)+'" onerror="this.remove()">';
      document.getElementById('idmt').textContent=x.n;
      document.getElementById('idtag').textContent=T(x.tag);
      var why=PH(x.why)?'':x.why,tr=x.traits.filter(function(t){return !PH(t)}),sg=x.songs.filter(function(t){return !PH(t)});
      function sec(id,on){var e=document.getElementById(id),h=e.previousElementSibling;e.style.display=on?'':'none';if(h)h.style.display=on?'':'none'}
      document.getElementById('idwhy').textContent=T(why);sec('idwhy',!!why);
      document.getElementById('idtr').innerHTML=tr.map(function(t){return '<li>'+esc(t)+'</li>'}).join('');sec('idtr',tr.length>0);
      document.getElementById('idsg').innerHTML=sg.map(function(t){return '<a class="yt" href="https://www.youtube.com/results?search_query='+encodeURIComponent(x.n+' '+t)+'" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z"/></svg><span>'+esc(t)+'</span></a>'}).join('')+'<a class="yt all" href="https://www.youtube.com/results?search_query='+encodeURIComponent(x.n)+'" target="_blank" rel="noopener"><span>'+esc(T('Xem thêm của'))+' '+esc(x.n)+' ↗</span></a>';sec('idsg',true);
      box.hidden=false;document.body.style.overflow='hidden';closeB.focus();
    }
    function close(){box.hidden=true;document.body.style.overflow='';if(opener)opener.focus()}
    grid.addEventListener('click',function(e){var b=e.target.closest('.idc');if(b)open(+b.getAttribute('data-i'),b)});
    closeB.addEventListener('click',close);
    box.addEventListener('click',function(e){if(e.target===box)close()});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!box.hidden)close()});
  })();
  /* ===== nút "Xem thêm": nghệ sĩ và ảnh (phần tử có class ext là phần ẩn lúc đầu) ===== */
  function moreBtn(gridId,btnId,openTxt,closeTxt){
    var g=document.getElementById(gridId),b=document.getElementById(btnId);if(!g||!b)return;
    var n=g.querySelectorAll('.ext').length;
    if(!n){b.parentNode.hidden=true;return}
    function label(){b.textContent=g.classList.contains('open')?T(closeTxt):T(openTxt)+' (+'+n+')'}
    label();document.addEventListener('langchange',label);
    b.addEventListener('click',function(){
      var o=g.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');label();
      if(!o){var r=g.closest('section');if(r)r.scrollIntoView({behavior:calm?'auto':'smooth'})}
    });
  }
  moreBtn('idgrid','idmore','Xem thêm nghệ sĩ','Thu gọn');
  moreBtn('gallery','phmore','Xem thêm ảnh','Thu gọn');

  /* ===== thời khoá biểu: sửa TKB bên dưới. Mỗi ngày là một danh sách khung giờ,
     mỗi khung là [giờ bắt đầu, giờ kết thúc, việc tôi làm, ghi chú (có thể để trống)]. Giờ viết dạng 'HH:MM'.
     Thứ tự ngày: Thứ 2, Thứ 3, Thứ 4, Thứ 5, Thứ 6, Thứ 7, Chủ nhật. Chỗ trong [ ] là chỗ bạn tự điền ===== */
  var TKB_W=[ /* ngày đi học (thứ 2 đến thứ 6): mỗi khung dài 3 giờ. Sửa chữ ở cột thứ 3 và ghi chú ở cột thứ 4 */
    ['00:00','03:00','Ngủ','Nghỉ ngơi'],
    ['03:00','06:00','Ngủ',''],
    ['06:00','09:00','Dậy, ăn sáng, đến trường',''],
    ['09:00','12:00','Đi học','Các môn buổi sáng'],
    ['12:00','15:00','Ăn trưa, nghỉ ngơi',''],
    ['15:00','18:00','Đi học hoặc học thêm','Việc buổi chiều'],
    ['18:00','21:00','Ăn tối, học bài',''],
    ['21:00','24:00','Chơi game, nghe nhạc','']
  ];
  var TKB_S=[ /* thứ 7 */
    ['00:00','03:00','Thức khuya, chơi game',''],
    ['03:00','06:00','Ngủ',''],
    ['06:00','09:00','Ngủ nướng',''],
    ['09:00','12:00','Dậy, ăn sáng, việc riêng',''],
    ['12:00','15:00','Ăn trưa, nghỉ ngơi',''],
    ['15:00','18:00','Dịch mod, việc riêng',''],
    ['18:00','21:00','Ăn tối, đọc truyện, xem phim',''],
    ['21:00','24:00','Chơi game, nghe nhạc','']
  ];
  var TKB_U=[ /* chủ nhật */
    ['00:00','03:00','Ngủ',''],
    ['03:00','06:00','Ngủ',''],
    ['06:00','09:00','Ngủ nướng',''],
    ['09:00','12:00','Dậy, ăn sáng, việc riêng',''],
    ['12:00','15:00','Ăn trưa, nghỉ ngơi',''],
    ['15:00','18:00','Dọn dẹp, chuẩn bị cho tuần mới',''],
    ['18:00','21:00','Ăn tối, đọc truyện, xem phim',''],
    ['21:00','24:00','Nghe nhạc, thư giãn','']
  ];
  var TKB=[TKB_W,TKB_W,TKB_W,TKB_W,TKB_W,TKB_S,TKB_U];
  /* dòng còn để mẫu [..] thì ẩn */
  TKB=TKB.map(function(d){return d.filter(function(r){return !PH(r[2])}).map(function(r){return [r[0],r[1],r[2],PH(r[3])?'':r[3]]})});
  var TKB_D=[['Thứ 2','T2'],['Thứ 3','T3'],['Thứ 4','T4'],['Thứ 5','T5'],['Thứ 6','T6'],['Thứ 7','T7'],['Chủ nhật','CN']];
  (function(){
    var tabs=document.getElementById('tkbtabs'),list=document.getElementById('tkblist'),cap=document.getElementById('tkbcap');
    if(!tabs||!list)return;
    function vn(){ /* giờ Việt Nam: thứ (0 = Thứ 2) và số phút trong ngày */
      var now=new Date();
      try{
        if(!FV)FV=new Intl.DateTimeFormat('en-US',{weekday:'short',hour:'2-digit',minute:'2-digit',hourCycle:'h23',timeZone:'Asia/Ho_Chi_Minh'});
        var o={};FV.formatToParts(now).forEach(function(p){o[p.type]=p.value});
        var wd=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].indexOf(o.weekday);
        if(wd>-1)return {d:wd,m:(+o.hour%24)*60+(+o.minute)};
      }catch(e){}
      return {d:(now.getDay()+6)%7,m:now.getHours()*60+now.getMinutes()};
    }
    function mins(t){var a=t.split(':');return (+a[0])*60+(+a[1])}
    var sel=vn().d;
    function renderTabs(){
      var td=vn().d;
      tabs.innerHTML=TKB_D.map(function(x,i){
        return '<button type="button" role="tab" id="tkbt'+i+'" data-i="'+i+'" aria-selected="'+(i===sel)+'" tabindex="'+(i===sel?0:-1)+'"'+(i===td?' class="today"':'')+'>'+esc(T(x[1]))+'<small>'+(i===td?esc(T('Hôm nay')):'')+'</small></button>';
      }).join('');
      /* đọc kích thước sau khi vẽ xong khung hình, tránh ép tính bố cục lúc đang tải trang */
      requestAnimationFrame(function(){var a=tabs.querySelector('[aria-selected="true"]');if(a)tabs.scrollLeft=a.offsetLeft-(tabs.clientWidth-a.offsetWidth)/2});
    }
    function renderList(){
      var n=vn(),td=n.d,rows=TKB[sel]||[];
      cap.textContent=T(TKB_D[sel][0])+(sel===td?' · '+T('Hôm nay'):'');
      list.setAttribute('aria-labelledby','tkbt'+sel);
      function tki(t){t=t.toLowerCase();return /thức khuya/.test(t)?'moon':/ngủ/.test(t)?'bed':/dậy/.test(t)?'sunrise':/đi học/.test(t)?'cap':/dịch mod/.test(t)?'translate':/dọn dẹp/.test(t)?'broom':/ăn tối|ăn trưa/.test(t)?'utensils':/chơi game/.test(t)?'gamepad':/nghe nhạc/.test(t)?'headphones':'clock'}
      list.innerHTML=rows.length?rows.map(function(r){
        var on=sel===td&&n.m>=mins(r[0])&&n.m<mins(r[1]);
        return '<li'+(on?' class="now"':'')+'><time>'+esc(r[0])+' – '+esc(r[1])+'</time><div><b>'+icn(tki(r[2]))+esc(T(r[2]))+'</b>'+(r[3]?'<p>'+esc(T(r[3]))+'</p>':'')+(on?'<span class="nw"><span class="dot"></span>'+esc(T('Đang diễn ra'))+'</span>':'')+'</div></li>';
      }).join(''):'<li><time>–</time><div><b>'+esc(T('Chưa có lịch'))+'</b></div></li>';
    }
    function render(){renderTabs();renderList()}
    function pick(i){sel=i;render()}
    tabs.addEventListener('click',function(e){var b=e.target.closest('button');if(b)pick(+b.getAttribute('data-i'))});
    tabs.addEventListener('keydown',function(e){
      var k=e.key,d=k==='ArrowRight'?1:k==='ArrowLeft'?-1:0;if(!d)return;
      e.preventDefault();pick((sel+d+7)%7);var b=document.getElementById('tkbt'+sel);if(b)b.focus();
    });
    render();
    /* cập nhật khung giờ "đang diễn ra" mỗi phút, và khi quay lại tab */
    setInterval(function(){if(!document.hidden)renderList()},60000);
    document.addEventListener('visibilitychange',function(){if(!document.hidden)renderList()});
    document.addEventListener('langchange',render);
  })();
  /* ===== ba game dạo này dạng thẻ bài: dữ liệu lấy từ DATA.game (sửa ở đó). Bấm thẻ để mở chi tiết ===== */
  (function(){
    var hand=document.getElementById('gamehand'),box=document.getElementById('gm');if(!hand||!box)return;
    var G=DATA.game.items.slice(0,3),opener=null,closeB=document.getElementById('gmx');
    function buildHand(){hand.innerHTML=G.map(function(x,i){
      var im=x.img?'<img src="'+esc(x.img)+'" alt=""'+(x.fb?' data-f="'+esc(x.fb)+'"':'')+' loading="lazy" decoding="async" onerror="'+FBERR+'">':'';
      return '<button class="gc" type="button" role="listitem" data-i="'+i+'" style="--i:'+i+'" aria-label="'+esc(x.t)+'">'+
        '<span class="gf ph" data-i="">'+(x.ic?icn(x.ic):'')+im+'</span>'+
        '<span class="gi tl" aria-hidden="true">'+(x.ic?icn(x.ic):'')+'</span><span class="gi br" aria-hidden="true">'+(x.ic?icn(x.ic):'')+'</span>'+
        '<span class="gn">'+esc(x.t)+'<small>'+esc(x.s||'')+'</small></span></button>';
    }).join('')}
    buildHand();document.addEventListener('langchange',buildHand);
    function open(i,from){
      var x=G[i];opener=from||null;
      var ph=document.getElementById('gmph');
      ph.innerHTML=(x.ic?icn(x.ic):'')+(x.img?'<img loading="lazy" decoding="async" src="'+esc(x.img)+'" alt="'+esc(x.t)+'"'+(x.fb?' data-f="'+esc(x.fb)+'"':'')+' onerror="'+FBERR+'">':'');
      document.getElementById('gmt').textContent=T(x.t);
      document.getElementById('gmm').textContent=T(x.m)+(x.s?' · '+T(x.s):'');
      document.getElementById('gmtags').innerHTML=(x.tags||[]).map(function(t){return '<span class="gtag">'+esc(t)+'</span>'}).join('');
      document.getElementById('gmd').textContent=T(x.d||'');
      document.getElementById('gmw').textContent=T(x.w||'');
      ['gmd','gmw'].forEach(function(id){var e=document.getElementById(id),h=e.previousElementSibling,on=!!e.textContent;e.style.display=on?'':'none';if(h)h.style.display=on?'':'none'});
      var l=document.getElementById('gml');if(x.link){l.href=x.link;l.hidden=false}else l.hidden=true;
      document.getElementById('gmv').href='#/game/'+x.id;
      box.hidden=false;document.body.style.overflow='hidden';closeB.focus();
    }
    function close(){box.hidden=true;document.body.style.overflow='';if(opener)opener.focus()}
    hand.addEventListener('click',function(e){var b=e.target.closest('.gc');if(b)open(+b.getAttribute('data-i'),b)});
    closeB.addEventListener('click',close);
    box.addEventListener('click',function(e){if(e.target===box)close()});
    document.getElementById('gmv').addEventListener('click',function(){box.hidden=true;document.body.style.overflow=''});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!box.hidden)close()});
  })();
  /* ===== đợt 9: liên kết, ảnh động, Discord trực tiếp, đổi ngôn ngữ ===== */
  /* LINKS: k = tên icon, n = tên hiển thị, h = tên tài khoản của bạn, a = chữ ở nút nhỏ, u = đường dẫn. Sửa u và h cho đúng tài khoản của bạn */
  var DCU=ME.discordInvite||(ME.discordId?'https://discord.com/users/'+ME.discordId:'https://discord.com/'),dcb=document.getElementById('ctdc');if(dcb)dcb.href=DCU;
  var LINKS=[
    {k:'spotify',n:'Spotify',h:'mign',a:'Nghe cùng tôi',u:'https://open.spotify.com/user/31bsl47yi3tv4ra6fh6bwmgxclei'},
    {k:'tiktok',n:'TikTok',h:'@thuckhuyacohailamdo',a:'Theo dõi',u:'https://www.tiktok.com/@thuckhuyacohailamdo'},
    {k:'facebook',n:'Facebook',h:'megame.com.vn',a:'Kết bạn',u:'https://www.facebook.com/megame.com.vn'},
    {k:'discord',n:'Discord',h:ME.discordUser,a:ME.discordInvite?'Vào server':'Mở Discord',u:ME.discordInvite||(ME.discordId?'https://discord.com/users/'+ME.discordId:'https://discord.com/')},
    {k:'github',n:'GitHub',h:'nameisminh',a:'Theo dõi',u:'https://github.com/nameisminh'},
    {k:'x',n:'X',h:'@nameisminh',a:'Theo dõi',u:'https://x.com/nameisminh'},
    {k:'steam',n:'Steam',h:ME.steamName,a:'Xem hồ sơ',u:ME.steam},
    {k:'opgg',n:'PlayARAM',h:ME.riot,a:'Lịch sử đấu',u:ME.opgg},
    /* Muốn thêm profile khác: chép một dòng, sửa k (tên icon), n, h (tên tài khoản), u (link thật)
    {k:'youtube',n:'YouTube',h:'@ming',a:'Đăng ký',u:'https://www.youtube.com/@ming'},
    {k:'instagram',n:'Instagram',h:'ming',a:'Theo dõi',u:'https://www.instagram.com/ming'},
    */
    {k:'mail',n:'Email',h:'buicongminh081104@gmail.com',a:'Gửi thư',u:'mailto:buicongminh081104@gmail.com'}
  ];

  /* ===== PLAYLIST: dán link YouTube, Spotify hay nền tảng khác vào đây. t = tên, u = link (để trống thì hiện "Sắp cập nhật"), d = vài chữ giới thiệu ===== */
  var PLAYLISTS=[
    {t:'Vietnam songs',img:'images/nhac/vietnam-songs.jpg',u:'https://www.youtube.com/playlist?list=PLHVf9HneIWTjOiAODKlMP_rgjO724R_PS',d:'Playlist nhạc Việt tôi nghe nhiều nhất.'},
    {t:'Listen and feel',img:'images/nhac/listen-and-feel.jpg',u:'https://www.youtube.com/playlist?list=PLHVf9HneIWTjwGeV-a52daOvAwexYT8rm',d:'Playlist để thư giãn, bật lên là quên hết mọi thứ.'},
    {t:'Heal or broken heart',img:'images/nhac/heal-or-broken-heart.jpg',u:'https://open.spotify.com/playlist/4uAY7TdJVBdeEyHZ4EX26b',d:'Playlist Spotify cho lúc cần chữa lành hoặc đang tan vỡ.'}
  ];
  (function(){
    var box=document.getElementById('plgrid');if(!box)return;
    if(!PLAYLISTS.some(function(x){return !GEN(x.u)})){ /* chưa có playlist nào: ẩn cả mục, điền u ở PLAYLISTS là hiện lại */
      var ps=document.getElementById('playlist');if(ps)ps.style.display='none';
      document.querySelectorAll('a[href="#playlist"]').forEach(function(a){a.remove()});
      for(var si=SECS.length-1;si>=0;si--)if(SECS[si][0]==='playlist')SECS.splice(si,1);
      return;
    }
    function info(u){
      try{
        var x=new URL(u),h=x.hostname.replace(/^www\./,''),p=x.pathname.split('/').filter(Boolean),i;
        if(/(^|\.)youtube\.com$/.test(h)||h==='youtu.be'){
          var l=x.searchParams.get('list'),v=x.searchParams.get('v')||(h==='youtu.be'?p[0]:'');
          if(l)return{n:'YouTube',e:'https://www.youtube-nocookie.com/embed/videoseries?list='+encodeURIComponent(l),r:'16/9'};
          if(v)return{n:'YouTube',e:'https://www.youtube-nocookie.com/embed/'+encodeURIComponent(v),r:'16/9'};
          return{n:'YouTube'};
        }
        if(/(^|\.)spotify\.com$/.test(h)){
          for(i=0;i<p.length-1;i++)if(/^(playlist|album|track|artist|episode|show)$/.test(p[i]))
            return{n:'Spotify',e:'https://open.spotify.com/embed/'+p[i]+'/'+encodeURIComponent(p[i+1]),hh:/^(playlist|album|artist|show)$/.test(p[i])?352:152};
          return{n:'Spotify'};
        }
        if(/soundcloud\.com$/.test(h))return{n:'SoundCloud'};
        if(/music\.apple\.com$/.test(h))return{n:'Apple Music'};
        if(/zingmp3\.vn$/.test(h))return{n:'Zing MP3'};
        if(/nhaccuatui\.com$/.test(h))return{n:'NhacCuaTui'};
        return{n:h};
      }catch(e){return{n:''}}
    }
    function build(){
      box.innerHTML=PLAYLISTS.map(function(x,i){
        var f=x.u?info(x.u):null;
        if(!x.u)return '<div class="card off"><small class="pn">'+esc(T('Sắp cập nhật'))+'</small><h3>'+esc(T(x.t))+'</h3><p>'+esc(T(x.d||''))+'</p></div>';
        return '<div class="card" data-i="'+i+'">'+(x.img?'<div class="th ph" data-i="♪"><img src="'+esc(x.img)+'" alt="" loading="lazy" decoding="async" onerror="this.parentNode.remove()"></div>':'')+'<span class="pn">'+esc(f.n||'Link')+'</span><h3>'+esc(T(x.t))+'</h3><p>'+esc(T(x.d||''))+'</p>'
          +'<div class="pa">'+(f.e?'<button class="btn" type="button" data-pl="'+i+'">'+esc(T('Nghe ngay'))+'</button>':'')
          +'<a class="btn line" href="'+esc(x.u)+'" target="_blank" rel="noopener">'+esc(T('Mở ở app'))+'</a></div><div class="plem" hidden></div></div>';
      }).join('');
    }
    build();
    document.addEventListener('langchange',build);
    box.addEventListener('click',function(e){
      var b=e.target.closest&&e.target.closest('[data-pl]');if(!b)return;
      var x=PLAYLISTS[+b.getAttribute('data-pl')],f=info(x.u),c=b.closest('.card'),em=c.querySelector('.plem');
      if(!em.hidden){em.hidden=true;em.innerHTML='';b.textContent=T('Nghe ngay');c.classList.remove('open');return}
      var fr=document.createElement('iframe');fr.title=x.t;fr.loading='lazy';fr.src=f.e;
      fr.allow='autoplay; encrypted-media; clipboard-write; fullscreen; picture-in-picture';
      if(f.r)fr.style.aspectRatio=f.r;else fr.style.height=(f.hh||152)+'px';
      em.appendChild(fr);em.hidden=false;c.classList.add('open');b.textContent=T('Đóng');
    });
  })();

  /* ===== NHẬT KÝ GHÉ TRANG: tự ghi lại ngày bạn vào web (không cần bấm điểm danh, không có bảng xếp hạng).
     Mỗi ô là một ngày; dữ liệu lưu trong localStorage của trình duyệt, chỉ người xem thấy. ===== */
  (function(){
    var box=document.getElementById('ddbox');
    if(!box)return;
    Object.assign(EN,{"Lửa vàng": "Yellow flame", "Lửa cam": "Orange flame", "Lửa đỏ": "Red flame", "Lửa xanh": "Blue flame", "Lửa tím": "Purple flame", "Chuỗi": "Streak", "ngày": "days"});
    Object.assign(EN,{"Ngày bạn ghé trang": "Days you visited", "ngày liên tiếp": "day streak", "ngày đã ghé": "days visited", "lần gần nhất": "last visit", "hôm nay": "today", "hôm qua": "yesterday", "Chưa có": "None yet", "Mỗi ô là một ngày, 20 tuần gần nhất. Ô sáng là ngày bạn có ghé trang. Trang tự ghi lại khi bạn vào web, không cần bấm gì. Lưu ngay trong trình duyệt này, chỉ mình bạn thấy.": "Each square is a day, last 20 weeks. A lit square is a day you visited. It is recorded automatically when you open the site, no click needed. Saved in this browser only, only you can see it."});
    var W=20,KEY='ddme',days=[],mem=[];
    function pad(n){return n<10?'0'+n:''+n}
    function key(d){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())}
    function num(k){var q=k.split('-');return Math.round(Date.UTC(+q[0],+q[1]-1,+q[2])/864e5)}
    function ymd(n){var d=new Date(n*864e5);return d.getUTCFullYear()+'-'+pad(d.getUTCMonth()+1)+'-'+pad(d.getUTCDate())}
    function clean(a){var o={},r=[];(Array.isArray(a)?a:[]).forEach(function(k){if(typeof k==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(k)&&!o[k]){o[k]=1;r.push(k)}});return r.sort()}
    function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){}return null}
    function load(){try{return clean(JSON.parse(ls(KEY)||'[]'))}catch(e){return clean(mem)}}
    function save(a){mem=a;ls(KEY,JSON.stringify(a))}
    /* lửa đổi theo chuỗi: 1-2 vàng, 3-6 cam, 7-13 đỏ, 14-29 xanh, 30+ tím; càng lên bậc càng thêm lửa (tối đa 5) */
    var TIERS=[[1,'Lửa vàng'],[3,'Lửa cam'],[7,'Lửa đỏ'],[14,'Lửa xanh'],[30,'Lửa tím']];
    function tier(n){var t=0;for(var i=0;i<TIERS.length;i++)if(n>=TIERS[i][0])t=i+1;return t}
    function fl(n){
      n=+n||0;var t=tier(n),h='',i;
      for(i=0;i<Math.max(t,1);i++)h+=icn('flame');
      var ttl=t?(T('Chuỗi')+' '+n+' '+T('ngày')+' · '+T(TIERS[t-1][1])):'';
      return '<span class="ddf'+(t?' on t'+t+(n>=100?' glow':''):'')+'"'+(ttl?' title="'+esc(ttl)+'"':'')+'>'+h+'</span>';
    }
    function stats(){
      var set={};days.forEach(function(k){set[k]=1});
      var tk=key(new Date()),tn=num(tk),c=set[tk]?tn:tn-1,streak=0;
      while(set[ymd(c)]){streak++;c--}
      return {set:set,tk:tk,tn:tn,streak:streak};
    }
    /* vào trang là tự ghi hôm nay; quay lại tab sau nửa đêm thì ghi thêm ngày mới */
    function mark(){var k=key(new Date()),l=load();if(l.indexOf(k)<0){l.push(k);save(clean(l))}}
    function render(){
      days=load();var st=stats(),set=st.set,i;
      var now=new Date(),wd=(now.getDay()+6)%7,s0=st.tn-wd-(W-1)*7,lt='',lastd=days.length?days[days.length-1]:'';
      if(lastd){var d=st.tn-num(lastd);lt=d===0?T('hôm nay'):d===1?T('hôm qua'):(+lastd.slice(8)+'/'+ +lastd.slice(5,7))}else lt=T('Chưa có');
      var g='';for(i=0;i<W*7;i++){var n=s0+i,k=ymd(n);g+='<i class="'+(n>st.tn?'fu':(set[k]?'on':''))+(n===st.tn?' td':'')+'" title="'+k+'"></i>'}
      box.innerHTML='<p class="mini">'+esc(T('Ngày bạn ghé trang'))+'</p><div class="dds"><div><b>'+fl(st.streak)+st.streak+'</b><span>'+esc(T('ngày liên tiếp'))+'</span></div><div><b>'+days.length+'</b><span>'+esc(T('ngày đã ghé'))+'</span></div><div><b>'+esc(lt)+'</b><span>'+esc(T('lần gần nhất'))+'</span></div></div><div class="ddg" role="img" aria-label="'+esc(T('Ngày bạn ghé trang'))+'">'+g+'</div><p class="ddn">'+esc(T('Mỗi ô là một ngày, 20 tuần gần nhất. Ô sáng là ngày bạn có ghé trang. Trang tự ghi lại khi bạn vào web, không cần bấm gì. Lưu ngay trong trình duyệt này, chỉ mình bạn thấy.'))+'</p>';
    }
    mark();render();
    document.addEventListener('visibilitychange',function(){if(!document.hidden){mark();render()}});
    document.addEventListener('langchange',render);
  })();

  /* ===== dải năm 2026: sửa MONTHS nếu muốn đổi. Tháng hiện tại được viền sáng ===== */
  (function(){
    var yr=document.getElementById('yr');if(!yr)return;
    var MONTHS={1:'Đi học',2:'Đi học',3:'Đi học',4:'Đi học',5:'Đi học',6:'Nghỉ hè',7:'Nghỉ hè',8:'Thực tập',9:'Thực tập',10:'Làm web'};
    var EN_M=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    function build(){
      var d=new Date(),cur=d.getFullYear()===2026?d.getMonth()+1:0,h='';
      for(var m=1;m<=12;m++)h+='<div class="'+(MONTHS[m]?'on':'')+(m===cur?' now':'')+'"><b>'+(LANG==='en'?EN_M[m-1]:'T'+m)+'</b><small>'+esc(MONTHS[m]?T(MONTHS[m]):'')+'</small></div>';
      yr.innerHTML=h;
    }
    build();document.addEventListener('langchange',build);
  })();

  /* ===== bản đồ Google Maps: mặc định hiện địa chỉ của tôi, gõ ô tìm để tra chỗ khác. Chỉ tải bản đồ khi cuộn gần tới ===== */
  (function(){
    var fr=document.getElementById('mapfr'),q=document.getElementById('mapq');if(!fr||!q)return;
    var HOME=ME.address,cur=HOME,loaded=false,ad=document.getElementById('mapaddr');
    if(ad)ad.textContent=HOME;
    function enc(s){return encodeURIComponent(s)}
    function show(s){
      cur=s;
      fr.src='https://www.google.com/maps?q='+enc(s)+'&output=embed&hl='+(LANG==='en'?'en':'vi');
      document.getElementById('mapdir').href='https://www.google.com/maps/dir/?api=1&destination='+enc(s);
      document.getElementById('mapopen').href='https://www.google.com/maps/search/?api=1&query='+enc(s);
    }
    function go(){var v=q.value.trim();if(v){loaded=true;show(v)}}
    document.getElementById('mapgo').addEventListener('click',go);
    q.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();go()}});
    document.getElementById('maphome').addEventListener('click',function(){q.value='';loaded=true;show(HOME)});
    var sec=document.getElementById('map');
    document.getElementById('mapdir').href='https://www.google.com/maps/dir/?api=1&destination='+enc(HOME);
    document.getElementById('mapopen').href='https://www.google.com/maps/search/?api=1&query='+enc(HOME);
    function lazy(){if(!loaded){loaded=true;show(cur)}}
    if('IntersectionObserver' in window){
      var mo=new IntersectionObserver(function(es){if(es[0].isIntersecting){mo.disconnect();lazy()}},{rootMargin:'400px 0px'});
      mo.observe(sec);
    }else lazy();
  })();
  /* GIF: bỏ file vào images/gif/ (gif-1.gif ... gif-8.gif). Ba khung ngang giữa các mục dùng images/gif/banner-1.webp, banner-2.webp, banner-3.webp */
  var GIFS=[{src:'images/gif/gif-1.gif',w:1},{src:'images/gif/gif-2.gif'},{src:'images/gif/gif-3.gif'},{src:'images/gif/gif-4.gif'},{src:'images/gif/gif-5.gif'},{src:'images/gif/gif-6.gif',w:1},{src:'images/gif/gif-7.gif'},{src:'images/gif/gif-8.gif'}];
  /* khi tắt hiệu ứng, ảnh động chỉ hiện khung hình đầu */
  function still(img){
    if(!img||img.src.indexOf('data:')===0)return;
    function go(){try{var c=document.createElement('canvas');c.width=img.naturalWidth;c.height=img.naturalHeight;c.getContext('2d').drawImage(img,0,0);var u=c.toDataURL('image/png');img.dataset.gif=img.src;img.src=u}catch(e){}}
    if(img.complete&&img.naturalWidth)go();else img.addEventListener('load',go,{once:true});
  }
  (function(){
    var LK=LINKS.filter(function(x){return !GEN(x.u)}); /* link chưa điền thì ẩn */
    document.querySelectorAll('#contact .cta a').forEach(function(a){if(a.id!=='ctdc'&&GEN(a.getAttribute('href')))a.style.display='none'});
    function lk(x){
      var ext=x.k!=='mail';
      return '<a class="lk" href="'+esc(x.u)+'"'+(ext?' target="_blank" rel="noopener"':'')+'><span class="li">'+icn(x.k)+'</span><span class="lt"><b>'+esc(x.n)+'</b><small>'+esc(x.h)+'</small></span><span class="la">'+esc(x.a)+'</span></a>';
    }
    function build(){
      var box=document.getElementById('linkbox');
      if(box){
        box.innerHTML='<div class="lgroup">'+LK.slice(0,3).map(lk).join('')+'</div>'+(LK.length>3?'<div class="lgroup">'+LK.slice(3).map(lk).join('')+'</div>':'');
        if(calm)box.querySelectorAll('img').forEach(still);
      }
      var q=document.getElementById('qlinks');
      if(q)q.innerHTML=LK.filter(function(x){return x.k!=='mail'}).map(function(x){return '<a class="ql" role="listitem" href="'+esc(x.u)+'" target="_blank" rel="noopener">'+icn(x.k)+esc(x.n)+'</a>'}).join('');
      var f=document.getElementById('fconn');
      if(f)f.innerHTML=LK.map(function(x){return '<li><a href="'+esc(x.u)+'"'+(x.k==='mail'?'':' target="_blank" rel="noopener"')+'>'+icn(x.k)+esc(x.n)+'</a></li>'}).join('');
    }
    build();
    document.addEventListener('langchange',build);
  })();

  /* ảnh động rải đều khắp trang, vị trí cố định + xem lớn.
     Bỏ file vào images/gif/ (gif-1.gif ... gif-8.gif). Chưa có file nào thì không hiện gì. */
  (function(){
    var lb=document.getElementById('lb'),li=document.getElementById('lbi'),lc=document.getElementById('lbc'),prev=null,grp=[],gi=0;
    /* vị trí cố định (không ngẫu nhiên): mỗi mục một ảnh theo thứ tự, luân phiên trái/phải, trên/dưới, to/nhỏ khác nhau */
    var pool=GIFS.map(function(x){return x.src});
    var PAT=[['r','t',8],['l','t',7],['r','b',9],['l','b',7.5],['r','t',7],['l','t',9],['r','b',7.5],['l','b',8.5]];
    var k=0;
    document.querySelectorAll('main section.s, main section.intro').forEach(function(sec){
      var b=document.createElement('button'),im=document.createElement('img'),p=PAT[k%PAT.length];
      b.type='button';b.className='gsk';b.setAttribute('aria-label',T('Xem ảnh động'));
      b.style.setProperty('--gw',p[2]+'rem');
      b.style.setProperty('--gr',(p[0]==='r'?3:-3)+'deg');
      b.style.setProperty('--gd','-'+((k*1.3)%6).toFixed(1)+'s');
      if(p[0]==='l')b.classList.add('gl');
      if(p[1]==='b'||sec.classList.contains('intro'))b.classList.add('gb');
      im.alt='GIF';im.loading='lazy';im.decoding='async';im.src=pool[k%pool.length];k++;
      im.onerror=function(){b.remove()};
      b.appendChild(im);sec.appendChild(b);
      if(calm)still(im);
    });
    if(calm)document.querySelectorAll('.gbn img').forEach(still);
    once('.gsk',.3,function(el){el.classList.add('in')});
    /* phủ ASCII lên ảnh GIF (ảnh động nổi trong từng mục và 3 khung ngang) khi chúng cuộn vào màn hình */
    if('IntersectionObserver' in window){
      var gio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){gio.unobserve(e.target);if(window.AXR)AXR.cover(e.target)}})},{threshold:.35});
      document.querySelectorAll('.gsk,.gbn').forEach(function(n){gio.observe(n)});
    }
    document.addEventListener('click',function(e){
      var b=e.target.closest&&e.target.closest('.gsk'),m=b&&b.querySelector('img');if(!m)return;
      grp=[];lb.classList.remove('multi');prev=b;li.src=m.dataset.gif||m.src;lc.textContent='';lb.hidden=false;document.body.style.overflow='hidden';
    });
    /* bấm vào ảnh (ảnh LoL, ảnh của tôi, "Vài tấm ảnh", ảnh ở trang chi tiết) thì xem lớn ngay tại trang, không nhảy link */
    var ZSEL='.shot,.gallery .ph,.g3d .ph,.avf .me,.detail .ph,.log .lgph,.gbn';
    function zoomable(){document.querySelectorAll(ZSEL).forEach(function(el){
      if(el.__z||!el.querySelector('img'))return;el.__z=1;
      if(el.closest('.g3d'))return; /* ảnh 3D: bàn phím điều khiển ở khung, không biến từng ảnh thành 1 điểm Tab */
      if(!/^(A|BUTTON)$/.test(el.tagName)){el.tabIndex=0;el.setAttribute('role','button')}
      el.setAttribute('aria-label',T('Xem ảnh'));
    })}
    /* nhóm ảnh để chuyển qua lại: các ảnh xem được cùng nằm trong một khung (vd. cả mục "Vài tấm ảnh"), chỉ lấy ảnh đang hiện */
    function srcOf(c){var m=c.querySelector('img');return m?(m.getAttribute('src')||''):''}
    function groupOf(el){
      var g3=el.closest('.g3d'),par=el.parentElement;if(!par)return [el];
      /* ảnh xoay 3D: khung nhân mỗi ảnh ra nhiều ô cho đủ hình dạng, nên chỉ lấy mỗi ảnh một lần, theo thứ tự data-i */
      var all=g3?[].slice.call(g3.querySelectorAll('.ph')):[].slice.call(par.children),seen={},g=[];
      all.forEach(function(c){
        if(!c.matches(ZSEL)||c.__on===false||!c.getClientRects().length)return;
        var u=srcOf(c);if(!u||seen[u])return;seen[u]=1;g.push(c);
      });
      if(g3)g.sort(function(a,b){return (+a.getAttribute('data-i')||0)-(+b.getAttribute('data-i')||0)});
      return g.length?g:[el];
    }
    function showAt(i){
      var el=grp[i],m=el&&el.querySelector('img');if(!m)return;
      gi=i;prev=el;li.src=m.currentSrc||m.src;li.alt=m.alt||'';
      lc.textContent=(m.alt||'')+(grp.length>1?(m.alt?' · ':'')+(i+1)+' / '+grp.length:'');
      lb.classList.toggle('multi',grp.length>1);
      if(grp.length>1){var nx=grp[(i+1)%grp.length].querySelector('img');if(nx&&nx.src)(new Image()).src=nx.currentSrc||nx.src}
    }
    function step(d){if(grp.length<2)return;showAt((gi+d+grp.length)%grp.length)}
    function zoomOpen(el){
      var m=el.querySelector('img');if(!m||!m.getAttribute('src'))return;
      grp=groupOf(el);var u0=srcOf(el),i0=0;grp.forEach(function(c,k){if(srcOf(c)===u0)i0=k});showAt(i0);lb.hidden=false;document.body.style.overflow='hidden';
    }
    document.getElementById('lbp').addEventListener('click',function(e){e.stopPropagation();step(-1)});
    document.getElementById('lbx').addEventListener('click',function(e){e.stopPropagation();step(1)});
    (function(){var x0=0,y0=0;
      lb.addEventListener('touchstart',function(e){var t=e.touches[0];x0=t.clientX;y0=t.clientY},{passive:true});
      lb.addEventListener('touchend',function(e){var t=e.changedTouches[0],dx=t.clientX-x0,dy=t.clientY-y0;if(Math.abs(dx)>50&&Math.abs(dy)<70)step(dx<0?1:-1)},{passive:true});
    })();
    document.addEventListener('click',function(e){
      var z=e.target.closest&&e.target.closest(ZSEL);if(!z||!z.querySelector('img'))return;
      e.preventDefault();zoomOpen(z);
    });
    document.addEventListener('keydown',function(e){
      if(e.key!=='Enter'&&e.key!==' ')return;
      var z=e.target.closest&&e.target.closest(ZSEL);if(!z||z.tagName==='A'||!z.querySelector('img'))return;
      e.preventDefault();zoomOpen(z);
    });
    zoomable();addEventListener('load',zoomable);
    document.addEventListener('langchange',function(){setTimeout(zoomable,0)});
    new MutationObserver(function(){zoomable()}).observe(document.getElementById('view'),{childList:true});
    function close(){lb.hidden=true;li.removeAttribute('src');document.body.style.overflow='';grp=[];lb.classList.remove('multi');if(prev)prev.focus()}
    lb.addEventListener('click',close);
    document.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')close();else if(e.key==='ArrowLeft'){e.preventDefault();step(-1)}else if(e.key==='ArrowRight'){e.preventDefault();step(1)}});
  })();

  /* Discord trực tiếp qua Lanyard (API công khai). Cần: vào server discord.gg/lanyard bằng tài khoản của bạn, rồi điền ID ở ME.discordId */
  (function(){
    var bd=document.getElementById('presbd');if(!bd)return;
    var ID=ME.discordId,D=null,ws=null,hb=0,retry=0,NJ=false,DEV=/[?&]dev(=|&|$)/.test(location.search),WS='chưa kết nối',FS='chưa gọi';
    var STL={online:'Trực tuyến',idle:'Vắng mặt',dnd:'Đừng làm phiền',offline:'Ngoại tuyến'};
    function hms(ms){var s=Math.max(0,Math.floor(ms/1000)),h=Math.floor(s/3600),m=Math.floor(s%3600/60);s%=60;return (h?h+':'+('0'+m).slice(-2):m)+':'+('0'+s).slice(-2)}
    function asset(a){
      var l=a.assets&&(a.assets.large_image||a.assets.small_image);if(!l)return '';if(/^https?:\/\//.test(l))return l;
      if(l.indexOf('mp:external/')===0)return 'https://media.discordapp.net/external/'+l.slice(12);
      if(l.indexOf('mp:')===0)return 'https://media.discordapp.net/'+l.slice(3);
      return a.application_id?'https://cdn.discordapp.com/app-assets/'+a.application_id+'/'+l+'.png':'';
    }
    function card(ic,img,kind,title,lines,extra){
      return '<div class="act"><div class="ar2 ph" data-i="">'+icn(ic)+(img?'<img loading="lazy" decoding="async" src="'+esc(img)+'" alt="" onerror="this.remove()">':'')+'</div><div class="ab"><span class="ak">'+esc(kind)+'</span><b>'+esc(title)+'</b>'+lines+(extra||'')+'</div></div>';
    }
    var MT=Date.now();
    function withManual(x){
      if(!x||!ME.manualGame||(x.activities||[]).some(function(a){return a.type===0}))return x;
      var y={};for(var k in x)y[k]=x[k];
      y.activities=(x.activities||[]).concat([{type:0,name:ME.manualGame,details:ME.manualDetails||'',state:'',timestamps:{start:MT}}]);return y;
    }
    function render(){
      var DX=withManual(D);window.LANY=DX;document.dispatchEvent(new Event('lanyard'));
      var d=DX,st=d&&STL[d.discord_status]?d.discord_status:'offline',u=d&&d.discord_user,acts=(d&&d.activities)||[],game=null,custom=null;
      acts.forEach(function(a){if(a.type===4)custom=a});
      var sp=d&&d.listening_to_spotify&&d.spotify?d.spotify:null;
      /* mọi hoạt động khác (game, PreMiD xem YouTube, nghe nhạc, livestream...) đều được hiện, không chỉ game */
      var others=acts.filter(function(a){return a.type!==4&&!(sp&&a.type===2&&(a.id==='spotify:1'||a.name==='Spotify'))});
      /* dòng "Đang nghe" ở khung terminal: đang nghe Spotify thì hiện bài đó, không thì về chữ mặc định */
      var nl=document.getElementById('nowlisten');
      var lt=sp?(sp.song+' · '+sp.artist):'';others.forEach(function(a){if(!lt&&a.type===2)lt=a.details?(a.details+(a.state?' · '+a.state:'')):a.name});
      if(nl){if(lt){if(!nl.hasAttribute('data-def'))nl.setAttribute('data-def',nl.textContent);nl.textContent=lt}else if(nl.hasAttribute('data-def')){nl.textContent=T(nl.getAttribute('data-def'));nl.removeAttribute('data-def')}}
      var name=u?(u.global_name||u.display_name||u.username):ME.steamName,tag=u?'@'+u.username:'';
      var av=u&&u.avatar?'https://cdn.discordapp.com/avatars/'+u.id+'/'+u.avatar+'.'+(u.avatar.indexOf('a_')===0?'gif':'png')+'?size=128':'';
      var h='<div class="pw"><div><div class="pu"><div class="pav"><div class="ph" data-i="'+esc(name.charAt(0))+'">'+(av?'<img loading="lazy" decoding="async" src="'+esc(av)+'" alt="" onerror="this.remove()">':'')+'</div><span class="avdot" data-st="'+st+'"></span></div><div><b>'+esc(name)+'</b><small>'+(tag?esc(tag)+' · ':'')+esc(STL[st])+'</small></div></div>';
      if(custom&&(custom.state||(custom.emoji&&custom.emoji.name)))h+='<p class="pcs">'+(custom.emoji&&custom.emoji.name?esc(custom.emoji.name)+' ':'')+esc(custom.state||'')+'</p>';
      h+='</div><div class="pacts">';
      others.forEach(function(a){
        var K={0:'Đang chơi',1:'Đang phát trực tiếp',2:'Đang nghe',3:'Đang xem',5:'Đang thi đấu'}[a.type]||'Đang chơi',I={0:'gamepad',1:'radio',2:'music',3:'film',5:'trophy'}[a.type]||'gamepad';
        h+=card(I,asset(a),K,a.name,(a.details?'<p>'+esc(a.details)+'</p>':'')+(a.state?'<p>'+esc(a.state)+'</p>':''),(a.timestamps&&a.timestamps.start?'<p class="el" data-s="'+a.timestamps.start+'"></p>':''));
      });
      if(sp)h+=card('music',sp.album_art_url,'Đang nghe Spotify',sp.song,'<p>'+esc(sp.artist)+'</p>',sp.timestamps?'<div class="sbar"><i data-s="'+sp.timestamps.start+'" data-e="'+sp.timestamps.end+'"></i></div>':'');
      if(!others.length&&!sp)h+=card('pulse','','Ngay lúc này',st==='offline'?STL.offline:'Không làm gì cả','');
      h+='</div></div>';
      if(!ID||(NJ&&!D))h+='<p class="note">'+esc('Chưa nhận được trạng thái Discord. Hãy vào server discord.gg/lanyard bằng đúng tài khoản này, bật hiển thị hoạt động trong Discord và kiểm tra lại ID.')+'</p>';
      if(DEV){window.LDBG='websocket: '+WS+' · fetch: '+FS+' · trạng thái: '+st+' · ID: '+ID+' · hoạt động nhận được: '+(acts.length?acts.map(function(a){return 'loại '+a.type+' = '+a.name}).join(' | '):'không có');document.dispatchEvent(new Event('lanydbg'))}
      bd.innerHTML=h;tickP();
      /* thẻ người chơi ở đầu trang */
      var dot=document.getElementById('avdot'),ps=document.getElementById('pst');
      if(dot)dot.setAttribute('data-st',st);
      if(ps){ps.setAttribute('data-st',st);ps.textContent=T(STL[st])}
      if(av){var m=document.querySelector('.avf .me');if(m){var im=m.querySelector('img');if(!im){im=document.createElement('img');im.alt='';m.appendChild(im)}if(im.getAttribute('src')!==av){var lo=im.getAttribute('src');if(lo&&lo.indexOf('discordapp')<0)im.onerror=function(){im.onerror=null;im.src=lo};im.src=av}}}
    }
    function tickP(){
      if(!bd.firstChild)return;
      bd.querySelectorAll('.el').forEach(function(e){e.textContent=hms(Date.now()-(+e.getAttribute('data-s')))});
      bd.querySelectorAll('.sbar i').forEach(function(i){var s=+i.getAttribute('data-s'),e=+i.getAttribute('data-e');i.style.width=Math.min(100,Math.max(0,(Date.now()-s)/(e-s)*100)).toFixed(1)+'%'});
    }
    function connect(){
      if(!ID||!window.WebSocket)return;
      try{ws=new WebSocket('wss://api.lanyard.rest/socket')}catch(e){return}
      ws.onopen=function(){retry=0;WS='đã mở';if(DEV)render()};
      ws.onmessage=function(m){
        var j;try{j=JSON.parse(m.data)}catch(e){return}
        if(j.op===1){
          ws.send(JSON.stringify({op:2,d:{subscribe_to_id:ID}}));
          clearInterval(hb);hb=setInterval(function(){try{ws.send(JSON.stringify({op:3}))}catch(e){}},j.d.heartbeat_interval);
        }else if(j.op===0&&j.d){WS='nhận dữ liệu ('+(j.t||'?')+')';D=j.d;render()}
      };
      ws.onclose=function(){clearInterval(hb);var wait=Math.min(30000,3000*(++retry));setTimeout(function(){if(!document.hidden){connect();return}document.addEventListener('visibilitychange',function f(){if(document.hidden)return;document.removeEventListener('visibilitychange',f);connect()})},wait)};
      ws.onerror=function(){WS='lỗi kết nối';try{ws.close()}catch(e){}if(DEV)render()};
    }
    render();
    if(ID){
      fetch('https://api.lanyard.rest/v1/users/'+encodeURIComponent(ID)).then(function(r){return r.json()}).then(function(j){FS=j&&j.success?'ok':'thất bại: '+((j&&j.error&&j.error.message)||'không rõ');if(j&&j.success&&!D){D=j.data;render()}else if(j&&j.success===false){NJ=true;try{console.warn('Lanyard chưa thấy tài khoản Discord này. Vào discord.gg/lanyard bằng chính tài khoản đó rồi tải lại trang. Thêm ?dev vào link để thấy ghi chú trên trang.')}catch(e){}render()}}).catch(function(){FS='không gọi được (mạng hoặc bị chặn)';if(DEV)render()});
      connect();
    }
    setInterval(function(){if(!document.hidden)tickP()},1000);
    document.addEventListener('langchange',render);
  })();

  /* ===== góc chơi: test chuột, test bàn phím, combo ===== */
  (function(){
    function $(id){return document.getElementById(id)}
    var tabs=document.querySelectorAll('#lab .labtabs button'),P={mouse:$('lab-mouse'),kb:$('lab-kb'),combo:$('lab-combo'),spk:$('lab-spk'),mic:$('lab-mic'),rank:$('lab-rank')},stops=[];
    if(!tabs.length||!P.mouse)return;
    function stopAll(){stops.forEach(function(f){f()})}
    document.addEventListener('visibilitychange',function(){if(document.hidden)stopAll()});
    function modeBar(el,cb){el.addEventListener('click',function(e){var b=e.target.closest('button[data-m]');if(!b)return;el.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});cb(b.getAttribute('data-m'))})}
    tabs.forEach(function(b){b.addEventListener('click',function(){
      var t=b.getAttribute('data-t');stopAll();
      tabs.forEach(function(x){x.setAttribute('aria-selected',x===b?'true':'false')});
      Object.keys(P).forEach(function(k){if(P[k])P[k].hidden=(k!==t)});
      if(t==='rank')document.dispatchEvent(new Event('rankopen'));
    })});

    /* --- test chuột: phát hiện double click --- */
    (function(){
      var pad=$('cpad'),nE=$('mck'),dE=$('mdc'),mE=$('mmn'),lE=$('mlast'),log=$('dlog'),msg=$('dmsg'),thB=$('mth'),th=80,n=0,bad=0,min=0,lastT={},chips={},NM={'0':'Chuột trái','1':'Chuột giữa','2':'Chuột phải'};
      document.querySelectorAll('.lchips [data-b]').forEach(function(c){chips[c.getAttribute('data-b')]=c});
      function chip(b){var c=chips[b];if(!c)return;c.classList.add('on');clearTimeout(c._t);c._t=setTimeout(function(){c.classList.remove('on')},260)}
      function verdict(){msg.textContent=n<10?T('Bấm chậm từng cái, mỗi lần một cái. Cần ít nhất 10 lần để kết luận.'):bad?T('Có dấu hiệu chuột bị double click')+': '+bad+' / '+n:T('Chưa thấy dấu hiệu double click')+' ('+n+')'}
      function reset(){n=0;bad=0;min=0;lastT={};nE.textContent='0';dE.textContent='0';mE.textContent='—';lE.textContent='—';log.textContent='';verdict()}
      function hit(b){
        chip(b);var t=performance.now(),p=lastT[b],d;lastT[b]=t;n++;nE.textContent=n;
        if(p!==undefined){
          d=Math.round(t-p);lE.textContent=d+' ms';
          if(!min||d<min){min=d;mE.textContent=d+' ms'}
          if(d<th){bad++;dE.textContent=bad;var li=document.createElement('li');li.className='bad';li.textContent=T(NM[b]||NM['0'])+' · '+d+' ms';log.insertBefore(li,log.firstChild);while(log.children.length>6)log.removeChild(log.lastChild)}
        }
        verdict();
        if(!calm){pad.classList.remove('pop');void pad.offsetWidth;pad.classList.add('pop')}
      }
      pad.addEventListener('mousedown',function(e){e.preventDefault()});
      pad.addEventListener('pointerdown',function(e){e.preventDefault();hit(String(e.button>2?0:e.button))});
      pad.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();if(!e.repeat)hit('0')}});
      pad.addEventListener('contextmenu',function(e){e.preventDefault()});
      pad.addEventListener('auxclick',function(e){e.preventDefault()});
      pad.addEventListener('wheel',function(){chip('w')},{passive:true});
      thB.addEventListener('click',function(e){
        var b=e.target.closest('button');if(!b)return;
        if(b.id==='mreset'){reset();return}
        th=+b.getAttribute('data-d');thB.querySelectorAll('button[data-d]').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});
      });
      stops.push(function(){});reset();
    })();

    /* --- test bàn phím --- */
    (function(){
      var L1=[['Escape','Esc',4]],L2=[['Backquote','`',4]],L3=[['Tab','Tab',6]],L4=[['CapsLock','Caps',7]],L5=[['ShiftLeft','Shift',9]],i;
      for(i=1;i<=12;i++)L1.push(['F'+i,'F'+i,4]);
      '1234567890'.split('').forEach(function(c){L2.push(['Digit'+c,c,4])});
      L2.push(['Minus','-',4],['Equal','=',4],['Backspace','⌫',8]);
      'QWERTYUIOP'.split('').forEach(function(c){L3.push(['Key'+c,c,4])});
      L3.push(['BracketLeft','[',4],['BracketRight',']',4],['Backslash','\\',6]);
      'ASDFGHJKL'.split('').forEach(function(c){L4.push(['Key'+c,c,4])});
      L4.push(['Semicolon',';',4],['Quote',"'",4],['Enter','Enter',9]);
      'ZXCVBNM'.split('').forEach(function(c){L5.push(['Key'+c,c,4])});
      L5.push(['Comma',',',4],['Period','.',4],['Slash','/',4],['ShiftRight','Shift',11]);
      var L6=[['ControlLeft','Ctrl',5],['MetaLeft','Win',5],['AltLeft','Alt',5],['Space','Space',25],['AltRight','Alt',5],['MetaRight','Win',5],['ContextMenu','Menu',5],['ControlRight','Ctrl',5]];
      var L7=[[null,'',44],['ArrowLeft','←',4],['ArrowUp','↑',4],['ArrowDown','↓',4],['ArrowRight','→',4]];
      var kbd=$('kbd'),map={};
      kbd.innerHTML=[L1,L2,L3,L4,L5,L6,L7].map(function(r){
        return '<div class="kbr">'+r.map(function(k){return '<span class="kk"'+(k[0]?' data-c="'+k[0]+'"':'')+' style="grid-column:span '+k[2]+'">'+k[1]+'</span>'}).join('')+'</div>';
      }).join('');
      kbd.querySelectorAll('.kk[data-c]').forEach(function(e){map[e.getAttribute('data-c')]=e});
      var act=false,down={},seen={},cnt=0,roll=0,go=$('kbgo'),rs=$('kbreset'),last=$('kblast'),sn=$('kbseen'),cn=$('kbcnt'),rl=$('kbroll'),tot=Object.keys(map).length;
      function stat(){sn.textContent=Object.keys(seen).length+' / '+tot;cn.textContent=cnt;rl.textContent=roll}
      function kd(e){
        var tg=e.target&&e.target.tagName;if(tg==='INPUT'||tg==='TEXTAREA')return;
        if(!(e.ctrlKey||e.metaKey||/^F(5|11|12)$/.test(e.code)))e.preventDefault();e.stopImmediatePropagation();
        var c=e.code||e.key,el=map[c];
        if(!e.repeat&&window.__sfx)__sfx('kbkey',c);
        if(!down[c]){down[c]=1;if(el){el.classList.add('dn','seen');seen[c]=1}}
        if(!e.repeat)cnt++;
        var n=Object.keys(down).length;if(n>roll)roll=n;
        last.textContent=T('Phím vừa bấm')+': '+(e.key===' '?'Space':e.key)+' · '+c;stat();
      }
      function ku(e){e.preventDefault();e.stopImmediatePropagation();var c=e.code||e.key;delete down[c];if(map[c])map[c].classList.remove('dn')}
      function clearDown(){down={};kbd.querySelectorAll('.dn').forEach(function(x){x.classList.remove('dn')})}
      function start(){if(act)return;act=true;window.addEventListener('keydown',kd,true);window.addEventListener('keyup',ku,true);window.addEventListener('blur',clearDown);go.textContent=T('Tạm dừng');go.setAttribute('aria-pressed','true')}
      function stop(){if(!act)return;act=false;window.removeEventListener('keydown',kd,true);window.removeEventListener('keyup',ku,true);window.removeEventListener('blur',clearDown);clearDown();go.textContent=T('Tiếp tục test');go.setAttribute('aria-pressed','false')}
      function reset(){seen={};cnt=0;roll=0;clearDown();kbd.querySelectorAll('.seen').forEach(function(x){x.classList.remove('seen')});last.textContent=T('Chưa bấm phím nào');stat()}
      go.addEventListener('click',function(){paused=act;sync()});
      rs.addEventListener('click',reset);
      /* tự chạy: bật khi tab bàn phím đang mở và nhìn thấy trên màn hình */
      var paused=false,vis=false;
      function sync(){var on=vis&&!P.kb.hidden&&!document.hidden&&!paused;if(on&&!act)start();else if(!on&&act)stop()}
      if('IntersectionObserver' in window)new IntersectionObserver(function(es){vis=es[es.length-1].isIntersecting;sync()},{rootMargin:'-35% 0px -35% 0px',threshold:0}).observe(P.kb);
      tabs.forEach(function(b){b.addEventListener('click',function(){paused=false;sync()})});
      document.addEventListener('visibilitychange',sync);
      stops.push(stop);stat();
    })();

    /* --- test tốc độ gõ chữ: 60 giây, so từng từ (khu chữ), chữ cứ hiện tiếp cho tới khi hết giờ --- */
    (function(){
      function W(t){var u={},o=[];t.split(/\s+/).forEach(function(w){if(w&&!u[w]){u[w]=1;o.push(w)}});return o}
      var VI=W('tôi bạn anh em chị ông bà cha mẹ con cháu nhà cửa phố đường làng xóm biển sông núi rừng cây hoa lá cỏ trời mây gió mưa nắng sao trăng đêm ngày sáng chiều tối xuân hạ thu đông nóng lạnh mát ấm vui buồn yêu thương nhớ quên cười khóc hát múa chơi học đọc viết vẽ nghe nhìn thấy biết hiểu nghĩ muốn cần phải được có không rất quá lắm hơn nhất cùng với của cho từ đến đi về ra vào lên xuống trên dưới trong ngoài trước sau giữa bên gần xa cao thấp dài ngắn to nhỏ lớn bé già trẻ mới cũ đẹp xấu tốt hay dở nhanh chậm mạnh yếu đầy trống nặng nhẹ ngọt chua cay đắng mặn cơm cháo phở bún bánh trà cà phê sữa nước đường muối thịt cá trứng rau quả cam chanh dưa táo xe máy bàn ghế giường tủ đèn quạt sách vở bút thư tranh ảnh phim nhạc đàn guitar trống game điện thoại mạng tin thời gian giờ phút giây tuần tháng năm hôm nay mai qua lúc khi nếu thì mà nhưng vì nên cũng đã sẽ đang còn lại vẫn chỉ mọi mỗi những các một hai ba bốn sáu bảy tám chín mười trăm nghìn người chó mèo gà vịt lợn trâu bò ngựa chim tôm cua mắt mũi miệng tai tay chân đầu tim lòng tâm ý chuyện lời tiếng chữ câu bài thơ ca khúc chợ quán trường lớp thầy cô việc làm nghề tiền giá mua bán đổi giữ mở đóng bật tắt chạy bước đứng ngồi nằm ngủ thức dậy ăn uống nấu rửa giặt quét dọn gọi nói hỏi trả lời kể nhận gửi mang lấy đặt tìm chờ đợi gặp chia tay');
      var VIH=W('nguyễn khuỷu quyết thuyền nghiệp truyền khoẻ hoàng nghiêm chuyện xuyên khuyên nguyệt ngoằn nghoèo thoắt quỳnh khuấy nghiêng nguồn nghĩa ngưỡng nghịch nghẹn nghỉ nghìn ngược ngượng khuôn khuất khuếch thuở thuỷ thuận thuật thuộc thưởng thượng tuyệt tuyến tuyển truyện trường trưởng trượt chuyển chuộc chướng chương chuỗi chiếu chiều chiến chuẩn chuyên quyền quyển quỵ quặng quắt quanh quạnh quý quỷ quả quán quân quốc quên huỳnh huyền huyện huyết hoạt hoặc hoằng hoắc khoảng khoảnh khoác khoét ngoại nguệch nguyền nhuyễn nhuần nhượng nhường nhiệm nhiệt nhược phượng phường phương phiêu phiền phiến riêng rượu rường siêng suốt suýt sưởi sướng tưởng tướng tượng xuyến xuống xưởng xướng yếu yểu uyển uyên ươm ướt ướp vuông vượt vươn vường viễn việt viện khuynh kiệt kiếp kiểm kiến kiêu liệu liền liễu luyến luyện luật luồng lượng lường mướp mượn mường nguỵ nguồn ngữ ngực thiếu thiên thiết thiệt thuyết thoải thoáng thoảng thuần thủy thưa thức thực thương trắng trằn trăng trưa trừng trứng tuổi tuỳ tuần tuấn tuyết xoắn xoáy xuất xuôi xuề');
      var EN=W('the of and to in is you that it he was for on are as with his they at be this from have or by one had not but what all were when we there can an your which their said if do will each about how up out them then she many some so these would other into has more her two like him see time could no make than first been its who now people my made over did down only way find use may water long little very after words called just where most know get through back much before go good new write our me man too any day same right look think also around another came come work three word must because does part even place well such here take why help put different away again off went old number great tell men say small every found still between name should home big give air line set own under read last never us left end along while might next sound below saw something thought both few those always looked show large often together asked house world going want school important until form food keep children feet land side without boy once animal life enough took sometimes four head above kind began almost live page got earth need far hand high year mother light country father let night picture being study second soon story since white ever paper hard near sentence better best across during today however sure knew try told young sun thing whole hear example heard several change answer room sea against top turned learn point city play toward five using himself usually');
      var ENH=W('necessary extraordinary development environment responsibility opportunity communication understanding technology temperature government performance atmosphere restaurant tomorrow beautiful knowledge approximately different experience particularly immediately conversation relationship information organization international significantly independent distribution imagination civilization achievement appearance discovery adventure atmosphere beginning boundaries calendar championship characteristic circumstances comfortable community competition completely concentration confidence conscience consequence considerable construction contribution convenience conversation corporation correspondence curiosity definitely description determination disappointment discussion education electricity embarrassment emergency encouragement enthusiasm entertainment equipment especially establishment evaluation excellent exception exhausted explanation extremely familiar fascinating financial foundation frequently friendship fundamental generation grateful guarantee happiness headquarters heritage hospital hurricane identical illustrate importance impossible improvement incredible individual influence ingredient instrument intelligence interesting interpretation interrupt investigate judgement laboratory language leadership literature maintenance marvelous mechanical medicine memorable millennium misunderstand mysterious necessity neighborhood nevertheless noticeable obviously occasionally occurrence parliament participate passenger permanent personality philosophy physical pleasant popularity possibility practically preparation presentation prescription previously privilege probably procedure professional psychology punctuation qualification questionnaire reasonable recommend refrigerator reliable remember repetition representative requirement resistance restaurant revolution rhythm satisfaction scientific separate sincerely situation sophisticated spontaneous strategy structure subsequent successful sufficient suggestion supervisor surprising sympathy synonym throughout tournament traditional transportation unbelievable university unnecessary vegetable vocabulary volunteer whenever wilderness wonderful yesterday');
      function shuf(a){var i,j,t;for(i=a.length-1;i>0;i--){j=Math.random()*(i+1)|0;t=a[i];a[i]=a[j];a[j]=t}return a}
      /* lấy ngẫu nhiên KHÔNG lặp: dùng hết cả kho chữ rồi mới xáo lại */
      function pick(p,n){var o=[],q=[],last='';while(o.length<n){if(!q.length){q=shuf(p.slice());if(q.length>1&&q[q.length-1]===last)q.unshift(q.pop())}last=q.pop();o.push(last)}return o}
      /* chế độ khó: chỉ thêm chữ hoa ngẫu nhiên, không thêm dấu câu (, . ! ? ; :) cho dễ gõ; dấu thanh tiếng Việt vẫn giữ */
      function deco(w){if(Math.random()<.28)w=w.charAt(0).toUpperCase()+w.slice(1);return w}
      var LEN=60000,mode='vi',words=[],res=[],wi=0,started=false,done=false,t0=0,tm=0,typed=0,okW=0,okC=0;
      var show=$('tshow'),inp=$('tin'),go=$('tgo'),nw=$('tnew'),cu=$('tcustom'),msg=$('tmsg'),wpm=$('twpm'),cpm=$('tcpm'),acc=$('tacc'),tt=$('ttime'),bst=$('tbest'),M0=msg.textContent;
      if(!show||!inp)return;
      function best(){try{return +localStorage.getItem('typebest60')||0}catch(e){return 0}}
      function own(){return (cu.value||'').split(/\s+/).filter(Boolean)}
      function build(){
        var p=mode==='own'?own():(mode==='en'?EN:mode==='enh'?ENH:mode==='vih'?VIH:VI),o=[],i;
        if(p.length){if(mode==='own')for(i=0;i<400;i++)o.push(p[i%p.length]);else{o=pick(p,260);if(mode==='vih'||mode==='enh')o=o.map(deco)}}
        words=o;res=[];wi=0;typed=0;okW=0;okC=0;done=false;started=false;inp.value='';clearInterval(tm);paint();live();
      }
      function esc2(c){return c==='&'?'&amp;':c==='<'?'&lt;':c==='>'?'&gt;':c}
      function paint(){
        var h='',i,j,w,v=inp.value,cur,r;
        if(!words.length){show.textContent=T('Hãy nhập đoạn chữ muốn gõ vào ô phía trên trước.');return}
        for(i=0;i<words.length;i++){
          w=words[i];
          if(i<wi)h+='<span class="w '+res[i]+'">'+w.replace(/[&<>]/g,esc2)+'</span> ';
          else if(i===wi&&started&&!done){
            cur='';for(j=0;j<w.length;j++)cur+='<i class="'+(j<v.length?(v.charAt(j)===w.charAt(j)?'ok':'bad'):'')+'">'+esc2(w.charAt(j))+'</i>';
            if(v.length>w.length)cur+='<i class="bad">'+v.slice(w.length).replace(/[&<>]/g,esc2)+'</i>';
            h+='<span class="w cur" id="tcur">'+cur+'</span> ';
          }else h+='<span class="w">'+w.replace(/[&<>]/g,esc2)+'</span> ';
        }
        show.innerHTML=h;
        r=document.getElementById('tcur');if(r)show.scrollTop=Math.max(0,r.offsetTop-show.clientHeight/3);
      }
      function live(){
        var el=started?Math.min(LEN,performance.now()-t0):(done?LEN:0),left=(LEN-el)/1000,min=Math.max(el,1500)/60000;
        tt.textContent=left.toFixed(1);
        wpm.textContent=el?Math.round(okC/5/min):0;cpm.textContent=el?Math.round(okC/min):0;
        acc.textContent=typed?Math.round(100*okW/typed)+'%':'100%';
      }
      function stop(){clearInterval(tm);started=false;inp.disabled=true;go.textContent=T('Bắt đầu')}
      function finish(){
        clearInterval(tm);started=false;done=true;inp.disabled=true;inp.value='';
        var w=Math.round(okC/5);wpm.textContent=w;cpm.textContent=okC;tt.textContent='0.0';
        var m=T('Hết 1 phút')+'! '+w+' WPM · '+okW+'/'+typed+' '+T('từ đúng')+' · '+(typed?Math.round(100*okW/typed):100)+'% '+T('chính xác');
        window.__sfx&&__sfx((w>best()&&w>0)?'record':'finish');if(w>best()&&w>0){try{localStorage.setItem('typebest60',String(w))}catch(e){}m+=' · '+T('Kỷ lục mới!')}
        bst.textContent=best();msg.textContent=m;go.textContent=T('Chơi lại');paint();
      }
      function commit(w){
        if(!w||wi>=words.length)return;
        var ok=(w===words[wi]);res[wi]=ok?'ok':'bad';window.__sfx&&__sfx(ok?'wordok':'wordbad');typed++;if(ok){okW++;okC+=w.length+1}
        wi++;inp.value='';paint();live();
      }
      function begin(){
        if(mode==='own'&&!own().length){msg.textContent=T('Hãy nhập đoạn chữ muốn gõ vào ô phía trên trước.');cu.focus();return}
        build();started=true;t0=performance.now();window.__sfx&&__sfx('start');inp.disabled=false;try{inp.focus({preventScroll:true})}catch(e){inp.focus()}
        show.scrollTop=0;try{show.scrollIntoView({block:'start',behavior:'auto'})}catch(e){}
        tm=setInterval(function(){if(performance.now()-t0>=LEN)finish();else live()},100);
        go.textContent=T('Làm lại');msg.textContent=T('Đang tính giờ... gõ từng từ, bấm cách để sang từ mới.');paint();
      }
      inp.addEventListener('input',function(){
        if(!started)return;
        var v=inp.value;
        if(/\s/.test(v)){commit(v.replace(/\s+/g,''))}else{paint()}
      });
      inp.addEventListener('keydown',function(e){if(e.key==='Enter'&&started){e.preventDefault();commit(inp.value.trim())}});
      go.addEventListener('click',begin);
      nw.addEventListener('click',function(){stop();build();msg.textContent=T(M0)});
      cu.addEventListener('input',function(){if(!started){build()}});
      modeBar($('tmode'),function(m){stop();mode=m;cu.hidden=(m!=='own');build();if(m==='own')cu.focus();msg.textContent=T(M0)});
      stops.push(stop);bst.textContent=best();build();
    })();

    /* --- combo: bảng điều khiển trong Góc chơi (phần hiện chữ COMBO nằm ở script riêng cho cả trang) --- */
    (function(){
      var nowE=$('cbnow'),bestE=$('cbbest'),tg=$('cbtoggle'),rs=$('cbreset'),pad=$('cbpad');
      if(!nowE)return;
      function upd(){var C=window.__combo;if(!C)return;nowE.textContent=C.n();bestE.textContent=C.best();tg.textContent=T(C.on()?'Đang bật combo':'Đang tắt combo');tg.setAttribute('aria-pressed',C.on()?'true':'false')}
      tg.addEventListener('click',function(){var C=window.__combo;if(C){C.setOn(!C.on());upd()}});
      rs.addEventListener('click',function(){var C=window.__combo;if(C){C.clearBest();upd()}});
      pad.addEventListener('pointerdown',function(e){e.preventDefault()});
      document.addEventListener('combo',upd);setTimeout(upd,0);
    })();

    /* --- test loa trái/phải và test micro (Web Audio). Tắt hết khi đổi tab, ẩn trang hoặc rời trang --- */
    (function(){
      var AC=window.AudioContext||window.webkitAudioContext;
      var spk={pl:$('spl'),pr:$('spr'),pb:$('spb'),ps:$('sps'),px:$('spx'),v:$('spv'),vv:$('spvv'),f:$('spf'),fv:$('spfv'),msg:$('spmsg'),L:$('lrL'),R:$('lrR')};
      var mic={go:$('mcgo'),rec:$('mcrec'),rs:$('mcreset'),db:$('mcdb'),pk:$('mcpk'),sr:$('mcsr'),cv:$('mcv'),au:$('mcau'),msg:$('mcmsg'),pn:$('lab-mic')};
      if(!spk.pl||!mic.go)return;
      var SM0=spk.msg.textContent,MM0=mic.msg.textContent;
      /* ---------- loa ---------- */
      var ac=null,cur=null,timers=[],lraf=0;
      function light(l,r){spk.L.style.setProperty('--v',l);spk.R.style.setProperty('--v',r)}
      function stopSpk(){
        timers.forEach(clearTimeout);timers=[];cancelAnimationFrame(lraf);lraf=0;
        if(cur){try{cur.o.stop()}catch(e){}try{cur.o.disconnect();cur.g.disconnect();cur.p.disconnect()}catch(e){}cur=null}
        light(0,0);
        if(ac){try{ac.close()}catch(e){}ac=null}
      }
      function mk(){
        if(!AC||!AC.prototype.createStereoPanner){spk.msg.textContent=T('Trình duyệt này chưa hỗ trợ chia loa trái/phải.');return null}
        stopSpk();ac=new AC();
        var o=ac.createOscillator(),g=ac.createGain(),p=ac.createStereoPanner();
        o.type='sine';o.frequency.value=+spk.f.value;g.gain.value=0;o.connect(g);g.connect(p);p.connect(ac.destination);
        cur={o:o,g:g,p:p};return cur;
      }
      function vol(){return spk.v.value/100}
      function beeps(pan){
        var c=mk();if(!c)return;var t=ac.currentTime+.06,v=vol(),i,a;
        c.p.pan.value=pan;
        for(i=0;i<3;i++){a=t+i*.55;c.g.gain.setValueAtTime(0,a);c.g.gain.linearRampToValueAtTime(v,a+.02);c.g.gain.setValueAtTime(v,a+.35);c.g.gain.linearRampToValueAtTime(0,a+.4)}
        c.o.start(t);c.o.stop(t+3*.55+.05);
        var l=pan<=0?1:(pan===0?1:0),r=pan>=0?1:0;if(pan===0){l=1;r=1}
        for(i=0;i<3;i++){(function(k){timers.push(setTimeout(function(){light(l,r)},60+k*550));timers.push(setTimeout(function(){light(0,0)},60+k*550+400))})(i)}
        timers.push(setTimeout(function(){stopSpk();spk.msg.textContent=T('Xong. Bạn nghe đúng bên chưa? Bấm lại để thử tiếp.')},60+3*550+120));
        spk.msg.textContent=pan<0?T('Đang phát ở loa TRÁI. Nếu tiếng kêu bên phải thì loa hoặc tai nghe đang bị đảo bên.'):pan>0?T('Đang phát ở loa PHẢI. Nếu tiếng kêu bên trái thì loa hoặc tai nghe đang bị đảo bên.'):T('Đang phát cả hai loa. Tiếng nên nằm chính giữa, đều hai bên.');
      }
      function sweep(){
        var c=mk();if(!c)return;var t=ac.currentTime+.06,v=vol(),D=3;
        c.p.pan.setValueAtTime(-1,t);c.p.pan.linearRampToValueAtTime(1,t+D);c.p.pan.linearRampToValueAtTime(-1,t+2*D);
        c.g.gain.setValueAtTime(0,t);c.g.gain.linearRampToValueAtTime(v,t+.05);c.g.gain.setValueAtTime(v,t+2*D-.05);c.g.gain.linearRampToValueAtTime(0,t+2*D);
        c.o.start(t);c.o.stop(t+2*D+.05);
        spk.msg.textContent=T('Tiếng chạy từ trái sang phải rồi quay lại. Nghe có liền mạch, không bị đứt hay lệch một bên không?');
        (function loop(){
          lraf=requestAnimationFrame(loop);if(!ac)return;
          var x=(ac.currentTime-t)/D;if(x<0)return;
          if(x>=2){stopSpk();spk.msg.textContent=T('Xong. Bạn nghe đúng bên chưa? Bấm lại để thử tiếp.');return}
          var pan=x<1?-1+2*x:1-2*(x-1);light((1-pan)/2,(1+pan)/2);
        })();
      }
      spk.pl.addEventListener('click',function(){beeps(-1)});
      spk.pr.addEventListener('click',function(){beeps(1)});
      spk.pb.addEventListener('click',function(){beeps(0)});
      spk.ps.addEventListener('click',sweep);
      spk.px.addEventListener('click',function(){stopSpk();spk.msg.textContent=SM0});
      spk.v.addEventListener('input',function(){spk.vv.textContent=spk.v.value+'%'});
      spk.f.addEventListener('input',function(){spk.fv.textContent=spk.f.value+' Hz';if(cur)cur.o.frequency.value=+spk.f.value});
      /* ---------- micro ---------- */
      var st=null,mctx=null,an=null,buf=null,mraf=0,peak=-Infinity,heard=false,t0=0,mr=null,mchunks=[],mtimer=0,aurl='',g2=mic.cv.getContext('2d'),acc='#8bf0a8';
      function dbOf(x){return x>1e-5?Math.max(-90,20*Math.log10(x)):-90}
      function setP(k,v){mic.pn.style.setProperty(k,v)}
      function resetPeak(){peak=-Infinity;mic.pk.textContent='—';setP('--pk',0)}
      function stopRec(){clearInterval(mtimer);if(mr&&mr.state!=='inactive'){try{mr.stop()}catch(e){}}mr=null}
      function stopMic(){
        cancelAnimationFrame(mraf);mraf=0;stopRec();
        if(st){st.getTracks().forEach(function(x){x.stop()});st=null}
        if(mctx){try{mctx.close()}catch(e){}mctx=null}
        an=null;mic.go.textContent=T('Bật micro');mic.rec.disabled=true;mic.rec.textContent=T('Ghi 5 giây rồi nghe lại');
        mic.db.textContent='—';setP('--lv',0);g2.clearRect(0,0,mic.cv.width,mic.cv.height);
      }
      function draw(){
        mraf=requestAnimationFrame(draw);if(!an)return;
        an.getFloatTimeDomainData(buf);
        var i,s=0,mx=0,v,W=mic.cv.width,H=mic.cv.height;
        for(i=0;i<buf.length;i++){v=buf[i];s+=v*v;if(v<0)v=-v;if(v>mx)mx=v}
        var rms=Math.sqrt(s/buf.length),db=dbOf(rms),pdb=dbOf(mx);
        mic.db.textContent=db<=-90?'-∞':db.toFixed(0);
        setP('--lv',Math.max(0,Math.min(1,(db+70)/70)).toFixed(3));
        if(pdb>peak){peak=pdb;mic.pk.textContent=peak<=-90?'—':peak.toFixed(0);setP('--pk',Math.max(0,Math.min(100,(peak+70)/70*100)).toFixed(1))}
        if(peak>-45&&!heard){heard=true;mic.msg.textContent=T('Micro đang nhận được tiếng. Bấm "Ghi 5 giây rồi nghe lại" để nghe giọng mình.')}
        else if(!heard&&performance.now()-t0>4000&&peak<-60)mic.msg.textContent=T('Chưa thấy tín hiệu từ micro. Thử nói to hơn, kiểm tra micro đã bị tắt tiếng chưa, hoặc đã chọn đúng micro trong cài đặt trình duyệt và hệ điều hành chưa.');
        g2.clearRect(0,0,W,H);g2.beginPath();g2.lineWidth=2;g2.strokeStyle=acc;
        for(i=0;i<buf.length;i+=2){var x=i/(buf.length-1)*W,y=H/2-buf[i]*H*.9;if(i)g2.lineTo(x,y);else g2.moveTo(x,y)}
        g2.stroke();
      }
      function err(e){
        var n=e&&e.name,m;
        if(n==='NotAllowedError'||n==='SecurityError')m='Bạn chưa cho phép dùng micro. Bấm vào biểu tượng ổ khoá cạnh địa chỉ trang để bật lại quyền micro.';
        else if(n==='NotFoundError'||n==='OverconstrainedError')m='Không tìm thấy micro nào trên máy này.';
        else if(n==='NotReadableError')m='Micro đang bị ứng dụng khác chiếm dùng, hãy tắt ứng dụng đó rồi thử lại.';
        else m='Không bật được micro.';
        mic.msg.textContent=T(m);stopMic();
      }
      function startMic(){
        if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia||!AC){mic.msg.textContent=T('Trình duyệt hoặc địa chỉ trang này không cho dùng micro (cần mở bằng HTTPS).');return}
        mic.go.disabled=true;mic.msg.textContent=T('Đang chờ bạn cho phép dùng micro...');
        navigator.mediaDevices.getUserMedia({audio:{echoCancellation:false,noiseSuppression:false,autoGainControl:false}}).then(function(s){
          mic.go.disabled=false;
          if(!mic.pn||mic.pn.hidden){s.getTracks().forEach(function(x){x.stop()});return}
          st=s;mctx=new AC();var src=mctx.createMediaStreamSource(s);an=mctx.createAnalyser();an.fftSize=2048;an.smoothingTimeConstant=0;src.connect(an);
          buf=new Float32Array(an.fftSize);heard=false;t0=performance.now();resetPeak();
          try{acc=getComputedStyle(document.documentElement).getPropertyValue('--acc').trim()||acc}catch(e){}
          mic.sr.textContent=mctx.sampleRate+' Hz';mic.go.textContent=T('Tắt micro');mic.rec.disabled=!window.MediaRecorder;
          var tr=s.getAudioTracks()[0];mic.msg.textContent=T('Đang nghe')+(tr&&tr.label?' ('+tr.label+')':'')+'. '+T('Hãy nói hoặc vỗ tay thử.');
          draw();
        }).catch(function(e){mic.go.disabled=false;err(e)});
      }
      mic.go.addEventListener('click',function(){if(st){stopMic();mic.msg.textContent=MM0}else startMic()});
      mic.rs.addEventListener('click',resetPeak);
      mic.rec.addEventListener('click',function(){
        if(!st||!window.MediaRecorder)return;
        if(mr){stopRec();return}
        var left=5;mchunks=[];
        try{mr=new MediaRecorder(st)}catch(e){mic.msg.textContent=T('Trình duyệt này chưa hỗ trợ ghi âm.');mr=null;return}
        var me=mr;
        me.ondataavailable=function(e){if(e.data&&e.data.size)mchunks.push(e.data)};
        me.onstop=function(){
          clearInterval(mtimer);mic.rec.textContent=T('Ghi 5 giây rồi nghe lại');
          if(!mchunks.length)return;
          if(aurl)URL.revokeObjectURL(aurl);
          aurl=URL.createObjectURL(new Blob(mchunks,{type:me.mimeType||'audio/webm'}));
          mic.au.src=aurl;mic.au.hidden=false;var pp=mic.au.play();if(pp&&pp.catch)pp.catch(function(){});
          mic.msg.textContent=T('Đang phát lại đoạn vừa ghi. Giọng nghe có rõ, không rè hay nhỏ quá không?');
        };
        me.start();mic.rec.textContent=T('Đang ghi')+'... '+left+'s (bấm để dừng)';
        mtimer=setInterval(function(){left--;if(left<=0){stopRec();return}mic.rec.textContent=T('Đang ghi')+'... '+left+'s (bấm để dừng)'},1000);
      });
      function stopTools(){stopSpk();stopMic();if(mic.au){try{mic.au.pause()}catch(e){}}}
      stops.push(stopTools);
      addEventListener('pagehide',stopTools);
    })();

    Object.assign(EN,{"Test loa":"Speaker test","Test micro":"Mic test","Phát loa trái":"Play left","Phát loa phải":"Play right","Cả hai loa":"Both speakers","Quét trái → phải":"Sweep left → right","Dừng":"Stop","Loa trái":"Left speaker","Loa phải":"Right speaker","Âm lượng":"Volume","Tần số":"Frequency","Bật micro":"Turn on mic","Tắt micro":"Turn off mic","Ghi 5 giây rồi nghe lại":"Record 5 s and play back","Đặt lại đỉnh":"Reset peak","Mức hiện tại (dB)":"Current level (dB)","Đỉnh cao nhất (dB)":"Peak level (dB)","Tần số lấy mẫu":"Sample rate","Đang ghi":"Recording","Đang nghe":"Listening","Hãy nói hoặc vỗ tay thử.":"Try talking or clapping.","Trình duyệt này chưa hỗ trợ chia loa trái/phải.":"This browser does not support left/right panning.","Xong. Bạn nghe đúng bên chưa? Bấm lại để thử tiếp.":"Done. Did you hear the right side? Press again to retry.","Đang phát ở loa TRÁI. Nếu tiếng kêu bên phải thì loa hoặc tai nghe đang bị đảo bên.":"Playing on the LEFT speaker. If you hear it on the right, your speakers or headphones are swapped.","Đang phát ở loa PHẢI. Nếu tiếng kêu bên trái thì loa hoặc tai nghe đang bị đảo bên.":"Playing on the RIGHT speaker. If you hear it on the left, your speakers or headphones are swapped.","Đang phát cả hai loa. Tiếng nên nằm chính giữa, đều hai bên.":"Playing on both speakers. The sound should sit in the middle, even on both sides.","Tiếng chạy từ trái sang phải rồi quay lại. Nghe có liền mạch, không bị đứt hay lệch một bên không?":"The sound travels left to right and back. Is it smooth, with no dropouts or one-sided bias?","Micro đang nhận được tiếng. Bấm \"Ghi 5 giây rồi nghe lại\" để nghe giọng mình.":"The mic is picking up sound. Press \"Record 5 s and play back\" to hear yourself.","Chưa thấy tín hiệu từ micro. Thử nói to hơn, kiểm tra micro đã bị tắt tiếng chưa, hoặc đã chọn đúng micro trong cài đặt trình duyệt và hệ điều hành chưa.":"No signal from the mic yet. Try speaking louder, check that the mic is not muted, and that the right mic is selected in your browser and system settings.","Bạn chưa cho phép dùng micro. Bấm vào biểu tượng ổ khoá cạnh địa chỉ trang để bật lại quyền micro.":"Microphone access was not allowed. Click the lock icon next to the address bar to allow it again.","Không tìm thấy micro nào trên máy này.":"No microphone was found on this device.","Micro đang bị ứng dụng khác chiếm dùng, hãy tắt ứng dụng đó rồi thử lại.":"The mic is being used by another app. Close it and try again.","Không bật được micro.":"Could not turn on the mic.","Trình duyệt hoặc địa chỉ trang này không cho dùng micro (cần mở bằng HTTPS).":"This browser or page address does not allow the mic (the page must be opened over HTTPS).","Đang chờ bạn cho phép dùng micro...":"Waiting for you to allow the microphone...","Trình duyệt này chưa hỗ trợ ghi âm.":"This browser does not support recording.","Đang phát lại đoạn vừa ghi. Giọng nghe có rõ, không rè hay nhỏ quá không?":"Playing back the recording. Is it clear, without crackling or being too quiet?"});
    Object.assign(EN,{"Xem thêm của":"More by","Bài hát trên YouTube":"Songs on YouTube","Playlist tôi chia sẻ":"Playlists I share","Hết 1 phút":"Time is up","từ đúng":"correct words","Đang tính giờ... gõ từng từ, bấm cách để sang từ mới.":"Timer is running... type each word and press space for the next one.","Bấm Bắt đầu, đồng hồ chạy 60 giây. Gõ từng từ rồi bấm cách để sang từ tiếp theo, chữ cứ hiện tiếp cho tới khi đủ 1 phút.":"Press Start and the 60 second timer runs. Type each word and press space for the next; the text keeps coming until the minute is up.","Xong rồi":"Done","ký tự mỗi phút":"characters per minute","chính xác":"accuracy","Làm lại":"Restart","Hãy nhập đoạn chữ muốn gõ vào ô phía trên trước.":"Enter the text you want to type in the box above first.","Đang tính giờ... gõ đúng đoạn chữ phía trên.":"Timer is running... type the text above.","Bấm Bắt đầu, đồng hồ chạy ngay. Gõ hết đoạn chữ là xong và hiện tốc độ của bạn.":"Press Start and the timer runs. Finish the text to see your speed.","Đang bật combo":"Combo is on","Đang tắt combo":"Combo is off","Bấm bất kỳ đâu trên trang (chuột, chạm hoặc bàn phím) là chữ COMBO hiện ra. Ngừng bấm khoảng 1,5 giây thì combo về 0. Từ chuỗi 10 chữ bắt đầu to dần, đổi màu và rung mạnh hơn, tối đa 9999.":"Click, tap or press a key anywhere and COMBO appears. Stop for about 1.5 seconds and it resets. From 10 it grows, changes color and shakes harder, up to 9999.","Test tốc độ gõ chữ":"Typing speed test","Chữ mới":"New text","Tự nhập chữ":"Your own text"});
    Object.assign(EN,{"Trang này chỉ là một file index.html duy nhất.":"This page is just a single index.html file.","Trang web được đặt trên Cloudflare Workers, miễn phí.":"This site is hosted on Cloudflare Workers, for free.","Bấm phím T để đổi giao diện sáng hoặc tối.":"Press T to switch between light and dark.","Bấm phím M để tắt hiệu ứng nếu thấy trang bị giật.":"Press M to turn effects off if the page feels laggy.","Máy yếu thì trang tự tắt hiệu ứng cho đỡ giật.":"On weak devices the page turns effects off by itself.","Bấm phím F để xem FPS của trang, nút tròn nằm ngay trên nút này.":"Press F to see the page FPS, the round button sits right above this one.","Góc chơi có test bàn phím, test chuột, combo, phản xạ, bắn bia và nhớ dãy.":"The Playground has keyboard test, mouse test, combo, reaction, aim and memory.","Test chuột ở Góc chơi dùng để bắt lỗi double click.":"The mouse test in the Playground catches double-click faults.","Bảng xếp hạng ở Góc chơi chỉ lưu trên máy của bạn.":"Leaderboards in the Playground are saved only on your device.","Trang có hai ngôn ngữ, tiếng Việt và tiếng Anh, đổi bằng nút trên thanh menu.":"The page has two languages, Vietnamese and English, switched from the menu bar.","Gõ / hoặc Ctrl + K để tìm nhanh trong trang.":"Type / or Ctrl + K to search the page quickly.","Trang tôn trọng chế độ Do Not Track của trình duyệt.":"The page respects your browser's Do Not Track setting.","Trạng thái Discord ở mục Ngay lúc này được cập nhật trực tiếp.":"The Discord status in Right now is updated live.","Cuối trang có bản đồ để bạn tìm đường tới chỗ tôi.":"There is a map at the bottom of the page to find your way to me.","Bấm phím P để bật hoặc tắt nhạc nền.":"Press P to turn the background music on or off.","Bấm phím R để ra một điều ngẫu nhiên về tôi, như câu này.":"Press R for a random thing about me, like this one.","Rê chuột ở đầu trang sẽ thả ảnh nhỏ chạy theo chuột.":"Move your mouse at the top of the page to drop small photos.","Ảnh ở trang này trắng đen, rê chuột vào mới lên màu.":"Photos here are black and white until you hover over them.","Có một thanh tiến độ mỏng trên cùng cho biết bạn đã cuộn tới đâu.":"A thin progress bar at the top shows how far you have scrolled.","Đây là lần thứ 3 tôi làm trang web này.":"This is the third time I've built this website.","Hiện hoặc ẩn FPS":"Show or hide FPS","Hiện hoặc ẩn FPS (F)":"Show or hide FPS (F)","Lưu trên máy này":"Saved on this device","Càng thấp càng tốt. Lưu trên máy này":"Lower is better. Saved on this device","Combo · Thường":"Combo · Normal","Combo · Khó":"Combo · Hard","Phản xạ · Thường":"Reaction · Normal","Phản xạ · Khó (TB 5 lượt)":"Reaction · Hard (5-round avg)","Bắn bia · 30 giây":"Aim · 30 seconds","Nhớ dãy · Thường":"Memory · Normal","Nhớ dãy · Khó":"Memory · Hard","Độ khó":"Difficulty","Thường":"Normal","Khó: nhiều nút cùng lúc":"Hard: several keys at once","Khó: 5 lượt, có màu nhử":"Hard: 5 rounds, decoy color","Khó: đảo vị trí":"Hard: shuffled positions","Nghi bị double click":"Suspected double clicks","Khoảng cách ngắn nhất":"Shortest gap","Lần bấm gần nhất":"Latest gap","Dưới 50 ms":"Under 50 ms","Dưới 80 ms":"Under 80 ms","Dưới 120 ms":"Under 120 ms","Bấm vào đây, bấm chậm từng cái một":"Click here, slowly one at a time","Bấm chậm từng cái, mỗi lần một cái. Cần ít nhất 10 lần để kết luận.":"Click slowly, one at a time. At least 10 clicks are needed for a verdict.","Có dấu hiệu chuột bị double click":"Signs of a double-click fault","Chưa thấy dấu hiệu double click":"No double-click fault seen","Mỗi lần bấm hãy nhả hẳn tay rồi mới bấm tiếp. Nếu bạn chỉ bấm một lần mà trang ghi nhận hai lần cách nhau rất ngắn, nhiều khả năng nút chuột bị lỗi double click. Thử cả ba nút.":"Fully release between clicks. If you click once but two clicks are recorded a very short time apart, the mouse button likely has a double-click fault. Try all three buttons.","Khó: bấm tất cả mũi tên hiện ra cùng lúc (trong 0,45 giây). Từ combo 10 sẽ có 3 mũi tên.":"Hard: press all the arrows shown at once (within 0.45 s). From combo 10 there are 3 arrows.","Đừng bấm!":"Don't click!","Bấm để tiếp lượt":"Click for round","Trung bình":"Average","Khó: 5 lượt liên tiếp, tính trung bình. Có lúc màn hình chuyển vàng để nhử, đừng bấm.":"Hard: 5 rounds in a row, scored by average. Sometimes the screen turns yellow as a decoy, don't click.","Vị trí đã bị đảo! Bấm theo số.":"Positions shuffled! Press by number.","Khó: sau khi xem, các ô bị xáo trộn. Hãy nhớ theo số, không nhớ theo vị trí.":"Hard: after the preview the tiles get shuffled. Remember the numbers, not the positions."});
        Object.assign(EN,{"Góc dev":"Dev corner","Mã nguồn của trang":"The page's source","Đóng góp GitHub trong một năm và vài con số về chính file index.html này.":"A year of GitHub contributions and a few numbers about this very index.html file.","Tải index.html":"Download index.html","Phím tắt (?)":"Shortcuts (?)","Biểu đồ đóng góp GitHub trong một năm":"GitHub contributions over one year","gõ help rồi Enter":"type help and press Enter","Gõ lệnh terminal":"Type a terminal command","Xem tất cả phím tắt":"See all shortcuts","Tắt hoặc bật màu chữ":"Turn text colours off or on","Thanh trạng thái":"Status bar","Thử trang 404":"Try the 404 page","Mở một địa chỉ không tồn tại để xem trang 404":"Open an address that doesn't exist to see the 404 page","Kệ của tôi":"My shelf","Game đã chơi và góc máy":"Games I play and my setup","Game tôi đang chơi, đã phá đảo, bỏ dở hay đang muốn thử, cùng bộ máy tôi ngồi mỗi ngày.":"Games I'm playing, have finished, dropped or want to try, plus the setup I sit at every day.","Kệ game":"Game shelf","Chọn kệ":"Choose a shelf","Lọc theo trạng thái":"Filter by status","Chạm để chép ID":"Tap to copy an ID","Chạm để chép Riot ID":"Tap to copy the Riot ID","Chạm để chép tên Discord":"Tap to copy the Discord name","Tên":"Name","Phiên bản":"Version","Cập nhật":"Updated","cập nhật":"updated","Tải bản dịch":"Download translation","Có gì mới":"What's new"});
        Object.assign(EN,{"Tiếp tục test":"Resume test","Cứ gõ thử, không cần bấm gì cả. Khi phần này đang hiện trên màn hình, các phím tắt của trang tạm thời bị tắt (bấm \"Tạm dừng\" để dùng lại). Phím Windows và tổ hợp của hệ điều hành thì trình duyệt không bắt được. Cần bàn phím thật để thử.":"Just type, no need to click anything. While this section is on screen the page shortcuts are turned off (press \"Pause\" to get them back). The browser can't catch the Windows key or OS shortcuts. You need a real keyboard.","Bảng xếp hạng":"Leaderboard","Trên máy này":"On this device","Tên của bạn":"Your name","Xoá bảng":"Clear board","Chưa có ai. Chơi một ván đi!":"Nobody yet. Play a round!","Ẩn danh":"Anonymous","Phản xạ":"Reaction","Bắn bia":"Aim","Nhớ dãy":"Memory","Lần vừa rồi":"Last try","Nhanh nhất":"Fastest","Màn":"Level","Bấm để bắt đầu":"Click to start","Chờ màu xanh...":"Wait for green...","BẤM!":"CLICK!","Bấm sớm quá! Bấm để thử lại":"Too early! Click to retry","Đợi màn hình chuyển sang xanh rồi bấm thật nhanh. Bấm sớm là phải làm lại.":"Wait for the screen to turn green, then click as fast as you can. Too early and you start over.","Bấm trúng bia càng nhiều càng tốt trong 30 giây.":"Hit as many targets as you can in 30 seconds.","Bắt đầu":"Start","Xem các ô sáng lên rồi bấm lại đúng thứ tự. Mỗi màn thêm một ô.":"Watch the tiles light up, then repeat the order. Each level adds one tile.","Xem kỹ...":"Watch closely...","Tới lượt bạn":"Your turn","Sai rồi!":"Wrong!","Test bàn phím, test chuột, thử tốc độ gõ chữ và xem combo mỗi khi bạn bấm. Mọi thứ chạy ngay trên máy bạn, không gửi đi đâu.":"Test your mouse and keyboard, chain combos, check your reflexes, shoot targets or memorize sequences. High scores stay on your device and are not sent anywhere."});
  })();

  /* ===== đổi ngôn ngữ ===== */
  var LBTN=document.getElementById('lang');
  function hasT(s){return Object.prototype.hasOwnProperty.call(EN,s)}
  function trs(vi){var t=vi.trim();if(!t||!hasT(t))return vi;return vi.replace(t,function(){return EN[t]})}
  function trHTML(h){
    var d=document.createElement('div');d.innerHTML=h;
    var w=document.createTreeWalker(d,NodeFilter.SHOW_TEXT),n,l=[];
    while((n=w.nextNode()))l.push(n);
    l.forEach(function(n){n.nodeValue=trs(n.nodeValue)});
    return d.innerHTML;
  }
  function applyLang(l,save){
    LANG=l;document.documentElement.lang=l;
    if(save){try{localStorage.setItem('lang',l)}catch(e){}}
    if(LBTN){LBTN.querySelectorAll('span').forEach(function(s){s.classList.toggle('on',s.getAttribute('data-l')===l)});LBTN.setAttribute('aria-pressed',l==='en')}
    /* chữ thường */
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(n){var p=n.parentNode&&n.parentNode.nodeName;return (p==='SCRIPT'||p==='STYLE'||p==='TEXTAREA')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),n,list=[];
    while((n=w.nextNode()))list.push(n);
    list.forEach(function(n){
      var o=(n.__c!==undefined&&n.nodeValue===n.__c)?n.__o:n.nodeValue,v=l==='en'?trs(o):o;
      if(v!==n.nodeValue)n.nodeValue=v;
      if(v!==o){n.__o=o;n.__c=v}else{delete n.__o;delete n.__c}
    });
    /* thuộc tính */
    document.querySelectorAll('[title],[aria-label],[placeholder],[alt]').forEach(function(el){
      var rec=el.__a||(el.__a={});
      ['title','aria-label','placeholder','alt'].forEach(function(a){
        if(!el.hasAttribute(a))return;
        var cur=el.getAttribute(a),r=rec[a],o=(r&&cur===r.c)?r.o:cur,v=l==='en'?trs(o):o;
        if(v!==cur)el.setAttribute(a,v);
        if(v!==o)rec[a]={o:o,c:v};else delete rec[a];
      });
    });
    document.querySelectorAll('meta[name="description"],meta[property="og:description"]').forEach(function(m){
      var cur=m.content,o=(m.__c&&cur===m.__c)?m.__o:cur,v=l==='en'?trs(o):o;
      m.content=v;m.__o=o;m.__c=v;
    });
    /* tiêu đề đã tách từng từ: dựng lại từ bản gốc */
    document.querySelectorAll('h1,h2').forEach(function(h){
      if(h.__vih===undefined)return;
      h.innerHTML=l==='en'?trHTML(h.__vih):h.__vih;
      if(!calm)splitWords(h);
    });
    document.dispatchEvent(new Event('langchange'));
  }
  /* nút VI/EN: viên nền trượt tới chữ đang chọn (đo bằng offsetLeft vì cỡ nút khác nhau ở thanh menu, menu điện thoại, thanh thu nhỏ) */
  function lgPill(){
    if(!LBTN)return;var s=LBTN.querySelector('span.on');if(!s||!s.offsetWidth)return;
    var st=LBTN.style;st.setProperty('--lx',s.offsetLeft+'px');st.setProperty('--lt',s.offsetTop+'px');st.setProperty('--lw',s.offsetWidth+'px');st.setProperty('--lh',s.offsetHeight+'px');
    LBTN.classList.add('pl');
  }
  document.addEventListener('langchange',lgPill);
  if(LBTN&&window.ResizeObserver)new ResizeObserver(function(){lgPill()}).observe(LBTN);
  var lgT=0;
  function lgMotion(){var r=document.documentElement;return !calm&&r.getAttribute('data-motion')!=='off'&&!matchMedia('(prefers-reduced-motion: reduce)').matches}
  if(LBTN)LBTN.addEventListener('click',function(){
    var next=LANG==='vi'?'en':'vi',r=document.documentElement;
    if(!lgMotion()){applyLang(next,true);return}
    LBTN.classList.remove('mv');void LBTN.offsetWidth;LBTN.classList.add('mv');clearTimeout(lgT);lgT=setTimeout(function(){LBTN.classList.remove('mv')},460);
    /* đường kẻ quét dọc trang, chữ đổi theo đường kẻ. Máy yếu (≤2 nhân, ≤2 GB RAM, tiết kiệm dữ liệu) hoặc trình duyệt chưa hỗ trợ
       View Transitions thì bỏ đường quét, chữ mới chỉ hiện mờ dần (rẻ nhất) */
    var nv=navigator,weak=(nv.hardwareConcurrency&&nv.hardwareConcurrency<=2)||(nv.deviceMemory&&nv.deviceMemory<=2)||(nv.connection&&nv.connection.saveData);
    if(!weak&&document.startViewTransition&&!document.hidden&&!r.classList.contains('vtt')&&!r.classList.contains('vtl')){
      r.classList.add('vtl');r.classList.toggle('vtlr',next==='vi');
      var ln=null,done=function(){r.classList.remove('vtl','vtlr');if(ln)ln.remove()};
      try{
        var vt=document.startViewTransition(function(){applyLang(next,true);ln=document.createElement('i');ln.id='lgln';ln.setAttribute('aria-hidden','true');document.body.appendChild(ln)});
        vt.finished.then(done,done);return;
      }catch(e){done()}
    }
    applyLang(next,true);
    var m=document.querySelector('main')||document.body;
    if(m.animate)m.animate([{opacity:.35},{opacity:1}],{duration:320,easing:'ease-out'});
  });
  document.addEventListener('langchange',function(){
    gLast='';tick();
    if(STEAMD)applySteam(STEAMD,true);
    fillRows('modrows','mod');
    document.querySelectorAll('[data-count]').forEach(function(el){if(el.textContent!=='0')el.textContent=fmt(+el.getAttribute('data-count')||0)});
    mtn.title=T(motionOff?'Bật lại hiệu ứng (M)':'Tắt hiệu ứng (M)');
    dots.querySelectorAll('a').forEach(function(a,i){a.setAttribute('data-l',T(SECS[i][1]));a.setAttribute('aria-label',T(SECS[i][1]))});
    if(!view.hidden){var y=window.scrollY;routeApply();window.scrollTo({top:y,behavior:'instant'})}
  });
  /* nhật ký: mục nào có data-img / data-link thì thêm ảnh (bấm xem lớn) và nút "Xem thêm" */
  document.querySelectorAll('.log li').forEach(function(li){
    var im=li.getAttribute('data-img'),ln=li.getAttribute('data-link');
    if(im){var w=document.createElement('span'),g=document.createElement('img');w.className='lgph';g.src=im;g.alt=(li.querySelector('b')||{}).textContent||'';g.loading='lazy';g.decoding='async';g.onerror=function(){w.remove()};w.appendChild(g);li.appendChild(w)}
    if(ln&&/^https?:\/\//.test(ln)){var a=document.createElement('a');a.className='lgl';a.href=ln;a.target='_blank';a.rel='noopener';a.textContent=T('Xem thêm');li.appendChild(a)}
  });
  route();
  applyLang(LANG,false);
})();
}catch(e){console.error('[khối 41]',e)}

/* ===================== [khối 42] ===================== */
try{
(function(){
  if(!('IntersectionObserver' in window))return;
  var SEL='.gsk,.avf,.dot,.avatar.on,.eq,.band .run,.bob,.caret,.ptitle b',seen=new WeakSet();
  var io=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle('pz',!e.isIntersecting)})},{rootMargin:'80px'});
  function scan(){document.querySelectorAll(SEL).forEach(function(n){if(!seen.has(n)){seen.add(n);io.observe(n)}})}
  scan();addEventListener('load',function(){scan();setTimeout(scan,1500)});
  addEventListener('hashchange',function(){setTimeout(scan,150)});
  document.addEventListener('langchange',function(){setTimeout(scan,150)});
})();
}catch(e){console.error('[khối 42]',e)}

/* ===================== [khối 43] ===================== */
try{
(function(){var bar=document.querySelector('.bar');if(!bar)return;
var mq=matchMedia('(min-width:80rem)'),on=false,tk=false;
function hold(){if(on)return;bar.style.minHeight='';if(mq.matches)bar.style.minHeight=bar.offsetHeight+'px'}
function t(){tk=false;var y=window.scrollY||0,w=mq.matches&&(on?y>60:y>160);if(w!==on){on=w;bar.classList.toggle('mini',on)}}
function q(){if(!tk){tk=true;requestAnimationFrame(t)}}
addEventListener('scroll',q,{passive:true});
addEventListener('resize',function(){if(!mq.matches&&on){on=false;bar.classList.remove('mini')}hold();q()});
addEventListener('load',hold);hold();t();})();
}catch(e){console.error('[khối 43]',e)}

/* ===================== [khối 44] ===================== */
try{
(function(){
var view=document.getElementById('view'),stop=false;
['wheel','touchstart','keydown','mousedown'].forEach(function(t){addEventListener(t,function(){stop=true},{passive:true})});
function calm(){return matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.getAttribute('data-motion')==='off'}
function off(){var b=document.querySelector('.bar');return (b?b.offsetHeight:0)+4}
/* cuộn tới mục rồi tự chỉnh lại nếu ảnh/hiệu ứng làm trang dịch chỗ trong lúc cuộn */
function land(el,smooth){
  var n=0;stop=false;
  function y(){return Math.max(0,el.getBoundingClientRect().top+scrollY-off())}
  function fix(){if(stop||n++>5)return;if(Math.abs(el.getBoundingClientRect().top-off())>6){scrollTo({top:y(),behavior:'instant'});setTimeout(fix,220)}}
  scrollTo({top:y(),behavior:smooth?'smooth':'instant'});
  setTimeout(fix,smooth?750:100);
}
document.addEventListener('click',function(e){
  if(e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a||!view||!view.hidden)return;
  var h=a.getAttribute('href');if(h.length<2||h.charAt(1)==='/')return;
  var el=document.getElementById(h.slice(1));if(!el)return;
  e.preventDefault();if(location.hash!==h)history.pushState(null,'',h);
  land(el,!calm());
});
addEventListener('hashchange',function(){
  var h=location.hash;if(h.length<2||h.charAt(1)==='/')return;
  setTimeout(function(){if(view&&view.hidden){var el=document.getElementById(h.slice(1));if(el)land(el,false)}},60);
});
})();
}catch(e){console.error('[khối 44]',e)}

/* ===================== [khối 45] ===================== */
try{
(function(){
/* đo khung hình sau khi tải: máy giật thật sự (dưới ~30 khung/giây ba đợt liền) thì tự tắt hiệu ứng CHO LẦN XEM NÀY.
   Chỉ nhớ trong phiên (sessionStorage), không lưu vĩnh viễn: lần mở sau hiệu ứng (kể cả ASCII) lại bật. Ai đã tự chọn bật/tắt thì không đụng tới */
var r=document.documentElement;
if(r.getAttribute('data-motion')==='off'||!window.requestAnimationFrame)return;
try{var _sm=localStorage.getItem('motion');if(_sm==='on'||_sm==='off')return}catch(e){}
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var t=0,n=0,sum=0,bad=0,w=0;
function frame(ts){
  if(document.hidden){t=0;requestAnimationFrame(frame);return}
  if(t){var d=ts-t;if(d<250){sum+=d;n++}}
  t=ts;
  if(n>=90){
    bad=(1000/(sum/n))<30?bad+1:0;n=0;sum=0;w++;
    if(bad>=3){try{sessionStorage.setItem('motionauto','1')}catch(e){}r.setAttribute('data-motion','off');return}
    if(w>=6)return;
  }
  requestAnimationFrame(frame);
}
addEventListener('load',function(){setTimeout(function(){requestAnimationFrame(frame)},2500)});
})();
}catch(e){console.error('[khối 45]',e)}

/* ===================== [khối 46] ===================== */
try{
(function(){
/* bộ đếm FPS: bấm nút tròn FPS hoặc phím F. Chỉ chạy vòng đo khi đang bật */
var b=document.getElementById('fpsb'),on=false,raf=0,t0=0,n=0;
if(!b)return;
function paint(fps,ms){b.setAttribute('data-c',fps>=50?'g':fps>=30?'y':'r');b.innerHTML='<b>'+fps+'</b><small>FPS</small>';b.title=ms+' ms / khung · F'}
function frame(ts){
  if(!on)return;
  if(document.hidden||!t0){t0=ts;n=0}
  else{n++;if(ts-t0>=500){paint(Math.round(n*1000/(ts-t0)),((ts-t0)/n).toFixed(1));t0=ts;n=0}}
  raf=requestAnimationFrame(frame);
}
function set(v,save){
  on=v;b.setAttribute('aria-pressed',v?'true':'false');cancelAnimationFrame(raf);
  if(v){t0=0;n=0;b.innerHTML='<b>…</b>';raf=requestAnimationFrame(frame)}
  else{b.removeAttribute('data-c');b.innerHTML='<b>FPS</b>';b.title='Hiện hoặc ẩn FPS (F)'}
  if(save){try{localStorage.setItem('fps',v?'1':'0')}catch(e){}}
}
var nt=document.getElementById('fpsn'),ntm=0;
function note(v){if(!nt)return;clearTimeout(ntm);nt.hidden=!v;if(v)ntm=setTimeout(function(){nt.hidden=true},9000)}
b.addEventListener('click',function(){set(!on,true);note(on)});
document.addEventListener('click',function(e){if(nt&&!nt.hidden&&!nt.contains(e.target)&&!b.contains(e.target))note(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')note(false)});
document.addEventListener('keydown',function(e){
  if(e.metaKey||e.ctrlKey||e.altKey||e.repeat)return;
  var tg=e.target;if(tg&&(tg.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(tg.tagName)))return;
  if((e.key||'').toLowerCase()==='f')set(!on,true);
});
/* mặc định TỰ BẬT; chỉ tắt khi người xem đã tự tắt trước đó (lưu '0') */
try{if(localStorage.getItem('fps')!=='0')set(true,false)}catch(e){set(true,false)}
})();
}catch(e){console.error('[khối 46]',e)}

/* ===================== [khối 47] ===================== */
try{
(function(){
/* theo dõi lướt: thêm class "scrolling" lúc đang lướt, và ẩn thanh trên khi lướt xuống trên điện thoại */
var root=document.documentElement,bar=document.querySelector('.bar'),idle=0,idle2=0,last=window.scrollY||0,tk=0,mq=matchMedia('(max-width:40rem)');
function step(){
  tk=0;var y=window.scrollY||0,d=y-last;
  if(Math.abs(d)>2){root.classList.add('scrolling','scrolling2');clearTimeout(idle);clearTimeout(idle2);
    idle=setTimeout(function(){root.classList.remove('scrolling')},1000);
    idle2=setTimeout(function(){root.classList.remove('scrolling2')},3000)}
  if(bar){
    if(!mq.matches||y<80||d<-6)bar.classList.remove('hide');
    else if(y>140&&d>6)bar.classList.add('hide');
  }
  last=y;
}
addEventListener('scroll',function(){if(!tk)tk=requestAnimationFrame(step)},{passive:true});
})();
}catch(e){console.error('[khối 47]',e)}

/* ===================== [khối 48] ===================== */
try{
(function(){
/* COMBO: bấm chuột, chạm hoặc gõ phím bất kỳ thì hiện chữ COMBO và đếm. Từ 10 trở đi đổi dần theo số, tối đa 9999.
   Tối ưu: kỷ lục giữ trong bộ nhớ và chỉ ghi localStorage khi hết combo hoặc rời trang (trước đây ghi/đọc mỗi lần bấm);
   thanh đếm ngược dùng Web Animations thay vì ép trình duyệt tính lại bố cục mỗi lần bấm; chỉ đổi chữ nhãn khi thật sự đổi bậc. */
var MAX=9999,IDLE=1500,el=document.getElementById('cmb');if(!el)return;
var cl=el.querySelector('.cl'),cn=el.querySelector('.cn'),ct=el.querySelector('.ct'),root=document.documentElement;
var n=0,tm=0,on=true,bestV=0,dirty=false,lab='',bar=null,lg=Math.log(MAX/9),nbF=false,nbS=false;
var rm=!!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
try{on=localStorage.getItem('combo_on')!=='0';bestV=+localStorage.getItem('combo_best')||0}catch(e){}
function best(){return bestV}
function save(){if(!dirty)return;dirty=false;try{localStorage.setItem('combo_best',String(bestV))}catch(e){}}
var TIERS=[[9999,'MAX COMBO'],[3000,'GODLIKE'],[1000,'MEGA COMBO'],[300,'ULTRA COMBO'],[100,'SUPER COMBO'],[25,'COMBO!!'],[10,'COMBO!'],[0,'COMBO']];
function label(){for(var i=0;i<TIERS.length;i++)if(n>=TIERS[i][0])return TIERS[i][1];return 'COMBO'}
function look(){
  /* t: 0 (dưới 10) tới 1 (9999) theo thang log nên càng nhiều số càng đổi, nhưng không nhảy quá gắt */
  var t=n<10?0:Math.min(1,Math.log(n/9)/lg);
  var hue=n<10?0:Math.round(120-t*480);           /* xanh lá -> vàng -> đỏ -> tím -> xanh dương */
  hue=((hue%360)+360)%360;
  var st=el.style;
  st.setProperty('--c',n<10?'var(--white)':'hsl('+hue+' 95% 58%)');
  st.setProperty('--s',(t+(n<10?n/40:0.25)).toFixed(2));
  st.setProperty('--g',Math.round(t*28)+'px');
  return t;
}
function fx(t){
  if(rm||root.getAttribute('data-motion')==='off'||!el.animate)return;
  var a=2+t*14,r=t*5,sg=n%2?1:-1;
  cn.animate([{transform:'scale('+(1.12+t*.55)+') rotate('+(r*sg)+'deg) translate('+(a*sg)+'px,'+(-a/2)+'px)'},{transform:'scale(1) rotate(0) translate(0,0)'}],{duration:180+t*120,easing:'ease-out'});
  if(t>0)el.animate([{transform:'translate('+(a*(n%3-1))+'px,'+(a*((n+1)%3-1))+'px)'},{transform:'translate(0,0)'}],{duration:160,easing:'ease-out'});
}
function out(){
  clearTimeout(tm);tm=setTimeout(end,IDLE);
  if(ct.animate){if(bar)bar.cancel();bar=ct.animate([{transform:'scaleX(1)'},{transform:'scaleX(0)'}],{duration:IDLE,easing:'linear',fill:'forwards'})}
  else{ct.style.transition='none';ct.style.transform='scaleX(1)';void ct.offsetWidth;ct.style.transition='transform '+IDLE+'ms linear';ct.style.transform='scaleX(0)'}
}
function end(){if(n>=10&&window.__sfx)__sfx('cbreak',n);nbF=false;nbS=false;el.classList.remove('on');n=0;lab='';save();ping()}
function tierIdx(){for(var i=0;i<TIERS.length;i++)if(n>=TIERS[i][0])return TIERS.length-1-i;return 0}
function ping(){document.dispatchEvent(new Event('combo'))}
function hit(){
  if(!on)return;
  if(n<MAX)n++;
  var t=look();cn.textContent=n;
  var L=label(),ti=0;if(L!==lab){lab=L;cl.textContent=L;ti=tierIdx()}
  el.classList.add('on');
  if(n>bestV){if(!nbF&&bestV>=10&&n===bestV+1){nbF=true;nbS=true}bestV=n;dirty=true}
  var SF=window.__sfx;if(SF){if(ti>0)SF('tier',ti);else if(nbS){SF('best');nbS=false}else if(n>=3)SF('cmb',n)}
  fx(t);out();ping();
}
addEventListener('pointerdown',function(e){if(e.pointerType==='mouse'&&e.button>2)return;hit()},{capture:true,passive:true});
addEventListener('keydown',function(e){if(e.repeat||e.key==='Shift'||e.key==='Control'||e.key==='Alt'||e.key==='Meta')return;hit()},{capture:true,passive:true});
addEventListener('pagehide',save);
document.addEventListener('visibilitychange',function(){if(document.hidden)save()});
addEventListener('storage',function(e){if(e.key==='combo_best'){bestV=Math.max(bestV,+e.newValue||0);ping()}});
window.__combo={n:function(){return n},best:best,on:function(){return on},
  setOn:function(v){on=!!v;try{localStorage.setItem('combo_on',on?'1':'0')}catch(e){}if(!on){clearTimeout(tm);end()}},
  clearBest:function(){bestV=0;dirty=false;try{localStorage.removeItem('combo_best')}catch(e){}ping()}};
})();
}catch(e){console.error('[khối 48]',e)}

/* ===================== [khối 49] ===================== */
try{
/* ảnh khung avatar lấy từ CDN của Discord; bật chuyển động thì dùng bản động, tắt hiệu ứng thì dùng bản tĩnh */
(function(){var d=document.querySelector('.avdec');if(!d)return;
var B='https://cdn.discordapp.com/avatar-decoration-presets/a_94febf08c37b21ee5ed92c49ef98bf00.png?size=240',R=document.documentElement;
function calm(){return (window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)||R.getAttribute('data-motion')==='off'}
function set(){var u=B+'&passthrough='+(calm()?'false':'true');if(d.getAttribute('src')!==u)d.src=u}
if(document.readyState==='complete')setTimeout(set,300);else addEventListener('load',function(){setTimeout(set,300)});if(window.MutationObserver)new MutationObserver(function(){if(document.readyState==='complete')set()}).observe(R,{attributes:true,attributeFilter:['data-motion']});
})();
}catch(e){console.error('[khối 49]',e)}

/* ===================== [khối 50] ===================== */
try{
(function(){
/* GSAP + ScrollTrigger: chia bài ở #play, mở bản đồ ở #map, parallax ảnh ở #hobby (chỉ chạy trên máy có chuột; điện thoại và máy tính bảng không nạp GSAP, không chạy hiệu ứng nào, để cuộn nhẹ nhất).
   Chỉ nạp GSAP khi không ở chế độ lite, không tắt hiệu ứng và không bật giảm chuyển động. Đổi phiên bản ở BASE nếu cần. */
var R=document.documentElement,BASE='https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/',mm=null;
function calm(){return R.classList.contains('lite')||R.getAttribute('data-motion')==='off'||matchMedia('(prefers-reduced-motion: reduce)').matches}
var DESK='(hover:hover) and (pointer:fine) and (min-width:40.01rem)';
if(R.classList.contains('lite')||matchMedia('(prefers-reduced-motion: reduce)').matches||!matchMedia(DESK).matches)return;
function on(){
  if(mm||!window.gsap||!window.ScrollTrigger)return;
  gsap.registerPlugin(ScrollTrigger);ScrollTrigger.config({ignoreMobileResize:true});
  mm=gsap.matchMedia();
  mm.add(DESK,function(){
    /* parallax ảnh ở #hobby */
    gsap.utils.toArray('.hob .ph img').forEach(function(im){
      var h=im.closest('.hob');if(!h)return;
      gsap.set(im,{'--pz':1});
      gsap.fromTo(im,{'--py':-8},{'--py':8,ease:'none',scrollTrigger:{trigger:h,start:'top bottom',end:'bottom top',scrub:true}});
    });
    /* khung bản đồ mở ra rồi kéo camera lùi */
  });
}
function off(){if(mm){mm.revert();mm=null}}
function load(f,cb){var s=document.createElement('script');s.src=BASE+f;s.onload=cb;document.head.appendChild(s)}
/* nạp lười: chỉ tải GSAP khi người xem cuộn gần tới một khối cần nó (cách 1200px) */
var loaded=false;
function boot(){if(loaded||calm())return;loaded=true;load('gsap.min.js',function(){load('ScrollTrigger.min.js',function(){if(!calm())on()})})}
var tg=['#hobby','.mapfr'].map(function(q){return document.querySelector(q)}).filter(Boolean);
if('IntersectionObserver' in window&&tg.length){
  var io=new IntersectionObserver(function(es){if(es.some(function(e){return e.isIntersecting})){io.disconnect();boot()}},{rootMargin:'1200px 0px'});
  tg.forEach(function(t){io.observe(t)});
}else boot();
new MutationObserver(function(){if(calm())off();else if(window.gsap&&window.ScrollTrigger)on();else boot()}).observe(R,{attributes:true,attributeFilter:['data-motion']});
/* làm mới vị trí một lần sau khi tải xong */
function rf(){if(window.ScrollTrigger)ScrollTrigger.refresh()}
addEventListener('load',function(){setTimeout(rf,300)});
addEventListener('hashchange',function(){setTimeout(rf,400)});
})();
}catch(e){console.error('[khối 50]',e)}

/* ===================== [khối 51] ===================== */
try{
(function(){
/* THỜI TIẾT: lấy nhiệt độ thật ở Phù Liễn (Open-Meteo, miễn phí, không cần khoá) rồi quyết định hiệu ứng toàn trang:
   đang mưa -> mưa; không mưa và dưới COLD độ -> tuyết; còn lại không có gì. Mặc định TẮT: bấm "Bật hiệu ứng thời tiết" ở mục Bản đồ để bật (trang nhớ lựa chọn).
   Hạt (mưa/tuyết) chỉ chạy trên máy có chuột (đổi PARTICLES_ON_MOBILE nếu muốn bật cả trên điện thoại).
   Xem thử không cần chờ thời tiết: thêm ?wx=rain hoặc ?wx=snow vào đường dẫn. Toạ độ ở LAT, LON là ước lượng khu Phù Liễn. */
var LAT=20.81,LON=106.63,COLD=26,PARTICLES_ON_MOBILE=false,TTL=15*60e3;
var R=document.documentElement,wx=document.getElementById('wx');if(!wx)return;
function $(i){return document.getElementById(i)}
var E={i:$('wxi'),t:$('wxt'),c:$('wxc'),x:$('wxx'),e:$('wxe'),b:$('wxb')};
var desk=matchMedia('(hover:hover) and (pointer:fine) and (min-width:40.01rem)');
var data=null,sim=null,enabled=false,kind='none',force=null,perfOff=false,fetched=0;
function D(){return sim||data}
try{enabled=localStorage.getItem('wxfx')==='1'}catch(e){}
try{var fm=/[?&]wx=(rain|snow|none)/.exec(location.search);if(fm)force=fm[1]}catch(e){}
function calm(){return R.classList.contains('lite')||R.getAttribute('data-motion')==='off'||matchMedia('(prefers-reduced-motion: reduce)').matches}
var CODES={0:['Trời quang','☀️'],1:['Gần như quang mây','🌤️'],2:['Có mây rải rác','⛅'],3:['Nhiều mây','☁️'],45:['Sương mù','🌫️'],48:['Sương mù','🌫️'],51:['Mưa phùn nhẹ','🌦️'],53:['Mưa phùn','🌦️'],55:['Mưa phùn dày','🌦️'],56:['Mưa phùn lạnh','🌦️'],57:['Mưa phùn lạnh','🌦️'],61:['Mưa nhỏ','🌧️'],63:['Mưa vừa','🌧️'],65:['Mưa to','🌧️'],66:['Mưa lạnh','🌧️'],67:['Mưa lạnh','🌧️'],71:['Tuyết nhẹ','🌨️'],73:['Tuyết','🌨️'],75:['Tuyết dày','❄️'],77:['Hạt tuyết','🌨️'],80:['Mưa rào nhẹ','🌦️'],81:['Mưa rào','🌧️'],82:['Mưa rào rất to','⛈️'],85:['Tuyết rào','🌨️'],86:['Tuyết rào dày','🌨️'],95:['Dông','⛈️'],96:['Dông kèm mưa đá','⛈️'],99:['Dông kèm mưa đá','⛈️']};
function isRain(d){var c=d.code;return (c>=51&&c<=67)||(c>=80&&c<=82)||c>=95||d.pr>0}
function isSnowCode(c){return (c>=71&&c<=77)||c===85||c===86}
function decide(){
  var d=D();
  if(calm())return 'none';
  if(force)return force;
  if(!d||(!enabled&&!sim))return 'none';
  if(isRain(d))return 'rain';
  if(isSnowCode(d.code)||Math.round(d.temp)<COLD)return 'snow';
  return 'none';
}
/* ===== hạt mưa / tuyết trên một canvas nhỏ (nửa độ phân giải), một path cho tất cả hạt ===== */
var cv=null,cx=null,raf=0,ps=[],N=0,S=.5,W=0,H=0,last=0,acc=0,fc=0,cuts=0,cur='',col={},rt=0;
function colors(){var l=R.getAttribute('data-theme')==='light';col.snow=l?'rgba(105,135,180,.85)':'rgba(255,255,255,.8)';col.rain=l?'rgba(70,100,150,.42)':'rgba(174,200,255,.36)'}
function size(){W=cv.width=Math.ceil(innerWidth*S);H=cv.height=Math.ceil(innerHeight*S)}
function rnd(a,b){return a+Math.random()*(b-a)}
function mk(init,k){
  if(k==='rain')return{x:rnd(-H*.2,W),y:init?rnd(0,H):-20,v:rnd(650,1000)*S,l:rnd(10,24)*S};
  return{x:rnd(0,W),y:init?rnd(0,H):-6,v:rnd(28,70)*S,r:rnd(.7,2.1),ph:rnd(0,6.28),sw:rnd(8,22)*S};
}
function spawn(k){ps=[];for(var i=0;i<N;i++)ps.push(mk(true,k))}
function stopP(){cancelAnimationFrame(raf);raf=0;cur='';if(cv)cv.style.display='none'}
function tick(ts){
  raf=requestAnimationFrame(tick);
  var raw=ts-last;if(!last||raw>250){last=ts;return}
  /* vẽ mọi khung hình theo đúng nhịp màn hình (trước đây giới hạn ~30 khung/giây nên vệt mưa nhanh bị giật dù fps trang vẫn cao); chuyển động tính theo thời gian thật nên không phụ thuộc tần số quét */
  last=ts;var dt=Math.min(.05,raw/1000);
  acc+=raw;fc++;
  if(fc>=90){var avg=acc/fc;acc=0;fc=0;
    if(avg>50){cuts++;if(cuts>=3||N<20){perfOff=true;stopP();note();return}N=Math.floor(N*.6);ps.length=N}}
  cx.clearRect(0,0,W,H);cx.beginPath();var i,p;
  if(cur==='rain'){
    for(i=0;i<ps.length;i++){p=ps[i];p.y+=p.v*dt;p.x+=p.v*dt*.18;
      if(p.y>H){p.y=-p.l;p.x=rnd(-H*.2,W)}
      cx.moveTo(p.x,p.y);cx.lineTo(p.x-p.l*.18,p.y-p.l)}
    cx.lineWidth=1;cx.strokeStyle=col.rain;cx.stroke();
  }else{
    for(i=0;i<ps.length;i++){p=ps[i];p.ph+=dt;p.y+=p.v*dt;p.x+=Math.sin(p.ph)*p.sw*dt+4*S*dt;
      if(p.y>H+4){p.y=-4;p.x=rnd(0,W)}if(p.x>W+4)p.x=-4;
      cx.moveTo(p.x+p.r,p.y);cx.arc(p.x,p.y,p.r,0,6.283)}
    cx.fillStyle=col.snow;cx.fill();
  }
}
function startP(k){
  if(perfOff||raf&&cur===k)return;
  stopP();cur=k;
  if(!cv){cv=document.createElement('canvas');cv.id='wxfx';cv.setAttribute('aria-hidden','true');document.body.appendChild(cv);cx=cv.getContext('2d')}
  colors();size();N=k==='rain'?70:55;cuts=0;acc=0;fc=0;last=0;spawn(k);cv.style.display='block';raf=requestAnimationFrame(tick);
}
addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(function(){if(cv&&raf){size();spawn(cur)}},200)});
document.addEventListener('visibilitychange',function(){last=0;if(!document.hidden&&started&&Date.now()-fetched>TTL)load()});
/* ===== giao diện ===== */
function note(){
  var t='',d=D(),res='';
  if(kind==='rain')res='Trời đang mưa nên trang có mưa.';
  else if(kind==='snow')res='Dưới '+COLD+'°C nên trang có tuyết.';
  else res='Lúc này không có hiệu ứng thời tiết.';
  if(calm())t='Hiệu ứng đang tắt (chế độ lite, giảm chuyển động hoặc phím M).';
  else if(perfOff)t='Đã tự tắt mưa/tuyết vì máy hơi chậm. Tải lại trang để thử lại.';
  else if(force)t='Đang xem thử hiệu ứng: '+({rain:'mưa',snow:'tuyết',none:'không có'})[force]+'.';
  else if(!enabled&&!sim)t='Hiệu ứng thời tiết đang tắt. Bấm nút bên trên để bật.';
  else if(!d)t='';
  else if(sim)t='Đang thử giả lập. '+res;
  else t=res;
  if((kind==='rain'||kind==='snow')&&!desk.matches&&!PARTICLES_ON_MOBILE&&!perfOff)t+=' (Mưa và tuyết chỉ chạy trên máy tính.)';
  E.e.textContent=t;
}
function render(){
  var d=D();
  if(d){
    var c=CODES[d.code]||['Thời tiết','⛅'],ic=c[1];if(!d.day&&d.code<=1)ic='🌙';
    E.i.textContent=ic;E.t.textContent=Math.round(d.temp)+'°';E.c.textContent=c[0]+(sim?' (giả lập)':'');
    E.x.textContent='Cảm giác như '+Math.round(d.app)+'° · Độ ẩm '+Math.round(d.hum)+'% · Gió '+Math.round(d.wind)+' km/h';
  }
  E.b.textContent=enabled?'Tắt hiệu ứng thời tiết':'Bật hiệu ứng thời tiết';E.b.setAttribute('aria-pressed',enabled?'true':'false');
}
/* ===== bầu trời theo giờ thật (giờ Việt Nam) + is_day của thời tiết: ban đêm có sao và trăng, chỉ khi bật hiệu ứng thời tiết. Xem thử: ?sky=night|day, hoặc bỏ tick "Ban ngày" ở bảng thử ===== */
var sky=document.createElement('div');sky.id='skyfx';sky.setAttribute('aria-hidden','true');
(function(){
  function st(n,withSpread){var a=[],i;for(i=0;i<n;i++)a.push((Math.random()*100).toFixed(1)+'vw '+(Math.random()*100).toFixed(1)+'vh 0 '+(withSpread&&Math.random()<.2?'.5px ':'0 ')+'rgba(255,255,255,'+(.4+Math.random()*.6).toFixed(2)+')');return a.join(',')}
  var a=document.createElement('i'),b=document.createElement('i');a.className='st a';b.className='st b';a.style.boxShadow=st(80,true);b.style.boxShadow=st(22,false);
  var m=document.createElement('i');m.className='moon';sky.appendChild(a);sky.appendChild(b);sky.appendChild(m);document.body.appendChild(sky);
})();
function hourVN(){try{return +new Intl.DateTimeFormat('en-GB',{hour:'numeric',hourCycle:'h23',timeZone:'Asia/Ho_Chi_Minh'}).format(new Date())}catch(e){return new Date().getHours()}}
function phase(){
  if(calm()||(!enabled&&!sim))return 'day';
  var q=/[?&]sky=(day|night)/.exec(location.search);if(q)return q[1];
  var h=hourVN(),d=D(),night=d?!d.day:(h>=19||h<5);
  return night?'night':'day';
}
function applySky(){R.setAttribute('data-sky',phase())}
function apply(){
  kind=decide();R.setAttribute('data-wx',kind);applySky();
  if((kind==='rain'||kind==='snow')&&(desk.matches||PARTICLES_ON_MOBILE))startP(kind);else stopP();
  render();note();
}
E.b.addEventListener('click',function(){enabled=!enabled;try{localStorage.setItem('wxfx',enabled?'1':'0')}catch(e){}if(enabled)start();apply()});
new MutationObserver(function(ms){var mo=false;for(var i=0;i<ms.length;i++)if(ms[i].attributeName==='data-motion')mo=true;colors();if(mo)apply()}).observe(R,{attributes:true,attributeFilter:['data-motion','data-theme']});
/* ===== bảng thử thời tiết ===== */
var chips=Array.prototype.slice.call(document.querySelectorAll('.wxch')),ts=$('wxts'),tv=$('wxtv'),tr=$('wxtr'),td=$('wxtd'),tb=$('wxtest');
function syncChips(){chips.forEach(function(c){var f=c.getAttribute('data-f');c.classList.toggle('on',(f||null)===force&&!sim||(!f&&!force&&!sim))})}
chips.forEach(function(c){c.addEventListener('click',function(){force=c.getAttribute('data-f')||null;sim=null;syncChips();apply()})});
function simulate(){
  var t=+ts.value,r=tr.checked,dy=td.checked;tv.textContent=t+'°';
  force=null;sim={temp:t,app:t+2,hum:r?92:70,wind:8,pr:r?1.2:0,code:r?61:1,day:dy};syncChips();apply();
}
if(ts){ts.addEventListener('input',simulate);tr.addEventListener('change',simulate);td.addEventListener('change',simulate)}
if(force&&tb)tb.open=true;
/* ===== lấy dữ liệu ===== */
function parse(j){var c=j&&j.current;if(!c||typeof c.temperature_2m!=='number')return null;
  return{temp:c.temperature_2m,app:c.apparent_temperature,hum:c.relative_humidity_2m,wind:c.wind_speed_10m,pr:c.precipitation||0,code:c.weather_code,day:c.is_day===1}}
function load(){
  var ac=window.AbortController?new AbortController():null,tm=ac?setTimeout(function(){ac.abort()},8000):0;
  fetch('https://api.open-meteo.com/v1/forecast?latitude='+LAT+'&longitude='+LON+'&current=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,is_day&timezone=Asia%2FBangkok',ac?{signal:ac.signal}:{})
    .then(function(r){if(!r.ok)throw 0;return r.json()})
    .then(function(j){clearTimeout(tm);var d=parse(j);if(!d)throw 0;data=d;fetched=Date.now();try{localStorage.setItem('wx_cache',JSON.stringify({t:fetched,d:d}))}catch(e){}apply()})
    .catch(function(){clearTimeout(tm);if(!data){try{var st=JSON.parse(localStorage.getItem('wx_cache')||'null');if(st&&st.d){data=st.d;fetched=st.t||0}}catch(e){}}if(data){apply();return}E.c.textContent=navigator.onLine===false?'Đang offline, chưa có dữ liệu thời tiết':'Không lấy được thời tiết';E.t.textContent='--°';E.x.textContent='';apply()});
}
try{var ch=JSON.parse(localStorage.getItem('wx_cache')||'null');if(ch&&ch.d&&Date.now()-ch.t<TTL){data=ch.d;fetched=ch.t}}catch(e){}
colors();syncChips();apply();
var started=false;function start(){if(started)return;started=true;if(!data||Date.now()-fetched>=TTL)load()}
if(enabled||force||!window.IntersectionObserver)start();else{var wio=new IntersectionObserver(function(es){if(es[0].isIntersecting){wio.disconnect();start()}},{rootMargin:'700px 0px'});wio.observe(wx)}
setInterval(function(){if(started&&!document.hidden)load()},TTL);
})();
}catch(e){console.error('[khối 51]',e)}

/* ===================== [khối 53] ===================== */
try{
/* chỉ phần đang nằm trên màn hình mới chạy hiệu ứng; rời đi thì tạm dừng animation CSS, quay lại thì chạy tiếp */
(function(){if(!window.IntersectionObserver)return;
var io=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle('offscr',!e.isIntersecting)})},{rootMargin:'60px 0px'});
/* mặc định TẮT (offscr) ngay từ đầu, chỉ khi nào lọt vào màn hình mới gỡ ra cho chạy */
document.querySelectorAll('main section,.band,.gbar,footer,.clk,.gsk,.g3d,.bye').forEach(function(n){n.classList.add('offscr');io.observe(n)});
})();
}catch(e){console.error('[khối 53]',e)}

/* ===================== [khối 54] ===================== */
try{
(function(){
function en(){return (window.LANG||document.documentElement.lang)==='en'}
/* nút < > trên thanh đầu: luôn sáng, luôn bấm được */
var n=document.querySelector('.navx nav'),p=document.querySelector('.nvb.prev'),x=document.querySelector('.nvb.next');
if(n&&p&&x){
 var u=function(){[p,x].forEach(function(b){if(b.disabled)b.disabled=false;b.removeAttribute('disabled');b.removeAttribute('aria-disabled')})};
 var vis=function(){return [].slice.call(n.querySelectorAll('a')).filter(function(a){return a.getClientRects().length})};
 var go=function(d){
  var mx=n.scrollWidth-n.clientWidth;
  if(mx<=4){ /* các mục đã hiện đủ, không cuộn ngang được: nhảy tới mục trước/sau */
   var L=vis();if(!L.length)return;
   var i=-1;L.forEach(function(a,k){if(a.classList.contains('on'))i=k});
   i=i<0?(d>0?0:L.length-1):(i+d+L.length)%L.length;L[i].click();return}
  if(d>0&&n.scrollLeft>=mx-4)n.scrollTo({left:0,behavior:'smooth'});
  else if(d<0&&n.scrollLeft<=4)n.scrollTo({left:mx,behavior:'smooth'});
  else n.scrollBy({left:d*Math.max(120,n.clientWidth*.7),behavior:'smooth'})};
 p.addEventListener('click',function(){go(-1)});x.addEventListener('click',function(){go(1)});
 n.addEventListener('scroll',u,{passive:true});
 ['resize','load','pageshow','focus'].forEach(function(e){addEventListener(e,u)});
 document.addEventListener('visibilitychange',u);
 try{var mo=new MutationObserver(u);[p,x].forEach(function(b){mo.observe(b,{attributes:true,attributeFilter:['disabled','aria-disabled']})})}catch(e){}
 u();setTimeout(u,500);
}
/* ẩn/hiện khung giờ thời khoá biểu */
var tb=document.getElementById('tkbfold'),tl=document.getElementById('tkblist'),tc=document.getElementById('tkbcap'),hid=false;
try{hid=localStorage.getItem('tkbfold')==='1'}catch(e){}
function tk(){if(!tb||!tl)return;tl.hidden=hid;tb.setAttribute('aria-expanded',String(!hid));tb.textContent=hid?(en()?'Show time slots':'Hiện các khung giờ'):(en()?'Hide time slots':'Ẩn các khung giờ')}
if(tb){tb.addEventListener('click',function(){hid=!hid;try{localStorage.setItem('tkbfold',hid?'1':'0')}catch(e){}window.__fold([tl],!hid,tk)});tk()}
/* thu gọn nhật ký */
var lb=document.getElementById('logfold'),ll=document.getElementById('logl');
function lg(){if(!lb||!ll)return;var f=ll.classList.contains('fold'),c=ll.children.length-3;lb.setAttribute('aria-expanded',String(!f));lb.textContent=f?(en()?'Show '+c+' older entries':'Xem thêm '+c+' mục cũ hơn'):(en()?'Collapse':'Thu gọn')}
if(lb){lb.addEventListener('click',function(){var f=ll.classList.contains('fold'),x=[].slice.call(ll.children).slice(3);window.__fold(x,f,function(){ll.classList.toggle('fold');lg()})});lg()}
document.addEventListener('langchange',function(){tk();lg()});
})();
}catch(e){console.error('[khối 54]',e)}

/* ===================== [khối 55] ===================== */
try{
(function(){
function en(){return (window.LANG||document.documentElement.lang)==='en'}
var bb=document.getElementById('bdfold'),bl=document.getElementById('pbl'),bh=false;
function bd(){if(!bb||!bl)return;bl.hidden=bh;bb.setAttribute('aria-expanded',String(!bh));bb.textContent=bh?(en()?'Show badges':'Hiện huy hiệu'):(en()?'Hide badges':'Ẩn huy hiệu')}
if(bb){bb.addEventListener('click',function(){bh=!bh;window.__fold([bl],!bh,bd)});bd()}
var secs=[].slice.call(document.querySelectorAll('main section.s'));
secs.forEach(function(s){
 var ey=s.querySelector('.eyebrow'),w=s.querySelector('.wrap');if(!ey||!w)return;
 var h=ey;while(h.parentNode&&h.parentNode!==w)h=h.parentNode;
 if(h.parentNode!==w)return;h.classList.add('sxh');
 var b=document.createElement('button');b.type='button';b.className='sx';b.textContent='›';
 function lab(){var c=s.classList.contains('cl');b.classList.toggle('sxo',!c);b.setAttribute('aria-expanded',String(!c));var l=c?(en()?'Expand section':'Mở mục này'):(en()?'Collapse section':'Ẩn mục này');b.title=l;b.setAttribute('aria-label',l)}
 b.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();var op=s.classList.contains('cl'),tg=[].slice.call(s.children).filter(function(c){return c!==w}).concat([].slice.call(w.children).filter(function(c){return c!==h}));b.classList.toggle('sxo',op);window.__fold(tg,op,function(){s.classList.toggle('cl');lab()})});
 s.__lab=lab;lab();ey.appendChild(b);
});
function openH(){var id=location.hash.slice(1),el=id&&document.getElementById(id);if(el&&el.classList&&el.classList.contains('cl')){el.classList.remove('cl');if(el.__lab)el.__lab()}}
addEventListener('hashchange',openH);openH();
document.addEventListener('langchange',function(){bd();secs.forEach(function(s){if(s.__lab)s.__lab()})});
})();
}catch(e){console.error('[khối 55]',e)}

/* ===================== [khối 56] ===================== */
try{
(function(){
var bar=document.querySelector('.bar'),b=document.querySelector('.sbt');if(!bar||!b)return;
function en(){return (window.LANG||document.documentElement.lang)==='en'}
var c=false;try{c=localStorage.getItem('sbhide')==='1'}catch(e){}
function ap(){bar.classList.toggle('sbc',c);b.textContent=c?'›':'‹';b.setAttribute('data-d',c?'r':'l');b.setAttribute('aria-expanded',String(!c));var l=c?(en()?'Show sidebar':'Hiện thanh bên'):(en()?'Hide sidebar':'Ẩn thanh bên');b.title=l;b.setAttribute('aria-label',l)}
b.addEventListener('click',function(e){e.preventDefault();c=!c;try{localStorage.setItem('sbhide',c?'1':'0')}catch(x){}window.__fold([].slice.call(bar.querySelectorAll('nav a')),!c,ap)});
document.addEventListener('langchange',ap);ap();
})();
}catch(e){console.error('[khối 56]',e)}

/* ===================== [khối 57] ===================== */
try{
/* hiệu ứng ẩn/hiện: trượt chiều cao + mờ dần. Tắt khi bật giảm chuyển động hoặc đã tắt hiệu ứng */
window.__fold=function(els,show,apply){
 var R=document.documentElement,rm=matchMedia('(prefers-reduced-motion: reduce)').matches||R.getAttribute('data-motion')==='off';
 els=(els||[]).filter(Boolean);
 if(show)els.forEach(function(e){e.setAttribute('data-noax','')});
 if(rm||!els.length||!els[0].animate){apply();return}
 var key=els[0],tok=(key.__ft=(key.__ft||0)+1),D=280,E='cubic-bezier(.2,.8,.2,1)';
 var z={height:'0px',opacity:0,marginTop:'0px',marginBottom:'0px',paddingTop:'0px',paddingBottom:'0px'};
 function vis(e){return e.getClientRects().length>0}
 els.forEach(function(e){e.getAnimations().forEach(function(a){a.cancel()});e.style.overflow=''});
 if(show){
  apply();
  els.forEach(function(e){if(!vis(e))return;var h=e.offsetHeight;e.style.overflow='hidden';
   var a=e.animate([z,{height:h+'px',opacity:1}],{duration:D,easing:E});
   var f=function(){e.style.overflow=''};a.onfinish=f;a.oncancel=f})
 }else{
  var ps=[];
  els.forEach(function(e){if(!vis(e))return;var h=e.offsetHeight;e.style.overflow='hidden';
   var a=e.animate([{height:h+'px',opacity:1},z],{duration:D,easing:E,fill:'forwards'});ps.push(a.finished.catch(function(){}))});
  Promise.all(ps).then(function(){
   if(key.__ft!==tok)return;
   els.forEach(function(e){e.getAnimations().forEach(function(a){a.cancel()});e.style.overflow=''});
   apply();
  });
  if(!ps.length)apply();
 }
};
}catch(e){console.error('[khối 57]',e)}

/* ===================== [khối 58] ===================== */
try{
/* tải lại trang thì ở lại đúng chỗ đang xem */
(function(){
var K='ming:scrollY',R=document.documentElement,nv='';
try{history.scrollRestoration='manual'}catch(e){}
try{nv=(performance.getEntriesByType('navigation')[0]||{}).type||''}catch(e){}
var y=0;try{y=+sessionStorage.getItem(K)||0}catch(e){}
var rest=(nv==='reload'||nv==='back_forward')&&y>0&&location.hash.indexOf('#/')!==0;
var busy=rest,st; /* đang khôi phục thì giữ nguyên vị trí cần về, không để vị trí tạm làm hỏng giá trị đã lưu */
function cur(){return busy?y:Math.round(window.scrollY||0)}
function save(){try{sessionStorage.setItem(K,String(cur()))}catch(e){}}
addEventListener('scroll',function(){if(busy)return;clearTimeout(st);st=setTimeout(save,100)},{passive:true});
addEventListener('pagehide',save);document.addEventListener('visibilitychange',function(){if(document.hidden)save()});
if(!rest)return;
var t0=Date.now(),ok=0,iv;
function end(){if(!busy)return;busy=false;clearInterval(iv)}
['wheel','touchstart','keydown','mousedown'].forEach(function(ev){addEventListener(ev,end,{passive:true,once:true})});
function tick(){
 if(!busy)return;
 var mx=Math.max(0,R.scrollHeight-innerHeight),to=Math.min(y,mx),sy=window.scrollY||0;
 if(Math.abs(sy-to)>1){window.scrollTo({top:to,behavior:'instant'});sy=window.scrollY||0}
 /* trang còn đang dựng (ảnh, mục tải chậm) nên chỉnh lại đến khi vị trí ổn định */
 ok=(Math.abs(sy-y)<=2)?ok+1:0;
 if((ok>=12&&document.readyState==='complete')||Date.now()-t0>8000)end();
}
iv=setInterval(tick,80);tick();
addEventListener('load',tick);
})();
}catch(e){console.error('[khối 58]',e)}

/* ===================== [khối 59] ===================== */
try{
/* ÂM THANH KHI NHẤN: tự tạo bằng WebAudio (không cần file), mỗi chỗ một tiếng riêng. Nút loa/chuột trên thanh đầu để bật/tắt */
(function(){
var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
var ctx=null,mst,nb,on=true,btn=document.getElementById('sfx'),R=document.documentElement;
try{on=localStorage.getItem('sfx')!=='0'}catch(e){}
function en(){return (window.LANG||R.lang)==='en'}
function lab(){if(!btn)return;btn.setAttribute('aria-pressed',String(on));var t=en()?('Click sounds: '+(on?'on':'off')):('Âm thanh khi nhấn: '+(on?'bật':'tắt'));btn.title=t;btn.setAttribute('aria-label',t)}
function init(){
 if(ctx){if(ctx.state==='suspended')ctx.resume();return ctx}
 try{ctx=new AC();mst=ctx.createGain();mst.gain.value=.55;mst.connect(ctx.destination);
  var n=Math.floor(ctx.sampleRate*.6),b=ctx.createBuffer(1,n,ctx.sampleRate),d=b.getChannelData(0);for(var i=0;i<n;i++)d[i]=Math.random()*2-1;nb=b}catch(e){ctx=null}
 return ctx}
function tone(f,t,dur,type,vol,f2){var o=ctx.createOscillator(),g=ctx.createGain();o.type=type||'sine';o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+dur);
 g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(mst);o.start(t);o.stop(t+dur+.03)}
function noise(t,dur,f1,f2,vol,q){var s=ctx.createBufferSource();s.buffer=nb;var fl=ctx.createBiquadFilter();fl.type='bandpass';fl.Q.value=q||1;fl.frequency.setValueAtTime(f1,t);if(f2!==f1)fl.frequency.exponentialRampToValueAtTime(f2,t+dur);
 var g=ctx.createGain();g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+dur);s.connect(fl);fl.connect(g);g.connect(mst);s.start(t);s.stop(t+dur+.03)}
var S={
 click:function(t){tone(1500,t,.06,'sine',.13,850);noise(t,.03,3800,3800,.05,2)},
 prev:function(t){tone(760,t,.08,'triangle',.15,520);noise(t,.03,3000,3000,.04,2)},
 next:function(t){tone(520,t,.08,'triangle',.15,780);noise(t,.03,3000,3000,.04,2)},
 fold:function(t){tone(430,t,.09,'sine',.14,640);tone(860,t+.05,.1,'sine',.07,1100)},
 play:function(t){tone(520,t,.13,'sine',.16,820);tone(1040,t+.04,.12,'sine',.06,1300)},
 pause:function(t){tone(820,t,.13,'sine',.16,520)},
 search:function(t){tone(1250,t,.07,'triangle',.12,1500);tone(1880,t+.06,.09,'sine',.07);noise(t,.05,5000,7000,.03,3)},
 out:function(t){noise(t,.16,1200,3600,.09,1.2);tone(660,t,.1,'triangle',.1,990)},
 top:function(t){noise(t,.42,260,3200,.2,.7);tone(280,t,.4,'sine',.1,900)},
 pop:function(t){tone(300,t,.09,'sine',.2,120);tone(900,t,.04,'triangle',.06)},
 enter:function(t){[523.3,659.3,784,1046.5].forEach(function(f,i){tone(f,t+i*.07,.35,'sine',.13)});noise(t+.18,.3,4000,8000,.03,2)},
 light:function(t){[1318.5,1568,2093].forEach(function(f,i){tone(f,t+i*.07,.42,'sine',.12);tone(f*2,t+i*.07,.2,'sine',.03)});noise(t,.3,6000,9000,.025,3)},
 dark:function(t){[880,659.3,440].forEach(function(f,i){tone(f,t+i*.09,.5,'triangle',.13)});tone(110,t,.5,'sine',.1,70)},
 sfxon:function(t){tone(660,t,.1,'sine',.14);tone(990,t+.08,.18,'sine',.14)},
 /* gõ phím: tiếng phím cơ, mỗi loại phím một tiếng */
 key:function(t){var v=Math.random();noise(t,.045,2400+v*900,1400,.11,1.4);tone(190+v*50,t,.06,'sine',.13,95);tone(3400,t,.012,'sine',.025)},
 space:function(t){noise(t,.07,1100,700,.12,1.2);tone(125,t,.1,'sine',.2,65);tone(2200,t,.012,'sine',.02)},
 back:function(t){noise(t,.05,1800,1100,.1,1.3);tone(250,t,.07,'sine',.13,150)},
 ret:function(t){noise(t,.07,1500,800,.12,1.2);tone(150,t,.1,'sine',.2,80);tone(1568,t+.05,.25,'triangle',.05)},
 kbkey:function(t,c){var k=String(c),h=0,i;for(i=0;i<k.length;i++)h=(h*31+k.charCodeAt(i))%997;
  if(k==='Space')S.space(t);else if(k==='Backspace')S.back(t);else if(k==='Enter'||k==='NumpadEnter')S.ret(t);else S.key(t);
  var sc=[0,2,4,7,9],j=h%15,st=sc[j%5]+12*Math.floor(j/5);tone(392*Math.pow(2,st/12),t,.25,'sine',.05)},
 wordok:function(t){tone(1760,t,.09,'sine',.06,2090)},
 wordbad:function(t){tone(150,t,.14,'sawtooth',.06,100);noise(t,.08,400,300,.05,1)},
 start:function(t){tone(660,t,.1,'sine',.13);tone(880,t+.1,.1,'sine',.13);tone(1320,t+.2,.22,'sine',.15)},
 finish:function(t){[784,659.3,523.3].forEach(function(f,i){tone(f,t+i*.1,.3,'triangle',.13)});tone(1046.5,t+.32,.5,'sine',.1)},
 record:function(t){[523.3,659.3,784,1046.5,1318.5,1568].forEach(function(f,i){tone(f,t+i*.08,.4,'sine',.12);tone(f*2,t+i*.08,.2,'sine',.03)});noise(t+.3,.5,5000,9000,.04,2);tone(130,t,.6,'sine',.18,65)},
 /* combo: mỗi lần bấm một nốt đi lên theo thang ngũ cung; qua mỗi bậc thì có tiếng lên cấp càng lúc càng hoành tráng */
 cmb:function(t,n){var sc=[0,2,4,7,9],k=n%15,st=sc[k%5]+12*Math.floor(k/5),f=262*Math.pow(2,st/12);tone(f,t,.1,'triangle',.05);tone(f*2,t,.05,'sine',.015)},
 tier:function(t,i){var base=261.6*Math.pow(2,i*2/12),ar=[0,4,7,12,16,19,24,28],c=Math.min(ar.length,3+i),j;
  for(j=0;j<c;j++){var f=base*Math.pow(2,ar[j]/12);tone(f,t+j*.055,.35+i*.04,'triangle',.11);tone(f*2,t+j*.055,.2,'sine',.03)}
  noise(t,.3+i*.05,4000,9000,.02+i*.006,2);
  if(i>=3)tone(90,t,.5,'sine',.15+i*.02,40);
  if(i>=5)noise(t,.6,200,2500,.12,.7);
  if(i>=7)[0,7,12,16,19,24].forEach(function(x,k){tone(base*Math.pow(2,x/12),t+.45+k*.02,1.2,'sine',.07)})},
 cbreak:function(t){tone(520,t,.4,'sawtooth',.05,110);noise(t,.3,1800,300,.07,.8)},
 best:function(t){[880,1108.7,1318.5,1760].forEach(function(f,i){tone(f,t+i*.06,.25,'sine',.1)});noise(t+.1,.3,6000,9000,.03,3)},
 lang:function(t){tone(700,t,.08,'sine',.12,1000);tone(1050,t+.07,.1,'sine',.1,700)},
 tab:function(t){tone(900,t,.05,'square',.035,700);tone(1400,t,.05,'sine',.08,1100);noise(t,.03,4500,4500,.04,2)},
 swon:function(t){tone(600,t,.07,'sine',.12,900);tone(1200,t+.04,.08,'sine',.07)},
 swoff:function(t){tone(900,t,.07,'sine',.12,550)},
 sec:function(t){tone(1500,t,.05,'sine',.03,1800)},
 welcome:function(t){tone(784,t,.18,'sine',.06);tone(1175,t+.1,.3,'sine',.06)}
};
function play(n,a){if(!on&&n!=='sfxon')return;if(!init())return;var t=ctx.currentTime+.005;try{S[n](t,a)}catch(e){}}
function live(){return !!(ctx&&ctx.state==='running')}
window.__sfx=play;
function pick(el){
 var id=el.id||'',c=el.classList;
 if(id==='theme')return null; /* tiếng riêng, đợi đổi xong */
 if(id==='sfx')return null;
 if(id==='totop')return 'top';
 if(id==='search'||id==='cmdk')return 'search';
 if(c.contains('pgo')||c.contains('pno'))return 'enter';
 if(c.contains('prev')&&c.contains('nvb'))return 'prev';
 if(c.contains('next')&&c.contains('nvb'))return 'next';
 if(id==='bgmprev'||id==='bgmback')return 'prev';
 if(id==='bgmnext'||id==='bgmfwd'||id==='bgmn')return 'next';
 if(id==='bgmplay'||id==='bgmq'||id==='bgmtop'){var pl=el.getAttribute('aria-pressed');return (pl==='true'||el.classList.contains('on')||el.classList.contains('playing'))?'pause':'play'}
 if(c.contains('sx')||c.contains('sbt')||c.contains('foldbtn')||el.tagName==='SUMMARY')return 'fold';
 if(id==='brand')return 'pop';
 if(c.contains('lang'))return 'lang';
 if(el.getAttribute('role')==='tab')return 'tab';
 if(el.tagName==='A'&&el.target==='_blank')return 'out';
 return 'click';
}
document.addEventListener('click',function(e){
 var el=e.target.closest&&e.target.closest('button,a[href],summary,[role="button"],.btn,.tgl,label,input[type="checkbox"],input[type="radio"],select');
 if(!el||el.disabled||el.getAttribute('aria-disabled')==='true')return;
 if(el.id==='sfx'){on=!on;try{localStorage.setItem('sfx',on?'1':'0')}catch(x){}lab();if(on)play('sfxon');else{init();if(ctx){tone(520,ctx.currentTime+.005,.1,'sine',.14,300)}}return}
 if(el.id==='theme'){setTimeout(function(){play(R.getAttribute('data-theme')==='light'?'light':'dark')},0);return}
 var n=pick(el);
 if(n==='click'&&el.hasAttribute('aria-pressed')){setTimeout(function(){play(el.getAttribute('aria-pressed')==='true'?'swon':'swoff')},40);return}
 if(n){
  /* nút phát/tạm dừng đổi trạng thái sau khi bấm nên đọc lại sau một nhịp để chọn đúng tiếng */
  if(n==='play'||n==='pause'){setTimeout(function(){var a=el.getAttribute('aria-pressed')==='true'||el.classList.contains('on')||el.classList.contains('playing');play(a?'play':'pause')},60)}
  else play(n)}
},true);
/* mở khoá âm thanh ở lần chạm đầu tiên (trình duyệt chỉ cho phát sau thao tác của người dùng) */
['pointerdown','keydown','touchstart'].forEach(function(ev){addEventListener(ev,function(){if(on)init()},{once:true,passive:true})});
/* tiếng gõ phím: ô gõ chữ và trang test bàn phím */
var lk=0;
document.addEventListener('keydown',function(e){
 if(!on||e.ctrlKey||e.metaKey||e.altKey)return;
 var t=e.target,kb=document.getElementById('lab-kb'),typing=t&&t.id==='tin',inKb=false;
 if(!typing&&!inKb)return;
 var k=e.key;if(k==='Shift'||k==='Control'||k==='Alt'||k==='Meta'||k==='CapsLock')return;
 var now=performance.now();if(now-lk<22)return;lk=now;
 play(k===' '?'space':k==='Backspace'?'back':k==='Enter'?'ret':'key');
},true);
/* chuyển sang mục khác khi cuộn: một tiếng tích rất nhẹ */
var nv=document.querySelector('.navx nav'),lastOn=null,lt=0;
if(nv&&window.MutationObserver){new MutationObserver(function(){
 var a=nv.querySelector('a.on');if(!a||a===lastOn){return}
 var first=lastOn===null;lastOn=a;var now=performance.now();
 if(!first&&live()&&now-lt>300){lt=now;play('sec')}
}).observe(nv,{attributes:true,attributeFilter:['class'],subtree:true})}
/* quay lại tab: chuông chào nhẹ */
var hid=false;
document.addEventListener('visibilitychange',function(){if(document.hidden){hid=true}else if(hid){hid=false;if(live())play('welcome')}});
document.addEventListener('langchange',lab);lab();
})();
}catch(e){console.error('[khối 59]',e)}

/* ===================== [khối 60] ===================== */
try{
/* NÚT GIF: ẩn hoặc hiện toàn bộ ảnh động (GIF nổi trong từng mục và 3 khung ngang). Chỉ ảnh động bị ẩn, mọi thứ khác giữ nguyên. Phím tắt G. Nhớ lựa chọn. Ảnh bị ẩn thì cũng không tải (tiết kiệm mạng). */
(function(){
var R=document.documentElement,b=document.getElementById('gifbtn');if(!b)return;
var off=false;try{off=localStorage.getItem('gifoff')==='1'}catch(e){}
function en(){return (window.LANG||R.lang)==='en'}
function ap(){R.classList.toggle('nogif',off);b.setAttribute('aria-pressed',off?'false':'true');var l=off?(en()?'Show GIFs (G)':'Hiện GIF (G)'):(en()?'Hide GIFs (G)':'Ẩn GIF (G)');b.title=l;b.setAttribute('aria-label',l)}
function tg(){off=!off;try{localStorage.setItem('gifoff',off?'1':'0')}catch(e){}ap()}
b.addEventListener('click',tg);
document.addEventListener('langchange',ap);
document.addEventListener('keydown',function(e){
 if(e.defaultPrevented||e.metaKey||e.ctrlKey||e.altKey)return;
 var t=e.target;if(t&&(t.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)))return;
 if((e.key||'').toLowerCase()==='g')tg()});
ap();
})();
}catch(e){console.error('[khối 60]',e)}

/* ===================== [khối 61] ===================== */
try{
/* OFFLINE: đăng ký service worker (sw.js) để trang, ảnh và font đã xem được lưu lại, mất mạng vẫn lướt được. Chỉ chạy khi trang được phục vụ qua http(s). Thông báo nhỏ khi mất mạng hoặc có mạng lại. */
(function(){
var R=document.documentElement;
function en(){return (window.LANG||R.lang)==='en'}
var pill=document.createElement('div');pill.id='netpill';pill.setAttribute('role','status');pill.setAttribute('aria-live','polite');pill.hidden=true;document.body.appendChild(pill);
var tm=0,tm2=0;
function hide(){pill.classList.remove('on');clearTimeout(tm2);tm2=setTimeout(function(){if(!pill.classList.contains('on'))pill.hidden=true},450)}
function show(msg,keep){clearTimeout(tm);clearTimeout(tm2);pill.textContent=msg;pill.hidden=false;void pill.offsetWidth;pill.classList.add('on');if(!keep)tm=setTimeout(hide,3200)}
function mapMsg(){var m=document.querySelector('.mapfr');if(m)m.setAttribute('data-off',en()?'The map needs internet. Open it again when you are back online.':'Bản đồ cần có mạng. Hãy mở lại khi có mạng.')}
function off(){R.classList.add('offl');mapMsg();show(en()?'You are offline. Showing the saved version.':'Bạn đang offline. Đang xem bản đã lưu trên máy.',true)}
function on(){R.classList.remove('offl');show(en()?'Back online.':'Đã có mạng trở lại.',false)}
addEventListener('offline',off);addEventListener('online',on);
document.addEventListener('langchange',function(){if(R.classList.contains('offl')){mapMsg();show(en()?'You are offline. Showing the saved version.':'Bạn đang offline. Đang xem bản đã lưu trên máy.',true)}});
if(navigator.onLine===false)off();
if(!('serviceWorker' in navigator)||!/^https?:$/.test(location.protocol))return;
/* CÓ BẢN MỚI: service worker báo đã tải xong bản mới (lúc mở trang mạng chậm nên tạm hiện bản đã lưu)
   hoặc service worker mới vừa thay bản cũ -> hiện nút "Có bản mới · Tải lại" (không tự tải lại để khỏi ngắt nhạc đang nghe) */
var hadCtl=!!navigator.serviceWorker.controller,upShown=false;
function upd(){
 if(upShown)return;upShown=true;
 clearTimeout(tm);clearTimeout(tm2);pill.textContent='';
 var b=document.createElement('button');b.type='button';b.className='npup';b.textContent=en()?'New version available · Reload':'Có bản mới · Tải lại';
 b.addEventListener('click',function(){location.reload()});pill.appendChild(b);pill.hidden=false;void pill.offsetWidth;pill.classList.add('on');
}
navigator.serviceWorker.addEventListener('message',function(e){if(e.data&&e.data.type==='UPDATED')upd()});
navigator.serviceWorker.addEventListener('controllerchange',function(){if(hadCtl)upd();hadCtl=true});
addEventListener('load',function(){
 navigator.serviceWorker.register('sw.js',{updateViaCache:'none'}).then(function(reg){
  /* hỏi máy chủ có sw.js mới không mỗi lần quay lại tab (tối đa 1 lần / 30 phút) */
  var lastChk=Date.now();document.addEventListener('visibilitychange',function(){if(!document.hidden&&Date.now()-lastChk>18e5){lastChk=Date.now();reg.update().catch(function(){})}});
  var sv=false;try{var c=navigator.connection;sv=!!(c&&c.saveData)}catch(e){}
  function warm(){var w=reg.active||navigator.serviceWorker.controller;if(w&&!sv)w.postMessage({type:'WARM'})}
  if(reg.active)setTimeout(warm,4000);else navigator.serviceWorker.ready.then(function(){setTimeout(warm,2500)});
 }).catch(function(){});
});
})();
}catch(e){console.error('[khối 61]',e)}

/* ===================== [khối 62] ===================== */
try{
(function(){
/* mở mục đang thu gọn (.cl) hoặc khối <details> chứa đích đến, rồi mới cuộn tới */
function openSec(id){var el=id&&document.getElementById(id);if(!el)return;
 for(var n=el;n&&n!==document.body;n=n.parentElement){
  if(n.tagName==='DETAILS'&&!n.open)n.open=true;
  if(n.classList&&n.classList.contains('cl')){n.classList.remove('cl');if(n.__lab)n.__lab()}
 }}
window.__openSec=openSec;
/* nav 5 mục: đủ chỗ thì ẩn hai nút mũi tên */
function fit(){var x=document.querySelector('.navx'),n=x&&x.querySelector('nav');if(!n)return;
 x.classList.remove('fits');var ok=n.scrollWidth<=n.clientWidth+1;
 if(!ok){var bs=x.querySelectorAll('.nvb'),w=0;bs.forEach(function(b){w+=b.getBoundingClientRect().width+5});ok=n.scrollWidth<=n.clientWidth+w-2}
 x.classList.toggle('fits',ok)}
fit();addEventListener('resize',fit);addEventListener('load',function(){fit();setTimeout(fit,600)});document.addEventListener('langchange',function(){setTimeout(fit,50)});
document.addEventListener('click',function(e){
 var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a)return;
 var h=a.getAttribute('href');if(h.length>1&&h.charAt(1)!=='/')openSec(h.slice(1))},true);
addEventListener('hashchange',function(){var h=location.hash;if(h.length>1&&h.charAt(1)!=='/')openSec(h.slice(1))});
if(location.hash.length>1&&location.hash.charAt(1)!=='/')openSec(location.hash.slice(1));
})();
}catch(e){console.error('[khối 62]',e)}

/* ===================== [#island-js] ===================== */
try{
(function(){
  if(window.__isl)return;window.__isl=1;
  var R=document.documentElement;
  function $(i){return document.getElementById(i)}
  var DICT={'Nhạc':'Music','Discord':'Discord','Giao diện':'Theme','Hiệu ứng':'Effects','Ngôn ngữ':'Language',
    'Nhạc nền':'Background music','Bấm ▶ để bật nhạc':'Press ▶ to start the music','Bài trước':'Previous','Phát hoặc tạm dừng':'Play or pause','Bài sau':'Next',
    'Trực tuyến':'Online','Vắng mặt':'Away','Đừng làm phiền':'Do not disturb','Ngoại tuyến':'Offline',
    'Đang chơi':'Playing','Đang nghe Spotify':'Listening to Spotify','Đang nghe':'Listening','Đang xem':'Watching','Đang phát trực tiếp':'Streaming','Đang thi đấu':'Competing',
    'Không làm gì cả':'Not doing anything','Sáng':'Light','Tối':'Dark','Chuyển động':'Motion','Mưa / tuyết':'Rain / snow','Ảnh GIF':'GIFs','Màu chữ':'Text colours','Âm thanh khi nhấn':'Click sounds',
    'Danh sách bài':'Playlist','Ẩn danh sách bài':'Hide playlist','Hiện danh sách bài':'Show playlist','Tua nhạc':'Seek','Âm lượng':'Volume','Phát ngẫu nhiên':'Shuffle','Lùi 10 giây':'Back 10 seconds','Tua tới 10 giây':'Forward 10 seconds','Bật hoặc tắt tiếng':'Mute or unmute','Lời bài hát sẽ hiện ở đây':'Lyrics will show here','Tiện ích':'Tools','Lên đầu trang':'Back to top','Toàn màn hình':'Fullscreen','Thoát toàn màn hình':'Exit fullscreen','Sao chép liên kết':'Copy link','Đã sao chép':'Copied','Ngẫu nhiên':'Surprise me','Cỡ chữ':'Text size','Lặp bài':'Repeat','Tốc độ phát':'Playback speed','Hẹn giờ':'Sleep timer','Hẹn giờ tắt nhạc':'Sleep timer','Giảm cỡ chữ':'Smaller text','Tăng cỡ chữ':'Larger text','Mặc định':'Reset','Phím tắt: P nhạc · R ngẫu nhiên · M hiệu ứng':'Keys: P music · R surprise · M effects','Tập trung':'Focus','Chế độ nhẹ':'Lite mode','Đặt về giữa':'Center it','Kéo để dời, bấm đúp để về giữa':'Drag to move, double-click to center','Tìm nhanh':'Quick search','Hết giờ! Nghỉ chút nhé':'Time is up! Take a break','Chia sẻ':'Share','Tự động':'Auto','Tới chỗ này':'Take me there','Mở bảng chức năng':'Open quick panel','Đóng bảng chức năng':'Close quick panel'};
  DICT['Màu trang']='Page colour';DICT['Bấm một màu để đổi cả trang · phím C']='Tap a colour to recolour the page · key C';
  function EN(){return R.lang==='en'}
  function T(s){return EN()&&DICT.hasOwnProperty(s)?DICT[s]:s}
  var PL=[
    {k:'music',n:'Nhạc',c:'#a78bfa',ic:'<path d="M9 18V5l10-2v13"/><circle cx="6.5" cy="18" r="2.8"/><circle cx="16.5" cy="16" r="2.8"/>'},
    /* tab 2 trước đây là trạng thái Discord, nay là bảng chọn màu trang */
    {k:'color',n:'Màu trang',c:'var(--acc)',ic:'<path d="M12 3a9 9 0 1 0 0 18c1.4 0 2.1-.9 2.1-2 0-1.6-1.2-1.8-1.2-2.9 0-1 .8-1.7 1.8-1.7H17a4 4 0 0 0 4-4C21 6 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.1" fill="currentColor"/><circle cx="10" cy="7.3" r="1.1" fill="currentColor"/><circle cx="14.3" cy="7.3" r="1.1" fill="currentColor"/>'},
    {k:'theme',n:'Giao diện',c:'#fbbf24',ic:'<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/>'},
    {k:'fx',n:'Hiệu ứng',c:'#34d399',ic:'<path d="M11 3l1.8 5.2L18 10l-5.2 1.8L11 17l-1.8-5.2L4 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>'},
    {k:'tools',n:'Tiện ích',c:'#f472b6',ic:'<rect x="4" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6"/>'},
    {k:'lang',n:'Ngôn ngữ',c:'#22d3ee',ic:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>'}
  ];
  var tabs='';
  PL.forEach(function(p){tabs+='<button type="button" class="isl-tab" role="tab" data-tab="'+p.k+'" style="--c:'+p.c+'" aria-selected="false"><svg viewBox="0 0 24 24" aria-hidden="true">'+p.ic+'</svg></button>'});
  var dd=document.createElement('div');dd.id='isl';dd.className='dd';
  dd.innerHTML=
   '<button type="button" class="dd-tab" aria-expanded="false" aria-controls="isl-panel"><span class="rpw"></span><span class="dd-g l" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span class="dd-g r" aria-hidden="true"><i></i><i></i><i></i><i></i></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>'+
   '<div class="dd-panel" id="isl-panel" role="region"><div class="isl-in"><div class="isl-tabs" role="tablist">'+tabs+'</div>'+
    '<div class="isl-card" data-card="music"><div class="isl-k"><span data-l="Nhạc"></span><span class="isl-eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span></div><b class="isl-t" data-f="mt"></b><div class="isl-s" data-f="ma"></div>'+
      '<div class="isl-ly e" data-f="ly" aria-live="off"></div>'+
      '<input class="isl-rg" type="range" min="0" max="1000" value="0" step="1" disabled data-f="sk" data-lt="Tua nhạc">'+
      '<div class="isl-tm"><span data-f="mc">0:00</span><span data-f="md">0:00</span></div>'+
      '<div class="isl-ctl">'+
        '<button type="button" class="isl-b" data-act="shuf" data-lt="Phát ngẫu nhiên" aria-pressed="false"><svg class="st" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h3.5c5 0 6 10 11 10H21M3 17h3.5c1.8 0 3-1.2 4-2.6M13.5 9.6C14.5 8.2 15.7 7 17.5 7H21M18.5 4.5L21 7l-2.5 2.5M18.5 14.5L21 17l-2.5 2.5"/></svg></button>'+
        '<button type="button" class="isl-b" data-act="prev" data-lt="Bài trước"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5v14M19 5l-9 7 9 7z"/></svg></button>'+
        '<button type="button" class="isl-b" data-act="back" data-lt="Lùi 10 giây"><svg class="st" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.4-5.5M4.5 4v4h4"/><text x="12" y="15.2" font-size="7" text-anchor="middle" fill="currentColor" stroke="none">10</text></svg></button>'+
        '<button type="button" class="isl-b main" data-act="play" data-lt="Phát hoặc tạm dừng" aria-pressed="false"><svg class="pl" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5l11 7-11 7z"/></svg><svg class="pa" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14" stroke-width="3.2" stroke-linecap="round"/></svg></button>'+
        '<button type="button" class="isl-b" data-act="fwd" data-lt="Tua tới 10 giây"><svg class="st" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.5 12a7.5 7.5 0 1 1-2.4-5.5M19.5 4v4h-4"/><text x="12" y="15.2" font-size="7" text-anchor="middle" fill="currentColor" stroke="none">10</text></svg></button>'+
        '<button type="button" class="isl-b" data-act="next" data-lt="Bài sau"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 5v14M5 5l9 7-9 7z"/></svg></button></div>'+
      '<div class="isl-vol"><button type="button" class="isl-b" data-act="mute" data-lt="Bật hoặc tắt tiếng" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path class="w" d="M15.5 9a4 4 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11"/><path class="x" d="M16 9.5l5 5M21 9.5l-5 5"/></svg></button>'+
      '<input class="isl-rg" type="range" min="0" max="100" value="35" step="1" data-f="vol" data-lt="Âm lượng"></div>'+
      '<div class="isl-chips">'+
        '<button type="button" class="isl-chip" data-act="rep" data-lt="Lặp bài" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 2l3 3-3 3M4 11V9a4 4 0 0 1 4-4h12M7 22l-3-3 3-3M20 13v2a4 4 0 0 1-4 4H4"/></svg><span data-l="Lặp bài"></span></button>'+
        '<button type="button" class="isl-chip" data-act="spd" data-lt="Tốc độ phát"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 14l4-5"/><path d="M4.5 18a9 9 0 1 1 15 0"/></svg><span data-f="spdv">1×</span></button>'+
        '</div>'+
      '<div class="isl-pl"><div class="isl-k"><button type="button" class="isl-plh" data-f="pltog" aria-expanded="true" aria-controls="isl-ml-list"><span><span data-l="Danh sách bài"></span><span data-f="plc"></span></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button></div><ul class="isl-ml" id="isl-ml-list" data-f="pl" role="list"></ul></div></div>'+
    '<div class="isl-card" data-card="color"><div class="isl-k" data-l="Màu trang"></div><b class="isl-t" data-f="acn"></b><div class="isl-acg" data-f="acg" role="radiogroup"></div><div class="isl-s" data-l="Bấm một màu để đổi cả trang · phím C"></div></div>'+
    '<div class="isl-card" data-card="theme"><div class="isl-k" data-l="Giao diện"></div><div class="isl-seg"><button type="button" data-act="th-light" data-l="Sáng" aria-pressed="false"></button><button type="button" data-act="th-dark" data-l="Tối" aria-pressed="false"></button><button type="button" data-act="th-auto" data-l="Tự động" aria-pressed="false"></button></div></div>'+
    '<div class="isl-card" data-card="fx"><div class="isl-k" data-l="Hiệu ứng"></div>'+
      '<button type="button" class="isl-row" data-act="fx-motion" aria-pressed="false"><span data-l="Chuyển động"></span><i class="isl-sw"></i></button>'+
      '<button type="button" class="isl-row" data-act="fx-color" aria-pressed="false"><span data-l="Màu chữ"></span><i class="isl-sw"></i></button>'+
      '<button type="button" class="isl-row" data-act="fx-sfx" aria-pressed="false"><span data-l="Âm thanh khi nhấn"></span><i class="isl-sw"></i></button>'+
      '<button type="button" class="isl-row" data-act="fx-wx" aria-pressed="false"><span data-l="Mưa / tuyết"></span><i class="isl-sw"></i></button>'+
      '<button type="button" class="isl-row" data-act="fx-gif" aria-pressed="false"><span data-l="Ảnh GIF"></span><i class="isl-sw"></i></button></div>'+
    '<div class="isl-card" data-card="tools"><div class="isl-k" data-l="Tiện ích"></div>'+
      '<div class="isl-tiles">'+
        '<button type="button" class="isl-tile" data-act="srch"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.2"/><path d="M15.6 15.6l5 5"/></svg><span data-l="Tìm nhanh"></span></button>'+
        '<button type="button" class="isl-tile" data-act="fs" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg><span data-f="fst"></span></button>'+
        '<button type="button" class="isl-tile" data-act="cp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg><span data-l="Sao chép liên kết"></span></button>'+
        '<button type="button" class="isl-tile" data-act="rnd"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3.5"/><circle cx="9" cy="9" r="1.1" fill="currentColor"/><circle cx="15" cy="15" r="1.1" fill="currentColor"/><circle cx="15" cy="9" r="1.1" fill="currentColor"/><circle cx="9" cy="15" r="1.1" fill="currentColor"/></svg><span data-l="Ngẫu nhiên"></span></button>'+
        '<button type="button" class="isl-tile" data-act="lite" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19c0-9 5-14 14-14 0 9-5 14-14 14z"/><path d="M5 19l8-8"/></svg><span data-l="Chế độ nhẹ"></span></button>'+
        '<button type="button" class="isl-tile" data-act="sh"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="12" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="18" cy="18" r="2.4"/><path d="M8.1 10.9l7.8-3.8M8.1 13.1l7.8 3.8"/></svg><span data-l="Chia sẻ"></span></button></div>'+
      '<div class="isl-fact" data-f="fact" hidden><p data-f="factx"></p><button type="button" class="isl-chip" data-act="factgo" hidden><span data-l="Tới chỗ này"></span></button></div>'+
      '<div class="isl-fs"><span data-l="Cỡ chữ"></span><button type="button" class="isl-b" data-act="fs-" data-lt="Giảm cỡ chữ">A−</button><output data-f="fsv">100%</output><button type="button" class="isl-b" data-act="fs+" data-lt="Tăng cỡ chữ">A+</button><button type="button" class="isl-b reset" data-act="fs0" data-l="Mặc định"></button></div></div>'+
    '<div class="isl-card" data-card="lang"><div class="isl-k" data-l="Ngôn ngữ"></div><div class="isl-seg"><button type="button" data-act="lg-vi" aria-pressed="false">Tiếng Việt</button><button type="button" data-act="lg-en" aria-pressed="false">English</button></div></div>'+
   '<button type="button" class="isl-chip ddc" data-act="ddc" hidden><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/></svg><span data-l="Đặt về giữa"></span></button>'+
   '</div></div>';
  (document.querySelector('header.bar')||document.body).appendChild(dd);
  var btn=dd.querySelector('.dd-tab');
  function F(n){return dd.querySelector('[data-f="'+n+'"]')}
  var open=false,tab='music';
  function mmss(s){s=Math.max(0,Math.floor(s||0));return Math.floor(s/60)+':'+('0'+s%60).slice(-2)}
  function labels(){
    if(typeof plLab==='function')plLab();
    [].forEach.call(dd.querySelectorAll('[data-l]'),function(e){e.textContent=T(e.getAttribute('data-l'))});
    [].forEach.call(dd.querySelectorAll('[data-lt]'),function(e){var t=T(e.getAttribute('data-lt'));e.setAttribute('aria-label',t);e.title=t});
    [].forEach.call(dd.querySelectorAll('.isl-tab'),function(e){var p=PL.filter(function(x){return x.k===e.getAttribute('data-tab')})[0],t=T(p.n);e.setAttribute('aria-label',t);e.title=t});
    var l=T(open?'Đóng bảng chức năng':'Mở bảng chức năng');btn.setAttribute('aria-label',l);btn.title=l+' · '+T('Kéo để dời, bấm đúp để về giữa');
  }
  var au=$('bgmau');
  var sk=F('sk'),vr=F('vol'),seeking=false;
  /* danh sách bài: sao chép từ danh sách của trình phát (giữ đúng thứ tự, bài đang phát, bài thiếu file) */
  var pl=F('pl'),plSig='',plCur=null;
  var plOpen=true,pt=F('pltog');
  try{plOpen=localStorage.getItem('ddpl')!=='0'}catch(e){}
  function plLab(){if(!pt)return;var l=T(plOpen?'Ẩn danh sách bài':'Hiện danh sách bài');pt.title=l;pt.setAttribute('aria-label',l)}
  function plShow(o,save){
    plOpen=o;if(pl)pl.hidden=!o;
    if(pt)pt.setAttribute('aria-expanded',o?'true':'false');
    plLab();if(o)plReveal();
    if(save){try{localStorage.setItem('ddpl',o?'1':'0')}catch(e){}}
  }
  if(pt)pt.addEventListener('click',function(){plShow(!plOpen,true)});
  function he(x){return String(x).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function plReveal(){var c=pl&&pl.querySelector('.cur');if(!c||!pl.clientHeight)return;pl.scrollTop=Math.max(0,c.offsetTop-(pl.clientHeight-c.offsetHeight)/2)}
  function plist(){
    var src=$('bgml');if(!pl||!src)return;
    var bs=src.querySelectorAll('button[data-i]');
    var sig=[].map.call(bs,function(b){return b.getAttribute('data-i')+(b.classList.contains('cur')?'*':'')+(b.disabled?'x':'')+'~'+b.textContent}).join('|');
    if(sig===plSig)return;plSig=sig;
    var st=pl.scrollTop,fi=document.activeElement&&pl.contains(document.activeElement)?document.activeElement.getAttribute('data-i'):null,html='',curKey=null;
    [].forEach.call(bs,function(b){
      var c=b.classList.contains('cur'),g=function(q){var e=b.querySelector(q);return e?e.textContent:''};
      if(c)curKey=b.getAttribute('data-i');
      html+='<li><button type="button" class="isl-pi'+(c?' cur':'')+'" data-i="'+b.getAttribute('data-i')+'" title="'+he(b.title)+'"'+(c?' aria-current="true"':'')+(b.disabled?' disabled':'')+'><span class="ix">'+he(g('.ix'))+'</span><span class="tx"><span class="nm">'+he(g('.nm'))+'</span><small>'+he(g('small'))+'</small></span></button></li>';
    });
    pl.innerHTML=html;pl.scrollTop=st;
    var pc=F('plc');if(pc)pc.textContent=bs.length?' ('+bs.length+')':'';
    if(curKey!==plCur){plCur=curKey;plReveal()}
    if(fi!==null){var nf=pl.querySelector('button[data-i="'+fi+'"]');if(nf&&!nf.disabled)try{nf.focus({preventScroll:true})}catch(e){}}
  }
  if(pl)pl.addEventListener('click',function(e){
    var b=e.target.closest('button[data-i]');if(!b||b.disabled)return;
    var m=$('bgml');m=m&&m.querySelector('button[data-i="'+b.getAttribute('data-i')+'"]');
    if(m)m.click();
  });
  plShow(plOpen,false);
  var bml=$('bgml');if(bml)new MutationObserver(plist).observe(bml,{childList:true,subtree:true,attributes:true,attributeFilter:['class','disabled']});
  function music(){
    var t=($('bgmt')||{}).textContent||'',a=($('bgma')||{}).textContent||'',has=au&&(au.currentSrc||au.getAttribute('src'));
    F('mt').textContent=has?(t||T('Nhạc nền')):T('Nhạc nền');
    F('ma').textContent=has?a:T('Bấm ▶ để bật nhạc');
    dd.querySelector('[data-act="play"]').setAttribute('aria-pressed',au&&!au.paused?'true':'false');
    var sh=$('bgmshuf'),sb=dd.querySelector('[data-act="shuf"]');
    if(sh){sb.classList.toggle('on',sh.getAttribute('aria-pressed')==='true');sb.setAttribute('aria-pressed',sh.getAttribute('aria-pressed'))}
    dd.classList.toggle('playing',!!(au&&!au.paused));
    prog();volUI();lyric();extras();plist();
  }
  function prog(){
    if(!au)return;var d=au.duration,c=au.currentTime||0,ok=d&&isFinite(d);
    sk.disabled=!ok;
    if(!seeking)sk.value=ok?Math.round(c/d*1000):0;
    sk.style.setProperty('--p',(sk.value/10)+'%');
    F('mc').textContent=mmss(seeking&&ok?sk.value/1000*d:c);F('md').textContent=ok?mmss(d):'0:00';
  }
  /* tua: kéo thanh trượt, thả ra thì nhảy tới vị trí đó */
  sk.addEventListener('input',function(){seeking=true;prog()});
  sk.addEventListener('change',function(){var d=au&&au.duration;if(d&&isFinite(d)){try{au.currentTime=sk.value/1000*d}catch(e){}}seeking=false;prog()});
  /* âm lượng: nối với thanh âm lượng của trình phát nhạc gốc */
  function volUI(){
    if(!au)return;var m=au.muted||au.volume===0;
    vr.value=m?0:Math.round(au.volume*100);vr.style.setProperty('--p',vr.value+'%');
    dd.querySelector('[data-act="mute"]').setAttribute('aria-pressed',m?'true':'false');
  }
  vr.addEventListener('input',function(){
    if(!au)return;if(au.muted)au.muted=false;
    var pv=$('bgmvol');
    if(pv){pv.value=vr.value;pv.dispatchEvent(new Event('input',{bubbles:true}))}else au.volume=vr.value/100;
    volUI();
  });
  /* một dòng lời: lấy đúng dòng đang sáng trong khung lời của trình phát nhạc gốc */
  function lyric(){
    var lb=$('lyb'),ln=$('lyn'),el=F('ly'),on=lb&&lb.querySelector('p.on'),tx='',cls='',st=ln&&!ln.hidden?ln.textContent.trim():'';
    if(lb&&lb.classList.contains('plain')){tx=st;cls='e'}
    else{
      if(on)tx=on.textContent.replace(/\u00a0/g,' ').trim();
      if(!tx&&lb&&lb.querySelectorAll('p').length){tx='\u266a \u266a \u266a';cls='n'}
      else if(!tx&&st){tx=st;cls='e'}
    }
    if(!tx){tx=T('Lời bài hát sẽ hiện ở đây');cls='e'}
    if(el.textContent===tx)return;
    el.textContent=tx;el.className='isl-ly'+(cls?' '+cls:'')+(tx.length>34?' sm':'');
    void el.offsetWidth;el.classList.add('chg');
  }
  /* cho trình phát gốc biết bảng này đang cần dòng lời, để nó vẫn cập nhật dù khung nhạc gốc đang đóng */
  function lyOn(){
    window.__lyForce=!!(open&&tab==='music');
    if(window.__ly){try{window.__ly.loop(!!(au&&!au.paused));if(window.__lyForce)window.__ly.tick(true,true)}catch(e){}}
  }

  /* ---- tính năng thêm: lặp bài, tốc độ, hẹn giờ tắt nhạc, toàn màn hình, cỡ chữ ---- */
  var SPD=[1,1.25,1.5,0.75],FS=100;
  var foc={m:0,end:0,h:0,done:0},FOC=[0,15,25,45],actx=null,AUTO=false;
  try{AUTO=localStorage.getItem('islauto')==='1'}catch(e){}
  var mql=matchMedia('(prefers-color-scheme: light)');
  function saveAuto(){try{localStorage.setItem('islauto',AUTO?'1':'0')}catch(e){}}
  function autoTheme(){
    if(!AUTO)return;var want=mql.matches?'light':'dark',cur=R.getAttribute('data-theme')==='light'?'light':'dark';
    if(want!==cur){var b=$('theme');if(b)b.click()}
  }
  if(mql.addEventListener)mql.addEventListener('change',autoTheme);else if(mql.addListener)mql.addListener(autoTheme);
  setTimeout(autoTheme,500);
  function beep(){
    try{
      actx=actx||new (window.AudioContext||window.webkitAudioContext)();if(actx.resume)actx.resume();
      [0,.3].forEach(function(d,i){var o=actx.createOscillator(),g=actx.createGain(),t=actx.currentTime+d;
        o.frequency.value=i?880:660;o.connect(g);g.connect(actx.destination);
        g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.18,t+.03);g.gain.exponentialRampToValueAtTime(.0001,t+.26);o.start(t);o.stop(t+.28)});
    }catch(e){}
  }
  function focTick(){
    var b=row('foc'),sp=F('focv');if(!b||!sp)return;
    if(foc.done){sp.textContent=T('Hết giờ! Nghỉ chút nhé');b.classList.add('on');return}
    if(!foc.end){sp.textContent=T('Tập trung');b.classList.remove('on');return}
    var r=Math.max(0,Math.round((foc.end-Date.now())/1000));
    sp.textContent=mmss(r)+' · '+foc.m+'′';b.classList.add('on');
    if(r<=0){
      clearInterval(foc.h);foc.end=0;foc.m=0;foc.done=1;beep();if(!open)dd.classList.add('alert');
      setTimeout(function(){foc.done=0;dd.classList.remove('alert');focTick()},7000);
    }
  }
  try{FS=+localStorage.getItem('fsz')||100}catch(e){}
  if(FS<85||FS>130)FS=100;
  function applyFS(){R.style.fontSize=FS===100?'':FS+'%';try{localStorage.setItem('fsz',FS)}catch(e){}}
  if(FS!==100)applyFS();
  function extras(){
    if(au){
      row('rep').setAttribute('aria-pressed',au.loop?'true':'false');
      F('spdv').textContent=(au.playbackRate||1)+'×';
    }
    var fe=document.fullscreenEnabled,t=row('fs'),on=!!document.fullscreenElement;
    t.hidden=!fe;pr(t,on);F('fst').textContent=T(on?'Thoát toàn màn hình':'Toàn màn hình');
    row('rnd').hidden=!(window.__FACTS||$('rndb'));
    F('fsv').textContent=FS+'%';
    row('sh').hidden=!navigator.share;
    var lt=row('lite');if(lt){var lo=R.classList.contains('lite');pr(lt,lo);lt.classList.toggle('on',lo)}
    focTick();
  }
  /* câu ngẫu nhiên: lấy từ danh sách FACTS của trang, hiện ngay trong bảng, mỗi lần bấm một câu mới */
  var lastF=-1,curF=null;
  function T2(x){return typeof window.__T==='function'?window.__T(x):x}
  function fact(){
    var L=window.__FACTS;
    if(!L||!L.length){var r=$('rndb');if(r){setOpen(false);r.click()}return}
    var i;do{i=Math.floor(Math.random()*L.length)}while(i===lastF&&L.length>1);
    lastF=i;curF=L[i];
    var box=F('fact');box.hidden=false;box.style.animation='none';void box.offsetWidth;box.style.animation='';
    F('factx').textContent=T2(curF.t);row('factgo').hidden=!curF.h;
  }
  function factGo(){
    var h=curF&&curF.h;if(!h)return;setOpen(false);
    if(h.charAt(1)==='/'){location.hash=h;return}
    var el=document.getElementById(h.slice(1));
    if(location.hash===h){if(window.__openSec)window.__openSec(h.slice(1));if(el)el.scrollIntoView({behavior:R.getAttribute('data-motion')==='off'?'auto':'smooth'})}
    else location.hash=h;
  }
  document.addEventListener('langchange',function(){if(curF&&!F('fact').hidden)F('factx').textContent=T2(curF.t)});
  function copyLink(t){
    var u=location.href.split('#')[0],s=t.querySelector('span');
    function ok(){s.textContent=T('Đã sao chép');t.classList.add('on');setTimeout(function(){s.textContent=T('Sao chép liên kết');t.classList.remove('on')},1600)}
    function fb(){var x=document.createElement('textarea');x.value=u;x.style.cssText='position:fixed;opacity:0';document.body.appendChild(x);x.select();try{document.execCommand('copy');ok()}catch(e){}x.remove()}
    if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(u).then(ok,fb);else fb();
  }
  function extra(a,t){
    switch(a){
      case 'ddc':if(window.__ddSnap)window.__ddSnap();return true;
      case 'srch':setOpen(false);if(window.__cmdOpen)window.__cmdOpen();return true; /* nút tìm trên thanh menu đã bỏ */
      case 'lite':var lon=!R.classList.contains('lite');R.classList.toggle('lite',lon);try{localStorage.setItem('lite',lon?'1':'0')}catch(e){}extras();return true;
      case 'fs':
        try{if(document.fullscreenElement)document.exitFullscreen();else R.requestFullscreen()}catch(e){}
        return true;
      case 'cp':copyLink(t);return true;
      case 'sh':if(navigator.share)navigator.share({title:document.title,url:location.href.split('#')[0]}).catch(function(){});return true;
      case 'foc':
        if(foc.done){foc.done=0;dd.classList.remove('alert')}
        foc.m=FOC[(FOC.indexOf(foc.m)+1)%FOC.length];clearInterval(foc.h);
        if(foc.m){foc.end=Date.now()+foc.m*60000;foc.h=setInterval(focTick,1000);try{actx=actx||new (window.AudioContext||window.webkitAudioContext)()}catch(e){}}else foc.end=0;
        focTick();return true;
      case 'th-auto':AUTO=true;saveAuto();autoTheme();setTimeout(sync,200);return true;
      case 'th-light':case 'th-dark':if(AUTO){AUTO=false;saveAuto()}return false;
      case 'rnd':fact();return true;
      case 'factgo':factGo();return true;
      case 'fs-':FS=Math.max(85,FS-5);applyFS();extras();return true;
      case 'fs+':FS=Math.min(130,FS+5);applyFS();extras();return true;
      case 'fs0':FS=100;applyFS();extras();return true;
      case 'rep':if(au)au.loop=!au.loop;extras();return true;
      case 'spd':if(au){var i=SPD.indexOf(au.playbackRate);au.defaultPlaybackRate=au.playbackRate=SPD[(i+1)%SPD.length];extras()}return true;
    }
    return false;
  }
  document.addEventListener('fullscreenchange',extras);
  if(au)au.addEventListener('ratechange',extras);
  var STL={online:'Trực tuyến',idle:'Vắng mặt',dnd:'Đừng làm phiền',offline:'Ngoại tuyến'},SC={online:'#23a55a',idle:'#f0b232',dnd:'#f23f43',offline:'#80848e'};
  var KT={0:'Đang chơi',1:'Đang phát trực tiếp',2:'Đang nghe',3:'Đang xem',5:'Đang thi đấu'};
  function act(){
    var d=window.LANY;if(!d)return null;
    if(d.listening_to_spotify&&d.spotify)return{k:'Đang nghe Spotify',n:d.spotify.song||'Spotify',s:d.spotify.artist||''};
    var a=(d.activities||[]).filter(function(x){return x.type!==4})[0];
    return a?{k:KT[a.type]||'Đang chơi',n:a.name||'',s:a.details||a.state||''}:null;
  }
  /* tab Màu trang: lấy danh sách màu từ bảng màu (#acpop), bấm là đổi bằng hiệu ứng dải màu như ở thanh menu */
  function colors(){
    var g=F('acg');if(!g)return;var src=document.querySelectorAll('#acpop [data-k]'),cur=R.getAttribute('data-accent')||'lam';
    if(g.childElementCount!==src.length){
      g.innerHTML=[].map.call(src,function(b){return '<button type="button" class="isl-acb'+(b.classList.contains('mx')?' mx':'')+'" role="radio" data-ac="'+b.getAttribute('data-k')+'" style="'+(b.getAttribute('style')||'')+'"><i></i></button>'}).join('');
    }
    [].forEach.call(g.children,function(b){
      var k=b.getAttribute('data-ac'),s=document.querySelector('#acpop [data-k="'+k+'"] span'),nm=s?s.textContent:k;
      b.setAttribute('aria-checked',k===cur?'true':'false');b.title=nm;b.setAttribute('aria-label',nm);
      if(k===cur)F('acn').textContent=nm;
    });
  }
  new MutationObserver(function(){colors()}).observe(R,{attributes:true,attributeFilter:['data-accent','lang']});
  dd.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-ac]');if(b&&window.setAccent){window.setAccent(b.getAttribute('data-ac'));setTimeout(colors,0)}});
  function disc(){
    if(!F('dd'))return; /* thẻ Discord đã bỏ khỏi bảng này */
    var d=window.LANY,st=d&&STL[d.discord_status]?d.discord_status:'offline',a=act(),cs=d&&(d.activities||[]).filter(function(x){return x.type===4})[0];
    F('dd').style.background=SC[st];F('ds').textContent=T(STL[st]);
    F('dn').textContent=a?a.n:T('Không làm gì cả');
    F('dx').textContent=a?a.s:(cs&&cs.state||'');
    F('dk').textContent=a?T(a.k):'';
  }
  function pr(el,on){el.setAttribute('aria-pressed',on?'true':'false')}
  function row(a){return dd.querySelector('[data-act="'+a+'"]')}
  function sync(){
    var light=R.getAttribute('data-theme')==='light';
    pr(row('th-light'),light&&!AUTO);pr(row('th-dark'),!light&&!AUTO);pr(row('th-auto'),AUTO);
    pr(row('fx-motion'),R.getAttribute('data-motion')!=='off');
    var wx=$('wxb'),gf=$('gifbtn'),cb=$('colors'),sb=$('sfx');
    row('fx-wx').hidden=!wx;row('fx-gif').hidden=!gf;row('fx-color').hidden=!cb;row('fx-sfx').hidden=!sb;
    if(wx)pr(row('fx-wx'),wx.getAttribute('aria-pressed')==='true');
    if(gf)pr(row('fx-gif'),gf.getAttribute('aria-pressed')==='true');
    if(cb)pr(row('fx-color'),R.getAttribute('data-color')!=='off');
    if(sb)pr(row('fx-sfx'),sb.getAttribute('aria-pressed')==='true');
    pr(row('lg-vi'),!EN());pr(row('lg-en'),EN());
    music();disc();
  }
  function show(k){
    tab=k;if(open)playAnim();
    var pc=PL.filter(function(x){return x.k===k})[0];if(pc){dd.querySelector('.dd-panel').style.setProperty('--ac',pc.c);dd.style.setProperty('--ac',pc.c)}
    [].forEach.call(dd.querySelectorAll('.isl-card'),function(c){c.classList.toggle('on',c.getAttribute('data-card')===k)});
    [].forEach.call(dd.querySelectorAll('.isl-tab'),function(t){t.setAttribute('aria-selected',t.getAttribute('data-tab')===k?'true':'false')});
    sync();lyOn();
    if(k==='music'){plist();plReveal()}
    if(k==='color')colors();
  }
  var plT;function playAnim(){dd.classList.add('pl');clearTimeout(plT);plT=setTimeout(function(){dd.classList.remove('pl')},800)}
  function setOpen(o){open=o;dd.classList.toggle('open',o);if(o)playAnim();if(o)dd.classList.remove('alert');setTimeout(lyOn,0);btn.setAttribute('aria-expanded',o?'true':'false');labels();if(o)show(tab);if(window.__ddLift)window.__ddLift()}
  /* kéo mũi tên sang trái/phải (nhớ vị trí), bấm đúp hoặc nút "Đặt về giữa" để về giữa */
  (function(){
    var cur=0,sx=0,x0=0,pid=null,drag=false,sup=false,KEY='ddx';
    var curP=0;
    function lift(){
      var bar=dd.parentNode,up=false;
      if(bar&&bar.classList&&bar.classList.contains('mini')){
        var wrap=bar.querySelector('.wrap');
        if(wrap){
          var br=bar.getBoundingClientRect(),wr=wrap.getBoundingClientRect(),mid=br.left+br.width/2,
              lo=mid+cur-btn.offsetWidth/2,hi=mid+cur+btn.offsetWidth/2,pn=dd.querySelector('.dd-panel');
          if(open&&pn){lo=Math.min(lo,mid+curP-pn.offsetWidth/2);hi=Math.max(hi,mid+curP+pn.offsetWidth/2)}
          up=hi<wr.left-12||lo>wr.right+12;
        }
      }
      dd.classList.toggle('up',up);
    }
    window.__ddLift=lift;
    (function(){
      var bar=dd.parentNode;if(!bar||!bar.classList)return;
      new MutationObserver(function(){lift();setTimeout(lift,600)}).observe(bar,{attributes:true,attributeFilter:['class']});
      var w=bar.querySelector('.wrap');
      if(w)w.addEventListener('transitionend',function(e){if(e.propertyName==='max-width')lift()});
    })();
    
    function W(){return document.documentElement.clientWidth}
    function setX(px,save){
      var m=Math.max(0,W()/2-btn.offsetWidth/2-8);px=Math.max(-m,Math.min(m,px));cur=px;
      var pn=dd.querySelector('.dd-panel'),mp=Math.max(0,W()/2-(pn?pn.offsetWidth:0)/2-8),pp=Math.max(-mp,Math.min(mp,px));
      dd.style.setProperty('--ddx',px+'px');dd.style.setProperty('--ddp',pp+'px');curP=pp;lift();
      var c=dd.querySelector('[data-act="ddc"]');if(c)c.hidden=Math.abs(px)<2;
      if(save){try{localStorage.setItem(KEY,(px/W()).toFixed(4))}catch(e){}}
    }
    function snap(){dd.classList.add('snap');setX(0,true);setTimeout(function(){dd.classList.remove('snap')},450)}
    window.__ddSnap=snap;
    try{var f=parseFloat(localStorage.getItem(KEY));if(f)setX(f*W(),false)}catch(e){}
    btn.addEventListener('pointerdown',function(e){if(e.button>0)return;pid=e.pointerId;sx=e.clientX;x0=cur;drag=false});
    btn.addEventListener('pointermove',function(e){
      if(pid===null||e.pointerId!==pid)return;var d=e.clientX-sx;
      if(!drag){if(Math.abs(d)<5)return;drag=true;dd.classList.add('dragging');try{btn.setPointerCapture(pid)}catch(_){}}
      setX(x0+d,false);
    });
    function end(e){
      if(pid===null||e.pointerId!==pid)return;pid=null;
      if(drag){drag=false;dd.classList.remove('dragging');sup=true;setTimeout(function(){sup=false},0);setX(cur,true)}
    }
    btn.addEventListener('pointerup',end);btn.addEventListener('pointercancel',end);
    btn.addEventListener('click',function(e){if(sup){e.stopImmediatePropagation();e.preventDefault();sup=false}},true);
    btn.addEventListener('dblclick',snap);
    addEventListener('resize',function(){setX(cur,false)});
  })();
  btn.addEventListener('click',function(){
    btn.classList.remove('pop');void btn.offsetWidth;btn.classList.add('pop');setTimeout(function(){btn.classList.remove('pop')},750);
    setOpen(!open);
  });
  /* hiệu ứng sóng lan khi bấm bất kì nút nào trong bảng (và rung nhẹ trên điện thoại) */
  dd.addEventListener('pointerdown',function(e){
    var h=e.target.closest&&e.target.closest('.dd-tab,.isl-b,.isl-chip,.isl-tile,.isl-tab,.isl-seg button,.isl-row');if(!h||!dd.contains(h))return;
    if(e.pointerType==='touch'&&navigator.vibrate){try{navigator.vibrate(6)}catch(x){}}
    if(R.getAttribute('data-motion')==='off')return;
    var host=h.querySelector(':scope>.rpw')||h,r=h.getBoundingClientRect(),z=Math.max(r.width,r.height)*2.2,sp=document.createElement('span');
    sp.className='rp';sp.style.cssText='width:'+z+'px;height:'+z+'px;left:'+(e.clientX-r.left-z/2)+'px;top:'+(e.clientY-r.top-z/2)+'px';
    host.appendChild(sp);sp.addEventListener('animationend',function(){sp.remove()});
  });
  dd.addEventListener('click',function(e){
    var t=e.target.closest('[data-tab],[data-act]');if(!t||!dd.contains(t))return;
    if(t.hasAttribute('data-tab')){show(t.getAttribute('data-tab'));return}
    var a=t.getAttribute('data-act'),th=function(){return R.getAttribute('data-theme')==='light'};
    function c(id){var b=$(id);if(b)b.click()}
    if(extra(a,t))return;
    if(a==='prev')c('bgmprev');else if(a==='next')c('bgmn');else if(a==='play')c('bgmq');else if(a==='back')c('bgmback');else if(a==='fwd')c('bgmfwd');else if(a==='shuf')c('bgmshuf');else if(a==='mute')c('bgmmute');
    else if(a==='th-light'){if(!th())c('theme')}else if(a==='th-dark'){if(th())c('theme')}
    else if(a==='fx-motion')c('motion');else if(a==='fx-color')c('colors');else if(a==='fx-sfx')c('sfx');else if(a==='fx-wx')c('wxb');else if(a==='fx-gif')c('gifbtn');
    else if(a==='lg-vi'){if(EN())c('lang')}else if(a==='lg-en'){if(!EN())c('lang')}
    setTimeout(sync,120);
  });
  document.addEventListener('pointerdown',function(e){if(open&&!dd.contains(e.target))setOpen(false)},true);
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&open){setOpen(false);btn.focus()}});
  if(au){
    ['play','pause','ended','emptied','loadedmetadata','durationchange'].forEach(function(ev){au.addEventListener(ev,function(){music()})});
    au.addEventListener('timeupdate',function(){var d=au.duration;dd.style.setProperty('--mp',(d&&isFinite(d)?Math.min(100,(au.currentTime||0)/d*100):0)+'%');if(open&&tab==='music')prog()});
    au.addEventListener('volumechange',volUI);
    var lb=$('lyb');if(lb)new MutationObserver(lyric).observe(lb,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});
    var lq=$('lyn');if(lq)new MutationObserver(lyric).observe(lq,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['hidden']});
    var sh=$('bgmshuf');if(sh)new MutationObserver(music).observe(sh,{attributes:true,attributeFilter:['aria-pressed','class']});
    var bt=$('bgmt');if(bt)new MutationObserver(music).observe(bt,{childList:true,characterData:true,subtree:true});
  }
  document.addEventListener('lanyard',disc);
  new MutationObserver(function(ms){
    ms.forEach(function(m){if(m.attributeName==='lang')labels()});
    sync();
  }).observe(R,{attributes:true,attributeFilter:['data-theme','lang','data-motion','data-color']});
  labels();show('music');
})();
}catch(e){console.error('[#island-js]',e)}

/* ===================== [#orb-js] ===================== */
try{
(function(){
var o=document.getElementById('orb');if(!o)return;
var c=o.querySelector('.core'),lb=o.querySelector('.lbl'),root=document.documentElement;
var ang=0,vel=0,hov=false,drag=false,moved=0,last=0,raf=0,lt=0,hintT,suppress=false,R=122;
function base(){if(root.getAttribute('data-motion')==='off'||(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches))return 0;return hov?0:11.25}
function put(){o.style.setProperty('--rot',ang.toFixed(2))}
function say(t){lb.textContent=t;lb.classList.add('on')}
function unsay(){lb.classList.remove('on')}
[].forEach.call(o.querySelectorAll('.sat button'),function(b){
 function on(){hov=true;if(!drag)say(b.getAttribute('aria-label'))}function off(){hov=false;if(!drag)unsay()}
 b.addEventListener('mouseenter',on);b.addEventListener('focus',on);b.addEventListener('mouseleave',off);b.addEventListener('blur',off)});
function center(){return o.getBoundingClientRect().top}
function polar(e){var cy=center(),dx=e.clientX,dy=e.clientY-cy;return{a:Math.atan2(dy,dx)*180/Math.PI,d:Math.sqrt(dx*dx+dy*dy)}}
function tick(t){
 var dt=Math.min(.05,(t-lt)/1000||0);lt=t;
 if(!drag){vel+=(base()-vel)*(1-Math.exp(-dt*1.6));ang+=vel*dt;put()}
 raf=o.classList.contains('open')||Math.abs(vel)>.5?requestAnimationFrame(tick):0}
function run(){if(!raf){lt=performance.now();raf=requestAnimationFrame(tick)}}
var pa=0,pt=0;
document.addEventListener('pointerdown',function(e){
 if(!o.classList.contains('open')||e.button>0)return;
 if(c.contains(e.target))return;
 var p=polar(e),onBtn=e.target.closest&&e.target.closest('.sat button');
 var scale=(parseFloat(getComputedStyle(o).getPropertyValue('--r'))||R);
 if(!onBtn&&!(Math.abs(p.d-scale)<30&&e.clientX<scale+40))return;
 drag=true;moved=0;pa=p.a;pt=performance.now();vel=0;unsay();root.classList.add('orb-drag');
 try{e.target.setPointerCapture&&e.target.setPointerCapture(e.pointerId)}catch(_){}
 run();
});
document.addEventListener('pointermove',function(e){
 if(!drag)return;
 var p=polar(e),d=p.a-pa;if(d>180)d-=360;if(d<-180)d+=360;pa=p.a;
 var now=performance.now(),dt=Math.max(8,now-pt)/1000;pt=now;
 ang+=d;moved+=Math.abs(d);vel=vel*.6+(d/dt)*.4;
 if(Math.abs(vel)>720)vel=vel>0?720:-720;put();
});
function end(){if(!drag)return;drag=false;root.classList.remove('orb-drag');suppress=moved>4;setTimeout(function(){suppress=false},0);run()}
document.addEventListener('pointerup',end);document.addEventListener('pointercancel',end);
document.addEventListener('click',function(e){if(suppress){e.stopPropagation();e.preventDefault();suppress=false}},true);
function setOpen(on){o.classList.toggle('open',on);c.setAttribute('aria-expanded',on?'true':'false');
 if(on){run();say('Kéo để xoay');clearTimeout(hintT);hintT=setTimeout(function(){if(!hov&&!drag)unsay()},2200)}else{unsay()}}
c.addEventListener('click',function(e){e.stopPropagation();setOpen(!o.classList.contains('open'))});
document.addEventListener('click',function(e){if(!o.contains(e.target))setOpen(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false)});
var map={top:function(){window.scrollTo({top:0,behavior:'smooth'})},theme:'theme',music:'bgmq',search:'search',rnd:'rndb'};
o.addEventListener('click',function(e){var b=e.target.closest('[data-o]');if(!b)return;var a=map[b.getAttribute('data-o')];
 if(typeof a==='function')a();else{var el=document.getElementById(a);if(el)el.click()}});
})();
}catch(e){console.error('[#orb-js]',e)}

/* ===================== [#orbtab-js] ===================== */
try{
(function(){
  var t=document.getElementById('orbtab');if(!t)return;
  var R=document.documentElement,K='orbshow';
  function set(v,save){
    R.classList.toggle('orb-show',v);t.setAttribute('aria-pressed',v?'true':'false');
    if(!v){var o=document.getElementById('orb');if(o){o.classList.remove('open');var c=o.querySelector('.core');if(c)c.setAttribute('aria-expanded','false');var l=o.querySelector('.lbl');if(l)l.classList.remove('on')}}
    if(save){try{localStorage.setItem(K,v?'1':'0')}catch(e){}}
  }
  var on=false;try{on=localStorage.getItem(K)==='1'}catch(e){}
  set(on,false);
  t.addEventListener('click',function(){set(!R.classList.contains('orb-show'),true)});
})();
}catch(e){console.error('[#orbtab-js]',e)}

/* ===================== [#v7-js] ===================== */
try{
(function(){
  /* bảng dịch riêng (từ điển EN của trang nằm trong khối khác, không dùng chung được): đổi ngôn ngữ thì dịch lại các chữ dưới đây */
  var R=document.documentElement,D={"Đổi màu trang":"Change page colour","Màu của trang":"Page colour","Lam":"Blue","Tím":"Violet","Hồng":"Rose","Hổ phách":"Amber","Rêu":"Moss","Đơn sắc":"Mono","Bạc hà":"Mint","San hô":"Coral","Chanh":"Lime","Bật hoặc tắt nhạc":"Music on or off","Bài tiếp theo":"Next track","Màu được nhớ trên máy này. Tìm nhanh: phím / hoặc Ctrl + K.":"Colour is remembered on this device. Quick search: / or Ctrl + K.","Tiện ích (kéo lên xuống để dời chỗ)":"Tools (drag up or down to move)","Lên đầu trang":"Back to top","Xuống cuối trang":"Go to bottom","Tìm nhanh":"Quick search","Sáng hoặc tối":"Light or dark","Tiếng Việt / English":"Vietnamese / English","Chép liên kết trang":"Copy page link","Tắt hoặc bật hiệu ứng":"Effects on or off","Đã chép liên kết":"Link copied","Không chép được":"Could not copy","Một màu":"Solid","Trộn màu":"Mixed","Hoàng hôn":"Sunset","Cực quang":"Aurora","Thập cẩm":"Candy mix","Màu được nhớ trên máy này. Phím tắt: C.":"Colour is remembered on this device. Shortcut: C.","Thước đọc: bấm hoặc kéo để tua trang":"Reading ruler: click or drag to scrub the page","Mục trước":"Previous section","Mục tiếp theo":"Next section","Đánh dấu chỗ đang đọc":"Bookmark this spot","Về chỗ đã đánh dấu":"Back to bookmark","Tự cuộn trang":"Auto-scroll","Chế độ tập trung":"Focus mode","Cỡ chữ":"Text size","Toàn màn hình":"Full screen","Chia sẻ trang":"Share page","Đã đánh dấu chỗ này":"Spot bookmarked","Mưa mã":"Code rain","Màu trang":"Page colour","Trắng":"White","Đỏ":"Red","Cam":"Orange","Vàng":"Yellow","Xanh lá":"Green","Xanh dương":"Blue","Cầu vồng":"Rainbow","Tự chọn màu":"Pick a colour","Nhỏ":"Thin","Vừa":"Medium","To":"Thick","Giữ nét (không tự mờ)":"Keep strokes (no fade)","Xoá hết nét":"Clear drawing","Thoát bút vẽ (Esc)":"Exit pen (Esc)","Vẽ lên trang · Esc để thoát":"Draw on the page · Esc to exit","Bút vẽ nháp lên trang":"Doodle on the page","Đèn pin":"Flashlight","Bắn pháo giấy":"Confetti","Kiểu chữ":"Font style","Ẩn trang trí":"Hide decorations","Mã QR của trang":"Page QR code","In hoặc lưu PDF":"Print or save PDF","Quét để mở trang này trên điện thoại":"Scan to open this page on your phone","Vẽ lên trang · nét tự mờ · Esc để thoát":"Draw on the page · strokes fade · Esc to exit","Rê chuột để soi · Esc để tắt":"Move to light up · Esc to turn off","Đang tắt hiệu ứng":"Effects are off","Kiểu chữ: Mono":"Font: Mono","Kiểu chữ: Serif":"Font: Serif","Kiểu chữ: mặc định":"Font: default","Đã ẩn trang trí":"Decorations hidden","Đã hiện lại trang trí":"Decorations back","Tất cả":"All","Việt Nam":"Vietnamese","Quốc tế":"International","bài":"tracks","Sắp xếp":"Sort"};
  function T(s){return (R.lang==='en'&&D.hasOwnProperty(s))?D[s]:s}
  /* phần tử có data-v7 (chữ) / data-v7a (aria-label + title) được dịch lại mỗi lần đổi ngôn ngữ */
  function tr(){
    document.querySelectorAll('[data-v7]').forEach(function(e){e.textContent=T(e.getAttribute('data-v7'))});
    document.querySelectorAll('[data-v7a]').forEach(function(e){var s=T(e.getAttribute('data-v7a'));e.setAttribute('aria-label',s);if(!e.classList.contains('dkb')&&!e.classList.contains('dkr'))e.title=s});
  }
  document.addEventListener('langchange',function(){setTimeout(tr,0)});
  var ab=document.getElementById('accent');if(ab)ab.setAttribute('data-v7a','Đổi màu trang');
  function motionOk(){return R.getAttribute('data-motion')!=='off'&&!matchMedia('(prefers-reduced-motion: reduce)').matches}
  function weak(){var n=navigator;return (n.hardwareConcurrency&&n.hardwareConcurrency<=2)||(n.deviceMemory&&n.deviceMemory<=2)||(n.connection&&n.connection.saveData)}
  function busyVT(){return R.classList.contains('vtt')||R.classList.contains('vtl')||R.classList.contains('vtc')}

  /* ===== BẢNG MÀU ===== */
  var PAL=[['lam','Lam','#9cc8ff','#8ec5ff','#a5a8ff'],['tim','Tím','#c3b1ff','#b9a4ff','#e0b0e6'],['hong','Hồng','#ffa8c8','#ff9ec4','#ffb59a'],['amber','Hổ phách','#ffd08a','#ffc477','#f0a97a'],['reu','Rêu','#9ccfae','#8bf0a8','#88a8c4'],['mint','Bạc hà','#8ce0d2','#7fe3d0','#7cc9d6'],['coral','San hô','#ffab94','#ff9b85','#f5a3a8'],['lime','Chanh','#d7e88f','#c6f26b','#a8d98a'],['mono','Đơn sắc','#f2f2f2','#bdbdbd','#6a6a6a'],
    /* trộn màu: ô màu vẽ bằng nhiều màu (cột thứ 6 = danh sách màu cho vòng màu) */
    ['sunset','Hoàng hôn','#ff9a8b','#ffb86b','#c39bff','#ff9a8b,#ffb86b,#f6d365,#ff8fb1,#c39bff'],['aurora','Cực quang','#7ef0c5','#6fd3ff','#a78bfa','#7ef0c5,#6fd3ff,#a78bfa,#5eead4,#c4b5fd'],['candy','Thập cẩm','#ff7ad9','#7afcff','#fff07a','#ff7ad9,#7afcff,#fff07a,#a78bfa,#7aff9e,#ffb17a']];
  var btn=document.getElementById('accent');
  var pop=document.createElement('div');pop.className='acpop';pop.id='acpop';pop.setAttribute('role','dialog');pop.setAttribute('aria-label','Màu của trang');
  function swb(p){var mix=p[5]?';--mix:conic-gradient(from 0deg,'+p[5]+','+p[5].split(',')[0]+')':'';return '<button type="button" role="radio" data-k="'+p[0]+'"'+(p[5]?' class="mx"':'')+' style="--sw1:'+p[2]+';--sw2:'+p[3]+';--sw3:'+p[4]+mix+'"><i></i><span data-v7="'+p[1]+'"></span></button>'}
  pop.innerHTML='<h4 data-v7="Một màu"></h4><div class="acg" role="radiogroup">'+PAL.filter(function(p){return !p[5]}).map(swb).join('')+'</div><h4 class="h2" data-v7="Trộn màu"></h4><div class="acg" role="radiogroup">'+PAL.filter(function(p){return p[5]}).map(swb).join('')+'</div><p data-v7="Màu được nhớ trên máy này. Phím tắt: C."></p>';
  pop.setAttribute('translate','no');
  document.body.appendChild(pop);
  function cur(){return R.getAttribute('data-accent')||'lam'}
  function sync(){[].forEach.call(pop.querySelectorAll('[data-k]'),function(b){b.setAttribute('aria-checked',b.getAttribute('data-k')===cur()?'true':'false')})}
  sync();tr();
  /* mở từ nút trên thanh menu: hiện ngay dưới nút; mở từ thanh tiện ích bên trái: hiện bên phải nút đó */
  var anc=null;
  function place(){
    var a=anc||btn;if(!a)return;var r=a.getBoundingClientRect(),w=pop.offsetWidth||264,h=pop.offsetHeight||240;
    if(anc&&anc.closest('.dock')){pop.style.left=Math.min(innerWidth-w-12,r.right+12)+'px';pop.style.top=Math.max(12,Math.min(innerHeight-h-12,r.top+r.height/2-h/2))+'px';pop.style.transformOrigin='left center';return}
    var x=Math.min(innerWidth-w-12,Math.max(12,r.right-w));pop.style.left=x+'px';pop.style.top=(r.bottom+10)+'px';pop.style.transformOrigin='top right'
  }
  function open(on,from){anc=on?(from||null):anc;pop.classList.toggle('on',on);if(btn)btn.setAttribute('aria-expanded',on&&!anc?'true':'false');if(on){place();sync();var c=pop.querySelector('[aria-checked="true"]');if(c)try{c.focus({preventScroll:true})}catch(e){}}}
  if(btn){btn.addEventListener('click',function(e){e.stopPropagation();open(!pop.classList.contains('on'))})}
  document.addEventListener('click',function(e){if(pop.classList.contains('on')&&!pop.contains(e.target))open(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&pop.classList.contains('on')){open(false);if(btn)btn.focus()}});
  addEventListener('resize',function(){if(pop.classList.contains('on'))place()});
  addEventListener('scroll',function(){if(pop.classList.contains('on'))open(false)},{passive:true});
  /* đổi màu: dải màu mới quét từ trên xuống (View Transitions); máy yếu / tắt hiệu ứng / trình duyệt cũ thì đổi ngay */
  function setAccent(k){
    if(!k||k===cur())return;
    function apply(){R.setAttribute('data-accent',k);try{localStorage.setItem('accent',k)}catch(e){}sync();document.dispatchEvent(new Event('accentchange'))}
    if(motionOk()&&!weak()&&document.startViewTransition&&!document.hidden&&!busyVT()){
      R.classList.add('vtc');
      var band=null,done=function(){R.classList.remove('vtc');if(band)band.remove()};
      try{var vt=document.startViewTransition(function(){apply();band=document.createElement('i');band.id='acband';band.setAttribute('aria-hidden','true');document.body.appendChild(band)});vt.finished.then(done,done);return}catch(e){done()}
    }
    apply();
  }
  pop.addEventListener('click',function(e){var b=e.target.closest('[data-k]');if(b)setAccent(b.getAttribute('data-k'))});
  pop.addEventListener('keydown',function(e){
    if(e.key!=='ArrowRight'&&e.key!=='ArrowLeft'&&e.key!=='ArrowDown'&&e.key!=='ArrowUp')return;
    e.preventDefault();var bs=[].slice.call(pop.querySelectorAll('[data-k]')),i=bs.indexOf(document.activeElement),d=(e.key==='ArrowRight'||e.key==='ArrowDown')?1:-1;
    var n=bs[(i+d+bs.length)%bs.length];n.focus();setAccent(n.getAttribute('data-k'));
  });
  window.setAccent=setAccent;

  /* ===== THANH TIỆN ÍCH MÉP TRÁI (thay cho menu vòng tròn) ===== */
  /* Chỉ gồm thứ CHƯA có ở thanh menu, bảng mũi tên giữa trang hay các nút nổi:
     bút vẽ nháp, đèn pin, pháo giấy, kiểu chữ, ẩn trang trí, mã QR của trang, in / lưu PDF.
     Không có vòng lặp nào chạy khi không dùng: bút vẽ và pháo giấy chỉ vẽ khi đang có nét/hạt, xong là dừng. */
  var I={
    draw:'<path d="M4 20l1.2-4.6L15.6 5a2.1 2.1 0 0 1 3 3L8.2 18.4z"/><path d="M13.8 6.8l3 3"/>',
    light:'<path d="M9 3h6l-1 5.5h-4z"/><path d="M10 8.5h4v3.2a2 2 0 0 1-4 0z"/><path d="M12 15v6M8.5 17.5l-1.5 1.5M15.5 17.5l1.5 1.5"/>',
    confetti:'<path d="M4 20l4.5-11.5 7 7z"/><path d="M14 4.5v2M19.5 10h-2M17 6.5l1.4-1.4M11 3l.6 1.5M20.5 13.5l-1.5-.4"/>',
    font:'<path d="M4 19l5-14h.6L15 19M6 14h7"/><path d="M17 19v-6.5M15 12.5h4"/>',
    zen:'<path d="M12 21c-4-2.5-6.5-5.8-6.5-9.5A6.5 6.5 0 0 1 12 5a6.5 6.5 0 0 1 6.5 6.5c0 3.7-2.5 7-6.5 9.5z"/><path d="M12 5v16"/>',
    qr:'<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><path d="M14 14h2.5v2.5H14zM17.5 17.5H20V20h-2.5zM14 19.5h1M19.5 14h.5"/>',
    rain:'<path d="M5 3v6M5 13v2M10 6v9M10 19v2M15 3v4M15 11v8M20 8v5M20 17v3"/>'
  };
  function sv(p,c){return '<svg viewBox="0 0 24 24" aria-hidden="true"'+(c?' class="'+c+'"':'')+'>'+p+'</svg>'}
  /* [khoá, nhãn, phím tắt, icon] — null = vạch ngăn nhóm */
  var DK=[['draw','Bút vẽ nháp lên trang','',sv(I.draw)],['light','Đèn pin','',sv(I.light)],['confetti','Bắn pháo giấy','',sv(I.confetti)],null,
    ['font','Kiểu chữ','',sv(I.font)],['zen','Ẩn trang trí','',sv(I.zen)],null,
    ['qr','Mã QR của trang','',sv(I.qr)],['rain','Mưa mã','',sv(I.rain)]];
  var dock=document.createElement('div');dock.className='dock';dock.id='dock';dock.setAttribute('translate','no');
  var ix=0;
  dock.innerHTML='<button type="button" class="dkh" aria-expanded="false" aria-controls="dkp" data-v7a="Tiện ích (kéo lên xuống để dời chỗ)"></button><div class="dkp" id="dkp" role="toolbar" aria-orientation="vertical">'+
    DK.map(function(d){ix++;
    if(!d)return '<i class="sep" style="--i:'+ix+'" aria-hidden="true"></i>';
    return '<button type="button" class="dkb" style="--i:'+ix+'" data-d="'+d[0]+'" data-v7a="'+d[1]+'" data-k="'+d[2]+'">'+d[3]+'<span class="bd"></span></button>'}).join('')+'</div>'+
    '<div class="dkq" id="dkq" hidden><canvas width="232" height="232" aria-hidden="true"></canvas><p data-v7="Quét để mở trang này trên điện thoại"></p></div>';
  document.body.appendChild(dock);
  var dkh=dock.querySelector('.dkh'),dkp=dock.querySelector('.dkp'),dkq=dock.querySelector('.dkq'),KY='orby';
  /* nhãn khi rê chuột: tên nút + phím tắt */
  function tips(){[].forEach.call(dkp.querySelectorAll('.dkb'),function(b){var k=b.getAttribute('data-k');b.setAttribute('data-tip',T(b.getAttribute('data-v7a'))+(k?'  ·  '+k:''))})}
  function dOpen(on){
    dock.classList.toggle('open',on);dkh.setAttribute('aria-expanded',on?'true':'false');
    if(!on)qrShow(false);
    if(on){
      /* cột nút không được tràn ra ngoài màn hình khi tay cầm ở sát trên/dưới */
      dkp.style.setProperty('--dy','0px');var r=dkp.getBoundingClientRect(),h=r.height,cy=dock.getBoundingClientRect().top,top=cy-h/2,dy=0;
      if(top<10)dy=10-top;else if(top+h>innerHeight-10)dy=innerHeight-10-(top+h);
      dkp.style.setProperty('--dy',Math.round(dy)+'px');syncDock();
    }
  }
  dkh.addEventListener('click',function(e){e.stopPropagation();dOpen(!dock.classList.contains('open'))});
  document.addEventListener('click',function(e){if(dock.classList.contains('open')&&!dock.contains(e.target)&&!pop.contains(e.target)&&!(drawCv&&e.target===drawCv)&&!(pen&&pen.contains(e.target)))dOpen(false)});
  document.addEventListener('keydown',function(e){if(e.key!=='Escape')return;if(drawOn){setDraw(false);return}if(lightOn){setLight(false);return}if(dock.classList.contains('open')){dOpen(false);dkh.focus()}});
  function B(d){return dkp.querySelector('[data-d="'+d+'"]')}
  function say(b,vi){var tip=b.getAttribute('data-tip');b.setAttribute('data-tip',T(vi));b.classList.add('say');setTimeout(function(){b.classList.remove('say');b.setAttribute('data-tip',tip)},1600)}
  function acc(){return getComputedStyle(R).getPropertyValue('--acc').trim()||'#8ec5ff'}
  function pal(){var s=getComputedStyle(R);return ['--c1','--c2','--c3','--c4','--c5','--c6','--acc'].map(function(k){return s.getPropertyValue(k).trim()||'#fff'})}
  function dpr(){return Math.min(window.devicePixelRatio||1,2)}

  /* ---- BÚT VẼ NHÁP: vẽ lên cả trang, nét tự mờ dần sau ~2 giây (hoặc giữ nét), Esc để thoát ----
     Thanh bút ở giữa đáy màn hình: chọn màu (màu trang, 8 màu sẵn, cầu vồng, tự chọn), cỡ nét, giữ nét, xoá hết, thoát.
     Lựa chọn được nhớ trên máy. Chỉ vẽ lại khi đang có nét đang vẽ hoặc đang mờ dần; đứng yên thì không tốn khung hình. */
  var drawOn=false,drawCv=null,dcx=null,strokes=[],dRaf=0,dCur=null,LIFE=2200,pen=null;
  var PEN={c:'acc',w:4,keep:false},PCOL=[['acc','Màu trang'],['#ffffff','Trắng'],['#ff5d73','Đỏ'],['#ffb547','Cam'],['#ffe45e','Vàng'],['#5ee07a','Xanh lá'],['#4cc9ff','Xanh dương'],['#b18cff','Tím'],['rainbow','Cầu vồng']],PW=[[2.5,'Nhỏ'],[4,'Vừa'],[8,'To']];
  try{var sp=JSON.parse(localStorage.getItem('pen')||'null');if(sp&&typeof sp==='object'){if(sp.c)PEN.c=String(sp.c);if(+sp.w)PEN.w=+sp.w;PEN.keep=!!sp.keep}}catch(e){}
  function penSave(){try{localStorage.setItem('pen',JSON.stringify(PEN))}catch(e){}}
  function penCol(){return PEN.c==='acc'?acc():PEN.c}
  function dResize(){if(!drawCv)return;var d=dpr();drawCv.width=Math.round(innerWidth*d);drawCv.height=Math.round(innerHeight*d);dcx.setTransform(d,0,0,d,0,0);dcx.lineCap='round';dcx.lineJoin='round';dKick()}
  function dFrame(){
    dRaf=0;if(!dcx)return;var now=performance.now(),busy=false;
    dcx.clearRect(0,0,innerWidth,innerHeight);
    strokes=strokes.filter(function(s){return s.live||s.keep||now-s.end<LIFE});
    strokes.forEach(function(s){
      var a=(s.live||s.keep)?1:Math.max(0,1-(now-s.end)/LIFE),p=s.p,i;if(s.live||(!s.keep&&a>0))busy=true;if(p.length<2)return;
      if(p.length===2){dcx.globalAlpha=a;dcx.fillStyle=s.c==='rainbow'?'hsl('+s.h+',95%,65%)':s.c;dcx.beginPath();dcx.arc(p[0],p[1],s.w/2+.5,0,6.283);dcx.fill();return}
      if(s.c==='rainbow'){ /* cầu vồng: mỗi đoạn một màu, đổi dần theo độ dài nét */
        for(i=2;i<p.length;i+=2){var hu=(s.h+i*1.6)%360;dcx.strokeStyle='hsl('+hu+',95%,65%)';dcx.beginPath();dcx.moveTo(p[i-2],p[i-1]);dcx.lineTo(p[i],p[i+1]);
          dcx.globalAlpha=a*.2;dcx.lineWidth=s.w*3;dcx.stroke();dcx.globalAlpha=a;dcx.lineWidth=s.w;dcx.stroke()}
        return;
      }
      dcx.beginPath();dcx.moveTo(p[0],p[1]);for(i=2;i<p.length;i+=2)dcx.lineTo(p[i],p[i+1]);
      dcx.strokeStyle=s.c;dcx.globalAlpha=a*.22;dcx.lineWidth=s.w*3;dcx.stroke();   /* vầng sáng */
      dcx.globalAlpha=a;dcx.lineWidth=s.w;dcx.stroke();                              /* nét chính */
    });
    dcx.globalAlpha=1;
    if(busy)dRaf=requestAnimationFrame(dFrame);
  }
  function dKick(){if(!dRaf&&dcx)dRaf=requestAnimationFrame(dFrame)}
  /* thanh bút */
  function penBar(){
    if(pen)return pen;
    pen=document.createElement('div');pen.className='dkpen';pen.setAttribute('role','toolbar');pen.setAttribute('translate','no');
    pen.innerHTML='<div class="pc" role="radiogroup">'+PCOL.map(function(c){
        var st=c[0]==='acc'?'background:var(--acc)':c[0]==='rainbow'?'background:conic-gradient(#ff5d73,#ffb547,#ffe45e,#5ee07a,#4cc9ff,#b18cff,#ff5d73)':'background:'+c[0];
        return '<button type="button" role="radio" class="sw'+(c[0]==='acc'?' ac':'')+'" data-pc="'+c[0]+'" data-v7a="'+c[1]+'" style="'+st+'"></button>'}).join('')+
      '<label class="sw cu" data-v7a="Tự chọn màu"><input type="color" value="#ff7ad9" aria-hidden="true" tabindex="-1"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6v12M6 12h12"/></svg></label></div>'+
      '<i class="sp" aria-hidden="true"></i><div class="pw" role="radiogroup">'+PW.map(function(w){return '<button type="button" role="radio" data-pw="'+w[0]+'" data-v7a="'+w[1]+'"><i style="width:'+(w[0]+3)+'px;height:'+(w[0]+3)+'px"></i></button>'}).join('')+'</div>'+
      '<i class="sp" aria-hidden="true"></i><button type="button" class="tb" data-pa="keep" aria-pressed="false" data-v7a="Giữ nét (không tự mờ)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.8h10a1 1 0 0 1 1 1V20l-6-3.6L6 20V4.8a1 1 0 0 1 1-1z"/></svg></button>'+
      '<button type="button" class="tb" data-pa="clear" data-v7a="Xoá hết nét"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 7h15M9.5 7V4.5h5V7M6.5 7l1 12.5h9l1-12.5M10 11v5M14 11v5"/></svg></button>'+
      '<button type="button" class="tb x" data-pa="close" data-v7a="Thoát bút vẽ (Esc)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>';
    document.body.appendChild(pen);
    var ci=pen.querySelector('input[type=color]');
    if(/^#/.test(PEN.c)&&!PCOL.some(function(c){return c[0]===PEN.c})){ci.value=PEN.c}
    ci.addEventListener('input',function(){PEN.c=ci.value;penSave();penSync()});
    pen.addEventListener('click',function(e){
      e.stopPropagation();
      var b=e.target.closest('[data-pc],[data-pw],[data-pa]');if(!b)return;
      if(b.hasAttribute('data-pc'))PEN.c=b.getAttribute('data-pc');
      else if(b.hasAttribute('data-pw'))PEN.w=+b.getAttribute('data-pw');
      else{var a=b.getAttribute('data-pa');
        if(a==='keep'){PEN.keep=!PEN.keep;strokes.forEach(function(s){if(!s.live){s.keep=PEN.keep;s.end=performance.now()}});dKick()}
        else if(a==='clear'){strokes=[];dKick()}
        else if(a==='close'){setDraw(false);return}}
      penSave();penSync();
    });
    tr();return pen;
  }
  function penSync(){
    if(!pen)return;var custom=/^#/.test(PEN.c)&&!PCOL.some(function(c){return c[0]===PEN.c});
    [].forEach.call(pen.querySelectorAll('[data-pc]'),function(b){b.setAttribute('aria-checked',b.getAttribute('data-pc')===PEN.c?'true':'false')});
    var cu=pen.querySelector('.cu');cu.classList.toggle('on',custom);if(custom)cu.style.background=PEN.c;else cu.style.background='';
    [].forEach.call(pen.querySelectorAll('[data-pw]'),function(b){b.setAttribute('aria-checked',+b.getAttribute('data-pw')===PEN.w?'true':'false')});
    pen.querySelector('[data-pa="keep"]').setAttribute('aria-pressed',PEN.keep?'true':'false');
    pen.style.setProperty('--pen',PEN.c==='rainbow'?'#ff7ad9':penCol());
  }
  function setDraw(on){
    drawOn=on;B('draw').classList.toggle('on',on);
    if(on){
      if(lightOn)setLight(false);
      drawCv=document.createElement('canvas');drawCv.className='dkdraw';drawCv.setAttribute('aria-hidden','true');document.body.appendChild(drawCv);
      dcx=drawCv.getContext('2d');dResize();strokes=[];
      drawCv.addEventListener('pointerdown',function(e){
        dCur={p:[e.clientX,e.clientY],live:true,end:0,keep:PEN.keep,w:PEN.w,c:PEN.c==='rainbow'?'rainbow':penCol(),h:Math.random()*360};
        strokes.push(dCur);try{drawCv.setPointerCapture(e.pointerId)}catch(_){}dKick()});
      drawCv.addEventListener('pointermove',function(e){if(!dCur)return;var ev=e.getCoalescedEvents&&e.getCoalescedEvents();if(!ev||!ev.length)ev=[e];ev.forEach(function(q){dCur.p.push(q.clientX,q.clientY)});dKick()});
      var up=function(){if(dCur){dCur.live=false;dCur.end=performance.now();dCur=null;dKick()}};
      drawCv.addEventListener('pointerup',up);drawCv.addEventListener('pointercancel',up);
      addEventListener('resize',dResize);
      penBar();penSync();pen.hidden=false;requestAnimationFrame(function(){if(pen)pen.classList.add('on')});
      say(B('draw'),PEN.keep?'Vẽ lên trang · Esc để thoát':'Vẽ lên trang · nét tự mờ · Esc để thoát');
    }else{
      if(dRaf){cancelAnimationFrame(dRaf);dRaf=0}
      removeEventListener('resize',dResize);if(drawCv){drawCv.remove();drawCv=null;dcx=null}strokes=[];dCur=null;
      if(pen){pen.classList.remove('on');var pp=pen;setTimeout(function(){if(!drawOn)pp.hidden=true},250)}
    }
  }
  /* ---- ĐÈN PIN: tối cả trang, chỉ sáng một vòng quanh con trỏ (hoặc ngón tay) ---- */
  var lightOn=false,spot=null,sRaf=0,sx=innerWidth/2,sy=innerHeight/2;
  function sMove(e){sx=e.clientX;sy=e.clientY;if(!sRaf)sRaf=requestAnimationFrame(function(){sRaf=0;if(spot){spot.style.setProperty('--x',sx+'px');spot.style.setProperty('--y',sy+'px')}})}
  function setLight(on){
    lightOn=on;B('light').classList.toggle('on',on);
    if(on){
      if(drawOn)setDraw(false);
      spot=document.createElement('div');spot.className='dkspot';spot.setAttribute('aria-hidden','true');
      spot.style.setProperty('--x',sx+'px');spot.style.setProperty('--y',sy+'px');document.body.appendChild(spot);
      addEventListener('pointermove',sMove,{passive:true});addEventListener('pointerdown',sMove,{passive:true});
      requestAnimationFrame(function(){if(spot)spot.classList.add('on')});
      say(B('light'),'Rê chuột để soi · Esc để tắt');
    }else{
      removeEventListener('pointermove',sMove);removeEventListener('pointerdown',sMove);
      if(spot){var s=spot;spot=null;s.classList.remove('on');setTimeout(function(){s.remove()},300)}
    }
  }
  /* ---- PHÁO GIẤY: một lần bắn ~1,8 giây bằng dải màu đang chọn, xong tự dọn ---- */
  function confetti(from){
    if(!motionOk()){say(B('confetti'),'Đang tắt hiệu ứng');return}
    var cv=document.createElement('canvas'),d=dpr(),W=innerWidth,H=innerHeight;cv.className='dkconf';cv.setAttribute('aria-hidden','true');
    cv.width=Math.round(W*d);cv.height=Math.round(H*d);document.body.appendChild(cv);
    var cx=cv.getContext('2d');cx.setTransform(d,0,0,d,0,0);
    var r=from.getBoundingClientRect(),ox=r.right,oy=r.top+r.height/2,C=pal(),N=weak()?60:130,P=[];
    for(var i=0;i<N;i++){var a=(-50+Math.random()*100)*Math.PI/180,v=7+Math.random()*9;
      P.push({x:ox,y:oy,vx:Math.cos(a)*v*1.15,vy:Math.sin(a)*v-4,w:5+Math.random()*6,h:3+Math.random()*4,r:Math.random()*6.28,vr:(Math.random()-.5)*.35,c:C[i%C.length],s:Math.random()<.3})}
    var t0=performance.now(),last=t0;
    (function f(t){
      var dt=Math.min(2.5,(t-last)/16.7),age=t-t0;last=t;cx.clearRect(0,0,W,H);
      var al=age<1300?1:Math.max(0,1-(age-1300)/500);
      P.forEach(function(p){p.vy+=.28*dt;p.vx*=Math.pow(.985,dt);p.vy*=Math.pow(.99,dt);p.x+=p.vx*dt;p.y+=p.vy*dt;p.r+=p.vr*dt;
        cx.globalAlpha=al;cx.fillStyle=p.c;cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);
        if(p.s){cx.beginPath();cx.arc(0,0,p.h*.7,0,6.28);cx.fill()}else cx.fillRect(-p.w/2,-p.h/2,p.w,p.h*Math.abs(Math.cos(p.r*1.7))+1);
        cx.restore()});
      if(age<1800)requestAnimationFrame(f);else cv.remove();
    })(t0);
  }
  /* ---- KIỂU CHỮ: mặc định → mono (kiểu dev) → có chân (dễ đọc đoạn dài) ---- */
  var FF=['','mono','serif'],FFN={mono:'Mono',serif:'Serif'};
  function ffCur(){return R.classList.contains('ff-mono')?'mono':R.classList.contains('ff-serif')?'serif':''}
  function setFF(k){R.classList.remove('ff-mono','ff-serif');if(k)R.classList.add('ff-'+k);try{localStorage.setItem('ff',k)}catch(e){}syncDock()}
  /* ---- MÃ QR: mã của địa chỉ trang, mở bằng camera điện thoại ---- */
  function qrDraw(){
    var cv=dkq.querySelector('canvas'),c=cv.getContext('2d'),u=location.origin+location.pathname,q=typeof window.qrEncode==='function'?window.qrEncode(u):null;
    c.fillStyle='#fff';c.fillRect(0,0,232,232);if(!q)return;
    var n=q.n,m=Math.floor(232/(n+8)),off=Math.floor((232-m*n)/2);c.fillStyle='#0a0a0a';
    for(var y=0;y<n;y++)for(var x=0;x<n;x++)if(q.g(x,y))c.fillRect(off+x*m,off+y*m,m,m);
  }
  function qrShow(on){
    if(!dkq)return;var b=B('qr');if(b)b.classList.toggle('on',on);
    if(on){qrDraw();dkq.hidden=false;var br=b.getBoundingClientRect(),h=dkq.offsetHeight||280;dkq.style.top=Math.max(10,Math.min(innerHeight-h-10,br.top+br.height/2-h/2))+'px';requestAnimationFrame(function(){dkq.classList.add('on')})}
    else{dkq.classList.remove('on');setTimeout(function(){if(!dkq.classList.contains('on'))dkq.hidden=true},220)}
  }
  function syncDock(){
    B('zen').classList.toggle('on',R.classList.contains('zen'));
    var f=ffCur(),fb=B('font');fb.classList.toggle('on',!!f);fb.querySelector('.bd').textContent=f?(f==='mono'?'M':'S'):'';
    B('draw').classList.toggle('on',drawOn);B('light').classList.toggle('on',lightOn);
  }
  /* ---- MƯA MÃ: ký tự rơi kiểu màn hình terminal, màu theo dải màu trang, ~4 giây rồi tự tắt (bấm / Esc để dừng sớm) ---- */
  var rainStop=null;
  function rain(){
    if(rainStop){rainStop();return}
    if(!motionOk()){say(B('rain'),'Đang tắt hiệu ứng');return}
    var cv=document.createElement('canvas'),d=Math.min(dpr(),1.5),W=innerWidth,H=innerHeight,fs=W<640?13:16;
    cv.className='dkconf dkrain';cv.setAttribute('aria-hidden','true');cv.width=Math.round(W*d);cv.height=Math.round(H*d);document.body.appendChild(cv);
    var cx=cv.getContext('2d');cx.setTransform(d,0,0,d,0,0);cx.font='600 '+fs+'px "JetBrains Mono",ui-monospace,Consolas,monospace';cx.textBaseline='top';
    var C=pal(),cols=Math.ceil(W/fs),y=[],sp=[],CH='01<>/{}[]=+*#$&?;:ABCDEFminh0x',t0=performance.now(),last=0,raf=0,DUR=4200,stop=false;
    for(var i=0;i<cols;i++){y[i]=-Math.random()*H*1.2;sp[i]=.55+Math.random()*.9}
    B('rain').classList.add('on');
    function end(){if(stop)return;stop=true;cancelAnimationFrame(raf);rainStop=null;B('rain').classList.remove('on');cv.classList.add('out');setTimeout(function(){cv.remove()},400)}
    rainStop=end;
    function f(t){
      raf=0;if(stop)return;var age=t-t0;
      if(t-last>=33){ /* ~30 lần/giây là đủ mượt cho chữ rơi, đỡ tốn máy */
        last=t;
        /* phủ một lớp trong suốt mờ dần để để lại vệt đuôi (dùng destination-out nên trang phía sau vẫn thấy) */
        cx.globalCompositeOperation='destination-out';cx.fillStyle='rgba(0,0,0,.16)';cx.fillRect(0,0,W,H);
        cx.globalCompositeOperation='source-over';
        for(var k=0;k<cols;k++){
          var yy=y[k];
          if(yy>-fs&&age<DUR-600){cx.fillStyle=C[k%C.length];cx.globalAlpha=.85;cx.fillText(CH.charAt((Math.random()*CH.length)|0),k*fs,yy);
            cx.globalAlpha=1;cx.fillStyle='#fff';cx.fillText(CH.charAt((Math.random()*CH.length)|0),k*fs,yy+fs)}
          y[k]+=fs*sp[k];if(y[k]>H&&Math.random()>.96)y[k]=-fs*Math.random()*8;
        }
      }
      if(age>=DUR){end();return}
      raf=requestAnimationFrame(f);
    }
    raf=requestAnimationFrame(f);
    cv.style.pointerEvents='auto';cv.addEventListener('click',end);
  }
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&rainStop)rainStop()});
  dkp.addEventListener('click',function(e){
    var b=e.target.closest('.dkb');if(!b||b.disabled)return;e.stopPropagation();var d=b.getAttribute('data-d');
    if(d!=='qr')qrShow(false);
    if(d==='draw')setDraw(!drawOn);
    else if(d==='light')setLight(!lightOn);
    else if(d==='confetti')confetti(b);
    else if(d==='font'){var k=FF[(FF.indexOf(ffCur())+1)%FF.length];setFF(k);say(b,k?('Kiểu chữ: '+FFN[k]):'Kiểu chữ: mặc định')}
    else if(d==='zen'){var z=!R.classList.contains('zen');R.classList.toggle('zen',z);try{localStorage.setItem('zen',z?'1':'0')}catch(x){}syncDock();say(b,z?'Đã ẩn trang trí':'Đã hiện lại trang trí')}
    else if(d==='qr')qrShow(dkq.hidden);
    else if(d==='rain'){dOpen(false);rain()}
  });
  dkq.addEventListener('click',function(e){e.stopPropagation()});
  /* kéo tay cầm lên/xuống để dời chỗ; dịch dưới 6px thì vẫn là bấm bình thường */
  function setY(y,save){
    var lo=60,hi=Math.max(lo,innerHeight-60);y=Math.min(hi,Math.max(lo,y));
    R.style.setProperty('--oy',Math.round(y)+'px');
    if(save){try{localStorage.setItem(KY,(y/innerHeight).toFixed(4))}catch(e){}}
  }
  function restore(){var f=NaN;try{f=parseFloat(localStorage.getItem(KY))}catch(e){}if(!isNaN(f))setY(f*innerHeight,false)}
  restore();addEventListener('resize',function(){restore();if(dock.classList.contains('open'))dOpen(true)});
  (function(el){
    var sy=0,oy=0,on=false,moved=false,pid=null;
    el.addEventListener('pointerdown',function(e){if(e.button>0)return;on=true;moved=false;pid=e.pointerId;sy=e.clientY;oy=dock.getBoundingClientRect().top});
    el.addEventListener('pointermove',function(e){
      if(!on||e.pointerId!==pid)return;var dy=e.clientY-sy;
      if(!moved&&Math.abs(dy)<6)return;
      if(!moved){moved=true;R.classList.add('orb-ydrag');try{el.setPointerCapture(pid)}catch(_){}dOpen(false)}
      setY(oy+dy,false);
    });
    function end(){if(!on)return;on=false;if(moved){R.classList.remove('orb-ydrag');setY(dock.getBoundingClientRect().top,true)}}
    el.addEventListener('pointerup',end);el.addEventListener('pointercancel',end);
    el.addEventListener('click',function(e){if(moved){e.stopImmediatePropagation();e.preventDefault();moved=false}},true);
  })(dkh);
  tr();tips();syncDock();
  document.addEventListener('langchange',function(){setTimeout(tips,0)});

  /* ===== LỌC NHẠC: viên nền trượt theo ô đang chọn + số bài mỗi mục + "N bài" đang hiện ===== */
  (function(){
    var gs=document.getElementById('bgmgen'),list=document.getElementById('bgml'),cnt=document.getElementById('bgmc');if(!gs||!list)return;
    var seg=gs.querySelector('.seg'),TR=window.TRACKS||[];
    var n={all:TR.length,vn:0,en:0};TR.forEach(function(x){n[(x.g||'vn')==='en'?'en':'vn']++});
    /* số bài cho Việt Nam / Quốc tế (ô "Tất cả" không cần: đã có dòng "N bài" ngay dưới) */
    [].forEach.call(gs.querySelectorAll('button[data-g]'),function(b){var s=b.querySelector('small'),g=b.getAttribute('data-g');if(s&&g!=='all')s.textContent=n[g]||0});
    function place(){
      var b=gs.querySelector('[aria-pressed="true"]');if(!b||!b.offsetWidth)return;
      gs.style.setProperty('--sx',b.offsetLeft+'px');gs.style.setProperty('--sw',b.offsetWidth+'px');gs.classList.add('ok');
    }
    new MutationObserver(place).observe(gs,{subtree:true,attributes:true,attributeFilter:['aria-pressed']});
    if(window.ResizeObserver)new ResizeObserver(place).observe(gs);
    function count(){var k=list.querySelectorAll('li:not(.bgmempty)').length;if(cnt)cnt.textContent=k+' '+T('bài')}
    new MutationObserver(count).observe(list,{childList:true});
    document.addEventListener('langchange',function(){setTimeout(count,0)});
    place();count();
  })();

  /* ===== GÓC CHƠI: XẾP HẠNG ONLINE (gõ chữ 60 giây + combo) qua /api/scores =====
     Mỗi máy có một mã ẩn danh ngẫu nhiên (rktok) để nhận ra "điểm của tôi"; chỉ gửi tên + điểm khi người chơi bấm "Gửi kỷ lục".
     API chưa bật (chưa gắn KV, hoặc chạy thử ở máy) thì bảng báo "chưa bật", không lỗi gì khác. */
  (function(){
    var box=document.getElementById('lab-rank');if(!box)return;
    Object.assign(D,{"Tên hiện trên bảng":"Name on the board","2 đến 16 ký tự":"2 to 16 characters","Gõ chữ 60 giây":"60-second typing","chuỗi dài nhất":"longest streak","Gửi kỷ lục":"Submit record","Xếp hạng online":"Online ranking",
      "Chỉ khi bạn bấm \"Gửi kỷ lục\" thì tên và điểm mới được gửi đi; không gửi gì khác. Kỷ lục lấy từ test gõ chữ và Combo ở các tab bên cạnh. Mỗi người giữ một điểm cao nhất trên mỗi bảng.":"Your name and score are only sent when you press \"Submit record\"; nothing else is sent. Records come from the typing test and Combo tabs. Each person keeps one best score per board.",
      "Đang tải bảng xếp hạng…":"Loading the leaderboard…","Bảng xếp hạng online chưa bật.":"The online leaderboard isn't switched on yet.","Chưa có ai. Bạn lên bảng đầu tiên nhé!":"Nobody yet. Be the first on the board!","Kỷ lục của bạn":"Your record","Hạng của bạn":"Your rank","người chơi":"players","Chưa có kỷ lục, chơi một ván đã nhé.":"No record yet, play a round first.","Nhập tên từ 2 ký tự trở lên.":"Enter a name of at least 2 characters.","Đang gửi…":"Sending…","Đã lên bảng!":"You're on the board!","Đã cập nhật tên. Điểm cũ của bạn vẫn cao hơn.":"Name updated. Your earlier score is still higher.","Gửi nhanh quá, đợi vài giây nhé.":"Too fast, wait a few seconds.","Tên chỉ gồm chữ, số, khoảng trắng và _ . -":"Names can only use letters, numbers, spaces and _ . -","Điểm không hợp lệ.":"That score isn't valid.","Chưa gửi được, thử lại sau nhé.":"Couldn't send, try again later.","bạn":"you",
      "Test bàn phím, test chuột, test loa, test micro, thử tốc độ gõ chữ và xem combo mỗi khi bạn bấm. Mọi thứ chạy ngay trên máy bạn; chỉ khi bạn tự gửi kỷ lục lên bảng xếp hạng online thì tên và điểm mới được gửi đi.":"Test your keyboard, mouse, speakers and mic, check your typing speed and watch the combo grow as you click. Everything runs on your device; only when you submit a record to the online ranking are your name and score sent."});
    var API='/api/scores',nameI=document.getElementById('rkn'),msg=document.getElementById('rkmsg'),data={},off=false,lastLoad=0,busy=false;
    function tok(){var t='';try{t=localStorage.getItem('rktok')||''}catch(e){}if(!/^[a-f0-9]{32}$/.test(t)){var a=new Uint8Array(16);(window.crypto||{getRandomValues:function(x){for(var i=0;i<x.length;i++)x[i]=Math.random()*256|0}}).getRandomValues(a);t=[].map.call(a,function(b){return ('0'+b.toString(16)).slice(-2)}).join('');try{localStorage.setItem('rktok',t)}catch(e){}}return t}
    try{nameI.value=localStorage.getItem('rkname')||''}catch(e){}
    nameI.addEventListener('change',function(){try{localStorage.setItem('rkname',nameI.value.trim())}catch(e){}});
    function mine(g){if(g==='wpm'){try{return +localStorage.getItem('typebest60')||0}catch(e){return 0}}return window.__combo&&__combo.best?(+__combo.best()||0):0}
    function say(vi,cls,extra){msg.textContent=T(vi)+(extra||'');msg.className='rkmsg'+(cls?' '+cls:'')}
    function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
    function render(g){
      var b=box.querySelector('.rkb[data-g="'+g+'"]'),ol=b.querySelector('.rkl'),me=b.querySelector('.rkmine'),btn=b.querySelector('[data-send]'),d=data[g],my=mine(g);
      btn.disabled=off||busy||!my;
      me.textContent=T('Kỷ lục của bạn')+': '+(my||'—')+(d&&d.me?' · '+T('Hạng của bạn')+' #'+d.me.r:'');
      if(off){ol.innerHTML='<li class="em">'+esc(T('Bảng xếp hạng online chưa bật.'))+'</li>';return}
      if(!d){ol.innerHTML='<li class="em">'+esc(T('Đang tải bảng xếp hạng…'))+'</li>';return}
      if(!d.top.length){ol.innerHTML='<li class="em">'+esc(T('Chưa có ai. Bạn lên bảng đầu tiên nhé!'))+'</li>';return}
      ol.innerHTML=d.top.map(function(p){return '<li class="r'+p.r+(p.me?' mine':'')+'"><i>'+p.r+'</i><span>'+esc(p.n)+(p.me?' <em>('+esc(T('bạn'))+')</em>':'')+'</span><b>'+p.s+'</b></li>'}).join('')+(d.players>10?'<li class="more">'+d.players+' '+esc(T('người chơi'))+'</li>':'');
    }
    function renderAll(){render('wpm');render('combo')}
    function get(g){
      return fetch(API+'?g='+g+'&t='+tok(),{headers:{accept:'application/json'},cache:'no-store'}).then(function(r){
        if(r.status===503||r.status===404||!/json/.test(r.headers.get('content-type')||''))throw 'off';return r.json()});
    }
    function load(force){
      if(!force&&Date.now()-lastLoad<20000)return;lastLoad=Date.now();
      if(!/^https?:$/.test(location.protocol)||!window.fetch){off=true;renderAll();return}
      Promise.all([get('wpm'),get('combo')]).then(function(r){off=false;data.wpm=r[0];data.combo=r[1];renderAll()},function(){off=true;renderAll()});
    }
    box.addEventListener('click',function(e){
      var b=e.target.closest('[data-send]');if(!b||b.disabled)return;var g=b.getAttribute('data-send'),score=mine(g),n=nameI.value.trim();
      if(!score){say('Chưa có kỷ lục, chơi một ván đã nhé.','er');return}
      if(n.length<2){say('Nhập tên từ 2 ký tự trở lên.','er');nameI.focus();return}
      try{localStorage.setItem('rkname',n)}catch(x){}
      busy=true;renderAll();say('Đang gửi…');
      fetch(API,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({g:g,name:n,score:score,token:tok()})}).then(function(r){
        return r.json().catch(function(){return{}}).then(function(j){return{st:r.status,j:j}})}).then(function(res){
        busy=false;
        if(res.st===200){data[g]=res.j;say(res.j.better?'Đã lên bảng!':'Đã cập nhật tên. Điểm cũ của bạn vẫn cao hơn.','ok',res.j.me?' #'+res.j.me.r:'');if(res.j.better&&window.__sfx)__sfx('record')}
        else if(res.st===429)say('Gửi nhanh quá, đợi vài giây nhé.','er');
        else if(res.j&&res.j.error==='name')say('Tên chỉ gồm chữ, số, khoảng trắng và _ . -','er');
        else if(res.j&&res.j.error==='score')say('Điểm không hợp lệ.','er');
        else if(res.st===503){off=true;say('Bảng xếp hạng online chưa bật.','er')}
        else say('Chưa gửi được, thử lại sau nhé.','er');
        renderAll();
      },function(){busy=false;say('Chưa gửi được, thử lại sau nhé.','er');renderAll()});
    });
    document.addEventListener('rankopen',function(){renderAll();load(false)});
    document.addEventListener('combo',function(){if(!box.hidden)render('combo')});
    document.addEventListener('langchange',function(){setTimeout(renderAll,0)});
    /* chữ cố định trong tab dịch bằng data-v7 */
    [].forEach.call(box.querySelectorAll('.rkname>span,.rkh b,.rkh small,[data-send],.note'),function(el){el.setAttribute('data-v7',el.textContent)});
    nameI.setAttribute('data-v7ph','2 đến 16 ký tự');
    var lt=document.querySelector('#labt-rank');if(lt){var tn=lt.lastChild;if(tn&&tn.nodeType===3){var sp=document.createElement('span');sp.setAttribute('data-v7','Xếp hạng online');sp.textContent=tn.nodeValue;lt.replaceChild(sp,tn)}}
    var ld=document.querySelector('#lab .lead');if(ld)ld.setAttribute('data-v7',ld.textContent.trim());
    function ph(){nameI.placeholder=T('2 đến 16 ký tự')}
    ph();document.addEventListener('langchange',function(){setTimeout(ph,0)});
    tr();renderAll();
  })();

  /* ===== SẮP XẾP BÀI: menu riêng thay cho ô chọn của trình duyệt (vẫn điều khiển <select id="bgmsort"> ẩn) ===== */
  (function(){
    var ss=document.getElementById('bgmsort'),b=document.getElementById('bgmsb'),m=document.getElementById('bgmsm'),lb=document.getElementById('bgmsl');if(!ss||!b||!m)return;
    Object.assign(D,{"Thứ tự gốc":"Original order","Mới thêm gần đây":"Recently added","Tên A → Z":"Title A → Z","Tên Z → A":"Title Z → A","Ca sĩ A → Z":"Artist A → Z","Sắp xếp bài hát":"Sort tracks","Mặc định":"Default","Mới thêm":"New"});
    var ic={'0':'<path d="M5 7h14M5 12h14M5 17h9"/>','new':'<path d="M12 3l1.6 4.6L18 9l-4.4 1.4L12 15l-1.6-4.6L6 9l4.4-1.4z"/><path d="M18 15v5M15.5 17.5h5"/>','az':'<path d="M4 17l3.5-10L11 17M5.2 13.5h4.6M14 7h6l-6 10h6"/>','za':'<path d="M14 7h6l-6 10h6M4 7h6l-6 10h6" opacity=".55"/><path d="M17 3v4"/>','ar':'<circle cx="9" cy="8" r="3.3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0M17 6v10M14.5 13.5L17 16l2.5-2.5"/>'};
    var O=[['0','Thứ tự gốc','Mặc định'],['new','Mới thêm gần đây','Mới thêm'],['az','Tên A → Z','A → Z'],['za','Tên Z → A','Z → A'],['ar','Ca sĩ A → Z','Ca sĩ']];
    function build(){
      m.innerHTML=O.map(function(o){return '<li role="option" tabindex="-1" data-v="'+o[0]+'" aria-selected="'+(ss.value===o[0])+'"><svg viewBox="0 0 24 24" aria-hidden="true">'+ic[o[0]]+'</svg><span>'+T(o[1])+'</span><svg class="ck" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7"/></svg></li>'}).join('');
      var c=O.filter(function(o){return o[0]===ss.value})[0]||O[0];lb.textContent=T(c[2]);
      b.title=T('Sắp xếp bài hát')+': '+T(c[1]);b.setAttribute('aria-label',b.title);m.setAttribute('aria-label',T('Sắp xếp bài hát'));
    }
    function open(on){
      m.hidden=!on;b.setAttribute('aria-expanded',on?'true':'false');
      if(on){build();var s=m.querySelector('[aria-selected="true"]')||m.firstChild;requestAnimationFrame(function(){m.classList.add('on');try{s.focus({preventScroll:true})}catch(e){}})}else m.classList.remove('on');
    }
    function pick(v){if(v&&v!==ss.value){ss.value=v;ss.dispatchEvent(new Event('change',{bubbles:true}))}open(false);build();b.focus()}
    b.addEventListener('click',function(e){e.stopPropagation();open(m.hidden)});
    m.addEventListener('click',function(e){e.stopPropagation();var li=e.target.closest('[data-v]');if(li)pick(li.getAttribute('data-v'))});
    m.addEventListener('keydown',function(e){
      var it=[].slice.call(m.children),i=it.indexOf(document.activeElement);
      if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();it[(i+(e.key==='ArrowDown'?1:-1)+it.length)%it.length].focus()}
      else if(e.key==='Enter'||e.key===' '){e.preventDefault();if(i>=0)pick(it[i].getAttribute('data-v'))}
      else if(e.key==='Escape'){e.stopPropagation();open(false);b.focus()}
      else if(e.key==='Tab')open(false);
    });
    document.addEventListener('click',function(){if(!m.hidden)open(false)});
    document.addEventListener('langchange',function(){setTimeout(build,0)});
    build();
  })();

  /* ===== THANH TUA / ÂM LƯỢNG: tô phần đã chạy theo màu nhấn ===== */
  var sk=document.getElementById('sk'),vol=document.getElementById('bgmvol'),au=document.getElementById('bgmau');
  function paint(r){if(!r)return;var mn=+r.min||0,mx=+r.max||100,v=+r.value||0;r.style.setProperty('--p',((v-mn)/((mx-mn)||1)*100).toFixed(2)+'%')}
  [sk,vol].forEach(function(r){if(r){paint(r);r.addEventListener('input',function(){paint(r)})}});
  if(au){var lastP=0;au.addEventListener('timeupdate',function(){var n=performance.now();if(n-lastP<240)return;lastP=n;paint(sk)});['loadedmetadata','seeked','emptied'].forEach(function(ev){au.addEventListener(ev,function(){setTimeout(function(){paint(sk)},0)})})}
  /* âm lượng đổi từ ô số hoặc phím tắt cũng cập nhật thanh */
  var vn=document.getElementById('bgmvn');if(vn)vn.addEventListener('input',function(){setTimeout(function(){paint(vol)},0)});
  if(au)au.addEventListener('volumechange',function(){paint(vol)});
})();
}catch(e){console.error('[#v7-js]',e)}

/* ===================== [#ic-more-js] ===================== */
try{
(function(){
var P={
coffee:'<path d="M5 8h11v6a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5zM16 10h1.5a2.5 2.5 0 0 1 0 5H16M8 3v2M12 3v2"/>',
keyboard:'<rect x="2.5" y="6" width="19" height="12" rx="2.5"/><path d="M6.5 10h.01M10 10h.01M14 10h.01M17.5 10h.01M8 14h8"/>',
mouse:'<rect x="6.5" y="3" width="11" height="18" rx="5.5"/><path d="M12 7v3.5"/>',
star:'<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8L3.5 9.7l5.9-.9z"/>',
heart:'<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z"/>',
music:'<path d="M9 18V6l10-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/>',
gamepad:'<rect x="2.5" y="7" width="19" height="11" rx="5.5"/><path d="M7.5 10.5v4M5.5 12.5h4M15.5 11.5h.01M18 13.5h.01"/>',
headphones:'<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
sparkle:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 17v4M17 19h4"/>',
zap:'<path d="M13 2.5L4.5 13.5H12l-1 8 8.5-11H12z"/>',
moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.7 5.5 3.7 9s-1.2 6.5-3.7 9c-2.5-2.5-3.7-5.5-3.7-9S9.5 5.5 12 3z"/>',
code:'<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
camera:'<path d="M4 8h3l1.5-2.5h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/>',
book:'<path d="M12 6.5C10.5 5 8 4.5 4 4.5v13c4 0 6.5.5 8 2 1.5-1.5 4-2 8-2v-13c-4 0-6.5.5-8 2zM12 6.5v13"/>',
mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3"/>',
disc:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/>',
flame:'<path d="M12 21c-4 0-6.5-2.7-6.5-6.2 0-3 2-4.8 3.2-6.8.6 1.5 1.3 2 2.3 2.4C11 7.5 12 5 13.5 3c.5 3 4.9 5.2 4.9 10.7 0 4-2.4 7.3-6.4 7.3z"/>',
trophy:'<path d="M8 4h8v6a4 4 0 0 1-8 0zM8 6H4.5c0 3 1.5 4.5 3.5 4.5M16 6h3.5c0 3-1.5 4.5-3.5 4.5M12 14v4M8.5 20h7"/>',
crown:'<path d="M4 17l-1.5-9 5 4 4.5-6 4.5 6 5-4L20 17zM4.5 20h15"/>',
gem:'<path d="M6 4h12l3.5 5L12 20.5 2.5 9zM2.5 9h19M9 4L7.5 9 12 20.5 16.5 9 15 4"/>',
dice:'<rect x="4" y="4" width="16" height="16" rx="3.5"/><path d="M8.5 8.5h.01M15.5 8.5h.01M12 12h.01M8.5 15.5h.01M15.5 15.5h.01"/>',
chat:'<path d="M20.5 12a8 8 0 0 1-11.7 7L4 20.5l1.5-4.6A8 8 0 1 1 20.5 12z"/>',
send:'<path d="M21 3L10 14M21 3l-6.5 18-3.5-7-7-3.5z"/>',
arrowr:'<path d="M5 12h14M13 6l6 6-6 6"/>',
ext:'<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
play:'<path d="M7 4.5v15l12-7.5z"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/>',
palette:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.5-2.2-.6-1.4.2-2.8 1.8-2.8H18a3 3 0 0 0 3-3C21 7 17 3 12 3z"/><path d="M7.5 11h.01M10 7.5h.01M14.5 7.5h.01"/>',
film:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
ghost:'<path d="M5 20V10a7 7 0 0 1 14 0v10l-2.5-2-2 2-2.5-2-2.5 2-2-2zM9.5 10h.01M14.5 10h.01"/>',
target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r=".8"/>',
pin:'<path d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 0 1 12 3.5 6.5 6.5 0 0 1 18.5 10c0 5.3-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
calendar:'<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
image:'<rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="9" cy="10" r="1.6"/><path d="M4 18l5.5-5 4 3.5 3-2.5 4 4"/>',
info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
terminal:'<rect x="3" y="4.5" width="18" height="15" rx="2.5"/><path d="M7 10l3 2.5L7 15M12.5 15H17"/>',
link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
translate:'<path d="M4 6h9M8.5 4v2M6 6c0 4 3 7 6 8M11.5 6c0 3.5-3 7-7 8.5M13.5 20l4-9 4 9M15 17h5"/>',
/* icon thêm cho nút: xem thêm / thu gọn / tải / chép / làm lại / tìm / thời tiết / nhà / khối 3D / mã QR / bàn phím / khiên / bộ lọc */
chevd:'<path d="M6 9l6 6 6-6"/>',
chevu:'<path d="M6 15l6-6 6 6"/>',
download:'<path d="M12 4v11M7 10.5l5 5 5-5M5 20h14"/>',
copy:'<rect x="8.5" y="8.5" width="11.5" height="11.5" rx="2.2"/><path d="M15.5 8.5V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7.5a2 2 0 0 0 2 2h2.5"/>',
refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.6L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.6L20 16M20 20v-4h-4"/>',
search:'<circle cx="10.8" cy="10.8" r="6.2"/><path d="M15.6 15.6l5 5"/>',
cloud:'<path d="M7 18.5a4.5 4.5 0 0 1-.6-9 6 6 0 0 1 11.5 1.6A3.8 3.8 0 0 1 17.3 18.5z"/>',
home:'<path d="M4 11l8-7 8 7v8.5a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z"/>',
cube:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM4 7.5l8 4.5 8-4.5M12 12v9"/>',
qr:'<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2.5v2.5H14zM18 18h2v2h-2zM18 14h2M14 19h1"/>',
shield:'<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.9-7.5-9.5V6z"/>',
filter:'<path d="M4 5h16l-6.2 7.4V19l-3.6 1.8v-8.4z"/>',
rain:'<path d="M7 14.5a4.5 4.5 0 0 1-.6-9 6 6 0 0 1 11.5 1.6 3.8 3.8 0 0 1-.6 7.4zM8 18l-1 2.5M12 18l-1 2.5M16 18l-1 2.5"/>',
snow:'<path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9.5 4.5L12 7l2.5-2.5M9.5 19.5L12 17l2.5 2.5"/>',
ban:'<circle cx="12" cy="12" r="8.5"/><path d="M6 6l12 12"/>',
eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/>'
};
var cache={},pool=['star','sparkle','gem','zap','heart','target','flame','crown','ghost','disc','sun','moon'],n=0;
function uri(k){
  if(!cache[k])cache[k]="url('data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+P[k]+'</svg>')+"')";
  return cache[k];
}
var R=[[/xem thêm|show more|mở rộng|hiện huy hiệu|show badges/i,'chevd'],[/thu gọn|ẩn bớt|ẩn huy hiệu|show less|hide/i,'chevu'],[/tải|download/i,'download'],[/sao chép|copy/i,'copy'],[/dựng lại|làm lại|chơi lại|restart|reset|xoá bảng/i,'refresh'],[/^\s*tìm|search/i,'search'],
  [/^\s*(mưa|rain)\b/i,'rain'],[/^\s*(tuyết|snow)\b/i,'snow'],[/^\s*(không có|none)\s*$/i,'ban'],[/thời tiết thật|real weather/i,'sun'],[/thời tiết|mưa|tuyết|weather|rain|snow/i,'cloud'],[/về chỗ|my place/i,'home'],[/chỉ đường|bản đồ|google maps|directions/i,'pin'],[/45°|chéo|angled/i,'cube'],[/90°|mã qr|qr code/i,'qr'],[/bàn phím|keyboard/i,'keyboard'],[/chuột|mouse/i,'mouse'],[/phản xạ|reaction/i,'zap'],[/bắn bia|aim/i,'target'],[/nhớ dãy|memory/i,'gem'],[/combo/i,'flame'],
  [/game|chơi|steam|valorant|exile|lol/i,'gamepad'],[/nhạc|music|playlist|spotify|nghe|bài hát/i,'music'],[/việt hoá|dịch|translate/i,'translate'],[/ảnh|photo|hình/i,'image'],[/phim|film|anime/i,'film'],[/code|github|mod\b|lập trình/i,'code'],[/discord|chat|nhắn|nói chuyện/i,'chat'],[/đọc|sách|truyện|book/i,'book'],[/hát|ca sĩ|nghệ sĩ|mic|rapper/i,'mic'],[/màu|vẽ|giao diện|theme/i,'palette'],[/video|tiktok|phát|play|xem/i,'play'],[/ngày|lịch|tuần|thời/i,'calendar'],[/link|liên kết|mở|ghé|theo dõi|kết bạn/i,'ext']];
function guess(t,d){
  for(var i=0;i<R.length;i++)if(R[i][0].test(t))return R[i][1];
  return d||pool[n++%pool.length];
}
function mark(el,k,cls){
  if(el.hasAttribute('data-mi'))return;
  el.setAttribute('data-mi',k);
  el.style.setProperty('--hi',uri(k));
  el.classList.add(cls);
}
var SEC={shelf:'gamepad',links:'globe',live:'chat',now:'target',play:'trophy',mod:'code',hobby:'sparkle',idol:'disc',playlist:'headphones',lab:'dice',photos:'camera',stats:'gem',facts:'star',qr:'link',log:'book',tkb:'clock',faq:'info',contact:'heart',map:'target'};
function syncState(){
  var bp=document.getElementById('bgmp'),b=document.body;
  if(bp){b.classList.toggle('bgm-on',!bp.hidden);b.classList.toggle('bgm-play',bp.classList.contains('playing'))}
  document.querySelectorAll('.idgrid').forEach(function(g){var k=g.children;g.classList.toggle('ten',k.length===10&&k[9].classList.contains('idc'))});
}
function scan(){
  syncState();
  document.querySelectorAll('h2:not([data-mi])').forEach(function(h){
    if(h.closest('.ghd'))return;
    var s=h.closest('section[id]');
    mark(h,(s&&SEC[s.id])||'sparkle','hi');
  });
  document.querySelectorAll('.hob,.card,.idgrid>*,.pls>*,.stats>div,.rows li,.log li,.tkb-list li,#gallery .ph').forEach(function(c,i){
    if(c.hasAttribute('data-mi'))return;
    mark(c,c.classList.contains('ph')?['camera','image','sparkle','heart'][n++%4]:guess(c.textContent.slice(0,160)),'hic');
  });
  document.querySelectorAll('.faq summary .sq').forEach(function(s){mark(s,guess(s.textContent),'hib')});
  document.querySelectorAll('.btn,.ffs button,.tkb-tabs button,.mapbar button,.fgrid li a,.cta a,.more a,.more button,.foldbtn,#lab .labtabs button,.wxch,#qvw button').forEach(function(b){
    if(b.hasAttribute('data-mi')||b.querySelector('svg,[data-ic],img'))return;
    /* nút gập/mở: luôn mũi tên xuống, CSS xoay ngược lại khi đang mở */
    mark(b,b.classList.contains('foldbtn')?'chevd':guess(b.textContent,'arrowr'),'hib');
  });
}
function bg(){
  if(document.getElementById('bgic'))return;
  var k=Object.keys(P),g='',i;
  for(i=0;i<12;i++){
    var sz=28+(i%4)*10,x=(i%4)*180+(i*37%90)+20,y=Math.floor(i/4)*240+(i*53%120)+20;
    g+='<g transform="translate('+x+' '+y+') rotate('+(((i*47)%60)-30)+' '+(sz/2)+' '+(sz/2)+') scale('+(sz/24).toFixed(2)+')">'+P[k[(i*7+3)%k.length]]+'</g>';
  }
  function u(c){return "url('data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720" fill="none" stroke="'+c+'" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+g+'</svg>')+"')"}
  var d=document.createElement('div');
  d.id='bgic';d.setAttribute('aria-hidden','true');
  d.style.setProperty('--tw',u('#fff'));d.style.setProperty('--tb',u('#000'));
  document.body.appendChild(d);
}

var q=0;
function sched(){if(q)return;q=setTimeout(function(){q=0;scan()},150)}
var pt=0,ly=-1,mqr=matchMedia('(prefers-reduced-motion:reduce)');
addEventListener('scroll',function(){
  if(pt)return;
  pt=requestAnimationFrame(function(){
    pt=0;
    var e=document.getElementById('bgic');
    if(!e||mqr.matches||document.documentElement.getAttribute('data-motion')==='off')return;
    var v=Math.round(Math.sin((window.scrollY||0)/600)*45);
    if(v===ly)return;
    ly=v;e.style.translate='0 '+v+'px';
  });
},{passive:true});
bg();scan();
var bpe=document.getElementById('bgmp');
if(bpe)new MutationObserver(syncState).observe(bpe,{attributes:true,attributeFilter:['hidden','class']});
var SEL='h2,.hob,.card,.idgrid>*,.pls>*,.stats>div,.rows li,.log li,.tkb-list li,#gallery .ph,.faq summary .sq,.btn,.ffs button,.tkb-tabs button,.mapbar button,.fgrid li a,.cta a,.more a,.more button';
new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){if(ms[i].target.classList&&ms[i].target.classList.contains('idgrid')){sched();return}var ad=ms[i].addedNodes;for(var j=0;j<ad.length;j++){var n=ad[j];if(n.nodeType===1&&(n.matches(SEL)||n.querySelector(SEL))){sched();return}}}}).observe(document.body,{childList:true,subtree:true});
})();
}catch(e){console.error('[#ic-more-js]',e)}

/* ===================== [khối 68] ===================== */
try{
/* đổi icon ở thanh đầu trang mỗi 2,5s (thay cho animation CSS vô hạn) */
(function(){var g=document.querySelectorAll('.dd-g'),k=0,R=document.documentElement;if(!g.length)return;
function calm(){return R.classList.contains('lite')||R.getAttribute('data-motion')==='off'||matchMedia('(prefers-reduced-motion:reduce)').matches}
g.forEach(function(e){e.setAttribute('data-k','0')});
setInterval(function(){if(document.hidden||calm())return;k=(k+1)%4;g.forEach(function(e){e.setAttribute('data-k',k)})},2500);
})();
}catch(e){console.error('[khối 68]',e)}

/* ===================== [khối 69] ===================== */
try{
/* Bộ mã hoá QR (chế độ byte, mức sửa lỗi M, phiên bản 1 đến 12). Trả về {n, g(x,y)} hoặc null nếu nội dung quá dài. */
function qrEncode(text){
  var bytes=Array.prototype.slice.call(new TextEncoder().encode(text));
  var ECC=[0,10,16,26,18,24,16,18,22,22,26,30,22],NB=[0,1,1,2,2,4,4,4,5,5,5,5,8];
  function raw(v){var r=(16*v+128)*v+64;if(v>=2){var a=Math.floor(v/7)+2;r-=(25*a-10)*a-55;if(v>=7)r-=36}return r}
  var ver=0,cap=0,v;
  for(v=1;v<=12;v++){var dc=Math.floor(raw(v)/8)-ECC[v]*NB[v];if(4+(v<10?8:16)+bytes.length*8<=dc*8){ver=v;cap=dc;break}}
  if(!ver)return null;
  var bits=[];function put(x,n){for(var i=n-1;i>=0;i--)bits.push((x>>>i)&1)}
  put(4,4);put(bytes.length,ver<10?8:16);bytes.forEach(function(b){put(b,8)});
  put(0,Math.min(4,cap*8-bits.length));while(bits.length%8)bits.push(0);
  for(var p=0xEC;bits.length<cap*8;p^=0xEC^0x11)put(p,8);
  var data=[],i,j,k;for(i=0;i<bits.length;i+=8){var bb=0;for(j=0;j<8;j++)bb=bb<<1|bits[i+j];data.push(bb)}
  function mul(x,y){var z=0;for(var q=7;q>=0;q--){z=(z<<1)^((z>>>7)*0x11D);z^=((y>>>q)&1)*x}return z}
  function gen(d){var r=[];for(var q=0;q<d-1;q++)r.push(0);r.push(1);var rt=1;for(var q=0;q<d;q++){for(var w=0;w<r.length;w++){r[w]=mul(r[w],rt);if(w+1<r.length)r[w]^=r[w+1]}rt=mul(rt,2)}return r}
  function rem(d,g){var r=g.map(function(){return 0});d.forEach(function(b){var f=b^r.shift();r.push(0);g.forEach(function(c,q){r[q]^=mul(c,f)})});return r}
  var nb=NB[ver],eb=ECC[ver],rw=Math.floor(raw(ver)/8),ns=nb-rw%nb,sl=Math.floor(rw/nb),g=gen(eb),blocks=[];
  k=0;for(i=0;i<nb;i++){var d=data.slice(k,k+sl-eb+(i<ns?0:1));k+=d.length;var e=rem(d,g);if(i<ns)d.push(0);blocks.push(d.concat(e))}
  var cw=[];for(i=0;i<blocks[0].length;i++)for(j=0;j<nb;j++)if(i!==sl-eb||j>=ns)cw.push(blocks[j][i]);
  var n=ver*4+17,m=[],f=[];for(i=0;i<n;i++){m.push(new Array(n).fill(false));f.push(new Array(n).fill(false))}
  function sf(x,y,c){m[y][x]=c;f[y][x]=true}
  for(i=0;i<n;i++){sf(6,i,i%2===0);sf(i,6,i%2===0)}
  function fnd(cx,cy){for(var dy=-4;dy<=4;dy++)for(var dx=-4;dx<=4;dx++){var dd=Math.max(Math.abs(dx),Math.abs(dy)),x=cx+dx,y=cy+dy;if(x>=0&&x<n&&y>=0&&y<n)sf(x,y,dd!==2&&dd!==4)}}
  fnd(3,3);fnd(n-4,3);fnd(3,n-4);
  var al=[];if(ver>1){var na=Math.floor(ver/7)+2,st=Math.ceil((ver*4+4)/(na*2-2))*2;al=[6];for(var ps=n-7;al.length<na;ps-=st)al.splice(1,0,ps)}
  for(i=0;i<al.length;i++)for(j=0;j<al.length;j++){if((i===0&&j===0)||(i===0&&j===al.length-1)||(i===al.length-1&&j===0))continue;for(var ay=-2;ay<=2;ay++)for(var ax=-2;ax<=2;ax++)sf(al[i]+ax,al[j]+ay,Math.max(Math.abs(ax),Math.abs(ay))!==1)}
  function bit(x,q){return((x>>>q)&1)!==0}
  function fmt(mask){var dt=mask,r=dt;for(var q=0;q<10;q++)r=(r<<1)^((r>>>9)*0x537);var b=((dt<<10)|r)^0x5412;
    for(var q=0;q<=5;q++)sf(8,q,bit(b,q));sf(8,7,bit(b,6));sf(8,8,bit(b,7));sf(7,8,bit(b,8));for(var q=9;q<15;q++)sf(14-q,8,bit(b,q));
    for(var q=0;q<8;q++)sf(n-1-q,8,bit(b,q));for(var q=8;q<15;q++)sf(8,n-15+q,bit(b,q));sf(8,n-8,true)}
  fmt(0);
  if(ver>=7){var r2=ver;for(i=0;i<12;i++)r2=(r2<<1)^((r2>>>11)*0x1F25);var vb=(ver<<12)|r2;for(i=0;i<18;i++){var c=bit(vb,i),a=n-11+i%3,b2=Math.floor(i/3);sf(a,b2,c);sf(b2,a,c)}}
  var ix=0,tot=cw.length*8;
  for(var rt=n-1;rt>=1;rt-=2){if(rt===6)rt=5;for(var vt=0;vt<n;vt++)for(j=0;j<2;j++){var x=rt-j,up=((rt+1)&2)===0,y=up?n-1-vt:vt;if(!f[y][x]&&ix<tot){m[y][x]=bit(cw[ix>>>3],7-(ix&7));ix++}}}
  function mk(t,x,y){switch(t){case 0:return(x+y)%2===0;case 1:return y%2===0;case 2:return x%3===0;case 3:return(x+y)%3===0;case 4:return(Math.floor(x/3)+Math.floor(y/2))%2===0;case 5:return x*y%2+x*y%3===0;case 6:return(x*y%2+x*y%3)%2===0;default:return((x+y)%2+x*y%3)%2===0}}
  function mask(t){for(var y=0;y<n;y++)for(var x=0;x<n;x++)if(!f[y][x]&&mk(t,x,y))m[y][x]=!m[y][x]}
  function pen(){var s=0,y,x,dk=0,L=[];
    for(var pass=0;pass<2;pass++){for(y=0;y<n;y++){var str='',run=1,pv=null;for(x=0;x<n;x++){var c=pass?m[x][y]:m[y][x];str+=c?'1':'0';if(c===pv){run++;if(run===5)s+=3;else if(run>5)s++}else{run=1;pv=c}}
      s+=40*((str.match(/(?=10111010000|00001011101)/g)||[]).length)}}
    for(y=0;y<n;y++)for(x=0;x<n;x++){if(m[y][x])dk++;if(x<n-1&&y<n-1&&m[y][x]===m[y][x+1]&&m[y][x]===m[y+1][x]&&m[y][x]===m[y+1][x+1])s+=3}
    s+=10*(Math.ceil(Math.abs(dk*20-n*n*10)/(n*n))-1);return s}
  var best=0,bp=1e9;
  for(i=0;i<8;i++){mask(i);fmt(i);var pp=pen();if(pp<bp){bp=pp;best=i}mask(i)}
  mask(best);fmt(best);
  return{n:n,g:function(x,y){return m[y][x]}};
}
if(typeof module!=='undefined')module.exports=qrEncode;
}catch(e){console.error('[khối 69]',e)}

/* ===================== [#qr-tree-js] ===================== */
try{
/* MÃ QR CÂY 3D VƯƠN CAO HƯỚNG LÊN TRÊN (ISOMETRIC 3D TREE):
   - Thân và tán cây vươn thẳng đứng lên trời, tán hoa/lá bồng bềnh xếp tầng theo từng mùa.
   - Bệ đất dạng hình thoi isometric chứa ma trận mã QR chuẩn xác cùng 3 mắt định vị.
   - Chỉ có 2 góc nhìn: cây 3D nhìn chéo 45° và mã QR nhìn thẳng từ trên xuống 90° (quét được).
     Chạm vào cây hoặc bấm 2 nút góc nhìn để chuyển. Không còn xoay tự do / xoay 4 góc. */
(function(){
var cv=document.getElementById('qrcv');if(!cv)return;
var R=document.documentElement,inp=document.getElementById('qrin'),msg=document.getElementById('qrmsg'),hint=document.getElementById('qrhint');
var ctx=cv.getContext('2d'),CW=560,CH=780,TAU=Math.PI*2;
  /* ĐỘ NÉT: toạ độ vẽ vẫn tính trên khung 560×780, nhưng canvas thật được đặt đúng bằng số điểm ảnh hiển thị
     (rộng CSS × tỉ lệ điểm ảnh của màn hình, tối đa 2 lần; máy yếu tối đa 1,35 lần) nên không còn bị phóng to hay thu nhỏ làm mờ. */
  var SSX=1,SSY=1,hiQ=false,noUp=false,tierDone=false;
  function applySS(){
    var w=cv.getBoundingClientRect().width;if(!w)return false;
    var t=w*(window.devicePixelRatio||1)/CW,ss=Math.max(0.6,Math.min(t,lowQ?1.35:2)),iw=Math.round(CW*ss),ih=Math.round(CH*ss);
    SSX=iw/CW;SSY=ih/CH;
    if(cv.width!==iw||cv.height!==ih){cv.width=iw;cv.height=ih;if(FX){FX.width=iw;FX.height=ih}return true}
    return false;
  }
var FX=document.getElementById('qrfx'),fctx=FX?FX.getContext('2d'):null,STG=document.getElementById('qrst');

/* BẢNG MÀU THEO MÙA: Bệ bệ gạch lát mã QR, Thảm cỏ, Thân cây, Tán lá 3D, Cánh hoa rơi */
var PAL={
  xuan:{
    dark:['#2f1b2c','#3a2037','#4c2647','#241422'],
    light:['#fff5fa','#faebf4'],
    lawn:['#9bc85e','#8bb752'],
    bark:['#6d4c41','#5d4037','#795548','#4e342e'],
    leaf:['#f8bbd0','#f48fb1','#ff80ab','#f06292','#ce93d8','#ba68c8'],
    petal:['#f8bbd0','#f48fb1','#ff80ab','#ffd1dc']
  },
  ha:{
    dark:['#142817','#1b351f','#102012','#234428'],
    light:['#f4faf0','#e8f5e2'],
    lawn:['#72b83a','#62a32f'],
    bark:['#4e342e','#3e2723','#5d4037','#33201c'],
    leaf:['#2e7d32','#388e3c','#43a047','#4caf50','#66bb6a','#81c784'],
    petal:['#81c784','#a5d6a7','#c8e6c9']
  },
  thu:{
    dark:['#30190f','#3f2014','#24120a','#4e2718'],
    light:['#fdf6eb','#f7ebdc'],
    lawn:['#bfa243','#af9339'],
    bark:['#5d4037','#4e342e','#6d4c41','#3e2723'],
    leaf:['#c62828','#d84315','#e65100','#f57c00','#ff9800','#ffb300'],
    petal:['#e65100','#f57c00','#d84315','#ff9800']
  },
  dong:{
    dark:['#142436','#1b3046','#0e1a27','#233d59'],
    light:['#f4f8fc','#e8f1fa'],
    lawn:['#d4e4f2','#c5d8ea'],
    bark:['#37474f','#263238','#455a64','#1c2529'],
    leaf:['#1b4332','#2d6a4f','#40916c','#ffffff','#e8f4f8','#ffffff'],
    petal:['#ffffff','#e1f5fe','#ffffff']
  },
  den:{
    dark:['#0a0a0a','#111111','#161616','#0d0d0d'],
    light:['#ffffff','#f4f4f6'],
    lawn:['#1b332b','#142922'],
    bark:['#2b2622','#1f1b18','#35302b','#161311'],
    leaf:['#2a2d34','#363a44','#454a56','#1e2026','#565c6a','#3a3f4b'],
    petal:['#ffd54f','#80deea','#e0e0e0']
  }
};

/* GÓC NHÌN CỐ ĐỊNH: cây nhìn chéo 45° (hướng xoay 45°, góc nghiêng 45°); chế độ mã QR nhìn từ trên xuống 90° (pitch 0 = nhìn thẳng mặt bệ) */
var TREE_YAW=Math.PI*0.25,TREE_PITCH=Math.PI*0.25;
/* các biến của camera xoay tự do cũ, giữ cố định = 0 (đã bỏ xoay tự do) */
var freeMode=false,tfm=0,fm=0,elev=0.95,telev=0.95,spin=0,tilt=0,ELMIN=-1.22,ELMAX=1.5;
var season='xuan',q=null,text='',ready=false,tm=0,vis=false,raf=0,lastT=0,prevT=0,acc=0,fxOn=false,ftt=0,PT=[];
var pitch=TREE_PITCH,tpitch=TREE_PITCH,yaw=TREE_YAW,tyaw=TREE_YAW;
var isQRMode=false,qrProg=0,tQrProg=0;
var te=1e9,TOT=0,ASP=1,anim=false;
/* PTH = độ dày bệ (dày hơn cho có khối), SHW = ảnh bóng đổ mềm dưới bệ (vẽ sẵn 1 lần) */
var PTH=1.75,SHW=null;
/* CHẤT LƯỢNG THÍCH ỨNG CHO MÁY YẾU: lowQ = ít khối lá hơn (khối to hơn), ít hạt hơn, giới hạn ~30 khung/giây, vẽ ô nguyên pixel.
   Bật sẵn nếu máy ít nhân/ít RAM, hoặc tự bật khi đo thấy vẽ chậm (một chiều, không bật tắt qua lại). */
var lowQ=((navigator.hardwareConcurrency||8)<=2)||((navigator.deviceMemory||8)<=2),pEma=0,pN=0,fEma=0,fN=0,CB=null,STR=8192;

/* Mảng khối 3D */
var NF=[],VX=[],VY=[],VZ0=[],VZ1=[],VW=[],VC=[],IS_LEAF=[],KIND=[],ALT=[],ST=[],DU=[],FA=[];
var TOPS=[],FRS=[];
var KEY=null,ORD=[],RX=null,RY=null,LAY={u:1,ox:0,oy:0};

function L(vi,en){return R.lang==='en'?en:vi}
function calm(){return R.classList.contains('lite')||R.getAttribute('data-motion')==='off'||matchMedia('(prefers-reduced-motion:reduce)').matches}
function say(t){if(msg)msg.textContent=t}
function rgb(h){var n=parseInt(h.slice(1),16);return[n>>16&255,n>>8&255,n&255]}
function hash(t){var h=5381,i;for(i=0;i<t.length;i++)h=((h<<5)+h+t.charCodeAt(i))|0;return h>>>0}
function rng(a){return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function cs(c){return'rgb('+c[0]+','+c[1]+','+c[2]+')'}

/* Xuất ảnh mã QR phẳng chất lượng cao khi người dùng bấm Tải PNG */
function plain(g,sz){
  if(!q)return;
  var n=q.n,pad=4,tot=n+pad*2,u=sz/tot;
  g.fillStyle='#ffffff';g.fillRect(0,0,sz,sz);
  g.fillStyle='#000000';
  for(var y=0;y<n;y++)for(var x=0;x<n;x++){if(q.g(x,y))g.fillRect(Math.round((x+pad)*u),Math.round((y+pad)*u),Math.ceil(u),Math.ceil(u))}
}

/* DỰNG CẢNH 3D: BỆ MÃ QR ISOMETRIC VÀ CÂY VƯƠN THẲNG ĐỨNG HƯỚNG LÊN TRÊN */
/* ====== MÔ HÌNH CÂY MỚI: lá tròn mịn đổ bóng (sprite), thân + cành + gốc loe mượt, nền QR là ảnh xoay sắc nét ====== */
var RAMP={
  xuan:[['#b0577f','#cf7099','#e88fb2','#f5adc9','#fbc8da','#ffe3ee'],['#d9a0b6','#e8b7c9','#f3cbd9','#f9dce6','#fdeaf0','#fff7fa']],
  ha:[['#17482a','#236b35','#2f8c42','#46a955','#6cc46f','#a2e093'],['#1d5a3a','#2a7a4a','#3c9a5c','#58b873','#82d197','#b5e9be']],
  thu:[['#6e1a0e','#a22d12','#cf4617','#ea6a1c','#f79a2e','#fecb64'],['#7a3d0b','#a85c10','#d07e18','#e8a02a','#f6c24a','#fde58c'],['#5c1010','#8e1b18','#b82c20','#d8473a','#ee6f58','#f9a08c']],
  dong:[['#0b261c','#12382a','#1a4c39','#25624a','#347a5d','#4b9477'],['#7f98b3','#a3b8cd','#c5d4e3','#dde8f2','#f0f5fa','#ffffff']],
  den:[['#15171c','#1f232b','#2a303a','#394150','#4d5769','#6a7589'],['#101216','#191c22','#232830','#303744','#414a5b','#566175']]
};
var BARK={
  xuan:['#2d1f17','#412e22','#593e2d','#74533c','#8f6b50','#aa8768'],
  ha:['#2d1f17','#412e22','#593e2d','#74533c','#8f6b50','#aa8768'],
  thu:['#2d1f17','#412e22','#593e2d','#74533c','#8f6b50','#aa8768'],
  dong:['#2b2622','#3d3630','#524a42','#6a6056','#847a6e','#9f9588'],
  den:['#100d0b','#1a1512','#262019','#352c24','#463b30','#5a4c3e']
};
var SPRC=[],SP=64,GT=null,GQ=null,PPM=24,HT=18,PCOL=null;
function mixc(a,b,t){return[a[0]+(b[0]-a[0])*t|0,a[1]+(b[1]-a[1])*t|0,a[2]+(b[2]-a[2])*t|0]}
function lit(c,t){return mixc(c,[255,255,255],t)}
function shd(c,t){return mixc(c,[0,0,0],t)}
function newCv(w,h){var c=document.createElement('canvas');c.width=w;c.height=h;return c}
/* lá tròn: điểm sáng ở góc trên-trái, mép tối nhẹ ở dưới-phải cho có khối */
function spBlob(c,flat){
  var P=SP,cv=newCv(P,P),g=cv.getContext('2d'),f=flat?0.14:0.3,gr=g.createRadialGradient(P*0.38,P*0.34,P*0.04,P*0.5,P*0.52,P*0.5);
  gr.addColorStop(0,cs(lit(c,f)));gr.addColorStop(0.55,cs(c));gr.addColorStop(1,cs(shd(c,flat?0.16:0.22)));
  g.fillStyle=gr;g.beginPath();g.arc(P/2,P/2,P*0.47,0,TAU);g.fill();return cv;
}
/* lá thuôn có gân giữa, xoay theo góc ang */
function spLeaf(c,ang){
  var P=SP,cv=newCv(P,P),g=cv.getContext('2d');
  g.translate(P/2,P/2);g.rotate(ang);
  var gr=g.createLinearGradient(0,-P*0.3,0,P*0.3);gr.addColorStop(0,cs(lit(c,0.28)));gr.addColorStop(0.5,cs(c));gr.addColorStop(1,cs(shd(c,0.22)));
  g.fillStyle=gr;g.beginPath();g.moveTo(-P*0.46,0);g.quadraticCurveTo(-P*0.1,-P*0.36,P*0.46,0);g.quadraticCurveTo(-P*0.1,P*0.36,-P*0.46,0);g.fill();
  g.strokeStyle=cs(lit(c,0.4));g.globalAlpha=0.5;g.lineWidth=P*0.035;g.beginPath();g.moveTo(-P*0.4,0);g.lineTo(P*0.4,0);g.stroke();return cv;
}
/* lá phong năm thuỳ */
function spMaple(c,ang){
  var P=SP,cv=newCv(P,P),g=cv.getContext('2d'),k;
  g.translate(P/2,P/2);g.rotate(ang);
  var gr=g.createRadialGradient(-P*0.1,-P*0.12,P*0.03,0,0,P*0.5);gr.addColorStop(0,cs(lit(c,0.3)));gr.addColorStop(0.6,cs(c));gr.addColorStop(1,cs(shd(c,0.22)));
  g.fillStyle=gr;g.beginPath();
  for(k=0;k<10;k++){var a=k*TAU/10-Math.PI/2,r=(k%2===0)?P*0.47:P*0.2;if(k%4===0)r=P*0.47;else if(k%2===0)r=P*0.4;g.lineTo(Math.cos(a)*r,Math.sin(a)*r)}
  g.closePath();g.fill();
  g.strokeStyle=cs(lit(c,0.38));g.globalAlpha=0.55;g.lineWidth=P*0.04;g.beginPath();
  for(k=0;k<5;k++){var b=k*TAU/5-Math.PI/2;g.moveTo(0,0);g.lineTo(Math.cos(b)*P*0.36,Math.sin(b)*P*0.36)}
  g.stroke();return cv;
}
/* cụm kim thông */
function spNeedle(c){
  var P=SP,cv=newCv(P,P),g=cv.getContext('2d'),k;
  g.translate(P/2,P/2);
  g.fillStyle=cs(shd(c,0.12));g.beginPath();g.arc(0,0,P*0.2,0,TAU);g.fill();
  g.lineCap='round';
  for(k=0;k<14;k++){
    var a=k*TAU/14+(k%2?0.12:0),len=P*(0.4+((k*7)%3)*0.04);
    g.strokeStyle=cs(k%3===0?lit(c,0.22):(k%3===1?c:shd(c,0.18)));g.lineWidth=P*0.075;
    g.beginPath();g.moveTo(Math.cos(a)*P*0.08,Math.sin(a)*P*0.08);g.lineTo(Math.cos(a)*len,Math.sin(a)*len);g.stroke();
  }
  g.fillStyle=cs(lit(c,0.15));g.beginPath();g.arc(-P*0.03,-P*0.04,P*0.1,0,TAU);g.fill();return cv;
}
/* hoa năm cánh */
function spBloom(c){
  var P=SP,cv=newCv(P,P),g=cv.getContext('2d'),k;
  g.translate(P/2,P/2);
  for(k=0;k<5;k++){
    g.save();g.rotate(k*TAU/5-Math.PI/2);
    var gr=g.createRadialGradient(P*0.2,0,P*0.02,P*0.2,0,P*0.22);gr.addColorStop(0,cs(lit(c,0.45)));gr.addColorStop(1,cs(c));
    g.fillStyle=gr;g.beginPath();g.ellipse(P*0.2,0,P*0.2,P*0.15,0,0,TAU);g.fill();g.restore();
  }
  g.fillStyle='#ffd54f';g.beginPath();g.arc(0,0,P*0.075,0,TAU);g.fill();
  g.fillStyle='#e08a00';g.beginPath();g.arc(0,0,P*0.035,0,TAU);g.fill();return cv;
}
function spLantern(){
  var P=SP,cv=newCv(P,P),g=cv.getContext('2d'),gr=g.createRadialGradient(P/2,P/2,0,P/2,P/2,P*0.5);
  gr.addColorStop(0,'rgba(255,226,120,.85)');gr.addColorStop(0.35,'rgba(255,200,70,.35)');gr.addColorStop(1,'rgba(255,200,70,0)');
  g.fillStyle=gr;g.fillRect(0,0,P,P);g.fillStyle='#fff1b0';g.beginPath();g.arc(P/2,P/2,P*0.13,0,TAU);g.fill();return cv;
}
function spCrystal(){
  var P=SP,cv=newCv(P,P),g=cv.getContext('2d'),gr=g.createLinearGradient(0,P*0.15,0,P*0.85);
  gr.addColorStop(0,'#c9f6ff');gr.addColorStop(1,'#35b6d4');g.fillStyle=gr;
  g.beginPath();g.moveTo(P/2,P*0.1);g.lineTo(P*0.72,P*0.5);g.lineTo(P/2,P*0.9);g.lineTo(P*0.28,P*0.5);g.closePath();g.fill();
  g.fillStyle='rgba(255,255,255,.55)';g.beginPath();g.moveTo(P/2,P*0.1);g.lineTo(P*0.38,P*0.48);g.lineTo(P/2,P*0.5);g.closePath();g.fill();return cv;
}
/* ---- nền: hai ảnh phẳng (cây / mã QR) vẽ một lần, xoay bằng phép biến đổi nên mép luôn sắc nét ---- */
function buildGround(rnd,darkCol,lightCol,lawnCol,petalCol){
  var n=q.n,half=n/2,Sz=Math.round((n+12)*PPM),i,x,y;
  HT=half+6;GT=newCv(Sz,Sz);GQ=newCv(Sz,Sz);
  var gt=GT.getContext('2d'),gq=GQ.getContext('2d');
  function cell(g,cx,cy,c){g.fillStyle=cs(c);g.fillRect((cx+6)*PPM,(cy+6)*PPM,PPM+0.6,PPM+0.6)}
  function bevel(g,cx,cy){
    var px=(cx+6)*PPM,py=(cy+6)*PPM,b=Math.max(1.5,PPM*0.1);
    g.fillStyle='rgba(255,255,255,.2)';g.fillRect(px,py,PPM,b);g.fillRect(px,py,b,PPM);
    g.fillStyle='rgba(0,0,0,.3)';g.fillRect(px,py+PPM-b,PPM,b);g.fillRect(px+PPM-b,py,b,PPM);
  }
  /* ảnh chế độ cây: bệ cỏ + mã nổi nhẹ */
  for(y=-1;y<=n;y++)for(x=-1;x<=n;x++){
    var inside=x>=0&&x<n&&y>=0&&y<n;
    if(!inside){cell(gt,x,y,lawnCol[(rnd()*lawnCol.length)|0]);bevel(gt,x,y);continue}
    var dark=q.g(x,y),fnd=(x<7&&y<7)||(x>=n-7&&y<7)||(x<7&&y>=n-7),fx=x<7?x:x-(n-7),fy=y<7?y:y-(n-7),core=fnd&&fx>=2&&fx<=4&&fy>=2&&fy<=4,edge=fnd&&(fx===0||fx===6||fy===0||fy===6),ring=fnd&&!core&&!edge;
    if(dark){cell(gt,x,y,fnd?(core?darkCol[0]:lawnCol[0]):darkCol[(x*5+y*7+((x*y)%3))%darkCol.length]);bevel(gt,x,y)}
    else cell(gt,x,y,ring?lightCol[0]:lightCol[(x+y)%lightCol.length]);
  }
  /* bóng tán lá đổ xuống bệ */
  var sh=gt.createRadialGradient((HT+0.8)*PPM,(HT+1.2)*PPM,0,(HT+0.8)*PPM,(HT+1.2)*PPM,half*0.95*PPM);
  sh.addColorStop(0,season==='dong'?'rgba(60,80,110,.30)':season==='den'?'rgba(0,0,0,.42)':'rgba(40,20,40,.30)');sh.addColorStop(1,'rgba(0,0,0,0)');
  gt.fillStyle=sh;gt.fillRect(6*PPM,6*PPM,n*PPM,n*PPM);
  /* trang trí quanh gốc theo mùa */
  function mapleLeaf(g,sz){g.beginPath();for(var k=0;k<10;k++){var a=k*TAU/10-Math.PI/2,r=(k%4===0)?sz:((k%2===0)?sz*0.84:sz*0.42);g.lineTo(Math.cos(a)*r,Math.sin(a)*r)}g.closePath();g.fill()}
  var nDec=lowQ?36:70;
  if(season==='thu')nDec=lowQ?60:120;
  if(season==='dong'){
    for(i=0;i<(lowQ?8:15);i++){var sa=rnd()*TAU,sr=1.5+rnd()*half*0.8,swx=Math.cos(sa)*sr,swy=Math.sin(sa)*sr;
      if(Math.abs(swx)>=half-0.5||Math.abs(swy)>=half-0.5)continue;
      gt.fillStyle='rgba(255,255,255,'+(0.55+rnd()*0.3)+')';gt.beginPath();gt.ellipse((swx+HT)*PPM,(swy+HT)*PPM,PPM*(0.8+rnd()*1.3),PPM*(0.5+rnd()*0.7),rnd()*Math.PI,0,TAU);gt.fill()}
  }
  for(i=0;i<nDec;i++){
    var pr=1.6+rnd()*(half*0.62),pa=rnd()*TAU,wx=Math.cos(pa)*pr,wy=Math.sin(pa)*pr;
    if(Math.abs(wx)>=half-0.3||Math.abs(wy)>=half-0.3)continue;
    gt.save();gt.translate((wx+HT)*PPM,(wy+HT)*PPM);gt.rotate(rnd()*TAU);
    if(season==='thu'){gt.fillStyle=cs(petalCol[(rnd()*petalCol.length)|0]);gt.globalAlpha=0.93;mapleLeaf(gt,PPM*(0.26+rnd()*0.18))}
    else if(season==='den'){var gg=gt.createRadialGradient(0,0,0,0,0,PPM*0.4);gg.addColorStop(0,'rgba(255,230,130,.95)');gg.addColorStop(1,'rgba(255,200,70,0)');gt.fillStyle=gg;gt.fillRect(-PPM*0.4,-PPM*0.4,PPM*0.8,PPM*0.8)}
    else if(season==='dong'){gt.fillStyle='rgba(255,255,255,.9)';gt.beginPath();gt.arc(0,0,PPM*(0.07+rnd()*0.08),0,TAU);gt.fill()}
    else{gt.fillStyle=cs(petalCol[(rnd()*petalCol.length)|0]);gt.globalAlpha=0.92;gt.beginPath();gt.ellipse(0,0,PPM*(0.17+rnd()*0.12),PPM*0.1,0,0,TAU);gt.fill()}
    gt.restore();
  }
  /* ảnh chế độ QR: lề trắng 4 ô, viền cỏ ngoài, mã phẳng, mắt định vị đen */
  for(y=-5;y<=n+4;y++)for(x=-5;x<=n+4;x++){
    var ins=x>=0&&x<n&&y>=0&&y<n;
    if(!ins){var fr=(x===-5||x===n+4||y===-5||y===n+4);cell(gq,x,y,fr?lawnCol[(rnd()*lawnCol.length)|0]:lightCol[((x+y)&1)%lightCol.length]);continue}
    var d2=q.g(x,y),f2=(x<7&&y<7)||(x>=n-7&&y<7)||(x<7&&y>=n-7),fx2=x<7?x:x-(n-7),fy2=y<7?y:y-(n-7),c2=f2&&fx2>=2&&fx2<=4&&fy2>=2&&fy2<=4,rg2=f2&&!c2&&!(fx2===0||fx2===6||fy2===0||fy2===6);
    if(d2)cell(gq,x,y,f2?darkCol[0]:darkCol[(x*5+y*7+((x*y)%3))%darkCol.length]);
    else cell(gq,x,y,rg2?lightCol[0]:lightCol[(x+y)%lightCol.length]);
  }
}
/* CAMERA: chiếu xiên mặc định (nền không méo, độ cao chỉ nâng hình lên). Chế độ xoay tự do pha trộn dần sang camera trực giao thật
   với góc nâng elev (âm = nhìn từ dưới lên). Y màn hình = (ry·gy − z·gz); độ sâu = ry·dy + z·dz. */
function camParams(){
  var sp=Math.sin(pitch);
  if(fm<=0.001)return{gy:1,gz:sp,dy:sp,dz:1};
  var se=Math.sin(elev),ce=Math.cos(elev);
  return{gy:1+(se-1)*fm,gz:sp+(ce-sp)*fm,dy:sp+(ce-sp)*fm,dz:1+(se-1)*fm};
}
/* bệ là một khối hộp: vẽ các mặt bên hướng về camera */
function pedestalSides(c,s,gy,gz,dy,u,ox,oy){
  var h=q.n/2+1,k,ks=[[1,0],[-1,0],[0,1],[0,-1]],cn=[[h,-h,h,h],[-h,h,-h,-h],[h,h,-h,h],[-h,-h,h,-h]],th=PTH*gz*u;
  var base=season==='den'?[14,14,24]:season==='dong'?[180,195,210]:[170,165,155];
  for(k=0;k<4;k++){
    var nx=ks[k][0],ny=ks[k][1],vy=nx*s+ny*c;if(vy*dy<=0.0005)continue;
    var vx=nx*c-ny*s,shv=Math.max(0.4,Math.min(0.98,0.6+0.3*(-0.5*vx+0.85*vy))),q2=cn[k],
      X1=ox+(q2[0]*c-q2[1]*s)*u,Y1=oy+(q2[0]*s+q2[1]*c)*gy*u,X2=ox+(q2[2]*c-q2[3]*s)*u,Y2=oy+(q2[2]*s+q2[3]*c)*gy*u;
    /* mặt bên sáng ở mép trên, tối dần xuống đáy (như có ánh sáng từ trên chiếu xuống) */
    var gr=ctx.createLinearGradient(0,Math.min(Y1,Y2),0,Math.max(Y1,Y2)+th),s2=shv*0.62;
    gr.addColorStop(0,'rgb('+(base[0]*shv|0)+','+(base[1]*shv|0)+','+(base[2]*shv|0)+')');
    gr.addColorStop(1,'rgb('+(base[0]*s2|0)+','+(base[1]*s2|0)+','+(base[2]*s2|0)+')');
    ctx.fillStyle=gr;
    ctx.beginPath();ctx.moveTo(X1,Y1);ctx.lineTo(X2,Y2);ctx.lineTo(X2,Y2+th);ctx.lineTo(X1,Y1+th);ctx.closePath();ctx.fill();
    /* viền sáng ở cạnh trên của bệ */
    ctx.strokeStyle='rgba(255,255,255,'+(0.18+0.22*shv).toFixed(2)+')';ctx.lineWidth=Math.max(1,u*0.12);
    ctx.beginPath();ctx.moveTo(X1,Y1);ctx.lineTo(X2,Y2);ctx.stroke();
  }
}
/* đáy bệ (chỉ thấy khi nhìn từ dưới lên): khối đá tối có vân chia ô */
function pedestalBottom(c,s,gy,gz,u,ox,oy){
  var h=q.n/2+1,th=PTH*gz*u,i,base=season==='den'?[14,14,24]:season==='dong'?[180,195,210]:[170,165,155];
  function P(wx,wy){return[ox+(wx*c-wy*s)*u,oy+(wx*s+wy*c)*gy*u+th]}
  var p1=P(-h,-h),p2=P(h,-h),p3=P(h,h),p4=P(-h,h);
  ctx.fillStyle=season==='den'?'rgb(34,40,60)':'rgb('+(base[0]*0.5|0)+','+(base[1]*0.5|0)+','+(base[2]*0.5|0)+')';
  ctx.beginPath();ctx.moveTo(p1[0],p1[1]);ctx.lineTo(p2[0],p2[1]);ctx.lineTo(p3[0],p3[1]);ctx.lineTo(p4[0],p4[1]);ctx.closePath();ctx.fill();
  ctx.strokeStyle='rgba(0,0,0,.22)';ctx.lineWidth=Math.max(1,u*0.08);ctx.beginPath();
  for(i=1;i<6;i++){var f=-h+2*h*i/6,a1=P(f,-h),a2=P(f,h),b1=P(-h,f),b2=P(h,f);ctx.moveTo(a1[0],a1[1]);ctx.lineTo(a2[0],a2[1]);ctx.moveTo(b1[0],b1[1]);ctx.lineTo(b2[0],b2[1])}
  ctx.stroke();
  ctx.strokeStyle='rgba(255,255,255,.12)';ctx.lineWidth=Math.max(1,u*0.1);ctx.beginPath();ctx.moveTo(p1[0],p1[1]);ctx.lineTo(p2[0],p2[1]);ctx.lineTo(p3[0],p3[1]);ctx.lineTo(p4[0],p4[1]);ctx.closePath();ctx.stroke();
}
function drawGround(tex,alpha,c,s,gy,u,ox,oy){
  if(!tex||alpha<=0.01||Math.abs(gy)<0.03)return;
  var k=u/PPM;ctx.save();ctx.globalAlpha=Math.min(1,alpha);
  ctx.transform(k*c,k*s*gy,-k*s,k*c*gy,ox+u*HT*(s-c),oy-u*HT*gy*(s+c));ctx.drawImage(tex,0,0);ctx.restore();
}
function scene(){
  var n=q.n,half=n/2,rnd=rng(hash(text)),col=PAL[season];
  var darkCol=col.dark.map(rgb),lightCol=col.light.map(rgb),lawnCol=col.lawn.map(rgb),petalCol=col.petal.map(rgb);
  var i,j,k;
  var D=(half+1.5)*1.414,u=Math.min(CW*0.86/(2*D),CH*0.84/44),ox=CW/2,oy=CH/2+45,uq=Math.min(CW*0.9/(n+10),CH*0.78/(n+10));
  LAY={u:u,ox:ox,oy:oy,uq:uq,oyq:CH/2-12};
  NF=[];VX=[];VY=[];VZ0=[];VZ1=[];VW=[];VC=[];IS_LEAF=[];KIND=[];ALT=[];ST=[];DU=[];FA=[];TOPS=[];FRS=[];TOT=0;SPRC=[];
  function reg(cv){SPRC.push(cv);return SPRC.length-1}
  function add(px,py,pz,pr,sp_,kind,st,du,fa){VX.push(px);VY.push(py);VZ0.push(pz);VW.push(pr);VC.push(sp_);KIND.push(kind);ST.push(st);DU.push(du);FA.push(fa);if(st+du>TOT)TOT=st+du}
  PPM=Math.max(10,Math.min(Math.round(Math.max(u,uq)*SSX*(lowQ?0.85:1)),Math.floor(1500/(n+12))));
  buildGround(rnd,darkCol,lightCol,lawnCol,petalCol);
  var rB0=lowQ?1.2:(hiQ?0.68:0.86);SP=Math.max(24,Math.min(72,Math.round(2*rB0*1.1*u*SSX)));
  var ramps=RAMP[season].map(function(r){return r.map(rgb)}),bark=BARK[season].map(rgb),NR=ramps.length;
  /* ---- sprite theo loài cây ---- */
  var blob=ramps.map(function(r){return r.map(function(c){return reg(spBlob(c,false))})});
  var leafS=null,mapleS=null,needleS=null,bloom=null,lantern=-1,crystal=-1,ang=[0,0.6,1.2,1.8,2.4,3.0];
  if(season==='ha')leafS=ramps.map(function(r){return r.map(function(c){return ang.map(function(a){return reg(spLeaf(c,a))})})});
  if(season==='thu')mapleS=ramps.map(function(r){return r.map(function(c){return [0.3,1.9,3.5,5.1].map(function(a){return reg(spMaple(c,a))})})});
  if(season==='dong')needleS=ramps[0].map(function(c){return reg(spNeedle(c))});
  if(season==='xuan')bloom=[reg(spBloom(ramps[0][3])),reg(spBloom(ramps[0][4])),reg(spBloom(ramps[0][5])),reg(spBloom(ramps[1][4]))];
  if(season==='den'){lantern=reg(spLantern());crystal=reg(spCrystal())}
  var barkS=bark.map(function(c){return reg(spBlob(c,true))});
  var dens=lowQ?0.4:(hiQ?1.45:0.82),rBase=lowQ?1.2:(hiQ?0.68:0.86);
  var Lx=0.2,Ly=-0.3,Lz=0.93;
  function clamp(v,a,b){return v<a?a:v>b?b:v}
  /* thân: cong/xoắn theo tham số, gốc loe, mọc từ dưới lên; trả về hàm toạ độ theo t */
  function trunk(Ht,r0,r1,flare,sx,sy,freq){
    var ph=rnd()*TAU,tp=function(t){var a=t*(freq||2.6)+ph;return{x:Math.sin(a)*sx*t,y:Math.cos(a*0.8)*sy*t,z:t*Ht}},t=0;
    while(t<1){var p=tp(t),r=r0+(r1-r0)*t+(t<0.12?flare*(1-t/0.12):0);add(p.x,p.y,p.z,r,barkS[Math.min(4,1+((t*3+rnd()*1.6)|0))],2,0.2+t*0.5,0.3,0);t+=Math.max(0.01,0.3*r/Ht)}
    return tp;
  }
  function roots(nr,len,r0){
    for(var a=0;a<nr;a++){var ra=a/nr*TAU+rnd()*0.6,ln=len*(0.8+rnd()*0.5);
      for(var b=0;b<10;b++){var f=b/10;add(Math.cos(ra)*(0.8+ln*f),Math.sin(ra)*(0.8+ln*f),0.25+0.35*(1-f),r0*(1-0.62*f),barkS[1+((rnd()*2)|0)],2,0.25+f*0.2,0.25,0)}}
  }
  /* cành cong (bezier bậc hai); trả về hàm lấy điểm theo f để rẽ nhánh phụ */
  function limb(sx,sy,sz,ex,ey,ez,cx,cy,cz,r0,r1,steps,st0){
    for(var b=0;b<=steps;b++){var f=b/steps,a1=(1-f)*(1-f),b1=2*(1-f)*f,c1=f*f;
      add(a1*sx+b1*cx+c1*ex,a1*sy+b1*cy+c1*ey,a1*sz+b1*cz+c1*ez,r0+(r1-r0)*f,barkS[1+((rnd()*3)|0)],2,st0+f*0.3,0.3,0)}
    return function(f){var a1=(1-f)*(1-f),b1=2*(1-f)*f,c1=f*f;return{x:a1*sx+b1*cx+c1*ex,y:a1*sy+b1*cy+c1*ey,z:a1*sz+b1*cz+c1*ez}};
  }
  function shade(nl,lz,inner,zlo,zspan){var ht=clamp((lz-zlo)/zspan,0,1),v=(nl*0.5+0.5)*0.72+ht*0.28+(rnd()-0.5)*0.2-(inner?0.35:0);return clamp(Math.round(v*5.2),0,5)}
  /* rải lá quanh mặt ngoài một cụm bầu dục; pick(lz,lv,inner,nl,rr) trả về [sprite, hệ số bán kính] */
  function foliage(cl,o){
    var area=4*Math.PI*Math.pow((Math.pow(cl.rx*cl.ry,1.6)+Math.pow(cl.rx*cl.rz,1.6)+Math.pow(cl.ry*cl.rz,1.6))/3,1/1.6),cnt=Math.round(area*(o.k||0.62)*dens);
    for(var j2=0;j2<cnt;j2++){
      var th=rnd()*TAU,cz=rnd()*2-1,sr=Math.sqrt(1-cz*cz),dx=Math.cos(th)*sr,dy=Math.sin(th)*sr,dz=cz,inner=rnd()<(o.inner===undefined?0.12:o.inner),tt=inner?0.3+rnd()*0.4:0.8+rnd()*0.2;
      var lx=cl.x+dx*cl.rx*tt,ly=cl.y+dy*cl.ry*tt,lz=cl.z+dz*cl.rz*tt;
      if(lz<(o.zmin||0))continue;
      if(o.hole&&!inner&&rnd()<o.hole)continue;
      var nl=(dx/cl.rx*Lx+dy/cl.ry*Ly+dz/cl.rz*Lz)/Math.sqrt((dx/cl.rx)*(dx/cl.rx)+(dy/cl.ry)*(dy/cl.ry)+(dz/cl.rz)*(dz/cl.rz)),lv=shade(nl,lz,inner,o.zlo,o.zspan),pk=o.pick(lz,lv,inner,nl,cl);
      add(lx,ly,lz,rBase*pk[1]*(0.85+rnd()*0.3),pk[0],1,0.45+(lz/34)*0.45+rnd()*0.2,0.4,4);
    }
  }
  /* ================= MỖI MÙA MỘT LOÀI CÂY ================= */
  if(season==='xuan'){
    /* ANH ĐÀO: thân ngắn chia nhánh, cành cong toả rộng, tán dẹt như chiếc ô, hoa rủ xuống */
    var tp=trunk(10,1.95,0.95,0.9,1.1,0.8),fk=tp(0.82),nL=5+((rnd()*2)|0),ends=[],cls=[];
    for(i=0;i<nL;i++){
      var a=i/nL*TAU+rnd()*0.5,d=8.4+rnd()*2.6,ez=14.6+rnd()*2.0,ex=fk.x+Math.cos(a)*d,ey=fk.y+Math.sin(a)*d;
      var lm=limb(fk.x,fk.y,fk.z,ex,ey,ez,fk.x+Math.cos(a)*d*0.45,fk.y+Math.sin(a)*d*0.45,fk.z+5.4,1.3,0.4,24,0.45);
      cls.push({x:ex*0.97,y:ey*0.97,z:ez+1.2,rx:4.6+rnd()*0.7,ry:4.6+rnd()*0.7,rz:2.4+rnd()*0.3,w:1});
      for(var sI=-1;sI<=1;sI+=2){if(rnd()<0.85){var pp=lm(0.58),a2=a+sI*(0.5+rnd()*0.3),d2=3.4+rnd()*1.6,e2={x:pp.x+Math.cos(a2)*d2,y:pp.y+Math.sin(a2)*d2,z:pp.z+0.6+rnd()*1.2};
        limb(pp.x,pp.y,pp.z,e2.x,e2.y,e2.z,(pp.x+e2.x)/2,(pp.y+e2.y)/2,(pp.z+e2.z)/2+0.9,0.55,0.22,10,0.6);
        cls.push({x:e2.x,y:e2.y,z:e2.z+0.9,rx:3.4+rnd()*0.5,ry:3.4+rnd()*0.5,rz:2.1+rnd()*0.3,w:1})}}
    }
    cls.push({x:fk.x,y:fk.y,z:fk.z+7.2,rx:4.6,ry:4.6,rz:2.5,w:0});
    for(i=0;i<4;i++){var ac=i/4*TAU+rnd()*0.6;cls.push({x:fk.x+Math.cos(ac)*5.4,y:fk.y+Math.sin(ac)*5.4,z:fk.z+6.2+rnd(),rx:3.8,ry:3.8,rz:2.3,w:0})}
    for(i=0;i<cls.length;i++){
      var cl=cls[i];
      foliage(cl,{k:0.5,hole:0.06,zmin:12,zlo:13,zspan:10,pick:function(lz,lv,inner){
        if(!inner&&rnd()<0.38)return [bloom[Math.min(2,Math.max(0,lv-2))+((rnd()<0.2)?(3-Math.min(2,Math.max(0,lv-2))):0)],1.1];
        return [blob[rnd()<0.75?0:1][lv],1]}});
      if(cl.w){ /* hoa rủ: chuỗi hoa nhỏ buông xuống từ rìa tán */
        for(j=0;j<(lowQ?3:7);j++){
          var ba=rnd()*TAU,bx=cl.x+Math.cos(ba)*cl.rx*0.85,by=cl.y+Math.sin(ba)*cl.ry*0.85,bz=cl.z-cl.rz*0.5,m=4+((rnd()*4)|0);
          for(k=0;k<m;k++)add(bx+Math.cos(ba)*0.22*k,by+Math.sin(ba)*0.22*k,bz-0.8*k,rBase*0.66,(rnd()<0.5&&bloom)?bloom[Math.min(2,k)]:blob[1][3+(k%2)],1,0.8+rnd()*0.5,0.4,3);
        }
      }
    }
  }else if(season==='ha'){
    /* ĐẠI THỤ: thân rất to, rễ nổi, tán vòm khổng lồ rậm rạp */
    var tp2=trunk(13.5,2.75,1.45,1.3,0.5,0.35);roots(7,4.8,1.0);
    var oc=[{x:0,y:0,z:27.5,rx:6.2,ry:6.2,rz:5.0,h:0}],nA2=5,nB2=6,nC2=5;
    for(i=0;i<nA2;i++){var aa=i/nA2*TAU+rnd()*0.4;oc.push({x:Math.cos(aa)*5.8,y:Math.sin(aa)*5.8,z:24.4+rnd()*1.4,rx:5.4,ry:5.4,rz:4.1,h:1})}
    for(i=0;i<nB2;i++){var ab=(i+0.4)/nB2*TAU+rnd()*0.4;oc.push({x:Math.cos(ab)*9.8,y:Math.sin(ab)*9.8,z:20.4+rnd()*1.8,rx:4.9,ry:4.9,rz:3.8,h:0})}
    for(i=0;i<nC2;i++){var ac2=(i+0.8)/nC2*TAU+rnd()*0.5;oc.push({x:Math.cos(ac2)*12,y:Math.sin(ac2)*12,z:16.8+rnd()*1.4,rx:3.9,ry:3.9,rz:3.0,h:1})}
    oc.push({x:2.5,y:-2,z:32,rx:3.2,ry:3.2,rz:2.6,h:1});
    for(i=1;i<=nA2+nB2;i++){var cb=oc[i],t0=0.55+rnd()*0.3,s0=tp2(t0);limb(s0.x,s0.y,s0.z,cb.x*0.8,cb.y*0.8,cb.z-3,(s0.x+cb.x*0.8)/2,(s0.y+cb.y*0.8)/2,(s0.z+cb.z)/2+1.5,1.05,0.36,18,0.45)}
    for(i=0;i<oc.length;i++){
      foliage(oc[i],{k:0.64,zmin:14.2,zlo:15,zspan:18,pick:function(lz,lv,inner,nl,cl){
        var rr=cl.h%NR;
        if(!inner&&leafS&&rnd()<0.2)return [leafS[rr][lv][(rnd()*6)|0],1.12];
        return [blob[rnd()<0.8?rr:(1-rr)][lv],1]}});
    }
  }else if(season==='thu'){
    /* PHONG ĐỎ: thân mảnh, nhiều cành lộ ra, tán thưa hình bầu dục, lá phong năm thuỳ rụng */
    var tp3=trunk(14,1.4,0.55,0.55,0.8,0.55),mc=[{x:0,y:0,z:28.5,rx:3.8,ry:3.8,rz:3.2}],nA3=4,nB3=6,nC3=6;
    for(i=0;i<nA3;i++){var a3=i/nA3*TAU+rnd()*0.5;mc.push({x:Math.cos(a3)*4.4,y:Math.sin(a3)*4.4,z:24.8+rnd()*1.2,rx:3.8,ry:3.8,rz:3.0})}
    for(i=0;i<nB3;i++){var b3=(i+0.4)/nB3*TAU+rnd()*0.5;mc.push({x:Math.cos(b3)*7.0,y:Math.sin(b3)*7.0,z:20.8+rnd()*1.6,rx:4.2,ry:4.2,rz:3.1})}
    for(i=0;i<nC3;i++){var c3=(i+0.8)/nC3*TAU+rnd()*0.6;mc.push({x:Math.cos(c3)*8.6,y:Math.sin(c3)*8.6,z:16.8+rnd()*1.4,rx:3.5,ry:3.5,rz:2.7})}
    for(i=1;i<mc.length;i++){
      var cm=mc[i],t03=0.5+rnd()*0.35,s03=tp3(t03);
      var lm3=limb(s03.x,s03.y,s03.z,cm.x*0.85,cm.y*0.85,cm.z-1.8,(s03.x+cm.x*0.85)/2+(rnd()-0.5)*2,(s03.y+cm.y*0.85)/2+(rnd()-0.5)*2,(s03.z+cm.z)/2+1.2,0.78,0.28,18,0.45);
      for(j=0;j<2;j++){var pj=lm3(0.55+j*0.25),tx=cm.x+(rnd()-0.5)*cm.rx,ty=cm.y+(rnd()-0.5)*cm.ry,tz=cm.z+(rnd()-0.3)*cm.rz;limb(pj.x,pj.y,pj.z,tx,ty,tz,(pj.x+tx)/2,(pj.y+ty)/2,(pj.z+tz)/2+0.6,0.3,0.12,8,0.6)}
    }
    for(i=0;i<mc.length;i++){
      foliage(mc[i],{k:0.72,hole:0.12,zmin:13.4,zlo:14,zspan:17,pick:function(lz,lv,inner){
        var rr=lz>25?1:(lz>20?0:2);if(rnd()<0.2)rr=(rnd()*NR)|0;
        if(!inner&&rnd()<0.74)return [mapleS[rr][lv][(rnd()*4)|0],1.28];
        return [blob[rr][lv],0.92]}});
    }
  }else if(season==='dong'){
    /* THÔNG TUYẾT: thân thẳng, nhiều tầng hình nón, mỗi tầng phủ tuyết */
    var Hp=34;trunk(Hp,1.55,0.3,0.5,0.12,0.1);
    var tiers=6;
    for(k=0;k<tiers;k++){
      var R=10.8-1.95*k,zt=11.4+3.9*k,cnt=Math.round(Math.PI*R*R*1.5*dens*(k===tiers-1?1.3:1));
      for(j=0;j<cnt;j++){
        var th=rnd()*TAU,rr=Math.sqrt(rnd())*R,fr=rr/R,lx=Math.cos(th)*rr,ly=Math.sin(th)*rr,lz=zt+(1-fr)*2.4+(rnd()-0.5)*0.8-(fr>0.85?1.2*(fr-0.85)/0.15:0);
        var snowP=0.32+0.5*(1-fr)*0.9+(rnd()<0.25?0.15:0),spr,rs=1.12;
        if(rnd()<snowP){spr=blob[1][4+((rnd()<0.6)?1:0)];rs=1.0}
        else{spr=needleS[clamp(Math.round(1+fr*2+rnd()*1.7-(k*0.12)),0,5)];rs=1.3}
        add(lx,ly,lz,rBase*rs*(0.85+rnd()*0.3),spr,1,0.45+(lz/36)*0.45+rnd()*0.2,0.4,4);
      }
    }
    add(0,0,Hp+0.6,rBase*1.0,blob[1][5],1,1.0,0.4,4);
  }else{
    /* CÂY DẠ QUANG: thân xoắn, cành khẳng khiu vươn ra, tán thưa, đèn lồng và dây sáng rủ xuống */
    var tp5=trunk(15,2.0,0.8,1.0,1.6,1.6,6.5);roots(6,4.4,0.85);
    var nb=7+((rnd()*2)|0),tips=[];
    for(i=0;i<nb;i++){
      var t05=0.3+rnd()*0.55,s05=tp5(t05),a5=i/nb*TAU+rnd()*0.7,d5=6.5+rnd()*5.5,ez5=17+rnd()*11,ex5=s05.x+Math.cos(a5)*d5,ey5=s05.y+Math.sin(a5)*d5;
      var lm5=limb(s05.x,s05.y,s05.z,ex5,ey5,ez5,(s05.x+ex5)/2+(rnd()-0.5)*5,(s05.y+ey5)/2+(rnd()-0.5)*5,(s05.z+ez5)/2+rnd()*4,1.0,0.3,24,0.4+t05*0.3);
      tips.push({x:ex5,y:ey5,z:ez5});
      for(j=0;j<2;j++){var p5=lm5(0.5+j*0.28),a6=a5+(rnd()-0.5)*1.8,d6=3+rnd()*3.5,e6={x:p5.x+Math.cos(a6)*d6,y:p5.y+Math.sin(a6)*d6,z:p5.z+1.5+rnd()*3};
        limb(p5.x,p5.y,p5.z,e6.x,e6.y,e6.z,(p5.x+e6.x)/2,(p5.y+e6.y)/2,(p5.z+e6.z)/2+1.2,0.42,0.14,10,0.6);tips.push(e6)}
    }
    for(i=0;i<tips.length;i++){
      var tc=tips[i];
      foliage({x:tc.x,y:tc.y,z:tc.z+0.6,rx:2.7+rnd()*0.9,ry:2.7+rnd()*0.9,rz:2.1},{k:0.6,zmin:8,zlo:12,zspan:20,pick:function(lz,lv,inner){
        var ro=rnd();
        if(!inner&&ro<0.2)return [lantern,1.55];
        if(!inner&&ro<0.27)return [crystal,0.95];
        return [blob[rnd()<0.5?0:1][lv],1]}});
      add(tc.x,tc.y,tc.z+0.3,rBase*1.35,lantern,1,0.9+rnd()*0.3,0.4,3);
    }
    for(i=0;i<(lowQ?6:14);i++){
      var e7=tips[(rnd()*tips.length)|0],vx=e7.x+(rnd()-0.5)*2.5,vy=e7.y+(rnd()-0.5)*2.5,m7=4+((rnd()*5)|0);
      for(k=0;k<m7;k++)add(vx+Math.sin(k*0.7)*0.25,vy,e7.z-1.4-0.95*k,rBase*0.5,(k%3===2)?crystal:lantern,1,1.0+rnd()*0.4,0.4,3);
    }
  }
  KEY=new Float32Array(VX.length);ORD=new Array(VX.length);RX=new Float32Array(VX.length);RY=new Float32Array(VX.length);
  STR=VX.length<8192?8192:65536;CB=new Float64Array(VX.length);
}
function cmp(a,b){return KEY[a]-KEY[b]}
/* VẼ: bệ + nền, rồi các sprite của cây theo thứ tự xa đến gần (nhìn từ dưới thì vẽ cây trước, bệ che lên sau) */
function paint(){
  if(!q)return;
  var cp=camParams(),gy=cp.gy,gz=cp.gz,dy=cp.dy,dz=cp.dz,c=Math.cos(yaw),s=Math.sin(yaw);
  var u=LAY.u+(LAY.uq-LAY.u)*qrProg,ox=LAY.ox,oy=LAY.oy+(LAY.oyq-LAY.oy)*qrProg,m=VX.length,i,o,cnt=0,zq=1-qrProg;
  ctx.setTransform(SSX,0,0,SSY,0,0);ctx.clearRect(0,0,CW,CH);
  ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='low';
  var fade=Math.min(1,te/0.35),below=dz<-0.02;
  /* bóng đổ mềm dưới bệ, cho cảm giác cây đứng trên mặt đất thật */
  if(!below&&gy>0.2){
    if(!SHW){SHW=newCv(128,128);var sg=SHW.getContext('2d'),rg=sg.createRadialGradient(64,64,0,64,64,64);rg.addColorStop(0,'rgba(0,0,0,.55)');rg.addColorStop(0.55,'rgba(0,0,0,.28)');rg.addColorStop(1,'rgba(0,0,0,0)');sg.fillStyle=rg;sg.fillRect(0,0,128,128)}
    var hh=q.n/2+1,sr=hh*1.62*u,sx=ox,sy=oy+PTH*gz*u+u*1.4;
    ctx.globalAlpha=0.7*(1-qrProg*0.6);ctx.drawImage(SHW,sx-sr,sy-sr*gy*0.92,sr*2,sr*2*gy*0.92);ctx.globalAlpha=1;
  }
  if(!below){
    pedestalSides(c,s,gy,gz,dy,u,ox,oy);
    drawGround(GT,(1-qrProg)*fade,c,s,gy,u,ox,oy);
    drawGround(GQ,qrProg,c,s,gy,u,ox,oy);
  }
  var hideLeaf=qrProg>0.82,spreadLeaf=1+qrProg*1.5,scaleLeaf=Math.max(0.1,1-qrProg*0.9);
  for(i=0;i<m;i++){
    if(te<ST[i])continue;
    var kd=KIND[i];
    if(hideLeaf)continue;
    var off=0;
    if(te<ST[i]+DU[i]){var p=(te-ST[i])/DU[i];off=FA[i]*Math.pow(1-p,3)}
    var px=VX[i],py=VY[i];
    if(kd===1&&qrProg>0.01){px*=spreadLeaf;py*=spreadLeaf}
    var rx=px*c-py*s,ry=px*s+py*c;
    RX[i]=rx;RY[i]=ry;
    CB[cnt++]=Math.round((dy*ry+(VZ0[i]*(kd===2?zq:1)+off)*dz+128)*512)*STR+i;
  }
  var SUB=CB.subarray(0,cnt);SUB.sort();
  ctx.imageSmoothingEnabled=false;
  for(i=0;i<cnt;i++){
    o=SUB[i]%STR;var off2=0,pop=1;
    if(te<ST[o]+DU[o]){var pp=(te-ST[o])/DU[o];off2=FA[o]*Math.pow(1-pp,3);pop=0.35+0.65*(1-Math.pow(1-pp,3))}
    var kd2=KIND[o],zk=kd2===2?zq:1,r=VW[o]*u*pop;
    if(kd2===1&&qrProg>0.01)r*=scaleLeaf;
    var x=ox+RX[o]*u,y=oy+(RY[o]*gy-(VZ0[o]*zk+off2)*gz)*u;
    ctx.drawImage(SPRC[VC[o]],x-r,y-r,2*r,2*r);
  }
  if(below){pedestalSides(c,s,gy,gz,dy,u,ox,oy);pedestalBottom(c,s,gy,gz,u,ox,oy)}
}

/* HIỆU ỨNG HẠT RƠI THEO MÙA (Cánh hoa đào, lá phong, bông tuyết, đom đóm) */
var FCOL={
  xuan:['#f8bbd0','#f48fb1','#ff80ab','#ffd1dc'],
  ha:['#fffbe0','#fff3b0','#ffe082'],
  thu:['#e65100','#f57c00','#d84315','#ff9800'],
  dong:['#ffffff','#f0f7ff','#e1f5fe'],
  den:['#ffd54f','#80deea','#e0e0e0']
};

function mkfx(){
  PT=[];var k=season,cnt=Math.round((k==='dong'?46:k==='den'?34:k==='ha'?24:32)*(lowQ?0.55:1)),i;
  for(i=0;i<cnt;i++){
    PT.push({x:Math.random()*CW,y:Math.random()*CH,a:Math.random()*TAU,s:0.6+Math.random()*0.8,r:Math.random(),t:i<18?1:0});
  }
  fxOn=!!fctx&&!calm();if(fctx&&!fxOn){fctx.setTransform(1,0,0,1,0,0);fctx.clearRect(0,0,FX.width,FX.height)}
}

function fxDraw(dt){
  if(!fctx||!fxOn)return;
  fctx.setTransform(SSX,0,0,SSY,0,0);fctx.clearRect(0,0,CW,CH);ftt+=dt;var k=season,i,p,c=FCOL[k]||FCOL.xuan;
  for(i=0;i<PT.length;i++){
    p=PT[i];
    if(k==='xuan'||k==='thu'){
      var th=k==='thu';
      p.y+=(th?58:42)*p.s*dt;p.x+=Math.sin(ftt*1.3+p.a)*22*dt*p.s+(th?9:5)*dt;p.a+=dt*(th?2.4:1.6);
      if(p.y>CH+12){p.y=-12;p.x=Math.random()*CW}if(p.x>CW+12)p.x=-12;
      fctx.globalAlpha=0.9;fctx.fillStyle=c[(p.r*c.length)|0];
      fctx.beginPath();fctx.ellipse(p.x,p.y,(th?5.5:4.2)*p.s,(th?3:2.4)*p.s,p.a,0,TAU);fctx.fill();
    }else if(k==='dong'){
      p.y+=(28+p.s*22)*dt;p.x+=Math.sin(ftt*0.9+p.a)*14*dt;
      if(p.y>CH+6){p.y=-6;p.x=Math.random()*CW}
      fctx.globalAlpha=0.6+0.35*p.r;fctx.fillStyle='#ffffff';
      fctx.beginPath();fctx.arc(p.x,p.y,1.3+p.s*1.4,0,TAU);fctx.fill();
    }else if(k==='ha'){
      p.y-=(9+p.s*8)*dt;p.x+=Math.sin(ftt*0.8+p.a)*12*dt+7*dt;
      if(p.y<-8){p.y=CH+8;p.x=Math.random()*CW}if(p.x>CW+8)p.x=-8;
      fctx.globalAlpha=0.5+0.4*Math.sin(ftt*1.4+p.a);fctx.fillStyle='#fffbe0';
      fctx.beginPath();fctx.arc(p.x,p.y,1.6+p.s*1.2,0,TAU);fctx.fill();
    }else{
      p.x+=Math.cos(ftt*0.7+p.a)*16*dt;p.y+=Math.sin(ftt*0.9+p.a*2)*11*dt;
      var al=0.45+0.55*Math.sin(ftt*2+p.a);
      fctx.globalAlpha=0.25*Math.max(0,al);fctx.fillStyle='#ffe078';
      fctx.beginPath();fctx.arc(p.x,p.y,7,0,TAU);fctx.fill();
      fctx.globalAlpha=Math.max(0,al);fctx.fillStyle='#fff3b0';
      fctx.beginPath();fctx.arc(p.x,p.y,2.0,0,TAU);fctx.fill();
    }
  }
  fctx.globalAlpha=1;
}

/* VÒNG LẶP ANIMATION MƯỢT MÀ TỐI ƯU HIỆU NĂNG */
function frame(t){
  raf=0;if(!ready||!vis||document.hidden)return;
  var dt=Math.min(0.05,Math.max(0,(t-lastT)/1000)||0);lastT=t;
  /* trang đang cuộn nhanh: tạm ngưng vẽ cây và hạt để dành khung hình cho việc cuộn, cuộn chậm lại thì chạy tiếp */
  if(window.__sfast&&window.__sfast()){acc=0;raf=requestAnimationFrame(frame);return}
  acc+=dt;
  if(spin)tyaw+=spin*Math.min(0.05,acc)*1.7;
  if(tilt)telev=Math.max(ELMIN,Math.min(ELMAX,telev+tilt*Math.min(0.05,acc)*1.2));
  var pDiff=Math.abs(tpitch-pitch),yDiff=Math.abs(tyaw-yaw),qDiff=Math.abs(tQrProg-qrProg),eDiff=Math.abs(telev-elev),fDiff=Math.abs(tfm-fm);
  var busy=anim||pDiff>=0.002||yDiff>=0.001||qDiff>=0.002||eDiff>=0.002||fDiff>=0.002||spin!==0||tilt!==0;
  /* đứng yên chỉ còn hạt rơi: ~30 khung/giây (máy yếu ~22); đang chuyển động: máy yếu giới hạn ~30 khung/giây */
  if(acc<(busy?(lowQ?0.032:0):(lowQ?0.045:0.03))){raf=requestAnimationFrame(frame);return}
  if(busy&&!lowQ){fN++;fEma=fN>1?fEma*0.85+(t-prevT)*0.15:0}
  prevT=t;
  var d=acc,dirty=false;acc=0;
  if(anim){te+=d*ASP;if(te>=TOT+0.05){te=1e9;anim=false}dirty=true}
  if(pDiff>0.002){pitch+=(tpitch-pitch)*Math.min(1,d*9);dirty=true}else if(pitch!==tpitch){pitch=tpitch;dirty=true}
  if(yDiff>0.001){yaw+=(tyaw-yaw)*Math.min(1,d*8);dirty=true}else if(yaw!==tyaw){yaw=tyaw;dirty=true}
  if(qDiff>0.002){qrProg+=(tQrProg-qrProg)*Math.min(1,d*8.5);dirty=true}else if(qrProg!==tQrProg){qrProg=tQrProg;dirty=true}
  if(eDiff>0.002){elev+=(telev-elev)*Math.min(1,d*9);dirty=true}else if(elev!==telev){elev=telev;dirty=true}
  if(fDiff>0.002){fm+=(tfm-fm)*Math.min(1,d*7);dirty=true}else if(fm!==tfm){fm=tfm;dirty=true}
  if(spin||tilt)dirty=true;

  if(dirty){
    var t0=performance.now();paint();var cost=performance.now()-t0;
    if(!lowQ){
      pEma=pN?pEma*0.85+cost*0.15:cost;pN++;
      /* vẽ một khung mất >12 ms, hoặc khung hình đang chuyển động chậm hơn ~25 fps: hạ chất lượng một lần rồi dựng lại cảnh */
      if((pN>12&&pEma>12)||(fN>20&&fEma>40)){lowQ=true;hiQ=false;pN=0;fN=0;applySS();scene();mkfx();paint()}
         else if(hiQ&&pN>12&&pEma>9){hiQ=false;noUp=true;pN=0;scene();mkfx();paint()}
    }
  }
  if(fxOn)fxDraw(d);
  if(anim||fxOn||pDiff>0.002||yDiff>0.001||qDiff>0.002||eDiff>0.002||fDiff>0.002||spin||tilt)raf=requestAnimationFrame(frame);
}
function kick(){if(!ready||!vis)return;lastT=performance.now();if(!raf)raf=requestAnimationFrame(frame)}
function play(fast){if(calm()){anim=false;te=1e9;return}te=0;ASP=fast?1.8:1;anim=true}

/* 2 GÓC NHÌN: cây 3D nhìn chéo 45° và mã QR nhìn thẳng từ trên xuống 90°. Đã bỏ xoay tự do, xoay 4 góc, kéo/vuốt để xoay. */
var b45=document.getElementById('qrv45'),b90=document.getElementById('qrv90');
function updateUI(){
  if(b45)b45.setAttribute('aria-pressed',isQRMode?'false':'true');
  if(b90)b90.setAttribute('aria-pressed',isQRMode?'true':'false');
  if(hint)hint.textContent=isQRMode?(R.lang==='en'?'Tap again for the 45° 3D tree':'Chạm lại để xem cây 3D nhìn chéo 45°'):(R.lang==='en'?'Tap the tree to see the QR code from above':'Chạm vào cây để xem mã QR từ trên xuống');
}
/* CHUYỂN 45° ↔ 90° MƯỢT: trước đây tween bằng cách vẽ lại cả nghìn khối lá mỗi khung hình nên tụt FPS.
   Giờ: khung cây mờ đi + thu nhỏ nhẹ (CSS, chạy trên GPU) → vẽ trạng thái mới đúng 1 lần → hiện lại. */
var swT=0;
function snapState(on){qrProg=tQrProg=on?1:0;pitch=tpitch=on?0:TREE_PITCH;yaw=tyaw=on?0:TREE_YAW}
function setQR(on){
  if(on!==isQRMode){
    isQRMode=on;
    if(calm()||!ready){snapState(on);paint();kick()}
    else{
      clearTimeout(swT);cv.classList.add('qsw');
      swT=setTimeout(function(){
        snapState(isQRMode);if(anim){anim=false;te=1e9}paint();
        requestAnimationFrame(function(){cv.classList.remove('qsw')});
      },170);
    }
  }
  updateUI();
}
function toggleQRMode(){setQR(!isQRMode)}

new MutationObserver(function(){updateUI()}).observe(R,{attributes:true,attributeFilter:['lang']});
if(b45)b45.addEventListener('click',function(){start();setQR(false)});
if(b90)b90.addEventListener('click',function(){start();setQR(true)});
document.getElementById('qrre').addEventListener('click',function(){start();play(false);kick()});

/* chạm/bấm vào cây (hoặc Enter/Space khi đang chọn cây) để đổi qua lại 45° và 90° */
cv.addEventListener('click',function(){start();toggleQRMode()});
cv.addEventListener('keydown',function(e){
  if(e.key===' '||e.key==='Enter'){e.preventDefault();start();toggleQRMode()}
});

function def(){return 'https://ming-dev.id.vn/'}
function render(fast){
  text=inp.value.trim()||def();var e=qrEncode(text);
  if(!e){say(L('Nội dung dài quá, hãy rút gọn bớt.','Too long, please shorten it.'));return}
  q=e;applySS();scene();
  if(!tierDone){tierDone=true;if(!lowQ&&(navigator.hardwareConcurrency||4)>=6){var tsv=te;te=1e9;var t1=performance.now();paint();var pc=performance.now()-t1;te=tsv;if(pc<6){hiQ=true;scene()}}}
  mkfx();play(fast);paint();kick();updateUI();
}
function start(){
  if(ready)return;ready=true;if(!inp.value)inp.value=def();
  render(false);
}
/* đổi cỡ khung, xoay màn hình, zoom: đặt lại độ phân giải rồi vẽ lại */
var rzT=0;function onResize(){clearTimeout(rzT);rzT=setTimeout(function(){if(applySS()&&q){paint()}},120)}
if(window.ResizeObserver)new ResizeObserver(onResize).observe(cv);window.addEventListener('resize',onResize);
inp.addEventListener('input',function(){clearTimeout(tm);tm=setTimeout(function(){render(true)},220)});
document.getElementById('qse').addEventListener('click',function(e){
  var b=e.target.closest('button[data-s]');if(!b)return;
  season=b.getAttribute('data-s');if(STG)STG.setAttribute('data-season',season);
  this.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});
  if(ready){scene();mkfx();play(true);paint();kick()}
});
document.getElementById('qrdl').addEventListener('click',function(){
  start();if(!q)return;
  var P=1024,o=document.createElement('canvas');o.width=o.height=P;plain(o.getContext('2d'),P);
  o.toBlob(function(b){if(!b)return;var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='ma-qr-ming.png';document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(a.href)},4000);say(L('Đã tải ảnh PNG (mã QR phẳng).','PNG downloaded (plain QR).'))},'image/png');
});
document.getElementById('qrcp').addEventListener('click',function(){
  var t=inp.value.trim()||def(),ok=function(){say(L('Đã sao chép liên kết.','Link copied.'))};
  function fb(){try{inp.select();document.execCommand('copy');ok()}catch(e){}}
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).then(ok,fb);else fb();
});
document.addEventListener('visibilitychange',function(){if(!document.hidden)kick()});
if('IntersectionObserver' in window){new IntersectionObserver(function(es){vis=es.some(function(x){return x.isIntersecting});if(vis){start();kick()}},{rootMargin:'300px 0px'}).observe(document.getElementById('qr'))}else{vis=true;start()}
})();
}catch(e){console.error('[#qr-tree-js]',e)}

/* ===================== [#dev-js] ===================== */
try{
/* GÓC DEV: terminal gõ lệnh (khung ming@home), bảng phím tắt (phím ?), biểu đồ đóng góp GitHub,
   số liệu của chính file index.html, thanh trạng thái kiểu VS Code ở cuối trang.
   Nhẹ: không có vòng animation; số dòng chỉ lấy khi cuộn tới cuối trang; đồng hồ thanh trạng thái cập nhật mỗi phút. */
(function(){
var R=document.documentElement,$=function(i){return document.getElementById(i)};
function en(){return R.lang==='en'}
function L(vi,e){return en()?e:vi}
function calm(){return R.getAttribute('data-motion')==='off'||matchMedia('(prefers-reduced-motion: reduce)').matches}
function el(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e}
function fmtN(n){return Number(n||0).toLocaleString(en()?'en-US':'vi-VN')}
function fmtKB(b){return b>=1048576?(b/1048576).toFixed(2)+' MB':Math.max(1,Math.round(b/1024))+' KB'}
function pad(n){return String(n).padStart(2,'0')}
var GH_USER='nameisminh';

/* ===== SỐ LIỆU FILE index.html (view-source) ===== */
var SRC={};
function readNav(){
  var nav=(performance.getEntriesByType&&performance.getEntriesByType('navigation')[0])||{};
  SRC.raw=nav.decodedBodySize||SRC.raw||0;SRC.gz=nav.encodedBodySize||0;
  SRC.dcl=Math.round(nav.domContentLoadedEventEnd||0);SRC.load=Math.round(nav.loadEventEnd||0);
  SRC.dom=document.getElementsByTagName('*').length;SRC.js=document.scripts.length;
  SRC.css=document.querySelectorAll('style,link[rel="stylesheet"]').length;
  SRC.req=((performance.getEntriesByType&&performance.getEntriesByType('resource'))||[]).length;
}
var linesBusy=false;
function loadLines(cb){
  if(SRC.lines){cb();return}
  try{var c=+sessionStorage.getItem('srcl');if(c){SRC.lines=c;cb();return}}catch(e){}
  if(linesBusy||!/^https?:$/.test(location.protocol)||!window.fetch){cb();return}
  linesBusy=true;
  /* lấy lại chính trang này (thường có sẵn trong bộ nhớ đệm) để đếm số dòng, chỉ một lần mỗi phiên */
  fetch(location.pathname,{cache:'force-cache'}).then(function(r){return r.text()}).then(function(t){
    SRC.lines=t.split('\n').length;if(!SRC.raw)SRC.raw=t.length;
    try{sessionStorage.setItem('srcl',String(SRC.lines))}catch(e){}cb();
  }).catch(cb);
}
/* ===== BẢNG PHÍM TẮT (phím ?) ===== */
var MAC=/Mac|iPhone|iPad/.test(navigator.platform||'');
var KEYS=[
  [['?'],'Mở bảng phím tắt này','Open this shortcut list'],
  [['T'],'Đổi giao diện sáng hoặc tối','Switch light or dark theme'],
  [['M'],'Tắt hoặc bật hiệu ứng','Turn effects off or on'],
  [['C'],'Đổi màu trang','Change page colour'],
  [['H'],'Lên đầu trang','Back to the top'],
  [['G'],'Ẩn hoặc hiện GIF','Hide or show GIFs'],
  [['/'],'Tìm nhanh trong trang','Quick search'],
  [[MAC?'⌘':'Ctrl','K'],'Tìm nhanh trong trang','Quick search'],
  [['R'],'Một điều ngẫu nhiên về trang','A random fact about the page'],
  [['P'],'Bật hoặc tắt nhạc','Music on or off'],
  [['F'],'Hiện hoặc ẩn FPS','Show or hide FPS'],
  [['Esc'],'Đóng hộp đang mở','Close the open dialog'],
  [['↑','↓'],'Lịch sử lệnh trong terminal','Command history in the terminal'],
  [['Tab'],'Gợi ý lệnh trong terminal','Complete a command in the terminal']
];
var dlg=$('kbdlg');
function renderKbd(){
  if(!dlg)return;dlg.textContent='';
  var b=el('div','kbbox'),hd=el('div','kbhd'),h=el('h3',null,L('Phím tắt','Keyboard shortcuts')),x=el('button','kbx','×');
  h.id='kbdt';x.type='button';x.setAttribute('aria-label',L('Đóng','Close'));x.addEventListener('click',closeKbd);
  hd.appendChild(h);hd.appendChild(x);b.appendChild(hd);
  var ul=el('ul');
  KEYS.forEach(function(k){var li=el('li'),kk=el('span','kbk');k[0].forEach(function(c){kk.appendChild(el('kbd',null,c))});li.appendChild(kk);li.appendChild(el('span',null,en()?k[2]:k[1]));ul.appendChild(li)});
  b.appendChild(ul);b.appendChild(el('p','mini',L('Phím tắt không chạy khi bạn đang gõ trong ô nhập. Esc để đóng.','Shortcuts are off while you type in a text box. Press Esc to close.')));
  dlg.appendChild(b);
}
function openKbd(){if(!dlg||dlg.open)return;renderKbd();if(dlg.showModal)dlg.showModal();else dlg.setAttribute('open','');var x=dlg.querySelector('.kbx');if(x)x.focus()}
function closeKbd(){if(!dlg)return;if(dlg.close)dlg.close();else dlg.removeAttribute('open')}
if(dlg)dlg.addEventListener('click',function(e){if(e.target===dlg)closeKbd()});
document.addEventListener('keydown',function(e){
  if(e.key!=='?'||e.ctrlKey||e.metaKey||e.altKey)return;
  var t=e.target;if(t&&(t.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)))return;
  e.preventDefault();if(dlg&&dlg.open)closeKbd();else openKbd();
});

/* ===== TERMINAL GÕ LỆNH ===== */
var tout=$('tout'),tin=$('tin'),tcmd=$('tcmd'),hist=[],hi=0,T0=performance.now();
var SEC={about:'intro',intro:'intro',home:'hero',hero:'hero',clock:'hero',links:'links',live:'live',discord:'live',now:'now',play:'play',games:'play',mod:'mod',hobby:'hobby',idol:'idol',artists:'idol',playlist:'playlist',music:'playlist',stats:'stats',facts:'facts',qr:'qr',lab:'lab',photos:'photos',log:'log',shelf:'shelf',setup:'shelf',backlog:'shelf',tkb:'tkb',faq:'faq',contact:'contact',map:'map'};
function line(cls){var d=el('div',cls);tout.appendChild(d);while(tout.childNodes.length>150)tout.removeChild(tout.firstChild);return d}
function out(t,cls){var d=line(cls);d.textContent=t;return d}
function link(label,href,before,after){
  var d=line();if(before)d.appendChild(document.createTextNode(before));
  var a=el('a',null,label);a.href=href;if(/^https?:/.test(href)){a.target='_blank';a.rel='noopener'}
  d.appendChild(a);if(after)d.appendChild(document.createTextNode(after));return d;
}
function padR(s,n){s=String(s);while(s.length<n)s+=' ';return s}
function go(id){
  if(!$(id))return false;
  var a=document.createElement('a');a.href='#'+id;a.style.display='none';document.body.appendChild(a);a.click();a.remove();return true;
}
function upTime(){var s=Math.round((performance.now()-T0)/1000),m=Math.floor(s/60);return m?m+' '+L('phút','min')+' '+(s%60)+' '+L('giây','s'):s+' '+L('giây','s')}
function nowInfo(){
  var ks=document.querySelectorAll('#intro .panel pre .k');
  if(!ks.length){out(L('now.txt trống.','now.txt is empty.'),'dim');return}
  ks.forEach(function(k){var v=k.nextElementSibling;out(padR(k.textContent.trim(),12)+' '+(v?v.textContent.trim():''))});
}
var CMDS={
  help:function(){
    [['help',L('danh sách lệnh','list commands')],['whoami',L('tôi là ai','who I am')],['now',L('dạo này tôi làm gì','what I am up to')],
     ['ls',L('các mục trong trang','sections of the page')],['cd <'+L('mục','section')+'>',L('nhảy tới một mục, vd: cd qr','jump to a section, e.g. cd qr')],
     ['projects',L('vài thứ tôi đã làm','things I have made')],['socials',L('tìm tôi ở đâu','where to find me')],
     ['neofetch',L('thông tin trang và máy bạn','page and device info')],
     ['theme [light|dark]',L('đổi giao diện','switch theme')],['fx [on|off]',L('bật/tắt hiệu ứng','effects on/off')],
     ['lang [vi|en]',L('đổi ngôn ngữ','switch language')],['music',L('bật/tắt nhạc','music on/off')],['date',L('ngày giờ hiện tại','current date and time')],
     ['404',L('thử trang 404 (lạc đường)','try the 404 page')],['reset',L('xoá bản lưu cũ, tải bản mới nhất','clear old cache, load the latest')],['echo <'+L('chữ','text')+'>',L('in lại chữ','print text')],['history',L('các lệnh đã gõ','typed commands')],['clear',L('xoá màn hình','clear the screen')],
     ['?',L('bảng phím tắt','keyboard shortcuts')]
    ].forEach(function(r){var d=line();d.appendChild(el('b','ok',padR(r[0],20)));d.appendChild(document.createTextNode(r[1]))});
  },
  whoami:function(){out('ming · '+L('game thủ kiêm dịch giả, dev tay ngang, đang đi thực tập','gamer and translator, self-taught dev, currently an intern'))},
  now:nowInfo,
  pwd:function(){out('/home/ming')},
  /* làm mới: xoá bản lưu cũ trên máy (service worker + cache), giữ cài đặt, rồi mở bản mới nhất */
  reset:function(){out(L('→ đang làm mới trang…','→ refreshing the page…'),'dim');setTimeout(function(){location.href='/reset'},300)},
  /* thử trang 404: mở một địa chỉ ngẫu nhiên không tồn tại */
  lost:function(){var p='/khong-co-trang-nay-'+Math.random().toString(36).slice(2,7);out('cd '+p+' …','dim');setTimeout(function(){location.href=p},350)},
  ls:function(){
    var seen={},ids=[];Object.keys(SEC).forEach(function(k){var v=SEC[k];if(!seen[v]&&$(v)){seen[v]=1;ids.push(v+'/')}});
    out(ids.join('  '));out(L('gõ cd <tên> để tới, vd: cd lab','type cd <name> to go there, e.g. cd lab'),'dim');
  },
  cd:function(a){
    var k=(a[0]||'').toLowerCase().replace(/^[~.\/#]+/,'').replace(/\/$/,'');
    if(!k||k==='~'){go('hero');out(L('→ về đầu trang','→ back to the top'),'dim');return}
    var id=SEC[k]||k;
    if(go(id))out('→ #'+id,'dim');else out('cd: '+k+': '+L('không có mục này · gõ ls','no such section · type ls'),'er');
  },
  projects:function(){
    link('mod-viet-hoa/','#mod','',L('   Việt hoá Minecraft, Stardew Valley','   Vietnamese translations for Minecraft, Stardew Valley'));
    link('qr-tree/','#qr','',L('   mã QR thành cây 3D theo mùa','   QR code grown into a seasonal 3D tree'));
    link('lab/','#lab','',L('   test bàn phím, chuột, gõ chữ, phản xạ','   keyboard, mouse, typing and reaction tests'));
  },
  socials:function(){
    link('github.com/'+GH_USER,'https://github.com/'+GH_USER,'GitHub    ');
    out('Discord   ming0811_');
    link('steamcommunity.com/…','https://steamcommunity.com/profiles/76561199474355109/','Steam     ');
    out('LoL       ming#0811 (VN)');
  },
  neofetch:function(){
    var ua=navigator.userAgent,br=/Edg\//.test(ua)?'Edge':/OPR\//.test(ua)?'Opera':/Firefox\//.test(ua)?'Firefox':/Chrome\//.test(ua)?'Chrome':/Safari\//.test(ua)?'Safari':'?',
        os=/Windows/.test(ua)?'Windows':/Android/.test(ua)?'Android':/iPhone|iPad/.test(ua)?'iOS':/Mac OS/.test(ua)?'macOS':/Linux/.test(ua)?'Linux':'?';
    readNav();
    var info=[['',"ming@"+(location.host||'home')],['','-----------------'],['OS',os],['Browser',br],['Shell','ming-sh 1.0'],
      [L('Màn hình','Screen'),screen.width+'x'+screen.height+' @'+(window.devicePixelRatio||1)+'x'],
      [L('Giao diện','Theme'),R.getAttribute('data-theme')==='light'?L('Sáng','Light'):L('Tối','Dark')],
      [L('Ngôn ngữ','Language'),en()?'English':'Tiếng Việt'],[L('Hiệu ứng','Effects'),calm()?L('tắt','off'):L('bật','on')],
      ['Uptime',upTime()],['index.html',(SRC.raw?fmtKB(SRC.raw):'?')+(SRC.lines?' · '+fmtN(SRC.lines)+' '+L('dòng','lines'):'')]];
    var art=['  __  __ ',' |  \\/  |',' | |\\/| |',' | |  | |',' |_|  |_|','         '];
    info.forEach(function(r,i){var d=line();d.appendChild(el('b','ok',padR(art[i]||'',11)));if(r[0]){d.appendChild(el('b','ok',r[0]+': '))}d.appendChild(document.createTextNode(r[1]))});
  },
  theme:function(a){
    var cur=R.getAttribute('data-theme')==='light'?'light':'dark',want=(a[0]||'').toLowerCase();
    if(want!=='light'&&want!=='dark')want=cur==='light'?'dark':'light';
    if(want!==cur){var b=$('theme');if(b)b.click()}
    out('theme = '+want,'ok');
  },
  fx:function(a){
    var cur=R.getAttribute('data-motion')==='off'?'off':'on',want=(a[0]||'').toLowerCase();
    if(want!=='on'&&want!=='off')want=cur==='on'?'off':'on';
    if(want!==cur){var b=$('motion');if(b)b.click()}
    out('fx = '+want,'ok');
  },
  lang:function(a){
    var cur=en()?'en':'vi',want=(a[0]||'').toLowerCase();
    if(want!=='vi'&&want!=='en')want=cur==='vi'?'en':'vi';
    if(want!==cur){var b=$('lang');if(b)b.click()}
    out('lang = '+want,'ok');
  },
  music:function(){var b=$('bgmtop');if(b){b.click();out(L('♪ đã bấm nút nhạc','♪ toggled the music'),'ok')}else out(L('không tìm thấy trình phát nhạc','music player not found'),'er')},
  date:function(){out(new Date().toLocaleString(en()?'en-GB':'vi-VN'))},
  uptime:function(){out('up '+upTime())},
  echo:function(a){out(a.join(' '))},
  history:function(){hist.forEach(function(c,i){out(padR(i+1,4)+c)})},
  clear:function(){tout.textContent=''},
  kbd:function(){openKbd();out(L('đã mở bảng phím tắt','opened the shortcut list'),'dim')},
  cat:function(a){var f=(a[0]||'').toLowerCase();if(f==='now.txt'||f==='now')nowInfo();else out('cat: '+(a[0]||'')+': '+L('không có file này','no such file'),'er')},
  sudo:function(){out(L('ming không có trong danh sách sudoers. Sự cố này sẽ được báo cáo. 😄','ming is not in the sudoers file. This incident will be reported. 😄'),'er')},
  rm:function(a){out(/-\w*r/.test(a.join(' '))?L('Đừng mà, cả trang chỉ có đúng một file thôi.','Please don’t, the whole site is a single file.'):'rm: '+L('thiếu tên file','missing file name'),'er')},
  exit:function(){out(L('Không có lối ra đâu, ở lại chơi thêm chút nhé.','There is no exit. Stay a little longer.'))},
  vim:function(){out(L('Vào được vim rồi thì ra kiểu gì? Thôi để dịp khác.','Getting into vim is easy, getting out is not. Maybe next time.'))}
};
var ALIAS={'404':'lost',cls:'clear',open:'cd',goto:'cd','?':'kbd',shortcuts:'kbd',keys:'kbd',ll:'ls',dir:'ls',nano:'vim',vi:'vim',emacs:'vim',quit:'exit',logout:'exit',about:'whoami',time:'date',fetch:'neofetch',links:'socials',contact:'socials'};
function run(raw){
  var s=raw.trim(),e=line('ec');e.appendChild(el('b',null,'$ '));e.appendChild(document.createTextNode(s));
  if(s){
    hist.push(s);if(hist.length>50)hist.shift();
    var parts=s.split(/\s+/),c=parts[0].toLowerCase(),a=parts.slice(1);
    var f=c&&CMDS[ALIAS[c]||c];
    if(f)f(a);else if(c)out(L('không tìm thấy lệnh: ','command not found: ')+c+L(' · gõ help',' · type help'),'er');
  }
  hi=hist.length;tout.scrollTop=tout.scrollHeight;
}
var NAMES=Object.keys(CMDS).filter(function(k){return k!=='kbd'}).concat(['shortcuts']).sort();
if(tin&&tcmd&&tout){
  tin.addEventListener('submit',function(e){e.preventDefault();run(tcmd.value);tcmd.value=''});
  tcmd.addEventListener('keydown',function(e){
    if(e.key==='ArrowUp'){if(!hist.length)return;e.preventDefault();hi=Math.max(0,hi-1);tcmd.value=hist[hi]||''}
    else if(e.key==='ArrowDown'){if(!hist.length)return;e.preventDefault();hi=Math.min(hist.length,hi+1);tcmd.value=hist[hi]||''}
    else if(e.key==='Tab'){
      var v=tcmd.value.toLowerCase();if(!v)return;
      var m=NAMES.filter(function(n){return n.indexOf(v)===0});
      if(!m.length)return;e.preventDefault();
      if(m.length===1)tcmd.value=m[0]+' ';else{var d=line('dim');d.textContent=m.join('  ');tout.scrollTop=tout.scrollHeight}
    }
    else if(e.key==='l'&&e.ctrlKey){e.preventDefault();CMDS.clear()}
  });
  /* bấm vào khung terminal là gõ được ngay */
  var tio=$('tio');if(tio)tio.addEventListener('click',function(e){if(!e.target.closest('a')&&window.getSelection&&!String(window.getSelection()))tcmd.focus({preventScroll:true})});
}

/* ===== THANH TRẠNG THÁI (cuối trang) ===== */
var SB=$('sbar');
function sbBtn(txt,title,fn,cls){var b=el('button',cls,txt);b.type='button';b.title=title;b.addEventListener('click',fn);return b}
function renderSB(){
  if(!SB)return;SB.textContent='';var d=new Date(),light=R.getAttribute('data-theme')==='light',on=navigator.onLine!==false;
  SB.appendChild(el('span','br','⎇ main'));
  SB.appendChild(el('span','hm','index.html'));
  SB.appendChild(el('span','hm',SRC.lines?fmtN(SRC.lines)+' '+L('dòng','lines'):(SRC.raw?fmtKB(SRC.raw):'HTML')));
  SB.appendChild(el('span','hm','UTF-8'));
  SB.appendChild(el('span',on?'on':'off',on?'online':'offline'));
  SB.appendChild(el('span','sp'));
  SB.appendChild(sbBtn(light?L('☀ Sáng','☀ Light'):L('☾ Tối','☾ Dark'),L('Đổi giao diện (T)','Switch theme (T)'),function(){var b=$('theme');if(b)b.click()}));
  SB.appendChild(sbBtn(calm()?L('Hiệu ứng: tắt','Effects: off'):L('Hiệu ứng: bật','Effects: on'),L('Tắt/bật hiệu ứng (M)','Effects off/on (M)'),function(){var b=$('motion');if(b)b.click()},'hm'));
  SB.appendChild(sbBtn(en()?'EN':'VI',L('Đổi ngôn ngữ','Switch language'),function(){var b=$('lang');if(b)b.click()}));
  SB.appendChild(el('span',null,pad(d.getHours())+':'+pad(d.getMinutes())));
  SB.appendChild(sbBtn('? '+L('Phím tắt','Shortcuts'),L('Bảng phím tắt (?)','Shortcut list (?)'),openKbd));
}
var sbT=0;function sbTick(){renderSB();clearTimeout(sbT);sbT=setTimeout(sbTick,60000-Date.now()%60000+50)}
if(SB){
  sbTick();
  new MutationObserver(renderSB).observe(R,{attributes:true,attributeFilter:['data-theme','data-motion','lang']});
  addEventListener('online',renderSB);addEventListener('offline',renderSB);
  document.addEventListener('visibilitychange',function(){if(!document.hidden)sbTick()});
}

/* ===== KHỞI ĐỘNG ===== */
/* thanh trạng thái cuối trang cũng cần số dòng: lấy khi cuộn tới cuối trang */
var ft=document.querySelector('footer');
/* chữ "Ming" lớn cuối trang hiện ra khi phần đáy footer vào màn hình */
if(ft){if('IntersectionObserver' in window){var io3=new IntersectionObserver(function(es){if(es.some(function(x){return x.isIntersecting})){io3.disconnect();ft.classList.add('fin')}},{threshold:0});var fe=document.createElement('i');fe.setAttribute('aria-hidden','true');fe.style.cssText='display:block;height:1px';ft.appendChild(fe);io3.observe(fe)}else ft.classList.add('fin')}
if(ft&&'IntersectionObserver' in window){var io2=new IntersectionObserver(function(es){if(es.some(function(x){return x.isIntersecting})){io2.disconnect();loadLines(renderSB)}},{rootMargin:'200px 0px'});io2.observe(ft)}
document.addEventListener('langchange',function(){renderSB();if(dlg&&dlg.open)renderKbd()});
/* ===== KỆ CỦA TÔI: kệ game (backlog) + setup =====
   BACKLOG: s = 'playing' (đang chơi) | 'done' (phá đảo) | 'dropped' (bỏ dở) | 'want' (muốn chơi); p = nền tảng; n = [nhận xét tiếng Việt, tiếng Anh].
   SETUP: [tên mục tiếng Việt, tiếng Anh, giá trị]. Chữ để trong [ngoặc vuông] là mẫu: tự ẩn, điền thật vào là tự hiện. */
var BACKLOG=[
  {t:'League of Legends',s:'playing',p:'PC',n:['Chơi hơn 11 năm, vẫn vào mỗi ngày.','Over 11 years in and still playing daily.']},
  {t:'Delta Force',s:'playing',p:'PC',n:['Nhịp nhanh, chơi cho vui.','Fast-paced, played for fun.']},
  {t:'Path of Exile 2',s:'playing',p:'PC',n:['Đang build nhân vật.','Working on a build.']},
  {t:'ELDEN RING',s:'playing',p:'PC',n:['','']},
  {t:'Minecraft',s:'playing',p:'PC',n:['Vừa chơi vừa Việt hoá mod.','Playing while translating mods.']},
  {t:'Stardew Valley',s:'playing',p:'PC',n:['Vừa chơi vừa Việt hoá mod.','Playing while translating mods.']},
  {t:'[Tên game đã phá đảo]',s:'done',p:'PC',n:['','']},
  {t:'[Tên game bỏ dở]',s:'dropped',p:'PC',n:['','']},
  {t:'[Tên game muốn chơi]',s:'want',p:'PC',n:['','']}
];
/* SETUP: g = nhóm ('desk' trên bàn, 'pc' trong case), k = icon, l = [tên mục tiếng Việt, tiếng Anh], v = món đồ,
   d = [ghi chú ngắn VI, EN] (tuỳ chọn), img = ảnh chụp thật của bạn (tuỳ chọn, vd 'images/setup/ban-phim.jpg'; ảnh lỗi thì tự về icon) */
var SETUP=[
  {g:'desk',k:'monitor',l:['Màn hình','Monitor'],v:'AOC 27G15N',d:['27 inch, 180Hz','27", 180Hz'],img:'https://cdn.sanity.io/images/hf5b3axp/production/ccab6edea8f77e3dd04af545fce38e4123b72d5e-2000x1500.png?w=600&fit=max&auto=format'},
  {g:'desk',k:'keyboard',l:['Bàn phím','Keyboard'],v:'AULA F108 Pro',d:['Bàn phím cơ full-size','Full-size mechanical'],img:'https://aulagear.com/cdn/shop/files/IMG_9914.png?v=1742354696&width=600'},
  {g:'desk',k:'mouse',l:['Chuột','Mouse'],v:'Inphic B1 Silent',d:['Nút bấm không tiếng','Silent clicks'],img:'https://www.inphic.com/cdn/shop/files/inphic-B1-wired-mouse-white_29835948-5194-4b22-9d63-616885ad30a0.png?v=1736306592&width=600'},
  {g:'desk',k:'pad',l:['Lót chuột','Mouse pad'],v:'90 × 40 cm',d:['Phủ gần hết mặt bàn','Covers most of the desk'],img:'images/setup/mousepad.jpg',fill:true},
  {g:'desk',k:'headset',l:['Tai nghe','Headset'],v:'JRS M1',d:['LED RGB, âm thanh 7.1','RGB LED, 7.1 sound'],img:'images/setup/headset.jpg'},
  {g:'desk',k:'chair',l:['Ghế','Chair'],v:'Mia Furniture MI01',d:['Công thái học, màu đen','Ergonomic, black'],img:'images/setup/chair.jpg'},
  {g:'desk',k:'desk',l:['Bàn','Desk'],v:['Bàn gỗ','Wooden desk'],d:['','']},
  {g:'pc',k:'cpu',l:['CPU','CPU'],v:'Intel Core i5-12400F',d:['6 nhân, 12 luồng','6 cores, 12 threads'],img:'https://intelcorp.scene7.com/is/image/intelcorp/km-1920x1080-i5:1080-1080?fmt=png8-alpha&wid=600'},
  {g:'pc',k:'gpu',l:['Card đồ hoạ','Graphics card'],v:'ZOTAC RTX 3060',d:['Twin Edge, 12GB','Twin Edge, 12GB'],img:'https://c1.neweggimages.com/ProductImage/14-500-509-V08.jpg'},
  {g:'pc',k:'board',l:['Bo mạch chủ','Motherboard'],v:'ASUS TUF Gaming B760-Plus WiFi D4',d:['Có WiFi, dùng RAM DDR4','WiFi, DDR4'],img:'https://dlcdnwebimgs.asus.com/gain/7863d737-c623-4cbc-8f67-f492f6e26ad1/w600'},
  {g:'pc',k:'ram',l:['RAM','RAM'],v:'G.Skill Trident Z RGB',d:['DDR4 3600MHz','DDR4 3600MHz'],img:'images/setup/ram.jpg'},
  {g:'pc',k:'psu',l:['Nguồn','Power supply'],v:'MSI MAG A750GL PCIE5',d:['750W','750W'],img:'images/setup/psu.jpg'}
];
var SGRP={desk:['Trên bàn','On the desk'],pc:['Trong case','Inside the case']};
var SUI={
  monitor:'<rect x="2.5" y="4" width="19" height="12.5" rx="1.8"/><path d="M9 20.5h6M12 16.5v4"/>',
  keyboard:'<rect x="2" y="6.5" width="20" height="11" rx="2.2"/><path d="M5.5 10h.01M8.5 10h.01M11.5 10h.01M14.5 10h.01M17.5 10h.01M5.5 13h.01M18.5 13h.01M8 14h8"/>',
  mouse:'<rect x="6.5" y="3" width="11" height="18" rx="5.5"/><path d="M12 3v7M6.5 10h11"/>',
  pad:'<rect x="2" y="6" width="20" height="12" rx="2.5"/><rect x="13" y="8.5" width="4.5" height="7" rx="2.25"/>',
  headset:'<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
  chair:'<path d="M8 3h8a1.5 1.5 0 0 1 1.5 1.5V11h-11V4.5A1.5 1.5 0 0 1 8 3zM5 11h14v2.5H5zM12 13.5V18M7 21l5-3 5 3"/>',
  desk:'<path d="M2.5 8h19v2.5h-19zM4.5 10.5V20M19.5 10.5V20M13.5 10.5v5h6"/>',
  cpu:'<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/>',
  gpu:'<rect x="2.5" y="6.5" width="19" height="10.5" rx="2"/><circle cx="8.5" cy="11.75" r="2.7"/><circle cx="15.5" cy="11.75" r="2.7"/><path d="M5 17v2.5M8.5 17v2.5M12 17v2.5"/>',
  board:'<rect x="3.5" y="3.5" width="17" height="17" rx="2"/><rect x="7" y="7" width="5" height="5" rx=".8"/><path d="M15 7h2.5M15 10h2.5M7 15.5h10M7 18h6"/>',
  ram:'<rect x="2.5" y="8" width="19" height="8" rx="1.2"/><path d="M6 11v2M9.5 11v2M13 11v2M16.5 11v2M5 16v2.5M11 16v2.5M19 16v2.5"/>',
  psu:'<rect x="3" y="5.5" width="18" height="13" rx="2"/><circle cx="10" cy="12" r="3.6"/><path d="M10 8.4v7.2M6.4 12h7.2M16.5 9.5h2M16.5 12h2M16.5 14.5h2"/>'
};
/* minh hoạ góc máy (vẽ tay bằng SVG, đổi màu theo giao diện): màn hình, bàn phím, chuột trên lót chuột dài, tai nghe, ghế, case */
var DESKART='<svg class="sart" viewBox="0 0 320 150" role="img" aria-label="Minh hoạ góc máy"><defs><linearGradient id="sug" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity=".16"/><stop offset="1" stop-color="currentColor" stop-opacity=".04"/></linearGradient></defs>'+
  '<path class="s-ln" d="M18 108h284M34 108v34M286 108v34"/>'+
  '<rect class="s-ln" x="96" y="16" width="128" height="74" rx="6"/><rect x="102" y="22" width="116" height="62" rx="3" fill="url(#sug)"/>'+
  '<path class="s-ac" d="M112 70l14-16 12 10 16-22 14 18 18-12"/><circle class="s-acf" cx="198" cy="36" r="4"/>'+
  '<path class="s-ln" d="M160 90v10M144 104h32"/>'+
  '<rect class="s-ln" x="60" y="100" width="190" height="8" rx="2.5" opacity=".55"/>'+
  '<rect class="s-ln" x="86" y="96" width="104" height="8" rx="2"/><path class="s-dim" d="M92 100h92"/>'+
  '<rect class="s-ln" x="212" y="94" width="10" height="14" rx="5"/>'+
  '<rect class="s-ln" x="250" y="44" width="34" height="64" rx="4"/><circle class="s-ac" cx="267" cy="62" r="7"/><circle class="s-ac" cx="267" cy="84" r="7"/><path class="s-acf" d="M256 98h22v3h-22z"/>'+
  '<path class="s-ln" d="M40 92v-10a12 12 0 0 1 24 0v10"/><rect class="s-ln" x="37" y="90" width="7" height="12" rx="2.5"/><rect class="s-ln" x="60" y="90" width="7" height="12" rx="2.5"/><path class="s-ac" d="M38.5 96h4M61.5 96h4"/>'+
  '<path class="s-dim" d="M140 118h40v8h-40zM160 126v12M146 144l14-6 14 6"/></svg>';
var STAT={playing:['Đang chơi','Playing'],done:['Phá đảo','Finished'],dropped:['Bỏ dở','Dropped'],want:['Muốn chơi','Want to play']};
var SIC={playing:'<rect x="2.5" y="7" width="19" height="11" rx="5.5"/><path d="M7.5 10.5v4M5.5 12.5h4M15.5 11.5h.01M18 13.5h.01"/>',done:'<path d="M8 4h8v6a4 4 0 0 1-8 0zM8 6H4.5c0 3 1.5 4.5 3.5 4.5M16 6h3.5c0 3-1.5 4.5-3.5 4.5M12 14v4M8.5 20h7"/>',dropped:'<circle cx="12" cy="12" r="8.5"/><path d="M6 6l12 12"/>',want:'<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8L3.5 9.7l5.9-.9z"/>'};
function isPH(s){return /^\s*\[[^\]]*\]\s*$/.test(String(s||''))}
var shF='all',shTab='su'; /* mặc định mở tab Setup trước (nếu đã điền setup) */
function renderShelf(anim){
  var bl=$('bl'),sf=$('shf');if(!bl||!sf)return;
  var its=BACKLOG.filter(function(x){return x.t&&!isPH(x.t)}),cnt={};its.forEach(function(x){cnt[x.s]=(cnt[x.s]||0)+1});
  if(shF!=='all'&&!cnt[shF])shF='all';
  sf.textContent='';
  [['all',L('Tất cả','All')]].concat(Object.keys(STAT).filter(function(k){return cnt[k]}).map(function(k){return[k,en()?STAT[k][1]:STAT[k][0]]})).forEach(function(f){
    var b=el('button');b.type='button';b.setAttribute('data-s',f[0]);b.setAttribute('aria-pressed',shF===f[0]?'true':'false');
    if(f[0]!=='all')b.appendChild(el('i'));b.appendChild(document.createTextNode(f[1]));b.appendChild(el('small',null,String(f[0]==='all'?its.length:cnt[f[0]])));
    b.addEventListener('click',function(){if(shF===f[0])return;shF=f[0];renderShelf(true)});sf.appendChild(b);
  });
  bl.textContent='';bl.classList.remove('anim');
  var show=its.filter(function(x){return shF==='all'||x.s===shF});
  show.forEach(function(x,i){
    var li=el('li');li.setAttribute('data-s',x.s);li.style.setProperty('--n',i);
    var ic=el('span','bi2');ic.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+(SIC[x.s]||'')+'</svg>';ic.title=en()?STAT[x.s][1]:STAT[x.s][0];
    li.appendChild(ic);li.appendChild(el('b',null,x.t));li.appendChild(el('span','pf',x.p||''));
    var note=x.n?(en()?x.n[1]:x.n[0]):'';li.appendChild(el('p',null,note||(en()?STAT[x.s][1]:STAT[x.s][0])));
    bl.appendChild(li);
  });
  if(!show.length)bl.appendChild(el('li','em',L('Chưa có game nào ở đây.','No games here yet.')));
  if(anim){void bl.offsetWidth;bl.classList.add('anim')}
  /* setup: chỉ hiện tab khi đã điền ít nhất một mục */
  var su=$('su'),tabs=$('shtabs');
  function pick(a){return Array.isArray(a)?(en()?(a[1]||a[0]):a[0]):(a||'')}
  var rows=SETUP.filter(function(r){var v=pick(r.v);return v&&!isPH(v)});
  if(su){
    su.textContent='';
    if(rows.length){var art=el('div','sartw');art.innerHTML=DESKART;su.appendChild(art)}
    Object.keys(SGRP).forEach(function(g){
      var its=rows.filter(function(r){return r.g===g});if(!its.length)return;
      var h=el('h3','sgh',en()?SGRP[g][1]:SGRP[g][0]);h.appendChild(el('small',null,String(its.length)));su.appendChild(h);
      var grid=el('ul','sgrid');
      its.forEach(function(r,i){
        var li=el('li');li.style.setProperty('--n',i);
        var ic=el('span','sic');ic.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+(SUI[r.k]||'')+'</svg>';
        li.appendChild(ic);
        /* ảnh sản phẩm: khung ảnh lớn phía trên thẻ; ảnh lỗi (link hỏng, bị chặn) thì gỡ khung, thẻ quay về icon */
        /* fill:true = ảnh chụp/ảnh nghệ thuật phủ kín khung (không phải ảnh sản phẩm nền trắng) */
        if(r.img){var fr=el('div','sph'+(r.fill?' fill':'')),im=document.createElement('img');im.src=r.img;im.alt=pick(r.v);im.loading='lazy';im.decoding='async';im.referrerPolicy='no-referrer';
          im.onload=function(){fr.classList.add('ok')};im.onerror=function(){fr.remove();li.classList.remove('hasimg');li.removeAttribute('tabindex');li.removeAttribute('role')};fr.appendChild(im);fr.appendChild(el('span','sphz'));li.classList.add('hasimg');li.insertBefore(fr,li.firstChild);
          /* chạm vào thẻ có ảnh: mở hộp xem ảnh lớn */
          li.tabIndex=0;li.setAttribute('role','button');li.setAttribute('aria-label',L('Xem ảnh ','View photo: ')+pick(r.v))}
        var tx=el('div','stx');tx.appendChild(el('small',null,pick(r.l)));tx.appendChild(el('b',null,pick(r.v)));
        var note=pick(r.d);if(note)tx.appendChild(el('span',null,note));
        li.appendChild(tx);grid.appendChild(li);
      });
      su.appendChild(grid);
    });
    su.classList.remove('anim');
    if(anim&&shTab==='su'){void su.offsetWidth;su.classList.add('anim')}
  }
  if(tabs){tabs.hidden=!rows.length;if(!rows.length)shTab='bl';
    tabs.querySelectorAll('button').forEach(function(b){var on=b.getAttribute('data-t')===shTab;b.setAttribute('aria-selected',on?'true':'false')});
    var pb=$('shp-bl'),ps=$('shp-su');if(pb)pb.hidden=shTab!=='bl';if(ps)ps.hidden=shTab!=='su'}
}
/* ===== XEM ẢNH LINH KIỆN: chạm thẻ có ảnh trong Setup -> ảnh lớn + tên món. ‹ › hoặc phím mũi tên để chuyển, vuốt trên điện thoại, Esc / chạm nền để đóng ===== */
var SV=null,svI=0,svList=[];
function svBuild(){
  if(SV)return SV;
  SV=document.createElement('dialog');SV.className='sulb';SV.setAttribute('translate','no');
  SV.innerHTML='<div class="sulbx"><button type="button" class="sulc">×</button><figure class="sulf"><div class="sulimg"><img alt=""></div><figcaption><small></small><b></b><span></span></figcaption></figure>'+
    '<div class="sulnav"><button type="button" class="suln" data-d="-1">‹</button><em class="sulcnt"></em><button type="button" class="suln" data-d="1">›</button></div></div>';
  document.body.appendChild(SV);
  SV.querySelector('.sulc').addEventListener('click',svClose);
  SV.querySelectorAll('.suln').forEach(function(b){b.addEventListener('click',function(){svGo(svI+(+b.getAttribute('data-d')))})});
  SV.addEventListener('click',function(e){if(e.target===SV)svClose()});
  SV.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'){e.preventDefault();svGo(svI-1)}else if(e.key==='ArrowRight'){e.preventDefault();svGo(svI+1)}});
  var box=SV.querySelector('.sulimg'),sx=null,sy=0;
  box.addEventListener('pointerdown',function(e){sx=e.clientX;sy=e.clientY});
  box.addEventListener('pointerup',function(e){if(sx==null)return;var dx=e.clientX-sx,dy=e.clientY-sy;sx=null;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy))svGo(svI+(dx<0?1:-1))});
  return SV;
}
function svShow(i,dir){
  var n=svList.length;if(!n)return;svI=(i+n)%n;var li=svList[svI],im=li.querySelector('.sph img'),tx=li.querySelector('.stx');
  var box=SV.querySelector('.sulimg'),img=box.querySelector('img');
  box.classList.toggle('fill',!!li.querySelector('.sph.fill'));
  img.classList.remove('in');img.style.setProperty('--dx',(dir||0)*24+'px');void img.offsetWidth;
  img.src=im?im.currentSrc||im.src:'';img.alt=tx.querySelector('b').textContent;img.referrerPolicy='no-referrer';img.classList.add('in');
  var cap=SV.querySelector('figcaption');cap.querySelector('small').textContent=tx.querySelector('small').textContent;cap.querySelector('b').textContent=tx.querySelector('b').textContent;
  var sp=tx.querySelector('span');cap.querySelector('span').textContent=sp?sp.textContent:'';
  SV.querySelector('.sulcnt').textContent=(svI+1)+' / '+n;
  SV.querySelector('.sulc').setAttribute('aria-label',L('Đóng','Close'));
  SV.querySelectorAll('.suln')[0].setAttribute('aria-label',L('Ảnh trước','Previous photo'));SV.querySelectorAll('.suln')[1].setAttribute('aria-label',L('Ảnh sau','Next photo'));
  SV.setAttribute('aria-label',L('Ảnh linh kiện','Setup photo'));
}
function svGo(i){svShow(i,i>svI?1:-1)}
function svOpen(li){
  var su=$('su');svList=[].slice.call(su.querySelectorAll('.sgrid li.hasimg'));var i=svList.indexOf(li);if(i<0)return;
  svBuild();svShow(i,0);if(SV.showModal)SV.showModal();else SV.setAttribute('open','');
}
function svClose(){if(SV){if(SV.close)SV.close();else SV.removeAttribute('open')}}
(function(){var su=$('su');if(!su)return;
  su.addEventListener('click',function(e){var li=e.target.closest('.sgrid li.hasimg');if(li)svOpen(li)});
  su.addEventListener('keydown',function(e){if(e.key!=='Enter'&&e.key!==' ')return;var li=e.target.closest('.sgrid li.hasimg');if(li){e.preventDefault();svOpen(li)}});
})();

var shT=$('shtabs');if(shT)shT.addEventListener('click',function(e){var b=e.target.closest('button[data-t]');if(!b||b.getAttribute('data-t')===shTab)return;shTab=b.getAttribute('data-t');renderShelf(true)});
renderShelf(false);

/* ===== THỐNG KÊ KHÔNG COOKIE (Cloudflare Web Analytics) =====
   Cách dễ nhất: bật Web Analytics cho dự án Pages trong bảng điều khiển Cloudflare (tự chèn, không cần sửa code).
   Hoặc dán token vào CF_BEACON. Người xem bật "Do Not Track" thì không tải. */
var CF_BEACON='';
if(CF_BEACON&&navigator.doNotTrack!=='1'&&window.doNotTrack!=='1'&&/^https:$/.test(location.protocol)){var cfs=document.createElement('script');cfs.defer=true;cfs.src='https://static.cloudflareinsights.com/beacon.min.js';cfs.setAttribute('data-cf-beacon',JSON.stringify({token:CF_BEACON}));document.head.appendChild(cfs)}

document.addEventListener('langchange',function(){renderShelf(false)});
window.DEVC={open:openKbd,run:run};
})();
}catch(e){console.error('[#dev-js]',e)}
/* ===================== [skymap] BẢN ĐỒ SỞ THÍCH ===================== */
try{
(function(){
  /* Mỗi thứ tôi thích là một ngôi sao: tâm là "Ming", 6 nhóm xung quanh, mỗi nhóm có các sao con (luôn hiện tên),
     thêm ít bụi sao không tên cho có trời. Sao con nối với nhóm, nhóm nối với tâm, bụi sao nối nhẹ với sao gần.
     Rê chuột/chạm: sáng cả chùm, gợi ý ở góc khung; bấm (hoặc chạm lần 2): nhảy tới mục tương ứng.
     Nhẹ máy: chỉ vẽ khi khung đang trên màn hình, ~30 khung/giây; tắt hiệu ứng (M) / máy yếu thì vẽ đứng yên.
     MUỐN SỬA DỮ LIỆU: sửa mảng GROUPS (tên VI, tên EN, id mục để nhảy tới, danh sách sao con [tên VI, tên EN]). */
  var sec=document.getElementById('sky'),cv=document.getElementById('skycv'),hint=document.getElementById('skyhint');if(!sec||!cv)return;
  var R=document.documentElement,cx=cv.getContext('2d');
  function en(){return R.lang==='en'}
  function idolNames(){
    var a=[].map.call(document.querySelectorAll('#idol h3'),function(h){return h.textContent.replace(/[→\s]+$/,'').replace(/\.$/,'').trim()}).filter(Boolean);
    return (a.length?a:['Sơn Tùng M-TP','Đen Vâu','Vũ','HIEUTHUHAI','MCK']).slice(0,7);
  }
  var GROUPS=[
    {vi:'Game',en:'Games',go:'shelf',c:1,items:['League of Legends','Delta Force','Path of Exile 2','Elden Ring','Minecraft']},
    {vi:'Nhạc',en:'Music',go:'idol',c:2,items:idolNames},
    {vi:'Truyện',en:'Comics',go:'hobby',c:3,items:['Manhwa','Manhua',['Việt hoá','Translations']]},
    {vi:'Phim',en:'Movies',go:'hobby',c:4,items:['Marvel','DC',['Phim bộ','TV series']]},
    {vi:'Góc máy',en:'Setup',go:'shelf',c:5,items:['AOC 27G15N','AULA F108 Pro','RTX 3060','i5-12400F']},
    {vi:'Làm web',en:'Building',go:'lab',c:6,items:[['Góc chơi','Playground'],['Việt hoá game','Game translations'],['Trang này','This site']]}
  ];
  /* vài đường nối "có nghĩa" giữa các nhóm */
  var CROSS=[['RTX 3060','Elden Ring'],['AULA F108 Pro','Góc chơi'],['Việt hoá','Việt hoá game'],['League of Legends','Delta Force']];
  var N=[],E=[],W=0,H=0,dpr=1,hot=null,sel=null,raf=0,last=0,visible=false;
  function weak(){var n=navigator;return R.classList.contains('lite')||(n.hardwareConcurrency&&n.hardwareConcurrency<=2)||(n.deviceMemory&&n.deviceMemory<=2)}
  function still(){return R.getAttribute('data-motion')==='off'||matchMedia('(prefers-reduced-motion: reduce)').matches||weak()}
  function rnd(s){var x=Math.sin(s*9301+49297)*233280;return x-Math.floor(x)} /* ngẫu nhiên cố định: lần nào mở cũng một bầu trời */
  function pal(){var s=getComputedStyle(R),o={};['--c1','--c2','--c3','--c4','--c5','--c6','--acc','--text','--muted','--bg'].forEach(function(k){o[k]=s.getPropertyValue(k).trim()||'#9cc8ff'});o.mono=s.getPropertyValue('--mono').trim()||'ui-monospace,Consolas,monospace';o.light=R.getAttribute('data-theme')==='light';return o}
  var P=pal();
  function build(){
    var r=cv.getBoundingClientRect();W=Math.max(280,r.width);H=Math.max(240,r.height);dpr=Math.min(window.devicePixelRatio||1,1.5);
    cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);cx.setTransform(dpr,0,0,dpr,0,0);
    N=[];E=[];var sm=W<520,ccx=W/2,ccy=H/2,rx=W*(sm?.28:.27),ry=H*(sm?.28:.27);
    var me={id:'me',vi:'Ming',en:'Ming',x:ccx,y:ccy,r:7,me:true,go:'intro',hub:true};N.push(me);
    GROUPS.forEach(function(g,gi){
      var a=-Math.PI/2+gi/GROUPS.length*Math.PI*2+.3,hx=ccx+Math.cos(a)*rx,hy=ccy+Math.sin(a)*ry;
      var hub={id:'g'+gi,vi:g.vi,en:g.en,x:hx,y:hy,r:5.5,c:g.c,go:g.go,hub:true,ang:a};N.push(hub);E.push([me,hub,1]);
      var items=typeof g.items==='function'?g.items():g.items,n=items.length,spread=sm?.42:.36;
      items.forEach(function(it,i){
        var vi=Array.isArray(it)?it[0]:it,ename=Array.isArray(it)?it[1]:it,
            aa=a+(i-(n-1)/2)*spread,dd=(sm?42:58)+(i%2)*(sm?20:28),
            x=hx+Math.cos(aa)*dd,y=hy+Math.sin(aa)*dd;
        x=Math.max(10,Math.min(W-10,x));y=Math.max(12,Math.min(H-12,y));
        var nd={id:'n'+gi+'_'+i,vi:vi,en:ename,x:x,y:y,r:3.4,c:g.c,go:g.go,grp:hub};N.push(nd);E.push([hub,nd,1]);
      });
    });
    /* bụi sao không tên: ít, mờ, chỉ để có trời */
    var dust=sm?22:Math.round(Math.min(55,W*H/9000));
    for(var i=0;i<dust;i++)N.push({id:'d'+i,x:8+rnd(i*7.13+1)*(W-16),y:8+rnd(i*3.71+2)*(H-16),r:.9+rnd(i*2.2)*1.1,c:1+((i*7)%6),dust:true});
    var seen={};E.forEach(function(e){seen[e[0].id+'|'+e[1].id]=seen[e[1].id+'|'+e[0].id]=1});
    N.forEach(function(a){if(!a.dust)return;
      N.filter(function(b){return b!==a}).map(function(b){return [b,Math.hypot(a.x-b.x,a.y-b.y)]}).sort(function(p,q){return p[1]-q[1]}).slice(0,2)
        .forEach(function(p){if(p[1]>(sm?110:150))return;var k=a.id+'|'+p[0].id;if(seen[k])return;seen[k]=seen[p[0].id+'|'+a.id]=1;E.push([a,p[0],0])});
    });
    CROSS.forEach(function(c){var a=N.filter(function(n){return n.vi===c[0]})[0],b=N.filter(function(n){return n.vi===c[1]})[0];if(a&&b)E.push([a,b,2])});
    N.forEach(function(n,i){n.ph=rnd(i*1.7)*6.28;n.sp=.22+rnd(i*4.1)*.3;n.am=n.me?0:n.hub?1.6:n.dust?4:2.4;n.nb=[]});
    E.forEach(function(e){e[0].nb.push(e[1]);e[1].nb.push(e[0])});
    var a1=document.getElementById('skyn'),a2=document.getElementById('skyl');
    if(a1)a1.textContent=N.filter(function(n){return !n.dust&&!n.me}).length;if(a2)a2.textContent=E.filter(function(e){return e[2]}).length;
  }
  function col(n){return n.me?P['--acc']:P['--c'+(n.c||1)]}
  function pos(n,t){if(still())return [n.x,n.y];var q=t/1000*n.sp+n.ph;return [n.x+Math.cos(q)*n.am,n.y+Math.sin(q*1.3)*n.am*.8]}
  function label(n){return en()?n.en:n.vi}
  function draw(t){
    cx.clearRect(0,0,W,H);
    var focus=sel||hot,lit=null;if(focus){lit={};lit[focus.id]=1;focus.nb.forEach(function(b){lit[b.id]=1})}
    N.forEach(function(n){var p=pos(n,t);n.px=p[0];n.py=p[1]});
    /* đường nối: tâm-nhóm theo màu nhấn, nhóm-sao con theo màu nhóm, bụi sao rất mờ */
    E.forEach(function(e){
      var a=e[0],b=e[1],on=lit&&(a===focus||b===focus),dust=!e[2];
      if(lit&&!on&&dust)return;
      cx.globalAlpha=lit?(on?.95:.08):(dust?.14:e[2]===2?.35:.55);
      cx.strokeStyle=on?col(focus):dust?P['--muted']:e[2]===2?P['--muted']:col(b.me?a:b);
      cx.lineWidth=on?1.8:dust?.7:1.2;
      if(e[2]===2)cx.setLineDash([3,4]);
      cx.beginPath();cx.moveTo(a.px,a.py);cx.lineTo(b.px,b.py);cx.stroke();
      if(e[2]===2)cx.setLineDash([]);
    });
    /* sao */
    N.forEach(function(n){
      var on=!lit||lit[n.id],s=n.r*(n===focus?1.45:1),c=col(n);
      if(n.dust){cx.globalAlpha=lit?.12:.5;cx.fillStyle=P['--muted'];cx.fillRect(n.px-s/2,n.py-s/2,s,s);return}
      cx.globalAlpha=on?1:.22;
      if(n.hub||n===focus){cx.globalAlpha*=.22;cx.fillStyle=c;cx.beginPath();cx.arc(n.px,n.py,s*2.6,0,6.283);cx.fill();cx.globalAlpha=on?1:.22}
      cx.fillStyle=c;cx.beginPath();cx.arc(n.px,n.py,s,0,6.283);cx.fill();
      if(n.hub){cx.lineWidth=1.4;cx.strokeStyle=c;cx.beginPath();cx.arc(n.px,n.py,s+4,0,6.283);cx.stroke()}
    });
    /* tên: mọi sao có tên đều hiện; nhóm đậm hơn; sao ở phía trái nhóm thì tên nằm bên trái */
    cx.textBaseline='middle';var placed=[];
    function hit(x,y,w,h){for(var q=0;q<placed.length;q++){var o=placed[q];if(x<o[0]+o[2]&&x+w>o[0]&&y<o[1]+o[3]&&y+h>o[1])return true}return false}
    /* nhóm và tâm đặt tên trước (ưu tiên), sao con sau; sao đang chọn luôn đặt trước hết */
    N.filter(function(n){return !n.dust}).sort(function(a,b){return (b===focus)-(a===focus)||(b.hub?1:0)-(a.hub?1:0)}).forEach(function(n){
      var txt=label(n),big=n===focus,on=!lit||lit[n.id];
      var fs=n.me?14:n.hub?12.5:11;cx.font=(n.hub||big?'700 ':'500 ')+fs+'px '+P.mono;
      var tw=cx.measureText(txt).width,left=n.grp?n.px<n.grp.px-2:(n.hub&&n.px<W/2-4),
          lx=left?n.px-n.r-8-tw:n.px+n.r+(n.hub?9:7),ly=n.me?n.py+n.r+14:n.py;
      if(n.me)lx=n.px-tw/2;
      lx=Math.max(4,Math.min(W-tw-4,lx));
      /* tên bị chồng lên tên khác thì dời lên/xuống từng nấc, thử cả bên kia sao */
      var bh=fs*1.3,tries=[[0,0],[0,-bh],[0,bh],[0,-2*bh],[0,2*bh]],ok=false,bx=lx,by=ly;
      for(var ti=0;ti<tries.length&&!ok;ti++){var tx=lx+tries[ti][0],ty=ly+tries[ti][1];if(!hit(tx-4,ty-bh/2,tw+8,bh)){bx=tx;by=ty;ok=true}}
      if(!ok&&!n.me){var alt=left?n.px+n.r+7:n.px-n.r-8-tw;alt=Math.max(4,Math.min(W-tw-4,alt));if(!hit(alt-4,ly-bh/2,tw+8,bh)){bx=alt;by=ly;ok=true}}
      lx=bx;ly=Math.max(fs,Math.min(H-fs,by));placed.push([lx-4,ly-bh/2,tw+8,bh]);
      if(ly!==n.py&&!n.me){cx.globalAlpha=on?.35:.1;cx.strokeStyle=P['--muted'];cx.lineWidth=.8;cx.beginPath();cx.moveTo(n.px,n.py);cx.lineTo(left?lx+tw:lx,ly);cx.stroke()}
      /* nền nhỏ sau chữ để không lẫn vào đường nối */
      cx.globalAlpha=on?(big?.9:.62):.15;cx.fillStyle=P['--bg'];cx.fillRect(lx-4,ly-fs*.65,tw+8,fs*1.3);
      cx.globalAlpha=on?1:.25;cx.fillStyle=big||n.me?col(n):n.hub?P['--text']:P['--muted'];cx.fillText(txt,lx,ly);
    });
    cx.globalAlpha=1;
  }
  function loop(t){raf=0;if(!visible||document.hidden)return;if(t-last>=33){last=t;draw(t)}if(!still())raf=requestAnimationFrame(loop)}
  function kick(){if(!raf&&visible)raf=requestAnimationFrame(loop)}
  function redraw(){draw(performance.now());kick()}
  function setHint(){
    var f=sel||hot;if(!hint)return;
    if(!f){hint.textContent='';return}
    var g=f.hub?f:f.grp,where=g&&!f.me?(en()?g.en:g.vi):'';
    hint.textContent=label(f)+(where&&!f.hub?' · '+where:'')+'  →  '+(en()?(sel?'tap again to open':'click to open'):(sel?'chạm lần nữa để mở':'bấm để mở'));
  }
  /* chuột / chạm */
  function pick(e){var r=cv.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top,best=null,bd=e.pointerType==='touch'?28:20;
    N.forEach(function(n){if(n.dust)return;var d=Math.hypot((n.px||n.x)-x,(n.py||n.y)-y);if(d<bd){bd=d;best=n}});return best}
  cv.addEventListener('pointermove',function(e){if(e.pointerType==='touch')return;var n=pick(e);if(n!==hot){hot=n;cv.classList.toggle('hot',!!n);setHint();if(still())redraw()}});
  cv.addEventListener('pointerleave',function(){if(hot){hot=null;cv.classList.remove('hot');setHint();if(still())redraw()}});
  cv.addEventListener('click',function(e){
    var n=pick(e);
    if(!n){if(sel){sel=null;setHint();redraw()}return}
    var touch=e.pointerType==='touch'||(!e.pointerType&&matchMedia('(hover:none)').matches);
    if(touch&&sel!==n){sel=n;setHint();redraw();return}
    if(n.go){var el=document.getElementById(n.go);if(el){if(window.__openSec)window.__openSec(n.go);el.scrollIntoView({behavior:still()?'auto':'smooth',block:'start'})}}
  });
  function texts(){[].forEach.call(sec.querySelectorAll('[data-vi]'),function(el){el.textContent=el.getAttribute(en()?'data-en':'data-vi')})}
  document.addEventListener('langchange',function(){setTimeout(function(){texts();setHint();redraw()},0)});
  new MutationObserver(function(){P=pal();redraw()}).observe(R,{attributes:true,attributeFilter:['data-accent','data-theme','data-motion']});
  var built=false;
  function start(){if(!built){built=true;build();texts()}visible=true;redraw()}
  if('IntersectionObserver' in window){new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)start();else{visible=false;if(raf){cancelAnimationFrame(raf);raf=0}}})},{rootMargin:'150px 0px'}).observe(cv)}else start();
  if(window.ResizeObserver){var rt=0;new ResizeObserver(function(){if(!built)return;clearTimeout(rt);rt=setTimeout(function(){build();redraw()},120)}).observe(cv)}
  document.addEventListener('visibilitychange',function(){if(!document.hidden)kick()});
})();
}catch(e){console.error('[skymap]',e)}
