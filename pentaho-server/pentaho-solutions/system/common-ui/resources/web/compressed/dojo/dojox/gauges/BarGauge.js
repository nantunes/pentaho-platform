define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/html","dojo/_base/event","dojox/gfx","./_Gauge","./BarLineIndicator","dojo/dom-geometry"],function(t,a,e,o,i,r,n,s,h){
return t("dojox.gauges.BarGauge",n,{dataX:5,dataY:5,dataWidth:0,dataHeight:0,_defaultIndicator:s,
startup:function(){this.getChildren&&e.forEach(this.getChildren(),function(t){t.startup();
}),this.dataWidth||(this.dataWidth=this.gaugeWidth-10),this.dataHeight||(this.dataHeight=this.gaugeHeight-10),
this.inherited(arguments)},_getPosition:function(t){return this.dataX+Math.floor((t-this.min)/(this.max-this.min)*this.dataWidth);
},_getValueForPosition:function(t){return(t-this.dataX)*(this.max-this.min)/this.dataWidth+this.min;
},drawRange:function(t,e){e.shape&&(e.shape.parent.remove(e.shape),e.shape=null);var o=this._getPosition(e.low),i=this._getPosition(e.high),n=t.createRect({
x:o,y:this.dataY,width:i-o,height:this.dataHeight});if(a.isArray(e.color)||a.isString(e.color))n.setStroke({
color:e.color}),n.setFill(e.color);else if(e.color.type){var s=this.dataY+this.dataHeight/2;
e.color.x1=o,e.color.x2=i,e.color.y1=s,e.color.y2=s,n.setFill(e.color),n.setStroke({
color:e.color.colors[0].color})}else r.svg&&(n.setStroke({color:"green"}),n.setFill("green"),
n.getEventSource().setAttribute("class",e.color.style));n.connect("onmouseover",a.hitch(this,this._handleMouseOverRange,e)),
n.connect("onmouseout",a.hitch(this,this._handleMouseOutRange,e)),e.shape=n},getRangeUnderMouse:function(t){
var a=null,e=h.getContentBox(this.gaugeContent),o=t.clientX-e.x,i=this._getValueForPosition(o);
if(this._rangeData)for(var r=0;r<this._rangeData.length&&!a;r++)Number(this._rangeData[r].low)<=i&&Number(this._rangeData[r].high)>=i&&(a=this._rangeData[r]);
return a},_dragIndicator:function(t,a){this._dragIndicatorAt(t,a.pageX,a.pageY),i.stop(a);
},_dragIndicatorAt:function(t,a,e){var o=h.position(t.gaugeContent,!0),i=a-o.x,r=t._getValueForPosition(i);
r<t.min&&(r=t.min),r>t.max&&(r=t.max),t._drag.value=r,t._drag.onDragMove(t._drag),
t._drag.draw(this._indicatorsGroup,!0),t._drag.valueChanged()}})});