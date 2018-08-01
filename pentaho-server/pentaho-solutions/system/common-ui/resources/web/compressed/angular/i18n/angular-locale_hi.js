angular.module("ngLocale",[],["$provide",function(e){var E={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{
AMPMS:["am","pm"],DAY:["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],
ERANAMES:["ईसा-पूर्व","ईसवी सन"],ERAS:["ईसा-पूर्व","ईस्वी"],FIRSTDAYOFWEEK:6,MONTH:["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्तूबर","नवंबर","दिसंबर"],
SHORTDAY:["रवि","सोम","मंगल","बुध","गुरु","शुक्र","शनि"],SHORTMONTH:["जन॰","फ़र॰","मार्च","अप्रैल","मई","जून","जुल॰","अग॰","सित॰","अक्तू॰","नव॰","दिस॰"],
STANDALONEMONTH:["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्तूबर","नवंबर","दिसंबर"],
WEEKENDRANGE:[6,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"dd/MM/y h:mm:ss a",
mediumDate:"dd/MM/y",mediumTime:"h:mm:ss a","short":"d/M/yy h:mm a",shortDate:"d/M/yy",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"₹",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:2,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"hi",localeID:"hi",pluralCat:function(e,M){var a=0|e;return 0==a||1==e?E.ONE:E.OTHER;
}})}]);