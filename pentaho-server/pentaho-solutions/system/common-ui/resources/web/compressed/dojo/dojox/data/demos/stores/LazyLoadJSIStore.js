dojo.provide("dojox.data.demos.stores.LazyLoadJSIStore"),dojo.require("dojo.data.ItemFileReadStore"),
dojo.declare("dojox.data.demos.stores.LazyLoadJSIStore",dojo.data.ItemFileReadStore,{
constructor:function(e){},isItemLoaded:function(e){return"stub"===this.getValue(e,"type")?!1:!0;
},loadItem:function(e){var o=e.item;this._assertIsItem(o);var t=this.getValue(o,"name"),a=this.getValue(o,"parent"),r="";
a&&(r+=a+"/"),r+=t+"/data.json";var d=this,s=function(r){delete o.type,delete o.parent;
for(var s in r)dojo.isArray(r[s])?o[s]=r[s]:o[s]=[r[s]];d._arrayOfAllItems[o[d._itemNumPropName]]=o;
var n=d.getAttributes(o);for(s in n)for(var l=o[n[s]],i=0;i<l.length;i++){var m=l[i];
if("object"==typeof m&&m.stub){var u={type:["stub"],name:[m.stub],parent:[t]};a&&(u.parent[0]=a+"/"+u.parent[0]),
d._arrayOfAllItems.push(u),u[d._storeRefPropName]=d,u[d._itemNumPropName]=d._arrayOfAllItems.length-1,
l[i]=u}}if(e.onItem){var p=e.scope?e.scope:dojo.global;e.onItem.call(p,o)}},n=function(o){
if(e.onError){var t=e.scope?e.scope:dojo.global;e.onError.call(t,o)}},l={url:r,handleAs:"json-comment-optional"
},i=dojo.xhrGet(l);i.addCallback(s),i.addErrback(n)}});