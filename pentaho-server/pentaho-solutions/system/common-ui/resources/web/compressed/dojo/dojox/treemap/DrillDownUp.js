define(["dojo/_base/lang","dojo/_base/event","dojo/_base/declare","dojo/on","dojo/dom-geometry","dojo/dom-construct","dojo/dom-style","dojo/_base/fx","dojo/has!touch?dojox/gesture/tap"],function(t,e,o,i,n,d,h,r,s){
return o("dojox.treemap.DrillDownUp",null,{postCreate:function(){this.inherited(arguments),
this.own(i(this.domNode,"dblclick",t.hitch(this,this._onDoubleClick))),s&&this.own(i(this.domNode,s.doubletap,t.hitch(this,this._onDoubleClick)));
},_onDoubleClick:function(t){var o=this._getRendererFromTarget(t.target);if(o.item){
var i=o.item;if(this._isLeaf(i)&&(i=o.parentItem,o=this.itemToRenderer[this.getIdentity(i)],
null==o))return;this.rootItem==i?this.drillUp(o):this.drillDown(o),e.stop(t)}},drillUp:function(e){
var o=e.item;this.domNode.removeChild(e);var i=this._getRenderer(o).parentItem;this.set("rootItem",i),
this.validateRendering(),d.place(e,this.domNode),h.set(e,"zIndex",40);var s=n.position(this._getRenderer(o),!0),l=n.getMarginBox(this.domNode);
r.animateProperty({node:e,duration:500,properties:{left:{end:s.x-l.l},top:{end:s.y-l.t
},height:{end:s.h},width:{end:s.w}},onAnimate:t.hitch(this,function(t){var o=n.getContentBox(e);
this._layoutGroupContent(e,o.w,o.h,e.level+1,!1,!0)}),onEnd:t.hitch(this,function(){
this.domNode.removeChild(e)})}).play()},drillDown:function(e){var o=n.getMarginBox(this.domNode),i=e.item,s=e.parentNode,l=n.position(e,!0);
s.removeChild(e),d.place(e,this.domNode),h.set(e,{left:l.x-o.l+"px",top:l.y-o.t+"px"
});var a=h.get(e,"zIndex");h.set(e,"zIndex",40),r.animateProperty({node:e,duration:500,
properties:{left:{end:o.l},top:{end:o.t},height:{end:o.h},width:{end:o.w}},onAnimate:t.hitch(this,function(t){
var o=n.getContentBox(e);this._layoutGroupContent(e,o.w,o.h,e.level+1,!1)}),onEnd:t.hitch(this,function(){
h.set(e,"zIndex",a),this.set("rootItem",i)})}).play()}})});