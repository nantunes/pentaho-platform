define(["dojo/_base/array","dojo/date","dojo/date/locale","dojo/date/stamp","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dojo/_base/kernel","dojo/keys","dojo/_base/lang","dojo/sniff","dojo/query","dojo/mouse","dojo/on","./_WidgetBase","./form/_ListMouseMixin"],function(e,t,i,s,n,o,a,r,h,l,c,d,g,u,_,m){
var f=n("dijit._TimePicker",[_,m],{baseClass:"dijitTimePicker",clickableIncrement:"T00:15:00",
visibleIncrement:"T01:00:00",value:new Date,_visibleIncrement:2,_clickableIncrement:1,
_totalIncrements:10,constraints:{},serialize:s.toISOString,buildRendering:function(){
this.inherited(arguments),this.containerNode=this.domNode,this.timeMenu=this.domNode;
},setValue:function(e){r.deprecated("dijit._TimePicker:setValue() is deprecated.  Use set('value', ...) instead.","","2.0"),
this.set("value",e)},_setValueAttr:function(e){this._set("value",e),this._showText();
},_setFilterStringAttr:function(e){this._set("filterString",e),this._showText()},
isDisabledDate:function(){return!1},_getFilteredNodes:function(e,t,i,s){for(var n=[],o=0;o<this._maxIncrement;o++){
var a=this._createOption(o);a&&n.push(a)}return n},_showText:function(){var t=s.fromISOString;
this.domNode.innerHTML="",this._clickableIncrementDate=t(this.clickableIncrement),
this._visibleIncrementDate=t(this.visibleIncrement);var i=function(e){return 60*e.getHours()*60+60*e.getMinutes()+e.getSeconds();
},n=i(this._clickableIncrementDate),o=i(this._visibleIncrementDate);(this.value||this.currentFocus).getTime();
this._refDate=t("T00:00:00"),this._refDate.setFullYear(1970,0,1),this._clickableIncrement=1,
this._visibleIncrement=o/n,this._maxIncrement=86400/n;var a=this._getFilteredNodes();
e.forEach(a,function(e){this.domNode.appendChild(e)},this),!a.length&&this.filterString&&(this.filterString="",
this._showText())},constructor:function(){this.constraints={}},postMixInProperties:function(){
this.inherited(arguments),this._setConstraintsAttr(this.constraints)},_setConstraintsAttr:function(e){
for(var t in{clickableIncrement:1,visibleIncrement:1})t in e&&(this[t]=e[t]);e.locale||(e.locale=this.lang);
},_createOption:function(e){var s=new Date(this._refDate),n=this._clickableIncrementDate;
s.setHours(s.getHours()+n.getHours()*e,s.getMinutes()+n.getMinutes()*e,s.getSeconds()+n.getSeconds()*e),
"time"==this.constraints.selector&&s.setFullYear(1970,0,1);var r=i.format(s,this.constraints);
if(this.filterString&&0!==r.toLowerCase().indexOf(this.filterString))return null;var h=this.ownerDocument.createElement("div");
return h.className=this.baseClass+"Item",h.date=s,h.idx=e,a.create("div",{"class":this.baseClass+"ItemInner",
innerHTML:r},h),e%this._visibleIncrement<1&&e%this._visibleIncrement>-1?o.add(h,this.baseClass+"Marker"):e%this._clickableIncrement||o.add(h,this.baseClass+"Tick"),
this.isDisabledDate(s)&&o.add(h,this.baseClass+"ItemDisabled"),this.value&&!t.compare(this.value,s,this.constraints.selector)&&(h.selected=!0,
o.add(h,this.baseClass+"ItemSelected"),this._selectedDiv=h,o.contains(h,this.baseClass+"Marker")?o.add(h,this.baseClass+"MarkerSelected"):o.add(h,this.baseClass+"TickSelected"),
this._highlightOption(h,!0)),h},onOpen:function(){this.inherited(arguments),this.set("selected",this._selectedDiv);
},_onOptionSelected:function(e){var t=e.target.date||e.target.parentNode.date;t&&!this.isDisabledDate(t)&&(this._highlighted_option=null,
this.set("value",t),this.onChange(t))},onChange:function(){},_highlightOption:function(e,t){
if(e){if(t)this._highlighted_option&&this._highlightOption(this._highlighted_option,!1),
this._highlighted_option=e;else{if(this._highlighted_option!==e)return;this._highlighted_option=null;
}o.toggle(e,this.baseClass+"ItemHover",t),o.contains(e,this.baseClass+"Marker")?o.toggle(e,this.baseClass+"MarkerHover",t):o.toggle(e,this.baseClass+"TickHover",t);
}},handleKey:function(e){return e.keyCode==h.DOWN_ARROW?(this.selectNextNode(),e.stopPropagation(),
e.preventDefault(),!1):e.keyCode==h.UP_ARROW?(this.selectPreviousNode(),e.stopPropagation(),
e.preventDefault(),!1):e.keyCode==h.ENTER||e.keyCode===h.TAB?this._keyboardSelected||e.keyCode!==h.TAB?(this._highlighted_option&&this._onOptionSelected({
target:this._highlighted_option}),e.keyCode===h.TAB):!0:void 0},onHover:function(e){
this._highlightOption(e,!0)},onUnhover:function(e){this._highlightOption(e,!1)},onSelect:function(e){
this._highlightOption(e,!0)},onDeselect:function(e){this._highlightOption(e,!1)},
onClick:function(e){this._onOptionSelected({target:e})}});return f});