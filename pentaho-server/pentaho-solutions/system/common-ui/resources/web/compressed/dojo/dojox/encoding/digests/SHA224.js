define(["./_sha-32"],function(t){var e=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],r=function(r,n){
var u=n||t.outputTypes.Base64;r=t.stringToUtf8(r);var o=t.digest(t.toWord(r),8*r.length,e,224);
switch(u){case t.outputTypes.Raw:return o;case t.outputTypes.Hex:return t.toHex(o);
case t.outputTypes.String:return t._toString(o);default:return t.toBase64(o)}};return r._hmac=function(r,n,u){
var o=u||t.outputTypes.Base64;r=t.stringToUtf8(r),n=t.stringToUtf8(n);var s=t.toWord(n);
s.length>16&&(s=t.digest(s,8*n.length,e,224));for(var a=new Array(16),i=new Array(16),c=0;16>c;c++)a[c]=909522486^s[c],
i[c]=1549556828^s[c];var p=t.digest(a.concat(t.toWord(r)),512+8*r.length,e,224);t.digest(i.concat(p),672,e,224);
switch(o){case t.outputTypes.Raw:return s;case t.outputTypes.Hex:return t.toHex(s);
case t.outputTypes.String:return t._toString(s);default:return t.toBase64(s)}},r});