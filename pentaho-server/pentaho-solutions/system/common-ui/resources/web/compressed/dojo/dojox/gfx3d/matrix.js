define(["dojo/_base/lang","./_base"],function(x,y){return y.matrix={_degToRad:function(x){
return Math.PI*x/180},_radToDeg:function(x){return x/Math.PI*180}},y.matrix.Matrix3D=function(z){
if(z)if("number"==typeof z)this.xx=this.yy=this.zz=z;else if(z instanceof Array){
if(z.length>0){for(var t=y.matrix.normalize(z[0]),r=1;r<z.length;++r){var a=t,n=y.matrix.normalize(z[r]);
t=new y.matrix.Matrix3D,t.xx=a.xx*n.xx+a.xy*n.yx+a.xz*n.zx,t.xy=a.xx*n.xy+a.xy*n.yy+a.xz*n.zy,
t.xz=a.xx*n.xz+a.xy*n.yz+a.xz*n.zz,t.yx=a.yx*n.xx+a.yy*n.yx+a.yz*n.zx,t.yy=a.yx*n.xy+a.yy*n.yy+a.yz*n.zy,
t.yz=a.yx*n.xz+a.yy*n.yz+a.yz*n.zz,t.zx=a.zx*n.xx+a.zy*n.yx+a.zz*n.zx,t.zy=a.zx*n.xy+a.zy*n.yy+a.zz*n.zy,
t.zz=a.zx*n.xz+a.zy*n.yz+a.zz*n.zz,t.dx=a.xx*n.dx+a.xy*n.dy+a.xz*n.dz+a.dx,t.dy=a.yx*n.dx+a.yy*n.dy+a.yz*n.dz+a.dy,
t.dz=a.zx*n.dx+a.zy*n.dy+a.zz*n.dz+a.dz}x.mixin(this,t)}}else x.mixin(this,z)},x.extend(y.matrix.Matrix3D,{
xx:1,xy:0,xz:0,yx:0,yy:1,yz:0,zx:0,zy:0,zz:1,dx:0,dy:0,dz:0}),x.mixin(y.matrix,{identity:new y.matrix.Matrix3D,
translate:function(x,z,t){return arguments.length>1?new y.matrix.Matrix3D({dx:x,dy:z,
dz:t}):new y.matrix.Matrix3D({dx:x.x,dy:x.y,dz:x.z})},scale:function(x,z,t){return arguments.length>1?new y.matrix.Matrix3D({
xx:x,yy:z,zz:t}):"number"==typeof x?new y.matrix.Matrix3D({xx:x,yy:x,zz:x}):new y.matrix.Matrix3D({
xx:x.x,yy:x.y,zz:x.z})},rotateX:function(x){var z=Math.cos(x),t=Math.sin(x);return new y.matrix.Matrix3D({
yy:z,yz:-t,zy:t,zz:z})},rotateXg:function(x){return y.matrix.rotateX(y.matrix._degToRad(x));
},rotateY:function(x){var z=Math.cos(x),t=Math.sin(x);return new y.matrix.Matrix3D({
xx:z,xz:t,zx:-t,zz:z})},rotateYg:function(x){return y.matrix.rotateY(y.matrix._degToRad(x));
},rotateZ:function(x){var z=Math.cos(x),t=Math.sin(x);return new y.matrix.Matrix3D({
xx:z,xy:-t,yx:t,yy:z})},rotateZg:function(x){return y.matrix.rotateZ(y.matrix._degToRad(x));
},cameraTranslate:function(x,z,t){return arguments.length>1?new y.matrix.Matrix3D({
dx:-x,dy:-z,dz:-t}):new y.matrix.Matrix3D({dx:-x.x,dy:-x.y,dz:-x.z})},cameraRotateX:function(x){
var z=Math.cos(-x),t=Math.sin(-x);return new y.matrix.Matrix3D({yy:z,yz:-t,zy:t,zz:z
})},cameraRotateXg:function(x){return y.matrix.rotateX(y.matrix._degToRad(x))},cameraRotateY:function(x){
var z=Math.cos(-x),t=Math.sin(-x);return new y.matrix.Matrix3D({xx:z,xz:t,zx:-t,zz:z
})},cameraRotateYg:function(x){return y.matrix.rotateY(dojox.gfx3d.matrix._degToRad(x));
},cameraRotateZ:function(x){var z=Math.cos(-x),t=Math.sin(-x);return new y.matrix.Matrix3D({
xx:z,xy:-t,yx:t,yy:z})},cameraRotateZg:function(x){return y.matrix.rotateZ(y.matrix._degToRad(x));
},normalize:function(x){return x instanceof y.matrix.Matrix3D?x:new y.matrix.Matrix3D(x);
},clone:function(x){var z=new y.matrix.Matrix3D;for(var t in x)"number"==typeof x[t]&&"number"==typeof z[t]&&z[t]!=x[t]&&(z[t]=x[t]);
return z},invert:function(x){var z=y.matrix.normalize(x),t=z.xx*z.yy*z.zz+z.xy*z.yz*z.zx+z.xz*z.yx*z.zy-z.xx*z.yz*z.zy-z.xy*z.yx*z.zz-z.xz*z.yy*z.zx,r=new y.matrix.Matrix3D({
xx:(z.yy*z.zz-z.yz*z.zy)/t,xy:(z.xz*z.zy-z.xy*z.zz)/t,xz:(z.xy*z.yz-z.xz*z.yy)/t,
yx:(z.yz*z.zx-z.yx*z.zz)/t,yy:(z.xx*z.zz-z.xz*z.zx)/t,yz:(z.xz*z.yx-z.xx*z.yz)/t,
zx:(z.yx*z.zy-z.yy*z.zx)/t,zy:(z.xy*z.zx-z.xx*z.zy)/t,zz:(z.xx*z.yy-z.xy*z.yx)/t,
dx:-1*(z.xy*z.yz*z.dz+z.xz*z.dy*z.zy+z.dx*z.yy*z.zz-z.xy*z.dy*z.zz-z.xz*z.yy*z.dz-z.dx*z.yz*z.zy)/t,
dy:(z.xx*z.yz*z.dz+z.xz*z.dy*z.zx+z.dx*z.yx*z.zz-z.xx*z.dy*z.zz-z.xz*z.yx*z.dz-z.dx*z.yz*z.zx)/t,
dz:-1*(z.xx*z.yy*z.dz+z.xy*z.dy*z.zx+z.dx*z.yx*z.zy-z.xx*z.dy*z.zy-z.xy*z.yx*z.dz-z.dx*z.yy*z.zx)/t
});return r},_multiplyPoint:function(x,y,z,t){return{x:x.xx*y+x.xy*z+x.xz*t+x.dx,
y:x.yx*y+x.yy*z+x.yz*t+x.dy,z:x.zx*y+x.zy*z+x.zz*t+x.dz}},multiplyPoint:function(x,z,t,r){
var a=y.matrix.normalize(x);return"number"==typeof z&&"number"==typeof t&&"number"==typeof r?y.matrix._multiplyPoint(a,z,t,r):y.matrix._multiplyPoint(a,z.x,z.y,z.z);
},multiply:function(x){for(var z=y.matrix.normalize(x),t=1;t<arguments.length;++t){
var r=z,a=y.matrix.normalize(arguments[t]);z=new y.matrix.Matrix3D,z.xx=r.xx*a.xx+r.xy*a.yx+r.xz*a.zx,
z.xy=r.xx*a.xy+r.xy*a.yy+r.xz*a.zy,z.xz=r.xx*a.xz+r.xy*a.yz+r.xz*a.zz,z.yx=r.yx*a.xx+r.yy*a.yx+r.yz*a.zx,
z.yy=r.yx*a.xy+r.yy*a.yy+r.yz*a.zy,z.yz=r.yx*a.xz+r.yy*a.yz+r.yz*a.zz,z.zx=r.zx*a.xx+r.zy*a.yx+r.zz*a.zx,
z.zy=r.zx*a.xy+r.zy*a.yy+r.zz*a.zy,z.zz=r.zx*a.xz+r.zy*a.yz+r.zz*a.zz,z.dx=r.xx*a.dx+r.xy*a.dy+r.xz*a.dz+r.dx,
z.dy=r.yx*a.dx+r.yy*a.dy+r.yz*a.dz+r.dy,z.dz=r.zx*a.dx+r.zy*a.dy+r.zz*a.dz+r.dz}return z;
},_project:function(x,y,z,t){return{x:x.xx*y+x.xy*z+x.xz*t+x.dx,y:x.yx*y+x.yy*z+x.yz*t+x.dy,
z:x.zx*y+x.zy*z+x.zz*t+x.dz}},project:function(x,z,t,r){var a=y.matrix.normalize(x);
return"number"==typeof z&&"number"==typeof t&&"number"==typeof r?y.matrix._project(a,z,t,r):y.matrix._project(a,z.x,z.y,z.z);
}}),y.Matrix3D=y.matrix.Matrix3D,y.matrix});