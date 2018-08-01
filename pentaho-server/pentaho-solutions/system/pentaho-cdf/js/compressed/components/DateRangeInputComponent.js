define(["../lib/jquery","./BaseComponent","amd!../lib/daterangepicker.jQuery","css!./DateRangeInputComponent"],function($,BaseComponent){
return BaseComponent.extend({update:function(){function e(){u&&d&&(a.fireInputChange(a.startValue,a.endValue),
u=d=!1)}var t,a=this,n=this.name,r=this.getStartParamValue(),i=this.getEndParamValue(),o=this.inputSeparator=this.inputSeparator||">";
if(void 0==this.singleInput||1==this.singleInput)t=$('<input class="date-range-single-input" id="'+n+'"/>'),
t.val(r+" "+o+" "+i);else{t=$('<input class="date-range-multiple-input" id="'+n+'"/>'+o),
t.val(r);var s=$('<input class="date-range-multiple-input-2" id="'+n+'2"/>');s.val(i),
t=t.add(s)}this.placeholder().addClass("date-range-input-container").html(t),a.on("onOpen:dateRangeInput",a.onOpenEvent),
a.on("onClose:dateRangeInput",a.onCloseEvent);var u,d,l=t.offset(),p=void 0!=a.earliestDate?a.earliestDate:Date.parse("-1years"),g=void 0!=a.latestDate?a.latestDate:Date.parse("+1years"),h=void 0!=a.leftOffset?a.leftOffset:0,c=void 0!=a.topOffset?a.topOffset:15,f=void 0==a.dateFormat||null==a.dateFormat?"yy-mm-dd":a.dateFormat;
$(function(){a.placeholder("input").daterangepicker({posX:l.left+h,posY:l.top+c,earliestDate:p,
latestDate:g,dateFormat:f,rangeSplitter:o,onOpen:function(){a.triggerOnOpen(),u=d=!1,
a.startValue=null,a.endValue=null,a.addCancelButton()},onDateSelect:function(t,n){
u=!0,a.storeChanges(t,n),e()},onClose:function(){a.triggerOnClose(),d=!0,e()}}),a._doAutoFocus(),
a.canClickOutsidePopup&&$(document).off("click")})},triggerOnOpen:function(){this.placeholder("input").toggleClass("driComponentExpanded",!0),
this.trigger("onOpen:dateRangeInput")},triggerOnClose:function(){this.placeholder("input").toggleClass("driComponentExpanded",!1),
this.trigger("onClose:dateRangeInput")},getStartParamValue:function(){return this.dashboard.getParameterValue(this.parameter[0]);
},getEndParamValue:function(){return this.dashboard.getParameterValue(this.parameter[1]);
},addCancelButton:function(){var e=this,t=e.getStartParamValue(),a=e.getEndParamValue(),n=$(".ui-daterangepickercontain .ranges"),r=$('<button class="btnCancel ui-state-default ui-corner-all">Cancel</button>').click(function(){
var n=e.placeholder("input"),r=$(".ui-daterangepickercontain .ui-daterangepicker"),i=$(".ui-daterangepickercontain .range-start"),o=$(".ui-daterangepickercontain .range-end");
void 0==e.singleInput||1==e.singleInput?n.val(t+" "+e.inputSeparator+" "+a):(n.eq(0).val(t),
n.eq(1).val(a)),i.data("saveDate",new Date(t)).restoreDateFromData(),o.data("saveDate",new Date(a)).restoreDateFromData(),
e.triggerOnClose(),r.data("state","closed"),r.fadeOut(300)}).hover(function(){$(this).addClass("ui-state-hover");
},function(){$(this).removeClass("ui-state-hover")}).appendTo(n),i=$(".ui-daterangepickercontain ul");
i.find("li").click(function(){r.hide(),setTimeout(function(){r.fadeIn()},400)})},
fireInputChange:function(e,t){this.preChange&&this.preChange(e,t),this.parameter&&(2==this.parameter.length&&this.dashboard.setParameter(this.parameter[1],t),
this.parameter.length>0&&this.dashboard.fireChange(this.parameter[0],e)),this.postChange&&this.postChange(e,t);
},storeChanges:function(e,t){this.startValue=e,this.endValue=t}},{fireDateRangeInputChange:function(name,rangeA,rangeB){
var object=this.dashboard.getComponentByName(name);"undefined"!=typeof object.preChange&&object.preChange(rangeA,rangeB);
var parameters=eval(name+".parameter");this.dashboard.setParameter(parameters[1],rangeB),
this.dashboard.fireChange(parameters[0],rangeA),"undefined"!=typeof object.postChange&&object.postChange(rangeA,rangeB);
}})});