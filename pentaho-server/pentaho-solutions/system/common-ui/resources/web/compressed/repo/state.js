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

define("common-repo/state",["dojo/request"],function(t){function e(){this.status=null,
this.state=null,this.message=null}window.PentahoRepositoryClient=function(){this.SERVICE_URL=CONTEXT_PATH+"content/ws-run/RepositoryClientService",
this.fileType=null,this.getStateAsXmlCallback=null,this.getStateAsJsonCallback=null,
this.shouldLoad=function(){var t=document.location.href;if(-1!=t.indexOf("?")){var e=this.findUrlParam("command",t),n="edit"==e||"load"==e;
return n}return!1},this.shouldEdit=function(){var t=document.location.href;if(-1!=t.indexOf("?")){
var e=this.findUrlParam("command",t),n="edit"==e||"new"==e;return n}return!1},this.findUrlParam=function(t,e){
var n=e.indexOf("?"),r=e.substr(n);if(n=r.indexOf("?"+t+"="),-1==n&&(n=r.indexOf("&"+t+"=")),
-1!=n){var s=r.substr(n+t.length+2);return-1!=s.indexOf("&")&&(s=s.substr(0,s.indexOf("&"))),
s=unescape(s)}return null},this.loadStateStringFromUrl=function(){var t=document.location.href,e=this.findUrlParam("solution",t),n=this.findUrlParam("path",t),r=this.findUrlParam("filename",t);
return this.loadStateString(e,n,r)},this.loadStateString=function(e,n,r){0==n.indexOf("/")&&(n=n.substr(1)),
"/"==n[n.length-1]&&(n=n.substr(0,n.length-2));var s="";s=""!=n?"filepath="+e+"/"+n+"/"+r:"filepath="+e+"/"+r;
var i;return t(this.SERVICE_URL+"/loadState",{query:s,sync:!0,handleAs:"text"}).then(function(t){
return resultStr?void(i=this.getResultMessage(resultStr)):null}),i},this.getResultMessage=function(t){
var n=this.parseXML(t),r=new e,s=n.getElementsByTagName("state");return s.length>0&&s[0].firstChild&&(r.state=s[0].firstChild.nodeValue),
s=n.getElementsByTagName("message"),s.length>0&&s[0].firstChild&&(r.message=s[0].firstChild.nodeValue),
s=n.getElementsByTagName("status"),s.length>0&&s[0].firstChild&&(r.status=s[0].firstChild.nodeValue),
r},this.parseXML=function(t){if(!t)return null;var e;try{return parser=new DOMParser,
e=parser.parseFromString(t,"text/xml")}catch(n){try{return e=new ActiveXObject("Microsoft.XMLDOM"),
e.async="false",e.loadXML(t),e}catch(n){}}return alert("XML is invalid or no XML parser found"),
null},this.saveState=function(e,n,r,s,i){-1!=e.indexOf(this.fileType)&&e.indexOf(this.fileType)==e.length-6&&(e=e.substr(0,e.length-this.fileType.length));
var o=!1,a=null;pentahoRepositoryClient.getStateAsXmlCallback?(a=pentahoRepositoryClient.getStateAsXmlCallback(),
o=!0):pentahoRepositoryClient.getStateAsJsonCallback&&(a=pentahoRepositoryClient.getStateAsJsonCallback(),
o=!1),a||alert("Cannot save, no state was provided");var l,u="filepath="+encodeURIComponent("/"+n+(r?"/":"")+r+"/"+e)+"&state="+encodeURIComponent(a)+"&type="+encodeURIComponent(this.fileType)+"&replace="+i;
return t(this.SERVICE_URL+"/"+(o?"saveStateXml":"saveStateString"),{query:u,sync:!0,
handleAs:"text"}).then(function(t){if(l=this.getResultMessage(t),alert(l.message),
"SUCCESS"==l.status){var e=new PentahoUserConsole;e.console_enabled&&window.parent.mantle_refreshRepository&&window.parent.mantle_refreshRepository();
}}),l};try{gCtrlr&&gCtrlr.repositoryBrowserController&&(gCtrlr.repositoryBrowserController.callbackObject=this);
}catch(n){}},window.pentahoRepositoryClient=new PentahoRepositoryClient,pentaho="undefined"==typeof pentaho?{}:pentaho,
pentaho.userSettings=function(){},pentaho.userSettings.prototype.generateUniqueUrl=function(t){
var e=(new Date).getTime();return t+(-1!==t.indexOf("?")?"&":"?")+e+"="+e},pentaho.userSettings.prototype.getSettings=function(t,e,n){
dojo.xhrGet({url:this.generateUniqueUrl(CONTEXT_PATH+"content/ws-run/UserSettingService/getUserSettingsJson"),
content:{settingNames:t},load:dojo.hitch(n,function(t){e(controller.getJsonFromXml(t));
}),error:function(t){alert(t)}})},pentaho.userSettings.prototype.setSetting=function(t,e,n,r){
dojo.xhrGet({url:this.generateUniqueUrl(CONTEXT_PATH+"content/ws-run/UserSettingService/setUserSettingJson"),
content:{settingName:t,settingValue:e},load:dojo.hitch(r,function(t){n(controller.getJsonFromXml(t));
}),error:function(t){alert(t)}})},pentaho.userSettingsInstance=new pentaho.userSettings;
});