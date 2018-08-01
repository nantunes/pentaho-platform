define(["dojo/_base/lang","./common"],function(a,t){var n=a.getObject("dojox.charting.plot2d.commonStacked",!0);
return a.mixin(n,{collectStats:function(e){for(var l=a.delegate(t.defaultStats),r=0;r<e.length;++r)for(var u=e[r],o=0;o<u.data.length;o++){
var i,m;null!==u.data[o]&&("number"!=typeof u.data[o]&&u.data[o].hasOwnProperty("x")?(i=u.data[o].x,
null!==i&&(m=n.getValue(e,r,i)[0],m=null!=m&&m.y?m.y:null)):(m=n.getIndexValue(e,r,o)[0],
i=o+1),l.hmin=Math.min(l.hmin,i),l.hmax=Math.max(l.hmax,i),l.vmin=Math.min(l.vmin,m),
l.vmax=Math.max(l.vmax,m))}return l},getIndexValue:function(a,t,n){var e,l,r,u=0;for(l=0;t>=l;++l)r=u,
e=a[l].data[n],null!=e&&(isNaN(e)&&(e=e.y||0),u+=e);return[u,r]},getValue:function(a,t,n){
var e,l,r,u,o=null;for(e=0;t>=e;++e)for(l=0;l<a[e].data.length;l++)if(u=o,r=a[e].data[l],
null!==r){if(r.x==n){o||(o={x:n}),null!=r.y&&(null==o.y&&(o.y=0),o.y+=r.y);break}
if(r.x>n)break}return[o,u]}})});