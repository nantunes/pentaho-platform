dojo.provide("dojox.storage.CookieStorageProvider"),dojo.require("dojox.storage.Provider"),
dojo.require("dojox.storage.manager"),dojo.require("dojo.cookie"),dojo.declare("dojox.storage.CookieStorageProvider",[dojox.storage.Provider],{
store:null,cookieName:"dojoxStorageCookie",storageLife:730,initialize:function(){
this.store=dojo.fromJson(dojo.cookie(this.cookieName))||{},this.initialized=!0,dojox.storage.manager.loaded();
},isAvailable:function(){return dojo.cookie.isSupported()},put:function(e,o,t,i){
this._assertIsValidKey(e),i=i||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(i),
fullKey=this.getFullKey(e,i),this.store[fullKey]=dojo.toJson(o),this._save();var s=dojo.toJson(this.store)===dojo.cookie(this.cookieName);
s||this.remove(e,i),t&&t(s?this.SUCCESS:this.FAILED,e,null,i)},get:function(e,o){
return this._assertIsValidKey(e),o=o||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(o),
e=this.getFullKey(e,o),this.store[e]?dojo.fromJson(this.store[e]):null},getKeys:function(e){
e=e||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(e),e="__"+e+"_";var o=[];
for(var t in this.store)this._beginsWith(t,e)&&(t=t.substring(e.length),o.push(t));
return o},clear:function(e){e=e||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(e),
e="__"+e+"_";for(var o in this.store)this._beginsWith(o,e)&&delete this.store[o];this._save();
},remove:function(e,o){o=o||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(o),
this._assertIsValidKey(e),e=this.getFullKey(e,o),delete this.store[e],this._save();
},getNamespaces:function(){var e=[this.DEFAULT_NAMESPACE],o={};o[this.DEFAULT_NAMESPACE]=!0;
var t=/^__([^_]*)_/;for(var i in this.store)if(1==t.test(i)){var s=i.match(t)[1];"undefined"==typeof o[s]&&(o[s]=!0,
e.push(s))}return e},isPermanent:function(){return!0},getMaximumSize:function(){return 4;
},hasSettingsUI:function(){return!1},isValidKey:function(e){return null===e||void 0===e?!1:/^[0-9A-Za-z_-]*$/.test(e);
},isValidNamespace:function(e){return null===e||void 0===e?!1:/^[0-9A-Za-z-]*$/.test(e);
},getFullKey:function(e,o){return"__"+o+"_"+e},_save:function(){dojo.cookie(this.cookieName,dojo.toJson(this.store),{
expires:this.storageLife})},_beginsWith:function(e,o){return o.length>e.length?!1:e.substring(0,o.length)===o;
},_assertIsValidNamespace:function(e){if(this.isValidNamespace(e)===!1)throw new Error("Invalid namespace given: "+e);
},_assertIsValidKey:function(e){if(this.isValidKey(e)===!1)throw new Error("Invalid key given: "+e);
}}),dojox.storage.manager.register("dojox.storage.CookieStorageProvider",new dojox.storage.CookieStorageProvider);