angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(M(e),3));
var r=Math.pow(10,n),E=(e*r|0)%r;return{v:n,f:E}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ንጉሆ ሰዓተ","ድሕር ሰዓት"],
DAY:["ሰንበት","ሰኑይ","ሠሉስ","ረቡዕ","ኃሙስ","ዓርቢ","ቀዳም"],ERANAMES:["ዓ/ዓ","ዓ/ም"],ERAS:["ዓ/ዓ","ዓ/ም"],
FIRSTDAYOFWEEK:0,MONTH:["ጃንዩወሪ","ፌብሩወሪ","ማርች","ኤፕረል","ሜይ","ጁን","ጁላይ","ኦገስት","ሴፕቴምበር","ኦክተውበር","ኖቬምበር","ዲሴምበር"],
SHORTDAY:["ሰንበት","ሰኑይ","ሠሉስ","ረቡዕ","ኃሙስ","ዓርቢ","ቀዳም"],SHORTMONTH:["ጃንዩ","ፌብሩ","ማርች","ኤፕረ","ሜይ","ጁን","ጁላይ","ኦገስ","ሴፕቴ","ኦክተ","ኖቬም","ዲሴም"],
STANDALONEMONTH:["ጃንዩወሪ","ፌብሩወሪ","ማርች","ኤፕረል","ሜይ","ጁን","ጁላይ","ኦገስት","ሴፕቴምበር","ኦክተውበር","ኖቬምበር","ዲሴምበር"],
WEEKENDRANGE:[5,6],fullDate:"EEEE፣ dd MMMM መዓልቲ y G",longDate:"dd MMMM y",medium:"dd-MMM-y h:mm:ss a",
mediumDate:"dd-MMM-y",mediumTime:"h:mm:ss a","short":"dd/MM/yy h:mm a",shortDate:"dd/MM/yy",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Birr",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"ti-et",localeID:"ti_ET",pluralCat:function(e,M){var r=0|e,E=a(e,M);
return 1==r&&0==E.v?n.ONE:n.OTHER}})}]);