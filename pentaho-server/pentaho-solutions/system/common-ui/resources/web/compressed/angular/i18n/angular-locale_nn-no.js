angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");
return-1==r?0:e.length-r-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(r(e),3));
var m=Math.pow(10,n),o=(e*m|0)%m;return{v:n,f:o}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["formiddag","ettermiddag"],
DAY:["søndag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"],ERANAMES:["f.Kr.","e.Kr."],
ERAS:["f.Kr.","e.Kr."],FIRSTDAYOFWEEK:0,MONTH:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],
SHORTDAY:["sø.","må.","ty.","on.","to.","fr.","la."],SHORTMONTH:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],
STANDALONEMONTH:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d. MMMM y",longDate:"d. MMMM y",medium:"d. MMM y HH:mm:ss",
mediumDate:"d. MMM y",mediumTime:"HH:mm:ss","short":"dd.MM.y HH:mm",shortDate:"dd.MM.y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"kr",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"nn-no",localeID:"nn_NO",pluralCat:function(e,r){var m=0|e,o=a(e,r);
return 1==m&&0==o.v?n.ONE:n.OTHER}})}]);