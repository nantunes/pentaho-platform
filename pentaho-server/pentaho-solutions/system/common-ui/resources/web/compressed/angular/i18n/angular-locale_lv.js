angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");
return-1==r?0:e.length-r-1}function i(e,i){var a=i;void 0===a&&(a=Math.min(r(e),3));
var s=Math.pow(10,a),n=(e*s|0)%s;return{v:a,f:n}}var a={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["priekšpusdienā","pēcpusdienā"],
DAY:["svētdiena","pirmdiena","otrdiena","trešdiena","ceturtdiena","piektdiena","sestdiena"],
ERANAMES:["pirms mūsu ēras","mūsu ērā"],ERAS:["p.m.ē.","m.ē."],FIRSTDAYOFWEEK:0,MONTH:["janvāris","februāris","marts","aprīlis","maijs","jūnijs","jūlijs","augusts","septembris","oktobris","novembris","decembris"],
SHORTDAY:["Sv","Pr","Ot","Tr","Ce","Pk","Se"],SHORTMONTH:["janv.","febr.","marts","apr.","maijs","jūn.","jūl.","aug.","sept.","okt.","nov.","dec."],
STANDALONEMONTH:["Janvāris","Februāris","Marts","Aprīlis","Maijs","Jūnijs","Jūlijs","Augusts","Septembris","Oktobris","Novembris","Decembris"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, y. 'gada' d. MMMM",longDate:"y. 'gada' d. MMMM",
medium:"y. 'gada' d. MMM HH:mm:ss",mediumDate:"y. 'gada' d. MMM",mediumTime:"HH:mm:ss",
"short":"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{
CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,
minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:0,lgSize:0,maxFrac:2,
minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"lv",localeID:"lv",
pluralCat:function(e,r){var s=i(e,r);return e%10==0||e%100>=11&&19>=e%100||2==s.v&&s.f%100>=11&&s.f%100<=19?a.ZERO:e%10==1&&e%100!=11||2==s.v&&s.f%10==1&&s.f%100!=11||2!=s.v&&s.f%10==1?a.ONE:a.OTHER;
}})}]);