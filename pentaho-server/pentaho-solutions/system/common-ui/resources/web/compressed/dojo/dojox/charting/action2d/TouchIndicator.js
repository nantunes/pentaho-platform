define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/event","dojo/touch","./ChartAction","./_IndicatorElement","dojox/lang/utils"],function(t,e,o,n,a,h,i){
return e("dojox.charting.action2d.TouchIndicator",a,{defaultParams:{series:"",dualIndicator:!1,
vertical:!0,autoScroll:!0,fixed:!0,precision:0,lines:!0,labels:!0,markers:!0},optionalParams:{
lineStroke:{},outlineStroke:{},shadowStroke:{},lineFill:{},stroke:{},outline:{},shadow:{},
fill:{},fillFunc:null,labelFunc:null,font:"",fontColor:"",markerStroke:{},markerOutline:{},
markerShadow:{},markerFill:{},markerSymbol:"",offset:{},start:!1},constructor:function(e,o,a){
this._listeners=[{eventName:n.press,methodName:"onTouchStart"},{eventName:n.move,
methodName:"onTouchMove"},{eventName:n.release,methodName:"onTouchEnd"},{eventName:n.cancel,
methodName:"onTouchEnd"}],this.opt=t.clone(this.defaultParams),i.updateWithObject(this.opt,a),
i.updateWithPattern(this.opt,a,this.optionalParams),this._uName="touchIndicator"+this.opt.series,
this.connect()},connect:function(){this.inherited(arguments),this.chart.addPlot(this._uName,{
type:h,inter:this})},disconnect:function(){var t=this.chart.getPlot(this._uName);t.pageCoord&&this.onTouchEnd(),
this.chart.removePlot(this._uName),this.inherited(arguments)},onChange:function(t){},
onTouchStart:function(t){t.touches&&1!=t.touches.length?this.opt.dualIndicator&&2==t.touches.length&&this._onTouchDual(t):this._onTouchSingle(t,!0);
},onTouchMove:function(t){t.touches&&1!=t.touches.length?this.opt.dualIndicator&&2==t.touches.length&&this._onTouchDual(t):this._onTouchSingle(t);
},_onTouchSingle:function(t,e){this.chart._delayedRenderHandle&&!e&&this.chart.render();
var n=this.chart.getPlot(this._uName);n.pageCoord={x:t.touches?t.touches[0].pageX:t.pageX,
y:t.touches?t.touches[0].pageY:t.pageY},n.dirty=!0,e?this.chart.delayedRender():this.chart.render(),
o.stop(t)},_onTouchDual:function(t){this.chart._delayedRenderHandle&&this.chart.render();
var e=this.chart.getPlot(this._uName);e.pageCoord={x:t.touches[0].pageX,y:t.touches[0].pageY
},e.secondCoord={x:t.touches[1].pageX,y:t.touches[1].pageY},e.dirty=!0,this.chart.render(),
o.stop(t)},onTouchEnd:function(t){var e=this.chart.getPlot(this._uName);e.stopTrack(),
e.pageCoord=null,e.secondCoord=null,e.dirty=!0,this.chart.delayedRender()}})});