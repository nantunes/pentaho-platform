define([],function(){return{declare:function(){var t,r,o=0,e=arguments;e.length<2&&console.error("drawing.util.oo.declare; not enough arguments"),
2==e.length?(t=e[0],r=e[1]):(e=Array.prototype.slice.call(arguments),r=e.pop(),t=e.pop(),
o=1);for(var n in r)t.prototype[n]=r[n];return o&&(e.unshift(t),t=this.extend.apply(this,e)),
t},extend:function(){var t=arguments,r=t[0];t.length<2&&console.error("drawing.util.oo.extend; not enough arguments");
for(var o=function(){for(var o=1;o<t.length;o++)t[o].prototype.constructor.apply(this,arguments);
r.prototype.constructor.apply(this,arguments)},e=1;e<t.length;e++)for(var n in t[e].prototype)o.prototype[n]=t[e].prototype[n];
for(n in r.prototype)o.prototype[n]=r.prototype[n];return o}}});