define("dojox/testing/DocTest",["dojo/string"],function(){return dojo.declare("dojox.testing.DocTest",null,{
errors:[],getTests:function(e){var t=dojo.moduleUrl(e).path,s=t.substring(0,t.length-1)+".js",n=(dojo.xhrGet({
url:s,handleAs:"text"}),dojo._getText(s));return this._getTestsFromString(n,!0)},
getTestsFromString:function(e){return this._getTestsFromString(e,!1)},_getTestsFromString:function(e,t){
for(var s=dojo.hitch(dojo.string,"trim"),n=e.split("\n"),c=n.length,l=[],o={commands:[],
expectedResult:[],line:null},r=0;c+1>r;r++){var u=s(n[r]||"");t&&u.match(/^\/\/\s+>>>\s.*/)||u.match(/^\s*>>>\s.*/)?(o.line||(o.line=r+1),
o.expectedResult.length>0&&(l.push({commands:o.commands,expectedResult:o.expectedResult.join("\n"),
line:o.line}),o={commands:[],expectedResult:[],line:r+1}),u=t?s(u).substring(2,u.length):u,
u=s(u).substring(3,u.length),o.commands.push(s(u))):t&&!u.match(/^\/\/\s+.*/)||!o.commands.length||0!=o.expectedResult.length?o.commands.length>0&&o.expectedResult.length&&((!t||u.match(/^\/\/\s*$/))&&l.push({
commands:o.commands,expectedResult:o.expectedResult.join("\n"),line:o.line}),t&&!u.match(/^\/\//)&&l.push({
commands:o.commands,expectedResult:o.expectedResult.join("\n"),line:o.line}),o={commands:[],
expectedResult:[],line:0}):(u=t?s(u).substring(3,u.length):u,o.expectedResult.push(s(u)));
}return l},run:function(e){this.errors=[];var t=this.getTests(e);t&&this._run(t)},
_run:function(e){var t=e.length;this.tests=t;for(var s=0,n=0;t>n;n++){var c=e[n],l=this.runTest(c.commands,c.expectedResult),o="Test "+(n+1)+": ",r=c.commands.join(" ");
r=r.length>50?r.substr(0,50)+"...":r,l.success?(console.info(o+"OK: "+r),s+=1):(this.errors.push({
commands:c.commands,actual:l.actualResult,expected:c.expectedResult}),console.error(o+"Failed: "+r,{
commands:c.commands,actualResult:l.actualResult,expectedResult:c.expectedResult}));
}console.info(t+" tests ran.",s+" Success,",this.errors.length+" Errors")},runTest:function(commands,expected){
var ret={success:!1,actualResult:null},cmds=commands.join("\n");return ret.actualResult=eval(cmds),
(String(ret.actualResult)==expected||dojo.toJson(ret.actualResult)==expected||'"'==expected.charAt(0)&&'"'==expected.charAt(expected.length-1)&&String(ret.actualResult)==expected.substring(1,expected.length-1))&&(ret.success=!0),
ret}})});