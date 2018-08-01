define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","../../RectangularGauge","../../LinearScaler","../../RectangularScale","../../RectangularValueIndicator","../DefaultPropertiesMixin"],function(o,e,t,i,r,l,a,n){
return e("dojox.dgauges.components.black.HorizontalLinearGauge",[i,n],{borderColor:"#000000",
fillColor:"#000000",indicatorColor:"#A4A4A4",constructor:function(){this.borderColor=new t(this.borderColor),
this.fillColor=new t(this.fillColor),this.indicatorColor=new t(this.indicatorColor),
this.addElement("background",o.hitch(this,this.drawBackground));var e=new r,i=new l;
i.set("scaler",e),i.set("labelPosition","leading"),i.set("paddingLeft",30),i.set("paddingRight",30),
i.set("paddingTop",34),i.set("labelGap",8),i.set("font",{family:"Helvetica",weight:"bold",
size:"7pt",color:"#CECECE"}),i.set("tickShapeFunc",function(o,e,t){return o.createCircle({
r:t.isMinor?.5:3}).setFill("#CECECE")}),this.addElement("scale",i);var n=new a;n.set("interactionArea","gauge"),
n.set("value",e.minimum),n.set("paddingTop",30),n.set("indicatorShapeFunc",o.hitch(this,function(o,e){
return o.createPolyline([0,0,-10,-20,10,-20,0,0]).setFill(this.indicatorColor).setStroke({
color:[70,70,70],width:1,style:"Solid",cap:"butt",join:20})})),i.addIndicator("indicator",n);
},drawBackground:function(o,e,t){o.createRect({x:0,y:0,width:e,height:50,r:15}).setFill(this.borderColor),
o.createRect({x:4,y:4,width:e-8,height:42,r:12}).setFill({type:"linear",x1:0,y1:50,
x2:0,y2:30,colors:[{offset:0,color:[100,100,100]},{offset:1,color:this.fillColor}]
}),o.createPath().moveTo(4,25).vLineTo(14).smoothCurveTo(4,4,18,4).hLineTo(e-16).smoothCurveTo(e-4,4,e-4,16).closePath().setFill({
type:"linear",x1:0,y1:0,x2:0,y2:20,colors:[{offset:0,color:[150,150,150]},{offset:1,
color:this.fillColor}]}),o.createPath().moveTo(4,25).vLineTo(14).smoothCurveTo(4,4,18,4).hLineTo(e-16).smoothCurveTo(e-4,4,e-4,16).closePath().setFill([255,255,255,.05]);
}})});