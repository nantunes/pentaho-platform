angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");
return-1==e?0:a.length-e-1}function i(a,i){var M=i;void 0===M&&(M=Math.min(e(a),3));
var r=Math.pow(10,M),w=(a*r|0)%r;return{v:M,f:w}}var M={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["KI","UT"],
DAY:["Kiumia","Njumatatu","Njumaine","Njumatano","Aramithi","Njumaa","NJumamothii"],
ERANAMES:["Mbere ya Kristo","Thutha wa Kristo"],ERAS:["MK","TK"],FIRSTDAYOFWEEK:0,
MONTH:["Mweri wa mbere","Mweri wa kaĩri","Mweri wa kathatũ","Mweri wa kana","Mweri wa gatano","Mweri wa gatantatũ","Mweri wa mũgwanja","Mweri wa kanana","Mweri wa kenda","Mweri wa ikũmi","Mweri wa ikũmi na ũmwe","Mweri wa ikũmi na Kaĩrĩ"],
SHORTDAY:["Kma","Tat","Ine","Tan","Arm","Maa","NMM"],SHORTMONTH:["Mbe","Kai","Kat","Kan","Gat","Gan","Mug","Knn","Ken","Iku","Imw","Igi"],
STANDALONEMONTH:["Mweri wa mbere","Mweri wa kaĩri","Mweri wa kathatũ","Mweri wa kana","Mweri wa gatano","Mweri wa gatantatũ","Mweri wa mũgwanja","Mweri wa kanana","Mweri wa kenda","Mweri wa ikũmi","Mweri wa ikũmi na ũmwe","Mweri wa ikũmi na Kaĩrĩ"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"ebu",localeID:"ebu",pluralCat:function(a,e){var r=0|a,w=i(a,e);return 1==r&&0==w.v?M.ONE:M.OTHER;
}})}]);