angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");
return-1==a?0:e.length-a-1}function r(e,r){var i=r;void 0===i&&(i=Math.min(a(e),3));
var M=Math.pow(10,i),S=(e*M|0)%M;return{v:i,f:S}}var i={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Dimas","Teneŋ","Talata","Alarbay","Aramisay","Arjuma","Sibiti"],ERANAMES:["Ariŋuu Yeesu","Atooŋe Yeesu"],
ERAS:["ArY","AtY"],FIRSTDAYOFWEEK:0,MONTH:["Sanvie","Fébirie","Mars","Aburil","Mee","Sueŋ","Súuyee","Ut","Settembar","Oktobar","Novembar","Disambar"],
SHORTDAY:["Dim","Ten","Tal","Ala","Ara","Arj","Sib"],SHORTMONTH:["Sa","Fe","Ma","Ab","Me","Su","Sú","Ut","Se","Ok","No","De"],
STANDALONEMONTH:["Sanvie","Fébirie","Mars","Aburil","Mee","Sueŋ","Súuyee","Ut","Settembar","Oktobar","Novembar","Disambar"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",
mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"CFA",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"dyo-sn",localeID:"dyo_SN",pluralCat:function(e,a){var M=0|e,S=r(e,a);
return 1==M&&0==S.v?i.ONE:i.OTHER}})}]);