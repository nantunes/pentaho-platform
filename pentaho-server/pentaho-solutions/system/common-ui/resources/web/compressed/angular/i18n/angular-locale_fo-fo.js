angular.module("ngLocale",[],["$provide",function(r){function e(r){r+="";var e=r.indexOf(".");
return-1==e?0:r.length-e-1}function a(r,a){var u=a;void 0===u&&(u=Math.min(e(r),3));
var n=Math.pow(10,u),m=(r*n|0)%n;return{v:u,f:m}}var u={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};r.value("$locale",{DATETIME_FORMATS:{AMPMS:["um fyrrapartur","um seinnapartur"],
DAY:["sunnudagur","mánadagur","týsdagur","mikudagur","hósdagur","fríggjadagur","leygardagur"],
ERANAMES:["fyrir Krist","eftir Krist"],ERAS:["f.Kr.","e.Kr."],FIRSTDAYOFWEEK:0,MONTH:["januar","februar","mars","apríl","mai","juni","juli","august","september","oktober","november","desember"],
SHORTDAY:["sun","mán","týs","mik","hós","frí","ley"],SHORTMONTH:["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"],
STANDALONEMONTH:["januar","februar","mars","apríl","mai","juni","juli","august","september","oktober","november","desember"],
WEEKENDRANGE:[5,6],fullDate:"EEEE dd MMMM y",longDate:"d. MMM y",medium:"dd-MM-y HH:mm:ss",
mediumDate:"dd-MM-y",mediumTime:"HH:mm:ss","short":"dd-MM-yy HH:mm",shortDate:"dd-MM-yy",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"kr",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",
posSuf:""}]},id:"fo-fo",localeID:"fo_FO",pluralCat:function(r,e){var n=0|r,m=a(r,e);
return 1==n&&0==m.v?u.ONE:u.OTHER}})}]);