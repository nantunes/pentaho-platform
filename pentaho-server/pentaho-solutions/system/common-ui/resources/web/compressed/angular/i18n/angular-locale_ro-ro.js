angular.module("ngLocale",[],["$provide",function(e){function i(e){e+="";var i=e.indexOf(".");
return-1==i?0:e.length-i-1}function r(e,r){var a=r;void 0===a&&(a=Math.min(i(e),3));
var m=Math.pow(10,a),n=(e*m|0)%m;return{v:a,f:n}}var a={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["a.m.","p.m."],
DAY:["duminică","luni","marți","miercuri","joi","vineri","sâmbătă"],ERANAMES:["înainte de Hristos","după Hristos"],
ERAS:["î.Hr.","d.Hr."],FIRSTDAYOFWEEK:0,MONTH:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"],
SHORTDAY:["Dum","Lun","Mar","Mie","Joi","Vin","Sâm"],SHORTMONTH:["ian.","feb.","mar.","apr.","mai","iun.","iul.","aug.","sept.","oct.","nov.","dec."],
STANDALONEMONTH:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",
mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd.MM.y HH:mm",shortDate:"dd.MM.y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"RON",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"ro-ro",localeID:"ro_RO",pluralCat:function(e,i){var m=0|e,n=r(e,i);
return 1==m&&0==n.v?a.ONE:0!=n.v||0==e||1!=e&&e%100>=1&&19>=e%100?a.FEW:a.OTHER}});
}]);