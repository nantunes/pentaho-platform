angular.module("ngLocale",[],["$provide",function(e){function n(e){e+="";var n=e.indexOf(".");
return-1==n?0:e.length-n-1}function o(e,o){var a=o;void 0===a&&(a=Math.min(n(e),3));
var M=Math.pow(10,a),E=(e*M|0)%M;return{v:a,f:E}}var a={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["[ÅṀ one]","[ÞṀ one]"],
DAY:["[Šûñðåý one]","[Ṁöñðåý one]","[Ţûéšðåý one]","[Ŵéðñéšðåý one two]","[Ţĥûŕšðåý one]","[Ƒŕîðåý one]","[Šåţûŕðåý one]"],
ERANAMES:["[Ɓéƒöŕé Çĥŕîšţ one two]","[Åññö Ðöɱîñî one two]"],ERAS:["[ƁÇ one]","[ÅÐ one]"],
FIRSTDAYOFWEEK:0,MONTH:["[Ĵåñûåŕý one]","[Ƒéƀŕûåŕý one]","[Ṁåŕçĥ one]","[Åþŕîļ one]","[Ṁåý one]","[Ĵûñé one]","[Ĵûļý one]","[Åûĝûšţ one]","[Šéþţéɱƀéŕ one two]","[Öçţöƀéŕ one]","[Ñöṽéɱƀéŕ one]","[Ðéçéɱƀéŕ one]"],
SHORTDAY:["[Šûñ one]","[Ṁöñ one]","[Ţûé one]","[Ŵéð one]","[Ţĥû one]","[Ƒŕî one]","[Šåţ one]"],
SHORTMONTH:["[Ĵåñ one]","[Ƒéƀ one]","[Ṁåŕ one]","[Åþŕ one]","[Ṁåý one]","[Ĵûñ one]","[Ĵûļ one]","[Åûĝ one]","[Šéþ one]","[Öçţ one]","[Ñöṽ one]","[Ðéç one]"],
STANDALONEMONTH:["[Ĵåñûåŕý one]","[Ƒéƀŕûåŕý one]","[Ṁåŕçĥ one]","[Åþŕîļ one]","[Ṁåý one]","[Ĵûñé one]","[Ĵûļý one]","[Åûĝûšţ one]","[Šéþţéɱƀéŕ one two]","[Öçţöƀéŕ one]","[Ñöṽéɱƀéŕ one]","[Ðéçéɱƀéŕ one]"],
WEEKENDRANGE:[5,6],fullDate:"[EEEE, MMMM d, y]",longDate:"[MMMM d, y]",medium:"[MMM d, y] [h:mm:ss a]",
mediumDate:"[MMM d, y]",mediumTime:"[h:mm:ss a]","short":"[M/d/yy] [h:mm a]",shortDate:"[M/d/yy]",
shortTime:"[h:mm a]"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"en-xa",localeID:"en_XA",pluralCat:function(e,n){var M=0|e,E=o(e,n);
return 1==M&&0==E.v?a.ONE:a.OTHER}})}]);