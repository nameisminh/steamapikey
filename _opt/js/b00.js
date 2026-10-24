/* GIỚI HẠN FPS: mọi hiệu ứng chạy bằng JavaScript (requestAnimationFrame) được giữ tối đa khoảng FPS_CAP khung hình mỗi giây.
   Cách làm: bỏ bớt khung hình thừa trên màn hình có tần số quét cao (120Hz, 144Hz, 240Hz đều về trung bình 60). Màn hình 60Hz trở xuống không bị ảnh hưởng.
   Cuộn trang và hiệu ứng CSS do trình duyệt tự vẽ nên vẫn theo tần số quét của màn hình. Đổi số ở dòng dưới nếu muốn. */
window.FPS_CAP=60;(function(){var real=window.requestAnimationFrame,realC=window.cancelAnimationFrame;if(!real)return;
var STEP=1000/window.FPS_CAP,next=0,q=[],m={},sched=0,nid=0;
function run(ts){sched=0;
  if(ts<next-1){sched=real.call(window,run);return}
  next=(next===0||ts-next>STEP)?ts+STEP:next+STEP;var cur=q;q=[];
  for(var i=0;i<cur.length;i++){var it=cur[i];if(it.c)continue;delete m[it.id];try{it.f(ts)}catch(e){(function(e){setTimeout(function(){throw e})})(e)}}
  if(q.length&&!sched)sched=real.call(window,run);
}
window.requestAnimationFrame=function(f){var it={f:f,c:false,id:++nid};q.push(it);m[it.id]=it;if(!sched)sched=real.call(window,run);return it.id};
window.cancelAnimationFrame=function(id){var it=m[id];if(it){it.c=true;delete m[id]}else if(realC)realC.call(window,id)};
})();