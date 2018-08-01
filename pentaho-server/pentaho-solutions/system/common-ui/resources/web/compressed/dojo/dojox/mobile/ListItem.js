define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dijit/registry","dijit/_WidgetBase","./iconUtils","./_ItemBase","./ProgressIndicator","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/ListItem"],function(e,t,i,o,s,h,n,d,c,l,r,a,g,_){
var u=t(g("dojo-bidi")?"dojox.mobile.NonBidiListItem":"dojox.mobile.ListItem",r,{
rightText:"",rightIcon:"",rightIcon2:"",deleteIcon:"",anchorLabel:!1,noArrow:!1,checked:!1,
arrowClass:"",checkClass:"",uncheckClass:"",variableHeight:!1,rightIconTitle:"",rightIcon2Title:"",
header:!1,tag:"li",busy:!1,progStyle:"",paramsToInherit:"variableHeight,transition,deleteIcon,icon,rightIcon,rightIcon2,uncheckIcon,arrowClass,checkClass,uncheckClass,deleteIconTitle,deleteIconRole",
baseClass:"mblListItem",_selStartMethod:"touch",_selEndMethod:"timer",_delayedSelection:!0,
_selClass:"mblListItemSelected",buildRendering:function(){if(this._templated=!!this.templateString,
this._templated||(this.domNode=this.containerNode=this.srcNodeRef||s.create(this.tag)),
this.inherited(arguments),this.selected&&o.add(this.domNode,this._selClass),this.header&&o.replace(this.domNode,"mblEdgeToEdgeCategory",this.baseClass),
!this._templated){this.labelNode=s.create("div",{className:"mblListItemLabel"});var e=this.srcNodeRef;
e&&1===e.childNodes.length&&3===e.firstChild.nodeType&&this.labelNode.appendChild(e.firstChild),
this.domNode.appendChild(this.labelNode)}this._layoutChildren=[]},startup:function(){
if(!this._started){var e=this.getParent(),t=this.getTransOpts();this._templated&&!this.labelNode||!this.anchorLabel||(this.labelNode.style.display="inline",
this.labelNode.style.cursor="pointer",this.connect(this.labelNode,"onclick","_onClick"),
this.onTouchStart=function(e){return e.target!==this.labelNode}),t.moveTo||t.href||t.url||this.clickable||e&&e.select?this.connect(this.domNode,"onkeydown","_onClick"):this._handleClick=!1,
this.inherited(arguments),o.contains(this.domNode,"mblVariableHeight")&&(this.variableHeight=!0),
this.variableHeight&&(o.add(this.domNode,"mblVariableHeight"),this.defer("layoutVariableHeight")),
this._isOnLine||(this._isOnLine=!0,this.set({icon:void 0!==this._pending_icon?this._pending_icon:this.icon,
deleteIcon:void 0!==this._pending_deleteIcon?this._pending_deleteIcon:this.deleteIcon,
rightIcon:void 0!==this._pending_rightIcon?this._pending_rightIcon:this.rightIcon,
rightIcon2:void 0!==this._pending_rightIcon2?this._pending_rightIcon2:this.rightIcon2,
uncheckIcon:void 0!==this._pending_uncheckIcon?this._pending_uncheckIcon:this.uncheckIcon
}),delete this._pending_icon,delete this._pending_deleteIcon,delete this._pending_rightIcon,
delete this._pending_rightIcon2,delete this._pending_uncheckIcon),e&&e.select&&(this.set("checked",void 0!==this._pendingChecked?this._pendingChecked:this.checked),
n.set(this.domNode,"role","option"),(this._pendingChecked||this.checked)&&n.set(this.domNode,"aria-selected","true"),
delete this._pendingChecked),this.setArrow(),this.layoutChildren()}},_updateHandles:function(){
var e=this.getParent(),t=this.getTransOpts();t.moveTo||t.href||t.url||this.clickable||e&&e.select?(this._keydownHandle||(this._keydownHandle=this.connect(this.domNode,"onkeydown","_onClick")),
this._handleClick=!0):(this._keydownHandle&&(this.disconnect(this._keydownHandle),
this._keydownHandle=null),this._handleClick=!1),this.inherited(arguments)},layoutChildren:function(){
var t;e.forEach(this.domNode.childNodes,function(e){if(1===e.nodeType){var i=e.getAttribute("layout")||e.getAttribute("data-mobile-layout")||(d.byNode(e)||{}).layout;
i&&(o.add(e,"mblListItemLayout"+i.charAt(0).toUpperCase()+i.substring(1)),this._layoutChildren.push(e),
"center"===i&&(t=e))}},this),t&&this.domNode.insertBefore(t,this.domNode.firstChild);
},resize:function(){this.variableHeight&&this.layoutVariableHeight(),(!this._templated||this.labelNode)&&(this.labelNode.style.display=this.labelNode.firstChild?"block":"inline");
},_onTouchStart:function(e){e.target.getAttribute("preventTouch")||e.target.getAttribute("data-mobile-prevent-touch")||(d.getEnclosingWidget(e.target)||{}).preventTouch||this.inherited(arguments);
},_onClick:function(e){if(!(this.getParent().isEditing||e&&"keydown"===e.type&&13!==e.keyCode)&&this.onClick(e)!==!1){
var t=this.labelNode;if((this._templated||t)&&this.anchorLabel&&e.currentTarget===t)return o.add(t,"mblListItemLabelSelected"),
this.defer(function(){o.remove(t,"mblListItemLabelSelected")},this._duration),void this.onAnchorLabelClicked(e);
var i=this.getParent();i.select&&("single"===i.select?this.checked||this.set("checked",!0):"multiple"===i.select&&this.set("checked",!this.checked)),
this.defaultClickAction(e)}},onClick:function(){},onAnchorLabelClicked:function(e){},
layoutVariableHeight:function(){var t=this.domNode.offsetHeight;t!==this.domNodeHeight&&(this.domNodeHeight=t,
e.forEach(this._layoutChildren.concat([this.rightTextNode,this.rightIcon2Node,this.rightIconNode,this.uncheckIconNode,this.iconNode,this.deleteIconNode,this.knobIconNode]),function(e){
if(e){var t=this.domNode,i=function(){var i=Math.round((t.offsetHeight-e.offsetHeight)/2)-h.get(t,"paddingTop");
e.style.marginTop=i+"px"};0===e.offsetHeight&&"IMG"===e.tagName?e.onload=i:i()}},this));
},setArrow:function(){if(!this.checked){var e="",t=this.getParent(),i=this.getTransOpts();
(i.moveTo||i.href||i.url||this.clickable)&&(this.noArrow||t&&t.selectOne||(e=this.arrowClass||"mblDomButtonArrow",
n.set(this.domNode,"role","button"))),e&&this._setRightIconAttr(e)}},_findRef:function(t){
var i,o,s=["deleteIcon","icon","rightIcon","uncheckIcon","rightIcon2","rightText"];
for(i=e.indexOf(s,t)+1;i<s.length;i++)if(o=this[s[i]+"Node"])return o;for(i=s.length-1;i>=0;i--)if(o=this[s[i]+"Node"])return o.nextSibling;
return this.domNode.firstChild},_setIcon:function(e,t){if(!this._isOnLine)return void(this["_pending_"+t]=e);
if(this._set(t,e),this[t+"Node"]=l.setIcon(e,this[t+"Pos"],this[t+"Node"],this[t+"Title"]||this.alt,this.domNode,this._findRef(t),"before"),
this[t+"Node"]){var i=t.charAt(0).toUpperCase()+t.substring(1);o.add(this[t+"Node"],"mblListItem"+i);
}var s=this[t+"Role"];s&&this[t+"Node"].setAttribute("role",s)},_setDeleteIconAttr:function(e){
this._setIcon(e,"deleteIcon")},_setIconAttr:function(e){this._setIcon(e,"icon")},
_setRightTextAttr:function(e){this._templated||this.rightTextNode||(this.rightTextNode=s.create("div",{
className:"mblListItemRightText"},this.labelNode,"before")),this.rightText=e,this.rightTextNode.innerHTML=this._cv?this._cv(e):e;
},_setRightIconAttr:function(e){this._setIcon(e,"rightIcon")},_setUncheckIconAttr:function(e){
this._setIcon(e,"uncheckIcon")},_setRightIcon2Attr:function(e){this._setIcon(e,"rightIcon2");
},_setCheckedAttr:function(t){if(!this._isOnLine)return void(this._pendingChecked=t);
var i=this.getParent();i&&"single"===i.select&&t&&e.forEach(i.getChildren(),function(e){
e!==this&&e.checked&&e.set("checked",!1)&&n.set(e.domNode,"aria-selected","false");
},this),this._setRightIconAttr(this.checkClass||"mblDomButtonCheck"),this._setUncheckIconAttr(this.uncheckClass),
o.toggle(this.domNode,"mblListItemChecked",t),o.toggle(this.domNode,"mblListItemUnchecked",!t),
o.toggle(this.domNode,"mblListItemHasUncheck",!!this.uncheckIconNode),this.rightIconNode.style.position=this.uncheckIconNode&&!t?"absolute":"",
i&&this.checked!==t&&i.onCheckStateChanged(this,t),this._set("checked",t),n.set(this.domNode,"aria-selected",t?"true":"false");
},_setBusyAttr:function(e){var t=this._prog;e?(this._progNode||(this._progNode=s.create("div",{
className:"mblListItemIcon"}),t=this._prog=new a({size:25,center:!1,removeOnStop:!1
}),o.add(t.domNode,this.progStyle),this._progNode.appendChild(t.domNode)),this.iconNode?this.domNode.replaceChild(this._progNode,this.iconNode):s.place(this._progNode,this._findRef("icon"),"before"),
t.start()):this._progNode&&(this.iconNode?this.domNode.replaceChild(this.iconNode,this._progNode):this.domNode.removeChild(this._progNode),
t.stop()),this._set("busy",e)},_setSelectedAttr:function(e){this.inherited(arguments),
o.toggle(this.domNode,this._selClass,e)},_setClickableAttr:function(e){this._set("clickable",e),
this._updateHandles()},_setMoveToAttr:function(e){this._set("moveTo",e),this._updateHandles();
},_setHrefAttr:function(e){this._set("href",e),this._updateHandles()},_setUrlAttr:function(e){
this._set("url",e),this._updateHandles()}});return u.ChildWidgetProperties={layout:"",
preventTouch:!1},i.extend(c,u.ChildWidgetProperties),g("dojo-bidi")?t("dojox.mobile.ListItem",[u,_]):u;
});