define(["./_base/config","./_base/lang","./sniff","./dom","./dom-construct","./_base/window","require"],function(o,n,r,t,e,a,i){
function l(){var o=H.pop();if(o){var n=H[H.length-1];n||0!=H.length||(n=y),n&&(n.kwArgs.back?n.kwArgs.back():n.kwArgs.backButton?n.kwArgs.backButton():n.kwArgs.handle&&n.kwArgs.handle("back")),
A.push(o)}}function d(){var o=A.pop();o&&(o.kwArgs.forward?o.kwArgs.forward():o.kwArgs.forwardButton?o.kwArgs.forwardButton():o.kwArgs.handle&&o.kwArgs.handle("forward"),
H.push(o))}function s(o,n,r){return{url:o,kwArgs:n,urlHash:r}}function u(o){var n=o.split("?");
return n.length<2?null:n[1]}function h(){var n=(o.dojoIframeHistoryUrl||i.toUrl("./resources/iframe_history.html"))+"?"+(new Date).getTime();
return _=!0,j&&(r("webkit")?j.location=n:window.frames[j.name].location=n),n}function f(){
if(!B){var o=H.length,n=g();if((n===k||window.location.href==b)&&1==o)return void l();
if(A.length>0&&A[A.length-1].urlHash===n)return void d();o>=2&&H[o-2]&&H[o-2].urlHash===n&&l();
}}var c={};r("extend-dojo")&&n.setObject("dojo.back",c);var w,g=c.getHash=function(){
var o=window.location.hash;return"#"==o.charAt(0)&&(o=o.substring(1)),r("mozilla")?o:decodeURIComponent(o);
},m=c.setHash=function(o){o||(o=""),window.location.hash=encodeURIComponent(o),w=history.length;
},b="undefined"!=typeof window?window.location.href:"",k="undefined"!=typeof window?g():"",y=null,v=null,p=null,j=null,A=[],H=[],_=!1,B=!1;
return c.goBack=l,c.goForward=d,c.init=function(){if(!t.byId("dj_history")){var n=o.dojoIframeHistoryUrl||i.toUrl("./resources/iframe_history.html");
o.afterOnLoad?console.error("dojo/back::init() must be called before the DOM has loaded. Include dojo/back in a build layer."):document.write('<iframe style="border:0;width:1px;height:1px;position:absolute;visibility:hidden;bottom:0;right:0;" name="dj_history" id="dj_history" src="'+n+'"></iframe>');
}},c.setInitialState=function(o){y=s(b,o,k)},c.addToHistory=function(n){A=[];var t=null,i=null;
if(j||(o.useXDomain&&!o.dojoIframeHistoryUrl&&console.warn("dojo/back: When using cross-domain Dojo builds, please save iframe_history.html to your domain and set djConfig.dojoIframeHistoryUrl to the path on your domain to iframe_history.html"),
j=window.frames.dj_history),p||(p=e.create("a",{style:{display:"none"}},a.body())),
n.changeUrl){if(t=""+(n.changeUrl!==!0?n.changeUrl:(new Date).getTime()),0==H.length&&y.urlHash==t)return void(y=s(i,n,t));
if(H.length>0&&H[H.length-1].urlHash==t)return void(H[H.length-1]=s(i,n,t));if(B=!0,
setTimeout(function(){m(t),B=!1},1),p.href=t,r("ie")){i=h();var l=n.back||n.backButton||n.handle,d=function(o){
""!=g()&&setTimeout(function(){m(t)},1),l.apply(this,[o])};n.back?n.back=d:n.backButton?n.backButton=d:n.handle&&(n.handle=d);
var u=n.forward||n.forwardButton||n.handle,c=function(o){""!=g()&&m(t),u&&u.apply(this,[o]);
};n.forward?n.forward=c:n.forwardButton?n.forwardButton=c:n.handle&&(n.handle=c)}else r("ie")||v||(v=setInterval(f,200));
}else i=h();H.push(s(i,n,t))},c._iframeLoaded=function(o,n){var r=u(n.href);return null==r?void(1==H.length&&l()):_?void(_=!1):void(H.length>=2&&r==u(H[H.length-2].url)?l():A.length>0&&r==u(A[A.length-1].url)&&d());
},c});