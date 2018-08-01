define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/connect","dojo/_base/array","dojo/dom-class","dojo/dom-style","dojo/dom-geometry","dojo/topic","dojo/_base/window","dojox/mdnd/PureSource","dojox/mdnd/LazyManager"],function(o,e,d,n,r,t,a,i,s){
var _=e("dojox.mdnd.adapter.DndToDojo",null,{_dojoList:null,_currentDojoArea:null,
_dojoxManager:null,_dragStartHandler:null,_dropHandler:null,_moveHandler:null,_moveUpHandler:null,
_draggedNode:null,constructor:function(){this._dojoList=[],this._currentDojoArea=null,
this._dojoxManager=dojox.mdnd.areaManager(),this._dragStartHandler=d.subscribe("/dojox/mdnd/drag/start",this,function(e,n,r){
this._draggedNode=e,this._moveHandler=d.connect(o.doc,"onmousemove",this,"onMouseMove");
}),this._dropHandler=d.subscribe("/dojox/mdnd/drop",this,function(o,e,n){this._currentDojoArea&&d.publish("/dojox/mdnd/adapter/dndToDojo/cancel",[this._currentDojoArea.node,this._currentDojoArea.type,this._draggedNode,this.accept]),
this._draggedNode=null,this._currentDojoArea=null,d.disconnect(this._moveHandler);
})},_getIndexDojoArea:function(o){if(o)for(var e=0,d=this._dojoList.length;d>e;e++)if(this._dojoList[e].node===o)return e;
return-1},_initCoordinates:function(o){if(o){var e=a.position(o,!0),d={};return d.x=e.x,
d.y=e.y,d.x1=e.x+e.w,d.y1=e.y+e.h,d}return null},register:function(o,e,d){if(-1==this._getIndexDojoArea(o)){
var n=this._initCoordinates(o),r={node:o,type:e,dojo:d?d:!1,coords:n};this._dojoList.push(r),
d&&!this._lazyManager&&(this._lazyManager=new dojox.mdnd.LazyManager)}},unregisterByNode:function(o){
var e=this._getIndexDojoArea(o);-1!=e&&this._dojoList.splice(e,1)},unregisterByType:function(o){
if(o){var e=[];n.forEach(this._dojoList,function(d,n){d.type!=o&&e.push(d)}),this._dojoList=e;
}},unregister:function(){this._dojoList=[]},refresh:function(){var o=this._dojoList;
this.unregister(),n.forEach(o,function(o){o.coords=this._initCoordinates(o.node)},this),
this._dojoList=o},refreshByType:function(o){var e=this._dojoList;this.unregister(),
n.forEach(e,function(e){e.type==o&&(e.coords=this._initCoordinates(e.node))},this),
this._dojoList=e},_getHoverDojoArea:function(o){this._oldDojoArea=this._currentDojoArea,
this._currentDojoArea=null;for(var e=o.x,d=o.y,n=this._dojoList.length,r=0;n>r;r++){
var t=this._dojoList[r],a=t.coords;if(a.x<=e&&e<=a.x1&&a.y<=d&&d<=a.y1){this._currentDojoArea=t;
break}}},onMouseMove:function(o){var e={x:o.pageX,y:o.pageY};this._getHoverDojoArea(e),
this._currentDojoArea!=this._oldDojoArea&&(null==this._currentDojoArea?this.onDragExit(o):null==this._oldDojoArea?this.onDragEnter(o):(this.onDragExit(o),
this.onDragEnter(o)))},isAccepted:function(o,e){return!0},onDragEnter:function(e){
if(this._currentDojoArea.dojo){d.disconnect(this._dojoxManager._dragItem.handlers.pop()),
d.disconnect(this._dojoxManager._dragItem.handlers.pop()),d.disconnect(this._dojoxManager._dragItem.item.events.pop()),
s.body().removeChild(this._dojoxManager._cover),s.body().removeChild(this._dojoxManager._cover2);
var n=this._dojoxManager._dragItem.item.node;dojox.mdnd.adapter._dndFromDojo&&dojox.mdnd.adapter._dndFromDojo.unsubscribeDnd(),
t.set(n,{position:"relative",top:"0",left:"0"}),this._lazyManager.startDrag(e,n);var r=d.connect(this._lazyManager.manager,"overSource",this,function(){
d.disconnect(r),this._lazyManager.manager.canDropFlag&&(this._dojoxManager._dropIndicator.node.style.display="none");
});this.cancelHandler=d.subscribe("/dnd/cancel",this,function(){var o=this._dojoxManager._dragItem.item;
o.events=[d.connect(o.handle,"onmousedown",o,"onMouseDown")],s.body().appendChild(this._dojoxManager._cover),
s.body().appendChild(this._dojoxManager._cover2),this._dojoxManager._cover.appendChild(o.node);
var e=this._dojoxManager._areaList[this._dojoxManager._sourceIndexArea],n=this._dojoxManager._sourceDropIndex,r=null;
n!=e.items.length&&-1!=n&&(r=e.items[this._dojoxManager._sourceDropIndex].item.node),
"none"==this._dojoxManager._dropIndicator.node.style.display&&""==this._dojoxManager._dropIndicator.node.style.display,
this._dojoxManager._dragItem.handlers.push(d.connect(this._dojoxManager._dragItem.item,"onDrag",this._dojoxManager,"onDrag")),
this._dojoxManager._dragItem.handlers.push(d.connect(this._dojoxManager._dragItem.item,"onDragEnd",this._dojoxManager,"onDrop")),
this._draggedNode.style.display="",this._dojoxManager.onDrop(this._draggedNode),d.unsubscribe(this.cancelHandler),
d.unsubscribe(this.dropHandler),dojox.mdnd.adapter._dndFromDojo&&dojox.mdnd.adapter._dndFromDojo.subscribeDnd();
}),this.dropHandler=d.subscribe("/dnd/drop/before",this,function(o){d.unsubscribe(this.cancelHandler),
d.unsubscribe(this.dropHandler),this.onDrop()})}else this.accept=this.isAccepted(this._dojoxManager._dragItem.item.node,this._currentDojoArea),
this.accept&&(d.disconnect(this._dojoxManager._dragItem.handlers.pop()),d.disconnect(this._dojoxManager._dragItem.handlers.pop()),
this._dojoxManager._dropIndicator.node.style.display="none",this._moveUpHandler||(this._moveUpHandler=d.connect(o.doc,"onmouseup",this,"onDrop")));
d.publish("/dojox/mdnd/adapter/dndToDojo/over",[this._currentDojoArea.node,this._currentDojoArea.type,this._draggedNode,this.accept]);
},onDragExit:function(o){if(this._oldDojoArea.dojo){d.unsubscribe(this.cancelHandler),
d.unsubscribe(this.dropHandler);var e=this._dojoxManager._dragItem.item;this._dojoxManager._dragItem.item.events.push(d.connect(e.node.ownerDocument,"onmousemove",e,"onMove")),
s.body().appendChild(this._dojoxManager._cover),s.body().appendChild(this._dojoxManager._cover2),
this._dojoxManager._cover.appendChild(e.node);var n=e.node.style;n.position="absolute",
n.left=e.offsetDrag.l+o.pageX+"px",n.top=e.offsetDrag.t+o.pageX+"px",n.display="",
this._lazyManager.cancelDrag(),dojox.mdnd.adapter._dndFromDojo&&dojox.mdnd.adapter._dndFromDojo.subscribeDnd(),
"none"==this._dojoxManager._dropIndicator.node.style.display&&(this._dojoxManager._dropIndicator.node.style.display=""),
this._dojoxManager._dragItem.handlers.push(d.connect(this._dojoxManager._dragItem.item,"onDrag",this._dojoxManager,"onDrag")),
this._dojoxManager._dragItem.handlers.push(d.connect(this._dojoxManager._dragItem.item,"onDragEnd",this._dojoxManager,"onDrop")),
this._dojoxManager._dragItem.item.onMove(o)}else this.accept&&(this._moveUpHandler&&(d.disconnect(this._moveUpHandler),
this._moveUpHandler=null),"none"==this._dojoxManager._dropIndicator.node.style.display&&(this._dojoxManager._dropIndicator.node.style.display=""),
this._dojoxManager._dragItem.handlers.push(d.connect(this._dojoxManager._dragItem.item,"onDrag",this._dojoxManager,"onDrag")),
this._dojoxManager._dragItem.handlers.push(d.connect(this._dojoxManager._dragItem.item,"onDragEnd",this._dojoxManager,"onDrop")),
this._dojoxManager._dragItem.item.onMove(o));d.publish("/dojox/mdnd/adapter/dndToDojo/out",[this._oldDojoArea.node,this._oldDojoArea.type,this._draggedNode,this.accept]);
},onDrop:function(o){this._currentDojoArea.dojo&&dojox.mdnd.adapter._dndFromDojo&&dojox.mdnd.adapter._dndFromDojo.subscribeDnd(),
"none"==this._dojoxManager._dropIndicator.node.style.display&&(this._dojoxManager._dropIndicator.node.style.display=""),
this._dojoxManager._cover.parentNode&&1==this._dojoxManager._cover.parentNode.nodeType&&(s.body().removeChild(this._dojoxManager._cover),
s.body().removeChild(this._dojoxManager._cover2)),this._draggedNode.parentNode==this._dojoxManager._cover&&this._dojoxManager._cover.removeChild(this._draggedNode),
d.disconnect(this._moveHandler),d.disconnect(this._moveUpHandler),this._moveHandler=this._moveUpHandler=null,
d.publish("/dojox/mdnd/adapter/dndToDojo/drop",[this._draggedNode,this._currentDojoArea.node,this._currentDojoArea.type]),
r.remove(this._draggedNode,"dragNode");var e=this._draggedNode.style;e.position="relative",
e.left="0",e.top="0",e.width="auto",n.forEach(this._dojoxManager._dragItem.handlers,d.disconnect),
this._dojoxManager._deleteMoveableItem(this._dojoxManager._dragItem),this._draggedNode=null,
this._currentDojoArea=null,this._dojoxManager._resetAfterDrop()}});return dojox.mdnd.adapter._dndToDojo=null,
dojox.mdnd.adapter.dndToDojo=function(){return dojox.mdnd.adapter._dndToDojo||(dojox.mdnd.adapter._dndToDojo=new dojox.mdnd.adapter.DndToDojo),
dojox.mdnd.adapter._dndToDojo},_});