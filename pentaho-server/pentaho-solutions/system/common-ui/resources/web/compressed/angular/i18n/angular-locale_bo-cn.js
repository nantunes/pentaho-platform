angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function n(e,n){var E=n;void 0===E&&(E=Math.min(M(e),3));
var r=Math.pow(10,E),a=(e*r|0)%r;return{v:E,f:a}}var E={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["སྔ་དྲོ་","ཕྱི་དྲོ་"],
DAY:["གཟའ་ཉི་མ་","གཟའ་ཟླ་བ་","གཟའ་མིག་དམར་","གཟའ་ལྷག་པ་","གཟའ་ཕུར་བུ་","གཟའ་པ་སངས་","གཟའ་སྤེན་པ་"],
ERANAMES:["སྤྱི་ལོ་སྔོན།","སྤྱི་ལོ།"],ERAS:["སྤྱི་ལོ་སྔོན།","སྤྱི་ལོ།"],FIRSTDAYOFWEEK:6,
MONTH:["ཟླ་བ་དང་པོ་","ཟླ་བ་གཉིས་པ་","ཟླ་བ་སུམ་པ་","ཟླ་བ་བཞི་པ་","ཟླ་བ་ལྔ་པ་","ཟླ་བ་དྲུག་པ་","ཟླ་བ་བདུན་པ་","ཟླ་བ་བརྒྱད་པ་","ཟླ་བ་དགུ་པ་","ཟླ་བ་བཅུ་པ་","ཟླ་བ་བཅུ་གཅིག་པ་","ཟླ་བ་བཅུ་གཉིས་པ་"],
SHORTDAY:["ཉི་མ་","ཟླ་བ་","མིག་དམར་","ལྷག་པ་","ཕུར་བུ་","པ་སངས་","སྤེན་པ་"],SHORTMONTH:["ཟླ་༡","ཟླ་༢","ཟླ་༣","ཟླ་༤","ཟླ་༥","ཟླ་༦","ཟླ་༧","ཟླ་༨","ཟླ་༩","ཟླ་༡༠","ཟླ་༡༡","ཟླ་༡༢"],
STANDALONEMONTH:["ཟླ་བ་དང་པོ་","ཟླ་བ་གཉིས་པ་","ཟླ་བ་སུམ་པ་","ཟླ་བ་བཞི་པ་","ཟླ་བ་ལྔ་པ་","ཟླ་བ་དྲུག་པ་","ཟླ་བ་བདུན་པ་","ཟླ་བ་བརྒྱད་པ་","ཟླ་བ་དགུ་པ་","ཟླ་བ་བཅུ་པ་","ཟླ་བ་བཅུ་གཅིག་པ་","ཟླ་བ་བཅུ་གཉིས་པ་"],
WEEKENDRANGE:[5,6],fullDate:"y MMMM d, EEEE",longDate:"སྤྱི་ལོ་y MMMMའི་ཙེས་dད",medium:"y ལོ་འི་MMMཙེས་d HH:mm:ss",
mediumDate:"y ལོ་འི་MMMཙེས་d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"¥",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"bo-cn",localeID:"bo_CN",pluralCat:function(e,M){var r=0|e,a=n(e,M);
return 1==r&&0==a.v?E.ONE:E.OTHER}})}]);