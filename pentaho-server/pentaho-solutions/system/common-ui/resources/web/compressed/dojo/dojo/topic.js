define(["./Evented"],function(n){var e=new n;return{publish:function(n,r){return e.emit.apply(e,arguments);
},subscribe:function(n,r){return e.on.apply(e,arguments)}}});