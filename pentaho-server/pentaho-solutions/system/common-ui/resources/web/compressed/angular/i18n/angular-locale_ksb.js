angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");
return-1==e?0:a.length-e-1}function i(a,i){var m=i;void 0===m&&(m=Math.min(e(a),3));
var n=Math.pow(10,m),M=(a*n|0)%n;return{v:m,f:M}}var m={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["makeo","nyiaghuo"],
DAY:["Jumaapii","Jumaatatu","Jumaane","Jumaatano","Alhamisi","Ijumaa","Jumaamosi"],
ERANAMES:["Kabla ya Klisto","Baada ya Klisto"],ERAS:["KK","BK"],FIRSTDAYOFWEEK:0,
MONTH:["Januali","Febluali","Machi","Aplili","Mei","Juni","Julai","Agosti","Septemba","Oktoba","Novemba","Desemba"],
SHORTDAY:["Jpi","Jtt","Jmn","Jtn","Alh","Iju","Jmo"],SHORTMONTH:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ago","Sep","Okt","Nov","Des"],
STANDALONEMONTH:["Januali","Febluali","Machi","Aplili","Mei","Juni","Julai","Agosti","Septemba","Oktoba","Novemba","Desemba"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"TSh",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"¤",posPre:"",
posSuf:"¤"}]},id:"ksb",localeID:"ksb",pluralCat:function(a,e){var n=0|a,M=i(a,e);return 1==n&&0==M.v?m.ONE:m.OTHER;
}})}]);