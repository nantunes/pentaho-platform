define(["./_base","dojo/_base/lang","dojo/_base/declare","dojo/_base/kernel","dojo/_base/sniff","dojo/on","dojo/_base/array","dojo/dom-construct","dojo/_base/Color","./matrix"],function(t,e,n,i,r,s,o,a,h,u){
var l=t.shape={};return l.Shape=n("dojox.gfx.shape.Shape",null,{constructor:function(){
if(this.rawNode=null,this.shape=null,this.matrix=null,this.fillStyle=null,this.strokeStyle=null,
this.bbox=null,this.parent=null,this.parentMatrix=null,r("gfxRegistry")){var t=l.register(this);
this.getUID=function(){return t}}},destroy:function(){r("gfxRegistry")&&l.dispose(this),
this.rawNode&&"__gfxObject__"in this.rawNode&&(this.rawNode.__gfxObject__=null),this.rawNode=null;
},getNode:function(){return this.rawNode},getShape:function(){return this.shape},
getTransform:function(){return this.matrix},getFill:function(){return this.fillStyle;
},getStroke:function(){return this.strokeStyle},getParent:function(){return this.parent;
},getBoundingBox:function(){return this.bbox},getTransformedBoundingBox:function(){
var t=this.getBoundingBox();if(!t)return null;var e=this._getRealMatrix(),n=u;return[n.multiplyPoint(e,t.x,t.y),n.multiplyPoint(e,t.x+t.width,t.y),n.multiplyPoint(e,t.x+t.width,t.y+t.height),n.multiplyPoint(e,t.x,t.y+t.height)];
},getEventSource:function(){return this.rawNode},setClip:function(t){this.clip=t},
getClip:function(){return this.clip},setShape:function(e){return this.shape=t.makeParameters(this.shape,e),
this.bbox=null,this},setFill:function(e){if(!e)return this.fillStyle=null,this;var n=null;
if("object"==typeof e&&"type"in e)switch(e.type){case"linear":n=t.makeParameters(t.defaultLinearGradient,e);
break;case"radial":n=t.makeParameters(t.defaultRadialGradient,e);break;case"pattern":
n=t.makeParameters(t.defaultPattern,e)}else n=t.normalizeColor(e);return this.fillStyle=n,
this},setStroke:function(n){if(!n)return this.strokeStyle=null,this;("string"==typeof n||e.isArray(n)||n instanceof h)&&(n={
color:n});var i=this.strokeStyle=t.makeParameters(t.defaultStroke,n);return i.color=t.normalizeColor(i.color),
this},setTransform:function(t){return this.matrix=u.clone(t?u.normalize(t):u.identity),
this._applyTransform()},_applyTransform:function(){return this},moveToFront:function(){
var t=this.getParent();return t&&(t._moveChildToFront(this),this._moveToFront()),
this},moveToBack:function(){var t=this.getParent();return t&&(t._moveChildToBack(this),
this._moveToBack()),this},_moveToFront:function(){},_moveToBack:function(){},applyRightTransform:function(t){
return t?this.setTransform([this.matrix,t]):this},applyLeftTransform:function(t){
return t?this.setTransform([t,this.matrix]):this},applyTransform:function(t){return t?this.setTransform([this.matrix,t]):this;
},removeShape:function(t){return this.parent&&this.parent.remove(this,t),this},_setParent:function(t,e){
return this.parent=t,this._updateParentMatrix(e)},_updateParentMatrix:function(t){
return this.parentMatrix=t?u.clone(t):null,this._applyTransform()},_getRealMatrix:function(){
for(var t=this.matrix,e=this.parent;e;)e.matrix&&(t=u.multiply(e.matrix,t)),e=e.parent;
return t}}),l._eventsProcessing={on:function(e,n){return s(this.getEventSource(),e,l.fixCallback(this,t.fixTarget,n));
},connect:function(t,n,i){return"on"==t.substring(0,2)&&(t=t.substring(2)),this.on(t,i?e.hitch(n,i):n);
},disconnect:function(t){return t.remove()}},l.fixCallback=function(t,n,r,s){if(s||(s=r,
r=null),e.isString(s)){if(r=r||i.global,!r[s])throw['dojox.gfx.shape.fixCallback: scope["',s,'"] is null (scope="',r,'")'].join("");
return function(e){return n(e,t)?r[s].apply(r,arguments||[]):void 0}}return r?function(e){
return n(e,t)?s.apply(r,arguments||[]):void 0}:function(e){return n(e,t)?s.apply(r,arguments):void 0;
}},e.extend(l.Shape,l._eventsProcessing),l.Container={_init:function(){this.children=[],
this._batch=0},openBatch:function(){return this},closeBatch:function(){return this;
},add:function(t){var e=t.getParent();return e&&e.remove(t,!0),this.children.push(t),
t._setParent(this,this._getRealMatrix())},remove:function(t,e){for(var n=0;n<this.children.length;++n)if(this.children[n]==t){
e||(t.parent=null,t.parentMatrix=null),this.children.splice(n,1);break}return this;
},clear:function(t){for(var e,n=0;n<this.children.length;++n)e=this.children[n],e.parent=null,
e.parentMatrix=null,t&&e.destroy();return this.children=[],this},getBoundingBox:function(){
if(this.children){var t=null;return o.forEach(this.children,function(e){var n=e.getBoundingBox();
if(n){var i=e.getTransform();i&&(n=u.multiplyRectangle(i,n)),t?(t.x=Math.min(t.x,n.x),
t.y=Math.min(t.y,n.y),t.endX=Math.max(t.endX,n.x+n.width),t.endY=Math.max(t.endY,n.y+n.height)):t={
x:n.x,y:n.y,endX:n.x+n.width,endY:n.y+n.height}}}),t&&(t.width=t.endX-t.x,t.height=t.endY-t.y),
t}return null},_moveChildToFront:function(t){for(var e=0;e<this.children.length;++e)if(this.children[e]==t){
this.children.splice(e,1),this.children.push(t);break}return this},_moveChildToBack:function(t){
for(var e=0;e<this.children.length;++e)if(this.children[e]==t){this.children.splice(e,1),
this.children.unshift(t);break}return this}},l.Surface=n("dojox.gfx.shape.Surface",null,{
constructor:function(){this.rawNode=null,this._parent=null,this._nodes=[],this._events=[];
},destroy:function(){if(o.forEach(this._nodes,a.destroy),this._nodes=[],o.forEach(this._events,function(t){
t&&t.remove()}),this._events=[],this.rawNode=null,r("ie"))for(;this._parent.lastChild;)a.destroy(this._parent.lastChild);else this._parent.innerHTML="";
this._parent=null},getEventSource:function(){return this.rawNode},_getRealMatrix:function(){
return null},isLoaded:!0,onLoad:function(t){},whenLoaded:function(t,n){var i=e.hitch(t,n);
this.isLoaded?i(this):s.once(this,"load",function(t){i(t)})}}),e.extend(l.Surface,l._eventsProcessing),
l.Rect=n("dojox.gfx.shape.Rect",l.Shape,{constructor:function(e){this.shape=t.getDefault("Rect"),
this.rawNode=e},getBoundingBox:function(){return this.shape}}),l.Ellipse=n("dojox.gfx.shape.Ellipse",l.Shape,{
constructor:function(e){this.shape=t.getDefault("Ellipse"),this.rawNode=e},getBoundingBox:function(){
if(!this.bbox){var t=this.shape;this.bbox={x:t.cx-t.rx,y:t.cy-t.ry,width:2*t.rx,height:2*t.ry
}}return this.bbox}}),l.Circle=n("dojox.gfx.shape.Circle",l.Shape,{constructor:function(e){
this.shape=t.getDefault("Circle"),this.rawNode=e},getBoundingBox:function(){if(!this.bbox){
var t=this.shape;this.bbox={x:t.cx-t.r,y:t.cy-t.r,width:2*t.r,height:2*t.r}}return this.bbox;
}}),l.Line=n("dojox.gfx.shape.Line",l.Shape,{constructor:function(e){this.shape=t.getDefault("Line"),
this.rawNode=e},getBoundingBox:function(){if(!this.bbox){var t=this.shape;this.bbox={
x:Math.min(t.x1,t.x2),y:Math.min(t.y1,t.y2),width:Math.abs(t.x2-t.x1),height:Math.abs(t.y2-t.y1)
}}return this.bbox}}),l.Polyline=n("dojox.gfx.shape.Polyline",l.Shape,{constructor:function(e){
this.shape=t.getDefault("Polyline"),this.rawNode=e},setShape:function(t,e){return t&&t instanceof Array?(this.inherited(arguments,[{
points:t}]),e&&this.shape.points.length&&this.shape.points.push(this.shape.points[0])):this.inherited(arguments,[t]),
this},_normalizePoints:function(){var t=this.shape.points,e=t&&t.length;if(e&&"number"==typeof t[0]){
for(var n=[],i=0;e>i;i+=2)n.push({x:t[i],y:t[i+1]});this.shape.points=n}},getBoundingBox:function(){
if(!this.bbox&&this.shape.points.length){for(var t=this.shape.points,e=t.length,n=t[0],i={
l:n.x,t:n.y,r:n.x,b:n.y},r=1;e>r;++r)n=t[r],i.l>n.x&&(i.l=n.x),i.r<n.x&&(i.r=n.x),
i.t>n.y&&(i.t=n.y),i.b<n.y&&(i.b=n.y);this.bbox={x:i.l,y:i.t,width:i.r-i.l,height:i.b-i.t
}}return this.bbox}}),l.Image=n("dojox.gfx.shape.Image",l.Shape,{constructor:function(e){
this.shape=t.getDefault("Image"),this.rawNode=e},getBoundingBox:function(){return this.shape;
},setStroke:function(){return this},setFill:function(){return this}}),l.Text=n(l.Shape,{
constructor:function(e){this.fontStyle=null,this.shape=t.getDefault("Text"),this.rawNode=e;
},getFont:function(){return this.fontStyle},setFont:function(e){return this.fontStyle="string"==typeof e?t.splitFontString(e):t.makeParameters(t.defaultFont,e),
this._setFont(),this},getBoundingBox:function(){var e=null,n=this.getShape();return n.text&&(e=t._base._computeTextBoundingBox(this)),
e}}),l.Creator={createShape:function(e){switch(e.type){case t.defaultPath.type:return this.createPath(e);
case t.defaultRect.type:return this.createRect(e);case t.defaultCircle.type:return this.createCircle(e);
case t.defaultEllipse.type:return this.createEllipse(e);case t.defaultLine.type:return this.createLine(e);
case t.defaultPolyline.type:return this.createPolyline(e);case t.defaultImage.type:
return this.createImage(e);case t.defaultText.type:return this.createText(e);case t.defaultTextPath.type:
return this.createTextPath(e)}return null},createGroup:function(){return this.createObject(t.Group);
},createRect:function(e){return this.createObject(t.Rect,e)},createEllipse:function(e){
return this.createObject(t.Ellipse,e)},createCircle:function(e){return this.createObject(t.Circle,e);
},createLine:function(e){return this.createObject(t.Line,e)},createPolyline:function(e){
return this.createObject(t.Polyline,e)},createImage:function(e){return this.createObject(t.Image,e);
},createText:function(e){return this.createObject(t.Text,e)},createPath:function(e){
return this.createObject(t.Path,e)},createTextPath:function(e){return this.createObject(t.TextPath,{}).setText(e);
},createObject:function(t,e){return null}},l});