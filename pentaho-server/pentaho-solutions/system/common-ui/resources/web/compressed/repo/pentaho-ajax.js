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

function pentahoAction(e,t,n,o,r){var c=WEB_CONTEXT_BASE+"ViewAction",a="wrapper=false&solution="+e+"&path="+t+"&action="+n;
if(o){var i;for(i=0;i<o.length;i++)a+="&"+encodeURIComponent(o[i][0])+"="+encodeURIComponent(o[i][1]);
}return pentahoPost(c,a,r)}function pentahoService(e,t,n,o){var r=WEB_CONTEXT_BASE+"ServiceAction",c="ajax=true&";
if(e&&(c+="component="+e+"&"),t){var a;for(a=0;a<t.length;a++)c+="&"+encodeURIComponent(t[a][0])+"="+encodeURIComponent(t[a][1]);
}return pentahoPost(r,c,n,o)}function pentahoGet(e,t,n,o,r){var c=void 0!=n&&null!=n,a=null,i="text/xml";
if(o&&(i=o),window.XMLHttpRequest)a=new XMLHttpRequest,a.overrideMimeType&&a.overrideMimeType(i);else if(window.ActiveXObject)try{
a=new ActiveXObject("Msxml2.XMLHTTP")}catch(s){try{a=new ActiveXObject("Microsoft.XMLHTTP");
}catch(s){a=null}}if(!a)throw new Error("Cannot create an XMLHTTP instance");if(c&&(a.onreadystatechange=function(){
pentahoResponse(a,n)}),r!==!0){var u=(new Date).getTime();t=t+(0===t.length?"":"&")+u+"="+u;
}return a.open("GET",e+"?"+t,c),a.send(null),c?null:getResponse(a)}function getUnauthorizedMsg(){
return"<web-service><unauthorized/></web-service>"}function getNotFoundMsg(){return"<web-service><not-found/></web-service>";
}function pentahoPost(e,t,n,o){var r=void 0!=n&&null!=n,c=null,a="text/xml";if(o&&(a=o),
window.XMLHttpRequest)c=new XMLHttpRequest,c.overrideMimeType&&c.overrideMimeType(a);else if(window.ActiveXObject)try{
c=new ActiveXObject("Msxml2.XMLHTTP")}catch(i){try{c=new ActiveXObject("Microsoft.XMLHTTP");
}catch(i){c=null}}if(!c)throw new Error("Cannot create XMLHTTP instance");return r&&(c.onreadystatechange=function(){
pentahoResponse(c,n)}),c.open("POST",e,r),c.setRequestHeader("Content-type","application/x-www-form-urlencoded"),
c.send(t),r?null:getResponse(c)}function pentahoResponse(http_request,func){if(http_request.readyState==COMPLETE)try{
var content=getResponse(http_request);if("function"==typeof func)func(content);else if("object"==typeof func&&void 0!=func.obj)func.method.call(func.obj,content);else{
if("string"!=typeof func)throw new Error("Invalid state in pentahoResponse, unrecognized callback function.");
eval(func+"( content );")}}catch(e){var msg=e.message;throw alert("pentaho-ajax.js.pentahoResponse(): "+e),
e}}function getResponse(e){switch(e.status){case STATUS_OK:return e.responseText;case STATUS_UNAUTHORIZED:
return getUnauthorizedMsg();case STATUS_NOT_FOUND:return getNotFoundMsg();default:
return null}}define("common-repo/pentaho-ajax",[],function(){});var COMPLETE=4,STATUS_OK=200,STATUS_UNAUTHORIZED=401,STATUS_NOT_FOUND=404,base="",pathArray=window.location.pathname.split("/"),webAppPath="/"+pathArray[1];