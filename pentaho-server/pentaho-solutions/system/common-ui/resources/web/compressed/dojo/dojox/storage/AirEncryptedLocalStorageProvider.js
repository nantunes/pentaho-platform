dojo.provide("dojox.storage.AirEncryptedLocalStorageProvider"),dojo.require("dojox.storage.manager"),
dojo.require("dojox.storage.Provider"),dojo.isAIR&&!function(){if(!e)var e={};e.ByteArray=window.runtime.flash.utils.ByteArray,
e.EncryptedLocalStore=window.runtime.flash.data.EncryptedLocalStore,dojo.declare("dojox.storage.AirEncryptedLocalStorageProvider",[dojox.storage.Provider],{
initialize:function(){dojox.storage.manager.loaded()},isAvailable:function(){return!0;
},_getItem:function(t){var r=e.EncryptedLocalStore.getItem("__dojo_"+t);return r?r.readUTFBytes(r.length):"";
},_setItem:function(t,r){var i=new e.ByteArray;i.writeUTFBytes(r),e.EncryptedLocalStore.setItem("__dojo_"+t,i);
},_removeItem:function(t){e.EncryptedLocalStore.removeItem("__dojo_"+t)},put:function(e,t,r,i){
if(0==this.isValidKey(e))throw new Error("Invalid key given: "+e);if(i=i||this.DEFAULT_NAMESPACE,
0==this.isValidKey(i))throw new Error("Invalid namespace given: "+i);try{var o=this._getItem("namespaces")||"|";
-1==o.indexOf("|"+i+"|")&&this._setItem("namespaces",o+i+"|");var n=this._getItem(i+"_keys")||"|";
-1==n.indexOf("|"+e+"|")&&this._setItem(i+"_keys",n+e+"|"),this._setItem("_"+i+"_"+e,t);
}catch(s){return console.debug("dojox.storage.AirEncryptedLocalStorageProvider.put:",s),
void r(this.FAILED,e,s.toString(),i)}r&&r(this.SUCCESS,e,null,i)},get:function(e,t){
if(0==this.isValidKey(e))throw new Error("Invalid key given: "+e);return t=t||this.DEFAULT_NAMESPACE,
this._getItem("_"+t+"_"+e)},getNamespaces:function(){for(var e=[this.DEFAULT_NAMESPACE],t=(this._getItem("namespaces")||"|").split("|"),r=0;r<t.length;r++)t[r].length&&t[r]!=this.DEFAULT_NAMESPACE&&e.push(t[r]);
return e},getKeys:function(e){if(e=e||this.DEFAULT_NAMESPACE,0==this.isValidKey(e))throw new Error("Invalid namespace given: "+e);
for(var t=[],r=(this._getItem(e+"_keys")||"|").split("|"),i=0;i<r.length;i++)r[i].length&&t.push(r[i]);
return t},clear:function(e){if(0==this.isValidKey(e))throw new Error("Invalid namespace given: "+e);
var t=this._getItem("namespaces")||"|";-1!=t.indexOf("|"+e+"|")&&this._setItem("namespaces",t.replace("|"+e+"|","|"));
for(var r=(this._getItem(e+"_keys")||"|").split("|"),i=0;i<r.length;i++)r[i].length&&this._removeItem(e+"_"+r[i]);
this._removeItem(e+"_keys")},remove:function(e,t){t=t||this.DEFAULT_NAMESPACE;var r=this._getItem(t+"_keys")||"|";
-1!=r.indexOf("|"+e+"|")&&this._setItem(t+"_keys",r.replace("|"+e+"|","|")),this._removeItem("_"+t+"_"+e);
},putMultiple:function(e,t,r,i){if(this.isValidKeyArray(e)===!1||!t instanceof Array||e.length!=t.length)throw new Error("Invalid arguments: keys = ["+e+"], values = ["+t+"]");
if((null==i||"undefined"==typeof i)&&(i=this.DEFAULT_NAMESPACE),0==this.isValidKey(i))throw new Error("Invalid namespace given: "+i);
this._statusHandler=r;try{for(var o=0;o<e.length;o++)this.put(e[o],t[o],null,i)}catch(n){
return console.debug("dojox.storage.AirEncryptedLocalStorageProvider.putMultiple:",n),
void(r&&r(this.FAILED,e,n.toString(),i))}r&&r(this.SUCCESS,e,null)},getMultiple:function(e,t){
if(this.isValidKeyArray(e)===!1)throw new Error("Invalid key array given: "+e);if((null==t||"undefined"==typeof t)&&(t=this.DEFAULT_NAMESPACE),
0==this.isValidKey(t))throw new Error("Invalid namespace given: "+t);for(var r=[],i=0;i<e.length;i++)r[i]=this.get(e[i],t);
return r},removeMultiple:function(e,t){t=t||this.DEFAULT_NAMESPACE;for(var r=0;r<e.length;r++)this.remove(e[r],t);
},isPermanent:function(){return!0},getMaximumSize:function(){return this.SIZE_NO_LIMIT;
},hasSettingsUI:function(){return!1},showSettingsUI:function(){throw new Error(this.declaredClass+" does not support a storage settings user-interface");
},hideSettingsUI:function(){throw new Error(this.declaredClass+" does not support a storage settings user-interface");
}}),dojox.storage.manager.register("dojox.storage.AirEncryptedLocalStorageProvider",new dojox.storage.AirEncryptedLocalStorageProvider),
dojox.storage.manager.initialize()}();