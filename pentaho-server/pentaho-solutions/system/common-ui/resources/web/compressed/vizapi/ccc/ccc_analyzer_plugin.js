/*!
* Copyright 2010 - 2017 Hitachi Vantara.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

define(["cdf/lib/CCC/def","cdf/lib/CCC/pvc","common-ui/vizapi/VizController","pentaho/common/Messages","dojo/_base/declare","dojo/_base/array"],function(e,t,a,i,n,r){
pentaho="undefined"!=typeof pentaho?pentaho:{},pentaho.visualizations||(pentaho.visualizations={}),
analyzerPlugins="undefined"==typeof analyzerPlugins?[]:analyzerPlugins,analyzerPlugins.push({
init:function(){n("analyzer.CCCVizHelper",null,{isInteractionEnabled:function(){return!0;
},hasContentLink:function(){return/\bcl=/.test(window.location.href)},showConfirm:function(e,t){
t&&cv.prefs.suppressMsg[t]||cv.getActiveReport().rptDlg.showConfirm(e,null,null,null,t);
},message:function(e,t){var a=cvCatalog[e]||"";return a&&t&&(a=cv.util.substituteParams.apply(cv.util,[a].concat(t))),
a},getDoubleClickTooltip:function(e){return cv.getActiveReport().getDoubleClickTooltip(e);
},completeAxisGemsMetadata:function(t,a){function i(e,t){return parseFloat(e.getAttribute("gembarOrdinal"))-parseFloat(t.getAttribute("gembarOrdinal"));
}function n(t){var a="[@gembarId='"+t+"']";a=c?"cv:measures/cv:measure"+a:"cv:columnAttributes/cv:attribute"+a+" | cv:rowAttributes/cv:attribute"+a;
var n=s.selectNodes(a);return n=e.query(n).array(),n.sort(i),n}function o(t){var a=e.getOwn(l,t);
a||(a=l[t]=n(t));for(var i;a.length&&(i=a.shift(),"true"===i.getAttribute("hideInChart")););
return i}var s=cv.getActiveReport().reportDoc.getReportNode(),u=cv.getFieldHelp(),c="measure"===t,l={};
r.forEach(a,function(t){var a=t.role;if(a&&"undefined"!==a){var i,n,r,s,l,d=o(t.role)||e.assert("Undefined gem in document."),g=d.getAttribute("formula")||null,h=!1;
switch(d.parentNode.tagName){case"rowAttributes":l="row";break;case"columnAttributes":
l="column";break;case"measures":l="measure"}if(c&&(n="[Measures]",t.measureType=d.getAttribute("measureTypeEnum")),
c&&"VALUE"!==t.measureType)i=d.getAttribute("id"),g=null,h=!1;else{var p=cv.getActiveReport().getGem(g)||e.assert("No gem object.");
i=p.getUniqueId(),t.label=p.getDisplayLabel(!0);var f=p.getLink&&p.getLink();h=!!f,
r=h?f.getAttribute("toolTip"):null,s=h?f.getAttribute("type"):null,c||(g||e.assert("Non-measures have formulas."),
n=u.get(g,"hierarchy"))}e.set(t,"id",i,"formula",g,"hierarchy",n,"hasLink",h,"linkLabel",r||"","linkType",s,"reportAxis",l);
}})},generateOptionsFromAnalyzerState:function(e){for(var t={},a=e.reportDoc.getChartOptions().attributes,i=0;i<a.length;i++){
var n=a[i];switch(n.nodeName){case"lineShape":case"lineWidth":case"scatterPattern":
case"scatterColorSet":case"scatterReverseColors":break;default:t[n.nodeName]=n.nodeValue;
}}return t},canRefreshReport:function(e){for(var t=e.getVizDataReq(),a=0;a<t.length;a++)if(1==t[a].required&&0==e.findGemsByGembarId(t[a].id).length)return!1;
switch(e.visualization.id){case"ccc_heatgrid":return e.findGemsByGembarId("color").length>0||e.findGemsByGembarId("size").length>0;
case"ccc_barline":return e.findGemsByGembarId("measures").length>0||e.findGemsByGembarId("measuresLine").length>0;
}return!0}}),n("analyzer.CCCVizConfig",[analyzer.ColorConfiguration],{_processModelValueChange:function(e,t){
this.report.visualization.args[e.id]=t.newVal},onModelEvent:function(e,t,a,i){"value"==a&&this._processModelValueChange(t,i),
this.inherited(arguments)},updateConfiguration:function(e){this.inherited(arguments);
var t=this.report.visualization.args;if(r.forEach(e.properties,function(e){if(!e.dataStructure){
var a=e.value;if(void 0===a){var i=e.values;i&&i.length&&(a=i[0])}void 0!==a&&(t[e.id]=a);
}},this),!t.colorScaleType){var a=e.byId("pattern");a&&this._updateColorConfiguration(e);
}this._updateTrendUI(e)},_updateColorConfiguration:function(e){var t,a=e.byId("pattern").value,i=e.byId("colorSet").value,n="";
"GRADIENT"==a?(t="linear",n="-5"):(n="3-COLOR"==a?"-3":"-5",t="discrete"),this._setScalingType(t);
var r=e.byId("reverseColors").value,o=this.palettes[i+n];if(r){for(var s=[],u=o.length-1;u>=0;u--)s.push(o[u]);
o=s}this._setColorRange(o)},_updateTrendUI:function(e){var t=e.byId("trendType");if(t){
var a=t.value,i=!a||"none"===a;e.byId("trendLineWidth").ui.hidden=i,e.byId("trendName").ui.hidden=i;
}},_setScalingType:function(e){this.report.visualization.args.colorScaleType=e},_setColorRange:function(e){
this.report.visualization.args.colors=e}}),n("analyzer.CCCHeatgridVizConfig",[analyzer.CCCVizConfig],{
onModelEvent:function(e,t,a,i){switch(a){case"insertAt":case"gems":this._updateOptions(e);
}this.inherited(arguments)},updateConfiguration:function(e){this._updateOptions(e),
this.inherited(arguments)},_updateOptions:function(e){var t=e.byId("color"),a=e.byId("size"),i=t.gems.length+a.gems.length;
t.required=0==i,a.required=0==i}}),n("analyzer.CCCBarLineVizConfig",[analyzer.CCCVizConfig],{
onModelEvent:function(e,t,a,i){switch(a){case"insertAt":case"gems":this._updateMeasuresOptions(e);
}this.inherited(arguments)},updateConfiguration:function(e){this._updateMeasuresOptions(e),
this.inherited(arguments)},_updateMeasuresOptions:function(e){var t=e.byId("measures"),a=e.byId("measuresLine"),i=t.gems.length+a.gems.length;
t.required=0==i,a.required=0==i;var n=a.gems.length>0;["shape","lineWidth"].forEach(function(t){
e.byId(t).ui.hidden=!n})}}),n("analyzer.CCCScatterVizConfig",[analyzer.CCCVizConfig],{
onModelEvent:function(e,t,a,i){switch(a){case"insertAt":case"gems":this._updateColorRoleOptions(e);
}this.inherited(arguments)},updateConfiguration:function(e){this._updateColorRoleOptions(e),
this.inherited(arguments)},_updateColorRoleOptions:function(e){var t=e.byId("color");
t.allowMultiple=!t.gems.length||"measure"!==t.gems[0].type;var a=t.gems.length>0&&"measure"===t.gems[0].type;
e.byId("reverseColors").ui.hidden=!a,e.byId("colorSet").ui.hidden=!a,e.byId("pattern").ui.hidden=!a;
}});var t=["ccc_bar","ccc_barstacked","ccc_barnormalized","ccc_horzbar","ccc_horzbarstacked","ccc_horzbarnormalized","ccc_pie","ccc_line","ccc_area","ccc_scatter","ccc_barline","ccc_heatgrid","ccc_sunburst"],a={
ccc_heatgrid:analyzer.CCCHeatgridVizConfig,ccc_scatter:analyzer.CCCScatterVizConfig,
ccc_barline:analyzer.CCCBarLineVizConfig},i=new analyzer.CCCVizHelper;cv.pentahoVisualizations||(cv.pentahoVisualizations=[]),
cv.pentahoVisualizationsHelpers||(cv.pentahoVisualizationsHelpers={}),r.forEach(t,function(e){
cv.pentahoVisualizations.push(pentaho.visualizations.getById(e)),cv.pentahoVisualizationHelpers[e]=i,
analyzer.LayoutPanel.configurationManagers["JSON_"+e]=a[e]||analyzer.CCCVizConfig;
},this)}})});