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
var LV=['I love you','Ich liebe dich','Te amo','Je t\'aime','Ti amo','Eu te amo','Seni seviyorum','Anh yêu em','Aku cinta kamu','Kocham cię','Ik hou van jou','Jag älskar dig','Jeg elsker deg','Rakastan sinua','Szeretlek','Te iubesc','Miluji tě','Mahal kita','Σ\'αγαπώ','Я тебя люблю','愛してる','사랑해','我爱你','Te quiero','Volim te','Mīlu tevi','Aš tave myliu','Armastan sind','Ya te yubi','Ndiyakuthanda','Nakupenda','Ek is lief vir jou','Mo nifẹ rẹ','Ana behibak','Ami tomake bhalobashi','Main tumse pyar karta hoon'],HW=[];
function hin(nx,ny){var a=nx*nx+ny*ny-1;return a*a*a-nx*nx*ny*ny*ny<=0}
function heartInit(){
 HW=[];var hh=Math.min(H*.78,W*.9),Sx=hh/2.35,cx=W/2,cy=H/2,fsz=Math.max(10,hh*.036),lh=fsz*1.3,top=cy-1.17*Sx,bot=cy+1.17*Sx,i,y,x,w,n=0,rowN=0;
 c.font='600 '+fsz+'px system-ui,Arial,sans-serif';c.textAlign='center';c.textBaseline='middle';
 function ins(px,py){return hin((px-cx)/Sx,.075-(py-cy)/Sx)}
 for(y=top+lh*.6;y<bot-lh*.3;y+=lh,rowN++){
  var seg=[],a=null,step=Sx/160;
  for(x=cx-1.2*Sx;x<=cx+1.2*Sx;x+=step){var ok=ins(x,y)&&ins(x,y-lh*.42)&&ins(x,y+lh*.42);if(ok&&a===null)a=x;if(!ok&&a!==null){seg.push([a,x]);a=null}}
  if(a!==null)seg.push([a,cx+1.2*Sx]);
  seg.forEach(function(sg){var pad=fsz*.5,avail=sg[1]-sg[0]-2*pad;if(avail<fsz*4)return;
   var ws=[],sum=0,gmin=fsz*.7,tries=0;
   while(tries++<40){var s=LV[Math.floor(hash(n*7+tries+rowN*131,21)*LV.length)],ww=c.measureText(s).width;if(sum+ww+(ws.length)*gmin>avail){if(ws.length&&sum+(ws.length-1)*gmin>avail*.8)break;continue}ws.push([s,ww]);sum+=ww;if(sum+ws.length*gmin>avail*.97)break}
   if(!ws.length)return;var gap=ws.length>1?Math.min(fsz*2.2,(avail-sum)/(ws.length-1)):0,px=ws.length>1?sg[0]+pad:(sg[0]+sg[1])/2-ws[0][1]/2;
   for(i=0;i<ws.length;i++){var cxw=px+ws[i][1]/2,nx=(cxw-cx)/Sx,ny=.075-(y-cy)/Sx,edge=(i===0||i===ws.length-1)||rowN<2||y>bot-lh*2.5,ang=Math.atan2(ny-.075,nx),a01=(((ang+Math.PI/2)%6.2832)+6.2832)%6.2832/6.2832,dn=Math.hypot(nx,ny-.075);
    HW.push([ws[i][0],cxw,y,fsz,50+14*(1-Math.min(1,dn))+hash(n,22)*6,edge?a01*5.5:5.5+hash(n,23)*6.5]);n++;px+=ws[i][1]+gap}})}}
