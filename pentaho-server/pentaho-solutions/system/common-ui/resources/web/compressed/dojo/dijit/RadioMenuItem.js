define(["dojo/_base/declare","dojo/dom-class","./CheckedMenuItem"],function(e,t,i){
return e("dijit.RadioButtonMenuItem",i,{baseClass:"dijitMenuItem dijitRadioMenuItem",
role:"menuitemradio",checkedChar:"*",group:"",_currentlyChecked:{},_setCheckedAttr:function(e){
e&&this.group&&this._currentlyChecked[this.group]&&this._currentlyChecked[this.group]!=this&&this._currentlyChecked[this.group].set("checked",!1),
this.inherited(arguments),this.group&&(e?this._currentlyChecked[this.group]=this:this._currentlyChecked[this.group]==this&&(this._currentlyChecked[this.group]=null));
},_onClick:function(e){this.disabled||this.checked||(this.set("checked",!0),this.onChange(!0)),
this.onClick(e)}})});