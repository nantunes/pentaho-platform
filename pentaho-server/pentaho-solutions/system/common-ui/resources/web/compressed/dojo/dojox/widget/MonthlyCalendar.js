define(["dojo/_base/declare","./_CalendarBase","./_CalendarMonth"],function(e,n,a){
return e("dojox.widget.MonthlyCalendar",[n,a],{_makeDate:function(e){var n=new Date;
return n.setMonth(e),n}})});