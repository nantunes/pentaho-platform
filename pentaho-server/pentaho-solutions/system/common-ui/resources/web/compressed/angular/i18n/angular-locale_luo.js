angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");
return-1==r?0:e.length-r-1}function a(e,a){var i=a;void 0===i&&(i=Math.min(r(e),3));
var A=Math.pow(10,i),D=(e*A|0)%A;return{v:i,f:D}}var i={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["OD","OT"],
DAY:["Jumapil","Wuok Tich","Tich Ariyo","Tich Adek","Tich Ang’wen","Tich Abich","Ngeso"],
ERANAMES:["Kapok Kristo obiro","Ka Kristo osebiro"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:0,
MONTH:["Dwe mar Achiel","Dwe mar Ariyo","Dwe mar Adek","Dwe mar Ang’wen","Dwe mar Abich","Dwe mar Auchiel","Dwe mar Abiriyo","Dwe mar Aboro","Dwe mar Ochiko","Dwe mar Apar","Dwe mar gi achiel","Dwe mar Apar gi ariyo"],
SHORTDAY:["JMP","WUT","TAR","TAD","TAN","TAB","NGS"],SHORTMONTH:["DAC","DAR","DAD","DAN","DAH","DAU","DAO","DAB","DOC","DAP","DGI","DAG"],
STANDALONEMONTH:["Dwe mar Achiel","Dwe mar Ariyo","Dwe mar Adek","Dwe mar Ang’wen","Dwe mar Abich","Dwe mar Auchiel","Dwe mar Abiriyo","Dwe mar Aboro","Dwe mar Ochiko","Dwe mar Apar","Dwe mar gi achiel","Dwe mar Apar gi ariyo"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",
mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"¤",posPre:"",
posSuf:"¤"}]},id:"luo",localeID:"luo",pluralCat:function(e,r){var A=0|e,D=a(e,r);return 1==A&&0==D.v?i.ONE:i.OTHER;
}})}]);