define(["dojo/_base/kernel","dojo/dom-style","dojox/widget/Calendar","dijit/form/_DateTimeTextBox","dojo/_base/declare"],function(o,e,t,d,i){
return o.experimental("dojox/form/DateTextBox"),i("dojox.form.DateTextBox",d,{baseClass:"dijitTextBox dijitComboBox dojoxDateTextBox",
popupClass:t,_selector:"date",openDropDown:function(){this.inherited(arguments),e.set(this.dropDown.domNode.parentNode,"position","absolute");
}})});