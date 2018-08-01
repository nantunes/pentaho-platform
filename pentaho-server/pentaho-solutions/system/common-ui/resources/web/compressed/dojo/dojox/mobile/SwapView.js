define(["dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/dom","dojo/dom-class","dijit/registry","./View","./_ScrollableMixin","./sniff","./_css3","dojo/has!dojo-bidi?dojox/mobile/bidi/SwapView"],function(i,e,o,t,n,s,d,r,a,h,l){
var m=o(a("dojo-bidi")?"dojox.mobile.NonBidiSwapView":"dojox.mobile.SwapView",[d,r],{
scrollDir:"f",weight:1.2,_endOfTransitionTimeoutHandle:null,buildRendering:function(){
this.inherited(arguments),n.add(this.domNode,"mblSwapView"),this.setSelectable(this.domNode,!1),
this.containerNode=this.domNode,this.subscribe("/dojox/mobile/nextPage","handleNextPage"),
this.subscribe("/dojox/mobile/prevPage","handlePrevPage"),this.noResize=!0},startup:function(){
this._started||this.inherited(arguments)},resize:function(){this.inherited(arguments),
i.forEach(this.getChildren(),function(i){i.resize&&i.resize()})},onTouchStart:function(i){
if(this._siblingViewsInMotion())return void(this.propagatable?i.preventDefault():event.stop(i));
var e=this.domNode.offsetTop,o=this.nextView(this.domNode);o&&(o.stopAnimation(),
n.add(o.domNode,"mblIn"),o.containerNode.style.paddingTop=e+"px");var t=this.previousView(this.domNode);
t&&(t.stopAnimation(),n.add(t.domNode,"mblIn"),t.containerNode.style.paddingTop=e+"px"),
this._setSiblingViewsInMotion(!0),this.inherited(arguments)},onTouchEnd:function(i){
i&&(this._moved?this._endOfTransitionTimeoutHandle=this.defer(function(){this._setSiblingViewsInMotion(!1);
},1e3):this._setSiblingViewsInMotion(!1)),this.inherited(arguments)},handleNextPage:function(i){
var e=i.refId&&t.byId(i.refId)||i.domNode;this.domNode.parentNode===e.parentNode&&this.getShowingView()===this&&this.goTo(1);
},handlePrevPage:function(i){var e=i.refId&&t.byId(i.refId)||i.domNode;this.domNode.parentNode===e.parentNode&&this.getShowingView()===this&&this.goTo(-1);
},goTo:function(i,o){var t=o?s.byId(o):1==i?this.nextView(this.domNode):this.previousView(this.domNode);
t&&t!==this&&(this.stopAnimation(),t.stopAnimation(),this.domNode._isShowing=!1,t.domNode._isShowing=!0,
this.performTransition(t.id,i,"slide",null,function(){e.publish("/dojox/mobile/viewChanged",[t]);
}))},isSwapView:function(i){return i&&1===i.nodeType&&n.contains(i,"mblSwapView");
},nextView:function(i){for(var e=i.nextSibling;e;e=e.nextSibling)if(this.isSwapView(e))return s.byNode(e);
return null},previousView:function(i){for(var e=i.previousSibling;e;e=e.previousSibling)if(this.isSwapView(e))return s.byNode(e);
return null},scrollTo:function(i){if(!this._beingFlipped){var e,o;i.x&&(i.x<0?(e=this.nextView(this.domNode),
o=i.x+this.domNode.offsetWidth):(e=this.previousView(this.domNode),o=i.x-this.domNode.offsetWidth)),
e&&("none"===e.domNode.style.display&&(e.domNode.style.display="",e.resize()),e._beingFlipped=!0,
e.scrollTo({x:o}),e._beingFlipped=!1)}this.inherited(arguments)},findDisp:function(i){
if(!n.contains(i,"mblSwapView"))return this.inherited(arguments);if(!i.parentNode)return null;
for(var e=i.parentNode.childNodes,o=0;o<e.length;o++){var t=e[o];if(1===t.nodeType&&n.contains(t,"mblSwapView")&&!n.contains(t,"mblIn")&&"none"!==t.style.display)return t;
}return i},slideTo:function(i,e,o,t){if(!this._beingFlipped){var n,s,d=this.domNode.offsetWidth,r=t||this.getPos();
r.x<0?(n=this.nextView(this.domNode),r.x<-d/4?n&&(i.x=-d,s=0):n&&(s=d)):(n=this.previousView(this.domNode),
r.x>d/4?n&&(i.x=d,s=0):n&&(s=-d)),n&&(n._beingFlipped=!0,n.slideTo({x:s},e,o),n._beingFlipped=!1,
n.domNode._isShowing=n&&0===s),this.domNode._isShowing=!(n&&0===s)}this.inherited(arguments);
},onAnimationEnd:function(i){i&&i.target&&n.contains(i.target,"mblScrollableScrollTo2")||this.inherited(arguments);
},onFlickAnimationEnd:function(o){this._endOfTransitionTimeoutHandle&&(this._endOfTransitionTimeoutHandle=this._endOfTransitionTimeoutHandle.remove()),
o&&o.target&&!n.contains(o.target,"mblScrollableScrollTo2")||(this.inherited(arguments),
this.domNode._isShowing?(i.forEach(this.domNode.parentNode.childNodes,function(i){
this.isSwapView(i)&&(n.remove(i,"mblIn"),i._isShowing||(i.style.display="none",i.style[h.name("transform")]="",
i.style.left="0px",i.style.paddingTop=""))},this),e.publish("/dojox/mobile/viewChanged",[this]),
this.containerNode.style.paddingTop=""):a("css3-animations")||(this.containerNode.style.left="0px"),
this._setSiblingViewsInMotion(!1))},_setSiblingViewsInMotion:function(i){var e=i?"true":!1,o=this.domNode.parentNode;
o&&o.setAttribute("data-dojox-mobile-swapview-inmotion",e)},_siblingViewsInMotion:function(){
var i=this.domNode.parentNode;return i?"true"==i.getAttribute("data-dojox-mobile-swapview-inmotion"):!1;
}});return a("dojo-bidi")?o("dojox.mobile.SwapView",[m,l]):m});