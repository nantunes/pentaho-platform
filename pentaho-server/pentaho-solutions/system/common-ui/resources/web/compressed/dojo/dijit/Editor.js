define(["require","dojo/_base/array","dojo/_base/declare","dojo/Deferred","dojo/i18n","dojo/dom-attr","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/keys","dojo/_base/lang","dojo/sniff","dojo/string","dojo/topic","./_Container","./Toolbar","./ToolbarSeparator","./layout/_LayoutWidget","./form/ToggleButton","./_editor/_Plugin","./_editor/plugins/EnterKeyHandling","./_editor/html","./_editor/range","./_editor/RichText","./main","dojo/i18n!./_editor/nls/commands"],function(t,e,i,n,s,o,r,d,a,h,u,c,l,g,m,f,p,_,y,v,k,E,b,C,A){
function S(t){return new v({command:t.name})}function w(t){return new v({buttonClass:y,
command:t.name})}var R=i("dijit.Editor",C,{plugins:null,extraPlugins:null,constructor:function(){
u.isArray(this.plugins)||(this.plugins=["undo","redo","|","cut","copy","paste","|","bold","italic","underline","strikethrough","|","insertOrderedList","insertUnorderedList","indent","outdent","|","justifyLeft","justifyRight","justifyCenter","justifyFull",k]),
this._plugins=[],this._editInterval=1e3*this.editActionInterval,(c("ie")||c("trident"))&&(this.events.push("onBeforeDeactivate"),
this.events.push("onBeforeActivate"))},postMixInProperties:function(){this.setValueDeferred=new n,
this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this._steps=this._steps.slice(0),
this._undoedSteps=this._undoedSteps.slice(0),u.isArray(this.extraPlugins)&&(this.plugins=this.plugins.concat(this.extraPlugins)),
this.commands=s.getLocalization("dijit._editor","commands",this.lang),c("webkit")&&a.set(this.domNode,"KhtmlUserSelect","none");
},startup:function(){this.inherited(arguments),this.toolbar||(this.toolbar=new f({
ownerDocument:this.ownerDocument,dir:this.dir,lang:this.lang,"aria-label":this.id
}),this.header.appendChild(this.toolbar.domNode)),e.forEach(this.plugins,this.addPlugin,this),
this.setValueDeferred.resolve(!0),r.add(this.iframe.parentNode,"dijitEditorIFrameContainer"),
r.add(this.iframe,"dijitEditorIFrame"),o.set(this.iframe,"allowTransparency",!0),
this.toolbar.startup(),this.onNormalizedDisplayChanged()},destroy:function(){e.forEach(this._plugins,function(t){
t&&t.destroy&&t.destroy()}),this._plugins=[],this.toolbar.destroyRecursive(),delete this.toolbar,
this.inherited(arguments)},addPlugin:function(e,i){var n=u.isString(e)?{name:e}:u.isFunction(e)?{
ctor:e}:e;if(!n.setEditor){var s={args:n,plugin:null,editor:this};if(n.name&&(v.registry[n.name]?s.plugin=v.registry[n.name](n):g.publish(A._scopeName+".Editor.getPlugin",s)),
!s.plugin)try{var o=n.ctor||u.getObject(n.name)||t(n.name);o&&(s.plugin=new o(n));
}catch(r){throw new Error(this.id+": cannot find plugin ["+n.name+"]")}if(!s.plugin)throw new Error(this.id+": cannot find plugin ["+n.name+"]");
e=s.plugin}arguments.length>1?this._plugins[i]=e:this._plugins.push(e),e.setEditor(this),
u.isFunction(e.setToolbar)&&e.setToolbar(this.toolbar)},resize:function(t){t&&_.prototype.resize.apply(this,arguments);
},layout:function(){var t=this._contentBox.h-(this.getHeaderHeight()+this.getFooterHeight()+d.getPadBorderExtents(this.iframe.parentNode).h+d.getMarginExtents(this.iframe.parentNode).h);
this.editingArea.style.height=t+"px",this.iframe&&(this.iframe.style.height="100%"),
this._layoutMode=!0},_onIEMouseDown:function(t){var e,i=this.document.body,n=i.clientWidth,s=i.clientHeight,o=i.clientLeft,r=i.offsetWidth,d=i.offsetHeight,a=i.offsetLeft;
/^rtl$/i.test(i.dir||"")?r>n&&t.x>n&&t.x<r&&(e=!0):t.x<o&&t.x>a&&(e=!0),e||d>s&&t.y>s&&t.y<d&&(e=!0),
e||(delete this._cursorToStart,delete this._savedSelection,"BODY"==t.target.tagName&&this.defer("placeCursorAtEnd"),
this.inherited(arguments))},onBeforeActivate:function(){this._restoreSelection()},
onBeforeDeactivate:function(t){this.customUndo&&this.endEditing(!0),"BODY"!=t.target.tagName&&this._saveSelection();
},customUndo:!0,editActionInterval:3,beginEditing:function(t){this._inEditing||(this._inEditing=!0,
this._beginEditing(t)),this.editActionInterval>0&&(this._editTimer&&this._editTimer.remove(),
this._editTimer=this.defer("endEditing",this._editInterval))},_steps:[],_undoedSteps:[],
execCommand:function(t){if(!this.customUndo||"undo"!=t&&"redo"!=t){this.customUndo&&(this.endEditing(),
this._beginEditing());var e=this.inherited(arguments);return this.customUndo&&this._endEditing(),
e}return this[t]()},_pasteImpl:function(){return this._clipboardCommand("paste")},
_cutImpl:function(){return this._clipboardCommand("cut")},_copyImpl:function(){return this._clipboardCommand("copy");
},_clipboardCommand:function(t){var e;try{if(e=this.document.execCommand(t,!1,null),
c("webkit")&&!e)throw{code:1011}}catch(i){if(1011==i.code||9==i.code&&c("opera")){
var n=l.substitute,s={cut:"X",copy:"C",paste:"V"};alert(n(this.commands.systemShortcut,[this.commands[t],n(this.commands[c("mac")?"appleKey":"ctrlKey"],[s[t]])]));
}e=!1}return e},queryCommandEnabled:function(t){return!this.customUndo||"undo"!=t&&"redo"!=t?this.inherited(arguments):"undo"==t?this._steps.length>1:this._undoedSteps.length>0;
},_moveToBookmark:function(t){var i,n,s,o,r=t.mark,d=t.mark,a=t.isCollapsed;d&&(c("ie")<9||9===c("ie")&&c("quirks")?u.isArray(d)?(r=[],
e.forEach(d,function(t){r.push(b.getNode(t,this.editNode))},this),this.selection.moveToBookmark({
mark:r,isCollapsed:a})):d.startContainer&&d.endContainer&&(o=b.getSelection(this.window),
o&&o.removeAllRanges&&(o.removeAllRanges(),i=b.create(this.window),n=b.getNode(d.startContainer,this.editNode),
s=b.getNode(d.endContainer,this.editNode),n&&s&&(i.setStart(n,d.startOffset),i.setEnd(s,d.endOffset),
o.addRange(i)))):(o=b.getSelection(this.window),o&&o.removeAllRanges&&(o.removeAllRanges(),
i=b.create(this.window),n=b.getNode(d.startContainer,this.editNode),s=b.getNode(d.endContainer,this.editNode),
n&&s&&(i.setStart(n,d.startOffset),i.setEnd(s,d.endOffset),o.addRange(i)))))},_changeToStep:function(t,e){
this.setValue(e.text);var i=e.bookmark;i&&this._moveToBookmark(i)},undo:function(){
var t=!1;if(!this._undoRedoActive){this._undoRedoActive=!0,this.endEditing(!0);var e=this._steps.pop();
e&&this._steps.length>0&&(this.focus(),this._changeToStep(e,this._steps[this._steps.length-1]),
this._undoedSteps.push(e),this.onDisplayChanged(),delete this._undoRedoActive,t=!0),
delete this._undoRedoActive}return t},redo:function(){var t=!1;if(!this._undoRedoActive){
this._undoRedoActive=!0,this.endEditing(!0);var e=this._undoedSteps.pop();e&&this._steps.length>0&&(this.focus(),
this._changeToStep(this._steps[this._steps.length-1],e),this._steps.push(e),this.onDisplayChanged(),
t=!0),delete this._undoRedoActive}return t},endEditing:function(t){this._editTimer&&(this._editTimer=this._editTimer.remove()),
this._inEditing&&(this._endEditing(t),this._inEditing=!1)},_getBookmark:function(){
var t=this.selection.getBookmark(),i=[];if(t&&t.mark){var n=t.mark;if(c("ie")<9||9===c("ie")&&c("quirks")){
var s=b.getSelection(this.window);if(u.isArray(n))e.forEach(t.mark,function(t){i.push(b.getIndex(t,this.editNode).o);
},this),t.mark=i;else if(s){var o;s.rangeCount&&(o=s.getRangeAt(0)),o?t.mark=o.cloneRange():t.mark=this.selection.getBookmark();
}}try{t.mark&&t.mark.startContainer&&(i=b.getIndex(t.mark.startContainer,this.editNode).o,
t.mark={startContainer:i,startOffset:t.mark.startOffset,endContainer:t.mark.endContainer===t.mark.startContainer?i:b.getIndex(t.mark.endContainer,this.editNode).o,
endOffset:t.mark.endOffset})}catch(r){t.mark=null}}return t},_beginEditing:function(){
0===this._steps.length&&this._steps.push({text:E.getChildrenHtml(this.editNode),bookmark:this._getBookmark()
})},_endEditing:function(){var t=E.getChildrenHtml(this.editNode);this._undoedSteps=[],
this._steps.push({text:t,bookmark:this._getBookmark()})},onKeyDown:function(t){if(c("ie")||this.iframe||t.keyCode!=h.TAB||this.tabIndent||this._saveSelection(),
!this.customUndo)return void this.inherited(arguments);var e=t.keyCode;if(t.ctrlKey&&!t.shiftKey&&!t.altKey){
if(90==e||122==e)return t.stopPropagation(),t.preventDefault(),void this.undo();if(89==e||121==e)return t.stopPropagation(),
t.preventDefault(),void this.redo()}switch(this.inherited(arguments),e){case h.ENTER:
case h.BACKSPACE:case h.DELETE:this.beginEditing();break;case 88:case 86:if(t.ctrlKey&&!t.altKey&&!t.metaKey){
this.endEditing(),88==t.keyCode?this.beginEditing("cut"):this.beginEditing("paste"),
this.defer("endEditing",1);break}default:if(!t.ctrlKey&&!t.altKey&&!t.metaKey&&(t.keyCode<h.F1||t.keyCode>h.F15)){
this.beginEditing();break}case h.ALT:this.endEditing();break;case h.UP_ARROW:case h.DOWN_ARROW:
case h.LEFT_ARROW:case h.RIGHT_ARROW:case h.HOME:case h.END:case h.PAGE_UP:case h.PAGE_DOWN:
this.endEditing(!0);break;case h.CTRL:case h.SHIFT:case h.TAB:}},_onBlur:function(){
this.inherited(arguments),this.endEditing(!0)},_saveSelection:function(){try{this._savedSelection=this._getBookmark();
}catch(t){}},_restoreSelection:function(){this._savedSelection&&(delete this._cursorToStart,
this.selection.isCollapsed()&&this._moveToBookmark(this._savedSelection),delete this._savedSelection);
},onClick:function(){this.endEditing(!0),this.inherited(arguments)},replaceValue:function(t){
this.customUndo?this.isClosed?this.setValue(t):(this.beginEditing(),t||(t="&#160;"),
this.setValue(t),this.endEditing()):this.inherited(arguments)},_setDisabledAttr:function(t){
this.setValueDeferred.then(u.hitch(this,function(){!this.disabled&&t||!this._buttonEnabledPlugins&&t?e.forEach(this._plugins,function(t){
t.set("disabled",!0)}):this.disabled&&!t&&e.forEach(this._plugins,function(t){t.set("disabled",!1);
})})),this.inherited(arguments)},_setStateClass:function(){try{this.inherited(arguments),
this.document&&this.document.body&&a.set(this.document.body,"color",a.get(this.iframe,"color"));
}catch(t){}}});return u.mixin(v.registry,{undo:S,redo:S,cut:S,copy:S,paste:S,insertOrderedList:S,
insertUnorderedList:S,indent:S,outdent:S,justifyCenter:S,justifyFull:S,justifyLeft:S,
justifyRight:S,"delete":S,selectAll:S,removeFormat:S,unlink:S,insertHorizontalRule:S,
bold:w,italic:w,underline:w,strikethrough:w,subscript:w,superscript:w,"|":function(){
return new v({setEditor:function(t){this.editor=t,this.button=new p({ownerDocument:t.ownerDocument
})}})}}),R});