define(["../has","./config","require","module"],function(o,e,n,a){var r,d,i,t={},l={},s={
config:e,global:this,dijit:t,dojox:l},u={dojo:["dojo",s],dijit:["dijit",t],dojox:["dojox",l]
},c=n.map&&n.map[a.id.match(/[^\/]+/)[0]];for(d in c)u[d]?u[d][0]=c[d]:u[d]=[c[d],{}];
for(d in u)i=u[d],i[1]._scopeName=i[0],e.noGlobals||(this[i[0]]=i[1]);s.scopeMap=u,
s.baseUrl=s.config.baseUrl=n.baseUrl,s.isAsync=!o("dojo-loader")||n.async,s.locale=e.locale;
var f="$Rev: f774568 $".match(/[0-9a-f]{7,}/);if(s.version={major:1,minor:9,patch:2,
flag:"",revision:f?f[0]:NaN,toString:function(){var o=s.version;return o.major+"."+o.minor+"."+o.patch+o.flag+" ("+o.revision+")";
}},o.add("extend-dojo",1),Function("d","d.eval = function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}")(s),
o("host-rhino")?s.exit=function(o){quit(o)}:s.exit=function(){},o.add("dojo-guarantee-console",1),
o("dojo-guarantee-console")){"undefined"!=typeof console||(console={});var m,g=["assert","count","debug","dir","dirxml","error","group","groupEnd","info","profile","profileEnd","time","timeEnd","trace","warn","log"];
for(r=0;m=g[r++];)console[m]||!function(){var o=m+"";console[o]="log"in console?function(){
var e=Array.apply({},arguments);e.unshift(o+":"),console.log(e.join(" "))}:function(){},
console[o]._fake=!0}()}if(o.add("dojo-debug-messages",!!e.isDebug),s.deprecated=s.experimental=function(){},
o("dojo-debug-messages")&&(s.deprecated=function(o,e,n){var a="DEPRECATED: "+o;e&&(a+=" "+e),
n&&(a+=" -- will be removed in version: "+n),console.warn(a)},s.experimental=function(o,e){
var n="EXPERIMENTAL: "+o+" -- APIs subject to change without notice.";e&&(n+=" "+e),
console.warn(n)}),o.add("dojo-modulePaths",1),o("dojo-modulePaths")&&e.modulePaths){
s.deprecated("dojo.modulePaths","use paths configuration");var p={};for(d in e.modulePaths)p[d.replace(/\./g,"/")]=e.modulePaths[d];
n({paths:p})}return o.add("dojo-moduleUrl",1),o("dojo-moduleUrl")&&(s.moduleUrl=function(o,e){
s.deprecated("dojo.moduleUrl()","use require.toUrl","2.0");var a=null;return o&&(a=n.toUrl(o.replace(/\./g,"/")+(e?"/"+e:"")+"/*.*").replace(/\/\*\.\*/,"")+(e?"":"/")),
a}),s._hasResource={},s});