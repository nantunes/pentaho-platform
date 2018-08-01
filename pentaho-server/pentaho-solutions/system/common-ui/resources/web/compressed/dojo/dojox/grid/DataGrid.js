define(["../main","dojo/_base/array","dojo/_base/lang","dojo/_base/json","dojo/_base/sniff","dojo/_base/declare","./_Grid","./DataSelection","dojo/_base/html","dojo/has","dojo/has!dojo-bidi?./bidi/_BidiMixin"],function(t,e,i,s,o,n,h,r,a){
var d=n("dojox.grid.DataGrid",h,{store:null,query:null,queryOptions:null,fetchText:"...",
sortFields:null,updateDelay:1,items:null,_store_connects:null,_by_idty:null,_by_idx:null,
_cache:null,_pages:null,_pending_requests:null,_bop:-1,_eop:-1,_requests:0,rowCount:0,
_isLoaded:!1,_isLoading:!1,keepSelection:!1,postCreate:function(){this._pages=[],
this._store_connects=[],this._by_idty={},this._by_idx=[],this._cache=[],this._pending_requests={},
this._setStore(this.store),this.inherited(arguments)},destroy:function(){this.selection.destroy(),
this.inherited(arguments)},createSelection:function(){this.selection=new r(this)},
get:function(t,i){if(i&&"_item"==this.field&&!this.fields)return i;if(i&&this.fields){
var s=[],o=this.grid.store;return e.forEach(this.fields,function(t){s=s.concat(o.getValues(i,t));
}),s}return i||"string"!=typeof t?i?this.field?"_item"==this.field?i:this.grid.store.getValue(i,this.field):this.value:this.defaultValue:this.inherited(arguments);
},_checkUpdateStatus:function(){if(this.updateDelay>0){var t=!1;if(this._endUpdateDelay&&(clearTimeout(this._endUpdateDelay),
delete this._endUpdateDelay,t=!0),this.updating||(this.beginUpdate(),t=!0),t){var e=this;
this._endUpdateDelay=setTimeout(function(){delete e._endUpdateDelay,e.endUpdate();
},this.updateDelay)}}},_onSet:function(t,e,i,s){this._checkUpdateStatus();var o=this.getItemIndex(t);
o>-1&&this.updateRow(o)},_createItem:function(t,e){var i=this._hasIdentity?this.store.getIdentity(t):s.toJson(this.query)+":idx:"+e+":sort:"+s.toJson(this.getSortProps()),o=this._by_idty[i]={
idty:i,item:t};return o},_addItem:function(t,e,i){this._by_idx[e]=this._createItem(t,e),
i||this.updateRow(e)},_onNew:function(t,e){this._checkUpdateStatus();var i=this.get("rowCount");
this._addingItem=!0,this.updateRowCount(i+1),this._addingItem=!1,this._addItem(t,i),
this.showMessage()},_onDelete:function(t){this._checkUpdateStatus();var e=this._getItemIndex(t,!0);
if(e>=0){this._pages=[],this._bop=-1,this._eop=-1;var i=this._by_idx[e];this._by_idx.splice(e,1),
delete this._by_idty[i.idty],this.updateRowCount(this.get("rowCount")-1),0===this.get("rowCount")&&this.showMessage(this.noDataMessage);
}this.selection.isSelected(e)&&(this.selection.deselect(e),this.selection.selected.splice(e,1));
},_onRevert:function(){this._refresh()},setStore:function(t,e,i){this._requestsPending(0)||(this._setQuery(e,i),
this._setStore(t),this._refresh(!0))},setQuery:function(t,e){this._requestsPending(0)||(this._setQuery(t,e),
this._refresh(!0))},setItems:function(t){this.items=t,this._setStore(this.store),
this._refresh(!0)},_setQuery:function(t,e){this.query=t,this.queryOptions=e||this.queryOptions;
},_setStore:function(t){if(this.store&&this._store_connects&&e.forEach(this._store_connects,this.disconnect,this),
this.store=t,this.store){var i=this.store.getFeatures(),s=[];this._canEdit=!!i["dojo.data.api.Write"]&&!!i["dojo.data.api.Identity"],
this._hasIdentity=!!i["dojo.data.api.Identity"],i["dojo.data.api.Notification"]&&!this.items&&(s.push(this.connect(this.store,"onSet","_onSet")),
s.push(this.connect(this.store,"onNew","_onNew")),s.push(this.connect(this.store,"onDelete","_onDelete"))),
this._canEdit&&s.push(this.connect(this.store,"revert","_onRevert")),this._store_connects=s;
}},_onFetchBegin:function(t,e){this.scroller&&(this.rowCount!=t&&(e.isRender?(this.scroller.init(t,this.keepRows,this.rowsPerPage),
this.rowCount=t,this._setAutoHeightAttr(this.autoHeight,!0),this._skipRowRenormalize=!0,
this.prerender(),this._skipRowRenormalize=!1):this.updateRowCount(t)),t?this.showMessage():(this.views.render(),
this._resize(),this.showMessage(this.noDataMessage),this.focus.initFocusView()))},
_onFetchComplete:function(t,i){this.scroller&&(t&&t.length>0&&(e.forEach(t,function(t,e){
this._addItem(t,i.start+e,!0)},this),this.updateRows(i.start,t.length),i.isRender?(this.setScrollTop(0),
this.postrender()):this._lastScrollTop&&this.setScrollTop(this._lastScrollTop),o("ie")&&a.setSelectable(this.domNode,this.selectable)),
delete this._lastScrollTop,this._isLoaded||(this._isLoading=!1,this._isLoaded=!0),
this._pending_requests[i.start]=!1)},_onFetchError:function(t,e){console.log(t),delete this._lastScrollTop,
this._isLoaded||(this._isLoading=!1,this._isLoaded=!0,this.showMessage(this.errorMessage)),
this._pending_requests[e.start]=!1,this.onFetchError(t,e)},onFetchError:function(t,e){},
_fetch:function(t,s){if(t=t||0,this.store&&!this._pending_requests[t]){this._isLoaded||this._isLoading||(this._isLoading=!0,
this.showMessage(this.loadingMessage)),this._pending_requests[t]=!0;try{if(this.items){
var o=this.items,n=this.store;this.rowsPerPage=o.length;var h={start:t,count:this.rowsPerPage,
isRender:s};this._onFetchBegin(o.length,h);var r=0;if(e.forEach(o,function(t){n.isItemLoaded(t)||r++;
}),0===r)this._onFetchComplete(o,h);else{var a=function(t){r--,0===r&&this._onFetchComplete(o,h);
};e.forEach(o,function(t){n.isItemLoaded(t)||n.loadItem({item:t,onItem:a,scope:this
})},this)}}else this.store.fetch({start:t,count:this.rowsPerPage,query:this.query,
sort:this.getSortProps(),queryOptions:this.queryOptions,isRender:s,onBegin:i.hitch(this,"_onFetchBegin"),
onComplete:i.hitch(this,"_onFetchComplete"),onError:i.hitch(this,"_onFetchError")
})}catch(d){this._onFetchError(d,{start:t,count:this.rowsPerPage})}}},_clearData:function(){
this.updateRowCount(0),this._by_idty={},this._by_idx=[],this._pages=[],this._bop=this._eop=-1,
this._isLoaded=!1,this._isLoading=!1},getItem:function(t){var e=this._by_idx[t];return!e||e&&!e.item?(this._preparePage(t),
null):e.item},getItemIndex:function(t){return this._getItemIndex(t,!1)},_getItemIndex:function(t,e){
if(!e&&!this.store.isItem(t))return-1;for(var i=this._hasIdentity?this.store.getIdentity(t):null,s=0,o=this._by_idx.length;o>s;s++){
var n=this._by_idx[s];if(n&&(i&&n.idty==i||n.item===t))return s}return-1},filter:function(t,e){
this.query=t,e&&this._clearData(),this._fetch()},_getItemAttr:function(t,e){var i=this.getItem(t);
return i?this.store.getValue(i,e):this.fetchText},_render:function(){this.domNode.parentNode&&(this.scroller.init(this.get("rowCount"),this.keepRows,this.rowsPerPage),
this.prerender(),this._fetch(0,!0))},_requestsPending:function(t){return this._pending_requests[t];
},_rowToPage:function(t){return this.rowsPerPage?Math.floor(t/this.rowsPerPage):t;
},_pageToRow:function(t){return this.rowsPerPage?this.rowsPerPage*t:t},_preparePage:function(t){
if((t<this._bop||t>=this._eop)&&!this._addingItem){var e=this._rowToPage(t);this._needPage(e),
this._bop=e*this.rowsPerPage,this._eop=this._bop+(this.rowsPerPage||this.get("rowCount"));
}},_needPage:function(t){this._pages[t]||(this._pages[t]=!0,this._requestPage(t));
},_requestPage:function(t){var e=this._pageToRow(t),s=Math.min(this.rowsPerPage,this.get("rowCount")-e);
s>0&&(this._requests++,this._requestsPending(e)||setTimeout(i.hitch(this,"_fetch",e,!1),1));
},getCellName:function(t){return t.field},_refresh:function(t){this._clearData(),
this._fetch(0,t)},sort:function(){this.edit.apply(),this._lastScrollTop=this.scrollTop,
this._refresh()},canSort:function(){return!this._isLoading},getSortProps:function(){
var t=this.getCell(this.getSortIndex());if(t){var e=t.sortDesc,i=!(this.sortInfo>0);
return e="undefined"==typeof e?i:i?!e:e,[{attribute:t.field,descending:e}]}return this.sortFields?this.sortFields:null;
},styleRowState:function(t){if(this.store&&this.store.getState){for(var e,i=this.store.getState(t.index),s="",o=0,n=["inflight","error","inserting"];e=n[o];o++)if(i[e]){
s=" dojoxGridRow-"+e;break}t.customClasses+=s}},onStyleRow:function(t){this.styleRowState(t),
this.inherited(arguments)},canEdit:function(t,e){return this._canEdit},_copyAttr:function(t,e){
var i=this.getItem(t);return this.store.getValue(i,e)},doStartEdit:function(t,e){
this._cache[e]||(this._cache[e]=this._copyAttr(e,t.field)),this.onStartEdit(t,e)},
doApplyCellEdit:function(t,e,s){this.store.fetchItemByIdentity({identity:this._by_idx[e].idty,
onItem:i.hitch(this,function(i){var o=this.store.getValue(i,s);if("number"==typeof o)t=isNaN(t)?t:parseFloat(t);else if("boolean"==typeof o)t="true"==t?!0:"false"==t?!1:t;else if(o instanceof Date){
var n=new Date(t);t=isNaN(n.getTime())?t:n}this.store.setValue(i,s,t),this.onApplyCellEdit(t,e,s);
})})},doCancelEdit:function(t){var e=this._cache[t];e&&(this.updateRow(t),delete this._cache[t]),
this.onCancelEdit.apply(this,arguments)},doApplyEdit:function(t,e){this._cache[t];
this.onApplyEdit(t)},removeSelectedRows:function(){if(this._canEdit){this.edit.apply();
var t=i.hitch(this,function(t){t.length&&(e.forEach(t,this.store.deleteItem,this.store),
this.selection.clear())});this.allItemsSelected?this.store.fetch({query:this.query,
queryOptions:this.queryOptions,onComplete:t}):t(this.selection.getSelected())}}});
return d.cell_markupFactory=function(t,e,s){var o=i.trim(a.attr(e,"field")||"");o&&(s.field=o),
s.field=s.field||s.name;var n=i.trim(a.attr(e,"fields")||"");n&&(s.fields=n.split(",")),
t&&t(e,s)},d.markupFactory=function(t,e,s,o){return h.markupFactory(t,e,s,i.partial(d.cell_markupFactory,o));
},d});