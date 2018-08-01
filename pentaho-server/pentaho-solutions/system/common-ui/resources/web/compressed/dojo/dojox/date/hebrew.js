define(["..","dojo/_base/lang","dojo/date","./hebrew/Date"],function(e,a,t,r){var n=a.getObject("date.hebrew",!0,e);
return n.getDaysInMonth=function(e){return e.getDaysInHebrewMonth(e.getMonth(),e.getFullYear());
},n.compare=function(e,a,n){return e instanceof r&&(e=e.toGregorian()),a instanceof r&&(a=a.toGregorian()),
t.compare.apply(null,arguments)},n.add=function(e,a,t){var n=new r(e);switch(a){case"day":
n.setDate(e.getDate()+t);break;case"weekday":var s=e.getDay(),o=0;if(0>t&&6==s&&(s=5,
o=-1),5>s+t&&s+t>=0)n.setDate(e.getDate()+t+o);else{var c=t>0?5:-1,g=t>0?2:-2;t>0&&(5==s||6==s)&&(o=4-s,
s=4);var i=s+t-c,l=parseInt(i/5),d=i%5;n.setDate(e.getDate()-s+g+7*l+o+d+c)}break;
case"year":n.setFullYear(e.getFullYear()+t);break;case"week":t*=7,n.setDate(e.getDate()+t);
break;case"month":var u=e.getMonth(),b=u+t;e.isLeapYear(e.getFullYear())||(5>u&&b>=5?b++:u>5&&5>=b&&b--),
n.setMonth(b);break;case"hour":n.setHours(e.getHours()+t);break;case"minute":n._addMinutes(t);
break;case"second":n._addSeconds(t);break;case"millisecond":n._addMilliseconds(t);
}return n},n.difference=function(e,a,t){a=a||new r,t=t||"day";var s=a.getFullYear()-e.getFullYear(),o=1;
switch(t){case"weekday":var c=Math.round(n.difference(e,a,"day")),g=parseInt(n.difference(e,a,"week")),i=c%7;
if(0==i)c=5*g;else{var l=0,d=e.getDay(),u=a.getDay();g=parseInt(c/7),i=c%7;var b=new r(e);
b.setDate(b.getDate()+7*g);var h=b.getDay();if(c>0)switch(!0){case 5==d:l=-1;break;
case 6==d:l=0;break;case 5==u:l=-1;break;case 6==u:l=-2;break;case h+i>5:l=-2}else if(0>c)switch(!0){
case 5==d:l=0;break;case 6==d:l=1;break;case 5==u:l=2;break;case 6==u:l=1;break;case 0>h+i:
l=2}c+=l,c-=2*g}o=c;break;case"year":o=s;break;case"month":var k=a.toGregorian()>e.toGregorian()?a:e,f=a.toGregorian()>e.toGregorian()?e:a,D=k.getMonth(),M=f.getMonth();
if(0==s)o=!a.isLeapYear(a.getFullYear())&&k.getMonth()>5&&f.getMonth()<=5?k.getMonth()-f.getMonth()-1:k.getMonth()-f.getMonth();else{
o=!f.isLeapYear(f.getFullYear())&&6>M?13-M-1:13-M,o+=!k.isLeapYear(k.getFullYear())&&D>5?D-1:D;
var y=f.getFullYear()+1,Y=k.getFullYear();for(y;Y>y;y++)o+=f.isLeapYear(y)?13:12}
a.toGregorian()<e.toGregorian()&&(o=-o);break;case"week":o=parseInt(n.difference(e,a,"day")/7);
break;case"day":o/=24;case"hour":o/=60;case"minute":o/=60;case"second":o/=1e3;case"millisecond":
o*=a.toGregorian().getTime()-e.toGregorian().getTime()}return Math.round(o)},n});