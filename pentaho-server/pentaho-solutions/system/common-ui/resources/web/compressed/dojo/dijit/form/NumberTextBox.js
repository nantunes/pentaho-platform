define(["dojo/_base/declare","dojo/_base/lang","dojo/number","./RangeBoundTextBox"],function(t,e,i,s){
var n=t("dijit.form.NumberTextBoxMixin",null,{pattern:function(t){return"("+(this.focused&&this.editOptions?this._regExpGenerator(e.delegate(t,this.editOptions))+"|":"")+this._regExpGenerator(t)+")";
},value:NaN,editOptions:{pattern:"#.######"},_formatter:i.format,_regExpGenerator:i.regexp,
postMixInProperties:function(){this.inherited(arguments),this._set("type","text");
},_setConstraintsAttr:function(t){var e="number"==typeof t.places?t.places:0;e&&e++,
"number"!=typeof t.max&&(t.max=9*Math.pow(10,15-e)),"number"!=typeof t.min&&(t.min=-9*Math.pow(10,15-e)),
this.inherited(arguments,[t]),this.focusNode&&this.focusNode.value&&!isNaN(this.value)&&this.set("value",this.value);
},_onFocus:function(){if(!this.disabled&&!this.readOnly){var t=this.get("value");if("number"==typeof t&&!isNaN(t)){
var e=this.format(t,this.constraints);void 0!==e&&(this.textbox.value=e)}this.inherited(arguments);
}},format:function(t,i){var s=String(t);return"number"!=typeof t?s:isNaN(t)?"":"rangeCheck"in this&&this.rangeCheck(t,i)||i.exponent===!1||!/\de[-+]?\d/i.test(s)?(this.editOptions&&this.focused&&(i=e.mixin({},i,this.editOptions)),
this._formatter(t,i)):s},_parser:i.parse,parse:function(t,i){var s=this._parser(t,e.mixin({},i,this.editOptions&&this.focused?this.editOptions:{}));
return this.editOptions&&this.focused&&isNaN(s)&&(s=this._parser(t,i)),s},_getDisplayedValueAttr:function(){
var t=this.inherited(arguments);return isNaN(t)?this.textbox.value:t},filter:function(t){
return null==t||""===t?NaN:this.inherited(arguments)},serialize:function(t,e){return"number"!=typeof t||isNaN(t)?"":this.inherited(arguments);
},_setBlurValue:function(){var t=e.hitch(e.delegate(this,{focused:!0}),"get")("value");
this._setValueAttr(t,!0)},_setValueAttr:function(t,e,i){void 0!==t&&void 0===i&&(i=String(t),
"number"==typeof t?isNaN(t)?i="":("rangeCheck"in this&&this.rangeCheck(t,this.constraints)||this.constraints.exponent===!1||!/\de[-+]?\d/i.test(i))&&(i=void 0):t?t=void 0:(i="",
t=NaN)),this.inherited(arguments,[t,e,i])},_getValueAttr:function(){var t=this.inherited(arguments);
if(isNaN(t)&&""!==this.textbox.value){if(this.constraints.exponent!==!1&&/\de[-+]?\d/i.test(this.textbox.value)&&new RegExp("^"+i._realNumberRegexp(e.delegate(this.constraints))+"$").test(this.textbox.value)){
var s=Number(this.textbox.value);return isNaN(s)?void 0:s}return void 0}return t},
isValid:function(t){if(!this.focused||this._isEmpty(this.textbox.value))return this.inherited(arguments);
var e=this.get("value");return!isNaN(e)&&this.rangeCheck(e,this.constraints)?this.constraints.exponent!==!1&&/\de[-+]?\d/i.test(this.textbox.value)?!0:this.inherited(arguments):!1;
}}),r=t("dijit.form.NumberTextBox",[s,n],{baseClass:"dijitTextBox dijitNumberTextBox"
});return r.Mixin=n,r});