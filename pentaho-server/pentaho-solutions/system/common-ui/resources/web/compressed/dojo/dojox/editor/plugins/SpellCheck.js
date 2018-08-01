define(["dojo","dijit","dojo/io/script","dijit/popup","dijit/_Widget","dijit/_Templated","dijit/_editor/_Plugin","dijit/form/TextBox","dijit/form/DropDownButton","dijit/TooltipDialog","dijit/form/MultiSelect","dijit/Menu","dojo/i18n!dojox/editor/plugins/nls/SpellCheck"],function(t,e,i,n,o,s,r){
t.experimental("dojox.editor.plugins.SpellCheck");var l=t.declare("dojox.editor.plugins._spellCheckControl",[o,s],{
widgetsInTemplate:!0,templateString:"<table role='presentation' class='dijitEditorSpellCheckTable'><tr><td colspan='3' class='alignBottom'><label for='${textId}' id='${textId}_label'>${unfound}</label><div class='dijitEditorSpellCheckBusyIcon' id='${id}_progressIcon'></div></td></tr><tr><td class='dijitEditorSpellCheckBox'><input dojoType='dijit.form.TextBox' required='false' intermediateChanges='true' class='dijitEditorSpellCheckBox' dojoAttachPoint='unfoundTextBox' id='${textId}'/></td><td><button dojoType='dijit.form.Button' class='blockButton' dojoAttachPoint='skipButton'>${skip}</button></td><td><button dojoType='dijit.form.Button' class='blockButton' dojoAttachPoint='skipAllButton'>${skipAll}</button></td></tr><tr><td class='alignBottom'><label for='${selectId}'>${suggestions}</td></label><td colspan='2'><button dojoType='dijit.form.Button' class='blockButton' dojoAttachPoint='toDicButton'>${toDic}</button></td></tr><tr><td><select dojoType='dijit.form.MultiSelect' id='${selectId}' class='dijitEditorSpellCheckBox listHeight' dojoAttachPoint='suggestionSelect'></select></td><td colspan='2'><button dojoType='dijit.form.Button' class='blockButton' dojoAttachPoint='replaceButton'>${replace}</button><div class='topMargin'><button dojoType='dijit.form.Button' class='blockButton' dojoAttachPoint='replaceAllButton'>${replaceAll}</button><div></td></tr><tr><td><div class='topMargin'><button dojoType='dijit.form.Button' dojoAttachPoint='cancelButton'>${cancel}</button></div></td><td></td><td></td></tr></table>",
constructor:function(){this.ignoreChange=!1,this.isChanged=!1,this.isOpen=!1,this.closable=!0;
},postMixInProperties:function(){this.id=e.getUniqueId(this.declaredClass.replace(/\./g,"_")),
this.textId=this.id+"_textBox",this.selectId=this.id+"_select"},postCreate:function(){
var e=this.suggestionSelect;t.removeAttr(e.domNode,"multiple"),e.addItems=function(e){
var i=this,n=null;e&&e.length>0&&t.forEach(e,function(e,o){n=t.create("option",{innerHTML:e,
value:e},i.domNode),0==o&&(n.selected=!0)})},e.removeItems=function(){t.empty(this.domNode);
},e.deselectAll=function(){this.containerNode.selectedIndex=-1},this.connect(this,"onKeyPress","_cancel"),
this.connect(this.unfoundTextBox,"onKeyPress","_enter"),this.connect(this.unfoundTextBox,"onChange","_unfoundTextBoxChange"),
this.connect(this.suggestionSelect,"onKeyPress","_enter"),this.connect(this.skipButton,"onClick","onSkip"),
this.connect(this.skipAllButton,"onClick","onSkipAll"),this.connect(this.toDicButton,"onClick","onAddToDic"),
this.connect(this.replaceButton,"onClick","onReplace"),this.connect(this.replaceAllButton,"onClick","onReplaceAll"),
this.connect(this.cancelButton,"onClick","onCancel")},onSkip:function(){},onSkipAll:function(){},
onAddToDic:function(){},onReplace:function(){},onReplaceAll:function(){},onCancel:function(){},
onEnter:function(){},focus:function(){this.unfoundTextBox.focus()},_cancel:function(e){
e.keyCode==t.keys.ESCAPE&&(this.onCancel(),t.stopEvent(e))},_enter:function(e){e.keyCode==t.keys.ENTER&&(this.onEnter(),
t.stopEvent(e))},_unfoundTextBoxChange:function(){var e=this.textId+"_label";this.ignoreChange?t.byId(e).innerHTML=this.unfound:(t.byId(e).innerHTML=this.replaceWith,
this.isChanged=!0,this.suggestionSelect.deselectAll())},_setUnfoundWordAttr:function(t){
t=t||"",this.unfoundTextBox.set("value",t)},_getUnfoundWordAttr:function(){return this.unfoundTextBox.get("value");
},_setSuggestionListAttr:function(t){var e=this.suggestionSelect;t=t||[],e.removeItems(),
e.addItems(t)},_getSelectedWordAttr:function(){var t=this.suggestionSelect.getSelected();
return t&&t.length>0?t[0].value:this.unfoundTextBox.get("value")},_setDisabledAttr:function(t){
this.skipButton.set("disabled",t),this.skipAllButton.set("disabled",t),this.toDicButton.set("disabled",t),
this.replaceButton.set("disabled",t),this.replaceAllButton.set("disabled",t)},_setInProgressAttr:function(e){
var i=this.id+"_progressIcon";t.toggleClass(i,"hidden",!e)}}),c=t.declare("dojox.editor.plugins._SpellCheckScriptMultiPart",null,{
ACTION_QUERY:"query",ACTION_UPDATE:"update",callbackHandle:"callback",maxBufferLength:100,
delimiter:" ",label:"response",_timeout:3e4,SEC:1e3,constructor:function(){this.serviceEndPoint="",
this._queue=[],this.isWorking=!1,this.exArgs=null,this._counter=0},send:function(e,i){
var n=this,o=this.delimiter,s=this.maxBufferLength,r=this.label,l=this.serviceEndPoint,c=this.callbackHandle,a=this.exArgs,d=this._timeout,h=0,u=0;
this._result||(this._result=[]),i=i||this.ACTION_QUERY;var _=function(){var _=[],p=0;
if(e&&e.length>0){n.isWorking=!0;var g=e.length;do{if(h=u+1,(u+=s)>g)u=g;else for(;o&&e.charAt(u)!=o&&g>=u;)u++;
_.push({l:h,r:u}),p++}while(g>u);t.forEach(_,function(o,s){var h={url:l,action:i,
timeout:d,callbackParamName:c,handle:function(e,i){if(++n._counter<=this.size&&!(e instanceof Error)&&e[r]&&t.isArray(e[r])){
var o=this.offset;t.forEach(e[r],function(t){t.offset+=o}),n._result[this.number]=e[r];
}n._counter==this.size&&(n._finalizeCollection(this.action),n.isWorking=!1,n._queue.length>0&&n._queue.shift()());
}};h.content=a?t.mixin(a,{action:i,content:e.substring(o.l-1,o.r)}):{action:i,content:e.substring(o.l-1,o.r)
},h.size=p,h.number=s,h.offset=o.l-1,t.io.script.get(h)})}};n.isWorking?n._queue.push(_):_();
},_finalizeCollection:function(t){for(var e=this._result,i=e.length,n=0;i>n;n++){
var o=e.shift();e=e.concat(o)}t==this.ACTION_QUERY&&this.onLoad(e),this._counter=0,
this._result=[]},onLoad:function(t){},setWaitingTime:function(t){this._timeout=t*this.SEC;
}}),a=t.declare("dojox.editor.plugins.SpellCheck",[r],{url:"",bufferLength:100,interactive:!1,
timeout:30,button:null,_editor:null,exArgs:null,_cursorSpan:'<span class="cursorPlaceHolder"></span>',
_cursorSelector:"cursorPlaceHolder",_incorrectWordsSpan:"<span class='incorrectWordPlaceHolder'>${text}</span>",
_ignoredIncorrectStyle:{cursor:"inherit",borderBottom:"none",backgroundColor:"transparent"
},_normalIncorrectStyle:{cursor:"pointer",borderBottom:"1px dotted red",backgroundColor:"yellow"
},_highlightedIncorrectStyle:{borderBottom:"1px dotted red",backgroundColor:"#b3b3ff"
},_selector:"incorrectWordPlaceHolder",_maxItemNumber:3,constructor:function(){this._spanList=[],
this._cache={},this._enabled=!0,this._iterator=0},setEditor:function(t){this._editor=t,
this._initButton(),this._setNetwork(),this._connectUp()},_initButton:function(){var i=this,o=this._strings=t.i18n.getLocalization("dojox.editor.plugins","SpellCheck"),s=this._dialog=new e.TooltipDialog;
s.set("content",this._dialogContent=new l({unfound:o.unfound,skip:o.skip,skipAll:o.skipAll,
toDic:o.toDic,suggestions:o.suggestions,replaceWith:o.replaceWith,replace:o.replace,
replaceAll:o.replaceAll,cancel:o.cancel})),this.button=new e.form.DropDownButton({
label:o.widgetLabel,showLabel:!1,iconClass:"dijitEditorSpellCheckIcon",dropDown:s,
id:e.getUniqueId(this.declaredClass.replace(/\./g,"_"))+"_dialogPane",closeDropDown:function(e){
if(i._dialogContent.closable){if(i._dialogContent.isOpen=!1,t.isIE){var o=i._iterator,s=i._spanList;
o<s.length&&o>=0&&t.style(s[o],i._normalIncorrectStyle)}this._opened&&(n.close(this.dropDown),
e&&this.focus(),this._opened=!1,this.state="")}}}),i._dialogContent.isOpen=!1,s.domNode.setAttribute("aria-label",this._strings.widgetLabel);
},_setNetwork:function(){var t=this.exArgs;if(!this._service){var e=this._service=new c;
e.serviceEndPoint=this.url,e.maxBufferLength=this.bufferLength,e.setWaitingTime(this.timeout),
t&&(delete t.name,delete t.url,delete t.interactive,delete t.timeout,e.exArgs=t)}
},_connectUp:function(){var i=this._editor,n=this._dialogContent;this.connect(this.button,"set","_disabled"),
this.connect(this._service,"onLoad","_loadData"),this.connect(this._dialog,"onOpen","_openDialog"),
this.connect(i,"onKeyPress","_keyPress"),this.connect(i,"onLoad","_submitContent"),
this.connect(n,"onSkip","_skip"),this.connect(n,"onSkipAll","_skipAll"),this.connect(n,"onAddToDic","_add"),
this.connect(n,"onReplace","_replace"),this.connect(n,"onReplaceAll","_replaceAll"),
this.connect(n,"onCancel","_cancel"),this.connect(n,"onEnter","_enter"),i.contentPostFilters.push(this._spellCheckFilter),
t.publish(e._scopeName+".Editor.plugin.SpellCheck.getParser",[this]),this.parser||console.error("Can not get the word parser!");
},_disabled:function(t,e){"disabled"==t&&(e?(this._iterator=0,this._spanList=[]):this.interactive&&!e&&this._service&&this._submitContent(!0),
this._enabled=!e)},_keyPress:function(e){if(this.interactive){var i=118,n=86,o=e.charCode;
e.altKey||o!=t.keys.SPACE?(e.ctrlKey&&(o==i||o==n)||!e.ctrlKey&&e.charCode)&&this._submitContent(!0):this._submitContent();
}},_loadData:function(e){var i=this._cache,n=this._editor.get("value"),o=this._dialogContent;
this._iterator=0,t.forEach(e,function(t){i[t.text]=t.suggestion,i[t.text].correct=!1;
}),this._enabled&&(o.closable=!1,this._markIncorrectWords(n,i),o.closable=!0,this._dialogContent.isOpen&&(this._iterator=-1,
this._skip()))},_openDialog:function(){var t=this._dialogContent;t.ignoreChange=!0,
t.set("unfoundWord",""),t.set("suggestionList",null),t.set("disabled",!0),t.set("inProgress",!0),
t.isOpen=!0,t.closable=!1,this._submitContent(),t.closable=!0},_skip:function(e,i){
var n=this._dialogContent,o=this._spanList||[],s=o.length,r=this._iterator;for(n.closable=!1,
n.isChanged=!1,n.ignoreChange=!0,!i&&r>=0&&s>r&&this._skipWord(r);++r<s&&1==o[r].edited;);
s>r?(this._iterator=r,this._populateDialog(r),this._selectWord(r)):(this._iterator=-1,
n.set("unfoundWord",this._strings.msg),n.set("suggestionList",null),n.set("disabled",!0),
n.set("inProgress",!1)),setTimeout(function(){t.isWebKit&&n.skipButton.focus(),n.focus(),
n.ignoreChange=!1,n.closable=!0},0)},_skipAll:function(){this._dialogContent.closable=!1,
this._skipWordAll(this._iterator),this._skip()},_add:function(){var t=this._dialogContent;
t.closable=!1,t.isOpen=!0,this._addWord(this._iterator,t.get("unfoundWord")),this._skip();
},_replace:function(){var t=this._dialogContent,e=this._iterator,i=t.get("selectedWord");
t.closable=!1,this._replaceWord(e,i),this._skip(null,!0)},_replaceAll:function(){
var t=this._dialogContent,e=this._spanList,i=e.length,n=e[this._iterator].innerHTML.toLowerCase(),o=t.get("selectedWord");
t.closable=!1;for(var s=0;i>s;s++)e[s].innerHTML.toLowerCase()==n&&this._replaceWord(s,o);
this._skip(null,!0)},_cancel:function(){this._dialogContent.closable=!0,this._editor.focus();
},_enter:function(){this._dialogContent.isChanged?this._replace():this._skip()},_query:function(e){
var i=this._service,n=this._cache,o=this.parser.parseIntoWords(this._html2Text(e))||[],s=[];
t.forEach(o,function(t){t=t.toLowerCase(),n[t]||(n[t]=[],n[t].correct=!0,s.push(t));
}),s.length>0?i.send(s.join(" ")):i.isWorking||this._loadData([])},_html2Text:function(t){
for(var e=[],i=!1,n=t?t.length:0,o=0;n>o;o++)"<"==t.charAt(o)&&(i=!0),1==i?e.push(" "):e.push(t.charAt(o)),
">"==t.charAt(o)&&(i=!1);return e.join("")},_getBookmark:function(t){var e=this._editor,i=this._cursorSpan;
e.execCommand("inserthtml",i);for(var n=e.get("value"),o=n.indexOf(i),s=-1;++s<o&&t.charAt(s)==n.charAt(s););
return s},_moveToBookmark:function(){var e=this._editor,i=t.query("."+this._cursorSelector,e.document),n=i&&i[0];
if(n){e._sCall("selectElement",[n]),e._sCall("collapse",[!0]);var o=n.parentNode;o&&o.removeChild(n);
}},_submitContent:function(t){if(t){var e=this,i=3e3;this._delayHandler&&(clearTimeout(this._delayHandler),
this._delayHandler=null),setTimeout(function(){e._query(e._editor.get("value"))},i);
}else this._query(this._editor.get("value"))},_populateDialog:function(t){var e=this._spanList,i=this._cache,n=this._dialogContent;
if(n.set("disabled",!1),t<e.length&&e.length>0){var o=e[t].innerHTML;n.set("unfoundWord",o),
n.set("suggestionList",i[o.toLowerCase()]),n.set("inProgress",!1)}},_markIncorrectWords:function(i,n){
for(var o=this,s=this.parser,r=this._editor,l=this._incorrectWordsSpan,c=this._normalIncorrectStyle,a=this._selector,d=s.parseIntoWords(this._html2Text(i).toLowerCase()),h=s.getIndices(),u=this._cursorSpan,_=this._getBookmark(i),p="<span class='incorrectWordPlaceHolder'>".length,g=!1,f=i.split(""),C=null,m=d.length-1;m>=0;m--){
var b=d[m];if(n[b]&&!n[b].correct){var k=h[m],v=d[m].length,x=k+v;if(_>=x&&!g&&(f.splice(_,0,u),
g=!0),f.splice(k,v,t.string.substitute(l,{text:i.substring(k,x)})),_>k&&x>_&&!g){
var A=f[k].split("");A.splice(p+_-k,0,u),f[k]=A.join(""),g=!0}}}g||(f.splice(_,0,u),
g=!0),r.set("value",f.join("")),r._cursorToStart=!1,this._moveToBookmark(),C=this._spanList=t.query("."+this._selector,r.document),
C.forEach(function(t,e){t.id=a+e}),this.interactive||delete c.cursor,C.style(c),this.interactive&&(o._contextMenu&&(o._contextMenu.uninitialize(),
o._contextMenu=null),o._contextMenu=new e.Menu({targetNodeIds:[r.iframe],bindDomNode:function(i){
i=t.byId(i);var s,l,c;"iframe"==i.tagName.toLowerCase()?(l=i,c=this._iframeContentWindow(l),
s=t.body(r.document)):s=i==t.body()?t.doc.documentElement:i;var d={node:i,iframe:l
};t.attr(i,"_dijitMenu"+this.id,this._bindings.push(d));var h=t.hitch(this,function(i){
return[t.connect(i,this.leftClickToOpen?"onclick":"oncontextmenu",this,function(i){
var s=i.target,c=o._strings;if(t.hasClass(s,a)&&!s.edited){t.stopEvent(i);var d=o._maxItemNumber,h=s.id,u=h.substring(a.length),_=n[s.innerHTML.toLowerCase()],p=_.length;
if(this.destroyDescendants(),0==p)this.addChild(new e.MenuItem({label:c.iMsg,disabled:!0
}));else for(var g=0;d>g&&p>g;g++)this.addChild(new e.MenuItem({label:_[g],onClick:function(){
var t=u,e=_[g];return function(){o._replaceWord(t,e),r.focus()}}()}));this.addChild(new e.MenuSeparator),
this.addChild(new e.MenuItem({label:c.iSkip,onClick:function(){o._skipWord(u),r.focus();
}})),this.addChild(new e.MenuItem({label:c.iSkipAll,onClick:function(){o._skipWordAll(u),
r.focus()}})),this.addChild(new e.MenuSeparator),this.addChild(new e.MenuItem({label:c.toDic,
onClick:function(){o._addWord(u),r.focus()}})),this._scheduleOpen(s,l,{x:i.pageX,
y:i.pageY})}}),t.connect(i,"onkeydown",this,function(e){e.shiftKey&&e.keyCode==t.keys.F10&&(t.stopEvent(e),
this._scheduleOpen(e.target,l))})]});d.connects=s?h(s):[],l&&(d.onloadHandler=t.hitch(this,function(){
var e=(this._iframeContentWindow(l),t.body(r.document));d.connects=h(e)}),l.addEventListener?l.addEventListener("load",d.onloadHandler,!1):l.attachEvent("onload",d.onloadHandler));
}}))},_selectWord:function(e){var i=this._editor,n=this._spanList;e<n.length&&n.length>0&&(i._sCall("selectElement",[n[e]]),
i._sCall("collapse",[!0]),this._findText(n[e].innerHTML,!1,!1),t.isIE&&t.style(n[e],this._highlightedIncorrectStyle));
},_replaceWord:function(e,i){var n=this._spanList;n[e].innerHTML=i,t.style(n[e],this._ignoredIncorrectStyle),
n[e].edited=!0},_skipWord:function(e){var i=this._spanList;t.style(i[e],this._ignoredIncorrectStyle),
this._cache[i[e].innerHTML.toLowerCase()].correct=!0,i[e].edited=!0},_skipWordAll:function(t,e){
var i=this._spanList,n=i.length;e=e||i[t].innerHTML.toLowerCase();for(var o=0;n>o;o++)i[o].edited||i[o].innerHTML.toLowerCase()!=e||this._skipWord(o);
},_addWord:function(t,e){var i=this._service;i.send(e||this._spanList[t].innerHTML.toLowerCase(),i.ACTION_UPDATE),
this._skipWordAll(t,e)},_findText:function(t,e,i){var n=this._editor,o=n.window,s=!1;
if(t)if(o.find)s=o.find(t,e,i,!1,!1,!1,!1);else{var r=n.document;if(r.selection){
this._editor.focus();var l=r.body.createTextRange(),c=r.selection?r.selection.createRange():null;
c&&(i?l.setEndPoint("EndToStart",c):l.setEndPoint("StartToEnd",c));var a=e?4:0;i&&(a=1|a),
s=l.findText(t,l.text.length,a),s&&l.select()}}return s},_spellCheckFilter:function(t){
var e=/<span class=["']incorrectWordPlaceHolder["'].*?>(.*?)<\/span>/g;return t.replace(e,"$1");
}});return a._SpellCheckControl=l,a._SpellCheckScriptMultiPart=c,t.subscribe(e._scopeName+".Editor.getPlugin",null,function(t){
if(!t.plugin){var e=t.args.name.toLowerCase();"spellcheck"===e&&(t.plugin=new a({
url:"url"in t.args?t.args.url:"",interactive:"interactive"in t.args?t.args.interactive:!1,
bufferLength:"bufferLength"in t.args?t.args.bufferLength:100,timeout:"timeout"in t.args?t.args.timeout:30,
exArgs:t.args}))}}),a});