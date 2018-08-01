define(["dojo","dijit","dojox","dijit/_editor/_Plugin","dijit/_base/manager","dijit/_editor/range","dijit/_Templated","dijit/TooltipDialog","dijit/form/ValidationTextBox","dijit/form/Select","dijit/form/Button","dijit/form/DropDownButton","dojo/_base/declare","dojo/i18n","dojo/string","dojo/NodeList-dom","dojox/editor/plugins/ToolbarLineBreak","dojo/i18n!dojox/editor/plugins/nls/InsertAnchor","dojo/i18n!dijit/nls/common"],function(t,e,n,i){
var o=t.declare("dojox.editor.plugins.InsertAnchor",i,{htmlTemplate:'<a name="${anchorInput}" class="dijitEditorPluginInsertAnchorStyle">${textInput}</a>',
iconClassPrefix:"dijitAdditionalEditorIcon",_template:["<table role='presentation'><tr><td>","<label for='${id}_anchorInput'>${anchor}</label>","</td><td>","<input dojoType='dijit.form.ValidationTextBox' required='true' id='${id}_anchorInput' name='anchorInput' intermediateChanges='true'>","</td></tr><tr><td>","<label for='${id}_textInput'>${text}</label>","</td><td>","<input dojoType='dijit.form.ValidationTextBox' required='true' id='${id}_textInput' name='textInput' intermediateChanges='true'>","</td></tr>","<tr><td colspan='2'>","<button dojoType='dijit.form.Button' type='submit' id='${id}_setButton'>${set}</button>","<button dojoType='dijit.form.Button' type='button' id='${id}_cancelButton'>${cancel}</button>","</td></tr></table>"].join(""),
_initButton:function(){var n=this,i=t.i18n.getLocalization("dojox.editor.plugins","InsertAnchor",this.lang),o=this.dropDown=new e.TooltipDialog({
title:i.title,execute:t.hitch(this,"setValue"),onOpen:function(){n._onOpenDialog(),
e.TooltipDialog.prototype.onOpen.apply(this,arguments)},onCancel:function(){setTimeout(t.hitch(n,"_onCloseDialog"),0);
}});this.button=new e.form.DropDownButton({label:i.insertAnchor,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"InsertAnchor",
tabIndex:"-1",dropDown:this.dropDown}),i.id=e.getUniqueId(this.editor.id),this._uniqueId=i.id,
this.dropDown.set("content",o.title+"<div style='border-bottom: 1px black solid;padding-bottom:2pt;margin-bottom:4pt'></div>"+t.string.substitute(this._template,i)),
o.startup(),this._anchorInput=e.byId(this._uniqueId+"_anchorInput"),this._textInput=e.byId(this._uniqueId+"_textInput"),
this._setButton=e.byId(this._uniqueId+"_setButton"),this.connect(e.byId(this._uniqueId+"_cancelButton"),"onClick",function(){
this.dropDown.onCancel()}),this._anchorInput&&this.connect(this._anchorInput,"onChange","_checkInput"),
this._textInput&&this.connect(this._anchorInput,"onChange","_checkInput"),this.editor.contentDomPreFilters.push(t.hitch(this,this._preDomFilter)),
this.editor.contentDomPostFilters.push(t.hitch(this,this._postDomFilter)),this._setup();
},updateState:function(){this.button.set("disabled",this.get("disabled"))},setEditor:function(t){
this.editor=t,this._initButton()},_checkInput:function(){var t=!0;this._anchorInput.isValid()&&(t=!1),
this._setButton.set("disabled",t)},_setup:function(){this.editor.onLoadDeferred.addCallback(t.hitch(this,function(){
this.connect(this.editor.editNode,"ondblclick",this._onDblClick),setTimeout(t.hitch(this,function(){
this._applyStyles()}),100)}))},getAnchorStyle:function(){var e="@media screen {\n	.dijitEditorPluginInsertAnchorStyle {\n		background-image: url({MODURL}/images/anchor.gif);\n		background-repeat: no-repeat;\n		background-position: top left;\n		border-width: 1px;\n		border-style: dashed;\n		border-color: #D0D0D0;\n		padding-left: 20px;\n	}\n}\n",i=t.moduleUrl(n._scopeName,"editor/plugins/resources").toString();
if(!i.match(/^https?:\/\//i)&&!i.match(/^file:\/\//i)){var o;if("/"===i.charAt(0)){
var r=t.doc.location.protocol,s=t.doc.location.host;o=r+"//"+s}else o=this._calcBaseUrl(t.global.location.href);
"/"!==o[o.length-1]&&"/"!==i.charAt(0)&&(o+="/"),i=o+i}return e.replace(/\{MODURL\}/gi,i);
},_applyStyles:function(){if(!this._styled)try{this._styled=!0;var e=this.editor.document,n=this.getAnchorStyle();
if(t.isIE){var i=e.createStyleSheet("");i.cssText=n}else{var o=e.createElement("style");
o.appendChild(e.createTextNode(n)),e.getElementsByTagName("head")[0].appendChild(o);
}}catch(r){}},_calcBaseUrl:function(t){var e=null;if(null!==t){var n=t.indexOf("?");
-1!=n&&(t=t.substring(0,n)),n=t.lastIndexOf("/"),e=n>0&&n<t.length?t.substring(0,n):t;
}return e},_checkValues:function(t){return t&&(t.anchorInput&&(t.anchorInput=t.anchorInput.replace(/"/g,"&quot;")),
t.textInput||(t.textInput="&nbsp;")),t},setValue:function(n){if(this._onCloseDialog(),
!this.editor.window.getSelection){var i=e.range.getSelection(this.editor.window),o=i.getRangeAt(0),r=o.endContainer;
3===r.nodeType&&(r=r.parentNode),r&&r.nodeName&&"a"!==r.nodeName.toLowerCase()&&(r=this.editor._sCall("getSelectedElement",["a"])),
r&&r.nodeName&&"a"===r.nodeName.toLowerCase()&&this.editor.queryCommandEnabled("unlink")&&(this.editor._sCall("selectElementChildren",[r]),
this.editor.execCommand("unlink"))}n=this._checkValues(n),this.editor.execCommand("inserthtml",t.string.substitute(this.htmlTemplate,n));
},_onCloseDialog:function(){this.editor.focus()},_getCurrentValues:function(e){var n,i;
return e&&"a"===e.tagName.toLowerCase()&&t.attr(e,"name")?(n=t.attr(e,"name"),i=e.textContent||e.innerText,
this.editor._sCall("selectElement",[e,!0])):i=this.editor._sCall("getSelectedText"),
{anchorInput:n||"",textInput:i||""}},_onOpenDialog:function(){var t;if(this.editor.window.getSelection)t=this.editor._sCall("getAncestorElement",["a"]);else{
var n=e.range.getSelection(this.editor.window),i=n.getRangeAt(0);t=i.endContainer,
3===t.nodeType&&(t=t.parentNode),t&&t.nodeName&&"a"!==t.nodeName.toLowerCase()&&(t=this.editor._sCall("getSelectedElement",["a"]));
}this.dropDown.reset(),this._setButton.set("disabled",!0),this.dropDown.set("value",this._getCurrentValues(t));
},_onDblClick:function(e){if(e&&e.target){var n=e.target,i=n.tagName?n.tagName.toLowerCase():"";
"a"===i&&t.attr(n,"name")&&(this.editor.onDisplayChanged(),this.editor._sCall("selectElement",[n]),
setTimeout(t.hitch(this,function(){this.button.set("disabled",!1),this.button.openDropDown(),
this.button.dropDown.focus&&this.button.dropDown.focus()}),10))}},_preDomFilter:function(e){
t.query("a[name]:not([href])",this.editor.editNode).addClass("dijitEditorPluginInsertAnchorStyle");
},_postDomFilter:function(e){return e&&t.query("a[name]:not([href])",e).removeClass("dijitEditorPluginInsertAnchorStyle"),
e}});return t.subscribe(e._scopeName+".Editor.getPlugin",null,function(t){if(!t.plugin){
var e=t.args.name;e&&(e=e.toLowerCase()),"insertanchor"===e&&(t.plugin=new o)}}),
o});