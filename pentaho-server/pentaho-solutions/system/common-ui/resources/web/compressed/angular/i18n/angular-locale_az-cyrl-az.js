angular.module("ngLocale",[],["$provide",function(M){var e={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};M.value("$locale",{DATETIME_FORMATS:{
AMPMS:["AM","PM"],DAY:["базар","базар ертәси","чәршәнбә ахшамы","чәршәнбә","ҹүмә ахшамы","ҹүмә","шәнбә"],
ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:0,MONTH:["јанвар","феврал","март","апрел","май","ијун","ијул","август","сентјабр","октјабр","нојабр","декабр"],
SHORTDAY:["базар","базар ертәси","чәршәнбә ахшамы","чәршәнбә","ҹүмә ахшамы","ҹүмә","шәнбә"],
SHORTMONTH:["јанвар","феврал","март","апрел","май","ијун","ијул","август","сентјабр","октјабр","нојабр","декабр"],
STANDALONEMONTH:["јанвар","феврал","март","апрел","май","ијун","ијул","август","сентјабр","октјабр","нојабр","декабр"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, d, MMMM, y",longDate:"d MMMM, y",medium:"d MMM, y HH:mm:ss",
mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"man.",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"az-cyrl-az",localeID:"az_Cyrl_AZ",pluralCat:function(M,E){
return 1==M?e.ONE:e.OTHER}})}]);