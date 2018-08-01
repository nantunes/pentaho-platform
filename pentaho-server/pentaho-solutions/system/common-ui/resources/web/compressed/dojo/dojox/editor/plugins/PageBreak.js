define(["dojo","dijit","dojox","dijit/_editor/_Plugin","dijit/form/Button","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/i18n!dojox/editor/plugins/nls/PageBreak"],function(e,t,i,o){
var r=e.declare("dojox.editor.plugins.PageBreak",o,{useDefaultCommand:!1,iconClassPrefix:"dijitAdditionalEditorIcon",
_unbreakableNodes:["li","ul","ol"],_pbContent:"<hr style='page-break-after: always;' class='dijitEditorPageBreak'>",
_initButton:function(){var i=this.editor,o=e.i18n.getLocalization("dojox.editor.plugins","PageBreak");
this.button=new t.form.Button({label:o.pageBreak,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"PageBreak",
tabIndex:"-1",onClick:e.hitch(this,"_insertPageBreak")}),i.onLoadDeferred.addCallback(e.hitch(this,function(){
i.addKeyHandler(e.keys.ENTER,!0,!0,e.hitch(this,this._insertPageBreak)),(e.isWebKit||e.isOpera)&&this.connect(this.editor,"onKeyDown",e.hitch(this,function(t){
t.keyCode===e.keys.ENTER&&t.ctrlKey&&t.shiftKey&&this._insertPageBreak()}))}))},updateState:function(){
this.button.set("disabled",this.get("disabled"))},setEditor:function(e){this.editor=e,
this._initButton()},_style:function(){if(!this._styled){this._styled=!0;var t=this.editor.document,i=".dijitEditorPageBreak {\n	border-top-style: solid;\n	border-top-width: 3px;\n	border-top-color: #585858;\n	border-bottom-style: solid;\n	border-bottom-width: 1px;\n	border-bottom-color: #585858;\n	border-left-style: solid;\n	border-left-width: 1px;\n	border-left-color: #585858;\n	border-right-style: solid;\n	border-right-width: 1px;\n	border-right-color: #585858;\n	color: #A4A4A4;\n	background-color: #A4A4A4;\n	height: 10px;\n	page-break-after: always;\n	padding: 0px 0px 0px 0px;\n}\n\n@media print {\n	.dijitEditorPageBreak { page-break-after: always; background-color: rgba(0,0,0,0); color: rgba(0,0,0,0); border: 0px none rgba(0,0,0,0); display: hidden; width: 0px; height: 0px;}\n}";
if(e.isIE){var o=t.createStyleSheet("");o.cssText=i}else{var r=t.createElement("style");
r.appendChild(t.createTextNode(i)),t.getElementsByTagName("head")[0].appendChild(r);
}}},_insertPageBreak:function(){try{this._styled||this._style(),this._allowBreak()&&this.editor.execCommand("inserthtml",this._pbContent);
}catch(e){console.warn(e)}},_allowBreak:function(){for(var e=this.editor,t=e.document,i=e._sCall("getSelectedElement",[])||e._sCall("getParentElement",[]);i&&i!==t.body&&i!==t.html;){
if(e._sCall("isTag",[i,this._unbreakableNodes]))return!1;i=i.parentNode}return!0}
});return e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){
var t=e.args.name.toLowerCase();"pagebreak"===t&&(e.plugin=new r({}))}}),r});