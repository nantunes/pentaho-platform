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

define("common-data/models-svc",["common-data/oop","common-data/controller","dojo/request"],function(e,t,n){
return pentaho.pda.SvcHandler=function(e){pentaho.pda.Handler.call(this,e),this.type=pentaho.pda.SOURCE_TYPE_SVC,
this.SERVICE_URL=CONTEXT_PATH+"content/MetadataModelsSvc"},inheritPrototype(pentaho.pda.SvcHandler,pentaho.pda.Handler),
pentaho.pda.SvcHandler.prototype.getSources=function(e,t){t=t||{};var a,o=t.filter,r=0,i=0;
if(this.sources.length>0)if(null==o)for(var r=0,i=this.sources.length;i>r;r++)e(this.sources[r]);else for(var r=0,i=this.sources.length;i>r;r++){
a=this.sources[r];try{a[o.property]==o.value&&e(a)}catch(l){}}else{var s,d=this.SERVICE_URL+"?action=listmodels",p=t.context,u="domainName=&"+(p?"context="+p:"");
n.post(d,{query:u,sync:!0,handleAs:"json",headers:{"Content-type":"application/x-www-form-urlencoded",
"Content-length":u.length,Connection:"close"}}).then(function(e){s=e});for(var h=0;h<s.length;h++)model=this.addModelInfoFromNode(s[h]),
this.sources.push(model),null==o?e(model):model[o.property]==o.value&&e(a)}},pentaho.pda.SvcHandler.prototype.newModelFromState=function(e){
var t=e;return t.modelId=e.id,t.type=t.providerId,t},pentaho.pda.SvcHandler.prototype.addModelInfoFromNode=function(e){
return new pentaho.pda.model.svc(this.newModelFromState(e),this)},pentaho.pda.model.svc=function(e,t){
pentaho.pda.model.call(this,e),this.categories=new Array,this.id=e.id,this.modelId=e.modelId,
this.modelName=e.modelName||"",this.modelDescription=e.modelDescription||"",this.handler=t,
this.type="svc",this.state=e},inheritPrototype(pentaho.pda.model.svc,pentaho.pda.model),
pentaho.pda.model.svc.prototype.discoverModelDetail=function(){var e=this.handler.SERVICE_URL+"?action=getmodel&id="+escape(this.id),t=pentahoPost(e,"",null,"text/text");
this.state=JSON.parse(t),this.categories=this.state.categories,this.capabilities=this.state.capabilities,
null==this.capabilities&&(this.capabilities={}),this.elements=this.state.elements;
},pentaho.pda.model.svc.prototype.getAllColumns=function(){for(var e=new Array,t=0;t<this.elements.length;t++)this.elements[t].isQueryElement&&e.push(this.elements[t]);
return e},pentaho.pda.model.svc.prototype.searchColumn=function(e,t,n,a){var o=this.createQuery();
o.addSelectionById(e.id),o.addSortById(e.id,pentaho.pda.Column.SORT_TYPES.ASCENDING);
return t&&o.addConditionById(e.id,pentaho.pda.Column.CONDITION_TYPES.CONTAINS,t,pentaho.pda.Column.OPERATOR_TYPES.OR),
this.submitQuery(o,n,a)},pentaho.pda.model.svc.prototype.getAllValuesForColumn=function(e,t){
return this.searchColumn(e,void 0,t)},pentaho.pda.model.svc.prototype.createQuery=function(){
var e=new pentaho.pda.query.svc(this);return e.setSourceId(this.id),e},pentaho.pda.model.svc.prototype.createQueryFromJson=function(e){
var t,n=new pentaho.pda.query.svc(this);return t=e["class"]?e:JSON.parse(e),n.setSourceId(this.id),
n.setState(t),n},pentaho.pda.model.svc.prototype.submitQuery=function(e,t,n){var a=e.getJson();
return this.submit(a,t,n)},pentaho.pda.model.svc.prototype.submit=function(e,t,n){
t||(t=-1);var a=dojo.hitch(this,function(e){var t=JSON.parse(e);return result=new pentaho.DataTable(t),
n&&n(result),result});try{var o=this.handler.SERVICE_URL,r="action=query&query="+e,i=pentahoPost(o,r,n?a:void 0,"text/text");
if(!n)return a(i)}catch(l){alert(l.message)}return null},FilterHelper=function(e,t,n,a){
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
}}},pentaho.pda.query.svc=function(e){pentaho.pda.query.call(this,e),this.state={
"class":"org.pentaho.metadata.model.thin.Query",elements:[],conditions:[],defaultParameterMap:null,
disableDistinct:null,orders:[],parameters:[],sourceId:""}},inheritPrototype(pentaho.pda.query.svc,pentaho.pda.query),
pentaho.pda.query.svc.prototype.setState=function(e){this.state=e},pentaho.pda.query.svc.prototype.canQueryReturnData=function(){
return this.state.elements.length>0},pentaho.pda.query.svc.prototype.setSourceId=function(e){
this.state.sourceId=e},pentaho.pda.query.svc.prototype.prepare=function(){},pentaho.pda.query.svc.prototype.createSelection=function(){
var e={"class":"org.pentaho.metadata.model.thin.Element",elementType:null,id:"time",
name:null,selectedAggregation:null,dataType:null};return e},pentaho.pda.query.svc.prototype.createSort=function(){
var e={"class":"org.pentaho.metadata.model.thin.Order",parentId:null,elementId:null,
orderType:pentaho.pda.Column.SORT_TYPES.ASCENDING};return e},pentaho.pda.query.svc.prototype.createCondition=function(){
var e={"class":"org.pentaho.common.ui.metadata.model.impl.Condition",parentId:null,
elementId:null,operator:null,value:null,combinationType:pentaho.pda.Column.OPERATOR_TYPES.AND,
parameterized:!1,selectedAggType:null};return e},pentaho.pda.query.svc.prototype.createParameter=function(){
var e={"class":"org.pentaho.common.ui.metadata.model.impl.Parameter",elementId:null,
name:null,type:null,value:null,defaultValue:null};return e},pentaho.pda.query.svc.prototype.addSelectionById=function(e){
var t=this.model.getColumnById(e);if(null!=t){var n=this.createSelection();return n.id=e,
n.parentId=t.parentId,n.selectedAggregation=n.defaultAggType=t.defaultAggregation,
this.addSelection(n),n}return null},pentaho.pda.query.svc.prototype.addSortById=function(e,t){
var n=this.model.getColumnById(e);if(null!=n){var a=this.createSort();return a.elementId=e,
a.parentId=n.parentId,a.orderType=t,this.addSort(a),a}return null},pentaho.pda.query.svc.prototype.addConditionById=function(e,t,n,a,o,r){
var i=this.model.getColumnById(e);if(null!=i){var l=this.createCondition();return l.elementId=e,
l.parentId=i.parentId,l.operator=t,l.parameterized=!0===o,"object"==typeof n&&n.length?l.value=n:l.value=[n],
l.combinationType=a,r&&i.defaultAggregation!==r&&pentaho.pda.Column.AGG_TYPE_MAP[r]&&(l.selectedAggType=r),
this.addCondition(l),l}return null},pentaho.pda.query.svc.prototype.addParameterById=function(e,t,n,a){
var o=this.model.getColumnById(e);if(null!=o){var r=this.createParameter();r.elementId=e,
r.name=t,r.type=o.dataType,r.value=n,r.defaultValue=a,void 0==r.defaultValue&&(r.defaultValue=r.value);
}return this.addParameter(r),r},pentaho.pda.query.svc.prototype.couldReturnData=function(){
return this.state.elements.length>0},pentaho.pda.query.svc.prototype.addSelection=function(e){
this.state.elements.push(e)},pentaho.pda.query.svc.prototype.addSort=function(e){
this.state.orders.push(e)},pentaho.pda.query.svc.prototype.addCondition=function(e){
this.state.conditions.push(e)},pentaho.pda.query.svc.prototype.addParameter=function(e){
this.state.parameters.push(e)},pentaho.pda.query.svc.prototype.getJson=function(){
return dojo.toJson(this.state)},pentaho.pda.query.svc.prototype.getQueryStr=function(){
return this.getJson()},pentaho.pda.query.svc.prototype.getParameterValueString=function(e,t){
if(null==t||""==t)return"";if(-1!=t.constructor.toString().indexOf("Array")){for(var n="",a=0;a<t.length;a++)a>0&&(n+="|"),
n+=this.getParameterValueString(e,t[a]);return n}return e.dataType==pentaho.pda.Column.DATA_TYPES.DATE?""+t:e.dataType==pentaho.pda.Column.DATA_TYPES.NUMERIC?""+t:e.dataType==pentaho.pda.Column.DATA_TYPES.BOOLEAN?""+t:'"'+t+'"';
},pentaho.pda.query.svc.prototype.getFilterConditionString=function(e,t,n,a,o,r,i){
n=n.toUpperCase();var l=this.model.getColumnById(e),s="["+t+"."+e+(i?"."+i:"")+"]",d=-1!=a.constructor.toString().indexOf("Array");
return n==pentaho.pda.Column.CONDITION_TYPES.LIKE?"LIKE("+s+';"%'+this.getFilterValueString(l,a,o,r)+'%")':n!=pentaho.pda.Column.CONDITION_TYPES.EQUAL||d&&1!=a.length?n==pentaho.pda.Column.CONDITION_TYPES.EQUAL&&d?"IN("+s+";"+this.getFilterValueString(l,a,o,r)+")":n==pentaho.pda.Column.CONDITION_TYPES.LESS_THAN?s+" <"+this.getFilterValueString(l,a,o,r):n==pentaho.pda.Column.CONDITION_TYPES.LESS_THAN_OR_EQUAL?s+" <="+this.getFilterValueString(l,a,o,r):n==pentaho.pda.Column.CONDITION_TYPES.MORE_THAN?s+" >"+this.getFilterValueString(l,a,o,r):n==pentaho.pda.Column.CONDITION_TYPES.MORE_THAN_OR_EQUAL?s+" >="+this.getFilterValueString(l,a,o,r):n==pentaho.pda.Column.CONDITION_TYPES.CONTAINS?"CONTAINS("+s+";"+this.getFilterValueString(l,a,o,r)+")":n==pentaho.pda.Column.CONDITION_TYPES.NOT_CONTAINS?"NOT(CONTAINS("+s+";"+this.getFilterValueString(l,a,o,r)+"))":n==pentaho.pda.Column.CONDITION_TYPES.BEGINSWITH?"BEGINSWITH("+s+";"+this.getFilterValueString(l,a,o,r)+")":n==pentaho.pda.Column.CONDITION_TYPES.ENDSWITH?"ENDSWITH("+s+";"+this.getFilterValueString(l,a,o,r)+")":n==pentaho.pda.Column.CONDITION_TYPES.IS_NULL?"ISNA("+s+")":n==pentaho.pda.Column.CONDITION_TYPES.NOT_NULL?"NOT(ISNA("+s+"))":void 0:"EQUALS("+s+";"+this.getFilterValueString(l,a,o,r)+")";
},pentaho.pda.query.svc.prototype.getFilterValueString=function(e,t,n,a){if(null==t)return"";
if(n){for(var o=0;o<a.length;o++)if(a[o].name===t[0]){var r="[param:"+a[o].name+"]";
return e.dataType==pentaho.pda.Column.DATA_TYPES.DATE&&(r="DATEVALUE("+r+")"),r}throw new Error("unable to find parameter '"+t+"' for condition on column "+e+".");
}if(-1!=t.constructor.toString().indexOf("Array")){for(var i="",o=0;o<t.length;o++)o>0&&(i+=";"),
i+=this.getFilterValueString(e,t[o]);return i}return e.dataType==pentaho.pda.Column.DATA_TYPES.NUMERIC?""+t:e.dataType==pentaho.pda.Column.DATA_TYPES.DATE?'DATEVALUE("'+t+'")':e.dataType==pentaho.pda.Column.DATA_TYPES.BOOLEAN?""+t:'"'+t+'"';
},pentaho.pda.SvcHandler});