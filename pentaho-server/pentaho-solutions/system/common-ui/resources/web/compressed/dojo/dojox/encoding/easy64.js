define(["dojo/_base/lang"],function(r){var o=r.getObject("dojox.encoding.easy64",!0),n=function(r,o,n){
for(var e=0;o>e;e+=3)n.push(String.fromCharCode((r[e]>>>2)+33),String.fromCharCode(((3&r[e])<<4)+(r[e+1]>>>4)+33),String.fromCharCode(((15&r[e+1])<<2)+(r[e+2]>>>6)+33),String.fromCharCode((63&r[e+2])+33));
};return o.encode=function(r){var o=[],e=r.length%3,t=r.length-e;if(n(r,t,o),e){for(var f=r.slice(t);f.length<3;)f.push(0);
n(f,3,o);for(var a=3;a>e;o.pop(),--a);}return o.join("")},o.decode=function(r){var o,n,e,t=r.length,f=[],a=[0,0,0,0];
for(o=0;t>o;o+=4){for(n=0;4>n;++n)a[n]=r.charCodeAt(o+n)-33;for(e=t-o,n=e;4>n;a[++n]=0);
for(f.push((a[0]<<2)+(a[1]>>>4),((15&a[1])<<4)+(a[2]>>>2),((3&a[2])<<6)+a[3]),n=e;4>n;++n,
f.pop());}return f},o});