define(["dojo","dojox","dojox/data/JsonRestStore"],function(t,e){var r=t.declare("dojox.data.CouchDBRestStore",e.data.JsonRestStore,{
save:function(t){for(var e=this.inherited(arguments),r=this.service.servicePath,o=0;o<e.length;o++)!function(t,e){
e.addCallback(function(e){return e&&(t.__id=r+e.id,t._rev=e.rev),e})}(e[o].content,e[o].deferred);
},fetch:function(t){return t.query=t.query||"_all_docs?",t.start&&(t.query=(t.query?t.query+"&":"")+"skip="+t.start,
delete t.start),t.count&&(t.query=(t.query?t.query+"&":"")+"limit="+t.count,delete t.count),
this.inherited(arguments)},_processResults:function(t){var r=t.rows;if(r){for(var o=this.service.servicePath,n=0;n<r.length;n++){
var s=r[n].value;s.__id=o+r[n].id,s._id=r[n].id,s._loadObject=e.rpc.JsonRest._loader,
r[n]=s}return{totalCount:t.total_rows,items:t.rows}}return{items:t}}});return r.getStores=function(r){
var o=t.xhrGet({url:r+"_all_dbs",handleAs:"json",sync:!0}),n={};return o.addBoth(function(t){
for(var o=0;o<t.length;o++)n[t[o]]=new e.data.CouchDBRestStore({target:r+t[o],idAttribute:"_id"
});return n}),n},r});