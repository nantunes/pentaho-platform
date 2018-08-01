define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","dojo/on","dojo/_base/array","dojo/dom-geometry","dojo/dom","dojo/_base/sniff","./_base","./shape","./path","./registry"],function(e,t,r,i,a,o,n,s,h,l,d,u){
function c(e){var t=l.normalizeColor(e),r=t.toHex(),i=Math.round(255*t.a);return i=(0>i?0:i>255?255:i).toString(16),
"#"+(i.length<2?"0"+i:i)+r.slice(1)}function m(e,t){var r={target:e,currentTarget:e,
preventDefault:function(){},stopPropagation:function(){}};try{if(t.source){r.target=t.source;
var i=r.target.tag;r.gfxTarget=d.byId(i)}}catch(a){}if(t)try{r.ctrlKey=t.ctrl,r.shiftKey=t.shift;
var o=t.getPosition(null);r.x=r.offsetX=r.layerX=o.x,r.y=r.offsetY=r.layerY=o.y;var s=_[e.getHost().content.root.name],h=n.position(s);
r.clientX=h.x+o.x,r.clientY=h.y+o.y}catch(a){}return r}function p(e,t){var r={keyCode:t.platformKeyCode,
ctrlKey:t.ctrl,shiftKey:t.shift};try{t.source&&(r.target=t.source,r.gfxTarget=d.byId(r.target.tag));
}catch(i){}return r}var f=l.silverlight={};e.experimental("dojox.gfx.silverlight");
var g={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],
dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]
},x={normal:400,bold:700},y={butt:"Flat",round:"Round",square:"Square"},v={bevel:"Bevel",
round:"Round"},w={serif:"Times New Roman",times:"Times New Roman","sans-serif":"Arial",
helvetica:"Arial",monotone:"Courier New",courier:"Courier New"};f.Shape=r("dojox.gfx.silverlight.Shape",d.Shape,{
destroy:function(){h("gfxRegistry")&&d.dispose(this),this.rawNode=null},setFill:function(e){
var t,r=this.rawNode.getHost().content;this.rawNode;if(!e)return this.fillStyle=null,
this._setFillAttr(null),this;if("object"==typeof e&&"type"in e){switch(e.type){case"linear":
this.fillStyle=t=l.makeParameters(l.defaultLinearGradient,e);var i=r.createFromXaml("<LinearGradientBrush/>");
i.mappingMode="Absolute",i.startPoint=t.x1+","+t.y1,i.endPoint=t.x2+","+t.y2,o.forEach(t.colors,function(e){
var t=r.createFromXaml("<GradientStop/>");t.offset=e.offset,t.color=c(e.color),i.gradientStops.add(t);
}),this._setFillAttr(i);break;case"radial":this.fillStyle=t=l.makeParameters(l.defaultRadialGradient,e);
var a=r.createFromXaml("<RadialGradientBrush/>"),n=l.matrix.multiplyPoint(l.matrix.invert(this._getAdjustedMatrix()),t.cx,t.cy),s=n.x+","+n.y;
a.mappingMode="Absolute",a.gradientOrigin=s,a.center=s,a.radiusX=a.radiusY=t.r,o.forEach(t.colors,function(e){
var t=r.createFromXaml("<GradientStop/>");t.offset=e.offset,t.color=c(e.color),a.gradientStops.add(t);
}),this._setFillAttr(a);break;case"pattern":this.fillStyle=null,this._setFillAttr(null);
}return this}this.fillStyle=t=l.normalizeColor(e);var h=r.createFromXaml("<SolidColorBrush/>");
return h.color=t.toHex(),h.opacity=t.a,this._setFillAttr(h),this},_setFillAttr:function(e){
this.rawNode.fill=e},setStroke:function(e){var r=this.rawNode.getHost().content,a=this.rawNode;
if(!e)return this.strokeStyle=null,a.stroke=null,this;("string"==typeof e||t.isArray(e)||e instanceof i)&&(e={
color:e});var o=this.strokeStyle=l.makeParameters(l.defaultStroke,e);if(o.color=l.normalizeColor(o.color),
o){var n=r.createFromXaml("<SolidColorBrush/>");n.color=o.color.toHex(),n.opacity=o.color.a,
a.stroke=n,a.strokeThickness=o.width,a.strokeStartLineCap=a.strokeEndLineCap=a.strokeDashCap=y[o.cap],
"number"==typeof o.join?(a.strokeLineJoin="Miter",a.strokeMiterLimit=o.join):a.strokeLineJoin=v[o.join];
var s=o.style.toLowerCase();if(s in g&&(s=g[s]),s instanceof Array){s=t.clone(s);var h;
if("butt"!=o.cap){for(h=0;h<s.length;h+=2)--s[h],s[h]<1&&(s[h]=1);for(h=1;h<s.length;h+=2)++s[h];
}a.strokeDashArray=s.join(",")}else a.strokeDashArray=null}return this},_getParentSurface:function(){
for(var e=this.parent;e&&!(e instanceof l.Surface);e=e.parent);return e},_applyTransform:function(){
var e=this._getAdjustedMatrix(),t=this.rawNode;if(e){var r=this.rawNode.getHost().content,i=r.createFromXaml("<MatrixTransform/>"),a=r.createFromXaml("<Matrix/>");
a.m11=e.xx,a.m21=e.xy,a.m12=e.yx,a.m22=e.yy,a.offsetX=e.dx,a.offsetY=e.dy,i.matrix=a,
t.renderTransform=i}else t.renderTransform=null;return this},setRawNode:function(e){
e.fill=null,e.stroke=null,this.rawNode=e,this.rawNode.tag=this.getUID()},_moveToFront:function(){
var e=this.parent.rawNode.children,t=this.rawNode;return e.remove(t),e.add(t),this;
},_moveToBack:function(){var e=this.parent.rawNode.children,t=this.rawNode;return e.remove(t),
e.insert(0,t),this},_getAdjustedMatrix:function(){return this.matrix},setClip:function(e){
this.inherited(arguments);var t=this.rawNode;if(e){var r=e?"width"in e?"rect":"cx"in e?"ellipse":"points"in e?"polyline":"d"in e?"path":null:null;
if(e&&!r)return this;var i=this.getBoundingBox()||{x:0,y:0,width:0,height:0},a="1,0,0,1,"+-i.x+","+-i.y;
switch(r){case"rect":t.clip=t.getHost().content.createFromXaml("<RectangleGeometry/>"),
t.clip.rect=e.x+","+e.y+","+e.width+","+e.height,t.clip.transform=a;break;case"ellipse":
t.clip=t.getHost().content.createFromXaml("<EllipseGeometry/>"),t.clip.center=e.cx+","+e.cy,
t.clip.radiusX=e.rx,t.clip.radiusY=e.ry,t.clip.transform="1,0,0,1,"+-i.x+","+-i.y;
break;case"polyline":if(e.points.length>2){var o,n=t.getHost().content.createFromXaml("<PathGeometry/>"),s=t.getHost().content.createFromXaml("<PathFigure/>");
s.StartPoint=e.points[0]+","+e.points[1];for(var h=2;h<=e.points.length-2;h+=2)o=t.getHost().content.createFromXaml("<LineSegment/>"),
o.Point=e.points[h]+","+e.points[h+1],s.segments.add(o);n.figures.add(s),n.transform="1,0,0,1,"+-i.x+","+-i.y,
t.clip=n}break;case"path":}}else t.clip=null;return this}}),f.Group=r("dojox.gfx.silverlight.Group",f.Shape,{
constructor:function(){d.Container._init.call(this)},setRawNode:function(e){this.rawNode=e,
this.rawNode.tag=this.getUID()},destroy:function(){this.clear(!0),f.Shape.prototype.destroy.apply(this,arguments);
}}),f.Group.nodeType="Canvas",f.Rect=r("dojox.gfx.silverlight.Rect",[f.Shape,d.Rect],{
setShape:function(e){this.shape=l.makeParameters(this.shape,e),this.bbox=null;var t=this.rawNode,r=this.shape;
return t.width=r.width,t.height=r.height,t.radiusX=t.radiusY=r.r,this._applyTransform();
},_getAdjustedMatrix:function(){var e=this.matrix,t=this.shape,r={dx:t.x,dy:t.y};return new l.Matrix2D(e?[e,r]:r);
}}),f.Rect.nodeType="Rectangle",f.Ellipse=r("dojox.gfx.silverlight.Ellipse",[f.Shape,d.Ellipse],{
setShape:function(e){this.shape=l.makeParameters(this.shape,e),this.bbox=null;var t=this.rawNode,r=this.shape;
return t.width=2*r.rx,t.height=2*r.ry,this._applyTransform()},_getAdjustedMatrix:function(){
var e=this.matrix,t=this.shape,r={dx:t.cx-t.rx,dy:t.cy-t.ry};return new l.Matrix2D(e?[e,r]:r);
}}),f.Ellipse.nodeType="Ellipse",f.Circle=r("dojox.gfx.silverlight.Circle",[f.Shape,d.Circle],{
setShape:function(e){this.shape=l.makeParameters(this.shape,e),this.bbox=null;var t=this.rawNode,r=this.shape;
return t.width=t.height=2*r.r,this._applyTransform()},_getAdjustedMatrix:function(){
var e=this.matrix,t=this.shape,r={dx:t.cx-t.r,dy:t.cy-t.r};return new l.Matrix2D(e?[e,r]:r);
}}),f.Circle.nodeType="Ellipse",f.Line=r("dojox.gfx.silverlight.Line",[f.Shape,d.Line],{
setShape:function(e){this.shape=l.makeParameters(this.shape,e),this.bbox=null;var t=this.rawNode,r=this.shape;
return t.x1=r.x1,t.y1=r.y1,t.x2=r.x2,t.y2=r.y2,this}}),f.Line.nodeType="Line",f.Polyline=r("dojox.gfx.silverlight.Polyline",[f.Shape,d.Polyline],{
setShape:function(e,t){e&&e instanceof Array?(this.shape=l.makeParameters(this.shape,{
points:e}),t&&this.shape.points.length&&this.shape.points.push(this.shape.points[0])):this.shape=l.makeParameters(this.shape,e),
this.bbox=null,this._normalizePoints();for(var r=this.shape.points,i=[],a=0;a<r.length;++a)i.push(r[a].x,r[a].y);
return this.rawNode.points=i.join(","),this}}),f.Polyline.nodeType="Polyline",f.Image=r("dojox.gfx.silverlight.Image",[f.Shape,d.Image],{
setShape:function(e){this.shape=l.makeParameters(this.shape,e),this.bbox=null;var t=this.rawNode,r=this.shape;
return t.width=r.width,t.height=r.height,t.source=r.src,this._applyTransform()},_getAdjustedMatrix:function(){
var e=this.matrix,t=this.shape,r={dx:t.x,dy:t.y};return new l.Matrix2D(e?[e,r]:r);
},setRawNode:function(e){this.rawNode=e,this.rawNode.tag=this.getUID()}}),f.Image.nodeType="Image",
f.Text=r("dojox.gfx.silverlight.Text",[f.Shape,d.Text],{setShape:function(e){this.shape=l.makeParameters(this.shape,e),
this.bbox=null;var r=this.rawNode,i=this.shape;return r.text=""+i.text,r.textDecorations="underline"===i.decoration?"Underline":"None",
r["Canvas.Left"]=-1e4,r["Canvas.Top"]=-1e4,this._delay||(this._delay=window.setTimeout(t.hitch(this,"_delayAlignment"),10)),
this},_delayAlignment:function(){var e,t,r=this.rawNode,i=this.shape;try{e=r.actualWidth,
t=r.actualHeight}catch(a){return}var o=i.x,n=i.y-.75*t;switch(i.align){case"middle":
o-=e/2;break;case"end":o-=e}this._delta={dx:o,dy:n},r["Canvas.Left"]=0,r["Canvas.Top"]=0,
this._applyTransform(),delete this._delay},_getAdjustedMatrix:function(){var e,t=this.matrix,r=this._delta;
return e=t?r?[t,r]:t:r?r:{},new l.Matrix2D(e)},setStroke:function(){return this},
_setFillAttr:function(e){this.rawNode.foreground=e},setRawNode:function(e){this.rawNode=e,
this.rawNode.tag=this.getUID()},getTextWidth:function(){return this.rawNode.actualWidth;
},getBoundingBox:function(){var e=null,t=this.getShape().text,r=this.rawNode,i=0,a=0;
if(!l._base._isRendered(this))return{x:0,y:0,width:0,height:0};if(t){try{i=r.actualWidth,
a=r.actualHeight}catch(o){return null}var n=l._base._computeTextLocation(this.getShape(),i,a,!0);
e={x:n.x,y:n.y,width:i,height:a}}return e}}),f.Text.nodeType="TextBlock",f.Path=r("dojox.gfx.silverlight.Path",[f.Shape,u.Path],{
_updateWithSegment:function(e){this.inherited(arguments);var t=this.shape.path;"string"==typeof t&&(this.rawNode.data=t?t:null);
},setShape:function(e){this.inherited(arguments);var t=this.shape.path;return this.rawNode.data=t?t:null,
this}}),f.Path.nodeType="Path",f.TextPath=r("dojox.gfx.silverlight.TextPath",[f.Shape,u.TextPath],{
_updateWithSegment:function(e){},setShape:function(e){},_setText:function(){}}),f.TextPath.nodeType="text";
var _={},N=new Function;f.Surface=r("dojox.gfx.silverlight.Surface",d.Surface,{constructor:function(){
d.Container._init.call(this)},destroy:function(){this.clear(!0),window[this._onLoadName]=N,
delete _[this._nodeName],this.inherited(arguments)},setDimensions:function(e,t){this.width=l.normalizedLength(e),
this.height=l.normalizedLength(t);var r=this.rawNode&&this.rawNode.getHost();return r&&(r.width=e,
r.height=t),this},getDimensions:function(){var e=this.rawNode&&this.rawNode.getHost(),t=e?{
width:e.content.actualWidth,height:e.content.actualHeight}:null;return t.width<=0&&(t.width=this.width),
t.height<=0&&(t.height=this.height),t}}),f.createSurface=function(e,t,r){if(!t&&!r){
var i=n.position(e);t=t||i.w,r=r||i.h}"number"==typeof t&&(t+="px"),"number"==typeof r&&(r+="px");
var a=new f.Surface;e=s.byId(e),a._parent=e,a._nodeName=l._base._getUniqueId();var o=e.ownerDocument.createElement("script");
o.type="text/xaml",o.id=l._base._getUniqueId(),o.text="<?xml version='1.0'?><Canvas xmlns='http://schemas.microsoft.com/client/2007' Name='"+a._nodeName+"'/>",
e.parentNode.insertBefore(o,e),a._nodes.push(o);var d,u=l._base._getUniqueId(),c="__"+l._base._getUniqueId()+"_onLoad";
a._onLoadName=c,window[c]=function(t){a.rawNode||(a.rawNode=s.byId(u,e.ownerDocument).content.root,
_[a._nodeName]=e,a.onLoad(a))},d=h("safari")?"<embed type='application/x-silverlight' id='"+u+"' width='"+t+"' height='"+r+" background='transparent' source='#"+o.id+"' windowless='true' maxFramerate='60' onLoad='"+c+"' onError='__dojoSilverlightError' /><iframe style='visibility:hidden;height:0;width:0'/>":"<object type='application/x-silverlight' data='data:application/x-silverlight,' id='"+u+"' width='"+t+"' height='"+r+"'><param name='background' value='transparent' /><param name='source' value='#"+o.id+"' /><param name='windowless' value='true' /><param name='maxFramerate' value='60' /><param name='onLoad' value='"+c+"' /><param name='onError' value='__dojoSilverlightError' /></object>",
e.innerHTML=d;var m=s.byId(u,e.ownerDocument);return m.content&&m.content.root?(a.rawNode=m.content.root,
_[a._nodeName]=e):(a.rawNode=null,a.isLoaded=!1),a._nodes.push(m),a.width=l.normalizedLength(t),
a.height=l.normalizedLength(r),a},__dojoSilverlightError=function(e,t){var r="Silverlight Error:\nCode: "+t.ErrorCode+"\nType: "+t.ErrorType+"\nMessage: "+t.ErrorMessage+"\n";
switch(t.ErrorType){case"ParserError":r+="XamlFile: "+t.xamlFile+"\nLine: "+t.lineNumber+"\nPosition: "+t.charPosition+"\n";
break;case"RuntimeError":r+="MethodName: "+t.methodName+"\n",0!=t.lineNumber&&(r+="Line: "+t.lineNumber+"\nPosition: "+t.charPosition+"\n");
}};var S={_setFont:function(){var e=this.fontStyle,r=this.rawNode,i=e.family.toLowerCase();
r.fontStyle="italic"==e.style?"Italic":"Normal",r.fontWeight=e.weight in x?x[e.weight]:e.weight,
r.fontSize=l.normalizedLength(e.size),r.fontFamily=i in w?w[i]:e.family,this._delay||(this._delay=window.setTimeout(t.hitch(this,"_delayAlignment"),10));
}},b=d.Container,T={add:function(e){return this!=e.getParent()&&(b.add.apply(this,arguments),
this.rawNode.children.add(e.rawNode)),this},remove:function(e,t){if(this==e.getParent()){
var r=e.rawNode.getParent();r&&r.children.remove(e.rawNode),b.remove.apply(this,arguments);
}return this},clear:function(){return this.rawNode.children.clear(),b.clear.apply(this,arguments);
},getBoundingBox:b.getBoundingBox,_moveChildToFront:b._moveChildToFront,_moveChildToBack:b._moveChildToBack
},k={createObject:function(e,t){if(!this.rawNode)return null;var r=new e,i=this.rawNode.getHost().content.createFromXaml("<"+e.nodeType+"/>");
return r.setRawNode(i),r.setShape(t),this.add(r),r}};t.extend(f.Text,S),t.extend(f.Group,T),
t.extend(f.Group,d.Creator),t.extend(f.Group,k),t.extend(f.Surface,T),t.extend(f.Surface,d.Creator),
t.extend(f.Surface,k);var P={onclick:{name:"MouseLeftButtonUp",fix:m},onmouseenter:{
name:"MouseEnter",fix:m},onmouseleave:{name:"MouseLeave",fix:m},onmouseover:{name:"MouseEnter",
fix:m},onmouseout:{name:"MouseLeave",fix:m},onmousedown:{name:"MouseLeftButtonDown",
fix:m},onmouseup:{name:"MouseLeftButtonUp",fix:m},onmousemove:{name:"MouseMove",fix:m
},onkeydown:{name:"KeyDown",fix:p},onkeyup:{name:"KeyUp",fix:p}},j={connect:function(e,r,i){
return this.on(e,i?t.hitch(r,i):r)},on:function(e,r){if("string"==typeof e){0===e.indexOf("mouse")&&(e="on"+e);
var i,o=e in P?P[e]:{name:e,fix:function(){return{}}};return i=this.getEventSource().addEventListener(o.name,function(e,t){
r(o.fix(e,t))}),{name:o.name,token:i,remove:t.hitch(this,function(){this.getEventSource().removeEventListener(o.name,i);
})}}return a(this,e,r)},disconnect:function(e){return e.remove()}};return t.extend(f.Shape,j),
t.extend(f.Surface,j),l.equalSources=function(e,t){return e&&t&&e.equals(t)},f});