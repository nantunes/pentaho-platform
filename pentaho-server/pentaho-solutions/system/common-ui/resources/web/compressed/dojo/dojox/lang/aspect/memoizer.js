dojo.provide("dojox.lang.aspect.memoizer"),function(){var e=dojox.lang.aspect,r={
around:function(r){var t,n,a,o=e.getContext(),m=o.joinPoint,i=o.instance;if((t=i.__memoizerCache)&&(t=t[m.targetName])&&r in t)return t[r];
var a=e.proceed.apply(null,arguments);return(t=i.__memoizerCache)||(t=i.__memoizerCache={}),
(n=t[m.targetName])||(n=t[m.targetName]={}),n[r]=a}},t=function(r){return{around:function(){
var t,n,a,o=e.getContext(),m=o.joinPoint,i=o.instance,u=r.apply(i,arguments);if((t=i.__memoizerCache)&&(t=t[m.targetName])&&u in t)return t[u];
var a=e.proceed.apply(null,arguments);return(t=i.__memoizerCache)||(t=i.__memoizerCache={}),
(n=t[m.targetName])||(n=t[m.targetName]={}),n[u]=a}}};e.memoizer=function(e){return 0==arguments.length?r:t(e);
}}();