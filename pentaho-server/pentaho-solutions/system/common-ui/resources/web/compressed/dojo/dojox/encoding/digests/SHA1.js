/*
 * A port of Paul Johnstone's SHA1 implementation
 *
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 *
 * Dojo port by Tom Trenka
 */

define(["./_base"],function(r){function t(r,t){return r<<t|r>>>32-t}function n(r,t,n,e){
return 20>r?t&n|~t&e:40>r?t^n^e:60>r?t&n|t&e|n&e:t^n^e}function e(r){return 20>r?1518500249:40>r?1859775393:60>r?-1894007588:-899497514;
}function u(u,a){u[a>>5]|=128<<24-a%32,u[(a+64>>9<<4)+15]=a;for(var o=new Array(80),d=1732584193,s=-271733879,c=-1732584194,f=271733878,h=-1009589776,i=0;i<u.length;i+=16){
for(var p=d,v=s,g=c,l=f,y=h,A=0;80>A;A++){16>A?o[A]=u[i+A]:o[A]=t(o[A-3]^o[A-8]^o[A-14]^o[A-16],1);
var W=r.addWords(r.addWords(t(d,5),n(A,s,c,f)),r.addWords(r.addWords(h,o[A]),e(A)));
h=f,f=c,c=t(s,30),s=d,d=W}d=r.addWords(d,p),s=r.addWords(s,v),c=r.addWords(c,g),f=r.addWords(f,l),
h=r.addWords(h,y)}return[d,s,c,f,h]}function a(r,t){var n=o(t);n.length>16&&(n=u(n,t.length*f));
for(var e=new Array(16),a=new Array(16),d=0;16>d;d++)e[d]=909522486^n[d],a[d]=1549556828^n[d];
var s=u(e.concat(o(r)),512+r.length*f);return u(a.concat(s),672)}function o(r){for(var t=[],n=0,e=r.length*f;e>n;n+=f)t[n>>5]|=(r.charCodeAt(n/f)&h)<<32-f-n%32;
return t}function d(r){for(var t="0123456789abcdef",n=[],e=0,u=4*r.length;u>e;e++)n.push(t.charAt(r[e>>2]>>8*(3-e%4)+4&15),t.charAt(r[e>>2]>>8*(3-e%4)&15));
return n.join("")}function s(r){for(var t=[],n=0,e=32*r.length;e>n;n+=f)t.push(String.fromCharCode(r[n>>5]>>>32-f-n%32&h));
return t.join("")}function c(r){for(var t="=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=[],u=0,a=4*r.length;a>u;u+=3)for(var o=(r[u>>2]>>8*(3-u%4)&255)<<16|(r[u+1>>2]>>8*(3-(u+1)%4)&255)<<8|r[u+2>>2]>>8*(3-(u+2)%4)&255,d=0;4>d;d++)8*u+6*d>32*r.length?e.push(t):e.push(n.charAt(o>>6*(3-d)&63));
return e.join("")}var f=8,h=(1<<f)-1;return r.SHA1=function(t,n){var e=n||r.outputTypes.Base64,a=u(o(t),t.length*f);
switch(e){case r.outputTypes.Raw:return a;case r.outputTypes.Hex:return d(a);case r.outputTypes.String:
return s(a);default:return c(a)}},r.SHA1._hmac=function(t,n,e){var u=e||r.outputTypes.Base64,o=a(t,n);
switch(u){case r.outputTypes.Raw:return o;case r.outputTypes.Hex:return d(o);case r.outputTypes.String:
return s(o);default:return c(o)}},r.SHA1});