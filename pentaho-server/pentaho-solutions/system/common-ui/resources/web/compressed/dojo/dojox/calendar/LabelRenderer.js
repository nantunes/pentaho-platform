define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dojox/calendar/_RendererMixin","dojo/text!./templates/LabelRenderer.html"],function(e,i,t,n,a){
return e("dojox.calendar.LabelRenderer",[i,t,n],{templateString:a,_orientation:"horizontal",
resizeEnabled:!1,visibilityLimits:{resizeStartHandle:50,resizeEndHandle:-1,summaryLabel:15,
startTimeLabel:45,endTimeLabel:30},_isElementVisible:function(e,i,t,n){switch(e){
case"startTimeLabel":var a=this.item.startTime;if(this.item.isAllDay||0==a.getHours()&&0==a.getMinutes()&&0==a.getSeconds()&&0==a.getMilliseconds())return!1;
}return this.inherited(arguments)},_displayValue:"inline",postCreate:function(){this.inherited(arguments),
this._applyAttributes()}})});