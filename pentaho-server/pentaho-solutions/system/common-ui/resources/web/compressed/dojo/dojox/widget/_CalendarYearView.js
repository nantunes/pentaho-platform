define(["dojo/_base/declare","./_CalendarView","dijit/_TemplatedMixin","dojo/date","dojo/dom-class","dojo/_base/event","dojo/text!./Calendar/CalendarYear.html","./_CalendarMonthYearView"],function(e,a,t,o,r,d,n,l){
return e("dojox.widget._CalendarYearView",[a,t],{templateString:n,displayedYears:6,
postCreate:function(){this.cloneClass(".dojoxCalendarYearTemplate",3),this.cloneClass(".dojoxCalendarYearGroupTemplate",2),
this._populateYears(),this.addFx(".dojoxCalendarYearLabel",this.domNode)},_setValueAttr:function(e){
this._populateYears(e.getFullYear())},_populateYears:l.prototype._populateYears,adjustDate:function(e,a){
return o.add(e,"year",12*a)},onClick:function(e){if(!r.contains(e.target,"dojoxCalendarYearLabel"))return void d.stop(e);
var a=Number(e.target.innerHTML),t=this.get("value");t.setYear(a),this.onValueSelected(t,a);
}})});