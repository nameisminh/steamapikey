(function(){
/* COMBO: bấm chuột, chạm hoặc gõ phím bất kỳ thì hiện chữ COMBO và đếm. Từ 10 trở đi đổi dần theo số, tối đa 9999.
   Tối ưu: kỷ lục giữ trong bộ nhớ và chỉ ghi localStorage khi hết combo hoặc rời trang (trước đây ghi/đọc mỗi lần bấm);
   thanh đếm ngược dùng Web Animations thay vì ép trình duyệt tính lại bố cục mỗi lần bấm; chỉ đổi chữ nhãn khi thật sự đổi bậc. */
var MAX=9999,IDLE=1500,el=document.getElementById('cmb');if(!el)return;
var cl=el.querySelector('.cl'),cn=el.querySelector('.cn'),ct=el.querySelector('.ct'),root=document.documentElement;
var n=0,tm=0,on=true,bestV=0,dirty=false,lab='',bar=null,lg=Math.log(MAX/9);
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
function end(){el.classList.remove('on');n=0;lab='';save();ping()}
function ping(){document.dispatchEvent(new Event('combo'))}
function hit(){
  if(!on)return;
  if(n<MAX)n++;
  var t=look();cn.textContent=n;
  var L=label();if(L!==lab){lab=L;cl.textContent=L}
  el.classList.add('on');
  if(n>bestV){bestV=n;dirty=true}
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