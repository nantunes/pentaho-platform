define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/fx","dojo/fx","./_base","dojo/_base/array","dojo/dom","dojo/dom-style","dojo/dom-class","dojo/_base/connect"],function(e,o,t,n,r,d,a,i,s,l){
e.experimental("dojox.fx.style");var c=function(e){return d.map(r._allowedProperties,function(o){
return e[o]})},f=function(o,t,n){o=a.byId(o);var s=i.getComputedStyle(o),l=c(s);e[n?"addClass":"removeClass"](o,t);
var f=c(s);e[n?"removeClass":"addClass"](o,t);var u={},m=0;return d.forEach(r._allowedProperties,function(e){
l[m]!=f[m]&&(u[e]=parseInt(f[m])),m++}),u},u={addClass:function(e,n,r){e=a.byId(e);
var d=function(e){return function(){s.add(e,n),e.style.cssText=c}}(e),i=f(e,n,!0),c=e.style.cssText,u=t.animateProperty(o.mixin({
node:e,properties:i},r));return l.connect(u,"onEnd",u,d),u},removeClass:function(e,n,r){
e=a.byId(e);var d=function(e){return function(){s.remove(e,n),e.style.cssText=c}}(e),i=f(e,n),c=e.style.cssText,u=t.animateProperty(o.mixin({
node:e,properties:i},r));return l.connect(u,"onEnd",u,d),u},toggleClass:function(e,o,t,n){
return"undefined"==typeof t&&(t=!s.contains(e,o)),r[t?"addClass":"removeClass"](e,o,n);
},_allowedProperties:["width","height","left","top","backgroundColor","color","borderBottomWidth","borderTopWidth","borderLeftWidth","borderRightWidth","paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginTop","marginRight","marginBottom","lineHeight","letterSpacing","fontSize"]
};return o.mixin(r,u),u});