angular.module("ngLocale",[],["$provide",function(M){function a(M){M+="";var a=M.indexOf(".");
return-1==a?0:M.length-a-1}function u(M,u){var e=u;void 0===e&&(e=Math.min(a(M),3));
var n=Math.pow(10,e),i=(M*n|0)%n;return{v:e,f:i}}var e={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};M.value("$locale",{DATETIME_FORMATS:{AMPMS:["Lwamilawu","Pashamihe"],
DAY:["Mulungu","Jumatatu","Jumanne","Jumatano","Alahamisi","Ijumaa","Jumamosi"],ERANAMES:["Ashanali uKilisito","Pamwandi ya Kilisto"],
ERAS:["AK","PK"],FIRSTDAYOFWEEK:0,MONTH:["Mupalangulwa","Mwitope","Mushende","Munyi","Mushende Magali","Mujimbi","Mushipepo","Mupuguto","Munyense","Mokhu","Musongandembwe","Muhaano"],
SHORTDAY:["Mul","Jtt","Jnn","Jtn","Alh","Iju","Jmo"],SHORTMONTH:["Mup","Mwi","Msh","Mun","Mag","Muj","Msp","Mpg","Mye","Mok","Mus","Muh"],
STANDALONEMONTH:["Mupalangulwa","Mwitope","Mushende","Munyi","Mushende Magali","Mujimbi","Mushipepo","Mupuguto","Munyense","Mokhu","Musongandembwe","Muhaano"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"TSh",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"¤",posPre:"",
posSuf:"¤"}]},id:"sbp",localeID:"sbp",pluralCat:function(M,a){var n=0|M,i=u(M,a);return 1==n&&0==i.v?e.ONE:e.OTHER;
}})}]);