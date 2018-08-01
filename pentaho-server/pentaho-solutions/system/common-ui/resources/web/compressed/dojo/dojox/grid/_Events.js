define(["dojo/keys","dojo/dom-class","dojo/_base/declare","dojo/_base/event","dojo/_base/sniff"],function(e,o,t,i,s){
return t("dojox.grid._Events",null,{cellOverClass:"dojoxGridCellOver",onKeyEvent:function(e){
this.dispatchKeyEvent(e)},onContentEvent:function(e){this.dispatchContentEvent(e);
},onHeaderEvent:function(e){this.dispatchHeaderEvent(e)},onStyleRow:function(e){var o=e;
o.customClasses+=(o.odd?" dojoxGridRowOdd":"")+(o.selected?" dojoxGridRowSelected":"")+(o.over?" dojoxGridRowOver":""),
this.focus.styleRow(e),this.edit.styleRow(e)},onKeyDown:function(o){if(!o.altKey&&!o.metaKey){
var t;switch(o.keyCode){case e.ESCAPE:this.edit.cancel();break;case e.ENTER:if(!this.edit.isEditing()){
if(t=this.focus.getHeaderIndex(),t>=0){this.setSortIndex(t);break}this.selection.clickSelect(this.focus.rowIndex,dojo.isCopyKey(o),o.shiftKey),
i.stop(o)}if(!o.shiftKey){var s=this.edit.isEditing();this.edit.apply(),s||this.edit.setEditCell(this.focus.cell,this.focus.rowIndex);
}if(!this.edit.isEditing()){var n=this.focus.focusView||this.views.views[0];n.content.decorateEvent(o),
this.onRowClick(o),i.stop(o)}break;case e.SPACE:if(!this.edit.isEditing()){if(t=this.focus.getHeaderIndex(),
t>=0){this.setSortIndex(t);break}this.selection.clickSelect(this.focus.rowIndex,dojo.isCopyKey(o),o.shiftKey),
i.stop(o)}break;case e.TAB:this.focus[o.shiftKey?"previousKey":"nextKey"](o);break;
case e.LEFT_ARROW:case e.RIGHT_ARROW:if(!this.edit.isEditing()){var l=o.keyCode;if(i.stop(o),
t=this.focus.getHeaderIndex(),t>=0&&o.shiftKey&&o.ctrlKey)this.focus.colSizeAdjust(o,t,5*(l==e.LEFT_ARROW?-1:1));else{
var c=l==e.LEFT_ARROW?1:-1;this.isLeftToRight()&&(c*=-1),this.focus.move(0,c)}}break;
case e.UP_ARROW:this.edit.isEditing()||0===this.focus.rowIndex||(i.stop(o),this.focus.move(-1,0));
break;case e.DOWN_ARROW:this.edit.isEditing()||this.focus.rowIndex+1==this.rowCount||(i.stop(o),
this.focus.move(1,0));break;case e.PAGE_UP:this.edit.isEditing()||0===this.focus.rowIndex||(i.stop(o),
this.focus.rowIndex!=this.scroller.firstVisibleRow+1?this.focus.move(this.scroller.firstVisibleRow-this.focus.rowIndex,0):(this.setScrollTop(this.scroller.findScrollTop(this.focus.rowIndex-1)),
this.focus.move(this.scroller.firstVisibleRow-this.scroller.lastVisibleRow+1,0)));
break;case e.PAGE_DOWN:this.edit.isEditing()||this.focus.rowIndex+1==this.rowCount||(i.stop(o),
this.focus.rowIndex!=this.scroller.lastVisibleRow-1?this.focus.move(this.scroller.lastVisibleRow-this.focus.rowIndex-1,0):(this.setScrollTop(this.scroller.findScrollTop(this.focus.rowIndex+1)),
this.focus.move(this.scroller.lastVisibleRow-this.scroller.firstVisibleRow-1,0)));
}}},onMouseOver:function(e){-1==e.rowIndex?this.onHeaderCellMouseOver(e):this.onCellMouseOver(e);
},onMouseOut:function(e){-1==e.rowIndex?this.onHeaderCellMouseOut(e):this.onCellMouseOut(e);
},onMouseDown:function(e){-1==e.rowIndex?this.onHeaderCellMouseDown(e):this.onCellMouseDown(e);
},onMouseOverRow:function(e){this.rows.isOver(e.rowIndex)||(this.rows.setOverRow(e.rowIndex),
-1==e.rowIndex?this.onHeaderMouseOver(e):this.onRowMouseOver(e))},onMouseOutRow:function(e){
this.rows.isOver(-1)?this.onHeaderMouseOut(e):this.rows.isOver(-2)||(this.rows.setOverRow(-2),
this.onRowMouseOut(e))},onMouseDownRow:function(e){-1!=e.rowIndex&&this.onRowMouseDown(e);
},onCellMouseOver:function(e){e.cellNode&&o.add(e.cellNode,this.cellOverClass)},onCellMouseOut:function(e){
e.cellNode&&o.remove(e.cellNode,this.cellOverClass)},onCellMouseDown:function(e){},
onCellClick:function(e){this._click[0]=this._click[1],this._click[1]=e,this.edit.isEditCell(e.rowIndex,e.cellIndex)||this.focus.setFocusCell(e.cell,e.rowIndex),
this._click.length>1&&null==this._click[0]&&this._click.shift(),this.onRowClick(e);
},onCellDblClick:function(e){var o;o=this._click.length>1&&s("ie")?this._click[1]:this._click.length>1&&this._click[0].rowIndex!=this._click[1].rowIndex?this._click[0]:e,
this.focus.setFocusCell(o.cell,o.rowIndex),this.edit.setEditCell(o.cell,o.rowIndex),
this.onRowDblClick(e)},onCellContextMenu:function(e){this.onRowContextMenu(e)},onCellFocus:function(e,o){
this.edit.cellFocus(e,o)},onRowClick:function(e){this.edit.rowClick(e),this.selection.clickSelectEvent(e);
},onRowDblClick:function(e){},onRowMouseOver:function(e){},onRowMouseOut:function(e){},
onRowMouseDown:function(e){},onRowContextMenu:function(e){i.stop(e)},onHeaderMouseOver:function(e){},
onHeaderMouseOut:function(e){},onHeaderCellMouseOver:function(e){e.cellNode&&o.add(e.cellNode,this.cellOverClass);
},onHeaderCellMouseOut:function(e){e.cellNode&&o.remove(e.cellNode,this.cellOverClass);
},onHeaderCellMouseDown:function(e){},onHeaderClick:function(e){},onHeaderCellClick:function(e){
this.setSortIndex(e.cell.index),this.onHeaderClick(e)},onHeaderDblClick:function(e){},
onHeaderCellDblClick:function(e){this.onHeaderDblClick(e)},onHeaderCellContextMenu:function(e){
this.onHeaderContextMenu(e)},onHeaderContextMenu:function(e){this.headerMenu||i.stop(e);
},onStartEdit:function(e,o){},onApplyCellEdit:function(e,o,t){},onCancelEdit:function(e){},
onApplyEdit:function(e){},onCanSelect:function(e){return!0},onCanDeselect:function(e){
return!0},onSelected:function(e){this.updateRowStyles(e)},onDeselected:function(e){
this.updateRowStyles(e)},onSelectionChanged:function(){}})});