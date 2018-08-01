//		Firebug is a Firefox extension created by Joe Hewitt (see license). You do not need Dojo to run Firebug.

define(["../_base/kernel","require","../_base/html","../sniff","../_base/array","../_base/lang","../_base/event","../_base/unload"],function(dojo,require,html,has){
function toggleConsole(e){frameVisible=e||!frameVisible,consoleFrame&&(consoleFrame.style.display=frameVisible?"block":"none");
}function focusCommandLine(){toggleConsole(!0),commandLine&&commandLine.focus()}function openWin(e,o,n,t){
var i=window.open("","_firebug","status=0,menubar=0,resizable=1,top="+o+",left="+e+",width="+n+",height="+t+",scrollbars=1,addressbar=0");
if(!i){var r="Firebug Lite could not open a pop-up window, most likely because of a blocker.\nEither enable pop-ups for this domain, or change the djConfig to popup=false.";
alert(r)}createResizeHandler(i);var s=i.document,c='<html style="height:100%;"><head><title>Firebug Lite</title></head>\n<body bgColor="#ccc" style="height:97%;" onresize="opener.onFirebugResize()">\n<div id="fb"></div></body></html>';
return s.write(c),s.close(),i}function createResizeHandler(e){var o=new Date;o.setTime(o.getTime()+5184e6),
o=o.toUTCString();var n,t=e.document;e.innerWidth?n=function(){return{w:e.innerWidth,
h:e.innerHeight}}:t.documentElement&&t.documentElement.clientWidth?n=function(){return{
w:t.documentElement.clientWidth,h:t.documentElement.clientHeight}}:t.body&&(n=function(){
return{w:t.body.clientWidth,h:t.body.clientHeight}}),window.onFirebugResize=function(){
layout(n().h),clearInterval(e._firebugWin_resize),e._firebugWin_resize=setTimeout(function(){
var n=e.screenLeft,t=e.screenTop,i=e.outerWidth||e.document.body.offsetWidth,r=e.outerHeight||e.document.body.offsetHeight;
document.cookie="_firebugPosition="+[n,t,i,r].join(",")+"; expires="+o+"; path=/";
},5e3)}}function createFrame(){if(!consoleFrame){if(toggleConsole(!0),dojo.config.popup){
var e="100%",o=document.cookie.match(/(?:^|; )_firebugPosition=([^;]*)/),n=o?o[1].split(","):[2,2,320,480];
_firebugWin=openWin(n[0],n[1],n[2],n[3]),_firebugDoc=_firebugWin.document,dojo.config.debugContainerId="fb",
_firebugWin.console=window.console,_firebugWin.dojo=window.dojo}else _firebugDoc=document,
e=(dojo.config.debugHeight||300)+"px";var t=_firebugDoc.createElement("link");t.href=require.toUrl("./firebug.css"),
t.rel="stylesheet",t.type="text/css";var i=_firebugDoc.getElementsByTagName("head");
i&&(i=i[0]),i||(i=_firebugDoc.getElementsByTagName("html")[0]),has("ie")?window.setTimeout(function(){
i.appendChild(t)},0):i.appendChild(t),dojo.config.debugContainerId&&(consoleFrame=_firebugDoc.getElementById(dojo.config.debugContainerId)),
consoleFrame||(consoleFrame=_firebugDoc.createElement("div"),_firebugDoc.body.appendChild(consoleFrame)),
consoleFrame.className+=" firebug",consoleFrame.id="firebug",consoleFrame.style.height=e,
consoleFrame.style.display=frameVisible?"block":"none";var r=function(e,o,n,t){return'<li class="'+t+'"><a href="javascript:void(0);" onclick="console.'+n+'(); return false;" title="'+o+'">'+e+"</a></li>";
};consoleFrame.innerHTML='<div id="firebugToolbar">  <ul id="fireBugTabs" class="tabs">'+r("Clear","Remove All Console Logs","clear","")+r("ReCSS","Refresh CSS without reloading page","recss","")+r("Console","Show Console Logs","openConsole","gap")+r("DOM","Show DOM Inspector","openDomInspector","")+r("Object","Show Object Inspector","openObjectInspector","")+(dojo.config.popup?"":r("Close","Close the console","close","gap"))+'	</ul></div><input type="text" id="firebugCommandLine" /><div id="firebugLog"></div><div id="objectLog" style="display:none;">Click on an object in the Log display</div><div id="domInspect" style="display:none;">Hover over HTML elements in the main page. Click to hold selection.</div>',
consoleToolbar=_firebugDoc.getElementById("firebugToolbar"),commandLine=_firebugDoc.getElementById("firebugCommandLine"),
addEvent(commandLine,"keydown",onCommandLineKeyDown),addEvent(_firebugDoc,has("ie")||has("safari")?"keydown":"keypress",onKeyDown),
consoleBody=_firebugDoc.getElementById("firebugLog"),consoleObjectInspector=_firebugDoc.getElementById("objectLog"),
consoleDomInspector=_firebugDoc.getElementById("domInspect"),fireBugTabs=_firebugDoc.getElementById("fireBugTabs"),
layout(),flush()}}function clearFrame(){_firebugDoc=null,_firebugWin.console&&_firebugWin.console.clear(),
_firebugWin=null,consoleFrame=null,consoleBody=null,consoleObjectInspector=null,consoleDomInspector=null,
commandLine=null,messageQueue=[],groupStack=[],timeMap={}}function evalCommandLine(){
var text=commandLine.value;commandLine.value="",logRow([">  ",text],"command");var value;
try{value=eval(text)}catch(e){console.debug(e)}console.log(value)}function layout(e){
var o=25,n=e?e-(o+commandLine.offsetHeight+25+.01*e)+"px":consoleFrame.offsetHeight-o-commandLine.offsetHeight+"px";
consoleBody.style.top=o+"px",consoleBody.style.height=n,consoleObjectInspector.style.height=n,
consoleObjectInspector.style.top=o+"px",consoleDomInspector.style.height=n,consoleDomInspector.style.top=o+"px",
commandLine.style.bottom=0,dojo.addOnWindowUnload(clearFrame)}function logRow(e,o,n){
consoleBody?writeMessage(e,o,n):messageQueue.push([e,o,n])}function flush(){var e=messageQueue;
messageQueue=[];for(var o=0;o<e.length;++o)writeMessage(e[o][0],e[o][1],e[o][2])}
function writeMessage(e,o,n){var t=consoleBody.scrollTop+consoleBody.offsetHeight>=consoleBody.scrollHeight;
n=n||writeRow,n(e,o),t&&(consoleBody.scrollTop=consoleBody.scrollHeight-consoleBody.offsetHeight);
}function appendRow(e){var o=groupStack.length?groupStack[groupStack.length-1]:consoleBody;
o.appendChild(e)}function writeRow(e,o){var n=consoleBody.ownerDocument.createElement("div");
n.className="logRow"+(o?" logRow-"+o:""),n.innerHTML=e.join(""),appendRow(n)}function pushGroup(e,o){
logFormatted(e,o);var n=consoleBody.ownerDocument.createElement("div");n.className="logGroupBox",
appendRow(n),groupStack.push(n)}function popGroup(){groupStack.pop()}function logFormatted(e,o){
var n=[],t=e[0],i=0;"string"!=typeof t&&(t="",i=-1);for(var r=parseFormat(t),s=0;s<r.length;++s){
var c=r[s];c&&"object"==typeof c?c.appender(e[++i],n):appendText(c,n)}var a=[],l=[];
for(s=i+1;s<e.length;++s){appendText(" ",n);var d=e[s];if(void 0===d||null===d)appendNull(d,n);else if("string"==typeof d)appendText(d,n);else if(d instanceof Date)appendText(d.toString(),n);else if(9==d.nodeType)appendText("[ XmlDoc ]",n);else{
var u="_a"+__consoleAnchorId__++;a.push(u),l.push(d);var p='<a id="'+u+'" href="javascript:void(0);">'+getObjectAbbr(d)+"</a>";
appendLink(p,n)}}for(logRow(n,o),s=0;s<a.length;s++){var f=_firebugDoc.getElementById(a[s]);
f&&(f.obj=l[s],_firebugWin.console._connects.push(dojo.connect(f,"onclick",function(){
console.openObjectInspector();try{printObject(this.obj)}catch(e){this.obj=e}consoleObjectInspector.innerHTML="<pre>"+printObject(this.obj)+"</pre>";
})))}}function parseFormat(e){for(var o=[],n=/((^%|[^\\]%)(\d+)?(\.)([a-zA-Z]))|((^%|[^\\]%)([a-zA-Z]))/,t={
s:appendText,d:appendInteger,i:appendInteger,f:appendFloat},i=n.exec(e);i;i=n.exec(e)){
var r=i[8]?i[8]:i[5],s=r in t?t[r]:appendObject,c=i[3]?parseInt(i[3]):"."==i[4]?-1:0;
o.push(e.substr(0,"%"==i[0][0]?i.index:i.index+1)),o.push({appender:s,precision:c
}),e=e.substr(i.index+i[0].length)}return o.push(e),o}function escapeHTML(e){function o(e){
switch(e){case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;";case"'":
return"&#39;";case'"':return"&quot;"}return"?"}return String(e).replace(/[<>&"']/g,o);
}function objectToString(e){try{return e+""}catch(o){return null}}function appendLink(e,o){
o.push(objectToString(e))}function appendText(e,o){o.push(escapeHTML(objectToString(e)));
}function appendNull(e,o){o.push('<span class="objectBox-null">',escapeHTML(objectToString(e)),"</span>");
}function appendString(e,o){o.push('<span class="objectBox-string">&quot;',escapeHTML(objectToString(e)),"&quot;</span>");
}function appendInteger(e,o){o.push('<span class="objectBox-number">',escapeHTML(objectToString(e)),"</span>");
}function appendFloat(e,o){o.push('<span class="objectBox-number">',escapeHTML(objectToString(e)),"</span>");
}function appendFunction(e,o){o.push('<span class="objectBox-function">',getObjectAbbr(e),"</span>");
}function appendObject(e,o){try{void 0===e?appendNull("undefined",o):null===e?appendNull("null",o):"string"==typeof e?appendString(e,o):"number"==typeof e?appendInteger(e,o):"function"==typeof e?appendFunction(e,o):1==e.nodeType?appendSelector(e,o):"object"==typeof e?appendObjectFormatted(e,o):appendText(e,o);
}catch(n){}}function appendObjectFormatted(e,o){var n=objectToString(e),t=/\[object (.*?)\]/,i=t.exec(n);
o.push('<span class="objectBox-object">',i?i[1]:n,"</span>")}function appendSelector(e,o){
o.push('<span class="objectBox-selector">'),o.push('<span class="selectorTag">',escapeHTML(e.nodeName.toLowerCase()),"</span>"),
e.id&&o.push('<span class="selectorId">#',escapeHTML(e.id),"</span>"),e.className&&o.push('<span class="selectorClass">.',escapeHTML(e.className),"</span>"),
o.push("</span>")}function appendNode(e,o){if(1==e.nodeType){o.push('<div class="objectBox-element">','&lt;<span class="nodeTag">',e.nodeName.toLowerCase(),"</span>");
for(var n=0;n<e.attributes.length;++n){var t=e.attributes[n];t.specified&&o.push('&nbsp;<span class="nodeName">',t.nodeName.toLowerCase(),'</span>=&quot;<span class="nodeValue">',escapeHTML(t.nodeValue),"</span>&quot;");
}if(e.firstChild){o.push('&gt;</div><div class="nodeChildren">');for(var i=e.firstChild;i;i=i.nextSibling)appendNode(i,o);
o.push('</div><div class="objectBox-element">&lt;/<span class="nodeTag">',e.nodeName.toLowerCase(),"&gt;</span></div>");
}else o.push("/&gt;</div>")}else 3==e.nodeType&&o.push('<div class="nodeText">',escapeHTML(e.nodeValue),"</div>");
}function addEvent(e,o,n){document.all?e.attachEvent("on"+o,n):e.addEventListener(o,n,!1);
}function removeEvent(e,o,n){document.all?e.detachEvent("on"+o,n):e.removeEventListener(o,n,!1);
}function cancelEvent(e){document.all?e.cancelBubble=!0:e.stopPropagation()}function onError(e,o,n){
var t=o.lastIndexOf("/"),i=-1==t?o:o.substr(t+1),r=['<span class="errorMessage">',e,"</span>",'<div class="objectBox-sourceLink">',i," (line ",n,")</div>"];
logRow(r,"error")}function onKeyDown(e){var o=(new Date).getTime();if(o>onKeyDownTime+200){
e=dojo.fixEvent(e);var n=dojo.keys,t=e.keyCode;if(onKeyDownTime=o,t==n.F12)toggleConsole();else{
if(t!=n.NUMPAD_ENTER&&76!=t||!e.shiftKey||!e.metaKey&&!e.ctrlKey)return;focusCommandLine();
}cancelEvent(e)}}function onCommandLineKeyDown(e){var o=dojo.keys;13==e.keyCode&&commandLine.value?(addToHistory(commandLine.value),
evalCommandLine()):27==e.keyCode?commandLine.value="":e.keyCode==o.UP_ARROW||e.charCode==o.UP_ARROW?navigateHistory("older"):e.keyCode==o.DOWN_ARROW||e.charCode==o.DOWN_ARROW?navigateHistory("newer"):e.keyCode==o.HOME||e.charCode==o.HOME?(historyPosition=1,
navigateHistory("older")):(e.keyCode==o.END||e.charCode==o.END)&&(historyPosition=999999,
navigateHistory("newer"))}function addToHistory(e){var o=cookie("firebug_history");
o=o?dojo.fromJson(o):[];var n=dojo.indexOf(o,e);for(-1!=n&&o.splice(n,1),o.push(e),
cookie("firebug_history",dojo.toJson(o),30);o.length&&!cookie("firebug_history");)o.shift(),
cookie("firebug_history",dojo.toJson(o),30);historyCommandLine=null,historyPosition=-1;
}function navigateHistory(e){var o=cookie("firebug_history");o=o?dojo.fromJson(o):[],
o.length&&(null===historyCommandLine&&(historyCommandLine=commandLine.value),-1==historyPosition&&(historyPosition=o.length),
"older"==e?(--historyPosition,0>historyPosition&&(historyPosition=0)):"newer"==e&&(++historyPosition,
historyPosition>o.length&&(historyPosition=o.length)),historyPosition==o.length?(commandLine.value=historyCommandLine,
historyCommandLine=null):commandLine.value=o[historyPosition])}function cookie(e,o){
var n=document.cookie;if(1==arguments.length){var t=n.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));
return t?decodeURIComponent(t[1]):void 0}var i=new Date;i.setMonth(i.getMonth()+1),
document.cookie=e+"="+encodeURIComponent(o)+(i.toUtcString?"; expires="+i.toUTCString():"");
}function isArray(e){return e&&e instanceof Array||"array"==typeof e}function objectLength(e){
var o=0;for(var n in e)o++;return o}function printObject(e,o,n,t){var i=" 	";n=n||"",
o=o||i,t=t||[];var r;if(e&&1==e.nodeType){var s=[];return appendNode(e,s),s.join("");
}var c=",\n",a=0,l=objectLength(e);if(e instanceof Date)return o+e.toString()+c;e:for(var d in e)if(a++,
a==l&&(c="\n"),e[d]===window||e[d]===document);else if(null===e[d])n+=o+d+" : NULL"+c;else if(e[d]&&e[d].nodeType)1==e[d].nodeType||3==e[d].nodeType&&(n+=o+d+" : [ TextNode "+e[d].data+" ]"+c);else if("object"==typeof e[d]&&(e[d]instanceof String||e[d]instanceof Number||e[d]instanceof Boolean))n+=o+d+" : "+e[d]+","+c;else if(e[d]instanceof Date)n+=o+d+" : "+e[d].toString()+c;else if("object"==typeof e[d]&&e[d]){
for(var u,p=0;u=t[p];p++)if(e[d]===u){n+=o+d+" : RECURSION"+c;continue e}t.push(e[d]),
r=isArray(e[d])?["[","]"]:["{","}"],n+=o+d+" : "+r[0]+"\n",n+=printObject(e[d],o+i,"",t),
n+=o+r[1]+c}else if("undefined"==typeof e[d])n+=o+d+" : undefined"+c;else if("toString"==d&&"function"==typeof e[d]){
var f=e[d]();"string"==typeof f&&f.match(/function ?(.*?)\(/)&&(f=escapeHTML(getObjectAbbr(e[d]))),
n+=o+d+" : "+f+c}else n+=o+d+" : "+escapeHTML(getObjectAbbr(e[d]))+c;return n}function getObjectAbbr(e){
var o=e instanceof Error;if(1==e.nodeType)return escapeHTML("< "+e.tagName.toLowerCase()+' id="'+e.id+'" />');
if(3==e.nodeType)return escapeHTML('[TextNode: "'+e.nodeValue+'"]');var n=e&&(e.id||e.name||e.ObjectID||e.widgetId);
if(!o&&n)return"{"+n+"}";var t=2,i=4,r=0;if(o)n="[ Error: "+(e.message||e.description||e)+" ]";else if(isArray(e))n="["+e.slice(0,i).join(","),
e.length>i&&(n+=" ... ("+e.length+" items)"),n+="]";else if("function"==typeof e){
n=e+"";var s=/function\s*([^\(]*)(\([^\)]*\))[^\{]*\{/,c=s.exec(n);c?(c[1]||(c[1]="function"),
n=c[1]+c[2]):n="function()"}else if("object"!=typeof e||"string"==typeof e)n=e+"";else{
n="{";for(var a in e){if(r++,r>t)break;n+=a+":"+escapeHTML(e[a])+"  "}n+="}"}return n;
}var isNewIE=/Trident/.test(window.navigator.userAgent);if(isNewIE){for(var calls=["log","info","debug","warn","error"],i=0;i<calls.length;i++){
var m=calls[i];if(console[m]&&!console[m]._fake){var n="_"+calls[i];console[n]=console[m],
console[m]=function(){var e=n;return function(){console[e](Array.prototype.join.call(arguments," "));
}}()}}try{console.clear()}catch(e){}}if(!(has("ff")||has("chrome")||has("safari")||isNewIE||window.firebug||"undefined"!=typeof console&&console.firebug||dojo.config.useCustomLogger||has("air"))){
try{if(window!=window.parent)return void(window.parent.console&&(window.console=window.parent.console));
}catch(e){}var _firebugDoc=document,_firebugWin=window,__consoleAnchorId__=0,consoleFrame=null,consoleBody=null,consoleObjectInspector=null,fireBugTabs=null,commandLine=null,consoleToolbar=null,frameVisible=!1,messageQueue=[],groupStack=[],timeMap={},countMap={},consoleDomInspector=null,_inspectionMoveConnection,_inspectionClickConnection,_inspectionEnabled=!1,_inspectionTimer=null,_inspectTempNode=document.createElement("div"),_inspectCurrentNode,_restoreBorderStyle;
window.console={_connects:[],log:function(){logFormatted(arguments,"")},debug:function(){
logFormatted(arguments,"debug")},info:function(){logFormatted(arguments,"info")},
warn:function(){logFormatted(arguments,"warning")},error:function(){logFormatted(arguments,"error");
},assert:function(e,o){if(!e){for(var n=[],t=1;t<arguments.length;++t)n.push(arguments[t]);
throw logFormatted(n.length?n:["Assertion Failure"],"error"),o?o:"Assertion Failure";
}},dir:function(e){var o=printObject(e);o=o.replace(/\n/g,"<br />"),o=o.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),
logRow([o],"dir")},dirxml:function(e){var o=[];appendNode(e,o),logRow(o,"dirxml");
},group:function(){logRow(arguments,"group",pushGroup)},groupEnd:function(){logRow(arguments,"",popGroup);
},time:function(e){timeMap[e]=(new Date).getTime()},timeEnd:function(e){if(e in timeMap){
var o=(new Date).getTime()-timeMap[e];logFormatted([e+":",o+"ms"]),delete timeMap[e];
}},count:function(e){countMap[e]||(countMap[e]=0),countMap[e]++,logFormatted([e+": "+countMap[e]]);
},trace:function(e){var o=e||3,n=console.trace.caller;console.log(">>> console.trace(stack)");
for(var t=0;o>t;t++){for(var i=n.toString(),r=[],s=0;s<n.arguments.length;s++)r.push(n.arguments[s]);
n.arguments.length?console.dir({"function":i,arguments:r}):console.dir({"function":i
}),n=n.caller}},profile:function(){this.warn(["profile() not supported."])},profileEnd:function(){},
clear:function(){if(consoleBody)for(;consoleBody.childNodes.length;)dojo.destroy(consoleBody.firstChild);
dojo.forEach(this._connects,dojo.disconnect)},open:function(){toggleConsole(!0)},
close:function(){frameVisible&&toggleConsole()},_restoreBorder:function(){_inspectCurrentNode&&(_inspectCurrentNode.style.border=_restoreBorderStyle);
},openDomInspector:function(){_inspectionEnabled=!0,consoleBody.style.display="none",
consoleDomInspector.style.display="block",consoleObjectInspector.style.display="none",
document.body.style.cursor="pointer",_inspectionMoveConnection=dojo.connect(document,"mousemove",function(e){
if(_inspectionEnabled&&!_inspectionTimer){_inspectionTimer=setTimeout(function(){
_inspectionTimer=null},50);var o=e.target;if(o&&_inspectCurrentNode!==o){console._restoreBorder();
var n=[];appendNode(o,n),consoleDomInspector.innerHTML=n.join(""),_inspectCurrentNode=o,
_restoreBorderStyle=_inspectCurrentNode.style.border,_inspectCurrentNode.style.border="#0000FF 1px solid";
}}}),setTimeout(function(){_inspectionClickConnection=dojo.connect(document,"click",function(e){
document.body.style.cursor="",_inspectionEnabled=!_inspectionEnabled,dojo.disconnect(_inspectionClickConnection);
})},30)},_closeDomInspector:function(){document.body.style.cursor="",dojo.disconnect(_inspectionMoveConnection),
dojo.disconnect(_inspectionClickConnection),_inspectionEnabled=!1,console._restoreBorder();
},openConsole:function(){consoleBody.style.display="block",consoleDomInspector.style.display="none",
consoleObjectInspector.style.display="none",console._closeDomInspector()},openObjectInspector:function(){
consoleBody.style.display="none",consoleDomInspector.style.display="none",consoleObjectInspector.style.display="block",
console._closeDomInspector()},recss:function(){var e,o,n;for(o=document.getElementsByTagName("link"),
e=0;e<o.length;e++)if(n=o[e],n.rel.toLowerCase().indexOf("stylesheet")>=0&&n.href){
var t=n.href.replace(/(&|%5C?)forceReload=\d+/,"");n.href=t+(t.indexOf("?")>=0?"&":"?")+"forceReload="+(new Date).valueOf();
}}},dojo.addOnLoad(createFrame);var onKeyDownTime=(new Date).getTime(),historyPosition=-1,historyCommandLine=null;
addEvent(document,has("ie")||has("safari")?"keydown":"keypress",onKeyDown),("true"==document.documentElement.getAttribute("debug")||dojo.config.isDebug)&&toggleConsole(!0),
dojo.addOnWindowUnload(function(){removeEvent(document,has("ie")||has("safari")?"keydown":"keypress",onKeyDown),
window.onFirebugResize=null,window.console=null})}});