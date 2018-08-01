define("dojox/widget/MultiSelectCalendar",["dojo/main","dijit","dojo/text!./MultiSelectCalendar/MultiSelectCalendar.html","dojo/cldr/supplemental","dojo/date","dojo/date/locale","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_CssStateMixin","dijit/form/DropDownButton","dijit/typematic"],function(e,t,a,i,n,s,r,d,o,u,l,h){
e.experimental("dojox.widget.MultiSelectCalendar");var c=e.declare("dojox.widget.MultiSelectCalendar",[r,d,o,u],{
templateString:a,widgetsInTemplate:!0,value:{},datePackage:"dojo.date",dayWidth:"narrow",
tabIndex:"0",returnIsoRanges:!1,currentFocus:new Date,baseClass:"dijitCalendar",cssStateNodes:{
decrementMonth:"dijitCalendarArrow",incrementMonth:"dijitCalendarArrow",previousYearLabelNode:"dijitCalendarPreviousYear",
nextYearLabelNode:"dijitCalendarNextYear"},_areValidDates:function(e){for(var t in this.value)if(valid=t&&!isNaN(t)&&"object"==typeof e&&t.toString()!=this.constructor.prototype.value.toString(),
!valid)return!1;return!0},_getValueAttr:function(){return this.returnIsoRanges?(datesWithRanges=this._returnDatesWithIsoRanges(this._sort()),
datesWithRanges):this._sort()},_setValueAttr:function(t,a){this.value={},e.isArray(t)?(e.forEach(t,function(t,a){
var i=t.indexOf("/");if(-1==i)this.value[t]=1;else{var n=e.date.stamp.fromISOString(t.substr(0,10)),s=e.date.stamp.fromISOString(t.substr(11,10));
this.toggleDate(n,[],[]),n-s>0?this._addToRangeRTL(n,s,[],[]):this._addToRangeLTR(n,s,[],[]);
}},this),t.length>0&&this.focusOnLastDate(t[t.length-1])):(t&&(t=new this.dateClassObj(t)),
this._isValidDate(t)&&(t.setHours(1,0,0,0),this.isDisabledDate(t,this.lang)||(dateIndex=e.date.stamp.toISOString(t).substring(0,10),
this.value[dateIndex]=1,this.set("currentFocus",t),(a||"undefined"==typeof a)&&(this.onChange(this.get("value")),
this.onValueSelected(this.get("value")))))),this._populateGrid()},focusOnLastDate:function(t){
var a,i,n=t.indexOf("/");-1==n?lastDate=t:(a=new e.date.stamp.fromISOString(t.substr(0,10)),
i=new e.date.stamp.fromISOString(t.substr(11,10)),a-i>0?lastDate=a:lastDate=i),this.set("currentFocus",lastDate);
},_isValidDate:function(e){return e&&!isNaN(e)&&"object"==typeof e&&e.toString()!=this.constructor.prototype.value.toString();
},_setText:function(t,a){for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(e.doc.createTextNode(a));
},_populateGrid:function(){var t=new this.dateClassObj(this.currentFocus);t.setDate(1);
var a=t.getDay(),i=this.dateFuncObj.getDaysInMonth(t),n=this.dateFuncObj.getDaysInMonth(this.dateFuncObj.add(t,"month",-1)),s=new this.dateClassObj,r=e.cldr.supplemental.getFirstDayOfWeek(this.lang);
r>a&&(r-=7),this.listOfNodes=e.query(".dijitCalendarDateTemplate",this.domNode),this.listOfNodes.forEach(function(d,o){
o+=r;var u,l=new this.dateClassObj(t),h="dijitCalendar",c=0;a>o?(u=n-a+o+1,c=-1,h+="Previous"):o>=a+i?(u=o-a-i+1,
c=1,h+="Next"):(u=o-a+1,h+="Current"),c&&(l=this.dateFuncObj.add(l,"month",c)),l.setDate(u),
this.dateFuncObj.compare(l,s,"date")||(h="dijitCalendarCurrentDate "+h),dateIndex=e.date.stamp.toISOString(l).substring(0,10),
this.isDisabledDate(l,this.lang)||this._isSelectedDate(l,this.lang)&&(h=this.value[dateIndex]?"dijitCalendarSelectedDate "+h:h.replace("dijitCalendarSelectedDate ","")),
this._isSelectedDate(l,this.lang)&&(h="dijitCalendarBrowsingDate "+h),this.isDisabledDate(l,this.lang)&&(h="dijitCalendarDisabledDate "+h);
var g=this.getClassForDate(l,this.lang);g&&(h=g+" "+h),d.className=h+"Month dijitCalendarDateTemplate",
d.dijitDateValue=l.valueOf(),e.attr(d,"dijitDateValue",l.valueOf());var v=e.query(".dijitCalendarDateLabel",d)[0],p=l.getDateLocalized?l.getDateLocalized(this.lang):l.getDate();
this._setText(v,p)},this);var d=this.dateLocaleModule.getNames("months","wide","standAlone",this.lang,t);
this.monthDropDownButton.dropDown.set("months",d),this.monthDropDownButton.containerNode.innerHTML=(6==e.isIE?"":"<div class='dijitSpacer'>"+this.monthDropDownButton.dropDown.domNode.innerHTML+"</div>")+"<div class='dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'>"+d[t.getMonth()]+"</div>";
var o=t.getFullYear()-1,u=new this.dateClassObj;e.forEach(["previous","current","next"],function(e){
u.setFullYear(o++),this._setText(this[e+"YearLabelNode"],this.dateLocaleModule.format(u,{
selector:"year",locale:this.lang}))},this)},goToToday:function(){this.set("currentFocus",new this.dateClassObj,!1);
},constructor:function(t){var a=t.datePackage&&"dojo.date"!=t.datePackage?t.datePackage+".Date":"Date";
this.dateClassObj=e.getObject(a,!1),this.datePackage=t.datePackage||this.datePackage,
this.dateFuncObj=e.getObject(this.datePackage,!1),this.dateLocaleModule=e.getObject(this.datePackage+".locale",!1);
},buildRendering:function(){this.inherited(arguments),e.setSelectable(this.domNode,!1);
var a=e.hitch(this,function(t,a){for(var i=e.query(t,this.domNode)[0],n=0;a>n;n++)i.parentNode.appendChild(i.cloneNode(!0));
});a(".dijitCalendarDayLabelTemplate",6),a(".dijitCalendarDateTemplate",6),a(".dijitCalendarWeekTemplate",5);
var i=this.dateLocaleModule.getNames("days",this.dayWidth,"standAlone",this.lang),n=e.cldr.supplemental.getFirstDayOfWeek(this.lang);
e.query(".dijitCalendarDayLabel",this.domNode).forEach(function(e,t){this._setText(e,i[(t+n)%7]);
},this);var s=new this.dateClassObj(this.currentFocus);this.monthDropDownButton.dropDown=new g({
id:this.id+"_mdd",onChange:e.hitch(this,"_onMonthSelect")}),this.set("currentFocus",s,!1);
var r=this,d=function(e,a,i){r._connects.push(t.typematic.addMouseListener(r[e],r,function(e){
e>=0&&r._adjustDisplay(a,i)},.8,500))};d("incrementMonth","month",1),d("decrementMonth","month",-1),
d("nextYearLabelNode","year",1),d("previousYearLabelNode","year",-1)},_adjustDisplay:function(e,t){
this._setCurrentFocusAttr(this.dateFuncObj.add(this.currentFocus,e,t))},_setCurrentFocusAttr:function(t,a){
var i=this.currentFocus,n=i?e.query("[dijitDateValue="+i.valueOf()+"]",this.domNode)[0]:null;
t=new this.dateClassObj(t),t.setHours(1,0,0,0),this._set("currentFocus",t);var s=e.date.stamp.toISOString(t).substring(0,7);
s!=this.previousMonth&&(this._populateGrid(),this.previousMonth=s);var r=e.query("[dijitDateValue='"+t.valueOf()+"']",this.domNode)[0];
r.setAttribute("tabIndex",this.tabIndex),(this._focused||a)&&r.focus(),n&&n!=r&&(e.isWebKit?n.setAttribute("tabIndex","-1"):n.removeAttribute("tabIndex"));
},focus:function(){this._setCurrentFocusAttr(this.currentFocus,!0)},_onMonthSelect:function(e){
this.currentFocus=this.dateFuncObj.add(this.currentFocus,"month",e-this.currentFocus.getMonth()),
this._populateGrid()},toggleDate:function(t,a,i){var n=e.date.stamp.toISOString(t).substring(0,10);
this.value[n]?this.unselectDate(t,i):this.selectDate(t,a)},selectDate:function(t,a){
var i=this._getNodeByDate(t),n=i.className,s=e.date.stamp.toISOString(t).substring(0,10);
this.value[s]=1,a.push(s),n="dijitCalendarSelectedDate "+n,i.className=n},unselectDate:function(t,a){
var i=this._getNodeByDate(t),n=i.className,s=e.date.stamp.toISOString(t).substring(0,10);
delete this.value[s],a.push(s),n=n.replace("dijitCalendarSelectedDate ",""),i.className=n;
},_getNodeByDate:function(t){var a=new this.dateClassObj(this.listOfNodes[0].dijitDateValue),i=Math.abs(e.date.difference(a,t,"day"));
return this.listOfNodes[i]},_onDayClick:function(t){e.stopEvent(t);for(var a=t.target;a&&!a.dijitDateValue;a=a.parentNode);
a&&!e.hasClass(a,"dijitCalendarDisabledDate")&&(value=new this.dateClassObj(a.dijitDateValue),
this.rangeJustSelected?(this.rangeJustSelected=!1,this.set("currentFocus",value)):(this.toggleDate(value,[],[]),
this.previouslySelectedDay=value,this.set("currentFocus",value),this.onValueSelected([e.date.stamp.toISOString(value).substring(0,10)])));
},_onDayMouseOver:function(t){var a=e.hasClass(t.target,"dijitCalendarDateLabel")?t.target.parentNode:t.target;
a&&(a.dijitDateValue||a==this.previousYearLabelNode||a==this.nextYearLabelNode)&&(e.addClass(a,"dijitCalendarHoveredDate"),
this._currentNode=a)},_setEndRangeAttr:function(e){e=new this.dateClassObj(e),e.setHours(1),
this.endRange=e},_getEndRangeAttr:function(){var e=new this.dateClassObj(this.endRange);
return e.setHours(0,0,0,0),e.getDate()<this.endRange.getDate()&&(e=this.dateFuncObj.add(e,"hour",1)),
e},_onDayMouseOut:function(t){if(this._currentNode&&(!t.relatedTarget||t.relatedTarget.parentNode!=this._currentNode)){
var a="dijitCalendarHoveredDate";e.hasClass(this._currentNode,"dijitCalendarActiveDate")&&(a+=" dijitCalendarActiveDate"),
e.removeClass(this._currentNode,a),this._currentNode=null}},_onDayMouseDown:function(t){
var a=t.target.parentNode;a&&a.dijitDateValue&&(e.addClass(a,"dijitCalendarActiveDate"),
this._currentNode=a),t.shiftKey&&this.previouslySelectedDay?(this.selectingRange=!0,
this.set("endRange",a.dijitDateValue),this._selectRange()):(this.selectingRange=!1,
this.previousRangeStart=null,this.previousRangeEnd=null)},_onDayMouseUp:function(t){
var a=t.target.parentNode;a&&a.dijitDateValue&&e.removeClass(a,"dijitCalendarActiveDate");
},handleKey:function(t){var a,i=e.keys,n=-1,s=this.currentFocus;switch(t.keyCode){
case i.RIGHT_ARROW:n=1;case i.LEFT_ARROW:a="day",this.isLeftToRight()||(n*=-1);break;
case i.DOWN_ARROW:n=1;case i.UP_ARROW:a="week";break;case i.PAGE_DOWN:n=1;case i.PAGE_UP:
a=t.ctrlKey||t.altKey?"year":"month";break;case i.END:s=this.dateFuncObj.add(s,"month",1),
a="day";case i.HOME:s=new this.dateClassObj(s),s.setDate(1);break;case i.ENTER:case i.SPACE:
t.shiftKey&&this.previouslySelectedDay?(this.selectingRange=!0,this.set("endRange",s),
this._selectRange()):(this.selectingRange=!1,this.toggleDate(s,[],[]),this.previouslySelectedDay=s,
this.previousRangeStart=null,this.previousRangeEnd=null,this.onValueSelected([e.date.stamp.toISOString(s).substring(0,10)]));
break;default:return!0}return a&&(s=this.dateFuncObj.add(s,a,n)),this.set("currentFocus",s),
!1},_onKeyDown:function(t){this.handleKey(t)||e.stopEvent(t)},_removeFromRangeLTR:function(t,a,i,n){
difference=Math.abs(e.date.difference(t,a,"day"));for(var s=0;s<=difference;s++){
var r=e.date.add(t,"day",s);this.toggleDate(r,i,n)}null==this.previousRangeEnd?this.previousRangeEnd=a:e.date.compare(a,this.previousRangeEnd,"date")>0&&(this.previousRangeEnd=a),
null==this.previousRangeStart?this.previousRangeStart=a:e.date.compare(a,this.previousRangeStart,"date")>0&&(this.previousRangeStart=a),
this.previouslySelectedDay=e.date.add(r,"day",1)},_removeFromRangeRTL:function(t,a,i,n){
difference=Math.abs(e.date.difference(t,a,"day"));for(var s=0;s<=difference;s++){
var r=e.date.add(t,"day",-s);this.toggleDate(r,i,n)}null==this.previousRangeEnd?this.previousRangeEnd=a:e.date.compare(a,this.previousRangeEnd,"date")<0&&(this.previousRangeEnd=a),
null==this.previousRangeStart?this.previousRangeStart=a:e.date.compare(a,this.previousRangeStart,"date")<0&&(this.previousRangeStart=a),
this.previouslySelectedDay=e.date.add(r,"day",-1)},_addToRangeRTL:function(t,a,i,n){
difference=Math.abs(e.date.difference(t,a,"day"));for(var s=1;s<=difference;s++){
var r=e.date.add(t,"day",-s);this.toggleDate(r,i,n)}null==this.previousRangeStart?this.previousRangeStart=a:e.date.compare(a,this.previousRangeStart,"date")<0&&(this.previousRangeStart=a),
null==this.previousRangeEnd?this.previousRangeEnd=t:e.date.compare(t,this.previousRangeEnd,"date")>0&&(this.previousRangeEnd=t),
this.previouslySelectedDay=r},_addToRangeLTR:function(t,a,i,n){difference=Math.abs(e.date.difference(t,a,"day"));
for(var s=1;s<=difference;s++){var r=e.date.add(t,"day",s);this.toggleDate(r,i,n);
}null==this.previousRangeStart?this.previousRangeStart=t:e.date.compare(t,this.previousRangeStart,"date")<0&&(this.previousRangeStart=t),
null==this.previousRangeEnd?this.previousRangeEnd=a:e.date.compare(a,this.previousRangeEnd,"date")>0&&(this.previousRangeEnd=a),
this.previouslySelectedDay=r},_selectRange:function(){var t=[],a=[],i=this.previouslySelectedDay,n=this.get("endRange");
this.previousRangeStart||this.previousRangeEnd?e.date.compare(n,this.previousRangeStart,"date")<0||e.date.compare(n,this.previousRangeEnd,"date")>0?removingFromRange=!1:removingFromRange=!0:removingFromRange=!1,
1==removingFromRange?e.date.compare(n,i,"date")<0?this._removeFromRangeRTL(i,n,t,a):this._removeFromRangeLTR(i,n,t,a):e.date.compare(n,i,"date")<0?this._addToRangeRTL(i,n,t,a):this._addToRangeLTR(i,n,t,a),
t.length>0&&this.onValueSelected(t),a.length>0&&this.onValueUnselected(a),this.rangeJustSelected=!0;
},onValueSelected:function(e){},onValueUnselected:function(e){},onChange:function(e){},
_isSelectedDate:function(t,a){return dateIndex=e.date.stamp.toISOString(t).substring(0,10),
this.value[dateIndex]},isDisabledDate:function(e,t){},getClassForDate:function(e,t){},
_sort:function(){if(this.value=={})return[];var e=[];for(var t in this.value)e.push(t);
return e.sort(function(e,t){var a=new Date(e),i=new Date(t);return a-i}),e},_returnDatesWithIsoRanges:function(t){
var a=[];if(t.length>1){for(var i=!1,n=null,s=null,r=e.date.stamp.fromISOString(t[0]),d=1;d<t.length+1;d++)currentDate=e.date.stamp.fromISOString(t[d]),
i?(difference=Math.abs(e.date.difference(r,currentDate,"day")),1==difference?s=currentDate:(range=e.date.stamp.toISOString(n).substring(0,10)+"/"+e.date.stamp.toISOString(s).substring(0,10),
a.push(range),i=!1)):(difference=Math.abs(e.date.difference(r,currentDate,"day")),
1==difference?(i=!0,n=r,s=currentDate):a.push(e.date.stamp.toISOString(r).substring(0,10))),
r=currentDate;return a}return t}}),g=c._MonthDropDown=e.declare("dojox.widget._MonthDropDown",[r,d,o],{
months:[],templateString:"<div class='dijitCalendarMonthMenu dijitMenu' dojoAttachEvent='onclick:_onClick,onmouseover:_onMenuHover,onmouseout:_onMenuHover'></div>",
_setMonthsAttr:function(t){this.domNode.innerHTML=e.map(t,function(e,t){return e?"<div class='dijitCalendarMonthLabel' month='"+t+"'>"+e+"</div>":"";
}).join("")},_onClick:function(t){this.onChange(e.attr(t.target,"month"))},onChange:function(e){},
_onMenuHover:function(t){e.toggleClass(t.target,"dijitCalendarMonthLabelHover","mouseover"==t.type);
}});return c});