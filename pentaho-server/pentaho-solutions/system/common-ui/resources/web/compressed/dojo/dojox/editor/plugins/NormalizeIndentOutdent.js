define(["dojo","dijit","dojox","dijit/_editor/_Plugin","dojo/_base/declare"],function(e,t,n,i){
var a=e.declare("dojox.editor.plugins.NormalizeIndentOutdent",i,{indentBy:40,indentUnits:"px",
setEditor:function(t){this.editor=t,t._indentImpl=e.hitch(this,this._indentImpl),
t._outdentImpl=e.hitch(this,this._outdentImpl),t._indentoutdent_queryCommandEnabled||(t._indentoutdent_queryCommandEnabled=t.queryCommandEnabled),
t.queryCommandEnabled=e.hitch(this,this._queryCommandEnabled),t.customUndo=!0},_queryCommandEnabled:function(e){
var n,i,a,r,o,d,s=e.toLowerCase(),l="marginLeft";if(this._isLtr()||(l="marginRight"),
"indent"===s){if(n=this.editor,i=t.range.getSelection(n.window),i&&i.rangeCount>0){
for(a=i.getRangeAt(0),r=a.startContainer;r&&r!==n.document&&r!==n.editNode;){if(o=this._getTagName(r),
"li"===o){for(d=r.previousSibling;d&&1!==d.nodeType;)d=d.previousSibling;return d&&"li"===this._getTagName(d)?!0:!1;
}if(this._isIndentableElement(o))return!0;r=r.parentNode}if(this._isRootInline(a.startContainer))return!0;
}}else{if("outdent"!==s)return this.editor._indentoutdent_queryCommandEnabled(e);if(n=this.editor,
i=t.range.getSelection(n.window),i&&i.rangeCount>0){for(a=i.getRangeAt(0),r=a.startContainer;r&&r!==n.document&&r!==n.editNode;){
if(o=this._getTagName(r),"li"===o)return this.editor._indentoutdent_queryCommandEnabled(e);
if(this._isIndentableElement(o)){var m=r.style?r.style[l]:"";return m&&(m=this._convertIndent(m),
m/this.indentBy>=1)?!0:!1}r=r.parentNode}if(this._isRootInline(a.startContainer))return!1;
}}return!1},_indentImpl:function(n){var i=this.editor,a=t.range.getSelection(i.window);
if(a&&a.rangeCount>0){var r,o,d,s,l=a.getRangeAt(0),m=l.startContainer;if(l.startContainer===l.endContainer)if(this._isRootInline(l.startContainer)){
for(o=l.startContainer;o&&o.parentNode!==i.editNode;)o=o.parentNode;for(;o&&o.previousSibling&&(this._isTextElement(o)||1===o.nodeType&&this._isInlineFormat(this._getTagName(o)));)o=o.previousSibling;
if(o&&1===o.nodeType&&!this._isInlineFormat(this._getTagName(o))&&(o=o.nextSibling),
o){for(s=i.document.createElement("div"),e.place(s,o,"after"),s.appendChild(o),d=s.nextSibling;d&&(this._isTextElement(d)||1===d.nodeType&&this._isInlineFormat(this._getTagName(d)));)s.appendChild(d),
d=s.nextSibling;this._indentElement(s),i._sCall("selectElementChildren",[s]),i._sCall("collapse",[!0]);
}}else for(;m&&m!==i.document&&m!==i.editNode;){if(r=this._getTagName(m),"li"===r)return void this._indentList(m);
if(this._isIndentableElement(r))return void this._indentElement(m);m=m.parentNode;
}else{var p;for(o=l.startContainer,d=l.endContainer;o&&this._isTextElement(o)&&o.parentNode!==i.editNode;)o=o.parentNode;
for(;d&&this._isTextElement(d)&&d.parentNode!==i.editNode;)d=d.parentNode;if(d===i.editNode||d===i.document.body){
for(p=o;p.nextSibling&&i._sCall("inSelection",[p]);)p=p.nextSibling;if(d=p,d===i.editNode||d===i.document.body){
if(r=this._getTagName(o),"li"===r)this._indentList(o);else if(this._isIndentableElement(r))this._indentElement(o);else if(this._isTextElement(o)||this._isInlineFormat(r)){
s=i.document.createElement("div"),e.place(s,o,"after");for(var h=o;h&&(this._isTextElement(h)||1===h.nodeType&&this._isInlineFormat(this._getTagName(h)));)s.appendChild(h),
h=s.nextSibling;this._indentElement(s)}return}}for(d=d.nextSibling,p=o;p&&p!==d;){
if(1===p.nodeType){if(r=this._getTagName(p),e.isIE&&"p"===r&&this._isEmpty(p)){p=p.nextSibling;
continue}"li"===r?(s&&(this._isEmpty(s)?s.parentNode.removeChild(s):this._indentElement(s),
s=null),this._indentList(p)):!this._isInlineFormat(r)&&this._isIndentableElement(r)?(s&&(this._isEmpty(s)?s.parentNode.removeChild(s):this._indentElement(s),
s=null),p=this._indentElement(p)):this._isInlineFormat(r)&&(s?(s.appendChild(p),p=s):(s=i.document.createElement("div"),
e.place(s,p,"after"),s.appendChild(p),p=s))}else this._isTextElement(p)&&(s?(s.appendChild(p),
p=s):(s=i.document.createElement("div"),e.place(s,p,"after"),s.appendChild(p),p=s));
p=p.nextSibling}s&&(this._isEmpty(s)?s.parentNode.removeChild(s):this._indentElement(s),
s=null)}}},_indentElement:function(t){var n="marginLeft";this._isLtr()||(n="marginRight");
var i=this._getTagName(t);if("ul"===i||"ol"===i){var a=this.editor.document.createElement("div");
e.place(a,t,"after"),a.appendChild(t),t=a}var r=t.style?t.style[n]:"";return r?(r=this._convertIndent(r),
r=parseInt(r,10)+this.indentBy+this.indentUnits):r=this.indentBy+this.indentUnits,
e.style(t,n,r),t},_outdentElement:function(t){var n="marginLeft";this._isLtr()||(n="marginRight");
var i=t.style?t.style[n]:"";i&&(i=this._convertIndent(i),i=i-this.indentBy>0?parseInt(i,10)-this.indentBy+this.indentUnits:"",
e.style(t,n,i))},_outdentImpl:function(e){var n=this.editor,i=t.range.getSelection(n.window);
if(i&&i.rangeCount>0){var a,r=i.getRangeAt(0),o=r.startContainer;if(r.startContainer===r.endContainer){
for(;o&&o!==n.document&&o!==n.editNode;){if(a=this._getTagName(o),"li"===a)return this._outdentList(o);
if(this._isIndentableElement(a))return this._outdentElement(o);o=o.parentNode}n.document.execCommand("outdent",!1,e);
}else{for(var d=r.startContainer,s=r.endContainer;d&&3===d.nodeType;)d=d.parentNode;
for(;s&&3===s.nodeType;)s=s.parentNode;s=s.nextSibling;for(var l=d;l&&l!==s;)1===l.nodeType&&(a=this._getTagName(l),
"li"===a?this._outdentList(l):this._isIndentableElement(a)&&this._outdentElement(l)),
l=l.nextSibling}}return null},_indentList:function(t){for(var n,i,a=this.editor,r=t.parentNode,o=t.previousSibling;o&&1!==o.nodeType;)o=o.previousSibling;
var d=null,s=this._getTagName(r);if("ol"===s?d="ol":"ul"===s&&(d="ul"),d&&o&&"li"==o.tagName.toLowerCase()){
var l;if(o.childNodes){var m;for(m=0;m<o.childNodes.length;m++){var p=o.childNodes[m];
if(3===p.nodeType){if(e.trim(p.nodeValue)&&l)break}else{if(1!==p.nodeType||l)break;
d===p.tagName.toLowerCase()&&(l=p)}}}l?l.appendChild(t):(n=a.document.createElement(d),
e.style(n,{paddingTop:"0px",paddingBottom:"0px"}),i=a.document.createElement("li"),
e.style(i,{listStyleImage:"none",listStyleType:"none"}),o.appendChild(n),n.appendChild(t)),
a._sCall("selectElementChildren",[t]),a._sCall("collapse",[!0])}},_outdentList:function(t){
var n,i=this.editor,a=t.parentNode,r=null,o=a.tagName?a.tagName.toLowerCase():"";"ol"===o?r="ol":"ul"===o&&(r="ul");
var d=a.parentNode,s=this._getTagName(d);if("li"===s||"ol"===s||"ul"===s){if("ol"===s||"ul"===s){
for(var l=a.previousSibling;l&&(1!==l.nodeType||1===l.nodeType&&"li"!==this._getTagName(l));)l=l.previousSibling;
if(l)l.appendChild(a),d=l;else{n=t;for(var m=t;n.previousSibling;)n=n.previousSibling,
1===n.nodeType&&"li"===this._getTagName(n)&&(m=n);m!==t?(e.place(m,a,"before"),m.appendChild(a),
d=m):(n=i.document.createElement("li"),e.place(n,a,"before"),n.appendChild(a),d=n),
e.style(a,{paddingTop:"0px",paddingBottom:"0px"})}}for(var p=t.previousSibling;p&&1!==p.nodeType;)p=p.previousSibling;
for(var h=t.nextSibling;h&&1!==h.nodeType;)h=h.nextSibling;if(p)if(h){var u=i.document.createElement(r);
for(e.style(u,{paddingTop:"0px",paddingBottom:"0px"}),t.appendChild(u);t.nextSibling;)u.appendChild(t.nextSibling);
e.place(t,d,"after")}else e.place(t,d,"after");else e.place(t,d,"after"),t.appendChild(a);
a&&this._isEmpty(a)&&a.parentNode.removeChild(a),d&&this._isEmpty(d)&&d.parentNode.removeChild(d),
i._sCall("selectElementChildren",[t]),i._sCall("collapse",[!0])}else i.document.execCommand("outdent",!1,null);
},_isEmpty:function(t){if(t.childNodes){var n,i=!0;for(n=0;n<t.childNodes.length;n++){
var a=t.childNodes[n];if(1===a.nodeType){if("p"===this._getTagName(a)&&!e.trim(a.innerHTML))continue;
i=!1;break}if(!this._isTextElement(a)){i=!1;break}var r=e.trim(a.nodeValue);if(r&&"&nbsp;"!==r&&" "!==r){
i=!1;break}}return i}return!0},_isIndentableElement:function(e){switch(e){case"p":
case"div":case"h1":case"h2":case"h3":case"center":case"table":case"ul":case"ol":return!0;
default:return!1}},_convertIndent:function(e){var t=12;e+="",e=e.toLowerCase();var n=e.indexOf("px")>0?"px":e.indexOf("em")>0?"em":"px";
return e=e.replace(/(px;?|em;?)/gi,""),"px"===n?"em"===this.indentUnits&&(e=Math.ceil(e/t)):"px"===this.indentUnits&&(e*=t),
e},_isLtr:function(){var t=this.editor.document.body,n=e.getComputedStyle(t);return n?"ltr"==n.direction:!0;
},_isInlineFormat:function(e){switch(e){case"a":case"b":case"strong":case"s":case"strike":
case"i":case"u":case"em":case"sup":case"sub":case"span":case"font":case"big":case"cite":
case"q":case"img":case"small":return!0;default:return!1}},_getTagName:function(e){
var t="";return e&&1===e.nodeType&&(t=e.tagName?e.tagName.toLowerCase():""),t},_isRootInline:function(e){
var t=this.editor;if(this._isTextElement(e)&&e.parentNode===t.editNode)return!0;if(1===e.nodeType&&this._isInlineFormat(e)&&e.parentNode===t.editNode)return!0;
if(this._isTextElement(e)&&this._isInlineFormat(this._getTagName(e.parentNode))){
for(e=e.parentNode;e&&e!==t.editNode&&this._isInlineFormat(this._getTagName(e));)e=e.parentNode;
if(e===t.editNode)return!0}return!1},_isTextElement:function(e){return e&&3===e.nodeType||4===e.nodeType?!0:!1;
}});return e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){
var t=e.args.name.toLowerCase();"normalizeindentoutdent"===t&&(e.plugin=new a({indentBy:"indentBy"in e.args&&e.args.indentBy>0?e.args.indentBy:40,
indentUnits:"indentUnits"in e.args&&"em"==e.args.indentUnits.toLowerCase()?"em":"px"
}))}}),a});