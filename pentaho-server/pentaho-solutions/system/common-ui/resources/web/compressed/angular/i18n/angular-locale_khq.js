angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");
return-1==a?0:e.length-a-1}function r(e,r){var i=r;void 0===i&&(i=Math.min(a(e),3));
var n=Math.pow(10,i),u=(e*n|0)%n;return{v:i,f:u}}var i={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["Adduha","Aluula"],
DAY:["Alhadi","Atini","Atalata","Alarba","Alhamiisa","Aljuma","Assabdu"],ERANAMES:["Isaa jine","Isaa jamanoo"],
ERAS:["IJ","IZ"],FIRSTDAYOFWEEK:0,MONTH:["Žanwiye","Feewiriye","Marsi","Awiril","Me","Žuweŋ","Žuyye","Ut","Sektanbur","Oktoobur","Noowanbur","Deesanbur"],
SHORTDAY:["Alh","Ati","Ata","Ala","Alm","Alj","Ass"],SHORTMONTH:["Žan","Fee","Mar","Awi","Me","Žuw","Žuy","Ut","Sek","Okt","Noo","Dee"],
STANDALONEMONTH:["Žanwiye","Feewiriye","Marsi","Awiril","Me","Žuweŋ","Žuyye","Ut","Sektanbur","Oktoobur","Noowanbur","Deesanbur"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM, y HH:mm:ss",
mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"CFA",DECIMAL_SEP:".",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"¤",posPre:"",
posSuf:"¤"}]},id:"khq",localeID:"khq",pluralCat:function(e,a){var n=0|e,u=r(e,a);return 1==n&&0==u.v?i.ONE:i.OTHER;
}})}]);