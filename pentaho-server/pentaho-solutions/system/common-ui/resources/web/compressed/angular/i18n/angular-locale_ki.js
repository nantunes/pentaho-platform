angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");
return-1==e?0:a.length-e-1}function M(a,M){var r=M;void 0===r&&(r=Math.min(e(a),3));
var n=Math.pow(10,r),w=(a*n|0)%n;return{v:r,f:w}}var r={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["Kiroko","Hwaĩ-inĩ"],
DAY:["Kiumia","Njumatatũ","Njumaine","Njumatana","Aramithi","Njumaa","Njumamothi"],
ERANAMES:["Mbere ya Kristo","Thutha wa Kristo"],ERAS:["MK","TK"],FIRSTDAYOFWEEK:0,
MONTH:["Njenuarĩ","Mwere wa kerĩ","Mwere wa gatatũ","Mwere wa kana","Mwere wa gatano","Mwere wa gatandatũ","Mwere wa mũgwanja","Mwere wa kanana","Mwere wa kenda","Mwere wa ikũmi","Mwere wa ikũmi na ũmwe","Ndithemba"],
SHORTDAY:["KMA","NTT","NMN","NMT","ART","NMA","NMM"],SHORTMONTH:["JEN","WKR","WGT","WKN","WTN","WTD","WMJ","WNN","WKD","WIK","WMW","DIT"],
STANDALONEMONTH:["Njenuarĩ","Mwere wa kerĩ","Mwere wa gatatũ","Mwere wa kana","Mwere wa gatano","Mwere wa gatandatũ","Mwere wa mũgwanja","Mwere wa kanana","Mwere wa kenda","Mwere wa ikũmi","Mwere wa ikũmi na ũmwe","Ndithemba"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"ki",localeID:"ki",pluralCat:function(a,e){var n=0|a,w=M(a,e);return 1==n&&0==w.v?r.ONE:r.OTHER;
}})}]);