define(["dojo","dijit","dojox","dojox/editor/plugins/PasteFromWord","dijit/Dialog","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/string","dojo/i18n!dojox/editor/plugins/nls/SafePaste","dojo/i18n!dijit/nls/common","dojo/i18n!dijit/_editor/nls/commands"],function(i,t,e,o){
var s=i.declare("dojox.editor.plugins.SafePaste",[o],{_initButton:function(){this._filters=this._filters.slice(0);
var e=i.i18n.getLocalization("dojox.editor.plugins","SafePaste");i.mixin(e,i.i18n.getLocalization("dijit","common")),
i.mixin(e,i.i18n.getLocalization("dijit._editor","commands")),this._uId=t.getUniqueId(this.editor.id),
e.uId=this._uId,e.width=this.width||"400px",e.height=this.height||"300px",this._dialog=new t.Dialog({
title:e.paste}).placeAt(i.body()),this._dialog.set("content",i.string.substitute(this._template,e)),
i.style(i.byId(this._uId+"_rte"),"opacity",.001),this.connect(t.byId(this._uId+"_paste"),"onClick","_paste"),
this.connect(t.byId(this._uId+"_cancel"),"onClick","_cancel"),this.connect(this._dialog,"onHide","_clearDialog"),
i.forEach(this.stripTags,function(i){var t=i+"",e=new RegExp("<\\s*"+t+"[^>]*>","igm"),o=new RegExp("<\\\\?\\/\\s*"+t+"\\s*>","igm");
this._filters.push({regexp:e,handler:""}),this._filters.push({regexp:o,handler:""
})},this)},updateState:function(){},setEditor:function(t){this.editor=t,this._initButton(),
this.editor.onLoadDeferred.addCallback(i.hitch(this,function(){var t=i.hitch(this,function(t){
return t&&i.stopEvent(t),this._openDialog(),!0});this.connect(this.editor.editNode,"onpaste",t),
this.editor._pasteImpl=t}))}});return i.subscribe(t._scopeName+".Editor.getPlugin",null,function(i){
if(!i.plugin){var t=i.args.name.toLowerCase();"safepaste"===t&&(i.plugin=new s({width:i.args.hasOwnProperty("width")?i.args.width:"400px",
height:i.args.hasOwnProperty("height")?i.args.width:"300px",stripTags:i.args.hasOwnProperty("stripTags")?i.args.stripTags:null
}))}}),s});