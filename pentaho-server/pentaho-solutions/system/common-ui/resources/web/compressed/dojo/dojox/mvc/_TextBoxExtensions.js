define(["dojo/_base/lang","dijit/_WidgetBase","dijit/form/ValidationTextBox","dijit/form/NumberTextBox"],function(i,t,e,o){
var a=e.prototype.isValid;e.prototype.isValid=function(i){return this.inherited("isValid",arguments)!==!1&&a.apply(this,[i]);
};var n=o.prototype.isValid;o.prototype.isValid=function(i){return this.inherited("isValid",arguments)!==!1&&n.apply(this,[i]);
},i.isFunction(t.prototype.isValid)||(t.prototype.isValid=function(){var i=this.get("valid");
return"undefined"==typeof i?!0:i}),t.prototype._setValidAttr=function(i){this._set("valid",i),
this.validate()}});