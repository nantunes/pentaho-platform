define(["require","dojo/_base/declare","dojo/dom-attr","dojo/has","dojo/query","dojo/ready","./ToggleButton","./_CheckBoxMixin","dojo/text!./templates/CheckBox.html","dojo/NodeList-dom","../a11yclick"],function(t,e,i,o,s,n,d,r,a){
return o("dijit-legacy-requires")&&n(0,function(){var e=["dijit/form/RadioButton"];
t(e)}),e("dijit.form.CheckBox",[d,r],{templateString:a,baseClass:"dijitCheckBox",
_setValueAttr:function(t,e){"string"==typeof t&&(this.inherited(arguments),t=!0),
this._created&&this.set("checked",t,e)},_getValueAttr:function(){return this.checked&&this._get("value");
},_setIconClassAttr:null,_setNameAttr:"focusNode",postMixInProperties:function(){
this.inherited(arguments),this.checkedAttrSetting=""},_fillContent:function(){},_onFocus:function(){
this.id&&s("label[for='"+this.id+"']").addClass("dijitFocusedLabel"),this.inherited(arguments);
},_onBlur:function(){this.id&&s("label[for='"+this.id+"']").removeClass("dijitFocusedLabel"),
this.inherited(arguments)}})});