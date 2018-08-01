define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/window","dojo/_base/sniff"],function(e,r){
return dojox="undefined"!=typeof dojox?dojox:r.getObject("dojox"),e.getObject("xml.parser",!0,dojox),
dojox.xml.parser.parse=function(r,o){var n,t=e.doc;if(o=o||"text/xml",r&&e.trim(r)&&"DOMParser"in e.global){
var a=new DOMParser;n=a.parseFromString(r,o);var i=n.documentElement,l="http://www.mozilla.org/newlayout/xml/parsererror.xml";
if("parsererror"==i.nodeName&&i.namespaceURI==l){var d=i.getElementsByTagNameNS(l,"sourcetext")[0];
throw d&&(d=d.firstChild.data),new Error("Error parsing text "+i.firstChild.data+" \n"+d);
}return n}if("ActiveXObject"in e.global){var c=function(e){return"MSXML"+e+".DOMDocument";
},s=["Microsoft.XMLDOM",c(6),c(4),c(3),c(2)];if(e.some(s,function(e){try{n=new ActiveXObject(e);
}catch(r){return!1}return!0}),r&&n){n.async=!1,n.loadXML(r);var m=n.parseError;if(0!==m.errorCode)throw new Error("Line: "+m.line+"\nCol: "+m.linepos+"\nReason: "+m.reason+"\nError Code: "+m.errorCode+"\nSource: "+m.srcText);
}if(n)return n}else if(t.implementation&&t.implementation.createDocument){if(r&&e.trim(r)&&t.createElement){
var u=t.createElement("xml");u.innerHTML=r;var f=t.implementation.createDocument("foo","",null);
return e.forEach(u.childNodes,function(e){f.importNode(e,!0)}),f}return t.implementation.createDocument("","",null);
}return null},dojox.xml.parser.textContent=function(r,o){if(arguments.length>1){var n=r.ownerDocument||e.doc;
return dojox.xml.parser.replaceChildren(r,n.createTextNode(o)),o}if(void 0!==r.textContent)return r.textContent;
var t="";return r&&e.forEach(r.childNodes,function(e){switch(e.nodeType){case 1:case 5:
t+=dojox.xml.parser.textContent(e);break;case 3:case 2:case 4:t+=e.nodeValue}}),t;
},dojox.xml.parser.replaceChildren=function(r,o){var n=[];e.isIE&&e.forEach(r.childNodes,function(e){
n.push(e)}),dojox.xml.parser.removeChildren(r),e.forEach(n,e.destroy),e.isArray(o)?e.forEach(o,function(e){
r.appendChild(e)}):r.appendChild(o)},dojox.xml.parser.removeChildren=function(e){
for(var r=e.childNodes.length;e.hasChildNodes();)e.removeChild(e.firstChild);return r;
},dojox.xml.parser.innerXML=function(e){return e.innerXML?e.innerXML:e.xml?e.xml:"undefined"!=typeof XMLSerializer?(new XMLSerializer).serializeToString(e):null;
},dojox.xml.parser});