angular.module("ngLocale",[],["$provide",function(a){function i(a){a+="";var i=a.indexOf(".");
return-1==i?0:a.length-i-1}function u(a,u){var e=u;void 0===e&&(e=Math.min(i(a),3));
var r=Math.pow(10,e),m=(a*r|0)%r;return{v:e,f:m}}var e={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["saaku","carra"],
DAY:["Acaada","Etleeni","Talaata","Arbaqa","Kamiisi","Gumqata","Sabti"],ERANAMES:["Yaasuusuk Duma","Yaasuusuk Wadir"],
ERAS:["Yaasuusuk Duma","Yaasuusuk Wadir"],FIRSTDAYOFWEEK:5,MONTH:["Qunxa Garablu","Kudo","Ciggilta Kudo","Agda Baxis","Caxah Alsa","Qasa Dirri","Qado Dirri","Leqeeni","Waysu","Diteli","Ximoli","Kaxxa Garablu"],
SHORTDAY:["Aca","Etl","Tal","Arb","Kam","Gum","Sab"],SHORTMONTH:["Qun","Nah","Cig","Agd","Cax","Qas","Qad","Leq","Way","Dit","Xim","Kax"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM dd, y",longDate:"dd MMMM y",medium:"dd-MMM-y h:mm:ss a",
mediumDate:"dd-MMM-y",mediumTime:"h:mm:ss a","short":"dd/MM/yy h:mm a",shortDate:"dd/MM/yy",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Fdj",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",
posSuf:""}]},id:"aa-dj",pluralCat:function(a,i){var r=0|a,m=u(a,i);return 1==r&&0==m.v?e.ONE:e.OTHER;
}})}]);