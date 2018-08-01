define(["dojo","../util/oo","../defaults"],function(t,i,e){return i.declare(function(t){
this.util=t.util,this.keys=t.keys,this.id=t.id||this.util.uid("mouse"),this.currentNodeId="",
this.registered={}},{doublClickSpeed:400,_lastx:0,_lasty:0,__reg:0,_downOnCanvas:!1,
init:function(i){this.container=i,this.setCanvas();var e,s=!1;t.connect(this.container,"rightclick",this,function(t){
console.warn("RIGHTCLICK")}),t.connect(document.body,"mousedown",this,function(t){}),
t.connect(this.container,"mousedown",this,function(i){this.down(i),i.button!=t.mouseButtons.RIGHT&&(s=!0,
e=t.connect(document,"mousemove",this,"drag"))}),t.connect(document,"mouseup",this,function(i){
t.disconnect(e),s=!1,this.up(i)}),t.connect(document,"mousemove",this,function(t){
s||this.move(t)}),t.connect(this.keys,"onEsc",this,function(t){this._dragged=!1});
},setCanvas:function(){var i=t.position(this.container.parentNode);this.origin=t.clone(i);
},scrollOffset:function(){return{top:this.container.parentNode.scrollTop,left:this.container.parentNode.scrollLeft
}},resize:function(t,i){this.origin&&(this.origin.w=t,this.origin.h=i)},register:function(t){
var i=t.id||"reg_"+this.__reg++;return this.registered[i]||(this.registered[i]=t),
i},unregister:function(t){this.registered[t]&&delete this.registered[t]},_broadcastEvent:function(t,i){
for(var e in this.registered)this.registered[e][t]&&this.registered[e][t](i)},onDown:function(t){
this._broadcastEvent(this.eventName("down"),t)},onDrag:function(t){var i=this.eventName("drag");
this._selected&&"onDrag"==i&&(i="onStencilDrag"),this._broadcastEvent(i,t)},onMove:function(t){
this._broadcastEvent("onMove",t)},overName:function(t,i){var s=t.id.split(".");return i=i.charAt(0).toUpperCase()+i.substring(1),
"dojox"!=s[0]||!e.clickable&&e.clickMode?"on"+i:"onStencil"+i},onOver:function(t){
this._broadcastEvent(this.overName(t,"over"),t)},onOut:function(t){this._broadcastEvent(this.overName(t,"out"),t);
},onUp:function(t){var i=this.eventName("up");if("onStencilUp"==i?this._selected=!0:this._selected&&"onUp"==i&&(i="onStencilUp",
this._selected=!1),console.info("Up Event:",this.id,i,"id:",t.id),this._broadcastEvent(i,t),
"silverlight"!=dojox.gfx.renderer){if(this._clickTime=(new Date).getTime(),this._lastClickTime&&this._clickTime-this._lastClickTime<this.doublClickSpeed){
var e=this.eventName("doubleClick");console.warn("DOUBLE CLICK",e,t),this._broadcastEvent(e,t);
}this._lastClickTime=this._clickTime}},zoom:1,setZoom:function(t){this.zoom=1/t},
setEventMode:function(t){this.mode=t?"on"+t.charAt(0).toUpperCase()+t.substring(1):"";
},eventName:function(t){if(t=t.charAt(0).toUpperCase()+t.substring(1),this.mode)return"onPathEdit"==this.mode?"on"+t:("onUI"==this.mode,
this.mode+t);if(!e.clickable&&e.clickMode)return"on"+t;var i=this.drawingType&&"surface"!=this.drawingType&&"canvas"!=this.drawingType?this.drawingType:"",s=i?i.charAt(0).toUpperCase()+i.substring(1):"";
return"on"+s+t},up:function(t){this.onUp(this.create(t))},down:function(i){this._downOnCanvas=!0;
var e=this.scrollOffset(),s=this._getXY(i);this._lastpagex=s.x,this._lastpagey=s.y;
var n=this.origin,o=s.x-n.x+e.left,r=s.y-n.y+e.top,a=o>=0&&r>=0&&o<=n.w&&r<=n.h;o*=this.zoom,
r*=this.zoom,n.startx=o,n.starty=r,this._lastx=o,this._lasty=r,this.drawingType=this.util.attr(i,"drawingType")||"";
var h=this._getId(i);i.button==t.mouseButtons.RIGHT&&"mse"==this.id||(i.preventDefault(),
t.stopEvent(i)),this.onDown({mid:this.id,x:o,y:r,pageX:s.x,pageY:s.y,withinCanvas:a,
id:h})},over:function(t){this.onOver(t)},out:function(t){this.onOut(t)},move:function(t){
var i=this.create(t);if("MUI"==this.id,i.id!=this.currentNodeId){var e={};for(var s in i)e[s]=i[s];
e.id=this.currentNodeId,this.currentNodeId&&this.out(e),i.id&&this.over(i),this.currentNodeId=i.id;
}this.onMove(i)},drag:function(t){this.onDrag(this.create(t,!0))},create:function(i,e){
var s=this.scrollOffset(),n=this._getXY(i),o=n.x,r=n.y,a=this.origin,h=n.x-a.x+s.left,c=n.y-a.y+s.top,d=h>=0&&c>=0&&h<=a.w&&c<=a.h;
h*=this.zoom,c*=this.zoom;var u=d?this._getId(i,e):"",l={mid:this.id,x:h,y:c,pageX:n.x,
pageY:n.y,page:{x:n.x,y:n.y},orgX:a.x,orgY:a.y,last:{x:this._lastx,y:this._lasty},
start:{x:this.origin.startx,y:this.origin.starty},move:{x:o-this._lastpagex,y:r-this._lastpagey
},scroll:s,id:u,withinCanvas:d};return this._lastx=h,this._lasty=c,this._lastpagex=o,
this._lastpagey=r,t.stopEvent(i),l},_getId:function(t,i){return this.util.attr(t,"id",null,i);
},_getXY:function(t){return{x:t.pageX,y:t.pageY}},setCursor:function(i,e){e?t.style(e,"cursor",i):t.style(this.container,"cursor",i);
}})});