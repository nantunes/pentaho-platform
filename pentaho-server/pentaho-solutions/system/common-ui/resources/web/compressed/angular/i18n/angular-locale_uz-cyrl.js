angular.module("ngLocale",[],["$provide",function(M){var e={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};M.value("$locale",{DATETIME_FORMATS:{
AMPMS:["AM","PM"],DAY:["якшанба","душанба","сешанба","чоршанба","пайшанба","жума","шанба"],
ERANAMES:["М.А.","Э"],ERAS:["М.А.","Э"],FIRSTDAYOFWEEK:0,MONTH:["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр"],
SHORTDAY:["Якш","Душ","Сеш","Чор","Пай","Жум","Шан"],SHORTMONTH:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],
STANDALONEMONTH:["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, y MMMM dd",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",
mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"yy/MM/dd HH:mm",shortDate:"yy/MM/dd",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"soʼm",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"uz-cyrl",localeID:"uz_Cyrl",pluralCat:function(M,E){
return 1==M?e.ONE:e.OTHER}})}]);