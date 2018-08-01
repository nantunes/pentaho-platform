define(["dojo","dijit","dojox","dijit/_editor/_Plugin","dijit/TooltipDialog","dijit/form/DropDownButton","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojox/html/entities","dojox/editor/plugins/EntityPalette","dojo/i18n!dojox/editor/plugins/nls/InsertEntity"],function(t,i,o,n){
var e=t.declare("dojox.editor.plugins.InsertEntity",n,{iconClassPrefix:"dijitAdditionalEditorIcon",
_initButton:function(){this.dropDown=new o.editor.plugins.EntityPalette({showCode:this.showCode,
showEntityName:this.showEntityName}),this.connect(this.dropDown,"onChange",function(t){
this.button.closeDropDown(),this.editor.focus(),this.editor.execCommand("inserthtml",t);
});var n=t.i18n.getLocalization("dojox.editor.plugins","InsertEntity");this.button=new i.form.DropDownButton({
label:n.insertEntity,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"InsertEntity",
tabIndex:"-1",dropDown:this.dropDown})},updateState:function(){this.button.set("disabled",this.get("disabled"));
},setEditor:function(i){this.editor=i,this._initButton(),this.editor.addKeyHandler("s",!0,!0,t.hitch(this,function(){
this.button.openDropDown(),this.dropDown.focus()})),i.contentPreFilters.push(this._preFilterEntities),
i.contentPostFilters.push(this._postFilterEntities)},_preFilterEntities:function(t){
return o.html.entities.decode(t,o.html.entities.latin)},_postFilterEntities:function(t){
return o.html.entities.encode(t,o.html.entities.latin)}});return t.subscribe(i._scopeName+".Editor.getPlugin",null,function(t){
if(!t.plugin){var i=t.args.name?t.args.name.toLowerCase():"";"insertentity"===i&&(t.plugin=new e({
showCode:"showCode"in t.args?t.args.showCode:!1,showEntityName:"showEntityName"in t.args?t.args.showEntityName:!1
}))}}),e});