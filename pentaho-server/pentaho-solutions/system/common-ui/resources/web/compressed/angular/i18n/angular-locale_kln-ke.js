angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");
return-1==e?0:a.length-e-1}function o(a,o){var t=o;void 0===t&&(t=Math.min(e(a),3));
var u=Math.pow(10,t),n=(a*u|0)%u;return{v:t,f:n}}var t={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["karoon","kooskoliny"],
DAY:["Kotisap","Kotaai","Koaeng’","Kosomok","Koang’wan","Komuut","Kolo"],ERANAMES:["Amait kesich Jesu","Kokakesich Jesu"],
ERAS:["AM","KO"],FIRSTDAYOFWEEK:0,MONTH:["Mulgul","Ng’atyaato","Kiptaamo","Iwootkuut","Mamuut","Paagi","Ng’eiyeet","Rooptui","Bureet","Epeeso","Kipsuunde ne taai","Kipsuunde nebo aeng’"],
SHORTDAY:["Kts","Kot","Koo","Kos","Koa","Kom","Kol"],SHORTMONTH:["Mul","Ngat","Taa","Iwo","Mam","Paa","Nge","Roo","Bur","Epe","Kpt","Kpa"],
STANDALONEMONTH:["Mulgul","Ng’atyaato","Kiptaamo","Iwootkuut","Mamuut","Paagi","Ng’eiyeet","Rooptui","Bureet","Epeeso","Kipsuunde ne taai","Kipsuunde nebo aeng’"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"kln-ke",localeID:"kln_KE",pluralCat:function(a,e){var u=0|a,n=o(a,e);
return 1==u&&0==n.v?t.ONE:t.OTHER}})}]);