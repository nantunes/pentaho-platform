define(["dojo/_base/lang","dojo/regexp","dojo/number","./regexp"],function(e,n,t,r){
var a=e.getObject("dojox.validate",!0);return a.isText=function(e,n){return n="object"==typeof n?n:{},
/^\s*$/.test(e)?!1:"number"==typeof n.length&&n.length!=e.length?!1:"number"==typeof n.minlength&&n.minlength>e.length?!1:"number"==typeof n.maxlength&&n.maxlength<e.length?!1:!0;
},a._isInRangeCache={},a.isInRange=function(e,n){if(e=t.parse(e,n),isNaN(e))return!1;
n="object"==typeof n?n:{};var r="number"==typeof n.max?n.max:1/0,i="number"==typeof n.min?n.min:-(1/0),o="string"==typeof n.decimal?n.decimal:".",g=a._isInRangeCache,m=e+"max"+r+"min"+i+"dec"+o;
return"undefined"!=typeof g[m]?g[m]:(g[m]=!(i>e||e>r),g[m])},a.isNumberFormat=function(e,n){
var t=new RegExp("^"+r.numberFormat(n)+"$","i");return t.test(e)},a.isValidLuhn=function(n){
var t,r,a=0;e.isString(n)||(n=String(n)),n=n.replace(/[- ]/g,""),t=n.length%2;for(var i=0;i<n.length;i++)r=parseInt(n.charAt(i)),
i%2==t&&(r*=2),r>9&&(r-=9),a+=r;return!(a%10)},a});