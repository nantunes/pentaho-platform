angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function n(e,n){var E=n;void 0===E&&(E=Math.min(M(e),3));
var r=Math.pow(10,E),a=(e*r|0)%r;return{v:E,f:a}}var E={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ꎸꄑ","ꁯꋒ"],
DAY:["ꑭꆏꑍ","ꆏꊂꋍ","ꆏꊂꑍ","ꆏꊂꌕ","ꆏꊂꇖ","ꆏꊂꉬ","ꆏꊂꃘ"],ERANAMES:["ꃅꋊꂿ","ꃅꋊꊂ"],ERAS:["ꃅꋊꂿ","ꃅꋊꊂ"],
FIRSTDAYOFWEEK:0,MONTH:["ꋍꆪ","ꑍꆪ","ꌕꆪ","ꇖꆪ","ꉬꆪ","ꃘꆪ","ꏃꆪ","ꉆꆪ","ꈬꆪ","ꊰꆪ","ꊰꊪꆪ","ꊰꑋꆪ"],
SHORTDAY:["ꑭꆏ","ꆏꋍ","ꆏꑍ","ꆏꌕ","ꆏꇖ","ꆏꉬ","ꆏꃘ"],SHORTMONTH:["1","2","3","4","5","6","7","8","9","10","11","12"],
STANDALONEMONTH:["ꋍꆪ","ꑍꆪ","ꌕꆪ","ꇖꆪ","ꉬꆪ","ꃘꆪ","ꏃꆪ","ꉆꆪ","ꈬꆪ","ꊰꆪ","ꊰꊪꆪ","ꊰꑋꆪ"],WEEKENDRANGE:[5,6],
fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",
mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"
},NUMBER_FORMATS:{CURRENCY_SYM:"¥",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,
lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{
gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",
posSuf:""}]},id:"ii",localeID:"ii",pluralCat:function(e,M){var r=0|e,a=n(e,M);return 1==r&&0==a.v?E.ONE:E.OTHER;
}})}]);