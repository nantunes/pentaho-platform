angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{
AMPMS:["ກ່ອນທ່ຽງ","ຫຼັງທ່ຽງ"],DAY:["ວັນອາທິດ","ວັນຈັນ","ວັນອັງຄານ","ວັນພຸດ","ວັນພະຫັດ","ວັນສຸກ","ວັນເສົາ"],
ERANAMES:["ກ່ອນຄຣິດສັກກະລາດ","ຄຣິດສັກກະລາດ"],ERAS:["ກ່ອນ ຄ.ສ.","ຄ.ສ."],FIRSTDAYOFWEEK:6,
MONTH:["ມັງກອນ","ກຸມພາ","ມີນາ","ເມສາ","ພຶດສະພາ","ມິຖຸນາ","ກໍລະກົດ","ສິງຫາ","ກັນຍາ","ຕຸລາ","ພະຈິກ","ທັນວາ"],
SHORTDAY:["ວັນອາທິດ","ວັນຈັນ","ວັນອັງຄານ","ວັນພຸດ","ວັນພະຫັດ","ວັນສຸກ","ວັນເສົາ"],
SHORTMONTH:["ມ.ກ.","ກ.ພ.","ມ.ນ.","ມ.ສ.","ພ.ພ.","ມິ.ຖ.","ກ.ລ.","ສ.ຫ.","ກ.ຍ.","ຕ.ລ.","ພ.ຈ.","ທ.ວ."],
STANDALONEMONTH:["ມັງກອນ","ກຸມພາ","ມີນາ","ເມສາ","ພຶດສະພາ","ມິຖຸນາ","ກໍລະກົດ","ສິງຫາ","ກັນຍາ","ຕຸລາ","ພະຈິກ","ທັນວາ"],
WEEKENDRANGE:[5,6],fullDate:"EEEE ທີ d MMMM G y",longDate:"d MMMM y",medium:"d MMM y H:mm:ss",
mediumDate:"d MMM y",mediumTime:"H:mm:ss","short":"d/M/y H:mm",shortDate:"d/M/y",
shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"₭",DECIMAL_SEP:",",GROUP_SEP:".",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",
posSuf:""}]},id:"lo-la",localeID:"lo_LA",pluralCat:function(e,E){return M.OTHER}});
}]);