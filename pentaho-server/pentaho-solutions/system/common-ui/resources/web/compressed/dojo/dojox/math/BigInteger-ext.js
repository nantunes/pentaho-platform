define(["dojo","dojox","dojox/math/BigInteger"],function(t,i){function r(){var t=at();
return this._copyTo(t),t}function s(){if(this.s<0){if(1==this.t)return this[0]-this._DV;
if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this._DB)-1)<<this._DB|this[0];
}function o(){return 0==this.t?this.s:this[0]<<24>>24}function n(){return 0==this.t?this.s:this[0]<<16>>16;
}function h(t){return Math.floor(Math.LN2*this._DB/Math.log(t))}function e(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1;
}function u(t){if(null==t&&(t=10),0==this.signum()||2>t||t>36)return"0";var i=this._chunkSize(t),r=Math.pow(t,i),s=ct(r),o=at(),n=at(),h="";
for(this._divRemTo(s,o,n);o.signum()>0;)h=(r+n.intValue()).toString(t).substr(1)+h,
o._divRemTo(s,o,n);return n.intValue().toString(t)+h}function f(t,i){this._fromInt(0),
null==i&&(i=10);for(var r=this._chunkSize(i),s=Math.pow(i,r),o=!1,n=0,h=0,e=0;e<t.length;++e){
var u=intAt(t,e);0>u?"-"==t.charAt(e)&&0==this.signum()&&(o=!0):(h=i*h+u,++n>=r&&(this._dMultiply(s),
this._dAddOffset(h,0),n=0,h=0))}n>0&&(this._dMultiply(Math.pow(i,n)),this._dAddOffset(h,0)),
o&&_t.ZERO._subTo(this,this)}function _(t,i,r){if("number"==typeof i)if(2>t)this._fromInt(1);else for(this._fromNumber(t,r),
this.testBit(t-1)||this._bitwiseTo(_t.ONE.shiftLeft(t-1),p,this),this._isEven()&&this._dAddOffset(1,0);!this.isProbablePrime(i);)this._dAddOffset(2,0),
this.bitLength()>t&&this._subTo(_t.ONE.shiftLeft(t-1),this);else{var s=[],o=7&t;s.length=(t>>3)+1,
i.nextBytes(s),o>0?s[0]&=(1<<o)-1:s[0]=0,this._fromString(s,256)}}function a(){var t=this.t,i=[];
i[0]=this.s;var r,s=this._DB-t*this._DB%8,o=0;if(t-->0)for(s<this._DB&&(r=this[t]>>s)!=(this.s&this._DM)>>s&&(i[o++]=r|this.s<<this._DB-s);t>=0;)8>s?(r=(this[t]&(1<<s)-1)<<8-s,
r|=this[--t]>>(s+=this._DB-8)):(r=this[t]>>(s-=8)&255,0>=s&&(s+=this._DB,--t)),0!=(128&r)&&(r|=-256),
0==o&&(128&this.s)!=(128&r)&&++o,(o>0||r!=this.s)&&(i[o++]=r);return i}function c(t){
return 0==this.compareTo(t)}function m(t){return this.compareTo(t)<0?this:t}function T(t){
return this.compareTo(t)>0?this:t}function l(t,i,r){var s,o,n=Math.min(t.t,this.t);
for(s=0;n>s;++s)r[s]=i(this[s],t[s]);if(t.t<this.t){for(o=t.s&this._DM,s=n;s<this.t;++s)r[s]=i(this[s],o);
r.t=this.t}else{for(o=this.s&this._DM,s=n;s<t.t;++s)r[s]=i(o,t[s]);r.t=t.t}r.s=i(this.s,t.s),
r._clamp()}function v(t,i){return t&i}function d(t){var i=at();return this._bitwiseTo(t,v,i),
i}function p(t,i){return t|i}function g(t){var i=at();return this._bitwiseTo(t,p,i),
i}function b(t,i){return t^i}function B(t){var i=at();return this._bitwiseTo(t,b,i),
i}function D(t,i){return t&~i}function S(t){var i=at();return this._bitwiseTo(t,D,i),
i}function y(){for(var t=at(),i=0;i<this.t;++i)t[i]=this._DM&~this[i];return t.t=this.t,
t.s=~this.s,t}function w(t){var i=at();return 0>t?this._rShiftTo(-t,i):this._lShiftTo(t,i),
i}function E(t){var i=at();return 0>t?this._lShiftTo(-t,i):this._rShiftTo(t,i),i}
function M(t){if(0==t)return-1;var i=0;return 0==(65535&t)&&(t>>=16,i+=16),0==(255&t)&&(t>>=8,
i+=8),0==(15&t)&&(t>>=4,i+=4),0==(3&t)&&(t>>=2,i+=2),0==(1&t)&&++i,i}function O(){
for(var t=0;t<this.t;++t)if(0!=this[t])return t*this._DB+M(this[t]);return this.s<0?this.t*this._DB:-1;
}function L(t){for(var i=0;0!=t;)t&=t-1,++i;return i}function R(){for(var t=0,i=this.s&this._DM,r=0;r<this.t;++r)t+=L(this[r]^i);
return t}function q(t){var i=Math.floor(t/this._DB);return i>=this.t?0!=this.s:0!=(this[i]&1<<t%this._DB);
}function x(t,i){var r=_t.ONE.shiftLeft(t);return this._bitwiseTo(r,i,r),r}function N(t){
return this._changeBit(t,p)}function I(t){return this._changeBit(t,D)}function A(t){
return this._changeBit(t,b)}function V(t,i){for(var r=0,s=0,o=Math.min(t.t,this.t);o>r;)s+=this[r]+t[r],
i[r++]=s&this._DM,s>>=this._DB;if(t.t<this.t){for(s+=t.s;r<this.t;)s+=this[r],i[r++]=s&this._DM,
s>>=this._DB;s+=this.s}else{for(s+=this.s;r<t.t;)s+=t[r],i[r++]=s&this._DM,s>>=this._DB;
s+=t.s}i.s=0>s?-1:0,s>0?i[r++]=s:-1>s&&(i[r++]=this._DV+s),i.t=r,i._clamp()}function P(t){
var i=at();return this._addTo(t,i),i}function j(t){var i=at();return this._subTo(t,i),
i}function k(t){var i=at();return this._multiplyTo(t,i),i}function z(t){var i=at();
return this._divRemTo(t,i,null),i}function Z(t){var i=at();return this._divRemTo(t,null,i),
i}function C(t){var i=at(),r=at();return this._divRemTo(t,i,r),[i,r]}function U(t){
this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this._clamp()}function F(t,i){
for(;this.t<=i;)this[this.t++]=0;for(this[i]+=t;this[i]>=this._DV;)this[i]-=this._DV,
++i>=this.t&&(this[this.t++]=0),++this[i]}function G(){}function H(t){return t}function J(t,i,r){
t._multiplyTo(i,r)}function K(t,i){t._squareTo(i)}function Q(t){return this._exp(t,new G);
}function W(t,i,r){var s=Math.min(this.t+t.t,i);for(r.s=0,r.t=s;s>0;)r[--s]=0;var o;
for(o=r.t-this.t;o>s;++s)r[s+this.t]=this.am(0,t[s],r,s,0,this.t);for(o=Math.min(t.t,i);o>s;++s)this.am(0,t[s],r,s,0,i-s);
r._clamp()}function X(t,i,r){--i;var s=r.t=this.t+t.t-i;for(r.s=0;--s>=0;)r[s]=0;for(s=Math.max(i-this.t,0);s<t.t;++s)r[this.t+s-i]=this.am(i-s,t[s],r,0,0,this.t+s-i);
r._clamp(),r._drShiftTo(1,r)}function Y(t){this.r2=at(),this.q3=at(),_t.ONE._dlShiftTo(2*t.t,this.r2),
this.mu=this.r2.divide(t),this.m=t}function $(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);
if(t.compareTo(this.m)<0)return t;var i=at();return t._copyTo(i),this.reduce(i),i;
}function tt(t){return t}function it(t){for(t._drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,
t._clamp()),this.mu._multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m._multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t._dAddOffset(1,this.m.t+1);
for(t._subTo(this.r2,t);t.compareTo(this.m)>=0;)t._subTo(this.m,t)}function rt(t,i){
t._squareTo(i),this.reduce(i)}function st(t,i,r){t._multiplyTo(i,r),this.reduce(r);
}function ot(t,i){var r,s,o=t.bitLength(),n=ct(1);if(0>=o)return n;r=18>o?1:48>o?3:144>o?4:768>o?5:6,
s=8>o?new Classic(i):i._isEven()?new Y(i):new Tt(i);var h=[],e=3,u=r-1,f=(1<<r)-1;
if(h[1]=s.convert(this),r>1){var _=at();for(s.sqrTo(h[1],_);f>=e;)h[e]=at(),s.mulTo(_,h[e-2],h[e]),
e+=2}var a,c,m=t.t-1,T=!0,l=at();for(o=mt(t[m])-1;m>=0;){for(o>=u?a=t[m]>>o-u&f:(a=(t[m]&(1<<o+1)-1)<<u-o,
m>0&&(a|=t[m-1]>>this._DB+o-u)),e=r;0==(1&a);)a>>=1,--e;if((o-=e)<0&&(o+=this._DB,
--m),T)h[a]._copyTo(n),T=!1;else{for(;e>1;)s.sqrTo(n,l),s.sqrTo(l,n),e-=2;e>0?s.sqrTo(n,l):(c=n,
n=l,l=c),s.mulTo(l,h[a],n)}for(;m>=0&&0==(t[m]&1<<o);)s.sqrTo(n,l),c=n,n=l,l=c,--o<0&&(o=this._DB-1,
--m)}return s.revert(n)}function nt(t){var i=this.s<0?this.negate():this.clone(),r=t.s<0?t.negate():t.clone();
if(i.compareTo(r)<0){var s=i;i=r,r=s}var o=i.getLowestSetBit(),n=r.getLowestSetBit();
if(0>n)return i;for(n>o&&(n=o),n>0&&(i._rShiftTo(n,i),r._rShiftTo(n,r));i.signum()>0;)(o=i.getLowestSetBit())>0&&i._rShiftTo(o,i),
(o=r.getLowestSetBit())>0&&r._rShiftTo(o,r),i.compareTo(r)>=0?(i._subTo(r,i),i._rShiftTo(1,i)):(r._subTo(i,r),
r._rShiftTo(1,r));return n>0&&r._lShiftTo(n,r),r}function ht(t){if(0>=t)return 0;var i=this._DV%t,r=this.s<0?t-1:0;
if(this.t>0)if(0==i)r=this[0]%t;else for(var s=this.t-1;s>=0;--s)r=(i*r+this[s])%t;
return r}function et(t){var i=t._isEven();if(this._isEven()&&i||0==t.signum())return _t.ZERO;
for(var r=t.clone(),s=this.clone(),o=ct(1),n=ct(0),h=ct(0),e=ct(1);0!=r.signum();){
for(;r._isEven();)r._rShiftTo(1,r),i?(o._isEven()&&n._isEven()||(o._addTo(this,o),
n._subTo(t,n)),o._rShiftTo(1,o)):n._isEven()||n._subTo(t,n),n._rShiftTo(1,n);for(;s._isEven();)s._rShiftTo(1,s),
i?(h._isEven()&&e._isEven()||(h._addTo(this,h),e._subTo(t,e)),h._rShiftTo(1,h)):e._isEven()||e._subTo(t,e),
e._rShiftTo(1,e);r.compareTo(s)>=0?(r._subTo(s,r),i&&o._subTo(h,o),n._subTo(e,n)):(s._subTo(r,s),
i&&h._subTo(o,h),e._subTo(n,e))}return 0!=s.compareTo(_t.ONE)?_t.ZERO:e.compareTo(t)>=0?e.subtract(t):e.signum()<0?(e._addTo(t,e),
e.signum()<0?e.add(t):e):e}function ut(t){var i,r=this.abs();if(1==r.t&&r[0]<=lt[lt.length-1]){
for(i=0;i<lt.length;++i)if(r[0]==lt[i])return!0;return!1}if(r._isEven())return!1;for(i=1;i<lt.length;){
for(var s=lt[i],o=i+1;o<lt.length&&vt>s;)s*=lt[o++];for(s=r._modInt(s);o>i;)if(s%lt[i++]==0)return!1;
}return r._millerRabin(t)}function ft(t){var i=this.subtract(_t.ONE),r=i.getLowestSetBit();
if(0>=r)return!1;var s=i.shiftRight(r);t=t+1>>1,t>lt.length&&(t=lt.length);for(var o=at(),n=0;t>n;++n){
o._fromInt(lt[n]);var h=o.modPow(s,this);if(0!=h.compareTo(_t.ONE)&&0!=h.compareTo(i)){
for(var e=1;e++<r&&0!=h.compareTo(i);)if(h=h.modPowInt(2,this),0==h.compareTo(_t.ONE))return!1;
if(0!=h.compareTo(i))return!1}}return!0}t.experimental("dojox.math.BigInteger-ext");
var _t=i.math.BigInteger,at=_t._nbi,ct=_t._nbv,mt=_t._nbits,Tt=_t._Montgomery;G.prototype.convert=H,
G.prototype.revert=H,G.prototype.mulTo=J,G.prototype.sqrTo=K,Y.prototype.convert=$,
Y.prototype.revert=tt,Y.prototype.reduce=it,Y.prototype.mulTo=st,Y.prototype.sqrTo=rt;
var lt=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509],vt=(1<<26)/lt[lt.length-1];
return t.extend(_t,{_chunkSize:h,_toRadix:u,_fromRadix:f,_fromNumber:_,_bitwiseTo:l,
_changeBit:x,_addTo:V,_dMultiply:U,_dAddOffset:F,_multiplyLowerTo:W,_multiplyUpperTo:X,
_modInt:ht,_millerRabin:ft,clone:r,intValue:s,byteValue:o,shortValue:n,signum:e,toByteArray:a,
equals:c,min:m,max:T,and:d,or:g,xor:B,andNot:S,not:y,shiftLeft:w,shiftRight:E,getLowestSetBit:O,
bitCount:R,testBit:q,setBit:N,clearBit:I,flipBit:A,add:P,subtract:j,multiply:k,divide:z,
remainder:Z,divideAndRemainder:C,modPow:ot,modInverse:et,pow:Q,gcd:nt,isProbablePrime:ut
}),i.math.BigInteger});