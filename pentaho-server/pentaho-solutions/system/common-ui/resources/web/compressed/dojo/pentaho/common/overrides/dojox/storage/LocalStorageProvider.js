define(["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/array","dojo/_base/lang","dojox/storage/Provider","dojox/storage/manager"],function(e,t,s,i,o,r,a){
var n=e("dojox.storage.LocalStorageProvider",[r],{store:null,initialize:function(){
this.store=localStorage,this.initialized=!0,dojox.storage.manager.loaded()},isAvailable:function(){
return"undefined"!=typeof localStorage},put:function(e,t,s,i){this._assertIsValidKey(e),
i=i||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(i);var o=this.getFullKey(e,i);
t=dojo.toJson(t);try{this.store.setItem(o,t),s&&s(this.SUCCESS,e,null,i)}catch(r){
s&&s(this.FAILED,e,r.toString(),i)}},get:function(e,t){return this._assertIsValidKey(e),
t=t||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(t),e=this.getFullKey(e,t),
dojo.fromJson(this.store.getItem(e))},getKeys:function(e){e=e||this.DEFAULT_NAMESPACE,
this._assertIsValidNamespace(e),e="__"+e+"_";for(var t=[],s=0;s<this.store.length;s++){
var i=this.store.key(s);this._beginsWith(i,e)&&(i=i.substring(e.length),t.push(i));
}return t},clear:function(e){e=e||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(e),
e="__"+e+"_";for(var t=[],s=0;s<this.store.length;s++)this._beginsWith(this.store.key(s),e)&&t.push(this.store.key(s));
dojo.forEach(t,dojo.hitch(this.store,"removeItem"))},remove:function(e,t){t=t||this.DEFAULT_NAMESPACE,
this._assertIsValidNamespace(t),this.store.removeItem(this.getFullKey(e,t))},getNamespaces:function(){
var e=[this.DEFAULT_NAMESPACE],t={};t[this.DEFAULT_NAMESPACE]=!0;for(var s=/^__([^_]*)_/,i=0;i<this.store.length;i++){
var o=this.store.key(i);if(1==s.test(o)){var r=o.match(s)[1];"undefined"==typeof t[r]&&(t[r]=!0,
e.push(r))}}return e},isPermanent:function(){return!0},getMaximumSize:function(){
return dojox.storage.SIZE_NO_LIMIT},hasSettingsUI:function(){return!1},isValidKey:function(e){
return null===e||void 0===e?!1:/^[0-9A-Za-z_-]*$/.test(e)},isValidNamespace:function(e){
return null===e||void 0===e?!1:/^[0-9A-Za-z-]*$/.test(e)},getFullKey:function(e,t){
return"__"+t+"_"+e},_beginsWith:function(e,t){return t.length>e.length?!1:e.substring(0,t.length)===t;
},_assertIsValidNamespace:function(e){if(this.isValidNamespace(e)===!1)throw new Error("Invalid namespace given: "+e);
},_assertIsValidKey:function(e){if(this.isValidKey(e)===!1)throw new Error("Invalid key given: "+e);
}});return dojox.storage.manager.register("dojox.storage.LocalStorageProvider",new dojox.storage.LocalStorageProvider),
n});