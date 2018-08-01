dojo.provide("dojox.widget.RollingList"),dojo.experimental("dojox.widget.RollingList"),
dojo.require("dojo.window"),dojo.require("dijit.layout.ContentPane"),dojo.require("dijit._Templated"),
dojo.require("dijit._Contained"),dojo.require("dijit.layout._LayoutWidget"),dojo.require("dijit.Menu"),
dojo.require("dijit.form.Button"),dojo.require("dijit.focus"),dojo.require("dijit._base.focus"),
dojo.require("dojox.html.metrics"),dojo.require("dojo.i18n"),dojo.requireLocalization("dijit","common"),
dojo.declare("dojox.widget._RollingListPane",[dijit.layout.ContentPane,dijit._Templated,dijit._Contained],{
templateString:'<div class="dojoxRollingListPane"><table><tbody><tr><td dojoAttachPoint="containerNode"></td></tr></tbody></div>',
parentWidget:null,parentPane:null,store:null,items:null,query:null,queryOptions:null,
_focusByNode:!0,minWidth:0,_setContentAndScroll:function(t,e){this._setContent(t,e),
this.parentWidget.scrollIntoView(this)},_updateNodeWidth:function(t,e){t.style.width="";
var i=dojo.marginBox(t).w;e>i&&dojo.marginBox(t,{w:e})},_onMinWidthChange:function(t){
this._updateNodeWidth(this.domNode,t)},_setMinWidthAttr:function(t){t!==this.minWidth&&(this.minWidth=t,
this._onMinWidthChange(t))},startup:function(){this._started||(this.store&&this.store.getFeatures()["dojo.data.api.Notification"]&&window.setTimeout(dojo.hitch(this,function(){
this.connect(this.store,"onSet","_onSetItem"),this.connect(this.store,"onNew","_onNewItem"),
this.connect(this.store,"onDelete","_onDeleteItem")}),1),this.connect(this.focusNode||this.domNode,"onkeypress","_focusKey"),
this.parentWidget._updateClass(this.domNode,"Pane"),this.inherited(arguments),this._onMinWidthChange(this.minWidth));
},_focusKey:function(t){return t.charOrCode==dojo.keys.BACKSPACE?void dojo.stopEvent(t):void(t.charOrCode==dojo.keys.LEFT_ARROW&&this.parentPane?(this.parentPane.focus(),
this.parentWidget.scrollIntoView(this.parentPane)):t.charOrCode==dojo.keys.ENTER&&this.parentWidget._onExecute());
},focus:function(t){if(this.parentWidget._focusedPane!=this&&(this.parentWidget._focusedPane=this,
this.parentWidget.scrollIntoView(this),this._focusByNode&&(!this.parentWidget._savedFocus||t)))try{
(this.focusNode||this.domNode).focus()}catch(e){}},_onShow:function(){this.inherited(arguments),
(this.store||this.items)&&(this.refreshOnShow&&this.domNode||!this.isLoaded&&this.domNode)&&this.refresh();
},_load:function(){this.isLoaded=!1,this.items?(this._setContentAndScroll(this.onLoadStart(),!0),
window.setTimeout(dojo.hitch(this,"_doQuery"),1)):this._doQuery()},_doLoadItems:function(t,e){
var i=0,o=this.store;if(dojo.forEach(t,function(t){o.isItemLoaded(t)||i++}),0===i)e();else{
var s=function(t){i--,0===i&&e()};dojo.forEach(t,function(t){o.isItemLoaded(t)||o.loadItem({
item:t,onItem:s})})}},_doQuery:function(){if(this.domNode){var t=this.parentWidget.preloadItems;
t=t===!0||this.items&&this.items.length<=Number(t),this.items&&t?this._doLoadItems(this.items,dojo.hitch(this,"onItems")):this.items?this.onItems():(this._setContentAndScroll(this.onFetchStart(),!0),
this.store.fetch({query:this.query,onComplete:function(t){this.items=t,this.onItems();
},onError:function(t){this._onError("Fetch",t)},scope:this}))}},_hasItem:function(t){
for(var e,i=this.items||[],o=0;e=i[o];o++)if(this.parentWidget._itemsMatch(e,t))return!0;
return!1},_onSetItem:function(t,e,i,o){this._hasItem(t)&&this.refresh()},_onNewItem:function(t,e){
var i;!e&&!this.parentPane||e&&this.parentPane&&this.parentPane._hasItem(e.item)&&(i=this.parentPane._getSelected())&&this.parentWidget._itemsMatch(i.item,e.item)?(this.items.push(t),
this.refresh()):e&&this.parentPane&&this._hasItem(e.item)&&this.refresh()},_onDeleteItem:function(t){
this._hasItem(t)&&(this.items=dojo.filter(this.items,function(e){return e!=t}),this.refresh());
},onFetchStart:function(){return this.loadingMessage},onFetchError:function(t){return this.errorMessage;
},onLoadStart:function(){return this.loadingMessage},onLoadError:function(t){return this.errorMessage;
},onItems:function(){this.onLoadDeferred||(this.cancel(),this.onLoadDeferred=new dojo.Deferred(dojo.hitch(this,"cancel"))),
this._onLoadHandler()}}),dojo.declare("dojox.widget._RollingListGroupPane",[dojox.widget._RollingListPane],{
templateString:'<div><div dojoAttachPoint="containerNode"></div><div dojoAttachPoint="menuContainer"><div dojoAttachPoint="menuNode"></div></div></div>',
_menu:null,_setContent:function(t){this._menu||this.inherited(arguments)},_onMinWidthChange:function(t){
if(this._menu){var e=dojo.marginBox(this.domNode).w,i=dojo.marginBox(this._menu.domNode).w;
this._updateNodeWidth(this._menu.domNode,t-(e-i))}},onItems:function(){var t;this._menu&&(t=this._getSelected(),
this._menu.destroyRecursive()),this._menu=this._getMenu();var e,i;if(this.items.length?dojo.forEach(this.items,function(o){
e=this.parentWidget._getMenuItemForItem(o,this),e&&(t&&this.parentWidget._itemsMatch(e.item,t.item)&&(i=e),
this._menu.addChild(e))},this):(e=this.parentWidget._getMenuItemForItem(null,this),
e&&this._menu.addChild(e)),i){if(this._setSelected(i),t&&!t.children&&i.children||t&&t.children&&!i.children){
var o=this.parentWidget._getPaneForItem(i.item,this,i.children);o?this.parentWidget.addChild(o,this.getIndexInParent()+1):(this.parentWidget._removeAfter(this),
this.parentWidget._onItemClick(null,this,i.item,i.children))}}else t&&this.parentWidget._removeAfter(this);
this.containerNode.innerHTML="",this.containerNode.appendChild(this._menu.domNode),
this.parentWidget.scrollIntoView(this),this._checkScrollConnection(!0),this.inherited(arguments),
this._onMinWidthChange(this.minWidth)},_checkScrollConnection:function(t){var e=this.store;
this._scrollConn&&this.disconnect(this._scrollConn),delete this._scrollConn,dojo.every(this.items,function(t){
return e.isItemLoaded(t)})||(t&&this._loadVisibleItems(),this._scrollConn=this.connect(this.domNode,"onscroll","_onScrollPane"));
},startup:function(){this.inherited(arguments),this.parentWidget._updateClass(this.domNode,"GroupPane");
},focus:function(t){if(this._menu){this._pendingFocus&&this.disconnect(this._pendingFocus),
delete this._pendingFocus;var e=this._menu.focusedChild;if(!e){var i=dojo.query(".dojoxRollingListItemSelected",this.domNode)[0];
i&&(e=dijit.byNode(i))}if(e||(e=this._menu.getChildren()[0]||this._menu),this._focusByNode=!1,
e.focusNode){if(!this.parentWidget._savedFocus||t)try{e.focusNode.focus()}catch(o){}
window.setTimeout(function(){try{dojo.window.scrollIntoView(e.focusNode)}catch(t){}
},1)}else e.focus?(!this.parentWidget._savedFocus||t)&&e.focus():this._focusByNode=!0;
this.inherited(arguments)}else this._pendingFocus||(this._pendingFocus=this.connect(this,"onItems","focus"));
},_getMenu:function(){var t=this,e=new dijit.Menu({parentMenu:this.parentPane?this.parentPane._menu:null,
onCancel:function(e){t.parentPane&&t.parentPane.focus(!0)},_moveToPopup:function(t){
this.focusedChild&&!this.focusedChild.disabled&&this.onItemClick(this.focusedChild,t);
}},this.menuNode);return this.connect(e,"onItemClick",function(t,i){if(!t.disabled)if(i.alreadySelected=dojo.hasClass(t.domNode,"dojoxRollingListItemSelected"),
i.alreadySelected&&("keypress"==i.type&&i.charOrCode!=dojo.keys.ENTER||"internal"==i.type)){
var o=this.parentWidget.getChildren()[this.getIndexInParent()+1];o&&(o.focus(!0),
this.parentWidget.scrollIntoView(o))}else this._setSelected(t,e),this.parentWidget._onItemClick(i,this,t.item,t.children),
"keypress"==i.type&&i.charOrCode==dojo.keys.ENTER&&this.parentWidget._onExecute();
}),e._started||e.startup(),e},_onScrollPane:function(){this._visibleLoadPending&&window.clearTimeout(this._visibleLoadPending),
this._visibleLoadPending=window.setTimeout(dojo.hitch(this,"_loadVisibleItems"),500);
},_loadVisibleItems:function(){delete this._visibleLoadPending;var t=this._menu;if(t){
var e=t.getChildren();if(e&&e.length){var i=function(t,e,i){var o=dojo.getComputedStyle(t),s=0;
return e&&(s+=dojo._getMarginExtents(t,o).t),i&&(s+=dojo._getPadBorderExtents(t,o).t),
s},o=i(this.domNode,!1,!0)+i(this.containerNode,!0,!0)+i(t.domNode,!0,!0)+i(e[0].domNode,!0,!1),s=dojo.contentBox(this.domNode).h,n=this.domNode.scrollTop-o-s/2,d=n+3*s/2,h=dojo.filter(e,function(t){
var e=t.domNode.offsetTop,i=t.store,o=t.item;return e>=n&&d>=e&&!i.isItemLoaded(o);
}),r=dojo.map(h,function(t){return t.item}),a=dojo.hitch(this,function(){var e,i=this._getSelected();
dojo.forEach(r,function(o,s){var n=this.parentWidget._getMenuItemForItem(o,this),d=h[s],r=d.getIndexInParent();
t.removeChild(d),n&&(i&&this.parentWidget._itemsMatch(n.item,i.item)&&(e=n),t.addChild(n,r),
t.focusedChild==d&&t.focusChild(n)),d.destroy()},this),this._checkScrollConnection(!1);
});this._doLoadItems(r,a)}}},_getSelected:function(t){if(t||(t=this._menu),t)for(var e,i=this._menu.getChildren(),o=0;e=i[o];o++)if(dojo.hasClass(e.domNode,"dojoxRollingListItemSelected"))return e;
return null},_setSelected:function(t,e){e||(e=this._menu),e&&dojo.forEach(e.getChildren(),function(e){
this.parentWidget._updateClass(e.domNode,"Item",{Selected:t&&e==t&&!e.disabled})},this);
}}),dojo.declare("dojox.widget.RollingList",[dijit._Widget,dijit._Templated,dijit._Container],{
templateString:dojo.cache("dojox.widget","RollingList/RollingList.html"),widgetsInTemplate:!0,
className:"",store:null,query:null,queryOptions:null,childrenAttrs:["children"],parentAttr:"",
value:null,executeOnDblClick:!0,preloadItems:!1,showButtons:!1,okButtonLabel:"",cancelButtonLabel:"",
minPaneWidth:0,postMixInProperties:function(){this.inherited(arguments);var t=dojo.i18n.getLocalization("dijit","common");
this.okButtonLabel=this.okButtonLabel||t.buttonOk,this.cancelButtonLabel=this.cancelButtonLabel||t.buttonCancel;
},_setShowButtonsAttr:function(t){var e=!1;(this.showButtons!=t&&this._started||this.showButtons==t&&!this.started)&&(e=!0),
dojo.toggleClass(this.domNode,"dojoxRollingListButtonsHidden",!t),this.showButtons=t,
e&&(this._started?this.layout():window.setTimeout(dojo.hitch(this,"layout"),0))},
_itemsMatch:function(t,e){return t||e?t&&e?t==e||this._isIdentity&&this.store.getIdentity(t)==this.store.getIdentity(e):!1:!0;
},_removeAfter:function(t){"number"!=typeof t&&(t=this.getIndexOfChild(t)),t>=0&&dojo.forEach(this.getChildren(),function(e,i){
i>t&&(this.removeChild(e),e.destroyRecursive())},this);for(var e=this.getChildren(),i=e[e.length-1],o=null;i&&!o;){
var s=i._getSelected?i._getSelected():null;s&&(o=s.item),i=i.parentPane}this._setInProgress||this._setValue(o);
},addChild:function(t,e){e>0&&this._removeAfter(e-1),this.inherited(arguments),t._started||t.startup(),
t.attr("minWidth",this.minPaneWidth),this.layout(),this._savedFocus||t.focus()},_setMinPaneWidthAttr:function(t){
t!==this.minPaneWidth&&(this.minPaneWidth=t,dojo.forEach(this.getChildren(),function(e){
e.attr("minWidth",t)}))},_updateClass:function(t,e,i){this._declaredClasses||(this._declaredClasses=("dojoxRollingList "+this.className).split(" ")),
dojo.forEach(this._declaredClasses,function(o){if(o){dojo.addClass(t,o+e);for(var s in i||{})dojo.toggleClass(t,o+e+s,i[s]);
dojo.toggleClass(t,o+e+"FocusSelected",dojo.hasClass(t,o+e+"Focus")&&dojo.hasClass(t,o+e+"Selected")),
dojo.toggleClass(t,o+e+"HoverSelected",dojo.hasClass(t,o+e+"Hover")&&dojo.hasClass(t,o+e+"Selected"));
}})},scrollIntoView:function(t){this._scrollingTimeout&&window.clearTimeout(this._scrollingTimeout),
delete this._scrollingTimeout,this._scrollingTimeout=window.setTimeout(dojo.hitch(this,function(){
t.domNode&&dojo.window.scrollIntoView(t.domNode),delete this._scrollingTimeout}),1);
},resize:function(t){dijit.layout._LayoutWidget.prototype.resize.call(this,t)},layout:function(){
var t=this.getChildren();if(this._contentBox){var e=this.buttonsNode,i=this._contentBox.h-dojo.marginBox(e).h-dojox.html.metrics.getScrollbar().h;
dojo.forEach(t,function(t){dojo.marginBox(t.domNode,{h:i})})}if(this._focusedPane){
var o=this._focusedPane;delete this._focusedPane,this._savedFocus||o.focus()}else t&&t.length&&(this._savedFocus||t[0].focus());
},_onChange:function(t){this.onChange(t)},_setValue:function(t){delete this._setInProgress,
this._itemsMatch(this.value,t)||(this.value=t,this._onChange(t))},_setValueAttr:function(t){
if(!(this._itemsMatch(this.value,t)&&!t||this._setInProgress&&this._setInProgress===t)){
if(this._setInProgress=t,!t||!this.store.isItem(t)){var e=this.getChildren()[0];return e._setSelected(null),
void this._onItemClick(null,e,null,null)}var i=dojo.hitch(this,function(e,i){var o,s=this.store;
if(this.parentAttr&&s.getFeatures()["dojo.data.api.Identity"]&&((o=this.store.getValue(e,this.parentAttr))||""===o)){
var n=function(t){i(s.getIdentity(t)==s.getIdentity(e)?null:[t])};""===o?i(null):"string"==typeof o?s.fetchItemByIdentity({
identity:o,onItem:n}):s.isItem(o)&&n(o)}else{var d=this.childrenAttrs.length,h=[];
dojo.forEach(this.childrenAttrs,function(o){var n={};n[o]=e,s.fetch({query:n,scope:this,
onComplete:function(e){this._setInProgress===t&&(h=h.concat(e),d--,0===d&&i(h))}});
},this)}}),o=dojo.hitch(this,function(e,i){var s,n=e[i],d=this.getChildren()[i];if(n&&d){
var h=dojo.hitch(this,function(){if(s&&this.disconnect(s),delete s,this._setInProgress===t){
var h=dojo.filter(d._menu.getChildren(),function(t){return this._itemsMatch(t.item,n);
},this)[0];h&&(i++,d._menu.onItemClick(h,{type:"internal",stopPropagation:function(){},
preventDefault:function(){}}),e[i]?o(e,i):(this._setValue(n),this.onItemClick(n,d,this.getChildItems(n))));
}});d.isLoaded?h():s=this.connect(d,"onLoad",h)}else 0===i&&this.set("value",null);
}),s=[],n=dojo.hitch(this,function(t){t&&t.length?(s.push(t[0]),i(t[0],n)):(t||s.pop(),
s.reverse(),o(s,0))}),d=this.domNode.style;"none"==d.display||"hidden"==d.visibility?this._setValue(t):this._itemsMatch(t,this._visibleItem)||n([t]);
}},_onItemClick:function(t,e,i,o){if(t){var s=this._getPaneForItem(i,e,o),n="click"==t.type&&t.alreadySelected;
if(n&&s){this._removeAfter(e.getIndexInParent()+1);var d=e.getNextSibling();d&&d._setSelected&&d._setSelected(null),
this.scrollIntoView(d)}else s?(this.addChild(s,e.getIndexInParent()+1),this._savedFocus&&s.focus(!0)):(this._removeAfter(e),
this.scrollIntoView(e))}else e&&(this._removeAfter(e),this.scrollIntoView(e));t&&"internal"==t.type||(this._setValue(i),
this.onItemClick(i,e,o)),this._visibleItem=i},_getPaneForItem:function(t,e,i){var o=this.getPaneForItem(t,e,i);
return o.store=this.store,o.parentWidget=this,o.parentPane=e||null,t?i?o.items=i:o.items=[t]:(o.query=this.query,
o.queryOptions=this.queryOptions),o},_getMenuItemForItem:function(t,e){var i=this.store;
if(t&&i&&i.isItem(t)){var o,s=i.isItemLoaded(t),n=s?this.getChildItems(t):void 0;if(n)if(o=this.getMenuItemForItem(t,e,n),
o.children=n,this._updateClass(o.domNode,"Item",{Expanding:!0}),o._started)dojo.style(o.arrowWrapper,"visibility","");else var d=o.connect(o,"startup",function(){
this.disconnect(d),dojo.style(this.arrowWrapper,"visibility","")});else o=this.getMenuItemForItem(t,e,null),
s?this._updateClass(o.domNode,"Item",{Single:!0}):(this._updateClass(o.domNode,"Item",{
Unloaded:!0}),o.attr("disabled",!0));if(o.store=this.store,o.item=t,o.label||o.attr("label",this.store.getLabel(t).replace(/</,"&lt;")),
o.focusNode){var h=this;o.focus=function(){if(!this.disabled)try{this.focusNode.focus();
}catch(t){}},o.connect(o.focusNode,"onmouseenter",function(){this.disabled||h._updateClass(this.domNode,"Item",{
Hover:!0})}),o.connect(o.focusNode,"onmouseleave",function(){this.disabled||h._updateClass(this.domNode,"Item",{
Hover:!1})}),o.connect(o.focusNode,"blur",function(){h._updateClass(this.domNode,"Item",{
Focus:!1,Hover:!1})}),o.connect(o.focusNode,"focus",function(){h._updateClass(this.domNode,"Item",{
Focus:!0}),h._focusedPane=e}),this.executeOnDblClick&&o.connect(o.focusNode,"ondblclick",function(){
h._onExecute()})}return o}var r=new dijit.MenuItem({label:"---",disabled:!0,iconClass:"dojoxEmpty",
focus:function(){}});return this._updateClass(r.domNode,"Item"),r},_setStore:function(t){
if(t!==this.store||!this._started){this.store=t,this._isIdentity=t.getFeatures()["dojo.data.api.Identity"];
var e=this._getPaneForItem();this.addChild(e,0)}},_onKey:function(t){if(t.charOrCode==dojo.keys.BACKSPACE)return void dojo.stopEvent(t);
if(t.charOrCode==dojo.keys.ESCAPE&&this._savedFocus){try{dijit.focus(this._savedFocus);
}catch(t){}return void dojo.stopEvent(t)}return t.charOrCode==dojo.keys.LEFT_ARROW||t.charOrCode==dojo.keys.RIGHT_ARROW?void dojo.stopEvent(t):void 0;
},_resetValue:function(){this.set("value",this._lastExecutedValue)},_onCancel:function(){
this._resetValue(),this.onCancel()},_onExecute:function(){this._lastExecutedValue=this.get("value"),
this.onExecute()},focus:function(){var t=this._savedFocus;if(this._savedFocus=dijit.getFocus(this),
this._savedFocus.node||delete this._savedFocus,this._focusedPane){this._savedFocus=dijit.getFocus(this);
var e=this._focusedPane;delete this._focusedPane,t||e.focus(!0)}else{var i=this.getChildren()[0];
i&&!t&&i.focus(!0)}},handleKey:function(t){return t.keyCode==dojo.keys.DOWN_ARROW?(delete this._savedFocus,
this.focus(),!1):t.keyCode==dojo.keys.ESCAPE?(this._onCancel(),!1):!0},_updateChildClasses:function(){
var t=this.getChildren(),e=t.length;dojo.forEach(t,function(t,i){dojo.toggleClass(t.domNode,"dojoxRollingListPaneCurrentChild",i==e-1),
dojo.toggleClass(t.domNode,"dojoxRollingListPaneCurrentSelected",i==e-2)})},startup:function(){
this._started||(this.getParent&&this.getParent()||(this.resize(),this.connect(dojo.global,"onresize","resize")),
this.connect(this,"addChild","_updateChildClasses"),this.connect(this,"removeChild","_updateChildClasses"),
this._setStore(this.store),this.set("showButtons",this.showButtons),this.inherited(arguments),
this._lastExecutedValue=this.get("value"))},getChildItems:function(t){var e,i=this.store;
return dojo.forEach(this.childrenAttrs,function(o){var s=i.getValues(t,o);s&&s.length&&(e=(e||[]).concat(s));
}),e},getMenuItemForItem:function(t,e,i){return new dijit.MenuItem({})},getPaneForItem:function(t,e,i){
return!t||i?new dojox.widget._RollingListGroupPane({}):null},onItemClick:function(t,e,i){},
onExecute:function(){},onCancel:function(){},onChange:function(t){}});