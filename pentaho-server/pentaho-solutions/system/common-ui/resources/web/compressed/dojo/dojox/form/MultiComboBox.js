define(["dojo/_base/kernel","dijit/form/ValidationTextBox","dijit/form/ComboBoxMixin","dojo/_base/declare"],function(e,i,t,r){
return e.experimental("dojox.form.MultiComboBox"),r("dojox.form.MultiComboBox",[i,t],{
delimiter:",",_previousMatches:!1,_setValueAttr:function(e){this.delimiter&&0!=e.length&&(e=e+this.delimiter+" ",
arguments[0]=this._addPreviousMatches(e)),this.inherited(arguments)},_addPreviousMatches:function(e){
return this._previousMatches&&(e.match(new RegExp("^"+this._previousMatches))||(e=this._previousMatches+e),
e=this._cleanupDelimiters(e)),e},_cleanupDelimiters:function(e){return this.delimiter&&(e=e.replace(new RegExp("  +")," "),
e=e.replace(new RegExp("^ *"+this.delimiter+"* *"),""),e=e.replace(new RegExp(this.delimiter+" *"+this.delimiter),this.delimiter)),
e},_autoCompleteText:function(e){arguments[0]=this._addPreviousMatches(e),this.inherited(arguments);
},_startSearch:function(e){e=this._cleanupDelimiters(e);var i=new RegExp("^.*"+this.delimiter+" *");
(this._previousMatches=e.match(i))&&(arguments[0]=e.replace(i,"")),this.inherited(arguments);
}})});