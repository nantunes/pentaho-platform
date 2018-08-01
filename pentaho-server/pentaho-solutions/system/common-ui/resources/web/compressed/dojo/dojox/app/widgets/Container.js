define(["dojo/_base/declare","dojo/_base/lang","dijit/registry","dojo/dom-attr","dojo/dom-geometry","dojo/dom-style","dijit/_WidgetBase","dijit/_Container","dijit/_Contained","dojo/_base/array","dojo/query","../utils/layout","./_ScrollableMixin"],function(t,e,i,o,n,s,a,d,r,h,l,u,c){
return t("dojox.app.widgets.Container",[a,d,r,c],{scrollable:!1,fixedFooter:"",fixedHeader:"",
buildRendering:function(){this._constraint||(this._constraint="center",o.set(this.srcNodeRef,"data-app-constraint","center")),
this.inherited(arguments),s.set(this.domNode,"overflow-x","hidden"),s.set(this.domNode,"overflow-y","auto"),
this.scrollable&&(this.inherited(arguments),this.domNode.style.position="absolute",
this.domNode.style.width="100%",this.domNode.style.height="100%")},startup:function(){
this._started||(this.scrollable&&this.inherited(arguments),this._started=!0)},resize:function(t,i){
var o=this.domNode;if(this.scrollable)return this.inherited(arguments),void this.layout();
t&&n.setMarginBox(o,t);var a=i||{};e.mixin(a,t||{}),"h"in a&&"w"in a||(a=e.mixin(n.getMarginBox(o),a));
var d=s.getComputedStyle(o),r=n.getMarginExtents(o,d),h=n.getBorderExtents(o,d),l=this._borderBox={
w:a.w-(r.w+h.w),h:a.h-(r.h+h.h)},u=n.getPadExtents(o,d);this._contentBox={l:s.toPixelValue(o,d.paddingLeft),
t:s.toPixelValue(o,d.paddingTop),w:l.w-u.w,h:l.h-u.h},this.layout()},layout:function(){
var t=l("> [data-app-constraint]",this.domNode).map(function(t){var e=i.getEnclosingWidget(t);
return e?(e._constraint=o.get(t,"data-app-constraint"),e):{domNode:t,_constraint:o.get(t,"data-app-constraint")
}});this._contentBox&&u.layoutChildren(this.domNode,this._contentBox,t),h.forEach(this.getChildren(),function(t){
!t._started&&t.startup&&t.startup()})}})});