define(["dojo/_base/kernel","dojo/_base/lang","./Annotation","./Anchor"],function(t){
t.getObject("sketch",!0,dojox);var e=dojox.sketch;e.PreexistingAnnotation=function(t,i){
e.Annotation.call(this,t,i),this.transform={dx:0,dy:0},this.start={x:0,y:0},this.end={
x:200,y:200},this.radius=8,this.textPosition={x:196,y:196},this.textOffset=4,this.textAlign="end",
this.rectShape=null,this.labelShape=null,this.anchors.start=new e.Anchor(this,"start"),
this.anchors.end=new e.Anchor(this,"end")},e.PreexistingAnnotation.prototype=new e.Annotation;
var i=e.PreexistingAnnotation.prototype;return i.constructor=e.PreexistingAnnotation,
i.type=function(){return"Preexisting"},i.getType=function(){return e.PreexistingAnnotation;
},i._pos=function(){var t=Math.min(this.start.x,this.end.x),e=Math.min(this.start.y,this.end.y),i=Math.max(this.start.x,this.end.x),s=Math.max(this.start.y,this.end.y);
this.start={x:t,y:e},this.end={x:i,y:s},this.textPosition={x:this.end.x-this.textOffset,
y:this.end.y-this.textOffset}},i.apply=function(t){if(t){t.documentElement&&(t=t.documentElement),
this.readCommonAttrs(t);for(var e=0;e<t.childNodes.length;e++){var i=t.childNodes[e];
if("text"==i.localName)this.property("label",i.childNodes.length?i.childNodes[0].nodeValue:"");else if("rect"==i.localName){
null!==i.getAttribute("x")&&(this.start.x=parseFloat(i.getAttribute("x"),10)),null!==i.getAttribute("width")&&(this.end.x=parseFloat(i.getAttribute("width"),10)+parseFloat(i.getAttribute("x"),10)),
null!==i.getAttribute("y")&&(this.start.y=parseFloat(i.getAttribute("y"),10)),null!==i.getAttribute("height")&&(this.end.y=parseFloat(i.getAttribute("height"),10)+parseFloat(i.getAttribute("y"),10)),
null!==i.getAttribute("r")&&(this.radius=parseFloat(i.getAttribute("r"),10));var s=this.property("stroke"),h=i.getAttribute("style"),r=h.match(/stroke:([^;]+);/);
r&&(s.color=r[1],this.property("fill",r[1])),r=h.match(/stroke-width:([^;]+);/),r&&(s.width=r[1]),
this.property("stroke",s)}}}},i.initialize=function(t){this.apply(t),this._pos(),
this.shape=this.figure.group.createGroup(),this.shape.getEventSource().setAttribute("id",this.id),
this.rectShape=this.shape.createRect({x:this.start.x,y:this.start.y,width:this.end.x-this.start.x,
height:this.end.y-this.start.y,r:this.radius}).setFill([255,255,255,.1]),this.rectShape.getEventSource().setAttribute("shape-rendering","crispEdges"),
this.labelShape=this.shape.createText({x:this.textPosition.x,y:this.textPosition.y,
text:this.property("label"),align:this.textAlign}).setFill(this.property("fill")),
this.labelShape.getEventSource().setAttribute("id",this.id+"-labelShape"),this.draw();
},i.destroy=function(){this.shape&&(this.shape.remove(this.rectShape),this.shape.remove(this.labelShape),
this.figure.group.remove(this.shape),this.shape=this.rectShape=this.labelShape=null);
},i.getBBox=function(){var t=Math.min(this.start.x,this.end.x),e=Math.min(this.start.y,this.end.y),i=Math.max(this.start.x,this.end.x)-t,s=Math.max(this.start.y,this.end.y)-e;
return{x:t-2,y:e-2,width:i+4,height:s+4}},i.draw=function(t){this.apply(t),this._pos(),
this.shape.setTransform(this.transform),this.rectShape.setShape({x:this.start.x,y:this.start.y,
width:this.end.x-this.start.x,height:this.end.y-this.start.y,r:this.radius}).setFill([255,255,255,.1]),
this.labelShape.setShape({x:this.textPosition.x,y:this.textPosition.y,text:this.property("label")
}).setFill(this.property("fill")),this.zoom()},i.zoom=function(t){this.rectShape&&(t=t||this.figure.zoomFactor,
e.Annotation.prototype.zoom.call(this,t),t="vml"==dojox.gfx.renderer?1:t,this.rectShape.setStroke({
color:this.property("fill"),width:1/t}))},i.serialize=function(){var t=this.property("stroke");
return"<g "+this.writeCommonAttrs()+'><rect style="stroke:'+t.color+';stroke-width:1;fill:none;" x="'+this.start.x+'" width="'+(this.end.x-this.start.x)+'" y="'+this.start.y+'" height="'+(this.end.y-this.start.y)+'" rx="'+this.radius+'" ry="'+this.radius+'"  /><text style="fill:'+t.color+";text-anchor:"+this.textAlign+'" font-weight="bold" x="'+this.textPosition.x+'" y="'+this.textPosition.y+'">'+this.property("label")+"</text></g>";
},e.Annotation.register("Preexisting"),dojox.sketch.PreexistingAnnotation});