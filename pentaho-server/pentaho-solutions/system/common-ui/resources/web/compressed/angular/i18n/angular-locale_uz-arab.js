angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{
AMPMS:["AM","PM"],DAY:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],
ERANAMES:["ق.م.","م."],ERAS:["ق.م.","م."],FIRSTDAYOFWEEK:5,MONTH:["جنوری","فبروری","مارچ","اپریل","می","جون","جولای","اگست","سپتمبر","اکتوبر","نومبر","دسمبر"],
SHORTDAY:["ی.","د.","س.","چ.","پ.","ج.","ش."],SHORTMONTH:["جنو","فبر","مار","اپر","مـی","جون","جول","اگس","سپت","اکت","نوم","دسم"],
STANDALONEMONTH:["جنوری","فبروری","مارچ","اپریل","می","جون","جولای","اگست","سپتمبر","اکتوبر","نومبر","دسمبر"],
WEEKENDRANGE:[3,4],fullDate:"y نچی ییل d نچی MMMM EEEE کونی",longDate:"d نچی MMMM y",
medium:"d MMM y H:mm:ss",mediumDate:"d MMM y",mediumTime:"H:mm:ss","short":"y/M/d H:mm",
shortDate:"y/M/d",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Af.",DECIMAL_SEP:"٫",
GROUP_SEP:"٬",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",
negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",
negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"uz-arab",localeID:"uz_Arab",pluralCat:function(e,E){
return 1==e?M.ONE:M.OTHER}})}]);