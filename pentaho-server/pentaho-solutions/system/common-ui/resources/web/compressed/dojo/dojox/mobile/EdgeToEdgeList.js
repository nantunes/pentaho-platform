define(["dojo/_base/declare","./RoundRectList"],function(e,d){return e("dojox.mobile.EdgeToEdgeList",d,{
filterBoxClass:"mblFilteredEdgeToEdgeListSearchBox",buildRendering:function(){this.inherited(arguments),
this.domNode.className="mblEdgeToEdgeList"}})});