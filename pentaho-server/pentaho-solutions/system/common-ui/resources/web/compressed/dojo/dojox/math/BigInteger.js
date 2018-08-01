define(["dojo","dojox"],function(t,i){function s(t,i,s){null!=t&&("number"==typeof t?this._fromNumber(t,i,s):i||"string"==typeof t?this._fromString(t,i):this._fromString(t,256));
}function r(){return new s(null)}function h(t,i,s,r,h,o){for(;--o>=0;){var n=i*this[t++]+s[r]+h;
h=Math.floor(n/67108864),s[r++]=67108863&n}return h}function o(t,i,s,r,h,o){for(var n=32767&i,e=i>>15;--o>=0;){
var f=32767&this[t],u=this[t++]>>15,_=e*f+u*n;f=n*f+((32767&_)<<15)+s[r]+(1073741823&h),
h=(f>>>30)+(_>>>15)+e*u+(h>>>30),s[r++]=1073741823&f}return h}function n(t,i,s,r,h,o){
for(var n=16383&i,e=i>>14;--o>=0;){var f=16383&this[t],u=this[t++]>>14,_=e*f+u*n;f=n*f+((16383&_)<<14)+s[r]+h,
h=(f>>28)+(_>>14)+e*u,s[r++]=268435455&f}return h}function e(t){return X.charAt(t);
}function f(t,i){var s=Y[t.charCodeAt(i)];return null==s?-1:s}function u(t){for(var i=this.t-1;i>=0;--i)t[i]=this[i];
t.t=this.t,t.s=this.s}function _(t){this.t=1,this.s=0>t?-1:0,t>0?this[0]=t:-1>t?this[0]=t+_DV:this.t=0;
}function a(t){var i=r();return i._fromInt(t),i}function c(t,i){var r;if(16==i)r=4;else if(8==i)r=3;else if(256==i)r=8;else if(2==i)r=1;else if(32==i)r=5;else{
if(4!=i)return void this._fromRadix(t,i);r=2}this.t=0,this.s=0;for(var h=t.length,o=!1,n=0;--h>=0;){
var e=8==r?255&t[h]:f(t,h);0>e?"-"==t.charAt(h)&&(o=!0):(o=!1,0==n?this[this.t++]=e:n+r>this._DB?(this[this.t-1]|=(e&(1<<this._DB-n)-1)<<n,
this[this.t++]=e>>this._DB-n):this[this.t-1]|=e<<n,n+=r,n>=this._DB&&(n-=this._DB));
}8==r&&0!=(128&t[0])&&(this.s=-1,n>0&&(this[this.t-1]|=(1<<this._DB-n)-1<<n)),this._clamp(),
o&&s.ZERO._subTo(this,this)}function m(){for(var t=this.s&this._DM;this.t>0&&this[this.t-1]==t;)--this.t;
}function l(t){if(this.s<0)return"-"+this.negate().toString(t);var i;if(16==t)i=4;else if(8==t)i=3;else if(2==t)i=1;else if(32==t)i=5;else{
if(4!=t)return this._toRadix(t);i=2}var s,r=(1<<i)-1,h=!1,o="",n=this.t,f=this._DB-n*this._DB%i;
if(n-->0)for(f<this._DB&&(s=this[n]>>f)>0&&(h=!0,o=e(s));n>=0;)i>f?(s=(this[n]&(1<<f)-1)<<i-f,
s|=this[--n]>>(f+=this._DB-i)):(s=this[n]>>(f-=i)&r,0>=f&&(f+=this._DB,--n)),s>0&&(h=!0),
h&&(o+=e(s));return h?o:"0"}function v(){var t=r();return s.ZERO._subTo(this,t),t;
}function T(){return this.s<0?this.negate():this}function p(t){var i=this.s-t.s;if(i)return i;
var s=this.t;if(i=s-t.t)return i;for(;--s>=0;)if(i=this[s]-t[s])return i;return 0;
}function D(t){var i,s=1;return(i=t>>>16)&&(t=i,s+=16),(i=t>>8)&&(t=i,s+=8),(i=t>>4)&&(t=i,
s+=4),(i=t>>2)&&(t=i,s+=2),(i=t>>1)&&(t=i,s+=1),s}function d(){return this.t<=0?0:this._DB*(this.t-1)+D(this[this.t-1]^this.s&this._DM);
}function b(t,i){var s;for(s=this.t-1;s>=0;--s)i[s+t]=this[s];for(s=t-1;s>=0;--s)i[s]=0;
i.t=this.t+t,i.s=this.s}function B(t,i){for(var s=t;s<this.t;++s)i[s-t]=this[s];i.t=Math.max(this.t-t,0),
i.s=this.s}function g(t,i){var s,r=t%this._DB,h=this._DB-r,o=(1<<h)-1,n=Math.floor(t/this._DB),e=this.s<<r&this._DM;
for(s=this.t-1;s>=0;--s)i[s+n+1]=this[s]>>h|e,e=(this[s]&o)<<r;for(s=n-1;s>=0;--s)i[s]=0;
i[n]=e,i.t=this.t+n+1,i.s=this.s,i._clamp()}function M(t,i){i.s=this.s;var s=Math.floor(t/this._DB);
if(s>=this.t)return void(i.t=0);var r=t%this._DB,h=this._DB-r,o=(1<<r)-1;i[0]=this[s]>>r;
for(var n=s+1;n<this.t;++n)i[n-s-1]|=(this[n]&o)<<h,i[n-s]=this[n]>>r;r>0&&(i[this.t-s-1]|=(this.s&o)<<h),
i.t=this.t-s,i._clamp()}function S(t,i){for(var s=0,r=0,h=Math.min(t.t,this.t);h>s;)r+=this[s]-t[s],
i[s++]=r&this._DM,r>>=this._DB;if(t.t<this.t){for(r-=t.s;s<this.t;)r+=this[s],i[s++]=r&this._DM,
r>>=this._DB;r+=this.s}else{for(r+=this.s;s<t.t;)r-=t[s],i[s++]=r&this._DM,r>>=this._DB;
r-=t.s}i.s=0>r?-1:0,-1>r?i[s++]=this._DV+r:r>0&&(i[s++]=r),i.t=s,i._clamp()}function y(t,i){
var r=this.abs(),h=t.abs(),o=r.t;for(i.t=o+h.t;--o>=0;)i[o]=0;for(o=0;o<h.t;++o)i[o+r.t]=r.am(0,h[o],i,o,0,r.t);
i.s=0,i._clamp(),this.s!=t.s&&s.ZERO._subTo(i,i)}function x(t){for(var i=this.abs(),s=t.t=2*i.t;--s>=0;)t[s]=0;
for(s=0;s<i.t-1;++s){var r=i.am(s,i[s],t,2*s,0,1);(t[s+i.t]+=i.am(s+1,2*i[s],t,2*s+1,r,i.t-s-1))>=i._DV&&(t[s+i.t]-=i._DV,
t[s+i.t+1]=1)}t.t>0&&(t[t.t-1]+=i.am(s,i[s],t,2*s,0,1)),t.s=0,t._clamp()}function E(t,i,h){
var o=t.abs();if(!(o.t<=0)){var n=this.abs();if(n.t<o.t)return null!=i&&i._fromInt(0),
void(null!=h&&this._copyTo(h));null==h&&(h=r());var e=r(),f=this.s,u=t.s,_=this._DB-D(o[o.t-1]);
_>0?(o._lShiftTo(_,e),n._lShiftTo(_,h)):(o._copyTo(e),n._copyTo(h));var a=e.t,c=e[a-1];
if(0!=c){var m=c*(1<<this._F1)+(a>1?e[a-2]>>this._F2:0),l=this._FV/m,v=(1<<this._F1)/m,T=1<<this._F2,p=h.t,d=p-a,b=null==i?r():i;
for(e._dlShiftTo(d,b),h.compareTo(b)>=0&&(h[h.t++]=1,h._subTo(b,h)),s.ONE._dlShiftTo(a,b),
b._subTo(e,e);e.t<a;)e[e.t++]=0;for(;--d>=0;){var B=h[--p]==c?this._DM:Math.floor(h[p]*l+(h[p-1]+T)*v);
if((h[p]+=e.am(0,B,h,d,0,a))<B)for(e._dlShiftTo(d,b),h._subTo(b,h);h[p]<--B;)h._subTo(b,h);
}null!=i&&(h._drShiftTo(a,i),f!=u&&s.ZERO._subTo(i,i)),h.t=a,h._clamp(),_>0&&h._rShiftTo(_,h),
0>f&&s.ZERO._subTo(h,h)}}}function R(t){var i=r();return this.abs()._divRemTo(t,null,i),
this.s<0&&i.compareTo(s.ZERO)>0&&t._subTo(i,i),i}function O(t){this.m=t}function V(t){
return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t}function I(t){return t}function F(t){
t._divRemTo(this.m,null,t)}function Z(t,i,s){t._multiplyTo(i,s),this.reduce(s)}function q(t,i){
t._squareTo(i),this.reduce(i)}function A(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;
var i=3&t;return i=i*(2-(15&t)*i)&15,i=i*(2-(255&t)*i)&255,i=i*(2-((65535&t)*i&65535))&65535,
i=i*(2-t*i%this._DV)%this._DV,i>0?this._DV-i:-i}function N(t){this.m=t,this.mp=t._invDigit(),
this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t._DB-15)-1,this.mt2=2*t.t;
}function w(t){var i=r();return t.abs()._dlShiftTo(this.m.t,i),i._divRemTo(this.m,null,i),
t.s<0&&i.compareTo(s.ZERO)>0&&this.m._subTo(i,i),i}function j(t){var i=r();return t._copyTo(i),
this.reduce(i),i}function C(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var i=0;i<this.m.t;++i){
var s=32767&t[i],r=s*this.mpl+((s*this.mph+(t[i]>>15)*this.mpl&this.um)<<15)&t._DM;
for(s=i+this.m.t,t[s]+=this.m.am(0,r,t,i,0,this.m.t);t[s]>=t._DV;)t[s]-=t._DV,t[++s]++;
}t._clamp(),t._drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t._subTo(this.m,t)}function k(t,i){
t._squareTo(i),this.reduce(i)}function z(t,i,s){t._multiplyTo(i,s),this.reduce(s);
}function L(){return 0==(this.t>0?1&this[0]:this.s)}function P(t,i){if(t>4294967295||1>t)return s.ONE;
var h=r(),o=r(),n=i.convert(this),e=D(t)-1;for(n._copyTo(h);--e>=0;)if(i.sqrTo(h,o),
(t&1<<e)>0)i.mulTo(o,n,h);else{var f=h;h=o,o=f}return i.revert(h)}function G(t,i){
var s;return s=256>t||i._isEven()?new O(i):new N(i),this._exp(t,s)}t.getObject("math.BigInteger",!0,i),
t.experimental("dojox.math.BigInteger");var H,J=0xdeadbeefcafe,K=15715070==(16777215&J);
K&&"Microsoft Internet Explorer"==navigator.appName?(s.prototype.am=o,H=30):K&&"Netscape"!=navigator.appName?(s.prototype.am=h,
H=26):(s.prototype.am=n,H=28);var Q,U,W=52,X="0123456789abcdefghijklmnopqrstuvwxyz",Y=[];
for(Q="0".charCodeAt(0),U=0;9>=U;++U)Y[Q++]=U;for(Q="a".charCodeAt(0),U=10;36>U;++U)Y[Q++]=U;
for(Q="A".charCodeAt(0),U=10;36>U;++U)Y[Q++]=U;return t.extend(O,{convert:V,revert:I,
reduce:F,mulTo:Z,sqrTo:q}),t.extend(N,{convert:w,revert:j,reduce:C,mulTo:z,sqrTo:k
}),t.extend(s,{_DB:H,_DM:(1<<H)-1,_DV:1<<H,_FV:Math.pow(2,W),_F1:W-H,_F2:2*H-W,_copyTo:u,
_fromInt:_,_fromString:c,_clamp:m,_dlShiftTo:b,_drShiftTo:B,_lShiftTo:g,_rShiftTo:M,
_subTo:S,_multiplyTo:y,_squareTo:x,_divRemTo:E,_invDigit:A,_isEven:L,_exp:P,toString:l,
negate:v,abs:T,compareTo:p,bitLength:d,mod:R,modPowInt:G}),t._mixin(s,{ZERO:a(0),
ONE:a(1),_nbi:r,_nbv:a,_nbits:D,_Montgomery:N}),i.math.BigInteger=s,i.math.BigInteger;
});