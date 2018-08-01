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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/dom-construct","dojo/on","dojo/query","dojo/_base/lang","dojo/dom-class","dojo/_base/array","pentaho/common/Calendar","pentaho/common/DateTextBox","pentaho/common/Dialog","pentaho/common/MessageBox","dojo/text!pentaho/common/FilterDialog.html","pentaho/common/Messages","dojo/date/stamp","dijit/form/MultiSelect"],function(t,e,i,a,n,l,o,r,s,c,h,u,d,p,g,m,f,T){
return t("pentaho.common.FilterDialog",[d,i,a],{templateString:g,filterType:"PICKLIST",
currentFilter:null,hasCloseIcon:!1,buttons:["Ok_txt","Cancel_txt"],searchListLimit:500,
_reauthenticateCallback:null,_preSaveCallback:void 0,_onSuccessCallback:void 0,_onCancelCallback:void 0,
errorDialog:void 0,_numericFormatRegex:/[^0-9.]/g,postMixInProperties:function(){
this.inherited(arguments)},postCreate:function(){this.inherited(arguments),m.addUrlBundle("pentaho.common",CONTEXT_PATH+"i18n?plugin=common-ui&name=resources/web/dojo/pentaho/common/nls/messages"),
this.picklistCombinationTypeIncludeOption.setAttribute("value",pentaho.pda.Column.OPERATOR_TYPES.AND),
this.picklistCombinationTypeExcludeOption.setAttribute("value",pentaho.pda.Column.OPERATOR_TYPES.AND_NOT),
this.callbacks=[r.hitch(this,this.save),r.hitch(this,this.cancel)],this.errorDialog.setButtons([this.getLocaleString("Ok_txt")]),
this.errorDialog.callbacks=[r.hitch(this,function(){this.errorDialog.hide()})]},_createNumericFormatRegex:function(t){
return new RegExp(t,"g")},setDecimalSeparator:function(t){this._numericFormatRegex=this._createNumericFormatRegex("[^0-9"+t+"]");
},onCancel:function(){this.cancel()},_localize:function(){this.inherited(arguments);
var t=this.getLocaleString("filterDialogDecimalSeparator");void 0!==t&&"filterDialogDecimalSeparator"!==t&&this.setDecimalSeparator(t),
this.typePicklistSpan.innerHTML=this.getLocaleString("filterDialogTypePicklistSpan_content"),
this.typeMatchSpan.innerHTML=this.getLocaleString("filterDialogTypeMatchSpan_content"),
this.typeDateRangeSpan.innerHTML=this.getLocaleString("filterDialogTypeDateRangeSpan_content"),
this.picklistHeadingSpan.innerHTML=this.getLocaleString("filterDialogPicklistHeadingSpan_content"),
this.picklistFindButton.innerHTML=this.getLocaleString("filterDialogFindButton_content"),
this.picklistAddSelected.title=this.getLocaleString("filterDialogAddSelected_title"),
this.picklistRemoveSelected.title=this.getLocaleString("filterDialogRemoveSelected_title"),
this.picklistAddAll.title=this.getLocaleString("filterDialogAddAll_title"),this.picklistRemoveAll.title=this.getLocaleString("filterDialogRemoveAll_title"),
this.parameterNameLabel.innerHTML=this.getLocaleString("filterDialogParameterName_content"),
this.typePicklistCombinationTypeLinksIncludeLink.innerHTML=this.getLocaleString("filterDialogTypePicklistCombinationTypeLinksIncludeLink_content"),
this.typePicklistCombinationTypeLinksExcludeLink.innerHTML=this.getLocaleString("filterDialogTypePicklistCombinationTypeLinksExcludeLink_content"),
this.picklistCombinationTypeIncludeOption.text=this.getLocaleString("filterDialogTypePicklistCombinationTypeIncluded_content"),
this.picklistCombinationTypeExcludeOption.text=this.getLocaleString("filterDialogTypePicklistCombinationTypeExcluded_content"),
this.picklistCombinationTypeSpan.innerHTML=this.getLocaleString("filterDialogTypePicklistCombinationType_label"),
this.matchFieldName.innerHTML=this.getLocaleString("filterDialogFieldName_content"),
this.dateRangeFieldName.innerHTML=this.getLocaleString("filterDialogFieldName_content"),
this.dateRangeBetweenSeparatorSpan.innerHTML=this.getLocaleString("dateRangeBetweenSeparatorSpan_content"),
this.fieldPicklistSpan.innerHTML=this.getLocaleString("filterDialogFieldPicklistSpan_content");
},_filterTypeChanged:function(t){this.setFilterType(t.target.value)},_setInclusivePicklistFilter:function(t){
this._setPicklistCombinationTypeLink(pentaho.pda.Column.OPERATOR_TYPES.AND),this.picklistCombinationType.options[0].selected=!0;
},_setExclusivePicklistFilter:function(t){this._setPicklistCombinationTypeLink(pentaho.pda.Column.OPERATOR_TYPES.AND_NOT),
this.picklistCombinationType.options[1].selected=!0},configureFor:function(t){this.currentFilter=t,
this.currentColumn=this.datasource.getColumnById(this.currentFilter.column),this.title=this.getLocaleString("FilterDialogTitle")+" "+this.currentColumn.name,
this.picklistLoaded=!1,this.configureFilterTypesFor(this.currentColumn.dataType),
"IN"===this.currentFilter.operator?this.setFilterType("PICKLIST"):this.setFilterType("MATCH"),
this._initParameterUI()},registerPreSaveCallback:function(t){this._preSaveCallback=t;
},registerReauthenticateCallback:function(t){this._reauthenticateCallback=t},registerOnSuccessCallback:function(t){
this._onSuccessCallback=t},registerOnCancelCallback:function(t){this._onCancelCallback=t;
},setDatasource:function(t){this.datasource=t},setSearchListLimit:function(t){this.searchListLimit=t;
},enableFieldSelection:function(t){t?(s.remove(this.fieldPicklistContainer,"filterDialogHidden"),
this.configureFilterTypesFor(null),this.setFilterType(null),this.title=this.getLocaleString("FilterDialogTitle")):s.add(this.fieldPicklistContainer,"filterDialogHidden");
},setFieldList:function(t){this.picklistFields.length=0,this.fieldList=t;var e=this.picklistFields,i=new Option("");
e.options[0]=i;for(var a=0;a<t.length;a++)i=new Option(t[a].name,t[a].id),i.title=t[a].name,
e.options[e.length]=i},_fieldChanged:function(){var t=this.picklistFields.selectedIndex,e=this.fieldList[t-1];
this.configureFilterTypesFor(null),this.setFilterType(null);var i={column:e.id,value:null,
combinationType:pentaho.pda.Column.OPERATOR_TYPES.AND,operator:pentaho.pda.Column.CONDITION_TYPES.EQUAL
};this.title=this.getLocaleString("FilterDialogTitle")+" "+e.name,this.setTitle(this.title),
i.value=[],this.configureFor(i)},configureFilterTypesFor:function(t){switch(t){case null:
s.add(this.typePicklistContainer,"filterDialogHidden"),s.add(this.typeMatchContainer,"filterDialogHidden"),
s.add(this.typeDateRangeContainer,"filterDialogHidden");break;case pentaho.pda.Column.DATA_TYPES.UNKNOWN:
case pentaho.pda.Column.DATA_TYPES.STRING:s.remove(this.typePicklistContainer,"filterDialogHidden"),
s.remove(this.typeMatchContainer,"filterDialogHidden"),s.add(this.typeDateRangeContainer,"filterDialogHidden");
break;case pentaho.pda.Column.DATA_TYPES.NUMERIC:case pentaho.pda.Column.DATA_TYPES.DATE:
s.add(this.typePicklistContainer,"filterDialogHidden"),s.remove(this.typeMatchContainer,"filterDialogHidden"),
s.add(this.typeDateRangeContainer,"filterDialogHidden");break;case pentaho.pda.Column.DATA_TYPES.BOOLEAN:
s.add(this.typePicklistContainer,"filterDialogHidden"),s.add(this.typeMatchContainer,"filterDialogHidden"),
s.add(this.typeDateRangeContainer,"filterDialogHidden");break;default:this.showErrorDialog(this.getLocaleString("filterDialogUnknownDataType")+t),
s.add(this.typePicklistContainer,"filterDialogHidden"),s.add(this.typeMatchContainer,"filterDialogHidden"),
s.add(this.typeDateRangeContainer,"filterDialogHidden")}},setFilterType:function(t){
switch(s.remove(this.parameterContainer,"filterDialogHidden"),t){case null:s.add(this.picklistContainer,"filterDialogHidden"),
s.add(this.matchContainer,"filterDialogHidden"),s.add(this.dateRangeContainer,"filterDialogHidden");
break;case"PICKLIST":dojo.attr(this.typePicklistInput,"checked",!0),s.remove(this.picklistContainer,"filterDialogHidden"),
s.add(this.matchContainer,"filterDialogHidden"),s.add(this.dateRangeContainer,"filterDialogHidden"),
this._configurePicklistContainer();break;case"MATCH":dojo.attr(this.typeMatchInput,"checked",!0),
s.add(this.picklistContainer,"filterDialogHidden"),s.remove(this.matchContainer,"filterDialogHidden"),
s.add(this.dateRangeContainer,"filterDialogHidden"),this._configureMatchContainer();
break;default:return void("undefined"!=typeof console&&console.log("Unknown filter type: "+t));
}this.filterType=t},_initParameterUI:function(){this.currentFilter.parameterName?this.parameterNameInput.set("value",this.currentFilter.parameterName):this.parameterNameInput.set("value","");
},save:function(){this._preSaveCallback?this._preSaveCallback.call(this,this,this.currentFilter,this._save.bind(this)):this._save();
},_save:function(){switch(this.filterType){case"PICKLIST":if(!this._savePicklistContainer())return!1;
break;case"MATCH":if(!this._saveMatchContainer())return!1;break;default:return void("undefined"!=typeof console&&console.log("Unknown filter type: "+type));
}this._scrubFilterValues(this.currentFilter);var t=this.getParameterName();if(t?this.currentFilter.parameterName=t:this.currentFilter.parameterName=null,
this._onSuccessCallback)try{this._onSuccessCallback(this.currentFilter)}catch(e){
"undefined"!=typeof console&&console.warn("Error in onSuccessCallback of Filter Dialog: "+e);
}return this.hide(),!0},getParameterName:function(){var t=this.parameterNameInput.get("value");
return t&&(t=r.trim(t).replace(/[^a-zA-Z0-9 ]/g,"")),t.length>0?t:void 0},cancel:function(){
if(this._onCancelCallback)try{this._onCancelCallback(this.currentFilter)}catch(t){
"undefined"!=typeof console&&console.warn("Error in onCancelCallback of Filter Dialog: "+t);
}this.hide()},_configurePicklistContainer:function(){n.empty(this.picklistUsedValues.domNode),
this.picklistCombinationType.setAttribute("value",this.currentFilter.combinationType),
this.currentFilter.combinationType===pentaho.pda.Column.OPERATOR_TYPES.AND?this.picklistCombinationType.options[0].selected=!0:this.picklistCombinationType.options[1].selected=!0;
var t=this.currentFilter.value instanceof Array?this.currentFilter.value:[this.currentFilter.value],e=0;
c.forEach(t,function(t){if(null!=t){t=this._unescapeAmpIfExist(t);var i=new Option(t,t);
i.title=t,this.picklistUsedValues.containerNode.options[e++]=i}},this),1!=this.picklistLoaded&&(this.picklistFindInput.set("value",""),
this.filterPicklist(""))},_flagPicklistAvailableValuesLoading:function(){n.empty(this.picklistAvailableValues.domNode);
var t=this.getLocaleString("filterDialogPicklistLoadingMessage");this.picklistAvailableValues.containerNode.options[0]=new Option(t,t);
},_updatePicklistAvailableValues:function(t){n.empty(this.picklistAvailableValues.domNode),
c.forEach(t,function(t,e){t=this._unescapeAmpIfExist(t),this.picklistAvailableValues.containerNode.options[e]=new Option(t,t),
this.picklistAvailableValues.containerNode.options[e].title=t},this),this.picklistLoaded=!0;
},_unescapeAmpIfExist:function(t){return Array.isArray(t)?t.forEach(function(e,i){
("string"==typeof e||e instanceof String)&&(t[i]=e.replace(/&amp;/g,"&"))}):("string"==typeof t||t instanceof String)&&(t=t.replace(/&amp;/g,"&")),
t},_picklistAddSelected:function(){c.forEach(this.picklistAvailableValues.getSelected(),function(t){
var e=!1;c.some(this.domNode.options,function(i){return i.value===t.value?(e=!0,!0):void 0;
}),e||this.containerNode.appendChild(r.clone(t))},this.picklistUsedValues)},_picklistRemoveSelected:function(){
c.forEach(this.picklistUsedValues.getSelected(),function(t){this.containerNode.removeChild(t);
},this.picklistUsedValues)},_picklistAddAll:function(){this._picklistRemoveAll(),
c.forEach(this.picklistAvailableValues.containerNode.options,function(t){this.containerNode.appendChild(r.clone(t));
},this.picklistUsedValues)},_picklistRemoveAll:function(){n.empty(this.picklistUsedValues.domNode);
},_savePicklistContainer:function(){var t=[];return c.forEach(this.picklistUsedValues.domNode.options,function(e){
t.push(e.value)}),0==t.length?(this.showErrorDialog(this.getLocaleString("filterDialogMissingValueError_title"),this.getLocaleString("filterDialogMissingValueError_message")),
!1):(this.currentFilter.operator=pentaho.pda.Column.CONDITION_TYPES.IN,this.currentFilter.value=t,
this.currentFilter.combinationType=dojo.attr(this.picklistCombinationType,"value"),
!0)},_picklistFindKeyPressed:function(t){t.keyCode===keys.ENTER&&this._filterPicklistByFindInput();
},_filterPicklistByFindInput:function(){var t=this.picklistFindInput.get("value");
this.oldPicklistFindValue!==t&&(this.filterPicklist(t),this.oldPicklistFindValue=t);
},filterPicklist:function(t,e){this._flagPicklistAvailableValuesLoading(),this.datasource.searchColumn(this.currentColumn,t,this.searchListLimit,r.hitch(this,function(i){
this._updatePicklistAvailableValues(null==i?[]:i.resultset),null==i&&this._reauthenticateCallback&&(e?this.showErrorDialog(this.getLocaleString("filterDialogGeneralError_title"),this.getLocaleString("filterDialogGeneralError_message")):this._reauthenticateCallback(r.hitch(this,function(){
this.filterPicklist(t,!0)})))}))},_setPicklistCombinationTypeLink:function(t){"PICKLIST"!=this.filterType&&this.setFilterType("PICKLIST"),
this.picklistCombinationType.setAttribute("value",t)},_isDateType:function(){return this.currentColumn.dataType===pentaho.pda.Column.DATA_TYPES.DATE;
},_matchComparatorChanged:function(){var t=this._isDateType()?this.matchValueInputDate.domNode:this.matchValueInput;
this._matchOperatorRequiresValue()?s.remove(t,"filterDialogHidden"):s.add(t,"filterDialogHidden"),
this.matchComparator.value===pentaho.pda.Column.CONDITION_TYPES.IS_NULL||this.matchComparator.value===pentaho.pda.Column.CONDITION_TYPES.NOT_NULL?s.add(this.parameterContainer,"filterDialogHidden"):s.remove(this.parameterContainer,"filterDialogHidden");
},_matchOperatorRequiresValue:function(){return void 0==pentaho.pda.Column.SINGLE_COMPARATORS[this.matchComparator.value];
},_configureMatchContainer:function(){this.matchFieldName.innerHTML=this.currentColumn.name.concat(":");
var t=this.currentFilter.value instanceof Array?this.currentFilter.value[0]:null;switch(this.currentColumn.dataType){
case pentaho.pda.Column.DATA_TYPES.DATE:this.matchValueInputDate.setValue(f.fromISOString(t)),
s.remove(this.matchValueInputDate.domNode,"filterDialogHidden"),s.add(this.matchValueInput,"filterDialogHidden");
break;case pentaho.pda.Column.DATA_TYPES.NUMERIC:var t="";c.forEach(this.currentFilter.value,function(e){
e.length>0&&(t.length>0&&(t+="|"),t+=e)}),this.matchValueInput.value=t,s.remove(this.matchValueInput,"filterDialogHidden"),
s.add(this.matchValueInputDate.domNode,"filterDialogHidden");break;default:this.matchValueInput.value=null==t?"":t,
s.remove(this.matchValueInput,"filterDialogHidden"),s.add(this.matchValueInputDate.domNode,"filterDialogHidden");
}n.empty(this.matchAggType),c.forEach(this.currentColumn.availableAggregations,function(t,e){
this.options[e]=new Option(pentaho.pda.Column.AGG_TYPES_STRINGS[t],t),this.options[e].title=t;
},this.matchAggType),this.currentFilter.selectedAggType&&(this.matchAggType.value=this.currentFilter.selectedAggType),
n.empty(this.matchComparator);var e=this.currentColumn.dataType===pentaho.pda.Column.DATA_TYPES.UNKNOWN?pentaho.pda.Column.DATA_TYPES.STRING:this.currentColumn.dataType;
c.forEach(pentaho.pda.Column.COMPARATOR[e],function(t,e){this.options[e]=new Option(t[0],t[1]),
this.options[e].title=t[0]},this.matchComparator),this.matchComparator.value=this.currentFilter.operator===pentaho.pda.Column.CONDITION_TYPES.IN?pentaho.pda.Column.CONDITION_TYPES.EQUAL:this.currentFilter.operator,
this._matchComparatorChanged()},_saveMatchContainer:function(){if(this.currentFilter.operator=this.matchComparator.value,
this.currentFilter.selectedAggType=this.matchAggType.value,this.currentFilter.combinationType=pentaho.pda.Column.OPERATOR_TYPES.AND,
this._matchOperatorRequiresValue()){switch(this.currentColumn.dataType){case pentaho.pda.Column.DATA_TYPES.DATE:
var t=this.matchValueInputDate.getValue();null==t?this.currentFilter.value=[""]:this.currentFilter.value=[f.toISOString(t,{
selector:"date"})];break;case pentaho.pda.Column.DATA_TYPES.NUMERIC:if(this.currentFilter.operator===pentaho.pda.Column.CONDITION_TYPES.EQUAL){
var e=[];c.forEach(this.matchValueInput.value.split("|"),function(t){var i=this._scrubNumericValue(t);
i&&""!==i&&e.push(i)},this),this.currentFilter.value=e}else{if(this.matchValueInput.value.indexOf("|")>0)return this.showErrorDialog(this.getLocaleString("filterDialogMissingValueError_title"),this.getLocaleString("filterDialogInvalidNumericError_message")),
!1;this.currentFilter.value=[this._scrubNumericValue(this.matchValueInput.value)];
}break;default:this.currentFilter.value=[this.matchValueInput.value]}var i=!1;if(c.some(this.currentFilter.value,function(t){
return""!==t?(i=!0,!1):void 0}),!i)return this.showErrorDialog(this.getLocaleString("filterDialogMissingValueError_title"),this.getLocaleString("filterDialogMissingValueError_message")),
!1}else this.currentFilter.value=[""];return!0},_scrubNumericValue:function(t){var e=0>t?"-":"";
return e+r.trim(t).replace(this._numericFormatRegex,"")},_scrubFilterValues:function(t){
t.value=c.map(t.value,function(t){return t.replace(/["]/g,"")})},_configureDateRangeContainer:function(){
this.dateRangeFieldName.innerHTML=this.currentColumn.name,this.dateRangeValueInputDate1.value=f.fromISOString(this.currentFilter.value),
this.dateRangeValueInputDate2.value=null},_dateRangeComparatorChanged:function(){
"undefined"!=typeof console&&console.log("_dateRangeComparatorChanged() Not yet implemented");
},buildFilterText:function(t,e){var i=this.datasource.getColumnById(t.column),a=t.operator;
if(t.operator==pentaho.pda.Column.CONDITION_TYPES.IN)switch(t.combinationType){case pentaho.pda.Column.OPERATOR_TYPES.AND:
a=this.getLocaleString("FilterCombinationTypeIn");break;case pentaho.pda.Column.OPERATOR_TYPES.AND_NOT:
a=this.getLocaleString("FilterCombinationTypeNotIn");break;default:"undefined"!=typeof console&&console.log("Unknown filter combination type for IN condition type: "+t.combinationType);
}else{var n=i.dataType==pentaho.pda.Column.DATA_TYPES.UNKNOWN?pentaho.pda.Column.DATA_TYPES.STRING:i.dataType,l=pentaho.pda.Column.COMPARATOR[n];
l&&c.some(l,function(e){return e[1]===t.operator?(a=e[0],!0):void 0})}var o="",r=" ";
return t.selectedAggType&&"none"!=t.selectedAggType.toLowerCase()&&(r=" ("+pentaho.pda.Column.AGG_TYPES_STRINGS[t.selectedAggType]+") "),
e?o=this.getLocaleString("FilterTextValueFromPrompt",t.parameterName):void 0!=t.value&&(t.value.length>10?o=t.value.length+" values":c.forEach(t.value,function(t){
o.length>0&&(o+=", "),o+=dojox.html.entities.encode(t)},this)),i.name+r+a+" "+o},
showErrorDialog:function(t){showErrorDialog(this.getLocaleString("ErrorDialog_title"),t);
},showErrorDialog:function(t,e){this.errorDialog.setTitle(t),this.errorDialog.setMessage(e),
this.errorDialog.show()}})});