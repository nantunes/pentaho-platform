define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/loader","dojo/_base/xhr","./_base","dojox/xml/DomParser","dojox/html/metrics","./matrix"],function(t,e,n,i,r,o,a,h,s){
var c=function(t){var e;return r.get({url:t,sync:!0,load:function(t){e=t}}),e};return t.getObject("dojox.gfx.VectorText",!0),
t.mixin(o,{vectorFontFitting:{NONE:0,FLOW:1,FIT:2},defaultVectorText:{type:"vectortext",
x:0,y:0,width:null,height:null,text:"",align:"start",decoration:"none",fitting:0,
leading:1.5},defaultVectorFont:{type:"vectorfont",size:"10pt",family:null},_vectorFontCache:{},
_svgFontCache:{},getVectorFont:function(t){return o._vectorFontCache[t]?o._vectorFontCache[t]:new o.VectorFont(t);
}}),e("dojox.gfx.VectorFont",null,{_entityRe:/&(quot|apos|lt|gt|amp|#x[^;]+|#\d+);/g,
_decodeEntitySequence:function(t){if(t.match(this._entityRe)){for(var e,n={amp:"&",
apos:"'",quot:'"',lt:"<",gt:">"},i="";null!==(e=this._entityRe.exec(t));)i+="x"==e[1].charAt(1)?String.fromCharCode(parseInt(e[1].slice(2),16)):isNaN(parseInt(e[1].slice(1),10))?n[e[1]]||"":String.fromCharCode(parseInt(e[1].slice(1),10));
return i}},_parse:function(e,i){var r=o._svgFontCache[i]||a.parse(e),h=r.documentElement.byName("font")[0],s=r.documentElement.byName("font-face")[0],c=parseFloat(s.getAttribute("units-per-em")||1e3,10),g={
x:parseFloat(h.getAttribute("horiz-adv-x"),10),y:parseFloat(h.getAttribute("vert-adv-y")||0,10)
};g.y||(g.y=c);var u={horiz:{x:parseFloat(h.getAttribute("horiz-origin-x")||0,10),
y:parseFloat(h.getAttribute("horiz-origin-y")||0,10)},vert:{x:parseFloat(h.getAttribute("vert-origin-x")||0,10),
y:parseFloat(h.getAttribute("vert-origin-y")||0,10)}},d=s.getAttribute("font-family"),l=s.getAttribute("font-style")||"all",f=s.getAttribute("font-variant")||"normal",v=s.getAttribute("font-weight")||"all",x=s.getAttribute("font-stretch")||"normal",m=s.getAttribute("unicode-range")||"U+0-10FFFF",_=(s.getAttribute("panose-1")||"0 0 0 0 0 0 0 0 0 0",
s.getAttribute("cap-height"),parseFloat(s.getAttribute("ascent")||c-u.vert.y,10)),p=parseFloat(s.getAttribute("descent")||u.vert.y,10),F={},b=d;
if(s.byName("font-face-name")[0]&&(b=s.byName("font-face-name")[0].getAttribute("name")),
!o._vectorFontCache[b]){n.forEach(["alphabetic","ideographic","mathematical","hanging"],function(t){
var e=s.getAttribute(t);null!==e&&(F[t]=parseFloat(e,10))});var y=parseFloat(r.documentElement.byName("missing-glyph")[0].getAttribute("horiz-adv-x")||g.x,10),A={},w={},C=r.documentElement.byName("glyph");
n.forEach(C,function(t){var e=t.getAttribute("unicode"),n=t.getAttribute("glyph-name"),i=parseFloat(t.getAttribute("horiz-adv-x")||g.x,10),r=t.getAttribute("d");
e.match(this._entityRe)&&(e=this._decodeEntitySequence(e));var o={code:e,name:n,xAdvance:i,
path:r};A[e]=o,w[n]=o},this);var k=r.documentElement.byName("hkern");n.forEach(k,function(t,e){
var n,i=-parseInt(t.getAttribute("k"),10),r=t.getAttribute("u1"),o=t.getAttribute("g1"),a=t.getAttribute("u2"),h=t.getAttribute("g2");
r?(r=this._decodeEntitySequence(r),A[r]&&(n=A[r])):w[o]&&(n=w[o]),n&&(n.kern||(n.kern={}),
a?(a=this._decodeEntitySequence(a),n.kern[a]={x:i}):w[h]&&(n.kern[w[h].code]={x:i
}))},this),t.mixin(this,{family:d,name:b,style:l,variant:f,weight:v,stretch:x,range:m,
viewbox:{width:c,height:c},origin:u,advance:t.mixin(g,{missing:{x:y,y:y}}),ascent:_,
descent:p,baseline:F,glyphs:A}),o._vectorFontCache[b]=this,o._vectorFontCache[i]=this,
b==d||o._vectorFontCache[d]||(o._vectorFontCache[d]=this),o._svgFontCache[i]||(o._svgFontCache[i]=r);
}},_clean:function(){var t=this.name,e=this.family;return n.forEach(["family","name","style","variant","weight","stretch","range","viewbox","origin","advance","ascent","descent","baseline","glyphs"],function(t){
try{delete this[t]}catch(e){}},this),o._vectorFontCache[t]&&delete o._vectorFontCache[t],
o._vectorFontCache[e]&&delete o._vectorFontCache[e],this},constructor:function(t){
this._defaultLeading=1.5,void 0!==t&&this.load(t)},load:function(t){return this.onLoadBegin(t.toString()),
this._parse(o._svgFontCache[t.toString()]||c(t.toString()),t.toString()),this.onLoad(this),
this},initialized:function(){return null!==this.glyphs},_round:function(t){return Math.round(1e3*t)/1e3;
},_leading:function(t){return this.viewbox.height*(t||this._defaultLeading)},_normalize:function(t){
return t.replace(/\s+/g,String.fromCharCode(32))},_getWidth:function(t){var e=0,i=0,r=null;
return n.forEach(t,function(n,o){i=n.xAdvance,t[o]&&n.kern&&n.kern[t[o].code]&&(i+=n.kern[t[o].code].x),
e+=i,r=n}),r&&" "==r.code&&(e-=r.xAdvance),this._round(e)},_getLongestLine:function(t){
var e=0,i=0;return n.forEach(t,function(t,n){var r=Math.max(e,this._getWidth(t));r>e&&(e=r,
i=n)},this),{width:e,index:i,line:t[i]}},_trim:function(e){var i=function(t){t.length&&(" "==t[t.length-1].code&&t.splice(t.length-1,1),
t.length&&" "==t[0].code&&t.splice(0,1))};return t.isArray(e[0])?n.forEach(e,i):i(e),
e},_split:function(t,e){for(var n=this._getWidth(t),i=Math.floor(n/e),r=[],o=0,a=[],h=!1,s=0,c=t.length;c>s;s++){
if(" "==t[s].code&&(h=!0),o+=t[s].xAdvance,c>s+1&&t[s].kern&&t[s].kern[t[s+1].code]&&(o+=t[s].kern[t[s+1].code].x),
o>=i){for(var g=t[s];h&&" "!=g.code&&s>=0;)g=a.pop(),s--;r.push(a),a=[],o=0,h=!1}
a.push(t[s])}return a.length&&r.push(a),this._trim(r)},_getSizeFactor:function(t){
t+="";var e=h.getCachedFontMeasurements(),n=this.viewbox.height,i=e["1em"],r=parseFloat(t,10);
return t.indexOf("em")>-1?this._round(e["1em"]*r/n):t.indexOf("ex")>-1?this._round(e["1ex"]*r/n):t.indexOf("pt")>-1?this._round(e["12pt"]/12*r/n):t.indexOf("px")>-1?this._round(e["16px"]/16*r/n):t.indexOf("%")>-1?this._round(e["1em"]*(r/100)/n):(i=e[t]||e.medium,
this._round(i/n))},_getFitFactor:function(t,e,n,i){if(n){var r=this._getLongestLine(t).width,o=t.length*this.viewbox.height*i-(this.viewbox.height*i-this.viewbox.height);
return this._round(Math.min(e/r,n/o))}return this._round(e/this._getWidth(t))},_getBestFit:function(t,e,n,i){
for(var r=32,o=0,a=r;r>0;){var h=this._getFitFactor(this._split(t,r),e,n,i);h>o&&(o=h,
a=r),r--}return{scale:o,lines:this._split(t,a)}},_getBestFlow:function(t,e,n){for(var i=[],r=0,o=[],a=!1,h=0,s=t.length;s>h;h++){
" "==t[h].code&&(a=!0);var c=t[h].xAdvance;if(s>h+1&&t[h].kern&&t[h].kern[t[h+1].code]&&(c+=t[h].kern[t[h+1].code].x),
r+=n*c,r>=e){for(var g=t[h];a&&" "!=g.code&&h>=0;)g=o.pop(),h--;i.push(o),o=[],r=0,
a=!1}o.push(t[h])}return o.length&&i.push(o),this._trim(i)},getWidth:function(t,e){
return this._getWidth(n.map(this._normalize(t).split(""),function(t){return this.glyphs[t]||{
xAdvance:this.advance.missing.x}},this))*(e||1)},getLineHeight:function(t){return this.viewbox.height*(t||1);
},getCenterline:function(t){return(t||1)*(this.viewbox.height/2)},getBaseline:function(t){
return(t||1)*(this.viewbox.height+this.descent)},draw:function(t,e,i,r,a){if(!this.initialized())throw new Error("dojox.gfx.VectorFont.draw(): we have not been initialized yet.");
var h=t.createGroup();(e.x||e.y)&&t.applyTransform({dx:e.x||0,dy:e.y||0});var c=n.map(this._normalize(e.text).split(""),function(t){
return this.glyphs[t]||{path:null,xAdvance:this.advance.missing.x}},this),g=i.size,u=e.fitting,d=e.width,l=e.height,f=e.align,v=e.leading||this._defaultLeading;
u&&((u!=o.vectorFontFitting.FLOW||d)&&(u!=o.vectorFontFitting.FIT||d&&l)||(u=o.vectorFontFitting.NONE));
var x,m;switch(u){case o.vectorFontFitting.FIT:var _=this._getBestFit(c,d,l,v);m=_.scale,
x=_.lines;break;case o.vectorFontFitting.FLOW:m=this._getSizeFactor(g),x=this._getBestFlow(c,d,m);
break;default:m=this._getSizeFactor(g),x=[c]}x=n.filter(x,function(t){return t.length>0;
});for(var p=0,F=this._getLongestLine(x).width,b=0,y=x.length;y>b;b++){for(var A=0,w=x[b],C=this._getWidth(w),k=h.createGroup(),E=0;E<w.length;E++){
var z=w[E];if(null!==z.path){var L=k.createPath(z.path).setFill(r);a&&L.setStroke(a),
L.setTransform([s.flipY,s.translate(A,-this.viewbox.height-this.descent)])}A+=z.xAdvance,
E+1<w.length&&z.kern&&z.kern[w[E+1].code]&&(A+=z.kern[w[E+1].code].x)}var S=0;"middle"==f?S=F/2-C/2:"end"==f&&(S=F-C),
k.setTransform({dx:S,dy:p}),p+=this.viewbox.height*v}return h.setTransform(s.scale(m)),
h},onLoadBegin:function(t){},onLoad:function(t){}})});