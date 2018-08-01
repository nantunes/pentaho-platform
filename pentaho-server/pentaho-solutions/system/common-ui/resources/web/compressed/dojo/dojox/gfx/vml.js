define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/Color","dojo/_base/sniff","dojo/_base/config","dojo/dom","dojo/dom-geometry","dojo/_base/kernel","./_base","./shape","./path","./arc","./gradient","./matrix"],function(t,e,i,r,o,a,s,n,h,l,d,p,f,u,c){
function x(t,e,r){r=r||h.global,e.call(r,t),(t instanceof l.Surface||t instanceof l.Group)&&i.forEach(t.children,function(t){
x(t,e,r)})}var y=l.vml={};y.xmlns="urn:schemas-microsoft-com:vml",document.namespaces.add("v",y.xmlns);
var g=["*","group","roundrect","oval","shape","rect","imagedata","path","textpath","text"],m=0,v=1,w=document.createStyleSheet();
for(o("ie")>=8&&(m=1,v=g.length);v>m;++m)w.addRule("v\\:"+g[m],"behavior:url(#default#VML); display:inline-block");
y.text_alignment={start:"left",middle:"center",end:"right"},y._parseFloat=function(t){
return t.match(/^\d+f$/i)?parseInt(t)/65536:parseFloat(t)},y._bool={t:1,"true":1},
y._reparentEvents=function(t,e){for(var i in e)"on"==i.substr(0,2).toLowerCase()&&(t[i]=e[i],
e[i]=null)},y.Shape=e("dojox.gfx.vml.Shape",d.Shape,{setFill:function(t){if(!t)return this.fillStyle=null,
this.rawNode.filled="f",this;var e,o,a,s,n;if("object"==typeof t&&"type"in t){switch(t.type){
case"linear":var h=this._getRealMatrix(),d=this.getBoundingBox(),p=this._getRealBBox?this._getRealBBox():this.getTransformedBoundingBox();
for(n=[],this.fillStyle!==t&&(this.fillStyle=l.makeParameters(l.defaultLinearGradient,t)),
o=l.gradient.project(h,this.fillStyle,{x:d.x,y:d.y},{x:d.x+d.width,y:d.y+d.height
},p[0],p[2]),s=o.colors,"0.00000"!=s[0].offset.toFixed(5)&&n.push("0 "+l.normalizeColor(s[0].color).toHex()),
e=0;e<s.length;++e)n.push(s[e].offset.toFixed(5)+" "+l.normalizeColor(s[e].color).toHex());
e=s.length-1,"1.00000"!=s[e].offset.toFixed(5)&&n.push("1 "+l.normalizeColor(s[e].color).toHex()),
a=this.rawNode.fill,a.colors.value=n.join(";"),a.method="sigma",a.type="gradient",
a.angle=(270-c._radToDeg(o.angle))%360,a.on=!0;break;case"radial":o=l.makeParameters(l.defaultRadialGradient,t),
this.fillStyle=o;var f=parseFloat(this.rawNode.style.left),u=parseFloat(this.rawNode.style.top),x=parseFloat(this.rawNode.style.width),y=parseFloat(this.rawNode.style.height),g=isNaN(x)?1:2*o.r/x;
for(s=[],o.colors[0].offset>0&&s.push({offset:1,color:l.normalizeColor(o.colors[0].color)
}),i.forEach(o.colors,function(t,e){s.push({offset:1-t.offset*g,color:l.normalizeColor(t.color)
})}),e=s.length-1;e>=0&&s[e].offset<0;)--e;if(e<s.length-1){var m=s[e],v=s[e+1];for(v.color=r.blendColors(m.color,v.color,m.offset/(m.offset-v.offset)),
v.offset=0;s.length-e>2;)s.pop()}for(e=s.length-1,n=[],s[e].offset>0&&n.push("0 "+s[e].color.toHex());e>=0;--e)n.push(s[e].offset.toFixed(5)+" "+s[e].color.toHex());
a=this.rawNode.fill,a.colors.value=n.join(";"),a.method="sigma",a.type="gradientradial",
isNaN(x)||isNaN(y)||isNaN(f)||isNaN(u)?a.focusposition="0.5 0.5":a.focusposition=((o.cx-f)/x).toFixed(5)+" "+((o.cy-u)/y).toFixed(5),
a.focussize="0 0",a.on=!0;break;case"pattern":o=l.makeParameters(l.defaultPattern,t),
this.fillStyle=o,a=this.rawNode.fill,a.type="tile",a.src=o.src,o.width&&o.height&&(a.size.x=l.px2pt(o.width),
a.size.y=l.px2pt(o.height)),a.alignShape="f",a.position.x=0,a.position.y=0,a.origin.x=o.width?o.x/o.width:0,
a.origin.y=o.height?o.y/o.height:0,a.on=!0}return this.rawNode.fill.opacity=1,this;
}this.fillStyle=l.normalizeColor(t),a=this.rawNode.fill,a||(a=this.rawNode.ownerDocument.createElement("v:fill")),
a.method="any",a.type="solid",a.opacity=this.fillStyle.a;var w=this.rawNode.filters["DXImageTransform.Microsoft.Alpha"];
return w&&(w.opacity=Math.round(100*this.fillStyle.a)),this.rawNode.fillcolor=this.fillStyle.toHex(),
this.rawNode.filled=!0,this},setStroke:function(e){if(!e)return this.strokeStyle=null,
this.rawNode.stroked="f",this;("string"==typeof e||t.isArray(e)||e instanceof r)&&(e={
color:e});var i=this.strokeStyle=l.makeParameters(l.defaultStroke,e);i.color=l.normalizeColor(i.color);
var o=this.rawNode;return o.stroked=!0,o.strokecolor=i.color.toCss(),o.strokeweight=i.width+"px",
o.stroke&&(o.stroke.opacity=i.color.a,o.stroke.endcap=this._translate(this._capMap,i.cap),
"number"==typeof i.join?(o.stroke.joinstyle="miter",o.stroke.miterlimit=i.join):o.stroke.joinstyle=i.join,
o.stroke.dashstyle="none"==i.style?"Solid":i.style),this},_capMap:{butt:"flat"},_capMapReversed:{
flat:"butt"},_translate:function(t,e){return e in t?t[e]:e},_applyTransform:function(){
var t=this._getRealMatrix();if(t){var e=this.rawNode.skew;if("undefined"==typeof e)for(var i=0;i<this.rawNode.childNodes.length;++i)if("skew"==this.rawNode.childNodes[i].tagName){
e=this.rawNode.childNodes[i];break}if(e){e.on="f";var r=t.xx.toFixed(8)+" "+t.xy.toFixed(8)+" "+t.yx.toFixed(8)+" "+t.yy.toFixed(8)+" 0 0",o=Math.floor(t.dx).toFixed()+"px "+Math.floor(t.dy).toFixed()+"px",a=this.rawNode.style,s=parseFloat(a.left),n=parseFloat(a.top),h=parseFloat(a.width),l=parseFloat(a.height);
isNaN(s)&&(s=0),isNaN(n)&&(n=0),(isNaN(h)||!h)&&(h=1),(isNaN(l)||!l)&&(l=1);var d=(-s/h-.5).toFixed(8)+" "+(-n/l-.5).toFixed(8);
e.matrix=r,e.origin=d,e.offset=o,e.on=!0}}return this.fillStyle&&"linear"==this.fillStyle.type&&this.setFill(this.fillStyle),
this.clip&&this.setClip(this.clip),this},_setDimensions:function(t,e){return this;
},setRawNode:function(t){t.stroked="f",t.filled="f",this.rawNode=t,this.rawNode.__gfxObject__=this;
},_moveToFront:function(){return this.rawNode.parentNode.appendChild(this.rawNode),
this},_moveToBack:function(){var t=this.rawNode,e=t.parentNode,i=e.firstChild;return e.insertBefore(t,i),
"rect"==i.tagName&&i.swapNode(t),this},_getRealMatrix:function(){return this.parentMatrix?new c.Matrix2D([this.parentMatrix,this.matrix]):this.matrix;
},setClip:function(t){this.inherited(arguments);var e=this.rawNode.style;if(t){if("width"in t){
var i=this._getRealMatrix(),r=parseFloat(e.left),o=parseFloat(e.top);isNaN(r)&&(r=0),
isNaN(o)&&(o=0);var a=c.multiplyRectangle(i,t),s=c.multiplyPoint(i,{x:r,y:o});e.clip="rect("+Math.round(a.y-s.y)+"px "+Math.round(a.x-s.x+a.width)+"px "+Math.round(a.y-s.y+a.height)+"px "+Math.round(a.x-s.x)+"px)";
}}else e.position="absolute",e.clip="rect(0px "+e.width+" "+e.height+" 0px)";return this;
}}),y.Group=e("dojox.gfx.vml.Group",y.Shape,{constructor:function(){d.Container._init.call(this);
},_applyTransform:function(){for(var t=this._getRealMatrix(),e=0;e<this.children.length;++e)this.children[e]._updateParentMatrix(t);
return this.clip&&this.setClip(this.clip),this},_setDimensions:function(t,e){var i=this.rawNode,r=i.style,o=this.bgNode.style;
r.width=t,r.height=e,i.coordsize=t+" "+e,o.width=t,o.height=e;for(var a=0;a<this.children.length;++a)this.children[a]._setDimensions(t,e);
return this},setClip:function(t){this.clip=t;var e=this.rawNode.style;if(t){if("width"in t){
var i=this._getRealMatrix(),r=c.multiplyRectangle(i,t),o=this.getBoundingBox();o=o?c.multiplyRectangle(i,o):null;
var a=o&&o.x<0?o.x:0,s=o&&o.y<0?o.y:0;e.position="absolute",e.clip="rect("+Math.round(r.y-s)+"px "+Math.round(r.x+r.width-a)+"px "+Math.round(r.y+r.height-s)+"px "+Math.round(r.x-a)+"px)";
}}else e.position="absolute",e.clip="rect(0px "+e.width+" "+e.height+" 0px)";return this;
},destroy:function(){this.clear(!0),y.Shape.prototype.destroy.apply(this,arguments);
}}),y.Group.nodeType="group",y.Rect=e("dojox.gfx.vml.Rect",[y.Shape,d.Rect],{setShape:function(t){
var e=this.shape=l.makeParameters(this.shape,t);this.bbox=null;var i=Math.min(1,e.r/Math.min(parseFloat(e.width),parseFloat(e.height))).toFixed(8),r=this.rawNode.parentNode,a=null;
if(r){if(r.lastChild!==this.rawNode)for(var s=0;s<r.childNodes.length;++s)if(r.childNodes[s]===this.rawNode){
a=r.childNodes[s+1];break}r.removeChild(this.rawNode)}if(o("ie")>7){var n=this.rawNode.ownerDocument.createElement("v:roundrect");
n.arcsize=i,n.style.display="inline-block",y._reparentEvents(n,this.rawNode),this.rawNode=n,
this.rawNode.__gfxObject__=this}else this.rawNode.arcsize=i;r&&(a?r.insertBefore(this.rawNode,a):r.appendChild(this.rawNode));
var h=this.rawNode.style;return h.left=e.x.toFixed(),h.top=e.y.toFixed(),h.width="string"==typeof e.width&&e.width.indexOf("%")>=0?e.width:Math.max(e.width.toFixed(),0),
h.height="string"==typeof e.height&&e.height.indexOf("%")>=0?e.height:Math.max(e.height.toFixed(),0),
this.setTransform(this.matrix).setFill(this.fillStyle).setStroke(this.strokeStyle);
}}),y.Rect.nodeType="roundrect",y.Ellipse=e("dojox.gfx.vml.Ellipse",[y.Shape,d.Ellipse],{
setShape:function(t){var e=this.shape=l.makeParameters(this.shape,t);this.bbox=null;
var i=this.rawNode.style;return i.left=(e.cx-e.rx).toFixed(),i.top=(e.cy-e.ry).toFixed(),
i.width=(2*e.rx).toFixed(),i.height=(2*e.ry).toFixed(),this.setTransform(this.matrix);
}}),y.Ellipse.nodeType="oval",y.Circle=e("dojox.gfx.vml.Circle",[y.Shape,d.Circle],{
setShape:function(t){var e=this.shape=l.makeParameters(this.shape,t);this.bbox=null;
var i=this.rawNode.style;return i.left=(e.cx-e.r).toFixed(),i.top=(e.cy-e.r).toFixed(),
i.width=(2*e.r).toFixed(),i.height=(2*e.r).toFixed(),this}}),y.Circle.nodeType="oval",
y.Line=e("dojox.gfx.vml.Line",[y.Shape,d.Line],{constructor:function(t){t&&t.setAttribute("dojoGfxType","line");
},setShape:function(t){var e=this.shape=l.makeParameters(this.shape,t);return this.bbox=null,
this.rawNode.path.v="m"+e.x1.toFixed()+" "+e.y1.toFixed()+"l"+e.x2.toFixed()+" "+e.y2.toFixed()+"e",
this.setTransform(this.matrix)}}),y.Line.nodeType="shape",y.Polyline=e("dojox.gfx.vml.Polyline",[y.Shape,d.Polyline],{
constructor:function(t){t&&t.setAttribute("dojoGfxType","polyline")},setShape:function(t,e){
t&&t instanceof Array?(this.shape=l.makeParameters(this.shape,{points:t}),e&&this.shape.points.length&&this.shape.points.push(this.shape.points[0])):this.shape=l.makeParameters(this.shape,t),
this.bbox=null,this._normalizePoints();var i=[],r=this.shape.points;if(r.length>0&&(i.push("m"),
i.push(r[0].x.toFixed(),r[0].y.toFixed()),r.length>1)){i.push("l");for(var o=1;o<r.length;++o)i.push(r[o].x.toFixed(),r[o].y.toFixed());
}return i.push("e"),this.rawNode.path.v=i.join(" "),this.setTransform(this.matrix);
}}),y.Polyline.nodeType="shape",y.Image=e("dojox.gfx.vml.Image",[y.Shape,d.Image],{
setShape:function(t){var e=this.shape=l.makeParameters(this.shape,t);return this.bbox=null,
this.rawNode.firstChild.src=e.src,this.setTransform(this.matrix)},_applyTransform:function(){
var t=this._getRealMatrix(),e=this.rawNode,i=e.style,r=this.shape;if(t=t?c.multiply(t,{
dx:r.x,dy:r.y}):c.normalize({dx:r.x,dy:r.y}),0==t.xy&&0==t.yx&&t.xx>0&&t.yy>0)i.filter="",
i.width=Math.floor(t.xx*r.width),i.height=Math.floor(t.yy*r.height),i.left=Math.floor(t.dx),
i.top=Math.floor(t.dy);else{var o=e.parentNode.style;i.left="0px",i.top="0px",i.width=o.width,
i.height=o.height,t=c.multiply(t,{xx:r.width/parseInt(i.width),yy:r.height/parseInt(i.height)
});var a=e.filters["DXImageTransform.Microsoft.Matrix"];a?(a.M11=t.xx,a.M12=t.xy,
a.M21=t.yx,a.M22=t.yy,a.Dx=t.dx,a.Dy=t.dy):i.filter="progid:DXImageTransform.Microsoft.Matrix(M11="+t.xx+", M12="+t.xy+", M21="+t.yx+", M22="+t.yy+", Dx="+t.dx+", Dy="+t.dy+")";
}return this},_setDimensions:function(t,e){var i=this.rawNode,r=i.filters["DXImageTransform.Microsoft.Matrix"];
if(r){var o=i.style;return o.width=t,o.height=e,this._applyTransform()}return this;
}}),y.Image.nodeType="rect",y.Text=e("dojox.gfx.vml.Text",[y.Shape,d.Text],{constructor:function(t){
t&&t.setAttribute("dojoGfxType","text"),this.fontStyle=null},_alignment:{start:"left",
middle:"center",end:"right"},setShape:function(t){this.shape=l.makeParameters(this.shape,t),
this.bbox=null;var e,i=this.rawNode,r=this.shape,o=r.x,a=r.y.toFixed();switch(r.align){
case"middle":o-=5;break;case"end":o-=10}e="m"+o.toFixed()+","+a+"l"+(o+10).toFixed()+","+a+"e";
for(var s=null,n=null,h=i.childNodes,d=0;d<h.length;++d){var p=h[d].tagName;if("path"==p){
if(s=h[d],n)break}else if("textpath"==p&&(n=h[d],s))break}s||(s=i.ownerDocument.createElement("v:path"),
i.appendChild(s)),n||(n=i.ownerDocument.createElement("v:textpath"),i.appendChild(n)),
s.v=e,s.textPathOk=!0,n.on=!0;var f=y.text_alignment[r.align];return n.style["v-text-align"]=f?f:"left",
n.style["text-decoration"]=r.decoration,n.style["v-rotate-letters"]=r.rotated,n.style["v-text-kern"]=r.kerning,
n.string=r.text,this.setTransform(this.matrix)},_setFont:function(){for(var t=this.fontStyle,e=this.rawNode.childNodes,i=0;i<e.length;++i)if("textpath"==e[i].tagName){
e[i].style.font=l.makeFontString(t);break}this.setTransform(this.matrix)},_getRealMatrix:function(){
var t=this.inherited(arguments);return t&&(t=c.multiply(t,{dy:.35*-l.normalizedLength(this.fontStyle?this.fontStyle.size:"10pt")
})),t},getTextWidth:function(){var t=this.rawNode,e=t.style.display;t.style.display="inline";
var i=l.pt2px(parseFloat(t.currentStyle.width));return t.style.display=e,i}}),y.Text.nodeType="shape",
y.Path=e("dojox.gfx.vml.Path",[y.Shape,p.Path],{constructor:function(t){t&&!t.getAttribute("dojoGfxType")&&t.setAttribute("dojoGfxType","path"),
this.vmlPath="",this.lastControl={}},_updateWithSegment:function(e){var i=t.clone(this.last);
if(this.inherited(arguments),!(arguments.length>1)){var r=this[this.renderers[e.action]](e,i);
"string"==typeof this.vmlPath?(this.vmlPath+=r.join(""),this.rawNode.path.v=this.vmlPath+" r0,0 e"):Array.prototype.push.apply(this.vmlPath,r);
}},setShape:function(t){return this.vmlPath=[],this.lastControl.type="",this.inherited(arguments),
this.vmlPath=this.vmlPath.join(""),this.rawNode.path.v=this.vmlPath+" r0,0 e",this;
},_pathVmlToSvgMap:{m:"M",l:"L",t:"m",r:"l",c:"C",v:"c",qb:"Q",x:"z",e:""},renderers:{
M:"_moveToA",m:"_moveToR",L:"_lineToA",l:"_lineToR",H:"_hLineToA",h:"_hLineToR",V:"_vLineToA",
v:"_vLineToR",C:"_curveToA",c:"_curveToR",S:"_smoothCurveToA",s:"_smoothCurveToR",
Q:"_qCurveToA",q:"_qCurveToR",T:"_qSmoothCurveToA",t:"_qSmoothCurveToR",A:"_arcTo",
a:"_arcTo",Z:"_closePath",z:"_closePath"},_addArgs:function(t,e,i,r){for(var o=e instanceof Array?e:e.args,a=i;r>a;++a)t.push(" ",o[a].toFixed());
},_adjustRelCrd:function(t,e,i){var r=e instanceof Array?e:e.args,o=r.length,a=new Array(o),s=0,n=t.x,h=t.y;
if("number"!=typeof n&&(a[0]=n=r[0],a[1]=h=r[1],s=2),"number"==typeof i&&2!=i)for(var l=i;o>=l;){
for(;l>s;s+=2)a[s]=n+r[s],a[s+1]=h+r[s+1];n=a[l-2],h=a[l-1],l+=i}else for(;o>s;s+=2)a[s]=n+=r[s],
a[s+1]=h+=r[s+1];return a},_adjustRelPos:function(t,e){for(var i=e instanceof Array?e:e.args,r=i.length,o=new Array(r),a=0;r>a;++a)o[a]=t+=i[a];
return o},_moveToA:function(t){var e=[" m"],i=t instanceof Array?t:t.args,r=i.length;
return this._addArgs(e,i,0,2),r>2&&(e.push(" l"),this._addArgs(e,i,2,r)),this.lastControl.type="",
e},_moveToR:function(t,e){return this._moveToA(this._adjustRelCrd(e,t))},_lineToA:function(t){
var e=[" l"],i=t instanceof Array?t:t.args;return this._addArgs(e,i,0,i.length),this.lastControl.type="",
e},_lineToR:function(t,e){return this._lineToA(this._adjustRelCrd(e,t))},_hLineToA:function(t,e){
for(var i=[" l"],r=" "+e.y.toFixed(),o=t instanceof Array?t:t.args,a=o.length,s=0;a>s;++s)i.push(" ",o[s].toFixed(),r);
return this.lastControl.type="",i},_hLineToR:function(t,e){return this._hLineToA(this._adjustRelPos(e.x,t),e);
},_vLineToA:function(t,e){for(var i=[" l"],r=" "+e.x.toFixed(),o=t instanceof Array?t:t.args,a=o.length,s=0;a>s;++s)i.push(r," ",o[s].toFixed());
return this.lastControl.type="",i},_vLineToR:function(t,e){return this._vLineToA(this._adjustRelPos(e.y,t),e);
},_curveToA:function(t){for(var e=[],i=t instanceof Array?t:t.args,r=i.length,o=this.lastControl,a=0;r>a;a+=6)e.push(" c"),
this._addArgs(e,i,a,a+6);return o.x=i[r-4],o.y=i[r-3],o.type="C",e},_curveToR:function(t,e){
return this._curveToA(this._adjustRelCrd(e,t,6))},_smoothCurveToA:function(t,e){var i=[],r=t instanceof Array?t:t.args,o=r.length,a=this.lastControl,s=0;
for("C"!=a.type&&(i.push(" c"),this._addArgs(i,[e.x,e.y],0,2),this._addArgs(i,r,0,4),
a.x=r[0],a.y=r[1],a.type="C",s=4);o>s;s+=4)i.push(" c"),this._addArgs(i,[2*e.x-a.x,2*e.y-a.y],0,2),
this._addArgs(i,r,s,s+4),a.x=r[s],a.y=r[s+1];return i},_smoothCurveToR:function(t,e){
return this._smoothCurveToA(this._adjustRelCrd(e,t,4),e)},_qCurveToA:function(t){
for(var e=[],i=t instanceof Array?t:t.args,r=i.length,o=this.lastControl,a=0;r>a;a+=4)e.push(" qb"),
this._addArgs(e,i,a,a+4);return o.x=i[r-4],o.y=i[r-3],o.type="Q",e},_qCurveToR:function(t,e){
return this._qCurveToA(this._adjustRelCrd(e,t,4))},_qSmoothCurveToA:function(t,e){
var i=[],r=t instanceof Array?t:t.args,o=r.length,a=this.lastControl,s=0;for("Q"!=a.type&&(i.push(" qb"),
this._addArgs(i,[a.x=e.x,a.y=e.y],0,2),a.type="Q",this._addArgs(i,r,0,2),s=2);o>s;s+=2)i.push(" qb"),
this._addArgs(i,[a.x=2*e.x-a.x,a.y=2*e.y-a.y],0,2),this._addArgs(i,r,s,s+2);return i;
},_qSmoothCurveToR:function(t,e){return this._qSmoothCurveToA(this._adjustRelCrd(e,t,2),e);
},_arcTo:function(t,e){for(var i=[],r=t.args,o=r.length,a="a"==t.action,s=0;o>s;s+=7){
var n=r[s+5],h=r[s+6];a&&(n+=e.x,h+=e.y);for(var l=f.arcAsBezier(e,r[s],r[s+1],r[s+2],r[s+3]?1:0,r[s+4]?1:0,n,h),d=0;d<l.length;++d){
i.push(" c");var p=l[d];this._addArgs(i,p,0,p.length),this._updateBBox(p[0],p[1]),
this._updateBBox(p[2],p[3]),this._updateBBox(p[4],p[5])}e.x=n,e.y=h}return this.lastControl.type="",
i},_closePath:function(){return this.lastControl.type="",["x"]}}),y.Path.nodeType="shape",
y.TextPath=e("dojox.gfx.vml.TextPath",[y.Path,p.TextPath],{constructor:function(e){
e&&e.setAttribute("dojoGfxType","textpath"),this.fontStyle=null,"text"in this||(this.text=t.clone(l.defaultTextPath)),
"fontStyle"in this||(this.fontStyle=t.clone(l.defaultFont))},setText:function(t){
return this.text=l.makeParameters(this.text,"string"==typeof t?{text:t}:t),this._setText(),
this},setFont:function(t){return this.fontStyle="string"==typeof t?l.splitFontString(t):l.makeParameters(l.defaultFont,t),
this._setFont(),this},_setText:function(){this.bbox=null;for(var t=this.rawNode,e=this.text,i=null,r=null,o=t.childNodes,a=0;a<o.length;++a){
var s=o[a].tagName;if("path"==s){if(i=o[a],r)break}else if("textpath"==s&&(r=o[a],
i))break}i||(i=this.rawNode.ownerDocument.createElement("v:path"),t.appendChild(i)),
r||(r=this.rawNode.ownerDocument.createElement("v:textpath"),t.appendChild(r)),i.textPathOk=!0,
r.on=!0;var n=y.text_alignment[e.align];r.style["v-text-align"]=n?n:"left",r.style["text-decoration"]=e.decoration,
r.style["v-rotate-letters"]=e.rotated,r.style["v-text-kern"]=e.kerning,r.string=e.text;
},_setFont:function(){for(var t=this.fontStyle,e=this.rawNode.childNodes,i=0;i<e.length;++i)if("textpath"==e[i].tagName){
e[i].style.font=l.makeFontString(t);break}}}),y.TextPath.nodeType="shape",y.Surface=e("dojox.gfx.vml.Surface",d.Surface,{
constructor:function(){d.Container._init.call(this)},destroy:function(){this.clear(!0),
this.inherited(arguments)},setDimensions:function(t,e){if(this.width=l.normalizedLength(t),
this.height=l.normalizedLength(e),!this.rawNode)return this;var i,r=this.clipNode.style,o=this.rawNode,a=o.style,s=this.bgNode.style,n=this._parent.style;
for(n.width=t,n.height=e,r.width=t,r.height=e,r.clip="rect(0px "+t+"px "+e+"px 0px)",
a.width=t,a.height=e,o.coordsize=t+" "+e,s.width=t,s.height=e,i=0;i<this.children.length;++i)this.children[i]._setDimensions(t,e);
return this},getDimensions:function(){var t=this.rawNode?{width:l.normalizedLength(this.rawNode.style.width),
height:l.normalizedLength(this.rawNode.style.height)}:null;return t.width<=0&&(t.width=this.width),
t.height<=0&&(t.height=this.height),t}}),y.createSurface=function(t,e,i){if(!e&&!i){
var r=n.position(t);e=e||r.w,i=i||r.h}"number"==typeof e&&(e+="px"),"number"==typeof i&&(i+="px");
var a=new y.Surface,h=s.byId(t),d=a.clipNode=h.ownerDocument.createElement("div"),p=a.rawNode=h.ownerDocument.createElement("v:group"),f=d.style,u=p.style;
o("ie")>7&&(u.display="inline-block"),a._parent=h,a._nodes.push(d),h.style.width=e,
h.style.height=i,f.position="absolute",f.width=e,f.height=i,f.clip="rect(0px "+e+" "+i+" 0px)",
u.position="absolute",u.width=e,u.height=i,p.coordsize=("100%"===e?e:parseFloat(e))+" "+("100%"===i?i:parseFloat(i)),
p.coordorigin="0 0";var c=a.bgNode=p.ownerDocument.createElement("v:rect"),x=c.style;
return x.left=x.top=0,x.width=u.width,x.height=u.height,c.filled=c.stroked="f",p.appendChild(c),
d.appendChild(p),h.appendChild(d),a.width=l.normalizedLength(e),a.height=l.normalizedLength(i),
a};var _=function(t){if(this!=t.getParent()){var e=t.getParent();e&&e.remove(t),this.rawNode.appendChild(t.rawNode),
T.add.apply(this,arguments),x(this,function(t){"function"==typeof t.getFont&&(t.setShape(t.getShape()),
t.setFont(t.getFont())),"function"==typeof t.setFill&&(t.setFill(t.getFill()),t.setStroke(t.getStroke()));
})}return this},N=function(t){return this!=t.getParent()&&(this.rawNode.appendChild(t.rawNode),
t.getParent()||(t.setFill(t.getFill()),t.setStroke(t.getStroke())),T.add.apply(this,arguments)),
this},T=d.Container,C={add:a.fixVmlAdd===!0?_:N,remove:function(t,e){return this==t.getParent()&&(this.rawNode==t.rawNode.parentNode&&this.rawNode.removeChild(t.rawNode),
T.remove.apply(this,arguments)),this},clear:function(){for(var t=this.rawNode;t.firstChild!=t.lastChild;)t.firstChild!=this.bgNode&&t.removeChild(t.firstChild),
t.lastChild!=this.bgNode&&t.removeChild(t.lastChild);return T.clear.apply(this,arguments);
},getBoundingBox:T.getBoundingBox,_moveChildToFront:T._moveChildToFront,_moveChildToBack:T._moveChildToBack
},S={createGroup:function(){var t=this.createObject(y.Group,null),e=t.rawNode.ownerDocument.createElement("v:rect");
return e.style.left=e.style.top=0,e.style.width=t.rawNode.style.width,e.style.height=t.rawNode.style.height,
e.filled=e.stroked="f",t.rawNode.appendChild(e),t.bgNode=e,t},createImage:function(t){
if(!this.rawNode)return null;var e=new y.Image,i=this.rawNode.ownerDocument,r=i.createElement("v:rect");
r.stroked="f",r.style.width=this.rawNode.style.width,r.style.height=this.rawNode.style.height;
var o=i.createElement("v:imagedata");return r.appendChild(o),e.setRawNode(r),this.rawNode.appendChild(r),
e.setShape(t),this.add(e),e},createRect:function(t){if(!this.rawNode)return null;var e=new y.Rect,i=this.rawNode.ownerDocument.createElement("v:roundrect");
return o("ie")>7&&(i.style.display="inline-block"),e.setRawNode(i),this.rawNode.appendChild(i),
e.setShape(t),this.add(e),e},createObject:function(t,e){if(!this.rawNode)return null;
var i=new t,r=this.rawNode.ownerDocument.createElement("v:"+t.nodeType);switch(i.setRawNode(r),
this.rawNode.appendChild(r),t){case y.Group:case y.Line:case y.Polyline:case y.Image:
case y.Text:case y.Path:case y.TextPath:this._overrideSize(r)}return i.setShape(e),
this.add(i),i},_overrideSize:function(t){var e=this.rawNode.style,i=e.width,r=e.height;
t.style.width=i,t.style.height=r,t.coordsize=parseInt(i)+" "+parseInt(r)}};return t.extend(y.Group,C),
t.extend(y.Group,d.Creator),t.extend(y.Group,S),t.extend(y.Surface,C),t.extend(y.Surface,d.Creator),
t.extend(y.Surface,S),y.fixTarget=function(t,e){return t.gfxTarget||(t.gfxTarget=t.target.__gfxObject__),
!0},y});