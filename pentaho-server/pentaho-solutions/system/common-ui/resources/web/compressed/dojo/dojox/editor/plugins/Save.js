define(["dojo","dijit","dojox","dijit/_editor/_Plugin","dijit/form/Button","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/i18n!dojox/editor/plugins/nls/Save"],function(t,o,i,s){
var e=t.declare("dojox.editor.plugins.Save",s,{iconClassPrefix:"dijitAdditionalEditorIcon",
url:"",logResults:!0,_initButton:function(){var i=t.i18n.getLocalization("dojox.editor.plugins","Save");
this.button=new o.form.Button({label:i.save,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"Save",
tabIndex:"-1",onClick:t.hitch(this,"_save")})},updateState:function(){this.button.set("disabled",this.get("disabled"));
},setEditor:function(t){this.editor=t,this._initButton()},_save:function(){var t=this.editor.get("value");
this.save(t)},save:function(o){var i={"Content-Type":"text/html"};if(this.url){var s={
url:this.url,postData:o,headers:i,handleAs:"text"};this.button.set("disabled",!0);
var e=t.xhrPost(s);e.addCallback(t.hitch(this,this.onSuccess)),e.addErrback(t.hitch(this,this.onError));
}else console.log("No URL provided, no post-back of content: "+o)},onSuccess:function(t,o){
this.button.set("disabled",!1),this.logResults&&console.log(t)},onError:function(t,o){
this.button.set("disabled",!1),this.logResults&&console.log(t)}});return t.subscribe(o._scopeName+".Editor.getPlugin",null,function(t){
if(!t.plugin){var o=t.args.name.toLowerCase();"save"===o&&(t.plugin=new e({url:"url"in t.args?t.args.url:"",
logResults:"logResults"in t.args?t.args.logResults:!0}))}}),e});