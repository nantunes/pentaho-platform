if(dojo.config.baseUrl?dojo.baseUrl=dojo.config.baseUrl:dojo.baseUrl="./",dojo._name="spidermonkey",
dojo.isSpidermonkey=!0,dojo.exit=function(o){quit(o)},"function"==typeof print&&(console.debug=print),
"undefined"==typeof line2pc)throw new Error("attempt to use SpiderMonkey host environment when no 'line2pc' global");
if(dojo._spidermonkeyCurrentFile=function(o){var r="";try{throw Error("whatever");
}catch(e){r=e.stack}var n=r.match(/[^@]*\.js/gi);if(!n)throw Error("could not parse stack string: '"+r+"'");
var t="undefined"!=typeof o&&o?n[o+1]:n[n.length-1];if(!t)throw Error("could not find file name in stack string '"+r+"'");
return t},dojo._loadUri=function(o){return load(o),1},dojo.config.modulePaths)for(var param in dojo.config.modulePaths)dojo.registerModulePath(param,dojo.config.modulePaths[param]);