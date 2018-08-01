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

define("common-data/models-mql",["common-data/oop","common-data/controller","common-repo/pentaho-ajax"],function(){
return pentaho.pda.MqlHandler=function(e){pentaho.pda.Handler.call(this,e),this.type=pentaho.pda.SOURCE_TYPE_MQL,
this.METADATA_SERVICE_URL="../../../../content/ws-run/metadataService"},inheritPrototype(pentaho.pda.MqlHandler,pentaho.pda.Handler),
pentaho.pda.MqlHandler.prototype.getSources=function(e,t){t=t||{};var n,a=t.filter,o=0,r=0;
if(this.sources.length>0)if(null==a)for(var o=0,r=this.sources.length;r>o;o++)e(this.sources[o]);else for(var o=0,r=this.sources.length;r>o;o++){
n=this.sources[o];try{n[a.property]==a.value&&e(n)}catch(i){}}else for(var l=this.METADATA_SERVICE_URL+"/listBusinessModels",d=t.context,s="domainName=&"+(d?"context="+d:""),p=pentahoGet(l,s),u=parseXML(p),h=u.getElementsByTagName("return"),m=0;m<h.length;m++)n=this.addModelInfoFromNode(h[m])||{},
n.addCapability(pentaho.pda.CAPABILITIES.HAS_DOWN_AXIS),n.addCapability(pentaho.pda.CAPABILITIES.IS_DOWN_CUSTOM),
n.addCapability(pentaho.pda.CAPABILITIES.HAS_FILTERS),n.addCapability(pentaho.pda.CAPABILITIES.IS_FILTER_CUSTOM),
n.addCapability(pentaho.pda.CAPABILITIES.CAN_SORT),this.sources.push(n),null==a?e(n):n[a.property]==a.value&&e(n);
},pentaho.pda.MqlHandler.prototype.getModelInfoFromNode=function(e){var t={};return t.domainId=this.getNodeText(e,"domainId"),
t.modelId=this.getNodeText(e,"modelId"),t.id=t.domainId+":"+t.modelId,t.name=this.getNodeText(e,"modelName"),
t.type=pentaho.pda.SOURCE_TYPE_MQL,t.description=this.getNodeText(e,"modelDescription"),
t},pentaho.pda.MqlHandler.prototype.addModelInfoFromNode=function(e){return new pentaho.pda.model.mql(this.getModelInfoFromNode(e),this);
},pentaho.pda.MqlHandler.prototype.getModelFromNode=function(e,t,n){var a=n.id,o=n.name,r=(n.description,
new pentaho.pda.model(a,o,t,n));r.domainId=this.getNodeText(e,"domainId"),r.modelId=this.getNodeText(e,"id");
for(var i=e.getElementsByTagName("categories"),l=0;l<i.length;l++)this.addCategoryFromNode(i[l],r);
return r},pentaho.pda.MqlHandler.prototype.addCategoryFromNode=function(e,t){var n=new pentaho.pda.dataelement;
n.dataType=pentaho.pda.Column.DATA_TYPES.NONE,n.elementType=pentaho.pda.Column.ELEMENT_TYPES.CATEGORY,
n.id=this.getNodeText(e,"id"),n.name=this.getNodeText(e,"name"),n.isQueryElement=!1,
t.addElement(n);for(var a=e.getElementsByTagName("columns"),o=0;o<a.length;o++)this.addColumnFromNode(a[o],t,n);
},pentaho.pda.MqlHandler.prototype.addColumnFromNode=function(e,t,n){var a=new pentaho.pda.dataelement;
a.id=this.getNodeText(e,"id"),a.name=this.getNodeText(e,"name"),a.elementType=this.getNodeText(e,"fieldType"),
a.dataType=this.getNodeText(e,"type"),a.horzizontalAlignment=this.getNodeText(e,"horizontalAlignment"),
a.formatMask=this.getNodeText(e,"formatMask"),a.selectedAggregation=this.getNodeText(e,"selectedAggType"),
a.defaultAggregation=this.getNodeText(e,"defaultAggType"),a.parent=n,a.isQueryElement=!0,
n.addChild(a);for(var o=e.getElementsByTagName("aggTypes"),r=0;r<o.length;r++)a.availableAggregations.push(this.getText(o[r]));
t.addElement(a)},pentaho.pda.MqlHandler.prototype.getNodeText=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(e.childNodes[n].nodeName==t)return this.getText(e.childNodes[n]);
return null},pentaho.pda.MqlHandler.prototype.getNodeTextOfChild=function(e,t,n){
for(var a=0;a<e.childNodes.length;a++)if(e.childNodes[a].nodeName==t)return this.getNodeText(e.childNodes[a],n);
return null},pentaho.pda.MqlHandler.prototype.getText=function(e){return e&&e.firstChild?"undefined"!=typeof e.textContent?e.textContent:e.firstChild.nodeValue:null;
},pentaho.pda.model.mql=function(e,t){pentaho.pda.model.call(this,e),this.categories=new Array,
this.domainId=e.domainId,this.modelId=e.modelId,this.modelName=e.modelName||"",this.modelDescription=e.modelDescription||"",
this.handler=t,this.type="mql"},inheritPrototype(pentaho.pda.model.mql,pentaho.pda.model),
pentaho.pda.model.mql.prototype.discoverModelDetail=function(){var e=this.handler.METADATA_SERVICE_URL+"/loadModel",t="domainId="+encodeURIComponent(this.domainId)+"&modelId="+encodeURIComponent(this.modelId),n=pentahoGet(e,t),a=parseXML(n);
this.categories=[];var o=a.getElementsByTagName("return");if(o&&o.length>0)for(var r=o[0].getElementsByTagName("categories"),i=0;i<r.length;i++){
var l=new pentaho.pda.dataelement;l.dataType=pentaho.pda.Column.DATA_TYPES.NONE,l.elementType=pentaho.pda.Column.ELEMENT_TYPES.CATEGORY,
l.id=this.getNodeText(r[i],"id"),l.name=this.getNodeText(r[i],"name"),l.description=this.getNodeText(r[i],"description"),
l.isQueryElement=!1,this.categories.push(l),this.addElement(l);for(var d=r[i].getElementsByTagName("columns"),s=0;s<d.length;s++){
var p=new pentaho.pda.dataelement;p.id=this.getNodeText(d[s],"id"),p.name=this.getNodeText(d[s],"name"),
p.description=this.getNodeText(d[s],"description"),p.elementType=this.getNodeText(d[s],"fieldType"),
p.dataType=this.getNodeText(d[s],"type"),p.horizontalAlignment=this.getNodeText(d[s],"horizontalAlignment"),
p.formatMask=this.getNodeText(d[s],"formatMask"),p.selectedAggregation=this.getNodeText(d[s],"selectedAggType"),
p.defaultAggregation=this.getNodeText(d[s],"defaultAggType"),p.hiddenForUser=this.getNodeText(d[s],"hiddenForUser"),
p.parent=l,p.isQueryElement=!0,p.category=l,l.addChild(p);for(var u=d[s].getElementsByTagName("aggTypes"),h=0;h<u.length;h++)p.availableAggregations.push(this.getText(u[h]));
this.addElement(p)}}},pentaho.pda.model.mql.prototype.getAllColumns=function(){for(var e=new Array,t=0;t<this.elements.length;t++)this.elements[t].elementType!=pentaho.pda.Column.ELEMENT_TYPES.CATEGORY&&e.push(this.elements[t]);
return e},pentaho.pda.model.mql.prototype.searchColumn=function(e,t,n,a){var o=this.createQuery();
o.addSelectionById(e.id),o.addSortById(e.id,pentaho.pda.Column.SORT_TYPES.ASCENDING);
return t&&o.addConditionById(e.id,pentaho.pda.Column.CONDITION_TYPES.CONTAINS,t,pentaho.pda.Column.OPERATOR_TYPES.OR),
this.submitQuery(o,n,a)},pentaho.pda.model.mql.prototype.getAllValuesForColumn=function(e,t){
return this.searchColumn(e,void 0,t)},pentaho.pda.model.mql.prototype.createQuery=function(){
var e=new pentaho.pda.query.mql(this);return e.setDomainId(this.domainId),e.setModelId(this.modelId),
e},pentaho.pda.model.mql.prototype.submitQuery=function(e,t,n){var a=e.getJson();return this.submit(a,t,n);
},pentaho.pda.model.mql.prototype.submit=function(e,t,n){t||(t=-1);var a=dojo.hitch(this,function(e){
var t=parseXML(e),a=t.getElementsByTagName("return");resultJson=this.getText(a[0]);
var t=JSON.parse(resultJson);return n&&n(t),t});try{var o=this.handler.METADATA_SERVICE_URL+"/doJsonQueryToCdaJson",r="json="+encodeURIComponent(e)+"&rowLimit="+t,i=pentahoGet(o,r,n?a:void 0);
if(!n)return a(i)}catch(l){alert(l.message)}return null},pentaho.pda.model.mql.prototype.submitXmlQuery=function(e,t){
var n=e.serialize();t||(t=-1);try{var a=this.handler.METADATA_SERVICE_URL+"/doXmlQueryToCdaJson",o="xml="+escape(n)+"&rowLimit="+t,r=pentahoGet(a,o),i=parseXML(r),l=i.getElementsByTagName("return");
resultJson=this.getText(l[0]);var i=JSON.parse(resultJson);return i}catch(d){alert(d.message);
}return null},pentaho.pda.model.mql.prototype.parseResultSetXml=function(e){var t=parseXML(e),n=t.getElementsByTagName("rows"),a=t.getElementsByTagName("columnNames"),o=t.getElementsByTagName("columnTypes");
if(!a||0==a.length)return null;a=a[0].getElementsByTagName("names"),o=o[0].getElementsByTagName("columnType");
for(var r=new MetadataQuery.Results,i=new Array,l=new Array,d=0;d<a.length;d++)i.push(a[d].firstChild.nodeValue),
l.push(this.getColumnById(i[i.length-1]));r.columnNames=i,r.columns=l;for(var s=new Array,d=0;d<o.length;d++)s.push(o[d].firstChild.nodeValue);
r.columnTypes=s,r.rows=new Array;for(var d=0;d<n.length;d++){cellNodes=n[d].getElementsByTagName("cell"),
r.rows[d]=new Array;for(var p=0;p<cellNodes.length;p++)if(cellNodes[p].firstChild){
var u=cellNodes[p].firstChild.nodeValue;("decimal"==r.columnTypes[p]||"double"==r.columnTypes[p])&&(u=parseFloat(u)),
r.rows[d].push(u)}else r.rows[d].push("null")}return r},FilterHelper=function(e,t,n,a){
this.filterEditBoxId=t,this.filterColumn=e,this.filterParameterState=n,this.model=a,
this.filterKeyTimeout=null,this.filterId=null,this.searchListElement=null,this.searchListDiv=null,
this.endFilterSelection=function(){this.searchListDiv.style.display="none"},this.handleFilterKeyUp=function(e){
var t=e.keyCode;if(13!=t&&37!=t&&38!=t&&39!=t){if(27==t)return void this.endFilterSelection();
if(40==t)return this.searchListElement.focus(),void(this.searchListElement.selectedIndex=0);
this.filterParameterState.value=document.getElementById(this.filterEditBoxId).value,
this.filterParameterState.defaultValue=this.filterParameterState.value,null!=this.filterColumn&&(null!=this.filterKeyTimeout&&clearTimeout(this.filterKeyTimeout),
this.filterKeyTimeout=setTimeout("filterHelper.searchFilterValues()",500))}},this.filterListKeyUp=function(e){
var t=e.keyCode;if(27==t&&(this.searchListDiv.style.display="none"),38==t){if(this.searchListElement.selectedIndex>0)return;
var n=document.getElementById(this.filterEditBoxId);n.focus(),this.searchListElement.selectedIndex=-1;
}if(13==t){var n=document.getElementById(this.filterEditBoxId);this.selectFilterValue(),
n.focus()}},this.searchFilterValues=function(){null!=this.filterKeyTimeout&&clearTimeout(this.filterKeyTimeout),
this.filterKeyTimeout=null,this.searchListElement.options.length=0;var e=document.getElementById(this.filterEditBoxId).value;
if(""!=e){var n=this.model.searchColumn(this.filterColumn,e);if(n){var a=document.getElementById(t),o=this.findPosition(a);
this.searchListDiv.style.left=""+o.x+"px",this.searchListDiv.style.width=""+a.style.width,
this.searchListDiv.style.top=""+(o.y+parseInt(a.style.height))+"px";for(var r=n.resultset,i=0;i<r.length;i++){
var l=new Option(r[i][0]);this.searchListElement.options[this.searchListElement.options.length]=l,
this.searchListElement.options.length<9&&(this.searchListElement.size=Math.max(this.searchListElement.options.length,2));
}this.searchListDiv.style.display="block"}}},this.findPosition=function(e){for(var t={
x:e.offsetLeft||0,y:e.offsetTop||0};e=e.offsetParent;)t.x+=e.offsetLeft,t.y+=e.offsetTop;
return t},this.selectFilterValue=function(){var e=this.searchListElement.selectedIndex;
if(e>=0){var n=this.searchListElement.options[e].value,a=document.getElementById(t);
a.value=n,this.filterParameterState.value=n,this.filterParameterState.defaultValue=this.filterParameterState.value,
this.filterValueSelected&&this.filterValueSelected(this.filterParameterState),this.searchListDiv.style.display="none";
}}},pentaho.pda.query.mql=function(e){pentaho.pda.query.call(this,e),this.state={
"class":"org.pentaho.common.ui.metadata.model.impl.Query",domainName:null,modelId:null,
disableDistinct:!1,columns:[],defaultParameterMap:null,conditions:[],orders:[],parameters:[]
},this.XML_CHARACTER_MAPPING={"&":"&amp;","<":"&lt;",'"':"&quot;"},this.XML_ILLEGAL_CHARACTERS_PATTERN=/[&<"]/g;
},inheritPrototype(pentaho.pda.query.mql,pentaho.pda.query),pentaho.pda.query.mql.prototype.canQueryReturnData=function(){
return this.state.columns.length>0},pentaho.pda.query.mql.prototype.setDomainId=function(e){
this.state.domainName=e},pentaho.pda.query.mql.prototype.setModelId=function(e){this.state.modelId=e;
},pentaho.pda.query.mql.prototype.prepare=function(){},pentaho.pda.query.mql.prototype.createSelection=function(){
var e={"class":"org.pentaho.common.ui.metadata.model.impl.Column",aggTypes:[],category:null,
defaultAggType:null,fieldType:null,id:null,name:null,selectedAggType:null,type:null
};return e},pentaho.pda.query.mql.prototype.createSort=function(){var e={"class":"org.pentaho.common.ui.metadata.model.impl.Order",
category:null,column:null,orderType:pentaho.pda.Column.SORT_TYPES.ASCENDING};return e;
},pentaho.pda.query.mql.prototype.createCondition=function(){var e={"class":"org.pentaho.common.ui.metadata.model.impl.Condition",
category:null,column:null,operator:null,value:null,combinationType:pentaho.pda.Column.OPERATOR_TYPES.AND,
parameterized:!1,selectedAggType:null};return e},pentaho.pda.query.mql.prototype.createParameter=function(){
var e={"class":"org.pentaho.common.ui.metadata.model.impl.Parameter",column:null,
name:null,type:null,value:null,defaultValue:null};return e},pentaho.pda.query.mql.prototype.addSelectionById=function(e){
var t=this.model.getColumnById(e);if(null!=t){var n=this.createSelection();return n.id=e,
n.category=t.parent.id,n.selectedAggType=n.defaultAggType=t.defaultAggregation,this.addSelection(n),
n}return null},pentaho.pda.query.mql.prototype.addSortById=function(e,t){var n=this.model.getColumnById(e);
if(null!=n){var a=this.createSort();return a.column=e,a.category=n.parent.id,a.orderType=t,
this.addSort(a),a}return null},pentaho.pda.query.mql.prototype.addConditionById=function(e,t,n,a,o,r){
var i=this.model.getColumnById(e);if(null!=i){var l=this.createCondition();return l.column=e,
l.category=i.parent.id,l.operator=t,l.parameterized=!0===o,"object"==typeof n&&n.length?l.value=n:l.value=[n],
l.combinationType=a,r&&i.defaultAggregation!==r&&pentaho.pda.Column.AGG_TYPE_MAP[r]&&(l.selectedAggType=r),
this.addCondition(l),l}return null},pentaho.pda.query.mql.prototype.addParameterById=function(e,t,n,a){
var o=this.model.getColumnById(e);if(null!=o){var r=this.createParameter();r.column=e,
r.name=t,r.type=o.dataType,r.value=n,r.defaultValue=a,void 0==r.defaultValue&&(r.defaultValue=r.value);
}return this.addParameter(r),r},pentaho.pda.query.mql.prototype.couldReturnData=function(){
return this.state.columns.length>0},pentaho.pda.query.mql.prototype.addSelection=function(e){
this.state.columns.push(e)},pentaho.pda.query.mql.prototype.addSort=function(e){this.state.orders.push(e);
},pentaho.pda.query.mql.prototype.addCondition=function(e){this.state.conditions.push(e);
},pentaho.pda.query.mql.prototype.addParameter=function(e){this.state.parameters.push(e);
},pentaho.pda.query.mql.prototype.getJson=function(){return dojo.toJson(this.state);
},pentaho.pda.query.mql.prototype.getQueryStr=function(){return this.getJson()},pentaho.pda.query.mql.prototype.serialize=function(){
var e="";e+="<mql>\n<domain_type>relational</domain_type>\n",e+="<domain_id><![CDATA["+this.model.domainId+"]]></domain_id>\n",
e+="<model_id>"+this.model.modelId+"</model_id>\n",e+="<options>\n",e+="<disable_distinct>"+this.state.disableDistinct+"</disable_distinct>\n",
e+="</options>\n",e+="<parameters>\n";for(var t=0;t<this.state.parameters.length;t++)e+=this.getParameterXML(this.state.parameters[t]);
e+="</parameters>\n",e+="<selections>\n";for(var t=0;t<this.state.columns.length;t++)e+=this.getSelectionXML(this.state.columns[t]);
e+="</selections>\n",e+="<constraints>\n";for(var t=0;t<this.state.conditions.length;t++)e+=0==this.state.conditions[t].value.indexOf("::mql::")?this.getMQLFilterXML(this.state.conditions[t].value.replace("::mql::","")):this.getFilterXML(this.state.conditions[t],this.state.parameters);
e+="</constraints>\n",e+="<orders>\n";for(var t=0;t<this.state.orders.length;t++)e+=this.getSortXML(this.state.orders[t]);
return e+="</orders>\n",e+="</mql>\n"},pentaho.pda.query.mql.prototype.getParameterXML=function(e){
var t="",n=this.model.getColumnById(e.column);t+='<parameter defaultValue="';var a;
return a=null!=e.value?this.getParameterValueString(n,e.value):this.getParameterValueString(n,e.defaultValue),
(n.dataType===pentaho.pda.Column.DATA_TYPES.STRING||n.dataType===pentaho.pda.Column.DATA_TYPES.UNKNOWN)&&(a=this.encodeXmlAttribute(a)||""),
t+=a,t+='" name="'+e.name,t+='" type="'+e.type+'"/>'},pentaho.pda.query.mql.prototype.encodeXmlAttribute=function(e){
if(e){var t=this.XML_CHARACTER_MAPPING;return e.replace(this.XML_ILLEGAL_CHARACTERS_PATTERN,function(e){
return t[e]})}},pentaho.pda.query.mql.prototype.getParameterValueString=function(e,t){
if(null==t||""==t)return"";if(-1!=t.constructor.toString().indexOf("Array")){for(var n="",a=0;a<t.length;a++)a>0&&(n+="|"),
n+=this.getParameterValueString(e,t[a]);return n}return e.dataType==pentaho.pda.Column.DATA_TYPES.DATE?""+t:e.dataType==pentaho.pda.Column.DATA_TYPES.NUMERIC?""+t:e.dataType==pentaho.pda.Column.DATA_TYPES.BOOLEAN?""+t:'"'+t+'"';
},pentaho.pda.query.mql.prototype.getSelectionXML=function(e){if(e&&e.id&&e.category){
var t="";t+="<selection>\n",t+="<table>"+e.category+"</table>\n",t+="<column>"+e.id+"</column>\n";
var n=e.selectedAggType;return n||(n=e.defaultAggType),t+="<aggregation>"+n+"</aggregation>",
t+="</selection>\n"}return""},pentaho.pda.query.mql.prototype.getSortXML=function(e){
if(e){var t="";return t+="<order>\n",t+="<direction>"+e.orderType+"</direction>\n",
t+="<view_id>"+e.category+"</view_id>\n",t+="<column_id>"+e.column+"</column_id>\n",
t+="</order>\n"}},pentaho.pda.query.mql.prototype.getFilterXML=function(e,t){var n="";
return n+="<constraint>\n",n+="<operator>"+e.combinationType+"</operator>\n",n+="<condition><![CDATA["+this.getFilterConditionString(e.column,e.category,e.operator,e.value,e.parameterized,t,e.selectedAggType)+"]]></condition>\n",
n+="</constraint>\n"},pentaho.pda.query.mql.prototype.getMQLFilterXML=function(e){
var t="AND",n="";return n+="<constraint>\n",n+="<operator>"+t+"</operator>\n",n+="<condition><![CDATA["+e+"]]></condition>\n",
n+="</constraint>\n"},pentaho.pda.query.mql.prototype.getFilterConditionString=function(e,t,n,a,o,r,i){
n=n.toUpperCase();var l=this.model.getColumnById(e),d="["+t+"."+e+(i?"."+i:"")+"]",s=-1!=a.constructor.toString().indexOf("Array");
return n==pentaho.pda.Column.CONDITION_TYPES.LIKE?"LIKE("+d+';"%'+this.getFilterValueString(l,a,o,r)+'%")':n!=pentaho.pda.Column.CONDITION_TYPES.EQUAL||s&&1!=a.length?n==pentaho.pda.Column.CONDITION_TYPES.IN||n==pentaho.pda.Column.CONDITION_TYPES.EQUAL&&s?"IN("+d+";"+this.getFilterValueString(l,a,o,r)+")":n==pentaho.pda.Column.CONDITION_TYPES.LESS_THAN?d+" <"+this.getFilterValueString(l,a,o,r):n==pentaho.pda.Column.CONDITION_TYPES.LESS_THAN_OR_EQUAL?d+" <="+this.getFilterValueString(l,a,o,r):n==pentaho.pda.Column.CONDITION_TYPES.MORE_THAN?d+" >"+this.getFilterValueString(l,a,o,r):n==pentaho.pda.Column.CONDITION_TYPES.MORE_THAN_OR_EQUAL?d+" >="+this.getFilterValueString(l,a,o,r):n==pentaho.pda.Column.CONDITION_TYPES.CONTAINS?"CONTAINS("+d+";"+this.getFilterValueString(l,a,o,r)+")":n==pentaho.pda.Column.CONDITION_TYPES.NOT_CONTAINS?"NOT(CONTAINS("+d+";"+this.getFilterValueString(l,a,o,r)+"))":n==pentaho.pda.Column.CONDITION_TYPES.BEGINSWITH?"BEGINSWITH("+d+";"+this.getFilterValueString(l,a,o,r)+")":n==pentaho.pda.Column.CONDITION_TYPES.ENDSWITH?"ENDSWITH("+d+";"+this.getFilterValueString(l,a,o,r)+")":n==pentaho.pda.Column.CONDITION_TYPES.IS_NULL?"ISNA("+d+")":n==pentaho.pda.Column.CONDITION_TYPES.NOT_NULL?"NOT(ISNA("+d+"))":void 0:"EQUALS("+d+";"+this.getFilterValueString(l,a,o,r)+")";
},pentaho.pda.query.mql.prototype.getFilterValueString=function(e,t,n,a){if(null==t)return"";
if(n&&null!=n&&n.length>0){for(var o=0;o<a.length;o++)if(a[o].name===n){var r="[param:"+a[o].name+"]";
return e.dataType==pentaho.pda.Column.DATA_TYPES.DATE&&(r="DATEVALUE("+r+")"),r}throw new Error("unable to find parameter '"+t+"' for condition on column "+e+".");
}if(-1!=t.constructor.toString().indexOf("Array")){for(var i="",o=0;o<t.length;o++)o>0&&(i+=";"),
i+=this.getFilterValueString(e,t[o]);return i}return e.dataType==pentaho.pda.Column.DATA_TYPES.NUMERIC?""+t:e.dataType==pentaho.pda.Column.DATA_TYPES.DATE?'DATEVALUE("'+t+'")':e.dataType==pentaho.pda.Column.DATA_TYPES.BOOLEAN?""+t:'"'+t+'"';
},pentaho.pda.MqlHandler});