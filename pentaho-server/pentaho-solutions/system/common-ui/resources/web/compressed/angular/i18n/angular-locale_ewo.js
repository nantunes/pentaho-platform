angular.module("ngLocale",[],["$provide",function(n){function a(n){n+="";var a=n.indexOf(".");
return-1==a?0:n.length-a-1}function g(n,g){var m=g;void 0===m&&(m=Math.min(a(n),3));
var e=Math.pow(10,m),i=(n*e|0)%e;return{v:m,f:i}}var m={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};n.value("$locale",{DATETIME_FORMATS:{AMPMS:["kíkíríg","ngəgógəle"],
DAY:["sɔ́ndɔ","mɔ́ndi","sɔ́ndɔ məlú mə́bɛ̌","sɔ́ndɔ məlú mə́lɛ́","sɔ́ndɔ məlú mə́nyi","fúladé","séradé"],
ERANAMES:["osúsúa Yésus kiri","ámvus Yésus Kirís"],ERAS:["oyk","ayk"],FIRSTDAYOFWEEK:0,
MONTH:["ngɔn osú","ngɔn bɛ̌","ngɔn lála","ngɔn nyina","ngɔn tána","ngɔn saməna","ngɔn zamgbála","ngɔn mwom","ngɔn ebulú","ngɔn awóm","ngɔn awóm ai dziá","ngɔn awóm ai bɛ̌"],
SHORTDAY:["sɔ́n","mɔ́n","smb","sml","smn","fúl","sér"],SHORTMONTH:["ngo","ngb","ngl","ngn","ngt","ngs","ngz","ngm","nge","nga","ngad","ngab"],
STANDALONEMONTH:["ngɔn osú","ngɔn bɛ̌","ngɔn lála","ngɔn nyina","ngɔn tána","ngɔn saməna","ngɔn zamgbála","ngɔn mwom","ngɔn ebulú","ngɔn awóm","ngɔn awóm ai dziá","ngɔn awóm ai bɛ̌"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",
mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"ewo",localeID:"ewo",pluralCat:function(n,a){var e=0|n,i=g(n,a);
return 1==e&&0==i.v?m.ONE:m.OTHER}})}]);