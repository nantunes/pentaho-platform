define(["dojo/_base/declare","./_CalendarBase","./_CalendarYear"],function(e,a,r){
return e("dojox.widget.YearlyCalendar",[a,r],{_makeDate:function(e){var a=new Date;
return a.setFullYear(e),a}})});