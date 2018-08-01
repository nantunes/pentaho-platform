define(["dojo","dijit","dojox","dijit/_Widget","dijit/_TemplatedMixin","dijit/_PaletteMixin","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/i18n!dojox/editor/plugins/nls/Smiley"],function(i,e,t,o,n,l){
i.experimental("dojox.editor.plugins._SmileyPalette");var a=i.declare("dojox.editor.plugins.Emoticon",null,{
constructor:function(i){this.id=i},getValue:function(){return a.ascii[this.id]},imgHtml:function(e){
var t="emoticon"+this.id.substr(0,1).toUpperCase()+this.id.substr(1),o=i.moduleUrl("dojox.editor.plugins","resources/emoticons/"+t+".gif"),n=i.i18n.getLocalization("dojox.editor.plugins","Smiley")[t],l=['<img src="',o,'" class="',e,'" alt="',this.getValue(),'" title="',n,'">'];
return l.join("")},fillCell:function(e,t){i.place(this.imgHtml("dijitPaletteImg"),e);
}});a.ascii={smile:":-)",laughing:"lol",wink:";-)",grin:":-D",cool:"8-)",angry:":-@",
half:":-/",eyebrow:"/:)",frown:":-(",shy:":-$",goofy:":-S",oops:":-O",tongue:":-P",
idea:"(i)",yes:"(y)",no:"(n)",angel:"0:-)",crying:":'(",happy:"=)"},a.fromAscii=function(i){
var e=a.ascii;for(var t in e)if(i==e[t])return new a(t);return null};var r=i.declare("dojox.editor.plugins._SmileyPalette",[o,n,l],{
templateString:'<table class="dijitInline dijitEditorSmileyPalette dijitPaletteTable" cellSpacing=0 cellPadding=0><tbody dojoAttachPoint="gridNode"></tbody></table>',
baseClass:"dijitEditorSmileyPalette",_palette:[["smile","laughing","wink","grin"],["cool","angry","half","eyebrow"],["frown","shy","goofy","oops"],["tongue","idea","angel","happy"],["yes","no","crying",""]],
dyeClass:a,buildRendering:function(){this.inherited(arguments);var e=i.i18n.getLocalization("dojox.editor.plugins","Smiley"),t={};
for(var o in e)"emoticon"==o.substr(0,8)&&(t[o.substr(8).toLowerCase()]=e[o]);this._preparePalette(this._palette,t);
}});return r.Emoticon=a,r});