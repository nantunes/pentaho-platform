angular.module("ngLocale",[],["$provide",function(i){function g(i){i+="";var g=i.indexOf(".");
return-1==g?0:i.length-g-1}function m(i,m){var e=m;void 0===e&&(e=Math.min(g(i),3));
var n=Math.pow(10,e),M=(i*n|0)%n;return{v:e,f:M}}var e={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};i.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Aneg 1","Aneg 2","Aneg 3","Aneg 4","Aneg 5","Aneg 6","Aneg 7"],ERANAMES:["BCE","CE"],
ERAS:["BCE","CE"],FIRSTDAYOFWEEK:0,MONTH:["iməg mbegtug","imeg àbùbì","imeg mbəŋchubi","iməg ngwə̀t","iməg fog","iməg ichiibɔd","iməg àdùmbə̀ŋ","iməg ichika","iməg kud","iməg tèsiʼe","iməg zò","iməg krizmed"],
SHORTDAY:["Aneg 1","Aneg 2","Aneg 3","Aneg 4","Aneg 5","Aneg 6","Aneg 7"],SHORTMONTH:["mbegtug","imeg àbùbì","imeg mbəŋchubi","iməg ngwə̀t","iməg fog","iməg ichiibɔd","iməg àdùmbə̀ŋ","iməg ichika","iməg kud","iməg tèsiʼe","iməg zò","iməg krizmed"],
STANDALONEMONTH:["iməg mbegtug","imeg àbùbì","imeg mbəŋchubi","iməg ngwə̀t","iməg fog","iməg ichiibɔd","iməg àdùmbə̀ŋ","iməg ichika","iməg kud","iməg tèsiʼe","iməg zò","iməg krizmed"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, y MMMM dd",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",
mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"mgo-cm",localeID:"mgo_CM",pluralCat:function(i,g){var n=0|i,M=m(i,g);
return 1==n&&0==M.v?e.ONE:e.OTHER}})}]);