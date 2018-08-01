define(["../..","dojo/_base/lang","dojo/_base/array","dojo/date","dojo/i18n","dojo/regexp","dojo/string","./Date","dojo/i18n!dojo/cldr/nls/buddhist"],function(e,a,r,t,o,n,s,c){
function i(e,a,r,o,n){return n.replace(/([a-z])\1*/gi,function(r){var o,c,i=r.charAt(0),d=r.length,u=["abbr","wide","narrow"];
switch(i){case"G":o=a.eraAbbr[0];break;case"y":o=String(e.getFullYear());break;case"M":
var l=e.getMonth();if(3>d)o=l+1,c=!0;else{var m=["months","format",u[d-3]].join("-");
o=a[m][l]}break;case"d":o=e.getDate(!0),c=!0;break;case"E":var f=e.getDay();if(3>d)o=f+1,
c=!0;else{var b=["days","format",u[d-3]].join("-");o=a[b][f]}break;case"a":var h=e.getHours()<12?"am":"pm";
o=a["dayPeriods-format-wide-"+h];break;case"h":case"H":case"K":case"k":var g=e.getHours();
switch(i){case"h":o=g%12||12;break;case"H":o=g;break;case"K":o=g%12;break;case"k":
o=g||24}c=!0;break;case"m":o=e.getMinutes(),c=!0;break;case"s":o=e.getSeconds(),c=!0;
break;case"S":o=Math.round(e.getMilliseconds()*Math.pow(10,d-3)),c=!0;break;case"z":
if(o=t.getTimezoneName(e.toGregorian()))break;d=4;case"Z":var p=e.toGregorian().getTimezoneOffset(),k=[0>=p?"+":"-",s.pad(Math.floor(Math.abs(p)/60),2),s.pad(Math.abs(p)%60,2)];
4==d&&(k.splice(0,0,"GMT"),k.splice(3,0,":")),o=k.join("");break;default:throw new Error("dojox.date.buddhist.locale.formatPattern: invalid pattern char: "+n);
}return c&&(o=s.pad(o,d)),o})}function d(e,a,t,o){var n=function(e){return e};a=a||n,
t=t||n,o=o||n;var s=e.match(/(''|[^'])+/g),c="'"==e.charAt(0);return r.forEach(s,function(e,r){
e?(s[r]=(c?t:a)(e),c=!c):s[r]=""}),o(s.join(""))}function u(e,a,r,t){t=n.escapeString(t);
o.normalizeLocale(r.locale);return t.replace(/([a-z])\1*/gi,function(t){var o,n=t.charAt(0),s=t.length,c="",i="";
switch(r.strict?(s>1&&(c="0{"+(s-1)+"}"),s>2&&(i="0{"+(s-2)+"}")):(c="0?",i="0{0,2}"),
n){case"y":o="\\d+";break;case"M":o=s>2?"\\S+":c+"[1-9]|1[0-2]";break;case"d":o="[12]\\d|"+c+"[1-9]|3[01]";
break;case"E":o="\\S+";break;case"h":o=c+"[1-9]|1[0-2]";break;case"k":o=c+"\\d|1[01]";
break;case"H":o=c+"\\d|1\\d|2[0-3]";break;case"K":o=c+"[1-9]|1\\d|2[0-4]";break;case"m":
case"s":o=c+"\\d|[0-5]\\d";break;case"S":o="\\d{"+s+"}";break;case"a":var d=r.am||a["dayPeriods-format-wide-am"],u=r.pm||a["dayPeriods-format-wide-pm"];
r.strict?o=d+"|"+u:(o=d+"|"+u,d!=d.toLowerCase()&&(o+="|"+d.toLowerCase()),u!=u.toLowerCase()&&(o+="|"+u.toLowerCase()));
break;default:o=".*"}return e&&e.push(t),"("+o+")"}).replace(/[\xa0 ]/g,"[\\s\\xa0]");
}var l=a.getObject("date.buddhist.locale",!0,e);l.format=function(e,r){r=r||{};var t=o.normalizeLocale(r.locale),n=r.formatLength||"short",s=l._getBuddhistBundle(t),c=[],u=a.hitch(this,i,e,s,t,r.fullYear);
if("year"==r.selector){var m=e.getFullYear();return m}if("time"!=r.selector){var f=r.datePattern||s["dateFormat-"+n];
f&&c.push(d(f,u))}if("date"!=r.selector){var b=r.timePattern||s["timeFormat-"+n];b&&c.push(d(b,u));
}var h=c.join(" ");return h},l.regexp=function(e){return l._parseInfo(e).regexp},
l._parseInfo=function(e){e=e||{};var r,t=o.normalizeLocale(e.locale),n=l._getBuddhistBundle(t),s=e.formatLength||"short",c=e.datePattern||n["dateFormat-"+s],i=e.timePattern||n["timeFormat-"+s];
r="date"==e.selector?c:"time"==e.selector?i:"undefined"==typeof i?c:c+" "+i;var m=[],f=d(r,a.hitch(this,u,m,n,e));
return{regexp:f,tokens:m,bundle:n}},l.parse=function(e,a){e=e.replace(/[\u200E\u200F\u202A-\u202E]/g,""),
a||(a={});var t=l._parseInfo(a),n=t.tokens,s=t.bundle,i=new RegExp("^"+t.regexp+"$"),d=i.exec(e);
o.normalizeLocale(a.locale);if(!d)return null;var u=[2513,0,1,0,0,0,0],m="",f=0,b=["abbr","wide","narrow"],h=(r.every(d,function(e,t){
if(!t)return!0;var o=n[t-1],c=o.length;switch(o.charAt(0)){case"y":u[0]=Number(e);
break;case"M":if(c>2){var i=s["months-format-"+b[c-3]].concat();if(a.strict||(e=e.replace(".","").toLowerCase(),
i=r.map(i,function(e){return e?e.replace(".","").toLowerCase():e})),e=r.indexOf(i,e),
-1==e)return!1;f=c}else e--;u[1]=Number(e);break;case"D":u[1]=0;case"d":u[2]=Number(e);
break;case"a":var d=a.am||s["dayPeriods-format-wide-am"],l=a.pm||s["dayPeriods-format-wide-pm"];
if(!a.strict){var h=/\./g;e=e.replace(h,"").toLowerCase(),d=d.replace(h,"").toLowerCase(),
l=l.replace(h,"").toLowerCase()}if(a.strict&&e!=d&&e!=l)return!1;m=e==l?"p":e==d?"a":"";
break;case"K":24==e&&(e=0);case"h":case"H":case"k":u[3]=Number(e);break;case"m":u[4]=Number(e);
break;case"s":u[5]=Number(e);break;case"S":u[6]=Number(e)}return!0}),+u[3]);"p"===m&&12>h?u[3]=h+12:"a"===m&&12==h&&(u[3]=0);
var g=new c(u[0],u[1],u[2],u[3],u[4],u[5],u[6]);return g};var m=[];return l.addCustomFormats=function(e,a){
m.push({pkg:e,name:a})},l._getBuddhistBundle=function(e){var t={};return r.forEach(m,function(r){
var n=o.getLocalization(r.pkg,r.name,e);t=a.mixin(t,n)},this),t},l.addCustomFormats("dojo.cldr","buddhist"),
l.getNames=function(e,a,r,t,o){var n,s=l._getBuddhistBundle(t),c=[e,r,a];if("standAlone"==r){
var i=c.join("-");n=s[i],1==n[0]&&(n=void 0)}return c[1]="format",(n||s[c.join("-")]).concat();
},l});