/* Tranh ASCII 3D theo ngày. File này chỉ được tải khi bấm nút ở chân trang (xem đoạn nhỏ trong index.html): vật thể dựng bằng hình khối, có ánh sáng, đổ bóng, tối góc và viền sáng; mỗi ô chữ lấy độ sáng của điểm trên vật. Chỉ dựng khi bấm, đóng là dừng hẳn. Xem thử: thêm ?asc=sn | noel | tet | hoa vào địa chỉ trang */
(function(){var b=document.getElementById('asb');
var BM=11,BD=8; /* ngày sinh: tháng, ngày */
var PICK=true; /* true: hiện các nút chọn hình để xem thử; đổi thành false để ẩn đi */
var o,cv,c,raf=0,t0=0,last=0,S,cur,W,H,fs,cw,cols,rows,CH,CL,DL=0,reduce=false;
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
 for(i=0;i<P.length;i++)for(k=0;k<2;k++)for(s=1;s<=5;s++){h=s/5;var ax=P[i][k][0],ay=P[i][k][1],bx=P[i][k+1][0],by=P[i][k+1][1],n=i*10+k*5+s;
  TB.push([ax+(bx-ax)*h+(hash(n,1)-.5)*.35,ay+(by-ay)*h+(hash(n,2)-.5)*.3,(hash(n,3)-.5)*.5,.17+.08*hash(n,4)])}})();
var LT=[[-1.9,3.2,.55],[1.9,2.9,.6]];
function mTet(x,y,z){
 var i,q,dx,dy,dz,dd,r,a,k,L,b;
 var tb=Math.sqrt(x*x+(y-2.2)*(y-2.2)+z*z);
 if(tb>2.7)u(tb-2.6,2);else{
 u(cyl(x,y,z,0,.35,0,.55,.35)-.03,1);u(tor(x,y,z,0,.7,0,.55,.05),5);
 u(cap(x,y,z,0,.7,0,.1,1.5,0,.1),2);u(cap(x,y,z,.1,1.5,0,-.2,2.2,0,.085),2);
 u(cap(x,y,z,.1,1.5,0,.9,2.1,.1,.065),2);u(cap(x,y,z,.9,2.1,.1,1.35,2.95,0,.05),2);u(cap(x,y,z,.9,2.1,.1,1.5,2,0,.045),2);u(cap(x,y,z,1.5,2,0,1.9,2.4,0,.04),2);
 u(cap(x,y,z,-.2,2.2,0,-.9,2.7,.1,.06),2);u(cap(x,y,z,-.9,2.7,.1,-1.25,3.45,0,.045),2);u(cap(x,y,z,-.2,2.2,0,.3,3,-.1,.055),2);u(cap(x,y,z,.3,3,-.1,.15,3.65,0,.04),2);
 for(i=0;i<TB.length;i++){q=TB[i];dx=x-q[0];dy=y-q[1];dz=z-q[2];r=q[3];dd=Math.sqrt(dx*dx+dy*dy+dz*dz);
  if(dd>r*1.5)u(dd-r*1.3,3);else{a=Math.atan2(dz,dx);u(dd-r*(1+.18*Math.cos(5*a+6*dy/r)),3)}}}
 u(box(x,y,z,-1.45,.28,-1,.4,.28,.4,.05),4);u(box(x,y,z,-1.45,.28,-1,.03,.3,.42,.01),6);u(box(x,y,z,-1.45,.28,-1,.42,.3,.03,.01),6);u(box(x,y,z,-1.45,.28,-1,.42,.03,.42,.01),6);
 u(box(x,y,z,-2.05,.24,-.45,.34,.24,.34,.05),4);u(box(x,y,z,-2.05,.24,-.45,.03,.26,.36,.01),6);u(box(x,y,z,-2.05,.24,-.45,.36,.26,.03,.01),6);
 u(box(x,y,z,1.5,.55,-.8,.28,.5,.03,.03),7);u(ell(x-1.5,y-.7,z+.84,.14,.14,.03),5);u(box(x,y,z,1.95,.5,-.45,.26,.46,.03,.03),7);u(ell(x-1.95,y-.62,z+.49,.13,.13,.03),5);
 for(k=0;k<2;k++){L=LT[k];b=ell(x-L[0],y-L[1],z,L[2]*.8,L[2]*.95,L[2]*.8);if(b<.3)b-=.025*(.5+.5*Math.cos(Math.atan2(z,x-L[0])*12));
  u(b,8);u(cyl(x,y,z,L[0],L[1]+L[2]*.95,0,.2,.05),5);u(cyl(x,y,z,L[0],L[1]-L[2]*.95,0,.2,.05),5);u(cyl(x,y,z,L[0],L[1]+L[2]*.95+.6,0,.012,.6),5);
  u(cyl(x,y,z,L[0],L[1]-L[2]*.95-.3,0,.04,.28),5);u(sph(x,y,z,L[0],L[1]-L[2]*.95-.65,0,.09),5)}}
