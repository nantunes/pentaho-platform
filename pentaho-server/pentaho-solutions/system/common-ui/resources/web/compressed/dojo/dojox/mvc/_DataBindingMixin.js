define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/Stateful","dijit/registry"],function(t,i,e,n,a,d){
return t.deprecated("dojox.mvc._DataBindingMixin","Use dojox/mvc/at for data binding."),
n("dojox.mvc._DataBindingMixin",null,{ref:null,isValid:function(){var t=this.get("valid");
return"undefined"!=typeof t?t:this.get("binding")?this.get("binding").get("valid"):!0;
},_dbstartup:function(){this._databound||(this._unwatchArray(this._viewWatchHandles),
this._viewWatchHandles=[this.watch("ref",function(t,i,e){this._databound&&i!==e&&this._setupBinding();
}),this.watch("value",function(t,i,e){if(this._databound){var n=this.get("binding");
n&&(e&&i&&i.valueOf()===e.valueOf()||n.set("value",e))}})],this._beingBound=!0,this._setupBinding(),
delete this._beingBound,this._databound=!0)},_setupBinding:function(t){if(this.ref){
var e,n,a=this.ref;if(a&&i.isFunction(a.toPlainObject))n=a;else if(/^\s*expr\s*:\s*/.test(a))a=a.replace(/^\s*expr\s*:\s*/,""),
n=i.getObject(a);else if(/^\s*rel\s*:\s*/.test(a))a=a.replace(/^\s*rel\s*:\s*/,""),
t=t||this._getParentBindingFromDOM(),t&&(n=i.getObject(""+a,!1,t));else if(/^\s*widget\s*:\s*/.test(a)){
a=a.replace(/^\s*widget\s*:\s*/,"");var s=a.split(".");1==s.length?n=d.byId(a).get("binding"):(e=d.byId(s.shift()).get("binding"),
n=i.getObject(s.join("."),!1,e))}else if(t=t||this._getParentBindingFromDOM())n=i.getObject(""+a,!1,t);else try{
var o=i.getObject(""+a)||{};i.isFunction(o.set)&&i.isFunction(o.watch)&&(n=o)}catch(r){
-1==a.indexOf("${")&&console.warn("dojox/mvc/_DataBindingMixin: '"+this.domNode+"' widget with illegal ref not evaluating to a dojo/Stateful node: '"+a+"'");
}n&&(i.isFunction(n.toPlainObject)?(this.binding=n,this[this._relTargetProp||"target"]!==n&&this.set(this._relTargetProp||"target",n),
this._updateBinding("binding",null,n)):console.warn("dojox/mvc/_DataBindingMixin: '"+this.domNode+"' widget with illegal ref not evaluating to a dojo/Stateful node: '"+a+"'"));
}},_isEqual:function(t,i){return t===i||isNaN(t)&&"number"==typeof t&&isNaN(i)&&"number"==typeof i;
},_updateBinding:function(t,e,n){this._unwatchArray(this._modelWatchHandles);var a=this.get("binding");
if(a&&i.isFunction(a.watch)){var d=this;this._modelWatchHandles=[a.watch("value",function(t,i,e){
d._isEqual(i,e)||d._isEqual(d.get("value"),e)||d.set("value",e)}),a.watch("valid",function(t,e,n){
d._updateProperty(t,e,n,!0),n!==d.get(t)&&d.validate&&i.isFunction(d.validate)&&d.validate();
}),a.watch("required",function(t,i,e){d._updateProperty(t,i,e,!1,t,e)}),a.watch("readOnly",function(t,i,e){
d._updateProperty(t,i,e,!1,t,e)}),a.watch("relevant",function(t,i,e){d._updateProperty(t,i,e,!1,"disabled",!e);
})];var s=a.get("value");null!=s&&this.set("value",s)}this._updateChildBindings();
},_updateProperty:function(t,i,e,n,a,d){i!==e&&(null===e&&void 0!==n&&(e=n),e!==this.get("binding").get(t)&&this.get("binding").set(t,e),
a&&this.set(a,d))},_updateChildBindings:function(t){var i=this.get("binding")||t;i&&!this._beingBound&&e.forEach(d.findWidgets(this.domNode),function(t){
t.ref&&t._setupBinding?t._setupBinding(i):t._updateChildBindings(i)})},_getParentBindingFromDOM:function(){
for(var t,e,n=this.domNode.parentNode;n&&(t=d.getEnclosingWidget(n),!(t&&(e=t.get("binding"),
e&&i.isFunction(e.toPlainObject))));)n=t?t.domNode.parentNode:null;return e},_unwatchArray:function(t){
e.forEach(t,function(t){t.unwatch()})}})});