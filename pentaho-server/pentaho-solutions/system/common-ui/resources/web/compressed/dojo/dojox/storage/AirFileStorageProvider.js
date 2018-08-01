dojo.provide("dojox.storage.AirFileStorageProvider"),dojo.require("dojox.storage.manager"),
dojo.require("dojox.storage.Provider"),dojo.isAIR&&!function(){if(!e)var e={};e.File=window.runtime.flash.filesystem.File,
e.FileStream=window.runtime.flash.filesystem.FileStream,e.FileMode=window.runtime.flash.filesystem.FileMode,
dojo.declare("dojox.storage.AirFileStorageProvider",[dojox.storage.Provider],{initialized:!1,
_storagePath:"__DOJO_STORAGE/",initialize:function(){this.initialized=!1;try{var i=e.File.applicationStorageDirectory.resolvePath(this._storagePath);
i.exists||i.createDirectory(),this.initialized=!0}catch(t){console.debug("dojox.storage.AirFileStorageProvider.initialize:",t);
}dojox.storage.manager.loaded()},isAvailable:function(){return!0},put:function(i,t,r,o){
if(0==this.isValidKey(i))throw new Error("Invalid key given: "+i);if(o=o||this.DEFAULT_NAMESPACE,
0==this.isValidKey(o))throw new Error("Invalid namespace given: "+o);try{this.remove(i,o);
var a=e.File.applicationStorageDirectory.resolvePath(this._storagePath+o);a.exists||a.createDirectory();
var s=a.resolvePath(i),n=new e.FileStream;n.open(s,e.FileMode.WRITE),n.writeObject(t),
n.close()}catch(l){return console.debug("dojox.storage.AirFileStorageProvider.put:",l),
void r(this.FAILED,i,l.toString(),o)}r&&r(this.SUCCESS,i,null,o)},get:function(i,t){
if(0==this.isValidKey(i))throw new Error("Invalid key given: "+i);t=t||this.DEFAULT_NAMESPACE;
var r=null,o=e.File.applicationStorageDirectory.resolvePath(this._storagePath+t+"/"+i);
if(o.exists&&!o.isDirectory){var a=new e.FileStream;a.open(o,e.FileMode.READ),r=a.readObject(),
a.close()}return r},getNamespaces:function(){var i,t=[this.DEFAULT_NAMESPACE],r=e.File.applicationStorageDirectory.resolvePath(this._storagePath),o=r.getDirectoryListing();
for(i=0;i<o.length;i++)o[i].isDirectory&&o[i].name!=this.DEFAULT_NAMESPACE&&t.push(o[i].name);
return t},getKeys:function(i){if(i=i||this.DEFAULT_NAMESPACE,0==this.isValidKey(i))throw new Error("Invalid namespace given: "+i);
var t=[],r=e.File.applicationStorageDirectory.resolvePath(this._storagePath+i);if(r.exists&&r.isDirectory){
var o,a=r.getDirectoryListing();for(o=0;o<a.length;o++)t.push(a[o].name)}return t;
},clear:function(i){if(0==this.isValidKey(i))throw new Error("Invalid namespace given: "+i);
var t=e.File.applicationStorageDirectory.resolvePath(this._storagePath+i);t.exists&&t.isDirectory&&t.deleteDirectory(!0);
},remove:function(i,t){t=t||this.DEFAULT_NAMESPACE;var r=e.File.applicationStorageDirectory.resolvePath(this._storagePath+t+"/"+i);
r.exists&&!r.isDirectory&&r.deleteFile()},putMultiple:function(e,i,t,r){if(this.isValidKeyArray(e)===!1||!i instanceof Array||e.length!=i.length)throw new Error("Invalid arguments: keys = ["+e+"], values = ["+i+"]");
if((null==r||"undefined"==typeof r)&&(r=this.DEFAULT_NAMESPACE),0==this.isValidKey(r))throw new Error("Invalid namespace given: "+r);
this._statusHandler=t;try{for(var o=0;o<e.length;o++)this.put(e[o],i[o],null,r)}catch(a){
return console.debug("dojox.storage.AirFileStorageProvider.putMultiple:",a),void(t&&t(this.FAILED,e,a.toString(),r));
}t&&t(this.SUCCESS,e,null,r)},getMultiple:function(e,i){if(this.isValidKeyArray(e)===!1)throw new Error("Invalid key array given: "+e);
if((null==i||"undefined"==typeof i)&&(i=this.DEFAULT_NAMESPACE),0==this.isValidKey(i))throw new Error("Invalid namespace given: "+i);
for(var t=[],r=0;r<e.length;r++)t[r]=this.get(e[r],i);return t},removeMultiple:function(e,i){
i=i||this.DEFAULT_NAMESPACE;for(var t=0;t<e.length;t++)this.remove(e[t],i)},isPermanent:function(){
return!0},getMaximumSize:function(){return this.SIZE_NO_LIMIT},hasSettingsUI:function(){
return!1},showSettingsUI:function(){throw new Error(this.declaredClass+" does not support a storage settings user-interface");
},hideSettingsUI:function(){throw new Error(this.declaredClass+" does not support a storage settings user-interface");
}}),dojox.storage.manager.register("dojox.storage.AirFileStorageProvider",new dojox.storage.AirFileStorageProvider),
dojox.storage.manager.initialize()}();