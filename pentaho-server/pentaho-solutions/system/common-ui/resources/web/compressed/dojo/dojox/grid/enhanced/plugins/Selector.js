define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/event","dojo/keys","dojo/query","dojo/_base/html","dojo/_base/window","dijit/focus","../../_RowSelector","../_Plugin","../../EnhancedGrid","../../cells/_base","./AutoScroll"],function(e,t,o,i,l,n,c,s,r,a,h,d,_){
var u=0,f=1,g=2,w={col:"row",row:"col"},S=function(e,t,o,i,l){return"cell"!==e?(t=t[e],
o=o[e],i=i[e],"number"!=typeof t||"number"!=typeof o||"number"!=typeof i?!1:l?t>=o&&i>t||t>i&&o>=t:t>=o&&i>=t||t>=i&&o>=t):S("col",t,o,i,l)&&S("row",t,o,i,l);
},v=function(e,t,o){try{if(t&&o)switch(e){case"col":case"row":return!(t[e]!=o[e]||"number"!=typeof t[e]||w[e]in t||w[e]in o);
case"cell":return t.col==o.col&&t.row==o.row&&"number"==typeof t.col&&"number"==typeof t.row;
}}catch(i){}return!1},p=function(e){try{e&&e.preventDefault&&l.stop(e)}catch(t){}
},x=function(e,t,o){switch(e){case"col":return{col:"undefined"==typeof o?t:o,except:[]
};case"row":return{row:t,except:[]};case"cell":return{row:t,col:o}}return null},E=o("dojox.grid.enhanced.plugins.Selector",d,{
name:"selector",constructor:function(e,t){this.grid=e,this._config={row:g,col:g,cell:g
},this.noClear=t&&t.noClear,this.setupConfig(t),"single"===e.selectionMode&&(this._config.row=f),
this._enabled=!0,this._selecting={},this._selected={col:[],row:[],cell:[]},this._startPoint={},
this._currentPoint={},this._lastAnchorPoint={},this._lastEndPoint={},this._lastSelectedAnchorPoint={},
this._lastSelectedEndPoint={},this._keyboardSelect={},this._lastType=null,this._selectedRowModified={},
this._hacks(),this._initEvents(),this._initAreas(),this._mixinGrid()},destroy:function(){
this.inherited(arguments)},setupConfig:function(e){if(e&&t.isObject(e)){var o=["row","col","cell"];
for(var l in e)i.indexOf(o,l)>=0&&(e[l]&&"disabled"!=e[l]?"single"==e[l]?this._config[l]=f:this._config[l]=g:this._config[l]=u);
var n=["none","single","extended"][this._config.row];this.grid.selection.setMode(n);
}},isSelected:function(e,t,o){return this._isSelected(e,x(e,t,o))},toggleSelect:function(e,t,o){
this._startSelect(e,x(e,t,o),this._config[e]===g,!1,!1,!this.isSelected(e,t,o)),this._endSelect(e);
},select:function(e,t,o){this.isSelected(e,t,o)||this.toggleSelect(e,t,o)},deselect:function(e,t,o){
this.isSelected(e,t,o)&&this.toggleSelect(e,t,o)},selectRange:function(e,t,o,i){this.grid._selectingRange=!0;
var l="cell"==e?x(e,t.row,t.col):x(e,t),n="cell"==e?x(e,o.row,o.col):x(e,o);this._startSelect(e,l,!1,!1,!1,i),
this._highlight(e,n,void 0===i?!0:i),this._endSelect(e),this.grid._selectingRange=!1;
},clear:function(e){this._clearSelection(e||"all")},isSelecting:function(e){return"undefined"==typeof e?this._selecting.col||this._selecting.row||this._selecting.cell:this._selecting[e];
},selectEnabled:function(e){return"undefined"==typeof e||this.isSelecting()||(this._enabled=!!e),
this._enabled},getSelected:function(e,t){switch(e){case"cell":return i.map(this._selected[e],function(e){
return e});case"col":case"row":return i.map(t?this._selected[e]:i.filter(this._selected[e],function(e){
return 0===e.except.length}),function(o){return t?o:o[e]})}return[]},getSelectedCount:function(e,t){
switch(e){case"cell":return this._selected[e].length;case"col":case"row":return(t?this._selected[e]:i.filter(this._selected[e],function(e){
return 0===e.except.length})).length}return 0},getSelectedType:function(){var e=this._selected;
return["","cell","row","row|cell","col","col|cell","col|row","col|row|cell"][!!e.cell.length|!!e.row.length<<1|!!e.col.length<<2];
},getLastSelectedRange:function(e){return this._lastAnchorPoint[e]?{start:this._lastAnchorPoint[e],
end:this._lastEndPoint[e]}:null},_hacks:function(){var e=this.grid,o=function(t){
t.cellNode&&e.onMouseUp(t),e.onMouseUpRow(t)},l=t.hitch(e,"onMouseUp"),n=t.hitch(e,"onMouseDown"),c=function(e){
e.cellNode.style.border="solid 1px"};i.forEach(e.views.views,function(e){e.content.domouseup=o,
e.header.domouseup=l,"dojox.grid._RowSelector"==e.declaredClass&&(e.domousedown=n,
e.domouseup=l,e.dofocus=c)}),e.selection.clickSelect=function(){},this._oldDeselectAll=e.selection.deselectAll;
var r=this;e.selection.selectRange=function(t,o){r.selectRange("row",t,o,!0),e.selection.preserver&&e.selection.preserver._updateMapping(!0,!0,!1,t,o),
e.selection.onChanged()},e.selection.deselectRange=function(t,o){r.selectRange("row",t,o,!1),
e.selection.preserver&&e.selection.preserver._updateMapping(!0,!1,!1,t,o),e.selection.onChanged();
},e.selection.deselectAll=function(){e._selectingRange=!0,r._oldDeselectAll.apply(e.selection,arguments),
r._clearSelection("all"),e._selectingRange=!1,e.selection.preserver&&e.selection.preserver._updateMapping(!0,!1,!0),
e.selection.onChanged()};var a=e.views.views[0];a instanceof h&&(a.doStyleRowNode=function(t,o){
s.removeClass(o,"dojoxGridRow"),s.addClass(o,"dojoxGridRowbar"),s.addClass(o,"dojoxGridNonNormalizedCell"),
s.toggleClass(o,"dojoxGridRowbarOver",e.rows.isOver(t)),s.toggleClass(o,"dojoxGridRowbarSelected",!!e.selection.isSelected(t));
}),this.connect(e,"updateRow",function(t){i.forEach(e.layout.cells,function(e){this.isSelected("cell",t,e.index)&&this._highlightNode(e.getNode(t),!0);
},this)})},_mixinGrid:function(){var e=this.grid;e.setupSelectorConfig=t.hitch(this,this.setupConfig),
e.onStartSelect=function(){},e.onEndSelect=function(){},e.onStartDeselect=function(){},
e.onEndDeselect=function(){},e.onSelectCleared=function(){}},_initEvents:function(){
var e=this.grid,o=this,i=t.partial,l=function(e,t){if("row"===e&&(o._isUsingRowSelector=!0),
o.selectEnabled()&&o._config[e]&&2!=t.button){(o._keyboardSelect.col||o._keyboardSelect.row||o._keyboardSelect.cell)&&(o._endSelect("all"),
o._keyboardSelect.col=o._keyboardSelect.row=o._keyboardSelect.cell=0),o._usingKeyboard&&(o._usingKeyboard=!1);
var i=x(e,t.rowIndex,t.cell&&t.cell.index);o._startSelect(e,i,t.ctrlKey,t.shiftKey);
}},n=t.hitch(this,"_endSelect");this.connect(e,"onHeaderCellMouseDown",i(l,"col")),
this.connect(e,"onHeaderCellMouseUp",i(n,"col")),this.connect(e,"onRowSelectorMouseDown",i(l,"row")),
this.connect(e,"onRowSelectorMouseUp",i(n,"row")),this.connect(e,"onCellMouseDown",function(t){
t.cell&&t.cell.isRowSelector||(e.singleClickEdit&&(o._singleClickEdit=!0,e.singleClickEdit=!1),
l(o._config.cell==u?"row":"cell",t))}),this.connect(e,"onCellMouseUp",function(t){
o._singleClickEdit&&(delete o._singleClickEdit,e.singleClickEdit=!0),n("all",t)}),
this.connect(e,"onCellMouseOver",function(e){"row"!=o._curType&&o._selecting[o._curType]&&o._config[o._curType]==g&&(o._highlight("col",x("col",e.cell.index),o._toSelect),
o._keyboardSelect.cell||o._highlight("cell",x("cell",e.rowIndex,e.cell.index),o._toSelect));
}),this.connect(e,"onHeaderCellMouseOver",function(e){o._selecting.col&&o._config.col==g&&o._highlight("col",x("col",e.cell.index),o._toSelect);
}),this.connect(e,"onRowMouseOver",function(e){o._selecting.row&&o._config.row==g&&o._highlight("row",x("row",e.rowIndex),o._toSelect);
}),this.connect(e,"onSelectedById","_onSelectedById"),this.connect(e,"_onFetchComplete",function(){
e._notRefreshSelection||this._refreshSelected(!0)}),this.connect(e.scroller,"buildPage",function(){
e._notRefreshSelection||this._refreshSelected(!0)}),this.connect(r.doc,"onmouseup",i(n,"all")),
this.connect(e,"onEndAutoScroll",function(e,t,i,l){var n,c,s=o._selecting.cell,r=t?1:-1;
e&&(s||o._selecting.row)?(n=s?"cell":"row",c=o._currentPoint[n],o._highlight(n,x(n,c.row+r,c.col),o._toSelect)):e||!s&&!o._selecting.col||(n=s?"cell":"col",
c=o._currentPoint[n],o._highlight(n,x(n,c.row,l),o._toSelect))}),this.subscribe("dojox/grid/rearrange/move/"+e.id,"_onInternalRearrange"),
this.subscribe("dojox/grid/rearrange/copy/"+e.id,"_onInternalRearrange"),this.subscribe("dojox/grid/rearrange/change/"+e.id,"_onExternalChange"),
this.subscribe("dojox/grid/rearrange/insert/"+e.id,"_onExternalChange"),this.subscribe("dojox/grid/rearrange/remove/"+e.id,"clear"),
this.connect(e,"onSelected",function(e){this._selectedRowModified&&this._isUsingRowSelector?delete this._selectedRowModified:this.grid._selectingRange||this.select("row",e);
}),this.connect(e,"onDeselected",function(e){this._selectedRowModified&&this._isUsingRowSelector?delete this._selectedRowModified:this.grid._selectingRange||this.deselect("row",e);
})},_onSelectedById:function(e,t,o){if(!this.grid._noInternalMapping){var l=[this._lastAnchorPoint.row,this._lastEndPoint.row,this._lastSelectedAnchorPoint.row,this._lastSelectedEndPoint.row];
l=l.concat(this._selected.row);var n=!1;i.forEach(l,function(o){o&&(o.id===e?(n=!0,
o.row=t):o.row===t&&o.id&&(o.row=-1))}),!n&&o&&i.some(this._selected.row,function(o){
return!o||o.id||o.except.length?!1:(o.id=e,o.row=t,!0)}),n=!1,l=[this._lastAnchorPoint.cell,this._lastEndPoint.cell,this._lastSelectedAnchorPoint.cell,this._lastSelectedEndPoint.cell],
l=l.concat(this._selected.cell),i.forEach(l,function(o){o&&(o.id===e?(n=!0,o.row=t):o.row===t&&o.id&&(o.row=-1));
})}},onSetStore:function(){this._clearSelection("all")},_onInternalRearrange:function(e,t){
try{this._refresh("col",!1),i.forEach(this._selected.row,function(e){i.forEach(this.grid.layout.cells,function(t){
this._highlightNode(t.getNode(e.row),!1)},this)},this),c(".dojoxGridRowSelectorSelected").forEach(function(e){
s.removeClass(e,"dojoxGridRowSelectorSelected"),s.removeClass(e,"dojoxGridRowSelectorSelectedUp"),
s.removeClass(e,"dojoxGridRowSelectorSelectedDown")});var o=function(e){e&&delete e.converted;
},l=[this._lastAnchorPoint[e],this._lastEndPoint[e],this._lastSelectedAnchorPoint[e],this._lastSelectedEndPoint[e]];
if("cell"===e){this.selectRange("cell",t.to.min,t.to.max);var n=this.grid.layout.cells;
i.forEach(l,function(e){if(!e.converted)for(var o=t.from.min.row,i=t.to.min.row;o<=t.from.max.row;++o,
++i)for(var l=t.from.min.col,c=t.to.min.col;l<=t.from.max.col;++l,++c){for(;n[l].hidden;)++l;
for(;n[c].hidden;)++c;if(e.row==o&&e.col==l)return e.row=i,e.col=c,void(e.converted=!0);
}})}else l=this._selected.cell.concat(this._selected[e]).concat(l).concat([this._lastAnchorPoint.cell,this._lastEndPoint.cell,this._lastSelectedAnchorPoint.cell,this._lastSelectedEndPoint.cell]),
i.forEach(l,function(o){if(o&&!o.converted){var i=o[e];i in t&&(o[e]=t[i]),o.converted=!0;
}}),i.forEach(this._selected[w[e]],function(e){for(var o=0,i=e.except.length;i>o;++o){
var l=e.except[o];l in t&&(e.except[o]=t[l])}});i.forEach(l,o),this._refreshSelected(!0),
this._focusPoint(e,this._lastEndPoint)}catch(r){console.warn("Selector._onInternalRearrange() error",r);
}},_onExternalChange:function(e,t){var o="cell"==e?t.min:t[0],i="cell"==e?t.max:t[t.length-1];
this.selectRange(e,o,i)},_refresh:function(e,t){this._keyboardSelect[e]||i.forEach(this._selected[e],function(o){
this._highlightSingle(e,t,o,void 0,!0)},this)},_refreshSelected:function(){this._refresh("col",!0),
this._refresh("row",!0),this._refresh("cell",!0)},_initAreas:function(){var e=this.grid,o=e.focus,i=this,l=1,c=2,r=function(t,n,s,r,a){
var h=i._keyboardSelect;if(a.shiftKey&&h[t]){if(h[t]===l){if("cell"===t){var d=i._lastEndPoint[t];
if(o.cell!=e.layout.cells[d.col+r]||o.rowIndex!=d.row+s)return void(h[t]=0)}i._startSelect(t,i._lastAnchorPoint[t],!0,!1,!0),
i._highlight(t,i._lastEndPoint[t],i._toSelect),h[t]=c}var _=n(t,s,r,a);i._isValid(t,_,e)&&i._highlight(t,_,i._toSelect),
p(a)}},d=function(t,o,c,s){if(s&&i.selectEnabled()&&i._config[t]!=u)switch(c.keyCode){
case n.SPACE:i._startSelect(t,o(),c.ctrlKey,c.shiftKey),i._endSelect(t);break;case n.SHIFT:
i._config[t]==g&&i._isValid(t,i._lastAnchorPoint[t],e)&&(i._endSelect(t),i._keyboardSelect[t]=l,
i._usingKeyboard=!0)}},_=function(e,t,o){o&&t.keyCode==n.SHIFT&&i._keyboardSelect[e]&&(i._endSelect(e),
i._keyboardSelect[e]=0)};e.views.views[0]instanceof h&&(this._lastFocusedRowBarIdx=0,
o.addArea({name:"rowHeader",onFocus:function(t,l){var n=e.views.views[0];if(n instanceof h){
var c=n.getCellNode(i._lastFocusedRowBarIdx,0);return c&&s.toggleClass(c,o.focusClass,!1),
t&&"rowIndex"in t&&(t.rowIndex>=0?i._lastFocusedRowBarIdx=t.rowIndex:i._lastFocusedRowBarIdx||(i._lastFocusedRowBarIdx=0)),
c=n.getCellNode(i._lastFocusedRowBarIdx,0),c&&(a.focus(c),s.toggleClass(c,o.focusClass,!0)),
o.rowIndex=i._lastFocusedRowBarIdx,p(t),!0}return!1},onBlur:function(t,l){var n=e.views.views[0];
if(n instanceof h){var c=n.getCellNode(i._lastFocusedRowBarIdx,0);c&&s.toggleClass(c,o.focusClass,!1),
p(t)}return!0},onMove:function(t,l,n){var c=e.views.views[0];if(t&&c instanceof h){
var r=i._lastFocusedRowBarIdx+t;if(r>=0&&r<e.rowCount){p(n);var d=c.getCellNode(i._lastFocusedRowBarIdx,0);
s.toggleClass(d,o.focusClass,!1);var _=e.scroller,u=_.getLastPageRow(_.page),f=e.rowCount-1,g=Math.min(f,r);
r>u&&e.setScrollTop(e.scrollTop+_.findScrollTop(g)-_.findScrollTop(i._lastFocusedRowBarIdx)),
d=c.getCellNode(r,0),a.focus(d),s.toggleClass(d,o.focusClass,!0),i._lastFocusedRowBarIdx=r,
o.cell=d,o.cell.view=c,o.cell.getNode=function(e){return o.cell},o.rowIndex=i._lastFocusedRowBarIdx,
o.scrollIntoView(),o.cell=null}}}}),o.placeArea("rowHeader","before","content")),
o.addArea({name:"cellselect",onMove:t.partial(r,"cell",function(e,t,o,l){var n=i._currentPoint[e];
return x("cell",n.row+t,n.col+o)}),onKeyDown:t.partial(d,"cell",function(){return x("cell",o.rowIndex,o.cell.index);
}),onKeyUp:t.partial(_,"cell")}),o.placeArea("cellselect","below","content"),o.addArea({
name:"colselect",onMove:t.partial(r,"col",function(e,t,o,l){var n=i._currentPoint[e];
return x("col",n.col+o)}),onKeyDown:t.partial(d,"col",function(){return x("col",o.getHeaderIndex());
}),onKeyUp:t.partial(_,"col")}),o.placeArea("colselect","below","header"),o.addArea({
name:"rowselect",onMove:t.partial(r,"row",function(e,t,i,l){return x("row",o.rowIndex);
}),onKeyDown:t.partial(d,"row",function(){return x("row",o.rowIndex)}),onKeyUp:t.partial(_,"row")
}),o.placeArea("rowselect","below","rowHeader")},_clearSelection:function(e,t){return"all"==e?(this._clearSelection("cell",t),
this._clearSelection("col",t),void this._clearSelection("row",t)):(this._isUsingRowSelector=!0,
i.forEach(this._selected[e],function(o){v(e,t,o)||this._highlightSingle(e,!1,o)},this),
this._blurPoint(e,this._currentPoint),this._selecting[e]=!1,this._startPoint[e]=this._currentPoint[e]=null,
this._selected[e]=[],"row"!=e||this.grid._selectingRange||(this._oldDeselectAll.call(this.grid.selection),
this.grid.selection._selectedById={}),this.grid.onEndDeselect(e,null,null,this._selected),
void this.grid.onSelectCleared(e))},_startSelect:function(e,t,o,i,l,n){if(this._isValid(e,t)){
var c=this._isSelected(e,this._lastEndPoint[e]),s=this._isSelected(e,t);this.noClear&&!o?this._toSelect=void 0===n?!0:n:this._toSelect=l?s:!s,
(!o||!s&&this._config[e]==f)&&(this._clearSelection("col",t),this._clearSelection("cell",t),
(!this.noClear||"row"===e&&this._config[e]==f)&&this._clearSelection("row",t),this._toSelect=void 0===n?!0:n),
this._selecting[e]=!0,this._currentPoint[e]=null,i&&this._lastType==e&&c==this._toSelect&&this._config[e]==g?("row"===e&&(this._isUsingRowSelector=!0),
this._startPoint[e]=this._lastAnchorPoint[e],this._highlight(e,this._startPoint[e]),
this._isUsingRowSelector=!1):this._startPoint[e]=t,this._curType=e,this._fireEvent("start",e),
this._isStartFocus=!0,this._isUsingRowSelector=!0,this._highlight(e,t,this._toSelect),
this._isStartFocus=!1}},_endSelect:function(e){"row"===e&&delete this._isUsingRowSelector,
"all"==e?(this._endSelect("col"),this._endSelect("row"),this._endSelect("cell")):this._selecting[e]&&(this._addToSelected(e),
this._lastAnchorPoint[e]=this._startPoint[e],this._lastEndPoint[e]=this._currentPoint[e],
this._toSelect&&(this._lastSelectedAnchorPoint[e]=this._lastAnchorPoint[e],this._lastSelectedEndPoint[e]=this._lastEndPoint[e]),
this._startPoint[e]=this._currentPoint[e]=null,this._selecting[e]=!1,this._lastType=e,
this._fireEvent("end",e))},_fireEvent:function(e,t){switch(e){case"start":this.grid[this._toSelect?"onStartSelect":"onStartDeselect"](t,this._startPoint[t],this._selected);
break;case"end":this.grid[this._toSelect?"onEndSelect":"onEndDeselect"](t,this._lastAnchorPoint[t],this._lastEndPoint[t],this._selected);
}},_calcToHighlight:function(e,t,o,i){if(void 0!==i){var l;if(this._usingKeyboard&&!o){
var n=this._isInLastRange(this._lastType,t);if(n){if(l=this._isSelected(e,t),i&&l)return!1;
if(!i&&!l&&this._isInLastRange(this._lastType,t,!0))return!0}}return o?i:l||this._isSelected(e,t);
}return o},_highlightNode:function(e,t){if(e){var o="dojoxGridRowSelected",i="dojoxGridCellSelected";
s.toggleClass(e,o,t),s.toggleClass(e,i,t)}},_highlightHeader:function(e,t){var o=this.grid.layout.cells,i=o[e].getHeaderNode(),l="dojoxGridHeaderSelected";
s.toggleClass(i,l,t)},_highlightRowSelector:function(e,t){var o=this.grid.views.views[0];
if(o instanceof h){var i=o.getRowNode(e);if(i){var l="dojoxGridRowSelectorSelected";
s.toggleClass(i,l,t)}}},_highlightSingle:function(e,t,o,l,n){var s,r=this,a=r.grid,h=a.layout.cells;
switch(e){case"cell":s=this._calcToHighlight(e,o,t,l);var d=h[o.col];d.hidden||d.notselectable||this._highlightNode(o.node||d.getNode(o.row),s);
break;case"col":s=this._calcToHighlight(e,o,t,l),this._highlightHeader(o.col,s),c("td[idx='"+o.col+"']",a.domNode).forEach(function(e){
var t=h[o.col].view.content.findRowTarget(e);if(t){var i=t[dojox.grid.util.rowIndexTag];
r._highlightSingle("cell",s,{row:i,col:o.col,node:e})}});break;case"row":s=this._calcToHighlight(e,o,t,l),
this._highlightRowSelector(o.row,s),this._config.cell&&i.forEach(h,function(e){r._highlightSingle("cell",s,{
row:o.row,col:e.index,node:e.getNode(o.row)})}),this._selectedRowModified=!0,n||a.selection.setSelected(o.row,s);
}},_highlight:function(e,t,o){if(this._selecting[e]&&null!==t){var i=this._startPoint[e],l=this._currentPoint[e],n=this,c=function(t,i,l){
n._forEach(e,t,i,function(t){n._highlightSingle(e,l,t,o)},!0)};switch(e){case"col":
case"row":null!==l?S(e,t,i,l,!0)?c(l,t,!1):(S(e,i,t,l,!0)&&(c(l,i,!1),l=i),c(t,l,!0)):this._highlightSingle(e,!0,t,o);
break;case"cell":null!==l&&(S("row",t,i,l,!0)||S("col",t,i,l,!0)||S("row",i,t,l,!0)||S("col",i,t,l,!0))&&c(i,l,!1),
c(i,t,!0)}this._currentPoint[e]=t,this._focusPoint(e,this._currentPoint)}},_focusPoint:function(e,t){
if(!this._isStartFocus){var o=t[e],i=this.grid.focus;"col"==e?(i._colHeadFocusIdx=o.col,
i.focusArea("header")):"row"==e?i.focusArea("rowHeader",{rowIndex:o.row}):"cell"==e&&i.setFocusIndex(o.row,o.col);
}},_blurPoint:function(e,t){var o=this.grid.focus;"cell"==e&&o._blurContent()},_addToSelected:function(e){
var t=this._toSelect,o=this,l=[],n=[],c=this._startPoint[e],s=this._currentPoint[e];
this._usingKeyboard&&this._forEach(e,this._lastAnchorPoint[e],this._lastEndPoint[e],function(o){
S(e,o,c,s)||(t?n:l).push(o)}),this._forEach(e,c,s,function(i){var c=o._isSelected(e,i);
t&&!c?l.push(i):t||n.push(i)}),this._add(e,l),this._remove(e,n),i.forEach(this._selected.row,function(e){
e.except.length>0&&(this._selectedRowModified=!0,this.grid.selection.setSelected(e.row,!1));
},this)},_forEach:function(e,t,o,i,l){if(this._isValid(e,t,!0)&&this._isValid(e,o,!0))switch(e){
case"col":case"row":t=t[e],o=o[e];var n=o>t?1:-1;for(l||(o+=n);t!=o;t+=n)i(x(e,t));
break;case"cell":for(var c=o.col>t.col?1:-1,s=o.row>t.row?1:-1,r=t.row,a=o.row+s;r!=a;r+=s)for(var h=t.col,d=o.col+c;h!=d;h+=c)i(x(e,r,h));
}},_makeupForExceptions:function(e,t){var o=[];return i.forEach(this._selected[e],function(l){
i.forEach(t,function(t){if(l[e]==t[e]){var n=i.indexOf(l.except,t[w[e]]);n>=0&&l.except.splice(n,1),
o.push(t)}})}),o},_makeupForCells:function(e,t){var o=[];i.forEach(this._selected.cell,function(l){
i.some(t,function(t){return l[e]==t[e]?(o.push(l),!0):!1})}),this._remove("cell",o),
i.forEach(this._selected[w[e]],function(o){i.forEach(t,function(t){var l=i.indexOf(o.except,t[e]);
l>=0&&o.except.splice(l,1)})})},_addException:function(e,t){i.forEach(this._selected[e],function(o){
i.forEach(t,function(t){o.except.push(t[w[e]])})})},_addCellException:function(e,t){
i.forEach(this._selected[e],function(o){i.forEach(t,function(t){o[e]==t[e]&&o.except.push(t[w[e]]);
})})},_add:function(e,t){var o=this.grid.layout.cells;if("cell"==e){var l=this._makeupForExceptions("col",t),n=this._makeupForExceptions("row",t);
t=i.filter(t,function(e){return i.indexOf(l,e)<0&&i.indexOf(n,e)<0&&!o[e.col].hidden&&!o[e.col].notselectable;
})}else"col"==e&&(t=i.filter(t,function(e){return!o[e.col].hidden&&!o[e.col].notselectable;
})),this._makeupForCells(e,t),this._selected[e]=i.filter(this._selected[e],function(o){
return i.every(t,function(t){return o[e]!==t[e]})});"col"!=e&&this.grid._hasIdentity&&i.forEach(t,function(e){
var t=this.grid._by_idx[e.row];t&&(e.id=t.idty)},this),this._selected[e]=this._selected[e].concat(t);
},_remove:function(e,o){var l=t.partial(v,e);this._selected[e]=i.filter(this._selected[e],function(e){
return!i.some(o,function(t){return l(e,t)})}),"cell"==e?(this._addCellException("col",o),
this._addCellException("row",o)):this._config.cell&&this._addException(w[e],o)},_isCellNotInExcept:function(e,t){
var o=t[e],l=t[w[e]];return i.some(this._selected[e],function(t){return t[e]==o&&i.indexOf(t.except,l)<0;
})},_isSelected:function(e,t){if(!t)return!1;var o=i.some(this._selected[e],function(o){
var i=v(e,t,o);return i&&"cell"!==e?0===o.except.length:i});return o||"cell"!==e||(o=this._isCellNotInExcept("col",t)||this._isCellNotInExcept("row",t),
"cell"===e&&(o=o&&!this.grid.layout.cells[t.col].notselectable)),o},_isInLastRange:function(e,t,o){
var i=this[o?"_lastSelectedAnchorPoint":"_lastAnchorPoint"][e],l=this[o?"_lastSelectedEndPoint":"_lastEndPoint"][e];
return t&&i&&l?S(e,t,i,l):!1},_isValid:function(e,o,i){if(!o)return!1;try{var l=this.grid,n=o[e];
switch(e){case"col":return n>=0&&n<l.layout.cells.length&&t.isArray(o.except)&&(i||!l.layout.cells[n].notselectable);
case"row":return n>=0&&n<l.rowCount&&t.isArray(o.except);case"cell":return o.col>=0&&o.col<l.layout.cells.length&&o.row>=0&&o.row<l.rowCount&&(i||!l.layout.cells[o.col].notselectable);
}}catch(c){}return!1}});return _.registerPlugin(E,{dependency:["autoScroll"]}),E});