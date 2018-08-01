define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/Color","./_base","./svg","./matrix"],function(t,e,r,a,n,o,i){
function l(t){var i=t.rawNode.getAttribute("fill");if("none"==i)return void(t.fillStyle=null);
var l=null,c=o.getRef(i);if(c)switch(c.tagName.toLowerCase()){case"lineargradient":
l=u(n.defaultLinearGradient,c),r.forEach(["x1","y1","x2","y2"],function(t){l[t]=c.getAttribute(t);
});break;case"radialgradient":l=u(n.defaultRadialGradient,c),r.forEach(["cx","cy","r"],function(t){
l[t]=c.getAttribute(t)}),l.cx=c.getAttribute("cx"),l.cy=c.getAttribute("cy"),l.r=c.getAttribute("r");
break;case"pattern":l=e.clone(n.defaultPattern),r.forEach(["x","y","width","height"],function(t){
l[t]=c.getAttribute(t)}),l.src=c.firstChild.getAttributeNS(o.xmlns.xlink,"href")}else{
l=new a(i);var d=t.rawNode.getAttribute("fill-opacity");null!=d&&(l.a=d)}t.fillStyle=l;
}function u(t,r){var n=e.clone(t);n.colors=[];for(var o=0;o<r.childNodes.length;++o)n.colors.push({
offset:r.childNodes[o].getAttribute("offset"),color:new a(r.childNodes[o].getAttribute("stop-color"))
});return n}function c(t){var r=t.rawNode,o=r.getAttribute("stroke");if(null==o||"none"==o)return void(t.strokeStyle=null);
var i=t.strokeStyle=e.clone(n.defaultStroke),l=new a(o);l&&(i.color=l,i.color.a=r.getAttribute("stroke-opacity"),
i.width=r.getAttribute("stroke-width"),i.cap=r.getAttribute("stroke-linecap"),i.join=r.getAttribute("stroke-linejoin"),
"miter"==i.join&&(i.join=r.getAttribute("stroke-miterlimit")),i.style=r.getAttribute("dojoGfxStrokeStyle"));
}function d(t){var e=t.rawNode.getAttribute("transform");if(e.match(/^matrix\(.+\)$/)){
var r=e.slice(7,-1).split(",");t.matrix=i.normalize({xx:parseFloat(r[0]),xy:parseFloat(r[2]),
yx:parseFloat(r[1]),yy:parseFloat(r[3]),dx:parseFloat(r[4]),dy:parseFloat(r[5])});
}else t.matrix=null}function s(t){var r=t.fontStyle=e.clone(n.defaultFont),a=t.rawNode;
r.style=a.getAttribute("font-style"),r.variant=a.getAttribute("font-variant"),r.weight=a.getAttribute("font-weight"),
r.size=a.getAttribute("font-size"),r.family=a.getAttribute("font-family")}function f(t,r){
var a=t.shape=e.clone(r),n=t.rawNode;for(var o in a)a[o]=n.getAttribute(o)}function g(t){
f(t,n.defaultRect),t.shape.r=Math.min(t.rawNode.getAttribute("rx"),t.rawNode.getAttribute("ry"));
}function b(t){var r=t.shape=e.clone(n.defaultText),a=t.rawNode;r.x=a.getAttribute("x"),
r.y=a.getAttribute("y"),r.align=a.getAttribute("text-anchor"),r.decoration=a.getAttribute("text-decoration"),
r.rotated=0!=parseFloat(a.getAttribute("rotate")),r.kerning="auto"==a.getAttribute("kerning"),
r.text=a.firstChild.nodeValue}function h(t){var r=t.shape=e.clone(n.defaultTextPath),a=t.rawNode;
r.align=a.getAttribute("text-anchor"),r.decoration=a.getAttribute("text-decoration"),
r.rotated=0!=parseFloat(a.getAttribute("rotate")),r.kerning="auto"==a.getAttribute("kerning"),
r.text=a.firstChild.nodeValue}return t.experimental("dojox.gfx.svg_attach"),o.attachNode=function(t){
if(!t)return null;var e=null;switch(t.tagName.toLowerCase()){case o.Rect.nodeType:
e=new o.Rect(t),g(e);break;case o.Ellipse.nodeType:e=new o.Ellipse(t),f(e,n.defaultEllipse);
break;case o.Polyline.nodeType:e=new o.Polyline(t),f(e,n.defaultPolyline);break;case o.Path.nodeType:
e=new o.Path(t),f(e,n.defaultPath);break;case o.Circle.nodeType:e=new o.Circle(t),
f(e,n.defaultCircle);break;case o.Line.nodeType:e=new o.Line(t),f(e,n.defaultLine);
break;case o.Image.nodeType:e=new o.Image(t),f(e,n.defaultImage);break;case o.Text.nodeType:
var r=t.getElementsByTagName("textPath");r&&r.length?(e=new o.TextPath(t),f(e,n.defaultPath),
h(e)):(e=new o.Text(t),b(e)),s(e);break;default:return null}return e instanceof o.Image||(l(e),
c(e)),d(e),e},o.attachSurface=function(t){var e=new o.Surface;e.rawNode=t;var r=t.getElementsByTagName("defs");
return 0==r.length?null:(e.defNode=r[0],e)},o});