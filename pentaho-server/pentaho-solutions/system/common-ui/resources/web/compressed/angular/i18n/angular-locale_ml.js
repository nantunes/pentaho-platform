angular.module("ngLocale",[],["$provide",function(M){var e={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};M.value("$locale",{DATETIME_FORMATS:{
AMPMS:["AM","PM"],DAY:["ഞായറാഴ്‌ച","തിങ്കളാഴ്‌ച","ചൊവ്വാഴ്ച","ബുധനാഴ്‌ച","വ്യാഴാഴ്‌ച","വെള്ളിയാഴ്‌ച","ശനിയാഴ്‌ച"],
ERANAMES:["ക്രിസ്‌തുവിന് മുമ്പ്","ആന്നോ ഡൊമിനി"],ERAS:["ക്രി.മു.","എഡി"],FIRSTDAYOFWEEK:6,
MONTH:["ജനുവരി","ഫെബ്രുവരി","മാർച്ച്","ഏപ്രിൽ","മേയ്","ജൂൺ","ജൂലൈ","ആഗസ്റ്റ്","സെപ്റ്റംബർ","ഒക്‌ടോബർ","നവംബർ","ഡിസംബർ"],
SHORTDAY:["ഞായർ","തിങ്കൾ","ചൊവ്വ","ബുധൻ","വ്യാഴം","വെള്ളി","ശനി"],SHORTMONTH:["ജനു","ഫെബ്രു","മാർ","ഏപ്രി","മേയ്","ജൂൺ","ജൂലൈ","ഓഗ","സെപ്റ്റം","ഒക്ടോ","നവം","ഡിസം"],
STANDALONEMONTH:["ജനുവരി","ഫെബ്രുവരി","മാർച്ച്","ഏപ്രിൽ","മേയ്","ജൂൺ","ജൂലൈ","ആഗസ്റ്റ്","സെപ്റ്റംബർ","ഒക്‌ടോബർ","നവംബർ","ഡിസംബർ"],
WEEKENDRANGE:[6,6],fullDate:"y, MMMM d, EEEE",longDate:"y, MMMM d",medium:"y, MMM d h:mm:ss a",
mediumDate:"y, MMM d",mediumTime:"h:mm:ss a","short":"dd/MM/yy h:mm a",shortDate:"dd/MM/yy",
shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"₹",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"ml",localeID:"ml",pluralCat:function(M,E){return 1==M?e.ONE:e.OTHER;
}})}]);