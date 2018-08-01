define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","../utils","../../RectangularGauge","../../LinearScaler","../../RectangularScale","../../RectangularValueIndicator","../DefaultPropertiesMixin"],function(e,t,o,i,r,l,a,n,s){
return t("dojox.dgauges.components.green.VerticalLinearGauge",[r,s],{borderColor:[50,50,50],
fillColor:[109,183,19],indicatorColor:[0,0,0],constructor:function(){this.orientation="vertical",
this.borderColor=new o(this.borderColor),this.fillColor=new o(this.fillColor),this.indicatorColor=new o(this.indicatorColor),
this.addElement("background",e.hitch(this,this.drawBackground));var t=new l,i=new a;
i.set("scaler",t),i.set("labelPosition","trailing"),i.set("paddingTop",30),i.set("paddingBottom",30),
i.set("paddingLeft",15),i.set("labelGap",2),i.set("font",{family:"Helvetica",weight:"bold",
size:"7pt"}),this.addElement("scale",i);var r=new n;r.set("interactionArea","gauge"),
r.set("value",t.minimum),r.set("paddingLeft",18),r.set("indicatorShapeFunc",e.hitch(this,function(e){
return e.createPolyline([0,0,-10,-20,10,-20,0,0]).setFill(this.indicatorColor)})),
i.addIndicator("indicator",r)},drawBackground:function(e,t,r){var l=i.brightness(new o(this.fillColor),100);
e.createRect({x:0,y:0,width:50,height:r,r:10}).setFill(this.borderColor),e.createRect({
x:3,y:3,width:44,height:r-6,r:7}).setFill({type:"linear",x1:6,y1:0,x2:38,y2:0,colors:[{
offset:0,color:l},{offset:1,color:this.fillColor}]}),e.createRect({x:6,y:6,width:38,
height:r-12,r:6}).setFill({type:"linear",x1:7,y1:0,x2:36,y2:0,colors:[{offset:0,color:[226,226,221]
},{offset:.5,color:[239,239,236]},{offset:1,color:"white"}]})}})});