function cTet(m,x,y,z){MS=80;MB=1;ME=0;
 if(m===0){MH=5;MS=40;MB=chk(x,z,.3,.16)}else if(m===1){MH=8;MS=70;MB=.95}else if(m===2){MH=25;MS=45;MB=.6}
 else if(m===3){MH=335+hash(Math.floor(x*5),Math.floor(y*5))*22;MS=65;MB=1.25}else if(m===4){MH=125;MS=45;MB=.85}
 else if(m===5){MH=46;MS=90;MB=1.2}else if(m===6){MH=62;MS=55;MB=1.1}else if(m===7){MH=355;MS=85}
 else{MH=2;MB=(Math.floor(Math.atan2(z,x-(x<0?-1.9:1.9))*5/Math.PI)&1)?1:.8}}
function petal(i,j,t){var h=hash(i*3,j-Math.floor(t*(4+i%3)));if(h>.011)return 0;return put(h<.005?'•':'·',hs(335+h*5000%25|0,72))}
function tet(d){try{var mo,da;new Intl.DateTimeFormat('en-u-ca-chinese',{month:'numeric',day:'numeric'}).formatToParts(d).forEach(function(x){if(x.type==='month')mo=x.value;if(x.type==='day')da=+x.value});return mo==='1'&&da<=5}catch(e){return false}}
function pick(){var q=(location.search.match(/[?&]asc=(\w+)/)||[])[1];if(q)return q;var d=new Date(),m=d.getMonth()+1,n=d.getDate();
 if(m===BM&&n===BD)return'sn';if(m===3&&n===8)return'hoa';if(m===12&&n>=20&&n<=26)return'noel';if(tet(d))return'tet';return'hoa'}
var LIST=[['sn','Bánh kem'],['hoa','Hoa'],['noel','Giáng sinh'],['tet','Tết']];
function scene(k){var sw=function(t){return Math.sin(t*.6)*.55};
 return{hoa:{m:mFlow,c:cFlow,ng:1,pol:1,thr:1,bd:function(){return[0,2.4+GY,0,2.5]},cam:[3.2,7.2,2.5],spin:sw,pre:function(t){var e=Math.min(1,t/4);e=1-Math.pow(1-e,3);GY=(1-e)*3.4+Math.sin(t*.9)*.05;var f=Math.min(1,Math.max(0,(t-.8)/4));BL=.3+.7*(1-Math.pow(1-f,3))}},
 sn:{m:mCake,c:cCake,pol:1,cam:[3.2,7.6,1.2],spin:function(t){return t*.5},bg:function(i,j,t){return fall(i,j,t,0)}},
 noel:{m:mNoel,c:cNoel,cam:[3.2,8.5,1.5],spin:function(t){return t*.45},bg:function(i,j,t){return fall(i,j,t,1)}},
 tet:{m:mTet,c:cTet,cam:[3.2,7.4,2.1],spin:function(t){return Math.sin(t*.7)*.45},bg:function(i,j,t,xc,yc){return petal(i,j,t)}}}[k]||0}
