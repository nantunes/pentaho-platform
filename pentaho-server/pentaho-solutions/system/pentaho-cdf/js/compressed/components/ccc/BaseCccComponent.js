define(["../ChartComponent","./BaseCccComponent.ext","../../lib/CCC/pvc","../../lib/CCC/def","../../lib/modernizr","../../lib/jquery","amd!../../lib/underscore","../../lib/CCC/protovis-compat!","pentaho/shim/es6-promise"],function(e,t,i,s,n,r,a,o,h){
function d(e){return null==e||0===e.length}i.defaultCompatVersion(3);var c="pentaho/visual/color/palettes/quantitativeBlue3";
return e.extend({query:null,chart:null,__cccVizViewId:void 0,__getMatchingVizViewId:function(){
if(void 0===this.__cccVizViewId){var e=s.qualNameOf(this.cccType).name;this.__cccVizViewId=t.getMatchingVizViewId(e,this.chartDefinition);
}return this.__cccVizViewId},__applyVizApiStyles:!1,_preProcessChartDefinition:function(){
var e=!1,t=this.chartDefinition;if(t){var s=t.compatVersion;if(null==s&&(s="function"==typeof i.defaultCompatVersion?i.defaultCompatVersion():1),
1>=s){"showLegend"in t&&(t.legend=t.showLegend,delete t.showLegend);for(var n in t){
var r=/^barLine(.*)$/.exec(n);r&&(t["secondAxis"+(r[1]||"")]=t[n],delete t[n])}}else s>=3&&(e=null!==this.__getMatchingVizViewId());
}this.__applyVizApiStyles=e},update:function(){null==this.parameters&&(this.parameters=[]);
var e=!!this.clearsBeforePreExecution&&"total"===this._getEffectiveRenderMode(),t=e?r("#"+this.htmlObject).empty():r("#"+this.htmlObject),i=this;
"undefined"==typeof this.chartDefinition.width&&(this.chartDefinition.width=t.width()),
"undefined"==typeof this.chartDefinition.height&&(this.chartDefinition.height=t.height()),
"undefined"!=typeof n&&n.svg?this.renderChart():o.listenForPageLoad(function(){i.renderChart();
})},renderChart:function(){var e=this._getEffectiveRenderMode(),t="total"===e||"partialSameMetadata"===e;
t?this.base():this.execute(a.bind(this.render,this))},render:function(e){this._preProcessChartDefinition();
var i=this.__applyVizApiStyles?t.getExtensionsPromise(this.__getMatchingVizViewId()):h.resolve(null);
i.then(a.bind(this._renderInner,this,e)).then(a.bind(this.endExec,this),a.bind(this.failExec,this));
},_getEffectiveRenderMode:function(){return this.chart&&this.renderMode?this.renderMode:"total";
},_renderInner:function(e,i){var s=this._getEffectiveRenderMode(),n=this.placeholder(),a=0===n.children().length;
a&&n.append('<div id="'+this.htmlObject+'protovis"></div>');var o=r.extend({},this.chartDefinition);
if(this.__applyVizApiStyles&&(o.baseAxisLabelDesiredAngles&&0===o.baseAxisLabelDesiredAngles.length&&(o.baseAxisLabelDesiredAngles=void 0),
o.orthoAxisLabelDesiredAngles&&0===o.orthoAxisLabelDesiredAngles.length&&(o.orthoAxisLabelDesiredAngles=void 0)),
i&&(o=r.extend(i,o)),this.__applyVizApiStyles&&d(o.colors)&&(d(o.continuousColorAxisColors)&&(o.continuousColorAxisColors=t.getColors(c)),
o.discreteColorAxisColors=t.getColors()),o.canvas=this.htmlObject+"protovis",o.extensionPoints){
var h={};o.extensionPoints.forEach(function(e){h[e[0]]=e[1]}),o.extensionPoints=h;
}switch(s){case"total":this.chart&&this.chart.dispose&&this.chart.dispose(),this.chart=new this.cccType(o),
arguments.length>0&&this.chart.setData(e,{crosstabMode:this.crosstabMode,seriesInRows:this.seriesInRows
}),this.chart.render();break;case"partialSameMetadata":this._updateChartOptions(o),
arguments.length>0&&this.chart.setData(e),this.chart.render({recreate:!0,dataOnRecreate:this.dataAdditiveMode?"add":"reload"
});break;case"partialSameData":this._updateChartOptions(o),this.chart.render({recreate:!0,
dataOnRecreate:null});break;case"partialSameLayout":this._updateChartOptions(o),this.chart.renderInteractive();
}},_updateChartOptions:function(e){r.extend(!0,this.chart.options,e)}})});