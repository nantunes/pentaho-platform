define(["../..","dojo/_base/lang","dojo/_base/array"],function(n,e,t){var a=e.getObject("lang.functional",!0,n),r={},i="ab".split(/a*/).length>1?String.prototype.split:function(n){
var e=this.split.call(this,n),t=n.exec(this);return t&&0==t.index&&e.unshift(""),
e},o=function(n){var e=[],a=i.call(n,/\s*->\s*/m);if(a.length>1)for(;a.length;)n=a.pop(),
e=a.pop().split(/\s*,\s*|\s+/m),a.length&&a.push("(function("+e.join(", ")+"){ return ("+n+"); })");else if(n.match(/\b_\b/))e=["_"];else{
var r=n.match(/^\s*(?:[+*\/%&|\^\.=<>]|!=)/m),o=n.match(/[+\-*\/%&|\^\.=<>!]\s*$/m);
if(r||o)r&&(e.push("$1"),n="$1"+n),o&&(e.push("$2"),n+="$2");else{var u=n.replace(/(?:\b[A-Z]|\.[a-zA-Z_$])[a-zA-Z_$\d]*|[a-zA-Z_$][a-zA-Z_$\d]*:|this|true|false|null|undefined|typeof|instanceof|in|delete|new|void|arguments|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|eval|isFinite|isNaN|parseFloat|parseInt|unescape|dojo|dijit|dojox|window|document|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"/g,"").match(/([a-z_$][a-z_$\d]*)/gi)||[],s={};
t.forEach(u,function(n){s.hasOwnProperty(n)||(e.push(n),s[n]=1)})}}return{args:e,
body:n}},u=function(n){return n.length?function(){var e=n.length-1,t=a.lambda(n[e]).apply(this,arguments);
for(--e;e>=0;--e)t=a.lambda(n[e]).call(this,t);return t}:function(n){return n}};return e.mixin(a,{
rawLambda:function(n){return o(n)},buildLambda:function(n){var e=o(n);return"function("+e.args.join(",")+"){return ("+e.body+");}";
},lambda:function(n){if("function"==typeof n)return n;if(n instanceof Array)return u(n);
if(r.hasOwnProperty(n))return r[n];var e=o(n);return r[n]=new Function(e.args,"return ("+e.body+");");
},clearLambdaCache:function(){r={}}}),a});