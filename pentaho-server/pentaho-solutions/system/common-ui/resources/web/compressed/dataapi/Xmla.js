/*!
Copyright 2009,2010 Roland Bouman

This is xmla4js - a stand-alone, cross-browser javascript library for working with "XML for Analysis".
XML for Analysis (XML/A) is a vendor-neutral industry-standard protocol for OLAP services over HTTP.
xmla4js enables web-browser-based analytical business intelligence applications.

This file contains human-readable javascript source along with the YUI Doc compatible annotations.
Note: some portions of the API documentation were adopted from the original XML/A specification.
I believe that this constitutes fair use, but if you have reason to believe that the documentation
violates any copyright, or is otherwise incompatible with the LGPL license please contact me.

Include this in your web-pages for debug and development purposes only.
For production purposes, consider using the minified/obfuscated versions in the /js directory.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

Also available (dual-licensed) under the Apache 2.0 license - http://www.apache.org/licenses/LICENSE-2.0.html
*/

define("common-data/Xmla",[],function(){var e;return function(){function t(t){var r,s=!1,n=function(){
switch(s=!0,r.readyState){case 0:t.aborted(r);break;case 4:200===r.status?t.complete(r):t.error(e.Exception._newError("HTTP_ERROR","_ajax",t));
}};return r=H?new ActiveXObject("MSXML2.XMLHTTP.3.0"):new XMLHttpRequest,t.username&&t.password?r.open("POST",t.url,t.async,t.username,t.password):r.open("POST",t.url,t.async),
r.onreadystatechange=n,r.setRequestHeader("Accept","text/xml, application/xml"),r.setRequestHeader("Content-Type","text/xml"),
r.send(t.data),t.async||s||n.call(r),r}function r(e){return"undefined"==typeof e}
function s(e){return"number"==typeof e}function n(e){return e.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}function i(e){if(e.innerText)return e.innerText;if(e.textContent)return e.textContent;
if(e.normalize)return e.normalize(),e.firstChild?e.firstChild.data:null;for(var t="",r=e.childNodes,s=r.length,n=0;s>n;n+=1)t+=r.item(n).data;
return t}function E(e,t,r,s){s||(s="");var i,E,o,_,a,u="\n"+s+"<"+e+">";if(r){u+="\n"+s+" <"+t+">";
for(_ in r)if(r.hasOwnProperty(_)){if(a=r[_],u+="\n"+s+"  <"+_+">","array"==typeof a)for(E=0,
i=a.length;i>E;E+=1)o=a[E],u+="<Value>"+n(o)+"</Value>";else u+=n(a);u+="</"+_+">";
}u+="\n"+s+" </"+t+">"}return u+="\n"+s+"</"+e+">"}function o(t){var r=t.method,s=null,i='<?xml version="1.0" encoding="UTF-8"?>\n<'+D+":Envelope "+C+" "+O+">\n <"+D+":Body>\n  <"+r+" "+d+" "+O+">";
switch(r){case e.METHOD_DISCOVER:t.requestType?i+="\n   <"+B+">"+t.requestType+"</"+B+">"+E("Restrictions","RestrictionList",t.restrictions,"   ")+E("Properties","PropertyList",t.properties,"   "):s=e.Exception._newError("MISSING_REQUEST_TYPE","Xmla._getXmlaSoapMessage",t);
break;case e.METHOD_EXECUTE:t.statement?i+="\n   <Command>\n    <Statement>"+n(t.statement)+"</Statement>\n   </Command>"+E("Properties","PropertyList",t.properties,"   "):s=e.Exception._newError("MISSING_REQUEST_TYPE","Xmla._getXmlaSoapMessage",t);
}return null!==s&&s._throw(),i+="\n  </"+r+">\n </"+D+":Body>\n</"+D+":Envelope>";
}function _(e,t,s){t&&!e&&(e={});for(var n in t)t.hasOwnProperty(n)&&(s||r(e[n]))&&(e[n]=t[n]);
return e}function a(e,t){var r,s,n=y(e,P,L,"complexType"),i=n.length;for(s=0;i>s;s+=1)if(r=n.item(s),
r.getAttribute("name")===t)return r;return null}function u(e){return"true"===e?!0:!1;
}function c(e){return parseInt(e,10)}function l(e){return parseFloat(e,10)}function S(e){
return e}function R(e){return Date.parse(e)}function h(e){return e}function T(e,t){
for(var r,s=[],n=e.length,E=0;n>E;E+=1)r=e.item(E),s.push(t(i(r)));return s}function A(e){
var t={};switch(e){case"xsd:boolean":t.func=u,t.jsType="boolean";break;case"xsd:decimal":
case"xsd:double":case"xsd:float":t.func=l,t.jsType="number";break;case"xsd:int":case"xsd:integer":
case"xsd:nonPositiveInteger":case"xsd:negativeInteger":case"xsd:nonNegativeInteger":
case"xsd:positiveInteger":case"xsd:short":case"xsd:byte":case"xsd:long":case"xsd:unsignedLong":
case"xsd:unsignedInt":case"xsd:unsignedShort":case"xsd:unsignedByte":t.func=c,t.jsType="number";
break;case"xsd:string":t.func=S,t.jsType="string";break;case"xsd:dateTime":t.func=R,
t.jsType="object";break;case"Restrictions":t.func=h,t.jsType="object";break;default:
t.func=S,t.jsType="object"}return t}function M(e){var t=i(e),r=e.getAttribute("type");
return converter,r?(converter=A(r),converter?converter.func(t):t):t}var N="http://schemas.xmlsoap.org/soap/",p=N+"envelope/",D="SOAP-ENV",C="xmlns:"+D+'="'+p+'"',O=D+':encodingStyle="'+N+'encoding/"',I="urn:schemas-microsoft-com:",f=I+"xml-analysis",d='xmlns="'+f+'"',m="sql",x=I+"xml-sql",P="http://www.w3.org/2001/XMLSchema",L="xsd",w="http://www.w3.org/2001/XMLSchema-instance",v="xsi",U=f+":rowset",V=f+":mddataset",H=window.ActiveXObject?!0:!1,y=document.getElementsByTagNameNS?function(e,t,r,s){
return e.getElementsByTagNameNS(t,s)}:function(e,t,r,s){return r?e.getElementsByTagName(r+":"+s):e.getElementsByTagName(s);
},g=document.documentElement.getAttributeNS?function(e,t,r,s){return e.getAttributeNS(t,s);
}:function(e,t,r,s){return r?e.getAttribute(r+":"+s):e.getAttribute(s)},B="RequestType";
e=function(t){return this.listeners={},this.listeners[e.EVENT_REQUEST]=[],this.listeners[e.EVENT_SUCCESS]=[],
this.listeners[e.EVENT_ERROR]=[],this.listeners[e.EVENT_DISCOVER]=[],this.listeners[e.EVENT_DISCOVER_SUCCESS]=[],
this.listeners[e.EVENT_DISCOVER_ERROR]=[],this.listeners[e.EVENT_EXECUTE]=[],this.listeners[e.EVENT_EXECUTE_SUCCESS]=[],
this.listeners[e.EVENT_EXECUTE_ERROR]=[],this.options=_(_({},e.defaultOptions,!0),t,!0),
this},e.defaultOptions={requestTimeout:3e4,async:!1},e.METHOD_DISCOVER="Discover",
e.METHOD_EXECUTE="Execute";var G="DISCOVER_",b="MDSCHEMA_",Y="DBSCHEMA_";e.DISCOVER_DATASOURCES=G+"DATASOURCES",
e.DISCOVER_PROPERTIES=G+"PROPERTIES",e.DISCOVER_SCHEMA_ROWSETS=G+"SCHEMA_ROWSETS",
e.DISCOVER_ENUMERATORS=G+"ENUMERATORS",e.DISCOVER_KEYWORDS=G+"KEYWORDS",e.DISCOVER_LITERALS=G+"LITERALS",
e.DBSCHEMA_CATALOGS=Y+"CATALOGS",e.DBSCHEMA_COLUMNS=Y+"COLUMNS",e.DBSCHEMA_PROVIDER_TYPES=Y+"PROVIDER_TYPES",
e.DBSCHEMA_SCHEMATA=Y+"SCHEMATA",e.DBSCHEMA_TABLES=Y+"TABLES",e.DBSCHEMA_TABLES_INFO=Y+"TABLES_INFO",
e.MDSCHEMA_ACTIONS=b+"ACTIONS",e.MDSCHEMA_CUBES=b+"CUBES",e.MDSCHEMA_DIMENSIONS=b+"DIMENSIONS",
e.MDSCHEMA_FUNCTIONS=b+"FUNCTIONS",e.MDSCHEMA_HIERARCHIES=b+"HIERARCHIES",e.MDSCHEMA_LEVELS=b+"LEVELS",
e.MDSCHEMA_MEASURES=b+"MEASURES",e.MDSCHEMA_MEMBERS=b+"MEMBERS",e.MDSCHEMA_PROPERTIES=b+"PROPERTIES",
e.MDSCHEMA_SETS=b+"SETS",e.EVENT_REQUEST="request",e.EVENT_SUCCESS="success",e.EVENT_ERROR="error",
e.EVENT_EXECUTE="execute",e.EVENT_EXECUTE_SUCCESS="executesuccess",e.EVENT_EXECUTE_ERROR="executeerror",
e.EVENT_DISCOVER="discover",e.EVENT_DISCOVER_SUCCESS="discoversuccess",e.EVENT_DISCOVER_ERROR="discovererror",
e.EVENT_GENERAL=[e.EVENT_REQUEST,e.EVENT_SUCCESS,e.EVENT_ERROR],e.EVENT_DISCOVER_ALL=[e.EVENT_DISCOVER,e.EVENT_DISCOVER_SUCCESS,e.EVENT_DISCOVER_ERROR],
e.EVENT_EXECUTE_ALL=[e.EVENT_EXECUTE,e.EVENT_EXECUTE_SUCCESS,e.EVENT_EXECUTE_ERROR],
e.EVENT_ALL=[].concat(e.EVENT_GENERAL,e.EVENT_DISCOVER_ALL,e.EVENT_EXECUTE_ALL),e.PROP_DATASOURCEINFO="DataSourceInfo",
e.PROP_CATALOG="Catalog",e.PROP_CUBE="Cube",e.PROP_FORMAT="Format",e.PROP_FORMAT_TABULAR="Tabular",
e.PROP_FORMAT_MULTIDIMENSIONAL="Multidimensional",e.PROP_AXISFORMAT="AxisFormat",
e.PROP_AXISFORMAT_TUPLE="TupleFormat",e.PROP_AXISFORMAT_CLUSTER="ClusterFormat",e.PROP_AXISFORMAT_CUSTOM="CustomFormat",
e.PROP_CONTENT="Content",e.PROP_CONTENT_DATA="Data",e.PROP_CONTENT_NONE="None",e.PROP_CONTENT_SCHEMA="Schema",
e.PROP_CONTENT_SCHEMADATA="SchemaData",e.prototype={listeners:null,soapMessage:null,
response:null,responseText:null,responseXML:null,setOptions:function(e){_(this.options,e,!0);
},addListener:function(t){var r=t.events;r||e.Exception._newError("NO_EVENTS_SPECIFIED","Xmla.addListener",t)._throw(),
"string"==typeof r&&(r="all"===r?e.EVENT_ALL:r.split(",")),r instanceof Array||e.Exception._newError("WRONG_EVENTS_FORMAT","Xmla.addListener",t)._throw();
for(var s,n,i=r.length,E=0;i>E;E+=1)s=r[E].replace(/\s+/g,""),n=this.listeners[s],
n||e.Exception._newError("UNKNOWN_EVENT","Xmla.addListener",t)._throw(),"function"==typeof t.handler?(t.scope||(t.scope=window),
n.push(t)):e.Exception._newError("INVALID_EVENT_HANDLER","Xmla.addListener",t)._throw();
},_fireEvent:function(t,r,s){var n=this.listeners[t];n||e.Exception._newError("UNKNOWN_EVENT","Xmla._fireEvent",t)._throw();
var i=n.length,E=!0;if(i){for(var o,_,a=0;i>a;a+=1)if(o=n[a],_=o.handler.call(o.scope,t,r,this),
s&&_===!1){E=!1;break}}else"error"===t&&r.exception._throw();return E},request:function(s){
var n,i=this;this.response=null,this.responseText=null,this.responseXML=null,s.url||(this.options.url?s.url=this.options.url:(n=e.Exception._newError("MISSING_URL","Xmla.request",s),
n._throw())),s.properties=_(s.properties,this.options.properties,!1),s.restrictions=_(s.restrictions,this.options.restrictions,!1),
r(s.async)&&!r(this.options.async)&&(s.async=this.options.async),r(s.requestTimeout)&&!r(this.options.requestTimeout)&&(s.requestTimeout=this.options.requestTimeout),
!s.username&&this.options.username&&(s.username=this.options.username),!s.password&&this.options.password&&(s.password=this.options.password);
var E=o(s);this.soapMessage=E;var a,u={async:s.async,timeout:s.requestTimeout,data:E,
error:function(e){s.exception=e,i._requestError(s)},complete:function(e){s.xhr=e,
i._requestSuccess(s)},url:s.url};return s.username&&(u.username=s.username),s.password&&(u.password=s.password),
this._fireEvent(e.EVENT_REQUEST,s,!0)&&(s.method==e.METHOD_DISCOVER&&this._fireEvent(e.EVENT_DISCOVER,s)||s.method==e.METHOD_EXECUTE&&this._fireEvent(e.EVENT_EXECUTE,s))&&(a=t(u)),
this.response},_requestError:function(e){this._fireEvent("error",e)},_requestSuccess:function(t){
var r=t.xhr;this.responseXML=r.responseXML,this.responseText=r.responseText;var s=t.method,n=y(this.responseXML,p,D,"Fault");
if(n.length){switch(n=n.item(0),t.exception=new e.Exception(e.Exception.TYPE_ERROR,n.getElementsByTagName("faultcode").item(0).childNodes.item(0).data,n.getElementsByTagName("faultstring").item(0).childNodes.item(0).data,null,"_requestSuccess",t),
s){case e.METHOD_DISCOVER:this._fireEvent(e.EVENT_DISCOVER_ERROR,t);break;case e.METHOD_EXECUTE:
this._fireEvent(e.EVENT_EXECUTE_ERROR,t)}this._fireEvent(e.EVENT_ERROR,t)}else{switch(s){
case e.METHOD_DISCOVER:var i=new e.Rowset(this.responseXML,t.requestType);t.rowset=i,
this.response=i,this._fireEvent(e.EVENT_DISCOVER_SUCCESS,t);break;case e.METHOD_EXECUTE:
var E,o=null,_=null,a=t.properties[e.PROP_FORMAT];switch(a){case e.PROP_FORMAT_TABULAR:
E=o=new e.Rowset(this.responseXML);break;case e.PROP_FORMAT_MULTIDIMENSIONAL:E=_=new e.Dataset(this.responseXML);
}t.resultset=o,t.dataset=_,this.response=E,this._fireEvent(e.EVENT_EXECUTE_SUCCESS,t);
}this._fireEvent(e.EVENT_SUCCESS,t)}},execute:function(t){var r=t.properties;r||(r={},
t.properties=r),_(r,this.options.properties,!1),r[e.PROP_CONTENT]||(r[e.PROP_CONTENT]=e.PROP_CONTENT_SCHEMADATA),
r[e.PROP_FORMAT]||(t.properties[e.PROP_FORMAT]=e.PROP_FORMAT_MULTIDIMENSIONAL);var s=_(t,{
method:e.METHOD_EXECUTE},!0);return this.request(s)},executeTabular:function(t){return t.properties||(t.properties={}),
t.properties[e.PROP_FORMAT]=e.PROP_FORMAT_TABULAR,this.execute(t)},executeMultiDimensional:function(t){
return t.properties||(t.properties={}),t.properties[e.PROP_FORMAT]=e.PROP_FORMAT_MULTIDIMENSIONAL,
this.execute(t)},discover:function(t){var r=_(t,{method:e.METHOD_DISCOVER},!0);return r.requestType||(r.requestType=this.options.requestType),
this.request(r)},discoverDataSources:function(t){var r=_(t,{requestType:e.DISCOVER_DATASOURCES
},!0);return this.discover(r)},discoverProperties:function(t){var r=_(t,{requestType:e.DISCOVER_PROPERTIES
},!0);return this.discover(r)},discoverSchemaRowsets:function(t){var r=_(t,{requestType:e.DISCOVER_SCHEMA_ROWSETS
},!0);return this.discover(r)},discoverEnumerators:function(t){var r=_(t,{requestType:e.DISCOVER_ENUMERATORS
},!0);return this.discover(r)},discoverKeywords:function(t){var r=_(t,{requestType:e.DISCOVER_KEYWORDS
},!0);return this.discover(r)},discoverLiterals:function(t){var r=_(t,{requestType:e.DISCOVER_LITERALS
},!0);return this.discover(r)},discoverDBCatalogs:function(t){var r=_(t,{requestType:e.DBSCHEMA_CATALOGS
},!0);return this.discover(r)},discoverDBColumns:function(t){var r=_(t,{requestType:e.DBSCHEMA_COLUMNS
},!0);return this.discover(r)},discoverDBProviderTypes:function(t){var r=_(t,{requestType:e.DBSCHEMA_PROVIDER_TYPES
},!0);return this.discover(r)},discoverDBSchemata:function(t){var r=_(t,{requestType:e.DBSCHEMA_SCHEMATA
},!0);return this.discover(r)},discoverDBTables:function(t){var r=_(t,{requestType:e.DBSCHEMA_TABLES
},!0);return this.discover(r)},discoverDBTablesInfo:function(t){var r=_(t,{requestType:e.DBSCHEMA_TABLES_INFO
},!0);return this.discover(r)},discoverMDActions:function(t){var r=_(t,{requestType:e.MDSCHEMA_ACTIONS
},!0);return this.discover(r)},discoverMDCubes:function(t){var r=_(t,{requestType:e.MDSCHEMA_CUBES
},!0);return this.discover(r)},discoverMDDimensions:function(t){var r=_(t,{requestType:e.MDSCHEMA_DIMENSIONS
},!0);return this.discover(r)},discoverMDFunctions:function(t){var r=_(t,{requestType:e.MDSCHEMA_FUNCTIONS
},!0);return this.discover(r)},discoverMDHierarchies:function(t){var r=_(t,{requestType:e.MDSCHEMA_HIERARCHIES
},!0);return this.discover(r)},discoverMDLevels:function(t){var r=_(t,{requestType:e.MDSCHEMA_LEVELS
},!0);return this.discover(r)},discoverMDMeasures:function(t){var r=_(t,{requestType:e.MDSCHEMA_MEASURES
},!0);return this.discover(r)},discoverMDMembers:function(t){var r=_(t,{requestType:e.MDSCHEMA_MEMBERS
},!0);return this.discover(r)},discoverMDProperties:function(t){var r=_(t,{requestType:e.MDSCHEMA_PROPERTIES
},!0);return this.discover(r)},discoverMDSets:function(t){var r=_(t,{requestType:e.MDSCHEMA_SETS
},!0);return this.discover(r)}},e.Rowset=function(e,t){return this._node=e,this._type=t,
this._initData(),this},e.Rowset.MD_DIMTYPE_UNKNOWN=0,e.Rowset.MD_DIMTYPE_TIME=1,e.Rowset.MD_DIMTYPE_MEASURE=2,
e.Rowset.MD_DIMTYPE_OTHER=3,e.Rowset.MD_DIMTYPE_QUANTITATIVE=5,e.Rowset.MD_DIMTYPE_ACCOUNTS=6,
e.Rowset.MD_DIMTYPE_CUSTOMERS=7,e.Rowset.MD_DIMTYPE_PRODUCTS=8,e.Rowset.MD_DIMTYPE_SCENARIO=9,
e.Rowset.MD_DIMTYPE_UTILIY=10,e.Rowset.MD_DIMTYPE_CURRENCY=11,e.Rowset.MD_DIMTYPE_RATES=12,
e.Rowset.MD_DIMTYPE_CHANNEL=13,e.Rowset.MD_DIMTYPE_PROMOTION=14,e.Rowset.MD_DIMTYPE_ORGANIZATION=15,
e.Rowset.MD_DIMTYPE_BILL_OF_MATERIALS=16,e.Rowset.MD_DIMTYPE_GEOGRAPHY=17,e.Rowset.MD_STRUCTURE_FULLYBALANCED=0,
e.Rowset.MD_STRUCTURE_RAGGEDBALANCED=1,e.Rowset.MD_STRUCTURE_UNBALANCED=2,e.Rowset.MD_STRUCTURE_NETWORK=3,
e.Rowset.MD_USER_DEFINED=1,e.Rowset.MD_SYSTEM_ENABLED=2,e.Rowset.MD_SYSTEM_INTERNAL=4,
e.Rowset.MDMEMBER_TYPE_REGULAR=1,e.Rowset.MDMEMBER_TYPE_ALL=2,e.Rowset.MDMEMBER_TYPE_FORMULA=3,
e.Rowset.MDMEMBER_TYPE_MEASURE=4,e.Rowset.MDMEMBER_TYPE_UNKNOWN=0,e.Rowset.KEYS={},
e.Rowset.KEYS[e.DBSCHEMA_CATALOGS]=["CATALOG_NAME"],e.Rowset.KEYS[e.DBSCHEMA_COLUMNS]=["TABLE_CATALOG","TABLE_NAME","COLUMN_NAME"],
e.Rowset.KEYS[e.DBSCHEMA_PROVIDER_TYPES]=["TYPE_NAME"],e.Rowset.KEYS[e.DBSCHEMA_SCHEMATA]=["CATALOG_NAME","SCHEMA_NAME"],
e.Rowset.KEYS[e.DBSCHEMA_TABLES]=["TABLE_CATALOG","TABLE_NAME"],e.Rowset.KEYS[e.DBSCHEMA_TABLES_INFO]=["TABLE_CATALOG","TABLE_NAME"],
e.Rowset.KEYS[e.DISCOVER_DATASOURCES]=["DataSourceName"],e.Rowset.KEYS[e.DISCOVER_ENUMERATORS]=["EnumName","ElementName"],
e.Rowset.KEYS[e.DISCOVER_KEYWORDS]=["Keyword"],e.Rowset.KEYS[e.DISCOVER_LITERALS]=["LiteralName"],
e.Rowset.KEYS[e.DISCOVER_PROPERTIES]=["PropertyName"],e.Rowset.KEYS[e.DISCOVER_SCHEMA_ROWSETS]=["SchemaName"],
e.Rowset.KEYS[e.MDSCHEMA_ACTIONS]=["CATALOG_NAME","CUBE_NAME","ACTION_NAME"],e.Rowset.KEYS[e.MDSCHEMA_CUBES]=["CATALOG_NAME","CUBE_NAME"],
e.Rowset.KEYS[e.MDSCHEMA_DIMENSIONS]=["CATALOG_NAME","CUBE_NAME","DIMENSION_UNIQUE_NAME"],
e.Rowset.KEYS[e.MDSCHEMA_FUNCTIONS]=["FUNCTION_NAME","PARAMETER_LIST"],e.Rowset.KEYS[e.MDSCHEMA_HIERARCHIES]=["CATALOG_NAME","CUBE_NAME","DIMENSION_UNIQUE_NAME","HIERARCHY_UNIQUE_NAME"],
e.Rowset.KEYS[e.MDSCHEMA_LEVELS]=["CATALOG_NAME","CUBE_NAME","DIMENSION_UNIQUE_NAME","HIERARCHY_UNIQUE_NAME","LEVEL_UNIQUE_NAME"],
e.Rowset.KEYS[e.MDSCHEMA_MEASURES]=["CATALOG_NAME","CUBE_NAME","MEASURE_NAME"],e.Rowset.KEYS[e.MDSCHEMA_MEMBERS]=["CATALOG_NAME","CUBE_NAME","DIMENSION_UNIQUE_NAME","HIERARCHY_UNIQUE_NAME","LEVEL_UNIQUE_NAME","MEMBER_UNIQUE_NAME"],
e.Rowset.KEYS[e.MDSCHEMA_PROPERTIES]=[],e.Rowset.KEYS[e.MDSCHEMA_SETS]=[],e.Rowset.prototype={
_node:null,_type:null,_row:null,_rows:null,numRows:null,fieldOrder:null,fields:null,
_fieldCount:null,_initData:function(){this._rows=y(this._node,U,null,"row"),this.numRows=this._rows?this._rows.length:0,
this.reset(),this.fieldOrder=[],this.fields={},this._fieldCount=0;var t=a(this._node,"row");
if(t){for(var r,s,n,i,E,o,_,u=y(t,P,L,"sequence").item(0),c=u.childNodes,l=c.length,S=0;l>S;S+=1)if(r=c.item(S),
1===r.nodeType){if(s=g(r,x,m,"field"),n=r.getAttribute("name"),o=r.getAttribute("type"),
null===o&&this._row){var R=this._row.getElementsByTagName(n);R.length&&(o=g(R.item(0),w,v,"type"));
}o||this._type!=e.DISCOVER_SCHEMA_ROWSETS||"Restrictions"!==n||(o="Restrictions"),
i=r.getAttribute("minOccurs"),i=i?parseInt(i,10):1,E=r.getAttribute("maxOccurs"),
E?"unbounded"===E?E=1/0:i=parseInt(E,10):E=1,_=A(o),this.fields[s]={name:n,label:s,
index:this._fieldCount++,type:o,jsType:_.jsType,minOccurs:i,maxOccurs:E,getter:this._createFieldGetter(n,_.func,i,E)
},this.fieldOrder.push(s)}}else e.Exception._newError("ERROR_PARSING_RESPONSE","Xmla.Rowset",this._node)._throw();
},_createFieldGetter:function(e,t,r,s){var n;return 1===s?1===r?n=function(){var r=y(this._row,U,null,e);
return t(i(r.item(0)))}:0===r&&(n=function(){var r=y(this._row,U,null,e);return r.length?t(i(r.item(0))):null;
}):1===r?n=function(){var r=y(this._row,U,null,e);return T(r,t)}:0===r&&(n=function(){
var r=y(this._row,U,null,e);return r.length?T(r,t):null}),n},getType:function(){return this._type;
},getFields:function(){for(var e=[],t=this._fieldCount,r=this.fieldOrder,s=0;t>s;s+=1)e[s]=this.fieldDef(r[s]);
return e},getFieldNames:function(){for(var e=[],t=0,r=this._fieldCount;r>t;t+=1)e[t]=this.fieldOrder[t];
return e},hasMoreRows:function(){return this.numRows>this.rowIndex},next:function(){
return this.rowIndex+=1,this._row=this._rows.item(this.rowIndex),this.rowIndex},curr:function(){
return this.rowIndex},rowCount:function(){return this.numRows},reset:function(){this.rowIndex=0,
this._row=this.hasMoreRows()?this._rows.item(this.rowIndex):null},fieldDef:function(t){
var r=this.fields[t];return r||e.Exception._newError("INVALID_FIELD","Xmla.Rowset.fieldDef",t)._throw(),
r},fieldIndex:function(e){return this.fieldDef(e).index},fieldName:function(t){var r=this.fieldOrder[t];
return r||e.Exception._newError("INVALID_FIELD","Xmla.Rowset.fieldDef",t)._throw(),
r},fieldVal:function(e){return s(e)&&(e=this.fieldName(e)),this.fieldDef(e).getter.call(this);
},fieldCount:function(){return this._fieldCount},close:function(){this._node=null,
this._row=null,this._rows=null},readAsArray:function(e){var t,r,s=this.fields;e||(e=[]);
for(t in s)s.hasOwnProperty(t)&&(r=s[t],e[r.index]=r.getter.call(this));return e},
fetchAsArray:function(e){return this.hasMoreRows()?(e=this.readAsArray(e),this.next()):e=!1,
e},readAsObject:function(e){var t,r,s=this.fields;e||(e={});for(t in s)s.hasOwnProperty(t)&&(r=s[t],
e[t]=r.getter.call(this));return e},fetchAsObject:function(e){return this.hasMoreRows()?(e=this.readAsObject(e),
this.next()):e=!1,e},fetchCustom:function(e){var t;return this.hasMoreRows()?(t=e.call(this),
this.next()):t=!1,t},fetchAllAsArray:function(e){var t;for(e||(e=[]);t=this.fetchAsArray();)e.push(t);
return e},fetchAllAsObject:function(e){var t;for(e||(e=[]);t=this.fetchAsObject();)e.push(t);
return e},fetchAllCustom:function(e,t){var r;for(e||(e=[]);r=this.fetchCustom(t);)e.push(r);
return e},mapAsObject:function(e,t,r){var s,n,i,E,o=t.length,_=o-1,a=e;for(E=0;o>E;E+=1)s=t[E],
n=r[s],i=a[n],i?E===_?i instanceof Array?i.push(r):a[n]=[i,r]:a=i:E===_?a[n]=r:a=a[n]={};
},mapAllAsObject:function(e,t){t||(t={}),e||(e=this.getKey());for(var r;r=this.fetchAsObject();)this.mapAsObject(t,e,r);
return t},getKey:function(){var t;return t=this._type?e.Rowset.KEYS[this._type]:this.getFieldNames();
}},e.Dataset=function(e){return this._initDataset(e),this},e.Dataset.AXIS_COLUMNS=0,
e.Dataset.AXIS_ROWS=1,e.Dataset.AXIS_PAGES=2,e.Dataset.AXIS_SECTIONS=3,e.Dataset.AXIS_CHAPTERS=4,
e.Dataset.AXIS_SLICER="SlicerAxis",e.Dataset.prototype={_root:null,_axes:null,_axesOrder:null,
_numAxes:null,_slicer:null,_cellset:null,_initDataset:function(e){this._initRoot(e),
this.cubeName=i(y(this._root,V,"","CubeName").item(0)),this._initAxes(),this._initCells();
},_initRoot:function(t){var r=y(t,V,"","root");r.length?this._root=r.item(0):e.Exception._newError("ERROR_PARSING_RESPONSE","Xmla.Dataset._initData",t)._throw();
},_initAxes:function(){var t,r,s,n,i,E,o={};for(this._axes={},this._axesOrder=[],
i=y(this._root,V,"","AxisInfo"),E=i.length,t=0;E>t;t++)s=i.item(t),n=s.getAttribute("name"),
o[n]=s;for(i=y(this._root,V,"","Axis"),E=i.length,t=0;E>t;t++)s=i.item(t),n=s.getAttribute("name"),
r=new e.Dataset.Axis(o[n],s),n==e.Dataset.AXIS_SLICER?this._slicer=r:(this._axes[n]=r,
this._axesOrder.push(r));this._numAxes=this._axesOrder.length},_initCells:function(){
this._cellset=new e.Dataset.Cellset(this)},getAxisCount:function(){return this._numAxes;
},getAxis:function(t){var s,n;return isNum(t)?(s=this._axesOrder[t],r(t)&&e.Exception._newError("INVALID_AXIS","Xmla.Dataset.getAxis",s)._throw()):s=t,
n=s==e.Dataset.AXIS_SLICER?this._slicer:this._axes[s]},getColumns:function(){return this.getAxis(e.Dataset.AXIS_COLUMNS);
},getRows:function(){return this.getAxis(e.Dataset.AXIS_ROWS)},getSlicer:function(){
return this._slicer},close:function(){this._slicer&&this._slicer.close();for(var e=0;e<this._namAxes;e++)this.getAxis(e).close();
this._cellset.close(),this._root=null,this._axes=null,this._axesOrder=null,this._numAxes=null,
this._slicer=null}},e.Dataset.Axis=function(e,t){return this._initAxis(e,t),this},
e.Dataset.Axis.MEMBER_UNIQUE_NAME="UName",e.Dataset.Axis.MEMBER_CAPTION="Caption",
e.Dataset.Axis.MEMBER_LEVEL_NAME="LName",e.Dataset.Axis.MEMBER_LEVEL_NUMBER="LNum",
e.Dataset.Axis.MEMBER_DISPLAY_INFO="DisplayInfo",e.Dataset.Axis.prototype={_tuples:null,
_members:null,numTuples:null,numHierarchies:null,_tupleIndex:null,_hierarchyOrder:null,
_hierarchyDefs:null,_initHierarchies:function(e){var t,r,s,n,i,E,o,_,a,u=y(e,V,"","HierarchyInfo"),c=u.length;
for(this._hierarchyDefs={},this._hierarchyOrder=[],this.numHierarchies=c,t=0;c>t;t++){
for(s=u.item(t),n=s.getAttribute("name"),this._hierarchyOrder[t]=n,E={},_=y(e,V,"","*"),
o=_.length,r=0;o>r;r++)a=_.item(r),E[a.tagName]=null;i={index:t,name:n,properties:E
},this._hierarchyDefs[n]=i}},_initAxis:function(e,t){this.name=t.getAttribute("name"),
this._initHierarchies(e),this._tuples=y(t,V,"","Tuple"),this.numTuples=this._tuples.length,
this.reset()},_getMembers:function(){return this.tupleIndex<this.numTuples?y(this._tuples.item(this.tupleIndex),V,"","Member"):null;
},reset:function(){this.tupleIndex=0,this._members=this.hasMoreTuples()?this._getMembers():null;
},hasMoreTuples:function(){return this.numTuples>this.tupleIndex},next:function(){
return this.tupleIndex+=1,this._members=this._getMembers(),this.tupleIndex},tupleCount:function(){
return this.numTuples},getHierarchyNames:function(){for(var e=[],t=0,r=this.numHierarchies;r>t;t+=1)e[t]=this._hierarchyOrder[t];
return e},hierarchyCount:function(){return this.numHierarchies},hierarchyIndex:function(e){
return this._hierarchiesNames[e]},hierarchyName:function(e){return this._hierarchyOrder[e];
},hierarchyDef:function(t){var r=this._hierarchyDefs[t];return r||e.Exception._newError("INVALID_HIERARCHY","Xmla.Dataset.Axis.hierarchyDef",t)._throw(),
r},member:function(t){var r,s,n,E,o,_,a={};switch(typeof t){case"string":r=this.hierarchyIndex(t),
s=t;break;case"number":s=this.hierarchyName(t),r=t}n=this.hierarchyDef(s),E=n.properties,
_=this._members.item(r),a.hierarchy=s,a.index=r;for(o in E)switch(el=y(_,V,"",o),
el.length){case 0:a[o]=E[o];break;case 1:a[o]=i(el.item(0));break;default:e.Exception._newError("UNEXPECTED_ERROR_READING_MEMBER","Xmla.Dataset.Axis.member",o)._throw();
}return a},readAsArray:function(e){e||(e=[]);for(var t=0;t<this.numHierarchies;t++)e[t]=this.member(t);
return e},readAsObject:function(e){e||(e={});for(var t=0;t<this.numHierarchies;t++)e[this._hierarchyOrder[t]]=this.member(t);
return e},fetchAsArray:function(){var e;return this.hasMoreTuples()?(e=this.readAsArray(),
this.next()):e=!1,e},fetchAsObject:function(){var e;return this.hasMoreTuples()?(e=this.readAsObject(),
this.next()):e=!1,e},fetchAllAsArray:function(e){var t;for(e||(e=[]);t=this.fetchAsArray();)e.push(t);
return e},fetchAllAsObject:function(e){var t;for(e||(e=[]);t=this.fetchAsObject();)e.push(t);
return e}},e.Dataset.Cellset=function(e){return this._dataset=e,this._initCellset(),
this},e.Dataset.Cellset.prototype={_dataset:null,_cellNodes:null,_cellCount:null,
_cellNode:null,_cellDefs:null,_idx:null,_ord:null,_cellOrd:null,_initCellset:function(){
var t,r,s,n,i,E,o,_,u,c,l,S,R,h,T,M=this._dataset._root;for(t=a(M,"CellData"),t||e.Exception._newError("ERROR_PARSING_RESPONSE","Xmla.Rowset",M)._throw(),
r=y(t,P,L,"element"),s=r.length,i=y(M,V,"","CellInfo"),i&&0!=i.length||e.Exception._newError("ERROR_PARSING_RESPONSE","Xmla.Rowset",M)._throw(),
E=i.item(0),c=y(E,V,"","*"),this._cellDefs={},R=c.length,h=0;R>h;h+=1){l=c.item(h),
S=l.tagName;for(var T=0;s>T;T++)if(n=r.item(T),n.getAttribute("name")===S){u={name:S
},this._cellDefs[S]=u,o=n.getAttribute("type"),o&&(u.type=o,_=A(o),_&&(u.jsType=_.jsType,
u.converter=_.func));break}}this._cellNodes=y(M,V,"","Cell"),this._cellCount=this._cellNodes.length;
},_getCellNode:function(){this._cellNode=this._cellNodes.item(this._idx),this._cellOrd=parseInt(this._cellNode.getAttribute("CellOrdinal"),10);
},reset:function(){this._idx=0,this._getCellNode(),this._ord=0},hasMoreCells:function(){
return this._idx<this._cellCount},next:function(){this._idx+=1,this._cellOrd===this._ord&&this.hasMoreCells()&&this._getCellNode();
},curr:function(){return this._idx},cellValue:function(){return M(y(this._cellNode,V,"","Value").item(0));
},readAsObject:function(){var e,t,r,s;if(this._cellOrd===this._ord){e={ordinal:this._ord
};for(var n in this._cellDefs)r=this._cellDefs[n],t=y(this._cellNode,V,"",n).item(0),
r.type?(s=r.converter,e[n]=s(i(t))):"Value"===n&&(e[n]=M(t)),e[n]=i(t)}else this._cellOrd>this._ord&&(e=null);
return e},close:function(){this._dataset=null,this._cellNodes=null,this._cellNode=null;
}},e.Exception=function(e,t,r,s,n,i,E){return this.type=e,this.code=t,this.message=r,
this.source=n,this.helpfile=s,this.data=i,this.args=E,this},e.Exception.TYPE_WARNING="warning",
e.Exception.TYPE_ERROR="error";var X="http://code.google.com/p/xmla4js/wiki/ExceptionCodes";
e.Exception.MISSING_REQUEST_TYPE_CDE=-1,e.Exception.MISSING_REQUEST_TYPE_MSG="Missing_Request_Type",
e.Exception.MISSING_REQUEST_TYPE_HLP=X+"#"+e.Exception.MISSING_REQUEST_TYPE_CDE+"_"+e.Exception.MISSING_REQUEST_TYPE_MSG,
e.Exception.MISSING_STATEMENT_CDE=-2,e.Exception.MISSING_STATEMENT_MSG="Missing_Statement",
e.Exception.MISSING_STATEMENT_HLP=X+"#"+e.Exception.MISSING_STATEMENT_CDE+"_"+e.Exception.MISSING_STATEMENT_MSG,
e.Exception.MISSING_URL_CDE=-3,e.Exception.MISSING_URL_MSG="Missing_URL",e.Exception.MISSING_URL_HLP=X+"#"+e.Exception.MISSING_URL_CDE+"_"+e.Exception.MISSING_URL_MSG,
e.Exception.NO_EVENTS_SPECIFIED_CDE=-4,e.Exception.NO_EVENTS_SPECIFIED_MSG="No_Events_Specified",
e.Exception.NO_EVENTS_SPECIFIED_HLP=X+"#"+e.Exception.NO_EVENTS_SPECIFIED_CDE+"_"+e.Exception.NO_EVENTS_SPECIFIED_MSG,
e.Exception.WRONG_EVENTS_FORMAT_CDE=-5,e.Exception.WRONG_EVENTS_FORMAT_MSG="Wrong_Events_Format",
e.Exception.WRONG_EVENTS_FORMAT_HLP=X+"#"+e.Exception.NO_EVENTS_SPECIFIED_CDE+"_"+e.Exception.NO_EVENTS_SPECIFIED_MSG,
e.Exception.UNKNOWN_EVENT_CDE=-6,e.Exception.UNKNOWN_EVENT_MSG="Unknown_Event",e.Exception.UNKNOWN_EVENT_HLP=X+"#"+e.Exception.UNKNOWN_EVENT_CDE+"_"+e.Exception.UNKNOWN_EVENT_MSG,
e.Exception.INVALID_EVENT_HANDLER_CDE=-7,e.Exception.INVALID_EVENT_HANDLER_MSG="Invalid_Events_Handler",
e.Exception.INVALID_EVENT_HANDLER_HLP=X+"#"+e.Exception.INVALID_EVENT_HANDLER_CDE+"_"+e.Exception.INVALID_EVENT_HANDLER_MSG,
e.Exception.ERROR_PARSING_RESPONSE_CDE=-8,e.Exception.ERROR_PARSING_RESPONSE_MSG="Error_Parsing_Response",
e.Exception.ERROR_PARSING_RESPONSE_HLP=X+"#"+e.Exception.ERROR_PARSING_RESPONSE_CDE+"_"+e.Exception.ERROR_PARSING_RESPONSE_MSG,
e.Exception.INVALID_FIELD_CDE=-9,e.Exception.INVALID_FIELD_MSG="Invalid_Field",e.Exception.INVALID_FIELD_HLP=X+"#"+e.Exception.INVALID_FIELD_CDE+"_"+e.Exception.INVALID_FIELD_MSG,
e.Exception.HTTP_ERROR_CDE=-10,e.Exception.HTTP_ERROR_MSG="HTTP Error",e.Exception.HTTP_ERROR_HLP=X+"#"+e.Exception.HTTP_ERROR_CDE+"_"+e.Exception.HTTP_ERROR_MSG,
e.Exception.INVALID_HIERARCHY_CDE=-11,e.Exception.INVALID_HIERARCHY_MSG="Invalid_Hierarchy",
e.Exception.INVALID_HIERARCHY_HLP=X+"#"+e.Exception.INVALID_HIERARCHY_CDE+"_"+e.Exception.INVALID_HIERARCHY_MSG,
e.Exception.UNEXPECTED_ERROR_READING_MEMBER_CDE=-12,e.Exception.UNEXPECTED_ERROR_READING_MEMBER_MSG="Error_Reading_Member",
e.Exception.UNEXPECTED_ERROR_READING_MEMBER_HLP=X+"#"+e.Exception.UNEXPECTED_ERROR_READING_MEMBER_CDE+"_"+e.Exception.UNEXPECTED_ERROR_READING_MEMBER_MSG,
e.Exception._newError=function(t,r,s){return new e.Exception(e.Exception.TYPE_ERROR,e.Exception[t+"_CDE"],e.Exception[t+"_MSG"],e.Exception[t+"_HLP"],r,s);
},e.Exception.prototype={type:null,code:null,message:null,source:null,helpfile:null,
data:null,_throw:function(){throw this},args:null,getStackTrace:function(){var e,t="";
if(this.args)for(var r=this.args.callee;r;)e=String(r),r=r.caller;return t}}}(),e;
});