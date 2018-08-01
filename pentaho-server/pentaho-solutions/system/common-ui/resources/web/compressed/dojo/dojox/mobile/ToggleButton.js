define(["dojo/_base/declare","dojo/dom-class","dijit/form/_ToggleButtonMixin","./Button"],function(e,t,o,s){
return e("dojox.mobile.ToggleButton",[s,o],{baseClass:"mblToggleButton",_setCheckedAttr:function(){
this.inherited(arguments);var e=(this.baseClass+" "+this["class"]).replace(/(\S+)\s*/g,"$1Checked ").split(" ");
t[this.checked?"add":"remove"](this.focusNode||this.domNode,e)}})});