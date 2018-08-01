define(["dojo/_base/lang","dojo/_base/declare","dojo/date"],function(t,s,n){var e=s("dojox.date.persian.Date",null,{
_date:0,_month:0,_year:0,_hours:0,_minutes:0,_seconds:0,_milliseconds:0,_day:0,_GREGORIAN_EPOCH:1721425.5,
_PERSIAN_EPOCH:1948320.5,daysInMonth:[31,31,31,31,31,31,30,30,30,30,30,29],constructor:function(){
var t=arguments.length;if(t)if(1==t){var s=arguments[0];"number"==typeof s&&(s=new Date(s)),
s instanceof Date?this.fromGregorian(s):""==s?this._date=new Date(""):(this._year=s._year,
this._month=s._month,this._date=s._date,this._hours=s._hours,this._minutes=s._minutes,
this._seconds=s._seconds,this._milliseconds=s._milliseconds)}else t>=3&&(this._year+=arguments[0],
this._month+=arguments[1],this._date+=arguments[2],this._hours+=arguments[3]||0,this._minutes+=arguments[4]||0,
this._seconds+=arguments[5]||0,this._milliseconds+=arguments[6]||0);else this.fromGregorian(new Date);
},getDate:function(){return this._date},getMonth:function(){return this._month},getFullYear:function(){
return this._year},getDay:function(){return this.toGregorian().getDay()},getHours:function(){
return this._hours},getMinutes:function(){return this._minutes},getSeconds:function(){
return this._seconds},getMilliseconds:function(){return this._milliseconds},setDate:function(t){
if(t=parseInt(t),t>0&&t<=this.getDaysInPersianMonth(this._month,this._year))this._date=t;else{
var s;if(t>0){for(s=this.getDaysInPersianMonth(this._month,this._year);t>s;t-=s,s=this.getDaysInPersianMonth(this._month,this._year))this._month++,
this._month>=12&&(this._year++,this._month-=12);this._date=t}else{for(s=this.getDaysInPersianMonth(this._month-1>=0?this._month-1:11,this._month-1>=0?this._year:this._year-1);0>=t;s=this.getDaysInPersianMonth(this._month-1>=0?this._month-1:11,this._month-1>=0?this._year:this._year-1))this._month--,
this._month<0&&(this._year--,this._month+=12),t+=s;this._date=t}}return this},setFullYear:function(t){
this._year=+t},setMonth:function(t){this._year+=Math.floor(t/12),t>0?this._month=Math.floor(t%12):this._month=Math.floor((t%12+12)%12);
},setHours:function(){var t=arguments.length,s=0;for(t>=1&&(s=parseInt(arguments[0])),
t>=2&&(this._minutes=parseInt(arguments[1])),t>=3&&(this._seconds=parseInt(arguments[2])),
4==t&&(this._milliseconds=parseInt(arguments[3]));s>=24;){this._date++;var n=this.getDaysInPersianMonth(this._month,this._year);
this._date>n&&(this._month++,this._month>=12&&(this._year++,this._month-=12),this._date-=n),
s-=24}this._hours=s},_addMinutes:function(t){return t+=this._minutes,this.setMinutes(t),
this.setHours(this._hours+parseInt(t/60)),this},_addSeconds:function(t){return t+=this._seconds,
this.setSeconds(t),this._addMinutes(parseInt(t/60)),this},_addMilliseconds:function(t){
return t+=this._milliseconds,this.setMilliseconds(t),this._addSeconds(parseInt(t/1e3)),
this},setMinutes:function(t){return this._minutes=t%60,this},setSeconds:function(t){
return this._seconds=t%60,this},setMilliseconds:function(t){return this._milliseconds=t%1e3,
this},toString:function(){if(isNaN(this._date))return"Invalidate Date";var t=new Date;
return t.setHours(this._hours),t.setMinutes(this._minutes),t.setSeconds(this._seconds),
t.setMilliseconds(this._milliseconds),this._month+" "+this._date+" "+this._year+" "+t.toTimeString();
},toGregorian:function(){var t,s;this._year;s=this.persian_to_jd(this._year,this._month+1,this._date),
t=this.jd_to_gregorian(s,this._month+1),weekday=this.jwday(s);var n=new Date(t[0],t[1]-1,t[2],this._hours,this._minutes,this._seconds,this._milliseconds);
return n},fromGregorian:function(t){var s=new Date(t),n=s.getFullYear(),e=s.getMonth(),i=s.getDate(),r=this.calcGregorian(n,e,i);
return this._date=r[2],this._month=r[1],this._year=r[0],this._hours=s.getHours(),
this._minutes=s.getMinutes(),this._seconds=s.getSeconds(),this._milliseconds=s.getMilliseconds(),
this._day=s.getDay(),this},calcGregorian:function(t,s,n){var e,i;return e=this.gregorian_to_jd(t,s+1,n)+Math.floor(.5)/86400,
perscal=this.jd_to_persian(e),i=this.jwday(e),new Array(perscal[0],perscal[1],perscal[2],i);
},jd_to_persian:function(t){var s,n,e,i,r,o,h,a,_,u;return t=Math.floor(t)+.5,i=t-this.persian_to_jd(475,1,1),
r=Math.floor(i/1029983),o=this._mod(i,1029983),1029982==o?h=2820:(a=Math.floor(o/366),
_=this._mod(o,366),h=Math.floor((2134*a+2816*_+2815)/1028522)+a+1),s=h+2820*r+474,
0>=s&&s--,u=t-this.persian_to_jd(s,1,1)+1,n=186>=u?Math.ceil(u/31):Math.ceil((u-6)/30),
e=t-this.persian_to_jd(s,n,1)+1,new Array(s,n-1,e)},persian_to_jd:function(t,s,n){
var e,i;return e=t-(t>=0?474:473),i=474+this._mod(e,2820),n+(7>=s?31*(s-1):30*(s-1)+6)+Math.floor((682*i-110)/2816)+365*(i-1)+1029983*Math.floor(e/2820)+(this._PERSIAN_EPOCH-1);
},gregorian_to_jd:function(t,s,n){return this._GREGORIAN_EPOCH-1+365*(t-1)+Math.floor((t-1)/4)+-Math.floor((t-1)/100)+Math.floor((t-1)/400)+Math.floor((367*s-362)/12+(2>=s?0:this.leap_gregorian(t)?-1:-2)+n);
},jd_to_gregorian:function(t,s){var n,e,i,r,o,h,a,_,u,d,l,c;return n=Math.floor(t-.5)+.5,
e=n-this._GREGORIAN_EPOCH,i=Math.floor(e/146097),r=this._mod(e,146097),o=Math.floor(r/36524),
h=this._mod(r,36524),a=Math.floor(h/1461),_=this._mod(h,1461),u=Math.floor(_/365),
d=400*i+100*o+4*a+u,4!=o&&4!=u&&d++,l=n-this.gregorian_to_jd(d,1,1),c=n<this.gregorian_to_jd(d,3,1)?0:this.leap_gregorian(d)?1:2,
month=Math.floor((12*(l+c)+373)/367),day=n-this.gregorian_to_jd(d,month,1)+1,new Array(d,month,day);
},valueOf:function(){return this.toGregorian().valueOf()},jwday:function(t){return this._mod(Math.floor(t+1.5),7);
},_yearStart:function(t){return 354*(t-1)+Math.floor((3+11*t)/30)},_monthStart:function(t,s){
return Math.ceil(29.5*s)+354*(t-1)+Math.floor((3+11*t)/30)},leap_gregorian:function(t){
return t%4==0&&!(t%100==0&&t%400!=0)},isLeapYear:function(t,s,n){return!(0>t||t>32767||1>s||s>12||1>n||n>this.daysInMonth[s-1]+(12==s&&!((t-979)%33%4)));
},getDaysInPersianMonth:function(t,s){var n=this.daysInMonth[t];return 11==t&&this.isLeapYear(s,t+1,30)&&n++,
n},_mod:function(t,s){return t-s*Math.floor(t/s)}});return e.getDaysInPersianMonth=function(t){
return(new e).getDaysInPersianMonth(t.getMonth(),t.getFullYear())},e});