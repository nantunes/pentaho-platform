dojo.provide("dojox.lang.functional.util"),dojo.require("dojox.lang.functional.lambda"),
function(){var n=dojox.lang.functional;dojo.mixin(n,{inlineLambda:function(a,o,r){
var i=n.rawLambda(a);r&&n.forEach(i.args,r);var t,l="string"==typeof o,d=l?i.args.length:Math.min(i.args.length,o.length),g=new Array(4*d+4),e=1;
for(t=0;d>t;++t)g[e++]=i.args[t],g[e++]="=",g[e++]=l?o+"["+t+"]":o[t],g[e++]=",";return g[0]="(",
g[e++]="(",g[e++]=i.body,g[e]="))",g.join("")}})}();