angular.module("ngLocale",[],["$provide",function(e){function o(e){e+="";var o=e.indexOf(".");
return-1==o?0:e.length-o-1}function a(e,a){var r=a;void 0===r&&(r=Math.min(o(e),3));
var i=Math.pow(10,r),n=(e*i|0)%i;return{v:r,f:n}}var r={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],ERANAMES:["a.C.","d.C."],
ERAS:["aC","dC"],FIRSTDAYOFWEEK:0,MONTH:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],
SHORTDAY:["dom","lun","mar","mer","gio","ven","sab"],SHORTMONTH:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],
STANDALONEMONTH:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"dd MMM y HH:mm:ss",
mediumDate:"dd MMM y",mediumTime:"HH:mm:ss","short":"dd/MM/yy HH:mm",shortDate:"dd/MM/yy",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"it-it",localeID:"it_IT",pluralCat:function(e,o){var i=0|e,n=a(e,o);
return 1==i&&0==n.v?r.ONE:r.OTHER}})}]);