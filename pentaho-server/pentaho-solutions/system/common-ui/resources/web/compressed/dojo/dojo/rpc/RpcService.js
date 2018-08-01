define(["../_base/array","../_base/declare","../_base/Deferred","../_base/kernel","../_base/lang","../_base/url","../_base/xhr"],function(r,e,t,s,i,n,o){
return e("dojo.rpc.RpcService",null,{constructor:function(r){if(r)if(i.isString(r)||r instanceof n){
if(r instanceof n)var e=r+"";else e=r;var t=o.get({url:e,handleAs:"json-comment-optional",
sync:!0});t.addCallback(this,"processSmd"),t.addErrback(function(){throw new Error("Unable to load SMD from "+r);
})}else r.smdStr?this.processSmd(s.eval("("+r.smdStr+")")):(r.serviceUrl&&(this.serviceUrl=r.serviceUrl),
this.timeout=r.timeout||0,"strictArgChecks"in r&&(this.strictArgChecks=r.strictArgChecks),
this.processSmd(r))},strictArgChecks:!0,serviceUrl:"",parseResults:function(r){return r;
},errorCallback:function(r){return function(e){r.errback(e.message)}},resultCallback:function(r){
return i.hitch(this,function(e){if(null!=e.error){var t;"object"==typeof e.error?(t=new Error(e.error.message),
t.code=e.error.code,t.error=e.error.error):t=new Error(e.error),t.id=e.id,t.errorObject=e,
r.errback(t)}else r.callback(this.parseResults(e))})},generateMethod:function(r,e,s){
return i.hitch(this,function(){var n=new t;if(this.strictArgChecks&&null!=e&&arguments.length!=e.length)throw new Error("Invalid number of parameters for remote method.");
return this.bind(r,i._toArray(arguments),n,s),n})},processSmd:function(e){e.methods&&r.forEach(e.methods,function(r){
if(r&&r.name&&(this[r.name]=this.generateMethod(r.name,r.parameters,r.url||r.serviceUrl||r.serviceURL),
!i.isFunction(this[r.name])))throw new Error("RpcService: Failed to create"+r.name+"()");
},this),this.serviceUrl=e.serviceUrl||e.serviceURL,this.required=e.required,this.smd=e;
}})});