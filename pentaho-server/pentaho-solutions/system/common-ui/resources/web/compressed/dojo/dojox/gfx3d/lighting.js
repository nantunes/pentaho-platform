define(["dojo/_base/lang","dojo/_base/Color","dojo/_base/declare","dojox/gfx/_base","./_base"],function(o,r,t,a,n){
var l=n.lighting={black:function(){return{r:0,g:0,b:0,a:1}},white:function(){return{
r:1,g:1,b:1,a:1}},toStdColor:function(o){return o=a.normalizeColor(o),{r:o.r/255,
g:o.g/255,b:o.b/255,a:o.a}},fromStdColor:function(o){return new r([Math.round(255*o.r),Math.round(255*o.g),Math.round(255*o.b),o.a]);
},scaleColor:function(o,r){return{r:o*r.r,g:o*r.g,b:o*r.b,a:o*r.a}},addColor:function(o,r){
return{r:o.r+r.r,g:o.g+r.g,b:o.b+r.b,a:o.a+r.a}},multiplyColor:function(o,r){return{
r:o.r*r.r,g:o.g*r.g,b:o.b*r.b,a:o.a*r.a}},saturateColor:function(o){return{r:o.r<0?0:o.r>1?1:o.r,
g:o.g<0?0:o.g>1?1:o.g,b:o.b<0?0:o.b>1?1:o.b,a:o.a<0?0:o.a>1?1:o.a}},mixColor:function(o,r,t){
return l.addColor(l.scaleColor(t,o),l.scaleColor(1-t,r))},diff2Color:function(o,r){
var t=o.r-r.r,a=o.g-r.g,n=o.b-r.b,l=o.a-r.a;return t*t+a*a+n*n+l*l},length2Color:function(o){
return o.r*o.r+o.g*o.g+o.b*o.b+o.a*o.a},dot:function(o,r){return o.x*r.x+o.y*r.y+o.z*r.z;
},scale:function(o,r){return{x:o*r.x,y:o*r.y,z:o*r.z}},add:function(o,r){return{x:o.x+r.x,
y:o.y+r.y,z:o.z+r.z}},saturate:function(o){return Math.min(Math.max(o,0),1)},length:function(o){
return Math.sqrt(n.lighting.dot(o,o))},normalize:function(o){return l.scale(1/l.length(o),o);
},faceforward:function(o,r){var t=n.lighting,a=t.dot(r,o)<0?1:-1;return t.scale(a,o);
},reflect:function(o,r){var t=n.lighting;return t.add(o,t.scale(-2*t.dot(o,r),r));
},diffuse:function(o,r){for(var t=l.black(),a=0;a<r.length;++a){var n=r[a],i=l.dot(l.normalize(n.direction),o);
t=l.addColor(t,l.scaleColor(i,n.color))}return l.saturateColor(t)},specular:function(o,r,t,a){
for(var n=l.black(),i=0;i<a.length;++i){var e=a[i],s=l.normalize(l.add(l.normalize(e.direction),r)),h=Math.pow(Math.max(0,l.dot(o,s)),1/t);
n=l.addColor(n,l.scaleColor(h,e.color))}return l.saturateColor(n)},phong:function(o,r,t,a){
o=l.normalize(o);for(var n=l.black(),i=0;i<a.length;++i){var e=a[i],s=l.reflect(l.scale(-1,l.normalize(r)),o),h=Math.pow(Math.max(0,l.dot(s,l.normalize(e.direction))),t);
n=l.addColor(n,l.scaleColor(h,e.color))}return l.saturateColor(n)}};return t("dojox.gfx3d.lighting.Model",null,{
constructor:function(o,r,t,a){this.incident=l.normalize(o),this.lights=[];for(var n=0;n<r.length;++n){
var i=r[n];this.lights.push({direction:l.normalize(i.direction),color:l.toStdColor(i.color)
})}this.ambient=l.toStdColor(t.color?t.color:"white"),this.ambient=l.scaleColor(t.intensity,this.ambient),
this.ambient=l.scaleColor(this.ambient.a,this.ambient),this.ambient.a=1,this.specular=l.toStdColor(a?a:"white"),
this.specular=l.scaleColor(this.specular.a,this.specular),this.specular.a=1,this.npr_cool={
r:0,g:0,b:.4,a:1},this.npr_warm={r:.4,g:.4,b:.2,a:1},this.npr_alpha=.2,this.npr_beta=.6,
this.npr_scale=.6},constant:function(o,r,t){t=l.toStdColor(t);var a=t.a,n=l.scaleColor(a,t);
return n.a=a,l.fromStdColor(l.saturateColor(n))},matte:function(o,r,t){"string"==typeof r&&(r=l.finish[r]),
t=l.toStdColor(t),o=l.faceforward(l.normalize(o),this.incident);var a=l.scaleColor(r.Ka,this.ambient),n=l.saturate(-4*l.dot(o,this.incident)),i=l.scaleColor(n*r.Kd,l.diffuse(o,this.lights)),e=l.scaleColor(t.a,l.multiplyColor(t,l.addColor(a,i)));
return e.a=t.a,l.fromStdColor(l.saturateColor(e))},metal:function(o,r,t){"string"==typeof r&&(r=l.finish[r]),
t=l.toStdColor(t),o=l.faceforward(l.normalize(o),this.incident);var a,n,i=l.scale(-1,this.incident),e=l.scaleColor(r.Ka,this.ambient),s=l.saturate(-4*l.dot(o,this.incident));
return a="phong"in r?l.scaleColor(s*r.Ks*r.phong,l.phong(o,i,r.phong_size,this.lights)):l.scaleColor(s*r.Ks,l.specular(o,i,r.roughness,this.lights)),
n=l.scaleColor(t.a,l.addColor(l.multiplyColor(t,e),l.multiplyColor(this.specular,a))),
n.a=t.a,l.fromStdColor(l.saturateColor(n))},plastic:function(o,r,t){"string"==typeof r&&(r=l.finish[r]),
t=l.toStdColor(t),o=l.faceforward(l.normalize(o),this.incident);var a,n,i=l.scale(-1,this.incident),e=l.scaleColor(r.Ka,this.ambient),s=l.saturate(-4*l.dot(o,this.incident)),h=l.scaleColor(s*r.Kd,l.diffuse(o,this.lights));
return a="phong"in r?l.scaleColor(s*r.Ks*r.phong,l.phong(o,i,r.phong_size,this.lights)):l.scaleColor(s*r.Ks,l.specular(o,i,r.roughness,this.lights)),
n=l.scaleColor(t.a,l.addColor(l.multiplyColor(t,l.addColor(e,h)),l.multiplyColor(this.specular,a))),
n.a=t.a,l.fromStdColor(l.saturateColor(n))},npr:function(o,r,t){"string"==typeof r&&(r=l.finish[r]),
t=l.toStdColor(t),o=l.faceforward(l.normalize(o),this.incident);var a=l.scaleColor(r.Ka,this.ambient),n=l.saturate(-4*l.dot(o,this.incident)),i=l.scaleColor(n*r.Kd,l.diffuse(o,this.lights)),e=l.scaleColor(t.a,l.multiplyColor(t,l.addColor(a,i))),s=l.addColor(this.npr_cool,l.scaleColor(this.npr_alpha,e)),h=l.addColor(this.npr_warm,l.scaleColor(this.npr_beta,e)),c=(1+l.dot(this.incident,o))/2,e=l.scaleColor(this.npr_scale,l.addColor(e,l.mixColor(s,h,c)));
return e.a=t.a,l.fromStdColor(l.saturateColor(e))}}),n.lighting.finish={defaults:{
Ka:.1,Kd:.6,Ks:0,roughness:.05},dull:{Ka:.1,Kd:.6,Ks:.5,roughness:.15},shiny:{Ka:.1,
Kd:.6,Ks:1,roughness:.001},glossy:{Ka:.1,Kd:.6,Ks:1,roughness:1e-4},phong_dull:{Ka:.1,
Kd:.6,Ks:.5,phong:.5,phong_size:1},phong_shiny:{Ka:.1,Kd:.6,Ks:1,phong:1,phong_size:200
},phong_glossy:{Ka:.1,Kd:.6,Ks:1,phong:1,phong_size:300},luminous:{Ka:1,Kd:0,Ks:0,
roughness:.05},metalA:{Ka:.35,Kd:.3,Ks:.8,roughness:.05},metalB:{Ka:.3,Kd:.4,Ks:.7,
roughness:1/60},metalC:{Ka:.25,Kd:.5,Ks:.8,roughness:1/80},metalD:{Ka:.15,Kd:.6,Ks:.8,
roughness:.01},metalE:{Ka:.1,Kd:.7,Ks:.8,roughness:1/120}},l});