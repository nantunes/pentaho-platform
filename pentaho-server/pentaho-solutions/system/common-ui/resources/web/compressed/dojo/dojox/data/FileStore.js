define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/kernel","dojo/_base/json","dojo/_base/xhr"],function(t,e,r,n,o){
return t("dojox.data.FileStore",null,{constructor:function(t){t&&t.label&&(this.label=t.label),
t&&t.url&&(this.url=t.url),t&&t.options&&(e.isArray(t.options)?this.options=t.options:e.isString(t.options)&&(this.options=t.options.split(","))),
t&&t.pathAsQueryParam&&(this.pathAsQueryParam=!0),t&&"urlPreventCache"in t&&(this.urlPreventCache=t.urlPreventCache?!0:!1);
},url:"",_storeRef:"_S",label:"name",_identifier:"path",_attributes:["children","directory","name","path","modified","size","parentDir"],
pathSeparator:"/",options:[],failOk:!1,urlPreventCache:!0,_assertIsItem:function(t){
if(!this.isItem(t))throw new Error("dojox.data.FileStore: a function was passed an item argument that was not an item");
},_assertIsAttribute:function(t){if("string"!=typeof t)throw new Error("dojox.data.FileStore: a function was passed an attribute argument that was not an attribute name string");
},pathAsQueryParam:!1,getFeatures:function(){return{"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0
}},getValue:function(t,e,r){var n=this.getValues(t,e);return n&&n.length>0?n[0]:r;
},getAttributes:function(t){return this._attributes},hasAttribute:function(t,e){return this._assertIsItem(t),
this._assertIsAttribute(e),e in t},getIdentity:function(t){return this.getValue(t,this._identifier);
},getIdentityAttributes:function(t){return[this._identifier]},isItemLoaded:function(t){
var e=this.isItem(t);return e&&"boolean"==typeof t._loaded&&!t._loaded&&(e=!1),e},
loadItem:function(t){var a=t.item,i=this,s=t.scope||r.global,l={};this.options.length>0&&(l.options=n.toJson(this.options)),
this.pathAsQueryParam&&(l.path=a.parentPath+this.pathSeparator+a.name);var u={url:this.pathAsQueryParam?this.url:this.url+"/"+a.parentPath+"/"+a.name,
handleAs:"json-comment-optional",content:l,preventCache:this.urlPreventCache,failOk:this.failOk
},h=o.get(u);h.addErrback(function(e){t.onError&&t.onError.call(s,e)}),h.addCallback(function(r){
delete a.parentPath,delete a._loaded,e.mixin(a,r),i._processItem(a),t.onItem&&t.onItem.call(s,a);
})},getLabel:function(t){return this.getValue(t,this.label)},getLabelAttributes:function(t){
return[this.label]},containsValue:function(t,e,r){for(var n=this.getValues(t,e),o=0;o<n.length;o++)if(n[o]==r)return!0;
return!1},getValues:function(t,r){this._assertIsItem(t),this._assertIsAttribute(r);
var n=t[r];return"undefined"==typeof n||e.isArray(n)?"undefined"==typeof n&&(n=[]):n=[n],
n},isItem:function(t){return t&&t[this._storeRef]===this?!0:!1},close:function(t){},
fetch:function(t){t=t||{},t.store||(t.store=this);var e=this,a=t.scope||r.global,i={};
t.query&&(i.query=n.toJson(t.query)),t.sort&&(i.sort=n.toJson(t.sort)),t.queryOptions&&(i.queryOptions=n.toJson(t.queryOptions)),
"number"==typeof t.start&&(i.start=""+t.start),"number"==typeof t.count&&(i.count=""+t.count),
this.options.length>0&&(i.options=n.toJson(this.options));var s={url:this.url,preventCache:this.urlPreventCache,
failOk:this.failOk,handleAs:"json-comment-optional",content:i},l=o.get(s);l.addCallback(function(r){
e._processResult(r,t)}),l.addErrback(function(e){t.onError&&t.onError.call(a,e,t);
})},fetchItemByIdentity:function(t){var e=t.identity,a=this,i=t.scope||r.global,s={};
this.options.length>0&&(s.options=n.toJson(this.options)),this.pathAsQueryParam&&(s.path=e);
var l={url:this.pathAsQueryParam?this.url:this.url+"/"+e,handleAs:"json-comment-optional",
content:s,preventCache:this.urlPreventCache,failOk:this.failOk},u=o.get(l);u.addErrback(function(e){
t.onError&&t.onError.call(i,e)}),u.addCallback(function(e){var r=a._processItem(e);
t.onItem&&t.onItem.call(i,r)})},_processResult:function(t,e){var n=e.scope||r.global;
try{t.pathSeparator&&(this.pathSeparator=t.pathSeparator),e.onBegin&&e.onBegin.call(n,t.total,e);
var o=this._processItemArray(t.items);if(e.onItem){var a;for(a=0;a<o.length;a++)e.onItem.call(n,o[a],e);
o=null}e.onComplete&&e.onComplete.call(n,o,e)}catch(i){e.onError?e.onError.call(n,i,e):console.log(i);
}},_processItemArray:function(t){var e;for(e=0;e<t.length;e++)this._processItem(t[e]);
return t},_processItem:function(t){if(!t)return null;if(t[this._storeRef]=this,t.children&&t.directory)if(e.isArray(t.children)){
var r,n=t.children;for(r=0;r<n.length;r++){var o=n[r];e.isObject(o)?n[r]=this._processItem(o):(n[r]={
name:o,_loaded:!1,parentPath:t.path},n[r][this._storeRef]=this)}}else delete t.children;
return t}})});