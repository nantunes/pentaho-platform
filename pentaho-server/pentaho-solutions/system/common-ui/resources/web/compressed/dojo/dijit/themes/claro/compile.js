var fs=require("fs"),path=require("path"),less=require("../../../util/less/lib/less"),options={
compress:!1,optimization:1,silent:!1},allFiles=[].concat(fs.readdirSync("."),fs.readdirSync("form").map(function(s){
return"form/"+s}),fs.readdirSync("layout").map(function(s){return"layout/"+s})),lessFiles=allFiles.filter(function(s){
return s&&"variables.less"!=s&&/\.less$/.test(s)});lessFiles.forEach(function(s){
console.log("=== "+s),fs.readFile(s,"utf-8",function(e,r){e&&(console.error("lessc: "+e.message),
process.exit(1)),new less.Parser({paths:[path.dirname(s)],optimization:options.optimization,
filename:s}).parse(r,function(e,r){if(e)less.writeError(e,options),process.exit(1);else try{
var i=r.toCSS({compress:options.compress}),o=s.replace(".less",".css"),t=fs.openSync(o,"w");
fs.writeSync(t,i,0,"utf8")}catch(n){less.writeError(n,options),process.exit(2)}});
})});