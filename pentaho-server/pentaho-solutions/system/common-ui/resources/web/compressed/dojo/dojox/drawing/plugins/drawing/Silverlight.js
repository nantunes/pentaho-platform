dojo.provide("dojox.drawing.plugins.drawing.Silverlight"),dojox.drawing.plugins.drawing.Silverlight=dojox.drawing.util.oo.declare(function(t){
"silverlight"==dojox.gfx.renderer&&(this.mouse=t.mouse,this.stencils=t.stencils,this.anchors=t.anchors,
this.canvas=t.canvas,this.util=t.util,dojo.connect(this.stencils,"register",this,function(t){
var i,o,n,e,s,r=this,c=function(){i=t.container.connect("onmousedown",function(i){
i.superTarget=t,r.mouse.down(i)})};c(),o=dojo.connect(t,"setTransform",this,function(){}),
n=dojo.connect(t,"onBeforeRender",function(){}),e=dojo.connect(t,"onRender",this,function(){}),
s=dojo.connect(t,"destroy",this,function(){dojo.forEach([i,o,n,e,s],dojo.disconnect,dojo);
})}),dojo.connect(this.anchors,"onAddAnchor",this,function(t){var i=t.shape.connect("onmousedown",this.mouse,function(i){
i.superTarget=t,this.down(i)}),o=dojo.connect(t,"disconnectMouse",this,function(){
dojo.disconnect(i),dojo.disconnect(o)})}),this.mouse._down=function(t){var i=this._getXY(t),o=i.x-this.origin.x,n=i.y-this.origin.y;
o*=this.zoom,n*=this.zoom,this.origin.startx=o,this.origin.starty=n,this._lastx=o,
this._lasty=n,this.drawingType=this.util.attr(t,"drawingType")||"";var e=this._getId(t),s={
x:o,y:n,id:e};if(console.log(" > > > id:",e,"drawingType:",this.drawingType,"evt:",t),
this.onDown(s),this._clickTime=(new Date).getTime(),this._lastClickTime&&this._clickTime-this._lastClickTime<this.doublClickSpeed){
var r=this.eventName("doubleClick");console.warn("DOUBLE CLICK",r,s),this._broadcastEvent(r,s);
}this._lastClickTime=this._clickTime},this.mouse.down=function(t){return clearTimeout(this.__downInv),
"surface"==this.util.attr(t,"drawingType")?void(this.__downInv=setTimeout(dojo.hitch(this,function(){
this._down(t)}),500)):void this._down(t)},this.mouse._getXY=function(t){if(t.pageX)return{
x:t.pageX,y:t.pageY,cancelBubble:!0};console.log("EVT",t);for(var i in t);return console.log("EVTX",t.x),
void 0!==t.x?{x:t.x+this.origin.x,y:t.y+this.origin.y}:{x:t.pageX,y:t.pageY}},this.mouse._getId=function(t){
return this.util.attr(t,"id")},this.util.attr=function(t,i,o,n){if(!t)return!1;try{
var e;if(e=t.superTarget?t.superTarget:t.superClass?t.superClass:t.target?t.target:t,
void 0!==o)return t[i]=o,o;if(e.tagName){if("drawingType"==i&&"object"==e.tagName.toLowerCase())return"surface";
var s=dojo.attr(e,i)}var s=e[i];return s}catch(r){return!1}})},{});