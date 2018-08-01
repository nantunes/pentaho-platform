define(["./_base"],function(r){function n(r,n){return r>>>n|r<<32-n}function t(r,n){
return r>>>n}function o(r,n,t){return r&n^~r&t}function e(r,n,t){return r&n^r&t^n&t;
}function u(r){return n(r,2)^n(r,13)^n(r,22)}function f(r){return n(r,6)^n(r,11)^n(r,25);
}function i(r){return n(r,7)^n(r,18)^t(r,3)}function a(r){return n(r,17)^n(r,19)^t(r,10);
}var c=function(r){var n=function(){};n.prototype=r;var t=new n;return t}(r);c.toWord=function(r){
for(var n=Array(r.length>>2),t=0;t<n.length;t++)n[t]=0;for(var t=0;t<8*r.length;t+=8)n[t>>5]|=(255&r.charCodeAt(t/8))<<24-t%32;
return n},c.toHex=function(r){for(var n="0123456789abcdef",t=[],o=0,e=4*r.length;e>o;o++)t.push(n.charAt(r[o>>2]>>8*(3-o%4)+4&15),n.charAt(r[o>>2]>>8*(3-o%4)&15));
return t.join("")},c.toBase64=function(r){for(var n="=",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=[],e=0,u=4*r.length;u>e;e+=3)for(var f=(r[e>>2]>>8*(3-e%4)&255)<<16|(r[e+1>>2]>>8*(3-(e+1)%4)&255)<<8|r[e+2>>2]>>8*(3-(e+2)%4)&255,i=0;4>i;i++)8*e+6*i>32*r.length?o.push(n):o.push(t.charAt(f>>6*(3-i)&63));
return o.join("")},c._toString=function(r){for(var n="",t=0;t<32*r.length;t+=8)n+=String.fromCharCode(r[t>>5]>>>24-t%32&255);
return n};var h=r.addWords,g=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];
return c.digest=function(r,n,t,c){t=t.slice(0);var v,d,l,s,p,A,y,C,b,j,w,S,W=new Array(64);
for(r[n>>5]|=128<<24-n%32,r[(n+64>>9<<4)+15]=n,b=0;b<r.length;b+=16){for(v=t[0],d=t[1],
l=t[2],s=t[3],p=t[4],A=t[5],y=t[6],C=t[7],j=0;64>j;j++)16>j?W[j]=r[j+b]:W[j]=h(h(h(a(W[j-2]),W[j-7]),i(W[j-15])),W[j-16]),
w=h(h(h(h(C,f(p)),o(p,A,y)),g[j]),W[j]),S=h(u(v),e(v,d,l)),C=y,y=A,A=p,p=h(s,w),s=l,
l=d,d=v,v=h(w,S);t[0]=h(v,t[0]),t[1]=h(d,t[1]),t[2]=h(l,t[2]),t[3]=h(s,t[3]),t[4]=h(p,t[4]),
t[5]=h(A,t[5]),t[6]=h(y,t[6]),t[7]=h(C,t[7])}return 224==c&&t.pop(),t},c});