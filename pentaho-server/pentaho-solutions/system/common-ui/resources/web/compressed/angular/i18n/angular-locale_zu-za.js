angular.module("ngLocale",[],["$provide",function(a){var e={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{
AMPMS:["Ekuseni","Ntambama"],DAY:["Sonto","Msombuluko","Lwesibili","Lwesithathu","Lwesine","Lwesihlanu","Mgqibelo"],
ERANAMES:["BC","AD"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["Januwari","Februwari","Mashi","Apreli","Meyi","Juni","Julayi","Agasti","Septhemba","Okthoba","Novemba","Disemba"],
SHORTDAY:["Son","Mso","Bil","Tha","Sin","Hla","Mgq"],SHORTMONTH:["Jan","Feb","Mas","Apr","Mey","Jun","Jul","Aga","Sep","Okt","Nov","Dis"],
STANDALONEMONTH:["Januwari","Februwari","Mashi","Apreli","Meyi","Juni","Julayi","Agasti","Septhemba","Okthoba","Novemba","Disemba"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",
mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"R",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"zu-za",localeID:"zu_ZA",pluralCat:function(a,i){var M=0|a;return 0==M||1==a?e.ONE:e.OTHER;
}})}]);