define(["./kernel","../has","require","module","../json","./lang","./array"],function(dojo,has,require,thisModule,json,lang,array){
if(!has("dojo-loader"))return console.error("cannot load the Dojo v1.x loader with a foreign loader"),
0;has.add("dojo-fast-sync-require",1);var makeErrorToken=function(e){return{src:thisModule.id,
id:e}},slashName=function(e){return e.replace(/\./g,"/")},buildDetectRe=/\/\/>>built/,dojoRequireCallbacks=[],dojoRequireModuleStack=[],dojoRequirePlugin=function(e,o,r){
dojoRequireCallbacks.push(r),array.forEach(e.split(","),function(e){var r=getModule(e,o.module);
dojoRequireModuleStack.push(r),injectModule(r)}),checkDojoRequirePlugin()},checkDojoRequirePlugin=has("dojo-fast-sync-require")?function(){
var e,o;for(o in modules)if(e=modules[o],void 0===e.noReqPluginCheck&&(e.noReqPluginCheck=/loadInit\!/.test(o)||/require\!/.test(o)?1:0),
!e.executed&&!e.noReqPluginCheck&&e.injected==requested)return;guardCheckComplete(function(){
var e=dojoRequireCallbacks;dojoRequireCallbacks=[],array.forEach(e,function(e){e(1);
})})}:function(){var e,o=function(r){e[r.mid]=1;for(var i,n,a=r.deps||[],t=0;t<a.length;t++)if(n=a[t],
!((i=e[n.mid])||0!==i&&o(n)))return e[r.mid]=0,!1;return!0};return function(){var r,i;
e={};for(i in modules)r=modules[i],r.executed||r.noReqPluginCheck?e[i]=1:(0!==r.noReqPluginCheck&&(r.noReqPluginCheck=/loadInit\!/.test(i)||/require\!/.test(i)?1:0),
r.noReqPluginCheck?e[i]=1:r.injected!==arrived&&(e[i]=0));for(var n,a=0,t=dojoRequireModuleStack.length;t>a;a++)if(r=dojoRequireModuleStack[a],
!((n=e[r.mid])||0!==n&&o(r)))return;guardCheckComplete(function(){var e=dojoRequireCallbacks;
dojoRequireCallbacks=[],array.forEach(e,function(e){e(1)})})}}(),dojoLoadInitPlugin=function(mid,require,loaded){
require([mid],function(bundle){require(bundle.names,function(){for(var scopeText="",args=[],i=0;i<arguments.length;i++)scopeText+="var "+bundle.names[i]+"= arguments["+i+"]; ",
args.push(arguments[i]);eval(scopeText);var callingModule=require.module,requireList=[],i18nDeps,syncLoaderApi={
provide:function(e){e=slashName(e);var o=getModule(e,callingModule);o!==callingModule&&setArrived(o);
},require:function(e,o){e=slashName(e),o&&(getModule(e,callingModule).result=nonmodule),
requireList.push(e)},requireLocalization:function(e,o,r){i18nDeps||(i18nDeps=["dojo/i18n"]),
r=(r||dojo.locale).toLowerCase(),e=slashName(e)+"/nls/"+(/root/i.test(r)?"":r+"/")+slashName(o),
getModule(e,callingModule).isXd&&i18nDeps.push("dojo/i18n!"+e)},loadInit:function(e){
e()}},hold={},p;try{for(p in syncLoaderApi)hold[p]=dojo[p],dojo[p]=syncLoaderApi[p];
bundle.def.apply(null,args)}catch(e){signal("error",[makeErrorToken("failedDojoLoadInit"),e]);
}finally{for(p in syncLoaderApi)dojo[p]=hold[p]}i18nDeps&&(requireList=requireList.concat(i18nDeps)),
requireList.length?dojoRequirePlugin(requireList.join(","),require,loaded):loaded();
})})},extractApplication=function(e,o,r){var i,n=/\(|\)/g,a=1;for(n.lastIndex=o;(i=n.exec(e))&&(")"==i[0]?a-=1:a+=1,
0!=a););if(0!=a)throw"unmatched paren around character "+n.lastIndex+" in: "+e;return[dojo.trim(e.substring(r,n.lastIndex))+";\n",n.lastIndex];
},removeCommentRe=/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/gm,syncLoaderApiRe=/(^|\s)dojo\.(loadInit|require|provide|requireLocalization|requireIf|requireAfterIf|platformRequire)\s*\(/gm,amdLoaderApiRe=/(^|\s)(require|define)\s*\(/m,extractLegacyApiApplications=function(e,o){
var r,i,n,a,t=[],d=[],u=[];for(o=o||e.replace(removeCommentRe,function(e){return syncLoaderApiRe.lastIndex=amdLoaderApiRe.lastIndex=0,
syncLoaderApiRe.test(e)||amdLoaderApiRe.test(e)?"":e});r=syncLoaderApiRe.exec(o);)i=syncLoaderApiRe.lastIndex,
n=i-r[0].length,a=extractApplication(o,i,n),"loadInit"==r[2]?t.push(a[0]):d.push(a[0]),
syncLoaderApiRe.lastIndex=a[1];return u=t.concat(d),u.length||!amdLoaderApiRe.test(o)?[e.replace(/(^|\s)dojo\.loadInit\s*\(/g,"\n0 && dojo.loadInit("),u.join(""),u]:0;
},transformToAmd=function(e,o){var r,i,n=[],a=[];if(buildDetectRe.test(o)||!(r=extractLegacyApiApplications(o)))return 0;
i=e.mid+"-*loadInit";for(var t in getModule("dojo",e).result.scopeMap)n.push(t),a.push('"'+t+'"');
return"// xdomain rewrite of "+e.mid+"\ndefine('"+i+"',{\n	names:"+json.stringify(n)+",\n	def:function("+n.join(",")+"){"+r[1]+"}});\n\ndefine("+json.stringify(n.concat(["dojo/loadInit!"+i]))+", function("+n.join(",")+"){\n"+r[0]+"});";
},loaderVars=require.initSyncLoader(dojoRequirePlugin,checkDojoRequirePlugin,transformToAmd),sync=loaderVars.sync,requested=loaderVars.requested,arrived=loaderVars.arrived,nonmodule=loaderVars.nonmodule,executing=loaderVars.executing,executed=loaderVars.executed,syncExecStack=loaderVars.syncExecStack,modules=loaderVars.modules,execQ=loaderVars.execQ,getModule=loaderVars.getModule,injectModule=loaderVars.injectModule,setArrived=loaderVars.setArrived,signal=loaderVars.signal,finishExec=loaderVars.finishExec,execModule=loaderVars.execModule,getLegacyMode=loaderVars.getLegacyMode,guardCheckComplete=loaderVars.guardCheckComplete;
return dojoRequirePlugin=loaderVars.dojoRequirePlugin,dojo.provide=function(e){var o=syncExecStack[0],r=lang.mixin(getModule(slashName(e),require.module),{
executed:executing,result:lang.getObject(e,!0)});return setArrived(r),o&&(o.provides||(o.provides=[])).push(function(){
r.result=lang.getObject(e),delete r.provides,r.executed!==executed&&finishExec(r);
}),r.result},has.add("config-publishRequireResult",1,0,0),dojo.require=function(e,o){
function r(e,o){var r=getModule(slashName(e),require.module);if(syncExecStack.length&&syncExecStack[0].finish)return void syncExecStack[0].finish.push(e);
if(r.executed)return r.result;o&&(r.result=nonmodule);var i=getLegacyMode();return injectModule(r),
i=getLegacyMode(),r.executed!==executed&&r.injected===arrived&&loaderVars.guardCheckComplete(function(){
execModule(r)}),r.executed?r.result:void(i==sync?r.cjs?execQ.unshift(r):syncExecStack.length&&(syncExecStack[0].finish=[e]):execQ.push(r));
}var i=r(e,o);return has("config-publishRequireResult")&&!lang.exists(e)&&void 0!==i&&lang.setObject(e,i),
i},dojo.loadInit=function(e){e()},dojo.registerModulePath=function(e,o){var r={};r[e.replace(/\./g,"/")]=o,
require({paths:r})},dojo.platformRequire=function(e){for(var o,r=(e.common||[]).concat(e[dojo._name]||e["default"]||[]);r.length;)lang.isArray(o=r.shift())?dojo.require.apply(dojo,o):dojo.require(o);
},dojo.requireIf=dojo.requireAfterIf=function(e,o,r){e&&dojo.require(o,r)},dojo.requireLocalization=function(e,o,r){
require(["../i18n"],function(i){i.getLocalization(e,o,r)})},{extractLegacyApiApplications:extractLegacyApiApplications,
require:dojoRequirePlugin,loadInit:dojoLoadInitPlugin}});