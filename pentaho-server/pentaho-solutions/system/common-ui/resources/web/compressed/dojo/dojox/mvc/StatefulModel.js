define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/Stateful","./getStateful","./getPlainValue","./StatefulArray"],function(t,e,i,a,r,o,s,l){
t.deprecated("dojox/mvc/StatefulModel","Use dojox/mvc/getStateful, dojox/mvc/getPlainValue, dojox/mvc/StatefulArray or one of the dojox/mvc/*RefControllers instead");
var u=a("dojox.mvc.StatefulModel",[r],{data:null,store:null,valid:!0,value:"",reset:function(){
if(!e.isObject(this.data)||this.data instanceof Date||this.data instanceof RegExp)this.set("value",this.data);else for(var t in this)this[t]&&e.isFunction(this[t].reset)&&this[t].reset();
},commit:function(t){this._commit();var e=t||this.store;e&&this._saveToStore(e)},
toPlainObject:function(){return s(this,u.getPlainValueOptions)},splice:function(t,i){
for(var a=new l([]).splice.apply(this,e._toArray(arguments)),n=0;n<a.length;n++)(this._removals=this._removals||[]).push(a[n].toPlainObject());
return a},add:function(t,e){if("number"==typeof this.get("length")&&/^[0-9]+$/.test(t.toString())){
if(this.get("length")<t-0)throw new Error("Out of bounds insert attempted, must be contiguous.");
this.splice(t-0,0,e)}else this.set(t,e)},remove:function(t){if("number"==typeof this.get("length")&&/^[0-9]+$/.test(t.toString())){
if(!this.get(t))throw new Error("Out of bounds delete attempted - no such index: "+n);
this.splice(t-0,1)}else{var e=this.get(t);if(!e)throw new Error("Illegal delete attempted - no such property: "+t);
this._removals=this._removals||[],this._removals.push(e.toPlainObject()),this.set(t,void 0),
delete this[t]}},valueOf:function(){return this.toPlainObject()},toString:function(){
return""===this.value&&this.data?this.data.toString():this.value.toString()},constructor:function(t){
var e=t&&"data"in t?t.data:this.data;this._createModel(e)},_createModel:function(t){
if(null!=t)if(t=o(t,u.getStatefulOptions),e.isArray(t))this.length=0,[].splice.apply(this,t);else if(e.isObject(t))for(var i in t)t.hasOwnProperty(i)&&(this[i]=t[i]);else this.set("value",t);
},_commit:function(){for(var t in this)this[t]&&e.isFunction(this[t]._commit)&&this[t]._commit();
this.data=this.toPlainObject()},_saveToStore:function(t){this._removals&&(i.forEach(this._removals,function(e){
t.remove(t.getIdentity(e))},this),delete this._removals);var a=this.toPlainObject();
e.isArray(a)?i.forEach(a,function(e){t.put(e)},this):t.put(a)}});return e.mixin(u,{
getStatefulOptions:{getType:function(t){return e.isArray(t)?"array":null!=t&&"[object Object]"=={}.toString.call(t)?"object":"value";
},getStatefulArray:function(t){var a=this,n=e.mixin(new l(i.map(t,function(t){return o(t,a);
})));for(var r in u.prototype)"set"!=r&&(n[r]=u.prototype[r]);return n.data=t,n},
getStatefulObject:function(t){var e=new u;e.data=t;for(var i in t)e.set(i,o(t[i],this));
return e},getStatefulValue:function(t){var e=new u;return e.data=t,e.set("value",t),
e}},getPlainValueOptions:{getType:function(t){if(e.isArray(t))return"array";if(e.isObject(t))for(var i in t)if(t.hasOwnProperty(i)&&"value"!=i&&(t[i]||{}).get&&(t[i]||{}).watch)return"object";
return"value"},getPlainArray:function(t){return i.map(t,function(t){return s(t,this);
},this)},getPlainObject:function(t){var e={};for(var i in t)"_watchCallbacks"==i||i in u.prototype||(e[i]=s(t[i],this));
return e},getPlainValue:function(t){return(t||{}).set&&(t||{}).watch?s(t.value,this):t;
}}}),u});