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

define("common-data/controller",["pentaho/common/Messages","common-data/oop","common-data/app"],function(o,n,e){
pentaho="undefined"==typeof pentaho?{}:pentaho,pentaho.pda=pentaho.pda||{},pentaho.pda.SOURCE_TYPE_OLAP="olap",
pentaho.pda.SOURCE_TYPE_MQL="mql",pentaho.pda.SOURCE_TYPE_SQL="sql",pentaho.pda.SOURCE_TYPE_ETL="etl",
pentaho.pda.SOURCE_TYPE_CDA="cda",pentaho.pda.modelaccess={},pentaho.common.Messages.addUrlBundle("dataapi",CONTEXT_PATH+"i18n?plugin=common-ui&name=resources/web/dataapi/nls/messages"),
pentaho.pda.app=function(){pentaho.app.call(this),this.sources=[],this.attempts=0;
},inheritPrototype(pentaho.pda.app,pentaho.app),pentaho.pda.app.prototype.discoverSources=function(o,n){
var e=this.moduleData,t=this,a=[];for(var p in e)if(this.moduleData.hasOwnProperty(p)){
var T=e[p].instance;if(!(T instanceof pentaho.pda.Handler))throw new Error(e[p].name+" is not an instanceof pentaho.pda.Handler");
T.getSources(function(n){t.addSource(n),a.push(n),o&&o(n)},n)}return a},pentaho.pda.app.prototype.getSources=function(o,n){
var e=this,t=e.doGetSources(o,n);if(n.filter&&(!t||t instanceof Array&&0===t.length)){
var a=n.filter.value,p=a.split(":");if(2===p.length){var T=p[0],E=p[1],h=T+".xmi:"+E;
n.filter.value=h,t=e.doGetSources(o,n)}}return t},pentaho.pda.app.prototype.doGetSources=function(o,n){
var e,t,a,p=[];n=n||{};var T=n.filter;if(this.sources.length>0){if(null!=T){p=[];for(var e=0;e<this.sources.length;e++){
a=this.sources[e];try{a[T.property]==T.value&&(p.push(a),o&&o(a))}catch(E){}}return 1==p.length?p[0]:p;
}for(var e=0,t=this.sources.length;t>e;e++)o&&o(this.sources[e]);return 1==this.sources.length?this.sources[0]:this.sources;
}return this.discoverSources(function(n){if(null==T)p.push(n),o&&o(n);else try{n[T.property]==T.value&&(p.push(n),
o&&o(n))}catch(e){}},n),1==p.length?p[0]:p},pentaho.pda.app.prototype.addSource=function(o){
this.sources.push(o)},pentaho.pda.app.prototype.sortData=function(o,n,e){if(-1!=n){
var t={metadata:o.metadata,resultset:[]};try{pentaho.pda.app.prototype.sortedColumnIdx=n,
pentaho.pda.app.prototype.sortDirection=e,t.resultset=o.resultset.sort(pentaho.pda.app.prototype.compareRows);
}catch(a){alert(a.message)}return t}},pentaho.pda.app.prototype.sortedColumnIdx=-1,
pentaho.pda.app.prototype.sortDirection=null,pentaho.pda.app.prototype.compareRows=function(o,n){
return o[pentaho.pda.app.prototype.sortedColumnIdx]==n[pentaho.pda.app.prototype.sortedColumnIdx]?0:pentaho.pda.app.prototype.sortDirection==pentaho.pda.Column.SORT_TYPES.ASCENDING?o[pentaho.pda.app.prototype.sortedColumnIdx]>n[pentaho.pda.app.prototype.sortedColumnIdx]?1:-1:o[pentaho.pda.app.prototype.sortedColumnIdx]<n[pentaho.pda.app.prototype.sortedColumnIdx]?1:-1;
},pentaho.pda.Handler=function(o){this.sandbox=o,this.sources=[]},pentaho.pda.Handler.prototype.init=function(){},
pentaho.pda.model=function(o){this.id=o.id||1,this.name=o.name||"unknown",this.type=o.type||"unknown",
this.description=o.description||"",this.elements=o.elements||[],this.capabilities=o.capabilities||{},
this.categories=[]},pentaho.pda.model.prototype.getCategories=function(){return this.categories;
},pentaho.pda.model.prototype.getNodeText=function(o,n){for(var e=0;e<o.childNodes.length;e++)if(o.childNodes[e].nodeName==n)return this.getText(o.childNodes[e]);
return null},pentaho.pda.model.prototype.getNodeTextOfChild=function(o,n,e){for(var t=0;t<o.childNodes.length;t++)if(o.childNodes[t].nodeName==n)return this.getNodeText(o.childNodes[t],e);
return null},pentaho.pda.model.prototype.getText=function(o){return o&&o.firstChild?"undefined"!=typeof o.textContent?o.textContent:o.firstChild.nodeValue:null;
},pentaho.pda.model.prototype.hasCapability=function(o){var n=this.capabilities[o];
return"undefined"==typeof n?!1:!0},pentaho.pda.model.prototype.getCapabilityValue=function(o){
return this.capabilities[o]},pentaho.pda.model.prototype.addCapability=function(o,n){
"undefined"==typeof n&&(n=!0),this.capabilities[o]=n},pentaho.pda.model.prototype.getCapabilityNames=function(){
var o=new Array;for(x in this.capabilities)o.push(x);return o},pentaho.pda.model.prototype.addElement=function(o){
this.elements.push(o)},pentaho.pda.model.prototype.getAllElements=function(){return this.elements;
},pentaho.pda.model.prototype.getElementsOfType=function(o){return this.getElementsOfTypes(new Array(o));
},pentaho.pda.model.prototype.getElementsOfTypes=function(o){for(var n=new Array,e=0;e<this.elements.length;e++)for(var t=0;t<o.length;t++)this.elements[e].elementType==o[t]&&n.push(this.elements[e]);
return n},pentaho.pda.model.prototype.getElementsOfDataType=function(o){return this.getElementsOfDataTypes(new Array(o));
},pentaho.pda.model.prototype.getElementsOfDataTypes=function(o){for(var n=new Array,e=0;e<this.elements.length;e++)for(var t=0;t<o.length;t++)this.elements[e].dataType==o[t]&&n.push(this.elements[e]);
return n},pentaho.pda.model.prototype.getQueryElementsByFieldType=function(o){var n=new Array;
return n.push(o),this.getColumnsByFieldTypes(n,!1)},pentaho.pda.model.prototype.getColumnsByFieldType=function(o){
var n=new Array;return n.push(o),this.getColumnsByFieldTypes(n,!0)},pentaho.pda.model.prototype.getColumnsByFieldTypes=function(o,n){
var e=this.getAllColumns(),t=new Array;if(!o)return e;for(var a=0;a<e.length;a++)for(var p=0;p<o.length;p++)e[a].elementType==o[p]&&(e[a].isQueryElement||n)&&t.push(e[a]);
return t},pentaho.pda.model.prototype.getQueryElementsByDataType=function(o){var n=new Array;
return n.push(o),this.getColumnsByDataTypes(n,!1)},pentaho.pda.model.prototype.getColumnsByDataType=function(o){
var n=new Array;return n.push(o),this.getColumnsByDataTypes(n,!0)},pentaho.pda.model.prototype.getColumnsByDataTypes=function(o,n){
var e=this.getAllColumns(),t=new Array;if(!o)return e;for(var a=0;a<e.length;a++)for(var p=0;p<o.length;p++)e[a].dataType==o[p]&&(e[a].isQueryElement||n)&&t.push(e[a]);
return t},pentaho.pda.model.prototype.getColumnById=function(o){for(var n=this.getAllColumns(),e=0;e<n.length;e++)if(n[e].id==o)return n[e];
return null},pentaho.pda.model.prototype.sortColumnsByName=function(o){return o.sort(function(o,n){
return o.name==n.name?0:o.name>n.name?1:-1})},pentaho.pda.model.prototype.createListOptions=function(o){
for(var n=new Array,e=0;e<o.length;e++){var t=new Option(o[e].name,o[e].id);n.push(t);
}return n},pentaho.pda.model.prototype.populateListFromResults=function(o,n,e,t){
var a=!1;if(""+t!="undefined"&&t>=0&&t<n.columnNames.length&&(a=!0),n.resultset)for(var p=0;p<n.resultset.length;p++){
var T;T=a?new Option(n.resultset[p][e],n.resultset[p][t]):new Option(n.resultset[p][e]),
o.options[o.options.length]=T}else if(n.getJsonTable)for(var p=0;p<n.getNumberOfRows();p++){
var T;T=a?new Option(n.getFormattedValue(p,e),n.getFormattedValue(p,t)):new Option(n.getFormattedValue(p,e)),
o.options[o.options.length]=T}},pentaho.pda.dataelement=function(){this.dataType=pentaho.pda.Column.DATA_TYPES.UNKNOWN,
this.elementType=pentaho.pda.Column.ELEMENT_TYPES.UNKNOWN,this.id="",this.name="",
this.description="",this.defaultAggregation=pentaho.pda.Column.AGG_TYPES.NONE,this.selectedAggregation=pentaho.pda.Column.AGG_TYPES.NONE,
this.availableAggregations=new Array,this.parent=null,this.children=new Array,this.isQueryElement=!1,
this.capabilities={}},pentaho.pda.dataelement.prototype.addChild=function(o){this.children.push(o);
},pentaho.pda.query=function(o){this.model=o},pentaho.pda.AXIS_LOCATION_ACROSS="across",
pentaho.pda.AXIS_LOCATION_DOWN="down",pentaho.pda.AXIS_LOCATION_SLICER="slicer",pentaho.pda.SORT_DIRECTION_ASC="ASC",
pentaho.pda.SORT_DIRECTION_DESC="DESC",pentaho.pda.MODEL={},pentaho.pda.CAPABILITIES=new Object,
pentaho.pda.CAPABILITIES.HAS_ACROSS_AXIS="across-axis",pentaho.pda.CAPABILITIES.IS_ACROSS_CUSTOM="across-axis-customizable",
pentaho.pda.CAPABILITIES.HAS_DOWN_AXIS="down-axis",pentaho.pda.CAPABILITIES.IS_DOWN_CUSTOM="down-axis-customizable",
pentaho.pda.CAPABILITIES.HAS_FILTERS="filter-axis",pentaho.pda.CAPABILITIES.IS_FILTER_CUSTOM="filter-axis-customizable",
pentaho.pda.CAPABILITIES.CAN_SORT="sortable",pentaho.pda.Column={},pentaho.pda.Column.SORT_TYPES=new Object,
pentaho.pda.Column.SORT_TYPES.ASCENDING="ASC",pentaho.pda.Column.SORT_TYPES.DESCENDING="DESC",
pentaho.pda.Column.OPERATOR_TYPES=new Object,pentaho.pda.Column.OPERATOR_TYPES.OR="OR",
pentaho.pda.Column.OPERATOR_TYPES.OR_NOT="OR NOT",pentaho.pda.Column.OPERATOR_TYPES.AND="AND",
pentaho.pda.Column.OPERATOR_TYPES.AND_NOT="AND NOT",pentaho.pda.Column.CONDITION_TYPES=new Object,
pentaho.pda.Column.CONDITION_TYPES.LIKE="LIKE",pentaho.pda.Column.CONDITION_TYPES.BEGINSWITH="BEGINS WITH",
pentaho.pda.Column.CONDITION_TYPES.ENDSWITH="ENDS WITH",pentaho.pda.Column.CONDITION_TYPES.CONTAINS="CONTAINS",
pentaho.pda.Column.CONDITION_TYPES.NOT_CONTAINS="DOES NOT CONTAIN",pentaho.pda.Column.CONDITION_TYPES.EQUAL="EQUAL",
pentaho.pda.Column.CONDITION_TYPES.IN="IN",pentaho.pda.Column.CONDITION_TYPES.LESS_THAN="<",
pentaho.pda.Column.CONDITION_TYPES.LESS_THAN_OR_EQUAL="<=",pentaho.pda.Column.CONDITION_TYPES.MORE_THAN=">",
pentaho.pda.Column.CONDITION_TYPES.MORE_THAN_OR_EQUAL=">=",pentaho.pda.Column.CONDITION_TYPES.IS_NULL="IS NULL",
pentaho.pda.Column.CONDITION_TYPES.NOT_NULL="IS NOT NULL",pentaho.pda.Column.DATA_TYPES=new Object,
pentaho.pda.Column.DATA_TYPES.NUMERIC="NUMERIC",pentaho.pda.Column.DATA_TYPES.STRING="STRING",
pentaho.pda.Column.DATA_TYPES.DATE="DATE",pentaho.pda.Column.DATA_TYPES.BOOLEAN="BOOLEAN",
pentaho.pda.Column.DATA_TYPES.UNKNOWN="UNKNOWN",pentaho.pda.Column.DATA_TYPES.NONE="NONE",
pentaho.pda.Column.ELEMENT_TYPES=new Object,pentaho.pda.Column.ELEMENT_TYPES.CATEGORY="CATEGORY",
pentaho.pda.Column.ELEMENT_TYPES.CUBE="CUBE",pentaho.pda.Column.ELEMENT_TYPES.DIMENSION="DIMENSION",
pentaho.pda.Column.ELEMENT_TYPES.HIERARCHY="HIERARCHY",pentaho.pda.Column.ELEMENT_TYPES.LEVEL="LEVEL",
pentaho.pda.Column.ELEMENT_TYPES.MEMBER="MEMBER",pentaho.pda.Column.ELEMENT_TYPES.FACT="FACT",
pentaho.pda.Column.ELEMENT_TYPES.ATTRIBUTE="ATTRIBUTE",pentaho.pda.Column.ELEMENT_TYPES.KEY="KEY",
pentaho.pda.Column.ELEMENT_TYPES.QUERY="QUERY",pentaho.pda.Column.ELEMENT_TYPES.UNKNOWN="UNKNOWN",
pentaho.pda.Column.JAVA_SQL_TYPES=new Object,pentaho.pda.Column.JAVA_SQL_TYPES.NUMERIC=2,
pentaho.pda.Column.JAVA_SQL_TYPES.VARCHAR=12,pentaho.pda.Column.JAVA_SQL_TYPES.BOOLEAN=16,
pentaho.pda.Column.JAVA_SQL_TYPES.DATE=91,pentaho.pda.Column.AGG_TYPES=new Object,
pentaho.pda.Column.AGG_TYPES.SUM="SUM",pentaho.pda.Column.AGG_TYPES.AVERAGE="AVERAGE",
pentaho.pda.Column.AGG_TYPES.MIN="MINIMUM",pentaho.pda.Column.AGG_TYPES.MAX="MAXIMUM",
pentaho.pda.Column.AGG_TYPES.COUNT="COUNT",pentaho.pda.Column.AGG_TYPES.COUNT_DISTINCT="COUNT_DISTINCT",
pentaho.pda.Column.AGG_TYPES.NONE="NONE",pentaho.pda.Column.AGG_TYPES.VAR="VAR",pentaho.pda.Column.AGG_TYPES.STDDEV="STDDEV",
pentaho.pda.Column.AGG_TYPES.CALC="CALC",pentaho.pda.Column.AGG_TYPES.UNKNOWN="UNKNOWN",
pentaho.pda.Column.AGG_TYPES_STRINGS={},pentaho.pda.Column.AGG_TYPES_STRINGS[pentaho.pda.Column.AGG_TYPES.SUM]=pentaho.common.Messages.getString(pentaho.pda.Column.AGG_TYPES.SUM),
pentaho.pda.Column.AGG_TYPES_STRINGS[pentaho.pda.Column.AGG_TYPES.AVERAGE]=pentaho.common.Messages.getString(pentaho.pda.Column.AGG_TYPES.AVERAGE),
pentaho.pda.Column.AGG_TYPES_STRINGS[pentaho.pda.Column.AGG_TYPES.MIN]=pentaho.common.Messages.getString(pentaho.pda.Column.AGG_TYPES.MIN),
pentaho.pda.Column.AGG_TYPES_STRINGS[pentaho.pda.Column.AGG_TYPES.MAX]=pentaho.common.Messages.getString(pentaho.pda.Column.AGG_TYPES.MAX),
pentaho.pda.Column.AGG_TYPES_STRINGS[pentaho.pda.Column.AGG_TYPES.COUNT]=pentaho.common.Messages.getString(pentaho.pda.Column.AGG_TYPES.COUNT),
pentaho.pda.Column.AGG_TYPES_STRINGS[pentaho.pda.Column.AGG_TYPES.COUNT_DISTINCT]=pentaho.common.Messages.getString(pentaho.pda.Column.AGG_TYPES.COUNT_DISTINCT),
pentaho.pda.Column.AGG_TYPES_STRINGS[pentaho.pda.Column.AGG_TYPES.NONE]=pentaho.common.Messages.getString(pentaho.pda.Column.AGG_TYPES.NONE),
pentaho.pda.Column.AGG_TYPES_STRINGS[pentaho.pda.Column.AGG_TYPES.VAR]=pentaho.common.Messages.getString(pentaho.pda.Column.AGG_TYPES.VAR),
pentaho.pda.Column.AGG_TYPES_STRINGS[pentaho.pda.Column.AGG_TYPES.STDDEV]=pentaho.common.Messages.getString(pentaho.pda.Column.AGG_TYPES.STDDEV),
pentaho.pda.Column.AGG_TYPES_STRINGS[pentaho.pda.Column.AGG_TYPES.CALC]=pentaho.common.Messages.getString(pentaho.pda.Column.AGG_TYPES.CALC),
pentaho.pda.Column.AGG_TYPES_STRINGS[pentaho.pda.Column.AGG_TYPES.UNKNOWN]=pentaho.common.Messages.getString(pentaho.pda.Column.AGG_TYPES.UNKNOWN),
pentaho.pda.Column.AGG_TYPE_MAP=new Object,pentaho.pda.Column.AGG_TYPE_MAP[pentaho.pda.Column.AGG_TYPES.NONE]="none",
pentaho.pda.Column.AGG_TYPE_MAP[pentaho.pda.Column.AGG_TYPES.SUM]="sum",pentaho.pda.Column.AGG_TYPE_MAP[pentaho.pda.Column.AGG_TYPES.AVERAGE]="average",
pentaho.pda.Column.AGG_TYPE_MAP[pentaho.pda.Column.AGG_TYPES.MIN]="min",pentaho.pda.Column.AGG_TYPE_MAP[pentaho.pda.Column.AGG_TYPES.MAX]="max",
pentaho.pda.Column.AGG_TYPE_MAP[pentaho.pda.Column.AGG_TYPES.COUNT]="item-count",
pentaho.pda.Column.AGG_TYPE_MAP[pentaho.pda.Column.AGG_TYPES.COUNT_DISTINCT]="count-distinct",
pentaho.pda.Column.AGG_TYPE_MAP[pentaho.pda.Column.AGG_TYPES.VAR]="var",pentaho.pda.Column.AGG_TYPE_MAP[pentaho.pda.Column.AGG_TYPES.STDDEV]="standard deviation",
pentaho.pda.Column.AGG_TYPE_MAP[pentaho.pda.Column.AGG_TYPES.CALC]="calculated",pentaho.pda.Column.AGG_TYPE_MAP[pentaho.pda.Column.AGG_TYPES.UNKNOWN]="unknown",
pentaho.pda.Column.TYPE_TO_JAVA_SQL_TYPE=new Object,pentaho.pda.Column.TYPE_TO_JAVA_SQL_TYPE[pentaho.pda.Column.DATA_TYPES.NUMERIC]=pentaho.pda.Column.JAVA_SQL_TYPES.NUMERIC,
pentaho.pda.Column.TYPE_TO_JAVA_SQL_TYPE[pentaho.pda.Column.DATA_TYPES.STRING]=pentaho.pda.Column.JAVA_SQL_TYPES.VARCHAR,
pentaho.pda.Column.TYPE_TO_JAVA_SQL_TYPE[pentaho.pda.Column.DATA_TYPES.DATE]=pentaho.pda.Column.JAVA_SQL_TYPES.DATE,
pentaho.pda.Column.TYPE_TO_JAVA_SQL_TYPE[pentaho.pda.Column.DATA_TYPES.BOOLEAN]=pentaho.pda.Column.JAVA_SQL_TYPES.BOOLEAN,
pentaho.pda.Column.TYPE_TO_JAVA_SQL_TYPE[pentaho.pda.Column.DATA_TYPES.UNKNOWN]=pentaho.pda.Column.JAVA_SQL_TYPES.VARCHAR,
pentaho.pda.Column.JAVA_SQL_TYPE_TO_TYPE=new Object,pentaho.pda.Column.JAVA_SQL_TYPE_TO_TYPE[pentaho.pda.Column.JAVA_SQL_TYPES.NUMERIC]=pentaho.pda.Column.DATA_TYPES.NUMERIC,
pentaho.pda.Column.JAVA_SQL_TYPE_TO_TYPE[pentaho.pda.Column.JAVA_SQL_TYPES.VARCHAR]=pentaho.pda.Column.DATA_TYPES.STRING,
pentaho.pda.Column.JAVA_SQL_TYPE_TO_TYPE[pentaho.pda.Column.JAVA_SQL_TYPES.DATE]=pentaho.pda.Column.DATA_TYPES.DATE,
pentaho.pda.Column.JAVA_SQL_TYPE_TO_TYPE[pentaho.pda.Column.JAVA_SQL_TYPES.BOOLEAN]=pentaho.pda.Column.DATA_TYPES.BOOLEAN,
pentaho.pda.Column.COMPARATOR=new Object,pentaho.pda.Column.COMPARATOR.STRING=[[pentaho.common.Messages.getString("EXACTLY_MATCHES"),pentaho.pda.Column.CONDITION_TYPES.EQUAL],[pentaho.common.Messages.getString("CONTAINS"),pentaho.pda.Column.CONDITION_TYPES.CONTAINS],[pentaho.common.Messages.getString("ENDS_WITH"),pentaho.pda.Column.CONDITION_TYPES.ENDSWITH],[pentaho.common.Messages.getString("BEGINS_WITH"),pentaho.pda.Column.CONDITION_TYPES.BEGINSWITH],[pentaho.common.Messages.getString("DOES_NOT_CONTAIN"),pentaho.pda.Column.CONDITION_TYPES.NOT_CONTAINS],[pentaho.common.Messages.getString("IS_NULL"),pentaho.pda.Column.CONDITION_TYPES.IS_NULL],[pentaho.common.Messages.getString("IS_NOT_NULL"),pentaho.pda.Column.CONDITION_TYPES.NOT_NULL]],
pentaho.pda.Column.COMPARATOR.NUMERIC=[[pentaho.common.Messages.getString("EQUALS"),pentaho.pda.Column.CONDITION_TYPES.EQUAL],[pentaho.common.Messages.getString("MORE_THAN_OR_EQUAL"),pentaho.pda.Column.CONDITION_TYPES.MORE_THAN_OR_EQUAL],[pentaho.common.Messages.getString("LESS_THAN_OR_EQUAL"),pentaho.pda.Column.CONDITION_TYPES.LESS_THAN_OR_EQUAL],[pentaho.common.Messages.getString("MORE_THAN"),pentaho.pda.Column.CONDITION_TYPES.MORE_THAN],[pentaho.common.Messages.getString("LESS_THAN"),pentaho.pda.Column.CONDITION_TYPES.LESS_THAN],[pentaho.common.Messages.getString("IS_NULL"),pentaho.pda.Column.CONDITION_TYPES.IS_NULL],[pentaho.common.Messages.getString("IS_NOT_NULL"),pentaho.pda.Column.CONDITION_TYPES.NOT_NULL]],
pentaho.pda.Column.COMPARATOR.BOOLEAN=[["=",pentaho.pda.Column.CONDITION_TYPES.EQUAL],[pentaho.common.Messages.getString("IS_NULL"),pentaho.pda.Column.CONDITION_TYPES.IS_NULL],[pentaho.common.Messages.getString("IS_NOT_NULL"),pentaho.pda.Column.CONDITION_TYPES.NOT_NULL]],
pentaho.pda.Column.COMPARATOR.DATE=[[pentaho.common.Messages.getString("ON"),pentaho.pda.Column.CONDITION_TYPES.EQUAL],[pentaho.common.Messages.getString("ON_OR_AFTER"),pentaho.pda.Column.CONDITION_TYPES.MORE_THAN_OR_EQUAL],[pentaho.common.Messages.getString("ON_OR_BEFORE"),pentaho.pda.Column.CONDITION_TYPES.LESS_THAN_OR_EQUAL],[pentaho.common.Messages.getString("AFTER"),pentaho.pda.Column.CONDITION_TYPES.MORE_THAN],[pentaho.common.Messages.getString("BEFORE"),pentaho.pda.Column.CONDITION_TYPES.LESS_THAN],[pentaho.common.Messages.getString("IS_NULL"),pentaho.pda.Column.CONDITION_TYPES.IS_NULL],[pentaho.common.Messages.getString("IS_NOT_NULL"),pentaho.pda.Column.CONDITION_TYPES.NOT_NULL]],
pentaho.pda.Column.SINGLE_COMPARATORS={},pentaho.pda.Column.SINGLE_COMPARATORS[pentaho.pda.Column.CONDITION_TYPES.IS_NULL]={},
pentaho.pda.Column.SINGLE_COMPARATORS[pentaho.pda.Column.CONDITION_TYPES.NOT_NULL]={},
pentaho.pda.Column.COMPARATOR_MAP=new Object,pentaho.pda.Column.COMPARATOR_MAP[pentaho.pda.Column.DATA_TYPES.NUMERIC]=pentaho.pda.Column.COMPARATOR.NUMERIC,
pentaho.pda.Column.COMPARATOR_MAP[pentaho.pda.Column.DATA_TYPES.STRING]=pentaho.pda.Column.COMPARATOR.STRING,
pentaho.pda.Column.COMPARATOR_MAP[pentaho.pda.Column.DATA_TYPES.DATE]=pentaho.pda.Column.COMPARATOR.DATE,
pentaho.pda.Column.COMPARATOR_MAP[pentaho.pda.Column.DATA_TYPES.BOOLEAN]=pentaho.pda.Column.COMPARATOR.BOOLEAN,
pentaho.pda.Column.COMPARATOR_MAP[pentaho.pda.Column.DATA_TYPES.UNKNOWN]=pentaho.pda.Column.COMPARATOR.STRING,
pentaho.pda.Column.DEFAULT_FORMAT_BY_TYPE=new Object,pentaho.pda.Column.DEFAULT_FORMAT_BY_TYPE[pentaho.pda.Column.DATA_TYPES.NUMERIC]="default",
pentaho.pda.Column.DEFAULT_FORMAT_BY_TYPE[pentaho.pda.Column.DATA_TYPES.STRING]="",
pentaho.pda.Column.DEFAULT_FORMAT_BY_TYPE[pentaho.pda.Column.DATA_TYPES.DATE]="default",
pentaho.pda.Column.DEFAULT_FORMAT_BY_TYPE[pentaho.pda.Column.DATA_TYPES.BOOLEAN]="",
pentaho.pda.Column.DEFAULT_FORMAT_BY_TYPE[pentaho.pda.Column.DATA_TYPES.UNKNOWN]="",
pentaho.pda.Column.ALIGNMENT_TYPES=new Object,pentaho.pda.Column.ALIGNMENT_TYPES.DEFAULT="not-set",
pentaho.pda.Column.ALIGNMENT_TYPES.LEFT="left",pentaho.pda.Column.ALIGNMENT_TYPES.RIGHT="right",
pentaho.pda.Column.DEFAULT_ALIGNMENT_BY_TYPE=new Object,pentaho.pda.Column.DEFAULT_ALIGNMENT_BY_TYPE[pentaho.pda.Column.DATA_TYPES.NUMERIC]=pentaho.pda.Column.ALIGNMENT_TYPES.DEFAULT,
pentaho.pda.Column.DEFAULT_ALIGNMENT_BY_TYPE[pentaho.pda.Column.DATA_TYPES.STRING]=pentaho.pda.Column.ALIGNMENT_TYPES.DEFAULT,
pentaho.pda.Column.DEFAULT_ALIGNMENT_BY_TYPE[pentaho.pda.Column.DATA_TYPES.DATE]=pentaho.pda.Column.ALIGNMENT_TYPES.DEFAULT,
pentaho.pda.Column.DEFAULT_ALIGNMENT_BY_TYPE[pentaho.pda.Column.DATA_TYPES.BOOLEAN]=pentaho.pda.Column.ALIGNMENT_TYPES.DEFAULT,
pentaho.pda.Column.DEFAULT_ALIGNMENT_BY_TYPE[pentaho.pda.Column.DATA_TYPES.UNKNOWN]=pentaho.pda.Column.ALIGNMENT_TYPES.DEFAULT,
pentaho.pda.Column.getDefaultFormat=function(o){return pentaho.pda.Column.DEFAULT_FORMAT_BY_TYPE[o];
},pentaho.pda.Column.getDefaultAlignment=function(o){return pentaho.pda.Column.DEFAULT_ALIGNMENT_BY_TYPE[o];
},pentaho.pda.model.prototype.getColumnFromList=function(o){if(o){var n=o.value;return this.getColumnById(n);
}return null},pentaho.pda.model.prototype.populateListControl=function(o,n,e,t){var a=this.getColumnsByFieldTypes(n);
1==e&&(a=this.sortColumnsByName(a));var p=this.createListOptions(a),T=o.options,E=null;
t&&(E=t.id?t.id:t);var h=-1;for(colNo=0;colNo<p.length;colNo++)T[T.length]=p[colNo],
p[colNo].value==E&&(h=colNo);o.selectedIndex=h}});