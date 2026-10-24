(function(){
/* GSAP + ScrollTrigger: chia bài ở #play, mở bản đồ ở #map, parallax ảnh ở #hobby (chỉ chạy trên máy có chuột; điện thoại và máy tính bảng không nạp GSAP, không chạy hiệu ứng nào, để cuộn nhẹ nhất).
   Chỉ nạp GSAP khi không ở chế độ lite, không tắt hiệu ứng và không bật giảm chuyển động. Đổi phiên bản ở BASE nếu cần. */
var R=document.documentElement,BASE='https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/',mm=null;
function calm(){return R.classList.contains('lite')||R.getAttribute('data-motion')==='off'||matchMedia('(prefers-reduced-motion: reduce)').matches}
var DESK='(hover:hover) and (pointer:fine) and (min-width:40.01rem)';
if(calm()||!matchMedia(DESK).matches)return;
function on(){
  if(mm||!window.gsap||!window.ScrollTrigger)return;
  gsap.registerPlugin(ScrollTrigger);ScrollTrigger.config({ignoreMobileResize:true});
  mm=gsap.matchMedia();
  mm.add(DESK,function(){
    var hand=document.getElementById('gamehand');
    if(hand)gsap.fromTo(hand,{'--deal':0},{'--deal':1,ease:'power2.out',scrollTrigger:{trigger:hand,start:'top 92%',end:'top 40%',scrub:.6}});
    /* parallax ảnh ở #hobby */
    gsap.utils.toArray('.hob .ph img').forEach(function(im){
      var h=im.closest('.hob');if(!h)return;
      gsap.set(im,{'--pz':1});
      gsap.fromTo(im,{'--py':-8},{'--py':8,ease:'none',scrollTrigger:{trigger:h,start:'top bottom',end:'bottom top',scrub:true}});
    });
    /* khung bản đồ mở ra rồi kéo camera lùi */
    var mf=document.querySelector('.mapfr');
    if(mf)gsap.fromTo(mf,{'--rev':0},{'--rev':1,ease:'power2.out',scrollTrigger:{trigger:mf,start:'top 98%',end:'top 38%',scrub:.6}});
  });
}
function off(){if(mm){mm.revert();mm=null}}
function load(f,cb){var s=document.createElement('script');s.src=BASE+f;s.onload=cb;document.head.appendChild(s)}
/* nạp lười: chỉ tải GSAP khi người xem cuộn gần tới một khối cần nó (cách 1200px) */
var loaded=false;
function boot(){if(loaded)return;loaded=true;load('gsap.min.js',function(){load('ScrollTrigger.min.js',function(){if(!calm())on()})})}
var tg=['#play','#hobby','.mapfr'].map(function(q){return document.querySelector(q)}).filter(Boolean);
if('IntersectionObserver' in window&&tg.length){
  var io=new IntersectionObserver(function(es){if(es.some(function(e){return e.isIntersecting})){io.disconnect();boot()}},{rootMargin:'1200px 0px'});
  tg.forEach(function(t){io.observe(t)});
}else boot();
new MutationObserver(function(){if(calm())off();else on()}).observe(R,{attributes:true,attributeFilter:['data-motion']});
/* làm mới vị trí một lần sau khi tải xong */
function rf(){if(window.ScrollTrigger)ScrollTrigger.refresh()}
addEventListener('load',function(){setTimeout(rf,300)});
addEventListener('hashchange',function(){setTimeout(rf,400)});
})();