define(["../_base/lang","./Promise","../Evented"],function(t,e,n){"use strict";function r(t){
setTimeout(function(){c.apply(o,t)},0)}var o=new n,c=o.emit;return o.emit=null,e.prototype.trace=function(){
var e=t._toArray(arguments);return this.then(function(t){r(["resolved",t].concat(e));
},function(t){r(["rejected",t].concat(e))},function(t){r(["progress",t].concat(e));
}),this},e.prototype.traceRejected=function(){var e=t._toArray(arguments);return this.otherwise(function(t){
r(["rejected",t].concat(e))}),this},o});