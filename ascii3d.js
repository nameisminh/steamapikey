/* Tranh ASCII 3D theo ngày. File này chỉ được tải khi bấm nút ở chân trang (xem đoạn nhỏ trong index.html): vật thể dựng bằng hình khối, có ánh sáng, đổ bóng, tối góc và viền sáng; mỗi ô chữ lấy độ sáng của điểm trên vật. Chỉ dựng khi bấm, đóng là dừng hẳn. Xem thử: thêm ?asc=sn | noel | tet | hoa vào địa chỉ trang */
(function(){var b=document.getElementById('asb');
var BM=11,BD=8; /* ngày sinh: tháng, ngày */
var PICK=true; /* true: hiện các nút chọn hình để xem thử; đổi thành false để ẩn đi */
var o,cv,c,raf=0,t0=0,last=0,S,cur,W,H,fs,cw,cols,rows,CH,CL,DL=0,reduce=false;
var CA=1,SA=0,D=0,MT=0,OX=0,OY=0,OZ=0,AN=0,RR=0,RX=0,RZ=0,IDX=0,MH=0,MS=0,MB=1,ME=0,LX=-.446,LY=.714,LZ=-.535;
function hs(h,l){return'hsl('+h+',90%,'+l+'%)'}
function hash(a,k){var h=(a*374761393+k*668265263)|0;h=(h^(h>>>13))*1274126177|0;return((h^(h>>>16))>>>0)/4294967295}
function put(a,k){CH=a;CL=k;return 1}
function fall(i,j,t,snow){var h=hash(i,j-Math.floor(t*(5+i%4)));if(h>.012)return 0;return snow?put(h<.006?'•':'·','hsl(200,30%,88%)'):put('•',hs(h*30000%360|0,60))}
function fw(u,v,t,x0){
 var B=[[0,.3,0,10],[-.3,.2,1,200],[.3,.25,2,300],[-.15,.5,.6,60],[.2,.55,1.6,120]];
 for(var k=0;k<5;k++){var q=B[k],ph=((t+q[2])%3)/3,R=ph*.2+.005,dx=u-x0-q[0],dy=v-q[1];if(Math.abs(dx)>.3||Math.abs(dy)>.3)continue;var r=Math.hypot(dx,dy);
  if((r<R&&r>R-.04&&Math.sin(Math.atan2(dy,dx)*10)>.2)||Math.abs(r-R)<.006)return put(ph<.7?'•':'·',hs((q[3]+ph*60)%360|0,70-ph*30|0))}
 return 0}
/* hình khối (khoảng cách có dấu) */
function u(d,m){if(d<D){D=d;MT=m}}
function sph(x,y,z,cx,cy,cz,r){var a=x-cx,e=y-cy,f=z-cz;return Math.sqrt(a*a+e*e+f*f)-r}
function cyl(x,y,z,cx,cy,cz,r,h){var a=Math.sqrt((x-cx)*(x-cx)+(z-cz)*(z-cz))-r,e=Math.abs(y-cy)-h,p=Math.max(a,0),q=Math.max(e,0);return Math.min(Math.max(a,e),0)+Math.sqrt(p*p+q*q)}
function cone(x,y,z,cx,y0,r,h){var q=Math.sqrt((x-cx)*(x-cx)+z*z);return Math.max((q*h+(y-y0)*r-r*h)/Math.sqrt(h*h+r*r),y0-y)}
function ell(x,y,z,rx,ry,rz){var a=x/rx,e=y/ry,f=z/rz,k0=Math.sqrt(a*a+e*e+f*f);if(k0<1e-6)return-Math.min(rx,ry,rz);a/=rx;e/=ry;f/=rz;return k0*(k0-1)/Math.sqrt(a*a+e*e+f*f)}
function cap(x,y,z,ax,ay,az,bx,by,bz,r){var px=x-ax,py=y-ay,pz=z-az,qx=bx-ax,qy=by-ay,qz=bz-az,h=Math.max(0,Math.min(1,(px*qx+py*qy+pz*qz)/(qx*qx+qy*qy+qz*qz))),a=px-qx*h,e=py-qy*h,f=pz-qz*h;return Math.sqrt(a*a+e*e+f*f)-r}
function box(x,y,z,cx,cy,cz,hx,hy,hz,r){var a=Math.abs(x-cx)-hx+r,e=Math.abs(y-cy)-hy+r,f=Math.abs(z-cz)-hz+r,p=Math.max(a,0),q=Math.max(e,0),s=Math.max(f,0);return Math.sqrt(p*p+q*q+s*s)+Math.min(Math.max(a,e,f),0)-r}
function tor(x,y,z,cx,cy,cz,R,r){var q=Math.sqrt((x-cx)*(x-cx)+(z-cz)*(z-cz))-R,e=y-cy;return Math.sqrt(q*q+e*e)-r}
function ar(n){var s=6.283185307/n,k=Math.floor(AN/s),a=AN-k*s-s/2;IDX=k;RX=RR*Math.cos(a);RZ=RR*Math.sin(a)}
function chk(x,z,a,e){return((Math.floor(x*1.2)+Math.floor(z*1.2))&1)?a:e}
/* bánh kem */
var CK=[[0,0],[.28,.18],[-.28,.18]];
function mCake(x,y,z){
 u(cyl(x,y,z,0,.04,0,2.2,.04),6);
 if(y>3.2||RR>2.4)return;
 u(cyl(x,y,z,0,.45,0,1.5,.35)-.03,1);u(cyl(x,y,z,0,.8,0,1.56,.03),4);
 u(cyl(x,y,z,0,1.1,0,1.1,.3)-.03,2);u(cyl(x,y,z,0,1.4,0,1.14,.03),4);
 u(cyl(x,y,z,0,1.7,0,.75,.3)-.03,3);u(cyl(x,y,z,0,2,0,.79,.03),4);
 ar(14);u(ell(RX-1.53,y-.7,RZ,.07,.1+.09*(IDX&1),.07),4);
 ar(11);u(ell(RX-1.13,y-1.3,RZ,.06,.09+.07*(IDX&1),.06),4);
 ar(9);u(ell(RX-.78,y-1.9,RZ,.055,.09+.06*(IDX&1),.055),4);
 ar(30);u(sph(RX,y,RZ,1.55,.15,0,.07),8);
 ar(24);u(sph(RX,y,RZ,1.15,.85,0,.06),8);
 ar(18);u(sph(RX,y,RZ,.8,1.45,0,.05),8);
 ar(6);u(sph(RX,y,RZ,.55,2.12,0,.13),9);
 for(var k=0;k<3;k++){u(cyl(x,y,z,CK[k][0],2.25,CK[k][1],.045,.22),7);u(ell(x-CK[k][0],y-2.62,z-CK[k][1],.07,.14,.07),5)}}
function cCake(m,x,y,z){MS=70;MB=1;ME=0;var s=(Math.floor(Math.atan2(z,x)*5/Math.PI)&1)?1:.72;
 if(m===0){MH=220;MS=25;MB=chk(x,z,.3,.16)}
 else if(m===1){MH=335;MB=s}else if(m===2){MH=45;MB=s}else if(m===3){MH=190;MB=s}
 else if(m===4){MS=0;MB=1.1}else if(m===5){MH=40;ME=1}else if(m===6){MS=0;MB=.7}
 else if(m===7){MH=0;MS=(Math.floor(y*14)&1)?80:0;MB=1}else if(m===8){MH=45;MS=90;MB=1.25}else{MH=355;MS=90;MB=1.1}}
/* cây thông, quà và người tuyết */
var TX=-1.6,TT=[[.5,1.15,1.35],[1.2,.9,1.2],[1.85,.62,1.05]],SX=1.6;
function mNoel(x,y,z){
 var k,t;
 for(k=0;k<3;k++)u(cone(x,y,z,TX,TT[k][0],TT[k][1],TT[k][2]),1);
 u(cyl(x,y,z,TX,.25,0,.2,.25),2);
 if(sph(x,y,z,TX,3.1,0,.4)<.3){u(sph(x,y,z,TX,3.1,0,.12),5);for(k=0;k<5;k++){t=k*1.2566;u(cap(x,y,z,TX,3.1,0,TX+Math.sin(t)*.32,3.1+Math.cos(t)*.32,0,.03),5)}}
 var a=Math.atan2(z,x-TX),r=Math.sqrt((x-TX)*(x-TX)+z*z);
 for(k=0;k<3;k++){var n=8-k,s=6.283185307/n,aa=a+k*.5-s*Math.floor((a+k*.5)/s)-s/2,yo=TT[k][0]+.3,rs=(TT[k][0]+TT[k][2]-yo)/TT[k][2]*TT[k][1]+.04;u(sph(r*Math.cos(aa),y,r*Math.sin(aa),rs,yo,0,.09),13)}
 u(box(x,y,z,-.45,.3,-.95,.3,.3,.3,.04),9);u(box(x,y,z,-.45,.3,-.95,.05,.32,.32,.01),11);u(box(x,y,z,-.45,.3,-.95,.32,.32,.05,.01),11);
 u(box(x,y,z,.35,.22,-.9,.22,.22,.22,.04),10);u(box(x,y,z,.35,.22,-.9,.04,.24,.24,.01),12);u(box(x,y,z,.35,.22,-.9,.24,.24,.04,.01),12);
 u(sph(x,y,z,SX,.7,0,.7),3);u(sph(x,y,z,SX,1.7,0,.5),3);u(sph(x,y,z,SX,2.4,0,.36),3);
 u(tor(x,y,z,SX,2.05,0,.38,.08),8);u(cap(x,y,z,SX-.35,2.0,-.2,SX-.45,1.6,-.3,.06),8);
 u(cyl(x,y,z,SX,2.75,0,.46,.03),4);u(cyl(x,y,z,SX,3,0,.27,.22),4);u(tor(x,y,z,SX,2.84,0,.27,.04),8);
 u(cap(x,y,z,SX,2.42,-.32,SX,2.4,-.66,.055),6);u(sph(x,y,z,SX-.12,2.5,-.31,.04),7);u(sph(x,y,z,SX+.12,2.5,-.31,.04),7);
 u(sph(x,y,z,SX,1.95,-.47,.05),7);u(sph(x,y,z,SX,1.68,-.5,.05),7);u(sph(x,y,z,SX,1.4,-.48,.05),7);
 u(cap(x,y,z,SX-.4,1.8,0,SX-1,2.4,0,.04),14);u(cap(x,y,z,SX+.4,1.8,0,SX+1,2.3,0,.04),14)}
function cNoel(m,x,y,z){MS=70;MB=1;ME=0;
 if(m===0){MH=210;MS=15;MB=chk(x,z,.4,.25)}
 else if(m===1){MH=135;MS=65}else if(m===2){MH=25;MS=50;MB=.6}else if(m===3){MH=200;MS=10;MB=1.05}
 else if(m===4){MH=0;MS=80;MB=.8}else if(m===5){MH=50;ME=1}else if(m===6){MH=25;MB=1.3}
 else if(m===7){MS=0;MB=.2}else if(m===8){MH=0;MS=85;MB=1}else if(m===9){MH=355;MS=85}
 else if(m===10){MH=140;MS=70}else if(m===11){MH=48;MS=90;MB=1.3}else if(m===12){MS=0;MB=1.2}
 else if(m===13){MH=hash(Math.floor(Math.atan2(z,x-TX)*3),Math.floor(y*3))*360;MB=1.6}else{MH=25;MS=40;MB=.5}}
/* bó hoa */
var FL=[[-1.05,2.7,.8,340],[.1,3.05,.95,45],[1.15,2.55,.75,285]];
function mFlow(x,y,z){
 var i,k,f,s,bx,by,r,a,ca,sa,lx,ly;
 for(i=0;i<3;i++){f=FL[i];s=f[2];bx=x-f[0];by=y-f[1];r=Math.sqrt(bx*bx+by*by+z*z);
  if(r>1.5*s){u(r-1.4*s,i+1)}else{
   for(k=0;k<8;k++){a=k*.7854;ca=Math.cos(a);sa=Math.sin(a);lx=bx*ca+by*sa;ly=by*ca-bx*sa;u(ell(lx-.66*s,ly,z+.16*lx*lx/s+.02*s,.56*s,.27*s,.11*s),i+1)}
   for(k=0;k<6;k++){a=k*1.0472+.52;ca=Math.cos(a);sa=Math.sin(a);lx=bx*ca+by*sa;ly=by*ca-bx*sa;u(ell(lx-.4*s,ly,z+.14*s+.2*lx*lx/s,.4*s,.2*s,.1*s),i+11)}
   u(sph(bx,by,z+.1*s,0,0,0,.26*s),4)}
  u(cap(x,y,z,f[0],f[1]-.2,0,0,1.15,0,.06),5);
  var lpx=x-(f[0]*.5+(f[0]<0?-.25:.25)),lpy=y-(f[1]+.95)/2;u(ell(lpx*.82+lpy*.57,lpy*.82-lpx*.57,z,.34,.09,.14),5)}
 var pr=.55+.35*Math.sin(Math.min(1,Math.max(0,y/1.2))*3.1416);
 u(Math.max((RR-pr)*.75,Math.abs(y-.6)-.6),6);u(tor(x,y,z,0,1.2,0,.55,.06),8)}
function cFlow(m,x,y,z){MS=85;MB=1;ME=0;
 if(m===0){MH=220;MS=25;MB=chk(x,z,.3,.16)}
 else if(m<4){MH=FL[m-1][3];MB=.95}else if(m>10&&m<14){MH=FL[m-11][3];MB=1.2;MS=70}
 else if(m===4){var h=hash(Math.floor(x*22),Math.floor(y*22));MH=h<.5?48:28;MB=h<.5?1.3:.8}
 else if(m===5){MH=130;MS=60;MB=.8}else if(m===6){MH=205;MS=40;MB=(Math.floor(y*7)&1)?1.05:.8}else{MH=45;MS=90;MB=1.2}}
/* đèn lồng và bao lì xì ngày Tết */
var LT=[[-1.5,2],[1.5,1.75]];
function mTet(x,y,z){
 for(var k=0;k<2;k++){var sx=LT[k][0],sy=LT[k][1],b=ell(x-sx,y-sy,z,.8,.95,.8);
  if(b<.3)b-=.03*(.5+.5*Math.cos(Math.atan2(z,x-sx)*12));
  u(b,1);u(cyl(x,y,z,sx,sy+.95,0,.3,.07),2);u(cyl(x,y,z,sx,sy-.95,0,.3,.07),2);u(tor(x,y,z,sx,sy+1.03,0,.26,.04),2);
  u(cyl(x,y,z,sx,sy+1.35,0,.02,.3),2);u(cyl(x,y,z,sx,sy-1.4,0,.05,.3),2);u(sph(x,y,z,sx,sy-1.8,0,.12),2);u(ell(x-sx,y-(sy-2.1),z,.1,.22,.1),2)}
 u(box(x,y,z,0,1.5,0,.45,.62,.04,.03),1);u(ell(x,y-1.62,z+.05,.2,.2,.05),2);u(box(x,y,z,0,1.2,-.045,.3,.05,.01,.01),2);u(cyl(x,y,z,0,2.45,0,.015,.4),2)}
function cTet(m,x,y,z){MS=80;MB=1;ME=0;
 if(m===0){MH=0;MS=30;MB=chk(x,z,.3,.16)}
 else if(m===1){MH=2;MB=(Math.floor(Math.atan2(z,x+(y>1.85?1.5:-1.5))*5/Math.PI)&1)?1:.8}else{MH=46;MS=90;MB=1.2}}
function tet(d){try{var mo,da;new Intl.DateTimeFormat('en-u-ca-chinese',{month:'numeric',day:'numeric'}).formatToParts(d).forEach(function(x){if(x.type==='month')mo=x.value;if(x.type==='day')da=+x.value});return mo==='1'&&da<=5}catch(e){return false}}
function pick(){var q=(location.search.match(/[?&]asc=(\w+)/)||[])[1];if(q)return q;var d=new Date(),m=d.getMonth()+1,n=d.getDate();
 if(m===BM&&n===BD)return'sn';if(m===3&&n===8)return'hoa';if(m===12&&n>=20&&n<=26)return'noel';if(tet(d))return'tet';return'hoa'}
var LIST=[['sn','Bánh kem'],['hoa','Hoa'],['noel','Giáng sinh'],['tet','Tết']];
function scene(k){var sw=function(t){return Math.sin(t*.6)*.55};
 return{hoa:{m:mFlow,c:cFlow,cam:[3,7.5,2.2],spin:sw},
 sn:{m:mCake,c:cCake,pol:1,cam:[3,6.5,1.5],spin:function(t){return t*.5},bg:function(i,j,t){return fall(i,j,t,0)}},
 noel:{m:mNoel,c:cNoel,cam:[3.2,8.5,1.5],spin:function(t){return t*.45},bg:function(i,j,t){return fall(i,j,t,1)}},
 tet:{m:mTet,c:cTet,cam:[3,8,1.4],spin:function(t){return Math.sin(t*.7)*.5},bg:function(i,j,t,xc,yc){return fw(xc/H,yc/H,t,W/2/H)}}}[k]||0}
function M(x,y,z){D=1e9;var ox=x*CA+z*SA,oz=z*CA-x*SA;OX=ox;OY=y;OZ=oz;RR=Math.sqrt(ox*ox+oz*oz);if(S.pol)AN=Math.atan2(oz,ox);u(Math.max(y,RR-3.4),0);S.m(ox,y,oz);return D}
function trace(sx,sy,fy,fz,T,cy,cd){
 var dx=sx*T,dy=fy+sy*T*fz,dz=fz-sy*T*fy,q=1/Math.sqrt(dx*dx+dy*dy+dz*dz);dx*=q;dy*=q;dz*=q;
 var tt=0,n=0,d;
 for(;n<44;n++){d=M(dx*tt,cy+dy*tt,-cd+dz*tt);if(d<.008)break;tt+=d;if(tt>20)return 0}
 if(n>=44)return 0;
 var px=dx*tt,py=cy+dy*tt,pz=-cd+dz*tt;M(px,py,pz);S.c(MT,OX,OY,OZ);
 var e=.01,d1=M(px+e,py-e,pz-e),d2=M(px-e,py-e,pz+e),d3=M(px-e,py+e,pz-e),d4=M(px+e,py+e,pz+e),
  nx=d1-d2-d3+d4,ny=-d1-d2+d3+d4,nz=-d1+d2-d3+d4,nl=Math.sqrt(nx*nx+ny*ny+nz*nz)||1;nx/=nl;ny/=nl;nz/=nl;
 var dif=Math.max(0,nx*LX+ny*LY+nz*LZ),res=1,k;
 if(dif>0){var st=.05,a=px+nx*.03,f=py+ny*.03,g=pz+nz*.03;for(k=0;k<20;k++){var h=M(a+LX*st,f+LY*st,g+LZ*st);if(h<.002){res=0;break}res=Math.min(res,8*h/st);st+=h;if(st>7)break}}
 var ao=1;if(MT)for(k=1;k<3;k++){var hh=.13*k;ao-=Math.max(0,hh-M(px+nx*hh,py+ny*hh,pz+nz*hh))*1.6/(1+k)}ao=Math.max(.3,ao);
 var hx=LX-dx,hy=LY-dy,hz=LZ-dz,hl=Math.sqrt(hx*hx+hy*hy+hz*hz)||1,sp=Math.pow(Math.max(0,(nx*hx+ny*hy+nz*hz)/hl),30)*.4,
  rim=Math.pow(1-Math.max(0,-(nx*dx+ny*dy+nz*dz)),3)*.3,
  lum=ME?1:Math.min(1,((.09+.07*ny)*ao+.85*dif*res)*MB+(sp*res+rim)*ao);
 DL=MT?lum:lum*.55;CL='hsl('+MH+','+(MS*.75|0)+'%,'+(8+lum*62|0)+'%)';return 1}
function draw(t){c.fillStyle='#05070a';c.fillRect(0,0,W,H);c.font='700 '+fs+'px ui-monospace,Consolas,monospace';c.textBaseline='middle';c.textAlign='center';
 var a=S.spin(t);CA=Math.cos(a);SA=Math.sin(a);
 var cm=S.cam,cy=cm[0],cd=cm[1],ty=cm[2],l=Math.hypot(ty-cy,cd),fy=(ty-cy)/l,fz=cd/l,Zs=Math.max(1,.8/(W/H)),T=.42*Zs;
 for(var j=0;j<rows;j++){var yc=j*fs+fs/2,sy=(H/2-yc)/(H/2)*Zs;for(var i=0;i<cols;i++){var xc=i*cw+cw/2;
  var hit=trace((xc-W/2)/(H/2)*Zs,sy,fy,fz,T,cy,cd);if(!hit&&!(S.bg&&S.bg(i,j,t,xc,yc)))continue;
  c.fillStyle=CL;if(hit){c.beginPath();c.arc(xc,yc,cw*.5*(.14+.88*DL),0,6.2832);c.fill()}else c.fillText(CH,xc,yc)}}}
var ema=24,fb=0;
function grid(f){fs=f;cw=f;cols=Math.ceil(W/cw);rows=Math.ceil(H/fs)}
/* máy yếu thì tự thưa ô chữ lại, máy khỏe thì mịn lại */
function loop(ts){raf=requestAnimationFrame(loop);if(ts-last<42)return;last=ts;var a=performance.now();draw((ts-t0)/1000);ema=ema*.8+(performance.now()-a)*.2;if(ema>32&&fs<fb*2.4){grid(fs*1.15);ema=24}else if(ema<13&&fs>fb*1.01){grid(Math.max(fb,fs/1.1));ema=24}}
function show(k){cur=scene(k)?k:'hoa';S=scene(cur);t0=performance.now();[].forEach.call(o.querySelectorAll('.pk button'),function(x){x.classList.toggle('on',x.dataset.k===cur)});if(reduce)draw(1.5)}
function open(){if(!o){o=document.createElement('div');o.id='aso';o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');o.setAttribute('aria-label','Tranh ASCII 3D');
 o.innerHTML='<canvas></canvas><div class="pk"></div><button type="button" class="x" aria-label="Đóng">×</button><p>Bấm bất kỳ đâu hoặc Esc để đóng</p>';document.body.appendChild(o);cv=o.querySelector('canvas');c=cv.getContext('2d');o.addEventListener('click',close);
 var pk=o.querySelector('.pk');pk.hidden=!PICK;pk.addEventListener('click',function(e){e.stopPropagation()});
 LIST.forEach(function(l){var x=document.createElement('button');x.type='button';x.dataset.k=l[0];x.textContent=l[1];x.addEventListener('click',function(){show(l[0])});pk.appendChild(x)})}
 W=cv.width=innerWidth;H=cv.height=innerHeight;fb=Math.max(H/100,W/190);grid(fb);ema=24;
 reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 o.hidden=false;document.documentElement.style.overflow='hidden';o.querySelector('.x').focus();show(pick());
 addEventListener('keydown',esc);document.addEventListener('visibilitychange',vis);if(!reduce)raf=requestAnimationFrame(loop)}
function esc(e){if(e.key==='Escape')close()}
function vis(){cancelAnimationFrame(raf);if(!document.hidden&&!reduce)raf=requestAnimationFrame(loop)}
/* đóng là gỡ hẳn: dừng vòng vẽ, bỏ sự kiện, xoá khung và canvas khỏi bộ nhớ */
function close(){if(!o)return;cancelAnimationFrame(raf);raf=0;removeEventListener('keydown',esc);document.removeEventListener('visibilitychange',vis);o.remove();o=cv=c=S=null;document.documentElement.style.overflow='';if(b)b.focus()}
window.__ascOpen=open;
})();
