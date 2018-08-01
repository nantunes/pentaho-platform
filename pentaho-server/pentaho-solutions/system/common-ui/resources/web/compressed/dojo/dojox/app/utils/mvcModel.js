define(["dojo/_base/lang","dojo/Deferred","dojo/when","dojox/mvc/getStateful"],function(e,r,t,o){
return function(a,n,d){var s,u={},i=new r,c=function(e){var r={};for(var t in e)"_"!==t.charAt(0)&&(r[t]=e[t]);
return r};if(n.store)s={store:n.store.store,query:n.query?c(n.query):n.store.query?c(n.store.query):{}
};else if(n.datastore){try{var l=require("dojo/store/DataStore")}catch(y){throw new Error("When using datastore the dojo/store/DataStore module must be listed in the dependencies");
}s={store:new l({store:n.datastore.store}),query:c(n.query)}}else n.data?(n.data&&e.isString(n.data)&&(n.data=e.getObject(n.data)),
s={data:n.data,query:{}}):console.warn("mvcModel: Missing parameters.");var f=a[d].type?a[d].type:"dojox/mvc/EditStoreRefListController";
try{var h=require(f)}catch(y){throw new Error(f+" must be listed in the dependencies");
}var q,v=new h(s);try{if(v.queryStore)q=v.queryStore(s.query);else{var m=v._refSourceModelProp||v._refModelProp||"model";
v.set(m,o(s.data)),q=v}}catch(j){return i.reject("load mvc model error."),i.promise;
}return t(q,e.hitch(this,function(){return u=v,i.resolve(u),u}),function(){i.reject("load model error.");
}),i}});