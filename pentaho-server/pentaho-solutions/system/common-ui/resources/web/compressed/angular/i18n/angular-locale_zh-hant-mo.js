angular.module("ngLocale",[],["$provide",function(e){var E={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{
AMPMS:["上午","下午"],DAY:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],ERANAMES:["公元前","公元"],
ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
SHORTDAY:["週日","週一","週二","週三","週四","週五","週六"],SHORTMONTH:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
STANDALONEMONTH:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
WEEKENDRANGE:[5,6],fullDate:"y年M月d日EEEE",longDate:"y年M月d日",medium:"y年M月d日 ah:mm:ss",
mediumDate:"y年M月d日",mediumTime:"ah:mm:ss","short":"d/M/yy ah:mm",shortDate:"d/M/yy",
shortTime:"ah:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"MOP",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"zh-hant-mo",localeID:"zh_Hant_MO",pluralCat:function(e,a){return E.OTHER;
}})}]);