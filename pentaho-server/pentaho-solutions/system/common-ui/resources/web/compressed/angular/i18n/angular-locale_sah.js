angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function n(e,n){var a=n;void 0===a&&(a=Math.min(M(e),3));
var E=Math.pow(10,a),r=(e*E|0)%E;return{v:a,f:r}}var a={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ЭИ","ЭК"],
DAY:["Баскыһыанньа","Бэнидиэлинньик","Оптуорунньук","Сэрэдэ","Чэппиэр","Бээтиҥсэ","Субуота"],
ERANAMES:["б. э. и.","б. э"],ERAS:["б. э. и.","б. э"],FIRSTDAYOFWEEK:0,MONTH:["Тохсунньу","Олунньу","Кулун тутар","Муус устар","Ыам ыйын","Бэс ыйын","От ыйын","Атырдьых ыйын","Балаҕан ыйын","Алтынньы","Сэтинньи","Ахсынньы"],
SHORTDAY:["Бс","Бн","Оп","Сэ","Чп","Бэ","Сб"],SHORTMONTH:["Тохс","Олун","Клн_ттр","Мус_уст","Ыам_йн","Бэс_йн","От_йн","Атрдь_йн","Блҕн_йн","Алт","Сэт","Ахс"],
STANDALONEMONTH:["Тохсунньу","Олунньу","Кулун тутар","Муус устар","Ыам ыйын","Бэс ыйын","От ыйын","Атырдьых ыйын","Балаҕан ыйын","Алтынньы","Сэтинньи","Ахсынньы"],
WEEKENDRANGE:[5,6],fullDate:"y 'сыл' MMMM d 'күнэ', EEEE",longDate:"y, MMMM d",medium:"y, MMM d HH:mm:ss",
mediumDate:"y, MMM d",mediumTime:"HH:mm:ss","short":"yy/M/d HH:mm",shortDate:"yy/M/d",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"руб.",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"sah",localeID:"sah",pluralCat:function(e,M){var E=0|e,r=n(e,M);
return 1==E&&0==r.v?a.ONE:a.OTHER}})}]);