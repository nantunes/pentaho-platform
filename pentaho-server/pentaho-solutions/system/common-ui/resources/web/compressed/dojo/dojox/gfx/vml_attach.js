define(["dojo/_base/kernel","dojo/_base/lang","./_base","./matrix","./path","dojo/_base/Color","./vml"],function(e,t,a,r,n,o,l){
e.experimental("dojox.gfx.vml_attach"),l.attachNode=function(e){if(!e)return null;
var t=null;switch(e.tagName.toLowerCase()){case l.Rect.nodeType:t=new l.Rect(e),c(t);
break;case l.Ellipse.nodeType:e.style.width==e.style.height?(t=new l.Circle(e),f(t)):(t=new l.Ellipse(e),
d(t));break;case l.Path.nodeType:switch(e.getAttribute("dojoGfxType")){case"line":
t=new l.Line(e),y(t);break;case"polyline":t=new l.Polyline(e),x(t);break;case"path":
t=new l.Path(e),k(t);break;case"text":t=new l.Text(e),m(t),v(t),N(t);break;case"textpath":
t=new l.TextPath(e),k(t),m(t),v(t)}break;case l.Image.nodeType:switch(e.getAttribute("dojoGfxType")){
case"image":t=new l.Image(e),u(t),g(t)}break;default:return null}return t instanceof l.Image||(i(t),
s(t),t instanceof l.Text||p(t)),t},l.attachSurface=function(e){var t=new l.Surface;
t.clipNode=e;var a=t.rawNode=e.firstChild,r=a.firstChild;return r&&"rect"==r.tagName?(t.bgNode=a,
t):null};var i=function(e){var n,i,s,p=null,c=e.rawNode,d=c.fill;if(d.on&&"gradient"==d.type)for(p=t.clone(a.defaultLinearGradient),
rad=r._degToRad(d.angle),p.x2=Math.cos(rad),p.y2=Math.sin(rad),p.colors=[],n=d.colors.value.split(";"),
i=0;i<n.length;++i)s=n[i].match(/\S+/g),s&&2==s.length&&p.colors.push({offset:l._parseFloat(s[0]),
color:new o(s[1])});else if(d.on&&"gradientradial"==d.type)for(p=t.clone(a.defaultRadialGradient),
w=parseFloat(c.style.width),h=parseFloat(c.style.height),p.cx=isNaN(w)?0:d.focusposition.x*w,
p.cy=isNaN(h)?0:d.focusposition.y*h,p.r=isNaN(w)?1:w/2,p.colors=[],n=d.colors.value.split(";"),
i=n.length-1;i>=0;--i)s=n[i].match(/\S+/g),s&&2==s.length&&p.colors.push({offset:l._parseFloat(s[0]),
color:new o(s[1])});else d.on&&"tile"==d.type?(p=t.clone(a.defaultPattern),p.width=a.pt2px(d.size.x),
p.height=a.pt2px(d.size.y),p.x=d.origin.x*p.width,p.y=d.origin.y*p.height,p.src=d.src):d.on&&c.fillcolor&&(p=new o(c.fillcolor+""),
p.a=d.opacity);e.fillStyle=p},s=function(e){var r=e.rawNode;if(!r.stroked)return void(e.strokeStyle=null);
var n=e.strokeStyle=t.clone(a.defaultStroke),l=r.stroke;n.color=new o(r.strokecolor.value),
n.width=a.normalizedLength(r.strokeweight+""),n.color.a=l.opacity,n.cap=this._translate(this._capMapReversed,l.endcap),
n.join="miter"==l.joinstyle?l.miterlimit:l.joinstyle,n.style=l.dashstyle},p=function(e){
var t=e.rawNode.skew,n=t.matrix,o=t.offset;e.matrix=r.normalize({xx:n.xtox,xy:n.ytox,
yx:n.xtoy,yy:n.ytoy,dx:a.pt2px(o.x),dy:a.pt2px(o.y)})},c=function(e){var t=e.rawNode,r=t.outerHTML.match(/arcsize = \"(\d*\.?\d+[%f]?)\"/)[1],n=t.style,o=parseFloat(n.width),i=parseFloat(n.height);
r=r.indexOf("%")>=0?parseFloat(r)/100:l._parseFloat(r),e.shape=a.makeParameters(a.defaultRect,{
x:parseInt(n.left),y:parseInt(n.top),width:o,height:i,r:Math.min(o,i)*r})},d=function(e){
var t=e.rawNode.style,r=parseInt(t.width)/2,n=parseInt(t.height)/2;e.shape=a.makeParameters(a.defaultEllipse,{
cx:parseInt(t.left)+r,cy:parseInt(t.top)+n,rx:r,ry:n})},f=function(e){var t=e.rawNode.style,r=parseInt(t.width)/2;
e.shape=a.makeParameters(a.defaultCircle,{cx:parseInt(t.left)+r,cy:parseInt(t.top)+r,
r:r})},y=function(e){var r=e.shape=t.clone(a.defaultLine),n=e.rawNode.path.v.match(a.pathVmlRegExp);
do{if(n.length<7||"m"!=n[0]||"l"!=n[3]||"e"!=n[6])break;r.x1=parseInt(n[1]),r.y1=parseInt(n[2]),
r.x2=parseInt(n[4]),r.y2=parseInt(n[5])}while(!1)},x=function(e){var r=e.shape=t.clone(a.defaultPolyline),n=e.rawNode.path.v.match(a.pathVmlRegExp);
do{if(n.length<3||"m"!=n[0])break;var o=parseInt(n[0]),l=parseInt(n[1]);if(isNaN(o)||isNaN(l))break;
if(r.points.push({x:o,y:l}),n.length<6||"l"!=n[3])break;for(var i=4;i<n.length&&(o=parseInt(n[i]),
l=parseInt(n[i+1]),!isNaN(o)&&!isNaN(l));i+=2)r.points.push({x:o,y:l})}while(!1)},u=function(e){
e.shape=t.clone(a.defaultImage),e.shape.src=e.rawNode.firstChild.src},g=function(e){
var t=e.rawNode.filters["DXImageTransform.Microsoft.Matrix"];e.matrix=r.normalize({
xx:t.M11,xy:t.M12,yx:t.M21,yy:t.M22,dx:t.Dx,dy:t.Dy})},m=function(e){var r=e.shape=t.clone(a.defaultText),n=e.rawNode,o=n.path.v.match(a.pathVmlRegExp);
do{if(!o||7!=o.length)break;for(var i=n.childNodes,s=0;s<i.length&&"textpath"!=i[s].tagName;++s);
if(s>=i.length)break;var h=i[s].style;switch(r.text=i[s].string,h["v-text-align"]){
case"left":r.x=parseInt(o[1]),r.align="start";break;case"center":r.x=(parseInt(o[1])+parseInt(o[4]))/2,
r.align="middle";break;case"right":r.x=parseInt(o[4]),r.align="end"}return r.y=parseInt(o[2]),
r.decoration=h["text-decoration"],r.rotated=h["v-rotate-letters"].toLowerCase()in l._bool,
void(r.kerning=h["v-text-kern"].toLowerCase()in l._bool)}while(!1);e.shape=null},v=function(e){
for(var r=e.fontStyle=t.clone(a.defaultFont),n=e.rawNode.childNodes,o=0;o<n.length&&"textpath"==n[o].tagName;++o);
if(o>=n.length)return void(e.fontStyle=null);var l=n[o].style;r.style=l.fontstyle,
r.variant=l.fontvariant,r.weight=l.fontweight,r.size=l.fontsize,r.family=l.fontfamily;
},N=function(e){p(e);var t=e.matrix,n=e.fontStyle;t&&n&&(e.matrix=r.multiply(t,{dy:.35*a.normalizedLength(n.size)
}))},k=function(e){for(var r=e.shape=t.clone(a.defaultPath),o=e.rawNode.path.v.match(a.pathVmlRegExp),l=[],i=!1,s=n._pathVmlToSvgMap,h=0;h<o.length;++o){
var p=o[h];if(p in s)i=!1,l.push(s[p]);else if(!i){var c=parseInt(p);isNaN(c)?i=!0:l.push(c);
}}var d=l.length;d>=4&&""==l[d-1]&&0==l[d-2]&&0==l[d-3]&&"l"==l[d-4]&&l.splice(d-4,4),
d&&(r.path=l.join(" "))};return l});