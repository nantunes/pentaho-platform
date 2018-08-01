define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/_base/html","dojo/_base/event","dojo/query","dojo/string","dojo/keys","dojo/text!../templates/Pagination.html","./Dialog","./_StoreLayer","../_Plugin","../../EnhancedGrid","dijit/form/Button","dijit/form/NumberTextBox","dijit/focus","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojox/html/metrics","dojo/i18n!../nls/Pagination"],function(t,e,i,o,s,n,a,r,h,g,d,u,c,l,p,_,P,f,S,v,x,m,w){
var N=e("dojox.grid.enhanced.plugins.pagination._GotoPagePane",[S,v,x],{templateString:"<div><div class='dojoxGridDialogMargin' dojoAttachPoint='_mainMsgNode'></div><div class='dojoxGridDialogMargin'><input dojoType='dijit.form.NumberTextBox' style='width: 50px;' dojoAttachPoint='_pageInputBox' dojoAttachEvent='onKeyUp: _onKey'></input><label dojoAttachPoint='_pageLabelNode'></label></div><div class='dojoxGridDialogButton'><button dojoType='dijit.form.Button' dojoAttachPoint='_confirmBtn' dojoAttachEvent='onClick: _onConfirm'></button><button dojoType='dijit.form.Button' dojoAttachPoint='_cancelBtn' dojoAttachEvent='onClick: _onCancel'></button></div></div>",
widgetsInTemplate:!0,dlg:null,postMixInProperties:function(){this.plugin=this.dlg.plugin;
},postCreate:function(){this.inherited(arguments),this._mainMsgNode.innerHTML=this.plugin._nls[12],
this._confirmBtn.set("label",this.plugin._nls[14]),this._confirmBtn.set("disabled",!0),
this._cancelBtn.set("label",this.plugin._nls[15])},_onConfirm:function(t){this._pageInputBox.isValid()&&""!==this._pageInputBox.getDisplayedValue()&&(this.plugin.currentPage(this._pageInputBox.parse(this._pageInputBox.getDisplayedValue())),
this.dlg._gotoPageDialog.hide(),this._pageInputBox.reset()),y(t)},_onCancel:function(t){
this._pageInputBox.reset(),this.dlg._gotoPageDialog.hide(),y(t)},_onKey:function(t){
this._confirmBtn.set("disabled",!this._pageInputBox.isValid()||""==this._pageInputBox.getDisplayedValue()),
t.altKey||t.metaKey||t.keyCode!==g.ENTER||this._onConfirm(t)}}),z=e("dojox.grid.enhanced.plugins.pagination._GotoPageDialog",null,{
pageCount:0,dlgPane:null,constructor:function(t){this.plugin=t,this.dlgPane=new N({
dlg:this}),this.dlgPane.startup(),this._gotoPageDialog=new u({refNode:t.grid.domNode,
title:this.plugin._nls[11],content:this.dlgPane}),this._gotoPageDialog.startup()},
_updatePageCount:function(){this.pageCount=this.plugin.getTotalPageNum(),this.dlgPane._pageInputBox.constraints={
fractional:!1,min:1,max:this.pageCount},this.dlgPane._pageLabelNode.innerHTML=h.substitute(this.plugin._nls[13],[this.pageCount]);
},showDialog:function(){this._updatePageCount(),this._gotoPageDialog.show()},destroy:function(){
this._gotoPageDialog.destroy()}}),b=e("dojox.grid.enhanced.plugins._ForcedPageStoreLayer",c._StoreLayer,{
tags:["presentation"],constructor:function(t){this._plugin=t},_fetch:function(e){
var i=this,o=i._plugin,n=o.grid,a=e.scope||t.global,r=e.onBegin;e.start=(o._currentPage-1)*o._currentPageSize+e.start,
i.startIdx=e.start,i.endIdx=e.start+o._currentPageSize-1;var h=o._paginator;return o._showAll||(o._showAll=!h.sizeSwitch&&!h.pageStepper&&!h.gotoButton),
r&&o._showAll?e.onBegin=function(t,e){o._maxSize=o._currentPageSize=t,i.startIdx=0,
i.endIdx=t-1,o._paginator._update(),e.onBegin=r,e.onBegin.call(a,t,e)}:r&&(e.onBegin=function(t,e){
e.start=0,e.count=o._currentPageSize,o._maxSize=t,i.endIdx=i.endIdx>=t?t-1:i.endIdx,
i.startIdx>t&&0!==t&&(n._pending_requests[e.start]=!1,o.firstPage()),o._paginator._update(),
e.onBegin=r,e.onBegin.call(a,Math.min(o._currentPageSize,t-i.startIdx),e)}),s.hitch(this._store,this._originFetch)(e);
}}),y=function(t){try{t&&a.stop(t)}catch(e){}},j=e("dojox.grid.enhanced.plugins.pagination._Focus",null,{
_focusedNode:null,_isFocused:!1,constructor:function(t){this._pager=t;t.plugin.grid.focus;
t.plugin.connect(t,"onSwitchPageSize",s.hitch(this,"_onActive")),t.plugin.connect(t,"onPageStep",s.hitch(this,"_onActive")),
t.plugin.connect(t,"onShowGotoPageDialog",s.hitch(this,"_onActive")),t.plugin.connect(t,"_update",s.hitch(this,"_moveFocus"));
},_onFocus:function(t,e){var i;if(this._isFocused){if(e&&this._focusedNode)for(var o=e>0?-1:1,s=parseInt(this._focusedNode.getAttribute("tabindex"),10)+o;s>=-3&&0>s&&!(i=r("[tabindex="+s+"]",this._pager.domNode)[0]);)s+=o;
}else i=this._focusedNode||r("[tabindex]",this._pager.domNode)[0];return this._focus(i,t);
},_onBlur:function(t,e){if(!e||!this._focusedNode)return this._isFocused=!1,this._focusedNode&&n.hasClass(this._focusedNode,"dojoxGridButtonFocus")&&n.removeClass(this._focusedNode,"dojoxGridButtonFocus"),
!0;for(var i,o=e>0?-1:1,s=parseInt(this._focusedNode.getAttribute("tabindex"),10)+o;s>=-3&&0>s&&!(i=r("[tabindex="+s+"]",this._pager.domNode)[0]);)s+=o;
return i||(this._isFocused=!1,n.hasClass(this._focusedNode,"dojoxGridButtonFocus")&&n.removeClass(this._focusedNode,"dojoxGridButtonFocus")),
i?!1:!0},_onMove:function(t,e,i){if(this._focusedNode)for(var o=this._focusedNode.getAttribute("tabindex"),s=1==e?"nextSibling":"previousSibling",n=this._focusedNode[s];n;){
if(n.getAttribute("tabindex")==o){this._focus(n);break}n=n[s]}},_focus:function(e,i){
return e?(this._isFocused=!0,t.isIE&&this._focusedNode&&n.removeClass(this._focusedNode,"dojoxGridButtonFocus"),
this._focusedNode=e,e.focus(),t.isIE&&n.addClass(e,"dojoxGridButtonFocus"),y(i),!0):!1;
},_onActive:function(t){this._focusedNode=t.target,this._isFocused||this._pager.plugin.grid.focus.focusArea("pagination"+this._pager.position);
},_moveFocus:function(){if(this._focusedNode&&!this._focusedNode.getAttribute("tabindex")){
for(var e=this._focusedNode.nextSibling;e;){if(e.getAttribute("tabindex"))return void this._focus(e);
e=e.nextSibling}for(var i=this._focusedNode.previousSibling;i;){if(i.getAttribute("tabindex"))return void this._focus(i);
i=i.previousSibling}this._focusedNode=null,this._onBlur()}else t.isIE&&this._focusedNode&&n.addClass(this._focusedNode,"dojoxGridButtonFocus");
}}),B=e("dojox.grid.enhanced.plugins._Paginator",[S,v],{templateString:d,constructor:function(t){
s.mixin(this,t),this.grid=this.plugin.grid},postCreate:function(){this.inherited(arguments);
var t=this,e=this.grid;this.plugin.connect(e,"_resize",s.hitch(this,"_resetGridHeight")),
this._originalResize=e.resize,e.resize=function(i,o){t._changeSize=i,t._resultSize=o,
t._originalResize.apply(e,arguments)},this.focus=j(this),this._placeSelf()},destroy:function(){
this.inherited(arguments),this.grid.focus.removeArea("pagination"+this.position),
this._gotoPageDialog&&this._gotoPageDialog.destroy(),this.grid.resize=this._originalResize;
},onSwitchPageSize:function(t){},onPageStep:function(t){},onShowGotoPageDialog:function(t){},
_update:function(){this._updateDescription(),this._updatePageStepper(),this._updateSizeSwitch(),
this._updateGotoButton()},_registerFocus:function(t){var e=this.grid.focus,i="pagination"+this.position;
this.focus;e.addArea({name:i,onFocus:s.hitch(this.focus,"_onFocus"),onBlur:s.hitch(this.focus,"_onBlur"),
onMove:s.hitch(this.focus,"_onMove")}),e.placeArea(i,t?"before":"after",t?"header":"content");
},_placeSelf:function(){var t=this.grid,e="top"==this.position;this.placeAt(e?t.viewsHeaderNode:t.viewsNode,e?"before":"after"),
this._registerFocus(e)},_resetGridHeight:function(t,e){var o=this.grid;if(t=t||this._changeSize,
e=e||this._resultSize,delete this._changeSize,delete this._resultSize,!o._autoHeight){
var s=o._getPadBorder().h;this.plugin.gh||(this.plugin.gh=(o.domNode.clientHeight||n.style(o.domNode,"height"))+2*s),
e&&(t=e),t&&(this.plugin.gh=n.contentBox(o.domNode).h+2*s);var a=this.plugin.gh,r=o._getHeaderHeight(),h=n.marginBox(this.domNode).h;
if("number"==typeof o.autoHeight){var g=a+h-s;n.style(o.domNode,"height",g+"px"),
n.style(o.viewsNode,"height",g-h-r+"px"),this._styleMsgNode(r,n.marginBox(o.viewsNode).w,g-h-r);
}else{var d=a-h-r-s;n.style(o.viewsNode,"height",d+"px");var u=i.some(o.views.views,function(t){
return t.hasHScrollbar()});i.forEach(o.viewsNode.childNodes,function(t){n.style(t,"height",d+"px");
}),i.forEach(o.views.views,function(t){t.scrollboxNode&&(!t.hasHScrollbar()&&u?n.style(t.scrollboxNode,"height",d-m.getScrollbar().h+"px"):n.style(t.scrollboxNode,"height",d+"px"));
}),this._styleMsgNode(r,n.marginBox(o.viewsNode).w,d)}}},_styleMsgNode:function(t,e,i){
var o=this.grid.messagesNode;n.style(o,{position:"absolute",top:t+"px",width:e+"px",
height:i+"px","z-Index":"100"})},_updateDescription:function(){var t=this.plugin.forcePageStoreLayer,e=this.plugin._maxSize,i=this.plugin._nls,o=function(){
return 0>=e||1==e?i[5]:i[4]};this.description&&this.descriptionDiv&&(this.descriptionDiv.innerHTML=e>0?h.substitute(i[0],[o(),e,t.startIdx+1,t.endIdx+1]):"0 "+o());
},_updateSizeSwitch:function(){n.style(this.sizeSwitchTd,"display",this.sizeSwitch?"":"none"),
this.sizeSwitch&&(this.sizeSwitchTd.childNodes.length<1&&this._createSizeSwitchNodes(),
this._updateSwitchNodesStyle())},_createSizeSwitchNodes:function(){var t=null,e=this.plugin._nls,o=s.hitch(this.plugin,"connect");
i.forEach(this.pageSizes,function(i){var a=isFinite(i)?h.substitute(e[2],[i]):e[1],r=isFinite(i)?i:e[16];
t=n.create("span",{innerHTML:r,title:a,value:i,tabindex:"-1"},this.sizeSwitchTd,"last"),
t.setAttribute("aria-label",a),o(t,"onclick",s.hitch(this,"_onSwitchPageSize")),o(t,"onkeydown",s.hitch(this,"_onSwitchPageSize")),
o(t,"onmouseover",function(t){n.addClass(t.target,"dojoxGridPageTextHover")}),o(t,"onmouseout",function(t){
n.removeClass(t.target,"dojoxGridPageTextHover")}),t=n.create("span",{innerHTML:"|"
},this.sizeSwitchTd,"last"),n.addClass(t,"dojoxGridSeparator")},this),n.destroy(t);
},_updateSwitchNodesStyle:function(){var t=null,e=function(t,e){e?(n.addClass(t,"dojoxGridActivedSwitch"),
n.removeAttr(t,"tabindex")):(n.addClass(t,"dojoxGridInactiveSwitch"),t.setAttribute("tabindex","-1"));
};i.forEach(this.sizeSwitchTd.childNodes,function(i){i.value&&(n.removeClass(i),t=i.value,
this.plugin._showAll?e(i,isNaN(parseInt(t,10))):e(i,this.plugin._currentPageSize==t));
},this)},_updatePageStepper:function(){n.style(this.pageStepperTd,"display",this.pageStepper?"":"none"),
this.pageStepper&&(this.pageStepperDiv.childNodes.length<1?(this._createPageStepNodes(),
this._createWardBtns()):this._resetPageStepNodes(),this._updatePageStepNodesStyle());
},_createPageStepNodes:function(){for(var t=this._getStartPage(),e=this._getStepPageSize(),i="",o=null,a=t,r=s.hitch(this.plugin,"connect");a<t+this.maxPageStep+1;a++)i=h.substitute(this.plugin._nls[3],[a]),
o=n.create("div",{innerHTML:a,value:a,title:i},this.pageStepperDiv,"last"),o.setAttribute("aria-label",i),
r(o,"onclick",s.hitch(this,"_onPageStep")),r(o,"onkeydown",s.hitch(this,"_onPageStep")),
r(o,"onmouseover",function(t){n.addClass(t.target,"dojoxGridPageTextHover")}),r(o,"onmouseout",function(t){
n.removeClass(t.target,"dojoxGridPageTextHover")}),n.style(o,"display",t+e>a?"":"none");
},_createWardBtns:function(){var t=this,e=this.plugin._nls,i={prevPage:"&#60;",firstPage:"&#171;",
nextPage:"&#62;",lastPage:"&#187;"},o=function(e,o,a){var r=n.create("div",{value:e,
title:o,tabindex:"-2"},t.pageStepperDiv,a);t.plugin.connect(r,"onclick",s.hitch(t,"_onPageStep")),
t.plugin.connect(r,"onkeydown",s.hitch(t,"_onPageStep")),r.setAttribute("aria-label",o);
var h=n.create("span",{value:e,title:o,innerHTML:i[e]},r,a);n.addClass(h,"dojoxGridWardButtonInner");
};o("prevPage",e[6],"first"),o("firstPage",e[7],"first"),o("nextPage",e[8],"last"),
o("lastPage",e[9],"last")},_resetPageStepNodes:function(){for(var t,e=this._getStartPage(),i=this._getStepPageSize(),o=this.pageStepperDiv.childNodes,s=null,a=e,r=2;r<o.length-2;r++,
a++)s=o[r],e+i>a?(t=h.substitute(this.plugin._nls[3],[a]),n.attr(s,{innerHTML:a,title:t,
value:a}),n.style(s,"display",""),s.setAttribute("aria-label",t)):n.style(s,"display","none");
},_updatePageStepNodesStyle:function(){var t=null,e=this.plugin.currentPage(),o=this.plugin.getTotalPageNum(),s=function(t,e,i){
var o=t.value,s=e?"dojoxGrid"+o+"Btn":"dojoxGridInactived",a=e?"dojoxGrid"+o+"BtnDisable":"dojoxGridActived";
i?(n.addClass(t,a),n.removeAttr(t,"tabindex")):(n.addClass(t,s),t.setAttribute("tabindex","-2"));
};i.forEach(this.pageStepperDiv.childNodes,function(i){if(n.removeClass(i),isNaN(parseInt(i.value,10))){
n.addClass(i,"dojoxGridWardButton");var a="prevPage"==i.value||"firstPage"==i.value?1:o;
s(i,!0,e===a)}else t=parseInt(i.value,10),s(i,!1,t===e||"none"===n.style(i,"display"));
},this)},_showGotoButton:function(t){this.gotoButton=t,this._updateGotoButton()},
_updateGotoButton:function(){return this.gotoButton?("none"==n.style(this.gotoPageTd,"display")&&n.style(this.gotoPageTd,"display",""),
this.gotoPageDiv.setAttribute("title",this.plugin._nls[10]),n.toggleClass(this.gotoPageDiv,"dojoxGridPaginatorGotoDivDisabled",this.plugin.getTotalPageNum()<=1),
void(this.plugin.getTotalPageNum()<=1?n.removeAttr(this.gotoPageDiv,"tabindex"):this.gotoPageDiv.setAttribute("tabindex","-3"))):(this._gotoPageDialog&&this._gotoPageDialog.destroy(),
n.removeAttr(this.gotoPageDiv,"tabindex"),void n.style(this.gotoPageTd,"display","none"));
},_openGotopageDialog:function(t){this.plugin.getTotalPageNum()<=1||("keydown"!==t.type||t.keyCode===g.ENTER||t.keyCode===g.SPACE)&&(this._gotoPageDialog||(this._gotoPageDialog=new z(this.plugin)),
this._gotoPageDialog.showDialog(),this.onShowGotoPageDialog(t))},_onSwitchPageSize:function(t){
("keydown"!==t.type||t.keyCode===g.ENTER||t.keyCode===g.SPACE)&&(this.onSwitchPageSize(t),
this.plugin.currentPageSize(t.target.value))},_onPageStep:function(t){if("keydown"!==t.type||t.keyCode===g.ENTER||t.keyCode===g.SPACE){
var e=this.plugin,i=t.target.value;this.onPageStep(t),isNaN(parseInt(i,10))?e[i]():e.currentPage(parseInt(i,10));
}},_getStartPage:function(){var t=this.plugin.currentPage(),e=this.maxPageStep,i=parseInt(e/2,10),o=this.plugin.getTotalPageNum();
return i>t||1>t-i||e>=o?1:i>o-t&&t-e>=0?o-e+1:t-i},_getStepPageSize:function(){var t=this._getStartPage(),e=this.plugin.getTotalPageNum(),i=this.maxPageStep;
return t+i>e?e-t+1:i}}),T=e("dojox.grid.enhanced.plugins.Pagination",l,{name:"pagination",
defaultPageSize:25,defaultPage:1,description:!0,sizeSwitch:!0,pageStepper:!0,gotoButton:!1,
pageSizes:[10,25,50,100,1/0],maxPageStep:7,position:"bottom",init:function(){var t=this.grid;
t.usingPagination=!0,this._initOptions(),this._currentPage=this.defaultPage,this._currentPageSize=this.grid.rowsPerPage=this.defaultPageSize,
this._store=t.store,this.forcePageStoreLayer=new b(this),c.wrap(t,"_storeLayerFetch",this.forcePageStoreLayer),
this._paginator=new B("top"!=this.option.position?s.mixin(this.option,{position:"bottom",
plugin:this}):s.mixin(this.option,{position:"top",plugin:this})),this._regApis()},
destroy:function(){this.inherited(arguments),this._paginator.destroy();var t=this.grid;
t.unwrap(this.forcePageStoreLayer.name()),t.scrollToRow=this._gridOriginalfuncs[0],
t._onNew=this._gridOriginalfuncs[1],t.removeSelectedRows=this._gridOriginalfuncs[2],
this._paginator=null,this._nls=null},currentPage:function(t){return t<=this.getTotalPageNum()&&t>0&&this._currentPage!==t&&(this._currentPage=t,
this.grid._refresh(!0),this.grid.resize()),this._currentPage},nextPage:function(){
this.currentPage(this._currentPage+1)},prevPage:function(){this.currentPage(this._currentPage-1);
},firstPage:function(){this.currentPage(1)},lastPage:function(){this.currentPage(this.getTotalPageNum());
},currentPageSize:function(t){if(!isNaN(t)){var e,i=this.grid,o=this._currentPageSize*(this._currentPage-1);
if(this._showAll=!isFinite(t),this.grid.usingPagination=!this._showAll,this._currentPageSize=this._showAll?this._maxSize:t,
i.rowsPerPage=this._showAll?this._defaultRowsPerPage:t,e=o+Math.min(this._currentPageSize,this._maxSize),
e>this._maxSize)this.lastPage();else{var s=Math.ceil(o/this._currentPageSize)+1;s!==this._currentPage?this.currentPage(s):this.grid._refresh(!0);
}this.grid.resize()}return this._currentPageSize},getTotalPageNum:function(){return Math.ceil(this._maxSize/this._currentPageSize);
},getTotalRowCount:function(){return this._maxSize},scrollToRow:function(t){var e=parseInt(t/this._currentPageSize,10)+1;
if(!(e>this.getTotalPageNum())){this.currentPage(e);var i=t%this._currentPageSize;
return this._gridOriginalfuncs[0](i)}},removeSelectedRows:function(){this._multiRemoving=!0,
this._gridOriginalfuncs[2].apply(),this._multiRemoving=!1,this.grid.store.save&&this.grid.store.save(),
this.grid.resize(),this.grid._refresh()},showGotoPageButton:function(t){this._paginator.gotoButton=t,
this._paginator._updateGotoButton()},gotoPage:function(e){t.deprecated("dojox.grid.enhanced.EnhancedGrid.gotoPage(page)","use dojox.grid.enhanced.EnhancedGrid.currentPage(page) instead","1.8"),
this.currentPage(e)},gotoFirstPage:function(){t.deprecated("dojox.grid.enhanced.EnhancedGrid.gotoFirstPage()","use dojox.grid.enhanced.EnhancedGrid.firstPage() instead","1.8"),
this.firstPage()},gotoLastPage:function(){t.deprecated("dojox.grid.enhanced.EnhancedGrid.gotoLastPage()","use dojox.grid.enhanced.EnhancedGrid.lastPage() instead","1.8"),
this.lastPage()},changePageSize:function(e){t.deprecated("dojox.grid.enhanced.EnhancedGrid.changePageSize(size)","use dojox.grid.enhanced.EnhancedGrid.currentPageSize(size) instead","1.8"),
this.currentPageSize(e)},_nls:null,_showAll:!1,_maxSize:0,_defaultRowsPerPage:25,
_currentPage:1,_currentPageSize:25,_initOptions:function(){if(this._defaultRowsPerPage=this.grid.rowsPerPage||25,
this.defaultPage=this.option.defaultPage>=1?parseInt(this.option.defaultPage,10):1,
this.option.description=void 0!==this.option.description?!!this.option.description:this.description,
this.option.sizeSwitch=void 0!==this.option.sizeSwitch?!!this.option.sizeSwitch:this.sizeSwitch,
this.option.pageStepper=void 0!==this.option.pageStepper?!!this.option.pageStepper:this.pageStepper,
this.option.gotoButton=void 0!==this.option.gotoButton?!!this.option.gotoButton:this.gotoButton,
s.isArray(this.option.pageSizes)){var t=[];i.forEach(this.option.pageSizes,function(e){
e="number"==typeof e?e:parseInt(e,10),!isNaN(e)&&e>0?t.push(e):i.indexOf(t,1/0)<0&&t.push(1/0);
},this),this.option.pageSizes=t.sort(function(t,e){return t-e})}else this.option.pageSizes=this.pageSizes;
this.defaultPageSize=this.option.defaultPageSize>=1?parseInt(this.option.defaultPageSize,10):this.pageSizes[0],
this.option.maxPageStep=this.option.maxPageStep>0?this.option.maxPageStep:this.maxPageStep,
this.option.position=s.isString(this.option.position)?this.option.position.toLowerCase():this.position,
this._nls=[w.descTemplate,w.allItemsLabelTemplate,w.pageSizeLabelTemplate,w.pageStepLabelTemplate,w.itemTitle,w.singularItemTitle,w.prevTip,w.firstTip,w.nextTip,w.lastTip,w.gotoButtonTitle,w.dialogTitle,w.dialogIndication,w.pageCountIndication,w.dialogConfirm,w.dialogCancel,w.all];
},_regApis:function(){var t=this.grid;t.currentPage=s.hitch(this,this.currentPage),
t.nextPage=s.hitch(this,this.nextPage),t.prevPage=s.hitch(this,this.prevPage),t.firstPage=s.hitch(this,this.firstPage),
t.lastPage=s.hitch(this,this.lastPage),t.currentPageSize=s.hitch(this,this.currentPageSize),
t.showGotoPageButton=s.hitch(this,this.showGotoPageButton),t.getTotalRowCount=s.hitch(this,this.getTotalRowCount),
t.getTotalPageNum=s.hitch(this,this.getTotalPageNum),t.gotoPage=s.hitch(this,this.gotoPage),
t.gotoFirstPage=s.hitch(this,this.gotoFirstPage),t.gotoLastPage=s.hitch(this,this.gotoLastPage),
t.changePageSize=s.hitch(this,this.changePageSize),this._gridOriginalfuncs=[s.hitch(t,t.scrollToRow),s.hitch(t,t._onNew),s.hitch(t,t.removeSelectedRows)],
t.scrollToRow=s.hitch(this,this.scrollToRow),t.removeSelectedRows=s.hitch(this,this.removeSelectedRows),
t._onNew=s.hitch(this,this._onNew),this.connect(t,"_onDelete",s.hitch(this,this._onDelete));
},_onNew:function(t,e){var i=this.getTotalPageNum();((this._currentPage===i||0===i)&&this.grid.get("rowCount")<this._currentPageSize||this._showAll)&&(s.hitch(this.grid,this._gridOriginalfuncs[1])(t,e),
this.forcePageStoreLayer.endIdx++),this._maxSize++,this._showAll&&this._currentPageSize++,
this._showAll&&this.grid.autoHeight?this.grid._refresh():this._paginator._update();
},_onDelete:function(){this._multiRemoving||(this.grid.resize(),this._showAll&&this.grid._refresh()),
0===this.grid.get("rowCount")&&this.prevPage()}});return p.registerPlugin(T),T});