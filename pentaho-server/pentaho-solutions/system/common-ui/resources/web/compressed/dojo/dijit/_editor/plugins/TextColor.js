define(["require","dojo/colors","dojo/_base/declare","dojo/_base/lang","../_Plugin","../../form/DropDownButton"],function(t,o,e,n,i,r){
var a=e("dijit._editor.plugins.TextColor",i,{buttonClass:r,useDefaultCommand:!1,_initButton:function(){
this.inherited(arguments);var o=this;this.button.loadDropDown=function(e){t(["../../ColorPalette"],n.hitch(this,function(t){
this.dropDown=new t({dir:o.editor.dir,ownerDocument:o.editor.ownerDocument,value:o.value,
onChange:function(t){o.editor.execCommand(o.command,t)}}),e()}))}},updateState:function(){
var t=this.editor,e=this.command;if(t&&t.isLoaded&&e.length){if(this.button){var n=this.get("disabled");
if(this.button.set("disabled",n),n)return;var i;try{i=t.queryCommandValue(e)||""}catch(r){
i=""}}""==i&&(i="#000000"),"transparent"==i&&(i="#ffffff"),"string"==typeof i?i.indexOf("rgb")>-1&&(i=o.fromRgb(i).toHex()):(i=(255&i)<<16|65280&i|(16711680&i)>>>16,
i=i.toString(16),i="#000000".slice(0,7-i.length)+i),this.value=i;var a=this.button.dropDown;
a&&i!==a.get("value")&&a.set("value",i,!1)}}});return i.registry.foreColor=function(){
return new a({command:"foreColor"})},i.registry.hiliteColor=function(){return new a({
command:"hiliteColor"})},a});