angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");
return-1==e?0:a.length-e-1}function r(a,r){var u=r;void 0===u&&(u=Math.min(e(a),3));
var n=Math.pow(10,u),i=(a*n|0)%n;return{v:u,f:i}}var u={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["kari","ntɛnɛ","tarata","araba","alamisa","juma","sibiri"],MONTH:["zanwuye","feburuye","marisi","awirili","mɛ","zuwɛn","zuluye","uti","sɛtanburu","ɔkutɔburu","nowanburu","desanburu"],
SHORTDAY:["kar","ntɛ","tar","ara","ala","jum","sib"],SHORTMONTH:["zan","feb","mar","awi","mɛ","zuw","zul","uti","sɛt","ɔku","now","des"],
fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM, y HH:mm:ss",mediumDate:"d MMM, y",
mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},
NUMBER_FORMATS:{CURRENCY_SYM:"CFA",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,
lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{
gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""
}]},id:"bm-ml",pluralCat:function(a,e){var n=0|a,i=r(a,e);return 1==n&&0==i.v?u.ONE:u.OTHER;
}})}]);