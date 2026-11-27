/* Tranh ASCII 3D theo ngày. File này chỉ được tải khi bấm nút ở chân trang (xem đoạn nhỏ trong index.html): vật thể dựng bằng hình khối, có ánh sáng, đổ bóng, tối góc và viền sáng; mỗi ô chữ lấy độ sáng của điểm trên vật. Chỉ dựng khi bấm, đóng là dừng hẳn. Xem thử: thêm ?asc=sn | noel | tet | hoa vào địa chỉ trang */
(function(){var b=document.getElementById('asb');
var BM=11,BD=8; /* ngày sinh: tháng, ngày */
var PICK=true; /* true: hiện các nút chọn hình để xem thử; đổi thành false để ẩn đi */
var o,cv,gcv,c,raf=0,t0=0,last=0,S,cur,W,H,fs,cw,cols,rows,CH,CL,DL=0,reduce=false;
var BD=[0,1.5,0,4],TYS=-1,CA=1,SA=0,D=0,MT=0,OX=0,OY=0,OZ=0,AN=0,RR=0,RX=0,RZ=0,IDX=0,MH=0,MS=0,MB=1,ME=0,LX=-.446,LY=.714,LZ=-.535;
function hs(h,l){return'hsl('+h+',90%,'+l+'%)'}
function hash(a,k){var h=(a*374761393+k*668265263)|0;h=(h^(h>>>13))*1274126177|0;return((h^(h>>>16))>>>0)/4294967295}
function put(a,k){CH=a;CL=k;return 1}
function fall(i,j,t,snow){var h=hash(i,j-Math.floor(t*(5+i%4)));if(h>.012)return 0;return snow?put(h<.006?'•':'·','hsl(200,30%,88%)'):put('•',hs(h*30000%360|0,60))}
function fw(u,v,t,x0){
 var B=[[0,.3,0,40],[-.3,.2,1,8],[.3,.25,2,50]];
 for(var k=0;k<3;k++){var q=B[k],ph=((t+q[2])%3)/3,R=ph*.2+.005,dx=u-x0-q[0],dy=v-q[1];if(Math.abs(dx)>.3||Math.abs(dy)>.3)continue;var r=Math.hypot(dx,dy);
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
 if(!gb(x,y,z,0,.55,0,1.8,1)){u(cyl(x,y,z,0,.45,0,1.5,.35)-.03,1);u(cyl(x,y,z,0,.8,0,1.56,.03),4);ar(14);u(ell(RX-1.53,y-.7,RZ,.07,.1+.09*(IDX&1),.07),4);ar(30);u(sph(RX,y,RZ,1.55,.15,0,.07),8)}
 if(!gb(x,y,z,0,1.2,0,1.45,2)){u(cyl(x,y,z,0,1.1,0,1.1,.3)-.03,2);u(cyl(x,y,z,0,1.4,0,1.14,.03),4);ar(11);u(ell(RX-1.13,y-1.3,RZ,.06,.09+.07*(IDX&1),.06),4);ar(24);u(sph(RX,y,RZ,1.15,.85,0,.06),8)}
 if(!gb(x,y,z,0,2.2,0,1.25,3)){u(cyl(x,y,z,0,1.7,0,.75,.3)-.03,3);u(cyl(x,y,z,0,2,0,.79,.03),4);ar(9);u(ell(RX-.78,y-1.9,RZ,.055,.09+.06*(IDX&1),.055),4);ar(18);u(sph(RX,y,RZ,.8,1.45,0,.05),8);ar(6);u(sph(RX,y,RZ,.55,2.12,0,.13),9);
  for(var k=0;k<3;k++){u(cyl(x,y,z,CK[k][0],2.25,CK[k][1],.045,.22),7);u(ell(x-CK[k][0],y-2.62,z-CK[k][1],.07,.14,.07),5)}}}
function cCake(m,x,y,z){MS=70;MB=1;ME=0;var s=(Math.floor(Math.atan2(z,x)*5/Math.PI)&1)?1:.72;
 if(m===0){MH=220;MS=25;MB=chk(x,z,.3,.16)}
 else if(m===1){MH=335;MB=s}else if(m===2){MH=45;MB=s}else if(m===3){MH=190;MB=s}
 else if(m===4){MS=0;MB=1.1}else if(m===5){MH=40;ME=1}else if(m===6){MS=0;MB=.7}
 else if(m===7){MH=0;MS=(Math.floor(y*14)&1)?80:0;MB=1}else if(m===8){MH=45;MS=90;MB=1.25}else{MH=355;MS=90;MB=1.1}}
/* cây thông, quà và người tuyết */
var TX=-1.6,TT=[[.5,1.15,1.35],[1.2,.9,1.2],[1.85,.62,1.05]],SX=1.6;
function mNoel(x,y,z){
 var k,t;
 if(!gb(x,y,z,TX,1.8,0,2,1)){
 for(k=0;k<3;k++)u(cone(x,y,z,TX,TT[k][0],TT[k][1],TT[k][2]),1);
 u(cyl(x,y,z,TX,.25,0,.2,.25),2);
 if(sph(x,y,z,TX,3.1,0,.4)<.3){u(sph(x,y,z,TX,3.1,0,.12),5);for(k=0;k<5;k++){t=k*1.2566;u(cap(x,y,z,TX,3.1,0,TX+Math.sin(t)*.32,3.1+Math.cos(t)*.32,0,.03),5)}}
 var a=Math.atan2(z,x-TX),r=Math.sqrt((x-TX)*(x-TX)+z*z);
 for(k=0;k<3;k++){var n=8-k,s=6.283185307/n,aa=a+k*.5-s*Math.floor((a+k*.5)/s)-s/2,yo=TT[k][0]+.3,rs=(TT[k][0]+TT[k][2]-yo)/TT[k][2]*TT[k][1]+.04;u(sph(r*Math.cos(aa),y,r*Math.sin(aa),rs,yo,0,.09),13)}}
 if(!gb(x,y,z,-.05,.3,-.93,.85,9)){u(box(x,y,z,-.45,.3,-.95,.3,.3,.3,.04),9);u(box(x,y,z,-.45,.3,-.95,.05,.32,.32,.01),11);u(box(x,y,z,-.45,.3,-.95,.32,.32,.05,.01),11);
 u(box(x,y,z,.35,.22,-.9,.22,.22,.22,.04),10);u(box(x,y,z,.35,.22,-.9,.04,.24,.24,.01),12);u(box(x,y,z,.35,.22,-.9,.24,.24,.04,.01),12)}
 if(gb(x,y,z,SX,1.7,0,1.9,3))return;
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
/* bó hoa trong lọ, treo bằng sợi dây rồi hạ xuống và nở dần (giống video mẫu) */
var GY=0,BL=1,BQ=[];
(function(){var N=24,i,th,ph,h,R,r;for(i=0;i<N;i++){h=hash(i,7);th=Math.acos(1-(i+.5)/N*.9);ph=i*2.39996;R=i%5===4?1.4:1.1;r=(i%5===4?.34:.44)+.12*hash(i,3);
 BQ.push([R*Math.sin(th)*Math.cos(ph),2.35+R*Math.cos(th)*.8,R*Math.sin(th)*Math.sin(ph),r,i%5===4?7:1+Math.floor(hash(i,5)*6)])}})();
function mFlow(x,y,z){
 var yy=y-GY,bx=Math.sqrt(x*x+(yy-2.4)*(yy-2.4)+z*z),i,q,dx,dy,dz,dd,r,a;
 if(bx>2.3){u(bx-2.2,1)}else{
  for(i=0;i<BQ.length;i++){q=BQ[i];dx=x-q[0];dy=yy-q[1];dz=z-q[2];r=q[3]*BL;dd=Math.sqrt(dx*dx+dy*dy+dz*dz);
   if(dd>r*1.4)u(dd-r*1.2,q[4]);else{a=Math.atan2(dz,dx);u(dd-r*(1+.13*Math.cos(5*a+7*dy/r)+.06*Math.cos(9*a-5*dy/r)),q[4])}}
  if(yy<2.2&&yy>1.5){ar(10);u(ell(RX-1.15,yy-1.95,RZ,.55,.1,.2),7)}}
 if(RR<1.5&&yy<2){
  u(ell(x,yy-.85,z,.85,.95,.85),8);u(cyl(x,yy,z,0,1.65,0,.45,.17),8);u(tor(x,yy,z,0,1.82,0,.5,.07),9);u(cyl(x,yy,z,0,.05,0,.5,.06),9);
  var sg=x<0?-1:1,ax=x*sg;u(cap(ax,yy,z,.7,1.45,0,1.05,1.25,0,.06),9);u(cap(ax,yy,z,1.05,1.25,0,1.12,.8,0,.06),9);u(cap(ax,yy,z,1.12,.8,0,.82,.45,0,.06),9)}
}
function cFlow(m,x,y,z){MS=80;MB=1;ME=0;
 if(m===1){MH=335+hash(Math.floor(x*4),Math.floor(y*4))*20}else if(m===2){MH=352}else if(m===3){MH=215;MS=70}else if(m===4){MH=48;MS=90;MB=1.1}
 else if(m===5){MS=0;MB=1.1}else if(m===6){MH=285;MS=65}else if(m===7){MH=130;MS=55;MB=.8}
 else if(m===8){MH=235+((Math.floor(Math.atan2(z,x)*4/Math.PI+(y-GY)*3)&1)?35:0);MS=55;MB=1.9}else if(m===9){MH=46;MS=85;MB=1.2}else{MS=0;MB=1.4}}
/* Tết Việt Nam: cây đào, bánh chưng, bao lì xì, đèn lồng, hoa đào rơi */
var TB=[];
(function(){var P=[[[.1,1.5],[.9,2.1],[1.35,2.95]],[[-.2,2.2],[-.9,2.7],[-1.25,3.45]],[[-.2,2.2],[.3,3],[.15,3.65]],[[.9,2.1],[1.5,2],[1.9,2.4]],[[.1,1.5],[-.2,2.2],[-.5,2.6]]],i,k,s,h;
 for(i=0;i<P.length;i++)for(k=0;k<2;k++)for(s=1;s<=7;s++){h=s/7;var ax=P[i][k][0],ay=P[i][k][1],bx=P[i][k+1][0],by=P[i][k+1][1],n=i*14+k*7+s;
  TB.push([ax+(bx-ax)*h+(hash(n,1)-.5)*.35,ay+(by-ay)*h+(hash(n,2)-.5)*.3,(hash(n,3)-.5)*.5,.19+.09*hash(n,4)])}})();
var TC=[];(function(){for(var c0=0;c0<TB.length;c0+=14){var cx=0,cy=0,cz=0,i,rm=0;for(i=c0;i<c0+14;i++){cx+=TB[i][0];cy+=TB[i][1];cz+=TB[i][2]}cx/=14;cy/=14;cz/=14;for(i=c0;i<c0+14;i++)rm=Math.max(rm,Math.hypot(TB[i][0]-cx,TB[i][1]-cy,TB[i][2]-cz)+TB[i][3]*1.3);TC.push([cx,cy,cz,rm,c0,c0+14])}})();
var LT=[[-1.9,3.2,.55],[1.9,2.9,.6]],FR=[[.4,.25,-1.3,.16,9],[.12,.25,-1.62,.16,9],[-.33,.25,-1.5,.16,10],[-.33,.25,-1.1,.16,7],[.12,.25,-.98,.16,11],[0,.46,-1.3,.17,10],[.14,.38,-1.32,.15,9]];
function gb(x,y,z,cx,cy,cz,r,m){var a=x-cx,e=y-cy,f=z-cz,d=Math.sqrt(a*a+e*e+f*f);if(d>r){u(d-r+.04,m);return 1}return 0}
function mTet(x,y,z){
 var i,q,dx,dy,dz,dd,r,a,k,L,b;
 if(!gb(x,y,z,0,2.2,0,2.7,2)){
  if(!gb(x,y,z,0,1,0,1.45,2)){u(cyl(x,y,z,0,.35,0,.55,.35)-.03,1);u(tor(x,y,z,0,.7,0,.55,.05),5);u(cap(x,y,z,0,.7,0,.1,1.5,0,.1),2);u(cap(x,y,z,.1,1.5,0,-.2,2.2,0,.085),2)}
  if(!gb(x,y,z,1.1,2.2,0,1.2,2)){u(cap(x,y,z,.1,1.5,0,.9,2.1,.1,.065),2);u(cap(x,y,z,.9,2.1,.1,1.35,2.95,0,.05),2);u(cap(x,y,z,.9,2.1,.1,1.5,2,0,.045),2);u(cap(x,y,z,1.5,2,0,1.9,2.4,0,.04),2)}
  if(!gb(x,y,z,-.7,2.8,0,1,2)){u(cap(x,y,z,-.2,2.2,0,-.9,2.7,.1,.06),2);u(cap(x,y,z,-.9,2.7,.1,-1.25,3.45,0,.045),2)}
  if(!gb(x,y,z,.1,2.9,0,.95,2)){u(cap(x,y,z,-.2,2.2,0,.3,3,-.1,.055),2);u(cap(x,y,z,.3,3,-.1,.15,3.65,0,.04),2)}
  for(k=0;k<TC.length;k++){L=TC[k];dx=x-L[0];dy=y-L[1];dz=z-L[2];dd=Math.sqrt(dx*dx+dy*dy+dz*dz);
   if(dd>L[3]+.3){u(dd-L[3],3);continue}
   for(i=L[4];i<L[5];i++){q=TB[i];dx=x-q[0];dy=y-q[1];dz=z-q[2];r=q[3];dd=Math.sqrt(dx*dx+dy*dy+dz*dz);
    if(dd>r*1.22)u(dd-r*1.19,3);else{a=Math.atan2(dz,dx);u(dd-r*(1+.18*Math.cos(5*a+6*dy/r)),3)}}}}
 if(!gb(x,y,z,0,.3,-1.3,1,5)){u(cyl(x,y,z,0,.08,-1.3,.72,.04),5);u(cyl(x,y,z,0,.03,-1.3,.3,.04),5);for(i=0;i<FR.length;i++)u(sph(x,y,z,FR[i][0],FR[i][1],FR[i][2],FR[i][3]),FR[i][4])}
 if(!gb(x,y,z,-1.75,.3,-.75,.95,4)){u(box(x,y,z,-1.45,.28,-1,.4,.28,.4,.05),4);u(box(x,y,z,-1.45,.28,-1,.03,.3,.42,.01),6);u(box(x,y,z,-1.45,.28,-1,.42,.3,.03,.01),6);u(box(x,y,z,-1.45,.28,-1,.42,.03,.42,.01),6);
  u(box(x,y,z,-2.05,.24,-.45,.34,.24,.34,.05),4);u(box(x,y,z,-2.05,.24,-.45,.03,.26,.36,.01),6);u(box(x,y,z,-2.05,.24,-.45,.36,.26,.03,.01),6)}
 if(!gb(x,y,z,1.72,.5,-.62,.8,7)){u(box(x,y,z,1.5,.55,-.8,.28,.5,.03,.03),7);u(ell(x-1.5,y-.7,z+.84,.14,.14,.03),5);u(box(x,y,z,1.95,.5,-.45,.26,.46,.03,.03),7);u(ell(x-1.95,y-.62,z+.49,.13,.13,.03),5)}
 for(k=0;k<2;k++){L=LT[k];if(gb(x,y,z,L[0],L[1]-.4,0,L[2]*1.6+1.2,8))continue;
  b=ell(x-L[0],y-L[1],z,L[2]*.8,L[2]*.95,L[2]*.8);if(b<.3)b-=.025*(.5+.5*Math.cos(Math.atan2(z,x-L[0])*12));
  u(b,8);u(cyl(x,y,z,L[0],L[1]+L[2]*.95,0,.2,.05),5);u(cyl(x,y,z,L[0],L[1]-L[2]*.95,0,.2,.05),5);u(cyl(x,y,z,L[0],L[1]+L[2]*.95+.6,0,.012,.6),5);
  u(cyl(x,y,z,L[0],L[1]-L[2]*.95-.3,0,.04,.28),5);u(sph(x,y,z,L[0],L[1]-L[2]*.95-.65,0,.09),5)}}
function cTet(m,x,y,z){MS=80;MB=1;ME=0;
 if(m===0){var gr=Math.sqrt(x*x+z*z);if(gr>2.9&&gr<3.12){MH=46;MS=85;MB=.9}else{MH=355;MS=70;MB=chk(x,z,.42,.28)}}else if(m===1){MH=8;MS=70;MB=.95}else if(m===2){MH=25;MS=45;MB=.6}
 else if(m===3){MH=335+hash(Math.floor(x*5),Math.floor(y*5))*22;MS=65;MB=1.25}else if(m===4){MH=125;MS=45;MB=.85}
 else if(m===5){MH=46;MS=90;MB=1.2}else if(m===6){MH=62;MS=55;MB=1.1}else if(m===7){MH=355;MS=85}else if(m===9){MH=28;MS=95;MB=1.25}else if(m===10){MH=95;MS=60;MB=1}else if(m===11){MH=338;MS=75;MB=1.1}
 else{MH=2;MB=(Math.floor(Math.atan2(z,x-(x<0?-1.9:1.9))*5/Math.PI)&1)?1:.8}}
function petal(i,j,t){var h=hash(i*3,j-Math.floor(t*(4+i%3)));if(h>.011)return 0;return put(h<.005?'•':'·',hs(335+h*5000%25|0,72))}
function tet(d){try{var mo,da;new Intl.DateTimeFormat('en-u-ca-chinese',{month:'numeric',day:'numeric'}).formatToParts(d).forEach(function(x){if(x.type==='month')mo=x.value;if(x.type==='day')da=+x.value});return mo==='1'&&da<=5}catch(e){return false}}
/* trái tim ghép từ chữ "anh yêu em" bằng nhiều ngôn ngữ (giống video mẫu) */
var LV=["I love you","Saranghae","Aishiteru","Aku cinta kamu","Saya cintakan awak","Wo ai ni","Te quiero","Je t'aime","Ich liebe dich","Ti amo","Eu te amo","Ya tebya lyublyu","Uhibbuka","Main tumse pyar karta hoon","Chan rak khun","Seni seviyorum","Mahal kita","Ik hou van jou","Kocham cię","Jag älskar dig","S'agapo","Ani ohev otach","Dooset daram","Ya tebe kokhayu","Ami tomake bhalobashi","Miluji tě","Te iubesc","Szeretlek","Rakastan sinua","Jeg elsker dig","Jeg elsker deg","Nakupenda","T'estimo","Volim te","Obicham te","Ľúbim ťa","Ek is lief vir jou","Ég elska þig","Mīlu tevi","Aš tave myliu","Armastan sind","Të dua","Ngo oi nei","Wa ai li","Bi chamd khairtai","Naan unnai kaadhalikkiren","Nenu ninnu premistunnanu","Mi tujhyavar prem karto","Hu tane prem karu chu","Main tenu pyar karda haan","Ma timilai maya garchu","Mama oyata adarei","Bong srolanh oun","Khoy hak jao","Chit pa de","Aloha au ia 'oe","Au domoni iko","Ou te alofa ia te oe","Ofa atu","Aroha ahau ki a koe","Mi amas vin","Te amo","Maite zaitut","Quérote","Tá grá agam duit","Tha gaol agam ort","Dw i'n dy garu di","Me a'th kar","Da garout a ran","Ech hunn dech gär","Ik hâld fan dy","Eg elski teg","Inħobbok","Te sakam","Ljubim te","Ya tsyabe kakhayu","Miqvarkhar","Yes kez sirum em","Səni sevirəm","Men seni zhaqsy köremin","Men seni sevaman","Men seni süyöm","Min sine yaratam","Man turo dust medoram","Za ta sara mina kawom","Ez ji te hez dikim","Mujhe tumse mohabbat hai","Ewedishalehu","Waan ku jeclahay","Ina son ka","Mo nifẹ rẹ","A hụrụ m gị n'anya","Ngiyakuthanda","Ndiyakuthanda","Ndinokuda","Ndagukunda","Nalingi yo","Tiako ianao","Dama la nob","Ke a o rata","Me dɔ wo","Mwen renmen ou","Munakuyki","Rohayhu","Nimitztlazohtla","Aku tresno marang kowe","Abdi bogoh ka anjeun","Kuv hlub koj","Asavakkit","Ikh hob dikh lib","Aham tvam kamayami","Men seni söyimen","Mi lavem yu","Mi laikim yu","Njan ninne snehikkunnu","Naanu ninnannu preetisuttene","Mu tumaku bhala pae","Moi tumak bhal pau","Ti tengu caru","Deo t'amo","Ti vogghiu beni","Te voglio bene","T'aimi","Jau t'am","Quiérote","Mahal ta ka","Mon amour"],HW=[];
function hin(nx,ny){var a=nx*nx+ny*ny-1;return a*a*a-nx*nx*ny*ny*ny<=0}
var HP=[],HPC=[0,0];
function heartInit(){
 /* hình tim theo đường cong cổ điển x=16sin³t, y=13cos t−5cos2t−2cos3t−cos4t: hai thuỳ tròn đầy, khe giữa nông, mũi nhọn.
    Viền tim được vẽ như nét bút trước, rồi chữ lấp đầy bên trong. "Anh yêu em" ở giữa hiện đầu tiên; các thứ tiếng khác hiện theo thứ tự trong LV, chạy theo nét vẽ, từng lớp từ ngoài vào. */
 HW=[];HP=[];var hh=Math.min(H*.8,W*.9),s=Math.min(hh/29,W*.88/32),cx=W/2,cy=H/2+.4*s-H*.035,M=260,k,i,CTR='Anh yêu em';HPC=[cx,cy];
 function pt(t){var x=16*Math.pow(Math.sin(t),3),y=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t);return[cx+x*s,cy-(y+2.6)*s]}
 var IN=[];for(k=0;k<=M;k++)IN.push(pt(Math.PI+k/M*6.2832));
 function iv(y){var xs=[];for(var q=0;q<IN.length-1;q++){var p1=IN[q],p2=IN[q+1];if((p1[1]<=y&&p2[1]>y)||(p2[1]<=y&&p1[1]>y))xs.push(p1[0]+(y-p1[1])/(p2[1]-p1[1])*(p2[0]-p1[0]))}xs.sort(function(u,v){return u-v});var r=[];for(q=0;q+1<xs.length;q+=2)r.push([xs[q],xs[q+1]]);return r}
 function inter(A,B){var r=[];A.forEach(function(p){B.forEach(function(q){var l=Math.max(p[0],q[0]),h=Math.min(p[1],q[1]);if(h>l)r.push([l,h])})});return r}
 var ys=IN.map(function(p){return p[1]}),top=Math.min.apply(0,ys),bot=Math.max.apply(0,ys);
 function build(fsz,commit){var lh=fsz*1.22,gmin=fsz*.85,wc={},rows=[],y,avg=0,segs=[],fills=[];c.font='600 '+fsz+'px system-ui,Arial,sans-serif';
  var wd=function(z){return wc[z]||(wc[z]=c.measureText(z).width)},cwid=wd(CTR)*1.15;LV.forEach(function(z){avg+=wd(z)});avg/=LV.length;
  for(y=top+lh*.55;y<bot-lh*.45;y+=lh)rows.push(y);
  var cr=0,cd=1e9;rows.forEach(function(yy,q){var d=Math.abs(yy-cy);if(d<cd){cd=d;cr=q}});
  rows.forEach(function(y,ri){var seg=inter(inter(iv(y-lh*.42),iv(y)),iv(y+lh*.42));
   if(ri===cr){var s2=[];seg.forEach(function(sg){if(sg[0]<cx&&sg[1]>cx){s2.push([sg[0],cx-cwid/2-fsz*.9,'L']);s2.push([cx+cwid/2+fsz*.9,sg[1],'R'])}else s2.push(sg)});seg=s2;if(commit)HW.push([CTR,cx,y,fsz*1.15,93,0,352,1])}
   seg.forEach(function(sg){var avail=sg[1]-sg[0];if(avail<fsz*3.2){fills.push([y,sg[0],sg[1],-1]);return}var n=Math.max(1,Math.floor((avail+gmin)/(avg+gmin)));segs.push({y:y,ri:ri,sa:sg[0],avail:avail,n:n,slotW:(avail-(n-1)*gmin)/n,side:sg[2],words:[],times:[]})})});
  var cnt=0;segs.forEach(function(z){cnt+=z.n});if(!commit)return cnt;
  var slots=[];
  segs.forEach(function(z){for(i=0;i<z.n;i++){var xs=z.sa+(i+.5)*z.avail/z.n;slots.push({s:z,i:i,ring:(z.ri<1||z.ri>=rows.length-1)?0:(z.side==='L'?i:z.side==='R'?z.n-1-i:Math.min(i,z.n-1-i)),phi:(Math.atan2(-(xs-cx),z.y-(cy+3*s))+6.2832)%6.2832})}});
  slots.sort(function(p,q){return p.ring-q.ring||p.phi-q.phi});
  var used={},t0=1.1,n2=0,lr=-1,stp=Math.min(.17,7.5/Math.max(1,slots.length));
  slots.forEach(function(sl){if(sl.ring!==lr){if(lr>=0)t0+=n2*stp+.35;n2=0;lr=sl.ring}
   var pick=-1,bw=1e9,ah=0;for(k=0;k<LV.length&&ah<4;k++)if(!used[k]){ah++;if(wd(LV[k])<=sl.s.slotW*1.12){pick=k;break}}
   if(pick<0)for(k=0;k<LV.length;k++)if(!used[k]&&wd(LV[k])<=sl.s.slotW){pick=k;break}
   if(pick<0)for(k=0;k<LV.length;k++)if(!used[k]&&wd(LV[k])<bw){bw=wd(LV[k]);pick=k}
   if(pick<0)return;used[pick]=1;sl.s.words[sl.i]=LV[pick];sl.s.times[sl.i]=t0+n2*stp;n2++});
  segs.forEach(function(z){var ws=[];for(i=0;i<z.n;i++)if(z.words[i])ws.push([z.words[i],wd(z.words[i]),z.times[i]]);if(!ws.length){fills.push([z.y,z.sa,z.sa+z.avail,-1]);return}
   var sum=0;ws.forEach(function(w){sum+=w[1]});
   while(ws.length>1&&sum+(ws.length-1)*gmin*.85>z.avail){var mi=0;ws.forEach(function(w,q){if(w[1]>ws[mi][1])mi=q});sum-=ws[mi][1];ws.splice(mi,1)}
   var gap=ws.length>1?Math.max(gmin*.85,(z.avail-sum)/(ws.length-1)):0,tot=sum+gap*(ws.length-1),px=z.sa+(z.avail-tot)/2;
   ws.forEach(function(w,q){var cxw=px+w[1]/2,nx=(cxw-cx)/(16*s),ny=(cy-z.y)/(14*s),lit=.5+.5*Math.max(-1,Math.min(1,-.6*nx+.75*ny)),ed=(q===0||q===ws.length-1);
    HW.push([w[0],cxw,z.y,fsz,36+30*lit+(ed?8:0)+hash(cxw,22)*4,w[2],348+10*ny+hash(cxw,24)*6,ed?1:0]);
    /* khoảng trống trước chữ đầu, giữa các chữ, sau chữ cuối: lấp bằng tim nhỏ */
    if(q===0)fills.push([z.y,z.sa,px,w[2]]);if(q<ws.length-1)fills.push([z.y,px+w[1],px+w[1]+gap,w[2]]);else fills.push([z.y,px+w[1],z.sa+z.avail,w[2]]);px+=w[1]+gap})});
  var hw=fsz*.95;fills.forEach(function(f){var room=f[2]-f[1]-fsz*.55,m=Math.floor(room/hw);if(m<1)return;var x0=f[1]+(f[2]-f[1]-(m-1)*hw)/2;
   for(var e=0;e<m;e++){var hx=x0+e*hw,ny=(cy-f[0])/(14*s),tt=f[3]>=0?f[3]+.08:1.1+((Math.atan2(-(hx-cx),f[0]-(cy+3*s))+6.2832)%6.2832)/6.2832*3;
    HW.push(['♥',hx,f[0],fsz*.72,30+12*hash(hx,31)+8*(ny+1),tt,345+hash(hx,32)*12,0])}});return cnt}
 /* chọn cỡ chữ lớn nhất mà số ô chữ vẫn không vượt quá số thứ tiếng (để không chữ nào bị lặp) */
 var lo=hh*.02,hi=hh*.07;for(k=0;k<12;k++){var md=(lo+hi)/2;if(build(md,false)>LV.length)lo=md;else hi=md}
 build(Math.max(10,hi),true)}
function heartDraw(t){
 var T=t%26,ph=t%1.15,bt=Math.exp(-Math.pow(ph/.1,2))+.65*Math.exp(-Math.pow((ph-.24)/.1,2)),pul=1+.034*bt,fo=T>21?1-(T-21)/3.5:1,i,q,a,cx=W/2,cy=H/2,g;
 g=c.createRadialGradient(cx,cy,0,cx,cy,Math.max(W,H)*.65);g.addColorStop(0,'rgb('+(26+22*bt|0)+',6,14)');g.addColorStop(1,'#05070a');c.fillStyle=g;c.fillRect(0,0,W,H);
 c.textAlign='center';c.textBaseline='middle';
 if(fo<=0)return;
 if(HP.length){var pr=Math.max(0,Math.min(1,(T-.5)/3.2)),m=Math.max(1,Math.round(pr*(HP.length-1))),hx=HPC[0],hy=HPC[1],P=function(p){return[hx+(p[0]-hx)*pul,hy+(p[1]-hy)*pul]};
  if(pr>0){c.lineJoin='round';c.lineCap='round';for(var pass=0;pass<2;pass++){c.beginPath();for(var e=0;e<=m;e++){var pp=P(HP[e]);if(e)c.lineTo(pp[0],pp[1]);else c.moveTo(pp[0],pp[1])}
   c.strokeStyle=pass?'rgba(255,150,185,'+(.95*fo).toFixed(2)+')':'rgba(255,40,100,'+(.22*fo).toFixed(2)+')';c.lineWidth=pass?Math.max(1.6,H*.0035):Math.max(6,H*.016);c.stroke()}
   if(pr<1){var hp=P(HP[m]);c.fillStyle='rgba(255,235,245,'+fo.toFixed(2)+')';c.beginPath();c.arc(hp[0],hp[1],Math.max(2.5,H*.006),0,6.2832);c.fill()}}}
 for(i=0;i<HW.length;i++){q=HW[i];a=Math.min(1,(T-q[5])/.7);if(a<=0)continue;a*=fo;
  var k=a<1?1+.1*(1-a):1;
  c.font='600 '+(q[3]*pul*k).toFixed(1)+'px system-ui,Arial,sans-serif';c.fillStyle='hsla('+(q[6]|0)+','+(q[7]?92:84)+'%,'+Math.min(92,q[4]+9*bt|0)+'%,'+a.toFixed(2)+')';c.fillText(q[0],cx+(q[1]-cx)*pul,cy+(q[2]-cy)*pul)}
 /* trái tim nhỏ bay lên quanh trái tim lớn */
 c.font=Math.max(12,H*.028)+'px system-ui,Arial,sans-serif';
 for(i=0;i<22;i++){var p=((t*.07+i*.137)%1),hx=cx+(hash(i,31)-.5)*W*.8+Math.sin(t*.8+i)*14,hy=cy+H*.5-p*H*1.05,al=Math.sin(p*3.1416)*.55*fo;if(T<5||al<=0)continue;c.fillStyle='hsla('+(345+hash(i,32)*20|0)+',90%,'+(62+hash(i,33)*20|0)+'%,'+al.toFixed(2)+')';c.fillText('♥',hx,hy)}
 glow(.5+.3*bt)}
/* con mắt bằng ký tự (port từ eye.py): mở mắt, liếc, chớp, bay vào đồng tử, trái tim ghép từ chữ, rồi ký tự gom lại thành mắt nhắm (lặp) */
var GC=null,GX=null;
function glow(a){var gw=Math.max(16,W>>3),gh=Math.max(16,H>>3);if(!GC){GC=document.createElement('canvas');GX=GC.getContext('2d')}if(GC.width!==gw){GC.width=gw;GC.height=gh}
 GX.drawImage(cv,0,0,gw,gh);c.save();c.globalCompositeOperation='lighter';c.globalAlpha=a;c.imageSmoothingEnabled=true;c.drawImage(GC,0,0,W,H);c.restore()}
var EYE=(function(){
var L=1.2,A0=.5,B0=.36,BEAT=.508,BEAT0=.055,DUR=29.9,Z0=.8,ZMAX=8.4;
function BT(k){return BEAT0+k*BEAT}
var OPEN0=BT(1),OPEN1=BT(3),SAC=BT(9),RET=BT(12),BLINK=BT(18),ZOOM0=BT(23),ZOOM1=BT(43),HZ0=BT(52),HZ1=BT(55),MORPH0=HZ1-.25,MORPH1=29.55;
var FIX=[[0,0,0,.07],[SAC,.17,-.03,.07],[RET,0,-.02,3*BEAT]];
var GL='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#*+=<>/?+*.-|/\\( ANHYUEM',NCH=62,I_PLUS=GL.indexOf('+',NCH),I_STAR=GL.indexOf('*',NCH),I_DOT=GL.indexOf('.',NCH),I_DASH=GL.indexOf('-',NCH),I_BAR=GL.indexOf('|',NCH),I_SL=GL.indexOf('/',NCH),I_BS=GL.indexOf('\\',NCH);
var PHRASE='ANH YEU EM ',PH=[];
var COLS,ROWS,CW,CH,UNIT,X0,Y0,N,SXa,SYa,REV,HAIR,PG,TX,IRK=[],IRP=[],IRA=[],NS=520,STX=[],STY=[],STZ=[],STB=[],STP=[],SB,SCH,still=null,R,G,B;
var NU=70,UUP=[],LUP=[],AUP=[],NL=26,ULO=[],LLO=[],ALO=[],cA,oA,tA,cB,oB,tB;
function ss(a,b,x){x=Math.min(1,Math.max(0,(x-a)/(b-a)));return x*x*(3-2*x)}
function m3(k,r,g,b){R+=(r-R)*k;G+=(g-G)*k;B+=(b-B)*k}
function ex(x){return Math.exp(x)}
function charFor(dx,dy){var a=Math.atan2(dy,dx)*57.29578%180;if(a<0)a+=180;return a<22?I_DASH:a<68?I_SL:a<112?I_BAR:a<158?I_BS:I_DASH}
function gaze(t){var px=0,py=0,gx=FIX[0][1],gy=FIX[0][2],ts=0,dur=FIX[0][3],i,f,u,e,w,x,y;
 for(i=0;i<3;i++){f=FIX[i];if(f[0]<=t){px=gx;py=gy;gx=f[1];gy=f[2];ts=f[0];dur=f[3]}}
 u=Math.min(1,(t-ts)/dur);if(dur<.2){e=1-Math.pow(1-u,3);w=t-ts-dur;if(w>0)e+=.07*Math.sin(w*40)*ex(-w*18)}else e=u*u*(3-2*u);
 x=px+(gx-px)*e+.0015*Math.sin(t*23)+.001*Math.sin(t*41+1);y=py+(gy-py)*e+.001*Math.sin(t*29+2);return[x,y]}
function blink(t){return ss(BLINK,BLINK+.08,t)*(1-ss(BLINK+.11,BLINK+.3,t))}
function camera(t){var zp=ss(ZOOM0,ZOOM1,t),hz=ss(HZ0,HZ1,t),Z=Z0*Math.exp(Math.log(ZMAX/Z0)*zp)*(1+.012*Math.max(0,t-ZOOM1));Z*=Math.exp(Math.log(7)*hz);return[zp,hz,Z]}
function lids(x,opn,lt,lb){var u=x/L,q=Math.max(0,1-u*u),tilt=.09*u,top=Math.pow(q,.85)*(1-.18*u),bot=Math.pow(q,1.2)*(1+.15*u),cl=tilt-.035*q;
 L_up=cl+opn*(A0*lt*top+.035*q);L_lo=cl-opn*(B0*lb*bot-.035*q)+opn*(1-lb)*.12*q*(.6+.4*u);L_u=u;L_q=q;L_tilt=tilt;L_top=top}
var L_up,L_lo,L_u,L_q,L_tilt,L_top;
function starDepth(t){return .025*t+.3*Math.log(camera(t)[2]/Z0)}
function stars(t){var S=starDepth(t),v=(starDepth(t+1/30)-S)*30,dz=Math.min(.3,Math.abs(v)*.06),i,j,z,b,sx,sy,head,tx,ty,zz,dxc=CW/UNIT,dyc=CH/UNIT;SB.fill(0);SCH.fill(-1);
 function put(x,y,bb,ch){var ci=Math.floor(x*UNIT/CW+COLS/2),ri=Math.floor(-y*UNIT/CH+ROWS/2);if(ci<0||ci>=COLS||ri<0||ri>=ROWS)return;var k=ri*COLS+ci;if(bb>SB[k]){SB[k]=bb;SCH[k]=ch}}
 for(i=0;i<NS;i++){z=.08+.92*((((STZ[i]-S/.92)%1)+1)%1);b=STB[i]*(.75+.25*Math.sin(t*3+STP[i]));b=b*ss(1,.55,z)*ss(.08,.14,z)+.12*STB[i];b*=ss(1,.92,z);
  sx=STX[i]/z*.45;sy=STY[i]/z*.45;head=(b>.7&&z<.4)?I_PLUS:b>.5?I_STAR:I_DOT;
  if(dz>.004)for(j=1;j<9;j++){zz=z+dz*j/8;tx=STX[i]/zz*.45;ty=STY[i]/zz*.45;put(tx,ty,b*(1-j/9)*.8,charFor((sx-tx)*CH,(sy-ty)*CW))}
  put(sx,sy,b,head);if(head===I_PLUS){put(sx+dxc,sy,b*.7,I_DASH);put(sx-dxc,sy,b*.7,I_DASH);put(sx,sy+dyc,b*.7,I_BAR);put(sx,sy-dyc,b*.7,I_BAR)}}}
function lashes(col,ovr,opn,lt,lb,Z,cx,cy){
 var flip=2*opn-1,cell=CW/UNIT,i,k,s,a0,a1,xb,yb,ln,p1x,p1y,p2x,p2y,bx,by,tx,ty,ss_,ch,X,Y,sx,sy,ci,ri,idx;
 function add(xb,yb,ln,a0,curl,th){a0=Math.atan2(Math.sin(a0)*flip,Math.cos(a0));a1=a0+curl;p1x=xb+.5*ln*Math.cos(a0);p1y=yb+.5*ln*Math.sin(a0);p2x=p1x+.5*ln*Math.cos(a1);p2y=p1y+.5*ln*Math.sin(a1);
  for(k=0;k<60;k++){s=k/59;bx=(1-s)*(1-s)*xb+2*(1-s)*s*p1x+s*s*p2x;by=(1-s)*(1-s)*yb+2*(1-s)*s*p1y+s*s*p2y;tx=2*(1-s)*(p1x-xb)+2*s*(p2x-p1x);ty=2*(1-s)*(p1y-yb)+2*s*(p2y-p1y);ch=charFor(tx*CW,ty*CW);
   for(var q=0;q<th.length;q++){if(s>th[q][1])continue;X=bx+th[q][0]/Z;Y=by;sx=(X-cx)*Z;sy=(Y-cy)*Z;ci=Math.floor(sx*UNIT/CW+COLS/2);ri=Math.floor(-sy*UNIT/CH+ROWS/2);if(ci<0||ci>=COLS||ri<0||ri>=ROWS)continue;idx=ri*COLS+ci;ovr[idx]=ch;col[idx*3]=30;col[idx*3+1]=16;col[idx*3+2]=26}}}
 var sg=flip+1e-6>0?1:-1;
 for(i=0;i<NU;i++){xb=UUP[i]*L;lids(xb,opn,lt,lb);add(xb,L_up+.015,LUP[i],AUP[i],(Math.PI/2-AUP[i])*.65*sg,[[0,1],[cell,.45]])}
 for(i=0;i<NL;i++){xb=ULO[i]*L;lids(xb,opn,lt,lb);add(xb,L_lo-.03,LLO[i],ALO[i],-.25,[[0,1]])}}
function core(t,col,ovr,tint){
 var opn=ss(OPEN0,OPEN1,t)*(1-.97*blink(t)),sly=ss(SAC,SAC+.4,t)*(1-.65*ss(11.3,12.8,t)),lt=.92-.17*sly,lb=1-.45*sly,braise=.1*ss(SAC+.05,SAC+.35,t),
  g=gaze(t),gx=g[0],gy=g[1],cm=camera(t),zp=cm[0],Z=cm[2],rp=.2+.05*ss(11.3,13.8,t),k,cx,cy,sv=ss(.15,.6,zp),hv=ss(.3,.75,zp),full=ss(.92,1,zp),
  ph=((t-BEAT0)%BEAT+BEAT)%BEAT,beat=1+.08*ex(-Math.pow(ph/.06,2))+.08*ex(-Math.pow((ph-BEAT)/.03,2)),HS=.26*beat,i,WX,WY,SXc,SYc,idx;
 rp*=1-.12*ss(BLINK+.2,BLINK+.45,t)*(1-ss(BLINK+.8,BLINK+2.3,t));
 k=Math.pow(zp,.3);cx=.04*(1-k)+gx*k;cy=gy*k;stars(t);
 var p0x=L*.97,p0y=.09*.97+.01,vx=L+.3-p0x,vy=.09+.19-p0y,vv=vx*vx+vy*vy;
 for(var rr=0;rr<ROWS;rr++)for(var cc=0;cc<COLS;cc++){idx=rr*COLS+cc;SXc=SXa[idx];SYc=SYa[idx];WX=cx+SXc/Z;WY=cy+SYc/Z;
  lids(WX,opn,lt,lb);var up=L_up,lo=L_lo,u=L_u,q=L_q,tilt=L_tilt,top=L_top,au=Math.abs(u),ineye=au<1,inside=ineye&&WY<up&&WY>lo,ov=-1,tn=.16;
  var n=.5+.5*Math.sin(WX*9+Math.sin(WY*7)*2)*Math.sin(WY*11+WX*3),s0=.86+.14*n;R=242*s0;G=182*s0;B=146*s0;
  m3(.45*ex(-(Math.pow((WX-.8)/.5,2)+Math.pow((WY+.75)/.25,2))),238,140,150);
  var crease=tilt+A0*.92*top+.1*q+.02,d_up=WY-up,sh=ss(crease+.16,up+.02,WY)*(.5+.5*ss(-.7,.9,u))*(WY>up?1:0);sh*=Math.min(1,Math.max(0,1.4-au*.5))*(au<1.25?1:0);m3(.85*sh,150,72,108);
  m3(.5*ex(-(Math.pow((WX+.05)/.35,2)+Math.pow((d_up-.06)/.05,2)))*(WY>up?1:0)*opn,255,205,215);
  m3(.5*ex(-Math.pow((WY-crease)/.03,2))*(ineye?1:0),120,60,80);
  var kb=WX<.55?1.6:.85,bump=Math.max(-.5,Math.min(1,1-Math.pow((WX-.55)/kb,2))),yb=.8+.17*bump+braise*ss(-.3,.7,WX),th=WX<-.7?.17+(WX+1.1)/.4*(.14-.17):WX<.55?.14+(WX+.7)/1.25*(.1-.14):.1+(Math.min(WX,1.35)-.55)/.8*(.02-.1);if(WX<-1.1)th=.17;
  m3(.45*ex(-Math.pow((WY-(yb-th/2-.07))/.05,2))*(WX>-.6&&WX<1.3?1:0),255,225,205);
  var d_lo=lo-WY;if(d_lo>0&&d_lo<.03&&ineye){R=196;G=118;B=110}if(d_lo>.01&&d_lo<.04&&u>.2&&u<1){R=110;G=60;B=70}
  var dx=WX-gx,dy=WY-gy,r=Math.sqrt(dx*dx+dy*dy),pupil=r<rp,needSpace=(inside&&pupil)||full>0,sr=0,sg=0,sb2=0;
  if(needSpace){var neb=.5+.5*Math.sin(SXc*3.1+t*.2)*Math.sin(SYc*2.3-t*.15),sbv=SB[idx]*sv;sr=6+28*neb*neb+255*sbv;sg=6+8*neb*neb+255*sbv;sb2=10+36*neb*neb+255*sbv;
   var px=dx/rp,py=dy/rp,hx=px/HS*1.15,hy=py/HS*1.15+.12,kmin=9,kk,f,aa;
   if(hv>0)for(kk=1;kk>.04;kk-=.0396){var xx=hx/kk,yy=hy/kk;aa=xx*xx+yy*yy-1;f=aa*aa*aa-xx*xx*yy*yy*yy;if(f<0)kmin=kk}
   var inh=kmin<=1,shade=Math.sqrt(Math.max(0,1-Math.min(kmin,1)*Math.min(kmin,1)));
   if(hv>0){var hr=235+(255-235)*shade,hg=45+(140-45)*shade,hb=120+(200-120)*shade,band=.5+.5*Math.sin(hy*7+t*.8),gloss=Math.min(1,Math.max(0,1.3*ex(-(Math.pow((hx+.45)/.22,2)+Math.pow((hy-.55)/.15,2)))));
    hr+=(255-hr)*.25*band*shade;hg+=(205-hg)*.25*band*shade;hb+=(228-hb)*.25*band*shade;hr+=(255-hr)*gloss;hg+=(250-hg)*gloss;hb+=(252-hb)*gloss;
    if(!inh){var halo=ex(-Math.hypot(hx,hy-.1)*1.6)*(.7+.3*(beat-1)/.08)*.6*hv;sr+=200*halo;sg+=30*halo;sb2+=120*halo}else{sr+=(hr-sr)*hv;sg+=(hg-sg)*hv;sb2+=(hb-sb2)*hv}}
   var heartOn=inh&&hv>.3}
  if(inside){var er,eg,eb,ir_;
   if(pupil){var zk=ss(.05,.3,zp);er=8+(sr-8)*zk;eg=6+(sg-6)*zk;eb=6+(sb2-6)*zk}
   else if(r<.43){var a=Math.atan2(dy,dx),st=0;for(var j=0;j<14;j++)st+=IRA[j]*Math.sin(IRK[j]*a+IRP[j]+3*r);st=.5+.5*Math.tanh(st/1.6);
    er=120+135*st;eg=45+145*st;eb=8+37*st;var kp=ss(rp*2.2,rp,r)*.7;er+=(255-er)*kp;eg+=(215-eg)*kp;eb+=(95-eb)*kp;var dk=1-.85*ss(.43*.84,.43*.93,r);er*=dk;eg*=dk;eb*=dk}
   else{var kw=ss(.78,1,au);er=246+(232-246)*kw;eg=242+(160-242)*kw;eb=240+(155-240)*kw;var k2=ss(-.82,-.98,u);er+=(240-er)*k2;eg+=(150-eg)*k2;eb+=(150-eb)*k2;var dk2=1-.42*ss(.16,0,up-WY);er*=dk2;eg*=dk2;eb*=dk2;var k3=ss(.03,0,WY-lo);er+=(240-er)*k3;eg+=(190-eg)*k3;eb+=(185-eb)*k3}
   if(r<.43){var gl=ex(-(Math.pow((dx+.45*rp)/(.5*rp),2)+Math.pow((dy-.55*rp)/(.35*rp),2)))*(1-ss(0,.25,zp)),kg=Math.min(1,gl*1.4);er+=(255-er)*kg;eg+=(255-eg)*kg;eb+=(255-eb)*kg;
    var ix=dx/.43+.25*gx/.43,iy=dy/.43;if(ix>-.66&&ix<-.2&&iy>.12&&iy<.54&&Math.abs(ix+.43)>.025&&Math.abs(iy-.33)>.025&&r<.43*.9&&r>rp*1.05){var kr=.22*(1-ss(0,.3,zp));er+=(255-er)*kr;eg+=(250-eg)*kr;eb+=(240-eb)*kr}}
   R=er;G=eg;B=eb}
  var lw=.028+.02*ss(-.2,1,u),wx=WX-p0x,wy=WY-p0y,sp=Math.min(1,Math.max(0,(wx*vx+wy*vy)/vv)),dist=Math.hypot(WX-(p0x+sp*vx),WY-(p0y+sp*vy));
  if((d_up>=0&&d_up<lw&&ineye)||dist<.04*(1-sp)+.003){R=22;G=12;B=18}
  var bm=Math.abs(WY-yb)<th/2&&WX>-1.12&&WX<1.36;
  if(bm){var edge=Math.abs(WY-yb)/(th/2+1e-6),hn=HAIR[idx];if(hn>.08+.6*edge*edge){var kh=hn*.5+ss(-.6,-1.1,WX)*.5;R=48+57*kh;G=28+40*kh;B=26+29*kh;ov=WX<-.75?I_BAR:WX<.5?I_SL:I_BS}}
  col[idx*3]=R;col[idx*3+1]=G;col[idx*3+2]=B;ovr[idx]=ov;tint[idx]=tn;
  if(full>0){col[idx*3]+=(sr-R)*full;col[idx*3+1]+=(sg-G)*full;col[idx*3+2]+=(sb2-B)*full}
  var vis=(pupil&&inside&&zp>.05)||full>.5;
  if(full>.5)ovr[idx]=-1;
  if(vis&&SCH[idx]>=0&&SB[idx]*sv>.05&&!heartOn)ovr[idx]=SCH[idx];
  if(vis&&heartOn){ovr[idx]=PG[idx];tint[idx]=.1}}
 lashes(col,ovr,opn,lt,lb,Z,cx,cy);
 for(var z2=0;z2<N;z2++)if(full>.5&&SCH[z2]>=0&&false)ovr[z2]=SCH[z2]}
function init(){
 var i,ch=Math.max(8,Math.min(H*.92,W*.98/1.36)/64),hr,wr;hr=Math.min(H*.94,W*.98/1.36);ROWS=Math.max(40,Math.min(72,Math.round(hr/ch)));CH=hr/ROWS;CW=CH*.55;wr=Math.min(W*.99,hr*1.36);COLS=Math.round(wr/CW);
 UNIT=hr/2;X0=(W-COLS*CW)/2;Y0=(H-ROWS*CH)/2;N=COLS*ROWS;SXa=new Float32Array(N);SYa=new Float32Array(N);REV=new Float32Array(N);HAIR=new Float32Array(N);PG=new Int16Array(N);TX=new Int16Array(N);SB=new Float32Array(N);SCH=new Int16Array(N);
 PH=[];for(i=0;i<PHRASE.length;i++)PH.push(GL.indexOf(PHRASE[i],NCH));
 for(var r=0;r<ROWS;r++)for(var c2=0;c2<COLS;c2++){i=r*COLS+c2;SXa[i]=(c2+.5-COLS/2)*CW/UNIT;SYa[i]=-(r+.5-ROWS/2)*CH/UNIT;REV[i]=hash(i,41);HAIR[i]=hash(i,42);PG[i]=PH[(c2+r*5)%PH.length];TX[i]=Math.floor(hash(i,43)*NCH)}
 for(i=0;i<14;i++){IRK[i]=6+Math.floor(hash(i,1)*64);IRP[i]=hash(i,2)*6.28;IRA[i]=hash(i,3)*.6+.4}
 for(i=0;i<NS;i++){STX[i]=(hash(i,4)*2-1)*1.35;STY[i]=(hash(i,5)*2-1)*1.1;STZ[i]=hash(i,6);STB[i]=.45+.55*hash(i,7);STP[i]=hash(i,8)*6.28}
 for(i=0;i<NU;i++){var uu=i/(NU-1);UUP[i]=-.93+1.93*Math.pow(uu,.8);LUP[i]=(.07+.25*Math.pow(Math.min(1,Math.max(0,(UUP[i]+.5)/1.5)),1.3))*(.85+.3*hash(i,9));if(i%3===0)LUP[i]*=1.15;AUP[i]=(118-98*Math.pow((UUP[i]+1)/2,1.1))*.0174533+(hash(i,10)-.5)*.1}
 for(i=0;i<NL;i++){ULO[i]=-.35+1.3*i/(NL-1);LLO[i]=(.03+.06*Math.min(1,Math.max(0,(ULO[i]+.35)/1.3)))*(.8+.4*hash(i,11));ALO[i]=(-80+45*((ULO[i]+.35)/1.3))*.0174533}
 cA=new Float32Array(N*3);oA=new Int16Array(N);tA=new Float32Array(N);cB=new Float32Array(N*3);oB=new Int16Array(N);tB=new Float32Array(N);
 core(0,cB,oB,tB)}
function draw(t){
 var T=t%DUR,i,p,sw;c.fillStyle='#05070a';c.fillRect(0,0,W,H);
 core(T,cA,oA,tA);
 if(T>MORPH0){p=Math.min(1,Math.max(0,(T-MORPH0)/(MORPH1-MORPH0)));for(i=0;i<N;i++)if(REV[i]<p){cA[i*3]=cB[i*3];cA[i*3+1]=cB[i*3+1];cA[i*3+2]=cB[i*3+2];oA[i]=oB[i];tA[i]=tB[i]}}
 for(i=0;i<N;i++)if(hash(i,Math.floor(T*30))<.03)TX[i]=Math.floor(hash(i,Math.floor(T*30)+7)*NCH);
 c.font='700 '+(CH*.95).toFixed(1)+'px ui-monospace,Consolas,monospace';c.textAlign='center';c.textBaseline='middle';
 for(i=0;i<N;i++){var r0=cA[i*3],g0=cA[i*3+1],b0=cA[i*3+2];if(r0+g0+b0<30)continue;var tn=tA[i];c.fillStyle='rgb('+Math.min(255,(r0*.95+20*tn)|0)+','+Math.min(255,(g0*.95+20*tn)|0)+','+Math.min(255,(b0*.95+24*tn)|0)+')';
  c.fillText(GL[oA[i]>=0?oA[i]:TX[i]],X0+((i%COLS)+.5)*CW,Y0+(((i/COLS)|0)+.5)*CH)}
 glow(.55)}
return{init:init,draw:draw}})();
/* hố đen nuốt chính mã nguồn của trang (port từ blackhole.py): tường chữ bay vào, bị hút thành đĩa lửa, nổ thành thiên hà rồi bị hút ngược lại (lặp) */
var BHX=(function(){
var DUR=30,T_HOLE=2.1,T_TENSE=12.6,T_COL=16.6,T_FLASH=16.9,T_BACK=29.4,BEATP=.672,BEATO=.084,T_RE=BEATO+30*BEATP,T_EAT=27.9,T_G0=28.3,T_G1=28.9,D0=4,F=4,CY0=.06,B=.6632,SB_=Math.sin(B),CB_=Math.cos(B);
var NP=0,CHs,WX,WY,R0,TH0,TAU,DURp,FS,FA,FZ,EXS,EXV,EXA,EXARM,EXTW,EXH,CR,CG,CB,K0,NST=520,STX=[],STY=[],STP=[],STBr=[],U0,PXa,PYa,PZa,Dre,Are,Teat,Kre,reDone=false;
var ARM=[[60,230,230],[255,60,190],[255,200,60],[165,90,255],[70,160,255]],KW={'function':1,'var':1,'return':1,'for':1,'if':1,'else':1,'new':1,'break':1,'continue':1};
function ss(a,b,x){x=Math.min(1,Math.max(0,(x-a)/(b-a)));return x*x*(3-2*x)}
function lerp(a,b,k){return a+(b-a)*k}
function pulse(t){var ph=((t-BEATO)%BEATP+BEATP)%BEATP;return Math.exp(-ph/.09)}
function init(){
 var src=(mFlow+mTet+mCake+mNoel+cNoel).replace(/\/\*[\s\S]*?\*\//g,'').split('\n'),stream=[],i,j,m,re=/("[^"]*"|'[^']*')|(\b\d+\.?\d*\b)|([A-Za-z_]\w*)|(.)/g,tok,cl;
 for(i=0;i<src.length;i++){var s=src[i].trim();if(!s)continue;re.lastIndex=0;while((m=re.exec(s))){tok=m[0];cl=m[1]?[106,135,89]:m[2]?[104,151,187]:(m[3]&&KW[tok])?[204,120,50]:[169,183,198];for(j=0;j<tok.length;j++)stream.push([tok[j],cl])}stream.push([' ',cl],[' ',cl])}
 var area=W*H*1.7/(4600/.78),ch0=Math.sqrt(area),cw0=ch0/1.7,cols=Math.floor(W/cw0),rows=Math.floor(H/ch0),k=0,L=[];U0=H/2;
 for(var r=0;r<rows;r++)for(var q=0;q<cols;q++){var e=stream[k++%stream.length];if(e[0]!==' ')L.push([r,q,e[0],e[1]])}
 NP=L.length;CHs=[];WX=new Float32Array(NP);WY=new Float32Array(NP);R0=new Float32Array(NP);TH0=new Float32Array(NP);TAU=new Float32Array(NP);DURp=new Float32Array(NP);FS=new Float32Array(NP);FA=new Float32Array(NP);FZ=new Float32Array(NP);
 EXS=new Float32Array(NP);EXV=new Float32Array(NP);EXA=new Float32Array(NP);EXARM=new Int8Array(NP);EXTW=new Uint8Array(NP);EXH=new Float32Array(NP);CR=new Float32Array(NP);CG=new Float32Array(NP);CB=new Float32Array(NP);
 PXa=new Float32Array(NP);PYa=new Float32Array(NP);PZa=new Float32Array(NP);Dre=new Float32Array(NP);Are=new Float32Array(NP);Teat=new Float32Array(NP);Kre=new Float32Array(NP);reDone=false;
 var rmax=0;for(i=0;i<NP;i++){var x=(L[i][1]+.5-cols/2)*cw0/U0,y=-(L[i][0]+.5-rows/2)*ch0/U0-CY0;WX[i]=x;WY[i]=y;R0[i]=Math.hypot(x,y);TH0[i]=Math.atan2(y,x);rmax=Math.max(rmax,R0[i]);CHs.push(L[i][2]);CR[i]=L[i][3][0];CG[i]=L[i][3][1];CB[i]=L[i][3][2]}
 for(i=0;i<NP;i++){var h=function(n){return hash(i,n+300)},rn=R0[i]/rmax;TAU[i]=2.4+5.4*Math.pow(rn,1.3)+h(1)*.5;DURp[i]=2.5+5*rn+(h(2)-.5)*.6;
  if(h(3)<.09){TAU[i]=7.5+2.5*h(4);DURp[i]=(16.3-TAU[i])*(.75+.25*h(5))}
  FS[i]=h(6)*.6;FA[i]=h(7)*6.2832;FZ[i]=1.6+1.4*h(8);EXS[i]=T_FLASH+.3*h(9);EXV[i]=.3+1.5*Math.pow(h(10),1.3);
  var arm=Math.floor(h(11)*5);EXA[i]=arm*1.2566+(h(12)-.5)*.35;if(h(13)<.1)EXA[i]=h(14)*6.2832;EXARM[i]=((Math.round(EXA[i]/1.2566)%5)+5)%5;EXTW[i]=h(15)<.08?1:0;EXH[i]=(h(16)-.5)*.1}
 for(i=0;i<NST;i++){STX[i]=(hash(i,501)*2-1)*7;STY[i]=(hash(i,502)*2-1)*7;STP[i]=hash(i,503)*6.28;STBr[i]=.25+.6*Math.pow(hash(i,504),2)}}
function zoom(t){if(t<1)return 3;if(t<2.6)return lerp(3,1,ss(1,2.6,t));if(t<T_TENSE)return lerp(1,1.25,ss(2.6,T_TENSE,t));if(t<T_FLASH)return lerp(1.25,1.6,ss(T_TENSE,T_COL,t));
 if(t<T_BACK){var z=lerp(1.6,.85,1-Math.pow(1-Math.min(1,(t-T_FLASH)/.6),3));z-=.05*ss(T_FLASH+.6,T_RE,t);return z+.55*ss(T_RE,T_G1,t)}return lerp(.8,3,ss(T_BACK,DUR,t))}
function elev(t){var e=22*ss(2.4,6.5,t)+3*Math.sin(t*.7)*ss(4,7,t);e+=8*ss(T_FLASH,T_BACK,t);return e*(1-ss(T_BACK,DUR,t))*.0174533}
function azim(t){var a=24*ss(2.4,T_COL,t)+16*ss(T_COL,T_RE,t)+14*ss(T_RE,T_BACK,t);return a*(1-ss(T_BACK,DUR,t))*.0174533}
var CAM={cx:0,cy:0,cz:0,rx:0,ry:0,rz:0,ux:0,uy:0,uz:0,fx:0,fy:0,fz:0};
function camera(t){var D=D0/zoom(t),el=elev(t),az=azim(t),amp=.006*ss(T_TENSE,T_COL,t);if(t>=T_FLASH)amp+=.05*Math.exp(-(t-T_FLASH)*4);
 var tx=amp*(Math.sin(t*71)+.5*Math.sin(t*113)),ty=amp*(Math.sin(t*83+1)+.5*Math.sin(t*131)),tz=0,cx=tx+D*Math.sin(az)*Math.cos(el),cy=ty+D*Math.sin(el),cz=tz+D*Math.cos(az)*Math.cos(el),fx=tx-cx,fy=ty-cy,fz=tz-cz,l=Math.hypot(fx,fy,fz);fx/=l;fy/=l;fz/=l;
 var rx=fy*0-fz*1,ry=fz*0-fx*0,rz=fx*1-fy*0;l=Math.hypot(rx,ry,rz);rx/=l;ry/=l;rz/=l;
 var ux=ry*fz-rz*fy,uy=rz*fx-rx*fz,uz=rx*fy-ry*fx;CAM.cx=cx;CAM.cy=cy;CAM.cz=cz;CAM.rx=rx;CAM.ry=ry;CAM.rz=rz;CAM.ux=ux;CAM.uy=uy;CAM.uz=uz;CAM.fx=fx;CAM.fy=fy;CAM.fz=fz}
var PS=0,PT=0,PZ=0;
function proj(x,y,z){var dx=x-CAM.cx,dy=y-CAM.cy,dz=z-CAM.cz,zz=dx*CAM.fx+dy*CAM.fy+dz*CAM.fz,z2=Math.max(zz,1e-3);PS=W/2+F*(dx*CAM.rx+dy*CAM.ry+dz*CAM.rz)/z2*U0;PT=H/2-F*(dx*CAM.ux+dy*CAM.uy+dz*CAM.uz)/z2*U0;PZ=zz}
function rE(){}
function reState(){if(reDone)return;reDone=true;var i,u,q,arr=[];for(i=0;i<NP;i++){u=Math.max(T_RE-EXS[i],0);Dre[i]=EXV[i]/.35*(1-Math.exp(-.35*u));Are[i]=EXA[i]+2.6*Math.pow(Dre[i],.75)+.5*u;arr.push(Dre[i])}
 arr.sort(function(a,b){return a-b});var p98=arr[Math.floor(NP*.98)]||1;
 for(i=0;i<NP;i++){q=Math.min(1,Math.max(0,Dre[i]/p98));Teat[i]=Math.min(T_RE+.8+(T_EAT-T_RE-.8)*(.25+.75*Math.pow(q,.8))+(hash(i,600)-.5)*.4,T_EAT+.2);Kre[i]=(Dre[i]*Dre[i]-.004)/Math.max(Teat[i]-T_RE-.6,.3)}}
function galaxy(i,t,o){var u,dist,ang,x,y,z,r,v,ue;
 if(t<T_RE){u=Math.max(t-EXS[i],0);dist=EXV[i]/.35*(1-Math.exp(-.35*u));ang=EXA[i]+2.6*Math.pow(dist,.75)+.5*u;r=dist;o.alive=true}
 else{v=t-T_RE;ue=v-.6*(1-Math.exp(-v/.6));r=Math.sqrt(Math.max(Dre[i]*Dre[i]-Kre[i]*ue,0));ang=Are[i]+.5*v+.6*(4/Kre[i])*(Math.sqrt(Dre[i])-Math.sqrt(r));u=Math.max(T_RE-EXS[i],0)+v;dist=r;o.alive=t<Teat[i]}
 x=r*Math.cos(ang);y=r*Math.sin(ang);z=EXH[i]*(1+r);o.x=x;o.y=y*SB_+z*CB_;o.z=-y*CB_+z*SB_;o.u=u;o.dist=dist}
var G={x:0,y:0,z:0,u:0,dist:0,alive:true};
function tempColor(r){var k=Math.min(1,Math.max(0,(.75-r)/.65));return k<.5?[170+85*k*2,40+70*k*2,150-120*k*2]:[255,110+125*(k*2-1),30+150*(k*2-1)]}
function rh2(t){if(t<T_RE)return 0;reState();var n=0;for(var i=0;i<NP;i++)if(Teat[i]<=t)n++;return(.05*ss(T_RE,T_RE+.6,t)+.07*n/NP)*(1-ss(T_G0,T_G1,t))}
function draw(t){
 var T=t%DUR,i,r,th,flat,phi,heat,x,y,z,e,v,vis,rh,frac=0,n=0,tens=ss(T_TENSE,T_COL-.1,T)*(T<T_FLASH?1:0),pl=pulse(T)*(ss(T_HOLE,T_HOLE+.4,T)*(T<T_COL?1:0)+ss(T_RE,T_RE+.4,T)),hsx,hsy,hz,rhs;
 c.fillStyle='#05070a';c.fillRect(0,0,W,H);camera(T);
 if(T<T_FLASH){for(i=0;i<NP;i++)if(T>TAU[i]+DURp[i])n++;frac=n/NP;rh=(.055*ss(T_HOLE,T_HOLE+1,T)+.075*frac)*(1-ss(T_COL,T_COL+.3,T))}else rh=rh2(T);
 proj(0,0,0);hsx=PS;hsy=PT;hz=PZ;rhs=F*rh/hz*U0;
 var fz0=T<3||T>T_BACK?zoom(T):1,fsz=Math.max(7,Math.min(26,H/88*fz0));c.font='700 '+fsz.toFixed(1)+'px ui-monospace,Consolas,monospace';c.textAlign='center';c.textBaseline='middle';
 // sao nền, lệch quanh lỗ do thấu kính
 var rEs=1.7*rhs;
 for(i=0;i<NST;i++){proj(STX[i],STY[i],-5);var dx=PS-hsx,dy=PT-hsy,rs=Math.hypot(dx,dy)+1e-6,kk=(rs+Math.sqrt(rs*rs+4*rEs*rEs))/2/rs,tw=(.75+.25*Math.sin(T*2.5+STP[i]))*STBr[i]*.8*(1-.45*tens);if(PZ<.1)continue;
  c.fillStyle='rgba(230,230,235,'+tw.toFixed(2)+')';c.fillRect(hsx+dx*kk,hsy+dy*kk,STBr[i]>.6?2:1.4,STBr[i]>.6?2:1.4)}
 var lastCol='',cr,cg,cb,b,col;
 function put(px,py,ch,r_,g_,b_,bb){var k=Math.min(1.4,bb);col='rgb('+Math.min(255,r_*k|0)+','+Math.min(255,g_*k|0)+','+Math.min(255,b_*k|0)+')';if(col!==lastCol){c.fillStyle=col;lastCol=col}c.fillText(ch,px,py)}
 var heatc,tc,lens=[];
 if(T<T_FLASH){
  var wave=0;
  for(i=0;i<NP;i++){
   var tau=TAU[i],rel=T>=tau,rr=R0[i],thh=TH0[i];
   if(rel){var s=T-tau,kq=(R0[i]*R0[i]-.0036)/DURp[i];rr=Math.sqrt(Math.max(R0[i]*R0[i]-kq*s,0));thh=TH0[i]+(2.4/kq)*(Math.sqrt(R0[i])-Math.sqrt(rr))*ss(0,1,s);if(rr<rh*1.02+.004)continue}
   heat=ss(tau,tau+1.5,T);flat=ss(tau,tau+2.5,T);phi=flat*1.5708;
   var rl=rel?rr:(rr+Math.sqrt(rr*rr+9*rh*rh))/2;
   x=rl*Math.cos(thh);y=rl*Math.sin(thh)*Math.cos(phi);z=-rl*Math.sin(thh)*Math.sin(phi);
   var cr_=CR[i],cg_=CG[i],cb_=CB[i],bb=rel?.8+.5*heat:.78;
   v=Math.min(1,Math.max(0,(T-FS[i])/1));
   if(v<1){e=1-Math.pow(1-v,3);var off=(1-e)*.5,a=FA[i]+(1-e)*1.6;x=WX[i]+off*Math.cos(a);y=WY[i]+off*Math.sin(a);z=(1-e)*FZ[i];cr_=CR[i]+(120-CR[i])*(1-e);cg_=CG[i]+(90-CG[i])*(1-e);cb_=CB[i]+(230-CB[i])*(1-e);bb=.78+.5*(1-e)}
   else if(heat>0){tc=tempColor(rr);cr_=cr_*(1-heat)+tc[0]*heat;cg_=cg_*(1-heat)+tc[1]*heat;cb_=cb_*(1-heat)+tc[2]*heat}
   proj(x,y,z);if(PZ<.08)continue;
   if(rel&&PZ>hz&&Math.hypot(PS-hsx,PT-hsy)<rhs*1.05)continue;
   var dop=1+.4*Math.cos(thh)*heat*flat;bb=bb*dop*(1+.25*pl)*(1-.4*tens*(rel?1:0));
   if(rel&&flat>.5&&rr<.7&&v>=1){var rho=(rh*1.3+.3*(rr-rh))*F/hz*U0;if(Math.sin(thh)>0)lens.push(hsx+rho*Math.cos(thh),hsy-rho*Math.sin(thh),i,bb,cr_,cg_,cb_);else lens.push(hsx+.8*rho*Math.cos(thh),hsy+.8*rho*Math.abs(Math.sin(thh)),i,bb*.35,cr_,cg_,cb_)}
   put(PS,PT,CHs[i],cr_,cg_,cb_,bb)}
  for(i=0;i<lens.length;i+=7)put(lens[i],lens[i+1],CHs[lens[i+2]],lens[i+4],lens[i+5],lens[i+6],lens[i+3])}
 else{
  if(T>=T_RE)reState();var bp=pulse(T),o=G,twk;
  for(i=0;i<NP;i++){if(T<EXS[i])continue;galaxy(i,T,o);if(!o.alive)continue;proj(o.x,o.y,o.z);if(PZ<.08)continue;if(T>=T_RE&&PZ>hz&&Math.hypot(PS-hsx,PT-hsy)<rhs*1.05)continue;
   var ac=ARM[EXARM[i]],an=ARM[(EXARM[i]+1)%5],ar=ac[0]+(an[0]-ac[0])*.25*bp,ag=ac[1]+(an[1]-ac[1])*.25*bp,ab=ac[2]+(an[2]-ac[2])*.25*bp,hot=Math.max(0,Math.min(1,1-o.dist/.45))*Math.max(0,Math.min(1,1-o.u/1.2));
   if(T>=T_RE)hot=Math.max(hot,Math.max(0,Math.min(1,1-o.dist/.35))*ss(T_RE,T_RE+1,T));
   var dm=1-.3*Math.max(0,Math.min(1,(o.dist-1)/1.2)),br=(1.25-.35*Math.min(1,o.u/2.2))*(1+.35*bp);
   if(EXTW[i]&&o.u>.25){var tw=Math.pow(Math.max(0,Math.sin(T*9+i)),16);if(tw>.3){put(PS,PT,'*',255,255,255,2*tw);continue}}
   put(PS,PT,CHs[i],(ar+(255-ar)*hot)*dm,(ag+(245-ag)*hot)*dm,(ab+(235-ab)*hot)*dm,br)}}
 // chân trời, vòng sáng, vụ nổ
 if(rh>.003){var rr2=rhs*(1+.18*pl)*(1+.07*tens*Math.sin(T*53)*Math.sin(T*31));
  c.fillStyle='#000';c.beginPath();c.arc(hsx,hsy,rr2,0,6.2832);c.fill();
  var ra=(.9+1.4*pl+.9*tens*Math.abs(Math.sin(T*47)));c.strokeStyle='rgba(255,205,125,'+Math.min(1,ra*.7).toFixed(2)+')';c.lineWidth=Math.max(1.5,rr2*.07);c.beginPath();c.arc(hsx,hsy,rr2*1.06,0,6.2832);c.stroke()}
 var fl=ss(T_COL+.25,T_FLASH,T)*(1-ss(T_FLASH,T_FLASH+.45,T));
 if(fl>0){var gr=c.createRadialGradient(hsx,hsy,0,hsx,hsy,H*(.03+.5*fl));gr.addColorStop(0,'rgba(255,245,230,'+Math.min(1,2*fl).toFixed(2)+')');gr.addColorStop(1,'rgba(255,240,220,0)');c.fillStyle=gr;c.fillRect(0,0,W,H)}
 if(T>=T_FLASH){var age=T-T_FLASH,rsw=1.7*age*U0,sc=[[0,'255,70,90'],[-.05-.03*age,'70,150,255'],[-.025,'255,240,230']],a2=Math.exp(-age*1.2)*.9;
  for(i=0;i<3;i++){c.strokeStyle='rgba('+sc[i][1]+','+a2.toFixed(2)+')';c.lineWidth=3;c.beginPath();c.arc(hsx,hsy,Math.max(1,rsw+sc[i][0]*U0),0,6.2832);c.stroke()}
  if(age<.7){var kr=Math.exp(-age*5);c.lineWidth=2;for(i=0;i<28;i++){var an2=hash(i,700)*6.2832,len=(.6+.9*hash(i,701))*(.3+2.5*age)*U0,gg=c.createLinearGradient(hsx,hsy,hsx+Math.cos(an2)*len,hsy-Math.sin(an2)*len);gg.addColorStop(0,'rgba(255,235,210,'+Math.min(1,kr*1.6).toFixed(2)+')');gg.addColorStop(1,'rgba(255,235,210,0)');c.strokeStyle=gg;c.beginPath();c.moveTo(hsx+Math.cos(an2)*.04*U0,hsy-Math.sin(an2)*.04*U0);c.lineTo(hsx+Math.cos(an2)*len,hsy-Math.sin(an2)*len);c.stroke()}}}
 glow(.6)}
return{init:init,draw:draw}})();
/* Giáng sinh: người tuyết và cô tuyết nắm tay dưới trời sao, trăng, cực quang, hai cây thông (theo video mẫu, vẽ bằng ký tự) */
var SNOWX=(function(){
var DUR=10.6,COLS,ROWS,CW,CH,UNIT,X0,Y0,N,SXa,SYa,TXs,GLs='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',PR,PG,PB,PCH,ARM=[],i0,j0;
function ss(a,b,x){x=Math.min(1,Math.max(0,(x-a)/(b-a)));return x*x*(3-2*x)}
function ease(x){x=Math.min(1,Math.max(0,x));return 1-Math.pow(1-x,3)}
function mix(k,r,g,b){PR+=(r-PR)*k;PG+=(g-PG)*k;PB+=(b-PB)*k}
function init(){var hr=Math.min(H*.94,W*.98/1.4),wr;ROWS=64;CH=hr/ROWS;CW=CH*.55;wr=Math.min(W*.99,hr*1.4);COLS=Math.round(wr/CW);UNIT=hr/2;X0=(W-COLS*CW)/2;Y0=(H-ROWS*CH)/2;N=COLS*ROWS;
 SXa=new Float32Array(N);SYa=new Float32Array(N);TXs=new Uint8Array(N);
 for(var r=0;r<ROWS;r++)for(var c2=0;c2<COLS;c2++){var i=r*COLS+c2;SXa[i]=(c2+.5-COLS/2)*CW/UNIT;SYa[i]=-(r+.5-ROWS/2)*CH/UNIT;TXs[i]=Math.floor(hash(i,91)*36)}}
function ball(sx,sy,cx,cy,r){var dx=(sx-cx)/r,dy=(sy-cy)/r,d2=dx*dx+dy*dy;if(d2>1)return 0;var nz=Math.sqrt(1-d2),l=Math.max(0,(-.5*dx+.55*dy+.67*nz)/1.0),k=ss(.05,.8,l);PR=60+178*k;PG=118+128*k;PB=215+40*k;PCH=-1;return 1}
function disc(sx,sy,cx,cy,r,R,G,B,ch){if((sx-cx)*(sx-cx)+(sy-cy)*(sy-cy)>r*r)return 0;PR=R;PG=G;PB=B;PCH=ch===undefined?-1:ch;return 1}
function ell(sx,sy,cx,cy,rx,ry){var a=(sx-cx)/rx,b=(sy-cy)/ry;return a*a+b*b<1}
function qb(p0,c,p1,out){for(var k=0;k<=12;k++){var s=k/12,a=(1-s)*(1-s),b=2*(1-s)*s,d=s*s;out.push(a*p0[0]+b*c[0]+d*p1[0],a*p0[1]+b*c[1]+d*p1[1])}}
function segd(sx,sy,P){var best=9,k,ax,ay,bx,by,px,py,h,qx,qy;for(k=0;k<P.length-2;k+=2){ax=P[k];ay=P[k+1];bx=P[k+2]-ax;by=P[k+3]-ay;px=sx-ax;py=sy-ay;h=Math.max(0,Math.min(1,(px*bx+py*by)/(bx*bx+by*by+1e-9)));qx=px-bx*h;qy=py-by*h;best=Math.min(best,qx*qx+qy*qy)}return Math.sqrt(best)}
function tree(sx,sy,cx,by,h,w){var u=sx-cx,v=sy-by;if(v<0||v>h)return 0;var t=v/h,fr=(t*3.2)%1,hw=w*(1-t)*(.66+.34*fr);if(Math.abs(u)>=hw)return 0;
 var st=((u*9+v*13)%1+1)%1,snow=st<.36&&u<hw*.55;if(snow){PR=225;PG=242;PB=236}else{var sh=u>0?.6:1;PR=22*sh;PG=96*sh;PB=82*sh}PCH=-1;return 1}
function prep(t){ARM.length=0;
 for(var k=0;k<2;k++){var cx=k?.46:-.46,dout=k?1:-1,din=-dout,e1=ease((t-2.5)/1.6),e2=ease((t-3.1)/2.2),sw=Math.sin(t*1.6)*.01,S1=[cx+dout*.2,.07],E1=[cx+dout*(.2+.36*e1),.07+(k?.3:.22)*e1+sw*e1],C1=[cx+dout*(.2+.2*e1),.08+.03*e1],o=[];
  qb(S1,C1,E1,o);ARM.push(o);
  var S2=[cx+din*.2,.03],H=[S2[0]+((k?.034:-.034)-S2[0])*e2,S2[1]+(-.07-S2[1])*e2],C2=[(S2[0]+H[0])/2,Math.min(S2[1],H[1])-.12*e2],o2=[];qb(S2,C2,H,o2);ARM.push(o2)}}
function pixel(sx,sy,t,i,r,c2){
 sx*=.85;sy=sy*.85-.05;var fade=1-ss(9.5,10.4,t),sway=Math.sin(t*1.6)*.005,k,g=(sy+1)/2;
 PR=8+10*(1-g);PG=12+14*(1-g);PB=28+22*(1-g);PCH=-1;
 var av=Math.exp(-Math.pow((sy-(.5+.12*Math.sin(sx*2.4+t*.4)))/.16,2))*(.5+.5*Math.sin(sx*4-t*.8))*Math.exp(-Math.pow((sx+.2)/1.2,2))*.55;PR+=20*av;PG+=190*av;PB+=140*av;
 var hs_=hash(i,77);if(sy>-.25&&hs_<.03){var tw=.5+.5*Math.sin(t*3+hs_*600);PR=PG=PB=110+145*tw;PCH=hs_<.012?36:37}
 var dm=Math.hypot(sx-.98,sy-.6);if(dm<.108){var cr=hash(Math.floor(sx*40),Math.floor(sy*40))<.18;PR=cr?200:236;PG=cr?200:236;PB=cr?172:208;PCH=cr?38:39}
 var gy=-.62+.025*Math.sin(sx*4);
 if(sy<gy){var br=.4+.6*Math.exp(-sx*sx/.9);PR=28+42*br;PG=52+72*br;PB=105+100*br;PCH=40}
 tree(sx,sy,-1.12,-.64,.98,.36);tree(sx,sy,1.1,-.64,1.02,.38);tree(sx,sy,-.84,-.66,.55,.2);tree(sx,sy,.82,-.66,.5,.19);
 for(k=0;k<2;k++){var cx=(k?.46:-.46),cy0=.004*Math.sin(t*2.2+k),gk=fade;
  var g1=ease((t-k*.15)/.9)*gk,g2=ease((t-.3-k*.15)/.9)*gk,g3=ease((t-.6-k*.15)/.9)*gk,gnd=-.62;
  if(g1>.02&&ell(sx,sy,cx,-.70,.44*g1,.075*g1)){PR=205;PG=228;PB=250;PCH=-1}
  var y1=gnd+(.2)*g1+cy0,y2=gnd+(.62)*g2+cy0,y3=gnd+.955*g3+cy0;
  var hit=0;
  if(g1>.02&&ball(sx,sy,cx,gnd+.2*g1+cy0-.0,.30*g1))hit=1;
  if(g2>.02&&ball(sx,sy,cx,gnd+.62*g2+cy0,.22*g2))hit=1;
  if(g3>.02&&ball(sx,sy,cx,gnd+.955*g3+cy0,.165*g3))hit=1;
  var hy=.335+cy0,my=.0+cy0,fa=ss(1.2,1.9,t)*gk;
  if(fa>.5){
   disc(sx,sy,cx-.06,hy+.02,.019,18,24,50);disc(sx,sy,cx+.06,hy+.02,.019,18,24,50);
   if(k){disc(sx,sy,cx-.098,hy+.045,.012,18,24,50);disc(sx,sy,cx+.098,hy+.045,.012,18,24,50)}
   disc(sx,sy,cx,hy-.012,.026,255,140,40);
   if(Math.abs(sx-cx)<.07){for(var m=-2;m<=2;m++){if(Math.hypot(sx-(cx+m*.028),sy-(hy-.075+.012*(m*m)/4*(k?-1:1)*-1))<.008){PR=30;PG=40;PB=80;PCH=-1}}}
   if(k||t>2.2){disc(sx,sy,cx-.098,hy-.03,.03,245,125,152);disc(sx,sy,cx+.098,hy-.03,.03,245,125,152)}
   if(k===0){for(m=0;m<3;m++)if(Math.abs(sx-cx)<.016&&Math.abs(sy-(my+.14-m*.1))<.026){PR=18;PG=18;PB=34;PCH=-1}}
   else{for(m=0;m<2;m++)disc(sx,sy,cx,my+.08-m*.11,.02,240,110,160)}}
  var sa=ss(4,5,t)*gk;
  if(sa>.5){var sy_=.2+cy0,inb=ell(sx,sy,cx,sy_,.17,.045),tail=sx>cx+.07&&sx<cx+.15&&sy<sy_&&sy>sy_-.2+(k?-.06:0);
   if(inb||tail){var si=Math.floor((inb?(sx-cx)*16:sy*16)+50)&1;if(k){PR=si?245:255;PG=si?130:175;PB=si?185:212}else{PR=si?40:225;PG=si?165:60;PB=si?75:60}PCH=-1}}
  var ha=ss(4.4,5.4,t)*gk,hyo=(1-ease((t-4.4)/.9))*.3;
  if(!k&&ha>.5){if(ell(sx,sy,cx,.485+.01+hyo,.2,.03)){PR=52;PG=78;PB=150;PCH=-1}
   if(sx>cx-.125&&sx<cx+.125&&sy>.49+hyo&&sy<.69+hyo){var lt=(sx-cx+.125)/.25;PR=48+40*(1-lt);PG=72+50*(1-lt);PB=140+50*(1-lt);PCH=-1;if(sy>.505+hyo&&sy<.55+hyo){var bs=Math.floor((sx-cx)*18+50)&1;PR=bs?40:225;PG=bs?165:60;PB=bs?75:60}}}
  var ba=ss(4.6,5.6,t)*gk;
  if(k&&ba>.5){if(disc(sx,sy,cx-.13,.51+cy0,.085,255,150,195)||disc(sx,sy,cx+.13,.51+cy0,.085,255,150,195))PCH=-1;disc(sx,sy,cx,.5+cy0,.055,255,110,170)}}
 var ah=ss(2.4,3,t)*fade;
 if(ah>.5){for(k=0;k<4;k++)if(segd(sx,sy,ARM[k])<.0165){PR=150;PG=92;PB=52;PCH=-1}
  var mt=ss(4.4,5.2,t);if(mt>.5){for(k=0;k<2;k++){var P2=ARM[k*2+1];disc(sx,sy,P2[P2.length-2],P2[P2.length-1],.04,255,140,185);if(k){var P1=ARM[1*2];disc(sx,sy,P1[P1.length-2],P1[P1.length-1],.04,255,140,185)}}}}
 var fh=hash(i,j0val(i)-Math.floor(t*(3+(i%COLS)%4)));if(fh<.011){PR=PG=PB=235;PCH=fh<.005?36:37}
}
function j0val(i){return Math.floor(i/COLS)}
function draw(t){var T=t%DUR,i,ch;c.fillStyle='#05070a';c.fillRect(0,0,W,H);
 c.font='700 '+(CH*.95).toFixed(1)+'px ui-monospace,Consolas,monospace';c.textAlign='center';c.textBaseline='middle';
 for(i=0;i<N;i++){if(hash(i,Math.floor(T*14))<.03)TXs[i]=Math.floor(hash(i,Math.floor(T*14)+5)*36)}
 var lastc='';prep(T);
 for(i=0;i<N;i++){pixel(SXa[i],SYa[i],T,i);if(PR+PG+PB<48&&PCH===-1)continue;
  ch=PCH===-1?GLs[TXs[i]]:PCH===36?'*':PCH===37?'.':PCH===38?'0':PCH===39?'O':'-';
  var col='rgb('+(PR|0)+','+(PG|0)+','+(PB|0)+')';if(col!==lastc){c.fillStyle=col;lastc=col}
  c.fillText(ch,X0+((i%COLS)+.5)*CW,Y0+((i/COLS|0)+.5)*CH)}
 glow(.5)}
return{init:init,draw:draw}})();
/* Dựng 3D bằng card đồ họa (WebGL2): mỗi ô chấm là một tia sáng, vẽ ở độ mịn cố định nên không bị mờ dần, chạy 60 khung hình/giây */
var GLX=(function(){
var gl=null,gc=null,progs={},cur=null,pp=null,fbo=null,tex=null,vbo=null,lw=0,lh=0,cell=6,dpr=1,on=false,loc={},meta={},emaDt=16,hold=30;
var VS='#version 300 es\nin vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
var PRE='#version 300 es\nprecision highp float;\nuniform vec2 uRes;uniform float uT;out vec4 oc;\nfloat gD,gM,gB;float cA=1.,sA=0.;\n'+
'void u(float d,float m){if(d<gD){gD=d;gM=m;}}\n'+
'float ss(float a,float b,float x){x=clamp((x-a)/(b-a),0.,1.);return x*x*(3.-2.*x);}\n'+
'float ease(float x){x=clamp(x,0.,1.);return 1.-pow(1.-x,3.);}\n'+
'float h11(float n){return fract(sin(n*127.1)*43758.5453);}\n'+
'float h21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}\n'+
'vec3 h33(vec3 p){p=vec3(dot(p,vec3(127.1,311.7,74.7)),dot(p,vec3(269.5,183.3,246.1)),dot(p,vec3(113.5,271.9,124.6)));return fract(sin(p)*43758.5453);}\n'+
'float sph(vec3 p,vec3 c,float r){return length(p-c)-r;}\n'+
'float cyl(vec3 p,vec3 c,float r,float h){vec2 d=vec2(length(p.xz-c.xz)-r,abs(p.y-c.y)-h);return min(max(d.x,d.y),0.)+length(max(d,0.));}\n'+
'float cone2(vec3 p,vec3 c,float y0,float r,float h){float q=length(p.xz-c.xz);return max((q*h+(p.y-y0)*r-r*h)/sqrt(h*h+r*r),y0-p.y);}\n'+
'float ell(vec3 p,vec3 r){float k0=length(p/r);float k1=length(p/(r*r));return k0*(k0-1.)/max(k1,1e-6);}\n'+
'float cap(vec3 p,vec3 a,vec3 b,float r){vec3 pa=p-a,ba=b-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.);return length(pa-ba*h)-r;}\n'+
'float box(vec3 p,vec3 c,vec3 h,float r){vec3 d=abs(p-c)-h+r;return length(max(d,0.))+min(max(d.x,max(d.y,d.z)),0.)-r;}\n'+
'float tor(vec3 p,vec3 c,float R,float r){vec2 q=vec2(length(p.xz-c.xz)-R,p.y-c.y);return length(q)-r;}\n'+
'vec3 hsl(float h,float s,float l){vec3 k=mod(vec3(0.,8.,4.)+h/30.,12.);float a=s*min(l,1.-l);return l-a*clamp(min(k-3.,9.-k),-1.,1.);}\n'+
'float AN,RR,RX,RZ,IDX;\n'+
'void ar(float n){float s=6.2831853/n;float k=floor(AN/s);float a=AN-k*s-s*.5;IDX=k;RX=RR*cos(a);RZ=RR*sin(a);}\n';
var MAIN='#ifndef LD\n#define LD vec3(-.72,.68,-.22)\n#endif\nfloat map(vec3 p){gD=1e9;gM=0.;vec3 q=vec3(p.x*cA+p.z*sA,p.y,p.z*cA-p.x*sA);scn(q);return gD;}\n'+
'void main(){\n vec2 uv=(gl_FragCoord.xy-.5*uRes)/(.5*uRes.y);float asp=uRes.x/uRes.y;float Zs=max(1.,1./asp);uv*=Zs;float T=.42*Zs;\n'+
' float a=spin(uT);cA=cos(a);sA=sin(a);\n float cy=CAM.x,cd=CAM.y,ty=CAM.z;float l=length(vec2(ty-cy,cd));float fy=(ty-cy)/l,fz=cd/l;\n'+
' vec3 rd=normalize(vec3(uv.x*T,fy+uv.y*T*fz,fz-uv.y*T*fy));vec3 ro=vec3(0.,cy,-cd);\n float tt=0.;bool hit=false;\n'+
' for(int i=0;i<72;i++){float d=map(ro+rd*tt);if(d<.003+.0007*tt){hit=true;break;}tt+=d;if(tt>34.)break;}\n'+
' if(!hit){oc=vec4(0.);return;}\n vec3 p=ro+rd*tt;map(p);float mt=gM;vec3 q=vec3(p.x*cA+p.z*sA,p.y,p.z*cA-p.x*sA);vec4 mc=matc(mt,q);\n'+
' vec2 e=vec2(1.,-1.)*.005;vec3 n=normalize(e.xyy*map(p+e.xyy)+e.yyx*map(p+e.yyx)+e.yxy*map(p+e.yxy)+e.xxx*map(p+e.xxx));\n'+
' vec3 L=normalize(LD);float dif=max(0.,dot(n,L));float res=1.;\n'+
' if(dif>0.){float st=.05;vec3 so=p+n*.03;for(int k=0;k<18;k++){float h=map(so+L*st);if(h<.002){res=0.;break;}res=min(res,16.*h/st);st+=h;if(st>9.)break;}}\n'+
' float ao=1.;for(int k=1;k<4;k++){float hh=.13*float(k);ao-=max(0.,hh-map(p+n*hh))*2.2/(1.+float(k));}ao=max(.22,ao);\n'+
' vec3 hv=normalize(L-rd);float sp=pow(max(0.,dot(n,hv)),30.)*.4;float rim=pow(1.-max(0.,-dot(n,rd)),3.)*.3;\n'+
' float dif2=max(0.,dot(n,normalize(vec3(.5,.1,-.85))));float lsh=min(1.,((.1+.08*n.y+.14*dif2)*ao+1.05*dif*res)*mc.z+(sp*res+rim)*ao);float lum=(mc.w>3.5)?min(1.,.5+.6*lsh):(mc.w>2.5)?min(1.,mc.z):(mc.w>.5&&mc.w<1.5)?1.:min(1.,((.1+.08*n.y+.14*dif2)*ao+1.05*dif*res)*mc.z+(sp*res+rim)*ao);\n'+
' vec3 col;if(mc.w>1.5&&mc.w<2.5){col=mix(vec3(.1,.26,.66),vec3(.93,.97,1.),smoothstep(.04,.7,lum));}else col=hsl(mc.x,clamp(mc.y*.0075,0.,1.),(8.+lum*62.)*.01);\n'+
' oc=vec4(col,max(lum,.03));}\n';
var SC={};
'float scn(vec3 q){RR=length(q.xz);AN=atan(q.z,q.x);\n u(max(abs(q.y+.25)-.25,RR-3.4),0.);u(cyl(q,vec3(0.,.04,0.),2.2,.04),6.);\n'+
' u(cyl(q,vec3(0.,.45,0.),1.5,.35)-.03,1.);u(cyl(q,vec3(0.,.8,0.),1.56,.03),4.);\n'+
' ar(14.);u(ell(vec3(RX-1.53,q.y-.7,RZ),vec3(.07,.1+.09*mod(IDX,2.),.07)),4.);ar(30.);u(sph(vec3(RX,q.y,RZ),vec3(1.55,.15,0.),.07),8.);\n'+
' u(cyl(q,vec3(0.,1.1,0.),1.1,.3)-.03,2.);u(cyl(q,vec3(0.,1.4,0.),1.14,.03),4.);\n'+
' ar(11.);u(ell(vec3(RX-1.13,q.y-1.3,RZ),vec3(.06,.09+.07*mod(IDX,2.),.06)),4.);ar(24.);u(sph(vec3(RX,q.y,RZ),vec3(1.15,.85,0.),.06),8.);\n'+
' u(cyl(q,vec3(0.,1.7,0.),.75,.3)-.03,3.);u(cyl(q,vec3(0.,2.,0.),.79,.03),4.);\n'+
' ar(9.);u(ell(vec3(RX-.78,q.y-1.9,RZ),vec3(.055,.09+.06*mod(IDX,2.),.055)),4.);ar(18.);u(sph(vec3(RX,q.y,RZ),vec3(.8,1.45,0.),.05),8.);\n'+
' ar(6.);u(sph(vec3(RX,q.y,RZ),vec3(.55,2.12,0.),.13),9.);\n'+
' for(int k=0;k<3;k++){vec2 cp=k==0?vec2(0.):(k==1?vec2(.28,.18):vec2(-.28,.18));u(cyl(q,vec3(cp.x,2.25,cp.y),.045,.22),7.);float fl=sin(uT*13.+float(k))*.012;u(ell(q-vec3(cp.x,2.62,cp.y),vec3(.07+fl,.14,.07+fl)),5.);}\n return gD;}\n'+
'vec4 matc(float m,vec3 q){float s=mod(floor(atan(q.z,q.x)*5./3.14159265),2.)>.5?1.:.72;\n'+
' if(m<.5){float c=mod(floor(q.x*1.2)+floor(q.z*1.2),2.);return vec4(220.,30.,c>.5?.62:.46,0.);}\n'+
' if(m<1.5)return vec4(335.,70.,s,0.);if(m<2.5)return vec4(45.,70.,s,0.);if(m<3.5)return vec4(190.,70.,s,0.);\n'+
' if(m<4.5)return vec4(0.,0.,1.15,0.);if(m<5.5)return vec4(40.,70.,1.,1.);if(m<6.5)return vec4(0.,0.,.75,0.);\n'+
' if(m<7.5)return vec4(0.,mod(floor(q.y*14.),2.)>.5?80.:0.,1.,0.);if(m<8.5)return vec4(45.,90.,1.25,0.);return vec4(355.,90.,1.1,0.);}\n';
SC.noel='const vec3 CAM=vec3(2.6,8.4,1.8);float spin(float t){return sin(t*.35)*.35;}\n'+
'vec3 bez(vec3 a,vec3 c,vec3 b,float s){return (1.-s)*(1.-s)*a+2.*(1.-s)*s*c+s*s*b;}\n'+
'void arm(vec3 q,vec3 a,vec3 c,vec3 b){vec3 p0=a;for(int j=1;j<=6;j++){vec3 p1=bez(a,c,b,float(j)/6.);u(cap(q,p0,p1,.05),11.);p0=p1;}}\n'+
'float scn(vec3 q){float T=mod(uT,10.6),fade=1.-ss(9.5,10.4,T);RR=length(q.xz);\n'+
' u(max(max(q.y-.05*sin(q.x*1.3)*sin(q.z*1.1)+.02,-q.y-.5),RR-5.2),0.);\n'+
' for(int k=0;k<2;k++){float sg=k==0?-1.:1.,cx=sg*1.3,dl=float(k)*.15,bob=.03*sin(uT*2.2+float(k));\n'+
'  float g1=ease((T-dl)/.9)*fade,g2=ease((T-.3-dl)/.9)*fade,g3=ease((T-.6-dl)/.9)*fade;\n'+
'  if(g1>.02){u(ell(q-vec3(cx,.1,0.),vec3(1.5*g1,.22,1.5*g1)),3.);u(sph(q,vec3(cx,.88*g1+bob,0.),.88*g1),3.);}\n'+
'  if(g2>.02)u(sph(q,vec3(cx,2.05*g2+bob,0.),.64*g2),3.);\n'+
'  if(g3>.02){vec3 hc=vec3(cx,3.05*g3+bob,0.);u(sph(q,hc,.48*g3),3.);float fa=ss(1.2,1.9,T)*fade;\n'+
'   if(fa>.5){u(sph(q,hc+vec3(.17,.1,-.43),.05),7.);u(sph(q,hc+vec3(-.17,.1,-.43),.05),7.);u(cap(q,hc+vec3(0.,-.02,-.44),hc+vec3(0.,-.05,-.82),.06),6.);\n'+
'    u(ell(q-hc-vec3(.3,-.1,-.34),vec3(.1,.07,.04)),10.);u(ell(q-hc-vec3(-.3,-.1,-.34),vec3(.1,.07,.04)),10.);\n'+
'    for(int m=0;m<5;m++){float fm=float(m)-2.;u(sph(q,hc+vec3(fm*.09,-.2-.02*(4.-fm*fm)*.25,-.4),.028),7.);}\n'+
'    if(k==1){u(cap(q,hc+vec3(.2,.14,-.43),hc+vec3(.3,.22,-.38),.015),7.);u(cap(q,hc+vec3(-.2,.14,-.43),hc+vec3(-.3,.22,-.38),.015),7.);}}\n'+
'   if(k==0&&ss(4.4,5.4,T)>.5){float ya=(1.-ease((T-4.4)/.9))*3.;vec3 hp=hc+vec3(0.,ya,0.);u(cyl(q,hp+vec3(0.,.46,0.),.6,.05),4.);u(cyl(q,hp+vec3(0.,.9,0.),.38,.42),4.);u(cyl(q,hp+vec3(0.,.62,0.),.395,.09),5.);}\n'+
'   if(k==1&&ss(4.6,5.6,T)>.5){u(ell(q-hc-vec3(.38,.5,0.),vec3(.28,.22,.12)),9.);u(ell(q-hc-vec3(-.38,.5,0.),vec3(.28,.22,.12)),9.);u(sph(q,hc+vec3(0.,.5,0.),.14),9.);}}\n'+
'  if(g2>.9&&ss(1.6,2.2,T)>.5){vec3 mc=vec3(cx,2.05+bob,0.);if(k==0){u(sph(q,mc+vec3(0.,.36,-.62),.06),7.);u(sph(q,mc+vec3(0.,0.,-.64),.06),7.);u(sph(q,mc+vec3(0.,-.36,-.62),.06),7.);}else{u(sph(q,mc+vec3(0.,.25,-.62),.08),9.);u(sph(q,mc+vec3(0.,-.2,-.64),.08),9.);}}\n'+
'  if(g3>.9&&ss(4.,5.,T)>.5){vec3 ns=vec3(cx,2.62+bob,0.);u(tor(q,ns,.5,.12),k==0?8.:9.);u(box(q,ns+vec3(.36,-.45,-.4),vec3(.1,.45,.04),.02),k==0?8.:9.);}\n'+
'  if(ss(2.4,3.,T)>.5&&fade>.1){float e1=ease((T-2.5)/1.6),e2=ease((T-3.1)/2.2),sw=sin(uT*1.6)*.06;\n'+
'   vec3 S1=vec3(cx+sg*.62,2.1,0.),E1=vec3(cx+sg*(.62+1.15*e1),2.1+(k==1?.95:.7)*e1+sw*e1,0.),C1=vec3(cx+sg*(.62+.6*e1),2.3+.1*e1,0.);arm(q,S1,C1,E1);\n'+
'   vec3 S2=vec3(cx-sg*.62,1.95,0.),M=vec3(-sg*.1,1.5,0.),H=S2+(M-S2)*e2,C2=vec3((S2.x+H.x)*.5,min(S2.y,H.y)-.35*e2,0.);arm(q,S2,C2,H);\n'+
'   if(ss(4.4,5.2,T)>.5){u(sph(q,H,.15),9.);if(k==1)u(sph(q,E1,.15),9.);}}}\n'+
' for(int t=0;t<4;t++){float ft=float(t);float tx=t==0?-3.7:(t==1?3.8:(t==2?-2.7:2.8)),s=t<2?1.:.7,tz=t<2?2.6:3.8;vec3 c=vec3(tx,0.,tz);\n'+
'  u(cone2(q,c,.4*s,1.25*s,1.7*s),1.);u(cone2(q,c,1.3*s,1.0*s,1.5*s),1.);u(cone2(q,c,2.1*s,.72*s,1.3*s),1.);}\n'+
' u(sph(q,vec3(4.6,5.6,6.),.8),12.);return gD;}\n'+
'vec4 matc(float m,vec3 q){\n if(m<.5)return vec4(218.,45.,.9,0.);\n'+
' if(m<1.5){float st=mod(q.x*3.+q.y*5.5+q.z*2.,1.);return st<.34?vec4(190.,20.,1.1,2.):vec4(165.,62.,.8,0.);}\n'+
' if(m<3.5)return vec4(210.,40.,1.35,2.);\n if(m<4.5)return vec4(222.,60.,.95,0.);\n'+
' if(m<5.5){float s=mod(floor(atan(q.z,q.x)*5.),2.);return s<.5?vec4(130.,65.,.9,0.):vec4(0.,75.,1.,0.);}\n'+
' if(m<6.5)return vec4(28.,95.,1.3,0.);if(m<7.5)return vec4(240.,30.,.3,0.);\n'+
' if(m<8.5){float s=mod(floor(q.x*7.+q.y*7.),2.);return s<.5?vec4(130.,65.,.95,0.):vec4(0.,80.,1.,0.);}\n'+
' if(m<9.5)return vec4(335.,75.,1.15,0.);if(m<10.5)return vec4(350.,70.,1.1,0.);if(m<11.5)return vec4(25.,55.,.75,0.);\n return vec4(50.,40.,1.,1.);}\n';
var P2='#version 300 es\nprecision highp float;\nuniform sampler2D uTex;uniform vec2 uLow;uniform float uCell,uT;uniform int uPart,uBg;uniform vec2 uPx;out vec4 o;\n'+
'float h21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}\n'+
'void main(){vec2 fc=gl_FragCoord.xy;vec2 cell=floor(fc/uCell);vec2 cen=(cell+.5)*uCell;float d=length(fc-cen);vec2 nq=fc/uPx;\n'+
' vec4 s=texture(uTex,(cell+.5)/uLow);vec3 col=vec3(.02,.027,.04);\n'+
' if(uBg==1){col=mix(vec3(.09,.12,.2),vec3(.025,.04,.09),nq.y);float ay=.78+.07*sin(nq.x*6.+uT*.4);float av=exp(-pow((nq.y-ay)/.13,2.))*(.5+.5*sin(nq.x*9.-uT*.8))*exp(-pow((nq.x-.35)/.6,2.))*.5;col+=vec3(.08,.75,.55)*av*.4;}\n'+
' if(uBg==3){float dd=length((nq-vec2(.5,.5))*vec2(1.2,1.));col=mix(vec3(.17,.05,.1),vec3(.02,.018,.035),smoothstep(.0,.85,dd));}\n'+
' if(uBg==4){col=mix(vec3(.3,.17,.42),vec3(.02,.04,.17),smoothstep(.0,.85,nq.y));}\n'+
' if(uBg==5){col=mix(vec3(.13,.05,.025),vec3(.008,.01,.02),smoothstep(.0,.45,nq.y));}\n'+
' if(uBg==2){float dd=length((nq-vec2(.5,.45))*vec2(1.3,1.));col=mix(vec3(.2,.035,.03),vec3(.025,.027,.04),smoothstep(.0,.8,dd));}\n'+
' if(s.a>.001){float r=uCell*.5*(.14+.88*s.a);float aa=1.-smoothstep(r-.9,r+.9,d);col=mix(col,s.rgb,aa);col+=s.rgb*.2*exp(-d/(uCell*.9))*(1.-aa);}\n'+
' else{float hh=h21(cell*1.7);if((uBg==1||uBg==4||uBg==5)&&hh>(uBg==5?.972:.985)&&nq.y>(uBg==5?.18:.3)){float tw=.5+.5*sin(uT*3.+hh*400.);col+=vec3(.9,.95,1.)*tw*(1.-smoothstep(uCell*.12,uCell*.3,d));}\n'+
'  if(uPart>0){vec2 pc=vec2(cell.x,cell.y+floor(uT*(3.+mod(cell.x,4.)*1.3)));float h=h21(pc);if(h<.011){float pr=uCell*(h<.005?.28:.17);float k=1.-smoothstep(pr-.8,pr+.8,d);vec3 pcol=uPart==1?vec3(.92,.95,1.):(uPart==2?vec3(1.,.62,.78):(uPart==4?vec3(1.,.82,.22):hsv(h*90.)));col=mix(col,pcol,k);}}}\n'+
' o=vec4(col,1.);}\n';
function sh(type,src){var s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){console.error('[ascii gl]',gl.getShaderInfoLog(s));gl.deleteShader(s);return null}return s}
function prog(fs){var v=sh(gl.VERTEX_SHADER,VS),f=sh(gl.FRAGMENT_SHADER,fs);if(!v||!f)return null;var p=gl.createProgram();gl.attachShader(p,v);gl.attachShader(p,f);gl.bindAttribLocation(p,0,'a');gl.linkProgram(p);if(!gl.getProgramParameter(p,gl.LINK_STATUS)){console.error('[ascii gl]',gl.getProgramInfoLog(p));return null}gl.deleteShader(v);gl.deleteShader(f);return p}
function start(canvas){if(gl)return true;if(typeof canvas.getContext!=='function')return false;gl=canvas.getContext('webgl2',{antialias:false,alpha:false,powerPreference:'high-performance'});if(!gl)return false;gc=canvas;
 vbo=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,vbo);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);gl.enableVertexAttribArray(0);gl.vertexAttribPointer(0,2,gl.FLOAT,false,0,0);
 var P2f=P2.replace('void main','vec3 hsv(float h){return clamp(abs(mod(h*6.+vec3(0.,4.,2.),6.)-3.)-1.,0.,1.);}\nvoid main');pp=prog(P2f);if(!pp){gl=null;return false}return true}
function setup(){dpr=Math.min(1.5,window.devicePixelRatio||1);gc.width=Math.round(W*dpr);gc.height=Math.round(H*dpr);cell=Math.max(4,Math.round(4.4*dpr));emaDt=34;hold=30;rebuild()}
function rebuild(){lw=Math.ceil(gc.width/cell);lh=Math.ceil(gc.height/cell);
 if(tex)gl.deleteTexture(tex);if(fbo)gl.deleteFramebuffer(fbo);tex=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,tex);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA8,lw,lh,0,gl.RGBA,gl.UNSIGNED_BYTE,null);
 gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
 fbo=gl.createFramebuffer();gl.bindFramebuffer(gl.FRAMEBUFFER,fbo);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,tex,0);gl.bindFramebuffer(gl.FRAMEBUFFER,null)}
