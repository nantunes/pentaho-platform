angular.module("ngLocale",[],["$provide",function(a){function n(a){a+="";var n=a.indexOf(".");
return-1==n?0:a.length-n-1}function i(a,i){var O=i;void 0===O&&(O=Math.min(n(a),3));
var k=Math.pow(10,O),u=(a*k|0)%k;return{v:O,f:u}}var O={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Sande","Orwokubanza","Orwakabiri","Orwakashatu","Orwakana","Orwakataano","Orwamukaaga"],
ERANAMES:["Kurisito Atakaijire","Kurisito Yaijire"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:0,
MONTH:["Okwokubanza","Okwakabiri","Okwakashatu","Okwakana","Okwakataana","Okwamukaaga","Okwamushanju","Okwamunaana","Okwamwenda","Okwaikumi","Okwaikumi na kumwe","Okwaikumi na ibiri"],
SHORTDAY:["SAN","ORK","OKB","OKS","OKN","OKT","OMK"],SHORTMONTH:["KBZ","KBR","KST","KKN","KTN","KMK","KMS","KMN","KMW","KKM","KNK","KNB"],
STANDALONEMONTH:["Okwokubanza","Okwakabiri","Okwakashatu","Okwakana","Okwakataana","Okwamukaaga","Okwamushanju","Okwamunaana","Okwamwenda","Okwaikumi","Okwaikumi na kumwe","Okwaikumi na ibiri"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"UGX",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"nyn-ug",localeID:"nyn_UG",pluralCat:function(a,n){var k=0|a,u=i(a,n);
return 1==k&&0==u.v?O.ONE:O.OTHER}})}]);