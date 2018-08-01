define(["dojo","dijit","dojox","dijit/_editor/_Plugin","dijit/form/Button","dojo/_base/declare","dojo/string"],function(e,t,n,i){
var o=e.declare("dojox.editor.plugins.AutoUrlLink",[i],{_template:"<a _djrealurl='${url}' href='${url}'>${url}</a>",
setEditor:function(n){this.editor=n,e.isIE||(e.some(n._plugins,function(e){return e.isInstanceOf(t._editor.plugins.EnterKeyHandling)?(this.blockNodeForEnter=e.blockNodeForEnter,
!0):!1},this),this.connect(n,"onKeyPress","_keyPress"),this.connect(n,"onClick","_recognize"),
this.connect(n,"onBlur","_recognize"))},_keyPress:function(t){var n=e.keys,i=118,o=86,r=t.keyCode,s=t.charCode;
s==n.SPACE||t.ctrlKey&&(s==i||s==o)?setTimeout(e.hitch(this,"_recognize"),0):r==n.ENTER?setTimeout(e.hitch(this,function(){
this._recognize({enter:!0})}),0):this._saved=this.editor.window.getSelection().anchorNode;
},_recognize:function(t){var n=this._template,i=t?t.enter:!1,o=this.editor,r=o.window.getSelection();
if(console.log("_recognize: isEnter = ",i,", selection is ",r,r.anchorNode,this._findLastEditingNode(r.anchorNode)),
r){var s=i?this._findLastEditingNode(r.anchorNode):this._saved||r.anchorNode,a=this._saved=r.anchorNode,d=r.anchorOffset;
if(3==s.nodeType&&!this._inLink(s)){var l,c=!1,u=this._findUrls(s,a,d),g=o.document.createRange(),h=0,f=a==s;
for(l=u.shift();l;)g.setStart(s,l.start),g.setEnd(s,l.end),r.removeAllRanges(),r.addRange(g),
o.execCommand("insertHTML",e.string.substitute(n,{url:g.toString()})),h+=l.end,l=u.shift(),
c=!0;if(f&&(d-=h)<=0)return;if(!c)return;try{g.setStart(a,0),g.setEnd(a,d),r.removeAllRanges(),
r.addRange(g),o._sCall("collapse",[])}catch(N){}}}},_inLink:function(e){var t,n=this.editor.editNode,i=!1;
for(e=e.parentNode;e&&e!==n;){if(t=e.tagName?e.tagName.toLowerCase():"","a"==t){i=!0;
break}e=e.parentNode}return i},_findLastEditingNode:function(n){var i,o=t.range.BlockTagNames,r=this.editor.editNode;
if(!n)return n;if("BR"!=this.blockNodeForEnter||(i=t.range.getBlockAncestor(n,null,r).blockNode)&&"LI"==i.tagName.toUpperCase()){
for(n=(i||(i=t.range.getBlockAncestor(n,null,r).blockNode))&&"LI"==i.tagName.toUpperCase()?i:t.range.getBlockAncestor(n,null,r).blockNode;(n=n.previousSibling)&&(!n.tagName||!n.tagName.match(o)););
if(n)for(n=n.lastChild;n&&(3!=n.nodeType||""==e.trim(n.nodeValue));)n=1==n.nodeType?n.lastChild:n.previousSibling;
}else for(;(n=n.previousSibling)&&3!=n.nodeType;);return n},_findUrls:function(e,t,n){
var i,o,r=/(http|https|ftp):\/\/[^\s]+/gi,s=[],a=0,d=e.nodeValue;for(e===t&&n<d.length&&(d=d.substr(0,n));null!=(i=r.exec(d));)(0==i.index||" "==(o=d.charAt(i.index-1))||" "==o)&&(s.push({
start:i.index-a,end:i.index+i[0].length-a}),a=i.index+i[0].length);return s}});return e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){
if(!e.plugin){var t=e.args.name.toLowerCase();"autourllink"===t&&(e.plugin=new o);
}}),o});