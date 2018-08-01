define(["dojo/_base/kernel","dojo/_base/config","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom","dojo/dom-class","dijit/registry","./scrollable"],function(e,t,i,o,d,s,r,a,l){
var h=i("dojox.mobile._ScrollableMixin",l,{fixedHeader:"",fixedFooter:"",_fixedAppFooter:"",
scrollableParams:null,allowNestedScrolls:!0,appBars:!0,constructor:function(){this.scrollableParams={};
},destroy:function(){this.cleanup(),this.inherited(arguments)},startup:function(){
if(!this._started){this._fixedAppFooter&&(this._fixedAppFooter=s.byId(this._fixedAppFooter)),
this.findAppBars();var e,i=this.scrollableParams;if(this.fixedHeader&&(e=s.byId(this.fixedHeader),
e.parentNode==this.domNode&&(this.isLocalHeader=!0),i.fixedHeaderHeight=e.offsetHeight),
this.fixedFooter&&(e=s.byId(this.fixedFooter),e.parentNode==this.domNode&&(this.isLocalFooter=!0,
e.style.bottom="0px"),i.fixedFooterHeight=e.offsetHeight),this.scrollType=this.scrollType||t.mblScrollableScrollType||0,
this.init(i),this.allowNestedScrolls)for(var o=this.getParent();o;o=o.getParent())if(o&&o.scrollableParams){
this.dirLock=!0,o.dirLock=!0;break}this._resizeHandle=this.subscribe("/dojox/mobile/afterResizeAll",function(){
if("none"!==this.domNode.style.display){var e=d.doc.activeElement;this.isFormElement(e)&&s.isDescendant(e,this.containerNode)&&this.scrollIntoView(e);
}}),this.inherited(arguments)}},findAppBars:function(){if(this.appBars){var e,t,i;
for(e=0,t=d.body().childNodes.length;t>e;e++)i=d.body().childNodes[e],this.checkFixedBar(i,!1);
if(this.domNode.parentNode)for(e=0,t=this.domNode.parentNode.childNodes.length;t>e;e++)i=this.domNode.parentNode.childNodes[e],
this.checkFixedBar(i,!1);this.fixedFooterHeight=this.fixedFooter?this.fixedFooter.offsetHeight:0;
}},checkFixedBar:function(e,t){if(1===e.nodeType){var i=e.getAttribute("fixed")||e.getAttribute("data-mobile-fixed")||a.byNode(e)&&a.byNode(e).fixed;
if("top"===i)return r.add(e,"mblFixedHeaderBar"),t&&(e.style.top="0px",this.fixedHeader=e),
i;if("bottom"===i)return r.add(e,"mblFixedBottomBar"),t?this.fixedFooter=e:this._fixedAppFooter=e,
i}return null}});return h});