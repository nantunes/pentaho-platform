define(["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/array"],function(e,o,n,t){
return e("dojox.storage.Provider",null,{constructor:function(){},SUCCESS:"success",
FAILED:"failed",PENDING:"pending",SIZE_NOT_AVAILABLE:"Size not available",SIZE_NO_LIMIT:"No size limit",
DEFAULT_NAMESPACE:"default",onHideSettingsUI:null,initialize:function(){console.warn("dojox.storage.initialize not implemented");
},isAvailable:function(){console.warn("dojox.storage.isAvailable not implemented");
},put:function(e,o,n,t){console.warn("dojox.storage.put not implemented")},get:function(e,o){
console.warn("dojox.storage.get not implemented")},hasKey:function(e,o){return!!this.get(e,o);
},getKeys:function(e){console.warn("dojox.storage.getKeys not implemented")},clear:function(e){
console.warn("dojox.storage.clear not implemented")},remove:function(e,o){console.warn("dojox.storage.remove not implemented");
},getNamespaces:function(){console.warn("dojox.storage.getNamespaces not implemented");
},isPermanent:function(){console.warn("dojox.storage.isPermanent not implemented");
},getMaximumSize:function(){console.warn("dojox.storage.getMaximumSize not implemented");
},putMultiple:function(e,o,n,t){for(var i=0;i<e.length;i++)dojox.storage.put(e[i],o[i],n,t);
},getMultiple:function(e,o){for(var n=[],t=0;t<e.length;t++)n.push(dojox.storage.get(e[t],o));
return n},removeMultiple:function(e,o){for(var n=0;n<e.length;n++)dojox.storage.remove(e[n],o);
},isValidKeyArray:function(e){return null!==e&&void 0!==e&&dojo.isArray(e)?!dojo.some(e,function(e){
return!this.isValidKey(e)},this):!1},hasSettingsUI:function(){return!1},showSettingsUI:function(){
console.warn("dojox.storage.showSettingsUI not implemented")},hideSettingsUI:function(){
console.warn("dojox.storage.hideSettingsUI not implemented")},isValidKey:function(e){
return null===e||void 0===e?!1:/^[0-9A-Za-z_]*$/.test(e)},getResourceList:function(){
return[]}})});