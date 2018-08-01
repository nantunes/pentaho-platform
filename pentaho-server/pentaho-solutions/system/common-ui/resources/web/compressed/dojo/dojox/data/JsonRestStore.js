define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/connect","dojox/rpc/Rest","dojox/rpc/JsonRest","dojox/json/schema","dojox/data/ServiceStore"],function(e,t,r,i,n,s,o){
var c=e.getObject("dojox.rpc",!0),a=t("dojox.data.JsonRestStore",o,{constructor:function(e){
r.connect(i._index,"onUpdate",this,function(e,t,r,i){var n=this.service.servicePath;
e.__id?e.__id.substring(0,n.length)==n&&this.onSet(e,t,r,i):console.log("no id on updated object ",e);
}),this.idAttribute=this.idAttribute||"id","string"==typeof e.target&&(e.target=e.target.match(/\/$/)||this.allowNoTrailingSlash?e.target:e.target+"/",
this.service||(this.service=n.services[e.target]||i(e.target,!0))),n.registerService(this.service,e.target,this.schema),
this.schema=this.service._schema=this.schema||this.service._schema||{},this.service._store=this,
this.service.idAsRef=this.idAsRef,this.schema._idAttr=this.idAttribute;var t=n.getConstructor(this.service),s=this;
this._constructor=function(e){t.call(this,e),s.onNew(this)},this._constructor.prototype=t.prototype,
this._index=i._index},loadReferencedSchema:!0,idAsRef:!1,referenceIntegrity:!0,target:"",
allowNoTrailingSlash:!1,newItem:function(e,t){if(e=new this._constructor(e),t){var r=this.getValue(t.parent,t.attribute,[]);
r=r.concat([e]),e.__parent=r,this.setValue(t.parent,t.attribute,r)}return e},deleteItem:function(e){
var t=[],r=d._getStoreForItem(e)||this;if(this.referenceIntegrity){n._saveNotNeeded=!0;
var s=i._index,o=function(i){var n;t.push(i),i.__checked=1;for(var c in i)if("__"!=c.substring(0,2)){
var a=i[c];a==e?i!=s&&(i instanceof Array?(n=n||[]).push(c):(d._getStoreForItem(i)||r).unsetAttribute(i,c)):"object"==typeof a&&a&&(a.__checked||o(a),
"object"==typeof a.__checked&&i!=s&&(d._getStoreForItem(i)||r).setValue(i,c,a.__checked));
}if(n){for(c=n.length,i=i.__checked=i.concat();c--;)i.splice(n[c],1);return i}return null;
};o(s),n._saveNotNeeded=!1;for(var c=0;t[c];)delete t[c++].__checked}n.deleteObject(e),
r.onDelete(e)},changing:function(e,t){n.changing(e,t)},cancelChanging:function(e){
if(e.__id){dirtyObjects=r=n.getDirtyObjects();for(var t=0;t<dirtyObjects.length;t++){
var r=dirtyObjects[t];if(e==r.object)return void dirtyObjects.splice(t,1)}}},setValue:function(e,t,r){
var i=e[t],n=e.__id?d._getStoreForItem(e):this;if(s&&n.schema&&n.schema.properties&&s.mustBeValid(s.checkPropertyChange(r,n.schema.properties[t])),
t==n.idAttribute)throw new Error("Can not change the identity attribute for an item");
n.changing(e),e[t]=r,r&&!r.__parent&&(r.__parent=e),n.onSet(e,t,i,r)},setValues:function(t,r,i){
if(!e.isArray(i))throw new Error("setValues expects to be passed an Array object as its value");
this.setValue(t,r,i)},unsetAttribute:function(e,t){this.changing(e);var r=e[t];delete e[t],
this.onSet(e,t,r,void 0)},save:function(e){e&&e.global||((e=e||{}).service=this.service),
("syncMode"in e?e.syncMode:this.syncMode)&&(c._sync=!0);var t=n.commit(e);return this.serverVersion=this._updates&&this._updates.length,
t},revert:function(e){n.revert(!(e&&e.global)&&this.service)},isDirty:function(e){
return n.isDirty(e,this)},isItem:function(e,t){return e&&e.__id&&(t||this.service==n.getServiceAndId(e.__id).service);
},_doQuery:function(t){var r="string"==typeof t.queryStr?t.queryStr:t.query,i=n.query(this.service,r,t),s=this;
return this.loadReferencedSchema&&i.addCallback(function(t){var r=i.ioArgs&&i.ioArgs.xhr&&i.ioArgs.xhr.getResponseHeader("Content-Type"),o=r&&r.match(/definedby\s*=\s*([^;]*)/);
if(r&&!o&&(o=i.ioArgs.xhr.getResponseHeader("Link"),o=o&&o.match(/<([^>]*)>;\s*rel="?definedby"?/)),
o=o&&o[1]){var c=n.getServiceAndId((s.target+o).replace(/^(.*\/)?(\w+:\/\/)|[^\/\.]+\/\.\.\/|^.*\/(\/)/,"$2$3")),a=n.byId(c.service,c.id);
return a.addCallbacks(function(r){return e.mixin(s.schema,r),t},function(e){return console.error(e),
t}),a}return void 0}),i},_processResults:function(e,t){var r=e.length;return{totalCount:t.fullLength||(t.request.count==r?(t.request.start||0)+2*r:r),
items:e}},getConstructor:function(){return this._constructor},getIdentity:function(e){
var t=e.__clientId||e.__id;if(!t)return t;var r=this.service.servicePath.replace(/[^\/]*$/,"");
return t.substring(0,r.length)!=r?t:t.substring(r.length)},fetchItemByIdentity:function(e){
var t=e.identity,r=this;if(t.toString().match(/^(\w*:)?\//)){var i=n.getServiceAndId(t);
r=i.service._store,e.identity=i.id}return e._prefix=r.service.servicePath.replace(/[^\/]*$/,""),
r.inherited(arguments)},onSet:function(){},onNew:function(){},onDelete:function(){},
getFeatures:function(){var e=this.inherited(arguments);return e["dojo.data.api.Write"]=!0,
e["dojo.data.api.Notification"]=!0,e},getParent:function(e){return e&&e.__parent}
});a.getStore=function(e,t){if("string"==typeof e.target){e.target=e.target.match(/\/$/)||e.allowNoTrailingSlash?e.target:e.target+"/";
var r=(n.services[e.target]||{})._store;if(r)return r}return new(t||a)(e)};var d=e.getObject("dojox.data",!0);
d._getStoreForItem=function(e){if(e.__id){var t=n.getServiceAndId(e.__id);if(t&&t.service._store)return t.service._store;
var r=e.__id.toString().match(/.*\//)[0];return new a({target:r})}return null};var h=e.getObject("dojox.json.ref",!0);
return h._useRefs=!0,a});