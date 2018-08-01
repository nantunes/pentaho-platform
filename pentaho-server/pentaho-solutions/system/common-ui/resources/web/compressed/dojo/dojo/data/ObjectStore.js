define(["../_base/lang","../Evented","../_base/declare","../_base/Deferred","../_base/array","../_base/connect","../regexp"],function(t,e,n,o,r,i,c){
function a(t){return"*"==t?".*":"?"==t?".":t}return n("dojo.data.ObjectStore",[e],{
objectStore:null,constructor:function(e){this._dirtyObjects=[],e.labelAttribute&&(e.labelProperty=e.labelAttribute),
t.mixin(this,e)},labelProperty:"label",getValue:function(t,e,n){return"function"==typeof t.get?t.get(e):e in t?t[e]:n;
},getValues:function(t,e){var n=this.getValue(t,e);return n instanceof Array?n:void 0===n?[]:[n];
},getAttributes:function(t){var e=[];for(var n in t)!t.hasOwnProperty(n)||"_"==n.charAt(0)&&"_"==n.charAt(1)||e.push(n);
return e},hasAttribute:function(t,e){return e in t},containsValue:function(t,e,n){
return r.indexOf(this.getValues(t,e),n)>-1},isItem:function(t){return"object"==typeof t&&t&&!(t instanceof Date);
},isItemLoaded:function(t){return t&&"function"!=typeof t.load},loadItem:function(t){
var e;return"function"==typeof t.item.load?o.when(t.item.load(),function(n){e=n;var o=n instanceof Error?t.onError:t.onItem;
o&&o.call(t.scope,n)}):t.onItem&&t.onItem.call(t.scope,t.item),e},close:function(t){
return t&&t.abort&&t.abort()},fetch:function(e){function n(t){e.onError&&e.onError.call(s,t,e);
}e=t.delegate(e,e&&e.queryOptions);var i=this,s=e.scope||i,u=e.query;if("object"==typeof u){
u=t.delegate(u);for(var l in u){var f=u[l];"string"==typeof f&&(u[l]=RegExp("^"+c.escapeString(f,"*?\\").replace(/\\.|\*|\?/g,a)+"$",e.ignoreCase?"mi":"m"),
u[l].toString=function(t){return function(){return t}}(f))}}var h=this.objectStore.query(u,e);
return o.when(h.total,function(t){o.when(h,function(n){if(e.onBegin&&e.onBegin.call(s,t||n.length,e),
e.onItem)for(var o=0;o<n.length;o++)e.onItem.call(s,n[o],e);return e.onComplete&&e.onComplete.call(s,e.onItem?null:n,e),
n},n)},n),e.abort=function(){h.cancel&&h.cancel()},h.observe&&(this.observing&&this.observing.cancel(),
this.observing=h.observe(function(t,e,n){if(-1==r.indexOf(i._dirtyObjects,t))if(-1==e)i.onNew(t);else if(-1==n)i.onDelete(t);else for(var o in t)o!=i.objectStore.idProperty&&i.onSet(t,o,null,t[o]);
},!0)),this.onFetch(h),e.store=this,e},getFeatures:function(){return{"dojo.data.api.Read":!!this.objectStore.get,
"dojo.data.api.Identity":!0,"dojo.data.api.Write":!!this.objectStore.put,"dojo.data.api.Notification":!0
}},getLabel:function(t){return this.isItem(t)?this.getValue(t,this.labelProperty):void 0;
},getLabelAttributes:function(t){return[this.labelProperty]},getIdentity:function(t){
return this.objectStore.getIdentity?this.objectStore.getIdentity(t):t[this.objectStore.idProperty||"id"];
},getIdentityAttributes:function(t){return[this.objectStore.idProperty]},fetchItemByIdentity:function(t){
var e;return o.when(this.objectStore.get(t.identity),function(n){e=n,t.onItem.call(t.scope,n);
},function(e){t.onError.call(t.scope,e)}),e},newItem:function(t,e){if(e){var n=this.getValue(e.parent,e.attribute,[]);
n=n.concat([t]),t.__parent=n,this.setValue(e.parent,e.attribute,n)}return this._dirtyObjects.push({
object:t,save:!0}),this.onNew(t),t},deleteItem:function(t){this.changing(t,!0),this.onDelete(t);
},setValue:function(t,e,n){var o=t[e];this.changing(t),t[e]=n,this.onSet(t,e,o,n);
},setValues:function(e,n,o){if(!t.isArray(o))throw new Error("setValues expects to be passed an Array object as its value");
this.setValue(e,n,o)},unsetAttribute:function(t,e){this.changing(t);var n=t[e];delete t[e],
this.onSet(t,e,n,void 0)},changing:function(t,e){t.__isDirty=!0;for(var n=0;n<this._dirtyObjects.length;n++){
var o=this._dirtyObjects[n];if(t==o.object)return void(e&&(o.object=!1,this._saveNotNeeded||(o.save=!0)));
}var r=t instanceof Array?[]:{};for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);this._dirtyObjects.push({
object:!e&&t,old:r,save:!this._saveNotNeeded})},save:function(t){t=t||{};var e,n=[],r=[],c=this,a=this._dirtyObjects,s=a.length;
try{if(i.connect(t,"onError",function(){if(t.revertOnError!==!1){var e=a;a=r,c.revert(),
c._dirtyObjects=e}else c._dirtyObjects=a.concat(r)}),this.objectStore.transaction)var u=this.objectStore.transaction();
for(var l=0;l<a.length;l++){var f=a[l],h=f.object,b=f.old;delete h.__isDirty,h?e=this.objectStore.put(h,{
overwrite:!!b}):"undefined"!=typeof b&&(e=this.objectStore.remove(this.getIdentity(b))),
r.push(f),a.splice(l--,1),o.when(e,function(e){--s||t.onComplete&&t.onComplete.call(t.scope,n);
},function(e){s=-1,t.onError.call(t.scope,e)})}u&&u.commit()}catch(d){t.onError.call(t.scope,value);
}},revert:function(){for(var t=this._dirtyObjects,e=t.length;e>0;){e--;var n=t[e],o=n.object,r=n.old;
if(o&&r){for(var i in r)r.hasOwnProperty(i)&&o[i]!==r[i]&&(this.onSet(o,i,o[i],r[i]),
o[i]=r[i]);for(i in o)r.hasOwnProperty(i)||(this.onSet(o,i,o[i]),delete o[i])}else r?this.onNew(r):this.onDelete(o);
delete(o||r).__isDirty,t.splice(e,1)}},isDirty:function(t){return t?t.__isDirty:!!this._dirtyObjects.length;
},onSet:function(){},onNew:function(){},onDelete:function(){},onFetch:function(t){}
})});