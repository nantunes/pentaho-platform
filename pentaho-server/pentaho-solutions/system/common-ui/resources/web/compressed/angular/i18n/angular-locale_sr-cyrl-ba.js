angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");
return-1==r?0:e.length-r-1}function M(e,M){var n=M;void 0===n&&(n=Math.min(r(e),3));
var E=Math.pow(10,n),a=(e*E|0)%E;return{v:n,f:a}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["пре подне","по подне"],
DAY:["недеља","понедељак","уторак","среда","четвртак","петак","субота"],ERANAMES:["Пре нове ере","Нове ере"],
ERAS:["п. н. е.","н. е."],FIRSTDAYOFWEEK:0,MONTH:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"],
SHORTDAY:["нед","пон","уто","сре","чет","пет","суб"],SHORTMONTH:["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец"],
STANDALONEMONTH:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, dd. MMMM y.",longDate:"dd. MMMM y.",medium:"dd.MM.y. HH:mm:ss",
mediumDate:"dd.MM.y.",mediumTime:"HH:mm:ss","short":"d.M.yy. HH:mm",shortDate:"d.M.yy.",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"KM",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"sr-cyrl-ba",localeID:"sr_Cyrl_BA",pluralCat:function(e,r){
var E=0|e,a=M(e,r);return 0==a.v&&E%10==1&&E%100!=11||a.f%10==1&&a.f%100!=11?n.ONE:0==a.v&&E%10>=2&&4>=E%10&&(12>E%100||E%100>14)||a.f%10>=2&&a.f%10<=4&&(a.f%100<12||a.f%100>14)?n.FEW:n.OTHER;
}})}]);