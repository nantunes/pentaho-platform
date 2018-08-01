//		HTML + cent, pound, yen, ellipsis, copyright, registered trademark.

define(["dojo","dijit","dojox","dijit/_editor/_Plugin","dojo/_base/connect","dojo/_base/declare","dojox/html/format"],function(t,e,n,i){
var r=t.declare("dojox.editor.plugins.PrettyPrint",i,{indentBy:-1,lineLength:-1,useDefaultCommand:!1,
entityMap:null,_initButton:function(){delete this.command},setToolbar:function(t){},
setEditor:function(t){this.inherited(arguments);var e=this;this.editor.onLoadDeferred.addCallback(function(){
e.editor._prettyprint_getValue=e.editor.getValue,e.editor.getValue=function(){var t=e.editor._prettyprint_getValue(arguments);
return n.html.format.prettyPrint(t,e.indentBy,e.lineLength,e.entityMap,e.xhtml)},
e.editor._prettyprint_endEditing=e.editor._endEditing,e.editor._prettyprint_onBlur=e.editor._onBlur,
e.editor._endEditing=function(t){var n=e.editor._prettyprint_getValue(!0);e.editor._undoedSteps=[],
e.editor._steps.push({text:n,bookmark:e.editor._getBookmark()})},e.editor._onBlur=function(t){
this.inherited("_onBlur",arguments);var n=e.editor._prettyprint_getValue(!0);n!=e.editor.savedContent&&(e.editor.onChange(n),
e.editor.savedContent=n)}})}});return t.subscribe(e._scopeName+".Editor.getPlugin",null,function(t){
if(!t.plugin){var e=t.args.name.toLowerCase();"prettyprint"===e&&(t.plugin=new r({
indentBy:"indentBy"in t.args?t.args.indentBy:-1,lineLength:"lineLength"in t.args?t.args.lineLength:-1,
entityMap:"entityMap"in t.args?t.args.entityMap:n.html.entities.html.concat([["¢","cent"],["£","pound"],["€","euro"],["¥","yen"],["©","copy"],["§","sect"],["…","hellip"],["®","reg"]]),
xhtml:"xhtml"in t.args?t.args.xhtml:!1}))}}),r});