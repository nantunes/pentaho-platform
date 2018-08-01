define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/array","dojo/_base/connect","dojo/_base/event","dojo/_base/sniff","dojo/dom","dojo/dom-geometry","dojo/dom-style","dojo/_base/window"],function(t,o,s,e,n,i,h,a,r){
return o("dojox.mdnd.Moveable",null,{handle:null,skip:!0,dragDistance:3,constructor:function(t,o){
this.node=h.byId(o),this.d=this.node.ownerDocument,t||(t={}),this.handle=t.handle?h.byId(t.handle):null,
this.handle||(this.handle=this.node),this.skip=t.skip,this.events=[e.connect(this.handle,"onmousedown",this,"onMouseDown")],
dojox.mdnd.autoScroll&&(this.autoScroll=dojox.mdnd.autoScroll)},isFormElement:function(t){
var o=t.target;return 3==o.nodeType&&(o=o.parentNode)," a button textarea input select option ".indexOf(" "+o.tagName.toLowerCase()+" ")>=0;
},onMouseDown:function(o){if(!this._isDragging){var s=1==(o.which||o.button);s&&(this.skip&&this.isFormElement(o)||(this.autoScroll&&(this.autoScroll.setAutoScrollNode(this.node),
this.autoScroll.setAutoScrollMaxPage()),this.events.push(e.connect(this.d,"onmouseup",this,"onMouseUp")),
this.events.push(e.connect(this.d,"onmousemove",this,"onFirstMove")),this._selectStart=e.connect(t.body(),"onselectstart",n.stop),
this._firstX=o.clientX,this._firstY=o.clientY,n.stop(o)))}},onFirstMove:function(t){
n.stop(t);var o=(this._firstX-t.clientX)*(this._firstX-t.clientX)+(this._firstY-t.clientY)*(this._firstY-t.clientY);
o>this.dragDistance*this.dragDistance&&(this._isDragging=!0,e.disconnect(this.events.pop()),
r.set(this.node,"width",a.getContentBox(this.node).w+"px"),this.initOffsetDrag(t),
this.events.push(e.connect(this.d,"onmousemove",this,"onMove")))},initOffsetDrag:function(t){
this.offsetDrag={l:t.pageX,t:t.pageY};var o=(this.node.style,a.position(this.node,!0));
this.offsetDrag.l=o.x-this.offsetDrag.l,this.offsetDrag.t=o.y-this.offsetDrag.t;var s={
x:o.x,y:o.y};this.size={w:o.w,h:o.h},this.onDragStart(this.node,s,this.size)},onMove:function(t){
if(n.stop(t),!(8==i("ie")&&new Date-this.date<20)){this.autoScroll&&this.autoScroll.checkAutoScroll(t);
var o={x:this.offsetDrag.l+t.pageX,y:this.offsetDrag.t+t.pageY},s=this.node.style;
s.left=o.x+"px",s.top=o.y+"px",this.onDrag(this.node,o,this.size,{x:t.pageX,y:t.pageY
}),8==i("ie")&&(this.date=new Date)}},onMouseUp:function(t){this._isDragging&&(n.stop(t),
this._isDragging=!1,this.autoScroll&&this.autoScroll.stopAutoScroll(),delete this.onMove,
this.onDragEnd(this.node),this.node.focus()),e.disconnect(this.events.pop()),e.disconnect(this.events.pop());
},onDragStart:function(t,o,s){},onDragEnd:function(t){},onDrag:function(t,o,s,e){},
destroy:function(){s.forEach(this.events,e.disconnect),this.events=this.node=null;
}})});