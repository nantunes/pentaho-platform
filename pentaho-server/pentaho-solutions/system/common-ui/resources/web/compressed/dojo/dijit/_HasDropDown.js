define(["dojo/_base/declare","dojo/_base/Deferred","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/has","dojo/keys","dojo/_base/lang","dojo/on","dojo/touch","./registry","./focus","./popup","./_FocusMixin"],function(o,t,e,i,n,s,r,d,p,h,a,u,D,c,l,f){
return o("dijit._HasDropDown",f,{_buttonNode:null,_arrowWrapperNode:null,_popupStateNode:null,
_aroundNode:null,dropDown:null,autoWidth:!0,forceWidth:!1,maxHeight:-1,dropDownPosition:["below","above"],
_stopClickEvents:!0,_onDropDownMouseDown:function(o){this.disabled||this.readOnly||("MSPointerDown"!=o.type&&"pointerdown"!=o.type&&o.preventDefault(),
this._docHandler=this.own(a(this.ownerDocument,u.release,h.hitch(this,"_onDropDownMouseUp")))[0],
this.toggleDropDown())},_onDropDownMouseUp:function(o){o&&this._docHandler&&(this._docHandler.remove(),
this._docHandler=null);var t=this.dropDown,e=!1;if(o&&this._opened){var i=s.position(this._buttonNode,!0);
if(!(o.pageX>=i.x&&o.pageX<=i.x+i.w&&o.pageY>=i.y&&o.pageY<=i.y+i.h)){for(var r=o.target;r&&!e;)n.contains(r,"dijitPopup")?e=!0:r=r.parentNode;
if(e){if(r=o.target,t.onItemClick){for(var d;r&&!(d=D.byNode(r));)r=r.parentNode;d&&d.onClick&&d.getParent&&d.getParent().onItemClick(d,o);
}return}}}this._opened?t.focus&&(t.autoFocus!==!1||"mouseup"==o.type&&!this.hovering)&&(this._focusDropDownTimer=this.defer(function(){
t.focus(),delete this._focusDropDownTimer})):this.focus&&this.defer("focus")},_onDropDownClick:function(o){
this._stopClickEvents&&(o.stopPropagation(),o.preventDefault())},buildRendering:function(){
this.inherited(arguments),this._buttonNode=this._buttonNode||this.focusNode||this.domNode,
this._popupStateNode=this._popupStateNode||this.focusNode||this._buttonNode;var o={
after:this.isLeftToRight()?"Right":"Left",before:this.isLeftToRight()?"Left":"Right",
above:"Up",below:"Down",left:"Left",right:"Right"}[this.dropDownPosition[0]]||this.dropDownPosition[0]||"Down";
n.add(this._arrowWrapperNode||this._buttonNode,"dijit"+o+"ArrowButton")},postCreate:function(){
this.inherited(arguments);var o=this.focusNode||this.domNode;this.own(a(this._buttonNode,u.press,h.hitch(this,"_onDropDownMouseDown")),a(this._buttonNode,"click",h.hitch(this,"_onDropDownClick")),a(o,"keydown",h.hitch(this,"_onKey")),a(o,"keyup",h.hitch(this,"_onKeyUp")));
},destroy:function(){this.dropDown&&(this.dropDown._destroyed||this.dropDown.destroyRecursive(),
delete this.dropDown),this.inherited(arguments)},_onKey:function(o){if(!this.disabled&&!this.readOnly){
var t=this.dropDown,e=o.target;return t&&this._opened&&t.handleKey&&t.handleKey(o)===!1?(o.stopPropagation(),
void o.preventDefault()):void(t&&this._opened&&o.keyCode==p.ESCAPE?(this.closeDropDown(),
o.stopPropagation(),o.preventDefault()):!this._opened&&(o.keyCode==p.DOWN_ARROW||(o.keyCode==p.ENTER||o.keyCode==p.SPACE&&(!this._searchTimer||o.ctrlKey||o.altKey||o.metaKey))&&("input"!==(e.tagName||"").toLowerCase()||e.type&&"text"!==e.type.toLowerCase()))&&(this._toggleOnKeyUp=!0,
o.stopPropagation(),o.preventDefault()))}},_onKeyUp:function(){if(this._toggleOnKeyUp){
delete this._toggleOnKeyUp,this.toggleDropDown();var o=this.dropDown;o&&o.focus&&this.defer(h.hitch(o,"focus"),1);
}},_onBlur:function(){this.closeDropDown(!1),this.inherited(arguments)},isLoaded:function(){
return!0},loadDropDown:function(o){o()},loadAndOpenDropDown:function(){var o=new t,e=h.hitch(this,function(){
this.openDropDown(),o.resolve(this.dropDown)});return this.isLoaded()?e():this.loadDropDown(e),
o},toggleDropDown:function(){this.disabled||this.readOnly||(this._opened?this.closeDropDown(!0):this.loadAndOpenDropDown());
},openDropDown:function(){var o=this.dropDown,t=o.domNode,e=this._aroundNode||this.domNode,r=this,d=l.open({
parent:this,popup:o,around:e,orient:this.dropDownPosition,maxHeight:this.maxHeight,
onExecute:function(){r.closeDropDown(!0)},onCancel:function(){r.closeDropDown(!0);
},onClose:function(){i.set(r._popupStateNode,"popupActive",!1),n.remove(r._popupStateNode,"dijitHasDropDownOpen"),
r._set("_opened",!1)}});if(this.forceWidth||this.autoWidth&&e.offsetWidth>o._popupWrapper.offsetWidth){
var p={w:e.offsetWidth-(o._popupWrapper.offsetWidth-o.domNode.offsetWidth)};h.isFunction(o.resize)?o.resize(p):s.setMarginBox(t,p);
}return i.set(this._popupStateNode,"popupActive","true"),n.add(this._popupStateNode,"dijitHasDropDownOpen"),
this._set("_opened",!0),this._popupStateNode.setAttribute("aria-expanded","true"),
this._popupStateNode.setAttribute("aria-owns",o.id),"presentation"===t.getAttribute("role")||t.getAttribute("aria-labelledby")||t.setAttribute("aria-labelledby",this.id),
d},closeDropDown:function(o){this._focusDropDownTimer&&(this._focusDropDownTimer.remove(),
delete this._focusDropDownTimer),this._opened&&(this._popupStateNode.setAttribute("aria-expanded","false"),
o&&this.focus(),l.close(this.dropDown),this._opened=!1)}})});