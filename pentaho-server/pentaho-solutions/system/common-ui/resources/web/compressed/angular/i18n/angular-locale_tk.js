angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");
return-1==a?0:e.length-a-1}function n(e,n){var r=n;void 0===r&&(r=Math.min(a(e),3));
var M=Math.pow(10,r),t=(e*M|0)%M;return{v:r,f:t}}var r={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["ýekşenbe","duşenbe","sişenbe","çarşenbe","penşenbe","anna","şenbe"],ERANAMES:["BCE","CE"],
ERAS:["BCE","CE"],FIRSTDAYOFWEEK:0,MONTH:["ýanwar","fewral","mart","aprel","maý","iýun","iýul","awgust","sentýabr","oktýabr","noýabr","dekabr"],
SHORTDAY:["ýb","db","sb","çb","pb","an","şb"],SHORTMONTH:["ýan","few","mart","apr","maý","iýun","iýul","awg","sen","okt","noý","dek"],
STANDALONEMONTH:["ýanwar","fewral","mart","aprel","maý","iýun","iýul","awgust","sentýabr","oktýabr","noýabr","dekabr"],
WEEKENDRANGE:[5,6],fullDate:"d MMMM y EEEE",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",
mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd.MM.y HH:mm",shortDate:"dd.MM.y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"TMT",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"tk",localeID:"tk",pluralCat:function(e,a){var M=0|e,t=n(e,a);
return 1==M&&0==t.v?r.ONE:r.OTHER}})}]);