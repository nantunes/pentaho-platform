define(["./ViewBase","dijit/_TemplatedMixin","./_VerticalScrollBarBase","dojo/text!./templates/MonthColumnView.html","dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/_base/array","dojo/_base/sniff","dojo/_base/fx","dojo/_base/html","dojo/on","dojo/dom","dojo/dom-class","dojo/dom-style","dojo/dom-geometry","dojo/dom-construct","dojo/mouse","dojo/query","dojo/i18n","dojox/html/metrics"],function(t,e,i,r,o,s,n,a,l,d,h,c,u,m,g,v,f,p,_,C,y){
return o("dojox.calendar.MonthColumnView",[t,e],{baseClass:"dojoxCalendarMonthColumnView",
templateString:r,viewKind:"monthColumns",_setTabIndexAttr:"domNode",renderData:null,
startDate:null,columnCount:6,daySize:30,showCellLabel:!0,showHiddenItems:!0,verticalRenderer:null,
percentOverlap:0,horizontalGap:4,columnHeaderFormatLength:null,gridCellDatePattern:null,
roundToDay:!0,_layoutUnit:"month",_columnHeaderHandlers:null,constructor:function(){
this.invalidatingProperties=["columnCount","startDate","daySize","percentOverlap","verticalRenderer","columnHeaderDatePattern","horizontalGap","scrollBarRTLPosition","itemToRendererKindFunc","layoutPriorityFunction","textDir","items","showCellLabel","showHiddenItems"],
this._columnHeaderHandlers=[]},postCreate:function(){this.inherited(arguments),this.keyboardUpDownUnit="day",
this.keyboardUpDownSteps=1,this.keyboardLeftRightUnit="month",this.keyboardLeftRightSteps=1,
this.allDayKeyboardUpDownUnit="day",this.allDayKeyboardUpDownSteps=1,this.allDayKeyboardLeftRightUnit="month",
this.allDayKeyboardLeftRightSteps=1},destroy:function(t){this._cleanupColumnHeader(),
this.scrollBar&&this.scrollBar.destroy(t),this.inherited(arguments)},_scrollBar_onScroll:function(t){
this.scrollContainer.scrollTop=t},buildRendering:function(){this.inherited(arguments),
this.vScrollBar&&(this.scrollBar=new i({content:this.vScrollBarContent},this.vScrollBar),
this.scrollBar.on("scroll",n.hitch(this,this._scrollBar_onScroll)),this._viewHandles.push(c(this.scrollContainer,p.wheel,dojo.hitch(this,this._mouseWheelScrollHander))));
},postscript:function(){this.inherited(arguments),this._initialized=!0,this.invalidRendering||this.refreshRendering();
},_setVerticalRendererAttr:function(t){this._destroyRenderersByKind("vertical"),this._set("verticalRenderer",t);
},_createRenderData:function(){var t={};t.daySize=this.get("daySize"),t.scrollbarWidth=y.getScrollbar().w+1,
t.dateLocaleModule=this.dateLocaleModule,t.dateClassObj=this.dateClassObj,t.dateModule=this.dateModule,
t.dates=[],t.columnCount=this.get("columnCount");var e=this.get("startDate");null==e&&(e=new t.dateClassObj),
e=this.floorToMonth(e,!1,t),this.startDate=e;for(var i=e.getMonth(),r=0,o=0;o<t.columnCount;o++){
var s=[];for(t.dates.push(s);e.getMonth()==i;)s.push(e),e=t.dateModule.add(e,"day",1),
e=this.floorToDay(e,!1,t);i=e.getMonth(),r<s.length&&(r=s.length)}return t.startTime=new t.dateClassObj(t.dates[0][0]),
t.endTime=new t.dateClassObj(s[s.length-1]),t.endTime=t.dateModule.add(t.endTime,"day",1),
t.maxDayCount=r,t.sheetHeight=t.daySize*r,this.displayedItemsInvalidated&&!this._isEditing?(this.displayedItemsInvalidated=!1,
this._computeVisibleItems(t)):this.renderData&&(t.items=this.renderData.items),t},
_validateProperties:function(){this.inherited(arguments),(this.columnCount<1||isNaN(this.columnCount))&&(this.columnCount=1),
(this.daySize<5||isNaN(this.daySize))&&(this.daySize=5)},_setStartDateAttr:function(t){
this.displayedItemsInvalidated=!0,this._set("startDate",t)},_setColumnCountAttr:function(t){
this.displayedItemsInvalidated=!0,this._set("columnCount",t)},__fixEvt:function(t){
return t.sheet="primary",t.source=this,t},_formatColumnHeaderLabel:function(t){var e="wide";
this.columnHeaderFormatLength&&(e=this.columnHeaderFormatLength);var i=this.renderData.dateLocaleModule.getNames("months",e,"standAlone");
return i[t.getMonth()]},_formatGridCellLabel:function(t,e,i){var r,o;if(null==t)return"";
if(this.gridCellPattern)return this.renderData.dateLocaleModule.format(t,{selector:"date",
datePattern:this.gridCellDatePattern});o=C.getLocalization("dojo.cldr",this._calendar),
r=o["dateFormatItem-d"];var s=this.renderData.dateLocaleModule.getNames("days","abbr","standAlone");
return s[t.getDay()].substring(0,1)+" "+this.renderData.dateLocaleModule.format(t,{
selector:"date",datePattern:r})},scrollPosition:null,scrollBarRTLPosition:"left",
_setScrollPositionAttr:function(t){this._setScrollPosition(t.date,t.duration,t.easing);
},_getScrollPositionAttr:function(){return{date:this.scrollContainer.scrollTop/this.daySize+1
}},_setScrollPosition:function(t,e,i){1>t?t=1:t>31&&(t=31);var r=(t-1)*this.daySize;
if(e){this._scrollAnimation&&this._scrollAnimation.stop();var o=Math.abs((r-this.scrollContainer.scrollTop)*e/this.renderData.sheetHeight);
this._scrollAnimation=new d.Animation({curve:[this.scrollContainer.scrollTop,r],duration:o,
easing:i,onAnimate:n.hitch(this,function(t){this._setScrollImpl(t)})}),this._scrollAnimation.play();
}else this._setScrollImpl(r)},_setScrollImpl:function(t){this.scrollContainer.scrollTop=t,
this.scrollBar&&this.scrollBar.set("value",t)},ensureVisibility:function(t,e,i,r,o){
if(r=void 0==r?1:r,this.scrollable&&this.autoScroll){var s=t.getDate()-r;this.isStartOfDay(e)&&(e=this._waDojoxAddIssue(e,"day",-1));
var n=e.getDate()+r,a=this.get("scrollPosition").date,l=v.getContentBox(this.scrollContainer),d=this.get("scrollPosition").date+l.h/this.daySize,h=!1,c=null;
switch(i){case"start":h=s>=a&&d>=s,c=s;break;case"end":h=n>=a&&d>=n,c=n-(d-a);break;
case"both":h=s>=a&&d>=n,c=s}h||this._setScrollPosition(c,o)}},scrollView:function(t){
var e=this.get("scrollPosition").date+t;this._setScrollPosition(e)},_mouseWheelScrollHander:function(t){
this.scrollView(t.wheelDelta>0?-1:1)},refreshRendering:function(){if(this._initialized){
this._validateProperties();var t=this.renderData,e=this._createRenderData();this.renderData=e,
this._createRendering(e,t),this._layoutRenderers(e)}},_createRendering:function(t,e){
g.set(this.sheetContainer,"height",t.sheetHeight+"px"),this._configureScrollBar(t),
this._buildColumnHeader(t,e),this._buildGrid(t,e),this._buildItemContainer(t,e)},
_configureScrollBar:function(t){l("ie")&&this.scrollBar&&g.set(this.scrollBar.domNode,"width",t.scrollbarWidth+1+"px");
var e=this.isLeftToRight()?!0:"right"==this.scrollBarRTLPosition,i=e?"right":"left",r=e?"left":"right";
this.scrollBar&&(this.scrollBar.set("maximum",t.sheetHeight),g.set(this.scrollBar.domNode,i,0),
g.set(this.scrollBar.domNode,r,"auto")),g.set(this.scrollContainer,i,t.scrollbarWidth+"px"),
g.set(this.scrollContainer,r,"0"),g.set(this.columnHeader,i,t.scrollbarWidth+"px"),
g.set(this.columnHeader,r,"0"),this.buttonContainer&&null!=this.owner&&this.owner.currentView==this&&(g.set(this.buttonContainer,i,t.scrollbarWidth+"px"),
g.set(this.buttonContainer,r,"0"))},_columnHeaderClick:function(t){s.stop(t);var e=_("td",this.columnHeaderTable).indexOf(t.currentTarget);
this._onColumnHeaderClick({index:e,date:this.renderData.dates[e][0],triggerEvent:t
})},_buildColumnHeader:function(t,e){var i=this.columnHeaderTable;if(i){var r=t.columnCount-(e?e.columnCount:0);
8==l("ie")&&(null==this._colTableSave?this._colTableSave=n.clone(i):0>r&&(this._cleanupColumnHeader(),
this.columnHeader.removeChild(i),f.destroy(i),i=n.clone(this._colTableSave),this.columnHeaderTable=i,
this.columnHeader.appendChild(i),r=t.columnCount));var o,a,d,u=_("tbody",i),g=_("tr",i);
if(o=1==u.length?u[0]:h.create("tbody",null,i),a=1==g.length?g[0]:f.create("tr",null,o),
r>0)for(var v=0;r>v;v++){d=f.create("td",null,a);var p=[];p.push(c(d,"click",n.hitch(this,this._columnHeaderClick))),
l("touch")?(p.push(c(d,"touchstart",function(t){s.stop(t),m.add(t.currentTarget,"Active");
})),p.push(c(d,"touchend",function(t){s.stop(t),m.remove(t.currentTarget,"Active");
}))):(p.push(c(d,"mousedown",function(t){s.stop(t),m.add(t.currentTarget,"Active");
})),p.push(c(d,"mouseup",function(t){s.stop(t),m.remove(t.currentTarget,"Active");
})),p.push(c(d,"mouseover",function(t){s.stop(t),m.add(t.currentTarget,"Hover")})),
p.push(c(d,"mouseout",function(t){s.stop(t),m.remove(t.currentTarget,"Hover")}))),
this._columnHeaderHandlers.push(p)}else{r=-r;for(var v=0;r>v;v++){d=a.lastChild,a.removeChild(d),
f.destroy(d);for(var C=this._columnHeaderHandlers.pop();C.length>0;)C.pop().remove();
}}_("td",i).forEach(function(e,i){e.className="",0==i?m.add(e,"first-child"):i==this.renderData.columnCount-1&&m.add(e,"last-child");
var r=t.dates[i][0];this._setText(e,this._formatColumnHeaderLabel(r)),this.styleColumnHeaderCell(e,r,t);
},this)}},_cleanupColumnHeader:function(){for(;this._columnHeaderHandlers.length>0;)for(var t=this._columnHeaderHandlers.pop();t.length>0;)t.pop().remove();
},styleColumnHeaderCell:function(t,e,i){},_buildGrid:function(t,e){var i=this.gridTable;
if(i){g.set(i,"height",t.sheetHeight+"px");var r=t.maxDayCount-(e?e.maxDayCount:0),o=r>0,s=t.columnCount-(e?e.columnCount:0);
8==l("ie")&&(null==this._gridTableSave?this._gridTableSave=n.clone(i):0>s&&(this.grid.removeChild(i),
f.destroy(i),i=n.clone(this._gridTableSave),this.gridTable=i,this.grid.appendChild(i),
s=t.columnCount,r=t.maxDayCount,o=!0));var a,d=_("tbody",i);if(a=1==d.length?d[0]:f.create("tbody",null,i),
o)for(var h=0;r>h;h++)f.create("tr",null,a);else{r=-r;for(var h=0;r>h;h++)a.removeChild(a.lastChild);
}var c=t.maxDayCount-r,u=o||s>0;s=u?s:-s,_("tr",i).forEach(function(e,i){if(u)for(var r=i>=c?t.columnCount:s,i=0;r>i;i++){
var o=f.create("td",null,e);f.create("span",null,o)}else for(var i=0;s>i;i++)e.removeChild(e.lastChild);
}),_("tr",i).forEach(function(e,i){e.className="",0==i&&m.add(e,"first-child"),i==t.maxDayCount-1&&m.add(e,"last-child"),
_("td",e).forEach(function(e,r){e.className="",0==r&&m.add(e,"first-child"),r==t.columnCount-1&&m.add(e,"last-child");
var o=null;i<t.dates[r].length&&(o=t.dates[r][i]);var s=_("span",e)[0];this._setText(s,this.showCellLabel?this._formatGridCellLabel(o,i,r):null),
this.styleGridCell(e,o,r,i,t)},this)},this)}},styleGridCellFunc:null,defaultStyleGridCell:function(t,e,i,r,o){
null!=e&&(m.add(t,this._cssDays[e.getDay()]),this.isToday(e)?m.add(t,"dojoxCalendarToday"):this.isWeekEnd(e)&&m.add(t,"dojoxCalendarWeekend"));
},styleGridCell:function(t,e,i,r,o){this.styleGridCellFunc?this.styleGridCellFunc(t,e,i,r,o):this.defaultStyleGridCell(t,e,i,r,o);
},_buildItemContainer:function(t,e){var i=this.itemContainerTable;if(i){var r=[];g.set(i,"height",t.sheetHeight+"px");
var o=t.columnCount-(e?e.columnCount:0);8==l("ie")&&(null==this._itemTableSave?this._itemTableSave=n.clone(i):0>o&&(this.itemContainer.removeChild(i),
this._recycleItemRenderers(!0),f.destroy(i),i=n.clone(this._itemTableSave),this.itemContainerTable=i,
this.itemContainer.appendChild(i),o=t.columnCount));var s,a,d,h=_("tbody",i),c=_("tr",i);
if(s=1==h.length?h[0]:f.create("tbody",null,i),a=1==c.length?c[0]:f.create("tr",null,s),
o>0)for(var u=0;o>u;u++)d=f.create("td",null,a),f.create("div",{className:"dojoxCalendarContainerColumn"
},d);else{o=-o;for(var u=0;o>u;u++)a.removeChild(a.lastChild)}_("td>div",i).forEach(function(e,i){
g.set(e,{height:t.sheetHeight+"px"}),r.push(e)},this),t.cells=r}},_overlapLayoutPass2:function(t){
var e,i,r,o;for(r=t[t.length-1],i=0;i<r.length;i++)r[i].extent=1;for(e=0;e<t.length-1;e++){
r=t[e];for(var i=0;i<r.length;i++)if(o=r[i],-1==o.extent){o.extent=1;for(var s=0,n=!1,a=e+1;a<t.length&&!n;a++){
for(var l=t[a],d=0;d<l.length&&!n;d++){var h=l[d];o.start<h.end&&h.start<o.end&&(n=!0);
}n||s++}o.extent+=s}}},_defaultItemToRendererKindFunc:function(t){if(t.allDay)return"vertical";
var e=Math.abs(this.renderData.dateModule.difference(t.startTime,t.endTime,"minute"));
return e>=1440?"vertical":null},_layoutRenderers:function(t){this.hiddenEvents={},
this.inherited(arguments)},_layoutInterval:function(t,e,i,r,o){var s=[],n=[];t.colW=this.itemContainer.offsetWidth/t.columnCount;
for(var a=0;a<o.length;a++){var l=o[a];"vertical"==this._itemToRendererKind(l)?s.push(l):this.showHiddenItems&&n.push(l);
}s.length>0&&this._layoutVerticalItems(t,e,i,r,s),n.length>0&&this._layoutBgItems(t,e,i,r,n);
},_dateToYCoordinate:function(t,e,i){var r=0;if(i||0!=e.getHours()||0!=e.getMinutes())r=(e.getDate()-1)*this.renderData.daySize;else{
var o=this._waDojoxAddIssue(e,"day",-1);r=this.renderData.daySize+(o.getDate()-1)*this.renderData.daySize;
}return r+=(60*e.getHours()+e.getMinutes())*this.renderData.daySize/1440},_layoutVerticalItems:function(t,e,i,r,o){
if(null!=this.verticalRenderer){for(var s=t.cells[e],a=[],l=0;l<o.length;l++){var d=o[l],h=this.computeRangeOverlap(t,d.startTime,d.endTime,i,r),c=this._dateToYCoordinate(t,h[0],!0),u=this._dateToYCoordinate(t,h[1],!1);
if(u>c){var m=n.mixin({start:c,end:u,range:h,item:d},d);a.push(m)}}var v=this.computeOverlapping(a,this._overlapLayoutPass2).numLanes,p=this.percentOverlap/100;
for(l=0;l<a.length;l++){d=a[l];var _,C,y=d.lane,b=d.extent;0==p?(_=1==v?t.colW:(t.colW-(v-1)*this.horizontalGap)/v,
C=y*(_+this.horizontalGap),_=1==b?_:_*b+(b-1)*this.horizontalGap,_=100*_/t.colW,C=100*C/t.colW):(_=1==v?100:100/(v-(v-1)*p),
C=y*(_-p*_),_=1==b?_:_*(b-(b-1)*p));var T=this._createRenderer(d,"vertical",this.verticalRenderer,"dojoxCalendarVertical");
g.set(T.container,{top:d.start+"px",left:C+"%",width:_+"%",height:d.end-d.start+1+"px"
});var D=this.isItemBeingEdited(d),S=this.isItemSelected(d),H=this.isItemHovered(d),x=this.isItemFocused(d),w=T.renderer;
w.set("hovered",H),w.set("selected",S),w.set("edited",D),w.set("focused",this.showFocus?x:!1),
w.set("storeState",this.getItemStoreState(d)),w.set("moveEnabled",this.isItemMoveEnabled(d._item,"vertical")),
w.set("resizeEnabled",this.isItemResizeEnabled(d._item,"vertical")),this.applyRendererZIndex(d,T,H,S,D,x),
w.updateRendering&&w.updateRendering(_,d.end-d.start+1),f.place(T.container,s),g.set(T.container,"display","block");
}}},_getCellAt:function(t,e,i){return void 0!=i&&1!=i||this.isLeftToRight()||(e=this.renderData.columnCount-1-e),
this.gridTable.childNodes[0].childNodes[t].childNodes[e]},invalidateLayout:function(){
_("td",this.gridTable).forEach(function(t){m.remove(t,"dojoxCalendarHiddenEvents");
}),this.inherited(arguments)},_layoutBgItems:function(t,e,i,r,o){for(var s={},n=0;n<o.length;n++){
var a,l=o[n],d=this.computeRangeOverlap(t,l.startTime,l.endTime,i,r),h=d[0].getDate()-1;
this.isStartOfDay(d[1])?(a=this._waDojoxAddIssue(d[1],"day",-1),a=a.getDate()-1):a=d[1].getDate()-1;
for(var c=h;a>=c;c++)s[c]=!0}for(var u in s)if(s[u]){var g=this._getCellAt(u,e,!1);
m.add(g,"dojoxCalendarHiddenEvents")}},_sortItemsFunction:function(t,e){var i=this.dateModule.compare(t.startTime,e.startTime);
return 0==i&&(i=-1*this.dateModule.compare(t.endTime,e.endTime)),this.isLeftToRight()?i:-i;
},getTime:function(t,e,i,r){if(null!=t){var o=v.position(this.itemContainer,!0);t.touches?(r=void 0==r?0:r,
e=t.touches[r].pageX-o.x,i=t.touches[r].pageY-o.y):(e=t.pageX-o.x,i=t.pageY-o.y)}
var s=v.getContentBox(this.itemContainer);this.isLeftToRight()||(e=s.w-e),0>e?e=0:e>s.w&&(e=s.w-1),
0>i?i=0:i>s.h&&(i=s.h-1);var n=Math.floor(e/(s.w/this.renderData.columnCount)),a=Math.floor(i/(s.h/this.renderData.maxDayCount)),l=null;
return n<this.renderData.dates.length&&a<this.renderData.dates[n].length&&(l=this.newDate(this.renderData.dates[n][a])),
l},_onGridMouseUp:function(t){this.inherited(arguments),this._gridMouseDown&&(this._gridMouseDown=!1,
this._onGridClick({date:this.getTime(t),triggerEvent:t}))},_onGridTouchStart:function(t){
this.inherited(arguments);var e=this._gridProps;e.moved=!1,e.start=t.touches[0].screenY,
e.scrollTop=this.scrollContainer.scrollTop},_onGridTouchMove:function(t){if(this.inherited(arguments),
t.touches.length>1&&!this._isEditing)return void s.stop(t);if(this._gridProps&&!this._isEditing){
var e={x:t.touches[0].screenX,y:t.touches[0].screenY},i=this._edProps;if(!i||i&&(Math.abs(e.x-i.start.x)>25||Math.abs(e.y-i.start.y)>25)){
this._gridProps.moved=!0;var r=t.touches[0].screenY-this._gridProps.start,o=this._gridProps.scrollTop-r,n=this.itemContainer.offsetHeight-this.scrollContainer.offsetHeight;
0>o?(this._gridProps.start=t.touches[0].screenY,this._setScrollImpl(0),this._gridProps.scrollTop=0):o>n?(this._gridProps.start=t.touches[0].screenY,
this._setScrollImpl(n),this._gridProps.scrollTop=n):this._setScrollImpl(o)}}},_onGridTouchEnd:function(t){
this.inherited(arguments);var e=this._gridProps;e&&(this._isEditing||e.moved||(e.fromItem||e.editingOnStart||this.selectFromEvent(t,null,null,!0),
e.fromItem||(this._pendingDoubleTap&&this._pendingDoubleTap.grid?(this._onGridDoubleClick({
date:this.getTime(this._gridProps.event),triggerEvent:this._gridProps.event}),clearTimeout(this._pendingDoubleTap.timer),
delete this._pendingDoubleTap):(this._onGridClick({date:this.getTime(this._gridProps.event),
triggerEvent:this._gridProps.event}),this._pendingDoubleTap={grid:!0,timer:setTimeout(n.hitch(this,function(){
delete this._pendingDoubleTap}),this.doubleTapDelay)}))),this._gridProps=null)},_onColumnHeaderClick:function(t){
this._dispatchCalendarEvt(t,"onColumnHeaderClick")},onColumnHeaderClick:function(t){},
_onScrollTimer_tick:function(){this._setScrollImpl(this.scrollContainer.scrollTop+this._scrollProps.scrollStep);
},snapUnit:"day",snapSteps:1,minDurationUnit:"day",minDurationSteps:1,liveLayout:!1,
stayInView:!0,allowStartEndSwap:!0,allowResizeLessThan24H:!1})});