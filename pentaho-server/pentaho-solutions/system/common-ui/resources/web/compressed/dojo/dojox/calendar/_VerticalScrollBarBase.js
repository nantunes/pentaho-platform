define(["dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/on","dojo/dom-style","dijit/_WidgetBase"],function(t,i,e,o,n,l){
return t("dojox.calendar._VerticalScrollBarBase",l,{value:0,minimum:0,maximum:100,
_scrollHandle:null,buildRendering:function(){this.inherited(arguments),this.own(o(this.domNode,"scroll",e.hitch(this,function(t){
this.value=this._getDomScrollerValue(),this.onChange(this.value),this.onScroll(this.value);
})))},_getDomScrollerValue:function(){return this.domNode.scrollTop},_setDomScrollerValue:function(t){
this.domNode.scrollTop=t},_setValueAttr:function(t){t=Math.min(this.maximum,t),t=Math.max(this.minimum,t),
this.value!=t&&(this.value=t,this.onChange(t),this._setDomScrollerValue(t))},onChange:function(t){},
onScroll:function(t){},_setMinimumAttr:function(t){t=Math.min(t,this.maximum),this.minimum=t;
},_setMaximumAttr:function(t){t=Math.max(t,this.minimum),this.maximum=t,n.set(this.content,"height",t+"px");
}})});