define(["dojo/_base/declare","dojo/keys","dojo/text!./templates/Menu.html","./_OnDijitClickMixin","./_MenuBase"],function(n,t,e,o,i){
return n("dijit.DropDownMenu",[i,o],{templateString:e,baseClass:"dijitMenu",_onUpArrow:function(){
this.focusPrev()},_onDownArrow:function(){this.focusNext()},_onRightArrow:function(n){
this._moveToPopup(n),n.stopPropagation(),n.preventDefault()},_onLeftArrow:function(n){
this.parentMenu?this.parentMenu._isMenuBar?this.parentMenu.focusPrev():this.onCancel(!1):(n.stopPropagation(),
n.preventDefault())}})});