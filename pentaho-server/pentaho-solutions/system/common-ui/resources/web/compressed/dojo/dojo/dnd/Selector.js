define(["../_base/array","../_base/declare","../_base/kernel","../_base/lang","../dom","../dom-construct","../mouse","../_base/NodeList","../on","../touch","./common","./Container"],function(t,e,s,i,n,o,h,r,c,l,a,u){
var d=e("dojo.dnd.Selector",u,{constructor:function(t,e){e||(e={}),this.singular=e.singular,
this.autoSync=e.autoSync,this.selection={},this.anchor=null,this.simpleSelection=!1,
this.events.push(c(this.node,l.press,i.hitch(this,"onMouseDown")),c(this.node,l.release,i.hitch(this,"onMouseUp")));
},singular:!1,getSelectedNodes:function(){var t=new r,e=a._empty;for(var s in this.selection)s in e||t.push(n.byId(s));
return t},selectNone:function(){return this._removeSelection()._removeAnchor()},selectAll:function(){
return this.forInItems(function(t,e){this._addItemClass(n.byId(e),"Selected"),this.selection[e]=1;
},this),this._removeAnchor()},deleteSelectedNodes:function(){var t=a._empty;for(var e in this.selection)if(!(e in t)){
var s=n.byId(e);this.delItem(e),o.destroy(s)}return this.anchor=null,this.selection={},
this},forInSelectedItems:function(t,e){e=e||s.global;var i=this.selection,n=a._empty;
for(var o in i)o in n||t.call(e,this.getItem(o),o,this)},sync:function(){d.superclass.sync.call(this),
this.anchor&&(this.getItem(this.anchor.id)||(this.anchor=null));var e=[],s=a._empty;
for(var i in this.selection)i in s||this.getItem(i)||e.push(i);return t.forEach(e,function(t){
delete this.selection[t]},this),this},insertNodes:function(t,e,s,i){var n=this._normalizedCreator;
return this._normalizedCreator=function(e,s){var i=n.call(this,e,s);return t?(this.anchor?this.anchor!=i.node&&(this._removeItemClass(i.node,"Anchor"),
this._addItemClass(i.node,"Selected")):(this.anchor=i.node,this._removeItemClass(i.node,"Selected"),
this._addItemClass(this.anchor,"Anchor")),this.selection[i.node.id]=1):(this._removeItemClass(i.node,"Selected"),
this._removeItemClass(i.node,"Anchor")),i},d.superclass.insertNodes.call(this,e,s,i),
this._normalizedCreator=n,this},destroy:function(){d.superclass.destroy.call(this),
this.selection=this.anchor=null},onMouseDown:function(t){if(this.autoSync&&this.sync(),
this.current){if(!this.singular&&!a.getCopyKeyState(t)&&!t.shiftKey&&this.current.id in this.selection)return this.simpleSelection=!0,
void(h.isLeft(t)&&(t.stopPropagation(),t.preventDefault()));if(!this.singular&&t.shiftKey){
a.getCopyKeyState(t)||this._removeSelection();var e=this.getAllNodes();if(e.length&&(this.anchor||(this.anchor=e[0],
this._addItemClass(this.anchor,"Anchor")),this.selection[this.anchor.id]=1,this.anchor!=this.current)){
for(var s,i=0;i<e.length&&(s=e[i],s!=this.anchor&&s!=this.current);++i);for(++i;i<e.length&&(s=e[i],
s!=this.anchor&&s!=this.current);++i)this._addItemClass(s,"Selected"),this.selection[s.id]=1;
this._addItemClass(this.current,"Selected"),this.selection[this.current.id]=1}}else this.singular?this.anchor==this.current?a.getCopyKeyState(t)&&this.selectNone():(this.selectNone(),
this.anchor=this.current,this._addItemClass(this.anchor,"Anchor"),this.selection[this.current.id]=1):a.getCopyKeyState(t)?this.anchor==this.current?(delete this.selection[this.anchor.id],
this._removeAnchor()):this.current.id in this.selection?(this._removeItemClass(this.current,"Selected"),
delete this.selection[this.current.id]):(this.anchor&&(this._removeItemClass(this.anchor,"Anchor"),
this._addItemClass(this.anchor,"Selected")),this.anchor=this.current,this._addItemClass(this.current,"Anchor"),
this.selection[this.current.id]=1):this.current.id in this.selection||(this.selectNone(),
this.anchor=this.current,this._addItemClass(this.current,"Anchor"),this.selection[this.current.id]=1);
t.stopPropagation(),t.preventDefault()}},onMouseUp:function(){this.simpleSelection&&(this.simpleSelection=!1,
this.selectNone(),this.current&&(this.anchor=this.current,this._addItemClass(this.anchor,"Anchor"),
this.selection[this.current.id]=1))},onMouseMove:function(){this.simpleSelection=!1;
},onOverEvent:function(){this.onmousemoveEvent=c(this.node,l.move,i.hitch(this,"onMouseMove"));
},onOutEvent:function(){this.onmousemoveEvent&&(this.onmousemoveEvent.remove(),delete this.onmousemoveEvent);
},_removeSelection:function(){var t=a._empty;for(var e in this.selection)if(!(e in t)){
var s=n.byId(e);s&&this._removeItemClass(s,"Selected")}return this.selection={},this;
},_removeAnchor:function(){return this.anchor&&(this._removeItemClass(this.anchor,"Anchor"),
this.anchor=null),this}});return d});