define(["dojo/_base/lang","dojo/_base/fx","dojo/dom-style","dojo/fx"],function(n,e,o,t){
function d(d,r){var i=d.next.node;return o.set(i,{display:"",opacity:0}),d.node=d.current.node,
t[r]([e.fadeOut(d),e.fadeIn(n.mixin(d,{node:i}))])}var r={fade:function(n){return d(n,"chain");
},crossFade:function(n){return d(n,"combine")}};return n.mixin(n.getObject("dojox.widget.rotator"),r),
r});