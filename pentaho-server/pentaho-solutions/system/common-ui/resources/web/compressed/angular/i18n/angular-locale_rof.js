angular.module("ngLocale",[],["$provide",function(a){function i(a){a+="";var i=a.indexOf(".");
return-1==i?0:a.length-i-1}function M(a,M){var e=M;void 0===e&&(e=Math.min(i(a),3));
var r=Math.pow(10,e),w=(a*r|0)%r;return{v:e,f:w}}var e={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["kang’ama","kingoto"],
DAY:["Ijumapili","Ijumatatu","Ijumanne","Ijumatano","Alhamisi","Ijumaa","Ijumamosi"],
ERANAMES:["Kabla ya Mayesu","Baada ya Mayesu"],ERAS:["KM","BM"],FIRSTDAYOFWEEK:0,
MONTH:["Mweri wa kwanza","Mweri wa kaili","Mweri wa katatu","Mweri wa kaana","Mweri wa tanu","Mweri wa sita","Mweri wa saba","Mweri wa nane","Mweri wa tisa","Mweri wa ikumi","Mweri wa ikumi na moja","Mweri wa ikumi na mbili"],
SHORTDAY:["Ijp","Ijt","Ijn","Ijtn","Alh","Iju","Ijm"],SHORTMONTH:["M1","M2","M3","M4","M5","M6","M7","M8","M9","M10","M11","M12"],
STANDALONEMONTH:["Mweri wa kwanza","Mweri wa kaili","Mweri wa katatu","Mweri wa kaana","Mweri wa tanu","Mweri wa sita","Mweri wa saba","Mweri wa nane","Mweri wa tisa","Mweri wa ikumi","Mweri wa ikumi na moja","Mweri wa ikumi na mbili"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"TSh",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"rof",localeID:"rof",pluralCat:function(a,i){var r=0|a,w=M(a,i);return 1==r&&0==w.v?e.ONE:e.OTHER;
}})}]);