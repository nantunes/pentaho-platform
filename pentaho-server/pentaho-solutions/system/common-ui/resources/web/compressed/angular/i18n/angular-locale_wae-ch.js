angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");
return-1==r?0:e.length-r-1}function n(e,n){var t=n;void 0===t&&(t=Math.min(r(e),3));
var i=Math.pow(10,t),M=(e*i|0)%i;return{v:t,f:M}}var t={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Sunntag","Mäntag","Zištag","Mittwuč","Fróntag","Fritag","Samštag"],ERANAMES:["v. Chr.","n. Chr"],
ERAS:["v. Chr.","n. Chr"],FIRSTDAYOFWEEK:0,MONTH:["Jenner","Hornig","Märze","Abrille","Meije","Bráčet","Heiwet","Öigšte","Herbštmánet","Wímánet","Wintermánet","Chrištmánet"],
SHORTDAY:["Sun","Män","Ziš","Mit","Fró","Fri","Sam"],SHORTMONTH:["Jen","Hor","Mär","Abr","Mei","Brá","Hei","Öig","Her","Wím","Win","Chr"],
STANDALONEMONTH:["Jenner","Hornig","Märze","Abrille","Meije","Bráčet","Heiwet","Öigšte","Herbštmánet","Wímánet","Wintermánet","Chrištmánet"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d. MMMM y",longDate:"d. MMMM y",medium:"d. MMM y HH:mm:ss",
mediumDate:"d. MMM y",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"CHF",DECIMAL_SEP:",",GROUP_SEP:"’",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"wae-ch",localeID:"wae_CH",pluralCat:function(e,r){var i=0|e,M=n(e,r);
return 1==i&&0==M.v?t.ONE:t.OTHER}})}]);