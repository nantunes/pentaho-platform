define(["dojo/_base/declare","dojo/_base/window","dojo/_base/array","dojo/_base/event","dojo/_base/connect","dojo/mouse","./ChartAction","dojo/sniff","dojo/dom-prop","dojo/keys","dojo/has!dojo-bidi?../bidi/action2d/ZoomAndPan"],function(e,o,t,s,i,n,a,h,c,r,l){
var d=h("mozilla")?3:120,u={none:function(e){return!e.ctrlKey&&!e.altKey&&!e.shiftKey;
},ctrl:function(e){return e.ctrlKey&&!e.altKey&&!e.shiftKey},alt:function(e){return!e.ctrlKey&&e.altKey&&!e.shiftKey;
},shift:function(e){return!e.ctrlKey&&!e.altKey&&e.shiftKey}},m=e(h("dojo-bidi")?"dojox.charting.action2d.NonBidiMouseZoomAndPan":"dojox.charting.action2d.MouseZoomAndPan",a,{
defaultParams:{axis:"x",scaleFactor:1.2,maxScale:100,enableScroll:!0,enableDoubleClickZoom:!0,
enableKeyZoom:!0,keyZoomModifier:"ctrl"},optionalParams:{},constructor:function(e,o,t){
this._listeners=[{eventName:n.wheel,methodName:"onMouseWheel"}],t||(t={}),this.axis=t.axis?t.axis:"x",
this.scaleFactor=t.scaleFactor?t.scaleFactor:1.2,this.maxScale=t.maxScale?t.maxScale:100,
this.enableScroll=void 0!=t.enableScroll?t.enableScroll:!0,this.enableDoubleClickZoom=void 0!=t.enableDoubleClickZoom?t.enableDoubleClickZoom:!0,
this.enableKeyZoom=void 0!=t.enableKeyZoom?t.enableKeyZoom:!0,this.keyZoomModifier=t.keyZoomModifier?t.keyZoomModifier:"ctrl",
this.enableScroll&&this._listeners.push({eventName:"onmousedown",methodName:"onMouseDown"
}),this.enableDoubleClickZoom&&this._listeners.push({eventName:"ondblclick",methodName:"onDoubleClick"
}),this.enableKeyZoom&&this._listeners.push({eventName:"keypress",methodName:"onKeyPress"
}),this._handles=[],this.connect()},_disconnectHandles:function(){h("ie")&&this.chart.node.releaseCapture(),
t.forEach(this._handles,i.disconnect),this._handles=[]},connect:function(){this.inherited(arguments),
this.enableKeyZoom&&c.set(this.chart.node,"tabindex","0")},disconnect:function(){
this.inherited(arguments),this.enableKeyZoom&&c.set(this.chart.node,"tabindex","-1"),
this._disconnectHandles()},onMouseDown:function(e){var t=this.chart,n=t.getAxis(this.axis);
n.vertical?this._startCoord=e.pageY:this._startCoord=e.pageX,this._startOffset=n.getWindowOffset(),
this._isPanning=!0,h("ie")?(this._handles.push(i.connect(this.chart.node,"onmousemove",this,"onMouseMove")),
this._handles.push(i.connect(this.chart.node,"onmouseup",this,"onMouseUp")),this.chart.node.setCapture()):(this._handles.push(i.connect(o.doc,"onmousemove",this,"onMouseMove")),
this._handles.push(i.connect(o.doc,"onmouseup",this,"onMouseUp"))),t.node.focus(),
s.stop(e)},onMouseMove:function(e){if(this._isPanning){var o=this.chart,t=o.getAxis(this.axis),s=this._getDelta(e),i=t.getScaler().bounds,n=i.span/(i.upper-i.lower),a=t.getWindowScale();
o.setAxisWindow(this.axis,a,this._startOffset-s/n/a),o.render()}},onMouseUp:function(e){
this._isPanning=!1,this._disconnectHandles()},onMouseWheel:function(e){var o=e.wheelDelta/d;
o>-1&&0>o?o=-1:o>0&&1>o&&(o=1),this._onZoom(o,e)},onKeyPress:function(e){u[this.keyZoomModifier](e)&&("+"==e.keyChar||e.keyCode==r.NUMPAD_PLUS?this._onZoom(1,e):("-"==e.keyChar||e.keyCode==r.NUMPAD_MINUS)&&this._onZoom(-1,e));
},onDoubleClick:function(e){var o=this.chart,t=o.getAxis(this.axis),i=1/this.scaleFactor;
if(1==t.getWindowScale()){var n=t.getScaler(),a=n.bounds.from,h=n.bounds.to,c=(a+h)/2,r=this.plot.toData({
x:e.pageX,y:e.pageY})[this.axis],l=i*(a-c)+r,d=i*(h-c)+r;o.zoomIn(this.axis,[l,d]);
}else o.setAxisWindow(this.axis,1,0),o.render();s.stop(e)},_onZoom:function(e,o){
var t=0>e?Math.abs(e)*this.scaleFactor:1/(Math.abs(e)*this.scaleFactor),i=this.chart,n=i.getAxis(this.axis),a=n.getWindowScale();
if(!(a/t>this.maxScale)){var h=n.getScaler(),c=h.bounds.from,r=h.bounds.to,l="keypress"==o.type?(c+r)/2:this.plot.toData({
x:o.pageX,y:o.pageY})[this.axis],d=t*(c-l)+l,u=t*(r-l)+l;i.zoomIn(this.axis,[d,u]),
s.stop(o)}},_getDelta:function(e){return this.chart.getAxis(this.axis).vertical?this._startCoord-e.pageY:e.pageX-this._startCoord;
}});return h("dojo-bidi")?e("dojox.charting.action2d.MouseZoomAndPan",[m,l]):m});