function M(x,y,z){D=1e9;var ox=x*CA+z*SA,oz=z*CA-x*SA;OX=ox;OY=y;OZ=oz;RR=Math.sqrt(ox*ox+oz*oz);if(S.pol)AN=Math.atan2(oz,ox);if(!S.ng)u(Math.max(y,RR-3.4),0);S.m(ox,y,oz);return D}
function trace(sx,sy,fy,fz,T,cy,cd){
 var dx=sx*T,dy=fy+sy*T*fz,dz=fz-sy*T*fy,q=1/Math.sqrt(dx*dx+dy*dy+dz*dz);dx*=q;dy*=q;dz*=q;
 var ox=-BD[0],oy=cy-BD[1],oz=-cd-BD[2],bb=ox*dx+oy*dy+oz*dz,dc=bb*bb-(ox*ox+oy*oy+oz*oz-BD[3]*BD[3]);if(dc<0)return 0;dc=Math.sqrt(dc);
 var tt=Math.max(0,-bb-dc),te=-bb+dc,n=0,d;
 for(;n<40;n++){d=M(dx*tt,cy+dy*tt,-cd+dz*tt);if(d<.01)break;tt+=d;if(tt>te)return 0}
 if(n>=40)return 0;
 var px=dx*tt,py=cy+dy*tt,pz=-cd+dz*tt;M(px,py,pz);S.c(MT,OX,OY,OZ);
 var e=.01,d1=M(px+e,py-e,pz-e),d2=M(px-e,py-e,pz+e),d3=M(px-e,py+e,pz-e),d4=M(px+e,py+e,pz+e),
  nx=d1-d2-d3+d4,ny=-d1-d2+d3+d4,nz=-d1+d2-d3+d4,nl=Math.sqrt(nx*nx+ny*ny+nz*nz)||1;nx/=nl;ny/=nl;nz/=nl;
 var dif=Math.max(0,nx*LX+ny*LY+nz*LZ),res=1,k;
 if(dif>0){var st=.05,a=px+nx*.03,f=py+ny*.03,g=pz+nz*.03;for(k=0;k<20;k++){var h=M(a+LX*st,f+LY*st,g+LZ*st);if(h<.002){res=0;break}res=Math.min(res,8*h/st);st+=h;if(st>7)break}}
 var ao=1;if(MT)for(k=1;k<3;k++){var hh=.13*k;ao-=Math.max(0,hh-M(px+nx*hh,py+ny*hh,pz+nz*hh))*1.6/(1+k)}ao=Math.max(.3,ao);
 var hx=LX-dx,hy=LY-dy,hz=LZ-dz,hl=Math.sqrt(hx*hx+hy*hy+hz*hz)||1,sp=Math.pow(Math.max(0,(nx*hx+ny*hy+nz*hz)/hl),30)*.4,
  rim=Math.pow(1-Math.max(0,-(nx*dx+ny*dy+nz*dz)),3)*.3,
  lum=ME?1:Math.min(1,((.15+.08*ny)*ao+.85*dif*res)*MB+(sp*res+rim)*ao);
 DL=MT?lum:lum*.55;CL='hsl('+MH+','+(MS*.75|0)+'%,'+(8+lum*62|0)+'%)';return 1}
function draw(t){c.fillStyle='#05070a';c.fillRect(0,0,W,H);c.font='700 '+fs+'px ui-monospace,Consolas,monospace';c.textBaseline='middle';c.textAlign='center';
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
function loop(ts){raf=requestAnimationFrame(loop);if(ts-last<42)return;last=ts;var a=performance.now();draw((ts-t0)/1000);if(fr++<5)return;ema=ema*.8+(performance.now()-a)*.2;if(ema>34&&fs<fb*2.4){grid(fs*1.12);ema=26}else if(ema<19&&fs>fb*1.01){grid(Math.max(fb,fs/1.1));ema=26}}
function show(k){cur=scene(k)?k:'hoa';S=scene(cur);t0=performance.now();[].forEach.call(o.querySelectorAll('.pk button'),function(x){x.classList.toggle('on',x.dataset.k===cur)});if(reduce)draw(1.5)}
function open(){if(!o){o=document.createElement('div');o.id='aso';o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');o.setAttribute('aria-label','Tranh ASCII 3D');
 o.innerHTML='<canvas></canvas><div class="pk"></div><button type="button" class="x" aria-label="Đóng">×</button><p>Bấm bất kỳ đâu hoặc Esc để đóng</p>';document.body.appendChild(o);cv=o.querySelector('canvas');c=cv.getContext('2d');o.addEventListener('click',close);
 var pk=o.querySelector('.pk');pk.hidden=!PICK;pk.addEventListener('click',function(e){e.stopPropagation()});
 LIST.forEach(function(l){var x=document.createElement('button');x.type='button';x.dataset.k=l[0];x.textContent=l[1];x.addEventListener('click',function(){show(l[0])});pk.appendChild(x)})}
 W=cv.width=innerWidth;H=cv.height=innerHeight;fb=Math.max(H/125,W/230);grid(fb);ema=24;fr=0;
 reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 o.hidden=false;document.documentElement.style.overflow='hidden';o.querySelector('.x').focus();show(pick());
 addEventListener('keydown',esc);document.addEventListener('visibilitychange',vis);if(!reduce)raf=requestAnimationFrame(loop)}
function esc(e){if(e.key==='Escape')close()}
function vis(){cancelAnimationFrame(raf);if(!document.hidden&&!reduce)raf=requestAnimationFrame(loop)}
/* đóng là gỡ hẳn: dừng vòng vẽ, bỏ sự kiện, xoá khung và canvas khỏi bộ nhớ */
function close(){if(!o)return;cancelAnimationFrame(raf);raf=0;removeEventListener('keydown',esc);document.removeEventListener('visibilitychange',vis);o.remove();o=cv=c=S=null;document.documentElement.style.overflow='';if(b)b.focus()}
window.__ascOpen=open;
})();
