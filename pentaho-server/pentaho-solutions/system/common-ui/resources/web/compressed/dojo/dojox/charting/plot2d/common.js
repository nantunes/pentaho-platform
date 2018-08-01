define(["dojo/_base/lang","dojo/_base/array","dojo/_base/Color","dojox/gfx","dojox/lang/functional","../scaler/common"],function(a,n,t,m,i,e){
var r=a.getObject("dojox.charting.plot2d.common",!0);return a.mixin(r,{doIfLoaded:e.doIfLoaded,
makeStroke:function(a){return a?(("string"==typeof a||a instanceof t)&&(a={color:a
}),m.makeParameters(m.defaultStroke,a)):a},augmentColor:function(a,n){var m=new t(a),i=new t(n);
return i.a=m.a,i},augmentStroke:function(a,n){var t=r.makeStroke(a);return t&&(t.color=r.augmentColor(t.color,n)),
t},augmentFill:function(a,n){new t(n);return"string"==typeof a||a instanceof t?r.augmentColor(a,n):a;
},defaultStats:{vmin:Number.POSITIVE_INFINITY,vmax:Number.NEGATIVE_INFINITY,hmin:Number.POSITIVE_INFINITY,
hmax:Number.NEGATIVE_INFINITY},collectSimpleStats:function(t){for(var m=a.delegate(r.defaultStats),i=0;i<t.length;++i)for(var e=t[i],x=0;x<e.data.length;x++)if(null!==e.data[x]){
if("number"==typeof e.data[x]){var o=m.vmin,u=m.vmax;"ymin"in e&&"ymax"in e||n.forEach(e.data,function(a,n){
if(null!==a){var t=n+1,i=a;isNaN(i)&&(i=0),m.hmin=Math.min(m.hmin,t),m.hmax=Math.max(m.hmax,t),
m.vmin=Math.min(m.vmin,i),m.vmax=Math.max(m.vmax,i)}}),"ymin"in e&&(m.vmin=Math.min(o,e.ymin)),
"ymax"in e&&(m.vmax=Math.max(u,e.ymax))}else{var h=m.hmin,f=m.hmax,o=m.vmin,u=m.vmax;
"xmin"in e&&"xmax"in e&&"ymin"in e&&"ymax"in e||n.forEach(e.data,function(a,n){if(null!==a){
var t="x"in a?a.x:n+1,i=a.y;isNaN(t)&&(t=0),isNaN(i)&&(i=0),m.hmin=Math.min(m.hmin,t),
m.hmax=Math.max(m.hmax,t),m.vmin=Math.min(m.vmin,i),m.vmax=Math.max(m.vmax,i)}}),
"xmin"in e&&(m.hmin=Math.min(h,e.xmin)),"xmax"in e&&(m.hmax=Math.max(f,e.xmax)),"ymin"in e&&(m.vmin=Math.min(o,e.ymin)),
"ymax"in e&&(m.vmax=Math.max(u,e.ymax))}break}return m},calculateBarSize:function(a,n,t){
t||(t=1);var m=n.gap,i=(a-2*m)/t;return"minBarSize"in n&&(i=Math.max(i,n.minBarSize)),
"maxBarSize"in n&&(i=Math.min(i,n.maxBarSize)),i=Math.max(i,1),m=(a-i*t)/2,{size:i,
gap:m}},collectStackedStats:function(n){var t=a.clone(r.defaultStats);if(n.length){
t.hmin=Math.min(t.hmin,1),t.hmax=i.foldl(n,"seed, run -> Math.max(seed, run.data.length)",t.hmax);
for(var m=0;m<t.hmax;++m){var e=n[0].data[m];e=e&&("number"==typeof e?e:e.y),isNaN(e)&&(e=0),
t.vmin=Math.min(t.vmin,e);for(var x=1;x<n.length;++x){var o=n[x].data[m];o=o&&("number"==typeof o?o:o.y),
isNaN(o)&&(o=0),e+=o}t.vmax=Math.max(t.vmax,e)}}return t},curve:function(a,t){var m=a.slice(0);
"x"==t&&(m[m.length]=m[0]);var i=n.map(m,function(a,n){if(0==n)return"M"+a.x+","+a.y;
if(!isNaN(t)){var i=a.x-m[n-1].x,e=m[n-1].y;return"C"+(a.x-(t-1)*(i/t))+","+e+" "+(a.x-i/t)+","+a.y+" "+a.x+","+a.y;
}if("X"==t||"x"==t||"S"==t){var r,x,o,u,h,f,l=m[n-1],y=m[n],v=1/6;1==n?(r="x"==t?m[m.length-2]:l,
v=1/3):r=m[n-2],n==m.length-1?(x="x"==t?m[1]:y,v=1/3):x=m[n+1];var c=Math.sqrt((y.x-l.x)*(y.x-l.x)+(y.y-l.y)*(y.y-l.y)),d=Math.sqrt((y.x-r.x)*(y.x-r.x)+(y.y-r.y)*(y.y-r.y)),s=Math.sqrt((x.x-l.x)*(x.x-l.x)+(x.y-l.y)*(x.y-l.y)),N=d*v,g=s*v;
N>c/2&&g>c/2?(N=c/2,g=c/2):N>c/2?(N=c/2,g=c/2*s/d):g>c/2&&(g=c/2,N=c/2*d/s),"S"==t&&(r==l&&(N=0),
y==x&&(g=0)),o=l.x+N*(y.x-r.x)/d,u=l.y+N*(y.y-r.y)/d,h=y.x-g*(x.x-l.x)/s,f=y.y-g*(x.y-l.y)/s;
}return"C"+(o+","+u+" "+h+","+f+" "+y.x+","+y.y)});return i.join(" ")},getLabel:function(a,n,t){
return e.doIfLoaded("dojo/number",function(m){return(n?m.format(a,{places:t}):m.format(a))||"";
},function(){return n?a.toFixed(t):a.toString()})}})});