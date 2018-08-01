define(["dojo/_base/declare","dojo/_base/array","dojo/_base/event","dojo/_base/lang","dojo/_base/html","dojo/_base/window","dojo/_base/connect","dojo/_base/sniff","dojo/query","dojo/keys","dojo/string","../_Plugin","../../EnhancedGrid","../../cells/dijit"],function(e,t,i,s,n,o,l,c,d,h,a,r,u){
var g=s.getObject("dojox.grid.cells"),p=e("dojox.grid.cells.RowSelector",g._Widget,{
inputType:"",map:null,disabledMap:null,isRowSelector:!0,_connects:null,_subscribes:null,
checkedText:"&#10003;",unCheckedText:"O",constructor:function(){this.map={},this.disabledMap={},
this.disabledCount=0,this._connects=[],this._subscribes=[],this.inA11YMode=n.hasClass(o.body(),"dijit_a11y"),
this.baseClass="dojoxGridRowSelector dijitReset dijitInline dijit"+this.inputType,
this.checkedClass=" dijit"+this.inputType+"Checked",this.disabledClass=" dijit"+this.inputType+"Disabled",
this.checkedDisabledClass=" dijit"+this.inputType+"CheckedDisabled",this.statusTextClass=" dojoxGridRowSelectorStatusText",
this._connects.push(l.connect(this.grid,"dokeyup",this,"_dokeyup")),this._connects.push(l.connect(this.grid.selection,"onSelected",this,"_onSelected")),
this._connects.push(l.connect(this.grid.selection,"onDeselected",this,"_onDeselected")),
this._connects.push(l.connect(this.grid.scroller,"invalidatePageNode",this,"_pageDestroyed")),
this._connects.push(l.connect(this.grid,"onCellClick",this,"_onClick")),this._connects.push(l.connect(this.grid,"updateRow",this,"_onUpdateRow"));
},formatter:function(e,t,i){var s=i,n=s.baseClass,o=!!s.getValue(t),l=!!s.disabledMap[t];
return o?(n+=s.checkedClass,l&&(n+=s.checkedDisabledClass)):l&&(n+=s.disabledClass),
["<div tabindex = -1 ","id = '"+s.grid.id+"_rowSelector_"+t+"' ","name = '"+s.grid.id+"_rowSelector' class = '"+n+"' ","role = "+s.inputType+" aria-checked = '"+o+"' aria-disabled = '"+l+"' aria-label = '"+a.substitute(s.grid._nls["indirectSelection"+s.inputType],[t+1])+"'>","<span class = '"+s.statusTextClass+"'>"+(o?s.checkedText:s.unCheckedText)+"</span>","</div>"].join("");
},setValue:function(e,t){},getValue:function(e){return this.grid.selection.isSelected(e);
},toggleRow:function(e,t){this._nativeSelect(e,t)},setDisabled:function(e,t){0>e||this._toggleDisabledStyle(e,t);
},disabled:function(e){return!!this.disabledMap[e]},_onClick:function(e){e.cell===this&&this._selectRow(e);
},_dokeyup:function(e){e.cellIndex==this.index&&e.rowIndex>=0&&e.keyCode==h.SPACE&&this._selectRow(e);
},focus:function(e){var t=this.map[e];t&&t.focus()},_focusEndingCell:function(e,t){
var i=this.grid.getCell(t);this.grid.focus.setFocusCell(i,e)},_nativeSelect:function(e,t){
this.grid.selection[t?"select":"deselect"](e)},_onSelected:function(e){this._toggleCheckedStyle(e,!0);
},_onDeselected:function(e){this._toggleCheckedStyle(e,!1)},_onUpdateRow:function(e){
delete this.map[e]},_toggleCheckedStyle:function(e,t){var i=this._getSelector(e);i&&(n.toggleClass(i,this.checkedClass,t),
this.disabledMap[e]&&n.toggleClass(i,this.checkedDisabledClass,t),i.setAttribute("aria-checked",t),
this.inA11YMode&&(i.firstChild.innerHTML=t?this.checkedText:this.unCheckedText))},
_toggleDisabledStyle:function(e,t){var i=this._getSelector(e);i&&(n.toggleClass(i,this.disabledClass,t),
this.getValue(e)&&n.toggleClass(i,this.checkedDisabledClass,t),i.setAttribute("aria-disabled",t)),
this.disabledMap[e]=t,e>=0&&(this.disabledCount+=t?1:-1)},_getSelector:function(e){
var t=this.map[e];if(!t){var i=this.view.rowNodes[e];i&&(t=d(".dojoxGridRowSelector",i)[0],
t&&(this.map[e]=t))}return t},_pageDestroyed:function(e){for(var t=this.grid.scroller.rowsPerPage,i=e*t,s=i+t-1,o=i;s>=o;o++)this.map[o]&&(n.destroy(this.map[o]),
delete this.map[o])},destroy:function(){for(var e in this.map)n.destroy(this.map[e]),
delete this.map[e];for(e in this.disabledMap)delete this.disabledMap[e];t.forEach(this._connects,l.disconnect),
t.forEach(this._subscribes,l.unsubscribe),delete this._connects,delete this._subscribes;
}}),w=e("dojox.grid.cells.SingleRowSelector",p,{inputType:"Radio",_selectRow:function(e){
var t=e.rowIndex;this.disabledMap[t]||(this._focusEndingCell(t,e.cellIndex),this._nativeSelect(t,!this.grid.selection.selected[t]));
}}),_=e("dojox.grid.cells.MultipleRowSelector",p,{inputType:"CheckBox",swipeStartRowIndex:-1,
swipeMinRowIndex:-1,swipeMaxRowIndex:-1,toSelect:!1,lastClickRowIdx:-1,unCheckedText:"&#9633;",
constructor:function(){this._connects.push(l.connect(o.doc,"onmouseup",this,"_domouseup")),
this._connects.push(l.connect(this.grid,"onRowMouseOver",this,"_onRowMouseOver")),
this._connects.push(l.connect(this.grid.focus,"move",this,"_swipeByKey")),this._connects.push(l.connect(this.grid,"onCellMouseDown",this,"_onMouseDown")),
this.headerSelector&&(this._connects.push(l.connect(this.grid.views,"render",this,"_addHeaderSelector")),
this._connects.push(l.connect(this.grid,"_onFetchComplete",this,"_addHeaderSelector")),
this._connects.push(l.connect(this.grid,"onSelectionChanged",this,"_onSelectionChanged")),
this._connects.push(l.connect(this.grid,"onKeyDown",this,function(e){-1==e.rowIndex&&e.cellIndex==this.index&&e.keyCode==h.SPACE&&this._toggletHeader();
})))},toggleAllSelection:function(e){var t=this.grid,i=t.selection;e?i.selectRange(0,t.rowCount-1):i.deselectAll();
},_onMouseDown:function(e){e.cell==this&&(this._startSelection(e.rowIndex),i.stop(e));
},_onRowMouseOver:function(e){this._updateSelection(e,0)},_domouseup:function(e){
c("ie")&&this.view.content.decorateEvent(e);var t=e.cellIndex>=0&&this.inSwipeSelection()&&!this.grid.edit.isEditRow(e.rowIndex);
t&&this._focusEndingCell(e.rowIndex,e.cellIndex),this._finishSelect()},_dokeyup:function(e){
this.inherited(arguments),e.shiftKey||this._finishSelect()},_startSelection:function(e){
this.swipeStartRowIndex=this.swipeMinRowIndex=this.swipeMaxRowIndex=e,this.toSelect=!this.getValue(e);
},_updateSelection:function(e,t){if(this.inSwipeSelection()){var i=0!==t,s=e.rowIndex,n=s-this.swipeStartRowIndex+t;
n>0&&this.swipeMaxRowIndex<s+t&&(this.swipeMaxRowIndex=s+t),0>n&&this.swipeMinRowIndex>s+t&&(this.swipeMinRowIndex=s+t);
for(var o=n>0?this.swipeStartRowIndex:s+t,l=n>0?s+t:this.swipeStartRowIndex,c=this.swipeMinRowIndex;c<=this.swipeMaxRowIndex;c++)this.disabledMap[c]||0>c||(c>=o&&l>=c?this._nativeSelect(c,this.toSelect):i||this._nativeSelect(c,!this.toSelect));
}},_swipeByKey:function(e,t,i){if(i&&0!==e&&i.shiftKey&&i.cellIndex==this.index&&!(this.grid.focus.rowIndex<0)){
var s=i.rowIndex;this.swipeStartRowIndex<0&&(this.swipeStartRowIndex=s,e>0?(this.swipeMaxRowIndex=s+e,
this.swipeMinRowIndex=s):(this.swipeMinRowIndex=s+e,this.swipeMaxRowIndex=s),this.toSelect=this.getValue(s)),
this._updateSelection(i,e)}},_finishSelect:function(){this.swipeStartRowIndex=-1,
this.swipeMinRowIndex=-1,this.swipeMaxRowIndex=-1,this.toSelect=!1},inSwipeSelection:function(){
return this.swipeStartRowIndex>=0},_nativeSelect:function(e,t){this.grid.selection[t?"addToSelection":"deselect"](e);
},_selectRow:function(e){var t=e.rowIndex;if(!this.disabledMap[t]){i.stop(e),this._focusEndingCell(t,e.cellIndex);
var s=t-this.lastClickRowIdx,n=!this.grid.selection.selected[t];if(this.lastClickRowIdx>=0&&!e.ctrlKey&&!e.altKey&&e.shiftKey)for(var o=s>0?this.lastClickRowIdx:t,l=s>0?t:this.lastClickRowIdx,c=o;c>=0&&l>=c;c++)this._nativeSelect(c,n);else this._nativeSelect(t,n);
this.lastClickRowIdx=t}},getValue:function(e){if(-1==e){var t=this.grid;return t.rowCount>0&&t.rowCount<=t.selection.getSelectedCount();
}return this.inherited(arguments)},_addHeaderSelector:function(){var e=this.view.getHeaderCellNode(this.index);
if(e){n.empty(e);var t=this.grid,i=e.appendChild(n.create("div",{"aria-label":t._nls.selectAll,
tabindex:-1,id:t.id+"_rowSelector_-1","class":this.baseClass,role:"Checkbox",innerHTML:"<span class = '"+this.statusTextClass+"'></span><span style='height: 0; width: 0; overflow: hidden; display: block;'>"+t._nls.selectAll+"</span>"
}));this.map[-1]=i;var s=this._headerSelectorConnectIdx;void 0!==s&&(l.disconnect(this._connects[s]),
this._connects.splice(s,1)),this._headerSelectorConnectIdx=this._connects.length,
this._connects.push(l.connect(i,"onclick",this,"_toggletHeader")),this._onSelectionChanged();
}},_toggletHeader:function(){this.disabledMap[-1]||(this.grid._selectingRange=!0,
this.toggleAllSelection(!this.getValue(-1)),this._onSelectionChanged(),this.grid._selectingRange=!1);
},_onSelectionChanged:function(){var e=this.grid;this.map[-1]&&!e._selectingRange&&(e.allItemsSelected=this.getValue(-1),
this._toggleCheckedStyle(-1,e.allItemsSelected))},_toggleDisabledStyle:function(e,t){
if(this.inherited(arguments),this.headerSelector){var i=this.grid.rowCount==this.disabledCount;
i!=!!this.disabledMap[-1]&&(arguments[0]=-1,arguments[1]=i,this.inherited(arguments));
}}}),S=e("dojox.grid.enhanced.plugins.IndirectSelection",r,{name:"indirectSelection",
constructor:function(){var e=this.grid.layout;this.connect(e,"setStructure",s.hitch(e,this.addRowSelectCell,this.option));
},addRowSelectCell:function(e){if(this.grid.indirectSelection&&"none"!=this.grid.selectionMode){
var i=!1,n=["get","formatter","field","fields"],o={type:_,name:"",width:"30px",styles:"text-align: center;"
};e.headerSelector&&(e.name=""),this.grid.rowSelectCell&&this.grid.rowSelectCell.destroy(),
t.forEach(this.structure,function(l){var c=l.cells;if(c&&c.length>0&&!i){var d=c[0];
if(d[0]&&d[0].isRowSelector)return console.debug("addRowSelectCell() - row selector cells already added, return."),
void(i=!0);var h,a="single"==this.grid.selectionMode?w:_;h=s.mixin(o,e,{type:a,editable:!1,
notselectable:!0,filterable:!1,navigatable:!0,nosort:!0}),t.forEach(n,function(e){
e in h&&delete h[e]}),c.length>1&&(h.rowSpan=c.length),t.forEach(this.cells,function(e,t){
e.index>=0?e.index+=1:console.warn("Error:IndirectSelection.addRowSelectCell()-  cell "+t+" has no index!");
});var r=this.addCellDef(0,0,h);r.index=0,d.unshift(r),this.cells.unshift(r),this.grid.rowSelectCell=r,
i=!0}},this),this.cellCount=this.cells.length}},destroy:function(){this.grid.rowSelectCell.destroy(),
delete this.grid.rowSelectCell,this.inherited(arguments)}});return u.registerPlugin(S,{
preInit:!0}),S});