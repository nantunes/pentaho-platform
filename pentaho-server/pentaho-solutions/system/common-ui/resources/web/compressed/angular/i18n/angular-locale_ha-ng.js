angular.module("ngLocale",[],["$provide",function(a){function i(a){a+="";var i=a.indexOf(".");
return-1==i?0:a.length-i-1}function u(a,u){var n=u;void 0===n&&(n=Math.min(i(a),3));
var r=Math.pow(10,n),M=(a*r|0)%r;return{v:n,f:M}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Lahadi","Litinin","Talata","Laraba","Alhamis","Jummaʼa","Asabar"],ERANAMES:["Kafin haihuwar annab","Bayan haihuwar annab"],
ERAS:["KHAI","BHAI"],FIRSTDAYOFWEEK:0,MONTH:["Janairu","Faburairu","Maris","Afirilu","Mayu","Yuni","Yuli","Agusta","Satumba","Oktoba","Nuwamba","Disamba"],
SHORTDAY:["Lh","Li","Ta","Lr","Al","Ju","As"],SHORTMONTH:["Jan","Fab","Mar","Afi","May","Yun","Yul","Agu","Sat","Okt","Nuw","Dis"],
STANDALONEMONTH:["Janairu","Faburairu","Maris","Afirilu","Mayu","Yuni","Yuli","Agusta","Satumba","Oktoba","Nuwamba","Disamba"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM, y",longDate:"d MMMM, y",medium:"d MMM, y h:mm:ss a",
mediumDate:"d MMM, y",mediumTime:"h:mm:ss a","short":"d/M/yy h:mm a",shortDate:"d/M/yy",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"₦",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"ha-ng",localeID:"ha_NG",pluralCat:function(a,i){var r=0|a,M=u(a,i);
return 1==r&&0==M.v?n.ONE:n.OTHER}})}]);