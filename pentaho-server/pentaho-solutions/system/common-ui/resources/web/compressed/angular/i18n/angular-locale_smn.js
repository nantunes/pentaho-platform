angular.module("ngLocale",[],["$provide",function(M){function e(M){M+="";var e=M.indexOf(".");
return-1==e?0:M.length-e-1}function n(M,n){var u=n;void 0===u&&(u=Math.min(e(M),3));
var m=Math.pow(10,u),a=(M*m|0)%m;return{v:u,f:a}}var u={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};M.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["pasepeeivi","vuossaargâ","majebaargâ","koskoho","tuorâstuv","vástuppeeivi","lávurduv"],
ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:0,MONTH:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"],
SHORTDAY:["pa","vu","ma","ko","tu","vá","lá"],SHORTMONTH:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"],
STANDALONEMONTH:["uđđâivemáánu","kuovâmáánu","njuhčâmáánu","cuáŋuimáánu","vyesimáánu","kesimáánu","syeinimáánu","porgemáánu","čohčâmáánu","roovvâdmáánu","skammâmáánu","juovlâmáánu"],
WEEKENDRANGE:[5,6],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",
mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"smn",localeID:"smn",pluralCat:function(M,e){var m=0|M,a=n(M,e);
return 1==m&&0==a.v?u.ONE:u.OTHER}})}]);