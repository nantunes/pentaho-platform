define(["dojo","dijit","dijit/registry","dijit/_base/popup","dijit/_editor/_Plugin","dijit/_editor/plugins/LinkDialog","dijit/TooltipDialog","dijit/form/_TextBoxMixin","dijit/form/Button","dijit/form/ValidationTextBox","dijit/form/DropDownButton","dojo/_base/connect","dojo/_base/declare","dojo/_base/sniff","dojox/form/FileUploader","dojo/i18n!dojox/editor/plugins/nls/LocalImage"],function(t,e,i,l,o,n,s,a,d,r,u,p,c,h,g,_){
var m=t.declare("dojox.editor.plugins.LocalImage",n.ImgLinkDialog,{uploadable:!1,
uploadUrl:"",baseImageUrl:"",fileMask:"*.jpg;*.jpeg;*.gif;*.png;*.bmp",urlRegExp:"",
htmlFieldName:"uploadedfile",_isLocalFile:!1,_messages:"",_cssPrefix:"dijitEditorEilDialog",
_closable:!0,linkDialogTemplate:["<div style='border-bottom: 1px solid black; padding-bottom: 2pt; margin-bottom: 4pt;'></div>","<div class='dijitEditorEilDialogDescription'>${prePopuTextUrl}${prePopuTextBrowse}</div>","<table role='presentation'><tr><td colspan='2'>","<label for='${id}_urlInput' title='${prePopuTextUrl}${prePopuTextBrowse}'>${url}</label>","</td></tr><tr><td class='dijitEditorEilDialogField'>","<input dojoType='dijit.form.ValidationTextBox' class='dijitEditorEilDialogField'regExp='${urlRegExp}' title='${prePopuTextUrl}${prePopuTextBrowse}'  selectOnClick='true' required='true' id='${id}_urlInput' name='urlInput' intermediateChanges='true' invalidMessage='${invalidMessage}' prePopuText='&lt;${prePopuTextUrl}${prePopuTextBrowse}&gt'>","</td><td>","<div id='${id}_browse' style='display:${uploadable}'>${browse}</div>","</td></tr><tr><td colspan='2'>","<label for='${id}_textInput'>${text}</label>","</td></tr><tr><td>","<input dojoType='dijit.form.TextBox' required='false' id='${id}_textInput' name='textInput' intermediateChanges='true' selectOnClick='true' class='dijitEditorEilDialogField'>","</td><td></td></tr><tr><td>","</td><td>","</td></tr><tr><td colspan='2'>","<button dojoType='dijit.form.Button' id='${id}_setButton'>${set}</button>","</td></tr></table>"].join(""),
_initButton:function(){var e=this;this._messages=_,this.tag="img";var o=this.dropDown=new s({
title:_[this.command+"Title"],onOpen:function(){e._initialFileUploader(),e._onOpenDialog(),
s.prototype.onOpen.apply(this,arguments),setTimeout(function(){a.selectInputText(e._urlInput.textbox),
e._urlInput.isLoadComplete=!0},0)},onClose:function(){t.disconnect(e.blurHandler),
e.blurHandler=null,this.onHide()},onCancel:function(){setTimeout(t.hitch(e,"_onCloseDialog"),0);
}}),n=this.getLabel(this.command),d=this.iconClassPrefix+" "+this.iconClassPrefix+this.command.charAt(0).toUpperCase()+this.command.substr(1),p=t.mixin({
label:n,showLabel:!1,iconClass:d,dropDown:this.dropDown,tabIndex:"-1"},this.params||{});
h("ie")||(p.closeDropDown=function(t){e._closable&&this._opened&&(l.close(this.dropDown),
t&&this.focus(),this._opened=!1,this.state=""),setTimeout(function(){e._closable=!0;
},10)}),this.button=new u(p);var c=this.fileMask.split(";"),g="";t.forEach(c,function(t){
t=t.replace(/\./,"\\.").replace(/\*/g,".*"),g+="|"+t+"|"+t.toUpperCase()}),_.urlRegExp=this.urlRegExp=g.substring(1),
this.uploadable||(_.prePopuTextBrowse="."),_.id=i.getUniqueId(this.editor.id),_.uploadable=this.uploadable?"inline":"none",
this._uniqueId=_.id,this._setContent("<div class='"+this._cssPrefix+"Title'>"+o.title+"</div>"+t.string.substitute(this.linkDialogTemplate,_)),
o.startup();var m=this._urlInput=i.byId(this._uniqueId+"_urlInput");if(this._textInput=i.byId(this._uniqueId+"_textInput"),
this._setButton=i.byId(this._uniqueId+"_setButton"),m){var f=r.prototype;m=t.mixin(m,{
isLoadComplete:!1,isValid:function(t){return this.isLoadComplete?f.isValid.apply(this,arguments):this.get("value").length>0;
},reset:function(){this.isLoadComplete=!1,f.reset.apply(this,arguments)}}),this.connect(m,"onKeyDown","_cancelFileUpload"),
this.connect(m,"onChange","_checkAndFixInput")}this._setButton&&this.connect(this._setButton,"onClick","_checkAndSetValue"),
this._connectTagEvents()},_initialFileUploader:function(){var t=null,e=this,i=e._uniqueId,l=i+"_browse",o=e._urlInput;
e.uploadable&&!e._fileUploader&&(t=e._fileUploader=new g({force:"html",uploadUrl:e.uploadUrl,
htmlFieldName:e.htmlFieldName,uploadOnChange:!1,selectMultipleFiles:!1,showProgress:!0
},l),t.reset=function(){e._isLocalFile=!1,t._resetHTML()},e.connect(t,"onClick",function(){
o.validate(!1),h("ie")||(e._closable=!1)}),e.connect(t,"onChange",function(t){e._isLocalFile=!0,
o.set("value",t[0].name),o.focus()}),e.connect(t,"onComplete",function(t){var i=e.baseImageUrl;
i=i&&"/"==i.charAt(i.length-1)?i:i+"/",o.set("value",i+t[0].file),e._isLocalFile=!1,
e._setDialogStatus(!0),e.setValue(e.dropDown.get("value"))}),e.connect(t,"onError",function(t){
console.log("Error occurred when uploading image file!"),e._setDialogStatus(!0)}));
},_checkAndFixInput:function(){this._setButton.set("disabled",!this._isValid())},
_isValid:function(){return this._urlInput.isValid()},_cancelFileUpload:function(){
this._fileUploader.reset(),this._isLocalFile=!1},_checkAndSetValue:function(){this._fileUploader&&this._isLocalFile?(this._setDialogStatus(!1),
this._fileUploader.upload()):this.setValue(this.dropDown.get("value"))},_setDialogStatus:function(t){
this._urlInput.set("disabled",!t),this._textInput.set("disabled",!t),this._setButton.set("disabled",!t);
},destroy:function(){this.inherited(arguments),this._fileUploader&&(this._fileUploader.destroy(),
delete this._fileUploader)}}),f=function(t){return new m({command:"insertImage",uploadable:"uploadable"in t?t.uploadable:!1,
uploadUrl:"uploadable"in t&&"uploadUrl"in t?t.uploadUrl:"",htmlFieldName:"uploadable"in t&&"htmlFieldName"in t?t.htmlFieldName:"uploadedfile",
baseImageUrl:"uploadable"in t&&"baseImageUrl"in t?t.baseImageUrl:"",fileMask:"fileMask"in t?t.fileMask:"*.jpg;*.jpeg;*.gif;*.png;*.bmp"
})};return o.registry.LocalImage=f,o.registry.localImage=f,o.registry.localimage=f,
m});