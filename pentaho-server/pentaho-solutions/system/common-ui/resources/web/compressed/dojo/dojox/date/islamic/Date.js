define(["dojo/_base/lang","dojo/_base/declare","dojo/date"],function(t,s,e){var i=s("dojox.date.islamic.Date",null,{
_date:0,_month:0,_year:0,_hours:0,_minutes:0,_seconds:0,_milliseconds:0,_day:0,_GREGORIAN_EPOCH:1721425.5,
_ISLAMIC_EPOCH:1948439.5,constructor:function(){var t=arguments.length;if(t)if(1==t){
var s=arguments[0];"number"==typeof s&&(s=new Date(s)),s instanceof Date?this.fromGregorian(s):""==s?this._date=new Date(""):(this._year=s._year,
this._month=s._month,this._date=s._date,this._hours=s._hours,this._minutes=s._minutes,
this._seconds=s._seconds,this._milliseconds=s._milliseconds)}else t>=3&&(this._year+=arguments[0],
this._month+=arguments[1],this._date+=arguments[2],this._hours+=arguments[3]||0,this._minutes+=arguments[4]||0,
this._seconds+=arguments[5]||0,this._milliseconds+=arguments[6]||0);else this.fromGregorian(new Date);
},getDate:function(){return this._date},getMonth:function(){return this._month},getFullYear:function(){
return this._year},getDay:function(){return this.toGregorian().getDay()},getHours:function(){
return this._hours},getMinutes:function(){return this._minutes},getSeconds:function(){
return this._seconds},getMilliseconds:function(){return this._milliseconds},setDate:function(t){
if(t=parseInt(t),t>0&&t<=this.getDaysInIslamicMonth(this._month,this._year))this._date=t;else{
var s;if(t>0){for(s=this.getDaysInIslamicMonth(this._month,this._year);t>s;t-=s,s=this.getDaysInIslamicMonth(this._month,this._year))this._month++,
this._month>=12&&(this._year++,this._month-=12);this._date=t}else{for(s=this.getDaysInIslamicMonth(this._month-1>=0?this._month-1:11,this._month-1>=0?this._year:this._year-1);0>=t;s=this.getDaysInIslamicMonth(this._month-1>=0?this._month-1:11,this._month-1>=0?this._year:this._year-1))this._month--,
this._month<0&&(this._year--,this._month+=12),t+=s;this._date=t}}return this},setFullYear:function(t){
this._year=+t},setMonth:function(t){this._year+=Math.floor(t/12),t>0?this._month=Math.floor(t%12):this._month=Math.floor((t%12+12)%12);
},setHours:function(){var t=arguments.length,s=0;for(t>=1&&(s=parseInt(arguments[0])),
t>=2&&(this._minutes=parseInt(arguments[1])),t>=3&&(this._seconds=parseInt(arguments[2])),
4==t&&(this._milliseconds=parseInt(arguments[3]));s>=24;){this._date++;var e=this.getDaysInIslamicMonth(this._month,this._year);
this._date>e&&(this._month++,this._month>=12&&(this._year++,this._month-=12),this._date-=e),
s-=24}this._hours=s},_addMinutes:function(t){return t+=this._minutes,this.setMinutes(t),
this.setHours(this._hours+parseInt(t/60)),this},_addSeconds:function(t){return t+=this._seconds,
this.setSeconds(t),this._addMinutes(parseInt(t/60)),this},_addMilliseconds:function(t){
return t+=this._milliseconds,this.setMilliseconds(t),this._addSeconds(parseInt(t/1e3)),
this},setMinutes:function(t){return this._minutes=t%60,this},setSeconds:function(t){
return this._seconds=t%60,this},setMilliseconds:function(t){return this._milliseconds=t%1e3,
this},toString:function(){if(isNaN(this._date))return"Invalidate Date";var t=new Date;
return t.setHours(this._hours),t.setMinutes(this._minutes),t.setSeconds(this._seconds),
t.setMilliseconds(this._milliseconds),this._month+" "+this._date+" "+this._year+" "+t.toTimeString();
},toGregorian:function(){var t=this._year,s=this._month,i=this._date,n=i+Math.ceil(29.5*s)+354*(t-1)+Math.floor((3+11*t)/30)+this._ISLAMIC_EPOCH-1,h=Math.floor(n-.5)+.5,o=h-this._GREGORIAN_EPOCH,r=Math.floor(o/146097),a=this._mod(o,146097),_=Math.floor(a/36524),u=this._mod(a,36524),l=Math.floor(u/1461),m=this._mod(u,1461),c=Math.floor(m/365),d=400*r+100*_+4*l+c;
4!=_&&4!=c&&d++;var f=this._GREGORIAN_EPOCH+365*(d-1)+Math.floor((d-1)/4)-Math.floor((d-1)/100)+Math.floor((d-1)/400),M=h-f,g=this._GREGORIAN_EPOCH-1+365*(d-1)+Math.floor((d-1)/4)-Math.floor((d-1)/100)+Math.floor((d-1)/400)+Math.floor(739/12+(e.isLeapYear(new Date(d,3,1))?-1:-2)+1),I=g>h?0:e.isLeapYear(new Date(d,3,1))?1:2,y=Math.floor((12*(M+I)+373)/367),D=this._GREGORIAN_EPOCH-1+365*(d-1)+Math.floor((d-1)/4)-Math.floor((d-1)/100)+Math.floor((d-1)/400)+Math.floor((367*y-362)/12+(2>=y?0:e.isLeapYear(new Date(d,y,1))?-1:-2)+1),v=h-D+1,G=new Date(d,y-1,v,this._hours,this._minutes,this._seconds,this._milliseconds);
return G},fromGregorian:function(t){var s=new Date(t),i=s.getFullYear(),n=s.getMonth(),h=s.getDate(),o=this._GREGORIAN_EPOCH-1+365*(i-1)+Math.floor((i-1)/4)+-Math.floor((i-1)/100)+Math.floor((i-1)/400)+Math.floor((367*(n+1)-362)/12+(2>=n+1?0:e.isLeapYear(s)?-1:-2)+h);
o=Math.floor(o)+.5;var r=o-this._ISLAMIC_EPOCH,a=Math.floor((30*r+10646)/10631),_=Math.ceil((r-29-this._yearStart(a))/29.5);
_=Math.min(_,11);var u=Math.ceil(r-this._monthStart(a,_))+1;return this._date=u,this._month=_,
this._year=a,this._hours=s.getHours(),this._minutes=s.getMinutes(),this._seconds=s.getSeconds(),
this._milliseconds=s.getMilliseconds(),this._day=s.getDay(),this},valueOf:function(){
return this.toGregorian().valueOf()},_yearStart:function(t){return 354*(t-1)+Math.floor((3+11*t)/30);
},_monthStart:function(t,s){return Math.ceil(29.5*s)+354*(t-1)+Math.floor((3+11*t)/30);
},_civilLeapYear:function(t){return 11>(14+11*t)%30},getDaysInIslamicMonth:function(t,s){
var e=0;return e=29+(t+1)%2,11==t&&this._civilLeapYear(s)&&e++,e},_mod:function(t,s){
return t-s*Math.floor(t/s)}});return i.getDaysInIslamicMonth=function(t){return(new i).getDaysInIslamicMonth(t.getMonth(),t.getFullYear());
},i});