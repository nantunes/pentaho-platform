angular.module("ngLocale",[],["$provide",function(a){function u(a){a+="";var u=a.indexOf(".");
return-1==u?0:a.length-u-1}function e(a,e){var n=e;void 0===n&&(n=Math.min(u(a),3));
var M=Math.pow(10,n),i=(a*M|0)%M;return{v:n,f:i}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Swondaha","Musumbuluwo","Ḽavhuvhili","Ḽavhuraru","Ḽavhuṋa","Ḽavhuṱanu","Mugivhela"],
ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:6,MONTH:["Phando","Luhuhi","Ṱhafamuhwe","Lambamai","Shundunthule","Fulwi","Fulwana","Ṱhangule","Khubvumedzi","Tshimedzi","Ḽara","Nyendavhusiku"],
SHORTDAY:["Swo","Mus","Vhi","Rar","Ṋa","Ṱan","Mug"],SHORTMONTH:["Pha","Luh","Ṱhf","Lam","Shu","Lwi","Lwa","Ṱha","Khu","Tsh","Ḽar","Nye"],
WEEKENDRANGE:[5,6],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",
mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"R",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",
posSuf:""}]},id:"ve",pluralCat:function(a,u){var M=0|a,i=e(a,u);return 1==M&&0==i.v?n.ONE:n.OTHER;
}})}]);