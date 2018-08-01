define(["dojo","../util/oo","../defaults"],function(t,e,s){var i;return e.declare(function(e){
i=e.surface,this.canvas=e.canvas,this.undo=e.undo,this.mouse=e.mouse,this.keys=e.keys,
this.anchors=e.anchors,this.stencils={},this.selectedStencils={},this._mouseHandle=this.mouse.register(this),
t.connect(this.keys,"onArrow",this,"onArrow"),t.connect(this.keys,"onEsc",this,"deselect"),
t.connect(this.keys,"onDelete",this,"onDelete")},{_dragBegun:!1,_wasDragged:!1,_secondClick:!1,
_isBusy:!1,setRecentStencil:function(t){this.recent=t},getRecentStencil:function(){
return this.recent},register:function(t){return console.log("Selection.register ::::::",t.id),
t.isText&&!t.editMode&&t.deleteEmptyCreate&&!t.getText()?(console.warn("EMPTY CREATE DELETE",t),
t.destroy(),!1):(this.stencils[t.id]=t,this.setRecentStencil(t),t.execText&&(t._text&&!t.editMode&&(console.log("select text"),
this.selectItem(t)),t.connect("execText",this,function(){t.isText&&t.deleteEmptyModify&&!t.getText()?(console.warn("EMPTY MOD DELETE",t),
this.deleteItem(t)):t.selectOnExec&&this.selectItem(t)})),t.connect("deselect",this,function(){
!this._isBusy&&this.isSelected(t)&&this.deselectItem(t)}),t.connect("select",this,function(){
this._isBusy||this.isSelected(t)||this.selectItem(t)}),t)},unregister:function(t){
console.log("Selection.unregister ::::::",t.id,"sel:",t.selected),t&&(t.selected&&this.onDeselect(t),
delete this.stencils[t.id])},onArrow:function(t){this.hasSelected()&&(this.saveThrottledState(),
this.group.applyTransform({dx:t.x,dy:t.y}))},_throttleVrl:null,_throttle:!1,throttleTime:400,
_lastmxx:-1,_lastmxy:-1,saveMoveState:function(){var e=this.group.getTransform();(e.dx!=this._lastmxx||e.dy!=this._lastmxy)&&(this._lastmxx=e.dx,
this._lastmxy=e.dy,this.undo.add({before:t.hitch(this.group,"setTransform",e)}))},
saveThrottledState:function(){clearTimeout(this._throttleVrl),clearInterval(this._throttleVrl),
this._throttleVrl=setTimeout(t.hitch(this,function(){this._throttle=!1,this.saveMoveState();
}),this.throttleTime),this._throttle||(this._throttle=!0,this.saveMoveState())},unDelete:function(t){
console.log("unDelete:",t);for(var e in t)t[e].render(),this.onSelect(t[e])},onDelete:function(e){
console.log("Stencil onDelete",e),e!==!0&&this.undo.add({before:t.hitch(this,"unDelete",this.selectedStencils),
after:t.hitch(this,"onDelete",!0)}),this.withSelected(function(t){this.anchors.remove(t);
var e=t.id;console.log("delete:",t),t.destroy(),delete this.stencils[e]}),this.selectedStencils={};
},deleteItem:function(e){if(this.hasSelected()){var s=[];for(var i in this.selectedStencils)if(this.selectedStencils.id==e.id){
if(1==this.hasSelected())return void this.onDelete()}else s.push(this.selectedStencils.id);
this.deselect(),this.selectItem(e),this.onDelete(),t.forEach(s,function(t){this.selectItem(t);
},this)}else this.selectItem(e),this.onDelete()},removeAll:function(){this.selectAll(),
this._isBusy=!0,this.onDelete(),this.stencils={},this._isBusy=!1},setSelectionGroup:function(){
this.withSelected(function(t){this.onDeselect(t,!0)}),this.group&&(i.remove(this.group),
this.group.removeShape()),this.group=i.createGroup(),this.group.setTransform({dx:0,
dy:0}),this.withSelected(function(t){this.group.add(t.container),t.select()})},setConstraint:function(){
var t=1/0,e=1/0;this.withSelected(function(s){var i=s.getBounds();t=Math.min(i.y1,t),
e=Math.min(i.x1,e)}),this.constrain={l:-e,t:-t}},onDeselect:function(t,e){e||delete this.selectedStencils[t.id],
this.anchors.remove(t),i.add(t.container),t.selected&&t.deselect(),t.applyTransform(this.group.getTransform());
},deselectItem:function(t){this.onDeselect(t)},deselect:function(){this.withSelected(function(t){
this.onDeselect(t)}),this._dragBegun=!1,this._wasDragged=!1},onSelect:function(t){
t||console.error("null stencil is not selected:",this.stencils),this.selectedStencils[t.id]||(this.selectedStencils[t.id]=t,
this.group.add(t.container),t.select(),1==this.hasSelected()&&this.anchors.add(t,this.group));
},selectAll:function(){this._isBusy=!0;for(var t in this.stencils)this.selectItem(t);
this._isBusy=!1},selectItem:function(t){var e="string"==typeof t?t:t.id,s=this.stencils[e];
this.setSelectionGroup(),this.onSelect(s),this.group.moveToFront(),this.setConstraint();
},onLabelDoubleClick:function(t){console.info("mgr.onLabelDoubleClick:",t),this.selectedStencils[t.id]&&this.deselect();
},onStencilDoubleClick:function(t){if(console.info("mgr.onStencilDoubleClick:",t),
this.selectedStencils[t.id]&&this.selectedStencils[t.id].edit){console.info("Mgr Stencil Edit -> ",this.selectedStencils[t.id]);
var e=this.selectedStencils[t.id];e.editMode=!0,this.deselect(),e.edit()}},onAnchorUp:function(){
this.setConstraint()},onStencilDown:function(e,s){if(console.info(" >>> onStencilDown:",e.id,this.keys.meta),
this.stencils[e.id]){if(this.setRecentStencil(this.stencils[e.id]),this._isBusy=!0,
this.selectedStencils[e.id]&&this.keys.meta)return t.isMac&&this.keys.cmmd,console.log("    shift remove"),
this.onDeselect(this.selectedStencils[e.id]),1==this.hasSelected()&&this.withSelected(function(t){
this.anchors.add(t,this.group)}),this.group.moveToFront(),void this.setConstraint();
if(this.selectedStencils[e.id]){console.log("    clicked on selected");var i=this.group.getTransform();
return this._offx=e.x-i.dx,void(this._offy=e.y-i.dy)}this.keys.meta||(console.log("    deselect all"),
this.deselect()),console.log("    add stencil to selection"),this.selectItem(e.id),
i=this.group.getTransform(),this._offx=e.x-i.dx,this._offy=e.y-i.dx,this.orgx=e.x,
this.orgy=e.y,this._isBusy=!1,this.undo.add({before:function(){},after:function(){}
})}},onLabelDown:function(t,e){this.onStencilDown(t,e)},onStencilUp:function(t){},
onLabelUp:function(t){this.onStencilUp(t)},onStencilDrag:function(t){if(this._dragBegun){
this.saveThrottledState();var e=t.x-t.last.x,i=t.y-t.last.y,n=this.constrain,o=s.anchors.marginZero;
e=t.x-this._offx,i=t.y-this._offy,e<n.l+o&&(e=n.l+o),i<n.t+o&&(i=n.t+o),this.group.setTransform({
dx:e,dy:i})}else this.onBeginDrag(t),this._dragBegun=!0},onLabelDrag:function(t){
this.onStencilDrag(t)},onDragEnd:function(t){this._dragBegun=!1},onBeginDrag:function(t){
this._wasDragged=!0},onDown:function(t){this.deselect()},onStencilOver:function(e){
t.style(e.id,"cursor","move")},onStencilOut:function(e){t.style(e.id,"cursor","crosshair");
},exporter:function(){var t=[];for(var e in this.stencils)this.stencils[e].enabled&&t.push(this.stencils[e].exporter());
return t},listStencils:function(){return this.stencils},toSelected:function(t){var e=Array.prototype.slice.call(arguments).splice(1);
for(var s in this.selectedStencils){var i=this.selectedStencils[s];i[t].apply(i,e);
}},withSelected:function(e){var s=t.hitch(this,e);for(var i in this.selectedStencils)s(this.selectedStencils[i]);
},withUnselected:function(e){var s=t.hitch(this,e);for(var i in this.stencils)!this.stencils[i].selected&&s(this.stencils[i]);
},withStencils:function(e){var s=t.hitch(this,e);for(var i in this.stencils)s(this.stencils[i]);
},hasSelected:function(){var t=0;for(var e in this.selectedStencils)t++;return t},
isSelected:function(t){return!!this.selectedStencils[t.id]}})});