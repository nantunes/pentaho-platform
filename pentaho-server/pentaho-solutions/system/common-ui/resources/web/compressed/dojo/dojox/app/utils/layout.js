define(["dojo/_base/array","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/_base/lang"],function(t,o,n,e,i){
function r(t){return t.substring(0,1).toUpperCase()+t.substring(1)}function a(t,o){
var e=t.resize?t.resize(o):n.setMarginBox(t.domNode,o);e?i.mixin(t,e):(i.mixin(t,n.getMarginBox(t.domNode)),
i.mixin(t,o))}var l={};return l.marginBox2contentBox=function(t,o){var i=e.getComputedStyle(t),r=n.getMarginExtents(t,i),a=n.getPadBorderExtents(t,i);
return{l:e.toPixelValue(t,i.paddingLeft),t:e.toPixelValue(t,i.paddingTop),w:o.w-(r.w+a.w),
h:o.h-(r.h+a.h)}},l.layoutChildren=function(n,e,l,d,c){e=i.mixin({},e),o.add(n,"dijitLayoutContainer"),
l=t.filter(l,function(t){return"center"!=t._constraint&&"client"!=t.layoutAlign}).concat(t.filter(l,function(t){
return"center"==t._constraint||"client"==t.layoutAlign})),t.forEach(l,function(t){
var n=t.domNode,i=t._constraint||t.layoutAlign;if(!i)throw new Error("No constraint setting for "+t.id);
var l=n.style;l.left=e.l+"px",l.top=e.t+"px",l.position="absolute",o.add(n,"dijitAlign"+r(i));
var u={};d&&d==t.id&&(u["top"==t._constraint||"bottom"==t._constraint?"h":"w"]=c),
"top"==i||"bottom"==i?(u.w=e.w,a(t,u),e.h-=t.h,"top"==i?e.t+=t.h:l.top=e.t+e.h+"px"):"left"==i||"right"==i?(u.h=e.h,
a(t,u),e.w-=t.w,"left"==i?e.l+=t.w:l.left=e.l+e.w+"px"):("client"==i||"center"==i)&&a(t,e);
})},{marginBox2contentBox:l.marginBox2contentBox,layoutChildren:l.layoutChildren};
});