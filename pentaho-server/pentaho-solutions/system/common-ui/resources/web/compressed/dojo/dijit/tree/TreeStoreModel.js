define(["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/_base/lang"],function(t,e,n,i){
return n("dijit.tree.TreeStoreModel",null,{store:null,childrenAttrs:["children"],
newItemIdAttr:"id",labelAttr:"",root:null,query:null,deferItemLoadingUntilExpand:!1,
constructor:function(t){i.mixin(this,t),this.connects=[];var n=this.store;if(!n.getFeatures()["dojo.data.api.Identity"])throw new Error("dijit.tree.TreeStoreModel: store must support dojo.data.Identity");
n.getFeatures()["dojo.data.api.Notification"]&&(this.connects=this.connects.concat([e.after(n,"onNew",i.hitch(this,"onNewItem"),!0),e.after(n,"onDelete",i.hitch(this,"onDeleteItem"),!0),e.after(n,"onSet",i.hitch(this,"onSetItem"),!0)]));
},destroy:function(){for(var t;t=this.connects.pop();)t.remove()},getRoot:function(t,e){
this.root?t(this.root):this.store.fetch({query:this.query,onComplete:i.hitch(this,function(e){
if(1!=e.length)throw new Error("dijit.tree.TreeStoreModel: root query returned "+e.length+" items, but must return exactly one");
this.root=e[0],t(this.root)}),onError:e})},mayHaveChildren:function(e){return t.some(this.childrenAttrs,function(t){
return this.store.hasAttribute(e,t)},this)},getChildren:function(e,n,o){var r=this.store;
if(!r.isItemLoaded(e)){var s=i.hitch(this,arguments.callee);return void r.loadItem({
item:e,onItem:function(t){s(t,n,o)},onError:o})}for(var h=[],a=0;a<this.childrenAttrs.length;a++){
var c=r.getValues(e,this.childrenAttrs[a]);h=h.concat(c)}var l=0;this.deferItemLoadingUntilExpand||t.forEach(h,function(t){
r.isItemLoaded(t)||l++}),0==l?n(h):t.forEach(h,function(t,e){r.isItemLoaded(t)||r.loadItem({
item:t,onItem:function(t){h[e]=t,0==--l&&n(h)},onError:o})})},isItem:function(t){
return this.store.isItem(t)},fetchItemByIdentity:function(t){this.store.fetchItemByIdentity(t);
},getIdentity:function(t){return this.store.getIdentity(t)},getLabel:function(t){
return this.labelAttr?this.store.getValue(t,this.labelAttr):this.store.getLabel(t);
},newItem:function(t,e,n){var i,o={parent:e,attribute:this.childrenAttrs[0]};this.newItemIdAttr&&t[this.newItemIdAttr]?this.fetchItemByIdentity({
identity:t[this.newItemIdAttr],scope:this,onItem:function(r){r?this.pasteItem(r,null,e,!0,n):(i=this.store.newItem(t,o),
i&&void 0!=n&&this.pasteItem(i,e,e,!1,n))}}):(i=this.store.newItem(t,o),i&&void 0!=n&&this.pasteItem(i,e,e,!1,n));
},pasteItem:function(e,n,i,o,r){var s=this.store,h=this.childrenAttrs[0];if(n&&t.forEach(this.childrenAttrs,function(i){
if(s.containsValue(n,i,e)){if(!o){var r=t.filter(s.getValues(n,i),function(t){return t!=e;
});s.setValues(n,i,r)}h=i}}),i)if("number"==typeof r){var a=s.getValues(i,h).slice();
a.splice(r,0,e),s.setValues(i,h,a)}else s.setValues(i,h,s.getValues(i,h).concat(e));
},onChange:function(){},onChildrenChange:function(){},onDelete:function(){},onNewItem:function(t,e){
e&&this.getChildren(e.item,i.hitch(this,function(t){this.onChildrenChange(e.item,t);
}))},onDeleteItem:function(t){this.onDelete(t)},onSetItem:function(e,n){-1!=t.indexOf(this.childrenAttrs,n)?this.getChildren(e,i.hitch(this,function(t){
this.onChildrenChange(e,t)})):this.onChange(e)}})});