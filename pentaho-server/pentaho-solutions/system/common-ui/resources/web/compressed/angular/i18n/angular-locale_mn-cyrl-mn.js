angular.module("ngLocale",[],["$provide",function(e){var E={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{
AMPMS:["ҮӨ","ҮХ"],DAY:["ням","даваа","мягмар","лхагва","пүрэв","баасан","бямба"],
ERANAMES:["манай эриний өмнөх","манай эриний"],ERAS:["МЭӨ","МЭ"],FIRSTDAYOFWEEK:0,
MONTH:["Нэгдүгээр сар","Хоёрдугаар сар","Гуравдугаар сар","Дөрөвдүгээр сар","Тавдугаар сар","Зургадугаар сар","Долдугаар сар","Наймдугаар сар","Есдүгээр сар","Аравдугаар сар","Арван нэгдүгээр сар","Арван хоёрдугаар сар"],
SHORTDAY:["Ня","Да","Мя","Лх","Пү","Ба","Бя"],SHORTMONTH:["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар"],
STANDALONEMONTH:["Нэгдүгээр сар","Хоёрдугаар сар","Гуравдугаар сар","Дөрөвдүгээр сар","Тавдугаар сар","Зургадугаар сар","Долдугаар сар","Наймдугаар сар","Есдүгээр сар","Аравдугаар сар","Арван нэгдүгээр сар","Арван хоёрдугаар сар"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, y 'оны' MM 'сарын' d",longDate:"y 'оны' MM 'сарын' d",
medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",
shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"₮",DECIMAL_SEP:".",
GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",
negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",
negSuf:"",posPre:"¤ ",posSuf:""}]},id:"mn-cyrl-mn",localeID:"mn_Cyrl_MN",pluralCat:function(e,M){
return 1==e?E.ONE:E.OTHER}})}]);