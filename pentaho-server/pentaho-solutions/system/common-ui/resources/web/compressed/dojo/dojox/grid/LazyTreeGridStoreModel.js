define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dijit/tree/ForestStoreModel"],function(t,e,r,i){
return t("dojox.grid.LazyTreeGridStoreModel",i,{serverStore:!1,constructor:function(t){
this.serverStore=!!t.serverStore},mayHaveChildren:function(t){var i=null;return e.some(this.childrenAttrs,function(e){
return i=this.store.getValue(t,e),r.isString(i)?parseInt(i,10)>0||"true"===i.toLowerCase()?!0:!1:"number"==typeof i?i>0:"boolean"==typeof i?i:this.store.isItem(i)?(i=this.store.getValues(t,e),
r.isArray(i)?i.length>0:!1):!1},this)},getChildren:function(t,e,i,o){if(o){var n=o.start||0,s=o.count,h=o.parentId,u=o.sort;
if(t===this.root)this.root.size=0,this.store.fetch({start:n,count:s,sort:u,query:this.query,
onBegin:r.hitch(this,function(t){this.root.size=t}),onComplete:r.hitch(this,function(t){
e(t,o,this.root.size)}),onError:i});else{var a=this.store;if(!a.isItemLoaded(t)){
var c=r.hitch(this,arguments.callee);return void a.loadItem({item:t,onItem:function(t){
c(t,e,i,o)},onError:i})}this.serverStore&&!this._isChildrenLoaded(t)?(this.childrenSize=0,
this.store.fetch({start:n,count:s,sort:u,query:r.mixin({parentId:h},this.query||{}),
onBegin:r.hitch(this,function(t){this.childrenSize=t}),onComplete:r.hitch(this,function(t){
e(t,o,this.childrenSize)}),onError:i})):this.inherited(arguments)}}else this.inherited(arguments);
},_isChildrenLoaded:function(t){var r=null;return e.every(this.childrenAttrs,function(i){
return r=this.store.getValues(t,i),e.every(r,function(t){return this.store.isItemLoaded(t);
},this)},this)},onNewItem:function(t,e){},onDeleteItem:function(t){}})});