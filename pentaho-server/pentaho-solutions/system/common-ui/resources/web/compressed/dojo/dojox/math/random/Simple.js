define(["dojo"],function(n){return n.declare("dojox.math.random.Simple",null,{destroy:function(){},
nextBytes:function(n){for(var o=0,t=n.length;t>o;++o)n[o]=Math.floor(256*Math.random());
}})});