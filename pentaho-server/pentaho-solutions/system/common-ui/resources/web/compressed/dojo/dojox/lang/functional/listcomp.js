dojo.provide("dojox.lang.functional.listcomp"),function(){var n=/\bfor\b|\bif\b/gm,o=function(o){
for(var r=o.split(n),t=o.match(n),i=["var r = [];"],u=[],c=0,e=t.length;e>c;){var a=t[c],f=r[++c];
"for"!=a||/^\s*\(\s*(;|var)/.test(f)||(f=f.replace(/^\s*\(/,"(var ")),i.push(a,f,"{"),
u.push("}")}return i.join("")+"r.push("+r[0]+");"+u.join("")+"return r;"};dojo.mixin(dojox.lang.functional,{
buildListcomp:function(n){return"function(){"+o(n)+"}"},compileListcomp:function(n){
return new Function([],o(n))},listcomp:function(n){return new Function([],o(n))();
}})}();