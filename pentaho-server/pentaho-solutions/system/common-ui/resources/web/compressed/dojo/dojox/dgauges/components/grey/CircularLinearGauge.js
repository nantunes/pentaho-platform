define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","../utils","../../CircularGauge","../../LinearScaler","../../CircularScale","../../CircularValueIndicator","../../CircularRangeIndicator","../DefaultPropertiesMixin"],function(e,o,r,t,i,l,a,c,s,n){
return o("dojox.dgauges.components.grey.CircularLinearGauge",[i,n],{borderColor:[148,152,161],
fillColor:[148,152,161],indicatorColor:[63,63,63],constructor:function(o,i){var s=new l;
this.addElement("background",e.hitch(this,this.drawBackground));var n=new a;n.set("scaler",s),
n.set("originX",73.4),n.set("originY",74.10297),n.set("radius",61.44239),n.set("startAngle",130.16044),
n.set("endAngle",50.25444),n.set("orientation","clockwise"),n.set("labelGap",2),n.set("font",{
family:"Helvetica",weight:"bold",size:"8pt"}),this.addElement("scale",n);var d=new c;
d.set("interactionArea","gauge"),d.set("value",s.minimum),d.set("indicatorShapeFunc",e.hitch(this,function(e,o){
var i=o.scale.radius-2;e.createPath().moveTo(0,0).lineTo(0,-5).lineTo(i,0).lineTo(0,0).closePath().setFill(this.indicatorColor);
var l=t.brightness(new r(this.indicatorColor),70);return e.createPath().moveTo(0,0).lineTo(0,5).lineTo(i,0).lineTo(0,0).closePath().setFill(l),
e})),n.addIndicator("indicator",d),this.addElement("foreground",e.hitch(this,this.drawForeground));
},drawBackground:function(e){e.createEllipse({cx:73.5,cy:73.75,rx:73.5,ry:73.75}).setFill(this.borderColor),
e.createEllipse({cx:73.5,cy:73.75,rx:71.5,ry:71.75}).setFill({type:"linear",x1:2,
y1:2,x2:2,y2:174.2,colors:[{offset:0,color:this.fillColor},{offset:1,color:"white"
}]}),e.createPath({path:"M71.7134 2.3627 C35.3338 3.0547 6.0025 32.818 6.0025 69.3621 C6.0025 69.7225 5.9968 70.0836 6.0025 70.4427 C26.4442 78.2239 50.1913 82.6622 75.4956 82.6622 C98.7484 82.6622 120.6538 78.8779 139.918 72.2299 C139.9587 71.2717 140.0011 70.3303 140.0011 69.3621 C140.0011 32.3847 109.9791 2.3627 73.0018 2.3627 C72.5685 2.3627 72.1447 2.3545 71.7133 2.3627 Z"
}).setFill({type:"linear",x1:6,y1:2.3591,x2:6,y2:150,colors:[{offset:0,color:"white"
},{offset:1,color:this.fillColor}]})},drawForeground:function(e){e.createEllipse({
cx:73.3,cy:73.8,rx:9.25,ry:9.25}).setFill({type:"radial",cx:73.30003,cy:70.10003,
r:18.5,colors:[{offset:0,color:[149,149,149]},{offset:.5,color:"black"},{offset:1,
color:"black"}]}).setStroke({color:"black",width:.1,style:"Solid",cap:"butt",join:4
})}})});