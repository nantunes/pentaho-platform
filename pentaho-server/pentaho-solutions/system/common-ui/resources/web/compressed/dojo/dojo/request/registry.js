define(["require","../_base/array","./default!platform","./util"],function(n,r,t,e){
function u(n,r){for(var e,u=a.slice(0),i=0;e=u[i++];)if(e(n,r))return e.request.call(null,n,r);
return t.apply(null,arguments)}function i(n,r){var t;return r?(t=n.test?function(r){
return n.test(r)}:n.apply&&n.call?function(){return n.apply(null,arguments)}:function(r){
return r===n},t.request=r):(t=function(){return!0},t.request=n),t}var a=[];return u.register=function(n,t,e){
var u=i(n,t);return a[e?"unshift":"push"](u),{remove:function(){var n;~(n=r.indexOf(a,u))&&a.splice(n,1);
}}},u.load=function(r,e,i,a){r?n([r],function(n){t=n,i(u)}):i(u)},e.addCommonMethods(u),
u});