angular.module("ngLocale",[],["$provide",function(u){function i(u){u+="";var i=u.indexOf(".");
return-1==i?0:u.length-i-1}function n(u,n){var a=n;void 0===a&&(a=Math.min(i(u),3));
var o=Math.pow(10,a),e=(u*o|0)%o;return{v:a,f:e}}var a={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};u.value("$locale",{DATETIME_FORMATS:{AMPMS:["Dinda","Dilolo"],
DAY:["Lumingu","Nkodya","Ndàayà","Ndangù","Njòwa","Ngòvya","Lubingu"],ERANAMES:["Kumpala kwa Yezu Kli","Kunyima kwa Yezu Kli"],
ERAS:["kmp. Y.K.","kny. Y. K."],FIRSTDAYOFWEEK:0,MONTH:["Ciongo","Lùishi","Lusòlo","Mùuyà","Lumùngùlù","Lufuimi","Kabàlàshìpù","Lùshìkà","Lutongolo","Lungùdi","Kaswèkèsè","Ciswà"],
SHORTDAY:["Lum","Nko","Ndy","Ndg","Njw","Ngv","Lub"],SHORTMONTH:["Cio","Lui","Lus","Muu","Lum","Luf","Kab","Lush","Lut","Lun","Kas","Cis"],
STANDALONEMONTH:["Ciongo","Lùishi","Lusòlo","Mùuyà","Lumùngùlù","Lufuimi","Kabàlàshìpù","Lùshìkà","Lutongolo","Lungùdi","Kaswèkèsè","Ciswà"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",
mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FrCD",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"¤",posPre:"",
posSuf:"¤"}]},id:"lu-cd",localeID:"lu_CD",pluralCat:function(u,i){var o=0|u,e=n(u,i);
return 1==o&&0==e.v?a.ONE:a.OTHER}})}]);