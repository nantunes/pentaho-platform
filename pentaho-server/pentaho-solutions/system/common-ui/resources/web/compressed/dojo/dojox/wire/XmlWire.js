dojo.provide("dojox.wire.XmlWire"),dojo.require("dojox.xml.parser"),dojo.require("dojox.wire.Wire"),
dojo.declare("dojox.wire.XmlWire",dojox.wire.Wire,{_wireClass:"dojox.wire.XmlWire",
constructor:function(e){},_getValue:function(e){if(!e||!this.path)return e;var r,t=e,i=this.path;
"/"==i.charAt(0)&&(r=i.indexOf("/",1),i=i.substring(r+1));var o=i.split("/"),n=o.length-1;
for(r=0;n>r;r++)if(t=this._getChildNode(t,o[r]),!t)return void 0;var d=this._getNodeValue(t,o[n]);
return d},_setValue:function(e,r){if(!this.path)return e;var t,i=e,o=this._getDocument(i),n=this.path;
if("/"==n.charAt(0)){if(t=n.indexOf("/",1),!i){var d=n.substring(1,t);i=o.createElement(d),
e=i}n=n.substring(t+1)}else if(!i)return void 0;var s=n.split("/"),a=s.length-1;for(t=0;a>t;t++){
var u=this._getChildNode(i,s[t]);u||(u=o.createElement(s[t]),i.appendChild(u)),i=u;
}return this._setNodeValue(i,s[a],r),e},_getNodeValue:function(e,r){var t=void 0;if("@"==r.charAt(0)){
var i=r.substring(1);t=e.getAttribute(i)}else if("text()"==r){var o=e.firstChild;o&&(t=o.nodeValue);
}else{t=[];for(var n=0;n<e.childNodes.length;n++){var d=e.childNodes[n];1===d.nodeType&&d.nodeName==r&&t.push(d);
}}return t},_setNodeValue:function(e,r,t){if("@"==r.charAt(0)){var i=r.substring(1);
t?e.setAttribute(i,t):e.removeAttribute(i)}else if("text()"==r){for(;e.firstChild;)e.removeChild(e.firstChild);
if(t){var o=this._getDocument(e).createTextNode(t);e.appendChild(o)}}},_getChildNode:function(e,r){
var t=1,i=r.indexOf("[");if(i>=0){var o=r.indexOf("]");t=r.substring(i+1,o),r=r.substring(0,i);
}for(var n=1,d=0;d<e.childNodes.length;d++){var s=e.childNodes[d];if(1===s.nodeType&&s.nodeName==r){
if(n==t)return s;n++}}return null},_getDocument:function(e){return e?9==e.nodeType?e:e.ownerDocument:dojox.xml.parser.parse();
}});