define(["dojo","dijit","dojox","dijit/_editor/_Plugin","dijit/form/DropDownButton","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojox/editor/plugins/_SmileyPalette","dojox/html/format","dojo/i18n!dojox/editor/plugins/nls/Smiley"],function(t,i,e,o){
t.experimental("dojox.editor.plugins.Smiley");var n=t.declare("dojox.editor.plugins.Smiley",o,{
iconClassPrefix:"dijitAdditionalEditorIcon",emoticonMarker:"[]",emoticonImageClass:"dojoEditorEmoticon",
_initButton:function(){this.dropDown=new e.editor.plugins._SmileyPalette,this.connect(this.dropDown,"onChange",function(t){
this.button.closeDropDown(),this.editor.focus(),t=this.emoticonMarker.charAt(0)+t+this.emoticonMarker.charAt(1),
this.editor.execCommand("inserthtml",t)}),this.i18n=t.i18n.getLocalization("dojox.editor.plugins","Smiley"),
this.button=new i.form.DropDownButton({label:this.i18n.smiley,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"Smiley",
tabIndex:"-1",dropDown:this.dropDown}),this.emoticonImageRegexp=new RegExp("class=(\"|')"+this.emoticonImageClass+"(\"|')");
},updateState:function(){this.button.set("disabled",this.get("disabled"))},setEditor:function(i){
if(this.editor=i,this._initButton(),this.editor.contentPreFilters.push(t.hitch(this,this._preFilterEntities)),
this.editor.contentPostFilters.push(t.hitch(this,this._postFilterEntities)),t.isFF){
var e=t.hitch(this,function(){var i=this.editor;return setTimeout(function(){i.editNode&&(t.style(i.editNode,"opacity","0.99"),
setTimeout(function(){i.editNode&&t.style(i.editNode,"opacity","")},0))},0),!0});this.editor.onLoadDeferred.addCallback(t.hitch(this,function(){
this.editor.addKeyHandler(t.keys.DELETE,!1,!1,e),this.editor.addKeyHandler(t.keys.BACKSPACE,!1,!1,e);
}))}},_preFilterEntities:function(i){return i.replace(/\[([^\]]*)\]/g,t.hitch(this,this._decode));
},_postFilterEntities:function(i){return i.replace(/<img [^>]*>/gi,t.hitch(this,this._encode));
},_decode:function(t,i){var o=e.editor.plugins.Emoticon.fromAscii(i);return o?o.imgHtml(this.emoticonImageClass):t;
},_encode:function(t){return t.search(this.emoticonImageRegexp)>-1?this.emoticonMarker.charAt(0)+t.replace(/(<img [^>]*)alt="([^"]*)"([^>]*>)/,"$2")+this.emoticonMarker.charAt(1):t;
}});return t.subscribe(i._scopeName+".Editor.getPlugin",null,function(t){t.plugin||"smiley"===t.args.name&&(t.plugin=new n);
}),n});