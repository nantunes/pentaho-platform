define(["dojo/_base/declare","./RoundRectCategory"],function(e,o){return e("dojox.mobile.EdgeToEdgeCategory",o,{
buildRendering:function(){this.inherited(arguments),this.domNode.className="mblEdgeToEdgeCategory",
this.type&&"long"==this.type&&(this.domNode.className+=" mblEdgeToEdgeCategoryLong");
}})});