dojo.provide("dojox.lang.oo.rearrange"),function(){var o=dojo._extraNames,e=o.length,r=Object.prototype.toString,n={};
dojox.lang.oo.rearrange=function(t,a){var i,d,l,g;for(i in a)d=a[i],d&&"[object String]"!=r.call(d)||(l=t[i],
i in n&&n[i]===l||(delete t[i]||(t[i]=void 0),d&&(t[d]=l)));if(e)for(g=0;e>g;++g)i=o[g],
d=a[i],d&&"[object String]"!=r.call(d)||(l=t[i],i in n&&n[i]===l||(delete t[i]||(t[i]=void 0),
d&&(t[d]=l)));return t}}();