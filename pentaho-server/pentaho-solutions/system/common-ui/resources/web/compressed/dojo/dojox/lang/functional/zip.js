dojo.provide("dojox.lang.functional.zip"),function(){var n=dojox.lang.functional;dojo.mixin(n,{
zip:function(){for(var n,r,o=arguments[0].length,t=arguments.length,a=1,i=new Array(o);t>a;o=Math.min(o,arguments[a++].length));
for(a=0;o>a;++a){for(r=new Array(t),n=0;t>n;r[n]=arguments[n][a],++n);i[a]=r}return i;
},unzip:function(r){return n.zip.apply(null,r)}})}();