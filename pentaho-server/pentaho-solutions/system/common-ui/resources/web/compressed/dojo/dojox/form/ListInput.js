define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/_base/fx","dojo/_base/window","dojo/_base/connect","dojo/dom-class","dojo/dom-style","dojo/dom-construct","dojo/dom-geometry","dojo/keys","dijit/_Widget","dijit/_TemplatedMixin","dijit/form/_FormValueWidget","dijit/form/ValidationTextBox","dijit/InlineEditBox","dojo/i18n!dijit/nls/common","dojo/_base/declare"],function(t,e,i,s,n,o,d,h,a,r,l,u,_,c,m,p,f,I,g){
t.experimental("dojox.form.ListInput");var x=g("dojox.form.ListInput",[m],{constructor:function(){
this._items=[],e.isArray(this.delimiter)||(this.delimiter=[this.delimiter]);var t="("+this.delimiter.join("|")+")?";
this.regExp="^"+this.regExp+t+"$"},inputClass:"dojox.form._ListInputInputBox",inputHandler:"onChange",
inputProperties:{minWidth:50},submitOnlyValidValue:!0,useOnBlur:!0,readOnlyInput:!1,
maxItems:null,showCloseButtonWhenValid:!0,showCloseButtonWhenInvalid:!0,regExp:".*",
delimiter:",",constraints:{},baseClass:"dojoxListInput",type:"select",value:"",templateString:'<div dojoAttachPoint="focusNode" class="dijit dijitReset dijitLeft dojoxListInput"><select dojoAttachpoint="_selectNode" multiple="multiple" class="dijitHidden" ${!nameAttrSetting}></select><ul dojoAttachPoint="_listInput"><li dojoAttachEvent="onclick: _onClick" class="dijitInputField dojoxListInputNode dijitHidden" dojoAttachPoint="_inputNode"></li></ul></div>',
_setNameAttr:"_selectNode",useAnim:!0,duration:500,easingIn:null,easingOut:null,readOnlyItem:!1,
useArrowForEdit:!0,_items:null,_lastAddedItem:null,_currentItem:null,_input:null,
_count:0,postCreate:function(){this.inherited(arguments),this._createInputBox()},
_setReadOnlyInputAttr:function(t){return this._started?(this.readOnlyInput=t,void this._createInputBox()):this._createInputBox();
},_setReadOnlyItemAttr:function(t){if(this._started)for(var e in this._items)this._items[e].set("readOnlyItem",t);
},_createInputBox:function(){if(h.toggle(this._inputNode,"dijitHidden",this.readOnlyInput),
!this.readOnlyInput&&!this._input){if(null===this.inputHandler)return console.warn("you must add some handler to connect to input field"),
!1;e.isString(this.inputHandler)&&(this.inputHandler=this.inputHandler.split(",")),
e.isString(this.inputProperties)&&(this.inputProperties=s.fromJson(this.inputProperties));
var t=e.getObject(this.inputClass,!1);this.inputProperties.regExp=this.regExpGen(this.constraints),
this._input=new t(this.inputProperties),this._input.startup(),this._inputNode.appendChild(this._input.domNode),
i.forEach(this.inputHandler,function(t){this.connect(this._input,e.trim(t),"_onHandler");
},this),this.connect(this._input,"onKeyDown","_inputOnKeyDown"),this.connect(this._input,"onBlur","_inputOnBlur");
}},compare:function(t,e){return t=t.join(","),e=e.join(","),t>e?1:e>t?-1:0},add:function(t){
if(!(this._count>=this.maxItems&&null!==this.maxItems)){this._lastValueReported=this._getValues(),
e.isArray(t)||(t=[t]);for(var i in t){var s=t[i];if(""!==s&&"string"==typeof s){this._count++;
new RegExp(this.regExpGen(this.constraints));if(this._lastAddedItem=new y({index:this._items.length,
readOnlyItem:this.readOnlyItem,value:s,regExp:this.regExpGen(this.constraints)}),
this._lastAddedItem.startup(),this._testItem(this._lastAddedItem,s),this._lastAddedItem.onClose=e.hitch(this,"_onItemClose",this._lastAddedItem),
this._lastAddedItem.onChange=e.hitch(this,"_onItemChange",this._lastAddedItem),this._lastAddedItem.onEdit=e.hitch(this,"_onItemEdit",this._lastAddedItem),
this._lastAddedItem.onKeyDown=e.hitch(this,"_onItemKeyDown",this._lastAddedItem),
this.useAnim&&a.set(this._lastAddedItem.domNode,{opacity:0,display:""}),this._placeItem(this._lastAddedItem.domNode),
this.useAnim){n.fadeIn({node:this._lastAddedItem.domNode,duration:this.duration,easing:this.easingIn
}).play()}if(this._items[this._lastAddedItem.index]=this._lastAddedItem,this._onChangeActive&&this.intermediateChanges&&this.onChange(s),
this._count>=this.maxItems&&null!==this.maxItems)break}}this._updateValues(),0==this._lastValueReported.length&&(this._lastValueReported=this.value),
this.readOnlyInput||this._input.set("value",""),this._onChangeActive&&this.onChange(this.value),
this._setReadOnlyWhenMaxItemsReached()}},_setReadOnlyWhenMaxItemsReached:function(){
this.set("readOnlyInput",this._count>=this.maxItems&&null!==this.maxItems)},_setSelectNode:function(){
this._selectNode.options.length=0;var t=this.submitOnlyValidValue?this.get("MatchedValue"):this.value;
e.isArray(t)&&i.forEach(t,function(t){this._selectNode.options[this._selectNode.options.length]=new Option(t,t,!0,!0);
},this)},_placeItem:function(t){r.place(t,this._inputNode,"before")},_getCursorPos:function(t){
if("undefined"!=typeof t.selectionStart)return t.selectionStart;try{t.focus()}catch(e){}
var i=t.createTextRange();i.moveToBookmark(o.doc.selection.createRange().getBookmark()),
i.moveEnd("character",t.value.length);try{return t.value.length-i.text.length}finally{
i=null}},_onItemClose:function(t){if(!this.disabled)if(this.useAnim){n.fadeOut({node:t.domNode,
duration:this.duration,easing:this.easingOut,onEnd:e.hitch(this,"_destroyItem",t)
}).play()}else this._destroyItem(t)},_onItemKeyDown:function(t,e){!this.readOnlyItem&&this.useArrowForEdit&&(e.keyCode==u.LEFT_ARROW&&0==this._getCursorPos(e.target)?this._editBefore(t):e.keyCode==u.RIGHT_ARROW&&this._getCursorPos(e.target)==e.target.value.length&&this._editAfter(t));
},_editBefore:function(t){this._currentItem=this._getPreviousItem(t),null!==this._currentItem&&this._currentItem.edit();
},_editAfter:function(t){this._currentItem=this._getNextItem(t),null!==this._currentItem&&this._currentItem.edit(),
this.readOnlyInput||null===this._currentItem&&this._focusInput()},_onItemChange:function(t,e){
e=e||t.get("value"),this._testItem(t,e),this._updateValues()},_onItemEdit:function(t){
h.remove(t.domNode,["dijitError",this.baseClass+"Match",this.baseClass+"Mismatch"]);
},_testItem:function(t,e){var i=new RegExp(this.regExpGen(this.constraints)),s=(""+e).match(i);
h.remove(t.domNode,this.baseClass+(s?"Mismatch":"Match")),h.add(t.domNode,this.baseClass+(s?"Match":"Mismatch")),
h.toggle(t.domNode,"dijitError",!s),this.showCloseButtonWhenValid&&s||this.showCloseButtonWhenInvalid&&!s?h.add(t.domNode,this.baseClass+"Closable"):h.remove(t.domNode,this.baseClass+"Closable");
},_getValueAttr:function(){return this.value},_setValueAttr:function(t){this._destroyAllItems(),
this.add(this._parseValue(t))},_parseValue:function(t){if("string"==typeof t){e.isString(this.delimiter)&&(this.delimiter=[this.delimiter]);
var i=new RegExp("^.*("+this.delimiter.join("|")+").*");if(t.match(i))return i=new RegExp(this.delimiter.join("|")),
t.split(i)}return t},regExpGen:function(t){return this.regExp},_setDisabledAttr:function(t){
if(!this.readOnlyItem)for(var e in this._items)this._items[e].set("disabled",t);this.readOnlyInput||this._input.set("disabled",t),
this.inherited(arguments)},_onHandler:function(t){var i=this._parseValue(t);e.isArray(i)&&this.add(i);
},_onClick:function(t){this._focusInput()},_focusInput:function(){!this.readOnlyInput&&this._input.focus&&this._input.focus();
},_inputOnKeyDown:function(t){this._currentItem=null;var e=this._input.get("value");
t.keyCode==u.BACKSPACE&&""==e&&this.get("lastItem")?this._destroyItem(this.get("lastItem")):t.keyCode==u.ENTER&&""!=e?this.add(e):t.keyCode==u.LEFT_ARROW&&0==this._getCursorPos(this._input.focusNode)&&!this.readOnlyItem&&this.useArrowForEdit&&this._editBefore();
},_inputOnBlur:function(){var t=this._input.get("value");this.useOnBlur&&""!=t&&this.add(t);
},_getMatchedValueAttr:function(){return this._getValues(e.hitch(this,this._matchValidator));
},_getMismatchedValueAttr:function(){return this._getValues(e.hitch(this,this._mismatchValidator));
},_getValues:function(t){var e=[];t=t||this._nullValidator;for(var i in this._items){
var s=this._items[i];if(null!==s){var n=s.get("value");t(n)&&e.push(n)}}return e},
_nullValidator:function(t){return!0},_matchValidator:function(t){var e=new RegExp(this.regExpGen(this.constraints));
return t.match(e)},_mismatchValidator:function(t){var e=new RegExp(this.regExpGen(this.constraints));
return!t.match(e)},_getLastItemAttr:function(){return this._getSomeItem()},_getSomeItem:function(t,e){
t=t||!1,e=e||"last";var i=null,s=-1;for(var n in this._items)if(null!==this._items[n]){
if("before"==e&&this._items[n]===t)break;if(i=this._items[n],"first"==e||0==s){s=1;
break}"after"==e&&this._items[n]===t&&(s=0)}return"after"==e&&0==s&&(i=null),i},_getPreviousItem:function(t){
return this._getSomeItem(t,"before")},_getNextItem:function(t){return this._getSomeItem(t,"after");
},_destroyItem:function(t,e){this._items[t.index]=null,t.destroy(),this._count--,
e!==!1&&(this._updateValues(),this._setReadOnlyWhenMaxItemsReached())},_updateValues:function(){
this.value=this._getValues(),this._setSelectNode()},_destroyAllItems:function(){for(var t in this._items)null!=this._items[t]&&this._destroyItem(this._items[t],!1);
this._items=[],this._count=0,this.value=null,this._setSelectNode(),this._setReadOnlyWhenMaxItemsReached();
},destroy:function(){this._destroyAllItems(),this._lastAddedItem=null,this._input||this._input.destroy(),
this.inherited(arguments)}}),y=g("dojox.form._ListInputInputItem",[_,c],{templateString:'<li class="dijit dijitReset dijitLeft dojoxListInputItem" dojoAttachEvent="onclick: onClick" ><span dojoAttachPoint="labelNode"></span></li>',
closeButtonNode:null,readOnlyItem:!0,baseClass:"dojoxListInputItem",value:"",regExp:".*",
_editBox:null,_handleKeyDown:null,attributeMap:{value:{node:"labelNode",type:"innerHTML"
}},postMixInProperties:function(){var t=I;e.mixin(this,t),this.inherited(arguments);
},postCreate:function(){this.inherited(arguments),this.closeButtonNode=r.create("span",{
"class":"dijitButtonNode dijitDialogCloseIcon",title:this.itemClose,onclick:e.hitch(this,"onClose"),
onmouseenter:e.hitch(this,"_onCloseEnter"),onmouseleave:e.hitch(this,"_onCloseLeave")
},this.domNode),r.create("span",{"class":"closeText",title:this.itemClose,innerHTML:"x"
},this.closeButtonNode)},startup:function(){this.inherited(arguments),this._createInlineEditBox();
},_setReadOnlyItemAttr:function(t){this.readOnlyItem=t,t?this._editBox&&this._editBox.set("disabled",!0):this._createInlineEditBox();
},_createInlineEditBox:function(){if(!this.readOnlyItem&&this._started){if(this._editBox)return void this._editBox.set("disabled",!1);
this._editBox=new f({value:this.value,editor:"dijit.form.ValidationTextBox",editorParams:{
regExp:this.regExp}},this.labelNode),this.connect(this._editBox,"edit","_onEdit"),
this.connect(this._editBox,"onChange","_onCloseEdit"),this.connect(this._editBox,"onCancel","_onCloseEdit");
}},edit:function(){this.readOnlyItem||this._editBox.edit()},_onCloseEdit:function(t){
h.remove(this.closeButtonNode,this.baseClass+"Edited"),d.disconnect(this._handleKeyDown),
this.onChange(t)},_onEdit:function(){h.add(this.closeButtonNode,this.baseClass+"Edited"),
this._handleKeyDown=d.connect(this._editBox.editWidget,"_onKeyPress",this,"onKeyDown"),
this.onEdit()},_setDisabledAttr:function(t){this.readOnlyItem||this._editBox.set("disabled",t);
},_getValueAttr:function(){return!this.readOnlyItem&&this._started?this._editBox.get("value"):this.value;
},destroy:function(){this._editBox&&this._editBox.destroy(),this.inherited(arguments);
},_onCloseEnter:function(){h.add(this.closeButtonNode,"dijitDialogCloseIcon-hover");
},_onCloseLeave:function(){h.remove(this.closeButtonNode,"dijitDialogCloseIcon-hover");
},onClose:function(){},onEdit:function(){},onClick:function(){},onChange:function(t){},
onKeyDown:function(t){}});g("dojox.form._ListInputInputBox",[p],{minWidth:50,intermediateChanges:!0,
regExp:".*",_sizer:null,onChange:function(t){this.inherited(arguments),null===this._sizer&&(this._sizer=r.create("div",{
style:{position:"absolute",left:"-10000px",top:"-10000px"}},o.body())),this._sizer.innerHTML=t;
var e=l.getContentBox(this._sizer).w+this.minWidth;l.setContentSize(this.domNode,{
w:e})},destroy:function(){r.destroy(this._sizer),this.inherited(arguments)}});return x;
});