angular.module("ngLocale",[],["$provide",function(e){var a={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{
AMPMS:["‮AM‬","‮PM‬"],DAY:["‮Sunday‬","‮Monday‬","‮Tuesday‬","‮Wednesday‬","‮Thursday‬","‮Friday‬","‮Saturday‬"],
ERANAMES:["‮Before‬ ‮Christ‬","‮Anno‬ ‮Domini‬"],ERAS:["‮BC‬","‮AD‬"],FIRSTDAYOFWEEK:0,
MONTH:["‮January‬","‮February‬","‮March‬","‮April‬","‮May‬","‮June‬","‮July‬","‮August‬","‮September‬","‮October‬","‮November‬","‮December‬"],
SHORTDAY:["‮Sun‬","‮Mon‬","‮Tue‬","‮Wed‬","‮Thu‬","‮Fri‬","‮Sat‬"],SHORTMONTH:["‮Jan‬","‮Feb‬","‮Mar‬","‮Apr‬","‮May‬","‮Jun‬","‮Jul‬","‮Aug‬","‮Sep‬","‮Oct‬","‮Nov‬","‮Dec‬"],
STANDALONEMONTH:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],
WEEKENDRANGE:[5,6],fullDate:"EEEE، d MMMM، y",longDate:"d MMMM، y",medium:"dd‏/MM‏/y h:mm:ss a",
mediumDate:"dd‏/MM‏/y",mediumTime:"h:mm:ss a","short":"d‏/M‏/y h:mm a",shortDate:"d‏/M‏/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"£",DECIMAL_SEP:"٫",GROUP_SEP:"٬",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"ar-xb",localeID:"ar_XB",pluralCat:function(e,r){return 0==e?a.ZERO:1==e?a.ONE:2==e?a.TWO:e%100>=3&&10>=e%100?a.FEW:e%100>=11&&99>=e%100?a.MANY:a.OTHER;
}})}]);