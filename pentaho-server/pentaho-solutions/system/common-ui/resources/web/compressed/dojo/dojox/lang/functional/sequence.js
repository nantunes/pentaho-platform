define(["dojo/_base/kernel","dojo/_base/lang","./lambda"],function(a,l,n){return l.mixin(n,{
repeat:function(l,r,e,o){o=o||a.global,r=n.lambda(r);var b=new Array(l),t=1;for(b[0]=e;l>t;b[t]=e=r.call(o,e),
++t);return b},until:function(l,r,e,o){o=o||a.global,r=n.lambda(r),l=n.lambda(l);for(var b=[];!l.call(o,e);b.push(e),
e=r.call(o,e));return b}}),n});