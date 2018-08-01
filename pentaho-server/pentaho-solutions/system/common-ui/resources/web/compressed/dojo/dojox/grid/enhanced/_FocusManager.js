define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/connect","dojo/_base/event","dojo/_base/sniff","dojo/_base/html","dojo/keys","dijit/a11y","dijit/focus","../_FocusManager"],function(e,t,i,n,s,r,o,a,h,l,u,c){
var d=i("dojox.grid.enhanced._FocusArea",null,{constructor:function(e,i){this._fm=i,
this._evtStack=[e.name];var n=function(){return!0};e.onFocus=e.onFocus||n,e.onBlur=e.onBlur||n,
e.onMove=e.onMove||n,e.onKeyUp=e.onKeyUp||n,e.onKeyDown=e.onKeyDown||n,t.mixin(this,e);
},move:function(e,t,i){if(this.name){var n,s=this._evtStack.length;for(n=s-1;n>=0;--n)if(this._fm._areas[this._evtStack[n]].onMove(e,t,i)===!1)return!1;
}return!0},_onKeyEvent:function(e,t){if(this.name){var i,n=this._evtStack.length;for(i=n-1;i>=0;--i)if(this._fm._areas[this._evtStack[i]][t](e,!1)===!1)return!1;
for(i=0;n>i;++i)if(this._fm._areas[this._evtStack[i]][t](e,!0)===!1)return!1}return!0;
},keydown:function(e){return this._onKeyEvent(e,"onKeyDown")},keyup:function(e){return this._onKeyEvent(e,"onKeyUp");
},contentMouseEventPlanner:function(){return 0},headerMouseEventPlanner:function(){
return 0}});return i("dojox.grid.enhanced._FocusManager",c,{_stopEvent:function(e){
try{e&&e.preventDefault&&r.stop(e)}catch(t){}},constructor:function(e){this.grid=e,
this._areas={},this._areaQueue=[],this._contentMouseEventHandlers=[],this._headerMouseEventHandlers=[],
this._currentAreaIdx=-1,this._gridBlured=!0,this._connects.push(s.connect(e,"onBlur",this,"_doBlur")),
this._connects.push(s.connect(e.scroller,"renderPage",this,"_delayedCellFocus")),
this.addArea({name:"header",onFocus:t.hitch(this,this.focusHeader),onBlur:t.hitch(this,this._blurHeader),
onMove:t.hitch(this,this._navHeader),getRegions:t.hitch(this,this._findHeaderCells),
onRegionFocus:t.hitch(this,this.doColHeaderFocus),onRegionBlur:t.hitch(this,this.doColHeaderBlur),
onKeyDown:t.hitch(this,this._onHeaderKeyDown)}),this.addArea({name:"content",onFocus:t.hitch(this,this._focusContent),
onBlur:t.hitch(this,this._blurContent),onMove:t.hitch(this,this._navContent),onKeyDown:t.hitch(this,this._onContentKeyDown)
}),this.addArea({name:"editableCell",onFocus:t.hitch(this,this._focusEditableCell),
onBlur:t.hitch(this,this._blurEditableCell),onKeyDown:t.hitch(this,this._onEditableCellKeyDown),
onContentMouseEvent:t.hitch(this,this._onEditableCellMouseEvent),contentMouseEventPlanner:function(e,t){
return-1}}),this.placeArea("header"),this.placeArea("content"),this.placeArea("editableCell"),
this.placeArea("editableCell","above","content")},destroy:function(){for(var e in this._areas){
var t=this._areas[e];n.forEach(t._connects,s.disconnect),t._connects=null,t.uninitialize&&t.uninitialize();
}this.inherited(arguments)},addArea:function(e){e.name&&t.isString(e.name)&&(this._areas[e.name]&&n.forEach(e._connects,s.disconnect),
this._areas[e.name]=new d(e,this),e.onHeaderMouseEvent&&this._headerMouseEventHandlers.push(e.name),
e.onContentMouseEvent&&this._contentMouseEventHandlers.push(e.name))},getArea:function(e){
return this._areas[e]},_bindAreaEvents:function(){var e,i,r=this._areas;n.forEach(this._areaQueue,function(o){
e=r[o],!e._initialized&&t.isFunction(e.initialize)&&(e.initialize(),e._initialized=!0),
e.getRegions&&(e._regions=e.getRegions()||[],n.forEach(e._connects||[],s.disconnect),
e._connects=[],n.forEach(e._regions,function(t){e.onRegionFocus&&(i=s.connect(t,"onfocus",e.onRegionFocus),
e._connects.push(i)),e.onRegionBlur&&(i=s.connect(t,"onblur",e.onRegionBlur),e._connects.push(i));
}))})},removeArea:function(e){var t=this._areas[e];if(t){this.ignoreArea(e);var i=n.indexOf(this._contentMouseEventHandlers,e);
i>=0&&this._contentMouseEventHandlers.splice(i,1),i=n.indexOf(this._headerMouseEventHandlers,e),
i>=0&&this._headerMouseEventHandlers.splice(i,1),n.forEach(t._connects,s.disconnect),
t.uninitialize&&t.uninitialize(),delete this._areas[e]}},currentArea:function(e,i){
var s,r=this._currentAreaIdx;return t.isString(e)&&(s=n.indexOf(this._areaQueue,e))>=0?(r!=s&&(this.tabbingOut=!1,
i&&r>=0&&r<this._areaQueue.length&&this._areas[this._areaQueue[r]].onBlur(),this._currentAreaIdx=s),
null):0>r||r>=this._areaQueue.length?new d({},this):this._areas[this._areaQueue[this._currentAreaIdx]];
},placeArea:function(e,t,i){if(this._areas[e]){var s=n.indexOf(this._areaQueue,i);
switch(t){case"after":s>=0&&++s;case"before":if(s>=0){this._areaQueue.splice(s,0,e);
break}default:this._areaQueue.push(e);break;case"above":var r=!0;case"below":var o=this._areas[i];
o&&(r?o._evtStack.push(e):o._evtStack.splice(0,0,e))}}},ignoreArea:function(e){this._areaQueue=n.filter(this._areaQueue,function(t){
return t!=e})},focusArea:function(e,i){var s;s="number"==typeof e?0>e?this._areaQueue.length+e:e:n.indexOf(this._areaQueue,t.isString(e)?e:e&&e.name),
0>s&&(s=0);var r=s-this._currentAreaIdx;this._gridBlured=!1,r?this.tab(r,i):this.currentArea().onFocus(i,r);
},tab:function(e,i){if(this._gridBlured=!1,this.tabbingOut=!1,0!==e){var s=this._currentAreaIdx,r=e>0?1:-1;
if(0>s||s>=this._areaQueue.length)s=this._currentAreaIdx+=e;else{var o=this._areas[this._areaQueue[s]].onBlur(i,e);
o===!0?s=this._currentAreaIdx+=e:t.isString(o)&&this._areas[o]&&(s=this._currentAreaIdx=n.indexOf(this._areaQueue,o));
}for(;s>=0&&s<this._areaQueue.length;s+=r)if(this._currentAreaIdx=s,this._areaQueue[s]&&this._areas[this._areaQueue[s]].onFocus(i,e))return;
this.tabbingOut=!0,0>e?(this._currentAreaIdx=-1,u.focus(this.grid.domNode)):(this._currentAreaIdx=this._areaQueue.length,
u.focus(this.grid.lastFocusNode))}},_onMouseEvent:function(e,t){for(var i=e.toLowerCase(),s=this["_"+i+"MouseEventHandlers"],r=n.map(s,function(e){
return{area:e,idx:this._areas[e][i+"MouseEventPlanner"](t,s)}},this).sort(function(e,t){
return t.idx-e.idx}),o=n.map(r,function(e){return r.area}),a=r.length;--a>=0;)if(this._areas[r[a].area]["on"+e+"MouseEvent"](t,o)===!1)return;
},contentMouseEvent:function(e){this._onMouseEvent("Content",e)},headerMouseEvent:function(e){
this._onMouseEvent("Header",e)},initFocusView:function(){this.focusView=this.grid.views.getFirstScrollingView()||this.focusView||this.grid.views.views[0],
this._bindAreaEvents()},isNavHeader:function(){return"header"==this._areaQueue[this._currentAreaIdx];
},previousKey:function(e){this.tab(-1,e)},nextKey:function(e){this.tab(1,e)},setFocusCell:function(e,t){
e&&(this.currentArea(this.grid.edit.isEditing()?"editableCell":"content",!0),this._focusifyCellNode(!1),
this.cell=e,this.rowIndex=t,this._focusifyCellNode(!0)),this.grid.onCellFocus(this.cell,this.rowIndex);
},doFocus:function(e){e&&e.target==e.currentTarget&&!this.tabbingOut?this._gridBlured&&(this._gridBlured=!1,
this._currentAreaIdx<0||this._currentAreaIdx>=this._areaQueue.length?this.focusArea(0,e):this.focusArea(this._currentAreaIdx,e)):this.tabbingOut=!1,
r.stop(e)},_doBlur:function(){this._gridBlured=!0},doLastNodeFocus:function(e){this.tabbingOut?this.tabbingOut=!1:this.focusArea(-1,e);
},_delayedHeaderFocus:function(){this.isNavHeader()&&!o("ie")&&this.focusHeader();
},_delayedCellFocus:function(){},_changeMenuBindNode:function(e,t){var i=this.grid.headerMenu;
i&&this._contextMenuBindNode==e&&(i.unBindDomNode(e),i.bindDomNode(t),this._contextMenuBindNode=t);
},focusHeader:function(e,t){var i=!1;return this.inherited(arguments),this._colHeadNode&&"none"!=a.style(this._colHeadNode,"display")&&(u.focus(this._colHeadNode),
this._stopEvent(e),i=!0),i},_blurHeader:function(e,t){return this._colHeadNode&&a.removeClass(this._colHeadNode,this.focusClass),
a.removeAttr(this.grid.domNode,"aria-activedescendant"),this._changeMenuBindNode(this.grid.domNode,this.grid.viewsHeaderNode),
this._colHeadNode=this._colHeadFocusIdx=null,!0},_navHeader:function(e,t,i){var s=0>t?-1:1,r=n.indexOf(this._findHeaderCells(),this._colHeadNode);
return r>=0&&i.shiftKey&&i.ctrlKey?void this.colSizeAdjust(i,r,5*s):void this.move(e,t);
},_onHeaderKeyDown:function(e,t){if(t){var i=h;switch(e.keyCode){case i.ENTER:case i.SPACE:
var n=this.getHeaderIndex();n>=0&&!this.grid.pluginMgr.isFixedCell(e.cell)&&(this.grid.setSortIndex(n,null,e),
r.stop(e))}}return!0},_setActiveColHeader:function(){this.inherited(arguments),u.focus(this._colHeadNode);
},findAndFocusGridCell:function(){this._focusContent()},_focusContent:function(e,t){
var i=!0,n=0===this.grid.rowCount;if(this.isNoFocusCell()&&!n){for(var s=0,r=this.grid.getCell(0);r&&r.hidden;r=this.grid.getCell(++s));
this.setFocusIndex(0,r?s:0)}else this.cell&&!n?this.focusView&&!this.focusView.rowNodes[this.rowIndex]?(this.grid.scrollToRow(this.rowIndex),
this.focusGrid()):this.setFocusIndex(this.rowIndex,this.cell.index):i=!1;return i&&this._stopEvent(e),
i},_blurContent:function(e,t){return this._focusifyCellNode(!1),!0},_navContent:function(e,t,i){
0===this.rowIndex&&0>e||this.rowIndex===this.grid.rowCount-1&&e>0||(this._colHeadNode=null,
this.move(e,t,i),i&&r.stop(i))},_onContentKeyDown:function(e,t){if(t){var i=h,n=this.grid.scroller;
switch(e.keyCode){case i.ENTER:case i.SPACE:var o=this.grid;if(o.indirectSelection)break;
o.selection.clickSelect(this.rowIndex,s.isCopyKey(e),e.shiftKey),o.onRowClick(e),
r.stop(e);break;case i.PAGE_UP:0!==this.rowIndex&&(this.rowIndex!=n.firstVisibleRow+1?this._navContent(n.firstVisibleRow-this.rowIndex,0):(this.grid.setScrollTop(n.findScrollTop(this.rowIndex-1)),
this._navContent(n.firstVisibleRow-n.lastVisibleRow+1,0)),r.stop(e));break;case i.PAGE_DOWN:
this.rowIndex+1!=this.grid.rowCount&&(r.stop(e),this.rowIndex!=n.lastVisibleRow-1?this._navContent(n.lastVisibleRow-this.rowIndex-1,0):(this.grid.setScrollTop(n.findScrollTop(this.rowIndex+1)),
this._navContent(n.lastVisibleRow-n.firstVisibleRow-1,0)),r.stop(e))}}return!0},_blurFromEditableCell:!1,
_isNavigating:!1,_navElems:null,_focusEditableCell:function(e,t){var i=!1;return this._isNavigating?i=!0:this.grid.edit.isEditing()&&this.cell&&((this._blurFromEditableCell||!this._blurEditableCell(e,t))&&(this.setFocusIndex(this.rowIndex,this.cell.index),
i=!0),this._stopEvent(e)),i},_applyEditableCell:function(){try{this.grid.edit.apply();
}catch(e){console.warn("_FocusManager._applyEditableCell() error:",e)}},_blurEditableCell:function(e,t){
if(this._blurFromEditableCell=!1,this._isNavigating){var i=!0;if(e){var n=this._navElems,s=n.lowest||n.first,r=n.last||n.highest||s,h=o("ie")?e.srcElement:e.target;
i=h==(t>0?r:s)}return i?(this._isNavigating=!1,a.setSelectable(this.cell.getNode(this.rowIndex),!1),
"content"):!1}if(this.grid.edit.isEditing()&&this.cell){if(!t||"number"!=typeof t)return!1;
for(var l,u=t>0?1:-1,c=this.grid.layout.cellCount,d=this.cell.index+u;d>=0&&c>d;d+=u)if(l=this.grid.getCell(d),
l.editable)return this.cell=l,this._blurFromEditableCell=!0,!1;if((this.rowIndex>0||1==u)&&(this.rowIndex<this.grid.rowCount||-1==u)){
for(this.rowIndex+=u,d=u>0?0:c-1;d>=0&&c>d;d+=u)if(l=this.grid.getCell(d),l.editable){
this.cell=l;break}return this._applyEditableCell(),"content"}}return!0},_initNavigatableElems:function(){
this._navElems=l._getTabNavigable(this.cell.getNode(this.rowIndex))},_onEditableCellKeyDown:function(e,t){
var i=h,n=this.grid,s=n.edit,o=!1,l=!0;switch(e.keyCode){case i.ENTER:t&&s.isEditing()&&(this._applyEditableCell(),
o=!0,r.stop(e));case i.SPACE:if(!t&&this._isNavigating){l=!1;break}if(t){if(!this.cell.editable&&this.cell.navigatable){
this._initNavigatableElems();var c=this._navElems.lowest||this._navElems.first;if(c){
this._isNavigating=!0,a.setSelectable(this.cell.getNode(this.rowIndex),!0),u.focus(c),
r.stop(e),this.currentArea("editableCell",!0);break}}o||s.isEditing()||n.pluginMgr.isFixedCell(this.cell)||s.setEditCell(this.cell,this.rowIndex),
o?this.currentArea("content",!0):this.cell.editable&&n.canEdit()&&this.currentArea("editableCell",!0);
}break;case i.PAGE_UP:case i.PAGE_DOWN:!t&&s.isEditing()&&(l=!1);break;case i.ESCAPE:
t||(s.cancel(),this.currentArea("content",!0))}return l},_onEditableCellMouseEvent:function(e){
if("click"==e.type){var t=this.cell||e.cell;if(t&&!t.editable&&t.navigatable){if(this._initNavigatableElems(),
this._navElems.lowest||this._navElems.first){var i=o("ie")?e.srcElement:e.target;if(i!=t.getNode(e.rowIndex))return this._isNavigating=!0,
this.focusArea("editableCell",e),a.setSelectable(t.getNode(e.rowIndex),!0),u.focus(i),
!1}}else if(this.grid.singleClickEdit)return this.currentArea("editableCell"),!1}
return!0}})});