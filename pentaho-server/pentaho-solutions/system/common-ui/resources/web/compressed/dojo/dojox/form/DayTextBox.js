define(["dojo/_base/kernel","dojo/_base/lang","dojox/widget/DailyCalendar","dijit/form/TextBox","./DateTextBox","dojo/_base/declare"],function(t,e,o,n,r,a){
return t.experimental("dojox/form/DayTextBox"),a("dojox.form.DayTextBox",r,{popupClass:o,
parse:function(t){return t},format:function(t){return t.getDate?t.getDate():t},validator:function(t){
var e=Number(t),o=/(^-?\d\d*$)/.test(String(t));return""==t||null==t||o&&e>=1&&31>=e;
},_setValueAttr:function(t,e,o){t&&t.getDate&&(t=t.getDate()),n.prototype._setValueAttr.call(this,t,e,o);
},openDropDown:function(){this.inherited(arguments),this.dropDown.onValueSelected=e.hitch(this,function(t){
this.focus(),setTimeout(e.hitch(this,"closeDropDown"),1),n.prototype._setValueAttr.call(this,String(t.getDate()),!0,String(t.getDate()));
})}})});