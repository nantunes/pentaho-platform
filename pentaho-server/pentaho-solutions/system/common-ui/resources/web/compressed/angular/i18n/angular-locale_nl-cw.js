angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");
return-1==r?0:e.length-r-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(r(e),3));
var i=Math.pow(10,n),m=(e*i|0)%i;return{v:n,f:m}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["a.m.","p.m."],
DAY:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],ERANAMES:["voor Christus","na Christus"],
ERAS:["v.Chr.","n.Chr."],FIRSTDAYOFWEEK:0,MONTH:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],
SHORTDAY:["zo","ma","di","wo","do","vr","za"],SHORTMONTH:["jan.","feb.","mrt.","apr.","mei","jun.","jul.","aug.","sep.","okt.","nov.","dec."],
STANDALONEMONTH:["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",
mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd-MM-yy HH:mm",shortDate:"dd-MM-yy",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"NAf.",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ -",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"nl-cw",localeID:"nl_CW",pluralCat:function(e,r){var i=0|e,m=a(e,r);
return 1==i&&0==m.v?n.ONE:n.OTHER}})}]);