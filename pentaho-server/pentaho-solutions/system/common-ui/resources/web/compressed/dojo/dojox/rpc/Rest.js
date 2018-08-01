define("dojox/rpc/Rest",["dojo","dojox"],function(t,e){function n(t,e,n,r){return t.addCallback(function(e){
return t.ioArgs.xhr&&n&&(n=t.ioArgs.xhr.getResponseHeader("Content-Range"),t.fullLength=n&&(n=n.match(/\/(.*)/))&&parseInt(n[1])),
e}),t}t.getObject("rpc.Rest",!0,e),e.rpc&&e.rpc.transportRegistry&&e.rpc.transportRegistry.register("REST",function(t){
return"REST"==t},{getExecutor:function(t,n,r){return new e.rpc.Rest(n.name,(n.contentType||r._smd.contentType||"").match(/json|javascript/),null,function(t,e){
var o=r._getRequest(n,[t]);return o.url=o.target+(o.data?"?"+o.data:""),e&&(e.start>=0||e.count>=0)&&(o.headers=o.headers||{},
o.headers.Range="items="+(e.start||"0")+"-"+("count"in e&&e.count!=1/0?e.count+(e.start||0)-1:"")),
o})}});var r;return r=e.rpc.Rest=function(n,o,a,c){function s(t){u[t]=function(e,n){
return r._change(t,u,e,n)}}var u;return u=function(t,e){return r._get(u,t,e)},u.isJson=o,
u._schema=a,u.cache={serialize:o?(e.json&&e.json.ref||t).toJson:function(t){return t;
}},u._getRequest=c||function(r,a){if(t.isObject(r)&&(r=t.objectToQuery(r),r=r?"?"+r:""),
a&&a.sort&&!a.queryStr){r+=(r?"&":"?")+"sort(";for(var c=0;c<a.sort.length;c++){var s=a.sort[c];
r+=(c>0?",":"")+(s.descending?"-":"+")+encodeURIComponent(s.attribute)}r+=")"}var u={
url:n+(null==r?"":r),handleAs:o?"json":"text",contentType:o?"application/json":"text/plain",
sync:e.rpc._sync,headers:{Accept:o?"application/json,application/javascript":"*/*"
}};return a&&(a.start>=0||a.count>=0)&&(u.headers.Range="items="+(a.start||"0")+"-"+("count"in a&&a.count!=1/0?a.count+(a.start||0)-1:"")),
e.rpc._sync=!1,u},s("put"),s("post"),s("delete"),u.servicePath=n,u},r._index={},r._timeStamps={},
r._change=function(e,r,o,a){var c=r._getRequest(o);return c[e+"Data"]=a,n(t.xhr(e.toUpperCase(),c,!0),r);
},r._get=function(e,r,o){return o=o||{},n(t.xhrGet(e._getRequest(r,o)),e,o.start>=0||o.count>=0,r);
},r});