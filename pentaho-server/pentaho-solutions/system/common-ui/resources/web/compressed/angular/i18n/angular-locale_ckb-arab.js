angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function n(e,n){var a=n;void 0===a&&(a=Math.min(M(e),3));
var r=Math.pow(10,a),E=(e*r|0)%r;return{v:a,f:E}}var a={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ب.ن","د.ن"],
DAY:["یەکشەممە","دووشەممە","سێشەممە","چوارشەممە","پێنجشەممە","ھەینی","شەممە"],ERANAMES:["پێش زایین","زایینی"],
ERAS:["پێش زاییین","ز"],FIRSTDAYOFWEEK:5,MONTH:["کانوونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانونی یەکەم"],
SHORTDAY:["یەکشەممە","دووشەممە","سێشەممە","چوارشەممە","پێنجشەممە","ھەینی","شەممە"],
SHORTMONTH:["کانوونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانونی یەکەم"],
STANDALONEMONTH:["کانوونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانونی یەکەم"],
WEEKENDRANGE:[4,5],fullDate:"y MMMM d, EEEE",longDate:"dی MMMMی y",medium:"y MMM d HH:mm:ss",
mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"din",DECIMAL_SEP:"٫",GROUP_SEP:"٬",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"ckb-arab",localeID:"ckb_Arab",pluralCat:function(e,M){
var r=0|e,E=n(e,M);return 1==r&&0==E.v?a.ONE:a.OTHER}})}]);