angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");
return-1==M?0:e.length-M-1}function n(e,n){var E=n;void 0===E&&(E=Math.min(M(e),3));
var r=Math.pow(10,E),a=(e*r|0)%r;return{v:E,f:a}}var E={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ДП","ПП"],
DAY:["недѣ́лѧ","понедѣ́льникъ","вто́рникъ","среда̀","четверто́къ","пѧто́къ","сꙋббѡ́та"],
ERANAMES:["пре́дъ р. х.","по р. х."],ERAS:["пре́дъ р. х.","по р. х."],FIRSTDAYOFWEEK:0,
MONTH:["і҆аннꙋа́рїа","феврꙋа́рїа","ма́рта","а҆прі́ллїа","ма́їа","і҆ꙋ́нїа","і҆ꙋ́лїа","а҆́ѵгꙋста","септе́мврїа","ѻ҆ктѡ́врїа","ное́мврїа","деке́мврїа"],
SHORTDAY:["ндⷧ҇ѧ","пнⷣе","втоⷬ҇","срⷣе","чеⷦ҇","пѧⷦ҇","сꙋⷠ҇"],SHORTMONTH:["і҆аⷩ҇","феⷡ҇","маⷬ҇","а҆пⷬ҇","маꙵ","і҆ꙋⷩ҇","і҆ꙋⷧ҇","а҆́ѵⷢ҇","сеⷫ҇","ѻ҆кⷮ","ноеⷨ","деⷦ҇"],
STANDALONEMONTH:["і҆аннꙋа́рїй","феврꙋа́рїй","ма́ртъ","а҆прі́ллїй","ма́їй","і҆ꙋ́нїй","і҆ꙋ́лїй","а҆́ѵгꙋстъ","септе́мврїй","ѻ҆ктѡ́врїй","ное́мврїй","деке́мврїй"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM 'л'. y.",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",
mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y.MM.dd HH:mm",shortDate:"y.MM.dd",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"₽",DECIMAL_SEP:",",GROUP_SEP:" ",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"cu",localeID:"cu",pluralCat:function(e,M){var r=0|e,a=n(e,M);
return 1==r&&0==a.v?E.ONE:E.OTHER}})}]);