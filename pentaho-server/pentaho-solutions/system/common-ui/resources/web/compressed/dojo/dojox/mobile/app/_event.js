dojo.provide("dojox.mobile.app._event"),dojo.experimental("dojox.mobile.app._event.js"),
dojo.mixin(dojox.mobile.app,{eventMap:{},connectFlick:function(o,e,n){var t,i,a,c,d,s,u,r,p=!1,l=(dojo.connect("onmousedown",o,function(e){
p=!1,t=e.targetTouches?e.targetTouches[0].clientX:e.clientX,i=e.targetTouches?e.targetTouches[0].clientY:e.clientY,
r=(new Date).getTime(),d=dojo.connect(o,"onmousemove",l),s=dojo.connect(o,"onmouseup",j);
}),function(o){dojo.stopEvent(o),a=o.targetTouches?o.targetTouches[0].clientX:o.clientX,
c=o.targetTouches?o.targetTouches[0].clientY:o.clientY,Math.abs(Math.abs(a)-Math.abs(t))>15?(p=!0,
u=a>t?"ltr":"rtl"):Math.abs(Math.abs(c)-Math.abs(i))>15&&(p=!0,u=c>i?"ttb":"btt");
}),j=function(t){if(dojo.stopEvent(t),d&&dojo.disconnect(d),s&&dojo.disconnect(s),
p){var i={target:o,direction:u,duration:(new Date).getTime()-r};e&&n?e[n](i):n(i);
}}}}),dojox.mobile.app.isIPhone=dojo.isSafari&&(navigator.userAgent.indexOf("iPhone")>-1||navigator.userAgent.indexOf("iPod")>-1),
dojox.mobile.app.isWebOS=navigator.userAgent.indexOf("webOS")>-1,dojox.mobile.app.isAndroid=navigator.userAgent.toLowerCase().indexOf("android")>-1,
(dojox.mobile.app.isIPhone||dojox.mobile.app.isAndroid)&&(dojox.mobile.app.eventMap={
onmousedown:"ontouchstart",mousedown:"ontouchstart",onmouseup:"ontouchend",mouseup:"ontouchend",
onmousemove:"ontouchmove",mousemove:"ontouchmove"}),dojo._oldConnect=dojo._connect,
dojo._connect=function(o,e,n,t,i){if(e=dojox.mobile.app.eventMap[e]||e,"flick"==e||"onflick"==e){
if(!dojo.global.Mojo)return dojox.mobile.app.connectFlick(o,n,t);e=Mojo.Event.flick;
}return dojo._oldConnect(o,e,n,t,i)};