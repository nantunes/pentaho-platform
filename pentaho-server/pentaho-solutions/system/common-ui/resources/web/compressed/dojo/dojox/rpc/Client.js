define("dojox/rpc/Client",["dojo","dojox"],function(e,r){return e.getObject("rpc.Client",!0,r),
e._defaultXhr=e.xhr,e.xhr=function(t,n){var d=n.headers=n.headers||{};return d["Client-Id"]=r.rpc.Client.clientId,
d["Seq-Id"]=r._reqSeqId=(r._reqSeqId||0)+1,e._defaultXhr.apply(e,arguments)},r.rpc.Client.clientId=(Math.random()+"").substring(2,14)+((new Date).getTime()+"").substring(8,13),
r.rpc.Client});