angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function E(e,E){var a=E;void 0===a&&(a=Math.min(M(e),3));
var n=Math.pow(10,a),r=(e*n|0)%n;return{v:a,f:r}}var a={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["སྔ་ཆ་","ཕྱི་ཆ་"],
DAY:["གཟའ་ཟླ་བ་","གཟའ་མིག་དམར་","གཟའ་ལྷག་པ་","གཟའ་ཕུར་བུ་","གཟའ་པ་སངས་","གཟའ་སྤེན་པ་","གཟའ་ཉི་མ་"],
ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:6,MONTH:["ཟླ་དངཔ་","ཟླ་གཉིས་པ་","ཟླ་གསུམ་པ་","ཟླ་བཞི་པ་","ཟླ་ལྔ་པ་","ཟླ་དྲུག་པ","ཟླ་བདུན་པ་","ཟླ་བརྒྱད་པ་","ཟླ་དགུ་པ་","ཟླ་བཅུ་པ་","ཟླ་བཅུ་གཅིག་པ་","ཟླ་བཅུ་གཉིས་པ་"],
SHORTDAY:["ཟླ་","མིར་","ལྷག་","ཕུར་","སངས་","སྤེན་","ཉི་"],SHORTMONTH:["༡","༢","༣","༤","༥","༦","༧","༨","༩","༡༠","༡༡","12"],
STANDALONEMONTH:["སྤྱི་ཟླ་དངཔ་","སྤྱི་ཟླ་གཉིས་པ་","སྤྱི་ཟླ་གསུམ་པ་","སྤྱི་ཟླ་བཞི་པ","སྤྱི་ཟླ་ལྔ་པ་","སྤྱི་ཟླ་དྲུག་པ","སྤྱི་ཟླ་བདུན་པ་","སྤྱི་ཟླ་བརྒྱད་པ་","སྤྱི་ཟླ་དགུ་པ་","སྤྱི་ཟླ་བཅུ་པ་","སྤྱི་ཟླ་བཅུ་གཅིག་པ་","སྤྱི་ཟླ་བཅུ་གཉིས་པ་"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, སྤྱི་ལོ་y MMMM ཚེས་dd",longDate:"སྤྱི་ལོ་y MMMM ཚེས་ dd",
medium:"སྤྱི་ལོ་y ཟླ་MMM ཚེས་dd ཆུ་ཚོད་h:mm:ss a",mediumDate:"སྤྱི་ལོ་y ཟླ་MMM ཚེས་dd",
mediumTime:"ཆུ་ཚོད་h:mm:ss a","short":"y-MM-dd ཆུ་ཚོད་ h སྐར་མ་ mm a",shortDate:"y-MM-dd",
shortTime:"ཆུ་ཚོད་ h སྐར་མ་ mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Nu.",DECIMAL_SEP:".",
GROUP_SEP:",",PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",
negSuf:"",posPre:"",posSuf:""},{gSize:2,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",
negSuf:"",posPre:"¤",posSuf:""}]},id:"dz-bt",localeID:"dz_BT",pluralCat:function(e,M){
var n=0|e,r=E(e,M);return 1==n&&0==r.v?a.ONE:a.OTHER}})}]);