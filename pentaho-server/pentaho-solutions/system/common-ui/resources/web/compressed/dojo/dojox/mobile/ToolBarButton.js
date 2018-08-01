define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","./sniff","./_ItemBase","dojo/has!dojo-bidi?dojox/mobile/bidi/ToolBarButton"],function(o,t,e,i,l,s,d,a,r,n){
var h=o(a("dojo-bidi")?"dojox.mobile.NonBidiToolBarButton":"dojox.mobile.ToolBarButton",r,{
selected:!1,arrow:"",light:!0,defaultColor:"mblColorDefault",selColor:"mblColorDefaultSel",
baseClass:"mblToolBarButton",_selStartMethod:"touch",_selEndMethod:"touch",buildRendering:function(){
if(!this.label&&this.srcNodeRef&&(this.label=this.srcNodeRef.innerHTML),this.label=t.trim(this.label),
this.domNode=this.srcNodeRef&&"SPAN"===this.srcNodeRef.tagName?this.srcNodeRef:l.create("span"),
d.set(this.domNode,"role","button"),this.inherited(arguments),!(!this.light||this.arrow||this.icon&&this.label))return this.labelNode=this.tableNode=this.bodyNode=this.iconParentNode=this.domNode,
void i.add(this.domNode,this.defaultColor+" mblToolBarButtonBody"+(this.icon?" mblToolBarButtonLightIcon":" mblToolBarButtonLightText"));
this.domNode.innerHTML="",("left"===this.arrow||"right"===this.arrow)&&(this.arrowNode=l.create("span",{
className:"mblToolBarButtonArrow mblToolBarButton"+("left"===this.arrow?"Left":"Right")+"Arrow "+(a("ie")<10?"":this.defaultColor+" "+this.defaultColor+"45")
},this.domNode),i.add(this.domNode,"mblToolBarButtonHas"+("left"===this.arrow?"Left":"Right")+"Arrow")),
this.bodyNode=l.create("span",{className:"mblToolBarButtonBody"},this.domNode),this.tableNode=l.create("table",{
cellPadding:"0",cellSpacing:"0",border:"0"},this.bodyNode),!this.label&&this.arrow&&(this.tableNode.className="mblToolBarButtonText");
var o=this.tableNode.insertRow(-1);this.iconParentNode=o.insertCell(-1),this.labelNode=o.insertCell(-1),
this.iconParentNode.className="mblToolBarButtonIcon",this.labelNode.className="mblToolBarButtonLabel",
this.icon&&"none"!==this.icon&&this.label&&(i.add(this.domNode,"mblToolBarButtonHasIcon"),
i.add(this.bodyNode,"mblToolBarButtonLabeledIcon")),i.add(this.bodyNode,this.defaultColor);
},startup:function(){this._started||(this.connect(this.domNode,"onkeydown","_onClick"),
this.inherited(arguments),this._isOnLine||(this._isOnLine=!0,this.set("icon",void 0!==this._pendingIcon?this._pendingIcon:this.icon),
delete this._pendingIcon))},_onClick:function(o){o&&"keydown"===o.type&&13!==o.keyCode||this.onClick(o)!==!1&&this.defaultClickAction(o);
},onClick:function(){},_setLabelAttr:function(o){this.inherited(arguments),i.toggle(this.tableNode,"mblToolBarButtonText",o||this.arrow);
},_setSelectedAttr:function(o){var t=function(o,t,e){i.replace(o,t+" "+t+"45",e+" "+e+"45");
};this.inherited(arguments),o?(i.replace(this.bodyNode,this.selColor,this.defaultColor),
a("ie")<10||!this.arrowNode||t(this.arrowNode,this.selColor,this.defaultColor)):(i.replace(this.bodyNode,this.defaultColor,this.selColor),
a("ie")<10||!this.arrowNode||t(this.arrowNode,this.defaultColor,this.selColor)),i.toggle(this.domNode,"mblToolBarButtonSelected",o),
i.toggle(this.bodyNode,"mblToolBarButtonBodySelected",o)}});return a("dojo-bidi")?o("dojox.mobile.ToolBarButton",[h,n]):h;
});