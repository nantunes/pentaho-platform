angular.module("ngLocale",[],["$provide",function(a){function t(a){a+="";var t=a.indexOf(".");
return-1==t?0:a.length-t-1}function e(a,e){var W=e;void 0===W&&(W=Math.min(t(a),3));
var u=Math.pow(10,W),p=(a*u|0)%u;return{v:W,f:p}}var W={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Aŋpétuwakȟaŋ","Aŋpétuwaŋži","Aŋpétunuŋpa","Aŋpétuyamni","Aŋpétutopa","Aŋpétuzaptaŋ","Owáŋgyužažapi"],
ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:0,MONTH:["Wiótheȟika Wí","Thiyóȟeyuŋka Wí","Ištáwičhayazaŋ Wí","Pȟežítȟo Wí","Čhaŋwápetȟo Wí","Wípazukȟa-wašté Wí","Čhaŋpȟásapa Wí","Wasútȟuŋ Wí","Čhaŋwápeǧi Wí","Čhaŋwápe-kasná Wí","Waníyetu Wí","Tȟahékapšuŋ Wí"],
SHORTDAY:["Aŋpétuwakȟaŋ","Aŋpétuwaŋži","Aŋpétunuŋpa","Aŋpétuyamni","Aŋpétutopa","Aŋpétuzaptaŋ","Owáŋgyužažapi"],
SHORTMONTH:["Wiótheȟika Wí","Thiyóȟeyuŋka Wí","Ištáwičhayazaŋ Wí","Pȟežítȟo Wí","Čhaŋwápetȟo Wí","Wípazukȟa-wašté Wí","Čhaŋpȟásapa Wí","Wasútȟuŋ Wí","Čhaŋwápeǧi Wí","Čhaŋwápe-kasná Wí","Waníyetu Wí","Tȟahékapšuŋ Wí"],
STANDALONEMONTH:["Wiótheȟika Wí","Thiyóȟeyuŋka Wí","Ištáwičhayazaŋ Wí","Pȟežítȟo Wí","Čhaŋwápetȟo Wí","Wípazukȟa-wašté Wí","Čhaŋpȟásapa Wí","Wasútȟuŋ Wí","Čhaŋwápeǧi Wí","Čhaŋwápe-kasná Wí","Waníyetu Wí","Tȟahékapšuŋ Wí"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",
mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"lkt",localeID:"lkt",pluralCat:function(a,t){var u=0|a,p=e(a,t);
return 1==u&&0==p.v?W.ONE:W.OTHER}})}]);