angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(M(e),3));
var r=Math.pow(10,n),E=(e*r|0)%r;return{v:n,f:E}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["قبل دوپہر","بعد دوپہر"],
DAY:["اتوار","سوموار","منگل","بدھ","جمعرات","جمعہ","ہفتہ"],ERANAMES:["قبل مسیح","عیسوی سن"],
ERAS:["ق م","عیسوی سن"],FIRSTDAYOFWEEK:6,MONTH:["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],
SHORTDAY:["اتوار","سوموار","منگل","بدھ","جمعرات","جمعہ","ہفتہ"],SHORTMONTH:["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],
STANDALONEMONTH:["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],
WEEKENDRANGE:[5,6],fullDate:"EEEE، d MMMM، y",longDate:"d MMMM، y",medium:"d MMM، y h:mm:ss a",
mediumDate:"d MMM، y",mediumTime:"h:mm:ss a","short":"d/M/yy h:mm a",shortDate:"d/M/yy",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Rs",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:2,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"ur",localeID:"ur",pluralCat:function(e,M){var r=0|e,E=a(e,M);
return 1==r&&0==E.v?n.ONE:n.OTHER}})}]);