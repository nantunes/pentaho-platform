define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/sniff","dojo/_base/array","dojo/on","dojox/gfx","./IndicatorBase"],function(t,e,i,n,a,r,o){
return e("dojox.dgauges.TextIndicator",o,{font:null,x:0,y:0,align:"middle",color:"black",
indicator:null,labelFunc:null,constructor:function(){this.addInvalidatingProperties(["indicator"]);
var e=["x","y","font","align","color","labelFunc"];n.forEach(e,t.hitch(this,function(t){
this.watch(t,this._resetText)})),this.watch("indicator",t.hitch(this,this._indicatorChanged));
},postscript:function(t){this.inherited(arguments),t&&t.indicator&&this._indicatorChanged("indicator",null,t.indicator);
},_resetText:function(){this._textCreated=!1,this.invalidateRendering()},_valueWatcher:null,
_indicatorChanged:function(e,i,n){this._valueWatcher&&this._valueWatcher.unwatch(),
this._valueWatcher=n.watch("value",t.hitch(this,this.refreshRendering))},_getFont:function(){
var t=this.font;return!t&&this._gauge&&(t=this._gauge.font),t||(t=r.defaultFont),
t},_textCreated:!1,_textInstance:null,_createText:function(t,e,i,n,a,r,o){var h=t.createText({
x:a,y:r,text:n,align:o}).setFont(e).setFill(i);return h},refreshRendering:function(){
if(null!=this._gfxGroup){var t;t=this.indicator?this.indicator.value:this.value,this.labelFunc&&(t=this.labelFunc(t));
var e=i("iphone");if(!this._textCreated||void 0!=e&&5>e){this._gfxGroup.clear();var n=this._getFont();
this._textInstance=this._createText(this._gfxGroup,n,n.color?n.color:this.color,"",this.x,this.y,this.align),
this._textCreated=!0}return this._textInstance.setShape({text:t}),this._textInstance;
}}})});