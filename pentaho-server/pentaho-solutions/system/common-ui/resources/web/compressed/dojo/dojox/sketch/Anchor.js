define(["dojo/_base/kernel","dojo/_base/lang","../gfx"],function(t){return t.getObject("sketch",!0,dojox),
dojox.sketch.Anchor=function(t,e,i){var o=this,n=4,h=null;this.type=function(){return"Anchor";
},this.annotation=t,this.id=e,this._key="anchor-"+dojox.sketch.Anchor.count++,this.shape=null,
this.isControl=null!=i?i:!0,this.beginEdit=function(){this.annotation.beginEdit(dojox.sketch.CommandTypes.Modify);
},this.endEdit=function(){this.annotation.endEdit()},this.zoom=function(i){if(this.shape){
var o=Math.floor(n/i),h="vml"==dojox.gfx.renderer?1:1/i;this.shape.setShape({x:t[e].x-o,
y:t[e].y-o,width:2*o,height:2*o}).setStroke({color:"black",width:h})}},this.setBinding=function(i){
t[e]={x:t[e].x+i.dx,y:t[e].y+i.dy},t.draw(),t.drawBBox()},this.setUndo=function(){
t.setUndo()},this.enable=function(){t.shape&&(t.figure._add(this),h={x:t[e].x-n,y:t[e].y-n,
width:2*n,height:2*n},this.shape=t.shape.createRect(h).setFill([255,255,255,.35]),
this.shape.getEventSource().setAttribute("id",o._key),this.shape.getEventSource().setAttribute("shape-rendering","crispEdges"),
this.zoom(t.figure.zoomFactor))},this.disable=function(){t.figure._remove(this),t.shape&&t.shape.remove(this.shape),
this.shape=null,h=null}},dojox.sketch.Anchor.count=0,dojox.sketch.Anchor});