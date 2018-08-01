define(["dojo/dom","dojo/_base/lang","dojo/sniff","dojo/_base/window","../main"],function(e,t,n,o,r){
var a={getType:function(){if(o.doc.getSelection){var e,t="text";try{e=o.global.getSelection();
}catch(n){}if(e&&1==e.rangeCount){var r=e.getRangeAt(0);r.startContainer==r.endContainer&&r.endOffset-r.startOffset==1&&3!=r.startContainer.nodeType&&(t="control");
}return t}return o.doc.selection.type.toLowerCase()},getSelectedText:function(){if(o.doc.getSelection){
var e=o.global.getSelection();return e?e.toString():""}return"control"==r._editor.selection.getType()?null:o.doc.selection.createRange().text;
},getSelectedHtml:function(){if(o.doc.getSelection){var e=o.global.getSelection();
if(e&&e.rangeCount){var t,n="";for(t=0;t<e.rangeCount;t++){var a=e.getRangeAt(t).cloneContents(),l=o.doc.createElement("div");
l.appendChild(a),n+=l.innerHTML}return n}return null}return"control"==r._editor.selection.getType()?null:o.doc.selection.createRange().htmlText;
},getSelectedElement:function(){if("control"==r._editor.selection.getType()){if(o.doc.getSelection){
var e=o.global.getSelection();return e.anchorNode.childNodes[e.anchorOffset]}var t=o.doc.selection.createRange();
if(t&&t.item)return o.doc.selection.createRange().item(0)}return null},getParentElement:function(){
if("control"==r._editor.selection.getType()){var e=this.getSelectedElement();if(e)return e.parentNode;
}else{if(!o.doc.getSelection){var t=o.doc.selection.createRange();return t.collapse(!0),
t.parentElement()}var n=o.global.getSelection();if(n){for(var a=n.anchorNode;a&&1!=a.nodeType;)a=a.parentNode;
return a}}return null},hasAncestorElement:function(e){return null!=this.getAncestorElement.apply(this,arguments);
},getAncestorElement:function(e){var t=this.getSelectedElement()||this.getParentElement();
return this.getParentOfType(t,arguments)},isTag:function(e,t){if(e&&e.tagName)for(var n=e.tagName.toLowerCase(),o=0;o<t.length;o++){
var r=String(t[o]).toLowerCase();if(n==r)return r}return""},getParentOfType:function(e,t){
for(;e;){if(this.isTag(e,t).length)return e;e=e.parentNode}return null},collapse:function(e){
if(o.doc.getSelection){var t=o.global.getSelection();t.removeAllRanges?e?t.collapseToStart():t.collapseToEnd():t.collapse(e);
}else{var n=o.doc.selection.createRange();n.collapse(e),n.select()}},remove:function(){
var e=o.doc.selection;return o.doc.getSelection?(e=o.global.getSelection(),e.deleteFromDocument(),
e):("none"!=e.type.toLowerCase()&&e.clear(),e)},selectElementChildren:function(t,r){
var a,l=o.doc;if(t=e.byId(t),o.doc.getSelection){var c=o.global.getSelection();n("opera")?(a=c.rangeCount?c.getRangeAt(0):l.createRange(),
a.setStart(t,0),a.setEnd(t,3==t.nodeType?t.length:t.childNodes.length),c.addRange(a)):c.selectAllChildren(t);
}else if(a=t.ownerDocument.body.createTextRange(),a.moveToElementText(t),!r)try{a.select();
}catch(i){}},selectElement:function(t,r){var a;t=e.byId(t);var l=t.ownerDocument,c=o.global;
if(l.getSelection){var i=c.getSelection();a=l.createRange(),i.removeAllRanges&&(n("opera")&&i.getRangeAt(0)&&(a=i.getRangeAt(0)),
a.selectNode(t),i.removeAllRanges(),i.addRange(a))}else try{var g=t.tagName?t.tagName.toLowerCase():"";
a="img"===g||"table"===g?o.body(l).createControlRange():o.body(l).createRange(),a.addElement(t),
r||a.select()}catch(d){this.selectElementChildren(t,r)}},inSelection:function(e){
if(e){var t,n,r=o.doc;if(o.doc.getSelection){var a=o.global.getSelection();if(a&&a.rangeCount>0&&(n=a.getRangeAt(0)),
n&&n.compareBoundaryPoints&&r.createRange)try{if(t=r.createRange(),t.setStart(e,0),
1===n.compareBoundaryPoints(n.START_TO_END,t))return!0}catch(l){}}else{n=r.selection.createRange();
try{t=e.ownerDocument.body.createControlRange(),t&&t.addElement(e)}catch(c){try{t=e.ownerDocument.body.createTextRange(),
t.moveToElementText(e)}catch(i){}}if(n&&t&&1===n.compareEndPoints("EndToStart",t))return!0;
}}return!1}};return t.setObject("dijit._editor.selection",a),a});