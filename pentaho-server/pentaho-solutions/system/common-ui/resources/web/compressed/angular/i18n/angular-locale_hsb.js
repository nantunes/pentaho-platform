angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");
return-1==a?0:e.length-a-1}function r(e,r){var n=r;void 0===n&&(n=Math.min(a(e),3));
var o=Math.pow(10,n),m=(e*o|0)%o;return{v:n,f:m}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["dopołdnja","popołdnju"],
DAY:["njedźela","póndźela","wutora","srjeda","štwórtk","pjatk","sobota"],ERANAMES:["před Chrystowym narodźenjom","po Chrystowym narodźenju"],
ERAS:["př.Chr.n.","po Chr.n."],FIRSTDAYOFWEEK:0,MONTH:["januara","februara","měrca","apryla","meje","junija","julija","awgusta","septembra","oktobra","nowembra","decembra"],
SHORTDAY:["nje","pón","wut","srj","štw","pja","sob"],SHORTMONTH:["jan.","feb.","měr.","apr.","mej.","jun.","jul.","awg.","sep.","okt.","now.","dec."],
STANDALONEMONTH:["januar","februar","měrc","apryl","meja","junij","julij","awgust","september","oktober","nowember","december"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d. MMMM y",longDate:"d. MMMM y",medium:"d.M.y H:mm:ss",
mediumDate:"d.M.y",mediumTime:"H:mm:ss","short":"d.M.yy H:mm 'hodź'.",shortDate:"d.M.yy",
shortTime:"H:mm 'hodź'."},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"hsb",localeID:"hsb",pluralCat:function(e,a){var o=0|e,m=r(e,a);
return 1==o&&0==m.v?n.ONE:n.OTHER}})}]);