function use(id,m){if(!gl)return false;if(!(id in progs)){var p=prog(PRE+SC[id]+MAIN);progs[id]=p}cur=progs[id];meta=m||{};if(!cur)return false;loc={uRes:gl.getUniformLocation(cur,'uRes'),uT:gl.getUniformLocation(cur,'uT'),
  p2:{uTex:gl.getUniformLocation(pp,'uTex'),uLow:gl.getUniformLocation(pp,'uLow'),uCell:gl.getUniformLocation(pp,'uCell'),uT:gl.getUniformLocation(pp,'uT'),uPart:gl.getUniformLocation(pp,'uPart'),uBg:gl.getUniformLocation(pp,'uBg'),uPx:gl.getUniformLocation(pp,'uPx')}};on=true;return true}
function frame(t){if(!gl||!cur)return;
 gl.bindFramebuffer(gl.FRAMEBUFFER,fbo);gl.viewport(0,0,lw,lh);gl.useProgram(cur);gl.uniform2f(loc.uRes,lw,lh);gl.uniform1f(loc.uT,t);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
 gl.bindFramebuffer(gl.FRAMEBUFFER,null);gl.viewport(0,0,gc.width,gc.height);gl.useProgram(pp);gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,tex);
 var q=loc.p2;gl.uniform1i(q.uTex,0);gl.uniform2f(q.uLow,lw,lh);gl.uniform1f(q.uCell,cell);gl.uniform1f(q.uT,t);gl.uniform1i(q.uPart,meta.part||0);gl.uniform1i(q.uBg,meta.bg||0);gl.uniform2f(q.uPx,gc.width,gc.height);gl.drawArrays(gl.TRIANGLE_STRIP,0,4)}
