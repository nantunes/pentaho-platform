define(["dojo","dijit","dojox","dijit/_base/popup","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_editor/_Plugin","dijit/TooltipDialog","dijit/form/Button","dijit/form/DropDownButton","dojox/widget/ColorPicker","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/i18n!dojox/editor/plugins/nls/TextColor"],function(t,o,i,e,n,r,d,s){
t.experimental("dojox.editor.plugins.TextColor");var c=t.declare("dojox.editor.plugins._TextColorDropDown",[n,r,d],{
templateString:"<div style='display: none; position: absolute; top: -10000; z-index: -10000'><div dojoType='dijit.TooltipDialog' dojoAttachPoint='dialog' class='dojoxEditorColorPicker'><div dojoType='dojox.widget.ColorPicker' dojoAttachPoint='_colorPicker'></div><br><center><button dojoType='dijit.form.Button' type='button' dojoAttachPoint='_setButton'>${setButtonText}</button>&nbsp;<button dojoType='dijit.form.Button' type='button' dojoAttachPoint='_cancelButton'>${cancelButtonText}</button></center></div></div>",
widgetsInTemplate:!0,constructor:function(){var o=t.i18n.getLocalization("dojox.editor.plugins","TextColor");
t.mixin(this,o)},startup:function(){this._started||(this.inherited(arguments),this.connect(this._setButton,"onClick",t.hitch(this,function(){
this.onChange(this.get("value"))})),this.connect(this._cancelButton,"onClick",t.hitch(this,function(){
o.popup.close(this.dialog),this.onCancel()})),t.style(this.domNode,"display","block"));
},_setValueAttr:function(t,o){this._colorPicker.set("value",t,o)},_getValueAttr:function(){
return this._colorPicker.get("value")},onChange:function(t){},onCancel:function(){}
}),l=t.declare("dojox.editor.plugins.TextColor",s,{buttonClass:o.form.DropDownButton,
useDefaultCommand:!1,constructor:function(){this._picker=new c,t.body().appendChild(this._picker.domNode),
this._picker.startup(),this.dropDown=this._picker.dialog,this.connect(this._picker,"onChange",function(t){
this.editor.execCommand(this.command,t)}),this.connect(this._picker,"onCancel",function(){
this.editor.focus()})},updateState:function(){var o=this.editor,i=this.command;if(o&&o.isLoaded&&i.length){
var e,n=this.get("disabled");if(this.button){if(this.button.set("disabled",n),n)return;
try{e=o.queryCommandValue(i)||""}catch(r){e=""}}""==e&&(e="#000000"),"transparent"==e&&(e="#ffffff"),
"string"==typeof e?e.indexOf("rgb")>-1&&(e=t.colorFromRgb(e).toHex()):(e=(255&e)<<16|65280&e|(16711680&e)>>>16,
e=e.toString(16),e="#000000".slice(0,7-e.length)+e),e!==this._picker.get("value")&&this._picker.set("value",e,!1);
}},destroy:function(){this.inherited(arguments),this._picker.destroyRecursive(),delete this._picker;
}});return l._TextColorDropDown=c,t.subscribe(o._scopeName+".Editor.getPlugin",null,function(t){
if(!t.plugin)switch(t.args.name){case"foreColor":case"hiliteColor":t.plugin=new l({
command:t.args.name})}}),l});