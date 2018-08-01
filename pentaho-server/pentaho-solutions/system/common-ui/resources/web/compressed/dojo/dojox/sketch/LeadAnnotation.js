define(["dojo/_base/kernel","dojo/_base/lang","./Annotation","./Anchor"],function(t){
t.getObject("sketch",!0,dojox);var s=dojox.sketch;s.LeadAnnotation=function(t,e){
s.Annotation.call(this,t,e),this.transform={dx:0,dy:0},this.start={x:0,y:0},this.control={
x:100,y:-50},this.end={x:200,y:0},this.textPosition={x:0,y:0},this.textOffset=4,this.textYOffset=10,
this.pathShape=null,this.labelShape=null,this.anchors.start=new s.Anchor(this,"start"),
this.anchors.control=new s.Anchor(this,"control"),this.anchors.end=new s.Anchor(this,"end");
},s.LeadAnnotation.prototype=new s.Annotation;var e=s.LeadAnnotation.prototype;return e.constructor=s.LeadAnnotation,
e.type=function(){return"Lead"},e.getType=function(){return s.LeadAnnotation},e._pos=function(){
var t=this.textOffset,s=0,e=0,i=this.calculate.slope(this.control,this.end);this.textAlign="middle",
Math.abs(i)>=1?(s=this.end.x+this.calculate.dx(this.control,this.end,t),e=this.control.y>this.end.y?this.end.y-t:this.end.y+t+this.textYOffset):0==i?(s=this.end.x+t,
e=this.end.y+this.textYOffset):(this.start.x>this.end.x?(s=this.end.x-t,this.textAlign="end"):(s=this.end.x+t,
this.textAlign="start"),e=this.start.y<this.end.y?this.end.y+this.calculate.dy(this.control,this.end,t)+this.textYOffset:this.end.y+this.calculate.dy(this.control,this.end,-t)),
this.textPosition={x:s,y:e}},e.apply=function(t){if(t){t.documentElement&&(t=t.documentElement),
this.readCommonAttrs(t);for(var s=0;s<t.childNodes.length;s++){var e=t.childNodes[s];
if("text"==e.localName)this.property("label",e.childNodes.length?e.childNodes[0].nodeValue:"");else if("path"==e.localName){
var i=e.getAttribute("d").split(" "),h=i[0].split(",");this.start.x=parseFloat(h[0].substr(1),10),
this.start.y=parseFloat(h[1],10),h=i[1].split(","),this.control.x=parseFloat(h[0].substr(1),10),
this.control.y=parseFloat(h[1],10),h=i[2].split(","),this.end.x=parseFloat(h[0],10),
this.end.y=parseFloat(h[1],10);var o=this.property("stroke"),n=e.getAttribute("style"),a=n.match(/stroke:([^;]+);/);
a&&(o.color=a[1],this.property("fill",a[1])),a=n.match(/stroke-width:([^;]+);/),a&&(o.width=a[1]),
this.property("stroke",o)}}}},e.initialize=function(t){this.apply(t),this._pos(),
this.shape=this.figure.group.createGroup(),this.shape.getEventSource().setAttribute("id",this.id),
this.pathShape=this.shape.createPath("M"+this.start.x+","+this.start.y+" Q"+this.control.x+","+this.control.y+" "+this.end.x+","+this.end.y+" l0,0"),
this.labelShape=this.shape.createText({x:this.textPosition.x,y:this.textPosition.y,
text:this.property("label"),align:this.textAlign}),this.labelShape.getEventSource().setAttribute("id",this.id+"-labelShape"),
this.draw()},e.destroy=function(){this.shape&&(this.shape.remove(this.pathShape),
this.shape.remove(this.labelShape),this.figure.group.remove(this.shape),this.shape=this.pathShape=this.labelShape=null);
},e.getBBox=function(){var t=Math.min(this.start.x,this.control.x,this.end.x),s=Math.min(this.start.y,this.control.y,this.end.y),e=Math.max(this.start.x,this.control.x,this.end.x)-t,i=Math.max(this.start.y,this.control.y,this.end.y)-s;
return{x:t,y:s,width:e,height:i}},e.draw=function(t){this.apply(t),this._pos(),this.shape.setTransform(this.transform),
this.pathShape.setShape("M"+this.start.x+","+this.start.y+" Q"+this.control.x+","+this.control.y+" "+this.end.x+","+this.end.y+" l0,0"),
this.labelShape.setShape({x:this.textPosition.x,y:this.textPosition.y,text:this.property("label")
}).setFill(this.property("fill")),this.zoom()},e.serialize=function(){var t=this.property("stroke");
return"<g "+this.writeCommonAttrs()+'><path style="stroke:'+t.color+";stroke-width:"+t.width+';fill:none;" d="M'+this.start.x+","+this.start.y+" Q"+this.control.x+","+this.control.y+" "+this.end.x+","+this.end.y+'" /><text style="fill:'+t.color+";text-anchor:"+this.textAlign+'" font-weight="bold" x="'+this.textPosition.x+'" y="'+this.textPosition.y+'">'+this.property("label")+"</text></g>";
},s.Annotation.register("Lead"),dojox.sketch.LeadAnnotation});