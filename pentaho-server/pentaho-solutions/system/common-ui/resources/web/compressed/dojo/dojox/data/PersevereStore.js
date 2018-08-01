define(["dojo","dojox","require","dojox/data/JsonQueryRestStore","dojox/rpc/Client","dojo/_base/url"],function(r,e,t){
e.json.ref.serializeFunctions=!0;var o=r.declare("dojox.data.PersevereStore",e.data.JsonQueryRestStore,{
useFullIdInQueries:!0,jsonQueryPagination:!1});return o.getStores=function(o,n){o=o&&(o.match(/\/$/)?o:o+"/")||"/",
o.match(/^\w*:\/\//)&&(t("dojox/io/xhrScriptPlugin"),e.io.xhrScriptPlugin(o,"callback",e.io.xhrPlugins.fullHttpAdapter));
var s=r.xhr;r.xhr=function(e,t){return(t.headers=t.headers||{})["Server-Methods"]="false",
s.apply(r,arguments)};var a=e.rpc.Rest(o,!0);e.rpc._sync=n;var i,d=a("Class/"),u={},p=0;
return d.addCallback(function(t){function n(t){t["extends"]&&t["extends"].prototype&&(t.prototype&&t.prototype.isPrototypeOf(t["extends"].prototype)||(n(t["extends"]),
e.rpc.Rest._index[t.prototype.__id]=t.prototype=r.mixin(r.delegate(t["extends"].prototype),t.prototype)));
}function s(t,o){if(t&&o)for(var n in t){var s=t[n];"client"==s.runAt||o[n]||(o[n]=function(t){
return function(){var o=r.rawXhrPost({url:this.__id,postData:e.json.ref.toJson({method:t,
id:p++,params:r._toArray(arguments)}),handleAs:"json"});return o.addCallback(function(r){
return r.error?new Error(r.error):r.result}),o}}(n))}}e.json.ref.resolveJson(t,{index:e.rpc.Rest._index,
idPrefix:"/Class/",assignAbsoluteIds:!0});for(var a in t)if("object"==typeof t[a]){
var d=t[a];n(d),s(d.methods,d.prototype=d.prototype||{}),s(d.staticMethods,d),u[t[a].id]=new e.data.PersevereStore({
target:new r._Url(o,t[a].id)+"/",schema:d})}return i=u}),r.xhr=s,n?i:d},o.addProxy=function(){
t("dojox/io/xhrPlugins"),e.io.xhrPlugins.addProxy("/proxy/")},o});