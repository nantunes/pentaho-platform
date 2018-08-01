define(["dojo/_base/declare","dojo/dom-construct","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","dojo/_base/window","dojo/window","../_Plugin","../RichText","../range","../../_base/focus"],function(e,t,o,n,i,r,s,d,a,l,c,h){
return e("dijit._editor.plugins.EnterKeyHandling",a,{blockNodeForEnter:"BR",constructor:function(e){
e&&("blockNodeForEnter"in e&&(e.blockNodeForEnter=e.blockNodeForEnter.toUpperCase()),
n.mixin(this,e))},setEditor:function(e){if(this.editor!==e)if(this.editor=e,"BR"==this.blockNodeForEnter)this.editor.customUndo=!0,
e.onLoadDeferred.then(n.hitch(this,function(t){return this.own(i(e.document,"keydown",n.hitch(this,function(e){
if(e.keyCode==o.ENTER){var t=n.mixin({},e);t.shiftKey=!0,this.handleEnterKey(t)||(e.stopPropagation(),
e.preventDefault())}}))),r("ie")>=9&&r("ie")<=10&&this.own(i(e.document,"paste",n.hitch(this,function(e){
setTimeout(n.hitch(this,function(){var e=this.editor.document.selection.createRange();
e.move("character",-1),e.select(),e.move("character",1),e.select()}),0)}))),t}));else if(this.blockNodeForEnter){
var t=n.hitch(this,"handleEnterKey");e.addKeyHandler(13,0,0,t),e.addKeyHandler(13,0,1,t),
this.own(this.editor.on("KeyPressed",n.hitch(this,"onKeyPressed")))}},onKeyPressed:function(){
if(this._checkListLater){if(s.withGlobal(this.editor.window,"isCollapsed",h)){var e=this.editor.selection.getAncestorElement("LI");
if(e){r("mozilla")&&"LI"==e.parentNode.parentNode.nodeName&&(e=e.parentNode.parentNode);
var t=e.firstChild;if(t&&1==t.nodeType&&("UL"==t.nodeName||"OL"==t.nodeName)){e.insertBefore(t.ownerDocument.createTextNode(" "),t);
var o=c.create(this.editor.window);o.setStart(e.firstChild,0);var n=c.getSelection(this.editor.window,!0);
n.removeAllRanges(),n.addRange(o)}}else{l.prototype.execCommand.call(this.editor,"formatblock",this.blockNodeForEnter);
var i=this.editor.selection.getAncestorElement(this.blockNodeForEnter);if(i){if(i.innerHTML=this.bogusHtmlContent,
r("ie")<=9){var d=this.editor.document.selection.createRange();d.move("character",-1),
d.select()}}else console.error("onKeyPressed: Cannot find the new block node")}}this._checkListLater=!1;
}this._pressedEnterInBlock&&(this._pressedEnterInBlock.previousSibling&&this.removeTrailingBr(this._pressedEnterInBlock.previousSibling),
delete this._pressedEnterInBlock)},bogusHtmlContent:"&#160;",blockNodes:/^(?:P|H1|H2|H3|H4|H5|H6|LI)$/,
handleEnterKey:function(e){var o,n,i,s,a,h,f,g,b,N=this.editor.document;if(e.shiftKey){
var p=this.editor.selection.getParentElement(),m=c.getAncestor(p,this.blockNodes);
if(m){if("LI"==m.tagName)return!0;if(o=c.getSelection(this.editor.window),n=o.getRangeAt(0),
n.collapsed||(n.deleteContents(),o=c.getSelection(this.editor.window),n=o.getRangeAt(0)),
c.atBeginningOfContainer(m,n.startContainer,n.startOffset))f=N.createElement("br"),
i=c.create(this.editor.window),m.insertBefore(f,m.firstChild),i.setStartAfter(f),
o.removeAllRanges(),o.addRange(i);else{if(!c.atEndOfContainer(m,n.startContainer,n.startOffset))return g=n.startContainer,
g&&3==g.nodeType?(b=g.nodeValue,s=N.createTextNode(b.substring(0,n.startOffset)),
a=N.createTextNode(b.substring(n.startOffset)),h=N.createElement("br"),""==a.nodeValue&&r("webkit")&&(a=N.createTextNode(" ")),
t.place(s,g,"after"),t.place(h,s,"after"),t.place(a,h,"after"),t.destroy(g),i=c.create(this.editor.window),
i.setStart(a,0),o.removeAllRanges(),o.addRange(i),!1):!0;i=c.create(this.editor.window),
f=N.createElement("br"),m.appendChild(f),m.appendChild(N.createTextNode(" ")),i.setStart(m.lastChild,0),
o.removeAllRanges(),o.addRange(i)}}else if(o=c.getSelection(this.editor.window),o.rangeCount){
if(n=o.getRangeAt(0),n&&n.startContainer)if(n.collapsed||(n.deleteContents(),o=c.getSelection(this.editor.window),
n=o.getRangeAt(0)),g=n.startContainer,g&&3==g.nodeType){var k=!1,u=n.startOffset;g.length<u&&(A=this._adjustNodeAndOffset(g,u),
g=A.node,u=A.offset),b=g.nodeValue,s=N.createTextNode(b.substring(0,u)),a=N.createTextNode(b.substring(u)),
h=N.createElement("br"),a.length||(a=N.createTextNode(" "),k=!0),s.length?t.place(s,g,"after"):s=g,
t.place(h,s,"after"),t.place(a,h,"after"),t.destroy(g),i=c.create(this.editor.window),
i.setStart(a,0),i.setEnd(a,a.length),o.removeAllRanges(),o.addRange(i),k&&!r("webkit")?this.editor.selection.remove():this.editor.selection.collapse(!0);
}else{var w;n.startOffset>=0&&(w=g.childNodes[n.startOffset]);var h=N.createElement("br"),a=N.createTextNode(" ");
w?(t.place(h,w,"before"),t.place(a,h,"after")):(g.appendChild(h),g.appendChild(a)),
i=c.create(this.editor.window),i.setStart(a,0),i.setEnd(a,a.length),o.removeAllRanges(),
o.addRange(i),this.editor.selection.collapse(!0)}}else l.prototype.execCommand.call(this.editor,"inserthtml","<br>");
return!1}var C=!0;o=c.getSelection(this.editor.window),n=o.getRangeAt(0),n.collapsed||(n.deleteContents(),
o=c.getSelection(this.editor.window),n=o.getRangeAt(0));var v=c.getBlockAncestor(n.endContainer,null,this.editor.editNode),y=v.blockNode;
if(this._checkListLater=y&&("LI"==y.nodeName||"LI"==y.parentNode.nodeName))return r("mozilla")&&(this._pressedEnterInBlock=y),
/^(\s|&nbsp;|&#160;|\xA0|<span\b[^>]*\bclass=['"]Apple-style-span['"][^>]*>(\s|&nbsp;|&#160;|\xA0)<\/span>)?(<br>)?$/.test(y.innerHTML)&&(y.innerHTML="",
r("webkit")&&(i=c.create(this.editor.window),i.setStart(y,0),o.removeAllRanges(),
o.addRange(i)),this._checkListLater=!1),!0;if(!v.blockNode||v.blockNode===this.editor.editNode){
try{l.prototype.execCommand.call(this.editor,"formatblock",this.blockNodeForEnter);
}catch(E){}if(v={blockNode:this.editor.selection.getAncestorElement(this.blockNodeForEnter),
blockContainer:this.editor.editNode},v.blockNode){if(v.blockNode!=this.editor.editNode&&!(v.blockNode.textContent||v.blockNode.innerHTML).replace(/^\s+|\s+$/g,"").length)return this.removeTrailingBr(v.blockNode),
!1}else v.blockNode=this.editor.editNode;o=c.getSelection(this.editor.window),n=o.getRangeAt(0);
}var T=N.createElement(this.blockNodeForEnter);T.innerHTML=this.bogusHtmlContent,
this.removeTrailingBr(v.blockNode);var R=n.endOffset,x=n.endContainer;if(x.length<R){
var A=this._adjustNodeAndOffset(x,R);x=A.node,R=A.offset}if(c.atEndOfContainer(v.blockNode,x,R))v.blockNode===v.blockContainer?v.blockNode.appendChild(T):t.place(T,v.blockNode,"after"),
C=!1,i=c.create(this.editor.window),i.setStart(T,0),o.removeAllRanges(),o.addRange(i),
this.editor.height&&d.scrollIntoView(T);else if(c.atBeginningOfContainer(v.blockNode,n.startContainer,n.startOffset))t.place(T,v.blockNode,v.blockNode===v.blockContainer?"first":"before"),
T.nextSibling&&this.editor.height&&(i=c.create(this.editor.window),i.setStart(T.nextSibling,0),
o.removeAllRanges(),o.addRange(i),d.scrollIntoView(T.nextSibling)),C=!1;else{v.blockNode===v.blockContainer?v.blockNode.appendChild(T):t.place(T,v.blockNode,"after"),
C=!1,v.blockNode.style&&T.style&&v.blockNode.style.cssText&&(T.style.cssText=v.blockNode.style.cssText),
g=n.startContainer;var S;if(g&&3==g.nodeType){var L,I;R=n.endOffset,g.length<R&&(A=this._adjustNodeAndOffset(g,R),
g=A.node,R=A.offset),b=g.nodeValue,s=N.createTextNode(b.substring(0,R)),a=N.createTextNode(b.substring(R,b.length)),
t.place(s,g,"before"),t.place(a,g,"after"),t.destroy(g);for(var O=s.parentNode;O!==v.blockNode;){
var _=O.tagName,B=N.createElement(_);for(O.style&&B.style&&O.style.cssText&&(B.style.cssText=O.style.cssText),
"FONT"===O.tagName&&(O.color&&(B.color=O.color),O.face&&(B.face=O.face),O.size&&(B.size=O.size)),
L=a;L;)I=L.nextSibling,B.appendChild(L),L=I;t.place(B,O,"after"),s=O,a=B,O=O.parentNode;
}for(L=a,(1==L.nodeType||3==L.nodeType&&L.nodeValue)&&(T.innerHTML=""),S=L;L;)I=L.nextSibling,
T.appendChild(L),L=I}i=c.create(this.editor.window);var H,j=S;if("BR"!==this.blockNodeForEnter){
for(;j;)H=j,I=j.firstChild,j=I;H&&H.parentNode?(T=H.parentNode,i.setStart(T,0),o.removeAllRanges(),
o.addRange(i),this.editor.height&&d.scrollIntoView(T),r("mozilla")&&(this._pressedEnterInBlock=v.blockNode)):C=!0;
}else i.setStart(T,0),o.removeAllRanges(),o.addRange(i),this.editor.height&&d.scrollIntoView(T),
r("mozilla")&&(this._pressedEnterInBlock=v.blockNode)}return C},_adjustNodeAndOffset:function(e,t){
for(;e.length<t&&e.nextSibling&&3==e.nextSibling.nodeType;)t-=e.length,e=e.nextSibling;
return{node:e,offset:t}},removeTrailingBr:function(e){var o=/P|DIV|LI/i.test(e.tagName)?e:this.editor.selection.getParentOfType(e,["P","DIV","LI"]);
o&&(o.lastChild&&(o.childNodes.length>1&&3==o.lastChild.nodeType&&/^[\s\xAD]*$/.test(o.lastChild.nodeValue)||"BR"==o.lastChild.tagName)&&t.destroy(o.lastChild),
o.childNodes.length||(o.innerHTML=this.bogusHtmlContent))}})});