angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function n(e,n){var E=n;void 0===E&&(E=Math.min(M(e),3));
var r=Math.pow(10,E),a=(e*r|0)%r;return{v:E,f:a}}var E={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["לפנה״צ","אחה״צ"],
DAY:["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","יום שבת"],
ERANAMES:["לפני הספירה","לספירה"],ERAS:["לפנה״ס","לספירה"],FIRSTDAYOFWEEK:6,MONTH:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],
SHORTDAY:["יום א׳","יום ב׳","יום ג׳","יום ד׳","יום ה׳","יום ו׳","שבת"],SHORTMONTH:["ינו׳","פבר׳","מרץ","אפר׳","מאי","יוני","יולי","אוג׳","ספט׳","אוק׳","נוב׳","דצמ׳"],
STANDALONEMONTH:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],
WEEKENDRANGE:[4,5],fullDate:"EEEE, d בMMMM y",longDate:"d בMMMM y",medium:"d בMMM y H:mm:ss",
mediumDate:"d בMMM y",mediumTime:"H:mm:ss","short":"d.M.y H:mm",shortDate:"d.M.y",
shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"₪",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"iw",localeID:"iw",pluralCat:function(e,M){var r=0|e,a=n(e,M);
return 1==r&&0==a.v?E.ONE:2==r&&0==a.v?E.TWO:0==a.v&&(0>e||e>10)&&e%10==0?E.MANY:E.OTHER;
}})}]);