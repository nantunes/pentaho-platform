define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/connect","dojo/_base/event","dojo/_base/fx","dojo/dom-style","dojo/dom-class","dojo/dom-geometry","dojo/text!./resources/ExpandoPane.html","dijit/layout/ContentPane","dijit/_TemplatedMixin","dijit/_Contained","dijit/_Container"],function(i,t,e,s,o,n,h,a,r,d,_,p,c,l,g){
return i.experimental("dojox.layout.ExpandoPane"),e("dojox.layout.ExpandoPane",[p,c,l,g],{
attributeMap:t.delegate(p.prototype.attributeMap,{title:{node:"titleNode",type:"innerHTML"
}}),templateString:_,easeOut:"dojo._DefaultEasing",easeIn:"dojo._DefaultEasing",duration:420,
startExpanded:!0,previewOpacity:.75,previewOnDblClick:!1,tabIndex:"0",_setTabIndexAttr:"iconNode",
baseClass:"dijitExpandoPane",postCreate:function(){this.inherited(arguments),this._animConnects=[],
this._isHorizontal=!0,t.isString(this.easeOut)&&(this.easeOut=t.getObject(this.easeOut)),
t.isString(this.easeIn)&&(this.easeIn=t.getObject(this.easeIn));var i="",e=!this.isLeftToRight();
if(this.region){switch(this.region){case"trailing":case"right":i=e?"Left":"Right",
this._needsPosition="left";break;case"leading":case"left":i=e?"Right":"Left";break;
case"top":i="Top";break;case"bottom":this._needsPosition="top",i="Bottom"}r.add(this.domNode,"dojoxExpando"+i),
r.add(this.iconNode,"dojoxExpandoIcon"+i),this._isHorizontal=/top|bottom/.test(this.region);
}a.set(this.domNode,{overflow:"hidden",padding:0}),this.connect(this.domNode,"ondblclick",this.previewOnDblClick?"preview":"toggle"),
this.iconNode.setAttribute("aria-controls",this.id),this.previewOnDblClick&&this.connect(this.getParent(),"_layoutChildren",t.hitch(this,function(){
this._isonlypreview=!1}))},_startupSizes:function(){if(this._container=this.getParent(),
this._closedSize=this._titleHeight=d.getMarginBox(this.titleWrapper).h,this.splitter){
var i=this.id;s.forEach(dijit.registry.toArray(),function(t){t&&t.child&&t.child.id==i&&this.connect(t,"_stopDrag","_afterResize");
},this)}this._currentSize=d.getContentBox(this.domNode),this._showSize=this._currentSize[this._isHorizontal?"h":"w"],
this._setupAnims(),this.startExpanded?this._showing=!0:(this._showing=!1,this._hideWrapper(),
this._hideAnim.gotoPercent(99,!0)),this.domNode.setAttribute("aria-expanded",this._showing),
this._hasSizes=!0},_afterResize:function(i){var t=this._currentSize;this._currentSize=d.getMarginBox(this.domNode);
var e=this._currentSize[this._isHorizontal?"h":"w"];e>this._titleHeight?(this._showing||(this._showing=!this._showing,
this._showEnd()),this._showSize=e,this._setupAnims()):(this._showSize=t[this._isHorizontal?"h":"w"],
this._showing=!1,this._hideWrapper(),this._hideAnim.gotoPercent(89,!0))},_setupAnims:function(){
s.forEach(this._animConnects,o.disconnect);var i={node:this.domNode,duration:this.duration
},e=this._isHorizontal,n={},a=this._showSize,r=this._closedSize,d={},_=e?"height":"width",p=this._needsPosition;
n[_]={end:a},d[_]={end:r},p&&(n[p]={end:function(i){var t=parseInt(i.style[p],10);
return t-a+r}},d[p]={end:function(i){var t=parseInt(i.style[p],10);return t+a-r}}),
this._showAnim=h.animateProperty(t.mixin(i,{easing:this.easeIn,properties:n})),this._hideAnim=h.animateProperty(t.mixin(i,{
easing:this.easeOut,properties:d})),this._animConnects=[o.connect(this._showAnim,"onEnd",this,"_showEnd"),o.connect(this._hideAnim,"onEnd",this,"_hideEnd")];
},preview:function(){this._showing||(this._isonlypreview=!this._isonlypreview),this.toggle();
},toggle:function(){this._showing?(this._hideWrapper(),this._showAnim&&this._showAnim.stop(),
this._hideAnim.play()):(this._hideAnim&&this._hideAnim.stop(),this._showAnim.play()),
this._showing=!this._showing,this.domNode.setAttribute("aria-expanded",this._showing);
},_hideWrapper:function(){r.add(this.domNode,"dojoxExpandoClosed"),a.set(this.cwrapper,{
visibility:"hidden",opacity:"0",overflow:"hidden"})},_showEnd:function(){a.set(this.cwrapper,{
opacity:0,visibility:"visible"}),h.anim(this.cwrapper,{opacity:this._isonlypreview?this.previewOpacity:1
},227),r.remove(this.domNode,"dojoxExpandoClosed"),this._isonlypreview?(this._previewShowing=!0,
this.resize()):setTimeout(t.hitch(this._container,"layout"),15)},_hideEnd:function(){
this._isonlypreview?this._previewShowing=!1:setTimeout(t.hitch(this._container,"layout"),25),
this._isonlypreview=!1},resize:function(i){this._hasSizes||this._startupSizes(i);var t=d.getMarginBox(this.domNode);
this._contentBox={w:i&&"w"in i?i.w:t.w,h:(i&&"h"in i?i.h:t.h)-this._titleHeight},
a.set(this.containerNode,"height",this._contentBox.h+"px"),i&&d.setMarginBox(this.domNode,i),
this._layoutChildren(),this._setupAnims()},_trap:function(i){n.stop(i)}})});