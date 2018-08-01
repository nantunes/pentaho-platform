define(["dojo/_base/connect","dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","./View","./iconUtils","./_ItemBase","./Badge","./sniff","dojo/has!dojo-bidi?dojox/mobile/bidi/TabBarButton"],function(o,t,i,e,s,n,d,c,a,h,r,l,b,m,u){
var B=t(m("dojo-bidi")?"dojox.mobile.NonBidiTabBarButton":"dojox.mobile.TabBarButton",l,{
icon1:"",icon2:"",iconPos1:"",iconPos2:"",selected:!1,transition:"none",tag:"li",
badge:"",baseClass:"mblTabBarButton",closeIcon:"mblDomButtonWhiteCross",_selStartMethod:"touch",
_selEndMethod:"touch",_moveTo:"",destroy:function(){this.badgeObj&&delete this.badgeObj,
this.inherited(arguments)},inheritParams:function(){this.icon&&!this.icon1&&(this.icon1=this.icon);
var o=this.getParent();o&&(this.transition||(this.transition=o.transition),this.icon1&&o.iconBase&&"/"===o.iconBase.charAt(o.iconBase.length-1)&&(this.icon1=o.iconBase+this.icon1),
this.icon1||(this.icon1=o.iconBase),this.iconPos1||(this.iconPos1=o.iconPos),this.icon2&&o.iconBase&&"/"===o.iconBase.charAt(o.iconBase.length-1)&&(this.icon2=o.iconBase+this.icon2),
this.icon2||(this.icon2=o.iconBase||this.icon1),this.iconPos2||(this.iconPos2=o.iconPos||this.iconPos1),
o.closable&&(this.icon1||(this.icon1=this.closeIcon),this.icon2||(this.icon2=this.closeIcon),
n.add(this.domNode,"mblTabBarButtonClosable")))},buildRendering:function(){if(this.domNode=this.srcNodeRef||d.create(this.tag),
this.srcNodeRef&&(this.label||(this.label=e.trim(this.srcNodeRef.innerHTML)),this.srcNodeRef.innerHTML=""),
this.labelNode=this.box=d.create("div",{className:"mblTabBarButtonLabel"},this.domNode),
a.set(this.domNode,"role","tab"),a.set(this.domNode,"aria-selected","false"),this._moveTo=this._getMoveToId(),
this._moveTo){var o=s.byId(this._moveTo);o&&(a.set(this.domNode,"aria-controls",this._moveTo),
a.set(o,"role","tabpanel"),a.set(o,"aria-labelledby",this.id))}this.inherited(arguments);
},startup:function(){if(!this._started){this._dragstartHandle=this.connect(this.domNode,"ondragstart",i.stop),
this.connect(this.domNode,"onkeydown","_onClick");var o=this.getParent();o&&o.closable&&(this._clickCloseHandler=this.connect(this.iconDivNode,"onclick","_onCloseButtonClick"),
this._keydownCloseHandler=this.connect(this.iconDivNode,"onkeydown","_onCloseButtonClick"),
this.iconDivNode.tabIndex="0"),this.inherited(arguments),this._isOnLine||(this._isOnLine=!0,
this.set({icon:void 0!==this._pendingIcon?this._pendingIcon:this.icon,icon1:this.icon1,
icon2:this.icon2}),delete this._pendingIcon),s.setSelectable(this.domNode,!1)}},onClose:function(t){
return o.publish("/dojox/mobile/tabClose",[this]),this.getParent().onCloseButtonClick(this);
},_onCloseButtonClick:function(o){o&&"keydown"===o.type&&13!==o.keyCode||this.onCloseButtonClick(o)!==!1&&this.onClose()&&this.destroy();
},onCloseButtonClick:function(){},_onClick:function(o){o&&"keydown"===o.type&&13!==o.keyCode||this.onClick(o)!==!1&&this.defaultClickAction(o);
},onClick:function(){},_setIcon:function(o,t){this.getParent()&&(this._set("icon"+t,o),
this.iconDivNode||(this.iconDivNode=d.create("div",{className:"mblTabBarButtonIconArea"
},this.domNode,"first")),this["iconParentNode"+t]||(this["iconParentNode"+t]=d.create("div",{
className:"mblTabBarButtonIconParent mblTabBarButtonIconParent"+t},this.iconDivNode)),
this["iconNode"+t]=r.setIcon(o,this["iconPos"+t],this["iconNode"+t],this.alt,this["iconParentNode"+t]),
this["icon"+t]=o,n.toggle(this.domNode,"mblTabBarButtonHasIcon",o&&"none"!==o))},
_getMoveToId:function(){if(this.moveTo){if("#"===this.moveTo)return"";var o="";return o="object"==typeof this.moveTo&&this.moveTo.moveTo?this.moveTo.moveTo:this.moveTo,
o&&(o=h.prototype.convertToId(o)),o}},_setIcon1Attr:function(o){this._setIcon(o,1);
},_setIcon2Attr:function(o){this._setIcon(o,2)},_getBadgeAttr:function(){return this.badgeObj&&this.badgeObj.domNode.parentNode&&1==this.badgeObj.domNode.parentNode.nodeType?this.badgeObj.getValue():null;
},_setBadgeAttr:function(o){this.badgeObj||(this.badgeObj=new b({fontSize:11}),c.set(this.badgeObj.domNode,{
position:"absolute",top:"0px",right:"0px"})),this.badgeObj.setValue(o),o?this.domNode.appendChild(this.badgeObj.domNode):this.domNode===this.badgeObj.domNode.parentNode&&this.domNode.removeChild(this.badgeObj.domNode);
},_setSelectedAttr:function(o){if(this.inherited(arguments),n.toggle(this.domNode,"mblTabBarButtonSelected",o),
a.set(this.domNode,"aria-selected",o?"true":"false"),this._moveTo){var t=s.byId(this._moveTo);
t&&a.set(t,"aria-hidden",o?"false":"true")}}});return m("dojo-bidi")?t("dojox.mobile.TabBarButton",[B,u]):B;
});