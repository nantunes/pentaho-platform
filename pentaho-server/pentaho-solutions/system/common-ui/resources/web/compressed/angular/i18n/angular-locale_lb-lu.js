angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");
return-1==r?0:e.length-r-1}function n(e,n){var M=n;void 0===M&&(M=Math.min(r(e),3));
var a=Math.pow(10,M),m=(e*a|0)%a;return{v:M,f:m}}var M={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["moies","nomëttes"],
DAY:["Sonndeg","Méindeg","Dënschdeg","Mëttwoch","Donneschdeg","Freideg","Samschdeg"],
ERANAMES:["v. Chr.","n. Chr."],ERAS:["v. Chr.","n. Chr."],FIRSTDAYOFWEEK:0,MONTH:["Januar","Februar","Mäerz","Abrëll","Mee","Juni","Juli","August","September","Oktober","November","Dezember"],
SHORTDAY:["Son.","Méi.","Dën.","Mët.","Don.","Fre.","Sam."],SHORTMONTH:["Jan.","Feb.","Mäe.","Abr.","Mee","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],
STANDALONEMONTH:["Januar","Februar","Mäerz","Abrëll","Mee","Juni","Juli","August","September","Oktober","November","Dezember"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d. MMMM y",longDate:"d. MMMM y",medium:"d. MMM y HH:mm:ss",
mediumDate:"d. MMM y",mediumTime:"HH:mm:ss","short":"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"lb-lu",localeID:"lb_LU",pluralCat:function(e,r){var a=0|e,m=n(e,r);
return 1==a&&0==m.v?M.ONE:M.OTHER}})}]);