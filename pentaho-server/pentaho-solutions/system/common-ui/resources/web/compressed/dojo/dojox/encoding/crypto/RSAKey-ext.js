define(["dojo/_base/kernel","dojo/_base/lang","./RSAKey","../../math/BigInteger-ext"],function(t,i,e,s){
function r(t,i){for(var e=t.toByteArray(),s=0,r=e.length;r>s&&!e[s];++s);if(e.length-s!==i-1||2!==e[s])return null;
for(++s;e[s];)if(++s>=r)return null;for(var n="";++s<r;)n+=String.fromCharCode(e[s]);
return n}return t.experimental("dojox.encoding.crypto.RSAKey-ext"),i.extend(e,{setPrivate:function(t,i,e){
if(!(t&&i&&t.length&&i.length))throw new Error("Invalid RSA private key");this.n=new s(t,16),
this.e=parseInt(i,16),this.d=new s(e,16)},setPrivateEx:function(t,i,e,r,n,h,o,a){
if(!(t&&i&&t.length&&i.length))throw new Error("Invalid RSA private key");this.n=new s(t,16),
this.e=parseInt(i,16),this.d=new s(e,16),this.p=new s(r,16),this.q=new s(n,16),this.dmp1=new s(h,16),
this.dmq1=new s(o,16),this.coeff=new s(a,16)},generate:function(t,i){var e=this.rngf(),r=t>>1;
this.e=parseInt(i,16);for(var n=new s(i,16);;){for(;this.p=new s(t-r,1,e),this.p.subtract(s.ONE).gcd(n).compareTo(s.ONE)||!this.p.isProbablePrime(10););
for(;this.q=new s(r,1,e),this.q.subtract(s.ONE).gcd(n).compareTo(s.ONE)||!this.q.isProbablePrime(10););
if(this.p.compareTo(this.q)<=0){var h=this.p;this.p=this.q,this.q=h}var o=this.p.subtract(s.ONE),a=this.q.subtract(s.ONE),d=o.multiply(a);
if(!d.gcd(n).compareTo(s.ONE)){this.n=this.p.multiply(this.q),this.d=n.modInverse(d),
this.dmp1=this.d.mod(o),this.dmq1=this.d.mod(a),this.coeff=this.q.modInverse(this.p);
break}}e.destroy()},decrypt:function(t){var i,e=new s(t,16);if(this.p&&this.q){for(var n=e.mod(this.p).modPow(this.dmp1,this.p),h=e.mod(this.q).modPow(this.dmq1,this.q);n.compareTo(h)<0;)n=n.add(this.p);
i=n.subtract(h).multiply(this.coeff).mod(this.p).multiply(this.q).add(h)}else i=e.modPow(this.d,this.n);
return i?r(i,this.n.bitLength()+7>>3):null}}),e});