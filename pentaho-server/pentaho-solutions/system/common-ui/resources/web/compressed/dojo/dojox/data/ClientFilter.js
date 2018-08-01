define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/Deferred","dojo/data/util/filter"],function(e,t,r,n,i){
var a=function(e,t,r){return function(n){e._updates.push({create:t&&n,remove:r&&n
}),u.onUpdate()}},u=e("dojox.data.ClientFilter",null,{cacheByDefault:!1,constructor:function(){
this.onSet=a(this,!0,!0),this.onNew=a(this,!0,!1),this.onDelete=a(this,!1,!0),this._updates=[],
this._fetchCache=[]},clearCache:function(){this._fetchCache=[]},updateResultSet:function(e,t){
if(this.isUpdateable(t)){for(var n=t._version||0;n<this._updates.length;n++){var i=this._updates[n].create,a=this._updates[n].remove;
if(a)for(var u=0;u<e.length;u++)if(this.getIdentity(e[u])==this.getIdentity(a)){e.splice(u--,1);
var s=!0}i&&this.matchesQuery(i,t)&&-1==r.indexOf(e,i)&&(e.push(i),s=!0)}return t.sort&&s&&e.sort(this.makeComparator(t.sort.concat())),
e._fullLength=e.length,t.count&&s&&t.count!==1/0&&e.splice(t.count,e.length),t._version=this._updates.length,
s?2:1}return 0},querySuperSet:function(e,r){if(e.query==r.query)return{};if(!(r.query instanceof Object)||e.query&&"object"!=typeof e.query)return!1;
var n=t.mixin({},r.query);for(var a in e.query)if(n[a]==e.query[a])delete n[a];else if("string"!=typeof e.query[a]||!i.patternToRegExp(e.query[a]).test(n[a]))return!1;
return n},serverVersion:0,cachingFetch:function(e){for(var i=this,a=0;a<this._fetchCache.length;a++){
var u=this._fetchCache[a],s=this.querySuperSet(u,e);if(s!==!1){var o=u._loading;o||(o=new n,
o.callback(u.cacheResults)),o.addCallback(function(r){return r=i.clientSideFetch(t.mixin(t.mixin({},e),{
query:s}),r),o.fullLength=r._fullLength,r}),e._version=u._version;break}}if(!o){var c=t.mixin({},e),h=(e.queryOptions||0).cache,l=this._fetchCache;
(void 0===h?this.cacheByDefault:h)&&((e.start||e.count)&&(delete c.start,delete c.count,
e.clientQuery=t.mixin(e.clientQuery||{},{start:e.start,count:e.count})),e=c,l.push(e)),
o=e._loading=this._doQuery(e),o.addErrback(function(){l.splice(r.indexOf(l,e),1)});
}var f=this.serverVersion;return o.addCallback(function(t){return delete e._loading,
t&&(e._version="number"==typeof e._version?e._version:f,i.updateResultSet(t,e),e.cacheResults=t,
(!e.count||t.length<e.count)&&(o.fullLength=(e.start?e.start:0)+t.length)),t}),o},
isUpdateable:function(e){return!e.query||"object"==typeof e.query},clientSideFetch:function(e,t){
if(e.queryOptions&&e.queryOptions.results&&(t=e.queryOptions.results),e.query)for(var r=[],n=0;n<t.length;n++){
var i=t[n];i&&this.matchesQuery(i,e)&&r.push(t[n])}else r=e.sort?t.concat():t;return e.sort&&r.sort(this.makeComparator(e.sort.concat())),
this.clientSidePaging(e,r)},clientSidePaging:function(e,t){var r=e.start||0,n=r||e.count?t.slice(r,r+(e.count||t.length)):t;
return n._fullLength=t.length,n},matchesQuery:function(e,t){var r=t.query,n=t.queryOptions&&t.queryOptions.ignoreCase;
for(var a in r){var u=r[a],s=this.getValue(e,a);if("string"==typeof u&&(u.match(/[\*\.]/)||n)?!i.patternToRegExp(u,n).test(s):s!=u)return!1;
}return!0},makeComparator:function(e){var t=e.shift();if(!t)return function(){return 0;
};var r=t.attribute,n=!!t.descending,i=this.makeComparator(e),a=this;return function(e,t){
var u=a.getValue(e,r),s=a.getValue(t,r);return u!=s?s>u==n?1:-1:i(e,t)}}});return u.onUpdate=function(){},
u});