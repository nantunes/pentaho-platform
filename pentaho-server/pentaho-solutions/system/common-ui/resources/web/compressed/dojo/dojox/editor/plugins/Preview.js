define(["dojo","dijit","dojox","dijit/_editor/_Plugin","dijit/form/Button","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/i18n!dojox/editor/plugins/nls/Preview"],function(e,t,s,i){
var n=e.declare("dojox.editor.plugins.Preview",i,{useDefaultCommand:!1,styles:"",
stylesheets:null,iconClassPrefix:"dijitAdditionalEditorIcon",_initButton:function(){
this._nlsResources=e.i18n.getLocalization("dojox.editor.plugins","Preview"),this.button=new t.form.Button({
label:this._nlsResources.preview,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"Preview",
tabIndex:"-1",onClick:e.hitch(this,"_preview")})},setEditor:function(e){this.editor=e,
this._initButton()},updateState:function(){this.button.set("disabled",this.get("disabled"));
},_preview:function(){try{var e,t=this.editor.get("value"),s="		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>\n";
if(this.stylesheets)for(e=0;e<this.stylesheets.length;e++)s+="		<link rel='stylesheet' type='text/css' href='"+this.stylesheets[e]+"'>\n";
this.styles&&(s+="		<style>"+this.styles+"</style>\n"),t="<html>\n	<head>\n"+s+"	</head>\n	<body>\n"+t+"\n	</body>\n</html>";
var i=window.open("javascript: ''",this._nlsResources.preview,"status=1,menubar=0,location=0,toolbar=0");
i.document.open(),i.document.write(t),i.document.close()}catch(n){console.warn(n);
}}});return e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){
var t=e.args.name.toLowerCase();"preview"===t&&(e.plugin=new n({styles:"styles"in e.args?e.args.styles:"",
stylesheets:"stylesheets"in e.args?e.args.stylesheets:null}))}}),n});