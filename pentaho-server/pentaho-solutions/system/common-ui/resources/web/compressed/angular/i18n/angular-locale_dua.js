angular.module("ngLocale",[],["$provide",function(e){function i(e){e+="";var i=e.indexOf(".");
return-1==i?0:e.length-i-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(i(e),3));
var m=Math.pow(10,n),d=(e*m|0)%m;return{v:n,f:d}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["idiɓa","ebyámu"],
DAY:["éti","mɔ́sú","kwasú","mukɔ́sú","ŋgisú","ɗónɛsú","esaɓasú"],ERANAMES:["ɓoso ɓwá yáɓe lá","mbúsa kwédi a Yés"],
ERAS:["ɓ.Ys","mb.Ys"],FIRSTDAYOFWEEK:0,MONTH:["dimɔ́di","ŋgɔndɛ","sɔŋɛ","diɓáɓá","emiasele","esɔpɛsɔpɛ","madiɓɛ́díɓɛ́","diŋgindi","nyɛtɛki","mayésɛ́","tiníní","eláŋgɛ́"],
SHORTDAY:["ét","mɔ́s","kwa","muk","ŋgi","ɗón","esa"],SHORTMONTH:["di","ŋgɔn","sɔŋ","diɓ","emi","esɔ","mad","diŋ","nyɛt","may","tin","elá"],
STANDALONEMONTH:["dimɔ́di","ŋgɔndɛ","sɔŋɛ","diɓáɓá","emiasele","esɔpɛsɔpɛ","madiɓɛ́díɓɛ́","diŋgindi","nyɛtɛki","mayésɛ́","tiníní","eláŋgɛ́"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",
mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"dua",localeID:"dua",pluralCat:function(e,i){var m=0|e,d=a(e,i);
return 1==m&&0==d.v?n.ONE:n.OTHER}})}]);