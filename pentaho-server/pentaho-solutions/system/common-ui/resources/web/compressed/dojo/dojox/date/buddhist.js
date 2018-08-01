define(["..","dojo/_base/lang","dojo/date","./buddhist/Date"],function(e,a,r,t){var n=a.getObject("date.buddhist",!0,e);
return n.getDaysInMonth=function(e){return r.getDaysInMonth(e.toGregorian())},n.isLeapYear=function(e){
return r.isLeapYear(e.toGregorian())},n.compare=function(e,a,t){return r.compare(e,a,t);
},n.add=function(e,a,r){var n=new t(e);switch(a){case"day":n.setDate(e.getDate(!0)+r);
break;case"weekday":var s,o,c=r%5;c?(s=c,o=parseInt(r/5)):(s=r>0?5:-5,o=r>0?(r-5)/5:(r+5)/5);
var i=e.getDay(),d=0;6==i&&r>0?d=1:0==i&&0>r&&(d=-1);var g=i+s;(0==g||6==g)&&(d=r>0?2:-2),
r=7*o+s+d,n.setDate(e.getDate(!0)+r);break;case"year":n.setFullYear(e.getFullYear()+r);
break;case"week":r*=7,n.setDate(e.getDate(!0)+r);break;case"month":n.setMonth(e.getMonth()+r);
break;case"hour":n.setHours(e.getHours()+r);break;case"minute":n._addMinutes(r);break;
case"second":n._addSeconds(r);break;case"millisecond":n._addMilliseconds(r)}return n;
},n.difference=function(e,a,r){a=a||new t,r=r||"day";var s=a.getFullYear()-e.getFullYear(),o=1;
switch(r){case"weekday":var c=Math.round(n.difference(e,a,"day")),i=parseInt(n.difference(e,a,"week")),d=c%7;
if(0==d)c=5*i;else{var g=0,u=e.getDay(),k=a.getDay();i=parseInt(c/7),d=c%7;var b=new t(a);
b.setDate(b.getDate(!0)+7*i);var l=b.getDay();if(c>0)switch(!0){case 5==u:g=-1;break;
case 6==u:g=0;break;case 5==k:g=-1;break;case 6==k:g=-2;break;case l+d>5:g=-2}else if(0>c)switch(!0){
case 5==u:g=0;break;case 6==u:g=1;break;case 5==k:g=2;break;case 6==k:g=1;break;case 0>l+d:
g=2}c+=g,c-=2*i}o=c;break;case"year":o=s;break;case"month":var f=a.toGregorian()>e.toGregorian()?a:e,h=a.toGregorian()>e.toGregorian()?e:a,y=f.getMonth(),D=h.getMonth();
if(0==s)o=f.getMonth()-h.getMonth();else{o=12-D,o+=y;var v=h.getFullYear()+1,w=f.getFullYear();
for(v;w>v;v++)o+=12}a.toGregorian()<e.toGregorian()&&(o=-o);break;case"week":o=parseInt(n.difference(e,a,"day")/7);
break;case"day":o/=24;case"hour":o/=60;case"minute":o/=60;case"second":o/=1e3;case"millisecond":
o*=a.toGregorian().getTime()-e.toGregorian().getTime()}return Math.round(o)},n});