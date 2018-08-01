define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/html","dojo/_base/connect","dojo/_base/sniff","dojo/_base/window","dojo/_base/event","dojo/dom","dojo/dom-class","dojo/keys","dojo/fx","dojo/dnd/move","dijit/registry","dijit/_base/focus","dijit/form/_FormWidget","dijit/typematic","dojox/color","dojo/i18n","dojo/i18n!./nls/ColorPicker","dojo/i18n!dojo/cldr/nls/number","dojo/text!./ColorPicker/ColorPicker.html"],function(t,e,s,i,o,r,h,a,d,u,l,n,_,c,C,p,E,R,v,y,f,P,K){
t.experimental("dojox.widget.ColorPicker");var H=function(t){return t};return e("dojox.widget.ColorPicker",E,{
showRgb:!0,showHsv:!0,showHex:!0,webSafe:!0,animatePoint:!0,slideDuration:250,liveUpdate:!1,
PICKER_HUE_H:150,PICKER_SAT_VAL_H:150,PICKER_SAT_VAL_W:150,PICKER_HUE_SELECTOR_H:8,
PICKER_SAT_SELECTOR_H:10,PICKER_SAT_SELECTOR_W:10,value:"#ffffff",_underlay:t.moduleUrl("dojox.widget","ColorPicker/images/underlay.png"),
_hueUnderlay:t.moduleUrl("dojox.widget","ColorPicker/images/hue.png"),_pickerPointer:t.moduleUrl("dojox.widget","ColorPicker/images/pickerPointer.png"),
_huePickerPointer:t.moduleUrl("dojox.widget","ColorPicker/images/hueHandle.png"),
_huePickerPointerAlly:t.moduleUrl("dojox.widget","ColorPicker/images/hueHandleA11y.png"),
templateString:K,postMixInProperties:function(){l.contains(a.body(),"dijit_a11y")&&(this._huePickerPointer=this._huePickerPointerAlly),
this._uId=C.getUniqueId(this.id),s.mixin(this,y.getLocalization("dojox.widget","ColorPicker")),
s.mixin(this,y.getLocalization("dojo.cldr","number")),this.inherited(arguments)},
postCreate:function(){this.inherited(arguments),h("ie")<7&&(this.colorUnderlay.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+this._underlay+"', sizingMethod='scale')",
this.colorUnderlay.src=this._blankGif.toString()),this.showRgb||(this.rgbNode.style.visibility="hidden"),
this.showHsv||(this.hsvNode.style.visibility="hidden"),this.showHex||(this.hexNode.style.visibility="hidden"),
this.webSafe||(this.safePreviewNode.style.visibility="hidden")},startup:function(){
this._started||(this._started=!0,this.set("value",this.value),this._mover=new c.boxConstrainedMoveable(this.cursorNode,{
box:{t:-(this.PICKER_SAT_SELECTOR_H/2),l:-(this.PICKER_SAT_SELECTOR_W/2),w:this.PICKER_SAT_VAL_W,
h:this.PICKER_SAT_VAL_H}}),this._hueMover=new c.boxConstrainedMoveable(this.hueCursorNode,{
box:{t:-(this.PICKER_HUE_SELECTOR_H/2),l:0,w:0,h:this.PICKER_HUE_H}}),this._subs=[],
this._subs.push(r.subscribe("/dnd/move/stop",s.hitch(this,"_clearTimer"))),this._subs.push(r.subscribe("/dnd/move/start",s.hitch(this,"_setTimer"))),
this._keyListeners=[],this._connects.push(R.addKeyListener(this.hueCursorNode,{charOrCode:n.UP_ARROW,
shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1},this,s.hitch(this,this._updateHueCursorNode),25,25)),
this._connects.push(R.addKeyListener(this.hueCursorNode,{charOrCode:n.DOWN_ARROW,
shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1},this,s.hitch(this,this._updateHueCursorNode),25,25)),
this._connects.push(R.addKeyListener(this.cursorNode,{charOrCode:n.UP_ARROW,shiftKey:!1,
metaKey:!1,ctrlKey:!1,altKey:!1},this,s.hitch(this,this._updateCursorNode),25,25)),
this._connects.push(R.addKeyListener(this.cursorNode,{charOrCode:n.DOWN_ARROW,shiftKey:!1,
metaKey:!1,ctrlKey:!1,altKey:!1},this,s.hitch(this,this._updateCursorNode),25,25)),
this._connects.push(R.addKeyListener(this.cursorNode,{charOrCode:n.LEFT_ARROW,shiftKey:!1,
metaKey:!1,ctrlKey:!1,altKey:!1},this,s.hitch(this,this._updateCursorNode),25,25)),
this._connects.push(R.addKeyListener(this.cursorNode,{charOrCode:n.RIGHT_ARROW,shiftKey:!1,
metaKey:!1,ctrlKey:!1,altKey:!1},this,s.hitch(this,this._updateCursorNode),25,25)));
},_setValueAttr:function(t){this._started&&this.setColor(t,!0)},setColor:function(t,e){
t=v.fromString(t),this._updatePickerLocations(t),this._updateColorInputs(t),this._updateValue(t,e);
},_setTimer:function(t){t.node==this.cursorNode&&(p.focus(t.node),u.setSelectable(this.domNode,!1),
this._timer=setInterval(s.hitch(this,"_updateColor"),45))},_clearTimer:function(t){
this._timer&&(clearInterval(this._timer),this._timer=null,this.onChange(this.value),
u.setSelectable(this.domNode,!0))},_setHue:function(t){o.style(this.colorUnderlay,"backgroundColor",v.fromHsv(t,100,100).toHex());
},_updateHueCursorNode:function(t,e,s){if(-1!==t){var i=o.style(this.hueCursorNode,"top"),r=this.PICKER_HUE_SELECTOR_H/2;
i+=r;var h=!1;s.charOrCode==n.UP_ARROW?i>0&&(i-=1,h=!0):s.charOrCode==n.DOWN_ARROW&&i<this.PICKER_HUE_H&&(i+=1,
h=!0),i-=r,h&&o.style(this.hueCursorNode,"top",i+"px")}else this._updateColor(!0);
},_updateCursorNode:function(t,e,s){var i=this.PICKER_SAT_SELECTOR_H/2,r=this.PICKER_SAT_SELECTOR_W/2;
if(-1!==t){var h=o.style(this.cursorNode,"top"),a=o.style(this.cursorNode,"left");
h+=i,a+=r;var d=!1;s.charOrCode==n.UP_ARROW?h>0&&(h-=1,d=!0):s.charOrCode==n.DOWN_ARROW?h<this.PICKER_SAT_VAL_H&&(h+=1,
d=!0):s.charOrCode==n.LEFT_ARROW?a>0&&(a-=1,d=!0):s.charOrCode==n.RIGHT_ARROW&&a<this.PICKER_SAT_VAL_W&&(a+=1,
d=!0),d&&(h-=i,a-=r,o.style(this.cursorNode,"top",h+"px"),o.style(this.cursorNode,"left",a+"px"));
}else this._updateColor(!0)},_updateColor:function(t){var e=this.PICKER_HUE_SELECTOR_H/2,s=this.PICKER_SAT_SELECTOR_H/2,i=this.PICKER_SAT_SELECTOR_W/2,r=o.style(this.hueCursorNode,"top")+e,h=o.style(this.cursorNode,"top")+s,a=o.style(this.cursorNode,"left")+i,d=Math.round(360-r/this.PICKER_HUE_H*360),u=v.fromHsv(d,a/this.PICKER_SAT_VAL_W*100,100-h/this.PICKER_SAT_VAL_H*100);
this._updateColorInputs(u),this._updateValue(u,t),d!=this._hue&&this._setHue(d)},
_colorInputChange:function(t){var e,s=!1;switch(t.target){case this.hexCode:e=v.fromString(t.target.value),
s=!0;break;case this.Rval:case this.Gval:case this.Bval:e=v.fromArray([this.Rval.value,this.Gval.value,this.Bval.value]),
s=!0;break;case this.Hval:case this.Sval:case this.Vval:e=v.fromHsv(this.Hval.value,this.Sval.value,this.Vval.value),
s=!0}s&&(this._updatePickerLocations(e),this._updateColorInputs(e),this._updateValue(e,!0));
},_updateValue:function(t,e){var s=t.toHex();this.value=this.valueNode.value=s,!e||this._timer&&!this.liveUpdate||this.onChange(s);
},_updatePickerLocations:function(t){var e=this.PICKER_HUE_SELECTOR_H/2,s=this.PICKER_SAT_SELECTOR_H/2,i=this.PICKER_SAT_SELECTOR_W/2,r=t.toHsv(),h=Math.round(this.PICKER_HUE_H-r.h/360*this.PICKER_HUE_H)-e,a=Math.round(r.s/100*this.PICKER_SAT_VAL_W)-i,d=Math.round(this.PICKER_SAT_VAL_H-r.v/100*this.PICKER_SAT_VAL_H)-s;
this.animatePoint?(_.slideTo({node:this.hueCursorNode,duration:this.slideDuration,
top:h,left:0}).play(),_.slideTo({node:this.cursorNode,duration:this.slideDuration,
top:d,left:a}).play()):(o.style(this.hueCursorNode,"top",h+"px"),o.style(this.cursorNode,{
left:a+"px",top:d+"px"})),r.h!=this._hue&&this._setHue(r.h)},_updateColorInputs:function(t){
var e=t.toHex();if(this.showRgb&&(this.Rval.value=t.r,this.Gval.value=t.g,this.Bval.value=t.b),
this.showHsv){var s=t.toHsv();this.Hval.value=Math.round(s.h),this.Sval.value=Math.round(s.s),
this.Vval.value=Math.round(s.v)}this.showHex&&(this.hexCode.value=e),this.previewNode.style.backgroundColor=e,
this.webSafe&&(this.safePreviewNode.style.backgroundColor=H(e))},_setHuePoint:function(t){
var e=this.PICKER_HUE_SELECTOR_H/2,i=t.layerY-e;this.animatePoint?_.slideTo({node:this.hueCursorNode,
duration:this.slideDuration,top:i,left:0,onEnd:s.hitch(this,function(){this._updateColor(!1),
p.focus(this.hueCursorNode)})}).play():(o.style(this.hueCursorNode,"top",i+"px"),
this._updateColor(!1))},_setPoint:function(t){var e=this.PICKER_SAT_SELECTOR_H/2,i=this.PICKER_SAT_SELECTOR_W/2,r=t.layerY-e,h=t.layerX-i;
t&&p.focus(t.target),this.animatePoint?_.slideTo({node:this.cursorNode,duration:this.slideDuration,
top:r,left:h,onEnd:s.hitch(this,function(){this._updateColor(!0),p.focus(this.cursorNode);
})}).play():(o.style(this.cursorNode,{left:h+"px",top:r+"px"}),this._updateColor(!1));
},_handleKey:function(t){},focus:function(){this.focused||p.focus(this.focusNode);
},_stopDrag:function(t){d.stop(t)},destroy:function(){this.inherited(arguments),i.forEach(this._subs,function(t){
r.unsubscribe(t)}),delete this._subs}})});