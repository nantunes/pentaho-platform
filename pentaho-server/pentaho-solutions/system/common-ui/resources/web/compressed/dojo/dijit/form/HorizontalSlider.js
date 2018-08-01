define(["dojo/_base/array","dojo/_base/declare","dojo/dnd/move","dojo/_base/fx","dojo/dom-geometry","dojo/dom-style","dojo/keys","dojo/_base/lang","dojo/sniff","dojo/dnd/Moveable","dojo/dnd/Mover","dojo/query","dojo/mouse","dojo/on","../_base/manager","../focus","../typematic","./Button","./_FormValueWidget","../_Container","dojo/text!./templates/HorizontalSlider.html"],function(e,t,i,s,n,o,r,a,d,h,l,u,m,_,c,p,g,f,y,v,P){
var b=t("dijit.form._SliderMover",l,{onMouseMove:function(e){var t=this.widget,i=t._abspos;
i||(i=t._abspos=n.position(t.sliderBarContainer,!0),t._setPixelValue_=a.hitch(t,"_setPixelValue"),
t._isReversed_=t._isReversed());var s=e[t._mousePixelCoord]-i[t._startingPixelCoord];
t._setPixelValue_(t._isReversed_?i[t._pixelCount]-s:s,i[t._pixelCount],!1)},destroy:function(e){
l.prototype.destroy.apply(this,arguments);var t=this.widget;t._abspos=null,t._setValueAttr(t.value,!0);
}}),x=t("dijit.form.HorizontalSlider",[y,v],{templateString:P,value:0,showButtons:!0,
minimum:0,maximum:100,discreteValues:1/0,pageIncrement:2,clickSelect:!0,slideDuration:c.defaultDuration,
_setIdAttr:"",_setNameAttr:"valueNode",baseClass:"dijitSlider",cssStateNodes:{incrementButton:"dijitSliderIncrementButton",
decrementButton:"dijitSliderDecrementButton",focusNode:"dijitSliderThumb"},_mousePixelCoord:"pageX",
_pixelCount:"w",_startingPixelCoord:"x",_handleOffsetCoord:"left",_progressPixelSize:"width",
_onKeyUp:function(e){this.disabled||this.readOnly||e.altKey||e.ctrlKey||e.metaKey||this._setValueAttr(this.value,!0);
},_onKeyDown:function(e){if(!(this.disabled||this.readOnly||e.altKey||e.ctrlKey||e.metaKey)){
switch(e.keyCode){case r.HOME:this._setValueAttr(this.minimum,!1);break;case r.END:
this._setValueAttr(this.maximum,!1);break;case this._descending||this.isLeftToRight()?r.RIGHT_ARROW:r.LEFT_ARROW:
case this._descending===!1?r.DOWN_ARROW:r.UP_ARROW:case this._descending===!1?r.PAGE_DOWN:r.PAGE_UP:
this.increment(e);break;case this._descending||this.isLeftToRight()?r.LEFT_ARROW:r.RIGHT_ARROW:
case this._descending===!1?r.UP_ARROW:r.DOWN_ARROW:case this._descending===!1?r.PAGE_UP:r.PAGE_DOWN:
this.decrement(e);break;default:return}e.stopPropagation(),e.preventDefault()}},_onHandleClick:function(e){
this.disabled||this.readOnly||(d("ie")||p.focus(this.sliderHandle),e.stopPropagation(),
e.preventDefault())},_isReversed:function(){return!this.isLeftToRight()},_onBarClick:function(e){
if(!this.disabled&&!this.readOnly&&this.clickSelect){p.focus(this.sliderHandle),e.stopPropagation(),
e.preventDefault();var t=n.position(this.sliderBarContainer,!0),i=e[this._mousePixelCoord]-t[this._startingPixelCoord];
this._setPixelValue(this._isReversed()?t[this._pixelCount]-i:i,t[this._pixelCount],!0),
this._movable.onMouseDown(e)}},_setPixelValue:function(e,t,i){if(!this.disabled&&!this.readOnly){
var s=this.discreteValues;(1>=s||s==1/0)&&(s=t),s--;var n=t/s,o=Math.round(e/n);this._setValueAttr(Math.max(Math.min((this.maximum-this.minimum)*o/s+this.minimum,this.maximum),this.minimum),i);
}},_setValueAttr:function(e,t){this._set("value",e),this.valueNode.value=e,this.focusNode.setAttribute("aria-valuenow",e),
this.inherited(arguments);var i=(e-this.minimum)/(this.maximum-this.minimum),n=this._descending===!1?this.remainingBar:this.progressBar,o=this._descending===!1?this.progressBar:this.remainingBar;
if(this._inProgressAnim&&"stopped"!=this._inProgressAnim.status&&this._inProgressAnim.stop(!0),
t&&this.slideDuration>0&&n.style[this._progressPixelSize]){var r=this,a={},d=parseFloat(n.style[this._progressPixelSize]),h=this.slideDuration*(i-d/100);
if(0==h)return;0>h&&(h=0-h),a[this._progressPixelSize]={start:d,end:100*i,units:"%"
},this._inProgressAnim=s.animateProperty({node:n,duration:h,onAnimate:function(e){
o.style[r._progressPixelSize]=100-parseFloat(e[r._progressPixelSize])+"%"},onEnd:function(){
delete r._inProgressAnim},properties:a}),this._inProgressAnim.play()}else n.style[this._progressPixelSize]=100*i+"%",
o.style[this._progressPixelSize]=100*(1-i)+"%"},_bumpValue:function(e,t){if(!this.disabled&&!this.readOnly){
var i=o.getComputedStyle(this.sliderBarContainer),s=n.getContentBox(this.sliderBarContainer,i),r=this.discreteValues;
(1>=r||r==1/0)&&(r=s[this._pixelCount]),r--;var a=(this.value-this.minimum)*r/(this.maximum-this.minimum)+e;
0>a&&(a=0),a>r&&(a=r),a=a*(this.maximum-this.minimum)/r+this.minimum,this._setValueAttr(a,t);
}},_onClkBumper:function(e){this.disabled||this.readOnly||!this.clickSelect||this._setValueAttr(e,!0);
},_onClkIncBumper:function(){this._onClkBumper(this._descending===!1?this.minimum:this.maximum);
},_onClkDecBumper:function(){this._onClkBumper(this._descending===!1?this.maximum:this.minimum);
},decrement:function(e){this._bumpValue(e.keyCode==r.PAGE_DOWN?-this.pageIncrement:-1);
},increment:function(e){this._bumpValue(e.keyCode==r.PAGE_UP?this.pageIncrement:1);
},_mouseWheeled:function(e){e.stopPropagation(),e.preventDefault(),this._bumpValue(e.wheelDelta<0?-1:1,!0);
},startup:function(){this._started||(e.forEach(this.getChildren(),function(e){this[e.container]!=this.containerNode&&this[e.container].appendChild(e.domNode);
},this),this.inherited(arguments))},_typematicCallback:function(e,t,i){-1==e?this._setValueAttr(this.value,!0):this[t==(this._descending?this.incrementButton:this.decrementButton)?"decrement":"increment"](i);
},buildRendering:function(){this.inherited(arguments),this.showButtons&&(this.incrementButton.style.display="",
this.decrementButton.style.display="");var e=u('label[for="'+this.id+'"]');e.length&&(e[0].id||(e[0].id=this.id+"_label"),
this.focusNode.setAttribute("aria-labelledby",e[0].id)),this.focusNode.setAttribute("aria-valuemin",this.minimum),
this.focusNode.setAttribute("aria-valuemax",this.maximum)},postCreate:function(){
this.inherited(arguments),this.showButtons&&this.own(g.addMouseListener(this.decrementButton,this,"_typematicCallback",25,500),g.addMouseListener(this.incrementButton,this,"_typematicCallback",25,500)),
this.own(_(this.domNode,m.wheel,a.hitch(this,"_mouseWheeled")));var e=t(b,{widget:this
});this._movable=new h(this.sliderHandle,{mover:e}),this._layoutHackIE7()},destroy:function(){
this._movable.destroy(),this._inProgressAnim&&"stopped"!=this._inProgressAnim.status&&this._inProgressAnim.stop(!0),
this.inherited(arguments)}});return x._Mover=b,x});