angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");
return-1==r?0:e.length-r-1}function n(e,n){var a=n;void 0===a&&(a=Math.min(r(e),3));
var o=Math.pow(10,a),M=(e*o|0)%o;return{v:a,f:M}}var a={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["a.m.","p.m."],
DAY:["Jedoonee","Jelhein","Jemayrt","Jercean","Jerdein","Jeheiney","Jesarn"],ERANAMES:["RC","AD"],
ERAS:["RC","AD"],FIRSTDAYOFWEEK:0,MONTH:["Jerrey-geuree","Toshiaght-arree","Mayrnt","Averil","Boaldyn","Mean-souree","Jerrey-souree","Luanistyn","Mean-fouyir","Jerrey-fouyir","Mee Houney","Mee ny Nollick"],
SHORTDAY:["Jed","Jel","Jem","Jerc","Jerd","Jeh","Jes"],SHORTMONTH:["J-guer","T-arree","Mayrnt","Avrril","Boaldyn","M-souree","J-souree","Luanistyn","M-fouyir","J-fouyir","M.Houney","M.Nollick"],
STANDALONEMONTH:["Jerrey-geuree","Toshiaght-arree","Mayrnt","Averil","Boaldyn","Mean-souree","Jerrey-souree","Luanistyn","Mean-fouyir","Jerrey-fouyir","Mee Houney","Mee ny Nollick"],
WEEKENDRANGE:[5,6],fullDate:"EEEE dd MMMM y",longDate:"dd MMMM y",medium:"MMM dd, y HH:mm:ss",
mediumDate:"MMM dd, y",mediumTime:"HH:mm:ss","short":"dd/MM/yy HH:mm",shortDate:"dd/MM/yy",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"£",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"gv",localeID:"gv",pluralCat:function(e,r){var o=0|e,M=n(e,r);return 1==o&&0==M.v?a.ONE:a.OTHER;
}})}]);