angular.module("ngLocale",[],["$provide",function(a){var e={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{
AMPMS:["TO","TK"],DAY:["yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"],
ERANAMES:["M.A.","E"],ERAS:["M.A.","E"],FIRSTDAYOFWEEK:0,MONTH:["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"],
SHORTDAY:["Yaksh","Dush","Sesh","Chor","Pay","Jum","Shan"],SHORTMONTH:["Yanv","Fev","Mar","Apr","May","Iyun","Iyul","Avg","Sen","Okt","Noya","Dek"],
STANDALONEMONTH:["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, y MMMM dd",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",
mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"yy/MM/dd HH:mm",shortDate:"yy/MM/dd",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"soʼm",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"uz",localeID:"uz",pluralCat:function(a,r){return 1==a?e.ONE:e.OTHER;
}})}]);