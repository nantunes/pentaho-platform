define(["dojo/_base/array","dojo/_base/declare","dojo/dom-geometry","dojo/has","dojo/query","./_FormValueWidget"],function(t,e,i,o,n,r){
var a=e("dijit.form.MultiSelect"+(o("dojo-bidi")?"_NoBidi":""),r,{size:7,baseClass:"dijitMultiSelect",
templateString:"<select multiple='true' ${!nameAttrSetting} data-dojo-attach-point='containerNode,focusNode' data-dojo-attach-event='onchange: _onChange'></select>",
addSelected:function(t){t.getSelected().forEach(function(e){this.containerNode.appendChild(e),
this.domNode.scrollTop=this.domNode.offsetHeight;var i=t.domNode.scrollTop;t.domNode.scrollTop=0,
t.domNode.scrollTop=i},this),this._set("value",this.get("value"))},getSelected:function(){
return n("option",this.containerNode).filter(function(t){return t.selected})},_getValueAttr:function(){
return t.map(this.getSelected(),function(t){return t.value})},multiple:!0,_setValueAttr:function(e,i){
n("option",this.containerNode).forEach(function(i){i.selected=-1!=t.indexOf(e,i.value);
}),this.inherited(arguments)},invertSelection:function(t){var e=[];n("option",this.containerNode).forEach(function(t){
t.selected||e.push(t.value)}),this._setValueAttr(e,!(t===!1||null==t))},_onChange:function(){
this._handleOnChange(this.get("value"),!0)},resize:function(t){t&&i.setMarginBox(this.domNode,t);
},postCreate:function(){this._set("value",this.get("value")),this.inherited(arguments);
}});return o("dojo-bidi")&&(a=e("dijit.form.MultiSelect",a,{addSelected:function(t){
t.getSelected().forEach(function(t){t.text=this.enforceTextDirWithUcc(this.restoreOriginalText(t),t.text);
},this),this.inherited(arguments)},_setTextDirAttr:function(t){this.textDir==t&&this._created||!this.enforceTextDirWithUcc||(this._set("textDir",t),
n("option",this.containerNode).forEach(function(t){this._created||t.value!==t.text||(t.value=t.text),
t.text=this.enforceTextDirWithUcc(t,t.originalText||t.text)},this))}})),a});