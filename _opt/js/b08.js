(function(){var bar=document.querySelector('.bar');if(!bar)return;
var mq=matchMedia('(min-width:80rem)'),on=false,tk=false;
function hold(){if(on)return;bar.style.minHeight='';if(mq.matches)bar.style.minHeight=bar.offsetHeight+'px'}
function t(){tk=false;var y=window.scrollY||0,w=mq.matches&&(on?y>60:y>160);if(w!==on){on=w;bar.classList.toggle('mini',on)}}
function q(){if(!tk){tk=true;requestAnimationFrame(t)}}
addEventListener('scroll',q,{passive:true});
addEventListener('resize',function(){if(!mq.matches&&on){on=false;bar.classList.remove('mini')}hold();q()});
addEventListener('load',hold);hold();t();})();