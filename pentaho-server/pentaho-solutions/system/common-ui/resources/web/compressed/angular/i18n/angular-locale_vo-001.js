angular.module("ngLocale",[],["$provide",function(e){function u(e){e+="";var u=e.indexOf(".");
return-1==u?0:e.length-u-1}function l(e,l){var n=l;void 0===n&&(n=Math.min(u(e),3));
var r=Math.pow(10,n),t=(e*r|0)%r;return{v:n,f:t}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["posz.","büz."],
DAY:["sudel","mudel","tudel","vedel","dödel","fridel","zädel"],ERANAMES:["b. t. kr.","p. t. kr."],
ERAS:["b. t. kr.","p. t. kr."],FIRSTDAYOFWEEK:0,MONTH:["janul","febul","mäzil","prilul","mayul","yunul","yulul","gustul","setul","tobul","novul","dekul"],
SHORTDAY:["su.","mu.","tu.","ve.","dö.","fr.","zä."],SHORTMONTH:["jan","feb","mäz","prl","may","yun","yul","gst","set","ton","nov","dek"],
WEEKENDRANGE:[5,6],fullDate:"y MMMMa 'd'. d'id'",longDate:"y MMMM d",medium:"y MMM. d HH:mm:ss",
mediumDate:"y MMM. d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ -",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"vo-001",pluralCat:function(e,u){var r=0|e,t=l(e,u);return 1==r&&0==t.v?n.ONE:n.OTHER;
}})}]);