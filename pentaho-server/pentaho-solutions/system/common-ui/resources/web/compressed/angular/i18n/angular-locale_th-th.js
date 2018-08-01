angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",
TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{
AMPMS:["ก่อนเที่ยง","หลังเที่ยง"],DAY:["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"],
ERANAMES:["ปีก่อนคริสต์ศักราช","คริสต์ศักราช"],ERAS:["ปีก่อน ค.ศ.","ค.ศ."],FIRSTDAYOFWEEK:6,
MONTH:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],
SHORTDAY:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],SHORTMONTH:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],
STANDALONEMONTH:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],
WEEKENDRANGE:[5,6],fullDate:"EEEEที่ d MMMM G y",longDate:"d MMMM G y",medium:"d MMM y HH:mm:ss",
mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/yy HH:mm",shortDate:"d/M/yy",
shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"฿",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",
posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",
posSuf:""}]},id:"th-th",localeID:"th_TH",pluralCat:function(e,E){return M.OTHER}});
}]);