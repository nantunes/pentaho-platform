dojo.provide("dojox.lang.async.timeout"),function(){var n=dojo,o=dojox.lang.async.timeout;
o.from=function(o){return function(){var e,t=function(){e&&(clearTimeout(e),e=null);
},r=new n.Deferred(t);return e=setTimeout(function(){t(),r.callback(o)},o),r}},o.failOn=function(o){
return function(){var e,t=function(){e&&(clearTimeout(e),e=null)},r=new n.Deferred(t);
return e=setTimeout(function(){t(),r.errback(o)},o),r}}}();