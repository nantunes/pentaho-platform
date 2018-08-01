define(["dojo/_base/lang"],function(r){var o=r.getObject("dojox.encoding.digests",!0);
o.outputTypes={Base64:0,Hex:1,String:2,Raw:3},o.addWords=function(r,o){var n=(65535&r)+(65535&o),t=(r>>16)+(o>>16)+(n>>16);
return t<<16|65535&n};var n=8,t=(1<<n)-1;return o.stringToWord=function(r){for(var o=[],e=0,a=r.length*n;a>e;e+=n)o[e>>5]|=(r.charCodeAt(e/n)&t)<<e%32;
return o},o.wordToString=function(r){for(var o=[],e=0,a=32*r.length;a>e;e+=n)o.push(String.fromCharCode(r[e>>5]>>>e%32&t));
return o.join("")},o.wordToHex=function(r){for(var o="0123456789abcdef",n=[],t=0,e=4*r.length;e>t;t++)n.push(o.charAt(r[t>>2]>>t%4*8+4&15)+o.charAt(r[t>>2]>>t%4*8&15));
return n.join("")},o.wordToBase64=function(r){for(var o="=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=[],e=0,a=4*r.length;a>e;e+=3)for(var h=(r[e>>2]>>8*(e%4)&255)<<16|(r[e+1>>2]>>8*((e+1)%4)&255)<<8|r[e+2>>2]>>8*((e+2)%4)&255,i=0;4>i;i++)8*e+6*i>32*r.length?t.push(o):t.push(n.charAt(h>>6*(3-i)&63));
return t.join("")},o.stringToUtf8=function(r){for(var o,n,t="",e=-1;++e<r.length;)o=r.charCodeAt(e),
n=e+1<r.length?r.charCodeAt(e+1):0,o>=55296&&56319>=o&&n>=56320&&57343>=n&&(o=65536+((1023&o)<<10)+(1023&n),
e++),127>=o?t+=String.fromCharCode(o):2047>=o?t+=String.fromCharCode(192|o>>>6&31,128|63&o):65535>=o?t+=String.fromCharCode(224|o>>>12&15,128|o>>>6&63,128|63&o):2097151>=o&&(t+=String.fromCharCode(240|o>>>18&7,128|o>>>12&63,128|o>>>6&63,128|63&o));
return t},o});