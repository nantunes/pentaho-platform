define(["dojo/_base/declare","./_CalendarView","dijit/_TemplatedMixin","dojo/query","dojo/dom-class","dojo/_base/connect","dojo/_base/event","dojo/_base/lang","dojo/date/locale","dojo/text!./Calendar/CalendarMonthYear.html"],function(e,t,a,n,i,o,r,s,d,l){
return e("dojox.widget._CalendarMonthYearView",[t,a],{templateString:l,datePart:"year",
displayedYears:10,useHeader:!1,postCreate:function(){this.cloneClass(".dojoxCal-MY-G-Template",5,".dojoxCal-MY-btns"),
this.monthContainer=this.yearContainer=this.myContainer;var e="dojoxCalendarYearLabel",t="dojoxCalendarDecrease",a="dojoxCalendarIncrease";
n("."+e,this.myContainer).forEach(function(n,o){var r=a;switch(o){case 0:r=t;case 1:
i.remove(n,e),i.add(n,r)}}),this._decBtn=n("."+t,this.myContainer)[0],this._incBtn=n("."+a,this.myContainer)[0],
n(".dojoxCal-MY-M-Template",this.domNode).filter(function(e){return 1==e.cellIndex;
}).addClass("dojoxCal-MY-M-last"),o.connect(this,"onBeforeDisplay",s.hitch(this,function(){
this._cachedDate=new Date(this.get("value").getTime()),this._populateYears(this._cachedDate.getFullYear()),
this._populateMonths(),this._updateSelectedMonth(),this._updateSelectedYear()})),
o.connect(this,"_populateYears",s.hitch(this,function(){this._updateSelectedYear();
})),o.connect(this,"_populateMonths",s.hitch(this,function(){this._updateSelectedMonth();
})),this._cachedDate=this.get("value"),this._populateYears(),this._populateMonths(),
this.addFx(".dojoxCalendarMonthLabel,.dojoxCalendarYearLabel ",this.myContainer)},
_setValueAttr:function(e){e&&e.getFullYear()&&this._populateYears(e.getFullYear());
},getHeader:function(){return null},_getMonthNames:function(e){return this._monthNames=this._monthNames||d.getNames("months",e,"standAlone",this.getLang()),
this._monthNames},_populateMonths:function(){var e,t=this._getMonthNames("abbr"),a=this.get("value").getFullYear(),o=t[this.get("value").getMonth()],r=this.get("displayedYear");
n(".dojoxCalendarMonthLabel",this.monthContainer).forEach(s.hitch(this,function(n,s){
this._setText(n,t[s]),e=o===t[s]&&a===r,i.toggle(n.parentNode,["dijitCalendarSelectedDate","dijitCalendarCurrentDate"],e);
}));var d=this.get("constraints");if(d){var l=new Date;l.setFullYear(this._year);var h=-1,c=12;
if(d.min){var u=d.min.getFullYear();u>this._year?h=12:u==this._year&&(h=d.min.getMonth());
}if(d.max){var _=d.max.getFullYear();_<this._year?c=-1:_==this._year&&(c=d.max.getMonth());
}n(".dojoxCalendarMonthLabel",this.monthContainer).forEach(s.hitch(this,function(e,t){
i[h>t||t>c?"add":"remove"](e,"dijitCalendarDisabledDate")}))}},_populateYears:function(e){
var t,a=this.get("constraints"),o=this.get("value").getFullYear(),r=e||o,d=r-Math.floor(this.displayedYears/2),l=a&&a.min?a.min.getFullYear():d-1e4;
this._displayedYear=r;var h,c=n(".dojoxCalendarYearLabel",this.yearContainer),u=a&&a.max?a.max.getFullYear()-d:c.length,_="dijitCalendarDisabledDate";
c.forEach(s.hitch(this,function(e,a){u>=a&&this._setText(e,d+a),h=d+a==o,i.toggle(e.parentNode,["dijitCalendarSelectedDate","dijitCalendarCurrentDate"],h),
i.toggle(e,_,a>u),t=d+a==o,i.toggle(e.parentNode,["dijitCalendarSelectedDate","dijitCalendarCurrentDate"],t);
})),this._incBtn&&i.toggle(this._incBtn,_,u<c.length),this._decBtn&&i.toggle(this._decBtn,_,l>=d);
var p=this.getHeader();p&&this._setText(this.getHeader(),d+" - "+(d+11))},_updateSelectedYear:function(){
this._year=String((this._cachedDate||this.get("value")).getFullYear()),this._updateSelectedNode(".dojoxCalendarYearLabel",s.hitch(this,function(e){
return null!==this._year&&e.innerHTML==this._year}))},_updateSelectedMonth:function(){
var e=(this._cachedDate||this.get("value")).getMonth();this._month=e,this._updateSelectedNode(".dojoxCalendarMonthLabel",function(t,a){
return a==e})},_updateSelectedNode:function(e,t){var a="dijitCalendarSelectedDate";
n(e,this.domNode).forEach(function(e,n,o){i.toggle(e.parentNode,a,t(e,n,o))});var o=n(".dojoxCal-MY-M-Template div",this.myContainer).filter(function(e){
return i.contains(e.parentNode,a)})[0];if(o){var r=i.contains(o,"dijitCalendarDisabledDate");
i.toggle(this.okBtn,"dijitDisabled",r)}},onClick:function(e){function t(t){return i.contains(e.target,t);
}var a;if(t("dijitCalendarDisabledDate"))return r.stop(e),!1;if(t("dojoxCalendarMonthLabel"))a="dojoxCal-MY-M-Template",
this._month=e.target.parentNode.cellIndex+2*e.target.parentNode.parentNode.rowIndex,
this._cachedDate.setMonth(this._month),this._updateSelectedMonth();else{if(!t("dojoxCalendarYearLabel"))return t("dojoxCalendarDecrease")?(this._populateYears(this._displayedYear-10),
!0):t("dojoxCalendarIncrease")?(this._populateYears(this._displayedYear+10),!0):!0;
a="dojoxCal-MY-Y-Template",this._year=Number(e.target.innerHTML),this._cachedDate.setYear(this._year),
this._populateMonths(),this._updateSelectedYear()}return r.stop(e),!1},onOk:function(e){
return r.stop(e),i.contains(this.okBtn,"dijitDisabled")?!1:(this.onValueSelected(this._cachedDate),
!1)},onCancel:function(e){return r.stop(e),this.onValueSelected(this.get("value")),
!1}})});