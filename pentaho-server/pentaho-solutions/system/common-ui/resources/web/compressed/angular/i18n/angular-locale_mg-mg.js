angular.module("ngLocale",[],["$provide",function(a){function r(a){a+="";var r=a.indexOf(".");
return-1==r?0:a.length-r-1}function o(a,o){var e=o;void 0===e&&(e=Math.min(r(a),3));
var M=Math.pow(10,e),n=(a*M|0)%M;return{v:e,f:n}}var e={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Alahady","Alatsinainy","Talata","Alarobia","Alakamisy","Zoma","Asabotsy"],ERANAMES:["Alohan’i JK","Aorian’i JK"],
ERAS:["BC","AD"],FIRSTDAYOFWEEK:0,MONTH:["Janoary","Febroary","Martsa","Aprily","Mey","Jona","Jolay","Aogositra","Septambra","Oktobra","Novambra","Desambra"],
SHORTDAY:["Alah","Alats","Tal","Alar","Alak","Zom","Asab"],SHORTMONTH:["Jan","Feb","Mar","Apr","Mey","Jon","Jol","Aog","Sep","Okt","Nov","Des"],
STANDALONEMONTH:["Janoary","Febroary","Martsa","Aprily","Mey","Jona","Jolay","Aogositra","Septambra","Oktobra","Novambra","Desambra"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM, y HH:mm:ss",
mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Ar",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"mg-mg",localeID:"mg_MG",pluralCat:function(a,r){var M=0|a,n=o(a,r);
return 1==M&&0==n.v?e.ONE:e.OTHER}})}]);