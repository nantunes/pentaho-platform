define(["dojo/_base/lang","dojo/_base/fx","dojo/dom-style"],function(e,t,n){function o(e,o){
var r=o.node=o.next.node,i=o.rotatorBox,d=e%2,s=(d?i.w:i.h)*(2>e?-1:1);return n.set(r,{
display:"",zIndex:(n.get(o.current.node,"zIndex")||1)+1}),o.properties||(o.properties={}),
o.properties[d?"left":"top"]={start:s,end:0},t.animateProperty(o)}var r=0,i=1,d=2,s=3,u={
slideDown:function(e){return o(r,e)},slideRight:function(e){return o(i,e)},slideUp:function(e){
return o(d,e)},slideLeft:function(e){return o(s,e)}};return e.mixin(e.getObject("dojox.widget.rotator"),u),
u});