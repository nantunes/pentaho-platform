define(["dojo/_base/declare","dojox/data/JsonRestStore","dojox/rpc/ProxiedPath"],function(e,t,o){
return e("dojox.data.S3Store",t,{_processResults:function(e){for(var t=e.getElementsByTagName("Key"),o=[],a=this,n=0;n<t.length;n++){
var r=t[n],d={_loadObject:function(e,t){return function(t){delete this._loadObject,
a.service(e).addCallback(t)}}(r.firstChild.nodeValue,d)};o.push(d)}return{totalCount:o.length,
items:o}}})});