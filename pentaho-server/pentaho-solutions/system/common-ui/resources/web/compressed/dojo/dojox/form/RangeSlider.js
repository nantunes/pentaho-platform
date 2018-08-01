define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/fx","dojo/_base/event","dojo/_base/sniff","dojo/dom-style","dojo/dom-geometry","dojo/keys","dijit","dojo/dnd/Mover","dojo/dnd/Moveable","dojo/text!./resources/HorizontalRangeSlider.html","dojo/text!./resources/VerticalRangeSlider.html","dijit/form/HorizontalSlider","dijit/form/VerticalSlider","dijit/form/_FormValueWidget","dijit/focus","dojo/fx","dojox/fx"],function(e,i,t,s,r,a,o,l,n,u,d,h,_,m,p,x,v,f,g){
var c=function(e,i){return i-e},V=function(e,i){return e-i},R=e("dojox.form._RangeSliderMixin",null,{
value:[0,100],postMixInProperties:function(){this.inherited(arguments),this.value=t.map(this.value,function(e){
return parseInt(e,10)})},postCreate:function(){this.inherited(arguments),this.value.sort(this._isReversed()?c:V);
var i=this,t=e(y,{constructor:function(){this.widget=i}});this._movableMax=new h(this.sliderHandleMax,{
mover:t}),this.sliderHandle.setAttribute("aria-valuemin",this.minimum),this.sliderHandle.setAttribute("aria-valuemax",this.maximum),
this.sliderHandleMax.setAttribute("aria-valuemin",this.minimum),this.sliderHandleMax.setAttribute("aria-valuemax",this.maximum);
var s=e(C,{constructor:function(){this.widget=i}});this._movableBar=new h(this.progressBar,{
mover:s}),this.focusNode.removeAttribute("aria-valuemin"),this.focusNode.removeAttribute("aria-valuemax"),
this.focusNode.removeAttribute("aria-valuenow")},destroy:function(){this.inherited(arguments),
this._movableMax.destroy(),this._movableBar.destroy()},_onKeyPress:function(e){if(!(this.disabled||this.readOnly||e.altKey||e.ctrlKey)){
var t=e.target===this.sliderHandleMax,s=e.target===this.progressBar,a=i.delegate(n,this.isLeftToRight()?{
PREV_ARROW:n.LEFT_ARROW,NEXT_ARROW:n.RIGHT_ARROW}:{PREV_ARROW:n.RIGHT_ARROW,NEXT_ARROW:n.LEFT_ARROW
}),o=0,l=!1;switch(e.keyCode){case a.HOME:return this._setValueAttr(this.minimum,!0,t),
void r.stop(e);case a.END:return this._setValueAttr(this.maximum,!0,t),void r.stop(e);
case a.PREV_ARROW:case a.DOWN_ARROW:l=!0;case a.NEXT_ARROW:case a.UP_ARROW:o=1;break;
case a.PAGE_DOWN:l=!0;case a.PAGE_UP:o=this.pageIncrement;break;default:return void this.inherited(arguments);
}l&&(o=-o),o&&(s?this._bumpValue([{change:o,useMaxValue:!1},{change:o,useMaxValue:!0
}]):this._bumpValue(o,t),r.stop(e))}},_onHandleClickMax:function(e){this.disabled||this.readOnly||(a("ie")||f.focus(this.sliderHandleMax),
r.stop(e))},_onClkIncBumper:function(){this._setValueAttr(this._descending===!1?this.minimum:this.maximum,!0,!0);
},_bumpValue:function(e,t){var s=i.isArray(e)?[this._getBumpValue(e[0].change,e[0].useMaxValue),this._getBumpValue(e[1].change,e[1].useMaxValue)]:this._getBumpValue(e,t);
this._setValueAttr(s,!0,t)},_getBumpValue:function(e,i){var t=i?1:0;this._isReversed()&&(t=1-t);
var s=o.getComputedStyle(this.sliderBarContainer),r=l.getContentBox(this.sliderBarContainer,s),a=this.discreteValues,n=this.value[t];
(1>=a||a==1/0)&&(a=r[this._pixelCount]),a--;var u=(n-this.minimum)*a/(this.maximum-this.minimum)+e;
return 0>u&&(u=0),u>a&&(u=a),u*(this.maximum-this.minimum)/a+this.minimum},_onBarClick:function(e){
this.disabled||this.readOnly||(a("ie")||f.focus(this.progressBar),r.stop(e))},_onRemainingBarClick:function(e){
if(!this.disabled&&!this.readOnly){a("ie")||f.focus(this.progressBar);var i=l.position(this.sliderBarContainer,!0),t=l.position(this.progressBar,!0),s=e[this._mousePixelCoord]-i[this._startingPixelCoord],o=t[this._startingPixelCoord],n=o+t[this._pixelCount],u=this._isReversed()?o>=s:s>=n,d=this._isReversed()?i[this._pixelCount]-s:s;
this._setPixelValue(d,i[this._pixelCount],!0,u),r.stop(e)}},_setPixelValue:function(e,i,t,s){
if(!this.disabled&&!this.readOnly){var r=this._getValueByPixelValue(e,i);this._setValueAttr(r,t,s);
}},_getValueByPixelValue:function(e,i){e=0>e?0:e>i?i:e;var t=this.discreteValues;(1>=t||t==1/0)&&(t=i),
t--;var s=i/t,r=Math.round(e/s);return(this.maximum-this.minimum)*r/t+this.minimum;
},_setValueAttr:function(e,t,s){var r=this.value;i.isArray(e)?r=e:s?this._isReversed()?r[0]=e:r[1]=e:this._isReversed()?r[1]=e:r[0]=e,
this._lastValueReported="",this.valueNode.value=this.value=e=r,this.value.sort(this._isReversed()?c:V),
this.sliderHandle.setAttribute("aria-valuenow",r[0]),this.sliderHandleMax.setAttribute("aria-valuenow",r[1]),
v.prototype._setValueAttr.apply(this,arguments),this._printSliderBar(t,s)},_printSliderBar:function(e,i){
var t=(this.value[0]-this.minimum)/(this.maximum-this.minimum),r=(this.value[1]-this.minimum)/(this.maximum-this.minimum),a=t;
t>r&&(t=r,r=a);var o=this._isReversed()?100*(1-t):100*t,l=this._isReversed()?100*(1-r):100*r,n=this._isReversed()?100*(1-r):100*t;
if(e&&this.slideDuration>0&&this.progressBar.style[this._progressPixelSize]){var u=(parseFloat(this.progressBar.style[this._handleOffsetCoord]),
this.slideDuration/10);if(0===u)return;0>u&&(u=0-u);var d={},h={},_={};d[this._handleOffsetCoord]={
start:this.sliderHandle.style[this._handleOffsetCoord],end:o,units:"%"},h[this._handleOffsetCoord]={
start:this.sliderHandleMax.style[this._handleOffsetCoord],end:l,units:"%"},_[this._handleOffsetCoord]={
start:this.progressBar.style[this._handleOffsetCoord],end:n,units:"%"},_[this._progressPixelSize]={
start:this.progressBar.style[this._progressPixelSize],end:100*(r-t),units:"%"};var m=s.animateProperty({
node:this.sliderHandle,duration:u,properties:d}),p=s.animateProperty({node:this.sliderHandleMax,
duration:u,properties:h}),x=s.animateProperty({node:this.progressBar,duration:u,properties:_
}),v=g.combine([m,p,x]);v.play()}else this.sliderHandle.style[this._handleOffsetCoord]=o+"%",
this.sliderHandleMax.style[this._handleOffsetCoord]=l+"%",this.progressBar.style[this._handleOffsetCoord]=n+"%",
this.progressBar.style[this._progressPixelSize]=100*(r-t)+"%"}}),y=e("dijit.form._SliderMoverMax",u.form._SliderMover,{
onMouseMove:function(e){var t=this.widget,s=t._abspos;s||(s=t._abspos=l.position(t.sliderBarContainer,!0),
t._setPixelValue_=i.hitch(t,"_setPixelValue"),t._isReversed_=t._isReversed());var r=e[t._mousePixelCoord]-s[t._startingPixelCoord];
t._setPixelValue_(t._isReversed_?s[t._pixelCount]-r:r,s[t._pixelCount],!1,!0)},destroy:function(e){
d.prototype.destroy.apply(this,arguments);var i=this.widget;i._abspos=null,i._setValueAttr(i.value,!0);
}}),C=e("dijit.form._SliderBarMover",d,{onMouseMove:function(e){var t=this.widget;
if(!t.disabled&&!t.readOnly){var s=t._abspos,r=t._bar,a=t._mouseOffset;s||(s=t._abspos=l.position(t.sliderBarContainer,!0),
t._setPixelValue_=i.hitch(t,"_setPixelValue"),t._getValueByPixelValue_=i.hitch(t,"_getValueByPixelValue"),
t._isReversed_=t._isReversed()),r||(r=t._bar=l.position(t.progressBar,!0)),a||(a=t._mouseOffset=e[t._mousePixelCoord]-r[t._startingPixelCoord]);
var o=e[t._mousePixelCoord]-s[t._startingPixelCoord]-a,n=o+r[t._pixelCount];pixelValues=[o,n],
pixelValues.sort(V),pixelValues[0]<=0&&(pixelValues[0]=0,pixelValues[1]=r[t._pixelCount]),
pixelValues[1]>=s[t._pixelCount]&&(pixelValues[1]=s[t._pixelCount],pixelValues[0]=s[t._pixelCount]-r[t._pixelCount]);
var u=[t._getValueByPixelValue(t._isReversed_?s[t._pixelCount]-pixelValues[0]:pixelValues[0],s[t._pixelCount]),t._getValueByPixelValue(t._isReversed_?s[t._pixelCount]-pixelValues[1]:pixelValues[1],s[t._pixelCount])];
t._setValueAttr(u,!1,!1)}},destroy:function(){d.prototype.destroy.apply(this,arguments);
var e=this.widget;e._abspos=null,e._bar=null,e._mouseOffset=null,e._setValueAttr(e.value,!0);
}});return e("dojox.form.HorizontalRangeSlider",[p,R],{templateString:_}),e("dojox.form.VerticalRangeSlider",[x,R],{
templateString:m}),R});