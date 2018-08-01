define(["dojo/_base/declare","dojo/dom-class","./_TimePickerMixin","./ToolBarButton","./ValuePicker","./ValuePickerSlot"],function(t,e,s,i,n,l){
return t("dojox.mobile.ValuePickerTimePicker",[n,s],{readOnly:!1,is24h:!1,hourPlusBtnLabel:"",
hourPlusBtnLabelRef:"",minutePlusBtnLabel:"",minutePlusBtnLabelRef:"",hourMinusBtnLabel:"",
hourMinusBtnLabelRef:"",minuteMinusBtnLabel:"",minuteMinusBtnLabelRef:"",slotClasses:[l,l],
slotProps:[{labelFrom:0,labelTo:23,style:{width:"72px"}},{labelFrom:0,labelTo:59,
zeroPad:2,style:{width:"72px"}}],buildRendering:function(){var t=this.slotProps;t[0].readOnly=t[1].readOnly=this.readOnly,
this._setBtnLabels(t),this.inherited(arguments);var s=this.slots[0].items;this._zero=s.slice(0,1),
this._pm=s.slice(13),e.add(this.domNode,"mblValuePickerTimePicker"),e.add(this.slots[0].domNode,"mblValuePickerTimePickerHourSlot"),
e.add(this.slots[1].domNode,"mblValuePickerTimePickerMinuteSlot"),this.ampmButton=new i,
this.addChild(this.ampmButton),this._conn=[this.connect(this.ampmButton,"onClick","onBtnClick")],
this.set("is24h",this.is24h)},to12h:function(t){var e=t[0]-0,s=12>e?"AM":"PM";return 0==e?e=12:e>12&&(e-=12),
[e+"",t[1],s]},to24h:function(t){var e=t[0]-0;return e="AM"==t[2]?12==e?0:e:12==e?e:e+12,
[e+"",t[1]]},onBtnClick:function(){var t="AM"==this.ampmButton.get("label")?"PM":"AM",e=this.get("values12");
e[2]=t,this.set("values12",e),this.onValueChanged&&this.onValueChanged(this.slots[0]);
},_setIs24hAttr:function(t){var e=this.slots[0].items;t&&24!=e.length?this.slots[0].items=this._zero.concat(e).concat(this._pm):t||12==e.length||(e.splice(0,1),
e.splice(12));var s=this.get("values");this._set("is24h",t),this.ampmButton.domNode.style.display=t?"none":"",
this.set("values",s)},_getValuesAttr:function(){var t=this.inherited(arguments);return this.is24h?t:this.to24h([t[0],t[1],this.ampmButton.get("label")]);
},_setValuesAttr:function(t){this.is24h?this.inherited(arguments):(t=this.to12h(t),
this.ampmButton.set("label",t[2]),this.inherited(arguments))},_getValues12Attr:function(){
return this.to12h(this._getValuesAttr())},_setValues12Attr:function(t){this.set("values",this.to24h(t));
},_setBtnLabels:function(t){t[0].plusBtnLabel=this.hourPlusBtnLabel,t[0].plusBtnLabelRef=this.hourPlusBtnLabelRef,
t[0].minusBtnLabel=this.hourMinusBtnLabel,t[0].minusBtnLabelRef=this.hourMinusBtnLabelRef,
t[1].plusBtnLabel=this.minutePlusBtnLabel,t[1].plusBtnLabelRef=this.minutePlusBtnLabelRef,
t[1].minusBtnLabel=this.minuteMinusBtnLabel,t[1].minusBtnLabelRef=this.minuteMinusBtnLabelRef;
}})});