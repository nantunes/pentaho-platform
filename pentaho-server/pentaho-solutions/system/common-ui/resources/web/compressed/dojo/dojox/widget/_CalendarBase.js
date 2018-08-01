define(["dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_Container","dijit/_WidgetsInTemplateMixin","dijit/typematic","dojo/_base/declare","dojo/date","dojo/date/stamp","dojo/date/locale","dojo/dom-style","dojo/dom-class","dojo/_base/fx","dojo/on","dojo/_base/array","dojo/_base/lang","dojo/text!./Calendar/Calendar.html"],function(t,e,i,n,a,s,o,r,h,d,l,u,c,p,_,f){
return s("dojox.widget._CalendarBase",[t,e,i,n],{templateString:f,_views:null,useFx:!0,
value:new Date,constraints:null,footerFormat:"medium",constructor:function(){this._views=[],
this.value=new Date},_setConstraintsAttr:function(t){var e=this.constraints=t;e&&("string"==typeof e.min&&(e.min=r.fromISOString(e.min)),
"string"==typeof e.max&&(e.max=r.fromISOString(e.max)))},postMixInProperties:function(){
this.inherited(arguments),this.value=this.parseInitialValue(this.value)},parseInitialValue:function(t){
return t&&-1!==t?t.getFullYear?t:(isNaN(t)||("string"==typeof this.value&&(t=parseInt(t)),
t=this._makeDate(t)),t):new Date},_makeDate:function(t){return t},postCreate:function(){
this.displayMonth=new Date(this.get("value")),this._isInvalidDate(this.displayMonth)&&(this.displayMonth=new Date);
var t={parent:this,_getValueAttr:_.hitch(this,function(){return new Date(this._internalValue||this.value);
}),_getDisplayMonthAttr:_.hitch(this,function(){return new Date(this.displayMonth);
}),_getConstraintsAttr:_.hitch(this,function(){return this.constraints}),getLang:_.hitch(this,function(){
return this.lang}),isDisabledDate:_.hitch(this,this.isDisabledDate),getClassForDate:_.hitch(this,this.getClassForDate),
addFx:this.useFx?_.hitch(this,this.addFx):function(){}};p.forEach(this._views,function(e){
var i=new e(t).placeAt(this),n=i.getHeader();n&&(this.header.appendChild(n),d.set(n,"display","none")),
d.set(i.domNode,"visibility","hidden"),i.on("valueSelected",_.hitch(this,"_onDateSelected")),
i.set("value",this.get("value"))},this),this._views.length<2&&d.set(this.header,"cursor","auto"),
this.inherited(arguments),this._children=this.getChildren(),this._currentChild=0;var e=new Date;
this.footer.innerHTML="Today: "+h.format(e,{formatLength:this.footerFormat,selector:"date",
locale:this.lang}),c(this.footer,"click",_.hitch(this,"goToToday"));var i=this._children[0];
d.set(i.domNode,"top","0px"),d.set(i.domNode,"visibility","visible");var n=i.getHeader();
n&&d.set(i.getHeader(),"display",""),l.toggle(this.container,"no-header",!i.useHeader),
i.onDisplay();var s=this,o=function(t,e,i){a.addMouseListener(s[t],s,function(t){
t>=0&&s._adjustDisplay(e,i)},.8,500)};o("incrementMonth","month",1),o("decrementMonth","month",-1),
this._updateTitleStyle()},addFx:function(t,e){},_isInvalidDate:function(t){return!t||isNaN(t)||"object"!=typeof t||t.toString()==this._invalidDate;
},_setValueAttr:function(t){return t||(t=new Date),t.getFullYear||(t=r.fromISOString(t+"")),
this._isInvalidDate(t)?!1:!this.value||o.compare(t,this.value)?(t=new Date(t),this.displayMonth=new Date(t),
this._internalValue=t,this.isDisabledDate(t,this.lang)||0!=this._currentChild||(this.value=t,
this.onChange(t)),this._children&&this._children.length>0&&this._children[this._currentChild].set("value",this.value),
!0):!1},isDisabledDate:function(t,e){var i=this.constraints,n=o.compare;return i&&(i.min&&n(i.min,t,"date")>0||i.max&&n(i.max,t,"date")<0);
},onValueSelected:function(t){},_onDateSelected:function(t,e,i){this.displayMonth=t,
this.set("value",t),this._transitionVert(-1)||(e||0===e||(e=this.get("value")),this.onValueSelected(e));
},onChange:function(t){},onHeaderClick:function(t){this._transitionVert(1)},goToToday:function(){
this.set("value",new Date),this.onValueSelected(this.get("value"))},_transitionVert:function(t){
var e=this._children[this._currentChild],i=this._children[this._currentChild+t];if(!i)return!1;
d.set(i.domNode,"visibility","visible");var n=d.get(this.containerNode,"height");i.set("value",this.displayMonth),
e.header&&d.set(e.header,"display","none"),i.header&&d.set(i.header,"display",""),
d.set(i.domNode,"top",-1*n+"px"),d.set(i.domNode,"visibility","visible"),this._currentChild+=t;
var a=n*t,s=0;d.set(i.domNode,"top",-1*a+"px");var o=u.animateProperty({node:e.domNode,
properties:{top:a},onEnd:function(){d.set(e.domNode,"visibility","hidden")}}),r=u.animateProperty({
node:i.domNode,properties:{top:s},onEnd:function(){i.onDisplay()}});return l.toggle(this.container,"no-header",!i.useHeader),
o.play(),r.play(),e.onBeforeUnDisplay(),i.onBeforeDisplay(),this._updateTitleStyle(),
!0},_updateTitleStyle:function(){l.toggle(this.header,"navToPanel",this._currentChild<this._children.length-1);
},_slideTable:function(t,e,i){var n=t.domNode,a=n.cloneNode(!0),s=d.get(n,"width");
n.parentNode.appendChild(a),d.set(n,"left",s*e+"px"),i();var o=u.animateProperty({
node:a,properties:{left:s*e*-1},duration:500,onEnd:function(){a.parentNode.removeChild(a);
}}),r=u.animateProperty({node:n,properties:{left:0},duration:500});o.play(),r.play();
},_addView:function(t){this._views.push(t)},getClassForDate:function(t,e){},_adjustDisplay:function(t,e,i){
var n=this._children[this._currentChild],a=this.displayMonth=n.adjustDate(this.displayMonth,e);
this._slideTable(n,e,function(){n.set("value",a)})}})});