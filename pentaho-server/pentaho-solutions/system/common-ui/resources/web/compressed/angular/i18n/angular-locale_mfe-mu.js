angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");
return-1==a?0:e.length-a-1}function i(e,i){var m=i;void 0===m&&(m=Math.min(a(e),3));
var n=Math.pow(10,m),r=(e*n|0)%n;return{v:m,f:r}}var m={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["dimans","lindi","mardi","merkredi","zedi","vandredi","samdi"],ERANAMES:["avan Zezi-Krist","apre Zezi-Krist"],
ERAS:["av. Z-K","ap. Z-K"],FIRSTDAYOFWEEK:0,MONTH:["zanvie","fevriye","mars","avril","me","zin","zilye","out","septam","oktob","novam","desam"],
SHORTDAY:["dim","lin","mar","mer","ze","van","sam"],SHORTMONTH:["zan","fev","mar","avr","me","zin","zil","out","sep","okt","nov","des"],
STANDALONEMONTH:["zanvie","fevriye","mars","avril","me","zin","zilye","out","septam","oktob","novam","desam"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM, y HH:mm:ss",
mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"MURs",DECIMAL_SEP:".",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"mfe-mu",localeID:"mfe_MU",pluralCat:function(e,a){var n=0|e,r=i(e,a);
return 1==n&&0==r.v?m.ONE:m.OTHER}})}]);