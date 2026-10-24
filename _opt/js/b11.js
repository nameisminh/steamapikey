(function(){
/* bộ đếm FPS: bấm nút tròn FPS hoặc phím F. Chỉ chạy vòng đo khi đang bật */
var b=document.getElementById('fpsb'),on=false,raf=0,t0=0,n=0;
if(!b)return;
function paint(fps,ms){b.setAttribute('data-c',fps>=50?'g':fps>=30?'y':'r');b.innerHTML='<b>'+fps+'</b><small>FPS</small>';b.title=ms+' ms / khung · F'}
function frame(ts){
  if(!on)return;
  if(document.hidden||!t0){t0=ts;n=0}
  else{n++;if(ts-t0>=500){paint(Math.round(n*1000/(ts-t0)),((ts-t0)/n).toFixed(1));t0=ts;n=0}}
  raf=requestAnimationFrame(frame);
}
function set(v,save){
  on=v;b.setAttribute('aria-pressed',v?'true':'false');cancelAnimationFrame(raf);
  if(v){t0=0;n=0;b.innerHTML='<b>…</b>';raf=requestAnimationFrame(frame)}
  else{b.removeAttribute('data-c');b.innerHTML='<b>FPS</b>';b.title='Hiện hoặc ẩn FPS (F)'}
  if(save){try{localStorage.setItem('fps',v?'1':'0')}catch(e){}}
}
var nt=document.getElementById('fpsn'),ntm=0;
function note(v){if(!nt)return;clearTimeout(ntm);nt.hidden=!v;if(v)ntm=setTimeout(function(){nt.hidden=true},9000)}
b.addEventListener('click',function(){set(!on,true);note(on)});
document.addEventListener('click',function(e){if(nt&&!nt.hidden&&!nt.contains(e.target)&&!b.contains(e.target))note(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')note(false)});
document.addEventListener('keydown',function(e){
  if(e.metaKey||e.ctrlKey||e.altKey||e.repeat)return;
  var tg=e.target;if(tg&&(tg.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(tg.tagName)))return;
  if((e.key||'').toLowerCase()==='f')set(!on,true);
});
/* mặc định TỰ BẬT; chỉ tắt khi người xem đã tự tắt trước đó (lưu '0') */
try{if(localStorage.getItem('fps')!=='0')set(true,false)}catch(e){set(true,false)}
})();