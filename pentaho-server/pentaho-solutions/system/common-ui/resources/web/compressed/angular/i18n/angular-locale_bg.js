angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{
AMPMS:["пр.об.","сл.об."],DAY:["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"],
ERANAMES:["преди Христа","след Христа"],ERAS:["пр.Хр.","сл.Хр."],FIRSTDAYOFWEEK:0,
MONTH:["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември"],
SHORTDAY:["нд","пн","вт","ср","чт","пт","сб"],SHORTMONTH:["ян.","февр.","март","апр.","май","юни","юли","авг.","септ.","окт.","ноем.","дек."],
STANDALONEMONTH:["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y 'г'.",longDate:"d MMMM y 'г'.",medium:"d.MM.y 'г'. H:mm:ss",
mediumDate:"d.MM.y 'г'.",mediumTime:"H:mm:ss","short":"d.MM.yy 'г'. H:mm",shortDate:"d.MM.yy 'г'.",
shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"lev",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"bg",localeID:"bg",pluralCat:function(e,E){return 1==e?M.ONE:M.OTHER;
}})}]);