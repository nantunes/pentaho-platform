define(["dojo/_base/declare","dojo/i18n","dojo/_base/lang","../_Plugin","../../form/Button","dojo/i18n!../nls/commands"],function(t,n,i,e,o){
var s=t("dijit._editor.plugins.NewPage",e,{content:"<br>",_initButton:function(){
var t=n.getLocalization("dijit._editor","commands"),e=this.editor;this.button=new o({
label:t.newPage,ownerDocument:e.ownerDocument,dir:e.dir,lang:e.lang,showLabel:!1,
iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"NewPage",tabIndex:"-1",onClick:i.hitch(this,"_newPage")
})},setEditor:function(t){this.editor=t,this._initButton()},updateState:function(){
this.button.set("disabled",this.get("disabled"))},_newPage:function(){this.editor.beginEditing(),
this.editor.set("value",this.content),this.editor.endEditing(),this.editor.focus();
}});return e.registry.newPage=e.registry.newpage=function(t){return new s({content:"content"in t?t.content:"<br>"
})},s});