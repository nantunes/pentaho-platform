define(["dojo/_base/array","dojo/_base/lang","dojo/Stateful","./StatefulArray"],function(e,t,n,r){
var a={getType:function(e){return t.isArray(e)?"array":t.isFunction((e||{}).getTime)?"date":null!=e&&("[object Object]"=={}.toString.call(e)||t.isFunction((e||{}).set)&&t.isFunction((e||{}).watch))?"object":"value";
},equalsArray:function(e,t){for(var n=0,r=Math.max(e.length,t.length);r>n;n++)if(!u(e[n],t[n]))return!1;
return!0},equalsDate:function(e,t){return e.getTime()==t.getTime()},equalsObject:function(e,r){
var a=t.mixin({},e,r);for(var i in a)if(!(i in n.prototype||"_watchCallbacks"==i||u(e[i],r[i])))return!1;
return!0},equalsValue:function(e,t){return e===t}},u=function(e,t,n){var r=n||u,a=[r.getType(e),r.getType(t)];
return a[0]!=a[1]?!1:r["equals"+a[0].replace(/^[a-z]/,function(e){return e.toUpperCase();
})](e,t)};return t.setObject("dojox.mvc.equals",t.mixin(u,a))});