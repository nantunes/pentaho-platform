Array.prototype.map||(Array.prototype.map=function(r){var e=this.length;if("function"!=typeof r)throw new TypeError;
for(var o=new Array(e),n=arguments[1],t=0;e>t;t++)t in this&&(o[t]=r.call(n,this[t],t,this));
return o}),Array.prototype.indexOf||(Array.prototype.indexOf=function(r){"use strict";
if(null==this)throw new TypeError;var e=Object(this),o=e.length>>>0;if(0===o)return-1;
var n=0;if(arguments.length>0&&(n=Number(arguments[1]),n!=n?n=0:0!=n&&n!=1/0&&n!=-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n)))),
n>=o)return-1;for(var t=n>=0?n:Math.max(o-Math.abs(n),0);o>t;t++)if(t in e&&e[t]===r)return t;
return-1}),Function.prototype.method=Function.prototype.method||function(r,e){return this.prototype[r]=e,
this};var wd=wd||{};wd.loglevels=["debug","info","warn","error","exception"],wd.loglevel="debug",
wd.log=function(r,e){e=e||"info",wd.loglevels.indexOf(e)<wd.loglevels.indexOf(wd.loglevel)||"undefined"!=typeof console&&(e&&console[e]?console[e]("["+e+"] WD: "+r):"exception"!==e||console.exception?console.log("WD: "+r):console.error("["+e+"] WD: "+(r.stack||r)));
},wd.warn=function(r){return wd.log(r,"warn")},wd.error=function(r){return wd.log(r,"error");
},wd.info=function(r){return wd.log(r,"info")},wd.debug=function(r){return wd.log(r,"debug");
};