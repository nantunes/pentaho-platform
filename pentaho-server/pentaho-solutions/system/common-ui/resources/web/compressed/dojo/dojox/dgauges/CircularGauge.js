define(["dojo/_base/declare","dojo/dom-geometry","dojox/gfx","./GaugeBase"],function(e,t,r,i){
return e("dojox.dgauges.CircularGauge",i,{_transformProperties:null,refreshRendering:function(){
if(!(this._widgetBox.w<=0||this._widgetBox.h<=0)){for(var e in this._elementsIndex)this._elementsRenderers[e]=this._elementsIndex[e].refreshRendering();
var t=this._computeBoundingBox(this._gfxGroup),i=(t.x+t.width)/(t.y+t.height),s=this._widgetBox.w,o=this._widgetBox.h,n=this._widgetBox.w/this._widgetBox.h,a=0,h=0,d=0,x=0;
i>n?(x=s,d=x/i,h=(o-d)/2):(d=o,x=d*i,a=(s-x)/2);var g=Math.max(x/(t.x+t.width),d/(t.y+t.height));
this._transformProperties={scale:g,tx:a,ty:h},this._gfxGroup.setTransform([r.matrix.scale(g),r.matrix.translate(a/g,h/g)]);
}},_gaugeToPage:function(e,r){if(this._transformProperties){var i=t.position(this.domNode,!0);
return{x:i.x+e*this._transformProperties.scale+this._transformProperties.tx,y:i.y+r*this._transformProperties.scale+this._transformProperties.ty
}}return null}})});