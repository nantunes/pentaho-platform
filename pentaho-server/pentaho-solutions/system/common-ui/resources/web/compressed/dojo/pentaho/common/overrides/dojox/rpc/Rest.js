define("dojox/rpc/Rest",["dojo/_base/lang","dojo/json","dojo/io-query","dojo/request"],function(t,n,e,r){
function o(t,n,e,r){return t.then(function(n){return t.response&&e&&(t.response.then(function(t){
e=t.getResponseHeader("Content-Range")}),t.fullLength=e&&(e=e.match(/\/(.*)/))&&parseInt(e[1])),
n}),t}t.getObject("dojox",!0),t.getObject("rpc.Rest",!0,dojox),dojox.rpc&&dojox.rpc.transportRegistry&&dojox.rpc.transportRegistry.register("REST",function(t){
return"REST"==t},{getExecutor:function(t,n,e){return new dojox.rpc.Rest(n.name,(n.contentType||e._smd.contentType||"").match(/json|javascript/),null,function(t,r){
var o=e._getRequest(n,[t]);return o.url=o.target+(o.data?"?"+o.data:""),r&&(r.start>=0||r.count>=0)&&(o.headers=o.headers||{},
o.headers.Range="items="+(r.start||"0")+"-"+("count"in r&&r.count!=1/0?r.count+(r.start||0)-1:"")),
o})}});var a;return a=dojox.rpc.Rest=function(r,o,c,u){function s(t){i[t]=function(n,e){
return a._change(t,i,n,e)}}var i;return i=function(t,n){return a._get(i,t,n)},i.isJson=o,
i._schema=c,i.cache={serialize:o?n.stringify:function(t){return t}},i._getRequest=u||function(n,a){
if(t.isObject(n)&&(n=e.objectToQuery(n),n=n?"?"+n:""),a&&a.sort&&!a.queryStr){n+=(n?"&":"?")+"sort(";
for(var c=0;c<a.sort.length;c++){var u=a.sort[c];n+=(c>0?",":"")+(u.descending?"-":"+")+encodeURIComponent(u.attribute);
}n+=")"}var s={url:r+(null==n?"":n),handleAs:o?"json":"text",contentType:o?"application/json":"text/plain",
sync:dojox.rpc._sync,headers:{Accept:o?"application/json,application/javascript":"*/*"
}};return a&&(a.start>=0||a.count>=0)&&(s.headers.Range="items="+(a.start||"0")+"-"+("count"in a&&a.count!=1/0?a.count+(a.start||0)-1:"")),
dojox.rpc._sync=!1,s},s("put"),s("post"),s("delete"),i.servicePath=r,i},a._index={},
a._timeStamps={},a._change=function(t,n,e,a){var c=n._getRequest(e);"GET"==t?c.query=a:c.data=a,
c.sync=!0;var u=r(c.url,c);return o(u,n),{addCallback:function(t){u.then(function(n){
t.apply(null,arguments)})},addErrback:function(t){u.then(function(t){},function(n){
t.apply(null,arguments)})}}},a._get=function(t,n,e){e=e||{};var a,c=t._getRequest(n,e);
c.sync=!0;var a=r(c.url,c);return o(a,t,e.start>=0||e.count>=0,n),{addCallback:function(t){
a.then(function(n){t.apply(null,arguments)})},addErrback:function(t){a.then(function(t){},function(n){
t.apply(null,arguments)})}}},a});