/* Hiệu ứng chữ/ảnh ASCII (chạy sớm trong <head>). Tách từ index.html. */
/* ASCII REVEAL v5
   1) Chữ mã hoá rồi giải mã dần từng dòng: chữ thật luôn nằm đúng chỗ của nó, chỉ phần chưa giải mã bị tô trong suốt (CSS Custom Highlight) và có ký tự lạ vẽ đè lên, nên giải mã xong không thể bị lệch. Số thì chạy ra số.
      Ảnh vỡ thành khối pixel rồi gộp lại, xong ảnh nào hiện ngay ảnh đó (không nháy). Đồng hồ ở đầu trang chỉ chạy số rồi dừng đúng giờ, không gộp chữ.
   (Đã bỏ đám thú ASCII chạy quanh trang.)
   Không sửa DOM chữ/ảnh. Tự bỏ qua khi bật lite, tắt hiệu ứng hoặc ưu tiên giảm chuyển động. ENABLED=false tắt hết.
   Tối ưu: prep() đo theo dòng (lineGroups) và đo độ rộng từng ký tự một lần (có bộ nhớ đệm) thay vì đo lại cả đoạn chữ cho mỗi ký tự;
   covered() chỉ so toạ độ với thanh menu; draw()/loop() không đọc DOM; canvas chỉ vẽ lại ~30 lần/giây (ký tự lạ đổi 16 lần/giây nên mắt không thấy khác);
   ảnh vỡ khối pixel: mỗi mức chỉ thu nhỏ ảnh gốc 1 lần rồi dùng lại; cover() xếp hàng covQ, mỗi khung hình khởi tạo 1 khối. */
