angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");
return-1==a?0:e.length-a-1}function r(e,r){var o=r;void 0===o&&(o=Math.min(a(e),3));
var n=Math.pow(10,o),t=(e*n|0)%n;return{v:o,f:t}}var o={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["dopoludnia","odpoludnia"],
DAY:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],ERANAMES:["pred Kristom","po Kristovi"],
ERAS:["pred Kr.","po Kr."],FIRSTDAYOFWEEK:0,MONTH:["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra"],
SHORTDAY:["ne","po","ut","st","št","pi","so"],SHORTMONTH:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],
STANDALONEMONTH:["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d. MMMM y",longDate:"d. MMMM y",medium:"d. M. y H:mm:ss",
mediumDate:"d. M. y",mediumTime:"H:mm:ss","short":"dd.MM.yy H:mm",shortDate:"dd.MM.yy",
shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"sk",localeID:"sk",pluralCat:function(e,a){var n=0|e,t=r(e,a);
return 1==n&&0==t.v?o.ONE:n>=2&&4>=n&&0==t.v?o.FEW:0!=t.v?o.MANY:o.OTHER}})}]);