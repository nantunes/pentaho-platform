angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(M(e),3));
var E=Math.pow(10,n),r=(e*E|0)%E;return{v:n,f:r}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["اَتھوار","ژٔنٛدرٕروار","بوٚموار","بودوار","برٛٮ۪سوار","جُمہ","بٹوار"],ERANAMES:["قبٕل مسیٖح","عیٖسوی سنہٕ"],
ERAS:["بی سی","اے ڈی"],FIRSTDAYOFWEEK:6,MONTH:["جنؤری","فرؤری","مارٕچ","اپریل","میٔ","جوٗن","جوٗلایی","اگست","ستمبر","اکتوٗبر","نومبر","دسمبر"],
SHORTDAY:["آتھوار","ژٔنٛدٕروار","بوٚموار","بودوار","برٛٮ۪سوار","جُمہ","بٹوار"],SHORTMONTH:["جنؤری","فرؤری","مارٕچ","اپریل","میٔ","جوٗن","جوٗلایی","اگست","ستمبر","اکتوٗبر","نومبر","دسمبر"],
STANDALONEMONTH:["جنؤری","فرؤری","مارٕچ","اپریل","میٔ","جوٗن","جوٗلایی","اگست","ستمبر","اکتوٗبر","نومبر","دسمبر"],
WEEKENDRANGE:[6,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",
mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"₹",DECIMAL_SEP:"٫",GROUP_SEP:"٬",
PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:2,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"ks",localeID:"ks",pluralCat:function(e,M){var E=0|e,r=a(e,M);
return 1==E&&0==r.v?n.ONE:n.OTHER}})}]);