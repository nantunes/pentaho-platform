define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/window","dojo/dom-class","dijit/registry","dojo/dom","dojo/dom-construct","dojox/mobile/scrollable"],function(e,t,o,i,d,s,r,a,n){
return e("dojox.app.widgets._ScrollableMixin",n,{scrollableParams:null,appBars:!0,
allowNestedScrolls:!0,constructor:function(){this.scrollableParams={noResize:!0}},
destroy:function(){this.cleanup(),this.inherited(arguments)},startup:function(){if(!this._started){
this.findAppBars();var e,t=this.scrollableParams;this.fixedHeader&&(e=r.byId(this.fixedHeader),
e.parentNode==this.domNode&&(this.isLocalHeader=!0),t.fixedHeaderHeight=e.offsetHeight),
this.fixedFooter&&(e=r.byId(this.fixedFooter),e.parentNode==this.domNode&&(this.isLocalFooter=!0,
e.style.bottom="0px"),t.fixedFooterHeight=e.offsetHeight),this.init(t),this.inherited(arguments),
this.reparent()}},buildRendering:function(){this.inherited(arguments),d.add(this.domNode,"mblScrollableView"),
this.domNode.style.overflow="hidden",this.domNode.style.top="0px",this.containerNode=a.create("div",{
className:"mblScrollableViewContainer"},this.domNode),this.containerNode.style.position="absolute",
this.containerNode.style.top="0px","v"===this.scrollDir&&(this.containerNode.style.width="100%");
},reparent:function(){var e,t,o,i;for(e=0,t=0,o=this.domNode.childNodes.length;o>e;e++)i=this.domNode.childNodes[t],
i===this.containerNode||this.checkFixedBar(i,!0)?t++:this.containerNode.appendChild(this.domNode.removeChild(i));
},resize:function(){this.inherited(arguments),o.forEach(this.getChildren(),function(e){
e.resize&&e.resize()})},findAppBars:function(){if(this.appBars){var e,t,o;for(e=0,
t=i.body().childNodes.length;t>e;e++)o=i.body().childNodes[e],this.checkFixedBar(o,!1);
if(this.domNode.parentNode)for(e=0,t=this.domNode.parentNode.childNodes.length;t>e;e++)o=this.domNode.parentNode.childNodes[e],
this.checkFixedBar(o,!1);this.fixedFooterHeight=this.fixedFooter?this.fixedFooter.offsetHeight:0;
}},checkFixedBar:function(e,t){if(1===e.nodeType){var o=e.getAttribute("data-app-constraint")||s.byNode(e)&&s.byNode(e)["data-app-constraint"];
if("bottom"===o)return d.add(e,"mblFixedBottomBar"),t?this.fixedFooter=e:this._fixedAppFooter=e,
o}return null}})});