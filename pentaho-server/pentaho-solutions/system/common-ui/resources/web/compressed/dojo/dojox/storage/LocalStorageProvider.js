dojo.provide("dojox.storage.LocalStorageProvider"),dojo.require("dojox.storage.Provider"),
dojo.require("dojox.storage.manager"),dojo.declare("dojox.storage.LocalStorageProvider",[dojox.storage.Provider],{
store:null,initialize:function(){this.store=localStorage,this.initialized=!0,dojox.storage.manager.loaded();
},isAvailable:function(){return"undefined"!=typeof localStorage},put:function(e,t,s,o){
this._assertIsValidKey(e),o=o||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(o);
var i=this.getFullKey(e,o);t=dojo.toJson(t);try{this.store.setItem(i,t),s&&s(this.SUCCESS,e,null,o);
}catch(r){s&&s(this.FAILED,e,r.toString(),o)}},get:function(e,t){return this._assertIsValidKey(e),
t=t||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(t),e=this.getFullKey(e,t),
dojo.fromJson(this.store.getItem(e))},getKeys:function(e){e=e||this.DEFAULT_NAMESPACE,
this._assertIsValidNamespace(e),e="__"+e+"_";for(var t=[],s=0;s<this.store.length;s++){
var o=this.store.key(s);this._beginsWith(o,e)&&(o=o.substring(e.length),t.push(o));
}return t},clear:function(e){e=e||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(e),
e="__"+e+"_";for(var t=[],s=0;s<this.store.length;s++)this._beginsWith(this.store.key(s),e)&&t.push(this.store.key(s));
dojo.forEach(t,dojo.hitch(this.store,"removeItem"))},remove:function(e,t){t=t||this.DEFAULT_NAMESPACE,
this._assertIsValidNamespace(t),this.store.removeItem(this.getFullKey(e,t))},getNamespaces:function(){
var e=[this.DEFAULT_NAMESPACE],t={};t[this.DEFAULT_NAMESPACE]=!0;for(var s=/^__([^_]*)_/,o=0;o<this.store.length;o++){
var i=this.store.key(o);if(1==s.test(i)){var r=i.match(s)[1];"undefined"==typeof t[r]&&(t[r]=!0,
e.push(r))}}return e},isPermanent:function(){return!0},getMaximumSize:function(){
return dojox.storage.SIZE_NO_LIMIT},hasSettingsUI:function(){return!1},isValidKey:function(e){
return null===e||void 0===e?!1:/^[0-9A-Za-z_-]*$/.test(e)},isValidNamespace:function(e){
return null===e||void 0===e?!1:/^[0-9A-Za-z-]*$/.test(e)},getFullKey:function(e,t){
return"__"+t+"_"+e},_beginsWith:function(e,t){return t.length>e.length?!1:e.substring(0,t.length)===t;
},_assertIsValidNamespace:function(e){if(this.isValidNamespace(e)===!1)throw new Error("Invalid namespace given: "+e);
},_assertIsValidKey:function(e){if(this.isValidKey(e)===!1)throw new Error("Invalid key given: "+e);
}}),dojox.storage.manager.register("dojox.storage.LocalStorageProvider",new dojox.storage.LocalStorageProvider);