function rhinoDojoConfig(e,o,t){var a=function(e,o){print((e?e+":":"")+o[0]);for(var t=1;t<o.length;t++)print(", "+o[t]);
};console={log:function(){a(0,arguments)},error:function(){a("ERROR",arguments)},
warn:function(){a("WARN",arguments)}};for(var r=[],n=0;n<t.length;n++){var i=(t[n]+"").split("=");
"load"==i[0]&&r.push(i[1])}if("undefined"==typeof setTimeout||"undefined"==typeof clearTimeout){
var l=[];clearTimeout=function(e){l[e]&&l[e].stop()},setTimeout=function(e,o){var t={
sleepTime:o,hasSlept:!1,run:function(){this.hasSlept||(this.hasSlept=!0,java.lang.Thread.currentThread().sleep(this.sleepTime));
try{e()}catch(o){console.debug("Error running setTimeout thread:"+o)}}},a=new java.lang.Runnable(t),r=new java.lang.Thread(a);
return r.start(),l.push(r)-1}}var s=function(e){return new java.io.File(e).exists();
},d={"host-rhino":1,"host-browser":0,dom:0,"dojo-has-api":1,"dojo-xhr-factory":0,
"dojo-inject-api":1,"dojo-timeout-api":0,"dojo-trace-api":1,"dojo-loader-catches":1,
"dojo-dom-ready-api":0,"dojo-publish-privates":1,"dojo-sniff":0,"dojo-loader":1,"dojo-test-xd":0,
"dojo-test-sniff":0};for(var u in d)e.hasCache[u]=d[u];var c={baseUrl:o,commandLineArgs:t,
deps:r,timeout:0,locale:String(java.util.Locale.getDefault().toString().replace("_","-").toLowerCase()),
loaderPatch:{injectUrl:function(e,o){try{s(e)?load(e):require.eval(readUrl(e,"UTF-8")),
o()}catch(t){console.log("failed to load resource ("+e+")"),console.log(t)}},getText:function(e,o,t){
t(s(e)?readFile(e,"UTF-8"):readUrl(e,"UTF-8"))}}};for(u in c)e[u]=c[u]}