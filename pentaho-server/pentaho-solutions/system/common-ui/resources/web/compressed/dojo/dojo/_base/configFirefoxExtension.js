"undefined"!=typeof window&&(dojo.isBrowser=!0,dojo._name="browser",function(){dojo.baseUrl=dojo.config.baseUrl;
var o=navigator,e=o.userAgent,n=o.appVersion,t=parseFloat(n);dojo.isMozilla=dojo.isMoz=t,
dojo.isMoz&&(dojo.isFF=parseFloat(e.split("Firefox/")[1])||void 0),dojo.isQuirks="BackCompat"==document.compatMode,
dojo.locale=dojo.config.locale||o.language.toLowerCase(),dojo._xhrObj=function(){
return new XMLHttpRequest};var r=dojo._loadUri;dojo._loadUri=function(o,e){var n=["file:","chrome:","resource:"].some(function(e){
return 0==String(o).indexOf(e)});if(n){var t=Components.classes["@mozilla.org/moz/jssubscript-loader;1"].getService(Components.interfaces.mozIJSSubScriptLoader),i=t.loadSubScript(o,dojo.global);
return e&&e(i),!0}return r.apply(dojo,arguments)},dojo._isDocumentOk=function(o){
var e=o.status||0;return e>=200&&300>e||304==e||1223==e||!e&&("file:"==location.protocol||"chrome:"==location.protocol);
};var i=!1;dojo._getText=function(o,e){var n=dojo._xhrObj();!i&&dojo._Url&&(o=new dojo._Url(o).toString()),
dojo.config.cacheBust&&(o+="",o+=(-1==o.indexOf("?")?"?":"&")+String(dojo.config.cacheBust).replace(/\W+/g,""));
var t=["file:","chrome:","resource:"].some(function(e){return 0==String(o).indexOf(e);
});if(t){var r=Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService),a=Components.classes["@mozilla.org/scriptableinputstream;1"].getService(Components.interfaces.nsIScriptableInputStream),d=r.newChannel(o,null,null),s=d.open();
a.init(s);var l=a.read(s.available());return a.close(),s.close(),l}n.open("GET",o,!1);
try{if(n.send(null),!dojo._isDocumentOk(n)){var c=Error("Unable to load "+o+" status:"+n.status);
throw c.status=n.status,c.responseText=n.responseText,c}}catch(u){if(e)return null;
throw u}return n.responseText},dojo._windowUnloaders=[],dojo.windowUnloaded=function(){
for(var o=dojo._windowUnloaders;o.length;)o.pop()()},dojo.addOnWindowUnload=function(o,e){
dojo._onto(dojo._windowUnloaders,o,e)};var a=[],d=null;dojo._defaultContext=[window,document],
dojo.pushContext=function(o,e){var n=[dojo.global,dojo.doc];a.push(n);var t;if(o||e){
if(t=[o,e],!e&&dojo.isString(o)){var r=document.getElementById(o);r.contentDocument&&(t=[r.contentWindow,r.contentDocument]);
}}else t=dojo._defaultContext;return d=t,dojo.setContext.apply(dojo,t),n},dojo.popContext=function(){
var o=d;return a.length?(dojo.setContext.apply(dojo,a.pop()),o):o},dojo._inContext=function(o,e,n){
var t=dojo._toArray(arguments);n=t.pop(),1==t.length&&(e=null),dojo.pushContext(o,e);
var r=n();return dojo.popContext(),r}}(),dojo._initFired=!1,dojo._loadInit=function(o){
dojo._initFired=!0;var e=o&&o.type?o.type.toLowerCase():"load";arguments.callee.initialized||"domcontentloaded"!=e&&"load"!=e||(arguments.callee.initialized=!0,
0==dojo._inFlightCount&&dojo._modulesLoaded())},dojo.config.afterOnLoad||window.addEventListener("DOMContentLoaded",function(o){
dojo._loadInit(o)},!1)),function(){var o=dojo.config.modulePaths;if(o)for(var e in o)dojo.registerModulePath(e,o[e]);
}(),dojo.config.isDebug&&(console.log=function(o){var e=Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService);
e.logStringMessage(o)},console.debug=function(){console.log(dojo._toArray(arguments).join(" "));
});