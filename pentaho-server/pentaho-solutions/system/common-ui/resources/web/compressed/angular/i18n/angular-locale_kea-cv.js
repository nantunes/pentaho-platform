angular.module("ngLocale",[],["$provide",function(e){function u(e){e+="";var u=e.indexOf(".");
return-1==u?0:e.length-u-1}function r(e,r){var a=r;void 0===a&&(a=Math.min(u(e),3));
var n=Math.pow(10,a),i=(e*n|0)%n;return{v:a,f:i}}var a={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["am","pm"],
DAY:["dumingu","sigunda-fera","tersa-fera","kuarta-fera","kinta-fera","sesta-fera","sabadu"],
ERANAMES:["Antis di Kristu","Dispos di Kristu"],ERAS:["AK","DK"],FIRSTDAYOFWEEK:0,
MONTH:["Janeru","Febreru","Marsu","Abril","Maiu","Junhu","Julhu","Agostu","Setenbru","Otubru","Nuvenbru","Dizenbru"],
SHORTDAY:["dum","sig","ter","kua","kin","ses","sab"],SHORTMONTH:["Jan","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Otu","Nuv","Diz"],
STANDALONEMONTH:["Janeru","Febreru","Marsu","Abril","Maiu","Junhu","Julhu","Agostu","Setenbru","Otubru","Nuvenbru","Dizenbru"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d 'di' MMMM 'di' y",longDate:"d 'di' MMMM 'di' y",
medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",
shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"CVE",DECIMAL_SEP:",",
GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",
negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",
negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"kea-cv",localeID:"kea_CV",pluralCat:function(e,u){
var n=0|e,i=r(e,u);return 1==n&&0==i.v?a.ONE:a.OTHER}})}]);