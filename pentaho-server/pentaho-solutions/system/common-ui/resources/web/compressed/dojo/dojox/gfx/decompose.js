define(["./_base","dojo/_base/lang","./matrix"],function(x,y,t){function i(x,y){return Math.abs(x-y)<=1e-6*(Math.abs(x)+Math.abs(y));
}function n(x,y,t,i){return isFinite(x)?isFinite(t)?(y=Math.abs(y),i=Math.abs(i),
(y*x+i*t)/(y+i)):x:t}function e(x){var i=new t.Matrix2D(x);return y.mixin(i,{dx:0,
dy:0,xy:i.yx,yx:i.xy})}function r(x){return x.xx*x.yy<0||x.xy*x.yx>0?-1:1}function a(x){
var y=t.normalize(x),n=-y.xx-y.yy,e=y.xx*y.yy-y.xy*y.yx,r=Math.sqrt(n*n-4*e),a=-(n+(0>n?-r:r))/2,s=e/a,o=y.xy/(a-y.xx),u=1,c=y.xy/(s-y.xx),v=1;
i(a,s)&&(o=1,u=0,c=0,v=1),isFinite(o)||(o=1,u=(a-y.xx)/y.xy,isFinite(u)||(o=(a-y.yy)/y.yx,
u=1,isFinite(o)||(o=1,u=y.yx/(a-y.yy)))),isFinite(c)||(c=1,v=(s-y.xx)/y.xy,isFinite(v)||(c=(s-y.yy)/y.yx,
v=1,isFinite(c)||(c=1,v=y.yx/(s-y.yy))));var M=Math.sqrt(o*o+u*u),h=Math.sqrt(c*c+v*v);
return isFinite(o/=M)||(o=0),isFinite(u/=M)||(u=0),isFinite(c/=h)||(c=0),isFinite(v/=h)||(v=0),
{value1:a,value2:s,vector1:{x:o,y:u},vector2:{x:c,y:v}}}function s(x,y){var t=r(x),i=y.angle1=(Math.atan2(x.yx,x.yy)+Math.atan2(-t*x.xy,t*x.xx))/2,e=Math.cos(i),a=Math.sin(i);
return y.sx=n(x.xx/e,e,-x.xy/a,a),y.sy=n(x.yy/e,e,x.yx/a,a),y}function o(x,y){var t=r(x),i=y.angle2=(Math.atan2(t*x.yx,t*x.xx)+Math.atan2(-x.xy,x.yy))/2,e=Math.cos(i),a=Math.sin(i);
return y.sx=n(x.xx/e,e,x.yx/a,a),y.sy=n(x.yy/e,e,-x.xy/a,a),y}return x.decompose=function(x){
var n=t.normalize(x),r={dx:n.dx,dy:n.dy,sx:1,sy:1,angle1:0,angle2:0};if(i(n.xy,0)&&i(n.yx,0))return y.mixin(r,{
sx:n.xx,sy:n.yy});if(i(n.xx*n.yx,-n.xy*n.yy))return s(n,r);if(i(n.xx*n.xy,-n.yx*n.yy))return o(n,r);
var u=e(n),c=a([n,u]),v=a([u,n]),M=new t.Matrix2D({xx:c.vector1.x,xy:c.vector2.x,
yx:c.vector1.y,yy:c.vector2.y}),h=new t.Matrix2D({xx:v.vector1.x,xy:v.vector1.y,yx:v.vector2.x,
yy:v.vector2.y}),f=new t.Matrix2D([t.invert(M),n,t.invert(h)]);return s(h,r),f.xx*=r.sx,
f.yy*=r.sy,o(M,r),f.xx*=r.sx,f.yy*=r.sy,y.mixin(r,{sx:f.xx,sy:f.yy})}});