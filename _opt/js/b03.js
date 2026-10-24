/* ASCII REVEAL v5
   1) Chữ mã hoá rồi giải mã dần từng dòng: chữ thật luôn nằm đúng chỗ của nó, chỉ phần chưa giải mã bị tô trong suốt (CSS Custom Highlight) và có ký tự lạ vẽ đè lên, nên giải mã xong không thể bị lệch. Số thì chạy ra số.
      Ảnh vỡ thành khối pixel rồi gộp lại, xong ảnh nào hiện ngay ảnh đó (không nháy). Đồng hồ ở đầu trang chỉ chạy số rồi dừng đúng giờ, không gộp chữ.
   2) Thú: nhện, ma, thỏ, bí ngô vẽ từ hình braille (mỗi ký tự = 2x4 chấm); mèo vẫn lấy hình từ emoji đổi sang ký tự. Vẽ sẵn 1 lần thành ảnh nên chuyển động rất nhẹ.
   Không sửa DOM chữ/ảnh. Tự bỏ qua khi bật lite, tắt hiệu ứng hoặc ưu tiên giảm chuyển động.
   ENABLED=false tắt hết; ROAM=false tắt đám thú ASCII chạy quanh trang. */
(function(){
var ENABLED=true,ROAM=true,R=document.documentElement;
if(!ENABLED||R.getAttribute('data-motion')==='off'||R.classList.contains('lite')||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var layer,tx,jobs=[],raf=0,last=0,slow=0,dead=false,col={},AR=.6,sprites=[],HL=null;
var CH='01<>/\\|{}[]=+*#%&$@?!~^:;_-ABCDEFXYZ',DG='0123456789',MONO='"JetBrains Mono",ui-monospace,Menlo,Consolas,monospace';
R.classList.add('ax');
function dpr(){return Math.min(devicePixelRatio||1,2)}
function colors(){var s=getComputedStyle(R),fx=s.getPropertyValue('--fx').trim()||'255,255,255';col.z='rgba('+fx+',.9)';col.zd='rgba('+fx+',.3)';col.acc=s.getPropertyValue('--acc').trim()||'#8bf0a8';col.light=R.getAttribute('data-theme')==='light'}
function init(){
  layer=document.createElement('div');layer.setAttribute('aria-hidden','true');
  layer.style.cssText='position:absolute;left:0;top:0;width:0;height:0;z-index:9;pointer-events:none';
  document.body.appendChild(layer);
  tx=document.createElement('canvas').getContext('2d');
  /* chữ thật vẫn nằm đúng chỗ của nó; chỉ phần chưa giải mã được tô trong suốt bằng CSS Custom Highlight (::highlight(axh)) nên khi xong không thể lệch */
  try{if(window.CSS&&CSS.highlights&&window.Highlight){HL=new Highlight();CSS.highlights.set('axh',HL)}}catch(e){HL=null}
  colors();new MutationObserver(function(){colors();sprites.forEach(function(s){paint(s,1,0)})}).observe(R,{attributes:true,attributeFilter:['data-theme']});
}
/* chuẩn hoá khoảng trắng nhưng nhớ vị trí gốc của từng ký tự, để cắt Range đúng chỗ */
function norm(raw){
  var s='',mp=[],pend=0,lastI=-1,i,n=raw.length;
  for(i=0;i<n;i++){
    var ch=raw.charAt(i);
    if(/\s/.test(ch)){if(s.length)pend=1}
    else{if(pend){s+=' ';mp.push(i-1);pend=0}s+=ch;mp.push(i);lastI=i}
  }
  mp.push(lastI+1);
  return {s:s,mp:mp};
}
function clearC(c){return !c||c==='transparent'||/,\s*0\)$/.test(c)}
/* gom chữ theo dòng (mỗi đoạn chữ chỉ hỏi layout 1 lần) và ảnh trong khối */
function prep(j,er){
  var rg=document.createRange(),total=0,li=0,x0=1e9,y0=1e9,x1=-1e9,y1=-1e9,H=innerHeight,n;
  if(HL){
    var w=document.createTreeWalker(j.el,NodeFilter.SHOW_TEXT);
    while((n=w.nextNode())&&total<1500){
      var p=n.parentElement,raw=n.nodeValue;
      if(!p||!raw.trim()||/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/.test(p.tagName))continue;
      var cs=getComputedStyle(p);if(cs.visibility==='hidden'||cs.whiteSpace.indexOf('pre')===0)continue;
      /* chữ tô gradient (đã trong suốt sẵn) thì bỏ qua, để nó hiện bằng hiệu ứng riêng */
      if(clearC(cs.color)||clearC(cs.webkitTextFillColor))continue;
      rg.selectNodeContents(n);
      var rs=Array.prototype.filter.call(rg.getClientRects(),function(r){return r.width>=1&&r.height>=1});
      if(!rs.length||rs[rs.length-1].bottom<-60||rs[0].top>H+60)continue;
      var nm=norm(raw),txt=nm.s;if(!txt)continue;
      var disp=cs.textTransform==='uppercase'?txt.toUpperCase():txt;if(disp.length!==txt.length)disp=txt;
      var font=cs.fontStyle+' '+cs.fontWeight+' '+cs.fontSize+' '+cs.fontFamily,ls=cs.letterSpacing==='normal'?'0px':cs.letterSpacing,fpx=parseFloat(cs.fontSize)||16;
      tx.font=font;if('letterSpacing' in tx)tx.letterSpacing=ls;
      var m=tx.measureText('Hg'),asc=m.fontBoundingBoxAscent,dsc=m.fontBoundingBoxDescent,words=disp.split(' '),wi=0,off=0,got=0;
      for(var k=0;k<rs.length;k++){
        var cur='',r=rs[k];
        if(k===rs.length-1){cur=words.slice(wi).join(' ');wi=words.length}
        else while(wi<words.length){var t=cur?cur+' '+words[wi]:words[wi];if(cur&&tx.measureText(t).width>r.width+1.5)break;cur=t;wi++}
        if(!cur)continue;
        var L={s:cur,a:off,nd:n,mp:nm.mp,ox:r.left-er.left,oy:r.top-er.top,h:r.height,w:r.width,color:cs.color,d:Math.min(li++*55,600),span:Math.min(650,200+cur.length*12),kk:0};
        off+=cur.length+1;
        L.by=asc>0?L.oy+(L.h-asc-dsc)/2+asc:L.oy+L.h*.8;
        /* vị trí từng ký tự: ô ký tự giữ đúng chỗ, nên chữ lạ không bị dồn lại với nhau */
        var cum=new Float32Array(cur.length+1),tt=0,q;
        for(q=0;q<cur.length;q++){tt+=tx.measureText(cur.charAt(q)).width;cum[q+1]=tt}
        var scl=tt>0?r.width/tt:1;for(q=1;q<=cur.length;q++)cum[q]*=scl;
        L.xs=cum;L.sf=Math.max(5,Math.min(fpx,(r.width/cur.length)/AR));
        L.rg=document.createRange();L.rg.setStart(n,nm.mp[L.a]);L.rg.setEnd(n,nm.mp[Math.min(txt.length,L.a+cur.length)]);
        HL.add(L.rg);
        x0=Math.min(x0,L.ox);y0=Math.min(y0,L.oy);x1=Math.max(x1,L.ox+L.w);y1=Math.max(y1,L.oy+L.h);
        j.dur=Math.max(j.dur,L.d+L.span+80);j.lines.push(L);got++;
      }
      if(got)total+=txt.length;
    }
  }
  var ims=j.el.querySelectorAll('img');
  for(var z=0;z<ims.length;z++){
    var im=ims[z];if(!im.complete||!im.naturalWidth)continue;
    var ir=im.getBoundingClientRect();if(ir.width<8||ir.height<8||ir.bottom<0||ir.top>H)continue;
    var rs2='0',pp=im,zz;for(zz=0;zz<3&&pp&&(parseFloat(rs2)||0)===0;zz++,pp=pp.parentElement)rs2=getComputedStyle(pp).borderTopLeftRadius;
    var rd=rs2.slice(-1)==='%'?Math.min(ir.width,ir.height)*parseFloat(rs2)/100:parseFloat(rs2)||0,d=j.imgs.length*80;
    var o={im:im,d:d,rd:rd,done:0,x:ir.left-er.left,y:ir.top-er.top,w:ir.width,h:ir.height};
    x0=Math.min(x0,o.x);y0=Math.min(y0,o.y);x1=Math.max(x1,o.x+o.w);y1=Math.max(y1,o.y+o.h);
    j.imgs.push(o);j.dur=Math.max(j.dur,d+940);im.classList.add('axi');
  }
  j.bx=Math.floor(x0)-2;j.by=Math.floor(y0)-2;j.bw=Math.ceil(x1-x0)+4;j.bh=Math.ceil(y1-y0)+4;
}
/* ảnh xong là hiện ngay ảnh thật trong cùng khung hình, không đợi các khối khác (hết nháy) */
function imgDone(I,keep){
  if(I.done)return;I.done=1;I.hold=keep?4:0;var im=I.im;
  im.classList.add('axd');im.classList.remove('axi');
  setTimeout(function(){im.classList.remove('axd')},120);
}
function end(j){
  var i=jobs.indexOf(j);if(i>-1)jobs.splice(i,1);
  clearTimeout(j.to);
  if(HL)j.lines.forEach(function(L){HL.delete(L.rg)});
  j.imgs.forEach(imgDone);
  if(j.c&&j.c.parentNode)j.c.parentNode.removeChild(j.c);
}
function place(j){var d=j.dp;j.c.style.left=(Math.round((j.ex+j.bx)*d)/d)+'px';j.c.style.top=(Math.round((j.ey+j.by)*d)/d)+'px'}
function glyph(cx,L,c,x,y,step){
  var ch=L.s.charAt(c),cc=ch.charCodeAt(0);
  if(ch===' '||(cc>=768&&cc<=879))return;
  /* số thì chạy ra số, chữ thì chạy ra ký tự lạ */
  var set=(cc>=48&&cc<=57)?DG:CH;
  cx.fillText(set.charAt((c*7+step*(1+(c&3)))%set.length),x+(L.xs[c]+L.xs[c+1])/2,y);
}
function draw(j,e){
  var cx=j.cx,d=j.dp,a,L,c,step=(j.t0+e)/80|0,ls='letterSpacing' in cx;
  /* khối phủ luôn bám theo phần tử thật nếu trang xê dịch */
  var er=j.el.getBoundingClientRect(),ex=er.left+pageXOffset,ey=er.top+pageYOffset;
  if(Math.abs(ex-j.ex)>.4||Math.abs(ey-j.ey)>.4){j.ex=ex;j.ey=ey;place(j)}
  cx.setTransform(d,0,0,d,0,0);cx.clearRect(0,0,j.bw,j.bh);cx.textBaseline='alphabetic';cx.textAlign='center';
  for(a=0;a<j.lines.length;a++){
    L=j.lines[a];
    var len=L.s.length,le=e-L.d,kk=le<=0?0:Math.min(len,Math.floor(le/L.span*len));
    if(kk!==L.kk){L.kk=kk;L.rg.setStart(L.nd,L.mp[L.a+kk])}
    if(kk>=len)continue;
    var x=L.ox-j.bx,y=L.by-j.by;
    cx.font=L.sf+'px '+MONO;if(ls)cx.letterSpacing='0px';
    cx.fillStyle=L.color;cx.globalAlpha=.45;
    for(c=kk+3;c<len;c++)glyph(cx,L,c,x,y,step);
    cx.globalAlpha=1;cx.fillStyle=col.acc;
    for(c=kk;c<kk+3&&c<len;c++)glyph(cx,L,c,x,y,step);
  }
  cx.globalAlpha=1;cx.textAlign='start';
  for(a=0;a<j.imgs.length;a++){
    var I=j.imgs[a],p=(e-I.d)/800;
    if(!I.done&&p>=1)imgDone(I,1);
    /* vài khung hình sau khi ảnh thật hiện, canvas vẫn vẽ đúng ảnh đó để không bị hở */
    if(I.done){if(I.hold<=0)continue;I.hold--;p=.999}
    var im=I.im,ir=im.getBoundingClientRect();if(ir.width<2||ir.height<2)continue;
    var ix=ir.left+pageXOffset-(j.ex+j.bx),iy=ir.top+pageYOffset-(j.ey+j.by),iw=ir.width,ih=ir.height,
        cols=I.done?Math.ceil(Math.max(iw,ih)*d):[3,6,12,24,48,96,192][Math.max(0,Math.floor(p*7))],bs=Math.max(iw,ih)/cols,
        tw=Math.max(1,Math.round(iw/bs)),th=Math.max(1,Math.round(ih/bs)),
        nw=im.naturalWidth,nh=im.naturalHeight,sc=Math.max(iw/nw,ih/nh),sw=iw/sc,sh=ih/sc;
    if(tx.canvas.width!==tw)tx.canvas.width=tw;if(tx.canvas.height!==th)tx.canvas.height=th;
    tx.imageSmoothingQuality='high';tx.drawImage(im,(nw-sw)/2,(nh-sh)/2,sw,sh,0,0,tw,th);
    cx.save();
    if(cx.roundRect){cx.beginPath();cx.roundRect(ix,iy,iw,ih,I.rd);cx.clip()}
    cx.imageSmoothingEnabled=false;cx.drawImage(tx.canvas,0,0,tw,th,ix,iy,iw,ih);cx.restore();
  }
}
function loop(){
  raf=0;var t=performance.now();
  for(var k=jobs.length-1;k>=0;k--){var j=jobs[k],e=t-j.t0;if(e>=j.dur||!j.el.isConnected)end(j);else draw(j,Math.max(0,e))}
  var c=performance.now()-t;
  if(c>12){if(++slow>8){jobs.slice().forEach(end);dead=true}}else if(slow>0)slow--;
  if(jobs.length)raf=requestAnimationFrame(loop);
}
function cover(el){
  if(dead||!el)return;
  if(!layer)init();
  var now=performance.now(),er=el.getBoundingClientRect();
  var t0=now-last<350?Math.min(Math.max(now,last+80),now+400):now;last=t0;
  var j={el:el,t0:t0,lines:[],imgs:[],dur:0,ex:er.left+pageXOffset,ey:er.top+pageYOffset};
  prep(j,er);
  if(!j.dur||j.bw<4||j.bh<4){end(j);return}
  var d=dpr();while(j.bw*j.bh*d*d>8e6&&d>.5)d-=.25;j.dp=d;
  var c=document.createElement('canvas');c.width=Math.round(j.bw*d);c.height=Math.round(j.bh*d);
  c.style.cssText='position:absolute;width:'+j.bw+'px;height:'+j.bh+'px';
  j.c=c;j.cx=c.getContext('2d');place(j);layer.appendChild(c);
  jobs.push(j);j.to=setTimeout(function(){end(j)},j.dur+(t0-now)+2500);
  draw(j,0);
  if(!raf)raf=requestAnimationFrame(loop);
}
window.AXR={cover:cover};

/* ===== CON VẬT ASCII: lấy hình từ emoji, đổi sang ký tự theo độ sáng, giữ màu thật nếu emoji nhiều màu, vẽ sẵn thành ảnh ===== */
function cv2(w,h){var c=document.createElement('canvas');c.width=w;c.height=h;return c}
var ART={"spider": ["⠀⠀⠀⠀⠀⢠⠖⠀⡜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⡀⠈⣄⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⢠⡟⠀⣸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⡀⠸⣆⠀⠀⠀⠀", "⠀⠀⠀⢠⡿⠀⢰⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⠀⢹⣇⠀⠀⠀", "⠀⠀⠀⣸⡇⠀⣼⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡄⠀⣿⡀⠀⠀", "⠀⠀⢠⣿⠀⢸⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣧⠀⢹⡇⠀⠀", "⠀⠀⣸⣿⠀⠘⢿⠿⠶⢶⣻⢿⣦⣠⣦⢠⣤⣠⡿⢛⡿⠷⠿⢿⠟⠀⢸⣿⡀⠀", "⠀⠠⣿⣧⣤⣤⣴⡶⠿⠿⠛⠻⣿⣿⣿⣿⣿⣿⠾⠿⠿⠿⠷⣶⣤⣤⣼⣿⡇⠀", "⠀⠀⠈⠛⠛⠉⠀⢀⣴⡿⠛⣻⣿⣿⣿⣿⣿⣿⣟⠛⠻⣷⣄⠀⠀⠉⠛⠏⠀⠀", "⠀⠀⠀⠀⠀⣠⣶⠟⢉⣤⣾⡿⣹⣿⣿⣿⣿⣷⠻⢷⣦⡌⠻⣷⣄⡀⠀⠀⠀⠀", "⠀⠀⣀⣴⡾⠏⠁⠀⢠⣿⣏⠀⢹⣿⣿⣿⣿⣿⠀⢸⣿⡇⠀⠀⠙⢿⣦⣄⠀⠀", "⢸⣿⡟⠉⠀⠀⠀⠀⠰⣿⡗⠀⠈⣿⣿⣿⣿⡏⠀⢸⣿⡇⠀⠀⠀⠀⠈⠹⣿⣿", "⢸⣿⡇⠀⠀⠀⠀⠀⢘⣿⡇⠀⠀⢹⣿⣿⣿⠀⠀⠘⣿⡇⠀⠀⠀⠀⠀⠀⣿⡏", "⠈⣿⡇⠀⠀⠀⠀⠀⢨⣿⡇⠀⠀⠀⢿⣿⠇⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⣿⡇", "⠀⢻⣷⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡇⠀⠀⠀⠀⠀⢸⣿⠃", "⠀⠸⣿⠀⠀⠀⠀⠀⠀⢿⡧⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⢸⡏⠀", "⠀⠀⢹⡆⠀⠀⠀⠀⠀⢸⡗⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⣿⠁⠀", "⠀⠀⠈⢧⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⣸⡇⠀⠀⠀⠀⠀⢸⠇⠀⠀", "⠀⠀⠀⠘⠆⠀⠀⠀⠀⠀⢹⡆⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⢀⠎⠀⠀⠀", "⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⢷⠀⠀⠀⠀⠀⠀⢰⠃⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢆⠀⠀⠀⠀⢀⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"], "ghost": ["⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣆⠀", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⠁⠀⠿⢿⣿⡿⣿⣿⡆", "⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣦⣤⣴⣿⠃⠀⠿⣿⡇", "⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⡿⠋⠁⣿⠟⣿⣿⢿⣧⣤⣴⣿⡇", "⠀⠀⢀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠘⠁⢸⠟⢻⣿⡿⠀", "⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣴⣇⢀⣤⠀⠀⠀⠀⠘⣿⠃⠀", "⠀⠀⠀⢈⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣴⣿⢀⣴⣾⠇⠀⠀", "⣀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀", "⠉⠉⠉⠉⣡⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀", "⠀⠀⣠⣾⣿⣿⣿⣿⡿⠟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀", "⣴⡾⠿⠿⠿⠛⠋⠉⠀⢸⣿⣿⣿⣿⠿⠋⢸⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡿⠟⠋⠁⠀⠀⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀"], "rabbit": ["⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⢀⣀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⠀⠸⡄⡇⠀⠱⡀⠀", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⡀⠀⢱⢣⠀⠀⡇⠀", "⠀⠀⠀⠀⠀⢀⡠⠤⠤⡀⠀⠱⡀⠸⣈⠇⢠⠃⠀", "⠀⡠⠤⢄⠔⠁⠀⠀⠀⠈⠉⢢⠃⠀⠀⠀⠫⡀⠀", "⢸⠀⢠⠃⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠿⠀⠀⢱⠀", "⠈⠣⡇⠀⠀⠀⠉⡆⠀⠀⠀⠀⠀⠀⠀⠀⢲⠈⡆", "⠀⠀⢣⠀⠀⠀⢀⠇⠀⠀⠀⠀⠑⠤⣀⣀⣁⡡⠁", "⠀⠀⠈⢧⠀⠀⠑⠒⠒⢦⠀⠀⢠⠀⠠⠤⢧⡀⠀", "⠀⠀⠀⠀⠓⠒⠦⠤⠤⠜⠒⠒⠚⠦⠤⠤⠤⠃⠀"], "pump": ["⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⣀⣴⡶⢤⣤⣿⣿⣿⣧⣤⣶⣤⣄⣀⡀⠀⠀⠀⠀⠀", "⠀⠀⣠⣴⡟⢋⣭⢟⡻⠿⣿⠟⠛⠛⢻⡟⠛⠳⢤⡈⠩⣟⡶⣄⠀⠀", "⠀⣾⡿⠋⢰⡿⠟⠉⠀⣰⡟⠃⠀⠀⠀⢻⡄⠀⠀⠙⣦⠈⠙⠘⣧⠀", "⣸⢁⠁⠀⡟⢀⣠⣾⣧⡟⠀⠀⠀⠀⠀⠀⢷⣼⣦⡀⠙⣧⠀⠀⠹⡇", "⡟⢸⠀⢸⢣⣾⣿⣿⣿⣇⠀⠀⢀⠀⠀⠀⣼⣿⣿⣿⣦⣼⠀⠀⠀⡇", "⣇⠈⠀⢸⠀⠉⠉⠉⣿⠛⠁⢰⣿⣷⡀⠘⠛⡏⠉⠉⠉⢸⠀⠀⠀⡇", "⢹⡀⠀⢸⡀⢰⣦⣀⡿⠐⠰⠿⠿⠿⠿⠀⠀⣇⣤⣾⡄⢸⠀⠀⢰⡟", "⠈⣷⠀⠘⡇⢸⣿⣿⣿⣿⣷⣶⣶⣶⡀⢀⣿⣿⣿⣿⠁⡿⠀⢠⡟⠀", "⠀⠈⢧⣀⢻⡄⠙⢿⣿⠛⣻⣿⣿⣿⣿⣿⣿⣿⢟⡁⣰⠃⣠⠟⠀⠀", "⠀⠀⠀⠙⠻⢿⣆⣩⣹⡀⠈⠟⠛⢛⠛⠩⣽⣳⣿⣾⣿⠞⠉⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⠈⠙⠛⠻⢦⣥⣦⣤⣴⠾⠛⠋⠉⠁⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"], "cat": ["⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣶⣦⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠠⣾⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⣤⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⡿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⠋⠁⠀⠀⠈⠹⣿⣿⣿⣿⣿⡿⠋⠀⠀⠈⠻⣿⣿⣿⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⣿⣿⣿⣿⠃⠀⠀⠀⣴⣶⡄⢹⣿⣿⣿⣿⠃⢰⣶⡄⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⣿⣿⣿⣿⡆⠀⠀⠀⠹⠿⠁⣸⣿⣿⣿⣿⡀⠘⡿⠃⠀⢀⣿⣿⣿⡆⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⣯⣹⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣃⣀⣀⣀⣀⠀", "⠀⠾⠿⠟⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠋⠉⠉⠋⠀", "⠠⣤⣤⣶⡶⠿⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠛⠛⠛⠷⣶⡄", "⠀⠀⠉⢀⣠⣶⠾⠟⠉⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⠛⠳⢶⣦⣄⡀⠀⠀", "⠀⠀⠀⠟⠋⠁⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠁⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀"]};
/* ===== THÚ BRAILLE: nhện, ma, thỏ, bí ngô vẽ từ hình braille (mỗi ký tự = 2x4 chấm), vẽ sẵn 1 lần thành ảnh ===== */
var BRD={spider:100,ghost:92,pump:80,rabbit:78,cat:84},TINT={pump:['#ff9a2e','#e8650a'],cat:['#ffa94d','#e0700f'],spider:['#b68cff','#7a3fe0']},BX=[0,0,0,1,1,1,0,1],BY=[0,1,2,0,1,2,3,3];
function makeBraille(name,H){
  var rows=ART[name],nr=rows.length,nc=rows[0].length,cv=new Uint8Array(nr*nc),x,y;
  for(y=0;y<nr;y++)for(x=0;x<nc;x++)cv[y*nc+x]=Math.max(0,rows[y].charCodeAt(x)-0x2800)&255;
  var p=H/(nr*4),w=Math.ceil(nc*2*p),d=dpr(),c=cv2(Math.round(w*d),Math.round(H*d));
  var sp={tint:TINT[name],br:1,cols:nc,rows:nr,cv:cv,pitch:p,w:w,h:Math.ceil(H),c:c,dp:d};
  sprites.push(sp);paintB(sp,0,0);return sp;
}
/* a = độ giải mã 0..1: ô chưa tới lượt thì trống, ô sắp tới thì nháy chấm lạ màu nhấn, rồi hạ cánh thành hình thật */
function paintB(sp,a,step){
  var g=sp.c.getContext('2d'),x,y,i,v,hs,u,p=sp.pitch,ds=Math.max(.9,p*.86),pad=(p-ds)/2,last='',fs;
  g.setTransform(sp.dp,0,0,sp.dp,0,0);g.clearRect(0,0,sp.w,sp.h);
  for(y=0;y<sp.rows;y++)for(x=0;x<sp.cols;x++){
    v=sp.cv[y*sp.cols+x];if(!v)continue;fs=sp.tint?sp.tint[col.light?1:0]:col.z;
    if(a<1){
      hs=Math.imul((x+1)*374761393^(y+1)*668265263,1274126177);hs^=hs>>>15;hs>>>=0;u=(hs&255)/255;
      if(u>a)continue;
      if(u>a-.25){v=((hs>>>8)+step*37)&255||1;fs=col.acc}
    }
    if(fs!==last){g.fillStyle=fs;last=fs}
    for(i=0;i<8;i++)if(v&(1<<i))g.fillRect((x*2+BX[i])*p+pad,(y*4+BY[i])*p+pad,ds,ds);
  }
}
function paint(sp,a,step){paintB(sp,a,step)}

/* ===== THÚ ASCII: mỗi con một chỗ riêng, có nút tắt =====
   nhện: đu tơ theo bạn suốt cả trang, bấm vào thì rụt tơ chạy mất rồi lát sau thả xuống chỗ khác
   mèo: đi quanh avatar ở phần giới thiệu · ma: lơ lửng quanh đồng hồ ở đầu trang · bí ngô: nhảy dưới đáy màn hình, thấy chuột lại gần là né
   thỏ: nhảy trên mép chân trang · cú: đậu ở tiêu đề Nhật ký, thỉnh thoảng bay sang chỗ khác · dơi: thỉnh thoảng bay ngang qua trang
   Một canvas cố định duy nhất, chỉ xoá/vẽ lại vùng từng con chiếm; tự giảm xuống 30 khung/giây (rồi tự tắt) nếu máy chậm. */
function roam(){
  if(window.__roam)return;window.__roam=1;
  var cv=document.createElement('canvas'),g=cv.getContext('2d'),vw=0,vh=0,dp=1,C=[],px=-1e4,py=-1e4,sdy=0,lastY=scrollY,raf=0,lt=0,T=0,dead=false,half=false,acc=0,cost=0,nc=0,off=false,
      fine=matchMedia('(pointer:fine)').matches,small=innerWidth<760,SC=small?.8:1,A0=.85,spider=null,hit=null,btn=null;
  try{off=localStorage.getItem('pets')==='off'}catch(e){}
  cv.setAttribute('aria-hidden','true');
  cv.style.cssText='position:fixed;left:0;top:0;z-index:8;pointer-events:none';
  function rnd(a,b){return a+Math.random()*(b-a)}
  function sm(x){return x<=0?0:x>=1?1:x*x*(3-2*x)}
  function fit(force){
    var w=innerWidth,h=innerHeight;
    if(!force&&w===vw&&Math.abs(h-vh)<140)return;
    vw=w;vh=h;dp=Math.min(dpr(),2);while(vw*vh*dp*dp>5e6&&dp>1)dp-=.25;
    cv.width=Math.round(vw*dp);cv.height=Math.round(vh*dp);cv.style.width=vw+'px';cv.style.height=vh+'px';
    g.setTransform(dp,0,0,dp,0,0);C.forEach(function(c){c.dr=null});
  }
  function mark(c,x,y,w,h){
    var x1=x+w,y1=y+h;
    if(!c.dr)c.dr=[x,y,x1,y1];else{if(x<c.dr[0])c.dr[0]=x;if(y<c.dr[1])c.dr[1]=y;if(x1>c.dr[2])c.dr[2]=x1;if(y1>c.dr[3])c.dr[3]=y1}
  }
  function put(c,x,y,flip,sx,sy,rot,al){
    var s=c.sp,cx=x+s.w/2,cy=y+s.h/2,ca=Math.cos(rot),sa=Math.sin(rot),fx=(flip?-1:1)*sx;
    g.setTransform(dp*ca*fx,dp*sa*fx,-dp*sa*sy,dp*ca*sy,dp*cx,dp*cy);
    g.globalAlpha=al;g.drawImage(s.c,-s.w/2,-s.h/2,s.w,s.h);
    g.setTransform(dp,0,0,dp,0,0);g.globalAlpha=1;
    var r=Math.hypot(s.w,s.h)/2*Math.max(sx,sy,1)+3;mark(c,cx-r,cy-r,2*r,2*r);
  }
  function add(name,cols,delay,kind,cfg,sel,sel2){
    var anc=sel?document.querySelector(sel):null;
    if(sel&&!anc)return;
    var sp=makeBraille(name,Math.round(BRD[name]*SC));
    var c={n:name,sp:sp,k:kind,cfg:cfg||{},anc:anc,anc2:sel2?document.querySelector(sel2):null,vis:false,wait:delay,dec:0,ap:-1,t:rnd(0,40),st:0,tm:0,x:0,y:0,sx:1,sy:1,rot:0,flip:false,dir:Math.random()<.5?1:-1,face:1,kp:1,am:1,dr:null,near:false,leaving:false,shown:false,on:true};
    C.push(c);if(name==='spider')spider=c;
  }
  function show(c){
    c.vis=true;c.leaving=false;c.kp=1;c.k.spawn(c);
    if(c.k.decode&&!c.shown){c.dec=0;c.ap=-1}else{c.dec=1;c.ap=-1}
    c.shown=true;
  }
  /* vùng đi lại của con vật bám vào một phần tử trên trang (hoặc cả màn hình) */
  function area(c){
    var s=c.sp,a=c.ar;
    if(!a)return{lo:6,hi:Math.max(10,vw-s.w-6),gy:vh-s.h-(c.cfg.gap||8)};
    return{lo:a.left+(c.cfg.pad||10),hi:Math.max(a.left+20,a.right-s.w-(c.cfg.pad||10)),gy:a.top-s.h+(c.cfg.sink||6)};
  }

  /* nhện chỉ đu dây ở hai góc trên, sát mép màn hình, không vướng nội dung */
  function pickX(c){
    var s=c.sp,m=s.w/2+10,z=Math.max(24,vw*.05);
    return Math.random()<.5?m+rnd(0,z):vw-m-rnd(0,z);
  }
  var KIND={
    /* ma: lơ lửng quanh đồng hồ ở đầu trang, tan ra rồi hiện lại chỗ khác */
    ghost:{decode:true,anchor:true,
      spawn:function(c){c.u=rnd(.1,.9);c.v=rnd(.1,.8);c.tu=c.u;c.tv=c.v;c.vu=0;c.vv=0;c.life=rnd(14,22)},
      after:function(){return rnd(3,7)},
      tick:function(c,dt){
        var s=c.sp,a=c.ar;c.t+=dt;c.life-=dt;if(c.life<=0)c.leaving=true;
        var dx=c.tu-c.u,dy=c.tv-c.v,d=Math.hypot(dx,dy);
        if(d<.04){c.tu=rnd(.05,.95);c.tv=rnd(.05,.85)}
        else{var e=Math.min(1,dt*.9);c.vu+=(dx/d*.07-c.vu)*e;c.vv+=(dy/d*.05-c.vv)*e}
        c.u+=c.vu*dt;c.v+=c.vv*dt;
        c.x=a.left+c.u*Math.max(10,a.width-s.w);c.y=a.top+c.v*Math.max(10,a.height-s.h)+Math.sin(c.t*1.2)*7;
        c.sx=1;c.sy=1+Math.sin(c.t*2.1)*.025;c.rot=Math.sin(c.t*.8)*.04;c.flip=c.vu<0;c.am=.8+.2*Math.sin(c.t*2.3);
      }},
    /* nhện: đu theo bạn khắp trang. st 0 = lủng lẳng, 1 = tự rụt tơ, 2 = thả tơ xuống, 3 = bị bấm: rụt nhanh rồi chạy mất, 4 = trốn một lúc */
    spider:{decode:true,
      spawn:function(c){var s=c.sp;c.Lb=rnd(100,170);c.hx=pickX(c);c.amp=Math.max(30,vh*.07);c.L=-s.h-10;c.ph=rnd(0,6);c.st=2;c.tm=rnd(12,22);c.swing=0},
      flee:function(c){if(c.st===3||c.st===4)return;c.st=3;c.fv=0},
      tick:function(c,dt){
        var s=c.sp,hy;c.ph+=dt;
        c.swing+=((Math.max(-1,Math.min(1,-sdy/60)))*.25-c.swing)*Math.min(1,dt*4);
        if(c.st===0){
          c.tm-=dt;c.L+=(c.Lb+(Math.sin(c.ph*.6)*.5+.5)*c.amp-c.L)*Math.min(1,dt*3);
          c.hx+=Math.sin(c.ph*.25)*6*dt;
          if(c.tm<=0)c.st=1;
        }else if(c.st===1){
          c.L-=95*dt;if(c.L<-s.h-12){c.Lb=rnd(100,170);c.hx=pickX(c);c.st=2}
        }else if(c.st===2){c.L+=170*dt;if(c.L>=c.Lb){c.st=0;c.tm=rnd(12,22)}}
        else if(c.st===3){
          c.fv+=dt*1500;c.L-=c.fv*dt;c.ph+=dt*30;
          if(c.L<-s.h-12){c.st=4;c.tm=rnd(4,8);c.L=-s.h-12}
        }else{c.tm-=dt;if(c.tm<=0){c.Lb=rnd(100,170);c.hx=pickX(c);c.st=2}}
        c.hx=Math.max(s.w/2+4,Math.min(vw-s.w/2-4,c.hx));
        c.ang=Math.sin(c.ph*1.15)*.07+c.swing*.5+(c.st===3?Math.sin(c.ph)*.12:0);c.x=c.hx-s.w/2;c.y=c.L;
      },
      draw:function(c,al){
        var s=c.sp,L=c.L,a=c.ang,ca=Math.cos(a),sa=Math.sin(a);
        if(L<-s.h-6)return;
        g.setTransform(dp*ca,dp*sa,-dp*sa,dp*ca,dp*c.hx,0);
        g.globalAlpha=al*.8;g.fillStyle=col.z;g.fillRect(-.5,0,1,Math.max(0,L+s.h*.3));
        g.globalAlpha=al;g.drawImage(s.c,-s.w/2,L,s.w,s.h);
        g.setTransform(dp,0,0,dp,0,0);g.globalAlpha=1;
        mark(c,c.hx-s.w/2-(L+s.h)*.14-4,0,s.w+(L+s.h)*.28+8,L+s.h+8);
      }},
    /* nhảy: bí ngô (đáy màn hình, né chuột) và thỏ (mép chân trang) */
    hop:{decode:true,
      spawn:function(c){var s=c.sp;c.x=-1;c.st=0;c.tm=rnd(.5,1.5);c.sq=0;c.p=0;c.first=true},
      tick:function(c,dt){
        var s=c.sp,f=c.cfg,ar=area(c);c.t+=dt;
        if(c.first){c.x=rnd(ar.lo,ar.hi);c.first=false}
        if(c.st===0){
          c.tm-=dt;c.sq=Math.max(0,c.sq-dt*5);c.x=Math.max(ar.lo,Math.min(ar.hi,c.x));
          var br=1+Math.sin(c.t*2.4)*.018;
          c.sx=1+.1*c.sq;c.sy=(1-.13*c.sq)*br;c.rot=0;c.y=ar.gy+(1-c.sy)*s.h/2;
          if(f.flee&&c.near&&c.tm>.08){c.tm=.08;c.dir=(px>c.x+s.w/2)?-1:1}
          if(c.tm<=0){
            var dist=rnd(f.d0,f.d1);
            if(f.flee&&c.near)dist=rnd(f.d1,f.d1*1.6);else if(Math.random()<.22)c.dir=-c.dir;
            if(c.x<ar.lo+20)c.dir=1;else if(c.x>ar.hi-20)c.dir=-1;
            c.a0=c.x;c.a1=Math.max(ar.lo,Math.min(ar.hi,c.x+c.dir*dist));c.st=1;c.p=0;
          }
        }else{
          c.p+=dt/(f.flee&&c.near?f.air*.8:f.air);
          if(c.p>=1){c.x=c.a1;c.y=ar.gy;c.st=0;c.tm=(f.flee&&c.near)?.05:rnd(f.r0,f.r1);c.sq=1;c.sx=1.1;c.sy=.87;c.rot=0}
          else{var p=c.p,sn=Math.sin(p*Math.PI);c.x=c.a0+(c.a1-c.a0)*p;c.y=ar.gy-4*p*(1-p)*f.h;c.sx=1-.05*sn;c.sy=1+.1*sn;c.rot=c.dir*(p-.5)*.3}
        }
        c.flip=c.dir*c.face<0;
      }},
    /* mèo: đi dạo ngay dưới avatar (không che ảnh), thỉnh thoảng ngồi nghỉ */
    walk:{decode:true,anchor:true,
      spawn:function(c){c.first=true;c.st=0;c.tm=rnd(4,8)},
      tick:function(c,dt){
        var s=c.sp,a=c.ar,lo=Math.max(6,a.left-s.w*.45),hi=Math.max(lo+40,a.right+60),gy=a.bottom+a.height*.1+4;
        c.t+=dt;c.sx=1;c.rot=0;
        if(c.first){c.x=rnd(lo,hi);c.first=false}
        if(c.st===0){
          var fast=c.near;if(fast&&!c.fl)c.dir=(px>c.x+s.w/2)?-1:1;c.fl=fast;
          c.x+=c.dir*(fast?100:34)*dt;
          if(c.x<lo){c.x=lo;c.dir=1}else if(c.x>hi){c.x=hi;c.dir=-1}
          c.y=gy-Math.abs(Math.sin(c.t*(fast?15:7)))*(fast?4:2);c.sy=1;c.tm-=dt;
          if(c.tm<=0){if(Math.random()<.55){c.st=1;c.tm=rnd(3,6)}else{c.tm=rnd(5,10);if(Math.random()<.4)c.dir=-c.dir}}
        }else{
          c.y=gy;c.sy=1+Math.sin(c.t*2)*.015;c.tm-=dt;
          if(c.near||c.tm<=0){c.st=0;c.tm=rnd(6,12)}
        }
        c.flip=c.dir*c.face<0;
      }},
  };

  function frame(ts){
    raf=0;if(dead||off||document.hidden)return;
    var dt=Math.min(.05,(ts-lt)/1000);lt=ts;if(!(dt>0))dt=.016;
    if(half){acc+=dt;if(acc<.032){raf=requestAnimationFrame(frame);return}dt=acc;acc=0}
    var t0=performance.now(),i,c,y=scrollY,hv=false;
    T+=dt;sdy=Math.max(-150,Math.min(150,y-lastY));lastY=y;
    for(i=0;i<C.length;i++){c=C[i];if(c.dr){g.clearRect(Math.floor(c.dr[0])-1,Math.floor(c.dr[1])-1,Math.ceil(c.dr[2]-c.dr[0])+3,Math.ceil(c.dr[3]-c.dr[1])+3);c.dr=null}}
    for(i=0;i<C.length;i++){
      c=C[i];
      if(!c.vis){c.wait-=dt;if(c.wait<=0)show(c);continue}
      if(c.anc){
        var ar=c.anc.getBoundingClientRect();c.ar=ar;
        if(ar.bottom<-40||ar.top>vh+40||ar.width<10){continue}
      }
      if(c.dec<1||c.leaving){
        c.dec=Math.max(0,Math.min(1,c.dec+(c.leaving?-dt:dt)/1.4));
        var st=(T*11)|0;
        if(c.dec<1&&c.ap!==st){c.ap=st;paint(c.sp,c.dec,st)}
        else if(c.dec>=1&&c.ap!==-2){paint(c.sp,1,0);c.ap=-2}
        if(c.leaving&&c.dec<=0){c.vis=false;c.leaving=false;c.wait=c.k.after?c.k.after():5;continue}
      }
      var s=c.sp,kp=1;
      if(fine){
        var dx=px-(c.x+s.w/2),dy=py-(c.y+s.h/2),d=Math.hypot(dx,dy),R0=c.cfg.flee?190:150;
        c.near=d<R0;kp=sm((d-70)/130)*.82+.18;
      }
      if(c.n==='spider')kp=1;
      c.kp+=(kp-c.kp)*Math.min(1,dt*6);
      c.k.tick(c,dt);
      var al=A0*c.am*Math.min(1,c.dec*5)*c.kp;
      if(c.k.draw)c.k.draw(c,al);else put(c,c.x,c.y,c.flip,c.sx,c.sy,c.rot,al);
    }
    /* vùng bấm được của con nhện */
    if(hit){
      if(spider&&spider.vis&&spider.st!==3&&spider.st!==4&&spider.L>-spider.sp.h+8&&spider.dec>.5){
        hit.style.cssText='display:block;transform:translate('+Math.round(spider.hx-spider.sp.w/2)+'px,'+Math.round(spider.L)+'px);width:'+spider.sp.w+'px;height:'+spider.sp.h+'px';hv=true;
      }
      if(!hv)hit.style.display='none';
    }
    cost+=performance.now()-t0;
    if(++nc>=60){var avg=cost/nc;cost=0;nc=0;if(avg>5){if(half){dead=true;cv.style.display='none';if(hit)hit.style.display='none';return}half=true}}
    raf=requestAnimationFrame(frame);
  }
  function run(){if(!raf&&!dead&&!off&&!document.hidden){lt=performance.now();raf=requestAnimationFrame(frame)}}
  function setOff(v){
    off=v;try{localStorage.setItem('pets',v?'off':'on')}catch(e){}
    if(btn){btn.setAttribute('aria-pressed',v?'false':'true');btn.title=v?'Bật thú ASCII':'Tắt thú ASCII';btn.setAttribute('aria-label',btn.title);btn.classList.toggle('off',v)}
    R.classList.toggle('pets-on',!v);
    if(v){if(raf)cancelAnimationFrame(raf);raf=0;cv.style.display='none';if(hit)hit.style.display='none'}
    else{dead=false;half=false;cv.style.display='';g.clearRect(0,0,vw,vh);C.forEach(function(c){c.dr=null});run()}
  }

  function start(){
    var st=document.createElement('style');
    st.textContent='.petb{position:fixed;right:max(16px,env(safe-area-inset-right,0px));bottom:calc(max(16px,env(safe-area-inset-bottom,0px)) + 108px);z-index:9;width:44px;height:44px;padding:0;border-radius:50%;border:1px solid var(--line-hi);background:var(--card);color:var(--muted);display:grid;place-items:center;cursor:pointer}.petb:hover{color:var(--text);border-color:var(--white)}.petb svg{width:1.3rem;height:1.3rem;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.petb.off{opacity:.6}.petb.off::after{content:"";position:absolute;width:26px;height:2px;background:currentColor;border-radius:2px;transform:rotate(-45deg)}.petsp{position:fixed;left:0;top:0;z-index:8;display:none;cursor:pointer;touch-action:manipulation}';
    document.head.appendChild(st);
    document.body.appendChild(cv);fit(true);
    btn=document.createElement('button');btn.type='button';btn.className='petb';
    btn.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6.5" cy="10" r="1.8"/><circle cx="10.5" cy="6" r="1.8"/><circle cx="15.5" cy="6" r="1.8"/><circle cx="19" cy="10.5" r="1.8"/><path d="M12.5 11.5c-3 0-5.5 3-5.5 5.2 0 1.8 1.5 2.3 3 2.3 1.2 0 1.6-.5 2.5-.5s1.3.5 2.5.5c1.5 0 3-.5 3-2.3 0-2.2-2.5-5.2-5.5-5.2z"/></svg>';
    btn.addEventListener('click',function(){setOff(!off)});
    document.body.appendChild(btn);
    var list=[['ghost',0,.6,KIND.ghost,{},'.clk'],['spider',0,1.4,KIND.spider],
              ['pump',0,2.1,KIND.hop,{flee:true,gap:12,d0:60,d1:130,h:40,air:.6,r0:.8,r1:2.2}],
              ['cat',0,2.9,KIND.walk,{},'.avf'],
              ['rabbit',0,3.6,KIND.hop,{pad:16,sink:2,d0:90,d1:190,h:50,air:.55,r0:.6,r1:2.4},'footer']];
    if(small)list=list.filter(function(x){return /^(ghost|spider|pump|cat)$/.test(x[0])});
    list.forEach(function(x){add(x[0],x[1],x[2],x[3],x[4],x[5],x[6])});
    C.forEach(function(c){if(c.n==='cat')R.style.setProperty('--catgap',(c.sp.h+16)+'px')});
    addEventListener('resize',function(){fit(false)});
    document.addEventListener('visibilitychange',function(){if(!document.hidden)run()});
    if(fine){
      document.addEventListener('pointermove',function(e){if(e.pointerType!=='touch'){px=e.clientX;py=e.clientY}},{passive:true});
      R.addEventListener('mouseleave',function(){px=py=-1e4});
    }
    setOff(off);
  }
  var ft=(document.fonts&&document.fonts.load)?Promise.race([document.fonts.load('9px "JetBrains Mono"'),new Promise(function(r){setTimeout(r,1500)})]):Promise.resolve();
  ft.then(start,start);
}
function startRoam(){
  if(R.classList.contains('pre-on')&&!R.classList.contains('ready')){var mo=new MutationObserver(function(){if(R.classList.contains('ready')){mo.disconnect();roam()}});mo.observe(R,{attributes:true,attributeFilter:['class']})}
  else roam();
}
function ready(){
  if(!layer)init();
  if(ROAM)startRoam();
  /* đồng hồ: chỉ chạy số rồi dừng đúng giờ (không gộp, không vẽ chữ đè), từng số chốt dần từ trái sang phải */
  function hero(){
    var A=[document.getElementById('hh'),document.getElementById('mm'),document.getElementById('ss')];
    if(!A[0]||!A[1]||!A[2])return;
    var F=null,t0=performance.now(),DUR=1150,LOCK=[300,430,560,690,820,950];
    try{F=new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23',timeZone:'Asia/Ho_Chi_Minh'})}catch(e){}
    function real(){var p;try{p=F.format(new Date()).split(':')}catch(e){var d=new Date();p=[d.getHours(),d.getMinutes(),d.getSeconds()].map(function(v){return ('0'+v).slice(-2)})}return p.join('')}
    function put(s){for(var i=0;i<3;i++){var v=s.slice(i*2,i*2+2);if(A[i].textContent!==v)A[i].textContent=v}}
    R.classList.add('clkx');
    (function f(){
      var e=performance.now()-t0,r=real(),s='',i,step=(e/70)|0;
      if(e>=DUR||document.hidden){put(r);setTimeout(function(){R.classList.remove('clkx')},120);return}
      for(i=0;i<6;i++){
        if(e>=LOCK[i])s+=r.charAt(i);
        else{var h=Math.imul((i+1)*2654435761^step*40503,1274126177);h^=h>>>13;s+=((h>>>0)%10)}
      }
      put(s);requestAnimationFrame(f);
    })();
  }
  if(R.classList.contains('pre-on')){var mo=new MutationObserver(function(){if(R.classList.contains('ready')){mo.disconnect();hero()}});mo.observe(R,{attributes:true,attributeFilter:['class']})}
  else hero();
  var f=document.querySelector('footer');
  if(f&&'IntersectionObserver' in window){var io=new IntersectionObserver(function(es){if(es[0].isIntersecting){io.disconnect();cover(f)}},{rootMargin:'0px 0px 10% 0px'});io.observe(f)}
  var v=document.getElementById('view');
  if(v)new MutationObserver(function(){if(!v.hidden)cover(v)}).observe(v,{attributes:true,attributeFilter:['hidden']});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready);else ready();
})();
