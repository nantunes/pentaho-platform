define(["dojo/_base/array","dojo/dom","dojo/_base/lang","dojo/sniff","dojo/_base/window","dijit/focus"],function(e,t,n,r,o,a){
var l=function(l){var i=l.document;this.getType=function(){if(i.getSelection){var e,t="text";
try{e=l.getSelection()}catch(n){}if(e&&1==e.rangeCount){var r=e.getRangeAt(0);r.startContainer==r.endContainer&&r.endOffset-r.startOffset==1&&3!=r.startContainer.nodeType&&(t="control");
}return t}return i.selection.type.toLowerCase()},this.getSelectedText=function(){
if(i.getSelection){var e=l.getSelection();return e?e.toString():""}return"control"==this.getType()?null:i.selection.createRange().text;
},this.getSelectedHtml=function(){if(i.getSelection){var e=l.getSelection();if(e&&e.rangeCount){
var t,n="";for(t=0;t<e.rangeCount;t++){var r=e.getRangeAt(t).cloneContents(),o=i.createElement("div");
o.appendChild(r),n+=o.innerHTML}return n}return null}return"control"==this.getType()?null:i.selection.createRange().htmlText;
},this.getSelectedElement=function(){if("control"==this.getType()){if(i.getSelection){
var e=l.getSelection();return e.anchorNode.childNodes[e.anchorOffset]}var t=i.selection.createRange();
if(t&&t.item)return i.selection.createRange().item(0)}return null},this.getParentElement=function(){
if("control"==this.getType()){var e=this.getSelectedElement();if(e)return e.parentNode;
}else{if(!i.getSelection){var t=i.selection.createRange();return t.collapse(!0),t.parentElement();
}var n=i.getSelection();if(n){for(var r=n.anchorNode;r&&1!=r.nodeType;)r=r.parentNode;
return r}}return null},this.hasAncestorElement=function(e){return null!=this.getAncestorElement.apply(this,arguments);
},this.getAncestorElement=function(e){var t=this.getSelectedElement()||this.getParentElement();
return this.getParentOfType(t,arguments)},this.isTag=function(e,t){if(e&&e.tagName)for(var n=e.tagName.toLowerCase(),r=0;r<t.length;r++){
var o=String(t[r]).toLowerCase();if(n==o)return o}return""},this.getParentOfType=function(e,t){
for(;e;){if(this.isTag(e,t).length)return e;e=e.parentNode}return null},this.collapse=function(e){
if(i.getSelection){var t=l.getSelection();t.removeAllRanges?e?t.collapseToStart():t.collapseToEnd():t.collapse(e);
}else{var n=i.selection.createRange();n.collapse(e),n.select()}},this.remove=function(){
var e=i.selection;return i.getSelection?(e=l.getSelection(),e.deleteFromDocument(),
e):("none"!=e.type.toLowerCase()&&e.clear(),e)},this.selectElementChildren=function(e,n){
var o;if(e=t.byId(e),i.getSelection){var a=l.getSelection();r("opera")?(o=a.rangeCount?a.getRangeAt(0):i.createRange(),
o.setStart(e,0),o.setEnd(e,3==e.nodeType?e.length:e.childNodes.length),a.addRange(o)):a.selectAllChildren(e);
}else if(o=e.ownerDocument.body.createTextRange(),o.moveToElementText(e),!n)try{o.select();
}catch(s){}},this.selectElement=function(e,n){var a;if(e=t.byId(e),i.getSelection){
var l=i.getSelection();a=i.createRange(),l.removeAllRanges&&(r("opera")&&l.getRangeAt(0)&&(a=l.getRangeAt(0)),
a.selectNode(e),l.removeAllRanges(),l.addRange(a))}else try{var s=e.tagName?e.tagName.toLowerCase():"";
a="img"===s||"table"===s?o.body(i).createControlRange():o.body(i).createRange(),a.addElement(e),
n||a.select()}catch(c){this.selectElementChildren(e,n)}},this.inSelection=function(e){
if(e){var t,n;if(i.getSelection){var r=l.getSelection();if(r&&r.rangeCount>0&&(n=r.getRangeAt(0)),
n&&n.compareBoundaryPoints&&i.createRange)try{if(t=i.createRange(),t.setStart(e,0),
1===n.compareBoundaryPoints(n.START_TO_END,t))return!0}catch(o){}}else{n=i.selection.createRange();
try{t=e.ownerDocument.body.createTextRange(),t.moveToElementText(e)}catch(a){}if(n&&t&&1===n.compareEndPoints("EndToStart",t))return!0;
}}return!1},this.getBookmark=function(){var e,t,n,r=i.selection,o=a.curNode;if(i.getSelection){
if(r=l.getSelection())if(r.isCollapsed){if(n=o?o.tagName:"",n&&(n=n.toLowerCase(),
"textarea"==n||"input"==n&&(!o.type||"text"==o.type.toLowerCase())))return r={start:o.selectionStart,
end:o.selectionEnd,node:o,pRange:!0},{isCollapsed:r.end<=r.start,mark:r};e={isCollapsed:!0
},r.rangeCount&&(e.mark=r.getRangeAt(0).cloneRange())}else t=r.getRangeAt(0),e={isCollapsed:!1,
mark:t.cloneRange()}}else if(r){if(n=o?o.tagName:"",n=n.toLowerCase(),o&&n&&("button"==n||"textarea"==n||"input"==n))return r.type&&"none"==r.type.toLowerCase()?{
isCollapsed:!0,mark:null}:(t=r.createRange(),{isCollapsed:t.text&&t.text.length?!1:!0,
mark:{range:t,pRange:!0}});e={};try{t=r.createRange(),e.isCollapsed=!("Text"==r.type?t.htmlText.length:t.length);
}catch(s){return e.isCollapsed=!0,e}if("CONTROL"==r.type.toUpperCase())if(t.length){
e.mark=[];for(var c=0,g=t.length;g>c;)e.mark.push(t.item(c++))}else e.isCollapsed=!0,
e.mark=null;else e.mark=t.getBookmark()}else console.warn("No idea how to store the current selection for this browser!");
return e},this.moveToBookmark=function(t){var r=t.mark;if(r)if(i.getSelection){var o=l.getSelection();
if(o&&o.removeAllRanges)if(r.pRange){var a=r.node;a.selectionStart=r.start,a.selectionEnd=r.end;
}else o.removeAllRanges(),o.addRange(r);else console.warn("No idea how to restore selection for this browser!");
}else if(i.selection&&r){var s;r.pRange?s=r.range:n.isArray(r)?(s=i.body.createControlRange(),
e.forEach(r,function(e){s.addElement(e)})):(s=i.body.createTextRange(),s.moveToBookmark(r)),
s.select()}},this.isCollapsed=function(){return this.getBookmark().isCollapsed}},i=new l(window);
return i.SelectionManager=l,i});