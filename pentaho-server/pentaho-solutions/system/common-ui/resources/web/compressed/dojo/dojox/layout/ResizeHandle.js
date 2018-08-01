define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/_base/event","dojo/_base/fx","dojo/_base/window","dojo/fx","dojo/window","dojo/dom","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dijit/_base/manager","dijit/_Widget","dijit/_TemplatedMixin","dojo/_base/declare"],function(t,i,e,s,o,a,h,r,n,d,z,g,c,l,m,p,_){
t.experimental("dojox.layout.ResizeHandle");var w=_("dojox.layout.ResizeHandle",[m,p],{
targetId:"",targetContainer:null,resizeAxis:"xy",activeResize:!1,activeResizeClass:"dojoxResizeHandleClone",
animateSizing:!0,animateMethod:"chain",animateDuration:225,minHeight:100,minWidth:100,
constrainMax:!1,maxHeight:0,maxWidth:0,fixedAspect:!1,intermediateChanges:!1,startTopic:"/dojo/resize/start",
endTopic:"/dojo/resize/stop",templateString:'<div dojoAttachPoint="resizeHandle" class="dojoxResizeHandle"><div></div></div>',
postCreate:function(){this.connect(this.resizeHandle,"onmousedown","_beginSizing"),
this.activeResize?this.animateSizing=!1:(this._resizeHelper=l.byId("dojoxGlobalResizeHelper"),
this._resizeHelper||(this._resizeHelper=new x({id:"dojoxGlobalResizeHelper"}).placeAt(h.body()),
z.add(this._resizeHelper.domNode,this.activeResizeClass))),this.minSize||(this.minSize={
w:this.minWidth,h:this.minHeight}),this.constrainMax&&(this.maxSize={w:this.maxWidth,
h:this.maxHeight}),this._resizeX=this._resizeY=!1;var t=i.partial(z.add,this.resizeHandle);
switch(this.resizeAxis.toLowerCase()){case"xy":this._resizeX=this._resizeY=!0,t("dojoxResizeNW");
break;case"x":this._resizeX=!0,t("dojoxResizeW");break;case"y":this._resizeY=!0,t("dojoxResizeN");
}},_beginSizing:function(t){if(!this._isSizing&&(e.publish(this.startTopic,[this]),
this.targetWidget=l.byId(this.targetId),this.targetDomNode=this.targetWidget?this.targetWidget.domNode:d.byId(this.targetId),
this.targetContainer&&(this.targetDomNode=this.targetContainer),this.targetDomNode)){
if(!this.activeResize){var i=g.position(this.targetDomNode,!0);this._resizeHelper.resize({
l:i.x,t:i.y,w:i.w,h:i.h}),this._resizeHelper.show(),this.isLeftToRight()||(this._resizeHelper.startPosition={
l:i.x,t:i.y})}this._isSizing=!0,this.startPoint={x:t.clientX,y:t.clientY};var s,a=c.getComputedStyle(this.targetDomNode),r="border-model"===g.boxModel,n=r?{
w:0,h:0}:g.getPadBorderExtents(this.targetDomNode,a),z=g.getMarginExtents(this.targetDomNode,a);
if(s=this.startSize={w:c.get(this.targetDomNode,"width",a),h:c.get(this.targetDomNode,"height",a),
pbw:n.w,pbh:n.h,mw:z.w,mh:z.h},!this.isLeftToRight()&&"absolute"==dojo.style(this.targetDomNode,"position")){
var m=g.position(this.targetDomNode,!0);this.startPosition={l:m.x,t:m.y}}this._pconnects=[e.connect(h.doc,"onmousemove",this,"_updateSizing"),e.connect(h.doc,"onmouseup",this,"_endSizing")],
o.stop(t)}},_updateSizing:function(t){if(this.activeResize)this._changeSizing(t);else{
var i=this._getNewCoords(t,"border",this._resizeHelper.startPosition);if(i===!1)return;
this._resizeHelper.resize(i)}t.preventDefault()},_getNewCoords:function(t,i,e){try{
if(!t.clientX||!t.clientY)return!1}catch(t){return!1}this._activeResizeLastEvent=t;
var s=(this.isLeftToRight()?1:-1)*(this.startPoint.x-t.clientX),o=this.startPoint.y-t.clientY,a=this.startSize.w-(this._resizeX?s:0),h=this.startSize.h-(this._resizeY?o:0),r=this._checkConstraints(a,h);
switch(e=e||this.startPosition,e&&this._resizeX&&(r.l=e.l+s,r.w!=a&&(r.l+=a-r.w),
r.t=e.t),i){case"margin":r.w+=this.startSize.mw,r.h+=this.startSize.mh;case"border":
r.w+=this.startSize.pbw,r.h+=this.startSize.pbh}return r},_checkConstraints:function(t,i){
if(this.minSize){var e=this.minSize;t<e.w&&(t=e.w),i<e.h&&(i=e.h)}if(this.constrainMax&&this.maxSize){
var s=this.maxSize;t>s.w&&(t=s.w),i>s.h&&(i=s.h)}if(this.fixedAspect){var o=this.startSize.w,a=this.startSize.h,h=o*i-a*t;
0>h?t=i*o/a:h>0&&(i=t*a/o)}return{w:t,h:i}},_changeSizing:function(t){var e=this.targetWidget&&i.isFunction(this.targetWidget.resize),s=this._getNewCoords(t,e&&"margin");
if(s!==!1){if(e)this.targetWidget.resize(s);else if(this.animateSizing){var o=r[this.animateMethod]([a.animateProperty({
node:this.targetDomNode,properties:{width:{start:this.startSize.w,end:s.w}},duration:this.animateDuration
}),a.animateProperty({node:this.targetDomNode,properties:{height:{start:this.startSize.h,
end:s.h}},duration:this.animateDuration})]);o.play()}else c.set(this.targetDomNode,{
width:s.w+"px",height:s.h+"px"});this.intermediateChanges&&this.onResize(t)}},_endSizing:function(t){
s.forEach(this._pconnects,e.disconnect);var o=i.partial(e.publish,this.endTopic,[this]);
this.activeResize?o():(this._resizeHelper.hide(),this._changeSizing(t),setTimeout(o,this.animateDuration+15)),
this._isSizing=!1,this.onResize(t)},onResize:function(t){}}),x=dojo.declare("dojox.layout._ResizeHelper",m,{
show:function(){c.set(this.domNode,"display","")},hide:function(){c.set(this.domNode,"display","none");
},resize:function(t){g.setMarginBox(this.domNode,t)}});return w});