define(["dojo/_base/array","dojo/_base/config","dojo/_base/connect","dojo/_base/lang","dojo/_base/window","dojo/_base/kernel","dojo/dom-class","dojo/dom-construct","dojo/domReady","dojo/ready","dojo/touch","dijit/registry","./sniff","./uacss"],function(e,i,t,n,o,d,r,a,l,s,c,u,m){
var h=n.getObject("dojox.mobile",!0);if(o.doc.dojoClick=!0,m("touch")&&(m.add("clicks-prevented",!(m("android")>=4.1||10===m("ie")||!m("ie")&&m("trident")>6)),
m("clicks-prevented")&&(h._sendClick=function(e,i){for(var t=e;t;t=t.parentNode)if(t.dojoClick)return;
var n=o.doc.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,o.global,1,i.screenX,i.screenY,i.clientX,i.clientY),
e.dispatchEvent(n)})),h.getScreenSize=function(){return{h:o.global.innerHeight||o.doc.documentElement.clientHeight,
w:o.global.innerWidth||o.doc.documentElement.clientWidth}},h.updateOrient=function(){
var e=h.getScreenSize();r.replace(o.doc.documentElement,e.h>e.w?"dj_portrait":"dj_landscape",e.h>e.w?"dj_landscape":"dj_portrait");
},h.updateOrient(),h.tabletSize=500,h.detectScreenSize=function(e){var i,n,d=h.getScreenSize(),a=Math.min(d.w,d.h);
a>=h.tabletSize&&(e||!this._sz||this._sz<h.tabletSize)?(i="phone",n="tablet"):a<h.tabletSize&&(e||!this._sz||this._sz>=h.tabletSize)&&(i="tablet",
n="phone"),n&&(r.replace(o.doc.documentElement,"dj_"+n,"dj_"+i),t.publish("/dojox/mobile/screenSize/"+n,[d])),
this._sz=a},h.detectScreenSize(),h.hideAddressBarWait="number"==typeof i.mblHideAddressBarWait?i.mblHideAddressBarWait:1500,
h.hide_1=function(){scrollTo(0,1),h._hidingTimer=0==h._hidingTimer?200:2*h._hidingTimer,
setTimeout(function(){h.isAddressBarHidden()||h._hidingTimer>h.hideAddressBarWait?(h.resizeAll(),
h._hiding=!1):setTimeout(h.hide_1,h._hidingTimer)},50)},h.hideAddressBar=function(e){
if(!h.disableHideAddressBar&&!h._hiding){h._hiding=!0,h._hidingTimer=m("ios")?200:0;
var i=screen.availHeight;m("android")&&(i=outerHeight/devicePixelRatio,0==i&&(h._hiding=!1,
setTimeout(function(){h.hideAddressBar()},200)),i<=innerHeight&&(i=outerHeight),m("android")<3&&(o.doc.documentElement.style.overflow=o.body().style.overflow="visible")),
o.body().offsetHeight<i&&(o.body().style.minHeight=i+"px",h._resetMinHeight=!0),setTimeout(h.hide_1,h._hidingTimer);
}},h.isAddressBarHidden=function(){return 1===pageYOffset},h.resizeAll=function(i,n){
if(!h.disableResizeAll){t.publish("/dojox/mobile/resizeAll",[i,n]),t.publish("/dojox/mobile/beforeResizeAll",[i,n]),
h._resetMinHeight&&(o.body().style.minHeight=h.getScreenSize().h+"px"),h.updateOrient(),
h.detectScreenSize();var d=function(e){var i=e.getParent&&e.getParent();return!(i&&i.resize||!e.resize);
},r=function(i){e.forEach(i.getChildren(),function(e){d(e)&&e.resize(),r(e)})};n?(n.resize&&n.resize(),
r(n)):e.forEach(e.filter(u.toArray(),d),function(e){e.resize()}),t.publish("/dojox/mobile/afterResizeAll",[i,n]);
}},h.openWindow=function(e,i){o.global.open(e,i||"_blank")},h._detectWindowsTheme=function(){
navigator.userAgent.match(/IEMobile\/10\.0/)&&a.create("style",{innerHTML:"@-ms-viewport {width: auto !important}"
},o.doc.head);var e=function(){r.add(o.doc.documentElement,"windows_theme"),d.experimental("Dojo Mobile Windows theme","Behavior and appearance of the Windows theme are experimental.");
},i=m("windows-theme");if(void 0!==i)return void(i&&e());var t,n,l=function(i){return i&&-1!==i.indexOf("/windows/")?(m.add("windows-theme",!0),
e(),!0):!1},s=o.doc.styleSheets;for(t=0;t<s.length;t++)if(!s[t].href){var c=s[t].cssRules||s[t].imports;
if(c)for(n=0;n<c.length;n++)if(l(c[n].href))return}var u=o.doc.getElementsByTagName("link");
for(t=0;t<u.length;t++)if(l(u[t].href))return},i.mblApplyPageStyles!==!1&&r.add(o.doc.documentElement,"mobile"),
m("chrome")&&r.add(o.doc.documentElement,"dj_chrome"),o.global._no_dojo_dm){var b=o.global._no_dojo_dm;
for(var f in b)h[f]=b[f];h.deviceTheme.setDm(h)}return m.add("mblAndroidWorkaround",i.mblAndroidWorkaround!==!1&&m("android")<3,void 0,!0),
m.add("mblAndroid3Workaround",i.mblAndroid3Workaround!==!1&&m("android")>=3,void 0,!0),
h._detectWindowsTheme(),l(function(){r.add(o.body(),"mblBackground")}),s(function(){
h.detectScreenSize(!0),i.mblAndroidWorkaroundButtonStyle!==!1&&m("android")&&a.create("style",{
innerHTML:"BUTTON,INPUT[type='button'],INPUT[type='submit'],INPUT[type='reset'],INPUT[type='file']::-webkit-file-upload-button{-webkit-appearance:none;} audio::-webkit-media-controls-play-button,video::-webkit-media-controls-play-button{-webkit-appearance:media-play-button;} video::-webkit-media-controls-fullscreen-button{-webkit-appearance:media-fullscreen-button;}"
},o.doc.head,"first"),m("mblAndroidWorkaround")&&a.create("style",{innerHTML:".mblView.mblAndroidWorkaround{position:absolute;top:-9999px !important;left:-9999px !important;}"
},o.doc.head,"last");var e=h.resizeAll,n=-1!=navigator.appVersion.indexOf("Mobile")&&!(m("ios")>=7);
(i.mblHideAddressBar!==!1&&n||i.mblForceHideAddressBar===!0)&&(h.hideAddressBar(),
i.mblAlwaysHideAddressBar===!0&&(e=h.hideAddressBar));var d=m("ios")>=6;if((m("android")||d)&&void 0!==o.global.onorientationchange){
var r,l,s,c=e;d?(l=o.doc.documentElement.clientWidth,s=o.doc.documentElement.clientHeight):(e=function(e){
var i=t.connect(null,"onresize",null,function(e){t.disconnect(i),c(e)})},r=h.getScreenSize()),
t.connect(null,"onresize",null,function(e){if(d){var i=o.doc.documentElement.clientWidth,t=o.doc.documentElement.clientHeight;
i==l&&t!=s&&c(e),l=i,s=t}else{var n=h.getScreenSize();n.w==r.w&&Math.abs(n.h-r.h)>=100&&c(e),
r=n}})}t.connect(null,void 0!==o.global.onorientationchange?"onorientationchange":"onresize",null,e),
o.body().style.visibility="visible"}),h});