angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function n(e,n){var r=n;void 0===r&&(r=Math.min(M(e),3));
var m=Math.pow(10,r),a=(e*m|0)%m;return{v:r,f:a}}var r={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["пе. чо.","па. чо."],
DAY:["Якшанбе","Душанбе","Сешанбе","Чоршанбе","Панҷшанбе","Ҷумъа","Шанбе"],MONTH:["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр"],
SHORTDAY:["Яшб","Дшб","Сшб","Чшб","Пшб","Ҷмъ","Шнб"],SHORTMONTH:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],
fullDate:"EEEE, y MMMM dd",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",
mediumTime:"HH:mm:ss","short":"yy/MM/dd HH:mm",shortDate:"yy/MM/dd",shortTime:"HH:mm"
},NUMBER_FORMATS:{CURRENCY_SYM:"Som",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,
lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{
gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ -",negSuf:"",posPre:"¤ ",
posSuf:""}]},id:"tg",pluralCat:function(e,M){var m=0|e,a=n(e,M);return 1==m&&0==a.v?r.ONE:r.OTHER;
}})}]);