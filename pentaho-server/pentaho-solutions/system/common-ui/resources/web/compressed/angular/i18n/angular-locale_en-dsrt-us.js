angular.module("ngLocale",[],["$provide",function(e){var a={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{
AMPMS:["𐐈𐐣","𐐑𐐣"],DAY:["𐐝𐐲𐑌𐐼𐐩","𐐣𐐲𐑌𐐼𐐩","𐐓𐐭𐑆𐐼𐐩","𐐎𐐯𐑌𐑆𐐼𐐩","𐐛𐐲𐑉𐑆𐐼𐐩","𐐙𐑉𐐴𐐼𐐩","𐐝𐐰𐐻𐐲𐑉𐐼𐐩"],
MONTH:["𐐖𐐰𐑌𐐷𐐭𐐯𐑉𐐨","𐐙𐐯𐐺𐑉𐐭𐐯𐑉𐐨","𐐣𐐪𐑉𐐽","𐐁𐐹𐑉𐐮𐑊","𐐣𐐩","𐐖𐐭𐑌","𐐖𐐭𐑊𐐴","𐐂𐑀𐐲𐑅𐐻","𐐝𐐯𐐹𐐻𐐯𐑋𐐺𐐲𐑉","𐐉𐐿𐐻𐐬𐐺𐐲𐑉","𐐤𐐬𐑂𐐯𐑋𐐺𐐲𐑉","𐐔𐐨𐑅𐐯𐑋𐐺𐐲𐑉"],
SHORTDAY:["𐐝𐐲𐑌","𐐣𐐲𐑌","𐐓𐐭𐑆","𐐎𐐯𐑌","𐐛𐐲𐑉","𐐙𐑉𐐴","𐐝𐐰𐐻"],SHORTMONTH:["𐐖𐐰𐑌","𐐙𐐯𐐺","𐐣𐐪𐑉","𐐁𐐹𐑉","𐐣𐐩","𐐖𐐭𐑌","𐐖𐐭𐑊","𐐂𐑀","𐐝𐐯𐐹","𐐉𐐿𐐻","𐐤𐐬𐑂","𐐔𐐨𐑅"],
fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",
mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"
},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,
lgSize:3,macFrac:0,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""
},{gSize:3,lgSize:3,macFrac:0,maxFrac:2,minFrac:2,minInt:1,negPre:"(¤",negSuf:")",
posPre:"¤",posSuf:""}]},id:"en-dsrt-us",pluralCat:function(e){return 1==e?a.ONE:a.OTHER;
}})}]);