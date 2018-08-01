define(["dojo/_base/lang","dojo/_base/declare","dojo/date"],function(t,s,e){var n=s("dojox.date.umalqura.Date",null,{
_MONTH_LENGTH:["010100101011","011010010011","010110110101","001010110110","101110110010","011010110101","010101010110","101010010110","110101001010","111010100101","011101010010","101101101001","010101110100","101001101101","100100110110","110010010110","110101001010","111001101001","011010110100","101010111010","010010111101","001000111101","100100011101","101010010101","101101001010","101101011010","010101101101","001010110110","100100111011","010010011011","011001010101","011010101001","011101010100","101101101010","010101101100","101010101101","010101010101","101100101001","101110010010","101110101001","010111010100","101011011010","010101011010","101010101011","010110010101","011101001001","011101100100","101110101010","010110110101","001010110110","101001010110","110100101010","111010010101","011100101010","011101010101","001101011010","100101011101","010010011011","101001001101","110100100110","110101010011","010110101010","101010101101","010010110110","101001010111","010100100111","101010010101","101101001010","101101010101","001101101100","100110101110","010010110110","101010010110","101101001010","110110100101","010111010010","010111011001","001011011100","100101101101","010010101101","011001010101"],
_hijriBegin:1400,_hijriEnd:1480,_date:0,_month:0,_year:0,_hours:0,_minutes:0,_seconds:0,
_milliseconds:0,_day:0,constructor:function(){var t=arguments.length;if(t)if(1==t){
var s=arguments[0];"number"==typeof s&&(s=new Date(s)),s instanceof Date?this.fromGregorian(s):""==s?this._date=new Date(""):(this._year=s._year,
this._month=s._month,this._date=s._date,this._hours=s._hours,this._minutes=s._minutes,
this._seconds=s._seconds,this._milliseconds=s._milliseconds)}else t>=3&&(this._year+=arguments[0],
this._month+=arguments[1],this._date+=arguments[2],this._hours+=arguments[3]||0,this._minutes+=arguments[4]||0,
this._seconds+=arguments[5]||0,this._milliseconds+=arguments[6]||0);else this.fromGregorian(new Date);
},getDate:function(){return this._date},getMonth:function(){return this._month},getFullYear:function(){
return this._year},getDay:function(){var t=this.toGregorian(),s=t.getDay();return s;
},getHours:function(){return this._hours},getMinutes:function(){return this._minutes;
},getSeconds:function(){return this._seconds},getMilliseconds:function(){return this._milliseconds;
},setDate:function(t){if(t=parseInt(t),t>0&&t<=this.getDaysInIslamicMonth(this._month,this._year))this._date=t;else{
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
this},setMinutes:function(t){for(;t>=60;){if(this._hours++,this._hours>=24){this._date++,
this._hours-=24;var s=this.getDaysInIslamicMonth(this._month,this._year);this._date>s&&(this._month++,
this._month>=12&&(this._year++,this._month-=12),this._date-=s)}t-=60}this._minutes=t;
},setSeconds:function(t){for(;t>=60;){if(this._minutes++,this._minutes>=60&&(this._hours++,
this._minutes-=60,this._hours>=24)){this._date++,this._hours-=24;var s=this.getDaysInIslamicMonth(this._month,this._year);
this._date>s&&(this._month++,this._month>=12&&(this._year++,this._month-=12),this._date-=s);
}t-=60}this._seconds=t},setMilliseconds:function(t){for(;t>=1e3;){if(this.setSeconds++,
this.setSeconds>=60&&(this._minutes++,this.setSeconds-=60,this._minutes>=60&&(this._hours++,
this._minutes-=60,this._hours>=24))){this._date++,this._hours-=24;var s=this.getDaysInIslamicMonth(this._month,this._year);
this._date>s&&(this._month++,this._month>=12&&(this._year++,this._month-=12),this._date-=s);
}t-=1e3}this._milliseconds=t},toString:function(){var t=new Date;return t.setHours(this._hours),
t.setMinutes(this._minutes),t.setSeconds(this._seconds),t.setMilliseconds(this._milliseconds),
this._month+" "+this._date+" "+this._year+" "+t.toTimeString()},toGregorian:function(){
var t=this._year,s=this._month,i=this._date,n=new Date;if(t>=this._hijriBegin&&t<=this._hijriEnd){
var h=new Array(17);h[0]=new Date(1979,10,20,0,0,0,0),h[1]=new Date(1984,8,26,0,0,0,0),
h[2]=new Date(1989,7,3,0,0,0,0),h[3]=new Date(1994,5,10,0,0,0,0),h[4]=new Date(1999,3,17,0,0,0,0),
h[5]=new Date(2004,1,21,0,0,0,0),h[6]=new Date(2008,11,29,0,0,0,0),h[7]=new Date(2013,10,4,0,0,0,0),
h[8]=new Date(2018,8,11,0,0,0,0),h[9]=new Date(2023,6,19,0,0,0,0),h[10]=new Date(2028,4,25,0,0,0,0),
h[11]=new Date(2033,3,1,0,0,0,0),h[12]=new Date(2038,1,5,0,0,0,0),h[13]=new Date(2042,11,14,0,0,0,0),
h[14]=new Date(2047,9,20,0,0,0,0),h[15]=new Date(2052,7,26,0,0,0,0),h[16]=new Date(2057,6,3,0,0,0,0);
var a=t-this._hijriBegin,r=Math.floor(a/5),o=a%5,_=0,u=o,d=5*r,m=0,c=0;if(0==o){for(c=0;s-1>=c;c++)"1"==this._MONTH_LENGTH[a].charAt(c)?_+=30:"0"==this._MONTH_LENGTH[a].charAt(c)&&(_+=29);
_+=i-1}else{for(k=d;k<=d+o;k++){for(m=0;u>0&&12>m;m++)"1"==this._MONTH_LENGTH[k].charAt(m)?_+=30:"0"==this._MONTH_LENGTH[k].charAt(m)&&(_+=29);
if(u--,0==u)for(c=0;s-1>=c;c++)"1"==this._MONTH_LENGTH[a].charAt(c)?_+=30:"0"==this._MONTH_LENGTH[a].charAt(c)&&(_+=29);
}_+=i-1}var l=new Date(h[r]);l.setHours(this._hours,this._minutes,this._seconds,this._milliseconds),
n=e.add(l,"day",_)}else{var g=new dojox.date.islamic.Date(this._year,this._month,this._date,this._hours,this._minutes,this._seconds,this._milliseconds);
n=new Date(g.toGregorian())}return n},fromGregorian:function(t){var s=new Date(t);
s.setHours(0,0,0,0);var n=(s.getFullYear(),s.getMonth(),s.getDate(),new Array(17));
n[0]=new Date(1979,10,20,0,0,0,0),n[1]=new Date(1984,8,26,0,0,0,0),n[2]=new Date(1989,7,3,0,0,0,0),
n[3]=new Date(1994,5,10,0,0,0,0),n[4]=new Date(1999,3,17,0,0,0,0),n[5]=new Date(2004,1,21,0,0,0,0),
n[6]=new Date(2008,11,29,0,0,0,0),n[7]=new Date(2013,10,4,0,0,0,0),n[8]=new Date(2018,8,11,0,0,0,0),
n[9]=new Date(2023,6,19,0,0,0,0),n[10]=new Date(2028,4,25,0,0,0,0),n[11]=new Date(2033,3,1,0,0,0,0),
n[12]=new Date(2038,1,5,0,0,0,0),n[13]=new Date(2042,11,14,0,0,0,0),n[14]=new Date(2047,9,20,0,0,0,0),
n[15]=new Date(2052,7,26,0,0,0,0),n[16]=new Date(2057,6,3,0,0,0,0);var h=new Date(2058,5,21,0,0,0,0);
if(e.compare(s,n[0])>=0&&e.compare(s,h)<=0){var a;if(e.compare(s,n[16])<=0){var r=0,o=0,_=0;
for(r=0;r<n.length;r++){if(0==e.compare(s,n[r],"date")){o=r,_=1;break}if(e.compare(s,n[r],"date")<0){
o=r-1;break}}var u=0,d=0,m=0;if(1==_)this._date=1,this._month=0,this._year=this._hijriBegin+5*o,
this._hours=t.getHours(),this._minutes=t.getMinutes(),this._seconds=t.getSeconds(),
this._milliseconds=t.getMilliseconds(),this._day=n[o].getDay();else{for(a=e.difference(n[o],s,"day"),
o=5*o,i=o;i<o+5;i++){for(u=0;11>=u;u++){if("1"==this._MONTH_LENGTH[i].charAt(u)?m=30:"0"==this._MONTH_LENGTH[i].charAt(u)&&(m=29),
!(a>m)){d=1;break}a-=m}if(1==d){if(0==a){a=1,11==u?(u=1,++i):++u;break}a==m&&(a=0,
11==u?(u=0,++i):++u),a++;break}}this._date=a,this._month=u,this._year=this._hijriBegin+i,
this._hours=t.getHours(),this._minutes=t.getMinutes(),this._seconds=t.getSeconds(),
this._milliseconds=t.getMilliseconds(),this._day=t.getDay()}}else{a=e.difference(n[16],s,"day");
e.difference(new Date(2057,6,3,0,0,0,0),new Date(2057,6,1,0,0,0,0),"date");for(u=0;11>=u;u++){
if("1"==this._MONTH_LENGTH[80].charAt(u)?m=30:"0"==this._MONTH_LENGTH[80].charAt(u)&&(m=29),
!(a>m)){d=1;break}a-=m}1==d&&(0==a?(a=1,11==u?(u=1,++i):++u):(a==m&&(a=0,11==u?(u=0,
++i):++u),a++)),this._date=a,this._month=u,this._year=1480,this._hours=t.getHours(),
this._minutes=t.getMinutes(),this._seconds=t.getSeconds(),this._milliseconds=t.getMilliseconds(),
this._day=t.getDay()}}else{var c=new dojox.date.islamic.Date(s);this._date=c.getDate(),
this._month=c.getMonth(),this._year=c.getFullYear(),this._hours=t.getHours(),this._minutes=t.getMinutes(),
this._seconds=t.getSeconds(),this._milliseconds=t.getMilliseconds(),this._day=t.getDay();
}return this},valueOf:function(){return this.toGregorian().valueOf()},_yearStart:function(t){
return 354*(t-1)+Math.floor((3+11*t)/30)},_monthStart:function(t,s){return Math.ceil(29.5*s)+354*(t-1)+Math.floor((3+11*t)/30);
},_civilLeapYear:function(t){return 11>(14+11*t)%30},getDaysInIslamicMonth:function(t,s){
if(s>=this._hijriBegin&&s<=this._hijriEnd){var e=s-this._hijriBegin,i=0;i=1==this._MONTH_LENGTH[e].charAt(t)?30:29;
}else{var n=new dojox.date.islamic.Date;i=n.getDaysInIslamicMonth(t,s)}return i}});
return n.getDaysInIslamicMonth=function(t){return(new n).getDaysInIslamicMonth(t.getMonth(),t.getFullYear());
},n});