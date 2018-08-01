define(["./has!dom-addeventlistener?:./aspect","./_base/kernel","./sniff"],function(e,t,n){
"use strict";function r(e,t,r,i,o){var a=t.match(/(.*):(.*)/);if(a)return t=a[2],
a=a[1],s.selector(a,t).call(o,e,r);if(n("touch")&&(u.test(t)&&(r=_(r)),n("event-orientationchange")||"orientationchange"!=t||(t="resize",
e=window,r=_(r))),p&&(r=p(r)),e.addEventListener){var c=t in l,f=c?l[t]:t;return e.addEventListener(f,r,c),
{remove:function(){e.removeEventListener(f,r,c)}}}if(t="on"+t,y&&e.attachEvent)return y(e,t,r);
throw new Error("Target must be an event emitter")}function i(){this.cancelable=!1,
this.defaultPrevented=!0}function o(){this.bubbles=!1}if(n("dom")){var a=window.ScriptEngineMajorVersion;
n.add("jscript",a&&a()+ScriptEngineMinorVersion()/10),n.add("event-orientationchange",n("touch")&&!n("android")),
n.add("event-stopimmediatepropagation",window.Event&&!!window.Event.prototype&&!!window.Event.prototype.stopImmediatePropagation),
n.add("event-focusin",function(e,t,n){return"onfocusin"in n||n.addEventListener&&function(){
function e(){n=!0}var n=!1;try{var r=t.createElement("input"),i=t.activeElement;r.style.position="fixed",
r.addEventListener("focusin",e,!1),t.body.appendChild(r),r.focus(),t.body.removeChild(r),
r.removeEventListener("focusin",e,!1),i.focus()}catch(o){}return n}()})}var s=function(e,t,n,i){
return"function"!=typeof e.on||"function"==typeof t||e.nodeType?s.parse(e,t,n,r,i,this):e.on(t,n);
};s.pausable=function(e,t,n,r){var i,o=s(e,t,function(){return i?void 0:n.apply(this,arguments);
},r);return o.pause=function(){i=!0},o.resume=function(){i=!1},o},s.once=function(e,t,n,r){
var i=s(e,t,function(){return i.remove(),n.apply(this,arguments)});return i},s.parse=function(e,t,n,r,i,o){
if(t.call)return t.call(o,e,n);if(t.indexOf(",")>-1){for(var a,s=t.split(/\s*,\s*/),u=[],c=0;a=s[c++];)u.push(r(e,a,n,i,o));
return u.remove=function(){for(var e=0;e<u.length;e++)u[e].remove()},u}return r(e,t,n,i,o);
};var u=/^touch/;s.selector=function(e,n,r){return function(i,o){function a(n){for(u=u&&u.matches?u:t.query;!u.matches(n,e,i);)if(n==i||r===!1||!(n=n.parentNode)||1!=n.nodeType)return;
return n}var u="function"==typeof e?{matches:e}:this,c=n.bubble;return c?s(i,c(a),o):s(i,n,function(e){
var t=a(e.target);return t&&o.call(t,e)})}};var c=[].slice,f=s.emit=function(e,t,n){
var r=c.call(arguments,2),a="on"+t;if("parentNode"in e){var s=r[0]={};for(var u in n)s[u]=n[u];
s.preventDefault=i,s.stopPropagation=o,s.target=e,s.type=t,n=s}do e[a]&&e[a].apply(e,r);while(n&&n.bubbles&&(e=e.parentNode));
return n&&n.cancelable&&n},l=n("event-focusin")?{}:{focusin:"focus",focusout:"blur"
};if(!n("event-stopimmediatepropagation"))var d=function(){this.immediatelyStopped=!0,
this.modified=!0},p=function(e){return function(t){return t.immediatelyStopped?void 0:(t.stopImmediatePropagation=d,
e.apply(this,arguments))}};if(n("dom-addeventlistener"))s.emit=function(e,t,n){if(e.dispatchEvent&&document.createEvent){
var r=e.ownerDocument.createEvent("HTMLEvents");r.initEvent(t,!!n.bubbles,!!n.cancelable);
for(var i in n)i in r||(r[i]=n[i]);return e.dispatchEvent(r)&&r}return f.apply(s,arguments);
};else{s._fixEvent=function(e,t){if(!e){var n=t&&(t.ownerDocument||t.document||t).parentWindow||window;
e=n.event}if(!e)return e;try{v&&e.type==v.type&&e.srcElement==v.target&&(e=v)}catch(r){}
if(!e.target)switch(e.target=e.srcElement,e.currentTarget=t||e.srcElement,"mouseover"==e.type&&(e.relatedTarget=e.fromElement),
"mouseout"==e.type&&(e.relatedTarget=e.toElement),e.stopPropagation||(e.stopPropagation=w,
e.preventDefault=E),e.type){case"keypress":var i="charCode"in e?e.charCode:e.keyCode;
10==i?(i=0,e.keyCode=13):13==i||27==i?i=0:3==i&&(i=99),e.charCode=i,g(e)}return e;
};var v,h=function(e){this.handle=e};h.prototype.remove=function(){delete _dojoIEListeners_[this.handle];
};var m=function(e){return function(t){t=s._fixEvent(t,this);var n=e.call(this,t);
return t.modified&&(v||setTimeout(function(){v=null}),v=t),n}},y=function(t,r,i){
if(i=m(i),((t.ownerDocument?t.ownerDocument.parentWindow:t.parentWindow||t.window||window)!=top||n("jscript")<5.8)&&!n("config-_allow_leaks")){
"undefined"==typeof _dojoIEListeners_&&(_dojoIEListeners_=[]);var o=t[r];if(!o||!o.listeners){
var a=o;o=Function("event","var callee = arguments.callee; for(var i = 0; i<callee.listeners.length; i++){var listener = _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}"),
o.listeners=[],t[r]=o,o.global=this,a&&o.listeners.push(_dojoIEListeners_.push(a)-1);
}var s;return o.listeners.push(s=o.global._dojoIEListeners_.push(i)-1),new h(s)}return e.after(t,r,i,!0);
},g=function(e){e.keyChar=e.charCode?String.fromCharCode(e.charCode):"",e.charOrCode=e.keyChar||e.keyCode;
},w=function(){this.cancelBubble=!0},E=s._preventDefault=function(){if(this.bubbledKeyCode=this.keyCode,
this.ctrlKey)try{this.keyCode=0}catch(e){}this.defaultPrevented=!0,this.returnValue=!1,
this.modified=!0}}if(n("touch"))var b=function(){},C=window.orientation,_=function(e){
return function(t){var r=t.corrected;if(!r){var i=t.type;try{delete t.type}catch(o){}
if(t.type){if(n("mozilla")){var r={};for(var a in t)r[a]=t[a]}else{b.prototype=t;var r=new b;
}r.preventDefault=function(){t.preventDefault()},r.stopPropagation=function(){t.stopPropagation();
}}else r=t,r.type=i;if(t.corrected=r,"resize"==i)return C==window.orientation?null:(C=window.orientation,
r.type="orientationchange",e.call(this,r));"rotation"in r||(r.rotation=0,r.scale=1);
var s=r.changedTouches[0];for(var u in s)delete r[u],r[u]=s[u]}return e.call(this,r);
}};return s});