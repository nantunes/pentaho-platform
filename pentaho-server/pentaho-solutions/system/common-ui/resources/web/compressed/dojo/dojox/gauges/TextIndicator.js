define(["dojo/_base/declare","./_Indicator"],function(i,t){return i("dojox.gauges.TextIndicator",[t],{
x:0,y:0,align:"middle",fixedPrecision:!0,precision:0,draw:function(i,t){var e=this.value;
e<this._gauge.min&&(e=this._gauge.min),e>this._gauge.max&&(e=this._gauge.max);var s,a=this._gauge?this._gauge._getNumberModule():null;
s=a?this.fixedPrecision?a.format(e,{places:this.precision}):a.format(e):this.fixedPrecision?e.toFixed(this.precision):e.toString();
var h=this.x?this.x:0,n=this.y?this.y:0,o=this.align?this.align:"middle";this.shape?this.shape.setShape({
x:h,y:n,text:s,align:o}):this.shape=i.createText({x:h,y:n,text:s,align:o}),this.shape.setFill(this.color),
this.font&&this.shape.setFont(this.font)}})});