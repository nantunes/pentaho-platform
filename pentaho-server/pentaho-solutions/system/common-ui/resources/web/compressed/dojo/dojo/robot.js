define(["./_base/array","./dom","./dom-geometry","./_base/kernel","./_base/lang","./_base/window","doh/_browserRunner","doh/robot","./window"],function(o,n,e,t,r,i,l,a,s){
return t.experimental("dojo.robot"),r.mixin(a,{_resolveNode:function(o){return"function"==typeof o&&(o=o()),
o?n.byId(o):null},_scrollIntoView:function(n){var t=null;o.forEach(a._getWindowChain(n),function(o){
var r=e.position(n,!1),i=e.getPadBorderExtents(n),l=null;t?(l=t,t={x:t.x+r.x+i.l,
y:t.y+r.y+i.t,w:t.w,h:t.h}):t=r,s.scrollIntoView(n,t),r=e.position(n,!1),t=l?{x:l.x+r.x+i.l,
y:l.y+r.y+i.t,w:t.w,h:t.h}:r,n=o.frameElement})},_position:function(n){var t=null,r=Math.max,i=Math.min;
return o.forEach(a._getWindowChain(n),function(o){var l=e.position(n,!1),a=e.getPadBorderExtents(n);
if(t){var u=s.getBox(n.contentWindow.document);l.r=l.x+u.w,l.b=l.y+u.h,t={x:r(t.x+l.x,l.x)+a.l,
y:r(t.y+l.y,l.y)+a.t,r:i(t.x+l.x+t.w,l.r)+a.l,b:i(t.y+l.y+t.h,l.b)+a.t},t.w=t.r-t.x,
t.h=t.b-t.y}else t=l;n=o.frameElement}),t},_getWindowChain:function(o){var n=s.get(o.ownerDocument),e=[n],t=n.frameElement;
return n!=i.global&&t?e.concat(a._getWindowChain(t)):e},scrollIntoView:function(o,n){
a.sequence(function(){a._scrollIntoView(a._resolveNode(o))},n)},mouseMoveAt:function(o,n,e,t,r){
a._assertRobot();var i={};this.sequence(function(){o=a._resolveNode(o),a._scrollIntoView(o);
var n=a._position(o);void 0===r&&(t=n.w/2,r=n.h/2),i.x=n.x+t,i.y=n.y+r},n),this.mouseMoveTo(i,0,e,!1);
}}),a});