define(["dojo/_base/lang","dojo/_base/Color"],function(r,t){var i={};return r.mixin(i,{
brightness:function(t,i){var o=r.mixin(null,t);return o.r=Math.max(Math.min(o.r+i,255),0),
o.g=Math.max(Math.min(o.g+i,255),0),o.b=Math.max(Math.min(o.b+i,255),0),o},createGradient:function(r){
for(var t,i={colors:[]},o=0;o<r.length;o++)o%2==0?t={offset:r[o]}:(t.color=r[o],i.colors.push(t));
return i},_setter:function(r,t,i){for(var o=0;o<t.length;o++)r[t[o]]=i[o]},genericCircularGauge:function(r,o,e,n,a,c,l,s,u,h,g){
var d=["originX","originY","radius","startAngle","endAngle","orientation","font","labelPosition","tickShapeFunc"];
s||(s="clockwise"),u||(u={family:"Helvetica",style:"normal",size:"10pt",color:"#555555"
}),h||(h="inside"),g||(g=function(r,o,e){var n,a,c=o.tickStroke;if(c){n={color:c.color?c.color:"#000000",
width:c.width?c.width:.5};var l=new t(c.color).toRgb();a={color:c.color?i.brightness({
r:l[0],g:l[1],b:l[2]},51):"#000000",width:c.width?.6*c.width:.3}}return r.createLine({
x1:e.isMinor?2:0,y1:0,x2:e.isMinor?8:10,y2:0}).setStroke(e.isMinor?a:n)}),this._setter(r,d,[e,n,a,c,l,s,u,h,g]),
o.set("interactionArea","gauge"),o.set("indicatorShapeFunc",function(t,i){return t.createPolyline([0,-5,i.scale.radius-6,0,0,5,0,-5]).setStroke({
color:"#333333",width:.25}).setFill(r._gauge.indicatorColor)})}}),i});