define(["dojo/_base/declare","dojo/dom-class","./Container"],function(o,t,i){return o("dojox.mobile.FormLayout",i,{
columns:"auto",rightAlign:!1,baseClass:"mblFormLayout",buildRendering:function(){
this.inherited(arguments),"auto"==this.columns?t.add(this.domNode,"mblFormLayoutAuto"):"single"==this.columns?t.add(this.domNode,"mblFormLayoutSingleCol"):"two"==this.columns&&t.add(this.domNode,"mblFormLayoutTwoCol"),
this.rightAlign&&t.add(this.domNode,"mblFormLayoutRightAlign")}})});