angular.module("ngLocale",[],["$provide",function(u){function a(u){u+="";var a=u.indexOf(".");
return-1==a?0:u.length-a-1}function t(u,t){var e=t;void 0===e&&(e=Math.min(a(u),3));
var i=Math.pow(10,e),n=(u*i|0)%i;return{v:e,f:n}}var e={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};u.value("$locale",{DATETIME_FORMATS:{AMPMS:["ap.","ip."],
DAY:["sunnuntaina","maanantaina","tiistaina","keskiviikkona","torstaina","perjantaina","lauantaina"],
ERANAMES:["ennen Kristuksen syntymää","jälkeen Kristuksen syntymän"],ERAS:["eKr.","jKr."],
FIRSTDAYOFWEEK:0,MONTH:["tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kesäkuuta","heinäkuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta"],
SHORTDAY:["su","ma","ti","ke","to","pe","la"],SHORTMONTH:["tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kesäkuuta","heinäkuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta"],
STANDALONEMONTH:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],
WEEKENDRANGE:[5,6],fullDate:"cccc d. MMMM y",longDate:"d. MMMM y",medium:"d.M.y H.mm.ss",
mediumDate:"d.M.y",mediumTime:"H.mm.ss","short":"d.M.y H.mm",shortDate:"d.M.y",shortTime:"H.mm"
},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,
lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{
gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"
}]},id:"fi-fi",localeID:"fi_FI",pluralCat:function(u,a){var i=0|u,n=t(u,a);return 1==i&&0==n.v?e.ONE:e.OTHER;
}})}]);