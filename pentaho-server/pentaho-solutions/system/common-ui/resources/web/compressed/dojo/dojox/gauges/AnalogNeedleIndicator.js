define(["dojo/_base/declare","./AnalogIndicatorBase"],function(t,o){return t("dojox.gauges.AnalogNeedleIndicator",[o],{
_getShapes:function(t){if(!this._gauge)return null;var o=Math.floor(this.width/2),e=[],r=this.color?this.color:"black",s=this.strokeColor?this.strokeColor:r,i=this.strokeWidth?this.strokeWidth:1,l={
color:s,width:i};r.type&&!this.strokeColor&&(l.color=r.colors[0].color);var h=Math.sqrt(2)*o;
return e[0]=t.createPath().setStroke(l).setFill(r).moveTo(h,-h).arcTo(2*o,2*o,0,0,0,-h,-h).lineTo(0,-this.length).closePath(),
e[1]=t.createCircle({cx:0,cy:0,r:this.width}).setStroke(l).setFill(r),e}})});