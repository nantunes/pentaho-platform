define(["dojo/_base/kernel","dojo/_base/lang","./Annotation","./Anchor"],function(t){
t.getObject("sketch",!0,dojox);var i=dojox.sketch;i.SingleArrowAnnotation=function(t,s){
i.Annotation.call(this,t,s),this.transform={dx:0,dy:0},this.start={x:0,y:0},this.control={
x:100,y:-50},this.end={x:200,y:0},this.textPosition={x:0,y:0},this.textOffset=4,this.textYOffset=10,
this.rotation=0,this.pathShape=null,this.arrowhead=null,this.arrowheadGroup=null,
this.labelShape=null,this.anchors.start=new i.Anchor(this,"start"),this.anchors.control=new i.Anchor(this,"control"),
this.anchors.end=new i.Anchor(this,"end")},i.SingleArrowAnnotation.prototype=new i.Annotation;
var s=i.SingleArrowAnnotation.prototype;return s.constructor=i.SingleArrowAnnotation,
s.type=function(){return"SingleArrow"},s.getType=function(){return i.SingleArrowAnnotation;
},s._rot=function(){var t=this.control.y-this.start.y,i=this.control.x-this.start.x;
this.rotation=Math.atan2(t,i)},s._pos=function(){var t=this.textOffset,i=0,s=0,e=this.calculate.slope(this.control,this.end);
this.textAlign="middle",Math.abs(e)>=1?(i=this.end.x+this.calculate.dx(this.control,this.end,t),
s=this.control.y>this.end.y?this.end.y-t:this.end.y+t+this.textYOffset):0==e?(i=this.end.x+t,
s=this.end.y+this.textYOffset):(this.start.x>this.end.x?(i=this.end.x-t,this.textAlign="end"):(i=this.end.x+t,
this.textAlign="start"),s=this.start.y<this.end.y?this.end.y+this.calculate.dy(this.control,this.end,t)+this.textYOffset:this.end.y+this.calculate.dy(this.control,this.end,-t)),
this.textPosition={x:i,y:s}},s.apply=function(t){if(t){t.documentElement&&(t=t.documentElement),
this.readCommonAttrs(t);for(var i=0;i<t.childNodes.length;i++){var s=t.childNodes[i];
if("text"==s.localName)this.property("label",s.childNodes.length?s.childNodes[0].nodeValue:"");else if("path"==s.localName){
var e=s.getAttribute("d").split(" "),o=e[0].split(",");this.start.x=parseFloat(o[0].substr(1),10),
this.start.y=parseFloat(o[1],10),o=e[1].split(","),this.control.x=parseFloat(o[0].substr(1),10),
this.control.y=parseFloat(o[1],10),o=e[2].split(","),this.end.x=parseFloat(o[0],10),
this.end.y=parseFloat(o[1],10);var h=this.property("stroke"),r=s.getAttribute("style"),a=r.match(/stroke:([^;]+);/);
a&&(h.color=a[1],this.property("fill",a[1])),a=r.match(/stroke-width:([^;]+);/),a&&(h.width=a[1]),
this.property("stroke",h)}}}},s.initialize=function(t){i.Annotation.labelFont?i.Annotation.labelFont:{
family:"Times",size:"16px"};this.apply(t),this._rot(),this._pos();var s=this.rotation;
dojox.gfx.matrix.rotate(s);this.shape=this.figure.group.createGroup(),this.shape.getEventSource().setAttribute("id",this.id),
this.pathShape=this.shape.createPath("M"+this.start.x+","+this.start.y+" Q"+this.control.x+","+this.control.y+" "+this.end.x+","+this.end.y+" l0,0"),
this.arrowheadGroup=this.shape.createGroup(),this.arrowhead=this.arrowheadGroup.createPath(),
this.labelShape=this.shape.createText({x:this.textPosition.x,y:this.textPosition.y,
text:this.property("label"),align:this.textAlign}),this.labelShape.getEventSource().setAttribute("id",this.id+"-labelShape"),
this.draw()},s.destroy=function(){this.shape&&(this.arrowheadGroup.remove(this.arrowhead),
this.shape.remove(this.arrowheadGroup),this.shape.remove(this.pathShape),this.shape.remove(this.labelShape),
this.figure.group.remove(this.shape),this.shape=this.pathShape=this.labelShape=this.arrowheadGroup=this.arrowhead=null);
},s.draw=function(t){this.apply(t),this._rot(),this._pos();var i=this.rotation,s=dojox.gfx.matrix.rotate(i);
this.shape.setTransform(this.transform),this.pathShape.setShape("M"+this.start.x+","+this.start.y+" Q"+this.control.x+","+this.control.y+" "+this.end.x+","+this.end.y+" l0,0"),
this.arrowheadGroup.setTransform({dx:this.start.x,dy:this.start.y}).applyTransform(s),
this.arrowhead.setFill(this.property("fill")),this.labelShape.setShape({x:this.textPosition.x,
y:this.textPosition.y,text:this.property("label"),align:this.textAlign}).setFill(this.property("fill")),
this.zoom()},s.zoom=function(t){if(this.arrowhead&&(t=t||this.figure.zoomFactor,i.Annotation.prototype.zoom.call(this,t),
this._curPct!==t)){this._curPct=t;var s=t>1?20:Math.floor(20/t),e=t>1?5:Math.floor(5/t),o=t>1?3:Math.floor(3/t);
this.arrowhead.setShape("M0,0 l"+s+",-"+e+" -"+o+","+e+" "+o+","+e+" Z")}},s.getBBox=function(){
var t=Math.min(this.start.x,this.control.x,this.end.x),i=Math.min(this.start.y,this.control.y,this.end.y),s=Math.max(this.start.x,this.control.x,this.end.x)-t,e=Math.max(this.start.y,this.control.y,this.end.y)-i;
return{x:t,y:i,width:s,height:e}},s.serialize=function(){var t=this.property("stroke"),i=this.rotation*(180/Math.PI);
return i=Math.round(i*Math.pow(10,4))/Math.pow(10,4),"<g "+this.writeCommonAttrs()+'><path style="stroke:'+t.color+";stroke-width:"+t.width+';fill:none;" d="M'+this.start.x+","+this.start.y+" Q"+this.control.x+","+this.control.y+" "+this.end.x+","+this.end.y+'" /><g transform="translate('+this.start.x+","+this.start.y+") rotate("+i+')"><path style="fill:'+t.color+';" d="M0,0 l20,-5, -3,5, 3,5 Z" /></g><text style="fill:'+t.color+";text-anchor:"+this.textAlign+'" font-weight="bold" x="'+this.textPosition.x+'" y="'+this.textPosition.y+'">'+this.property("label")+"</text></g>";
},i.Annotation.register("SingleArrow"),dojox.sketch.SingleArrowAnnotation});