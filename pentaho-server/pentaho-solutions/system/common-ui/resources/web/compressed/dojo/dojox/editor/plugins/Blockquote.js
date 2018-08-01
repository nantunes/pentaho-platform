define(["dojo","dijit","dojox","dijit/_editor/_Plugin","dijit/form/ToggleButton","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/i18n!dojox/editor/plugins/nls/Blockquote"],function(e,t,i,n){
var o=e.declare("dojox.editor.plugins.Blockquote",n,{iconClassPrefix:"dijitAdditionalEditorIcon",
_initButton:function(){this._nlsResources=e.i18n.getLocalization("dojox.editor.plugins","Blockquote"),
this.button=new t.form.ToggleButton({label:this._nlsResources.blockquote,showLabel:!1,
iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"Blockquote",tabIndex:"-1",
onClick:e.hitch(this,"_toggleQuote")})},setEditor:function(e){this.editor=e,this._initButton(),
this.connect(this.editor,"onNormalizedDisplayChanged","updateState"),e.customUndo=!0;
},_toggleQuote:function(i){try{var n=this.editor;n.focus();var o,a,r,s,l=this.button.get("checked"),d=t.range.getSelection(n.window);
if(d&&d.rangeCount>0&&(o=d.getRangeAt(0)),o){if(n.beginEditing(),l){var c,h;if(o.startContainer===o.endContainer){
if(this._isRootInline(o.startContainer)){for(r=o.startContainer;r&&r.parentNode!==n.editNode;)r=r.parentNode;
for(;r&&r.previousSibling&&(this._isTextElement(r)||1===r.nodeType&&this._isInlineFormat(this._getTagName(r)));)r=r.previousSibling;
if(r&&1===r.nodeType&&!this._isInlineFormat(this._getTagName(r))&&(r=r.nextSibling),
r)for(c=n.document.createElement("blockquote"),e.place(c,r,"after"),c.appendChild(r),
s=c.nextSibling;s&&(this._isTextElement(s)||1===s.nodeType&&this._isInlineFormat(this._getTagName(s)));)c.appendChild(s),
s=c.nextSibling}else{for(var u=o.startContainer;(this._isTextElement(u)||this._isInlineFormat(this._getTagName(u))||"li"===this._getTagName(u))&&u!==n.editNode&&u!==n.document.body;)u=u.parentNode;
u!==n.editNode&&u!==u.ownerDocument.documentElement&&(c=n.document.createElement("blockquote"),
e.place(c,u,"after"),c.appendChild(u))}c&&(n._sCall("selectElementChildren",[c]),
n._sCall("collapse",[!0]))}else{var g;for(r=o.startContainer,s=o.endContainer;r&&this._isTextElement(r)&&r.parentNode!==n.editNode;)r=r.parentNode;
for(g=r;g.nextSibling&&n._sCall("inSelection",[g]);)g=g.nextSibling;if(s=g,s===n.editNode||s===n.document.body){
if(c=n.document.createElement("blockquote"),e.place(c,r,"after"),h=this._getTagName(r),
this._isTextElement(r)||this._isInlineFormat(h))for(var p=r;p&&(this._isTextElement(p)||1===p.nodeType&&this._isInlineFormat(this._getTagName(p)));)c.appendChild(p),
p=c.nextSibling;else c.appendChild(r);return}for(s=s.nextSibling,g=r;g&&g!==s;){if(1===g.nodeType){
if(h=this._getTagName(g),"br"!==h){if(!window.getSelection&&"p"===h&&this._isEmpty(g)){
g=g.nextSibling;continue}this._isInlineFormat(h)?(c?c.appendChild(g):(c=n.document.createElement("blockquote"),
e.place(c,g,"after"),c.appendChild(g)),g=c):(c&&this._isEmpty(c)&&c.parentNode.removeChild(c),
c=n.document.createElement("blockquote"),e.place(c,g,"after"),c.appendChild(g),g=c);
}}else this._isTextElement(g)&&(c?c.appendChild(g):(c=n.document.createElement("blockquote"),
e.place(c,g,"after"),c.appendChild(g)),g=c);g=g.nextSibling}c&&(this._isEmpty(c)?c.parentNode.removeChild(c):(n._sCall("selectElementChildren",[c]),
n._sCall("collapse",[!0])),c=null)}}else{var m=!1;if(o.startContainer===o.endContainer){
for(a=o.endContainer;a&&a!==n.editNode&&a!==n.document.body;){var f=a.tagName?a.tagName.toLowerCase():"";
if("blockquote"===f){m=!0;break}a=a.parentNode}if(m){for(var _;a.firstChild;)_=a.firstChild,
e.place(_,a,"before");a.parentNode.removeChild(a),_&&(n._sCall("selectElementChildren",[_]),
n._sCall("collapse",[!0]))}}else{for(r=o.startContainer,s=o.endContainer;r&&this._isTextElement(r)&&r.parentNode!==n.editNode;)r=r.parentNode;
for(var N=[],b=r;b&&b.nextSibling&&n._sCall("inSelection",[b]);)b.parentNode&&"blockquote"===this._getTagName(b.parentNode)&&(b=b.parentNode),
N.push(b),b=b.nextSibling;for(var C=this._findBlockQuotes(N);C.length;){var T=C.pop();
if(T.parentNode){for(;T.firstChild;)e.place(T.firstChild,T,"before");T.parentNode.removeChild(T);
}}}}n.endEditing()}n.onNormalizedDisplayChanged()}catch(v){}},updateState:function(){
var e=this.editor,i=this.get("disabled");if(e&&e.isLoaded&&this.button){if(this.button.set("disabled",i),
i)return;var n,o=!1,a=t.range.getSelection(e.window);if(a&&a.rangeCount>0){var r=a.getRangeAt(0);
r&&(n=r.endContainer)}for(;n&&n!==e.editNode&&n!==e.document;){var s=n.tagName?n.tagName.toLowerCase():"";
if("blockquote"===s){o=!0;break}n=n.parentNode}this.button.set("checked",o)}},_findBlockQuotes:function(e){
var t=[];if(e){var i;for(i=0;i<e.length;i++){var n=e[i];1===n.nodeType&&("blockquote"===this._getTagName(n)&&t.push(n),
n.childNodes&&n.childNodes.length>0&&(t=t.concat(this._findBlockQuotes(n.childNodes))));
}}return t},_getTagName:function(e){var t="";return e&&1===e.nodeType&&(t=e.tagName?e.tagName.toLowerCase():""),
t},_isRootInline:function(e){var t=this.editor;if(this._isTextElement(e)&&e.parentNode===t.editNode)return!0;
if(1===e.nodeType&&this._isInlineFormat(e)&&e.parentNode===t.editNode)return!0;if(this._isTextElement(e)&&this._isInlineFormat(this._getTagName(e.parentNode))){
for(e=e.parentNode;e&&e!==t.editNode&&this._isInlineFormat(this._getTagName(e));)e=e.parentNode;
if(e===t.editNode)return!0}return!1},_isTextElement:function(e){return e&&3===e.nodeType||4===e.nodeType?!0:!1;
},_isEmpty:function(t){if(t.childNodes){var i,n=!0;for(i=0;i<t.childNodes.length;i++){
var o=t.childNodes[i];if(1===o.nodeType){if("p"===this._getTagName(o)&&!e.trim(o.innerHTML))continue;
n=!1;break}if(!this._isTextElement(o)){n=!1;break}var a=e.trim(o.nodeValue);if(a&&"&nbsp;"!==a&&" "!==a){
n=!1;break}}return n}return!0},_isInlineFormat:function(e){switch(e){case"a":case"b":
case"strong":case"s":case"strike":case"i":case"u":case"em":case"sup":case"sub":case"span":
case"font":case"big":case"cite":case"q":case"img":case"small":return!0;default:return!1;
}}});return e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){
var t=e.args.name.toLowerCase();"blockquote"===t&&(e.plugin=new o({}))}}),o});