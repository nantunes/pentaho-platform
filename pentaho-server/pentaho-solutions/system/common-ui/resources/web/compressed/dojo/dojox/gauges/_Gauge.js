define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/html","dojo/_base/array","dojo/_base/event","dojo/_base/connect","dojo/dom-construct","dijit/_Widget","dojox/gfx","./Range","dojo/fx/easing"],function(t,i,e,s,o,a,n,h,r,c,u){
t.deprecated("dojox.gauges","Use the new extensible dojox.dgauges framework instead","2.0");
var d=0;return i("dojox.gauges._Gauge",[r],{width:0,height:0,background:null,image:null,
useRangeStyles:0,useTooltip:!0,majorTicks:null,minorTicks:null,_defaultIndicator:null,
defaultColors:[[0,84,170,1],[68,119,187,1],[102,153,204,1],[153,187,238,1],[153,204,255,1],[204,238,255,1],[221,238,255,1]],
min:null,max:null,surface:null,hideValues:!1,gaugeContent:void 0,_backgroundDefault:{
color:"#E0E0E0"},_rangeData:null,_indicatorData:null,_drag:null,_img:null,_overOverlay:!1,
_lastHover:"",startup:function(){null===this.image&&(this.image={}),this.connect(this.gaugeContent,"onmousedown",this.handleMouseDown),
this.connect(this.gaugeContent,"onmousemove",this.handleMouseMove),this.connect(this.gaugeContent,"onmouseover",this.handleMouseOver),
this.connect(this.gaugeContent,"onmouseout",this.handleMouseOut),this.connect(this.gaugeContent,"touchstart",this.handleTouchStart),
this.connect(this.gaugeContent,"touchend",this.handleTouchEnd),this.connect(this.gaugeContent,"touchmove",this.handleTouchMove),
e.isArray(this.ranges)||(this.ranges=[]),e.isArray(this.indicators)||(this.indicators=[]);
var t,i=[],s=[];if(this.hasChildren()){var o=this.getChildren();for(t=0;t<o.length;t++)if(/.*Indicator/.test(o[t].declaredClass))s.push(o[t]);else switch(o[t].declaredClass){
case u.prototype.declaredClass:i.push(o[t])}this.ranges=this.ranges.concat(i),this.indicators=this.indicators.concat(s);
}for(this.background||(this.background=this._backgroundDefault),this.background=this.background.color||this.background,
this.surface||this.createSurface(),this.addRanges(this.ranges),this.minorTicks&&this.minorTicks.interval&&this.setMinorTicks(this.minorTicks),
this.majorTicks&&this.majorTicks.interval&&this.setMajorTicks(this.majorTicks),t=0;t<this.indicators.length;t++)this.addIndicator(this.indicators[t]);
this.inherited(arguments)},hasChildren:function(){return this.getChildren().length>0;
},buildRendering:function(){var t=this.domNode=this.srcNodeRef?this.srcNodeRef:h.create("div");
for(this.gaugeContent=h.create("div",{className:"dojoxGaugeContent"}),this.containerNode=h.create("div"),
this.mouseNode=h.create("div");t.hasChildNodes();)this.containerNode.appendChild(t.firstChild);
h.place(this.gaugeContent,t),h.place(this.containerNode,t),h.place(this.mouseNode,t);
},_setTicks:function(t,i,s){var o;if(t&&e.isArray(t._ticks))for(o=0;o<t._ticks.length;o++)this._removeScaleTick(t._ticks[o]);
var a={length:i.length,offset:i.offset,noChange:!0};for(i.color&&(a.color=i.color),
i.font&&(a.font=i.font),i.labelPlacement&&(a.direction=i.labelPlacement),i._ticks=[],
o=this.min;o<=this.max;o+=i.interval)if(o!=this.max||!this._isScaleCircular()){if(a.value=o,
s){var n=this._getNumberModule();n?a.label=i.fixedPrecision&&i.precision?n.format(o,{
places:i.precision}):n.format(o):a.label=i.fixedPrecision&&i.precision?o.toFixed(i.precision):o.toString();
}i._ticks.push(this._addScaleTick(a,s))}return i},_isScaleCircular:function(){return!1;
},setMinorTicks:function(t){this.minorTicks=this._setTicks(this.minorTicks,t,!1)},
setMajorTicks:function(t){this.majorTicks=this._setTicks(this.majorTicks,t,!0)},postCreate:function(){
this.hideValues&&s.style(this.containerNode,"display","none"),s.style(this.mouseNode,"width","0"),
s.style(this.mouseNode,"height","0"),s.style(this.mouseNode,"position","absolute"),
s.style(this.mouseNode,"z-index","100"),this.useTooltip&&require(["dijit/Tooltip"],dojo.hitch(this,function(t){
t.show("test",this.mouseNode,!this.isLeftToRight()),t.hide(this.mouseNode)}))},_getNumberModule:function(){
if(0==d)try{d=require("dojo/number")}catch(t){d=null}return d},createSurface:function(){
if(this.gaugeContent.style.width=this.width+"px",this.gaugeContent.style.height=this.height+"px",
this.surface=c.createSurface(this.gaugeContent,this.width,this.height),this._backgroundGroup=this.surface.createGroup(),
this._rangeGroup=this.surface.createGroup(),this._minorTicksGroup=this.surface.createGroup(),
this._majorTicksGroup=this.surface.createGroup(),this._overlayGroup=this.surface.createGroup(),
this._indicatorsGroup=this.surface.createGroup(),this._foregroundGroup=this.surface.createGroup(),
this._background=this._backgroundGroup.createRect({x:0,y:0,width:this.width,height:this.height
}),this._background.setFill(this.background),this.image.url){var t=this._backgroundGroup;
this.image.overlay&&(t=this._overlayGroup),this._img=t.createImage({width:this.image.width||this.width,
height:this.image.height||this.height,src:this.image.url}),(this.image.x||this.image.y)&&this._img.setTransform({
dx:this.image.x||0,dy:this.image.y||0})}},draw:function(){var t;if(this.surface){
if(this.drawBackground(this._backgroundGroup),this._rangeData)for(t=0;t<this._rangeData.length;t++)this.drawRange(this._rangeGroup,this._rangeData[t]);
if(this._minorTicksData)for(t=0;t<this._minorTicksData.length;t++)this._minorTicksData[t].draw(this._minorTicksGroup);
if(this._majorTicksData)for(t=0;t<this._majorTicksData.length;t++)this._majorTicksData[t].draw(this._majorTicksGroup);
if(this._indicatorData)for(t=0;t<this._indicatorData.length;t++)this._indicatorData[t].draw(this._indicatorsGroup);
this.drawForeground(this._foregroundGroup)}},drawBackground:function(t){},drawForeground:function(t){},
setBackground:function(t){t||(t=this._backgroundDefault),this.background=t.color||t,
this._background.setFill(this.background)},addRange:function(t){this.addRanges([t]);
},addRanges:function(t){this._rangeData||(this._rangeData=[]);for(var i,e=0;e<t.length;e++){
if(i=t[e],(null===this.min||i.low<this.min)&&(this.min=i.low),(null===this.max||i.high>this.max)&&(this.max=i.high),
!i.color){var s=this._rangeData.length%this.defaultColors.length;c.svg&&this.useRangeStyles>0?(s=this._rangeData.length%this.useRangeStyles+1,
i.color={style:"dojoxGaugeRange"+s}):(s=this._rangeData.length%this.defaultColors.length,
i.color=this.defaultColors[s])}this._rangeData[this._rangeData.length]=i}this.draw();
},_addScaleTick:function(t,i){return t.declaredClass||(t=new this._defaultIndicator(t)),
t._gauge=this,i?(this._majorTicksData||(this._majorTicksData=[]),this._majorTicksData[this._majorTicksData.length]=t,
t.draw(this._majorTicksGroup)):(this._minorTicksData||(this._minorTicksData=[]),this._minorTicksData[this._minorTicksData.length]=t,
t.draw(this._minorTicksGroup)),t},_removeScaleTick:function(t){var i;if(this._majorTicksData)for(i=0;i<this._majorTicksData.length;i++)if(this._majorTicksData[i]===t)return this._majorTicksData.splice(i,1),
void t.remove();if(this._minorTicksData)for(i=0;i<this._minorTicksData.length;i++)if(this._minorTicksData[i]===t)return this._minorTicksData.splice(i,1),
void t.remove()},addIndicator:function(t){return t.declaredClass||(t=new this._defaultIndicator(t)),
t._gauge=this,t.hideValue||this.containerNode.appendChild(t.domNode),this._indicatorData||(this._indicatorData=[]),
this._indicatorData[this._indicatorData.length]=t,t.draw(this._indicatorsGroup),t;
},removeIndicator:function(t){for(var i=0;i<this._indicatorData.length;i++)if(this._indicatorData[i]===t){
this._indicatorData.splice(i,1),t.remove();break}},moveIndicatorToFront:function(t){
t.shape&&t.shape.moveToFront()},drawText:function(t,i,e,s,o,a,n){var h=t.createText({
x:e,y:s,text:i,align:o});return h.setFill(a?a:"black"),n&&h.setFont(n),h},removeText:function(t){
t.parent&&t.parent.remove(t)},updateTooltip:function(t,i){this.useTooltip&&require(["dijit/Tooltip"],dojo.hitch(this,function(i){
this._lastHover!=t&&(""!==t?(i.hide(this.mouseNode),i.show(t,this.mouseNode,!this.isLeftToRight())):i.hide(this.mouseNode),
this._lastHover=t)}))},handleMouseOver:function(t){if(this.image&&this.image.overlay&&t.target==this._img.getEventSource()){
var i;this._overOverlay=!0;var e=this.getRangeUnderMouse(t);e&&e.hover&&(i=e.hover),
this.useTooltip&&!this._drag&&(i?this.updateTooltip(i,t):this.updateTooltip("",t));
}},handleMouseOut:function(t){this._overOverlay=!1,this._hideTooltip()},handleMouseMove:function(t){
if(this.useTooltip&&(t&&(s.style(this.mouseNode,"left",t.pageX+1+"px"),s.style(this.mouseNode,"top",t.pageY+1+"px")),
this._overOverlay)){var i=this.getRangeUnderMouse(t);i&&i.hover?this.updateTooltip(i.hover,t):this.updateTooltip("",t);
}},handleMouseDown:function(t){var i=this._getInteractiveIndicator();i&&this._handleMouseDownIndicator(i,t);
},_handleDragInteractionMouseMove:function(t){this._drag&&(this._dragIndicator(this,t),
a.stop(t))},_handleDragInteractionMouseUp:function(t){this._drag=null;for(var i=0;i<this._mouseListeners.length;i++)n.disconnect(this._mouseListeners[i]);
this._mouseListeners=[],a.stop(t)},_handleMouseDownIndicator:function(t,i){t.noChange||(this._mouseListeners||(this._mouseListeners=[]),
this._drag=t,this._mouseListeners.push(n.connect(document,"onmouseup",this,this._handleDragInteractionMouseUp)),
this._mouseListeners.push(n.connect(document,"onmousemove",this,this._handleDragInteractionMouseMove)),
this._mouseListeners.push(n.connect(document,"ondragstart",this,a.stop)),this._mouseListeners.push(n.connect(document,"onselectstart",this,a.stop)),
this._dragIndicator(this,i),a.stop(i))},_handleMouseOverIndicator:function(t,i){this.useTooltip&&!this._drag&&(t.hover?require(["dijit/Tooltip"],dojo.hitch(this,function(e){
s.style(this.mouseNode,"left",i.pageX+1+"px"),s.style(this.mouseNode,"top",i.pageY+1+"px"),
e.show(t.hover,this.mouseNode,!this.isLeftToRight())})):this.updateTooltip("",i)),
t.onDragMove&&!t.noChange&&(this.gaugeContent.style.cursor="pointer")},_handleMouseOutIndicator:function(t,i){
this._hideTooltip(),this.gaugeContent.style.cursor="pointer"},_hideTooltip:function(){
this.useTooltip&&this.mouseNode&&require(["dijit/Tooltip"],dojo.hitch(this,function(t){
t.hide(this.mouseNode)}))},_handleMouseOutRange:function(t,i){this._hideTooltip();
},_handleMouseOverRange:function(t,i){this.useTooltip&&!this._drag&&(t.hover?(s.style(this.mouseNode,"left",i.pageX+1+"px"),
s.style(this.mouseNode,"top",i.pageY+1+"px"),require(["dijit/Tooltip"],dojo.hitch(this,function(i){
i.show(t.hover,this.mouseNode,!this.isLeftToRight())}))):this.updateTooltip("",i));
},handleTouchStartIndicator:function(t,i){t.noChange||(this._drag=t,a.stop(i))},handleTouchStart:function(t){
this._drag=this._getInteractiveIndicator(),this.handleTouchMove(t)},handleTouchEnd:function(t){
this._drag&&(this._drag=null,a.stop(t))},handleTouchMove:function(t){if(this._drag&&!this._drag.noChange){
var i=t.touches,e=i[0];this._dragIndicatorAt(this,e.pageX,e.pageY),a.stop(t)}},_getInteractiveIndicator:function(){
for(var t=0;t<this._indicatorData.length;t++){var i=this._indicatorData[t];if("gauge"==i.interactionMode&&!i.noChange)return i;
}return null}})});