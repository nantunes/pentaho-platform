define([],function(){return{computeTotalAngle:function(n,e,t){return n==e?360:this.computeAngle(n,e,t,360);
},modAngle:function(n,e){if(void 0==e&&(e=6.28318530718),n>=e){do n-=e;while(n>=e);
}else for(;0>n;)n+=e;return n},computeAngle:function(n,e,t,o){void 0==o&&(o=6.28318530718);
var i;return e==n?o:(i="clockwise"==t?n>e?o-(n-e):e-n:n>e?n-e:o-(e-n),this.modAngle(i,o));
},toRadians:function(n){return n*Math.PI/180},toDegrees:function(n){return 180*n/Math.PI;
}}});