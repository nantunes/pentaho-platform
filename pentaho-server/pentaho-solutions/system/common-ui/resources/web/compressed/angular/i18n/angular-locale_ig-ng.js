angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");
return-1==a?0:e.length-a-1}function M(e,M){var r=M;void 0===r&&(r=Math.min(a(e),3));
var n=Math.pow(10,r),i=(e*n|0)%n;return{v:r,f:i}}var r={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["A.M.","P.M."],
DAY:["Mbọsị Ụka","Mọnde","Tiuzdee","Wenezdee","Tọọzdee","Fraịdee","Satọdee"],ERANAMES:["Tupu Kristi","Afọ Kristi"],
ERAS:["T.K.","A.K."],FIRSTDAYOFWEEK:0,MONTH:["Jenụwarị","Febrụwarị","Maachị","Eprel","Mee","Juun","Julaị","Ọgọọst","Septemba","Ọktoba","Novemba","Disemba"],
SHORTDAY:["Ụka","Mọn","Tiu","Wen","Tọọ","Fraị","Sat"],SHORTMONTH:["Jen","Feb","Maa","Epr","Mee","Juu","Jul","Ọgọ","Sep","Ọkt","Nov","Dis"],
STANDALONEMONTH:["Jenụwarị","Febrụwarị","Maachị","Eprel","Mee","Juun","Julaị","Ọgọọst","Septemba","Ọktoba","Novemba","Disemba"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"₦",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"ig-ng",localeID:"ig_NG",pluralCat:function(e,a){var n=0|e,i=M(e,a);
return 1==n&&0==i.v?r.ONE:r.OTHER}})}]);