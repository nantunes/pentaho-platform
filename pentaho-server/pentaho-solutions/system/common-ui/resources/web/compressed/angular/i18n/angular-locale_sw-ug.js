angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");
return-1==e?0:a.length-e-1}function i(a,i){var m=i;void 0===m&&(m=Math.min(e(a),3));
var u=Math.pow(10,m),n=(a*u|0)%u;return{v:m,f:n}}var m={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Jumapili","Jumatatu","Jumanne","Jumatano","Alhamisi","Ijumaa","Jumamosi"],ERANAMES:["Kabla ya Kristo","Baada ya Kristo"],
ERAS:["BC","AD"],FIRSTDAYOFWEEK:0,MONTH:["Januari","Februari","Machi","Aprili","Mei","Juni","Julai","Agosti","Septemba","Oktoba","Novemba","Desemba"],
SHORTDAY:["Jumapili","Jumatatu","Jumanne","Jumatano","Alhamisi","Ijumaa","Jumamosi"],
SHORTMONTH:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ago","Sep","Okt","Nov","Des"],
STANDALONEMONTH:["Januari","Februari","Machi","Aprili","Mei","Juni","Julai","Agosti","Septemba","Oktoba","Novemba","Desemba"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"UGX",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"sw-ug",localeID:"sw_UG",pluralCat:function(a,e){var u=0|a,n=i(a,e);
return 1==u&&0==n.v?m.ONE:m.OTHER}})}]);