angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function n(e,n){var a=n;void 0===a&&(a=Math.min(M(e),3));
var E=Math.pow(10,a),r=(e*E|0)%E;return{v:a,f:r}}var a={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],
FIRSTDAYOFWEEK:5,MONTH:["جانڤیە","فئڤریە","مارس","آڤریل","مئی","جوٙأن","جوٙلا","آگوست","سئپتامر","ئوکتوڤر","نوڤامر","دئسامر"],
SHORTDAY:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],SHORTMONTH:["جانڤیە","فئڤریە","مارس","آڤریل","مئی","جوٙأن","جوٙلا","آگوست","سئپتامر","ئوکتوڤر","نوڤامر","دئسامر"],
STANDALONEMONTH:["جانڤیە","فئڤریە","مارس","آڤریل","مئی","جوٙأن","جوٙلا","آگوست","سئپتامر","ئوکتوڤر","نوڤامر","دئسامر"],
WEEKENDRANGE:[4,5],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d h:mm:ss a",
mediumDate:"y MMM d",mediumTime:"h:mm:ss a","short":"y-MM-dd h:mm a",shortDate:"y-MM-dd",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"din",DECIMAL_SEP:"٫",GROUP_SEP:"٬",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"lrc-iq",localeID:"lrc_IQ",pluralCat:function(e,M){var E=0|e,r=n(e,M);
return 1==E&&0==r.v?a.ONE:a.OTHER}})}]);