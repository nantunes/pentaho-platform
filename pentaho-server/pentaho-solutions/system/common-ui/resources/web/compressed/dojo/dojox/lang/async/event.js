dojo.provide("dojox.lang.async.event"),function(){var n=dojo,o=dojox.lang.async.event;
o.from=function(o,e){return function(){var c,r=function(){c&&(n.disconnect(c),c=null);
},t=new n.Deferred(r);return c=n.connect(o,e,function(n){r(),t.callback(n)}),t}},
o.failOn=function(o,e){return function(){var c,r=function(){c&&(n.disconnect(c),c=null);
},t=new n.Deferred(r);return c=n.connect(o,e,function(n){r(),t.errback(new Error(n));
}),t}}}();