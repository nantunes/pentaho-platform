dojo.provide("dojox.lang.aspect.tracer"),function(){var t=dojox.lang.aspect,o=function(t){
this.method=t?"group":"log",t&&(this.after=this._after)};dojo.extend(o,{before:function(){
var o=t.getContext(),e=o.joinPoint,n=Array.prototype.join.call(arguments,", ");console[this.method](o.instance,"=>",e.targetName+"("+n+")");
},afterReturning:function(o){var e=t.getContext().joinPoint;"undefined"!=typeof o?console.log(e.targetName+"() returns:",o):console.log(e.targetName+"() returns");
},afterThrowing:function(o){console.log(t.getContext().joinPoint.targetName+"() throws:",o);
},_after:function(t){console.groupEnd()}}),t.tracer=function(t){return new o(t)}}();