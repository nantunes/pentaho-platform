define(["dojo/_base/lang","../_Widget","../_Container","../_Contained","../Viewport","dojo/_base/declare","dojo/dom-class","dojo/dom-geometry","dojo/dom-style"],function(t,e,i,s,a,n,o,d,r){
return n("dijit.layout._LayoutWidget",[e,i,s],{baseClass:"dijitLayoutContainer",isLayoutContainer:!0,
buildRendering:function(){this.inherited(arguments),o.add(this.domNode,"dijitContainer");
},startup:function(){if(!this._started){this.inherited(arguments);var e=this.getParent&&this.getParent();
e&&e.isLayoutContainer||(this.resize(),this.own(a.on("resize",t.hitch(this,"resize"))));
}},resize:function(e,i){var s=this.domNode;e&&d.setMarginBox(s,e);var a=i||{};t.mixin(a,e||{}),
"h"in a&&"w"in a||(a=t.mixin(d.getMarginBox(s),a));var n=r.getComputedStyle(s),o=d.getMarginExtents(s,n),h=d.getBorderExtents(s,n),l=this._borderBox={
w:a.w-(o.w+h.w),h:a.h-(o.h+h.h)},u=d.getPadExtents(s,n);this._contentBox={l:r.toPixelValue(s,n.paddingLeft),
t:r.toPixelValue(s,n.paddingTop),w:l.w-u.w,h:l.h-u.h},this.layout()},layout:function(){},
_setupChild:function(t){var e=this.baseClass+"-child "+(t.baseClass?this.baseClass+"-"+t.baseClass:"");
o.add(t.domNode,e)},addChild:function(t,e){this.inherited(arguments),this._started&&this._setupChild(t);
},removeChild:function(t){var e=this.baseClass+"-child"+(t.baseClass?" "+this.baseClass+"-"+t.baseClass:"");
o.remove(t.domNode,e),this.inherited(arguments)}})});