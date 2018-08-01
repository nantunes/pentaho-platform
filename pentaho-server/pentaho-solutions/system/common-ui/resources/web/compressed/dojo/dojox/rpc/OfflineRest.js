define("dojox/rpc/OfflineRest",["dojo","dojox","dojox/data/ClientFilter","dojox/rpc/Rest","dojox/storage"],function(e,t){
function n(e){return e.replace(/[^0-9A-Za-z_]/g,"_")}function r(e,r){u&&!g&&(r||e&&e.__id)&&t.storage.put(n(r||e.__id),"object"==typeof e?t.json.ref.toJson(e):e,function(){},f);
}function o(e){return e instanceof Error&&(503==e.status||e.status>12e3||!e.status);
}function a(){if(u){var e=t.storage.get("dirty",f);if(e)for(var n in e)i(n,e)}}function s(){
v.sendChanges(),v.downloadChanges()}function c(e,r,o,a,s){"delete"==e?t.storage.remove(n(r),f):t.storage.put(n(o),a,function(){},f);
var c=s&&s._store;c&&(c.updateResultSet(c._localBaseResults,c._localBaseFetch),t.storage.put(n(s._getRequest(c._localBaseFetch.query).url),t.json.ref.toJson(c._localBaseResults),function(){},f));
}function i(e,n){var r=n[e],a=t.rpc.JsonRest.getServiceAndId(r.id),s=h(r.method,a.service,a.id,r.content);
return n[e]=r,t.storage.put("dirty",n,function(){},f),s.addBoth(function(n){if(o(n))return null;
var r=t.storage.get("dirty",f)||{};return delete r[e],t.storage.put("dirty",r,function(){},f),
n}),s}var u,d=t.rpc.Rest,f="dojox_rpc_OfflineRest",l=d._index;t.storage.manager.addOnLoad(function(){
u=t.storage.manager.available;for(var e in l)r(l[e],e)});var g,v,p=setInterval(s,15e3);
e.connect(document,"ononline",s),v=t.rpc.OfflineRest={turnOffAutoSync:function(){
clearInterval(p)},sync:s,sendChanges:a,downloadChanges:function(){},addStore:function(e,t){
v.stores.push(e),e.fetch({queryOptions:{cache:!0},query:t,onComplete:function(t,n){
e._localBaseResults=t,e._localBaseFetch=n}})}},v.stores=[];var _=d._get;d._get=function(s,c){
try{if(a(),window.navigator&&navigator.onLine===!1)throw new Error;var i=_(s,c)}catch(d){
i=new e.Deferred,i.errback(d)}var l=t.rpc._sync;return i.addCallback(function(e){
return r(e,s._getRequest(c).url),e}),i.addErrback(function(r){if(u){if(o(r)){var a={},d=function(r,o){
if(a[r])return o;var s=e.fromJson(t.storage.get(n(r),f))||o;a[r]=s;for(var c in s){
var i=s[c];r=i&&i.$ref,r&&(r.substring&&"cid:"==r.substring(0,4)&&(r=r.substring(4)),
s[c]=d(r,i))}if(s instanceof Array)for(c=0;c<s.length;c++)void 0===s[c]&&s.splice(c--,1);
return s};g=!0;var v=d(s._getRequest(c).url);return v?(g=!1,v):r}return r}return l?new Error("Storage manager not loaded, can not continue"):(i=new e.Deferred,
i.addCallback(arguments.callee),t.storage.manager.addOnLoad(function(){i.callback();
}),i)}),i},e.addOnLoad(function(){e.connect(t.data,"restListener",function(n){var r=n.channel,o=n.event.toLowerCase(),a=t.rpc.JsonRest&&t.rpc.JsonRest.getServiceAndId(r).service;
c(o,r,"post"==o?r+n.result.id:r,e.toJson(n.result),a)})});var h=d._change;return d._change=function(e,n,r,o){
if(!u)return h.apply(this,arguments);var a=n._getRequest(r).url;c(e,a,t.rpc.JsonRest._contentId,o,n);
var s=t.storage.get("dirty",f)||{};if("put"==e||"delete"==e)var d=a;else{d=0;for(var l in s)isNaN(parseInt(l))||(d=l);
d++}return s[d]={method:e,id:a,content:o},i(d,s)},e.connect(l,"onLoad",r),e.connect(l,"onUpdate",r),
v});