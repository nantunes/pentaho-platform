define(["dojo/_base/declare","dojox/gfx","./BarLineIndicator"],function(t,o,e){return t("dojox.gauges.BarCircleIndicator",[e],{
_getShapes:function(t){var e=this.color?this.color:"black",r=this.strokeColor?this.strokeColor:e,i={
color:r,width:1};this.color.type&&!this.strokeColor&&(i.color=this.color.colors[0].color);
var s=this._gauge.dataY+this.offset+this.length/2,a=this.value;a<this._gauge.min&&(a=this._gauge.min),
a>this._gauge.max&&(a=this._gauge.max);var h=this._gauge._getPosition(a),l=[t.createCircle({
cx:0,cy:s,r:this.length/2}).setFill(e).setStroke(i)];return l[0].setTransform(o.matrix.translate(h,0)),
l}})});