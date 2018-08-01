define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","../utils","../../RectangularGauge","../../LinearScaler","../../RectangularScale","../../RectangularValueIndicator","../../TextIndicator","../DefaultPropertiesMixin"],function(e,t,r,i,o,a,n,l,s,d){
return t("dojox.dgauges.components.default.HorizontalLinearGauge",[o,d],{borderColor:"#C9DFF2",
fillColor:"#FCFCFF",indicatorColor:"#F01E28",constructor:function(){this.borderColor=new r(this.borderColor),
this.fillColor=new r(this.fillColor),this.indicatorColor=new r(this.indicatorColor),
this.addElement("background",e.hitch(this,this.drawBackground));var t=new a,i=new n;
i.set("scaler",t),i.set("labelPosition","trailing"),i.set("paddingTop",15),i.set("paddingRight",23),
this.addElement("scale",i);var o=new l;o.indicatorShapeFunc=e.hitch(this,function(e){
var t=e.createPolyline([0,0,10,0,0,10,-10,0,0,0]).setStroke({color:"blue",width:.25
}).setFill(this.indicatorColor);return t}),o.set("paddingTop",5),o.set("interactionArea","gauge"),
i.addIndicator("indicator",o),this.addElement("indicatorTextBorder",e.hitch(this,this.drawTextBorder),"leading");
var d=new s;d.set("indicator",o),d.set("x",32.5),d.set("y",30),this.addElement("indicatorText",d);
},drawBackground:function(t,r,o){o=49;var a=0,n=3,l=i.createGradient([0,i.brightness(this.borderColor,-20),.1,i.brightness(this.borderColor,-40)]);
t.createRect({x:0,y:0,width:r,height:o,r:n}).setFill(e.mixin({type:"linear",x1:0,
y1:0,x2:r,y2:o},l)).setStroke({color:"#A5A5A5",width:.2}),l=i.createGradient([0,i.brightness(this.borderColor,70),1,i.brightness(this.borderColor,-50)]),
a=4,n=2,t.createRect({x:a,y:a,width:r-2*a,height:o-2*a,r:n}).setFill(e.mixin({type:"linear",
x1:0,y1:0,x2:r,y2:o},l)),a=6,n=1,l=i.createGradient([0,i.brightness(this.borderColor,60),1,i.brightness(this.borderColor,-40)]),
t.createRect({x:a,y:a,width:r-2*a,height:o-2*a,r:n}).setFill(e.mixin({type:"linear",
x1:0,y1:0,x2:r,y2:o},l)),a=7,n=0,l=i.createGradient([0,i.brightness(this.borderColor,70),1,i.brightness(this.borderColor,-40)]),
t.createRect({x:a,y:a,width:r-2*a,height:o-2*a,r:n}).setFill(e.mixin({type:"linear",
x1:r,y1:0,x2:0,y2:o},l)),a=5,n=0,l=i.createGradient([0,[255,255,255,220],.8,i.brightness(this.fillColor,-5),1,i.brightness(this.fillColor,-30)]),
t.createRect({x:a,y:a,width:r-2*a,height:o-2*a,r:n}).setFill(e.mixin({type:"radial",
cx:r/2,cy:0,r:r},l)).setStroke({color:i.brightness(this.fillColor,-40),width:.4});
},drawTextBorder:function(e){return e.createRect({x:5,y:5,width:60,height:39}).setStroke({
color:"#CECECE",width:1})}})});