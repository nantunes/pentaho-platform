angular.module("ngLocale",[],["$provide",function(a){function r(a){a+="";var r=a.indexOf(".");
return-1==r?0:a.length-r-1}function e(a,e){var n=e;void 0===n&&(n=Math.min(r(a),3));
var u=Math.pow(10,n),M=(a*u|0)%u;return{v:n,f:M}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["Zdat azal","Ḍeffir aza"],
DAY:["Asamas","Aynas","Asinas","Akras","Akwas","Asimwas","Asiḍyas"],ERANAMES:["Zdat Ɛisa (TAƔ)","Ḍeffir Ɛisa (TAƔ)"],
ERAS:["ZƐ","ḌƐ"],FIRSTDAYOFWEEK:5,MONTH:["Yennayer","Yebrayer","Mars","Ibrir","Mayyu","Yunyu","Yulyuz","Ɣuct","Cutanbir","Kṭuber","Nwanbir","Dujanbir"],
SHORTDAY:["Asa","Ayn","Asn","Akr","Akw","Asm","Asḍ"],SHORTMONTH:["Yen","Yeb","Mar","Ibr","May","Yun","Yul","Ɣuc","Cut","Kṭu","Nwa","Duj"],
STANDALONEMONTH:["Yennayer","Yebrayer","Mars","Ibrir","Mayyu","Yunyu","Yulyuz","Ɣuct","Cutanbir","Kṭuber","Nwanbir","Dujanbir"],
WEEKENDRANGE:[4,5],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",
mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd/MM/y HH:mm",shortDate:"dd/MM/y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"dh",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"tzm-ma",localeID:"tzm_MA",pluralCat:function(a,r){var u=0|a,M=e(a,r);
return 1==u&&0==M.v?n.ONE:n.OTHER}})}]);