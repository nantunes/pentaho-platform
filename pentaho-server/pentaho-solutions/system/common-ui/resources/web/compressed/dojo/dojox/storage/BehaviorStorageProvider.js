dojo.provide("dojox.storage.BehaviorStorageProvider"),dojo.require("dojox.storage.Provider"),
dojo.require("dojox.storage.manager"),dojo.declare("dojox.storage.BehaviorStorageProvider",[dojox.storage.Provider],{
store:null,storeName:"__dojox_BehaviorStorage",keys:[],initialize:function(){try{
this.store=this._createStore(),this.store.load(this.storeName)}catch(e){throw new Error("Store is not available: "+e);
}var t=this.get("keys","dojoxSystemNS");this.keys=t||[],this.initialized=!0,dojox.storage.manager.loaded();
},isAvailable:function(){return dojo.isIE&&dojo.isIE>=5},_createStore:function(){
var e=dojo.create("link",{id:this.storeName+"Node",style:{display:"none"}},dojo.query("head")[0]);
return e.addBehavior("#default#userdata"),e},put:function(e,t,s,i){this._assertIsValidKey(e),
i=i||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(i);var o=this.getFullKey(e,i);
t=dojo.toJson(t),this.store.setAttribute(o,t),this.store.save(this.storeName);var r=this.store.getAttribute(o)===t;
r&&(this._addKey(o),this.store.setAttribute("__dojoxSystemNS_keys",dojo.toJson(this.keys)),
this.store.save(this.storeName)),s&&s(r?this.SUCCESS:this.FAILED,e,null,i)},get:function(e,t){
return this._assertIsValidKey(e),t=t||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(t),
e=this.getFullKey(e,t),dojo.fromJson(this.store.getAttribute(e))},getKeys:function(e){
e=e||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(e),e="__"+e+"_";for(var t=[],s=0;s<this.keys.length;s++){
var i=this.keys[s];this._beginsWith(i,e)&&(i=i.substring(e.length),t.push(i))}return t;
},clear:function(e){e=e||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(e),e="__"+e+"_";
for(var t=[],s=0;s<this.keys.length;s++){var i=this.keys[s];this._beginsWith(i,e)&&t.push(i);
}dojo.forEach(t,function(e){this.store.removeAttribute(e),this._removeKey(e)},this),
this.put("keys",this.keys,null,"dojoxSystemNS"),this.store.save(this.storeName)},
remove:function(e,t){this._assertIsValidKey(e),t=t||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(t),
e=this.getFullKey(e,t),this.store.removeAttribute(e),this._removeKey(e),this.put("keys",this.keys,null,"dojoxSystemNS"),
this.store.save(this.storeName)},getNamespaces:function(){var e=[this.DEFAULT_NAMESPACE],t={};
t[this.DEFAULT_NAMESPACE]=!0;for(var s=/^__([^_]*)_/,i=0;i<this.keys.length;i++){
var o=this.keys[i];if(1==s.test(o)){var r=o.match(s)[1];"undefined"==typeof t[r]&&(t[r]=!0,
e.push(r))}}return e},isPermanent:function(){return!0},getMaximumSize:function(){
return 64},hasSettingsUI:function(){return!1},isValidKey:function(e){return null===e||void 0===e?!1:/^[0-9A-Za-z_-]*$/.test(e);
},isValidNamespace:function(e){return null===e||void 0===e?!1:/^[0-9A-Za-z-]*$/.test(e);
},getFullKey:function(e,t){return"__"+t+"_"+e},_beginsWith:function(e,t){return t.length>e.length?!1:e.substring(0,t.length)===t;
},_assertIsValidNamespace:function(e){if(this.isValidNamespace(e)===!1)throw new Error("Invalid namespace given: "+e);
},_assertIsValidKey:function(e){if(this.isValidKey(e)===!1)throw new Error("Invalid key given: "+e);
},_addKey:function(e){this._removeKey(e),this.keys.push(e)},_removeKey:function(e){
this.keys=dojo.filter(this.keys,function(t){return t!==e},this)}}),dojox.storage.manager.register("dojox.storage.BehaviorStorageProvider",new dojox.storage.BehaviorStorageProvider);