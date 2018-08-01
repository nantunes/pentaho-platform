define(["dojo/_base/declare","dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/_base/html","dojo/_base/event","dojo/_base/window","dojo/keys","dojo/query","dojo/string","../_Plugin","../../EnhancedGrid"],function(t,e,o,i,s,r,n,d,a,h,l,c){
var u=t("dojox.grid.enhanced.plugins.NestedSorting",l,{name:"nestedSorting",_currMainSort:"none",
_currRegionIdx:-1,_a11yText:{dojoxGridDescending:"&#9662;",dojoxGridAscending:"&#9652;",
dojoxGridAscendingTip:"&#1784;",dojoxGridDescendingTip:"&#1783;",dojoxGridUnsortedTip:"x"
},constructor:function(){this._sortDef=[],this._sortData={},this._headerNodes={},
this._excludedColIdx=[],this.nls=this.grid._nls,this.grid.setSortInfo=function(){},
this.grid.setSortIndex=i.hitch(this,"_setGridSortIndex"),this.grid.getSortIndex=function(){},
this.grid.getSortProps=i.hitch(this,"getSortProps"),this.grid.sortFields&&this._setGridSortIndex(this.grid.sortFields,null,!0),
this.connect(this.grid.views,"render","_initSort"),this.initCookieHandler(),this.grid.plugin("rearrange")?this.subscribe("dojox/grid/rearrange/move/"+this.grid.id,i.hitch(this,"_onColumnDnD")):this.connect(this.grid.layout,"moveColumn","_onMoveColumn");
},onStartUp:function(){this.inherited(arguments),this.connect(this.grid,"onHeaderCellClick","_onHeaderCellClick"),
this.connect(this.grid,"onHeaderCellMouseOver","_onHeaderCellMouseOver"),this.connect(this.grid,"onHeaderCellMouseOut","_onHeaderCellMouseOut");
},_onMoveColumn:function(t,o,i,s,r){var n,d,a=this._getCurrentRegion(),h=a&&this._getRegionHeader(a).getAttribute("idx"),l=this._headerNodes[h],c=this._sortData,u={};
if(a&&(this._blurRegion(a),this._currRegionIdx=e.indexOf(this._getRegions(),l.firstChild)),
i>s)for(n in c)n=parseInt(n,10),d=c[n],d&&(n>=s&&i>n?u[n+1]=d:n==i?u[s]=d:u[n]=d);else if(s>i+1){
r||s++;for(n in c)n=parseInt(n,10),d=c[n],d&&(n>i&&s>n?u[n-1]=d:n==i?u[s-1]=d:u[n]=d);
}this._sortData=u,this._initSort(!1)},_onColumnDnD:function(t,o){if("col"===t){var i,s=o,r={},n=this._sortData,d=this._getCurrentRegion();
this._blurRegion(d);var a=this._getRegionHeader(d).getAttribute("idx");for(i in s)n[i]&&(r[s[i]]=n[i],
delete n[i]),i===a&&(a=s[i]);for(i in r)n[i]=r[i];var h=this._headerNodes[a];this._currRegionIdx=e.indexOf(this._getRegions(),h.firstChild),
this._initSort(!1)}},_setGridSortIndex:function(t,o,s){if(i.isArray(t)){var r,n,d;
for(r=0;r<t.length;r++){if(n=t[r],d=this.grid.getCellByField(n.attribute),!d)return void console.warn("Invalid sorting option, column ",n.attribute," not found.");
if(d.nosort||!this.grid.canSort(d.index,d.field))return void console.warn("Invalid sorting option, column ",n.attribute," is unsortable.");
}this.clearSort(),e.forEach(t,function(t,e){d=this.grid.getCellByField(t.attribute),
this.setSortData(d.index,"index",e),this.setSortData(d.index,"order",t.descending?"desc":"asc");
},this)}else{if(isNaN(t))return;if(void 0===o)return;this.setSortData(t,"order",o?"asc":"desc");
}this._updateSortDef(),s||this.grid.sort()},getSortProps:function(){return this._sortDef.length?this._sortDef:null;
},_initSort:function(t){var e=this.grid,o=e.domNode,i=this._sortDef.length;s.toggleClass(o,"dojoxGridSorted",!!i),
s.toggleClass(o,"dojoxGridSingleSorted",1===i),s.toggleClass(o,"dojoxGridNestSorted",i>1),
i>0&&(this._currMainSort=this._sortDef[0].descending?"desc":"asc");var r,n=this._excludedCoIdx=[];
this._headerNodes=a("th",e.viewsHeaderNode).forEach(function(t){r=parseInt(t.getAttribute("idx"),10),
("none"===s.style(t,"display")||e.layout.cells[r].nosort||e.canSort&&!e.canSort(r,e.layout.cells[r].field))&&n.push(r);
}),this._headerNodes.forEach(this._initHeaderNode,this),this._initFocus(),t&&this._focusHeader();
},_initHeaderNode:function(t){s.toggleClass(t,"dojoxGridSortNoWrap",!0);var i=a(".dojoxGridSortNode",t)[0];
if(i&&s.toggleClass(i,"dojoxGridSortNoWrap",!0),e.indexOf(this._excludedCoIdx,t.getAttribute("idx"))>=0)return void s.addClass(t,"dojoxGridNoSort");
if(a(".dojoxGridSortBtn",t).length){var n=a(".dojoxGridSortBtnSingle",t)[0],d=a(".dojoxGridSortBtnNested",t)[0];
n.className="dojoxGridSortBtn dojoxGridSortBtnSingle",d.className="dojoxGridSortBtn dojoxGridSortBtnNested",
d.innerHTML="1",s.removeClass(t,"dojoxGridCellShowIndex"),s.removeClass(t.firstChild,"dojoxGridSortNodeSorted"),
s.removeClass(t.firstChild,"dojoxGridSortNodeAsc"),s.removeClass(t.firstChild,"dojoxGridSortNodeDesc"),
s.removeClass(t.firstChild,"dojoxGridSortNodeMain"),s.removeClass(t.firstChild,"dojoxGridSortNodeSub");
}else{this._connects=e.filter(this._connects,function(t){return t._sort?(o.disconnect(t),
!1):!0});var l=s.create("a",{className:"dojoxGridSortBtn dojoxGridSortBtnNested",
title:h.substitute(this.nls.sortingState,[this.nls.nestedSort,this.nls.ascending]),
innerHTML:"1"},t.firstChild,"last");l.onmousedown=r.stop,l=s.create("a",{className:"dojoxGridSortBtn dojoxGridSortBtnSingle",
title:h.substitute(this.nls.sortingState,[this.nls.singleSort,this.nls.ascending])
},t.firstChild,"last"),l.onmousedown=r.stop}this._updateHeaderNodeUI(t)},_onHeaderCellClick:function(t){
this._focusRegion(t.target),s.hasClass(t.target,"dojoxGridSortBtn")&&(this._onSortBtnClick(t),
r.stop(t),this._focusRegion(this._getCurrentRegion()))},_onHeaderCellMouseOver:function(t){
if(t.cell&&!(this._sortDef.length>1||this._sortData[t.cellIndex]&&0===this._sortData[t.cellIndex].index)){
var e;for(e in this._sortData)if(this._sortData[e]&&0===this._sortData[e].index){
s.addClass(this._headerNodes[e],"dojoxGridCellShowIndex");break}if(s.hasClass(n.body(),"dijit_a11y")){
var o=t.cell.index,i=t.cellNode,r=a(".dojoxGridSortBtnSingle",i)[0],d=a(".dojoxGridSortBtnNested",i)[0],h="none";
s.hasClass(this.grid.domNode,"dojoxGridSingleSorted")?h="single":s.hasClass(this.grid.domNode,"dojoxGridNestSorted")&&(h="nested");
var l=d.getAttribute("orderIndex");(null===l||void 0===l)&&(d.setAttribute("orderIndex",d.innerHTML),
l=d.innerHTML),this.isAsc(o)?d.innerHTML=l+this._a11yText.dojoxGridDescending:this.isDesc(o)?d.innerHTML=l+this._a11yText.dojoxGridUnsortedTip:d.innerHTML=l+this._a11yText.dojoxGridAscending,
"none"===this._currMainSort?r.innerHTML=this._a11yText.dojoxGridAscending:"asc"===this._currMainSort?r.innerHTML=this._a11yText.dojoxGridDescending:"desc"===this._currMainSort&&(r.innerHTML=this._a11yText.dojoxGridUnsortedTip);
}}},_onHeaderCellMouseOut:function(t){var e;for(e in this._sortData)if(this._sortData[e]&&0===this._sortData[e].index){
s.removeClass(this._headerNodes[e],"dojoxGridCellShowIndex");break}},_onSortBtnClick:function(t){
var e=t.cell.index;if(s.hasClass(t.target,"dojoxGridSortBtnSingle"))this._prepareSingleSort(e);else{
if(!s.hasClass(t.target,"dojoxGridSortBtnNested"))return;this._prepareNestedSort(e);
}r.stop(t),this._doSort(e)},_doSort:function(t){this._sortData[t]&&this._sortData[t].order?this.isAsc(t)?this.setSortData(t,"order","desc"):this.isDesc(t)&&this.removeSortData(t):this.setSortData(t,"order","asc"),
this._updateSortDef(),this.grid.sort(),this._initSort(!0)},setSortData:function(t,e,o){
var i=this._sortData[t];i||(i=this._sortData[t]={}),i[e]=o},removeSortData:function(t){
var e,o=this._sortData,i=o[t].index;delete o[t];for(e in o)o[e].index>i&&o[e].index--;
},_prepareSingleSort:function(t){var e,o=this._sortData;for(e in o)delete o[e];this.setSortData(t,"index",0),
this.setSortData(t,"order","none"===this._currMainSort?null:this._currMainSort),this._sortData[t]&&this._sortData[t].order?this.isAsc(t)?this._currMainSort="desc":this.isDesc(t)&&(this._currMainSort="none"):this._currMainSort="asc";
},_prepareNestedSort:function(t){var e=this._sortData[t]?this._sortData[t].index:null;
0===e||e||this.setSortData(t,"index",this._sortDef.length)},_updateSortDef:function(){
this._sortDef.length=0;var t,e=this._sortData;for(t in e)this._sortDef[e[t].index]={
attribute:this.grid.layout.cells[t].field,descending:"desc"===e[t].order}},_updateHeaderNodeUI:function(t){
function o(){var t="Column "+(i.index+1)+" "+i.field,o="none",s="ascending";d&&(o="asc"===d.order?"ascending":"descending",
s="asc"===d.order?"descending":"none");var r=t+" - is sorted by "+o,n=t+" - is nested sorted by "+o,a=t+" - choose to sort by "+s,h=t+" - choose to nested sort by "+s;
c.setAttribute("aria-label",r),u.setAttribute("aria-label",n);var l=[g.connect(c,"onmouseover",function(){
c.setAttribute("aria-label",a)}),g.connect(c,"onmouseout",function(){c.setAttribute("aria-label",r);
}),g.connect(u,"onmouseover",function(){u.setAttribute("aria-label",h)}),g.connect(u,"onmouseout",function(){
u.setAttribute("aria-label",n)})];e.forEach(l,function(t){t._sort=!0})}var i=this._getCellByNode(t),r=i.index,d=this._sortData[r],l=a(".dojoxGridSortNode",t)[0],c=a(".dojoxGridSortBtnSingle",t)[0],u=a(".dojoxGridSortBtnNested",t)[0];
s.toggleClass(c,"dojoxGridSortBtnAsc","asc"===this._currMainSort),s.toggleClass(c,"dojoxGridSortBtnDesc","desc"===this._currMainSort),
"asc"===this._currMainSort?c.title=h.substitute(this.nls.sortingState,[this.nls.singleSort,this.nls.descending]):"desc"===this._currMainSort?c.title=h.substitute(this.nls.sortingState,[this.nls.singleSort,this.nls.unsorted]):c.title=h.substitute(this.nls.sortingState,[this.nls.singleSort,this.nls.ascending]);
var g=this;o();var _=s.hasClass(n.body(),"dijit_a11y");return d?((d.index||0===d.index&&this._sortDef.length>1)&&(u.innerHTML=d.index+1),
s.addClass(l,"dojoxGridSortNodeSorted"),this.isAsc(r)?(s.addClass(l,"dojoxGridSortNodeAsc"),
u.title=h.substitute(this.nls.sortingState,[this.nls.nestedSort,this.nls.descending]),
_&&(l.innerHTML=this._a11yText.dojoxGridAscendingTip)):this.isDesc(r)&&(s.addClass(l,"dojoxGridSortNodeDesc"),
u.title=h.substitute(this.nls.sortingState,[this.nls.nestedSort,this.nls.unsorted]),
_&&(l.innerHTML=this._a11yText.dojoxGridDescendingTip)),void s.addClass(l,0===d.index?"dojoxGridSortNodeMain":"dojoxGridSortNodeSub")):(u.innerHTML=this._sortDef.length+1,
u.title=h.substitute(this.nls.sortingState,[this.nls.nestedSort,this.nls.ascending]),
void(_&&(l.innerHTML=this._a11yText.dojoxGridUnsortedTip)))},isAsc:function(t){return"asc"===this._sortData[t].order;
},isDesc:function(t){return"desc"===this._sortData[t].order},_getCellByNode:function(t){
var e;for(e=0;e<this._headerNodes.length;e++)if(this._headerNodes[e]===t)return this.grid.layout.cells[e];
return null},clearSort:function(){this._sortData={},this._sortDef.length=0},initCookieHandler:function(){
this.grid.addCookieHandler&&this.grid.addCookieHandler({name:"sortOrder",onLoad:i.hitch(this,"_loadNestedSortingProps"),
onSave:i.hitch(this,"_saveNestedSortingProps")})},_loadNestedSortingProps:function(t,e){
this._setGridSortIndex(t)},_saveNestedSortingProps:function(t){return this.getSortProps();
},_initFocus:function(){var t=this.focus=this.grid.focus;if(this._focusRegions=this._getRegions(),
!this._headerArea){var e=this._headerArea=t.getArea("header");e.onFocus=t.focusHeader=i.hitch(this,"_focusHeader"),
e.onBlur=t.blurHeader=t._blurHeader=i.hitch(this,"_blurHeader"),e.onMove=i.hitch(this,"_onMove"),
e.onKeyDown=i.hitch(this,"_onKeyDown"),e._regions=[],e.getRegions=null,this.connect(this.grid,"onBlur","_blurHeader");
}},_focusHeader:function(t){if(-1===this._currRegionIdx)this._onMove(0,1,null);else{
var e=this._getCurrentRegion();this._focusRegion(e);var o=this._getRegionView(e);o.scrollboxNode.scrollLeft=o.headerNode.scrollLeft;
}try{t&&r.stop(t)}catch(t){}return!0},_blurHeader:function(t){return this._blurRegion(this._getCurrentRegion()),
!0},_onMove:function(t,e,o){var i=this._currRegionIdx||0,r=this._focusRegions,n=r[i+e];
if(n){if("none"===s.style(n,"display")||"hidden"===s.style(n,"visibility"))return void this._onMove(t,e+(e>0?1:-1),o);
this._focusRegion(n);var d=this._getRegionView(n);d.scrollboxNode.scrollLeft=d.headerNode.scrollLeft;
}},_onKeyDown:function(t,e){if(e)switch(t.keyCode){case d.ENTER:case d.SPACE:(s.hasClass(t.target,"dojoxGridSortBtnSingle")||s.hasClass(t.target,"dojoxGridSortBtnNested"))&&this._onSortBtnClick(t);
}},_getRegionView:function(t){for(var o=t;o&&!s.hasClass(o,"dojoxGridHeader");)o=o.parentNode;
return o?e.filter(this.grid.views.views,function(t){return t.headerNode===o})[0]||null:null;
},_getRegions:function(){var t=[],e=this.grid.layout.cells;return this._headerNodes.forEach(function(o,i){
return"none"!==s.style(o,"display")?e[i].isRowSelector?void t.push(o):void a(".dojoxGridSortNode,.dojoxGridSortBtnNested,.dojoxGridSortBtnSingle",o).forEach(function(e){
e.setAttribute("tabindex",0),t.push(e)}):void 0},this),t},_focusRegion:function(t){
if(t){var o=this._getCurrentRegion();o&&t!==o&&this._blurRegion(o);var i=this._getRegionHeader(t);
s.addClass(i,"dojoxGridCellSortFocus"),s.hasClass(t,"dojoxGridSortNode")?s.addClass(t,"dojoxGridSortNodeFocus"):s.hasClass(t,"dojoxGridSortBtn")&&s.addClass(t,"dojoxGridSortBtnFocus");
try{t.focus()}catch(r){}this.focus.currentArea("header"),this._currRegionIdx=e.indexOf(this._focusRegions,t);
}},_blurRegion:function(t){if(t){var e=this._getRegionHeader(t);s.removeClass(e,"dojoxGridCellSortFocus"),
s.hasClass(t,"dojoxGridSortNode")?s.removeClass(t,"dojoxGridSortNodeFocus"):s.hasClass(t,"dojoxGridSortBtn")&&s.removeClass(t,"dojoxGridSortBtnFocus"),
t.blur()}},_getCurrentRegion:function(){return this._focusRegions?this._focusRegions[this._currRegionIdx]:null;
},_getRegionHeader:function(t){for(;t&&!s.hasClass(t,"dojoxGridCell");)t=t.parentNode;
return t},destroy:function(){this._sortDef=this._sortData=null,this._headerNodes=this._focusRegions=null,
this.inherited(arguments)}});return c.registerPlugin(u),u});