define(["dojox/main","dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/_base/array","dojo/sniff","dojo/dom","dojo/dom-construct","dojox/gfx","dojox/gfx/_gfxBidiSupport","../axis2d/common","dojox/string/BidiEngine","dojox/lang/functional","dojo/dom-attr","./_bidiutils"],function(t,i,e,r,s,n,o,h,d,a,l,c,u,f,x){
function g(t){return/^(ltr|rtl|auto)$/.test(t)?t:null}var m=new c;e.getObject("charting",!0,t);
return i(null,{textDir:"",dir:"",isMirrored:!1,getTextDir:function(t){var i="auto"==this.textDir?m.checkContextual(t):this.textDir;
return i||(i=r.get(this.node,"direction")),i},postscript:function(t,i){var e=i&&i.textDir?g(i.textDir):"";
e=e?e:r.get(this.node,"direction"),this.textDir=e,this.surface.textDir=e,this.htmlElementsRegistry=[],
this.truncatedLabelsRegistry=[];var s="ltr";f.has(t,"direction")&&(s=f.get(t,"direction")),
this.setDir(i&&i.dir?i.dir:s)},setTextDir:function(t,i){if(t==this.textDir)return this;
if(null!=g(t)){this.textDir=t,this.surface.setTextDir(t),this.truncatedLabelsRegistry&&"auto"==t&&s.forEach(this.truncatedLabelsRegistry,function(t){
var i=this.getTextDir(t.label);t.element.textDir!=i&&t.element.setShape({textDir:i
})},this);var e=u.keys(this.axes);if(e.length>0){if(s.forEach(e,function(t,i,e){var r=this.axes[t];
r.htmlElements[0]&&(r.dirty=!0,r.render(this.dim,this.offsets))},this),this.title){
var r="canvas"==d.renderer,o=r||!n("ie")&&!n("opera")?"html":"gfx",a=d.normalizedLength(d.splitFontString(this.titleFont).size);
h.destroy(this.chartTitle),this.chartTitle=null,this.chartTitle=l.createText[o](this,this.surface,this.dim.width/2,"top"==this.titlePos?a+this.margins.t:this.dim.height-this.margins.b,"middle",this.title,this.titleFont,this.titleFontColor);
}}else s.forEach(this.htmlElementsRegistry,function(i,e,r){var s="auto"==t?this.getTextDir(i[4]):t;
i[0].children[0]&&i[0].children[0].dir!=s&&(h.destroy(i[0].children[0]),i[0].children[0]=l.createText.html(this,this.surface,i[1],i[2],i[3],i[4],i[5],i[6]).children[0]);
},this)}return this},setDir:function(t){return("rtl"==t||"ltr"==t)&&(this.dir!=t&&(this.isMirrored=!0,
this.dirty=!0),this.dir=t),this},isRightToLeft:function(){return"rtl"==this.dir},
applyMirroring:function(t,i,e){return x.reverseMatrix(t,i,e,"rtl"==this.dir),r.set(this.node,"direction","ltr"),
this},formatTruncatedLabel:function(t,i,e){this.truncateBidi(t,i,e)},truncateBidi:function(t,i,e){
"gfx"==e&&(this.truncatedLabelsRegistry.push({element:t,label:i}),"auto"==this.textDir&&t.setShape({
textDir:this.getTextDir(i)})),"html"==e&&"auto"==this.textDir&&(t.children[0].dir=this.getTextDir(i));
},render:function(){return this.inherited(arguments),this.isMirrored=!1,this},_resetLeftBottom:function(t){
t.vertical&&this.isMirrored&&(t.opt.leftBottom=!t.opt.leftBottom)}})});