/*!
 * jQuery JavaScript Library v3.1.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-07-07T21:44Z
 */

/*!
 * Sizzle CSS Selector Engine v2.3.0
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-01-04
 */

/**
 * @license AngularJS v1.5.8
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */

!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){
if(!e.document)throw new Error("jQuery requires a window with a document");return t(e);
}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e,t){t=t||Q;
var n=t.createElement("script");n.text=e,t.head.appendChild(n).parentNode.removeChild(n);
}function r(e){var t=!!e&&"length"in e&&e.length,n=pe.type(e);return"function"===n||pe.isWindow(e)?!1:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e;
}function i(e,t,n){if(pe.isFunction(t))return pe.grep(e,function(e,r){return!!t.call(e,r,e)!==n;
});if(t.nodeType)return pe.grep(e,function(e){return e===t!==n});if("string"==typeof t){
if(we.test(t))return pe.filter(t,e,n);t=pe.filter(t,e)}return pe.grep(e,function(e){
return ie.call(t,e)>-1!==n&&1===e.nodeType})}function o(e,t){for(;(e=e[t])&&1!==e.nodeType;);
return e}function a(e){var t={};return pe.each(e.match(Te)||[],function(e,n){t[n]=!0;
}),t}function s(e){return e}function u(e){throw e}function c(e,t,n){var r;try{e&&pe.isFunction(r=e.promise)?r.call(e).done(t).fail(n):e&&pe.isFunction(r=e.then)?r.call(e,t,n):t.call(void 0,e);
}catch(e){n.call(void 0,e)}}function l(){Q.removeEventListener("DOMContentLoaded",l),
e.removeEventListener("load",l),pe.ready()}function f(){this.expando=pe.expando+f.uid++;
}function p(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Ie,"-$&").toLowerCase(),
n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:Re.test(n)?JSON.parse(n):n;
}catch(i){}Fe.set(e,t,n)}else n=void 0;return n}function d(e,t,n,r){var i,o=1,a=20,s=r?function(){
return r.cur()}:function(){return pe.css(e,t,"")},u=s(),c=n&&n[3]||(pe.cssNumber[t]?"":"px"),l=(pe.cssNumber[t]||"px"!==c&&+u)&&Le.exec(pe.css(e,t));
if(l&&l[3]!==c){c=c||l[3],n=n||[],l=+u||1;do o=o||".5",l/=o,pe.style(e,t,l+c);while(o!==(o=s()/u)&&1!==o&&--a);
}return n&&(l=+l||+u||0,i=n[1]?l+(n[1]+1)*n[2]:+n[2],r&&(r.unit=c,r.start=l,r.end=i)),
i}function h(e){var t,n=e.ownerDocument,r=e.nodeName,i=He[r];return i?i:(t=n.body.appendChild(n.createElement(r)),
i=pe.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),He[r]=i,
i)}function m(e,t){for(var n,r,i=[],o=0,a=e.length;a>o;o++)r=e[o],r.style&&(n=r.style.display,
t?("none"===n&&(i[o]=Me.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&Ve(r)&&(i[o]=h(r))):"none"!==n&&(i[o]="none",
Me.set(r,"display",n)));for(o=0;a>o;o++)null!=i[o]&&(e[o].style.display=i[o]);return e;
}function v(e,t){var n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[];
return void 0===t||t&&pe.nodeName(e,t)?pe.merge([e],n):n}function g(e,t){for(var n=0,r=e.length;r>n;n++)Me.set(e[n],"globalEval",!t||Me.get(t[n],"globalEval"));
}function $(e,t,n,r,i){for(var o,a,s,u,c,l,f=t.createDocumentFragment(),p=[],d=0,h=e.length;h>d;d++)if(o=e[d],
o||0===o)if("object"===pe.type(o))pe.merge(p,o.nodeType?[o]:o);else if(Ge.test(o)){
for(a=a||f.appendChild(t.createElement("div")),s=(Ue.exec(o)||["",""])[1].toLowerCase(),
u=ze[s]||ze._default,a.innerHTML=u[1]+pe.htmlPrefilter(o)+u[2],l=u[0];l--;)a=a.lastChild;
pe.merge(p,a.childNodes),a=f.firstChild,a.textContent=""}else p.push(t.createTextNode(o));
for(f.textContent="",d=0;o=p[d++];)if(r&&pe.inArray(o,r)>-1)i&&i.push(o);else if(c=pe.contains(o.ownerDocument,o),
a=v(f.appendChild(o),"script"),c&&g(a),n)for(l=0;o=a[l++];)We.test(o.type||"")&&n.push(o);
return f}function y(){return!0}function b(){return!1}function x(){try{return Q.activeElement;
}catch(e){}}function w(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,
n=void 0);for(s in t)w(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,
r=void 0):(i=r,r=n,n=void 0)),i===!1)i=b;else if(!i)return e;return 1===o&&(a=i,i=function(e){
return pe().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=pe.guid++)),e.each(function(){
pe.event.add(this,t,i,r,n)})}function S(e,t){return pe.nodeName(e,"table")&&pe.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e:e;
}function E(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function C(e){
var t=tt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function A(e,t){
var n,r,i,o,a,s,u,c;if(1===t.nodeType){if(Me.hasData(e)&&(o=Me.access(e),a=Me.set(t,o),
c=o.events)){delete a.handle,a.events={};for(i in c)for(n=0,r=c[i].length;r>n;n++)pe.event.add(t,i,c[i][n]);
}Fe.hasData(e)&&(s=Fe.access(e),u=pe.extend({},s),Fe.set(t,u))}}function k(e,t){var n=t.nodeName.toLowerCase();
"input"===n&&Be.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue);
}function T(e,t,r,i){t=ne.apply([],t);var o,a,s,u,c,l,f=0,p=e.length,d=p-1,h=t[0],m=pe.isFunction(h);
if(m||p>1&&"string"==typeof h&&!le.checkClone&&et.test(h))return e.each(function(n){
var o=e.eq(n);m&&(t[0]=h.call(this,n,o.html())),T(o,t,r,i)});if(p&&(o=$(t,e[0].ownerDocument,!1,e,i),
a=o.firstChild,1===o.childNodes.length&&(o=a),a||i)){for(s=pe.map(v(o,"script"),E),
u=s.length;p>f;f++)c=o,f!==d&&(c=pe.clone(c,!0,!0),u&&pe.merge(s,v(c,"script"))),
r.call(e[f],c,f);if(u)for(l=s[s.length-1].ownerDocument,pe.map(s,C),f=0;u>f;f++)c=s[f],
We.test(c.type||"")&&!Me.access(c,"globalEval")&&pe.contains(l,c)&&(c.src?pe._evalUrl&&pe._evalUrl(c.src):n(c.textContent.replace(nt,""),l));
}return e}function N(e,t,n){for(var r,i=t?pe.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||pe.cleanData(v(r)),
r.parentNode&&(n&&pe.contains(r.ownerDocument,r)&&g(v(r,"script")),r.parentNode.removeChild(r));
return e}function j(e,t,n){var r,i,o,a,s=e.style;return n=n||ot(e),n&&(a=n.getPropertyValue(t)||n[t],
""!==a||pe.contains(e.ownerDocument,e)||(a=pe.style(e,t)),!le.pixelMarginRight()&&it.test(a)&&rt.test(t)&&(r=s.width,
i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,
s.maxWidth=o)),void 0!==a?a+"":a}function O(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments);
}}}function D(e){if(e in lt)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=ct.length;n--;)if(e=ct[n]+t,
e in lt)return e}function M(e,t,n){var r=Le.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t;
}function F(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=pe.css(e,n+Pe[o],!0,i)),
r?("content"===n&&(a-=pe.css(e,"padding"+Pe[o],!0,i)),"margin"!==n&&(a-=pe.css(e,"border"+Pe[o]+"Width",!0,i))):(a+=pe.css(e,"padding"+Pe[o],!0,i),
"padding"!==n&&(a+=pe.css(e,"border"+Pe[o]+"Width",!0,i)));return a}function R(e,t,n){
var r,i=!0,o=ot(e),a="border-box"===pe.css(e,"boxSizing",!1,o);if(e.getClientRects().length&&(r=e.getBoundingClientRect()[t]),
0>=r||null==r){if(r=j(e,t,o),(0>r||null==r)&&(r=e.style[t]),it.test(r))return r;i=a&&(le.boxSizingReliable()||r===e.style[t]),
r=parseFloat(r)||0}return r+F(e,t,n||(a?"border":"content"),i,o)+"px"}function I(e,t,n,r,i){
return new I.prototype.init(e,t,n,r,i)}function q(){pt&&(e.requestAnimationFrame(q),
pe.fx.tick())}function L(){return e.setTimeout(function(){ft=void 0}),ft=pe.now();
}function P(e,t){var n,r=0,i={height:e};for(t=t?1:0;4>r;r+=2-t)n=Pe[r],i["margin"+n]=i["padding"+n]=e;
return t&&(i.opacity=i.width=e),i}function V(e,t,n){for(var r,i=(B.tweeners[t]||[]).concat(B.tweeners["*"]),o=0,a=i.length;a>o;o++)if(r=i[o].call(n,t,e))return r;
}function _(e,t,n){var r,i,o,a,s,u,c,l,f="width"in t||"height"in t,p=this,d={},h=e.style,v=e.nodeType&&Ve(e),g=Me.get(e,"fxshow");
n.queue||(a=pe._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,s=a.empty.fire,
a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){
a.unqueued--,pe.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],dt.test(i)){
if(delete t[r],o=o||"toggle"===i,i===(v?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;
v=!0}d[r]=g&&g[r]||pe.style(e,r)}if(u=!pe.isEmptyObject(t),u||!pe.isEmptyObject(d)){
f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],c=g&&g.display,
null==c&&(c=Me.get(e,"display")),l=pe.css(e,"display"),"none"===l&&(c?l=c:(m([e],!0),
c=e.style.display||c,l=pe.css(e,"display"),m([e]))),("inline"===l||"inline-block"===l&&null!=c)&&"none"===pe.css(e,"float")&&(u||(p.done(function(){
h.display=c}),null==c&&(l=h.display,c="none"===l?"":l)),h.display="inline-block")),
n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],
h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(g?"hidden"in g&&(v=g.hidden):g=Me.access(e,"fxshow",{
display:c}),o&&(g.hidden=!v),v&&m([e],!0),p.done(function(){v||m([e]),Me.remove(e,"fxshow");
for(r in d)pe.style(e,r,d[r])})),u=V(v?g[r]:0,r,p),r in g||(g[r]=u.start,v&&(u.end=u.start,
u.start=0))}}function H(e,t){var n,r,i,o,a;for(n in e)if(r=pe.camelCase(n),i=t[r],
o=e[n],pe.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=pe.cssHooks[r],
a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i;
}function B(e,t,n){var r,i,o=0,a=B.prefilters.length,s=pe.Deferred().always(function(){
delete u.elem}),u=function(){if(i)return!1;for(var t=ft||L(),n=Math.max(0,c.startTime+c.duration-t),r=n/c.duration||0,o=1-r,a=0,u=c.tweens.length;u>a;a++)c.tweens[a].run(o);
return s.notifyWith(e,[c,o,n]),1>o&&u?n:(s.resolveWith(e,[c]),!1)},c=s.promise({elem:e,
props:pe.extend({},t),opts:pe.extend(!0,{specialEasing:{},easing:pe.easing._default
},n),originalProperties:t,originalOptions:n,startTime:ft||L(),duration:n.duration,
tweens:[],createTween:function(t,n){var r=pe.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);
return c.tweens.push(r),r},stop:function(t){var n=0,r=t?c.tweens.length:0;if(i)return this;
for(i=!0;r>n;n++)c.tweens[n].run(1);return t?(s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c,t])):s.rejectWith(e,[c,t]),
this}}),l=c.props;for(H(l,c.opts.specialEasing);a>o;o++)if(r=B.prefilters[o].call(c,e,l,c.opts))return pe.isFunction(r.stop)&&(pe._queueHooks(c.elem,c.opts.queue).stop=pe.proxy(r.stop,r)),
r;return pe.map(l,V,c),pe.isFunction(c.opts.start)&&c.opts.start.call(e,c),pe.fx.timer(pe.extend(u,{
elem:e,anim:c,queue:c.opts.queue})),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always);
}function U(e){return e.getAttribute&&e.getAttribute("class")||""}function W(e,t,n,r){
var i;if(pe.isArray(t))pe.each(t,function(t,i){n||At.test(e)?r(e,i):W(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r);
});else if(n||"object"!==pe.type(t))r(e,t);else for(i in t)W(e+"["+i+"]",t[i],n,r);
}function z(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(Te)||[];
if(pe.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n);
}}function G(e,t,n,r){function i(s){var u;return o[s]=!0,pe.each(e[s]||[],function(e,s){
var c=s(t,n,r);return"string"!=typeof c||a||o[c]?a?!(u=c):void 0:(t.dataTypes.unshift(c),
i(c),!1)}),u}var o={},a=e===Lt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function J(e,t){
var n,r,i=pe.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);
return r&&pe.extend(!0,e,r),e}function X(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),
void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){
u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){
o=i;break}a||(a=i)}o=o||a}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}function Y(e,t,n,r){
var i,o,a,s,u,c={},l=e.dataTypes.slice();if(l[1])for(a in e.converters)c[a.toLowerCase()]=e.converters[a];
for(o=l.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),
u=o,o=l.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(a=c[u+" "+o]||c["* "+o],
!a)for(i in c)if(s=i.split(" "),s[1]===o&&(a=c[u+" "+s[0]]||c["* "+s[0]])){a===!0?a=c[i]:c[i]!==!0&&(o=s[0],
l.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(f){
return{state:"parsererror",error:a?f:"No conversion from "+u+" to "+o}}}return{state:"success",
data:t}}function K(e){return pe.isWindow(e)?e:9===e.nodeType&&e.defaultView}var Z=[],Q=e.document,ee=Object.getPrototypeOf,te=Z.slice,ne=Z.concat,re=Z.push,ie=Z.indexOf,oe={},ae=oe.toString,se=oe.hasOwnProperty,ue=se.toString,ce=ue.call(Object),le={},fe="3.1.0",pe=function(e,t){
return new pe.fn.init(e,t)},de=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,he=/^-ms-/,me=/-([a-z])/g,ve=function(e,t){
return t.toUpperCase()};pe.fn=pe.prototype={jquery:fe,constructor:pe,length:0,toArray:function(){
return te.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:te.call(this);
},pushStack:function(e){var t=pe.merge(this.constructor(),e);return t.prevObject=this,
t},each:function(e){return pe.each(this,e)},map:function(e){return this.pushStack(pe.map(this,function(t,n){
return e.call(t,n,t)}))},slice:function(){return this.pushStack(te.apply(this,arguments));
},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){
var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){
return this.prevObject||this.constructor()},push:re,sort:Z.sort,splice:Z.splice},
pe.extend=pe.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,c=!1;
for("boolean"==typeof a&&(c=a,a=arguments[s]||{},s++),"object"==typeof a||pe.isFunction(a)||(a={}),
s===u&&(a=this,s--);u>s;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],r=e[t],a!==r&&(c&&r&&(pe.isPlainObject(r)||(i=pe.isArray(r)))?(i?(i=!1,
o=n&&pe.isArray(n)?n:[]):o=n&&pe.isPlainObject(n)?n:{},a[t]=pe.extend(c,o,r)):void 0!==r&&(a[t]=r));
return a},pe.extend({expando:"jQuery"+(fe+Math.random()).replace(/\D/g,""),isReady:!0,
error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===pe.type(e);
},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){
var t=pe.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},isPlainObject:function(e){
var t,n;return e&&"[object Object]"===ae.call(e)?(t=ee(e))?(n=se.call(t,"constructor")&&t.constructor,
"function"==typeof n&&ue.call(n)===ce):!0:!1},isEmptyObject:function(e){var t;for(t in e)return!1;
return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?oe[ae.call(e)]||"object":typeof e;
},globalEval:function(e){n(e)},camelCase:function(e){return e.replace(he,"ms-").replace(me,ve);
},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase();
},each:function(e,t){var n,i=0;if(r(e))for(n=e.length;n>i&&t.call(e[i],i,e[i])!==!1;i++);else for(i in e)if(t.call(e[i],i,e[i])===!1)break;
return e},trim:function(e){return null==e?"":(e+"").replace(de,"")},makeArray:function(e,t){
var n=t||[];return null!=e&&(r(Object(e))?pe.merge(n,"string"==typeof e?[e]:e):re.call(n,e)),
n},inArray:function(e,t,n){return null==t?-1:ie.call(t,e,n)},merge:function(e,t){
for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){
for(var r,i=[],o=0,a=e.length,s=!n;a>o;o++)r=!t(e[o],o),r!==s&&i.push(e[o]);return i;
},map:function(e,t,n){var i,o,a=0,s=[];if(r(e))for(i=e.length;i>a;a++)o=t(e[a],a,n),
null!=o&&s.push(o);else for(a in e)o=t(e[a],a,n),null!=o&&s.push(o);return ne.apply([],s);
},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),
pe.isFunction(e)?(r=te.call(arguments,2),i=function(){return e.apply(t||this,r.concat(te.call(arguments)));
},i.guid=e.guid=e.guid||pe.guid++,i):void 0},now:Date.now,support:le}),"function"==typeof Symbol&&(pe.fn[Symbol.iterator]=Z[Symbol.iterator]),
pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){
oe["[object "+t+"]"]=t.toLowerCase()});var ge=function(e){"use strict";function t(e,t,n,r){
var i,o,a,s,u,c,l,p=t&&t.ownerDocument,h=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;
if(!r&&((t?t.ownerDocument||t:_)!==M&&D(t),t=t||M,R)){if(11!==h&&(u=ge.exec(e)))if(i=u[1]){
if(9===h){if(!(a=t.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(p&&(a=p.getElementById(i))&&P(t,a)&&a.id===i)return n.push(a),
n}else{if(u[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((i=u[3])&&w.getElementsByClassName&&t.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(i)),
n}if(!(!w.qsa||z[e+" "]||I&&I.test(e))){if(1!==h)p=t,l=e;else if("object"!==t.nodeName.toLowerCase()){
for((s=t.getAttribute("id"))?s=s.replace(xe,we):t.setAttribute("id",s=V),c=A(e),o=c.length;o--;)c[o]="#"+s+" "+d(c[o]);
l=c.join(","),p=$e.test(e)&&f(t.parentNode)||t}if(l)try{return Z.apply(n,p.querySelectorAll(l)),
n}catch(m){}finally{s===V&&t.removeAttribute("id")}}}return T(e.replace(se,"$1"),t,n,r);
}function n(){function e(n,r){return t.push(n+" ")>S.cacheLength&&delete e[t.shift()],
e[n+" "]=r}var t=[];return e}function r(e){return e[V]=!0,e}function i(e){var t=M.createElement("fieldset");
try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),
t=null}}function o(e,t){for(var n=e.split("|"),r=n.length;r--;)S.attrHandle[n[r]]=t;
}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;
if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){
return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}
function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e;
}}function c(e){return function(t){return"label"in t&&t.disabled===e||"form"in t&&t.disabled===e||"form"in t&&t.disabled===!1&&(t.isDisabled===e||t.isDisabled!==!e&&("label"in t||!Ee(t))!==e);
}}function l(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]));
})})}function f(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function p(){}
function d(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function h(e,t,n){
var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=B++;return t.first?function(t,n,i){
for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i)}:function(t,n,u){var c,l,f,p=[H,s];
if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(f=t[V]||(t[V]={}),
l=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{
if((c=l[o])&&c[0]===H&&c[1]===s)return p[2]=c[2];if(l[o]=p,p[2]=e(t,n,u))return!0;
}}}function m(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;
return!0}:e[0]}function v(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r;
}function g(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,c=null!=t;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),
c&&t.push(s));return a}function $(e,t,n,i,o,a){return i&&!i[V]&&(i=$(i)),o&&!o[V]&&(o=$(o,a)),
r(function(r,a,s,u){var c,l,f,p=[],d=[],h=a.length,m=r||v(t||"*",s.nodeType?[s]:s,[]),$=!e||!r&&t?m:g(m,p,e,s,u),y=n?o||(r?e:h||i)?[]:a:$;
if(n&&n($,y,s,u),i)for(c=g(y,d),i(c,[],s,u),l=c.length;l--;)(f=c[l])&&(y[d[l]]=!($[d[l]]=f));
if(r){if(o||e){if(o){for(c=[],l=y.length;l--;)(f=y[l])&&c.push($[l]=f);o(null,y=[],c,u);
}for(l=y.length;l--;)(f=y[l])&&(c=o?ee(r,f):p[l])>-1&&(r[c]=!(a[c]=f))}}else y=g(y===a?y.splice(h,y.length):y),
o?o(null,a,y,u):Z.apply(a,y)})}function y(e){for(var t,n,r,i=e.length,o=S.relative[e[0].type],a=o||S.relative[" "],s=o?1:0,u=h(function(e){
return e===t},a,!0),c=h(function(e){return ee(t,e)>-1},a,!0),l=[function(e,n,r){var i=!o&&(r||n!==N)||((t=n).nodeType?u(e,n,r):c(e,n,r));
return t=null,i}];i>s;s++)if(n=S.relative[e[s].type])l=[h(m(l),n)];else{if(n=S.filter[e[s].type].apply(null,e[s].matches),
n[V]){for(r=++s;i>r&&!S.relative[e[r].type];r++);return $(s>1&&m(l),s>1&&d(e.slice(0,s-1).concat({
value:" "===e[s-2].type?"*":""})).replace(se,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&d(e));
}l.push(n)}return m(l)}function b(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,c){
var l,f,p,d=0,h="0",m=r&&[],v=[],$=N,y=r||o&&S.find.TAG("*",c),b=H+=null==$?1:Math.random()||.1,x=y.length;
for(c&&(N=a===M||a||c);h!==x&&null!=(l=y[h]);h++){if(o&&l){for(f=0,a||l.ownerDocument===M||(D(l),
s=!R);p=e[f++];)if(p(l,a||M,s)){u.push(l);break}c&&(H=b)}i&&((l=!p&&l)&&d--,r&&m.push(l));
}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(m,v,a,s);if(r){if(d>0)for(;h--;)m[h]||v[h]||(v[h]=Y.call(u));
v=g(v)}Z.apply(u,v),c&&!r&&v.length>0&&d+n.length>1&&t.uniqueSort(u)}return c&&(H=b,
N=$),m};return i?r(a):a}var x,w,S,E,C,A,k,T,N,j,O,D,M,F,R,I,q,L,P,V="sizzle"+1*new Date,_=e.document,H=0,B=0,U=n(),W=n(),z=n(),G=function(e,t){
return e===t&&(O=!0),0},J={}.hasOwnProperty,X=[],Y=X.pop,K=X.push,Z=X.push,Q=X.slice,ee=function(e,t){
for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",ie="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",ae=new RegExp(ne+"+","g"),se=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),ce=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),le=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(oe),pe=new RegExp("^"+re+"$"),de={
ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re+"|[*])"),
ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),
bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")
},he=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ve=/^[^{]+\{\s*\[native \w/,ge=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$e=/[+~]/,ye=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),be=function(e,t,n){
var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320);
},xe=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,we=function(e,t){return t?"\x00"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e;
},Se=function(){D()},Ee=h(function(e){return e.disabled===!0},{dir:"parentNode",next:"legend"
});try{Z.apply(X=Q.call(_.childNodes),_.childNodes),X[_.childNodes.length].nodeType;
}catch(Ce){Z={apply:X.length?function(e,t){K.apply(e,Q.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);
e.length=n-1}}}w=t.support={},C=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;
return t?"HTML"!==t.nodeName:!1},D=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:_;
return r!==M&&9===r.nodeType&&r.documentElement?(M=r,F=M.documentElement,R=!C(M),
_!==M&&(n=M.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Se,!1):n.attachEvent&&n.attachEvent("onunload",Se)),
w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),
w.getElementsByTagName=i(function(e){return e.appendChild(M.createComment("")),!e.getElementsByTagName("*").length;
}),w.getElementsByClassName=ve.test(M.getElementsByClassName),w.getById=i(function(e){
return F.appendChild(e).id=V,!M.getElementsByName||!M.getElementsByName(V).length;
}),w.getById?(S.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&R){
var n=t.getElementById(e);return n?[n]:[]}},S.filter.ID=function(e){var t=e.replace(ye,be);
return function(e){return e.getAttribute("id")===t}}):(delete S.find.ID,S.filter.ID=function(e){
var t=e.replace(ye,be);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");
return n&&n.value===t}}),S.find.TAG=w.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0;
}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);
return r}return o},S.find.CLASS=w.getElementsByClassName&&function(e,t){return"undefined"!=typeof t.getElementsByClassName&&R?t.getElementsByClassName(e):void 0;
},q=[],I=[],(w.qsa=ve.test(M.querySelectorAll))&&(i(function(e){F.appendChild(e).innerHTML="<a id='"+V+"'></a><select id='"+V+"-\r\\' msallowcapture=''><option selected=''></option></select>",
e.querySelectorAll("[msallowcapture^='']").length&&I.push("[*^$]="+ne+"*(?:''|\"\")"),
e.querySelectorAll("[selected]").length||I.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+V+"-]").length||I.push("~="),
e.querySelectorAll(":checked").length||I.push(":checked"),e.querySelectorAll("a#"+V+"+*").length||I.push(".#.+[+~]");
}),i(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
var t=M.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),
e.querySelectorAll("[name=d]").length&&I.push("name"+ne+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&I.push(":enabled",":disabled"),
F.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&I.push(":enabled",":disabled"),
e.querySelectorAll("*,:x"),I.push(",.*:")})),(w.matchesSelector=ve.test(L=F.matches||F.webkitMatchesSelector||F.mozMatchesSelector||F.oMatchesSelector||F.msMatchesSelector))&&i(function(e){
w.disconnectedMatch=L.call(e,"*"),L.call(e,"[s!='']:x"),q.push("!=",oe)}),I=I.length&&new RegExp(I.join("|")),
q=q.length&&new RegExp(q.join("|")),t=ve.test(F.compareDocumentPosition),P=t||ve.test(F.contains)?function(e,t){
var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)));
}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},G=t?function(e,t){
if(e===t)return O=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;
return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,
1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===M||e.ownerDocument===_&&P(_,e)?-1:t===M||t.ownerDocument===_&&P(_,t)?1:j?ee(j,e)-ee(j,t):0:4&n?-1:1);
}:function(e,t){if(e===t)return O=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],u=[t];
if(!i||!o)return e===M?-1:t===M?1:i?-1:o?1:j?ee(j,e)-ee(j,t):0;if(i===o)return a(e,t);
for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;s[r]===u[r];)r++;
return r?a(s[r],u[r]):s[r]===_?-1:u[r]===_?1:0},M):M},t.matches=function(e,n){return t(e,null,null,n);
},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==M&&D(e),n=n.replace(le,"='$1']"),
!(!w.matchesSelector||!R||z[n+" "]||q&&q.test(n)||I&&I.test(n)))try{var r=L.call(e,n);
if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}
return t(n,M,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==M&&D(e),
P(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==M&&D(e);var n=S.attrHandle[t.toLowerCase()],r=n&&J.call(S.attrHandle,t.toLowerCase())?n(e,t,!R):void 0;
return void 0!==r?r:w.attributes||!R?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null;
},t.escape=function(e){return(e+"").replace(xe,we)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e);
},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(O=!w.detectDuplicates,j=!w.sortStable&&e.slice(0),
e.sort(G),O){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return j=null,
e},E=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){
if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=E(e);
}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=E(t);return n},S=t.selectors={
cacheLength:50,createPseudo:r,match:de,attrHandle:{},find:{},relative:{">":{dir:"parentNode",
first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"
}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ye,be),e[3]=(e[3]||e[4]||e[5]||"").replace(ye,be),
"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),
"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),
e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];
return de.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=A(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),
e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ye,be).toLowerCase();
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t;
}},CLASS:function(e){var t=U[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&U(e,function(e){
return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"");
})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:n?(o+="",
"="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(ae," ")+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0;
}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var c,l,f,p,d,h,m=o!==a?"nextSibling":"previousSibling",v=t.parentNode,g=s&&t.nodeName.toLowerCase(),$=!u&&!s,y=!1;
if(v){if(o){for(;m;){for(p=t;p=p[m];)if(s?p.nodeName.toLowerCase()===g:1===p.nodeType)return!1;
h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?v.firstChild:v.lastChild],a&&$){
for(p=v,f=p[V]||(p[V]={}),l=f[p.uniqueID]||(f[p.uniqueID]={}),c=l[e]||[],d=c[0]===H&&c[1],
y=d&&c[2],p=d&&v.childNodes[d];p=++d&&p&&p[m]||(y=d=0)||h.pop();)if(1===p.nodeType&&++y&&p===t){
l[e]=[H,d,y];break}}else if($&&(p=t,f=p[V]||(p[V]={}),l=f[p.uniqueID]||(f[p.uniqueID]={}),
c=l[e]||[],d=c[0]===H&&c[1],y=d),y===!1)for(;(p=++d&&p&&p[m]||(y=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==g:1!==p.nodeType)||!++y||($&&(f=p[V]||(p[V]={}),
l=f[p.uniqueID]||(f[p.uniqueID]={}),l[e]=[H,y]),p!==t)););return y-=i,y===r||y%r===0&&y/r>=0;
}}},PSEUDO:function(e,n){var i,o=S.pseudos[e]||S.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);
return o[V]?o(n):o.length>1?(i=[e,e,"",n],S.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){
for(var r,i=o(e,n),a=i.length;a--;)r=ee(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i);
}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=k(e.replace(se,"$1"));return i[V]?r(function(e,t,n,r){
for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){
return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){
return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(ye,be),function(t){
return(t.textContent||t.innerText||E(t)).indexOf(e)>-1}}),lang:r(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),
e=e.replace(ye,be).toLowerCase(),function(t){var n;do if(n=R?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),
n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){
var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===F;
},focus:function(e){return e===M.activeElement&&(!M.hasFocus||M.hasFocus())&&!!(e.type||e.href||~e.tabIndex);
},enabled:c(!1),disabled:c(!0),checked:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){
return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){
return!S.pseudos.empty(e)},header:function(e){return me.test(e.nodeName)},input:function(e){
return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t;
},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase());
},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){
return[0>n?n+t:n]}),even:l(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),
odd:l(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:l(function(e,t,n){
for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);
return e})}},S.pseudos.nth=S.pseudos.eq;for(x in{radio:!0,checkbox:!0,file:!0,password:!0,
image:!0})S.pseudos[x]=s(x);for(x in{submit:!0,reset:!0})S.pseudos[x]=u(x);return p.prototype=S.filters=S.pseudos,
S.setFilters=new p,A=t.tokenize=function(e,n){var r,i,o,a,s,u,c,l=W[e+" "];if(l)return n?0:l.slice(0);
for(s=e,u=[],c=S.preFilter;s;){(!r||(i=ue.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),
u.push(o=[])),r=!1,(i=ce.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(se," ")
}),s=s.slice(r.length));for(a in S.filter)!(i=de[a].exec(s))||c[a]&&!(i=c[a](i))||(r=i.shift(),
o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):W(e,u).slice(0);
},k=t.compile=function(e,t){var n,r=[],i=[],o=z[e+" "];if(!o){for(t||(t=A(e)),n=t.length;n--;)o=y(t[n]),
o[V]?r.push(o):i.push(o);o=z(e,b(i,r)),o.selector=e}return o},T=t.select=function(e,t,n,r){
var i,o,a,s,u,c="function"==typeof e&&e,l=!r&&A(e=c.selector||e);if(n=n||[],1===l.length){
if(o=l[0]=l[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&w.getById&&9===t.nodeType&&R&&S.relative[o[1].type]){
if(t=(S.find.ID(a.matches[0].replace(ye,be),t)||[])[0],!t)return n;c&&(t=t.parentNode),
e=e.slice(o.shift().value.length)}for(i=de.needsContext.test(e)?0:o.length;i--&&(a=o[i],
!S.relative[s=a.type]);)if((u=S.find[s])&&(r=u(a.matches[0].replace(ye,be),$e.test(o[0].type)&&f(t.parentNode)||t))){
if(o.splice(i,1),e=r.length&&d(o),!e)return Z.apply(n,r),n;break}}return(c||k(e,l))(r,t,!R,n,!t||$e.test(e)&&f(t.parentNode)||t),
n},w.sortStable=V.split("").sort(G).join("")===V,w.detectDuplicates=!!O,D(),w.sortDetached=i(function(e){
return 1&e.compareDocumentPosition(M.createElement("fieldset"))}),i(function(e){return e.innerHTML="<a href='#'></a>",
"#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){
return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){
return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value");
})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue;
}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){
var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null;
}),t}(e);pe.find=ge,pe.expr=ge.selectors,pe.expr[":"]=pe.expr.pseudos,pe.uniqueSort=pe.unique=ge.uniqueSort,
pe.text=ge.getText,pe.isXMLDoc=ge.isXML,pe.contains=ge.contains,pe.escapeSelector=ge.escape;
var $e=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){
if(i&&pe(e).is(n))break;r.push(e)}return r},ye=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);
return n},be=pe.expr.match.needsContext,xe=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,we=/^.[^:#\[\.,]*$/;
pe.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?pe.find.matchesSelector(r,e)?[r]:[]:pe.find.matches(e,pe.grep(t,function(e){
return 1===e.nodeType}))},pe.fn.extend({find:function(e){var t,n,r=this.length,i=this;
if("string"!=typeof e)return this.pushStack(pe(e).filter(function(){for(t=0;r>t;t++)if(pe.contains(i[t],this))return!0;
}));for(n=this.pushStack([]),t=0;r>t;t++)pe.find(e,i[t],n);return r>1?pe.uniqueSort(n):n;
},filter:function(e){return this.pushStack(i(this,e||[],!1))},not:function(e){return this.pushStack(i(this,e||[],!0));
},is:function(e){return!!i(this,"string"==typeof e&&be.test(e)?pe(e):e||[],!1).length;
}});var Se,Ee=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ce=pe.fn.init=function(e,t,n){
var r,i;if(!e)return this;if(n=n||Se,"string"==typeof e){if(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:Ee.exec(e),
!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){
if(t=t instanceof pe?t[0]:t,pe.merge(this,pe.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:Q,!0)),
xe.test(r[1])&&pe.isPlainObject(t))for(r in t)pe.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);
return this}return i=Q.getElementById(r[2]),i&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,
this.length=1,this):pe.isFunction(e)?void 0!==n.ready?n.ready(e):e(pe):pe.makeArray(e,this);
};Ce.prototype=pe.fn,Se=pe(Q);var Ae=/^(?:parents|prev(?:Until|All))/,ke={children:!0,
contents:!0,next:!0,prev:!0};pe.fn.extend({has:function(e){var t=pe(e,this),n=t.length;
return this.filter(function(){for(var e=0;n>e;e++)if(pe.contains(this,t[e]))return!0;
})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&pe(e);
if(!be.test(e))for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&pe.find.matchesSelector(n,e))){
o.push(n);break}return this.pushStack(o.length>1?pe.uniqueSort(o):o)},index:function(e){
return e?"string"==typeof e?ie.call(pe(e),this[0]):ie.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1;
},add:function(e,t){return this.pushStack(pe.uniqueSort(pe.merge(this.get(),pe(e,t))));
},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e));
}}),pe.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null;
},parents:function(e){return $e(e,"parentNode")},parentsUntil:function(e,t,n){return $e(e,"parentNode",n);
},next:function(e){return o(e,"nextSibling")},prev:function(e){return o(e,"previousSibling");
},nextAll:function(e){return $e(e,"nextSibling")},prevAll:function(e){return $e(e,"previousSibling");
},nextUntil:function(e,t,n){return $e(e,"nextSibling",n)},prevUntil:function(e,t,n){
return $e(e,"previousSibling",n)},siblings:function(e){return ye((e.parentNode||{}).firstChild,e);
},children:function(e){return ye(e.firstChild)},contents:function(e){return e.contentDocument||pe.merge([],e.childNodes);
}},function(e,t){pe.fn[e]=function(n,r){var i=pe.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),
r&&"string"==typeof r&&(i=pe.filter(r,i)),this.length>1&&(ke[e]||pe.uniqueSort(i),
Ae.test(e)&&i.reverse()),this.pushStack(i)}});var Te=/\S+/g;pe.Callbacks=function(e){
e="string"==typeof e?a(e):pe.extend({},e);var t,n,r,i,o=[],s=[],u=-1,c=function(){
for(i=e.once,r=t=!0;s.length;u=-1)for(n=s.shift();++u<o.length;)o[u].apply(n[0],n[1])===!1&&e.stopOnFalse&&(u=o.length,
n=!1);e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(u=o.length-1,
s.push(n)),function r(t){pe.each(t,function(t,n){pe.isFunction(n)?e.unique&&l.has(n)||o.push(n):n&&n.length&&"string"!==pe.type(n)&&r(n);
})}(arguments),n&&!t&&c()),this},remove:function(){return pe.each(arguments,function(e,t){
for(var n;(n=pe.inArray(t,o,n))>-1;)o.splice(n,1),u>=n&&u--}),this},has:function(e){
return e?pe.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){
return i=s=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=s=[],
n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=n||[],
n=[e,n.slice?n.slice():n],s.push(n),t||c()),this},fire:function(){return l.fireWith(this,arguments),
this},fired:function(){return!!r}};return l},pe.extend({Deferred:function(t){var n=[["notify","progress",pe.Callbacks("memory"),pe.Callbacks("memory"),2],["resolve","done",pe.Callbacks("once memory"),pe.Callbacks("once memory"),0,"resolved"],["reject","fail",pe.Callbacks("once memory"),pe.Callbacks("once memory"),1,"rejected"]],r="pending",i={
state:function(){return r},always:function(){return o.done(arguments).fail(arguments),
this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return pe.Deferred(function(t){
pe.each(n,function(n,r){var i=pe.isFunction(e[r[4]])&&e[r[4]];o[r[1]](function(){
var e=i&&i.apply(this,arguments);e&&pe.isFunction(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments);
})}),e=null}).promise()},then:function(t,r,i){function o(t,n,r,i){return function(){
var c=this,l=arguments,f=function(){var e,f;if(!(a>t)){if(e=r.apply(c,l),e===n.promise())throw new TypeError("Thenable self-resolution");
f=e&&("object"==typeof e||"function"==typeof e)&&e.then,pe.isFunction(f)?i?f.call(e,o(a,n,s,i),o(a,n,u,i)):(a++,
f.call(e,o(a,n,s,i),o(a,n,u,i),o(a,n,s,n.notifyWith))):(r!==s&&(c=void 0,l=[e]),(i||n.resolveWith)(c,l));
}},p=i?f:function(){try{f()}catch(e){pe.Deferred.exceptionHook&&pe.Deferred.exceptionHook(e,p.stackTrace),
t+1>=a&&(r!==u&&(c=void 0,l=[e]),n.rejectWith(c,l))}};t?p():(pe.Deferred.getStackHook&&(p.stackTrace=pe.Deferred.getStackHook()),
e.setTimeout(p))}}var a=0;return pe.Deferred(function(e){n[0][3].add(o(0,e,pe.isFunction(i)?i:s,e.notifyWith)),
n[1][3].add(o(0,e,pe.isFunction(t)?t:s)),n[2][3].add(o(0,e,pe.isFunction(r)?r:u));
}).promise()},promise:function(e){return null!=e?pe.extend(e,i):i}},o={};return pe.each(n,function(e,t){
var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[0][2].lock),
a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),
this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){
var t=arguments.length,n=t,r=Array(n),i=te.call(arguments),o=pe.Deferred(),a=function(e){
return function(n){r[e]=this,i[e]=arguments.length>1?te.call(arguments):n,--t||o.resolveWith(r,i);
}};if(1>=t&&(c(e,o.done(a(n)).resolve,o.reject),"pending"===o.state()||pe.isFunction(i[n]&&i[n].then)))return o.then();
for(;n--;)c(i[n],a(n),o.reject);return o.promise()}});var Ne=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
pe.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&Ne.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n);
},pe.readyException=function(t){e.setTimeout(function(){throw t})};var je=pe.Deferred();
pe.fn.ready=function(e){return je.then(e)["catch"](function(e){pe.readyException(e);
}),this},pe.extend({isReady:!1,readyWait:1,holdReady:function(e){e?pe.readyWait++:pe.ready(!0);
},ready:function(e){(e===!0?--pe.readyWait:pe.isReady)||(pe.isReady=!0,e!==!0&&--pe.readyWait>0||je.resolveWith(Q,[pe]));
}}),pe.ready.then=je.then,"complete"===Q.readyState||"loading"!==Q.readyState&&!Q.documentElement.doScroll?e.setTimeout(pe.ready):(Q.addEventListener("DOMContentLoaded",l),
e.addEventListener("load",l));var Oe=function(e,t,n,r,i,o,a){var s=0,u=e.length,c=null==n;
if("object"===pe.type(n)){i=!0;for(s in n)Oe(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,
pe.isFunction(r)||(a=!0),c&&(a?(t.call(e,r),t=null):(c=t,t=function(e,t,n){return c.call(pe(e),n);
})),t))for(;u>s;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:c?t.call(e):u?t(e[0],n):o;
},De=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};f.uid=1,f.prototype={
cache:function(e){var t=e[this.expando];return t||(t={},De(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{
value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[pe.camelCase(t)]=n;else for(r in t)i[pe.camelCase(r)]=t[r];
return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][pe.camelCase(t)];
},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),
void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){
pe.isArray(t)?t=t.map(pe.camelCase):(t=pe.camelCase(t),t=t in r?[t]:t.match(Te)||[]),
n=t.length;for(;n--;)delete r[t[n]]}(void 0===t||pe.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando]);
}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!pe.isEmptyObject(t);
}};var Me=new f,Fe=new f,Re=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ie=/[A-Z]/g;pe.extend({
hasData:function(e){return Fe.hasData(e)||Me.hasData(e)},data:function(e,t,n){return Fe.access(e,t,n);
},removeData:function(e,t){Fe.remove(e,t)},_data:function(e,t,n){return Me.access(e,t,n);
},_removeData:function(e,t){Me.remove(e,t)}}),pe.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;
if(void 0===e){if(this.length&&(i=Fe.get(o),1===o.nodeType&&!Me.get(o,"hasDataAttrs"))){
for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=pe.camelCase(r.slice(5)),
p(o,r,i[r])));Me.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){
Fe.set(this,e)}):Oe(this,function(t){var n;if(o&&void 0===t){if(n=Fe.get(o,e),void 0!==n)return n;
if(n=p(o,e),void 0!==n)return n}else this.each(function(){Fe.set(this,e,t)})},null,t,arguments.length>1,null,!0);
},removeData:function(e){return this.each(function(){Fe.remove(this,e)})}}),pe.extend({
queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=Me.get(e,t),n&&(!r||pe.isArray(n)?r=Me.access(e,t,pe.makeArray(n)):r.push(n)),
r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=pe.queue(e,t),r=n.length,i=n.shift(),o=pe._queueHooks(e,t),a=function(){
pe.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),
delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";
return Me.get(e,n)||Me.access(e,n,{empty:pe.Callbacks("once memory").add(function(){
Me.remove(e,[t+"queue",n])})})}}),pe.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,
e="fx",n--),arguments.length<n?pe.queue(this[0],e):void 0===t?this:this.each(function(){
var n=pe.queue(this,e,t);pe._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&pe.dequeue(this,e);
})},dequeue:function(e){return this.each(function(){pe.dequeue(this,e)})},clearQueue:function(e){
return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=pe.Deferred(),o=this,a=this.length,s=function(){
--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=Me.get(o[a],e+"queueHooks"),
n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var qe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Le=new RegExp("^(?:([+-])=|)("+qe+")([a-z%]*)$","i"),Pe=["Top","Right","Bottom","Left"],Ve=function(e,t){
return e=t||e,"none"===e.style.display||""===e.style.display&&pe.contains(e.ownerDocument,e)&&"none"===pe.css(e,"display");
},_e=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);
for(o in t)e.style[o]=a[o];return i},He={};pe.fn.extend({show:function(){return m(this,!0);
},hide:function(){return m(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){
Ve(this)?pe(this).show():pe(this).hide()})}});var Be=/^(?:checkbox|radio)$/i,Ue=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,We=/^$|\/(?:java|ecma)script/i,ze={
option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],
col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],
td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ze.optgroup=ze.option,
ze.tbody=ze.tfoot=ze.colgroup=ze.caption=ze.thead,ze.th=ze.td;var Ge=/<|&#?\w+;/;!function(){
var e=Q.createDocumentFragment(),t=e.appendChild(Q.createElement("div")),n=Q.createElement("input");
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),
t.appendChild(n),le.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",
le.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Je=Q.documentElement,Xe=/^key/,Ye=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ke=/^([^.]*)(?:\.(.+)|)/;
pe.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,c,l,f,p,d,h,m,v=Me.get(e);
if(v)for(n.handler&&(o=n,n=o.handler,i=o.selector),i&&pe.find.matchesSelector(Je,i),
n.guid||(n.guid=pe.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(t){
return"undefined"!=typeof pe&&pe.event.triggered!==t.type?pe.event.dispatch.apply(e,arguments):void 0;
}),t=(t||"").match(Te)||[""],c=t.length;c--;)s=Ke.exec(t[c])||[],d=m=s[1],h=(s[2]||"").split(".").sort(),
d&&(f=pe.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=pe.event.special[d]||{},
l=pe.extend({type:d,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&pe.expr.match.needsContext.test(i),
namespace:h.join(".")},o),(p=u[d])||(p=u[d]=[],p.delegateCount=0,f.setup&&f.setup.call(e,r,h,a)!==!1||e.addEventListener&&e.addEventListener(d,a)),
f.add&&(f.add.call(e,l),l.handler.guid||(l.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,l):p.push(l),
pe.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,c,l,f,p,d,h,m,v=Me.hasData(e)&&Me.get(e);
if(v&&(u=v.events)){for(t=(t||"").match(Te)||[""],c=t.length;c--;)if(s=Ke.exec(t[c])||[],
d=m=s[1],h=(s[2]||"").split(".").sort(),d){for(f=pe.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,
p=u[d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)l=p[o],
!i&&m!==l.origType||n&&n.guid!==l.guid||s&&!s.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(p.splice(o,1),
l.selector&&p.delegateCount--,f.remove&&f.remove.call(e,l));a&&!p.length&&(f.teardown&&f.teardown.call(e,h,v.handle)!==!1||pe.removeEvent(e,d,v.handle),
delete u[d])}else for(d in u)pe.event.remove(e,d+t[c],n,r,!0);pe.isEmptyObject(u)&&Me.remove(e,"handle events");
}},dispatch:function(e){var t,n,r,i,o,a,s=pe.event.fix(e),u=new Array(arguments.length),c=(Me.get(this,"events")||{})[s.type]||[],l=pe.event.special[s.type]||{};
for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,
!l.preDispatch||l.preDispatch.call(this,s)!==!1){for(a=pe.event.handlers.call(this,s,c),
t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)(!s.rnamespace||s.rnamespace.test(o.namespace))&&(s.handleObj=o,
s.data=o.data,r=((pe.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u),
void 0!==r&&(s.result=r)===!1&&(s.preventDefault(),s.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,s),
s.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){
for(r=[],n=0;s>n;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?pe(i,this).index(u)>-1:pe.find(i,this,null,[u]).length),
r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return s<t.length&&a.push({
elem:this,handlers:t.slice(s)}),a},addProp:function(e,t){Object.defineProperty(pe.Event.prototype,e,{
enumerable:!0,configurable:!0,get:pe.isFunction(t)?function(){return this.originalEvent?t(this.originalEvent):void 0;
}:function(){return this.originalEvent?this.originalEvent[e]:void 0},set:function(t){
Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t});
}})},fix:function(e){return e[pe.expando]?e:new pe.Event(e)},special:{load:{noBubble:!0
},focus:{trigger:function(){return this!==x()&&this.focus?(this.focus(),!1):void 0;
},delegateType:"focusin"},blur:{trigger:function(){return this===x()&&this.blur?(this.blur(),
!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&pe.nodeName(this,"input")?(this.click(),
!1):void 0},_default:function(e){return pe.nodeName(e.target,"a")}},beforeunload:{
postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result);
}}}},pe.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n);
},pe.Event=function(e,t){return this instanceof pe.Event?(e&&e.type?(this.originalEvent=e,
this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?y:b,
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,
this.relatedTarget=e.relatedTarget):this.type=e,t&&pe.extend(this,t),this.timeStamp=e&&e.timeStamp||pe.now(),
void(this[pe.expando]=!0)):new pe.Event(e,t)},pe.Event.prototype={constructor:pe.Event,
isDefaultPrevented:b,isPropagationStopped:b,isImmediatePropagationStopped:b,isSimulated:!1,
preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=y,e&&!this.isSimulated&&e.preventDefault();
},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=y,
e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;
this.isImmediatePropagationStopped=y,e&&!this.isSimulated&&e.stopImmediatePropagation(),
this.stopPropagation()}},pe.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,
ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,
"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,
offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,
toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Xe.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ye.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which;
}},pe.event.addProp),pe.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",
pointerleave:"pointerout"},function(e,t){pe.event.special[e]={delegateType:t,bindType:t,
handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!pe.contains(r,i))&&(e.type=o.origType,
n=o.handler.apply(this,arguments),e.type=t),n}}}),pe.fn.extend({on:function(e,t,n,r){
return w(this,e,t,n,r)},one:function(e,t,n,r){return w(this,e,t,n,r,1)},off:function(e,t,n){
var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,pe(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),
this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,
t=void 0),n===!1&&(n=b),this.each(function(){pe.event.remove(this,e,n,t)})}});var Ze=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Qe=/<script|<style|<link/i,et=/checked\s*(?:[^=]|=\s*.checked.)/i,tt=/^true\/(.*)/,nt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
pe.extend({htmlPrefilter:function(e){return e.replace(Ze,"<$1></$2>")},clone:function(e,t,n){
var r,i,o,a,s=e.cloneNode(!0),u=pe.contains(e.ownerDocument,e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||pe.isXMLDoc(e)))for(a=v(s),
o=v(e),r=0,i=o.length;i>r;r++)k(o[r],a[r]);if(t)if(n)for(o=o||v(e),a=a||v(s),r=0,
i=o.length;i>r;r++)A(o[r],a[r]);else A(e,s);return a=v(s,"script"),a.length>0&&g(a,!u&&v(e,"script")),
s},cleanData:function(e){for(var t,n,r,i=pe.event.special,o=0;void 0!==(n=e[o]);o++)if(De(n)){
if(t=n[Me.expando]){if(t.events)for(r in t.events)i[r]?pe.event.remove(n,r):pe.removeEvent(n,r,t.handle);
n[Me.expando]=void 0}n[Fe.expando]&&(n[Fe.expando]=void 0)}}}),pe.fn.extend({detach:function(e){
return N(this,e,!0)},remove:function(e){return N(this,e)},text:function(e){return Oe(this,function(e){
return void 0===e?pe.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e);
})},null,e,arguments.length)},append:function(){return T(this,arguments,function(e){
if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=S(this,e);t.appendChild(e);
}})},prepend:function(){return T(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){
var t=S(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return T(this,arguments,function(e){
this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return T(this,arguments,function(e){
this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){
for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(pe.cleanData(v(e,!1)),e.textContent="");
return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){
return pe.clone(this,e,t)})},html:function(e){return Oe(this,function(e){var t=this[0]||{},n=0,r=this.length;
if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Qe.test(e)&&!ze[(Ue.exec(e)||["",""])[1].toLowerCase()]){
e=pe.htmlPrefilter(e);try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(pe.cleanData(v(t,!1)),
t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length);
},replaceWith:function(){var e=[];return T(this,arguments,function(t){var n=this.parentNode;
pe.inArray(this,e)<0&&(pe.cleanData(v(this)),n&&n.replaceChild(t,this))},e)}}),pe.each({
appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"
},function(e,t){pe.fn[e]=function(e){for(var n,r=[],i=pe(e),o=i.length-1,a=0;o>=a;a++)n=a===o?this:this.clone(!0),
pe(i[a])[t](n),re.apply(r,n.get());return this.pushStack(r)}});var rt=/^margin/,it=new RegExp("^("+qe+")(?!px)[a-z%]+$","i"),ot=function(t){
var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t);
};!function(){function t(){if(s){s.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
s.innerHTML="",Je.appendChild(a);var t=e.getComputedStyle(s);n="1%"!==t.top,o="2px"===t.marginLeft,
r="4px"===t.width,s.style.marginRight="50%",i="4px"===t.marginRight,Je.removeChild(a),
s=null}}var n,r,i,o,a=Q.createElement("div"),s=Q.createElement("div");s.style&&(s.style.backgroundClip="content-box",
s.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===s.style.backgroundClip,
a.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
a.appendChild(s),pe.extend(le,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){
return t(),r},pixelMarginRight:function(){return t(),i},reliableMarginLeft:function(){
return t(),o}}))}();var at=/^(none|table(?!-c[ea]).+)/,st={position:"absolute",visibility:"hidden",
display:"block"},ut={letterSpacing:"0",fontWeight:"400"},ct=["Webkit","Moz","ms"],lt=Q.createElement("div").style;
pe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=j(e,"opacity");return""===n?"1":n;
}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,
flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,
zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){
var i,o,a,s=pe.camelCase(t),u=e.style;return t=pe.cssProps[s]||(pe.cssProps[s]=D(s)||s),
a=pe.cssHooks[t]||pe.cssHooks[s],void 0===n?a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t]:(o=typeof n,
"string"===o&&(i=Le.exec(n))&&i[1]&&(n=d(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(pe.cssNumber[s]?"":"px")),
le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u[t]=n)),
void 0)}},css:function(e,t,n,r){var i,o,a,s=pe.camelCase(t);return t=pe.cssProps[s]||(pe.cssProps[s]=D(s)||s),
a=pe.cssHooks[t]||pe.cssHooks[s],a&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=j(e,t,r)),
"normal"===i&&t in ut&&(i=ut[t]),""===n||n?(o=parseFloat(i),n===!0||isFinite(o)?o||0:i):i;
}}),pe.each(["height","width"],function(e,t){pe.cssHooks[t]={get:function(e,n,r){
return n?!at.test(pe.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?R(e,t,r):_e(e,st,function(){
return R(e,t,r)}):void 0},set:function(e,n,r){var i,o=r&&ot(e),a=r&&F(e,t,r,"border-box"===pe.css(e,"boxSizing",!1,o),o);
return a&&(i=Le.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=pe.css(e,t)),M(e,n,a);
}}}),pe.cssHooks.marginLeft=O(le.reliableMarginLeft,function(e,t){return t?(parseFloat(j(e,"marginLeft"))||e.getBoundingClientRect().left-_e(e,{
marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px":void 0}),pe.each({
margin:"",padding:"",border:"Width"},function(e,t){pe.cssHooks[e+t]={expand:function(n){
for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+Pe[r]+t]=o[r]||o[r-2]||o[0];
return i}},rt.test(e)||(pe.cssHooks[e+t].set=M)}),pe.fn.extend({css:function(e,t){
return Oe(this,function(e,t,n){var r,i,o={},a=0;if(pe.isArray(t)){for(r=ot(e),i=t.length;i>a;a++)o[t[a]]=pe.css(e,t[a],!1,r);
return o}return void 0!==n?pe.style(e,t,n):pe.css(e,t)},e,t,arguments.length>1)}}),
pe.Tween=I,I.prototype={constructor:I,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,
this.easing=i||pe.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,
this.unit=o||(pe.cssNumber[n]?"":"px")},cur:function(){var e=I.propHooks[this.prop];
return e&&e.get?e.get(this):I.propHooks._default.get(this)},run:function(e){var t,n=I.propHooks[this.prop];
return this.options.duration?this.pos=t=pe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,
this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),
n&&n.set?n.set(this):I.propHooks._default.set(this),this}},I.prototype.init.prototype=I.prototype,
I.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=pe.css(e.elem,e.prop,""),
t&&"auto"!==t?t:0)},set:function(e){pe.fx.step[e.prop]?pe.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[pe.cssProps[e.prop]]&&!pe.cssHooks[e.prop]?e.elem[e.prop]=e.now:pe.style(e.elem,e.prop,e.now+e.unit);
}}},I.propHooks.scrollTop=I.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now);
}},pe.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2;
},_default:"swing"},pe.fx=I.prototype.init,pe.fx.step={};var ft,pt,dt=/^(?:toggle|show|hide)$/,ht=/queueHooks$/;
pe.Animation=pe.extend(B,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);
return d(n.elem,e,Le.exec(t),n),n}]},tweener:function(e,t){pe.isFunction(e)?(t=e,
e=["*"]):e=e.match(Te);for(var n,r=0,i=e.length;i>r;r++)n=e[r],B.tweeners[n]=B.tweeners[n]||[],
B.tweeners[n].unshift(t)},prefilters:[_],prefilter:function(e,t){t?B.prefilters.unshift(e):B.prefilters.push(e);
}}),pe.speed=function(e,t,n){var r=e&&"object"==typeof e?pe.extend({},e):{complete:n||!n&&t||pe.isFunction(e)&&e,
duration:e,easing:n&&t||t&&!pe.isFunction(t)&&t};return pe.fx.off||Q.hidden?r.duration=0:r.duration="number"==typeof r.duration?r.duration:r.duration in pe.fx.speeds?pe.fx.speeds[r.duration]:pe.fx.speeds._default,
(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){
pe.isFunction(r.old)&&r.old.call(this),r.queue&&pe.dequeue(this,r.queue)},r},pe.fn.extend({
fadeTo:function(e,t,n,r){return this.filter(Ve).css("opacity",0).show().end().animate({
opacity:t},e,n,r)},animate:function(e,t,n,r){var i=pe.isEmptyObject(e),o=pe.speed(t,n,r),a=function(){
var t=B(this,pe.extend({},e),o);(i||Me.get(this,"finish"))&&t.stop(!0)};return a.finish=a,
i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){
var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),
this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=pe.timers,a=Me.get(this);
if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ht.test(i)&&r(a[i]);
for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),
t=!1,o.splice(i,1));(t||!n)&&pe.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),
this.each(function(){var t,n=Me.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=pe.timers,a=r?r.length:0;
for(n.finish=!0,pe.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),
o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish;
})}}),pe.each(["toggle","show","hide"],function(e,t){var n=pe.fn[t];pe.fn[t]=function(e,r,i){
return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(P(t,!0),e,r,i);
}}),pe.each({slideDown:P("show"),slideUp:P("hide"),slideToggle:P("toggle"),fadeIn:{
opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){
pe.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),pe.timers=[],pe.fx.tick=function(){
var e,t=0,n=pe.timers;for(ft=pe.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);
n.length||pe.fx.stop(),ft=void 0},pe.fx.timer=function(e){pe.timers.push(e),e()?pe.fx.start():pe.timers.pop();
},pe.fx.interval=13,pe.fx.start=function(){pt||(pt=e.requestAnimationFrame?e.requestAnimationFrame(q):e.setInterval(pe.fx.tick,pe.fx.interval));
},pe.fx.stop=function(){e.cancelAnimationFrame?e.cancelAnimationFrame(pt):e.clearInterval(pt),
pt=null},pe.fx.speeds={slow:600,fast:200,_default:400},pe.fn.delay=function(t,n){
return t=pe.fx?pe.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);
r.stop=function(){e.clearTimeout(i)}})},function(){var e=Q.createElement("input"),t=Q.createElement("select"),n=t.appendChild(Q.createElement("option"));
e.type="checkbox",le.checkOn=""!==e.value,le.optSelected=n.selected,e=Q.createElement("input"),
e.value="t",e.type="radio",le.radioValue="t"===e.value}();var mt,vt=pe.expr.attrHandle;
pe.fn.extend({attr:function(e,t){return Oe(this,pe.attr,e,t,arguments.length>1)},
removeAttr:function(e){return this.each(function(){pe.removeAttr(this,e)})}}),pe.extend({
attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?pe.prop(e,t,n):(1===o&&pe.isXMLDoc(e)||(i=pe.attrHooks[t.toLowerCase()]||(pe.expr.match.bool.test(t)?mt:void 0)),
void 0!==n?null===n?void pe.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),
n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=pe.find.attr(e,t),null==r?void 0:r))},
attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&pe.nodeName(e,"input")){
var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){
var n,r=0,i=t&&t.match(Te);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n);
}}),mt={set:function(e,t,n){return t===!1?pe.removeAttr(e,n):e.setAttribute(n,n),
n}},pe.each(pe.expr.match.bool.source.match(/\w+/g),function(e,t){var n=vt[t]||pe.find.attr;
vt[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=vt[a],vt[a]=i,i=null!=n(e,t,r)?a:null,
vt[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,$t=/^(?:a|area)$/i;pe.fn.extend({
prop:function(e,t){return Oe(this,pe.prop,e,t,arguments.length>1)},removeProp:function(e){
return this.each(function(){delete this[pe.propFix[e]||e]})}}),pe.extend({prop:function(e,t,n){
var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&pe.isXMLDoc(e)||(t=pe.propFix[t]||t,
i=pe.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t];
},propHooks:{tabIndex:{get:function(e){var t=pe.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||$t.test(e.nodeName)&&e.href?0:-1;
}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(pe.propHooks.selected={
get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,
null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex);
}}),pe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){
pe.propFix[this.toLowerCase()]=this});var yt=/[\t\r\n\f]/g;pe.fn.extend({addClass:function(e){
var t,n,r,i,o,a,s,u=0;if(pe.isFunction(e))return this.each(function(t){pe(this).addClass(e.call(this,t,U(this)));
});if("string"==typeof e&&e)for(t=e.match(Te)||[];n=this[u++];)if(i=U(n),r=1===n.nodeType&&(" "+i+" ").replace(yt," ")){
for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");s=pe.trim(r),i!==s&&n.setAttribute("class",s);
}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(pe.isFunction(e))return this.each(function(t){
pe(this).removeClass(e.call(this,t,U(this)))});if(!arguments.length)return this.attr("class","");
if("string"==typeof e&&e)for(t=e.match(Te)||[];n=this[u++];)if(i=U(n),r=1===n.nodeType&&(" "+i+" ").replace(yt," ")){
for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");s=pe.trim(r),
i!==s&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e;
return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):pe.isFunction(e)?this.each(function(n){
pe(this).toggleClass(e.call(this,n,U(this),t),t)}):this.each(function(){var t,r,i,o;
if("string"===n)for(r=0,i=pe(this),o=e.match(Te)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(void 0===e||"boolean"===n)&&(t=U(this),
t&&Me.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||e===!1?"":Me.get(this,"__className__")||""));
})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+U(n)+" ").replace(yt," ").indexOf(t)>-1)return!0;
return!1}});var bt=/\r/g,xt=/[\x20\t\r\n\f]+/g;pe.fn.extend({val:function(e){var t,n,r,i=this[0];
{if(arguments.length)return r=pe.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,pe(this).val()):e,
null==i?i="":"number"==typeof i?i+="":pe.isArray(i)&&(i=pe.map(i,function(e){return null==e?"":e+"";
})),t=pe.valHooks[this.type]||pe.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i));
});if(i)return t=pe.valHooks[i.type]||pe.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,
"string"==typeof n?n.replace(bt,""):null==n?"":n)}}}),pe.extend({valHooks:{option:{
get:function(e){var t=pe.find.attr(e,"value");return null!=t?t:pe.trim(pe.text(e)).replace(xt," ");
}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;s>u;u++)if(n=r[u],
!(!n.selected&&u!==i||n.disabled||n.parentNode.disabled&&pe.nodeName(n.parentNode,"optgroup"))){
if(t=pe(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=pe.makeArray(t),a=i.length;a--;)r=i[a],
(r.selected=pe.inArray(pe.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),
o}}}}),pe.each(["radio","checkbox"],function(){pe.valHooks[this]={set:function(e,t){
return pe.isArray(t)?e.checked=pe.inArray(pe(e).val(),t)>-1:void 0}},le.checkOn||(pe.valHooks[this].get=function(e){
return null===e.getAttribute("value")?"on":e.value})});var wt=/^(?:focusinfocus|focusoutblur)$/;
pe.extend(pe.event,{trigger:function(t,n,r,i){var o,a,s,u,c,l,f,p=[r||Q],d=se.call(t,"type")?t.type:t,h=se.call(t,"namespace")?t.namespace.split("."):[];
if(a=s=r=r||Q,3!==r.nodeType&&8!==r.nodeType&&!wt.test(d+pe.event.triggered)&&(d.indexOf(".")>-1&&(h=d.split("."),
d=h.shift(),h.sort()),c=d.indexOf(":")<0&&"on"+d,t=t[pe.expando]?t:new pe.Event(d,"object"==typeof t&&t),
t.isTrigger=i?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
t.result=void 0,t.target||(t.target=r),n=null==n?[t]:pe.makeArray(n,[t]),f=pe.event.special[d]||{},
i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!pe.isWindow(r)){for(u=f.delegateType||d,
wt.test(u+d)||(a=a.parentNode);a;a=a.parentNode)p.push(a),s=a;s===(r.ownerDocument||Q)&&p.push(s.defaultView||s.parentWindow||e);
}for(o=0;(a=p[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||d,l=(Me.get(a,"events")||{})[t.type]&&Me.get(a,"handle"),
l&&l.apply(a,n),l=c&&a[c],l&&l.apply&&De(a)&&(t.result=l.apply(a,n),t.result===!1&&t.preventDefault());
return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(p.pop(),n)!==!1||!De(r)||c&&pe.isFunction(r[d])&&!pe.isWindow(r)&&(s=r[c],
s&&(r[c]=null),pe.event.triggered=d,r[d](),pe.event.triggered=void 0,s&&(r[c]=s)),
t.result}},simulate:function(e,t,n){var r=pe.extend(new pe.Event,n,{type:e,isSimulated:!0
});pe.event.trigger(r,null,t)}}),pe.fn.extend({trigger:function(e,t){return this.each(function(){
pe.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?pe.event.trigger(e,t,n,!0):void 0;
}}),pe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){
pe.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t);
}}),pe.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}
}),le.focusin="onfocusin"in e,le.focusin||pe.each({focus:"focusin",blur:"focusout"
},function(e,t){var n=function(e){pe.event.simulate(t,e.target,pe.event.fix(e))};pe.event.special[t]={
setup:function(){var r=this.ownerDocument||this,i=Me.access(r,t);i||r.addEventListener(e,n,!0),
Me.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Me.access(r,t)-1;
i?Me.access(r,t,i):(r.removeEventListener(e,n,!0),Me.remove(r,t))}}});var St=e.location,Et=pe.now(),Ct=/\?/;
pe.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml");
}catch(r){n=void 0}return(!n||n.getElementsByTagName("parsererror").length)&&pe.error("Invalid XML: "+t),
n};var At=/\[\]$/,kt=/\r?\n/g,Tt=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;
pe.param=function(e,t){var n,r=[],i=function(e,t){var n=pe.isFunction(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n);
};if(pe.isArray(e)||e.jquery&&!pe.isPlainObject(e))pe.each(e,function(){i(this.name,this.value);
});else for(n in e)W(n,e[n],t,i);return r.join("&")},pe.fn.extend({serialize:function(){
return pe.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
var e=pe.prop(this,"elements");return e?pe.makeArray(e):this}).filter(function(){
var e=this.type;return this.name&&!pe(this).is(":disabled")&&Nt.test(this.nodeName)&&!Tt.test(e)&&(this.checked||!Be.test(e));
}).map(function(e,t){var n=pe(this).val();return null==n?null:pe.isArray(n)?pe.map(n,function(e){
return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")
}}).get()}});var jt=/%20/g,Ot=/#.*$/,Dt=/([?&])_=[^&]*/,Mt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Rt=/^(?:GET|HEAD)$/,It=/^\/\//,qt={},Lt={},Pt="*/".concat("*"),Vt=Q.createElement("a");
Vt.href=St.href,pe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:St.href,
type:"GET",isLocal:Ft.test(St.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",
accepts:{"*":Pt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",
json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/
},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{
"* text":String,"text html":!0,"text json":JSON.parse,"text xml":pe.parseXML},flatOptions:{
url:!0,context:!0}},ajaxSetup:function(e,t){return t?J(J(e,pe.ajaxSettings),t):J(pe.ajaxSettings,e);
},ajaxPrefilter:z(qt),ajaxTransport:z(Lt),ajax:function(t,n){function r(t,n,r,s){
var c,p,d,b,x,w=n;l||(l=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",S.readyState=t>0?4:0,
c=t>=200&&300>t||304===t,r&&(b=X(h,S,r)),b=Y(h,b,S,c),c?(h.ifModified&&(x=S.getResponseHeader("Last-Modified"),
x&&(pe.lastModified[o]=x),x=S.getResponseHeader("etag"),x&&(pe.etag[o]=x)),204===t||"HEAD"===h.type?w="nocontent":304===t?w="notmodified":(w=b.state,
p=b.data,d=b.error,c=!d)):(d=w,(t||!w)&&(w="error",0>t&&(t=0))),S.status=t,S.statusText=(n||w)+"",
c?g.resolveWith(m,[p,w,S]):g.rejectWith(m,[S,w,d]),S.statusCode(y),y=void 0,f&&v.trigger(c?"ajaxSuccess":"ajaxError",[S,h,c?p:d]),
$.fireWith(m,[S,w]),f&&(v.trigger("ajaxComplete",[S,h]),--pe.active||pe.event.trigger("ajaxStop")));
}"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,c,l,f,p,d,h=pe.ajaxSetup({},n),m=h.context||h,v=h.context&&(m.nodeType||m.jquery)?pe(m):pe.event,g=pe.Deferred(),$=pe.Callbacks("once memory"),y=h.statusCode||{},b={},x={},w="canceled",S={
readyState:0,getResponseHeader:function(e){var t;if(l){if(!s)for(s={};t=Mt.exec(a);)s[t[1].toLowerCase()]=t[2];
t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return l?a:null;
},setRequestHeader:function(e,t){return null==l&&(e=x[e.toLowerCase()]=x[e.toLowerCase()]||e,
b[e]=t),this},overrideMimeType:function(e){return null==l&&(h.mimeType=e),this},statusCode:function(e){
var t;if(e)if(l)S.always(e[S.status]);else for(t in e)y[t]=[y[t],e[t]];return this;
},abort:function(e){var t=e||w;return i&&i.abort(t),r(0,t),this}};if(g.promise(S),
h.url=((t||h.url||St.href)+"").replace(It,St.protocol+"//"),h.type=n.method||n.type||h.method||h.type,
h.dataTypes=(h.dataType||"*").toLowerCase().match(Te)||[""],null==h.crossDomain){
c=Q.createElement("a");try{c.href=h.url,c.href=c.href,h.crossDomain=Vt.protocol+"//"+Vt.host!=c.protocol+"//"+c.host;
}catch(E){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=pe.param(h.data,h.traditional)),
G(qt,h,n,S),l)return S;f=pe.event&&h.global,f&&0===pe.active++&&pe.event.trigger("ajaxStart"),
h.type=h.type.toUpperCase(),h.hasContent=!Rt.test(h.type),o=h.url.replace(Ot,""),
h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(jt,"+")):(d=h.url.slice(o.length),
h.data&&(o+=(Ct.test(o)?"&":"?")+h.data,delete h.data),h.cache===!1&&(o=o.replace(Dt,""),
d=(Ct.test(o)?"&":"?")+"_="+Et++ +d),h.url=o+d),h.ifModified&&(pe.lastModified[o]&&S.setRequestHeader("If-Modified-Since",pe.lastModified[o]),
pe.etag[o]&&S.setRequestHeader("If-None-Match",pe.etag[o])),(h.data&&h.hasContent&&h.contentType!==!1||n.contentType)&&S.setRequestHeader("Content-Type",h.contentType),
S.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+Pt+"; q=0.01":""):h.accepts["*"]);
for(p in h.headers)S.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(h.beforeSend.call(m,S,h)===!1||l))return S.abort();
if(w="abort",$.add(h.complete),S.done(h.success),S.fail(h.error),i=G(Lt,h,n,S)){if(S.readyState=1,
f&&v.trigger("ajaxSend",[S,h]),l)return S;h.async&&h.timeout>0&&(u=e.setTimeout(function(){
S.abort("timeout")},h.timeout));try{l=!1,i.send(b,r)}catch(E){if(l)throw E;r(-1,E);
}}else r(-1,"No Transport");return S},getJSON:function(e,t,n){return pe.get(e,t,n,"json");
},getScript:function(e,t){return pe.get(e,void 0,t,"script")}}),pe.each(["get","post"],function(e,t){
pe[t]=function(e,n,r,i){return pe.isFunction(n)&&(i=i||r,r=n,n=void 0),pe.ajax(pe.extend({
url:e,type:t,dataType:i,data:n,success:r},pe.isPlainObject(e)&&e))}}),pe._evalUrl=function(e){
return pe.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0
})},pe.fn.extend({wrapAll:function(e){var t;return this[0]&&(pe.isFunction(e)&&(e=e.call(this[0])),
t=pe(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),
t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e;
}).append(this)),this},wrapInner:function(e){return pe.isFunction(e)?this.each(function(t){
pe(this).wrapInner(e.call(this,t))}):this.each(function(){var t=pe(this),n=t.contents();
n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=pe.isFunction(e);return this.each(function(n){
pe(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){
pe(this).replaceWith(this.childNodes)}),this}}),pe.expr.pseudos.hidden=function(e){
return!pe.expr.pseudos.visible(e)},pe.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length);
},pe.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(t){}};var _t={
0:200,1223:204},Ht=pe.ajaxSettings.xhr();le.cors=!!Ht&&"withCredentials"in Ht,le.ajax=Ht=!!Ht,
pe.ajaxTransport(function(t){var n,r;return le.cors||Ht&&!t.crossDomain?{send:function(i,o){
var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];
t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.onreadystatechange=null,
"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(_t[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{
binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),
r=s.onerror=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){
4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null);
}catch(u){if(n)throw u}},abort:function(){n&&n()}}:void 0}),pe.ajaxPrefilter(function(e){
e.crossDomain&&(e.contents.script=!1)}),pe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){
return pe.globalEval(e),e}}}),pe.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),
e.crossDomain&&(e.type="GET")}),pe.ajaxTransport("script",function(e){if(e.crossDomain){
var t,n;return{send:function(r,i){t=pe("<script>").prop({charset:e.scriptCharset,
src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type);
}),Q.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Bt=[],Ut=/(=)\?(?=&|$)|\?\?/;
pe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Bt.pop()||pe.expando+"_"+Et++;
return this[e]=!0,e}}),pe.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=t.jsonp!==!1&&(Ut.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(t.data)&&"data");
return s||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=pe.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,
s?t[s]=t[s].replace(Ut,"$1"+i):t.jsonp!==!1&&(t.url+=(Ct.test(t.url)?"&":"?")+t.jsonp+"="+i),
t.converters["script json"]=function(){return a||pe.error(i+" was not called"),a[0];
},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?pe(e).removeProp(i):e[i]=o,
t[i]&&(t.jsonpCallback=n.jsonpCallback,Bt.push(i)),a&&pe.isFunction(o)&&o(a[0]),a=o=void 0;
}),"script"):void 0}),le.createHTMLDocument=function(){var e=Q.implementation.createHTMLDocument("").body;
return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),pe.parseHTML=function(e,t,n){
if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var r,i,o;return t||(le.createHTMLDocument?(t=Q.implementation.createHTMLDocument(""),
r=t.createElement("base"),r.href=Q.location.href,t.head.appendChild(r)):t=Q),i=xe.exec(e),
o=!n&&[],i?[t.createElement(i[1])]:(i=$([e],t,o),o&&o.length&&pe(o).remove(),pe.merge([],i.childNodes));
},pe.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=pe.trim(e.slice(s)),
e=e.slice(0,s)),pe.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),
a.length>0&&pe.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){
o=arguments,a.html(r?pe("<div>").append(pe.parseHTML(e)).find(r):e)}).always(n&&function(e,t){
a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},pe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){
pe.fn[t]=function(e){return this.on(t,e)}}),pe.expr.pseudos.animated=function(e){
return pe.grep(pe.timers,function(t){return e===t.elem}).length},pe.offset={setOffset:function(e,t,n){
var r,i,o,a,s,u,c,l=pe.css(e,"position"),f=pe(e),p={};"static"===l&&(e.style.position="relative"),
s=f.offset(),o=pe.css(e,"top"),u=pe.css(e,"left"),c=("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1,
c?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),pe.isFunction(t)&&(t=t.call(e,n,pe.extend({},s))),
null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p);
}},pe.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){
pe.offset.setOffset(this,e,t)});var t,n,r,i,o=this[0];if(o)return o.getClientRects().length?(r=o.getBoundingClientRect(),
r.width||r.height?(i=o.ownerDocument,n=K(i),t=i.documentElement,{top:r.top+n.pageYOffset-t.clientTop,
left:r.left+n.pageXOffset-t.clientLeft}):r):{top:0,left:0}},position:function(){if(this[0]){
var e,t,n=this[0],r={top:0,left:0};return"fixed"===pe.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),
t=this.offset(),pe.nodeName(e[0],"html")||(r=e.offset()),r={top:r.top+pe.css(e[0],"borderTopWidth",!0),
left:r.left+pe.css(e[0],"borderLeftWidth",!0)}),{top:t.top-r.top-pe.css(n,"marginTop",!0),
left:t.left-r.left-pe.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){
for(var e=this.offsetParent;e&&"static"===pe.css(e,"position");)e=e.offsetParent;return e||Je;
})}}),pe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;
pe.fn[e]=function(r){return Oe(this,function(e,r,i){var o=K(e);return void 0===i?o?o[t]:e[r]:void(o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i);
},e,r,arguments.length)}}),pe.each(["top","left"],function(e,t){pe.cssHooks[t]=O(le.pixelPosition,function(e,n){
return n?(n=j(e,t),it.test(n)?pe(e).position()[t]+"px":n):void 0})}),pe.each({Height:"height",
Width:"width"},function(e,t){pe.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){
pe.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(i===!0||o===!0?"margin":"border");
return Oe(this,function(t,n,i){var o;return pe.isWindow(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,
Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?pe.css(t,n,s):pe.style(t,n,i,s);
},t,a?i:void 0,a)}})}),pe.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n);
},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r);
},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n);
}}),pe.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){
return pe});var Wt=e.jQuery,zt=e.$;return pe.noConflict=function(t){return e.$===pe&&(e.$=zt),
t&&e.jQuery===pe&&(e.jQuery=Wt),pe},t||(e.jQuery=e.$=pe),pe}),function(e){function t(e,t){
return t=t||Error,function(){var n,r,i=2,o=arguments,a=o[0],s="["+(e?e+":":"")+a+"] ",u=o[1];
for(s+=u.replace(/\{\d+\}/g,function(e){var t=+e.slice(1,-1),n=t+i;return n<o.length?ye(o[n]):e;
}),s+="\nhttp://errors.angularjs.org/1.5.8/"+(e?e+"/":"")+a,r=i,n="?";r<o.length;r++,
n="&")s+=n+"p"+(r-i)+"="+encodeURIComponent(ye(o[r]));return new t(s)}}function n(e){
if(null==e||A(e))return!1;if(ei(e)||x(e)||Br&&e instanceof Br)return!0;var t="length"in Object(e)&&e.length;
return w(t)&&(t>=0&&(t-1 in e||e instanceof Array)||"function"==typeof e.item)}function r(e,t,i){
var o,a;if(e)if(E(e))for(o in e)"prototype"==o||"length"==o||"name"==o||e.hasOwnProperty&&!e.hasOwnProperty(o)||t.call(i,e[o],o,e);else if(ei(e)||n(e)){
var s="object"!=typeof e;for(o=0,a=e.length;a>o;o++)(s||o in e)&&t.call(i,e[o],o,e);
}else if(e.forEach&&e.forEach!==r)e.forEach(t,i,e);else if(b(e))for(o in e)t.call(i,e[o],o,e);else if("function"==typeof e.hasOwnProperty)for(o in e)e.hasOwnProperty(o)&&t.call(i,e[o],o,e);else for(o in e)qr.call(e,o)&&t.call(i,e[o],o,e);
return e}function i(e,t,n){for(var r=Object.keys(e).sort(),i=0;i<r.length;i++)t.call(n,e[r[i]],r[i]);
return r}function o(e){return function(t,n){e(n,t)}}function a(){return++Qr}function s(e,t){
t?e.$$hashKey=t:delete e.$$hashKey}function u(e,t,n){for(var r=e.$$hashKey,i=0,o=t.length;o>i;++i){
var a=t[i];if(y(a)||E(a))for(var c=Object.keys(a),l=0,f=c.length;f>l;l++){var p=c[l],d=a[p];
n&&y(d)?S(d)?e[p]=new Date(d.valueOf()):C(d)?e[p]=new RegExp(d):d.nodeName?e[p]=d.cloneNode(!0):R(d)?e[p]=d.clone():(y(e[p])||(e[p]=ei(d)?[]:{}),
u(e[p],[d],!0)):e[p]=d}}return s(e,r),e}function c(e){return u(e,zr.call(arguments,1),!1);
}function l(e){return u(e,zr.call(arguments,1),!0)}function f(e){return parseInt(e,10);
}function p(e,t){return c(Object.create(e),t)}function d(){}function h(e){return e;
}function m(e){return function(){return e}}function v(e){return E(e.toString)&&e.toString!==Xr;
}function g(e){return"undefined"==typeof e}function $(e){return"undefined"!=typeof e;
}function y(e){return null!==e&&"object"==typeof e}function b(e){return null!==e&&"object"==typeof e&&!Yr(e);
}function x(e){return"string"==typeof e}function w(e){return"number"==typeof e}function S(e){
return"[object Date]"===Xr.call(e)}function E(e){return"function"==typeof e}function C(e){
return"[object RegExp]"===Xr.call(e)}function A(e){return e&&e.window===e}function k(e){
return e&&e.$evalAsync&&e.$watch}function T(e){return"[object File]"===Xr.call(e);
}function N(e){return"[object FormData]"===Xr.call(e)}function j(e){return"[object Blob]"===Xr.call(e);
}function O(e){return"boolean"==typeof e}function D(e){return e&&E(e.then)}function M(e){
return e&&w(e.length)&&ti.test(Xr.call(e))}function F(e){return"[object ArrayBuffer]"===Xr.call(e);
}function R(e){return!(!e||!(e.nodeName||e.prop&&e.attr&&e.find))}function I(e){var t,n={},r=e.split(",");
for(t=0;t<r.length;t++)n[r[t]]=!0;return n}function q(e){return Lr(e.nodeName||e[0]&&e[0].nodeName);
}function L(e,t){return-1!=Array.prototype.indexOf.call(e,t)}function P(e,t){var n=e.indexOf(t);
return n>=0&&e.splice(n,1),n}function V(e,t){function n(e,t){var n,r=t.$$hashKey;if(ei(e))for(var o=0,a=e.length;a>o;o++)t.push(i(e[o]));else if(b(e))for(n in e)t[n]=i(e[n]);else if(e&&"function"==typeof e.hasOwnProperty)for(n in e)e.hasOwnProperty(n)&&(t[n]=i(e[n]));else for(n in e)qr.call(e,n)&&(t[n]=i(e[n]));
return s(t,r),t}function i(e){if(!y(e))return e;var t=a.indexOf(e);if(-1!==t)return u[t];
if(A(e)||k(e))throw Kr("cpws","Can't copy! Making copies of Window or Scope instances is not supported.");
var r=!1,i=o(e);return void 0===i&&(i=ei(e)?[]:Object.create(Yr(e)),r=!0),a.push(e),
u.push(i),r?n(e,i):i}function o(e){switch(Xr.call(e)){case"[object Int8Array]":case"[object Int16Array]":
case"[object Int32Array]":case"[object Float32Array]":case"[object Float64Array]":
case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":
case"[object Uint32Array]":return new e.constructor(i(e.buffer),e.byteOffset,e.length);
case"[object ArrayBuffer]":if(!e.slice){var t=new ArrayBuffer(e.byteLength);return new Uint8Array(t).set(new Uint8Array(e)),
t}return e.slice(0);case"[object Boolean]":case"[object Number]":case"[object String]":
case"[object Date]":return new e.constructor(e.valueOf());case"[object RegExp]":var n=new RegExp(e.source,e.toString().match(/[^\/]*$/)[0]);
return n.lastIndex=e.lastIndex,n;case"[object Blob]":return new e.constructor([e],{
type:e.type})}return E(e.cloneNode)?e.cloneNode(!0):void 0}var a=[],u=[];if(t){if(M(t)||F(t))throw Kr("cpta","Can't copy! TypedArray destination cannot be mutated.");
if(e===t)throw Kr("cpi","Can't copy! Source and destination are identical.");return ei(t)?t.length=0:r(t,function(e,n){
"$$hashKey"!==n&&delete t[n]}),a.push(e),u.push(t),n(e,t)}return i(e)}function _(e,t){
if(e===t)return!0;if(null===e||null===t)return!1;if(e!==e&&t!==t)return!0;var n,r,i,o=typeof e,a=typeof t;
if(o==a&&"object"==o){if(!ei(e)){if(S(e))return S(t)?_(e.getTime(),t.getTime()):!1;
if(C(e))return C(t)?e.toString()==t.toString():!1;if(k(e)||k(t)||A(e)||A(t)||ei(t)||S(t)||C(t))return!1;
i=me();for(r in e)if("$"!==r.charAt(0)&&!E(e[r])){if(!_(e[r],t[r]))return!1;i[r]=!0;
}for(r in t)if(!(r in i)&&"$"!==r.charAt(0)&&$(t[r])&&!E(t[r]))return!1;return!0}
if(!ei(t))return!1;if((n=e.length)==t.length){for(r=0;n>r;r++)if(!_(e[r],t[r]))return!1;
return!0}}return!1}function H(e,t,n){return e.concat(zr.call(t,n))}function B(e,t){
return zr.call(e,t||0)}function U(e,t){var n=arguments.length>2?B(arguments,2):[];
return!E(t)||t instanceof RegExp?t:n.length?function(){return arguments.length?t.apply(e,H(n,arguments,0)):t.apply(e,n);
}:function(){return arguments.length?t.apply(e,arguments):t.call(e)}}function W(t,n){
var r=n;return"string"==typeof t&&"$"===t.charAt(0)&&"$"===t.charAt(1)?r=void 0:A(n)?r="$WINDOW":n&&e.document===n?r="$DOCUMENT":k(n)&&(r="$SCOPE"),
r}function z(e,t){return g(e)?void 0:(w(t)||(t=t?2:null),JSON.stringify(e,W,t))}function G(e){
return x(e)?JSON.parse(e):e}function J(e,t){e=e.replace(ai,"");var n=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;
return isNaN(n)?t:n}function X(e,t){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+t),
e}function Y(e,t,n){n=n?-1:1;var r=e.getTimezoneOffset(),i=J(t,r);return X(e,n*(i-r));
}function K(e){e=Br(e).clone();try{e.empty()}catch(t){}var n=Br("<div>").append(e).html();
try{return e[0].nodeType===pi?Lr(n):n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(e,t){
return"<"+Lr(t)})}catch(t){return Lr(n)}}function Z(e){try{return decodeURIComponent(e);
}catch(t){}}function Q(e){var t={};return r((e||"").split("&"),function(e){var n,r,i;
e&&(r=e=e.replace(/\+/g,"%20"),n=e.indexOf("="),-1!==n&&(r=e.substring(0,n),i=e.substring(n+1)),
r=Z(r),$(r)&&(i=$(i)?Z(i):!0,qr.call(t,r)?ei(t[r])?t[r].push(i):t[r]=[t[r],i]:t[r]=i));
}),t}function ee(e){var t=[];return r(e,function(e,n){ei(e)?r(e,function(e){t.push(ne(n,!0)+(e===!0?"":"="+ne(e,!0)));
}):t.push(ne(n,!0)+(e===!0?"":"="+ne(e,!0)))}),t.length?t.join("&"):""}function te(e){
return ne(e,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ne(e,t){
return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,t?"%20":"+");
}function re(e,t){var n,r,i=si.length;for(r=0;i>r;++r)if(n=si[r]+t,x(n=e.getAttribute(n)))return n;
return null}function ie(e,t){var n,i,o={};r(si,function(t){var r=t+"app";!n&&e.hasAttribute&&e.hasAttribute(r)&&(n=e,
i=e.getAttribute(r))}),r(si,function(t){var r,o=t+"app";!n&&(r=e.querySelector("["+o.replace(":","\\:")+"]"))&&(n=r,
i=r.getAttribute(o))}),n&&(o.strictDi=null!==re(n,"strict-di"),t(n,i?[i]:[],o))}function oe(t,n,i){
y(i)||(i={});var o={strictDi:!1};i=c(o,i);var a=function(){if(t=Br(t),t.injector()){
var r=t[0]===e.document?"document":K(t);throw Kr("btstrpd","App already bootstrapped with this element '{0}'",r.replace(/</,"&lt;").replace(/>/,"&gt;"));
}n=n||[],n.unshift(["$provide",function(e){e.value("$rootElement",t)}]),i.debugInfoEnabled&&n.push(["$compileProvider",function(e){
e.debugInfoEnabled(!0)}]),n.unshift("ng");var o=it(n,i.strictDi);return o.invoke(["$rootScope","$rootElement","$compile","$injector",function(e,t,n,r){
e.$apply(function(){t.data("$injector",r),n(t)(e)})}]),o},s=/^NG_ENABLE_DEBUG_INFO!/,u=/^NG_DEFER_BOOTSTRAP!/;
return e&&s.test(e.name)&&(i.debugInfoEnabled=!0,e.name=e.name.replace(s,"")),e&&!u.test(e.name)?a():(e.name=e.name.replace(u,""),
Zr.resumeBootstrap=function(e){return r(e,function(e){n.push(e)}),a()},void(E(Zr.resumeDeferredBootstrap)&&Zr.resumeDeferredBootstrap()));
}function ae(){e.name="NG_ENABLE_DEBUG_INFO!"+e.name,e.location.reload()}function se(e){
var t=Zr.element(e).injector();if(!t)throw Kr("test","no injector found for element argument to getTestability");
return t.get("$$testability")}function ue(e,t){return t=t||"_",e.replace(ui,function(e,n){
return(n?t:"")+e.toLowerCase()})}function ce(){var t;if(!ci){var n=oi();Ur=g(n)?e.jQuery:n?e[n]:void 0,
Ur&&Ur.fn.on?(Br=Ur,c(Ur.fn,{scope:Oi.scope,isolateScope:Oi.isolateScope,controller:Oi.controller,
injector:Oi.injector,inheritedData:Oi.inheritedData}),t=Ur.cleanData,Ur.cleanData=function(e){
for(var n,r,i=0;null!=(r=e[i]);i++)n=Ur._data(r,"events"),n&&n.$destroy&&Ur(r).triggerHandler("$destroy");
t(e)}):Br=je,Zr.element=Br,ci=!0}}function le(e,t,n){if(!e)throw Kr("areq","Argument '{0}' is {1}",t||"?",n||"required");
return e}function fe(e,t,n){return n&&ei(e)&&(e=e[e.length-1]),le(E(e),t,"not a function, got "+(e&&"object"==typeof e?e.constructor.name||"Object":typeof e)),
e}function pe(e,t){if("hasOwnProperty"===e)throw Kr("badname","hasOwnProperty is not a valid {0} name",t);
}function de(e,t,n){if(!t)return e;for(var r,i=t.split("."),o=e,a=i.length,s=0;a>s;s++)r=i[s],
e&&(e=(o=e)[r]);return!n&&E(e)?U(o,e):e}function he(e){for(var t,n=e[0],r=e[e.length-1],i=1;n!==r&&(n=n.nextSibling);i++)(t||e[i]!==n)&&(t||(t=Br(zr.call(e,0,i))),
t.push(n));return t||e}function me(){return Object.create(null)}function ve(e){function n(e,t,n){
return e[t]||(e[t]=n())}var r=t("$injector"),i=t("ng"),o=n(e,"angular",Object);return o.$$minErr=o.$$minErr||t,
n(o,"module",function(){var e={};return function(t,o,a){var s=function(e,t){if("hasOwnProperty"===e)throw i("badname","hasOwnProperty is not a valid {0} name",t);
};return s(t,"module"),o&&e.hasOwnProperty(t)&&(e[t]=null),n(e,t,function(){function e(e,t,n,r){
return r||(r=i),function(){return r[n||"push"]([e,t,arguments]),l}}function n(e,n){
return function(r,o){return o&&E(o)&&(o.$$moduleName=t),i.push([e,n,arguments]),l;
}}if(!o)throw r("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",t);
var i=[],s=[],u=[],c=e("$injector","invoke","push",s),l={_invokeQueue:i,_configBlocks:s,
_runBlocks:u,requires:o,name:t,provider:n("$provide","provider"),factory:n("$provide","factory"),
service:n("$provide","service"),value:e("$provide","value"),constant:e("$provide","constant","unshift"),
decorator:n("$provide","decorator"),animation:n("$animateProvider","register"),filter:n("$filterProvider","register"),
controller:n("$controllerProvider","register"),directive:n("$compileProvider","directive"),
component:n("$compileProvider","component"),config:c,run:function(e){return u.push(e),
this}};return a&&c(a),l})}})}function ge(e,t){if(ei(e)){t=t||[];for(var n=0,r=e.length;r>n;n++)t[n]=e[n];
}else if(y(e)){t=t||{};for(var i in e)("$"!==i.charAt(0)||"$"!==i.charAt(1))&&(t[i]=e[i]);
}return t||e}function $e(e){var t=[];return JSON.stringify(e,function(e,n){if(n=W(e,n),
y(n)){if(t.indexOf(n)>=0)return"...";t.push(n)}return n})}function ye(e){return"function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):g(e)?"undefined":"string"!=typeof e?$e(e):e;
}function be(n){c(n,{bootstrap:oe,copy:V,extend:c,merge:l,equals:_,element:Br,forEach:r,
injector:it,noop:d,bind:U,toJson:z,fromJson:G,identity:h,isUndefined:g,isDefined:$,
isString:x,isFunction:E,isObject:y,isNumber:w,isElement:R,isArray:ei,version:vi,isDate:S,
lowercase:Lr,uppercase:Pr,callbacks:{$$counter:0},getTestability:se,$$minErr:t,$$csp:ii,
reloadWithDebugInfo:ae}),(Wr=ve(e))("ng",["ngLocale"],["$provide",function(e){e.provider({
$$sanitizeUri:An}),e.provider("$compile",mt).directive({a:Vo,input:oa,textarea:oa,
form:Wo,script:es,select:rs,style:os,option:is,ngBind:ua,ngBindHtml:la,ngBindTemplate:ca,
ngClass:pa,ngClassEven:ha,ngClassOdd:da,ngCloak:ma,ngController:va,ngForm:zo,ngHide:Ga,
ngIf:ya,ngInclude:ba,ngInit:wa,ngNonBindable:La,ngPluralize:Ha,ngRepeat:Ba,ngShow:za,
ngStyle:Ja,ngSwitch:Xa,ngSwitchWhen:Ya,ngSwitchDefault:Ka,ngOptions:_a,ngTransclude:Qa,
ngModel:Ra,ngList:Sa,ngChange:fa,pattern:ss,ngPattern:ss,required:as,ngRequired:as,
minlength:cs,ngMinlength:cs,maxlength:us,ngMaxlength:us,ngValue:sa,ngModelOptions:qa
}).directive({ngInclude:xa}).directive(_o).directive(ga),e.provider({$anchorScroll:ot,
$animate:Gi,$animateCss:Yi,$$animateJs:Wi,$$animateQueue:zi,$$AnimateRunner:Xi,$$animateAsyncRun:Ji,
$browser:ft,$cacheFactory:pt,$controller:xt,$document:wt,$exceptionHandler:St,$filter:Vn,
$$forceReflow:no,$interpolate:qt,$interval:Lt,$http:Mt,$httpParamSerializer:Ct,$httpParamSerializerJQLike:At,
$httpBackend:Rt,$xhrFactory:Ft,$jsonpCallbacks:fo,$location:Qt,$log:en,$parse:bn,
$rootScope:Cn,$q:xn,$$q:wn,$sce:jn,$sceDelegate:Nn,$sniffer:On,$templateCache:dt,
$templateRequest:Dn,$$testability:Mn,$timeout:Fn,$window:qn,$$rAF:En,$$jqLite:Ke,
$$HashMap:Ri,$$cookieReader:Pn})}])}function xe(){return++$i}function we(e){return e.replace(xi,function(e,t,n,r){
return r?n.toUpperCase():n}).replace(wi,"Moz$1")}function Se(e){return!Ai.test(e);
}function Ee(e){var t=e.nodeType;return t===li||!t||t===hi}function Ce(e){for(var t in gi[e.ng339])return!0;
return!1}function Ae(e){for(var t=0,n=e.length;n>t;t++)Fe(e[t])}function ke(e,t){
var n,i,o,a,s=t.createDocumentFragment(),u=[];if(Se(e))u.push(t.createTextNode(e));else{
for(n=s.appendChild(t.createElement("div")),i=(ki.exec(e)||["",""])[1].toLowerCase(),
o=Ni[i]||Ni._default,n.innerHTML=o[1]+e.replace(Ti,"<$1></$2>")+o[2],a=o[0];a--;)n=n.lastChild;
u=H(u,n.childNodes),n=s.firstChild,n.textContent=""}return s.textContent="",s.innerHTML="",
r(u,function(e){s.appendChild(e)}),s}function Te(t,n){n=n||e.document;var r;return(r=Ci.exec(t))?[n.createElement(r[1])]:(r=ke(t,n))?r.childNodes:[];
}function Ne(e,t){var n=e.parentNode;n&&n.replaceChild(t,e),t.appendChild(e)}function je(e){
if(e instanceof je)return e;var t;if(x(e)&&(e=ni(e),t=!0),!(this instanceof je)){
if(t&&"<"!=e.charAt(0))throw Ei("nosel","Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
return new je(e)}t?Ve(this,Te(e)):Ve(this,e)}function Oe(e){return e.cloneNode(!0);
}function De(e,t){if(t||Fe(e),e.querySelectorAll)for(var n=e.querySelectorAll("*"),r=0,i=n.length;i>r;r++)Fe(n[r]);
}function Me(e,t,n,i){if($(i))throw Ei("offargs","jqLite#off() does not support the `selector` argument");
var o=Re(e),a=o&&o.events,s=o&&o.handle;if(s)if(t){var u=function(t){var r=a[t];$(n)&&P(r||[],n),
$(n)&&r&&r.length>0||(bi(e,t,s),delete a[t])};r(t.split(" "),function(e){u(e),Si[e]&&u(Si[e]);
})}else for(t in a)"$destroy"!==t&&bi(e,t,s),delete a[t]}function Fe(e,t){var n=e.ng339,r=n&&gi[n];
if(r){if(t)return void delete r.data[t];r.handle&&(r.events.$destroy&&r.handle({},"$destroy"),
Me(e)),delete gi[n],e.ng339=void 0}}function Re(e,t){var n=e.ng339,r=n&&gi[n];return t&&!r&&(e.ng339=n=xe(),
r=gi[n]={events:{},data:{},handle:void 0}),r}function Ie(e,t,n){if(Ee(e)){var r=$(n),i=!r&&t&&!y(t),o=!t,a=Re(e,!i),s=a&&a.data;
if(r)s[t]=n;else{if(o)return s;if(i)return s&&s[t];c(s,t)}}}function qe(e,t){return e.getAttribute?(" "+(e.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+t+" ")>-1:!1;
}function Le(e,t){t&&e.setAttribute&&r(t.split(" "),function(t){e.setAttribute("class",ni((" "+(e.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+ni(t)+" "," ")));
})}function Pe(e,t){if(t&&e.setAttribute){var n=(" "+(e.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");
r(t.split(" "),function(e){e=ni(e),-1===n.indexOf(" "+e+" ")&&(n+=e+" ")}),e.setAttribute("class",ni(n));
}}function Ve(e,t){if(t)if(t.nodeType)e[e.length++]=t;else{var n=t.length;if("number"==typeof n&&t.window!==t){
if(n)for(var r=0;n>r;r++)e[e.length++]=t[r]}else e[e.length++]=t}}function _e(e,t){
return He(e,"$"+(t||"ngController")+"Controller")}function He(e,t,n){e.nodeType==hi&&(e=e.documentElement);
for(var r=ei(t)?t:[t];e;){for(var i=0,o=r.length;o>i;i++)if($(n=Br.data(e,r[i])))return n;
e=e.parentNode||e.nodeType===mi&&e.host}}function Be(e){for(De(e,!0);e.firstChild;)e.removeChild(e.firstChild);
}function Ue(e,t){t||De(e);var n=e.parentNode;n&&n.removeChild(e)}function We(t,n){
n=n||e,"complete"===n.document.readyState?n.setTimeout(t):Br(n).on("load",t)}function ze(e,t){
var n=Di[t.toLowerCase()];return n&&Mi[q(e)]&&n}function Ge(e){return Fi[e]}function Je(e,t){
var n=function(n,r){n.isDefaultPrevented=function(){return n.defaultPrevented};var i=t[r||n.type],o=i?i.length:0;
if(o){if(g(n.immediatePropagationStopped)){var a=n.stopImmediatePropagation;n.stopImmediatePropagation=function(){
n.immediatePropagationStopped=!0,n.stopPropagation&&n.stopPropagation(),a&&a.call(n);
}}n.isImmediatePropagationStopped=function(){return n.immediatePropagationStopped===!0;
};var s=i.specialHandlerWrapper||Xe;o>1&&(i=ge(i));for(var u=0;o>u;u++)n.isImmediatePropagationStopped()||s(e,n,i[u]);
}};return n.elem=e,n}function Xe(e,t,n){n.call(e,t)}function Ye(e,t,n){var r=t.relatedTarget;
(!r||r!==e&&!ji.call(e,r))&&n.call(e,t)}function Ke(){this.$get=function(){return c(je,{
hasClass:function(e,t){return e.attr&&(e=e[0]),qe(e,t)},addClass:function(e,t){return e.attr&&(e=e[0]),
Pe(e,t)},removeClass:function(e,t){return e.attr&&(e=e[0]),Le(e,t)}})}}function Ze(e,t){
var n=e&&e.$$hashKey;if(n)return"function"==typeof n&&(n=e.$$hashKey()),n;var r=typeof e;
return n="function"==r||"object"==r&&null!==e?e.$$hashKey=r+":"+(t||a)():r+":"+e}
function Qe(e,t){if(t){var n=0;this.nextUid=function(){return++n}}r(e,this.put,this);
}function et(e){return Function.prototype.toString.call(e)+" "}function tt(e){var t=et(e).replace(Vi,""),n=t.match(Ii)||t.match(qi);
return n}function nt(e){var t=tt(e);return t?"function("+(t[1]||"").replace(/[\s\r\n]+/," ")+")":"fn";
}function rt(e,t,n){var i,o,a;if("function"==typeof e){if(!(i=e.$inject)){if(i=[],
e.length){if(t)throw x(n)&&n||(n=e.name||nt(e)),_i("strictdi","{0} is not using explicit annotation and cannot be invoked in strict mode",n);
o=tt(e),r(o[1].split(Li),function(e){e.replace(Pi,function(e,t,n){i.push(n)})})}e.$inject=i;
}}else ei(e)?(a=e.length-1,fe(e[a],"fn"),i=e.slice(0,a)):fe(e,"fn",!0);return i}function it(e,t){
function n(e){return function(t,n){return y(t)?void r(t,o(e)):e(t,n)}}function i(e,t){
if(pe(e,"service"),(E(t)||ei(t))&&(t=S.instantiate(t)),!t.$get)throw _i("pget","Provider '{0}' must define $get factory method.",e);
return w[e+v]=t}function a(e,t){return function(){var n=k.invoke(t,this);if(g(n))throw _i("undef","Provider '{0}' must return a value from $get factory method.",e);
return n}}function s(e,t,n){return i(e,{$get:n!==!1?a(e,t):t})}function u(e,t){return s(e,["$injector",function(e){
return e.instantiate(t)}])}function c(e,t){return s(e,m(t),!1)}function l(e,t){pe(e,"constant"),
w[e]=t,C[e]=t}function f(e,t){var n=S.get(e+v),r=n.$get;n.$get=function(){var e=k.invoke(r,n);
return k.invoke(t,null,{$delegate:e})}}function p(e){le(g(e)||ei(e),"modulesToLoad","not an array");
var t,n=[];return r(e,function(e){function r(e){var t,n;for(t=0,n=e.length;n>t;t++){
var r=e[t],i=S.get(r[0]);i[r[1]].apply(i,r[2])}}if(!b.get(e)){b.put(e,!0);try{x(e)?(t=Wr(e),
n=n.concat(p(t.requires)).concat(t._runBlocks),r(t._invokeQueue),r(t._configBlocks)):E(e)?n.push(S.invoke(e)):ei(e)?n.push(S.invoke(e)):fe(e,"module");
}catch(i){throw ei(e)&&(e=e[e.length-1]),i.message&&i.stack&&-1==i.stack.indexOf(i.message)&&(i=i.message+"\n"+i.stack),
_i("modulerr","Failed to instantiate module {0} due to:\n{1}",e,i.stack||i.message||i);
}}}),n}function d(e,n){function r(t,r){if(e.hasOwnProperty(t)){if(e[t]===h)throw _i("cdep","Circular dependency found: {0}",t+" <- "+$.join(" <- "));
return e[t]}try{return $.unshift(t),e[t]=h,e[t]=n(t,r)}catch(i){throw e[t]===h&&delete e[t],
i}finally{$.shift()}}function i(e,n,i){for(var o=[],a=it.$$annotate(e,t,i),s=0,u=a.length;u>s;s++){
var c=a[s];if("string"!=typeof c)throw _i("itkn","Incorrect injection token! Expected service name as string, got {0}",c);
o.push(n&&n.hasOwnProperty(c)?n[c]:r(c,i))}return o}function o(e){return 11>=Hr?!1:"function"==typeof e&&/^(?:class\b|constructor\()/.test(et(e));
}function a(e,t,n,r){"string"==typeof n&&(r=n,n=null);var a=i(e,n,r);return ei(e)&&(e=e[e.length-1]),
o(e)?(a.unshift(null),new(Function.prototype.bind.apply(e,a))):e.apply(t,a)}function s(e,t,n){
var r=ei(e)?e[e.length-1]:e,o=i(e,t,n);return o.unshift(null),new(Function.prototype.bind.apply(r,o));
}return{invoke:a,instantiate:s,get:r,annotate:it.$$annotate,has:function(t){return w.hasOwnProperty(t+v)||e.hasOwnProperty(t);
}}}t=t===!0;var h={},v="Provider",$=[],b=new Qe([],!0),w={$provide:{provider:n(i),
factory:n(s),service:n(u),value:n(c),constant:n(l),decorator:f}},S=w.$injector=d(w,function(e,t){
throw Zr.isString(t)&&$.push(t),_i("unpr","Unknown provider: {0}",$.join(" <- "));
}),C={},A=d(C,function(e,t){var n=S.get(e+v,t);return k.invoke(n.$get,n,void 0,e);
}),k=A;w["$injector"+v]={$get:m(A)};var T=p(e);return k=A.get("$injector"),k.strictDi=t,
r(T,function(e){e&&k.invoke(e)}),k}function ot(){var e=!0;this.disableAutoScrolling=function(){
e=!1},this.$get=["$window","$location","$rootScope",function(t,n,r){function i(e){
var t=null;return Array.prototype.some.call(e,function(e){return"a"===q(e)?(t=e,!0):void 0;
}),t}function o(){var e=s.yOffset;if(E(e))e=e();else if(R(e)){var n=e[0],r=t.getComputedStyle(n);
e="fixed"!==r.position?0:n.getBoundingClientRect().bottom}else w(e)||(e=0);return e;
}function a(e){if(e){e.scrollIntoView();var n=o();if(n){var r=e.getBoundingClientRect().top;
t.scrollBy(0,r-n)}}else t.scrollTo(0,0)}function s(e){e=x(e)?e:n.hash();var t;e?(t=u.getElementById(e))?a(t):(t=i(u.getElementsByName(e)))?a(t):"top"===e&&a(null):a(null);
}var u=t.document;return e&&r.$watch(function(){return n.hash()},function(e,t){(e!==t||""!==e)&&We(function(){
r.$evalAsync(s)})}),s}]}function at(e,t){return e||t?e?t?(ei(e)&&(e=e.join(" ")),
ei(t)&&(t=t.join(" ")),e+" "+t):e:t:""}function st(e){for(var t=0;t<e.length;t++){
var n=e[t];if(n.nodeType===Bi)return n}}function ut(e){x(e)&&(e=e.split(" "));var t=me();
return r(e,function(e){e.length&&(t[e]=!0)}),t}function ct(e){return y(e)?e:{}}function lt(e,t,n,i){
function o(e){try{e.apply(null,B(arguments,1))}finally{if($--,0===$)for(;y.length;)try{
y.pop()()}catch(t){n.error(t)}}}function a(e){var t=e.indexOf("#");return-1===t?"":e.substr(t);
}function s(){E=null,u(),c()}function u(){b=C(),b=g(b)?null:b,_(b,T)&&(b=T),T=b}function c(){
(w!==l.url()||x!==b)&&(w=l.url(),x=b,r(A,function(e){e(l.url(),b)}))}var l=this,f=e.location,p=e.history,h=e.setTimeout,m=e.clearTimeout,v={};
l.isMock=!1;var $=0,y=[];l.$$completeOutstandingRequest=o,l.$$incOutstandingRequestCount=function(){
$++},l.notifyWhenNoOutstandingRequests=function(e){0===$?e():y.push(e)};var b,x,w=f.href,S=t.find("base"),E=null,C=i.history?function(){
try{return p.state}catch(e){}}:d;u(),x=b,l.url=function(t,n,r){if(g(r)&&(r=null),
f!==e.location&&(f=e.location),p!==e.history&&(p=e.history),t){var o=x===r;if(w===t&&(!i.history||o))return l;
var s=w&&Ut(w)===Ut(t);return w=t,x=r,!i.history||s&&o?(s||(E=t),n?f.replace(t):s?f.hash=a(t):f.href=t,
f.href!==t&&(E=t)):(p[n?"replaceState":"pushState"](r,"",t),u(),x=b),E&&(E=t),l}return E||f.href.replace(/%27/g,"'");
},l.state=function(){return b};var A=[],k=!1,T=null;l.onUrlChange=function(t){return k||(i.history&&Br(e).on("popstate",s),
Br(e).on("hashchange",s),k=!0),A.push(t),t},l.$$applicationDestroyed=function(){Br(e).off("hashchange popstate",s);
},l.$$checkUrlChange=c,l.baseHref=function(){var e=S.attr("href");return e?e.replace(/^(https?\:)?\/\/[^\/]*/,""):"";
},l.defer=function(e,t){var n;return $++,n=h(function(){delete v[n],o(e)},t||0),v[n]=!0,
n},l.defer.cancel=function(e){return v[e]?(delete v[e],m(e),o(d),!0):!1}}function ft(){
this.$get=["$window","$log","$sniffer","$document",function(e,t,n,r){return new lt(e,r,t,n);
}]}function pt(){this.$get=function(){function e(e,r){function i(e){e!=p&&(d?d==e&&(d=e.n):d=e,
o(e.n,e.p),o(e,p),p=e,p.n=null)}function o(e,t){e!=t&&(e&&(e.p=t),t&&(t.n=e))}if(e in n)throw t("$cacheFactory")("iid","CacheId '{0}' is already taken!",e);
var a=0,s=c({},r,{id:e}),u=me(),l=r&&r.capacity||Number.MAX_VALUE,f=me(),p=null,d=null;
return n[e]={put:function(e,t){if(!g(t)){if(l<Number.MAX_VALUE){var n=f[e]||(f[e]={
key:e});i(n)}return e in u||a++,u[e]=t,a>l&&this.remove(d.key),t}},get:function(e){
if(l<Number.MAX_VALUE){var t=f[e];if(!t)return;i(t)}return u[e]},remove:function(e){
if(l<Number.MAX_VALUE){var t=f[e];if(!t)return;t==p&&(p=t.p),t==d&&(d=t.n),o(t.n,t.p),
delete f[e]}e in u&&(delete u[e],a--)},removeAll:function(){u=me(),a=0,f=me(),p=d=null;
},destroy:function(){u=null,s=null,f=null,delete n[e]},info:function(){return c({},s,{
size:a})}}}var n={};return e.info=function(){var e={};return r(n,function(t,n){e[n]=t.info();
}),e},e.get=function(e){return n[e]},e}}function dt(){this.$get=["$cacheFactory",function(e){
return e("templates")}]}function ht(){}function mt(t,n){function i(e,t,n){var i=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,o=me();
return r(e,function(e,r){if(e in A)return void(o[r]=A[e]);var a=e.match(i);if(!a)throw Ki("iscp","Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}",t,r,e,n?"controller bindings definition":"isolate scope definition");
o[r]={mode:a[1][0],collection:"*"===a[2],optional:"?"===a[3],attrName:a[4]||r},a[4]&&(A[e]=o[r]);
}),o}function a(e,t){var n={isolateScope:null,bindToController:null};if(y(e.scope)&&(e.bindToController===!0?(n.bindToController=i(e.scope,t,!0),
n.isolateScope={}):n.isolateScope=i(e.scope,t,!1)),y(e.bindToController)&&(n.bindToController=i(e.bindToController,t,!0)),
y(n.bindToController)){var r=e.controller,o=e.controllerAs;if(!r)throw Ki("noctrl","Cannot bind to controller without directive '{0}'s controller.",t);
if(!bt(r,o))throw Ki("noident","Cannot bind to controller without identifier for directive '{0}'.",t);
}return n}function s(e){var t=e.charAt(0);if(!t||t!==Lr(t))throw Ki("baddir","Directive/Component name '{0}' is invalid. The first character must be a lowercase letter",e);
if(e!==e.trim())throw Ki("baddir","Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces",e);
}function u(e){var t=e.require||e.controller&&e.name;return!ei(t)&&y(t)&&r(t,function(e,n){
var r=e.match(S),i=e.substring(r[0].length);i||(t[n]=r[0]+n)}),t}var l={},f="Directive",v=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,b=/(([\w\-]+)(?:\:([^;]+))?;?)/,w=I("ngSrc,ngSrcset,src,srcset"),S=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,C=/^(on[a-z]+|formaction)$/,A=me();
this.directive=function j(e,n){return pe(e,"directive"),x(e)?(s(e),le(n,"directiveFactory"),
l.hasOwnProperty(e)||(l[e]=[],t.factory(e+f,["$injector","$exceptionHandler",function(t,n){
var i=[];return r(l[e],function(r,o){try{var a=t.invoke(r);E(a)?a={compile:m(a)}:!a.compile&&a.link&&(a.compile=m(a.link)),
a.priority=a.priority||0,a.index=o,a.name=a.name||e,a.require=u(a),a.restrict=a.restrict||"EA",
a.$$moduleName=r.$$moduleName,i.push(a)}catch(s){n(s)}}),i}])),l[e].push(n)):r(e,o(j)),
this},this.component=function(e,t){function n(e){function n(t){return E(t)||ei(t)?function(n,r){
return e.invoke(t,this,{$element:n,$attrs:r})}:t}var o=t.template||t.templateUrl?t.template:"",a={
controller:i,controllerAs:bt(t.controller)||t.controllerAs||"$ctrl",template:n(o),
templateUrl:n(t.templateUrl),transclude:t.transclude,scope:{},bindToController:t.bindings||{},
restrict:"E",require:t.require};return r(t,function(e,t){"$"===t.charAt(0)&&(a[t]=e);
}),a}var i=t.controller||function(){};return r(t,function(e,t){"$"===t.charAt(0)&&(n[t]=e,
E(i)&&(i[t]=e))}),n.$inject=["$injector"],this.directive(e,n)},this.aHrefSanitizationWhitelist=function(e){
return $(e)?(n.aHrefSanitizationWhitelist(e),this):n.aHrefSanitizationWhitelist();
},this.imgSrcSanitizationWhitelist=function(e){return $(e)?(n.imgSrcSanitizationWhitelist(e),
this):n.imgSrcSanitizationWhitelist()};var T=!0;this.debugInfoEnabled=function(e){
return $(e)?(T=e,this):T};var N=10;this.onChangesTtl=function(e){return arguments.length?(N=e,
this):N},this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(t,n,i,o,s,u,m,A,j,D){
function M(){try{if(!--we)throw ye=void 0,Ki("infchng","{0} $onChanges() iterations reached. Aborting!\n",N);
m.$apply(function(){for(var e=[],t=0,n=ye.length;n>t;++t)try{ye[t]()}catch(r){e.push(r);
}if(ye=void 0,e.length)throw e})}finally{we++}}function F(e,t){if(t){var n,r,i,o=Object.keys(t);
for(n=0,r=o.length;r>n;n++)i=o[n],this[i]=t[i]}else this.$attr={};this.$$element=e;
}function R(e,t,n){xe.innerHTML="<span "+t+">";var r=xe.firstChild.attributes,i=r[0];
r.removeNamedItem(i.name),i.value=n,e.attributes.setNamedItem(i)}function I(e,t){
try{e.addClass(t)}catch(n){}}function L(t,n,r,i,o){t instanceof Br||(t=Br(t));for(var a=/\S+/,s=0,u=t.length;u>s;s++){
var c=t[s];c.nodeType===pi&&c.nodeValue.match(a)&&Ne(c,t[s]=e.document.createElement("span"));
}var l=H(t,n,t,r,i,o);L.$$addScopeClass(t);var f=null;return function(e,n,r){le(e,"scope"),
o&&o.needsNewScope&&(e=e.$parent.$new()),r=r||{};var i=r.parentBoundTranscludeFn,a=r.transcludeControllers,s=r.futureParentElement;
i&&i.$$boundTransclude&&(i=i.$$boundTransclude),f||(f=V(s));var u;if(u="html"!==f?Br(fe(f,Br("<div>").append(t).html())):n?Oi.clone.call(t):t,
a)for(var c in a)u.data("$"+c+"Controller",a[c].instance);return L.$$addScopeInfo(u,e),
n&&n(u,e),l&&l(e,u,u,i),u}}function V(e){var t=e&&e[0];return t&&"foreignobject"!==q(t)&&Xr.call(t).match(/SVG/)?"svg":"html";
}function H(e,t,n,r,i,o){function a(e,n,r,i){var o,a,s,u,c,l,f,p,m;if(d){var v=n.length;
for(m=new Array(v),c=0;c<h.length;c+=3)f=h[c],m[f]=n[f]}else m=n;for(c=0,l=h.length;l>c;)s=m[h[c++]],
o=h[c++],a=h[c++],o?(o.scope?(u=e.$new(),L.$$addScopeInfo(Br(s),u)):u=e,p=o.transcludeOnThisElement?W(e,o.transclude,i):!o.templateOnThisElement&&i?i:!i&&t?W(e,t):null,
o(a,u,s,r,p)):a&&a(e,s.childNodes,void 0,i)}for(var s,u,c,l,f,p,d,h=[],m=0;m<e.length;m++)s=new F,
u=z(e[m],[],s,0===m?r:void 0,i),c=u.length?Z(u,e[m],s,t,n,null,[],[],o):null,c&&c.scope&&L.$$addScopeClass(s.$$element),
f=c&&c.terminal||!(l=e[m].childNodes)||!l.length?null:H(l,c?(c.transcludeOnThisElement||!c.templateOnThisElement)&&c.transclude:t),
(c||f)&&(h.push(m,c,f),p=!0,d=d||c),o=null;return p?a:null}function W(e,t,n){function r(r,i,o,a,s){
return r||(r=e.$new(!1,s),r.$$transcluded=!0),t(r,i,{parentBoundTranscludeFn:n,transcludeControllers:o,
futureParentElement:a})}var i=r.$$slots=me();for(var o in t.$$slots)t.$$slots[o]?i[o]=W(e,t.$$slots[o],n):i[o]=null;
return r}function z(e,t,n,r,i){var o,a,s=e.nodeType,u=n.$attr;switch(s){case li:ne(t,gt(q(e)),"E",r,i);
for(var c,l,f,p,d,h,m=e.attributes,v=0,g=m&&m.length;g>v;v++){var $=!1,w=!1;c=m[v],
l=c.name,d=ni(c.value),p=gt(l),(h=ke.test(p))&&(l=l.replace(Qi,"").substr(8).replace(/_(.)/g,function(e,t){
return t.toUpperCase()}));var S=p.match(Te);S&&re(S[1])&&($=l,w=l.substr(0,l.length-5)+"end",
l=l.substr(0,l.length-6)),f=gt(l.toLowerCase()),u[f]=l,(h||!n.hasOwnProperty(f))&&(n[f]=d,
ze(e,f)&&(n[f]=!0)),de(e,t,d,f,h),ne(t,f,"A",r,i,$,w)}if(a=e.className,y(a)&&(a=a.animVal),
x(a)&&""!==a)for(;o=b.exec(a);)f=gt(o[2]),ne(t,f,"C",r,i)&&(n[f]=ni(o[3])),a=a.substr(o.index+o[0].length);
break;case pi:if(11===Hr)for(;e.parentNode&&e.nextSibling&&e.nextSibling.nodeType===pi;)e.nodeValue=e.nodeValue+e.nextSibling.nodeValue,
e.parentNode.removeChild(e.nextSibling);ce(t,e.nodeValue);break;case di:G(e,t,n,r,i);
}return t.sort(ae),t}function G(e,t,n,r,i){try{var o=v.exec(e.nodeValue);if(o){var a=gt(o[1]);
ne(t,a,"M",r,i)&&(n[a]=ni(o[2]))}}catch(s){}}function J(e,t,n){var r=[],i=0;if(t&&e.hasAttribute&&e.hasAttribute(t)){
do{if(!e)throw Ki("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.",t,n);
e.nodeType==li&&(e.hasAttribute(t)&&i++,e.hasAttribute(n)&&i--),r.push(e),e=e.nextSibling;
}while(i>0)}else r.push(e);return Br(r)}function X(e,t,n){return function(r,i,o,a,s){
return i=J(i[0],t,n),e(r,i,o,a,s)}}function Y(e,t,n,r,i,o){var a;return e?L(t,n,r,i,o):function(){
return a||(a=L(t,n,r,i,o),t=n=o=null),a.apply(this,arguments)}}function Z(e,t,n,o,a,s,u,l,f){
function p(e,t,n,r){e&&(n&&(e=X(e,n,r)),e.require=h.require,e.directiveName=m,(C===h||h.$$isolateScope)&&(e=ve(e,{
isolateScope:!0})),u.push(e)),t&&(n&&(t=X(t,n,r)),t.require=h.require,t.directiveName=m,
(C===h||h.$$isolateScope)&&(t=ve(t,{isolateScope:!0})),l.push(t))}function d(e,o,a,s,f){
function p(e,t,n,r){var i;if(k(e)||(r=n,n=t,t=e,e=void 0),O&&(i=b),n||(n=O?T.parent():T),
!r)return f(e,t,i,n,P);var o=f.$$slots[r];if(o)return o(e,t,i,n,P);if(g(o))throw Ki("noslot",'No parent directive that requires a transclusion with slot name "{0}". Element: {1}',r,K(T));
}var d,h,m,v,$,b,x,T,N,j;t===a?(N=n,T=n.$$element):(T=Br(a),N=new F(T,n)),$=o,C?v=o.$new(!0):w&&($=o.$parent),
f&&(x=p,x.$$boundTransclude=f,x.isSlotFilled=function(e){return!!f.$$slots[e]}),S&&(b=ee(T,N,x,S,v,o,C)),
C&&(L.$$addScopeInfo(T,v,!0,!(A&&(A===C||A===C.$$originalDirective))),L.$$addScopeClass(T,!0),
v.$$isolateBindings=C.$$isolateBindings,j=$e(o,N,v,v.$$isolateBindings,C),j.removeWatches&&v.$on("$destroy",j.removeWatches));
for(var D in b){var M=S[D],R=b[D],I=M.$$bindings.bindToController;R.identifier&&I?R.bindingInfo=$e($,N,R.instance,I,M):R.bindingInfo={};
var q=R();q!==R.instance&&(R.instance=q,T.data("$"+M.name+"Controller",q),R.bindingInfo.removeWatches&&R.bindingInfo.removeWatches(),
R.bindingInfo=$e($,N,R.instance,I,M))}for(r(S,function(e,t){var n=e.require;e.bindToController&&!ei(n)&&y(n)&&c(b[t].instance,Q(t,n,T,b));
}),r(b,function(e){var t=e.instance;if(E(t.$onChanges))try{t.$onChanges(e.bindingInfo.initialChanges);
}catch(n){i(n)}if(E(t.$onInit))try{t.$onInit()}catch(n){i(n)}E(t.$doCheck)&&($.$watch(function(){
t.$doCheck()}),t.$doCheck()),E(t.$onDestroy)&&$.$on("$destroy",function(){t.$onDestroy();
})}),d=0,h=u.length;h>d;d++)m=u[d],ge(m,m.isolateScope?v:o,T,N,m.require&&Q(m.directiveName,m.require,T,b),x);
var P=o;for(C&&(C.template||null===C.templateUrl)&&(P=v),e&&e(P,a.childNodes,void 0,f),
d=l.length-1;d>=0;d--)m=l[d],ge(m,m.isolateScope?v:o,T,N,m.require&&Q(m.directiveName,m.require,T,b),x);
r(b,function(e){var t=e.instance;E(t.$postLink)&&t.$postLink()})}f=f||{};for(var h,m,v,$,b,x=-Number.MAX_VALUE,w=f.newScopeDirective,S=f.controllerDirectives,C=f.newIsolateScopeDirective,A=f.templateDirective,T=f.nonTlbTranscludeDirective,N=!1,j=!1,O=f.hasElementTranscludeDirective,D=n.$$element=Br(t),M=s,R=o,I=!1,P=!1,V=0,_=e.length;_>V;V++){
h=e[V];var H=h.$$start,W=h.$$end;if(H&&(D=J(t,H,W)),v=void 0,x>h.priority)break;if((b=h.scope)&&(h.templateUrl||(y(b)?(se("new/isolated scope",C||w,h,D),
C=h):se("new/isolated scope",C,h,D)),w=w||h),m=h.name,!I&&(h.replace&&(h.templateUrl||h.template)||h.transclude&&!h.$$tlb)){
for(var G,Z=V+1;G=e[Z++];)if(G.transclude&&!G.$$tlb||G.replace&&(G.templateUrl||G.template)){
P=!0;break}I=!0}if(!h.templateUrl&&h.controller&&(b=h.controller,S=S||me(),se("'"+m+"' controller",S[m],h,D),
S[m]=h),b=h.transclude)if(N=!0,h.$$tlb||(se("transclusion",T,h,D),T=h),"element"==b)O=!0,
x=h.priority,v=D,D=n.$$element=Br(L.$$createComment(m,n[m])),t=D[0],he(a,B(v),t),
v[0].$$parentNode=v[0].parentNode,R=Y(P,v,o,x,M&&M.name,{nonTlbTranscludeDirective:T
});else{var ne=me();if(v=Br(Oe(t)).contents(),y(b)){v=[];var re=me(),ae=me();r(b,function(e,t){
var n="?"===e.charAt(0);e=n?e.substring(1):e,re[e]=t,ne[t]=null,ae[t]=n}),r(D.contents(),function(e){
var t=re[gt(q(e))];t?(ae[t]=!0,ne[t]=ne[t]||[],ne[t].push(e)):v.push(e)}),r(ae,function(e,t){
if(!e)throw Ki("reqslot","Required transclusion slot `{0}` was not filled.",t)});for(var ue in ne)ne[ue]&&(ne[ue]=Y(P,ne[ue],o));
}D.empty(),R=Y(P,v,o,void 0,void 0,{needsNewScope:h.$$isolateScope||h.$$newScope}),
R.$$slots=ne}if(h.template)if(j=!0,se("template",A,h,D),A=h,b=E(h.template)?h.template(D,n):h.template,
b=Ae(b),h.replace){if(M=h,v=Se(b)?[]:yt(fe(h.templateNamespace,ni(b))),t=v[0],1!=v.length||t.nodeType!==li)throw Ki("tplrt","Template for directive '{0}' must have exactly one root element. {1}",m,"");
he(a,D,t);var ce={$attr:{}},le=z(t,[],ce),pe=e.splice(V+1,e.length-(V+1));(C||w)&&te(le,C,w),
e=e.concat(le).concat(pe),ie(n,ce),_=e.length}else D.html(b);if(h.templateUrl)j=!0,
se("template",A,h,D),A=h,h.replace&&(M=h),d=oe(e.splice(V,e.length-V),D,n,a,N&&R,u,l,{
controllerDirectives:S,newScopeDirective:w!==h&&w,newIsolateScopeDirective:C,templateDirective:A,
nonTlbTranscludeDirective:T}),_=e.length;else if(h.compile)try{$=h.compile(D,n,R);
var de=h.$$originalDirective||h;E($)?p(null,U(de,$),H,W):$&&p(U(de,$.pre),U(de,$.post),H,W);
}catch(ye){i(ye,K(D))}h.terminal&&(d.terminal=!0,x=Math.max(x,h.priority))}return d.scope=w&&w.scope===!0,
d.transcludeOnThisElement=N,d.templateOnThisElement=j,d.transclude=R,f.hasElementTranscludeDirective=O,
d}function Q(e,t,n,i){var o;if(x(t)){var a=t.match(S),s=t.substring(a[0].length),u=a[1]||a[3],c="?"===a[2];
if("^^"===u?n=n.parent():(o=i&&i[s],o=o&&o.instance),!o){var l="$"+s+"Controller";
o=u?n.inheritedData(l):n.data(l)}if(!o&&!c)throw Ki("ctreq","Controller '{0}', required by directive '{1}', can't be found!",s,e);
}else if(ei(t)){o=[];for(var f=0,p=t.length;p>f;f++)o[f]=Q(e,t[f],n,i)}else y(t)&&(o={},
r(t,function(t,r){o[r]=Q(e,t,n,i)}));return o||null}function ee(e,t,n,r,i,o,a){var s=me();
for(var c in r){var l=r[c],f={$scope:l===a||l.$$isolateScope?i:o,$element:e,$attrs:t,
$transclude:n},p=l.controller;"@"==p&&(p=t[l.name]);var d=u(p,f,!0,l.controllerAs);
s[l.name]=d,e.data("$"+l.name+"Controller",d.instance)}return s}function te(e,t,n){
for(var r=0,i=e.length;i>r;r++)e[r]=p(e[r],{$$isolateScope:t,$$newScope:n})}function ne(e,n,r,o,s,u,c){
if(n===s)return null;var d=null;if(l.hasOwnProperty(n))for(var h,m=t.get(n+f),v=0,$=m.length;$>v;v++)try{
if(h=m[v],(g(o)||o>h.priority)&&-1!=h.restrict.indexOf(r)){if(u&&(h=p(h,{$$start:u,
$$end:c})),!h.$$bindings){var b=h.$$bindings=a(h,h.name);y(b.isolateScope)&&(h.$$isolateBindings=b.isolateScope);
}e.push(h),d=h}}catch(x){i(x)}return d}function re(e){if(l.hasOwnProperty(e))for(var n,r=t.get(e+f),i=0,o=r.length;o>i;i++)if(n=r[i],
n.multiElement)return!0;return!1}function ie(e,t){var n=t.$attr,i=e.$attr;e.$$element;
r(e,function(r,i){"$"!=i.charAt(0)&&(t[i]&&t[i]!==r&&(r+=("style"===i?";":" ")+t[i]),
e.$set(i,r,!0,n[i]))}),r(t,function(t,r){e.hasOwnProperty(r)||"$"===r.charAt(0)||(e[r]=t,
"class"!==r&&"style"!==r&&(i[r]=n[r]))})}function oe(e,t,n,i,a,s,u,c){var l,f,d=[],h=t[0],m=e.shift(),v=p(m,{
templateUrl:null,transclude:null,replace:null,$$originalDirective:m}),g=E(m.templateUrl)?m.templateUrl(t,n):m.templateUrl,$=m.templateNamespace;
return t.empty(),o(g).then(function(o){var p,b,x,w;if(o=Ae(o),m.replace){if(x=Se(o)?[]:yt(fe($,ni(o))),
p=x[0],1!=x.length||p.nodeType!==li)throw Ki("tplrt","Template for directive '{0}' must have exactly one root element. {1}",m.name,g);
b={$attr:{}},he(i,t,p);var S=z(p,[],b);y(m.scope)&&te(S,!0),e=S.concat(e),ie(n,b);
}else p=h,t.html(o);for(e.unshift(v),l=Z(e,p,n,a,t,m,s,u,c),r(i,function(e,n){e==p&&(i[n]=t[0]);
}),f=H(t[0].childNodes,a);d.length;){var E=d.shift(),C=d.shift(),A=d.shift(),k=d.shift(),T=t[0];
if(!E.$$destroyed){if(C!==h){var N=C.className;c.hasElementTranscludeDirective&&m.replace||(T=Oe(p)),
he(A,Br(C),T),I(Br(T),N)}w=l.transcludeOnThisElement?W(E,l.transclude,k):k,l(f,E,T,i,w);
}}d=null}),function(e,t,n,r,i){var o=i;t.$$destroyed||(d?d.push(t,n,r,o):(l.transcludeOnThisElement&&(o=W(t,l.transclude,i)),
l(f,t,n,r,o)))}}function ae(e,t){var n=t.priority-e.priority;return 0!==n?n:e.name!==t.name?e.name<t.name?-1:1:e.index-t.index;
}function se(e,t,n,r){function i(e){return e?" (module: "+e+")":""}if(t)throw Ki("multidir","Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}",t.name,i(t.$$moduleName),n.name,i(n.$$moduleName),e,K(r));
}function ce(e,t){var r=n(t,!0);r&&e.push({priority:0,compile:function(e){var t=e.parent(),n=!!t.length;
return n&&L.$$addBindingClass(t),function(e,t){var i=t.parent();n||L.$$addBindingClass(i),
L.$$addBindingInfo(i,r.expressions),e.$watch(r,function(e){t[0].nodeValue=e})}}});
}function fe(t,n){switch(t=Lr(t||"html")){case"svg":case"math":var r=e.document.createElement("div");
return r.innerHTML="<"+t+">"+n+"</"+t+">",r.childNodes[0].childNodes;default:return n;
}}function pe(e,t){if("srcdoc"==t)return A.HTML;var n=q(e);return"xlinkHref"==t||"form"==n&&"action"==t||"img"!=n&&("src"==t||"ngSrc"==t)?A.RESOURCE_URL:void 0;
}function de(e,t,r,i,o){var a=pe(e,i);o=w[i]||o;var s=n(r,!0,a,o);if(s){if("multiple"===i&&"select"===q(e))throw Ki("selmulti","Binding to the 'multiple' attribute is not supported. Element: {0}",K(e));
t.push({priority:100,compile:function(){return{pre:function(e,t,u){var c=u.$$observers||(u.$$observers=me());
if(C.test(i))throw Ki("nodomevents","Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
var l=u[i];l!==r&&(s=l&&n(l,!0,a,o),r=l),s&&(u[i]=s(e),(c[i]||(c[i]=[])).$$inter=!0,
(u.$$observers&&u.$$observers[i].$$scope||e).$watch(s,function(e,t){"class"===i&&e!=t?u.$updateClass(e,t):u.$set(i,e);
}))}}}})}}function he(t,n,r){var i,o,a=n[0],s=n.length,u=a.parentNode;if(t)for(i=0,
o=t.length;o>i;i++)if(t[i]==a){t[i++]=r;for(var c=i,l=c+s-1,f=t.length;f>c;c++,l++)f>l?t[c]=t[l]:delete t[c];
t.length-=s-1,t.context===a&&(t.context=r);break}u&&u.replaceChild(r,a);var p=e.document.createDocumentFragment();
for(i=0;s>i;i++)p.appendChild(n[i]);for(Br.hasData(a)&&(Br.data(r,Br.data(a)),Br(a).off("$destroy")),
Br.cleanData(p.querySelectorAll("*")),i=1;s>i;i++)delete n[i];n[0]=r,n.length=1}function ve(e,t){
return c(function(){return e.apply(null,arguments)},e,t)}function ge(e,t,n,r,o,a){
try{e(t,n,r,o,a)}catch(s){i(s,K(n))}}function $e(e,t,i,o,a){function u(t,n,r){E(i.$onChanges)&&n!==r&&(ye||(e.$$postDigest(M),
ye=[]),l||(l={},ye.push(c)),l[t]&&(r=l[t].previousValue),l[t]=new vt(r,n))}function c(){
i.$onChanges(l),l=void 0}var l,f=[],p={};return r(o,function(r,o){var c,l,h,m,v,g=r.attrName,$=r.optional,y=r.mode;
switch(y){case"@":$||qr.call(t,g)||(i[o]=t[g]=void 0),t.$observe(g,function(e){if(x(e)||O(e)){
var t=i[o];u(o,e,t),i[o]=e}}),t.$$observers[g].$$scope=e,c=t[g],x(c)?i[o]=n(c)(e):O(c)&&(i[o]=c),
p[o]=new vt(Zi,i[o]);break;case"=":if(!qr.call(t,g)){if($)break;t[g]=void 0}if($&&!t[g])break;
l=s(t[g]),m=l.literal?_:function(e,t){return e===t||e!==e&&t!==t},h=l.assign||function(){
throw c=i[o]=l(e),Ki("nonassign","Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!",t[g],g,a.name);
},c=i[o]=l(e);var b=function(t){return m(t,i[o])||(m(t,c)?h(e,t=i[o]):i[o]=t),c=t;
};b.$stateful=!0,v=r.collection?e.$watchCollection(t[g],b):e.$watch(s(t[g],b),null,l.literal),
f.push(v);break;case"<":if(!qr.call(t,g)){if($)break;t[g]=void 0}if($&&!t[g])break;
l=s(t[g]);var w=i[o]=l(e);p[o]=new vt(Zi,i[o]),v=e.$watch(l,function(e,t){if(t===e){
if(t===w)return;t=w}u(o,e,t),i[o]=e},l.literal),f.push(v);break;case"&":if(l=t.hasOwnProperty(g)?s(t[g]):d,
l===d&&$)break;i[o]=function(t){return l(e,t)}}}),{initialChanges:p,removeWatches:f.length&&function(){
for(var e=0,t=f.length;t>e;++e)f[e]()}}}var ye,be=/^\w/,xe=e.document.createElement("div"),we=N;
F.prototype={$normalize:gt,$addClass:function(e){e&&e.length>0&&j.addClass(this.$$element,e);
},$removeClass:function(e){e&&e.length>0&&j.removeClass(this.$$element,e)},$updateClass:function(e,t){
var n=$t(e,t);n&&n.length&&j.addClass(this.$$element,n);var r=$t(t,e);r&&r.length&&j.removeClass(this.$$element,r);
},$set:function(e,t,n,o){var a,s=this.$$element[0],u=ze(s,e),c=Ge(e),l=e;if(u?(this.$$element.prop(e,t),
o=u):c&&(this[c]=t,l=c),this[e]=t,o?this.$attr[e]=o:(o=this.$attr[e],o||(this.$attr[e]=o=ue(e,"-"))),
a=q(this.$$element),"a"===a&&("href"===e||"xlinkHref"===e)||"img"===a&&"src"===e)this[e]=t=D(t,"src"===e);else if("img"===a&&"srcset"===e&&$(t)){
for(var f="",p=ni(t),d=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,h=/\s/.test(p)?d:/(,)/,m=p.split(h),v=Math.floor(m.length/2),y=0;v>y;y++){
var b=2*y;f+=D(ni(m[b]),!0),f+=" "+ni(m[b+1])}var x=ni(m[2*y]).split(/\s/);f+=D(ni(x[0]),!0),
2===x.length&&(f+=" "+ni(x[1])),this[e]=t=f}n!==!1&&(null===t||g(t)?this.$$element.removeAttr(o):be.test(o)?this.$$element.attr(o,t):R(this.$$element[0],o,t));
var w=this.$$observers;w&&r(w[l],function(e){try{e(t)}catch(n){i(n)}})},$observe:function(e,t){
var n=this,r=n.$$observers||(n.$$observers=me()),i=r[e]||(r[e]=[]);return i.push(t),
m.$evalAsync(function(){i.$$inter||!n.hasOwnProperty(e)||g(n[e])||t(n[e])}),function(){
P(i,t)}}};var Ee=n.startSymbol(),Ce=n.endSymbol(),Ae="{{"==Ee&&"}}"==Ce?h:function(e){
return e.replace(/\{\{/g,Ee).replace(/}}/g,Ce)},ke=/^ngAttr[A-Z]/,Te=/^(.+)Start$/;
return L.$$addBindingInfo=T?function(e,t){var n=e.data("$binding")||[];ei(t)?n=n.concat(t):n.push(t),
e.data("$binding",n)}:d,L.$$addBindingClass=T?function(e){I(e,"ng-binding")}:d,L.$$addScopeInfo=T?function(e,t,n,r){
var i=n?r?"$isolateScopeNoTemplate":"$isolateScope":"$scope";e.data(i,t)}:d,L.$$addScopeClass=T?function(e,t){
I(e,t?"ng-isolate-scope":"ng-scope")}:d,L.$$createComment=function(t,n){var r="";return T&&(r=" "+(t||"")+": ",
n&&(r+=n+" ")),e.document.createComment(r)},L}]}function vt(e,t){this.previousValue=e,
this.currentValue=t}function gt(e){return we(e.replace(Qi,""))}function $t(e,t){var n="",r=e.split(/\s+/),i=t.split(/\s+/);
e:for(var o=0;o<r.length;o++){for(var a=r[o],s=0;s<i.length;s++)if(a==i[s])continue e;
n+=(n.length>0?" ":"")+a}return n}function yt(e){e=Br(e);var t=e.length;if(1>=t)return e;
for(;t--;){var n=e[t];n.nodeType===di&&Gr.call(e,t,1)}return e}function bt(e,t){if(t&&x(t))return t;
if(x(e)){var n=to.exec(e);if(n)return n[3]}}function xt(){var e={},n=!1;this.has=function(t){
return e.hasOwnProperty(t)},this.register=function(t,n){pe(t,"controller"),y(t)?c(e,t):e[t]=n;
},this.allowGlobals=function(){n=!0},this.$get=["$injector","$window",function(r,i){
function o(e,n,r,i){if(!e||!y(e.$scope))throw t("$controller")("noscp","Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",i,n);
e.$scope[n]=r}return function(t,a,s,u){var l,f,p,d;if(s=s===!0,u&&x(u)&&(d=u),x(t)){
if(f=t.match(to),!f)throw eo("ctrlfmt","Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.",t);
p=f[1],d=d||f[3],t=e.hasOwnProperty(p)?e[p]:de(a.$scope,p,!0)||(n?de(i,p,!0):void 0),
fe(t,p,!0)}if(s){var h=(ei(t)?t[t.length-1]:t).prototype;l=Object.create(h||null),
d&&o(a,d,l,p||t.name);var m;return m=c(function(){var e=r.invoke(t,l,a,p);return e!==l&&(y(e)||E(e))&&(l=e,
d&&o(a,d,l,p||t.name)),l},{instance:l,identifier:d})}return l=r.instantiate(t,a,p),
d&&o(a,d,l,p||t.name),l}}]}function wt(){this.$get=["$window",function(e){return Br(e.document);
}]}function St(){this.$get=["$log",function(e){return function(t,n){e.error.apply(e,arguments);
}}]}function Et(e){return y(e)?S(e)?e.toISOString():z(e):e}function Ct(){this.$get=function(){
return function(e){if(!e)return"";var t=[];return i(e,function(e,n){null===e||g(e)||(ei(e)?r(e,function(e){
t.push(ne(n)+"="+ne(Et(e)))}):t.push(ne(n)+"="+ne(Et(e))))}),t.join("&")}}}function At(){
this.$get=function(){return function(e){function t(e,o,a){null===e||g(e)||(ei(e)?r(e,function(e,n){
t(e,o+"["+(y(e)?n:"")+"]")}):y(e)&&!S(e)?i(e,function(e,n){t(e,o+(a?"":"[")+n+(a?"":"]"));
}):n.push(ne(o)+"="+ne(Et(e))))}if(!e)return"";var n=[];return t(e,"",!0),n.join("&");
}}}function kt(e,t){if(x(e)){var n=e.replace(so,"").trim();if(n){var r=t("Content-Type");
(r&&0===r.indexOf(ro)||Tt(n))&&(e=G(n))}}return e}function Tt(e){var t=e.match(oo);
return t&&ao[t[0]].test(e)}function Nt(e){function t(e,t){e&&(i[e]=i[e]?i[e]+", "+t:t);
}var n,i=me();return x(e)?r(e.split("\n"),function(e){n=e.indexOf(":"),t(Lr(ni(e.substr(0,n))),ni(e.substr(n+1)));
}):y(e)&&r(e,function(e,n){t(Lr(n),ni(e))}),i}function jt(e){var t;return function(n){
if(t||(t=Nt(e)),n){var r=t[Lr(n)];return void 0===r&&(r=null),r}return t}}function Ot(e,t,n,i){
return E(i)?i(e,t,n):(r(i,function(r){e=r(e,t,n)}),e)}function Dt(e){return e>=200&&300>e;
}function Mt(){var e=this.defaults={transformResponse:[kt],transformRequest:[function(e){
return!y(e)||T(e)||j(e)||N(e)?e:z(e)}],headers:{common:{Accept:"application/json, text/plain, */*"
},post:ge(io),put:ge(io),patch:ge(io)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",
paramSerializer:"$httpParamSerializer"},n=!1;this.useApplyAsync=function(e){return $(e)?(n=!!e,
this):n};var i=!0;this.useLegacyPromiseExtensions=function(e){return $(e)?(i=!!e,
this):i};var o=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(a,s,u,l,f,p){
function d(n){function o(e,t){for(var n=0,r=t.length;r>n;){var i=t[n++],o=t[n++];e=e.then(i,o);
}return t.length=0,e}function a(e,t){var n,i={};return r(e,function(e,r){E(e)?(n=e(t),
null!=n&&(i[r]=n)):i[r]=e}),i}function s(t){var n,r,i,o=e.headers,s=c({},t.headers);
o=c({},o.common,o[Lr(t.method)]);e:for(n in o){r=Lr(n);for(i in s)if(Lr(i)===r)continue e;
s[n]=o[n]}return a(s,ge(t))}function u(t){var n=t.headers,i=Ot(t.data,jt(n),void 0,t.transformRequest);
return g(i)&&r(n,function(e,t){"content-type"===Lr(t)&&delete n[t]}),g(t.withCredentials)&&!g(e.withCredentials)&&(t.withCredentials=e.withCredentials),
v(t,i).then(l,l)}function l(e){var t=c({},e);return t.data=Ot(e.data,e.headers,e.status,d.transformResponse),
Dt(e.status)?t:f.reject(t)}if(!y(n))throw t("$http")("badreq","Http request configuration must be an object.  Received: {0}",n);
if(!x(n.url))throw t("$http")("badreq","Http request configuration url must be a string.  Received: {0}",n.url);
var d=c({method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse,
paramSerializer:e.paramSerializer},n);d.headers=s(n),d.method=Pr(d.method),d.paramSerializer=x(d.paramSerializer)?p.get(d.paramSerializer):d.paramSerializer;
var h=[],m=[],$=f.when(d);return r(S,function(e){(e.request||e.requestError)&&h.unshift(e.request,e.requestError),
(e.response||e.responseError)&&m.push(e.response,e.responseError)}),$=o($,h),$=$.then(u),
$=o($,m),i?($.success=function(e){return fe(e,"fn"),$.then(function(t){e(t.data,t.status,t.headers,d);
}),$},$.error=function(e){return fe(e,"fn"),$.then(null,function(t){e(t.data,t.status,t.headers,d);
}),$}):($.success=co("success"),$.error=co("error")),$}function h(e){r(arguments,function(e){
d[e]=function(t,n){return d(c({},n||{},{method:e,url:t}))}})}function m(e){r(arguments,function(e){
d[e]=function(t,n,r){return d(c({},r||{},{method:e,url:t,data:n}))}})}function v(t,i){
function o(e){if(e){var t={};return r(e,function(e,r){t[r]=function(t){function r(){
e(t)}n?l.$applyAsync(r):l.$$phase?r():l.$apply(r)}}),t}}function u(e,t,r,i){function o(){
c(t,e,r,i)}m&&(Dt(e)?m.put(C,[e,t,Nt(r),i]):m.remove(C)),n?l.$applyAsync(o):(o(),
l.$$phase||l.$apply())}function c(e,n,r,i){n=n>=-1?n:0,(Dt(n)?x.resolve:x.reject)({
data:e,status:n,headers:jt(r),config:t,statusText:i})}function p(e){c(e.data,e.status,ge(e.headers()),e.statusText);
}function h(){var e=d.pendingRequests.indexOf(t);-1!==e&&d.pendingRequests.splice(e,1);
}var m,v,x=f.defer(),S=x.promise,E=t.headers,C=b(t.url,t.paramSerializer(t.params));
if(d.pendingRequests.push(t),S.then(h,h),!t.cache&&!e.cache||t.cache===!1||"GET"!==t.method&&"JSONP"!==t.method||(m=y(t.cache)?t.cache:y(e.cache)?e.cache:w),
m&&(v=m.get(C),$(v)?D(v)?v.then(p,p):ei(v)?c(v[1],v[0],ge(v[2]),v[3]):c(v,200,{},"OK"):m.put(C,S)),
g(v)){var A=In(t.url)?s()[t.xsrfCookieName||e.xsrfCookieName]:void 0;A&&(E[t.xsrfHeaderName||e.xsrfHeaderName]=A),
a(t.method,C,i,u,E,t.timeout,t.withCredentials,t.responseType,o(t.eventHandlers),o(t.uploadEventHandlers));
}return S}function b(e,t){return t.length>0&&(e+=(-1==e.indexOf("?")?"?":"&")+t),
e}var w=u("$http");e.paramSerializer=x(e.paramSerializer)?p.get(e.paramSerializer):e.paramSerializer;
var S=[];return r(o,function(e){S.unshift(x(e)?p.get(e):p.invoke(e))}),d.pendingRequests=[],
h("get","delete","head","jsonp"),m("post","put","patch"),d.defaults=e,d}]}function Ft(){
this.$get=function(){return function(){return new e.XMLHttpRequest}}}function Rt(){
this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(e,t,n,r){
return It(e,r,e.defer,t,n[0])}]}function It(e,t,n,i,o){function a(e,t,n){e=e.replace("JSON_CALLBACK",t);
var r=o.createElement("script"),a=null;return r.type="text/javascript",r.src=e,r.async=!0,
a=function(e){bi(r,"load",a),bi(r,"error",a),o.body.removeChild(r),r=null;var s=-1,u="unknown";
e&&("load"!==e.type||i.wasCalled(t)||(e={type:"error"}),u=e.type,s="error"===e.type?404:200),
n&&n(s,u)},yi(r,"load",a),yi(r,"error",a),o.body.appendChild(r),a}return function(o,s,u,c,l,f,p,h,m,v){
function y(){w&&w(),S&&S.abort()}function b(t,r,i,o,a){$(A)&&n.cancel(A),w=S=null,
t(r,i,o,a),e.$$completeOutstandingRequest(d)}if(e.$$incOutstandingRequestCount(),
s=s||e.url(),"jsonp"===Lr(o))var x=i.createCallback(s),w=a(s,x,function(e,t){var n=200===e&&i.getResponse(x);
b(c,e,n,"",t),i.removeCallback(x)});else{var S=t(o,s);S.open(o,s,!0),r(l,function(e,t){
$(e)&&S.setRequestHeader(t,e)}),S.onload=function(){var e=S.statusText||"",t="response"in S?S.response:S.responseText,n=1223===S.status?204:S.status;
0===n&&(n=t?200:"file"==Rn(s).protocol?404:0),b(c,n,t,S.getAllResponseHeaders(),e);
};var E=function(){b(c,-1,null,null,"")};if(S.onerror=E,S.onabort=E,r(m,function(e,t){
S.addEventListener(t,e)}),r(v,function(e,t){S.upload.addEventListener(t,e)}),p&&(S.withCredentials=!0),
h)try{S.responseType=h}catch(C){if("json"!==h)throw C}S.send(g(u)?null:u)}if(f>0)var A=n(y,f);else D(f)&&f.then(y);
}}function qt(){var e="{{",t="}}";this.startSymbol=function(t){return t?(e=t,this):e;
},this.endSymbol=function(e){return e?(t=e,this):t},this.$get=["$parse","$exceptionHandler","$sce",function(n,r,i){
function o(e){return"\\\\\\"+e}function a(n){return n.replace(d,e).replace(h,t)}function s(e){
if(null==e)return"";switch(typeof e){case"string":break;case"number":e=""+e;break;
default:e=z(e)}return e}function u(e,t,n,r){var i;return i=e.$watch(function(e){return i(),
r(e)},t,n)}function l(o,l,d,h){function v(e){try{return e=D(e),h&&!$(e)?e:s(e)}catch(t){
r(lo.interr(o,t))}}if(!o.length||-1===o.indexOf(e)){var y;if(!l){var b=a(o);y=m(b),
y.exp=o,y.expressions=[],y.$$watchDelegate=u}return y}h=!!h;for(var x,w,S,C=0,A=[],k=[],T=o.length,N=[],j=[];T>C;){
if(-1==(x=o.indexOf(e,C))||-1==(w=o.indexOf(t,x+f))){C!==T&&N.push(a(o.substring(C)));
break}C!==x&&N.push(a(o.substring(C,x))),S=o.substring(x+f,w),A.push(S),k.push(n(S,v)),
C=w+p,j.push(N.length),N.push("")}if(d&&N.length>1&&lo.throwNoconcat(o),!l||A.length){
var O=function(e){for(var t=0,n=A.length;n>t;t++){if(h&&g(e[t]))return;N[j[t]]=e[t];
}return N.join("")},D=function(e){return d?i.getTrusted(d,e):i.valueOf(e)};return c(function(e){
var t=0,n=A.length,i=new Array(n);try{for(;n>t;t++)i[t]=k[t](e);return O(i)}catch(a){
r(lo.interr(o,a))}},{exp:o,expressions:A,$$watchDelegate:function(e,t){var n;return e.$watchGroup(k,function(r,i){
var o=O(r);E(t)&&t.call(this,o,r!==i?n:o,e),n=o})}})}}var f=e.length,p=t.length,d=new RegExp(e.replace(/./g,o),"g"),h=new RegExp(t.replace(/./g,o),"g");
return l.startSymbol=function(){return e},l.endSymbol=function(){return t},l}]}function Lt(){
this.$get=["$rootScope","$window","$q","$$q","$browser",function(e,t,n,r,i){function o(o,s,u,c){
function l(){f?o.apply(null,p):o(m)}var f=arguments.length>4,p=f?B(arguments,4):[],d=t.setInterval,h=t.clearInterval,m=0,v=$(c)&&!c,g=(v?r:n).defer(),y=g.promise;
return u=$(u)?u:0,y.$$intervalId=d(function(){v?i.defer(l):e.$evalAsync(l),g.notify(m++),
u>0&&m>=u&&(g.resolve(m),h(y.$$intervalId),delete a[y.$$intervalId]),v||e.$apply();
},s),a[y.$$intervalId]=g,y}var a={};return o.cancel=function(e){return e&&e.$$intervalId in a?(a[e.$$intervalId].reject("canceled"),
t.clearInterval(e.$$intervalId),delete a[e.$$intervalId],!0):!1},o}]}function Pt(e){
for(var t=e.split("/"),n=t.length;n--;)t[n]=te(t[n]);return t.join("/")}function Vt(e,t){
var n=Rn(e);t.$$protocol=n.protocol,t.$$host=n.hostname,t.$$port=f(n.port)||ho[n.protocol]||null;
}function _t(e,t){var n="/"!==e.charAt(0);n&&(e="/"+e);var r=Rn(e);t.$$path=decodeURIComponent(n&&"/"===r.pathname.charAt(0)?r.pathname.substring(1):r.pathname),
t.$$search=Q(r.search),t.$$hash=decodeURIComponent(r.hash),t.$$path&&"/"!=t.$$path.charAt(0)&&(t.$$path="/"+t.$$path);
}function Ht(e,t){return 0===e.lastIndexOf(t,0)}function Bt(e,t){return Ht(t,e)?t.substr(e.length):void 0;
}function Ut(e){var t=e.indexOf("#");return-1==t?e:e.substr(0,t)}function Wt(e){return e.replace(/(#.+)|#$/,"$1");
}function zt(e){return e.substr(0,Ut(e).lastIndexOf("/")+1)}function Gt(e){return e.substring(0,e.indexOf("/",e.indexOf("//")+2));
}function Jt(e,t,n){this.$$html5=!0,n=n||"",Vt(e,this),this.$$parse=function(e){var n=Bt(t,e);
if(!x(n))throw mo("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',e,t);
_t(n,this),this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){
var e=ee(this.$$search),n=this.$$hash?"#"+te(this.$$hash):"";this.$$url=Pt(this.$$path)+(e?"?"+e:"")+n,
this.$$absUrl=t+this.$$url.substr(1)},this.$$parseLinkUrl=function(r,i){if(i&&"#"===i[0])return this.hash(i.slice(1)),
!0;var o,a,s;return $(o=Bt(e,r))?(a=o,s=$(o=Bt(n,o))?t+(Bt("/",o)||o):e+a):$(o=Bt(t,r))?s=t+o:t==r+"/"&&(s=t),
s&&this.$$parse(s),!!s}}function Xt(e,t,n){Vt(e,this),this.$$parse=function(r){function i(e,t,n){
var r,i=/^\/[A-Z]:(\/.*)/;return Ht(t,n)&&(t=t.replace(n,"")),i.exec(t)?e:(r=i.exec(e),
r?r[1]:e)}var o,a=Bt(e,r)||Bt(t,r);g(a)||"#"!==a.charAt(0)?this.$$html5?o=a:(o="",
g(a)&&(e=r,this.replace())):(o=Bt(n,a),g(o)&&(o=a)),_t(o,this),this.$$path=i(this.$$path,o,e),
this.$$compose()},this.$$compose=function(){var t=ee(this.$$search),r=this.$$hash?"#"+te(this.$$hash):"";
this.$$url=Pt(this.$$path)+(t?"?"+t:"")+r,this.$$absUrl=e+(this.$$url?n+this.$$url:"");
},this.$$parseLinkUrl=function(t,n){return Ut(e)==Ut(t)?(this.$$parse(t),!0):!1}}
function Yt(e,t,n){this.$$html5=!0,Xt.apply(this,arguments),this.$$parseLinkUrl=function(r,i){
if(i&&"#"===i[0])return this.hash(i.slice(1)),!0;var o,a;return e==Ut(r)?o=r:(a=Bt(t,r))?o=e+n+a:t===r+"/"&&(o=t),
o&&this.$$parse(o),!!o},this.$$compose=function(){var t=ee(this.$$search),r=this.$$hash?"#"+te(this.$$hash):"";
this.$$url=Pt(this.$$path)+(t?"?"+t:"")+r,this.$$absUrl=e+n+this.$$url}}function Kt(e){
return function(){return this[e]}}function Zt(e,t){return function(n){return g(n)?this[e]:(this[e]=t(n),
this.$$compose(),this)}}function Qt(){var e="",t={enabled:!1,requireBase:!0,rewriteLinks:!0
};this.hashPrefix=function(t){return $(t)?(e=t,this):e},this.html5Mode=function(e){
return O(e)?(t.enabled=e,this):y(e)?(O(e.enabled)&&(t.enabled=e.enabled),O(e.requireBase)&&(t.requireBase=e.requireBase),
O(e.rewriteLinks)&&(t.rewriteLinks=e.rewriteLinks),this):t},this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(n,r,i,o,a){
function s(e,t,n){var i=c.url(),o=c.$$state;try{r.url(e,t,n),c.$$state=r.state()}catch(a){
throw c.url(i),c.$$state=o,a}}function u(e,t){n.$broadcast("$locationChangeSuccess",c.absUrl(),e,c.$$state,t);
}var c,l,f,p=r.baseHref(),d=r.url();if(t.enabled){if(!p&&t.requireBase)throw mo("nobase","$location in HTML5 mode requires a <base> tag to be present!");
f=Gt(d)+(p||"/"),l=i.history?Jt:Yt}else f=Ut(d),l=Xt;var h=zt(f);c=new l(f,h,"#"+e),
c.$$parseLinkUrl(d,d),c.$$state=r.state();var m=/^\s*(javascript|mailto):/i;o.on("click",function(e){
if(t.rewriteLinks&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&2!=e.which&&2!=e.button){
for(var i=Br(e.target);"a"!==q(i[0]);)if(i[0]===o[0]||!(i=i.parent())[0])return;var s=i.prop("href"),u=i.attr("href")||i.attr("xlink:href");
y(s)&&"[object SVGAnimatedString]"===s.toString()&&(s=Rn(s.animVal).href),m.test(s)||!s||i.attr("target")||e.isDefaultPrevented()||c.$$parseLinkUrl(s,u)&&(e.preventDefault(),
c.absUrl()!=r.url()&&(n.$apply(),a.angular["ff-684208-preventDefault"]=!0))}}),Wt(c.absUrl())!=Wt(d)&&r.url(c.absUrl(),!0);
var v=!0;return r.onUrlChange(function(e,t){return g(Bt(h,e))?void(a.location.href=e):(n.$evalAsync(function(){
var r,i=c.absUrl(),o=c.$$state;e=Wt(e),c.$$parse(e),c.$$state=t,r=n.$broadcast("$locationChangeStart",e,i,t,o).defaultPrevented,
c.absUrl()===e&&(r?(c.$$parse(i),c.$$state=o,s(i,!1,o)):(v=!1,u(i,o)))}),void(n.$$phase||n.$digest()));
}),n.$watch(function(){var e=Wt(r.url()),t=Wt(c.absUrl()),o=r.state(),a=c.$$replace,l=e!==t||c.$$html5&&i.history&&o!==c.$$state;
(v||l)&&(v=!1,n.$evalAsync(function(){var t=c.absUrl(),r=n.$broadcast("$locationChangeStart",t,e,c.$$state,o).defaultPrevented;
c.absUrl()===t&&(r?(c.$$parse(e),c.$$state=o):(l&&s(t,a,o===c.$$state?null:c.$$state),
u(e,o)))})),c.$$replace=!1}),c}]}function en(){var e=!0,t=this;this.debugEnabled=function(t){
return $(t)?(e=t,this):e},this.$get=["$window",function(n){function i(e){return e instanceof Error&&(e.stack?e=e.message&&-1===e.stack.indexOf(e.message)?"Error: "+e.message+"\n"+e.stack:e.stack:e.sourceURL&&(e=e.message+"\n"+e.sourceURL+":"+e.line)),
e}function o(e){var t=n.console||{},o=t[e]||t.log||d,a=!1;try{a=!!o.apply}catch(s){}
return a?function(){var e=[];return r(arguments,function(t){e.push(i(t))}),o.apply(t,e);
}:function(e,t){o(e,null==t?"":t)}}return{log:o("log"),info:o("info"),warn:o("warn"),
error:o("error"),debug:function(){var n=o("debug");return function(){e&&n.apply(t,arguments);
}}()}}]}function tn(e,t){if("__defineGetter__"===e||"__defineSetter__"===e||"__lookupGetter__"===e||"__lookupSetter__"===e||"__proto__"===e)throw go("isecfld","Attempting to access a disallowed field in Angular expressions! Expression: {0}",t);
return e}function nn(e){return e+""}function rn(e,t){if(e){if(e.constructor===e)throw go("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",t);
if(e.window===e)throw go("isecwindow","Referencing the Window in Angular expressions is disallowed! Expression: {0}",t);
if(e.children&&(e.nodeName||e.prop&&e.attr&&e.find))throw go("isecdom","Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",t);
if(e===Object)throw go("isecobj","Referencing Object in Angular expressions is disallowed! Expression: {0}",t);
}return e}function on(e,t){if(e){if(e.constructor===e)throw go("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",t);
if(e===$o||e===yo||e===bo)throw go("isecff","Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}",t);
}}function an(e,t){if(e&&(e===0..constructor||e===(!1).constructor||e==="".constructor||e==={}.constructor||e===[].constructor||e===Function.constructor))throw go("isecaf","Assigning to a constructor is disallowed! Expression: {0}",t);
}function sn(e,t){return"undefined"!=typeof e?e:t}function un(e,t){return"undefined"==typeof e?t:"undefined"==typeof t?e:e+t;
}function cn(e,t){var n=e(t);return!n.$stateful}function ln(e,t){var n,i;switch(e.type){
case Eo.Program:n=!0,r(e.body,function(e){ln(e.expression,t),n=n&&e.expression.constant;
}),e.constant=n;break;case Eo.Literal:e.constant=!0,e.toWatch=[];break;case Eo.UnaryExpression:
ln(e.argument,t),e.constant=e.argument.constant,e.toWatch=e.argument.toWatch;break;
case Eo.BinaryExpression:ln(e.left,t),ln(e.right,t),e.constant=e.left.constant&&e.right.constant,
e.toWatch=e.left.toWatch.concat(e.right.toWatch);break;case Eo.LogicalExpression:
ln(e.left,t),ln(e.right,t),e.constant=e.left.constant&&e.right.constant,e.toWatch=e.constant?[]:[e];
break;case Eo.ConditionalExpression:ln(e.test,t),ln(e.alternate,t),ln(e.consequent,t),
e.constant=e.test.constant&&e.alternate.constant&&e.consequent.constant,e.toWatch=e.constant?[]:[e];
break;case Eo.Identifier:e.constant=!1,e.toWatch=[e];break;case Eo.MemberExpression:
ln(e.object,t),e.computed&&ln(e.property,t),e.constant=e.object.constant&&(!e.computed||e.property.constant),
e.toWatch=[e];break;case Eo.CallExpression:n=e.filter?cn(t,e.callee.name):!1,i=[],
r(e.arguments,function(e){ln(e,t),n=n&&e.constant,e.constant||i.push.apply(i,e.toWatch);
}),e.constant=n,e.toWatch=e.filter&&cn(t,e.callee.name)?i:[e];break;case Eo.AssignmentExpression:
ln(e.left,t),ln(e.right,t),e.constant=e.left.constant&&e.right.constant,e.toWatch=[e];
break;case Eo.ArrayExpression:n=!0,i=[],r(e.elements,function(e){ln(e,t),n=n&&e.constant,
e.constant||i.push.apply(i,e.toWatch)}),e.constant=n,e.toWatch=i;break;case Eo.ObjectExpression:
n=!0,i=[],r(e.properties,function(e){ln(e.value,t),n=n&&e.value.constant&&!e.computed,
e.value.constant||i.push.apply(i,e.value.toWatch)}),e.constant=n,e.toWatch=i;break;
case Eo.ThisExpression:e.constant=!1,e.toWatch=[];break;case Eo.LocalsExpression:
e.constant=!1,e.toWatch=[]}}function fn(e){if(1==e.length){var t=e[0].expression,n=t.toWatch;
return 1!==n.length?n:n[0]!==t?n:void 0}}function pn(e){return e.type===Eo.Identifier||e.type===Eo.MemberExpression;
}function dn(e){return 1===e.body.length&&pn(e.body[0].expression)?{type:Eo.AssignmentExpression,
left:e.body[0].expression,right:{type:Eo.NGValueParameter},operator:"="}:void 0}function hn(e){
return 0===e.body.length||1===e.body.length&&(e.body[0].expression.type===Eo.Literal||e.body[0].expression.type===Eo.ArrayExpression||e.body[0].expression.type===Eo.ObjectExpression);
}function mn(e){return e.constant}function vn(e,t){this.astBuilder=e,this.$filter=t;
}function gn(e,t){this.astBuilder=e,this.$filter=t}function $n(e){return"constructor"==e;
}function yn(e){return E(e.valueOf)?e.valueOf():Ao.call(e)}function bn(){var e,t,n=me(),i=me(),o={
"true":!0,"false":!1,"null":null,undefined:void 0};this.addLiteral=function(e,t){
o[e]=t},this.setIdentifierFns=function(n,r){return e=n,t=r,this},this.$get=["$filter",function(a){
function s(e,t,r){var o,s,c;switch(r=r||b,typeof e){case"string":e=e.trim(),c=e;var v=r?i:n;
if(o=v[c],!o){":"===e.charAt(0)&&":"===e.charAt(1)&&(s=!0,e=e.substring(2));var $=r?y:g,x=new So($),w=new Co(x,a,$);
o=w.parse(e),o.constant?o.$$watchDelegate=h:s?o.$$watchDelegate=o.literal?p:f:o.inputs&&(o.$$watchDelegate=l),
r&&(o=u(o)),v[c]=o}return m(o,t);case"function":return m(e,t);default:return m(d,t);
}}function u(e){function t(t,n,r,i){var o=b;b=!0;try{return e(t,n,r,i)}finally{b=o;
}}if(!e)return e;t.$$watchDelegate=e.$$watchDelegate,t.assign=u(e.assign),t.constant=e.constant,
t.literal=e.literal;for(var n=0;e.inputs&&n<e.inputs.length;++n)e.inputs[n]=u(e.inputs[n]);
return t.inputs=e.inputs,t}function c(e,t){return null==e||null==t?e===t:"object"==typeof e&&(e=yn(e),
"object"==typeof e)?!1:e===t||e!==e&&t!==t}function l(e,t,n,r,i){var o,a=r.inputs;
if(1===a.length){var s=c;return a=a[0],e.$watch(function(e){var t=a(e);return c(t,s)||(o=r(e,void 0,void 0,[t]),
s=t&&yn(t)),o},t,n,i)}for(var u=[],l=[],f=0,p=a.length;p>f;f++)u[f]=c,l[f]=null;return e.$watch(function(e){
for(var t=!1,n=0,i=a.length;i>n;n++){var s=a[n](e);(t||(t=!c(s,u[n])))&&(l[n]=s,u[n]=s&&yn(s));
}return t&&(o=r(e,void 0,void 0,l)),o},t,n,i)}function f(e,t,n,r){var i,o;return i=e.$watch(function(e){
return r(e)},function(e,n,r){o=e,E(t)&&t.apply(this,arguments),$(e)&&r.$$postDigest(function(){
$(o)&&i()})},n)}function p(e,t,n,i){function o(e){var t=!0;return r(e,function(e){
$(e)||(t=!1)}),t}var a,s;return a=e.$watch(function(e){return i(e)},function(e,n,r){
s=e,E(t)&&t.call(this,e,n,r),o(e)&&r.$$postDigest(function(){o(s)&&a()})},n)}function h(e,t,n,r){
var i;return i=e.$watch(function(e){return i(),r(e)},t,n)}function m(e,t){if(!t)return e;
var n=e.$$watchDelegate,r=!1,i=n!==p&&n!==f,o=i?function(n,i,o,a){var s=r&&a?a[0]:e(n,i,o,a);
return t(s,n,i)}:function(n,r,i,o){var a=e(n,r,i,o),s=t(a,n,r);return $(a)?s:a};return e.$$watchDelegate&&e.$$watchDelegate!==l?o.$$watchDelegate=e.$$watchDelegate:t.$stateful||(o.$$watchDelegate=l,
r=!e.inputs,o.inputs=e.inputs?e.inputs:[e]),o}var v=ii().noUnsafeEval,g={csp:v,expensiveChecks:!1,
literals:V(o),isIdentifierStart:E(e)&&e,isIdentifierContinue:E(t)&&t},y={csp:v,expensiveChecks:!0,
literals:V(o),isIdentifierStart:E(e)&&e,isIdentifierContinue:E(t)&&t},b=!1;return s.$$runningExpensiveChecks=function(){
return b},s}]}function xn(){this.$get=["$rootScope","$exceptionHandler",function(e,t){
return Sn(function(t){e.$evalAsync(t)},t)}]}function wn(){this.$get=["$browser","$exceptionHandler",function(e,t){
return Sn(function(t){e.defer(t)},t)}]}function Sn(e,n){function i(){this.$$state={
status:0}}function o(e,t){return function(n){t.call(e,n)}}function a(e){var t,r,i;
i=e.pending,e.processScheduled=!1,e.pending=void 0;for(var o=0,a=i.length;a>o;++o){
r=i[o][0],t=i[o][e.status];try{E(t)?r.resolve(t(e.value)):1===e.status?r.resolve(e.value):r.reject(e.value);
}catch(s){r.reject(s),n(s)}}}function s(t){!t.processScheduled&&t.pending&&(t.processScheduled=!0,
e(function(){a(t)}))}function u(){this.promise=new i}function l(e){var t=new u,n=0,i=ei(e)?[]:{};
return r(e,function(e,r){n++,$(e).then(function(e){i.hasOwnProperty(r)||(i[r]=e,--n||t.resolve(i));
},function(e){i.hasOwnProperty(r)||t.reject(e)})}),0===n&&t.resolve(i),t.promise}
function f(e){var t=d();return r(e,function(e){$(e).then(t.resolve,t.reject)}),t.promise;
}var p=t("$q",TypeError),d=function(){var e=new u;return e.resolve=o(e,e.resolve),
e.reject=o(e,e.reject),e.notify=o(e,e.notify),e};c(i.prototype,{then:function(e,t,n){
if(g(e)&&g(t)&&g(n))return this;var r=new u;return this.$$state.pending=this.$$state.pending||[],
this.$$state.pending.push([r,e,t,n]),this.$$state.status>0&&s(this.$$state),r.promise;
},"catch":function(e){return this.then(null,e)},"finally":function(e,t){return this.then(function(t){
return v(t,!0,e)},function(t){return v(t,!1,e)},t)}}),c(u.prototype,{resolve:function(e){
this.promise.$$state.status||(e===this.promise?this.$$reject(p("qcycle","Expected promise to be resolved with value other than itself '{0}'",e)):this.$$resolve(e));
},$$resolve:function(e){function t(e){u||(u=!0,a.$$resolve(e))}function r(e){u||(u=!0,
a.$$reject(e))}var i,a=this,u=!1;try{(y(e)||E(e))&&(i=e&&e.then),E(i)?(this.promise.$$state.status=-1,
i.call(e,t,r,o(this,this.notify))):(this.promise.$$state.value=e,this.promise.$$state.status=1,
s(this.promise.$$state))}catch(c){r(c),n(c)}},reject:function(e){this.promise.$$state.status||this.$$reject(e);
},$$reject:function(e){this.promise.$$state.value=e,this.promise.$$state.status=2,
s(this.promise.$$state)},notify:function(t){var r=this.promise.$$state.pending;this.promise.$$state.status<=0&&r&&r.length&&e(function(){
for(var e,i,o=0,a=r.length;a>o;o++){i=r[o][0],e=r[o][3];try{i.notify(E(e)?e(t):t);
}catch(s){n(s)}}})}});var h=function(e){var t=new u;return t.reject(e),t.promise},m=function(e,t){
var n=new u;return t?n.resolve(e):n.reject(e),n.promise},v=function(e,t,n){var r=null;
try{E(n)&&(r=n())}catch(i){return m(i,!1)}return D(r)?r.then(function(){return m(e,t);
},function(e){return m(e,!1)}):m(e,t)},$=function(e,t,n,r){var i=new u;return i.resolve(e),
i.promise.then(t,n,r)},b=$,x=function(e){function t(e){r.resolve(e)}function n(e){
r.reject(e)}if(!E(e))throw p("norslvr","Expected resolverFn, got '{0}'",e);var r=new u;
return e(t,n),r.promise};return x.prototype=i.prototype,x.defer=d,x.reject=h,x.when=$,
x.resolve=b,x.all=l,x.race=f,x}function En(){this.$get=["$window","$timeout",function(e,t){
var n=e.requestAnimationFrame||e.webkitRequestAnimationFrame,r=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.webkitCancelRequestAnimationFrame,i=!!n,o=i?function(e){
var t=n(e);return function(){r(t)}}:function(e){var n=t(e,16.66,!1);return function(){
t.cancel(n)}};return o.supported=i,o}]}function Cn(){function e(e){function t(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,
this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$id=a(),this.$$ChildScope=null;
}return t.prototype=e,t}var i=10,o=t("$rootScope"),s=null,u=null;this.digestTtl=function(e){
return arguments.length&&(i=e),i},this.$get=["$exceptionHandler","$parse","$browser",function(t,c,l){
function f(e){e.currentScope.$$destroyed=!0}function p(e){9===Hr&&(e.$$childHead&&p(e.$$childHead),
e.$$nextSibling&&p(e.$$nextSibling)),e.$parent=e.$$nextSibling=e.$$prevSibling=e.$$childHead=e.$$childTail=e.$root=e.$$watchers=null;
}function h(){this.$id=a(),this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,
this.$root=this,this.$$destroyed=!1,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,
this.$$isolateBindings=null}function m(e){if(C.$$phase)throw o("inprog","{0} already in progress",C.$$phase);
C.$$phase=e}function v(){C.$$phase=null}function $(e,t){do e.$$watchersCount+=t;while(e=e.$parent);
}function b(e,t,n){do e.$$listenerCount[n]-=t,0===e.$$listenerCount[n]&&delete e.$$listenerCount[n];while(e=e.$parent);
}function x(){}function w(){for(;T.length;)try{T.shift()()}catch(e){t(e)}u=null}function S(){
null===u&&(u=l.defer(function(){C.$apply(w)}))}h.prototype={constructor:h,$new:function(t,n){
var r;return n=n||this,t?(r=new h,r.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=e(this)),
r=new this.$$ChildScope),r.$parent=n,r.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=r,
n.$$childTail=r):n.$$childHead=n.$$childTail=r,(t||n!=this)&&r.$on("$destroy",f),
r},$watch:function(e,t,n,r){var i=c(e);if(i.$$watchDelegate)return i.$$watchDelegate(this,t,n,i,e);
var o=this,a=o.$$watchers,u={fn:t,last:x,get:i,exp:r||e,eq:!!n};return s=null,E(t)||(u.fn=d),
a||(a=o.$$watchers=[]),a.unshift(u),$(this,1),function(){P(a,u)>=0&&$(o,-1),s=null;
}},$watchGroup:function(e,t){function n(){u=!1,c?(c=!1,t(o,o,s)):t(o,i,s)}var i=new Array(e.length),o=new Array(e.length),a=[],s=this,u=!1,c=!0;
if(!e.length){var l=!0;return s.$evalAsync(function(){l&&t(o,o,s)}),function(){l=!1;
}}return 1===e.length?this.$watch(e[0],function(e,n,r){o[0]=e,i[0]=n,t(o,e===n?o:i,r);
}):(r(e,function(e,t){var r=s.$watch(e,function(e,r){o[t]=e,i[t]=r,u||(u=!0,s.$evalAsync(n));
});a.push(r)}),function(){for(;a.length;)a.shift()()})},$watchCollection:function(e,t){
function r(e){o=e;var t,r,i,s,u;if(!g(o)){if(y(o))if(n(o)){a!==d&&(a=d,v=a.length=0,
f++),t=o.length,v!==t&&(f++,a.length=v=t);for(var c=0;t>c;c++)u=a[c],s=o[c],i=u!==u&&s!==s,
i||u===s||(f++,a[c]=s)}else{a!==h&&(a=h={},v=0,f++),t=0;for(r in o)qr.call(o,r)&&(t++,
s=o[r],u=a[r],r in a?(i=u!==u&&s!==s,i||u===s||(f++,a[r]=s)):(v++,a[r]=s,f++));if(v>t){
f++;for(r in a)qr.call(o,r)||(v--,delete a[r])}}else a!==o&&(a=o,f++);return f}}function i(){
if(m?(m=!1,t(o,o,u)):t(o,s,u),l)if(y(o))if(n(o)){s=new Array(o.length);for(var e=0;e<o.length;e++)s[e]=o[e];
}else{s={};for(var r in o)qr.call(o,r)&&(s[r]=o[r])}else s=o}r.$stateful=!0;var o,a,s,u=this,l=t.length>1,f=0,p=c(e,r),d=[],h={},m=!0,v=0;
return this.$watch(p,i)},$digest:function(){var e,n,r,a,c,f,p,d,h,g,$,y,b=i,S=this,T=[];
m("$digest"),l.$$checkUrlChange(),this===C&&null!==u&&(l.defer.cancel(u),w()),s=null;
do{d=!1,g=S;for(var j=0;j<A.length;j++){try{y=A[j],y.scope.$eval(y.expression,y.locals);
}catch(O){t(O)}s=null}A.length=0;e:do{if(f=g.$$watchers)for(p=f.length;p--;)try{if(e=f[p])if(c=e.get,
(n=c(g))===(r=e.last)||(e.eq?_(n,r):"number"==typeof n&&"number"==typeof r&&isNaN(n)&&isNaN(r))){
if(e===s){d=!1;break e}}else d=!0,s=e,e.last=e.eq?V(n,null):n,a=e.fn,a(n,r===x?n:r,g),
5>b&&($=4-b,T[$]||(T[$]=[]),T[$].push({msg:E(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,
newVal:n,oldVal:r}))}catch(O){t(O)}if(!(h=g.$$watchersCount&&g.$$childHead||g!==S&&g.$$nextSibling))for(;g!==S&&!(h=g.$$nextSibling);)g=g.$parent;
}while(g=h);if((d||A.length)&&!b--)throw v(),o("infdig","{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",i,T);
}while(d||A.length);for(v();N<k.length;)try{k[N++]()}catch(O){t(O)}k.length=N=0},
$destroy:function(){if(!this.$$destroyed){var e=this.$parent;this.$broadcast("$destroy"),
this.$$destroyed=!0,this===C&&l.$$applicationDestroyed(),$(this,-this.$$watchersCount);
for(var t in this.$$listenerCount)b(this,this.$$listenerCount[t],t);e&&e.$$childHead==this&&(e.$$childHead=this.$$nextSibling),
e&&e.$$childTail==this&&(e.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),
this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=d,
this.$on=this.$watch=this.$watchGroup=function(){return d},this.$$listeners={},this.$$nextSibling=null,
p(this)}},$eval:function(e,t){return c(e)(this,t)},$evalAsync:function(e,t){C.$$phase||A.length||l.defer(function(){
A.length&&C.$digest()}),A.push({scope:this,expression:c(e),locals:t})},$$postDigest:function(e){
k.push(e)},$apply:function(e){try{m("$apply");try{return this.$eval(e)}finally{v();
}}catch(n){t(n)}finally{try{C.$digest()}catch(n){throw t(n),n}}},$applyAsync:function(e){
function t(){n.$eval(e)}var n=this;e&&T.push(t),e=c(e),S()},$on:function(e,t){var n=this.$$listeners[e];
n||(this.$$listeners[e]=n=[]),n.push(t);var r=this;do r.$$listenerCount[e]||(r.$$listenerCount[e]=0),
r.$$listenerCount[e]++;while(r=r.$parent);var i=this;return function(){var r=n.indexOf(t);
-1!==r&&(n[r]=null,b(i,1,e))}},$emit:function(e,n){var r,i,o,a=[],s=this,u=!1,c={
name:e,targetScope:s,stopPropagation:function(){u=!0},preventDefault:function(){c.defaultPrevented=!0;
},defaultPrevented:!1},l=H([c],arguments,1);do{for(r=s.$$listeners[e]||a,c.currentScope=s,
i=0,o=r.length;o>i;i++)if(r[i])try{r[i].apply(null,l)}catch(f){t(f)}else r.splice(i,1),
i--,o--;if(u)return c.currentScope=null,c;s=s.$parent}while(s);return c.currentScope=null,
c},$broadcast:function(e,n){var r=this,i=r,o=r,a={name:e,targetScope:r,preventDefault:function(){
a.defaultPrevented=!0},defaultPrevented:!1};if(!r.$$listenerCount[e])return a;for(var s,u,c,l=H([a],arguments,1);i=o;){
for(a.currentScope=i,s=i.$$listeners[e]||[],u=0,c=s.length;c>u;u++)if(s[u])try{s[u].apply(null,l);
}catch(f){t(f)}else s.splice(u,1),u--,c--;if(!(o=i.$$listenerCount[e]&&i.$$childHead||i!==r&&i.$$nextSibling))for(;i!==r&&!(o=i.$$nextSibling);)i=i.$parent;
}return a.currentScope=null,a}};var C=new h,A=C.$$asyncQueue=[],k=C.$$postDigestQueue=[],T=C.$$applyAsyncQueue=[],N=0;
return C}]}function An(){var e=/^\s*(https?|ftp|mailto|tel|file):/,t=/^\s*((https?|ftp|file|blob):|data:image\/)/;
this.aHrefSanitizationWhitelist=function(t){return $(t)?(e=t,this):e},this.imgSrcSanitizationWhitelist=function(e){
return $(e)?(t=e,this):t},this.$get=function(){return function(n,r){var i,o=r?t:e;
return i=Rn(n).href,""===i||i.match(o)?n:"unsafe:"+i}}}function kn(e){if("self"===e)return e;
if(x(e)){if(e.indexOf("***")>-1)throw ko("iwcard","Illegal sequence *** in string matcher.  String: {0}",e);
return e=ri(e).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*"),new RegExp("^"+e+"$");
}if(C(e))return new RegExp("^"+e.source+"$");throw ko("imatcher",'Matchers may only be "self", string patterns or RegExp objects');
}function Tn(e){var t=[];return $(e)&&r(e,function(e){t.push(kn(e))}),t}function Nn(){
this.SCE_CONTEXTS=To;var e=["self"],t=[];this.resourceUrlWhitelist=function(t){return arguments.length&&(e=Tn(t)),
e},this.resourceUrlBlacklist=function(e){return arguments.length&&(t=Tn(e)),t},this.$get=["$injector",function(n){
function r(e,t){return"self"===e?In(t):!!e.exec(t.href)}function i(n){var i,o,a=Rn(n.toString()),s=!1;
for(i=0,o=e.length;o>i;i++)if(r(e[i],a)){s=!0;break}if(s)for(i=0,o=t.length;o>i;i++)if(r(t[i],a)){
s=!1;break}return s}function o(e){var t=function(e){this.$$unwrapTrustedValue=function(){
return e}};return e&&(t.prototype=new e),t.prototype.valueOf=function(){return this.$$unwrapTrustedValue();
},t.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},
t}function a(e,t){var n=f.hasOwnProperty(e)?f[e]:null;if(!n)throw ko("icontext","Attempted to trust a value in invalid context. Context: {0}; Value: {1}",e,t);
if(null===t||g(t)||""===t)return t;if("string"!=typeof t)throw ko("itype","Attempted to trust a non-string value in a content requiring a string: Context: {0}",e);
return new n(t)}function s(e){return e instanceof l?e.$$unwrapTrustedValue():e}function u(e,t){
if(null===t||g(t)||""===t)return t;var n=f.hasOwnProperty(e)?f[e]:null;if(n&&t instanceof n)return t.$$unwrapTrustedValue();
if(e===To.RESOURCE_URL){if(i(t))return t;throw ko("insecurl","Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",t.toString());
}if(e===To.HTML)return c(t);throw ko("unsafe","Attempting to use an unsafe value in a safe context.");
}var c=function(e){throw ko("unsafe","Attempting to use an unsafe value in a safe context.");
};n.has("$sanitize")&&(c=n.get("$sanitize"));var l=o(),f={};return f[To.HTML]=o(l),
f[To.CSS]=o(l),f[To.URL]=o(l),f[To.JS]=o(l),f[To.RESOURCE_URL]=o(f[To.URL]),{trustAs:a,
getTrusted:u,valueOf:s}}]}function jn(){var e=!0;this.enabled=function(t){return arguments.length&&(e=!!t),
e},this.$get=["$parse","$sceDelegate",function(t,n){if(e&&8>Hr)throw ko("iequirks","Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
var i=ge(To);i.isEnabled=function(){return e},i.trustAs=n.trustAs,i.getTrusted=n.getTrusted,
i.valueOf=n.valueOf,e||(i.trustAs=i.getTrusted=function(e,t){return t},i.valueOf=h),
i.parseAs=function(e,n){var r=t(n);return r.literal&&r.constant?r:t(n,function(t){
return i.getTrusted(e,t)})};var o=i.parseAs,a=i.getTrusted,s=i.trustAs;return r(To,function(e,t){
var n=Lr(t);i[we("parse_as_"+n)]=function(t){return o(e,t)},i[we("get_trusted_"+n)]=function(t){
return a(e,t)},i[we("trust_as_"+n)]=function(t){return s(e,t)}}),i}]}function On(){
this.$get=["$window","$document",function(e,t){var n,r,i={},o=e.chrome&&e.chrome.app&&e.chrome.app.runtime,a=!o&&e.history&&e.history.pushState,s=f((/android (\d+)/.exec(Lr((e.navigator||{}).userAgent))||[])[1]),u=/Boxee/i.test((e.navigator||{}).userAgent),c=t[0]||{},l=/^(Moz|webkit|ms)(?=[A-Z])/,p=c.body&&c.body.style,d=!1,h=!1;
if(p){for(var m in p)if(r=l.exec(m)){n=r[0],n=n[0].toUpperCase()+n.substr(1);break;
}n||(n="WebkitOpacity"in p&&"webkit"),d=!!("transition"in p||n+"Transition"in p),
h=!!("animation"in p||n+"Animation"in p),!s||d&&h||(d=x(p.webkitTransition),h=x(p.webkitAnimation));
}return{history:!(!a||4>s||u),hasEvent:function(e){if("input"===e&&11>=Hr)return!1;
if(g(i[e])){var t=c.createElement("div");i[e]="on"+e in t}return i[e]},csp:ii(),vendorPrefix:n,
transitions:d,animations:h,android:s}}]}function Dn(){var e;this.httpOptions=function(t){
return t?(e=t,this):e},this.$get=["$templateCache","$http","$q","$sce",function(t,n,r,i){
function o(a,s){function u(e){if(!s)throw No("tpload","Failed to load template: {0} (HTTP status: {1} {2})",a,e.status,e.statusText);
return r.reject(e)}o.totalPendingRequests++,(!x(a)||g(t.get(a)))&&(a=i.getTrustedResourceUrl(a));
var l=n.defaults&&n.defaults.transformResponse;return ei(l)?l=l.filter(function(e){
return e!==kt}):l===kt&&(l=null),n.get(a,c({cache:t,transformResponse:l},e))["finally"](function(){
o.totalPendingRequests--}).then(function(e){return t.put(a,e.data),e.data},u)}return o.totalPendingRequests=0,
o}]}function Mn(){this.$get=["$rootScope","$browser","$location",function(e,t,n){
var i={};return i.findBindings=function(e,t,n){var i=e.getElementsByClassName("ng-binding"),o=[];
return r(i,function(e){var i=Zr.element(e).data("$binding");i&&r(i,function(r){if(n){
var i=new RegExp("(^|\\s)"+ri(t)+"(\\s|\\||$)");i.test(r)&&o.push(e)}else-1!=r.indexOf(t)&&o.push(e);
})}),o},i.findModels=function(e,t,n){for(var r=["ng-","data-ng-","ng\\:"],i=0;i<r.length;++i){
var o=n?"=":"*=",a="["+r[i]+"model"+o+'"'+t+'"]',s=e.querySelectorAll(a);if(s.length)return s;
}},i.getLocation=function(){return n.url()},i.setLocation=function(t){t!==n.url()&&(n.url(t),
e.$digest())},i.whenStable=function(e){t.notifyWhenNoOutstandingRequests(e)},i}]}
function Fn(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(e,t,n,r,i){
function o(o,s,u){E(o)||(u=s,s=o,o=d);var c,l=B(arguments,3),f=$(u)&&!u,p=(f?r:n).defer(),h=p.promise;
return c=t.defer(function(){try{p.resolve(o.apply(null,l))}catch(t){p.reject(t),i(t);
}finally{delete a[h.$$timeoutId]}f||e.$apply()},s),h.$$timeoutId=c,a[c]=p,h}var a={};
return o.cancel=function(e){return e&&e.$$timeoutId in a?(a[e.$$timeoutId].reject("canceled"),
delete a[e.$$timeoutId],t.defer.cancel(e.$$timeoutId)):!1},o}]}function Rn(e){var t=e;
return Hr&&(jo.setAttribute("href",t),t=jo.href),jo.setAttribute("href",t),{href:jo.href,
protocol:jo.protocol?jo.protocol.replace(/:$/,""):"",host:jo.host,search:jo.search?jo.search.replace(/^\?/,""):"",
hash:jo.hash?jo.hash.replace(/^#/,""):"",hostname:jo.hostname,port:jo.port,pathname:"/"===jo.pathname.charAt(0)?jo.pathname:"/"+jo.pathname
}}function In(e){var t=x(e)?Rn(e):e;return t.protocol===Oo.protocol&&t.host===Oo.host;
}function qn(){this.$get=m(e)}function Ln(e){function t(e){try{return decodeURIComponent(e);
}catch(t){return e}}var n=e[0]||{},r={},i="";return function(){var e,o,a,s,u,c=n.cookie||"";
if(c!==i)for(i=c,e=i.split("; "),r={},a=0;a<e.length;a++)o=e[a],s=o.indexOf("="),
s>0&&(u=t(o.substring(0,s)),g(r[u])&&(r[u]=t(o.substring(s+1))));return r}}function Pn(){
this.$get=Ln}function Vn(e){function t(i,o){if(y(i)){var a={};return r(i,function(e,n){
a[n]=t(n,e)}),a}return e.factory(i+n,o)}var n="Filter";this.register=t,this.$get=["$injector",function(e){
return function(t){return e.get(t+n)}}],t("currency",Wn),t("date",ar),t("filter",_n),
t("json",sr),t("limitTo",ur),t("lowercase",Lo),t("number",zn),t("orderBy",lr),t("uppercase",Po);
}function _n(){return function(e,r,i,o){if(!n(e)){if(null==e)return e;throw t("filter")("notarray","Expected array but received: {0}",e);
}o=o||"$";var a,s,u=Un(r);switch(u){case"function":a=r;break;case"boolean":case"null":
case"number":case"string":s=!0;case"object":a=Hn(r,i,o,s);break;default:return e}
return Array.prototype.filter.call(e,a)}}function Hn(e,t,n,r){var i,o=y(e)&&n in e;
return t===!0?t=_:E(t)||(t=function(e,t){return g(e)?!1:null===e||null===t?e===t:y(t)||y(e)&&!v(e)?!1:(e=Lr(""+e),
t=Lr(""+t),-1!==e.indexOf(t))}),i=function(i){return o&&!y(i)?Bn(i,e[n],t,n,!1):Bn(i,e,t,n,r);
}}function Bn(e,t,n,r,i,o){var a=Un(e),s=Un(t);if("string"===s&&"!"===t.charAt(0))return!Bn(e,t.substring(1),n,r,i);
if(ei(e))return e.some(function(e){return Bn(e,t,n,r,i)});switch(a){case"object":
var u;if(i){for(u in e)if("$"!==u.charAt(0)&&Bn(e[u],t,n,r,!0))return!0;return o?!1:Bn(e,t,n,r,!1);
}if("object"===s){for(u in t){var c=t[u];if(!E(c)&&!g(c)){var l=u===r,f=l?e:e[u];if(!Bn(f,c,n,r,l,l))return!1;
}}return!0}return n(e,t);case"function":return!1;default:return n(e,t)}}function Un(e){
return null===e?"null":typeof e}function Wn(e){var t=e.NUMBER_FORMATS;return function(e,n,r){
return g(n)&&(n=t.CURRENCY_SYM),g(r)&&(r=t.PATTERNS[1].maxFrac),null==e?e:Xn(e,t.PATTERNS[1],t.GROUP_SEP,t.DECIMAL_SEP,r).replace(/\u00A4/g,n);
}}function zn(e){var t=e.NUMBER_FORMATS;return function(e,n){return null==e?e:Xn(e,t.PATTERNS[0],t.GROUP_SEP,t.DECIMAL_SEP,n);
}}function Gn(e){var t,n,r,i,o,a=0;for((n=e.indexOf(Mo))>-1&&(e=e.replace(Mo,"")),
(r=e.search(/e/i))>0?(0>n&&(n=r),n+=+e.slice(r+1),e=e.substring(0,r)):0>n&&(n=e.length),
r=0;e.charAt(r)==Fo;r++);if(r==(o=e.length))t=[0],n=1;else{for(o--;e.charAt(o)==Fo;)o--;
for(n-=r,t=[],i=0;o>=r;r++,i++)t[i]=+e.charAt(r)}return n>Do&&(t=t.splice(0,Do-1),
a=n-1,n=1),{d:t,e:a,i:n}}function Jn(e,t,n,r){var i=e.d,o=i.length-e.i;t=g(t)?Math.min(Math.max(n,o),r):+t;
var a=t+e.i,s=i[a];if(a>0){i.splice(Math.max(e.i,a));for(var u=a;u<i.length;u++)i[u]=0;
}else{o=Math.max(0,o),e.i=1,i.length=Math.max(1,a=t+1),i[0]=0;for(var c=1;a>c;c++)i[c]=0;
}if(s>=5)if(0>a-1){for(var l=0;l>a;l--)i.unshift(0),e.i++;i.unshift(1),e.i++}else i[a-1]++;
for(;o<Math.max(0,t);o++)i.push(0);var f=i.reduceRight(function(e,t,n,r){return t+=e,
r[n]=t%10,Math.floor(t/10)},0);f&&(i.unshift(f),e.i++)}function Xn(e,t,n,r,i){if(!x(e)&&!w(e)||isNaN(e))return"";
var o,a=!isFinite(e),s=!1,u=Math.abs(e)+"",c="";if(a)c="∞";else{o=Gn(u),Jn(o,i,t.minFrac,t.maxFrac);
var l=o.d,f=o.i,p=o.e,d=[];for(s=l.reduce(function(e,t){return e&&!t},!0);0>f;)l.unshift(0),
f++;f>0?d=l.splice(f,l.length):(d=l,l=[0]);var h=[];for(l.length>=t.lgSize&&h.unshift(l.splice(-t.lgSize,l.length).join(""));l.length>t.gSize;)h.unshift(l.splice(-t.gSize,l.length).join(""));
l.length&&h.unshift(l.join("")),c=h.join(n),d.length&&(c+=r+d.join("")),p&&(c+="e+"+p);
}return 0>e&&!s?t.negPre+c+t.negSuf:t.posPre+c+t.posSuf}function Yn(e,t,n,r){var i="";
for((0>e||r&&0>=e)&&(r?e=-e+1:(e=-e,i="-")),e=""+e;e.length<t;)e=Fo+e;return n&&(e=e.substr(e.length-t)),
i+e}function Kn(e,t,n,r,i){return n=n||0,function(o){var a=o["get"+e]();return(n>0||a>-n)&&(a+=n),
0===a&&-12==n&&(a=12),Yn(a,t,r,i)}}function Zn(e,t,n){return function(r,i){var o=r["get"+e](),a=(n?"STANDALONE":"")+(t?"SHORT":""),s=Pr(a+e);
return i[s][o]}}function Qn(e,t,n){var r=-1*n,i=r>=0?"+":"";return i+=Yn(Math[r>0?"floor":"ceil"](r/60),2)+Yn(Math.abs(r%60),2);
}function er(e){var t=new Date(e,0,1).getDay();return new Date(e,0,(4>=t?5:12)-t);
}function tr(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+(4-e.getDay()));
}function nr(e){return function(t){var n=er(t.getFullYear()),r=tr(t),i=+r-+n,o=1+Math.round(i/6048e5);
return Yn(o,e)}}function rr(e,t){return e.getHours()<12?t.AMPMS[0]:t.AMPMS[1]}function ir(e,t){
return e.getFullYear()<=0?t.ERAS[0]:t.ERAS[1]}function or(e,t){return e.getFullYear()<=0?t.ERANAMES[0]:t.ERANAMES[1];
}function ar(e){function t(e){var t;if(t=e.match(n)){var r=new Date(0),i=0,o=0,a=t[8]?r.setUTCFullYear:r.setFullYear,s=t[8]?r.setUTCHours:r.setHours;
t[9]&&(i=f(t[9]+t[10]),o=f(t[9]+t[11])),a.call(r,f(t[1]),f(t[2])-1,f(t[3]));var u=f(t[4]||0)-i,c=f(t[5]||0)-o,l=f(t[6]||0),p=Math.round(1e3*parseFloat("0."+(t[7]||0)));
return s.call(r,u,c,l,p),r}return e}var n=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(n,i,o){var a,s,u="",c=[];if(i=i||"mediumDate",i=e.DATETIME_FORMATS[i]||i,
x(n)&&(n=qo.test(n)?f(n):t(n)),w(n)&&(n=new Date(n)),!S(n)||!isFinite(n.getTime()))return n;
for(;i;)s=Io.exec(i),s?(c=H(c,s,1),i=c.pop()):(c.push(i),i=null);var l=n.getTimezoneOffset();
return o&&(l=J(o,l),n=Y(n,o,!0)),r(c,function(t){a=Ro[t],u+=a?a(n,e.DATETIME_FORMATS,l):"''"===t?"'":t.replace(/(^'|'$)/g,"").replace(/''/g,"'");
}),u}}function sr(){return function(e,t){return g(t)&&(t=2),z(e,t)}}function ur(){
return function(e,t,r){return t=Math.abs(Number(t))===1/0?Number(t):f(t),isNaN(t)?e:(w(e)&&(e=e.toString()),
n(e)?(r=!r||isNaN(r)?0:f(r),r=0>r?Math.max(0,e.length+r):r,t>=0?cr(e,r,r+t):0===r?cr(e,t,e.length):cr(e,Math.max(0,r+t),r)):e);
}}function cr(e,t,n){return x(e)?e.slice(t,n):zr.call(e,t,n)}function lr(e){function r(t){
return t.map(function(t){var n=1,r=h;if(E(t))r=t;else if(x(t)&&(("+"==t.charAt(0)||"-"==t.charAt(0))&&(n="-"==t.charAt(0)?-1:1,
t=t.substring(1)),""!==t&&(r=e(t),r.constant))){var i=r();r=function(e){return e[i];
}}return{get:r,descending:n}})}function i(e){switch(typeof e){case"number":case"boolean":
case"string":return!0;default:return!1}}function o(e){return E(e.valueOf)&&(e=e.valueOf(),
i(e))?e:v(e)&&(e=e.toString(),i(e))?e:e}function a(e,t){var n=typeof e;return null===e?(n="string",
e="null"):"object"===n&&(e=o(e)),{value:e,type:n,index:t}}function s(e,t){var n=0,r=e.type,i=t.type;
if(r===i){var o=e.value,a=t.value;"string"===r?(o=o.toLowerCase(),a=a.toLowerCase()):"object"===r&&(y(o)&&(o=e.index),
y(a)&&(a=t.index)),o!==a&&(n=a>o?-1:1)}else n=i>r?-1:1;return n}return function(e,i,o,u){
function c(e,t){return{value:e,tieBreaker:{value:t,type:"number",index:t},predicateValues:f.map(function(n){
return a(n.get(e),t)})}}function l(e,t){for(var n=0,r=f.length;r>n;n++){var i=d(e.predicateValues[n],t.predicateValues[n]);
if(i)return i*f[n].descending*p}return d(e.tieBreaker,t.tieBreaker)*p}if(null==e)return e;
if(!n(e))throw t("orderBy")("notarray","Expected array but received: {0}",e);ei(i)||(i=[i]),
0===i.length&&(i=["+"]);var f=r(i),p=o?-1:1,d=E(u)?u:s,h=Array.prototype.map.call(e,c);
return h.sort(l),e=h.map(function(e){return e.value})}}function fr(e){return E(e)&&(e={
link:e}),e.restrict=e.restrict||"AC",m(e)}function pr(e,t){e.$name=t}function dr(e,t,n,i,o){
var a=this,s=[];a.$error={},a.$$success={},a.$pending=void 0,a.$name=o(t.name||t.ngForm||"")(n),
a.$dirty=!1,a.$pristine=!0,a.$valid=!0,a.$invalid=!1,a.$submitted=!1,a.$$parentForm=Ho,
a.$rollbackViewValue=function(){r(s,function(e){e.$rollbackViewValue()})},a.$commitViewValue=function(){
r(s,function(e){e.$commitViewValue()})},a.$addControl=function(e){pe(e.$name,"input"),
s.push(e),e.$name&&(a[e.$name]=e),e.$$parentForm=a},a.$$renameControl=function(e,t){
var n=e.$name;a[n]===e&&delete a[n],a[t]=e,e.$name=t},a.$removeControl=function(e){
e.$name&&a[e.$name]===e&&delete a[e.$name],r(a.$pending,function(t,n){a.$setValidity(n,null,e);
}),r(a.$error,function(t,n){a.$setValidity(n,null,e)}),r(a.$$success,function(t,n){
a.$setValidity(n,null,e)}),P(s,e),e.$$parentForm=Ho},Tr({ctrl:this,$element:e,set:function(e,t,n){
var r=e[t];if(r){var i=r.indexOf(n);-1===i&&r.push(n)}else e[t]=[n]},unset:function(e,t,n){
var r=e[t];r&&(P(r,n),0===r.length&&delete e[t])},$animate:i}),a.$setDirty=function(){
i.removeClass(e,Aa),i.addClass(e,ka),a.$dirty=!0,a.$pristine=!1,a.$$parentForm.$setDirty();
},a.$setPristine=function(){i.setClass(e,Aa,ka+" "+Bo),a.$dirty=!1,a.$pristine=!0,
a.$submitted=!1,r(s,function(e){e.$setPristine()})},a.$setUntouched=function(){r(s,function(e){
e.$setUntouched()})},a.$setSubmitted=function(){i.addClass(e,Bo),a.$submitted=!0,
a.$$parentForm.$setSubmitted()}}function hr(e){e.$formatters.push(function(t){return e.$isEmpty(t)?t:t.toString();
})}function mr(e,t,n,r,i,o){vr(e,t,n,r,i,o),hr(r)}function vr(e,t,n,r,i,o){var a=Lr(t[0].type);
if(!i.android){var s=!1;t.on("compositionstart",function(){s=!0}),t.on("compositionend",function(){
s=!1,c()})}var u,c=function(e){if(u&&(o.defer.cancel(u),u=null),!s){var i=t.val(),c=e&&e.type;
"password"===a||n.ngTrim&&"false"===n.ngTrim||(i=ni(i)),(r.$viewValue!==i||""===i&&r.$$hasNativeValidators)&&r.$setViewValue(i,c);
}};if(i.hasEvent("input"))t.on("input",c);else{var l=function(e,t,n){u||(u=o.defer(function(){
u=null,t&&t.value===n||c(e)}))};t.on("keydown",function(e){var t=e.keyCode;91===t||t>15&&19>t||t>=37&&40>=t||l(e,this,this.value);
}),i.hasEvent("paste")&&t.on("paste cut",l)}t.on("change",c),ra[a]&&r.$$hasNativeValidators&&a===n.type&&t.on(na,function(e){
if(!u){var t=this[Ir],n=t.badInput,r=t.typeMismatch;u=o.defer(function(){u=null,(t.badInput!==n||t.typeMismatch!==r)&&c(e);
})}}),r.$render=function(){var e=r.$isEmpty(r.$viewValue)?"":r.$viewValue;t.val()!==e&&t.val(e);
}}function gr(e,t){if(S(e))return e;if(x(e)){Qo.lastIndex=0;var n=Qo.exec(e);if(n){
var r=+n[1],i=+n[2],o=0,a=0,s=0,u=0,c=er(r),l=7*(i-1);return t&&(o=t.getHours(),a=t.getMinutes(),
s=t.getSeconds(),u=t.getMilliseconds()),new Date(r,0,c.getDate()+l,o,a,s,u)}}return NaN;
}function $r(e,t){return function(n,i){var o,a;if(S(n))return n;if(x(n)){if('"'==n.charAt(0)&&'"'==n.charAt(n.length-1)&&(n=n.substring(1,n.length-1)),
Go.test(n))return new Date(n);if(e.lastIndex=0,o=e.exec(n))return o.shift(),a=i?{
yyyy:i.getFullYear(),MM:i.getMonth()+1,dd:i.getDate(),HH:i.getHours(),mm:i.getMinutes(),
ss:i.getSeconds(),sss:i.getMilliseconds()/1e3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,
sss:0},r(o,function(e,n){n<t.length&&(a[t[n]]=+e)}),new Date(a.yyyy,a.MM-1,a.dd,a.HH,a.mm,a.ss||0,1e3*a.sss||0);
}return NaN}}function yr(e,t,n,r){return function(i,o,a,s,u,c,l){function f(e){return e&&!(e.getTime&&e.getTime()!==e.getTime());
}function p(e){return $(e)&&!S(e)?n(e)||void 0:e}br(i,o,a,s),vr(i,o,a,s,u,c);var d,h=s&&s.$options&&s.$options.timezone;
if(s.$$parserName=e,s.$parsers.push(function(e){if(s.$isEmpty(e))return null;if(t.test(e)){
var r=n(e,d);return h&&(r=Y(r,h)),r}return void 0}),s.$formatters.push(function(e){
if(e&&!S(e))throw Ma("datefmt","Expected `{0}` to be a date",e);return f(e)?(d=e,
d&&h&&(d=Y(d,h,!0)),l("date")(e,r,h)):(d=null,"")}),$(a.min)||a.ngMin){var m;s.$validators.min=function(e){
return!f(e)||g(m)||n(e)>=m},a.$observe("min",function(e){m=p(e),s.$validate()})}if($(a.max)||a.ngMax){
var v;s.$validators.max=function(e){return!f(e)||g(v)||n(e)<=v},a.$observe("max",function(e){
v=p(e),s.$validate()})}}}function br(e,t,n,r){var i=t[0],o=r.$$hasNativeValidators=y(i.validity);
o&&r.$parsers.push(function(e){var n=t.prop(Ir)||{};return n.badInput||n.typeMismatch?void 0:e;
})}function xr(e,t,n,r,i,o){if(br(e,t,n,r),vr(e,t,n,r,i,o),r.$$parserName="number",
r.$parsers.push(function(e){return r.$isEmpty(e)?null:Yo.test(e)?parseFloat(e):void 0;
}),r.$formatters.push(function(e){if(!r.$isEmpty(e)){if(!w(e))throw Ma("numfmt","Expected `{0}` to be a number",e);
e=e.toString()}return e}),$(n.min)||n.ngMin){var a;r.$validators.min=function(e){
return r.$isEmpty(e)||g(a)||e>=a},n.$observe("min",function(e){$(e)&&!w(e)&&(e=parseFloat(e)),
a=w(e)&&!isNaN(e)?e:void 0,r.$validate()})}if($(n.max)||n.ngMax){var s;r.$validators.max=function(e){
return r.$isEmpty(e)||g(s)||s>=e},n.$observe("max",function(e){$(e)&&!w(e)&&(e=parseFloat(e)),
s=w(e)&&!isNaN(e)?e:void 0,r.$validate()})}}function wr(e,t,n,r,i,o){vr(e,t,n,r,i,o),
hr(r),r.$$parserName="url",r.$validators.url=function(e,t){var n=e||t;return r.$isEmpty(n)||Jo.test(n);
}}function Sr(e,t,n,r,i,o){vr(e,t,n,r,i,o),hr(r),r.$$parserName="email",r.$validators.email=function(e,t){
var n=e||t;return r.$isEmpty(n)||Xo.test(n)}}function Er(e,t,n,r){g(n.name)&&t.attr("name",a());
var i=function(e){t[0].checked&&r.$setViewValue(n.value,e&&e.type)};t.on("click",i),
r.$render=function(){var e=n.value;t[0].checked=e==r.$viewValue},n.$observe("value",r.$render);
}function Cr(e,t,n,r,i){var o;if($(r)){if(o=e(r),!o.constant)throw Ma("constexpr","Expected constant expression for `{0}`, but saw `{1}`.",n,r);
return o(t)}return i}function Ar(e,t,n,r,i,o,a,s){var u=Cr(s,e,"ngTrueValue",n.ngTrueValue,!0),c=Cr(s,e,"ngFalseValue",n.ngFalseValue,!1),l=function(e){
r.$setViewValue(t[0].checked,e&&e.type)};t.on("click",l),r.$render=function(){t[0].checked=r.$viewValue;
},r.$isEmpty=function(e){return e===!1},r.$formatters.push(function(e){return _(e,u);
}),r.$parsers.push(function(e){return e?u:c})}function kr(e,t){return e="ngClass"+e,
["$animate",function(n){function i(e,t){var n=[];e:for(var r=0;r<e.length;r++){for(var i=e[r],o=0;o<t.length;o++)if(i==t[o])continue e;
n.push(i)}return n}function o(e){var t=[];return ei(e)?(r(e,function(e){t=t.concat(o(e));
}),t):x(e)?e.split(" "):y(e)?(r(e,function(e,n){e&&(t=t.concat(n.split(" ")))}),t):e;
}return{restrict:"AC",link:function(a,s,u){function c(e){var t=f(e,1);u.$addClass(t);
}function l(e){var t=f(e,-1);u.$removeClass(t)}function f(e,t){var n=s.data("$classCounts")||me(),i=[];
return r(e,function(e){(t>0||n[e])&&(n[e]=(n[e]||0)+t,n[e]===+(t>0)&&i.push(e))}),
s.data("$classCounts",n),i.join(" ")}function p(e,t){var r=i(t,e),o=i(e,t);r=f(r,1),
o=f(o,-1),r&&r.length&&n.addClass(s,r),o&&o.length&&n.removeClass(s,o)}function d(e){
if(t===!0||(1&a.$index)===t){var n=o(e||[]);if(h){if(!_(e,h)){var r=o(h);p(r,n)}}else c(n);
}h=ei(e)?e.map(function(e){return ge(e)}):ge(e)}var h;a.$watch(u[e],d,!0),u.$observe("class",function(t){
d(a.$eval(u[e]))}),"ngClass"!==e&&a.$watch("$index",function(n,r){var i=1&n;if(i!==(1&r)){
var s=o(a.$eval(u[e]));i===t?c(s):l(s)}})}}}]}function Tr(e){function t(e,t,s){g(t)?n("$pending",e,s):r("$pending",e,s),
O(t)?t?(l(a.$error,e,s),c(a.$$success,e,s)):(c(a.$error,e,s),l(a.$$success,e,s)):(l(a.$error,e,s),
l(a.$$success,e,s)),a.$pending?(i(ja,!0),a.$valid=a.$invalid=void 0,o("",null)):(i(ja,!1),
a.$valid=Nr(a.$error),a.$invalid=!a.$valid,o("",a.$valid));var u;u=a.$pending&&a.$pending[e]?void 0:a.$error[e]?!1:a.$$success[e]?!0:null,
o(e,u),a.$$parentForm.$setValidity(e,u,a)}function n(e,t,n){a[e]||(a[e]={}),c(a[e],t,n);
}function r(e,t,n){a[e]&&l(a[e],t,n),Nr(a[e])&&(a[e]=void 0)}function i(e,t){t&&!u[e]?(f.addClass(s,e),
u[e]=!0):!t&&u[e]&&(f.removeClass(s,e),u[e]=!1)}function o(e,t){e=e?"-"+ue(e,"-"):"",
i(Ea+e,t===!0),i(Ca+e,t===!1)}var a=e.ctrl,s=e.$element,u={},c=e.set,l=e.unset,f=e.$animate;
u[Ca]=!(u[Ea]=s.hasClass(Ea)),a.$setValidity=t}function Nr(e){if(e)for(var t in e)if(e.hasOwnProperty(t))return!1;
return!0}function jr(e){e[0].hasAttribute("selected")&&(e[0].selected=!0)}function Or(e,t,n){
function r(o,a){if(a&&a>i&&(i=a),o||i>=e.length)n(o);else try{t(e[i++],r)}catch(s){
n(s)}}var i=0;r()}function Dr(e,t){t=t||5;var n=e.toString();if(e.stack){var r=e.stack.split("\n");
-1===r[0].indexOf(n)&&(t++,r.unshift(e.message)),n=r.slice(0,t).join("\n")}return n;
}function Mr(e){var t=new Error;return function(){var n=(t.stack||"").split("\n")[e];
return n&&(n=-1!==n.indexOf("@")?n.substring(n.indexOf("@")+1):n.substring(n.indexOf("(")+1).replace(")","")),
n||""}}var Fr=e.jQuery.noConflict(!0),Rr=/^\/(.+)\/([a-z]*)$/,Ir="validity",qr=Object.prototype.hasOwnProperty,Lr=function(e){
return x(e)?e.toLowerCase():e},Pr=function(e){return x(e)?e.toUpperCase():e},Vr=function(e){
return x(e)?e.replace(/[A-Z]/g,function(e){return String.fromCharCode(32|e.charCodeAt(0));
}):e},_r=function(e){return x(e)?e.replace(/[a-z]/g,function(e){return String.fromCharCode(-33&e.charCodeAt(0));
}):e};"i"!=="I".toLowerCase()&&(Lr=Vr,Pr=_r);var Hr,Br,Ur,Wr,zr=[].slice,Gr=[].splice,Jr=[].push,Xr=Object.prototype.toString,Yr=Object.getPrototypeOf,Kr=t("ng"),Zr=e.angular||(e.angular={}),Qr=0;
Hr=e.document.documentMode,d.$inject=[],h.$inject=[];var ei=Array.isArray,ti=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,ni=function(e){
return x(e)?e.trim():e},ri=function(e){return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08");
},ii=function(){function t(){try{return new Function(""),!1}catch(e){return!0}}if(!$(ii.rules)){
var n=e.document.querySelector("[ng-csp]")||e.document.querySelector("[data-ng-csp]");
if(n){var r=n.getAttribute("ng-csp")||n.getAttribute("data-ng-csp");ii.rules={noUnsafeEval:!r||-1!==r.indexOf("no-unsafe-eval"),
noInlineStyle:!r||-1!==r.indexOf("no-inline-style")}}else ii.rules={noUnsafeEval:t(),
noInlineStyle:!1}}return ii.rules},oi=function(){if($(oi.name_))return oi.name_;var t,n,r,i,o=si.length;
for(n=0;o>n;++n)if(r=si[n],t=e.document.querySelector("["+r.replace(":","\\:")+"jq]")){
i=t.getAttribute(r+"jq");break}return oi.name_=i},ai=/:/g,si=["ng-","data-ng-","ng:","x-ng-"],ui=/[A-Z]/g,ci=!1,li=1,fi=2,pi=3,di=8,hi=9,mi=11,vi={
full:"1.5.8",major:1,minor:5,dot:8,codeName:"arbitrary-fallbacks"};je.expando="ng339";
var gi=je.cache={},$i=1,yi=function(e,t,n){e.addEventListener(t,n,!1)},bi=function(e,t,n){
e.removeEventListener(t,n,!1)};je._data=function(e){return this.cache[e[this.expando]]||{};
};var xi=/([\:\-\_]+(.))/g,wi=/^moz([A-Z])/,Si={mouseleave:"mouseout",mouseenter:"mouseover"
},Ei=t("jqLite"),Ci=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Ai=/<|&#?\w+;/,ki=/<([\w:-]+)/,Ti=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Ni={
option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],
col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],
td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ni.optgroup=Ni.option,
Ni.tbody=Ni.tfoot=Ni.colgroup=Ni.caption=Ni.thead,Ni.th=Ni.td;var ji=e.Node.prototype.contains||function(e){
return!!(16&this.compareDocumentPosition(e))},Oi=je.prototype={ready:function(t){
function n(){r||(r=!0,t())}var r=!1;"complete"===e.document.readyState?e.setTimeout(n):(this.on("DOMContentLoaded",n),
je(e).on("load",n))},toString:function(){var e=[];return r(this,function(t){e.push(""+t);
}),"["+e.join(", ")+"]"},eq:function(e){return Br(e>=0?this[e]:this[this.length+e]);
},length:0,push:Jr,sort:[].sort,splice:[].splice},Di={};r("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(e){
Di[Lr(e)]=e});var Mi={};r("input,select,option,textarea,button,form,details".split(","),function(e){
Mi[e]=!0});var Fi={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",
ngPattern:"pattern"};r({data:Ie,removeData:Fe,hasData:Ce,cleanData:Ae},function(e,t){
je[t]=e}),r({data:Ie,inheritedData:He,scope:function(e){return Br.data(e,"$scope")||He(e.parentNode||e,["$isolateScope","$scope"]);
},isolateScope:function(e){return Br.data(e,"$isolateScope")||Br.data(e,"$isolateScopeNoTemplate");
},controller:_e,injector:function(e){return He(e,"$injector")},removeAttr:function(e,t){
e.removeAttribute(t)},hasClass:qe,css:function(e,t,n){return t=we(t),$(n)?void(e.style[t]=n):e.style[t];
},attr:function(e,t,n){var r=e.nodeType;if(r!==pi&&r!==fi&&r!==di){var i=Lr(t);if(Di[i]){
if(!$(n))return e[t]||(e.attributes.getNamedItem(t)||d).specified?i:void 0;n?(e[t]=!0,
e.setAttribute(t,i)):(e[t]=!1,e.removeAttribute(i))}else if($(n))e.setAttribute(t,n);else if(e.getAttribute){
var o=e.getAttribute(t,2);return null===o?void 0:o}}},prop:function(e,t,n){return $(n)?void(e[t]=n):e[t];
},text:function(){function e(e,t){if(g(t)){var n=e.nodeType;return n===li||n===pi?e.textContent:"";
}e.textContent=t}return e.$dv="",e}(),val:function(e,t){if(g(t)){if(e.multiple&&"select"===q(e)){
var n=[];return r(e.options,function(e){e.selected&&n.push(e.value||e.text)}),0===n.length?null:n;
}return e.value}e.value=t},html:function(e,t){return g(t)?e.innerHTML:(De(e,!0),void(e.innerHTML=t));
},empty:Be},function(e,t){je.prototype[t]=function(t,n){var r,i,o=this.length;if(e!==Be&&g(2==e.length&&e!==qe&&e!==_e?t:n)){
if(y(t)){for(r=0;o>r;r++)if(e===Ie)e(this[r],t);else for(i in t)e(this[r],i,t[i]);
return this}for(var a=e.$dv,s=g(a)?Math.min(o,1):o,u=0;s>u;u++){var c=e(this[u],t,n);
a=a?a+c:c}return a}for(r=0;o>r;r++)e(this[r],t,n);return this}}),r({removeData:Fe,
on:function(e,t,n,r){if($(r))throw Ei("onargs","jqLite#on() does not support the `selector` or `eventData` parameters");
if(Ee(e)){var i=Re(e,!0),o=i.events,a=i.handle;a||(a=i.handle=Je(e,o));for(var s=t.indexOf(" ")>=0?t.split(" "):[t],u=s.length,c=function(t,r,i){
var s=o[t];s||(s=o[t]=[],s.specialHandlerWrapper=r,"$destroy"===t||i||yi(e,t,a)),
s.push(n)};u--;)t=s[u],Si[t]?(c(Si[t],Ye),c(t,void 0,!0)):c(t)}},off:Me,one:function(e,t,n){
e=Br(e),e.on(t,function r(){e.off(t,n),e.off(t,r)}),e.on(t,n)},replaceWith:function(e,t){
var n,i=e.parentNode;De(e),r(new je(t),function(t){n?i.insertBefore(t,n.nextSibling):i.replaceChild(t,e),
n=t})},children:function(e){var t=[];return r(e.childNodes,function(e){e.nodeType===li&&t.push(e);
}),t},contents:function(e){return e.contentDocument||e.childNodes||[]},append:function(e,t){
var n=e.nodeType;if(n===li||n===mi){t=new je(t);for(var r=0,i=t.length;i>r;r++){var o=t[r];
e.appendChild(o)}}},prepend:function(e,t){if(e.nodeType===li){var n=e.firstChild;r(new je(t),function(t){
e.insertBefore(t,n)})}},wrap:function(e,t){Ne(e,Br(t).eq(0).clone()[0])},remove:Ue,
detach:function(e){Ue(e,!0)},after:function(e,t){var n=e,r=e.parentNode;t=new je(t);
for(var i=0,o=t.length;o>i;i++){var a=t[i];r.insertBefore(a,n.nextSibling),n=a}},
addClass:Pe,removeClass:Le,toggleClass:function(e,t,n){t&&r(t.split(" "),function(t){
var r=n;g(r)&&(r=!qe(e,t)),(r?Pe:Le)(e,t)})},parent:function(e){var t=e.parentNode;
return t&&t.nodeType!==mi?t:null},next:function(e){return e.nextElementSibling},find:function(e,t){
return e.getElementsByTagName?e.getElementsByTagName(t):[]},clone:Oe,triggerHandler:function(e,t,n){
var i,o,a,s=t.type||t,u=Re(e),l=u&&u.events,f=l&&l[s];f&&(i={preventDefault:function(){
this.defaultPrevented=!0},isDefaultPrevented:function(){return this.defaultPrevented===!0;
},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){
return this.immediatePropagationStopped===!0},stopPropagation:d,type:s,target:e},
t.type&&(i=c(i,t)),o=ge(f),a=n?[i].concat(n):[i],r(o,function(t){i.isImmediatePropagationStopped()||t.apply(e,a);
}))}},function(e,t){je.prototype[t]=function(t,n,r){for(var i,o=0,a=this.length;a>o;o++)g(i)?(i=e(this[o],t,n,r),
$(i)&&(i=Br(i))):Ve(i,e(this[o],t,n,r));return $(i)?i:this},je.prototype.bind=je.prototype.on,
je.prototype.unbind=je.prototype.off}),Qe.prototype={put:function(e,t){this[Ze(e,this.nextUid)]=t;
},get:function(e){return this[Ze(e,this.nextUid)]},remove:function(e){var t=this[e=Ze(e,this.nextUid)];
return delete this[e],t}};var Ri=[function(){this.$get=[function(){return Qe}]}],Ii=/^([^\(]+?)=>/,qi=/^[^\(]*\(\s*([^\)]*)\)/m,Li=/,/,Pi=/^\s*(_?)(\S+?)\1\s*$/,Vi=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,_i=t("$injector");
it.$$annotate=rt;var Hi=t("$animate"),Bi=1,Ui="ng-animate",Wi=function(){this.$get=d;
},zi=function(){var e=new Qe,t=[];this.$get=["$$AnimateRunner","$rootScope",function(n,i){
function o(e,t,n){var i=!1;return t&&(t=x(t)?t.split(" "):ei(t)?t:[],r(t,function(t){
t&&(i=!0,e[t]=n)})),i}function a(){r(t,function(t){var n=e.get(t);if(n){var i=ut(t.attr("class")),o="",a="";
r(n,function(e,t){var n=!!i[t];e!==n&&(e?o+=(o.length?" ":"")+t:a+=(a.length?" ":"")+t);
}),r(t,function(e){o&&Pe(e,o),a&&Le(e,a)}),e.remove(t)}}),t.length=0}function s(n,r,s){
var u=e.get(n)||{},c=o(u,r,!0),l=o(u,s,!1);(c||l)&&(e.put(n,u),t.push(n),1===t.length&&i.$$postDigest(a));
}return{enabled:d,on:d,off:d,pin:d,push:function(e,t,r,i){i&&i(),r=r||{},r.from&&e.css(r.from),
r.to&&e.css(r.to),(r.addClass||r.removeClass)&&s(e,r.addClass,r.removeClass);var o=new n;
return o.complete(),o}}}]},Gi=["$provide",function(e){var t=this;this.$$registeredAnimations=Object.create(null),
this.register=function(n,r){if(n&&"."!==n.charAt(0))throw Hi("notcsel","Expecting class selector starting with '.' got '{0}'.",n);
var i=n+"-animation";t.$$registeredAnimations[n.substr(1)]=i,e.factory(i,r)},this.classNameFilter=function(e){
if(1===arguments.length&&(this.$$classNameFilter=e instanceof RegExp?e:null,this.$$classNameFilter)){
var t=new RegExp("(\\s+|\\/)"+Ui+"(\\s+|\\/)");if(t.test(this.$$classNameFilter.toString()))throw Hi("nongcls",'$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.',Ui);
}return this.$$classNameFilter},this.$get=["$$animateQueue",function(e){function t(e,t,n){
if(n){var r=st(n);!r||r.parentNode||r.previousElementSibling||(n=null)}n?n.after(e):t.prepend(e);
}return{on:e.on,off:e.off,pin:e.pin,enabled:e.enabled,cancel:function(e){e.end&&e.end();
},enter:function(n,r,i,o){return r=r&&Br(r),i=i&&Br(i),r=r||i.parent(),t(n,r,i),e.push(n,"enter",ct(o));
},move:function(n,r,i,o){return r=r&&Br(r),i=i&&Br(i),r=r||i.parent(),t(n,r,i),e.push(n,"move",ct(o));
},leave:function(t,n){return e.push(t,"leave",ct(n),function(){t.remove()})},addClass:function(t,n,r){
return r=ct(r),r.addClass=at(r.addclass,n),e.push(t,"addClass",r)},removeClass:function(t,n,r){
return r=ct(r),r.removeClass=at(r.removeClass,n),e.push(t,"removeClass",r)},setClass:function(t,n,r,i){
return i=ct(i),i.addClass=at(i.addClass,n),i.removeClass=at(i.removeClass,r),e.push(t,"setClass",i);
},animate:function(t,n,r,i,o){return o=ct(o),o.from=o.from?c(o.from,n):n,o.to=o.to?c(o.to,r):r,
i=i||"ng-inline-animate",o.tempClasses=at(o.tempClasses,i),e.push(t,"animate",o)}
}}]}],Ji=function(){this.$get=["$$rAF",function(e){function t(t){n.push(t),n.length>1||e(function(){
for(var e=0;e<n.length;e++)n[e]();n=[]})}var n=[];return function(){var e=!1;return t(function(){
e=!0}),function(n){e?n():t(n)}}}]},Xi=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(e,t,n,i,o){
function a(e){this.setHost(e);var t=n(),r=function(e){o(e,0,!1)};this._doneCallbacks=[],
this._tick=function(e){var n=i[0];n&&n.hidden?r(e):t(e)},this._state=0}var s=0,u=1,c=2;
return a.chain=function(e,t){function n(){return r===e.length?void t(!0):void e[r](function(e){
return e===!1?void t(!1):(r++,void n())})}var r=0;n()},a.all=function(e,t){function n(n){
o=o&&n,++i===e.length&&t(o)}var i=0,o=!0;r(e,function(e){e.done(n)})},a.prototype={
setHost:function(e){this.host=e||{}},done:function(e){this._state===c?e():this._doneCallbacks.push(e);
},progress:d,getPromise:function(){if(!this.promise){var t=this;this.promise=e(function(e,n){
t.done(function(t){t===!1?n():e()})})}return this.promise},then:function(e,t){return this.getPromise().then(e,t);
},"catch":function(e){return this.getPromise()["catch"](e)},"finally":function(e){
return this.getPromise()["finally"](e)},pause:function(){this.host.pause&&this.host.pause();
},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end(),
this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel(),this._resolve(!1);
},complete:function(e){var t=this;t._state===s&&(t._state=u,t._tick(function(){t._resolve(e);
}))},_resolve:function(e){this._state!==c&&(r(this._doneCallbacks,function(t){t(e);
}),this._doneCallbacks.length=0,this._state=c)}},a}]},Yi=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(e,t,n){
return function(t,r){function i(){return e(function(){o(),s||u.complete(),s=!0}),
u}function o(){a.addClass&&(t.addClass(a.addClass),a.addClass=null),a.removeClass&&(t.removeClass(a.removeClass),
a.removeClass=null),a.to&&(t.css(a.to),a.to=null)}var a=r||{};a.$$prepared||(a=V(a)),
a.cleanupStyles&&(a.from=a.to=null),a.from&&(t.css(a.from),a.from=null);var s,u=new n;
return{start:i,end:i}}}]},Ki=t("$compile"),Zi=new ht;mt.$inject=["$provide","$$sanitizeUriProvider"],
vt.prototype.isFirstChange=function(){return this.previousValue===Zi};var Qi=/^((?:x|data)[\:\-_])/i,eo=t("$controller"),to=/^(\S+)(\s+as\s+([\w$]+))?$/,no=function(){
this.$get=["$document",function(e){return function(t){return t?!t.nodeType&&t instanceof Br&&(t=t[0]):t=e[0].body,
t.offsetWidth+1}}]},ro="application/json",io={"Content-Type":ro+";charset=utf-8"},oo=/^\[|^\{(?!\{)/,ao={
"[":/]$/,"{":/}$/},so=/^\)\]\}',?\n/,uo=t("$http"),co=function(e){return function(){
throw uo("legacy","The method `{0}` on the promise returned from `$http` has been disabled.",e);
}},lo=Zr.$interpolateMinErr=t("$interpolate");lo.throwNoconcat=function(e){throw lo("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",e);
},lo.interr=function(e,t){return lo("interr","Can't interpolate: {0}\n{1}",e,t.toString());
};var fo=function(){this.$get=["$window",function(e){function t(e){var t=function(e){
t.data=e,t.called=!0};return t.id=e,t}var n=e.angular.callbacks,r={};return{createCallback:function(e){
var i="_"+(n.$$counter++).toString(36),o="angular.callbacks."+i,a=t(i);return r[o]=n[i]=a,
o},wasCalled:function(e){return r[e].called},getResponse:function(e){return r[e].data;
},removeCallback:function(e){var t=r[e];delete n[t.id],delete r[e]}}}]},po=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,ho={
http:80,https:443,ftp:21},mo=t("$location"),vo={$$absUrl:"",$$html5:!1,$$replace:!1,
absUrl:Kt("$$absUrl"),url:function(e){if(g(e))return this.$$url;var t=po.exec(e);return(t[1]||""===e)&&this.path(decodeURIComponent(t[1])),
(t[2]||t[1]||""===e)&&this.search(t[3]||""),this.hash(t[5]||""),this},protocol:Kt("$$protocol"),
host:Kt("$$host"),port:Kt("$$port"),path:Zt("$$path",function(e){return e=null!==e?e.toString():"",
"/"==e.charAt(0)?e:"/"+e}),search:function(e,t){switch(arguments.length){case 0:return this.$$search;
case 1:if(x(e)||w(e))e=e.toString(),this.$$search=Q(e);else{if(!y(e))throw mo("isrcharg","The first argument of the `$location#search()` call must be a string or an object.");
e=V(e,{}),r(e,function(t,n){null==t&&delete e[n]}),this.$$search=e}break;default:
g(t)||null===t?delete this.$$search[e]:this.$$search[e]=t}return this.$$compose(),
this},hash:Zt("$$hash",function(e){return null!==e?e.toString():""}),replace:function(){
return this.$$replace=!0,this}};r([Yt,Xt,Jt],function(e){e.prototype=Object.create(vo),
e.prototype.state=function(t){if(!arguments.length)return this.$$state;if(e!==Jt||!this.$$html5)throw mo("nostate","History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
return this.$$state=g(t)?null:t,this}});var go=t("$parse"),$o=Function.prototype.call,yo=Function.prototype.apply,bo=Function.prototype.bind,xo=me();
r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(e){xo[e]=!0;
});var wo={n:"\n",f:"\f",r:"\r",t:"	",v:"","'":"'",'"':'"'},So=function(e){this.options=e;
};So.prototype={constructor:So,lex:function(e){for(this.text=e,this.index=0,this.tokens=[];this.index<this.text.length;){
var t=this.text.charAt(this.index);if('"'===t||"'"===t)this.readString(t);else if(this.isNumber(t)||"."===t&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(t,"(){}[].,;:?"))this.tokens.push({
index:this.index,text:t}),this.index++;else if(this.isWhitespace(t))this.index++;else{
var n=t+this.peek(),r=n+this.peek(2),i=xo[t],o=xo[n],a=xo[r];if(i||o||a){var s=a?r:o?n:t;
this.tokens.push({index:this.index,text:s,operator:!0}),this.index+=s.length}else this.throwError("Unexpected next character ",this.index,this.index+1);
}}return this.tokens},is:function(e,t){return-1!==t.indexOf(e)},peek:function(e){
var t=e||1;return this.index+t<this.text.length?this.text.charAt(this.index+t):!1;
},isNumber:function(e){return e>="0"&&"9">=e&&"string"==typeof e},isWhitespace:function(e){
return" "===e||"\r"===e||"	"===e||"\n"===e||""===e||" "===e},isIdentifierStart:function(e){
return this.options.isIdentifierStart?this.options.isIdentifierStart(e,this.codePointAt(e)):this.isValidIdentifierStart(e);
},isValidIdentifierStart:function(e){return e>="a"&&"z">=e||e>="A"&&"Z">=e||"_"===e||"$"===e;
},isIdentifierContinue:function(e){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(e,this.codePointAt(e)):this.isValidIdentifierContinue(e);
},isValidIdentifierContinue:function(e,t){return this.isValidIdentifierStart(e,t)||this.isNumber(e);
},codePointAt:function(e){return 1===e.length?e.charCodeAt(0):(e.charCodeAt(0)<<10)+e.charCodeAt(1)-56613888;
},peekMultichar:function(){var e=this.text.charAt(this.index),t=this.peek();if(!t)return e;
var n=e.charCodeAt(0),r=t.charCodeAt(0);return n>=55296&&56319>=n&&r>=56320&&57343>=r?e+t:e;
},isExpOperator:function(e){return"-"===e||"+"===e||this.isNumber(e)},throwError:function(e,t,n){
n=n||this.index;var r=$(t)?"s "+t+"-"+this.index+" ["+this.text.substring(t,n)+"]":" "+n;
throw go("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",e,r,this.text);
},readNumber:function(){for(var e="",t=this.index;this.index<this.text.length;){var n=Lr(this.text.charAt(this.index));
if("."==n||this.isNumber(n))e+=n;else{var r=this.peek();if("e"==n&&this.isExpOperator(r))e+=n;else if(this.isExpOperator(n)&&r&&this.isNumber(r)&&"e"==e.charAt(e.length-1))e+=n;else{
if(!this.isExpOperator(n)||r&&this.isNumber(r)||"e"!=e.charAt(e.length-1))break;this.throwError("Invalid exponent");
}}this.index++}this.tokens.push({index:t,text:e,constant:!0,value:Number(e)})},readIdent:function(){
var e=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){
var t=this.peekMultichar();if(!this.isIdentifierContinue(t))break;this.index+=t.length;
}this.tokens.push({index:e,text:this.text.slice(e,this.index),identifier:!0})},readString:function(e){
var t=this.index;this.index++;for(var n="",r=e,i=!1;this.index<this.text.length;){
var o=this.text.charAt(this.index);if(r+=o,i){if("u"===o){var a=this.text.substring(this.index+1,this.index+5);
a.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+a+"]"),this.index+=4,
n+=String.fromCharCode(parseInt(a,16))}else{var s=wo[o];n+=s||o}i=!1}else if("\\"===o)i=!0;else{
if(o===e)return this.index++,void this.tokens.push({index:t,text:r,constant:!0,value:n
});n+=o}this.index++}this.throwError("Unterminated quote",t)}};var Eo=function(e,t){
this.lexer=e,this.options=t};Eo.Program="Program",Eo.ExpressionStatement="ExpressionStatement",
Eo.AssignmentExpression="AssignmentExpression",Eo.ConditionalExpression="ConditionalExpression",
Eo.LogicalExpression="LogicalExpression",Eo.BinaryExpression="BinaryExpression",Eo.UnaryExpression="UnaryExpression",
Eo.CallExpression="CallExpression",Eo.MemberExpression="MemberExpression",Eo.Identifier="Identifier",
Eo.Literal="Literal",Eo.ArrayExpression="ArrayExpression",Eo.Property="Property",
Eo.ObjectExpression="ObjectExpression",Eo.ThisExpression="ThisExpression",Eo.LocalsExpression="LocalsExpression",
Eo.NGValueParameter="NGValueParameter",Eo.prototype={ast:function(e){this.text=e,
this.tokens=this.lexer.lex(e);var t=this.program();return 0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),
t},program:function(){for(var e=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&e.push(this.expressionStatement()),
!this.expect(";"))return{type:Eo.Program,body:e}},expressionStatement:function(){
return{type:Eo.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){
for(var e,t=this.expression();e=this.expect("|");)t=this.filter(t);return t},expression:function(){
return this.assignment()},assignment:function(){var e=this.ternary();return this.expect("=")&&(e={
type:Eo.AssignmentExpression,left:e,right:this.assignment(),operator:"="}),e},ternary:function(){
var e,t,n=this.logicalOR();return this.expect("?")&&(e=this.expression(),this.consume(":"))?(t=this.expression(),
{type:Eo.ConditionalExpression,test:n,alternate:e,consequent:t}):n},logicalOR:function(){
for(var e=this.logicalAND();this.expect("||");)e={type:Eo.LogicalExpression,operator:"||",
left:e,right:this.logicalAND()};return e},logicalAND:function(){for(var e=this.equality();this.expect("&&");)e={
type:Eo.LogicalExpression,operator:"&&",left:e,right:this.equality()};return e},equality:function(){
for(var e,t=this.relational();e=this.expect("==","!=","===","!==");)t={type:Eo.BinaryExpression,
operator:e.text,left:t,right:this.relational()};return t},relational:function(){for(var e,t=this.additive();e=this.expect("<",">","<=",">=");)t={
type:Eo.BinaryExpression,operator:e.text,left:t,right:this.additive()};return t},
additive:function(){for(var e,t=this.multiplicative();e=this.expect("+","-");)t={
type:Eo.BinaryExpression,operator:e.text,left:t,right:this.multiplicative()};return t;
},multiplicative:function(){for(var e,t=this.unary();e=this.expect("*","/","%");)t={
type:Eo.BinaryExpression,operator:e.text,left:t,right:this.unary()};return t},unary:function(){
var e;return(e=this.expect("+","-","!"))?{type:Eo.UnaryExpression,operator:e.text,
prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var e;this.expect("(")?(e=this.filterChain(),
this.consume(")")):this.expect("[")?e=this.arrayDeclaration():this.expect("{")?e=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?e=V(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?e={
type:Eo.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?e=this.identifier():this.peek().constant?e=this.constant():this.throwError("not a primary expression",this.peek());
for(var t;t=this.expect("(","[",".");)"("===t.text?(e={type:Eo.CallExpression,callee:e,
arguments:this.parseArguments()},this.consume(")")):"["===t.text?(e={type:Eo.MemberExpression,
object:e,property:this.expression(),computed:!0},this.consume("]")):"."===t.text?e={
type:Eo.MemberExpression,object:e,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");
return e},filter:function(e){for(var t=[e],n={type:Eo.CallExpression,callee:this.identifier(),
arguments:t,filter:!0};this.expect(":");)t.push(this.expression());return n},parseArguments:function(){
var e=[];if(")"!==this.peekToken().text)do e.push(this.filterChain());while(this.expect(","));
return e},identifier:function(){var e=this.consume();return e.identifier||this.throwError("is not a valid identifier",e),
{type:Eo.Identifier,name:e.text}},constant:function(){return{type:Eo.Literal,value:this.consume().value
}},arrayDeclaration:function(){var e=[];if("]"!==this.peekToken().text)do{if(this.peek("]"))break;
e.push(this.expression())}while(this.expect(","));return this.consume("]"),{type:Eo.ArrayExpression,
elements:e}},object:function(){var e,t=[];if("}"!==this.peekToken().text)do{if(this.peek("}"))break;
e={type:Eo.Property,kind:"init"},this.peek().constant?(e.key=this.constant(),e.computed=!1,
this.consume(":"),e.value=this.expression()):this.peek().identifier?(e.key=this.identifier(),
e.computed=!1,this.peek(":")?(this.consume(":"),e.value=this.expression()):e.value=e.key):this.peek("[")?(this.consume("["),
e.key=this.expression(),this.consume("]"),e.computed=!0,this.consume(":"),e.value=this.expression()):this.throwError("invalid key",this.peek()),
t.push(e)}while(this.expect(","));return this.consume("}"),{type:Eo.ObjectExpression,
properties:t}},throwError:function(e,t){throw go("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",t.text,e,t.index+1,this.text,this.text.substring(t.index));
},consume:function(e){if(0===this.tokens.length)throw go("ueoe","Unexpected end of expression: {0}",this.text);
var t=this.expect(e);return t||this.throwError("is unexpected, expecting ["+e+"]",this.peek()),
t},peekToken:function(){if(0===this.tokens.length)throw go("ueoe","Unexpected end of expression: {0}",this.text);
return this.tokens[0]},peek:function(e,t,n,r){return this.peekAhead(0,e,t,n,r)},peekAhead:function(e,t,n,r,i){
if(this.tokens.length>e){var o=this.tokens[e],a=o.text;if(a===t||a===n||a===r||a===i||!t&&!n&&!r&&!i)return o;
}return!1},expect:function(e,t,n,r){var i=this.peek(e,t,n,r);return i?(this.tokens.shift(),
i):!1},selfReferential:{"this":{type:Eo.ThisExpression},$locals:{type:Eo.LocalsExpression
}}},vn.prototype={compile:function(e,t){var n=this,i=this.astBuilder.ast(e);this.state={
nextId:0,filters:{},expensiveChecks:t,fn:{vars:[],body:[],own:{}},assign:{vars:[],
body:[],own:{}},inputs:[]},ln(i,n.$filter);var o,a="";if(this.stage="assign",o=dn(i)){
this.state.computing="assign";var s=this.nextId();this.recurse(o,s),this.return_(s),
a="fn.assign="+this.generateFunction("assign","s,v,l")}var u=fn(i.body);n.stage="inputs",
r(u,function(e,t){var r="fn"+t;n.state[r]={vars:[],body:[],own:{}},n.state.computing=r;
var i=n.nextId();n.recurse(e,i),n.return_(i),n.state.inputs.push(r),e.watchId=t}),
this.state.computing="fn",this.stage="main",this.recurse(i);var c='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+a+this.watchFns()+"return fn;",l=new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",c)(this.$filter,tn,rn,on,nn,an,sn,un,e);
return this.state=this.stage=void 0,l.literal=hn(i),l.constant=mn(i),l},USE:"use",
STRICT:"strict",watchFns:function(){var e=[],t=this.state.inputs,n=this;return r(t,function(t){
e.push("var "+t+"="+n.generateFunction(t,"s"))}),t.length&&e.push("fn.inputs=["+t.join(",")+"];"),
e.join("")},generateFunction:function(e,t){return"function("+t+"){"+this.varsPrefix(e)+this.body(e)+"};";
},filterPrefix:function(){var e=[],t=this;return r(this.state.filters,function(n,r){
e.push(n+"=$filter("+t.escape(r)+")")}),e.length?"var "+e.join(",")+";":""},varsPrefix:function(e){
return this.state[e].vars.length?"var "+this.state[e].vars.join(",")+";":""},body:function(e){
return this.state[e].body.join("")},recurse:function(e,t,n,i,o,a){var s,u,c,l,f,p=this;
if(i=i||d,!a&&$(e.watchId))return t=t||this.nextId(),void this.if_("i",this.lazyAssign(t,this.computedMember("i",e.watchId)),this.lazyRecurse(e,t,n,i,o,!0));
switch(e.type){case Eo.Program:r(e.body,function(t,n){p.recurse(t.expression,void 0,void 0,function(e){
u=e}),n!==e.body.length-1?p.current().body.push(u,";"):p.return_(u)});break;case Eo.Literal:
l=this.escape(e.value),this.assign(t,l),i(l);break;case Eo.UnaryExpression:this.recurse(e.argument,void 0,void 0,function(e){
u=e}),l=e.operator+"("+this.ifDefined(u,0)+")",this.assign(t,l),i(l);break;case Eo.BinaryExpression:
this.recurse(e.left,void 0,void 0,function(e){s=e}),this.recurse(e.right,void 0,void 0,function(e){
u=e}),l="+"===e.operator?this.plus(s,u):"-"===e.operator?this.ifDefined(s,0)+e.operator+this.ifDefined(u,0):"("+s+")"+e.operator+"("+u+")",
this.assign(t,l),i(l);break;case Eo.LogicalExpression:t=t||this.nextId(),p.recurse(e.left,t),
p.if_("&&"===e.operator?t:p.not(t),p.lazyRecurse(e.right,t)),i(t);break;case Eo.ConditionalExpression:
t=t||this.nextId(),p.recurse(e.test,t),p.if_(t,p.lazyRecurse(e.alternate,t),p.lazyRecurse(e.consequent,t)),
i(t);break;case Eo.Identifier:t=t||this.nextId(),n&&(n.context="inputs"===p.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",e.name)+"?l:s"),
n.computed=!1,n.name=e.name),tn(e.name),p.if_("inputs"===p.stage||p.not(p.getHasOwnProperty("l",e.name)),function(){
p.if_("inputs"===p.stage||"s",function(){o&&1!==o&&p.if_(p.not(p.nonComputedMember("s",e.name)),p.lazyAssign(p.nonComputedMember("s",e.name),"{}")),
p.assign(t,p.nonComputedMember("s",e.name))})},t&&p.lazyAssign(t,p.nonComputedMember("l",e.name))),
(p.state.expensiveChecks||$n(e.name))&&p.addEnsureSafeObject(t),i(t);break;case Eo.MemberExpression:
s=n&&(n.context=this.nextId())||this.nextId(),t=t||this.nextId(),p.recurse(e.object,s,void 0,function(){
p.if_(p.notNull(s),function(){o&&1!==o&&p.addEnsureSafeAssignContext(s),e.computed?(u=p.nextId(),
p.recurse(e.property,u),p.getStringValue(u),p.addEnsureSafeMemberName(u),o&&1!==o&&p.if_(p.not(p.computedMember(s,u)),p.lazyAssign(p.computedMember(s,u),"{}")),
l=p.ensureSafeObject(p.computedMember(s,u)),p.assign(t,l),n&&(n.computed=!0,n.name=u)):(tn(e.property.name),
o&&1!==o&&p.if_(p.not(p.nonComputedMember(s,e.property.name)),p.lazyAssign(p.nonComputedMember(s,e.property.name),"{}")),
l=p.nonComputedMember(s,e.property.name),(p.state.expensiveChecks||$n(e.property.name))&&(l=p.ensureSafeObject(l)),
p.assign(t,l),n&&(n.computed=!1,n.name=e.property.name))},function(){p.assign(t,"undefined");
}),i(t)},!!o);break;case Eo.CallExpression:t=t||this.nextId(),e.filter?(u=p.filter(e.callee.name),
c=[],r(e.arguments,function(e){var t=p.nextId();p.recurse(e,t),c.push(t)}),l=u+"("+c.join(",")+")",
p.assign(t,l),i(t)):(u=p.nextId(),s={},c=[],p.recurse(e.callee,u,s,function(){p.if_(p.notNull(u),function(){
p.addEnsureSafeFunction(u),r(e.arguments,function(e){p.recurse(e,p.nextId(),void 0,function(e){
c.push(p.ensureSafeObject(e))})}),s.name?(p.state.expensiveChecks||p.addEnsureSafeObject(s.context),
l=p.member(s.context,s.name,s.computed)+"("+c.join(",")+")"):l=u+"("+c.join(",")+")",
l=p.ensureSafeObject(l),p.assign(t,l)},function(){p.assign(t,"undefined")}),i(t)}));
break;case Eo.AssignmentExpression:if(u=this.nextId(),s={},!pn(e.left))throw go("lval","Trying to assign a value to a non l-value");
this.recurse(e.left,void 0,s,function(){p.if_(p.notNull(s.context),function(){p.recurse(e.right,u),
p.addEnsureSafeObject(p.member(s.context,s.name,s.computed)),p.addEnsureSafeAssignContext(s.context),
l=p.member(s.context,s.name,s.computed)+e.operator+u,p.assign(t,l),i(t||l)})},1);break;
case Eo.ArrayExpression:c=[],r(e.elements,function(e){p.recurse(e,p.nextId(),void 0,function(e){
c.push(e)})}),l="["+c.join(",")+"]",this.assign(t,l),i(l);break;case Eo.ObjectExpression:
c=[],f=!1,r(e.properties,function(e){e.computed&&(f=!0)}),f?(t=t||this.nextId(),this.assign(t,"{}"),
r(e.properties,function(e){e.computed?(s=p.nextId(),p.recurse(e.key,s)):s=e.key.type===Eo.Identifier?e.key.name:""+e.key.value,
u=p.nextId(),p.recurse(e.value,u),p.assign(p.member(t,s,e.computed),u)})):(r(e.properties,function(t){
p.recurse(t.value,e.constant?void 0:p.nextId(),void 0,function(e){c.push(p.escape(t.key.type===Eo.Identifier?t.key.name:""+t.key.value)+":"+e);
})}),l="{"+c.join(",")+"}",this.assign(t,l)),i(t||l);break;case Eo.ThisExpression:
this.assign(t,"s"),i("s");break;case Eo.LocalsExpression:this.assign(t,"l"),i("l");
break;case Eo.NGValueParameter:this.assign(t,"v"),i("v")}},getHasOwnProperty:function(e,t){
var n=e+"."+t,r=this.current().own;return r.hasOwnProperty(n)||(r[n]=this.nextId(!1,e+"&&("+this.escape(t)+" in "+e+")")),
r[n]},assign:function(e,t){return e?(this.current().body.push(e,"=",t,";"),e):void 0;
},filter:function(e){return this.state.filters.hasOwnProperty(e)||(this.state.filters[e]=this.nextId(!0)),
this.state.filters[e]},ifDefined:function(e,t){return"ifDefined("+e+","+this.escape(t)+")";
},plus:function(e,t){return"plus("+e+","+t+")"},return_:function(e){this.current().body.push("return ",e,";");
},if_:function(e,t,n){if(e===!0)t();else{var r=this.current().body;r.push("if(",e,"){"),
t(),r.push("}"),n&&(r.push("else{"),n(),r.push("}"))}},not:function(e){return"!("+e+")";
},notNull:function(e){return e+"!=null"},nonComputedMember:function(e,t){var n=/[$_a-zA-Z][$_a-zA-Z0-9]*/,r=/[^$_a-zA-Z0-9]/g;
return n.test(t)?e+"."+t:e+'["'+t.replace(r,this.stringEscapeFn)+'"]'},computedMember:function(e,t){
return e+"["+t+"]"},member:function(e,t,n){return n?this.computedMember(e,t):this.nonComputedMember(e,t);
},addEnsureSafeObject:function(e){this.current().body.push(this.ensureSafeObject(e),";");
},addEnsureSafeMemberName:function(e){this.current().body.push(this.ensureSafeMemberName(e),";");
},addEnsureSafeFunction:function(e){this.current().body.push(this.ensureSafeFunction(e),";");
},addEnsureSafeAssignContext:function(e){this.current().body.push(this.ensureSafeAssignContext(e),";");
},ensureSafeObject:function(e){return"ensureSafeObject("+e+",text)"},ensureSafeMemberName:function(e){
return"ensureSafeMemberName("+e+",text)"},ensureSafeFunction:function(e){return"ensureSafeFunction("+e+",text)";
},getStringValue:function(e){this.assign(e,"getStringValue("+e+")")},ensureSafeAssignContext:function(e){
return"ensureSafeAssignContext("+e+",text)"},lazyRecurse:function(e,t,n,r,i,o){var a=this;
return function(){a.recurse(e,t,n,r,i,o)}},lazyAssign:function(e,t){var n=this;return function(){
n.assign(e,t)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4);
},escape:function(e){if(x(e))return"'"+e.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";
if(w(e))return e.toString();if(e===!0)return"true";if(e===!1)return"false";if(null===e)return"null";
if("undefined"==typeof e)return"undefined";throw go("esc","IMPOSSIBLE")},nextId:function(e,t){
var n="v"+this.state.nextId++;return e||this.current().vars.push(n+(t?"="+t:"")),
n},current:function(){return this.state[this.state.computing]}},gn.prototype={compile:function(e,t){
var n=this,i=this.astBuilder.ast(e);this.expression=e,this.expensiveChecks=t,ln(i,n.$filter);
var o,a;(o=dn(i))&&(a=this.recurse(o));var s,u=fn(i.body);u&&(s=[],r(u,function(e,t){
var r=n.recurse(e);e.input=r,s.push(r),e.watchId=t}));var c=[];r(i.body,function(e){
c.push(n.recurse(e.expression))});var l=0===i.body.length?d:1===i.body.length?c[0]:function(e,t){
var n;return r(c,function(r){n=r(e,t)}),n};return a&&(l.assign=function(e,t,n){return a(e,n,t);
}),s&&(l.inputs=s),l.literal=hn(i),l.constant=mn(i),l},recurse:function(e,t,n){var i,o,a,s=this;
if(e.input)return this.inputs(e.input,e.watchId);switch(e.type){case Eo.Literal:return this.value(e.value,t);
case Eo.UnaryExpression:return o=this.recurse(e.argument),this["unary"+e.operator](o,t);
case Eo.BinaryExpression:return i=this.recurse(e.left),o=this.recurse(e.right),this["binary"+e.operator](i,o,t);
case Eo.LogicalExpression:return i=this.recurse(e.left),o=this.recurse(e.right),this["binary"+e.operator](i,o,t);
case Eo.ConditionalExpression:return this["ternary?:"](this.recurse(e.test),this.recurse(e.alternate),this.recurse(e.consequent),t);
case Eo.Identifier:return tn(e.name,s.expression),s.identifier(e.name,s.expensiveChecks||$n(e.name),t,n,s.expression);
case Eo.MemberExpression:return i=this.recurse(e.object,!1,!!n),e.computed||(tn(e.property.name,s.expression),
o=e.property.name),e.computed&&(o=this.recurse(e.property)),e.computed?this.computedMember(i,o,t,n,s.expression):this.nonComputedMember(i,o,s.expensiveChecks,t,n,s.expression);
case Eo.CallExpression:return a=[],r(e.arguments,function(e){a.push(s.recurse(e));
}),e.filter&&(o=this.$filter(e.callee.name)),e.filter||(o=this.recurse(e.callee,!0)),
e.filter?function(e,n,r,i){for(var s=[],u=0;u<a.length;++u)s.push(a[u](e,n,r,i));var c=o.apply(void 0,s,i);
return t?{context:void 0,name:void 0,value:c}:c}:function(e,n,r,i){var u,c=o(e,n,r,i);
if(null!=c.value){rn(c.context,s.expression),on(c.value,s.expression);for(var l=[],f=0;f<a.length;++f)l.push(rn(a[f](e,n,r,i),s.expression));
u=rn(c.value.apply(c.context,l),s.expression)}return t?{value:u}:u};case Eo.AssignmentExpression:
return i=this.recurse(e.left,!0,1),o=this.recurse(e.right),function(e,n,r,a){var u=i(e,n,r,a),c=o(e,n,r,a);
return rn(u.value,s.expression),an(u.context),u.context[u.name]=c,t?{value:c}:c};case Eo.ArrayExpression:
return a=[],r(e.elements,function(e){a.push(s.recurse(e))}),function(e,n,r,i){for(var o=[],s=0;s<a.length;++s)o.push(a[s](e,n,r,i));
return t?{value:o}:o};case Eo.ObjectExpression:return a=[],r(e.properties,function(e){
e.computed?a.push({key:s.recurse(e.key),computed:!0,value:s.recurse(e.value)}):a.push({
key:e.key.type===Eo.Identifier?e.key.name:""+e.key.value,computed:!1,value:s.recurse(e.value)
})}),function(e,n,r,i){for(var o={},s=0;s<a.length;++s)a[s].computed?o[a[s].key(e,n,r,i)]=a[s].value(e,n,r,i):o[a[s].key]=a[s].value(e,n,r,i);
return t?{value:o}:o};case Eo.ThisExpression:return function(e){return t?{value:e
}:e};case Eo.LocalsExpression:return function(e,n){return t?{value:n}:n};case Eo.NGValueParameter:
return function(e,n,r){return t?{value:r}:r}}},"unary+":function(e,t){return function(n,r,i,o){
var a=e(n,r,i,o);return a=$(a)?+a:0,t?{value:a}:a}},"unary-":function(e,t){return function(n,r,i,o){
var a=e(n,r,i,o);return a=$(a)?-a:0,t?{value:a}:a}},"unary!":function(e,t){return function(n,r,i,o){
var a=!e(n,r,i,o);return t?{value:a}:a}},"binary+":function(e,t,n){return function(r,i,o,a){
var s=e(r,i,o,a),u=t(r,i,o,a),c=un(s,u);return n?{value:c}:c}},"binary-":function(e,t,n){
return function(r,i,o,a){var s=e(r,i,o,a),u=t(r,i,o,a),c=($(s)?s:0)-($(u)?u:0);return n?{
value:c}:c}},"binary*":function(e,t,n){return function(r,i,o,a){var s=e(r,i,o,a)*t(r,i,o,a);
return n?{value:s}:s}},"binary/":function(e,t,n){return function(r,i,o,a){var s=e(r,i,o,a)/t(r,i,o,a);
return n?{value:s}:s}},"binary%":function(e,t,n){return function(r,i,o,a){var s=e(r,i,o,a)%t(r,i,o,a);
return n?{value:s}:s}},"binary===":function(e,t,n){return function(r,i,o,a){var s=e(r,i,o,a)===t(r,i,o,a);
return n?{value:s}:s}},"binary!==":function(e,t,n){return function(r,i,o,a){var s=e(r,i,o,a)!==t(r,i,o,a);
return n?{value:s}:s}},"binary==":function(e,t,n){return function(r,i,o,a){var s=e(r,i,o,a)==t(r,i,o,a);
return n?{value:s}:s}},"binary!=":function(e,t,n){return function(r,i,o,a){var s=e(r,i,o,a)!=t(r,i,o,a);
return n?{value:s}:s}},"binary<":function(e,t,n){return function(r,i,o,a){var s=e(r,i,o,a)<t(r,i,o,a);
return n?{value:s}:s}},"binary>":function(e,t,n){return function(r,i,o,a){var s=e(r,i,o,a)>t(r,i,o,a);
return n?{value:s}:s}},"binary<=":function(e,t,n){return function(r,i,o,a){var s=e(r,i,o,a)<=t(r,i,o,a);
return n?{value:s}:s}},"binary>=":function(e,t,n){return function(r,i,o,a){var s=e(r,i,o,a)>=t(r,i,o,a);
return n?{value:s}:s}},"binary&&":function(e,t,n){return function(r,i,o,a){var s=e(r,i,o,a)&&t(r,i,o,a);
return n?{value:s}:s}},"binary||":function(e,t,n){return function(r,i,o,a){var s=e(r,i,o,a)||t(r,i,o,a);
return n?{value:s}:s}},"ternary?:":function(e,t,n,r){return function(i,o,a,s){var u=e(i,o,a,s)?t(i,o,a,s):n(i,o,a,s);
return r?{value:u}:u}},value:function(e,t){return function(){return t?{context:void 0,
name:void 0,value:e}:e}},identifier:function(e,t,n,r,i){return function(o,a,s,u){
var c=a&&e in a?a:o;r&&1!==r&&c&&!c[e]&&(c[e]={});var l=c?c[e]:void 0;return t&&rn(l,i),
n?{context:c,name:e,value:l}:l}},computedMember:function(e,t,n,r,i){return function(o,a,s,u){
var c,l,f=e(o,a,s,u);return null!=f&&(c=t(o,a,s,u),c=nn(c),tn(c,i),r&&1!==r&&(an(f),
f&&!f[c]&&(f[c]={})),l=f[c],rn(l,i)),n?{context:f,name:c,value:l}:l}},nonComputedMember:function(e,t,n,r,i,o){
return function(a,s,u,c){var l=e(a,s,u,c);i&&1!==i&&(an(l),l&&!l[t]&&(l[t]={}));var f=null!=l?l[t]:void 0;
return(n||$n(t))&&rn(f,o),r?{context:l,name:t,value:f}:f}},inputs:function(e,t){return function(n,r,i,o){
return o?o[t]:e(n,r,i)}}};var Co=function(e,t,n){this.lexer=e,this.$filter=t,this.options=n,
this.ast=new Eo(e,n),this.astCompiler=n.csp?new gn(this.ast,t):new vn(this.ast,t);
};Co.prototype={constructor:Co,parse:function(e){return this.astCompiler.compile(e,this.options.expensiveChecks);
}};var Ao=Object.prototype.valueOf,ko=t("$sce"),To={HTML:"html",CSS:"css",URL:"url",
RESOURCE_URL:"resourceUrl",JS:"js"},No=t("$compile"),jo=e.document.createElement("a"),Oo=Rn(e.location.href);
Ln.$inject=["$document"],Vn.$inject=["$provide"];var Do=22,Mo=".",Fo="0";Wn.$inject=["$locale"],
zn.$inject=["$locale"];var Ro={yyyy:Kn("FullYear",4,0,!1,!0),yy:Kn("FullYear",2,0,!0,!0),
y:Kn("FullYear",1,0,!1,!0),MMMM:Zn("Month"),MMM:Zn("Month",!0),MM:Kn("Month",2,1),
M:Kn("Month",1,1),LLLL:Zn("Month",!1,!0),dd:Kn("Date",2),d:Kn("Date",1),HH:Kn("Hours",2),
H:Kn("Hours",1),hh:Kn("Hours",2,-12),h:Kn("Hours",1,-12),mm:Kn("Minutes",2),m:Kn("Minutes",1),
ss:Kn("Seconds",2),s:Kn("Seconds",1),sss:Kn("Milliseconds",3),EEEE:Zn("Day"),EEE:Zn("Day",!0),
a:rr,Z:Qn,ww:nr(2),w:nr(1),G:ir,GG:ir,GGG:ir,GGGG:or},Io=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,qo=/^\-?\d+$/;
ar.$inject=["$locale"];var Lo=m(Lr),Po=m(Pr);lr.$inject=["$parse"];var Vo=m({restrict:"E",
compile:function(e,t){return t.href||t.xlinkHref?void 0:function(e,t){if("a"===t[0].nodeName.toLowerCase()){
var n="[object SVGAnimatedString]"===Xr.call(t.prop("href"))?"xlink:href":"href";t.on("click",function(e){
t.attr(n)||e.preventDefault()})}}}}),_o={};r(Di,function(e,t){function n(e,n,i){e.$watch(i[r],function(e){
i.$set(t,!!e)})}if("multiple"!=e){var r=gt("ng-"+t),i=n;"checked"===e&&(i=function(e,t,i){
i.ngModel!==i[r]&&n(e,t,i)}),_o[r]=function(){return{restrict:"A",priority:100,link:i
}}}}),r(Fi,function(e,t){_o[t]=function(){return{priority:100,link:function(e,n,r){
if("ngPattern"===t&&"/"==r.ngPattern.charAt(0)){var i=r.ngPattern.match(Rr);if(i)return void r.$set("ngPattern",new RegExp(i[1],i[2]));
}e.$watch(r[t],function(e){r.$set(t,e)})}}}}),r(["src","srcset","href"],function(e){
var t=gt("ng-"+e);_o[t]=function(){return{priority:99,link:function(n,r,i){var o=e,a=e;
"href"===e&&"[object SVGAnimatedString]"===Xr.call(r.prop("href"))&&(a="xlinkHref",
i.$attr[a]="xlink:href",o=null),i.$observe(t,function(t){return t?(i.$set(a,t),void(Hr&&o&&r.prop(o,i[a]))):void("href"===e&&i.$set(a,null));
})}}}});var Ho={$addControl:d,$$renameControl:pr,$removeControl:d,$setValidity:d,
$setDirty:d,$setPristine:d,$setSubmitted:d},Bo="ng-submitted";dr.$inject=["$element","$attrs","$scope","$animate","$interpolate"];
var Uo=function(e){return["$timeout","$parse",function(t,n){function r(e){return""===e?n('this[""]').assign:n(e).assign||d;
}var i={name:"form",restrict:e?"EAC":"E",require:["form","^^?form"],controller:dr,
compile:function(n,i){n.addClass(Aa).addClass(Ea);var o=i.name?"name":e&&i.ngForm?"ngForm":!1;
return{pre:function(e,n,i,a){var s=a[0];if(!("action"in i)){var u=function(t){e.$apply(function(){
s.$commitViewValue(),s.$setSubmitted()}),t.preventDefault()};yi(n[0],"submit",u),
n.on("$destroy",function(){t(function(){bi(n[0],"submit",u)},0,!1)})}var l=a[1]||s.$$parentForm;
l.$addControl(s);var f=o?r(s.$name):d;o&&(f(e,s),i.$observe(o,function(t){s.$name!==t&&(f(e,void 0),
s.$$parentForm.$$renameControl(s,t),(f=r(s.$name))(e,s))})),n.on("$destroy",function(){
s.$$parentForm.$removeControl(s),f(e,void 0),c(s,Ho)})}}}};return i}]},Wo=Uo(),zo=Uo(!0),Go=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Jo=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Xo=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Yo=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Ko=/^(\d{4,})-(\d{2})-(\d{2})$/,Zo=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Qo=/^(\d{4,})-W(\d\d)$/,ea=/^(\d{4,})-(\d\d)$/,ta=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,na="keydown wheel mousedown",ra=me();
r("date,datetime-local,month,time,week".split(","),function(e){ra[e]=!0});var ia={
text:mr,date:yr("date",Ko,$r(Ko,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":yr("datetimelocal",Zo,$r(Zo,["yyyy","MM","dd","HH","mm","ss","sss"]),"yyyy-MM-ddTHH:mm:ss.sss"),
time:yr("time",ta,$r(ta,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:yr("week",Qo,gr,"yyyy-Www"),
month:yr("month",ea,$r(ea,["yyyy","MM"]),"yyyy-MM"),number:xr,url:wr,email:Sr,radio:Er,
checkbox:Ar,hidden:d,button:d,submit:d,reset:d,file:d},oa=["$browser","$sniffer","$filter","$parse",function(e,t,n,r){
return{restrict:"E",require:["?ngModel"],link:{pre:function(i,o,a,s){s[0]&&(ia[Lr(a.type)]||ia.text)(i,o,a,s[0],t,e,n,r);
}}}}],aa=/^(true|false|\d+)$/,sa=function(){return{restrict:"A",priority:100,compile:function(e,t){
return aa.test(t.ngValue)?function(e,t,n){n.$set("value",e.$eval(n.ngValue))}:function(e,t,n){
e.$watch(n.ngValue,function(e){n.$set("value",e)})}}}},ua=["$compile",function(e){
return{restrict:"AC",compile:function(t){return e.$$addBindingClass(t),function(t,n,r){
e.$$addBindingInfo(n,r.ngBind),n=n[0],t.$watch(r.ngBind,function(e){n.textContent=g(e)?"":e;
})}}}}],ca=["$interpolate","$compile",function(e,t){return{compile:function(n){return t.$$addBindingClass(n),
function(n,r,i){var o=e(r.attr(i.$attr.ngBindTemplate));t.$$addBindingInfo(r,o.expressions),
r=r[0],i.$observe("ngBindTemplate",function(e){r.textContent=g(e)?"":e})}}}}],la=["$sce","$parse","$compile",function(e,t,n){
return{restrict:"A",compile:function(r,i){var o=t(i.ngBindHtml),a=t(i.ngBindHtml,function(t){
return e.valueOf(t)});return n.$$addBindingClass(r),function(t,r,i){n.$$addBindingInfo(r,i.ngBindHtml),
t.$watch(a,function(){var n=o(t);r.html(e.getTrustedHtml(n)||"")})}}}}],fa=m({restrict:"A",
require:"ngModel",link:function(e,t,n,r){r.$viewChangeListeners.push(function(){e.$eval(n.ngChange);
})}}),pa=kr("",!0),da=kr("Odd",0),ha=kr("Even",1),ma=fr({compile:function(e,t){t.$set("ngCloak",void 0),
e.removeClass("ng-cloak")}}),va=[function(){return{restrict:"A",scope:!0,controller:"@",
priority:500}}],ga={},$a={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(e){
var t=gt("ng-"+e);ga[t]=["$parse","$rootScope",function(n,r){return{restrict:"A",
compile:function(i,o){var a=n(o[t],null,!0);return function(t,n){n.on(e,function(n){
var i=function(){a(t,{$event:n})};$a[e]&&r.$$phase?t.$evalAsync(i):t.$apply(i)})};
}}}]});var ya=["$animate","$compile",function(e,t){return{multiElement:!0,transclude:"element",
priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(n,r,i,o,a){var s,u,c;
n.$watch(i.ngIf,function(n){n?u||a(function(n,o){u=o,n[n.length++]=t.$$createComment("end ngIf",i.ngIf),
s={clone:n},e.enter(n,r.parent(),r)}):(c&&(c.remove(),c=null),u&&(u.$destroy(),u=null),
s&&(c=he(s.clone),e.leave(c).then(function(){c=null}),s=null))})}}}],ba=["$templateRequest","$anchorScroll","$animate",function(e,t,n){
return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Zr.noop,
compile:function(r,i){var o=i.ngInclude||i.src,a=i.onload||"",s=i.autoscroll;return function(r,i,u,c,l){
var f,p,d,h=0,m=function(){p&&(p.remove(),p=null),f&&(f.$destroy(),f=null),d&&(n.leave(d).then(function(){
p=null}),p=d,d=null)};r.$watch(o,function(o){var u=function(){!$(s)||s&&!r.$eval(s)||t();
},p=++h;o?(e(o,!0).then(function(e){if(!r.$$destroyed&&p===h){var t=r.$new();c.template=e;
var s=l(t,function(e){m(),n.enter(e,null,i).then(u)});f=t,d=s,f.$emit("$includeContentLoaded",o),
r.$eval(a)}},function(){r.$$destroyed||p===h&&(m(),r.$emit("$includeContentError",o));
}),r.$emit("$includeContentRequested",o)):(m(),c.template=null)})}}}}],xa=["$compile",function(t){
return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(n,r,i,o){return Xr.call(r[0]).match(/SVG/)?(r.empty(),
void t(ke(o.template,e.document).childNodes)(n,function(e){r.append(e)},{futureParentElement:r
})):(r.html(o.template),void t(r.contents())(n))}}}],wa=fr({priority:450,compile:function(){
return{pre:function(e,t,n){e.$eval(n.ngInit)}}}}),Sa=function(){return{restrict:"A",
priority:100,require:"ngModel",link:function(e,t,n,i){var o=t.attr(n.$attr.ngList)||", ",a="false"!==n.ngTrim,s=a?ni(o):o,u=function(e){
if(!g(e)){var t=[];return e&&r(e.split(s),function(e){e&&t.push(a?ni(e):e)}),t}};i.$parsers.push(u),
i.$formatters.push(function(e){return ei(e)?e.join(o):void 0}),i.$isEmpty=function(e){
return!e||!e.length}}}},Ea="ng-valid",Ca="ng-invalid",Aa="ng-pristine",ka="ng-dirty",Ta="ng-untouched",Na="ng-touched",ja="ng-pending",Oa="ng-empty",Da="ng-not-empty",Ma=t("ngModel"),Fa=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(e,t,n,i,o,a,s,u,c,l){
this.$viewValue=Number.NaN,this.$modelValue=Number.NaN,this.$$rawModelValue=void 0,
this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],
this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,
this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},this.$$success={},this.$pending=void 0,
this.$name=l(n.name||"",!1)(e),this.$$parentForm=Ho;var f,p=o(n.ngModel),h=p.assign,m=p,v=h,y=null,b=this;
this.$$setOptions=function(e){if(b.$options=e,e&&e.getterSetter){var t=o(n.ngModel+"()"),r=o(n.ngModel+"($$$p)");
m=function(e){var n=p(e);return E(n)&&(n=t(e)),n},v=function(e,t){E(p(e))?r(e,{$$$p:t
}):h(e,t)}}else if(!p.assign)throw Ma("nonassign","Expression '{0}' is non-assignable. Element: {1}",n.ngModel,K(i));
},this.$render=d,this.$isEmpty=function(e){return g(e)||""===e||null===e||e!==e},
this.$$updateEmptyClasses=function(e){b.$isEmpty(e)?(a.removeClass(i,Da),a.addClass(i,Oa)):(a.removeClass(i,Oa),
a.addClass(i,Da))};var x=0;Tr({ctrl:this,$element:i,set:function(e,t){e[t]=!0},unset:function(e,t){
delete e[t]},$animate:a}),this.$setPristine=function(){b.$dirty=!1,b.$pristine=!0,
a.removeClass(i,ka),a.addClass(i,Aa)},this.$setDirty=function(){b.$dirty=!0,b.$pristine=!1,
a.removeClass(i,Aa),a.addClass(i,ka),b.$$parentForm.$setDirty()},this.$setUntouched=function(){
b.$touched=!1,b.$untouched=!0,a.setClass(i,Ta,Na)},this.$setTouched=function(){b.$touched=!0,
b.$untouched=!1,a.setClass(i,Na,Ta)},this.$rollbackViewValue=function(){s.cancel(y),
b.$viewValue=b.$$lastCommittedViewValue,b.$render()},this.$validate=function(){if(!w(b.$modelValue)||!isNaN(b.$modelValue)){
var e=b.$$lastCommittedViewValue,t=b.$$rawModelValue,n=b.$valid,r=b.$modelValue,i=b.$options&&b.$options.allowInvalid;
b.$$runValidators(t,e,function(e){i||n===e||(b.$modelValue=e?t:void 0,b.$modelValue!==r&&b.$$writeModelToScope());
})}},this.$$runValidators=function(e,t,n){function i(){var e=b.$$parserName||"parse";
return g(f)?(s(e,null),!0):(f||(r(b.$validators,function(e,t){s(t,null)}),r(b.$asyncValidators,function(e,t){
s(t,null)})),s(e,f),f)}function o(){var n=!0;return r(b.$validators,function(r,i){
var o=r(e,t);n=n&&o,s(i,o)}),n?!0:(r(b.$asyncValidators,function(e,t){s(t,null)}),
!1)}function a(){var n=[],i=!0;r(b.$asyncValidators,function(r,o){var a=r(e,t);if(!D(a))throw Ma("nopromise","Expected asynchronous validator to return a promise but got '{0}' instead.",a);
s(o,void 0),n.push(a.then(function(){s(o,!0)},function(){i=!1,s(o,!1)}))}),n.length?c.all(n).then(function(){
u(i)},d):u(!0)}function s(e,t){l===x&&b.$setValidity(e,t)}function u(e){l===x&&n(e);
}x++;var l=x;return i()&&o()?void a():void u(!1)},this.$commitViewValue=function(){
var e=b.$viewValue;s.cancel(y),(b.$$lastCommittedViewValue!==e||""===e&&b.$$hasNativeValidators)&&(b.$$updateEmptyClasses(e),
b.$$lastCommittedViewValue=e,b.$pristine&&this.$setDirty(),this.$$parseAndValidate());
},this.$$parseAndValidate=function(){function t(){b.$modelValue!==o&&b.$$writeModelToScope();
}var n=b.$$lastCommittedViewValue,r=n;if(f=g(r)?void 0:!0)for(var i=0;i<b.$parsers.length;i++)if(r=b.$parsers[i](r),
g(r)){f=!1;break}w(b.$modelValue)&&isNaN(b.$modelValue)&&(b.$modelValue=m(e));var o=b.$modelValue,a=b.$options&&b.$options.allowInvalid;
b.$$rawModelValue=r,a&&(b.$modelValue=r,t()),b.$$runValidators(r,b.$$lastCommittedViewValue,function(e){
a||(b.$modelValue=e?r:void 0,t())})},this.$$writeModelToScope=function(){v(e,b.$modelValue),
r(b.$viewChangeListeners,function(e){try{e()}catch(n){t(n)}})},this.$setViewValue=function(e,t){
b.$viewValue=e,(!b.$options||b.$options.updateOnDefault)&&b.$$debounceViewValueCommit(t);
},this.$$debounceViewValueCommit=function(t){var n,r=0,i=b.$options;i&&$(i.debounce)&&(n=i.debounce,
w(n)?r=n:w(n[t])?r=n[t]:w(n["default"])&&(r=n["default"])),s.cancel(y),r?y=s(function(){
b.$commitViewValue()},r):u.$$phase?b.$commitViewValue():e.$apply(function(){b.$commitViewValue();
})},e.$watch(function(){var t=m(e);if(t!==b.$modelValue&&(b.$modelValue===b.$modelValue||t===t)){
b.$modelValue=b.$$rawModelValue=t,f=void 0;for(var n=b.$formatters,r=n.length,i=t;r--;)i=n[r](i);
b.$viewValue!==i&&(b.$$updateEmptyClasses(i),b.$viewValue=b.$$lastCommittedViewValue=i,
b.$render(),b.$$runValidators(t,i,d))}return t})}],Ra=["$rootScope",function(e){return{
restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Fa,priority:1,
compile:function(t){return t.addClass(Aa).addClass(Ta).addClass(Ea),{pre:function(e,t,n,r){
var i=r[0],o=r[1]||i.$$parentForm;i.$$setOptions(r[2]&&r[2].$options),o.$addControl(i),
n.$observe("name",function(e){i.$name!==e&&i.$$parentForm.$$renameControl(i,e)}),
e.$on("$destroy",function(){i.$$parentForm.$removeControl(i)})},post:function(t,n,r,i){
var o=i[0];o.$options&&o.$options.updateOn&&n.on(o.$options.updateOn,function(e){
o.$$debounceViewValueCommit(e&&e.type)}),n.on("blur",function(){o.$touched||(e.$$phase?t.$evalAsync(o.$setTouched):t.$apply(o.$setTouched));
})}}}}}],Ia=/(\s+|^)default(\s+|$)/,qa=function(){return{restrict:"A",controller:["$scope","$attrs",function(e,t){
var n=this;this.$options=V(e.$eval(t.ngModelOptions)),$(this.$options.updateOn)?(this.$options.updateOnDefault=!1,
this.$options.updateOn=ni(this.$options.updateOn.replace(Ia,function(){return n.$options.updateOnDefault=!0,
" "}))):this.$options.updateOnDefault=!0}]}},La=fr({terminal:!0,priority:1e3}),Pa=t("ngOptions"),Va=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,_a=["$compile","$document","$parse",function(t,i,o){
function a(e,t,r){function i(e,t,n,r,i){this.selectValue=e,this.viewValue=t,this.label=n,
this.group=r,this.disabled=i}function a(e){var t;if(!c&&n(e))t=e;else{t=[];for(var r in e)e.hasOwnProperty(r)&&"$"!==r.charAt(0)&&t.push(r);
}return t}var s=e.match(Va);if(!s)throw Pa("iexp","Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",e,K(t));
var u=s[5]||s[7],c=s[6],l=/ as /.test(s[0])&&s[1],f=s[9],p=o(s[2]?s[1]:u),d=l&&o(l),h=d||p,m=f&&o(f),v=f?function(e,t){
return m(r,t)}:function(e){return Ze(e)},g=function(e,t){return v(e,S(e,t))},$=o(s[2]||s[1]),y=o(s[3]||""),b=o(s[4]||""),x=o(s[8]),w={},S=c?function(e,t){
return w[c]=t,w[u]=e,w}:function(e){return w[u]=e,w};return{trackBy:f,getTrackByValue:g,
getWatchables:o(x,function(e){var t=[];e=e||[];for(var n=a(e),i=n.length,o=0;i>o;o++){
var u=e===n?o:n[o],c=e[u],l=S(c,u),f=v(c,l);if(t.push(f),s[2]||s[1]){var p=$(r,l);
t.push(p)}if(s[4]){var d=b(r,l);t.push(d)}}return t}),getOptions:function(){for(var e=[],t={},n=x(r)||[],o=a(n),s=o.length,u=0;s>u;u++){
var c=n===o?u:o[u],l=n[c],p=S(l,c),d=h(r,p),m=v(d,p),w=$(r,p),E=y(r,p),C=b(r,p),A=new i(m,d,w,E,C);
e.push(A),t[m]=A}return{items:e,selectValueMap:t,getOptionFromViewValue:function(e){
return t[g(e)]},getViewValueFromOption:function(e){return f?Zr.copy(e.viewValue):e.viewValue;
}}}}}function s(e,n,o,s){function l(e,t){var n=u.cloneNode(!1);t.appendChild(n),f(e,n);
}function f(e,t){e.element=t,t.disabled=e.disabled,e.label!==t.label&&(t.label=e.label,
t.textContent=e.label),e.value!==t.value&&(t.value=e.selectValue)}function p(){var e=S&&h.readValue();
if(S)for(var t=S.items.length-1;t>=0;t--){var r=S.items[t];Ue($(r.group)?r.element.parentNode:r.element);
}S=E.getOptions();var i={};if(x&&n.prepend(d),S.items.forEach(function(e){var t;$(e.group)?(t=i[e.group],
t||(t=c.cloneNode(!1),C.appendChild(t),t.label=null===e.group?"null":e.group,i[e.group]=t),
l(e,t)):l(e,C)}),n[0].appendChild(C),m.$render(),!m.$isEmpty(e)){var o=h.readValue(),a=E.trackBy||v;
(a?_(e,o):e===o)||(m.$setViewValue(o),m.$render())}}for(var d,h=s[0],m=s[1],v=o.multiple,g=0,y=n.children(),b=y.length;b>g;g++)if(""===y[g].value){
d=y.eq(g);break}var x=!!d,w=Br(u.cloneNode(!1));w.val("?");var S,E=a(o.ngOptions,n,e),C=i[0].createDocumentFragment(),A=function(){
x||n.prepend(d),n.val(""),d.prop("selected",!0),d.attr("selected",!0)},k=function(){
x||d.remove()},T=function(){n.prepend(w),n.val("?"),w.prop("selected",!0),w.attr("selected",!0);
},N=function(){w.remove()};v?(m.$isEmpty=function(e){return!e||0===e.length},h.writeValue=function(e){
S.items.forEach(function(e){e.element.selected=!1}),e&&e.forEach(function(e){var t=S.getOptionFromViewValue(e);
t&&(t.element.selected=!0)})},h.readValue=function(){var e=n.val()||[],t=[];return r(e,function(e){
var n=S.selectValueMap[e];n&&!n.disabled&&t.push(S.getViewValueFromOption(n))}),t;
},E.trackBy&&e.$watchCollection(function(){return ei(m.$viewValue)?m.$viewValue.map(function(e){
return E.getTrackByValue(e)}):void 0},function(){m.$render()})):(h.writeValue=function(e){
var t=S.getOptionFromViewValue(e);t?(n[0].value!==t.selectValue&&(N(),k(),n[0].value=t.selectValue,
t.element.selected=!0),t.element.setAttribute("selected","selected")):null===e||x?(N(),
A()):(k(),T())},h.readValue=function(){var e=S.selectValueMap[n.val()];return e&&!e.disabled?(k(),
N(),S.getViewValueFromOption(e)):null},E.trackBy&&e.$watch(function(){return E.getTrackByValue(m.$viewValue);
},function(){m.$render()})),x?(d.remove(),t(d)(e),d.removeClass("ng-scope")):d=Br(u.cloneNode(!1)),
n.empty(),p(),e.$watchCollection(E.getWatchables,p)}var u=e.document.createElement("option"),c=e.document.createElement("optgroup");
return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(e,t,n,r){
r[0].registerOption=d},post:s}}}],Ha=["$locale","$interpolate","$log",function(e,t,n){
var i=/{}/g,o=/^when(Minus)?(.+)$/;return{link:function(a,s,u){function c(e){s.text(e||"");
}var l,f=u.count,p=u.$attr.when&&s.attr(u.$attr.when),h=u.offset||0,m=a.$eval(p)||{},v={},$=t.startSymbol(),y=t.endSymbol(),b=$+f+"-"+h+y,x=Zr.noop;
r(u,function(e,t){var n=o.exec(t);if(n){var r=(n[1]?"-":"")+Lr(n[2]);m[r]=s.attr(u.$attr[t]);
}}),r(m,function(e,n){v[n]=t(e.replace(i,b))}),a.$watch(f,function(t){var r=parseFloat(t),i=isNaN(r);
if(i||r in m||(r=e.pluralCat(r-h)),r!==l&&!(i&&w(l)&&isNaN(l))){x();var o=v[r];g(o)?(null!=t&&n.debug("ngPluralize: no rule defined for '"+r+"' in "+p),
x=d,c()):x=a.$watch(o,c),l=r}})}}}],Ba=["$parse","$animate","$compile",function(e,i,o){
var a="$$NG_REMOVED",s=t("ngRepeat"),u=function(e,t,n,r,i,o,a){e[n]=r,i&&(e[i]=o),
e.$index=t,e.$first=0===t,e.$last=t===a-1,e.$middle=!(e.$first||e.$last),e.$odd=!(e.$even=0===(1&t));
},c=function(e){return e.clone[0]},l=function(e){return e.clone[e.clone.length-1];
};return{restrict:"A",multiElement:!0,transclude:"element",priority:1e3,terminal:!0,
$$tlb:!0,compile:function(t,f){var p=f.ngRepeat,d=o.$$createComment("end ngRepeat",p),h=p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!h)throw s("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",p);
var m=h[1],v=h[2],g=h[3],$=h[4];if(h=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/),
!h)throw s("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",m);
var y=h[3]||h[1],b=h[2];if(g&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(g)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(g)))throw s("badident","alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",g);
var x,w,S,E,C={$id:Ze};return $?x=e($):(S=function(e,t){return Ze(t)},E=function(e){
return e}),function(e,t,o,f,h){x&&(w=function(t,n,r){return b&&(C[b]=t),C[y]=n,C.$index=r,
x(e,C)});var m=me();e.$watchCollection(v,function(o){var f,v,$,x,C,A,k,T,N,j,O,D,M=t[0],F=me();
if(g&&(e[g]=o),n(o))N=o,T=w||S;else{T=w||E,N=[];for(var R in o)qr.call(o,R)&&"$"!==R.charAt(0)&&N.push(R);
}for(x=N.length,O=new Array(x),f=0;x>f;f++)if(C=o===N?f:N[f],A=o[C],k=T(C,A,f),m[k])j=m[k],
delete m[k],F[k]=j,O[f]=j;else{if(F[k])throw r(O,function(e){e&&e.scope&&(m[e.id]=e);
}),s("dupes","Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",p,k,A);
O[f]={id:k,scope:void 0,clone:void 0},F[k]=!0}for(var I in m){if(j=m[I],D=he(j.clone),
i.leave(D),D[0].parentNode)for(f=0,v=D.length;v>f;f++)D[f][a]=!0;j.scope.$destroy();
}for(f=0;x>f;f++)if(C=o===N?f:N[f],A=o[C],j=O[f],j.scope){$=M;do $=$.nextSibling;while($&&$[a]);
c(j)!=$&&i.move(he(j.clone),null,M),M=l(j),u(j.scope,f,y,A,b,C,x)}else h(function(e,t){
j.scope=t;var n=d.cloneNode(!1);e[e.length++]=n,i.enter(e,null,M),M=n,j.clone=e,F[j.id]=j,
u(j.scope,f,y,A,b,C,x)});m=F})}}}}],Ua="ng-hide",Wa="ng-hide-animate",za=["$animate",function(e){
return{restrict:"A",multiElement:!0,link:function(t,n,r){t.$watch(r.ngShow,function(t){
e[t?"removeClass":"addClass"](n,Ua,{tempClasses:Wa})})}}}],Ga=["$animate",function(e){
return{restrict:"A",multiElement:!0,link:function(t,n,r){t.$watch(r.ngHide,function(t){
e[t?"addClass":"removeClass"](n,Ua,{tempClasses:Wa})})}}}],Ja=fr(function(e,t,n){
e.$watch(n.ngStyle,function(e,n){n&&e!==n&&r(n,function(e,n){t.css(n,"")}),e&&t.css(e);
},!0)}),Xa=["$animate","$compile",function(e,t){return{require:"ngSwitch",controller:["$scope",function(){
this.cases={}}],link:function(n,i,o,a){var s=o.ngSwitch||o.on,u=[],c=[],l=[],f=[],p=function(e,t){
return function(){e.splice(t,1)}};n.$watch(s,function(n){var i,o;for(i=0,o=l.length;o>i;++i)e.cancel(l[i]);
for(l.length=0,i=0,o=f.length;o>i;++i){var s=he(c[i].clone);f[i].$destroy();var d=l[i]=e.leave(s);
d.then(p(l,i))}c.length=0,f.length=0,(u=a.cases["!"+n]||a.cases["?"])&&r(u,function(n){
n.transclude(function(r,i){f.push(i);var o=n.element;r[r.length++]=t.$$createComment("end ngSwitchWhen");
var a={clone:r};c.push(a),e.enter(r,o.parent(),o)})})})}}}],Ya=fr({transclude:"element",
priority:1200,require:"^ngSwitch",multiElement:!0,link:function(e,t,n,r,i){r.cases["!"+n.ngSwitchWhen]=r.cases["!"+n.ngSwitchWhen]||[],
r.cases["!"+n.ngSwitchWhen].push({transclude:i,element:t})}}),Ka=fr({transclude:"element",
priority:1200,require:"^ngSwitch",multiElement:!0,link:function(e,t,n,r,i){r.cases["?"]=r.cases["?"]||[],
r.cases["?"].push({transclude:i,element:t})}}),Za=t("ngTransclude"),Qa=["$compile",function(e){
return{restrict:"EAC",terminal:!0,compile:function(t){var n=e(t.contents());return t.empty(),
function(e,t,r,i,o){function a(e,n){e.length?t.append(e):(s(),n.$destroy())}function s(){
n(e,function(e){t.append(e)})}if(!o)throw Za("orphan","Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",K(t));
r.ngTransclude===r.$attr.ngTransclude&&(r.ngTransclude="");var u=r.ngTransclude||r.ngTranscludeSlot;
o(a,null,u),u&&!o.isSlotFilled(u)&&s()}}}}],es=["$templateCache",function(e){return{
restrict:"E",terminal:!0,compile:function(t,n){if("text/ng-template"==n.type){var r=n.id,i=t[0].text;
e.put(r,i)}}}}],ts={$setViewValue:d,$render:d},ns=["$element","$scope",function(t,n){
var r=this,i=new Qe;r.ngModelCtrl=ts,r.unknownOption=Br(e.document.createElement("option")),
r.renderUnknownOption=function(e){var n="? "+Ze(e)+" ?";r.unknownOption.val(n),t.prepend(r.unknownOption),
t.val(n)},n.$on("$destroy",function(){r.renderUnknownOption=d}),r.removeUnknownOption=function(){
r.unknownOption.parent()&&r.unknownOption.remove()},r.readValue=function(){return r.removeUnknownOption(),
t.val()},r.writeValue=function(e){r.hasOption(e)?(r.removeUnknownOption(),t.val(e),
""===e&&r.emptyOption.prop("selected",!0)):null==e&&r.emptyOption?(r.removeUnknownOption(),
t.val("")):r.renderUnknownOption(e)},r.addOption=function(e,t){if(t[0].nodeType!==di){
pe(e,'"option value"'),""===e&&(r.emptyOption=t);var n=i.get(e)||0;i.put(e,n+1),r.ngModelCtrl.$render(),
jr(t)}},r.removeOption=function(e){var t=i.get(e);t&&(1===t?(i.remove(e),""===e&&(r.emptyOption=void 0)):i.put(e,t-1));
},r.hasOption=function(e){return!!i.get(e)},r.registerOption=function(e,t,n,i,o){
if(i){var a;n.$observe("value",function(e){$(a)&&r.removeOption(a),a=e,r.addOption(e,t);
})}else o?e.$watch(o,function(e,i){n.$set("value",e),i!==e&&r.removeOption(i),r.addOption(e,t);
}):r.addOption(n.value,t);t.on("$destroy",function(){r.removeOption(n.value),r.ngModelCtrl.$render();
})}}],rs=function(){function e(e,t,n,i){var o=i[1];if(o){var a=i[0];if(a.ngModelCtrl=o,
t.on("change",function(){e.$apply(function(){o.$setViewValue(a.readValue())})}),n.multiple){
a.readValue=function(){var e=[];return r(t.find("option"),function(t){t.selected&&e.push(t.value);
}),e},a.writeValue=function(e){var n=new Qe(e);r(t.find("option"),function(e){e.selected=$(n.get(e.value));
})};var s,u=NaN;e.$watch(function(){u!==o.$viewValue||_(s,o.$viewValue)||(s=ge(o.$viewValue),
o.$render()),u=o.$viewValue}),o.$isEmpty=function(e){return!e||0===e.length}}}}function t(e,t,n,r){
var i=r[1];if(i){var o=r[0];i.$render=function(){o.writeValue(i.$viewValue)}}}return{
restrict:"E",require:["select","?ngModel"],controller:ns,priority:1,link:{pre:e,post:t
}}},is=["$interpolate",function(e){return{restrict:"E",priority:100,compile:function(t,n){
if($(n.value))var r=e(n.value,!0);else{var i=e(t.text(),!0);i||n.$set("value",t.text());
}return function(e,t,n){var o="$selectController",a=t.parent(),s=a.data(o)||a.parent().data(o);
s&&s.registerOption(e,t,n,r,i)}}}}],os=m({restrict:"E",terminal:!1}),as=function(){
return{restrict:"A",require:"?ngModel",link:function(e,t,n,r){r&&(n.required=!0,r.$validators.required=function(e,t){
return!n.required||!r.$isEmpty(t)},n.$observe("required",function(){r.$validate();
}))}}},ss=function(){return{restrict:"A",require:"?ngModel",link:function(e,n,r,i){
if(i){var o,a=r.ngPattern||r.pattern;r.$observe("pattern",function(e){if(x(e)&&e.length>0&&(e=new RegExp("^"+e+"$")),
e&&!e.test)throw t("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element: {2}",a,e,K(n));
o=e||void 0,i.$validate()}),i.$validators.pattern=function(e,t){return i.$isEmpty(t)||g(o)||o.test(t);
}}}}},us=function(){return{restrict:"A",require:"?ngModel",link:function(e,t,n,r){
if(r){var i=-1;n.$observe("maxlength",function(e){var t=f(e);i=isNaN(t)?-1:t,r.$validate();
}),r.$validators.maxlength=function(e,t){return 0>i||r.$isEmpty(t)||t.length<=i}}
}}},cs=function(){return{restrict:"A",require:"?ngModel",link:function(e,t,n,r){if(r){
var i=0;n.$observe("minlength",function(e){i=f(e)||0,r.$validate()}),r.$validators.minlength=function(e,t){
return r.$isEmpty(t)||t.length>=i}}}}};if(e.angular.bootstrap)return void(e.console&&console.log("WARNING: Tried to load angular more than once."));
ce(),be(Zr),Zr.module("ngLocale",[],["$provide",function(e){function t(e){e+="";var t=e.indexOf(".");
return-1==t?0:e.length-t-1}function n(e,n){var r=n;void 0===r&&(r=Math.min(t(e),3));
var i=Math.pow(10,r),o=(e*i|0)%i;return{v:r,f:o}}var r={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ERANAMES:["Before Christ","Anno Domini"],
ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["January","February","March","April","May","June","July","August","September","October","November","December"],
SHORTDAY:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],SHORTMONTH:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
STANDALONEMONTH:["January","February","March","April","May","June","July","August","September","October","November","December"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",
mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(e,t){var i=0|e,o=n(e,t);
return 1==i&&0==o.v?r.ONE:r.OTHER}})}]),Zr.scenario=Zr.scenario||{},Zr.scenario.jQuery=Fr,
Zr.scenario.output=Zr.scenario.output||function(e,t){Zr.scenario.output[e]=t},Zr.scenario.dsl=Zr.scenario.dsl||function(e,t){
Zr.scenario.dsl[e]=function(){function e(t,n){var r=t.apply(this,n);if(Zr.isFunction(r)||r instanceof Zr.scenario.Future)return r;
var i=this,o=Zr.extend({},r);return Zr.forEach(o,function(t,n){Zr.isFunction(t)?o[n]=function(){
return e.call(i,t,arguments)}:o[n]=t}),o}var n=t.apply(this,arguments);return function(){
return e.call(this,n,arguments)}}},Zr.scenario.matcher=Zr.scenario.matcher||function(e,t){
Zr.scenario.matcher[e]=function(n){var r=this.future.name+(this.inverse?" not ":" ")+e+" "+Zr.toJson(n),i=this;
this.addFuture("expect "+r,function(e){var o;i.actual=i.future.value,(i.inverse&&t.call(i,n)||!i.inverse&&!t.call(i,n))&&(o="expected "+r+" but was "+Zr.toJson(i.actual)),
e(o)})}},Zr.scenario.setUpAndRun=function(t){var n=e.location.href,r=Fr(e.document.body),i=[],o=new Zr.scenario.ObjectModel(ls);
if(t&&t.scenario_output&&(i=t.scenario_output.split(",")),Zr.forEach(Zr.scenario.output,function(e,t){
if(!i.length||-1!=i.indexOf(t)){var n=r.append("<div></div>").find("div:last");n.attr("id",t),
e.call({},n,ls,o)}}),!/^http/.test(n)&&!/^https/.test(n))return r.append('<p id="system-error"></p>'),
void r.find("#system-error").text("Scenario runner must be run using http or https. The protocol "+n.split(":")[0]+":// is not supported.");
var a=r.append('<div id="application"></div>').find("#application"),s=new Zr.scenario.Application(a);
ls.on("RunnerEnd",function(){a.css("display","none"),a.find("iframe").attr("src","about:blank");
}),ls.on("RunnerError",function(t){e.console?console.log(Dr(t)):alert(t)}),ls.run(s);
},function(e){var t=e._originalTrigger=e.trigger;e.trigger=function(e){if(/(click|change|keydown|blur|input|mousedown|mouseup)/.test(e)){
var n=[];return this.each(function(t,r){n.push(browserTrigger(r,e))}),n}return t.apply(this,arguments);
}}(Fr.fn),Fr.fn.bindings=function(e,t){function n(e){Zr.isUndefined(e)?e="":"string"!=typeof e&&(e=Zr.toJson(e)),
i.push(""+e)}var r,i=[],o=".ng-binding:visible";Zr.isString(t)?(t=t.replace(/\s/g,""),
r=function(e){if(e){if(e=e.replace(/\s/g,""),e==t)return!0;if(0===e.indexOf(t))return"|"==e.charAt(t.length);
}}):r=t?function(e){return e&&t.exec(e)}:function(e){return!!e};var a=this.find(o);
return this.is(o)&&(a=a.add(this)),a.each(function(){var t,i=e(this);if(t=i.data("$binding"))for(var o,a=[],s=0,u=t.length;u>s;s++){
o=t[s],a=o.expressions?o.expressions:[o];for(var c,l,f=0,p=a.length;p>f;f++)l=a[f],
r(l)&&(c=c||i.scope(),n(c.$eval(l)))}}),i},function(){function t(){if("_cached"in t)return t._cached;
if(!e.document.createTouch||!e.document.createTouchList)return t._cached=!1,!1;try{
e.document.createEvent("TouchEvent")}catch(n){return t._cached=!1,!1}return t._cached=!0,
!0}function n(t,n,r,i){var o=new e.Event(n);r=r||0,i=i||0;var a=e.document.createTouch(e,t,Date.now(),r,i,r,i),s=e.document.createTouchList(a);
return o.touches=s,o}function r(){if("_cached"in r)return r._cached;r._cached=!1;var t=e.document;
if(t){var n=t.createElement("div"),i=n.cloneNode();n.appendChild(i),n.addEventListener("e",function(){
r._cached=!0});var o=e.document.createEvent("Events");o.initEvent("e",!0,!0),i.dispatchEvent(o);
}return r._cached}function i(e,t){var n=!1,r=t.stopPropagation;t.stopPropagation=function(){
n=!0,r.apply(t,arguments)},o(t,e);do e.dispatchEvent(t);while(!n&&(e=e.parentNode));
}function o(e,t){e._target=t,Object.defineProperty(e,"target",{get:function(){return this._target;
}})}function a(t){for(;t=t.parentNode;)if(t===e)return!0;return!1}e.browserTrigger=function(o,s,u){
function c(e){return-1!==f.indexOf(e)}if(o&&!o.nodeName&&(o=o[0]),o){u=u||{};var l=u.relatedTarget||o,f=u.keys,p=u.x,d=u.y,h=o.type?o.type.toLowerCase():null,m=o.nodeName.toLowerCase();
s||(s={text:"change",textarea:"change",hidden:"change",password:"change",button:"click",
submit:"click",reset:"click",image:"click",checkbox:"click",radio:"click","select-one":"change",
"select-multiple":"change",_default_:"click"}[h||"_default_"]),"option"===m&&(o.parentNode.value=o.value,
o=o.parentNode,s="change"),f=f||[];var v;if(/transitionend/.test(s))if(e.WebKitTransitionEvent)v=new WebKitTransitionEvent(s,u),
v.initEvent(s,!1,!0);else try{v=new TransitionEvent(s,u)}catch(g){v=e.document.createEvent("TransitionEvent"),
v.initTransitionEvent(s,null,null,null,u.elapsedTime||0)}else if(/animationend/.test(s))if(e.WebKitAnimationEvent)v=new WebKitAnimationEvent(s,u),
v.initEvent(s,!1,!0);else try{v=new AnimationEvent(s,u)}catch(g){v=e.document.createEvent("AnimationEvent"),
v.initAnimationEvent(s,null,null,null,u.elapsedTime||0)}else/touch/.test(s)&&t()?v=n(o,s,p,d):/key/.test(s)?(v=e.document.createEvent("Events"),
v.initEvent(s,u.bubbles,u.cancelable),v.view=e,v.ctrlKey=c("ctrl"),v.altKey=c("alt"),
v.shiftKey=c("shift"),v.metaKey=c("meta"),v.keyCode=u.keyCode,v.charCode=u.charCode,
v.which=u.which):(v=e.document.createEvent("MouseEvents"),p=p||0,d=d||0,v.initMouseEvent(s,!0,!0,e,0,p,d,p,d,c("ctrl"),c("alt"),c("shift"),c("meta"),0,l));
if(v.$manualTimeStamp=u.timeStamp,v){var $,y=v.preventDefault,b=o.ownerDocument.defaultView,x=!0,w=b.angular||{};
return w["ff-684208-preventDefault"]=!1,v.preventDefault=function(){return x=!1,y.apply(v,arguments);
},!u.bubbles||r()||a(o)?o.dispatchEvent(v):i(o,v),$=!(w["ff-684208-preventDefault"]||!x),
delete w["ff-684208-preventDefault"],$}}}}(),Zr.scenario.Application=function(e){
this.context=e,e.append('<h2>Current URL: <a href="about:blank">None</a></h2><div id="test-frames"></div>');
},Zr.scenario.Application.prototype.getFrame_=function(){return this.context.find("#test-frames iframe:last");
},Zr.scenario.Application.prototype.getWindow_=function(){var e=this.getFrame_().prop("contentWindow");
if(!e)throw"Frame window is not accessible.";return e},Zr.scenario.Application.prototype.navigateTo=function(e,t,n){
var r=this,i=r.getFrame_();n=n||function(e){throw e},"about:blank"===e?n("Sandbox Error: Navigating to about:blank is not allowed."):"#"===e.charAt(0)?(e=i.attr("src").split("#")[0]+e,
i.attr("src",e),r.executeAction(t)):(i.remove(),r.context.find("#test-frames").append("<iframe>"),
i=r.getFrame_(),i.on("load",function(){function e(){var e=o.angular.resumeBootstrap([["$provide",function(e){
return["$animate",function(e){e.enabled(!1)}]}]]);r.rootElement=e.get("$rootElement")[0],
r.executeAction(t)}i.off();try{var o=r.getWindow_();if(!o.angular)return void r.executeAction(t);
o.angular.resumeBootstrap?e():o.angular.resumeDeferredBootstrap=e}catch(a){n(a)}}).attr("src",e),
i[0].contentWindow.name="NG_DEFER_BOOTSTRAP!"),r.context.find("> h2 a").attr("href",e).text(e);
},Zr.scenario.Application.prototype.executeAction=function(e){function t(t){var i=r.angular.element(t).injector(),o=Fr(t);
o.injector=function(){return i},i.invoke(function(t){t.notifyWhenNoOutstandingRequests(function(){
e.call(n,r,o)})})}var n=this,r=this.getWindow_();if(!r.document)throw"Sandbox Error: Application document not accessible.";
return r.angular?void(this.rootElement?t(this.rootElement):ie(r.document,Zr.bind(this,t))):e.call(this,r,Fr(r.document));
},Zr.scenario.Describe=function(e,t){this.only=t&&t.only,this.beforeEachFns=[],this.afterEachFns=[],
this.its=[],this.children=[],this.name=e,this.parent=t,this.id=Zr.scenario.Describe.id++;
var n=this.beforeEachFns;this.setupBefore=function(){t&&t.setupBefore.call(this),
Zr.forEach(n,function(e){e.call(this)},this)};var r=this.afterEachFns;this.setupAfter=function(){
Zr.forEach(r,function(e){e.call(this)},this),t&&t.setupAfter.call(this)}},Zr.scenario.Describe.id=0,
Zr.scenario.Describe.specId=0,Zr.scenario.Describe.prototype.beforeEach=function(e){
this.beforeEachFns.push(e)},Zr.scenario.Describe.prototype.afterEach=function(e){
this.afterEachFns.push(e)},Zr.scenario.Describe.prototype.describe=function(e,t){
var n=new Zr.scenario.Describe(e,this);this.children.push(n),t.call(n)},Zr.scenario.Describe.prototype.ddescribe=function(e,t){
var n=new Zr.scenario.Describe(e,this);n.only=!0,this.children.push(n),t.call(n)},
Zr.scenario.Describe.prototype.xdescribe=Zr.noop,Zr.scenario.Describe.prototype.it=function(e,t){
this.its.push({id:Zr.scenario.Describe.specId++,definition:this,only:this.only,name:e,
before:this.setupBefore,body:t,after:this.setupAfter})},Zr.scenario.Describe.prototype.iit=function(e,t){
this.it.apply(this,arguments),this.its[this.its.length-1].only=!0},Zr.scenario.Describe.prototype.xit=Zr.noop,
Zr.scenario.Describe.prototype.getSpecs=function(){var e=arguments[0]||[];Zr.forEach(this.children,function(t){
t.getSpecs(e)}),Zr.forEach(this.its,function(t){e.push(t)});var t=[];return Zr.forEach(e,function(e){
e.only&&t.push(e)}),t.length&&t||e},Zr.scenario.Future=function(e,t,n){this.name=e,
this.behavior=t,this.fulfilled=!1,this.value=void 0,this.parser=Zr.identity,this.line=n||function(){
return""}},Zr.scenario.Future.prototype.execute=function(e){var t=this;this.behavior(function(n,r){
if(t.fulfilled=!0,r)try{r=t.parser(r)}catch(i){n=i}t.value=n||r,e(n,r)})},Zr.scenario.Future.prototype.parsedWith=function(e){
return this.parser=e,this},Zr.scenario.Future.prototype.fromJson=function(){return this.parsedWith(Zr.fromJson);
},Zr.scenario.Future.prototype.toJson=function(){return this.parsedWith(Zr.toJson);
},Zr.scenario.ObjectModel=function(e){function t(e){e.endTime=Date.now(),e.duration=e.endTime-e.startTime,
e.status=e.status||"success"}var n=this;this.specMap={},this.listeners=[],this.value={
name:"",children:{}},e.on("SpecBegin",function(e){var t=n.value,r=[];Zr.forEach(n.getDefinitionPath(e),function(e){
t.children[e.name]||(t.children[e.name]={id:e.id,name:e.name,children:{},specs:{}
}),t=t.children[e.name],r.push(e.name)});var i=n.specMap[e.id]=t.specs[e.name]=new Zr.scenario.ObjectModel.Spec(e.id,e.name,r);
n.emit("SpecBegin",i)}),e.on("SpecError",function(e,t){var r=n.getSpec(e.id);r.status="error",
r.error=t,n.emit("SpecError",r,t)}),e.on("SpecEnd",function(e){var r=n.getSpec(e.id);
t(r),n.emit("SpecEnd",r)}),e.on("StepBegin",function(e,t){var r=n.getSpec(e.id);t=new Zr.scenario.ObjectModel.Step(t.name),
r.steps.push(t),n.emit("StepBegin",r,t)}),e.on("StepEnd",function(e){var r=n.getSpec(e.id),i=r.getLastStep();
if(i.name!==i.name)throw"Events fired in the wrong order. Step names don't match.";
t(i),n.emit("StepEnd",r,i)}),e.on("StepFailure",function(e,t,r){var i=n.getSpec(e.id),o=i.getLastStep();
o.setErrorStatus("failure",r,t.line()),i.setStatusFromStep(o),n.emit("StepFailure",i,o,r);
}),e.on("StepError",function(e,t,r){var i=n.getSpec(e.id),o=i.getLastStep();o.setErrorStatus("error",r,t.line()),
i.setStatusFromStep(o),n.emit("StepError",i,o,r)}),e.on("RunnerBegin",function(){
n.emit("RunnerBegin")}),e.on("RunnerEnd",function(){n.emit("RunnerEnd")})},Zr.scenario.ObjectModel.prototype.on=function(e,t){
e=e.toLowerCase(),this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(t);
},Zr.scenario.ObjectModel.prototype.emit=function(e){var t=this,n=Array.prototype.slice.call(arguments,1);
e=e.toLowerCase(),this.listeners[e]&&Zr.forEach(this.listeners[e],function(e){e.apply(t,n);
})},Zr.scenario.ObjectModel.prototype.getDefinitionPath=function(e){for(var t=[],n=e.definition;n&&n.name;)t.unshift(n),
n=n.parent;return t},Zr.scenario.ObjectModel.prototype.getSpec=function(e){return this.specMap[e];
},Zr.scenario.ObjectModel.Spec=function(e,t,n){this.id=e,this.name=t,this.startTime=Date.now(),
this.steps=[],this.fullDefinitionName=(n||[]).join(" ")},Zr.scenario.ObjectModel.Spec.prototype.addStep=function(e){
var t=new Zr.scenario.ObjectModel.Step(e);return this.steps.push(t),t},Zr.scenario.ObjectModel.Spec.prototype.getLastStep=function(){
return this.steps[this.steps.length-1]},Zr.scenario.ObjectModel.Spec.prototype.setStatusFromStep=function(e){
this.status&&"error"!=e.status||(this.status=e.status,this.error=e.error,this.line=e.line);
},Zr.scenario.ObjectModel.Step=function(e){this.name=e,this.startTime=Date.now()},
Zr.scenario.ObjectModel.Step.prototype.setErrorStatus=function(e,t,n){this.status=e,
this.error=t,this.line=n},Zr.scenario.Runner=function(e){this.listeners=[],this.$window=e,
this.rootDescribe=new Zr.scenario.Describe,this.currentDescribe=this.rootDescribe,
this.api={it:this.it,iit:this.iit,xit:Zr.noop,describe:this.describe,ddescribe:this.ddescribe,
xdescribe:Zr.noop,beforeEach:this.beforeEach,afterEach:this.afterEach},Zr.forEach(this.api,Zr.bind(this,function(e,t){
this.$window[t]=Zr.bind(this,e)}))},Zr.scenario.Runner.prototype.emit=function(e){
var t=this,n=Array.prototype.slice.call(arguments,1);e=e.toLowerCase(),this.listeners[e]&&Zr.forEach(this.listeners[e],function(e){
e.apply(t,n)})},Zr.scenario.Runner.prototype.on=function(e,t){e=e.toLowerCase(),this.listeners[e]=this.listeners[e]||[],
this.listeners[e].push(t)},Zr.scenario.Runner.prototype.describe=function(e,t){var n=this;
this.currentDescribe.describe(e,function(){var e=n.currentDescribe;n.currentDescribe=this;
try{t.call(this)}finally{n.currentDescribe=e}})},Zr.scenario.Runner.prototype.ddescribe=function(e,t){
var n=this;this.currentDescribe.ddescribe(e,function(){var e=n.currentDescribe;n.currentDescribe=this;
try{t.call(this)}finally{n.currentDescribe=e}})},Zr.scenario.Runner.prototype.it=function(e,t){
this.currentDescribe.it(e,t)},Zr.scenario.Runner.prototype.iit=function(e,t){this.currentDescribe.iit(e,t);
},Zr.scenario.Runner.prototype.beforeEach=function(e){this.currentDescribe.beforeEach(e);
},Zr.scenario.Runner.prototype.afterEach=function(e){this.currentDescribe.afterEach(e);
},Zr.scenario.Runner.prototype.createSpecRunner_=function(e){var t=e.$new(),n=Zr.scenario.SpecRunner;
for(var r in n.prototype)t[r]=Zr.bind(t,n.prototype[r]);return n.call(t),t},Zr.scenario.Runner.prototype.run=function(e){
var t=this,n=Zr.injector(["ng"]).get("$rootScope");Zr.extend(n,this),Zr.forEach(Zr.scenario.Runner.prototype,function(e,r){
n[r]=Zr.bind(t,e)}),n.application=e,n.emit("RunnerBegin"),Or(this.rootDescribe.getSpecs(),function(e,r){
var i={},o=t.createSpecRunner_(n);Zr.forEach(Zr.scenario.dsl,function(e,t){i[t]=e.call(n);
}),Zr.forEach(Zr.scenario.dsl,function(e,n){t.$window[n]=function(){var e=Mr(3),t=o.$new();
return t.dsl={},Zr.forEach(i,function(e,n){t.dsl[n]=function(){return i[n].apply(t,arguments);
}}),t.addFuture=function(){return Array.prototype.push.call(arguments,e),Zr.scenario.SpecRunner.prototype.addFuture.apply(t,arguments);
},t.addFutureAction=function(){return Array.prototype.push.call(arguments,e),Zr.scenario.SpecRunner.prototype.addFutureAction.apply(t,arguments);
},t.dsl[n].apply(t,arguments)}}),o.run(e,function(){o.$destroy(),r.apply(this,arguments);
})},function(e){e&&t.emit("RunnerError",e),t.emit("RunnerEnd")})},Zr.scenario.SpecRunner=function(){
this.futures=[],this.afterIndex=0},Zr.scenario.SpecRunner.prototype.run=function(e,t){
var n=this;this.spec=e,this.emit("SpecBegin",e);try{e.before.call(this),e.body.call(this),
this.afterIndex=this.futures.length,e.after.call(this)}catch(r){return this.emit("SpecError",e,r),
this.emit("SpecEnd",e),void t()}var i=function(e,t){return n.error?t():(n.error=!0,
void t(null,n.afterIndex))};Or(this.futures,function(t,r){n.step=t,n.emit("StepBegin",e,t);
try{t.execute(function(o){return o?(n.emit("StepFailure",e,t,o),n.emit("StepEnd",e,t),
i(o,r)):(n.emit("StepEnd",e,t),void n.$window.setTimeout(function(){r()},0))})}catch(o){
n.emit("StepError",e,t,o),n.emit("StepEnd",e,t),i(o,r)}},function(r){r&&n.emit("SpecError",e,r),
n.emit("SpecEnd",e),n.$window.setTimeout(function(){t()},0)})},Zr.scenario.SpecRunner.prototype.addFuture=function(e,t,n){
var r=new Zr.scenario.Future(e,Zr.bind(this,t),n);return this.futures.push(r),r},
Zr.scenario.SpecRunner.prototype.addFutureAction=function(e,t,n){var r=this,i=/\[ng\\\:/;
return this.addFuture(e,function(e){this.application.executeAction(function(n,o){
o.elements=function(e){var t=Array.prototype.slice.call(arguments,1);e=(r.selector||"")+" "+(e||""),
e=Fr.trim(e)||"*",Zr.forEach(t,function(t,n){e=e.replace("$"+(n+1),t)});var n=o.find(e);
if(e.match(i)&&Zr.forEach(["[ng-","[data-ng-","[x-ng-"],function(t,r){n=n.add(e.replace(i,t),o);
}),!n.length)throw{type:"selector",message:"Selector "+e+" did not match any elements."
};return n};try{t.call(r,n,o,e)}catch(a){if(!a.type||"selector"!==a.type)throw a;e(a.message);
}})},n)},Zr.scenario.dsl("pause",function(){return function(){return this.addFuture("pausing for you to resume",function(e){
this.emit("InteractivePause",this.spec,this.step),this.$window.resume=function(){
e()}})}}),Zr.scenario.dsl("sleep",function(){return function(e){return this.addFuture("sleep for "+e+" seconds",function(t){
this.$window.setTimeout(function(){t(null,1e3*e)},1e3*e)})}}),Zr.scenario.dsl("browser",function(){
var e={};return e.navigateTo=function(e,t){var n=this.application;return this.addFuture("browser navigate to '"+e+"'",function(r){
t&&(e=t.call(this,e)),n.navigateTo(e,function(){r(null,e)},r)})},e.reload=function(){
var e=this.application;return this.addFutureAction("browser reload",function(t,n,r){
var i=t.location.href;e.navigateTo(i,function(){r(null,i)},r)})},e.window=function(){
var e={};return e.href=function(){return this.addFutureAction("window.location.href",function(e,t,n){
n(null,e.location.href)})},e.path=function(){return this.addFutureAction("window.location.path",function(e,t,n){
n(null,e.location.pathname)})},e.search=function(){return this.addFutureAction("window.location.search",function(e,t,n){
n(null,e.location.search)})},e.hash=function(){return this.addFutureAction("window.location.hash",function(e,t,n){
n(null,e.location.hash.replace("#",""))})},e},e.location=function(){var e={};return e.url=function(){
return this.addFutureAction("$location.url()",function(e,t,n){n(null,t.injector().get("$location").url());
})},e.path=function(){return this.addFutureAction("$location.path()",function(e,t,n){
n(null,t.injector().get("$location").path())})},e.search=function(){return this.addFutureAction("$location.search()",function(e,t,n){
n(null,t.injector().get("$location").search())})},e.hash=function(){return this.addFutureAction("$location.hash()",function(e,t,n){
n(null,t.injector().get("$location").hash())})},e},function(){return e}}),Zr.scenario.dsl("expect",function(){
var e=Zr.extend({},Zr.scenario.matcher);return e.not=function(){return this.inverse=!0,
e},function(t){return this.future=t,e}}),Zr.scenario.dsl("using",function(){return function(e,t){
return this.selector=Fr.trim((this.selector||"")+" "+e),Zr.isString(t)&&t.length?this.label=t+" ( "+this.selector+" )":this.label=this.selector,
this.dsl}}),Zr.scenario.dsl("binding",function(){return function(e){return this.addFutureAction("select binding '"+e+"'",function(t,n,r){
var i=n.elements().bindings(t.angular.element,e);return i.length?void r(null,i[0]):r("Binding selector '"+e+"' did not match.");
})}}),Zr.scenario.dsl("input",function(){var t={},n="oninput"in e.document.createElement("div")&&!Hr;
return t.enter=function(e,t){return this.addFutureAction("input '"+this.name+"' enter '"+e+"'",function(r,i,o){
var a=i.elements('[ng\\:model="$1"]',this.name).filter(":input");a.val(e),a.trigger(t||(n?"input":"change")),
o()})},t.check=function(){return this.addFutureAction("checkbox '"+this.name+"' toggle",function(e,t,n){
var r=t.elements('[ng\\:model="$1"]',this.name).filter(":checkbox");r.trigger("click"),
n()})},t.select=function(e){return this.addFutureAction("radio button '"+this.name+"' toggle '"+e+"'",function(t,n,r){
var i=n.elements('[ng\\:model="$1"][value="$2"]',this.name,e).filter(":radio");i.trigger("click"),
r()})},t.val=function(){return this.addFutureAction("return input val",function(e,t,n){
var r=t.elements('[ng\\:model="$1"]',this.name).filter(":input");n(null,r.val())});
},function(e){return this.name=e,t}}),Zr.scenario.dsl("repeater",function(){var e={};
return e.count=function(){return this.addFutureAction("repeater '"+this.label+"' count",function(e,t,n){
try{n(null,t.elements().length)}catch(r){n(null,0)}})},e.column=function(e){return this.addFutureAction("repeater '"+this.label+"' column '"+e+"'",function(t,n,r){
r(null,n.elements().bindings(t.angular.element,e))})},e.row=function(e){return this.addFutureAction("repeater '"+this.label+"' row '"+e+"'",function(t,n,r){
var i=n.elements().slice(e,e+1);return i.length?void r(null,i.bindings(t.angular.element)):r("row "+e+" out of bounds");
})},function(t,n){return this.dsl.using(t,n),e}}),Zr.scenario.dsl("select",function(){
var e={};return e.option=function(e){return this.addFutureAction("select '"+this.name+"' option '"+e+"'",function(t,n,r){
var i=n.elements('select[ng\\:model="$1"]',this.name),o=i.find('option[value="'+e+'"]');
if(o.length)i.val(e);else{if(o=i.find("option").filter(function(){return Fr(this).text()===e;
}),o.length||(o=i.find('option:contains("'+e+'")')),!o.length)return r("option '"+e+"' not found");
i.val(o.val())}i.trigger("change"),r()})},e.options=function(){var e=arguments;return this.addFutureAction("select '"+this.name+"' options '"+e+"'",function(t,n,r){
var i=n.elements('select[multiple][ng\\:model="$1"]',this.name);i.val(e),i.trigger("change"),
r()})},function(t){return this.name=t,e}}),Zr.scenario.dsl("element",function(){var e=["attr","css","prop"],t=["val","text","html","height","innerHeight","outerHeight","width","innerWidth","outerWidth","position","scrollLeft","scrollTop","offset"],n={};
return n.count=function(){return this.addFutureAction("element '"+this.label+"' count",function(e,t,n){
try{n(null,t.elements().length)}catch(r){n(null,0)}})},n.click=function(){return this.addFutureAction("element '"+this.label+"' click",function(e,t,n){
var r=t.elements(),i=r.attr("href"),o=r.trigger("click")[0];i&&"a"===r[0].nodeName.toLowerCase()&&o?this.application.navigateTo(i,function(){
n()},n):n()})},n.dblclick=function(){return this.addFutureAction("element '"+this.label+"' dblclick",function(e,t,n){
var r=t.elements(),i=r.attr("href"),o=r.trigger("dblclick")[0];i&&"a"===r[0].nodeName.toLowerCase()&&o?this.application.navigateTo(i,function(){
n()},n):n()})},n.mouseover=function(){return this.addFutureAction("element '"+this.label+"' mouseover",function(e,t,n){
var r=t.elements();r.trigger("mouseover"),n()})},n.mousedown=function(){return this.addFutureAction("element '"+this.label+"' mousedown",function(e,t,n){
var r=t.elements();r.trigger("mousedown"),n()})},n.mouseup=function(){return this.addFutureAction("element '"+this.label+"' mouseup",function(e,t,n){
var r=t.elements();r.trigger("mouseup"),n()})},n.query=function(e){return this.addFutureAction("element "+this.label+" custom query",function(t,n,r){
e.call(this,n.elements(),r)})},Zr.forEach(e,function(e){n[e]=function(t,n){var r=arguments,i=1==r.length?"element '"+this.label+"' get "+e+" '"+t+"'":"element '"+this.label+"' set "+e+" '"+t+"' to '"+n+"'";
return this.addFutureAction(i,function(t,n,i){var o=n.elements();i(null,o[e].apply(o,r));
})}}),Zr.forEach(t,function(e){n[e]=function(t){var n=arguments,r=0===n.length?"element '"+this.label+"' "+e:"element '"+this.label+"' set "+e+" to '"+t+"'";
return this.addFutureAction(r,function(t,r,i){var o=r.elements();i(null,o[e].apply(o,n));
})}}),function(e,t){return this.dsl.using(e,t),n}}),Zr.scenario.matcher("toEqual",function(e){
return Zr.equals(this.actual,e)}),Zr.scenario.matcher("toBe",function(e){return this.actual===e;
}),Zr.scenario.matcher("toBeDefined",function(){return Zr.isDefined(this.actual)}),
Zr.scenario.matcher("toBeTruthy",function(){return this.actual}),Zr.scenario.matcher("toBeFalsy",function(){
return!this.actual}),Zr.scenario.matcher("toMatch",function(e){return new RegExp(e).test(this.actual);
}),Zr.scenario.matcher("toBeNull",function(){return null===this.actual}),Zr.scenario.matcher("toContain",function(e){
return L(this.actual,e)}),Zr.scenario.matcher("toBeLessThan",function(e){return this.actual<e;
}),Zr.scenario.matcher("toBeGreaterThan",function(e){return this.actual>e}),Zr.scenario.output("html",function(e,t,n){
function r(t){var r=e.find("#specs");return Zr.forEach(n.getDefinitionPath(t),function(t){
var n="describe-"+t.id;e.find("#"+n).length||(r.find("> .test-children").append('<div class="test-describe" id="'+n+'">  <h2></h2>  <div class="test-children"></div>  <ul class="tests"></ul></div>'),
e.find("#"+n).find("> h2").text("describe: "+t.name)),r=e.find("#"+n)}),e.find("#describe-"+t.definition.id);
}function i(t){var n=e.find("#status-legend .status-"+t),r=n.text().split(" "),i=1*r[0]+1;
n.text(i+" "+r[1])}function o(e,t,n){e.find(".test-title").append("<pre></pre>");var r=Fr.trim(t()+"\n\n"+Dr(n));
e.find(".test-title pre:last").text(r)}var a={},s={};e.append('<div id="header">  <h1><span class="angular">AngularJS</span>: Scenario Test Runner</h1>  <ul id="status-legend" class="status-display">    <li class="status-error">0 Errors</li>    <li class="status-failure">0 Failures</li>    <li class="status-success">0 Passed</li>  </ul></div><div id="specs">  <div class="test-children"></div></div>'),
t.on("InteractivePause",function(e){var t=s[e.id];t.find(".test-title").html('paused... <a href="javascript:resume()">resume</a> when ready.');
}),t.on("SpecBegin",function(t){var n=r(t);n.find("> .tests").append('<li class="status-pending test-it"></li>'),
n=n.find("> .tests li:last"),n.append('<div class="test-info">  <p class="test-title">    <span class="timer-result"></span>    <span class="test-name"></span>  </p></div><div class="scrollpane">  <ol class="test-actions"></ol></div>'),
n.find("> .test-info .test-name").text(t.name),n.find("> .test-info").click(function(){
var t=n.find("> .scrollpane"),r=t.find("> .test-actions"),i=e.find("> .test-info .test-name");
r.find(":visible").length?(r.hide(),i.removeClass("open").addClass("closed")):(r.show(),
t.attr("scrollTop",t.attr("scrollHeight")),i.removeClass("closed").addClass("open"));
}),a[t.id]=n}),t.on("SpecError",function(e,t){var n=a[e.id];n.append("<pre></pre>"),
n.find("> pre").text(Dr(t))}),t.on("SpecEnd",function(e){var t=a[e.id];e=n.getSpec(e.id),
t.removeClass("status-pending"),t.addClass("status-"+e.status),t.find("> .test-info .timer-result").text(e.duration+"ms"),
"success"===e.status&&(t.find("> .test-info .test-name").addClass("closed"),t.find("> .scrollpane .test-actions").hide()),
i(e.status)}),t.on("StepBegin",function(e,t){var r=a[e.id];e=n.getSpec(e.id),t=e.getLastStep(),
r.find("> .scrollpane .test-actions").append('<li class="status-pending"></li>');var i=s[e.id]=r.find("> .scrollpane .test-actions li:last");
i.append('<div class="timer-result"></div><div class="test-title"></div>'),i.find("> .test-title").text(t.name);
var o=i.parents(".scrollpane");o.attr("scrollTop",o.attr("scrollHeight"))}),t.on("StepFailure",function(e,t,n){
var r=s[e.id];o(r,t.line,n)}),t.on("StepError",function(e,t,n){var r=s[e.id];o(r,t.line,n);
}),t.on("StepEnd",function(e,t){var r=s[e.id];e=n.getSpec(e.id),t=e.getLastStep(),
r.find(".timer-result").text(t.duration+"ms"),r.removeClass("status-pending"),r.addClass("status-"+t.status);
var i=a[e.id].find("> .scrollpane");i.attr("scrollTop",i.attr("scrollHeight"))})}),
Zr.scenario.output("json",function(e,t,n){n.on("RunnerEnd",function(){e.text(Zr.toJson(n.value));
})}),Zr.scenario.output("xml",function(e,t,n){function r(e,t){Zr.forEach(t.children,function(t){
var n=i("<describe></describe>");n.attr("id",t.id),n.attr("name",t.name),e.append(n),
r(n,t)});var n=i("<its></its>");e.append(n),Zr.forEach(t.specs,function(e){var t=i("<it></it>");
t.attr("id",e.id),t.attr("name",e.name),t.attr("duration",e.duration),t.attr("status",e.status),
n.append(t),Zr.forEach(e.steps,function(e){var n=i("<step></step>");if(n.attr("name",e.name),
n.attr("duration",e.duration),n.attr("status",e.status),t.append(n),e.error){var r=i("<error></error>");
n.append(r),r.text(Dr(e.error))}})})}var i=function(t){return new e.init(t)};n.on("RunnerEnd",function(){
var t=i("<scenario></scenario>");e.append(t),r(t,n.value)})}),Zr.scenario.output("object",function(e,t,n){
t.$window.$result=n.value}),ce(),be(Zr);var ls=new Zr.scenario.Runner(e),fs=e.document.getElementsByTagName("script"),ps=fs[fs.length-1],ds={};
Zr.forEach(ps.attributes,function(e){var t=e.name.match(/ng[:\-](.*)/);t&&(ds[t[1]]=e.value||!0);
}),ds.autotest&&je(e.document).ready(function(){Zr.scenario.setUpAndRun(ds)})}(window),
!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";\n\n[ng\\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak],\n.ng-cloak, .x-ng-cloak,\n.ng-hide:not(.ng-hide-animate) {\n  display: none !important;\n}\n\nng\\:form {\n  display: block;\n}\n\n.ng-animate-shim {\n  visibility:hidden;\n}\n\n.ng-anchor {\n  position:absolute;\n}\n</style>'),
!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend("<style type=\"text/css\">@charset \"UTF-8\";\n/* CSS Document */\n\n/** Structure */\nbody {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  font-size: 14px;\n}\n\n#system-error {\n  font-size: 1.5em;\n  text-align: center;\n}\n\n#json, #xml {\n  display: none;\n}\n\n#header {\n  position: fixed;\n  width: 100%;\n}\n\n#specs {\n  padding-top: 50px;\n}\n\n#header .angular {\n  font-family: Courier New, monospace;\n  font-weight: bold;\n}\n\n#header h1 {\n  font-weight: normal;\n  float: left;\n  font-size: 30px;\n  line-height: 30px;\n  margin: 0;\n  padding: 10px 10px;\n  height: 30px;\n}\n\n#application h2,\n#specs h2 {\n  margin: 0;\n  padding: 0.5em;\n  font-size: 1.1em;\n}\n\n#status-legend {\n  margin-top: 10px;\n  margin-right: 10px;\n}\n\n#header,\n#application,\n.test-info,\n.test-actions li {\n  overflow: hidden;\n}\n\n#application {\n  margin: 10px;\n}\n\n#application iframe {\n  width: 100%;\n  height: 758px;\n}\n\n#application .popout {\n  float: right;\n}\n\n#application iframe {\n  border: none;\n}\n\n.tests li,\n.test-actions li,\n.test-it li,\n.test-it ol,\n.status-display {\n  list-style-type: none;\n}\n\n.tests,\n.test-it ol,\n.status-display {\n  margin: 0;\n  padding: 0;\n}\n\n.test-info {\n  margin-left: 1em;\n  margin-top: 0.5em;\n  border-radius: 8px 0 0 8px;\n  -webkit-border-radius: 8px 0 0 8px;\n  -moz-border-radius: 8px 0 0 8px;\n  cursor: pointer;\n}\n\n.test-info:hover .test-name {\n  text-decoration: underline;\n}\n\n.test-info .closed:before {\n  content: '\\25b8\\00A0';\n}\n\n.test-info .open:before {\n  content: '\\25be\\00A0';\n  font-weight: bold;\n}\n\n.test-it ol {\n  margin-left: 2.5em;\n}\n\n.status-display,\n.status-display li {\n  float: right;\n}\n\n.status-display li {\n  padding: 5px 10px;\n}\n\n.timer-result,\n.test-title {\n  display: inline-block;\n  margin: 0;\n  padding: 4px;\n}\n\n.test-actions .test-title,\n.test-actions .test-result {\n  display: table-cell;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n}\n\n.test-actions {\n  display: table;\n}\n\n.test-actions li {\n  display: table-row;\n}\n\n.timer-result {\n  width: 4em;\n  padding: 0 10px;\n  text-align: right;\n  font-family: monospace;\n}\n\n.test-it pre,\n.test-actions pre {\n  clear: left;\n  color: black;\n  margin-left: 6em;\n}\n\n.test-describe {\n  padding-bottom: 0.5em;\n}\n\n.test-describe .test-describe {\n  margin: 5px 5px 10px 2em;\n}\n\n.test-actions .status-pending .test-title:before {\n  content: '\\00bb\\00A0';\n}\n\n.scrollpane {\n   max-height: 20em;\n   overflow: auto;\n}\n\n/** Colors */\n\n#header {\n  background-color: #F2C200;\n}\n\n#specs h2 {\n  border-top: 2px solid #BABAD1;\n}\n\n#specs h2,\n#application h2 {\n  background-color: #efefef;\n}\n\n#application {\n  border: 1px solid #BABAD1;\n}\n\n.test-describe .test-describe {\n  border-left: 1px solid #BABAD1;\n  border-right: 1px solid #BABAD1;\n  border-bottom: 1px solid #BABAD1;\n}\n\n.status-display {\n  border: 1px solid #777;\n}\n\n.status-display .status-pending,\n.status-pending .test-info {\n  background-color: #F9EEBC;\n}\n\n.status-display .status-success,\n.status-success .test-info {\n  background-color: #B1D7A1;\n}\n\n.status-display .status-failure,\n.status-failure .test-info {\n  background-color: #FF8286;\n}\n\n.status-display .status-error,\n.status-error .test-info {\n  background-color: black;\n  color: white;\n}\n\n.test-actions .status-success .test-title {\n  color: #30B30A;\n}\n\n.test-actions .status-failure .test-title {\n  color: #DF0000;\n}\n\n.test-actions .status-error .test-title {\n  color: black;\n}\n\n.test-actions .timer-result {\n  color: #888;\n}\n</style>");