define(["dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/dom-class","dojo/dom-geometry","dojo/_base/lang","dojo/on","dojo/touch","dojo/topic","dojo/dnd/Manager","./_dndSelector"],function(t,e,i,o,n,r,s,a,h,c,d){
var u=i("dijit.tree.dndSource",d,{isSource:!0,accept:["text","treeNode"],copyOnly:!1,
dragThreshold:5,betweenThreshold:0,generateText:!0,constructor:function(t,e){e||(e={}),
r.mixin(this,e);var i=e.accept instanceof Array?e.accept:["text","treeNode"];if(this.accept=null,
i.length){this.accept={};for(var n=0;n<i.length;++n)this.accept[i[n]]=1}this.isDragging=!1,
this.mouseDown=!1,this.targetAnchor=null,this.targetBox=null,this.dropPosition="",
this._lastX=0,this._lastY=0,this.sourceState="",this.isSource&&o.add(this.node,"dojoDndSource"),
this.targetState="",this.accept&&o.add(this.node,"dojoDndTarget"),this.topics=[h.subscribe("/dnd/source/over",r.hitch(this,"onDndSourceOver")),h.subscribe("/dnd/start",r.hitch(this,"onDndStart")),h.subscribe("/dnd/drop",r.hitch(this,"onDndDrop")),h.subscribe("/dnd/cancel",r.hitch(this,"onDndCancel"))];
},checkAcceptance:function(){return!0},copyState:function(t){return this.copyOnly||t;
},destroy:function(){this.inherited(arguments);for(var t;t=this.topics.pop();)t.remove();
this.targetAnchor=null},_onDragMouse:function(t,e){var i=c.manager(),o=this.targetAnchor,r=this.current,s=this.dropPosition,a="Over";
if(r&&this.betweenThreshold>0&&(this.targetBox&&o==r||(this.targetBox=n.position(r.rowNode,!0)),
t.pageY-this.targetBox.y<=this.betweenThreshold?a="Before":t.pageY-this.targetBox.y>=this.targetBox.h-this.betweenThreshold&&(a="After")),
e||r!=o||a!=s){if(o&&this._removeItemClass(o.rowNode,s),r&&this._addItemClass(r.rowNode,a),
r)if(r==this.tree.rootNode&&"Over"!=a)i.canDrop(!1);else{var h=!1;if(i.source==this)for(var d in this.selection){
var u=this.selection[d];if(u.item===r.item){h=!0;break}}h?i.canDrop(!1):this.checkItemAcceptance(r.rowNode,i.source,a.toLowerCase())&&!this._isParentChildDrop(i.source,r.rowNode)?i.canDrop(!0):i.canDrop(!1);
}else i.canDrop(!1);this.targetAnchor=r,this.dropPosition=a}},onMouseMove:function(i){
if(!this.isDragging||"Disabled"!=this.targetState){this.inherited(arguments);var o=c.manager();
if(this.isDragging)this._onDragMouse(i);else if(this.mouseDown&&this.isSource&&(Math.abs(i.pageX-this._lastX)>=this.dragThreshold||Math.abs(i.pageY-this._lastY)>=this.dragThreshold)){
var n=this.getSelectedTreeNodes();if(n.length){if(n.length>1){var r,s,a=this.selection,h=0,d=[];
t:for(;r=n[h++];){for(s=r.getParent();s&&s!==this.tree;s=s.getParent())if(a[s.id])continue t;
d.push(r)}n=d}n=t.map(n,function(t){return t.domNode}),o.startDrag(this,n,this.copyState(e.isCopyKey(i))),
this._onDragMouse(i,!0)}}}},onMouseDown:function(t){this.mouseDown=!0,this.mouseButton=t.button,
this._lastX=t.pageX,this._lastY=t.pageY,this.inherited(arguments)},onMouseUp:function(t){
this.mouseDown&&(this.mouseDown=!1,this.inherited(arguments))},onMouseOut:function(){
this.inherited(arguments),this._unmarkTargetAnchor()},checkItemAcceptance:function(){
return!0},onDndSourceOver:function(t){if(this!=t)this.mouseDown=!1,this._unmarkTargetAnchor();else if(this.isDragging){
var e=c.manager();e.canDrop(!1)}},onDndStart:function(t,e,i){this.isSource&&this._changeState("Source",this==t?i?"Copied":"Moved":"");
var o=this.checkAcceptance(t,e);this._changeState("Target",o?"":"Disabled"),this==t&&c.manager().overSource(this),
this.isDragging=!0},itemCreator:function(e){return t.map(e,function(t){return{id:t.id,
name:t.textContent||t.innerText||""}})},onDndDrop:function(e,i,o){if("Over"==this.containerState){
var n=this.tree,r=n.model,s=this.targetAnchor;this.isDragging=!1;var a,h,c;a=s&&s.item||n.item,
"Before"==this.dropPosition||"After"==this.dropPosition?(a=s.getParent()&&s.getParent().item||n.item,
h=s.getIndexInParent(),"After"==this.dropPosition?(h=s.getIndexInParent()+1,c=s.getNextSibling()&&s.getNextSibling().item):c=s.item):a=s&&s.item||n.item;
var d;t.forEach(i,function(n,u){var g=e.getItem(n.id);if(-1!=t.indexOf(g.type,"treeNode"))var m=g.data,l=m.item,p=m.getParent().item;
e==this?("number"==typeof h&&a==p&&m.getIndexInParent()<h&&(h-=1),r.pasteItem(l,p,a,o,h,c)):r.isItem(l)?r.pasteItem(l,p,a,o,h,c):(d||(d=this.itemCreator(i,s.rowNode,e)),
r.newItem(d[u],a,h,c))},this),this.tree._expandNode(s)}this.onDndCancel()},onDndCancel:function(){
this._unmarkTargetAnchor(),this.isDragging=!1,this.mouseDown=!1,delete this.mouseButton,
this._changeState("Source",""),this._changeState("Target","")},onOverEvent:function(){
this.inherited(arguments),c.manager().overSource(this)},onOutEvent:function(){this._unmarkTargetAnchor();
var t=c.manager();this.isDragging&&t.canDrop(!1),t.outSource(this),this.inherited(arguments);
},_isParentChildDrop:function(t,e){if(!t.tree||t.tree!=this.tree)return!1;for(var i=t.tree.domNode,o=t.selection,n=e.parentNode;n!=i&&!o[n.id];)n=n.parentNode;
return n.id&&o[n.id]},_unmarkTargetAnchor:function(){this.targetAnchor&&(this._removeItemClass(this.targetAnchor.rowNode,this.dropPosition),
this.targetAnchor=null,this.targetBox=null,this.dropPosition=null)},_markDndStatus:function(t){
this._changeState("Source",t?"Copied":"Moved")}});return u});