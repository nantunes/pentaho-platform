angular.module("ngLocale",[],["$provide",function(a){function u(a){a+="";var u=a.indexOf(".");
return-1==u?0:a.length-u-1}function i(a,i){var e=i;void 0===e&&(e=Math.min(u(a),3));
var r=Math.pow(10,e),n=(a*r|0)%r;return{v:e,f:n}}var e={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["saaku","carra"],
DAY:["Naba Sambat","Sani","Salus","Rabuq","Camus","Jumqata","Qunxa Sambat"],ERANAMES:["Yaasuusuk Duma","Yaasuusuk Wadir"],
ERAS:["Yaasuusuk Duma","Yaasuusuk Wadir"],FIRSTDAYOFWEEK:0,MONTH:["Qunxa Garablu","Kudo","Ciggilta Kudo","Agda Baxis","Caxah Alsa","Qasa Dirri","Qado Dirri","Liiqen","Waysu","Diteli","Ximoli","Kaxxa Garablu"],
SHORTDAY:["Nab","San","Sal","Rab","Cam","Jum","Qun"],SHORTMONTH:["Qun","Nah","Cig","Agd","Cax","Qas","Qad","Leq","Way","Dit","Xim","Kax"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM dd, y",longDate:"dd MMMM y",medium:"dd-MMM-y h:mm:ss a",
mediumDate:"dd-MMM-y",mediumTime:"h:mm:ss a","short":"dd/MM/yy h:mm a",shortDate:"dd/MM/yy",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Nfk",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",
posSuf:""}]},id:"ssy",pluralCat:function(a,u){var r=0|a,n=i(a,u);return 1==r&&0==n.v?e.ONE:e.OTHER;
}})}]);