(function(){
var ENABLED=true,R=document.documentElement;
/* TỐC ĐỘ (ms): chỉnh ở đây. lineGap/lineMax = các dòng trong một khối bắt đầu cách nhau bao lâu (tối đa);
   span = thời gian giải mã một dòng = spanBase + spanPer × số ký tự (tối đa spanMax); img = ảnh gộp lại; blockGap/blockMax = các khối liền nhau bắt đầu lệch nhau;
   step = ký tự lạ đổi sau mỗi bao nhiêu ms; frame = khoảng cách tối thiểu giữa 2 lần vẽ canvas; maxChars = số ký tự tối đa được giải mã trong một khối */
var SPD={lineGap:28,lineMax:300,spanBase:110,spanPer:6,spanMax:360,img:460,imgGap:45,blockGap:40,blockMax:160,step:60,frame:32,maxChars:700};
var MOFF=R.getAttribute('data-motion')==='off'; /* đang tắt hiệu ứng lúc tải: chưa giải mã chữ; bật lại thì các khối cuộn tới sau vẫn giải mã */
if(!ENABLED||R.classList.contains('lite')||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
function IMS(){return SPD.img}
var layer,tx,jobs=[],raf=0,last=0,slow=0,dead=false,col={},AR=.6,HL=null,CW={};
/* người dùng đổi sáng/tối hoặc đổi ngôn ngữ: kết thúc ngay các khối đang giải mã dở (xem freeze) */
var frozen=false,uAt=-1e9;
['pointerdown','keydown','touchstart'].forEach(function(n){addEventListener(n,function(){uAt=performance.now()},{capture:true,passive:true})});
/* đổi sáng/tối, đổi ngôn ngữ hoặc tắt hiệu ứng: chỉ kết thúc các khối đang giải mã dở (chữ hiện ngay), KHÔNG tắt hẳn.
   Các khối cuộn tới sau đó vẫn giải mã bình thường (trước đây bấm đổi giao diện một lần là mất hiệu ứng ASCII cho tới khi tải lại trang). */
function freeze(){try{jobs.slice().forEach(end);if(typeof covQ!=='undefined')covQ.length=0}catch(e){}}
function userChange(){if(performance.now()-uAt<2500)freeze()}
var CH='01<>/\\|{}[]=+*#%&$@?!~^:;_-ABCDEFXYZ',DG='0123456789',MONO='"JetBrains Mono",ui-monospace,Menlo,Consolas,monospace';
if(!MOFF)R.classList.add('ax');
function dpr(){return Math.min(devicePixelRatio||1,2)}
function colors(){var s=getComputedStyle(R),fx=s.getPropertyValue('--fx').trim()||'255,255,255';col.z='rgba('+fx+',.9)';col.zd='rgba('+fx+',.3)';col.acc=s.getPropertyValue('--acc').trim()||'#8bf0a8';col.light=R.getAttribute('data-theme')==='light'}
function init(){
  layer=document.createElement('div');layer.setAttribute('aria-hidden','true');
  layer.style.cssText='position:absolute;left:0;top:0;width:0;height:0;z-index:9;pointer-events:none';
  document.body.appendChild(layer);
  /* trang xê dịch giữa chừng: xử lý trong ResizeObserver (chạy sau layout, không phải trong vòng vẽ) */
  try{if(window.ResizeObserver)new ResizeObserver(layoutShift).observe(document.body)}catch(e){}
  tx=document.createElement('canvas').getContext('2d');
  /* chữ thật vẫn nằm đúng chỗ của nó; chỉ phần chưa giải mã được tô trong suốt bằng CSS Custom Highlight (::highlight(axh)) nên khi xong không thể lệch */
  try{if(window.CSS&&CSS.highlights&&window.Highlight){HL=new Highlight();CSS.highlights.set('axh',HL)}}catch(e){HL=null}
  var th0=R.getAttribute('data-theme');colors();new MutationObserver(function(){colors();var th=R.getAttribute('data-theme');if(th!==th0){th0=th;userChange()}}).observe(R,{attributes:true,attributeFilter:['data-theme']});
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
/* BỘ NHỚ ĐỆM trong một lần prep(): mỗi phần tử chỉ hỏi getComputedStyle một lần. Trước đây mỗi đoạn chữ lại hỏi lại
   toàn bộ chuỗi phần tử cha (2 lần cho hiddenAnc + 1 lần cho clipEls), tốn 11–20ms mỗi khối khi cuộn tới. */
var GC=null,CL=null;
function gcs(e){if(!GC)return getComputedStyle(e);var s=GC.get(e);if(!s){s=getComputedStyle(e);GC.set(e,s)}return s}
function clipEls(el){
  if(CL&&CL.has(el))return CL.get(el);
  var out=[],e=el,c;
  while(e&&e!==document.body&&e!==R){
    c=gcs(e);
    if(c.overflowX!=='visible'||c.overflowY!=='visible')out.push(e);
    e=e.parentElement;
  }
  if(CL)CL.set(el,out);
  return out;
}
/* nằm trong phần tử bị ẩn (đóng, chưa bấm mới hiện): thẻ [hidden], inert, details chưa mở, content-visibility:hidden */
function hiddenAnc(p){
  for(var e=p;e&&e!==document.body;e=e.parentElement){
    if(e.hidden||e.inert)return true;
    if(e.nodeType===1&&e.hasAttribute('data-noax'))return true; /* mục vừa bấm mở ra: không giải mã */
    if(e.nodeType===1&&gcs(e).position==='fixed'&&!(e.closest&&e.closest('header.bar')))return true; /* hộp bật ra (cố định trên màn hình): không giải mã */
    if(e.tagName==='DETAILS'&&!e.open){var sm=p.closest('summary');if(!sm||sm.parentElement!==e)return true}
    if(e.nodeType===1&&gcs(e).contentVisibility==='hidden')return true;
  }
  return false;
}
/* bị thanh menu che: chỉ so toạ độ với khung thanh menu đã đo sẵn 1 lần ở đầu prep() (không dò cây DOM nữa) */
var barEl=null,barL=0,barR=0,barH=0;
function measureBar(){
  barEl=barEl&&barEl.isConnected?barEl:document.querySelector('header.bar');barH=0;
  if(!barEl)return;
  var w=barEl.classList.contains('mini')?barEl.querySelector('.wrap'):null,r=(w||barEl).getBoundingClientRect();
  barL=r.left;barR=r.right;barH=Math.max(0,r.bottom)
}
function covered(p,x,y){
  if(!(y>=0&&y<barH&&x>=barL&&x<=barR))return false;
  return !(p.closest&&p.closest('header.bar'));
}
var cstamp=0;
function clipRect(ce){
  var l=-1e9,t=-1e9,r=1e9,b=1e9,i,k;
  for(i=0;i<ce.length;i++){
    k=ce[i];if(k.__cs!==cstamp){k.__cs=cstamp;k.__cr=k.getBoundingClientRect()}
    var q=k.__cr;if(q.left>l)l=q.left;if(q.top>t)t=q.top;if(q.right<r)r=q.right;if(q.bottom<b)b=q.bottom;
  }
  return {l:l,t:t,r:r,b:b};
}
function inClip(ce,x0,y0,x1,y1){
  if(!ce.length)return true;
  var c=clipRect(ce),my=(y0+y1)/2;
  return my>=c.t&&my<=c.b&&x1>c.l&&x0<c.r;
}
function clearC(c){return !c||c==='transparent'||/,\s*0\)$/.test(c)}
/* đo theo dòng: 1 lần getClientRects cho cả đoạn chữ để biết các dòng, rồi tìm ranh giới dòng bằng tìm kiếm nhị phân (đoán trước bằng độ rộng canvas nên chỉ cần vài lần hỏi mỗi dòng).
   toạ độ X từng ký tự lấy từ measureText của canvas (đúng với font tỉ lệ, kerning), co giãn cho vừa bề ngang thật của dòng (đúng với letter-spacing, căn đều).
   trả về null nếu không chắc chắn -> prep() quay về cách đo từng ký tự cũ */
/* độ rộng một ký tự theo font hiện tại của tx (đo 1 lần, nhớ lại): thay cho việc đo lại cả chuỗi con cho mỗi ký tự (chậm theo bình phương độ dài) */
function chw(fk,ch){var m=CW[fk]||(CW[fk]={}),w=m[ch];if(w===undefined)w=m[ch]=tx.measureText(ch).width;return w}
function lineGroups(n,nm,txt,disp,rs,cr){
  var len=txt.length,lines=[],i,k,N,mp=nm.mp;
  for(i=0;i<rs.length;i++){
    var r=rs[i],mid=(r.top+r.bottom)/2,Lq=lines.length?lines[lines.length-1]:null;
    if(Lq&&Math.abs(mid-Lq.mid)<=Math.min(Lq.h,r.height)*.5){Lq.l=Math.min(Lq.l,r.left);Lq.r=Math.max(Lq.r,r.right);Lq.top=Math.min(Lq.top,r.top);Lq.bot=Math.max(Lq.bot,r.bottom);Lq.h=Lq.bot-Lq.top}
    else lines.push({l:r.left,r:r.right,top:r.top,bot:r.bottom,h:r.height,mid:mid})
  }
  N=lines.length;if(!N)return null;
  for(i=1;i<N;i++)if(lines[i].mid<=lines[i-1].mid)return null;
  var memo=new Int16Array(len+1).fill(-1),calls=0;
  function rectOf(p){
    cr.setStart(n,mp[p]);cr.setEnd(n,mp[p]+1);calls++;
    var cl=cr.getClientRects(),u;for(u=0;u<cl.length;u++)if(cl[u].height>=1)return cl[u];return null
  }
  function idx(q){
    if(q>=len)return N;if(memo[q]>=0)return memo[q];
    var p=q,r=null,best=0,bd=1e9;
    for(;p>=0;p--){r=rectOf(p);if(r&&(r.width>=.01||txt.charAt(p)===' '))break;r=null}
    if(r){var m=(r.top+r.bottom)/2,d,kx;for(kx=0;kx<N;kx++){d=Math.abs(m-lines[kx].mid);if(d<bd){bd=d;best=kx}}}
    return memo[q]=best
  }
  var starts=[0];
  if(N>1){
    var cw=new Float32Array(len+1),tot=0,sc,cumW=0;
    var fk=tx.font;for(i=1;i<=len;i++)cw[i]=cw[i-1]+chw(fk,disp.charAt(i-1));
    for(i=0;i<N;i++)tot+=lines[i].r-lines[i].l;
    sc=cw[len]>0?tot/cw[len]:1;
    for(k=0;k<N-1;k++){
      var lo=starts[k],hi=len,g,st,P=function(q){return idx(q)>=k+1};
      if(idx(lo)>k)return null;
      cumW+=lines[k].r-lines[k].l;
      for(g=lo+1;g<len&&cw[g]*sc<cumW;g++);
      g=Math.min(Math.max(g,lo+1),len);
      if(P(g)){hi=g;st=1;while(hi-st>lo&&P(hi-st)){hi-=st;st*=2}lo=Math.max(lo,hi-st)}
      else{lo=g;st=1;while(lo+st<len&&!P(lo+st)){lo+=st;st*=2}hi=Math.min(len,lo+st)}
      while(hi-lo>1){var md=(lo+hi)>>1;if(P(md))hi=md;else lo=md}
      if(hi>=len)return null;
      starts.push(hi)
    }
    if(idx(len-1)!==N-1)return null;
  }
  var out=[];
  for(k=0;k<N;k++){
    var a=starts[k],e=k<N-1?starts[k+1]:len,Ln=lines[k];
    while(a<e&&txt.charAt(a)===' ')a++;
    while(e>a&&txt.charAt(e-1)===' ')e--;
    var ln=e-a;if(ln<=0)continue;
    var wd=Ln.r-Ln.l,cum=new Float32Array(ln+1),z,fk2=tx.font,mw=0;
    for(z=0;z<ln;z++){mw+=chw(fk2,disp.charAt(a+z));cum[z+1]=mw}
    for(z=1;z<ln;z++)cum[z]=mw>0?cum[z]*wd/mw:wd*z/ln;
    cum[ln]=wd;
    for(z=1;z<=ln;z++)if(cum[z]<cum[z-1])cum[z]=cum[z-1];
    out.push({a:a,len:ln,l:Ln.l,top:Ln.top,h:Ln.h,w:wd,cum:cum})
  }
  return out
}
/* gom chữ theo dòng (mỗi đoạn chữ chỉ hỏi layout 1 lần) và ảnh trong khối */
/* prep bọc bộ nhớ đệm: tạo mới mỗi lần, xong là bỏ (không giữ kiểu cũ khi trang đổi) */
function prep(j,er){GC=new Map();CL=new Map();try{prep0(j,er)}finally{GC=CL=null}}
function prep0(j,er){
  measureBar();
  var rg=document.createRange(),total=0,li=0,x0=1e9,y0=1e9,x1=-1e9,y1=-1e9,H=innerHeight,n;
  if(HL){
    var w=document.createTreeWalker(j.el,NodeFilter.SHOW_TEXT);
    while((n=w.nextNode())&&total<SPD.maxChars){
      var p=n.parentElement,raw=n.nodeValue;
      if(!p||n.__ax||!raw.trim()||hiddenAnc(p)||(p.id==='days'||p.id==='stgames'||p.id==='visits')||/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/.test(p.tagName))continue;
      
      /* chữ tô gradient (đã trong suốt sẵn) thì bỏ qua, để nó hiện bằng hiệu ứng riêng */
      
      rg.selectNodeContents(n);
      var rs=Array.prototype.filter.call(rg.getClientRects(),function(r){return r.width>=1&&r.height>=1});
      if(!rs.length)continue;if(rs[rs.length-1].bottom<-60||rs[0].top>H+60){j.off++;continue}var cs=gcs(p);if(cs.visibility==='hidden'||cs.whiteSpace.indexOf('pre')===0)continue;if(clearC(cs.color)||clearC(cs.webkitTextFillColor))continue;
      var nm=norm(raw),txt=nm.s;if(!txt)continue;
      var disp=cs.textTransform==='uppercase'?txt.toUpperCase():txt;if(disp.length!==txt.length)disp=txt;
      var font=cs.fontStyle+' '+cs.fontWeight+' '+cs.fontSize+' '+cs.fontFamily,fpx=parseFloat(cs.fontSize)||16;
      tx.font=font;
      var m=tx.measureText('Hg'),asc=m.fontBoundingBoxAscent,dsc=m.fontBoundingBoxDescent,got=0,cr=document.createRange(),grp=[],gcur=null,q;cstamp++;var ce=clipEls(p);
      var CP=ce.length?clipRect(ce):null,fg=cs.direction==='rtl'?null:lineGroups(n,nm,txt,disp,rs,cr);
      if(!fg){
      /* (dự phòng) hỏi trình duyệt vị trí thật của từng ký tự rồi gom theo dòng: đúng với mọi font, letter-spacing, căn giữa, căn đều, xuống dòng */
      for(q=0;q<txt.length;q++){
        cr.setStart(n,nm.mp[q]);cr.setEnd(n,nm.mp[q]+1);
        var cl=cr.getClientRects(),r0=null,u;
        for(u=0;u<cl.length;u++){if(cl[u].height>=1){r0=cl[u];break}}
        if(!r0||(r0.width<.01&&txt.charAt(q)!==' ')){ /* dấu kết hợp hoặc khoảng trắng bị nuốt: đi theo ký tự trước */
          if(gcur&&gcur.n){gcur.n++;gcur.r.push(gcur.r[gcur.r.length-1])}
          continue}
        if(!gcur||Math.abs((r0.top+r0.bottom)/2-gcur.mid)>Math.min(gcur.h,r0.height)*.5){
          gcur={a:q,n:0,l:r0.left,top:r0.top,h:r0.height,mid:(r0.top+r0.bottom)/2,r:[]};grp.push(gcur)}
        if(gcur.n===0&&txt.charAt(q)===' '){gcur.a=q+1;continue}
        gcur.r.push(r0);gcur.n++;gcur.top=Math.min(gcur.top,r0.top);gcur.h=Math.max(gcur.h,r0.height)}
      }
      for(var k=0,K=fg?fg.length:grp.length;k<K;k++){
        var G=fg?fg[k]:grp[k],cur,len,ga,left,wd,gtop,gh,cum,z;
        if(fg){len=G.len;ga=G.a;left=G.l;wd=G.w;gtop=G.top;gh=G.h;cum=G.cum;cur=disp.substr(ga,len)}
        else{
          len=G.n;ga=G.a;
          while(len>0&&txt.charAt(ga+len-1)===' ')len--;
          if(!len)continue;
          cur=disp.substr(ga,len);
          var r1=G.r[0],rl=G.r[len-1];left=r1.left;wd=rl.right-r1.left;gtop=G.top;gh=G.h;
          cum=new Float32Array(len+1);
          for(z=0;z<len;z++)cum[z]=G.r[z].left-r1.left;
          cum[len]=wd;
          for(z=1;z<=len;z++)if(cum[z]<cum[z-1])cum[z]=cum[z-1]
        }
        if(wd<1)continue;
        if(!inClip(ce,left,gtop,left+wd,gtop+gh))continue;
        if(gtop+gh<-40||gtop>H+40){j.off++;continue}
        if(left>=innerWidth||left+wd<=0)continue;
        if(covered(p,Math.min(innerWidth-1,Math.max(0,left+wd/2)),gtop+gh/2))continue;
        var L={clp:CP?{l:CP.l-er.left,t:CP.t-er.top,w:CP.r-CP.l,h:CP.b-CP.t}:null,s:cur,a:ga,nd:n,mp:nm.mp,ox:left-er.left,oy:gtop-er.top,h:gh,w:wd,color:cs.color,d:Math.min(li++*SPD.lineGap,SPD.lineMax),span:Math.min(SPD.spanMax,SPD.spanBase+cur.length*SPD.spanPer),kk:0,sd:(Math.random()*997)|0};
        L.by=asc>0?L.oy+(L.h-asc-dsc)/2+asc:L.oy+L.h*.8;
        L.xs=cum;L.sf=Math.max(5,Math.min(fpx,(wd/len)/AR));
        L.rg=document.createRange();L.rg.setStart(n,nm.mp[L.a]);L.rg.setEnd(n,nm.mp[Math.min(txt.length,L.a+len)]);
        HL.add(L.rg);
        x0=Math.min(x0,L.ox);y0=Math.min(y0,L.oy);x1=Math.max(x1,L.ox+L.w);y1=Math.max(y1,L.oy+L.h);
        j.dur=Math.max(j.dur,L.d+L.span+80);j.lines.push(L);got++;
      }
      if(got){total+=txt.length;n.__ax=1}
    }
  }
  var ims=j.el.querySelectorAll('img');
  for(var z=0;z<ims.length;z++){
    var im=ims[z];if(im.__ax)continue;if(im.closest('#photos,.gsk,#lb')||/\.gif(\?|#|$)/i.test(im.currentSrc||im.src||''))continue; /* gif con: không phủ ASCII */ /* Vài tấm ảnh: không phủ ASCII vì bị lệch */if(!im.complete||!im.naturalWidth){j.off++;continue}
    var ir=im.getBoundingClientRect();if(ir.width<8||ir.height<8)continue;cstamp++;if(hiddenAnc(im.parentElement)||ir.left>=innerWidth||ir.right<=0||!inClip(clipEls(im.parentElement),ir.left,ir.top,ir.right,ir.bottom)||covered(im.parentElement,Math.min(innerWidth-1,Math.max(0,(ir.left+ir.right)/2)),(ir.top+ir.bottom)/2))continue;if(ir.bottom<0||ir.top>H){j.off++;continue}
    /* KHỐI PIXEL VỪA ĐÚNG ẢNH: tính phần ảnh thật sự hiện ra thay vì cả khung <img>
       - bỏ viền/padding của thẻ img; - ảnh object-fit:contain / none / scale-down (vd. ảnh linh kiện góc setup) chỉ chiếm một phần khung;
       - ảnh hoà trộn (mix-blend-mode, dùng để xoá nền trắng) thì không phủ pixel: canvas không hoà trộn được nên sẽ lộ ô nền trắng to. */
    var ics=gcs(im);if(ics.mixBlendMode&&ics.mixBlendMode!=='normal')continue;
    var bL=(parseFloat(ics.borderLeftWidth)||0)+(parseFloat(ics.paddingLeft)||0),bT=(parseFloat(ics.borderTopWidth)||0)+(parseFloat(ics.paddingTop)||0),
        bR=(parseFloat(ics.borderRightWidth)||0)+(parseFloat(ics.paddingRight)||0),bB=(parseFloat(ics.borderBottomWidth)||0)+(parseFloat(ics.paddingBottom)||0),
        sk=im.offsetWidth?ir.width/im.offsetWidth:1, /* ảnh đang bị thu/phóng bằng transform */
        cx0=ir.left+bL*sk,cy0=ir.top+bT*sk,cw=ir.width-(bL+bR)*sk,ch=ir.height-(bT+bB)*sk,fit=ics.objectFit||'fill',own=false;
    if((fit==='contain'||fit==='none'||fit==='scale-down')&&im.naturalWidth&&im.naturalHeight){
      var nw0=im.naturalWidth*sk,nh0=im.naturalHeight*sk,s0=fit==='none'?1:Math.min(cw/nw0,ch/nh0);if(fit==='scale-down')s0=Math.min(1,s0);
      var dw=nw0*s0,dh=nh0*s0,op=(ics.objectPosition||'50% 50%').split(/\s+/),px=/%$/.test(op[0])?parseFloat(op[0])/100:.5,py=/%$/.test(op[1]||'')?parseFloat(op[1])/100:.5;
      cx0+=(cw-dw)*px;cy0+=(ch-dh)*py;cw=dw;ch=dh;own=true;
    }
    if(cw<8||ch<8)continue;
    var rs2=ics.borderTopLeftRadius,pp=im.parentElement,zz;
    /* bo góc: ảnh "vừa khung" chỉ theo góc của chính nó; ảnh phủ kín thì theo góc của khung bọc (tối đa 3 tầng) */
    if(!own)for(zz=0;zz<3&&pp&&(parseFloat(rs2)||0)===0;zz++,pp=pp.parentElement)rs2=gcs(pp).borderTopLeftRadius;
    var rd=rs2.slice(-1)==='%'?Math.min(cw,ch)*parseFloat(rs2)/100:parseFloat(rs2)||0,d=j.imgs.length*SPD.imgGap;
    var o={im:im,d:d,rd:Math.min(rd,cw/2,ch/2),done:0,x:cx0-er.left,y:cy0-er.top,w:cw,h:ch,fill:fit==='fill'};
    /* CHỈ PHẦN NHÌN THẤY: ảnh hay bị phóng to/dịch bên trong một khung che (thẻ, khung ảnh overflow:hidden, vùng cuộn),
       vd. ảnh thẻ Sở thích phóng to tới 118% theo cuộn trang. Trước đây lớp pixel vẽ cả ảnh đã phóng to nên tràn ra ngoài thẻ,
       xong hiệu ứng ảnh thật lại nằm gọn trong khung, trông như phóng to rồi thu. Giờ cắt đúng theo khung che (và màn hình). */
    cstamp++;var ceI=clipEls(im.parentElement),cl=ceI.length?clipRect(ceI):{l:-1e9,t:-1e9,r:1e9,b:1e9};
    var vl=Math.max(cx0,cl.l,0),vt=Math.max(cy0,cl.t,-H),vr=Math.min(cx0+cw,cl.r,innerWidth),vb=Math.min(cy0+ch,cl.b,2*H);
    if(vr-vl<4||vb-vt<4)continue;
    o.cl={x:vl-er.left,y:vt-er.top,w:vr-vl,h:vb-vt};
    if(vr-vl<cw-1||vb-vt<ch-1){ /* bị khung cắt: bo góc theo khung che gần nhất */
      var cr0=ceI.length?gcs(ceI[0]).borderTopLeftRadius:'0';o.rd=Math.min(parseFloat(cr0)||0,(vr-vl)/2,(vb-vt)/2)
    }
    x0=Math.min(x0,o.cl.x);y0=Math.min(y0,o.cl.y);x1=Math.max(x1,o.cl.x+o.cl.w);y1=Math.max(y1,o.cl.y+o.cl.h);
    im.__ax=1;j.imgs.push(o);j.dur=Math.max(j.dur,d+IMS()+140);im.classList.add('axi','axo');
  }
  j.bx=Math.floor(x0)-8;j.by=Math.floor(y0)-8;j.bw=Math.ceil(x1-x0)+16;j.bh=Math.ceil(y1-y0)+16;
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
  j.imgs.forEach(function(I){imgDone(I);I.pc=null});
  if(j.c&&j.c.parentNode)j.c.parentNode.removeChild(j.c);
}
function place(j){var d=j.dp;j.c.style.left=(Math.round((j.ex+j.bx)*d)/d)+'px';j.c.style.top=(Math.round((j.ey+j.by)*d)/d)+'px'}
function glyph(cx,L,c,x,y,step){
  var ch=L.s.charAt(c),cc=ch.charCodeAt(0);
  if(ch===' '||(cc>=768&&cc<=879))return;
  /* số thì chạy ra số, chữ thì chạy ra ký tự lạ */
  var set=(cc>=48&&cc<=57)?DG:CH;
  cx.fillText(set.charAt((c*7+L.sd+step*(1+(c&3)))%set.length),x+(L.xs[c]+L.xs[c+1])/2,y);
}
function draw(j,e){
  var cx=j.cx,d=j.dp,a,L,c,step=(j.t0+e)/SPD.step|0,ls='letterSpacing' in cx;
  /* không đọc DOM trong khung hình: lớp phủ nằm tuyệt đối theo tài liệu nên toạ độ giữ nguyên khi cuộn; trang đổi kích thước thì ResizeObserver (cuối khối) kết thúc hiệu ứng */
  cx.setTransform(d,0,0,d,0,0);cx.clearRect(0,0,j.bw,j.bh);cx.textBaseline='alphabetic';cx.textAlign='center';
  for(a=0;a<j.lines.length;a++){
    L=j.lines[a];
    var len=L.s.length,le=e-L.d,kk=le<=0?0:Math.min(len,Math.floor(le/L.span*len));
    if(kk!==L.kk){L.kk=kk;L.rg.setStart(L.nd,L.mp[L.a+kk])}
    if(kk>=len)continue;
    var clp=L.clp;
    if(clp){cx.save();cx.beginPath();cx.rect(clp.l-j.bx,clp.t-j.by,clp.w,clp.h);cx.clip()}
    var x=L.ox-j.bx,y=L.by-j.by;
    cx.font=L.sf+'px '+MONO;if(ls)cx.letterSpacing='0px';
    cx.fillStyle=L.color;cx.globalAlpha=.45;
    for(c=kk+3;c<len;c++)glyph(cx,L,c,x,y,step);
    cx.globalAlpha=1;cx.fillStyle=col.acc;
    for(c=kk;c<kk+3&&c<len;c++)glyph(cx,L,c,x,y,step);
    if(clp)cx.restore();
  }
  cx.globalAlpha=1;cx.textAlign='start';
  for(a=0;a<j.imgs.length;a++){
    var I=j.imgs[a],p=(e-I.d)/IMS();
    if(!I.done&&p>=1)imgDone(I,1);
    /* vài khung hình sau khi ảnh thật hiện, canvas vẫn vẽ đúng ảnh đó để không bị hở */
    if(I.done){if(I.hold<=0)continue;I.hold--;p=.999}
    var im=I.im,ix=I.x-j.bx,iy=I.y-j.by,iw=I.w,ih=I.h,
        cols=I.done?Math.ceil(Math.max(iw,ih)*d):[3,6,12,24,48,96,192][Math.max(0,Math.floor(p*7))],bs=Math.max(iw,ih)/cols,
        tw=Math.max(1,Math.round(iw/bs)),th=Math.max(1,Math.round(ih/bs)),
        nw=im.naturalWidth,nh=im.naturalHeight,sc=Math.max(iw/nw,ih/nh),sw=I.fill?nw:iw/sc,sh=I.fill?nh:ih/sc; /* object-fit:fill (mặc định) thì ảnh bị kéo giãn đúng khung: lấy cả ảnh, không cắt */
    /* mỗi mức khối pixel chỉ thu nhỏ ảnh gốc MỘT lần (trước đây thu nhỏ lại ở mọi khung hình), các khung sau dùng lại */
    if(I.pk!==tw*65536+th){
      I.pk=tw*65536+th;var pc=I.pc||(I.pc=document.createElement('canvas'));pc.width=tw;pc.height=th;
      var pg=pc.getContext('2d');pg.imageSmoothingQuality='high';pg.drawImage(im,(nw-sw)/2,(nh-sh)/2,sw,sh,0,0,tw,th);
    }
    cx.save();
    /* cắt theo phần ảnh nhìn thấy (đã tính trong prep), không theo cả ảnh đang bị phóng to */
    var K=I.cl||{x:I.x,y:I.y,w:iw,h:ih},kx=K.x-j.bx,ky=K.y-j.by;
    cx.beginPath();if(cx.roundRect)cx.roundRect(kx,ky,K.w,K.h,I.rd);else cx.rect(kx,ky,K.w,K.h);cx.clip();
    cx.imageSmoothingEnabled=false;cx.drawImage(I.pc,0,0,tw,th,ix,iy,iw,ih);cx.restore();
  }
}
function loop(){
  raf=0;var t=performance.now();
  for(var k=jobs.length-1;k>=0;k--){var j=jobs[k],e=t-j.t0;
    if(e>=j.dur||!j.el.isConnected||document.hidden)end(j);
    else{if((j.fc=(j.fc||0)+1)%10===0){var jt=j.ey-pageYOffset;if(jt+j.eh<-80||jt>innerHeight+80){end(j);j.el.__axp=1;continue}}
      /* vẽ lại tối đa ~30 lần/giây: màn 60Hz bỏ 1/2, màn 120Hz bỏ 3/4 số lần vẽ */
      if(t-(j.ld||0)>=SPD.frame){j.ld=t;draw(j,Math.max(0,e))}}}
  var c=performance.now()-t;
  if(c>12){if(++slow>8){jobs.slice().forEach(end);dead=true}}else if(slow>0)slow--;
  if(jobs.length)raf=requestAnimationFrame(loop);
}
var fontsOK=!(document.fonts&&document.fonts.status==='loading'),fontQ=[];
if(!fontsOK){var fgo=function(){if(fontsOK)return;fontsOK=true;fontQ.splice(0).forEach(function(e){if(e.isConnected)cover(e)})};
  document.fonts.ready.then(function(){setTimeout(fgo,60)});setTimeout(fgo,2500)}
/* chỉ khi bố cục thật sự đổi (ResizeObserver chạy sau layout, nên đọc ở đây không gây layout thrashing; vòng vẽ thì không đọc gì):
   khối đổi kích thước thật -> dừng hiệu ứng (chữ thật đã đúng chỗ); chỉ trôi vị trí nhẹ (vd. content-visibility chỉnh chiều cao) -> dời canvas theo */
function layoutShift(){
  if(!jobs.length)return;
  jobs.slice().forEach(function(j){
    var er=j.el.getBoundingClientRect(),ex=er.left+pageXOffset,ey=er.top+pageYOffset;
    if(Math.abs(er.height-j.eh)>3||Math.abs(er.width-j.ew)>3){end(j);return}
    if(Math.abs(ex-j.ex)>.4||Math.abs(ey-j.ey)>.4){j.ex=ex;j.ey=ey;place(j)}
  })
}
/* hàng đợi: cuộn nhanh qua nhiều khối cùng lúc thì mỗi khung hình chỉ khởi tạo 1 khối (prep + canvas), FPS không bị dồn cục */
var covQ=[],covRaf=0;
/* hàng chờ khi cuộn nhanh: cuộn dừng (hoặc chậm lại) thì khối đang hiện giải mã ngay, khối đã trôi khỏi màn hình thì đợi tới lúc cuộn lại tới */
var defQ=[],defT=0,dIO=null;
function defer(el){if(defQ.indexOf(el)<0)defQ.push(el);clearTimeout(defT);defT=setTimeout(flushDef,220)}
function flushDef(){
  if(window.__sfast&&window.__sfast()){defT=setTimeout(flushDef,220);return}
  if(!dIO&&window.IntersectionObserver)dIO=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){dIO.unobserve(e.target);cover(e.target)}})},{threshold:.1});
  defQ.splice(0).forEach(function(el){if(!el.isConnected)return;if(dIO)dIO.observe(el);else cover(el)});
}
function cover(el){
  if(dead||frozen||!el)return;
  if(covQ.indexOf(el)<0)covQ.push(el);
  if(!covRaf)covRaf=requestAnimationFrame(runCovQ)
}
function runCovQ(){
  covRaf=0;
  var el=covQ.shift();
  if(el&&el.isConnected)coverNow(el);
  if(covQ.length&&!dead&&!frozen)covRaf=requestAnimationFrame(runCovQ);else covQ.length=0
}
function coverNow(el){
  if(dead||frozen||!el)return;
  if(R.getAttribute('data-motion')==='off')return;
  /* đang cuộn nhanh: HOÃN giải mã khối này tới khi cuộn chậm lại (tránh tạo canvas lớn giữa lúc cuộn), rồi khối nào đang trên màn hình thì giải mã */
  if(window.__sfast&&window.__sfast()&&!el.__axw){defer(el);return}
  if(!fontsOK){if(fontQ.indexOf(el)<0)fontQ.push(el);return}
  if(!layer)init();
  if(!el.__axw){el.__axw=1;el.__axt=performance.now();watch.push(el);setTimeout(function(){if(el.isConnected){el.__axp=1;sched()}},350)}
  var now=performance.now(),er=el.getBoundingClientRect();
  var j={el:el,t0:now,lines:[],imgs:[],dur:0,off:0,ex:er.left+pageXOffset,ey:er.top+pageYOffset,eh:er.height,ew:er.width};
  prep(j,er);el.__axp=j.off>0;
  if(!j.dur||j.bw<4||j.bh<4){end(j);return}
  var t0=now-last<200?Math.min(Math.max(now,last+SPD.blockGap),now+SPD.blockMax):now;last=t0;j.t0=t0;
  var d=dpr();while(j.bw*j.bh*d*d>4e6&&d>.5)d-=.25;j.dp=d;
  var c=document.createElement('canvas');c.width=Math.round(j.bw*d);c.height=Math.round(j.bh*d);
  c.style.cssText='position:absolute;width:'+j.bw+'px;height:'+j.bh+'px';
  j.c=c;j.cx=c.getContext('2d');place(j);layer.appendChild(c);
  jobs.push(j);j.to=setTimeout(function(){end(j)},j.dur+(t0-now)+2500);
  draw(j,0);
  if(!raf)raf=requestAnimationFrame(loop);
}
var watch=[],swT=0;
/* khối dài (hoặc ảnh lười nạp) chưa giải mã hết: cuộn tới đâu giải mã tới đó, giống hệt phần đầu */
function sweep(){
  swT=0;if(dead||frozen)return;var H=innerHeight;
  for(var i=0;i<watch.length;i++){
    var el=watch[i];
    if(!el.isConnected){watch.splice(i--,1);continue}
    if(!el.__axp)continue;
    var r=el.getBoundingClientRect();
    if(r.bottom<-60||r.top>H+60||r.height<4)continue;
    cover(el);
  }
}
function sched(){if(!swT)swT=setTimeout(sweep,140)}
addEventListener('scroll',sched,{passive:true});addEventListener('resize',sched);
document.addEventListener('load',function(e){var t=e.target;if(t&&t.tagName==='IMG'){var w=t.closest&&t.closest('.rv,.gsk,.gbn');if(w&&w.__axw){w.__axp=1;sched()}}},true);
/* AXR.state(): xem nhanh trạng thái (dead = máy quá chậm nên đã tự tắt; jobs = khối đang giải mã; waiting = khối chờ vì đang cuộn nhanh) */
window.AXR={cover:cover,state:function(){return{dead:dead,jobs:jobs.length,waiting:defQ.length}}};

