angular.module("ngLocale",[],["$provide",function(a){function u(a){a+="";var u=a.indexOf(".");
return-1==u?0:a.length-u-1}function n(a,n){var M=n;void 0===M&&(M=Math.min(u(a),3));
var e=Math.pow(10,M),i=(a*e|0)%e;return{v:M,f:i}}var M={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Sonto","Musumbhunuku","Ravumbirhi","Ravunharhu","Ravumune","Ravuntlhanu","Mugqivela"],
ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:6,MONTH:["Sunguti","Nyenyenyani","Nyenyankulu","Dzivamisoko","Mudyaxihi","Khotavuxika","Mawuwani","Mhawuri","Ndzhati","Nhlangula","Hukuri","N’wendzamhala"],
SHORTDAY:["Son","Mus","Bir","Har","Ne","Tlh","Mug"],SHORTMONTH:["Sun","Yan","Kul","Dzi","Mud","Kho","Maw","Mha","Ndz","Nhl","Huk","N’w"],
WEEKENDRANGE:[5,6],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",
mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"R",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",
posSuf:""}]},id:"ts",pluralCat:function(a,u){var e=0|a,i=n(a,u);return 1==e&&0==i.v?M.ONE:M.OTHER;
}})}]);