angular.module("ngLocale",[],["$provide",function(a){function M(a){a+="";var M=a.indexOf(".");
return-1==M?0:a.length-M-1}function w(a,w){var n=w;void 0===n&&(n=Math.min(M(a),3));
var i=Math.pow(10,n),e=(a*i|0)%i;return{v:n,f:e}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["Ĩyakwakya","Ĩyawĩoo"],
DAY:["Wa kyumwa","Wa kwambĩlĩlya","Wa kelĩ","Wa katatũ","Wa kana","Wa katano","Wa thanthatũ"],
ERANAMES:["Mbee wa Yesũ","Ĩtina wa Yesũ"],ERAS:["MY","IY"],FIRSTDAYOFWEEK:0,MONTH:["Mwai wa mbee","Mwai wa kelĩ","Mwai wa katatũ","Mwai wa kana","Mwai wa katano","Mwai wa thanthatũ","Mwai wa muonza","Mwai wa nyaanya","Mwai wa kenda","Mwai wa ĩkumi","Mwai wa ĩkumi na ĩmwe","Mwai wa ĩkumi na ilĩ"],
SHORTDAY:["Wky","Wkw","Wkl","Wtũ","Wkn","Wtn","Wth"],SHORTMONTH:["Mbe","Kel","Ktũ","Kan","Ktn","Tha","Moo","Nya","Knd","Ĩku","Ĩkm","Ĩkl"],
STANDALONEMONTH:["Mwai wa mbee","Mwai wa kelĩ","Mwai wa katatũ","Mwai wa kana","Mwai wa katano","Mwai wa thanthatũ","Mwai wa muonza","Mwai wa nyaanya","Mwai wa kenda","Mwai wa ĩkumi","Mwai wa ĩkumi na ĩmwe","Mwai wa ĩkumi na ilĩ"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"kam",localeID:"kam",pluralCat:function(a,M){var i=0|a,e=w(a,M);return 1==i&&0==e.v?n.ONE:n.OTHER;
}})}]);