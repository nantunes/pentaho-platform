define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","../utils","../../CircularGauge","../../LinearScaler","../../CircularScale","../../CircularValueIndicator","../../TextIndicator","../DefaultPropertiesMixin"],function(r,i,e,t,o,s,l,a,n,d){
return i("dojox.dgauges.components.default.CircularLinearGauge",[o,d],{_radius:100,
borderColor:"#C9DFF2",fillColor:"#FCFCFF",indicatorColor:"#F01E28",constructor:function(){
this.borderColor=new e(this.borderColor),this.fillColor=new e(this.fillColor),this.indicatorColor=new e(this.indicatorColor),
this.addElement("background",r.hitch(this,this.drawBackground));var i=new s,o=new l;
o.set("scaler",i),this.addElement("scale",o);var d=new a;o.addIndicator("indicator",d),
this.addElement("foreground",r.hitch(this,this.drawForeground));var c=new n;c.set("indicator",d),
c.set("x",100),c.set("y",150),this.addElement("indicatorText",c),t.genericCircularGauge(o,d,this._radius,this._radius,.65*this._radius,130,50,null,null,"outside");
},drawBackground:function(i){var e=this._radius,o=2*e,s=o,l=t.createGradient([0,t.brightness(this.borderColor,70),1,t.brightness(this.borderColor,-40)]);
i.createEllipse({cx:e,cy:e,rx:e,ry:e}).setFill(r.mixin({type:"linear",x1:o,y1:0,x2:0,
y2:s},l)).setStroke({color:"#A5A5A5",width:.2}),l=t.createGradient([0,t.brightness(this.borderColor,70),1,t.brightness(this.borderColor,-50)]),
i.createEllipse({cx:e,cy:e,rx:.99*e,ry:.99*e}).setFill(r.mixin({type:"linear",x1:0,
y1:0,x2:o,y2:s},l)),l=t.createGradient([0,t.brightness(this.borderColor,60),1,t.brightness(this.borderColor,-40)]),
i.createEllipse({cx:e,cy:e,rx:.92*e,ry:.92*e}).setFill(r.mixin({type:"linear",x1:0,
y1:0,x2:o,y2:s},l)),l=t.createGradient([0,t.brightness(this.borderColor,70),1,t.brightness(this.borderColor,-40)]),
i.createEllipse({cx:e,cy:e,rx:.9*e,ry:.9*e}).setFill(r.mixin({type:"linear",x1:o,
y1:0,x2:0,y2:s},l)),l=t.createGradient([0,[255,255,255,220],.8,t.brightness(this.fillColor,-5),1,t.brightness(this.fillColor,-30)]),
i.createEllipse({cx:e,cy:e,rx:.9*e,ry:.9*e}).setFill(r.mixin({type:"radial",cx:e,
cy:e,r:e},l)).setStroke({color:t.brightness(this.fillColor,-40),width:.4})},drawForeground:function(i){
var e=.07*this._radius,o=t.createGradient([0,this.borderColor,1,t.brightness(this.borderColor,-20)]);
i.createEllipse({cx:this._radius,cy:this._radius,rx:e,ry:e}).setFill(r.mixin({type:"radial",
cx:.96*this._radius,cy:.96*this._radius,r:e},o)).setStroke({color:t.brightness(this.fillColor,-50),
width:.4})}})});