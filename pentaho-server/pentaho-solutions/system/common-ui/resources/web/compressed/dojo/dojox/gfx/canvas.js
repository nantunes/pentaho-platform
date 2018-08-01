define(["./_base","dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/_base/window","dojo/dom-geometry","dojo/dom","./shape","./path","./arc","./matrix","./decompose","./bezierutils"],function(t,e,s,n,a,h,r,o,l,c,d,u,v){
function f(t,e,s,i,n,a,h,r,o,l){var c,d,u=e.length,v=0;for(l?(d=l.l/n,v=l.i):d=e[0]/n;h>a;)a+d>h&&(c={
l:(a+d-h)*n,i:v},d=h-a),v%2||(t.beginPath(),t.arc(s,i,n,a,a+d,r),o&&t.stroke()),a+=d,
++v,d=e[v%u]/n;return c}function g(t,e,s,i){var n,a=0,h=0,r=0;for(i?(n=i.l,r=i.i):n=e[0];1>h;){
if(h=v.tAtLength(t,n),1==h){var o=v.computeLength(t);a={l:n-o,i:r}}var l=v.splitBezierAtT(t,h);
r%2||s.push(l[0]),t=l[1],++r,n=e[r%e.length]}return a}function y(t,e,s,i){for(var n=[e.last.x,e.last.y].concat(s),a=4===s.length,h=!(t instanceof Array),r=a?"quadraticCurveTo":"bezierCurveTo",o=[],l=g(n,e.canvasDash,o,i),c=0;c<o.length;++c){
var d=o[c];h?(t.moveTo(d[0],d[1]),t[r].apply(t,d.slice(2))):(t.push("moveTo",[d[0],d[1]]),
t.push(r,d.slice(2)))}return l}function _(t,e,s,i,n,a,h){var r,o,l=0,c=0,d=0,u=v.distance(s,i,n,a),f=0,g=e.canvasDash,p=s,y=i,_=!(t instanceof Array);
for(h?(d=h.l,f=h.i):d+=g[0];Math.abs(1-c)>.01;)d>u&&(l={l:d-u,i:f},d=u),c=d/u,r=s+(n-s)*c,
o=i+(a-i)*c,f++%2||(_?(t.moveTo(p,y),t.lineTo(r,o)):(t.push("moveTo",[p,y]),t.push("lineTo",[r,o]))),
p=r,y=o,d+=g[f%g.length];return l}var m=t.canvas={},x=null,T=d.multiplyPoint,C=Math.PI,S=2*C,R=C/2,P=e.extend;
if(a.global.CanvasRenderingContext2D)var b=a.doc.createElement("canvas").getContext("2d"),w="function"==typeof b.setLineDash,k="function"==typeof b.fillText;
var D={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],
dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]
};m.Shape=n("dojox.gfx.canvas.Shape",o.Shape,{_render:function(t){t.save(),this._renderTransform(t),
this._renderClip(t),this._renderShape(t),this._renderFill(t,!0),this._renderStroke(t,!0),
t.restore()},_renderClip:function(t){this.canvasClip&&(this.canvasClip.render(t),
t.clip())},_renderTransform:function(t){if("canvasTransform"in this){var e=this.canvasTransform;
t.translate(e.dx,e.dy),t.rotate(e.angle2),t.scale(e.sx,e.sy),t.rotate(e.angle1)}},
_renderShape:function(t){},_renderFill:function(t,e){if("canvasFill"in this){var s=this.fillStyle;
if("canvasFillImage"in this){var i=s.width,n=s.height,a=this.canvasFillImage.width,h=this.canvasFillImage.height,r=i==a?1:i/a,o=n==h?1:n/h,l=Math.min(r,o),c=(i-l*a)/2,d=(n-l*h)/2;
x.width=i,x.height=n;var u=x.getContext("2d");u.clearRect(0,0,i,n),u.drawImage(this.canvasFillImage,0,0,a,h,c,d,l*a,l*h),
this.canvasFill=t.createPattern(x,"repeat"),delete this.canvasFillImage}t.fillStyle=this.canvasFill,
e&&("pattern"!==s.type||0===s.x&&0===s.y||t.translate(s.x,s.y),t.fill())}else t.fillStyle="rgba(0,0,0,0.0)";
},_renderStroke:function(t,e){var s=this.strokeStyle;s?(t.strokeStyle=s.color.toString(),
t.lineWidth=s.width,t.lineCap=s.cap,"number"==typeof s.join?(t.lineJoin="miter",t.miterLimit=s.join):t.lineJoin=s.join,
this.canvasDash?w?(t.setLineDash(this.canvasDash),e&&t.stroke()):this._renderDashedStroke(t,e):e&&t.stroke()):e||(t.strokeStyle="rgba(0,0,0,0.0)");
},_renderDashedStroke:function(t,e){},getEventSource:function(){return null},on:function(){},
connect:function(){},disconnect:function(){},canvasClip:null,setClip:function(t){
this.inherited(arguments);var e=t?"width"in t?"rect":"cx"in t?"ellipse":"points"in t?"polyline":"d"in t?"path":null:null;
return t&&!e?this:(this.canvasClip=t?I(e,t):null,this.parent&&this.parent._makeDirty(),
this)}});var I=function(t,s){switch(t){case"ellipse":return{canvasEllipse:A({shape:s
}),render:function(t){return m.Ellipse.prototype._renderShape.call(this,t)}};case"rect":
return{shape:e.delegate(s,{r:0}),render:function(t){return m.Rect.prototype._renderShape.call(this,t);
}};case"path":return{canvasPath:F(s),render:function(t){this.canvasPath._renderShape(t);
}};case"polyline":return{canvasPolyline:s.points,render:function(t){return m.Polyline.prototype._renderShape.call(this,t);
}}}return null},F=function(t){var e=new dojox.gfx.canvas.Path;return e.canvasPath=[],
e._setPath(t.d),e},L=function(t,e,s){var i=t.prototype[e];t.prototype[e]=s?function(){
return this.parent&&this.parent._makeDirty(),i.apply(this,arguments),s.call(this),
this}:function(){return this.parent&&this.parent._makeDirty(),i.apply(this,arguments);
}};L(m.Shape,"setTransform",function(){this.matrix?this.canvasTransform=t.decompose(this.matrix):delete this.canvasTransform;
}),L(m.Shape,"setFill",function(){var e,i=this.fillStyle;if(i){if("object"==typeof i&&"type"in i){
var n=this.surface.rawNode.getContext("2d");switch(i.type){case"linear":case"radial":
e="linear"==i.type?n.createLinearGradient(i.x1,i.y1,i.x2,i.y2):n.createRadialGradient(i.cx,i.cy,0,i.cx,i.cy,i.r),
s.forEach(i.colors,function(s){e.addColorStop(s.offset,t.normalizeColor(s.color).toString());
});break;case"pattern":x||(x=document.createElement("canvas"));var a=new Image;this.surface.downloadImage(a,i.src),
this.canvasFillImage=a}}else e=i.toString();this.canvasFill=e}else delete this.canvasFill;
}),L(m.Shape,"setStroke",function(){var t=this.strokeStyle;if(t){var e=this.strokeStyle.style.toLowerCase();
if(e in D&&(e=D[e]),e instanceof Array){e=e.slice(),this.canvasDash=e;var s;for(s=0;s<e.length;++s)e[s]*=t.width;
if("butt"!=t.cap){for(s=0;s<e.length;s+=2)e[s]-=t.width,e[s]<1&&(e[s]=1);for(s=1;s<e.length;s+=2)e[s]+=t.width;
}}else delete this.canvasDash}else delete this.canvasDash;this._needsDash=!w&&!!this.canvasDash;
}),L(m.Shape,"setShape"),m.Group=n("dojox.gfx.canvas.Group",m.Shape,{constructor:function(){
o.Container._init.call(this)},_render:function(t){t.save(),this._renderTransform(t),
this._renderClip(t);for(var e=0;e<this.children.length;++e)this.children[e]._render(t);
t.restore()},destroy:function(){o.Container.clear.call(this,!0),m.Shape.prototype.destroy.apply(this,arguments);
}}),m.Rect=n("dojox.gfx.canvas.Rect",[m.Shape,o.Rect],{_renderShape:function(t){var e=this.shape,s=Math.min(e.r,e.height/2,e.width/2),i=e.x,n=i+e.width,a=e.y,h=a+e.height,r=i+s,o=n-s,l=a+s,c=h-s;
t.beginPath(),t.moveTo(r,a),s?(t.arc(o,l,s,-R,0,!1),t.arc(o,c,s,0,R,!1),t.arc(r,c,s,R,C,!1),
t.arc(r,l,s,C,C+R,!1)):(t.lineTo(o,a),t.lineTo(n,c),t.lineTo(r,h),t.lineTo(i,l)),
t.closePath()},_renderDashedStroke:function(t,e){var s,i=this.shape,n=Math.min(i.r,i.height/2,i.width/2),a=i.x,h=a+i.width,r=i.y,o=r+i.height,l=a+n,c=h-n,d=r+n,u=o-n;
n?(t.beginPath(),s=_(t,this,l,r,c,r),e&&t.stroke(),s=f(t,this.canvasDash,c,d,n,-R,0,!1,e,s),
t.beginPath(),s=_(t,this,h,d,h,u,s),e&&t.stroke(),s=f(t,this.canvasDash,c,u,n,0,R,!1,e,s),
t.beginPath(),s=_(t,this,c,o,l,o,s),e&&t.stroke(),s=f(t,this.canvasDash,l,u,n,R,C,!1,e,s),
t.beginPath(),s=_(t,this,a,u,a,d,s),e&&t.stroke(),f(t,this.canvasDash,l,d,n,C,C+R,!1,e,s)):(t.beginPath(),
s=_(t,this,l,r,c,r),s=_(t,this,c,r,h,u,s),s=_(t,this,h,u,l,o,s),_(t,this,l,o,a,d,s),
e&&t.stroke())}});var j=[];!function(){var t=c.curvePI4;j.push(t.s,t.c1,t.c2,t.e);
for(var e=45;360>e;e+=45){var s=d.rotateg(e);j.push(T(s,t.c1),T(s,t.c2),T(s,t.e));
}}();var A=function(t){var e,s,i,n=[],a=t.shape,h=d.normalize([d.translate(a.cx,a.cy),d.scale(a.rx,a.ry)]);
e=T(h,j[0]),n.push([e.x,e.y]);for(var r=1;r<j.length;r+=3)s=T(h,j[r]),i=T(h,j[r+1]),
e=T(h,j[r+2]),n.push([s.x,s.y,i.x,i.y,e.x,e.y]);if(t._needsDash){var o=[],l=n[0];for(r=1;r<n.length;++r){
var c=[];g(l.concat(n[r]),t.canvasDash,c),l=[n[r][4],n[r][5]],o.push(c)}t._dashedPoints=o;
}return n};m.Ellipse=n("dojox.gfx.canvas.Ellipse",[m.Shape,o.Ellipse],{setShape:function(){
return this.inherited(arguments),this.canvasEllipse=A(this),this},setStroke:function(){
return this.inherited(arguments),w||(this.canvasEllipse=A(this)),this},_renderShape:function(t){
var e,s=this.canvasEllipse;for(t.beginPath(),t.moveTo.apply(t,s[0]),e=1;e<s.length;++e)t.bezierCurveTo.apply(t,s[e]);
t.closePath()},_renderDashedStroke:function(t,e){var s=this._dashedPoints;t.beginPath();
for(var i=0;i<s.length;++i)for(var n=s[i],a=0;a<n.length;++a){var h=n[a];t.moveTo(h[0],h[1]),
t.bezierCurveTo(h[2],h[3],h[4],h[5],h[6],h[7])}e&&t.stroke()}}),m.Circle=n("dojox.gfx.canvas.Circle",[m.Shape,o.Circle],{
_renderShape:function(t){var e=this.shape;t.beginPath(),t.arc(e.cx,e.cy,e.r,0,S,1);
},_renderDashedStroke:function(t,e){var s,n=this.shape,a=0,h=this.canvasDash.length;
for(i=0;S>a;)s=this.canvasDash[i%h]/n.r,i%2||(t.beginPath(),t.arc(n.cx,n.cy,n.r,a,a+s,0),
e&&t.stroke()),a+=s,++i}}),m.Line=n("dojox.gfx.canvas.Line",[m.Shape,o.Line],{_renderShape:function(t){
var e=this.shape;t.beginPath(),t.moveTo(e.x1,e.y1),t.lineTo(e.x2,e.y2)},_renderDashedStroke:function(t,e){
var s=this.shape;t.beginPath(),_(t,this,s.x1,s.y1,s.x2,s.y2),e&&t.stroke()}}),m.Polyline=n("dojox.gfx.canvas.Polyline",[m.Shape,o.Polyline],{
setShape:function(){this.inherited(arguments);var t,e,s,i=this.shape.points,n=i[0];
if(this.bbox=null,this._normalizePoints(),i.length)if("number"==typeof n)t=i;else for(t=[],
s=0;s<i.length;++s)e=i[s],t.push(e.x,e.y);else t=[];return this.canvasPolyline=t,
this},_renderShape:function(t){var e=this.canvasPolyline;if(e.length){t.beginPath(),
t.moveTo(e[0],e[1]);for(var s=2;s<e.length;s+=2)t.lineTo(e[s],e[s+1])}},_renderDashedStroke:function(t,e){
var s=this.canvasPolyline,i=0;t.beginPath();for(var n=0;n<s.length;n+=2)i=_(t,this,s[n],s[n+1],s[n+2],s[n+3],i);
e&&t.stroke()}}),m.Image=n("dojox.gfx.canvas.Image",[m.Shape,o.Image],{setShape:function(){
this.inherited(arguments);var t=new Image;return this.surface.downloadImage(t,this.shape.src),
this.canvasImage=t,this},_renderShape:function(t){var e=this.shape;t.drawImage(this.canvasImage,e.x,e.y,e.width,e.height);
}}),m.Text=n("dojox.gfx.canvas.Text",[m.Shape,o.Text],{_setFont:function(){this.fontStyle?this.canvasFont=t.makeFontString(this.fontStyle):delete this.canvasFont;
},getTextWidth:function(){var t,e=this.shape,s=0;return e.text&&(t=this.surface.rawNode.getContext("2d"),
t.save(),this._renderTransform(t),this._renderFill(t,!1),this._renderStroke(t,!1),
this.canvasFont&&(t.font=this.canvasFont),s=t.measureText(e.text).width,t.restore()),
s},_render:function(t){t.save(),this._renderTransform(t),this._renderFill(t,!1),this._renderStroke(t,!1),
this._renderShape(t),t.restore()},_renderShape:function(t){var e,s=this.shape;s.text&&(e="middle"===s.align?"center":s.align,
t.textAlign=e,this.canvasFont&&(t.font=this.canvasFont),this.canvasFill&&t.fillText(s.text,s.x,s.y),
this.strokeStyle&&(t.beginPath(),t.strokeText(s.text,s.x,s.y),t.closePath()))}}),
L(m.Text,"setFont"),k||m.Text.extend({getTextWidth:function(){return 0},getBoundingBox:function(){
return null},_renderShape:function(){}});var z={M:"_moveToA",m:"_moveToR",L:"_lineToA",
l:"_lineToR",H:"_hLineToA",h:"_hLineToR",V:"_vLineToA",v:"_vLineToR",C:"_curveToA",
c:"_curveToR",S:"_smoothCurveToA",s:"_smoothCurveToR",Q:"_qCurveToA",q:"_qCurveToR",
T:"_qSmoothCurveToA",t:"_qSmoothCurveToR",A:"_arcTo",a:"_arcTo",Z:"_closePath",z:"_closePath"
};m.Path=n("dojox.gfx.canvas.Path",[m.Shape,l.Path],{constructor:function(){this.lastControl={};
},setShape:function(){return this.canvasPath=[],this._dashedPath=[],this.inherited(arguments);
},setStroke:function(){return this.inherited(arguments),w||(this.segmented=!1,this._confirmSegmented()),
this},_setPath:function(){this._dashResidue=null,this.inherited(arguments)},_updateWithSegment:function(t){
var s=e.clone(this.last);this[z[t.action]](this.canvasPath,t.action,t.args,this._needsDash?this._dashedPath:null),
this.last=s,this.inherited(arguments)},_renderShape:function(t){var e=this.canvasPath;
t.beginPath();for(var s=0;s<e.length;s+=2)t[e[s]].apply(t,e[s+1])},_renderDashedStroke:w?function(){}:function(t,e){
var s=this._dashedPath;t.beginPath();for(var i=0;i<s.length;i+=2)t[s[i]].apply(t,s[i+1]);
e&&t.stroke()},_moveToA:function(t,e,s,i){t.push("moveTo",[s[0],s[1]]),i&&i.push("moveTo",[s[0],s[1]]);
for(var n=2;n<s.length;n+=2)t.push("lineTo",[s[n],s[n+1]]),i&&(this._dashResidue=_(i,this,s[n-2],s[n-1],s[n],s[n+1],this._dashResidue));
this.last.x=s[s.length-2],this.last.y=s[s.length-1],this.lastControl={}},_moveToR:function(t,e,s,i){
var n;"x"in this.last?(n=[this.last.x+=s[0],this.last.y+=s[1]],t.push("moveTo",n),
i&&i.push("moveTo",n)):(n=[this.last.x=s[0],this.last.y=s[1]],t.push("moveTo",n),
i&&i.push("moveTo",n));for(var a=2;a<s.length;a+=2)t.push("lineTo",[this.last.x+=s[a],this.last.y+=s[a+1]]),
i&&(this._dashResidue=_(i,this,i[i.length-1][0],i[i.length-1][1],this.last.x,this.last.y,this._dashResidue));
this.lastControl={}},_lineToA:function(t,e,s,i){for(var n=0;n<s.length;n+=2)i&&(this._dashResidue=_(i,this,this.last.x,this.last.y,s[n],s[n+1],this._dashResidue)),
t.push("lineTo",[s[n],s[n+1]]);this.last.x=s[s.length-2],this.last.y=s[s.length-1],
this.lastControl={}},_lineToR:function(t,e,s,i){for(var n=0;n<s.length;n+=2)t.push("lineTo",[this.last.x+=s[n],this.last.y+=s[n+1]]),
i&&(this._dashResidue=_(i,this,i[i.length-1][0],i[i.length-1][1],this.last.x,this.last.y,this._dashResidue));
this.lastControl={}},_hLineToA:function(t,e,s,i){for(var n=0;n<s.length;++n)t.push("lineTo",[s[n],this.last.y]),
i&&(this._dashResidue=_(i,this,i[i.length-1][0],i[i.length-1][1],s[n],this.last.y,this._dashResidue));
this.last.x=s[s.length-1],this.lastControl={}},_hLineToR:function(t,e,s,i){for(var n=0;n<s.length;++n)t.push("lineTo",[this.last.x+=s[n],this.last.y]),
i&&(this._dashResidue=_(i,this,i[i.length-1][0],i[i.length-1][1],this.last.x,this.last.y,this._dashResidue));
this.lastControl={}},_vLineToA:function(t,e,s,i){for(var n=0;n<s.length;++n)t.push("lineTo",[this.last.x,s[n]]),
i&&(this._dashResidue=_(i,this,i[i.length-1][0],i[i.length-1][1],this.last.x,s[n],this._dashResidue));
this.last.y=s[s.length-1],this.lastControl={}},_vLineToR:function(t,e,s,i){for(var n=0;n<s.length;++n)t.push("lineTo",[this.last.x,this.last.y+=s[n]]),
i&&(this._dashResidue=_(i,this,i[i.length-1][0],i[i.length-1][1],this.last.x,this.last.y,this._dashResidue));
this.lastControl={}},_curveToA:function(t,e,s,i){for(var n=0;n<s.length;n+=6)t.push("bezierCurveTo",s.slice(n,n+6)),
i&&(this._dashResidue=y(i,this,t[t.length-1],this._dashResidue));this.last.x=s[s.length-2],
this.last.y=s[s.length-1],this.lastControl.x=s[s.length-4],this.lastControl.y=s[s.length-3],
this.lastControl.type="C"},_curveToR:function(t,e,s,i){for(var n=0;n<s.length;n+=6)t.push("bezierCurveTo",[this.last.x+s[n],this.last.y+s[n+1],this.lastControl.x=this.last.x+s[n+2],this.lastControl.y=this.last.y+s[n+3],this.last.x+s[n+4],this.last.y+s[n+5]]),
i&&(this._dashResidue=y(i,this,t[t.length-1],this._dashResidue)),this.last.x+=s[n+4],
this.last.y+=s[n+5];this.lastControl.type="C"},_smoothCurveToA:function(t,e,s,i){
for(var n=0;n<s.length;n+=4){var a="C"==this.lastControl.type;t.push("bezierCurveTo",[a?2*this.last.x-this.lastControl.x:this.last.x,a?2*this.last.y-this.lastControl.y:this.last.y,s[n],s[n+1],s[n+2],s[n+3]]),
i&&(this._dashResidue=y(i,this,t[t.length-1],this._dashResidue)),this.lastControl.x=s[n],
this.lastControl.y=s[n+1],this.lastControl.type="C"}this.last.x=s[s.length-2],this.last.y=s[s.length-1];
},_smoothCurveToR:function(t,e,s,i){for(var n=0;n<s.length;n+=4){var a="C"==this.lastControl.type;
t.push("bezierCurveTo",[a?2*this.last.x-this.lastControl.x:this.last.x,a?2*this.last.y-this.lastControl.y:this.last.y,this.last.x+s[n],this.last.y+s[n+1],this.last.x+s[n+2],this.last.y+s[n+3]]),
i&&(this._dashResidue=y(i,this,t[t.length-1],this._dashResidue)),this.lastControl.x=this.last.x+s[n],
this.lastControl.y=this.last.y+s[n+1],this.lastControl.type="C",this.last.x+=s[n+2],
this.last.y+=s[n+3]}},_qCurveToA:function(t,e,s,i){for(var n=0;n<s.length;n+=4)t.push("quadraticCurveTo",s.slice(n,n+4));
i&&(this._dashResidue=y(i,this,t[t.length-1],this._dashResidue)),this.last.x=s[s.length-2],
this.last.y=s[s.length-1],this.lastControl.x=s[s.length-4],this.lastControl.y=s[s.length-3],
this.lastControl.type="Q"},_qCurveToR:function(t,e,s,i){for(var n=0;n<s.length;n+=4)t.push("quadraticCurveTo",[this.lastControl.x=this.last.x+s[n],this.lastControl.y=this.last.y+s[n+1],this.last.x+s[n+2],this.last.y+s[n+3]]),
i&&(this._dashResidue=y(i,this,t[t.length-1],this._dashResidue)),this.last.x+=s[n+2],
this.last.y+=s[n+3];this.lastControl.type="Q"},_qSmoothCurveToA:function(t,e,s,i){
for(var n=0;n<s.length;n+=2){var a="Q"==this.lastControl.type;t.push("quadraticCurveTo",[this.lastControl.x=a?2*this.last.x-this.lastControl.x:this.last.x,this.lastControl.y=a?2*this.last.y-this.lastControl.y:this.last.y,s[n],s[n+1]]),
i&&(this._dashResidue=y(i,this,t[t.length-1],this._dashResidue)),this.lastControl.type="Q";
}this.last.x=s[s.length-2],this.last.y=s[s.length-1]},_qSmoothCurveToR:function(t,e,s,i){
for(var n=0;n<s.length;n+=2){var a="Q"==this.lastControl.type;t.push("quadraticCurveTo",[this.lastControl.x=a?2*this.last.x-this.lastControl.x:this.last.x,this.lastControl.y=a?2*this.last.y-this.lastControl.y:this.last.y,this.last.x+s[n],this.last.y+s[n+1]]),
i&&(this._dashResidue=y(i,this,t[t.length-1],this._dashResidue)),this.lastControl.type="Q",
this.last.x+=s[n],this.last.y+=s[n+1]}},_arcTo:function(t,e,i,n){for(var a="a"==e,h=0;h<i.length;h+=7){
var r=i[h+5],o=i[h+6];a&&(r+=this.last.x,o+=this.last.y);var l=c.arcAsBezier(this.last,i[h],i[h+1],i[h+2],i[h+3]?1:0,i[h+4]?1:0,r,o);
s.forEach(l,function(e){t.push("bezierCurveTo",e)}),n&&(this._dashResidue=y(n,this,p,this._dashResidue)),
this.last.x=r,this.last.y=o}this.lastControl={}},_closePath:function(t,e,s,i){t.push("closePath",[]),
i&&(this._dashResidue=_(i,this,this.last.x,this.last.y,i[1][0],i[1][1],this._dashResidue)),
this.lastControl={}}}),s.forEach(["moveTo","lineTo","hLineTo","vLineTo","curveTo","smoothCurveTo","qCurveTo","qSmoothCurveTo","arcTo","closePath"],function(t){
L(m.Path,t)}),m.TextPath=n("dojox.gfx.canvas.TextPath",[m.Shape,l.TextPath],{_renderShape:function(t){
this.shape},_setText:function(){},_setFont:function(){}}),m.Surface=n("dojox.gfx.canvas.Surface",o.Surface,{
constructor:function(){o.Container._init.call(this),this.pendingImageCount=0,this.makeDirty();
},destroy:function(){o.Container.clear.call(this,!0),this.inherited(arguments)},setDimensions:function(e,s){
if(this.width=t.normalizedLength(e),this.height=t.normalizedLength(s),!this.rawNode)return this;
var i=!1;return this.rawNode.width!=this.width&&(this.rawNode.width=this.width,i=!0),
this.rawNode.height!=this.height&&(this.rawNode.height=this.height,i=!0),i&&this.makeDirty(),
this},getDimensions:function(){return this.rawNode?{width:this.rawNode.width,height:this.rawNode.height
}:null},_render:function(t){if(t||!this.pendingImageCount){var e=this.rawNode.getContext("2d");
e.clearRect(0,0,this.rawNode.width,this.rawNode.height),this.render(e),"pendingRender"in this&&(clearTimeout(this.pendingRender),
delete this.pendingRender)}},render:function(t){t.save();for(var e=0;e<this.children.length;++e)this.children[e]._render(t);
t.restore()},makeDirty:function(){this.pendingImagesCount||"pendingRender"in this||this._batch||(this.pendingRender=setTimeout(e.hitch(this,this._render),0));
},downloadImage:function(t,s){var i=e.hitch(this,this.onImageLoad);!this.pendingImageCount++&&"pendingRender"in this&&(clearTimeout(this.pendingRender),
delete this.pendingRender),t.onload=i,t.onerror=i,t.onabort=i,t.src=s},onImageLoad:function(){
--this.pendingImageCount||(this.onImagesLoaded(),this._render())},onImagesLoaded:function(){},
getEventSource:function(){return null},connect:function(){},disconnect:function(){},
on:function(){}}),m.createSurface=function(e,s,i){if(!s&&!i){var n=h.position(e);s=s||n.w,
i=i||n.h}"number"==typeof s&&(s+="px"),"number"==typeof i&&(i+="px");var a=new m.Surface,o=r.byId(e),l=o.ownerDocument.createElement("canvas");
return l.width=t.normalizedLength(s),l.height=t.normalizedLength(i),o.appendChild(l),
a.rawNode=l,a._parent=o,a.surface=a,a};var q=o.Container,E={openBatch:function(){
return++this._batch,this},closeBatch:function(){return this._batch=this._batch>0?--this._batch:0,
this._makeDirty(),this},_makeDirty:function(){this._batch||this.surface.makeDirty();
},add:function(t){return this._makeDirty(),q.add.apply(this,arguments)},remove:function(t,e){
return this._makeDirty(),q.remove.apply(this,arguments)},clear:function(){return this._makeDirty(),
q.clear.apply(this,arguments)},getBoundingBox:q.getBoundingBox,_moveChildToFront:function(t){
return this._makeDirty(),q._moveChildToFront.apply(this,arguments)},_moveChildToBack:function(t){
return this._makeDirty(),q._moveChildToBack.apply(this,arguments)}},N={createObject:function(t,e){
var s=new t;return s.surface=this.surface,s.setShape(e),this.add(s),s}};return P(m.Group,E),
P(m.Group,o.Creator),P(m.Group,N),P(m.Surface,E),P(m.Surface,o.Creator),P(m.Surface,N),
m.fixTarget=function(t,e){return!0},m});