angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");
return-1==a?0:e.length-a-1}function n(e,n){var u=n;void 0===u&&(u=Math.min(a(e),3));
var r=Math.pow(10,u),M=(e*r|0)%r;return{v:u,f:M}}var u={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ND","LK"],
DAY:["Bikua-ôko","Bïkua-ûse","Bïkua-ptâ","Bïkua-usïö","Bïkua-okü","Lâpôsö","Lâyenga"],
ERANAMES:["Kôzo na Krîstu","Na pekô tî Krîstu"],ERAS:["KnK","NpK"],FIRSTDAYOFWEEK:0,
MONTH:["Nyenye","Fulundïgi","Mbängü","Ngubùe","Bêläwü","Föndo","Lengua","Kükürü","Mvuka","Ngberere","Nabändüru","Kakauka"],
SHORTDAY:["Bk1","Bk2","Bk3","Bk4","Bk5","Lâp","Lây"],SHORTMONTH:["Nye","Ful","Mbä","Ngu","Bêl","Fön","Len","Kük","Mvu","Ngb","Nab","Kak"],
STANDALONEMONTH:["Nyenye","Fulundïgi","Mbängü","Ngubùe","Bêläwü","Föndo","Lengua","Kükürü","Mvuka","Ngberere","Nabändüru","Kakauka"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM, y HH:mm:ss",
mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",
posSuf:""}]},id:"sg-cf",localeID:"sg_CF",pluralCat:function(e,a){var r=0|e,M=n(e,a);
return 1==r&&0==M.v?u.ONE:u.OTHER}})}]);