define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","../../_SelectionPreserver"],function(e,t,i,n){
return e("dojox.grid.enhanced.plugins._SelectionPreserver",n,{constructor:function(e){
var n=this.grid;n.onSelectedById=this.onSelectedById,this._oldClearData=n._clearData;
var s=this;n._clearData=function(){s._updateMapping(!n._noInternalMapping),s._trustSelection=[],
s._oldClearData.apply(n,arguments)},this._connects.push(i.connect(e,"selectRange",t.hitch(this,"_updateMapping",!0,!0,!1)),i.connect(e,"deselectRange",t.hitch(this,"_updateMapping",!0,!1,!1)),i.connect(e,"deselectAll",t.hitch(this,"_updateMapping",!0,!1,!0)));
},destroy:function(){this.inherited(arguments),this.grid._clearData=this._oldClearData;
},reset:function(){this.inherited(arguments),this._idMap=[],this._trustSelection=[],
this._defaultSelected=!1},_reSelectById:function(e,t){var i=this.selection,n=this.grid;
if(e&&n._hasIdentity){var s=n.store.getIdentity(e);void 0===this._selectedById[s]?this._trustSelection[t]||(i.selected[t]=this._defaultSelected):i.selected[t]=this._selectedById[s],
this._idMap.push(s),n.onSelectedById(s,t,i.selected[t])}},_selectById:function(e,t){
this.inherited(arguments)||(this._trustSelection[t]=!0)},onSelectedById:function(e,t,i){},
_updateMapping:function(e,t,i,n,s){var d,a,c=this.selection,o=this.grid,l=0,h=0;for(d=o.rowCount-1;d>=0;--d)o._by_idx[d]?(a=o._by_idx[d].idty,
a&&(e||void 0===this._selectedById[a])&&(this._selectedById[a]=!!c.selected[d])):(++h,
l+=c.selected[d]?1:-1);if(h&&(this._defaultSelected=l>0),i||void 0===n||void 0===s||(i=!o.usingPagination&&Math.abs(s-n+1)===o.rowCount),
i&&(!o.usingPagination||"single"===o.selectionMode))for(d=this._idMap.length-1;d>=0;--d)this._selectedById[this._idMap[d]]=t;
}})});