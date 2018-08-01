define(["dojo/_base/kernel","dojo/_base/declare","dojo/keys","dojo/_base/html","dojo/_base/event","dojox/grid/_Events"],function(e,o,s,t,l,n){
return o("dojox.grid.enhanced._Events",null,{_events:null,headerCellActiveClass:"dojoxGridHeaderActive",
cellActiveClass:"dojoxGridCellActive",rowActiveClass:"dojoxGridRowActive",constructor:function(e){
this._events=new n,e.mixin(e,this)},dokeyup:function(e){this.focus.currentArea().keyup(e);
},onKeyDown:function(e){if(!e.altKey&&!e.metaKey){var o=this.focus,l=this.edit.isEditing();
switch(e.keyCode){case s.TAB:if(e.ctrlKey)return;o.tab(e.shiftKey?-1:1,e);break;case s.UP_ARROW:
case s.DOWN_ARROW:if(l)return;o.currentArea().move(e.keyCode==s.UP_ARROW?-1:1,0,e);
break;case s.LEFT_ARROW:case s.RIGHT_ARROW:if(l)return;var n=e.keyCode==s.LEFT_ARROW?1:-1;
t._isBodyLtr()&&(n*=-1),o.currentArea().move(0,n,e);break;case s.F10:this.menus&&e.shiftKey&&this.onRowContextMenu(e);
break;default:o.currentArea().keydown(e)}}},domouseup:function(e){e.cellNode?this.onMouseUp(e):this.onRowSelectorMouseUp(e);
},domousedown:function(e){e.cellNode||this.onRowSelectorMouseDown(e)},onMouseUp:function(e){
this[-1==e.rowIndex?"onHeaderCellMouseUp":"onCellMouseUp"](e)},onCellMouseDown:function(e){
t.addClass(e.cellNode,this.cellActiveClass),t.addClass(e.rowNode,this.rowActiveClass);
},onCellMouseUp:function(e){t.removeClass(e.cellNode,this.cellActiveClass),t.removeClass(e.rowNode,this.rowActiveClass);
},onCellClick:function(e){this._events.onCellClick.call(this,e),this.focus.contentMouseEvent(e);
},onCellDblClick:function(e){this.pluginMgr.isFixedCell(e.cell)||(!(this._click.length>1)||this._click[0]&&this._click[1]||(this._click[0]=this._click[1]=e),
this._events.onCellDblClick.call(this,e))},onRowClick:function(e){this.edit.rowClick(e),
e.cell&&this.plugin("indirectSelection")||this.selection.clickSelectEvent(e)},onRowContextMenu:function(e){
!this.edit.isEditing()&&this.menus&&this.showMenu(e)},onSelectedRegionContextMenu:function(e){
this.selectedRegionMenu&&(this.selectedRegionMenu._openMyself({target:e.target,coords:e.keyCode!==s.F10&&"pageX"in e?{
x:e.pageX,y:e.pageY}:null}),l.stop(e))},onHeaderCellMouseOut:function(e){e.cellNode&&(t.removeClass(e.cellNode,this.cellOverClass),
t.removeClass(e.cellNode,this.headerCellActiveClass))},onHeaderCellMouseDown:function(e){
e.cellNode&&t.addClass(e.cellNode,this.headerCellActiveClass)},onHeaderCellMouseUp:function(e){
e.cellNode&&t.removeClass(e.cellNode,this.headerCellActiveClass)},onHeaderCellClick:function(e){
this.focus.currentArea("header"),e.cell.isRowSelector||this._events.onHeaderCellClick.call(this,e),
this.focus.headerMouseEvent(e)},onRowSelectorMouseDown:function(e){this.focus.focusArea("rowHeader",e);
},onRowSelectorMouseUp:function(e){},onMouseUpRow:function(e){-1!=e.rowIndex&&this.onRowMouseUp(e);
},onRowMouseUp:function(e){}})});