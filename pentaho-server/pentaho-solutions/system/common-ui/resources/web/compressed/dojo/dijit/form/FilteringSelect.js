define(["dojo/_base/declare","dojo/_base/lang","dojo/when","./MappedTextBox","./ComboBoxMixin"],function(t,e,i,s,n){
return t("dijit.form.FilteringSelect",[s,n],{required:!0,_lastDisplayedValue:"",_isValidSubset:function(){
return this._opened},isValid:function(){return!!this.item||!this.required&&""==this.get("displayedValue");
},_refreshState:function(){this.searchTimer||this.inherited(arguments)},_callbackSetLabel:function(t,e,i,s){
e&&e[this.searchAttr]!==this._lastQuery||!e&&t.length&&this.store.getIdentity(t[0])!=this._lastQuery||(t.length?this.set("item",t[0],s):this.set("value","",s||void 0===s&&!this.focused,this.textbox.value,null));
},_openResultList:function(t,e,i){e[this.searchAttr]===this._lastQuery&&(this.inherited(arguments),
void 0===this.item&&this.validate(!0))},_getValueAttr:function(){return this.valueNode.value;
},_getValueField:function(){return"value"},_setValueAttr:function(t,s,n,l){if(this._onChangeActive||(s=null),
void 0===l){if((null===t||""===t)&&(t="",!e.isString(n)))return void this._setDisplayedValueAttr(n||"",s);
var a=this;this._lastQuery=t,i(this.store.get(t),function(t){a._callbackSetLabel(t?[t]:[],void 0,void 0,s);
})}else this.valueNode.value=t,this.inherited(arguments)},_setItemAttr:function(t,e,i){
this.inherited(arguments),this._lastDisplayedValue=this.textbox.value},_getDisplayQueryString:function(t){
return t.replace(/([\\\*\?])/g,"\\$1")},_setDisplayedValueAttr:function(t,s){if(null==t&&(t=""),
!this._created){if(!("displayedValue"in this.params))return;s=!1}if(this.store){this.closeDropDown();
var n,l=e.clone(this.query),a=this._getDisplayQueryString(t);this.store._oldAPI?n=a:(n=this._patternToRegExp(a),
n.toString=function(){return a}),this._lastQuery=l[this.searchAttr]=n,this.textbox.value=t,
this._lastDisplayedValue=t,this._set("displayedValue",t);var r=this,u={queryOptions:{
ignoreCase:this.ignoreCase,deep:!0}};e.mixin(u,this.fetchProperties),this._fetchHandle=this.store.query(l,u),
i(this._fetchHandle,function(t){r._fetchHandle=null,r._callbackSetLabel(t||[],l,u,s);
},function(t){r._fetchHandle=null,r._cancelingQuery||console.error("dijit.form.FilteringSelect: "+t.toString());
})}},undo:function(){this.set("displayedValue",this._lastDisplayedValue)}})});