dojo.provide("dojox.mobile.app._Widget"),dojo.experimental("dojox.mobile.app._Widget"),
dojo.require("dijit._WidgetBase"),dojo.declare("dojox.mobile.app._Widget",dijit._WidgetBase,{
getScroll:function(){return{x:dojo.global.scrollX,y:dojo.global.scrollY}},connect:function(o,e,i){
return"dblclick"!=e.toLowerCase()&&"ondblclick"!=e.toLowerCase()||!dojo.global.Mojo?this.inherited(arguments):this.connect(o,Mojo.Event.tap,i);
}});