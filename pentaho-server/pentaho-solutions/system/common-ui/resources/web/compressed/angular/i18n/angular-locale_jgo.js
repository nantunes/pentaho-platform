angular.module("ngLocale",[],["$provide",function(a){function s(a){a+="";var s=a.indexOf(".");
return-1==s?0:a.length-s-1}function t(a,t){var P=t;void 0===P&&(P=Math.min(s(a),3));
var n=Math.pow(10,P),m=(a*n|0)%n;return{v:P,f:m}}var P={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["mbaꞌmbaꞌ","ŋka mbɔ́t nji"],
DAY:["Sɔ́ndi","Mɔ́ndi","Ápta Mɔ́ndi","Wɛ́nɛsɛdɛ","Tɔ́sɛdɛ","Fɛlâyɛdɛ","Sásidɛ"],ERANAMES:["tsɛttsɛt mɛŋguꞌ mi ɛ́ lɛɛnɛ Kɛlísɛtɔ gɔ ńɔ́","tsɛttsɛt mɛŋguꞌ mi ɛ́ fúnɛ Kɛlísɛtɔ tɔ́ mɔ́"],
ERAS:["tsɛttsɛt mɛŋguꞌ mi ɛ́ lɛɛnɛ Kɛlísɛtɔ gɔ ńɔ́","tsɛttsɛt mɛŋguꞌ mi ɛ́ fúnɛ Kɛlísɛtɔ tɔ́ mɔ́"],
FIRSTDAYOFWEEK:0,MONTH:["Nduŋmbi Saŋ","Pɛsaŋ Pɛ́pá","Pɛsaŋ Pɛ́tát","Pɛsaŋ Pɛ́nɛ́kwa","Pɛsaŋ Pataa","Pɛsaŋ Pɛ́nɛ́ntúkú","Pɛsaŋ Saambá","Pɛsaŋ Pɛ́nɛ́fɔm","Pɛsaŋ Pɛ́nɛ́pfúꞋú","Pɛsaŋ Nɛgɛ́m","Pɛsaŋ Ntsɔ̌pmɔ́","Pɛsaŋ Ntsɔ̌ppá"],
SHORTDAY:["Sɔ́ndi","Mɔ́ndi","Ápta Mɔ́ndi","Wɛ́nɛsɛdɛ","Tɔ́sɛdɛ","Fɛlâyɛdɛ","Sásidɛ"],
SHORTMONTH:["Nduŋmbi Saŋ","Pɛsaŋ Pɛ́pá","Pɛsaŋ Pɛ́tát","Pɛsaŋ Pɛ́nɛ́kwa","Pɛsaŋ Pataa","Pɛsaŋ Pɛ́nɛ́ntúkú","Pɛsaŋ Saambá","Pɛsaŋ Pɛ́nɛ́fɔm","Pɛsaŋ Pɛ́nɛ́pfúꞋú","Pɛsaŋ Nɛgɛ́m","Pɛsaŋ Ntsɔ̌pmɔ́","Pɛsaŋ Ntsɔ̌ppá"],
STANDALONEMONTH:["Nduŋmbi Saŋ","Pɛsaŋ Pɛ́pá","Pɛsaŋ Pɛ́tát","Pɛsaŋ Pɛ́nɛ́kwa","Pɛsaŋ Pataa","Pɛsaŋ Pɛ́nɛ́ntúkú","Pɛsaŋ Saambá","Pɛsaŋ Pɛ́nɛ́fɔm","Pɛsaŋ Pɛ́nɛ́pfúꞋú","Pɛsaŋ Nɛgɛ́m","Pɛsaŋ Ntsɔ̌pmɔ́","Pɛsaŋ Ntsɔ̌ppá"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, y MMMM dd",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",
mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",
posPre:"¤ ",posSuf:""}]},id:"jgo",localeID:"jgo",pluralCat:function(a,s){var n=0|a,m=t(a,s);
return 1==n&&0==m.v?P.ONE:P.OTHER}})}]);