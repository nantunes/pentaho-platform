angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");
return-1==r?0:e.length-r-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(r(e),3));
var i=Math.pow(10,n),m=(e*i|0)%i;return{v:n,f:m}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["fm","em"],
DAY:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],ERANAMES:["före Kristus","efter Kristus"],
ERAS:["f.Kr.","e.Kr."],FIRSTDAYOFWEEK:0,MONTH:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],
SHORTDAY:["sön","mån","tis","ons","tors","fre","lör"],SHORTMONTH:["jan.","feb.","mars","apr.","maj","juni","juli","aug.","sep.","okt.","nov.","dec."],
STANDALONEMONTH:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",
mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"kr",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"sv-se",localeID:"sv_SE",pluralCat:function(e,r){var i=0|e,m=a(e,r);
return 1==i&&0==m.v?n.ONE:n.OTHER}})}]);