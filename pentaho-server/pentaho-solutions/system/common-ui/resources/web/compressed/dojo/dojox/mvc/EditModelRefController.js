define(["dojo/_base/declare","dojo/_base/lang","./getPlainValue","./getStateful","./ModelRefController"],function(e,o,t,i,l){
function r(e,o,t){o!==t&&(e.set(e._refOriginalModelProp,e.holdModelUntilCommit?t:e.cloneModel(t)),
e.set(e._refEditModelProp,e.holdModelUntilCommit?e.cloneModel(t):t))}return e("dojox.mvc.EditModelRefController",l,{
getStatefulOptions:null,getPlainValueOptions:null,holdModelUntilCommit:!1,originalModel:null,
sourceModel:null,_refOriginalModelProp:"originalModel",_refSourceModelProp:"sourceModel",
_refEditModelProp:"model",postscript:function(e,o){for(var t in{getStatefulOptions:1,
getPlainValueOptions:1,holdModelUntilCommit:1}){var i=(e||{})[t];"undefined"!=typeof i&&(this[t]=i);
}this.inherited(arguments)},set:function(e,o){e==this._refSourceModelProp&&r(this,this[this._refSourceModelProp],o),
this.inherited(arguments)},cloneModel:function(e){var l=o.isFunction((e||{}).set)&&o.isFunction((e||{}).watch)?t(e,this.getPlainValueOptions):e;
return i(l,this.getStatefulOptions)},commit:function(){this.set(this.holdModelUntilCommit?this._refSourceModelProp:this._refOriginalModelProp,this.cloneModel(this.get(this._refEditModelProp)));
},reset:function(){this.set(this.holdModelUntilCommit?this._refEditModelProp:this._refSourceModelProp,this.cloneModel(this.get(this._refOriginalModelProp)));
},hasControllerProperty:function(e){return this.inherited(arguments)||e==this._refOriginalModelProp||e==this._refSourceModelProp;
}})});