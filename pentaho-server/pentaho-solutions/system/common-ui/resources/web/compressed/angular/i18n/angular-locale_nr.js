angular.module("ngLocale",[],["$provide",function(e){function i(e){e+="";var i=e.indexOf(".");
return-1==i?0:e.length-i-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(i(e),3));
var M=Math.pow(10,n),r=(e*M|0)%M;return{v:n,f:r}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["uSonto","uMvulo","uLesibili","Lesithathu","uLesine","ngoLesihlanu","umGqibelo"],
ERANAMES:["BC","AD"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["Janabari","uFeberbari","uMatjhi","u-Apreli","Meyi","Juni","Julayi","Arhostosi","Septemba","Oktoba","Usinyikhaba","Disemba"],
SHORTDAY:["Son","Mvu","Bil","Tha","Ne","Hla","Gqi"],SHORTMONTH:["Jan","Feb","Mat","Apr","Mey","Jun","Jul","Arh","Sep","Okt","Usi","Dis"],
WEEKENDRANGE:[5,6],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",
mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"R",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",
posSuf:""}]},id:"nr",pluralCat:function(e,i){var M=0|e,r=a(e,i);return 1==M&&0==r.v?n.ONE:n.OTHER;
}})}]);