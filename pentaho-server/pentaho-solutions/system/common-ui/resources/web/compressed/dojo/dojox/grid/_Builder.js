define(["../main","dojo/_base/array","dojo/_base/lang","dojo/_base/window","dojo/_base/event","dojo/_base/sniff","dojo/_base/connect","dojo/dnd/Moveable","dojox/html/metrics","./util","dojo/_base/html","dojo/dom-geometry"],function(e,t,i,o,r,s,n,d,l,a,h,u){
var c=e.grid,f=function(e){return e.cellIndex>=0?e.cellIndex:t.indexOf(e.parentNode.cells,e);
},v=function(e){return e.rowIndex>=0?e.rowIndex:t.indexOf(e.parentNode.childNodes,e);
},p=function(e,t){return e&&((e.rows||0)[t]||e.childNodes[t])},g=function(e){for(var t=e;t&&"TABLE"!=t.tagName;t=t.parentNode);
return t},w=function(e,t){for(var i=e;i&&t(i);i=i.parentNode);return i},C=function(e){
var t=e.toUpperCase();return function(e){return e.tagName!=t}},x=a.rowIndexTag,N=a.gridViewTag,m=c._Builder=i.extend(function(e){
e&&(this.view=e,this.grid=e.grid)},{view:null,_table:'<table class="dojoxGridRowTable" border="0" cellspacing="0" cellpadding="0" role="presentation"',
getTableArray:function(){var e=[this._table];return this.view.viewWidth&&e.push([' style="width:',this.view.viewWidth,';"'].join("")),
e.push(">"),e},generateCellMarkup:function(e,t,i,o){var r,s=[];if(o){var n=e.index!=e.grid.getSortIndex()?"":e.grid.sortInfo>0?'aria-sort="ascending"':'aria-sort="descending"';
e.id||(e.id=this.grid.id+"Hdr"+e.index),r=['<th tabIndex="-1" aria-readonly="true" role="columnheader"',n,' id="',e.id,'"'];
}else{var d=this.grid.editable&&!e.editable?'aria-readonly="true"':"";r=['<td tabIndex="-1" role="gridcell"',d];
}return e.colSpan&&r.push(' colspan="',e.colSpan,'"'),e.rowSpan&&r.push(' rowspan="',e.rowSpan,'"'),
r.push(' class="dojoxGridCell '),e.classes&&r.push(e.classes," "),i&&r.push(i," "),
s.push(r.join("")),s.push(""),r=['" idx="',e.index,'" style="'],t&&";"!=t[t.length-1]&&(t+=";"),
r.push(e.styles,t||"",e.hidden?"display:none;":""),e.unitWidth&&r.push("width:",e.unitWidth,";"),
s.push(r.join("")),s.push(""),r=['"'],e.attrs&&r.push(" ",e.attrs),r.push(">"),s.push(r.join("")),
s.push(""),s.push(o?"</th>":"</td>"),s},isCellNode:function(e){return Boolean(e&&e!=o.doc&&h.attr(e,"idx"));
},getCellNodeIndex:function(e){return e?Number(h.attr(e,"idx")):-1},getCellNode:function(e,t){
for(var i,o=0;(i=p(e.firstChild,o))&&i.cells;o++)for(var r,s=0;r=i.cells[s];s++)if(this.getCellNodeIndex(r)==t)return r;
return null},findCellTarget:function(e,t){for(var i=e;i&&(!this.isCellNode(i)||i.offsetParent&&N in i.offsetParent.parentNode&&i.offsetParent.parentNode[N]!=this.view.id)&&i!=t;)i=i.parentNode;
return i!=t?i:null},baseDecorateEvent:function(e){e.dispatch="do"+e.type,e.grid=this.grid,
e.sourceView=this.view,e.cellNode=this.findCellTarget(e.target,e.rowNode),e.cellIndex=this.getCellNodeIndex(e.cellNode),
e.cell=e.cellIndex>=0?this.grid.getCell(e.cellIndex):null},findTarget:function(e,t){
for(var i=e;i&&i!=this.domNode&&(!(t in i)||N in i&&i[N]!=this.view.id);)i=i.parentNode;
return i!=this.domNode?i:null},findRowTarget:function(e){return this.findTarget(e,x);
},isIntraNodeEvent:function(e){try{return e.cellNode&&e.relatedTarget&&h.isDescendant(e.relatedTarget,e.cellNode);
}catch(t){return!1}},isIntraRowEvent:function(e){try{var t=e.relatedTarget&&this.findRowTarget(e.relatedTarget);
return!t&&-1==e.rowIndex||t&&e.rowIndex==t.gridRowIndex}catch(i){return!1}},dispatchEvent:function(e){
return e.dispatch in this?this[e.dispatch](e):!1},domouseover:function(e){e.cellNode&&e.cellNode!=this.lastOverCellNode&&(this.lastOverCellNode=e.cellNode,
this.grid.onMouseOver(e)),this.grid.onMouseOverRow(e)},domouseout:function(e){e.cellNode&&e.cellNode==this.lastOverCellNode&&!this.isIntraNodeEvent(e,this.lastOverCellNode)&&(this.lastOverCellNode=null,
this.grid.onMouseOut(e),this.isIntraRowEvent(e)||this.grid.onMouseOutRow(e))},domousedown:function(e){
e.cellNode&&this.grid.onMouseDown(e),this.grid.onMouseDownRow(e)},_getTextDirStyle:function(e,t,i){
return""}}),R=c._ContentBuilder=i.extend(function(e){m.call(this,e)},m.prototype,{
update:function(){this.prepareHtml()},prepareHtml:function(){for(var e,t=this.grid.get,i=this.view.structure.cells,o=0;e=i[o];o++)for(var r,s=0;r=e[s];s++)r.get=r.get||void 0==r.value&&t,
r.markup=this.generateCellMarkup(r,r.cellStyles,r.cellClasses,!1),!this.grid.editable&&r.editable&&(this.grid.editable=!0);
},generateHtml:function(e,t){var i,o=this.getTableArray(),r=this.view,s=r.structure.cells,n=this.grid.getItem(t);
a.fire(this.view,"onBeforeRow",[t,s]);for(var d,l=0;d=s[l];l++)if(!d.hidden&&!d.header){
o.push(d.invisible?'<tr class="dojoxGridInvisible">':"<tr>");for(var h,u,c,f,v=0;h=d[v];v++)u=h.markup,
c=h.customClasses=[],f=h.customStyles=[],u[5]=h.format(t,n),u[1]=c.join(" "),u[3]=f.join(";"),
i=h.textDir||this.grid.textDir,i&&(u[3]+=this._getTextDirStyle(i,h,t)),o.push.apply(o,u);
o.push("</tr>")}return o.push("</table>"),o.join("")},decorateEvent:function(e){return e.rowNode=this.findRowTarget(e.target),
e.rowNode?(e.rowIndex=e.rowNode[x],this.baseDecorateEvent(e),e.cell=this.grid.getCell(e.cellIndex),
!0):!1}}),b=c._HeaderBuilder=i.extend(function(e){this.moveable=null,m.call(this,e);
},m.prototype,{_skipBogusClicks:!1,overResizeWidth:4,minColWidth:1,update:function(){
this.tableMap?this.tableMap.mapRows(this.view.structure.cells):this.tableMap=new c._TableMap(this.view.structure.cells);
},generateHtml:function(e,t){var i,o=this.getTableArray(),r=this.view.structure.cells;
a.fire(this.view,"onBeforeRow",[-1,r]);for(var s,n=0;s=r[n];n++)if(!s.hidden){o.push(s.invisible?'<tr class="dojoxGridInvisible">':"<tr>");
for(var d,l,h=0;d=s[h];h++)d.customClasses=[],d.customStyles=[],this.view.simpleStructure&&(d.draggable&&(d.headerClasses?-1==d.headerClasses.indexOf("dojoDndItem")&&(d.headerClasses+=" dojoDndItem"):d.headerClasses="dojoDndItem"),
d.attrs?-1==d.attrs.indexOf("dndType='gridColumn_")&&(d.attrs+=" dndType='gridColumn_"+this.grid.id+"'"):d.attrs="dndType='gridColumn_"+this.grid.id+"'"),
l=this.generateCellMarkup(d,d.headerStyles,d.headerClasses,!0),l[5]=void 0!=t?t:e(d),
l[3]=d.customStyles.join(";"),i=d.textDir||this.grid.textDir,i&&(l[3]+=this._getTextDirStyle(i,d,t)),
l[1]=d.customClasses.join(" "),o.push(l.join(""));o.push("</tr>")}return o.push("</table>"),
o.join("")},getCellX:function(e){var t,i,o;return t=w(e.target,C("th")),t?(o=u.position(t),
i=e.clientX-o.x):i=e.layerX,i},decorateEvent:function(e){return this.baseDecorateEvent(e),
e.rowIndex=-1,e.cellX=this.getCellX(e),!0},prepareResize:function(e,t){do{var i=e.cellIndex;
e.cellNode=i?e.cellNode.parentNode.cells[i+t]:null,e.cellIndex=e.cellNode?this.getCellNodeIndex(e.cellNode):-1;
}while(e.cellNode&&"none"==e.cellNode.style.display);return Boolean(e.cellNode)},
canResize:function(e){if(!e.cellNode||e.cellNode.colSpan>1)return!1;var t=this.grid.getCell(e.cellIndex);
return!t.noresize&&t.canResize()},overLeftResizeArea:function(e){if(h.hasClass(o.body(),"dojoDndMove"))return!1;
if(s("ie")){var t=e.target;if(h.hasClass(t,"dojoxGridArrowButtonNode")||h.hasClass(t,"dojoxGridArrowButtonChar")||h.hasClass(t,"dojoxGridColCaption"))return!1;
}if(this.grid.isLeftToRight())return e.cellIndex>0&&e.cellX>0&&e.cellX<this.overResizeWidth&&this.prepareResize(e,-1);
var i=e.cellNode&&e.cellX>0&&e.cellX<this.overResizeWidth;return i},overRightResizeArea:function(e){
if(h.hasClass(o.body(),"dojoDndMove"))return!1;if(s("ie")){var t=e.target;if(h.hasClass(t,"dojoxGridArrowButtonNode")||h.hasClass(t,"dojoxGridArrowButtonChar")||h.hasClass(t,"dojoxGridColCaption"))return!1;
}return this.grid.isLeftToRight()?e.cellNode&&e.cellX>=e.cellNode.offsetWidth-this.overResizeWidth:e.cellIndex>0&&e.cellX>=e.cellNode.offsetWidth-this.overResizeWidth&&this.prepareResize(e,-1);
},domousemove:function(e){if(!this.moveable){var t=this.overRightResizeArea(e)?"dojoxGridColResize":this.overLeftResizeArea(e)?"dojoxGridColResize":"";
t&&!this.canResize(e)&&(t="dojoxGridColNoResize"),h.toggleClass(e.sourceView.headerNode,"dojoxGridColNoResize","dojoxGridColNoResize"==t),
h.toggleClass(e.sourceView.headerNode,"dojoxGridColResize","dojoxGridColResize"==t),
t&&r.stop(e)}},domousedown:function(e){this.moveable||((this.overRightResizeArea(e)||this.overLeftResizeArea(e))&&this.canResize(e)?this.beginColumnResize(e):(this.grid.onMouseDown(e),
this.grid.onMouseOverRow(e)))},doclick:function(e){return this._skipBogusClicks?(r.stop(e),
!0):!1},colResizeSetup:function(e,t){var i=h.contentBox(e.sourceView.headerNode);if(t){
this.lineDiv=document.createElement("div");var r=h.position(e.sourceView.headerNode,!0),n=h.contentBox(e.sourceView.domNode),d=e.pageX;
!this.grid.isLeftToRight()&&s("ie")<8&&(d-=l.getScrollbar().w),h.style(this.lineDiv,{
top:r.y+"px",left:d+"px",height:n.h+i.h+"px"}),h.addClass(this.lineDiv,"dojoxGridResizeColLine"),
this.lineDiv._origLeft=d,o.body().appendChild(this.lineDiv)}for(var a,u=[],c=this.tableMap.findOverlappingNodes(e.cellNode),f=0;a=c[f];f++)u.push({
node:a,index:this.getCellNodeIndex(a),width:a.offsetWidth});for(var v,p=e.sourceView,g=this.grid.isLeftToRight()?1:-1,w=e.grid.views.views,C=[],x=p.idx+g;v=w[x];x+=g)C.push({
node:v.headerNode,left:window.parseInt(v.headerNode.style.left)});var N=p.headerContentNode.firstChild,m={
scrollLeft:e.sourceView.headerNode.scrollLeft,view:p,node:e.cellNode,index:e.cellIndex,
w:h.contentBox(e.cellNode).w,vw:i.w,table:N,tw:h.contentBox(N).w,spanners:u,followers:C
};return m},beginColumnResize:function(e){this.moverDiv=document.createElement("div"),
h.style(this.moverDiv,{position:"absolute",left:0}),o.body().appendChild(this.moverDiv),
h.addClass(this.grid.domNode,"dojoxGridColumnResizing");var t=this.moveable=new d(this.moverDiv),r=this.colResizeSetup(e,!0);
t.onMove=i.hitch(this,"doResizeColumn",r),n.connect(t,"onMoveStop",i.hitch(this,function(){
this.endResizeColumn(r),r.node.releaseCapture&&r.node.releaseCapture(),this.moveable.destroy(),
delete this.moveable,this.moveable=null,h.removeClass(this.grid.domNode,"dojoxGridColumnResizing");
})),e.cellNode.setCapture&&e.cellNode.setCapture(),t.onMouseDown(e)},doResizeColumn:function(e,t,i){
var o=i.l,r={deltaX:o,w:e.w+(this.grid.isLeftToRight()?o:-o),vw:e.vw+o,tw:e.tw+o};
this.dragRecord={inDrag:e,mover:t,leftTop:i},r.w>=this.minColWidth&&(t?h.style(this.lineDiv,"left",this.lineDiv._origLeft+r.deltaX+"px"):this.doResizeNow(e,r));
},endResizeColumn:function(e){if(this.dragRecord){var t=this.dragRecord.leftTop,i=this.grid.isLeftToRight()?t.l:-t.l;
i+=Math.max(e.w+i,this.minColWidth)-(e.w+i),s("webkit")&&e.spanners.length&&(i+=h._getPadBorderExtents(e.spanners[0].node).w);
var o={deltaX:i,w:e.w+i,vw:e.vw+i,tw:e.tw+i};this.doResizeNow(e,o),delete this.dragRecord;
}h.destroy(this.lineDiv),h.destroy(this.moverDiv),h.destroy(this.moverDiv),delete this.moverDiv,
this._skipBogusClicks=!0,e.view.update(),this._skipBogusClicks=!1,this.grid.onResizeColumn(e.index);
},doResizeNow:function(e,t){if(e.view.convertColPctToFixed(),e.view.flexCells&&!e.view.testFlexCells()){
var i=g(e.node);i&&(i.style.width="")}var o,r,n,d,l;for(o=0;r=e.spanners[o];o++)n=r.width+t.deltaX,
n>0&&(r.node.style.width=n+"px",e.view.setColWidth(r.index,n));if(this.grid.isLeftToRight()||!s("ie"))for(o=0;d=e.followers[o];o++)l=d.left+t.deltaX,
d.node.style.left=l+"px";e.node.style.width=t.w+"px",e.view.setColWidth(e.index,t.w),
e.view.headerNode.style.width=t.vw+"px",e.view.setColumnsWidth(t.tw),this.grid.isLeftToRight()||(e.view.headerNode.scrollLeft=e.scrollLeft+t.deltaX);
}});return c._TableMap=i.extend(function(e){this.mapRows(e)},{map:null,mapRows:function(e){
var t=e.length;if(t){this.map=[];for(var i,o=0;i=e[o];o++)this.map[o]=[];for(var r=0;i=e[r];r++)for(var s,n,d,l=0,a=0;s=i[l];l++){
for(;this.map[r][a];)a++;this.map[r][a]={c:l,r:r},d=s.rowSpan||1,n=s.colSpan||1;for(var h=0;d>h;h++)for(var u=0;n>u;u++)this.map[r+h][a+u]=this.map[r][a];
a+=n}}},dumpMap:function(){for(var e,t=0,i="";e=this.map[t];t++,i="")for(var o,r=0;o=e[r];r++)i+=o.r+","+o.c+"   ";
},getMapCoords:function(e,t){for(var i,o=0;i=this.map[o];o++)for(var r,s=0;r=i[s];s++)if(r.c==t&&r.r==e)return{
j:o,i:s};return{j:-1,i:-1}},getNode:function(e,t,i){var o=e&&e.rows[t];return o&&o.cells[i];
},_findOverlappingNodes:function(e,t,i){for(var o,r=[],s=this.getMapCoords(t,i),n=0;o=this.map[n];n++)if(n!=s.j){
var d=o[s.i],l=d?this.getNode(e,d.r,d.c):null;l&&r.push(l)}return r},findOverlappingNodes:function(e){
return this._findOverlappingNodes(g(e),v(e.parentNode),f(e))}}),{_Builder:m,_HeaderBuilder:b,
_ContentBuilder:R}});