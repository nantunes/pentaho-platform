angular.module("ngLocale",[],["$provide",function(e){function i(e){e+="";var i=e.indexOf(".");
return-1==i?0:e.length-i-1}function a(e,a){var M=a;void 0===M&&(M=Math.min(i(e),3));
var n=Math.pow(10,M),o=(e*n|0)%n;return{v:M,f:o}}var M={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Lisontfo","uMsombuluko","Lesibili","Lesitsatfu","Lesine","Lesihlanu","uMgcibelo"],
ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:6,MONTH:["Bhimbidvwane","iNdlovana","iNdlovu-lenkhulu","Mabasa","iNkhwekhweti","iNhlaba","Kholwane","iNgci","iNyoni","iMphala","Lweti","iNgongoni"],
SHORTDAY:["Son","Mso","Bil","Tsa","Ne","Hla","Mgc"],SHORTMONTH:["Bhi","Van","Vol","Mab","Nkh","Nhl","Kho","Ngc","Nyo","Mph","Lwe","Ngo"],
WEEKENDRANGE:[5,6],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",
mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"SZL",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",
posSuf:""}]},id:"ss-sz",pluralCat:function(e,i){var n=0|e,o=a(e,i);return 1==n&&0==o.v?M.ONE:M.OTHER;
}})}]);