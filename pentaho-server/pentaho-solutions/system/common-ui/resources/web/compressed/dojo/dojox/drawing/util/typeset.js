define(["../library/greek"],function(r){return{convertHTML:function(e){return e?e.replace(/&([^;]+);/g,function(e,n){
if("#"==n.charAt(0)){var o=+n.substr(1);if(!isNaN(o))return String.fromCharCode(o);
}else if(r[n])return String.fromCharCode(r[n]);return console.warn("no HTML conversion for ",e),
e}):e},convertLaTeX:function(e){return e?e.replace(/\\([a-zA-Z]+)/g,function(n,o){
return r[o]?String.fromCharCode(r[o]):"mu"==o.substr(0,2)?String.fromCharCode(r.mu)+o.substr(2):"theta"==o.substr(0,5)?String.fromCharCode(r.theta)+o.substr(5):"phi"==o.substr(0,3)?String.fromCharCode(r.phi)+o.substr(3):(console.log("no match for ",n," in ",e),
void console.log("Need user-friendly error handling here!"))}).replace(/\\\\/g,"\\"):e;
}}});