define(["dojo/_base/declare","dojo/_base/fx","dojo/_base/connect","dojo/_base/lang","./BarLineIndicator"],function(t,e,i,a,h){
return t("dojox.gauges.BarIndicator",[h],{_getShapes:function(t){if(!this._gauge)return null;
var e=this.value;e<this._gauge.min&&(e=this._gauge.min),e>this._gauge.max&&(e=this._gauge.max);
var i=this._gauge._getPosition(e);i==this.dataX&&(i=this.dataX+1);var a=this._gauge.dataY+Math.floor((this._gauge.dataHeight-this.width)/2)+this.offset,h=[];
return h[0]=t.createRect({x:this._gauge.dataX,y:a,width:i-this._gauge.dataX,height:this.width
}),h[0].setStroke({color:this.color}),h[0].setFill(this.color),h[1]=t.createLine({
x1:this._gauge.dataX,y1:a,x2:i,y2:a}),h[1].setStroke({color:this.highlight}),this.highlight2&&(a--,
h[2]=t.createLine({x1:this._gauge.dataX,y1:a,x2:i,y2:a}),h[2].setStroke({color:this.highlight2
})),h},_createShapes:function(t){for(var e in this.shape.children){e=this.shape.children[e];
var i={};for(var a in e)i[a]=e[a];"line"==e.shape.type?i.shape.x2=t+i.shape.x1:"rect"==e.shape.type&&(i.width=t),
e.setShape(i)}},_move:function(t){var h,s=this.value;if(s<this.min&&(s=this.min),
s>this.max&&(s=this.max),h=this._gauge._getPosition(this.currentValue),this.currentValue=s,
s=this._gauge._getPosition(s)-this._gauge.dataX,t)this._createShapes(s);else if(h!=s){
var g=new e.Animation({curve:[h,s],duration:this.duration,easing:this.easing});i.connect(g,"onAnimate",a.hitch(this,this._createShapes)),
g.play()}}})});