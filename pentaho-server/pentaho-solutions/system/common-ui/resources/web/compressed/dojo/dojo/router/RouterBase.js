define(["dojo/_base/declare","dojo/hash","dojo/topic"],function(e,t,r){function n(e,t,r){
var n,a,i,s,o,u,h;if(n=this.callbackQueue,a=!1,i=!1,s={stopImmediatePropagation:function(){
a=!0},preventDefault:function(){i=!0},oldPath:t,newPath:r,params:e},o=[s],e instanceof Array)o=o.concat(e);else for(var c in e)o.push(e[c]);
for(u=0,h=n.length;h>u;++u)a||n[u].apply(null,o);return!i}var a;a=String.prototype.trim?function(e){
return e.trim()}:function(e){return e.replace(/^\s\s*/,"").replace(/\s\s*$/,"")};var i=e(null,{
_routes:null,_routeIndex:null,_started:!1,_currentPath:"",idMatch:/:(\w[\w\d]*)/g,
idReplacement:"([^\\/]+)",globMatch:/\*(\w[\w\d]*)/,globReplacement:"(.+)",constructor:function(e){
this._routes=[],this._routeIndex={};for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);
},register:function(e,t){return this._registerRoute(e,t)},registerBefore:function(e,t){
return this._registerRoute(e,t,!0)},go:function(e,r){var n;return"string"!=typeof e?!1:(e=a(e),
n=this._handlePathChange(e),n&&t(e,r),n)},startup:function(e){if(!this._started){
var n=this,a=t();this._started=!0,this._hashchangeHandle=r.subscribe("/dojo/hashchange",function(){
n._handlePathChange.apply(n,arguments)}),a?this._handlePathChange(a):this.go(e,!0);
}},destroy:function(){this._hashchangeHandle.remove(),this._routes=null,this._routeIndex=null;
},_handlePathChange:function(e){var t,r,n,a,i,s,o,u,h,c=this._routes,l=this._currentPath;
if(!this._started||e===l)return o;for(o=!0,t=0,n=c.length;n>t;++t)if(i=c[t],s=i.route.exec(e)){
if(i.parameterNames)for(u=i.parameterNames,h={},r=0,a=u.length;a>r;++r)h[u[r]]=s[r+1];else h=s.slice(1);
o=i.fire(h,l,e)}return o&&(this._currentPath=e),o},_convertRouteToRegExp:function(e){
return e=e.replace(this.idMatch,this.idReplacement),e=e.replace(this.globMatch,this.globReplacement),
e="^"+e+"$",new RegExp(e)},_getParameterNames:function(e){var t,r=this.idMatch,n=this.globMatch,a=[];
for(r.lastIndex=0;null!==(t=r.exec(e));)a.push(t[1]);return null!==(t=n.exec(e))&&a.push(t[1]),
a.length>0?a:null},_indexRoutes:function(){var e,t,r,n,a=this._routes;for(n=this._routeIndex={},
e=0,t=a.length;t>e;++e)r=a[e],n[r.route]=e},_registerRoute:function(e,t,r){var a,i,s,o,u,h=this,c=this._routes,l=this._routeIndex;
return a=this._routeIndex[e],i="undefined"!=typeof a,i&&(s=c[a]),s||(s={route:e,callbackQueue:[],
fire:n}),o=s.callbackQueue,"string"==typeof e&&(s.parameterNames=this._getParameterNames(e),
s.route=this._convertRouteToRegExp(e)),r?o.unshift(t):o.push(t),i||(a=c.length,l[e]=a,
c.push(s)),u=!1,{remove:function(){var e,r;if(!u){for(e=0,r=o.length;r>e;++e)o[e]===t&&o.splice(e,1);
0===o.length&&(c.splice(a,1),h._indexRoutes()),u=!0}},register:function(t,r){return h.register(e,t,r);
}}}});return i});