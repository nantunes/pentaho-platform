angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");
return-1==a?0:e.length-a-1}function n(e,n){var M=n;void 0===M&&(M=Math.min(a(e),3));
var o=Math.pow(10,M),r=(e*o|0)%o;return{v:M,f:r}}var M={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Sontaha","Mmantaha","Labobedi","Laboraru","Labone","Labohlane","Moqebelo"],
MONTH:["Phesekgong","Hlakola","Hlakubele","Mmese","Motsheanong","Phupjane","Phupu","Phata","Leotshe","Mphalane","Pundungwane","Tshitwe"],
SHORTDAY:["Son","Mma","Bed","Rar","Ne","Hla","Moq"],SHORTMONTH:["Phe","Kol","Ube","Mme","Mot","Jan","Upu","Pha","Leo","Mph","Pun","Tsh"],
fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",
mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"
},NUMBER_FORMATS:{CURRENCY_SYM:"R",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,
lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{
gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""
}]},id:"st-za",pluralCat:function(e,a){var o=0|e,r=n(e,a);return 1==o&&0==r.v?M.ONE:M.OTHER;
}})}]);