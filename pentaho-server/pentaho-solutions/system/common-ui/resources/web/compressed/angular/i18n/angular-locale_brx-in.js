angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(M(e),3));
var r=Math.pow(10,n),E=(e*r|0)%r;return{v:n,f:E}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["फुं","बेलासे"],
DAY:["रबिबार","समबार","मंगलबार","बुदबार","बिसथिबार","सुखुरबार","सुनिबार"],ERANAMES:["ईसा.पूर्व","सन"],
ERAS:["ईसा.पूर्व","सन"],FIRSTDAYOFWEEK:0,MONTH:["जानुवारी","फेब्रुवारी","मार्स","एफ्रिल","मे","जुन","जुलाइ","आगस्थ","सेबथेज्ब़र","अखथबर","नबेज्ब़र","दिसेज्ब़र"],
SHORTDAY:["रबि","सम","मंगल","बुद","बिसथि","सुखुर","सुनि"],SHORTMONTH:["जानुवारी","फेब्रुवारी","मार्स","एफ्रिल","मे","जुन","जुलाइ","आगस्थ","सेबथेज्ब़र","अखथबर","नबेज्ब़र","दिसेज्ब़र"],
STANDALONEMONTH:["जानुवारी","फेब्रुवारी","मार्स","एफ्रिल","मे","जुन","जुलाइ","आगस्थ","सेबथेज्ब़र","अखथबर","नबेज्ब़र","दिसेज्ब़र"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",
mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"₹",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:2,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"brx-in",localeID:"brx_IN",pluralCat:function(e,M){var r=0|e,E=a(e,M);
return 1==r&&0==E.v?n.ONE:n.OTHER}})}]);