function heartDraw(t){
 var T=t%26,pul=1+.012*Math.sin(t*2.2),fo=T>21?1-(T-21)/3.5:1,i,q,a,cx=W/2,cy=H/2;
 c.fillStyle='#05070a';c.fillRect(0,0,W,H);c.textAlign='center';c.textBaseline='middle';
 if(fo<=0)return;
 for(i=0;i<HW.length;i++){q=HW[i];a=Math.min(1,(T-q[5])/.8);if(a<=0)continue;a*=fo;
  c.font='600 '+(q[3]*pul).toFixed(1)+'px system-ui,Arial,sans-serif';c.fillStyle='hsla(355,88%,'+(q[4]|0)+'%,'+a.toFixed(2)+')';c.fillText(q[0],cx+(q[1]-cx)*pul,cy+(q[2]-cy)*pul)}
 glow(.45)}
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
SC.dai="#define LD vec3(-.7,.62,-.35)\nconst vec3 CAM=vec3(3.4,8.4,3.4);\nfloat spin(float t){return sin(t*.25)*.12;}\nconst int FNT[196]=int[196](0,0,0,0,0,0,0,14,17,17,31,17,17,17,30,17,17,30,17,17,30,14,17,16,16,16,17,14,30,17,17,17,17,17,30,31,16,16,30,16,16,31,31,16,16,30,16,16,16,14,17,16,23,17,17,15,17,17,17,31,17,17,17,14,4,4,4,4,4,14,7,2,2,2,2,18,12,17,18,20,24,20,18,17,16,16,16,16,16,16,31,17,27,21,21,17,17,17,17,25,21,19,17,17,17,14,17,17,17,17,17,14,30,17,17,30,16,16,16,14,17,17,17,21,18,13,30,17,17,30,20,18,17,15,16,16,14,1,1,30,31,4,4,4,4,4,4,17,17,17,17,17,17,14,17,17,17,17,17,10,4,17,17,17,21,21,27,17,17,17,10,4,10,17,17,17,17,10,4,4,4,4,31,1,2,4,8,16,31,0,0,0,0,0,12,12);\nbool gpx(int ch,int cc,int r){return ((FNT[ch*7+r]>>(4-cc))&1)==1;}\n\nconst int tc_la[8]=int[8](12,15,22,5,19,0,13,5);\nbool t_la(int gx,int gy){if(gy<0||gy>6||gx<0||gx>=47)return false;int ch=gx/6;int cc=gx-ch*6;if(cc>4)return false;return gpx(tc_la[ch],cc,gy);}\n\nconst int tc_lb[12]=int[12](12,15,22,5,19,0,13,5,0,14,15,20);\nbool t_lb(int gx,int gy){if(gy<0||gy>6||gx<0||gx>=71)return false;int ch=gx/6;int cc=gx-ch*6;if(cc>4)return false;return gpx(tc_lb[ch],cc,gy);}\n\nfloat sdHeart(vec2 p){p.x=abs(p.x);if(p.y+p.x>1.)return sqrt(dot(p-vec2(.25,.75),p-vec2(.25,.75)))-.35355339;\n return sqrt(min(dot(p-vec2(0.,1.),p-vec2(0.,1.)),dot(p-.5*max(p.x+p.y,0.),p-.5*max(p.x+p.y,0.))))*sign(p.x-p.y);}\nfloat hrt(vec3 p,vec3 c,float s){vec2 xy=(p.xy-c.xy)/s+vec2(0.,.5);float d=sdHeart(xy)*s;vec2 w=vec2(d,abs(p.z-c.z)-.18*s);return min(max(w.x,w.y),0.)+length(max(w,0.))-.03*s;}\nvec3 rxp(vec3 p,float a){float c=cos(a),s=sin(a);return vec3(p.x,p.y*c+p.z*s,-p.y*s+p.z*c);}\nvec3 ryp(vec3 p,float a){float c=cos(a),s=sin(a);return vec3(p.x*c+p.z*s,p.y,-p.x*s+p.z*c);}\nvoid frm(out vec3 n,out vec3 ux,out vec3 uy){n=normalize(vec3(.22,.14,-1.));ux=normalize(cross(vec3(0.,1.,0.),n));uy=cross(n,ux);}\nvec3 toL(vec3 d){vec3 n,ux,uy;frm(n,ux,uy);return vec3(dot(d,ux),dot(d,uy),dot(d,n));}\nfloat leaf(vec3 q,vec3 c,float a,vec3 r){vec3 d=q-c;float ca=cos(a),sa=sin(a);d.xy=vec2(d.x*ca+d.y*sa,-d.x*sa+d.y*ca);return ell(d,r);}\nfloat scn(vec3 q){\n float T=mod(uT,34.);float sc=min(ease(T/.9),1.-ss(32.5,33.6,T));\n vec3 F=vec3(0.,3.5,0.);\n u(q.y,0.);\n if(q.y<.95&&abs(q.x)<12.&&q.z<-3.6&&q.z>-9.){vec2 g=floor(q.xz*3.2);float h=h21(g);vec2 c=(g+.5+.3*(vec2(h21(g+7.),h21(g+3.))-.5))/3.2;float bh=.1+.22*h21(g+1.3);float ln=sin(uT*1.3+h*20.)*.12;\n  vec3 pp=vec3(q.x-ln*q.y,q.y,q.z);u(cone2(pp,vec3(c.x,0.,c.y),0.,.08,bh),6.);}\n u(ell(q-vec3(-5.,.6,11.),vec3(9.,4.5,3.)),1.);u(ell(q-vec3(8.,.3,13.),vec3(12.,5.5,3.5)),1.);u(ell(q-vec3(0.,-.4,17.),vec3(17.,5.,3.)),2.);\n u(sph(q,vec3(6.5,7.2,15.),1.15),3.);\n u(cap(q,vec3(0.,0.,.1),vec3(.1,1.3,0.),.1),6.);u(cap(q,vec3(.1,1.3,0.),vec3(-.12,2.6,.05),.09),6.);u(cap(q,vec3(-.12,2.6,.05),F-vec3(0.,.15,0.),.085),6.);\n u(leaf(q,vec3(.62,1.0,0.),-.55,vec3(.62,.09,.26)),6.);u(leaf(q,vec3(-.6,1.75,.02),.5,vec3(.55,.08,.24)),6.);\n vec3 n,ux,uy;frm(n,ux,uy);\n vec3 dl=toL(q-F);u(ell(dl-vec3(0.,0.,.06),vec3(.52,.52,.3))-.012*sin(dl.x*38.)*sin(dl.y*38.),5.);\n if(sc>.03){\n  for(int k=0;k<11;k++){float fk=float(k);float a=fk*.5711987;float ca=cos(a),sa=sin(a);\n   float tf=1.6+fk*2.1;float s=clamp((T-tf)/7.,0.,1.);\n   vec3 P0=F+(ux*ca+uy*sa)*1.05;vec3 Pc=P0;float th=0.;float yw=0.;\n   if(s>0.){float h1=h11(fk+1.7),h2=h11(fk+9.3);vec3 G=vec3(P0.x*1.5+(h1-.5)*3.,.07,-.3-2.4*h2);\n    float e=s*s*(3.-2.*s);float sw=sin(s*3.14159)*(1.-s*.5);\n    Pc=vec3(mix(P0.x,G.x,e)+sin(s*8.+fk)*.5*sw,mix(P0.y,G.y,pow(s,1.45))+.12*sin(s*14.+fk)*sw,mix(P0.z,G.z,e)+sin(s*6.+fk*2.)*.5*sw);\n    th=min(1.43,s*3.)+.5*sin(s*13.+fk)*sw;yw=h1*6.28*s;}\n   vec3 d=q-Pc;if(length(d)>1.5){u(length(d)-.85,4.);continue;}\n   d=ryp(rxp(d,th),-yw);vec3 l=toL(d);vec3 pl=vec3(l.x*ca+l.y*sa,-l.x*sa+l.y*ca,l.z);pl.z+=.14*pl.x*pl.x;\n   u(ell(pl,vec3(.72,.2,.055)*sc),4.);}\n  for(int j=0;j<6;j++){float fj=float(j);float s=(T-24.6-fj*1.)/6.;if(s<=0.||s>=1.)continue;\n   vec3 hp=F+vec3(sin(fj*2.1+s*3.)*.7,.3+s*3.8,-.3-.3*sin(fj));u(hrt(q,hp,(.3+.06*fj)*(1.-ss(.75,1.,s))*sc),7.);}}\n {float n=clamp(floor((T-1.6)/2.1)+1.,0.,11.);\n  if(n>.5&&T<33.){bool nt=mod(n,2.)<.5;float tfn=1.6+(n-1.)*2.1;float sx=ease((T-tfn)/.3)*sc;const float CT=.095;\n   float bd=length(max(abs(q-vec3(0.,5.95,0.))-vec3(3.6,.5,.15),0.));\n   if(bd>.2){u(bd-.15,8.);}else if(sx>.02){float cols=nt?71.:47.;int gx0=int(floor(q.x/CT+cols*.5));int gy0=int(floor((6.3-q.y)/CT));\n    for(int i=-1;i<=1;i++)for(int j=-1;j<=1;j++){int gx=gx0+i,gy=gy0+j;bool on=nt?t_lb(gx,gy):t_la(gx,gy);if(!on)continue;\n     vec3 c=vec3((float(gx)+.5-cols*.5)*CT,6.3-(float(gy)+.5)*CT,0.);u(box(q,c,vec3(CT*.46*sx,CT*.46*sx,.045*sx),.012*sx),8.);}}}}\n return gD;}\nvec4 matc(float m,vec3 q){\n if(m<.5)return vec4(150.,45.,.28+.08*h21(floor(q.xz*3.)),0.);\n if(m<1.5)return vec4(245.,50.,.5,0.);if(m<2.5)return vec4(255.,45.,.4,0.);\n if(m<3.5)return vec4(52.,55.,1.,1.);\n if(m<4.5)return vec4(205.,25.,1.4,0.);\n if(m<5.5){vec3 l=toL(q-vec3(0.,3.5,0.));float c=mod(floor(l.x*13.)+floor(l.y*13.),2.);return vec4(c>.5?24.:34.,95.,c>.5?1.15:.9,0.);}\n if(m<6.5)return vec4(122.,60.,.75+.35*h21(floor(q.xz*3.2)),0.);\n if(m<7.5)return vec4(345.,85.,1.2,1.);\n float n=clamp(floor((mod(uT,34.)-1.6)/2.1)+1.,0.,11.);return mod(n,2.)<.5?vec4(212.,80.,1.1,1.):vec4(338.,75.,1.15,1.);}\n";
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
function pick(){var q=(location.search.match(/[?&]asc=(w+)/)||[])[1];if(q)return q;var d=new Date(),m=d.getMonth()+1,n=d.getDate();
 if(m===12&&n>=20&&n<=26)return'noel';return'dai'}
