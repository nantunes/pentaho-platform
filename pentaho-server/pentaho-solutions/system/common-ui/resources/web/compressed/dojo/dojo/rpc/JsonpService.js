define(["../_base/array","../_base/declare","../_base/lang","./RpcService","../io/script"],function(e,r,i,t,a){
return r("dojo.rpc.JsonpService",t,{constructor:function(r,t){this.required&&(t&&i.mixin(this.required,t),
e.forEach(this.required,function(e){if(""==e||void 0==e)throw new Error("Required Service Argument not found: "+e);
}))},strictArgChecks:!1,bind:function(e,r,i,t){var c=a.get({url:t||this.serviceUrl,
callbackParamName:this.callbackParamName||"callback",content:this.createRequest(r),
timeout:this.timeout,handleAs:"json",preventCache:!0});c.addCallbacks(this.resultCallback(i),this.errorCallback(i));
},createRequest:function(e){var r=i.isArrayLike(e)&&1==e.length?e[0]:{};return i.mixin(r,this.required),
r}})});