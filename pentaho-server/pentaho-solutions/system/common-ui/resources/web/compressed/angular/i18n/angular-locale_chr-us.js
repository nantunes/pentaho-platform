angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{
AMPMS:["ᏌᎾᎴ","ᏒᎯᏱᎢᏗᏢ"],DAY:["ᎤᎾᏙᏓᏆᏍᎬ","ᎤᎾᏙᏓᏉᏅᎯ","ᏔᎵᏁᎢᎦ","ᏦᎢᏁᎢᎦ","ᏅᎩᏁᎢᎦ","ᏧᎾᎩᎶᏍᏗ","ᎤᎾᏙᏓᏈᏕᎾ"],
ERANAMES:["Ꮟ ᏥᏌ ᎾᏕᎲᏍᎬᎾ","ᎠᎩᏃᎮᎵᏓᏍᏗᏱ ᎠᏕᏘᏱᏍᎬ ᏱᎰᏩ ᏧᏓᏂᎸᎢᏍᏗ"],ERAS:["ᎤᏓᎷᎸ","ᎤᎶᏐᏅ"],FIRSTDAYOFWEEK:6,
MONTH:["ᎤᏃᎸᏔᏅ","ᎧᎦᎵ","ᎠᏅᏱ","ᎧᏬᏂ","ᎠᏂᏍᎬᏘ","ᏕᎭᎷᏱ","ᎫᏰᏉᏂ","ᎦᎶᏂ","ᏚᎵᏍᏗ","ᏚᏂᏅᏗ","ᏅᏓᏕᏆ","ᎥᏍᎩᏱ"],
SHORTDAY:["ᏆᏍᎬ","ᏉᏅᎯ","ᏔᎵᏁ","ᏦᎢᏁ","ᏅᎩᏁ","ᏧᎾᎩ","ᏈᏕᎾ"],SHORTMONTH:["ᎤᏃ","ᎧᎦ","ᎠᏅ","ᎧᏬ","ᎠᏂ","ᏕᎭ","ᎫᏰ","ᎦᎶ","ᏚᎵ","ᏚᏂ","ᏅᏓ","ᎥᏍ"],
STANDALONEMONTH:["ᎤᏃᎸᏔᏅ","ᎧᎦᎵ","ᎠᏅᏱ","ᎧᏬᏂ","ᎠᏂᏍᎬᏘ","ᏕᎭᎷᏱ","ᎫᏰᏉᏂ","ᎦᎶᏂ","ᏚᎵᏍᏗ","ᏚᏂᏅᏗ","ᏅᏓᏕᏆ","ᎥᏍᎩᏱ"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",
mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"chr-us",localeID:"chr_US",pluralCat:function(e,E){return 1==e?M.ONE:M.OTHER;
}})}]);