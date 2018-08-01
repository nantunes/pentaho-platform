define(["./_base/kernel","./regexp"],function(e,o){return e.cookie=function(e,i,n){
var t,r=document.cookie;if(1==arguments.length){var a=r.match(new RegExp("(?:^|; )"+o.escapeString(e)+"=([^;]*)"));
t=a?decodeURIComponent(a[1]):void 0}else{n=n||{};var c=n.expires;if("number"==typeof c){
var s=new Date;s.setTime(s.getTime()+24*c*60*60*1e3),c=n.expires=s}c&&c.toUTCString&&(n.expires=c.toUTCString()),
i=encodeURIComponent(i);var d,k=e+"="+i;for(d in n){k+="; "+d;var _=n[d];_!==!0&&(k+="="+_);
}document.cookie=k}return t},e.cookie.isSupported=function(){return"cookieEnabled"in navigator||(this("__djCookieTest__","CookiesAllowed"),
navigator.cookieEnabled="CookiesAllowed"==this("__djCookieTest__"),navigator.cookieEnabled&&this("__djCookieTest__","",{
expires:-1})),navigator.cookieEnabled},e.cookie});