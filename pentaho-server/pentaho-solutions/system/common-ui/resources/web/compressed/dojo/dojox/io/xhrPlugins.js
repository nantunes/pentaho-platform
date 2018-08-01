define(["dojo/_base/kernel","dojo/_base/xhr","dojo/AdapterRegistry"],function(t,r,e){
function n(){return u=dojox.io.xhrPlugins.plainXhr=u||t._defaultXhr||r}t.getObject("io.xhrPlugins",!0,dojox);
var o,u;dojox.io.xhrPlugins.register=function(){var r=n();return o||(o=new e,t[t._defaultXhr?"_defaultXhr":"xhr"]=function(t,r,e){
return o.match.apply(o,arguments)},o.register("xhr",function(t,r){if(!r.url.match(/^\w*:\/\//))return!0;
var e=window.location.href.match(/^.*?\/\/.*?\//)[0];return r.url.substring(0,e.length)==e;
},r)),o.register.apply(o,arguments)},dojox.io.xhrPlugins.addProxy=function(r){var e=n();
dojox.io.xhrPlugins.register("proxy",function(t,r){return!0},function(n,o,u){return o.url=r+encodeURIComponent(o.url),
e.call(t,n,o,u)})};var a;return dojox.io.xhrPlugins.addCrossSiteXhr=function(r,e){
var o=n();if(void 0===a&&window.XMLHttpRequest)try{var u=new XMLHttpRequest;u.open("GET","http://testing-cross-domain-capability.com",!0),
a=!0,t.config.noRequestedWithHeaders=!0}catch(i){a=!1}dojox.io.xhrPlugins.register("cs-xhr",function(t,n){
return(a||window.XDomainRequest&&n.sync!==!0&&("GET"==t||"POST"==t||e))&&n.url.substring(0,r.length)==r;
},a?o:function(){var r=t._xhrObj;t._xhrObj=function(){function t(t,e){return function(){
r.readyState=e,r.status=t}}var r=new XDomainRequest;return r.readyState=1,r.setRequestHeader=function(){},
r.getResponseHeader=function(t){return"Content-Type"==t?r.contentType:null},r.onload=t(200,4),
r.onprogress=t(200,3),r.onerror=t(404,4),r};var o=(e?e(n()):n()).apply(t,arguments);
return t._xhrObj=r,o})},dojox.io.xhrPlugins.fullHttpAdapter=function(r,e){return function(n,o,u){
var a={},i={};"GET"!=n&&(i["http-method"]=n,o.putData&&e&&(a["http-content"]=o.putData,
delete o.putData,u=!1),o.postData&&e&&(a["http-content"]=o.postData,delete o.postData,
u=!1),n="POST");for(var s in o.headers){var c=s.match(/^X-/)?s.substring(2).replace(/-/g,"_").toLowerCase():"http-"+s;
i[c]=o.headers[s]}return o.query=t.objectToQuery(i),t._ioAddQueryToUrl(o),o.content=t.mixin(o.content||{},a),
r.call(t,n,o,u)}},dojox.io.xhrPlugins});