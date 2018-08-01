define(["common-ui/angular","pentaho/common/DateTextBox","dijit/registry"],function(e,t,i){
var n=require.toUrl("common-ui/angular-directives/dateTimePicker")+"/";e.module("dateTimePicker",[]).controller("DateTimeController",["$scope","$attrs",function(t,i){
t.init=function(){var i,n=function(e,t,i){for(var n=[],s=0;(t-e)/i>=s;s++)n[s]={},
n[s].id=s*i+e,n[s].title=10>s*i+e?"0"+(s*i+e):s*i+e;return n};i=e.isDate(t.selectedDate)?t.selectedDate:new Date(t.selectedDate);
var s=t.minutesIncrement?t.minutesIncrement:1;t.minutevalues=n(0,59,s),t.hourvalues=n(1,12,1),
i&&(i=new Date(i.getTime()+6e4*s),i.setSeconds(0),0==i.getHours()?t.hour=12:t.hour=i.getHours()%12,
t.minute=i.getMinutes()-i.getMinutes()%s,i.setMinutes(t.minute),t.selectedDate&&t.selectedDate.setMinutes(t.minute),
i.getHours()>=12?t.tod="PM":t.tod="AM")},t.init()}]).directive("datetime",["$timeout",function(t){
return{restrict:"A",replace:!0,transclude:!0,controller:"DateTimeController",templateUrl:n+"dateTimePicker.html",
scope:{selectedDate:"=",isDisabled:"=?",minDate:"=?",maxDate:"=?",hideTime:"@",minutesIncrement:"@",
atLabel:"@"},link:function(n,s,a){n.$watch("hour",function(e,t){n.selectedDate&&d(e,t,n.selectedDate.getMinutes(),n.selectedDate.getMinutes(),n.tod,n.tod);
}),n.$watch("minute",function(e,t){n.selectedDate&&d(n.selectedDate.getHours(),n.selectedDate.getHours(),e,t,n.tod,n.tod);
}),n.$watch("tod",function(e,t){n.selectedDate&&d(n.selectedDate.getHours(),n.selectedDate.getHours(),n.selectedDate.getMinutes(),n.selectedDate.getMinutes(),e,t);
});var d=function(e,t,i,s,a,d){i!=s&&n.selectedDate.setMinutes(i),(e!=t||a!=d)&&("AM"===a?12==e?n.selectedDate.setHours(0):n.selectedDate.setHours(e):12==e?n.selectedDate.setHours(e):n.selectedDate.setHours(e+12));
},o=function(){var t=e.element(s),a=t.find("input[type='text']").length>0;if(e.isDefined(n.isDisabled)&&a){
if(t.find("input[type='text']").attr("disabled",n.isDisabled),n.isDisabled?t.find(".pentaho-dropdownbutton-inner").addClass("disabled"):t.find(".pentaho-dropdownbutton-inner").removeClass("disabled"),
t.find(".pentaho-listbox")[0]){var d=i.byNode(t.find(".pentaho-listbox")[0]);d.disabled=n.isDisabled,
n.isDisabled||d.validate()}t.find("select").attr("disabled",n.isDisabled)}},l=function(){
e.isDefined(n.isDisabled)||(n.isDisabled=!1),o()};n.$watch("isDisabled",o),n.$watchCollection("[minDate, maxDate]",function(){
if(e.element(s).find(".pentaho-listbox")[0]){var t=i.byNode(e.element(s).find(".pentaho-listbox")[0]);
n.minDate&&(t.constraints.min=n.minDate),n.maxDate&&(t.constraints.max=n.maxDate),
t.validate()}}),t(function(){t(function(){l()},0)},0)}}}])});