define(["dojo","dijit","dojox","dijit/_editor/_Plugin","dijit/form/Button","dijit/form/ToggleButton","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/i18n!dojox/editor/plugins/nls/ShowBlockNodes"],function(e,o,t,i){
var n=e.declare("dojox.editor.plugins.ShowBlockNodes",i,{useDefaultCommand:!1,iconClassPrefix:"dijitAdditionalEditorIcon",
_styled:!1,_initButton:function(){var t=e.i18n.getLocalization("dojox.editor.plugins","ShowBlockNodes");
this.button=new o.form.ToggleButton({label:t.showBlockNodes,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"ShowBlockNodes",
tabIndex:"-1",onChange:e.hitch(this,"_showBlocks")}),this.editor.addKeyHandler(e.keys.F9,!0,!0,e.hitch(this,this.toggle));
},updateState:function(){this.button.set("disabled",this.get("disabled"))},setEditor:function(e){
this.editor=e,this._initButton()},toggle:function(){this.button.set("checked",!this.button.get("checked"));
},_showBlocks:function(o){var i=this.editor.document;if(!this._styled)try{this._styled=!0;
var n="",s=["div","p","ul","ol","table","h1","h2","h3","h4","h5","h6","pre","dir","center","blockquote","form","fieldset","address","object","pre","hr","ins","noscript","li","map","button","dd","dt"],d="@media screen {\n	.editorShowBlocks {TAG} {\n		background-image: url({MODURL}/images/blockelems/{TAG}.gif);\n		background-repeat: no-repeat;\n		background-position: top left;\n		border-width: 1px;\n		border-style: dashed;\n		border-color: #D0D0D0;\n		padding-top: 15px;\n		padding-left: 15px;\n	}\n}\n";
e.forEach(s,function(e){n+=d.replace(/\{TAG\}/gi,e)});var l=e.moduleUrl(t._scopeName,"editor/plugins/resources").toString();
if(!l.match(/^https?:\/\//i)&&!l.match(/^file:\/\//i)){var r;if("/"===l.charAt(0)){
var a=e.doc.location.protocol,c=e.doc.location.host;r=a+"//"+c}else r=this._calcBaseUrl(e.global.location.href);
"/"!==r[r.length-1]&&"/"!==l.charAt(0)&&(r+="/"),l=r+l}if(n=n.replace(/\{MODURL\}/gi,l),
e.isIE){var h=i.createStyleSheet("");h.cssText=n}else{var u=i.createElement("style");
u.appendChild(i.createTextNode(n)),i.getElementsByTagName("head")[0].appendChild(u);
}}catch(g){console.warn(g)}o?e.addClass(this.editor.editNode,"editorShowBlocks"):e.removeClass(this.editor.editNode,"editorShowBlocks");
},_calcBaseUrl:function(e){var o=null;if(null!==e){var t=e.indexOf("?");-1!=t&&(e=e.substring(0,t)),
t=e.lastIndexOf("/"),o=t>0&&t<e.length?e.substring(0,t):e}return o}});return e.subscribe(o._scopeName+".Editor.getPlugin",null,function(e){
if(!e.plugin){var o=e.args.name.toLowerCase();"showblocknodes"===o&&(e.plugin=new n);
}}),n});