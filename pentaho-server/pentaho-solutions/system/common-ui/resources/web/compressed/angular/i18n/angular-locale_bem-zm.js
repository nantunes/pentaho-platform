angular.module("ngLocale",[],["$provide",function(a){function i(a){a+="";var i=a.indexOf(".");
return-1==i?0:a.length-i-1}function e(a,e){var u=e;void 0===u&&(u=Math.min(i(a),3));
var M=Math.pow(10,u),n=(a*M|0)%M;return{v:u,f:n}}var u={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["uluchelo","akasuba"],
DAY:["Pa Mulungu","Palichimo","Palichibuli","Palichitatu","Palichine","Palichisano","Pachibelushi"],
ERANAMES:["Before Yesu","After Yesu"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:0,MONTH:["Januari","Februari","Machi","Epreo","Mei","Juni","Julai","Ogasti","Septemba","Oktoba","Novemba","Disemba"],
SHORTDAY:["Pa Mulungu","Palichimo","Palichibuli","Palichitatu","Palichine","Palichisano","Pachibelushi"],
SHORTMONTH:["Jan","Feb","Mac","Epr","Mei","Jun","Jul","Oga","Sep","Okt","Nov","Dis"],
STANDALONEMONTH:["Januari","Februari","Machi","Epreo","Mei","Juni","Julai","Ogasti","Septemba","Oktoba","Novemba","Disemba"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"ZMW",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"bem-zm",localeID:"bem_ZM",pluralCat:function(a,i){var M=0|a,n=e(a,i);
return 1==M&&0==n.v?u.ONE:u.OTHER}})}]);