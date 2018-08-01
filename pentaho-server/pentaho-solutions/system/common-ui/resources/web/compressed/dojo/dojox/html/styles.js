define(["dojo/_base/lang","dojo/_base/array","dojo/_base/window","dojo/_base/sniff"],function(e,t,n,i){
var r=e.getObject("dojox.html",!0),s={},l={},o=[];return r.insertCssRule=function(e,t,s){
var l=r.getDynamicStyleSheet(s),o=e+" {"+t+"}";return console.log("insertRule:",o),
i("ie")?(l.cssText+=o,console.log("ss.cssText:",l.cssText)):l.sheet?l.sheet.insertRule(o,l._indicies.length):l.appendChild(n.doc.createTextNode(o)),
l._indicies.push(e+" "+t),e},r.removeCssRule=function(e,t,n){var r,l,o,d=-1;for(l in s)if(!n||n===l){
for(r=s[l],o=0;o<r._indicies.length;o++)if(e+" "+t===r._indicies[o]){d=o;break}if(d>-1)break;
}return r?-1===d?(console.warn("The css rule was not found and could not be removed."),
!1):(r._indicies.splice(d,1),i("ie")?r.removeRule(d):r.sheet&&r.sheet.deleteRule(d),
!0):(console.warn("No dynamic style sheet has been created from which to remove a rule."),
!1)},r.modifyCssRule=function(e,t,n){},r.getStyleSheet=function(e){if(s[e||"default"])return s[e||"default"];
if(!e)return!1;var t=r.getStyleSheets();if(t[e])return r.getStyleSheets()[e];var n;
for(n in t)if(t[n].href&&t[n].href.indexOf(e)>-1)return t[n];return!1},r.getDynamicStyleSheet=function(e){
return e||(e="default"),s[e]||(n.doc.createStyleSheet?(s[e]=n.doc.createStyleSheet(),
i("ie")<9&&(s[e].title=e)):(s[e]=n.doc.createElement("style"),s[e].setAttribute("type","text/css"),
n.doc.getElementsByTagName("head")[0].appendChild(s[e]),console.log(e," ss created: ",s[e].sheet)),
s[e]._indicies=[]),s[e]},r.enableStyleSheet=function(e){var t=r.getStyleSheet(e);t&&(t.sheet?t.sheet.disabled=!1:t.disabled=!1);
},r.disableStyleSheet=function(e){var t=r.getStyleSheet(e);t&&(t.sheet?t.sheet.disabled=!0:t.disabled=!0);
},r.activeStyleSheet=function(e){var n,i=r.getToggledStyleSheets();if(1===arguments.length)t.forEach(i,function(t){
t.disabled=t.title===e?!1:!0});else for(n=0;n<i.length;n++)if(i[n].disabled===!1)return i[n];
return!0},r.getPreferredStyleSheet=function(){},r.getToggledStyleSheets=function(){
var e;if(!o.length){var t=r.getStyleSheets();for(e in t)t[e].title&&o.push(t[e])}
return o},r.getStyleSheets=function(){if(l.collected)return l;var e=n.doc.styleSheets;
return t.forEach(e,function(e){var n=e.sheet?e.sheet:e,r=n.title||n.href;i("ie")?-1===n.cssText.indexOf("#default#VML")&&(n.href?l[r]=n:n.imports.length?t.forEach(n.imports,function(e){
l[e.title||e.href]=e}):l[r]=n):(l[r]=n,l[r].id=n.ownerNode.id,t.forEach(n.cssRules,function(e){
e.href&&(l[e.href]=e.styleSheet,l[e.href].id=n.ownerNode.id)}))}),l.collected=!0,
l},r});