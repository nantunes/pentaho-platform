angular.module("ngLocale",[],["$provide",function(a){function o(a){a+="";var o=a.indexOf(".");
return-1==o?0:a.length-o-1}function e(a,e){var r=e;void 0===r&&(r=Math.min(o(a),3));
var n=Math.pow(10,r),O=(a*n|0)%n;return{v:r,f:O}}var r={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["Taparachu","Ebongi"],
DAY:["Nakaejuma","Nakaebarasa","Nakaare","Nakauni","Nakaung’on","Nakakany","Nakasabiti"],
ERANAMES:["Kabla ya Christo","Baada ya Christo"],ERAS:["KK","BK"],FIRSTDAYOFWEEK:0,
MONTH:["Orara","Omuk","Okwamg’","Odung’el","Omaruk","Omodok’king’ol","Ojola","Opedel","Osokosokoma","Otibar","Olabor","Opoo"],
SHORTDAY:["Jum","Bar","Aar","Uni","Ung","Kan","Sab"],SHORTMONTH:["Rar","Muk","Kwa","Dun","Mar","Mod","Jol","Ped","Sok","Tib","Lab","Poo"],
STANDALONEMONTH:["Orara","Omuk","Okwamg’","Odung’el","Omaruk","Omodok’king’ol","Ojola","Opedel","Osokosokoma","Otibar","Olabor","Opoo"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"UGX",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"teo",localeID:"teo",pluralCat:function(a,o){var n=0|a,O=e(a,o);return 1==n&&0==O.v?r.ONE:r.OTHER;
}})}]);