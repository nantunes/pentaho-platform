dojo.provide("dojox.mobile.app._FormWidget"),dojo.experimental("dojox.mobile.app._FormWidget"),
dojo.require("dojo.window"),dojo.require("dijit._WidgetBase"),dojo.require("dijit.focus"),
dojo.declare("dojox.mobile.app._FormWidget",dijit._WidgetBase,{name:"",alt:"",value:"",
type:"text",disabled:!1,intermediateChanges:!1,scrollOnFocus:!1,attributeMap:dojo.delegate(dijit._WidgetBase.prototype.attributeMap,{
value:"focusNode",id:"focusNode",alt:"focusNode",title:"focusNode"}),postMixInProperties:function(){
this.nameAttrSetting=this.name?'name="'+this.name.replace(/'/g,"&quot;")+'"':"",this.inherited(arguments);
},postCreate:function(){this.inherited(arguments),this.connect(this.domNode,"onmousedown","_onMouseDown");
},_setDisabledAttr:function(e){this.disabled=e,dojo.attr(this.focusNode,"disabled",e),
this.valueNode&&dojo.attr(this.valueNode,"disabled",e)},_onFocus:function(e){this.scrollOnFocus&&dojo.window.scrollIntoView(this.domNode),
this.inherited(arguments)},isFocusable:function(){return!this.disabled&&!this.readOnly&&this.focusNode&&"none"!=dojo.style(this.domNode,"display");
},focus:function(){this.focusNode.focus()},compare:function(e,t){return"number"==typeof e&&"number"==typeof t?isNaN(e)&&isNaN(t)?0:e-t:e>t?1:t>e?-1:0;
},onChange:function(e){},_onChangeActive:!1,_handleOnChange:function(e,t){this._lastValue=e,
void 0!=this._lastValueReported||null!==t&&this._onChangeActive||(this._resetValue=this._lastValueReported=e),
!this.intermediateChanges&&!t&&void 0!==t||typeof e==typeof this._lastValueReported&&0==this.compare(e,this._lastValueReported)||(this._lastValueReported=e,
this._onChangeActive&&(this._onChangeHandle&&clearTimeout(this._onChangeHandle),this._onChangeHandle=setTimeout(dojo.hitch(this,function(){
this._onChangeHandle=null,this.onChange(e)}),0)))},create:function(){this.inherited(arguments),
this._onChangeActive=!0},destroy:function(){this._onChangeHandle&&(clearTimeout(this._onChangeHandle),
this.onChange(this._lastValueReported)),this.inherited(arguments)},_onMouseDown:function(e){
if(this.isFocusable())var t=this.connect(dojo.body(),"onmouseup",function(){this.isFocusable()&&this.focus(),
this.disconnect(t)})},selectInputText:function(e,t,o){var i=dojo.global;dojo.doc;e=dojo.byId(e),
isNaN(t)&&(t=0),isNaN(o)&&(o=e.value?e.value.length:0),dijit.focus(e),i.getSelection&&e.setSelectionRange&&e.setSelectionRange(t,o);
}}),dojo.declare("dojox.mobile.app._FormValueWidget",dojox.mobile.app._FormWidget,{
readOnly:!1,attributeMap:dojo.delegate(dojox.mobile.app._FormWidget.prototype.attributeMap,{
value:"",readOnly:"focusNode"}),_setReadOnlyAttr:function(e){this.readOnly=e,dojo.attr(this.focusNode,"readOnly",e);
},postCreate:function(){this.inherited(arguments),void 0===this._resetValue&&(this._resetValue=this.value);
},_setValueAttr:function(e,t){this.value=e,this._handleOnChange(e,t)},_getValueAttr:function(){
return this._lastValue},undo:function(){this._setValueAttr(this._lastValueReported,!1);
},reset:function(){this._hasBeenBlurred=!1,this._setValueAttr(this._resetValue,!0);
}});