define(["./_base/kernel","./_base/lang"],function(n,r){var e={};return r.setObject("dojo.regexp",e),
e.escapeString=function(n,r){return n.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,function(n){
return r&&-1!=r.indexOf(n)?n:"\\"+n})},e.buildGroupRE=function(n,r,t){if(!(n instanceof Array))return r(n);
for(var u=[],o=0;o<n.length;o++)u.push(r(n[o]));return e.group(u.join("|"),t)},e.group=function(n,r){
return"("+(r?"?:":"")+n+")"},e});