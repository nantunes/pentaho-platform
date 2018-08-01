angular.module("ngLocale",[],["$provide",function(e){var E={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{
AMPMS:["ص","م"],DAY:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
ERANAMES:["قبل الميلاد","ميلادي"],ERAS:["ق.م","م"],FIRSTDAYOFWEEK:5,MONTH:["يناير","فبراير","مارس","أبريل","ماي","يونيو","يوليوز","غشت","شتنبر","أكتوبر","نونبر","دجنبر"],
SHORTDAY:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],SHORTMONTH:["يناير","فبراير","مارس","أبريل","ماي","يونيو","يوليوز","غشت","شتنبر","أكتوبر","نونبر","دجنبر"],
STANDALONEMONTH:["يناير","فبراير","مارس","أبريل","ماي","يونيو","يوليوز","غشت","شتنبر","أكتوبر","نونبر","دجنبر"],
WEEKENDRANGE:[4,5],fullDate:"EEEE، d MMMM، y",longDate:"d MMMM، y",medium:"dd‏/MM‏/y h:mm:ss a",
mediumDate:"dd‏/MM‏/y",mediumTime:"h:mm:ss a","short":"d‏/M‏/y h:mm a",shortDate:"d‏/M‏/y",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"dh",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"ar-ma",localeID:"ar_MA",pluralCat:function(e,M){return 0==e?E.ZERO:1==e?E.ONE:2==e?E.TWO:e%100>=3&&10>=e%100?E.FEW:e%100>=11&&99>=e%100?E.MANY:E.OTHER;
}})}]);