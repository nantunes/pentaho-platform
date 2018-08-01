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

define(["cdf/lib/CCC/def","cdf/lib/CCC/pvc","cdf/lib/CCC/protovis","common-ui/vizapi/VizController","common-ui/vizapi/ccc/ccc_analyzer_plugin"],function(e,t,i){
function s(e){pentaho.visualizations.push(e)}function n(){function t(e,t){return t&&cvCatalog[(e||"")+t]||"";
}function i(e){return t("VIZ_",e)||e}function n(e,i){return t("dropZoneLabels_",e)||t("ropZoneLabels_",e)||i||e;
}function a(e,i){return t("dlgChartProps",e)||i||e}function o(e){return{id:"rows",
dataType:"string",dataStructure:"column",caption:n(e),required:!1,allowMultiple:!0,
defaultAppend:!0}}function r(e){return{id:"columns",dataType:"string",dataStructure:"column",
caption:n(e),required:!1,allowMultiple:!0}}function l(e){return{id:"measures",dataType:"number",
dataStructure:"column",caption:n(e),required:!0,allowMultiple:!0,defaultAppend:!0
}}function c(){return{id:"multi",dataType:"string",dataStructure:"column",caption:n("MULTI_CHART"),
allowMultiple:!0,required:!1}}function u(t,i){var s=["circle","cross","diamond","square","triangle"];
return t&&(s=s.filter(function(i){return e.hasOwn(t,i)})),s.unshift("none"),{id:"shape",
dataType:"string",values:s,ui:{labels:s.map(function(e){return n(e.toUpperCase());
}),group:"options",type:"combo",seperator:i?e.get(i,"separator",!1):!1,caption:n("BULLET_STYLE")
}}}function h(){return{id:"lineWidth",dataType:"string",values:["1","2","3","4","5","6","7","8"],
ui:{labels:["1","2","3","4","5","6","7","8"],group:"options",type:"combo",caption:a("LineWidth")
}}}function p(t){var i=["none","linear"];return[{id:"trendType",dataType:"string",
values:i,ui:{labels:i.map(function(e){return n("TREND_TYPE_"+e.toUpperCase())}),group:"options",
type:"combo",caption:n("TREND_TYPE"),seperator:e.get(t,"separator",!0)}},{id:"trendName",
dataType:"string",ui:{group:"options",type:"textbox",caption:n("TREND_NAME")}},{id:"trendLineWidth",
dataType:"string",values:["1","2","3","4","5","6","7","8"],ui:{labels:["1","2","3","4","5","6","7","8"],
group:"options",type:"combo",caption:n("TREND_LINEWIDTH")}}]}function d(e){var t=["bySizeDescending","bySizeAscending","none"];
return[{id:"sliceOrder",dataType:"string",values:t,ui:{labels:t.map(function(e){return n("SORT_TYPE_"+e.toUpperCase());
}),group:"options",type:"combo",caption:n("SORT_TYPE"),seperator:e}}]}function m(t){
return{id:"pattern",dataType:"string",values:["GRADIENT","3-COLOR","5-COLOR"],ui:{
labels:["GRADIENT","3_STEP","5_STEP"].map(function(e){return n(e)}),group:"options",
type:"combo",caption:n("PATTERN"),seperator:e.get(t,"separator",!1)}}}function _(){
return{id:"colorSet",dataType:"string",values:["ryg","ryb","blue","gray"],ui:{labels:["RYG","RYB","BLUE","GRAY"].map(function(e){
return n("GRAD_"+e)}),group:"options",type:"combo",caption:n("COLORSET")}}}function f(){
return{id:"reverseColors",dataType:"boolean",ui:{label:n("COLORSET_REVERSE"),group:"options",
type:"checkbox"}}}function g(){return{id:"emptySlicesHidden",dataType:"boolean",value:!0,
ui:{label:n("SHOW_AS_GAPS"),group:"options",type:"checkbox",caption:n("EMPTY_SLICES")
}}}function C(e){var t=["none","outside","inside"];return{id:"labelsOption",dataType:"string",
values:t,ui:{labels:t.map(function(e){return n("VALUE_POSITION_"+e.toUpperCase());
}),group:"options",type:"combo",caption:n("VALUE_POSITION")}}}function b(t){var i=["none","center","left","right","top","bottom"];
if(t&&t.hideOptions)for(var s=0;s<t.hideOptions.length;s++)for(var a=0;a<i.length;a++)if(i[a]===t.hideOptions[s]){
i.splice(a,1);break}return{id:e.get(t,"labels_option","labelsOption"),dataType:"string",
values:i,ui:{labels:i.map(function(e){return n("VALUE_ANCHOR_DOTS_"+e.toUpperCase());
}),group:"options",type:"combo",caption:n(e.get(t,"value_anchor","VALUE_ANCHOR"))
}}}function v(t){var i=e.get(t,"anchors");return{id:"labelsOption",dataType:"string",
values:i,ui:{labels:i.map(function(e){return n("COLUMN_LABEL_ANCHOR_"+e.toUpperCase());
}),group:"options",type:"combo",seperator:e.get(t,"separator",!0),caption:n(e.get(t,"value_anchor","VALUE_ANCHOR"))
}}}function x(e){return{id:"optionsBtn",dataType:"none",ui:{group:"options",type:"button",
label:n("CHART_OPTIONS"),seperator:e||!1}}}function y(t,i){var s=[];return e.get(i,"row",!0)&&s.push(o(t+"_ROW")),
e.get(i,"column",!0)&&s.push(r(t+"_COL")),e.get(i,"measure",!0)&&s.push(l(t+"_NUM")),
e.get(i,"multi",!0)&&s.push(c()),e.get(i,"options",!0)&&s.push(x(!1)),s}s({id:"ccc_bar",
type:"barchart",source:"CCC",name:i("VERTICAL_BAR"),"class":"pentaho.ccc.BarChart",
args:{},propMap:[],dataReqs:[{name:"Default",reqs:e.array.appendMany(y("VERTICAL_BAR",{
options:!1}),[v({separator:!1,anchors:["none","center","inside_end","inside_base","outside_end"]
})],p({separator:!0}),[x(!0)])}],menuOrdinal:100}),s({id:"ccc_barstacked",type:"barchart",
source:"CCC",name:i("STACKED_VERTICAL_BAR"),"class":"pentaho.ccc.StackedBarChart",
args:{},propMap:[],dataReqs:[{name:"Default",reqs:e.array.appendMany(y("STACKED_VERTICAL_BAR",{
options:!1}),[v({separator:!1,anchors:["none","center","inside_end","inside_base"]
})],[x(!0)])}],menuOrdinal:110}),s({id:"ccc_horzbar",type:"horzbarchart",source:"CCC",
name:i("HORIZONTAL_BAR"),"class":"pentaho.ccc.HorizontalBarChart",args:{},propMap:[],
dataReqs:[{name:"Default",reqs:e.array.appendMany(y("HORIZONTAL_BAR",{options:!1}),[v({
separator:!1,anchors:["none","center","inside_end","inside_base","outside_end"]})],[x(!0)])
}],menuOrdinal:130,menuSeparator:!0}),s({id:"ccc_horzbarstacked",type:"horzbarchart",
source:"CCC",name:i("STACKED_HORIZONTAL_BAR"),"class":"pentaho.ccc.HorizontalStackedBarChart",
args:{},propMap:[],dataReqs:[{name:"Default",reqs:e.array.appendMany(y("STACKED_HORIZONTAL_BAR",{
options:!1}),[v({separator:!1,anchors:["none","center","inside_end","inside_base"]
})],[x(!0)])}],menuOrdinal:140}),s({id:"ccc_barnormalized",type:"barchart",source:"CCC",
name:i("PCT_STACKED_VERTICAL_BAR"),"class":"pentaho.ccc.NormalizedBarChart",args:{},
propMap:[],dataReqs:[{name:"Default",reqs:e.array.appendMany(y("PCT_STACKED_VERTICAL_BAR",{
options:!1}),[v({separator:!1,anchors:["none","center","inside_end","inside_base"]
})],[x(!0)])}],menuOrdinal:120}),s({id:"ccc_horzbarnormalized",type:"horzbarchart",
source:"CCC",name:i("PCT_STACKED_HORIZONTAL_BAR"),"class":"pentaho.ccc.HorizontalNormalizedBarChart",
args:{},propMap:[],dataReqs:[{name:"Default",reqs:e.array.appendMany(y("PCT_STACKED_HORIZONTAL_BAR",{
options:!1}),[v({separator:!1,anchors:["none","center","inside_end","inside_base"]
})],[x(!0)])}],menuOrdinal:150}),s({id:"ccc_line",type:"linechart",source:"CCC",name:i("LINE"),
"class":"pentaho.ccc.LineChart",args:{shape:"circle"},propMap:[],dataReqs:[{name:"Default",
drillOrder:["rows"],hyperlinkOrder:["rows","columns"],reqs:e.array.appendMany(y("LINE",{
options:!1}),[b(!0),u(null,{separator:!0}),h()],p(),[x(!0)])}],menuOrdinal:160,menuSeparator:!0
}),s({id:"ccc_area",type:"areachart",source:"CCC",name:i("STACKED_AREA"),"class":"pentaho.ccc.StackedAreaChart",
args:{},propMap:[],dataReqs:[{name:"Default",drillOrder:["rows"],hyperlinkOrder:["rows","columns"],
reqs:e.array.appendMany(y("STACKED_AREA",{options:!1}),[b(!0)],[x(!0)])}],menuOrdinal:180
}),s({id:"ccc_scatter",type:"scatter",source:"CCC",name:i("SCATTER"),"class":"pentaho.ccc.MetricDotChart",
maxValues:[1e3,2500,5e3,1e4],args:{},propMap:[],dataReqs:[{name:"Default",reqs:e.array.appendMany([{
id:"x",dataType:"number",dataStructure:"column",caption:n("SCATTER_X"),required:!0,
allowMultiple:!1},{id:"y",dataType:"number",dataStructure:"column",caption:n("SCATTER_Y"),
required:!0,allowMultiple:!1},{id:"rows",dataType:"string",dataStructure:"column",
caption:n("SCATTER_ROW"),required:!0,allowMultiple:!0},{id:"color",dataType:"number, string",
dataStructure:"column",caption:n("SCATTER_COL"),required:!1,allowMultiple:!1},{id:"size",
dataType:"number",dataStructure:"column",caption:n("SCATTER_Z"),required:!1,allowMultiple:!1
},c(),m(),_(),f()],[b()],p(),[x(!0)])}],menuOrdinal:190,menuSeparator:!0}),s({id:"ccc_barline",
type:"barchart",source:"CCC",name:i("VERTICAL_BAR_LINE"),"class":"pentaho.ccc.BarLineChart",
args:{shape:"circle"},propMap:[],dataReqs:[{name:"Default",reqs:[o("VERTICAL_BAR_LINE_ROW"),r("VERTICAL_BAR_LINE_COL"),e.set(l("VERTICAL_BAR_LINE_NUMCOL"),"required",!1),e.set(l("VERTICAL_BAR_LINE_NUMLINE"),"id","measuresLine","required",!1),v({
value_anchor:"VALUE_COLUMN_ANCHOR",separator:!1,anchors:["none","center","inside_end","inside_base","outside_end"]
}),b({labels_option:"lineLabelsOption",value_anchor:"VALUE_LINE_ANCHOR"}),c(),u(null,{
separator:!0}),h(),x(!0)]}],menuOrdinal:125}),s({id:"ccc_waterfall",type:"waterfallchart",
source:"CCC",name:i("WATERFALL"),"class":"pentaho.ccc.WaterfallChart",args:{},propMap:[],
dataReqs:[{name:"Default",reqs:y("WATERFALL")}]}),s({id:"ccc_boxplot",type:"boxplotchart",
source:"CCC",name:i("BOXPLOT"),"class":"pentaho.ccc.BoxplotChart",args:{},propMap:[],
dataReqs:[{name:"Default",reqs:[o("BOXPLOT_ROW"),e.set(l("BOXPLOT_PCT50"),"allowMultiple",!1,"required",!1),{
id:"percentil25",dataType:"number",dataStructure:"column",caption:n("BOXPLOT_PCT25"),
required:!1,allowMultiple:!1},{id:"percentil75",dataType:"number",dataStructure:"column",
caption:n("BOXPLOT_PCT75"),required:!1,allowMultiple:!1},{id:"percentil5",dataType:"number",
dataStructure:"column",caption:n("BOXPLOT_PCT05"),required:!1,allowMultiple:!1},{
id:"percentil95",dataType:"number",dataStructure:"column",caption:n("BOXPLOT_PCT95"),
required:!1,allowMultiple:!1},c(),x()]}]}),s({id:"ccc_pie",type:"piechart",source:"CCC",
name:i("MULTIPLE_PIE"),"class":"pentaho.ccc.PieChart",args:{labelsOption:"outside"
},propMap:[],dataReqs:[{name:"Default",drillOrder:["rows","columns"],hyperlinkOrder:["rows","columns"],
reqs:e.array.appendMany(y("MULTIPLE_PIE",{multi:!1,options:!1}),[C(),x(!0)])}],menuOrdinal:183
}),s({id:"ccc_heatgrid",type:"heatgrid",source:"CCC",name:i("HEATGRID"),"class":"pentaho.ccc.HeatGridChart",
maxValues:[500,1e3,2e3,5e3],args:{shape:"square"},propMap:[],dataReqs:[{name:"Default",
reqs:[{id:"rows",dataType:"string",dataStructure:"row",caption:n("HEATGRID_ROW"),
required:!0,allowMultiple:!0},{id:"columns",dataType:"string",dataStructure:"column",
caption:n("HEATGRID_COL"),required:!1,allowMultiple:!0},{id:"color",dataType:"number",
dataStructure:"column",caption:n("HEATGRID_COLOR"),required:!1,allowMultiple:!1},{
id:"size",dataType:"number",dataStructure:"column",caption:n("HEATGRID_SIZE"),required:!1,
allowMultiple:!1},b({hideOptions:["left","right","top","bottom"]}),m({separator:!0
}),_(),f(),u({square:!0,circle:!0}),x(!0)]}],menuOrdinal:200}),s({id:"ccc_treemap",
type:"treemapchart",source:"CCC",name:i("TREEMAP"),"class":"pentaho.ccc.TreemapChart",
args:{},propMap:[],dataReqs:[{name:"Default",reqs:[e.set(o("TREEMAP_ROW"),"required",!0),{
id:"size",dataType:"number",dataStructure:"column",caption:n("TREEMAP_SIZE"),required:!1,
allowMultiple:!1},c(),x(!1)]}]}),s({id:"ccc_bulletchart",type:"bulletchart",source:"CCC",
name:"Bullet Chart","class":"pentaho.ccc.BulletChart",args:{},propMap:[],dataReqs:[{
name:"Default",reqs:[{id:"rows",dataType:"string",dataStructure:"row",caption:"Across",
required:!0},{id:"columns",dataType:"string",dataStructure:"column",caption:"Down",
required:!0},{id:"measures",dataType:"number",dataStructure:"column",caption:"Values",
required:!0},x()]}]}),s({id:"ccc_sunburst",type:"treemapchart",source:"CCC",name:i("SUNBURST"),
"class":"pentaho.ccc.SunburstChart",args:{},propMap:[],dataReqs:[{name:"Default",
reqs:e.array.appendMany([e.set(o("SUNBURST_ROW"),"required",!0),{id:"size",dataType:"number",
dataStructure:"column",caption:n("SUNBURST_SIZE"),required:!1,allowMultiple:!1},c()],[b({
hideOptions:["left","right","top","bottom"]})],d(!0),[g()],[x(!0)])}],menuOrdinal:185
})}function a(e){var i=e.color;return e.isOn()?i:t.toGrayScale(i)}function o(e){switch(e){
case"string":return"STRING";case"number":return"NUMERIC"}throw new Error("Unsupported data type");
}function r(e){var t=e.lastIndexOf("~");return 0>t?["",e]:[e.substring(0,t),e.substring(t+1)];
}function l(e,t){return e?e.replace(/\bdefault\s*$/i,"sans-serif"):(t||10)+"px sans-serif";
}function c(e,t){var i=e[t+"Size"];if(i){var s=e[t+"Style"];return null==s||"PLAIN"==s?s="":s+=" ",
s+i+"px "+e[t+"FontFamily"]}}function u(e,t){return+e[t+"Size"]}function h(e,t){return e[t+"FontFamily"];
}function p(t,i){var s=t.getColumnProperty(i,"dataReq");return s?e.array.to(s).map(function(e){
return e.id||(e.id="undefined"),e}):void 0}function d(){this.options||(this.options={}),
this._vizOptions.labelsVisible&&(this.options.valuesVisible=this._vizOptions.labelsVisible),
this._vizOptions.labelsAnchor&&(this.options.valuesAnchor=this._vizOptions.labelsAnchor),
this._vizOptions.labelsTextAlign&&(this.options.extensionPoints||(this.options.extensionPoints={}),
this.options.extensionPoints.label_textAlign=this._vizOptions.labelsTextAlign)}function m(){
return this.options||(this.options={}),this._vizOptions.labelsOption&&"none"!=this._vizOptions.labelsOption?this.options.valuesVisible=!0:this.options.valuesVisible=!1;
}function _(){m.call(this)&&(this.options.valuesAnchor=this._vizOptions.labelsOption);
}function f(){if(m.call(this)){this.options.extensionPoints||(this.options.extensionPoints={});
var e=this._vizOptions.labelsOption;this.options.extensionPoints.label_textMargin=7,
"center"==e&&(this.options.valuesAnchor="center"),"inside_end"==e&&("horizontal"==this.options.orientation?this.options.valuesAnchor="right":this.options.valuesAnchor="top"),
"inside_base"==e&&("horizontal"==this.options.orientation?this.options.valuesAnchor="left":this.options.valuesAnchor="bottom"),
"outside_end"==e&&("horizontal"==this.options.orientation?(this.options.valuesAnchor="right",
this.options.extensionPoints.label_textAlign="left"):(this.options.valuesAnchor="top",
this.options.extensionPoints.label_textBaseline="bottom"))}}function g(){var e=this._vizOptions.lineLabelsOption;
e&&"none"!=e&&(this.options.plot2ValuesVisible=!0,this.options.plot2ValuesAnchor=e);
}function C(){m.call(this)&&(this.options.valuesLabelStyle=this._vizOptions.labelsOption);
}pentaho="undefined"!=typeof pentaho?pentaho:{},e.globalSpace("pentaho",pentaho),
pentaho.visualizations||(pentaho.visualizations={});var b=/\[#null\]$/;n(),pentaho.trends.types().forEach(function(e){
var i=pentaho.trends.get(e);t.trends.define(e,i)}),e.type("pentaho.ccc.Axis").init(function(e,t){
function i(e,t){e.axis=this,e.index=t;var i=e.role;if(i&&"undefined"!==i){this._ensureRole(i)&&(this.boundRoles[i]=!0,
this.boundRolesIdList.push(i));var s=this.gemsByRole[i];e.roleLevel=s.length,s.push(e),
this.indexesByRole[i].push(t)}this.formulas.push(e.formula)}this.chart=e,this.id=t,
this.gemsByRole={},this.indexesByRole={},this.boundRoles={},this.boundRolesIdList=[],
this.gems=this._getGems(),this.depth=this.gems.length,this.formulas=[],this.gems.forEach(i,this);
}).add({defaultRole:null,_ensureRole:function(e){return this.gemsByRole[e]?void 0:(this.gemsByRole[e]=[],
this.indexesByRole[e]=[],!0)},configure:function(e,t){return this.configureDimensionGroups(),
this.configureReaders(e,t)},configureDimensionGroups:function(){},configureReaders:function(t,i){
var s=this.chart.options.readers,n=t;return this.cccDimList().forEach(function(t){
null!=t&&e.hasOwn(i,t)||(null!=t&&(i[t]=!0),s.push(this._createReader(t,n)),n++)},this),
n},_createReader:function(e,t){return{names:e,indexes:t}},_getGems:function(){var e=this.chart._axesGemsInfo[this.id],t=this.chart._vizHelper;
return t.completeAxisGemsMetadata&&t.completeAxisGemsMetadata(this.id,e),e},getAxisLabel:function(){
var t=e.query(this._getAxisLabelGems()).where(function(e){return e.cccDimName}).select(function(e){
return e.label}).array(),i=t.pop(),s=t.join(", ");return s&&i?this.chart._message("chartAxisTitleMultipleDimText",[s,i]):s||i;
},_getAxisLabelGems:function(){return this.gems},buildHtmlTooltip:function(e,t,i){
this.gems.forEach(this._buildGemHtmlTooltip.bind(this,e,t,i))},_buildGemHtmlTooltip:function(t,i,s,n,a){
if(n.cccDimName&&n.role!==this.chart._multiRole){var o=i.atoms[n.cccDimName];o.dimension.type.isHidden||i.isTrend&&null==o.value||t.push(e.html.escape(n.label)+": "+e.html.escape(o.label));
}},cccDimList:e.method({isAbstract:!0}),fillCellSelection:e.method({isAbstract:!0
})}),pentaho.ccc.Axis.create=function(t,i){var s;switch(i){case"row":s=pentaho.ccc.RowAxis;
break;case"column":s=pentaho.ccc.ColumnAxis;break;case"measure":s=pentaho.ccc.MeasureAxis;
break;default:throw e.error.argumentInvalid("Undefined axis value '{0}'.",[i])}return new s(t);
},e.type("pentaho.ccc.DiscreteAxis",pentaho.ccc.Axis).init(function(t,i){this.base(t,i);
var s=this.gemsByRole[this.chart._multiRole];this.hasMulti=!!s&&e.query(s).any(function(e){
return!e.isMeasureDiscrim})}).postInit(function(){this.hasMulti&&this._ensureRole(this.chart._multiRole);
}).add({_nonMultiGemFilter:function(e){return e.role!==this.chart._multiRole},cccDimList:function(){
if(!this._cccDimList){var e=this._cccDimList=new Array(this.gems.length);this.gems.forEach(function(t){
t.cccDimName=e[t.index]=this._getGemDimName(t)||null},this)}return this._cccDimList;
},_getGemDimName:function(e){var i=this.chart._rolesToCccDimensionsMap,s=i[e.role];
return"string"==typeof s?t.buildIndexedId(s,e.roleLevel):void 0},_isNullMember:function(e,t){
var i=e.atoms[t.cccDimName],s=i.value;return null==s||b.test(s)},_buildGemHtmlTooltip:function(e,t,i,s,n){
!s.cccDimName||!this._nonMultiGemFilter(s)||this.chart._hideNullMembers&&this._isNullMember(i.scene.group||t,s)||this.base.apply(this,arguments);
},_getAxisLabelGems:function(){return e.query(this.gems).where(this._nonMultiGemFilter,this);
},fillCellSelection:function(e,t,i){var s,n=[],a=[];if(this.getSelectionGems(i).each(function(e){
var i=t.atoms[e.cccDimName];n.push(e.formula),a.push(null==i.value?i.rawValue:i.value),
s=i.label}),n.length){var o=this.id;e[o]=!0,e[o+"Id"]=n,e[o+"Item"]=a,e[o+"Label"]=s;
}},getSelectionGems:function(t){return null==t&&(t=!0),e.query(this.gems).where(function(e,i){
return!(t&&!this._nonMultiGemFilter(e)||e.isMeasureDiscrim||!e.cccDimName)},this);
}}),e.type("pentaho.ccc.ColumnAxis",pentaho.ccc.DiscreteAxis).init(function(e){var t=e._rolesToCccDimensionsMap;
this.hasMeasureDiscrim=!(e.options.dataOptions.measuresInColumns||!t[this.defaultRole]&&!t[e.axes.row.defaultRole]),
this.isHiddenMeasureDiscrim=this.hasMeasureDiscrim&&!(e.axes.measure.genericMeasuresCount>1),
this.base(e,"column"),this._ensureRole(this.defaultRole),this.realDepth=this.hasMeasureDiscrim?this.depth-1:this.depth;
}).add({defaultRole:"columns",hiddenMeasureDiscrimDimName:"measureDiscrim",measureDiscrimName:null,
_getGems:function(){var e=this.base();return this.hasMeasureDiscrim&&e.push({isMeasureDiscrim:!0,
id:"__MeasureDiscrim__",label:"Measure discriminator",axis:this.id,role:this.defaultRole
}),e},_getGemDimName:function(e){if(e.isMeasureDiscrim&&this.isHiddenMeasureDiscrim)return this.measureDiscrimName=this.hiddenMeasureDiscrimDimName;
var i=this.base(e);if(e.isMeasureDiscrim){if(!i){var s=this.chart._rolesToCccDimensionsMap,n=this.chart.axes.row,a=n.defaultRole,o=s[a],r=n.gemsByRole[a].length;
i=t.buildIndexedId(o,r)}this.measureDiscrimName=i}return i},configureDimensionGroups:function(){
this.base(),this.cccDimList(),this.measureDiscrimName&&(this.chart.options.dimensions[this.measureDiscrimName]={
isHidden:!0})}}),e.type("pentaho.ccc.RowAxis",pentaho.ccc.DiscreteAxis).init(function(e){
this.base(e,"row"),this._ensureRole(this.defaultRole)}).add({defaultRole:"rows"}),
e.type("pentaho.ccc.MeasureAxis",pentaho.ccc.Axis).init(function(t){this.base(t,"measure"),
this._ensureRole(this.defaultRole),this.genericMeasuresCount=0,this.genericMeasureRoles={},
e.eachOwn(this.gemsByRole,function(e,t){0===t.indexOf("measures")&&(this.genericMeasureRoles[t]=!0,
this.genericMeasuresCount+=e.length)},this)}).add({defaultRole:"measures",_getGems:function(){
var t=this.base(),i=[];return t.forEach(function(t){var s,n=t.id;n&&(s=e.getOwn(this.chart._measuresInfo,n))&&(t.role=s.role,
i.push(t))},this),i},cccDimList:function(){return this._cccDimList||(this._cccDimList=this.chart._measureRolesInfoList.map(function(e){
return this.gemsByRole[e.id].forEach(function(t){t.cccDimName=e.cccDimName}),e.cccDimName;
},this)),this._cccDimList},_buildGemHtmlTooltip:function(t,i,s,n){var a=this.chart.axes.column;
if(!a.measureDiscrimName||!e.hasOwn(this.genericMeasureRoles,n.role)||n.id===i.atoms[a.measureDiscrimName].value){
var o=this.chart._measureRolesInfo[n.role].cccDimName;if(o){var r=i.atoms[o];if(!(r.dimension.type.isHidden||i.isTrend&&null==r.value)){
var l=e.html.escape(n.label);if(this.chart._noRoleInTooltipMeasureRoles[n.role]!==!0&&(l+=" ("+e.html.escape(n.role)+")"),
l+=": "+e.html.escape(this._getAtomLabel(r,s)),!this.chart._noPercentInTootltipForPercentGems||"PCTOF"!==n.measureType){
var c=this._getAtomPercent(r,s);null!=c&&(l+=" ("+e.html.escape(""+c)+")")}var u;if(s&&s.scene){
var h=s.scene.datums();if(h){var p=h.where(function(e){return e.isInterpolated&&e.interpDimName===o;
}).first();p&&(u=this.chart._message("chartTooltipGemInterp_"+p.interpolation))}}else i.isTrend&&(u="("+this.chart.options.trendLabel+")");
u&&(l+=" "+u),t.push(l)}}}},_getAtomLabel:function(e,t){var i;if(t&&(i=t.scene.group)){
var s=i&&i.count()>1;if(s){var n=i.dimensions(e.dimension.name);return n.format(n.value({
visible:!0}))}}return e.label},_getAtomPercent:function(e,t){if(t){var i=t.chart,s=i.data,n=e.dimension.name,a=t.panel.visualRolesOf(n,!0);
if(a&&a.some(function(e){return e.isPercent})){var o=t.scene.group,r=(o||s).dimensions(n),l=o?r.percentOverParent({
visible:!0}):r.percent(e.value);return r.type.format().percent()(l)}}},fillCellSelection:function(t,i){
t.value=e.query(this.gems).select(function(e){var t=this.chart._measureRolesInfo[e.role].cccDimName;
return t?i.atoms[t].label:void 0},this).where(e.truthy).array().join(" ~ ")}});var v;
if("vml"===i.renderer()){var x=["mouseover","mouseout","mousemove"];v=function(e){
e._cccEventsShield||(e._cccEventsShield=!0,x.forEach(function(t){T(e,t,y)}))};var y=function(e){
e||(e=window.event),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},T=function(e,t,i){
e.addEventListener?e.addEventListener(t,i,!1):e.attachEvent("on"+t,i)}}var R="#808285",A="#D1D3D4",S={
compatVersion:2,margins:0,paddings:10,plotFrameVisible:!1,format:{percent:"#,0.00%"
},multiChartMax:50,legend:!0,legendPosition:"right",legendSizeMax:"60%",legendPaddings:10,
legendItemPadding:{left:1,right:1,top:2,bottom:2},legendClickMode:"toggleSelected",
color2AxisLegendClickMode:"toggleSelected",color3AxisLegendClickMode:"toggleSelected",
axisSizeMax:"50%",axisTitleSizeMax:"20%",orthoAxisGrid:!0,continuousAxisLabelSpacingMin:1.1,
titlePosition:"top",interactive:!0,animate:!1,tooltipEnabled:!0,clickable:!0,selectable:!0,
hoverable:!1,ctrlSelectMode:!1,clearSelectionMode:"manual",valuesVisible:!1,ignoreNulls:!1,
groupedLabelSep:"~",crosstabMode:!0,isMultiValued:!0,seriesInRows:!1,dataOptions:{
measuresInColumns:!0},extensionPoints:{axisRule_strokeStyle:R,axisTicks_strokeStyle:A,
dot_lineWidth:1.5,legendArea_lineWidth:1,legendArea_strokeStyle:"#c0c0c0",legendLabel_textDecoration:null,
legendDot_fillStyle:a,legendDot_strokeStyle:a,legend2Dot_fillStyle:a,legend2Dot_strokeStyle:a
},tooltip:{delayIn:200,delayOut:80,offset:2,html:!0,gravity:"nw",fade:!1,followMouse:!0,
useCorners:!0,arrowVisible:!1,opacity:1}},M={extensionPoints:{xAxisLabel_textAngle:-Math.PI/4,
xAxisLabel_textAlign:"right",xAxisLabel_textBaseline:"top"}};e.type("pentaho.ccc.Chart").init(function(e){
this._element=e,this._elementName=e.id,v&&v(e)}).add({_options:S,_hideNullMembers:!1,
_rolesToCccDimensionsMap:{columns:"series",rows:"category",multi:"multiChart",measures:"value"
},_keyAxesIds:["column","row"],_axesIds:["column","row","measure"],_axesCreateOrderIds:["row","measure","column"],
_cccVirtualItemAxesLayout:["column","row","measure"],_noRoleInTooltipMeasureRoles:{
measures:!0},_noPercentInTootltipForPercentGems:!1,_multiRole:"multi",_discreteColorRole:"columns",
dispose:function(){this._element=null,this._chart&&this._chart.dispose&&(this._chart.dispose(),
this._chart=null)},draw:function(e,t){this._metadata=[],this._resultset=null,this._dataTable=e,
this._initOptions(t),this._processDataTable(),this._initAxes();var i=this.axes.row.depth;
this.options.dataOptions.categoriesCount=i,this._hasMultiChartColumns=this.axes.row.hasMulti||this.axes.column.hasMulti,
this._readUserOptions(this.options,t),this._readData(),this._configure(),this._prepareLayout(this.options),
this._render()},resize:function(e,t){null!=this._lastResizeTimeout&&clearTimeout(this._lastResizeTimeout),
this._lastResizeTimeout=setTimeout(function(){this._lastResizeTimeout=null,this._doResize(e,t);
}.bind(this),50)},_doResize:function(t,i){if(this._chart){var s=this._chart.options;
e.set(s,"width",t,"height",i),this._prepareLayout(s),this._chart.render(!0,!0,!1);
}},setHighlights:function(e){if(this._selections=e,!(this._ownChange||e&&0!=e.length)){
this._ownChange=!0;try{this._chart.clearSelections()}finally{this._ownChange=!1}}
},getOutputParameters:function(){var e=[];if("pvc.PieChart"==this._cccClass)e.push([this._dataTable.getColumnId(0),!0,this._dataTable.getColumnId(0)]);else for(var t=0;t<this._dataTable.getNumberOfColumns();t++)e.push([this._dataTable.getColumnId(t),!0,this._dataTable.getColumnId(t)]);
return e},_initOptions:function(t){t=this._vizOptions=$.extend({},t),this._vizHelper=cv.pentahoVisualizationHelpers[t.customChartType],
this._hasContentLink=this._vizHelper.isInteractionEnabled()&&this._vizHelper.hasContentLink(),
this._selections=t.selections;var i=this.options=e.create(this._options);e.set(i,"canvas",this._elementName,"height",t.height||400,"width",t.width||400,"dimensionGroups",{},"dimensions",{},"visualRoles",{},"readers",[],"calculations",[]);
},_message:function(e,t){return this._vizHelper.message(e,t)},_setNullInterpolationMode:function(e,t){},
_readUserOptions:function(e,t){var s=e.extensionPoints,n=t.backgroundFill;if(n&&"NONE"!==n){
var a;if("GRADIENT"===n)if(this._hasMultiChartColumns){var o=i.color(t.backgroundColor).rgb();
o=i.rgb(~~((255+o.r)/2),~~((255+o.g)/2),~~((255+o.b)/2),o.a),a=o}else a="linear-gradient(to top, "+t.backgroundColor+", "+t.backgroundColorEnd+")";else a=t.backgroundColor;
s.base_fillStyle=a}if(n=t.labelColor,void 0!==n&&(s.axisLabel_textStyle=s.axisTitleLabel_textStyle=n),
n=""+t.showLegend=="true",e.legend=n,n&&(n=t.legendColor,void 0!==n&&(s.legendLabel_textStyle=n),
n=t.legendBackgroundColor,n&&"#ffffff"!==n.toLowerCase()&&(s.legendArea_fillStyle=n),
n=t.legendPosition,n&&(e.legendPosition=n.toLowerCase()),t.legendSize&&(e.legendFont=c(t,"legend"))),
n=t.lineWidth,void 0!==n){s.line_lineWidth=+n;var r=3+6*(+n/8);s.dot_shapeSize=r*r,
s.plot2Line_lineWidth=s.line_lineWidth,s.plot2Dot_shapeSize=s.dot_shapeSize}if(n=t.maxChartsPerRow,
void 0!==n&&(e.multiChartColumnsMax=+n),n=t.emptyCellMode){switch(n){case"GAP":n="none";
break;case"ZERO":n="zero";break;case"LINEAR":n="linear"}this._setNullInterpolationMode(e,n);
}if(n=t.multiChartRangeScope){switch(n){case"GLOBAL":n="global";break;case"CELL":
n="cell"}e.numericAxisDomainScope=n}if(t.labelSize){var l=c(t,"label");if(e.axisTitleFont=e.axisFont=l,
this._hasMultiChartColumns){var p=u(t,"label"),d=h(t,"label");e.titleFont=p+2+"px "+d;
}}var m=t.sizeByNegativesMode;e.sizeAxisUseAbs="USE_ABS"===m},_processDataTable:function(){
function t(e,t){if(/\[MEASURE:(\d+)\]$/.test(t))return!1;var i=p(o,b);return g.push({
id:n,formula:n,label:o.getColumnLabel(b),axis:"row",role:i?i[0].id:"undefined",index:g.length
}),!0}function i(e){if(e){var t=p(o,b),i=e.split("~");i.forEach(function(e,i){var s=t[i];
C.push({id:s.level,formula:s.level,label:void 0,axis:"column",role:s.id,index:i});
})}}function s(t,i){var s,n=e.getOwn(_,i);n||(s=p(o,b).pop(),n={id:i,formula:void 0,
label:r(o.getColumnLabel(b))[1],axis:"measure",role:s.id,index:f.length,isUnmapped:"undefined"===s.id
},_[i]=n,f.push(n));var a=e.getOwn(h,t);a?a.measureIds.push(i):(a={index:b,encValues:t,
values:t?t.split("~"):[],measureIds:[i]},h[t]=a,u.push(a));var l=b-a.index,g=e.getOwn(d,n.role);
g?l>g.groupIndex&&(g.groupIndex=l):(g={id:s.id,cccDimName:n.isUnmapped?null:c[s.id]||e.assert("Must map to CCC all measure roles that the data table contains."),
groupIndex:l,index:b},d[n.role]=g,m.push(g))}for(var n,a,o=this._dataTable,l=o.getNumberOfColumns(),c=this._rolesToCccDimensionsMap,u=[],h={},d={},m=[],_={},f=[],g=[],C=[],b=0;l>b&&(n=o.getColumnId(b),
a=r(n),t.apply(this,a));)b++;if(l>b)for(i.call(this,a[0]);;){if(s.apply(this,a),++b>=l)break;
n=o.getColumnId(b),a=r(n)}m.sort(function(t,i){return e.compare(t.groupIndex,i.groupIndex)||e.compare(t.index,i.index);
}),m.forEach(function(e,t){e.groupIndex=t}),this._measureRolesInfo=d,this._measureRolesInfoList=m,
this._colGroups=u,this._measuresInfo=_,this._axesGemsInfo={measure:f,row:g,column:C
}},_initAxes:function(){function t(t){var s=pentaho.ccc.Axis.create(this,t);s.gems.forEach(i,this),
this.axes[t]=s;var n=s.boundRolesIdList;n&&n.forEach(function(t){!e.hasOwn(this.axisByRole,t)||e.assert("A role cannot be in more than one axis"),
this.axisByRole[t]=s},this)}function i(e){var t=e.formula,i=e.id;t&&(this.gemsMap[t]=e),
i&&t!==i&&(this.gemsMap[i]=e),"column"===e.reportAxis&&this._gemCountColumnReportAxis++,
e.isMeasureDiscrim&&(this._measureDiscrimGem=e)}this.gemsMap={},this.axisByRole={},
this.axes={},this._gemCountColumnReportAxis=0,this._measureDiscrimGem=null,this._axesCreateOrderIds.forEach(t,this);
var s=0,n={};this._cccVirtualItemAxesLayout.forEach(function(e){s=this.axes[e].configure(s,n);
},this)},_readData:function(){this._readDataCrosstab()},_readDataCrosstab:function(){
for(var e=this._dataTable,t=e.getNumberOfColumns(),i=e.getNumberOfRows(),s=0;t>s;s++)this._addCdaMetadata(e.getColumnId(s),e.getColumnLabel(s),o(e.getColumnType(s)));
for(var n=this._resultset=new Array(i),a=0;i>a;a++){var r=new Array(t);for(s=0;t>s;s++)r[s]=this._getTableCell(a,s);
n[a]=r}},_configure:function(){var e=this.options,t=this._vizOptions;t.controller.domNode.style.overflow="hidden";
var i=this._getColorScaleKind();i&&this._configureColor(i),(this.options.legend=this._showLegend())&&this._configureLegend(),
this._hasMultiChartColumns&&this._configureMultiChart(),this._configureTrends(),this._configureSorts(),
this._configureFormats(),e.axisFont=l(e.axisFont,12),e.axisTitleFont=l(e.axisTitleFont,12),
this._vizHelper.isInteractionEnabled()?(e.tooltipEnabled&&this._configureTooltip(),
(e.selectable=this._canSelect())&&this._configureSelection(),this._configureDoubleClick()):e.interactive=!1;
},_getColorScaleKind:function(){return"discrete"},_configureColor:function(e){var t=this.options,i=this._vizOptions;
switch(e){case"discrete":t.colors=this._getDiscreteColorScale();break;case"continuous":
t.colorScaleType=i.colorScaleType,t.colors=i.colors}},_getDiscreteColorScale:function(){
var e=this._vizOptions.memberPalette,t=e&&this._getDiscreteColorScaleCore(e);return t||this._getDefaultDiscreteColorScale();
},_getDefaultDiscreteColorScale:function(){return this._vizOptions.palette.colors.slice();
},_getDiscreteColorScaleCore:function(t){var s=this._discreteColorRole;if(s){var n,a=this.axisByRole[s],o=a?a.gemsByRole[s].filter(function(e){
return!e.isMeasureDiscrim}):[],r=o.length;if(n="pvc.PieChart"==this._cccClass?0:this.axes.measure.genericMeasuresCount,
r>0||n>0){var l,c="pvc.SunburstChart"===this._cccClass;if(1>=n){if(!(r>0)){l=t["[Measures].[MeasuresLevel]"];
var u=l&&l[this.axes.measure.gems[0].id];return u?i.colors([u]):null}if(c)for(var h in o){
var p=t[o[h].formula];if(p){l||(l={});for(var d in p)l[d]=p[d]}}else l=t[o[r-1].formula];
}else l=t["[Measures].[MeasuresLevel]"];if(l||c){for(var m in l)l.hasOwnProperty(m)&&(l[m]=i.color(l[m]));
var _,f=i.colors(this._getDefaultDiscreteColorScale());return _=c?function(){function t(t){
if(t){var i=t.split("~"),s=i.length-1,n=i[s];return e.getOwn(l,n)||(s?void 0:f(n));
}}return t.available=function(t){if(t){var i=t.split("~"),s=i.length-1,n=i[s];return!s||e.getOwn(l,n);
}return!1},t}:function(){return function(e){if(e){var t=e.split("~"),i=t[t.length-1];
return l[i]||f(i)}}},function(){return e.copy(_(),f)}}}}},_configureTrends:function(){
var e=this.options,t=this._vizOptions,i=(this._supportsTrends?t.trendType:null)||"none";
switch(i){case"none":case"linear":break;default:i="none"}if(e.trendType=i,"none"!==i){
var s=t.trendName;s||(s=this._message("dropZoneLabels_TREND_NAME_"+i.toUpperCase())),
e.trendLabel=s;var n=t.trendLineWidth;if(void 0!==n){var a=e.extensionPoints;a.trendLine_lineWidth=+n;
var o=3+6*(+n/8);a.trendDot_shapeSize=o*o}}},_configureSorts:function(){var e=this._vizOptions.sliceOrder;
e&&(this.options.sliceOrder=e)},_configureFormats:function(){var t=this._vizOptions.formatInfo;
if(t){var i={currency:t.currencySymbol,decimal:t.decimalPlaceholder,group:t.thousandSeparator
};this.options.format={number:{style:i},percent:{style:i,mask:this.options.format.percent
}};var s=this.options.dimensions,n=this.axes.measure,a=n.gemsByRole;e.eachOwn(n.boundRoles,function(e,i){
var n=a[i][0],o=t[n.id];if(o){var r=n.cccDimName,l=s[r]||(s[r]={});l.format=o}})}
},_configureMultiChart:function(){var e=this.options,t=this._vizOptions.controller.domNode.style;
t.overflowX="hidden",t.overflowY="auto";var i=l(e.titleFont,12);i&&!/black|(\bbold\b)/i.test(i)&&(i="bold "+i),
e.smallTitleFont=i;var s=this._vizOptions.multiChartOverflow;s&&(e.multiChartOverflow=s.toLowerCase());
},_configureTooltip:function(){var e=this;this.options.tooltipFormat=function(t){
return e._getTooltipText(t.datum,this)}},_canSelect:function(){return this.options.selectable?this._gemCountColumnReportAxis>=2?!1:!0:!1;
},_configureSelection:function(){var e=this;this.options.userSelectionAction=function(t){
return e._onUserSelection(t)},this.options.selectionChangedAction=function(t){e._onSelectionChanged(t);
}},_configureDoubleClick:function(){var e=this;this.options.axisDoubleClickAction=this.options.doubleClickAction=function(t){
e._onDoubleClick(t)}},_showLegend:function(){if(!this.options.legend)return!1;if(this.axes.measure.genericMeasuresCount>1)return!0;
var e=this.axes.column,t=this._rolesToCccDimensionsMap[e.defaultRole];return!t||e.realDepth>0?!0:!1;
},_configureLegend:function(){var e=this.options;e.legendFont=l(e.legendFont,10);var i=e.legendPosition,s="top"===i||"bottom"===i;
if(this._hasMultiChartColumns&&!s){e.legendAlignTo="page-middle",e.legendKeepInBounds=!0;
var n=e.legendMargins;if(n)"object"!=typeof n&&(n=e.legendMargins={all:n});else{n=e.legendMargins={};
var a=t.BasePanel.oppositeAnchor[i];n[a]=5}n.top=20}"legendAlign"in e||(s?e.legendAlign="center":e.legendAlign="middle");
},_parseDisplayUnits:function(e){if(e){var t=e.match(/^UNITS_(\d+)$/);if(t){var i=+t[1];
if(i>0)return Math.pow(10,i)}}return 1},_prepareLayout:function(e){this._hasMultiChartColumns&&"batik"!==i.renderer()&&(e.width-=17);
},_render:function(){for(;this._element.firstChild;)this._element.removeChild(this._element.firstChild);
var i=e.getPath({pvc:t},this._cccClass);this._chart=new i(this.options),this._chart.setData({
metadata:this._metadata,resultset:this._resultset});var s="page"===this.options.multiChartOverflow;
s?this._chart.renderPages():this._chart.render()},_getTooltipText:function(e,t){var i,s=[];
if(this._axesIds.forEach(function(i){this.axes[i].buildHtmlTooltip(s,e,t)},this),
!e.isVirtual){var n=this._getDoubleClickSelection(t.scene);i=this._vizHelper.getDoubleClickTooltip(n),
i&&s.push(i)}var a=this._vizOptions.controller.highlights,o=a&&a.length;if(o){var r=1===o?"chartTooltipFooterSelectedSingle":"chartTooltipFooterSelectedMany";
i=this._message(r,[o]),s.push(i)}return s.join("<br />")},_onUserSelection:function(e){
return this._processSelection(e)},_getSelectionKey:function(t){var i=t.__cccKey;if(!i){
var s=[t.type],n=e.array.append;t.columnId&&(n(s,t.columnId),n(s,t.columnItem)),t.rowId&&(n(s,t.rowId),
n(s,t.rowItem)),i=t.__cccKey=s.join("||")}return i},_doesSharedSeriesSelection:function(){
return 1===this._gemCountColumnReportAxis},_onSelectionChanged:function(e){if(this.options.selectable){
var t=this._selectionExcludesMultiGems(),i=[],s={};this._doesSharedSeriesSelection()?e.forEach(function(e){
if(!e.isVirtual){var n={type:"column"};this.axes.column.fillCellSelection(n,e,t);var a=this._getSelectionKey(n),o=s[a];
o?o.__cccDatums.push(e):(n.__cccDatums=[e],s[a]=n,i.push(n))}},this):e.forEach(function(e){
if(!e.isVirtual){var n=this._complexToCellSelection(e,t),a=this._getSelectionKey(n),o=s[a];
o||(n.__cccDatums=e,s[a]=n,i.push(n))}},this),i=this._limitSelection(i),this._ownChange=!0;
try{pentaho.events.trigger(this,"select",{source:this,selections:i,selectionMode:"REPLACE"
})}finally{this._ownChange=!1}}},_limitSelection:function(i){var s=this._vizOptions["filter.selection.max.count"]||200,n=i,a=i.length,o=a-s;
if(o>0){var r=[];n=[];for(var l=0;a>l;l++){var c=i[l],u=!0;if(o)if(this._previousSelectionKeys){
var h=this._getSelectionKey(c);this._previousSelectionKeys[h]||(u=!1)}else l>=s&&(u=!1);
if(u)n.push(c);else{var p=c.__cccDatums;p&&(e.array.is(p)?e.array.append(r,p):r.push(p)),
o--}}t.data.Data.setSelected(r,!1),this._chart.updateSelections(),this._vizHelper.showConfirm(["infoExceededMaxSelectionItems",s],"SELECT_ITEM_LIMIT_REACHED");
}return this._previousSelectionKeys=e.query(n).object({name:function(e){return this._getSelectionKey(e);
},value:e.retTrue,context:this}),n},_selectionExcludesMultiGems:function(){return!0;
},_processSelection:function(e){function t(e){function t(e){a[e]=r[e]}if(!e.isNull){
e.isTrend&&s.push(e);var a={},r=e.atoms;o&&o.forEach(t),n&&n.forEach(t),i.push(a);
}}var i,s=[];if(e.length){var n,a=this._selectionExcludesMultiGems(),o=this.axes.column.getSelectionGems(a).select(function(e){
return e.cccDimName}).array();this._gemCountColumnReportAxis||(n=this.axes.row.getSelectionGems(a).select(function(e){
return e.cccDimName}).array()),o.length||n&&n.length?(i=[],e.forEach(t),this._chart.data.datums(i,{
visible:!0}).each(function(e){s.push(e)}),e=s):e=[]}return e},_getDoubleClickSelection:function(e){
var t=e.group||e.datum;return t?this._complexToCellSelection(t,!1):void 0},_onDoubleClick:function(e){
var t=this._getDoubleClickSelection(e);return t&&pentaho.events.trigger(this,"doubleclick",{
source:this,selections:[t]}),!0},_complexToCellSelection:function(e,t){var i={type:"cell"
};return this._axesIds.forEach(function(s){this.axes[s].fillCellSelection(i,e,t)},this),
i},_addCdaMetadata:function(e,t,i){this._metadata.push({colIndex:this._metadata.length,
colName:e,colLabel:t,colType:i})},_getTableCell:function(e,t){var i=this._dataTable._getCell(e,t);
if(!i)return null;var s=i.v;return null==s||"-"===s?null:{v:s,f:i.f}},_getTableValue:function(e,t){
var i=this._getTableCell(e,t);return i?i.v:ceff.f}}),e.type("pentaho.ccc.CartesianChart",pentaho.ccc.Chart).add({
_options:{orientation:"vertical"},_configure:function(){this.base(),this._configureDisplayUnits(),
this._showAxisTitle("base")&&this._configureAxisTitle("base",this._getBaseAxisTitle()),
this._showAxisTitle("ortho")&&this._configureAxisTitle("ortho",this._getOrthoAxisTitle());
},_showAxisTitle:e.fun.constant(!0),_getOrthoAxisTitle:e.noop,_getBaseAxisTitle:e.noop,
_configureAxisTitle:function(t,i){var s=this._cartesianAxesDisplayUnitsText[t];if(i=e.string.join(" - ",i,s)){
var n=this.options;n[t+"AxisTitle"]=i}},_getMeasureRoleTitle:function(e){var t,i="",s=this.axes.measure;
if(e){var n=s.gemsByRole[e];1===n.length&&(t=n[0])}else 1===this.axes.measure.genericMeasuresCount&&(t=s.gemsByRole[s.defaultRole][0]);
return t&&(i+=t.label),i},_configureAxisRange:function(e,t){var i=this._vizOptions,s=e?"":"Secondary";
if("true"!==i["autoRange"+s]){var n=i["valueAxisLowerLimit"+s];null!=n&&(this.options[t+"AxisFixedMin"]=n,
this.options[t+"AxisOriginIsZero"]=!1),n=i["valueAxisUpperLimit"+s],null!=n&&(this.options[t+"AxisFixedMax"]=n);
}},_cartesianAxesDisplayUnitsText:null,_configureDisplayUnits:function(){this._cartesianAxesDisplayUnitsText={};
},_configureAxisDisplayUnits:function(e,t,i){i||"ortho"==t||(this.options[t+"AxisTickExponentMin"]=0);
var s,n=this._vizOptions["displayUnits"+(e?"":"Secondary")],a=this._parseDisplayUnits(n);
a>1&&(s=this._message("dlgChartOption_"+n)),this._cartesianAxesDisplayUnitsText[t]=s||"";
}}),e.type("pentaho.ccc.CategoricalContinuousChart",pentaho.ccc.CartesianChart).add({
_options:{panelSizeRatio:.8,dataOptions:{measuresInColumns:!1}},_showAxisTitle:function(e){
return!this._hasMultiChartColumns||"ortho"===e},_getOrthoAxisTitle:function(){return this._getMeasureRoleTitle();
},_getBaseAxisTitle:function(){return this.axes.row.getAxisLabel()},_configure:function(){
this.base(),this._configureAxisRange(!0,"ortho"),"vertical"===this.options.orientation?e.mixin(this.options,M):this.options.xAxisPosition="top";
},_configureDisplayUnits:function(){this.base(),this._configureAxisDisplayUnits(!0,"ortho");
}}),e.type("pentaho.ccc.BarChartAbstract",pentaho.ccc.CategoricalContinuousChart).add({
_cccClass:"pvc.BarChart",_configure:function(){this.base();var e=this.options;"vertical"!==e.orientation&&(e.visualRoles.category={
isReversed:!0}),f.call(this)},_readUserOptions:function(e,t){this.base(e,t),e.valuesFont=l(c(t,"label")),
e.extensionPoints.label_textStyle=t.labelColor}}),e.type("pentaho.ccc.BarChart",pentaho.ccc.BarChartAbstract).add({
_supportsTrends:!0}),e.type("pentaho.ccc.HorizontalBarChart",pentaho.ccc.BarChartAbstract).add({
_options:{orientation:"horizontal"}}),e.type("pentaho.ccc.StackedBarChart",pentaho.ccc.BarChartAbstract).add({
_options:{stacked:!0}}),e.type("pentaho.ccc.HorizontalStackedBarChart",pentaho.ccc.BarChartAbstract).add({
_options:{orientation:"horizontal",stacked:!0}}),e.type("pentaho.ccc.NormalizedBarChartAbstract",pentaho.ccc.BarChartAbstract).add({
_cccClass:"pvc.NormalizedBarChart",_configure:function(){this.base(),this.options.orthoAxisTickFormatter=function(e){
return e+"%"}}}),e.type("pentaho.ccc.NormalizedBarChart",pentaho.ccc.NormalizedBarChartAbstract),
e.type("pentaho.ccc.HorizontalNormalizedBarChart",pentaho.ccc.NormalizedBarChartAbstract).add({
_options:{orientation:"horizontal"}}),e.type("pentaho.ccc.BarLineChart",pentaho.ccc.BarChartAbstract).add({
_rolesToCccDimensionsMap:{measuresLine:"value"},_options:{plot2:!0,secondAxisIndependentScale:!1,
secondAxisSeriesIndexes:null},_noRoleInTooltipMeasureRoles:{measures:!0,measuresLine:!0
},_setNullInterpolationMode:function(e,t){e.plot2NullInterpolationMode=t},_initAxes:function(){
this.base(),this._measureDiscrimGem||e.assert("Must exist to distinguish measures.");
var t=this._measureDiscrimGem.cccDimName,i=this.axes.measure,s=i.gemsByRole[i.defaultRole],n=e.query(s).uniqueIndex(function(e){
return e.id});this.options.calculations.push({names:"dataPart",calculation:function(i,s){
var a=i.atoms[t].value;s.dataPart=e.hasOwn(n,a)?"0":"1"}})},_readUserOptions:function(e,t){
this.base(e,t);var i=t.shape;i&&"none"===i?e.pointDotsVisible=!1:(e.pointDotsVisible=!0,
e.extensionPoints.pointDot_shape=i),e.plot2ValuesFont=l(c(t,"label")),e.extensionPoints.plot2Label_textStyle=t.labelColor,
d.call(this)},_configureDisplayUnits:function(){this.base(),this._configureAxisDisplayUnits(!1,"ortho2");
},_configure:function(){this.base(),this._configureAxisRange(!1,"ortho2"),this._configureAxisTitle("ortho2",""),
this.options.plot2OrthoAxis=2,g.call(this)}}),e.type("pentaho.ccc.WaterfallChart",pentaho.ccc.CategoricalContinuousChart).add({
_cccClass:"pvc.WaterfallChart"}),e.type("pentaho.ccc.LineChart",pentaho.ccc.CategoricalContinuousChart).add({
_cccClass:"pvc.LineChart",_supportsTrends:!0,_options:{axisOffset:0,tooltipOffset:15
},_readUserOptions:function(e,t){this.base(e,t);var i=t.shape;i&&"none"===i?e.dotsVisible=!1:(e.dotsVisible=!0,
e.extensionPoints.dot_shape=i),e.valuesFont=l(c(t,"label")),e.extensionPoints.label_textStyle=t.labelColor,
_.call(this)},_setNullInterpolationMode:function(e,t){e.nullInterpolationMode=t},
_configureLegend:function(){this.base();var e=this.options,t=e.extensionPoints,i=t.dot_shapeSize;
if(null!=i){var s=Math.sqrt(i);e.legendMarkerSize=Math.max(15,2*(s+3))}}}),e.type("pentaho.ccc.StackedAreaChart",pentaho.ccc.CategoricalContinuousChart).add({
_cccClass:"pvc.StackedAreaChart",_options:{axisOffset:0,tooltipOffset:15},_setNullInterpolationMode:function(e,t){
e.nullInterpolationMode=t},_readUserOptions:function(e,t){this.base(e,t),e.valuesFont=l(c(t,"label")),
e.extensionPoints.label_textStyle=t.labelColor,_.call(this)}}),e.type("pentaho.ccc.BoxplotChart",pentaho.ccc.CategoricalContinuousChart).add({
_cccClass:"pvc.BoxplotChart",_rolesToCccDimensionsMap:{columns:null,multi:"multiChart",
measures:"median",percentil25:"percentil25",percentil75:"percentil75",percentil5:"percentil5",
percentil95:"percentil95"},_options:{extensionPoints:{boxRuleWhisker_strokeDasharray:"- "
}},_readData:function(){this.base(),e.set(this.options.dataOptions,"categoriesCount",this.axes.row.gemsByRole.rows.length);
}}),e.type("pentaho.ccc.HeatGridChart",pentaho.ccc.CartesianChart).add({_cccClass:"pvc.HeatGridChart",
_rolesToCccDimensionsMap:{multi:null,color:"value",size:"value2"},_options:{valuesVisible:!1,
useShapes:!0,shape:"square",xAxisSize:30,yAxisSize:50,axisComposite:!0,orthoAxisGrid:!1,
colorScaleType:"linear",colorNormByCategory:!1},_configure:function(){this.base(),
this.options.shape=this._vizOptions.shape,_.call(this)},_readUserOptions:function(e,t){
this.base(e,t),e.valuesFont=l(c(t,"label")),e.extensionPoints.label_textStyle=t.labelColor;
},_getColorScaleKind:function(){return"continuous"},_prepareLayout:function(e){this.base(e);
var t=this.axes.measure.depth,i=this.axes.row.depth,s=this.axes.column.depth,n=Math.max(1,this._dataTable.getNumberOfRows()-1),a=this._dataTable.getNumberOfColumns()-i;
t>0&&(a/=t);var o,r,l=e.width,c=e.height,u=l/c,h=n/a,p=300,d=70,m=200,_=.35,f=Math.min(p,i*d),g=Math.min(p,s*d),C=Math.min(p,i*m,c*_),b=Math.min(p,s*m,l*_);
if(h>u){var v=c-l/h;r=g,o=Math.min(v,C),o=Math.max(o,f)}else if(u>h){var x=l-c*h;o=f,
r=Math.min(x,b),r=Math.max(r,g)}e.xAxisSize=o,e.yAxisSize=r}}),e.type("pentaho.ccc.MetricDotChart",pentaho.ccc.CartesianChart).add({
_cccClass:"pvc.MetricDotChart",_supportsTrends:!0,_options:{axisGrid:!0,sizeAxisUseAbs:!1,
sizeAxisOriginIsZero:!0,sizeAxisRatio:.2,sizeAxisRatioTo:"height",autoPaddingByDotSize:!1
},_rolesToCccDimensionsMap:{columns:null,color:"color",multi:"multiChart",measures:null,
x:"x",y:"y",size:"size"},_discreteColorRole:"color",_noRoleInTooltipMeasureRoles:{
x:!0,y:!0,measures:!1},_getColorScaleKind:function(){return this.axes.measure.boundRoles.color?"continuous":this.axes.column.boundRoles.color?"discrete":void 0;
},_configure:function(){this.base();var e=this.options;this._configureAxisRange(!0,"base"),
this._configureAxisRange(!1,"ortho"),this.axes.measure.boundRoles.size?e.axisOffset=1.1*e.sizeAxisRatio/2:e.axisOffset=0;
},_configureColor:function(e){this.base(e);var t=this.options;"discrete"===e&&(t.dimensionGroups.color={
valueType:String})},_showLegend:function(){return this.options.legend&&this.axes.column.boundRoles.color?this._colGroups.length>1:this.options.legend;
},_getOrthoAxisTitle:function(){return this._getMeasureRoleTitle("y")},_getBaseAxisTitle:function(){
return this._getMeasureRoleTitle("x")},_configureDisplayUnits:function(){this.base(),
this._configureAxisDisplayUnits(!0,"base",!0),this._configureAxisDisplayUnits(!1,"ortho",!0);
},_readUserOptions:function(e,t){this.base(e,t),e.valuesFont=l(c(t,"label")),e.extensionPoints.label_textStyle=t.labelColor,
_.call(this)}}),e.type("pentaho.ccc.PieChart",pentaho.ccc.Chart).add({_cccClass:"pvc.PieChart",
_noPercentInTootltipForPercentGems:!0,_rolesToCccDimensionsMap:{columns:"multiChart",
multi:null},_options:{legendShape:"circle",titlePosition:"bottom",dataOptions:{measuresInColumns:!1
},extensionPoints:{slice_strokeStyle:"white",slice_lineWidth:.8}},_multiRole:"columns",
_discreteColorRole:"rows",_configure:function(){this.base(),this.options.valuesVisible&&this._configureValuesMask();
},_showLegend:function(){return this.options.legend&&this.axes.row.depth>0},_readUserOptions:function(e,t){
this.base(e,t),e.valuesFont=l(c(t,"label")),e.extensionPoints.label_textStyle=t.labelColor,
C.call(this)},_configureMultiChart:function(){this.base(),this.options.legendSizeMax="50%";
},_configureValuesMask:function(){var e=this.axes.column,t=e.measureDiscrimName;if(t){
var i=this.gemsMap;this.options.pie={scenes:{category:{sliceLabelMask:function(){
var e,s,n=this.atoms[t];return n&&(e=n.value)&&(s=i[e])&&"PCTOF"===s.measureType?"{value}":"{value} ({value.percent})";
}}}}}},_selectionExcludesMultiGems:e.fun.constant(!1)}),e.type("pentaho.ccc.TreemapChart",pentaho.ccc.Chart).add({
_cccClass:"pvc.TreemapChart",_rolesToCccDimensionsMap:{columns:null,measures:null,
size:"size"},_options:{valuesVisible:!0},_discreteColorRole:"rows",_configure:function(){
this.base(),this.options.rootCategoryLabel=this._message("chartTreeMapRootCategoryLabel");
},_getDiscreteColorScale:function(){return this._getDefaultDiscreteColorScale()},
_readUserOptions:function(e,t){this.base(e,t),e.valuesFont=l(null,u(t,"label"))}}),
e.type("pentaho.ccc.BulletChart",pentaho.ccc.Chart).add({_cccClass:"pvc.BulletChart",
_rolesToCccDimensionsMap:{multi:null,columns:"subTitle",rows:"title"},_options:{valuesVisible:!0,
valuesAnchor:"right",titlePosition:"top",titleSize:25,bulletTitle:"Test for title",
bulletSubtitle:"Test for subtitle",bulletMeasures:[],bulletMarkers:["7500"],bulletRanges:["3000","6500","9000"],
bulletMargin:50,panelSizeRatio:.8,extensionPoints:{bulletRuleLabel_font:"7pt sans"
}},_configure:function(){this.base()},_prepareLayout:function(e){this.base(e);var t=this._vizOptions,i="vertical"===e.orientation;
this._resultset.length>20?(e.bulletSize=10,e.bulletSpacing=i?60:20):this._resultset.length>10?(e.bulletSize=15,
e.bulletSpacing=i?80:30):(e.bulletSize=20,e.bulletSpacing=i?120:50);var s=(2+e.bulletSize+e.bulletSpacing)*this._resultset.length;
i?s>e.width&&(t.controller.domNode.style.overflowX="auto",t.controller.domNode.style.overflowY="hidden",
e.width=s):s>e.height&&(t.controller.domNode.style.overflowY="auto",t.controller.domNode.style.overflowX="hidden",
e.height=s)}}),e.type("pentaho.ccc.SunburstChart",pentaho.ccc.Chart).add({_cccClass:"pvc.SunburstChart",
_rolesToCccDimensionsMap:{columns:null,measures:null,size:"size"},_options:{valuesVisible:!0,
valuesOverflow:"trim",valuesOptimizeLegibility:!1,colorMode:"fan"},_discreteColorRole:"rows",
_formatSize:function(e,t){return e.label},_readUserOptions:function(e,t){this.base(e,t);
var s=e.extensionPoints;if(this._hideNullMembers=t.emptySlicesHidden,e.valuesFont=l(c(t,"label")),
t.emptySlicesHidden&&(s.slice_visible=function(e){var t=e.vars.category.value;return!!t&&!b.test(t);
}),s.label_textStyle=t.labelColor,"none"!=t.labelsOption&&this.axes.measure.boundRoles.size){
s.label_textBaseline="bottom",s.label_textMargin=2,s.label_visible=function(e){var t,s=this.pvMark,n=e.innerRadius,a=n,o=e.outerRadius,r=s.textMargin(),l=e.angle,c=i.Text.measure(e.vars.size.label,s.font());
if(l<Math.PI){var u=.85*c.height,h=(s.textBaseline(),2*(u+3*r/2));a=Math.max(a,h/(2*Math.tan(l/2)));
}return t=o-r-a,0>=t||c.width>t-r?!1:null};var n=this;s.label_add=function(){return(new i.Label).visible(function(e){
var t=this.proto;return t.visible()}).text(function(e){var t=this.proto;return t.text()?n._formatSize(e.vars.size,e.firstAtoms.size.dimension):"";
}).textBaseline("top")}}},_configure:function(){this.base(),this.options.rootCategoryLabel=this._message("chartSunburstRootCategoryLabel"),
this._configureDisplayUnits()},_configureDisplayUnits:function(){var e=this._parseDisplayUnits(this._vizOptions.displayUnits);
if(e>1){var t=this.options.dimensions,i=t.size||(t.size={});i.converter=function(t){
return null==t||isNaN(t)?t:t*e},this._formatSize=function(t,i){var s=t.value;return null==s?"":i.format(s/e);
}}else delete this._formatSize}});var D={};D._readDataBullet=function(){var e=this._dataTable,t=e.getNumberOfRows(),i=this._otherDtColIndexes,s=this._otherDtColIndexes.length,n=this._vizOptions;
if(this.options.seriesInRows=!0,this._addCdaMetadata("Category","Category","STRING"),
this._addCdaMetadata("Series","Series","STRING"),this._addCdaMetadata("Value","Value","NUMERIC"),
this._addCdaMetadata("Marker","Marker","NUMERIC"),n.bulletRanges)for(var a=0,o=n.bulletRanges.length;o>a;a++)this._addCdaMetadata("Range"+a,"Range "+a,"NUMERIC");
for(var r=this.axes.measure.depth,l=0;t>l;l++)for(var c=this._aggregateRowAxisForTableRow(l),u=0;s>u;u+=r)for(var h=0;r>h;h+=2){
var p=u+h,d=p+1,m=i[p],_=e.getColumnId(m).split("~");_.pop();var f=[c,_.join("~"),this._getTableValue(l,m),r>h+1?this._getTableValue(l,i[d]):n.bulletMarkers[0]],g=n.bulletRanges;
g&&g.forEach(function(e){f.push(e)}),this._resultset.push(f)}},D._aggregateRowAxisForTableRow=function(e){
var t=this._rowNormalDtColIndexes.map(function(t){return this._getTableValue(e,t);
},this);return t.join("~")};i.dict(["action","autoRange","backgroundColor","backgroundColorEnd","backgroundFill","chartType","controller","customChartType","displayUnits","maxChartsPerRow","emptyCellsMode","labelSize","labelStyle","labelFontFamily","labelColor","legendBackgroundColor","legendColor","legendFontFamily","legendStyle","legendSize","lineShape","maxValues","metrics","palette","selections","vizApiVersion"],e.retTrue);
});