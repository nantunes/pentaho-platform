dojo.provide("dojox.wire.ml.DataStore"),dojo.require("dijit._Widget"),dojo.require("dojox.wire._base"),
dojo.declare("dojox.wire.ml.DataStore",dijit._Widget,{storeClass:"",postCreate:function(){
this.store=this._createStore()},_createStore:function(){if(!this.storeClass)return null;
var e=dojox.wire._getClass(this.storeClass);if(!e)return null;for(var t={},r=this.domNode.attributes,o=0;o<r.length;o++){
var i=r.item(o);i.specified&&!this[i.nodeName]&&(t[i.nodeName]=i.nodeValue)}return new e(t);
},getFeatures:function(){return this.store.getFeatures()},fetch:function(e){return this.store.fetch(e);
},save:function(e){this.store.save(e)},newItem:function(e){return this.store.newItem(e);
},deleteItem:function(e){return this.store.deleteItem(e)},revert:function(){return this.store.revert();
}});