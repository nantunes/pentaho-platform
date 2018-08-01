define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","../../RectangularGauge","../../LinearScaler","../../RectangularScale","../../RectangularValueIndicator","../DefaultPropertiesMixin"],function(e,o,t,i,r,l,a,n){
return o("dojox.dgauges.components.grey.VerticalLinearGauge",[i,n],{borderColor:[148,152,161],
fillColor:[148,152,161],indicatorColor:[63,63,63],constructor:function(){this.orientation="vertical",
this.borderColor=new t(this.borderColor),this.fillColor=new t(this.fillColor),this.indicatorColor=new t(this.indicatorColor),
this.addElement("background",e.hitch(this,this.drawBackground));var o=new r,i=new l;
i.set("scaler",o),i.set("labelPosition","trailing"),i.set("paddingTop",30),i.set("paddingBottom",30),
i.set("paddingLeft",15),i.set("labelGap",4),i.set("font",{family:"Helvetica",weight:"bold",
size:"7pt"}),this.addElement("scale",i);var n=new a;n.set("interactionArea","gauge"),
n.set("value",o.minimum),n.set("paddingLeft",22),n.set("indicatorShapeFunc",e.hitch(this,function(e){
return e.createPath().moveTo(0,0).lineTo(-10,-20).lineTo(10,-20).lineTo(0,0).closePath().setFill(this.indicatorColor),
e})),i.addIndicator("indicator",n)},drawBackground:function(e,o,t){e.createRect({
x:0,y:0,width:50,height:t,r:13.5}).setFill(this.borderColor),e.createRect({x:2,y:2,
width:46,height:t-4,r:11.5}).setFill({type:"linear",x1:-2,y1:0,x2:60,y2:0,colors:[{
offset:0,color:"white"},{offset:1,color:this.fillColor}]}),e.createPath().moveTo(25,2).hLineTo(38).smoothCurveTo(48,2,48,18).vLineTo(t-16).smoothCurveTo(48,t-2,38,t-2).closePath().setFill({
type:"linear",x1:-10,y1:0,x2:60,y2:0,colors:[{offset:0,color:this.fillColor},{offset:1,
color:"white"}]})}})});