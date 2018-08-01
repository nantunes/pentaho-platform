define(["../..","dojo/_base/lang","dojo/_base/array","dojo/date","dojo/i18n","dojo/regexp","dojo/string","./Date","dojo/i18n!dojo/cldr/nls/persian"],function(e,a,r,t,o,n,s,c,i){
function d(e,a,r,o,n){return n.replace(/([a-z])\1*/gi,function(r){var o,c,i=r.charAt(0),d=r.length,u=["abbr","wide","narrow"];
switch(i){case"G":o=a.eraAbbr[0];break;case"y":o=String(e.getFullYear());break;case"M":
var l=e.getMonth();if(3>d)o=l+1,c=!0;else{var m=["months","format",u[d-3]].join("-");
o=a[m][l]}break;case"d":o=e.getDate(!0),c=!0;break;case"E":var f=e.getDay();if(3>d)o=f+1,
c=!0;else{var b=["days","format",u[d-3]].join("-");o=a[b][f]}break;case"a":var g=e.getHours()<12?"am":"pm";
o=a["dayPeriods-format-wide-"+g];break;case"h":case"H":case"K":case"k":var p=e.getHours();
switch(i){case"h":o=p%12||12;break;case"H":o=p;break;case"K":o=p%12;break;case"k":
o=p||24}c=!0;break;case"m":o=e.getMinutes(),c=!0;break;case"s":o=e.getSeconds(),c=!0;
break;case"S":o=Math.round(e.getMilliseconds()*Math.pow(10,d-3)),c=!0;break;case"z":
if(o=t.getTimezoneName(e.toGregorian()))break;d=4;case"Z":var h=e.toGregorian().getTimezoneOffset(),k=[0>=h?"+":"-",s.pad(Math.floor(Math.abs(h)/60),2),s.pad(Math.abs(h)%60,2)];
4==d&&(k.splice(0,0,"GMT"),k.splice(3,0,":")),o=k.join("");break;default:throw new Error("dojox.date.persian.locale.formatPattern: invalid pattern char: "+n);
}return c&&(o=s.pad(o,d)),o})}function u(e,a,t,o){var n=function(e){return e};a=a||n,
t=t||n,o=o||n;var s=e.match(/(''|[^'])+/g),c="'"==e.charAt(0);return r.forEach(s,function(e,r){
e?(s[r]=(c?t:a)(e),c=!c):s[r]=""}),o(s.join(""))}function l(e,a,r,t){t=n.escapeString(t);
o.normalizeLocale(r.locale);return t.replace(/([a-z])\1*/gi,function(t){var o,n=t.charAt(0),s=t.length,c="",i="";
switch(r.strict?(s>1&&(c="0{"+(s-1)+"}"),s>2&&(i="0{"+(s-2)+"}")):(c="0?",i="0{0,2}"),
n){case"y":o="\\d+";break;case"M":o=s>2?"\\S+ ?\\S+":c+"[1-9]|1[0-2]";break;case"d":
o="[12]\\d|"+c+"[1-9]|3[01]";break;case"E":o="\\S+";break;case"h":o=c+"[1-9]|1[0-2]";
break;case"k":o=c+"\\d|1[01]";break;case"H":o=c+"\\d|1\\d|2[0-3]";break;case"K":o=c+"[1-9]|1\\d|2[0-4]";
break;case"m":case"s":o=c+"\\d|[0-5]\\d";break;case"S":o="\\d{"+s+"}";break;case"a":
var d=r.am||a["dayPeriods-format-wide-am"],u=r.pm||a["dayPeriods-format-wide-pm"];
r.strict?o=d+"|"+u:(o=d+"|"+u,d!=d.toLowerCase()&&(o+="|"+d.toLowerCase()),u!=u.toLowerCase()&&(o+="|"+u.toLowerCase()));
break;default:o=".*"}return e&&e.push(t),"("+o+")"}).replace(/[\xa0 ]/g,"[\\s\\xa0]");
}var m=a.getObject("date.persian.locale",!0,e);m.format=function(e,r){r=r||{};var t=o.normalizeLocale(r.locale),n=r.formatLength||"short",s=m._getPersianBundle(t),c=[],i=a.hitch(this,d,e,s,t,r.fullYear);
if("year"==r.selector){var l=e.getFullYear();return l}if("time"!=r.selector){var f=r.datePattern||s["dateFormat-"+n];
f&&c.push(u(f,i))}if("date"!=r.selector){var b=r.timePattern||s["timeFormat-"+n];b&&c.push(u(b,i));
}var g=c.join(" ");return g},m.regexp=function(e){return m._parseInfo(e).regexp},
m._parseInfo=function(e){e=e||{};var r,t=o.normalizeLocale(e.locale),n=m._getPersianBundle(t),s=e.formatLength||"short",c=e.datePattern||n["dateFormat-"+s],i=e.timePattern||n["timeFormat-"+s];
r="date"==e.selector?c:"time"==e.selector?i:"undefined"==typeof i?c:c+" "+i;var d=[],f=u(r,a.hitch(this,l,d,n,e));
return{regexp:f,tokens:d,bundle:n}},m.parse=function(e,a){e=e.replace(/[\u200E\u200F\u202A\u202E]/g,""),
a||(a={});var t=m._parseInfo(a),n=t.tokens,s=t.bundle,i=t.regexp.replace(/[\u200E\u200F\u202A\u202E]/g,""),d=new RegExp("^"+i+"$"),u=d.exec(e);
o.normalizeLocale(a.locale);if(!u)return null;var l=[1389,0,1,0,0,0,0],f="",b=0,g=["abbr","wide","narrow"],p=(r.every(u,function(e,t){
if(!t)return!0;var o=n[t-1],c=o.length;switch(o.charAt(0)){case"y":l[0]=Number(e);
break;case"M":if(c>2){var i=s["months-format-"+g[c-3]].concat();if(a.strict||(e=e.replace(".","").toLowerCase(),
i=r.map(i,function(e){return e?e.replace(".","").toLowerCase():e})),e=r.indexOf(i,e),
-1==e)return!1;b=c}else e--;l[1]=Number(e);break;case"D":l[1]=0;case"d":l[2]=Number(e);
break;case"a":var d=a.am||s["dayPeriods-format-wide-am"],u=a.pm||s["dayPeriods-format-wide-pm"];
if(!a.strict){var m=/\./g;e=e.replace(m,"").toLowerCase(),d=d.replace(m,"").toLowerCase(),
u=u.replace(m,"").toLowerCase()}if(a.strict&&e!=d&&e!=u)return!1;f=e==u?"p":e==d?"a":"";
break;case"K":24==e&&(e=0);case"h":case"H":case"k":l[3]=Number(e);break;case"m":l[4]=Number(e);
break;case"s":l[5]=Number(e);break;case"S":l[6]=Number(e)}return!0}),+l[3]);"p"===f&&12>p?l[3]=p+12:"a"===f&&12==p&&(l[3]=0);
var h=new c(l[0],l[1],l[2],l[3],l[4],l[5],l[6]);return h};var f=[];return m.addCustomFormats=function(e,a){
f.push({pkg:e,name:a})},m._getPersianBundle=function(e){var t={};return r.forEach(f,function(r){
var n=o.getLocalization(r.pkg,r.name,e);t=a.mixin(t,n)},this),t},m.addCustomFormats("dojo.cldr","persian"),
m.getNames=function(e,a,r,t,o){var n,s=m._getPersianBundle(t),c=[e,r,a];if("standAlone"==r){
var i=c.join("-");n=s[i],1==n[0]&&(n=void 0)}return c[1]="format",(n||s[c.join("-")]).concat();
},m.weekDays=m.getNames("days","wide","format"),m.months=m.getNames("months","wide","format"),
m});