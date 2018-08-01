define(["dojo/_base/declare","dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/_base/sniff","dojo/_base/event","dojo/_base/html","dojo/_base/window","dojo/query","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/fx","dojo/_base/fx","dojo/string","dijit/focus","dojo/text!../../templates/FilterBar.html"],function(t,i,e,o,s,l,r,n,a,u,h,d,f,c,g,_,p){
var B="dojoxGridFBarHover",F="dojoxGridFBarFiltered",m=function(t){try{t&&t.preventDefault&&l.stop(t);
}catch(i){}};return t("dojox.grid.enhanced.plugins.filter.FilterBar",[u,h,d],{templateString:p,
widgetsInTemplate:!0,_timeout_statusTooltip:300,_handle_statusTooltip:null,_curColIdx:-1,
plugin:null,postMixInProperties:function(){var t=this.plugin,i=t.nls;this._filterBarDefBtnLabel=i.filterBarDefButton,
this._filterBarClearBtnLabel=i.filterBarClearButton,this._closeFilterBarBtnLabel=i.closeFilterBarBtn;
var e=t.args.itemsName||i.defaultItemsName;this._noFilterMsg=g.substitute(i.filterBarMsgNoFilterTemplate,["",e]);
var s=this.plugin.args.statusTipTimeout;"number"==typeof s&&(this._timeout_statusTooltip=s);
var l=t.grid;l.showFilterBar=o.hitch(this,"showFilterBar"),l.toggleFilterBar=o.hitch(this,"toggleFilterBar"),
l.isFilterBarShown=o.hitch(this,"isFilterBarShown")},postCreate:function(){this.inherited(arguments),
this.plugin.args.closeFilterbarButton||r.style(this.closeFilterBarButton.domNode,"display","none");
var t=this,i=this.plugin.grid,e=this.oldGetHeaderHeight=o.hitch(i,i._getHeaderHeight);
this.placeAt(i.viewsHeaderNode,"after"),this.connect(this.plugin.filterDefDialog,"showDialog","_onShowFilterDefDialog"),
this.connect(this.plugin.filterDefDialog,"closeDialog","_onCloseFilterDefDialog"),
this.connect(i.layer("filter"),"onFiltered",this._onFiltered),this.defineFilterButton.domNode.title=this.plugin.nls.filterBarDefButton,
r.hasClass(n.body(),"dijit_a11y")&&this.defineFilterButton.set("label",this.plugin.nls.a11yFilterBarDefButton),
this.connect(this.defineFilterButton.domNode,"click",m),this.connect(this.clearFilterButton.domNode,"click",m),
this.connect(this.closeFilterBarButton.domNode,"click",m),this.toggleClearFilterBtn(!0),
this._initAriaInfo(),i._getHeaderHeight=function(){return e()+r.marginBox(t.domNode).h;
},i.focus.addArea({name:"filterbar",onFocus:o.hitch(this,this._onFocusFilterBar,!1),
onBlur:o.hitch(this,this._onBlurFilterBar)}),i.focus.placeArea("filterbar","after","header");
},uninitialize:function(){var t=this.plugin.grid;t._getHeaderHeight=this.oldGetHeaderHeight,
t.focus.removeArea("filterbar"),this.plugin=null},isFilterBarShown:function(){return"none"!=r.style(this.domNode,"display");
},showFilterBar:function(t,e,l){var n=this.plugin.grid;if(e){if(Boolean(t)==this.isFilterBarShown())return;
l=l||{};var a=[],u=500;a.push(f[t?"wipeIn":"wipeOut"](o.mixin({node:this.domNode,
duration:u},l)));var h=n.views.views[0].domNode.offsetHeight,d={duration:u,properties:{
height:{end:o.hitch(this,function(){var i=this.domNode.scrollHeight;return s("ff")&&(i-=2),
t?h-i:h+i})}}};i.forEach(n.views.views,function(t){a.push(c.animateProperty(o.mixin({
node:t.domNode},d,l)),c.animateProperty(o.mixin({node:t.scrollboxNode},d,l)))}),a.push(c.animateProperty(o.mixin({
node:n.viewsNode},d,l))),f.combine(a).play()}else r.style(this.domNode,"display",t?"":"none"),
n.update()},toggleFilterBar:function(t,i){this.showFilterBar(!this.isFilterBarShown(),t,i);
},getColumnIdx:function(t){for(var i=a("[role='columnheader']",this.plugin.grid.viewsHeaderNode),e=-1,o=i.length-1;o>=0;--o){
var s=r.position(i[o]);if(t>=s.x&&t<s.x+s.w){e=o;break}}return e>=0&&this.plugin.grid.layout.cells[e].filterable!==!1?e:-1;
},toggleClearFilterBtn:function(t){r.style(this.clearFilterButton.domNode,"display",t?"none":"");
},_closeFilterBar:function(t){m(t);var i=this.plugin.filterDefDialog.getCriteria();
if(i){var o=e.connect(this.plugin.filterDefDialog,"clearFilter",this,function(){this.showFilterBar(!1,!0),
e.disconnect(o)});this._clearFilterDefDialog(t)}else this.showFilterBar(!1,!0)},_showFilterDefDialog:function(t){
m(t),this.plugin.filterDefDialog.showDialog(this._curColIdx),this.plugin.grid.focus.focusArea("filterbar");
},_clearFilterDefDialog:function(t){m(t),this.plugin.filterDefDialog.onClearFilter(),
this.plugin.grid.focus.focusArea("filterbar")},_onEnterButton:function(t){this._onBlurFilterBar(),
m(t)},_onMoveButton:function(t){this._onBlurFilterBar()},_onLeaveButton:function(t){
this._leavingBtn=!0},_onShowFilterDefDialog:function(t){"number"==typeof t&&(this._curColIdx=t),
this._defPaneIsShown=!0},_onCloseFilterDefDialog:function(){this._defPaneIsShown=!1,
this._curColIdx=-1,_.focus(this.defineFilterButton.domNode)},_onClickFilterBar:function(t){
m(t),this._clearStatusTipTimeout(),this.plugin.grid.focus.focusArea("filterbar"),
this.plugin.filterDefDialog.showDialog(this.getColumnIdx(t.clientX))},_onMouseEnter:function(t){
this._onFocusFilterBar(!0,null),this._updateTipPosition(t),this._setStatusTipTimeout();
},_onMouseMove:function(t){this._leavingBtn&&(this._onFocusFilterBar(!0,null),this._leavingBtn=!1),
this._isFocused&&(this._setStatusTipTimeout(),this._highlightHeader(this.getColumnIdx(t.clientX)),
this._handle_statusTooltip&&this._updateTipPosition(t))},_onMouseLeave:function(t){
this._onBlurFilterBar()},_updateTipPosition:function(t){this._tippos={x:t.pageX,y:t.pageY
}},_onFocusFilterBar:function(t,i,e){if(!this.isFilterBarShown())return!1;if(this._isFocused=!0,
r.addClass(this.domNode,B),!t){var o="none"!==r.style(this.clearFilterButton.domNode,"display"),s="none"!==r.style(this.closeFilterBarButton.domNode,"display");
"undefined"==typeof this._focusPos&&(e>0?this._focusPos=0:(s?this._focusPos=1:this._focusPos=0,
o&&++this._focusPos)),0===this._focusPos?_.focus(this.defineFilterButton.focusNode):1===this._focusPos&&o?_.focus(this.clearFilterButton.focusNode):_.focus(this.closeFilterBarButton.focusNode);
}return m(i),!0},_onBlurFilterBar:function(t,i){this._isFocused&&(this._isFocused=!1,
r.removeClass(this.domNode,B),this._clearStatusTipTimeout(),this._clearHeaderHighlight());
var e=!0;if(i){var o=3;if("none"===r.style(this.closeFilterBarButton.domNode,"display")&&--o,
"none"===r.style(this.clearFilterButton.domNode,"display")&&--o,1==o)delete this._focusPos;else{
for(var s=this._focusPos,l=s+i;0>l;l+=o);l%=o,i>0&&s>l||0>i&&l>s?delete this._focusPos:(this._focusPos=l,
e=!1)}}return e},_onFiltered:function(t,i){var e=this.plugin,o=e.args.itemsName||e.nls.defaultItemsName,s="",l=e.grid,n=l.layer("filter");
n.filterDef()?(s=g.substitute(e.nls.filterBarMsgHasFilterTemplate,[t,i,o]),r.addClass(this.domNode,F)):(s=g.substitute(e.nls.filterBarMsgNoFilterTemplate,[i,o]),
r.removeClass(this.domNode,F)),this.statusBarNode.innerHTML=s,this._focusPos=0},_initAriaInfo:function(){
this.defineFilterButton.domNode.setAttribute("aria-label",this.plugin.nls.waiFilterBarDefButton),
this.clearFilterButton.domNode.setAttribute("aria-label",this.plugin.nls.waiFilterBarClearButton);
},_isInColumn:function(t,i,e){var o=r.position(i);return t>=o.x&&t<o.x+o.w},_setStatusTipTimeout:function(){
this._clearStatusTipTimeout(),this._defPaneIsShown||(this._handle_statusTooltip=setTimeout(o.hitch(this,this._showStatusTooltip),this._timeout_statusTooltip));
},_clearStatusTipTimeout:function(){clearTimeout(this._handle_statusTooltip),this._handle_statusTooltip=null;
},_showStatusTooltip:function(){this._handle_statusTooltip=null,this.plugin&&this.plugin.filterStatusTip.showDialog(this._tippos.x,this._tippos.y,this.getColumnIdx(this._tippos.x));
},_highlightHeader:function(t){if(t!=this._previousHeaderIdx){var i=this.plugin.grid,e=i.getCell(this._previousHeaderIdx);
e&&r.removeClass(e.getHeaderNode(),"dojoxGridCellOver"),e=i.getCell(t),e&&r.addClass(e.getHeaderNode(),"dojoxGridCellOver"),
this._previousHeaderIdx=t}},_clearHeaderHighlight:function(){if("undefined"!=typeof this._previousHeaderIdx){
var t=this.plugin.grid,i=t.getCell(this._previousHeaderIdx);i&&t.onHeaderCellMouseOut({
cellNode:i.getHeaderNode()}),delete this._previousHeaderIdx}}})});