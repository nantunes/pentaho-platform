// Copyright (c) 2005  Tom Wu
// All Rights Reserved.
// See "LICENSE-BigInteger" in dojox.math for details.

define(["dojo/_base/kernel","dojo/_base/declare","../../math/BigInteger","../../math/random/Simple"],function(n,t,e,r){
function o(n,t,r){if(t<n.length+11)throw new Error("Message too long for RSA");for(var o=new Array(t),i=n.length;i&&t;)o[--t]=n.charCodeAt(--i);
o[--t]=0;for(var h=r(),s=[0];t>2;){for(s[0]=0;0==s[0];)h.nextBytes(s);o[--t]=s[0];
}return o[--t]=2,o[--t]=0,h.destroy(),new e(o)}n.experimental("dojox.encoding.crypto.RSAKey");
var i=function(){return new r};return t("dojox.encoding.crypto.RSAKey",null,{constructor:function(n){
this.rngf=n||i,this.e=0,this.n=this.d=this.p=this.q=this.dmp1=this.dmq1=this.coeff=null;
},setPublic:function(n,t){if(!(n&&t&&n.length&&t.length))throw new Error("Invalid RSA public key");
this.n=new e(n,16),this.e=parseInt(t,16)},encrypt:function(n){var t=o(n,this.n.bitLength()+7>>3,this.rngf);
if(!t)return null;var e=t.modPowInt(this.e,this.n);if(!e)return null;var r=e.toString(16);
return r.length%2?"0"+r:r}})});