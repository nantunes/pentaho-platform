define(["../..","dojo/_base/lang","dojo/_base/array","dojo/date","dojo/i18n","dojo/regexp","dojo/string","./Date","dojo/i18n!dojo/cldr/nls/islamic"],function(e,a,r,t,o,s,n,c,i){
function u(e,a,r,o,s){return s.replace(/([a-z])\1*/gi,function(r){var o,c,i=r.charAt(0),u=r.length,d=["abbr","wide","narrow"];
switch(i){case"G":o=a.eraAbbr[0];break;case"y":o=String(e.getFullYear());break;case"M":
var l=e.getMonth();if(3>u)o=l+1,c=!0;else{var m=["months","format",d[u-3]].join("-");
o=a[m][l]}break;case"d":o=e.getDate(!0),c=!0;break;case"E":var f=e.getDay();if(3>u)o=f+1,
c=!0;else{var b=["days","format",d[u-3]].join("-");o=a[b][f]}break;case"a":var g=e.getHours()<12?"am":"pm";
o=a["dayPeriods-format-wide-"+g];break;case"h":case"H":case"K":case"k":var h=e.getHours();
switch(i){case"h":o=h%12||12;break;case"H":o=h;break;case"K":o=h%12;break;case"k":
o=h||24}c=!0;break;case"m":o=e.getMinutes(),c=!0;break;case"s":o=e.getSeconds(),c=!0;
break;case"S":o=Math.round(e.getMilliseconds()*Math.pow(10,u-3)),c=!0;break;case"z":
if(o=t.getTimezoneName(e.toGregorian()))break;u=4;case"Z":var p=e.toGregorian().getTimezoneOffset(),k=[0>=p?"+":"-",n.pad(Math.floor(Math.abs(p)/60),2),n.pad(Math.abs(p)%60,2)];
4==u&&(k.splice(0,0,"GMT"),k.splice(3,0,":")),o=k.join("");break;default:throw new Error("dojox.date.umalqura.locale.formatPattern: invalid pattern char: "+s);
}return c&&(o=n.pad(o,u)),o})}function d(e,a,t,o){var s=function(e){return e};a=a||s,
t=t||s,o=o||s;var n=e.match(/(''|[^'])+/g),c="'"==e.charAt(0);return r.forEach(n,function(e,r){
e?(n[r]=(c?t:a)(e),c=!c):n[r]=""}),o(n.join(""))}function l(e,a,r,t){t=s.escapeString(t);
o.normalizeLocale(r.locale);return t.replace(/([a-z])\1*/gi,function(t){var o,s=t.charAt(0),n=t.length,c="",i="";
switch(r.strict?(n>1&&(c="0{"+(n-1)+"}"),n>2&&(i="0{"+(n-2)+"}")):(c="0?",i="0{0,2}"),
s){case"y":o="\\d+";break;case"M":o=n>2?"\\S+ ?\\S+":c+"[1-9]|1[0-2]";break;case"d":
o="[12]\\d|"+c+"[1-9]|3[01]";break;case"E":o="\\S+";break;case"h":o=c+"[1-9]|1[0-2]";
break;case"k":o=c+"\\d|1[01]";break;case"H":o=c+"\\d|1\\d|2[0-3]";break;case"K":o=c+"[1-9]|1\\d|2[0-4]";
break;case"m":case"s":o=c+"\\d|[0-5]\\d";break;case"S":o="\\d{"+n+"}";break;case"a":
var u=r.am||a["dayPeriods-format-wide-am"],d=r.pm||a["dayPeriods-format-wide-pm"];
r.strict?o=u+"|"+d:(o=u+"|"+d,u!=u.toLowerCase()&&(o+="|"+u.toLowerCase()),d!=d.toLowerCase()&&(o+="|"+d.toLowerCase()));
break;default:o=".*"}return e&&e.push(t),"("+o+")"}).replace(/[\xa0 ]/g,"[\\s\\xa0]");
}var m=a.getObject("date.umalqura.locale",!0,e);m.format=function(e,r){r=r||{};var t=o.normalizeLocale(r.locale),s=r.formatLength||"short",n=m._getIslamicBundle(t),c=[],i=a.hitch(this,u,e,n,t,r.fullYear);
if("year"==r.selector){var l=e.getFullYear();return l}if("time"!=r.selector){var f=r.datePattern||n["dateFormat-"+s];
f&&c.push(d(f,i))}if("date"!=r.selector){var b=r.timePattern||n["timeFormat-"+s];b&&c.push(d(b,i));
}var g=c.join(" ");return g},m.regexp=function(e){return m._parseInfo(e).regexp},
m._parseInfo=function(e){e=e||{};var r,t=o.normalizeLocale(e.locale),s=m._getIslamicBundle(t),n=e.formatLength||"short",c=e.datePattern||s["dateFormat-"+n],i=e.timePattern||s["timeFormat-"+n];
r="date"==e.selector?c:"time"==e.selector?i:"undefined"==typeof i?c:c+" "+i;var u=[],f=d(r,a.hitch(this,l,u,s,e));
return{regexp:f,tokens:u,bundle:s}},m.parse=function(e,a){e=e.replace(/[\u200E\u200F\u202A\u202E]/g,""),
a||(a={});var t=m._parseInfo(a),s=t.tokens,n=t.bundle,i=t.regexp.replace(/[\u200E\u200F\u202A\u202E]/g,""),u=new RegExp("^"+i+"$"),d=u.exec(e);
o.normalizeLocale(a.locale);if(!d)return null;var l=[1389,0,1,0,0,0,0],f="",b=0,g=["abbr","wide","narrow"],h=(r.every(d,function(e,t){
if(!t)return!0;var o=s[t-1],c=o.length;switch(o.charAt(0)){case"y":l[0]=Number(e);
break;case"M":if(c>2){var i=n["months-format-"+g[c-3]].concat();if(a.strict||(e=e.replace(".","").toLowerCase(),
i=r.map(i,function(e){return e?e.replace(".","").toLowerCase():e})),e=r.indexOf(i,e),
-1==e)return!1;b=c}else e--;l[1]=Number(e);break;case"D":l[1]=0;case"d":l[2]=Number(e);
break;case"a":var u=a.am||n["dayPeriods-format-wide-am"],d=a.pm||n["dayPeriods-format-wide-pm"];
if(!a.strict){var m=/\./g;e=e.replace(m,"").toLowerCase(),u=u.replace(m,"").toLowerCase(),
d=d.replace(m,"").toLowerCase()}if(a.strict&&e!=u&&e!=d)return!1;f=e==d?"p":e==u?"a":"";
break;case"K":24==e&&(e=0);case"h":case"H":case"k":l[3]=Number(e);break;case"m":l[4]=Number(e);
break;case"s":l[5]=Number(e);break;case"S":l[6]=Number(e)}return!0}),+l[3]);"p"===f&&12>h?l[3]=h+12:"a"===f&&12==h&&(l[3]=0);
var p=new c(l[0],l[1],l[2],l[3],l[4],l[5],l[6]);return p};var f=[];return m.addCustomFormats=function(e,a){
f.push({pkg:e,name:a})},m._getIslamicBundle=function(e){var t={};return r.forEach(f,function(r){
var s=o.getLocalization(r.pkg,r.name,e);t=a.mixin(t,s)},this),t},m.addCustomFormats("dojo.cldr","islamic"),
m.getNames=function(e,a,r,t,o){var s,n=m._getIslamicBundle(t),c=[e,r,a];if("standAlone"==r){
var i=c.join("-");s=n[i],1==s[0]&&(s=void 0)}return c[1]="format",(s||n[c.join("-")]).concat();
},m.weekDays=m.getNames("days","wide","format"),m.months=m.getNames("months","wide","format"),
m});