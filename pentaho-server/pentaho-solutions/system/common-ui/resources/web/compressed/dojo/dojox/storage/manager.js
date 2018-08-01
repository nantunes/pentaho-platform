dojo.provide("dojox.storage.manager"),dojox.storage.manager=new function(){this.currentProvider=null,
this.available=!1,this.providers=[],this._initialized=!1,this._onLoadListeners=[],
this.initialize=function(){this.autodetect()},this.register=function(i,t){this.providers.push(t),
this.providers[i]=t},this.setProvider=function(i){},this.autodetect=function(){if(!this._initialized){
for(var i,t=dojo.config.forceStorageProvider||!1,e=0;e<this.providers.length;e++){
if(i=this.providers[e],t&&t==i.declaredClass){i.isAvailable();break}if(!t&&i.isAvailable())break;
}if(!i)return this._initialized=!0,this.available=!1,this.currentProvider=null,console.warn("No storage provider found for this platform"),
void this.loaded();this.currentProvider=i,dojo.mixin(dojox.storage,this.currentProvider),
dojox.storage.initialize(),this._initialized=!0,this.available=!0}},this.isAvailable=function(){
return this.available},this.addOnLoad=function(i){this._onLoadListeners.push(i),this.isInitialized()&&this._fireLoaded();
},this.removeOnLoad=function(i){for(var t=0;t<this._onLoadListeners.length;t++)if(i==this._onLoadListeners[t]){
this._onLoadListeners.splice(t,1);break}},this.isInitialized=function(){return null!=this.currentProvider&&"dojox.storage.FlashStorageProvider"==this.currentProvider.declaredClass&&0==dojox.flash.ready?!1:this._initialized;
},this.supportsProvider=function(storageClass){try{var provider=eval("new "+storageClass+"()"),results=provider.isAvailable();
return results?results:!1}catch(e){return!1}},this.getProvider=function(){return this.currentProvider;
},this.loaded=function(){this._fireLoaded()},this._fireLoaded=function(){dojo.forEach(this._onLoadListeners,function(i){
try{i()}catch(t){console.debug(t)}})},this.getResourceList=function(){var i=[];return dojo.forEach(dojox.storage.manager.providers,function(t){
i=i.concat(t.getResourceList())}),i}};