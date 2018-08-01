define(["dojo/_base/array","dojo/cookie","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dojo/has","dojo/_base/lang","dojo/on","dojo/ready","dojo/topic","dojo/when","../registry","../_WidgetBase","./_LayoutWidget","dojo/i18n!../nls/common"],function(e,t,i,s,d,h,n,o,r,l,a,c,u,C){
h("dijit-legacy-requires")&&r(0,function(){var e=["dijit/layout/StackController"];
require(e)});var _=i("dijit.layout.StackContainer",C,{doLayout:!0,persist:!1,baseClass:"dijitStackContainer",
buildRendering:function(){this.inherited(arguments),s.add(this.domNode,"dijitLayoutContainer");
},postCreate:function(){this.inherited(arguments),this.own(o(this.domNode,"keydown",n.hitch(this,"_onKeyDown")));
},startup:function(){if(!this._started){var i=this.getChildren();e.forEach(i,this._setupChild,this),
this.persist?this.selectedChildWidget=c.byId(t(this.id+"_selectedChild")):e.some(i,function(e){
return e.selected&&(this.selectedChildWidget=e),e.selected},this);var s=this.selectedChildWidget;
!s&&i[0]&&(s=this.selectedChildWidget=i[0],s.selected=!0),l.publish(this.id+"-startup",{
children:i,selected:s,textDir:this.textDir}),this.inherited(arguments)}},resize:function(){
if(!this._hasBeenShown){this._hasBeenShown=!0;var e=this.selectedChildWidget;e&&this._showChild(e);
}this.inherited(arguments)},_setupChild:function(e){var t=e.domNode,i=d.place("<div role='tabpanel' class='"+this.baseClass+"ChildWrapper dijitHidden'>",e.domNode,"replace"),s=e["aria-label"]||e.title||e.label;
s&&i.setAttribute("aria-label",s),d.place(t,i),e._wrapper=i,this.inherited(arguments),
"none"==t.style.display&&(t.style.display="block"),e.domNode.title=""},addChild:function(e,t){
this.inherited(arguments),this._started&&(l.publish(this.id+"-addChild",e,t),this.layout(),
this.selectedChildWidget||this.selectChild(e))},removeChild:function(t){var i=e.indexOf(this.getChildren(),t);
if(this.inherited(arguments),d.destroy(t._wrapper),delete t._wrapper,this._started&&l.publish(this.id+"-removeChild",t),
!this._descendantsBeingDestroyed){if(this.selectedChildWidget===t&&(this.selectedChildWidget=void 0,
this._started)){var s=this.getChildren();s.length&&this.selectChild(s[Math.max(i-1,0)]);
}this._started&&this.layout()}},selectChild:function(e,i){var s;return e=c.byId(e),
this.selectedChildWidget!=e&&(s=this._transition(e,this.selectedChildWidget,i),this._set("selectedChildWidget",e),
l.publish(this.id+"-selectChild",e),this.persist&&t(this.id+"_selectedChild",this.selectedChildWidget.id)),
a(s||!0)},_transition:function(e,t){t&&this._hideChild(t);var i=this._showChild(e);
return e.resize&&(this.doLayout?e.resize(this._containerContentBox||this._contentBox):e.resize()),
i},_adjacent:function(t){var i=this.getChildren(),s=e.indexOf(i,this.selectedChildWidget);
return s+=t?1:i.length-1,i[s%i.length]},forward:function(){return this.selectChild(this._adjacent(!0),!0);
},back:function(){return this.selectChild(this._adjacent(!1),!0)},_onKeyDown:function(e){
l.publish(this.id+"-containerKeyDown",{e:e,page:this})},layout:function(){var e=this.selectedChildWidget;
e&&e.resize&&(this.doLayout?e.resize(this._containerContentBox||this._contentBox):e.resize());
},_showChild:function(e){var t=this.getChildren();return e.isFirstChild=e==t[0],e.isLastChild=e==t[t.length-1],
e._set("selected",!0),e._wrapper&&s.replace(e._wrapper,"dijitVisible","dijitHidden"),
e._onShow&&e._onShow()||!0},_hideChild:function(e){e._set("selected",!1),e._wrapper&&s.replace(e._wrapper,"dijitHidden","dijitVisible"),
e.onHide&&e.onHide()},closeChild:function(e){var t=e.onClose&&e.onClose(this,e);t&&(this.removeChild(e),
e.destroyRecursive())},destroyDescendants:function(t){this._descendantsBeingDestroyed=!0,
this.selectedChildWidget=void 0,e.forEach(this.getChildren(),function(e){t||this.removeChild(e),
e.destroyRecursive(t)},this),this._descendantsBeingDestroyed=!1}});return _.ChildWidgetProperties={
selected:!1,disabled:!1,closable:!1,iconClass:"dijitNoIcon",showTitle:!0},n.extend(u,_.ChildWidgetProperties),
_});