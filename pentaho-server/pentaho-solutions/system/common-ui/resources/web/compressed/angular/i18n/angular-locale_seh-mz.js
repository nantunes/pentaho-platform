angular.module("ngLocale",[],["$provide",function(e){function o(e){e+="";var o=e.indexOf(".");
return-1==o?0:e.length-o-1}function r(e,r){var i=r;void 0===i&&(i=Math.min(o(e),3));
var a=Math.pow(10,i),n=(e*a|0)%a;return{v:i,f:n}}var i={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Dimingu","Chiposi","Chipiri","Chitatu","Chinai","Chishanu","Sabudu"],ERANAMES:["Antes de Cristo","Anno Domini"],
ERAS:["AC","AD"],FIRSTDAYOFWEEK:0,MONTH:["Janeiro","Fevreiro","Marco","Abril","Maio","Junho","Julho","Augusto","Setembro","Otubro","Novembro","Decembro"],
SHORTDAY:["Dim","Pos","Pir","Tat","Nai","Sha","Sab"],SHORTMONTH:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Aug","Set","Otu","Nov","Dec"],
STANDALONEMONTH:["Janeiro","Fevreiro","Marco","Abril","Maio","Junho","Julho","Augusto","Setembro","Otubro","Novembro","Decembro"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d 'de' MMMM 'de' y",longDate:"d 'de' MMMM 'de' y",
medium:"d 'de' MMM 'de' y HH:mm:ss",mediumDate:"d 'de' MMM 'de' y",mediumTime:"HH:mm:ss",
"short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"MTn",
DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,
negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,
negPre:"-",negSuf:"¤",posPre:"",posSuf:"¤"}]},id:"seh-mz",localeID:"seh_MZ",pluralCat:function(e,o){
var a=0|e,n=r(e,o);return 1==a&&0==n.v?i.ONE:i.OTHER}})}]);