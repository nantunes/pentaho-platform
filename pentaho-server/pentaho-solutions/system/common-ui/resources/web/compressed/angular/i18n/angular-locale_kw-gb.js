angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");
return-1==r?0:e.length-r-1}function m(e,m){var i=m;void 0===i&&(i=Math.min(r(e),3));
var M=Math.pow(10,i),n=(e*M|0)%M;return{v:i,f:n}}var i={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["a.m.","p.m."],
DAY:["dy Sul","dy Lun","dy Meurth","dy Merher","dy Yow","dy Gwener","dy Sadorn"],
ERANAMES:["RC","AD"],ERAS:["RC","AD"],FIRSTDAYOFWEEK:0,MONTH:["mis Genver","mis Hwevrer","mis Meurth","mis Ebrel","mis Me","mis Metheven","mis Gortheren","mis Est","mis Gwynngala","mis Hedra","mis Du","mis Kevardhu"],
SHORTDAY:["Sul","Lun","Mth","Mhr","Yow","Gwe","Sad"],SHORTMONTH:["Gen","Hwe","Meu","Ebr","Me","Met","Gor","Est","Gwn","Hed","Du","Kev"],
STANDALONEMONTH:["mis Genver","mis Hwevrer","mis Meurth","mis Ebrel","mis Me","mis Metheven","mis Gortheren","mis Est","mis Gwynngala","mis Hedra","mis Du","mis Kevardhu"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",
mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd/MM/y HH:mm",shortDate:"dd/MM/y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"£",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"kw-gb",localeID:"kw_GB",pluralCat:function(e,r){var M=0|e,n=m(e,r);
return 1==M&&0==n.v?i.ONE:i.OTHER}})}]);