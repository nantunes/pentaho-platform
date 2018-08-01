define(["dojo/_base/declare","dojo/_base/array","dojo/_base/event","dojo/_base/lang","dojo/_base/sniff","dojo/_base/fx","dojo/_base/html","dojo/on","dojo/dom","dojo/dom-class","dojo/dom-style","dojo/dom-geometry","dojo/dom-construct","dojo/query","dojox/html/metrics","dojo/i18n","./ViewBase","dojo/text!./templates/MatrixView.html","dijit/_TemplatedMixin"],function(e,t,i,n,r,a,o,s,d,l,h,u,c,m,p,f,g,_,v){
return e("dojox.calendar.MatrixView",[g,v],{templateString:_,baseClass:"dojoxCalendarMatrixView",
_setTabIndexAttr:"domNode",viewKind:"matrix",renderData:null,startDate:null,refStartTime:null,
refEndTime:null,columnCount:7,rowCount:5,horizontalRenderer:null,labelRenderer:null,
expandRenderer:null,percentOverlap:0,verticalGap:2,horizontalRendererHeight:17,labelRendererHeight:14,
expandRendererHeight:15,cellPaddingTop:16,expandDuration:300,expandEasing:null,layoutDuringResize:!1,
roundToDay:!0,showCellLabel:!0,scrollable:!1,resizeCursor:"e-resize",constructor:function(){
this.invalidatingProperties=["columnCount","rowCount","startDate","horizontalRenderer","labelRenderer","expandRenderer","rowHeaderDatePattern","columnHeaderLabelLength","cellHeaderShortPattern","cellHeaderLongPattern","percentOverlap","verticalGap","horizontalRendererHeight","labelRendererHeight","expandRendererHeight","cellPaddingTop","roundToDay","itemToRendererKindFunc","layoutPriorityFunction","formatItemTimeFunc","textDir","items"],
this._ddRendererList=[],this._ddRendererPool=[],this._rowHeaderHandles=[]},destroy:function(e){
this._cleanupRowHeader(),this.inherited(arguments)},postCreate:function(){this.inherited(arguments),
this._initialized=!0,this.invalidRendering||this.refreshRendering()},_createRenderData:function(){
var e={};e.dateLocaleModule=this.dateLocaleModule,e.dateClassObj=this.dateClassObj,
e.dateModule=this.dateModule,e.dates=[],e.columnCount=this.get("columnCount"),e.rowCount=this.get("rowCount"),
e.sheetHeight=this.itemContainer.offsetHeight,this._computeRowsHeight(e);var t=this.get("startDate");
null==t&&(t=new e.dateClassObj),t=this.floorToDay(t,!1,e),this.startDate=t;for(var i=0;i<e.rowCount;i++){
e.dates.push([]);for(var n=0;n<e.columnCount;n++)e.dates[i].push(t),t=e.dateModule.add(t,"day",1),
t=this.floorToDay(t,!1,e)}return e.startTime=this.newDate(e.dates[0][0],e),e.endTime=this.newDate(e.dates[e.rowCount-1][e.columnCount-1],e),
e.endTime=e.dateModule.add(e.endTime,"day",1),e.endTime=this.floorToDay(e.endTime,!0),
this.displayedItemsInvalidated&&!this._isEditing?(this.displayedItemsInvalidated=!1,
this._computeVisibleItems(e)):this.renderData&&(e.items=this.renderData.items),e.rtl=!this.isLeftToRight(),
e},_validateProperties:function(){this.inherited(arguments),(this.columnCount<1||isNaN(this.columnCount))&&(this.columnCount=1),
(this.rowCount<1||isNaN(this.rowCount))&&(this.rowCount=1),(isNaN(this.percentOverlap)||this.percentOverlap<0||this.percentOverlap>100)&&(this.percentOverlap=0),
(isNaN(this.verticalGap)||this.verticalGap<0)&&(this.verticalGap=2),(isNaN(this.horizontalRendererHeight)||this.horizontalRendererHeight<1)&&(this.horizontalRendererHeight=17),
(isNaN(this.labelRendererHeight)||this.labelRendererHeight<1)&&(this.labelRendererHeight=14),
(isNaN(this.expandRendererHeight)||this.expandRendererHeight<1)&&(this.expandRendererHeight=15);
},_setStartDateAttr:function(e){this.displayedItemsInvalidated=!0,this._set("startDate",e);
},_setColumnCountAttr:function(e){this.displayedItemsInvalidated=!0,this._set("columnCount",e);
},_setRowCountAttr:function(e){this.displayedItemsInvalidated=!0,this._set("rowCount",e);
},__fixEvt:function(e){return e.sheet="primary",e.source=this,e},_formatRowHeaderLabel:function(e){
return this.rowHeaderDatePattern?this.renderData.dateLocaleModule.format(e,{selector:"date",
datePattern:this.rowHeaderDatePattern}):this.getWeekNumberLabel(e)},_formatColumnHeaderLabel:function(e){
return this.renderData.dateLocaleModule.getNames("days",this.columnHeaderLabelLength?this.columnHeaderLabelLength:"wide","standAlone")[e.getDay()];
},_formatGridCellLabel:function(e,t,i){var n,r,a=0==t&&0==i||1==e.getDate();return a?this.cellHeaderLongPattern?n=this.cellHeaderLongPattern:(r=f.getLocalization("dojo.cldr",this._calendar),
n=r["dateFormatItem-MMMd"]):this.cellHeaderShortPattern?n=this.cellHeaderShortPattern:(r=f.getLocalization("dojo.cldr",this._calendar),
n=r["dateFormatItem-d"]),this.renderData.dateLocaleModule.format(e,{selector:"date",
datePattern:n})},refreshRendering:function(){if(this.inherited(arguments),this.domNode){
this._validateProperties();var e=this.renderData;this.renderData=this._createRenderData(),
this._createRendering(this.renderData,e),this._layoutRenderers(this.renderData)}},
_createRendering:function(e,t){if(e.rowHeight<=0)return e.columnCount=1,e.rowCount=1,
void(e.invalidRowHeight=!0);if(t&&this.itemContainerTable){var i=m(".dojoxCalendarItemContainerRow",this.itemContainerTable);
t.rowCount=i.length}this._buildColumnHeader(e,t),this._buildRowHeader(e,t),this._buildGrid(e,t),
this._buildItemContainer(e,t),this.buttonContainer&&null!=this.owner&&this.owner.currentView==this&&h.set(this.buttonContainer,{
right:0,left:0})},_buildColumnHeader:function(e,t){var i=this.columnHeaderTable;if(i){
var a=e.columnCount-(t?t.columnCount:0);8==r("ie")&&(null==this._colTableSave?this._colTableSave=n.clone(i):0>a&&(this.columnHeader.removeChild(i),
c.destroy(i),i=n.clone(this._colTableSave),this.columnHeaderTable=i,this.columnHeader.appendChild(i),
a=e.columnCount));var s,d,h,u=m("tbody",i),p=m("tr",i);if(s=1==u.length?u[0]:o.create("tbody",null,i),
d=1==p.length?p[0]:c.create("tr",null,s),a>0)for(var f=0;a>f;f++)h=c.create("td",null,d);else{
a=-a;for(var f=0;a>f;f++)d.removeChild(d.lastChild)}if(m("td",i).forEach(function(t,i){
t.className="";var n=e.dates[0][i];this._setText(t,this._formatColumnHeaderLabel(n)),
0==i?l.add(t,"first-child"):i==this.renderData.columnCount-1&&l.add(t,"last-child"),
this.styleColumnHeaderCell(t,n,e)},this),this.yearColumnHeaderContent){var g=e.dates[0][0];
this._setText(this.yearColumnHeaderContent,e.dateLocaleModule.format(g,{selector:"date",
datePattern:"yyyy"}))}}},styleColumnHeaderCell:function(e,t,i){l.add(e,this._cssDays[t.getDay()]),
this.isWeekEnd(t)&&l.add(e,"dojoxCalendarWeekend")},_rowHeaderHandles:null,_cleanupRowHeader:function(){
for(;this._rowHeaderHandles.length>0;)for(var e=this._rowHeaderHandles.pop();e.length>0;)e.pop().remove();
},_rowHeaderClick:function(e){var t=m("td",this.rowHeaderTable).indexOf(e.currentTarget);
this._onRowHeaderClick({index:t,date:this.renderData.dates[t][0],triggerEvent:e});
},_buildRowHeader:function(e,t){var i=this.rowHeaderTable;if(i){var a,o,d,u=m("tbody",i);
a=1==u.length?u[0]:c.create("tbody",null,i);var p=e.rowCount-(t?t.rowCount:0);if(p>0)for(var f=0;p>f;f++){
o=c.create("tr",null,a),d=c.create("td",null,o);var g=[];g.push(s(d,"click",n.hitch(this,this._rowHeaderClick))),
r("touch")||(g.push(s(d,"mousedown",function(e){l.add(e.currentTarget,"Active")})),
g.push(s(d,"mouseup",function(e){l.remove(e.currentTarget,"Active")})),g.push(s(d,"mouseover",function(e){
l.add(e.currentTarget,"Hover")})),g.push(s(d,"mouseout",function(e){l.remove(e.currentTarget,"Hover");
}))),this._rowHeaderHandles.push(g)}else{p=-p;for(var f=0;p>f;f++){a.removeChild(a.lastChild);
for(var _=this._rowHeaderHandles.pop();_.length>0;)_.pop().remove()}}m("tr",i).forEach(function(t,i){
h.set(t,"height",this._getRowHeight(i)+"px");var n=e.dates[i][0],r=m("td",t)[0];r.className="",
0==i&&l.add(r,"first-child"),i==this.renderData.rowCount-1&&l.add(r,"last-child"),
this.styleRowHeaderCell(r,n,e),this._setText(r,this._formatRowHeaderLabel(n))},this);
}},styleRowHeaderCell:function(e,t,i){},_buildGrid:function(e,t){var i=this.gridTable;
if(i){var a=m("tr",i),o=e.rowCount-a.length,s=o>0,d=e.columnCount-(t?t.columnCount:0);
8==r("ie")&&(null==this._gridTableSave?this._gridTableSave=n.clone(i):0>d&&(this.grid.removeChild(i),
c.destroy(i),i=n.clone(this._gridTableSave),this.gridTable=i,this.grid.appendChild(i),
d=e.columnCount,o=e.rowCount,s=!0));var u,p=m("tbody",i);if(u=1==p.length?p[0]:c.create("tbody",null,i),
s)for(var f=0;o>f;f++)c.create("tr",null,u);else{o=-o;for(var f=0;o>f;f++)u.removeChild(u.lastChild);
}var g=e.rowCount-o,_=s||d>0;d=_?d:-d,m("tr",i).forEach(function(t,i){if(_)for(var n=i>=g?e.columnCount:d,i=0;n>i;i++){
var r=c.create("td",null,t);c.create("span",null,r)}else for(var i=0;d>i;i++)t.removeChild(t.lastChild);
}),m("tr",i).forEach(function(t,i){h.set(t,"height",this._getRowHeight(i)+"px"),t.className="",
0==i&&l.add(t,"first-child"),i==e.rowCount-1&&l.add(t,"last-child"),m("td",t).forEach(function(t,n){
t.className="",0==n&&l.add(t,"first-child"),n==e.columnCount-1&&l.add(t,"last-child");
var r=e.dates[i][n],a=m("span",t)[0];this._setText(a,this.showCellLabel?this._formatGridCellLabel(r,i,n):null),
this.styleGridCell(t,r,e)},this)},this)}},styleGridCellFunc:null,defaultStyleGridCell:function(e,t,i){
l.add(e,this._cssDays[t.getDay()]);var n=this.dateModule;this.isToday(t)?l.add(e,"dojoxCalendarToday"):null!=this.refStartTime&&null!=this.refEndTime&&(n.compare(t,this.refEndTime)>=0||n.compare(n.add(t,"day",1),this.refStartTime)<=0)?l.add(e,"dojoxCalendarDayDisabled"):this.isWeekEnd(t)&&l.add(e,"dojoxCalendarWeekend");
},styleGridCell:function(e,t,i){this.styleGridCellFunc?this.styleGridCellFunc(e,t,i):this.defaultStyleGridCell(e,t,i);
},_buildItemContainer:function(e,t){var i=this.itemContainerTable;if(i){var a=[],o=e.rowCount-(t?t.rowCount:0);
8==r("ie")&&(null==this._itemTableSave?this._itemTableSave=n.clone(i):0>o&&(this.itemContainer.removeChild(i),
this._recycleItemRenderers(!0),this._recycleExpandRenderers(!0),c.destroy(i),i=n.clone(this._itemTableSave),
this.itemContainerTable=i,this.itemContainer.appendChild(i),o=e.columnCount));var s,d,u,p,f=m("tbody",i);
if(s=1==f.length?f[0]:c.create("tbody",null,i),o>0)for(var g=0;o>g;g++)d=c.create("tr",null,s),
l.add(d,"dojoxCalendarItemContainerRow"),u=c.create("td",null,d),p=c.create("div",null,u),
l.add(p,"dojoxCalendarContainerRow");else{o=-o;for(var g=0;o>g;g++)s.removeChild(s.lastChild);
}m(".dojoxCalendarItemContainerRow",i).forEach(function(e,t){h.set(e,"height",this._getRowHeight(t)+"px"),
a.push(e.childNodes[0].childNodes[0])},this),e.cells=a}},resize:function(e){this.inherited(arguments),
this._resizeHandler(null,!1)},_resizeHandler:function(e,t){var i=this.renderData;if(null==i)return void this.refreshRendering();
if(i.sheetHeight!=this.itemContainer.offsetHeight){i.sheetHeight=this.itemContainer.offsetHeight;
var r=this.getExpandedRowIndex();if(-1==r?(this._computeRowsHeight(),this._resizeRows()):this.expandRow(i.expandedRow,i.expandedRowCol,0,null,!0),
i.invalidRowHeight)return delete i.invalidRowHeight,this.renderData=null,this.displayedItemsInvalidated=!0,
void this.refreshRendering()}this.layoutDuringResize||t?setTimeout(n.hitch(this,function(){
this._layoutRenderers(this.renderData)}),20):(h.set(this.itemContainer,"opacity",0),
this._recycleItemRenderers(),this._recycleExpandRenderers(),void 0!=this._resizeTimer&&clearTimeout(this._resizeTimer),
this._resizeTimer=setTimeout(n.hitch(this,function(){delete this._resizeTimer,this._resizeRowsImpl(this.itemContainer,"tr"),
this._layoutRenderers(this.renderData),0==this.resizeAnimationDuration?h.set(this.itemContainer,"opacity",1):a.fadeIn({
node:this.itemContainer,curve:[0,1]}).play(this.resizeAnimationDuration)}),200))},
resizeAnimationDuration:0,getExpandedRowIndex:function(){return null==this.renderData.expandedRow?-1:this.renderData.expandedRow;
},collapseRow:function(e,t,i){var r=this.renderData;if(void 0==i&&(i=!0),void 0==e&&(e=this.expandDuration),
r&&null!=r.expandedRow&&-1!=r.expandedRow)if(i&&e){var o=r.expandedRow,s=r.expandedRowHeight;
delete r.expandedRow,this._computeRowsHeight(r);var d=this._getRowHeight(o);r.expandedRow=o,
this._recycleExpandRenderers(),this._recycleItemRenderers(),h.set(this.itemContainer,"display","none"),
this._expandAnimation=new a.Animation({curve:[s,d],duration:e,easing:t,onAnimate:n.hitch(this,function(e){
this._expandRowImpl(Math.floor(e))}),onEnd:n.hitch(this,function(e){this._expandAnimation=null,
this._collapseRowImpl(!1),this._resizeRows(),h.set(this.itemContainer,"display","block"),
setTimeout(n.hitch(this,function(){this._layoutRenderers(r)}),100),this.onExpandAnimationEnd(!1);
})}),this._expandAnimation.play()}else this._collapseRowImpl(i)},_collapseRowImpl:function(e){
var t=this.renderData;delete t.expandedRow,delete t.expandedRowHeight,this._computeRowsHeight(t),
(void 0==e||e)&&(this._resizeRows(),this._layoutRenderers(t))},expandRow:function(e,t,i,r,o){
var s=this.renderData;if(!s||0>e||e>=s.rowCount)return-1;(void 0==t||0>t||t>=s.columnCount)&&(t=-1),
void 0==o&&(o=!0),void 0==i&&(i=this.expandDuration),void 0==r&&(r=this.expandEasing);
var d=this._getRowHeight(e),l=s.sheetHeight-Math.ceil(this.cellPaddingTop*(s.rowCount-1));
s.expandedRow=e,s.expandedRowCol=t,s.expandedRowHeight=l,o&&(i?(this._recycleExpandRenderers(),
this._recycleItemRenderers(),h.set(this.itemContainer,"display","none"),this._expandAnimation=new a.Animation({
curve:[d,l],duration:i,delay:50,easing:r,onAnimate:n.hitch(this,function(e){this._expandRowImpl(Math.floor(e));
}),onEnd:n.hitch(this,function(){this._expandAnimation=null,h.set(this.itemContainer,"display","block"),
setTimeout(n.hitch(this,function(){this._expandRowImpl(l,!0)}),100),this.onExpandAnimationEnd(!0);
})}),this._expandAnimation.play()):this._expandRowImpl(l))},_expandRowImpl:function(e,t){
var i=this.renderData;i.expandedRowHeight=e,this._computeRowsHeight(i,i.sheetHeight-e),
this._resizeRows(),t&&this._layoutRenderers(i)},onExpandAnimationEnd:function(e){},
_resizeRows:function(){this._getRowHeight(0)<=0||(this.rowHeaderTable&&this._resizeRowsImpl(this.rowHeaderTable,"tr"),
this.gridTable&&this._resizeRowsImpl(this.gridTable,"tr"),this.itemContainerTable&&this._resizeRowsImpl(this.itemContainerTable,"tr"));
},_computeRowsHeight:function(e,t){var i=null==e?this.renderData:e;if(t=t||i.sheetHeight,
t--,7==r("ie")&&(t-=i.rowCount),1==i.rowCount)return i.rowHeight=t,i.rowHeightFirst=t,
void(i.rowHeightLast=t);var n,a,o,s,d=null==i.expandedRow?i.rowCount:i.rowCount-1,l=t/d,h=t-Math.floor(l)*d,u=Math.abs(t-Math.ceil(l)*d),c=1;
u>h?(o=Math.floor(l),s=h):(c=-1,o=Math.ceil(l),s=u),n=o+c*Math.floor(s/2),a=n+c*(s%2),
i.rowHeight=o,i.rowHeightFirst=n,i.rowHeightLast=a},_getRowHeight:function(e){var t=this.renderData;
return e==t.expandedRow?t.expandedRowHeight:0==t.expandedRow&&1==e||0==e?t.rowHeightFirst:t.expandedRow==this.renderData.rowCount-1&&e==this.renderData.rowCount-2||e==this.renderData.rowCount-1?t.rowHeightLast:t.rowHeight;
},_resizeRowsImpl:function(e,t){dojo.query(t,e).forEach(function(e,t){h.set(e,"height",this._getRowHeight(t)+"px");
},this)},_setHorizontalRendererAttr:function(e){this._destroyRenderersByKind("horizontal"),
this._set("horizontalRenderer",e)},_setLabelRendererAttr:function(e){this._destroyRenderersByKind("label"),
this._set("labelRenderer",e)},_destroyExpandRenderer:function(e){e.destroyRecursive&&e.destroyRecursive(),
o.destroy(e.domNode)},_setExpandRendererAttr:function(e){for(;this._ddRendererList.length>0;)this._destroyExpandRenderer(this._ddRendererList.pop());
var t=this._ddRendererPool;if(t)for(;t.length>0;)this._destroyExpandRenderer(t.pop());
this._set("expandRenderer",e)},_ddRendererList:null,_ddRendererPool:null,_getExpandRenderer:function(e,t,i,n,r){
if(null==this.expandRenderer)return null;var a=this._ddRendererPool.pop();return null==a&&(a=new this.expandRenderer),
this._ddRendererList.push(a),a.set("owner",this),a.set("date",e),a.set("items",t),
a.set("rowIndex",i),a.set("columnIndex",n),a.set("expanded",r),a},_recycleExpandRenderers:function(e){
for(var t=0;t<this._ddRendererList.length;t++){var i=this._ddRendererList[t];i.set("Up",!1),
i.set("Down",!1),e&&i.domNode.parentNode.removeChild(i.domNode),h.set(i.domNode,"display","none");
}this._ddRendererPool=this._ddRendererPool.concat(this._ddRendererList),this._ddRendererList=[];
},_defaultItemToRendererKindFunc:function(e){var t=Math.abs(this.renderData.dateModule.difference(e.startTime,e.endTime,"minute"));
return t>=1440?"horizontal":"label"},naturalRowsHeight:null,_roundItemToDay:function(e){
var t=e.startTime,i=e.endTime;return this.isStartOfDay(t)||(t=this.floorToDay(t,!1,this.renderData)),
this.isStartOfDay(i)||(i=this.renderData.dateModule.add(i,"day",1),i=this.floorToDay(i,!0)),
{startTime:t,endTime:i}},_sortItemsFunction:function(e,t){this.roundToDay&&(e=this._roundItemToDay(e),
t=this._roundItemToDay(t));var i=this.dateModule.compare(e.startTime,t.startTime);
return 0==i&&(i=-1*this.dateModule.compare(e.endTime,t.endTime)),i},_overlapLayoutPass3:function(e){
for(var t=0,i=0,n=[],r=u.position(this.gridTable).x,a=0;a<this.renderData.columnCount;a++){
var o=!1,s=u.position(this._getCellAt(0,a));t=s.x-r,i=t+s.w;for(var d=e.length-1;d>=0&&!o;d--)for(var l=0;l<e[d].length;l++){
var h=e[d][l];if(o=h.start<i&&t<h.end){n[a]=d+1;break}}o||(n[a]=0)}return n},applyRendererZIndex:function(e,t,i,n,r,a){
h.set(t.container,{zIndex:r||n?t.renderer.mobile?100:0:void 0==e.lane?1:e.lane+1});
},_layoutRenderers:function(e){if(!(null==e||null==e.items||e.rowHeight<=0)){if(!this.gridTable||null!=this._expandAnimation||null==this.horizontalRenderer&&null==this.labelRenderer)return void this._recycleItemRenderers();
this.renderData.gridTablePosX=u.position(this.gridTable).x,this._layoutStep=e.columnCount,
this._recycleExpandRenderers(),this._hiddenItems=[],this._offsets=[],this.naturalRowsHeight=[],
this.inherited(arguments)}},_offsets:null,_layoutInterval:function(e,t,i,n,r){if(null!=this.renderData.cells){
for(var a=[],o=[],s=0;s<r.length;s++){var d=r[s],l=this._itemToRendererKind(d);"horizontal"==l?a.push(d):"label"==l&&o.push(d);
}var h=this.getExpandedRowIndex();if(-1==h||h==t){var u=[],c=null,m=[];if(a.length>0&&this.horizontalRenderer)var c=this._createHorizontalLayoutItems(t,i,n,a),p=this._computeHorizontalOverlapLayout(c,m);
var f,g=[];o.length>0&&this.labelRenderer&&(f=this._createLabelLayoutItems(t,i,n,o),
this._computeLabelOffsets(f,g));var _=this._computeColHasHiddenItems(t,m,g);null!=c&&this._layoutHorizontalItemsImpl(t,c,p,_,u),
null!=f&&this._layoutLabelItemsImpl(t,f,_,u,m),this._layoutExpandRenderers(t,_,u),
this._hiddenItems[t]=u}}},_createHorizontalLayoutItems:function(e,t,i,r){if(null!=this.horizontalRenderer){
for(var a=this.renderData,o=a.dateModule,s=a.rtl?-1:1,d=[],l=0;l<r.length;l++){var h=r[l],c=this.computeRangeOverlap(a,h.startTime,h.endTime,t,i),m=o.difference(t,this.floorToDay(c[0],!1,a),"day"),p=a.dates[e][m],f=u.position(this._getCellAt(e,m,!1)),g=f.x-a.gridTablePosX;
a.rtl&&(g+=f.w),this.roundToDay||h.allDay||(g+=s*this.computeProjectionOnDate(a,p,c[0],f.w)),
g=Math.ceil(g);var _,v=o.difference(t,this.floorToDay(c[1],!1,a),"day");if(v>a.columnCount-1?(f=u.position(this._getCellAt(e,a.columnCount-1,!1)),
_=a.rtl?f.x-a.gridTablePosX:f.x-a.gridTablePosX+f.w):(p=a.dates[e][v],f=u.position(this._getCellAt(e,v,!1)),
_=f.x-a.gridTablePosX,a.rtl&&(_+=f.w),this.roundToDay?this.isStartOfDay(c[1])||(_+=s*f.w):_+=s*this.computeProjectionOnDate(a,p,c[1],f.w)),
_=Math.floor(_),a.rtl){var R=_;_=g,g=R}if(_>g){var w=n.mixin({start:g,end:_,range:c,
item:h,startOffset:m,endOffset:v},h);d.push(w)}}return d}},_computeHorizontalOverlapLayout:function(e,t){
for(var i=this.renderData,n=this.horizontalRendererHeight,r=this.computeOverlapping(e,this._overlapLayoutPass3),a=this.percentOverlap/100,o=0;o<i.columnCount;o++){
var s=r.addedPassRes[o],d=i.rtl?i.columnCount-o-1:o;0==a?t[d]=0==s?0:1==s?n:n+(s-1)*(n+this.verticalGap):t[d]=0==s?0:s*n-(s-1)*a*n+this.verticalGap,
t[d]+=this.cellPaddingTop}return r},_createLabelLayoutItems:function(e,t,i,r){if(null!=this.labelRenderer){
for(var a,o=this.renderData,s=o.dateModule,d=[],l=0;l<r.length;l++){var h=r[l];a=this.floorToDay(h.startTime,!1,o);
for(var u=this.dateModule.compare;-1==u(a,h.endTime)&&-1==u(a,i);){var c=s.add(a,"day",1);
c=this.floorToDay(c,!0);var m=this.computeRangeOverlap(o,h.startTime,h.endTime,a,c),p=s.difference(t,this.floorToDay(m[0],!1,o),"day");
if(p>=this.columnCount)break;if(p>=0){var f=d[p];null==f&&(f=[],d[p]=f),f.push(n.mixin({
startOffset:p,range:m,item:h},h))}a=s.add(a,"day",1),this.floorToDay(a,!0)}}return d;
}},_computeLabelOffsets:function(e,t){for(var i=0;i<this.renderData.columnCount;i++)t[i]=null==e[i]?0:e[i].length*(this.labelRendererHeight+this.verticalGap);
},_computeColHasHiddenItems:function(e,t,i){for(var n,r=[],a=this._getRowHeight(e),o=0,s=0;s<this.renderData.columnCount;s++)n=null==t||null==t[s]?this.cellPaddingTop:t[s],
n+=null==i||null==i[s]?0:i[s],n>o&&(o=n),r[s]=n>a;return this.naturalRowsHeight[e]=o,
r},_layoutHorizontalItemsImpl:function(e,t,i,n,a){for(var o=this.renderData,s=o.cells[e],d=this._getRowHeight(e),l=this.horizontalRendererHeight,u=this.percentOverlap/100,c=0;c<t.length;c++){
var m=t[c],p=m.lane,f=this.cellPaddingTop;f+=0==u?p*(l+this.verticalGap):p*(l-u*l);
var g=!1,_=d;if(this.expandRenderer){for(var v=m.startOffset;v<=m.endOffset;v++)if(n[v]){
g=!0;break}_=g?d-this.expandRendererHeight:d}if(_>=f+l){var R=this._createRenderer(m,"horizontal",this.horizontalRenderer,"dojoxCalendarHorizontal"),w=this.isItemBeingEdited(m)&&!this.liveLayout&&this._isEditing,C=w?d-this.cellPaddingTop:l,y=m.end-m.start;
r("ie")>=9&&m.start+y<this.itemContainer.offsetWidth&&y++,h.set(R.container,{top:(w?this.cellPaddingTop:f)+"px",
left:m.start+"px",width:y+"px",height:C+"px"}),this._applyRendererLayout(m,R,s,y,C,"horizontal");
}else for(var x=m.startOffset;x<m.endOffset;x++)null==a[x]?a[x]=[m.item]:a[x].push(m.item);
}},_layoutLabelItemsImpl:function(e,t,i,r,a){for(var o,s,d=this.renderData,l=d.cells[e],c=this._getRowHeight(e),m=this.labelRendererHeight,p=u.getMarginBox(this.itemContainer).w,f=0;f<t.length;f++)if(o=t[f],
null!=o){var g=this.expandRenderer&&i[f]?c-this.expandRendererHeight:c;s=null==a||null==a[f]?this.cellPaddingTop:a[f]+this.verticalGap;
for(var _=u.position(this._getCellAt(e,f)),v=_.x-d.gridTablePosX,R=0;R<o.length&&s+m+this.verticalGap<=g;R++){
var w=o[R];n.mixin(w,{start:v,end:v+_.w});var C=this._createRenderer(w,"label",this.labelRenderer,"dojoxCalendarLabel"),y=this.isItemBeingEdited(w)&&!this.liveLayout&&this._isEditing,x=y?this._getRowHeight(e)-this.cellPaddingTop:m;
d.rtl&&(w.start=p-w.end,w.end=w.start+_.w),h.set(C.container,{top:(y?this.cellPaddingTop:s)+"px",
left:w.start+"px",width:_.w+"px",height:x+"px"}),this._applyRendererLayout(w,C,l,_.w,x,"label"),
s+=m+this.verticalGap}for(var R;R<o.length;R++)null==r[f]?r[f]=[o[R]]:r[f].push(o[R]);
}},_applyRendererLayout:function(e,t,i,n,r,a){var o=this.isItemBeingEdited(e),s=this.isItemSelected(e),d=this.isItemHovered(e),l=this.isItemFocused(e),u=t.renderer;
u.set("hovered",d),u.set("selected",s),u.set("edited",o),u.set("focused",this.showFocus?l:!1),
u.set("moveEnabled",this.isItemMoveEnabled(e._item,a)),u.set("storeState",this.getItemStoreState(e)),
"label"!=a&&u.set("resizeEnabled",this.isItemResizeEnabled(e,a)),this.applyRendererZIndex(e,t,d,s,o,l),
u.updateRendering&&u.updateRendering(n,r),c.place(t.container,i),h.set(t.container,"display","block");
},_getCellAt:function(e,t,i){return void 0!=i&&1!=i||this.isLeftToRight()||(t=this.renderData.columnCount-1-t),
this.gridTable.childNodes[0].childNodes[e].childNodes[t]},_layoutExpandRenderers:function(e,t,i){
if(this.expandRenderer){var n=this.renderData;if(n.expandedRow==e)null!=n.expandedRowCol&&-1!=n.expandedRowCol&&this._layoutExpandRendererImpl(n.expandedRow,n.expandedRowCol,null,!0);else if(null==n.expandedRow)for(var r=0;r<n.columnCount;r++)t[r]&&this._layoutExpandRendererImpl(e,n.rtl?n.columnCount-1-r:r,i[r],!1);
}},_layoutExpandRendererImpl:function(e,t,i,r){var a=this.renderData,o=n.clone(a.dates[e][t]),s=null,d=a.cells[e];
s=this._getExpandRenderer(o,i,e,t,r);var l=u.position(this._getCellAt(e,t));l.x-=a.gridTablePosX,
this.layoutExpandRenderer(s,o,i,l,this.expandRendererHeight),c.place(s.domNode,d),
h.set(s.domNode,"display","block")},layoutExpandRenderer:function(e,t,i,n,r){h.set(e.domNode,{
left:n.x+"px",width:n.w+"px",height:r+"px",top:n.h-r-1+"px"})},_onItemEditBeginGesture:function(e){
var t=this._edProps,i=t.editedItem,n=e.dates,r=this.newDate("resizeEnd"==t.editKind?i.endTime:i.startTime);
if("label"==t.rendererKind);else if("move"==e.editKind&&(i.allDay||this.roundToDay)){
var a=this.renderData.dateModule;t.dayOffset=a.difference(this.floorToDay(n[0],!1,this.renderData),r,"day");
}this.inherited(arguments)},_computeItemEditingTimes:function(e,t,i,n,r){var a=this.renderData.dateModule,o=this._edProps;
if("label"==i);else if(e.allDay||this.roundToDay){var s=this.isStartOfDay(n[0]);switch(t){
case"resizeEnd":!s&&e.allDay&&(n[0]=a.add(n[0],"day",1));case"resizeStart":s||(n[0]=this.floorToDay(n[0],!0));
break;case"move":n[0]=a.add(n[0],"day",o.dayOffset);break;case"resizeBoth":s||(n[0]=this.floorToDay(n[0],!0)),
this.isStartOfDay(n[1])||(n[1]=this.floorToDay(a.add(n[1],"day",1),!0))}}else n=this.inherited(arguments);
return n},getTime:function(e,t,i,n){var r=this.renderData;if(null!=e){var a=u.position(this.itemContainer,!0);
e.touches?(n=void 0==n?0:n,t=e.touches[n].pageX-a.x,i=e.touches[n].pageY-a.y):(t=e.pageX-a.x,
i=e.pageY-a.y)}var o=u.getContentBox(this.itemContainer);0>t?t=0:t>o.w&&(t=o.w-1),
0>i?i=0:i>o.h&&(i=o.h-1);var s,d=u.getMarginBox(this.itemContainer).w,l=d/r.columnCount;
s=null==r.expandedRow?Math.floor(i/(u.getMarginBox(this.itemContainer).h/r.rowCount)):r.expandedRow;
var o=u.getContentBox(this.itemContainer);r.rtl&&(t=o.w-t);var h=Math.floor(t/l),c=Math.floor(1440*(t-h*l)/l),m=null;
return s<r.dates.length&&h<this.renderData.dates[s].length&&(m=this.newDate(this.renderData.dates[s][h]),
m=this.renderData.dateModule.add(m,"minute",c)),m},_onGridMouseUp:function(e){this.inherited(arguments),
this._gridMouseDown&&(this._gridMouseDown=!1,this._onGridClick({date:this.getTime(e),
triggerEvent:e}))},_onGridTouchEnd:function(e){this.inherited(arguments);var t=this._gridProps;
t&&(this._isEditing||(t.fromItem||t.editingOnStart||this.selectFromEvent(e,null,null,!0),
t.fromItem||(this._pendingDoubleTap&&this._pendingDoubleTap.grid?(this._onGridDoubleClick({
date:this.getTime(this._gridProps.event),triggerEvent:this._gridProps.event}),clearTimeout(this._pendingDoubleTap.timer),
delete this._pendingDoubleTap):(this._onGridClick({date:this.getTime(this._gridProps.event),
triggerEvent:this._gridProps.event}),this._pendingDoubleTap={grid:!0,timer:setTimeout(n.hitch(this,function(){
delete this._pendingDoubleTap}),this.doubleTapDelay)}))),this._gridProps=null)},_onRowHeaderClick:function(e){
this._dispatchCalendarEvt(e,"onRowHeaderClick")},onRowHeaderClick:function(e){},expandRendererClickHandler:function(e,t){
i.stop(e);var r=t.get("rowIndex"),a=t.get("columnIndex");this._onExpandRendererClick(n.mixin(this._createItemEditEvent(),{
rowIndex:r,columnIndex:a,renderer:t,triggerEvent:e,date:this.renderData.dates[r][a]
}))},onExpandRendererClick:function(e){},_onExpandRendererClick:function(e){this._dispatchCalendarEvt(e,"onExpandRendererClick"),
e.isDefaultPrevented()||(-1!=this.getExpandedRowIndex()?this.collapseRow():this.expandRow(e.rowIndex,e.columnIndex));
},snapUnit:"minute",snapSteps:15,minDurationUnit:"minute",minDurationSteps:15,triggerExtent:3,
liveLayout:!1,stayInView:!0,allowStartEndSwap:!0,allowResizeLessThan24H:!1})});