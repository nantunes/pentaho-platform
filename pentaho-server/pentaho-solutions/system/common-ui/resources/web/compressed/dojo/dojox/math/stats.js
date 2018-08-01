define(["dojo","../main"],function(t,n){t.getObject("math.stats",!0,n);var r=n.math.stats;
return t.mixin(r,{sd:function(t){return Math.sqrt(r.variance(t))},variance:function(n){
var r=0,a=0;return t.forEach(n,function(t){r+=t,a+=Math.pow(t,2)}),a/n.length-Math.pow(r/n.length,2);
},bestFit:function(n,r,a){r=r||"x",a=a||"y",void 0!==n[0]&&"number"==typeof n[0]&&(n=t.map(n,function(t,n){
return{x:n,y:t}}));for(var e,o=0,i=0,u=0,h=0,c=0,f=0,s=0,p=n.length,m=0;p>m;m++)o+=n[m][r],
i+=n[m][a],u+=Math.pow(n[m][r],2),h+=Math.pow(n[m][a],2),c+=n[m][r]*n[m][a];for(m=0;p>m;m++)e=n[m][r]-o/p,
f+=e*e,s+=e*n[m][a];var l=s/(f||1),v=Math.sqrt((u-Math.pow(o,2)/p)*(h-Math.pow(i,2)/p));
if(0===v)throw new Error("dojox.math.stats.bestFit: the denominator for Pearson's R is 0.");
var M=(c-o*i/p)/v,g=Math.pow(M,2);return 0>l&&(M=-M),{slope:l,intercept:(i-o*l)/(p||1),
r:M,r2:g}},forecast:function(t,n,a,e){var o=r.bestFit(t,a,e);return o.slope*n+o.intercept;
},mean:function(n){var r=0;return t.forEach(n,function(t){r+=t}),r/Math.max(n.length,1);
},min:function(t){return Math.min.apply(null,t)},max:function(t){return Math.max.apply(null,t);
},median:function(t){var n=t.slice(0).sort(function(t,n){return t-n});return(n[Math.floor(t.length/2)]+n[Math.ceil(t.length/2)])/2;
},mode:function(n){var r={},a=0,e=Number.MIN_VALUE;t.forEach(n,function(t){void 0!==r[t]?r[t]++:r[t]=1;
});for(var o in r)e<r[o]&&(e=r[o],a=o);return a},sum:function(n){var r=0;return t.forEach(n,function(t){
r+=t}),r},approxLin:function(t,n){var r=n*(t.length-1),a=Math.ceil(r),e=a-1;return 0>e?t[0]:a>=t.length?t[t.length-1]:t[e]*(a-r)+t[a]*(r-e);
},summary:function(t,n){n||(t=t.slice(0),t.sort(function(t,n){return t-n}));var a=r.approxLin,e={
min:t[0],p25:a(t,.25),med:a(t,.5),p75:a(t,.75),max:t[t.length-1],p10:a(t,.1),p90:a(t,.9)
};return e}}),n.math.stats});