define(["dojo/_base/declare","dojo/Deferred","dojo/_base/kernel","dojo/_base/lang","dojo/store/util/QueryResults","./_AutoCompleterMixin","./_ComboBoxMenu","../_HasDropDown","dojo/text!./templates/DropDownBox.html"],function(t,e,o,r,i,n,s,a,d){
return t("dijit.form.ComboBoxMixin",[a,n],{dropDownClass:s,hasDownArrow:!0,templateString:d,
baseClass:"dijitTextBox dijitComboBox",cssStateNodes:{_buttonNode:"dijitDownArrowButton"
},_setHasDownArrowAttr:function(t){this._set("hasDownArrow",t),this._buttonNode.style.display=t?"":"none";
},_showResultList:function(){this.displayMessage(""),this.inherited(arguments)},_setStoreAttr:function(t){
t.get||r.mixin(t,{_oldAPI:!0,get:function(t){var o=new e;return this.fetchItemByIdentity({
identity:t,onItem:function(t){o.resolve(t)},onError:function(t){o.reject(t)}}),o.promise;
},query:function(t,o){var n=new e(function(){s.abort&&s.abort()});n.total=new e;var s=this.fetch(r.mixin({
query:t,onBegin:function(t){n.total.resolve(t)},onComplete:function(t){n.resolve(t);
},onError:function(t){n.reject(t)}},o));return i(n)}}),this._set("store",t)},postMixInProperties:function(){
var t=this.params.store||this.store;if(t&&this._setStoreAttr(t),this.inherited(arguments),
!this.params.store&&!this.store._oldAPI){var e=this.declaredClass;r.mixin(this.store,{
getValue:function(t,r){return o.deprecated(e+".store.getValue(item, attr) is deprecated for builtin store.  Use item.attr directly","","2.0"),
t[r]},getLabel:function(t){return o.deprecated(e+".store.getLabel(item) is deprecated for builtin store.  Use item.label directly","","2.0"),
t.name},fetch:function(t){o.deprecated(e+".store.fetch() is deprecated for builtin store.","Use store.query()","2.0");
var i=["dojo/data/ObjectStore"];require(i,r.hitch(this,function(e){new e({objectStore:this
}).fetch(t)}))}})}}})});