define(["dojo/_base/lang","dojox/calc/_Executor"],function(r,n){function t(){var r=[5,6,7,10,11,13,14,15,17,19,21,22,23,26,29,30,31,33,34,35,37,38,39,41,42,43,46,47,51,53,55,57,58,59,61,62,65,66,67,69,70,71,73,74,77,78,79,82,83,85,86,87,89,91,93,94,95,97];
o={1:1,"√(2)":Math.sqrt(2),"√(3)":Math.sqrt(3),pi:Math.PI};for(var n in r){var t=r[n];
o["√("+t+")"]=Math.sqrt(t)}o["√(pi)"]=Math.sqrt(Math.PI)}function a(r){function t(r){
var t=Math.floor(1/r),a=n.approx(1/t);if(a==r)return{n:1,d:t};var o=t+1;if(a=n.approx(1/o),
a==r)return{n:1,d:o};if(t>=50)return null;var u=t+o;if(a=n.approx(2/u),a==r)return{
n:2,d:u};if(t>=34)return null;var f=a>r,i=2*u+(f?1:-1);if(a=n.approx(4/i),a==r)return{
n:4,d:i};var p=a>r;if(f&&!p||!f&&p){var e=u+i>>1;if(a=n.approx(3/e),a==r)return{n:3,
d:e}}if(t>=20)return null;for(var d=u+2*t,v=d+2,h=5;100>=d;h++){d+=t,v+=o;var M=f?v+d+1>>1:d,l=f?v:v+d-1>>1;
M=p?M+l>>1:M,l=p?l:M+l>>1;for(var c=M;l>=c;c++)if(!(h&!1&&c&!1)){if(a=n.approx(h/c),
a==r)return{n:h,d:c};if(r>a)break}}return null}r=Math.abs(r);for(var a in o){var u=o[a],f=r/u,i=Math.floor(f);
if(f=n.approx(f-i),0==f)return{mt:a,m:u,n:i,d:1};var p=t(f);if(p)return{mt:a,m:u,
n:i*p.d+p.n,d:p.d}}return null}var o;return t(),r.mixin(n,{toFrac:function(r){var n=a(r);
return n?(0>r?"-":"")+(1==n.m?"":1==n.n?"":n.n+"*")+(1==n.m?n.n:n.mt)+(1==n.d?"":"/"+n.d):r;
},pow:function(r,n){function t(r){return Math.floor(r)==r}if(r>0||t(n))return Math.pow(r,n);
var o=a(n);return r>=0?o&&1==o.m?Math.pow(Math.pow(r,1/o.d),0>n?-o.n:o.n):Math.pow(r,n):o&&1&o.d?Math.pow(Math.pow(-Math.pow(-r,1/o.d),0>n?-o.n:o.n),o.m):NaN;
}})});