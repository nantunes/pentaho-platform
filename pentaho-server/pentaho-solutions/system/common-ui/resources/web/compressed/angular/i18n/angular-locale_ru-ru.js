angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function r(e,r){var n=r;void 0===n&&(n=Math.min(M(e),3));
var E=Math.pow(10,n),a=(e*E|0)%E;return{v:n,f:a}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],
ERANAMES:["до н. э.","н. э."],ERAS:["до н. э.","н. э."],FIRSTDAYOFWEEK:0,MONTH:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],
SHORTDAY:["вс","пн","вт","ср","чт","пт","сб"],SHORTMONTH:["янв.","февр.","марта","апр.","мая","июня","июля","авг.","сент.","окт.","нояб.","дек."],
STANDALONEMONTH:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y 'г'.",longDate:"d MMMM y 'г'.",medium:"d MMM y 'г'. H:mm:ss",
mediumDate:"d MMM y 'г'.",mediumTime:"H:mm:ss","short":"dd.MM.yy H:mm",shortDate:"dd.MM.yy",
shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"руб.",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"ru-ru",localeID:"ru_RU",pluralCat:function(e,M){var E=0|e,a=r(e,M);
return 0==a.v&&E%10==1&&E%100!=11?n.ONE:0==a.v&&E%10>=2&&4>=E%10&&(12>E%100||E%100>14)?n.FEW:0==a.v&&E%10==0||0==a.v&&E%10>=5&&9>=E%10||0==a.v&&E%100>=11&&14>=E%100?n.MANY:n.OTHER;
}})}]);