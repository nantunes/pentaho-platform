define(["dojo/_base/declare","dojo/keys","../focus","./DropDownButton","dojo/text!./templates/ComboButton.html"],function(t,o,e,i,n){
return t("dijit.form.ComboButton",i,{templateString:n,_setIdAttr:"",_setTabIndexAttr:["focusNode","titleNode"],
_setTitleAttr:"titleNode",optionsTitle:"",baseClass:"dijitComboButton",cssStateNodes:{
buttonNode:"dijitButtonNode",titleNode:"dijitButtonContents",_popupStateNode:"dijitDownArrowButton"
},_focusedNode:null,_onButtonKeyDown:function(t){t.keyCode==o[this.isLeftToRight()?"RIGHT_ARROW":"LEFT_ARROW"]&&(e.focus(this._popupStateNode),
t.stopPropagation(),t.preventDefault())},_onArrowKeyDown:function(t){t.keyCode==o[this.isLeftToRight()?"LEFT_ARROW":"RIGHT_ARROW"]&&(e.focus(this.titleNode),
t.stopPropagation(),t.preventDefault())},focus:function(t){this.disabled||e.focus("start"==t?this.titleNode:this._popupStateNode);
}})});