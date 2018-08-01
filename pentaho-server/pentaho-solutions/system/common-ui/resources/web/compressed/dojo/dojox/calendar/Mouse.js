define(["dojo/_base/array","dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/_base/window","dojo/dom-geometry","dojo/mouse","dojo/on","dojo/keys"],function(e,t,i,n,o,s,r,d,h){
return t("dojox.calendar.Mouse",null,{triggerExtent:3,postMixInProperties:function(){
this.inherited(arguments),this.on("rendererCreated",n.hitch(this,function(e){var t=e.renderer.renderer;
this.own(d(t.domNode,"click",n.hitch(this,function(e){i.stop(e),this._onItemClick({
triggerEvent:e,renderer:t,item:t.item._item})}))),this.own(d(t.domNode,"dblclick",n.hitch(this,function(e){
i.stop(e),this._onItemDoubleClick({triggerEvent:e,renderer:t,item:t.item._item})}))),
this.own(d(t.domNode,"contextmenu",n.hitch(this,function(e){this._onItemContextMenu({
triggerEvent:e,renderer:t,item:t.item._item})}))),t.resizeStartHandle&&this.own(d(t.resizeStartHandle,"mousedown",n.hitch(this,function(e){
this._onRendererHandleMouseDown(e,t,"resizeStart")}))),t.moveHandle&&this.own(d(t.moveHandle,"mousedown",n.hitch(this,function(e){
this._onRendererHandleMouseDown(e,t,"move")}))),t.resizeEndHandle&&this.own(d(t.resizeEndHandle,"mousedown",n.hitch(this,function(e){
this._onRendererHandleMouseDown(e,t,"resizeEnd")}))),this.own(d(t.domNode,"mousedown",n.hitch(this,function(e){
this._rendererMouseDownHandler(e,t)}))),this.own(d(e.renderer.container,r.enter,n.hitch(this,function(e){
t.item&&(this._editingGesture||(this._setHoveredItem(t.item.item,t),this._onItemRollOver(this.__fixEvt({
item:t.item._item,renderer:t,triggerEvent:e}))))}))),this.own(d(t.domNode,r.leave,n.hitch(this,function(e){
t.item&&(this._editingGesture||(this._setHoveredItem(null),this._onItemRollOut(this.__fixEvt({
item:t.item._item,renderer:t,triggerEvent:e}))))})))}))},_onItemRollOver:function(e){
this._dispatchCalendarEvt(e,"onItemRollOver")},onItemRollOver:function(e){},_onItemRollOut:function(e){
this._dispatchCalendarEvt(e,"onItemRollOut")},onItemRollOut:function(e){},_rendererMouseDownHandler:function(e,t){
i.stop(e);var n=t.item._item;this.selectFromEvent(e,n,t,!0),this._setTabIndexAttr&&this[this._setTabIndexAttr].focus();
},_onRendererHandleMouseDown:function(e,t,s){i.stop(e),this.showFocus=!1;var r=t.item,h=r.item;
this.isItemBeingEdited(h)||(this._isEditing&&this._endItemEditing("mouse",!1),this.selectFromEvent(e,t.item._item,t,!0),
this._setTabIndexAttr&&this[this._setTabIndexAttr].focus(),this._edProps={editKind:s,
editedItem:h,rendererKind:t.rendererKind,tempEditedItem:h,liveLayout:this.liveLayout
},this.set("focusedItem",this._edProps.editedItem));var m=[];m.push(d(o.doc,"mouseup",n.hitch(this,this._editingMouseUpHandler))),
m.push(d(o.doc,"mousemove",n.hitch(this,this._editingMouseMoveHandler)));var u=this._edProps;
u.handles=m,u.eventSource="mouse",u.editKind=s,this._startPoint={x:e.screenX,y:e.screenY
}},_editingMouseMoveHandler:function(e){var t=this._edProps;this._editingGesture?this._autoScroll(e.pageX,e.pageY,!0)||this._moveOrResizeItemGesture([this.getTime(e)],"mouse",e):(Math.abs(this._startPoint.x-e.screenX)>=this.triggerExtent||Math.abs(this._startPoint.y-e.screenY)>=this.triggerExtent)&&(this._isEditing||this._startItemEditing(t.editedItem,"mouse"),
t=this._edProps,this._startItemEditingGesture([this.getTime(e)],t.editKind,"mouse",e));
},_editingMouseUpHandler:function(t){var i=this._edProps;this._stopAutoScroll(),this._isEditing?(this._editingGesture&&this._endItemEditingGesture("mouse",t),
this._endItemEditing("mouse",!1)):e.forEach(i.handles,function(e){e.remove()})},_autoScroll:function(e,t,i){
if(!this.scrollable||!this.autoScroll)return!1;var n=s.position(this.scrollContainer,!0),o=i?t-n.y:e-n.x,r=i?n.h:n.w;
if(0>o||o>r){var d=Math.floor((0>o?o:o-r)/2)/3;return this._startAutoScroll(d),!0;
}return this._stopAutoScroll(),!1}})});