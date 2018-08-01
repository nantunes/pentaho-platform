define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/kernel","dojo/_base/json","../_StoreLayer"],function(t,e,i,n,r){
var s="filter",o="clear",h=function(t,n){return n?e.hitch(t||i.global,n):function(){};
},l=function(t){var i={};if(t&&e.isObject(t))for(var n in t)i[n]=t[n];return i},a=t("dojox.grid.enhanced.plugins.filter._FilterLayerMixin",null,{
tags:["sizeChange"],name:function(){return"filter"},onFilterDefined:function(t){},
onFiltered:function(t,e){}}),c=t("dojox.grid.enhanced.plugins.filter.ServerSideFilterLayer",[r._ServerSideLayer,a],{
constructor:function(t){this._onUserCommandLoad=t.setupFilterQuery||this._onUserCommandLoad,
this.filterDef(null)},filterDef:function(t){if(t){this._filter=t;var e=t.toObject();
this.command(s,this._isStateful?n.toJson(e):e),this.command(o,null),this.useCommands(!0),
this.onFilterDefined(t)}else null===t&&(this._filter=null,this.command(s,null),this.command(o,!0),
this.useCommands(!0),this.onFilterDefined(null));return this._filter},onCommandLoad:function(t,e){
this.inherited(arguments);var i=e.onBegin;if(this._isStateful){var n;if(t){this.command(s,null),
this.command(o,null),this.useCommands(!1);var r=t.split(",");if(!(r.length>=2))return;
n=this._filteredSize=parseInt(r[0],10),this.onFiltered(n,parseInt(r[1],10))}else n=this._filteredSize;
this.enabled()&&(e.onBegin=function(t,r){h(e.scope,i)(n,r)})}else{var l=this;e.onBegin=function(t,n){
l._filter||(l._storeSize=t),l.onFiltered(t,l._storeSize||t),n.onBegin=i,h(e.scope,i)(t,n);
}}}}),u=t("dojox.grid.enhanced.plugins.filter.ClientSideFilterLayer",[r._StoreLayer,a],{
_storeSize:-1,_fetchAll:!0,constructor:function(t){this.filterDef(null),t=e.isObject(t)?t:{},
this.fetchAllOnFirstFilter(t.fetchAll),this._getter=e.isFunction(t.getter)?t.getter:this._defaultGetter;
},_defaultGetter:function(t,e,i,n){return n.getValue(t,e)},filterDef:function(t){
return void 0!==t&&(this._filter=t,this.invalidate(),this.onFilterDefined(t)),this._filter;
},setGetter:function(t){e.isFunction(t)&&(this._getter=t)},fetchAllOnFirstFilter:function(t){
return void 0!==t&&(this._fetchAll=!!t),this._fetchAll},invalidate:function(){this._items=[],
this._nextUnfetchedIdx=0,this._result=[],this._indexMap=[],this._resultStartIdx=0;
},_fetch:function(t,i){if(!this._filter){var r=t.onBegin,s=this;return t.onBegin=function(e,i){
h(t.scope,r)(e,i),s.onFiltered(e,e)},this.originFetch(t),t}try{var o=i?i._nextResultItemIdx:t.start;
if(o=o||0,!i){this._result=[],this._resultStartIdx=o;var a;e.isArray(t.sort)&&t.sort.length>0&&(a=n.toJson(t.sort))!=this._lastSortInfo&&(this.invalidate(),
this._lastSortInfo=a)}var c="number"==typeof t.count?o+t.count-this._result.length:this._items.length;
this._result.length?this._result=this._result.concat(this._items.slice(o,c)):this._result=this._items.slice(t.start,"number"==typeof t.count?t.start+t.count:this._items.length),
this._result.length>=t.count||this._hasReachedStoreEnd()?this._completeQuery(t):(i||(i=l(t),
i.onBegin=e.hitch(this,this._onFetchBegin),i.onComplete=e.hitch(this,function(e,i){
this._nextUnfetchedIdx+=e.length,this._doFilter(e,i.start,t),this._fetch(t,i)})),
i.start=this._nextUnfetchedIdx,this._fetchAll&&delete i.count,i._nextResultItemIdx=c<this._items.length?c:this._items.length,
this.originFetch(i))}catch(u){if(!t.onError)throw u;h(t.scope,t.onError)(u,t)}return t;
},_hasReachedStoreEnd:function(){return this._storeSize>=0&&this._nextUnfetchedIdx>=this._storeSize;
},_applyFilter:function(t,e){var i=this._getter,n=this._store;try{return!!this._filter.applyRow(t,function(t,r){
return i(t,r,e,n)}).getValue()}catch(r){return console.warn("FilterLayer._applyFilter() error: ",r),
!1}},_doFilter:function(t,e,i){for(var n=0,r=0;n<t.length;++n)this._applyFilter(t[n],e+n)&&(h(i.scope,i.onItem)(t[n],i),
r+=this._addCachedItems(t[n],this._items.length),this._indexMap.push(e+n))},_onFetchBegin:function(t,e){
this._storeSize=t},_completeQuery:function(t){var e=this._items.length;this._nextUnfetchedIdx<this._storeSize&&e++,
h(t.scope,t.onBegin)(e,t),this.onFiltered(this._items.length,this._storeSize),h(t.scope,t.onComplete)(this._result,t);
},_addCachedItems:function(t,i){e.isArray(t)||(t=[t]);for(var n=0;n<t.length;++n)this._items[i+n]=t[n];
return t.length},onRowMappingChange:function(t){if(this._filter){var i=e.clone(t),n={};
for(var r in i)r=parseInt(r,10),t[this._indexMap[r]]=this._indexMap[i[r]],n[this._indexMap[r]]||(n[this._indexMap[r]]=!0),
n[r]||(n[r]=!0,delete t[r])}}});return e.mixin({ServerSideFilterLayer:c,ClientSideFilterLayer:u
},r)});