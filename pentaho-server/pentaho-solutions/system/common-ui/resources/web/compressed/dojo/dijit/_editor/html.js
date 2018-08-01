define(["dojo/_base/array","dojo/_base/lang","dojo/sniff"],function(e,t,r){var a={};
t.setObject("dijit._editor.html",a);var i=a.escapeXml=function(e,t){return e=e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;"),
t||(e=e.replace(/'/gm,"&#39;")),e};return a.getNodeHtml=function(e){var t=[];return a.getNodeHtmlHelper(e,t),
t.join("")},a.getNodeHtmlHelper=function(t,s){switch(t.nodeType){case 1:var l=t.nodeName.toLowerCase();
if(!l||"/"==l.charAt(0))return"";s.push("<",l);var n,c=[],u={};if(r("dom-attributes-explicit")||r("dom-attributes-specified-flag"))for(var o=0;n=t.attributes[o++];){
var d=n.name;if(!("_dj"===d.substr(0,3)||r("dom-attributes-specified-flag")&&!n.specified||d in u)){
var f=n.value;("src"==d||"href"==d)&&t.getAttribute("_djrealurl")&&(f=t.getAttribute("_djrealurl")),
8===r("ie")&&"style"===d&&(f=f.replace("HEIGHT:","height:").replace("WIDTH:","width:")),
c.push([d,f]),u[d]=f}}else{var h=/^input$|^img$/i.test(t.nodeName)?t:t.cloneNode(!1),p=h.outerHTML,g=/[\w-]+=("[^"]*"|'[^']*'|\S*)/gi,m=p.match(g);
p=p.substr(0,p.indexOf(">")),e.forEach(m,function(e){if(e){var r=e.indexOf("=");if(r>0){
var a=e.substring(0,r);if("_dj"!=a.substr(0,3)){if(("src"==a||"href"==a)&&t.getAttribute("_djrealurl"))return void c.push([a,t.getAttribute("_djrealurl")]);
var i,s;switch(a){case"style":i=t.style.cssText.toLowerCase();break;case"class":i=t.className;
break;case"width":if("img"===l){s=/width=(\S+)/i.exec(p),s&&(i=s[1]);break}case"height":
if("img"===l){s=/height=(\S+)/i.exec(p),s&&(i=s[1]);break}default:i=t.getAttribute(a);
}null!=i&&c.push([a,i.toString()])}}}},this)}c.sort(function(e,t){return e[0]<t[0]?-1:e[0]==t[0]?0:1;
});for(var b=0;n=c[b++];)s.push(" ",n[0],'="',"string"==typeof n[1]?i(n[1],!0):n[1],'"');
switch(l){case"br":case"hr":case"img":case"input":case"base":case"meta":case"area":
case"basefont":s.push(" />");break;case"script":s.push(">",t.innerHTML,"</",l,">");
break;default:s.push(">"),t.hasChildNodes()&&a.getChildrenHtmlHelper(t,s),s.push("</",l,">");
}break;case 4:case 3:s.push(i(t.nodeValue,!0));break;case 8:s.push("<!--",i(t.nodeValue,!0),"-->");
break;default:s.push("<!-- Element not recognized - Type: ",t.nodeType," Name: ",t.nodeName,"-->");
}},a.getChildrenHtml=function(e){var t=[];return a.getChildrenHtmlHelper(e,t),t.join("");
},a.getChildrenHtmlHelper=function(e,t){if(e)for(var i,s=e.childNodes||e,l=!r("ie")||s!==e,n=0;i=s[n++];)l&&i.parentNode!=e||a.getNodeHtmlHelper(i,t);
},a});