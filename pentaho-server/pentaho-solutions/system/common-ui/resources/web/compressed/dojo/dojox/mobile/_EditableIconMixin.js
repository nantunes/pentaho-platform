define(["dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/_base/window","dojo/dom-geometry","dojo/dom-style","dojo/touch","dijit/registry","./IconItem","./sniff","./viewRegistry","./_css3"],function(t,e,i,o,n,s,h,d,a,l,r,c,m,_){
return i("dojox.mobile._EditableIconMixin",null,{deleteIconForEdit:"mblDomButtonBlackCircleCross",
threshold:4,destroy:function(){this._blankItem&&this._blankItem.destroy(),this.inherited(arguments);
},startEdit:function(){if(this.editable&&!this.isEditing){this.isEditing=!0,this._handles||(this._handles=[this.connect(this.domNode,_.name("transitionStart"),"_onTransitionStart"),this.connect(this.domNode,_.name("transitionEnd"),"_onTransitionEnd")]);
var i=0;t.forEach(this.getChildren(),function(t){this.defer(function(){t.set("deleteIcon",this.deleteIconForEdit),
t.deleteIconNode&&(t._deleteHandle=this.connect(t.deleteIconNode,"onclick","_deleteIconClicked")),
t.highlight(0)},15*i++)},this),e.publish("/dojox/mobile/startEdit",[this]),this.onStartEdit();
}},endEdit:function(){this.isEditing&&(t.forEach(this.getChildren(),function(t){t.unhighlight(),
t._deleteHandle&&(this.disconnect(t._deleteHandle),t._deleteHandle=null),t.set("deleteIcon","");
},this),this._movingItem=null,this._handles&&(t.forEach(this._handles,this.disconnect,this),
this._handles=null),e.publish("/dojox/mobile/endEdit",[this]),this.onEndEdit(),this.isEditing=!1);
},scaleItem:function(t,e){d.set(t.domNode,_.add({},{transition:c("android")?"":_.name("transform",!0)+" .1s ease-in-out",
transform:1==e?"":"scale("+e+")"}))},_onTransitionStart:function(t){o.stop(t)},_onTransitionEnd:function(t){
o.stop(t);var e=l.getEnclosingWidget(t.target);e._moving=!1,d.set(e.domNode,_.name("transition"),"");
},_onTouchStart:function(t){this._blankItem||(this._blankItem=new r,this._blankItem.domNode.style.visibility="hidden",
this._blankItem._onClick=function(){});var e,i=this._movingItem=l.getEnclosingWidget(t.target),o=!1;
for(e=t.target;e!==i.domNode;e=e.parentNode)if(e===i.iconNode){o=!0;break}o&&(this._conn||(this._conn=[this.connect(this.domNode,a.move,"_onTouchMove"),this.connect(s.doc,a.release,"_onTouchEnd")]),
this._touchStartPosX=t.touches?t.touches[0].pageX:t.pageX,this._touchStartPosY=t.touches?t.touches[0].pageY:t.pageY,
this.isEditing?this._onDragStart(t):this._pressTimer=this.defer(function(){this.startEdit(),
this._onDragStart(t)},1e3))},_onDragStart:function(t){this._dragging=!0;var e=this._movingItem;
e.get("selected")&&e.set("selected",!1),this.scaleItem(e,1.1);var i=t.touches?t.touches[0].pageX:t.pageX,n=t.touches?t.touches[0].pageY:t.pageY,s=m.getEnclosingScrollable(e.domNode),a=0,l=0;
if(s){var r=s.getPos();a=r.x,l=r.y,o.stop(t)}var c=this._startPos=h.position(e.domNode,!0);
this._offsetPos={x:c.x-i-a,y:c.y-n-l},this._startIndex=this.getIndexOfChild(e),this.addChild(this._blankItem,this._startIndex),
this.moveChild(e,this.getChildren().length),d.set(e.domNode,{position:"absolute",
top:c.y-l+"px",left:c.x-a+"px",zIndex:100})},_onTouchMove:function(t){var e=t.touches?t.touches[0].pageX:t.pageX,i=t.touches?t.touches[0].pageY:t.pageY;
if(this._dragging)d.set(this._movingItem.domNode,{top:this._offsetPos.y+i+"px",left:this._offsetPos.x+e+"px"
}),this._detectOverlap({x:e,y:i}),o.stop(t);else{var n=Math.abs(this._touchStartPosX-e),s=Math.abs(this._touchStartPosY-i);
(n>this.threshold||s>this.threshold)&&this._clearPressTimer()}},_onTouchEnd:function(i){
if(this._clearPressTimer(),this._conn&&(t.forEach(this._conn,this.disconnect,this),
this._conn=null),this._dragging){this._dragging=!1;var o=this._movingItem;this.scaleItem(o,1),
d.set(o.domNode,{position:"",top:"",left:"",zIndex:""});var n=this._startIndex,s=this.getIndexOfChild(this._blankItem);
this.moveChild(o,s),this.removeChild(this._blankItem),e.publish("/dojox/mobile/moveIconItem",[this,o,n,s]),
this.onMoveItem(o,n,s)}},_clearPressTimer:function(){this._pressTimer&&(this._pressTimer.remove(),
this._pressTimer=null)},_detectOverlap:function(t){var e,i,o,n=this.getChildren(),s=this._blankItem,d=h.position(s.domNode,!0),a=this.getIndexOfChild(s),l=1;
if(!this._contains(t,d))for((t.y<d.y||t.y<=d.y+d.h&&t.x<d.x)&&(l=-1),e=a+l;e>=0&&e<n.length-1;e+=l)if(i=n[e],
!i._moving){if(o=h.position(i.domNode,!0),this._contains(t,o)){this.defer(function(){
this.moveChildWithAnimation(s,1==l?e+1:e)});break}if(1==l&&o.y>t.y||-1==l&&o.y+o.h<t.y)break;
}},_contains:function(t,e){return e.x<t.x&&t.x<e.x+e.w&&e.y<t.y&&t.y<e.y+e.h},_animate:function(t,e){
if(t!=e){var i,o=e>t?1:-1,s=this.getChildren(),h=[];for(i=t;i!=e;i+=o)h.push({t:s[i+o].domNode.offsetTop-s[i].domNode.offsetTop+"px",
l:s[i+o].domNode.offsetLeft-s[i].domNode.offsetLeft+"px"});for(i=t,j=0;i!=e;i+=o,
j++){var a=s[i];a._moving=!0,d.set(a.domNode,{top:h[j].t,left:h[j].l}),this.defer(n.hitch(a,function(){
d.set(this.domNode,_.add({top:"0px",left:"0px"},{transition:"top .3s ease-in-out, left .3s ease-in-out"
}))}),10*j)}}},removeChildWithAnimation:function(t){var e="number"==typeof t?t:this.getIndexOfChild(t);
this.removeChild(t),this._blankItem&&this.addChild(this._blankItem),this._animate(e,this.getChildren().length-1),
this._blankItem&&this.removeChild(this._blankItem)},moveChild:function(t,e){this.addChild(t,e),
this.paneContainerWidget.addChild(t.paneWidget,e)},moveChildWithAnimation:function(t,e){
var i=this.getIndexOfChild(this._blankItem);this.moveChild(t,e),this._animate(i,e);
},_deleteIconClicked:function(t){if(this.deleteIconClicked(t)!==!1){var e=l.getEnclosingWidget(t.target);
this.deleteItem(e)}},deleteIconClicked:function(){},deleteItem:function(t){t._deleteHandle&&this.disconnect(t._deleteHandle),
this.removeChildWithAnimation(t),e.publish("/dojox/mobile/deleteIconItem",[this,t]),
this.onDeleteItem(t),t.destroy()},onDeleteItem:function(t){},onMoveItem:function(t,e,i){},
onStartEdit:function(){},onEndEdit:function(){},_setEditableAttr:function(t){this._set("editable",t),
t&&!this._touchStartHandle?this._touchStartHandle=this.connect(this.domNode,a.press,"_onTouchStart"):!t&&this._touchStartHandle&&(this.disconnect(this._touchStartHandle),
this._touchStartHandle=null)}})});