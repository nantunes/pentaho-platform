define(["dojo/_base/declare","../Calendar","./_DateTimeTextBox"],function(e,t,a){
return e("dijit.form.DateTextBox",a,{baseClass:"dijitTextBox dijitComboBox dijitDateTextBox",
popupClass:t,_selector:"date",maxHeight:1/0,value:new Date("")})});