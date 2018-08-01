define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/sniff","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-attr","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","./iconUtils","./lazyLoadUtils","./_css3","require","dojo/has!dojo-bidi?dojox/mobile/bidi/Accordion"],function(e,t,i,o,n,s,d,a,c,h,r,l,m,u,f,g){
var N=t([r,c],{label:"Label",icon1:"",icon2:"",iconPos1:"",iconPos2:"",selected:!1,
baseClass:"mblAccordionTitle",buildRendering:function(){this.inherited(arguments);
var e=this.anchorNode=d.create("a",{className:"mblAccordionTitleAnchor",role:"presentation"
},this.domNode);this.textBoxNode=d.create("div",{className:"mblAccordionTitleTextBox"
},e),this.labelNode=d.create("span",{className:"mblAccordionTitleLabel",innerHTML:this._cv?this._cv(this.label):this.label
},this.textBoxNode),this._isOnLine=this.inheritParams(),a.set(this.textBoxNode,"role","tab"),
a.set(this.textBoxNode,"tabindex","0")},postCreate:function(){this.connect(this.domNode,"onclick","_onClick"),
n.setSelectable(this.domNode,!1)},inheritParams:function(){var e=this.getParent();
return e&&(this.icon1&&e.iconBase&&"/"===e.iconBase.charAt(e.iconBase.length-1)&&(this.icon1=e.iconBase+this.icon1),
this.icon1||(this.icon1=e.iconBase),this.iconPos1||(this.iconPos1=e.iconPos),this.icon2&&e.iconBase&&"/"===e.iconBase.charAt(e.iconBase.length-1)&&(this.icon2=e.iconBase+this.icon2),
this.icon2||(this.icon2=e.iconBase||this.icon1),this.iconPos2||(this.iconPos2=e.iconPos||this.iconPos1)),
!!e},_setIcon:function(e,t){this.getParent()&&(this._set("icon"+t,e),this["iconParentNode"+t]||(this["iconParentNode"+t]=d.create("div",{
className:"mblAccordionIconParent mblAccordionIconParent"+t},this.anchorNode,"first")),
this["iconNode"+t]=l.setIcon(e,this["iconPos"+t],this["iconNode"+t],this.alt,this["iconParentNode"+t]),
this["icon"+t]=e,s.toggle(this.domNode,"mblAccordionHasIcon",e&&"none"!==e))},_setIcon1Attr:function(e){
this._setIcon(e,1)},_setIcon2Attr:function(e){this._setIcon(e,2)},startup:function(){
this._started||(this._isOnLine||this.inheritParams(),this._isOnLine||this.set({icon1:this.icon1,
icon2:this.icon2}),this.inherited(arguments))},_onClick:function(e){if(this.onClick(e)!==!1){
var t=this.getParent();t.fixedHeight||"none"===this.contentWidget.domNode.style.display?t.expand(this.contentWidget,!t.animation):t.collapse(this.contentWidget,!t.animation);
}},onClick:function(){},_setSelectedAttr:function(e){s.toggle(this.domNode,"mblAccordionTitleSelected",e),
this._set("selected",e)}}),_=t(o("dojo-bidi")?"dojox.mobile.NonBidiAccordion":"dojox.mobile.Accordion",[r,h,c],{
iconBase:"",iconPos:"",fixedHeight:!1,singleOpen:!1,animation:!0,roundRect:!1,duration:.3,
baseClass:"mblAccordion",_openSpace:1,buildRendering:function(){this.inherited(arguments),
a.set(this.domNode,"role","tablist"),a.set(this.domNode,"aria-multiselectable",!this.singleOpen);
},startup:function(){if(!this._started){s.contains(this.domNode,"mblAccordionRoundRect")?this.roundRect=!0:this.roundRect&&s.add(this.domNode,"mblAccordionRoundRect"),
this.fixedHeight&&(this.singleOpen=!0);var t=this.getChildren();e.forEach(t,this._setupChild,this);
var i,o=1;e.forEach(t,function(e){e.startup(),e._at.startup(),this.collapse(e,!0),
a.set(e._at.textBoxNode,"aria-setsize",t.length),a.set(e._at.textBoxNode,"aria-posinset",o++),
e.selected&&(i=e)},this),!i&&this.fixedHeight&&(i=t[t.length-1]),i?this.expand(i,!0):this._updateLast(),
this.defer(function(){this.resize()}),this._started=!0}},_setupChild:function(e){
"hidden"!=e.domNode.style.overflow&&(e.domNode.style.overflow=this.fixedHeight?"auto":"hidden"),
e._at=new N({label:e.label,alt:e.alt,icon1:e.icon1,icon2:e.icon2,iconPos1:e.iconPos1,
iconPos2:e.iconPos2,contentWidget:e}),d.place(e._at.domNode,e.domNode,"before"),s.add(e.domNode,"mblAccordionPane"),
a.set(e._at.textBoxNode,"aria-controls",e.domNode.id),a.set(e.domNode,"role","tabpanel"),
a.set(e.domNode,"aria-labelledby",e._at.id)},addChild:function(e,t){this.inherited(arguments),
this._started&&(this._setupChild(e),e._at.startup(),e.selected?(this.expand(e,!0),
this.defer(function(){e.domNode.style.height=""})):this.collapse(e)),this._addChildAriaAttrs();
},removeChild:function(e){"number"==typeof e&&(e=this.getChildren()[e]),e&&e._at.destroy(),
this.inherited(arguments),this._addChildAriaAttrs()},_addChildAriaAttrs:function(){
var t=1,i=this.getChildren();e.forEach(i,function(e){a.set(e._at.textBoxNode,"aria-posinset",t++),
a.set(e._at.textBoxNode,"aria-setsize",i.length)})},getChildren:function(){return e.filter(this.inherited(arguments),function(e){
return!(e instanceof N)})},getSelectedPanes:function(){return e.filter(this.getChildren(),function(e){
return"none"!=e.domNode.style.display})},resize:function(){if(this.fixedHeight){var t=e.filter(this.getChildren(),function(e){
return"none"!=e._at.domNode.style.display}),i=this.domNode.clientHeight;e.forEach(t,function(e){
i-=e._at.domNode.offsetHeight}),this._openSpace=i>0?i:0;var o=this.getSelectedPanes()[0];
o.domNode.style[u.name("transition")]="",o.domNode.style.height=this._openSpace+"px";
}},_updateLast:function(){var t=this.getChildren();e.forEach(t,function(e,i){s.toggle(e._at.domNode,"mblAccordionTitleLast",i===t.length-1&&!s.contains(e._at.domNode,"mblAccordionTitleSelected"));
},this)},expand:function(t,i){t.lazy&&(m.instantiateLazyWidgets(t.containerNode,t.requires),
t.lazy=!1);var o=this.getChildren();e.forEach(o,function(e,o){if(e.domNode.style[u.name("transition")]=i?"":"height "+this.duration+"s linear",
e===t){e.domNode.style.display="";var n;this.fixedHeight?n=this._openSpace:(n=parseInt(e.height||e.domNode.getAttribute("height")),
n||(e.domNode.style.height="",n=e.domNode.offsetHeight,e.domNode.style.height="0px")),
this.defer(function(){e.domNode.style.height=n+"px"}),this.select(t)}else this.singleOpen&&this.collapse(e,i);
},this),this._updateLast(),a.set(t.domNode,"aria-expanded","true"),a.set(t.domNode,"aria-hidden","false");
},collapse:function(e,t){if("none"!==e.domNode.style.display){if(e.domNode.style[u.name("transition")]=t?"":"height "+this.duration+"s linear",
e.domNode.style.height="0px",!o("css3-animations")||t)e.domNode.style.display="none",
this._updateLast();else{var i=this;i.defer(function(){if(e.domNode.style.display="none",
i._updateLast(),!i.fixedHeight&&i.singleOpen)for(var t=i.getParent();t;t=t.getParent())if(s.contains(t.domNode,"mblView")){
t&&t.resize&&t.resize();break}},1e3*this.duration)}this.deselect(e),a.set(e.domNode,"aria-expanded","false"),
a.set(e.domNode,"aria-hidden","true")}},select:function(e){e._at.set("selected",!0),
a.set(e._at.textBoxNode,"aria-selected","true")},deselect:function(e){e._at.set("selected",!1),
a.set(e._at.textBoxNode,"aria-selected","false")}});return _.ChildWidgetProperties={
alt:"",label:"",icon1:"",icon2:"",iconPos1:"",iconPos2:"",selected:!1,lazy:!1},i.extend(r,_.ChildWidgetProperties),
o("dojo-bidi")?t("dojox.mobile.Accordion",[_,g]):_});