define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojox/gfx","./AnalogGauge","./AnalogCircleIndicator","./TextIndicator","./GlossyCircularGaugeNeedle"],function(t,i,e,s,n,o,r,h){
return t("dojox.gauges.GlossyCircularGaugeBase",[n],{_defaultIndicator:o,_needle:null,
_textIndicator:null,_textIndicatorAdded:!1,_range:null,value:0,color:"black",needleColor:"#c4c4c4",
textIndicatorFont:"normal normal normal 20pt serif",textIndicatorVisible:!0,textIndicatorColor:"#c4c4c4",
_majorTicksOffset:130,majorTicksInterval:10,_majorTicksLength:5,majorTicksColor:"#c4c4c4",
majorTicksLabelPlacement:"inside",_minorTicksOffset:130,minorTicksInterval:5,_minorTicksLength:3,
minorTicksColor:"#c4c4c4",noChange:!1,title:"",font:"normal normal normal 10pt serif",
scalePrecision:0,textIndicatorPrecision:0,_font:null,constructor:function(){this.startAngle=-135,
this.endAngle=135,this.min=0,this.max=100},startup:function(){if(this.inherited(arguments),
!this._needle){var t=Math.min(this.width/this._designWidth,this.height/this._designHeight);
this.cx=t*this._designCx+(this.width-t*this._designWidth)/2,this.cy=t*this._designCy+(this.height-t*this._designHeight)/2,
this._range={low:this.min?this.min:0,high:this.max?this.max:100,color:[255,255,255,0]
},this.addRange(this._range),this._majorTicksOffset=this._minorTicksOffset=t*this._majorTicksOffset,
this._majorTicksLength=t*this._majorTicksLength,this._minorTicksLength=t*this._minorTicksLength,
this.setMajorTicks({fixedPrecision:!0,precision:this.scalePrecision,font:this._font,
offset:this._majorTicksOffset,interval:this.majorTicksInterval,length:this._majorTicksLength,
color:this.majorTicksColor,labelPlacement:this.majorTicksLabelPlacement}),this.setMinorTicks({
offset:this._minorTicksOffset,interval:this.minorTicksInterval,length:this._minorTicksLength,
color:this.minorTicksColor}),this._needle=new h({hideValue:!0,title:this.title,noChange:this.noChange,
color:this.needleColor,value:this.value}),this.addIndicator(this._needle),this._textIndicator=new r({
x:t*this._designTextIndicatorX+(this.width-t*this._designWidth)/2,y:t*this._designTextIndicatorY+(this.height-t*this._designHeight)/2,
fixedPrecision:!0,precision:this.textIndicatorPrecision,color:this.textIndicatorColor,
value:this.value?this.value:this.min,align:"middle",font:this._textIndicatorFont}),
this.textIndicatorVisible&&(this.addIndicator(this._textIndicator),this._textIndicatorAdded=!0),
e.connect(this._needle,"valueChanged",i.hitch(this,function(){this.value=this._needle.value,
this._textIndicator.update(this._needle.value),this.onValueChanged()}))}},onValueChanged:function(){},
_setColorAttr:function(t){this.color=t?t:"black",this._gaugeBackground&&this._gaugeBackground.parent&&this._gaugeBackground.parent.remove(this._gaugeBackground),
this._foreground&&this._foreground.parent&&this._foreground.parent.remove(this._foreground),
this._gaugeBackground=null,this._foreground=null,this.draw()},_setNeedleColorAttr:function(t){
this.needleColor=t,this._needle&&(this.removeIndicator(this._needle),this._needle.color=this.needleColor,
this._needle.shape=null,this.addIndicator(this._needle))},_setTextIndicatorColorAttr:function(t){
this.textIndicatorColor=t,this._textIndicator&&(this._textIndicator.color=this.textIndicatorColor,
this.draw())},_setTextIndicatorFontAttr:function(t){this.textIndicatorFont=t,this._textIndicatorFont=s.splitFontString(t),
this._textIndicator&&(this._textIndicator.font=this._textIndicatorFont,this.draw());
},setMajorTicksOffset:function(t){return this._majorTicksOffset=t,this._setMajorTicksProperty({
offset:this._majorTicksOffset}),this},getMajorTicksOffset:function(){return this._majorTicksOffset;
},_setMajorTicksIntervalAttr:function(t){this.majorTicksInterval=t,this._setMajorTicksProperty({
interval:this.majorTicksInterval})},setMajorTicksLength:function(t){return this._majorTicksLength=t,
this._setMajorTicksProperty({length:this._majorTicksLength}),this},getMajorTicksLength:function(){
return this._majorTicksLength},_setMajorTicksColorAttr:function(t){this.majorTicksColor=t,
this._setMajorTicksProperty({color:this.majorTicksColor})},_setMajorTicksLabelPlacementAttr:function(t){
this.majorTicksLabelPlacement=t,this._setMajorTicksProperty({labelPlacement:this.majorTicksLabelPlacement
})},_setMajorTicksProperty:function(t){this.majorTicks&&(i.mixin(this.majorTicks,t),
this.setMajorTicks(this.majorTicks))},setMinorTicksOffset:function(t){return this._minorTicksOffset=t,
this._setMinorTicksProperty({offset:this._minorTicksOffset}),this},getMinorTicksOffset:function(){
return this._minorTicksOffset},_setMinorTicksIntervalAttr:function(t){this.minorTicksInterval=t,
this._setMinorTicksProperty({interval:this.minorTicksInterval})},setMinorTicksLength:function(t){
return this._minorTicksLength=t,this._setMinorTicksProperty({length:this._minorTicksLength
}),this},getMinorTicksLength:function(){return this._minorTicksLength},_setMinorTicksColorAttr:function(t){
this.minorTicksColor=t,this._setMinorTicksProperty({color:this.minorTicksColor})},
_setMinorTicksProperty:function(t){this.minorTicks&&(i.mixin(this.minorTicks,t),this.setMinorTicks(this.minorTicks));
},_setMinAttr:function(t){this.min=t,null!=this.majorTicks&&this.setMajorTicks(this.majorTicks),
null!=this.minorTicks&&this.setMinorTicks(this.minorTicks),this.draw(),this._updateNeedle();
},_setMaxAttr:function(t){this.max=t,null!=this.majorTicks&&this.setMajorTicks(this.majorTicks),
null!=this.minorTicks&&this.setMinorTicks(this.minorTicks),this.draw(),this._updateNeedle();
},_setScalePrecisionAttr:function(t){this.scalePrecision=t,this._setMajorTicksProperty({
precision:t})},_setTextIndicatorPrecisionAttr:function(t){this.textIndicatorPrecision=t,
this._setMajorTicksProperty({precision:t})},_setValueAttr:function(t){if(t=Math.min(this.max,t),
t=Math.max(this.min,t),this.value=t,this._needle){var i=this._needle.noChange;this._needle.noChange=!1,
this._needle.update(t),this._needle.noChange=i}},_setNoChangeAttr:function(t){this.noChange=t,
this._needle&&(this._needle.noChange=this.noChange)},_setTextIndicatorVisibleAttr:function(t){
this.textIndicatorVisible=t,this._textIndicator&&this._needle&&(this.textIndicatorVisible&&!this._textIndicatorAdded?(this.addIndicator(this._textIndicator),
this._textIndicatorAdded=!0,this.moveIndicatorToFront(this._needle)):!this.textIndicatorVisible&&this._textIndicatorAdded&&(this.removeIndicator(this._textIndicator),
this._textIndicatorAdded=!1))},_setTitleAttr:function(t){this.title=t,this._needle&&(this._needle.title=this.title);
},_setOrientationAttr:function(t){this.orientation=t,null!=this.majorTicks&&this.setMajorTicks(this.majorTicks),
null!=this.minorTicks&&this.setMinorTicks(this.minorTicks),this.draw(),this._updateNeedle();
},_updateNeedle:function(){if(this.value=Math.max(this.min,this.value),this.value=Math.min(this.max,this.value),
this._needle){var t=this._needle.noChange;this._needle.noChange=!1,this._needle.update(this.value,!1),
this._needle.noChange=t}},_setFontAttr:function(t){this.font=t,this._font=s.splitFontString(t),
this._setMajorTicksProperty({font:this._font})}})});