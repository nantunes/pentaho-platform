angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");
return-1==a?0:e.length-a-1}function n(e,n){var E=n;void 0===E&&(E=Math.min(a(e),3));
var r=Math.pow(10,E),m=(e*r|0)%r;return{v:E,f:m}}var E={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["上午","下午"],
DAY:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],ERANAMES:["西元前","西元"],ERAS:["西元前","西元"],
FIRSTDAYOFWEEK:0,MONTH:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
SHORTDAY:["週日","週一","週二","週三","週四","週五","週六"],SHORTMONTH:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
STANDALONEMONTH:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
WEEKENDRANGE:[5,6],fullDate:"y年M月d日 EEEE",longDate:"y年M月d日",medium:"y年M月d日 ah:mm:ss",
mediumDate:"y年M月d日",mediumTime:"ah:mm:ss","short":"y/M/d ah:mm",shortDate:"y/M/d",
shortTime:"ah:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"yue",localeID:"yue",pluralCat:function(e,a){var r=0|e,m=n(e,a);return 1==r&&0==m.v?E.ONE:E.OTHER;
}})}]);