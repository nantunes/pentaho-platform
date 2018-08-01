define(["dojo/_base/lang","dojo/date","dojo/cldr/supplemental","dojo/date/stamp"],function(e,t,o,r){
var n={};return n.newDate=function(e,t){t=t||Date;var o;if("number"==typeof e)return new t(n);
if(e.getTime)return new t(e.getTime());if(e.toGregorian)return o=e.toGregorian(),
t!==Date&&(o=new t(o.getTime())),o;if("string"==typeof e){if(o=r.fromISOString(e),
null===o)throw new Error("Cannot parse date string ("+e+'), specify a "decodeDate" function that translates this string into a Date object');
return t!==Date&&(o=new t(o.getTime())),o}},n.floorToDay=function(e,t,o){return o=o||Date,
t||(e=n.newDate(e,o)),e.setHours(0,0,0,0),e},n.floorToMonth=function(e,t,o){return o=o||Date,
t||(e=n.newDate(e,o)),e.setDate(1),e.setHours(0,0,0,0),e},n.floorToWeek=function(e,r,a,i,u){
r=r||Date,a=a||t;var s=void 0==i||0>i?o.getFirstDayOfWeek(u):i,f=e.getDay();return f==s?e:n.floorToDay(a.add(e,"day",f>s?-f+s:-f+s-7),!0,r);
},n.floor=function(e,t,o,r,a){var i=n.floorToDay(e,r,a);switch(t){case"week":return n.floorToWeek(i,firstDayOfWeek,dateModule,locale);
case"minute":i.setHours(e.getHours()),i.setMinutes(Math.floor(e.getMinutes()/o)*o);
break;case"hour":i.setHours(Math.floor(e.getHours()/o)*o)}return i},n.isStartOfDay=function(e,o,r){
return r=r||t,0==r.compare(this.floorToDay(e,!1,o),e)},n.isToday=function(e,t){t=t||Date;
var o=new t;return e.getFullYear()==o.getFullYear()&&e.getMonth()==o.getMonth()&&e.getDate()==o.getDate();
},n});