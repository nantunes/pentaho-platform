define(["dojo","dijit","dojox","dijit/_base/manager","dijit/_base/popup","dijit/_Widget","dijit/_TemplatedMixin","dijit/_KeyNavContainer","dijit/_WidgetsInTemplateMixin","dijit/TooltipDialog","dijit/Toolbar","dijit/form/CheckBox","dijit/form/_TextBoxMixin","dijit/form/TextBox","dijit/_editor/_Plugin","dijit/form/Button","dijit/form/DropDownButton","dijit/form/ToggleButton","./ToolbarLineBreak","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/string","dojo/i18n!dojox/editor/plugins/nls/FindReplace"],function(t,e,i,o,s,n,l,a,d,c,r,h,u,p,_){
t.experimental("dojox.editor.plugins.FindReplace");var g=t.declare("dojox.editor.plugins._FindReplaceCloseBox",[n,l,d],{
btnId:"",widget:null,widgetsInTemplate:!0,templateString:"<span style='float: right' class='dijitInline' tabindex='-1'><button class='dijit dijitReset dijitInline' id='${btnId}' dojoAttachPoint='button' dojoType='dijit.form.Button' tabindex='-1' iconClass='dijitEditorIconsFindReplaceClose' showLabel='false'>X</button></span>",
postMixInProperties:function(){this.id=e.getUniqueId(this.declaredClass.replace(/\./g,"_")),
this.btnId=this.id+"_close",this.inherited(arguments)},startup:function(){this.connect(this.button,"onClick","onClick");
},onClick:function(){}}),f=t.declare("dojox.editor.plugins._FindReplaceTextBox",[n,l,d],{
textId:"",label:"",toolTip:"",widget:null,widgetsInTemplate:!0,templateString:"<span style='white-space: nowrap' class='dijit dijitReset dijitInline dijitEditorFindReplaceTextBox' title='${tooltip}' tabindex='-1'><label class='dijitLeft dijitInline' for='${textId}' tabindex='-1'>${label}</label><input dojoType='dijit.form.TextBox' intermediateChanges='true' class='focusTextBox' tabIndex='0' id='${textId}' dojoAttachPoint='textBox, focusNode' value='' dojoAttachEvent='onKeyPress: _onKeyPress'/></span>",
postMixInProperties:function(){this.id=e.getUniqueId(this.declaredClass.replace(/\./g,"_")),
this.textId=this.id+"_text",this.inherited(arguments)},postCreate:function(){this.textBox.set("value",""),
this.disabled=this.textBox.get("disabled"),this.connect(this.textBox,"onChange","onChange"),
t.attr(this.textBox.textbox,"formnovalidate","true")},_setValueAttr:function(t){this.value=t,
this.textBox.set("value",t)},focus:function(){this.textBox.focus()},_setDisabledAttr:function(t){
this.disabled=t,this.textBox.set("disabled",t)},onChange:function(t){this.value=t;
},_onKeyPress:function(i){var o=0,s=0;!i.target||i.ctrlKey||i.altKey||i.shiftKey||(i.keyCode==t.keys.LEFT_ARROW?(o=i.target.selectionStart,
s=i.target.selectionEnd,s>o&&(e.selectInputText(i.target,o,o),t.stopEvent(i))):i.keyCode==t.keys.RIGHT_ARROW&&(o=i.target.selectionStart,
s=i.target.selectionEnd,s>o&&(e.selectInputText(i.target,s,s),t.stopEvent(i))))}}),x=t.declare("dojox.editor.plugins._FindReplaceCheckBox",[n,l,d],{
checkId:"",label:"",tooltip:"",widget:null,widgetsInTemplate:!0,templateString:"<span style='white-space: nowrap' tabindex='-1' class='dijit dijitReset dijitInline dijitEditorFindReplaceCheckBox' title='${tooltip}' ><input dojoType='dijit.form.CheckBox' tabIndex='0' id='${checkId}' dojoAttachPoint='checkBox, focusNode' value=''/><label tabindex='-1' class='dijitLeft dijitInline' for='${checkId}'>${label}</label></span>",
postMixInProperties:function(){this.id=e.getUniqueId(this.declaredClass.replace(/\./g,"_")),
this.checkId=this.id+"_check",this.inherited(arguments)},postCreate:function(){this.checkBox.set("checked",!1),
this.disabled=this.checkBox.get("disabled"),this.checkBox.isFocusable=function(){
return!1}},_setValueAttr:function(t){this.checkBox.set("value",t)},_getValueAttr:function(){
return this.checkBox.get("value")},focus:function(){this.checkBox.focus()},_setDisabledAttr:function(t){
this.disabled=t,this.checkBox.set("disabled",t)}}),b=t.declare("dojox.editor.plugins._FindReplaceToolbar",r,{
postCreate:function(){this.connectKeyNavHandlers([],[]),this.connect(this.containerNode,"onclick","_onToolbarEvent"),
this.connect(this.containerNode,"onkeydown","_onToolbarEvent"),t.addClass(this.domNode,"dijitToolbar");
},addChild:function(t,i){e._KeyNavContainer.superclass.addChild.apply(this,arguments);
},_onToolbarEvent:function(t){t.stopPropagation()}}),m=t.declare("dojox.editor.plugins.FindReplace",[_],{
buttonClass:e.form.ToggleButton,iconClassPrefix:"dijitEditorIconsFindReplace",editor:null,
button:null,_frToolbar:null,_closeBox:null,_findField:null,_replaceField:null,_findButton:null,
_replaceButton:null,_replaceAllButton:null,_caseSensitive:null,_backwards:null,_promDialog:null,
_promDialogTimeout:null,_strings:null,_initButton:function(){this._strings=t.i18n.getLocalization("dojox.editor.plugins","FindReplace"),
this.button=new e.form.ToggleButton({label:this._strings.findReplace,showLabel:!1,
iconClass:this.iconClassPrefix+" dijitEditorIconFindString",tabIndex:"-1",onChange:t.hitch(this,"_toggleFindReplace")
}),t.isOpera&&this.button.set("disabled",!0),this.connect(this.button,"set",t.hitch(this,function(t,e){
"disabled"===t&&this._toggleFindReplace(!e&&this._displayed,!0,!0)}))},setEditor:function(t){
this.editor=t,this._initButton()},toggle:function(){this.button.set("checked",!this.button.get("checked"));
},_toggleFindReplace:function(e,i,o){var s=t.marginBox(this.editor.domNode);e&&!t.isOpera?(t.style(this._frToolbar.domNode,"display","block"),
this._populateFindField(),i||(this._displayed=!0)):(t.style(this._frToolbar.domNode,"display","none"),
i||(this._displayed=!1),o||this.editor.focus()),this.editor.resize({h:s.h})},_populateFindField:function(){
var t=this.editor,i=(t.window,t._sCall("getSelectedText",[null]));this._findField&&this._findField.textBox&&(i&&this._findField.textBox.set("value",i),
this._findField.textBox.focus(),e.selectInputText(this._findField.textBox.focusNode));
},setToolbar:function(o){if(this.inherited(arguments),!t.isOpera){var s=this._frToolbar=new b;
t.style(s.domNode,"display","none"),t.place(s.domNode,o.domNode,"after"),s.startup(),
this._closeBox=new g,s.addChild(this._closeBox),this._findField=new f({label:this._strings.findLabel,
tooltip:this._strings.findTooltip}),s.addChild(this._findField),this._replaceField=new f({
label:this._strings.replaceLabel,tooltip:this._strings.replaceTooltip}),s.addChild(this._replaceField),
s.addChild(new i.editor.plugins.ToolbarLineBreak),this._findButton=new e.form.Button({
label:this._strings.findButton,showLabel:!0,iconClass:this.iconClassPrefix+" dijitEditorIconFind"
}),this._findButton.titleNode.title=this._strings.findButtonTooltip,s.addChild(this._findButton),
this._replaceButton=new e.form.Button({label:this._strings.replaceButton,showLabel:!0,
iconClass:this.iconClassPrefix+" dijitEditorIconReplace"}),this._replaceButton.titleNode.title=this._strings.replaceButtonTooltip,
s.addChild(this._replaceButton),this._replaceAllButton=new e.form.Button({label:this._strings.replaceAllButton,
showLabel:!0,iconClass:this.iconClassPrefix+" dijitEditorIconReplaceAll"}),this._replaceAllButton.titleNode.title=this._strings.replaceAllButtonTooltip,
s.addChild(this._replaceAllButton),this._caseSensitive=new x({label:this._strings.matchCase,
tooltip:this._strings.matchCaseTooltip}),s.addChild(this._caseSensitive),this._backwards=new x({
label:this._strings.backwards,tooltip:this._strings.backwardsTooltip}),s.addChild(this._backwards),
this._findButton.set("disabled",!0),this._replaceButton.set("disabled",!0),this._replaceAllButton.set("disabled",!0),
this.connect(this._findField,"onChange","_checkButtons"),this.connect(this._findField,"onKeyDown","_onFindKeyDown"),
this.connect(this._replaceField,"onKeyDown","_onReplaceKeyDown"),this.connect(this._findButton,"onClick","_find"),
this.connect(this._replaceButton,"onClick","_replace"),this.connect(this._replaceAllButton,"onClick","_replaceAll"),
this.connect(this._closeBox,"onClick","toggle"),this._promDialog=new e.TooltipDialog,
this._promDialog.startup(),this._promDialog.set("content","")}},_checkButtons:function(){
var t=this._findField.get("value");t?(this._findButton.set("disabled",!1),this._replaceButton.set("disabled",!1),
this._replaceAllButton.set("disabled",!1)):(this._findButton.set("disabled",!0),this._replaceButton.set("disabled",!0),
this._replaceAllButton.set("disabled",!0))},_onFindKeyDown:function(e){e.keyCode==t.keys.ENTER&&(this._find(),
t.stopEvent(e))},_onReplaceKeyDown:function(e){e.keyCode==t.keys.ENTER&&(this._replace()||this._replace(),
t.stopEvent(e))},_find:function(i){var o=this._findField.get("value")||"";if(o){var s=this._caseSensitive.get("value"),n=this._backwards.get("value"),l=this._findText(o,s,n);
return!l&&i&&(this._promDialog.set("content",t.string.substitute(this._strings.eofDialogText,{
0:this._strings.eofDialogTextFind})),e.popup.open({popup:this._promDialog,around:this._findButton.domNode
}),this._promDialogTimeout=setTimeout(t.hitch(this,function(){clearTimeout(this._promDialogTimeout),
this._promDialogTimeout=null,e.popup.close(this._promDialog)}),3e3),setTimeout(t.hitch(this,function(){
this.editor.focus()}),0)),l}return!1},_replace:function(i){var o=!1,s=this.editor;
s.focus();var n=this._findField.get("value")||"",l=this._replaceField.get("value")||"";
if(n){var a=this._caseSensitive.get("value"),d=this._backwards.get("value"),c=s._sCall("getSelectedText",[null]);
t.isMoz&&(n=t.trim(n),c=t.trim(c));var r=this._filterRegexp(n,!a);return c&&r.test(c)&&(s.execCommand("inserthtml",l),
o=!0,d&&(this._findText(l,a,d),s._sCall("collapse",[!0]))),!this._find(!1)&&i&&(this._promDialog.set("content",t.string.substitute(this._strings.eofDialogText,{
0:this._strings.eofDialogTextReplace})),e.popup.open({popup:this._promDialog,around:this._replaceButton.domNode
}),this._promDialogTimeout=setTimeout(t.hitch(this,function(){clearTimeout(this._promDialogTimeout),
this._promDialogTimeout=null,e.popup.close(this._promDialog)}),3e3),setTimeout(t.hitch(this,function(){
this.editor.focus()}),0)),o}return null},_replaceAll:function(i){var o=0,s=this._backwards.get("value");
s?this.editor.placeCursorAtEnd():this.editor.placeCursorAtStart(),this._replace(!1)&&o++;
var n=t.hitch(this,function(){this._replace(!1)?(o++,setTimeout(n,10)):i&&(this._promDialog.set("content",t.string.substitute(this._strings.replaceDialogText,{
0:""+o})),e.popup.open({popup:this._promDialog,around:this._replaceAllButton.domNode
}),this._promDialogTimeout=setTimeout(t.hitch(this,function(){clearTimeout(this._promDialogTimeout),
this._promDialogTimeout=null,e.popup.close(this._promDialog)}),3e3),setTimeout(t.hitch(this,function(){
this._findField.focus(),this._findField.textBox.focusNode.select()}),0))});n()},_findText:function(t,e,i){
var o=this.editor,s=o.window,n=!1;if(t)if(s.find)n=s.find(t,e,i,!1,!1,!1,!1);else{
var l=o.document;if(l.selection){this.editor.focus();var a=l.body.createTextRange(),d=l.selection?l.selection.createRange():null;
d&&(i?a.setEndPoint("EndToStart",d):a.setEndPoint("StartToEnd",d));var c=e?4:0;i&&(c=1|c),
n=a.findText(t,a.text.length,c),n&&a.select()}}return n},_filterRegexp:function(t,e){
for(var i="",o=null,s=0;s<t.length;s++)switch(o=t.charAt(s)){case"\\":i+=o,s++,i+=t.charAt(s);
break;case"$":case"^":case"/":case"+":case".":case"|":case"(":case")":case"{":case"}":
case"[":case"]":i+="\\";default:i+=o}return i="^"+i+"$",e?new RegExp(i,"mi"):new RegExp(i,"m");
},updateState:function(){this.button.set("disabled",this.get("disabled"))},destroy:function(){
this.inherited(arguments),this._promDialogTimeout&&(clearTimeout(this._promDialogTimeout),
this._promDialogTimeout=null,e.popup.close(this._promDialog)),this._frToolbar&&(this._frToolbar.destroyRecursive(),
this._frToolbar=null),this._promDialog&&(this._promDialog.destroyRecursive(),this._promDialog=null);
}});return m._FindReplaceCloseBox=g,m._FindReplaceTextBox=f,m._FindReplaceCheckBox=x,
m._FindReplaceToolbar=b,t.subscribe(e._scopeName+".Editor.getPlugin",null,function(t){
if(!t.plugin){var e=t.args.name.toLowerCase();"findreplace"===e&&(t.plugin=new m({}));
}}),m});