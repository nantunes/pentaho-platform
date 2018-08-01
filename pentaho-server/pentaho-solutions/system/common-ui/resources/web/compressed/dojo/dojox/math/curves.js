define(["dojo","dojox"],function(t,h){return t.getObject("math.curves",!0,h),t.mixin(h.math.curves,{
Line:function(t,h){this.start=t,this.end=h,this.dimensions=t.length;for(var i=0;i<t.length;i++)t[i]=Number(t[i]);
for(var i=0;i<h.length;i++)h[i]=Number(h[i]);return this.getValue=function(t){for(var h=new Array(this.dimensions),i=0;i<this.dimensions;i++)h[i]=(this.end[i]-this.start[i])*t+this.start[i];
return h},this},Bezier:function(t){return this.getValue=function(t){if(t>=1)return this.p[this.p.length-1];
if(0>=t)return this.p[0];for(var i=new Array(this.p[0].length),e=0;r<this.p[0].length;e++)i[e]=0;
for(var r=0;r<this.p[0].length;r++){for(var n=0,s=0,a=0;a<this.p.length;a++)n+=this.p[a][r]*this.p[this.p.length-1][0]*h.math.bernstein(t,this.p.length,a);
for(var o=0;o<this.p.length;o++)s+=this.p[this.p.length-1][0]*h.math.bernstein(t,this.p.length,o);
i[r]=n/s}return i},this.p=t,this},CatmullRom:function(t,h){return this.getValue=function(t){
var h=t*(this.p.length-1),i=Math.floor(h),e=h-i,r=i-1;0>r&&(r=0);var n=i,s=i+1;s>=this.p.length&&(s=this.p.length-1);
var a=i+2;a>=this.p.length&&(a=this.p.length-1);for(var o=e,u=e*e,c=e*e*e,l=new Array(this.p[0].length),p=0;p<this.p[0].length;p++){
var g=-this.c*this.p[r][p]+(2-this.c)*this.p[n][p]+(this.c-2)*this.p[s][p]+this.c*this.p[a][p],f=2*this.c*this.p[r][p]+(this.c-3)*this.p[n][p]+(3-2*this.c)*this.p[s][p]+-this.c*this.p[a][p],v=-this.c*this.p[r][p]+this.c*this.p[s][p],d=this.p[n][p];
l[p]=g*c+f*u+v*o+d}return l},h?this.c=h:this.c=.7,this.p=t,this},Arc:function(t,i,e){
function r(t,h){for(var i=new Array(t.length),e=0;e<t.length;e++)i[e]=t[e]+h[e];return i;
}function n(t){for(var h=new Array(t.length),i=0;i<t.length;i++)h[i]=-t[i];return h;
}var s=h.math.midpoint(t,i),a=r(n(s),t),o=Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)),u=h.math.radiansToDegrees(Math.atan(a[1]/a[0]));
a[0]<0?u-=90:u+=90,h.math.curves.CenteredArc.call(this,s,o,u,u+(e?-180:180))},CenteredArc:function(t,i,e,r){
return this.center=t,this.radius=i,this.start=e||0,this.end=r,this.getValue=function(t){
var i=new Array(2),e=h.math.degreesToRadians(this.start+(this.end-this.start)*t);return i[0]=this.center[0]+this.radius*Math.sin(e),
i[1]=this.center[1]-this.radius*Math.cos(e),i},this},Circle:function(t,i){return h.math.curves.CenteredArc.call(this,t,i,0,360),
this},Path:function(){function t(){for(var t=0,h=0;h<e.length;h++){var i=t+e[h]/n,s=i-t;
r[h]=[t,i,s],t=i}}var i=[],e=[],r=[],n=0;return this.add=function(h,r){0>r&&console.error("dojox.math.curves.Path.add: weight cannot be less than 0"),
i.push(h),e.push(r),n+=r,t()},this.remove=function(h){for(var r=0;r<i.length;r++)if(i[r]==h){
i.splice(r,1),n-=e.splice(r,1)[0];break}t()},this.removeAll=function(){i=[],e=[],
n=0},this.getValue=function(t){for(var e=!1,n=0,s=0;s<r.length;s++){var a=r[s];if(t>=a[0]&&t<a[1]){
var o=(t-a[0])/a[2];n=i[s].getValue(o),e=!0;break}}e||(n=i[i.length-1].getValue(1));
for(var u=0;s>u;u++)n=h.math.points.translate(n,i[u].getValue(1));return n},this}
}),h.math.curves});