define("dojox/layout/ToggleSplitter",["dojo","dijit","dijit/layout/BorderContainer"],function(t,e){
t.experimental("dojox.layout.ToggleSplitter");var o=t.declare("dojox.layout.ToggleSplitter",e.layout._Splitter,{
container:null,child:null,region:null,state:"full",_closedSize:"0",baseClass:"dojoxToggleSplitter",
templateString:'<div class="dijitSplitter dojoxToggleSplitter" dojoAttachEvent="onkeypress:_onKeyPress,onmousedown:_startDrag,onmouseenter:_onMouse,onmouseleave:_onMouse"><div dojoAttachPoint="toggleNode" class="dijitSplitterThumb dojoxToggleSplitterIcon" tabIndex="0" role="separator" dojoAttachEvent="onmousedown:_onToggleNodeMouseDown,onclick:_toggle,onmouseenter:_onToggleNodeMouseMove,onmouseleave:_onToggleNodeMouseMove,onfocus:_onToggleNodeMouseMove,onblur:_onToggleNodeMouseMove"><span class="dojoxToggleSplitterA11y" dojoAttachPoint="a11yText"></span></div></div>',
postCreate:function(){this.inherited(arguments);var e=this.region;t.addClass(this.domNode,this.baseClass+e.charAt(0).toUpperCase()+e.substring(1));
},startup:function(){this.inherited(arguments);var e=(this.child,this.child.domNode),o=t.style(e,this.horizontal?"height":"width");
return this.domNode.setAttribute("aria-controls",e.id),t.forEach(["toggleSplitterState","toggleSplitterFullSize","toggleSplitterCollapsedSize"],function(t){
var e=t.substring("toggleSplitter".length);e=e.charAt(0).toLowerCase()+e.substring(1),
t in this.child&&(this[e]=this.child[t])},this),this.fullSize||(this.fullSize="full"==this.state?o+"px":"75px"),
this._openStyleProps=this._getStyleProps(e,"full"),this._started=!0,this.set("state",this.state),
this},_onKeyPress:function(e){"full"==this.state&&this.inherited(arguments),(e.charCode==t.keys.SPACE||e.keyCode==t.keys.ENTER)&&(this._toggle(e),
t.stopEvent(e))},_onToggleNodeMouseDown:function(e){t.stopEvent(e),this.toggleNode.focus();
},_startDrag:function(t){"full"==this.state&&this.inherited(arguments)},_stopDrag:function(t){
this.inherited(arguments),this.toggleNode.blur()},_toggle:function(t){var e;switch(this.state){
case"full":e=this.collapsedSize?"collapsed":"closed";break;case"collapsed":e="closed";
break;default:e="full"}this.set("state",e)},_onToggleNodeMouseMove:function(e){var o=this.baseClass,s=this.toggleNode,l="full"==this.state||"collapsed"==this.state,i="mouseout"==e.type||"blur"==e.type;
t.toggleClass(s,o+"IconOpen",i&&l),t.toggleClass(s,o+"IconOpenHover",!i&&l),t.toggleClass(s,o+"IconClosed",i&&!l),
t.toggleClass(s,o+"IconClosedHover",!i&&!l)},_handleOnChange:function(e){var o,s,l=this.child.domNode,i=this.horizontal?"height":"width";
if("full"==this.state){var n=t.mixin({display:"block",overflow:"auto",visibility:"visible"
},this._openStyleProps);n[i]=this._openStyleProps&&this._openStyleProps[i]?this._openStyleProps[i]:this.fullSize,
t.style(this.domNode,"cursor",""),t.style(l,n)}else if("collapsed"==this.state)s=t.getComputedStyle(l),
o=this._getStyleProps(l,"full",s),this._openStyleProps=o,t.style(this.domNode,"cursor","auto"),
t.style(l,i,this.collapsedSize);else{this.collapsedSize||(s=t.getComputedStyle(l),
o=this._getStyleProps(l,"full",s),this._openStyleProps=o);var a=this._getStyleProps(l,"closed",s);
t.style(this.domNode,"cursor","auto"),t.style(l,a)}this._setStateClass(),this.container._started&&this.container._layoutChildren(this.region);
},_getStyleProps:function(e,o,s){s||(s=t.getComputedStyle(e));var l={},i=this.horizontal?"height":"width";
l.overflow="closed"!=o?s.overflow:"hidden",l.visibility="closed"!=o?s.visibility:"hidden",
l[i]="closed"!=o?e.style[i]||s[i]:this._closedSize;var n=["Top","Right","Bottom","Left"];
return t.forEach(["padding","margin","border"],function(t){for(var e=0;e<n.length;e++){
var i=t+n[e];"border"==t&&(i+="Width"),void 0!==s[i]&&(l[i]="closed"!=o?s[i]:0)}}),
l},_setStateClass:function(){var e="&#9652",o=this.region.toLowerCase(),s=this.baseClass,l=this.toggleNode,i="full"==this.state||"collapsed"==this.state,n=this.focused;
t.toggleClass(l,s+"IconOpen",i&&!n),t.toggleClass(l,s+"IconClosed",!i&&!n),t.toggleClass(l,s+"IconOpenHover",i&&n),
t.toggleClass(l,s+"IconClosedHover",!i&&n),"top"==o&&i||"bottom"==o&&!i?e="&#9650":"top"==o&&!i||"bottom"==o&&i?e="&#9660":"right"==o&&i||"left"==o&&!i?e="&#9654":("right"==o&&!i||"left"==o&&i)&&(e="&#9664"),
this.a11yText.innerHTML=e},_setStateAttr:function(t){if(this._started){var e=this.state;
this.state=t,this._handleOnChange(e);var o;switch(t){case"full":this.domNode.setAttribute("aria-expanded",!0),
o="onOpen";break;case"collapsed":this.domNode.setAttribute("aria-expanded",!0),o="onCollapsed";
break;default:this.domNode.setAttribute("aria-expanded",!1),o="onClosed"}this[o](this.child);
}},onOpen:function(t){},onCollapsed:function(t){},onClosed:function(t){}});return t.extend(e._Widget,{
toggleSplitterState:"full",toggleSplitterFullSize:"",toggleSplitterCollapsedSize:""
}),o});