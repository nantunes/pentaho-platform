define(["dojo/_base/lang","dojo/_base/array","./_base"],function(r,t,n){return n.vector={
sum:function(){var r={x:0,y:0,z:0};return t.forEach(arguments,function(t){r.x+=t.x,
r.y+=t.y,r.z+=t.z}),r},center:function(){var r=arguments.length;if(0==r)return{x:0,
y:0,z:0};var t=n.vector.sum(arguments);return{x:t.x/r,y:t.y/r,z:t.z/r}},substract:function(r,t){
return{x:r.x-t.x,y:r.y-t.y,z:r.z-t.z}},_crossProduct:function(r,t,n,e,o,u){return{
x:t*u-n*o,y:n*e-r*u,z:r*o-t*e}},crossProduct:function(r,e,o,u,c,s){return 6==arguments.length&&t.every(arguments,function(r){
return"number"==typeof r})?n.vector._crossProduct(r,e,o,u,c,s):n.vector._crossProduct(r.x,r.y,r.z,e.x,e.y,e.z);
},_dotProduct:function(r,t,n,e,o,u){return r*e+t*o+n*u},dotProduct:function(r,e,o,u,c,s){
return 6==arguments.length&&t.every(arguments,function(r){return"number"==typeof r;
})?n.vector._dotProduct(r,e,o,u,c,s):n.vector._dotProduct(r.x,r.y,r.z,e.x,e.y,e.z);
},normalize:function(r,t,e){var o,u,c;r instanceof Array?(o=r[0],u=r[1],c=r[2]):(o=r,
u=t,c=e);var s=n.vector.substract(u,o),a=n.vector.substract(c,o);return n.vector.crossProduct(s,a);
}},n.vector});