define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class"],function(o,t,r){
return o(null,{buildRendering:function(){if(this.inherited(arguments),!this.isLeftToRight()&&this.arrow){
var o="left"===this.arrow?"mblToolBarButtonLeftArrow":"mblToolBarButtonRightArrow",t="left"===this.arrow?"mblToolBarButtonHasLeftArrow":"mblToolBarButtonHasRightArrow",e="left"===this.arrow?"mblToolBarButtonRightArrow":"mblToolBarButtonLeftArrow",i="left"===this.arrow?"mblToolBarButtonHasRightArrow":"mblToolBarButtonHasLeftArrow";
r.remove(this.arrowNode,o),r.add(this.arrowNode,e),r.remove(this.domNode,t),r.add(this.domNode,i);
}},_setLabelAttr:function(o){this.inherited(arguments),this.isLeftToRight()||r.toggle(this.tableNode,"mblToolBarButtonTextRtl",o||this.arrow);
}})});