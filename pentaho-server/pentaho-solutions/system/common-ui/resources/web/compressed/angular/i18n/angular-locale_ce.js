angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function E(e,E){var n=E;void 0===n&&(n=Math.min(M(e),3));
var r=Math.pow(10,n),a=(e*r|0)%r;return{v:n,f:a}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["кӀиранан де","оршотан де","шинарин де","кхаарин де","еарин де","пӀераскан де","шот де"],
ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:0,MONTH:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],
SHORTDAY:["кӀиранан де","оршотан де","шинарин де","кхаарин де","еарин де","пӀераскан де","шот де"],
SHORTMONTH:["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],
STANDALONEMONTH:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],
WEEKENDRANGE:[5,6],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",
mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"₽",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"ce",localeID:"ce",pluralCat:function(e,M){var r=0|e,a=E(e,M);
return 1==r&&0==a.v?n.ONE:n.OTHER}})}]);