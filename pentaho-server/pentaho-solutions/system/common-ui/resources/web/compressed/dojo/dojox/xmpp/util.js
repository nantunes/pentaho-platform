dojo.provide("dojox.xmpp.util"),dojo.require("dojox.string.Builder"),dojo.require("dojox.encoding.base64"),
dojox.xmpp.util.xmlEncode=function(e){return e&&(e=e.replace("&","&amp;").replace(">","&gt;").replace("<","&lt;").replace("'","&apos;").replace('"',"&quot;")),
e},dojox.xmpp.util.encodeJid=function(e){for(var r=new dojox.string.Builder,o=0;o<e.length;o++){
var n=e.charAt(o),t=n;switch(n){case" ":t="\\20";break;case'"':t="\\22";break;case"#":
t="\\23";break;case"&":t="\\26";break;case"'":t="\\27";break;case"/":t="\\2f";break;
case":":t="\\3a";break;case"<":t="\\3c";break;case">":t="\\3e"}r.append(t)}return r.toString();
},dojox.xmpp.util.decodeJid=function(e){return e=e.replace(/\\([23][02367acef])/g,function(e){
switch(e){case"\\20":return" ";case"\\22":return'"';case"\\23":return"#";case"\\26":
return"&";case"\\27":return"'";case"\\2f":return"/";case"\\3a":return":";case"\\3c":
return"<";case"\\3e":return">"}return"ARG"})},dojox.xmpp.util.createElement=function(e,r,o){
var n=new dojox.string.Builder("<");n.append(e+" ");for(var t in r)n.append(t+'="'),
n.append(r[t]),n.append('" ');return o?n.append("/>"):n.append(">"),n.toString()},
dojox.xmpp.util.stripHtml=function(e){for(var r=/<[^>]*?>/gi,o=0;o<arguments.length;o++);
return e.replace(r,"")},dojox.xmpp.util.decodeHtmlEntities=function(e){var r=dojo.doc.createElement("textarea");
return r.innerHTML=e.replace(/</g,"&lt;").replace(/>/g,"&gt;"),r.value},dojox.xmpp.util.htmlToPlain=function(e){
return e=dojox.xmpp.util.decodeHtmlEntities(e),e=e.replace(/<br\s*[i\/]{0,1}>/gi,"\n"),
e=dojox.xmpp.util.stripHtml(e)},dojox.xmpp.util.Base64={},dojox.xmpp.util.Base64.encode=function(e){
var r=function(e){for(var r=[],o=0;o<e.length;++o)r.push(e.charCodeAt(o));return r;
};return dojox.encoding.base64.encode(r(e))},dojox.xmpp.util.Base64.decode=function(e){
var r=function(e){var r=[];return dojo.forEach(e,function(e){r.push(String.fromCharCode(e));
}),r.join("")};return r(dojox.encoding.base64.decode(e))};