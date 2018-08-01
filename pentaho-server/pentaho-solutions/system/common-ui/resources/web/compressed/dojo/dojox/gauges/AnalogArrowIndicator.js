define(["dojo/_base/declare","./AnalogIndicatorBase"],function(t,e){return t("dojox.gauges.AnalogArrowIndicator",[e],{
_getShapes:function(t){if(!this._gauge)return null;var e=this.color?this.color:"black",o=this.strokeColor?this.strokeColor:e,h={
color:o,width:1};this.color.type&&!this.strokeColor&&(h.color=this.color.colors[0].color);
var i=Math.floor(this.width/2),r=5*this.width,l=1&this.width,s=[],n=[{x:-i,y:0},{
x:-i,y:-this.length+r},{x:-2*i,y:-this.length+r},{x:0,y:-this.length},{x:2*i+l,y:-this.length+r
},{x:i+l,y:-this.length+r},{x:i+l,y:0},{x:-i,y:0}];return s[0]=t.createPolyline(n).setStroke(h).setFill(e),
s[1]=t.createLine({x1:-i,y1:0,x2:-i,y2:-this.length+r}).setStroke({color:this.highlight
}),s[2]=t.createLine({x1:-i-3,y1:-this.length+r,x2:0,y2:-this.length}).setStroke({
color:this.highlight}),s[3]=t.createCircle({cx:0,cy:0,r:this.width}).setStroke(h).setFill(e),
s}})});