define(["dojo/_base/declare","dojo/_base/kernel","../_Plugin","../../form/ToggleButton"],function(t,n,e,i){
n.experimental("dijit._editor.plugins.TabIndent");var d=t("dijit._editor.plugins.TabIndent",e,{
useDefaultCommand:!1,buttonClass:i,command:"tabIndent",_initButton:function(){this.inherited(arguments);
var t=this.editor;this.own(this.button.on("change",function(n){t.set("isTabIndent",n);
})),this.updateState()},updateState:function(){var t=this.get("disabled");this.button.set("disabled",t),
t||this.button.set("checked",this.editor.isTabIndent,!1)}});return e.registry.tabIndent=function(){
return new d({command:"tabIndent"})},d});