/* máy yếu thì tự thưa ô chấm lại một chút, máy khỏe thì mịn lại; giữ ổn định vài giây mới đổi để không bị nhấp nháy */
function tune(dt){if(hold>0){hold--;return}emaDt=emaDt*.9+Math.min(dt,80)*.1;var base=Math.max(4,Math.round(4.4*dpr));
 if(emaDt>40&&cell<base*5){cell=Math.round(cell*1.25);rebuild();hold=45;emaDt=34}else if(emaDt<35&&cell>base){cell=Math.max(base,Math.round(cell/1.1));rebuild();hold=300;emaDt=34}}
function dispose(){on=false;if(!gl)return;try{for(var k in progs)if(progs[k])gl.deleteProgram(progs[k]);if(pp)gl.deleteProgram(pp);if(tex)gl.deleteTexture(tex);if(fbo)gl.deleteFramebuffer(fbo);if(vbo)gl.deleteBuffer(vbo);var x=gl.getExtension('WEBGL_lose_context');if(x)x.loseContext()}catch(e){}
 gl=null;gc=null;progs={};cur=null;pp=null;tex=null;fbo=null;vbo=null}
return{start:start,setup:setup,use:use,frame:frame,tune:tune,dispose:dispose,get on(){return on},set on(v){on=v}}})();
/* Hoa nở và Bướm: port sang JavaScript từ edwardjones7/ascii-art (bloom3d.py, butterfly.py), giấy phép MIT, Copyright (c) 2026 Edward Jones.
   Mỗi hạt vẽ bằng một ký tự; bản gốc dùng numpy, ở đây lưới điểm thưa hơn để chạy nhẹ trên trình duyệt. */
