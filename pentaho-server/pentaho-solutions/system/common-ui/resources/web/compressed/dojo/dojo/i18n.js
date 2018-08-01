define(["./_base/kernel","require","./has","./_base/array","./_base/config","./_base/lang","./has!host-browser?./_base/xhr","./json","module"],function(n,e,o,r,i,t,a,s,l){
o.add("dojo-preload-i18n-Api",1),o.add("dojo-v1x-i18n-Api",1);var u=n.i18n={},c=/(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/,f=function(n,e,o,r){
for(var i=[o+r],t=e.split("-"),a="",s=0;s<t.length;s++)a+=(a?"-":"")+t[s],(!n||n[a])&&(i.push(o+a+"/"+r),
i.specificity=a);return i},d={},p=function(e,o,r){return r=r?r.toLowerCase():n.locale,
e=e.replace(/\./g,"/"),o=o.replace(/\./g,"/"),/root/i.test(r)?e+"/nls/"+o:e+"/nls/"+r+"/"+o;
},v=n.getL10nName=function(n,e,o){return n=l.id+"!"+p(n,e,o)},h=function(n,e,o,r,i,a){
n([e],function(s){var l=t.clone(s.root||s.ROOT),u=f(!s._v1x&&s,i,o,r);n(u,function(){
for(var n=1;n<u.length;n++)l=t.mixin(t.clone(l),arguments[n]);var o=e+"/"+i;d[o]=l,
l.$locale=u.specificity,a()})})},_=function(n,e){return/^\./.test(n)?e(n):n},g=function(n){
var e=i.extraLocale||[];return e=t.isArray(e)?e:[e],e.push(n),e},x=function(e,i,a){
if(o("dojo-preload-i18n-Api")){var l=e.split("*"),u="preload"==l[1];if(u&&(d[e]||(d[e]=1,
A(l[2],s.parse(l[3]),1,i)),a(1)),u||O(e,i,a))return}var f=c.exec(e),p=f[1]+"/",v=f[5]||f[4],_=p+v,x=f[5]&&f[4],y=x||n.locale||"",m=_+"/"+y,j=x?[y]:g(y),L=j.length,b=function(){
--L||a(t.delegate(d[m]))};r.forEach(j,function(n){var e=_+"/"+n;o("dojo-preload-i18n-Api")&&k(e),
d[e]?b():h(i,_,p,v,n,b)})};if(o("dojo-unit-tests"))var y=u.unitTests=[];if(o("dojo-preload-i18n-Api")||o("dojo-v1x-i18n-Api"))var m=u.normalizeLocale=function(e){
var o=e?e.toLowerCase():n.locale;return"root"==o?"ROOT":o},j=function(n,r){return o("dojo-sync-loader")&&o("dojo-v1x-i18n-Api")?r.isXdUrl(e.toUrl(n+".js")):!0;
},L=0,b=[],A=u._preloadLocalizations=function(o,i,t,a){function s(n,e){j(n,a)||t?a([n],e):F([n],e,a);
}function l(n,e){for(var o=n.split("-");o.length;){if(e(o.join("-")))return;o.pop();
}e("ROOT")}function u(n){n=m(n),l(n,function(n){if(r.indexOf(i,n)>=0){var t=o.replace(/\./g,"/")+"_"+n;
return L++,s(t,function(o){for(var r in o)d[e.toAbsMid(r)+"/"+n]=o[r];for(--L;!L&&b.length;)x.apply(null,b.shift());
}),!0}return!1})}a=a||e,u(),r.forEach(n.config.extraLocale,u)},O=function(n,e,o){
return L&&b.push([n,e,o]),L},k=function(){};if(o("dojo-v1x-i18n-Api")){var w={},E=new Function("__bundle","__checkForLegacyModules","__mid","__amdValue","var define = function(mid, factory){define.called = 1; __amdValue.result = factory || mid;},	   require = function(){define.called = 1;};try{define.called = 0;eval(__bundle);if(define.called==1)return __amdValue;if((__checkForLegacyModules = __checkForLegacyModules(__mid)))return __checkForLegacyModules;}catch(e){}try{return eval('('+__bundle+')');}catch(e){return e;}"),F=function(n,e,o){
var i=[];r.forEach(n,function(n){function e(e){var o=E(e,k,n,w);o===w?i.push(d[r]=w.result):(o instanceof Error&&(console.error("failed to evaluate i18n bundle; url="+r,o),
o={}),i.push(d[r]=/nls\/[^\/]+\/[^\/]+$/.test(r)?o:{root:o,_v1x:1}))}var r=o.toUrl(n+".js");
if(d[r])i.push(d[r]);else{var t=o.syncLoadNls(n);if(t)i.push(t);else if(a)a.get({
url:r,sync:!0,load:e,error:function(){i.push(d[r]={})}});else try{o.getText(r,!0,e);
}catch(s){i.push(d[r]={})}}}),e&&e.apply(null,i)};k=function(e){for(var o,r=e.split("/"),i=n.global[r[0]],t=1;i&&t<r.length-1;i=i[r[t++]]);
return i&&(o=i[r[t]],o||(o=i[r[t].replace(/-/g,"_")]),o&&(d[e]=o)),o},u.getLocalization=function(n,o,r){
var i,t=p(n,o,r);return x(t,j(t,e)?e:function(n,o){F(n,o,e)},function(n){i=n}),i},
o("dojo-unit-tests")&&y.push(function(n){n.register("tests.i18n.unit",function(n){
var e;e=E("{prop:1}",k,"nonsense",w),n.is({prop:1},e),n.is(void 0,e[1]),e=E("({prop:1})",k,"nonsense",w),
n.is({prop:1},e),n.is(void 0,e[1]),e=E("{'prop-x':1}",k,"nonsense",w),n.is({"prop-x":1
},e),n.is(void 0,e[1]),e=E("({'prop-x':1})",k,"nonsense",w),n.is({"prop-x":1},e),
n.is(void 0,e[1]),e=E("define({'prop-x':1})",k,"nonsense",w),n.is(w,e),n.is({"prop-x":1
},w.result),e=E("define('some/module', {'prop-x':1})",k,"nonsense",w),n.is(w,e),n.is({
"prop-x":1},w.result),e=E("this is total nonsense and should throw an error",k,"nonsense",w),
n.is(e instanceof Error,!0)})})}return t.mixin(u,{dynamic:!0,normalize:_,load:x,cache:d,
getL10nName:v})});