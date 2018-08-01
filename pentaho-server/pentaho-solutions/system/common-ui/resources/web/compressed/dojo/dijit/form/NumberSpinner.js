define(["dojo/_base/declare","dojo/keys","./_Spinner","./NumberTextBox"],function(e,i,t,n){
return e("dijit.form.NumberSpinner",[t,n.Mixin],{baseClass:"dijitTextBox dijitSpinner dijitNumberTextBox",
adjust:function(e,i){var t=this.constraints,n=isNaN(e),a=!isNaN(t.max),s=!isNaN(t.min);
n&&0!=i&&(e=i>0?s?t.min:a?t.max:0:a?this.constraints.max:s?t.min:0);var o=e+i;return n||isNaN(o)?e:(a&&o>t.max&&(o=t.max),
s&&o<t.min&&(o=t.min),o)},_onKeyDown:function(e){if(!(this.disabled||this.readOnly||e.keyCode!=i.HOME&&e.keyCode!=i.END||e.ctrlKey||e.altKey||e.metaKey||"undefined"==typeof this.get("value"))){
var t=this.constraints[e.keyCode==i.HOME?"min":"max"];"number"==typeof t&&this._setValueAttr(t,!1),
e.stopPropagation(),e.preventDefault()}}})});