define(["dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/Color","dojox/gfx","./BarGauge","./BarCircleIndicator","./GlossyHorizontalGaugeMarker"],function(t,i,e,s,o,n,r,h){
return t("dojox.gauges.GlossyHorizontalGauge",[n],{_defaultIndicator:r,color:"black",
markerColor:"black",majorTicksInterval:10,_majorTicksLength:10,majorTicksColor:"#c4c4c4",
minorTicksInterval:5,_minorTicksLength:6,minorTicksColor:"#c4c4c4",value:0,noChange:!1,
title:"",font:"normal normal normal 10pt serif",scalePrecision:0,_font:null,_margin:2,
_minBorderWidth:2,_maxBorderWidth:6,_tickLabelOffset:5,_designHeight:100,constructor:function(){
this.min=0,this.max=100},startup:function(){if(this.inherited(arguments),!this._gaugeStarted){
this._gaugeStarted=!0;var t=this.height/this._designHeight;this._minorTicksLength=this._minorTicksLength*t,
this._majorTicksLength=this._majorTicksLength*t;var s=this._font;this._computeDataRectangle();
var n=o.normalizedLength(s.size),r=n+this._tickLabelOffset+Math.max(this._majorTicksLength,this._minorTicksLength),a=Math.max(0,(this.height-r)/2);
this.addRange({low:this.min?this.min:0,high:this.max?this.max:100,color:[0,0,0,0]
}),this.setMajorTicks({fixedPrecision:!0,precision:this.scalePrecision,font:s,labelPlacement:"inside",
offset:a-this._majorTicksLength/2,interval:this.majorTicksInterval,length:this._majorTicksLength,
color:this.majorTicksColor}),this.setMinorTicks({labelPlacement:"inside",offset:a-this._minorTicksLength/2,
interval:this.minorTicksInterval,length:this._minorTicksLength,color:this.minorTicksColor
}),this._needle=new h({hideValue:!0,title:this.title,noChange:this.noChange,offset:a,
color:this.markerColor,value:this.value}),this.addIndicator(this._needle),i.connect(this._needle,"valueChanged",e.hitch(this,function(){
this.value=this._needle.value,this.onValueChanged()}))}},_layoutGauge:function(){
if(this._gaugeStarted){var t=this._font;this._computeDataRectangle();var i=o.normalizedLength(t.size),e=i+this._tickLabelOffset+Math.max(this._majorTicksLength,this._minorTicksLength),s=Math.max(0,(this.height-e)/2);
this._setMajorTicksProperty({fixedPrecision:!0,precision:this.scalePrecision,font:t,
offset:s-this._majorTicksLength/2,interval:this.majorTicksInterval,length:this._majorTicksLength
}),this._setMinorTicksProperty({offset:s-this._minorTicksLength/2,interval:this.minorTicksInterval,
length:this._minorTicksLength}),this.removeIndicator(this._needle),this._needle.offset=s,
this.addIndicator(this._needle)}},_formatNumber:function(t){var i=this._getNumberModule();
return i?i.format(t,{places:this.scalePrecision}):t.toFixed(this.scalePrecision)},
_computeDataRectangle:function(){if(this._gaugeStarted){var t=this._font,i=this._getTextWidth(this._formatNumber(this.min),t)/2,e=this._getTextWidth(this._formatNumber(this.max),t)/2,s=Math.max(i,e),o=this._getBorderWidth()+Math.max(this._majorTicksLength,this._majorTicksLength)/2+s;
this.dataHeight=this.height,this.dataY=0,this.dataX=o+this._margin,this.dataWidth=Math.max(0,this.width-2*this.dataX);
}},_getTextWidth:function(t,i){return o._base._getTextBox(t,{font:o.makeFontString(o.makeParameters(o.defaultFont,i))
}).w||0},_getBorderWidth:function(){return Math.max(this._minBorderWidth,Math.min(this._maxBorderWidth,this._maxBorderWidth*this.height/this._designHeight));
},drawBackground:function(t){if(!this._gaugeBackground){var i=s.blendColors(new s(this.color),new s("white"),.4);
this._gaugeBackground=t.createGroup();var e=this._getBorderWidth(),o=this._margin,n=this.width,r=this.height,h=Math.min(r/4,23);
this._gaugeBackground.createRect({x:o,y:o,width:Math.max(0,n-2*o),height:Math.max(0,r-2*o),
r:h}).setFill(this.color);var a=o+e,c=n-e-o,l=o+e,g=n-2*e-2*o,_=r-2*e-2*o;if(!(0>=g||0>=_)){
h=Math.min(h,g/2),h=Math.min(h,_/2),this._gaugeBackground.createRect({x:a,y:l,width:g,
height:_,r:h}).setFill({type:"linear",x1:a,y1:0,x2:a,y2:r-e-o,colors:[{offset:0,color:i
},{offset:.2,color:this.color},{offset:.8,color:this.color},{offset:1,color:i}]});
var m=4*(Math.sqrt(2)-1)/3*h;this._gaugeBackground.createPath({path:"M"+a+" "+(l+h)+"C"+a+" "+(l+h-m)+" "+(a+h-m)+" "+l+" "+(a+h)+" "+l+"L"+(c-h)+" "+l+"C"+(c-h+m)+" "+l+" "+c+" "+(l+h-m)+" "+c+" "+(l+h)+"L"+c+" "+(l+r/2)+"L"+a+" "+(l+r/3)+"Z"
}).setFill({type:"linear",x1:a,y1:l,x2:a,y2:l+this.height/2,colors:[{offset:0,color:i
},{offset:1,color:s.blendColors(new s(this.color),new s("white"),.2)}]})}}},onValueChanged:function(){},
_setColorAttr:function(t){this.color=t?t:"black",this._gaugeBackground&&this._gaugeBackground.parent&&this._gaugeBackground.parent.remove(this._gaugeBackground),
this._gaugeBackground=null,this.draw()},_setMarkerColorAttr:function(t){this.markerColor=t,
this._needle&&(this.removeIndicator(this._needle),this._needle.color=t,this._needle.shape=null,
this.addIndicator(this._needle))},_setMajorTicksIntervalAttr:function(t){this.majorTicksInterval=t,
this._setMajorTicksProperty({interval:this.majorTicksInterval})},setMajorTicksLength:function(t){
return this._majorTicksLength=t,this._layoutGauge(),this},getMajorTicksLength:function(){
return this._majorTicksLength},_setMajorTicksColorAttr:function(t){this.majorTicksColor=t,
this._setMajorTicksProperty({color:this.majorTicksColor})},_setMajorTicksProperty:function(t){
null!=this.majorTicks&&(e.mixin(this.majorTicks,t),this.setMajorTicks(this.majorTicks));
},_setMinorTicksIntervalAttr:function(t){this.minorTicksInterval=t,this._setMinorTicksProperty({
interval:this.minorTicksInterval})},setMinorTicksLength:function(t){return this._minorTicksLength=t,
this._layoutGauge(),this},getMinorTicksLength:function(){return this._minorTicksLength;
},_setMinorTicksColorAttr:function(t){this.minorTicksColor=t,this._setMinorTicksProperty({
color:this.minorTicksColor})},_setMinorTicksProperty:function(t){null!=this.minorTicks&&(e.mixin(this.minorTicks,t),
this.setMinorTicks(this.minorTicks))},_setMinAttr:function(t){this.min=t,this._computeDataRectangle(),
null!=this.majorTicks&&this.setMajorTicks(this.majorTicks),null!=this.minorTicks&&this.setMinorTicks(this.minorTicks),
this.draw()},_setMaxAttr:function(t){this.max=t,this._computeDataRectangle(),null!=this.majorTicks&&this.setMajorTicks(this.majorTicks),
null!=this.minorTicks&&this.setMinorTicks(this.minorTicks),this.draw()},_setValueAttr:function(t){
if(t=Math.min(this.max,t),t=Math.max(this.min,t),this.value=t,this._needle){var i=this._needle.noChange;
this._needle.noChange=!1,this._needle.update(t),this._needle.noChange=i}},_setScalePrecisionAttr:function(t){
this.scalePrecision=t,this._layoutGauge()},_setNoChangeAttr:function(t){this.noChange=t,
this._needle&&(this._needle.noChange=this.noChange)},_setTitleAttr:function(t){this.title=t,
this._needle&&(this._needle.title=this.title)},_setFontAttr:function(t){this.font=t,
this._font=o.splitFontString(t),this._layoutGauge()}})});