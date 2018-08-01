define(["dojo/_base/lang","dojo/_base/declare","dojo/date"],function(t,s,e){var n=s("dojox.date.buddhist.Date",null,{
_date:0,_month:0,_year:0,_hours:0,_minutes:0,_seconds:0,_milliseconds:0,_day:0,constructor:function(){
var t=arguments.length;if(t)if(1==t){var s=arguments[0];"number"==typeof s&&(s=new Date(s)),
s instanceof Date?this.fromGregorian(s):""==s?this._date=new Date(""):(this._year=s._year,
this._month=s._month,this._date=s._date,this._hours=s._hours,this._minutes=s._minutes,
this._seconds=s._seconds,this._milliseconds=s._milliseconds)}else t>=3&&(this._year+=arguments[0],
this._month+=arguments[1],this._date+=arguments[2],this._month>11&&(console.warn("the month is incorrect , set 0"),
this._month=0),this._hours+=arguments[3]||0,this._minutes+=arguments[4]||0,this._seconds+=arguments[5]||0,
this._milliseconds+=arguments[6]||0);else this.fromGregorian(new Date)},getDate:function(t){
return parseInt(this._date)},getMonth:function(){return parseInt(this._month)},getFullYear:function(){
return parseInt(this._year)},getHours:function(){return this._hours},getMinutes:function(){
return this._minutes},getSeconds:function(){return this._seconds},getMilliseconds:function(){
return this._milliseconds},setDate:function(t){if(t=parseInt(t),t>0&&t<=this._getDaysInMonth(this._month,this._year))this._date=t;else{
var s;if(t>0){for(s=this._getDaysInMonth(this._month,this._year);t>s;t-=s,s=this._getDaysInMonth(this._month,this._year))this._month++,
this._month>=12&&(this._year++,this._month-=12);this._date=t}else{for(s=this._getDaysInMonth(this._month-1>=0?this._month-1:11,this._month-1>=0?this._year:this._year-1);0>=t;s=this._getDaysInMonth(this._month-1>=0?this._month-1:11,this._month-1>=0?this._year:this._year-1))this._month--,
this._month<0&&(this._year--,this._month+=12),t+=s;this._date=t}}return this},setFullYear:function(t,s,e){
this._year=parseInt(t)},setMonth:function(t){for(this._year+=Math.floor(t/12),this._month=Math.floor(t%12);this._month<0;this._month=this._month+12);
},setHours:function(){var t=arguments.length,s=0;for(t>=1&&(s=parseInt(arguments[0])),
t>=2&&(this._minutes=parseInt(arguments[1])),t>=3&&(this._seconds=parseInt(arguments[2])),
4==t&&(this._milliseconds=parseInt(arguments[3]));s>=24;){this._date++;var e=this._getDaysInMonth(this._month,this._year);
this._date>e&&(this._month++,this._month>=12&&(this._year++,this._month-=12),this._date-=e),
s-=24}this._hours=s},_addMinutes:function(t){return t+=this._minutes,this.setMinutes(t),
this.setHours(this._hours+parseInt(t/60)),this},_addSeconds:function(t){return t+=this._seconds,
this.setSeconds(t),this._addMinutes(parseInt(t/60)),this},_addMilliseconds:function(t){
return t+=this._milliseconds,this.setMilliseconds(t),this._addSeconds(parseInt(t/1e3)),
this},setMinutes:function(t){return this._minutes=t%60,this},setSeconds:function(t){
return this._seconds=t%60,this},setMilliseconds:function(t){return this._milliseconds=t%1e3,
this},toString:function(){return isNaN(this._date)?"Invalid Date":this._date+", "+this._month+", "+this._year+"  "+this._hours+":"+this._minutes+":"+this._seconds;
},_getDaysInMonth:function(t,s){return e.getDaysInMonth(new Date(s-543,t))},fromGregorian:function(t){
var s=new Date(t);return this._date=s.getDate(),this._month=s.getMonth(),this._year=s.getFullYear()+543,
this._hours=s.getHours(),this._minutes=s.getMinutes(),this._seconds=s.getSeconds(),
this._milliseconds=s.getMilliseconds(),this._day=s.getDay(),this},toGregorian:function(){
return new Date(this._year-543,this._month,this._date,this._hours,this._minutes,this._seconds,this._milliseconds);
},getDay:function(){return this.toGregorian().getDay()}});return n.prototype.valueOf=function(){
return this.toGregorian().valueOf()},n});