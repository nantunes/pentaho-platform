dojo.provide("dojox.data.restListener"),dojox.data.restListener=function(e){var o=e.channel,t=dojox.rpc.JsonRest,s=t.getServiceAndId(o).service,d=dojox.json.ref.resolveJson(e.result,{
defaultId:"put"==e.event&&o,index:dojox.rpc.Rest._index,idPrefix:s.servicePath.replace(/[^\/]*$/,""),
idAttribute:t.getIdAttribute(s),schemas:t.schemas,loader:t._loader,assignAbsoluteIds:!0
}),r=dojox.rpc.Rest._index&&dojox.rpc.Rest._index[o],n="on"+e.event.toLowerCase(),i=s&&s._store;
if(r&&r[n])return void r[n](d);if(i)switch(n){case"onpost":i.onNew(d);break;case"ondelete":
i.onDelete(r)}};