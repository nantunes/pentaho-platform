define(["dojo/_base/lang","./_base"],function(r,a){return a.isValidIsbn=function(a){
var e,n,t=0;switch(r.isString(a)||(a=String(a)),a=a.replace(/[- ]/g,""),e=a.length){
case 10:n=e;for(var s=0;9>s;s++)t+=parseInt(a.charAt(s))*n,n--;var i=a.charAt(9).toUpperCase();
return t+="X"==i?10:parseInt(i),t%11==0;case 13:n=-1;for(var s=0;e>s;s++)t+=parseInt(a.charAt(s))*(2+n),
n*=-1;return t%10==0}return!1},a.isValidIsbn});