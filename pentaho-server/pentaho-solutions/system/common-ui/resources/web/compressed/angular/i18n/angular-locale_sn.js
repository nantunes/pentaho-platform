angular.module("ngLocale",[],["$provide",function(u){function a(u){u+="";var a=u.indexOf(".");
return-1==a?0:u.length-a-1}function i(u,i){var n=i;void 0===n&&(n=Math.min(a(u),3));
var M=Math.pow(10,n),r=(u*M|0)%M;return{v:n,f:r}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};u.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Svondo","Muvhuro","Chipiri","Chitatu","China","Chishanu","Mugovera"],ERANAMES:["Kristo asati auya","Kristo ashaya"],
ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["Ndira","Kukadzi","Kurume","Kubvumbi","Chivabvu","Chikumi","Chikunguru","Nyamavhuvhu","Gunyana","Gumiguru","Mbudzi","Zvita"],
SHORTDAY:["Svo","Muv","Chip","Chit","Chin","Chis","Mug"],SHORTMONTH:["Ndi","Kuk","Kur","Kub","Chv","Chk","Chg","Nya","Gun","Gum","Mb","Zvi"],
STANDALONEMONTH:["Ndira","Kukadzi","Kurume","Kubvumbi","Chivabvu","Chikumi","Chikunguru","Nyamavhuvhu","Gunyana","Gumiguru","Mbudzi","Zvita"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"sn",localeID:"sn",pluralCat:function(u,a){var M=0|u,r=i(u,a);return 1==M&&0==r.v?n.ONE:n.OTHER;
}})}]);