function ready(){
  if(!layer)init();
  document.addEventListener('langchange',userChange);
  /* tắt hiệu ứng: dừng giải mã chữ ngay; bật lại (kể cả khi trang tải lúc đang tắt) thì các khối cuộn tới sau đó lại được giải mã */
  new MutationObserver(function(){var o=R.getAttribute('data-motion')==='off';if(o)freeze();else R.classList.add('ax')}).observe(R,{attributes:true,attributeFilter:['data-motion']});
  if(MOFF)return;
  /* chữ tĩnh ở đầu trang (thanh menu, nhãn đồng hồ, ngày, nút điểm danh, dòng gợi ý) giải mã cùng kiểu với phần còn lại; đồng hồ vẫn có hiệu ứng riêng */
  function statics(ms){setTimeout(function(){['header.bar','.clock-label','#date','.cue'].forEach(function(q){var e=document.querySelector(q);if(e)cover(e)})},ms)}
  /* nội dung do JS đổ vào muộn (danh sách Steam, thẻ…) trong 6 giây đầu sau khi khối hiện ra thì giải mã nốt; số đếm và khối trực tiếp thì bỏ qua để không nháy */
  var lio=window.IntersectionObserver?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){lio.unobserve(e.target);cover(e.target)}})},{threshold:.1,rootMargin:'0px 0px -5% 0px'}):null;
  var lastUser=0;['pointerdown','keydown'].forEach(function(n){addEventListener(n,function(){lastUser=performance.now()},{capture:true,passive:true})});
  function lone(el){if(!lio||!el||el.nodeType!==1||el.__axl||el.closest('.rv')||el.matches('script,style,template'))return;el.__axl=1;lio.observe(el)}
  document.querySelectorAll('section.s .wrap > *').forEach(lone);
  if(window.MutationObserver){
    new MutationObserver(function(ms){
      var now=performance.now();
      for(var i=0;i<ms.length;i++){
        var m=ms[i],el=m.target.nodeType===1?m.target:m.target.parentElement;
        for(var k=0;k<m.addedNodes.length;k++){
          var a=m.addedNodes[k];if(a.nodeType!==1)continue;
          if(el&&el.matches&&el.matches('section.s .wrap')&&now-lastUser>1500)lone(a);
          var w=el&&el.closest&&el.closest('.rv');
          if(w&&w.__axw&&now-w.__axt<=6000&&now-lastUser>1500&&!w.closest('#live,.stats,[data-noax]')){w.__axp=1;sched()}
        }
      }
    }).observe(document.body,{childList:true,subtree:true});
  }
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
  if(R.classList.contains('pre-on')){var mo=new MutationObserver(function(){if(R.classList.contains('ready')){mo.disconnect();hero();statics(600)}});mo.observe(R,{attributes:true,attributeFilter:['class']})}
  else{hero();statics(250)}
  var f=document.querySelector('footer');
  if(f&&'IntersectionObserver' in window){var io=new IntersectionObserver(function(es){if(es[0].isIntersecting){io.disconnect();cover(f)}},{rootMargin:'0px 0px 10% 0px'});io.observe(f)}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready);else ready();
})();
