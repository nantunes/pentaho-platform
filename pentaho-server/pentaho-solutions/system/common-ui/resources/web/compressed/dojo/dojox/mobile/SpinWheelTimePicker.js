define(["dojo/_base/declare","dojo/dom-class","./_TimePickerMixin","./SpinWheel","./SpinWheelSlot"],function(e,i,l,o,t){
return e("dojox.mobile.SpinWheelTimePicker",[o,l],{slotClasses:[t,t],slotProps:[{
labelFrom:0,labelTo:23,style:{width:"50px",textAlign:"right"}},{labelFrom:0,labelTo:59,
zeroPad:2,style:{width:"40px",textAlign:"right"}}],buildRendering:function(){this.inherited(arguments),
i.add(this.domNode,"mblSpinWheelTimePicker")}})});