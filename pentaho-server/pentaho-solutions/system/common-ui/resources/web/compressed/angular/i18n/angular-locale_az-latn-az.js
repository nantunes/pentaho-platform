angular.module("ngLocale",[],["$provide",function(a){var e={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{
AMPMS:["AM","PM"],DAY:["bazar","bazar ertəsi","çərşənbə axşamı","çərşənbə","cümə axşamı","cümə","şənbə"],
ERANAMES:["eramızdan əvvəl","bizim eramızın"],ERAS:["e.ə.","b.e."],FIRSTDAYOFWEEK:0,
MONTH:["yanvar","fevral","mart","aprel","may","iyun","iyul","avqust","sentyabr","oktyabr","noyabr","dekabr"],
SHORTDAY:["B.","B.E.","Ç.A.","Ç.","C.A.","C.","Ş."],SHORTMONTH:["yan","fev","mar","apr","may","iyn","iyl","avq","sen","okt","noy","dek"],
STANDALONEMONTH:["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"],
WEEKENDRANGE:[5,6],fullDate:"d MMMM y, EEEE",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",
mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"man.",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"az-latn-az",localeID:"az_Latn_AZ",pluralCat:function(a,r){
return 1==a?e.ONE:e.OTHER}})}]);