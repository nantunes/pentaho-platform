angular.module("ngLocale",[],["$provide",function(e){var E={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{
AMPMS:["오전","오후"],DAY:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],ERANAMES:["기원전","서기"],
ERAS:["기원전","서기"],FIRSTDAYOFWEEK:6,MONTH:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
SHORTDAY:["일","월","화","수","목","금","토"],SHORTMONTH:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
STANDALONEMONTH:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
WEEKENDRANGE:[5,6],fullDate:"y년 M월 d일 EEEE",longDate:"y년 M월 d일",medium:"y. M. d. a h:mm:ss",
mediumDate:"y. M. d.",mediumTime:"a h:mm:ss","short":"yy. M. d. a h:mm",shortDate:"yy. M. d.",
shortTime:"a h:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"₩",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"ko",localeID:"ko",pluralCat:function(e,a){return E.OTHER}})}]);