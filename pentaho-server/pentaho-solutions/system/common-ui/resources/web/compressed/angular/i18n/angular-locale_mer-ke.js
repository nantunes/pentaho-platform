angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");
return-1==e?0:a.length-e-1}function r(a,r){var M=r;void 0===M&&(M=Math.min(e(a),3));
var m=Math.pow(10,M),i=(a*m|0)%m;return{v:M,f:i}}var M={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["RŨ","ŨG"],
DAY:["Kiumia","Muramuko","Wairi","Wethatu","Wena","Wetano","Jumamosi"],ERANAMES:["Mbere ya Kristũ","Nyuma ya Kristũ"],
ERAS:["MK","NK"],FIRSTDAYOFWEEK:0,MONTH:["Januarĩ","Feburuarĩ","Machi","Ĩpurũ","Mĩĩ","Njuni","Njuraĩ","Agasti","Septemba","Oktũba","Novemba","Dicemba"],
SHORTDAY:["KIU","MRA","WAI","WET","WEN","WTN","JUM"],SHORTMONTH:["JAN","FEB","MAC","ĨPU","MĨĨ","NJU","NJR","AGA","SPT","OKT","NOV","DEC"],
STANDALONEMONTH:["Januarĩ","Feburuarĩ","Machi","Ĩpurũ","Mĩĩ","Njuni","Njuraĩ","Agasti","Septemba","Oktũba","Novemba","Dicemba"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"mer-ke",localeID:"mer_KE",pluralCat:function(a,e){var m=0|a,i=r(a,e);
return 1==m&&0==i.v?M.ONE:M.OTHER}})}]);