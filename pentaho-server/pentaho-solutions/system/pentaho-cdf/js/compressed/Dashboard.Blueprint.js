define("cdf/dashboard/RefreshEngine",["amd!../lib/underscore"],function(t){return function(t){
var e=0,n=new Array,r=null,i=e,a=null,o=function(){return{nextRefresh:0,component:null
}},s=function(n){null!=a&&(clearInterval(a),a=null),i=n>0?n:e,i!=e&&(a=setInterval(t.refreshEngine.fireGlobalRefresh,1e3*i));
},u=function(t){for(var e=0;e<n.length;e++)n[e].component==t&&(n.splice(e,1),e--);
},c=function(){n.length>0&&n.splice(0,n.length)},l=function(t,e){for(var n,r=t.length-1,i=0;r>=i;)if(n=parseInt((i+r)/2),
t[n].nextRefresh>e.nextRefresh)r=n-1;else{if(!(t[n].nextRefresh<e.nextRefresh))return n;
i=n+1}return i},d=function(t,e){var n=l(t,e);t.splice(n,0,e)},h=function(){null!=r&&(clearTimeout(r),
r=null)},f=function(){h(),t.refreshEngine.fireRefresh()},p=function(){return(new Date).getTime();
},g=function(t){return n.length>0&&n[0].component==t},m=function(e){t.update(e)},b=function(r){
var i=p();if(!(r.refreshPeriod>0)){r.refreshPeriod=e;var a=r.chartDefinition&&r.chartDefinition.dataSource?a=r.chartDefinition.dataSource:r.queryDefinition&&r.queryDefinition.dataSource?r.queryDefinition.dataSource:null;
null!==a&&t.dataSources&&t.dataSources[a]&&!isNaN(+t.dataSources[a].componentRefreshPeriod)&&+t.dataSources[a].componentRefreshPeriod>0&&(r.refreshPeriod=+t.dataSources[a].componentRefreshPeriod);
}if(r.refreshPeriod!=e){var s=new o;s.nextRefresh=i+1e3*r.refreshPeriod,s.component=r,
d(n,s)}},v=function(t){u(t),b(t)};return{registerComponent:function(t,n){if(!t)return!1;
t.refreshPeriod=n>0?n:e;var r=g(t);return u(t),r&&f(),!0},getRefreshPeriod:function(t){
return t&&t.refreshPeriod>0?t.refreshPeriod:e},processComponent:function(t){return v(t),
g(t)&&f(),!0},processComponents:function(){c();for(var e=0;e<t.components.length;e++)b(t.components[e]);
return f(),!0},fireRefresh:function(){r=null;for(var e=p(),i=null;n.length>0&&n[0].nextRefresh<=e;){
var a=n.shift();i=a.component,t.isComponentUpdating(i)?b(i):m(i)}n.length>0&&(r=setTimeout(t.refreshEngine.fireRefresh,n[0].nextRefresh-e));
},fireGlobalRefresh:function(){for(var e=0;e<t.components.length;e++){var n=t.components[e];
n.refreshPeriod>0||"select"==n.type||m(n)}},setGlobalRefresh:function(t){s(t)},getQueue:function(){
return n}}}}),define("cdf/dashboard/Dashboard",["../lib/Base","../Logger","./RefreshEngine","pentaho/environment","amd!../lib/underscore","amd!../lib/backbone","../lib/jquery","module","amd!../lib/jquery.impromptu","../lib/shims"],function(t,e,n,r,i,a,o,s){
return t.extend({constructor:function(t){function s(t,n){"function"==typeof t?(e.info("Calling init method of module: "+n),
t.apply(c)):e.warn("Not calling init method of module: "+n)}function u(){var t=this;
"function"==typeof o?(o.ajaxSetup({type:"POST",async:!1,traditional:!0,scriptCharset:"utf-8",
contentType:"application/x-www-form-urlencoded;charset=UTF-8",dataFilter:function(e,n){
return t.lastServerResponse=Date.now?Date.now():(new Date).getTime(),e}}),o.prompt&&"function"==typeof o.prompt.setDefaults?o.prompt.setDefaults({
prefix:"jqi",show:"slideDown"}):e.log("$.prompt plugin not loaded!!"),"function"==typeof o.blockUI?(o.blockUI.defaults.fadeIn=0,
o.blockUI.defaults.message='<div class="blockUIDefaultImg"></div>',o.blockUI.defaults.css.left="50%",
o.blockUI.defaults.css.top="40%",o.blockUI.defaults.css.marginLeft="-16px",o.blockUI.defaults.css.width="32px",
o.blockUI.defaults.css.background="none",o.blockUI.defaults.overlayCSS={backgroundColor:"#FFFFFF",
opacity:.8,cursor:"wait"},o.blockUI.defaults.css.border="none"):e.log("$.blockUI plugin not loaded!!")):e.log("jQuery plugin not loaded!!");
}var c=this;t&&(t.context&&(this.context=t.context),t.storage&&(this.context&&"anonymousUser"===this.context.user||(this.storage=t.storage)),
t.view&&(this.view=t.view),this.isSilent=!!t.isSilent),i.extend(this,a.Events),u.call(c);
var l=r.server.root;null!=l&&(this.webAppPath=l.toString()),null==this.webAppPath&&(this.webAppPath="/"+window.location.pathname.split("/")[1]),
this.webAppPath.endsWith("/")&&(this.webAppPath=this.webAppPath.substr(0,this.webAppPath.length-1)),
s(this._initContext,"Context"),s(this._initStorage,"Storage"),s(this._initViews,"Views"),
s(this._initParameters,"Parameters"),s(this._initBookmarkables,"Bookmarkables"),s(this._initI18n,"I18n"),
s(this._initComponents,"Components"),s(this._initLifecycle,"Lifecycle"),s(this._initNotifications,"Notifications"),
s(this._initDataSources,"DataSources"),s(this._initQuery,"Query"),s(this._initAddIns,"AddIns"),
this.refreshEngine=new n(this)},refreshEngine:void 0,globalContext:!1,contextObj:s.config().context||{},
storageObj:s.config().storage||{},viewObj:s.config().view,legacyPriority:-1e3,logLifecycle:!0,
args:[],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],
isSilent:!1,registerEvent:function(t,e){"undefined"==typeof this.events&&(this.events={}),
this.events[t]=e},debug:1,syncDebugLevel:function(){var t=1;try{var e=function(t){
return t&&/\bdebug=true\b/.test(t)?t:null},n=e(window.location.href)||e(window.top.location.href);
if(n){var r=/\bdebugLevel=(\d+)/.exec(n);t=r?+r[1]:3}}catch(i){}return this.debug=t;
},setGlobalContext:function(t){this.globalContext=t},getWebAppPath:function(){return this.webAppPath;
},getWcdfSettings:function(){return e.info("getWcdfSettings was not overridden, returning empty object"),
{}},normalizeId:function(t){return t}})}),define("cdf/dashboard/Dashboard.context",["../lib/jquery","./Dashboard","./Dashboard.ext","./Dashboard.context.ext"],function(t,e,n,r){
e.implement({context:void 0,_initContext:function(){this.context||(this.context={},
t.extend(this.context,this.contextObj))}})}),define("cdf/dashboard/Container",[],function(){
function t(t,e,r){var i;r||(r="instance"),this.build=function(n,a){if(i&&!a)return i;
var o=e(t,n);return a||"singleton"!==r||(i=o),o},this.dispose=function(){i&&(n(i),
i=null)}}function e(t,e,r){r||(r="external"),this.build=function(){return e},this.dispose=function(){
e&&("singleton"===r&&n(e),e=null)}}function n(t){"function"==typeof t.dispose&&t.dispose();
}function r(t){for(var e in t)if(i.call(t,e))return!1;return!0}var i=Object.prototype.hasOwnProperty;
return function(){function n(t,e){if(!t)throw new Error("Argument 'type' is required.");
if("string"!=typeof t)throw new Error("Argument 'type' must be a string.");var n=s[t];
if(!e&&(!n||r(n)))throw new Error("There are no registrations for type '"+t+"'.");
return n}function i(t,e,r){var i,a=n(t,r);if(a&&(i=a[e||""],!i&&!r))throw new Error("There is no registration for type '"+t+"'"+(e?" and name '"+e+"'":"")+".");
return i}function a(t,e,n,r,a){"string"!=typeof e&&(n=e,e="");var o=i(t,e,a);return n?r=!0:r||(n={}),
o?o.build(n,r):null}function o(t,e){var r=n(t,e),i=[];for(var a in r)i.push(r[a].build({},!1));
return i}this.register=function(n,r,i,a){if(!n)throw new Error("Argument 'type' is required.");
if("string"!=typeof n)throw new Error("Argument 'type' must be a string.");if(null!=r&&("string"!=typeof r?(a=i,
i=r,r=null):r||(r=null)),!i)throw new Error("Argument 'what' is required.");var o;
switch(typeof i){case"function":o=new t(this,i,a);break;case"object":o=new e(this,i,a);
break;default:throw new Error("Argument 'what' is of an invalid type.")}r||(r="");
var u=s[n]||(s[n]={}),c=u[r];c&&c.dispose(),u[r]=o},this.has=function(t,e){return!!i(t,e,!0);
},this.canNew=function(e,n){return i(e,n,!1)instanceof t},this.get=function(t,e){
return a(t,e,null,!1,!1)},this.tryGet=function(t,e){return a(t,e,null,!1,!0)},this.getNew=function(t,e,n){
return a(t,e,n,!0,!1)},this.tryGetNew=function(t,e,n){return a(t,e,n,!0,!0)},this.getAll=function(t){
return o(t,!1)},this.tryGetAll=function(t){return o(t,!0)},this.listType=function(t){
return n(t,!1)},this.tryListType=function(t){return n(t,!0)},this.dispose=function(){
if(s){for(var t in s){var e=s[t];for(var n in e)e[n].dispose()}s=null}};var s={}};
}),define("cdf/dashboard/Dashboard.addIns",["./Dashboard","./Container","./Utils"],function(t,e,n){
function r(t,e){return-1!==t.indexOf("Component",t.length-"Component".length)&&(t=t.substring(0,t.length-"Component".length)),
t=t.charAt(0).toUpperCase()+t.substring(1),e&&(t+="."+e),t}var i=new e;t.registerGlobalAddIn=function(t,e,n){
var t=r(t,e),a=n.getName?n.getName():null;i.register(t,a,n)},t.implement({addIns:void 0,
_initAddIns:function(){this.addIns=n.clone(i)},registerGlobalAddIn:function(e,n,r){
t.registerGlobalAddIn(e,n,r)},registerAddIn:function(t,e,n){var t=r(t,e),i=n.getName?n.getName():null;
this.addIns.register(t,i,n)},hasAddIn:function(t,e,n){var t=r(t,e);return Boolean(this.addIns&&this.addIns.has(t,n));
},getAddIn:function(t,e,n){var t=r(t,e);try{var i=this.addIns.get(t,n);return i}catch(a){
return null}},setAddInDefaults:function(t,e,n,r){var i=this.getAddIn(t,e,n);i&&i.setDefaults(r);
},listAddIns:function(t,e){var t=r(t,e);try{return this.addIns.listType(t)}catch(n){
return[]}}})}),define("cdf/dashboard/Dashboard.bookmarkable",["./Dashboard","../Logger","./Utils","../lib/jquery"],function(t,e,n,r){
t.implement({_initBookmarkables:function(){this.bookmarkables={}},getHashValue:function(t){
var e,n=window.location.hash;try{e=JSON.parse(n.slice(1))}catch(r){e={}}return 0===arguments.length?e:e[t];
},setHashValue:function(t,e){var n;1==arguments.length?n=t:(n=this.getHashValue(),
n[t]=e);var r=JSON.stringify(n);"{}"!=r?window.location.hash=r:window.location.hash&&(window.location.hash="");
},deleteHashValue:function(t){if(0===arguments.length)window.location.hash="";else{
var e=this.getHashValue();delete e[t],this.setHashValue(e)}},setBookmarkable:function(t,e){
1===arguments.length?this.bookmarkables[t]=!0:this.bookmarkables[t]=e},isBookmarkable:function(t){
return Boolean(this.bookmarkables[t])},generateBookmarkState:function(){var t={},e=this.bookmarkables;
for(var n in e)e.hasOwnProperty(n)&&e[n]&&(t[n]=this.getParameterValue(n));return t;
},persistBookmarkables:function(t){this.bookmarkables[t]&&this.finishedInit&&this.setBookmarkState({
impl:"client",params:this.generateBookmarkState()})},setBookmarkState:function(t){
if(window.history&&window.history.replaceState){var e,i=window.location.pathname.split("/").pop(),a=window.location.search.slice(1).split("&").map(function(t){
var e=t.split("=");return e[1]=decodeURIComponent(e[1]),e});a=n.propertiesArrayToObject(a),
a.bookmarkState=JSON.stringify(t),e=i+"?"+r.param(a),window.history.replaceState({},"",e),
this.deleteHashValue("bookmark")}else this.setHashValue("bookmark",t)},getBookmarkState:function(){
if(window.location.hash.length>1)try{return this.getHashValue("bookmark")||{}}catch(t){}
var e=window.location.search.slice(1).split("&").map(function(t){var e=t.split("=");
return e[1]=decodeURIComponent(e[1]),e}),r=n.propertiesArrayToObject(e);return r.bookmarkState?JSON.parse(decodeURIComponent(r.bookmarkState.replace(/\+/g," ")))||{}:{};
},restoreBookmarkables:function(){var t;try{t=this.getBookmarkState().params;for(var n in t)t.hasOwnProperty(n)&&this.setParameter(n,t[n]);
}catch(r){e.log(r,"error")}}})}),define("cdf/dashboard/Dashboard.components",["./Dashboard","amd!../lib/backbone","../lib/mustache","../Logger","../lib/jquery"],function(t,e,n,r,i){
t.implement({components:[],_initComponents:function(){this.components=[]},getComponent:function(t){
if(!t||"string"!=typeof t)return void r.warn("getComponent: invalid component name");
for(var e in this.components)if(this.components[e].name===t)return this.components[e];
},getComp:function(t){return this.getComponent(t)},getComponentByName:function(t){
return this.getComponent(t)},addComponents:function(t){return i.isArray(t)?void t.forEach(function(t){
this.addComponent(t)},this):void r.warn("addComponents: components in a structure other than an array will not be added");
},addComponent:function(t,e){if(!t||!t.name)throw r.error("addComponent: invalid component"),
new Error("addComponent: invalid component");var n=this.getComponentByName(t.name);
if(n){if(n!==t)throw r.error("addComponent: duplicate component name '"+t.name+"'"),
new Error("addComponent: duplicate component name '"+t.name+"'");return this}this._bindControl(t);
var i=e&&e.index,a=this.components.length;return null==i||0>i||i>=a?this.components.push(t):this.components.splice(i,0,t),
this},getComponentIndex:function(t){if(null!=t)switch(typeof t){case"string":for(var e=0,n=this.components,r=n.length;r>e;e++)if(n[e].name===t)return e;
break;case"number":if(t>=0&&t<this.components.length)return t;break;default:return this.components.indexOf(t);
}return-1},removeComponent:function(t){var e=this.getComponentIndex(t);if(-1===e)return void r.warn("removeComponent: component not found");
var n=this.components[e];return this.components.splice(e,1),n.dashboard=null,n.off("cdf:postExecution"),
n.off("cdf:preExecution"),n.off("cdf:error"),n.off("all"),n},_bindControl:function(t){
return t.dashboard||(t.dashboard=this,this._addLogLifecycleToControl(t)),t},_bindExistingControl:function(t){
return t.dashboard||(t.dashboard=this,delete t.initInstance,"function"==typeof t.off&&t.off("all"),
t.on||i.extend(t,e.Events),this._addLogLifecycleToControl(t),(null==t.priority||""===t.priority)&&(t.priority=this.legacyPriority++)),
t},_castControlToClass:function(t,e){if(!(t instanceof e)){var n=this._makeInstance(e);
i.extend(t,n)}},_getControlClass:function(t){var e=t.type;"function"==typeof e&&(e=e.call(t));
for(var n=e.substring(0,1).toUpperCase()+e.substring(1),r=[n+"Component",e,n],i=0,a=r.length;a>i;i++){
var o=window[r[i]];if(o&&"function"==typeof o)return o}},_makeInstance:function(t,e){
var n=Object.create(t.prototype);return e?t.apply(n,e):t.apply(n),n},_castControlToComponent:function(t,e){
if(!(t instanceof BaseComponent||e&&e.prototype instanceof BaseComponent)){var n=BaseComponent.prototype;
for(var r in n)if(n.hasOwnProperty(r)&&void 0===t[r]&&"function"==typeof n[r])switch(r){
case"base":break;default:t[r]=n[r]}}},_addLogLifecycleToControl:function(t){t.on("all",function(t){
var e=this.dashboard;if(e&&e.logLifecycle&&"cdf"!==t&&"PostInitMarker"!==this.name&&"undefined"!=typeof console){
var i,a=t.substr(4);switch(a){case"preExecution":i=">Start";break;case"postExecution":
i="<End  ";break;case"error":i="!Error";break;default:i="      "}var o=n.render("Timing: {{elapsedSinceStartDesc}} since start, {{elapsedSinceStartDesc}} since last event",this.splitTimer());
r.log("          [Lifecycle "+i+"] "+this.name+" ["+this.type+"] (P: "+this.priority+" ): "+a+" "+o+" (Running: "+this.dashboard.runningCalls+")","log","color: "+this.getLogColor());
}})}})}),define("cdf/dashboard/Dashboard.i18n",["../Logger","./Dashboard","./Dashboard.ext","pentaho/environment","../lib/moment","../lib/CCC/cdo","../lib/cdf.jquery.i18n"],function(t,e,n,r,i,a,o){
var s="i18n support wasn't properly initiated. Is the file messages_supported_languages.properties present?";
e.implement({_i18nSupport:void 0,set i18nSupport(t){o.extend(this._i18nSupport,t);
},get i18nSupport(){return this._i18nCurrentLanguageCode},_i18nCurrentLanguageCode:void 0,
set i18nCurrentLanguageCode(t){this._i18nCurrentLanguageCode=t},get i18nCurrentLanguageCode(){
return this._i18nCurrentLanguageCode},_initI18n:function(){this.i18nCurrentLanguageCode=void 0,
this.i18nSupport={prop:function(e){return t.warn(s),e}};var e=this.__normalizeLocale();
o.i18n.properties({name:"messages",mode:"map",language:e,path:n.getStaticResource("resources/languages/"),
callback:this.__initI18nCallback.bind(this,e)});var r=a.format.language(e);a.format.language(r),
i.locale(e)},__initI18nCallback:function(t){var e=function(){this.i18nCurrentLanguageCode=t,
this.i18nSupport=o.i18n};o.i18n.properties({name:"messages",mode:"map",type:"GET",
language:t,path:this.getMessagesPath(),callback:e.bind(this)})},__normalizeLocale:function(){
var t=r.locale;return null!=t?t.split("-").join("_"):null},setI18nSupport:function(t,e){
this.i18nCurrentLanguageCode=t,this.i18nSupport=e},getMessagesPath:function(){}});
}),define("cdf/dashboard/Dashboard.legacy",["../queries/CdaQuery.ext","../components/XactionComponent.ext","./Dashboard.ext","./Dashboard","../Logger","../lib/jquery","css!./Dashboard.legacy.css"],function(t,e,n,r,i,a){
r.implement({callPentahoAction:function(t,e,n,r,i,a){var o=this;return"function"==typeof a?o.pentahoAction(e,n,r,i,function(e){
a(o.parseXActionResult(t,e))}):o.parseXActionResult(t,o.pentahoAction(e,n,r,i,a));
},urlAction:function(t,e,n){return this.executeAjax("xml",t,e,n)},executeAjax:function(t,e,n,r){
if("function"==typeof r)return a.ajax({url:e,type:"POST",traditional:!0,dataType:t,
async:!0,data:n,complete:function(t,e){r(t.responseXML)},error:function(t,e,n){i.error("Found error: "+t+" - "+e+", Error: "+n);
}});var o=a.ajax({url:e,type:"POST",dataType:t,async:!1,data:n,error:function(t,e,n){
i.error("Found error: "+t+" - "+e+", Error: "+n)}});return"xml"==t?o.responseXML:o.responseText;
},pentahoAction:function(t,e,n,r,i){return this.pentahoServiceAction("ServiceAction","xml",t,e,n,r,i);
},pentahoServiceAction:function(t,e,r,i,o,s,u){var c=n.getServiceAction(t,r,i,o),l=c.url;
return delete c.url,a.each(s,function(t,e){c[e[0]]=e[1]}),this.executeAjax(e,l,c,u);
},CDF_ERROR_DIV:"cdfErrorDiv",createAndCleanErrorDiv:function(){0==a("#"+this.CDF_ERROR_DIV).length&&a("body").append("<div id='"+this.CDF_ERROR_DIV+"'></div>"),
a("#"+this.CDF_ERROR_DIV).empty()},showErrorTooltip:function(){a(function(){a.tooltip&&a(".cdf_error").tooltip({
delay:0,track:!0,fade:250,showBody:" -- "})})},parseXActionResult:function(t,e){var n=a(e),r=n.find("SOAP-ENV\\:Fault");
if(0==r.length)return n;var i="Error executing component "+t.name,o=new Array;o[0]=" Error details for component execution "+t.name+" -- ",
o[1]=r.find("SOAP-ENV\\:faultstring").find("SOAP-ENV\\:Text:eq(0)").text(),r.find("SOAP-ENV\\:Detail").find("message").each(function(){
o.push(a(this).text())}),o.length>8&&(o=o.slice(0,7),o.push("..."));var s="<table class='errorMessageTable' border='0'><tr><td class='errorIcon'></td><td><span class='cdf_error' title=\""+o.join("<br/>").replace(/"/g,"'")+'" >'+i+" </span></td></tr></table>";
return 0==t.visible?a("#"+this.CDF_ERROR_DIV).append("<br />"+s):a("#"+t.htmlObject).html(s),
null},setSettingsValue:function(t,e){var r={method:"set",key:t,value:JSON.stringify(e)
};a.post(n.getSettings("set",null),r,function(){})},getSettingsValue:function(t,e){
a.ajax({type:"GET",dataType:"json",url:n.getSettings("get",t),data:args,async:!0,
xhrFields:{withCredentials:!0}}).done("function"==typeof e?e:function(t){e=t})},fetchData:function(e,n,r){
if(i.warn("Dashboard fetchData() is deprecated. Use Query objects instead"),void 0!=e&&void 0!=e.dataAccessId){
for(var o in n)e["param"+n[o][0]]=this.getParameterValue(n[o][1]);a.post(t.getDoQuery(),e,function(t){
r(t)},"json").error(this.handleServerError)}else r([])}})}),define("cdf/dashboard/Dashboard.lifecycle",["./Dashboard","../Logger","amd!../lib/underscore","../components/UnmanagedComponent","../lib/jquery"],function(t,e,n,r,i){
t.implement({initCounter:void 0,runningCalls:void 0,lastServerResponse:void 0,serverCheckResponseTimeout:void 0,
_initLifecycle:function(){this.initCounter=0,this.runningCalls=0,this.lastServerResponse=Date.now?Date.now():(new Date).getTime(),
this.serverCheckResponseTimeout=1/0},resetRunningCalls:function(){this.runningCalls=0,
setTimeout(n.bind(function(){this.hideProgressIndicator()},this),10)},getRunningCalls:function(){
return this.runningCalls},incrementRunningCalls:function(){this.runningCalls++,this.showProgressIndicator(),
e.log("+Running calls incremented to: "+this.getRunningCalls())},decrementRunningCalls:function(){
this.runningCalls--,e.log("-Running calls decremented to: "+this.getRunningCalls()),
setTimeout(n.bind(function(){this.runningCalls<=0&&(this.hideProgressIndicator(),
this.runningCalls=0)},this),10)},init:function(t){var r=this,a=r.initCounter++;e.log("InitInstance "+a),
0==a&&(r.syncDebugLevel(),r.initialStorage?n.extend(r.storage,r.initialStorage):r.loadStorage(),
null!=r.context&&null!=r.context.sessionTimeout&&(r.serverCheckResponseTimeout=900*r.context.sessionTimeout),
r.restoreBookmarkables(),r.restoreView(),r.syncParametersInit()),n.isArray(t)&&r.addComponents(t),
n.chain(r.components).filter(function(t){return"undefined"==typeof t.initInstance;
}).each(function(t){t.initInstance=a}),i(function(){r._initEngine(a)})},_initEngine:function(t){
var a=this;a.waitingForInit&&a.waitingForInit.length&&e.log("Overlapping initEngine!","warn");
var o=null!=t?n.where(a.components,{initInstance:t}):a.components;a.waitingForInit&&0!==a.waitingForInit.length||a.finishedInit||a.incrementRunningCalls(),
e.log("          [Lifecycle >Start] Init["+t+"] (Running: "+a.getRunningCalls()+")","log","color: #ddd"),
a.createAndCleanErrorDiv(),"function"==typeof a.preInit&&a.preInit(),a.trigger("cdf cdf:preInit",a),
i(window).trigger("cdfAboutToLoad");var s,a=a,u=[];for(s=0;s<o.length;s++)o[s].executeAtStart&&u.push(o[s]);
if(!u.length)return void a._handlePostInit();if(!a.getComponent("PostInitMarker")){
var c=new r({name:"PostInitMarker",type:"unmanaged",lifecycle:{silent:!0},executeAtStart:!0,
priority:999999999});a.addComponent(c),u.push(c)}a.waitingForInit=u.slice();for(var l=function(e,r){
2==arguments.length&&r||(a.waitingForInit=n(a.waitingForInit).without(e),e.off("cdf:postExecution",l),
e.off("cdf:preExecution",l),e.off("cdf:error",l),a._handlePostInit(t))},s=0,d=u.length;d>s;s++){
var h=u[s];h.on("cdf:postExecution cdf:preExecution cdf:error",l,a)}a.updateAll(u),
o.length>0&&a._handlePostInit(t)},_handlePostInit:function(t){var r=this,a=function(){
var t=n.filter(r.components,function(t){return"duplicate"==t.type}),e={},a=r.getBookmarkState().params||{};
n.map(n.filter(Object.keys(a),function(t){return/(_[0-9]+)+$/.test(t)}),function(t){
var n=t.match(/(.*?)((_[0-9]+)+)$/),r=n[1],i=n[2];return e[i]||(e[i]={}),e[i][r]=a[t],
t});for(var o in e)if(e.hasOwnProperty(o)){var a=e[o];i.each(t,function(t,e){var n;
for(n=0;n<e.parameters.length;n++)if(!a.hasOwnProperty(e.parameters[n])&&r.isBookmarkable(e.parameters[n]))return;
e.duplicate(a)})}};r.waitingForInit&&0!==r.waitingForInit.length||r.finishedInit||(r.trigger("cdf cdf:postInit",r),
i(window).trigger("cdfLoaded"),"function"==typeof r.postInit&&r.postInit(),a(),r.finishedInit=!0,
r.decrementRunningCalls(),e.log("          [Lifecycle <End  ] Init["+t+"] (Running: "+r.getRunningCalls()+")","log","color: #ddd"));
},updateLifecycle:function(t){var r=t.lifecycle?!!t.lifecycle.silent:!1;if(!t.disabled){
r||this.incrementRunningCalls();var a=n.bind(function(){try{var n;if("undefined"!=typeof t.preExecution&&(n=t.preExecution.apply(t)),
n="undefined"!=typeof n?!!n:!0,t.trigger("cdf cdf:preExecution",t,n),!n)return;void 0!=t.tooltip&&(t._tooltip="function"==typeof t.tooltip?t.tooltip():t.tooltip),
void 0!=t.update&&"function"==typeof t.update&&(t.update(),this.refreshEngine.processComponent(t)),
"undefined"!=typeof t.postExecution&&t.postExecution.apply(t),void 0!=t._tooltip&&i("#"+t.htmlObject).attr("title",t._tooltip).tooltip({
delay:0,track:!0,fade:250})}catch(a){var o=t.htmlObject?i("#"+t.htmlObject):void 0,s=this.getErrorObj("COMPONENT_ERROR").msg+" ("+t.name.replace("render_","")+")";
this.errorNotification({msg:s},o),e.error("Error updating "+t.name+":"),e.exception(a);
}finally{r||this.decrementRunningCalls()}t.trigger("cdf cdf:postExecution",t)},this);
setTimeout(a,1)}},updateAll:function(t){var e=function(t,e){if(e)for(var r in e)e.hasOwnProperty(r)&&(n.isArray(t[r])?t[r]=n.union(t[r],e[r]):t[r]=e[r]);
};if(this.updating||(this.updating={tiers:{},current:null,updatingInFlight:[]}),t&&n.isArray(t)&&!n.isArray(t[0])){
var r={};n.each(t,function(t){if(t){var e=t.priority||0;r[e]||(r[e]=[]),r[e].push(t);
}}),t=r}e(this.updating.tiers,t);var i=this.updating.current,a=!1;if(null===i||0==i.components.length||(a=this.othersAwaitExecution(n.clone(this.updating.tiers),this.updating.current))){
var o=this.getFirstTier(this.updating.tiers);if(!o)return;if(a){var s=this.updating.tiers;
s[i.priority]=n.difference(s[i.priority],i.components),o.components=n.union(s[i.priority],this.getFirstTier(s).components);
}this.updating.current=o;for(var u=function(t,e){if(2!=arguments.length||"boolean"!=typeof e||!e){
t.off("cdf:postExecution",u),t.off("cdf:preExecution",u),t.off("cdf:error",u);var r=this.updating.current;
r.components=n.without(r.components,t);var i=this.updating.tiers;i[r.priority]=n.without(i[r.priority],t),
this.updating.updatingInFlight=n.without(this.updating.updatingInFlight,t),this.updateAll();
}},r=this.updating.current.components.slice(),c=0;c<r.length;c++){var l=r[c];l.startTimer(),
l.on("cdf:postExecution cdf:preExecution cdf:error",u,this),this.updateComponent(l),
-1==this.updating.updatingInFlight.indexOf(l)&&this.updating.updatingInFlight.push(l);
}}},update:function(t){this.updateQueue||(this.updateQueue=[]),this.updateQueue.push(t),
this.updateTimeout&&clearTimeout(this.updateTimeout);var e=n.bind(function(){this.updateAll(this.updateQueue),
delete this.updateQueue},this);this.updateTimeout=setTimeout(e,5)},updateComponent:function(t){
if((Date.now?Date.now():(new Date).getTime())-this.lastServerResponse>this.serverCheckResponseTimeout&&!this.checkServer())throw this.hideProgressIndicator(),
this.loginAlert(),"not logged in";t.isManaged===!1&&t.update?(t.update(),this.refreshEngine.processComponent(t)):this.updateLifecycle(t);
},getFirstTier:function(t){for(var e,r=n.keys(t).sort(function(t,e){return parseInt(t,10)-parseInt(e,10);
}),i=0;i<r.length;i++)if(e=t[r[i]],e.length>0)return{priority:r[i],components:e.slice()
};return null},resetAll:function(){this.createAndCleanErrorDiv();for(var t=(this.components.length,
0),e=this.components.length;e>t;t++)this.components[t].clear();for(var t=(this.components.length,
0),e=this.components.length;e>t;t++)this.components[t].executeAtStart&&this.update(this.components[t]);
},processChange:function(t){var e,n=this.getComponentByName(t),r=n.parameter;if("function"==typeof n.getValue&&(e=n.getValue()),
null!=e){if("undefined"!=typeof n.preChange){var i=n.preChange(e);e=void 0!=i?i:e;
}r&&this.fireChange(r,e),"undefined"!=typeof n.postChange&&n.postChange(e)}},fireChange:function(t,e){
var r=this;r.createAndCleanErrorDiv(),r.setParameter(t,e,!0),r.trigger("cdf "+t+":fireChange",{
parameter:t,value:e});for(var i=[],a=0,o=r.components.length;o>a;a++)if(n.isArray(r.components[a].listeners))for(var s=0;s<r.components[a].listeners.length;s++){
var u=r.components[a];if(u.listeners[s]==t&&!u.disabled){i.push(u);break}}r.updateAll(i);
},othersAwaitExecution:function(t,e){if(!t||!e||!e.components)return!1;t[e.priority]=n.difference(t[e.priority],e.components);
var r=this.getFirstTier(t);return r&&r.components&&0!=r.components.length?parseInt(r.priority)>parseInt(e.priority)?!1:!0:!1;
},isComponentUpdating:function(t){if(this.updateQueue&&-1!=this.updateQueue.indexOf(t))return!0;
if(this.updating){if(this.updating.current&&this.updating.current.components){var e=n.some(this.updating.current.components,function(e){
return e===t?!0:void 0});if(e)return e}if(this.updating.tiers){var r=n.some(this.updating.tiers,function(e){
return n.some(e,function(e){return e===t})});if(r)return r}if(this.updating.updatingInFlight)return n.some(this.updating.updatingInFlight,function(e){
return e===t})}return!1}})}),define("cdf/dashboard/Popups",["../lib/mustache","amd!../lib/underscore","../lib/jquery","amd!../lib/jquery.blockUI","css!./Popups.css"],function(t,e,n){
return{okPopup:{_firstRender:!0,template:"<div class='cdfPopup'>  <div class='cdfPopupHeader'>{{{header}}}</div>  <div class='cdfPopupBody'>    <div class='cdfPopupDesc'>{{{desc}}}</div>    <div class='cdfPopupButton'>{{{button}}}</div>  </div></div>",
defaults:{header:"Title",desc:"Description Text",button:"Button Text",callback:function(){
return!0}},$el:void 0,show:function(t){(t||this._firstRender)&&this.render(t),this.$el.show();
},hide:function(){this.$el.hide()},render:function(r){var i=e.extend({},this.defaults,r),a=this;
this._firstRender&&(this.$el=n("<div/>").addClass("cdfPopupContainer").hide().appendTo("body"),
this._firstRender=!1),this.$el.empty().html(t.render(this.template,i)),this.$el.find(".cdfPopupButton").click(function(){
i.callback(),a.hide()})}},notificationsComponent:{template:"<div class='cdfNotification component {{#isSmallComponent}}small{{/isSmallComponent}}'>  <div class='cdfNotificationBody'>    <div class='cdfNotificationImg'>&nbsp;</div>    <div class='cdfNotificationTitle' title='{{title}}'>{{{title}}}</div>    <div class='cdfNotificationDesc' title='{{desc}}'>{{{desc}}}</div>  </div></div>",
defaults:{title:"Component Error",desc:"Error processing component."},render:function(r,i){
var a=e.extend({},this.defaults,i);a.isSmallComponent=n(r).width()<300,n(r).empty().html(t.render(this.template,a));
var o=n(r).find(".cdfNotification");o.css({"line-height":o.height()+"px"})}},notificationsGrowl:{
_firstRender:!0,template:"<div class='cdfNotification growl'>  <div class='cdfNotificationBody'>    <h1 class='cdfNotificationTitle' title='{{title}}'>{{{title}}}</h1>    <h2 class='cdfNotificationDesc' title='{{desc}}'>{{{desc}}}</h2>  </div></div>",
defaults:{title:"Title",desc:"Default CDF notification.",timeout:4e3,onUnblock:function(){
return!0},css:n.extend({},n.blockUI.defaults.growlCSS,{position:"absolute",width:"100%",
top:"10px"}),showOverlay:!1,fadeIn:700,fadeOut:1e3,centerY:!1},render:function(r){
var i=e.extend({},this.defaults,r),a=n(t.render(this.template,i)),o=this;i.message=a;
var s=i.onUnblock;i.onUnblock=function(){o.$el.hide(),s.call(this)},this._firstRender&&(this.$el=n("<div/>").addClass("cdfNotificationContainer").hide().appendTo("body"),
this._firstRender=!1),this.$el.show().block(i)}}}}),define("cdf/dashboard/Dashboard.notifications",["./Dashboard","./Dashboard.notifications.ext","./Popups","../Logger","amd!../lib/underscore","../lib/jquery","amd!../lib/jquery.blockUI","css!./Dashboard.notifications.css"],function(t,e,n,r,i,a){
t.implement({ERROR_CODES:{QUERY_TIMEOUT:{msg:"Query timeout reached"},COMPONENT_ERROR:{
msg:"Error processing component"}},_initNotifications:function(){},blockUiOptions:void 0,
_setBlockUiOptions:function(t){if("function"==typeof a.blockUI){this.blockUiOptions=a.extend({},a.blockUI.defaults);
for(var e in t)this.blockUiOptions[e]=t[e]}},blockUIwithDrag:function(){if(!this.isSilent){
"undefined"!=typeof this.i18nSupport&&null!=this.i18nSupport&&(a.blockUI.defaults.message='<div class="img blockUIDefaultImg" style="padding: 0px;"></div>'),
a.blockUI(this.blockUiOptions);var t=a('<div id="blockUIDragHandle"></div>');a("div.blockUI.blockMsg").prepend(t),
a("div.blockUI.blockMsg").draggable({handle:"#blockUIDragHandle"})}},showProgressIndicator:function(){
this.isSilent||a.blockUI&&this.blockUIwithDrag()},hideProgressIndicator:function(t){
this.isSilent||(t&&this.resetRunningCalls(),a.unblockUI&&a.unblockUI(),this.showErrorTooltip());
},getErrorObj:function(t){return this.ERROR_CODES[t]||{}},parseServerError:function(t,e,n){
var r=[{match:/Query timeout/,msg:this.getErrorObj("QUERY_TIMEOUT").msg}],o={msg:this.getErrorObj("COMPONENT_ERROR").msg,
error:n,errorStatus:e},s=a("<div/>").html(t.responseText).find("h1").text();return i.find(r,function(t){
return s.match(t.match)?(o.msg=t.msg,!0):!1}),o},handleServerError:function(){this.errorNotification(this.parseServerError.apply(this,arguments)),
this.trigger("cdf cdf:serverError",this),this.resetRunningCalls()},errorNotification:function(t,e){
this.isSilent||(e?n.notificationsComponent.render(a(e),{title:t.msg,desc:""}):n.notificationsGrowl.render({
title:t.msg,desc:""}))},loginAlert:function(t){if(!this.isSilent){var e={header:"Warning",
desc:"You are no longer logged in or the connection to the server timed out",button:"Click to reload this page",
callback:function(){window.location.reload(!0)}};e=i.extend({},e,t),n.okPopup.show(e),
this.trigger("cdf cdf:loginError",this)}},checkServer:function(){a.ajax({type:"POST",
async:!1,dataType:"json",url:e.getPing(),success:function(t){return t&&"ok"==t.ping;
},error:function(){return!1}})}})}),define("cdf/dashboard/Dashboard.parameters",["./Dashboard","../Logger","amd!../lib/backbone","./Utf8Encoder"],function(t,e,n,r){
t.implement({parameters:void 0,parameterModel:void 0,chains:void 0,syncedParameters:void 0,
escapeParameterValues:!1,flatParameters:!1,LEGACY_STORAGE:"Dashboards.storage.",STORAGE:"storage.",
_initParameters:function(){this.parameters=[],this.parameterModel=new n.Model,this.chains=[],
this.syncedParameters={},this.escapeParameterValues=!1},_isParameterInModel:function(t,e){
return void 0!==this._getValueFromContext(t,e)},_getValueFromContext:function(t,e){
if(t){if(this.flatParameters)return t[e];if(null!=e){var n,r;if(e instanceof Array)n=e;else{
if(e.indexOf(".")<0)return t[e];n=e.split(".")}r=n.length;for(var i=0;r>i;i++){if(!t)return;
var a=n[i],o=t[a];if(void 0===o)return;t=o}}return t}},_setValueInContext:function(t,e,n){
if(t&&null!=e&&void 0!==n){if(this.flatParameters)t[e]=n;else{var r,i;if(e instanceof Array)r=e,
i=r.pop();else{if(e.indexOf(".")<0)return t[e]=n,t;r=e.split("."),i=r.pop()}t=this._getValueFromContext(t,r),
t&&(t[i]=n)}return t}},_getParameterStore:function(t){var n;return 0==t.indexOf(this.LEGACY_STORAGE)?(e.warn("Legacy storage access for "+t+". Please use storage instead"),
t=t.substr(this.LEGACY_STORAGE.length),n=this.storage):0==t.indexOf(this.STORAGE)?(t=t.substr(this.STORAGE.length),
n=this.storage):n=this.parameters,{store:n,name:t}},addParameter:function(t,n){if(void 0==t||"undefined"==t)return void e.warn("Dashboard addParameter: trying to add undefined!!");
var r=this._getParameterStore(t);return this._isParameterInModel(r.store,r.name)&&(n=this.getParameterValue(r.name)),
this.setParameter(t,n),n},getParameterValue:function(t){if(void 0==t||"undefined"==t)return void e.warn("Dashboard.getParameterValue: trying to get undefined!!");
var n=this._getParameterStore(t);return this._getValueFromContext(n.store,n.name);
},getParam:function(t){return this.getParameterValue(t)},setParameter:function(t,n,i){
if(void 0==t||"undefined"==t)return void e.warn("Dashboard.setParameter: trying to set undefined!!");
var a=this._getParameterStore(t);this.escapeParameterValues?this._setValueInContext(a.store,a.name,r.encode_prepare_arr(n)):this._setValueInContext(a.store,a.name,n),
void 0!==this._setValueInContext(a.store,a.name,n)&&(this.parameterModel.set(a.name,n,{
notify:i}),this.persistBookmarkables(a.name))},setParam:function(t,e,n){this.setParameter(t,e,n);
},syncParameters:function(t,e){this.setParameter(e,this.getParameterValue(t)),this.parameterModel.on("change:"+t,function(t,n,r){
this[r.notify?"fireChange":"setParameter"](e,n)},this),this.parameterModel.on("change:"+e,function(e,n,r){
this[r.notify?"fireChange":"setParameter"](t,n)},this)},syncParametersOnInit:function(t,e){
var n,r,i,a,o=this.syncedParameters;o[t]||(o[t]=[]),o[t].push(e);for(var s=0;s<this.chains.length;s++)n=this.chains[s],
n.indexOf(t)>-1&&(r=n),n.indexOf(e)>-1&&(i=n,a=s);if(i&&r){if(r!=i){var u=i.slice();
u.unshift(0),u.unshift(r.length),[].splice.apply(r,u),this.chains.splice(a,1)}}else i?i.unshift(t):r?r.push(e):this.chains.push([t,e]);
},syncParametersInit:function(){var t,e,n,r,i,a=this.syncedParameters;for(n=0;n<this.chains.length;n++)for(r=0;r<this.chains[n].length;r++)if(t=this.chains[n][r],
a[t])for(i=0;i<a[t].length;i++)e=a[t][i],this.syncParameters(t,e)}})}),define("cdf/dashboard/Dashboard.storage",["./Dashboard","../Logger","../lib/jquery","./Dashboard.storage.ext"],function(t,e,n,r){
t.implement({storage:void 0,initialStorage:void 0,_initStorage:function(){this.storage||(this.storage={},
n.extend(this.storage,this.storageObj)),this.initialStorage=this.storage},loadStorage:function(){
var t=this;if(!this.context||"anonymousUser"!==this.context.user){var e={user:this.context.user,
action:"read",ts:Date.now?Date.now():(new Date).getTime()};n.ajax({type:"GET",dataType:"json",
url:r.getStorage(e.action),data:e,async:!0,xhrFields:{withCredentials:!0},success:function(e){
n.extend(t.storage,e)}})}},saveStorage:function(){if(!this.context||"anonymousUser"!==this.context.user){
var t={user:this.context.user,action:"store",storageValue:JSON.stringify(this.storage),
ts:Date.now?Date.now():(new Date).getTime()};n.ajax({type:"GET",dataType:"json",url:r.getStorage(t.action),
data:t,async:!0,xhrFields:{withCredentials:!0}}).done(function(t){1!=t.result&&e.log("Error saving storage","error");
})}},cleanStorage:function(){if(this.storage={},!this.context||"anonymousUser"!==this.context.user){
var t={user:this.context.user,action:"delete"};n.ajax({type:"GET",dataType:"json",
url:r.getStorage(t.action),data:t,async:!0,xhrFields:{withCredentials:!0}}).done(function(t){
1!=t.result&&e.log("Error deleting storage","error")})}}})}),define("cdf/dashboard/Dashboard.dataSources",["./Dashboard","../Logger","amd!../lib/underscore"],function(t,e,n){
t.implement({dataSources:void 0,_initDataSources:function(){this.dataSources={}},
_getDataSourceName:function(t){var r;return r=n.isObject(t)?t.dataSource:t,n.isString(r)&&!n.isEmpty(r)?r:void e.warn("Invalid data source name");
},addDataSource:function(t,r,i){if(n.isObject(t)&&(i=r,r=t,t=r.name),!n.isObject(r))return void e.error("Invalid data source object");
if(!n.isString(t)||n.isEmpty(t))return void e.error("Invalid data source name");if(this.dataSources[t]){
if(!this.dataSources.hasOwnProperty(t))return void e.error("Data source name '"+t+"' is invalid, overwrites an inherited property");
if(!i)return void e.warn("Data source name '"+t+"' is already defined, set force flag to true to overwrite it");
}var a=n.extend({},r);a.name&&delete a.name,this.dataSources[t]=a},getDataSource:function(t){
var e=this._getDataSourceName(t);return e&&this.dataSources.hasOwnProperty(e)?this.dataSources[e]:void 0;
},getDataSourceQuery:function(t){var r=this.getDataSource(t);return n.isEmpty(r)?void e.error("Invalid data source"):this.getQuery(r);
},setDataSource:function(t,e){n.isObject(t)?this.addDataSource(t,!0):this.addDataSource(t,e,!0);
},removeDataSource:function(t){var n;return(n=this._getDataSourceName(t))?void(n in this.dataSources&&this.dataSources.hasOwnProperty(n)?delete this.dataSources[n]:e.warn("Data source name '"+n+"' not found")):void e.warn("Invalid data source name");
}})}),define("cdf/dashboard/Dashboard.query",["../Logger","../lib/Base","./Dashboard","./Container","amd!../lib/underscore","./Utils"],function(t,e,n,r,i,a){
var o=e,s=new r;return n.implement({queryFactories:void 0,_initQuery:function(){this.queryFactories=a.clone(s);
},getBaseQuery:function(){return o},registerQuery:function(t,e){var n=this.getBaseQuery();
if(!i.isFunction(e)&&i.isObject(e)){var r={};i.each(n.prototype.deepProperties,function(t){
r[t]=i.extend({},n.prototype[t],e[t])})}var a=i.isFunction(e)&&e||i.isObject(e)&&n.extend(i.extend({},e,r));
this.queryFactories.register("Query",t,function(t,e){return new a(e)})},hasQuery:function(t){
return Boolean(this.queryFactories&&this.queryFactories.has("Query",t))},detectQueryType:function(e){
if(e){if(i.isString(e.dataSource)&&!i.isEmpty(e.dataSource)){var n=this.getDataSource(e.dataSource);
if(i.isUndefined(n))return void t.error("Invalid data source name '"+e.dataSource+"'");
e=n}var r=e.queryType?e.queryType:e.query?"legacy":e.path&&e.dataAccessId?"cda":void 0;
return e.queryType=r,this.hasQuery(r)?r:void 0}},getQuery:function(e,n){if(i.isUndefined(e)?e="cda":i.isObject(e)&&(n=e,
e=void 0),i.isString(n.dataSource)&&!i.isEmpty(n.dataSource)){var r=this.getDataSource(n.dataSource);
if(i.isUndefined(r))return void t.error("Invalid data source name '"+n.dataSource+"'");
n=i.extend({},r,n),delete n.dataSource}e=e||n.queryType||"cda";var a=this.queryFactories.getNew("Query",e,n);
return a.dashboard=this,a},isValidQueryDefinition:function(t){return void 0!==this.detectQueryType(t);
},listQueries:function(){return i.keys(this.queryFactories.listType("Query"))}}),
{setBaseQuery:function(t){i.isFunction(t)&&t.extend&&(o=t)},registerGlobalQuery:function(t,e){
var n=o;if(!i.isFunction(e)&&i.isObject(e)){var r={};i.each(n.prototype.deepProperties,function(t){
r[t]=i.extend({},n.prototype[t],e[t])})}var a=i.isFunction(e)&&e||i.isObject(e)&&n.extend(i.extend({},e,r));
s.register("Query",t,function(t,e){return new a(e)})}}}),define("cdf/dashboard/Dashboard.views",["./Dashboard","../lib/base64","./Dashboard.views.ext","../lib/jquery"],function(t,e,n,r){
t.implement({viewParameters:void 0,view:void 0,viewFlags:{UNUSED:"unused",UNBOUND:"unbound",
VIEW:"view"},_initViews:function(){this.viewParameters={},!this.view&&this.viewObj&&(this.view={},
r.extend(this.view,this.viewObj))},restoreView:function(){var t,n;if(this.view&&this.view.params&&(n=JSON.parse(e.decode(this.view.params))))if(r.isEmptyObject(n))this.view.params=n;else for(t in n)n.hasOwnProperty(t)&&this.setParameter(t,n[t]);
},setParameterViewMode:function(t,e){1===arguments.length?this.viewParameters[t]=this.viewFlags.VIEW:this.viewParameters[t]=e;
},isViewParameter:function(t){return this.viewParameters[t]},getViewParameters:function(){
var t=this.viewParameters,e={};for(var n in t)t.hasOwnProperty(n)&&(t[n]==this.viewFlags.VIEW||t[n]==this.viewFlags.UNBOUND)&&(e[n]=this.getParameterValue(n));
return e},getUnboundParameters:function(){var t=this.viewParameters,e=[];for(var n in t)if(t.hasOwnProperty(n))return t[n]==this.viewFlags.UNBOUND&&e.push(n),
e}})}),define("cdf/dashboard/OptionsManager",["./Utils","amd!../lib/underscore","../lib/jquery"],function(t,e,n){
function r(t,e,n,r){return t&&t[e]&&t[e].hasOwnProperty(n)?t[e][n]:r||void 0}function i(t,e,n,r){
t&&e&&n&&(t[e]=t[e]||{},t[e][n]=r)}return function(a){function o(t,e){e=e||{},d(t,e.reader),
h(t,e.writer),f(t,e.validator)}function s(t){return r(g._interfaces,t,"reader",g._libraries.mappers.identity);
}function u(t){return r(g._interfaces,t,"writer",g._libraries.mappers.identity)}function c(t){
return r(g._interfaces,t,"validator",g._libraries.predicates.tautology)}function l(t){
return r(g._options,t,"value")}function d(t,n){var r=g._libraries.mappers;return n=e.isFunction(n)&&n||e.isString(n)&&r[n]||s(t)||r.identity,
i(g._interfaces,t,"reader",n)}function h(t,n){var r=g._libraries.mappers;return n=e.isFunction(n)&&n||e.isString(n)&&r[n]||u(t)||r.identity,
i(g._interfaces,t,"writer",n)}function f(t,n){var r=g._libraries.predicates;return n=e.isFunction(n)&&n||e.isString(n)&&r[n]||c(t)||r.tautology,
i(g._interfaces,t,"validator",n)}function p(t,e){return i(g._options,t,"value",e);
}var g=this;this._options={},this._interfaces={},this._libraries={predicates:{tautology:function(t){
return!0},isFunction:e.isFunction,isPositive:function(t){return e.isNumber(t)&&t>0;
},isObjectOrPropertiesArray:function(t){return e.isArray(t)||e.isObject(t)},isObject:e.isObject,
isArray:e.isArray},mappers:{identity:e.identity,propertiesObject:function(n){return e.isArray(n)?t.propertiesArrayToObject(n):n;
}}},this.mixin=function(t){t.getOption=this.getOption,t.setOption=this.setOption},
this.init=function(t,r,i){t=n.extend(!0,{},t),r=n.extend(!0,{},r),this._libraries=n.extend(!0,{},this._libraries,i),
e.each(r,function(t,e){o(e,t)}),e.each(t,function(t,e){var n=r&&r[e]||{};o(e,n),p(e,t);
})},this.setOption=function(t,e,n){o(t,n);var r=s(t),i=c(t);if(i(e))return e=r(e),
p(t,e),!0;throw new Error("Invalid Option "+t.charAt(0).toUpperCase()+t.slice(1));
},this.getOption=function(t){var e=u(t),n=l(t);return e(n)},this.init(a.defaults,a.interfaces,a.libraries);
}}),define("cdf/queries/BaseQuery",["../lib/jquery","../lib/Base","amd!../lib/underscore","../Logger","../dashboard/Utils","../dashboard/OptionsManager","../dashboard/Dashboard.query"],function(t,e,n,r,i,a,o){
var s=e.extend({_name:"baseQuery",get name(){return this._name},_label:"Base Query",
get label(){return this._label},deepProperties:["defaults","interfaces"],dashboard:void 0,
defaults:{successCallback:function(){r.log("Query success callback not defined. Override.");
},errorCallback:function(t,e,n){return this.dashboard&&i.isFunction(this.dashboard.handleServerError)?void this.dashboard.handleServerError(t,e,n):void r.log("Query error callback not defined. Override.");
},lastResultSet:null,lastProcessedResultSet:null,page:0,pageSize:0,params:{},ajaxOptions:{
async:!1,type:"POST"},url:""},interfaces:{params:{reader:"propertiesObject",validator:"isObjectOrPropertiesArray"
},successCallback:{validator:"isFunction"},errorCallback:{validator:"isFunction"},
pageSize:{validator:"isPositive"}},constructor:function(t){this._optionsManager=new a(this),
this._optionsManager.mixin(this),this.init(t)},getOption:function(t){return this.defaults[t];
},setOption:function(t,e){this.defaults[t]=e},init:function(t){},buildQueryDefinition:function(t){},
getSuccessHandler:function(e){var n=this;return function(r){n.setOption("lastResultSet",r);
var i=t.extend(!0,{},n.getOption("lastResultSet"));n.setOption("lastProcessedResultSet",i),
r=e(i),void 0!==r&&r!==i&&n.setOption("lastProcessedResultSet",r)}},getErrorHandler:function(t){
return function(e,n,r){t&&t(e,n,r)}},doQuery:function(e,r){if(!i.isFunction(this.getOption("successCallback")))throw"QueryNotInitialized";
var a=n.extend({},this.getAjaxOptions(),{data:this.buildQueryDefinition(),url:this.getOption("url"),
success:this.getSuccessHandler(e?e:this.getOption("successCallback")),error:this.getErrorHandler(r?r:n.bind(this.getOption("errorCallback"),this))
});t.ajax(a)},exportData:function(){},setAjaxOptions:function(t){this.setOption("ajaxOptions",n.extend({},this.getOption("ajaxOptions"),t));
},getAjaxOptions:function(){var e=this.getOption("ajaxOptions"),n=null==e.async?t.ajaxSettings.async:e.async;
return!n&&e.xhrFields&&e.xhrFields.withCredentials&&(r.log("Cross-domain requests are deprecated for synchronous operations."),
delete e.xhrFields.withCredentials),e},setSortBy:function(t){},sortBy:function(t,e){},
fetchData:function(t,e,r){var a=arguments[0],o=arguments[1],s=arguments[2];switch(arguments.length){
case 0:if(this.getOption("params")&&this.getOption("successCallback"))return this.doQuery();
break;case 1:if(i.isFunction(a))return this.doQuery(a);if(!n.isEmpty(a)&&(n.isObject(a)||Array.isArray(a)))return this.setParameters(a||{}),
this.doQuery();break;case 2:return i.isFunction(a)?(this.setCallback(a),i.isFunction(o)&&this.setErrorCallback(o)):(this.setParameters(a||{}),
this.setCallback(o)),this.doQuery();default:return t&&this.setParameters(t),i.isFunction(o)&&this.setCallback(e),
i.isFunction(s)&&this.setErrorCallback(r),this.doQuery()}throw"InvalidInput"},lastResults:function(){
if(null!==this.getOption("lastResultSet"))return t.extend(!0,{},this.getOption("lastResultSet"));
throw"NoCachedResults"},lastProcessedResults:function(){if(null!==this.getOption("lastProcessedResultSet"))return t.extend(!0,{},this.getOption("lastProcessedResultSet"));
throw"NoCachedResults"},reprocessLastResults:function(e){if(null!==this.getOption("lastResultSet")){
var n=t.extend(!0,{},this.getOption("lastResultSet")),r=e||this.getOption("successCallback");
this.setOption("lastProcessedResultSet",n);var i=r(n);return void 0!==i&&i!==n&&this.setOption("lastProcessedResultSet",i),
i}throw"NoCachedResults"},reprocessResults:function(t){return this.reprocessLastResults(t);
},setParameters:function(t){this.setOption("params",t)},setCallback:function(t){this.setOption("successCallback",t);
},setErrorCallback:function(t){this.setOption("errorCallback",t)},setSearchPattern:function(t){
this.setOption("searchPattern",t)},nextPage:function(t){var e=this.getOption("page"),n=this.getOption("pageSize");
if(n>0)return e+=n,this.setOption("page",e),this.doQuery(t);throw"InvalidPageSize";
},previousPage:function(t){var e=this.getOption("page"),n=this.getOption("pageSize");
if(e>n)return e-=n,this.setOption("page",e),this.doQuery(t);if(n>0)return this.setOption("page",0),
this.doQuery(t);throw"AtBeginning"},getPage:function(t,e){var n=this.getOption("page"),r=this.getOption("pageSize");
if(t*r==n)return!1;if(i.isNumber(t)&&t>=0)return this.setOption("page",t*r),this.doQuery(e);
throw"InvalidPage"},setPageStartingAt:function(t){if(t==this.getOption("page"))return!1;
if(!(i.isNumber(t)&&t>=0))throw"InvalidPage";this.setOption("page",t)},pageStartingAt:function(t,e){
return this.setPageStartingAt(t)!==!1?this.doQuery(e):!1},setPageSize:function(t){
this.setOption("pageSize",t)},initPage:function(t,e){if(t==this.getOption("pageSize")&&0==this.getOption("page"))return!1;
if(i.isNumber(t)&&t>0)return this.setOption("page",0),this.setOption("pageSize",t),
this.doQuery(e);throw"InvalidPageSize"},__getDashboardParameterValue:function(t,e){
var a;try{a=this.dashboard.getParameterValue(e)}catch(o){var s=!n.isObject(e)||i.isFunction(e)?e:JSON.stringify(e);
r.log("BuildQueryDefinition detected static parameter "+t+"="+s+". The parameter will be used instead the parameter value");
}return void 0!==a?a:e}});return o.setBaseQuery(s),s}),define("cdf/queries/CpkQuery",["../dashboard/Dashboard.ext","./BaseQuery","../dashboard/Dashboard.query","amd!../lib/underscore","../dashboard/Utils","../Logger","../lib/jquery"],function(t,e,n,r,i,a,o){
"use strict";var s="cpk",u={_name:s,get name(){return this._name},_label:"CPK Query",
get label(){return this._label},defaults:{url:"",pluginId:"",endpoint:"",systemParams:{},
ajaxOptions:{dataType:"json",type:"POST",async:!0,xhrFields:{withCredentials:!0}}
},init:function(e){r.isString(e.pluginId)&&r.isString(e.endpoint)&&(this.setOption("pluginId",e.pluginId),
this.setOption("endpoint",e.endpoint),this.setOption("url",t.getPluginEndpoint(e.pluginId,e.endpoint))),
this.setOption("kettleOutput",e.kettleOutput),this.setOption("stepName",e.stepName),
this.setOption("systemParams",e.systemParams||{}),this.setAjaxOptions(e.ajaxOptions);
var n=this.getOption("ajaxOptions");"json"===n.dataType&&(n.mimeType="application/json; charset utf-8",
this.setAjaxOptions(n))},buildQueryDefinition:function(t){var e={kettleOutput:this.getOption("kettleOutput"),
stepName:this.getOption("stepName")};e=o.extend(!0,{},e,this.getOption("systemParams")),
t=Array.isArray(t)?i.propertiesArrayToObject(t):t||{};var n=this.getOption("params"),a=o.extend({},n,t);
return r.each(a,function(t,n){var a=this.__getDashboardParameterValue(n,t);i.isFunction(a)?a=a():r.isObject(a)&&(a=JSON.stringify(a)),
e["param"+n]=a},this),e},getSuccessHandler:function(t){var e=this;return function(n){
if(e.setOption("lastResultSet",n),n&&0==n.result){var r=e.getErrorHandler(e.getOption("errorCallback"));
r(i)}else{var i=o.extend(!0,{},e.getOption("lastResultSet"));e.setOption("lastProcessedResultSet",i),
n=t(i),void 0!==n&&n!==i&&e.setOption("lastProcessedResultSet",n)}}}};n.registerGlobalQuery(s,u);
}),define("cdf/queries/CdaQuery",["./CdaQuery.ext","./BaseQuery","../dashboard/Dashboard.query","amd!../lib/underscore","../dashboard/Utils","../Logger","../lib/jquery"],function(t,e,n,r,i,a,o){
"use strict";var s="cda",u={_name:s,get name(){return this._name},_label:"CDA Query",
get label(){return this._label},defaults:{url:t.getDoQuery(),file:"",id:"",outputIdx:"1",
sortBy:"",ajaxOptions:{async:!0,xhrFields:{withCredentials:!0}},searchPattern:""},
init:function(t){if("undefined"==typeof t.path||"undefined"==typeof t.dataAccessId)throw"InvalidQuery";
this.setOption("file",t.path),this.setOption("id",t.dataAccessId),i.isString(t.sortBy)&&t.sortBy.match("^(?:[0-9]+[adAD]?,?)*$")&&this.setSortBy(t.sortBy),
null!=t.pageSize&&this.setPageSize(t.pageSize),null!=t.outputIndexId&&this.setOption("outputIdx",t.outputIndexId);
},buildQueryDefinition:function(t){var e={};t=Array.isArray(t)?i.propertiesArrayToObject(t):t||{};
var n=this.getOption("params"),a=o.extend({},n,t);return r.each(a,function(t,n){var r=this.__getDashboardParameterValue(n,t);
Array.isArray(r)&&1===r.length&&String(r[0]).indexOf(";")>=0&&(r=i.doCsvQuoting(r[0],";")),
i.isFunction(r)&&(r=r()),e["param"+n]=r},this),e.path=this.getOption("file"),e.dataAccessId=this.getOption("id"),
e.outputIndexId=this.getOption("outputIdx"),e.pageSize=this.getOption("pageSize"),
e.pageStart=this.getOption("page"),e.sortBy=this.getOption("sortBy"),e.paramsearchBox=this.getOption("searchPattern"),
e},exportData:function(e,n,r){r=null!=r?r:{};var i=this.buildQueryDefinition(n);i.outputType=e,
"csv"===e&&r.separator&&(i.settingcsvSeparator=r.separator),r.filename&&(i.settingattachmentName=r.filename),
"xls"===e&&r.template&&(i.settingtemplateName=r.template),r.columnHeaders&&(i.settingcolumnHeaders=r.columnHeaders),
r.exportPage===!1&&(i.pageSize=0,i.pageStart=0),null!=r.dtFilter&&(i.settingdtFilter=r.dtFilter,
null!=r.dtSearchableColumns&&(i.settingdtSearchableColumns=r.dtSearchableColumns)),
i.wrapItUp="true",o.ajax({type:"POST",dataType:"text",async:!0,data:i,url:this.getOption("url"),
xhrFields:{withCredentials:!0}}).done(function(e){var n=o('<iframe style="display:none">');
n.detach(),n[0].src=t.getUnwrapQuery({path:i.path,uuid:e}),n.appendTo(o("body"))}).fail(function(t,e,n){
a.log("Request failed: "+t.responseText+" :: "+e+" ::: "+n)})},setSortBy:function(t){
var e,n=this;if(null===t||void 0===t||""===t)e="";else if(i.isString(t)){if(!t.match("^(?:[0-9]+[adAD]?,?)*$"))throw"InvalidSortExpression";
e=t.toUpperCase().split(",").filter(function(t){return""!==t})}else if(Array.isArray(t)){
e=t.map(function(t){return t.toUpperCase()});var r=e.filter(function(t){return!t.match("^[0-9]+[adAD]?,?$");
});if(r.length>0)throw"InvalidSortExpression"}var a;return Array.isArray(e)?(a=e.length!=n.getOption("sortBy").length,
o.each(e,function(t,e){return a=a&&e==n.getOption("sortBy")[t],a?void 0:!1})):a=e===this.getOption("sortBy"),
this.setOption("sortBy",e),!a},sortBy:function(t,e){var n=this.setSortBy(t);return n?null!==this.getOption("successCallback")?this.doQuery(e):void 0:!1;
}};n.registerGlobalQuery(s,u)}),define("cdf/queries/XmlaQuery",["amd!../lib/xmla","./XmlaQuery.ext","../lib/Base","./BaseQuery","../dashboard/Dashboard.query","../Logger","../lib/jquery"],function(t,e,n,r,i,a,o){
var s=n.extend({xmla:null,datasource:null,catalogs:null,getDataSources:function(){
var e=[],n=this.xmla.discoverDataSources();if(!n)return void a.warn("XML/A DISCOVER_DATASOURCES request failed");
if(n.hasMoreRows()){e=n.fetchAllAsObject(),this.datasource=e[0];var r=this.datasource[t.PROP_DATASOURCENAME];
r&&r.length>0&&(this.datasource[t.PROP_DATASOURCEINFO]=r),n.close()}},getCatalogs:function(){
var e={},n={};if(!this.datasource||!this.datasource[t.PROP_DATASOURCEINFO])return void a.warn("XML/A DBSCHEMA_CATALOGS request failed, missing "+t.PROP_DATASOURCEINFO);
e[t.PROP_DATASOURCEINFO]=this.datasource[t.PROP_DATASOURCEINFO];var r=this.xmla.discoverDBCatalogs({
properties:e});if(!r)return void a.warn("XML/A DISCOVER_DATASOURCES request failed");
if(r.hasMoreRows()){for(this.catalogs=[];n=r.fetchAsObject();)this.catalogs[this.catalogs.length]=n;
r.close()}},discover:function(e){var n={},r=e.query();n[t.PROP_DATASOURCEINFO]=this.datasource[t.PROP_DATASOURCEINFO],
e.catalog&&(n[t.PROP_CATALOG]=e.catalog);var i=this.xmla.discover({properties:n,requestType:r
});return i},execute:function(e){for(var n=0,r=u.catalogs.length;r>n;n++)if(u.catalogs[n].CATALOG_NAME==e.catalog){
var i={};i[t.PROP_DATASOURCEINFO]=u.datasource[t.PROP_DATASOURCEINFO],i[t.PROP_CATALOG]=e.catalog,
i[t.PROP_FORMAT]=u.PROP_FORMAT||t.PROP_FORMAT_TABULAR;var a=this.xmla.execute({statement:e.query(),
properties:i});return a}throw new Error("Catalog: "+e.catalog+" was not found on Pentaho server.");
}}),u=new s,c={name:"xmla",label:"XML/A Query",queryDefinition:{},defaults:{url:e.getXmla()
},init:function(e){this.queryDefinition=o.extend({},this.getOption("params"),e),null==u.xmla&&(u.xmla=new t({
async:!1,url:this.getOption("url")})),null==u.datasource&&u.getDataSources(),null==u.catalogs&&u.getCatalogs();
},transformXMLAResults:function(e){var n,r,i,a={resultset:[],metadata:[]};e instanceof t.Rowset?(n=e.fetchAllAsArray(),
r=e.getFields()):e instanceof t.Dataset;for(var o=0,s=r.length;s>o;o++)switch(i=r[o],
a.metadata[o]={colIndex:i.index,colName:i.label},i.jsType){case"string":a.metadata[o].colType="string";
break;case"number":a.metadata[o].colType="numeric";break;default:a.metadata[o].colType="string";
}return a.resultset=n,e.close(),a},doQuery:function(t){var e=(this.getOption("url"),
t?t:this.getOption("successCallback"));this.getOption("errorCallback");try{var n=this.transformXMLAResults(this._executeQuery());
this.setOption("lastResultSet",n);var r=o.extend(!0,{},this.getOption("lastResultSet"));
this.setOption("lastProcessedResultSet",r),n=e(r),void 0!==n&&n!==r&&this.setOption("lastProcessedResultSet",n);
}catch(i){a.error("unable to execute the XML/A query: "+i+" :")}},_executeQuery:function(){
return u.execute(this.queryDefinition)}};i.registerGlobalQuery("xmla",c);var l={name:"xmlaDiscover",
label:"XML/A Discover Query",queryDefinition:{},defaults:{url:e.getXmla()},init:function(e){
this.queryDefinition=o.extend({},this.getOption("params"),e),null==u.xmla&&(u.xmla=new t({
async:!1,url:this.getOption("url")})),null==u.datasource&&u.getDataSources()},transformXMLADiscoverResults:function(t){
for(var e,n=t.getFields(),r={resultset:[],metadata:[]},i=0,a=n.length;a>i;i++)switch(e=n[i],
r.metadata[i]={colIndex:e.index,colName:e.label},e.jsType){case"string":r.metadata[i].colType="string";
break;case"number":r.metadata[i].colType="numeric";break;default:r.metadata[i].colType="string";
}return r.resultset=t.fetchAllAsArray(),t.close(),r},doQuery:function(t){var e=(this.getOption("url"),
t?t:this.getOption("successCallback"));this.getOption("errorCallback");try{var n=this.transformXMLADiscoverResults(this._executeDiscoverQuery());
this.setOption("lastResultSet",n);var r=o.extend(!0,{},this.getOption("lastResultSet"));
this.setOption("lastProcessedResultSet",r),n=e(r),void 0!==n&&n!==r&&this.setOption("lastProcessedResultSet",n);
}catch(i){a.error("unable to execute the XML/A query: "+i+" :")}},_executeDiscoverQuery:function(){
return u.discover(this.queryDefinition)}};i.registerGlobalQuery("xmlaDiscover",l);
}),define("cdf/queries/SolrQuery",["./BaseQuery","../dashboard/Dashboard.query","../dashboard/Utils","../Logger","../lib/jquery"],function(t,e,n,r,i){
"use strict";var a="solr",o={endpoint:"",collection:"",requestHandler:"select",q:"*:*",
fq:null,fl:null,df:null,start:0,rows:10,wt:"json",rawQueryParameters:"",schemaColumnNames:[],
schemaColumnTypes:[],schemaColumnPaths:[],ajaxOptions:{async:!0,type:"GET",xhrFields:{
withCredentials:!0}}},s=["q","fq","fl","df","wt","start","rows"],u={_name:a,get name(){
return this._name},_label:"Apache Solr Query",get label(){return this._label},_defaults:o,
get defaults(){return this._defaults},getParameterMacros:function(t){var e={},r=this.getOption("params"),a=i.extend({},r,t);
for(var o in a)if(a.hasOwnProperty(o)){var s=this.__getDashboardParameterValue(o,a[o]);
null!==n.normalizeValue(s)&&(n.isString(s)&&(s=s.split(/\s*,\s*/)),e[o]=s)}return e;
},getSolrQueryParameters:function(){var t={},e=this.getOption("rawQueryParameters");
return null!==n.normalizeValue(e)&&e.split("&").forEach(function(e){var n=e.split("="),r=n[0],i=n[1];
null!=r&&null!=i&&(t[r]=i)}),s.forEach(function(e){var r=this.getOption(e);if(null!==n.normalizeValue(r)){
var i="q"===e;i&&(r=this.__expandQueryMacros(r)),t[e]=r}},this),t},init:function(t){
if(null==t.endpoint||null==t.collection)throw"InvalidQuery";for(var e in t)t.hasOwnProperty(e)&&this.setOption(e,t[e]);
this.setOption("url",this.__buildSolrUrl())},exportData:function(t,e,r){r.exportType=t,
null!==n.normalizeValue(t)&&this.setOption("wt",t);var a=this.getAjaxOptions();a.url=this.getOption("url"),
a.data=this.buildQueryDefinition(e),a.success=this.__exportDataSuccess.bind(this,r),
a.error=this.getErrorHandler(this.getOption("errorCallback").bind(this)),i.ajax(a);
},buildQueryDefinition:function(t){var e=i.extend({},this.getSolrQueryParameters());
t=Array.isArray(t)?n.propertiesArrayToObject(t):t||{};var r=this.getParameterMacros(t);
for(var a in r)if(r.hasOwnProperty(a)){var o=r[a],s=Array.isArray(o);if(s)for(var u=o.length,c=u>1,l=0;u>l;l++){
var d=c?"_"+l:"";e[a+d]=o[l]}e[a]=s?o.join(","):o}return e},getSuccessHandler:function(t){
var e=this.base(t),n=this;return function(t){var i=null;try{i=JSON.parse(t)}catch(a){
r.error("Could not parse json result "+t,a)}var o=[],s=[],u={};if(i){var c=i.response,l=c?c.docs:[],d=n.__buildSchema();
u.totalRows=String(l.length),o=d.columnNames.map(function(t,e){var n=d.columnTypes[e];
return{colName:t,colType:n,colIndex:e}}),s=l.map(function(t){return d.columnPaths.map(function(e){
return n.__search(t,e)})})}e({metadata:o,resultset:s,queryInfo:u})}},__exportDataSuccess:function(t,e){
var n="undefined"!=typeof Blob;"json"===t.exportType&&(e=JSON.stringify(e,null,2));
var r;if(n){var i=new Blob([e],{type:"octet/stream"});r=window.URL.createObjectURL(i);
}else r=this.getOption("url");this.__exportDataDownload(r,t),n&&window.URL.revokeObjectURL(r);
},__exportDataDownload:function(t,e){var n=document.createElement("a"),i=null!=n.download;
i?(n.setAttribute("href",t),n.setAttribute("download",this.__getExportDataName(e)),
n.setAttribute("type",this.__getExportMineType(e)),n.setAttribute("style","visibility: hidden;"),
document.body.appendChild(n),n.click(),document.body.removeChild(n)):r.warn("Can not export the query data on this browser!");
},__replaceSchemaMacros:function(t){var e=this.getOption(t);if(!n.normalizeValue(e))return e;
var r=this.getParameterMacros();return e.map(function(t){return t.replace(/\${(\w+)}/g,function(t,e){
return r[e]})})},__expandQueryMacros:function(t){var e=new RegExp("(\\w+):\\${(\\w+)(?::[^}]+)?}","g"),n=this.getParameterMacros();
return t.replace(e,function(t,e,r){var i=n[r];if(!Array.isArray(i))return t;for(var a=i.length,o=a>1,s="",u=0;a>u;u++){
""!==s&&(s+=" OR ");var c=o?"_"+u:"";s+=e+":${"+r+c+"}"}return o&&(s="("+s+")"),s;
})},__search:function(t,e){var n=t[e];return Array.isArray(n)&&(n=n[0]),void 0!==n?n:null;
},__buildSchema:function(){var t=this.__replaceSchemaMacros("schemaColumnNames"),e=this.__replaceSchemaMacros("schemaColumnTypes"),n=this.__replaceSchemaMacros("schemaColumnPaths");
return{columnNames:t,columnTypes:e,columnPaths:n.length?n:t}},__buildSolrUrl:function(){
var t=this.getOption("endpoint");t.endsWith("/")&&(t=t.slice(0,-1));var e=this.getOption("collection"),n=this.getOption("requestHandler");
return t+"/"+e+"/"+n},__getExportMineType:function(t){switch(t.exportType){case"csv":
return"text/csv";case"json":return"application/json";case"xml":return"application/xml";
default:return"text/plain"}},__getExportDataName:function(t){var e=t.filename;return null===n.normalizeValue(e)&&(e="solr-export."+t.exportType),
e}};e.registerGlobalQuery(a,u)}),define("cdf/Dashboard",["./dashboard/Dashboard","./dashboard/Dashboard.context","./dashboard/Dashboard.addIns","./dashboard/Dashboard.bookmarkable","./dashboard/Dashboard.components","./dashboard/Dashboard.i18n","./dashboard/Dashboard.legacy","./dashboard/Dashboard.lifecycle","./dashboard/Dashboard.notifications","./dashboard/Dashboard.parameters","./dashboard/Dashboard.storage","./dashboard/Dashboard.dataSources","./dashboard/Dashboard.query","./dashboard/Dashboard.views","./queries/BaseQuery","./queries/CpkQuery","./queries/CdaQuery","./queries/XmlaQuery","./queries/SolrQuery","./components/BaseComponent","./components/UnmanagedComponent","css!./Dashboard"],function(t){
return t}),define("cdf/Dashboard.Blueprint",["./Dashboard","css!./lib/blueprint/screen"],function(t){
return t}),define("cdf/dashboard/Query",["amd!../lib/underscore","../lib/jquery"],function(t,e){
return function(n,r,i){var a,o;if(t.isObject(n)?(a=e.extend(!0,{},n),o=t.isString(n.queryType)&&n.queryType||!t.isUndefined(n.query)&&"legacy"||!t.isUndefined(n.path)&&!t.isUndefined(n.dataAccessId)&&"cda"||void 0):t.isString(n)&&t.isString(r)&&(o="cda",
a={path:n,dataAccessId:r}),!o)throw"InvalidQuery";return i.getQuery(o,a)}});