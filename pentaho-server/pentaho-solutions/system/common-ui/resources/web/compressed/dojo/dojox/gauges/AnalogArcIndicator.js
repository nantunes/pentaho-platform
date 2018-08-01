define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/fx","./AnalogIndicatorBase"],function(t,s,e,h,i){
return t("dojox.gauges.AnalogArcIndicator",[i],{_createArc:function(t){if(this.shape){
var s=this._gauge._mod360(this._gauge.startAngle),e=this._gauge._getRadians(this._gauge._getAngle(t)),h=this._gauge._getRadians(s);
if("cclockwise"==this._gauge.orientation){var i=e;e=h,h=i}var a,o=0;a=e>=h?e-h:2*Math.PI+e-h,
a>Math.PI&&(o=1);var c=Math.cos(e),n=Math.sin(e),u=Math.cos(h),r=Math.sin(h),g=this.offset+this.width,l=["M"];
l.push(this._gauge.cx+this.offset*r),l.push(this._gauge.cy-this.offset*u),l.push("A",this.offset,this.offset,0,o,1),
l.push(this._gauge.cx+this.offset*n),l.push(this._gauge.cy-this.offset*c),l.push("L"),
l.push(this._gauge.cx+g*n),l.push(this._gauge.cy-g*c),l.push("A",g,g,0,o,0),l.push(this._gauge.cx+g*r),
l.push(this._gauge.cy-g*u),l.push("z"),this.shape.setShape(l.join(" ")),this.currentValue=t;
}},draw:function(t,i){var a=this.value;if(a<this._gauge.min&&(a=this._gauge.min),
a>this._gauge.max&&(a=this._gauge.max),this.shape)if(i)this._createArc(a);else{var o=new h.Animation({
curve:[this.currentValue,a],duration:this.duration,easing:this.easing});e.connect(o,"onAnimate",s.hitch(this,this._createArc)),
o.play()}else{var c=this.color?this.color:"black",n=this.strokeColor?this.strokeColor:c,u={
color:n,width:1};this.color.type&&!this.strokeColor&&(u.color=this.color.colors[0].color),
this.shape=t.createPath().setStroke(u).setFill(c),this._createArc(a),this.shape.connect("onmouseover",this,this.handleMouseOver),
this.shape.connect("onmouseout",this,this.handleMouseOut),this.shape.connect("onmousedown",this,this.handleMouseDown),
this.shape.connect("touchstart",this,this.handleTouchStart)}}})});