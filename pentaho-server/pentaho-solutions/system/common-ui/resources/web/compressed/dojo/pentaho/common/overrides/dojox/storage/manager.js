define(["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/array","dojo/_base/lang","dojo/_base/config"],function(declare,on,query,array,lang,config){
lang.getObject("dojox.storage",!0),dojox.storage.manager=new function(){this.currentProvider=null,
this.available=!1,this.providers=[],this._initialized=!1,this._onLoadListeners=[],
this.initialize=function(){this.autodetect()},this.register=function(i,e){this.providers.push(e),
this.providers[i]=e},this.setProvider=function(i){},this.autodetect=function(){if(!this._initialized){
for(var i,e=config.forceStorageProvider||!1,r=0;r<this.providers.length;r++){if(i=this.providers[r],
e&&e==i.declaredClass){i.isAvailable();break}if(!e&&i.isAvailable())break}if(!i)return this._initialized=!0,
this.available=!1,this.currentProvider=null,console.warn("No storage provider found for this platform"),
void this.loaded();this.currentProvider=i,lang.mixin(dojox.storage,this.currentProvider),
dojox.storage.initialize(),this._initialized=!0,this.available=!0}},this.isAvailable=function(){
return this.available},this.addOnLoad=function(i){this._onLoadListeners.push(i),this.isInitialized()&&this._fireLoaded();
},this.removeOnLoad=function(i){for(var e=0;e<this._onLoadListeners.length;e++)if(i==this._onLoadListeners[e]){
this._onLoadListeners.splice(e,1);break}},this.isInitialized=function(){return null!=this.currentProvider&&"dojox.storage.FlashStorageProvider"==this.currentProvider.declaredClass&&0==dojox.flash.ready?!1:this._initialized;
},this.supportsProvider=function(storageClass){try{var provider=eval("new "+storageClass+"()"),results=provider.isAvailable();
return results?results:!1}catch(e){return!1}},this.getProvider=function(){return this.currentProvider;
},this.loaded=function(){this._fireLoaded()},this._fireLoaded=function(){array.forEach(this._onLoadListeners,function(i){
try{i()}catch(e){console.debug(e)}})},this.getResourceList=function(){var i=[];return array.forEach(dojox.storage.manager.providers,function(e){
i=i.concat(e.getResourceList())}),i}}});