angular.module("ngLocale",[],["$provide",function(e){function i(e){e+="";var i=e.indexOf(".");
return-1==i?0:e.length-i-1}function a(e,a){var r=a;void 0===r&&(r=Math.min(i(e),3));
var n=Math.pow(10,r),t=(e*n|0)%n;return{v:r,f:t}}var r={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],ERANAMES:["p.n.e.","n.e."],
ERAS:["p.n.e.","n.e."],FIRSTDAYOFWEEK:0,MONTH:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"],
SHORTDAY:["niedz.","pon.","wt.","śr.","czw.","pt.","sob."],SHORTMONTH:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],
STANDALONEMONTH:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"dd.MM.y HH:mm:ss",
mediumDate:"dd.MM.y",mediumTime:"HH:mm:ss","short":"dd.MM.y HH:mm",shortDate:"dd.MM.y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"zł",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"pl-pl",localeID:"pl_PL",pluralCat:function(e,i){var n=0|e,t=a(e,i);
return 1==n&&0==t.v?r.ONE:0==t.v&&n%10>=2&&4>=n%10&&(12>n%100||n%100>14)?r.FEW:0==t.v&&1!=n&&n%10>=0&&1>=n%10||0==t.v&&n%10>=5&&9>=n%10||0==t.v&&n%100>=12&&14>=n%100?r.MANY:r.OTHER;
}})}]);