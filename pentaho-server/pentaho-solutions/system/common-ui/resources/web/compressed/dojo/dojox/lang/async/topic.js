dojo.provide("dojox.lang.async.topic"),function(){var n=dojo,r=dojox.lang.async.topic;
r.from=function(r){return function(){var u,o=function(){u&&(n.unsubscribe(u),u=null);
},e=new n.Deferred(o);return u=n.subscribe(r,function(){o(),e.callback(arguments);
}),e}},r.failOn=function(r){return function(){var u,o=function(){u&&(n.unsubscribe(u),
u=null)},e=new n.Deferred(o);return u=n.subscribe(r,function(n){o(),e.errback(new Error(arguments));
}),e}}}();