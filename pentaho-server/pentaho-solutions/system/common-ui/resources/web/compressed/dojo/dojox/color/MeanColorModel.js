define(["dojo/_base/array","dojo/_base/declare","./NeutralColorModel"],function(o,e,n){
return e("dojox.color.MeanColorModel",n,{constructor:function(o,e){},computeNeutral:function(o,e,n,t){
var l=o;return 0!=t.length&&(l=t.length<3?n/t.length:0==(1&t.length)?(t[t.length/2-1]+t[t.length/2])/2:t[Math.floor(t.length/2)]),
l}})});