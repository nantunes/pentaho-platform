define(["..","dojo/_base/lang","dojo/date","./islamic/Date"],function(e,a,t,r){var n=a.getObject("date.islamic",!0,e);
return n.getDaysInMonth=function(e){return e.getDaysInIslamicMonth(e.getMonth(),e.getFullYear());
},n.compare=function(e,a,n){return e instanceof r&&(e=e.toGregorian()),a instanceof r&&(a=a.toGregorian()),
t.compare.apply(null,arguments)},n.add=function(e,a,t){var n=new r(e);switch(a){case"day":
n.setDate(e.getDate()+t);break;case"weekday":var s=e.getDay();if(5>s+t&&s+t>0)n.setDate(e.getDate()+t);else{
var o=0,c=0;5==s?(s=4,c=t>0?-1:1):6==s&&(s=4,c=t>0?-2:2);var i=t>0?5-s-1:-s,g=t-i,d=parseInt(g/5);
g%5!=0&&(o=t>0?2:-2),o=o+7*d+g%5+i,n.setDate(e.getDate()+o+c)}break;case"year":n.setFullYear(e.getFullYear()+t);
break;case"week":t*=7,n.setDate(e.getDate()+t);break;case"month":var l=e.getMonth();
n.setMonth(l+t);break;case"hour":n.setHours(e.getHours()+t);break;case"minute":n._addMinutes(t);
break;case"second":n._addSeconds(t);break;case"millisecond":n._addMilliseconds(t);
}return n},n.difference=function(e,a,t){a=a||new r,t=t||"day";var s=a.getFullYear()-e.getFullYear(),o=1;
switch(t){case"weekday":var c=Math.round(n.difference(e,a,"day")),i=parseInt(n.difference(e,a,"week")),g=c%7;
if(0==g)c=5*i;else{var d=0,l=e.getDay(),u=a.getDay();i=parseInt(c/7),g=c%7;var k=new r(e);
k.setDate(k.getDate()+7*i);var b=k.getDay();if(c>0)switch(!0){case 5==l:d=-1;break;
case 6==l:d=0;break;case 5==u:d=-1;break;case 6==u:d=-2;break;case b+g>5:d=-2}else if(0>c)switch(!0){
case 5==l:d=0;break;case 6==l:d=1;break;case 5==u:d=2;break;case 6==u:d=1;break;case 0>b+g:
d=2}c+=d,c-=2*i}o=c;break;case"year":o=s;break;case"month":var f=a.toGregorian()>e.toGregorian()?a:e,h=a.toGregorian()>e.toGregorian()?e:a,D=f.getMonth(),y=h.getMonth();
if(0==s)o=f.getMonth()-h.getMonth();else{o=12-y,o+=D;var m=h.getFullYear()+1,v=f.getFullYear();
for(m;v>m;m++)o+=12}a.toGregorian()<e.toGregorian()&&(o=-o);break;case"week":o=parseInt(n.difference(e,a,"day")/7);
break;case"day":o/=24;case"hour":o/=60;case"minute":o/=60;case"second":o/=1e3;case"millisecond":
o*=a.toGregorian().getTime()-e.toGregorian().getTime()}return Math.round(o)},n});