angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(M(e),3));
var E=Math.pow(10,n),r=(e*E|0)%E;return{v:n,f:r}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ንጉሆ ሰዓተ","ድሕር ሰዓት"],
DAY:["ሰንበት","ሰኑይ","ሰሉስ","ረቡዕ","ሓሙስ","ዓርቢ","ቀዳም"],ERANAMES:["ዓ/ዓ","ዓ/ም"],ERAS:["ዓ/ዓ","ዓ/ም"],
FIRSTDAYOFWEEK:0,MONTH:["ጥሪ","ለካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰነ","ሓምለ","ነሓሰ","መስከረም","ጥቅምቲ","ሕዳር","ታሕሳስ"],
SHORTDAY:["ሰንበት","ሰኑይ","ሰሉስ","ረቡዕ","ሓሙስ","ዓርቢ","ቀዳም"],SHORTMONTH:["ጥሪ","ለካቲ","መጋቢ","ሚያዝ","ግንቦ","ሰነ","ሓምለ","ነሓሰ","መስከ","ጥቅም","ሕዳር","ታሕሳ"],
STANDALONEMONTH:["ጥሪ","ለካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰነ","ሓምለ","ነሓሰ","መስከረም","ጥቅምቲ","ሕዳር","ታሕሳስ"],
WEEKENDRANGE:[5,6],fullDate:"EEEE፡ dd MMMM መዓልቲ y G",longDate:"dd MMMM y",medium:"dd-MMM-y h:mm:ss a",
mediumDate:"dd-MMM-y",mediumTime:"h:mm:ss a","short":"dd/MM/yy h:mm a",shortDate:"dd/MM/yy",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Nfk",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"ti-er",localeID:"ti_ER",pluralCat:function(e,M){var E=0|e,r=a(e,M);
return 1==E&&0==r.v?n.ONE:n.OTHER}})}]);