angular.module("ngLocale",[],["$provide",function(n){function a(n){n+="";var a=n.indexOf(".");
return-1==a?0:n.length-a-1}function i(n,i){var e=i;void 0===e&&(e=Math.min(a(n),3));
var h=Math.pow(10,e),r=(n*h|0)%h;return{v:e,f:r}}var e={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};n.value("$locale",{DATETIME_FORMATS:{AMPMS:["m","f"],
DAY:["DiDòmhnaich","DiLuain","DiMàirt","DiCiadain","DiarDaoin","DihAoine","DiSathairne"],
ERANAMES:["Ro Chrìosta","An dèidh Chrìosta"],ERAS:["RC","AD"],FIRSTDAYOFWEEK:0,MONTH:["dhen Fhaoilleach","dhen Ghearran","dhen Mhàrt","dhen Ghiblean","dhen Chèitean","dhen Ògmhios","dhen Iuchar","dhen Lùnastal","dhen t-Sultain","dhen Dàmhair","dhen t-Samhain","dhen Dùbhlachd"],
SHORTDAY:["DiD","DiL","DiM","DiC","Dia","Dih","DiS"],SHORTMONTH:["Faoi","Gearr","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùna","Sult","Dàmh","Samh","Dùbh"],
STANDALONEMONTH:["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d'mh' MMMM y",longDate:"d'mh' MMMM y",medium:"d MMM y HH:mm:ss",
mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd/MM/y HH:mm",shortDate:"dd/MM/y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"£",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"gd-gb",localeID:"gd_GB",pluralCat:function(n,a){var h=0|n,r=i(n,a);
return 1==h&&0==r.v?e.ONE:e.OTHER}})}]);