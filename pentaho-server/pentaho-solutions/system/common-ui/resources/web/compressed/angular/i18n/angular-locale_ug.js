angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(M(e),3));
var E=Math.pow(10,n),r=(e*E|0)%E;return{v:n,f:r}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["چۈشتىن بۇرۇن","چۈشتىن كېيىن"],
DAY:["يەكشەنبە","دۈشەنبە","سەيشەنبە","چارشەنبە","پەيشەنبە","جۈمە","شەنبە"],ERANAMES:["مىلادىيەدىن بۇرۇن","مىلادىيە"],
ERAS:["مىلادىيەدىن بۇرۇن","مىلادىيە"],FIRSTDAYOFWEEK:6,MONTH:["يانۋار","فېۋرال","مارت","ئاپرېل","ماي","ئىيۇن","ئىيۇل","ئاۋغۇست","سېنتەبىر","ئۆكتەبىر","بويابىر","دېكابىر"],
SHORTDAY:["يە","دۈ","سە","چا","پە","چۈ","شە"],SHORTMONTH:["يانۋار","فېۋرال","مارت","ئاپرېل","ماي","ئىيۇن","ئىيۇل","ئاۋغۇست","سېنتەبىر","ئۆكتەبىر","نويابىر","دېكابىر"],
STANDALONEMONTH:["يانۋار","فېۋرال","مارت","ئاپرېل","ماي","ئىيۇن","ئىيۇل","ئاۋغۇست","سېنتەبىر","ئۆكتەبىر","بويابىر","دېكابىر"],
WEEKENDRANGE:[5,6],fullDate:"EEEE، MMMM d، y",longDate:"MMMM d، y",medium:"MMM d، y h:mm:ss a",
mediumDate:"MMM d، y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"¥",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"ug",localeID:"ug",pluralCat:function(e,M){var E=0|e,r=a(e,M);return 1==E&&0==r.v?n.ONE:n.OTHER;
}})}]);