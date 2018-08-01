define(["dojo/_base/declare","dojo/_base/lang","dojo/when","./getPlainValue","./EditModelRefController","./StoreRefController"],function(t,e,r,s,i,n){
return t("dojox.mvc.EditStoreRefController",[n,i],{getPlainValueOptions:null,_removals:[],
_resultsWatchHandle:null,_refSourceModelProp:"sourceModel",queryStore:function(t,s){
if((this.store||{}).query){this._resultsWatchHandle&&this._resultsWatchHandle.unwatch(),
this._removals=[];var i=this,n=this.inherited(arguments),o=r(n,function(t){return i._beingDestroyed?void 0:(e.isArray(t)&&(i._resultsWatchHandle=t.watchElements(function(t,e,r){
[].push.apply(i._removals,e)})),t)});o.then&&(o=e.delegate(o));for(var a in n)isNaN(a)&&n.hasOwnProperty(a)&&e.isFunction(n[a])&&(o[a]=n[a]);
return o}},getStore:function(t,e){return this._resultsWatchHandle&&this._resultsWatchHandle.unwatch(),
this.inherited(arguments)},commit:function(){if(this._removals){for(var t=0;t<this._removals.length;t++)this.store.remove(this.store.getIdentity(this._removals[t]));
this._removals=[]}var r=s(this.get(this._refEditModelProp),this.getPlainValueOptions);
if(e.isArray(r))for(var t=0;t<r.length;t++)this.store.put(r[t]);else this.store.put(r);
this.inherited(arguments)},reset:function(){this.inherited(arguments),this._removals=[];
},destroy:function(){this._resultsWatchHandle&&this._resultsWatchHandle.unwatch(),
this.inherited(arguments)}})});