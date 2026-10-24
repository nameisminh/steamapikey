/* ảnh khung avatar lấy từ CDN của Discord; bật chuyển động thì dùng bản động, tắt hiệu ứng thì dùng bản tĩnh */
(function(){var d=document.querySelector('.avdec');if(!d)return;
var B='https://cdn.discordapp.com/avatar-decoration-presets/a_94febf08c37b21ee5ed92c49ef98bf00.png?size=240',R=document.documentElement;
function calm(){return (window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)||R.getAttribute('data-motion')==='off'}
function set(){var u=B+'&passthrough='+(calm()?'false':'true');if(d.getAttribute('src')!==u)d.src=u}
set();if(window.MutationObserver)new MutationObserver(set).observe(R,{attributes:true,attributeFilter:['data-motion']});
})();