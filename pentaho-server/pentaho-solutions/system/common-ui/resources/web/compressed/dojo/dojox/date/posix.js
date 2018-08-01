define(["dojo/_base/kernel","dojo/date","dojo/date/locale","dojo/string","dojo/cldr/supplemental"],function(e,r,t,a,n){
var s=e.getObject("date.posix",!0,dojox);return s.strftime=function(e,n,o){for(var u=null,c=function(e,r){
return a.pad(e,r||2,u||"0")},g=t._getGregorianBundle(o),l=function(a){switch(a){case"a":
return t.getNames("days","abbr","format",o)[e.getDay()];case"A":return t.getNames("days","wide","format",o)[e.getDay()];
case"b":case"h":return t.getNames("months","abbr","format",o)[e.getMonth()];case"B":
return t.getNames("months","wide","format",o)[e.getMonth()];case"c":return t.format(e,{
formatLength:"full",locale:o});case"C":return c(Math.floor(e.getFullYear()/100));case"d":
return c(e.getDate());case"D":return l("m")+"/"+l("d")+"/"+l("y");case"e":return null==u&&(u=" "),
c(e.getDate());case"f":return null==u&&(u=" "),c(e.getMonth()+1);case"g":break;case"G":
console.warn("unimplemented modifier 'G'");break;case"F":return l("Y")+"-"+l("m")+"-"+l("d");
case"H":return c(e.getHours());case"I":return c(e.getHours()%12||12);case"j":return c(t._getDayOfYear(e),3);
case"k":return null==u&&(u=" "),c(e.getHours());case"l":return null==u&&(u=" "),c(e.getHours()%12||12);
case"m":return c(e.getMonth()+1);case"M":return c(e.getMinutes());case"n":return"\n";
case"p":return g["dayPeriods-format-wide-"+(e.getHours()<12?"am":"pm")];case"r":return l("I")+":"+l("M")+":"+l("S")+" "+l("p");
case"R":return l("H")+":"+l("M");case"S":return c(e.getSeconds());case"t":return"	";
case"T":return l("H")+":"+l("M")+":"+l("S");case"u":return String(e.getDay()||7);case"U":
return c(t._getWeekOfYear(e));case"V":return c(s.getIsoWeekOfYear(e));case"W":return c(t._getWeekOfYear(e,1));
case"w":return String(e.getDay());case"x":return t.format(e,{selector:"date",formatLength:"full",
locale:o});case"X":return t.format(e,{selector:"time",formatLength:"full",locale:o
});case"y":return c(e.getFullYear()%100);case"Y":return String(e.getFullYear());case"z":
var n=e.getTimezoneOffset();return(n>0?"-":"+")+c(Math.floor(Math.abs(n)/60))+":"+c(Math.abs(n)%60);
case"Z":return r.getTimezoneName(e);case"%":return"%"}},f="",i=0,d=0,m=null;-1!=(d=n.indexOf("%",i));){
switch(f+=n.substring(i,d++),n.charAt(d++)){case"_":u=" ";break;case"-":u="";break;
case"0":u="0";break;case"^":m="upper";break;case"*":m="lower";break;case"#":m="swap";
break;default:u=null,d--}var k=l(n.charAt(d++));switch(m){case"upper":k=k.toUpperCase();
break;case"lower":k=k.toLowerCase();break;case"swap":for(var h=k.toLowerCase(),b="",p="",w=0;w<k.length;w++)p=k.charAt(w),
b+=p==h.charAt(w)?p.toUpperCase():p.toLowerCase();k=b}m=null,f+=k,i=d}return f+=n.substring(i);
},s.getStartOfWeek=function(e,t){isNaN(t)&&(t=n.getFirstDayOfWeek?n.getFirstDayOfWeek():0);
var a=t;a-=e.getDay()>=t?e.getDay():7-e.getDay();var s=new Date(e);return s.setHours(0,0,0,0),
r.add(s,"day",a)},s.setIsoWeekOfYear=function(e,t){if(!t)return e;var a=s.getIsoWeekOfYear(e),n=t-a;
if(0>t){var o=s.getIsoWeeksInYear(e);n=o+t+1-a}return r.add(e,"week",n)},s.getIsoWeekOfYear=function(e){
var r=s.getStartOfWeek(e,1),t=new Date(e.getFullYear(),0,4);t=s.getStartOfWeek(t,1);
var a=r.getTime()-t.getTime();return 0>a?s.getIsoWeeksInYear(r):Math.ceil(a/6048e5)+1;
},s.getIsoWeeksInYear=function(e){function r(e){return e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400);
}var t=e.getFullYear();return r(t)%7==4||r(t-1)%7==3?53:52},s});