var LIST=[['dai','Hoa cúc'],['noel','Giáng sinh'],['lo','Hố đen'],['mat','Con mắt'],['tim','Trái tim']];
function scene(k){
 return{lo:{r:BHX.draw,init:BHX.init,still:12},mat:{r:EYE.draw,init:EYE.init,still:10},tim:{r:heartDraw,init:heartInit,still:30},dai:{gl:'dai',glm:{bg:4},fb:'noel'},noel:{gl:'noel',glm:{part:1,bg:1},r:SNOWX.draw,init:SNOWX.init,still:7}}[k]||0}
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
function draw(t){if(GLX.on&&S.gl){GLX.frame(t);return}
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
function loop(ts){raf=requestAnimationFrame(loop);var isgl=GLX.on&&S&&S.gl;if(ts-last<(isgl?32:42))return;var dt=ts-last;last=ts;var a=performance.now();draw((ts-t0)/1000);if(isgl){GLX.tune(dt);return}if(S.r)return;if(fr++<5)return;ema=ema*.8+(performance.now()-a)*.2;if(ema>34&&fs<fb*2.4){grid(fs*1.12);ema=26;fr=-40}else if(ema<19&&fs>fb*1.01){grid(Math.max(fb,fs/1.1));ema=26;fr=-40}}
function show(k){cur=scene(k)?k:'dai';S=scene(cur);var g=false;if(S.gl&&gcv){g=GLX.start(gcv);if(g){GLX.setup();g=GLX.use(S.gl,S.glm)}}if(!g&&S.fb){cur=S.fb;S=scene(cur)}GLX.on=g;cv.style.visibility=g?'hidden':'visible';gcv.style.display=g?'block':'none';if(!g&&S.init)S.init();t0=performance.now();[].forEach.call(o.querySelectorAll('.pk button'),function(x){x.classList.toggle('on',x.dataset.k===cur)});if(reduce)draw(S.still||1.5)}
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
})();
