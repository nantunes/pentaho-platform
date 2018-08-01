define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/connect","dojo/_base/window","dojo/sniff","./ChartAction","./_IndicatorElement","dojox/lang/utils","dojo/_base/event","dojo/_base/array"],function(e,o,t,s,n,i,a,h,r,u){
return o("dojox.charting.action2d.MouseIndicator",i,{defaultParams:{series:"",vertical:!0,
autoScroll:!0,fixed:!0,precision:0,lines:!0,labels:!0,markers:!0},optionalParams:{
lineStroke:{},outlineStroke:{},shadowStroke:{},lineFill:{},stroke:{},outline:{},shadow:{},
fill:{},fillFunc:null,labelFunc:null,font:"",fontColor:"",markerStroke:{},markerOutline:{},
markerShadow:{},markerFill:{},markerSymbol:"",offset:{},start:!1,mouseOver:!1},constructor:function(o,t,s){
this.opt=e.clone(this.defaultParams),h.updateWithObject(this.opt,s),h.updateWithPattern(this.opt,s,this.optionalParams),
this._listeners=this.opt.mouseOver?[{eventName:"onmousemove",methodName:"onMouseMove"
}]:[{eventName:"onmousedown",methodName:"onMouseDown"}],this._uName="mouseIndicator"+this.opt.series,
this._handles=[],this.connect()},_disconnectHandles:function(){n("ie")&&this.chart.node.releaseCapture(),
u.forEach(this._handles,t.disconnect),this._handles=[]},connect:function(){this.inherited(arguments),
this.chart.addPlot(this._uName,{type:a,inter:this})},disconnect:function(){this._isMouseDown&&this.onMouseUp(),
this.chart.removePlot(this._uName),this.inherited(arguments),this._disconnectHandles();
},onChange:function(e){},onMouseDown:function(e){this._isMouseDown=!0,n("ie")?(this._handles.push(t.connect(this.chart.node,"onmousemove",this,"onMouseMove")),
this._handles.push(t.connect(this.chart.node,"onmouseup",this,"onMouseUp")),this.chart.node.setCapture()):(this._handles.push(t.connect(s.doc,"onmousemove",this,"onMouseMove")),
this._handles.push(t.connect(s.doc,"onmouseup",this,"onMouseUp"))),this._onMouseSingle(e);
},onMouseMove:function(e){(this._isMouseDown||this.opt.mouseOver)&&this._onMouseSingle(e);
},_onMouseSingle:function(e){var o=this.chart.getPlot(this._uName);o.pageCoord={x:e.pageX,
y:e.pageY},o.dirty=!0,this.chart.render(),r.stop(e)},onMouseUp:function(e){var o=this.chart.getPlot(this._uName);
o.stopTrack(),this._isMouseDown=!1,this._disconnectHandles(),o.pageCoord=null,o.dirty=!0,
this.chart.render()}})});