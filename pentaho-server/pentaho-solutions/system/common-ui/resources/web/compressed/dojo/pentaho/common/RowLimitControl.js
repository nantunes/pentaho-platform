/*!
 * Copyright 2010 - 2018 Hitachi Vantara.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

define(["dojo/_base/declare","dijit/form/Select","dijit/form/ValidationTextBox","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_Templated","dojo/on","dojo/keys","dojo/_base/lang","dojo/query","dijit/focus","dojo/dom-class","dojo/text!pentaho/common/RowLimitControl.html"],function(i,t,s,e,o,h,a,m,n,_,l,r,w,c){
return i("pentaho.common.RowLimitControl",[e,o,h],{_callback:void 0,_systemRowLimit:void 0,
_reportRowLimit:void 0,_selectedRowLimit:void 0,_previousRowLimit:void 0,_isRowLimitReached:!1,
_initialized:!1,_getMessage:void 0,_getDialog:void 0,_showGlassPane:void 0,_hideGlassPane:void 0,
_getLocaleString:void 0,_maxRowLimit:2e9,templateString:c,widgetsInTemplate:!0,apply:function(i,t,s){
!this._isRowLimitReached===s&&(this._isRowLimitReached=s,this._refreshMessage()),
this._init(t,i)},postCreate:function(){this.inherited(arguments),m(this.rowLimitRestrictions,"change",_.hitch(this,"_onSelect")),
m(this.rowsNumberInput,"keydown, focusout",_.hitch(this,"_onRowLimitSubmit")),m(this.rowsNumberInput,"mousedown",function(i){
this.disabled&&i.preventDefault()}),m(this.rowLimitLabel,"mousedown",function(i){
i.preventDefault()})},registerLocalizationLookup:function(i){this._getLocaleString=i,
this._localize()},bindChange:function(i){this._callback=i},bindGetMessage:function(i){
this._getMessage=i},bindGetDialog:function(i){this._getDialog=i},bindShowGlassPane:function(i){
this._showGlassPane=i},bindHideGlassPane:function(i){this._hideGlassPane=i},setRowLimit:function(i){
this._previousRowLimit=this._getRowLimit(),this.rowsNumberInput.set("value",i>0?i:"");
},setRowLimitRestrictions:function(i,t){this.rowLimitRestrictions.set("value",i,t===!0);
},_init:function(i,t){this._isInitialized()||(void 0===this._reportRowLimit&&(i>0?this._reportRowLimit=i:this._reportRowLimit=-1),
void 0===this._systemRowLimit&&(t>0?this._systemRowLimit=t:this._systemRowLimit=0),
this._initialized=!0,this._reportRowLimit>0?this._systemRowLimit<this._reportRowLimit?this._selectedRowLimit=this._systemRowLimit:this._selectedRowLimit=this._reportRowLimit:(this._selectedRowLimit=this._systemRowLimit,
this.setRowLimitRestrictions("MAXIMUM")),this._initUI())},_localize:function(){this._getLocaleString&&(this.rowLimitLabel.innerHTML=this._getLocaleString("RowLimitLabel"),
this.rowLimitRestrictions.addOption({label:this._getLocaleString("RowLimitNoMoreThanTitle"),
value:"NO_MORE_THAN"}),this.rowLimitRestrictions.addOption({label:this._getLocaleString("RowLimitMaximumTitle"),
value:"MAXIMUM"}))},_showSystemMessage:function(){this._isRowLimitReached&&this._getMessage&&this._getMessage().systemLimitReached();
},_showMessage:function(){this._isRowLimitReached&&this._getMessage&&this._getMessage().limitReached();
},_applySystem:function(){var i=this._reportRowLimit>0&&(this._systemRowLimit<=0||this._reportRowLimit<this._systemRowLimit);
this._setRowsNumberInputDisabled(!0),this.setRowLimit(i?this._reportRowLimit:this._systemRowLimit),
this.setRowLimitRestrictions("MAXIMUM"),i||this._showSystemMessage()},_applyUser:function(){
this._setRowsNumberInputDisabled(!1),this.setRowLimit(this._selectedRowLimit),this.setRowLimitRestrictions("NO_MORE_THAN"),
this._showMessage()},_initUI:function(){var i=this;this._isInitialized()&&(this._getMessage&&this._getMessage().hide(),
this._reportRowLimit>0?(this._setRowLimitRestrictionDisabled(!0),this._setRowsNumberInputDisabled(!0),
this._systemRowLimit>0&&this._systemRowLimit<this._reportRowLimit?(this.setRowLimit(this._systemRowLimit),
this.setRowLimitRestrictions("MAXIMUM"),this._showSystemMessage()):(this.setRowLimit(this._reportRowLimit),
this.setRowLimitRestrictions("MAXIMUM"),this._getMessage&&this._getMessage().hide())):(this._setRowLimitRestrictionDisabled(!1),
this._systemRowLimit<=0&&this._selectedRowLimit>0||this._systemRowLimit>this._selectedRowLimit?(this._applyUser(),
this._callback&&this._callback(this._selectedRowLimit)):this._systemRowLimit==this._selectedRowLimit?(this.setRowLimit(this._selectedRowLimit),
"MAXIMUM"===this._getRowLimitRestrictions()?(this._setRowsNumberInputDisabled(!0),
this._showSystemMessage()):(this._setRowsNumberInputDisabled(!1),this._showMessage()),
this._callback&&this._callback(this._selectedRowLimit)):(this._applySystem(),this._callback&&this._callback(this._systemRowLimit))),
this.rowsNumberInput.validator=function(t,s){return t&&(isNaN(t)||1>t||t>i._maxRowLimit)?(this.set("invalidMessage","<div class='customTooltip'>"+i._getLocaleString("MaximumRowLimitValueErrorMessage",i._maxRowLimit.toString())+"</div>"),
!1):!0})},_refreshMessage:function(){this._isInitialized()&&(this._getMessage&&this._getMessage().hide(),
"MAXIMUM"===this._getRowLimitRestrictions()?this._applySystem():this._reportRowLimit<0&&this._applyUser());
},_isInitialized:function(){return this._initialized},_getRowLimit:function(){var i=this.rowsNumberInput.get("value");
return""===i?"-1":i},_getRowLimitRestrictions:function(){return this.rowLimitRestrictions.get("value");
},_setRowsNumberInputDisabled:function(i){this.rowsNumberInput.set("disabled",i),
this.rowsNumberInput.set("readonly",i)},_setRowLimitRestrictionDisabled:function(i){
this.rowLimitRestrictions.set("disabled",i),this.rowLimitRestrictions.set("readonly",i);
},_onSelect:function(i){this._getMessage().hide(),this._isRowLimitReached=!1,"MAXIMUM"===i?(this._applySystem(),
this._callback&&this._callback(this._systemRowLimit)):(this._applyUser(),this._callback&&this._callback(this._selectedRowLimit));
},_onRowLimitSubmit:function(i){if("undefined"!=typeof i&&i.keyCode===n.ENTER)return void(r.curNode&&r.curNode.blur());
if("undefined"!=typeof i&&("blur"===i.type||"focusout"===i.type)){if(!this.rowsNumberInput.isValid()||this._getRowLimit()<1)return void this.setRowLimit(this._selectedRowLimit);
if(this._getRowLimit()>this._systemRowLimit&&this._systemRowLimit>0){var t=this._getDialog&&this._getDialog();
if(t){var s=[_.hitch(this,function(i){this._hideGlassPane&&this._hideGlassPane(),
this._onSelect("MAXIMUM"),t.hide()})];t.callbacks=s,t.setSystemRowLimit(this._systemRowLimit),
this._showGlassPane&&this._showGlassPane(),t.showDialog()}}else{if(this._previousRowLimit==this._getRowLimit())return;
this._previousRowLimit=this._selectedRowLimit,this._selectedRowLimit=this._getRowLimit(),
this._callback&&this._callback(this._selectedRowLimit)}}-1!==$.inArray(i.keyCode,[46,8,9,27,13])||65==i.keyCode&&i.ctrlKey===!0||67==i.keyCode&&i.ctrlKey===!0||88==i.keyCode&&i.ctrlKey===!0||i.keyCode>=35&&i.keyCode<=39||(i.shiftKey||i.keyCode<48||i.keyCode>57)&&(i.keyCode<96||i.keyCode>105)&&i.preventDefault();
}})});