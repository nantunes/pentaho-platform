angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");
return-1==a?0:e.length-a-1}function i(e,i){var M=i;void 0===M&&(M=Math.min(a(e),3));
var n=Math.pow(10,M),r=(e*n|0)%n;return{v:M,f:r}}var M={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Cawe","Mvulo","Lwesibini","Lwesithathu","Lwesine","Lwesihlanu","Mgqibelo"],
MONTH:["Janyuwari","Februwari","Matshi","Epreli","Meyi","Juni","Julayi","Agasti","Septemba","Okthoba","Novemba","Disemba"],
SHORTDAY:["Caw","Mvu","Bin","Tha","Sin","Hla","Mgq"],SHORTMONTH:["Jan","Feb","Mat","Epr","Mey","Jun","Jul","Aga","Sep","Okt","Nov","Dis"],
fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",
mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"
},NUMBER_FORMATS:{CURRENCY_SYM:"R",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,
lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{
gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""
}]},id:"xh-za",pluralCat:function(e,a){var n=0|e,r=i(e,a);return 1==n&&0==r.v?M.ONE:M.OTHER;
}})}]);