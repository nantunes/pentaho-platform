define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/xhr","dojo/dom","dojox/encoding/digests/SHA1"],function(t,e,r,o,n,u){
return t.getObject("io.OAuth",!0,dojox),dojox.io.OAuth=new function(){function e(t){
for(var e=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],r=/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,o=r.exec(t),n={},u=e.length;u--;)n[e[u]]=o[u]||"";
var a=n.protocol.toLowerCase(),i=n.authority.toLowerCase(),h="http"==a&&80==n.port||"https"==a&&443==n.port;
h&&i.lastIndexOf(":")>-1&&(i=i.substring(0,i.lastIndexOf(":")));var s=n.path||"/";
return n.url=a+"://"+i+s,n}function r(t){for(var e="",r=d.length,o=0;t>o;o++)e+=d.charAt(Math.floor(Math.random()*r));
return e}function n(){return Math.floor((new Date).valueOf()/1e3)-2}function a(t,e,r){
if(r&&"PLAINTEXT"!=r&&"HMAC-SHA1"!=r)throw new Error("dojox.io.OAuth: the only supported signature encodings are PLAINTEXT and HMAC-SHA1.");
return"PLAINTEXT"==r?e:u._hmac(t,e)}function i(t){return l(t.consumer.secret)+"&"+(t.token&&t.token.secret?l(t.token.secret):"");
}function h(e,o){var u={oauth_consumer_key:o.consumer.key,oauth_nonce:r(16),oauth_signature_method:o.sig_method||"HMAC-SHA1",
oauth_timestamp:n(),oauth_version:"1.0"};o.token&&(u.oauth_token=o.token.key),e.content=t.mixin(e.content||{},u);
}function s(r){var o,n=[{}];if(r.form){r.content||(r.content={});var u=t.byId(r.form),a=u.getAttributeNode("action");
r.url=r.url||(a?a.value:null),o=t.formToObject(u),delete r.form}o&&n.push(o),r.content&&n.push(r.content);
var i=e(r.url);if(i.query){var h=t.queryToObject(i.query);for(var s in h)h[s]=encodeURIComponent(h[s]);
n.push(h)}r._url=i.url;for(var c=[],f=0,l=n.length;l>f;f++){var d=n[f];for(var s in d)if(t.isArray(d[s]))for(var p=0,g=d.length;g>p;p++)c.push([s,d[p]]);else c.push([s,d[s]]);
}return r._parameters=c,r}function c(e,r,o){h(r,o),s(r);var n=r._parameters;n.sort(function(t,e){
return t[0]>e[0]?1:t[0]<e[0]?-1:t[1]>e[1]?1:t[1]<e[1]?-1:0});var u=t.map(n,function(t){
return l(t[0])+"="+l((""+t[1]).length?t[1]:"")}).join("&"),a=e.toUpperCase()+"&"+l(r._url)+"&"+l(u);
return a}function f(t,e,r){var o=i(r),n=c(t,e,r),u=a(n,o,r.sig_method||"HMAC-SHA1");
return e.content.oauth_signature=u,e}var l=this.encode=function(t){return(""+t).length?encodeURIComponent(t).replace(/\!/g,"%21").replace(/\*/g,"%2A").replace(/\'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29"):"";
},d=(this.decode=function(t){for(var e=[],r=t.split("&"),o=0,n=r.length;n>o;o++){
r[o];if(""!=r[o])if(r[o].indexOf("=")>-1){var u=r[o].split("=");e.push([decodeURIComponent(u[0]),decodeURIComponent(u[1])]);
}else e.push([decodeURIComponent(r[o]),null])}return e},"0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz");
this.sign=function(t,e,r){return f(t,e,r)},this.xhr=function(t,e,r,n){return f(t,e,r),
o(t,e,n)},this.xhrGet=function(t,e){return this.xhr("GET",t,e)},this.xhrPost=this.xhrRawPost=function(t,e){
return this.xhr("POST",t,e,!0)},this.xhrPut=this.xhrRawPut=function(t,e){return this.xhr("PUT",t,e,!0);
},this.xhrDelete=function(t,e){return this.xhr("DELETE",t,e)}},dojox.io.OAuth});