angular.module("ngLocale",[],["$provide",function(a){function i(a){a+="";var i=a.indexOf(".");
return-1==i?0:a.length-i-1}function e(a,e){var u=e;void 0===u&&(u=Math.min(i(a),3));
var M=Math.pow(10,u),n=(a*M|0)%M;return{v:u,f:n}}var u={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Sabbiiti","Balaza","Lwakubiri","Lwakusatu","Lwakuna","Lwakutaano","Lwamukaaga"],
ERANAMES:["Kulisito nga tannaza","Bukya Kulisito Azaal"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:0,
MONTH:["Janwaliyo","Febwaliyo","Marisi","Apuli","Maayi","Juuni","Julaayi","Agusito","Sebuttemba","Okitobba","Novemba","Desemba"],
SHORTDAY:["Sab","Bal","Lw2","Lw3","Lw4","Lw5","Lw6"],SHORTMONTH:["Jan","Feb","Mar","Apu","Maa","Juu","Jul","Agu","Seb","Oki","Nov","Des"],
STANDALONEMONTH:["Janwaliyo","Febwaliyo","Marisi","Apuli","Maayi","Juuni","Julaayi","Agusito","Sebuttemba","Okitobba","Novemba","Desemba"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"UGX",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"¤",posPre:"",
posSuf:"¤"}]},id:"lg",localeID:"lg",pluralCat:function(a,i){var M=0|a,n=e(a,i);return 1==M&&0==n.v?u.ONE:u.OTHER;
}})}]);