angular.module("ngLocale",[],["$provide",function(a){function i(a){a+="";var i=a.indexOf(".");
return-1==i?0:a.length-i-1}function u(a,u){var r=u;void 0===r&&(r=Math.min(i(a),3));
var e=Math.pow(10,r),m=(a*e|0)%e;return{v:r,f:m}}var r={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["saaku","carra"],
DAY:["Acaada","Etleeni","Talaata","Arbaqa","Kamiisi","Gumqata","Sabti"],ERANAMES:["Yaasuusuk Duma","Yaasuusuk Wadir"],
ERAS:["Yaasuusuk Duma","Yaasuusuk Wadir"],FIRSTDAYOFWEEK:0,MONTH:["Qunxa Garablu","Kudo","Ciggilta Kudo","Agda Baxis","Caxah Alsa","Qasa Dirri","Qado Dirri","Liiqen","Waysu","Diteli","Ximoli","Kaxxa Garablu"],
SHORTDAY:["Aca","Etl","Tal","Arb","Kam","Gum","Sab"],SHORTMONTH:["Qun","Nah","Cig","Agd","Cax","Qas","Qad","Leq","Way","Dit","Xim","Kax"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM dd, y",longDate:"dd MMMM y",medium:"dd-MMM-y h:mm:ss a",
mediumDate:"dd-MMM-y",mediumTime:"h:mm:ss a","short":"dd/MM/yy h:mm a",shortDate:"dd/MM/yy",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Birr",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",
posSuf:""}]},id:"aa",pluralCat:function(a,i){var e=0|a,m=u(a,i);return 1==e&&0==m.v?r.ONE:r.OTHER;
}})}]);