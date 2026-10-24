(function(){
/* theo dõi lướt: thêm class "scrolling" lúc đang lướt, và ẩn thanh trên khi lướt xuống trên điện thoại */
var root=document.documentElement,bar=document.querySelector('.bar'),idle=0,idle2=0,last=window.scrollY||0,tk=0,mq=matchMedia('(max-width:40rem)');
function step(){
  tk=0;var y=window.scrollY||0,d=y-last;
  if(Math.abs(d)>2){root.classList.add('scrolling','scrolling2');clearTimeout(idle);clearTimeout(idle2);
    idle=setTimeout(function(){root.classList.remove('scrolling')},1000);
    idle2=setTimeout(function(){root.classList.remove('scrolling2')},3000)}
  if(bar){
    if(!mq.matches||y<80||d<-6)bar.classList.remove('hide');
    else if(y>140&&d>6)bar.classList.add('hide');
  }
  last=y;
}
addEventListener('scroll',function(){if(!tk)tk=requestAnimationFrame(step)},{passive:true});
})();