angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");
return-1==e?0:a.length-e-1}function n(a,n){var t=n;void 0===t&&(t=Math.min(e(a),3));
var o=Math.pow(10,t),r=(a*o|0)%o;return{v:t,f:r}}var t={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["ǁgoagas","ǃuias"],
DAY:["Sontaxtsees","Mantaxtsees","Denstaxtsees","Wunstaxtsees","Dondertaxtsees","Fraitaxtsees","Satertaxtsees"],
ERANAMES:["Xristub aiǃâ","Xristub khaoǃgâ"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:0,MONTH:["ǃKhanni","ǃKhanǀgôab","ǀKhuuǁkhâb","ǃHôaǂkhaib","ǃKhaitsâb","Gamaǀaeb","ǂKhoesaob","Aoǁkhuumûǁkhâb","Taraǀkhuumûǁkhâb","ǂNûǁnâiseb","ǀHooǂgaeb","Hôasoreǁkhâb"],
SHORTDAY:["Son","Ma","De","Wu","Do","Fr","Sat"],SHORTMONTH:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
STANDALONEMONTH:["ǃKhanni","ǃKhanǀgôab","ǀKhuuǁkhâb","ǃHôaǂkhaib","ǃKhaitsâb","Gamaǀaeb","ǂKhoesaob","Aoǁkhuumûǁkhâb","Taraǀkhuumûǁkhâb","ǂNûǁnâiseb","ǀHooǂgaeb","Hôasoreǁkhâb"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"naq-na",localeID:"naq_NA",pluralCat:function(a,e){var o=0|a,r=n(a,e);
return 1==o&&0==r.v?t.ONE:t.OTHER}})}]);