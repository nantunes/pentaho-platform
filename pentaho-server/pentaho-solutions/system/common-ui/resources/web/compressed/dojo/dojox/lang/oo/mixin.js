dojo.provide("dojox.lang.oo.mixin"),dojo.experimental("dojox.lang.oo.mixin"),dojo.require("dojox.lang.oo.Filter"),
dojo.require("dojox.lang.oo.Decorator"),function(){var o=dojox.lang.oo,n=o.Filter,r=o.Decorator,i={},e=function(o){
return o},t=function(o,n,r){return n},a=function(o,n,r,i){o[n]=r},u=dojo._extraNames,f=u.length,c=o.applyDecorator=function(o,n,i,e){
if(i instanceof r){var t=i.decorator;return i=c(o,n,i.value,e),t(n,i,e)}return o(n,i,e);
};o.__mixin=function(o,n,r,e,t){var a,l,d,x,g,j;for(a in n)d=n[a],a in i&&i[a]===d||(l=e(a,o,n,d),
!l||l in o&&l in i&&i[l]===d||(g=o[l],x=c(r,l,d,g),g!==x&&t(o,l,x,g)));if(f)for(j=0;f>j;++j)a=u[j],
d=n[a],a in i&&i[a]===d||(l=e(a,o,n,d),!l||l in o&&l in i&&i[l]===d||(g=o[l],x=c(r,l,d,g),
g!==x&&t(o,l,x,g)));return o},o.mixin=function(i,u){for(var f,c,l=1,d=arguments.length;d>l;++l)u=arguments[l],
u instanceof n?(c=u.filter,u=u.bag):c=e,u instanceof r?(f=u.decorator,u=u.value):f=t,
o.__mixin(i,u,f,c,a);return i}}();