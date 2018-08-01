dojo.provide("dojox.secure.DOM"),dojo.require("dojox.lang.observable"),dojox.secure.DOM=function(e){
function n(n){if(!n)return n;var r=n;do if(r==e)return t(n);while(r=r.parentNode);
return null}function t(e){if(e){if(e.nodeType){var n=h(e);return 1==e.nodeType&&"function"==typeof n.style&&(n.style=v(e.style),
n.ownerDocument=s,n.childNodes={__get__:function(n){return t(e.childNodes[n])},length:0
}),n}if(e&&"object"==typeof e){if(e.__observable)return e.__observable;n=e instanceof Array?[]:{},
e.__observable=n;for(var r in e)"__observable"!=r&&(n[r]=t(e[r]));return n.data__=e,
n}if("function"==typeof e){var o=function(e){return"function"==typeof e?function(){
for(var n=0;n<arguments.length;n++)arguments[n]=t(arguments[n]);return o(e.apply(t(this),arguments));
}:dojox.secure.unwrap(e)};return function(){e.safetyCheck&&e.safetyCheck.apply(o(this),arguments);
for(var n=0;n<arguments.length;n++)arguments[n]=o(arguments[n]);return t(e.apply(o(this),arguments));
}}}return e}function r(n){if(n+="",n.match(/behavior:|content:|javascript:|binding|expression|\@import/))throw new Error("Illegal CSS");
var t=e.id||(e.id="safe"+(""+Math.random()).substring(2));return n.replace(/(\}|^)\s*([^\{]*\{)/g,function(e,n,r){
return n+" #"+t+" "+r})}function o(e){if(e.match(/:/)&&!e.match(/^(http|ftp|mailto)/))throw new Error("Unsafe URL "+e);
}function a(e){if(e&&1==e.nodeType){if(e.tagName.match(/script/i)){var n=e.src;if(n&&""!=n)e.parentNode.removeChild(e),
dojo.xhrGet({url:n,secure:!0}).addCallback(function(e){s.evaluate(e)});else{var i=e.innerHTML;
e.parentNode.removeChild(e),t.evaluate(i)}}if(e.tagName.match(/link/i))throw new Error("illegal tag");
if(e.tagName.match(/style/i)){var u=function(n){if(e.styleSheet)e.styleSheet.cssText=n;else{
var t=l.createTextNode(n);e.childNodes[0]?e.replaceChild(t,e.childNodes[0]):e.appendChild(t);
}};n=e.src,n&&""!=n&&(alert("src"+n),e.src=null,dojo.xhrGet({url:n,secure:!0}).addCallback(function(e){
u(r(e))})),u(r(e.innerHTML))}e.style&&r(e.style.cssText),e.href&&o(e.href),e.src&&o(e.src);
for(var c,d=0;c=e.attributes[d++];)if("on"==c.name.substring(0,2)&&"null"!=c.value&&""!=c.value)throw new Error("event handlers not allowed in the HTML, they must be set with element.addEventListener");
for(var f=e.childNodes,d=0,h=f.length;h>d;d++)a(f[d])}}function i(e){var n=document.createElement("div");
if(e.match(/<object/i))throw new Error("The object tag is not allowed");return n.innerHTML=e,
a(n),n}function u(e,n){return function(t,r){return a(r[n]),t[e](r[0])}}function c(e){
return dojox.lang.makeObservable(function(e,n){return e[n]},e,function(e,n,r,o){for(var a=0;a<o.length;a++)o[a]=unwrap(o[a]);
return t(f[r]?f[r].call(e,n,o):n[r].apply(n,o))},f)}unwrap=dojox.secure.unwrap;var l=e.ownerDocument,s={
getElementById:function(e){return n(l.getElementById(e))},createElement:function(e){
return t(l.createElement(e))},createTextNode:function(e){return t(l.createTextNode(e));
},write:function(n){for(var t=i(n);t.childNodes.length;)e.appendChild(t.childNodes[0]);
}};s.open=s.close=function(){};var d={innerHTML:function(e,n){console.log("setting innerHTML"),
e.innerHTML=i(n).innerHTML}};d.outerHTML=function(e,n){throw new Error("Can not set this property");
};var f={appendChild:u("appendChild",0),insertBefore:u("insertBefore",0),replaceChild:u("replaceChild",1),
cloneNode:function(e,n){return e.cloneNode(n[0])},addEventListener:function(e,n){
dojo.connect(e,"on"+n[0],this,function(e){e=h(e||window.event),n[1].call(this,e)});
}};f.childNodes=f.style=f.ownerDocument=function(){};var h=c(function(e,n,t){d[n]&&d[n](e,t),
e[n]=t}),p={behavior:1,MozBinding:1},v=c(function(e,n,t){p[n]||(e[n]=r(t))});return t.safeHTML=i,
t.safeCSS=r,t},dojox.secure.unwrap=function(e){return e&&e.data__||e};