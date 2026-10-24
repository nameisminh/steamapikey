(function(){
var view=document.getElementById('view'),stop=false;
['wheel','touchstart','keydown','mousedown'].forEach(function(t){addEventListener(t,function(){stop=true},{passive:true})});
function calm(){return matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.getAttribute('data-motion')==='off'}
function off(){var b=document.querySelector('.bar');return (b?b.offsetHeight:0)+4}
/* cuộn tới mục rồi tự chỉnh lại nếu ảnh/hiệu ứng làm trang dịch chỗ trong lúc cuộn */
function land(el,smooth){
  var n=0;stop=false;
  function y(){return Math.max(0,el.getBoundingClientRect().top+scrollY-off())}
  function fix(){if(stop||n++>5)return;if(Math.abs(el.getBoundingClientRect().top-off())>6){scrollTo({top:y(),behavior:'instant'});setTimeout(fix,220)}}
  scrollTo({top:y(),behavior:smooth?'smooth':'instant'});
  setTimeout(fix,smooth?750:100);
}
document.addEventListener('click',function(e){
  if(e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a||!view||!view.hidden)return;
  var h=a.getAttribute('href');if(h.length<2||h.charAt(1)==='/')return;
  var el=document.getElementById(h.slice(1));if(!el)return;
  e.preventDefault();if(location.hash!==h)history.pushState(null,'',h);
  land(el,!calm());
});
addEventListener('hashchange',function(){
  var h=location.hash;if(h.length<2||h.charAt(1)==='/')return;
  setTimeout(function(){if(view&&view.hidden){var el=document.getElementById(h.slice(1));if(el)land(el,false)}},60);
});
})();