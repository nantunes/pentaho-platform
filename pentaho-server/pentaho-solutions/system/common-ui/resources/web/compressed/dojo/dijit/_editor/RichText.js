define(["dojo/_base/array","dojo/_base/config","dojo/_base/declare","dojo/_base/Deferred","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/_base/kernel","dojo/keys","dojo/_base/lang","dojo/on","dojo/query","dojo/domReady","dojo/sniff","dojo/topic","dojo/_base/unload","dojo/_base/url","dojo/window","../_Widget","../_CssStateMixin","../selection","./range","./html","../focus","../main"],function(e,t,i,n,s,o,a,r,l,d,h,c,m,u,f,p,g,v,_,b,C,y,N,w,E,S,x,T){
var A=i("dijit._editor.RichText",[y,N],{constructor:function(e){this.contentPreFilters=[],
this.contentPostFilters=[],this.contentDomPreFilters=[],this.contentDomPostFilters=[],
this.editingAreaStyleSheets=[],this.events=[].concat(this.events),this._keyHandlers={},
e&&m.isString(e.value)&&(this.value=e.value),this.onLoadDeferred=new n},baseClass:"dijitEditor",
inheritWidth:!1,focusOnLoad:!1,name:"",styleSheets:"",height:"300px",minHeight:"1em",
isClosed:!0,isLoaded:!1,_SEPARATOR:"@@**%%__RICHTEXTBOUNDRY__%%**@@",_NAME_CONTENT_SEP:"@@**%%:%%**@@",
onLoadDeferred:null,isTabIndent:!1,disableSpellCheck:!1,postCreate:function(){"textarea"===this.domNode.tagName.toLowerCase()&&console.warn("RichText should not be used with the TEXTAREA tag.  See dijit._editor.RichText docs."),
this.contentPreFilters=[m.hitch(this,"_preFixUrlAttributes")].concat(this.contentPreFilters),
g("mozilla")&&(this.contentPreFilters=[this._normalizeFontStyle].concat(this.contentPreFilters),
this.contentPostFilters=[this._removeMozBogus].concat(this.contentPostFilters)),g("webkit")&&(this.contentPreFilters=[this._removeWebkitBogus].concat(this.contentPreFilters),
this.contentPostFilters=[this._removeWebkitBogus].concat(this.contentPostFilters)),
(g("ie")||g("trident"))&&(this.contentPostFilters=[this._normalizeFontStyle].concat(this.contentPostFilters),
this.contentDomPostFilters=[m.hitch(this,"_stripBreakerNodes")].concat(this.contentDomPostFilters)),
this.contentDomPostFilters=[m.hitch(this,"_stripTrailingEmptyNodes")].concat(this.contentDomPostFilters),
this.inherited(arguments),v.publish(T._scopeName+"._editor.RichText::init",this)},
startup:function(){this.inherited(arguments),this.open(),this.setupDefaultShortcuts();
},setupDefaultShortcuts:function(){var e=m.hitch(this,function(e,t){return function(){
return!this.execCommand(e,t)}}),t={b:e("bold"),i:e("italic"),u:e("underline"),a:e("selectall"),
s:function(){this.save(!0)},m:function(){this.isTabIndent=!this.isTabIndent},1:e("formatblock","h1"),
2:e("formatblock","h2"),3:e("formatblock","h3"),4:e("formatblock","h4"),"\\":e("insertunorderedlist")
};g("ie")||(t.Z=e("redo"));var i;for(i in t)this.addKeyHandler(i,!0,!1,t[i])},events:["onKeyDown","onKeyUp"],
captureEvents:[],_editorCommandsLocalized:!1,_localizeEditorCommands:function(){if(A._editorCommandsLocalized)return this._local2NativeFormatNames=A._local2NativeFormatNames,
void(this._native2LocalFormatNames=A._native2LocalFormatNames);A._editorCommandsLocalized=!0,
A._local2NativeFormatNames={},A._native2LocalFormatNames={},this._local2NativeFormatNames=A._local2NativeFormatNames,
this._native2LocalFormatNames=A._native2LocalFormatNames;for(var e,t=["div","p","pre","h1","h2","h3","h4","h5","h6","ol","ul","address"],i="",n=0;e=t[n++];)i+="l"!==e.charAt(1)?"<"+e+"><span>content</span></"+e+"><br/>":"<"+e+"><li>content</li></"+e+"><br/>";
var s={position:"absolute",top:"0px",zIndex:10,opacity:.01},o=r.create("div",{style:s,
innerHTML:i});this.ownerDocumentBody.appendChild(o);var a=m.hitch(this,function(){
for(var e=o.firstChild;e;)try{this.selection.selectElement(e.firstChild);var t=e.tagName.toLowerCase();
this._local2NativeFormatNames[t]=document.queryCommandValue("formatblock"),this._native2LocalFormatNames[this._local2NativeFormatNames[t]]=t,
e=e.nextSibling.nextSibling}catch(i){}r.destroy(o)});this.defer(a)},open:function(e){
(!this.onLoadDeferred||this.onLoadDeferred.fired>=0)&&(this.onLoadDeferred=new n),
this.isClosed||this.close(),v.publish(T._scopeName+"._editor.RichText::open",this),
1===arguments.length&&e.nodeName&&(this.domNode=e);var i,l=this.domNode;if(m.isString(this.value))i=this.value,
delete this.value,l.innerHTML="";else if(l.nodeName&&"textarea"==l.nodeName.toLowerCase()){
var h=this.textarea=l;this.name=h.name,i=h.value,l=this.domNode=this.ownerDocument.createElement("div"),
l.setAttribute("widgetId",this.id),h.removeAttribute("widgetId"),l.cssText=h.cssText,
l.className+=" "+h.className,r.place(l,h,"before");var c=m.hitch(this,function(){
if(d.set(h,{display:"block",position:"absolute",top:"-1000px"}),g("ie")){var e=h.style;
this.__overflow=e.overflow,e.overflow="hidden"}});if(g("ie")?this.defer(c,10):c(),
h.form){var f=h.value;this.reset=function(){var e=this.getValue();e!==f&&this.replaceValue(f);
},u(h.form,"submit",m.hitch(this,function(){o.set(h,"disabled",this.disabled),h.value=this.getValue();
}))}}else i=S.getChildrenHtml(l),l.innerHTML="";if(this.value=i,l.nodeName&&"LI"===l.nodeName&&(l.innerHTML=" <br>"),
this.header=l.ownerDocument.createElement("div"),l.appendChild(this.header),this.editingArea=l.ownerDocument.createElement("div"),
l.appendChild(this.editingArea),this.footer=l.ownerDocument.createElement("div"),
l.appendChild(this.footer),this.name||(this.name=this.id+"_AUTOGEN"),""!==this.name&&(!t.useXDomain||t.allowXdRichTextSave)){
var p=s.byId(T._scopeName+"._editor.RichText.value");if(p&&""!==p.value)for(var b,C=p.value.split(this._SEPARATOR),y=0;b=C[y++];){
var N=b.split(this._NAME_CONTENT_SEP);if(N[0]===this.name){i=N[1],C=C.splice(y,1),
p.value=C.join(this._SEPARATOR);break}}A._globalSaveHandler||(A._globalSaveHandler={},
_.addOnUnload(function(){var e;for(e in A._globalSaveHandler){var t=A._globalSaveHandler[e];
m.isFunction(t)&&t()}})),A._globalSaveHandler[this.id]=m.hitch(this,"_saveContent");
}this.isClosed=!1;var E=this.editorObject=this.iframe=this.ownerDocument.createElement("iframe");
E.id=this.id+"_iframe",E.style.border="none",E.style.width="100%",this._layoutMode?E.style.height="100%":g("ie")>=7?(this.height&&(E.style.height=this.height),
this.minHeight&&(E.style.minHeight=this.minHeight)):E.style.height=this.height?this.height:this.minHeight,
E.frameBorder=0,E._loadFunc=m.hitch(this,function(e){this.window=e,this.document=e.document,
this.selection=new w.SelectionManager(e),g("ie")&&this._localizeEditorCommands(),
this.onLoad(i)});var x,k=this._getIframeDocTxt().replace(/\\/g,"\\\\").replace(/'/g,"\\'");
x=g("ie")<11?'javascript:document.open();try{parent.window;}catch(e){document.domain="'+document.domain+"\";}document.write('"+k+"');document.close()":"javascript: '"+k+"'",
9==g("ie")?(this.editingArea.appendChild(E),E.src=x):(E.setAttribute("src",x),this.editingArea.appendChild(E)),
"LI"===l.nodeName&&(l.lastChild.style.marginTop="-1.2em"),a.add(this.domNode,this.baseClass);
},_local2NativeFormatNames:{},_native2LocalFormatNames:{},_getIframeDocTxt:function(){
var e=d.getComputedStyle(this.domNode),t="<div id='dijitEditorBody'></div>",i=[e.fontWeight,e.fontSize,e.fontFamily].join(" "),n=e.lineHeight;
n=n.indexOf("px")>=0?parseFloat(n)/parseFloat(e.fontSize):n.indexOf("em")>=0?parseFloat(n):"normal";
var o="",a=this;this.style.replace(/(^|;)\s*(line-|font-?)[^;]+/gi,function(e){e=e.replace(/^;/gi,"")+";";
var t=e.split(":")[0];if(t){t=m.trim(t),t=t.toLowerCase();var i,n="";for(i=0;i<t.length;i++){
var s=t.charAt(i);switch(s){case"-":i++,s=t.charAt(i).toUpperCase();default:n+=s}
}d.set(a.domNode,n,"")}o+=e+";"});var r=f('label[for="'+this.id+'"]'),l="";return r.length?l=r[0].innerHTML:this["aria-label"]?l=this["aria-label"]:this["aria-labelledby"]&&(l=s.byId(this["aria-labelledby"]).innerHTML),
this.iframe.setAttribute("title",l),["<!DOCTYPE html>",this.isLeftToRight()?"<html lang='"+this.lang+"'>\n<head>\n":"<html dir='rtl' lang='"+this.lang+"'>\n<head>\n",l?"<title>"+l+"</title>":"","<meta http-equiv='Content-Type' content='text/html'>\n","<style>\n","	body,html {\n","		background:transparent;\n","		padding: 1px 0 0 0;\n","		margin: -1px 0 0 0;\n","	}\n","	body,html,#dijitEditorBody { outline: none; }","html { height: 100%; width: 100%; overflow: hidden; }\n",this.height?"	body,#dijitEditorBody { height: 100%; width: 100%; overflow: auto; }\n":"	body,#dijitEditorBody { min-height: "+this.minHeight+"; width: 100%; overflow-x: auto; overflow-y: hidden; }\n","	body{\n","		top:0px;\n","		left:0px;\n","		right:0px;\n","		font:",i,";\n",this.height||g("opera")?"":"		position: fixed;\n","		line-height:",n,";\n","	}\n","	p{ margin: 1em 0; }\n","	li > ul:-moz-first-node, li > ol:-moz-first-node{ padding-top: 1.2em; }\n",g("ie")?"":"	li{ min-height:1.2em; }\n","</style>\n",this._applyEditingAreaStyleSheets(),"\n","</head>\n<body role='main' ","onload='frameElement && frameElement._loadFunc(window,document)' ","style='"+o+"'>",t,"</body>\n</html>"].join("");
},_applyEditingAreaStyleSheets:function(){var e=[];this.styleSheets&&(e=this.styleSheets.split(";"),
this.styleSheets=""),e=e.concat(this.editingAreaStyleSheets),this.editingAreaStyleSheets=[];
for(var t,i="",n=0,s=C.get(this.ownerDocument);t=e[n++];){var o=new b(s.location,t).toString();
this.editingAreaStyleSheets.push(o),i+='<link rel="stylesheet" type="text/css" href="'+o+'"/>';
}return i},addStyleSheet:function(t){var i=t.toString(),n=C.get(this.ownerDocument);
("."===i.charAt(0)||"/"!==i.charAt(0)&&!t.host)&&(i=new b(n.location,i).toString()),
e.indexOf(this.editingAreaStyleSheets,i)>-1||(this.editingAreaStyleSheets.push(i),
this.onLoadDeferred.then(m.hitch(this,function(){if(this.document.createStyleSheet)this.document.createStyleSheet(i);else{
var e=this.document.getElementsByTagName("head")[0],t=this.document.createElement("link");
t.rel="stylesheet",t.type="text/css",t.href=i,e.appendChild(t)}})))},removeStyleSheet:function(t){
var i=t.toString(),n=C.get(this.ownerDocument);("."===i.charAt(0)||"/"!==i.charAt(0)&&!t.host)&&(i=new b(n.location,i).toString());
var s=e.indexOf(this.editingAreaStyleSheets,i);-1!==s&&(delete this.editingAreaStyleSheets[s],
f('link[href="'+i+'"]',this.window.document).orphan())},disabled:!1,_mozSettingProps:{
styleWithCSS:!1},_setDisabledAttr:function(e){if(e=!!e,this._set("disabled",e),this.isLoaded){
var t=g("ie")&&(this.isLoaded||!this.focusOnLoad);if(t&&(this.editNode.unselectable="on"),
this.editNode.contentEditable=!e,this.editNode.tabIndex=e?"-1":this.tabIndex,t&&this.defer(function(){
this.editNode&&(this.editNode.unselectable="off")}),g("mozilla")&&!e&&this._mozSettingProps){
var i,n=this._mozSettingProps;for(i in n)if(n.hasOwnProperty(i))try{this.document.execCommand(i,!1,n[i]);
}catch(s){}}this._disabledOK=!0}},onLoad:function(t){this.window.__registeredWindow||(this.window.__registeredWindow=!0,
this._iframeRegHandle=x.registerIframe(this.iframe)),this.editNode=this.document.body.firstChild;
var i=this;this.beforeIframeNode=r.place("<div tabIndex=-1></div>",this.iframe,"before"),
this.afterIframeNode=r.place("<div tabIndex=-1></div>",this.iframe,"after"),this.iframe.onfocus=this.document.onfocus=function(){
i.editNode.focus()},this.focusNode=this.editNode;var n=this.events.concat(this.captureEvents),s=this.iframe?this.document:this.editNode;
if(this.own(e.map(n,function(e){var t=e.toLowerCase().replace(/^on/,"");u(s,t,m.hitch(this,e));
},this)),this.own(u(s,"mouseup",m.hitch(this,"onClick"))),g("ie")?(this.own(u(this.document,"mousedown",m.hitch(this,"_onIEMouseDown"))),
this.editNode.style.zoom=1):this.own(u(this.document,"mousedown",m.hitch(this,function(){
delete this._cursorToStart}))),g("webkit")&&(this._webkitListener=this.own(u(this.document,"mouseup",m.hitch(this,"onDisplayChanged")))[0],
this.own(u(this.document,"mousedown",m.hitch(this,function(e){var t=e.target;!t||t!==this.document.body&&t!==this.document||this.defer("placeCursorAtEnd");
})))),g("ie"))try{this.document.execCommand("RespectVisibilityInDesign",!0,null)}catch(o){}
this.isLoaded=!0,this.set("disabled",this.disabled);var a=m.hitch(this,function(){
this.setValue(t),this.onLoadDeferred&&this.onLoadDeferred.resolve(!0),this.onDisplayChanged(),
this.focusOnLoad&&p(m.hitch(this,"defer","focus",this.updateInterval)),this.value=this.getValue(!0);
});this.setValueDeferred?this.setValueDeferred.then(a):a()},onKeyDown:function(t){
t.keyCode===c.TAB&&this.isTabIndent&&(t.stopPropagation(),t.preventDefault(),this.queryCommandEnabled(t.shiftKey?"outdent":"indent")&&this.execCommand(t.shiftKey?"outdent":"indent")),
t.keyCode!=c.TAB||this.isTabIndent||(!t.shiftKey||t.ctrlKey||t.altKey?t.shiftKey||t.ctrlKey||t.altKey||this.afterIframeNode.focus():this.beforeIframeNode.focus()),
g("ie")<9&&t.keyCode===c.BACKSPACE&&"Control"===this.document.selection.type&&(t.stopPropagation(),
t.preventDefault(),this.execCommand("delete")),g("ff")&&(t.keyCode===c.PAGE_UP||t.keyCode===c.PAGE_DOWN)&&this.editNode.clientHeight>=this.editNode.scrollHeight&&t.preventDefault();
var i=this._keyHandlers[t.keyCode],n=arguments;return i&&!t.altKey&&e.some(i,function(e){
return e.shift^t.shiftKey||e.ctrl^(t.ctrlKey||t.metaKey)?void 0:(e.handler.apply(this,n)||t.preventDefault(),
!0)},this),this.defer("onKeyPressed",1),!0},onKeyUp:function(){},setDisabled:function(e){
h.deprecated("dijit.Editor::setDisabled is deprecated",'use dijit.Editor::attr("disabled",boolean) instead',2),
this.set("disabled",e)},_setValueAttr:function(e){this.setValue(e)},_setDisableSpellCheckAttr:function(e){
this.document?o.set(this.document.body,"spellcheck",!e):this.onLoadDeferred.then(m.hitch(this,function(){
o.set(this.document.body,"spellcheck",!e)})),this._set("disableSpellCheck",e)},addKeyHandler:function(e,t,i,n){
"string"==typeof e&&(e=e.toUpperCase().charCodeAt(0)),m.isArray(this._keyHandlers[e])||(this._keyHandlers[e]=[]),
this._keyHandlers[e].push({shift:i||!1,ctrl:t||!1,handler:n})},onKeyPressed:function(){
this.onDisplayChanged()},onClick:function(e){this.onDisplayChanged(e)},_onIEMouseDown:function(){
this.focused||this.disabled||this.focus()},_onBlur:function(e){g("ie")>=9&&this.defer(function(){
x.curNode||this.ownerDocumentBody.focus()}),this.inherited(arguments);var t=this.getValue(!0);
t!==this.value&&this.onChange(t),this._set("value",t)},_onFocus:function(e){this.disabled||(this._disabledOK||this.set("disabled",!1),
this.inherited(arguments))},blur:function(){!g("ie")&&this.window.document.documentElement&&this.window.document.documentElement.focus?this.window.document.documentElement.focus():this.ownerDocumentBody.focus&&this.ownerDocumentBody.focus();
},focus:function(){return this.isLoaded?this._cursorToStart&&(delete this._cursorToStart,
this.editNode.childNodes)?void this.placeCursorAtStart():void(g("ie")<9?this.iframe.fireEvent("onfocus",document.createEventObject()):this.editNode.focus()):void(this.focusOnLoad=!0);
},updateInterval:200,_updateTimer:null,onDisplayChanged:function(){this._updateTimer&&this._updateTimer.remove(),
this._updateTimer=this.defer("onNormalizedDisplayChanged",this.updateInterval)},onNormalizedDisplayChanged:function(){
delete this._updateTimer},onChange:function(){},_normalizeCommand:function(e,t){var i=e.toLowerCase();
return"formatblock"===i?g("safari")&&void 0===t&&(i="heading"):"hilitecolor"!==i||g("mozilla")||(i="backcolor"),
i},_qcaCache:{},queryCommandAvailable:function(e){var t=this._qcaCache[e];return void 0!==t?t:this._qcaCache[e]=this._queryCommandAvailable(e);
},_queryCommandAvailable:function(e){function t(e){return{ie:Boolean(e&i),mozilla:Boolean(e&n),
webkit:Boolean(e&s),opera:Boolean(e&o)}}var i=1,n=2,s=4,o=8,a=null;switch(e.toLowerCase()){
case"bold":case"italic":case"underline":case"subscript":case"superscript":case"fontname":
case"fontsize":case"forecolor":case"hilitecolor":case"justifycenter":case"justifyfull":
case"justifyleft":case"justifyright":case"delete":case"selectall":case"toggledir":
a=t(n|i|s|o);break;case"createlink":case"unlink":case"removeformat":case"inserthorizontalrule":
case"insertimage":case"insertorderedlist":case"insertunorderedlist":case"indent":
case"outdent":case"formatblock":case"inserthtml":case"undo":case"redo":case"strikethrough":
case"tabindent":a=t(n|i|o|s);break;case"blockdirltr":case"blockdirrtl":case"dirltr":
case"dirrtl":case"inlinedirltr":case"inlinedirrtl":a=t(i);break;case"cut":case"copy":
case"paste":a=t(i|n|s|o);break;case"inserttable":a=t(n|i);break;case"insertcell":
case"insertcol":case"insertrow":case"deletecells":case"deletecols":case"deleterows":
case"mergecells":case"splitcell":a=t(i|n);break;default:return!1}return(g("ie")||g("trident"))&&a.ie||g("mozilla")&&a.mozilla||g("webkit")&&a.webkit||g("opera")&&a.opera;
},execCommand:function(e,t){var i;if(this.focused&&this.focus(),e=this._normalizeCommand(e,t),
void 0!==t){if("heading"===e)throw new Error("unimplemented");"formatblock"===e&&(g("ie")||g("trident"))&&(t="<"+t+">");
}var n="_"+e+"Impl";return this[n]?i=this[n](t):(t=arguments.length>1?t:null,(t||"createlink"!==e)&&(i=this.document.execCommand(e,!1,t))),
this.onDisplayChanged(),i},queryCommandEnabled:function(e){if(this.disabled||!this._disabledOK)return!1;
e=this._normalizeCommand(e);var t="_"+e+"EnabledImpl";return this[t]?this[t](e):this._browserQueryCommandEnabled(e);
},queryCommandState:function(e){if(this.disabled||!this._disabledOK)return!1;e=this._normalizeCommand(e);
try{return this.document.queryCommandState(e)}catch(t){return!1}},queryCommandValue:function(e){
if(this.disabled||!this._disabledOK)return!1;var t;if(e=this._normalizeCommand(e),
(g("ie")||g("trident"))&&"formatblock"===e)t=this._native2LocalFormatNames[this.document.queryCommandValue(e)];else if(g("mozilla")&&"hilitecolor"===e){
var i;try{i=this.document.queryCommandValue("styleWithCSS")}catch(n){i=!1}this.document.execCommand("styleWithCSS",!1,!0),
t=this.document.queryCommandValue(e),this.document.execCommand("styleWithCSS",!1,i);
}else t=this.document.queryCommandValue(e);return t},_sCall:function(e,t){return this.selection[e].apply(this.selection,t);
},placeCursorAtStart:function(){this.focus();var e=!1;if(g("mozilla"))for(var t=this.editNode.firstChild;t;){
if(3===t.nodeType){if(t.nodeValue.replace(/^\s+|\s+$/g,"").length>0){e=!0,this.selection.selectElement(t);
break}}else if(1===t.nodeType){e=!0;var i=t.tagName?t.tagName.toLowerCase():"";/br|input|img|base|meta|area|basefont|hr|link/.test(i)?this.selection.selectElement(t):this.selection.selectElementChildren(t);
break}t=t.nextSibling}else e=!0,this.selection.selectElementChildren(this.editNode);
e&&this.selection.collapse(!0)},placeCursorAtEnd:function(){this.focus();var e=!1;
if(g("mozilla"))for(var t=this.editNode.lastChild;t;){if(3===t.nodeType){if(t.nodeValue.replace(/^\s+|\s+$/g,"").length>0){
e=!0,this.selection.selectElement(t);break}}else if(1===t.nodeType){e=!0,this.selection.selectElement(t.lastChild||t);
break}t=t.previousSibling}else e=!0,this.selection.selectElementChildren(this.editNode);
e&&this.selection.collapse(!1)},getValue:function(e){return!this.textarea||!this.isClosed&&this.isLoaded?this._postFilterContent(null,e):this.textarea.value;
},_getValueAttr:function(){return this.getValue(!0)},setValue:function(e){if(!this.isLoaded)return void this.onLoadDeferred.then(m.hitch(this,function(){
this.setValue(e)}));if(this._cursorToStart=!0,!this.textarea||!this.isClosed&&this.isLoaded){
e=this._preFilterContent(e);var t=this.isClosed?this.domNode:this.editNode;!e&&g("webkit")&&(e="&#160;"),
t.innerHTML=e,this._preDomFilterContent(t)}else this.textarea.value=e;this.onDisplayChanged(),
this._set("value",this.getValue(!0))},replaceValue:function(e){this.isClosed?this.setValue(e):this.window&&this.window.getSelection&&!g("mozilla")?this.setValue(e):this.window&&this.window.getSelection?(e=this._preFilterContent(e),
this.execCommand("selectall"),this.execCommand("inserthtml",e),this._preDomFilterContent(this.editNode)):this.document&&this.document.selection&&this.setValue(e),
this._set("value",this.getValue(!0))},_preFilterContent:function(t){var i=t;return e.forEach(this.contentPreFilters,function(e){
e&&(i=e(i))}),i},_preDomFilterContent:function(t){t=t||this.editNode,e.forEach(this.contentDomPreFilters,function(e){
e&&m.isFunction(e)&&e(t)},this)},_postFilterContent:function(t,i){var n;return m.isString(t)?n=t:(t=t||this.editNode,
this.contentDomPostFilters.length&&(i&&(t=m.clone(t)),e.forEach(this.contentDomPostFilters,function(e){
t=e(t)})),n=S.getChildrenHtml(t)),m.trim(n.replace(/^\xA0\xA0*/,"").replace(/\xA0\xA0*$/,"")).length||(n=""),
e.forEach(this.contentPostFilters,function(e){n=e(n)}),n},_saveContent:function(){
var e=s.byId(T._scopeName+"._editor.RichText.value");e&&(e.value&&(e.value+=this._SEPARATOR),
e.value+=this.name+this._NAME_CONTENT_SEP+this.getValue(!0))},escapeXml:function(e,t){
return e=e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;"),
t||(e=e.replace(/'/gm,"&#39;")),e},getNodeHtml:function(e){return h.deprecated("dijit.Editor::getNodeHtml is deprecated","use dijit/_editor/html::getNodeHtml instead",2),
S.getNodeHtml(e)},getNodeChildrenHtml:function(e){return h.deprecated("dijit.Editor::getNodeChildrenHtml is deprecated","use dijit/_editor/html::getChildrenHtml instead",2),
S.getChildrenHtml(e)},close:function(e){if(!this.isClosed){if(arguments.length||(e=!0),
e&&this._set("value",this.getValue(!0)),this.interval&&clearInterval(this.interval),
this._webkitListener&&(this._webkitListener.remove(),delete this._webkitListener),
g("ie")&&(this.iframe.onfocus=null),this.iframe._loadFunc=null,this._iframeRegHandle&&(this._iframeRegHandle.remove(),
delete this._iframeRegHandle),this.textarea){var t=this.textarea.style;t.position="",
t.left=t.top="",g("ie")&&(t.overflow=this.__overflow,this.__overflow=null),this.textarea.value=this.value,
r.destroy(this.domNode),this.domNode=this.textarea}else this.domNode.innerHTML=this.value;
delete this.iframe,a.remove(this.domNode,this.baseClass),this.isClosed=!0,this.isLoaded=!1,
delete this.editNode,delete this.focusNode,this.window&&this.window._frameElement&&(this.window._frameElement=null),
this.window=null,this.document=null,this.editingArea=null,this.editorObject=null}
},destroy:function(){this.isClosed||this.close(!1),this._updateTimer&&this._updateTimer.remove(),
this.inherited(arguments),A._globalSaveHandler&&delete A._globalSaveHandler[this.id];
},_removeMozBogus:function(e){return e.replace(/\stype="_moz"/gi,"").replace(/\s_moz_dirty=""/gi,"").replace(/_moz_resizing="(true|false)"/gi,"");
},_removeWebkitBogus:function(e){return e=e.replace(/\sclass="webkit-block-placeholder"/gi,""),
e=e.replace(/\sclass="apple-style-span"/gi,""),e=e.replace(/<meta charset=\"utf-8\" \/>/gi,"");
},_normalizeFontStyle:function(e){return e.replace(/<(\/)?strong([ \>])/gi,"<$1b$2").replace(/<(\/)?em([ \>])/gi,"<$1i$2");
},_preFixUrlAttributes:function(e){return e.replace(/(?:(<a(?=\s).*?\shref=)("|')(.*?)\2)|(?:(<a\s.*?href=)([^"'][^ >]+))/gi,"$1$4$2$3$5$2 _djrealurl=$2$3$5$2").replace(/(?:(<img(?=\s).*?\ssrc=)("|')(.*?)\2)|(?:(<img\s.*?src=)([^"'][^ >]+))/gi,"$1$4$2$3$5$2 _djrealurl=$2$3$5$2");
},_browserQueryCommandEnabled:function(e){if(!e)return!1;var t=g("ie")<9?this.document.selection.createRange():this.document;
try{return t.queryCommandEnabled(e)}catch(i){return!1}},_createlinkEnabledImpl:function(){
var e=!0;if(g("opera")){var t=this.window.getSelection();e=t.isCollapsed?!0:this.document.queryCommandEnabled("createlink");
}else e=this._browserQueryCommandEnabled("createlink");return e},_unlinkEnabledImpl:function(){
var e=!0;return e=g("mozilla")||g("webkit")?this.selection.hasAncestorElement("a"):this._browserQueryCommandEnabled("unlink");
},_inserttableEnabledImpl:function(){var e=!0;return e=g("mozilla")||g("webkit")?!0:this._browserQueryCommandEnabled("inserttable");
},_cutEnabledImpl:function(){var e=!0;if(g("webkit")){var t=this.window.getSelection();
t&&(t=t.toString()),e=!!t}else e=this._browserQueryCommandEnabled("cut");return e;
},_copyEnabledImpl:function(){var e=!0;if(g("webkit")){var t=this.window.getSelection();
t&&(t=t.toString()),e=!!t}else e=this._browserQueryCommandEnabled("copy");return e;
},_pasteEnabledImpl:function(){var e=!0;return g("webkit")?!0:e=this._browserQueryCommandEnabled("paste");
},_inserthorizontalruleImpl:function(e){return g("ie")?this._inserthtmlImpl("<hr>"):this.document.execCommand("inserthorizontalrule",!1,e);
},_unlinkImpl:function(e){if(this.queryCommandEnabled("unlink")&&(g("mozilla")||g("webkit"))){
var t=this.selection.getAncestorElement("a");return this.selection.selectElement(t),
this.document.execCommand("unlink",!1,null)}return this.document.execCommand("unlink",!1,e);
},_hilitecolorImpl:function(e){var t,i=this._handleTextColorOrProperties("hilitecolor",e);
return i||(g("mozilla")?(this.document.execCommand("styleWithCSS",!1,!0),console.log("Executing color command."),
t=this.document.execCommand("hilitecolor",!1,e),this.document.execCommand("styleWithCSS",!1,!1)):t=this.document.execCommand("hilitecolor",!1,e)),
t},_backcolorImpl:function(e){g("ie")&&(e=e?e:null);var t=this._handleTextColorOrProperties("backcolor",e);
return t||(t=this.document.execCommand("backcolor",!1,e)),t},_forecolorImpl:function(e){
g("ie")&&(e=e?e:null);var t=!1;return t=this._handleTextColorOrProperties("forecolor",e),
t||(t=this.document.execCommand("forecolor",!1,e)),t},_inserthtmlImpl:function(e){
e=this._preFilterContent(e);var t=!0;if(g("ie")<9){var i=this.document.selection.createRange();
if("CONTROL"===this.document.selection.type.toUpperCase()){for(var n=i.item(0);i.length;)i.remove(i.item(0));
n.outerHTML=e}else i.pasteHTML(e);i.select()}else if(g("trident")<8){var i,s=E.getSelection(this.window);
if(s&&s.rangeCount&&s.getRangeAt){i=s.getRangeAt(0),i.deleteContents();var o=r.create("div");
o.innerHTML=e;for(var a,l,n=this.document.createDocumentFragment();a=o.firstChild;)l=n.appendChild(a);
i.insertNode(n),l&&(i=i.cloneRange(),i.setStartAfter(l),i.collapse(!1),s.removeAllRanges(),
s.addRange(i))}}else g("mozilla")&&!e.length?this.selection.remove():t=this.document.execCommand("inserthtml",!1,e);
return t},_boldImpl:function(e){var t=!1;return g("ie")&&(this._adaptIESelection(),
t=this._adaptIEFormatAreaAndExec("bold")),t||(t=this.document.execCommand("bold",!1,e)),
t},_italicImpl:function(e){var t=!1;return g("ie")&&(this._adaptIESelection(),t=this._adaptIEFormatAreaAndExec("italic")),
t||(t=this.document.execCommand("italic",!1,e)),t},_underlineImpl:function(e){var t=!1;
return g("ie")&&(this._adaptIESelection(),t=this._adaptIEFormatAreaAndExec("underline")),
t||(t=this.document.execCommand("underline",!1,e)),t},_strikethroughImpl:function(e){
var t=!1;return g("ie")&&(this._adaptIESelection(),t=this._adaptIEFormatAreaAndExec("strikethrough")),
t||(t=this.document.execCommand("strikethrough",!1,e)),t},_superscriptImpl:function(e){
var t=!1;return g("ie")&&(this._adaptIESelection(),t=this._adaptIEFormatAreaAndExec("superscript")),
t||(t=this.document.execCommand("superscript",!1,e)),t},_subscriptImpl:function(e){
var t=!1;return g("ie")&&(this._adaptIESelection(),t=this._adaptIEFormatAreaAndExec("subscript")),
t||(t=this.document.execCommand("subscript",!1,e)),t},_fontnameImpl:function(e){var t;
return g("ie")&&(t=this._handleTextColorOrProperties("fontname",e)),t||(t=this.document.execCommand("fontname",!1,e)),
t},_fontsizeImpl:function(e){var t;return g("ie")&&(t=this._handleTextColorOrProperties("fontsize",e)),
t||(t=this.document.execCommand("fontsize",!1,e)),t},_insertorderedlistImpl:function(e){
var t=!1;return g("ie")&&(t=this._adaptIEList("insertorderedlist",e)),t||(t=this.document.execCommand("insertorderedlist",!1,e)),
t},_insertunorderedlistImpl:function(e){var t=!1;return g("ie")&&(t=this._adaptIEList("insertunorderedlist",e)),
t||(t=this.document.execCommand("insertunorderedlist",!1,e)),t},getHeaderHeight:function(){
return this._getNodeChildrenHeight(this.header)},getFooterHeight:function(){return this._getNodeChildrenHeight(this.footer);
},_getNodeChildrenHeight:function(e){var t=0;if(e&&e.childNodes){var i;for(i=0;i<e.childNodes.length;i++){
var n=l.position(e.childNodes[i]);t+=n.h}}return t},_isNodeEmpty:function(e,t){return 1===e.nodeType?e.childNodes.length>0?this._isNodeEmpty(e.childNodes[0],t):!0:3===e.nodeType?""===e.nodeValue.substring(t):!1;
},_removeStartingRangeFromRange:function(e,t){if(e.nextSibling)t.setStart(e.nextSibling,0);else{
for(var i=e.parentNode;i&&null==i.nextSibling;)i=i.parentNode;i&&t.setStart(i.nextSibling,0);
}return t},_adaptIESelection:function(){var e=E.getSelection(this.window);if(e&&e.rangeCount&&!e.isCollapsed){
for(var t=e.getRangeAt(0),i=t.startContainer,n=t.startOffset;3===i.nodeType&&n>=i.length&&i.nextSibling;)n-=i.length,
i=i.nextSibling;for(var s=null;this._isNodeEmpty(i,n)&&i!==s;)s=i,t=this._removeStartingRangeFromRange(i,t),
i=t.startContainer,n=0;e.removeAllRanges(),e.addRange(t)}},_adaptIEFormatAreaAndExec:function(t){
var i,n,s,o,a,l,d,h,c=E.getSelection(this.window),m=this.document;if(!(t&&c&&c.isCollapsed))return!1;
var u=this.queryCommandValue(t);if(u){var f=this._tagNamesForCommand(t);s=c.getRangeAt(0);
var p=s.startContainer;if(3===p.nodeType){var g=s.endOffset;p.length<g&&(n=this._adjustNodeAndOffset(i,g),
p=n.node,g=n.offset)}for(var v;p&&p!==this.editNode;){var _=p.tagName?p.tagName.toLowerCase():"";
if(e.indexOf(f,_)>-1){v=p;break}p=p.parentNode}if(v){i=s.startContainer;var b=m.createElement(v.tagName);
if(r.place(b,v,"after"),i&&3===i.nodeType){var C,y,N=s.endOffset;i.length<N&&(n=this._adjustNodeAndOffset(i,N),
i=n.node,N=n.offset),o=i.nodeValue,a=m.createTextNode(o.substring(0,N));var w=o.substring(N,o.length);
w&&(l=m.createTextNode(w)),r.place(a,i,"before"),l&&(d=m.createElement("span"),d.className="ieFormatBreakerSpan",
r.place(d,i,"after"),r.place(l,d,"after"),l=d),r.destroy(i);for(var S,x=a.parentNode,T=[];x!==v;){
var A=x.tagName;S={tagName:A},T.push(S);var k=m.createElement(A);if(x.style&&k.style&&x.style.cssText&&(k.style.cssText=x.style.cssText,
S.cssText=x.style.cssText),"FONT"===x.tagName&&(x.color&&(k.color=x.color,S.color=x.color),
x.face&&(k.face=x.face,S.face=x.face),x.size&&(k.size=x.size,S.size=x.size)),x.className&&(k.className=x.className,
S.className=x.className),l)for(C=l;C;)y=C.nextSibling,k.appendChild(C),C=y;k.tagName==x.tagName?(d=m.createElement("span"),
d.className="ieFormatBreakerSpan",r.place(d,x,"after"),r.place(k,d,"after")):r.place(k,x,"after"),
a=x,l=k,x=x.parentNode}if(l)for(C=l,(1===C.nodeType||3===C.nodeType&&C.nodeValue)&&(b.innerHTML="");C;)y=C.nextSibling,
b.appendChild(C),C=y;var F;if(T.length){S=T.pop();var I=m.createElement(S.tagName);
for(S.cssText&&I.style&&(I.style.cssText=S.cssText),S.className&&(I.className=S.className),
"FONT"===S.tagName&&(S.color&&(I.color=S.color),S.face&&(I.face=S.face),S.size&&(I.size=S.size)),
r.place(I,b,"before");T.length;){S=T.pop();var L=m.createElement(S.tagName);S.cssText&&L.style&&(L.style.cssText=S.cssText),
S.className&&(L.className=S.className),"FONT"===S.tagName&&(S.color&&(L.color=S.color),
S.face&&(L.face=S.face),S.size&&(L.size=S.size)),I.appendChild(L),I=L}h=m.createTextNode("."),
d.appendChild(h),I.appendChild(h),F=E.create(this.window),F.setStart(h,0),F.setEnd(h,h.length),
c.removeAllRanges(),c.addRange(F),this.selection.collapse(!1),h.parentNode.innerHTML="";
}else d=m.createElement("span"),d.className="ieFormatBreakerSpan",h=m.createTextNode("."),
d.appendChild(h),r.place(d,b,"before"),F=E.create(this.window),F.setStart(h,0),F.setEnd(h,h.length),
c.removeAllRanges(),c.addRange(F),this.selection.collapse(!1),h.parentNode.innerHTML="";
return b.firstChild||r.destroy(b),!0}}return!1}if(s=c.getRangeAt(0),i=s.startContainer,
i&&3===i.nodeType){var g=s.startOffset;i.length<g&&(n=this._adjustNodeAndOffset(i,g),
i=n.node,g=n.offset),o=i.nodeValue,a=m.createTextNode(o.substring(0,g));var w=o.substring(g);
""!==w&&(l=m.createTextNode(o.substring(g))),d=m.createElement("span"),h=m.createTextNode("."),
d.appendChild(h),a.length?r.place(a,i,"after"):a=i,r.place(d,a,"after"),l&&r.place(l,d,"after"),
r.destroy(i);var F=E.create(this.window);return F.setStart(h,0),F.setEnd(h,h.length),
c.removeAllRanges(),c.addRange(F),m.execCommand(t),r.place(d.firstChild,d,"before"),
r.destroy(d),F.setStart(h,0),F.setEnd(h,h.length),c.removeAllRanges(),c.addRange(F),
this.selection.collapse(!1),h.parentNode.innerHTML="",!0}},_adaptIEList:function(e){
var t=E.getSelection(this.window);if(t.isCollapsed&&t.rangeCount&&!this.queryCommandValue(e)){
var i=t.getRangeAt(0),n=i.startContainer;if(n&&3==n.nodeType&&!i.startOffset){var s="ul";
"insertorderedlist"===e&&(s="ol");var o=this.document.createElement(s),a=r.create("li",null,o);
r.place(o,n,"before"),a.appendChild(n),r.create("br",null,o,"after");var l=E.create(this.window);
return l.setStart(n,0),l.setEnd(n,n.length),t.removeAllRanges(),t.addRange(l),this.selection.collapse(!0),
!0}}return!1},_handleTextColorOrProperties:function(e,t){var i,n,s,o,a,l,h,c,m=E.getSelection(this.window),u=this.document;
if(t=t||null,e&&m&&m.isCollapsed&&m.rangeCount&&(s=m.getRangeAt(0),i=s.startContainer,
i&&3===i.nodeType)){var f=s.startOffset;i.length<f&&(n=this._adjustNodeAndOffset(i,f),
i=n.node,f=n.offset),o=i.nodeValue,a=u.createTextNode(o.substring(0,f));var p=o.substring(f);
""!==p&&(l=u.createTextNode(o.substring(f))),h=u.createElement("span"),c=u.createTextNode("."),
h.appendChild(c);var v=u.createElement("span");h.appendChild(v),a.length?r.place(a,i,"after"):a=i,
r.place(h,a,"after"),l&&r.place(l,h,"after"),r.destroy(i);var _=E.create(this.window);
if(_.setStart(c,0),_.setEnd(c,c.length),m.removeAllRanges(),m.addRange(_),g("webkit")){
var b="color";("hilitecolor"===e||"backcolor"===e)&&(b="backgroundColor"),d.set(h,b,t),
this.selection.remove(),r.destroy(v),h.innerHTML="&#160;",this.selection.selectElement(h),
this.focus()}else this.execCommand(e,t),r.place(h.firstChild,h,"before"),r.destroy(h),
_.setStart(c,0),_.setEnd(c,c.length),m.removeAllRanges(),m.addRange(_),this.selection.collapse(!1),
c.parentNode.removeChild(c);return!0}return!1},_adjustNodeAndOffset:function(e,t){
for(;e.length<t&&e.nextSibling&&3===e.nextSibling.nodeType;)t-=e.length,e=e.nextSibling;
return{node:e,offset:t}},_tagNamesForCommand:function(e){return"bold"===e?["b","strong"]:"italic"===e?["i","em"]:"strikethrough"===e?["s","strike"]:"superscript"===e?["sup"]:"subscript"===e?["sub"]:"underline"===e?["u"]:[];
},_stripBreakerNodes:function(e){return this.isLoaded?(f(".ieFormatBreakerSpan",e).forEach(function(e){
for(;e.firstChild;)r.place(e.firstChild,e,"before");r.destroy(e)}),e):void 0},_stripTrailingEmptyNodes:function(e){
function t(e){return/^(p|div|br)$/i.test(e.nodeName)&&0==e.children.length&&""==m.trim(e.textContent||e.innerText||"")||3===e.nodeType&&""==m.trim(e.nodeValue);
}for(;e.lastChild&&t(e.lastChild);)r.destroy(e.lastChild);return e}});return A});