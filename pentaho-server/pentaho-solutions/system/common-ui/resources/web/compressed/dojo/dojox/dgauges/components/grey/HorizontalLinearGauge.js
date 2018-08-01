define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","../../RectangularGauge","../../LinearScaler","../../RectangularScale","../../RectangularValueIndicator","../DefaultPropertiesMixin"],function(o,e,t,i,r,l,a,n){
return e("dojox.dgauges.components.grey.HorizontalLinearGauge",[i,n],{borderColor:[148,152,161],
fillColor:[148,152,161],indicatorColor:[63,63,63],constructor:function(){this.borderColor=new t(this.borderColor),
this.fillColor=new t(this.fillColor),this.indicatorColor=new t(this.indicatorColor),
this.addElement("background",o.hitch(this,this.drawBackground));var e=new r,i=new l;
i.set("scaler",e),i.set("labelPosition","leading"),i.set("paddingLeft",30),i.set("paddingRight",30),
i.set("paddingTop",28),i.set("labelGap",8),i.set("font",{family:"Helvetica",weight:"bold",
size:"7pt"}),this.addElement("scale",i);var n=new a;n.set("interactionArea","gauge"),
n.set("value",e.minimum),n.set("paddingTop",32),n.set("indicatorShapeFunc",o.hitch(this,function(o,e){
return o.createPolyline([0,0,-10,-20,10,-20,0,0]).setFill(this.indicatorColor).setStroke({
color:[70,70,70],width:1,style:"Solid",cap:"butt",join:20})})),i.addIndicator("indicator",n);
},drawBackground:function(o,e,t){o.createRect({x:0,y:0,width:e,height:50,r:13.5}).setFill(this.borderColor),
o.createRect({x:2,y:2,width:e-4,height:46,r:11.5}).setFill({type:"linear",x1:0,y1:-2,
x2:0,y2:60,colors:[{offset:0,color:this.fillColor},{offset:1,color:"white"}]}),o.createPath().moveTo(2,25).vLineTo(12).smoothCurveTo(2,2,16,2).hLineTo(e-12).smoothCurveTo(e-2,2,e-2,16).closePath().setFill({
type:"linear",x1:0,y1:-5,x2:0,y2:40,colors:[{offset:0,color:"white"},{offset:1,color:this.fillColor
}]})}})});