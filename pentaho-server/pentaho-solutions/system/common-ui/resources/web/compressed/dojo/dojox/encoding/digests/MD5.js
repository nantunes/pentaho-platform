/*	A port of Paul Johnstone's MD5 implementation
 *	http://pajhome.org.uk/crypt/md5/index.html
 *
 *	Copyright (C) Paul Johnston 1999 - 2002.
 *	Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * 	Distributed under the BSD License
 *
 *	Dojo port by Tom Trenka
 */

define(["./_base"],function(r){function t(r,t){return r<<t|r>>>32-t}function n(n,e,o,u,d,a){
return r.addWords(t(r.addWords(r.addWords(e,n),r.addWords(u,a)),d),o)}function e(r,t,e,o,u,d,a){
return n(t&e|~t&o,r,t,u,d,a)}function o(r,t,e,o,u,d,a){return n(t&o|e&~o,r,t,u,d,a);
}function u(r,t,e,o,u,d,a){return n(t^e^o,r,t,u,d,a)}function d(r,t,e,o,u,d,a){return n(e^(t|~o),r,t,u,d,a);
}function a(t,n){t[n>>5]|=128<<n%32,t[(n+64>>>9<<4)+14]=n;for(var a=1732584193,s=-271733879,c=-1732584194,i=271733878,T=0;T<t.length;T+=16){
var f=a,p=s,g=c,W=i;a=e(a,s,c,i,t[T+0],7,-680876936),i=e(i,a,s,c,t[T+1],12,-389564586),
c=e(c,i,a,s,t[T+2],17,606105819),s=e(s,c,i,a,t[T+3],22,-1044525330),a=e(a,s,c,i,t[T+4],7,-176418897),
i=e(i,a,s,c,t[T+5],12,1200080426),c=e(c,i,a,s,t[T+6],17,-1473231341),s=e(s,c,i,a,t[T+7],22,-45705983),
a=e(a,s,c,i,t[T+8],7,1770035416),i=e(i,a,s,c,t[T+9],12,-1958414417),c=e(c,i,a,s,t[T+10],17,-42063),
s=e(s,c,i,a,t[T+11],22,-1990404162),a=e(a,s,c,i,t[T+12],7,1804603682),i=e(i,a,s,c,t[T+13],12,-40341101),
c=e(c,i,a,s,t[T+14],17,-1502002290),s=e(s,c,i,a,t[T+15],22,1236535329),a=o(a,s,c,i,t[T+1],5,-165796510),
i=o(i,a,s,c,t[T+6],9,-1069501632),c=o(c,i,a,s,t[T+11],14,643717713),s=o(s,c,i,a,t[T+0],20,-373897302),
a=o(a,s,c,i,t[T+5],5,-701558691),i=o(i,a,s,c,t[T+10],9,38016083),c=o(c,i,a,s,t[T+15],14,-660478335),
s=o(s,c,i,a,t[T+4],20,-405537848),a=o(a,s,c,i,t[T+9],5,568446438),i=o(i,a,s,c,t[T+14],9,-1019803690),
c=o(c,i,a,s,t[T+3],14,-187363961),s=o(s,c,i,a,t[T+8],20,1163531501),a=o(a,s,c,i,t[T+13],5,-1444681467),
i=o(i,a,s,c,t[T+2],9,-51403784),c=o(c,i,a,s,t[T+7],14,1735328473),s=o(s,c,i,a,t[T+12],20,-1926607734),
a=u(a,s,c,i,t[T+5],4,-378558),i=u(i,a,s,c,t[T+8],11,-2022574463),c=u(c,i,a,s,t[T+11],16,1839030562),
s=u(s,c,i,a,t[T+14],23,-35309556),a=u(a,s,c,i,t[T+1],4,-1530992060),i=u(i,a,s,c,t[T+4],11,1272893353),
c=u(c,i,a,s,t[T+7],16,-155497632),s=u(s,c,i,a,t[T+10],23,-1094730640),a=u(a,s,c,i,t[T+13],4,681279174),
i=u(i,a,s,c,t[T+0],11,-358537222),c=u(c,i,a,s,t[T+3],16,-722521979),s=u(s,c,i,a,t[T+6],23,76029189),
a=u(a,s,c,i,t[T+9],4,-640364487),i=u(i,a,s,c,t[T+12],11,-421815835),c=u(c,i,a,s,t[T+15],16,530742520),
s=u(s,c,i,a,t[T+2],23,-995338651),a=d(a,s,c,i,t[T+0],6,-198630844),i=d(i,a,s,c,t[T+7],10,1126891415),
c=d(c,i,a,s,t[T+14],15,-1416354905),s=d(s,c,i,a,t[T+5],21,-57434055),a=d(a,s,c,i,t[T+12],6,1700485571),
i=d(i,a,s,c,t[T+3],10,-1894986606),c=d(c,i,a,s,t[T+10],15,-1051523),s=d(s,c,i,a,t[T+1],21,-2054922799),
a=d(a,s,c,i,t[T+8],6,1873313359),i=d(i,a,s,c,t[T+15],10,-30611744),c=d(c,i,a,s,t[T+6],15,-1560198380),
s=d(s,c,i,a,t[T+13],21,1309151649),a=d(a,s,c,i,t[T+4],6,-145523070),i=d(i,a,s,c,t[T+11],10,-1120210379),
c=d(c,i,a,s,t[T+2],15,718787259),s=d(s,c,i,a,t[T+9],21,-343485551),a=r.addWords(a,f),
s=r.addWords(s,p),c=r.addWords(c,g),i=r.addWords(i,W)}return[a,s,c,i]}function s(t,n){
var e=r.stringToWord(n);e.length>16&&(e=a(e,n.length*c));for(var o=[],u=[],d=0;16>d;d++)o[d]=909522486^e[d],
u[d]=1549556828^e[d];var s=a(o.concat(r.stringToWord(t)),512+t.length*c);return a(u.concat(s),640);
}var c=8;return r.MD5=function(t,n){var e=n||r.outputTypes.Base64,o=a(r.stringToWord(t),t.length*c);
switch(e){case r.outputTypes.Raw:return o;case r.outputTypes.Hex:return r.wordToHex(o);
case r.outputTypes.String:return r.wordToString(o);default:return r.wordToBase64(o);
}},r.MD5._hmac=function(t,n,e){var o=e||r.outputTypes.Base64,u=s(t,n);switch(o){case r.outputTypes.Raw:
return u;case r.outputTypes.Hex:return r.wordToHex(u);case r.outputTypes.String:return r.wordToString(u);
default:return r.wordToBase64(u)}},r.MD5});