define(["dojo","dijit","dojox","dijit/_base/manager","dijit/_base/popup","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/Dialog","dijit/MenuItem","dijit/Menu","dijit/form/Button","dijit/form/ComboButton","dijit/form/ComboBox","dijit/form/_TextBoxMixin","dijit/form/TextBox","dijit/TooltipDialog","dijit/_editor/_Plugin","dojo/_base/connect","dojo/_base/declare","dojo/date/locale","dojo/i18n","dojo/string","dojox/editor/plugins/Save","dojo/i18n!dojox/editor/plugins/nls/AutoSave"],function(t,i,e,o,n,s,a,l,r,u,d,h,g,c,_,v,m,p,S,f,b,j,x,C){
t.experimental("dojox.editor.plugins.AutoSave");var D=t.declare("dojox.editor.plugins._AutoSaveSettingDialog",[s,a,l],{
dialogTitle:"",dialogDescription:"",paramName:"",paramLabel:"",btnOk:"",btnCancel:"",
widgetsInTemplate:!0,templateString:"<span id='${dialogId}' class='dijit dijitReset dijitInline' tabindex='-1'><div dojoType='dijit.Dialog' title='${dialogTitle}' dojoAttachPoint='dialog' class='dijitEditorAutoSaveSettingDialog'><div tabindex='-1'>${dialogDescription}</div><div tabindex='-1' class='dijitEditorAutoSaveSettingInputArea'>${paramName}</div><div class='dijitEditorAutoSaveSettingInputArea' tabindex='-1'><input class='textBox' dojoType='dijit.form.TextBox' id='${textBoxId}' required='false' intermediateChanges='true' selectOnClick='true' required='true' dojoAttachPoint='intBox' dojoAttachEvent='onKeyDown: _onKeyDown, onChange: _onChange'/><label class='dijitLeft dijitInline boxLabel' for='${textBoxId}' tabindex='-1'>${paramLabel}</label></div><div class='dijitEditorAutoSaveSettingButtonArea' tabindex='-1'><button dojoType='dijit.form.Button' dojoAttachEvent='onClick: onOk'>${btnOk}</button><button dojoType='dijit.form.Button' dojoAttachEvent='onClick: onCancel'>${btnCancel}</button></div></div></span>",
postMixInProperties:function(){this.id=i.getUniqueId(this.declaredClass.replace(/\./g,"_")),
this.dialogId=this.id+"_dialog",this.textBoxId=this.id+"_textBox"},show:function(){
""==this._value?(this._value=0,this.intBox.set("value",0)):this.intBox.set("value",this._value),
this.dialog.show(),i.selectInputText(this.intBox.focusNode)},hide:function(){this.dialog.hide();
},onOk:function(){this.dialog.hide()},onCancel:function(){this.dialog.hide()},_onKeyDown:function(i){
i.keyCode==t.keys.ENTER&&this.onOk()},_onChange:function(t){this._isValidValue(t)?this._value=t:this.intBox.set("value",this._value);
},_setValueAttr:function(t){this._isValidValue(t)&&(this._value=t)},_getValueAttr:function(){
return this._value},_isValidValue:function(t){var i=/^\d{0,3}$/,e=String(t);return Boolean(e.match?e.match(i):"");
}}),I=t.declare("dojox.editor.plugins.AutoSave",C,{url:"",logResults:!0,interval:0,
_iconClassPrefix:"dijitEditorIconAutoSave",_MIN:6e4,_setIntervalAttr:function(t){
this.interval=t},_getIntervalAttr:function(){return this._interval},setEditor:function(e){
this.editor=e,this._strings=t.i18n.getLocalization("dojox.editor.plugins","AutoSave"),
this._initButton(),this._saveSettingDialog=new D({dialogTitle:this._strings.saveSettingdialogTitle,
dialogDescription:this._strings.saveSettingdialogDescription,paramName:this._strings.saveSettingdialogParamName,
paramLabel:this._strings.saveSettingdialogParamLabel,btnOk:this._strings.saveSettingdialogButtonOk,
btnCancel:this._strings.saveSettingdialogButtonCancel}),this.connect(this._saveSettingDialog,"onOk","_onDialogOk");
var o=this._promDialog=new i.TooltipDialog;o.startup(),o.set("content","")},_initButton:function(){
var e=new i.Menu({style:"display: none"}),o=new i.MenuItem({iconClass:this._iconClassPrefix+"Default "+this._iconClassPrefix,
label:this._strings.saveLabel}),n=this._menuItemAutoSave=new i.MenuItem({iconClass:this._iconClassPrefix+"Setting "+this._iconClassPrefix,
label:this._strings.saveSettingLabelOn});e.addChild(o),e.addChild(n),this.button=new i.form.ComboButton({
label:this._strings.saveLabel,iconClass:this._iconClassPrefix+"Default "+this._iconClassPrefix,
showLabel:!1,dropDown:e}),this.connect(this.button,"onClick","_save"),this.connect(o,"onClick","_save"),
this._menuItemAutoSaveClickHandler=t.connect(n,"onClick",this,"_showAutSaveSettingDialog");
},_showAutSaveSettingDialog:function(){var t=this._saveSettingDialog;t.set("value",this.interval),
t.show()},_onDialogOk:function(){var i=this.interval=this._saveSettingDialog.get("value")*this._MIN;
i>0&&(this._setSaveInterval(i),t.disconnect(this._menuItemAutoSaveClickHandler),this._menuItemAutoSave.set("label",this._strings.saveSettingLabelOff),
this._menuItemAutoSaveClickHandler=t.connect(this._menuItemAutoSave,"onClick",this,"_onStopClick"),
this.button.set("iconClass",this._iconClassPrefix+"Setting "+this._iconClassPrefix));
},_onStopClick:function(){this._clearSaveInterval(),t.disconnect(this._menuItemAutoSaveClickHandler),
this._menuItemAutoSave.set("label",this._strings.saveSettingLabelOn),this._menuItemAutoSaveClickHandler=t.connect(this._menuItemAutoSave,"onClick",this,"_showAutSaveSettingDialog"),
this.button.set("iconClass",this._iconClassPrefix+"Default "+this._iconClassPrefix);
},_setSaveInterval:function(i){0>=i||(this._clearSaveInterval(),this._intervalHandler=setInterval(t.hitch(this,function(){
this._isWorking||this.get("disabled")||(this._isWorking=!0,this._save())}),i))},_clearSaveInterval:function(){
this._intervalHandler&&(clearInterval(this._intervalHandler),this._intervalHandler=null);
},onSuccess:function(e,o){this.button.set("disabled",!1),this._promDialog.set("content",t.string.substitute(this._strings.saveMessageSuccess,{
0:t.date.locale.format(new Date,{selector:"time"})})),i.popup.open({popup:this._promDialog,
around:this.button.domNode}),this._promDialogTimeout=setTimeout(t.hitch(this,function(){
clearTimeout(this._promDialogTimeout),this._promDialogTimeout=null,i.popup.close(this._promDialog);
}),3e3),this._isWorking=!1,this.logResults&&console.log(e)},onError:function(e,o){
this.button.set("disabled",!1),this._promDialog.set("content",t.string.substitute(this._strings.saveMessageFail,{
0:t.date.locale.format(new Date,{selector:"time"})})),i.popup.open({popup:this._promDialog,
around:this.button.domNode}),this._promDialogTimeout=setTimeout(t.hitch(this,function(){
clearTimeout(this._promDialogTimeout),this._promDialogTimeout=null,i.popup.close(this._promDialog);
}),3e3),this._isWorking=!1,this.logResults&&console.log(e)},destroy:function(){this.inherited(arguments),
this._menuItemAutoSave=null,this._promDialogTimeout&&(clearTimeout(this._promDialogTimeout),
this._promDialogTimeout=null,i.popup.close(this._promDialog)),this._clearSaveInterval(),
this._saveSettingDialog&&(this._saveSettingDialog.destroyRecursive(),this._destroyRecursive=null),
this._menuItemAutoSaveClickHandler&&(t.disconnect(this._menuItemAutoSaveClickHandler),
this._menuItemAutoSaveClickHandler=null)}});return I._AutoSaveSettingDialog=D,t.subscribe(i._scopeName+".Editor.getPlugin",null,function(t){
if(!t.plugin){var i=t.args.name.toLowerCase();"autosave"==i&&(t.plugin=new I({url:"url"in t.args?t.args.url:"",
logResults:"logResults"in t.args?t.args.logResults:!0,interval:"interval"in t.args?t.args.interval:5
}))}}),I});