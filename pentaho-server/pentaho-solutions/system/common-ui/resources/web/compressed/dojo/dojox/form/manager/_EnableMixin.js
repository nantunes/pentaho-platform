define(["dojo/_base/lang","dojo/_base/kernel","dojo/dom-attr","./_Mixin","dojo/_base/declare"],function(e,t,n,i,o){
var r=e.getObject("dojox.form.manager",!0),s=r.actionAdapter,a=r.inspectorAdapter;
return o("dojox.form.manager._EnableMixin",null,{gatherEnableState:function(t){var i=this.inspectFormWidgets(a(function(e,t){
return!t.get("disabled")}),t);return this.inspectFormNodes&&e.mixin(i,this.inspectFormNodes(a(function(e,t){
return!n.get(t,"disabled")}),t)),i},enable:function(e,t){return(arguments.length<2||void 0===t)&&(t=!0),
this.inspectFormWidgets(s(function(e,t,n){t.set("disabled",!n)}),e,t),this.inspectFormNodes&&this.inspectFormNodes(s(function(e,t,i){
n.set(t,"disabled",!i)}),e,t),this},disable:function(e){var t=this.gatherEnableState();
return this.enable(e,!1),t}})});