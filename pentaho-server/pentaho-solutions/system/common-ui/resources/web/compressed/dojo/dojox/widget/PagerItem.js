define(["dojo/_base/declare","dojo/dom-geometry","dojo/dom-style","dojo/parser","dijit/_WidgetBase","dijit/_TemplatedMixin"],function(e,t,i,o,d,n){
return e("dojox.widget._PagerItem",[d,n],{templateString:'<li class="pagerItem" data-dojo-attach-point="containerNode"></li>',
resizeChildren:function(){var e=t.getMarginBox(this.containerNode);i.set(this.containerNode.firstChild,{
width:e.w+"px",height:e.h+"px"})},parseChildren:function(){o.parse(this.containerNode);
}})});