define(["dojo/_base/kernel","dojo/_base/lang","dojox/widget/YearlyCalendar","dijit/form/TextBox","./DateTextBox","dojo/_base/declare"],function(t,e,o,r,n,i){
return t.experimental("dojox/form/DateTextBox"),i("dojox.form.YearTextBox",n,{popupClass:o,
format:function(t){return"string"==typeof t?t:t.getFullYear?t.getFullYear():t},validator:function(t){
return""==t||null==t||/(^-?\d\d*$)/.test(String(t))},_setValueAttr:function(t,e,o){
t&&t.getFullYear&&(t=t.getFullYear()),r.prototype._setValueAttr.call(this,t,e,o)},
openDropDown:function(){this.inherited(arguments),this.dropDown.onValueSelected=e.hitch(this,function(t){
this.focus(),setTimeout(e.hitch(this,"closeDropDown"),1),r.prototype._setValueAttr.call(this,t,!0,t);
})},parse:function(t,e){return t||(this._isEmpty(t)?null:void 0)},filter:function(t){
return t&&t.getFullYear?t.getFullYear().toString():this.inherited(arguments)}})});