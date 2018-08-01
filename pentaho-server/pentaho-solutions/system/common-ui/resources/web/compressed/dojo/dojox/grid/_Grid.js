define(["dojo/_base/kernel","../main","dojo/_base/declare","./_Events","./_Scroller","./_Layout","./_View","./_ViewManager","./_RowManager","./_FocusManager","./_EditManager","./Selection","./_RowSelector","./util","dijit/_Widget","dijit/_TemplatedMixin","dijit/CheckedMenuItem","dojo/text!./resources/_Grid.html","dojo/string","dojo/_base/array","dojo/_base/lang","dojo/_base/sniff","dojox/html/metrics","dojo/_base/html","dojo/query","dojo/dnd/common","dojo/i18n!dijit/nls/loading"],function(t,e,i,s,o,n,h,r,d,l,a,u,c,g,p,f,w,m,_,v,y,C,S,H,N){
t.isCopyKey||(t.isCopyKey=t.dnd.getCopyKeyState);var R=i("dojox.grid._Grid",[p,f,s],{
templateString:m,classTag:"dojoxGrid",rowCount:5,keepRows:75,rowsPerPage:25,autoWidth:!1,
initialWidth:"",autoHeight:"",rowHeight:0,autoRender:!0,defaultHeight:"15em",height:"",
structure:null,elasticView:-1,singleClickEdit:!1,selectionMode:"extended",rowSelector:"",
columnReordering:!1,headerMenu:null,placeholderLabel:"GridColumns",selectable:!1,
_click:null,loadingMessage:"<span class='dojoxGridLoading'>${loadingState}</span>",
errorMessage:"<span class='dojoxGridError'>${errorState}</span>",noDataMessage:"",
escapeHTMLInData:!0,formatterScope:null,editable:!1,summary:"",_setSummaryAttr:"domNode",
sortInfo:0,_placeholders:null,_layoutClass:n,buildRendering:function(){this.inherited(arguments),
this.domNode.getAttribute("tabIndex")||(this.domNode.tabIndex="0"),this.createScroller(),
this.createLayout(),this.createViews(),this.createManagers(),this.createSelection(),
this.connect(this.selection,"onSelected","onSelected"),this.connect(this.selection,"onDeselected","onDeselected"),
this.connect(this.selection,"onChanged","onSelectionChanged"),S.initOnFontResize(),
this.connect(S,"onFontResize","textSizeChanged"),g.funnelEvents(this.domNode,this,"doKeyEvent",g.keyEvents),
"none"!=this.selectionMode&&this.domNode.setAttribute("aria-multiselectable","single"==this.selectionMode?"false":"true"),
H.addClass(this.domNode,this.classTag),this.isLeftToRight()||H.addClass(this.domNode,this.classTag+"Rtl"),
this.rowHeight>0&&H.addClass(this.viewsNode,this.classTag+"FixedRowHeight")},postMixInProperties:function(){
this.inherited(arguments);var e=t.i18n.getLocalization("dijit","loading",this.lang);
this.loadingMessage=_.substitute(this.loadingMessage,e),this.errorMessage=_.substitute(this.errorMessage,e),
this.srcNodeRef&&this.srcNodeRef.style.height&&(this.height=this.srcNodeRef.style.height),
this._setAutoHeightAttr(this.autoHeight,!0),this.lastScrollTop=this.scrollTop=0},
postCreate:function(){this._placeholders=[],this._setHeaderMenuAttr(this.headerMenu),
this._setStructureAttr(this.structure),this._click=[],this.inherited(arguments),this.domNode&&this.autoWidth&&this.initialWidth&&(this.domNode.style.width=this.initialWidth),
this.domNode&&!this.editable&&H.attr(this.domNode,"aria-readonly","true")},destroy:function(){
this.domNode.onReveal=null,this.domNode.onSizeChange=null,delete this._click,this.scroller&&(this.scroller.destroy(),
delete this.scroller),this.edit.destroy(),delete this.edit,this.views.destroyViews(),
this.focus&&(this.focus.destroy(),delete this.focus),this.headerMenu&&this._placeholders.length&&(v.forEach(this._placeholders,function(t){
t.unReplace(!0)}),this.headerMenu.unBindDomNode(this.viewsHeaderNode)),this.inherited(arguments);
},_setAutoHeightAttr:function(t,e){"string"==typeof t&&(t=t&&"false"!=t?"true"==t?!0:window.parseInt(t,10):!1),
"number"==typeof t&&(isNaN(t)&&(t=!1),0>t?t=!0:0===t&&(t=!1)),this.autoHeight=t,"boolean"==typeof t?this._autoHeight=t:"number"==typeof t?this._autoHeight=t>=this.get("rowCount"):this._autoHeight=!1,
this._started&&!e&&this.render()},_getRowCountAttr:function(){return this.updating&&this.invalidated&&void 0!=this.invalidated.rowCount?this.invalidated.rowCount:this.rowCount;
},textSizeChanged:function(){this.render()},sizeChange:function(){this.update()},
createManagers:function(){this.rows=new d(this),this.focus=new l(this),this.edit=new a(this);
},createSelection:function(){this.selection=new u(this)},createScroller:function(){
this.scroller=new o,this.scroller.grid=this,this.scroller.renderRow=y.hitch(this,"renderRow"),
this.scroller.removeRow=y.hitch(this,"rowRemoved")},createLayout:function(){this.layout=new this._layoutClass(this),
this.connect(this.layout,"moveColumn","onMoveColumn")},onMoveColumn:function(){this.update();
},onResizeColumn:function(t){},createViews:function(){this.views=new r(this),this.views.createView=y.hitch(this,"createView");
},createView:function(t,e){var i=y.getObject(t),s=new i({grid:this,index:e});return this.viewsNode.appendChild(s.domNode),
this.viewsHeaderNode.appendChild(s.headerNode),this.views.addView(s),H.attr(this.domNode,"align",this.isLeftToRight()?"left":"right"),
s},buildViews:function(){for(var t,i=0;t=this.layout.structure[i];i++)this.createView(t.type||e._scopeName+".grid._View",i).setStructure(t);
this.scroller.setContentNodes(this.views.getContentNodes())},_setStructureAttr:function(e){
var i=e;if(i&&y.isString(i)&&(t.deprecated("dojox.grid._Grid.set('structure', 'objVar')","use dojox.grid._Grid.set('structure', objVar) instead","2.0"),
i=y.getObject(i)),this.structure=i,!i){if(!this.layout.structure)return;i=this.layout.structure;
}this.views.destroyViews(),this.focus.focusView=null,i!==this.layout.structure&&this.layout.setStructure(i),
this._structureChanged()},setStructure:function(e){t.deprecated("dojox.grid._Grid.setStructure(obj)","use dojox.grid._Grid.set('structure', obj) instead.","2.0"),
this._setStructureAttr(e)},getColumnTogglingItems:function(){var t,e=[];return t=v.map(this.layout.cells,function(t){
t.menuItems||(t.menuItems=[]);var i=this,s=new w({label:t.name,checked:!t.hidden,
_gridCell:t,onChange:function(t){if(i.layout.setColumnVisibility(this._gridCell.index,t)){
var e=this._gridCell.menuItems;e.length>1&&v.forEach(e,function(e){e!==this&&e.setAttribute("checked",t);
},this),t=v.filter(i.layout.cells,function(t){return t.menuItems.length>1?v.forEach(t.menuItems,"item.set('disabled', false);"):t.menuItems[0].set("disabled",!1),
!t.hidden}),1==t.length&&v.forEach(t[0].menuItems,"item.set('disabled', true);")}
},destroy:function(){var t=v.indexOf(this._gridCell.menuItems,this);this._gridCell.menuItems.splice(t,1),
delete this._gridCell,w.prototype.destroy.apply(this,arguments)}});return t.menuItems.push(s),
t.hidden||e.push(s),s},this),1==e.length&&e[0].set("disabled",!0),t},_setHeaderMenuAttr:function(t){
this._placeholders&&this._placeholders.length&&(v.forEach(this._placeholders,function(t){
t.unReplace(!0)}),this._placeholders=[]),this.headerMenu&&this.headerMenu.unBindDomNode(this.viewsHeaderNode),
this.headerMenu=t,t&&(this.headerMenu.bindDomNode(this.viewsHeaderNode),this.headerMenu.getPlaceholders&&(this._placeholders=this.headerMenu.getPlaceholders(this.placeholderLabel)));
},setHeaderMenu:function(e){t.deprecated("dojox.grid._Grid.setHeaderMenu(obj)","use dojox.grid._Grid.set('headerMenu', obj) instead.","2.0"),
this._setHeaderMenuAttr(e)},setupHeaderMenu:function(){this._placeholders&&this._placeholders.length&&v.forEach(this._placeholders,function(t){
t._replaced&&t.unReplace(!0),t.replace(this.getColumnTogglingItems())},this)},_fetch:function(t){
this.setScrollTop(0)},getItem:function(t){return null},showMessage:function(t){t?(this.messagesNode.innerHTML=t,
this.messagesNode.style.display=""):(this.messagesNode.innerHTML="",this.messagesNode.style.display="none");
},_structureChanged:function(){this.buildViews(),this.autoRender&&this._started&&this.render();
},hasLayout:function(){return this.layout.cells.length},resize:function(t,e){this._pendingChangeSize=t,
this._pendingResultSize=e,this.sizeChange()},_getPadBorder:function(){return this._padBorder=this._padBorder||H._getPadBorderExtents(this.domNode),
this._padBorder},_getHeaderHeight:function(){var t=this.viewsHeaderNode.style,e="none"==t.display?0:this.views.measureHeader();
return t.height=e+"px",this.views.normalizeHeaderNodeHeight(),e},_resize:function(t,e){
if(t=t||this._pendingChangeSize,e=e||this._pendingResultSize,delete this._pendingChangeSize,
delete this._pendingResultSize,this.domNode){var i=this.domNode.parentNode;if(i&&1==i.nodeType&&this.hasLayout()&&"hidden"!=i.style.visibility&&"none"!=i.style.display){
var s,o=this._getPadBorder(),n=void 0;this._autoHeight?this.domNode.style.height="auto":"number"==typeof this.autoHeight?(s=n=this._getHeaderHeight(),
s+=this.scroller.averageRowHeight*this.autoHeight,this.domNode.style.height=s+"px"):this.domNode.clientHeight<=o.h&&(i==document.body?this.domNode.style.height=this.defaultHeight:this.height?this.domNode.style.height=this.height:this.fitTo="parent"),
e&&(t=e),!this._autoHeight&&t?(H.marginBox(this.domNode,t),this.height=this.domNode.style.height,
delete this.fitTo):"parent"==this.fitTo&&(s=this._parentContentBoxHeight=this._parentContentBoxHeight>0?this._parentContentBoxHeight:H._getContentBox(i).h,
this.domNode.style.height=Math.max(0,s)+"px");var h=v.some(this.views.views,function(t){
return t.flexCells});this._autoHeight||0!==(s||H._getContentBox(this.domNode).h)?(this.viewsHeaderNode.style.display="block",
h||void 0!==n||(n=this._getHeaderHeight())):this.viewsHeaderNode.style.display="none",
h&&(n=void 0),this.adaptWidth(),this.adaptHeight(n),this.postresize()}}},adaptWidth:function(){
var t=!this.initialWidth&&this.autoWidth,e=t?0:this.domNode.clientWidth||this.domNode.offsetWidth-this._getPadBorder().w,i=this.views.arrange(1,e);
this.views.onEach("adaptWidth"),t&&(this.domNode.style.width=i+"px")},adaptHeight:function(t){
var e=void 0===t?this._getHeaderHeight():t,i=this._autoHeight?-1:Math.max(this.domNode.clientHeight-e,0)||0;
if(this.views.onEach("setSize",[0,i]),this.views.onEach("adaptHeight"),!this._autoHeight){
var s=0,o=0,n=v.filter(this.views.views,function(t){var e=t.hasHScrollbar();return e?s++:o++,
!e});s>0&&o>0&&v.forEach(n,function(t){t.adaptHeight(!0)})}this.autoHeight===!0||-1!=i||"number"==typeof this.autoHeight&&this.autoHeight>=this.get("rowCount")?this.scroller.windowHeight=i:this.scroller.windowHeight=Math.max(this.domNode.clientHeight-e,0);
},startup:function(){this._started||(this.inherited(arguments),this.autoRender&&this.render());
},render:function(){if(this.domNode&&this._started){if(!this.hasLayout())return void this.scroller.init(0,this.keepRows,this.rowsPerPage);
this.update=this.defaultUpdate,this._render()}},_render:function(){this.scroller.init(this.get("rowCount"),this.keepRows,this.rowsPerPage),
this.prerender(),this.setScrollTop(0),this.postrender()},prerender:function(){this.keepRows=this._autoHeight?0:this.keepRows,
this.scroller.setKeepInfo(this.keepRows),this.views.render(),this._resize()},postrender:function(){
this.postresize(),this.focus.initFocusView(),H.setSelectable(this.domNode,this.selectable);
},postresize:function(){if(this._autoHeight){var t=Math.max(this.views.measureContent())+"px";
this.viewsNode.style.height=t}},renderRow:function(t,e){this.views.renderRow(t,e,this._skipRowRenormalize);
},rowRemoved:function(t){this.views.rowRemoved(t)},invalidated:null,updating:!1,beginUpdate:function(){
this.invalidated=[],this.updating=!0},endUpdate:function(){this.updating=!1;var t,e=this.invalidated;
if(e.all)this.update();else if(void 0!=e.rowCount)this.updateRowCount(e.rowCount);else for(t in e)this.updateRow(Number(t));
this.invalidated=[]},defaultUpdate:function(){if(this.domNode){if(this.updating)return void(this.invalidated.all=!0);
this.lastScrollTop=this.scrollTop,this.prerender(),this.scroller.invalidateNodes(),
this.setScrollTop(this.lastScrollTop),this.postrender()}},update:function(){this.render();
},updateRow:function(t){t=Number(t),this.updating?this.invalidated[t]=!0:(this.views.updateRow(t),
this.scroller.rowHeightChanged(t))},updateRows:function(t,e){t=Number(t),e=Number(e);
var i;if(this.updating)for(i=0;e>i;i++)this.invalidated[i+t]=!0;else{for(i=0;e>i;i++)this.views.updateRow(i+t,this._skipRowRenormalize);
this.scroller.rowHeightChanged(t)}},updateRowCount:function(t){this.updating?this.invalidated.rowCount=t:(this.rowCount=t,
this._setAutoHeightAttr(this.autoHeight,!0),this.layout.cells.length&&this.scroller.updateRowCount(t),
this._resize(),this.layout.cells.length&&this.setScrollTop(this.scrollTop))},updateRowStyles:function(t){
this.views.updateRowStyles(t)},getRowNode:function(t){if(this.focus.focusView&&!(this.focus.focusView instanceof c))return this.focus.focusView.rowNodes[t];
for(var e,i=0;e=this.views.views[i];i++)if(!(e instanceof c))return e.rowNodes[t];
return null},rowHeightChanged:function(t){this.views.renormalizeRow(t),this.scroller.rowHeightChanged(t);
},fastScroll:!0,delayScroll:!1,scrollRedrawThreshold:C("ie")?100:50,scrollTo:function(t){
if(!this.fastScroll)return void this.setScrollTop(t);var e=Math.abs(this.lastScrollTop-t);
if(this.lastScrollTop=t,e>this.scrollRedrawThreshold||this.delayScroll){this.delayScroll=!0,
this.scrollTop=t,this.views.setScrollTop(t),this._pendingScroll&&window.clearTimeout(this._pendingScroll);
var i=this;this._pendingScroll=window.setTimeout(function(){delete i._pendingScroll,
i.finishScrollJob()},200)}else this.setScrollTop(t)},finishScrollJob:function(){this.delayScroll=!1,
this.setScrollTop(this.scrollTop)},setScrollTop:function(t){this.scroller.scroll(this.views.setScrollTop(t));
},scrollToRow:function(t){this.setScrollTop(this.scroller.findScrollTop(t)+1)},styleRowNode:function(t,e){
e&&this.rows.styleRowNode(t,e)},_mouseOut:function(t){this.rows.setOverRow(-2)},getCell:function(t){
return this.layout.cells[t]},setCellWidth:function(t,e){this.getCell(t).unitWidth=e;
},getCellName:function(t){return"Cell "+t.index},canSort:function(t){},sort:function(){},
getSortAsc:function(t){return t=void 0==t?this.sortInfo:t,Boolean(t>0)},getSortIndex:function(t){
return t=void 0==t?this.sortInfo:t,Math.abs(t)-1},setSortIndex:function(t,e){var i=t+1;
void 0!=e?i*=e?1:-1:this.getSortIndex()==t&&(i=-this.sortInfo),this.setSortInfo(i);
},setSortInfo:function(t){this.canSort(t)&&(this.sortInfo=t,this.sort(),this.update());
},doKeyEvent:function(t){t.dispatch="do"+t.type,this.onKeyEvent(t)},_dispatch:function(t,e){
return t in this?this[t](e):!1},dispatchKeyEvent:function(t){this._dispatch(t.dispatch,t);
},dispatchContentEvent:function(t){this.edit.dispatchEvent(t)||t.sourceView.dispatchContentEvent(t)||this._dispatch(t.dispatch,t);
},dispatchHeaderEvent:function(t){t.sourceView.dispatchHeaderEvent(t)||this._dispatch("doheader"+t.type,t);
},dokeydown:function(t){this.onKeyDown(t)},doclick:function(t){t.cellNode?this.onCellClick(t):this.onRowClick(t);
},dodblclick:function(t){t.cellNode?this.onCellDblClick(t):this.onRowDblClick(t)},
docontextmenu:function(t){t.cellNode?this.onCellContextMenu(t):this.onRowContextMenu(t);
},doheaderclick:function(t){t.cellNode?this.onHeaderCellClick(t):this.onHeaderClick(t);
},doheaderdblclick:function(t){t.cellNode?this.onHeaderCellDblClick(t):this.onHeaderDblClick(t);
},doheadercontextmenu:function(t){t.cellNode?this.onHeaderCellContextMenu(t):this.onHeaderContextMenu(t);
},doStartEdit:function(t,e){this.onStartEdit(t,e)},doApplyCellEdit:function(t,e,i){
this.onApplyCellEdit(t,e,i)},doCancelEdit:function(t){this.onCancelEdit(t)},doApplyEdit:function(t){
this.onApplyEdit(t)},addRow:function(){this.updateRowCount(this.get("rowCount")+1);
},removeSelectedRows:function(){this.allItemsSelected?this.updateRowCount(0):this.updateRowCount(Math.max(0,this.get("rowCount")-this.selection.getSelected().length)),
this.selection.clear()}});return R.markupFactory=function(t,i,s,o){var n=function(t){
var e=H.attr(t,"width")||"auto";return"auto"!=e&&"em"!=e.slice(-2)&&"%"!=e.slice(-1)&&(e=parseInt(e,10)+"px"),
e};return t.structure||"table"!=i.nodeName.toLowerCase()||(t.structure=N("> colgroup",i).map(function(t){
var e=H.attr(t,"span"),i={noscroll:"true"==H.attr(t,"noscroll")?!0:!1,__span:e?parseInt(e,10):1,
cells:[]};return H.hasAttr(t,"width")&&(i.width=n(t)),i}),t.structure.length||t.structure.push({
__span:1/0,cells:[]}),N("thead > tr",i).forEach(function(i,s){var h,r=0,d=0,l=null;
N("> th",i).map(function(i){if(l){if(r>=h+l.__span){d++,h+=l.__span;l=t.structure[d];
}}else h=0,l=t.structure[0];var a={name:y.trim(H.attr(i,"name")||i.innerHTML),colSpan:parseInt(H.attr(i,"colspan")||1,10),
type:y.trim(H.attr(i,"cellType")||""),id:y.trim(H.attr(i,"id")||"")};r+=a.colSpan;
var u=H.attr(i,"rowspan");u&&(a.rowSpan=u),H.hasAttr(i,"width")&&(a.width=n(i)),H.hasAttr(i,"relWidth")&&(a.relWidth=window.parseInt(H.attr(i,"relWidth"),10)),
H.hasAttr(i,"hidden")&&(a.hidden="true"==H.attr(i,"hidden")||H.attr(i,"hidden")===!0),
o&&o(i,a),a.type=a.type?y.getObject(a.type):e.grid.cells.Cell,a.type&&a.type.markupFactory&&a.type.markupFactory(i,a),
l.cells[s]||(l.cells[s]=[]),l.cells[s].push(a)})})),new s(t,i)},R});