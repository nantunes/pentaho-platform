define(["./_base","dojo/_base/lang","dojo/_base/declare","./matrix","./shape"],function(t,s,e,i,h){
var a=e("dojox.gfx.path.Path",h.Shape,{constructor:function(e){this.shape=s.clone(t.defaultPath),
this.segments=[],this.tbbox=null,this.absolute=!0,this.last={},this.rawNode=e,this.segmented=!1;
},setAbsoluteMode:function(t){return this._confirmSegmented(),this.absolute="string"==typeof t?"absolute"==t:t,
this},getAbsoluteMode:function(){return this._confirmSegmented(),this.absolute},getBoundingBox:function(){
return this._confirmSegmented(),this.bbox&&"l"in this.bbox?{x:this.bbox.l,y:this.bbox.t,
width:this.bbox.r-this.bbox.l,height:this.bbox.b-this.bbox.t}:null},_getRealBBox:function(){
if(this._confirmSegmented(),this.tbbox)return this.tbbox;var t=this.bbox,s=this._getRealMatrix();
this.bbox=null;for(var e=0,i=this.segments.length;i>e;++e)this._updateWithSegment(this.segments[e],s);
var h=this.bbox;return this.bbox=t,this.tbbox=h?[{x:h.l,y:h.t},{x:h.r,y:h.t},{x:h.r,
y:h.b},{x:h.l,y:h.b}]:null,this.tbbox},getLastPosition:function(){return this._confirmSegmented(),
"x"in this.last?this.last:null},_applyTransform:function(){return this.tbbox=null,
this.inherited(arguments)},_updateBBox:function(t,s,e){if(e){var h=i.multiplyPoint(e,t,s);
t=h.x,s=h.y}this.bbox&&"l"in this.bbox?(this.bbox.l>t&&(this.bbox.l=t),this.bbox.r<t&&(this.bbox.r=t),
this.bbox.t>s&&(this.bbox.t=s),this.bbox.b<s&&(this.bbox.b=s)):this.bbox={l:t,b:s,
r:t,t:s}},_updateWithSegment:function(s,e){var i,h=s.args,a=h.length;switch(s.action){
case"M":case"L":case"C":case"S":case"Q":case"T":for(i=0;a>i;i+=2)this._updateBBox(h[i],h[i+1],e);
this.last.x=h[a-2],this.last.y=h[a-1],this.absolute=!0;break;case"H":for(i=0;a>i;++i)this._updateBBox(h[i],this.last.y,e);
this.last.x=h[a-1],this.absolute=!0;break;case"V":for(i=0;a>i;++i)this._updateBBox(this.last.x,h[i],e);
this.last.y=h[a-1],this.absolute=!0;break;case"m":var n=0;"x"in this.last||(this._updateBBox(this.last.x=h[0],this.last.y=h[1],e),
n=2);for(i=n;a>i;i+=2)this._updateBBox(this.last.x+=h[i],this.last.y+=h[i+1],e);this.absolute=!1;
break;case"l":case"t":for(i=0;a>i;i+=2)this._updateBBox(this.last.x+=h[i],this.last.y+=h[i+1],e);
this.absolute=!1;break;case"h":for(i=0;a>i;++i)this._updateBBox(this.last.x+=h[i],this.last.y,e);
this.absolute=!1;break;case"v":for(i=0;a>i;++i)this._updateBBox(this.last.x,this.last.y+=h[i],e);
this.absolute=!1;break;case"c":for(i=0;a>i;i+=6)this._updateBBox(this.last.x+h[i],this.last.y+h[i+1],e),
this._updateBBox(this.last.x+h[i+2],this.last.y+h[i+3],e),this._updateBBox(this.last.x+=h[i+4],this.last.y+=h[i+5],e);
this.absolute=!1;break;case"s":case"q":for(i=0;a>i;i+=4)this._updateBBox(this.last.x+h[i],this.last.y+h[i+1],e),
this._updateBBox(this.last.x+=h[i+2],this.last.y+=h[i+3],e);this.absolute=!1;break;
case"A":for(i=0;a>i;i+=7)this._updateBBox(h[i+5],h[i+6],e);this.last.x=h[a-2],this.last.y=h[a-1],
this.absolute=!0;break;case"a":for(i=0;a>i;i+=7)this._updateBBox(this.last.x+=h[i+5],this.last.y+=h[i+6],e);
this.absolute=!1}var o=[s.action];for(i=0;a>i;++i)o.push(t.formatNumber(h[i],!0));
"string"==typeof this.shape.path?this.shape.path+=o.join(""):Array.prototype.push.apply(this.shape.path,o);
},_validSegments:{m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},_pushSegment:function(t,s){
this.tbbox=null;var e,i=this._validSegments[t.toLowerCase()];"number"==typeof i&&(i?s.length>=i&&(e={
action:t,args:s.slice(0,s.length-s.length%i)},this.segments.push(e),this._updateWithSegment(e)):(e={
action:t,args:[]},this.segments.push(e),this._updateWithSegment(e)))},_collectArgs:function(t,s){
for(var e=0;e<s.length;++e){var i=s[e];"boolean"==typeof i?t.push(i?1:0):"number"==typeof i?t.push(i):i instanceof Array?this._collectArgs(t,i):"x"in i&&"y"in i&&t.push(i.x,i.y);
}},moveTo:function(){this._confirmSegmented();var t=[];return this._collectArgs(t,arguments),
this._pushSegment(this.absolute?"M":"m",t),this},lineTo:function(){this._confirmSegmented();
var t=[];return this._collectArgs(t,arguments),this._pushSegment(this.absolute?"L":"l",t),
this},hLineTo:function(){this._confirmSegmented();var t=[];return this._collectArgs(t,arguments),
this._pushSegment(this.absolute?"H":"h",t),this},vLineTo:function(){this._confirmSegmented();
var t=[];return this._collectArgs(t,arguments),this._pushSegment(this.absolute?"V":"v",t),
this},curveTo:function(){this._confirmSegmented();var t=[];return this._collectArgs(t,arguments),
this._pushSegment(this.absolute?"C":"c",t),this},smoothCurveTo:function(){this._confirmSegmented();
var t=[];return this._collectArgs(t,arguments),this._pushSegment(this.absolute?"S":"s",t),
this},qCurveTo:function(){this._confirmSegmented();var t=[];return this._collectArgs(t,arguments),
this._pushSegment(this.absolute?"Q":"q",t),this},qSmoothCurveTo:function(){this._confirmSegmented();
var t=[];return this._collectArgs(t,arguments),this._pushSegment(this.absolute?"T":"t",t),
this},arcTo:function(){this._confirmSegmented();var t=[];return this._collectArgs(t,arguments),
this._pushSegment(this.absolute?"A":"a",t),this},closePath:function(){return this._confirmSegmented(),
this._pushSegment("Z",[]),this},_confirmSegmented:function(){if(!this.segmented){
var t=this.shape.path;this.shape.path=[],this._setPath(t),this.shape.path=this.shape.path.join(""),
this.segmented=!0}},_setPath:function(e){var i=s.isArray(e)?e:e.match(t.pathSvgRegExp);
if(this.segments=[],this.absolute=!0,this.bbox={},this.last={},i){for(var h="",a=[],n=i.length,o=0;n>o;++o){
var r=i[o],u=parseFloat(r);isNaN(u)?(h&&this._pushSegment(h,a),a=[],h=r):a.push(u);
}this._pushSegment(h,a)}},setShape:function(s){return this.inherited(arguments,["string"==typeof s?{
path:s}:s]),this.segmented=!1,this.segments=[],t.lazyPathSegmentation||this._confirmSegmented(),
this},_2PI:2*Math.PI}),n=e("dojox.gfx.path.TextPath",a,{constructor:function(e){"text"in this||(this.text=s.clone(t.defaultTextPath)),
"fontStyle"in this||(this.fontStyle=s.clone(t.defaultFont))},getText:function(){return this.text;
},setText:function(s){return this.text=t.makeParameters(this.text,"string"==typeof s?{
text:s}:s),this._setText(),this},getFont:function(){return this.fontStyle},setFont:function(s){
return this.fontStyle="string"==typeof s?t.splitFontString(s):t.makeParameters(t.defaultFont,s),
this._setFont(),this}});return t.path={Path:a,TextPath:n}});