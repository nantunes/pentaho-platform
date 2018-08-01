define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dijit/_WidgetBase","dijit/_WidgetsInTemplateMixin","dijit/_TemplatedMixin","dojox/math/_base","dijit/registry","dojo/text!./templates/FuncGen.html","dojox/calc/_Executor","dijit/form/ComboBox","dijit/form/SimpleTextarea","dijit/form/Button","dijit/form/TextBox"],function(t,e,i,o,n,s,a,u,c,r){
var l=t("dojox.calc.FuncGen",[o,s,n],{templateString:c,onSelect:function(){this.reset();
},onClear:function(){var t=confirm("Do you want to clear the name, argument, and body text?");
t&&this.clear()},saveFunction:function(t,e,i){},onSaved:function(){},clear:function(){
this.textarea.set("value",""),this.args.set("value",""),this.combo.set("value","");
},reset:function(){this.combo.get("value")in this.functions&&(this.textarea.set("value",this.functions[this.combo.get("value")].body),
this.args.set("value",this.functions[this.combo.get("value")].args))},onReset:function(){
if(this.combo.get("value")in this.functions){var t=confirm("Do you want to reset this function?");
t&&(this.reset(),this.status.set("value","The function has been reset to its last save point."));
}},deleteThing:function(t){this.writeStore.isItem(t)&&(this.writeStore.deleteItem(t),
this.writeStore.save())},deleteFunction:function(t){},onDelete:function(){var t;if((t=this.combo.get("value"))in this.functions){
var e=confirm("Do you want to delete this function?");if(e){var i=this.combo.item;
this.writeStore.deleteItem(i),this.writeStore.save(),this.deleteFunction(t),delete this.functions[t],
this.clear()}}else this.status.set("value","Function cannot be deleted, it isn't saved.");
},readyStatus:function(){this.status.set("value","Ready")},writeStore:null,readStore:null,
functions:null,startup:function(){this.combo.set("store",this.writeStore),this.inherited(arguments);
var t=u.getEnclosingWidget(this.domNode.parentNode);t&&"function"==typeof t.close?this.closeButton.set("onClick",e.hitch(t,"close")):i.set(this.closeButton.domNode,{
display:"none"})}});return e.mixin(r,{FuncGen:l})});