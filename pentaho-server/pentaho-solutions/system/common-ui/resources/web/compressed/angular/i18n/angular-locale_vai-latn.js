angular.module("ngLocale",[],["$provide",function(a){function o(a){a+="";var o=a.indexOf(".");
return-1==o?0:a.length-o-1}function e(a,e){var l=e;void 0===l&&(l=Math.min(o(a),3));
var n=Math.pow(10,l),i=(a*n|0)%n;return{v:l,f:i}}var l={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["lahadi","tɛɛnɛɛ","talata","alaba","aimisa","aijima","siɓiti"],ERANAMES:["BCE","CE"],
ERAS:["BCE","CE"],FIRSTDAYOFWEEK:0,MONTH:["luukao kemã","ɓandaɓu","vɔɔ","fulu","goo","6","7","kɔnde","saah","galo","kenpkato ɓololɔ","luukao lɔma"],
SHORTDAY:["lahadi","tɛɛnɛɛ","talata","alaba","aimisa","aijima","siɓiti"],SHORTMONTH:["luukao kemã","ɓandaɓu","vɔɔ","fulu","goo","6","7","kɔnde","saah","galo","kenpkato ɓololɔ","luukao lɔma"],
STANDALONEMONTH:["luukao kemã","ɓandaɓu","vɔɔ","fulu","goo","6","7","kɔnde","saah","galo","kenpkato ɓololɔ","luukao lɔma"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"vai-latn",localeID:"vai_Latn",pluralCat:function(a,o){var n=0|a,i=e(a,o);
return 1==n&&0==i.v?l.ONE:l.OTHER}})}]);