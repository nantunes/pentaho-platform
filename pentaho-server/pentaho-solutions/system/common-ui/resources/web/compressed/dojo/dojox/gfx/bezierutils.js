define(["./_base"],function(n){var r=n.bezierutils={},t=.1,e=(r.tAtLength=function(n,r){
var t=0,e=6==n.length,a=0,o=0,v=e?i:f,c=function(i,f){for(var h=0,g=0;g<i.length-2;g+=2)h+=u(i[g],i[g+1],i[g+2],i[g+3]);
var l=e?u(n[0],n[1],n[4],n[5]):u(n[0],n[1],n[6],n[7]);if(h-l>f||a+h>r+f){++o;var s=v(i,.5);
if(c(s[0],f),Math.abs(a-r)<=f)return;return void c(s[1],f)}a+=h,t+=1/(1<<o)};return r&&c(n,.5),
t},r.computeLength=function(n){for(var r=6==n.length,f=0,o=0;o<n.length-2;o+=2)f+=u(n[o],n[o+1],n[o+2],n[o+3]);
var v=r?u(n[0],n[1],n[4],n[5]):u(n[0],n[1],n[6],n[7]);if(f-v>t){var c=r?i(n,.5):a(n,.5),h=e(c[0],r);
return h+=e(c[1],r)}return f}),u=r.distance=function(n,r,t,e){return Math.sqrt((t-n)*(t-n)+(e-r)*(e-r));
},i=function(n,r){var t=1-r,e=t*t,u=r*r,i=n[0],a=n[1],f=n[2],o=n[3],v=n[4],c=n[5],h=t*i+r*f,g=t*a+r*o,l=t*f+r*v,s=t*o+r*c,b=e*i+2*t*r*f+u*v,d=e*a+2*t*r*o+u*c;
return[[i,a,h,g,b,d],[b,d,l,s,v,c]]},a=function(n,r){var t=1-r,e=t*t,u=e*t,i=r*r,a=i*r,f=n[0],o=n[1],v=n[2],c=n[3],h=n[4],g=n[5],l=n[6],s=n[7],b=t*f+r*v,d=t*o+r*c,p=t*h+r*l,z=t*g+r*s,A=e*f+2*t*r*v+i*h,L=e*o+2*t*r*c+i*g,M=e*v+2*t*r*h+i*l,m=e*c+2*t*r*g+i*s,q=u*f+3*e*r*v+3*t*i*h+a*l,B=u*o+3*e*r*c+3*t*i*g+a*s;
return[[f,o,b,d,A,L,q,B],[q,B,M,m,p,z,l,s]]},f=r.splitBezierAtT=function(n,r){return 6==n.length?i(n,r):a(n,r);
};return r});