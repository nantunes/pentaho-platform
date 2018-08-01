define(["dojo","../util/oo","../defaults"],function(t,n,i){var o=n.declare(function(n){
this.defaults=i.copy(),this.mouse=n.mouse,this.point=n.point,this.pointIdx=n.pointIdx,
this.util=n.util,this.id=n.id||this.util.uid("anchor"),this.org=t.mixin({},this.point),
this.stencil=n.stencil,this.stencil.anchorPositionCheck&&(this.anchorPositionCheck=t.hitch(this.stencil,this.stencil.anchorPositionCheck)),
this.stencil.anchorConstrain&&(this.anchorConstrain=t.hitch(this.stencil,this.stencil.anchorConstrain)),
this._zCon=t.connect(this.mouse,"setZoom",this,"render"),this.render(),this.connectMouse();
},{y_anchor:null,x_anchor:null,render:function(){this.shape&&this.shape.removeShape();
var t=this.defaults.anchors,n=this.mouse.zoom,i=t.width*n,o=t.size*n,s=o/2,h={width:i,
style:t.style,color:t.color,cap:t.cap},e={x:this.point.x-s,y:this.point.y-s,width:o,
height:o};this.shape=this.stencil.container.createRect(e).setStroke(h).setFill(t.fill),
this.shape.setTransform({dx:0,dy:0}),this.util.attr(this,"drawingType","anchor"),
this.util.attr(this,"id",this.id)},onRenderStencil:function(t){},onTransformPoint:function(t){},
onAnchorDown:function(t){this.selected=t.id==this.id},onAnchorUp:function(t){this.selected=!1,
this.stencil.onTransformEnd(this)},onAnchorDrag:function(t){if(this.selected){var n,i,o,s,h=(this.shape.getTransform(),
this.shape.getParent().getParent().getTransform()),e=this.defaults.anchors.marginZero,r=h.dx+this.org.x,c=h.dy+this.org.y,a=t.x-r,d=t.y-c,l=this.defaults.anchors.minSize,u=this.anchorPositionCheck(a,d,this);
if(u.x<0)for(console.warn("X<0 Shift");this.anchorPositionCheck(a,d,this).x<0;)this.shape.getParent().getParent().applyTransform({
dx:2,dy:0});if(u.y<0)for(console.warn("Y<0 Shift");this.anchorPositionCheck(a,d,this).y<0;)this.shape.getParent().getParent().applyTransform({
dx:0,dy:2});this.y_anchor?this.org.y>this.y_anchor.org.y?(o=this.y_anchor.point.y+l-this.org.y,
s=1/0,o>d&&(d=o)):(o=-c+e,s=this.y_anchor.point.y-l-this.org.y,o>d?d=o:d>s&&(d=s)):(o=-c+e,
o>d&&(d=o)),this.x_anchor?this.org.x>this.x_anchor.org.x?(n=this.x_anchor.point.x+l-this.org.x,
i=1/0,n>a&&(a=n)):(n=-r+e,i=this.x_anchor.point.x-l-this.org.x,n>a?a=n:a>i&&(a=i)):(n=-r+e,
n>a&&(a=n));var f=this.anchorConstrain(a,d);null!=f&&(a=f.x,d=f.y),this.shape.setTransform({
dx:a,dy:d}),this.linkedAnchor&&this.linkedAnchor.shape.setTransform({dx:a,dy:d}),
this.onTransformPoint(this)}},anchorConstrain:function(t,n){return null},anchorPositionCheck:function(t,n,i){
return{x:1,y:1}},setPoint:function(t){this.shape.applyTransform(t)},connectMouse:function(){
this._mouseHandle=this.mouse.register(this)},disconnectMouse:function(){this.mouse.unregister(this._mouseHandle);
},reset:function(t){},destroy:function(){t.disconnect(this._zCon),this.disconnectMouse(),
this.shape.removeShape()}});return n.declare(function(t){this.mouse=t.mouse,this.undo=t.undo,
this.util=t.util,this.drawing=t.drawing,this.items={}},{onAddAnchor:function(t){},
onReset:function(t){var n=this.util.byId("drawing").stencils;n.onDeselect(t),n.onSelect(t);
},onRenderStencil:function(){for(var n in this.items)t.forEach(this.items[n].anchors,function(t){
t.shape.moveToFront()})},onTransformPoint:function(n){var i=this.items[n.stencil.id].anchors,o=this.items[n.stencil.id].item,s=[];
t.forEach(i,function(t,i){n.id==t.id||"group"!=n.stencil.anchorType||(n.org.y==t.org.y?t.setPoint({
dx:0,dy:n.shape.getTransform().dy-t.shape.getTransform().dy}):n.org.x==t.org.x&&t.setPoint({
dx:n.shape.getTransform().dx-t.shape.getTransform().dx,dy:0}),t.shape.moveToFront());
var o=t.shape.getTransform();s.push({x:o.dx+t.org.x,y:o.dy+t.org.y}),t.point.t&&(s[s.length-1].t=t.point.t);
},this),o.setPoints(s),o.onTransform(n),this.onRenderStencil()},onAnchorUp:function(t){},
onAnchorDown:function(t){},onAnchorDrag:function(t){},onChangeStyle:function(n){for(var i in this.items)t.forEach(this.items[i].anchors,function(t){
t.shape.moveToFront()})},add:function(n){if(this.items[n.id]={item:n,anchors:[]},
"none"!=n.anchorType){var i=n.points;if(t.forEach(i,function(i,s){if(!i.noAnchor){
(0==s||s==n.points.length-1)&&console.log("ITEM TYPE:",n.type,n.shortType);var h=new o({
stencil:n,point:i,pointIdx:s,mouse:this.mouse,util:this.util});this.items[n.id]._cons=[t.connect(h,"onRenderStencil",this,"onRenderStencil"),t.connect(h,"reset",this,"onReset"),t.connect(h,"onAnchorUp",this,"onAnchorUp"),t.connect(h,"onAnchorDown",this,"onAnchorDown"),t.connect(h,"onAnchorDrag",this,"onAnchorDrag"),t.connect(h,"onTransformPoint",this,"onTransformPoint"),t.connect(n,"onChangeStyle",this,"onChangeStyle")],
this.items[n.id].anchors.push(h),this.onAddAnchor(h)}},this),"path"==n.shortType){
var s=i[0],h=i[i.length-1],e=this.items[n.id].anchors;s.x==h.x&&s.y==h.y&&(console.warn("LINK ANVHROS",e[0],e[e.length-1]),
e[0].linkedAnchor=e[e.length-1],e[e.length-1].linkedAnchor=e[0])}"group"==n.anchorType&&t.forEach(this.items[n.id].anchors,function(i){
t.forEach(this.items[n.id].anchors,function(t){i.id!=t.id&&(i.org.y==t.org.y?i.x_anchor=t:i.org.x==t.org.x&&(i.y_anchor=t));
},this)},this)}},remove:function(n){this.items[n.id]&&(t.forEach(this.items[n.id].anchors,function(t){
t.destroy()}),t.forEach(this.items[n.id]._cons,t.disconnect,t),this.items[n.id].anchors=null,
delete this.items[n.id])}})});