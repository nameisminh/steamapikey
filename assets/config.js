/* Cấu hình trang (game, ảnh bìa, liên kết...). Tách từ index.html, chạy đúng chỗ cũ. */
(function(){
/* ====== CẤU HÌNH ======
   cover: số = Steam AppID | link ảnh | để trống    bg: nền CSS khi không có ảnh
   banner: đặt ảnh hoặc GIF tại images/banner.gif (hoặc .webp/.png/.jpg), hoặc ?edit rồi bấm Đổi banner để dán link   frames: các lớp của khung Dark Moon, ?edit để bật/tắt từng lớp (✓/✗) */
var ST='https://cdn.cloudflare.steamstatic.com/steam/apps/',DK='https://cdn.discordapp.com/media/v1/collectibles-shop/1556809649808736266/';
var D={name:'ming',sub:'Check out my profile',user:'ming0811_',tag:'COZY',avatar:'images/avatar.jpg',banner:['https://cdn.discordapp.com/banners/873073921589661698/a_127162e7f2ad2d51de0e6daa4cb9b188.webp?size=1024&animated=true','images/banner.gif','images/banner.webp','images/banner.png','images/banner.jpg'],deco:'',nitroImg:'',bubble:'🐧',birth:'2004-11-08T12:12',msg:'https://discord.com/users/873073921589661698',/* huy hiệu: [ảnh, tên hiện khi rê chuột] — ảnh cắt từ bảng huy hiệu Discord, đổi tên tuỳ ý */
 badges:[['images/badges/b1.png','Huy hiệu 1'],['images/badges/b2.png','Huy hiệu 2'],['images/badges/b3.png','Huy hiệu 3'],['images/badges/b4.png','Huy hiệu 4'],['images/badges/b5.png','Huy hiệu 5'],['images/badges/b6.png','Huy hiệu 6'],['images/badges/b7.png','Huy hiệu 7'],['images/badges/b8.png','Huy hiệu 8'],['images/badges/b9.png','Huy hiệu 9'],['images/badges/b10.png','Huy hiệu 10'],['images/badges/b11.png','Huy hiệu 11'],['images/badges/b12.png','Huy hiệu 12']],
 /* hiệu ứng hồ sơ (Dark Moon Crows - Blood Moon): intro chạy 1 lần 4 giây, loop lặp mãi; để trống để tắt */
 /* (đã lưu vào images/effects/ để phát lại được mà không tải lại) gap = số giây nghỉ giữa 2 lần phát, len = độ dài một lượt (giây) */
 effect:{intro:'images/effects/darkmoon-intro.png',loop:'images/effects/darkmoon-loop.png',introV:'images/effects/darkmoon-intro.webm',loopV:'images/effects/darkmoon-loop.webm',gap:10,len:4},
 frames:[DK+'1556809829652234330/static',DK+'1556809833922035752/static',DK+'1556809813197983765/static',DK+'1556809825642614794/static'],frameIdx:0,frameForce:true,frameUse:[],pieces:null,slice:.25,
 bio:['🎂 Took Birth: {age}','He/Him'],link:'https://ming-dev.id.vn/',since:['6 thg 8, 2021','6 thg 8, 2022'],note:':v',
 roles:[['Game thủ','#57f287'],['Dịch giả','#fee75c'],['Dev','#5865f2'],['Nghe nhạc','#eb459e'],['Cú đêm','#ed4245'],['Mèo','#f0883e'],['Cà phê','#1abc9c']],
 conn:[['E','#2a2a2a','https://store.epicgames.com/u/223ec24acd464064b37dca4c52de9703','Epic Games'],['f','#1877f2','https://www.facebook.com/megame.com.vn','Facebook'],['♫','#1db954','https://open.spotify.com/user/31bsl47yi3tv4ra6fh6bwmgxclei','Spotify'],['S','#1b2838','https://steamcommunity.com/profiles/76561199474355109/','Steam']],
 widgets:[
 {t:'Trò chơi ưa thích',s:'Chọn 1 trò chơi',max:1,rows:1,games:[{n:'League of Legends',c:'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_0.jpg',ic:'L',bg:'radial-gradient(circle at 50% 35%,#1e5a8c,#091428)',cm:'Chưa từng bỏ sót chế độ nào của game =))',tags:['Say Mê','Mê đắm nó','Khá thích nó','Đang tìm nhóm','Mở để chơi','+2']}]},
 {t:'Trò Chơi Luân Phiên',s:'Thêm tối đa 5 trò chơi',max:5,rows:1,games:[{n:'ELDEN RING',c:1245620,tags:['Khá thích nó','Đang tìm nhóm']},{n:'Delta Force',c:2507950,tags:['Trung Cấp','Say Mê','Mê đắm nó','Khá thích nó','Đang tìm nhóm','+1']},{n:'Path of Exile 2',c:2694490,tags:['Trung Cấp','Mê đắm nó','Khá thích nó','Say Mê']},{n:'Minecraft',c:'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png',bg:'linear-gradient(160deg,#5aa02c,#2d5016)',tags:['Tốt hơn bạn','Khá thích nó','Đang tìm kiếm mẹo','Mở để dạy']},{n:'Stardew Valley',c:413150,tags:['Mê đắm nó','Say Mê','Mở để dạy','Đang tìm kiếm thảo luận','+1']}]},
 {t:'Trò Chơi Tôi Thích',s:'Thêm tối đa 20 trò chơi',max:20,games:[{n:'Path of Exile 2',c:2694490},{n:'GTA San Andreas',c:12120},{n:'Dead Island 2',c:934700},{n:'Skyrim',c:489830},{n:'MEGABONK',c:3405340},{n:'inZOI',c:2456740},{n:'Cornerpond',c:3454590},{n:'Remnant II',c:1282100}]},
 {t:'Muốn Chơi',s:'Thêm tối đa 20 trò chơi',max:20,games:[{n:'Red Dead Redemption 2',c:1174180},{n:'osu!',c:'',bg:'linear-gradient(160deg,#ff66aa,#c2347a)'},{n:'Lethal Company',c:1966720},{n:'GTA V',c:271590}]}]};
var DCEN={"Trò chơi ưa thích":"Favorite game","Chọn 1 trò chơi":"Pick 1 game","Trò Chơi Luân Phiên":"Games in rotation","Thêm tối đa 5 trò chơi":"Add up to 5 games","Trò Chơi Tôi Thích":"Games I like","Thêm tối đa 20 trò chơi":"Add up to 20 games","Muốn Chơi":"Want to play","Chưa từng bỏ sót chế độ nào của game =))":"Never skipped a single mode of this game =))","Say Mê":"Obsessed","Mê đắm nó":"Loving it","Khá thích nó":"Pretty into it","Đang tìm nhóm":"Looking for a group","Mở để chơi":"Open to play","Trung Cấp":"Intermediate","Tốt hơn bạn":"Better than you","Đang tìm kiếm mẹo":"Looking for tips","Mở để dạy":"Open to teach","Đang tìm kiếm thảo luận":"Looking for discussion","Rút gọn":"Show less","Hiện thêm":"Show more","Chơi":"Playing","Phát trực tiếp":"Streaming","Nghe":"Listening","Xem":"Watching","Thi đấu":"Competing","Lịch sử hoạt động":"Activity history","Chưa có hoạt động nào được ghi lại.":"No activity recorded yet.","Đang diễn ra":"Happening now","Lịch sử chung, tự cập nhật từ Discord của Ming.":"Shared history, auto-updated from Ming's Discord.","Đang kết nối Discord…":"Connecting to Discord…","Đang chơi":"Playing","Đang phát trực tiếp":"Streaming","Đang nghe":"Listening","Đang xem":"Watching","Đang thi đấu":"Competing","Đang nghe Spotify":"Listening to Spotify","Không làm gì cả. Chưa có hoạt động nào trên Discord.":"Not doing anything. No activity on Discord right now.","1 Vật Phẩm":"1 Item","Xem ảnh đại diện":"View avatar","Tin nhắn":"Message","Tiểu sử":"About me","Gia Nhập Từ":"Member since","Vai trò":"Roles","Ghi chú (chỉ hiển thị cho bạn)":"Note (only visible to you)","6 thg 8, 2021":"Aug 6, 2021","6 thg 8, 2022":"Aug 6, 2022","Game thủ":"Gamer","Dịch giả":"Translator","Nghe nhạc":"Music lover","Cú đêm":"Night owl","Mèo":"Cat","Cà phê":"Coffee","Bảng":"Board","Hoạt động":"Activity","Danh Sách Mong Muốn":"Wishlist"};
DCEN['Tag máy chủ']='Server tag';DCEN['Huy hiệu của']='Badges of';DCEN['Bộ sưu tập huy hiệu trên Discord.']='Badge collection on Discord.';DCEN['Thu gọn']='Collapse';
function EN_(){return document.documentElement.lang==='en'}
function T(s){if(!EN_())return s;if(Object.prototype.hasOwnProperty.call(DCEN,s))return DCEN[s];var m=/^Huy hiệu (\d+)$/.exec(s);return m?'Badge '+m[1]:s}
function bdAge(n){return EN_()?n+(n===1?' year ago':' years ago'):n+' năm trước'}
function bdTip(d,p2){if(EN_())return['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][d.getDay()]+', '+['January','February','March','April','May','June','July','August','September','October','November','December'][d.getMonth()]+' '+d.getDate()+', '+d.getFullYear()+' at '+p2(d.getHours())+':'+p2(d.getMinutes());
 return['Chủ Nhật','Thứ Hai','Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu','Thứ Bảy'][d.getDay()]+', ngày '+d.getDate()+' tháng '+(d.getMonth()+1)+', '+d.getFullYear()+' lúc '+p2(d.getHours())+':'+p2(d.getMinutes())}
var ED=/[?&]edit\b/.test(location.search),host=document.getElementById('dcphost'),sh=host.attachShadow({mode:'open'}),root=(sh.appendChild(document.getElementById('dcpt').content.cloneNode(true)),sh.getElementById('dcp')),tab='bang',picked=0,bopen=false,lb=false,pk=null,drag=null,open={},L=null;
if(ED){root.classList.add('ed');try{var sv=JSON.parse(localStorage.getItem('dcp2')||'null');if(sv)D.widgets=sv}catch(e){}}
function save(){if(ED)try{localStorage.setItem('dcp2',JSON.stringify(D.widgets))}catch(e){}}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function src(c){return c===''||c==null?'':/^\d+$/.test(c)?ST+c+'/library_600x900.jpg':c}
function fb(c){return /^\d+$/.test(c)?ST+c+'/header.jpg':''}
function tile(g,wi,gi){var u=src(g.c),f=fb(g.c);return '<div class="g" draggable="'+ED+'" data-wi="'+wi+'" data-gi="'+gi+'" title="'+esc(g.n)+'"'+(g.bg?' style="background:'+g.bg+'"':'')+'>'+(u?'<img src="'+esc(u)+'" alt="" loading="lazy"'+(f?' data-f="'+f+'"':'')+'>':'')+(g.ic?'<i class="ic">'+esc(g.ic)+'</i>':'')+'<span>'+esc(g.n)+'</span>'+(ED?'<button class="x" data-del="'+wi+','+gi+'" aria-label="Xoá">✕</button>':'')+'</div>'}
function tic(t){return/^(Trung Cấp|Tốt hơn bạn|Cao Cấp|Sơ Cấp)/.test(t)?'🏅':/^(Đang tìm|Mở để)/.test(t)?'🙋':/^\+/.test(t)?'':'👍'}
function tags(a){return a&&a.length?'<div class="tgs">'+a.map(function(t){var i=tic(t);return'<span>'+(i?i+' ':'')+esc(T(t))+'</span>'}).join('')+'</div>':''}
function widget(w,wi){var h='<div class="w" data-w="'+wi+'"><span class="hd" draggable="true" data-hw="'+wi+'">⋮⋮</span><div class="wh"><div><b>'+esc(T(w.t))+'</b><small>'+esc(T(w.s))+'</small></div>'+(ED?'<button class="pl" data-add="'+wi+'" aria-label="Thêm game">+</button>':'')+'</div>';
 if(w.rows)h+=w.games.slice(0,open[wi]?99:2).map(function(g,gi){return'<div class="rw">'+tile(g,wi,gi)+'<div><b>'+esc(g.n)+'</b>'+(g.cm?'<em>'+esc(T(g.cm))+'</em>':'')+tags(g.tags)+'</div></div>'}).join('')+(w.games.length>2?'<button class="more" data-more="'+wi+'">'+(open[wi]?T('Rút gọn'):T('Hiện thêm'))+'</button>':'');
 else{var lim=open[wi]?99:8;h+='<div class="gr">'+w.games.slice(0,lim).map(function(g,gi){return tile(g,wi,gi)}).join('')+'</div>'+(w.games.length>8?'<button class="more" data-more="'+wi+'">'+(open[wi]?T('Rút gọn'):T('Hiện thêm'))+'</button>':'')}
 return h+'</div>'}
function aimg(a){var l=a.assets&&(a.assets.large_image||a.assets.small_image);if(!l)return'';if(/^https?:\/\//.test(l))return l;if(l.indexOf('mp:external/')===0)return'https://media.discordapp.net/external/'+l.slice(12);if(l.indexOf('mp:')===0)return'https://media.discordapp.net/'+l.slice(3);return a.application_id?'https://cdn.discordapp.com/app-assets/'+a.application_id+'/'+l+'.png':''}
function asm(a){var l=a.assets&&a.assets.small_image;if(!l||!a.assets.large_image)return'';if(/^https?:\/\//.test(l))return l;if(l.indexOf('mp:external/')===0)return'https://media.discordapp.net/external/'+l.slice(12);return a.application_id?'https://cdn.discordapp.com/app-assets/'+a.application_id+'/'+l+'.png':''}
/* lịch sử chung: đọc từ history.json (do tools/history-sync.mjs ghi), ai vào cũng thấy cùng một bản */
var HIST=[],ACT={};
try{fetch('history.json',{cache:'no-cache'}).then(function(r){return r.ok?r.json():[]}).then(function(j){if(Array.isArray(j)){HIST=j.slice(0,200);HIST.sort(function(a,b){return b.l-a.l});if(root.querySelector('.l'))render()}}).catch(function(){})}catch(e){}
function logAct(){
 if(!L)return;var now=Date.now(),ch=false,list=[];ACT={};
 (L.activities||[]).forEach(function(a){if(a.type===4)return;if(L.listening_to_spotify&&(a.id==='spotify:1'||a.name==='Spotify'))return;list.push({ty:a.type,n:a.name||'',d:a.details||(a.assets&&a.assets.large_text)||'',s:a.state||(a.assets&&a.assets.small_text)||'',u:a.url||a.sync_id||'',st:(a.timestamps&&a.timestamps.start)||0})});
 if(L.listening_to_spotify&&L.spotify){var sp0=L.spotify;list.push({ty:2,n:'Spotify',d:sp0.song||'',s:sp0.artist||'',st:(sp0.timestamps&&sp0.timestamps.start)||0})}
 list.forEach(function(x){
  var k=x.ty+'|'+x.n+'|'+x.d+'|'+x.s+'|'+(x.u||'')+'|'+(x.st||''),e=null,i;ACT[k]=1;
  for(i=0;i<HIST.length;i++)if(HIST[i].k===k){e=HIST[i];break}
  if(e){if(now-e.l>30000){e.l=now;ch=true}}else{HIST.unshift({k:k,ty:x.ty,n:x.n,d:x.d,s:x.s,u:x.u,st:x.st,f:now,l:now});ch=true}
 });
 if(ch){HIST.sort(function(a,b){return b.l-a.l});HIST=HIST.slice(0,200)}
}
function histBox(){
 var p2=function(n){return('0'+n).slice(-2)},fm=function(t){var d=new Date(t);return p2(d.getDate())+'/'+p2(d.getMonth()+1)+' '+p2(d.getHours())+':'+p2(d.getMinutes())},
 TY={0:'Chơi',1:'Phát trực tiếp',2:'Nghe',3:'Xem',5:'Thi đấu'},
 h='<div class="w hist"><div class="wh"><small>'+T('Lịch sử hoạt động')+'</small>'+''+'</div>';
 if(!HIST.length)return h+'<p class="hn">'+T('Chưa có hoạt động nào được ghi lại.')+'</p></div>';
 var lim=open.h?60:6;
 h+='<ul>'+HIST.slice(0,lim).map(function(e){var on=!!ACT[e.k];return'<li><b>'+esc(T(TY[e.ty]||'Chơi')+' · '+e.n)+'</b><time'+(on?' class="on"':'')+'>'+(on?T('Đang diễn ra'):fm(e.st||e.f))+'</time><span>'+esc([e.d,e.s].filter(Boolean).join(' · '))+'</span></li>'}).join('')+'</ul>';
 if(HIST.length>6)h+='<button class="more" data-more="h">'+(open.h?T('Rút gọn'):T('Hiện thêm'))+'</button>';
 return h+'<p class="hn">'+T('Lịch sử chung, tự cập nhật từ Discord của Ming.')+'</p></div>'}
function dbg(){return /[?&]dev(=|&|$)/.test(location.search)?'<div class="w empty" style="font-size:.78rem;word-break:break-word">[dev] '+esc(window.LDBG||'Lanyard chưa trả dữ liệu nào (chưa có kết quả websocket hay fetch)')+'</div>':''}
function actTab(){if(!L)return'<div class="w empty">'+T('Đang kết nối Discord…')+'</div>'+dbg()+histBox();
 var acts=(L.activities||[]).filter(function(a){return a.type!==4}),sp=L.listening_to_spotify&&L.spotify,K={0:'Đang chơi',1:'Đang phát trực tiếp',2:'Đang nghe',3:'Đang xem',5:'Đang thi đấu'},h='';
 acts.forEach(function(a){if(sp&&(a.id==='spotify:1'||a.name==='Spotify'))return;var b=aimg(a),s=asm(a),t=a.timestamps||{};
  h+='<div class="w act"><div class="ar">'+(b?'<img loading="lazy" class="b" src="'+esc(b)+'" alt="">':'🎮')+(s?'<img loading="lazy" class="s" src="'+esc(s)+'" alt="">':'')+'</div><div><small>'+T(K[a.type]||'Đang chơi')+'</small><b>'+esc(a.name)+'</b>'+(a.details?'<p>'+esc(a.details)+'</p>':'')+(a.state?'<p>'+esc(a.state)+'</p>':'')+(t.start?'<p class="el" data-s="'+t.start+'"></p>':'')+'</div></div>'});
 if(sp)h+='<div class="w act"><div class="ar"><img loading="lazy" class="b" src="'+esc(sp.album_art_url)+'" alt=""></div><div style="flex:1"><small style="color:#1db954">'+T('Đang nghe Spotify')+'</small><b>'+esc(sp.song)+'</b><p>'+esc(sp.artist)+'</p>'+(sp.timestamps?'<div class="sb"><i data-s="'+sp.timestamps.start+'" data-e="'+sp.timestamps.end+'"></i></div><div class="tm"><span data-k="s" data-s="'+sp.timestamps.start+'"></span><span data-k="e" data-e="'+sp.timestamps.end+'"></span></div>':'')+'</div></div>';
 return (h||'<div class="w empty">'+T('Không làm gì cả. Chưa có hoạt động nào trên Discord.')+'</div>')+dbg()+histBox()}
function nitro(){return'<div class="w"><div class="wh"><small>'+T('1 Vật Phẩm')+'</small></div><div class="nt">'+(D.nitroImg?'<img loading="lazy" src="'+esc(D.nitroImg)+'" alt="Nitro">':'<svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="34" r="22" fill="#6c63ff"/><rect x="16" y="26" width="32" height="18" rx="9" fill="#12123a"/><circle cx="26" cy="35" r="3" fill="#7df"/><circle cx="38" cy="35" r="3" fill="#7df"/><path d="M32 12v8" stroke="#57f287" stroke-width="3"/><circle cx="32" cy="10" r="4" fill="#57f287"/></svg><b>NITRO</b>')+'</div></div>'}
/* ---- giống Discord hơn: lấy thẳng từ dữ liệu Lanyard ----
   tag máy chủ (primary_guild): huy hiệu thật của máy chủ + chữ tag, thay cho emoji tự đặt;
   kiểu tên hiển thị (display_name_styles): màu tên và hiệu ứng (đổ bóng / phát sáng / chuyển màu) như trong Discord. */
function guildTag(u){var g=u&&u.primary_guild;
 if(g&&g.tag&&g.identity_enabled!==false){var b=g.badge&&g.identity_guild_id?'<img class="tgb" alt="" src="https://cdn.discordapp.com/clan-badges/'+esc(g.identity_guild_id)+'/'+esc(g.badge)+'.png?size=32">':'';return'<span class="tg" title="'+esc(T('Tag máy chủ'))+'">'+b+esc(g.tag)+'</span>'}
 return D.tag?'<span class="tg">🐰 '+esc(D.tag)+'</span>':''}
function hex(n){return'#'+('000000'+(n>>>0).toString(16)).slice(-6)}
function nameStyle(u){var s=u&&u.display_name_styles;if(!s||!s.colors||!s.colors.length)return'';
 var c1=hex(s.colors[0]),c2=s.colors[1]!=null?hex(s.colors[1]):c1,e=+s.effect_id||1,css='--nc:'+c1+';--nc2:'+c2;
 /* 1 màu thường · 2 chuyển màu · 3 neon · 4 viền · 5 nổi khối · 6 phát sáng (xấp xỉ theo các kiểu của Discord) */
 return' class="ns ne'+e+'" style="'+css+'"'}/* huy hiệu: ảnh (đường dẫn .png/.webp/.gif) hoặc emoji */
function bimg(b){return /\.(png|webp|gif|jpe?g|svg)(\?|$)/i.test(b[0])?'<img src="'+esc(b[0])+'" alt="'+esc(T(b[1]))+'" loading="lazy" decoding="async">':b[0]}
/* ===== HIỆU ỨNG HỒ SƠ (giống Discord): ảnh động 450×880 phủ lên cột hồ sơ =====
   Lần đầu: phát phần mở đầu (intro). Sau đó: phát một lượt lớp lặp (loop) → mờ dần → NGHỈ D.effect.gap giây → phát lại từ đầu.
   Hai file được tải MỘT LẦN (fetch → blob); mỗi lần phát lại chỉ tạo địa chỉ blob mới để ảnh chạy lại từ khung đầu, không tải lại.
   Card khuất khỏi màn hình hoặc tab ẩn thì dừng hẳn, hiện lại thì phát tiếp.
   Máy yếu / tắt hiệu ứng / tiết kiệm dữ liệu thì không tải.
   Có bản video .webm (nền trong suốt, ~0,3 MB) thì dùng video; Safari / iPhone không hiện được nền trong suốt của .webm nên dùng ảnh .png (3–4 MB). */
var FX=null,FXB={},fxT=0,fxOn=false,fxVis=false,fxUrl='',fxFirst=true;
var FXV=(function(){try{var ua=navigator.userAgent;if(!D.effect||!D.effect.loopV)return false;if(/AppleWebKit/.test(ua)&&!/Chrome\/|Chromium\//.test(ua))return false;return document.createElement('video').canPlayType('video/webm; codecs="vp09.00.10.08"')!==''}catch(e){return false}})();
function fxOk(){var n=navigator,R0=document.documentElement;if(!D.effect||!D.effect.loop)return false;if(R0.getAttribute('data-motion')==='off'||R0.classList.contains('lite'))return false;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return false;if(n.connection&&n.connection.saveData)return false;return true}
function fxBlob(k){if(FXB[k])return FXB[k];return FXB[k]=fetch(D.effect[FXV?k+'V':k]).then(function(r){if(!r.ok)throw 0;return r.blob()})}
function fxStop(){clearTimeout(fxT);fxT=0;fxOn=false;if(FX){var im=FX.firstChild;im.classList.remove('on');if(im.pause)im.pause()}}
function fxPlay(){
 clearTimeout(fxT);if(!FX||!fxVis||document.hidden||!fxOk()){fxOn=false;return}fxOn=true;
 var k=fxFirst&&D.effect.intro?'intro':'loop',im=FX.firstChild,len=(D.effect.len||4)*1000,gap=(D.effect.gap==null?10:D.effect.gap)*1000;
 fxBlob(k).then(function(b){
  if(!fxOn)return;
  if(fxUrl)URL.revokeObjectURL(fxUrl);fxUrl=URL.createObjectURL(b);
  var go=function(){
   if(!fxOn)return;fxFirst=false;im.classList.add('on');
   if(im.play){im.currentTime=0;var p=im.play();if(p&&p.catch)p.catch(function(){})}
   /* gần hết lượt thì mờ dần, hết hẳn thì nghỉ rồi phát lại */
   fxT=setTimeout(function(){im.classList.remove('on');fxT=setTimeout(fxPlay,gap)},Math.max(500,len-500));
  };
  if(FXV)im.onloadeddata=go;else im.onload=go;
  im.src=fxUrl;
 },function(){FX.remove();FX=null}); /* không tải được thì bỏ hiệu ứng, card vẫn bình thường */
}
function attachFx(){
 var l=root.querySelector('.l');if(!l)return;
 if(!FX){if(!fxOk())return;FX=document.createElement('div');FX.className='fx';FX.setAttribute('aria-hidden','true');FX.innerHTML=FXV?'<video muted playsinline disablepictureinpicture preload="auto"></video>':'<img alt="" decoding="async">';if(FXV)FX.firstChild.muted=true;
  /* chỉ chạy khi card đang trên màn hình */
  if('IntersectionObserver' in window)new IntersectionObserver(function(es){fxVis=es.some(function(e){return e.isIntersecting});if(fxVis){if(!fxOn)fxT=setTimeout(fxPlay,300)}else fxStop()}).observe(host);else{fxVis=true;fxPlay()}
  document.addEventListener('visibilitychange',function(){if(document.hidden)fxStop();else if(fxVis&&!fxOn)fxT=setTimeout(fxPlay,600)});
  new MutationObserver(function(){if(!fxOk())fxStop();else if(fxVis&&!fxOn)fxPlay()}).observe(document.documentElement,{attributes:true,attributeFilter:['data-motion','class']});
 }
 l.appendChild(FX);}function fmt(ms){var s=Math.max(0,Math.floor(ms/1000)),h=Math.floor(s/3600),m=Math.floor(s%3600/60);s%=60;return(h?h+':'+('0'+m).slice(-2):m)+':'+('0'+s).slice(-2)}
/* ===== KHUNG DARK MOON =====
   Cả 4 lớp (trăng, cành quạ + dây gai, sương, rễ cây) được vẽ trên cùng một lưới 1306px.
   Thẻ hồ sơ nằm trong lưới đó: cách mép trái 75px, rộng 1157px, đỉnh thẻ ở y=322 (ảnh trên cao 716)
   và đáy thẻ ở y=211 (ảnh dưới cao 424). Nhờ vậy 4 lớp luôn khớp nhau ở mọi bề rộng thẻ
   và không phải tải ảnh về đo lại kích thước như trước. */
var FW=1306,WL=75,WW=1157,WT=322,WB=211,FH=424,PS=null;
function autoPieces(){var x=-WL/WW,w=FW/WW,yt=-WT/WW,yb=-(FH-WB)/WW;
 return [{i:0,a:'t',x:x,y:yt,w:w,z:0},{i:2,a:'t',x:x,y:yt,w:w,z:5},{i:1,a:'b',x:x,y:yb,w:w,z:0},{i:3,a:'b',x:x,y:yb,w:w,z:6}]}
function savePS(){try{localStorage.setItem('dcpp',JSON.stringify(PS))}catch(e){}}
function frameHTML(){if(!PS||!PS.length)return'';
 return PS.map(function(p,k){return'<img class="fr'+(ED?' ed':'')+'" data-p="'+k+'" alt="" loading="lazy" decoding="async" draggable="false" src="'+esc(D.frames[p.i])+'">'}).join('')}
/* đặt 4 lớp khung theo đúng bề rộng thẻ; chạy sau khi đã chèn DOM nên chỉ đọc layout một lần */
function sizeFrames(){var l=root.querySelector('.l');if(!l||!PS||!PS.length)return;var cw=l.offsetWidth,k;if(!cw)return;k=cw/WW;
 root.style.setProperty('--ft',Math.round(WT*k)+'px');root.style.setProperty('--fb',Math.round((FH-WB)*k)+'px');
 Array.prototype.forEach.call(root.querySelectorAll('.fr'),function(f,i){var p=PS[i];if(!p)return;
  f.style.left=Math.round(p.x*cw)+'px';f.style[p.a==='b'?'bottom':'top']=Math.round(p.y*cw)+'px';
  f.style.width=Math.round(p.w*cw)+'px';f.style.zIndex=ED?8:(p.z==null?1:p.z)})}
function modal(){if(!pk)return'';var h='<div class="lb" data-mdl-bg><div class="mdl"><b>Thêm game vào “'+esc(D.widgets[pk.wi].t)+'”</b><input id="q" placeholder="Gõ tên game để tìm trên Steam…" value="'+esc(pk.q||'')+'"><button data-srch>Tìm</button> <button data-mcancel style="background:#3a3c42">Đóng</button>';
 if(pk.busy)h+='<p>Đang tìm…</p>';else if(pk.items)h+=pk.items.length?pk.items.map(function(x,i){return'<div class="sr" data-pk="'+i+'"><img loading="lazy" src="'+ST+x.id+'/capsule_184x69.jpg" alt="">'+esc(x.name)+'</div>'}).join(''):'<p>Không tìm thấy.</p>';
 if(pk.err)h+='<p>Không tìm được trên Steam (trình duyệt chặn). <button data-man>Nhập thủ công</button></p>';
 return h+'</div></div>'}
function steamSearch(q){var u='https://store.steampowered.com/api/storesearch/?l=english&cc=us&term='+encodeURIComponent(q),tr=[u,'https://corsproxy.io/?url='+encodeURIComponent(u),'https://api.allorigins.win/raw?url='+encodeURIComponent(u)];
 return tr.reduce(function(p,x){return p.catch(function(){return fetch(x).then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(j){if(!j||!j.items)throw 0;return j.items.slice(0,8).map(function(i){return{id:i.id,name:i.name}})})})},Promise.reject())}
function doSearch(){var q=(sh.getElementById('q')||{}).value||'';if(!q.trim())return;pk.q=q;pk.busy=true;pk.err=false;pk.items=null;render();steamSearch(q).then(function(it){pk.items=it;pk.busy=false;render()},function(){pk.busy=false;pk.err=true;render()})}
var shown=!('IntersectionObserver' in window);
function render(){if(!shown)return;renderNow()}
function renderNow(){var keep=root.querySelector('.sc'),top=keep?keep.scrollTop:0,bd0=new Date(D.birth),yrs=Math.max(0,Math.round((Date.now()-bd0)/31557600000)),p2=function(n){return('0'+n).slice(-2)},age='<span class="hl" tabindex="0">'+bdAge(yrs)+'<span class="tip">'+bdTip(bd0,p2)+'</span></span>',u=L&&L.discord_user||{},st=L&&L.discord_status||'offline',
 nm=u.global_name||u.display_name||D.name,un=u.username||D.user,
 av=u.avatar?'https://cdn.discordapp.com/avatars/'+u.id+'/'+u.avatar+'.'+(u.avatar.indexOf('a_')===0?'gif':'png')+'?size=256':D.avatar,
 dd=D.deco||(u.avatar_decoration_data&&u.avatar_decoration_data.asset?'https://cdn.discordapp.com/avatar-decoration-presets/'+u.avatar_decoration_data.asset+'.png?size=240'+(u.avatar_decoration_data.asset.indexOf('a_')===0?'&passthrough=true':''):(document.querySelector('.avdec')||{}).src||''),
 cu=null;((L&&L.activities)||[]).forEach(function(a){if(a.type===4)cu=a});
 var hasA=L&&((L.activities||[]).some(function(a){return a.type!==4})||L.listening_to_spotify);
 var body=tab==='bang'?(ED?'<div class="bar">'+'<button data-px>Xuất khung</button><button data-pr>Đặt lại khung</button>'+'<button data-bn>Đổi banner</button><button data-exp>Xuất JSON</button><button data-rst>Đặt lại</button></div>':'')+D.widgets.map(widget).join(''):tab==='hd'?actTab():nitro();
 root.innerHTML='<div class="l">'+frameHTML()+'<div class="bn"'+(D.bannerUrl?' style="--bnr:url('+esc(D.bannerUrl)+')"':'')+'></div><div class="av" data-av title="'+T('Xem ảnh đại diện')+'"><img loading="lazy" class="p" alt="" src="'+esc(av)+'" onerror="this.onerror=null;this.src=\''+esc(D.avatar)+'\'">'+(dd?'<img loading="lazy" class="dc" alt="" src="'+esc(dd)+'">':'')+'<span class="dot" data-st="'+st+'"></span></div><div class="bb">'+(cu&&cu.emoji&&cu.emoji.name?esc(cu.emoji.name):D.bubble)+'</div><div class="in"><h3'+nameStyle(u)+'>'+esc(nm)+'</h3><div class="un">'+esc(un)+' • '+esc(D.sub||D.name)+guildTag(u)+'</div>'+(cu&&cu.state?'<p class="cs">'+esc(cu.state)+'</p>':'')+'<div class="bd">'+D.badges.slice(0,6).map(function(b){return'<span title="'+esc(T(b[1]))+'">'+bimg(b)+'</span>'}).join('')+(D.badges.length>6?'<button data-bdg aria-expanded="'+bopen+'">+'+(D.badges.length-6)+'</button>':'')+'</div>'+(bopen?'<div class="bp"><div class="bph"><b>🏅 '+T('Huy hiệu của')+' '+esc(nm)+'</b><small>'+T('Bộ sưu tập huy hiệu trên Discord.')+'</small></div><div class="bpg">'+D.badges.map(function(b){return'<span class="bt" title="'+esc(T(b[1]))+'">'+bimg(b)+'</span>'}).join('')+'</div><button class="bpx" data-bdg>'+T('Thu gọn')+'</button></div>':'')+'<div class="ab"><a class="m" href="'+esc(D.msg)+'" target="_blank" rel="noopener">💬 '+T('Tin nhắn')+'</a><i>▦</i><i>⋯</i></div><h6>'+T('Tiểu sử')+'</h6><p>'+D.bio.join('<br>').replace('{age}',age)+'<br><a href="'+esc(D.link)+'" target="_blank" rel="noopener">'+esc(D.link)+'</a></p><h6>'+T('Gia Nhập Từ')+'</h6><p>'+D.since.map(T).join(' • ')+'</p><h6>'+T('Vai trò')+'</h6><div class="rls">'+D.roles.map(function(r){return'<span class="rl" style="--c:'+r[1]+'">'+esc(T(r[0]))+'</span>'}).join('')+'</div><div class="cn">'+D.conn.map(function(c){return'<a href="'+esc(c[2])+'" target="_blank" rel="noopener" title="'+esc(c[3])+'" aria-label="'+esc(c[3])+'" style="background:'+c[1]+'">'+c[0]+'</a>'}).join('')+'</div><h6>'+T('Ghi chú (chỉ hiển thị cho bạn)')+'</h6><p>'+esc(D.note)+'</p></div></div><div class="r"><div class="tb"><button data-t="bang"'+(tab==='bang'?' class="on"':'')+'>'+T('Bảng')+'</button><button data-t="hd" class="'+(tab==='hd'?'on ':'')+(hasA?'lv':'')+'">'+T('Hoạt động')+'</button><button data-t="wl"'+(tab==='wl'?' class="on"':'')+'>'+T('Danh Sách Mong Muốn')+'</button></div><div class="sc">'+body+'</div></div>'+(lb?'<div class="lb" data-lb><img loading="lazy" alt="" src="'+esc(av.replace('size=256','size=1024'))+'"></div>':'')+modal();
 attachFx();sizeFrames();root.querySelector('.sc').scrollTop=top;root.classList.toggle('hf',!!(PS&&PS.length));tick()}
function tick(){root.querySelectorAll('.el').forEach(function(e){e.textContent=EN_()?fmt(Date.now()-(+e.dataset.s))+' elapsed':'Đã '+fmt(Date.now()-(+e.dataset.s))+' trôi qua'});
 root.querySelectorAll('.sb i').forEach(function(i){var s=+i.dataset.s,e=+i.dataset.e;i.style.width=Math.min(100,Math.max(0,(Date.now()-s)/(e-s)*100)).toFixed(1)+'%'});
 root.querySelectorAll('[data-k=s]').forEach(function(e){var d=+e.dataset.s,n=e.nextSibling;e.textContent=fmt(Date.now()-d)});
 root.querySelectorAll('[data-k=e]').forEach(function(e){e.textContent=fmt(+e.dataset.e-(+e.previousSibling.dataset.s))})}
root.addEventListener('error',function(e){var t=e.target;if(t.tagName!=='IMG')return;if(t.dataset.f){t.src=t.dataset.f;t.removeAttribute('data-f')}else if(t.classList.contains('fr')||t.closest('.g'))t.remove()},true);
root.addEventListener('click',function(e){var t=e.target,b;
 if(b=t.closest('[data-t]')){tab=b.dataset.t;picked=1;render();return}
 if(b=t.closest('[data-more]')){open[b.dataset.more]=!open[b.dataset.more];render();return}
 if(b=t.closest('[data-del]')){var p=b.dataset.del.split(',');D.widgets[p[0]].games.splice(p[1],1);save();render();return}
 if(t.closest('[data-av]')){lb=true;render();return}
 if(t.closest('[data-lb]')){lb=false;render();return}
 if(t.closest('[data-bdg]')){bopen=!bopen;render();return}
 if(b=t.closest('[data-pk]')){var it=pk.items[+b.dataset.pk];D.widgets[pk.wi].games.push({n:it.name,c:it.id});pk=null;save();render();return}
 if(t.closest('[data-srch]')){doSearch();return}
 if(t.closest('[data-mcancel]')||(t.matches&&t.matches('[data-mdl-bg]'))){pk=null;render();return}
 if(t.closest('[data-man]')){var n=prompt('Tên game'),c=n&&(prompt('Steam AppID hoặc link ảnh bìa','')||'');if(n){D.widgets[pk.wi].games.push({n:n,c:c.trim()});save()}pk=null;render();return}
 if(b=t.closest('[data-add]')){var w=D.widgets[b.dataset.add];if(w.games.length>=w.max){alert('Đã đủ '+w.max+' game');return}pk={wi:+b.dataset.add,q:'',items:null};render();setTimeout(function(){var q=sh.getElementById('q');if(q)q.focus()},0);return}
 if(t.closest('[data-px]')){var j=JSON.stringify(PS);(navigator.clipboard?navigator.clipboard.writeText(j):Promise.reject()).then(function(){alert('Đã chép, gửi đoạn này cho mình')},function(){prompt('Chép đoạn này:',j)});return}
 if(t.closest('[data-pr]')){try{localStorage.removeItem('dcpp')}catch(e){}PS=D.pieces||autoPieces();render();return}
 if(t.closest('[data-bn]')){var bu=prompt('Link ảnh hoặc GIF làm banner (để trống = xoá)','');if(bu!==null){try{bu.trim()?localStorage.setItem('dcpb',bu.trim()):localStorage.removeItem('dcpb')}catch(e){}loadBanner()}return}
 if(t.closest('[data-exp]')){var j=JSON.stringify(D.widgets);(navigator.clipboard?navigator.clipboard.writeText(j):Promise.reject()).then(function(){alert('Đã chép JSON, dán vào D.widgets trong code')},function(){prompt('Chép JSON:',j)});return}
 if(t.closest('[data-rst]')){if(confirm('Xoá bản chỉnh sửa trên trình duyệt này?')){localStorage.removeItem('dcp2');location.reload()}}});
root.addEventListener('keydown',function(e){if(e.key==='Enter'&&e.target.id==='q'){e.preventDefault();doSearch()}});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&(lb||pk)){lb=false;pk=null;render()}});
if(ED){
var dg=null;
root.addEventListener('pointerdown',function(e){var f=e.target.closest&&e.target.closest('.fr.ed');if(!f)return;e.preventDefault();var l=root.querySelector('.l'),p=PS[+f.dataset.p];dg={f:f,p:p,x:e.clientX,y:e.clientY,x0:p.x,y0:p.y,cw:l.offsetWidth};try{f.setPointerCapture(e.pointerId)}catch(x){}});
root.addEventListener('pointermove',function(e){if(!dg)return;var cw=dg.cw,dx=(e.clientX-dg.x)/cw,dy=(e.clientY-dg.y)/cw;dg.p.x=dg.x0+dx;dg.p.y=dg.p.a==='b'?dg.y0-dy:dg.y0+dy;dg.f.style.left=Math.round(dg.p.x*cw)+'px';dg.f.style[dg.p.a==='b'?'bottom':'top']=Math.round(dg.p.y*cw)+'px'});
root.addEventListener('pointerup',function(){if(dg){dg=null;savePS()}});
root.addEventListener('wheel',function(e){var f=e.target.closest&&e.target.closest('.fr.ed');if(!f)return;e.preventDefault();var p=PS[+f.dataset.p];p.w=Math.max(.05,p.w*(e.deltaY<0?1.04:.96));savePS();render()},{passive:false});
root.addEventListener('dragstart',function(e){var h=e.target.closest&&e.target.closest('[data-hw]'),g=e.target.closest&&e.target.closest('.g[data-wi]');
 if(h){drag={k:'w',a:+h.dataset.hw};h.closest('.w').classList.add('dg');e.dataTransfer.setDragImage(h.closest('.w'),20,20)}else if(g)drag={k:'g',a:+g.dataset.wi,b:+g.dataset.gi};else return;e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text','x')});
root.addEventListener('dragover',function(e){if(drag)e.preventDefault()});
root.addEventListener('drop',function(e){if(!drag)return;e.preventDefault();var A=D.widgets;
 if(drag.k==='w'){var w=e.target.closest('.w');if(w){var to=+w.dataset.w,m=A.splice(drag.a,1)[0];A.splice(to,0,m)}}
 else{var g=e.target.closest('.g[data-wi]');if(g&&+g.dataset.wi===drag.a){var gs=A[drag.a].games,m2=gs.splice(drag.b,1)[0];gs.splice(+g.dataset.gi,0,m2)}}
 drag=null;save();render()});
root.addEventListener('dragend',function(){drag=null;render()})}
/* dữ liệu trực tiếp từ Lanyard (do script trạng thái của trang chia sẻ qua window.LANY) */
var lastSig='';
function onL(){L=window.LANY||null;var sig=L?JSON.stringify(L):'';if(sig===lastSig)return;lastSig=sig;logAct();if(L&&!picked&&((L.activities||[]).some(function(a){return a.type!==4})||L.listening_to_spotify)){tab='hd'}render()}
PS=D.pieces&&D.pieces.length?D.pieces:autoPieces();
if(ED)try{var sp=JSON.parse(localStorage.getItem('dcpp')||'null');if(sp&&sp.length)PS=sp}catch(e){}
var rt;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(render,250)});
function loadBanner(){var l=[],s0;try{s0=localStorage.getItem('dcpb')}catch(e){}if(s0)l.push(s0);l=l.concat(D.banner);D.bannerUrl='';render();(function nx(i){if(i>=l.length)return;var im=new Image();im.onload=function(){D.bannerUrl=l[i];render()};im.onerror=function(){nx(i+1)};im.src=l[i]})(0)}
loadBanner();
document.addEventListener('lanyard',onL);
function applyTheme(){root.classList.toggle('lt',document.documentElement.getAttribute('data-theme')==='light')}
applyTheme();
try{new MutationObserver(function(ms){applyTheme();for(var i=0;i<ms.length;i++)if(ms[i].attributeName==='lang'){render();break}}).observe(document.documentElement,{attributes:true,attributeFilter:['lang','data-theme']})}catch(e){}
document.addEventListener('lanydbg',function(){if(tab==='hd')render()});
if(!shown){new IntersectionObserver(function(es,io){if(es.some(function(e){return e.isIntersecting})){io.disconnect();shown=true;renderNow()}},{rootMargin:'700px 0px'}).observe(host)}else renderNow();
if(window.LANY)onL();
setInterval(function(){if(!document.hidden&&tab==='hd')tick()},1000);
})();
