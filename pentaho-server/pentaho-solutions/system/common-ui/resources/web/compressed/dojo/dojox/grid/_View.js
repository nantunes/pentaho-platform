define(["dojo","dijit/registry","../main","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/connect","dojo/_base/sniff","dojo/query","dojo/_base/window","dojo/text!./resources/View.html","dojo/dnd/Source","dijit/_Widget","dijit/_TemplatedMixin","dojox/html/metrics","./util","dojo/_base/html","./_Builder","dojo/dnd/Avatar","dojo/dnd/Manager"],function(t,e,o,i,r,s,n,h,d,l,a,c,u,f,g,v,m,p,w,b){
var x=function(t,e){return void 0==t.style.cssText?t.getAttribute("style"):t.style.cssText;
},C=i("dojox.grid._View",[u,f],{defaultWidth:"18em",viewWidth:"",templateString:a,
classTag:"dojoxGrid",marginBottom:0,rowPad:2,_togglingColumn:-1,_headerBuilderClass:p._HeaderBuilder,
_contentBuilderClass:p._ContentBuilder,postMixInProperties:function(){this.rowNodes={};
},postCreate:function(){this.connect(this.scrollboxNode,"onscroll","doscroll"),v.funnelEvents(this.contentNode,this,"doContentEvent",["mouseover","mouseout","click","dblclick","contextmenu","mousedown"]),
v.funnelEvents(this.headerNode,this,"doHeaderEvent",["dblclick","mouseover","mouseout","mousemove","mousedown","click","contextmenu"]),
this.content=new this._contentBuilderClass(this),this.header=new this._headerBuilderClass(this),
this.grid.isLeftToRight()||(this.headerNodeContainer.style.width="")},destroy:function(){
m.destroy(this.headerNode),delete this.headerNode;for(var t in this.rowNodes)this._cleanupRowWidgets(this.rowNodes[t]),
m.destroy(this.rowNodes[t]);this.rowNodes={},this.source&&this.source.destroy(),this.inherited(arguments);
},focus:function(){h("ie")||h("webkit")||h("opera")?this.hiddenFocusNode.focus():this.scrollboxNode.focus();
},setStructure:function(t){var e=this.structure=t;e.width&&!isNaN(e.width)?this.viewWidth=e.width+"em":this.viewWidth=e.width||(e.noscroll?"auto":this.viewWidth),
this._onBeforeRow=e.onBeforeRow||function(){},this._onAfterRow=e.onAfterRow||function(){},
this.noscroll=e.noscroll,this.noscroll&&(this.scrollboxNode.style.overflow="hidden"),
this.simpleStructure=Boolean(1==e.cells.length),this.testFlexCells(),this.updateStructure();
},_cleanupRowWidgets:function(t){t&&r.forEach(d("[widgetId]",t).map(e.byNode),function(t){
t._destroyOnRemove?(t.destroy(),delete t):t.domNode&&t.domNode.parentNode&&t.domNode.parentNode.removeChild(t.domNode);
})},onBeforeRow:function(t,e){this._onBeforeRow(t,e),t>=0&&this._cleanupRowWidgets(this.getRowNode(t));
},onAfterRow:function(o,i,s){this._onAfterRow(o,i,s);var n=this.grid;r.forEach(d(".dojoxGridStubNode",s),function(o){
if(o&&o.parentNode){var i=o.getAttribute("linkWidget"),r=window.parseInt(m.attr(o,"cellIdx"),10),s=(n.getCell(r),
e.byId(i));s?(o.parentNode.replaceChild(s.domNode,o),s._started||s.startup(),t.destroy(o)):o.innerHTML="";
}},this)},testFlexCells:function(){this.flexCells=!1;for(var t,e=0;t=this.structure.cells[e];e++)for(var o,i=0;o=t[i];i++)o.view=this,
this.flexCells=this.flexCells||o.isFlex();return this.flexCells},updateStructure:function(){
this.header.update(),this.content.update()},getScrollbarWidth:function(){var t=this.hasVScrollbar(),e=m.style(this.scrollboxNode,"overflow");
return this.noscroll||!e||"hidden"==e?t=!1:"scroll"==e&&(t=!0),t?g.getScrollbar().w:0;
},getColumnsWidth:function(){var t=this.headerContentNode;return t&&t.firstChild?t.firstChild.offsetWidth||m.style(t.firstChild,"width"):0;
},setColumnsWidth:function(t){this.headerContentNode.firstChild.style.width=t+"px",
this.viewWidth&&(this.viewWidth=t+"px")},getWidth:function(){return this.viewWidth||this.getColumnsWidth()+this.getScrollbarWidth()+"px";
},getContentWidth:function(){return Math.max(0,m._getContentBox(this.domNode).w-this.getScrollbarWidth())+"px";
},render:function(){this.scrollboxNode.style.height="",this.renderHeader(),this._togglingColumn>=0&&(this.setColumnsWidth(this.getColumnsWidth()-this._togglingColumn),
this._togglingColumn=-1);var t=this.grid.layout.cells,e=s.hitch(this,function(e,o){
!this.grid.isLeftToRight()&&(o=!o);for(var i=o?-1:1,r=this.header.getCellNodeIndex(e)+i,s=t[r];s&&s.getHeaderNode()&&"none"==s.getHeaderNode().style.display;)r+=i,
s=t[r];return s?s.getHeaderNode():null});if(this.grid.columnReordering&&this.simpleStructure){
this.source&&this.source.destroy();var o="dojoxGrid_bottomMarker",i="dojoxGrid_topMarker";
this.bottomMarker&&m.destroy(this.bottomMarker),this.bottomMarker=m.byId(o),this.topMarker&&m.destroy(this.topMarker),
this.topMarker=m.byId(i),this.bottomMarker||(this.bottomMarker=m.create("div",{id:o,
"class":"dojoxGridColPlaceBottom"},l.body()),this._hide(this.bottomMarker),this.topMarker=m.create("div",{
id:i,"class":"dojoxGridColPlaceTop"},l.body()),this._hide(this.topMarker)),this.arrowDim=m.contentBox(this.bottomMarker);
var r=m.contentBox(this.headerContentNode.firstChild.rows[0]).h;this.source=new c(this.headerContentNode.firstChild.rows[0],{
horizontal:!0,accept:["gridColumn_"+this.grid.id],viewIndex:this.index,generateText:!1,
onMouseDown:s.hitch(this,function(t){this.header.decorateEvent(t),(this.header.overRightResizeArea(t)||this.header.overLeftResizeArea(t))&&this.header.canResize(t)&&!this.header.moveable?this.header.beginColumnResize(t):(this.grid.headerMenu&&this.grid.headerMenu.onCancel(!0),
t.button===(h("ie")<9?1:0)&&c.prototype.onMouseDown.call(this.source,t))}),onMouseOver:s.hitch(this,function(t){
var e=this.source;e._getChildByEvent(t)&&c.prototype.onMouseOver.apply(e,arguments);
}),_markTargetAnchor:s.hitch(this,function(t){var o=this.source;if(o.current!=o.targetAnchor||o.before!=t){
o.targetAnchor&&e(o.targetAnchor,o.before)&&o._removeItemClass(e(o.targetAnchor,o.before),o.before?"After":"Before"),
c.prototype._markTargetAnchor.call(o,t);var i=t?o.targetAnchor:e(o.targetAnchor,o.before),s=0;
i||(i=o.targetAnchor,s=m.contentBox(i).w+this.arrowDim.w/2+2);var n=m.position(i,!0),h=Math.floor(n.x-this.arrowDim.w/2+s);
m.style(this.bottomMarker,"visibility","visible"),m.style(this.topMarker,"visibility","visible"),
m.style(this.bottomMarker,{left:h+"px",top:r+n.y+"px"}),m.style(this.topMarker,{left:h+"px",
top:n.y-this.arrowDim.h+"px"}),o.targetAnchor&&e(o.targetAnchor,o.before)&&o._addItemClass(e(o.targetAnchor,o.before),o.before?"After":"Before");
}}),_unmarkTargetAnchor:s.hitch(this,function(){var t=this.source;t.targetAnchor&&(t.targetAnchor&&e(t.targetAnchor,t.before)&&t._removeItemClass(e(t.targetAnchor,t.before),t.before?"After":"Before"),
this._hide(this.bottomMarker),this._hide(this.topMarker),c.prototype._unmarkTargetAnchor.call(t));
}),destroy:s.hitch(this,function(){n.disconnect(this._source_conn),n.unsubscribe(this._source_sub),
c.prototype.destroy.call(this.source),this.bottomMarker&&(m.destroy(this.bottomMarker),
delete this.bottomMarker),this.topMarker&&(m.destroy(this.topMarker),delete this.topMarker);
}),onDndCancel:s.hitch(this,function(){c.prototype.onDndCancel.call(this.source),
this._hide(this.bottomMarker),this._hide(this.topMarker)})}),this._source_conn=n.connect(this.source,"onDndDrop",this,"_onDndDrop"),
this._source_sub=n.subscribe("/dnd/drop/before",this,"_onDndDropBefore"),this.source.startup();
}},_hide:function(t){m.style(t,{top:"-10000px",visibility:"hidden"})},_onDndDropBefore:function(t,e,o){
if(b.manager().target===this.source){this.source._targetNode=this.source.targetAnchor,
this.source._beforeTarget=this.source.before;var i=this.grid.views.views,r=i[t.viewIndex],s=i[this.index];
s!=r&&(r.convertColPctToFixed(),s.convertColPctToFixed())}},_onDndDrop:function(t,e,o){
if(b.manager().target!==this.source)return void(b.manager().source===this.source&&(this._removingColumn=!0));
this._hide(this.bottomMarker),this._hide(this.topMarker);var i=function(t){return t?m.attr(t,"idx"):null;
},r=m.marginBox(e[0]).w;if(t.viewIndex!==this.index){var s=this.grid.views.views,n=s[t.viewIndex],h=s[this.index];
n.viewWidth&&"auto"!=n.viewWidth&&n.setColumnsWidth(n.getColumnsWidth()-r),h.viewWidth&&"auto"!=h.viewWidth&&h.setColumnsWidth(h.getColumnsWidth());
}var d=this.source._targetNode,l=this.source._beforeTarget;!this.grid.isLeftToRight()&&(l=!l);
var a=this.grid.layout,c=this.index;delete this.source._targetNode,delete this.source._beforeTarget,
a.moveColumn(t.viewIndex,c,i(e[0]),i(d),l)},renderHeader:function(){this.headerContentNode.innerHTML=this.header.generateHtml(this._getHeaderContent),
this.flexCells&&(this.contentWidth=this.getContentWidth(),this.headerContentNode.firstChild.style.width=this.contentWidth),
v.fire(this,"onAfterRow",[-1,this.structure.cells,this.headerContentNode])},_getHeaderContent:function(t){
var e=t.name||t.grid.getCellName(t);/^\s+$/.test(e)&&(e="&nbsp;");var o=['<div class="dojoxGridSortNode'];
return t.index!=t.grid.getSortIndex()?o.push('">'):o=o.concat([" ",t.grid.sortInfo>0?"dojoxGridSortUp":"dojoxGridSortDown",'"><div class="dojoxGridArrowButtonChar">',t.grid.sortInfo>0?"&#9650;":"&#9660;",'</div><div class="dojoxGridArrowButtonNode" role="presentation"></div>','<div class="dojoxGridColCaption">']),
o=o.concat([e,"</div></div>"]),o.join("")},resize:function(){this.adaptHeight(),this.adaptWidth();
},hasHScrollbar:function(t){var e=this._hasHScroll||!1;if(void 0==this._hasHScroll||t)if(this.noscroll)this._hasHScroll=!1;else{
var o=m.style(this.scrollboxNode,"overflow");"hidden"==o?this._hasHScroll=!1:"scroll"==o?this._hasHScroll=!0:this._hasHScroll=this.scrollboxNode.offsetWidth-this.getScrollbarWidth()<this.contentNode.offsetWidth;
}return e!==this._hasHScroll&&this.grid.update(),this._hasHScroll},hasVScrollbar:function(t){
var e=this._hasVScroll||!1;if(void 0==this._hasVScroll||t)if(this.noscroll)this._hasVScroll=!1;else{
var o=m.style(this.scrollboxNode,"overflow");"hidden"==o?this._hasVScroll=!1:"scroll"==o?this._hasVScroll=!0:this._hasVScroll=this.scrollboxNode.scrollHeight>this.scrollboxNode.clientHeight;
}return e!==this._hasVScroll&&this.grid.update(),this._hasVScroll},convertColPctToFixed:function(){
var t=!1;this.grid.initialWidth="";var e=d("th",this.headerContentNode),o=r.map(e,function(e,o){
var i=e.style.width;if(m.attr(e,"vIdx",o),i&&"%"==i.slice(-1))t=!0;else if(i&&"px"==i.slice(-2))return window.parseInt(i,10);
return m.contentBox(e).w});return t?(r.forEach(this.grid.layout.cells,function(t,e){
if(t.view==this){var i=t.view.getHeaderCellNode(t.index);if(i&&m.hasAttr(i,"vIdx")){
var r=window.parseInt(m.attr(i,"vIdx"));this.setColWidth(e,o[r]),m.removeAttr(i,"vIdx");
}}},this),!0):!1},adaptHeight:function(t){if(!this.grid._autoHeight){var e=this.domNode.style.height&&parseInt(this.domNode.style.height.replace(/px/,""),10)||this.domNode.clientHeight,o=this,i=function(){
var t;for(var e in o.grid.views.views)if(t=o.grid.views.views[e],t!==o&&t.hasHScrollbar())return!0;
return!1};(t||this.noscroll&&i())&&(e-=g.getScrollbar().h),v.setStyleHeightPx(this.scrollboxNode,e);
}this.hasVScrollbar(!0)},adaptWidth:function(){this.flexCells&&(this.contentWidth=this.getContentWidth(),
this.headerContentNode.firstChild.style.width=this.contentWidth);var t=this.scrollboxNode.offsetWidth-this.getScrollbarWidth();
this._removingColumn?(t=Math.min(t,this.getColumnsWidth())+"px",this._removingColumn=!1):t=Math.max(t,this.getColumnsWidth())+"px";
var e=this.contentNode;e.style.width=t,this.hasHScrollbar(!0)},setSize:function(t,e){
var o=this.domNode.style,i=this.headerNode.style;t&&(o.width=t,i.width=t),o.height=e>=0?e+"px":"";
},renderRow:function(t){var e=this.createRowNode(t);return this.buildRow(t,e),e},
createRowNode:function(t){var e=document.createElement("div");return e.className=this.classTag+"Row",
this instanceof o.grid._RowSelector?m.attr(e,"role","presentation"):(m.attr(e,"role","row"),
"none"!=this.grid.selectionMode&&e.setAttribute("aria-selected","false")),e[v.gridViewTag]=this.id,
e[v.rowIndexTag]=t,this.rowNodes[t]=e,e},buildRow:function(t,e){this.buildRowContent(t,e),
this.styleRow(t,e)},buildRowContent:function(t,e){e.innerHTML=this.content.generateHtml(t,t),
this.flexCells&&this.contentWidth&&(e.firstChild.style.width=this.contentWidth),v.fire(this,"onAfterRow",[t,this.structure.cells,e]);
},rowRemoved:function(t){t>=0&&this._cleanupRowWidgets(this.getRowNode(t)),this.grid.edit.save(this,t),
delete this.rowNodes[t]},getRowNode:function(t){return this.rowNodes[t]},getCellNode:function(t,e){
var o=this.getRowNode(t);return o?this.content.getCellNode(o,e):void 0},getHeaderCellNode:function(t){
return this.headerContentNode?this.header.getCellNode(this.headerContentNode,t):void 0;
},styleRow:function(t,e){e._style=x(e),this.styleRowNode(t,e)},styleRowNode:function(t,e){
e&&this.doStyleRowNode(t,e)},doStyleRowNode:function(t,e){this.grid.styleRowNode(t,e);
},updateRow:function(t){var e=this.getRowNode(t);return e&&(e.style.height="",this.buildRow(t,e)),
e},updateRowStyles:function(t){this.styleRowNode(t,this.getRowNode(t))},lastTop:0,
firstScroll:0,_nativeScroll:!1,doscroll:function(t){(h("ff")>=13||h("chrome"))&&(this._nativeScroll=!0);
var e=this.grid.isLeftToRight();if(this.firstScroll<2){if(!e&&1==this.firstScroll||e&&0===this.firstScroll){
var o=m.marginBox(this.headerNodeContainer);h("ie")?this.headerNodeContainer.style.width=o.w+this.getScrollbarWidth()+"px":h("mozilla")&&(this.headerNodeContainer.style.width=o.w-this.getScrollbarWidth()+"px",
this.scrollboxNode.scrollLeft=e?this.scrollboxNode.clientWidth-this.scrollboxNode.scrollWidth:this.scrollboxNode.scrollWidth-this.scrollboxNode.clientWidth);
}this.firstScroll++}this.headerNode.scrollLeft=this.scrollboxNode.scrollLeft;var i=this.scrollboxNode.scrollTop;
i!==this.lastTop&&this.grid.scrollTo(i),this._nativeScroll=!1},setScrollTop:function(t){
return this.lastTop=t,this._nativeScroll||(this.scrollboxNode.scrollTop=t),this.scrollboxNode.scrollTop;
},doContentEvent:function(t){this.content.decorateEvent(t)&&this.grid.onContentEvent(t);
},doHeaderEvent:function(t){this.header.decorateEvent(t)&&this.grid.onHeaderEvent(t);
},dispatchContentEvent:function(t){return this.content.dispatchEvent(t)},dispatchHeaderEvent:function(t){
return this.header.dispatchEvent(t)},setColWidth:function(t,e){this.grid.setCellWidth(t,e+"px");
},update:function(){if(this.domNode){this.content.update(),this.grid.update();var t=this.scrollboxNode.scrollLeft;
this.scrollboxNode.scrollLeft=t,this.headerNode.scrollLeft=t}}}),N=i("dojox.grid._GridAvatar",w,{
construct:function(){var t=l.doc,e=t.createElement("table");e.cellPadding=e.cellSpacing="0",
e.className="dojoxGridDndAvatar",e.style.position="absolute",e.style.zIndex=1999,
e.style.margin="0px";var o=t.createElement("tbody"),i=t.createElement("tr"),r=t.createElement("td"),s=t.createElement("td");
i.className="dojoxGridDndAvatarItem",s.className="dojoxGridDndAvatarItemImage",s.style.width="16px";
var n,h=this.manager.source;if(h.creator)n=h._normalizedCreator(h.getItem(this.manager.nodes[0].id).data,"avatar").node;else{
n=this.manager.nodes[0].cloneNode(!0);var d,a;if("tr"==n.tagName.toLowerCase())d=t.createElement("table"),
a=t.createElement("tbody"),a.appendChild(n),d.appendChild(a),n=d;else if("th"==n.tagName.toLowerCase()){
d=t.createElement("table"),a=t.createElement("tbody");var c=t.createElement("tr");
d.cellPadding=d.cellSpacing="0",c.appendChild(n),a.appendChild(c),d.appendChild(a),
n=d}}n.id="",r.appendChild(n),i.appendChild(s),i.appendChild(r),m.style(i,"opacity",.9),
o.appendChild(i),e.appendChild(o),this.node=e;var u=b.manager();this.oldOffsetY=u.OFFSET_Y,
u.OFFSET_Y=1},destroy:function(){b.manager().OFFSET_Y=this.oldOffsetY,this.inherited(arguments);
}}),_=b.manager().makeAvatar;return b.manager().makeAvatar=function(){var t=this.source;
return void 0===t.viewIndex||m.hasClass(l.body(),"dijit_a11y")?_.call(b.manager()):new N(this);
},C});