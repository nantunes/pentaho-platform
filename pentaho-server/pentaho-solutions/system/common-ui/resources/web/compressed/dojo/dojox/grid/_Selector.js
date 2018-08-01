define(["../main","dojo/_base/declare","dojo/_base/lang","dojo/query","dojo/dom-class","./Selection","./_View","./_Builder","./util"],function(e,t,i,n,o,d,s,r,l){
var c=e.grid._InputSelectorHeaderBuilder=i.extend(function(e){r._HeaderBuilder.call(this,e);
},r._HeaderBuilder.prototype,{generateHtml:function(){var e=this.view.contentWidth||0,t=this.view.grid.selection.getSelectedCount(),i=t&&t==this.view.grid.rowCount?" dijitCheckBoxChecked dijitChecked":"";
return'<table style="width:'+e+'px;" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><th style="text-align: center;"><div class="dojoxGridCheckSelector dijitReset dijitInline dijitCheckBox'+i+'"></div></th></tr></table>';
},doclick:function(e){var t=this.view.grid.selection.getSelectedCount();return this.view._selectionChanging=!0,
t==this.view.grid.rowCount?this.view.grid.selection.deselectAll():this.view.grid.selection.selectRange(0,this.view.grid.rowCount-1),
this.view._selectionChanging=!1,this.view.onSelectionChanged(),!0}}),h=e.grid._SelectorContentBuilder=i.extend(function(e){
r._ContentBuilder.call(this,e)},r._ContentBuilder.prototype,{generateHtml:function(e,t){
var i=this.view.contentWidth||0;return'<table class="dojoxGridRowbarTable" style="width:'+i+'px;" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><td  style="text-align: center;" class="dojoxGridRowbarInner">'+this.getCellContent(t)+"</td></tr></table>";
},getCellContent:function(e){return"&nbsp;"},findTarget:function(){var e=r._ContentBuilder.prototype.findTarget.apply(this,arguments);
return e},domouseover:function(e){this.view.grid.onMouseOverRow(e)},domouseout:function(e){
this.isIntraRowEvent(e)||this.view.grid.onMouseOutRow(e)},doclick:function(e){var t=e.rowIndex,i=this.view.grid.selection.isSelected(t),n=this.view.grid.selection.mode;
return i?this.view.grid.selection.deselect(t):"single"==n?this.view.grid.selection.select(t):"none"!=n&&this.view.grid.selection.addToSelection(t),
!0}}),a=e.grid._InputSelectorContentBuilder=i.extend(function(e){h.call(this,e)},h.prototype,{
getCellContent:function(e){var t=this.view,i="checkbox"==t.inputType?"CheckBox":"Radio",n=t.grid.selection.isSelected(e)?" dijit"+i+"Checked dijitChecked":"";
return'<div class="dojoxGridCheckSelector dijitReset dijitInline dijit'+i+n+'"></div>';
}}),u=t("dojox.grid._Selector",s,{inputType:"",selectionMode:"",defaultWidth:"2em",
noscroll:!0,padBorderWidth:2,_contentBuilderClass:h,postCreate:function(){this.inherited(arguments),
this.selectionMode&&(this.grid.selection.mode=this.selectionMode),this.connect(this.grid.selection,"onSelected","onSelected"),
this.connect(this.grid.selection,"onDeselected","onDeselected")},buildRendering:function(){
this.inherited(arguments),this.scrollboxNode.style.overflow="hidden"},getWidth:function(){
return this.viewWidth||this.defaultWidth},resize:function(){this.adaptHeight()},setStructure:function(e){
this.inherited(arguments),e.defaultWidth&&(this.defaultWidth=e.defaultWidth)},adaptWidth:function(){
"contentWidth"in this||!this.contentNode||(this.contentWidth=this.contentNode.offsetWidth-this.padBorderWidth);
},doStyleRowNode:function(e,t){var i=["dojoxGridRowbar dojoxGridNonNormalizedCell"];
this.grid.rows.isOver(e)&&i.push("dojoxGridRowbarOver"),this.grid.selection.isSelected(e)&&i.push("dojoxGridRowbarSelected"),
t.className=i.join(" ")},onSelected:function(e){this.grid.updateRow(e)},onDeselected:function(e){
this.grid.updateRow(e)}});return s.prototype._headerBuilderClass||s.prototype._contentBuilderClass||(u.prototype.postCreate=function(){
this.connect(this.scrollboxNode,"onscroll","doscroll"),l.funnelEvents(this.contentNode,this,"doContentEvent",["mouseover","mouseout","click","dblclick","contextmenu","mousedown"]),
l.funnelEvents(this.headerNode,this,"doHeaderEvent",["dblclick","mouseover","mouseout","mousemove","mousedown","click","contextmenu"]),
this._contentBuilderClass?this.content=new this._contentBuilderClass(this):this.content=new r._ContentBuilder(this),
this._headerBuilderClass?this.header=new this._headerBuilderClass(this):this.header=new r._HeaderBuilder(this),
this.grid.isLeftToRight()||(this.headerNodeContainer.style.width=""),this.connect(this.grid.selection,"onSelected","onSelected"),
this.connect(this.grid.selection,"onDeselected","onDeselected")}),t("dojox.grid._RadioSelector",u,{
inputType:"radio",selectionMode:"single",_contentBuilderClass:a,buildRendering:function(){
this.inherited(arguments),this.headerNode.style.visibility="hidden"},renderHeader:function(){}
}),t("dojox.grid._CheckBoxSelector",u,{inputType:"checkbox",_headerBuilderClass:c,
_contentBuilderClass:a,postCreate:function(){this.inherited(arguments),this.connect(this.grid,"onSelectionChanged","onSelectionChanged"),
this.connect(this.grid,"updateRowCount","_updateVisibility")},renderHeader:function(){
this.inherited(arguments),this._updateVisibility(this.grid.rowCount)},_updateVisibility:function(e){
this.headerNode.style.visibility=e?"":"hidden"},onSelectionChanged:function(){if(!this._selectionChanging){
var e=n(".dojoxGridCheckSelector",this.headerNode)[0],t=this.grid,i=t.rowCount&&t.rowCount==t.selection.getSelectedCount();
t.allItemsSelected=i||!1,o.toggle(e,"dijitChecked",t.allItemsSelected),o.toggle(e,"dijitCheckBoxChecked",t.allItemsSelected);
}}}),u});