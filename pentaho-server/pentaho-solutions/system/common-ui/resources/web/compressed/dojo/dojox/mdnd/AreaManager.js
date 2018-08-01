define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/connect","dojo/_base/window","dojo/_base/array","dojo/_base/sniff","dojo/_base/lang","dojo/query","dojo/topic","dojo/dom-class","dojo/dom-geometry","dojo/dom-construct","dijit/registry","dijit/_Widget","./Moveable"],function(e,t,r,i,n,s,o,a,d,h,c,_,l,p,u){
var g=t("dojox.mdnd.AreaManager",null,{autoRefresh:!0,areaClass:"dojoxDndArea",dragHandleClass:"dojoxDragHandle",
constructor:function(){this._areaList=[],this.resizeHandler=r.connect(e.global,"onresize",this,function(){
this._dropMode.updateAreas(this._areaList)}),this._oldIndexArea=this._currentIndexArea=this._oldDropIndex=this._currentDropIndex=this._sourceIndexArea=this._sourceDropIndex=-1;
},init:function(){this.registerByClass()},registerByNode:function(e,t){var i=this._getIndexArea(e);
if(e&&-1==i){var s=e.getAttribute("accept"),o=s?s.split(/\s*,\s*/):["text"],a={node:e,
items:[],coords:{},margin:null,accept:o,initItems:!1};n.forEach(this._getChildren(e),function(e){
this._setMarginArea(a,e),a.items.push(this._addMoveableItem(e))},this),this._areaList=this._dropMode.addArea(this._areaList,a),
t||this._dropMode.updateAreas(this._areaList),r.publish("/dojox/mdnd/manager/register",[e]);
}},registerByClass:function(){a("."+this.areaClass).forEach(function(e){this.registerByNode(e,!0);
},this),this._dropMode.updateAreas(this._areaList)},unregister:function(e){var t=this._getIndexArea(e);
return-1!=t?(n.forEach(this._areaList[t].items,function(e){this._deleteMoveableItem(e);
},this),this._areaList.splice(t,1),this._dropMode.updateAreas(this._areaList),!0):!1;
},_addMoveableItem:function(e){e.setAttribute("tabIndex","0");var t=this._searchDragHandle(e),i=new u({
handle:t,skip:!0},e);h.add(t||e,"dragHandle");var n=e.getAttribute("dndType"),s={
item:i,type:n?n.split(/\s*,\s*/):["text"],handlers:[r.connect(i,"onDragStart",this,"onDragStart")]
};if(l&&l.byNode){var o=l.byNode(e);o&&(s.type=o.dndType?o.dndType.split(/\s*,\s*/):["text"],
s.handlers.push(r.connect(o,"uninitialize",this,function(){this.removeDragItem(e.parentNode,i.node);
})))}return s},_deleteMoveableItem:function(e){n.forEach(e.handlers,function(e){r.disconnect(e);
});var t=e.item.node,i=this._searchDragHandle(t);h.remove(i||t,"dragHandle"),e.item.destroy();
},_getIndexArea:function(e){if(e)for(var t=0;t<this._areaList.length;t++)if(this._areaList[t].node===e)return t;
return-1},_searchDragHandle:function(e){if(e){var t=this.dragHandleClass.split(" "),r=t.length,i="";
return n.forEach(t,function(e,t){i+="."+e,t!=r-1&&(i+=", ")}),a(i,e)[0]}},addDragItem:function(e,t,r,i){
var n=!0;if(i||(n=e&&t&&(null===t.parentNode||t.parentNode&&1!==t.parentNode.nodeType)),
n){var s=this._getIndexArea(e);if(-1!==s){var o=this._addMoveableItem(t),a=this._areaList[s].items;
if(r>=0&&r<a.length){var d=a.slice(0,r),h=a.slice(r,a.length);d[d.length]=o,this._areaList[s].items=d.concat(h),
e.insertBefore(t,a[r].item.node)}else this._areaList[s].items.push(o),e.appendChild(t);
return this._setMarginArea(this._areaList[s],t),this._areaList[s].initItems=!1,!0;
}}return!1},removeDragItem:function(e,t){var r=this._getIndexArea(e);if(e&&-1!==r)for(var i=this._areaList[r].items,n=0;n<i.length;n++)if(i[n].item.node===t)return this._deleteMoveableItem(i[n]),
i.splice(n,1),e.removeChild(t);return null},_getChildren:function(e){var t=[];return n.forEach(e.childNodes,function(e){
if(1==e.nodeType)if(l&&l.byNode){var r=l.byNode(e);r?r.dragRestriction||t.push(e):t.push(e);
}else t.push(e)}),t},_setMarginArea:function(e,t){e&&null===e.margin&&t&&(e.margin=c.getMarginExtents(t));
},findCurrentIndexArea:function(e,t){return this._oldIndexArea=this._currentIndexArea,
this._currentIndexArea=this._dropMode.getTargetArea(this._areaList,e,this._currentIndexArea),
this._currentIndexArea!=this._oldIndexArea&&(-1!=this._oldIndexArea&&this.onDragExit(e,t),
-1!=this._currentIndexArea&&this.onDragEnter(e,t)),this._currentIndexArea},_isAccepted:function(e,t){
this._accept=!1;for(var r=0;r<t.length;++r)for(var i=0;i<e.length;++i)if(e[i]==t[r]){
this._accept=!0;break}},onDragStart:function(t,i,n){this.autoRefresh&&this._dropMode.updateAreas(this._areaList);
var a=s("webkit")?e.body():e.body().parentNode;this._cover||(this._cover=_.create("div",{
"class":"dndCover"}),this._cover2=o.clone(this._cover),h.add(this._cover2,"dndCover2"));
var d=a.scrollHeight+"px";this._cover.style.height=this._cover2.style.height=d,e.body().appendChild(this._cover),
e.body().appendChild(this._cover2),this._dragStartHandler=r.connect(t.ownerDocument,"ondragstart",e,"stopEvent"),
this._sourceIndexArea=this._lastValidIndexArea=this._currentIndexArea=this._getIndexArea(t.parentNode);
for(var c=this._areaList[this._sourceIndexArea],l=c.items,p=0;p<l.length;p++)if(l[p].item.node==t){
this._dragItem=l[p],this._dragItem.handlers.push(r.connect(this._dragItem.item,"onDrag",this,"onDrag")),
this._dragItem.handlers.push(r.connect(this._dragItem.item,"onDragEnd",this,"onDrop")),
l.splice(p,1),this._currentDropIndex=this._sourceDropIndex=p;break}var u=null;this._sourceDropIndex!==c.items.length&&(u=c.items[this._sourceDropIndex].item.node),
s("ie")>7&&(this._eventsIE7=[r.connect(this._cover,"onmouseover",e,"stopEvent"),r.connect(this._cover,"onmouseout",e,"stopEvent"),r.connect(this._cover,"onmouseenter",e,"stopEvent"),r.connect(this._cover,"onmouseleave",e,"stopEvent")]);
var g=t.style;g.left=i.x+"px",g.top=i.y+"px",("relative"==g.position||""==g.position)&&(g.position="absolute"),
this._cover.appendChild(t),this._dropIndicator.place(c.node,u,n),h.add(t,"dragNode"),
this._accept=!0,r.publish("/dojox/mdnd/drag/start",[t,c,this._sourceDropIndex])},
onDragEnter:function(e,t){this._currentIndexArea===this._sourceIndexArea?this._accept=!0:this._isAccepted(this._dragItem.type,this._areaList[this._currentIndexArea].accept);
},onDragExit:function(e,t){this._accept=!1},onDrag:function(e,t,r,i){var n=this._dropMode.getDragPoint(t,r,i);
this.findCurrentIndexArea(n,r),-1!==this._currentIndexArea&&this._accept&&this.placeDropIndicator(n,r);
},placeDropIndicator:function(e,t){this._oldDropIndex=this._currentDropIndex;var r=this._areaList[this._currentIndexArea];
return r.initItems||this._dropMode.initItems(r),this._currentDropIndex=this._dropMode.getDropIndex(r,e),
(this._currentIndexArea!==this._oldIndexArea||this._oldDropIndex!==this._currentDropIndex)&&this._placeDropIndicator(t),
this._currentDropIndex},_placeDropIndicator:function(e){var t=this._areaList[this._lastValidIndexArea],r=this._areaList[this._currentIndexArea];
this._dropMode.refreshItems(t,this._oldDropIndex,e,!1);var i=null;-1!=this._currentDropIndex&&(i=r.items[this._currentDropIndex].item.node),
this._dropIndicator.place(r.node,i),this._lastValidIndexArea=this._currentIndexArea,
this._dropMode.refreshItems(r,this._currentDropIndex,e,!0)},onDropCancel:function(){
if(!this._accept){var e=this._getIndexArea(this._dropIndicator.node.parentNode);-1!=e?this._currentIndexArea=e:this._currentIndexArea=0;
}},onDrop:function(t){this.onDropCancel();var i=this._areaList[this._currentIndexArea];
h.remove(t,"dragNode");var s=t.style;s.position="relative",s.left="0",s.top="0",s.width="auto",
i.node==this._dropIndicator.node.parentNode?i.node.insertBefore(t,this._dropIndicator.node):(i.node.appendChild(t),
this._currentDropIndex=i.items.length);var o=this._currentDropIndex;-1==o&&(o=i.items.length);
var a=i.items,d=a.slice(0,o),c=a.slice(o,a.length);d[d.length]=this._dragItem,i.items=d.concat(c),
this._setMarginArea(i,t),n.forEach(this._areaList,function(e){e.initItems=!1}),r.disconnect(this._dragItem.handlers.pop()),
r.disconnect(this._dragItem.handlers.pop()),this._resetAfterDrop(),this._cover&&(e.body().removeChild(this._cover),
e.body().removeChild(this._cover2)),r.publish("/dojox/mdnd/drop",[t,i,o])},_resetAfterDrop:function(){
this._accept=!1,this._dragItem=null,this._currentDropIndex=-1,this._currentIndexArea=-1,
this._oldDropIndex=-1,this._sourceIndexArea=-1,this._sourceDropIndex=-1,this._dropIndicator.remove(),
this._dragStartHandler&&r.disconnect(this._dragStartHandler),s("ie")>7&&n.forEach(this._eventsIE7,r.disconnect);
},destroy:function(){for(;this._areaList.length>0;)if(!this.unregister(this._areaList[0].node))throw new Error("Error while destroying AreaManager");
r.disconnect(this.resizeHandler),this._dropIndicator.destroy(),this._dropMode.destroy(),
dojox.mdnd.autoScroll&&dojox.mdnd.autoScroll.destroy(),this.refreshListener&&r.unsubscribe(this.refreshListener),
this._cover&&(_.destroy(this._cover),_.destroy(this._cover2),delete this._cover,delete this._cover2);
}});return p&&o.extend(p,{dndType:"text"}),dojox.mdnd._areaManager=null,dojox.mdnd.areaManager=function(){
return dojox.mdnd._areaManager||(dojox.mdnd._areaManager=new dojox.mdnd.AreaManager),
dojox.mdnd._areaManager},g});