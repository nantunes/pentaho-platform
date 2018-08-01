dojo.provide("dojox.storage.WhatWGStorageProvider"),dojo.require("dojox.storage.Provider"),
dojo.require("dojox.storage.manager"),dojo.declare("dojox.storage.WhatWGStorageProvider",[dojox.storage.Provider],{
initialized:!1,_domain:null,_available:null,_statusHandler:null,_allNamespaces:null,
_storageEventListener:null,initialize:function(){1!=dojo.config.disableWhatWGStorage&&(this._domain=location.hostname,
this.initialized=!0,dojox.storage.manager.loaded())},isAvailable:function(){try{globalStorage[location.hostname];
}catch(e){return this._available=!1,this._available}return this._available=!0,this._available;
},put:function(e,t,o,i){if(0==this.isValidKey(e))throw new Error("Invalid key given: "+e);
i=i||this.DEFAULT_NAMESPACE,e=this.getFullKey(e,i),this._statusHandler=o,t=dojo.isString(t)?"string:"+t:dojo.toJson(t);
var r=dojo.hitch(this,function(t){window.removeEventListener("storage",r,!1),o&&o.call(null,this.SUCCESS,e,null,i);
});window.addEventListener("storage",r,!1);try{var a=globalStorage[this._domain];a.setItem(e,t);
}catch(n){this._statusHandler.call(null,this.FAILED,e,n.toString(),i)}},get:function(e,t){
if(0==this.isValidKey(e))throw new Error("Invalid key given: "+e);t=t||this.DEFAULT_NAMESPACE,
e=this.getFullKey(e,t);var o=globalStorage[this._domain],i=o.getItem(e);return null==i||""==i?null:(i=i.value,
i=dojo.isString(i)&&/^string:/.test(i)?i.substring("string:".length):dojo.fromJson(i));
},getNamespaces:function(){for(var e=[this.DEFAULT_NAMESPACE],t={},o=globalStorage[this._domain],i=/^__([^_]*)_/,r=0;r<o.length;r++){
var a=o.key(r);if(1==i.test(a)){var n=a.match(i)[1];"undefined"==typeof t[n]&&(t[n]=!0,
e.push(n))}}return e},getKeys:function(e){if(e=e||this.DEFAULT_NAMESPACE,0==this.isValidKey(e))throw new Error("Invalid namespace given: "+e);
var t;t=e==this.DEFAULT_NAMESPACE?new RegExp("^([^_]{2}.*)$"):new RegExp("^__"+e+"_(.*)$");
for(var o=globalStorage[this._domain],i=[],r=0;r<o.length;r++){var a=o.key(r);1==t.test(a)&&(a=a.match(t)[1],
i.push(a))}return i},clear:function(e){if(e=e||this.DEFAULT_NAMESPACE,0==this.isValidKey(e))throw new Error("Invalid namespace given: "+e);
var t;t=e==this.DEFAULT_NAMESPACE?new RegExp("^[^_]{2}"):new RegExp("^__"+e+"_");for(var o=globalStorage[this._domain],i=[],r=0;r<o.length;r++)1==t.test(o.key(r))&&(i[i.length]=o.key(r));
dojo.forEach(i,dojo.hitch(o,"removeItem"))},remove:function(e,t){e=this.getFullKey(e,t);
var o=globalStorage[this._domain];o.removeItem(e)},isPermanent:function(){return!0;
},getMaximumSize:function(){return this.SIZE_NO_LIMIT},hasSettingsUI:function(){return!1;
},showSettingsUI:function(){throw new Error(this.declaredClass+" does not support a storage settings user-interface");
},hideSettingsUI:function(){throw new Error(this.declaredClass+" does not support a storage settings user-interface");
},getFullKey:function(e,t){if(t=t||this.DEFAULT_NAMESPACE,0==this.isValidKey(t))throw new Error("Invalid namespace given: "+t);
return t==this.DEFAULT_NAMESPACE?e:"__"+t+"_"+e}}),dojox.storage.manager.register("dojox.storage.WhatWGStorageProvider",new dojox.storage.WhatWGStorageProvider);