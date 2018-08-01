define(["dojo/_base/lang","dojo/_base/declare","./numerals"],function(t,s,e){var i=s("dojox.date.hebrew.Date",null,{
_MONTH_LENGTH:[[30,30,30],[29,29,30],[29,30,30],[29,29,29],[30,30,30],[30,30,30],[29,29,29],[30,30,30],[29,29,29],[30,30,30],[29,29,29],[30,30,30],[29,29,29]],
_MONTH_START:[[0,0,0],[30,30,30],[59,59,60],[88,89,90],[117,118,119],[147,148,149],[147,148,149],[176,177,178],[206,207,208],[235,236,237],[265,266,267],[294,295,296],[324,325,326],[353,354,355]],
_LEAP_MONTH_START:[[0,0,0],[30,30,30],[59,59,60],[88,89,90],[117,118,119],[147,148,149],[177,178,179],[206,207,208],[236,237,238],[265,266,267],[295,296,297],[324,325,326],[354,355,356],[383,384,385]],
_GREGORIAN_MONTH_COUNT:[[31,31,0,0],[28,29,31,31],[31,31,59,60],[30,30,90,91],[31,31,120,121],[30,30,151,152],[31,31,181,182],[31,31,212,213],[30,30,243,244],[31,31,273,274],[30,30,304,305],[31,31,334,335]],
_date:0,_month:0,_year:0,_hours:0,_minutes:0,_seconds:0,_milliseconds:0,_day:0,constructor:function(){
var t=arguments.length;if(t)if(1==t){var s=arguments[0];"number"==typeof s&&(s=new Date(s)),
s instanceof Date?this.fromGregorian(s):""==s?this._year=this._month=this._date=this._hours=this._minutes=this._seconds=this._milliseconds=NaN:(this._year=s._year,
this._month=s._month,this._date=s._date,this._hours=s._hours,this._minutes=s._minutes,
this._seconds=s._seconds,this._milliseconds=s._milliseconds)}else t>=3&&(this._year+=arguments[0],
this._month+=arguments[1],this._date+=arguments[2],this._month>12&&(console.warn("the month is incorrect , set 0  "+this._month+"   "+this._year),
this._month=0),this._hours+=arguments[3]||0,this._minutes+=arguments[4]||0,this._seconds+=arguments[5]||0,
this._milliseconds+=arguments[6]||0);else this.fromGregorian(new Date);this._setDay();
},getDate:function(){return this._date},getDateLocalized:function(t){return(t||dojo.locale).match(/^he(?:-.+)?$/)?e.getDayHebrewLetters(this._date):this.getDate();
},getMonth:function(){return this._month},getFullYear:function(){return this._year;
},getHours:function(){return this._hours},getMinutes:function(){return this._minutes;
},getSeconds:function(){return this._seconds},getMilliseconds:function(){return this._milliseconds;
},setDate:function(t){t=+t;var s;if(t>0)for(;t>(s=this.getDaysInHebrewMonth(this._month,this._year));)t-=s,
this._month++,this._month>=13&&(this._year++,this._month-=13);else for(;0>=t;)s=this.getDaysInHebrewMonth(this._month-1>=0?this._month-1:12,this._month-1>=0?this._year:this._year-1),
this._month--,this._month<0&&(this._year--,this._month+=13),t+=s;return this._date=t,
this._setDay(),this},setFullYear:function(t,s,e){this._year=t=+t,this.isLeapYear(t)||5!=this._month||this._month++,
void 0!==s&&this.setMonth(s),void 0!==e&&this.setDate(e);var i=this.getDaysInHebrewMonth(this._month,this._year);
return i<this._date&&(this._date=i),this._setDay(),this},setMonth:function(t){if(t=+t,
this.isLeapYear(this._year)||5!=t||t++,t>=0)for(;t>12;)this._year++,t-=13,!this.isLeapYear(this._year)&&t>=5&&t++;else for(;0>t;)this._year--,
t+=!this.isLeapYear(this._year)&&-7>t?12:13;this._month=t;var s=this.getDaysInHebrewMonth(this._month,this._year);
return s<this._date&&(this._date=s),this._setDay(),this},setHours:function(){var t=arguments.length,s=0;
for(t>=1&&(s=+arguments[0]),t>=2&&(this._minutes=+arguments[1]),t>=3&&(this._seconds=+arguments[2]),
4==t&&(this._milliseconds=+arguments[3]);s>=24;){this._date++;var e=this.getDaysInHebrewMonth(this._month,this._year);
this._date>e&&(this._month++,this.isLeapYear(this._year)||5!=this._month||this._month++,
this._month>=13&&(this._year++,this._month-=13),this._date-=e),s-=24}return this._hours=s,
this._setDay(),this},_addMinutes:function(t){return t+=this._minutes,this.setMinutes(t),
this.setHours(this._hours+parseInt(t/60)),this},_addSeconds:function(t){return t+=this._seconds,
this.setSeconds(t),this._addMinutes(parseInt(t/60)),this},_addMilliseconds:function(t){
return t+=this._milliseconds,this.setMilliseconds(t),this._addSeconds(parseInt(t/1e3)),
this},setMinutes:function(t){return this._minutes=t%60,this},setSeconds:function(t){
return this._seconds=t%60,this},setMilliseconds:function(t){return this._milliseconds=t%1e3,
this},_setDay:function(){var t=this._startOfYear(this._year);0!=this._month&&(t+=(this.isLeapYear(this._year)?this._LEAP_MONTH_START:this._MONTH_START)[this._month||0][this._yearType(this._year)]),
t+=this._date-1,this._day=(t+1)%7},toString:function(){return isNaN(this._date)?"Invalid Date":this._date+", "+this._month+", "+this._year+"  "+this._hours+":"+this._minutes+":"+this._seconds;
},getDaysInHebrewMonth:function(t,s){var e=1==t||2==t?this._yearType(s):0;return this.isLeapYear(this._year)||5!=t?this._MONTH_LENGTH[t][e]:0;
},_yearType:function(t){var s=this._handleGetYearLength(Number(t));s>380&&(s-=30);
var e=s-353;if(0>e||e>2)throw new Error("Illegal year length "+s+" in year "+t);return e;
},_handleGetYearLength:function(t){return this._startOfYear(t+1)-this._startOfYear(t);
},_startOfYear:function(t){var s=Math.floor((235*t-234)/19),e=13753*s+11880+204,i=29*s+Math.floor(e/25920);
e%=25920;var h=i%7;return(2==h||4==h||6==h)&&(i+=1,h=i%7),1==h&&e>16404&&!this.isLeapYear(t)?i+=2:0==h&&e>23269&&this.isLeapYear(t-1)&&(i+=1),
i},isLeapYear:function(t){var s=(12*t+17)%19;return s>=(0>s?-7:12)},fromGregorian:function(t){
var s=isNaN(t)?NaN:this._computeHebrewFields(t);return this._year=isNaN(t)?NaN:s[0],
this._month=isNaN(t)?NaN:s[1],this._date=isNaN(t)?NaN:s[2],this._hours=t.getHours(),
this._milliseconds=t.getMilliseconds(),this._minutes=t.getMinutes(),this._seconds=t.getSeconds(),
isNaN(t)||this._setDay(),this},_computeHebrewFields:function(t){for(var s=this._getJulianDayFromGregorianDate(t),e=s-347997,i=Math.floor(24*e*1080/765433),h=Math.floor((19*i+234)/235)+1,r=this._startOfYear(h),n=e-r;1>n;)h--,
r=this._startOfYear(h),n=e-r;for(var a=this._yearType(h),_=this.isLeapYear(h)?this._LEAP_MONTH_START:this._MONTH_START,o=0;n>_[o][a];)o++;
o--;var u=n-_[o][a];return[h,o,u]},toGregorian:function(){var t=this._year||0,s=this._month||0,e=this._date||0,i=this._startOfYear(t);
0!=s&&(i+=(this.isLeapYear(t)?this._LEAP_MONTH_START:this._MONTH_START)[s][this._yearType(t)]);
var h=e+i+347997,r=h-1721426,n=[],a=this._floorDivide(r,146097,n),_=this._floorDivide(n[0],36524,n),o=this._floorDivide(n[0],1461,n),u=this._floorDivide(n[0],365,n),d=400*a+100*_+4*o+u,m=n[0];
4==_||4==u?m=365:++d;var l=!(d%4||!(d%100)&&d%400),c=0,f=l?60:59;m>=f&&(c=l?1:2);var y=Math.floor((12*(m+c)+6)/367),g=m-this._GREGORIAN_MONTH_COUNT[y][l?3:2]+1;
return new Date(d,y,g,this._hours,this._minutes,this._seconds,this._milliseconds);
},_floorDivide:function(t,s,e){if(t>=0)return e[0]=t%s,Math.floor(t/s);var i=Math.floor(t/s);
return e[0]=t-i*s,i},getDay:function(){var t=this._year,s=this._month,e=this._date,i=this._startOfYear(t);
return 0!=s&&(i+=(this.isLeapYear(t)?this._LEAP_MONTH_START:this._MONTH_START)[s][this._yearType(t)]),
i+=e-1,(i+1)%7},_getJulianDayFromGregorianDate:function(t){var s=t.getFullYear(),e=t.getMonth(),i=t.getDate(),h=!(s%4||!(s%100)&&s%400),r=s-1,n=365*r+Math.floor(r/4)-Math.floor(r/100)+Math.floor(r/400)+1721426-1;
return e>0&&(n+=this._GREGORIAN_MONTH_COUNT[e][h?3:2]),n+=i}});return i.prototype.valueOf=function(){
return this.toGregorian().valueOf()},i});