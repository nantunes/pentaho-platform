angular.module("ngLocale",[],["$provide",function(e){function n(e){e+="";var n=e.indexOf(".");
return-1==n?0:e.length-n-1}function r(e,r){var o=r;void 0===o&&(o=Math.min(n(e),3));
var a=Math.pow(10,o),t=(e*a|0)%a;return{v:o,f:t}}var o={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["dopoledne","odpoledne"],
DAY:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],ERANAMES:["př. n. l.","n. l."],
ERAS:["př. n. l.","n. l."],FIRSTDAYOFWEEK:0,MONTH:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"],
SHORTDAY:["ne","po","út","st","čt","pá","so"],SHORTMONTH:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],
STANDALONEMONTH:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d. MMMM y",longDate:"d. MMMM y",medium:"d. M. y H:mm:ss",
mediumDate:"d. M. y",mediumTime:"H:mm:ss","short":"dd.MM.yy H:mm",shortDate:"dd.MM.yy",
shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Kč",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"cs-cz",localeID:"cs_CZ",pluralCat:function(e,n){var a=0|e,t=r(e,n);
return 1==a&&0==t.v?o.ONE:a>=2&&4>=a&&0==t.v?o.FEW:0!=t.v?o.MANY:o.OTHER}})}]);