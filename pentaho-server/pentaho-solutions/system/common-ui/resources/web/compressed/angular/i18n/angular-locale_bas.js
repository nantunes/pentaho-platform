angular.module("ngLocale",[],["$provide",function(e){function m(e){e+="";var m=e.indexOf(".");
return-1==m?0:e.length-m-1}function n(e,n){var M=n;void 0===M&&(M=Math.min(m(e),3));
var a=Math.pow(10,M),i=(e*a|0)%a;return{v:M,f:i}}var M={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["I bikɛ̂glà","I ɓugajɔp"],
DAY:["ŋgwà nɔ̂y","ŋgwà njaŋgumba","ŋgwà ûm","ŋgwà ŋgê","ŋgwà mbɔk","ŋgwà kɔɔ","ŋgwà jôn"],
ERANAMES:["bisū bi Yesù Krǐstò","i mbūs Yesù Krǐstò"],ERAS:["b.Y.K","m.Y.K"],FIRSTDAYOFWEEK:0,
MONTH:["Kɔndɔŋ","Màcɛ̂l","Màtùmb","Màtop","M̀puyɛ","Hìlòndɛ̀","Njèbà","Hìkaŋ","Dìpɔ̀s","Bìòôm","Màyɛsèp","Lìbuy li ńyèe"],
SHORTDAY:["nɔy","nja","uum","ŋge","mbɔ","kɔɔ","jon"],SHORTMONTH:["kɔn","mac","mat","mto","mpu","hil","nje","hik","dip","bio","may","liɓ"],
STANDALONEMONTH:["Kɔndɔŋ","Màcɛ̂l","Màtùmb","Màtop","M̀puyɛ","Hìlòndɛ̀","Njèbà","Hìkaŋ","Dìpɔ̀s","Bìòôm","Màyɛsèp","Lìbuy li ńyèe"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM, y HH:mm:ss",
mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"bas",localeID:"bas",pluralCat:function(e,m){var a=0|e,i=n(e,m);
return 1==a&&0==i.v?M.ONE:M.OTHER}})}]);