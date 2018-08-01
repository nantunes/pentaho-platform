define(["dojo/_base/lang","dojo/Deferred","dojo/when"],function(e,r,t){return function(o,s,a){
var d,n,u={},i=new r,l=function(e){var r={};for(var t in e)"_"!==t.charAt(0)&&(r[t]=e[t]);
return r};if(s.store){if(!s.store.params)throw new Error("Invalid store for model ["+a+"]");
if(s.store.params.data||s.store.params.store)d={store:s.store.store,query:s.query?l(s.query):s.store.query?l(s.store.query):{}
};else if(s.store.params.url){try{n=require("dojo/store/DataStore")}catch(y){throw new Error("dojo/store/DataStore must be listed in the dependencies");
}d={store:new n({store:s.store.store}),query:s.query?l(s.query):s.store.query?l(s.store.query):{}
}}else s.store.store&&(d={store:s.store.store,query:s.query?l(s.query):s.store.query?l(s.store.query):{}
})}else if(s.datastore){try{n=require("dojo/store/DataStore")}catch(y){throw new Error("When using datastore the dojo/store/DataStore module must be listed in the dependencies");
}d={store:new n({store:s.datastore.store}),query:l(s.query)}}else s.data?(s.data&&e.isString(s.data)&&(s.data=e.getObject(s.data)),
d={data:s.data,query:{}}):console.warn("simpleModel: Missing parameters.");var q;try{
q=d.store?d.store.query():d.data}catch(c){return i.reject("load simple model error."),
i.promise}return q.then?(t(q,e.hitch(this,function(e){return u=e,i.resolve(u),u}),function(){
loadModelLoaderDeferred.reject("load model error.")}),i):(u=q,i.resolve(u),u)}});