angular.module("ngLocale",[],["$provide",function(a){function s(a){a+="";var s=a.indexOf(".");
return-1==s?0:a.length-s-1}function i(a,i){var n=i;void 0===n&&(n=Math.min(s(a),3));
var l=Math.pow(10,n),e=(a*l|0)%l;return{v:n,f:e}}var n={ZERO:"zero",ONE:"one",TWO:"two",
FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["ankstāinan","pa pussideinan"],
DAY:["nadīli","panadīli","wisasīdis","pussisawaiti","ketwirtiks","pēntniks","sabattika"],
ERANAMES:["BC","AD"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:0,MONTH:["rags","wassarins","pūlis","sakkis","zallaws","sīmenis","līpa","daggis","sillins","spallins","lapkrūtis","sallaws"],
SHORTDAY:["nad","pan","wis","pus","ket","pēn","sab"],SHORTMONTH:["rag","was","pūl","sak","zal","sīm","līp","dag","sil","spa","lap","sal"],
STANDALONEMONTH:["rags","wassarins","pūlis","sakkis","zallaws","sīmenis","līpa","daggis","sillins","spallins","lapkrūtis","sallaws"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, y 'mettas' d. MMMM",longDate:"y 'mettas' d. MMMM",
medium:"dd.MM 'st'. y HH:mm:ss",mediumDate:"dd.MM 'st'. y",mediumTime:"HH:mm:ss",
"short":"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{
CURRENCY_SYM:"$",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,
minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,
minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"prg-001",localeID:"prg_001",
pluralCat:function(a,s){var l=0|a,e=i(a,s);return 1==l&&0==e.v?n.ONE:n.OTHER}})}]);