angular.module("ngLocale",[],["$provide",function(a){function r(a){a+="";var r=a.indexOf(".");
return-1==r?0:a.length-r-1}function e(a,e){var n=e;void 0===n&&(n=Math.min(r(a),3));
var m=Math.pow(10,n),u=(a*m|0)%m;return{v:n,f:u}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["a.m.","p.m."],
DAY:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],ERANAMES:["BCE","d.C."],
ERAS:["BCE","d.C."],FIRSTDAYOFWEEK:6,MONTH:["Qulla puquy","Hatun puquy","Pauqar waray","Ayriwa","Aymuray","Inti raymi","Anta Sitwa","Qhapaq Sitwa","Uma raymi","Kantaray","Ayamarqʼa","Kapaq Raymi"],
SHORTDAY:["Dom","Lun","Mar","Mié","Jue","Vie","Sab"],SHORTMONTH:["Qul","Hat","Pau","Ayr","Aym","Int","Ant","Qha","Uma","Kan","Aya","Kap"],
STANDALONEMONTH:["Qulla puquy","Hatun puquy","Pauqar waray","Ayriwa","Aymuray","Inti raymi","Anta Sitwa","Qhapaq Sitwa","Uma raymi","Kantaray","Ayamarqʼa","Kapaq Raymi"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM, y",longDate:"y MMMM d",medium:"y MMM d hh:mm:ss a",
mediumDate:"y MMM d",mediumTime:"hh:mm:ss a","short":"dd/MM/y hh:mm a",shortDate:"dd/MM/y",
shortTime:"hh:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"qu-ec",localeID:"qu_EC",pluralCat:function(a,r){var m=0|a,u=e(a,r);
return 1==m&&0==u.v?n.ONE:n.OTHER}})}]);