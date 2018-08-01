define(["dojo/_base/kernel","dojo/_base/lang","./Annotation","./Anchor"],function(t){
t.getObject("sketch",!0,dojox);var s=dojox.sketch;console.log(s),s.DoubleArrowAnnotation=function(t,o){
s.Annotation.call(this,t,o),this.transform={dx:0,dy:0},this.start={x:0,y:0},this.control={
x:100,y:-50},this.end={x:200,y:0},this.textPosition={x:0,y:0},this.textOffset=6,this.textYOffset=10,
this.textAlign="middle",this.startRotation=0,this.endRotation=0,this.labelShape=null,
this.pathShape=null,this.startArrow=null,this.startArrowGroup=null,this.endArrow=null,
this.endArrowGroup=null,this.anchors.start=new s.Anchor(this,"start"),this.anchors.control=new s.Anchor(this,"control"),
this.anchors.end=new s.Anchor(this,"end")},s.DoubleArrowAnnotation.prototype=new s.Annotation;
var o=s.DoubleArrowAnnotation.prototype;return o.constructor=s.DoubleArrowAnnotation,
o.type=function(){return"DoubleArrow"},o.getType=function(){return s.DoubleArrowAnnotation;
},o._rot=function(){var t=this.control.y-this.start.y,s=this.control.x-this.start.x;
this.startRotation=Math.atan2(t,s),t=this.end.y-this.control.y,s=this.end.x-this.control.x,
this.endRotation=Math.atan2(t,s)},o._pos=function(){var t=this.textOffset;this.control.y<this.end.y?t*=-1:t+=this.textYOffset;
var s={x:.5*(this.control.x-this.start.x)+this.start.x,y:.5*(this.control.y-this.start.y)+this.start.y
},o={x:.5*(this.end.x-this.control.x)+this.control.x,y:.5*(this.end.y-this.control.y)+this.control.y
};this.textPosition={x:.5*(o.x-s.x)+s.x,y:.5*(o.y-s.y)+s.y+t}},o.apply=function(t){
if(t){t.documentElement&&(t=t.documentElement),this.readCommonAttrs(t);for(var s=0;s<t.childNodes.length;s++){
var o=t.childNodes[s];if("text"==o.localName)this.property("label",o.childNodes.length?o.childNodes[0].nodeValue:"");else if("path"==o.localName){
var r=o.getAttribute("d").split(" "),i=r[0].split(",");this.start.x=parseFloat(i[0].substr(1),10),
this.start.y=parseFloat(i[1],10),i=r[1].split(","),this.control.x=parseFloat(i[0].substr(1),10),
this.control.y=parseFloat(i[1],10),i=r[2].split(","),this.end.x=parseFloat(i[0],10),
this.end.y=parseFloat(i[1],10);var e=this.property("stroke"),h=o.getAttribute("style"),a=h.match(/stroke:([^;]+);/);
a&&(e.color=a[1],this.property("fill",a[1])),a=h.match(/stroke-width:([^;]+);/),a&&(e.width=a[1]),
this.property("stroke",e)}}}},o.initialize=function(t){s.Annotation.labelFont?s.Annotation.labelFont:{
family:"Times",size:"16px"};this.apply(t),this._rot(),this._pos();var o=this.startRotation,r=dojox.gfx.matrix.rotate(o);
o=this.endRotation;var i=dojox.gfx.matrix.rotateAt(o,this.end.x,this.end.y);this.shape=this.figure.group.createGroup(),
this.shape.getEventSource().setAttribute("id",this.id),this.pathShape=this.shape.createPath("M"+this.start.x+" "+this.start.y+"Q"+this.control.x+" "+this.control.y+" "+this.end.x+" "+this.end.y+" l0,0"),
this.startArrowGroup=this.shape.createGroup().setTransform({dx:this.start.x,dy:this.start.y
}),this.startArrowGroup.applyTransform(r),this.startArrow=this.startArrowGroup.createPath(),
this.endArrowGroup=this.shape.createGroup().setTransform(i),this.endArrow=this.endArrowGroup.createPath(),
this.labelShape=this.shape.createText({x:this.textPosition.x,y:this.textPosition.y,
text:this.property("label"),align:this.textAlign}).setFill(this.property("fill")),
this.labelShape.getEventSource().setAttribute("id",this.id+"-labelShape"),this.draw();
},o.destroy=function(){this.shape&&(this.startArrowGroup.remove(this.startArrow),
this.endArrowGroup.remove(this.endArrow),this.shape.remove(this.startArrowGroup),
this.shape.remove(this.endArrowGroup),this.shape.remove(this.pathShape),this.shape.remove(this.labelShape),
this.figure.group.remove(this.shape),this.shape=this.pathShape=this.labelShape=this.startArrowGroup=this.startArrow=this.endArrowGroup=this.endArrow=null);
},o.draw=function(t){this.apply(t),this._rot(),this._pos();var s=this.startRotation,o=dojox.gfx.matrix.rotate(s);
s=this.endRotation;var r=dojox.gfx.matrix.rotateAt(s,this.end.x,this.end.y);this.shape.setTransform(this.transform),
this.pathShape.setShape("M"+this.start.x+" "+this.start.y+" Q"+this.control.x+" "+this.control.y+" "+this.end.x+" "+this.end.y+" l0,0"),
this.startArrowGroup.setTransform({dx:this.start.x,dy:this.start.y}).applyTransform(o),
this.startArrow.setFill(this.property("fill")),this.endArrowGroup.setTransform(r),
this.endArrow.setFill(this.property("fill")),this.labelShape.setShape({x:this.textPosition.x,
y:this.textPosition.y,text:this.property("label")}).setFill(this.property("fill")),
this.zoom()},o.zoom=function(t){if(this.startArrow){t=t||this.figure.zoomFactor,s.Annotation.prototype.zoom.call(this,t);
var o=t>1?20:Math.floor(20/t),r=t>1?5:Math.floor(5/t),i=t>1?3:Math.floor(3/t);this.startArrow.setShape("M0,0 l"+o+",-"+r+" -"+i+","+r+" "+i+","+r+" Z"),
this.endArrow.setShape("M"+this.end.x+","+this.end.y+" l-"+o+",-"+r+" "+i+","+r+" -"+i+","+r+" Z");
}},o.getBBox=function(){var t=Math.min(this.start.x,this.control.x,this.end.x),s=Math.min(this.start.y,this.control.y,this.end.y),o=Math.max(this.start.x,this.control.x,this.end.x)-t,r=Math.max(this.start.y,this.control.y,this.end.y)-s;
return{x:t,y:s,width:o,height:r}},o.serialize=function(){var t=this.property("stroke");
return"<g "+this.writeCommonAttrs()+'><path style="stroke:'+t.color+";stroke-width:"+t.width+';fill:none;" d="M'+this.start.x+","+this.start.y+" Q"+this.control.x+","+this.control.y+" "+this.end.x+","+this.end.y+'" /><g transform="translate('+this.start.x+","+this.start.y+") rotate("+Math.round(this.startRotation*(180/Math.PI)*Math.pow(10,4))/Math.pow(10,4)+')"><path style="fill:'+t.color+';" d="M0,0 l20,-5, -3,5, 3,5 Z" /></g><g transform="rotate('+Math.round(this.endRotation*(180/Math.PI)*Math.pow(10,4))/Math.pow(10,4)+", "+this.end.x+", "+this.end.y+')"><path style="fill:'+t.color+';" d="M'+this.end.x+","+this.end.y+' l-20,-5, 3,5, -3,5 Z" /></g><text style="fill:'+t.color+";text-anchor:"+this.textAlign+'" font-weight="bold" x="'+this.textPosition.x+'" y="'+this.textPosition.y+'">'+this.property("label")+"</text></g>";
},s.Annotation.register("DoubleArrow"),dojox.sketch.DoubleArrowAnnotation});