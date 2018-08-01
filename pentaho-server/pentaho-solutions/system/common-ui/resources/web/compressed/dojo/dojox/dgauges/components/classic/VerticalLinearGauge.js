define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","../../RectangularGauge","../../LinearScaler","../../RectangularScale","../../RectangularValueIndicator","../DefaultPropertiesMixin"],function(e,t,o,i,r,l,a,n){
return t("dojox.dgauges.components.classic.VerticalLinearGauge",[i,n],{borderColor:[121,126,134],
fillColor:[148,152,161],indicatorColor:"#FFFFFF",constructor:function(){this.orientation="vertical",
this.borderColor=new o(this.borderColor),this.fillColor=new o(this.fillColor),this.indicatorColor=new o(this.indicatorColor),
this.addElement("background",e.hitch(this,this.drawBackground));var t=new r,i=new l;
i.set("scaler",t),i.set("labelPosition","trailing"),i.set("paddingTop",30),i.set("paddingBottom",30),
i.set("paddingLeft",17),i.set("font",{family:"Helvetica",weight:"bold",size:"7pt"
}),i.set("tickShapeFunc",function(e,t,o){return e.createCircle({r:o.isMinor?.5:2}).setFill("black");
}),this.addElement("scale",i);var n=new a;n.set("interactionArea","gauge"),n.set("value",t.minimum),
n.set("paddingLeft",18),n.set("indicatorShapeFunc",e.hitch(this,function(e){return e.createPolyline([0,0,-10,-20,10,-20,0,0]).setFill(this.indicatorColor).setStroke({
color:[121,126,134],width:1,style:"Solid",cap:"butt",join:20})})),i.addIndicator("indicator",n);
},drawBackground:function(e,t,o){e.createRect({x:0,y:0,width:50,height:o,r:8}).setFill(this.borderColor),
e.createRect({x:2,y:2,width:46,height:o/2,r:6}).setFill({type:"linear",x1:0,y1:2,
x2:0,y2:o/2,colors:[{offset:0,color:[235,235,235]},{offset:1,color:this.borderColor
}]}),e.createRect({x:6,y:6,width:38,height:o-12,r:5}).setFill({type:"linear",x1:6,
y1:0,x2:38,y2:0,colors:[{offset:0,color:this.fillColor},{offset:1,color:[220,220,220]
}]}),e.createRect({x:7,y:7,width:36,height:o-14,r:3}).setFill({type:"linear",x1:7,
y1:0,x2:36,y2:0,colors:[{offset:0,color:[220,220,220]},{offset:1,color:this.fillColor
}]})}})});