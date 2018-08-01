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

define("common-data/xhr",["common-data/oop"],function(){return pentaho="undefined"==typeof pentaho?{}:pentaho,
pentaho.xhr={execute:function(e,t){var a="";for(parm in t.data)a+="&"+parm+"="+t.data[parm];
var r=pentahoGet(e,a);t.complete(r)},SOAP2JS:function(e){var t=e.getElementsByTagName("DATA-ROW"),a=e.getElementsByTagName("COLUMN-HDR-ITEM"),r={};
r.results=[];for(var n=0;n<t.length;n++){row=e.getElementsByTagName("DATA-ROW")[n],
r.results[n]={};for(var o=0;o<a.length;o++)r.results[n][e.getElementsByTagName("COLUMN-HDR-ITEM")[o].firstChild.nodeValue]=row.getElementsByTagName("DATA-ITEM")[o].firstChild.nodeValue;
}return r},parseXML:function(e){var t,a;try{return a=new DOMParser,t=a.parseFromString(e,"text/xml");
}catch(r){try{return t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e),
t}catch(r){return alert("parseXML Error"+r.message),!1}}}},pentaho.xhr});