(function(){
  if(!('IntersectionObserver' in window))return;
  var SEL='.gsk,.avf,.dot,.avatar.on,.eq,.band .run,.bob,.caret,.ptitle b',seen=new WeakSet();
  var io=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle('pz',!e.isIntersecting)})},{rootMargin:'80px'});
  function scan(){document.querySelectorAll(SEL).forEach(function(n){if(!seen.has(n)){seen.add(n);io.observe(n)}})}
  scan();addEventListener('load',function(){scan();setTimeout(scan,1500)});
  addEventListener('hashchange',function(){setTimeout(scan,150)});
  document.addEventListener('langchange',function(){setTimeout(scan,150)});
})();