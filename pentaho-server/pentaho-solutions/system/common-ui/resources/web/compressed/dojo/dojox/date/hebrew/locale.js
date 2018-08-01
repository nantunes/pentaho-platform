define(["../..","dojo/_base/lang","dojo/_base/array","dojo/date","dojo/i18n","dojo/regexp","dojo/string","./Date","./numerals","dojo/i18n!dojo/cldr/nls/hebrew"],function(e,a,r,t,o,s,n,c,i){
function l(e,a,r,t,o){return o.replace(/([a-z])\1*/gi,function(t){var s,c,l=t.charAt(0),u=t.length,m=["abbr","wide","narrow"];
switch(l){case"G":s=a[4>u?"eraAbbr":"eraNames"][0];break;case"y":s=r.match(/^he(?:-.+)?$/)?i.getYearHebrewLetters(e.getFullYear()):String(e.getFullYear());
break;case"M":var h=e.getMonth();if(3>u)!e.isLeapYear(e.getFullYear())&&h>5&&h--,
r.match(/^he(?:-.+)?$/)?s=i.getMonthHebrewLetters(h):(s=h+1,c=!0);else{var b=d.getNames("months",m[u-3],"format",r,e);
s=b[h]}break;case"d":r.match(/^he(?:-.+)?$/)?s=e.getDateLocalized(r):(s=e.getDate(),
c=!0);break;case"E":var f=e.getDay();if(3>u)s=f+1,c=!0;else{var g=["days","format",m[u-3]].join("-");
s=a[g][f]}break;case"a":var p=e.getHours()<12?"am":"pm";s=a["dayPeriods-format-wide-"+p];
break;case"h":case"H":case"K":case"k":var w=e.getHours();switch(l){case"h":s=w%12||12;
break;case"H":s=w;break;case"K":s=w%12;break;case"k":s=w||24}c=!0;break;case"m":s=e.getMinutes(),
c=!0;break;case"s":s=e.getSeconds(),c=!0;break;case"S":s=Math.round(e.getMilliseconds()*Math.pow(10,u-3)),
c=!0;break;case"z":s="";break;default:throw new Error("dojox.date.hebrew.locale.formatPattern: invalid pattern char: "+o);
}return c&&(s=n.pad(s,u)),s})}function u(e,a,t,o){var s=function(e){return e};a=a||s,
t=t||s,o=o||s;var n=e.match(/(''|[^'])+/g),c="'"==e.charAt(0);return r.forEach(n,function(e,r){
e?(n[r]=(c?t:a)(e),c=!c):n[r]=""}),o(n.join(""))}function m(e,a,r,t){t=s.escapeString(t);
var n=o.normalizeLocale(r.locale);return t.replace(/([a-z])\1*/gi,function(t){var o,s=t.charAt(0),c=t.length,i="",l="";
switch(r.strict?(c>1&&(i="0{"+(c-1)+"}"),c>2&&(l="0{"+(c-2)+"}")):(i="0?",l="0{0,2}"),
s){case"y":o="\\S+";break;case"M":o=n.match("^he(?:-.+)?$")?c>2?"\\S+ ?\\S+":"\\S{1,4}":c>2?"\\S+ ?\\S+":i+"[1-9]|1[0-2]";
break;case"d":o=n.match("^he(?:-.+)?$")?"\\S['\"'׳]{1,2}\\S?":"[12]\\d|"+i+"[1-9]|30";
break;case"E":o=n.match("^he(?:-.+)?$")?c>3?"\\S+ ?\\S+":"\\S":"\\S+";break;case"h":
o=i+"[1-9]|1[0-2]";break;case"k":o=i+"\\d|1[01]";break;case"H":o=i+"\\d|1\\d|2[0-3]";
break;case"K":o=i+"[1-9]|1\\d|2[0-4]";break;case"m":case"s":o=i+"\\d|[0-5]\\d";break;
case"S":o="\\d{"+c+"}";break;case"a":var u=r.am||a["dayPeriods-format-wide-am"],m=r.pm||a["dayPeriods-format-wide-pm"];
r.strict?o=u+"|"+m:(o=u+"|"+m,u!=u.toLowerCase()&&(o+="|"+u.toLowerCase()),m!=m.toLowerCase()&&(o+="|"+m.toLowerCase()));
break;default:o=".*"}return e&&e.push(t),"("+o+")"}).replace(/[\xa0 ]/g,"[\\s\\xa0]");
}var d=a.getObject("date.hebrew.locale",!0,e);o.getLocalization("dojo.cldr","hebrew"),
d.format=function(e,r){r=r||{};var t=o.normalizeLocale(r.locale),s=r.formatLength||"short",n=d._getHebrewBundle(t),c=[],m=a.hitch(this,l,e,n,t,r.fullYear);
if("year"==r.selector){var h=e.getFullYear();return t.match(/^he(?:-.+)?$/)?i.getYearHebrewLetters(h):h;
}if("time"!=r.selector){var b=r.datePattern||n["dateFormat-"+s];b&&c.push(u(b,m));
}if("date"!=r.selector){var f=r.timePattern||n["timeFormat-"+s];f&&c.push(u(f,m));
}var g=c.join(" ");return g},d.regexp=function(e){return d._parseInfo(e).regexp},
d._parseInfo=function(e){e=e||{};var r,t=o.normalizeLocale(e.locale),s=d._getHebrewBundle(t),n=e.formatLength||"short",c=e.datePattern||s["dateFormat-"+n],i=e.timePattern||s["timeFormat-"+n];
r="date"==e.selector?c:"time"==e.selector?i:void 0===i?c:c+" "+i;var l=[],h=u(r,a.hitch(this,m,l,s,e));
return{regexp:h,tokens:l,bundle:s}},d.parse=function(e,a){e=e.replace(/[\u200E\u200F\u202A-\u202E]/g,""),
a||(a={});var t=d._parseInfo(a),s=t.tokens,n=t.bundle,l=new RegExp("^"+t.regexp+"$"),u=l.exec(e),m=o.normalizeLocale(a.locale);
if(!u)return null;var h=[5730,3,23,0,0,0,0],b="",f=0,g=["abbr","wide","narrow"],p=(r.every(u,function(e,t){
if(!t)return!0;var o=s[t-1],l=o.length;switch(o.charAt(0)){case"y":m.match(/^he(?:-.+)?$/)?h[0]=i.parseYearHebrewLetters(e):h[0]=Number(e);
break;case"M":if(l>2){var u=d.getNames("months",g[l-3],"format",m,new c(5769,1,1)),p=d.getNames("months",g[l-3],"format",m,new c(5768,1,1));
a.strict||(e=e.replace(".","").toLowerCase(),u=r.map(u,function(e){return e?e.replace(".","").toLowerCase():e;
}),p=r.map(p,function(e){return e?e.replace(".","").toLowerCase():e}));var w=e;if(e=r.indexOf(u,w),
-1==e&&(e=r.indexOf(p,w),-1==e))return!1;f=l}else m.match(/^he(?:-.+)?$/)?e=i.parseMonthHebrewLetters(e):e--;
h[1]=Number(e);break;case"D":h[1]=0;case"d":m.match(/^he(?:-.+)?$/)?h[2]=i.parseDayHebrewLetters(e):h[2]=Number(e);
break;case"a":var k=a.am||n["dayPeriods-format-wide-am"],v=a.pm||n["dayPeriods-format-wide-pm"];
if(!a.strict){var L=/\./g;e=e.replace(L,"").toLowerCase(),k=k.replace(L,"").toLowerCase(),
v=v.replace(L,"").toLowerCase()}if(a.strict&&e!=k&&e!=v)return!1;b=e==v?"p":e==k?"a":"";
break;case"K":24==e&&(e=0);case"h":case"H":case"k":h[3]=Number(e);break;case"m":h[4]=Number(e);
break;case"s":h[5]=Number(e);break;case"S":h[6]=Number(e)}return!0}),+h[3]);"p"===b&&12>p?h[3]=p+12:"a"===b&&12==p&&(h[3]=0);
var w=new c(h[0],h[1],h[2],h[3],h[4],h[5],h[6]);return 3>f&&h[1]>=5&&!w.isLeapYear(w.getFullYear())&&w.setMonth(h[1]+1),
w};var h=[];return d.addCustomFormats=function(e,a){h.push({pkg:e,name:a})},d._getHebrewBundle=function(e){
var t={};return r.forEach(h,function(r){var s=o.getLocalization(r.pkg,r.name,e);t=a.mixin(t,s);
},this),t},d.addCustomFormats("dojo.cldr","hebrew"),d.getNames=function(e,a,r,t,o){
var s,n=d._getHebrewBundle(t),c=[e,r,a];if("standAlone"==r){var i=c.join("-");s=n[i],
1==s[0]&&(s=void 0)}c[1]="format";var l=(s||n[c.join("-")]).concat();return"months"==e&&(o.isLeapYear(o.getFullYear())?(c.push("leap"),
l[6]=n[c.join("-")]):delete l[5]),l},d});