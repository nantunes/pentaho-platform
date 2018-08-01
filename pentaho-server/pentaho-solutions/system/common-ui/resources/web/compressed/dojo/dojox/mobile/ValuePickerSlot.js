define(["dojo/_base/array","dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-attr","dojo/touch","dijit/_WidgetBase","./iconUtils","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/ValuePickerSlot"],function(t,e,i,s,n,o,l,a,h,u,r,c,d){
var b=e(c("dojo-bidi")?"dojox.mobile.NonBidiValuePickerSlot":"dojox.mobile.ValuePickerSlot",u,{
items:[],labels:[],labelFrom:0,labelTo:0,zeroPad:0,value:"",step:1,readOnly:!1,tabIndex:"0",
plusBtnLabel:"",plusBtnLabelRef:"",minusBtnLabel:"",minusBtnLabelRef:"",baseClass:"mblValuePickerSlot",
buildRendering:function(){if(this.inherited(arguments),this.initLabels(),this.labels.length>0){
this.items=[];for(var t=0;t<this.labels.length;t++)this.items.push([t,this.labels[t]]);
}this.plusBtnNode=l.create("div",{className:"mblValuePickerSlotPlusButton mblValuePickerSlotButton",
title:"+"},this.domNode),this.plusIconNode=l.create("div",{className:"mblValuePickerSlotIcon"
},this.plusBtnNode),r.createIcon("mblDomButtonGrayPlus",null,this.plusIconNode),this.inputAreaNode=l.create("div",{
className:"mblValuePickerSlotInputArea"},this.domNode),this.inputNode=l.create("input",{
className:"mblValuePickerSlotInput",readonly:this.readOnly},this.inputAreaNode),this.minusBtnNode=l.create("div",{
className:"mblValuePickerSlotMinusButton mblValuePickerSlotButton",title:"-"},this.domNode),
this.minusIconNode=l.create("div",{className:"mblValuePickerSlotIcon"},this.minusBtnNode),
r.createIcon("mblDomButtonGrayMinus",null,this.minusIconNode),a.set(this.plusBtnNode,"role","button"),
this._setPlusBtnLabelAttr(this.plusBtnLabel),this._setPlusBtnLabelRefAttr(this.plusBtnLabelRef),
a.set(this.inputNode,"role","textbox");var e=require("dijit/registry"),i=e.getUniqueId("dojo_mobile__mblValuePickerSlotInput");
a.set(this.inputNode,"id",i),a.set(this.plusBtnNode,"aria-controls",i),a.set(this.minusBtnNode,"role","button"),
a.set(this.minusBtnNode,"aria-controls",i),this._setMinusBtnLabelAttr(this.minusBtnLabel),
this._setMinusBtnLabelRefAttr(this.minusBtnLabelRef),""===this.value&&this.items.length>0&&(this.value=this.items[0][1]),
this._initialValue=this.value},startup:function(){this._started||(this._handlers=[this.connect(this.plusBtnNode,h.press,"_onTouchStart"),this.connect(this.minusBtnNode,h.press,"_onTouchStart"),this.connect(this.plusBtnNode,"onkeydown","_onClick"),this.connect(this.minusBtnNode,"onkeydown","_onClick"),this.connect(this.inputNode,"onchange",s.hitch(this,function(t){
this._onChange(t)}))],this.inherited(arguments),this._set(this.plusBtnLabel))},initLabels:function(){
if(this.labelFrom!==this.labelTo)for(var t=this.labels=[],e=this.zeroPad&&Array(this.zeroPad).join("0"),i=this.labelFrom;i<=this.labelTo;i+=this.step)t.push(this.zeroPad?(e+i).slice(-this.zeroPad):i+"");
},spin:function(t){for(var e=-1,i=this.get("value"),s=this.items.length,n=0;s>n;n++)if(this.items[n][1]===i){
e=n;break}if(-1!=i){e+=t,0>e&&(e+=(Math.abs(Math.ceil(e/s))+1)*s);var o=this.items[e%s];
this.set("value",o[1])}},setInitialValue:function(){this.set("value",this._initialValue);
},_onClick:function(t){if((!t||"keydown"!==t.type||13===t.keyCode)&&this.onClick(t)!==!1){
var e=t.currentTarget;(e===this.plusBtnNode||e===this.minusBtnNode)&&(this._btn=e),
this.spin(this._btn===this.plusBtnNode?1:-1)}},onClick:function(){},_onChange:function(t){
if(this.onChange(t)!==!1){var e=this.get("value"),i=this.validate(e);this.set("value",i.length?i[0][1]:this.value);
}},onChange:function(){},validate:function(e){return t.filter(this.items,function(t){
return(t[1]+"").toLowerCase()==(e+"").toLowerCase()})},_onTouchStart:function(t){
this._conn=[this.connect(n.body(),h.move,"_onTouchMove"),this.connect(n.body(),h.release,"_onTouchEnd")],
this.touchStartX=t.touches?t.touches[0].pageX:t.clientX,this.touchStartY=t.touches?t.touches[0].pageY:t.clientY,
o.add(t.currentTarget,"mblValuePickerSlotButtonSelected"),this._btn=t.currentTarget,
this._timer&&(this._timer.remove(),this._timer=null),this._interval&&(clearInterval(this._interval),
this._interval=null),this._timer=this.defer(function(){this._interval=setInterval(s.hitch(this,function(){
this.spin(this._btn===this.plusBtnNode?1:-1)}),60),this._timer=null},1e3),i.stop(t);
},_onTouchMove:function(e){var i=e.touches?e.touches[0].pageX:e.clientX,s=e.touches?e.touches[0].pageY:e.clientY;
(Math.abs(i-this.touchStartX)>=4||Math.abs(s-this.touchStartY)>=4)&&(this._timer&&(this._timer.remove(),
this._timer=null),this._interval&&(clearInterval(this._interval),this._interval=null),
t.forEach(this._conn,this.disconnect,this),o.remove(this._btn,"mblValuePickerSlotButtonSelected"));
},_onTouchEnd:function(e){this._timer&&(this._timer.remove(),this._timer=null),t.forEach(this._conn,this.disconnect,this),
o.remove(this._btn,"mblValuePickerSlotButtonSelected"),this._interval?(clearInterval(this._interval),
this._interval=null):this._onClick(e)},_getKeyAttr:function(){var e=this.get("value"),i=t.filter(this.items,function(t){
return t[1]===e})[0];return i?i[0]:null},_getValueAttr:function(){return this.inputNode.value;
},_setValueAttr:function(t){this._spinToValue(t,!0)},_spinToValue:function(t,e){if(this.get("value")!=t){
this.inputNode.value=t,e&&this._set("value",t);var i=this.getParent();i&&i.onValueChanged&&i.onValueChanged(this);
}},_setTabIndexAttr:function(t){this.plusBtnNode.setAttribute("tabIndex",t),this.minusBtnNode.setAttribute("tabIndex",t);
},_setAria:function(t,e,i){i?a.set(t,e,i):a.remove(t,e)},_setPlusBtnLabelAttr:function(t){
this._setAria(this.plusBtnNode,"aria-label",t)},_setPlusBtnLabelRefAttr:function(t){
this._setAria(this.plusBtnNode,"aria-labelledby",t)},_setMinusBtnLabelAttr:function(t){
this._setAria(this.minusBtnNode,"aria-label",t)},_setMinusBtnLabelRefAttr:function(t){
this._setAria(this.minusBtnNode,"aria-labelledby",t)}});return c("dojo-bidi")?e("dojox.mobile.ValuePickerSlot",[b,d]):b;
});