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

define("common-data/models-olap",["common-data/Xmla","common-data/oop","common-data/controller"],function(e){
return pentaho.pda.OlapHandler=function(e){pentaho.pda.Handler.call(this,e),this.type=pentaho.pda.SOURCE_TYPE_OLAP,
this.XMLA_SERVICE_URL=CONTEXT_PATH+"Xmla",this.datasourceCache=[]},inheritPrototype(pentaho.pda.OlapHandler,pentaho.pda.Handler),
pentaho.pda.OlapHandler.prototype.getSources=function(t,a){a=a||{};var o=a.filter;
if(this.xmla=new e({async:!1}),this.datasourceCache.length>0)if(null==o)for(var n=0,s=this.datasourceCache.length;s>n;n++)t(this.datasourceCache[n]);else for(var n=0,s=this.datasourceCache.length;s>n;n++){
each=this.datasourceCache[n];try{each[o.property]==o.value&&t(each)}catch(r){}}else{
this.datasourceCache=[];var i=this,l=this.xmla.discoverDataSources({url:this.XMLA_SERVICE_URL
});if(l.hasMoreRows()){this.datasourceCache=l.fetchAllAsObject();for(var p=this.datasourceCache.length,n=0;p>n;n++){
var d=this.datasourceCache[n],h={},u=d.URL?d.URL:this.XMLA_SERVICE_URL;0==u.indexOf("http")&&(u=this.XMLA_SERVICE_URL),
h[e.PROP_DATASOURCEINFO]=d[e.PROP_DATASOURCEINFO];var c=this.xmla.discoverDBCatalogs({
url:u,properties:h});if(c.hasMoreRows())for(var E;E=c.fetchAsObject();){var m=E.CATALOG_NAME,h={};
h[e.PROP_DATASOURCEINFO]=this.datasourceCache[n].DataSourceName,h[e.PROP_CATALOG]=m;
var A={};A.CATALOG_NAME=m;for(var C,_,T=this.xmla.discoverMDCubes({url:this.XMLA_SERVICE_URL,
properties:h,restrictions:A});T.hasMoreRows();){var _=T.fieldVal("CUBE_NAME"),C=this.datasourceCache[n].DataSourceName+"	"+m+"	"+_,d=new pentaho.pda.model.olap({
id:C,name:E.CATALOG_NAME,type:pentaho.pda.SOURCE_TYPE_OLAP,description:""});d.xmlaDatasource=this.datasourceCache[n].DataSourceName,
d.catalog=m,d.cubeName=_,d.xmla=i.xmla,d.XMLA_SERVICE_URL=i.XMLA_SERVICE_URL,this.sources.push(d),
T.next()}}else section_error.innerHTML="No datasources found"}t(d)}}return this.sources;
},pentaho.pda.model.olap=function(e){pentaho.pda.model.call(this,e),this.xmlaDatasource="",
this.catalog="",this.cubeName="",this.type="xmla"},inheritPrototype(pentaho.pda.model.olap,pentaho.pda.model),
pentaho.pda.model.olap.prototype.discoverModelDetail=function(e){this.categories=[],
this.discoverDimensions(),this.addCapability(pentaho.pda.CAPABILITIES.HAS_ACROSS_AXIS),
this.addCapability(pentaho.pda.CAPABILITIES.IS_ACROSS_CUSTOM),this.addCapability(pentaho.pda.CAPABILITIES.HAS_DOWN_AXIS),
this.addCapability(pentaho.pda.CAPABILITIES.IS_DOWN_CUSTOM),this.addCapability(pentaho.pda.CAPABILITIES.HAS_FILTERS),
this.addCapability(pentaho.pda.CAPABILITIES.IS_FILTER_CUSTOM),this.addCapability(pentaho.pda.CAPABILITIES.CAN_SORT);
},pentaho.pda.model.olap.prototype.discoverDimensions=function(){var t={};t[e.PROP_DATASOURCEINFO]=this.xmlaDatasource,
t[e.PROP_CATALOG]=this.catalog;var a={};a.CATALOG_NAME=this.catalog,a.CUBE_NAME=this.cubeName;
for(var o=this.xmla.discoverMDDimensions({url:this.XMLA_SERVICE_URL,properties:t,
restrictions:a});o.hasMoreRows();){var n=o.fieldVal("DIMENSION_NAME"),s=o.fieldVal("DIMENSION_UNIQUE_NAME"),r=o.fieldVal("DIMENSION_TYPE"),i=new pentaho.pda.dataelement;
i.dataType=pentaho.pda.Column.DATA_TYPES.NONE,i.elementType=pentaho.pda.Column.ELEMENT_TYPES.DIMENSION,
i.id=s,i.name=n,i.isMeasures="2"==r,i.isTime="1"==r,this.addElement(i),this.discoverHierarchies(i),
o.next()}},pentaho.pda.model.olap.prototype.discoverHierarchies=function(t){var a={};
a[e.PROP_DATASOURCEINFO]=this.xmlaDatasource,a[e.PROP_CATALOG]=this.catalog;var o={};
o.CATALOG_NAME=this.catalog,o.CUBE_NAME=this.cubeName,o.DIMENSION_UNIQUE_NAME=t.id;
for(var n=this.xmla.discoverMDHierarchies({url:this.XMLA_SERVICE_URL,properties:a,
restrictions:o});n.hasMoreRows();){var s=n.fieldVal("HIERARCHY_NAME"),r=n.fieldVal("HIERARCHY_UNIQUE_NAME"),i=new pentaho.pda.dataelement;
i.dataType=pentaho.pda.Column.DATA_TYPES.NONE,i.elementType=pentaho.pda.Column.ELEMENT_TYPES.HIERARCHY,
i.id=r,i.name=s,i.parent=t,t.addChild(i),this.addElement(i),this.categories.push(i),
this.discoverLevels(t,i),n.next()}},pentaho.pda.model.olap.prototype.discoverLevels=function(t,a){
var o={};o[e.PROP_DATASOURCEINFO]=this.xmlaDatasource,o[e.PROP_CATALOG]=this.catalog;
var n={};n.CATALOG_NAME=this.catalog,n.CUBE_NAME=this.cubeName,n.DIMENSION_UNIQUE_NAME=t.id,
n.HIERARCHY_UNIQUE_NAME=a.id;for(var s=this.xmla.discoverMDLevels({url:this.XMLA_SERVICE_URL,
properties:o,restrictions:n}),r=a;s.hasMoreRows();){var i=s.fieldVal("LEVEL_CAPTION"),l=s.fieldVal("LEVEL_NUMBER"),p=new pentaho.pda.dataelement;
p.dataType=pentaho.pda.Column.DATA_TYPES.STRING,p.elementType=pentaho.pda.Column.ELEMENT_TYPES.LEVEL,
p.id=s.fieldVal("LEVEL_UNIQUE_NAME"),p.name=i,p.number=l,p.parent=r,a.addChild(p),
this.addElement(p),t.isMeasures?(this.discoverMeasures(t,a,p),p.isQueryElement=!1):(p.category=a,
p.isQueryElement=!0),r=p,s.next()}},pentaho.pda.model.olap.prototype.discoverMembers=function(t,a,o){
var n={};n[e.PROP_DATASOURCEINFO]=this.xmlaDatasource,n[e.PROP_CATALOG]=this.catalog;
var s={};s.CATALOG_NAME=this.catalog,s.CUBE_NAME=this.cubeName,s.DIMENSION_UNIQUE_NAME=t.id,
s.HIERARCHY_UNIQUE_NAME=a.id,s.LEVEL_NUMBER=o.id;for(var r=this.xmla.discoverMDMembers({
url:this.XMLA_SERVICE_URL,properties:n,restrictions:s});r.hasMoreRows();){var i=r.fieldVal("MEMBER_NAME"),l=r.fieldVal("MEMBER_NAME"),p=new pentaho.pda.dataelement;
p.dataType=pentaho.pda.Column.DATA_TYPES.NUMERIC,p.elementType=pentaho.pda.Column.ELEMENT_TYPES.FACT,
p.id=l,p.name=i,p.parent=o,o.addChild(p),this.addElement(p),r.next()}},pentaho.pda.model.olap.prototype.discoverMeasures=function(t,a,o){
var n={};n[e.PROP_DATASOURCEINFO]=this.xmlaDatasource,n[e.PROP_CATALOG]=this.catalog;
var s={};s.CATALOG_NAME=this.catalog,s.CUBE_NAME=this.cubeName;for(var r=this.xmla.discoverMDMeasures({
url:this.XMLA_SERVICE_URL,properties:n,restrictions:s});r.hasMoreRows();){var i=r.fieldVal("MEASURE_NAME"),l=r.fieldVal("MEASURE_UNIQUE_NAME"),p=new pentaho.pda.dataelement;
p.dataType=pentaho.pda.Column.DATA_TYPES.NUMERIC,p.elementType=pentaho.pda.Column.ELEMENT_TYPES.FACT,
p.id=l,p.name=i,p.parent=o;var d=r.fieldVal("MEASURE_AGGREGATOR");switch(d){case 1:
p.defaultAggregation=pentaho.pda.Column.AGG_TYPES.SUM;break;case 2:p.defaultAggregation=pentaho.pda.Column.AGG_TYPES.COUNT;
break;case 3:p.defaultAggregation=pentaho.pda.Column.AGG_TYPES.MIN;break;case 4:p.defaultAggregation=pentaho.pda.Column.AGG_TYPES.MAX;
break;case 5:p.defaultAggregation=pentaho.pda.Column.AGG_TYPES.AVERAGE;break;case 6:
p.defaultAggregation=pentaho.pda.Column.AGG_TYPES.VAR;break;case 7:p.defaultAggregation=pentaho.pda.Column.AGG_TYPES.STDDEV;
break;case 8:p.defaultAggregation=pentaho.pda.Column.AGG_TYPES.CALC;break;case 9:
p.defaultAggregation=pentaho.pda.Column.AGG_TYPES.UNKNOWN}p.selectedAggregation=p.defaultAggregation,
p.availableAggregations=new Array(p.defaultAggregation),o.addChild(p),p.isQueryElement=!0,
p.category=a,this.addElement(p),r.next()}},pentaho.pda.model.olap.prototype.getAllColumns=function(){
for(var e=new Array,t=0;t<this.elements.length;t++)(this.elements[t].elementType==pentaho.pda.Column.ELEMENT_TYPES.LEVEL||this.elements[t].elementType==pentaho.pda.Column.ELEMENT_TYPES.FACT)&&e.push(this.elements[t]);
return e},pentaho.pda.model.olap.prototype.createQuery=function(){var e=new pentaho.pda.query.olap(this);
return e},pentaho.pda.model.olap.prototype.submitQuery=function(e,t){if(0==e.state.measures.length&&0==e.state.rowSelections.length&&0==e.state.columnSelections.length){
var a={metadata:[],resultset:[]};return a}var o=e.serialize();return e.state.mdx=o,
this.submit(o,t)},pentaho.pda.model.olap.prototype.submit=function(t,a){var o={metadata:[],
resultset:[]},n={};n[e.PROP_DATASOURCEINFO]=this.xmlaDatasource,n[e.PROP_CATALOG]=this.catalog;
var s={};s.CATALOG_NAME=this.catalog,s.CUBE_NAME=this.cubeName;try{for(var r=this.xmla.executeTabular({
url:this.XMLA_SERVICE_URL,statement:t,async:!1,properties:n,restrictions:s}),i=r.getFields(),l=i.length,p=0;l>p;p++){
var d=this.cleanupFieldName(i[p].name),h={colIndex:0,colName:d,colType:this.getDataTypeFromXsd(i[p].type)
};o.metadata.push(h)}for(;r.hasMoreRows();){for(var u=new Array,p=0;l>p;p++)u.push(r.fieldVal(p));
o.resultset.push(u),r.next()}return o}catch(c){alert(c.message)}return null},pentaho.pda.model.olap.prototype.cleanupFieldName=function(e){
return e=e.replace(/_x005b_/g,"["),e=e.replace(/_x005d_/g,"]")},pentaho.pda.model.olap.prototype.getDataTypeFromXsd=function(e){
switch(e){case"xsd:boolean":return pentaho.pda.Column.DATA_TYPES.BOOLEAN;case"xsd:decimal":
case"xsd:double":case"xsd:float":case"xsd:int":case"xsd:integer":case"xsd:nonPositiveInteger":
case"xsd:negativeInteger":case"xsd:nonNegativeInteger":case"xsd:positiveInteger":
case"xsd:short":case"xsd:byte":case"xsd:long":case"xsd:unsignedLong":case"xsd:unsignedInt":
case"xsd:unsignedShort":case"xsd:unsignedByte":return pentaho.pda.Column.DATA_TYPES.NUMERIC;
case"xsd:string":return pentaho.pda.Column.DATA_TYPES.STRING;case"xsd:dateTime":return pentaho.pda.Column.DATA_TYPES.DATE;
case"Restrictions":return pentaho.pda.Column.DATA_TYPES.UNKNOWN;default:return pentaho.pda.Column.DATA_TYPES.UNKNOWN;
}},pentaho.pda.model.olap.prototype.getAllValuesForColumn=function(t){for(var a=this.getColumnsByFieldType([pentaho.pda.Column.ELEMENT_TYPES.FACT]),o=t;null!=o.parent;)o=o.parent;
var n="select "+a[0].id+" ON COLUMNS, Order({"+t.id+".Members},"+o.id+".CurrentMember.OrderKey, BASC) ON ROWS from ["+this.cubeName+"]",s={};
s[e.PROP_DATASOURCEINFO]=this.xmlaDatasource,s[e.PROP_CATALOG]=this.catalog;var r={};
r.CATALOG_NAME=this.catalog,r.CUBE_NAME=this.cubeName;try{var i=this.xmla.executeTabular({
url:this.XMLA_SERVICE_URL,statement:n,async:!1,properties:s,restrictions:r}),l={metadata:[],
resultset:[]},p=i.getFields(),d=p.length-2,h=p[d];for({colIndex:0,colName:t.id,colType:this.getDataTypeFromXsd(h.type),
colLabel:t.name};i.hasMoreRows();){var u=new Array;u.push(i.fieldVal(d)),l.resultset.push(u),
i.next()}return l}catch(c){alert(c.message)}return null},pentaho.pda.model.olap.prototype.searchColumn=function(e,t,a,o){
for(var n=this.getAllValuesForColumn(e),s={metadata:n.metadata,resultset:[]},r=0;r<n.resultset.length&&!(-1!=n.resultset[r][0].indexOf(t)&&(s.resultset.push(n.resultset[r]),
a>0&&a==s.resultset.length));r++);return o?void o(s):s},pentaho.pda.query.olap=function(e){
pentaho.pda.query.call(this,e),this.state={mdx:"mdx",columnSelections:[],rowSelections:[],
measures:[],conditions:[]}},inheritPrototype(pentaho.pda.query.olap,pentaho.pda.query),
pentaho.pda.query.olap.prototype.canQueryReturnData=function(){return this.state.columnSelections.length>0||this.state.rowSelections.length>0||this.state.measures.length>0;
},pentaho.pda.query.olap.prototype.prepare=function(){this.state.mdx=this.serialize(this);
},pentaho.pda.query.olap.prototype.getQueryStr=function(){return this.state.mdx},
pentaho.pda.query.olap.prototype.createSelection=function(){var e={column:null,selection:null
};return e},pentaho.pda.query.olap.prototype.couldReturnData=function(){return this.state.measures.length>0||this.state.rowSelections.length>0||this.state.columnSelections.length>0;
},pentaho.pda.query.olap.prototype.createCondition=function(){var e={column:null,
operator:null,value:null,combinationType:pentaho.pda.Column.OPERATOR_TYPES.AND};return e;
},pentaho.pda.query.olap.prototype.addConditionById=function(e,t,a,o){var n=this.model.getColumnById(e);
if(null!=n){var s=this.createCondition();return s.column=n,s.operator=t,"object"==typeof a&&a.length?s.value=a:s.value=[a],
s.combinationType=o,this.addCondition(s),s}return null},pentaho.pda.query.olap.prototype.addCondition=function(e){
this.state.conditions.push(e)},pentaho.pda.query.olap.prototype.addSelectionById=function(e,t){
var a=this.model.getColumnById(e);if(null!=a){var o=this.createSelection();return o.column=a,
a.elementType==pentaho.pda.Column.ELEMENT_TYPES.FACT&&this.state.measures.push(o),
a.elementType==pentaho.pda.Column.ELEMENT_TYPES.LEVEL&&(t==pentaho.pda.AXIS_LOCATION_ACROSS?this.state.columnSelections.push(o):t==pentaho.pda.AXIS_LOCATION_DOWN?this.state.rowSelections.push(o):this.state.rowSelections.push(o)),
a}return null},pentaho.pda.query.olap.prototype.serialize=function(){if(0==this.state.measures.length&&0==this.state.rowSelections.length&&0==this.state.columnSelections.length)return"";
var e=this.state.measures;if(0==e.length){var t=this.model.getColumnsByFieldType([pentaho.pda.Column.ELEMENT_TYPES.FACT])[0],a=this.createSelection();
a.column=t,e=[a]}for(var o="select ",n=new Array,s=0;s<this.state.columnSelections.length;s++)n.push(this.getSelectionMdx(this.state.columnSelections[s],this.state.conditions));
if(n.push(this.getMeasuresMdx(e)),1==n.length)o+=n[0];else{o+="Crossjoin(";for(var s=0;s<n.length;s++)s>0&&(o+=", "),
o+=n[s];o+=")"}o+=" ON COLUMNS, ";for(var n=new Array,s=0;s<this.state.rowSelections.length;s++)n.push(this.getSelectionMdx(this.state.rowSelections[s],this.state.conditions));
if(1==n.length)o+=n[0];else{o+="Crossjoin(";for(var s=0;s<n.length;s++)s>0&&(o+=", "),
o+=n[s];o+=")"}return o+=" ON ROWS from ["+this.model.cubeName+"]",o+=this.getWhereMdx();
},pentaho.pda.query.olap.prototype.getWhereMdx=function(){for(var e=" where (",t=!1,a=0;a<this.state.conditions.length;a++)if(this.state.conditions[a].column.elementType==pentaho.pda.Column.ELEMENT_TYPES.FACT)a>0&&(e+=" "+this.state.conditions[a].combinationType+" "),
e+=this.state.conditions[a].column.id,e+=" "+this.state.conditions[a].operator+" ",
e+=this.state.conditions[a].value[0],t=!0;else{for(var o=!1,n=0;n<this.state.rowSelections.length;n++)if(this.state.rowSelections[n].column.id==this.state.conditions[a].column.id){
o=!0;break}for(var n=0;n<this.state.columnSelections.length;n++)if(this.state.columnSelections[n].column.id==this.state.conditions[a].column.id){
o=!0;break}o||(e+=this.state.conditions[a].column.id,e+=".[",e+=this.state.conditions[a].value[0],
e+="]",t=!0)}return e+=")",t?e:""},pentaho.pda.query.olap.prototype.getMeasuresMdx=function(e){
var t="";e.length>1&&(t+="{");for(var a=0;a<e.length;a++)a>0&&(t+=", "),t+=e[a].column.id;
return e.length>1&&(t+="}"),t},pentaho.pda.query.olap.prototype.getSelectionMdx=function(e,t){
for(var a=!1,o=!1,n="",s=0;s<t.length;s++)if(t[s].column.id==e.column.id)for(var r=t[s].value,i=0;i<r.length;i++)a&&(n+=", ",
o=!0),n+=e.column.id,n+=".[",n+=r[i],n+="]",a=!0;return a||(n+=e.column.id,n+=".Members"),
o?"{"+n+"}":n},pentaho.pda.OlapHandler});