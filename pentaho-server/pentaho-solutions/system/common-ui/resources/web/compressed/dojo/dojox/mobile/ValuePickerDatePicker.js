define(["dojo/_base/declare","dojo/dom-class","dojo/dom-attr","./_DatePickerMixin","./ValuePicker","./ValuePickerSlot"],function(e,t,s,n,l,a){
return e("dojox.mobile.ValuePickerDatePicker",[l,n],{readOnly:!1,yearPlusBtnLabel:"",
yearPlusBtnLabelRef:"",yearMinusBtnLabel:"",yearMinusBtnLabelRef:"",monthPlusBtnLabel:"",
monthPlusBtnLabelRef:"",monthMinusBtnLabel:"",monthMinusBtnLabelRef:"",dayPlusBtnLabel:"",
dayPlusBtnLabelRef:"",dayMinusBtnLabel:"",dayMinusBtnLabelRef:"",slotClasses:[a,a,a],
slotProps:[{labelFrom:1970,labelTo:2038,style:{width:"87px"}},{style:{width:"72px"
}},{style:{width:"72px"}}],buildRendering:function(){var e=this.slotProps;e[0].readOnly=e[1].readOnly=e[2].readOnly=this.readOnly,
this._setBtnLabels(e),this.initSlots(),this.inherited(arguments),t.add(this.domNode,"mblValuePickerDatePicker"),
this._conn=[this.connect(this.slots[0],"_spinToValue","_onYearSet"),this.connect(this.slots[1],"_spinToValue","_onMonthSet"),this.connect(this.slots[2],"_spinToValue","_onDaySet")];
},disableValues:function(e){var t=this.slots[2].items;this._tail&&(this.slots[2].items=t=t.concat(this._tail)),
this._tail=t.slice(e),t.splice(e)},_setBtnLabels:function(e){e[0].plusBtnLabel=this.yearPlusBtnLabel,
e[0].plusBtnLabelRef=this.yearPlusBtnLabelRef,e[0].minusBtnLabel=this.yearMinusBtnLabel,
e[0].minusBtnLabelRef=this.yearMinusBtnLabelRef,e[1].plusBtnLabel=this.monthPlusBtnLabel,
e[1].plusBtnLabelRef=this.monthPlusBtnLabelRef,e[1].minusBtnLabel=this.monthMinusBtnLabel,
e[1].minusBtnLabelRef=this.monthMinusBtnLabelRef,e[2].plusBtnLabel=this.dayPlusBtnLabel,
e[2].plusBtnLabelRef=this.dayPlusBtnLabelRef,e[2].minusBtnLabel=this.dayMinusBtnLabel,
e[2].minusBtnLabelRef=this.dayMinusBtnLabelRef}})});