define(["dojo/_base/lang","dojo/_base/config","dojo/_base/array","dojo/has"],function(n,o,i,e){
function t(n,o,i,e){return[[i.canConvertToLoggable||!i.declaredClass?i:i.declaredClass,e].join(":"),[n.canConvertToLoggable||!n.declaredClass?n:n.declaredClass,o].join(":")];
}function a(o,i){return o===i||"number"==typeof o&&isNaN(o)&&"number"==typeof i&&isNaN(i)||n.isFunction((o||{}).getTime)&&n.isFunction((i||{}).getTime)&&o.getTime()==i.getTime()||(n.isFunction((o||{}).equals)?o.equals(i):n.isFunction((i||{}).equals)?i.equals(o):!1);
}function s(o,a,s,r,c,l,g,u,d,f){if(!(s(d,u)||"*"==c&&i.indexOf(r.get("properties")||[g],g)<0||"*"==c&&g in(f||{}))){
var p="*"==c?g:c;if(e("mvc-bindings-log-api"))var v=t(r,p,l,g);try{d=o?o(d,a):d}catch(m){
return void(e("mvc-bindings-log-api")&&console.log("Copy from"+v.join(" to ")+" was not done as an error is thrown in the converter."));
}e("mvc-bindings-log-api")&&console.log(v.reverse().join(" is being copied from: ")+" (Value: "+d+" from "+u+")"),
n.isFunction(r.set)?r.set(p,d):r[p]=d}}var r=n.getObject("dojox.mvc",!0);e.add("mvc-bindings-log-api",(o.mvc||{}).debugBindings);
var c;e("mvc-bindings-log-api");var l,g={from:1,to:2,both:3};return c=function(o,a,g,u,d){
var f,p,v,m=(d||{}).converter;m&&(f={source:o,target:g},p=m.format&&n.hitch(f,m.format),
v=m.parse&&n.hitch(f,m.parse));var b,h=[],j=[],w=n.mixin({},o.constraints,g.constraints),y=(d||{}).bindDirection||r.both,F=(d||{}).equals||c.equals;
if(e("mvc-bindings-log-api"))var C=t(o,a,g,u);if("*"==u){if("*"!=a)throw new Error("Unmatched wildcard is specified between source and target.");
if(b=g.get("properties"),!b){b=[];for(var q in g)g.hasOwnProperty(q)&&"_watchCallbacks"!=q&&b.push(q);
}j=g.get("excludes")}else b=[a];y&r.from&&(n.isFunction(o.set)&&n.isFunction(o.watch)?h.push(o.watch.apply(o,("*"!=a?[a]:[]).concat([function(n,i,e){
s(p,w,F,g,u,o,n,i,e,j)}]))):e("mvc-bindings-log-api")&&console.log(C.reverse().join(" is not a stateful property. Its change is not reflected to ")+"."),
i.forEach(b,function(i){if("*"!=u||!(i in(j||{}))){var e=n.isFunction(o.get)?o.get(i):o[i];
s(p,w,F,g,"*"==u?i:u,o,i,l,e)}})),y&r.to&&(y&r.from||i.forEach(b,function(i){if("*"!=u||!(i in(j||{}))){
var e=n.isFunction(g.get)?g.get(u):g[u];s(v,w,F,o,i,g,"*"==u?i:u,l,e)}}),n.isFunction(g.set)&&n.isFunction(g.watch)?h.push(g.watch.apply(g,("*"!=u?[u]:[]).concat([function(n,i,e){
s(v,w,F,o,a,g,n,i,e,j)}]))):e("mvc-bindings-log-api")&&console.log(C.join(" is not a stateful property. Its change is not reflected to ")+".")),
e("mvc-bindings-log-api")&&console.log(C.join(" is bound to: "));var x={};return x.unwatch=x.remove=function(){
for(var n=null;n=h.pop();)n.unwatch();e("mvc-bindings-log-api")&&console.log(C.join(" is unbound from: "));
},x},n.mixin(r,g),n.setObject("dojox.mvc.sync",n.mixin(c,{equals:a},g))});