exports.config=function(o){for(var e=[],r=[],t=0;t<process.argv.length;t++){var i=(process.argv[t]+"").split("=");
"load"==i[0]?e.push(i[1]):r.push(i)}var a=require("fs"),n={"host-node":1,"host-browser":0,
dom:0,"dojo-has-api":1,"dojo-xhr-factory":0,"dojo-inject-api":1,"dojo-timeout-api":0,
"dojo-trace-api":1,"dojo-dom-ready-api":0,"dojo-publish-privates":1,"dojo-sniff":0,
"dojo-loader":1,"dojo-test-xd":0,"dojo-test-sniff":0};for(var s in n)o.hasCache[s]=n[s];
var d=require("vm"),c=require("path"),u={baseUrl:c.dirname(process.argv[1]),commandLineArgs:r,
deps:e,timeout:0,locale:"en-us",loaderPatch:{log:function(o){var e=require("util");
e.debug(e.inspect(o))},eval:function(o,e){return d.runInThisContext(o,e)},injectUrl:function(o,e){
try{d.runInThisContext(a.readFileSync(o,"utf8"),o),e()}catch(r){this.log("failed to load resource ("+o+")"),
this.log(r)}},getText:function(o,e,r){r(a.readFileSync(o,"utf8"))}}};for(s in u)o[s]=u[s];
};