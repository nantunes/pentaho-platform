angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{
AMPMS:["կեսօրից առաջ","կեսօրից հետո"],DAY:["կիրակի","երկուշաբթի","երեքշաբթի","չորեքշաբթի","հինգշաբթի","ուրբաթ","շաբաթ"],
ERANAMES:["մ.թ.ա.","մ.թ."],ERAS:["մ.թ.ա.","մ.թ."],FIRSTDAYOFWEEK:0,MONTH:["հունվարի","փետրվարի","մարտի","ապրիլի","մայիսի","հունիսի","հուլիսի","օգոստոսի","սեպտեմբերի","հոկտեմբերի","նոյեմբերի","դեկտեմբերի"],
SHORTDAY:["կիր","երկ","երք","չրք","հնգ","ուր","շբթ"],SHORTMONTH:["հնվ","փտվ","մրտ","ապր","մյս","հնս","հլս","օգս","սեպ","հոկ","նոյ","դեկ"],
STANDALONEMONTH:["հունվար","փետրվար","մարտ","ապրիլ","մայիս","հունիս","հուլիս","օգոստոս","սեպտեմբեր","հոկտեմբեր","նոյեմբեր","դեկտեմբեր"],
WEEKENDRANGE:[5,6],fullDate:"yթ. MMMM d, EEEE",longDate:"dd MMMM, yթ.",medium:"dd MMM, yթ. H:mm:ss",
mediumDate:"dd MMM, yթ.",mediumTime:"H:mm:ss","short":"dd.MM.yy H:mm",shortDate:"dd.MM.yy",
shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Dram",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:0,lgSize:0,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:0,lgSize:0,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",
posPre:"",posSuf:" ¤"}]},id:"hy",localeID:"hy",pluralCat:function(e,E){var m=0|e;return 0==m||1==m?M.ONE:M.OTHER;
}})}]);