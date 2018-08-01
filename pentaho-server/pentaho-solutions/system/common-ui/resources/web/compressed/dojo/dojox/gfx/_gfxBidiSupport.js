define(["./_base","dojo/_base/lang","dojo/_base/sniff","dojo/dom","dojo/_base/html","dojo/_base/array","./utils","./shape","./path","dojox/string/BidiEngine"],function(t,e,r,i,n,a,s,o,x,u){
function f(e,r){var i=l(r);return i&&t.utils.forEach(e,function(e){(e instanceof t.Surface||e instanceof t.Group)&&(e.textDir=i),
e instanceof t.Text&&e.setShape({textDir:i}),e instanceof t.TextPath&&e.setText({
textDir:i})},e),e}function l(t){var e=["ltr","rtl","auto"];return t&&(t=t.toLowerCase(),
a.indexOf(e,t)<0)?null:t}switch(e.getObject("dojox.gfx._gfxBidiSupport",!0),t.renderer){
case"vml":t.isVml=!0;break;case"svg":t.isSvg=!0,t.svg.useSvgWeb&&(t.isSvgWeb=!0);break;
case"silverlight":t.isSilverlight=!0;break;case"canvas":case"canvasWithEvents":t.isCanvas=!0;
}var c={LRM:"‎",LRE:"‪",PDF:"‬",RLM:"‏",RLE:"‫"},N=new u;e.extend(t.shape.Surface,{
textDir:"",setTextDir:function(t){f(this,t)},getTextDir:function(){return this.textDir;
}}),e.extend(t.Group,{textDir:"",setTextDir:function(t){f(this,t)},getTextDir:function(){
return this.textDir}}),e.extend(t.Text,{textDir:"",formatText:function(e,i){if(i&&e&&e.length>1){
var n="ltr",a=i;if("auto"==a){if(t.isVml)return e;a=N.checkContextual(e)}if(t.isVml)return n=N.checkContextual(e),
a!=n?"rtl"==a?N.hasBidiChar(e)?c.RLM+c.RLM+e:N.bidiTransform(e,"IRNNN","ILNNN"):c.LRM+e:e;
if(t.isSvgWeb)return"rtl"==a?N.bidiTransform(e,"IRNNN","ILNNN"):e;if(t.isSilverlight)return"rtl"==a?N.bidiTransform(e,"IRNNN","VLYNN"):N.bidiTransform(e,"ILNNN","VLYNN");
if(t.isCanvas)return"rtl"==a?c.RLE+e+c.PDF:c.LRE+e+c.PDF;if(t.isSvg)return r("ff")<4?"rtl"==a?N.bidiTransform(e,"IRYNN","VLNNN"):N.bidiTransform(e,"ILYNN","VLNNN"):c.LRM+("rtl"==a?c.RLE:c.LRE)+e+c.PDF;
}return e},bidiPreprocess:function(t){return t}}),e.extend(t.TextPath,{textDir:"",
formatText:function(e,i){if(i&&e&&e.length>1){var n="ltr",a=i;if("auto"==a){if(t.isVml)return e;
a=N.checkContextual(e)}if(t.isVml)return n=N.checkContextual(e),a!=n?"rtl"==a?N.hasBidiChar(e)?c.RLM+c.RLM+e:N.bidiTransform(e,"IRNNN","ILNNN"):c.LRM+e:e;
if(t.isSvgWeb)return"rtl"==a?N.bidiTransform(e,"IRNNN","ILNNN"):e;t.isSvg&&(e=r("opera")||r("ff")>=4?c.LRM+("rtl"==a?c.RLE:c.LRE)+e+c.PDF:"rtl"==a?N.bidiTransform(e,"IRYNN","VLNNN"):N.bidiTransform(e,"ILYNN","VLNNN"));
}return e},bidiPreprocess:function(t){return t&&"string"==typeof t&&(this.origText=t,
t=this.formatText(t,this.textDir)),t}});var h=function(t,e,r,i){var n=t.prototype[e];
t.prototype[e]=function(){var t;r&&(t=r.apply(this,arguments));var e=n.call(this,t);
return i&&(e=i.call(this,e,arguments)),e}},d=function(t){return t&&(t.textDir&&(t.textDir=l(t.textDir)),
t.text&&t.text instanceof Array&&(t.text=t.text.join(","))),!t||void 0==t.text&&!t.textDir||this.textDir==t.textDir&&t.text==this.origText||(this.origText=void 0!=t.text?t.text:this.origText,
t.textDir&&(this.textDir=t.textDir),t.text=this.formatText(this.origText,this.textDir)),
this.bidiPreprocess(t)};h(t.Text,"setShape",d,null),h(t.TextPath,"setText",d,null);
var T=function(t){var r=e.clone(t);return r&&this.origText&&(r.text=this.origText),
r};h(t.Text,"getShape",null,T),h(t.TextPath,"getText",null,T);var v=function(t,e){
var r;return e&&e[0]&&(r=l(e[0])),t.setTextDir(r?r:this.textDir),t};h(t.Surface,"createGroup",null,v),
h(t.Group,"createGroup",null,v);var D=function(t){if(t){var e=t.textDir?l(t.textDir):this.textDir;
e&&(t.textDir=e)}return t};return h(t.Surface,"createText",D,null),h(t.Surface,"createTextPath",D,null),
h(t.Group,"createText",D,null),h(t.Group,"createTextPath",D,null),t.createSurface=function(e,r,a,s){
var o=t[t.renderer].createSurface(e,r,a),x=l(s);return t.isSvgWeb?(o.textDir=x?x:n.style(i.byId(e),"direction"),
o):((t.isVml||t.isSvg||t.isCanvas)&&(o.textDir=x?x:n.style(o.rawNode,"direction")),
t.isSilverlight&&(o.textDir=x?x:n.style(o._nodes[1],"direction")),o)},t});