define(["dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/event","dojo/_base/window","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/touch","dojo/dom-attr","dijit/registry","./ListItem"],function(t,e,o,n,i,d,s,h,r,c,a,l){
return o("dojox.mobile._EditableListMixin",null,{rightIconForEdit:"mblDomButtonGrayKnob",
deleteIconForEdit:"mblDomButtonRedCircleMinus",isEditing:!1,destroy:function(){this._blankItem&&this._blankItem.destroy(),
this.inherited(arguments)},_setupMoveItem:function(t){h.set(t,{width:s.getContentBox(t).w+"px",
top:t.offsetTop+"px"}),d.add(t,"mblListItemFloat")},_resetMoveItem:function(t){this.defer(function(){
d.remove(t,"mblListItemFloat"),h.set(t,{width:"",top:""})})},_onClick:function(t){
if((!t||"keydown"!==t.type||13===t.keyCode)&&this.onClick(t)!==!1)for(var o=a.getEnclosingWidget(t.target),n=t.target;n!==o.domNode;n=n.parentNode)if(n===o.deleteIconNode){
e.publish("/dojox/mobile/deleteListItem",[o]),this.onDeleteItem(o);break}},onClick:function(){},
_onTouchStart:function(e){if(!(this.getChildren().length<=1)){this._blankItem||(this._blankItem=new l);
var o=this._movingItem=a.getEnclosingWidget(e.target);this._startIndex=this.getIndexOfChild(o);
for(var d=!1,h=e.target;h!==o.domNode;h=h.parentNode)if(h===o.rightIconNode){d=!0,
c.set(o.rightIconNode,"aria-grabbed","true"),c.set(this.domNode,"aria-dropeffect","move");
break}if(d){var m=o.getNextSibling();m=m?m.domNode:null,this.containerNode.insertBefore(this._blankItem.domNode,m),
this._setupMoveItem(o.domNode),this.containerNode.appendChild(o.domNode),this._conn||(this._conn=[this.connect(this.domNode,r.move,"_onTouchMove"),this.connect(i.doc,r.release,"_onTouchEnd")]),
this._pos=[],t.forEach(this.getChildren(),function(t,e){this._pos.push(s.position(t.domNode,!0).y);
},this),this.touchStartY=e.touches?e.touches[0].pageY:e.pageY,this._startTop=s.getMarginBox(o.domNode).t,
n.stop(e)}}},_onTouchMove:function(t){for(var e=t.touches?t.touches[0].pageY:t.pageY,o=this._pos.length-1,n=1;n<this._pos.length;n++)if(e<this._pos[n]){
o=n-1;break}var i=this.getChildren()[o],d=this._blankItem;if(i!==d){var s=i.domNode.parentNode;
i.getIndexInParent()<d.getIndexInParent()?s.insertBefore(d.domNode,i.domNode):s.insertBefore(i.domNode,d.domNode);
}this._movingItem.domNode.style.top=this._startTop+(e-this.touchStartY)+"px"},_onTouchEnd:function(o){
var n=this._startIndex,i=this.getIndexOfChild(this._blankItem),d=this._blankItem.getNextSibling();
d=d?d.domNode:null,null===d&&i--,this.containerNode.insertBefore(this._movingItem.domNode,d),
this.containerNode.removeChild(this._blankItem.domNode),this._resetMoveItem(this._movingItem.domNode),
t.forEach(this._conn,e.disconnect),this._conn=null,this.onMoveItem(this._movingItem,n,i),
c.set(this._movingItem.rightIconNode,"aria-grabbed","false"),c.remove(this.domNode,"aria-dropeffect");
},startEdit:function(){this.isEditing=!0,d.add(this.domNode,"mblEditableRoundRectList"),
t.forEach(this.getChildren(),function(t){t.deleteIconNode||(t.set("rightIcon",this.rightIconForEdit),
t.rightIconNode&&(c.set(t.rightIconNode,"role","button"),c.set(t.rightIconNode,"aria-grabbed","false")),
t.set("deleteIcon",this.deleteIconForEdit),t.deleteIconNode.tabIndex=t.tabIndex,t.deleteIconNode&&c.set(t.deleteIconNode,"role","button")),
t.rightIconNode.style.display="",t.deleteIconNode.style.display="","undefined"!=typeof t.rightIconNode.style.msTouchAction&&(t.rightIconNode.style.msTouchAction="none");
},this),this._handles||(this._handles=[this.connect(this.domNode,r.press,"_onTouchStart"),this.connect(this.domNode,"onclick","_onClick"),this.connect(this.domNode,"onkeydown","_onClick")]),
this.onStartEdit()},endEdit:function(){d.remove(this.domNode,"mblEditableRoundRectList"),
t.forEach(this.getChildren(),function(t){t.rightIconNode.style.display="none",t.deleteIconNode.style.display="none",
"undefined"!=typeof t.rightIconNode.style.msTouchAction&&(t.rightIconNode.style.msTouchAction="auto");
}),this._handles&&(t.forEach(this._handles,this.disconnect,this),this._handles=null),
this.isEditing=!1,this.onEndEdit()},onDeleteItem:function(t){},onMoveItem:function(t,e,o){},
onStartEdit:function(){},onEndEdit:function(){}})});