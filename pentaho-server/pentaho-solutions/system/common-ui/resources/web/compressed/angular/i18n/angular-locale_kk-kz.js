angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{
AMPMS:["таңғы","түскі/кешкі"],DAY:["жексенбі","дүйсенбі","сейсенбі","сәрсенбі","бейсенбі","жұма","сенбі"],
ERANAMES:["Біздің заманымызға дейін","Біздің заманымыз"],ERAS:["б.з.д.","б.з."],FIRSTDAYOFWEEK:0,
MONTH:["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"],
SHORTDAY:["Жс","Дс","Сс","Ср","Бс","Жм","Сб"],SHORTMONTH:["қаң.","ақп.","нау.","сәу.","мам.","мау.","шіл.","там.","қыр.","қаз.","қар.","жел."],
STANDALONEMONTH:["Қаңтар","Ақпан","Наурыз","Сәуір","Мамыр","Маусым","Шілде","Тамыз","Қыркүйек","Қазан","Қараша","Желтоқсан"],
WEEKENDRANGE:[5,6],fullDate:"y 'ж'. d MMMM, EEEE",longDate:"y 'ж'. d MMMM",medium:"y 'ж'. dd MMM HH:mm:ss",
mediumDate:"y 'ж'. dd MMM",mediumTime:"HH:mm:ss","short":"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"₸",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"kk-kz",localeID:"kk_KZ",pluralCat:function(e,E){return 1==e?M.ONE:M.OTHER;
}})}]);