var PXE=(function(){
var RAMP='.:;=+*xo%#&@',GLI='01<>{}[]#$%&*+=?!ABXZ';
var cw,ch,COLS,ROWS,fsz,SC,CYR,CAM=5,Lg,Cr,Cg,Cb,Dg,Fg,Pg,On,MSG,LET,SET,cfg;
function rng(s){return function(){s|=0;s=s+0x6D2B79F5|0;var t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function gauss(r){return Math.sqrt(-2*Math.log(r()+1e-9))*Math.cos(6.2832*r())}
function ss(a,b,x){var k=Math.max(0,Math.min(1,(x-a)/(b-a)));return k*k*(3-2*k)}
function setup(msg,cyr){var m=Math.min(W/960,H/760);fsz=Math.max(8,Math.round(10*m*1.1));ch=fsz;cw=fsz*.6;COLS=Math.max(8,Math.floor(W/cw));ROWS=Math.max(8,Math.floor(H/ch));SC=265*m*1.05;CYR=cyr;
 var n=COLS*ROWS;Lg=new Float32Array(n);Cr=new Float32Array(n);Cg=new Float32Array(n);Cb=new Float32Array(n);Dg=new Float32Array(n);Fg=new Uint8Array(n);Pg=new Int32Array(n);On=new Float32Array(n);SET=new Float32Array(n);
 var r=rng(11);for(var i=0;i<n;i++)SET[i]=.12+r()*.5;MSG=msg;LET=msg.replace(/ /g,'')}
function clear(){Lg.fill(0);Dg.fill(-3);Fg.fill(0)}
/* một hạt: vị trí/pháp tuyến đã ở không gian thế giới; camera do cfg: d (hướng nhìn), u (hướng lên), l (ánh sáng), h (nửa vector) */
function splat(x,y,z,nx,ny,nz,r,g,b,ao,fade,fly,pid,glow){
 if(fade<=0)return;var d=cfg.d,u=cfg.u,depth=x*d[0]+y*d[1]+z*d[2];if(depth>=CAM-.12)return;
 var k=CAM/(CAM-depth),sx=x*k,sy=(x*u[0]+y*u[1]+z*u[2])*k,col=Math.floor((W/2+sx*SC)/cw),row=Math.floor((CYR*H-sy*SC)/ch);
 if(col<0||col>=COLS||row<0||row>=ROWS)return;var id=row*COLS+col;if(depth<Dg[id])return;
 var nd=nx*d[0]+ny*d[1]+nz*d[2];if(nd<0){nx=-nx;ny=-ny;nz=-nz;nd=-nd}
 var l=cfg.l,h=cfg.h,diff=Math.max(0,nx*l[0]+ny*l[1]+nz*l[2]),sp=Math.pow(Math.max(0,nx*h[0]+ny*h[1]+nz*h[2]),24),
  lum=(.25+.95*diff+.3*(1-nd)*(1-nd))*(cfg.ao0+(1-cfg.ao0)*ao)+.6*glow,dof=(.55+.45*Math.max(0,Math.min(1,(depth+.8)/1.6)))*fade,
  mx=Math.max(r,g,b),lt=Math.max(0,Math.min(1,(lum*(cfg.cm0+(1-cfg.cm0)*mx)+.45*sp*(cfg.aoSp?ao:1))*dof));
 if(lt<=.03)return;Lg[id]=lt;Dg[id]=depth;Fg[id]=fly===2?2:fly?1:0;Pg[id]=pid;var m=lum*1.2,s2=.45*sp;
 Cr[id]=(r*m+s2)*dof;Cg[id]=(g*m+s2)*dof;Cb[id]=(b*m+s2)*dof}
function paint(t,glitchEnd){
 var i,j,id,col,row,chr,v,a,e,n=COLS*ROWS;c.fillStyle='#000';c.fillRect(0,0,W,H);c.textBaseline='top';c.textAlign='left';c.font='700 '+fsz+'px Consolas,Menlo,"DejaVu Sans Mono",monospace';
 for(row=0;row<ROWS;row++)for(col=0;col<COLS;col++){id=row*COLS+col;if(Lg[id]<=.03){On[id]=1e9;continue}
  if(On[id]>1e8)On[id]=t;
  var F=Dg[id],mxn=-9,jump=0,nb=[col+1<COLS&&Lg[id+1]>.03?Dg[id+1]:-3,col>0&&Lg[id-1]>.03?Dg[id-1]:-3,row+1<ROWS&&Lg[id+COLS]>.03?Dg[id+COLS]:-3,row>0&&Lg[id-COLS]>.03?Dg[id-COLS]:-3];
  for(j=0;j<4;j++){jump=Math.max(jump,Math.abs(F-nb[j]));mxn=Math.max(mxn,nb[j])}
  var edge=!Fg[id]&&jump>cfg.ej&&(jump>1.8||F>=mxn),L=Lg[id];
  if(edge){var gx=(nb[0]-nb[1])/cw,gy=(nb[2]-nb[3])/ch,an=(Math.atan2(-gx,-gy)*57.2958+360)%180;chr=(an<22.5||an>=157.5)?'-':an<67.5?'/':an<112.5?'|':'\\'}
  else if(Fg[id]===2)chr=L>.75?'*':L>.5?'+':'.';else if(Fg[id])chr=LET[Pg[id]%LET.length];
  else if(L>.86)chr=MSG[(row*COLS+col)%MSG.length];
  else chr=RAMP[Math.max(0,Math.min(11,Math.floor(L*11)))];
  var rr=Cr[id],gg=Cg[id],bb=Cb[id];if(edge){rr=rr*1.25+.06;gg=gg*1.25+.06;bb=bb*1.25+.06}
  if(t<glitchEnd&&t-On[id]<SET[id]){chr=GLI[(Math.random()*GLI.length)|0];rr=rr*.5+.45;gg=gg*.5+.45;bb=bb*.5+.45}
  if(chr===' ')continue;
  rr=Math.min(255,Math.floor(Math.max(0,rr)*255/10)*10);gg=Math.min(255,Math.floor(Math.max(0,gg)*255/10)*10);bb=Math.min(255,Math.floor(Math.max(0,bb)*255/10)*10);if(rr+gg+bb===0)continue;
  c.fillStyle='rgb('+rr+','+gg+','+bb+')';c.fillText(chr,col*cw,row*ch)}}
function typed(t,T,e0,e1,cyr,tint){var row=Math.floor(cyr*H/ch),blink=(t*2.2)%1<.55,c0=Math.floor(COLS/2)-Math.floor(T.length/2),s,i,col='rgb(220,230,255)';
 c.fillStyle=col;c.font='700 '+fsz+'px Consolas,Menlo,"DejaVu Sans Mono",monospace';c.textBaseline='top';c.textAlign='left';
 if(t<.3){if(blink)c.fillText('_',Math.floor(COLS/2)*cw,row*ch)}
 else if(t<e0){var n=Math.floor((t-.3)/(e0-.3)*T.length)+1;s=(T+'_').slice(0,n+1);for(i=0;i<s.length;i++)c.fillText(s[i],(c0+i)*cw,row*ch)}
 else if(t<e1){var f=1-(t-e0)/(e1-e0),v=Math.floor(255*f);for(i=0;i<T.length;i++){var q=Math.random()<.6?GLI[(Math.random()*GLI.length)|0]:T[i];if(Math.random()<f){c.fillStyle=tint(v);c.fillText(q,(c0+i)*cw,row*ch)}}}
 else if(t>9.35&&blink){c.fillStyle=col;c.fillText('_',Math.floor(COLS/2)*cw,row*ch)}}
return{cell:function(){return Math.min(cw,ch)/SC},setup:setup,clear:clear,splat:splat,paint:paint,typed:typed,rng:rng,gauss:gauss,ss:ss,cfgSet:function(x){cfg=x},dims:function(){return{COLS:COLS,ROWS:ROWS,On:On}},resetOn:function(){On.fill(1e9)}}})();

/* ---- Hoa nở ---- */
var BLOOM=(function(){
var U=48,V=28,BLOW=7.6,E=55*Math.PI/180,LAY=[[6,1,.34,80,2,5.2,.7,0,1],[6,.8,.3,58,2.3,5.5,.5,Math.PI/6,.95],[5,.62,.27,40,2.6,5.8,.35,.3,.9],[4,.46,.24,26,2.9,6.1,.2,.9,.85]];
var P,pet=[],JIT,PID,COL,AO,NC=1100,CR,CA,CJ,CP,ready=0,last=0,CFG;
var STOPS=[[.7,.02,.2],[1,.12,.38],[1,.42,.62],[1,.8,.84]],WIND=[1.7,0,.75];
function norm(v){var m=Math.hypot(v[0],v[1],v[2]);return[v[0]/m,v[1]/m,v[2]/m]}
function init(){PXE.setup('let it bloom ',.56);var r=PXE.rng(11),gs=function(){return PXE.gauss(r)};pet=[];
 LAY.forEach(function(l,li){for(var k=0;k<l[0];k++)pet.push({th:l[7]+6.2832*k/l[0]+(r()*.16-.08),L:l[1]*(.95+r()*.1),W:l[2],op:l[3]*Math.PI/180,t0:l[4]+(r()*.2-.1),t1:l[5],cu:l[6],tint:l[8]*(.8+r()*.3),dl:BLOW+.22*li+r()*.35})});
 P=pet.length;var N=P*U*V;JIT=new Float32Array(N*3);PID=new Int32Array(N);for(var i=0;i<N;i++){JIT[i*3]=gs()*.6;JIT[i*3+1]=gs()*.6;JIT[i*3+2]=gs()*.9;PID[i]=(r()*10000)|0}
 COL=new Float32Array(U*3);AO=new Float32Array(U*V);for(var u=0;u<U;u++){var cu=u/(U-1)*3,i0=Math.min(2,Math.floor(cu)),f=cu-i0;for(var q=0;q<3;q++)COL[u*3+q]=STOPS[i0][q]*(1-f)+STOPS[i0+1][q]*f;
  for(var v=0;v<V;v++){var vv=-1+2*v/(V-1);AO[u*V+v]=(.25+.75*Math.pow(u/(U-1),.8))*(1-.35*Math.pow(Math.abs(vv),3))}}
 CR=new Float32Array(NC);CA=new Float32Array(NC);CJ=new Float32Array(NC*3);CP=new Int32Array(NC);for(i=0;i<NC;i++){CR[i]=Math.sqrt((i+.5)/NC);CA[i]=i*2.39996;CJ[i*3]=gs()*.5;CJ[i*3+1]=gs()*.5;CJ[i*3+2]=gs()*.9;CP[i]=(r()*10000)|0}
 var d=[0,-Math.cos(E),Math.sin(E)],up=[0,Math.sin(E),Math.cos(E)],l=norm([-.45,-.75,.9]),h=norm([l[0]+d[0],l[1]+d[1],l[2]+d[2]]);
 CFG={d:d,u:up,l:l,h:h,ao0:.35,cm0:1,aoSp:0,ej:.35};PXE.cfgSet(CFG);PXE.resetOn();ready=1;last=0}
var gx=new Float32Array(U*V),gy=new Float32Array(U*V),gz=new Float32Array(U*V);
function draw(t0){if(!ready)init();var t=t0%10;if(t<last)PXE.resetOn();last=t;PXE.cfgSet(CFG);PXE.clear();
 var s=PXE.ss(.9,2.6,t)*(1+.02*Math.sin(6.2832*(t-6)/2.4)*PXE.ss(6,6.8,t));
 if(s>0){var yaw=.4+.32*t,cy=Math.cos(yaw),sy=Math.sin(yaw),du=1/(U-1),pi=0;
  for(var p=0;p<P;p++){var q=pet[p],prog=PXE.ss(q.t0,q.t1,t),al=.10472+(q.op-.10472)*prog,rho=0,z=0,cth=Math.cos(q.th),sth=Math.sin(q.th),tau=Math.max(0,t-q.dl),brk=Math.max(0,tau-.3);
   var rh=[],zz=[],ww=[];
   for(var u=0;u<U;u++){var uu=u*du,phi=al*(.25+.75*uu)+q.cu*prog*uu*uu;rho+=Math.sin(phi)*du*q.L;z+=Math.cos(phi)*du*q.L;rh[u]=rho;zz[u]=z;ww[u]=[phi,q.W*Math.pow(Math.sin(Math.PI*Math.pow(uu,1.6)),.7)]}
   for(u=0;u<U;u++){var phi=ww[u][0],w=ww[u][1],cph=Math.cos(phi),sph=Math.sin(phi);for(var v=0;v<V;v++){var vv=-1+2*v/(V-1),ot=vv*w,on=.55*vv*vv*w,R=.04+rh[u]-on*cph,Z=zz[u]+on*sph,k=u*V+v;
     gx[k]=R*cth-ot*sth;gy[k]=R*sth+ot*cth;gz[k]=Z}}
   for(u=0;u<U;u++)for(v=0;v<V;v++){var k=u*V+v,i=PID[pi*U*V+k];pi0=pi*U*V+k;
    var u0=Math.max(0,u-1),u1=Math.min(U-1,u+1),v0=Math.max(0,v-1),v1=Math.min(V-1,v+1),a=u0*V+v,b=u1*V+v,c2=u*V+v0,d2=u*V+v1,
     a0=gx[b]-gx[a],a1=gy[b]-gy[a],a2=gz[b]-gz[a],b0=gx[d2]-gx[c2],b1=gy[d2]-gy[c2],b2=gz[d2]-gz[c2],
     nx=a1*b2-a2*b1,ny=a2*b0-a0*b2,nz=a0*b1-a1*b0,nm=Math.hypot(nx,ny,nz)+1e-9;nx/=nm;ny/=nm;nz/=nm;
    var X=gx[k]*s,Y=gy[k]*s,Zc=gz[k]*s,px=X*cy-Y*sy,py=X*sy+Y*cy,pz=Zc,tx=nx*cy-ny*sy,ty=nx*sy+ny*cy,tz=nz,pid=PID[pi0];
    px+=WIND[0]*tau*tau*1.5+JIT[pi0*3]*Math.pow(brk,1.5)*.9;py+=WIND[1]*tau*tau*1.5+JIT[pi0*3+1]*Math.pow(brk,1.5)*.9;pz+=WIND[2]*tau*tau*1.5+JIT[pi0*3+2]*Math.pow(brk,1.5)*.9+.1*Math.sin(tau*5+pid%7)*brk;
    if(brk>0&&pid%9!==0)continue;var fade=Math.max(0,Math.min(1,1-tau/1.5));
    PXE.splat(px,py,pz,tx,ty,tz,COL[u*3]*q.tint,COL[u*3+1]*q.tint,COL[u*3+2]*q.tint,AO[k],fade,brk>0,pid,0)}
   pi++}
  var rc=.17*PXE.ss(3,5.5,t),tauC=Math.max(0,t-(BLOW+1.15)),brkC=Math.max(0,tauC-.3);
  for(var i=0;i<NC;i++){var cr=CR[i]*rc,ca=CA[i],X=cr*Math.cos(ca)*s,Y=cr*Math.sin(ca)*s,Zc=(.1+.1*(1-CR[i]*CR[i])*PXE.ss(3,5.5,t))*s,nx=Math.cos(ca)*CR[i]*.7,ny=Math.sin(ca)*CR[i]*.7,nm=Math.hypot(nx,ny,1);
   var px=X*cy-Y*sy,py=X*sy+Y*cy,pz=Zc,tx=(nx*cy-ny*sy)/nm,ty=(nx*sy+ny*cy)/nm,tz=1/nm,pid=CP[i];
   px+=WIND[0]*tauC*tauC*1.5+CJ[i*3]*Math.pow(brkC,1.5)*.9;py+=CJ[i*3+1]*Math.pow(brkC,1.5)*.9;pz+=WIND[2]*tauC*tauC*1.5+CJ[i*3+2]*Math.pow(brkC,1.5)*.9;
   if(brkC>0&&pid%9!==0)continue;var f=CR[i];PXE.splat(px,py,pz,tx,ty,tz,1-.0*f,.85*(1-f)+.45*f,.35*(1-f)+.08*f,1,Math.max(0,Math.min(1,1-tauC/1.5)),brkC>0,pid,0)}}
 PXE.paint(t,5.5);PXE.typed(t,'bloom()',.85,1.3,.56,function(v){return'rgb('+v+','+(v*.6|0)+','+(v*.75|0)+')'});glow(.45)}
var pi0=0;
return{draw:draw,init:init}})();


/* ---- Bướm ---- */
var BFLY=(function(){
var CRACK=2.9,HATCH=3.3,OPEN=5.6,FLY=7.7,U=40,V=60,BU=60,BV=30,AN=100,SU=70,SV=80,ready=0,last=0,CFG,WG=[],BODY,BODYN,BCOL,ANT,ACOL,SH,SHN,SCOL,SDEL,SEAM,SOUT,SJIT,SPID,BJIT,BPID,NB;
var FORE=[[-14,.82],[-4,.9],[10,.95],[24,1.12],[36,1.33],[43,1.36],[50,1.16],[58,.72],[66,.1]],HIND=[[-88,.12],[-78,.62],[-66,.88],[-54,.97],[-42,.96],[-28,.9],[-12,.78],[4,.55],[14,.3]];
var STOPS=[[.05,.05,.55],[.04,.22,1],[.08,.52,1],[.45,.88,1]],WIND=[.9,.5,.35];
function ss(a,b,x){return PXE.ss(a,b,x)}
function herm(K,x){var n=K.length,i=0;while(i<n-2&&x>K[i+1][0])i++;var m=function(j){var a=Math.max(0,j-1),b=Math.min(n-1,j+1);return(K[b][1]-K[a][1])/(K[b][0]-K[a][0])},h=K[i+1][0]-K[i][0],s=(x-K[i][0])/h;
 return(2*s*s*s-3*s*s+1)*K[i][1]+(s*s*s-2*s*s+s)*h*m(i)+(3*s*s-2*s*s*s)*K[i+1][1]+(s*s*s-s*s)*h*m(i+1)}
function lerpTab(T,x){var n=T.length;if(x<=T[0][0])return T[0][1];for(var i=0;i<n-1;i++)if(x<=T[i+1][0])return T[i][1]+(T[i+1][1]-T[i][1])*(x-T[i][0])/(T[i+1][0]-T[i][0]);return T[n-1][1]}
function norm(v){var m=Math.hypot(v[0],v[1],v[2]);return[v[0]/m,v[1]/m,v[2]/m]}
function buildWing(K,veins,spot){var lat=new Float32Array(U*V),fwd=new Float32Array(U*V),cu=new Float32Array(U*V),vv=new Float32Array(U*V),col=new Float32Array(U*V*3),ao=new Float32Array(U*V),a0=K[0][0],a1=K[K.length-1][0];
 for(var u=0;u<U;u++)for(var v=0;v<V;v++){var k=u*V+v,vn=v/(V-1),un=u/(U-1),ang=a0+(a1-a0)*vn,r=Math.max(herm(K,ang),.05)*(1+.022*Math.cos(vn*6.2832*veins)),rad=un*r,a=ang*Math.PI/180;
  lat[k]=rad*Math.cos(a);fwd[k]=rad*Math.sin(a);cu[k]=un;vv[k]=vn;
  var s=Math.max(0,Math.min(1,un*1.15))*3,i=Math.min(2,Math.floor(s)),f=s-i,c=[0,1,2].map(function(q){return STOPS[i][q]*(1-f)+STOPS[i+1][q]*f}),A=.45+.55*Math.pow(un,.6),
   edge=ss(.8,.88,un+.1*ss(.72,1,vn)+.015*Math.cos(vn*6.2832*veins)),cell=(vn*veins)%1,phase=Math.abs(cell-.5),gap=Math.min(cell,1-cell),vein=(gap*rad<.0035*veins&&un>.22)?1:0,dk=Math.max(edge,vein*.72);
  c=[c[0]*(1-dk)+.05*dk,c[1]*(1-dk)+.1*dk,c[2]*(1-dk)+.36*dk];A*=1-.5*dk;
  if(Math.abs(un-spot)<.026&&phase<.2){c=[1,.97,.88];A=1.25}
  col[k*3]=c[0];col[k*3+1]=c[1];col[k*3+2]=c[2];ao[k]=A}
 return{lat:lat,fwd:fwd,cu:cu,vv:vv,col:col,ao:ao,px:new Float32Array(U*V),py:new Float32Array(U*V),pz:new Float32Array(U*V)}}
function gradN(px,py,pz,NU,NV,i,j){var i0=Math.max(0,i-1),i1=Math.min(NU-1,i+1),j0=Math.max(0,j-1),j1=Math.min(NV-1,j+1),a=i0*NV+j,b=i1*NV+j,c=i*NV+j0,d=i*NV+j1,
 a0=px[b]-px[a],a1=py[b]-py[a],a2=pz[b]-pz[a],b0=px[d]-px[c],b1=py[d]-py[c],b2=pz[d]-pz[c],nx=a1*b2-a2*b1,ny=a2*b0-a0*b2,nz=a0*b1-a1*b0,m=Math.hypot(nx,ny,nz)+1e-9;return[nx/m,ny/m,nz/m]}
function init(){PXE.setup('become ',.5);var r=PXE.rng(11),gs=function(){return PXE.gauss(r)},i,j;WG=[buildWing(FORE,8,.91),buildWing(HIND,7,.91)];
 var bx=new Float32Array(BU*BV),by=new Float32Array(BU*BV),bz=new Float32Array(BU*BV);BCOL=new Float32Array(BU*BV*3);
 var BT=[[-.46,.005],[-.4,.03],[-.25,.05],[-.08,.042],[-.02,.05],[.1,.075],[.2,.058],[.235,.035],[.27,.052],[.32,.045],[.36,.005]];
 for(i=0;i<BU;i++){var y=-.46+.82*i/(BU-1),rr=lerpTab(BT,y),sh=.65+.35*Math.pow(Math.sin(y*80),2);for(j=0;j<BV;j++){var a=6.2832*j/(BV-1),k=i*BV+j;bx[k]=rr*Math.cos(a);by[k]=y;bz[k]=rr*Math.sin(a);BCOL[k*3]=.75*sh;BCOL[k*3+1]=.48*sh;BCOL[k*3+2]=.16*sh}}
 BODY=[bx,by,bz];BODYN=new Float32Array(BU*BV*3);for(i=0;i<BU;i++)for(j=0;j<BV;j++){var g=gradN(bx,by,bz,BU,BV,i,j);BODYN.set(g,(i*BV+j)*3)}
 ANT=new Float32Array(2*AN*3);ACOL=new Float32Array(2*AN*3);for(var sd=0;sd<2;sd++)for(i=0;i<AN;i++){var q=i/(AN-1),s=sd?1:-1,k=(sd*AN+i)*3;ANT[k]=s*(.02+.24*Math.pow(q,1.3));ANT[k+1]=.33+.42*q;ANT[k+2]=.04+.1*q-.07*q*q*q;var m=.65+.5*(q>.93?1:0);ACOL[k]=m;ACOL[k+1]=.78*m;ACOL[k+2]=.35*m}
 var SHT=[[-.62,.01],[-.5,.11],[-.25,.22],[.05,.3],[.25,.28],[.42,.17],[.54,.06],[.62,.015]];SH=[new Float32Array(SU*SV),new Float32Array(SU*SV),new Float32Array(SU*SV)];SCOL=new Float32Array(SU*SV*3);SDEL=new Float32Array(SU*SV);SEAM=new Float32Array(SU*SV);SOUT=new Float32Array(SU*SV*3);SJIT=new Float32Array(SU*SV*3);SPID=new Int32Array(SU*SV);
 for(i=0;i<SU;i++){var y=-.62+1.24*i/(SU-1),rr=herm(SHT,y),zig=.16*Math.sign(Math.sin(y*31))*Math.abs(Math.sin(y*15.5)),k01=i/(SU-1);for(j=0;j<SV;j++){var a=-Math.PI+6.2832*j/(SV-1),rg=(1+.07*Math.cos(a*6))*(1+.05*Math.sin(y*34)*(y<.08?1:0)),k=i*SV+j;
   SH[0][k]=rr*rg*Math.sin(a);SH[1][k]=y;SH[2][k]=rr*rg*Math.cos(a);
   var c0=.06*(1-k01)+.3*k01,c1=.2*(1-k01)+.78*k01,c2=.75*(1-k01)+k01;if(Math.abs(y-.27)<.02&&Math.cos(a*12)>.1){c0=1;c1=.75;c2=.2}SCOL[k*3]=c0;SCOL[k*3+1]=c1;SCOL[k*3+2]=c2;
   SEAM[k]=Math.abs(a+zig)/Math.PI;SDEL[k]=HATCH+.85*SEAM[k]+.25*(.62-y)/1.24;SOUT[k*3]=SH[0][k];SOUT[k*3+1]=SH[1][k]*.25;SOUT[k*3+2]=SH[2][k];SJIT[k*3]=gs()*.8;SJIT[k*3+1]=gs()*.8;SJIT[k*3+2]=gs()*.6;SPID[k]=(r()*10000)|0}}
 SHN=new Float32Array(SU*SV*3);for(i=0;i<SU;i++)for(j=0;j<SV;j++){var g=gradN(SH[0],SH[1],SH[2],SU,SV,i,j),k=i*SV+j,d=g[0]*SOUT[k*3]+g[1]*SOUT[k*3+1]+g[2]*SOUT[k*3+2];if(d<0)g=[-g[0],-g[1],-g[2]];SHN.set(g,k*3)}
 NB=4*U*V+BU*BV+2*AN;BJIT=new Float32Array(NB*3);BPID=new Int32Array(NB);for(i=0;i<NB;i++){BJIT[i*3]=gs();BJIT[i*3+1]=gs();BJIT[i*3+2]=gs();BPID[i]=(r()*10000)|0}
 var l=norm([-.5,.6,.75]);CFG={d:[0,0,1],u:[0,1,0],l:l,h:norm([l[0],l[1],l[2]+1]),ao0:.25,cm0:.35,aoSp:1,ej:.28};PXE.cfgSet(CFG);PXE.resetOn();ready=1;last=0}
function rot(yaw,pit,roll){var c=Math.cos(yaw),s=Math.sin(yaw),Ry=[c,0,s,0,1,0,-s,0,c];c=Math.cos(pit);s=Math.sin(pit);var Rx=[1,0,0,0,c,-s,0,s,c];c=Math.cos(roll);s=Math.sin(roll);var Rz=[c,-s,0,s,c,0,0,0,1];
 function mul(A,B){var o=[];for(var i=0;i<3;i++)for(var j=0;j<3;j++)o[i*3+j]=A[i*3]*B[j]+A[i*3+1]*B[3+j]+A[i*3+2]*B[6+j];return o}return mul(mul(Rz,Rx),Ry)}
function flap(t){var a=87-69*ss(HATCH+.45,OPEN,t);a+=7*Math.sin(6.2832*(t-OPEN)/1.8)*ss(5.5,6.2,t)*(1-ss(FLY-.5,FLY-.2,t));var b=ss(FLY-.45,FLY,t);a+=b*(14-48*Math.cos(6.2832*(t-FLY+.45)/.62));return a*Math.PI/180}
function draw(t0){if(!ready)init();var t=t0%10;if(t<last)PXE.resetOn();last=t;PXE.cfgSet(CFG);PXE.clear();var i,j,k;
 if(t>1&&t<HATCH+3){var s=ss(1.05,2.5,t),shv=.05*Math.sin(t*46)*ss(2.5,HATCH,t)*(1-ss(HATCH,HATCH+.4,t)),R=rot(-.9+.95*ss(1,HATCH+.2,t),.08,shv);
  for(k=0;k<SU*SV;k++){var tau=Math.max(0,t-SDEL[k]),brk=Math.max(0,tau-.12),pid=SPID[k];if(brk>0&&pid%4!==0)continue;var fade=Math.max(0,Math.min(1,1-tau));if(fade<=0)continue;
   var X=SH[0][k]*s+SOUT[k*3]*tau*1.5,Y=SH[1][k]*s+SOUT[k*3+1]*tau*1.5,Z=SH[2][k]*s+SOUT[k*3+2]*tau*1.5,bj=Math.pow(brk,1.4)*.45,
    px=R[0]*X+R[1]*Y+R[2]*Z+WIND[0]*tau*tau+SJIT[k*3]*bj,py=R[3]*X+R[4]*Y+R[5]*Z+WIND[1]*tau*tau+SJIT[k*3+1]*bj,pz=R[6]*X+R[7]*Y+R[8]*Z+WIND[2]*tau*tau+SJIT[k*3+2]*bj,
    nx=SHN[k*3],ny=SHN[k*3+1],nz=SHN[k*3+2],g=ss(CRACK-.3,HATCH+.1,t),q=SEAM[k]/(.02+.13*g),gl=Math.exp(-q*q)*g;
   PXE.splat(px,py,pz,R[0]*nx+R[1]*ny+R[2]*nz,R[3]*nx+R[4]*ny+R[5]*nz,R[6]*nx+R[7]*ny+R[8]*nz,SCOL[k*3]*(1-gl)+.85*gl,SCOL[k*3+1]*(1-gl)+.97*gl,SCOL[k*3+2]*(1-gl)+gl,.9+gl,fade,brk>0,pid,gl)}}
 if(t>HATCH&&t<9.45){var grow=ss(HATCH+.1,OPEN-.2,t),size=.15+.85*grow,crum=Math.pow(1-grow,1.4),b=ss(OPEN,6.3,t)*(1-ss(FLY-.4,FLY,t)),br=1+.015*Math.sin(6.2832*(t-6)/2.4)*b,out=ss(HATCH,OPEN,t),fly=Math.max(0,Math.min(1.6,(t-FLY)/1.25)),
   yaw=.75-1.25*ss(HATCH,7.4,t)+.45*ss(7.3,8.6,t),pit=-.08-.42*out+.62*ss(FLY-.2,FLY+1,t),R=rot(yaw,pit,.1*Math.sin(t*1.3)*out-.18*ss(FLY,FLY+.8,t)),hov=.035*Math.sin(t*2.4)*out,
   ox=.05*Math.sin(fly*4),oy=hov-.12*Math.sin(Math.min(fly,1)*Math.PI),oz=4.55*Math.pow(fly,2.2),tauB=Math.max(0,t-(FLY+.95)),jm=Math.pow(tauB,1.2)*1.5,
   fadeB=ss(HATCH,HATCH+.5,t)*(1-ss(8.95,9.4,t)),pk=100-72*ss(8.6,9.1,t),fl=ss(FLY+.65,FLY+1.05,t),bi=0;
  var put=function(x,y,z,nx,ny,nz,r,g,bb,ao){var pid=BPID[bi],fj=BJIT;if(pid%100>=pk){bi++;return}var X=x*br,Y=y*br,Z=z*br,
    px=R[0]*X+R[1]*Y+R[2]*Z+ox+fj[bi*3]*.22*jm,py=R[3]*X+R[4]*Y+R[5]*Z+oy+fj[bi*3+1]*.22*jm,pz=R[6]*X+R[7]*Y+R[8]*Z+oz+fj[bi*3+2]*.35*jm;
   PXE.splat(px,py,pz,R[0]*nx+R[1]*ny+R[2]*nz,R[3]*nx+R[4]*ny+R[5]*nz,R[6]*nx+R[7]*ny+R[8]*nz,r,g,bb,ao,fadeB,(pid%1000)/1000<fl,pid,0);bi++};
  for(var wi=0;wi<2;wi++){var W2=WG[wi],f=flap(t-.025*wi),ft=flap(t-.025*wi-.09),lift=wi===0?.018:-.018;
   for(var sd=-1;sd<=1;sd+=2){
    for(i=0;i<U;i++)for(j=0;j<V;j++){k=i*V+j;var cu=W2.cu[k],ang=f+(ft-f)*Math.pow(cu,1.5),x=W2.lat[k]*size,wob=crum*.1*Math.sin(W2.vv[k]*21+cu*9)*cu,bow=.1*Math.sin(cu*Math.PI)*grow+.012*Math.cos(W2.vv[k]*40)*cu+wob;
     W2.px[k]=sd*(.045+x*Math.cos(ang)-bow*Math.sin(ang));W2.pz[k]=.02+lift+x*Math.sin(ang)+bow*Math.cos(ang);W2.py[k]=.08-.06*wi+W2.fwd[k]*size}
    for(i=0;i<U;i++)for(j=0;j<V;j++){k=i*V+j;var g=gradN(W2.px,W2.py,W2.pz,U,V,i,j);put(W2.px[k],W2.py[k],W2.pz[k],g[0],g[1],g[2],W2.col[k*3],W2.col[k*3+1],W2.col[k*3+2],W2.ao[k])}}}
  bi=4*U*V;for(k=0;k<BU*BV;k++)put(BODY[0][k],BODY[1][k],BODY[2][k],BODYN[k*3],BODYN[k*3+1],BODYN[k*3+2],BCOL[k*3],BCOL[k*3+1],BCOL[k*3+2],.9);
  for(k=0;k<2*AN;k++)put(ANT[k*3]*(.5+.5*grow),ANT[k*3+1]*(.5+.5*grow)+.165*(1-grow),ANT[k*3+2]*(.5+.5*grow),0,0,1,ACOL[k*3],ACOL[k*3+1],ACOL[k*3+2],1)}
 PXE.paint(t,5.5);PXE.typed(t,'metamorphose()',1,1.4,.5,function(v){return'rgb('+(v*.5|0)+','+(v*.8|0)+','+v+')'});glow(.45)}
return{draw:draw,init:init}})();


/* ---- Hoa hồng chữ: port sang JavaScript từ shecodesmx/rosa-generativa-python (rosa.py), giấy phép MIT, Copyright (c) 2026 She Codes MX ---- */
var ROSA=(function(){
var VW=1000,VH=800,HX=500,HY=265,UNIT=175,SBY=715,BOW=34,SWAY=5,TC=.45,TO=.85,OPEN0=16.5,ODUR=7,LOOP=37,GOLD=Math.PI*(3-Math.sqrt(5));
var TS=[.8,4.8],TLF=[3.5,8],TSP=[5,7],TOU=[6.5,11],TIN=[9.5,14.5],TCE=[13,16];
var WORDS=['love','bloom()','import love','dream()','grow()','while True:','hope','life','beautiful','create()'],SYMS=['*','+','.','♥'],STM=['|','(',')'],TOK=WORDS.concat(SYMS,STM);
var WID=[],LONG=[],SHORT=[],SYM=[],STE=[],i;for(i=0;i<WORDS.length;i++){WID.push(i);(TOK[i].length>8?LONG:SHORT).push(i)}for(i=0;i<SYMS.length;i++)SYM.push(WORDS.length+i);for(i=0;i<STM.length;i++)STE.push(WORDS.length+SYMS.length+i);
var SIZES=[8,9,10,11,13,15,17,19],NSZ=8,NLV=8,ANG_STEP=15,ANG_ZERO=6,NA=13;
var BASE=[[225,25,55],[255,60,150],[255,170,205],[255,205,100],[30,200,120]],SPARK=[255,232,240],PO=0,PM=1,PI=2,PC=3,PG=4;
var A0C=[.7,.6,.48,.36,.26,1.75],A0O=[1.3,1.05,.8,.55,.3,2.45],CC=[-1.3,-1.15,-.95,-.75,-.55,-.25],CO=[.5,.4,.25,.1,0,.45],LL=[1,.86,.7,.54,.4,.46],LW=[.66,.54,.44,.35,.27,.13],R0=[.3,.24,.18,.13,.08,.16],R0C=[.2,.16,.12,.09,.06,.12],Z0=[0,0,0,0,0,-.08],LD=[0,1.5,3,4.5,6,0],LCNT=[5,5,4,4,3,5],LPH=[0,.63,.3,1.05,.5,.31],LGRID=[[15,10],[12,9],[10,8],[8,7],[7,5],[6,4]],LEDGE=[26,24,20,16,12,8],LPAL=[PO,PM,PM,PI,PI,PG];
var TOPEN=ODUR+6,TTEXT=OPEN0+TOPEN+.5,LEAVES=[[.2,-1,.95,.3],[.3,1,.95,.26],[.43,-1,.8,.4],[.52,1,.78,.36]];
var N,kind,grp,U,Vv,tok,size,pal,lvl0,tl,dur,appear,sx,sy,dA,dw1,dw2,dp1,dp2,swirl,tww,twp,rotj,X,Y,Dp,Ang,Bump,PXa,PYa,single,gLay,gPhi,gPh,gWo,coreG,ready=0,nCen=0,iStem,iLeaf,iPet,iCen,peG,sparkles=[],sacc=0,lastT=-1,rngf,nrg,cache={},ord=[],lv,dust,fscale=1,fox=0,foy=0;
function mb(s){return function(){s|=0;s=s+0x6D2B79F5|0;var t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function sm(x){x=Math.max(0,Math.min(1,x));return x*x*(3-2*x)}function sm5(x){x=Math.max(0,Math.min(1,x));return x*x*x*(x*(x*6-15)+10)}
var rr,pick=function(a){return a[(rr()*a.length)|0]},uni=function(a,b){return a+(b-a)*rr()};
function petTok(s){var r=rr();if(s>=5&&r<.4)return pick(WID);if(s>=3&&r<.38)return pick(SHORT);if(s>=2&&r<.2)return pick(SHORT);return pick(SYM.concat(SYM.slice(0,3)))}
function smallTok(s){return(s>=3&&rr()<.35&&SHORT.length)?pick(SHORT):pick(SYM)}
function stemTok(s){var r=rr();if(s>=1&&r<.08)return 4;if(r<.62)return pick(STE);return pick(SYM.slice(0,3))}
function init(){rr=mb(7);var rows=[],sd=Math.sqrt(.85),n=Math.max(40,Math.floor(330*.85)),k,j,g,h,a;gLay=[];gPhi=[];gPh=[];gWo=[];
 for(i=0;i<n;i++){h=(i+rr())/n;var ed=rr()<.45,v=ed?(rr()<.5?-1:1)*uni(.85,1):uni(-.8,.8),s=pick([0,1,1,2]);rows.push([0,0,h,v,stemTok(s),s,PG,(ed?4.2:2.6)+rr()*.9+.5*h,TS[0]+(TS[1]-TS[0])*(.92*h+.08*rr())])}
 LEAVES.forEach(function(L,li){var nu=Math.max(4,Math.floor(11*sd)),nv=Math.max(3,Math.floor(7*sd)),fr=li/4,lt=function(u){return TLF[0]+(TLF[1]-TLF[0])*Math.min(1,.75*fr+.13*u+.12*rr())};
  for(var iu=0;iu<nu;iu++)for(var iv=0;iv<nv;iv++){var u=.06+.94*((iu+rr())/nu),v=-.88+1.76*((iv+rr())/nv),s=pick([1,2,2,3]);rows.push([1,li,u,v,smallTok(s),s,PG,2+1.6*u+rr()*.9,lt(u)])}
  var ne=Math.max(5,Math.floor(12*sd));[-1,1].forEach(function(sg){for(var j=0;j<ne;j++){var u=.1+.88*((j+rr())/ne),s=pick([2,2,3]);rows.push([1,li,u,sg*.98,smallTok(s),s,PG,4.2+rr()*.9,lt(u)])}});
  var nvn=Math.max(5,Math.floor(9*sd));for(var j=0;j<nvn;j++){var u=.06+.9*((j+rr())/nvn),s=pick([1,2]);rows.push([1,li,u,uni(-.06,.06),smallTok(s),s,PG,4.6+rr()*.7,lt(u)])}});
 var og=LCNT[0]+LCNT[1],ig=LCNT[2]+LCNT[3]+LCNT[4],orank=0,irank=0;
 for(k=0;k<6;k++){var np=LCNT[k],gu=Math.max(3,Math.round(LGRID[k][0]*sd)),gv=Math.max(2,Math.round(LGRID[k][1]*sd)),ne2=Math.max(3,Math.floor(LEDGE[k]*sd/2));
  for(var q=0;q<np;q++){g=gLay.length;gLay.push(k);gPhi.push(LPH[k]+6.2832*q/np+uni(-.12,.12));gPh.push(rr()*6.2832);gWo.push(k*.28+rr()*.25);var rank;
   if(k<=1){rank=orank/og;orank++}else if(k<=4){rank=irank/ig;irank++}else rank=q/np;
   (function(k,g,rank,q,np){var launch=function(u,ed){var ws,we,f;if(k===5){ws=TSP[0];we=TSP[1];f=.7*rank+.3*rr()}else if(k<=1){ws=TOU[0];we=TOU[1];f=ed?.5*rank+.12*rr():.38+.62*(.7*rank+.3*rr())}else{ws=TIN[0];we=TIN[1];f=.75*rank+.15*u+.1*rr()}return ws+(we-ws)*Math.min(f,1)},
    bs=function(ed){var o=[[3,4,4,5,5,6],[3,4,4,5,5],[2,3,3,4,4],[2,2,3,3,4],[1,2,2,3],[2,3,3]][k];return Math.min(pick(o)+(ed?1:0),NSZ-1)},pf=function(){return(k<5&&rr()<.1)?PI:LPAL[k]};
    for(var iu=0;iu<gu;iu++)for(var iv=0;iv<gv;iv++){var u=.06+.94*((iu+rr())/gu),v=-.93+1.86*((iv+rr())/gv),s=bs(false),t=k<5?petTok(s):smallTok(s);if(LONG.indexOf(t)>=0)s=Math.min(s,3);rows.push([2,g,u,v,t,s,pf(),(.8+3.4*Math.pow(u,1.3)+rr()*.7)*(k>=3?.85:1),launch(u,false)])}
    [-1,1].forEach(function(sg){for(var j=0;j<ne2;j++){var u=.12+.86*((j+rr())/ne2),s=bs(true),t=k<5?petTok(s):smallTok(s);if(LONG.indexOf(t)>=0)s=Math.min(s,3);rows.push([2,g,u,sg*.99,t,s,pf(),3.4+1.4*u+rr()*.6,launch(u,true)])}})})(k,g,rank,q,np)}}
 nCen=Math.max(30,Math.floor(85));for(k=0;k<nCen;k++){var s=pick([1,2,2,3]),r=rr(),pl=r<.7?PC:(r<.9?PI:PM);rows.push([3,0,k,0,smallTok(s),s,pl,3.4+rr()*1.6,TCE[0]+(TCE[1]-TCE[0])*(.85*k/nCen+.15*rr())])}
 N=rows.length;var F=function(c,T){var a=new T(N);for(var q=0;q<N;q++)a[q]=rows[q][c];return a};kind=F(0,Uint8Array);grp=F(1,Int32Array);U=F(2,Float32Array);Vv=F(3,Float32Array);tok=F(4,Int32Array);size=F(5,Uint8Array);pal=F(6,Uint8Array);lvl0=F(7,Float32Array);tl=F(8,Float32Array);
 single=new Uint8Array(N);for(i=0;i<N;i++)single[i]=TOK[tok[i]].length===1?1:0;
 iStem=[];iLeaf=[];iPet=[];iCen=[];for(i=0;i<N;i++)[iStem,iLeaf,iPet,iCen][kind[i]].push(i);peG=iPet.map(function(q){return grp[q]});for(i=0;i<gLay.length;i++)if(gLay[i]===4){coreG=i;break}
 nrg=mb(99);var nr=function(a,b){return a+(b-a)*nrg()},nn=function(){return Math.sqrt(-2*Math.log(nrg()+1e-9))*Math.cos(6.2832*nrg())};
 dur=new Float32Array(N);appear=new Float32Array(N);sx=new Float32Array(N);sy=new Float32Array(N);dA=new Float32Array(N);dw1=new Float32Array(N);dw2=new Float32Array(N);dp1=new Float32Array(N);dp2=new Float32Array(N);swirl=new Float32Array(N);tww=new Float32Array(N);twp=new Float32Array(N);rotj=new Float32Array(N);
 for(i=0;i<N;i++){dur[i]=nr(1.5,2.8);appear[i]=tl[i]-1.1;if(nrg()<.07&&kind[i]!==0)appear[i]=Math.min(appear[i],nr(.2,3));sx[i]=nr(30,VW-30);sy[i]=nr(30,VH-30);if(kind[i]===0){sx[i]=HX+nn()*150;sy[i]=VH+nr(10,70)}dA[i]=nr(6,26);dw1[i]=nr(.25,.9);dw2[i]=nr(.25,.9);dp1[i]=nr(0,6.2832);dp2[i]=nr(0,6.2832);swirl[i]=nr(-.35,.35);tww[i]=nr(1.2,3.5);twp[i]=nr(0,6.2832);rotj[i]=kind[i]===0?nr(-6,6):nr(-18,18)}
 X=new Float32Array(N);Y=new Float32Array(N);Dp=new Float32Array(N);Ang=new Float32Array(N);Bump=new Float32Array(N);PXa=new Float32Array(N);PYa=new Float32Array(N);
 dust=[];for(i=0;i<130;i++){var orb=i>=65;dust.push({orb:orb,x:nr(0,VW),y:nr(0,VH),vy:nr(5,16),amp:nr(8,30),w:nr(.2,.7),ph:nr(0,6.2832),tw:nr(.8,2.6),th:nr(0,6.2832),om:nr(.05,.16)*(nrg()<.5?-1:1),r:nr(250,390),rad:[1,1,1,2,2,3][(nrg()*6)|0],ap:orb?nr(8,20):nr(0,5),col:SPARK_PICK(nrg())})}
 ord=new Array(N);lv=new Int32Array(N);cache={};ready=1}
function SPARK_PICK(r){return r<.35?SPARK:r<.65?BASE[2]:r<.85?BASE[3]:BASE[1]}
function stemPt(h,T,tau){var ty=HY+.12*Math.cos(tau)*UNIT;return[HX+BOW*Math.sin(Math.PI*h)+SWAY*h*h*Math.sin(.7*T+1.2*h),SBY+(ty-SBY)*h]}
function compute(T){var ov=sm((T-OPEN0)/TOPEN),bloom=sm((T-OPEN0-TOPEN*.55)/(TOPEN*.45+.01)),tau=TC+(TO-TC)*ov,ct=Math.cos(tau),st=Math.sin(tau),cx=HX+SWAY*Math.sin(.7*T+1.2),cy=HY,q,k,u,v;Bump.fill(0);
 var ws=((T*.22)%1.5)-.25;
 for(k=0;k<iStem.length;k++){q=iStem[k];var h=U[q],p=stemPt(h,T,tau),p1=stemPt(Math.max(0,h-.01),T,tau),p2=stemPt(Math.min(1,h+.01),T,tau);X[q]=p[0]+Vv[q]*(5+(1-h)*3.5);Y[q]=p[1];Dp[q]=-3;Ang[q]=Math.atan2(-(p2[1]-p1[1]),p2[0]-p1[0])*57.2958;var d=(h-ws)/.07;Bump[q]=.45*Math.exp(-d*d)*ov}
 for(k=0;k<iLeaf.length;k++){q=iLeaf[k];var li=grp[q],L=LEAVES[li],hb=L[0],side=L[1],Ln=L[2],lift=L[3]+.05*Math.sin(.9*T+hb*7),b=stemPt(hb,T,tau);u=U[q];v=Vv[q];var om=1-u,px=2*om*u*(.5*Ln)+u*u*Ln,py=2*om*u*(.34*Ln)+u*u*(.16*Ln),tx=2*om*(.5*Ln)+2*u*(.5*Ln),ty=2*om*(.34*Ln)+2*u*(-.18*Ln),nm=Math.hypot(tx,ty),
   wl=.2*Ln*Math.pow(Math.sin(Math.PI*Math.pow(Math.max(1e-4,Math.min(1,u)),.85)),.7);px=(px+(-ty/nm)*v*wl)*side;py=py+(tx/nm)*v*wl;tx*=side;var rot=side*lift,cr=Math.cos(rot),sr=Math.sin(rot);
   X[q]=b[0]+(px*cr-py*sr)*UNIT;Y[q]=b[1]-(px*sr+py*cr)*UNIT;Dp[q]=-2.5;Ang[q]=Math.atan2(tx*sr+ty*cr,tx*cr-ty*sr)*57.2958;var wl2=((T*.3+hb*.5)%1.7)-.3,dd=(u-wl2)/.12;Bump[q]=.6*Math.exp(-dd*dd)*ov}
 var NG=gLay.length,a0g=[],cg=[],Lg=[],phg=[],okg=[],r0g=[];
 for(k=0;k<NG;k++){var l=gLay[k],o=sm((T-OPEN0-LD[l])/ODUR);okg[k]=o;a0g[k]=A0C[l]*(1-o)+A0O[l]*o+.03*ov*Math.sin(1.1*T+gPh[k]);cg[k]=CC[l]*(1-o)+CO[l]*o;Lg[k]=LL[l]*(1+.05*o);phg[k]=gPhi[k]+.02*ov*Math.sin(.7*T+1.7*gPh[k]);r0g[k]=R0C[l]*(1-o)+R0[l]*o}
 var gate=sm((T-OPEN0-2)/4);
 function pe(u,v,g){var l=gLay[g],a0=a0g[g],c=cg[g],Lp=Lg[g],ok=okg[g],ph=gPh[g];if(Math.abs(c)<1e-3)c=1e-3;var a=a0+c*u,s=Lp/c*(Math.cos(a0)-Math.cos(a)),z=Lp/c*(Math.sin(a)-Math.sin(a0))+Z0[l],uu=Math.max(1e-4,Math.min(1,u)),w=LW[l]*1.2*Math.pow(Math.sin(Math.PI*uu),.45)*(.55+.45*uu),R=s+r0g[g],ang=phg[g]+Math.max(-1.3,Math.min(1.3,v*w/Math.max(R,.14)));
  z=z+.1*ok*u*v*v+.03*ov*u*u*Math.sin(4*v+6*u-1.7*T+ph);var Xw=R*Math.cos(ang),Yw=R*Math.sin(ang);return[cx+Xw*UNIT,cy-(z*ct-Yw*st)*UNIT,Yw*ct+z*st]}
 for(k=0;k<iPet.length;k++){q=iPet[k];var g=peG[k];u=U[q];v=Vv[q];var p0=pe(u,v,g),du=u>.95?-.04:.04,p1=pe(u+du,v,g),sg=Math.sign(du);X[q]=p0[0];Y[q]=p0[1];Dp[q]=p0[2];Ang[q]=Math.atan2(-(p1[1]-p0[1])*sg,(p1[0]-p0[0])*sg)*57.2958;var wp=((T*.33+gWo[g])%1.8)-.4,dd=(u-wp)/.1;Bump[q]=Math.exp(-dd*dd)*gate}
 var gi=coreG,a0c=a0g[gi],cc=cg[gi],Lc=Lg[gi];if(Math.abs(cc)<1e-3)cc=1e-3;var at=a0c+cc*.92,s4=Lc/cc*(Math.cos(a0c)-Math.cos(at)),z4=Lc/cc*(Math.sin(at)-Math.sin(a0c)),rc=.85*(s4+r0g[gi])+.02;
 for(k=0;k<iCen.length;k++){q=iCen[k];var kk=U[q],rf=Math.sqrt((kk+.5)/nCen),r=rc*rf,zz=z4+.05*(1-rf*rf),th=kk*GOLD+.1*T,pj=function(t){var Xw=r*Math.cos(t),Yw=r*Math.sin(t);return[cx+Xw*UNIT,cy-(zz*ct-Yw*st)*UNIT,Yw*ct+zz*st]},A=pj(th),B=pj(th+.15);X[q]=A[0];Y[q]=A[1];Dp[q]=A[2]+.02;Ang[q]=Math.atan2(-(B[1]-A[1]),B[0]-A[0])*57.2958}
 var cfac=.25+.75*sm((T-OPEN0)/6);
 for(q=0;q<N;q++){var e=sm5((T-tl[q])/dur[q]),wx=sx[q]+dA[q]*Math.sin(dw1[q]*T+dp1[q]),wy=sy[q]+dA[q]*Math.cos(dw2[q]*T+dp2[q]),chx=X[q]-wx,chy=Y[q]-wy,sw=swirl[q]*Math.sin(Math.PI*e);
  PXa[q]=wx+chx*e-chy*sw;PYa[q]=wy+chy*e+chx*sw;var dep=Dp[q]+3*Math.sin(Math.PI*e),fade=Math.max(0,Math.min(1,(T-appear[q])/.9)),lv0=(lvl0[q]+.5*Math.sin(tww[q]*T+twp[q])+.5*bloom+.3*bloom*Math.sin(.9*T)+1.8*Math.sin(Math.PI*e)+2.4*Bump[q])*fade;if(kind[q]===3)lv0*=cfac;lv[q]=lv0>=.9?Math.max(0,Math.min(NLV-.01,lv0))|0:-1;Dp[q]=Dp[q];PXa[q]=PXa[q];Bump[q]=Bump[q];Ang[q]=Ang[q];Dd[q]=dep}
 return{ov:ov,bloom:bloom}}
var Dd=null;
function ramp(p,l){var t=l/(NLV-1),b=BASE[p],c;if(t<=.72){var k=.16+.84*(t/.72);c=[b[0]*k|0,b[1]*k|0,b[2]*k|0]}else{var m=(t-.72)/.28*.75;c=[b[0]+(SPARK[0]-b[0])*m|0,b[1]+(SPARK[1]-b[1])*m|0,b[2]+(SPARK[2]-b[2])*m|0]}return'rgb('+c[0]+','+c[1]+','+c[2]+')'}
function sprite(key,t,sz,p,l,ab){var s=cache[key];if(s)return s;var px=SIZES[sz],cvx=document.createElement('canvas'),g=cvx.getContext('2d');g.font=px+'px "DejaVu Sans Mono",Consolas,Menlo,monospace';var txt=TOK[t],w=Math.ceil(g.measureText(txt).width)+2,h=Math.ceil(px*1.25),S=Math.ceil(Math.hypot(w,h))+2;cvx.width=cvx.height=S;g=cvx.getContext('2d');g.translate(S/2,S/2);g.rotate(-(ab-ANG_ZERO)*ANG_STEP*Math.PI/180);g.font=px+'px "DejaVu Sans Mono",Consolas,Menlo,monospace';g.textAlign='center';g.textBaseline='middle';g.fillStyle=ramp(p,l);g.fillText(txt,0,0);cache[key]=cvx;return cvx}
function draw(t0){if(!ready)init();if(!Dd)Dd=new Float32Array(N);var T=t0%LOOP;if(T<lastT){sparkles=[];sacc=0}var dt=lastT<0?0:Math.min(.05,Math.max(0,T-lastT));lastT=T;
 fscale=Math.min(W/VW,H/VH);fox=(W-VW*fscale)/2;foy=(H-VH*fscale)/2;var R=compute(T),ov=R.ov,bloom=R.bloom;
 c.setTransform(1,0,0,1,0,0);c.fillStyle='#000';c.fillRect(0,0,W,H);c.setTransform(fscale,0,0,fscale,fox,foy);
 var d,k,tt=T;for(k=0;k<dust.length;k++){d=dust[k];var x,y;if(d.orb){var th=d.th+d.om*tt;x=HX+d.r*Math.cos(th);y=HY+40+.75*d.r*Math.sin(th)+12*Math.sin(.8*tt+d.ph)}else{x=d.x+d.amp*Math.sin(d.w*tt+d.ph);y=((d.y-d.vy*tt)%VH+VH)%VH}
  var tw=.5+.5*Math.sin(d.tw*tt+d.ph),vis=Math.max(0,Math.min(1,(tt-d.ap)/2)),kk=(.2+.6*tw)*vis;kk=d.orb?kk*(.4+.6*ov):kk*.8;if(kk<.1)continue;c.fillStyle='rgb('+(d.col[0]*kk|0)+','+(d.col[1]*kk|0)+','+(d.col[2]*kk|0)+')';c.fillRect(x-d.rad+.5,y-d.rad+.5,d.rad*2-1+1,d.rad*2-1+1)}
 var n=0;for(k=0;k<N;k++)if(lv[k]>=0)ord[n++]=k;ord.length=n;ord.sort(function(a,b){return Dd[a]-Dd[b]});
 for(k=0;k<n;k++){var q=ord[k],ab=single[q]?ANG_ZERO:Math.max(0,Math.min(NA-1,Math.round((((Ang[q]+rotj[q]+90)%180+180)%180-90)/ANG_STEP)+ANG_ZERO)),key=(((tok[q]*NSZ+size[q])*5+pal[q])*NLV+lv[q])*NA+ab,s=sprite(key,tok[q],size[q],pal[q],lv[q],ab);c.drawImage(s,Math.round(PXa[q])-(s.width>>1),Math.round(PYa[q])-(s.height>>1))}
 if(dt>0){sacc+=dt*(.8+6*ov);while(sacc>=1){sacc-=1;for(var tr=0;tr<6;tr++){var j=iPet[(rr()*iPet.length)|0];if(lv[j]>=3){sparkles.push([PXa[j],PYa[j],0,uni(.7,1.4),uni(4,9)]);break}}}for(k=0;k<sparkles.length;k++)sparkles[k][2]+=dt;sparkles=sparkles.filter(function(s){return s[2]<s[3]})}
 c.lineWidth=1;for(k=0;k<sparkles.length;k++){var s=sparkles[k],sn=Math.sin(Math.PI*s[2]/s[3]),ln=s[4]*(.35+sn),col=function(m){return'rgb('+(SPARK[0]*sn*m|0)+','+(SPARK[1]*sn*m|0)+','+(SPARK[2]*sn*m|0)+')'};c.strokeStyle=col(1);c.beginPath();c.moveTo(s[0]-ln,s[1]);c.lineTo(s[0]+ln,s[1]);c.moveTo(s[0],s[1]-ln);c.lineTo(s[0],s[1]+ln);c.stroke();var dd=ln*.55;c.strokeStyle=col(.5);c.beginPath();c.moveTo(s[0]-dd,s[1]-dd);c.lineTo(s[0]+dd,s[1]+dd);c.moveTo(s[0]-dd,s[1]+dd);c.lineTo(s[0]+dd,s[1]-dd);c.stroke()}
 var a=sm((T-TTEXT)/3);if(a>.003){c.globalAlpha=a;c.fillStyle='rgb(255,205,220)';c.font='italic 27px Georgia,Palatino,serif';c.textAlign='center';c.textBaseline='alphabetic';c.fillText('Có những điều cũng có thể lập trình bằng cả trái tim.',VW/2,780);c.globalAlpha=1}
 c.setTransform(1,0,0,1,0,0);glow(.5*(.55+.45*ov)*(.85+.15*bloom))}
return{draw:draw,init:init}})();






/* ---- Ảnh → chữ: vẽ cảnh bằng canvas 2D ở độ phân giải thấp (mỗi điểm ảnh = một ô chữ), phóng to rồi phủ lớp mặt nạ chữ cố định:
   chỉ phần nét chữ để lộ màu, nên cả cảnh thành ký tự màu. Mỗi khung chỉ có vài lệnh vẽ ảnh, rất nhẹ. ---- */
var IMA=(function(){
var LR,lg,CC,cc,GL,gl,AT,PV,cw,ch,cols,rows,lw=0,lh=0,RAMP=" .'`,:;irsxXA253hkMHG#9B&8@";
function setup(){var fsz=Math.max(7,Math.round(Math.min(W,H)/100));ch=fsz;cw=Math.max(4,Math.round(fsz*.6));cols=Math.ceil(W/cw);rows=Math.ceil(H/ch);
 if(cols===lw&&rows===lh&&AT&&CC.width===W&&CC.height===H)return;lw=cols;lh=rows;
 LR=document.createElement('canvas');LR.width=cols;LR.height=rows;lg=LR.getContext('2d',{willReadFrequently:true});
 PV=new Int8Array(cols*rows).fill(-1);CC=document.createElement('canvas');CC.width=W;CC.height=H;cc=CC.getContext('2d');GL=document.createElement('canvas');GL.width=W;GL.height=H;gl=GL.getContext('2d');
 /* bảng ký tự trắng: mỗi mức sáng một ký tự, tô sẵn một lần */
 AT=document.createElement('canvas');AT.width=cw*RAMP.length;AT.height=ch;var g=AT.getContext('2d');g.fillStyle='#fff';g.font='700 '+Math.round(fsz*1.1)+'px Consolas,Menlo,"DejaVu Sans Mono",monospace';g.textBaseline='top';g.textAlign='center';
 for(var i=0;i<RAMP.length;i++)g.fillText(RAMP[i],i*cw+cw/2,-1)}
/* vẽ: fn(g) vẽ theo toạ độ màn hình W×H vào lưới thấp (mỗi điểm = một ô chữ); ô sáng dùng ký tự đặc, ô tối dùng ký tự thưa */
function frame(fn){setup();lg.setTransform(1,0,0,1,0,0);lg.globalCompositeOperation='source-over';lg.globalAlpha=1;lg.fillStyle='#000';lg.fillRect(0,0,cols,rows);
 lg.setTransform(cols/W,0,0,rows/H,0,0);fn(lg,LR);lg.setTransform(1,0,0,1,0,0);
 var id=lg.getImageData(0,0,cols,rows),d=id.data,n=RAMP.length-1,x,y,k,q=0;
 for(y=0;y<rows;y++)for(x=0;x<cols;x++,q++){k=q*4;var L=(d[k]*.3+d[k+1]*.55+d[k+2]*.15)/255,lv=L<.035?0:Math.min(n,1+Math.floor(Math.pow(L,.75)*n));
  d[k]=Math.min(255,d[k]*1.2);d[k+1]=Math.min(255,d[k+1]*1.2);d[k+2]=Math.min(255,d[k+2]*1.2);
  if(lv!==PV[q]){PV[q]=lv;gl.clearRect(x*cw,y*ch,cw,ch);if(lv)gl.drawImage(AT,lv*cw,0,cw,ch,x*cw,y*ch,cw,ch)}}
 lg.putImageData(id,0,0);
 /* tô màu ký tự bằng ảnh phóng to, rồi đẩy sáng lên một chút cho rực */
 cc.globalCompositeOperation='source-over';cc.imageSmoothingEnabled=false;cc.clearRect(0,0,W,H);cc.drawImage(LR,0,0,W,H);cc.globalCompositeOperation='destination-in';cc.drawImage(GL,0,0);
 c.setTransform(1,0,0,1,0,0);c.globalAlpha=1;c.globalCompositeOperation='source-over';c.fillStyle='#000';c.fillRect(0,0,W,H);c.drawImage(CC,0,0)}
function pix(fn){var id=lg.getImageData(0,0,cols,rows),d=id.data;fn(d,cols,rows,W/cols,H/rows);lg.putImageData(id,0,0)}
function noise(n,seed,oct){/* ảnh nhiễu mây tuần hoàn n×n */var cv=document.createElement('canvas');cv.width=cv.height=n;var g=cv.getContext('2d'),r=PXE.rng(seed),im=g.createImageData(n,n),v=new Float32Array(n*n);
 for(var o=0;o<oct;o++){var f=4<<o,a=1/(1<<o),gr=[];for(var i=0;i<f*f;i++)gr.push(r());for(var y=0;y<n;y++)for(var x=0;x<n;x++){var fx=x/n*f,fy=y/n*f,x0=Math.floor(fx),y0=Math.floor(fy),tx=fx-x0,ty=fy-y0;tx=tx*tx*(3-2*tx);ty=ty*ty*(3-2*ty);
  var A=gr[(y0%f)*f+x0%f],B=gr[(y0%f)*f+(x0+1)%f],C=gr[((y0+1)%f)*f+x0%f],D=gr[((y0+1)%f)*f+(x0+1)%f];v[y*n+x]+=a*((A*(1-tx)+B*tx)*(1-ty)+(C*(1-tx)+D*tx)*ty)}}
 for(i=0;i<n*n;i++){var q=Math.max(0,Math.min(1,(v[i]/1.9-.42)*2.6));im.data[i*4]=255;im.data[i*4+1]=255;im.data[i*4+2]=255;im.data[i*4+3]=q*255|0}g.putImageData(im,0,0);return cv}
return{frame:frame,pix:pix,noise:noise}})();

/* ---- Cánh đồng hoa cúc dưới trăng (theo video mẫu): cảnh vẽ mịn ở độ phân giải đầy đủ, chữ chỉ là lớp vân phủ lên:
   mây thành chữ $8@%#, trời có chấm li ti, cỏ có vân chữ 1 | xanh mờ. Hoa cúc vẽ sẵn thành ảnh nhỏ theo từng cỡ nên mỗi khung rất nhẹ. ---- */
var FIELD=(function(){
var ready=0,CL=null,DZ=[],FF=[],TR=[],BL=[],SPR={},GC=null,GS=null,GF=null,OFF=null,og=null,lw=0,lh=0,SK=[];
function glyphs(set,fs,alpha,seed){var cv=document.createElement('canvas');cv.width=W;cv.height=H;var g=cv.getContext('2d'),r=PXE.rng(seed),cw=Math.round(fs*.62);g.font='700 '+fs+'px Consolas,Menlo,"DejaVu Sans Mono",monospace';g.textBaseline='top';g.fillStyle='rgba(255,255,255,'+alpha+')';
 for(var y=0;y<H;y+=fs)for(var x=0;x<W;x+=cw)g.fillText(set[(r()*set.length)|0],x,y);return cv}
function layers(){if(lw===W&&lh===H&&GC)return;lw=W;lh=H;var fs=Math.max(8,Math.round(Math.min(W,H)/62));
 GC=glyphs('$8@%#&0QB$%@8&#SZ',fs,1,3);GS=glyphs('..:.:..\'.:',fs,1,4);GF=glyphs('1|l1!|/1i|',fs,1,6);OFF=document.createElement('canvas');OFF.width=W;OFF.height=H;og=OFF.getContext('2d');SPR={}}
function daisy(sz,blue){/* một bông cúc: 14 cánh trắng viền xám xanh, nhuỵ vàng có vòng cam */
 var k=(sz|0)+(blue?'b':'w');if(SPR[k])return SPR[k];var n=Math.ceil(sz*2.6),cv=document.createElement('canvas');cv.width=cv.height=n;var g=cv.getContext('2d'),cx=n/2,cy=n/2;
 for(var p=0;p<14;p++){var a=p/14*6.2832;g.save();g.translate(cx,cy);g.scale(1,.62);g.rotate(a);var pg=g.createLinearGradient(0,0,sz,0);pg.addColorStop(0,blue?'#b9c8ff':'#ffffff');pg.addColorStop(1,blue?'#7f97e8':'#d6def0');g.fillStyle=pg;g.beginPath();g.ellipse(sz*.55,0,sz*.5,sz*.15,0,0,6.2832);g.fill();g.restore()}
 var yg=g.createRadialGradient(cx-sz*.06,cy-sz*.06,0,cx,cy,sz*.3);yg.addColorStop(0,'#fff27a');yg.addColorStop(.6,'#ffc21a');yg.addColorStop(1,'#d07a10');g.fillStyle=yg;g.beginPath();g.ellipse(cx,cy,sz*.28,sz*.2,0,0,6.2832);g.fill();SPR[k]=cv;return cv}
function init(){var r=PXE.rng(77),i;CL=IMA.noise(256,9,5);
 /* mây thành từng mảng: tăng tương phản cho có khoảng trời xanh xen giữa */
 var cg=CL.getContext('2d'),im=cg.getImageData(0,0,256,256),dd=im.data;for(i=3;i<dd.length;i+=4)dd[i]=Math.max(0,Math.min(255,(dd[i]/255-.38)*2.4*255));cg.putImageData(im,0,0);DZ=[];
 for(i=0;i<340;i++){var z=Math.pow(r(),.9);DZ.push({x:r(),z:z,ph:r()*6.28,bl:r()<.22,s:.75+.5*r()})}DZ.sort(function(a,b){return a.z-b.z});
 FF=[];for(i=0;i<22;i++)FF.push({x:r(),y:.68+r()*.3,ph:r()*6.28,sp:.2+r()*.5});
 TR=[];for(i=0;i<70;i++)TR.push([r(),r()]);BL=[];for(i=0;i<420;i++)BL.push([r(),Math.pow(r(),.7),r()*6.28,r()]);SK=[];for(i=0;i<160;i++)SK.push([r(),r()*.6,r()]);ready=1}
function draw(t){if(!ready)init();layers();var T=t,hz=H*.6,i,mx=W*.68,my=H*.24,mr=Math.min(W,H)*.042,g=c,wind=Math.sin(T*.7)*.6+Math.sin(T*1.9)*.25;
 g.setTransform(1,0,0,1,0,0);g.globalAlpha=1;g.globalCompositeOperation='source-over';
 /* trời */
 var sk=g.createLinearGradient(0,0,0,hz);sk.addColorStop(0,'#050f3e');sk.addColorStop(.55,'#112c95');sk.addColorStop(1,'#2652d0');g.fillStyle=sk;g.fillRect(0,0,W,hz);
 for(i=0;i<SK.length;i++){var s=SK[i];g.fillStyle='rgba(220,235,255,'+(.25+.5*s[2])+')';g.fillRect(s[0]*W,s[1]*hz,1.5,1.5)}
 g.globalAlpha=.16;g.drawImage(GS,0,0,W,hz,0,0,W,hz);g.globalAlpha=1;
 /* trăng + quầng */
 var hl=g.createRadialGradient(mx,my,mr*.8,mx,my,mr*5);hl.addColorStop(0,'rgba(200,225,255,.6)');hl.addColorStop(1,'rgba(90,140,255,0)');g.fillStyle=hl;g.fillRect(mx-mr*5,my-mr*5,mr*10,mr*10);
 var mg=g.createRadialGradient(mx-mr*.2,my-mr*.2,0,mx,my,mr);mg.addColorStop(0,'#ffffff');mg.addColorStop(1,'#dfe9ff');g.fillStyle=mg;g.beginPath();g.arc(mx,my,mr,0,6.2832);g.fill();
 /* mây: bóng tối phía dưới, thân sáng, rồi phần sáng hiện thành chữ */
 var cs=W*1.6,off=(T*12)%cs,cyy=-H*.04,chh=hz*.95;og.setTransform(1,0,0,1,0,0);og.globalCompositeOperation='source-over';og.globalAlpha=1;og.clearRect(0,0,W,H);
 var paint=function(){og.globalCompositeOperation='source-over';og.clearRect(0,0,W,H);for(var k2=-1;k2<2;k2++)og.drawImage(CL,k2*cs-off,cyy,cs,chh)};
 paint();og.globalCompositeOperation='source-atop';og.fillStyle='#0a1650';og.fillRect(0,0,W,H);g.globalAlpha=.5;g.drawImage(OFF,0,H*.014);
 paint();g.globalAlpha=.42;g.drawImage(OFF,0,0);g.globalAlpha=1;
 og.globalCompositeOperation='destination-in';og.drawImage(GC,0,0);og.globalCompositeOperation='source-atop';og.fillStyle='rgba(150,190,255,1)';og.fillRect(0,0,W,hz);og.globalCompositeOperation='source-over';
 g.globalCompositeOperation='lighter';g.globalAlpha=.75;g.drawImage(OFF,0,0,W,hz,0,0,W,hz);g.globalAlpha=1;g.globalCompositeOperation='source-over';
 /* sao băng */
 var sp=(T%11)/1.2;if(sp<1){var sx=W*(.12+.25*sp),sy=H*(.2+.06*sp),ln=W*.1,gr=g.createLinearGradient(sx-ln,sy-ln*.35,sx,sy);gr.addColorStop(0,'rgba(255,255,255,0)');gr.addColorStop(1,'rgba(255,255,255,.95)');g.strokeStyle=gr;g.lineWidth=1.6;g.beginPath();g.moveTo(sx-ln,sy-ln*.35);g.lineTo(sx,sy);g.stroke()}
 /* đồng cỏ */
 var fd=g.createLinearGradient(0,hz,0,H);fd.addColorStop(0,'#123a3a');fd.addColorStop(.25,'#0f4634');fd.addColorStop(1,'#1d6e3e');g.fillStyle=fd;g.fillRect(0,hz,W,H-hz);
 /* rặng thông tối */
 g.fillStyle='#0a1430';g.beginPath();g.moveTo(0,hz+H*.012);for(i=0;i<TR.length;i++){var x=W*(i+TR[i][0]*.6)/TR.length,h=H*(.018+.04*TR[i][1]);g.lineTo(x-W*.006,hz-H*.006);g.lineTo(x,hz-h);g.lineTo(x+W*.006,hz-H*.006)}g.lineTo(W,hz-H*.004);g.lineTo(W,hz+H*.012);g.closePath();g.fill();
 /* dải hoa xa li ti ngay dưới rặng cây */
 var mist=g.createLinearGradient(0,hz,0,hz+H*.06);mist.addColorStop(0,'rgba(140,180,255,.35)');mist.addColorStop(1,'rgba(140,180,255,0)');g.fillStyle=mist;g.fillRect(0,hz,W,H*.06);
 for(i=0;i<240;i++){var dx=((i*97.3)%W),dy=hz+H*(.012+.03*((i*.618)%1));g.fillStyle=i%5?'rgba(225,235,255,.85)':'rgba(255,215,80,.9)';g.fillRect(dx,dy,2,2)}
 /* cỏ + vân chữ xanh */
 g.globalAlpha=.22;g.drawImage(GF,0,hz,W,H-hz,0,hz,W,H-hz);g.globalAlpha=1;g.globalCompositeOperation='source-atop';g.fillStyle='rgba(60,170,90,.0)';g.globalCompositeOperation='source-over';
 g.lineCap='round';for(i=0;i<BL.length;i++){var B=BL[i],z=B[1],y=hz+(H-hz)*Math.pow(z,1.5),x2=B[0]*W,hg=H*(.015+.12*z*z),bd=(wind+.3*Math.sin(T*2+B[2]))*hg*.35;
  g.strokeStyle='rgba('+(30+50*B[3]|0)+','+(110+100*z|0)+','+(70+50*B[3]|0)+','+(.35+.5*z)+')';g.lineWidth=.6+1.4*z;g.beginPath();g.moveTo(x2,y);g.quadraticCurveTo(x2+bd*.3,y-hg*.6,x2+bd,y-hg);g.stroke()}
 /* hoa cúc: xa nhỏ, gần to, đung đưa theo gió */
 for(i=0;i<DZ.length;i++){var D=DZ[i],z2=D.z,y2=hz+H*.03+(H-hz)*Math.pow(z2,1.6),sz=(2+H*.034*z2*z2)*D.s,sw=(wind+.4*Math.sin(T*1.6+D.ph))*sz*.5,x3=D.x*W+sw,stem=H*.07*z2*z2;
  if(stem>3){g.strokeStyle='rgba(50,150,80,.85)';g.lineWidth=Math.max(1,sz*.08);g.beginPath();g.moveTo(D.x*W,y2+stem);g.lineTo(x3,y2);g.stroke()}
  if(sz<3.2){g.fillStyle=D.bl?'rgba(170,190,255,.9)':'rgba(235,240,255,.9)';g.fillRect(x3-1.5,y2-1,3,2);continue}
  var sp2=daisy(Math.round(sz),D.bl);g.drawImage(sp2,x3-sp2.width/2,y2-sp2.height/2)}
 /* đom đóm */
 g.globalCompositeOperation='lighter';for(i=0;i<FF.length;i++){var F=FF[i],fx=(F.x+.04*Math.sin(T*F.sp+F.ph))*W,fy=(F.y+.03*Math.sin(T*F.sp*1.3+F.ph*2))*H,on=Math.max(0,Math.sin(T*1.5+F.ph*3));if(on<.05)continue;
  var fr=H*(.01+.025*((F.y-.68)/.3)),fg=g.createRadialGradient(fx,fy,0,fx,fy,fr);fg.addColorStop(0,'rgba(200,255,140,'+on+')');fg.addColorStop(.35,'rgba(120,255,90,'+(on*.5)+')');fg.addColorStop(1,'rgba(80,255,60,0)');g.fillStyle=fg;g.fillRect(fx-fr,fy-fr,fr*2,fr*2)}
 g.globalCompositeOperation='source-over';
 c.font='11px Consolas,Menlo,monospace';c.textAlign='left';c.textBaseline='alphabetic';c.fillStyle='rgba(190,205,230,.8)';c.fillText('@ming.ascii',14,22);c.fillStyle='rgba(160,175,200,.7)';c.fillText('daisies '+DZ.length+'    moon '+(Math.sin(T*.2)>0?'full':'hiding')+'    fireflies '+FF.length,14,38);
 c.textAlign='right';c.fillStyle='rgba(255,180,80,.9)';c.fillText('t '+(T%60).toFixed(2)+'s',W-14,18);
 glow(.35)}
return{draw:draw,init:init}})();



/* ---- Phóng tên lửa (vẽ ảnh rồi đổi sang ký tự): bệ phóng → nghiêng bay → quỹ đạo → Trái Đất & Mặt Trăng → Hệ Mặt Trời → các vì sao → dải Ngân Hà ---- */
var RKT=(function(){
var ready=0,ST=[],PF=[],DUR=32;
function ss(a,b,x){return PXE.ss(a,b,x)}
/* nhiễu 3 chiều trên mặt cầu (không bị đường nối) cho lục địa và mây */
function hs(x,y,z){var s=Math.sin(x*127.1+y*311.7+z*74.7)*43758.5453;return s-Math.floor(s)}
function vn(x,y,z){var X=Math.floor(x),Y=Math.floor(y),Z=Math.floor(z),fx=x-X,fy=y-Y,fz=z-Z;fx=fx*fx*(3-2*fx);fy=fy*fy*(3-2*fy);fz=fz*fz*(3-2*fz);
 var l=function(a,b,c){return hs(X+a,Y+b,Z+c)};return((l(0,0,0)*(1-fx)+l(1,0,0)*fx)*(1-fy)+(l(0,1,0)*(1-fx)+l(1,1,0)*fx)*fy)*(1-fz)+((l(0,0,1)*(1-fx)+l(1,0,1)*fx)*(1-fy)+(l(0,1,1)*(1-fx)+l(1,1,1)*fx)*fy)*fz}
function fbm(x,y,z,o){var s=0,a=.5,f=1;for(var i=0;i<o;i++){s+=a*vn(x*f,y*f,z*f);f*=2.03;a*=.5}return s}
var TXH=null,TXC=null,TW=256,TH=128;
function tex(){TXH=new Float32Array(TW*TH);TXC=new Float32Array(TW*TH);for(var y=0;y<TH;y++)for(var x=0;x<TW;x++){var lo=x/TW*6.2832,la=(y/TH-.5)*Math.PI,px=Math.cos(la)*Math.sin(lo),py=Math.sin(la),pz=Math.cos(la)*Math.cos(lo);
 TXH[y*TW+x]=fbm(px*1.7+3,py*1.7+1,pz*1.7+7,5);TXC[y*TW+x]=fbm(px*3.2,py*4+2,pz*3.2+5,4)}}
function init(){var r=PXE.rng(41),i;ST=[];for(i=0;i<700;i++)ST.push([r(),r(),r(),r()]);PF=[];for(i=0;i<26;i++)PF.push([r(),r(),r(),r()]);ready=1}
function stars(g,dens,fo,spark){for(var i=0;i<ST.length;i++){var s=ST[i];if(s[3]>dens)continue;var b=s[2]*s[2];g.fillStyle='rgba(255,255,255,'+(fo*(.25+.75*b))+')';var z=1+b*2;g.fillRect(s[0]*W,s[1]*H,z,z)}
 if(spark)for(i=0;i<3;i++){var s2=ST[i*37],x=s2[0]*W,y=s2[1]*H*.8,L=H*.03*(.6+.4*Math.sin(Date.now()/400+i));g.fillStyle='rgba(255,255,255,'+fo+')';g.fillRect(x-L,y-.6,2*L,1.6);g.fillRect(x-.6,y-L,1.6,2*L)}}
function body(g,x,y,w,h,col,dark){/* trụ tròn: tô gradient ngang cho có khối, sáng bên trái */
 var gr=g.createLinearGradient(x-w/2,0,x+w/2,0);gr.addColorStop(0,dark);gr.addColorStop(.3,col);gr.addColorStop(.55,col);gr.addColorStop(1,dark);g.fillStyle=gr;g.fillRect(x-w/2,y-h,w,h)}
function rocket(g,s,t,flame,sep){/* vẽ ở gốc toạ độ: đáy thân tại (0,0), mũi hướng lên (âm y) */
 var w=s*.07,h=s*1.05;
 if(flame>0){var L=s*(.45+.06*Math.sin(t*33)+.04*Math.sin(t*51))*flame,fg=g.createLinearGradient(0,0,0,L);fg.addColorStop(0,'rgba(255,255,235,1)');fg.addColorStop(.2,'rgba(255,220,90,.95)');fg.addColorStop(.55,'rgba(255,120,30,.75)');fg.addColorStop(1,'rgba(200,40,10,0)');
  g.fillStyle=fg;g.beginPath();g.moveTo(-w*.45,0);g.quadraticCurveTo(-w*.9,L*.5,0,L);g.quadraticCurveTo(w*.9,L*.5,w*.45,0);g.fill();
  var gl=g.createRadialGradient(0,w*.3,0,0,w*.3,w*2.2);gl.addColorStop(0,'rgba(255,230,150,.9)');gl.addColorStop(1,'rgba(255,140,40,0)');g.fillStyle=gl;g.fillRect(-w*2.2,-w*1.9,w*4.4,w*4.4)}
 if(sep<1){var o=sep*sep*s*.5;g.save();g.globalAlpha=1-sep;[-1,1].forEach(function(sd){g.save();g.translate(sd*(w*.85+o*.4),o*.9);g.rotate(sd*sep*.5);body(g,0,0,w*.6,h*.62,'#eef0f4','#7a808c');g.fillStyle='#e8eaee';g.beginPath();g.moveTo(-w*.3,-h*.62);g.lineTo(0,-h*.72);g.lineTo(w*.3,-h*.62);g.fill();g.restore()});g.restore()}
 body(g,0,0,w,h,'#f4f5f8','#80869a');g.fillStyle='#d8263a';g.fillRect(-w/2,-h*.8,w,h*.05);g.fillStyle='#2a2e3a';g.fillRect(-w/2,-h*.32,w,h*.02);
 var ng=g.createLinearGradient(-w/2,0,w/2,0);ng.addColorStop(0,'#9aa0ae');ng.addColorStop(.35,'#ffffff');ng.addColorStop(1,'#80869a');g.fillStyle=ng;g.beginPath();g.moveTo(-w/2,-h);g.quadraticCurveTo(-w*.45,-h-w*1.6,0,-h-w*2.4);g.quadraticCurveTo(w*.45,-h-w*1.6,w/2,-h);g.fill();
 g.fillStyle='#d8263a';g.beginPath();g.moveTo(-w*.12,-h-w*2.05);g.lineTo(0,-h-w*2.4);g.lineTo(w*.12,-h-w*2.05);g.fill();g.fillStyle='#3a3e48';g.fillRect(-w*.42,0,w*.84,w*.35)}
function sphere(cx,cy,R,fn){IMA.pix(function(d,cols,rows,sx,sy){var x0=Math.max(0,Math.floor((cx-R)/sx)),x1=Math.min(cols-1,Math.ceil((cx+R)/sx)),y0=Math.max(0,Math.floor((cy-R)/sy)),y1=Math.min(rows-1,Math.ceil((cy+R)/sy));
 for(var y=y0;y<=y1;y++)for(var x=x0;x<=x1;x++){var nx=((x+.5)*sx-cx)/R,ny=((y+.5)*sy-cy)/R,q=nx*nx+ny*ny;if(q>1)continue;var nz=Math.sqrt(1-q),c3=fn(nx,ny,nz);if(!c3)continue;var k=(y*cols+x)*4;d[k]=c3[0];d[k+1]=c3[1];d[k+2]=c3[2];d[k+3]=255}})}
function hud(t,lab,info){c.font='11px Consolas,Menlo,monospace';c.textBaseline='alphabetic';c.textAlign='left';c.fillStyle='rgba(170,180,200,.75)';c.fillText('@ming.ascii',14,22);
 c.fillStyle='rgba(140,150,170,.7)';c.fillText(lab+'      '+info,14,38);c.textAlign='right';c.fillStyle='rgba(255,170,80,.85)';c.fillText('t '+t.toFixed(2)+'s',W-14,18)}
function draw(t0){if(!ready)init();var t=t0%DUR,lab='',info='',S=Math.min(W,H);
 IMA.frame(function(g){var i;
  /* 1. bệ phóng */
  if(t<5){var fo=1-ss(4.4,5,t),alt=t<1.4?0:Math.pow(t-1.4,2)*.12*H,cam=Math.max(0,alt-H*.12)*.92,ign=ss(.2,1.1,t);g.globalAlpha=fo;stars(g,.2,fo,0);
   g.save();g.translate(0,cam);
   g.fillStyle='#0c0f18';g.fillRect(0,H*.9,W,H*.1);
   g.strokeStyle='#2c3240';g.lineWidth=S*.006;var tx=W*.5-S*.13;for(i=0;i<14;i++){g.beginPath();g.moveTo(tx,H*.9-i*S*.05);g.lineTo(tx+S*.05,H*.9-(i+1)*S*.05);g.stroke()}g.fillStyle='#2c3240';g.fillRect(tx,H*.9-S*.7,S*.008,S*.7);g.fillRect(tx+S*.05,H*.9-S*.7,S*.008,S*.7);
   g.save();g.translate(W*.5,H*.9-alt);rocket(g,S*.62,t,ign*(t>.6?1:0),0);g.restore();
   /* khói cuộn: nhiều cụm tròn, phía dưới hắt lửa cam */
   for(i=0;i<PF.length;i++){var p=PF[i],gr=ss(p[3]*.6,p[3]*.6+1.3,t);if(gr<=0)continue;var px=W*.5+(p[0]-.5)*S*(.4+.35*t),py=H*.9-S*(.02+.1*p[1])-S*.02*t,R=S*(.06+.07*p[2])*(.4+.8*gr)*(1+.12*t),
     sg=g.createRadialGradient(px-R*.2,py-R*.3,R*.1,px,py,R);sg.addColorStop(0,'rgba('+(200+40*ign|0)+','+(110+40*ign|0)+',60,.95)');sg.addColorStop(.7,'rgba(160,70,30,.8)');sg.addColorStop(1,'rgba(90,40,20,0)');g.fillStyle=sg;g.beginPath();g.arc(px,py,R,0,6.2832);g.fill()}
   g.restore();g.globalAlpha=1;lab=t<1.4?'ignition':'lift-off';info='altitude '+(alt/H*8).toFixed(1)+' km   downrange 0 km'}
  /* 2. nghiêng bay lên, chân trời, tách tầng */
  if(t>4.6&&t<10.2){var f2=ss(4.6,5.2,t)*(1-ss(9.6,10.2,t)),u=(t-4.6)/5.6;g.globalAlpha=f2;stars(g,.35,f2,1);
   var hy=H*(.45-.25*ss(5,9.5,t));var hz=g.createLinearGradient(0,hy-4,0,hy+4);hz.addColorStop(0,'rgba(255,150,60,0)');hz.addColorStop(.5,u<.55?'rgba(255,170,80,.9)':'rgba(120,190,255,.9)');hz.addColorStop(1,'rgba(255,150,60,0)');g.fillStyle=hz;g.fillRect(0,hy-4,W,8);
   g.save();g.translate(W*(.35+.25*u),H*(.72-.25*u));g.rotate(.75+.25*ss(6,8,t));var sc=S*(.75-.45*u);
   var tr=g.createLinearGradient(0,0,0,sc*1.4);tr.addColorStop(0,'rgba(255,220,120,.85)');tr.addColorStop(1,'rgba(255,120,40,0)');g.fillStyle=tr;g.fillRect(-sc*.03,0,sc*.06,sc*1.4);
   rocket(g,sc,t,1,ss(7.2,8.6,t));g.restore();g.globalAlpha=1;lab=t<7.2?'lift-off':'second stage';info='altitude '+Math.round(5+u*u*400)+' km   downrange '+Math.round(u*u*380)+' km'}
  /* 3. quỹ đạo */
  if(t>9.6&&t<12){var f3=ss(9.6,10.2,t)*(1-ss(11.4,12,t));g.globalAlpha=f3;stars(g,.45,f3,1);var R3=W*3,cy3=H*.62+R3;
   var at=g.createRadialGradient(W/2,cy3,R3*.995,W/2,cy3,R3*1.02);at.addColorStop(0,'rgba(80,150,255,.9)');at.addColorStop(1,'rgba(80,150,255,0)');g.fillStyle=at;g.beginPath();g.arc(W/2,cy3,R3*1.02,0,6.2832);g.fill();
   g.fillStyle='#0a1a40';g.beginPath();g.arc(W/2,cy3,R3,0,6.2832);g.fill();
   var rx=W*(.3+.25*(t-9.6)/2.4),ry=H*.5,rg=g.createRadialGradient(rx,ry,0,rx,ry,S*.03);rg.addColorStop(0,'rgba(255,240,200,1)');rg.addColorStop(1,'rgba(255,160,60,0)');g.fillStyle=rg;g.fillRect(rx-S*.03,ry-S*.03,S*.06,S*.06);
   g.globalAlpha=1;lab='in orbit';info='altitude 420 km   downrange '+Math.round(600+(t-9.6)*300)+' km'}
  /* 4. Trái Đất + Mặt Trăng */
  if(t>11.4&&t<17.2){var f4=ss(11.4,12.2,t)*(1-ss(16.5,17.2,t)),v=ss(11.4,16.4,t),R4=S*(.95-.5*v),ex=W*(.95-.38*v),ey=H*.55,rot=t*.25;stars(g,.5,f4,1);
   var ha=g.createRadialGradient(ex,ey,R4*.95,ex,ey,R4*1.12);ha.addColorStop(0,'rgba(90,160,255,'+(.8*f4)+')');ha.addColorStop(1,'rgba(90,160,255,0)');g.fillStyle=ha;g.beginPath();g.arc(ex,ey,R4*1.12,0,6.2832);g.fill();
   if(!TXH)tex();sphere(ex,ey,R4,function(nx,ny,nz){var py=-ny,la=Math.asin(py),lo=Math.atan2(nx,nz)+rot,ux=((lo/6.2832)%1+1)%1,vy=Math.min(TH-1,Math.max(0,((la/Math.PI+.5)*TH)|0)),h=TXH[vy*TW+((ux*TW)|0)],cl=TXC[vy*TW+((((ux+t*.004)%1)*TW)|0)],
     col=Math.abs(py)>.93?[235,240,255]:h>.56?(h>.63?[205,170,95]:[55,155,70]):[18+30*h,70+60*h,200+40*h];var c2=Math.max(0,Math.min(1,(cl-.55)*5));
     col=[col[0]*(1-c2)+245*c2,col[1]*(1-c2)+248*c2,col[2]*(1-c2)+255*c2];
     var dif=Math.max(0,-.75*nx-.35*ny+.55*nz),k=(.1+.95*dif)*f4,spc=Math.pow(Math.max(0,-.4*nx-.2*ny+.9*nz),30)*(h>.56?0:.5)*(1-c2);return[Math.min(255,col[0]*k+255*spc*f4),Math.min(255,col[1]*k+255*spc*f4),Math.min(255,col[2]*k+255*spc*f4)]});
   var mo=ss(13,14.5,t)*f4;if(mo>0)sphere(W*.18,H*.2,S*.06,function(nx,ny,nz){var d=Math.max(0,-.7*nx-.3*ny+.6*nz),g2=(.2+.85*d)*(170+30*Math.sin(nx*9+ny*7))*mo;return[g2,g2,g2*1.03]});
   lab='in orbit';info='altitude 420 km   downrange '+Math.round(1100+(t-11.4)*320).toLocaleString('en-US')+' km'}
  /* 5. Hệ Mặt Trời */
  if(t>16.6&&t<24.5){var f5=ss(16.6,17.4,t)*(1-ss(23.6,24.5,t)),z5=ss(16.6,23.5,t),zs=1.25-.7*z5,sx=W*(.1+.4*z5),sy=H*(.92-.42*z5),sr=S*.2*zs;g.globalAlpha=f5;stars(g,.5,f5,0);
   var co=g.createRadialGradient(sx,sy,sr*.8,sx,sy,sr*1.6);co.addColorStop(0,'rgba(255,200,90,.6)');co.addColorStop(1,'rgba(255,140,40,0)');g.fillStyle=co;g.beginPath();g.arc(sx,sy,sr*1.6,0,6.2832);g.fill();
   var su=g.createRadialGradient(sx-sr*.15,sy-sr*.15,0,sx,sy,sr);su.addColorStop(0,'#ffffff');su.addColorStop(.45,'#fff3b0');su.addColorStop(.8,'#ffc040');su.addColorStop(1,'#ff8a20');g.fillStyle=su;g.beginPath();g.arc(sx,sy,sr,0,6.2832);g.fill();
   var PL=[[.32,.012,'#c8bdb0'],[.45,.018,'#ffd99a'],[.6,.019,'#4f8cff'],[.75,.015,'#ff6a3a'],[1.0,.045,'#ffb56a'],[1.28,.038,'#ffe09a'],[1.52,.028,'#9ae8ff'],[1.75,.027,'#5a7dff']];
   g.setLineDash([S*.006,S*.012]);g.lineWidth=Math.max(2,S*.005);for(i=0;i<PL.length;i++){var Ro=sr+PL[i][0]*S*.6*zs;g.strokeStyle='rgba(150,165,215,.8)';g.beginPath();g.ellipse(sx,sy,Ro,Ro*.62,0,0,6.2832);g.stroke()}g.setLineDash([]);
   for(i=0;i<PL.length;i++){var Ro2=sr+PL[i][0]*S*.6*zs,pa=-.6-i*.28+t*(.35/(i+1)),px2=sx+Math.cos(pa)*Ro2,py2=sy+Math.sin(pa)*Ro2*.62,pr=Math.max(2.5,PL[i][1]*S*zs*1.3),pg=g.createRadialGradient(px2-pr*.35,py2-pr*.35,0,px2,py2,pr);
    pg.addColorStop(0,'#ffffff');pg.addColorStop(.35,PL[i][2]);pg.addColorStop(1,'rgba(20,20,40,1)');g.fillStyle=pg;g.beginPath();g.arc(px2,py2,pr,0,6.2832);g.fill();
    if(i===5){g.strokeStyle='rgba(255,230,170,.9)';g.lineWidth=Math.max(1,pr*.25);g.beginPath();g.ellipse(px2,py2,pr*2.1,pr*.6,-.3,0,6.2832);g.stroke()}}
   g.globalAlpha=1;lab='the solar system';info=(z5<.5?Math.round(1e6+z5*3e7).toLocaleString('en-US')+' km':(z5*40).toFixed(1)+' AU')+' from home'}
  /* 6. các vì sao */
  if(t>23.8&&t<27.6){var f6=ss(23.8,24.5,t)*(1-ss(27,27.6,t)),k6=1-ss(23.8,25.8,t);g.globalAlpha=f6;stars(g,.5+.5*ss(24,27,t),f6,1);var cx6=W/2,cy6=H/2,r6=S*(.02+.12*k6);
   var sg6=g.createRadialGradient(cx6,cy6,0,cx6,cy6,r6*2);sg6.addColorStop(0,'rgba(255,250,230,1)');sg6.addColorStop(.3,'rgba(255,210,120,.8)');sg6.addColorStop(1,'rgba(255,160,60,0)');g.fillStyle=sg6;g.fillRect(cx6-r6*2,cy6-r6*2,r6*4,r6*4);
   g.fillStyle='rgba(255,255,255,'+f6+')';g.fillRect(cx6-S*.08,cy6-1,S*.16,2);g.fillRect(cx6-1,cy6-S*.08,2,S*.16);g.globalAlpha=1;lab='the stars';info=(1.3+(t-23.8)*300).toFixed(1)+' light-years from home'}
  /* 7. dải Ngân Hà: tô từng điểm theo hai nhánh xoắn ốc, lõi sáng, vệt bụi */
  if(t>27){var f7=ss(27,28.2,t)*(1-ss(31,31.9,t)),gr7=t*.08,tl=1.05,ct=Math.cos(tl),cr=Math.cos(-.5),sr7=Math.sin(-.5),GS=S*.9*(.92+.12*ss(27,31,t));stars(g,1,f7*.8,0);
   IMA.pix(function(d,cols,rows,sx7,sy7){for(var y=0;y<rows;y++)for(var x=0;x<cols;x++){var X=((x+.5)*sx7-W/2)/GS,Y=((y+.5)*sy7-H/2)/GS,xr=X*cr+Y*sr7,yr=(-X*sr7+Y*cr)/ct,r=Math.hypot(xr,yr);if(r>1.25)continue;
     var th=Math.atan2(yr,xr)-gr7,arm=0;for(var a=0;a<2;a++){var dth=((th-a*Math.PI-Math.log(r+.06)*2.6)%Math.PI+Math.PI*2)%Math.PI;dth=Math.min(dth,Math.PI-dth);arm=Math.max(arm,Math.exp(-dth*dth/(.09+.12*r)))}
     var core=Math.exp(-r*r/.035),dust=Math.exp(-Math.pow(((th-Math.log(r+.06)*2.6-.35)%Math.PI+Math.PI)%Math.PI-.0,2)/.01)*(r>.15&&r<.9?.7:0),fall=Math.max(0,1-r/1.25),
      n=.85+.3*Math.sin(x*12.9898+y*78.233)*Math.sin(x*3.1+y*1.7),bri=(core*1.5+arm*1.35*fall*n+.12*fall)*(1-.55*dust)*f7,mix=Math.min(1,r*2.2),
      R=((255*(1-mix)+95*mix)*(1-dust*.3)+dust*60)*bri,G=((236*(1-mix)+140*mix)*(1-dust*.3)+dust*30)*bri,B=((205*(1-mix)+255*mix)*(1-dust*.5))*bri,k=(y*cols+x)*4;
     d[k]=Math.min(255,d[k]+R);d[k+1]=Math.min(255,d[k+1]+G);d[k+2]=Math.min(255,d[k+2]+B)}});
   lab='the Milky Way';info=Math.round(26000+(t-27)*30000).toLocaleString('en-US')+' light-years from home'}
 });
 hud(t,lab,info);glow(.55)}
return{draw:draw,init:init}})();

function pick(){var q=(location.search.match(/[?&]asc=(\w+)/)||[])[1];if(q)return q;var d=new Date(),m=d.getMonth()+1,n=d.getDate();
 if(m===12&&n>=20&&n<=26)return'noel';return'tim'}
var LIST=[['tim','Trái tim'],['noel','Giáng sinh'],['lo','Hố đen'],['mat','Con mắt'],['bloom','Hoa nở'],['bfly','Bướm'],['rosa','Hoa hồng'],['rkt','Tên lửa'],['field','Cánh đồng']];
function scene(k){
 return{field:{r:FIELD.draw,init:FIELD.init,still:12},rkt:{r:RKT.draw,init:RKT.init,still:14},rosa:{r:ROSA.draw,init:ROSA.init,still:30},bloom:{r:BLOOM.draw,init:BLOOM.init,still:9},bfly:{r:BFLY.draw,init:BFLY.init,still:9.5},lo:{r:BHX.draw,init:BHX.init,still:12},mat:{r:EYE.draw,init:EYE.init,still:10},tim:{r:heartDraw,init:heartInit,still:30},noel:{gl:'noel',glm:{part:1,bg:1},r:SNOWX.draw,init:SNOWX.init,still:7}}[k]||0}
function M(x,y,z){D=1e9;var ox=x*CA+z*SA,oz=z*CA-x*SA;OX=ox;OY=y;OZ=oz;RR=Math.sqrt(ox*ox+oz*oz);if(S.pol)AN=Math.atan2(oz,ox);if(!S.ng)u(Math.max(y,RR-3.4),0);S.m(ox,y,oz);return D}
function trace(sx,sy,fy,fz,T,cy,cd){
 var dx=sx*T,dy=fy+sy*T*fz,dz=fz-sy*T*fy,q=1/Math.sqrt(dx*dx+dy*dy+dz*dz);dx*=q;dy*=q;dz*=q;
 var ox=-BD[0],oy=cy-BD[1],oz=-cd-BD[2],bb=ox*dx+oy*dy+oz*dz,dc=bb*bb-(ox*ox+oy*oy+oz*oz-BD[3]*BD[3]);if(dc<0)return 0;dc=Math.sqrt(dc);
 var tt=Math.max(0,-bb-dc),te=-bb+dc,n=0,d;
 for(;n<34;n++){d=M(dx*tt,cy+dy*tt,-cd+dz*tt);if(d<.014)break;tt+=d;if(tt>te)return 0}
 if(n>=34)return 0;
 var px=dx*tt,py=cy+dy*tt,pz=-cd+dz*tt;M(px,py,pz);S.c(MT,OX,OY,OZ);
 var e=.01,d1=M(px+e,py-e,pz-e),d2=M(px-e,py-e,pz+e),d3=M(px-e,py+e,pz-e),d4=M(px+e,py+e,pz+e),
  nx=d1-d2-d3+d4,ny=-d1-d2+d3+d4,nz=-d1+d2-d3+d4,nl=Math.sqrt(nx*nx+ny*ny+nz*nz)||1;nx/=nl;ny/=nl;nz/=nl;
 var dif=Math.max(0,nx*LX+ny*LY+nz*LZ),res=1,k;
 if(dif>0){var st=.05,a=px+nx*.03,f=py+ny*.03,g=pz+nz*.03;for(k=0;k<14;k++){var h=M(a+LX*st,f+LY*st,g+LZ*st);if(h<.002){res=0;break}res=Math.min(res,8*h/st);st+=h;if(st>7)break}}
 var ao=1;if(MT)for(k=1;k<3;k++){var hh=.13*k;ao-=Math.max(0,hh-M(px+nx*hh,py+ny*hh,pz+nz*hh))*1.6/(1+k)}ao=Math.max(.3,ao);
 var hx=LX-dx,hy=LY-dy,hz=LZ-dz,hl=Math.sqrt(hx*hx+hy*hy+hz*hz)||1,sp=Math.pow(Math.max(0,(nx*hx+ny*hy+nz*hz)/hl),30)*.4,
  rim=Math.pow(1-Math.max(0,-(nx*dx+ny*dy+nz*dz)),3)*.3,
  lum=ME?1:Math.min(1,((.15+.08*ny)*ao+.85*dif*res)*MB+(sp*res+rim)*ao);
 DL=MT?lum:lum*.55;CL='hsl('+MH+','+(MS*.75|0)+'%,'+(8+lum*62|0)+'%)';return 1}
function draw(t){if(!S)return;if(GLX.on&&S.gl){GLX.frame(t);return}
 if(S.r){S.r(t);return}
 if(S.gbg){c.fillStyle='#05070a';c.fillRect(0,0,W,H);var g2=c.createRadialGradient(W/2,H*.5,0,W/2,H*.5,H*.75);g2.addColorStop(0,S.gbg);g2.addColorStop(1,'rgba(5,7,10,0)');c.fillStyle=g2;c.fillRect(0,0,W,H)}
 if(!S.gbg){c.fillStyle='#05070a';c.fillRect(0,0,W,H)}c.font='700 '+fs+'px ui-monospace,Consolas,monospace';c.textBaseline='middle';c.textAlign='center';
 if(S.pre)S.pre(t);var a=S.spin(t);CA=Math.cos(a);SA=Math.sin(a);
 var cm=S.cam,cy=cm[0],cd=cm[1],ty=cm[2],l=Math.hypot(ty-cy,cd),fy=(ty-cy)/l,fz=cd/l,Zs=Math.max(1,.8/(W/H)),T=.42*Zs;
 BD=S.bd?S.bd():[0,1.5,0,4];TYS=-1;
 if(S.thr){var py=3.95+GY-cy,fw2=py*fy+cd*fz,up=py*fz-cd*fy;TYS=H/2-up/(fw2*T)*(H/2)/Zs}
 for(var j=0;j<rows;j++){var yc=j*fs+fs/2,sy=(H/2-yc)/(H/2)*Zs;for(var i=0;i<cols;i++){var xc=i*cw+cw/2;
  var hit=trace((xc-W/2)/(H/2)*Zs,sy,fy,fz,T,cy,cd);if(!hit){if(TYS>0&&yc<TYS&&Math.abs(xc-W/2)<cw*.5){c.fillStyle='hsl(210,15%,55%)';c.beginPath();c.arc(xc,yc,cw*.16,0,6.2832);c.fill();continue}if(!(S.bg&&S.bg(i,j,t,xc,yc)))continue}
  c.fillStyle=CL;if(hit){c.beginPath();c.arc(xc,yc,cw*.5*(.14+.88*DL),0,6.2832);c.fill()}else c.fillText(CH,xc,yc)}}}
var ema=24,fb=0,fr=0;
function grid(f){fs=f;cw=f;cols=Math.ceil(W/cw);rows=Math.ceil(H/fs)}
/* máy yếu thì tự thưa ô chữ lại, máy khỏe thì mịn lại */
function loop(ts){raf=requestAnimationFrame(loop);if(!S)return;var isgl=GLX.on&&S&&S.gl;if(ts-last<(isgl?32:42))return;var dt=ts-last;last=ts;var a=performance.now();draw((ts-t0)/1000);if(isgl){GLX.tune(dt);return}if(S.r)return;if(fr++<5)return;ema=ema*.8+(performance.now()-a)*.2;if(ema>34&&fs<fb*2.4){grid(fs*1.12);ema=26;fr=-40}else if(ema<19&&fs>fb*1.01){grid(Math.max(fb,fs/1.1));ema=26;fr=-40}}
function show(k){cur=scene(k)?k:'tim';S=scene(cur);var g=false;if(S.gl&&gcv){g=GLX.start(gcv);if(g){GLX.setup();g=GLX.use(S.gl,S.glm)}}if(!g&&S.fb){cur=S.fb;S=scene(cur)}GLX.on=g;cv.style.visibility=g?'hidden':'visible';gcv.style.display=g?'block':'none';if(!g&&S.init)S.init();t0=performance.now();var tq=(location.search.match(/[?&]asct=([0-9.]+)/)||[])[1];if(tq)t0-=tq*1000;[].forEach.call(o.querySelectorAll('.pk button'),function(x){x.classList.toggle('on',x.dataset.k===cur)});if(reduce)draw(S.still||1.5)}
function open(){if(!o){o=document.createElement('div');o.id='aso';o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');o.setAttribute('aria-label','Tranh ASCII 3D');
 o.innerHTML='<canvas></canvas><canvas class="gl" style="position:absolute;left:0;top:0;display:none"></canvas><div class="pk"></div><button type="button" class="x" aria-label="Đóng">×</button><p>Bấm bất kỳ đâu hoặc Esc để đóng</p>';document.body.appendChild(o);cv=o.querySelector('canvas');gcv=o.querySelector('canvas.gl');c=cv.getContext('2d');o.addEventListener('click',close);
 var pk=o.querySelector('.pk');pk.hidden=!PICK;pk.addEventListener('click',function(e){e.stopPropagation()});
 LIST.forEach(function(l){var x=document.createElement('button');x.type='button';x.dataset.k=l[0];x.textContent=l[1];x.addEventListener('click',function(){show(l[0])});pk.appendChild(x)})}
 W=cv.width=innerWidth;H=cv.height=innerHeight;fb=Math.max(H/125,W/230);grid(fb);ema=24;fr=0;
 reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 o.hidden=false;document.documentElement.style.overflow='hidden';o.querySelector('.x').focus();addEventListener('keydown',esc);document.addEventListener('visibilitychange',vis);
 /* khung đen hiện trước, rồi mới dựng cảnh ở khung kế để lúc bấm không bị khựng */
 requestAnimationFrame(function(){requestAnimationFrame(function(){if(!o)return;show(pick());if(!reduce)raf=requestAnimationFrame(loop)})})}
function esc(e){if(e.key==='Escape')close()}
function vis(){cancelAnimationFrame(raf);if(!document.hidden&&!reduce)raf=requestAnimationFrame(loop)}
/* đóng là gỡ hẳn: dừng vòng vẽ, bỏ sự kiện, xoá khung và canvas khỏi bộ nhớ */
function close(){if(!o)return;cancelAnimationFrame(raf);raf=0;removeEventListener('keydown',esc);document.removeEventListener('visibilitychange',vis);GLX.dispose();o.remove();o=cv=gcv=c=S=GC=GX=null;document.documentElement.style.overflow='';if(b)b.focus()}
window.__ascOpen=open;
/* làm nóng lúc rảnh: biên dịch sẵn shader cảnh mặc định trên khung 64x64 rồi bỏ ngay (trình duyệt giữ bản đã dịch), lúc bấm nút khỏi bị khựng. Không giữ gì lại trong bộ nhớ. */
window.__ascWarm=function(){if(o||window.__ascWarmed)return;window.__ascWarmed=1;try{var s=scene(pick());if(!s||!s.gl)return;var w=W,h=H,cx=document.createElement('canvas');cx.width=cx.height=64;
 if(GLX.start(cx)){W=H=64;GLX.setup();if(GLX.use(s.gl,s.glm))GLX.frame(0);GLX.dispose()}W=w;H=h}catch(e){try{GLX.dispose()}catch(x){}}};
})();
