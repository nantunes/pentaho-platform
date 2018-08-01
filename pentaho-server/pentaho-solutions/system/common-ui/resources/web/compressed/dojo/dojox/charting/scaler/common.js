define(["dojo/_base/lang"],function(e){var t=function(e,t){return Math.abs(e-t)<=1e-6*(Math.abs(e)+Math.abs(t));
},n=e.getObject("dojox.charting.scaler.common",!0),r={};return e.mixin(n,{doIfLoaded:function(e,t,n){
if(void 0==r[e])try{r[e]=require(e)}catch(a){r[e]=null}return r[e]?t(r[e]):n()},getNumericLabel:function(e,r,a){
var o="";if(n.doIfLoaded("dojo/number",function(t){o=(a.fixed?t.format(e,{places:0>r?-r:0
}):t.format(e))||""},function(){o=a.fixed?e.toFixed(0>r?-r:0):e.toString()}),a.labelFunc){
var i=a.labelFunc(o,e,r);if(i)return i}if(a.labels){for(var u=a.labels,l=0,f=u.length;f>l;){
var c=Math.floor((l+f)/2),d=u[c].value;e>d?l=c+1:f=c}if(l<u.length&&t(u[l].value,e))return u[l].text;
if(--l,l>=0&&l<u.length&&t(u[l].value,e))return u[l].text;if(l+=2,l<u.length&&t(u[l].value,e))return u[l].text;
}return o}})});