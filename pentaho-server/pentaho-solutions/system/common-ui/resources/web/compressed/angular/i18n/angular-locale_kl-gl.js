angular.module("ngLocale",[],["$provide",function(a){function n(a){a+="";var n=a.indexOf(".");
return-1==n?0:a.length-n-1}function e(a,e){var i=e;void 0===i&&(i=Math.min(n(a),3));
var r=Math.pow(10,i),u=(a*r|0)%r;return{v:i,f:u}}var i={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["ulloqeqqata-tungaa","ulloqeqqata-kingorna"],
DAY:["sabaat","ataasinngorneq","marlunngorneq","pingasunngorneq","sisamanngorneq","tallimanngorneq","arfininngorneq"],
ERANAMES:["Kristusip inunngornerata siornagut","Kristusip inunngornerata kingornagut"],
ERAS:["Kr.in.si.","Kr.in.king."],FIRSTDAYOFWEEK:0,MONTH:["januari","februari","martsi","aprili","maji","juni","juli","augustusi","septemberi","oktoberi","novemberi","decemberi"],
SHORTDAY:["sab","ata","mar","pin","sis","tal","arf"],SHORTMONTH:["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],
STANDALONEMONTH:["januari","februari","martsi","aprili","maji","juni","juli","augustusi","septemberi","oktoberi","novemberi","decemberi"],
WEEKENDRANGE:[5,6],fullDate:"EEEE dd MMMM y",longDate:"dd MMMM y",medium:"MMM dd, y h:mm:ss a",
mediumDate:"MMM dd, y",mediumTime:"h:mm:ss a","short":"y-MM-dd h:mm a",shortDate:"y-MM-dd",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"kr",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",
posSuf:""}]},id:"kl-gl",localeID:"kl_GL",pluralCat:function(a,n){var r=0|a,u=e(a,n);
return 1==r&&0==u.v?i.ONE:i.OTHER}})}]);