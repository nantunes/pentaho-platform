define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/html","dojo/_base/event","dojox/gfx","./_Gauge","./AnalogLineIndicator","dojo/dom-geometry"],function(t,i,s,e,a,h,n,r,o,c){
return i("dojox.gauges.AnalogGauge",r,{startAngle:-90,endAngle:90,cx:0,cy:0,radius:0,
orientation:"clockwise",_defaultIndicator:o,startup:function(){this.getChildren&&s.forEach(this.getChildren(),function(t){
t.startup()}),this.startAngle=Number(this.startAngle),this.endAngle=Number(this.endAngle),
this.cx=Number(this.cx),this.cx||(this.cx=this.width/2),this.cy=Number(this.cy),this.cy||(this.cy=this.height/2),
this.radius=Number(this.radius),this.radius||(this.radius=Math.min(this.cx,this.cy)-25),
this.inherited(arguments)},_getAngle:function(t){var i,s=Number(t);if(null==t||isNaN(s)||s<=this.min)i=this._mod360(this.startAngle);else if(s>=this.max)i=this._mod360(this.endAngle);else{
var e=this._mod360(this.startAngle),a=s-this.min;"clockwise"!=this.orientation&&(a=-a),
i=this._mod360(e+this._getAngleRange()*a/Math.abs(this.min-this.max))}return i},_getValueForAngle:function(t){
var i=this._mod360(this.startAngle),s=this._mod360(this.endAngle);if(this._angleInRange(t)){
var e=Math.abs(this.max-this.min),a=this._mod360("clockwise"==this.orientation?t-i:-t+i);
return this.min+e*a/this._getAngleRange()}var h=this._mod360(i-t),n=360-h,r=this._mod360(s-t),o=360-r;
return Math.min(h,n)<Math.min(r,o)?this.min:this.max},_getAngleRange:function(){var t,i=this._mod360(this.startAngle),s=this._mod360(this.endAngle);
return i==s?360:t="clockwise"==this.orientation?i>s?360-(i-s):s-i:i>s?i-s:360-(s-i);
},_angleInRange:function(t){var i=this._mod360(this.startAngle),s=this._mod360(this.endAngle);
return i==s?!0:(t=this._mod360(t),"clockwise"==this.orientation?s>i?t>=i&&s>=t:!(t>s&&i>t):s>i?!(t>i&&s>t):t>=s&&i>=t);
},_isScaleCircular:function(){return this._mod360(this.startAngle)==this._mod360(this.endAngle);
},_mod360:function(t){for(;t>360;)t-=360;for(;0>t;)t+=360;return t},_getRadians:function(t){
return t*Math.PI/180},_getDegrees:function(t){return 180*t/Math.PI},drawRange:function(t,i){
var s;i.shape&&(i.shape.parent.remove(i.shape),i.shape=null);var a,h;if(i.low==this.min&&i.high==this.max&&this._mod360(this.endAngle)==this._mod360(this.startAngle))s=t.createCircle({
cx:this.cx,cy:this.cy,r:this.radius});else{if(a=this._getRadians(this._getAngle(i.low)),
h=this._getRadians(this._getAngle(i.high)),"cclockwise"==this.orientation){var r=h;
h=a,a=r}var o,c=this.cx+this.radius*Math.sin(a),g=this.cy-this.radius*Math.cos(a),l=this.cx+this.radius*Math.sin(h),d=this.cy-this.radius*Math.cos(h),u=0;
o=h>=a?h-a:2*Math.PI-a+h,o>Math.PI&&(u=1),s=t.createPath(),i.size?s.moveTo(this.cx+(this.radius-i.size)*Math.sin(a),this.cy-(this.radius-i.size)*Math.cos(a)):s.moveTo(this.cx,this.cy),
s.lineTo(c,g),s.arcTo(this.radius,this.radius,0,u,1,l,d),i.size&&(s.lineTo(this.cx+(this.radius-i.size)*Math.sin(h),this.cy-(this.radius-i.size)*Math.cos(h)),
s.arcTo(this.radius-i.size,this.radius-i.size,0,u,0,this.cx+(this.radius-i.size)*Math.sin(a),this.cy-(this.radius-i.size)*Math.cos(a))),
s.closePath()}e.isArray(i.color)||e.isString(i.color)?(s.setStroke({color:i.color
}),s.setFill(i.color)):i.color.type?(a=this._getRadians(this._getAngle(i.low)),h=this._getRadians(this._getAngle(i.high)),
i.color.x1=this.cx+this.radius*Math.sin(a)/2,i.color.x2=this.cx+this.radius*Math.sin(h)/2,
i.color.y1=this.cy-this.radius*Math.cos(a)/2,i.color.y2=this.cy-this.radius*Math.cos(h)/2,
s.setFill(i.color),s.setStroke({color:i.color.colors[0].color})):n.svg&&(s.setStroke({
color:"green"}),s.setFill("green"),s.getEventSource().setAttribute("class",i.color.style)),
s.connect("onmouseover",e.hitch(this,this._handleMouseOverRange,i)),s.connect("onmouseout",e.hitch(this,this._handleMouseOutRange,i)),
i.shape=s},getRangeUnderMouse:function(t){var i=null,s=c.getContentBox(this.gaugeContent),e=t.clientX-s.x,a=t.clientY-s.y,h=Math.sqrt((a-this.cy)*(a-this.cy)+(e-this.cx)*(e-this.cx));
if(h<this.radius){var n=this._getDegrees(Math.atan2(a-this.cy,e-this.cx)+Math.PI/2),r=this._getValueForAngle(n);
if(this._rangeData)for(var o=0;o<this._rangeData.length&&!i;o++)Number(this._rangeData[o].low)<=r&&Number(this._rangeData[o].high)>=r&&(i=this._rangeData[o]);
}return i},_dragIndicator:function(t,i){this._dragIndicatorAt(t,i.pageX,i.pageY),
h.stop(i)},_dragIndicatorAt:function(t,i,s){var e=c.position(t.gaugeContent,!0),a=i-e.x,h=s-e.y,n=t._getDegrees(Math.atan2(h-t.cy,a-t.cx)+Math.PI/2),r=t._getValueForAngle(n);
r=Math.min(Math.max(r,t.min),t.max),t._drag.value=t._drag.currentValue=r,t._drag.onDragMove(t._drag),
t._drag.draw(this._indicatorsGroup,!0),t._drag.valueChanged()}})});