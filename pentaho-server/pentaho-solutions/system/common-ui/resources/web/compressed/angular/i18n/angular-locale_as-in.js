angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");
return-1==a?0:e.length-a-1}function E(e,E){var n=E;void 0===n&&(n=Math.min(a(e),3));
var M=Math.pow(10,n),r=(e*M|0)%M;return{v:n,f:r}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["পূৰ্বাহ্ণ","অপৰাহ্ণ"],
DAY:["দেওবাৰ","সোমবাৰ","মঙ্গলবাৰ","বুধবাৰ","বৃহষ্পতিবাৰ","শুক্ৰবাৰ","শনিবাৰ"],ERANAMES:["BCE","CE"],
ERAS:["BCE","CE"],FIRSTDAYOFWEEK:6,MONTH:["জানুৱাৰী","ফেব্ৰুৱাৰী","মাৰ্চ","এপ্ৰিল","মে","জুন","জুলাই","আগষ্ট","ছেপ্তেম্বৰ","অক্টোবৰ","নৱেম্বৰ","ডিচেম্বৰ"],
SHORTDAY:["ৰবি","সোম","মঙ্গল","বুধ","বৃহষ্পতি","শুক্ৰ","শনি"],SHORTMONTH:["জানু","ফেব্ৰু","মাৰ্চ","এপ্ৰিল","মে","জুন","জুলাই","আগ","সেপ্ট","অক্টো","নভে","ডিসে"],
STANDALONEMONTH:["জানুৱাৰী","ফেব্ৰুৱাৰী","মাৰ্চ","এপ্ৰিল","মে","জুন","জুলাই","আগষ্ট","ছেপ্তেম্বৰ","অক্টোবৰ","নৱেম্বৰ","ডিচেম্বৰ"],
WEEKENDRANGE:[6,6],fullDate:"EEEE, d MMMM, y",longDate:"d MMMM, y",medium:"dd-MM-y h.mm.ss a",
mediumDate:"dd-MM-y",mediumTime:"h.mm.ss a","short":"d-M-y h.mm. a",shortDate:"d-M-y",
shortTime:"h.mm. a"},NUMBER_FORMATS:{CURRENCY_SYM:"₹",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:2,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"as-in",localeID:"as_IN",pluralCat:function(e,a){var M=0|e,r=E(e,a);
return 1==M&&0==r.v?n.ONE:n.OTHER}})}]);