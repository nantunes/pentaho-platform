angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(M(e),3));
var E=Math.pow(10,n),r=(e*E|0)%E;return{v:n,f:r}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["පෙ.ව.","ප.ව."],
DAY:["ඉරිදා","සඳුදා","අඟහරුවාදා","බදාදා","බ්‍රහස්පතින්දා","සිකුරාදා","සෙනසුරාදා"],
ERANAMES:["ක්‍රිස්තු පූර්‍ව","ක්‍රිස්තු වර්‍ෂ"],ERAS:["ක්‍රි.පූ.","ක්‍රි.ව."],FIRSTDAYOFWEEK:0,
MONTH:["ජනවාරි","පෙබරවාරි","මාර්තු","අප්‍රේල්","මැයි","ජූනි","ජූලි","අගෝස්තු","සැප්තැම්බර්","ඔක්තෝබර්","නොවැම්බර්","දෙසැම්බර්"],
SHORTDAY:["ඉරිදා","සඳුදා","අඟහ","බදාදා","බ්‍රහස්","සිකු","සෙන"],SHORTMONTH:["ජන","පෙබ","මාර්තු","අප්‍රේල්","මැයි","ජූනි","ජූලි","අගෝ","සැප්","ඔක්","නොවැ","දෙසැ"],
STANDALONEMONTH:["ජනවාරි","පෙබරවාරි","මාර්තු","අප්‍රේල්","මැයි","ජූනි","ජූලි","අගෝස්තු","සැප්තැම්බර්","ඔක්තෝබර්","නොවැම්බර්","දෙසැම්බර්"],
WEEKENDRANGE:[5,6],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d a h.mm.ss",
mediumDate:"y MMM d",mediumTime:"a h.mm.ss","short":"y-MM-dd a h.mm",shortDate:"y-MM-dd",
shortTime:"a h.mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Rs",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"si",localeID:"si",pluralCat:function(e,M){var E=0|e,r=a(e,M);return 0==e||1==e||0==E&&1==r.f?n.ONE:n.OTHER;
}})}]);