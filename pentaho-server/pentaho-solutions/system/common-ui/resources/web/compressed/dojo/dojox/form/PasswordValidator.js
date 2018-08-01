define(["dojo/_base/array","dojo/_base/lang","dojo/dom-attr","dojo/i18n","dojo/query","dojo/keys","dijit/form/_FormValueWidget","dijit/form/ValidationTextBox","dojo/text!./resources/PasswordValidator.html","dojo/i18n!./nls/PasswordValidator","dojo/_base/declare"],function(t,e,i,s,n,r,a,o,d,u,h){
var l=h("dojox.form._ChildTextBox",o,{containerWidget:null,type:"password",reset:function(){
o.prototype._setValueAttr.call(this,"",!0),this._hasBeenBlurred=!1},postCreate:function(){
this.inherited(arguments),this.name||i.remove(this.focusNode,"name"),this.connect(this.focusNode,"onkeypress","_onChildKeyPress");
},_onChildKeyPress:function(t){t&&t.keyCode==r.ENTER&&this._setBlurValue()}}),c=h("dojox.form._OldPWBox",l,{
_isPWValid:!1,_setValueAttr:function(t,e){""===t&&(t=c.superclass.attr.call(this,"value")),
null!==e&&(this._isPWValid=this.containerWidget.pwCheck(t)),this.inherited(arguments),
this.containerWidget._childValueAttr(this.containerWidget._inputWidgets[1].get("value"));
},isValid:function(t){return this.inherited("isValid",arguments)&&this._isPWValid;
},_update:function(t){this._hasBeenBlurred&&this.validate(!0),this._onMouse(t)},_getValueAttr:function(){
return this.containerWidget._started&&this.containerWidget.isValid()?this.inherited(arguments):"";
},_setBlurValue:function(){var t=o.prototype._getValueAttr.call(this);this._setValueAttr(t,this.isValid?this.isValid():!0);
}}),f=h("dojox.form._NewPWBox",l,{required:!0,onChange:function(){this.containerWidget._inputWidgets[2].validate(!1),
this.inherited(arguments)}}),_=h("dojox.form._VerifyPWBox",l,{isValid:function(t){
return this.inherited("isValid",arguments)&&this.get("value")==this.containerWidget._inputWidgets[1].get("value");
}});return h("dojox.form.PasswordValidator",a,{required:!0,_inputWidgets:null,oldName:"",
templateString:d,_hasBeenBlurred:!1,isValid:function(e){return t.every(this._inputWidgets,function(t){
return t&&t._setStateClass&&t._setStateClass(),!t||t.isValid()})},validate:function(e){
return t.every(t.map(this._inputWidgets,function(t){return t&&t.validate?(t._hasBeenBlurred=t._hasBeenBlurred||this._hasBeenBlurred,
t.validate()):!0},this),function(t){return t})},reset:function(){this._hasBeenBlurred=!1,
t.forEach(this._inputWidgets,function(t){t&&t.reset&&t.reset()},this)},_createSubWidgets:function(){
var e=this._inputWidgets,i=s.getLocalization("dojox.form","PasswordValidator",this.lang);
t.forEach(e,function(t,s){if(t){var n,r={containerWidget:this};0===s?(r.name=this.oldName,
r.invalidMessage=i.badPasswordMessage,n=c):1===s?(r.required=this.required,n=f):2===s&&(r.invalidMessage=i.nomatchMessage,
n=_),e[s]=new n(r,t)}},this)},pwCheck:function(t){return!1},postCreate:function(){
this.inherited(arguments);var e=this._inputWidgets=[];if(t.forEach(["old","new","verify"],function(t){
e.push(n("input[pwType="+t+"]",this.containerNode)[0])},this),!e[1]||!e[2])throw new Error('Need at least pwType="new" and pwType="verify"');
if(this.oldName&&!e[0])throw new Error('Need to specify pwType="old" if using oldName');
this.containerNode=this.domNode,this._createSubWidgets(),this.connect(this._inputWidgets[1],"_setValueAttr","_childValueAttr"),
this.connect(this._inputWidgets[2],"_setValueAttr","_childValueAttr")},_childValueAttr:function(t){
this.set("value",this.isValid()?t:"")},_setDisabledAttr:function(e){this.inherited(arguments),
t.forEach(this._inputWidgets,function(t){t&&t.set&&t.set("disabled",e)})},_setRequiredAttribute:function(e){
this.required=e,i.set(this.focusNode,"required",e),this.focusNode.setAttribute("aria-required",e),
this._refreshState(),t.forEach(this._inputWidgets,function(t){t&&t.set&&t.set("required",e);
})},_setValueAttr:function(t){this.inherited(arguments),i.set(this.focusNode,"value",t);
},_getValueAttr:function(){return this.value||""},focus:function(){var e=!1;t.forEach(this._inputWidgets,function(t){
!t||t.isValid()||e||(t.focus(),e=!0)}),e||this._inputWidgets[1].focus()}})});