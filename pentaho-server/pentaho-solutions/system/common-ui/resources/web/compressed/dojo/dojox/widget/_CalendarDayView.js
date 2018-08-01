define(["dojo/_base/declare","./_CalendarView","dijit/_TemplatedMixin","dojo/query","dojo/dom-class","dojo/_base/event","dojo/date","dojo/date/locale","dojo/text!./Calendar/CalendarDay.html","dojo/cldr/supplemental","dojo/NodeList-dom"],function(t,e,a,d,i,n,s,o,l,r){
return t("dojox.widget._CalendarDayView",[e,a],{templateString:l,datePart:"month",
dayWidth:"narrow",postCreate:function(){this.cloneClass(".dijitCalendarDayLabelTemplate",6),
this.cloneClass(".dijitCalendarDateTemplate",6),this.cloneClass(".dijitCalendarWeekTemplate",5);
var t=o.getNames("days",this.dayWidth,"standAlone",this.getLang()),e=r.getFirstDayOfWeek(this.getLang());
d(".dijitCalendarDayLabel",this.domNode).forEach(function(a,d){this._setText(a,t[(d+e)%7]);
},this)},onDisplay:function(){this._addedFx||(this._addedFx=!0,this.addFx(".dijitCalendarDateTemplate div",this.domNode));
},_onDayClick:function(t){if("undefined"!=typeof t.target._date){var e=new Date(this.get("displayMonth")),a=t.target.parentNode,d="dijitCalendar",o=i.contains(a,d+"PreviousMonth")?-1:i.contains(a,d+"NextMonth")?1:0;
return o&&(e=s.add(e,"month",o)),e.setDate(t.target._date),this.isDisabledDate(e)?void n.stop(t):void this.parent._onDateSelected(e);
}},_setValueAttr:function(t){this._populateDays()},_populateDays:function(){var t=new Date(this.get("displayMonth"));
t.setDate(1);var e=t.getDay(),a=s.getDaysInMonth(t),i=s.getDaysInMonth(s.add(t,"month",-1)),n=new Date,l=this.get("value"),h=r.getFirstDayOfWeek(this.getLang());
h>e&&(h-=7);var D=s.compare,g=".dijitCalendarDateTemplate",u="dijitCalendarSelectedDate",m=this._lastDate,C=null==m||m.getMonth()!=t.getMonth()||m.getFullYear()!=t.getFullYear();
if(this._lastDate=t,!C)return void d(g,this.domNode).removeClass(u).filter(function(t){
return t.className.indexOf("dijitCalendarCurrent")>-1&&t._date==l.getDate()}).addClass(u);
d(g,this.domNode).forEach(function(o,r){r+=h;var g,m=new Date(t),C="dijitCalendar",c=0;
e>r?(g=i-e+r+1,c=-1,C+="Previous"):r>=e+a?(g=r-e-a+1,c=1,C+="Next"):(g=r-e+1,C+="Current"),
c&&(m=s.add(m,"month",c)),m.setDate(g),D(m,n,"date")||(C="dijitCalendarCurrentDate "+C),
D(m,l,"date")||D(m,l,"month")||D(m,l,"year")||(C=u+" "+C),this.isDisabledDate(m,this.getLang())&&(C=" dijitCalendarDisabledDate "+C);
var j=this.getClassForDate(m,this.getLang());j&&(C=j+" "+C),o.className=C+"Month dijitCalendarDateTemplate",
o.dijitDateValue=m.valueOf();var p=d(".dijitCalendarDateLabel",o)[0];this._setText(p,m.getDate()),
p._date=p.parentNode._date=m.getDate()},this);var c=o.getNames("months","wide","standAlone",this.getLang());
this._setText(this.monthLabelNode,c[t.getMonth()]),this._setText(this.yearLabelNode,t.getFullYear());
}})});