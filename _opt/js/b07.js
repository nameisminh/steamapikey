(function(){var b=document.getElementById('totop');if(!b)return;
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var rp=document.getElementById('rp'),tk=false;
function t(){var y=window.scrollY||0;b.classList.toggle('show',y>600);if(rp){var h=document.documentElement.scrollHeight-innerHeight;rp.style.transform='scaleX('+(h>0?Math.min(1,y/h):0)+')'}tk=false}
function q(){if(!tk){tk=true;requestAnimationFrame(t)}}
addEventListener('scroll',q,{passive:true});addEventListener('resize',q);t();
b.addEventListener('click',function(){window.scrollTo({top:0,behavior:rm?'auto':'smooth'})});})();