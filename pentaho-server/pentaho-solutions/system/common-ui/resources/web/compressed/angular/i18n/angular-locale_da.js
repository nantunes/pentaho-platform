angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");
return-1==r?0:e.length-r-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(r(e),3));
var t=Math.pow(10,n),m=(e*t|0)%t;return{v:n,f:m}}function n(e,r){if(0===r)return{
w:0,t:0};for(;r%10===0;)r/=10,e--;return{w:e,t:r}}var t={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],ERANAMES:["f.Kr.","e.Kr."],
ERAS:["f.Kr.","e.Kr."],FIRSTDAYOFWEEK:0,MONTH:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],
SHORTDAY:["søn.","man.","tir.","ons.","tor.","fre.","lør."],SHORTMONTH:["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],
STANDALONEMONTH:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],
WEEKENDRANGE:[5,6],fullDate:"EEEE 'den' d. MMMM y",longDate:"d. MMMM y",medium:"d. MMM y HH.mm.ss",
mediumDate:"d. MMM y",mediumTime:"HH.mm.ss","short":"dd/MM/y HH.mm",shortDate:"dd/MM/y",
shortTime:"HH.mm"},NUMBER_FORMATS:{CURRENCY_SYM:"kr",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"da",localeID:"da",pluralCat:function(e,r){var m=0|e,o=a(e,r),u=n(o.v,o.f);
return 1==e||0!=u.t&&(0==m||1==m)?t.ONE:t.OTHER}})}]);