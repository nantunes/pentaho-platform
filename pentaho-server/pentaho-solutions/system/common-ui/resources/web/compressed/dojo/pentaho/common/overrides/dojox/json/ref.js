define(["dojo/_base/array","dojo/_base/json","dojo/_base/kernel","dojo/_base/lang","dojo/date/stamp"],function(e,t,r,n,i){
var o=n.getObject("dojox",!0);return n.getObject("json",!0,o),o.json.ref={resolveJson:function(e,t){
function r(v,g,y,b,j,A){var m,$,O,S=o in v?v[o]:y;(o in v||void 0!==S&&b)&&(S=(f+S).replace(l,"$2$3"));
var J=A||v;if(void 0!==S){if(c&&(v.__id=S),!t.schemas||v instanceof Array||!(O=S.match(/^(.+\/)[^\.\[]*$/))||(j=t.schemas[O[1]]),
d[S]&&v instanceof Array==d[S]instanceof Array)J=d[S],delete J.$ref,delete J._loadObject,
$=!0;else{var w=j&&j.prototype;w&&(h.prototype=w,J=new h)}d[S]=J,p&&(p[S]=t.time);
}for(;j;){var P=j.properties;if(P)for(m in v){var I=P[m];I&&"date-time"==I.format&&"string"==typeof v[m]&&(v[m]=i.fromISOString(v[m]));
}j=j["extends"]}var D=v.length;for(m in v){if(m==D)break;if(v.hasOwnProperty(m)){
if(O=v[m],"object"==typeof O&&O&&!(O instanceof Date)&&"__parent"!=m)if(n=O[a]||s&&O[o],
n&&O.__parent||v!=u&&(O.__parent=J),n){delete v[m];var x=n.toString().replace(/(#)([^\.\[])/,"$1.$2").match(/(^([^\[]*\/)?[^#\.\[]*)#?([\.\[].*)?/);
if(d[(f+n).replace(l,"$2$3")]?n=d[(f+n).replace(l,"$2$3")]:(n="$"==x[1]||"this"==x[1]||""==x[1]?e:d[(f+x[1]).replace(l,"$2$3")])&&x[3]&&x[3].replace(/(\[([^\]]+)\])|(\.?([^\.\[]+))/g,function(e,t,r,i,o){
n=n&&n[r?r.replace(/[\"\'\\]/,""):o]}),n)O=n;else if(!g){var N;N||u.push(J),N=!0,
O=r(O,!1,O[a],!0,I),O._loadObject=t.loader}}else g||(O=r(O,u==v,void 0===S?void 0:_(S,m),!1,I,J!=v&&"object"==typeof J[m]&&J[m]));
if(v[m]=O,J!=v&&!J.__isDirty){var U=J[m];J[m]=O,!$||O===U||J._loadObject||"_"==m.charAt(0)&&"_"==m.charAt(1)||"$ref"==m||O instanceof Date&&U instanceof Date&&O.getTime()==U.getTime()||"function"==typeof O&&"function"==typeof U&&O.toString()==U.toString()||!d.onUpdate||d.onUpdate(J,m,U,O);
}}}if($&&(o in v||J instanceof Array)){for(m in J)if(!(J.__isDirty||!J.hasOwnProperty(m)||v.hasOwnProperty(m)||"_"==m.charAt(0)&&"_"==m.charAt(1)||J instanceof Array&&isNaN(m)))for(d.onUpdate&&"_loadObject"!=m&&"_idAttr"!=m&&d.onUpdate(J,m,J[m],void 0),
delete J[m];J instanceof Array&&J.length&&void 0===J[J.length-1];)J.length--}else d.onLoad&&d.onLoad(J);
return J}t=t||{};var n,o=t.idAttribute||"id",a=this.refAttribute,s=t.idAsRef,f=t.idPrefix||"",c=t.assignAbsoluteIds,d=t.index||{},p=t.timeStamps,u=[],l=/^(.*\/)?(\w+:\/\/)|[^\/\.]+\/\.\.\/|^.*\/(\/)/,_=this._addProp,h=function(){};
return e&&"object"==typeof e&&(e=r(e,!1,t.defaultId,!0),r(u,!1)),e},fromJson:function(e,t){
try{var r=JSON.parse(e)}catch(n){throw new SyntaxError("Invalid JSON string: "+n.message+" parsing: "+e);
}return r?this.resolveJson(r,t):r},toJson:function(r,n,a,s){function f(r,s,_){if("object"==typeof r&&r){
if(r instanceof Date)return'"'+i.toISOString(r,{zulu:!0})+'"';var h=r.__id;if(h){
if("#"!=s&&(c&&!h.match(/#/)||u[h])){var v=h;"#"!=h.charAt(0)&&(v=r.__clientId==h?"cid:"+h:h.substring(0,a.length)==a?h.substring(a.length):h);
var g={};return g[p]=v,t.toJson(g,n)}s=h}else r.__id=s,l[s]=r;u[s]=r,_=_||"";var y=n?_+t.toJsonIndentStr:"",b=n?"\n":"",j=n?" ":"";
if(r instanceof Array){var A=e.map(r,function(e,t){var r=f(e,d(s,t),y);return"string"!=typeof r&&(r="undefined"),
b+y+r});return"["+A.join(","+j)+b+_+"]"}var m=[];for(var $ in r)if(r.hasOwnProperty($)){
var O;if("number"==typeof $)O='"'+$+'"';else{if("string"!=typeof $||"_"==$.charAt(0)&&"_"==$.charAt(1))continue;
O=t._escapeString($)}var S=f(r[$],d(s,$),y);if("string"!=typeof S)continue;m.push(b+y+O+":"+j+S);
}return"{"+m.join(","+j)+b+_+"}"}return"function"==typeof r&&o.json.ref.serializeFunctions?r.toString():t.toJson(r);
}var c=this._useRefs,d=this._addProp,p=this.refAttribute;a=a||"";var u={},l={},_=f(r,"#","");
if(!s)for(var h in l)delete l[h].__id;return _},_addProp:function(e,t){return e+(e.match(/#/)?1==e.length?"":".":"#")+t;
},refAttribute:"$ref",_useRefs:!1,serializeFunctions:!1}});