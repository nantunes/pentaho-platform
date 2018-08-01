define(["dojo/_base/array","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/_base/lang","dojo/mouse","dojo/on","dojo/window","./a11yclick","./registry","./_Widget","./_CssStateMixin","./_KeyNavContainer","./_TemplatedMixin"],function(e,t,i,o,s,n,h,r,c,u,p,d,l,a,_){
return t("dijit._MenuBase",[d,_,a,l],{selected:null,_setSelectedAttr:function(e){
this.selected!=e&&(this.selected&&(this.selected._setSelected(!1),this._onChildDeselect(this.selected)),
e&&e._setSelected(!0),this._set("selected",e))},activated:!1,_setActivatedAttr:function(e){
s.toggle(this.domNode,"dijitMenuActive",e),s.toggle(this.domNode,"dijitMenuPassive",!e),
this._set("activated",e)},parentMenu:null,popupDelay:500,passivePopupDelay:1/0,autoFocus:!1,
childSelector:function(e){var t=p.byNode(e);return e.parentNode==this.containerNode&&t&&t.focus;
},postCreate:function(){var e=this,t="string"==typeof this.childSelector?this.childSelector:n.hitch(this,"childSelector");
this.own(r(this.containerNode,r.selector(t,h.enter),function(){e.onItemHover(p.byNode(this));
}),r(this.containerNode,r.selector(t,h.leave),function(){e.onItemUnhover(p.byNode(this));
}),r(this.containerNode,r.selector(t,u),function(t){e.onItemClick(p.byNode(this),t),
t.stopPropagation(),t.preventDefault()})),this.inherited(arguments)},onKeyboardSearch:function(e,t,i,o){
this.inherited(arguments),e&&(-1==o||e.popup&&1==o)&&this.onItemClick(e,t)},_keyboardSearchCompare:function(e,t){
return e.shortcutKey?t==e.shortcutKey.toLowerCase()?-1:0:this.inherited(arguments)?1:0;
},onExecute:function(){},onCancel:function(){},_moveToPopup:function(e){if(this.focusedChild&&this.focusedChild.popup&&!this.focusedChild.disabled)this.onItemClick(this.focusedChild,e);else{
var t=this._getTopMenu();t&&t._isMenuBar&&t.focusNext()}},_onPopupHover:function(){
this.set("selected",this.currentPopupItem),this._stopPendingCloseTimer()},onItemHover:function(e){
this.activated?(this.set("selected",e),!e.popup||e.disabled||this.hover_timer||(this.hover_timer=this.defer(function(){
this._openItemPopup(e)},this.popupDelay))):this.passivePopupDelay<1/0&&(this.passive_hover_timer&&this.passive_hover_timer.remove(),
this.passive_hover_timer=this.defer(function(){this.onItemClick(e,{type:"click"});
},this.passivePopupDelay)),this._hoveredChild=e,e._set("hovering",!0)},_onChildDeselect:function(e){
this._stopPopupTimer(),this.currentPopupItem==e&&(this._stopPendingCloseTimer(),this._pendingClose_timer=this.defer(function(){
this._pendingClose_timer=null,this.currentPopupItem=null,e._closePopup()},this.popupDelay));
},onItemUnhover:function(e){this._hoveredChild==e&&(this._hoveredChild=null),this.passive_hover_timer&&(this.passive_hover_timer.remove(),
this.passive_hover_timer=null),e._set("hovering",!1)},_stopPopupTimer:function(){
this.hover_timer&&(this.hover_timer=this.hover_timer.remove())},_stopPendingCloseTimer:function(){
this._pendingClose_timer&&(this._pendingClose_timer=this._pendingClose_timer.remove());
},_getTopMenu:function(){for(var e=this;e.parentMenu;e=e.parentMenu);return e},onItemClick:function(e,t){
if(this.passive_hover_timer&&this.passive_hover_timer.remove(),this.focusChild(e),
e.disabled)return!1;if(e.popup){this.set("selected",e),this.set("activated",!0);var i=/^key/.test(t._origType||t.type)||0==t.clientX&&0==t.clientY;
this._openItemPopup(e,i)}else this.onExecute(),e._onClick?e._onClick(t):e.onClick(t);
},_openItemPopup:function(e,t){if(e!=this.currentPopupItem){this.currentPopupItem&&(this._stopPendingCloseTimer(),
this.currentPopupItem._closePopup()),this._stopPopupTimer();var i=e.popup;i.parentMenu=this,
this.own(this._mouseoverHandle=r.once(i.domNode,"mouseover",n.hitch(this,"_onPopupHover")));
var o=this;e._openPopup({parent:this,orient:this._orient||["after","before"],onCancel:function(){
t&&o.focusChild(e),o._cleanUp()},onExecute:n.hitch(this,"_cleanUp",!0),onClose:function(){
o._mouseoverHandle&&(o._mouseoverHandle.remove(),delete o._mouseoverHandle)}},t),
this.currentPopupItem=e}},onOpen:function(){this.isShowingNow=!0,this.set("activated",!0);
},onClose:function(){this.set("activated",!1),this.set("selected",null),this.isShowingNow=!1,
this.parentMenu=null},_closeChild:function(){this._stopPopupTimer(),this.currentPopupItem&&(this.focused&&(o.set(this.selected.focusNode,"tabIndex",this.tabIndex),
this.selected.focusNode.focus()),this.currentPopupItem._closePopup(),this.currentPopupItem=null);
},_onItemFocus:function(e){this._hoveredChild&&this._hoveredChild!=e&&this.onItemUnhover(this._hoveredChild),
this.set("selected",e)},_onBlur:function(){this._cleanUp(!0),this.inherited(arguments);
},_cleanUp:function(e){this._closeChild(),"undefined"==typeof this.isShowingNow&&this.set("activated",!1),
e&&this.set("selected",null)}})});