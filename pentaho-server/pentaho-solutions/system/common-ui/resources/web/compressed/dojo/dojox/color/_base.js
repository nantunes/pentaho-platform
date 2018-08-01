define(["../main","dojo/_base/lang","dojo/_base/Color","dojo/colors"],function(r,t,n,a){
var o=t.getObject("color",!0,r);return o.Color=n,o.blend=n.blendColors,o.fromRgb=n.fromRgb,
o.fromHex=n.fromHex,o.fromArray=n.fromArray,o.fromString=n.fromString,o.greyscale=a.makeGrey,
t.mixin(o,{fromCmy:function(r,a,o){t.isArray(r)?(a=r[1],o=r[2],r=r[0]):t.isObject(r)&&(a=r.m,
o=r.y,r=r.c),r/=100,a/=100,o/=100;var h=1-r,e=1-a,i=1-o;return new n({r:Math.round(255*h),
g:Math.round(255*e),b:Math.round(255*i)})},fromCmyk:function(r,a,o,h){t.isArray(r)?(a=r[1],
o=r[2],h=r[3],r=r[0]):t.isObject(r)&&(a=r.m,o=r.y,h=r.b,r=r.c),r/=100,a/=100,o/=100,
h/=100;var e,i,u;return e=1-Math.min(1,r*(1-h)+h),i=1-Math.min(1,a*(1-h)+h),u=1-Math.min(1,o*(1-h)+h),
new n({r:Math.round(255*e),g:Math.round(255*i),b:Math.round(255*u)})},fromHsl:function(r,a,o){
for(t.isArray(r)?(a=r[1],o=r[2],r=r[0]):t.isObject(r)&&(a=r.s,o=r.l,r=r.h),a/=100,
o/=100;0>r;)r+=360;for(;r>=360;)r-=360;var h,e,i;return 120>r?(h=(120-r)/60,e=r/60,
i=0):240>r?(h=0,e=(240-r)/60,i=(r-120)/60):(h=(r-240)/60,e=0,i=(360-r)/60),h=2*a*Math.min(h,1)+(1-a),
e=2*a*Math.min(e,1)+(1-a),i=2*a*Math.min(i,1)+(1-a),.5>o?(h*=o,e*=o,i*=o):(h=(1-o)*h+2*o-1,
e=(1-o)*e+2*o-1,i=(1-o)*i+2*o-1),new n({r:Math.round(255*h),g:Math.round(255*e),b:Math.round(255*i)
})}}),o.fromHsv=function(r,a,o){t.isArray(r)?(a=r[1],o=r[2],r=r[0]):t.isObject(r)&&(a=r.s,
o=r.v,r=r.h),360==r&&(r=0),a/=100,o/=100;var h,e,i;if(0==a)h=o,i=o,e=o;else{var u=r/60,s=Math.floor(u),M=u-s,m=o*(1-a),d=o*(1-a*M),c=o*(1-a*(1-M));
switch(s){case 0:h=o,e=c,i=m;break;case 1:h=d,e=o,i=m;break;case 2:h=m,e=o,i=c;break;
case 3:h=m,e=d,i=o;break;case 4:h=c,e=m,i=o;break;case 5:h=o,e=m,i=d}}return new n({
r:Math.round(255*h),g:Math.round(255*e),b:Math.round(255*i)})},t.extend(n,{toCmy:function(){
var r=1-this.r/255,t=1-this.g/255,n=1-this.b/255;return{c:Math.round(100*r),m:Math.round(100*t),
y:Math.round(100*n)}},toCmyk:function(){var r,t,n,a,o=this.r/255,h=this.g/255,e=this.b/255;
return a=Math.min(1-o,1-h,1-e),r=(1-o-a)/(1-a),t=(1-h-a)/(1-a),n=(1-e-a)/(1-a),{c:Math.round(100*r),
m:Math.round(100*t),y:Math.round(100*n),b:Math.round(100*a)}},toHsl:function(){var r=this.r/255,t=this.g/255,n=this.b/255,a=Math.min(r,n,t),o=Math.max(r,t,n),h=o-a,e=0,i=0,u=(a+o)/2;
return u>0&&1>u&&(i=h/(.5>u?2*u:2-2*u)),h>0&&(o==r&&o!=t&&(e+=(t-n)/h),o==t&&o!=n&&(e+=2+(n-r)/h),
o==n&&o!=r&&(e+=4+(r-t)/h),e*=60),{h:e,s:Math.round(100*i),l:Math.round(100*u)}},
toHsv:function(){var r=this.r/255,t=this.g/255,n=this.b/255,a=Math.min(r,n,t),o=Math.max(r,t,n),h=o-a,e=null,i=0==o?0:h/o;
return 0==i?e=0:(e=r==o?60*(t-n)/h:t==o?120+60*(n-r)/h:240+60*(r-t)/h,0>e&&(e+=360)),
{h:e,s:Math.round(100*i),v:Math.round(100*o)}}}),o});