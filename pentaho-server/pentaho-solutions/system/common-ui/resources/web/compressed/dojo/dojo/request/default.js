define(["exports","require","../has"],function(o,e,r){var n,t=r("config-requestProvider");
r("host-browser")?n="./xhr":r("host-node")&&(n="./node"),t||(t=n),o.getPlatformDefaultId=function(){
return n},o.load=function(o,r,f,i){e(["platform"==o?n:t],function(o){f(o)})}});