define(["./_sha-64"],function(t){var e=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428],r=function(r,n){
var u=n||t.outputTypes.Base64;r=t.stringToUtf8(r);var o=t.digest(t.toWord(r),8*r.length,e,384);
switch(u){case t.outputTypes.Raw:return o;case t.outputTypes.Hex:return t.toHex(o);
case t.outputTypes.String:return t._toString(o);default:return t.toBase64(o)}};return r._hmac=function(r,n,u){
var o=u||t.outputTypes.Base64;r=t.stringToUtf8(r),n=t.stringToUtf8(n);var s=t.toWord(n);
s.length>16&&(s=t.digest(s,8*n.length,e,384));for(var a=new Array(16),i=new Array(16),c=0;16>c;c++)a[c]=909522486^s[c],
i[c]=1549556828^s[c];var p=t.digest(a.concat(t.toWord(r)),512+8*r.length,e,384);t.digest(i.concat(p),672,e,384);
switch(o){case t.outputTypes.Raw:return s;case t.outputTypes.Hex:return t.toHex(s);
case t.outputTypes.String:return t._toString(s);default:return t.toBase64(s)}},r});