angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{
AMPMS:["AM","PM"],DAY:["રવિવાર","સોમવાર","મંગળવાર","બુધવાર","ગુરુવાર","શુક્રવાર","શનિવાર"],
ERANAMES:["ઈસવીસન પૂર્વે","ઇસવીસન"],ERAS:["ઈસુના જન્મ પહેલા","ઇસવીસન"],FIRSTDAYOFWEEK:6,
MONTH:["જાન્યુઆરી","ફેબ્રુઆરી","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઈ","ઑગસ્ટ","સપ્ટેમ્બર","ઑક્ટોબર","નવેમ્બર","ડિસેમ્બર"],
SHORTDAY:["રવિ","સોમ","મંગળ","બુધ","ગુરુ","શુક્ર","શનિ"],SHORTMONTH:["જાન્યુ","ફેબ્રુ","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઈ","ઑગ","સપ્ટે","ઑક્ટો","નવે","ડિસે"],
STANDALONEMONTH:["જાન્યુઆરી","ફેબ્રુઆરી","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઈ","ઑગસ્ટ","સપ્ટેમ્બર","ઑક્ટોબર","નવેમ્બર","ડિસેમ્બર"],
WEEKENDRANGE:[6,6],fullDate:"EEEE, d MMMM, y",longDate:"d MMMM, y",medium:"d MMM, y hh:mm:ss a",
mediumDate:"d MMM, y",mediumTime:"hh:mm:ss a","short":"d/M/yy hh:mm a",shortDate:"d/M/yy",
shortTime:"hh:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"₹",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:2,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"gu-in",localeID:"gu_IN",pluralCat:function(e,E){var a=0|e;return 0==a||1==e?M.ONE:M.OTHER;
}})}]);