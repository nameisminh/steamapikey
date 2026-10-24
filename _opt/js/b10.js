(function(){
/* đo khung hình sau khi tải: máy giật (dưới ~38 khung/giây hai đợt liền) thì tự tắt hiệu ứng. Ai đã tự bật lại hiệu ứng thì không đụng tới */
var r=document.documentElement;
if(r.getAttribute('data-motion')==='off'||!window.requestAnimationFrame)return;
try{if(localStorage.getItem('motion')==='on')return}catch(e){}
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var t=0,n=0,sum=0,bad=0,w=0;
function frame(ts){
  if(document.hidden){t=0;requestAnimationFrame(frame);return}
  if(t){var d=ts-t;if(d<250){sum+=d;n++}}
  t=ts;
  if(n>=90){
    bad=(1000/(sum/n))<38?bad+1:0;n=0;sum=0;w++;
    if(bad>=2){try{localStorage.setItem('motion','auto')}catch(e){}r.setAttribute('data-motion','off');setTimeout(function(){location.reload()},300);return}
    if(w>=6)return;
  }
  requestAnimationFrame(frame);
}
addEventListener('load',function(){setTimeout(function(){requestAnimationFrame(frame)},2500)});
})();