define(["dojo/_base/lang","./common"],function(r,i){function o(r,i){r=r.toLowerCase();
for(var o=i.length-1;o>=0;--o)if(r===i[o])return!0;return!1}var e=r.getObject("dojox.charting.scaler.linear",!0),n=3,a=i.getNumericLabel,t=function(i,n,a,t,m,c,u){
a=r.delegate(a),t||("major"==a.fixUpper&&(a.fixUpper="minor"),"major"==a.fixLower&&(a.fixLower="minor")),
m||("minor"==a.fixUpper&&(a.fixUpper="micro"),"minor"==a.fixLower&&(a.fixLower="micro")),
c||("micro"==a.fixUpper&&(a.fixUpper="none"),"micro"==a.fixLower&&(a.fixLower="none"));
var f=o(a.fixLower,["major"])?Math.floor(a.min/t)*t:o(a.fixLower,["minor"])?Math.floor(a.min/m)*m:o(a.fixLower,["micro"])?Math.floor(a.min/c)*c:a.min,l=o(a.fixUpper,["major"])?Math.ceil(a.max/t)*t:o(a.fixUpper,["minor"])?Math.ceil(a.max/m)*m:o(a.fixUpper,["micro"])?Math.ceil(a.max/c)*c:a.max;
a.useMin&&(i=f),a.useMax&&(n=l);var s=!t||a.useMin&&o(a.fixLower,["major"])?i:Math.ceil(i/t)*t,p=!m||a.useMin&&o(a.fixLower,["major","minor"])?i:Math.ceil(i/m)*m,x=!c||a.useMin&&o(a.fixLower,["major","minor","micro"])?i:Math.ceil(i/c)*c,M=t?(a.useMax&&o(a.fixUpper,["major"])?Math.round((n-s)/t):Math.floor((n-s)/t))+1:0,k=m?(a.useMax&&o(a.fixUpper,["major","minor"])?Math.round((n-p)/m):Math.floor((n-p)/m))+1:0,h=c?(a.useMax&&o(a.fixUpper,["major","minor","micro"])?Math.round((n-x)/c):Math.floor((n-x)/c))+1:0,b=m?Math.round(t/m):0,d=c?Math.round(m/c):0,j=t?Math.floor(Math.log(t)/Math.LN10):0,L=m?Math.floor(Math.log(m)/Math.LN10):0,w=u/(n-i);
return isFinite(w)||(w=1),{bounds:{lower:f,upper:l,from:i,to:n,scale:w,span:u},major:{
tick:t,start:s,count:M,prec:j},minor:{tick:m,start:p,count:k,prec:L},micro:{tick:c,
start:x,count:h,prec:0},minorPerMajor:b,microPerMinor:d,scaler:e}};return r.mixin(e,{
buildScaler:function(r,i,o,e,a,m){var c={fixUpper:"none",fixLower:"none",natural:!1
};if(e&&("fixUpper"in e&&(c.fixUpper=String(e.fixUpper)),"fixLower"in e&&(c.fixLower=String(e.fixLower)),
"natural"in e&&(c.natural=Boolean(e.natural))),m=!m||n>m?n:m,"min"in e&&(r=e.min),
"max"in e&&(i=e.max),e.includeZero&&(r>0&&(r=0),0>i&&(i=0)),c.min=r,c.useMin=!0,c.max=i,
c.useMax=!0,"from"in e&&(r=e.from,c.useMin=!1),"to"in e&&(i=e.to,c.useMax=!1),r>=i)return t(r,i,c,0,0,0,o);
a||(a=i-r);var u,f=Math.floor(Math.log(a)/Math.LN10),l=e&&"majorTickStep"in e?e.majorTickStep:Math.pow(10,f),s=0,p=0;
if(e&&"minorTickStep"in e)s=e.minorTickStep;else do{if(s=l/10,(!c.natural||s>.9)&&(u=t(r,i,c,l,s,0,o),
u.bounds.scale*u.minor.tick>m))break;if(s=l/5,(!c.natural||s>.9)&&(u=t(r,i,c,l,s,0,o),
u.bounds.scale*u.minor.tick>m))break;if(s=l/2,(!c.natural||s>.9)&&(u=t(r,i,c,l,s,0,o),
u.bounds.scale*u.minor.tick>m))break;return t(r,i,c,l,0,0,o)}while(!1);if(e&&"microTickStep"in e)p=e.microTickStep,
u=t(r,i,c,l,s,p,o);else do{if(p=s/10,(!c.natural||p>.9)&&(u=t(r,i,c,l,s,p,o),u.bounds.scale*u.micro.tick>n))break;
if(p=s/5,(!c.natural||p>.9)&&(u=t(r,i,c,l,s,p,o),u.bounds.scale*u.micro.tick>n))break;
if(p=s/2,(!c.natural||p>.9)&&(u=t(r,i,c,l,s,p,o),u.bounds.scale*u.micro.tick>n))break;
p=0}while(!1);return p?u:t(r,i,c,l,s,0,o)},buildTicks:function(r,i){var o,e,n,t=r.major.start,m=r.minor.start,c=r.micro.start;
if(i.microTicks&&r.micro.tick)o=r.micro.tick,e=c;else if(i.minorTicks&&r.minor.tick)o=r.minor.tick,
e=m;else{if(!r.major.tick)return null;o=r.major.tick,e=t}var u=1/r.bounds.scale;if(r.bounds.to<=r.bounds.from||isNaN(u)||!isFinite(u)||0>=o||isNaN(o)||!isFinite(o))return null;
for(var f=[],l=[],s=[];e<=r.bounds.to+u;)Math.abs(t-e)<o/2?(n={value:t},i.majorLabels&&(n.label=a(t,r.major.prec,i)),
f.push(n),t+=r.major.tick,m+=r.minor.tick,c+=r.micro.tick):Math.abs(m-e)<o/2?(i.minorTicks&&(n={
value:m},i.minorLabels&&r.minMinorStep<=r.minor.tick*r.bounds.scale&&(n.label=a(m,r.minor.prec,i)),
l.push(n)),m+=r.minor.tick,c+=r.micro.tick):(i.microTicks&&s.push({value:c}),c+=r.micro.tick),
e+=o;return{major:f,minor:l,micro:s}},getTransformerFromModel:function(r){var i=r.bounds.from,o=r.bounds.scale;
return function(r){return(r-i)*o}},getTransformerFromPlot:function(r){var i=r.bounds.from,o=r.bounds.scale;
return function(r){return r/o+i}}})});