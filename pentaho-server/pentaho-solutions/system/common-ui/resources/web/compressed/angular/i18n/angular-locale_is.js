angular.module("ngLocale",[],["$provide",function(r){function e(r){r+="";var e=r.indexOf(".");
return-1==e?0:r.length-e-1}function a(r,a){var n=a;void 0===n&&(n=Math.min(e(r),3));
var m=Math.pow(10,n),t=(r*m|0)%m;return{v:n,f:t}}function n(r,e){if(0===e)return{
w:0,t:0};for(;e%10===0;)e/=10,r--;return{w:r,t:e}}var m={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};r.value("$locale",{DATETIME_FORMATS:{AMPMS:["f.h.","e.h."],
DAY:["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"],
ERANAMES:["fyrir Krist","eftir Krist"],ERAS:["f.Kr.","e.Kr."],FIRSTDAYOFWEEK:0,MONTH:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"],
SHORTDAY:["sun.","mán.","þri.","mið.","fim.","fös.","lau."],SHORTMONTH:["jan.","feb.","mar.","apr.","maí","jún.","júl.","ágú.","sep.","okt.","nóv.","des."],
STANDALONEMONTH:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d. MMMM y",longDate:"d. MMMM y",medium:"d. MMM y HH:mm:ss",
mediumDate:"d. MMM y",mediumTime:"HH:mm:ss","short":"d.M.y HH:mm",shortDate:"d.M.y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"kr",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"is",localeID:"is",pluralCat:function(r,e){var t=0|r,u=a(r,e),i=n(u.v,u.f);
return 0==i.t&&t%10==1&&t%100!=11||0!=i.t?m.ONE:m.OTHER}})}]);