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

define("common-data/cda",["common-data/oop"],function(){return pentaho="undefined"==typeof pentaho?{}:pentaho,
pentaho.cda={descriptors:[],discoverDescriptors:function(t){pentaho.cda.descriptors.length>0?t(pentaho.cda.descriptors):pentaho.xhr.execute(CONTEXT_PATH+"/plugin/cda/api/getCdaList",{
async:!0,dataType:"json",type:"GET",complete:function(e){var a,n=JSON.parse(e),i=n.resultset.length;
if(i>0)for(var o=0;i>o;o++)a=n.resultset[o],pentaho.cda.descriptors[o]={name:a[0],
path:a[1]};if("function"!=typeof t)throw new Error("Unrecognized callback function to pentaho.cda.discoverDescriptors");
t(pentaho.cda.descriptors)},error:function(t){throw new Error("unable to get pentaho descriptors");
}})}},pentaho.cda.Descriptor=function(t){this.name=t.name||"Unknown",this.path=t.path||"",
this.datasources=[],this.queries=[]},pentaho.cda.Descriptor.prototype={addDataSource:function(t){
for(var e=0,a=this.datasources.length;a>e;e++)if(this.datasources[e]==t)return;this.datasources.push(t);
},addQuery:function(t){for(var e=0,a=this.queries.length;a>e;e++)if(this.queries[e]==t)return;
this.dataaccesses.push(access)},toXML:function(){var t='<?xml version="1.0" encoding="utf-8"?>';
t+="<CDADescriptor><DataSources>";for(var e=0,a=this.datasources.length;a>e;e++)t+=this.datasources[e].toXML();
t+="</DataSources>";var n;for(e=0,a=this.dataaccesses.length;a>e;e++)n=this.dataaccesses[e],
t+=n.toXML();return t+="</CDADescriptor>"},save:function(t){this.path=t,$.post("content/cda/writeCdaFile",{
path:t,data:this.toXML()},function(t){})},discoverQueries:function(t){var e=this;0==e.queries.length?pentaho.xhr.execute(CONTEXT_PATH+"/plugin/cda/api/listQueries",{
async:!0,dataType:"json",type:"GET",data:{path:e.path,outputType:"json"},complete:function(a){
var n,i,o=JSON.parse(a),s=o.resultset;for(n in s)i=s[n],e.queries.push(new pentaho.cda.Query({
id:i[0],name:i[1]||i[0],type:i[2]},e));t(e.queries)}}):t(e.queries)}},pentaho.cda.Connection=function(t){
this.id=t.id||1,this.type=t.type||"metadata.metadata"},pentaho.cda.MQLConnection=function(t){
pentaho.cda.Connection.call(this,t),this.type="metadata.metadata",this.domain=t.domain,
this.xmi="metadata.xmi"},inheritPrototype(pentaho.cda.MQLConnection,pentaho.cda.Connection),
pentaho.cda.MQLConnection.prototype.toXML=function(){return'<Connection id="'+this.id+'" type="'+this.type+'"><DomainId>'+this.domain+"</DomainId><XmiFile>"+this.xmi+"</XmiFile></Connection>";
},pentaho.cda.DataAccess=function(t){this.id=t.id||1,this.type=t.type||"mql",this.name=t.name||"Unknown",
this.query="",this.access="public",this.cache=!0,this.cacheDuration=1,this.columns=[],
this.parameters=[]},pentaho.cda.DataAccess.prototype={toXML:function(){var t="";return t='<DataAccess id="'+this.id+'" connection="'+this.connection.id+'" type="'+this.type+'" access="'+this.access+'"><Name>'+this.name+"</Name><Query>"+this.query+"</Query></DataAccess>";
},setConnection:function(t){t instanceof pentaho.cda.Connection?this.connection=t:this.connection={};
}},pentaho.cda.Query=function(t,e){if(this.file=e,this.id=t.id||1,this.name=t.name||"",
this.type=t.type||"mql",this.parameters=[],null==t.parameters)try{this.discoverParameters();
}catch(a){}},pentaho.cda.Query.prototype={discoverParameters:function(t){var e=this;
0==this.parameters.length?$.getJSON(CONTEXT_PATH+"/plugin/cda/api/listParameters",{
path:e.file.path,dataAccessId:this.id},function(a){for(var n=0,i=a.resultset.length;i>n;n++){
var o=a.resultset[n];e.parameters[n]={id:o[0],name:o[1],type:o[2]}}"function"==typeof t&&t(e.parameters);
}):t(this.parameters)},execute:function(t){$.getJSON(CONTEXT_PATH+"/plugin/cda/api/doQuery",{
path:this.file.path,dataAccessId:this.id},function(e){"function"==typeof t&&t(e)});
},addColumn:function(t){this.columns.push(t)},removeColumn:function(t){this.column.splice(t,1);
}},pentaho.cda});