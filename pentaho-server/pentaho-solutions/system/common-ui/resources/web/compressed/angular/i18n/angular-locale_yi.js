angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function E(e,E){var n=E;void 0===n&&(n=Math.min(M(e),3));
var r=Math.pow(10,n),a=(e*r|0)%r;return{v:n,f:a}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["פארמיטאג","נאכמיטאג"],
DAY:["זונטיק","מאָנטיק","דינסטיק","מיטוואך","דאנערשטיק","פֿרײַטיק","שבת"],ERANAMES:["BCE","CE"],
ERAS:["BCE","CE"],FIRSTDAYOFWEEK:0,MONTH:["יאַנואַר","פֿעברואַר","מערץ","אַפּריל","מיי","יוני","יולי","אויגוסט","סעפּטעמבער","אקטאבער","נאוועמבער","דעצעמבער"],
SHORTDAY:["זונטיק","מאָנטיק","דינסטיק","מיטוואך","דאנערשטיק","פֿרײַטיק","שבת"],SHORTMONTH:["יאַנואַר","פֿעברואַר","מערץ","אַפּריל","מיי","יוני","יולי","אויגוסט","סעפּטעמבער","אקטאבער","נאוועמבער","דעצעמבער"],
STANDALONEMONTH:["יאַנואַר","פֿעברואַר","מערץ","אַפּריל","מיי","יוני","יולי","אויגוסט","סעפּטעמבער","אקטאבער","נאוועמבער","דעצעמבער"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, dטן MMMM y",longDate:"dטן MMMM y",medium:"dטן MMM y HH:mm:ss",
mediumDate:"dטן MMM y",mediumTime:"HH:mm:ss","short":"dd/MM/yy HH:mm",shortDate:"dd/MM/yy",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"yi",localeID:"yi",pluralCat:function(e,M){var r=0|e,a=E(e,M);
return 1==r&&0==a.v?n.ONE:n.OTHER}})}]);