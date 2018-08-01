define(["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/when"],function(e,t,n,i,r){
return n("dijit.tree.ObjectStoreModel",null,{store:null,labelAttr:"name",labelType:"text",
root:null,query:null,constructor:function(e){i.mixin(this,e),this.childrenCache={};
},destroy:function(){for(var e in this.childrenCache)this.childrenCache[e].close&&this.childrenCache[e].close();
},getRoot:function(e,t){if(this.root)e(this.root);else{var n;r(n=this.store.query(this.query),i.hitch(this,function(t){
if(1!=t.length)throw new Error("dijit.tree.ObjectStoreModel: root query returned "+t.length+" items, but must return exactly one");
this.root=t[0],e(this.root),n.observe&&n.observe(i.hitch(this,function(e){this.onChange(e);
}),!0)}),t)}},mayHaveChildren:function(){return!0},getChildren:function(e,t,n){var o=this.store.getIdentity(e);
if(this.childrenCache[o])return void r(this.childrenCache[o],t,n);var h=this.childrenCache[o]=this.store.getChildren(e);
r(h,t,n),h.observe&&h.observe(i.hitch(this,function(t,n,o){this.onChange(t),n!=o&&r(h,i.hitch(this,"onChildrenChange",e));
}),!0)},isItem:function(){return!0},getIdentity:function(e){return this.store.getIdentity(e);
},getLabel:function(e){return e[this.labelAttr]},newItem:function(e,t,n,i){return this.store.put(e,{
parent:t,before:i})},pasteItem:function(t,n,i,r,o,h){if(!r){var s=[].concat(this.childrenCache[this.getIdentity(n)]),c=e.indexOf(s,t);
s.splice(c,1),this.onChildrenChange(n,s)}return this.store.put(t,{overwrite:!0,parent:i,
before:h})},onChange:function(){},onChildrenChange:function(){},onDelete:function(){}
})});