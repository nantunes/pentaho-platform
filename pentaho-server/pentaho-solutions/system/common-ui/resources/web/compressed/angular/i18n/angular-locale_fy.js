angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");
return-1==r?0:e.length-r-1}function a(e,a){var i=a;void 0===i&&(i=Math.min(r(e),3));
var n=Math.pow(10,i),o=(e*n|0)%n;return{v:i,f:o}}var i={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["snein","moandei","tiisdei","woansdei","tongersdei","freed","sneon"],ERANAMES:["Foar Kristus","nei Kristus"],
ERAS:["f.Kr.","n.Kr."],FIRSTDAYOFWEEK:0,MONTH:["jannewaris","febrewaris","maart","april","maaie","juny","july","augustus","septimber","oktober","novimber","desimber"],
SHORTDAY:["si","mo","ti","wo","to","fr","so"],SHORTMONTH:["jan.","feb.","mrt.","apr.","mai","jun.","jul.","aug.","sep.","okt.","nov.","des."],
STANDALONEMONTH:["jannewaris","febrewaris","maart","april","maaie","juny","july","augustus","septimber","oktober","novimber","desimber"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",
mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd-MM-yy HH:mm",shortDate:"dd-MM-yy",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ ",negSuf:"-",
posPre:"¤ ",posSuf:""}]},id:"fy",localeID:"fy",pluralCat:function(e,r){var n=0|e,o=a(e,r);
return 1==n&&0==o.v?i.ONE:i.OTHER}})}]);