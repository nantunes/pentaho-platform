define(["dojo/_base/declare","dojo/_base/array","dojo/_base/html","dojo/_base/lang","dojo/dom-class","dojo/Stateful","dojo/when"],function(t,e,i,s,r,n,a){
return t("dojox.calendar.StoreMixin",n,{store:null,query:{},queryOptions:null,startTimeAttr:"startTime",
endTimeAttr:"endTime",summaryAttr:"summary",allDayAttr:"allDay",cssClassFunc:null,
decodeDate:null,encodeDate:null,displayedItemsInvalidated:!1,itemToRenderItem:function(t,e){
return this.owner?this.owner.itemToRenderItem(t,e):{id:e.getIdentity(t),summary:t[this.summaryAttr],
startTime:this.decodeDate&&this.decodeDate(t[this.startTimeAttr])||this.newDate(t[this.startTimeAttr],this.dateClassObj),
endTime:this.decodeDate&&this.decodeDate(t[this.endTimeAttr])||this.newDate(t[this.endTimeAttr],this.dateClassObj),
allDay:null!=t[this.allDayAttr]?t[this.allDayAttr]:!1,cssClass:this.cssClassFunc?this.cssClassFunc(t):null
}},renderItemToItem:function(t,e){if(this.owner)return this.owner.renderItemToItem(t,e);
var i={};return i[e.idProperty]=t.id,i[this.summaryAttr]=t.summary,i[this.startTimeAttr]=this.encodeDate&&this.encodeDate(t.startTime)||t.startTime,
i[this.endTimeAttr]=this.encodeDate&&this.encodeDate(t.endTime)||t.endTime,"unstored"==this.getItemStoreState(t)?i:s.mixin(t._item,i);
},_computeVisibleItems:function(t){var i=t.startTime,s=t.endTime;this.items&&(t.items=e.filter(this.items,function(e){
return this.isOverlapping(t,e.startTime,e.endTime,i,s)},this))},_initItems:function(t){
return this.set("items",t),t},_refreshItemsRendering:function(t){},_updateItems:function(t,e,i){
var r=!0,n=null,a=this.itemToRenderItem(t,this.store);if(a._item=t,-1!=e)if(i!=e)this.items.splice(e,1),
this.setItemSelected&&this.isItemSelected(a)&&(this.setItemSelected(a,!1),this.dispatchChange(a,this.get("selectedItem"),null,null));else{
n=this.items[e];var o=this.dateModule;r=0!=o.compare(a.startTime,n.startTime)||0!=o.compare(a.endTime,n.endTime),
s.mixin(n,a)}else if(-1!=i){var m=t.temporaryId;if(m){for(var h=this.items.length,d=h-1;d>=0;d--)if(this.items[d].id==m){
this.items[d]=a;break}this._cleanItemStoreState(m),this._setItemStoreState(a,"storing");
}var l=this._getItemStoreStateObj(a);if(l){if(this.items[i].id!=a.id){for(var h=this.items.length,d=h-1;d>=0;d--)if(this.items[d].id==a.id){
this.items.splice(d,1);break}this.items.splice(i,0,a)}s.mixin(l.renderItem,a)}else this.items.splice(i,0,a);
this.set("items",this.items)}this._setItemStoreState(a,"stored"),this._isEditing||(r?this._refreshItemsRendering():this.updateRenderers(n));
},_setStoreAttr:function(t){this.displayedItemsInvalidated=!0;var e;if(this._observeHandler&&(this._observeHandler.remove(),
this._observeHandler=null),t){var i=t.query(this.query,this.queryOptions);i.observe&&(this._observeHandler=i.observe(s.hitch(this,this._updateItems),!0)),
i=i.map(s.hitch(this,function(e){var i=this.itemToRenderItem(e,t);return i._item=e,
i})),e=a(i,s.hitch(this,this._initItems))}else e=this._initItems([]);return this._set("store",t),
e},_getItemStoreStateObj:function(t){if(this.owner)return this.owner._getItemStoreStateObj(t);
var e=this.get("store");if(null!=e&&null!=this._itemStoreState){var i=void 0==t.id?e.getIdentity(t):t.id;
return this._itemStoreState[i]}return null},getItemStoreState:function(t){if(this.owner)return this.owner.getItemStoreState(t);
if(null==this._itemStoreState)return"stored";var e=this.get("store"),i=void 0==t.id?e.getIdentity(t):t.id,s=this._itemStoreState[i];
return null!=e&&void 0!=s?s.state:"stored"},_setItemStoreState:function(t,e){if(this.owner)return void this.owner._setItemStoreState(t,e);
void 0==this._itemStoreState&&(this._itemStoreState={});var i=this.get("store"),s=void 0==t.id?i.getIdentity(t):t.id,r=this._itemStoreState[s];
return"stored"==e||null==e?void(void 0!=r&&delete this._itemStoreState[s]):void(i&&(this._itemStoreState[s]={
id:s,item:t,renderItem:this.itemToRenderItem(t,i),state:e}))},_cleanItemStoreState:function(t){
if(this.owner)return this.owner._cleanItemStoreState(t);var e=this._itemStoreState[t];
return e?(delete this._itemStoreState[t],!0):!1}})});