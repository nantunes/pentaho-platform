define(["dojo/_base/lang"],function(h){var r=h.getObject("dojox.encoding.base64",!0),e="=",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
return r.encode=function(h){for(var r=[],n=h.length,t=n%3,s=n-t,u=0;s>u;){var c=h[u++]<<16|h[u++]<<8|h[u++];
r.push(a.charAt(c>>>18&63)),r.push(a.charAt(c>>>12&63)),r.push(a.charAt(c>>>6&63)),
r.push(a.charAt(63&c))}switch(t){case 2:var c=h[u++]<<16|h[u++]<<8;r.push(a.charAt(c>>>18&63)),
r.push(a.charAt(c>>>12&63)),r.push(a.charAt(c>>>6&63)),r.push(e);break;case 1:var c=h[u++]<<16;
r.push(a.charAt(c>>>18&63)),r.push(a.charAt(c>>>12&63)),r.push(e),r.push(e)}return r.join("");
},r.decode=function(h){for(var r=h.split(""),n=[],t=r.length;r[--t]==e;);for(var s=0;t>s;){
var u=a.indexOf(r[s++])<<18;t>=s&&(u|=a.indexOf(r[s++])<<12),t>=s&&(u|=a.indexOf(r[s++])<<6),
t>=s&&(u|=a.indexOf(r[s++])),n.push(u>>>16&255),n.push(u>>>8&255),n.push(255&u)}for(;0==n[n.length-1];)n.pop();
return n},r});