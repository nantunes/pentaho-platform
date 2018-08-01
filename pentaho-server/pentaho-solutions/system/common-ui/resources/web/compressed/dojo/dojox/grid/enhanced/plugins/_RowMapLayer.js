define(["dojo/_base/array","dojo/_base/declare","dojo/_base/kernel","dojo/_base/lang","./_StoreLayer"],function(t,e,r,n,i){
var o=function(t){t.sort(function(t,e){return t-e});for(var e=[[t[0]]],r=1,n=0;r<t.length;++r)t[r]==t[r-1]+1?e[n].push(t[r]):e[++n]=[t[r]];
return e},a=function(t,e){return e?n.hitch(t||r.global,e):function(){}};return e("dojox.grid.enhanced.plugins._RowMapLayer",i._StoreLayer,{
tags:["reorder"],constructor:function(t){this._map={},this._revMap={},this.grid=t,
this._oldOnDelete=t._onDelete;var e=this;t._onDelete=function(r){e._onDelete(r),e._oldOnDelete.call(t,r);
},this._oldSort=t.sort,t.sort=function(){e.clearMapping(),e._oldSort.apply(t,arguments);
}},uninitialize:function(){this.grid._onDelete=this._oldOnDelete,this.grid.sort=this._oldSort;
},setMapping:function(t){this._store.forEachLayer(function(e){return"rowmap"===e.name()?!1:(e.onRowMappingChange&&e.onRowMappingChange(t),
!0)},!1);var e,r,n,i={};for(e in t)e=parseInt(e,10),r=t[e],"number"==typeof r&&(e in this._revMap?(n=this._revMap[e],
delete this._revMap[e]):n=e,n==r?(delete this._map[n],i[r]="eq"):(this._map[n]=r,
i[r]=n));for(r in i)"eq"===i[r]?delete this._revMap[parseInt(r,10)]:this._revMap[parseInt(r,10)]=i[r];
},clearMapping:function(){this._map={},this._revMap={}},_onDelete:function(t){var e=this.grid._getItemIndex(t,!0);
if(e in this._revMap){var r,n,i=[],o=this._revMap[e];delete this._map[o],delete this._revMap[e];
for(r in this._revMap)r=parseInt(r,10),this._revMap[r]>o&&--this._revMap[r];for(r in this._revMap)r=parseInt(r,10),
r>e&&i.push(r);for(i.sort(function(t,e){return e-t}),n=i.length-1;n>=0;--n)r=i[n],
this._revMap[r-1]=this._revMap[r],delete this._revMap[r];this._map={};for(r in this._revMap)this._map[this._revMap[r]]=r;
}},_fetch:function(t){var e,r=0,i=t.start||0;for(e in this._revMap)e=parseInt(e,10),
e>=i&&++r;if(r>0){var o,a=[],s={},h=t.count>0?t.count:-1;if(h>0)for(o=0;h>o;++o)e=i+o,
e=e in this._revMap?this._revMap[e]:e,s[e]=o,a.push(e);else for(o=0;e=i+o,e in this._revMap&&(--r,
e=this._revMap[e]),s[e]=o,a.push(e),!(0>=r);++o);return this._subFetch(t,this._getRowArrays(a),0,[],s,t.onComplete,i,h),
t}return n.hitch(this._store,this._originFetch)(t)},_getRowArrays:function(t){return o(t);
},_subFetch:function(e,r,n,i,o,s,h,p){var _=r[n],c=this,u=e.start=_[0];e.count=_[_.length-1]-_[0]+1,
e.onComplete=function(_){t.forEach(_,function(t,e){var r=u+e;r in o&&(i[o[r]]=t)}),
++n==r.length?p>0?(e.start=h,e.count=p,e.onComplete=s,a(e.scope,s)(i,e)):(e.start=e.start+_.length,
delete e.count,e.onComplete=function(t){i=i.concat(t),e.start=h,e.onComplete=s,a(e.scope,s)(i,e);
},c.originFetch(e)):c._subFetch(e,r,n,i,o,s,h,p)},c.originFetch(e)}})});