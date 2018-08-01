define(["dojo/main","dojo/io/iframe","dojox/data/dom","dojo/_base/xhr","dojo/_base/url"],function(e,t,s){
return e.getObject("io.proxy.xip",!0,dojox),dojox.io.proxy.xip={xipClientUrl:(e.config||djConfig).xipClientUrl||e.moduleUrl("dojox.io.proxy","xip_client.html").toString(),
urlLimit:4e3,_callbackName:(dojox._scopeName||"dojox")+".io.proxy.xip.fragmentReceived",
_state:{},_stateIdCounter:0,_isWebKit:-1!=navigator.userAgent.indexOf("WebKit"),send:function(t){
var s=this.xipClientUrl;if(s.split(":")[0].match(/javascript/i)||t._ifpServerUrl.split(":")[0].match(/javascript/i))return null;
var r=s.indexOf(":"),n=s.indexOf("/");if(-1==r||r>n){var a=window.location.href;s=0==n?a.substring(0,a.indexOf("/",9))+s:a.substring(0,a.lastIndexOf("/")+1)+s;
}return this.fullXipClientUrl=s,"undefined"!=typeof document.postMessage&&document.addEventListener("message",e.hitch(this,this.fragmentReceivedEvent),!1),
this.send=this._realSend,this._realSend(t)},_realSend:function(e){var s="XhrIframeProxy"+this._stateIdCounter++;
e._stateId=s;var r=e._ifpServerUrl+"#0:init:id="+s+"&client="+encodeURIComponent(this.fullXipClientUrl)+"&callback="+encodeURIComponent(this._callbackName);
return this._state[s]={facade:e,stateId:s,clientFrame:t.create(s,"",r),isSending:!1,
serverUrl:e._ifpServerUrl,requestData:null,responseMessage:"",requestParts:[],idCounter:1,
partIndex:0,serverWindow:null},s},receive:function(e,t){for(var r={},n=t.split("&"),a=0;a<n.length;a++)if(n[a]){
var i=n[a].split("=");r[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}var o=this._state[e],d=o.facade;
if(d._setResponseHeaders(r.responseHeaders),(0==r.status||r.status)&&(d.status=parseInt(r.status,10)),
r.statusText&&(d.statusText=r.statusText),r.responseText){d.responseText=r.responseText;
var l=d.getResponseHeader("Content-Type");if(l){var u=l.split(";")[0];(0==u.indexOf("application/xml")||0==u.indexOf("text/xml"))&&(d.responseXML=s.createDocument(r.responseText,l));
}}d.readyState=4,this.destroyState(e)},frameLoaded:function(t){var s=this._state[t],r=s.facade,n=[];
for(var a in r._requestHeaders)n.push(a+": "+r._requestHeaders[a]);var i={uri:r._uri
};n.length>0&&(i.requestHeaders=n.join("\r\n")),r._method&&(i.method=r._method),r._bodyData&&(i.data=r._bodyData),
this.sendRequest(t,e.objectToQuery(i))},destroyState:function(e){var t=this._state[e];
if(t){delete this._state[e];var s=t.clientFrame.parentNode;s.removeChild(t.clientFrame),
t.clientFrame=null,t=null}},createFacade:function(){return arguments&&arguments[0]&&arguments[0].iframeProxyUrl?new dojox.io.proxy.xip.XhrIframeFacade(arguments[0].iframeProxyUrl):dojox.io.proxy.xip._xhrObjOld.apply(e,arguments);
},sendRequest:function(e,t){var s=this._state[e];s.isSending||(s.isSending=!0,s.requestData=t||"",
s.serverWindow=frames[s.stateId],s.serverWindow||(s.serverWindow=document.getElementById(s.stateId).contentWindow),
"undefined"==typeof document.postMessage&&s.serverWindow.contentWindow&&(s.serverWindow=s.serverWindow.contentWindow),
this.sendRequestStart(e))},sendRequestStart:function(e){var t=this._state[e];t.requestParts=[];
for(var s=t.requestData,r=t.serverUrl.length,n=this.urlLimit-r,a=0;s.length-a+r>this.urlLimit;){
var i=s.substring(a,a+n),o=i.lastIndexOf("%");(o==i.length-1||o==i.length-2)&&(i=i.substring(0,o)),
t.requestParts.push(i),a+=i.length}t.requestParts.push(s.substring(a,s.length)),t.partIndex=0,
this.sendRequestPart(e)},sendRequestPart:function(e){var t=this._state[e];if(t.partIndex<t.requestParts.length){
var s=t.requestParts[t.partIndex],r="part";t.partIndex+1==t.requestParts.length?r="end":0==t.partIndex&&(r="start"),
this.setServerUrl(e,r,s),t.partIndex++}},setServerUrl:function(e,t,s){var r=this.makeServerUrl(e,t,s),n=this._state[e];
this._isWebKit?n.serverWindow.location=r:n.serverWindow.location.replace(r)},makeServerUrl:function(e,t,s){
var r=this._state[e],n=r.serverUrl+"#"+r.idCounter++ +":"+t;return s&&(n+=":"+s),
n},fragmentReceivedEvent:function(e){e.uri.split("#")[0]==this.fullXipClientUrl&&this.fragmentReceived(e.data);
},fragmentReceived:function(e){var t=e.indexOf("#"),s=e.substring(0,t),r=e.substring(t+1,e.length),n=this.unpackMessage(r),a=this._state[s];
switch(n.command){case"loaded":this.frameLoaded(s);break;case"ok":this.sendRequestPart(s);
break;case"start":a.responseMessage=""+n.message,this.setServerUrl(s,"ok");break;case"part":
a.responseMessage+=n.message,this.setServerUrl(s,"ok");break;case"end":this.setServerUrl(s,"ok"),
a.responseMessage+=n.message,this.receive(s,a.responseMessage)}},unpackMessage:function(e){
var t=e.split(":"),s=t[1];e=t[2]||"";var r=null;if("init"==s){var n=e.split("&");r={};
for(var a=0;a<n.length;a++){var i=n[a].split("=");r[decodeURIComponent(i[0])]=decodeURIComponent(i[1]);
}}return{command:s,message:e,config:r}}},dojox.io.proxy.xip._xhrObjOld=e._xhrObj,
e._xhrObj=dojox.io.proxy.xip.createFacade,dojox.io.proxy.xip.XhrIframeFacade=function(e){
this._requestHeaders={},this._allResponseHeaders=null,this._responseHeaders={},this._method=null,
this._uri=null,this._bodyData=null,this.responseText=null,this.responseXML=null,this.status=null,
this.statusText=null,this.readyState=0,this._ifpServerUrl=e,this._stateId=null},e.extend(dojox.io.proxy.xip.XhrIframeFacade,{
open:function(e,t){this._method=e,this._uri=t,this.readyState=1},setRequestHeader:function(e,t){
this._requestHeaders[e]=t},send:function(e){this._bodyData=e,this._stateId=dojox.io.proxy.xip.send(this),
this.readyState=2},abort:function(){dojox.io.proxy.xip.destroyState(this._stateId);
},getAllResponseHeaders:function(){return this._allResponseHeaders},getResponseHeader:function(e){
return this._responseHeaders[e]},_setResponseHeaders:function(e){if(e){this._allResponseHeaders=e,
e=e.replace(/\r/g,"");for(var t=e.split("\n"),s=0;s<t.length;s++)if(t[s]){var r=t[s].split(": ");
this._responseHeaders[r[0]]=r[1]}}}}),dojox.io.proxy.xip});