angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");
return-1==e?0:a.length-e-1}function n(a,n){var u=n;void 0===u&&(u=Math.min(e(a),3));
var r=Math.pow(10,u),M=(a*r|0)%r;return{v:u,f:M}}var u={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],
DAY:["Ku cyumweru","Kuwa mbere","Kuwa kabiri","Kuwa gatatu","Kuwa kane","Kuwa gatanu","Kuwa gatandatu"],
ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:0,MONTH:["Mutarama","Gashyantare","Werurwe","Mata","Gicuransi","Kamena","Nyakanga","Kanama","Nzeli","Ukwakira","Ugushyingo","Ukuboza"],
SHORTDAY:["cyu.","mbe.","kab.","gtu.","kan.","gnu.","gnd."],SHORTMONTH:["mut.","gas.","wer.","mat.","gic.","kam.","nya.","kan.","nze.","ukw.","ugu.","uku."],
STANDALONEMONTH:["Mutarama","Gashyantare","Werurwe","Mata","Gicuransi","Kamena","Nyakanga","Kanama","Nzeli","Ukwakira","Ugushyingo","Ukuboza"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, y MMMM dd",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",
mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"yy/MM/dd HH:mm",shortDate:"yy/MM/dd",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"RF",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"rw-rw",localeID:"rw_RW",pluralCat:function(a,e){var r=0|a,M=n(a,e);
return 1==r&&0==M.v?u.ONE:u.OTHER}})}]);