define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang"],function(e,t,n){
var o={getIndex:function(e,t){for(var n,o,i=[],r=[],s=e;e!=t;){var a=0;for(n=e.parentNode;o=n.childNodes[a++];)if(o===e){
--a;break}i.unshift(a),r.unshift(a-n.childNodes.length),e=n}if(i.length>0&&3==s.nodeType){
for(o=s.previousSibling;o&&3==o.nodeType;)i[i.length-1]--,o=o.previousSibling;for(o=s.nextSibling;o&&3==o.nodeType;)r[r.length-1]++,
o=o.nextSibling}return{o:i,r:r}},getNode:function(t,o){if(!n.isArray(t)||0==t.length)return o;
var i=o;return e.every(t,function(e){return e>=0&&e<i.childNodes.length?(i=i.childNodes[e],
!0):(i=null,!1)}),i},getCommonAncestor:function(e,t,n){n=n||e.ownerDocument.body;for(var o=function(e){
for(var t=[];e&&(t.unshift(e),e!==n);)e=e.parentNode;return t},i=o(e),r=o(t),s=Math.min(i.length,r.length),a=i[0],d=1;s>d&&i[d]===r[d];d++)a=i[d];
return a},getAncestor:function(e,t,n){for(n=n||e.ownerDocument.body;e&&e!==n;){var o=e.nodeName.toUpperCase();
if(t.test(o))return e;e=e.parentNode}return null},BlockTagNames:/^(?:P|DIV|H1|H2|H3|H4|H5|H6|ADDRESS|PRE|OL|UL|LI|DT|DE)$/,
getBlockAncestor:function(e,t,n){n=n||e.ownerDocument.body,t=t||o.BlockTagNames;for(var i,r=null;e&&e!==n;){
var s=e.nodeName.toUpperCase();!r&&t.test(s)&&(r=e),!i&&/^(?:BODY|TD|TH|CAPTION)$/.test(s)&&(i=e),
e=e.parentNode}return{blockNode:r,blockContainer:i||e.ownerDocument.body}},atBeginningOfContainer:function(e,t,n){
var o=!1,i=0==n;if(i||3!=t.nodeType||/^[\s\xA0]+$/.test(t.nodeValue.substr(0,n))&&(i=!0),
i){var r=t;for(o=!0;r&&r!==e;){if(r.previousSibling){o=!1;break}r=r.parentNode}}return o;
},atEndOfContainer:function(e,t,n){var o=!1,i=n==(t.length||t.childNodes.length);if(i||3!=t.nodeType||/^[\s\xA0]+$/.test(t.nodeValue.substr(n))&&(i=!0),
i){var r=t;for(o=!0;r&&r!==e;){if(r.nextSibling){o=!1;break}r=r.parentNode}}return o;
},adjacentNoneTextNode:function(e,t){for(var n=e,o=0-e.length||0,i=t?"nextSibling":"previousSibling";n&&3==n.nodeType;)o+=n.length,
n=n[i];return[n,o]},create:function(e){return e=e||window,e.getSelection?e.document.createRange():new r;
},getSelection:function(e,t){if(e.getSelection)return e.getSelection();var n=new i.selection(e);
return t||n._getCurrentSelection(),n}};if(!window.getSelection)var i=o.ie={cachedSelection:{},
selection:function(e){this._ranges=[],this.addRange=function(e,t){this._ranges.push(e),
t||e._select(),this.rangeCount=this._ranges.length},this.removeAllRanges=function(){
this._ranges=[],this.rangeCount=0};var t=function(){var t=e.document.selection.createRange(),n=e.document.selection.type.toUpperCase();
return new r("CONTROL"==n?i.decomposeControlRange(t):i.decomposeTextRange(t))};this.getRangeAt=function(e){
return this._ranges[e]},this._getCurrentSelection=function(){this.removeAllRanges();
var e=t();e?(this.addRange(e,!0),this.isCollapsed=e.collapsed):this.isCollapsed=!0;
}},decomposeControlRange:function(e){var t=e.item(0),n=e.item(e.length-1),i=t.parentNode,r=n.parentNode,s=o.getIndex(t,i).o[0],a=o.getIndex(n,r).o[0]+1;
return[i,s,r,a]},getEndPoint:function(t,n){var i=t.duplicate();i.collapse(!n);var r,s,a,d="EndTo"+(n?"End":"Start"),l=i.parentElement();
if(l.childNodes.length>0?e.every(l.childNodes,function(e,n){var c;if(3!=e.nodeType){
if(i.moveToElementText(e),i.compareEndPoints(d,t)>0){if(!a||3!=a.nodeType)return r=l,
s=n,!1;r=a,c=!0}else if(n==l.childNodes.length-1)return r=l,s=l.childNodes.length,
!1}else n==l.childNodes.length-1&&(r=e,c=!0);if(c&&r){var h=o.adjacentNoneTextNode(r)[0];
r=h?h.nextSibling:l.firstChild;var f=o.adjacentNoneTextNode(r);h=f[0];var u=f[1];return h?(i.moveToElementText(h),
i.collapse(!1)):i.moveToElementText(l),i.setEndPoint(d,t),s=i.text.length-u,!1}return a=e,
!0}):(r=l,s=0),!n&&1==r.nodeType&&s==r.childNodes.length){var c=r.nextSibling;c&&3==c.nodeType&&(r=c,
s=0)}return[r,s]},setEndPoint:function(e,t,n){var i,r,s=e.duplicate();if(3!=t.nodeType)if(n>0){
if(i=t.childNodes[n-1])if(3==i.nodeType)t=i,n=i.length;else if(i.nextSibling&&3==i.nextSibling.nodeType)t=i.nextSibling,
n=0;else{s.moveToElementText(i.nextSibling?i:t);var a=i.parentNode,d=a.insertBefore(i.ownerDocument.createTextNode(" "),i.nextSibling);
s.collapse(!1),a.removeChild(d)}}else s.moveToElementText(t),s.collapse(!0);if(3==t.nodeType){
var l=o.adjacentNoneTextNode(t),c=l[0];r=l[1],c?(s.moveToElementText(c),s.collapse(!1),
"inherit"!=c.contentEditable&&r++):(s.moveToElementText(t.parentNode),s.collapse(!0),
s.move("character",1),s.move("character",-1)),n+=r,n>0&&s.move("character",n)!=n&&console.error("Error when moving!");
}return s},decomposeTextRange:function(e){var t=i.getEndPoint(e),n=t[0],o=t[1],r=t[0],s=t[1];
return e.htmlText.length&&(e.htmlText==e.text?s=o+e.text.length:(t=i.getEndPoint(e,!0),
r=t[0],s=t[1])),[n,o,r,s]},setRange:function(e,t,n,o,r,s){var a=i.setEndPoint(e,t,n);
if(e.setEndPoint("StartToStart",a),!s)var d=i.setEndPoint(e,o,r);return e.setEndPoint("EndToEnd",d||a),
e}},r=o.W3CRange=t(null,{constructor:function(){arguments.length>0?(this.setStart(arguments[0][0],arguments[0][1]),
this.setEnd(arguments[0][2],arguments[0][3])):(this.commonAncestorContainer=null,
this.startContainer=null,this.startOffset=0,this.endContainer=null,this.endOffset=0,
this.collapsed=!0)},_updateInternal:function(){this.startContainer!==this.endContainer?this.commonAncestorContainer=o.getCommonAncestor(this.startContainer,this.endContainer):this.commonAncestorContainer=this.startContainer,
this.collapsed=this.startContainer===this.endContainer&&this.startOffset==this.endOffset;
},setStart:function(e,t){t=parseInt(t),(this.startContainer!==e||this.startOffset!=t)&&(delete this._cachedBookmark,
this.startContainer=e,this.startOffset=t,this.endContainer?this._updateInternal():this.setEnd(e,t));
},setEnd:function(e,t){t=parseInt(t),(this.endContainer!==e||this.endOffset!=t)&&(delete this._cachedBookmark,
this.endContainer=e,this.endOffset=t,this.startContainer?this._updateInternal():this.setStart(e,t));
},setStartAfter:function(e,t){this._setPoint("setStart",e,t,1)},setStartBefore:function(e,t){
this._setPoint("setStart",e,t,0)},setEndAfter:function(e,t){this._setPoint("setEnd",e,t,1);
},setEndBefore:function(e,t){this._setPoint("setEnd",e,t,0)},_setPoint:function(e,t,n,i){
var r=o.getIndex(t,t.parentNode).o;this[e](t.parentNode,r.pop()+i)},_getIERange:function(){
var e=(this._body||this.endContainer.ownerDocument.body).createTextRange();return i.setRange(e,this.startContainer,this.startOffset,this.endContainer,this.endOffset,this.collapsed),
e},getBookmark:function(){return this._getIERange(),this._cachedBookmark},_select:function(){
var e=this._getIERange();e.select()},deleteContents:function(){var e=this.startContainer,t=this._getIERange();
3!==e.nodeType||this.startOffset||this.setStartBefore(e),t.pasteHTML(""),this.endContainer=this.startContainer,
this.endOffset=this.startOffset,this.collapsed=!0},cloneRange:function(){var e=new r([this.startContainer,this.startOffset,this.endContainer,this.endOffset]);
return e._body=this._body,e},detach:function(){this._body=null,this.commonAncestorContainer=null,
this.startContainer=null,this.startOffset=0,this.endContainer=null,this.endOffset=0,
this.collapsed=!0}});return n.setObject("dijit.range",o),o});