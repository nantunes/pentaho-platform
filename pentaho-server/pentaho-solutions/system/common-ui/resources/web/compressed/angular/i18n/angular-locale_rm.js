angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");
return-1==r?0:e.length-r-1}function a(e,a){var m=a;void 0===m&&(m=Math.min(r(e),3));
var n=Math.pow(10,m),t=(e*n|0)%n;return{v:m,f:t}}var m={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["am","sm"],
DAY:["dumengia","glindesdi","mardi","mesemna","gievgia","venderdi","sonda"],ERANAMES:["avant Cristus","suenter Cristus"],
ERAS:["av. Cr.","s. Cr."],FIRSTDAYOFWEEK:0,MONTH:["schaner","favrer","mars","avrigl","matg","zercladur","fanadur","avust","settember","october","november","december"],
SHORTDAY:["du","gli","ma","me","gie","ve","so"],SHORTMONTH:["schan.","favr.","mars","avr.","matg","zercl.","fan.","avust","sett.","oct.","nov.","dec."],
STANDALONEMONTH:["schaner","favrer","mars","avrigl","matg","zercladur","fanadur","avust","settember","october","november","december"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, 'ils' d 'da' MMMM y",longDate:"d 'da' MMMM y",
medium:"dd-MM-y HH:mm:ss",mediumDate:"dd-MM-y",mediumTime:"HH:mm:ss","short":"dd-MM-yy HH:mm",
shortDate:"dd-MM-yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"CHF",DECIMAL_SEP:".",
GROUP_SEP:"’",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",
negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",
negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"rm",localeID:"rm",pluralCat:function(e,r){
var n=0|e,t=a(e,r);return 1==n&&0==t.v?m.ONE:m.OTHER}})}]);