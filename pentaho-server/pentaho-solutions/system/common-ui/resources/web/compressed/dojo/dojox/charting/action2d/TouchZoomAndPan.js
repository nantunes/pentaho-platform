define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/event","dojo/sniff","./ChartAction","../Element","dojo/touch","../plot2d/common","dojo/has!dojo-bidi?../bidi/action2d/ZoomAndPan"],function(t,e,s,a,i,o,h,r,n){
var c=e(o,{constructor:function(t){},render:function(){this.isDirty()&&(this.cleanGroup(),
this.group.createRect({width:this.chart.dim.width,height:this.chart.dim.height}).setFill("rgba(0,0,0,0)"));
},clear:function(){return this.dirty=!0,this.chart.stack[0]!=this&&this.chart.movePlotToFront(this.name),
this},getSeriesStats:function(){return t.delegate(r.defaultStats)},initializeScalers:function(){
return this},isDirty:function(){return this.dirty}}),l=e(a("dojo-bidi")?"dojox.charting.action2d.NonBidiTouchZoomAndPan":"dojox.charting.action2d.TouchZoomAndPan",i,{
defaultParams:{axis:"x",scaleFactor:1.2,maxScale:100,enableScroll:!0,enableZoom:!0
},optionalParams:{},constructor:function(t,e,s){this._listeners=[{eventName:h.press,
methodName:"onTouchStart"},{eventName:h.move,methodName:"onTouchMove"},{eventName:h.release,
methodName:"onTouchEnd"}],s||(s={}),this.axis=s.axis?s.axis:"x",this.scaleFactor=s.scaleFactor?s.scaleFactor:1.2,
this.maxScale=s.maxScale?s.maxScale:100,this.enableScroll=void 0!=s.enableScroll?s.enableScroll:!0,
this.enableZoom=void 0!=s.enableScroll?s.enableZoom:!0,this._uName="touchZoomPan"+this.axis,
this.connect()},connect:function(){this.inherited(arguments),-1!=this.chart.surface.declaredClass.indexOf("svg")&&this.chart.addPlot(this._uName,{
type:c})},disconnect:function(){-1!=this.chart.surface.declaredClass.indexOf("svg")&&this.chart.removePlot(this._uName),
this.inherited(arguments)},onTouchStart:function(t){var e=this.chart,a=e.getAxis(this.axis),i=t.touches?t.touches.length:1,o=t.touches?t.touches[0]:t,h=this._startPageCoord;
if(this._startPageCoord={x:o.pageX,y:o.pageY},(this.enableZoom||this.enableScroll)&&e._delayedRenderHandle&&e.render(),
this.enableZoom&&i>=2){this._startTime=0,this._endPageCoord={x:t.touches[1].pageX,
y:t.touches[1].pageY};var r={x:(this._startPageCoord.x+this._endPageCoord.x)/2,y:(this._startPageCoord.y+this._endPageCoord.y)/2
},n=a.getScaler();this._initScale=a.getWindowScale();var c=this._initData=this.plot.toData();
this._middleCoord=c(r)[this.axis],this._startCoord=n.bounds.from,this._endCoord=n.bounds.to;
}else t.touches&&1!=t.touches.length?this._startTime=0:this._startTime?(new Date).getTime()-this._startTime<250&&Math.abs(this._startPageCoord.x-h.x)<30&&Math.abs(this._startPageCoord.y-h.y)<30?(this._startTime=0,
this.onDoubleTap(t)):this._startTime=0:this._startTime=(new Date).getTime(),this.enableScroll&&(this._startScroll(a),
s.stop(t))},onTouchMove:function(t){var e=this.chart,a=e.getAxis(this.axis),i=t.touches?t.touches.length:1,o=a.vertical?"pageY":"pageX",h=a.vertical?"y":"x";
if(this._startTime=0,this.enableZoom&&i>=2){var r={x:(t.touches[1].pageX+t.touches[0].pageX)/2,
y:(t.touches[1].pageY+t.touches[0].pageY)/2},n=(this._endPageCoord[h]-this._startPageCoord[h])/(t.touches[1][o]-t.touches[0][o]);
if(this._initScale/n>this.maxScale)return;var c=this._initData(r)[this.axis],l=n*(this._startCoord-c)+this._middleCoord,d=n*(this._endCoord-c)+this._middleCoord;
e.zoomIn(this.axis,[l,d]),s.stop(t)}else if(this.enableScroll){var u=this._getDelta(t);
e.setAxisWindow(this.axis,this._lastScale,this._initOffset-u/this._lastFactor/this._lastScale),
e.delayedRender(),s.stop(t)}},onTouchEnd:function(t){var e=this.chart,s=e.getAxis(this.axis);
if((!t.touches||1==t.touches.length)&&this.enableScroll){var a=t.touches?t.touches[0]:t;
this._startPageCoord={x:a.pageX,y:a.pageY},this._startScroll(s)}},_startScroll:function(t){
var e=t.getScaler().bounds;this._initOffset=t.getWindowOffset(),this._lastScale=t.getWindowScale(),
this._lastFactor=e.span/(e.upper-e.lower)},onDoubleTap:function(t){var e=this.chart,a=e.getAxis(this.axis),i=1/this.scaleFactor;
if(1==a.getWindowScale()){var o=a.getScaler(),h=o.bounds.from,r=o.bounds.to,n=(h+r)/2,c=this.plot.toData(this._startPageCoord)[this.axis],l=i*(h-n)+c,d=i*(r-n)+c;
e.zoomIn(this.axis,[l,d])}else e.setAxisWindow(this.axis,1,0),e.render();s.stop(t);
},_getDelta:function(t){var e=this.chart.getAxis(this.axis),s=e.vertical?"pageY":"pageX",a=e.vertical?"y":"x",i=t.touches?t.touches[0]:t;
return e.vertical?this._startPageCoord[a]-i[s]:i[s]-this._startPageCoord[a]}});return a("dojo-bidi")?e("dojox.charting.action2d.TouchZoomAndPan",[l,n]):l;
});