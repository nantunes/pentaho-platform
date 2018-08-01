define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","../utils","../../RectangularGauge","../../LinearScaler","../../RectangularScale","../../RectangularValueIndicator","../DefaultPropertiesMixin"],function(e,o,t,i,r,l,a,n,s){
return o("dojox.dgauges.components.green.HorizontalLinearGauge",[r,s],{borderColor:[50,50,50],
fillColor:[109,183,19],indicatorColor:[0,0,0],constructor:function(){this.borderColor=new t(this.borderColor),
this.fillColor=new t(this.fillColor),this.indicatorColor=new t(this.indicatorColor),
this.addElement("background",e.hitch(this,this.drawBackground));var o=new l,i=new a;
i.set("scaler",o),i.set("labelPosition","leading"),i.set("paddingLeft",30),i.set("paddingRight",30),
i.set("paddingTop",28),i.set("labelGap",2),i.set("font",{family:"Helvetica",weight:"bold",
size:"7pt"}),this.addElement("scale",i);var r=new n;r.set("interactionArea","gauge"),
r.set("value",o.minimum),r.set("paddingTop",32),r.set("indicatorShapeFunc",e.hitch(this,function(e,o){
return e.createPolyline([0,0,-10,-20,10,-20,0,0]).setFill(this.indicatorColor)})),
i.addIndicator("indicator",r)},drawBackground:function(e,o,r){var l=i.brightness(new t(this.fillColor),100);
e.createRect({x:0,y:0,width:o,height:50,r:10}).setFill(this.borderColor),e.createRect({
x:3,y:3,width:o-6,height:44,r:7}).setFill({type:"linear",x1:0,y1:2,x2:0,y2:30,colors:[{
offset:0,color:l},{offset:1,color:this.fillColor}]}),e.createRect({x:6,y:6,width:o-12,
height:38,r:5}).setFill({type:"linear",x1:0,y1:6,x2:0,y2:38,colors:[{offset:0,color:[226,226,221]
},{offset:.5,color:[239,239,236]},{offset:1,color:"white"}]})}})});