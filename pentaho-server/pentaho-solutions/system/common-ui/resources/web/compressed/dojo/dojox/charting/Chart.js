define(["../main","dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/dom-style","dojo/dom","dojo/dom-geometry","dojo/dom-construct","dojo/_base/Color","dojo/sniff","./Element","./SimpleTheme","./Series","./axis2d/common","dojox/gfx/shape","dojox/gfx","dojo/has!dojo-bidi?./bidi/Chart","dojox/lang/functional","dojox/lang/functional/fold","dojox/lang/functional/reversed"],function(t,i,e,s,r,h,n,o,a,l,c,d,u,f,m,p,g,x){
function y(t){return{min:t.hmin,max:t.hmax}}function v(t){return{min:t.vmin,max:t.vmax
}}function k(t,i){t.hmin=i.min,t.hmax=i.max}function w(t,i){t.vmin=i.min,t.vmax=i.max;
}function b(t,i){return t&&i&&(t.min=Math.min(t.min,i.min),t.max=Math.max(t.max,i.max)),
t||i}function _(t,i){var s={},r={};e.forEach(t,function(t){var i=s[t.name]=t.getSeriesStats();
t.hAxis&&(r[t.hAxis]=b(r[t.hAxis],y(i))),t.vAxis&&(r[t.vAxis]=b(r[t.vAxis],v(i)));
}),e.forEach(t,function(t){var e=s[t.name];t.hAxis&&k(e,r[t.hAxis]),t.vAxis&&w(e,r[t.vAxis]),
t.initializeScalers(i,e)})}var F=i.getObject("charting",!0,t),E=x.lambda("item.clear()"),C=x.lambda("item.purgeGroup()"),A=x.lambda("item.destroy()"),S=x.lambda("item.dirty = false"),j=x.lambda("item.dirty = true"),P=x.lambda("item.name"),T=s(l("dojo-bidi")?"dojox.charting.NonBidiChart":"dojox.charting.Chart",null,{
constructor:function(t,i){i||(i={}),this.margins=i.margins?i.margins:{l:10,t:10,r:10,
b:10},this.stroke=i.stroke,this.fill=i.fill,this.delayInMs=i.delayInMs||200,this.title=i.title,
this.titleGap=i.titleGap,this.titlePos=i.titlePos,this.titleFont=i.titleFont,this.titleFontColor=i.titleFontColor,
this.chartTitle=null,this.htmlLabels=!0,"htmlLabels"in i&&(this.htmlLabels=i.htmlLabels),
this.theme=null,this.axes={},this.stack=[],this.plots={},this.series=[],this.runs={},
this.dirty=!0,this.node=h.byId(t);var e=n.getMarginBox(t);this.surface=p.createSurface(this.node,e.w||400,e.h||300),
-1==this.surface.declaredClass.indexOf("vml")&&(this._nativeClip=!0)},destroy:function(){
e.forEach(this.series,A),e.forEach(this.stack,A),x.forIn(this.axes,A),this.surface.destroy(),
this.chartTitle&&this.chartTitle.tagName&&o.destroy(this.chartTitle)},getCoords:function(){
var t=this.node,i=r.getComputedStyle(t),e=n.getMarginBox(t,i),s=n.position(t,!0);return e.x=s.x,
e.y=s.y,e},setTheme:function(t){return this.theme=t.clone(),this.dirty=!0,this},addAxis:function(t,i){
var e,s=i&&i.type||"Default";if("string"==typeof s){if(!F.axis2d||!F.axis2d[s])throw Error("Can't find axis: "+s+" - Check require() dependencies.");
e=new F.axis2d[s](this,i)}else e=new s(this,i);return e.name=t,e.dirty=!0,t in this.axes&&this.axes[t].destroy(),
this.axes[t]=e,this.dirty=!0,this},getAxis:function(t){return this.axes[t]},removeAxis:function(t){
return t in this.axes&&(this.axes[t].destroy(),delete this.axes[t],this.dirty=!0),
this},addPlot:function(t,i){var e,s=i&&i.type||"Default";if("string"==typeof s){if(!F.plot2d||!F.plot2d[s])throw Error("Can't find plot: "+s+" - didn't you forget to dojo.require() it?");
e=new F.plot2d[s](this,i)}else e=new s(this,i);return e.name=t,e.dirty=!0,t in this.plots?(this.stack[this.plots[t]].destroy(),
this.stack[this.plots[t]]=e):(this.plots[t]=this.stack.length,this.stack.push(e)),
this.dirty=!0,this},getPlot:function(t){return this.stack[this.plots[t]]},removePlot:function(t){
if(t in this.plots){var i=this.plots[t];delete this.plots[t],this.stack[i].destroy(),
this.stack.splice(i,1),x.forIn(this.plots,function(t,e,s){t>i&&(s[e]=t-1)});var s=e.filter(this.series,function(i){
return i.plot!=t});s.length<this.series.length&&(e.forEach(this.series,function(i){
i.plot==t&&i.destroy()}),this.runs={},e.forEach(s,function(t,i){this.runs[t.plot]=i;
},this),this.series=s),this.dirty=!0}return this},getPlotOrder:function(){return x.map(this.stack,P);
},setPlotOrder:function(t){var i={},e=x.filter(t,function(t){return!(t in this.plots)||t in i?!1:(i[t]=1,
!0)},this);e.length<this.stack.length&&x.forEach(this.stack,function(t){var s=t.name;
s in i||e.push(s)});var s=x.map(e,function(t){return this.stack[this.plots[t]]},this);
return x.forEach(s,function(t,i){this.plots[t.name]=i},this),this.stack=s,this.dirty=!0,
this},movePlotToFront:function(t){if(t in this.plots){var i=this.plots[t];if(i){var e=this.getPlotOrder();
return e.splice(i,1),e.unshift(t),this.setPlotOrder(e)}}return this},movePlotToBack:function(t){
if(t in this.plots){var i=this.plots[t];if(i<this.stack.length-1){var e=this.getPlotOrder();
return e.splice(i,1),e.push(t),this.setPlotOrder(e)}}return this},addSeries:function(t,i,e){
var s=new u(this,i,e);return s.name=t,t in this.runs?(this.series[this.runs[t]].destroy(),
this.series[this.runs[t]]=s):(this.runs[t]=this.series.length,this.series.push(s)),
this.dirty=!0,!("ymin"in s)&&"min"in s&&(s.ymin=s.min),!("ymax"in s)&&"max"in s&&(s.ymax=s.max),
this},getSeries:function(t){return this.series[this.runs[t]]},removeSeries:function(t){
if(t in this.runs){var i=this.runs[t];delete this.runs[t],this.series[i].destroy(),
this.series.splice(i,1),x.forIn(this.runs,function(t,e,s){t>i&&(s[e]=t-1)}),this.dirty=!0;
}return this},updateSeries:function(t,i,e){if(t in this.runs){var s=this.series[this.runs[t]];
s.update(i),e?this.dirty=!0:(this._invalidateDependentPlots(s.plot,!1),this._invalidateDependentPlots(s.plot,!0));
}return this},getSeriesOrder:function(t){return x.map(x.filter(this.series,function(i){
return i.plot==t}),P)},setSeriesOrder:function(t){var i,e={},s=x.filter(t,function(t){
if(!(t in this.runs)||t in e)return!1;var s=this.series[this.runs[t]];if(i){if(s.plot!=i)return!1;
}else i=s.plot;return e[t]=1,!0},this);x.forEach(this.series,function(t){var r=t.name;
r in e||t.plot!=i||s.push(r)});var r=x.map(s,function(t){return this.series[this.runs[t]];
},this);return this.series=r.concat(x.filter(this.series,function(t){return t.plot!=i;
})),x.forEach(this.series,function(t,i){this.runs[t.name]=i},this),this.dirty=!0,
this},moveSeriesToFront:function(t){if(t in this.runs){var i=this.runs[t],e=this.getSeriesOrder(this.series[i].plot);
if(t!=e[0])return e.splice(i,1),e.unshift(t),this.setSeriesOrder(e)}return this},
moveSeriesToBack:function(t){if(t in this.runs){var i=this.runs[t],e=this.getSeriesOrder(this.series[i].plot);
if(t!=e[e.length-1])return e.splice(i,1),e.push(t),this.setSeriesOrder(e)}return this;
},resize:function(t,i){switch(arguments.length){case 1:n.setMarginBox(this.node,t);
break;case 2:n.setMarginBox(this.node,{w:t,h:i})}var e=n.getMarginBox(this.node),s=this.surface.getDimensions();
return s.width!=e.w||s.height!=e.h?(this.surface.setDimensions(e.w,e.h),this.dirty=!0,
this.render()):this},getGeometry:function(){var t={};return x.forIn(this.axes,function(i){
i.initialized()&&(t[i.name]={name:i.name,vertical:i.vertical,scaler:i.scaler,ticks:i.ticks
})}),t},setAxisWindow:function(t,i,s,r){var h=this.axes[t];return h&&(h.setWindow(i,s),
e.forEach(this.stack,function(i){(i.hAxis==t||i.vAxis==t)&&(i.zoom=r)})),this},setWindow:function(t,i,s,r,h){
return"plotArea"in this||this.calculateGeometry(),x.forIn(this.axes,function(e){var h,n,o=e.getScaler().bounds,a=o.span/(o.upper-o.lower);
e.vertical?(h=i,n=r/a/h):(h=t,n=s/a/h),e.setWindow(h,n)}),e.forEach(this.stack,function(t){
t.zoom=h}),this},zoomIn:function(t,i,e){var s=this.axes[t];if(s){var r,h,n=s.getScaler().bounds,o=Math.min(i[0],i[1]),a=Math.max(i[0],i[1]);
o=i[0]<n.lower?n.lower:o,a=i[1]>n.upper?n.upper:a,r=(n.upper-n.lower)/(a-o),h=o-n.lower,
this.setAxisWindow(t,r,h),e?this.delayedRender():this.render()}},calculateGeometry:function(){
if(this.dirty)return this.fullGeometry();var t=e.filter(this.stack,function(t){return t.dirty||t.hAxis&&this.axes[t.hAxis].dirty||t.vAxis&&this.axes[t.vAxis].dirty;
},this);return _(t,this.plotArea),this},fullGeometry:function(){this._makeDirty(),
e.forEach(this.stack,E),this.theme||this.setTheme(new d),e.forEach(this.series,function(t){
if(!(t.plot in this.plots)){if(!F.plot2d||!F.plot2d.Default)throw Error("Can't find plot: Default - didn't you forget to dojo.require() it?");
var i=new F.plot2d.Default(this,{});i.name=t.plot,this.plots[t.plot]=this.stack.length,
this.stack.push(i)}this.stack[this.plots[t.plot]].addSeries(t)},this),e.forEach(this.stack,function(t){
t.assignAxes&&t.assignAxes(this.axes)},this);var t=this.dim=this.surface.getDimensions();
t.width=p.normalizedLength(t.width),t.height=p.normalizedLength(t.height),x.forIn(this.axes,E),
_(this.stack,t);var i=this.offsets={l:0,r:0,t:0,b:0},s=this;if(x.forIn(this.axes,function(t){
l("dojo-bidi")&&s._resetLeftBottom(t),x.forIn(t.getOffsets(),function(t,e){i[e]=Math.max(t,i[e]);
})}),this.title){this.titleGap=0==this.titleGap?0:this.titleGap||this.theme.chart.titleGap||20,
this.titlePos=this.titlePos||this.theme.chart.titlePos||"top",this.titleFont=this.titleFont||this.theme.chart.titleFont,
this.titleFontColor=this.titleFontColor||this.theme.chart.titleFontColor||"black";
var r=p.normalizedLength(p.splitFontString(this.titleFont).size);i["top"==this.titlePos?"t":"b"]+=r+this.titleGap;
}return x.forIn(this.margins,function(t,e){i[e]+=t}),this.plotArea={width:t.width-i.l-i.r,
height:t.height-i.t-i.b},x.forIn(this.axes,E),_(this.stack,this.plotArea),this},render:function(){
return this._delayedRenderHandle&&(clearTimeout(this._delayedRenderHandle),this._delayedRenderHandle=null),
this.theme&&this.theme.clear(),this.dirty?this.fullRender():(this.calculateGeometry(),
x.forEachRev(this.stack,function(t){t.render(this.dim,this.offsets)},this),x.forIn(this.axes,function(t){
t.render(this.dim,this.offsets)},this),this._makeClean(),this)},fullRender:function(){
this.fullGeometry();var t=this.offsets,i=this.dim,s=Math.max(0,i.width-t.l-t.r),r=Math.max(0,i.height-t.t-t.b);
e.forEach(this.series,C),x.forIn(this.axes,C),e.forEach(this.stack,C);var h=this.surface.children;
if(m.dispose)for(var n=0;n<h.length;++n)m.dispose(h[n]);if(this.chartTitle&&this.chartTitle.tagName&&o.destroy(this.chartTitle),
this.surface.clear(),this.chartTitle=null,this._renderChartBackground(i,t),this._nativeClip?this._renderPlotBackground(i,t,s,r):this._renderPlotBackground(i,t,s,r),
x.foldr(this.stack,function(e,s){return s.render(i,t),0},0),this._nativeClip||this._renderChartBackground(i,t),
this.title){var a="canvas"==p.renderer&&this.htmlLabels,c=a||!l("ie")&&!l("opera")&&this.htmlLabels?"html":"gfx",d=p.normalizedLength(p.splitFontString(this.titleFont).size);
this.chartTitle=f.createText[c](this,this.surface,i.width/2,"top"==this.titlePos?d+this.margins.t:i.height-this.margins.b,"middle",this.title,this.titleFont,this.titleFontColor);
}return x.forIn(this.axes,function(e){e.render(i,t)}),this._makeClean(),this},_renderChartBackground:function(t,i){
var e,s=this.theme,h=void 0!==this.fill?this.fill:s.chart&&s.chart.fill,n=void 0!==this.stroke?this.stroke:s.chart&&s.chart.stroke;
if("inherit"==h){var o=this.node;for(h=new a(r.get(o,"backgroundColor"));0==h.a&&o!=document.documentElement;)h=new a(r.get(o,"backgroundColor")),
o=o.parentNode}h&&(this._nativeClip?(h=c.prototype._shapeFill(c.prototype._plotFill(h,t),{
x:0,y:0,width:t.width+1,height:t.height+1}),this.surface.createRect({width:t.width+1,
height:t.height+1}).setFill(h)):(h=c.prototype._plotFill(h,t,i),i.l&&(e={x:0,y:0,
width:i.l,height:t.height+1},this.surface.createRect(e).setFill(c.prototype._shapeFill(h,e))),
i.r&&(e={x:t.width-i.r,y:0,width:i.r+1,height:t.height+2},this.surface.createRect(e).setFill(c.prototype._shapeFill(h,e))),
i.t&&(e={x:0,y:0,width:t.width+1,height:i.t},this.surface.createRect(e).setFill(c.prototype._shapeFill(h,e))),
i.b&&(e={x:0,y:t.height-i.b,width:t.width+1,height:i.b+2},this.surface.createRect(e).setFill(c.prototype._shapeFill(h,e))))),
n&&this.surface.createRect({width:t.width-1,height:t.height-1}).setStroke(n)},_renderPlotBackground:function(t,i,e,s){
var r=this.theme,h=r.plotarea&&r.plotarea.fill,n=r.plotarea&&r.plotarea.stroke,o={
x:i.l-1,y:i.t-1,width:e+2,height:s+2};h&&(h=c.prototype._shapeFill(c.prototype._plotFill(h,t,i),o),
this.surface.createRect(o).setFill(h)),n&&this.surface.createRect({x:i.l,y:i.t,width:e+1,
height:s+1}).setStroke(n)},delayedRender:function(){return this._delayedRenderHandle||(this._delayedRenderHandle=setTimeout(i.hitch(this,function(){
this.render()}),this.delayInMs)),this},connectToPlot:function(t,i,e){return t in this.plots?this.stack[this.plots[t]].connect(i,e):null;
},fireEvent:function(t,i,e){if(t in this.runs){var s=this.series[this.runs[t]].plot;
if(s in this.plots){var r=this.stack[this.plots[s]];r&&r.fireEvent(t,i,e)}}return this;
},_makeClean:function(){e.forEach(this.axes,S),e.forEach(this.stack,S),e.forEach(this.series,S),
this.dirty=!1},_makeDirty:function(){e.forEach(this.axes,j),e.forEach(this.stack,j),
e.forEach(this.series,j),this.dirty=!0},_invalidateDependentPlots:function(t,i){if(t in this.plots){
var s,r=this.stack[this.plots[t]],h=i?"vAxis":"hAxis";r[h]?(s=this.axes[r[h]],s&&s.dependOnData()&&(s.dirty=!0,
e.forEach(this.stack,function(t){t[h]&&t[h]==r[h]&&(t.dirty=!0)}))):r.dirty=!0}},
setDir:function(t){return this},_resetLeftBottom:function(t){},formatTruncatedLabel:function(t,i,e){}
});return l("dojo-bidi")?s("dojox.charting.Chart",[T,g]):T});