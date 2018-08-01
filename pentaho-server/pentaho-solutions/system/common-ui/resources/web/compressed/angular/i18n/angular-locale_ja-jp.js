angular.module("ngLocale",[],["$provide",function(e){var E={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{
AMPMS:["午前","午後"],DAY:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],ERANAMES:["紀元前","西暦"],
ERAS:["紀元前","西暦"],FIRSTDAYOFWEEK:6,MONTH:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
SHORTDAY:["日","月","火","水","木","金","土"],SHORTMONTH:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
STANDALONEMONTH:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
WEEKENDRANGE:[5,6],fullDate:"y年M月d日EEEE",longDate:"y年M月d日",medium:"y/MM/dd H:mm:ss",
mediumDate:"y/MM/dd",mediumTime:"H:mm:ss","short":"y/MM/dd H:mm",shortDate:"y/MM/dd",
shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"¥",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"ja-jp",localeID:"ja_JP",pluralCat:function(e,m){return E.OTHER}});
}]);