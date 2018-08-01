define(["dojo/_base/declare","dojo/Deferred","dojo/dom-construct","dojo/html","dojo/_base/kernel","dojo/_base/lang","dojo/ready","dojo/_base/sniff","dojo/_base/url","dojo/_base/xhr","dojo/when","dojo/_base/window"],function(e,t,r,s,n,i,o,a,c,l,h,d){
var u=n.getObject("dojox.html",!0);if(a("ie"))var p=/(AlphaImageLoader\([^)]*?src=(['"]))(?![a-z]+:|\/)([^\r\n;}]+?)(\2[^)]*\)\s*[;}]?)/g;
var f=/(?:(?:@import\s*(['"])(?![a-z]+:|\/)([^\r\n;{]+?)\1)|url\(\s*(['"]?)(?![a-z]+:|\/)([^\r\n;]+?)\3\s*\))([a-z, \s]*[;}]?)/g,g=u._adjustCssPaths=function(e,t){
return t&&e?(p&&(t=t.replace(p,function(t,r,s,n,i){return r+new c(e,"./"+n).toString()+i;
})),t.replace(f,function(t,r,s,n,i,o){return s?'@import "'+new c(e,"./"+s).toString()+'"'+o:"url("+new c(e,"./"+i).toString()+")"+o;
})):void 0},y=/(<[a-z][a-z0-9]*\s[^>]*)(?:(href|src)=(['"]?)([^>]*?)\3|style=(['"]?)([^>]*?)\5)([^>]*>)/gi,_=u._adjustHtmlPaths=function(e,t){
var r=e||"./";return t.replace(y,function(e,t,s,n,i,o,a,l){return t+(s?s+"="+n+new c(r,i).toString()+n:"style="+o+g(r,a)+o)+l;
})},m=u._snarfStyles=function(e,t,r){return r.attributes=[],t=t.replace(/<[!][-][-](.|\s)*?[-][-]>/g,function(e){
return e.replace(/<(\/?)style\b/gi,"&lt;$1Style").replace(/<(\/?)link\b/gi,"&lt;$1Link").replace(/@import "/gi,'@ import "');
}),t.replace(/(?:<style([^>]*)>([\s\S]*?)<\/style>|<link\s+(?=[^>]*rel=['"]?stylesheet)([^>]*?href=(['"])([^>]*?)\4[^>\/]*)\/?>)/gi,function(t,s,n,i,o,a){
var c,l=(s||i||"").replace(/^\s*([\s\S]*?)\s*$/i,"$1");if(n?c=r.push(e?g(e,n):n):(c=r.push('@import "'+a+'";'),
l=l.replace(/\s*(?:rel|href)=(['"])?[^\s]*\1\s*/gi,"")),l){l=l.split(/\s+/);for(var h,d={},u=0,p=l.length;p>u;u++)h=l[u].split("="),
d[h[0]]=h[1].replace(/^\s*['"]?([\s\S]*?)['"]?\s*$/,"$1");r.attributes[c-1]=d}return"";
})},S=u._snarfScripts=function(e,t){function r(e){t.downloadRemote&&(e=e.replace(/&([a-z0-9#]+);/g,function(e,t){
switch(t){case"amp":return"&";case"gt":return">";case"lt":return"<";default:return"#"==t.charAt(0)?String.fromCharCode(t.substring(1)):"&"+t+";";
}}),l.get({url:e,sync:!0,load:function(e){t.code+=e+";"},error:t.errBack}))}return t.code="",
e=e.replace(/<[!][-][-](.|\s)*?[-][-]>/g,function(e){return e.replace(/<(\/?)script\b/gi,"&lt;$1Script");
}),e.replace(/<script\s*(?![^>]*type=['"]?(?:dojo\/|text\/html\b))[^>]*?(?:src=(['"]?)([^>]*?)\1[^>]*)?>([\s\S]*?)<\/script>/gi,function(e,s,n,i){
return n?r(n):t.code+=i,""})},b=u.evalInGlobal=function(e,t){t=t||d.doc.body;var r=t.ownerDocument.createElement("script");
r.type="text/javascript",t.appendChild(r),r.text=e};return u._ContentSetter=e(s._ContentSetter,{
adjustPaths:!1,referencePath:".",renderStyles:!1,executeScripts:!1,scriptHasHooks:!1,
scriptHookReplacement:null,_renderStyles:function(e){this._styleNodes=[];for(var t,r,s,n=this.node.ownerDocument,i=n.getElementsByTagName("head")[0],o=0,a=e.length;a>o;o++){
s=e[o],r=e.attributes[o],t=n.createElement("style"),t.setAttribute("type","text/css");
for(var c in r)t.setAttribute(c,r[c]);this._styleNodes.push(t),i.appendChild(t),t.styleSheet?t.styleSheet.cssText=s:t.appendChild(n.createTextNode(s));
}},empty:function(){this.inherited("empty",arguments),this._styles=[]},onBegin:function(){
this.inherited("onBegin",arguments);var e=this.content,t=(this.node,this._styles);
if(i.isString(e)&&(this.adjustPaths&&this.referencePath&&(e=_(this.referencePath,e)),
(this.renderStyles||this.cleanContent)&&(e=m(this.referencePath,e,t)),this.executeScripts)){
var r=this,s={downloadRemote:!0,errBack:function(e){r._onError.call(r,"Exec",'Error downloading remote script in "'+r.id+'"',e);
}};e=S(e,s),this._code=s.code}this.content=e},onEnd:function(){var e=this._code,s=this._styles;
if(this._styleNodes&&this._styleNodes.length)for(;this._styleNodes.length;)r.destroy(this._styleNodes.pop());
this.renderStyles&&s&&s.length&&this._renderStyles(s);var n=new t,a=this.getInherited(arguments),c=arguments,l=i.hitch(this,function(){
a.apply(this,c),h(this.parseDeferred,function(){n.resolve()})});if(this.executeScripts&&e){
this.cleanContent&&(e=e.replace(/(<!--|(?:\/\/)?-->|<!\[CDATA\[|\]\]>)/g,"")),this.scriptHasHooks&&(e=e.replace(/_container_(?!\s*=[^=])/g,this.scriptHookReplacement));
try{b(e,this.node)}catch(d){this._onError("Exec","Error eval script in "+this.id+", "+d.message,d);
}o(l)}else l();return n.promise},tearDown:function(){if(this.inherited(arguments),
delete this._styles,this._styleNodes&&this._styleNodes.length)for(;this._styleNodes.length;)r.destroy(this._styleNodes.pop());
delete this._styleNodes,i.mixin(this,u._ContentSetter.prototype)}}),u.set=function(e,t,r){
if(r){var n=new u._ContentSetter(i.mixin(r,{content:t,node:e}));return n.set()}return s._setNodeContent(e,t,!0);
},u});