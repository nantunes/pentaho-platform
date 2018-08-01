define(["./ViewBase","dijit/_TemplatedMixin","./_VerticalScrollBarBase","dojo/text!./templates/SimpleColumnView.html","dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/_base/array","dojo/_base/sniff","dojo/_base/fx","dojo/_base/html","dojo/on","dojo/dom","dojo/dom-class","dojo/dom-style","dojo/dom-geometry","dojo/dom-construct","dojo/mouse","dojo/query","dojox/html/metrics"],function(t,e,i,r,o,s,a,n,l,h,d,u,c,m,f,g,v,_,H,p){
return o("dojox.calendar.SimpleColumnView",[t,e],{baseClass:"dojoxCalendarSimpleColumnView",
templateString:r,viewKind:"columns",_setTabIndexAttr:"domNode",renderData:null,startDate:null,
columnCount:7,minHours:8,maxHours:18,hourSize:100,timeSlotDuration:15,rowHeaderGridSlotDuration:60,
rowHeaderLabelSlotDuration:60,rowHeaderLabelOffset:2,rowHeaderFirstLabelOffset:2,
verticalRenderer:null,percentOverlap:70,horizontalGap:4,_columnHeaderHandlers:null,
constructor:function(){this.invalidatingProperties=["columnCount","startDate","minHours","maxHours","hourSize","verticalRenderer","rowHeaderTimePattern","columnHeaderDatePattern","timeSlotDuration","rowHeaderGridSlotDuration","rowHeaderLabelSlotDuration","rowHeaderLabelOffset","rowHeaderFirstLabelOffset","percentOverlap","horizontalGap","scrollBarRTLPosition","itemToRendererKindFunc","layoutPriorityFunction","formatItemTimeFunc","textDir","items"],
this._columnHeaderHandlers=[]},destroy:function(t){this._cleanupColumnHeader(),this.scrollBar&&this.scrollBar.destroy(t),
this.inherited(arguments)},_scrollBar_onScroll:function(t){this._setScrollPosition(t);
},buildRendering:function(){this.inherited(arguments),this.vScrollBar&&(this.scrollBar=new i({
content:this.vScrollBarContent},this.vScrollBar),this.scrollBar.on("scroll",a.hitch(this,this._scrollBar_onScroll)),
this._viewHandles.push(u(this.scrollContainer,_.wheel,dojo.hitch(this,this._mouseWheelScrollHander))));
},postscript:function(){this.inherited(arguments),this._initialized=!0,this.invalidRendering||this.refreshRendering();
},_setVerticalRendererAttr:function(t){this._destroyRenderersByKind("vertical"),this._set("verticalRenderer",t);
},_createRenderData:function(){var t={};t.minHours=this.get("minHours"),t.maxHours=this.get("maxHours"),
t.hourSize=this.get("hourSize"),t.hourCount=t.maxHours-t.minHours,t.slotDuration=this.get("timeSlotDuration"),
t.rowHeaderGridSlotDuration=this.get("rowHeaderGridSlotDuration"),t.slotSize=Math.ceil(t.hourSize/(60/t.slotDuration)),
t.hourSize=t.slotSize*(60/t.slotDuration),t.sheetHeight=t.hourSize*t.hourCount,t.scrollbarWidth=p.getScrollbar().w+1,
t.dateLocaleModule=this.dateLocaleModule,t.dateClassObj=this.dateClassObj,t.dateModule=this.dateModule,
t.dates=[],t.columnCount=this.get("columnCount");var e=this.get("startDate");null==e&&(e=new t.dateClassObj),
e=this.floorToDay(e,!1,t),this.startDate=e;for(var i=0;i<t.columnCount;i++)t.dates.push(e),
e=t.dateModule.add(e,"day",1),e=this.floorToDay(e,!1,t);return t.startTime=new t.dateClassObj(t.dates[0]),
t.startTime.setHours(t.minHours),t.endTime=new t.dateClassObj(t.dates[t.columnCount-1]),
t.endTime.setHours(t.maxHours),this.displayedItemsInvalidated&&!this._isEditing?this._computeVisibleItems(t):this.renderData&&(t.items=this.renderData.items),
t},_validateProperties:function(){this.inherited(arguments);var t=this.minHours;if((0>t||t>23||isNaN(t))&&(this.minHours=0),
t=this.maxHours,(1>t||t>24||isNaN(t))&&(this.minHours=24),this.minHours>this.maxHours){
var e=this.maxHours;this.maxHours=this.minHours,this.minHours=e}this.maxHours-this.minHours<1&&(this.minHours=0,
this.maxHours=24),(this.columnCount<1||isNaN(this.columnCount))&&(this.columnCount=1),
t=this.percentOverlap,(0>t||t>100||isNaN(t))&&(this.percentOverlap=70),(this.hourSize<5||isNaN(this.hourSize))&&(this.hourSize=10),
t=this.timeSlotDuration,(1>t||t>60||isNaN(t))&&(this.timeSlotDuration=15)},_setStartDateAttr:function(t){
this.displayedItemsInvalidated=!0,this._set("startDate",t)},_setColumnCountAttr:function(t){
this.displayedItemsInvalidated=!0,this._set("columnCount",t)},__fixEvt:function(t){
return t.sheet="primary",t.source=this,t},_formatRowHeaderLabel:function(t){return this.renderData.dateLocaleModule.format(t,{
selector:"time",timePattern:this.rowHeaderTimePattern})},_formatColumnHeaderLabel:function(t){
return this.renderData.dateLocaleModule.format(t,{selector:"date",datePattern:this.columnHeaderDatePattern,
formatLength:"medium"})},startTimeOfDay:null,scrollBarRTLPosition:"left",_getStartTimeOfDay:function(){
var t=(this.get("maxHours")-this.get("minHours"))*this._getScrollPosition()/this.renderData.sheetHeight;
return{hours:this.renderData.minHours+Math.floor(t),minutes:60*(t-Math.floor(t))};
},_getEndTimeOfDay:function(){var t=(this.get("maxHours")-this.get("minHours"))*(this._getScrollPosition()+this.scrollContainer.offsetHeight)/this.renderData.sheetHeight;
return{hours:this.renderData.minHours+Math.floor(t),minutes:60*(t-Math.floor(t))};
},startTimeOfDay:0,_setStartTimeOfDayAttr:function(t){this.renderData?this._setStartTimeOfDay(t.hours,t.minutes,t.duration,t.easing):this._startTimeOfDayInvalidated=!0,
this._set("startTimeOfDay",t)},_getStartTimeOfDayAttr:function(){return this.renderData?this._getStartTimeOfDay():this._get("startTimeOfDay");
},_setStartTimeOfDay:function(t,e,i,r){var o=this.renderData;t=t||o.minHours,e=e||0,
i=i||0,0>e?e=0:e>59&&(e=59),0>t?t=0:t>24&&(t=24);var s=60*t+e,a=60*o.minHours,n=60*o.maxHours;
a>s?s=a:s>n&&(s=n);var l=(s-a)*o.sheetHeight/(n-a);l=Math.min(o.sheetHeight-this.scrollContainer.offsetHeight,l),
this._scrollToPosition(l,i,r)},_scrollToPosition:function(t,e,i){if(e){this._scrollAnimation&&this._scrollAnimation.stop();
var r=this._getScrollPosition(),o=Math.abs((t-r)*e/this.renderData.sheetHeight);this._scrollAnimation=new h.Animation({
curve:[r,t],duration:o,easing:i,onAnimate:a.hitch(this,function(t){this._setScrollImpl(t);
})}),this._scrollAnimation.play()}else this._setScrollImpl(t)},_setScrollImpl:function(t){
this._setScrollPosition(t),this.scrollBar&&this.scrollBar.set("value",t)},ensureVisibility:function(t,e,i,r,o){
if(r=void 0==r?this.renderData.slotDuration:r,this.scrollable&&this.autoScroll){var s=60*t.getHours()+t.getMinutes()-r,a=60*e.getHours()+e.getMinutes()+r,n=this._getStartTimeOfDay(),l=this._getEndTimeOfDay(),h=60*n.hours+n.minutes,d=60*l.hours+l.minutes,u=!1,c=null;
switch(i){case"start":u=s>=h&&d>=s,c=s;break;case"end":u=a>=h&&d>=a,c=a-(d-h);break;
case"both":u=s>=h&&d>=a,c=s}u||this._setStartTimeOfDay(Math.floor(c/60),c%60,o)}},
scrollView:function(t){var e=this._getStartTimeOfDay();e=60*e.hours+e.minutes+t*this.timeSlotDuration,
this._setStartTimeOfDay(Math.floor(e/60),e%60)},_mouseWheelScrollHander:function(t){
this.scrollView(t.wheelDelta>0?-1:1)},refreshRendering:function(){if(this._initialized){
this._validateProperties();var t=this.renderData,e=this._createRenderData();this.renderData=e,
this._createRendering(e,t),this._layoutRenderers(e)}},_createRendering:function(t,e){
f.set(this.sheetContainer,"height",t.sheetHeight+"px"),this._configureScrollBar(t),
this._buildColumnHeader(t,e),this._buildRowHeader(t,e),this._buildGrid(t,e),this._buildItemContainer(t,e),
this._commitProperties(t)},_commitProperties:function(t){if(this._startTimeOfDayInvalidated){
this._startTimeOfDayInvalidated=!1;var e=this.startTimeOfDay;null!=e&&this._setStartTimeOfDay(e.hours,void 0==e.minutes?0:e.minutes);
}},_configureScrollBar:function(t){l("ie")&&this.scrollBar&&f.set(this.scrollBar.domNode,"width",t.scrollbarWidth+1+"px");
var e=this.isLeftToRight()?!0:"right"==this.scrollBarRTLPosition,i=e?"right":"left",r=e?"left":"right";
this.scrollBar&&(this.scrollBar.set("maximum",t.sheetHeight),f.set(this.scrollBar.domNode,i,0),
f.set(this.scrollBar.domNode,e?"left":"right","auto")),f.set(this.scrollContainer,i,t.scrollbarWidth+"px"),
f.set(this.scrollContainer,r,"0"),f.set(this.header,i,t.scrollbarWidth+"px"),f.set(this.header,r,"0"),
this.buttonContainer&&null!=this.owner&&this.owner.currentView==this&&(f.set(this.buttonContainer,i,t.scrollbarWidth+"px"),
f.set(this.buttonContainer,r,"0"))},_columnHeaderClick:function(t){s.stop(t);var e=H("td",this.columnHeaderTable).indexOf(t.currentTarget);
this._onColumnHeaderClick({index:e,date:this.renderData.dates[e],triggerEvent:t});
},_buildColumnHeader:function(t,e){var i=this.columnHeaderTable;if(i){var r=t.columnCount-(e?e.columnCount:0);
8==l("ie")&&(null==this._colTableSave?this._colTableSave=a.clone(i):0>r&&(this._cleanupColumnHeader(),
this.columnHeader.removeChild(i),v.destroy(i),i=a.clone(this._colTableSave),this.columnHeaderTable=i,
this.columnHeader.appendChild(i),r=t.columnCount));var o,n,h,c=H("tbody",i),f=H("tr",i);
if(o=1==c.length?c[0]:d.create("tbody",null,i),n=1==f.length?f[0]:v.create("tr",null,o),
r>0)for(var g=0;r>g;g++){h=v.create("td",null,n);var _=[];_.push(u(h,"click",a.hitch(this,this._columnHeaderClick))),
l("touch")?(_.push(u(h,"touchstart",function(t){s.stop(t),m.add(t.currentTarget,"Active");
})),_.push(u(h,"touchend",function(t){s.stop(t),m.remove(t.currentTarget,"Active");
}))):(_.push(u(h,"mousedown",function(t){s.stop(t),m.add(t.currentTarget,"Active");
})),_.push(u(h,"mouseup",function(t){s.stop(t),m.remove(t.currentTarget,"Active");
})),_.push(u(h,"mouseover",function(t){s.stop(t),m.add(t.currentTarget,"Hover")})),
_.push(u(h,"mouseout",function(t){s.stop(t),m.remove(t.currentTarget,"Hover")}))),
this._columnHeaderHandlers.push(_)}else{r=-r;for(var g=0;r>g;g++){h=n.lastChild,n.removeChild(h),
v.destroy(h);for(var p=this._columnHeaderHandlers.pop();p.length>0;)p.pop().remove();
}}if(H("td",i).forEach(function(e,i){e.className="",0==i?m.add(e,"first-child"):i==this.renderData.columnCount-1&&m.add(e,"last-child");
var r=t.dates[i];this._setText(e,this._formatColumnHeaderLabel(r)),this.styleColumnHeaderCell(e,r,t);
},this),this.yearColumnHeaderContent){var C=t.dates[0];this._setText(this.yearColumnHeaderContent,t.dateLocaleModule.format(C,{
selector:"date",datePattern:"yyyy"}))}}},_cleanupColumnHeader:function(){for(;this._columnHeaderHandlers.length>0;)for(var t=this._columnHeaderHandlers.pop();t.length>0;)t.pop().remove();
},styleColumnHeaderCell:function(t,e,i){m.add(t,this._cssDays[e.getDay()]),this.isToday(e)?m.add(t,"dojoxCalendarToday"):this.isWeekEnd(e)&&m.add(t,"dojoxCalendarWeekend");
},_addMinutesClasses:function(t,e){switch(e){case 0:m.add(t,"hour");break;case 30:
m.add(t,"halfhour");break;case 15:case 45:m.add(t,"quarterhour")}},_buildRowHeader:function(t,e){
var i=this.rowHeaderTable;if(i){null==this._rowHeaderLabelContainer&&(this._rowHeaderLabelContainer=v.create("div",{
"class":"dojoxCalendarRowHeaderLabelContainer"},this.rowHeader)),f.set(i,"height",t.sheetHeight+"px");
var r,o,s,a=H("tbody",i);r=1==a.length?a[0]:v.create("tbody",null,i);var n=Math.floor(60/t.rowHeaderGridSlotDuration)*t.hourCount,h=n-(e?Math.floor(60/e.rowHeaderGridSlotDuration)*e.hourCount:0);
if(h>0)for(var d=0;h>d;d++)o=v.create("tr",null,r),s=v.create("td",null,o);else{h=-h;
for(var d=0;h>d;d++)r.removeChild(r.lastChild)}var u=this.renderData,c=Math.ceil(t.hourSize/(60/t.rowHeaderGridSlotDuration)),g=new Date(2e3,0,1,0,0,0);
H("tr",i).forEach(function(e,i){var r=H("td",e)[0];r.className="",f.set(e,"height",7==l("ie")?c-2*(60/t.rowHeaderGridSlotDuration):c+"px"),
this.styleRowHeaderCell(r,g.getHours(),g.getMinutes(),u);var o=i*this.renderData.rowHeaderGridSlotDuration%60;
this._addMinutesClasses(r,o)},this);var _=this._rowHeaderLabelContainer;h=Math.floor(60/this.rowHeaderLabelSlotDuration)*t.hourCount-_.childNodes.length;
var p;if(h>0)for(var d=0;h>d;d++)p=v.create("span",null,_),m.add(p,"dojoxCalendarRowHeaderLabel");else{
h=-h;for(var d=0;h>d;d++)_.removeChild(_.lastChild)}c=Math.ceil(t.hourSize/(60/this.rowHeaderLabelSlotDuration)),
H(">span",_).forEach(function(e,i){g.setHours(0),g.setMinutes(60*t.minHours+i*this.rowHeaderLabelSlotDuration),
this._configureRowHeaderLabel(e,g,i,c*i,u)},this)}},_configureRowHeaderLabel:function(t,e,i,r,o){
this._setText(t,this._formatRowHeaderLabel(e)),f.set(t,"top",r+(0==i?this.rowHeaderFirstLabelOffset:this.rowHeaderLabelOffset)+"px");
var s=i*this.rowHeaderLabelSlotDuration%60;m.remove(t,["hour","halfhour","quarterhour"]),
this._addMinutesClasses(t,s)},styleRowHeaderCell:function(t,e,i,r){},_buildGrid:function(t,e){
var i=this.gridTable;if(i){f.set(i,"height",t.sheetHeight+"px");var r=Math.floor(60/t.slotDuration)*t.hourCount,o=r-(e?Math.floor(60/e.slotDuration)*e.hourCount:0),s=o>0,n=t.columnCount-(e?e.columnCount:0);
8==l("ie")&&(null==this._gridTableSave?this._gridTableSave=a.clone(i):0>n&&(this.grid.removeChild(i),
v.destroy(i),i=a.clone(this._gridTableSave),this.gridTable=i,this.grid.appendChild(i),
n=t.columnCount,o=r,s=!0));var h,d=H("tbody",i);if(h=1==d.length?d[0]:v.create("tbody",null,i),
s)for(var u=0;o>u;u++)v.create("tr",null,h);else{o=-o;for(var u=0;o>u;u++)h.removeChild(h.lastChild);
}var c=Math.floor(60/t.slotDuration)*t.hourCount-o,g=s||n>0;n=g?n:-n,H("tr",i).forEach(function(e,i){
if(g)for(var r=i>=c?t.columnCount:n,i=0;r>i;i++)v.create("td",null,e);else for(var i=0;n>i;i++)e.removeChild(e.lastChild);
}),H("tr",i).forEach(function(e,i){f.set(e,"height",t.slotSize+"px"),0==i?m.add(e,"first-child"):i==r-1&&m.add(e,"last-child");
var o=i*this.renderData.slotDuration%60,s=this.minHours+Math.floor(i*this.renderData.slotDuration/60);
H("td",e).forEach(function(e,i){e.className="",0==i?m.add(e,"first-child"):i==this.renderData.columnCount-1&&m.add(e,"last-child");
var r=t.dates[i];this.styleGridCell(e,r,s,o,t),this._addMinutesClasses(e,o)},this);
},this)}},styleGridCellFunc:null,defaultStyleGridCell:function(t,e,i,r,o){return m.add(t,[this._cssDays[e.getDay()],"H"+i,"M"+r]),
this.isToday(e)?m.add(t,"dojoxCalendarToday"):this.isWeekEnd(e)?m.add(t,"dojoxCalendarWeekend"):void 0;
},styleGridCell:function(t,e,i,r,o){this.styleGridCellFunc?this.styleGridCellFunc(t,e,i,r,o):this.defaultStyleGridCell(t,e,i,r,o);
},_buildItemContainer:function(t,e){var i=this.itemContainerTable;if(i){var r=[];f.set(i,"height",t.sheetHeight+"px");
var o=t.columnCount-(e?e.columnCount:0);8==l("ie")&&(null==this._itemTableSave?this._itemTableSave=a.clone(i):0>o&&(this.itemContainer.removeChild(i),
this._recycleItemRenderers(!0),v.destroy(i),i=a.clone(this._itemTableSave),this.itemContainerTable=i,
this.itemContainer.appendChild(i),o=t.columnCount));var s,n,h,d=H("tbody",i),u=H("tr",i);
if(s=1==d.length?d[0]:v.create("tbody",null,i),n=1==u.length?u[0]:v.create("tr",null,s),
o>0)for(var c=0;o>c;c++)h=v.create("td",null,n),v.create("div",{className:"dojoxCalendarContainerColumn"
},h);else{o=-o;for(var c=0;o>c;c++)n.removeChild(n.lastChild)}H("td>div",i).forEach(function(e,i){
f.set(e,{height:t.sheetHeight+"px"}),r.push(e)},this),t.cells=r}},_overlapLayoutPass2:function(t){
var e,i,r,o;for(r=t[t.length-1],i=0;i<r.length;i++)r[i].extent=1;for(e=0;e<t.length-1;e++){
r=t[e];for(var i=0;i<r.length;i++)if(o=r[i],-1==o.extent){o.extent=1;for(var s=0,a=!1,n=e+1;n<t.length&&!a;n++){
for(var l=t[n],h=0;h<l.length&&!a;h++){var d=l[h];o.start<d.end&&d.start<o.end&&(a=!0);
}a||s++}o.extent+=s}}},_defaultItemToRendererKindFunc:function(t){return"vertical";
},_layoutInterval:function(t,e,i,r,o){var s=[];t.colW=this.itemContainer.offsetWidth/t.columnCount;
for(var a=0;a<o.length;a++){var n=o[a];"vertical"==this._itemToRendererKind(n)&&s.push(n);
}s.length>0&&this._layoutVerticalItems(t,e,i,r,s)},_layoutVerticalItems:function(t,e,i,r,o){
if(null!=this.verticalRenderer){for(var s=t.cells[e],n=[],l=0;l<o.length;l++){var h=o[l],d=this.computeRangeOverlap(t,h.startTime,h.endTime,i,r),u=this.computeProjectionOnDate(t,i,d[0],t.sheetHeight),c=this.computeProjectionOnDate(t,i,d[1],t.sheetHeight);
if(c>u){var m=a.mixin({start:u,end:c,range:d,item:h},h);n.push(m)}}var g=this.computeOverlapping(n,this._overlapLayoutPass2).numLanes,_=this.percentOverlap/100;
for(l=0;l<n.length;l++){h=n[l];var H,p,C=h.lane,T=h.extent;0==_?(H=1==g?t.colW:(t.colW-(g-1)*this.horizontalGap)/g,
p=C*(H+this.horizontalGap),H=1==T?H:H*T+(T-1)*this.horizontalGap,H=100*H/t.colW,p=100*p/t.colW):(H=1==g?100:100/(g-(g-1)*_),
p=C*(H-_*H),H=1==T?H:H*(T-(T-1)*_));var D=this._createRenderer(h,"vertical",this.verticalRenderer,"dojoxCalendarVertical");
f.set(D.container,{top:h.start+"px",left:p+"%",width:H+"%",height:h.end-h.start+1+"px"
});var b=this.isItemBeingEdited(h),y=this.isItemSelected(h),S=this.isItemHovered(h),w=this.isItemFocused(h),x=D.renderer;
x.set("hovered",S),x.set("selected",y),x.set("edited",b),x.set("focused",this.showFocus?w:!1),
x.set("storeState",this.getItemStoreState(h)),x.set("moveEnabled",this.isItemMoveEnabled(h._item,"vertical")),
x.set("resizeEnabled",this.isItemResizeEnabled(h._item,"vertical")),this.applyRendererZIndex(h,D,S,y,b,w),
x.updateRendering&&x.updateRendering(H,h.end-h.start+1),v.place(D.container,s),f.set(D.container,"display","block");
}}},_sortItemsFunction:function(t,e){var i=this.dateModule.compare(t.startTime,e.startTime);
return 0==i&&(i=-1*this.dateModule.compare(t.endTime,e.endTime)),this.isLeftToRight()?i:-i;
},getTime:function(t,e,i,r){if(null!=t){var o=g.position(this.itemContainer,!0);t.touches?(r=void 0==r?0:r,
e=t.touches[r].pageX-o.x,i=t.touches[r].pageY-o.y):(e=t.pageX-o.x,i=t.pageY-o.y)}
var s=g.getContentBox(this.itemContainer);this.isLeftToRight()||(e=s.w-e),0>e?e=0:e>s.w&&(e=s.w-1),
0>i?i=0:i>s.h&&(i=s.h-1);var a=Math.floor(e/(g.getMarginBox(this.itemContainer).w/this.renderData.columnCount)),n=this.getTimeOfDay(i,this.renderData),l=null;
return a<this.renderData.dates.length&&(l=this.newDate(this.renderData.dates[a]),
l=this.floorToDay(l,!0),l.setHours(n.hours),l.setMinutes(n.minutes)),l},_onGridMouseUp:function(t){
this.inherited(arguments),this._gridMouseDown&&(this._gridMouseDown=!1,this._onGridClick({
date:this.getTime(t),triggerEvent:t}))},_onGridTouchStart:function(t){this.inherited(arguments);
var e=this._gridProps;e.moved=!1,e.start=t.touches[0].screenY,e.scrollTop=this._getScrollPosition();
},_onGridTouchMove:function(t){if(this.inherited(arguments),t.touches.length>1&&!this._isEditing)return void s.stop(t);
if(this._gridProps&&!this._isEditing){var e={x:t.touches[0].screenX,y:t.touches[0].screenY
},i=this._edProps;if(!i||i&&(Math.abs(e.x-i.start.x)>25||Math.abs(e.y-i.start.y)>25)){
this._gridProps.moved=!0;var r=t.touches[0].screenY-this._gridProps.start,o=this._gridProps.scrollTop-r,a=this.itemContainer.offsetHeight-this.scrollContainer.offsetHeight;
0>o?(this._gridProps.start=t.touches[0].screenY,this._setScrollImpl(0),this._gridProps.scrollTop=0):o>a?(this._gridProps.start=t.touches[0].screenY,
this._setScrollImpl(a),this._gridProps.scrollTop=a):this._setScrollImpl(o)}}},_onGridTouchEnd:function(t){
this.inherited(arguments);var e=this._gridProps;e&&(this._isEditing||e.moved||(e.fromItem||e.editingOnStart||this.selectFromEvent(t,null,null,!0),
e.fromItem||(this._pendingDoubleTap&&this._pendingDoubleTap.grid?(this._onGridDoubleClick({
date:this.getTime(this._gridProps.event),triggerEvent:this._gridProps.event}),clearTimeout(this._pendingDoubleTap.timer),
delete this._pendingDoubleTap):(this._onGridClick({date:this.getTime(this._gridProps.event),
triggerEvent:this._gridProps.event}),this._pendingDoubleTap={grid:!0,timer:setTimeout(a.hitch(this,function(){
delete this._pendingDoubleTap}),this.doubleTapDelay)}))),this._gridProps=null)},_onColumnHeaderClick:function(t){
this._dispatchCalendarEvt(t,"onColumnHeaderClick")},onColumnHeaderClick:function(t){},
getTimeOfDay:function(t,e){var i=60*e.minHours,r=60*e.maxHours,o=i+t*(r-i)/e.sheetHeight;
return{hours:Math.floor(o/60),minutes:Math.floor(o%60)}},_isItemInView:function(t){
var e=this.inherited(arguments);if(e){var i=this.renderData,r=i.dateModule.difference(t.startTime,t.endTime,"millisecond"),o=36e5*(24-i.maxHours+i.minHours);
if(r>o)return!0;var s=60*t.startTime.getHours()+t.startTime.getMinutes(),a=60*t.endTime.getHours()+t.endTime.getMinutes(),n=60*i.minHours,l=60*i.maxHours;
if(s>0&&n>s||s>l&&1440>=s)return!1;if(a>0&&n>a||a>l&&1440>=a)return!1}return e},_ensureItemInView:function(t){
var e,i=t.startTime,r=t.endTime,o=this.renderData,s=o.dateModule,a=Math.abs(s.difference(t.startTime,t.endTime,"millisecond")),n=36e5*(24-o.maxHours+o.minHours);
if(a>n)return!1;var l=60*i.getHours()+i.getMinutes(),h=60*r.getHours()+r.getMinutes(),d=60*o.minHours,u=60*o.maxHours;
return l>0&&d>l?(this.floorToDay(t.startTime,!0,o),t.startTime.setHours(o.minHours),
t.endTime=s.add(t.startTime,"millisecond",a),e=!0):l>u&&1440>=l&&(this.floorToDay(t.startTime,!0,o),
t.startTime=s.add(t.startTime,"day",1),t.startTime.setHours(o.minHours),t.endTime=s.add(t.startTime,"millisecond",a),
e=!0),h>0&&d>h?(this.floorToDay(t.endTime,!0,o),t.endTime=s.add(t.endTime,"day",-1),
t.endTime.setHours(o.maxHours),t.startTime=s.add(t.endTime,"millisecond",-a),e=!0):h>u&&1440>=h&&(this.floorToDay(t.endTime,!0,o),
t.endTime.setHours(o.maxHours),t.startTime=s.add(t.endTime,"millisecond",-a),e=!0),
e=e||this.inherited(arguments)},_onScrollTimer_tick:function(){this._scrollToPosition(this._getScrollPosition()+this._scrollProps.scrollStep);
},snapUnit:"minute",snapSteps:15,minDurationUnit:"minute",minDurationSteps:15,liveLayout:!1,
stayInView:!0,allowStartEndSwap:!0,allowResizeLessThan24H:!0})});