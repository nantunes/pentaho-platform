define(["dojo/_base/lang","dojo/Deferred","dojo/promise/all","dojo/when"],function(e,r,o,n){
function d(o,d,a,t){var i=o[d].params?o[d].params:{},l=o[d].modelLoader?o[d].modelLoader:"dojox/app/utils/simpleModel";
try{var s=require(l)}catch(m){throw new Error(l+" must be listed in the dependencies");
}var u,c=new r;try{u=s(o,i,d)}catch(m){throw new Error("Error creating "+l+" for model named ["+d+"]: "+m.message);
}return n(u,e.hitch(this,function(e){return t[d]=e,a.log("in app/model, for item=[",d,"] loadedModels =",t),
c.resolve(t),t}),function(e){throw new Error("Error loading model named ["+d+"]: "+e.message);
}),c}return function(r,n,a){var t={};if(n.loadedModels&&e.mixin(t,n.loadedModels),
r){var i=[];for(var l in r)"_"!==l.charAt(0)&&i.push(d(r,l,a,t));return 0==i.length?t:o(i);
}return t}});