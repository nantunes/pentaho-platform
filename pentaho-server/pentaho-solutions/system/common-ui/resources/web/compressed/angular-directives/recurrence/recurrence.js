define(["common-ui/angular"],function(e){var a=require.toUrl("common-ui/angular-directives/recurrence")+"/";
e.module("recurrence",[]).controller("WeeklyRecurrenceController",["$scope","$attrs","$locale","$element",function(a,t,n,r){
var d=n.DATETIME_FORMATS.DAY[0],c=n.DATETIME_FORMATS.DAY[1],s=n.DATETIME_FORMATS.DAY[2],l=n.DATETIME_FORMATS.DAY[3],i=n.DATETIME_FORMATS.DAY[4],o=n.DATETIME_FORMATS.DAY[5],D=n.DATETIME_FORMATS.DAY[6];
a.weeklyRecurrenceInfo||(a.weeklyRecurrenceInfo={}),a.data={daysOfWeek:[{day:c,key:"MON",
idx:1},{day:s,key:"TUES",idx:2},{day:l,key:"WED",idx:3},{day:i,key:"THURS",idx:4},{
day:o,key:"FRI",idx:5},{day:D,key:"SAT",idx:6},{day:d,key:"SUN",idx:0}],getDayByIndex:function(t){
var n=null;return e.forEach(a.data.daysOfWeek,function(e){return e.idx===t?(n=e,!1):void 0;
}),n},selectedDays:{},endDateDisabled:!0},a.startDate=new Date,a.minStartDate=new Date,
a.endDateRadio="none",a.populateDaysOfWeek=function(){var e=[];for(var t in a.data.selectedDays)for(var n=0;n<a.data.daysOfWeek.length;n++)1==a.data.selectedDays[t]&&a.data.daysOfWeek[n].key==t&&e.push(a.data.daysOfWeek[n].idx);
return e},a.dayOfWeekIsValid=function(){return a.data.selectedDays.SUN||a.data.selectedDays.MON||a.data.selectedDays.TUES||a.data.selectedDays.WED||a.data.selectedDays.THURS||a.data.selectedDays.FRI||a.data.selectedDays.SAT;
},a.hasValidDates=function(){var t=!1;return e.isDate(a.startDate)&&(t=!0,a.data.endDateDisabled||(t=e.isDate(a.endDate)?a.startDate<a.endDate:a.startDate<new Date(a.endDate))),
t},a.isValid=function(){var e="weeklyScheduleForm",t=r.find("form[name='"+e+"']"),n=!1,d=!1;
return t&&t.scope&&t.scope()&&t.scope()[e]?(n=t.scope()[e].$valid,d=a.hasValidDates(),
n&&d):!1}}]).directive("weekly",function(){return{restrict:"A",replace:!0,transclude:!0,
controller:"WeeklyRecurrenceController",templateUrl:a+"weekly.html",scope:{weeklyLabel:"@",
startLabel:"@",untilLabel:"@",noEndLabel:"@",endByLabel:"@",atLabel:"@",weeklyRecurrenceInfo:"="
},link:function(a,t,n){function r(){if(a.weeklyRecurrenceInfo){if(a.data.selectedDays={},
a.endDate=void 0,a.startDate=new Date,e.isArray(a.weeklyRecurrenceInfo.daysOfWeek)&&a.weeklyRecurrenceInfo.daysOfWeek.length>0)for(var t=0;t<a.weeklyRecurrenceInfo.daysOfWeek.length;t++){
var n=a.weeklyRecurrenceInfo.daysOfWeek[t],r=a.data.getDayByIndex(n);r&&(a.data.selectedDays[r.key]=!0);
}a.weeklyRecurrenceInfo.startTime&&(e.isDate(a.weeklyRecurrenceInfo.startTime)?a.startDate=a.weeklyRecurrenceInfo.startTime:a.startDate=new Date(a.weeklyRecurrenceInfo.startTime)),
a.weeklyRecurrenceInfo.endTime&&(e.isDate(a.weeklyRecurrenceInfo.endTime)?a.endDate=a.weeklyRecurrenceInfo.endTime:a.endDate=new Date(a.weeklyRecurrenceInfo.endTime),
a.endDateRadio="dateSelected")}}function d(){a.weeklyRecurrenceInfo={daysOfWeek:a.populateDaysOfWeek(),
daysOfMonth:"",weeksOfMonth:"",monthsOfYear:"",years:"",startTime:a.startDate,endTime:"dateSelected"===a.endDateRadio?a.endDate:void 0,
uiPassParam:"WEEKLY",cronString:""},a.data.endDateDisabled="dateSelected"!==a.endDateRadio;
var t=new Date;e.isDate(a.startDate)?a.minStartDate=t<a.startDate?t:a.startDate:a.minStartDate=t;
}var c=a.$watch("data",d,!0),s=a.$watch("weeklyRecurrenceInfo",r,!0),l=a.$watchCollection("[startDate,endDate,endDateRadio]",d);
r();var i="scheduleSelector:isValidRequest:weekly",o=a.$on(i,function(){var e=a.isValid();
a.$emit("scheduleSelector:isValidResponse",e)});t.on("$destroy",function(){o(),c(),
s(),l()})}}})});