define(["../_base/array","../Deferred","../when"],function(e,r,n){"use strict";var t=e.forEach;
return function(e){var a;if(e instanceof Array)a=e;else if(e&&"object"==typeof e){
a=[];for(var f in e)Object.hasOwnProperty.call(e,f)&&a.push(e[f])}if(!a||!a.length)return(new r).resolve();
var o=new r;return t(a,function(e){n(e,o.resolve,o.reject)}),o.promise}});