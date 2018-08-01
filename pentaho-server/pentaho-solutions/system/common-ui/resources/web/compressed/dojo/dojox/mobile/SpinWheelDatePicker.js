define(["dojo/_base/array","dojo/_base/declare","dojo/dom-class","./_DatePickerMixin","./SpinWheel","./SpinWheelSlot"],function(e,o,n,i,t,s){
return o("dojox.mobile.SpinWheelDatePicker",[t,i],{slotClasses:[s,s,s],slotProps:[{
labelFrom:1970,labelTo:2038},{},{}],buildRendering:function(){this.initSlots(),this.inherited(arguments),
n.add(this.domNode,"mblSpinWheelDatePicker"),this._conn=[this.connect(this.slots[0],"onFlickAnimationEnd","_onYearSet"),this.connect(this.slots[1],"onFlickAnimationEnd","_onMonthSet"),this.connect(this.slots[2],"onFlickAnimationEnd","_onDaySet")];
},disableValues:function(o){e.forEach(this.slots[2].panelNodes,function(e){for(var i=27;31>i;i++)n.toggle(e.childNodes[i],"mblSpinWheelSlotLabelGray",i>=o);
})}})});