define(["dojo","dijit","dojox","dijit/_editor/_Plugin","dijit/_base/manager","dijit/_editor/RichText","dijit/form/Button","dijit/Dialog","dojox/html/format","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/string","dojo/i18n!dojox/editor/plugins/nls/PasteFromWord","dojo/i18n!dijit/nls/common","dojo/i18n!dijit/_editor/nls/commands"],function(t,i,e,o){
var s=t.declare("dojox.editor.plugins.PasteFromWord",o,{iconClassPrefix:"dijitAdditionalEditorIcon",
width:"400px",height:"300px",_template:["<div class='dijitPasteFromWordEmbeddedRTE'>","<div style='width: ${width}; padding-top: 5px; padding-bottom: 5px;'>${instructions}</div>","<div id='${uId}_rte' style='width: ${width}; height: ${height}'></div>","<table style='width: ${width}' tabindex='-1'>","<tbody>","<tr>","<td align='center'>","<button type='button' dojoType='dijit.form.Button' id='${uId}_paste'>${paste}</button>","&nbsp;","<button type='button' dojoType='dijit.form.Button' id='${uId}_cancel'>${buttonCancel}</button>","</td>","</tr>","</tbody>","</table>","</div>"].join(""),
_filters:[{regexp:/(<meta\s*[^>]*\s*>)|(<\s*link\s* href="file:[^>]*\s*>)|(<\/?\s*\w+:[^>]*\s*>)/gi,
handler:""},{regexp:/(?:<style([^>]*)>([\s\S]*?)<\/style>|<link\s+(?=[^>]*rel=['"]?stylesheet)([^>]*?href=(['"])([^>]*?)\4[^>\/]*)\/?>)/gi,
handler:""},{regexp:/(class="Mso[^"]*")|(<!--(.|\s){1,}?-->)/gi,handler:""},{regexp:/(<p[^>]*>\s*(\&nbsp;|\u00A0)*\s*<\/p[^>]*>)|(<p[^>]*>\s*<font[^>]*>\s*(\&nbsp;|\u00A0)*\s*<\/\s*font\s*>\s<\/p[^>]*>)/gi,
handler:""},{regexp:/(style="[^"]*mso-[^;][^"]*")|(style="margin:\s*[^;"]*;")/gi,
handler:""},{regexp:/(<\s*script[^>]*>((.|\s)*?)<\\?\/\s*script\s*>)|(<\s*script\b([^<>]|\s)*>?)|(<[^>]*=(\s|)*[("|')]javascript:[^$1][(\s|.)]*[$1][^>]*>)/gi,
handler:""},{regexp:/<(\/?)o\:p[^>]*>/gi,handler:""}],_initButton:function(){this._filters=this._filters.slice(0);
var e=t.i18n.getLocalization("dojox.editor.plugins","PasteFromWord");t.mixin(e,t.i18n.getLocalization("dijit","common")),
t.mixin(e,t.i18n.getLocalization("dijit._editor","commands")),this.button=new i.form.Button({
label:e.pasteFromWord,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"PasteFromWord",
tabIndex:"-1",onClick:t.hitch(this,"_openDialog")}),this._uId=i.getUniqueId(this.editor.id),
e.uId=this._uId,e.width=this.width||"400px",e.height=this.height||"300px",this._dialog=new i.Dialog({
title:e.pasteFromWord}).placeAt(t.body()),this._dialog.set("content",t.string.substitute(this._template,e)),
t.style(t.byId(this._uId+"_rte"),"opacity",.001),this.connect(i.byId(this._uId+"_paste"),"onClick","_paste"),
this.connect(i.byId(this._uId+"_cancel"),"onClick","_cancel"),this.connect(this._dialog,"onHide","_clearDialog");
},updateState:function(){this.button.set("disabled",this.get("disabled"))},setEditor:function(t){
this.editor=t,this._initButton()},_openDialog:function(){this._dialog.show(),this._rte||setTimeout(t.hitch(this,function(){
this._rte=new i._editor.RichText({height:this.height||"300px"},this._uId+"_rte"),
this._rte.startup(),this._rte.onLoadDeferred.addCallback(t.hitch(this,function(){
t.animateProperty({node:this._rte.domNode,properties:{opacity:{start:.001,end:1}}
}).play()}))}),100)},_paste:function(){var t=e.html.format.prettyPrint(this._rte.get("value"));
this._dialog.hide();var i;for(i=0;i<this._filters.length;i++){var o=this._filters[i];
t=t.replace(o.regexp,o.handler)}t=e.html.format.prettyPrint(t),this.editor.focus(),
this.editor.execCommand("inserthtml",t)},_cancel:function(){this._dialog.hide()},
_clearDialog:function(){this._rte.set("value","")},destroy:function(){this._rte&&this._rte.destroy(),
this._dialog&&this._dialog.destroyRecursive(),delete this._dialog,delete this._rte,
this.inherited(arguments)}});return t.subscribe(i._scopeName+".Editor.getPlugin",null,function(t){
if(!t.plugin){var i=t.args.name.toLowerCase();"pastefromword"===i&&(t.plugin=new s({
width:"width"in t.args?t.args.width:"400px",height:"height"in t.args?t.args.width:"300px"
}))}}),s});