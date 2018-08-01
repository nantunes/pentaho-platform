define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","../utils","../../CircularGauge","../../LinearScaler","../../CircularScale","../../CircularValueIndicator","../../TextIndicator","../DefaultPropertiesMixin"],function(t,i,r,e,o,h,s,l,d,a){
return i("dojox.dgauges.components.default.SemiCircularLinearGauge",[o,a],{_radius:88,
_width:200,_height:123,borderColor:"#C9DFF2",fillColor:"#FCFCFF",indicatorColor:"#F01E28",
constructor:function(){this.borderColor=new r(this.borderColor),this.fillColor=new r(this.fillColor),
this.indicatorColor=new r(this.indicatorColor),this.addElement("background",t.hitch(this,this.drawBackground));
var i=new h,o=new s;o.set("scaler",i),this.addElement("scale",o);var a=new l;o.addIndicator("indicator",a),
this.addElement("foreground",t.hitch(this,this.drawForeground)),this.addElement("indicatorTextBorder",t.hitch(this,this.drawTextBorder),"leading");
var n=new d;n.set("indicator",a),n.set("x",100),n.set("y",115),this.addElement("indicatorText",n),
e.genericCircularGauge(o,a,this._width/2,.76*this._height,this._radius,166,14,null,null,"inside");
},drawBackground:function(i){var r=this._width,o=this._height,h=0,s=3,l=e.createGradient([0,e.brightness(this.borderColor,-20),.1,e.brightness(this.borderColor,-40)]);
i.createRect({x:0,y:0,width:r,height:o,r:s}).setFill(t.mixin({type:"linear",x1:0,
y1:0,x2:r,y2:o},l)).setStroke({color:"#A5A5A5",width:.2}),l=e.createGradient([0,e.brightness(this.borderColor,70),1,e.brightness(this.borderColor,-50)]),
h=4,s=2,i.createRect({x:h,y:h,width:r-2*h,height:o-2*h,r:s}).setFill(t.mixin({type:"linear",
x1:0,y1:0,x2:r,y2:o},l)),h=6,s=1,l=e.createGradient([0,e.brightness(this.borderColor,60),1,e.brightness(this.borderColor,-40)]),
i.createRect({x:h,y:h,width:r-2*h,height:o-2*h,r:s}).setFill(t.mixin({type:"linear",
x1:0,y1:0,x2:r,y2:o},l)),h=7,s=0,l=e.createGradient([0,e.brightness(this.borderColor,70),1,e.brightness(this.borderColor,-40)]),
i.createRect({x:h,y:h,width:r-2*h,height:o-2*h,r:s}).setFill(t.mixin({type:"linear",
x1:r,y1:0,x2:0,y2:o},l)),h=5,s=0,l=e.createGradient([0,[255,255,255,220],.8,e.brightness(this.fillColor,-5),1,e.brightness(this.fillColor,-30)]),
i.createRect({x:h,y:h,width:r-2*h,height:o-2*h,r:s}).setFill(t.mixin({type:"radial",
cx:r/2,cy:o/2,r:o},l)).setStroke({color:e.brightness(this.fillColor,-40),width:.4
})},drawForeground:function(i){var r=.07*this._radius,o=e.createGradient([0,this.borderColor,1,e.brightness(this.borderColor,-20)]);
i.createEllipse({cx:this._width/2,cy:.76*this._height,rx:r,ry:r}).setFill(t.mixin({
type:"radial",cx:this._width/2-5,cy:.76*this._height-5,r:r},o)).setStroke({color:e.brightness(this.fillColor,-50),
width:.4})},drawTextBorder:function(t){return t.createRect({x:this._width/2-12,y:this._height-20,
width:24,height:14}).setStroke({color:e.brightness(this.fillColor,-20),width:.3});
}})});