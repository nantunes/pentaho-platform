define(["dojo/_base/declare","dojo/_base/fx","dojo/_base/connect","dojo/_base/lang","dojox/gfx","./_Indicator"],function(t,i,e,s,h,a){
return t("dojox.gauges.BarLineIndicator",[a],{width:1,_getShapes:function(t){if(!this._gauge)return null;
var i=this.value;i<this._gauge.min&&(i=this._gauge.min),i>this._gauge.max&&(i=this._gauge.max);
var e=this._gauge._getPosition(i),s=[];return this.width>1?(s[0]=t.createRect({x:0,
y:this._gauge.dataY+this.offset,width:this.width,height:this.length}),s[0].setStroke({
color:this.color}),s[0].setFill(this.color),s[0].setTransform(h.matrix.translate(e,0))):(s[0]=t.createLine({
x1:0,y1:this._gauge.dataY+this.offset,x2:0,y2:this._gauge.dataY+this.offset+this.length
}),s[0].setStroke({color:this.color}),s[0].setTransform(h.matrix.translate(e,0))),
s},draw:function(t,i){if(this.shape)this._move(i);else{this.shape&&(this.shape.parent.remove(this.shape),
this.shape=null),this.text&&(this.text.parent.remove(this.text),this.text=null),this.color=this.color||"#000000",
this.length=this.length||this._gauge.dataHeight,this.width=this.width||3,this.offset=this.offset||0,
this.highlight=this.highlight||"#4D4D4D",this.highlight2=this.highlight2||"#A3A3A3";
var e=this._getShapes(t,this._gauge,this);if(e.length>1){this.shape=t.createGroup();
for(var s=0;s<e.length;s++)this.shape.add(e[s])}else this.shape=e[0];if(this.label){
var a=this.value;a<this._gauge.min&&(a=this._gauge.min),a>this._gauge.max&&(a=this._gauge.max);
var o=this._gauge._getPosition(a);if("inside"==this.direction){var n=this.font?this.font:h.defaultFont,g=n.size,r=h.normalizedLength(g);
this.text=this._gauge.drawText(t,""+this.label,o,this._gauge.dataY+this.offset+this.length+5+r,"middle",this.color,this.font);
}else this.text=this._gauge.drawText(t,""+this.label,o,this._gauge.dataY+this.offset-5,"middle",this.color,this.font);
}this.shape.connect("onmouseover",this,this.handleMouseOver),this.shape.connect("onmouseout",this,this.handleMouseOut),
this.shape.connect("onmousedown",this,this.handleMouseDown),this.shape.connect("touchstart",this,this.handleTouchStart),
this.currentValue=this.value}},_move:function(t){var a=this.value;a<this._gauge.min&&(a=this._gauge.min),
a>this._gauge.max&&(a=this._gauge.max);var o=this._gauge._getPosition(this.currentValue);
if(this.currentValue=a,a=this._gauge._getPosition(a),t||o==a)this.shape.setTransform(h.matrix.translate(a,0));else{
var n=new i.Animation({curve:[o,a],duration:this.duration,easing:this.easing});e.connect(n,"onAnimate",s.hitch(this,function(t){
this.shape&&this.shape.setTransform(h.matrix.translate(t,0))})),n.play()}}})});