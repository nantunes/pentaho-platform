angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");
return-1==a?0:e.length-a-1}function n(e,n){var u=n;void 0===u&&(u=Math.min(a(e),3));
var r=Math.pow(10,u),M=(e*r|0)%r;return{v:u,f:M}}var u={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["n tufat","n tmeddit"],
DAY:["Yanass","Sanass","Kraḍass","Kuẓass","Samass","Sḍisass","Sayass"],ERANAMES:["send talalit n Ɛisa","seld talalit n Ɛisa"],
ERAS:["snd. T.Ɛ","sld. T.Ɛ"],FIRSTDAYOFWEEK:0,MONTH:["Yennayer","Fuṛar","Meɣres","Yebrir","Mayyu","Yunyu","Yulyu","Ɣuct","Ctembeṛ","Tubeṛ","Nunembeṛ","Duǧembeṛ"],
SHORTDAY:["Yan","San","Kraḍ","Kuẓ","Sam","Sḍis","Say"],SHORTMONTH:["Yen","Fur","Meɣ","Yeb","May","Yun","Yul","Ɣuc","Cte","Tub","Nun","Duǧ"],
STANDALONEMONTH:["Yennayer","Fuṛar","Meɣres","Yebrir","Mayyu","Yunyu","Yulyu","Ɣuct","Ctembeṛ","Tubeṛ","Nunembeṛ","Duǧembeṛ"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM, y HH:mm:ss",
mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"din",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"¤",posPre:"",
posSuf:"¤"}]},id:"kab",localeID:"kab",pluralCat:function(e,a){var r=0|e,M=n(e,a);return 1==r&&0==M.v?u.ONE:u.OTHER;
}})}]);