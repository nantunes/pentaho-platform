define(["dojo/_base/declare","dojo/_base/sniff","dojo/_base/event","dojo/_base/lang","dojo/_base/array","dojo/cldr/supplemental","dojo/dom","dojo/dom-class","dojo/dom-style","dojo/dom-construct","dojo/dom-geometry","dojo/date","dojo/date/locale","dojo/_base/fx","dojo/fx","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./StoreMixin","dojox/widget/_Invalidating","dojox/widget/Selection","dojox/calendar/time","dojo/i18n!./nls/buttons"],function(t,e,i,n,s,a,o,r,d,h,l,u,c,m,f,v,w,g,_,I,R,p,y,D){
return t("dojox.calendar.CalendarBase",[w,g,_,I,R,p],{baseClass:"dojoxCalendar",datePackage:u,
startDate:null,endDate:null,date:null,dateInterval:"week",dateIntervalSteps:1,viewContainer:null,
firstDayOfWeek:-1,formatItemTimeFunc:null,editable:!0,moveEnabled:!0,resizeEnabled:!0,
columnView:null,matrixView:null,columnViewProps:null,matrixViewProps:null,createOnGridClick:!1,
createItemFunc:null,currentView:null,_currentViewIndex:-1,views:null,_calendar:"gregorian",
constructor:function(t){this.views=[],this.invalidatingProperties=["store","items","startDate","endDate","views","date","dateInterval","dateIntervalSteps","firstDayOfWeek"],
t=t||{},this._calendar=t.datePackage?t.datePackage.substr(t.datePackage.lastIndexOf(".")+1):this._calendar,
this.dateModule=t.datePackage?n.getObject(t.datePackage,!1):u,this.dateClassObj=this.dateModule.Date||Date,
this.dateLocaleModule=t.datePackage?n.getObject(t.datePackage+".locale",!1):c,this.invalidateRendering();
},buildRendering:function(){this.inherited(arguments),(null==this.views||0==this.views.length)&&this.set("views",this._createDefaultViews());
},_applyAttributes:function(){this._applyAttr=!0,this.inherited(arguments),delete this._applyAttr;
},_setStartDateAttr:function(t){this._set("startDate",t),this._timeRangeInvalidated=!0;
},_setEndDateAttr:function(t){this._set("endDate",t),this._timeRangeInvalidated=!0;
},_setDateAttr:function(t){this._set("date",t),this._timeRangeInvalidated=!0},_setDateIntervalAttr:function(t){
this._set("dateInterval",t),this._timeRangeInvalidated=!0},_setDateIntervalStepsAttr:function(t){
this._set("dateIntervalSteps",t),this._timeRangeInvalidated=!0},_setFirstDayOfWeekAttr:function(t){
this._set("firstDayOfWeek",t),null!=this.get("date")&&"week"==this.get("dateInterval")&&(this._timeRangeInvalidated=!0);
},_setTextDirAttr:function(t){s.forEach(this.views,function(e){e.set("textDir",t);
})},refreshRendering:function(){this.inherited(arguments),this._validateProperties();
},_refreshItemsRendering:function(){this.currentView&&this.currentView._refreshItemsRendering();
},resize:function(t){t&&l.setMarginBox(this.domNode,t),this.currentView&&this.currentView.resize();
},_validateProperties:function(){var t=this.dateModule,i=this.get("startDate"),a=this.get("endDate"),o=this.get("date");
if((this.firstDayOfWeek<-1||this.firstDayOfWeek>6)&&this._set("firstDayOfWeek",0),
null!=o||null==i&&null==a){null==this.date&&(this._set("date",new this.dateClassObj),
this._timeRangeInvalidated=!0);var r=this.get("dateInterval");"day"!=r&&"week"!=r&&"month"!=r&&(this._set("dateInterval","day"),
this._timeRangeInvalidated=!0);var d=this.get("dateIntervalSteps");n.isString(d)&&(d=parseInt(d),
this._set("dateIntervalSteps",d)),0>=d&&(this.set("dateIntervalSteps",1),this._timeRangeInvalidated=!0);
}else null==i&&(i=new this.dateClassObj,this._set("startDate",i),this._timeRangeInvalidated=!0),
null==a&&(a=new this.dateClassObj,this._set("endDate",a),this._timeRangeInvalidated=!0),
t.compare(i,a)>=0&&(a=t.add(i,"day",1),this._set("endDate",a),this._timeRangeInvalidated=!0);
if(this._timeRangeInvalidated){this._timeRangeInvalidated=!1;var h=this.computeTimeInterval();
(null==this._timeInterval||0!=t.compare(this._timeInterval[0],h[0])||0!=t.compare(this._timeInterval[1],h[1]))&&this.onTimeIntervalChange({
oldStartTime:null==this._timeInterval?null:this._timeInterval[0],oldEndTime:null==this._timeInterval?null:this._timeInterval[1],
startTime:h[0],endTime:h[1]}),this._timeInterval=h;var l=this.dateModule.difference(this._timeInterval[0],this._timeInterval[1],"day"),u=this._computeCurrentView(h[0],h[1],l),c=s.indexOf(this.views,u);
if(null==u||-1==c)return;if(this.animateRange&&(!e("ie")||e("ie")>8))if(this.currentView){
var m=this.isLeftToRight(),f="left"==this._animRangeInDir||null==this._animRangeInDir,v="left"==this._animRangeOutDir||null==this._animRangeOutDir;
this._animateRange(this.currentView.domNode,v&&m,!1,0,v?-100:100,n.hitch(this,function(){
this.animateRangeTimer=setTimeout(n.hitch(this,function(){this._applyViewChange(u,c,h,l),
this._animateRange(this.currentView.domNode,f&&m,!0,f?-100:100,0),this._animRangeInDir=null,
this._animRangeOutDir=null}),100)}))}else this._applyViewChange(u,c,h,l);else this._applyViewChange(u,c,h,l);
}},_applyViewChange:function(t,i,n,s){this._configureView(t,i,n,s),i!=this._currentViewIndex&&(null==this.currentView?(t.set("items",this.items),
this.set("currentView",t)):null==this.items||0==this.items.length?(this.set("currentView",t),
this.animateRange&&(!e("ie")||e("ie")>8)&&d.set(this.currentView.domNode,"opacity",0),
t.set("items",this.items)):(this.currentView=t,t.set("items",this.items),this.set("currentView",t),
this.animateRange&&(!e("ie")||e("ie")>8)&&d.set(this.currentView.domNode,"opacity",0)));
},_timeInterval:null,computeTimeInterval:function(){var t=this.dateModule,e=this.get("date");
if(null==e)return[this.floorToDay(this.get("startDate")),t.add(this.get("endDate"),"day",1)];
var i,n=this.floorToDay(e),s=this.get("dateInterval"),a=this.get("dateIntervalSteps");
switch(s){case"day":i=t.add(n,"day",a);break;case"week":n=this.floorToWeek(n),i=t.add(n,"week",a);
break;case"month":n.setDate(1),i=t.add(n,"month",a)}return[n,i]},onTimeIntervalChange:function(t){},
views:null,_setViewsAttr:function(t){if(!this._applyAttr)for(var e=0;e<this.views.length;e++)this._onViewRemoved(this.views[e]);
if(null!=t)for(var e=0;e<t.length;e++)this._onViewAdded(t[e]);this._set("views",null==t?[]:t.concat());
},_getViewsAttr:function(){return this.views.concat()},_createDefaultViews:function(){},
addView:function(t,e){(0>=e||e>this.views.length)&&(e=this.views.length),this.views.splice(e,t),
this._onViewAdded(t)},removeView:function(t){index<0||index>=this.views.length||(this._onViewRemoved(this.views[index]),
this.views.splice(index,1))},_onViewAdded:function(t){t.owner=this,t.buttonContainer=this.buttonContainer,
t._calendar=this._calendar,t.datePackage=this.datePackage,t.dateModule=this.dateModule,
t.dateClassObj=this.dateClassObj,t.dateLocaleModule=this.dateLocaleModule,d.set(t.domNode,"display","none"),
r.add(t.domNode,"view"),h.place(t.domNode,this.viewContainer),this.onViewAdded(t);
},onViewAdded:function(t){},_onViewRemoved:function(t){t.owner=null,t.buttonContainer=null,
r.remove(t.domNode,"view"),this.viewContainer.removeChild(t.domNode),this.onViewRemoved(t);
},onViewRemoved:function(t){},_setCurrentViewAttr:function(t){var e=s.indexOf(this.views,t);
if(-1!=e){var i=this.get("currentView");this._currentViewIndex=e,this._set("currentView",t),
this._showView(i,t),this.onCurrentViewChange({oldView:i,newView:t})}},_getCurrentViewAttr:function(){
return this.views[this._currentViewIndex]},onCurrentViewChange:function(t){},_configureView:function(t,e,i,n){
var s=this.dateModule;if("columns"==t.viewKind)t.set("startDate",i[0]),t.set("columnCount",n);else if("matrix"==t.viewKind)if(n>7){
var a=this.floorToWeek(i[0]),o=this.floorToWeek(i[1]);0!=s.compare(o,i[1])&&(o=this.dateModule.add(o,"week",1)),
n=this.dateModule.difference(a,o,"day"),t.set("startDate",a),t.set("columnCount",7),
t.set("rowCount",Math.ceil(n/7)),t.set("refStartTime",i[0]),t.set("refEndTime",i[1]);
}else t.set("startDate",i[0]),t.set("columnCount",n),t.set("rowCount",1),t.set("refStartTime",null),
t.set("refEndTime",null)},_computeCurrentView:function(t,e,i){return 7>=i?this.columnView:this.matrixView;
},matrixViewRowHeaderClick:function(t){var e=this.matrixView.getExpandedRowIndex();
if(e==t.index)this.matrixView.collapseRow();else if(-1==e)this.matrixView.expandRow(t.index);else{
var i=this.matrixView.on("expandAnimationEnd",n.hitch(this,function(){i.remove(),
this.matrixView.expandRow(t.index)}));this.matrixView.collapseRow()}},columnViewColumnHeaderClick:function(t){
var e=this.dateModule;0==e.compare(t.date,this._timeInterval[0])&&"day"==this.dateInterval&&1==this.dateIntervalSteps?this.set("dateInterval","week"):(this.set("date",t.date),
this.set("dateInterval","day"),this.set("dateIntervalSteps",1))},viewChangeDuration:0,
_showView:function(t,i){null!=t&&d.set(t.domNode,"display","none"),null!=i&&(d.set(i.domNode,"display","block"),
i.resize(),(!e("ie")||e("ie")>7)&&d.set(i.domNode,"opacity","1"))},_setItemsAttr:function(t){
this._set("items",t),this.currentView&&(this.currentView.set("items",t),this._isEditing||this.currentView.invalidateRendering());
},floorToDay:function(t,e){return y.floorToDay(t,e,this.dateClassObj)},floorToWeek:function(t){
return y.floorToWeek(t,this.dateClassObj,this.dateModule,this.firstDayOfWeek,this.locale);
},newDate:function(t){return y.newDate(t,this.dateClassObj)},isToday:function(t){
return y.isToday(t,this.dateClassObj)},isStartOfDay:function(t){return y.isStartOfDay(t,this.dateClassObj,this.dateModule);
},floorDate:function(t,e,i,n){return y.floor(t,e,i,n,this.classFuncObj)},animateRange:!0,
animationRangeDuration:400,_animateRange:function(t,e,i,n,s,a){this.animateRangeTimer&&(clearTimeout(this.animateRangeTimer),
delete this.animateRangeTimer);var o=i?m.fadeIn:m.fadeOut;d.set(t,{left:n+"px",right:-n+"px"
}),f.combine([m.animateProperty({node:t,properties:{left:s,right:-s},duration:this.animationRangeDuration/2,
onEnd:a}),o({node:t,duration:this.animationRangeDuration/2})]).play()},_animRangeOutDir:null,
_animRangeOutDir:null,nextRange:function(){this._animRangeOutDir="left",this._animRangeInDir="right",
this._navigate(1)},previousRange:function(){this._animRangeOutDir="right",this._animRangeInDir="left",
this._navigate(-1)},_navigate:function(t){var e=this.get("date"),i=this.dateModule;
if(null==e){var n=this.get("startDate"),s=this.get("endDate"),a=i.difference(n,s,"day");
1==t?(s=i.add(s,"day",1),this.set("startDate",s),this.set("endDate",i.add(s,"day",a))):(n=i.add(n,"day",-1),
this.set("startDate",i.add(n,"day",-a)),this.set("endDate",n))}else{var o=this.get("dateInterval"),r=this.get("dateIntervalSteps");
this.set("date",i.add(e,o,t*r))}},goToday:function(){this.set("date",this.floorToDay(new this.dateClassObj,!0)),
this.set("dateInterval","day"),this.set("dateIntervalSteps",1)},postCreate:function(){
this.inherited(arguments),this.configureButtons()},configureButtons:function(){var t=!this.isLeftToRight();
if(this.previousButton&&(this.previousButton.set("label",D[t?"nextButton":"previousButton"]),
this.own(v(this.previousButton,"click",n.hitch(this,this.previousRange)))),this.nextButton&&(this.nextButton.set("label",D[t?"previousButton":"nextButton"]),
this.own(v(this.nextButton,"click",n.hitch(this,this.nextRange)))),t&&this.previousButton&&this.nextButton){
var e=this.previousButton;this.previousButton=this.nextButton,this.nextButton=e}this.todayButton&&(this.todayButton.set("label",D.todayButton),
this.own(v(this.todayButton,"click",n.hitch(this,this.todayButtonClick)))),this.dayButton&&(this.dayButton.set("label",D.dayButton),
this.own(v(this.dayButton,"click",n.hitch(this,this.dayButtonClick)))),this.weekButton&&(this.weekButton.set("label",D.weekButton),
this.own(v(this.weekButton,"click",n.hitch(this,this.weekButtonClick)))),this.fourDaysButton&&(this.fourDaysButton.set("label",D.fourDaysButton),
this.own(v(this.fourDaysButton,"click",n.hitch(this,this.fourDaysButtonClick)))),
this.monthButton&&(this.monthButton.set("label",D.monthButton),this.own(v(this.monthButton,"click",n.hitch(this,this.monthButtonClick))));
},todayButtonClick:function(t){this.goToday()},dayButtonClick:function(t){null==this.get("date")&&this.set("date",this.floorToDay(new this.dateClassObj,!0)),
this.set("dateInterval","day"),this.set("dateIntervalSteps",1)},weekButtonClick:function(t){
this.set("dateInterval","week"),this.set("dateIntervalSteps",1)},fourDaysButtonClick:function(t){
this.set("dateInterval","day"),this.set("dateIntervalSteps",4)},monthButtonClick:function(t){
this.set("dateInterval","month"),this.set("dateIntervalSteps",1)},updateRenderers:function(t,e){
this.currentView&&this.currentView.updateRenderers(t,e)},getIdentity:function(t){
return t?t.id:null},_setHoveredItem:function(t,e){if(this.hoveredItem&&t&&this.hoveredItem.id!=t.id||null==t||null==this.hoveredItem){
var i=this.hoveredItem;this.hoveredItem=t,this.updateRenderers([i,this.hoveredItem],!0),
t&&e&&this.currentView._updateEditingCapabilities(t._item?t._item:t,e)}},hoveredItem:null,
isItemHovered:function(t){return null!=this.hoveredItem&&this.hoveredItem.id==t.id;
},isItemEditable:function(t,e){return this.editable},isItemMoveEnabled:function(t,e){
return this.isItemEditable(t,e)&&this.moveEnabled},isItemResizeEnabled:function(t,e){
return this.isItemEditable(t,e)&&this.resizeEnabled},onGridClick:function(t){},onGridDoubleClick:function(t){},
onItemClick:function(t){},onItemDoubleClick:function(t){},onItemContextMenu:function(t){},
onItemEditBegin:function(t){},onItemEditEnd:function(t){},onItemEditBeginGesture:function(t){},
onItemEditMoveGesture:function(t){},onItemEditResizeGesture:function(t){},onItemEditEndGesture:function(t){},
onItemRollOver:function(t){},onItemRollOut:function(t){},onColumnHeaderClick:function(t){},
onRowHeaderClick:function(t){},onExpandRendererClick:function(t){},_onRendererCreated:function(t){
this.onRendererCreated(t)},onRendererCreated:function(t){},_onRendererRecycled:function(t){
this.onRendererRecycled(t)},onRendererRecycled:function(t){},_onRendererReused:function(t){
this.onRendererReused(t)},onRendererReused:function(t){},_onRendererDestroyed:function(t){
this.onRendererDestroyed(t)},onRendererDestroyed:function(t){},_onRenderersLayoutDone:function(t){
this.onRenderersLayoutDone(t)},onRenderersLayoutDone:function(t){}})});