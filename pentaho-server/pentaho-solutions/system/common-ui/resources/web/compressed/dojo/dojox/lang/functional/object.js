define(["dojo/_base/kernel","dojo/_base/lang","./lambda"],function(n,r,a){var i={};
return r.mixin(a,{keys:function(n){var r=[];for(var a in n)a in i||r.push(a);return r;
},values:function(n){var r=[];for(var a in n)a in i||r.push(n[a]);return r},filterIn:function(r,l,o){
o=o||n.global,l=a.lambda(l);var e,u,f={};for(u in r)u in i||(e=r[u],l.call(o,e,u,r)&&(f[u]=e));
return f},forIn:function(r,l,o){o=o||n.global,l=a.lambda(l);for(var e in r)e in i||l.call(o,r[e],e,r);
return o},mapIn:function(r,l,o){o=o||n.global,l=a.lambda(l);var e,u={};for(e in r)e in i||(u[e]=l.call(o,r[e],e,r));
return u}}),a});