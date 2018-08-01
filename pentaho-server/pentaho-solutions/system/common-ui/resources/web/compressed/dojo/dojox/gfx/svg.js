define(["dojo/_base/lang","dojo/_base/sniff","dojo/_base/window","dojo/dom","dojo/_base/declare","dojo/_base/array","dojo/dom-geometry","dojo/dom-attr","dojo/_base/Color","./_base","./shape","./path"],function(t,e,i,r,s,a,o,n,h,d,l,u){
function p(t,e){return i.doc.createElementNS?i.doc.createElementNS(t,e):i.doc.createElement(e);
}function f(t,e,i,r){return t.setAttributeNS?t.setAttributeNS(e,i,r):t.setAttribute(i,r);
}function c(t){return b.useSvgWeb?i.doc.createTextNode(t,!0):i.doc.createTextNode(t);
}function g(){return b.useSvgWeb?i.doc.createDocumentFragment(!0):i.doc.createDocumentFragment();
}var b=d.svg={};b.useSvgWeb="undefined"!=typeof window.svgweb;var x=navigator.userAgent,m=e("ios"),v=e("android"),w=e("chrome")||v&&v>=4?"auto":"optimizeLegibility";
b.xmlns={xlink:"http://www.w3.org/1999/xlink",svg:"http://www.w3.org/2000/svg"},b.getRef=function(t){
return t&&"none"!=t?t.match(/^url\(#.+\)$/)?r.byId(t.slice(5,-1)):t.match(/^#dojoUnique\d+$/)?r.byId(t.slice(1)):null:null;
},b.dasharray={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],
shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],
longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]};var N=0;b.Shape=s("dojox.gfx.svg.Shape",l.Shape,{
destroy:function(){if(this.fillStyle&&"type"in this.fillStyle){var t=this.rawNode.getAttribute("fill"),e=b.getRef(t);
e&&e.parentNode.removeChild(e)}if(this.clip){var i=this.rawNode.getAttribute("clip-path");
if(i){var s=r.byId(i.match(/gfx_clip[\d]+/)[0]);s&&s.parentNode.removeChild(s)}}l.Shape.prototype.destroy.apply(this,arguments);
},setFill:function(t){if(!t)return this.fillStyle=null,this.rawNode.setAttribute("fill","none"),
this.rawNode.setAttribute("fill-opacity",0),this;var e,i=function(t){this.setAttribute(t,e[t].toFixed(8));
};if("object"==typeof t&&"type"in t){switch(t.type){case"linear":e=d.makeParameters(d.defaultLinearGradient,t);
var r=this._setFillObject(e,"linearGradient");a.forEach(["x1","y1","x2","y2"],i,r);
break;case"radial":e=d.makeParameters(d.defaultRadialGradient,t);var s=this._setFillObject(e,"radialGradient");
a.forEach(["cx","cy","r"],i,s);break;case"pattern":e=d.makeParameters(d.defaultPattern,t);
var o=this._setFillObject(e,"pattern");a.forEach(["x","y","width","height"],i,o)}
return this.fillStyle=e,this}return e=d.normalizeColor(t),this.fillStyle=e,this.rawNode.setAttribute("fill",e.toCss()),
this.rawNode.setAttribute("fill-opacity",e.a),this.rawNode.setAttribute("fill-rule","evenodd"),
this},setStroke:function(e){var i=this.rawNode;if(!e)return this.strokeStyle=null,
i.setAttribute("stroke","none"),i.setAttribute("stroke-opacity",0),this;("string"==typeof e||t.isArray(e)||e instanceof h)&&(e={
color:e});var r=this.strokeStyle=d.makeParameters(d.defaultStroke,e);if(r.color=d.normalizeColor(r.color),
r){i.setAttribute("stroke",r.color.toCss()),i.setAttribute("stroke-opacity",r.color.a),
i.setAttribute("stroke-width",r.width),i.setAttribute("stroke-linecap",r.cap),"number"==typeof r.join?(i.setAttribute("stroke-linejoin","miter"),
i.setAttribute("stroke-miterlimit",r.join)):i.setAttribute("stroke-linejoin",r.join);
var s=r.style.toLowerCase();if(s in b.dasharray&&(s=b.dasharray[s]),s instanceof Array){
s=t._toArray(s);var a;for(a=0;a<s.length;++a)s[a]*=r.width;if("butt"!=r.cap){for(a=0;a<s.length;a+=2)s[a]-=r.width,
s[a]<1&&(s[a]=1);for(a=1;a<s.length;a+=2)s[a]+=r.width}s=s.join(",")}i.setAttribute("stroke-dasharray",s),
i.setAttribute("dojoGfxStrokeStyle",r.style)}return this},_getParentSurface:function(){
for(var t=this.parent;t&&!(t instanceof d.Surface);t=t.parent);return t},_setFillObject:function(t,e){
var i=b.xmlns.svg;this.fillStyle=t;var r=this._getParentSurface(),s=r.defNode,a=this.rawNode.getAttribute("fill"),o=b.getRef(a);
if(o)if(a=o,a.tagName.toLowerCase()!=e.toLowerCase()){var n=a.id;a.parentNode.removeChild(a),
a=p(i,e),a.setAttribute("id",n),s.appendChild(a)}else for(;a.childNodes.length;)a.removeChild(a.lastChild);else a=p(i,e),
a.setAttribute("id",d._base._getUniqueId()),s.appendChild(a);if("pattern"==e){a.setAttribute("patternUnits","userSpaceOnUse");
var h=p(i,"image");h.setAttribute("x",0),h.setAttribute("y",0),h.setAttribute("width",t.width.toFixed(8)),
h.setAttribute("height",t.height.toFixed(8)),f(h,b.xmlns.xlink,"xlink:href",t.src),
a.appendChild(h)}else{a.setAttribute("gradientUnits","userSpaceOnUse");for(var l=0;l<t.colors.length;++l){
var u=t.colors[l],c=p(i,"stop"),g=u.color=d.normalizeColor(u.color);c.setAttribute("offset",u.offset.toFixed(8)),
c.setAttribute("stop-color",g.toCss()),c.setAttribute("stop-opacity",g.a),a.appendChild(c);
}}return this.rawNode.setAttribute("fill","url(#"+a.getAttribute("id")+")"),this.rawNode.removeAttribute("fill-opacity"),
this.rawNode.setAttribute("fill-rule","evenodd"),a},_applyTransform:function(){var t=this.matrix;
if(t){var e=this.matrix;this.rawNode.setAttribute("transform","matrix("+e.xx.toFixed(8)+","+e.yx.toFixed(8)+","+e.xy.toFixed(8)+","+e.yy.toFixed(8)+","+e.dx.toFixed(8)+","+e.dy.toFixed(8)+")");
}else this.rawNode.removeAttribute("transform");return this},setRawNode:function(t){
var e=this.rawNode=t;"image"!=this.shape.type&&e.setAttribute("fill","none"),e.setAttribute("fill-opacity",0),
e.setAttribute("stroke","none"),e.setAttribute("stroke-opacity",0),e.setAttribute("stroke-width",1),
e.setAttribute("stroke-linecap","butt"),e.setAttribute("stroke-linejoin","miter"),
e.setAttribute("stroke-miterlimit",4),e.__gfxObject__=this},setShape:function(t){
this.shape=d.makeParameters(this.shape,t);for(var e in this.shape)"type"!=e&&this.rawNode.setAttribute(e,this.shape[e]);
return this.bbox=null,this},_moveToFront:function(){return this.rawNode.parentNode.appendChild(this.rawNode),
this},_moveToBack:function(){return this.rawNode.parentNode.insertBefore(this.rawNode,this.rawNode.parentNode.firstChild),
this},setClip:function(e){this.inherited(arguments);var i=e?"width"in e?"rect":"cx"in e?"ellipse":"points"in e?"polyline":"d"in e?"path":null:null;
if(e&&!i)return this;"polyline"===i&&(e=t.clone(e),e.points=e.points.join(","));var s,a,o=n.get(this.rawNode,"clip-path");
if(o&&(s=r.byId(o.match(/gfx_clip[\d]+/)[0]),s&&s.removeChild(s.childNodes[0])),e){
if(s)a=p(b.xmlns.svg,i),s.appendChild(a);else{var h=++N,d="gfx_clip"+h,l="url(#"+d+")";
this.rawNode.setAttribute("clip-path",l),s=p(b.xmlns.svg,"clipPath"),a=p(b.xmlns.svg,i),
s.appendChild(a),this.rawNode.parentNode.appendChild(s),n.set(s,"id",d)}n.set(a,e);
}else this.rawNode.removeAttribute("clip-path"),s&&s.parentNode.removeChild(s);return this;
},_removeClipNode:function(){var t,e=n.get(this.rawNode,"clip-path");return e&&(t=r.byId(e.match(/gfx_clip[\d]+/)[0]),
t&&t.parentNode.removeChild(t)),t}}),b.Group=s("dojox.gfx.svg.Group",b.Shape,{constructor:function(){
l.Container._init.call(this)},setRawNode:function(t){this.rawNode=t,this.rawNode.__gfxObject__=this;
},destroy:function(){this.clear(!0),b.Shape.prototype.destroy.apply(this,arguments);
}}),b.Group.nodeType="g",b.Rect=s("dojox.gfx.svg.Rect",[b.Shape,l.Rect],{setShape:function(t){
this.shape=d.makeParameters(this.shape,t),this.bbox=null;for(var e in this.shape)"type"!=e&&"r"!=e&&this.rawNode.setAttribute(e,this.shape[e]);
return null!=this.shape.r&&(this.rawNode.setAttribute("ry",this.shape.r),this.rawNode.setAttribute("rx",this.shape.r)),
this}}),b.Rect.nodeType="rect",b.Ellipse=s("dojox.gfx.svg.Ellipse",[b.Shape,l.Ellipse],{}),
b.Ellipse.nodeType="ellipse",b.Circle=s("dojox.gfx.svg.Circle",[b.Shape,l.Circle],{}),
b.Circle.nodeType="circle",b.Line=s("dojox.gfx.svg.Line",[b.Shape,l.Line],{}),b.Line.nodeType="line",
b.Polyline=s("dojox.gfx.svg.Polyline",[b.Shape,l.Polyline],{setShape:function(t,e){
t&&t instanceof Array?(this.shape=d.makeParameters(this.shape,{points:t}),e&&this.shape.points.length&&this.shape.points.push(this.shape.points[0])):this.shape=d.makeParameters(this.shape,t),
this.bbox=null,this._normalizePoints();for(var i=[],r=this.shape.points,s=0;s<r.length;++s)i.push(r[s].x.toFixed(8),r[s].y.toFixed(8));
return this.rawNode.setAttribute("points",i.join(" ")),this}}),b.Polyline.nodeType="polyline",
b.Image=s("dojox.gfx.svg.Image",[b.Shape,l.Image],{setShape:function(t){this.shape=d.makeParameters(this.shape,t),
this.bbox=null;var e=this.rawNode;for(var i in this.shape)"type"!=i&&"src"!=i&&e.setAttribute(i,this.shape[i]);
return e.setAttribute("preserveAspectRatio","none"),f(e,b.xmlns.xlink,"xlink:href",this.shape.src),
e.__gfxObject__=this,this}}),b.Image.nodeType="image",b.Text=s("dojox.gfx.svg.Text",[b.Shape,l.Text],{
setShape:function(t){this.shape=d.makeParameters(this.shape,t),this.bbox=null;var e=this.rawNode,i=this.shape;
return e.setAttribute("x",i.x),e.setAttribute("y",i.y),e.setAttribute("text-anchor",i.align),
e.setAttribute("text-decoration",i.decoration),e.setAttribute("rotate",i.rotated?90:0),
e.setAttribute("kerning",i.kerning?"auto":0),e.setAttribute("text-rendering",w),e.firstChild?e.firstChild.nodeValue=i.text:e.appendChild(c(i.text)),
this},getTextWidth:function(){var t=this.rawNode,e=t.parentNode,i=t.cloneNode(!0);
i.style.visibility="hidden";var r=0,s=i.firstChild.nodeValue;if(e.appendChild(i),
""!=s)for(;!r;)r=i.getBBox?parseInt(i.getBBox().width):68;return e.removeChild(i),
r},getBoundingBox:function(){var t=this.getShape(),e=null;if(t.text)try{e=this.rawNode.getBBox();
}catch(i){e={x:0,y:0,width:0,height:0}}return e}}),b.Text.nodeType="text",b.Path=s("dojox.gfx.svg.Path",[b.Shape,u.Path],{
_updateWithSegment:function(t){this.inherited(arguments),"string"==typeof this.shape.path&&this.rawNode.setAttribute("d",this.shape.path);
},setShape:function(t){return this.inherited(arguments),this.shape.path?this.rawNode.setAttribute("d",this.shape.path):this.rawNode.removeAttribute("d"),
this}}),b.Path.nodeType="path",b.TextPath=s("dojox.gfx.svg.TextPath",[b.Shape,u.TextPath],{
_updateWithSegment:function(t){this.inherited(arguments),this._setTextPath()},setShape:function(t){
return this.inherited(arguments),this._setTextPath(),this},_setTextPath:function(){
if("string"==typeof this.shape.path){var t=this.rawNode;if(!t.firstChild){var e=p(b.xmlns.svg,"textPath"),i=c("");
e.appendChild(i),t.appendChild(e)}var r=t.firstChild.getAttributeNS(b.xmlns.xlink,"href"),s=r&&b.getRef(r);
if(!s){var a=this._getParentSurface();if(a){var o=a.defNode;s=p(b.xmlns.svg,"path");
var n=d._base._getUniqueId();s.setAttribute("id",n),o.appendChild(s),f(t.firstChild,b.xmlns.xlink,"xlink:href","#"+n);
}}s&&s.setAttribute("d",this.shape.path)}},_setText:function(){var t=this.rawNode;
if(!t.firstChild){var e=p(b.xmlns.svg,"textPath"),i=c("");e.appendChild(i),t.appendChild(e);
}t=t.firstChild;var r=this.text;switch(t.setAttribute("alignment-baseline","middle"),
r.align){case"middle":t.setAttribute("text-anchor","middle"),t.setAttribute("startOffset","50%");
break;case"end":t.setAttribute("text-anchor","end"),t.setAttribute("startOffset","100%");
break;default:t.setAttribute("text-anchor","start"),t.setAttribute("startOffset","0%");
}t.setAttribute("baseline-shift","0.5ex"),t.setAttribute("text-decoration",r.decoration),
t.setAttribute("rotate",r.rotated?90:0),t.setAttribute("kerning",r.kerning?"auto":0),
t.firstChild.data=r.text}}),b.TextPath.nodeType="text";var y=function(){var t=/WebKit\/(\d*)/.exec(x);
return t?t[1]:0}()>534;b.Surface=s("dojox.gfx.svg.Surface",l.Surface,{constructor:function(){
l.Container._init.call(this)},destroy:function(){l.Container.clear.call(this,!0),
this.defNode=null,this.inherited(arguments)},setDimensions:function(t,e){return this.rawNode?(this.rawNode.setAttribute("width",t),
this.rawNode.setAttribute("height",e),y&&(this.rawNode.style.width=t,this.rawNode.style.height=e),
this):this},getDimensions:function(){var t=this.rawNode?{width:d.normalizedLength(this.rawNode.getAttribute("width")),
height:d.normalizedLength(this.rawNode.getAttribute("height"))}:null;return t}}),
b.createSurface=function(t,e,i){var s=new b.Surface;s.rawNode=p(b.xmlns.svg,"svg"),
s.rawNode.setAttribute("overflow","hidden"),e&&s.rawNode.setAttribute("width",e),
i&&s.rawNode.setAttribute("height",i);var a=p(b.xmlns.svg,"defs");return s.rawNode.appendChild(a),
s.defNode=a,s._parent=r.byId(t),s._parent.appendChild(s.rawNode),d._base._fixMsTouchAction(s),
s};var A={_setFont:function(){var t=this.fontStyle;this.rawNode.setAttribute("font-style",t.style),
this.rawNode.setAttribute("font-variant",t.variant),this.rawNode.setAttribute("font-weight",t.weight),
this.rawNode.setAttribute("font-size",t.size),this.rawNode.setAttribute("font-family",t.family);
}},C=l.Container,_={openBatch:function(){return this._batch||(this.fragment=g()),
++this._batch,this},closeBatch:function(){return this._batch=this._batch>0?--this._batch:0,
this.fragment&&!this._batch&&(this.rawNode.appendChild(this.fragment),delete this.fragment),
this},add:function(t){return this!=t.getParent()&&(this.fragment?this.fragment.appendChild(t.rawNode):this.rawNode.appendChild(t.rawNode),
C.add.apply(this,arguments),t.setClip(t.clip)),this},remove:function(t,e){return this==t.getParent()&&(this.rawNode==t.rawNode.parentNode&&this.rawNode.removeChild(t.rawNode),
this.fragment&&this.fragment==t.rawNode.parentNode&&this.fragment.removeChild(t.rawNode),
t._removeClipNode(),C.remove.apply(this,arguments)),this},clear:function(){for(var t=this.rawNode;t.lastChild;)t.removeChild(t.lastChild);
var e=this.defNode;if(e){for(;e.lastChild;)e.removeChild(e.lastChild);t.appendChild(e);
}return C.clear.apply(this,arguments)},getBoundingBox:C.getBoundingBox,_moveChildToFront:C._moveChildToFront,
_moveChildToBack:C._moveChildToBack},S={createObject:function(t,e){if(!this.rawNode)return null;
var i=new t,r=p(b.xmlns.svg,t.nodeType);return i.setRawNode(r),i.setShape(e),this.add(i),
i}};if(t.extend(b.Text,A),t.extend(b.TextPath,A),t.extend(b.Group,_),t.extend(b.Group,l.Creator),
t.extend(b.Group,S),t.extend(b.Surface,_),t.extend(b.Surface,l.Creator),t.extend(b.Surface,S),
b.fixTarget=function(t,e){return t.gfxTarget||(m&&t.target.wholeText?t.gfxTarget=t.target.parentElement.__gfxObject__:t.gfxTarget=t.target.__gfxObject__),
!0},b.useSvgWeb){b.createSurface=function(t,e,i){var s=new b.Surface;if(!e||!i){var a=o.position(t);
e=e||a.w,i=i||a.h}t=r.byId(t);var n=t.id?t.id+"_svgweb":d._base._getUniqueId(),h=p(b.xmlns.svg,"svg");
return h.id=n,h.setAttribute("width",e),h.setAttribute("height",i),svgweb.appendChild(h,t),
h.addEventListener("SVGLoad",function(){s.rawNode=this,s.isLoaded=!0;var t=p(b.xmlns.svg,"defs");
s.rawNode.appendChild(t),s.defNode=t,s.onLoad&&s.onLoad(s)},!1),s.isLoaded=!1,s},
b.Surface.extend({destroy:function(){var t=this.rawNode;svgweb.removeChild(t,t.parentNode);
}});var k={connect:function(e,i,r){return"on"===e.substring(0,2)&&(e=e.substring(2)),
r=2==arguments.length?i:t.hitch(i,r),this.getEventSource().addEventListener(e,r,!1),
[this,e,r]},disconnect:function(t){this.getEventSource().removeEventListener(t[1],t[2],!1),
delete t[0]}};t.extend(b.Shape,k),t.extend(b.Surface,k)}return b});