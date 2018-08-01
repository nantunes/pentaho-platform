dojo.provide("dojox.secure.fromJson"),dojox.secure.fromJson="undefined"!=typeof JSON?JSON.parse:function(){
function e(e,r,n){return r?f[r]:String.fromCharCode(parseInt(n,16))}var r="(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)",n='(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))',t='(?:"'+n+'*")',a=new RegExp("(?:false|true|null|[\\{\\}\\[\\]]|"+r+"|"+t+")","g"),o=new RegExp("\\\\(?:([^u])|u(.{4}))","g"),f={
'"':'"',"/":"/","\\":"\\",b:"\b",f:"\f",n:"\n",r:"\r",t:"	"},i=new String(""),l="\\",s=({
"{":Object,"[":Array},Object.hasOwnProperty);return function(r,n){var t,f=r.match(a),c=f[0],h=!1;
"{"===c?t={}:"["===c?t=[]:(t=[],h=!0);for(var u,d=[t],g=1-h,v=f.length;v>g;++g){c=f[g];
var b;switch(c.charCodeAt(0)){default:b=d[0],b[u||b.length]=+c,u=void 0;break;case 34:
if(c=c.substring(1,c.length-1),-1!==c.indexOf(l)&&(c=c.replace(o,e)),b=d[0],!u){if(!(b instanceof Array)){
u=c||i;break}u=b.length}b[u]=c,u=void 0;break;case 91:b=d[0],d.unshift(b[u||b.length]=[]),
u=void 0;break;case 93:d.shift();break;case 102:b=d[0],b[u||b.length]=!1,u=void 0;
break;case 110:b=d[0],b[u||b.length]=null,u=void 0;break;case 116:b=d[0],b[u||b.length]=!0,
u=void 0;break;case 123:b=d[0],d.unshift(b[u||b.length]={}),u=void 0;break;case 125:
d.shift()}}if(h){if(1!==d.length)throw new Error;t=t[0]}else if(d.length)throw new Error;
if(n){var p=function(e,r){var t=e[r];if(t&&"object"==typeof t){var a=null;for(var o in t)if(s.call(t,o)&&t!==e){
var f=p(t,o);void 0!==f?t[o]=f:(a||(a=[]),a.push(o))}if(a)for(var i=a.length;--i>=0;)delete t[a[i]];
}return n.call(e,r,t)};t=p({"":t},"")}return t}}();