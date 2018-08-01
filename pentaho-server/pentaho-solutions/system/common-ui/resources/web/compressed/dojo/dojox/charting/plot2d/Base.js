define(["dojo/_base/declare","dojo/_base/array","dojox/gfx","../Element","./common","../axis2d/common","dojo/has"],function(t,e,i,n,r,s,o){
var h=t("dojox.charting.plot2d.Base",n,{constructor:function(t,e){e&&e.tooltipFunc&&(this.tooltipFunc=e.tooltipFunc);
},clear:function(){return this.series=[],this.dirty=!0,this},setAxis:function(t){
return this},assignAxes:function(t){e.forEach(this.axes,function(e){this[e]&&this.setAxis(t[this[e]]);
},this)},addSeries:function(t){return this.series.push(t),this},getSeriesStats:function(){
return r.collectSimpleStats(this.series)},calculateAxes:function(t){return this.initializeScalers(t,this.getSeriesStats()),
this},initializeScalers:function(){return this},isDataDirty:function(){return e.some(this.series,function(t){
return t.dirty})},render:function(t,e){return this},renderLabel:function(t,e,n,r,o,h,a){
var c=s.createText[this.opt.htmlLabels&&"vml"!=i.renderer?"html":"gfx"](this.chart,t,e,n,a?a:"middle",r,o.series.font,o.series.fontColor);
return h&&(this.opt.htmlLabels&&"vml"!=i.renderer?c.style.pointerEvents="none":c.rawNode&&(c.rawNode.style.pointerEvents="none")),
this.opt.htmlLabels&&"vml"!=i.renderer&&this.htmlElements.push(c),c},getRequiredColors:function(){
return this.series.length},_getLabel:function(t){return r.getLabel(t,this.opt.fixed,this.opt.precision);
}});return o("dojo-bidi")&&h.extend({_checkOrientation:function(t,e,i){this.chart.applyMirroring(this.group,e,i);
}}),h});