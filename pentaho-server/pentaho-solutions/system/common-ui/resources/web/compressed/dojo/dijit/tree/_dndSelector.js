define(["dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/kernel","dojo/_base/lang","dojo/dom","dojo/mouse","dojo/on","dojo/touch","../a11yclick","./_dndContainer"],function(e,t,o,i,s,n,r,c,h,d,u){
return o("dijit.tree._dndSelector",u,{constructor:function(){this.selection={},this.anchor=null,
this.events.push(c(this.tree.domNode,h.press,s.hitch(this,"onMouseDown")),c(this.tree.domNode,h.release,s.hitch(this,"onMouseUp")),c(this.tree.domNode,h.move,s.hitch(this,"onMouseMove")),c(this.tree.domNode,d.press,s.hitch(this,"onClickPress")),c(this.tree.domNode,d.release,s.hitch(this,"onClickRelease")));
},singular:!1,getSelectedTreeNodes:function(){var e=[],t=this.selection;for(var o in t)e.push(t[o]);
return e},selectNone:function(){return this.setSelection([]),this},destroy:function(){
this.inherited(arguments),this.selection=this.anchor=null},addTreeNode:function(e,t){
return this.setSelection(this.getSelectedTreeNodes().concat([e])),t&&(this.anchor=e),
e},removeTreeNode:function(t){var o=e.filter(this.getSelectedTreeNodes(),function(e){
return!n.isDescendant(e.domNode,t.domNode)});return this.setSelection(o),t},isTreeNodeSelected:function(e){
return e.id&&!!this.selection[e.id]},setSelection:function(t){var o=this.getSelectedTreeNodes();
e.forEach(this._setDifference(o,t),s.hitch(this,function(e){e.setSelected(!1),this.anchor==e&&delete this.anchor,
delete this.selection[e.id]})),e.forEach(this._setDifference(t,o),s.hitch(this,function(e){
e.setSelected(!0),this.selection[e.id]=e})),this._updateSelectionProperties()},_setDifference:function(t,o){
e.forEach(o,function(e){e.__exclude__=!0});var i=e.filter(t,function(e){return!e.__exclude__;
});return e.forEach(o,function(e){delete e.__exclude__}),i},_updateSelectionProperties:function(){
var t=this.getSelectedTreeNodes(),o=[],i=[],s=[];e.forEach(t,function(t){var n=t.getTreePath(),r=this.tree.model;
i.push(t),o.push(n),n=e.map(n,function(e){return r.getIdentity(e)},this),s.push(n.join("/"));
},this);var n=e.map(i,function(e){return e.item});this.tree._set("paths",o),this.tree._set("path",o[0]||[]),
this.tree._set("selectedNodes",i),this.tree._set("selectedNode",i[0]||null),this.tree._set("selectedItems",n),
this.tree._set("selectedItem",n[0]||null)},onClickPress:function(e){if(!(this.current&&this.current.isExpandable&&this.tree.isExpandoNode(e.target,this.current))){
r.isLeft(e)&&e.preventDefault();var o="keydown"==e.type?this.tree.focusedChild:this.current;
if(o){var i=t.isCopyKey(e),s=o.id;if(!this.singular&&!e.shiftKey&&this.selection[s])return void(this._doDeselect=!0);
this._doDeselect=!1,this.userSelect(o,i,e.shiftKey)}}},onClickRelease:function(e){
this._doDeselect&&(this._doDeselect=!1,this.userSelect("keyup"==e.type?this.tree.focusedChild:this.current,t.isCopyKey(e),e.shiftKey));
},onMouseMove:function(){this._doDeselect=!1},onMouseDown:function(){},onMouseUp:function(){},
_compareNodes:function(e,t){if(e===t)return 0;if("sourceIndex"in document.documentElement)return e.sourceIndex-t.sourceIndex;
if("compareDocumentPosition"in document.documentElement)return 2&e.compareDocumentPosition(t)?1:-1;
if(document.createRange){var o=doc.createRange();o.setStartBefore(e);var i=doc.createRange();
return i.setStartBefore(t),o.compareBoundaryPoints(o.END_TO_END,i)}throw Error("dijit.tree._compareNodes don't know how to compare two different nodes in this browser");
},userSelect:function(e,t,o){if(this.singular)this.anchor==e&&t?this.selectNone():(this.setSelection([e]),
this.anchor=e);else if(o&&this.anchor){var i,s,n=this._compareNodes(this.anchor.rowNode,e.rowNode),r=this.anchor;
0>n?(i=r,s=e):(i=e,s=r);for(var c=[];i!=s;)c.push(i),i=this.tree._getNext(i);c.push(s),
this.setSelection(c)}else this.selection[e.id]&&t?this.removeTreeNode(e):t?this.addTreeNode(e,!0):(this.setSelection([e]),
this.anchor=e)},getItem:function(e){var t=this.selection[e];return{data:t,type:["treeNode"]
}},forInSelectedItems:function(e,t){t=t||i.global;for(var o in this.selection)e.call(t,this.getItem(o),o,this);
}})});