angular.module("ngLocale",[],["$provide",function(a){function n(a){a+="";var n=a.indexOf(".");
return-1==n?0:a.length-n-1}function k(a,k){var t=k;void 0===t&&(t=Math.min(n(a),3));
var e=Math.pow(10,t),m=(a*e|0)%e;return{v:t,f:m}}var t={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["sárúwá","cɛɛ́nko"],
DAY:["sɔ́ndǝ","lǝndí","maadí","mɛkrɛdí","jǝǝdí","júmbá","samdí"],ERANAMES:["di Yɛ́sus aká yálɛ","cámɛɛn kǝ kǝbɔpka Y"],
ERAS:["d.Y.","k.Y."],FIRSTDAYOFWEEK:0,MONTH:["ŋwíí a ntɔ́ntɔ","ŋwíí akǝ bɛ́ɛ","ŋwíí akǝ ráá","ŋwíí akǝ nin","ŋwíí akǝ táan","ŋwíí akǝ táafɔk","ŋwíí akǝ táabɛɛ","ŋwíí akǝ táaraa","ŋwíí akǝ táanin","ŋwíí akǝ ntɛk","ŋwíí akǝ ntɛk di bɔ́k","ŋwíí akǝ ntɛk di bɛ́ɛ"],
SHORTDAY:["sɔ́n","lǝn","maa","mɛk","jǝǝ","júm","sam"],SHORTMONTH:["ŋ1","ŋ2","ŋ3","ŋ4","ŋ5","ŋ6","ŋ7","ŋ8","ŋ9","ŋ10","ŋ11","ŋ12"],
STANDALONEMONTH:["ŋwíí a ntɔ́ntɔ","ŋwíí akǝ bɛ́ɛ","ŋwíí akǝ ráá","ŋwíí akǝ nin","ŋwíí akǝ táan","ŋwíí akǝ táafɔk","ŋwíí akǝ táabɛɛ","ŋwíí akǝ táaraa","ŋwíí akǝ táanin","ŋwíí akǝ ntɛk","ŋwíí akǝ ntɛk di bɔ́k","ŋwíí akǝ ntɛk di bɛ́ɛ"],
WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",
mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"ksf",localeID:"ksf",pluralCat:function(a,n){var e=0|a,m=k(a,n);
return 1==e&&0==m.v?t.ONE:t.OTHER}})}]);