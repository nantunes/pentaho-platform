define(["dojo/_base/declare","./AnalogIndicatorBase"],function(e,t){return e("dojox.gauges.AnalogLineIndicator",[t],{
_getShapes:function(e){var t=this.direction,i=this.length;return"inside"==t&&(i=-i),
[e.createLine({x1:0,y1:-this.offset,x2:0,y2:-i-this.offset}).setStroke({color:this.color,
width:this.width})]}})});