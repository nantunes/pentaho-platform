angular.module("ngLocale",[],["$provide",function(i){function e(i){i+="";var e=i.indexOf(".");
return-1==e?0:i.length-e-1}function a(i,a){var r=a;void 0===r&&(r=Math.min(e(i),3));
var s=Math.pow(10,r),o=(i*s|0)%s;return{v:r,f:o}}var r={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};i.value("$locale",{DATETIME_FORMATS:{AMPMS:["priešpiet","popiet"],
DAY:["sekmadienis","pirmadienis","antradienis","trečiadienis","ketvirtadienis","penktadienis","šeštadienis"],
ERANAMES:["prieš Kristų","po Kristaus"],ERAS:["pr. Kr.","po Kr."],FIRSTDAYOFWEEK:0,
MONTH:["sausio","vasario","kovo","balandžio","gegužės","birželio","liepos","rugpjūčio","rugsėjo","spalio","lapkričio","gruodžio"],
SHORTDAY:["sk","pr","an","tr","kt","pn","št"],SHORTMONTH:["saus.","vas.","kov.","bal.","geg.","birž.","liep.","rugp.","rugs.","spal.","lapkr.","gruod."],
STANDALONEMONTH:["sausis","vasaris","kovas","balandis","gegužė","birželis","liepa","rugpjūtis","rugsėjis","spalis","lapkritis","gruodis"],
WEEKENDRANGE:[5,6],fullDate:"y 'm'. MMMM d 'd'., EEEE",longDate:"y 'm'. MMMM d 'd'.",
medium:"y-MM-dd HH:mm:ss",mediumDate:"y-MM-dd",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",
shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",
GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",
negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",
negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"lt-lt",localeID:"lt_LT",pluralCat:function(i,e){
var s=a(i,e);return i%10==1&&(11>i%100||i%100>19)?r.ONE:i%10>=2&&9>=i%10&&(11>i%100||i%100>19)?r.FEW:0!=s.f?r.MANY:r.OTHER;
}})}]);