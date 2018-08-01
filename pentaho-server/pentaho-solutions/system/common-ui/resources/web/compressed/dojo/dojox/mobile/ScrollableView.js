define(["dojo/_base/array","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dijit/registry","./View","./_ScrollableMixin"],function(e,i,t,o,d,s,r){
return i("dojox.mobile.ScrollableView",[s,r],{scrollableParams:null,keepScrollPos:!1,
constructor:function(){this.scrollableParams={noResize:!0}},buildRendering:function(){
this.inherited(arguments),t.add(this.domNode,"mblScrollableView"),this.domNode.style.overflow="hidden",
this.domNode.style.top="0px",this.containerNode=o.create("div",{className:"mblScrollableViewContainer"
},this.domNode),this.containerNode.style.position="absolute",this.containerNode.style.top="0px",
"v"===this.scrollDir&&(this.containerNode.style.width="100%")},startup:function(){
this._started||(this.fixedFooter&&!this.isLocalFooter&&(this._fixedAppFooter=this.fixedFooter,
this.fixedFooter=""),this.reparent(),this.inherited(arguments))},resize:function(){
this.inherited(arguments),e.forEach(this.getChildren(),function(e){e.resize&&e.resize();
}),this._dim=this.getDim(),this._conn&&this.resetScrollBar()},isTopLevel:function(e){
var i=this.getParent&&this.getParent();return!i||!i.resize},addFixedBar:function(e){
var i=e.domNode,t=this.checkFixedBar(i,!0);t&&(this.domNode.appendChild(i),"top"===t?(this.fixedHeaderHeight=i.offsetHeight,
this.isLocalHeader=!0):"bottom"===t&&(this.fixedFooterHeight=i.offsetHeight,this.isLocalFooter=!0,
i.style.bottom="0px"),this.resize())},reparent:function(){var e,i,t,o;for(e=0,i=0,
t=this.domNode.childNodes.length;t>e;e++)o=this.domNode.childNodes[i],o===this.containerNode||this.checkFixedBar(o,!0)?i++:this.containerNode.appendChild(this.domNode.removeChild(o));
},onAfterTransitionIn:function(e,i,t,o,d){this.flashScrollBar()},getChildren:function(){
var e,i=this.inherited(arguments);return this.fixedHeader&&this.fixedHeader.parentNode===this.domNode&&(e=d.byNode(this.fixedHeader),
e&&i.push(e)),this.fixedFooter&&this.fixedFooter.parentNode===this.domNode&&(e=d.byNode(this.fixedFooter),
e&&i.push(e)),i},_addTransitionPaddingTop:function(e){this.domNode.style.paddingTop=e+"px",
this.containerNode.style.paddingTop=e+"px"},_removeTransitionPaddingTop:function(){
this.domNode.style.paddingTop="",this.containerNode.style.paddingTop=""}})});