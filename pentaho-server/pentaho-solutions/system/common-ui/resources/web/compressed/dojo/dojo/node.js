define(["./has"],function(e){if(!e("host-node"))throw new Error("node plugin failed to load because environment is not Node.js");
var n;if(!require.nodeRequire)throw new Error("node plugin failed to load because it cannot find the original Node.js require");
return n=require.nodeRequire("path"),{load:function(e,n,r){if(!n.nodeRequire)throw new Error("Cannot find native require function");
r(function(e,n){var r,i=define;define=void 0;try{r=n(e)}finally{define=i}return r;
}(e,n.nodeRequire))},normalize:function(e,r){if("."===e.charAt(0)){var i=require.toUrl(r(".")).replace("/",n.sep),o=e.split("/");
o.unshift(i),e=n.join.apply(n,o)}return e}}});