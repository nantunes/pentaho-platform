define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array"],function(t,e,n){
return t("dojox.data.ServiceStore",e.getObject("dojox.data.ClientFilter",0)||null,{
service:null,constructor:function(t){this.byId=this.fetchItemByIdentity,this._index={},
t&&e.mixin(this,t),this.idAttribute=t&&t.idAttribute||this.schema&&this.schema._idAttr;
},schema:null,idAttribute:"id",labelAttribute:"label",syncMode:!1,estimateCountFactor:1,
getSchema:function(){return this.schema},loadLazyValues:!0,getValue:function(t,e,n){
var r=t[e];return r||(e in t?r:t._loadObject?(dojox.rpc._sync=!0)&&arguments.callee.call(this,dojox.data.ServiceStore.prototype.loadItem({
item:t})||{},e,n):n)},getValues:function(t,e){var n=this.getValue(t,e);return n instanceof Array?n:void 0===n?[]:[n];
},getAttributes:function(t){var e=[];for(var n in t)!t.hasOwnProperty(n)||"_"==n.charAt(0)&&"_"==n.charAt(1)||e.push(n);
return e},hasAttribute:function(t,e){return e in t},containsValue:function(t,e,r){
return n.indexOf(this.getValues(t,e),r)>-1},isItem:function(t){return"object"==typeof t&&t&&!(t instanceof Date);
},isItemLoaded:function(t){return t&&!t._loadObject},loadItem:function(t){var e;return t.item._loadObject?t.item._loadObject(function(n){
e=n,delete e._loadObject;var r=n instanceof Error?t.onError:t.onItem;r&&r.call(t.scope,n);
}):t.onItem&&t.onItem.call(t.scope,t.item),e},_currentId:0,_processResults:function(t,n){
if(t&&"object"==typeof t){var r=t.__id;if(!r&&(r=this.idAttribute?t[this.idAttribute]:this._currentId++,
void 0!==r)){var i=this._index[r];if(i){for(var o in i)delete i[o];t=e.mixin(i,t);
}t.__id=r,this._index[r]=t}for(var a in t)t[a]=this._processResults(t[a],n).items;
var c=t.length}return{totalCount:n.request.count==c?(n.request.start||0)+c*this.estimateCountFactor:c,
items:t}},close:function(t){return t&&t.abort&&t.abort()},fetch:function(t){t=t||{},
("syncMode"in t?t.syncMode:this.syncMode)&&(dojox.rpc._sync=!0);var e=this,n=t.scope||e,r=this.cachingFetch?this.cachingFetch(t):this._doQuery(t);
return r.request=t,r.addCallback(function(i){t.clientFetch&&(i=e.clientSideFetch({
query:t.clientFetch,sort:t.sort,start:t.start,count:t.count},i));var o=e._processResults(i,r);
if(i=t.results=o.items,t.onBegin&&t.onBegin.call(n,o.totalCount,t),t.onItem)for(var a=0;a<i.length;a++)t.onItem.call(n,i[a],t);
return t.onComplete&&t.onComplete.call(n,t.onItem?null:i,t),i}),r.addErrback(t.onError&&function(e){
return t.onError.call(n,e,t)}),t.abort=function(){r.cancel()},t.store=this,t},_doQuery:function(t){
var e="string"==typeof t.queryStr?t.queryStr:t.query;return this.service(e)},getFeatures:function(){
return{"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0,"dojo.data.api.Schema":this.schema
}},getLabel:function(t){return this.getValue(t,this.labelAttribute)},getLabelAttributes:function(t){
return[this.labelAttribute]},getIdentity:function(t){return t.__id},getIdentityAttributes:function(t){
return[this.idAttribute]},fetchItemByIdentity:function(t){var e=this._index[(t._prefix||"")+t.identity];
return e?e._loadObject?(t.item=e,this.loadItem(t)):(t.onItem&&t.onItem.call(t.scope,e),
e):this.fetch({query:t.identity,onComplete:t.onItem,onError:t.onError,scope:t.scope
}).results}})});