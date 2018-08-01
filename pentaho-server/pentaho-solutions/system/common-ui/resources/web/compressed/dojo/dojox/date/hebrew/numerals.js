define(["../..","dojo/_base/lang","dojo/_base/array"],function(e,r,t){var n=r.getObject("date.hebrew.numerals",!0,e),a="אבגדהוזחט",o="יכלמנסעפצ",i="קרשת",u=function(e,r){
if(e=e.replace("יה","טו").replace("יו","טז"),!r){var t=e.length;t>1?e=e.substr(0,t-1)+'"'+e.charAt(t-1):e+="׳";
}return e},f=function(e){var r=0;return t.forEach(e,function(e){var t;-1!=(t=a.indexOf(e))?r+=++t:-1!=(t=o.indexOf(e))?r+=10*++t:-1!=(t=i.indexOf(e))&&(r+=100*++t);
}),r},c=function(e){for(var r="",t=4,n=9;e;)if(e>=100*t)r+=i.charAt(t-1),e-=100*t;else if(t>1)t--;else if(e>=10*n)r+=o.charAt(n-1),
e-=10*n;else{if(n>1){n--;continue}e>0&&(r+=a.charAt(e-1),e=0)}return r};return n.getYearHebrewLetters=function(e){
var r=e%1e3;return u(c(r))},n.parseYearHebrewLetters=function(e){return f(e)+5e3},
n.getDayHebrewLetters=function(e,r){return u(c(e),r)},n.parseDayHebrewLetters=function(e){
return f(e)},n.getMonthHebrewLetters=function(e){return u(c(e+1))},n.parseMonthHebrewLetters=function(e){
var r=n.parseDayHebrewLetters(e)-1;if(-1==r||r>12)throw new Error("The month name is incorrect , month = "+r);
return r},n});