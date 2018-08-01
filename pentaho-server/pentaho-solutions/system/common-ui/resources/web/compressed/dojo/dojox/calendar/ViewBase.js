define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/window","dojo/_base/event","dojo/_base/html","dojo/sniff","dojo/query","dojo/dom","dojo/dom-style","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/on","dojo/date","dojo/date/locale","dojo/when","dijit/_WidgetBase","dojox/widget/_Invalidating","dojox/widget/Selection","dojox/calendar/time","./StoreMixin"],function(e,t,i,n,r,s,o,d,a,l,u,m,h,c,f,_,g,T,I,v,p,E){
return e("dojox.calendar.ViewBase",[T,E,I,v],{datePackage:f,_calendar:"gregorian",
viewKind:null,_layoutStep:1,_layoutUnit:"day",resizeCursor:"n-resize",formatItemTimeFunc:null,
_cssDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],_getFormatItemTimeFuncAttr:function(){
return null!=this.owner?this.owner.get("formatItemTimeFunc"):this.formatItemTimeFunc;
},_viewHandles:null,doubleTapDelay:300,constructor:function(e){e=e||{},this._calendar=e.datePackage?e.datePackage.substr(e.datePackage.lastIndexOf(".")+1):this._calendar,
this.dateModule=e.datePackage?t.getObject(e.datePackage,!1):f,this.dateClassObj=this.dateModule.Date||Date,
this.dateLocaleModule=e.datePackage?t.getObject(e.datePackage+".locale",!1):_,this.rendererPool=[],
this.rendererList=[],this.itemToRenderer={},this._viewHandles=[]},destroy:function(e){
for(;this.rendererList.length>0;)this._destroyRenderer(this.rendererList.pop());for(var t in this._rendererPool){
var i=this._rendererPool[t];if(i)for(;i.length>0;)this._destroyRenderer(i.pop())}
for(;this._viewHandles.length>0;)this._viewHandles.pop().remove();this.inherited(arguments);
},resize:function(e){e&&h.setMarginBox(this.domNode,e)},_getTopOwner:function(){for(var e=this;void 0!=e.owner;)e=e.owner;
return e},_createRenderData:function(){},_validateProperties:function(){},_setText:function(e,t,i){
if(null!=t)if(!i&&e.hasChildNodes())e.childNodes[0].childNodes[0].nodeValue=t;else{
for(;e.hasChildNodes();)e.removeChild(e.lastChild);var r=n.doc.createElement("span");
o("dojo-bidi")&&this.applyTextDir(r,t),i?r.innerHTML=t:r.appendChild(n.doc.createTextNode(t)),
e.appendChild(r)}},isAscendantHasClass:function(e,t,i){for(;e!=t&&e!=document;){if(u.contains(e,i))return!0;
e=e.parentNode}return!1},isWeekEnd:function(e){return _.isWeekend(e)},getWeekNumberLabel:function(e){
return e.toGregorian&&(e=e.toGregorian()),_.format(e,{selector:"date",datePattern:"w"
})},floorToDay:function(e,t){return p.floorToDay(e,t,this.dateClassObj)},floorToMonth:function(e,t){
return p.floorToMonth(e,t,this.dateClassObj)},floorDate:function(e,t,i,n){return p.floor(e,t,i,n,this.dateClassObj);
},isToday:function(e){return p.isToday(e,this.dateClassObj)},isStartOfDay:function(e){
return p.isStartOfDay(e,this.dateClassObj,this.dateModule)},isOverlapping:function(e,t,i,n,r,s){
if(null==t||null==n||null==i||null==r)return!1;var o=e.dateModule;if(s){if(1==o.compare(t,r)||1==o.compare(n,i))return!1;
}else if(-1!=o.compare(t,r)||-1!=o.compare(n,i))return!1;return!0},computeRangeOverlap:function(e,t,i,n,r,s){
var o=e.dateModule;if(null==t||null==n||null==i||null==r)return null;var d=o.compare(t,r),a=o.compare(n,i);
if(s){if(0==d||1==d||0==a||1==a)return null}else if(1==d||1==a)return null;return[this.newDate(o.compare(t,n)>0?t:n,e),this.newDate(o.compare(i,r)>0?r:i,e)];
},isSameDay:function(e,t){return null==e||null==t?!1:e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate();
},computeProjectionOnDate:function(e,i,n,r){var s=e.dateModule;if(0>=r||-1==s.compare(n,i))return 0;
var o=this.floorToDay(i,!1,e);if(n.getDate()!=o.getDate())if(n.getMonth()==o.getMonth()){
if(n.getDate()<o.getDate())return 0;if(n.getDate()>o.getDate())return r}else if(n.getFullYear()==o.getFullYear()){
if(n.getMonth()<o.getMonth())return 0;if(n.getMonth()>o.getMonth())return r}else{
if(n.getFullYear()<o.getFullYear())return 0;if(n.getFullYear()>o.getFullYear())return r;
}var d;if(this.isSameDay(i,n)){var a=t.clone(i),l=0;null!=e.minHours&&0!=e.minHours&&(a.setHours(e.minHours),
l=3600*a.getHours()+60*a.getMinutes()+a.getSeconds()),a=t.clone(i);var u;null==e.maxHours||24==e.maxHours?u=86400:(a.setHours(e.maxHours),
u=3600*a.getHours()+60*a.getMinutes()+a.getSeconds());var m=3600*n.getHours()+60*n.getMinutes()+n.getSeconds()-l;
if(0>m)return 0;if(m>u)return r;d=r*m/(u-l)}else{if(n.getDate()<i.getDate()&&n.getMonth()==i.getMonth())return 0;
var h=this.floorToDay(n),c=e.dateModule.add(i,"day",1);c=this.floorToDay(c,!1,e),
d=1==s.compare(h,i)&&0==s.compare(h,c)||1==s.compare(h,c)?r:0}return d},getTime:function(e,t,i,n){
return null},newDate:function(e){return p.newDate(e,this.dateClassObj)},_isItemInView:function(e){
var t=this.renderData,i=t.dateModule;return-1==i.compare(e.startTime,t.startTime)?!1:1!=i.compare(e.endTime,t.endTime);
},_ensureItemInView:function(e){var t=this.renderData,i=t.dateModule,n=Math.abs(i.difference(e.startTime,e.endTime,"millisecond")),r=!1;
return-1==i.compare(e.startTime,t.startTime)?(e.startTime=t.startTime,e.endTime=i.add(e.startTime,"millisecond",n),
r=!0):1==i.compare(e.endTime,t.endTime)&&(e.endTime=t.endTime,e.startTime=i.add(e.endTime,"millisecond",-n),
r=!0),r},scrollable:!0,autoScroll:!0,_autoScroll:function(e,t,i){return!1},scrollMethod:"auto",
_setScrollMethodAttr:function(e){if(this.scrollMethod!=e){this.scrollMethod=e,void 0!==this._domScroll&&(this._domScroll?l.set(this.sheetContainer,this._cssPrefix+"transform","translateY(0px)"):this.scrollContainer.scrollTop=0),
delete this._domScroll;var t=this._getScrollPosition();delete this._scrollPos,this._setScrollPosition(t);
}},_startAutoScroll:function(e){var i=this._scrollProps;i||(i=this._scrollProps={}),
i.scrollStep=e,i.isScrolling||(i.isScrolling=!0,i.scrollTimer=setInterval(t.hitch(this,this._onScrollTimer_tick),10));
},_stopAutoScroll:function(){var e=this._scrollProps;e&&e.isScrolling&&(clearInterval(e.scrollTimer),
e.scrollTimer=null),this._scrollProps=null},_onScrollTimer_tick:function(e){},_scrollPos:0,
getCSSPrefix:function(){return o("ie")?"-ms-":o("webkit")?"-webkit-":o("mozilla")?"-moz-":o("opera")?"-o-":"";
},_setScrollPosition:function(e){if(this._scrollPos!=e){if(void 0===this._domScroll){
var t=this.get("scrollMethod");"auto"===t?this._domScroll=!o("ios")&&!o("android")&&!o("webkit"):this._domScroll="dom"===t;
}var i=h.getMarginBox(this.scrollContainer),n=h.getMarginBox(this.sheetContainer),r=n.h-i.h;
0>e?e=0:e>r&&(e=r),this._scrollPos=e,this._domScroll?this.scrollContainer.scrollTop=e:(this._cssPrefix||(this._cssPrefix=this.getCSSPrefix()),
l.set(this.sheetContainer,this._cssPrefix+"transform","translateY(-"+e+"px)"))}},
_getScrollPosition:function(){return this._scrollPos},scrollView:function(e){},ensureVisibility:function(e,t,i,n,r){},
_getStoreAttr:function(){return this.owner?this.owner.get("store"):this.store},_setItemsAttr:function(e){
this._set("items",e),this.displayedItemsInvalidated=!0},_refreshItemsRendering:function(){
var e=this.renderData;this._computeVisibleItems(e),this._layoutRenderers(e)},invalidateLayout:function(){
this._layoutRenderers(this.renderData)},computeOverlapping:function(e,i){if(0==e.length)return{
numLanes:0,addedPassRes:[1]};for(var n=[],r=0;r<e.length;r++){var s=e[r];this._layoutPass1(s,n);
}var o=null;return i&&(o=t.hitch(this,i)(n)),{numLanes:n.length,addedPassRes:o}},
_layoutPass1:function(e,t){for(var i=!0,n=0;n<t.length;n++){var r=t[n];i=!1;for(var s=0;s<r.length&&!i;s++)r[s].start<e.end&&e.start<r[s].end&&(i=!0,
r[s].extent=1);if(!i)return e.lane=n,e.extent=-1,void r.push(e)}t.push([e]),e.lane=t.length-1,
e.extent=-1},_layoutInterval:function(e,t,i,n,r){},layoutPriorityFunction:null,_sortItemsFunction:function(e,t){
var i=this.dateModule.compare(e.startTime,t.startTime);return 0==i&&(i=-1*this.dateModule.compare(e.endTime,t.endTime)),
i},_layoutRenderers:function(e){if(e.items){this._recycleItemRenderers();for(var n,r,s=e.dateModule,o=this.newDate(e.startTime),d=t.clone(o),a=e.items.concat(),l=[],u=0;-1==s.compare(o,e.endTime)&&a.length>0;){
n=s.add(o,this._layoutUnit,this._layoutStep),n=this.floorToDay(n,!0,e);var m=t.clone(n);
e.minHours&&d.setHours(e.minHours),e.maxHours&&24!=e.maxHours&&(m=s.add(n,"day",-1),
m=this.floorToDay(m,!0,e),m.setHours(e.maxHours)),r=i.filter(a,function(t){var i=this.isOverlapping(e,t.startTime,t.endTime,d,m);
return i?1==s.compare(t.endTime,m)&&l.push(t):l.push(t),i},this),a=l,l=[],r.length>0&&(r.sort(t.hitch(this,this.layoutPriorityFunction?this.layoutPriorityFunction:this._sortItemsFunction)),
this._layoutInterval(e,u,d,m,r)),o=n,d=t.clone(o),u++}this._onRenderersLayoutDone(this);
}},_recycleItemRenderers:function(e){for(;this.rendererList.length>0;)this._recycleRenderer(this.rendererList.pop(),e);
this.itemToRenderer={}},rendererPool:null,rendererList:null,itemToRenderer:null,getRenderers:function(e){
if(null==e||null==e.id)return null;var t=this.itemToRenderer[e.id];return null==t?null:t.concat();
},_rendererHandles:{},itemToRendererKindFunc:null,_itemToRendererKind:function(e){
return this.itemToRendererKindFunc?this.itemToRendererKindFunc(e):this._defaultItemToRendererKindFunc(e);
},_defaultItemToRendererKindFunc:function(e){return null},_createRenderer:function(e,t,i,n){
if(null!=e&&null!=t&&null!=i){var r=null,s=null,o=this.rendererPool[t];null!=o&&(r=o.shift()),
null==r?(s=new i,r={renderer:s,container:s.domNode,kind:t},this._onRendererCreated({
renderer:r,source:this,item:e})):(s=r.renderer,this._onRendererReused({renderer:s,
source:this,item:e})),s.owner=this,s.set("rendererKind",t),s.set("item",e);var d=this.itemToRenderer[e.id];
return null==d&&(this.itemToRenderer[e.id]=d=[]),d.push(r),this.rendererList.push(r),
r}return null},_onRendererCreated:function(e){e.source==this&&this.onRendererCreated(e),
null!=this.owner&&this.owner._onRendererCreated(e)},onRendererCreated:function(e){},
_onRendererRecycled:function(e){e.source==this&&this.onRendererRecycled(e),null!=this.owner&&this.owner._onRendererRecycled(e);
},onRendererRecycled:function(e){},_onRendererReused:function(e){e.source==this&&this.onRendererReused(e),
null!=this.owner&&this.owner._onRendererReused(e)},onRendererReused:function(e){},
_onRendererDestroyed:function(e){e.source==this&&this.onRendererDestroyed(e),null!=this.owner&&this.owner._onRendererDestroyed(e);
},onRendererDestroyed:function(e){},_onRenderersLayoutDone:function(e){this.onRenderersLayoutDone(e),
null!=this.owner&&this.owner._onRenderersLayoutDone(e)},onRenderersLayoutDone:function(e){},
_recycleRenderer:function(e,t){this._onRendererRecycled({renderer:e,source:this});
var i=this.rendererPool[e.kind];null==i?this.rendererPool[e.kind]=[e]:i.push(e),t&&e.container.parentNode.removeChild(e.container),
l.set(e.container,"display","none"),e.renderer.owner=null,e.renderer.set("item",null);
},_destroyRenderer:function(e){this._onRendererDestroyed({renderer:e,source:this});
var t=e.renderer;t.destroy&&t.destroy(),s.destroy(e.container)},_destroyRenderersByKind:function(e){
for(var t=[],i=0;i<this.rendererList.length;i++){var n=this.rendererList[i];n.kind==e?this._destroyRenderer(n):t.push(n);
}this.rendererList=t;var r=this.rendererPool[e];if(r)for(;r.length>0;)this._destroyRenderer(r.pop());
},_updateEditingCapabilities:function(e,t){var i=this.isItemMoveEnabled(e,t.rendererKind),n=this.isItemResizeEnabled(e,t.rendererKind),r=!1;
i!=t.get("moveEnabled")&&(t.set("moveEnabled",i),r=!0),n!=t.get("resizeEnabled")&&(t.set("resizeEnabled",n),
r=!0),r&&t.updateRendering()},updateRenderers:function(e,i){if(null!=e)for(var n=t.isArray(e)?e:[e],r=0;r<n.length;r++){
var s=n[r];if(null!=s&&null!=s.id){var o=this.itemToRenderer[s.id];if(null!=o)for(var d=this.isItemSelected(s),a=this.isItemHovered(s),l=this.isItemBeingEdited(s),u=this.showFocus?this.isItemFocused(s):!1,m=0;m<o.length;m++){
var h=o[m].renderer;h.set("hovered",a),h.set("selected",d),h.set("edited",l),h.set("focused",u),
h.set("storeState",this.getItemStoreState(s)),this.applyRendererZIndex(s,o[m],a,d,l,u),
i||(h.set("item",s),h.updateRendering&&h.updateRendering())}}}},applyRendererZIndex:function(e,t,i,n,r,s){
l.set(t.container,{zIndex:r||n?20:void 0==e.lane?0:e.lane})},getIdentity:function(e){
return this.owner?this.owner.getIdentity(e):e.id},_setHoveredItem:function(e,t){if(this.owner)return void this.owner._setHoveredItem(e,t);
if(this.hoveredItem&&e&&this.hoveredItem.id!=e.id||null==e||null==this.hoveredItem){
var i=this.hoveredItem;this.hoveredItem=e,this.updateRenderers([i,this.hoveredItem],!0),
e&&t&&this._updateEditingCapabilities(e._item?e._item:e,t)}},hoveredItem:null,isItemHovered:function(e){
return this._isEditing&&this._edProps?e.id==this._edProps.editedItem.id:this.owner?this.owner.isItemHovered(e):null!=this.hoveredItem&&this.hoveredItem.id==e.id;
},isItemFocused:function(e){return this._isItemFocused?this._isItemFocused(e):!1},
_setSelectionModeAttr:function(e){this.owner?this.owner.set("selectionMode",e):this.inherited(arguments);
},_getSelectionModeAttr:function(e){return this.owner?this.owner.get("selectionMode"):this.inherited(arguments);
},_setSelectedItemAttr:function(e){this.owner?this.owner.set("selectedItem",e):this.inherited(arguments);
},_getSelectedItemAttr:function(e){return this.owner?this.owner.get("selectedItem"):this.selectedItem;
},_setSelectedItemsAttr:function(e){this.owner?this.owner.set("selectedItems",e):this.inherited(arguments);
},_getSelectedItemsAttr:function(){return this.owner?this.owner.get("selectedItems"):this.inherited(arguments);
},isItemSelected:function(e){return this.owner?this.owner.isItemSelected(e):this.inherited(arguments);
},selectFromEvent:function(e,t,i,n){this.owner?this.owner.selectFromEvent(e,t,i,n):this.inherited(arguments);
},setItemSelected:function(e,t){this.owner?this.owner.setItemSelected(e,t):this.inherited(arguments);
},createItemFunc:null,_getCreateItemFuncAttr:function(){return this.owner?this.owner.get("createItemFunc"):this.createItemFunc;
},createOnGridClick:!1,_getCreateOnGridClickAttr:function(){return this.owner?this.owner.get("createOnGridClick"):this.createOnGridClick;
},_gridMouseDown:!1,_tempIdCount:0,_tempItemsMap:null,_onGridMouseDown:function(e){
if(this._gridMouseDown=!0,this.showFocus=!1,this._isEditing&&this._endItemEditing("mouse",!1),
this._doEndItemEditing(this.owner,"mouse"),this.set("focusedItem",null),this.selectFromEvent(e,null,null,!0),
this._setTabIndexAttr&&this[this._setTabIndexAttr].focus(),this._onRendererHandleMouseDown){
var t=this.get("createItemFunc");if(!t)return;var i=this._createdEvent=t(this,this.getTime(e),e),n=this.get("store");
if(!i||null==n)return;if(void 0==n.getIdentity(i)){var r="_tempId_"+this._tempIdCount++;
i[n.idProperty]=r,null==this._tempItemsMap&&(this._tempItemsMap={}),this._tempItemsMap[r]=!0;
}var s=this.itemToRenderItem(i,n);s._item=i,this._setItemStoreState(i,"unstored");
var o=this._getTopOwner(),d=o.get("items");o.set("items",d?d.concat([s]):[s]),this._refreshItemsRendering();
var a=this.getRenderers(i);if(a&&a.length>0){var l=a[0];l&&(this._onRendererHandleMouseDown(e,l.renderer,"resizeEnd"),
this._startItemEditing(s,"mouse"))}}},_onGridMouseMove:function(e){},_onGridMouseUp:function(e){},
_onGridTouchStart:function(e){var i=this._edProps;this._gridProps={event:e,fromItem:this.isAscendantHasClass(e.target,this.eventContainer,"dojoxCalendarEvent")
},this._isEditing&&(this._gridProps&&(this._gridProps.editingOnStart=!0),t.mixin(i,this._getTouchesOnRenderers(e,i.editedItem)),
0==i.touchesLen&&(i&&i.endEditingTimer&&(clearTimeout(i.endEditingTimer),i.endEditingTimer=null),
this._endItemEditing("touch",!1))),this._doEndItemEditing(this.owner,"touch"),r.stop(e);
},_doEndItemEditing:function(e,t){if(e&&e._isEditing){var i=e._edProps;i&&i.endEditingTimer&&(clearTimeout(i.endEditingTimer),
i.endEditingTimer=null),e._endItemEditing(t,!1)}},_onGridTouchEnd:function(e){},_onGridTouchMove:function(e){},
__fixEvt:function(e){return e},_dispatchCalendarEvt:function(e,t){return e=this.__fixEvt(e),
this[t](e),this.owner&&this.owner[t](e),e},_onGridClick:function(e){e.triggerEvent||(e={
date:this.getTime(e),triggerEvent:e}),this._dispatchCalendarEvt(e,"onGridClick")},
onGridClick:function(e){},_onGridDoubleClick:function(e){e.triggerEvent||(e={date:this.getTime(e),
triggerEvent:e}),this._dispatchCalendarEvt(e,"onGridDoubleClick")},onGridDoubleClick:function(e){},
_onItemClick:function(e){this._dispatchCalendarEvt(e,"onItemClick")},onItemClick:function(e){},
_onItemDoubleClick:function(e){this._dispatchCalendarEvt(e,"onItemDoubleClick")},
onItemDoubleClick:function(e){},_onItemContextMenu:function(e){this._dispatchCalendarEvt(e,"onItemContextMenu");
},onItemContextMenu:function(e){},_getStartEndRenderers:function(e){var t=this.itemToRenderer[e.id];
if(null==t)return null;if(1==t.length){var i=t[0].renderer;return[i,i]}for(var n=this.renderData,r=!1,s=!1,o=[],d=0;d<t.length;d++){
var a=t[d].renderer;if(r||(r=0==n.dateModule.compare(a.item.range[0],a.item.startTime),
o[0]=a),s||(s=0==n.dateModule.compare(a.item.range[1],a.item.endTime),o[1]=a),r&&s)break;
}return o},editable:!0,moveEnabled:!0,resizeEnabled:!0,isItemEditable:function(e,t){
return"storing"!=this.getItemStoreState(e)&&this.editable&&(this.owner?this.owner.isItemEditable(e,t):!0);
},isItemMoveEnabled:function(e,t){return this.isItemEditable(e,t)&&this.moveEnabled&&(this.owner?this.owner.isItemMoveEnabled(e,t):!0);
},isItemResizeEnabled:function(e,t){return this.isItemEditable(e,t)&&this.resizeEnabled&&(this.owner?this.owner.isItemResizeEnabled(e,t):!0);
},_isEditing:!1,isItemBeingEdited:function(e){return this._isEditing&&this._edProps&&this._edProps.editedItem&&this._edProps.editedItem.id==e.id;
},_setEditingProperties:function(e){this._edProps=e},_startItemEditing:function(e,n){
this._isEditing=!0,this._getTopOwner()._isEditing=!0;var r=this._edProps;if(r.editedItem=e,
r.storeItem=e._item,r.eventSource=n,r.secItem=this._secondarySheet?this._findRenderItem(e.id,this._secondarySheet.renderData.items):null,
r.ownerItem=this.owner?this._findRenderItem(e.id,this.items):null,!r.liveLayout){
r.editSaveStartTime=e.startTime,r.editSaveEndTime=e.endTime,r.editItemToRenderer=this.itemToRenderer,
r.editItems=this.renderData.items,r.editRendererList=this.rendererList,this.renderData.items=[r.editedItem];
var s=r.editedItem.id;this.itemToRenderer={},this.rendererList=[];var o=r.editItemToRenderer[s];
r.editRendererIndices=[],i.forEach(o,t.hitch(this,function(e,t){null==this.itemToRenderer[s]?this.itemToRenderer[s]=[e]:this.itemToRenderer[s].push(e),
this.rendererList.push(e)})),r.editRendererList=i.filter(r.editRendererList,function(e){
return null!=e&&e.renderer.item.id!=s}),delete r.editItemToRenderer[s]}this._layoutRenderers(this.renderData),
this._onItemEditBegin({item:e,storeItem:r.storeItem,eventSource:n})},_onItemEditBegin:function(e){
this._editStartTimeSave=this.newDate(e.item.startTime),this._editEndTimeSave=this.newDate(e.item.endTime),
this._dispatchCalendarEvt(e,"onItemEditBegin")},onItemEditBegin:function(e){},_endItemEditing:function(e,n){
this._isEditing=!1,this._getTopOwner()._isEditing=!1;var r=this._edProps;i.forEach(r.handles,function(e){
e.remove()}),r.liveLayout||(this.renderData.items=r.editItems,this.rendererList=r.editRendererList.concat(this.rendererList),
t.mixin(this.itemToRenderer,r.editItemToRenderer)),this._onItemEditEnd(t.mixin(this._createItemEditEvent(),{
item:r.editedItem,storeItem:r.storeItem,eventSource:e,completed:!n})),this._layoutRenderers(this.renderData),
this._edProps=null},_onItemEditEnd:function(e){if(this._dispatchCalendarEvt(e,"onItemEditEnd"),
!e.isDefaultPrevented()){var i=this.get("store"),n=this.renderItemToItem(e.item,i),r=this._getItemStoreStateObj(e.item);
if(null!=r&&"unstored"==r.state)if(e.completed){n=t.mixin(r.item,n),this._setItemStoreState(n,"storing");
var s=i.getIdentity(n),o=null;this._tempItemsMap&&this._tempItemsMap[s]&&(o={temporaryId:s
},delete this._tempItemsMap[s],delete n[i.idProperty]),g(i.add(n,o),t.hitch(this,function(e){
var n;n=t.isObject(e)?i.getIdentity(e):e,n!=s&&this._removeRenderItem(s)}))}else this.removeRenderItem(r.id);else e.completed?(this._setItemStoreState(n,"storing"),
i.put(n)):(e.item.startTime=this._editStartTimeSave,e.item.endTime=this._editEndTimeSave);
}},_removeRenderItem:function(e){for(var t=this._getTopOwner(),i=t.get("items"),n=i.length,r=!1,s=n-1;s>=0;s--)if(i[s].id==e){
i.splice(s,1),r=!0;break}this._cleanItemStoreState(e),r&&(t.set("items",i),this.invalidateLayout());
},onItemEditEnd:function(e){},_createItemEditEvent:function(){var e={cancelable:!0,
bubbles:!1,__defaultPrevent:!1};return e.preventDefault=function(){this.__defaultPrevented=!0;
},e.isDefaultPrevented=function(){return this.__defaultPrevented},e},_startItemEditingGesture:function(e,i,n,r){
var s=this._edProps;if(s&&null!=s.editedItem){this._editingGesture=!0;var o=s.editedItem;
s.editKind=i,this._onItemEditBeginGesture(this.__fixEvt(t.mixin(this._createItemEditEvent(),{
item:o,storeItem:s.storeItem,startTime:o.startTime,endTime:o.endTime,editKind:i,rendererKind:s.rendererKind,
triggerEvent:r,dates:e,eventSource:n}))),s.itemBeginDispatched=!0}},_onItemEditBeginGesture:function(e){
var t=this._edProps,i=t.editedItem,n=e.dates;t.editingTimeFrom=[],t.editingTimeFrom[0]=n[0],
t.editingItemRefTime=[],t.editingItemRefTime[0]=this.newDate("resizeEnd"==t.editKind?i.endTime:i.startTime),
"resizeBoth"==t.editKind&&(t.editingTimeFrom[1]=n[1],t.editingItemRefTime[1]=this.newDate(i.endTime));
var r=this.renderData.dateModule;if(t.inViewOnce=this._isItemInView(i),("label"==t.rendererKind||this.roundToDay)&&(t._itemEditBeginSave=this.newDate(i.startTime),
t._itemEditEndSave=this.newDate(i.endTime)),t._initDuration=r.difference(i.startTime,i.endTime,i.allDay?"day":"millisecond"),
this._dispatchCalendarEvt(e,"onItemEditBeginGesture"),!e.isDefaultPrevented()&&"mouse"==e.eventSource){
var s="move"==e.editKind?"move":this.resizeCursor;t.editLayer=m.create("div",{style:"position: absolute; left:0; right:0; bottom:0; top:0; z-index:30; tabIndex:-1; background-image:url('"+this._blankGif+"'); cursor: "+s,
onresizestart:function(e){return!1},onselectstart:function(e){return!1}},this.domNode),
t.editLayer.focus()}},onItemEditBeginGesture:function(e){},_waDojoxAddIssue:function(e,t,i){
var n=this.renderData.dateModule;if("gregorian"!=this._calendar&&0>i){var r=e.toGregorian();
return r=f.add(r,t,i),new this.renderData.dateClassObj(r)}return n.add(e,t,i)},_computeItemEditingTimes:function(e,t,i,n,r){
var s=this.renderData.dateModule,o=this._edProps,d=s.difference(o.editingTimeFrom[0],n[0],"millisecond");
return n[0]=this._waDojoxAddIssue(o.editingItemRefTime[0],"millisecond",d),"resizeBoth"==t&&(d=s.difference(o.editingTimeFrom[1],n[1],"millisecond"),
n[1]=this._waDojoxAddIssue(o.editingItemRefTime[1],"millisecond",d)),n},_moveOrResizeItemGesture:function(e,i,n){
if(this._isEditing&&null!=e[0]){var r=this._edProps,s=r.editedItem,o=this.renderData,d=o.dateModule,a=r.editKind,l=[e[0]];
"resizeBoth"==a&&(l[1]=e[1]),l=this._computeItemEditingTimes(s,r.editKind,r.rendererKind,l,i);
var u=l[0],m=!1,h=t.clone(s.startTime),c=t.clone(s.endTime),f="keyboard"==r.eventSource?!1:this.allowStartEndSwap;
if("move"==a){if(0!=d.compare(s.startTime,u)){var _=d.difference(s.startTime,s.endTime,"millisecond");
s.startTime=this.newDate(u),s.endTime=d.add(s.startTime,"millisecond",_),m=!0}}else if("resizeStart"==a)0!=d.compare(s.startTime,u)&&(-1!=d.compare(s.endTime,u)?s.startTime=this.newDate(u):f?(s.startTime=this.newDate(s.endTime),
s.endTime=this.newDate(u),r.editKind=a="resizeEnd","touch"==i&&(r.resizeEndTouchIndex=r.resizeStartTouchIndex,
r.resizeStartTouchIndex=-1)):(s.startTime=this.newDate(s.endTime),s.startTime.setHours(u.getHours()),
s.startTime.setMinutes(u.getMinutes()),s.startTime.setSeconds(u.getSeconds())),m=!0);else if("resizeEnd"==a)0!=d.compare(s.endTime,u)&&(1!=d.compare(s.startTime,u)?s.endTime=this.newDate(u):f?(s.endTime=this.newDate(s.startTime),
s.startTime=this.newDate(u),r.editKind=a="resizeStart","touch"==i&&(r.resizeStartTouchIndex=r.resizeEndTouchIndex,
r.resizeEndTouchIndex=-1)):(s.endTime=this.newDate(s.startTime),s.endTime.setHours(u.getHours()),
s.endTime.setMinutes(u.getMinutes()),s.endTime.setSeconds(u.getSeconds())),m=!0);else{
if("resizeBoth"!=a)return!1;m=!0;var g=this.newDate(u),T=this.newDate(l[1]);if(-1!=d.compare(g,T))if(f){
var I=g;g=T,T=I}else m=!1;m&&(s.startTime=g,s.endTime=T)}if(!m)return!1;var v=t.mixin(this._createItemEditEvent(),{
item:s,storeItem:r.storeItem,startTime:s.startTime,endTime:s.endTime,editKind:a,rendererKind:r.rendererKind,
triggerEvent:n,eventSource:i});if("move"==a?this._onItemEditMoveGesture(v):this._onItemEditResizeGesture(v),
1==d.compare(s.startTime,s.endTime)){var p=s.startTime;s.startTime=s.endTime,s.endTime=p;
}return(m=0!=d.compare(h,s.startTime)||0!=d.compare(c,s.endTime))?(this._layoutRenderers(this.renderData),
r.liveLayout&&null!=r.secItem?(r.secItem.startTime=s.startTime,r.secItem.endTime=s.endTime,
this._secondarySheet._layoutRenderers(this._secondarySheet.renderData)):null!=r.ownerItem&&this.owner.liveLayout&&(r.ownerItem.startTime=s.startTime,
r.ownerItem.endTime=s.endTime,this.owner._layoutRenderers(this.owner.renderData)),
!0):!1}},_findRenderItem:function(e,t){t=t||this.renderData.items;for(var i=0;i<t.length;i++)if(t[i].id==e)return t[i];
return null},_onItemEditMoveGesture:function(e){if(this._dispatchCalendarEvt(e,"onItemEditMoveGesture"),
!e.isDefaultPrevented()){var t,i,n=e.source._edProps,r=this.renderData,s=r.dateModule;
"label"==n.rendererKind||this.roundToDay&&!e.item.allDay?(t=this.floorToDay(e.item.startTime,!1,r),
t.setHours(n._itemEditBeginSave.getHours()),t.setMinutes(n._itemEditBeginSave.getMinutes()),
i=s.add(t,"millisecond",n._initDuration)):e.item.allDay?(t=this.floorToDay(e.item.startTime,!0),
i=s.add(t,"day",n._initDuration)):(t=this.floorDate(e.item.startTime,this.snapUnit,this.snapSteps),
i=s.add(t,"millisecond",n._initDuration)),e.item.startTime=t,e.item.endTime=i,n.inViewOnce||(n.inViewOnce=this._isItemInView(e.item)),
n.inViewOnce&&this.stayInView&&this._ensureItemInView(e.item)}},_DAY_IN_MILLISECONDS:864e5,
onItemEditMoveGesture:function(e){},_onItemEditResizeGesture:function(e){if(this._dispatchCalendarEvt(e,"onItemEditResizeGesture"),
!e.isDefaultPrevented()){var t=e.source._edProps,i=this.renderData,n=i.dateModule,r=e.item.startTime,s=e.item.endTime;
"resizeStart"==e.editKind?e.item.allDay?r=this.floorToDay(e.item.startTime,!1,this.renderData):this.roundToDay?(r=this.floorToDay(e.item.startTime,!1,i),
r.setHours(t._itemEditBeginSave.getHours()),r.setMinutes(t._itemEditBeginSave.getMinutes())):r=this.floorDate(e.item.startTime,this.snapUnit,this.snapSteps):"resizeEnd"==e.editKind?e.item.allDay?this.isStartOfDay(e.item.endTime)||(s=this.floorToDay(e.item.endTime,!1,this.renderData),
s=n.add(s,"day",1)):this.roundToDay?(s=this.floorToDay(e.item.endTime,!1,i),s.setHours(t._itemEditEndSave.getHours()),
s.setMinutes(t._itemEditEndSave.getMinutes())):(s=this.floorDate(e.item.endTime,this.snapUnit,this.snapSteps),
"mouse"==e.eventSource&&(s=n.add(s,this.snapUnit,this.snapSteps))):(r=this.floorDate(e.item.startTime,this.snapUnit,this.snapSteps),
s=this.floorDate(e.item.endTime,this.snapUnit,this.snapSteps),s=n.add(s,this.snapUnit,this.snapSteps)),
e.item.startTime=r,e.item.endTime=s;var o=e.item.allDay||t._initDuration>=this._DAY_IN_MILLISECONDS&&!this.allowResizeLessThan24H;
this.ensureMinimalDuration(this.renderData,e.item,o?"day":this.minDurationUnit,o?1:this.minDurationSteps,e.editKind),
t.inViewOnce||(t.inViewOnce=this._isItemInView(e.item)),t.inViewOnce&&this.stayInView&&this._ensureItemInView(e.item);
}},onItemEditResizeGesture:function(e){},_endItemEditingGesture:function(e,i){if(this._isEditing){
this._editingGesture=!1;var n=this._edProps,r=n.editedItem;n.itemBeginDispatched=!1,
this._onItemEditEndGesture(t.mixin(this._createItemEditEvent(),{item:r,storeItem:n.storeItem,
startTime:r.startTime,endTime:r.endTime,editKind:n.editKind,rendererKind:n.rendererKind,
triggerEvent:i,eventSource:e}))}},_onItemEditEndGesture:function(e){var i=this._edProps;
delete i._itemEditBeginSave,delete i._itemEditEndSave,this._dispatchCalendarEvt(e,"onItemEditEndGesture"),
e.isDefaultPrevented()||i.editLayer&&(o("ie")&&(i.editLayer.style.cursor="default"),
setTimeout(t.hitch(this,function(){this.domNode&&(this.domNode.focus(),i.editLayer.parentNode.removeChild(i.editLayer),
i.editLayer=null)}),10))},onItemEditEndGesture:function(e){},ensureMinimalDuration:function(e,t,i,n,r){
var s,o=e.dateModule;"resizeStart"==r?(s=o.add(t.endTime,i,-n),1==o.compare(t.startTime,s)&&(t.startTime=s)):(s=o.add(t.startTime,i,n),
-1==o.compare(t.endTime,s)&&(t.endTime=s))},doubleTapDelay:300,snapUnit:"minute",
snapSteps:15,minDurationUnit:"hour",minDurationSteps:1,liveLayout:!1,stayInView:!0,
allowStartEndSwap:!0,allowResizeLessThan24H:!1})});