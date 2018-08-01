define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/event","dojo/dom-geometry","dojo/dom-class","dojo/dom-construct","dojo/i18n","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/registry","dijit/Menu","dijit/MenuItem","dijit/Tooltip","dijit/form/_FormSelectWidget","dijit/form/ComboButton","dojo/text!dojox/form/resources/_CheckedMultiSelectMenuItem.html","dojo/text!dojox/form/resources/_CheckedMultiSelectItem.html","dojo/text!dojox/form/resources/CheckedMultiSelect.html","dojo/i18n!dojox/form/nls/CheckedMultiSelect","dijit/form/CheckBox"],function(e,t,i,o,s,n,d,l,h,a,r,c,u,p,m,f,g,b,C,_,M){
var x=e("dojox.form._CheckedMultiSelectItem",[h,a,r],{templateString:C,baseClass:"dojoxMultiSelectItem",
option:null,parent:null,disabled:!1,readOnly:!1,postMixInProperties:function(){this._type=this.parent.multiple?{
type:"checkbox",baseClass:"dijitCheckBox"}:{type:"radio",baseClass:"dijitRadio"},
this.disabled||(this.disabled=this.option.disabled=this.option.disabled||!1),this.readOnly||(this.readOnly=this.option.readOnly=this.option.readOnly||!1),
this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this.labelNode.innerHTML=this.option.label;
},_changeBox:function(){this.get("disabled")||this.get("readOnly")||(this.parent.multiple?this.option.selected=this.checkBox.get("value")&&!0:this.parent.set("value",this.option.value),
this.parent._updateSelection(),this.parent.focus())},_onClick:function(e){this.get("disabled")||this.get("readOnly")?o.stop(e):this.checkBox._onClick(e);
},_updateBox:function(){this.checkBox.set("value",this.option.selected)},_setDisabledAttr:function(e){
this.disabled=e||this.option.disabled,this.checkBox.set("disabled",this.disabled),
n.toggle(this.domNode,"dojoxMultiSelectDisabled",this.disabled)},_setReadOnlyAttr:function(e){
this.checkBox.set("readOnly",e),this.readOnly=e}}),j=e("dojox.form._CheckedMultiSelectMenu",u,{
multiple:!1,buildRendering:function(){this.inherited(arguments);var e=this.menuTableNode=this.domNode,t=this.domNode=d.create("div",{
style:{overflowX:"hidden",overflowY:"scroll"}});e.parentNode&&e.parentNode.replaceChild(t,e),
n.remove(e,"dijitMenuTable"),t.className=e.className+" dojoxCheckedMultiSelectMenu",
e.className="dijitReset dijitMenuTable",e.setAttribute("role","listbox"),t.setAttribute("role","presentation"),
t.appendChild(e)},resize:function(e){e&&(s.setMarginBox(this.domNode,e),"w"in e&&(this.menuTableNode.style.width="100%"));
},onClose:function(){this.inherited(arguments),this.menuTableNode&&(this.menuTableNode.style.width="");
},onItemClick:function(e,t){return"undefined"==typeof this.isShowingNow&&this._markActive(),
this.focusChild(e),e.disabled||e.readOnly?!1:(this.multiple||this.onExecute(),void e.onClick(t));
}}),y=e("dojox.form._CheckedMultiSelectMenuItem",p,{templateString:b,option:null,
parent:null,iconClass:"",postMixInProperties:function(){this.parent.multiple?(this._iconClass="dojoxCheckedMultiSelectMenuCheckBoxItemIcon",
this._type={type:"checkbox"}):(this._iconClass="",this._type={type:"hidden"}),this.disabled=this.option.disabled,
this.checked=this.option.selected,this.label=this.option.label,this.readOnly=this.option.readOnly,
this.inherited(arguments)},onChange:function(e){},_updateBox:function(){n.toggle(this.domNode,"dojoxCheckedMultiSelectMenuItemChecked",!!this.option.selected),
this.domNode.setAttribute("aria-checked",this.option.selected),this.inputNode.checked=this.option.selected,
this.parent.multiple||n.toggle(this.domNode,"dijitSelectSelectedOption",!!this.option.selected);
},_onClick:function(e){this.disabled||this.readOnly||(this.parent.multiple?(this.option.selected=!this.option.selected,
this.parent.onChange(),this.onChange(this.option.selected)):this.option.selected||(i.forEach(this.parent.getChildren(),function(e){
e.option.selected=!1}),this.option.selected=!0,this.parent.onChange(),this.onChange(this.option.selected))),
this.inherited(arguments)}}),v=e("dojox.form.CheckedMultiSelect",f,{templateString:_,
baseClass:"dojoxCheckedMultiSelect",required:!1,invalidMessage:"$_unset_$",_message:"",
dropDown:!1,labelText:"",tooltipPosition:[],postMixInProperties:function(){this.inherited(arguments),
this._nlsResources=l.getLocalization("dojox.form","CheckedMultiSelect",this.lang),
"$_unset_$"==this.invalidMessage&&(this.invalidMessage=this._nlsResources.invalidMessage);
},_fillContent:function(){if(this.inherited(arguments),this.options.length&&!this.value&&this.srcNodeRef){
var e=this.srcNodeRef.selectedIndex||0;this.value=this.options[e>=0?e:0].value}this.dropDown&&(n.toggle(this.selectNode,"dojoxCheckedMultiSelectHidden"),
this.dropDownMenu=new j({id:this.id+"_menu",style:"display: none;",multiple:this.multiple,
onChange:t.hitch(this,"_updateSelection")}))},startup:function(){this.dropDown&&(this.dropDownButton=new g({
label:this.labelText,dropDown:this.dropDownMenu,baseClass:"dojoxCheckedMultiSelectButton",
maxHeight:this.maxHeight},this.comboButtonNode)),this.inherited(arguments)},_onMouseDown:function(e){
o.stop(e)},validator:function(){return this.required?i.some(this.getOptions(),function(e){
return e.selected&&null!=e.value&&0!=e.value.toString().length}):!0},validate:function(e){
m.hide(this.domNode);var t=this.isValid(e);return t||this.displayMessage(this.invalidMessage),
t},isValid:function(e){return this.validator()},getErrorMessage:function(e){return this.invalidMessage;
},displayMessage:function(e){m.hide(this.domNode),e&&m.show(e,this.domNode,this.tooltipPosition);
},onAfterAddOptionItem:function(e,t){},_addOptionItem:function(e){var t;this.dropDown?(t=new y({
option:e,parent:this.dropDownMenu}),this.dropDownMenu.addChild(t)):(t=new x({option:e,
parent:this,disabled:this.disabled,readOnly:this.readOnly}),this.wrapperDiv.appendChild(t.domNode)),
this.onAfterAddOptionItem(t,e)},_refreshState:function(){this.validate(this.focused);
},onChange:function(e){this._refreshState()},reset:function(){this.inherited(arguments),
m.hide(this.domNode)},_updateSelection:function(){this.inherited(arguments),this._handleOnChange(this.value),
i.forEach(this._getChildren(),function(e){e._updateBox()}),d.empty(this.containerNode);
var e=this;if(i.forEach(this.value,function(t){var i=d.create("option",{value:t,label:t,
selected:"selected"});d.place(i,e.containerNode)}),this.dropDown&&this.dropDownButton){
var o=0,s="";i.forEach(this.options,function(e){e.selected&&(o++,s=e.label)}),this.dropDownButton.set("label",this.multiple?t.replace(this._nlsResources.multiSelectLabelText,{
num:o}):s)}},_getChildren:function(){return this.dropDown?this.dropDownMenu.getChildren():i.map(this.wrapperDiv.childNodes,function(e){
return c.byNode(e)})},invertSelection:function(e){this.multiple&&(i.forEach(this.options,function(e){
e.selected=!e.selected}),this._updateSelection())},_setDisabledAttr:function(e){this.inherited(arguments),
this.dropDown&&this.dropDownButton.set("disabled",e),i.forEach(this._getChildren(),function(t){
t&&t.set&&t.set("disabled",e)})},_setReadOnlyAttr:function(e){this.inherited(arguments),
"readOnly"in this.attributeMap&&this[this.attributeMap.readOnly].setAttribute("readonly",e),
this.readOnly=e,i.forEach(this._getChildren(),function(t){t&&t.set&&t.set("readOnly",e);
})},uninitialize:function(){m.hide(this.domNode),i.forEach(this._getChildren(),function(e){
e.destroyRecursive()}),this.inherited(arguments)}});return v});