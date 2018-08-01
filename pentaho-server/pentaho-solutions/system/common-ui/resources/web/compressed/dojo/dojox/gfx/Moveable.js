define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/event","dojo/topic","dojo/touch","dojo/dom-class","dojo/_base/window","./Mover"],function(o,e,t,s,n,i,h,a,v){
return e("dojox.gfx.Moveable",null,{constructor:function(e,t){this.shape=e,this.delay=t&&t.delay>0?t.delay:0,
this.mover=t&&t.mover?t.mover:v,this.events=[this.shape.on(i.press,o.hitch(this,"onMouseDown"))];
},destroy:function(){t.forEach(this.events,function(o){o.remove()}),this.events=this.shape=null;
},onMouseDown:function(e){this.delay?(this.events.push(this.shape.on(i.move,o.hitch(this,"onMouseMove")),this.shape.on(i.release,o.hitch(this,"onMouseUp"))),
this._lastX=e.clientX,this._lastY=e.clientY):new this.mover(this.shape,e,this),s.stop(e);
},onMouseMove:function(o){var e=o.clientX,t=o.clientY;(Math.abs(e-this._lastX)>this.delay||Math.abs(t-this._lastY)>this.delay)&&(this.onMouseUp(o),
new this.mover(this.shape,o,this)),s.stop(o)},onMouseUp:function(o){this.events.pop().remove();
},onMoveStart:function(o){n.publish("/gfx/move/start",o),h.add(a.body(),"dojoMove");
},onMoveStop:function(o){n.publish("/gfx/move/stop",o),h.remove(a.body(),"dojoMove");
},onFirstMove:function(o){},onMove:function(o,e){this.onMoving(o,e),this.shape.applyLeftTransform(e),
this.onMoved(o,e)},onMoving:function(o,e){},onMoved:function(o,e){}})});