define(["../_base/array","../Deferred","../when"],function(e,r,n){"use strict";var t=e.some;
return function(e){var i,s;e instanceof Array?s=e:e&&"object"==typeof e&&(i=e);var l,u=[];
if(i){s=[];for(var a in i)Object.hasOwnProperty.call(i,a)&&(u.push(a),s.push(i[a]));
l={}}else s&&(l=[]);if(!s||!s.length)return(new r).resolve(l);var o=new r;o.promise.always(function(){
l=u=null});var f=s.length;return t(s,function(e,r){return i||u.push(r),n(e,function(e){
o.isFulfilled()||(l[u[r]]=e,0===--f&&o.resolve(l))},o.reject),o.isFulfilled()}),o.promise;
}});