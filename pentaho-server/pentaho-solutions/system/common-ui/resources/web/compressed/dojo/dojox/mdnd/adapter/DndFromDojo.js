define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/connect","dojo/_base/array","dojo/dom-class","dojo/_base/window","dojox/mdnd/AreaManager","dojo/dnd/Manager"],function(e,a,r,n,t,o,i,d){
var s=a("dojox.mdnd.adapter.DndFromDojo",null,{dropIndicatorSize:{w:0,h:50},dropIndicatorSize:{
w:0,h:50},_areaManager:null,_dojoManager:null,_currentArea:null,_oldArea:null,_moveHandler:null,
_subscribeHandler:null,constructor:function(){this._areaManager=dojox.mdnd.areaManager(),
this._dojoManager=d.manager(),this._currentArea=null,this._moveHandler=null,this.subscribeDnd();
},subscribeDnd:function(){this._subscribeHandler=[r.subscribe("/dnd/start",this,"onDragStart"),r.subscribe("/dnd/drop/before",this,"onDrop"),r.subscribe("/dnd/cancel",this,"onDropCancel"),r.subscribe("/dnd/source/over",this,"onDndSource")];
},unsubscribeDnd:function(){n.forEach(this._subscribeHandler,r.unsubscribe)},_getHoverArea:function(e){
var a=e.x,r=e.y;this._oldArea=this._currentArea,this._currentArea=null;for(var n=this._areaManager._areaList,t=0;t<n.length;t++){
var o=n[t],i=o.coords.x,d=i+o.node.offsetWidth,s=o.coords.y,_=s+o.node.offsetHeight;
if(a>=i&&d>=a&&r>=s&&_>=r){this._areaManager._oldIndexArea=this._areaManager._currentIndexArea,
this._areaManager._currentIndexArea=t,this._currentArea=o.node;break}}this._currentArea!=this._oldArea&&(null==this._currentArea?this.onDragExit():null==this._oldArea?this.onDragEnter():(this.onDragExit(),
this.onDragEnter()))},onDragStart:function(a,n,t){this._dragNode=n[0],this._copy=t,
this._source=a,this._outSourceHandler=r.connect(this._dojoManager,"outSource",this,function(){
null==this._moveHandler&&(this._moveHandler=r.connect(e.doc,"mousemove",this,"onMouseMove"));
})},onMouseMove:function(e){var a={x:e.pageX,y:e.pageY};this._getHoverArea(a),this._currentArea&&this._areaManager._accept&&("hidden"==this._areaManager._dropIndicator.node.style.visibility&&(this._areaManager._dropIndicator.node.style.visibility="",
t.add(this._dojoManager.avatar.node,"dojoDndAvatarCanDrop")),this._areaManager.placeDropIndicator(a,this.dropIndicatorSize));
},onDragEnter:function(){var e=this._dragNode.getAttribute("dndType"),a=e?e.split(/\s*,\s*/):["text"];
this._areaManager._isAccepted(a,this._areaManager._areaList[this._areaManager._currentIndexArea].accept),
this._dojoManager.avatar&&(this._areaManager._accept?t.add(this._dojoManager.avatar.node,"dojoDndAvatarCanDrop"):t.remove(this._dojoManager.avatar.node,"dojoDndAvatarCanDrop"));
},onDragExit:function(){this._areaManager._accept=!1,this._dojoManager.avatar&&t.remove(this._dojoManager.avatar.node,"dojoDndAvatarCanDrop"),
null==this._currentArea?(this._areaManager._dropMode.refreshItems(this._areaManager._areaList[this._areaManager._oldIndexArea],this._areaManager._oldDropIndex,this.dropIndicatorSize,!1),
this._areaManager._resetAfterDrop()):this._areaManager._dropIndicator.remove()},isAccepted:function(e,a){
var r=e.getAttribute("dndType")?e.getAttribute("dndType"):"text";return r&&r in a?!0:!1;
},onDndSource:function(a){if(null!=this._currentArea)if(a){var n=!1;if(n=this._dojoManager.target==a?!0:this.isAccepted(this._dragNode,a.accept)){
r.disconnect(this._moveHandler),this._currentArea=this._moveHandler=null;var t=this._areaManager._dropIndicator.node;
t&&null!==t.parentNode&&1==t.parentNode.nodeType&&(t.style.visibility="hidden")}else this._resetAvatar();
}else this._moveHandler||(this._moveHandler=r.connect(e.doc,"mousemove",this,"onMouseMove")),
this._resetAvatar()},_resetAvatar:function(){this._dojoManager.avatar&&(this._areaManager._accept?t.add(this._dojoManager.avatar.node,"dojoDndAvatarCanDrop"):t.remove(this._dojoManager.avatar.node,"dojoDndAvatarCanDrop"));
},onDropCancel:function(){null==this._currentArea?(this._areaManager._resetAfterDrop(),
r.disconnect(this._moveHandler),r.disconnect(this._outSourceHandler),this._currentArea=this._moveHandler=this._outSourceHandler=null):this._areaManager._accept?this.onDrop(this._source,[this._dragNode],this._copy,this._currentArea):(this._currentArea=null,
r.disconnect(this._outSourceHandler),r.disconnect(this._moveHandler),this._moveHandler=this._outSourceHandler=null);
},onDrop:function(e,a,n){if(r.disconnect(this._moveHandler),r.disconnect(this._outSourceHandler),
this._moveHandler=this._outSourceHandler=null,this._currentArea){var t=this._areaManager._currentDropIndex;
r.publish("/dnd/drop/after",[e,a,n,this._currentArea,t]),this._currentArea=null}"hidden"==this._areaManager._dropIndicator.node.style.visibility&&(this._areaManager._dropIndicator.node.style.visibility=""),
this._areaManager._resetAfterDrop()}});return dojox.mdnd.adapter._dndFromDojo=null,
dojox.mdnd.adapter._dndFromDojo=new dojox.mdnd.adapter.DndFromDojo,s});