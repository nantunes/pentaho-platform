angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");
return-1==r?0:e.length-r-1}function a(e,a){var i=a;void 0===i&&(i=Math.min(r(e),3));
var n=Math.pow(10,i),m=(e*n|0)%n;return{v:i,f:m}}var i={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["a.","p."],
DAY:["domenie","lunis","martars","miercus","joibe","vinars","sabide"],ERANAMES:["pdC","ddC"],
ERAS:["pdC","ddC"],FIRSTDAYOFWEEK:0,MONTH:["Zenâr","Fevrâr","Març","Avrîl","Mai","Jugn","Lui","Avost","Setembar","Otubar","Novembar","Dicembar"],
SHORTDAY:["dom","lun","mar","mie","joi","vin","sab"],SHORTMONTH:["Zen","Fev","Mar","Avr","Mai","Jug","Lui","Avo","Set","Otu","Nov","Dic"],
STANDALONEMONTH:["Zenâr","Fevrâr","Març","Avrîl","Mai","Jugn","Lui","Avost","Setembar","Otubar","Novembar","Dicembar"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d 'di' MMMM 'dal' y",longDate:"d 'di' MMMM 'dal' y",
medium:"dd/MM/y HH:mm:ss",mediumDate:"dd/MM/y",mediumTime:"HH:mm:ss","short":"dd/MM/yy HH:mm",
shortDate:"dd/MM/yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",
GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",
negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",
negSuf:"",posPre:"¤ ",posSuf:""}]},id:"fur-it",localeID:"fur_IT",pluralCat:function(e,r){
var n=0|e,m=a(e,r);return 1==n&&0==m.v?i.ONE:i.OTHER}})}]);