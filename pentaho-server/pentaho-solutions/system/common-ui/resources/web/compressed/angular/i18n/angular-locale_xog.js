angular.module("ngLocale",[],["$provide",function(a){function i(a){a+="";var i=a.indexOf(".");
return-1==i?0:a.length-i-1}function e(a,e){var u=e;void 0===u&&(u=Math.min(i(a),3));
var o=Math.pow(10,u),M=(a*o|0)%o;return{v:u,f:M}}var u={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["Munkyo","Eigulo"],
DAY:["Sabiiti","Balaza","Owokubili","Owokusatu","Olokuna","Olokutaanu","Olomukaaga"],
ERANAMES:["Kulisto nga azilawo","Kulisto nga affile"],ERAS:["AZ","AF"],FIRSTDAYOFWEEK:0,
MONTH:["Janwaliyo","Febwaliyo","Marisi","Apuli","Maayi","Juuni","Julaayi","Agusito","Sebuttemba","Okitobba","Novemba","Desemba"],
SHORTDAY:["Sabi","Bala","Kubi","Kusa","Kuna","Kuta","Muka"],SHORTMONTH:["Jan","Feb","Mar","Apu","Maa","Juu","Jul","Agu","Seb","Oki","Nov","Des"],
STANDALONEMONTH:["Janwaliyo","Febwaliyo","Marisi","Apuli","Maayi","Juuni","Julaayi","Agusito","Sebuttemba","Okitobba","Novemba","Desemba"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"UGX",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"xog",localeID:"xog",pluralCat:function(a,i){var o=0|a,M=e(a,i);
return 1==o&&0==M.v?u.ONE:u.OTHER}})}]);