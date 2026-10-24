
/* Tự chọn ngôn ngữ lần đầu vào: tiếng Việt nếu trình duyệt đặt tiếng Việt hoặc múi giờ ở Việt Nam, còn lại là tiếng Anh.
   Dùng múi giờ và ngôn ngữ trình duyệt nên không gửi địa chỉ IP của ai tới dịch vụ nào. Người xem đã bấm nút VI·EN thì giữ lựa chọn đó. */
window.__autoLang=function(){
  try{var sv=localStorage.getItem('lang');if(sv==='en'||sv==='vi')return sv}catch(e){}
  var tz='',ls=[];
  try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||''}catch(e){}
  try{ls=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'']}catch(e){}
  return (/^Asia\/(Ho_Chi_Minh|Saigon)$/.test(tz)||/^vi/i.test(ls[0]||''))?'vi':'en';
};
(function(){
  var l=window.__autoLang();document.documentElement.lang=l;
  if(l!=='en')return;
  /* dịch màn chào ngay, và ghi lại bản gốc để nút VI·EN vẫn đổi về tiếng Việt được */
  var D={'Đang tải trang của Ming':'Loading Ming’s page','Vào trang, có nhạc':'Enter with music','Vào trang, không nhạc':'Enter without music'};
  var pre=document.querySelector('.pre');if(!pre)return;
  var w=document.createTreeWalker(pre,NodeFilter.SHOW_TEXT),n;
  while((n=w.nextNode())){var t=n.nodeValue.trim();if(D[t]){n.__o=n.nodeValue;n.nodeValue=n.nodeValue.replace(t,D[t]);n.__c=n.nodeValue}}
})();
