define("dojox/html/ellipsis",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/Color","dojo/colors"],function(e){
if(e.isFF<7){var n=1;"dojoxFFEllipsisDelay"in e.config&&(n=Number(e.config.dojoxFFEllipsisDelay),
isNaN(n)&&(n=1));try{var o=function(){var e="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",n=document.createElementNS(e,"window"),o=document.createElementNS(e,"description");
return o.setAttribute("crop","end"),n.appendChild(o),function(e){var o=n.cloneNode(!0);
o.firstChild.setAttribute("value",e.textContent),e.innerHTML="",e.appendChild(o)};
}()}catch(l){}var t,i,d,s=e.create,a=e.doc,r=e.place,c=s("iframe",{className:"dojoxEllipsisIFrame",
src:"javascript:'<html><head><script>if(\"loadFirebugConsole\" in window){window.loadFirebugConsole();}</script></head><body></body></html>'",
style:{display:"none"}}),f=function(e,n){if(!e.collapsed)if(n>0){do f(e),n--;while(n);
}else if(3==e.endContainer.nodeType&&e.endOffset>0)e.setEnd(e.endContainer,e.endOffset-1);else{
if(3==e.endContainer.nodeType)return e.setEndBefore(e.endContainer),void f(e);if(!(e.endOffset&&e.endContainer.childNodes.length>=e.endOffset))return e.setEndBefore(e.endContainer),
void f(e);var o=e.endContainer.childNodes[e.endOffset-1];if(3!=o.nodeType)return o.childNodes.length?(e.setEnd(o,o.childNodes.length),
void f(e)):(e.setEndBefore(o),void f(e));e.setEnd(o,o.length-1)}},p=function(e){var n=s("div",{
className:"dojoxEllipsisContainer"}),o=s("div",{className:"dojoxEllipsisShown",style:{
display:"none"}});e.parentNode.replaceChild(n,e),n.appendChild(e),n.appendChild(o);
var l=c.cloneNode(!0),t=e.style,i=o.style,d=function(){if(t.display="",i.display="none",
!(e.scrollWidth<=e.offsetWidth)){var n=a.createRange();n.selectNodeContents(e),t.display="none",
i.display="";var l=!1;do{var d=1;r(n.cloneContents(),o,"only");var s=o.scrollWidth,c=o.offsetWidth;
l=c>=s;var p=1-1*c/s;p>0&&(d=Math.max(Math.round(o.textContent.length*p)-1,1)),f(n,d);
}while(!n.collapsed&&!l)}};l.onload=function(){l.contentWindow.onresize=d,d()},n.appendChild(l);
},u=e.hasClass,h=e.doc;h.querySelectorAll?(t=h,i="querySelectorAll",d=".dojoxEllipsis"):h.getElementsByClassName?(t=h,
i="getElementsByClassName",d="dojoxEllipsis"):(t=e,i="query",d=".dojoxEllipsis"),
fx=function(){e.forEach(t[i].apply(t,[d]),function(e){e&&!e._djx_ellipsis_done&&(e._djx_ellipsis_done=!0,
o&&e.textContent==e.innerHTML&&!u(e,"dojoxEllipsisSelectable")?o(e):p(e))})},e.addOnLoad(function(){
var o=null,l=null,t=function(){l&&(e.disconnect(l),l=null),o&&clearTimeout(o),o=setTimeout(function(){
o=null,fx(),l=e.connect(e.body(),"DOMSubtreeModified",t)},n)};t()})}});