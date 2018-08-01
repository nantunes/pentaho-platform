dojo.provide("dojox.lang.functional.curry"),dojo.require("dojox.lang.functional.lambda"),
function(){var r=dojox.lang.functional,n=Array.prototype,a=function(r){return function(){
var t=r.args.concat(n.slice.call(arguments,0));return arguments.length+r.args.length<r.arity?a({
func:r.func,arity:r.arity,args:t}):r.func.apply(this,t)}};dojo.mixin(r,{curry:function(n,t){
return n=r.lambda(n),t="number"==typeof t?t:n.length,a({func:n,arity:t,args:[]})},
arg:{},partial:function(a){var t,u=arguments,e=u.length,o=new Array(e-1),l=[],i=1;
for(a=r.lambda(a);e>i;++i)t=u[i],o[i-1]=t,t===r.arg&&l.push(i-1);return function(){
for(var r=n.slice.call(o,0),t=0,u=l.length;u>t;++t)r[l[t]]=arguments[t];return a.apply(this,r);
}},mixer:function(n,a){return n=r.lambda(n),function(){for(var r=new Array(a.length),t=0,u=a.length;u>t;++t)r[t]=arguments[a[t]];
return n.apply(this,r)}},flip:function(n){return n=r.lambda(n),function(){for(var r=arguments,a=r.length-1,t=new Array(a+1),u=0;a>=u;++u)t[a-u]=r[u];
return n.apply(this,t)}}})}();