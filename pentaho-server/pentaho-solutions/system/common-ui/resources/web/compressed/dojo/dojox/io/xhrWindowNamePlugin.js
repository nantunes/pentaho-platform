define(["dojo/_base/kernel","dojo/_base/json","dojo/_base/xhr","dojox/io/xhrPlugins","dojox/io/windowName","dojox/io/httpParse","dojox/secure/capability"],function(o,e,n,a,r,d,i){
return o.getObject("io.xhrWindowNamePlugin",!0,dojox),dojox.io.xhrWindowNamePlugin=function(e,n,d){
a.register("windowName",function(o,a){return a.sync!==!0&&("GET"==o||"POST"==o||n)&&a.url.substring(0,e.length)==e;
},function(e,a,t){var s=r.send,l=a.load;a.load=void 0;var u=(n?n(s,!0):s)(e,a,t);return u.addCallback(function(e){
var n=u.ioArgs;return n.xhr={getResponseHeader:function(e){return o.queryToObject(n.hash.match(/[^#]*$/)[0])[e];
}},"json"==n.handleAs?(d||i.validate(e,["Date"],{}),o.fromJson(e)):o._contentHandlers[n.handleAs||"text"]({
responseText:e})}),a.load=l,l&&u.addCallback(l),u})},dojox.io.xhrWindowNamePlugin;
});