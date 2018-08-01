define(["../_base/declare","./util/QueryResults","./util/SimpleQueryEngine"],function(t,i,e){
var n=null;return t("dojo.store.Memory",n,{constructor:function(t){for(var i in t)this[i]=t[i];
this.setData(this.data||[])},data:null,idProperty:"id",index:null,queryEngine:e,get:function(t){
return this.data[this.index[t]]},getIdentity:function(t){return t[this.idProperty];
},put:function(t,i){var e=this.data,n=this.idProperty,r=t[n]=i&&"id"in i?i.id:n in t?t[n]:Math.random(),s=!1;
if(r in this.index&&(s=!0),i){if(i.overwrite===!1&&s)throw new Error("Object already exists");
if(i.parent){var o=this.getIdentity(i.parent);if(!(o in this.index))throw new Error("Object specified in options.parent does not exists");
t.parent=o,s&&this.remove(r)}if(i.before){var d=this.getIdentity(i.before);return d in this.index&&s&&this.remove(r),
e.splice(this.index[d],0,t),this.setData(e),r}throw new Error("Object specified in options.before does not exists");
}return s?e[this.index[r]]=t:this.index[r]=e.push(t)-1,r},add:function(t,i){return(i=i||{}).overwrite=!1,
this.put(t,i)},remove:function(t){var i=this.index,e=this.data;return t in i?(e.splice(i[t],1),
this.setData(e),!0):void 0},query:function(t,e){return i(this.queryEngine(t,e)(this.data));
},setData:function(t){t.items?(this.idProperty=t.identifier,t=this.data=t.items):this.data=t,
this.index={};for(var i=0,e=t.length;e>i;i++)this.index[t[i][this.idProperty]]=i}
})});