dojo.provide("dojox.storage.FlashStorageProvider"),dojo.require("dojox.flash"),dojo.require("dojox.storage.manager"),
dojo.require("dojox.storage.Provider"),dojo.declare("dojox.storage.FlashStorageProvider",dojox.storage.Provider,{
initialized:!1,_available:null,_statusHandler:null,_flashReady:!1,_pageReady:!1,initialize:function(){
if(1!=dojo.config.disableFlashStorage){dojox.flash.addLoadedListener(dojo.hitch(this,function(){
this._flashReady=!0,this._flashReady&&this._pageReady&&this._loaded()}));var e=dojo.moduleUrl("dojox","storage/Storage.swf").toString();
dojox.flash.setSwf(e,!1),dojo.connect(dojo,"loaded",this,function(){this._pageReady=!0,
this._flashReady&&this._pageReady&&this._loaded()})}},setFlushDelay:function(e){if(null===e||"undefined"==typeof e||isNaN(e))throw new Error("Invalid argunment: "+e);
dojox.flash.comm.setFlushDelay(String(e))},getFlushDelay:function(){return Number(dojox.flash.comm.getFlushDelay());
},flush:function(e){(null==e||"undefined"==typeof e)&&(e=dojox.storage.DEFAULT_NAMESPACE),
dojox.flash.comm.flush(e)},isAvailable:function(){return this._available=!dojo.config.disableFlashStorage;
},put:function(e,o,t,i){if(!this.isValidKey(e))throw new Error("Invalid key given: "+e);
if(i||(i=dojox.storage.DEFAULT_NAMESPACE),!this.isValidKey(i))throw new Error("Invalid namespace given: "+i);
this._statusHandler=t,o=dojo.isString(o)?"string:"+o:dojo.toJson(o),dojox.flash.comm.put(e,o,i);
},putMultiple:function(e,o,t,i){if(!this.isValidKeyArray(e)||!o instanceof Array||e.length!=o.length)throw new Error("Invalid arguments: keys = ["+e+"], values = ["+o+"]");
if(i||(i=dojox.storage.DEFAULT_NAMESPACE),!this.isValidKey(i))throw new Error("Invalid namespace given: "+i);
this._statusHandler=t;for(var s=e.join(","),a=[],n=0;n<o.length;n++)dojo.isString(o[n])?o[n]="string:"+o[n]:o[n]=dojo.toJson(o[n]),
a[n]=o[n].length;var r=o.join(""),l=a.join(",");dojox.flash.comm.putMultiple(s,r,l,i);
},get:function(e,o){if(!this.isValidKey(e))throw new Error("Invalid key given: "+e);
if(o||(o=dojox.storage.DEFAULT_NAMESPACE),!this.isValidKey(o))throw new Error("Invalid namespace given: "+o);
var t=dojox.flash.comm.get(e,o);return""==t?null:this._destringify(t)},getMultiple:function(keys,namespace){
if(!this.isValidKeyArray(keys))throw new("Invalid key array given: "+keys);if(namespace||(namespace=dojox.storage.DEFAULT_NAMESPACE),
!this.isValidKey(namespace))throw new Error("Invalid namespace given: "+namespace);
for(var metaKey=keys.join(","),metaResults=dojox.flash.comm.getMultiple(metaKey,namespace),results=eval("("+metaResults+")"),i=0;i<results.length;i++)results[i]=""==results[i]?null:this._destringify(results[i]);
return results},_destringify:function(e){return e=dojo.isString(e)&&/^string:/.test(e)?e.substring("string:".length):dojo.fromJson(e);
},getKeys:function(e){if(e||(e=dojox.storage.DEFAULT_NAMESPACE),!this.isValidKey(e))throw new Error("Invalid namespace given: "+e);
var o=dojox.flash.comm.getKeys(e);return(null==o||"null"==o)&&(o=""),o=o.split(","),
o.sort(),o},getNamespaces:function(){var e=dojox.flash.comm.getNamespaces();return(null==e||"null"==e)&&(e=dojox.storage.DEFAULT_NAMESPACE),
e=e.split(","),e.sort(),e},clear:function(e){if(e||(e=dojox.storage.DEFAULT_NAMESPACE),
!this.isValidKey(e))throw new Error("Invalid namespace given: "+e);dojox.flash.comm.clear(e);
},remove:function(e,o){if(o||(o=dojox.storage.DEFAULT_NAMESPACE),!this.isValidKey(o))throw new Error("Invalid namespace given: "+o);
dojox.flash.comm.remove(e,o)},removeMultiple:function(e,o){if(this.isValidKeyArray(e)||dojo.raise("Invalid key array given: "+e),
o||(o=dojox.storage.DEFAULT_NAMESPACE),!this.isValidKey(o))throw new Error("Invalid namespace given: "+o);
var t=e.join(",");dojox.flash.comm.removeMultiple(t,o)},isPermanent:function(){return!0;
},getMaximumSize:function(){return dojox.storage.SIZE_NO_LIMIT},hasSettingsUI:function(){
return!0},showSettingsUI:function(){dojox.flash.comm.showSettings(),dojox.flash.obj.setVisible(!0),
dojox.flash.obj.center()},hideSettingsUI:function(){dojox.flash.obj.setVisible(!1),
dojo.isFunction(dojox.storage.onHideSettingsUI)&&dojox.storage.onHideSettingsUI.call(null);
},getResourceList:function(){return[]},_loaded:function(){this._allNamespaces=this.getNamespaces(),
this.initialized=!0,dojox.storage.manager.loaded()},_onStatus:function(e,o,t){var i=dojox.storage,s=dojox.flash.obj;
e==i.PENDING?(s.center(),s.setVisible(!0)):s.setVisible(!1),i._statusHandler&&i._statusHandler.call(null,e,o,null,t);
}}),dojox.storage.manager.register("dojox.storage.FlashStorageProvider",new dojox.storage.FlashStorageProvider);