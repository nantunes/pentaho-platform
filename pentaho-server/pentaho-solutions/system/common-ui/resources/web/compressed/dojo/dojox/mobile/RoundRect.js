define(["dojo/_base/declare","dojo/dom-class","./Container"],function(d,o,e){return d("dojox.mobile.RoundRect",e,{
shadow:!1,baseClass:"mblRoundRect",buildRendering:function(){this.inherited(arguments),
this.shadow&&o.add(this.domNode,"mblShadow")}})});