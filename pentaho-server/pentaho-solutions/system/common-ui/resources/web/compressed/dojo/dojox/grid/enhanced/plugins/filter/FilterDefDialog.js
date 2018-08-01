define(["dojo/_base/declare","dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/_base/event","dojo/_base/html","dojo/_base/sniff","dojo/keys","dojo/string","dojo/window","dojo/date/locale","./FilterBuilder","../Dialog","dijit/form/ComboBox","dijit/form/TextBox","dijit/form/NumberTextBox","dijit/form/DateTextBox","dijit/form/TimeTextBox","dijit/form/Button","dijit/layout/AccordionContainer","dijit/layout/ContentPane","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/focus","dojox/html/metrics","dijit/a11y","dojo/text!../../templates/FilterDefPane.html","dojo/text!../../templates/CriteriaBox.html","dojo/text!../../templates/FilterBoolValueBox.html","dijit/Tooltip","dijit/form/Select","dijit/form/RadioButton","dojox/html/ellipsis","../../../cells/dijit"],function(e,t,i,n,l,o,s,a,r,u,d,h,c,g,f,_,p,m,C,v,x,b,y,B,T,S,F,O,R,I){
var V={relSelect:60,accordionTitle:70,removeCBoxBtn:-1,colSelect:90,condSelect:95,
valueBox:10,addCBoxBtn:20,filterBtn:30,clearBtn:40,cancelBtn:50},N=e("dojox.grid.enhanced.plugins.filter.AccordionContainer",v,{
nls:null,addChild:function(e,t){var i=arguments[0]=e._pane=new x({content:e});this.inherited(arguments),
this._modifyChild(i)},removeChild:function(e){var t=e,i=!1;if(e._pane&&(i=!0,t=arguments[0]=e._pane),
this.inherited(arguments),i){this._hackHeight(!1,this._titleHeight);var n=this.getChildren();
1===n.length&&o.style(n[0]._removeCBoxBtn.domNode,"display","none")}t.destroyRecursive();
},selectChild:function(e){e._pane&&(arguments[0]=e._pane),this.inherited(arguments);
},resize:function(){this.inherited(arguments),t.forEach(this.getChildren(),this._setupTitleDom);
},startup:function(){this._started||(this.inherited(arguments),7==parseInt(s("ie"),10)&&t.some(this._connects,function(e){
return"onresize"==(e[0]||{})[1]?(this.disconnect(e),!0):void 0},this),t.forEach(this.getChildren(),function(e){
this._modifyChild(e,!0)},this))},_onKeyPress:function(e,t){if(!this.disabled&&!e.altKey&&(t||e.ctrlKey)){
var i=a,n=e.charOrCode,r=o._isBodyLtr(),d=null;if(t&&n==i.UP_ARROW||e.ctrlKey&&n==i.PAGE_UP)d=!1;else if(t&&n==i.DOWN_ARROW||e.ctrlKey&&(n==i.PAGE_DOWN||n==i.TAB))d=!0;else if(n==(r?i.LEFT_ARROW:i.RIGHT_ARROW))d=this._focusOnRemoveBtn?null:!1,
this._focusOnRemoveBtn=!this._focusOnRemoveBtn;else{if(n!=(r?i.RIGHT_ARROW:i.LEFT_ARROW))return;
d=this._focusOnRemoveBtn?!0:null,this._focusOnRemoveBtn=!this._focusOnRemoveBtn}null!==d&&this._adjacent(d)._buttonWidget._onTitleClick(),
l.stop(e),u.scrollIntoView(this.selectedChildWidget._buttonWidget.domNode.parentNode),
s("ie")&&this.selectedChildWidget._removeCBoxBtn.focusNode.setAttribute("tabIndex",this._focusOnRemoveBtn?V.accordionTitle:-1),
T.focus(this.selectedChildWidget[this._focusOnRemoveBtn?"_removeCBoxBtn":"_buttonWidget"].focusNode);
}},_modifyChild:function(e,t){if(e&&this._started){o.style(e.domNode,"overflow","hidden"),
e._buttonWidget.connect(e._buttonWidget,"_setSelectedAttr",function(){this.focusNode.setAttribute("tabIndex",this.selected?V.accordionTitle:"-1");
});var i=this;e._buttonWidget.connect(e._buttonWidget.domNode,"onclick",function(){
i._focusOnRemoveBtn=!1}),(e._removeCBoxBtn=new C({label:this.nls.removeRuleButton,
showLabel:!1,iconClass:"dojoxGridFCBoxRemoveCBoxBtnIcon",tabIndex:V.removeCBoxBtn,
onClick:n.hitch(e.content,"onRemove"),onKeyPress:function(t){i._onKeyPress(t,e._buttonWidget.contentWidget);
}})).placeAt(e._buttonWidget.domNode);var l,s=this.getChildren();if(1===s.length)e._buttonWidget.set("selected",!0),
o.style(e._removeCBoxBtn.domNode,"display","none");else for(l=0;l<s.length;++l)s[l]._removeCBoxBtn&&o.style(s[l]._removeCBoxBtn.domNode,"display","");
if(this._setupTitleDom(e),!this._titleHeight)for(l=0;l<s.length;++l)if(s[l]!=this.selectedChildWidget){
this._titleHeight=o.marginBox(s[l]._buttonWidget.domNode.parentNode).h;break}t||this._hackHeight(!0,this._titleHeight);
}},_hackHeight:function(e,t){var i=this.getChildren(),n=this.domNode,l=o.style(n,"height");
if(e){if(!(i.length>1))return;n.style.height=l+t+"px"}else n.style.height=l-t+"px";
this.resize()},_setupTitleDom:function(e){var t=o.contentBox(e._buttonWidget.titleNode).w;
s("ie")<8&&(t-=8),o.style(e._buttonWidget.titleTextNode,"width",t+"px")}}),A=e("dojox.grid.enhanced.plugins.filter.FilterDefPane",[b,y,B],{
templateString:O,widgetsInTemplate:!0,dlg:null,postMixInProperties:function(){this.plugin=this.dlg.plugin;
var e=this.plugin.nls;this._addRuleBtnLabel=e.addRuleButton,this._cancelBtnLabel=e.cancelButton,
this._clearBtnLabel=e.clearButton,this._filterBtnLabel=e.filterButton,this._relAll=e.relationAll,
this._relAny=e.relationAny,this._relMsgFront=e.relationMsgFront,this._relMsgTail=e.relationMsgTail;
},postCreate:function(){this.inherited(arguments),this.connect(this.domNode,"onkeypress","_onKey"),
(this.cboxContainer=new N({nls:this.plugin.nls})).placeAt(this.criteriaPane),this._relSelect.set("tabIndex",V.relSelect),
this._addCBoxBtn.set("tabIndex",V.addCBoxBtn),this._cancelBtn.set("tabIndex",V.cancelBtn),
this._clearFilterBtn.set("tabIndex",V.clearBtn),this._filterBtn.set("tabIndex",V.filterBtn);
var e=this.plugin.nls;this._relSelect.domNode.setAttribute("aria-label",e.waiRelAll),
this._addCBoxBtn.domNode.setAttribute("aria-label",e.waiAddRuleButton),this._cancelBtn.domNode.setAttribute("aria-label",e.waiCancelButton),
this._clearFilterBtn.domNode.setAttribute("aria-label",e.waiClearButton),this._filterBtn.domNode.setAttribute("aria-label",e.waiFilterButton),
this._relSelect.set("value","logicall"===this.dlg._relOpCls?"0":"1")},uninitialize:function(){
this.cboxContainer.destroyRecursive(),this.plugin=null,this.dlg=null},_onRelSelectChange:function(e){
this.dlg._relOpCls="0"==e?"logicall":"logicany",this._relSelect.domNode.setAttribute("aria-label",this.plugin.nls["0"==e?"waiRelAll":"waiRelAny"]);
},_onAddCBox:function(){this.dlg.addCriteriaBoxes(1)},_onCancel:function(){this.dlg.onCancel();
},_onClearFilter:function(){this.dlg.onClearFilter()},_onFilter:function(){this.dlg.onFilter();
},_onKey:function(e){e.keyCode==a.ENTER&&this.dlg.onFilter()}}),j=e("dojox.grid.enhanced.plugins.filter.CriteriaBox",[b,y,B],{
templateString:R,widgetsInTemplate:!0,dlg:null,postMixInProperties:function(){this.plugin=this.dlg.plugin,
this._curValueBox=null;var e=this.plugin.nls;this._colSelectLabel=e.columnSelectLabel,
this._condSelectLabel=e.conditionSelectLabel,this._valueBoxLabel=e.valueBoxLabel,
this._anyColumnOption=e.anyColumnOption},postCreate:function(){var e=this.dlg,t=this.plugin.grid;
this._colSelect.set("tabIndex",V.colSelect),this._colOptions=this._getColumnOptions(),
this._colSelect.addOption([{label:this.plugin.nls.anyColumnOption,value:"anycolumn",
selected:e.curColIdx<0},{value:""}].concat(this._colOptions)),this._condSelect.set("tabIndex",V.condSelect),
this._condSelect.addOption(this._getUsableConditions(e.getColumnType(e.curColIdx))),
this._showSelectOrLabel(this._condSelect,this._condSelectAlt),this.connect(t.layout,"moveColumn","onMoveColumn");
var i=this;setTimeout(function(){var t=e.getColumnType(e.curColIdx);i._setValueBoxByType(t);
},0)},_getColumnOptions:function(){var e=this.dlg.curColIdx>=0?String(this.dlg.curColIdx):"anycolumn";
return t.map(t.filter(this.plugin.grid.layout.cells,function(e){return!(e.filterable===!1||e.hidden);
}),function(t){return{label:t.name||t.field,value:String(t.index),selected:e==String(t.index)
}})},onMoveColumn:function(){var e=this._onChangeColumn;this._onChangeColumn=function(){};
var t=this._colSelect.get("selectedOptions");this._colSelect.removeOption(this._colOptions),
this._colOptions=this._getColumnOptions(),this._colSelect.addOption(this._colOptions);
for(var i=0;i<this._colOptions.length&&this._colOptions[i].label!=t.label;++i);i<this._colOptions.length&&this._colSelect.set("value",this._colOptions[i].value);
var n=this;setTimeout(function(){n._onChangeColumn=e},0)},onRemove:function(){this.dlg.removeCriteriaBoxes(this);
},uninitialize:function(){this._curValueBox&&(this._curValueBox.destroyRecursive(),
this._curValueBox=null),this.plugin=null,this.dlg=null},_showSelectOrLabel:function(e,t){
var i=e.getOptions();1==i.length?(t.innerHTML=i[0].label,o.style(e.domNode,"display","none"),
o.style(t,"display","")):(o.style(e.domNode,"display",""),o.style(t,"display","none"));
},_onChangeColumn:function(e){this._checkValidCriteria();var t=this.dlg.getColumnType(e);
this._setConditionsByType(t),this._setValueBoxByType(t),this._updateValueBox()},_onChangeCondition:function(e){
this._checkValidCriteria();var t="range"==e;t^this._isRange&&(this._isRange=t,this._setValueBoxByType(this.dlg.getColumnType(this._colSelect.get("value")))),
this._updateValueBox()},_updateValueBox:function(e){this._curValueBox.set("disabled","isempty"==this._condSelect.get("value"));
},_checkValidCriteria:function(){setTimeout(n.hitch(this,function(){this.updateRuleTitle(),
this.dlg._updatePane()}),0)},_createValueBox:function(e,t){var i=n.hitch(t.cbox,"_checkValidCriteria");
return new e(n.mixin(t,{tabIndex:V.valueBox,onKeyPress:i,onChange:i,"class":"dojoxGridFCBoxValueBox"
}))},_createRangeBox:function(e,t){var i=n.hitch(t.cbox,"_checkValidCriteria");n.mixin(t,{
tabIndex:V.valueBox,onKeyPress:i,onChange:i});var l=o.create("div",{"class":"dojoxGridFCBoxValueBox"
}),s=new e(t),a=o.create("span",{"class":"dojoxGridFCBoxRangeValueTxt",innerHTML:this.plugin.nls.rangeTo
}),r=new e(t);return o.addClass(s.domNode,"dojoxGridFCBoxStartValue"),o.addClass(r.domNode,"dojoxGridFCBoxEndValue"),
l.appendChild(s.domNode),l.appendChild(a),l.appendChild(r.domNode),l.domNode=l,l.set=function(e,t){
n.isObject(t)&&(s.set("value",t.start),r.set("value",t.end))},l.get=function(){var e=s.get("value"),t=r.get("value");
return e&&t?{start:e,end:t}:""},l},changeCurrentColumn:function(e){var t=this.dlg.curColIdx;
this._colSelect.removeOption(this._colOptions),this._colOptions=this._getColumnOptions(),
this._colSelect.addOption(this._colOptions),this._colSelect.set("value",t>=0?String(t):"anycolumn"),
this.updateRuleTitle(!0)},curColumn:function(){return this._colSelect.getOptions(this._colSelect.get("value")).label;
},curCondition:function(){return this._condSelect.getOptions(this._condSelect.get("value")).label;
},curValue:function(){var e=this._condSelect.get("value");return"isempty"==e?"":this._curValueBox?this._curValueBox.get("value"):"";
},save:function(){if(this.isEmpty())return null;var e=this._colSelect.get("value"),t=this.dlg.getColumnType(e),i=this.curValue(),n=this._condSelect.get("value");
return{column:e,condition:n,value:i,formattedVal:this.formatValue(t,n,i),type:t,colTxt:this.curColumn(),
condTxt:this.curCondition()}},load:function(e){var t=[this._onChangeColumn,this._onChangeCondition];
this._onChangeColumn=this._onChangeCondition=function(){},e.column&&this._colSelect.set("value",e.column),
e.type?(this._setConditionsByType(e.type),this._setValueBoxByType(e.type)):e.type=this.dlg.getColumnType(this._colSelect.get("value")),
e.condition&&this._condSelect.set("value",e.condition);var i=e.value||"";(i||"date"!=e.type&&"time"!=e.type)&&this._curValueBox.set("value",i),
this._updateValueBox(),setTimeout(n.hitch(this,function(){this._onChangeColumn=t[0],
this._onChangeCondition=t[1]}),0)},getExpr:function(){if(this.isEmpty())return null;
var e=this._colSelect.get("value");return this.dlg.getExprForCriteria({type:this.dlg.getColumnType(e),
column:e,condition:this._condSelect.get("value"),value:this.curValue()})},isEmpty:function(){
var e=this._condSelect.get("value");if("isempty"==e)return!1;var t=this.curValue();
return""===t||null===t||"undefined"==typeof t||"number"==typeof t&&isNaN(t)},updateRuleTitle:function(e){
var t=this._pane._buttonWidget.titleTextNode,i=["<div class='dojoxEllipsis'>"];if(e||this.isEmpty())t.title=r.substitute(this.plugin.nls.ruleTitleTemplate,[this._ruleIndex||1]),
i.push(t.title);else{var n=this.dlg.getColumnType(this._colSelect.get("value")),l=this.curColumn(),a=this.curCondition(),u=this.formatValue(n,this._condSelect.get("value"),this.curValue());
i.push(l,"&nbsp;<span class='dojoxGridRuleTitleCondition'>",a,"</span>&nbsp;",u),
t.title=[l," ",a," ",u].join("")}if(t.innerHTML=i.join(""),s("mozilla")){var d=o.create("div",{
style:"width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 9999;"
},t);d.title=t.title}},updateRuleIndex:function(e){this._ruleIndex!=e&&(this._ruleIndex=e,
this.isEmpty()&&this.updateRuleTitle())},setAriaInfo:function(e){var t=r.substitute,i=this.plugin.nls;
this._colSelect.domNode.setAttribute("aria-label",t(i.waiColumnSelectTemplate,[e])),
this._condSelect.domNode.setAttribute("aria-label",t(i.waiConditionSelectTemplate,[e])),
this._pane._removeCBoxBtn.domNode.setAttribute("aria-label",t(i.waiRemoveRuleButtonTemplate,[e])),
this._index=e},_getUsableConditions:function(e){var i=n.clone(this.dlg._dataTypeMap[e].conditions),l=(this.plugin.args.disabledConditions||{})[e],o=parseInt(this._colSelect.get("value"),10),s=isNaN(o)?(this.plugin.args.disabledConditions||{}).anycolumn:this.plugin.grid.layout.cells[o].disabledConditions;
n.isArray(l)||(l=[]),n.isArray(s)||(s=[]);var a=l.concat(s);if(a.length){var r={};
return t.forEach(a,function(e){n.isString(e)&&(r[e.toLowerCase()]=!0)}),t.filter(i,function(e){
return!(e.value in r)})}return i},_setConditionsByType:function(e){var t=this._condSelect;
t.removeOption(t.options),t.addOption(this._getUsableConditions(e)),this._showSelectOrLabel(this._condSelect,this._condSelectAlt);
},_setValueBoxByType:function(e){if(this._curValueBox){this.valueNode.removeChild(this._curValueBox.domNode);
try{this._curValueBox.destroyRecursive()}catch(t){}delete this._curValueBox}var i=this.dlg._dataTypeMap[e].valueBoxCls[this._getValueBoxClsInfo(this._colSelect.get("value"),e)],n=this._getValueBoxArgByType(e);
this._curValueBox=this[this._isRange?"_createRangeBox":"_createValueBox"](i,n),this.valueNode.appendChild(this._curValueBox.domNode),
this._curValueBox.focusNode.setAttribute("aria-label",r.substitute(this.plugin.nls.waiValueBoxTemplate,[this._index])),
this.dlg.onRendered(this)},_getValueBoxArgByType:function(e){var t=this.plugin.grid,i=t.layout.cells[parseInt(this._colSelect.get("value"),10)],l={
cbox:this};return"string"==e?i&&(i.suggestion||i.autoComplete)&&n.mixin(l,{store:t.store,
searchAttr:i.field||i.name,query:t.query||{},fetchProperties:{sort:[{attribute:i.field||i.name
}],queryOptions:n.mixin({ignoreCase:!0,deep:!0},t.queryOptions||{})}}):"boolean"==e&&n.mixin(l,this.dlg.builder.defaultArgs["boolean"]),
i&&i.dataTypeArgs&&n.mixin(l,i.dataTypeArgs),l},formatValue:function(e,t,i){if("isempty"==t)return"";
if("date"==e||"time"==e){var n={selector:e},l=d.format;return"range"==t?r.substitute(this.plugin.nls.rangeTemplate,[l(i.start,n),l(i.end,n)]):l(i,n);
}return"boolean"==e?i?this._curValueBox._lblTrue:this._curValueBox._lblFalse:i},_getValueBoxClsInfo:function(e,t){
var i=this.plugin.grid.layout.cells[parseInt(e,10)];return"string"==t&&i&&(i.suggestion||i.autoComplete)?"ac":"dft";
}}),w=e("dojox.grid.enhanced.plugins.filter.UniqueComboBox",g,{_openResultList:function(e){
var i={},n=this.store,l=this.searchAttr;arguments[0]=t.filter(e,function(e){var t=n.getValue(e,l),o=i[t];
return i[t]=!0,!o}),this.inherited(arguments)},_onKey:function(e){e.charOrCode===a.ENTER&&this._opened&&l.stop(e),
this.inherited(arguments)}}),D=e("dojox.grid.enhanced.plugins.filter.BooleanValueBox",[b,y,B],{
templateString:I,widgetsInTemplate:!0,constructor:function(e){var t=e.cbox.plugin.nls;
this._baseId=e.cbox.id,this._lblTrue=e.trueLabel||t.trueLabel||"true",this._lblFalse=e.falseLabel||t.falseLabel||"false",
this.args=e},postCreate:function(){this.onChange()},onChange:function(){},get:function(e){
return this.rbTrue.get("checked")},set:function(e,t){this.inherited(arguments),"value"==e&&(this.rbTrue.set("checked",!!t),
this.rbFalse.set("checked",!t))}}),E=e("dojox.grid.enhanced.plugins.filter.FilterDefDialog",null,{
curColIdx:-1,_relOpCls:"logicall",_savedCriterias:null,plugin:null,constructor:function(e){
var t=this.plugin=e.plugin;this.builder=new h,this._setupData(),this._cboxes=[],this.defaultType=t.args.defaultType||"string",
(this.filterDefPane=new A({dlg:this})).startup(),(this._defPane=new c({refNode:this.plugin.grid.domNode,
title:t.nls.filterDefDialogTitle,"class":"dojoxGridFDTitlePane",iconClass:"dojoxGridFDPaneIcon",
content:this.filterDefPane})).startup(),this._defPane.connect(t.grid.layer("filter"),"filterDef",n.hitch(this,"_onSetFilter")),
t.grid.setFilter=n.hitch(this,"setFilter"),t.grid.getFilter=n.hitch(this,"getFilter"),
t.grid.getFilterRelation=n.hitch(this,function(){return this._relOpCls}),t.connect(t.grid.layout,"moveColumn",n.hitch(this,"onMoveColumn"));
},onMoveColumn:function(e,i,n,l,o){if(this._savedCriterias&&n!=l){o&&--l;var s=l>n?n:l,a=l>n?l:n,r=l>s?1:-1;
t.forEach(this._savedCriterias,function(e){var t=parseInt(e.column,10);!isNaN(t)&&t>=s&&a>=t&&(e.column=String(t==n?t+(a-s)*r:t-r));
})}},destroy:function(){this._defPane.destroyRecursive(),this._defPane=null,this.filterDefPane=null,
this.builder=null,this._dataTypeMap=null,this._cboxes=null;var e=this.plugin.grid;
e.setFilter=null,e.getFilter=null,e.getFilterRelation=null,this.plugin=null},_setupData:function(){
var e=this.plugin.nls;this._dataTypeMap={number:{valueBoxCls:{dft:_},conditions:[{
label:e.conditionEqual,value:"equalto",selected:!0},{label:e.conditionNotEqual,value:"notequalto"
},{label:e.conditionLess,value:"lessthan"},{label:e.conditionLessEqual,value:"lessthanorequalto"
},{label:e.conditionLarger,value:"largerthan"},{label:e.conditionLargerEqual,value:"largerthanorequalto"
},{label:e.conditionIsEmpty,value:"isempty"}]},string:{valueBoxCls:{dft:f,ac:w},conditions:[{
label:e.conditionContains,value:"contains",selected:!0},{label:e.conditionIs,value:"equalto"
},{label:e.conditionStartsWith,value:"startswith"},{label:e.conditionEndWith,value:"endswith"
},{label:e.conditionNotContain,value:"notcontains"},{label:e.conditionIsNot,value:"notequalto"
},{label:e.conditionNotStartWith,value:"notstartswith"},{label:e.conditionNotEndWith,
value:"notendswith"},{label:e.conditionIsEmpty,value:"isempty"}]},date:{valueBoxCls:{
dft:p},conditions:[{label:e.conditionIs,value:"equalto",selected:!0},{label:e.conditionBefore,
value:"lessthan"},{label:e.conditionAfter,value:"largerthan"},{label:e.conditionRange,
value:"range"},{label:e.conditionIsEmpty,value:"isempty"}]},time:{valueBoxCls:{dft:m
},conditions:[{label:e.conditionIs,value:"equalto",selected:!0},{label:e.conditionBefore,
value:"lessthan"},{label:e.conditionAfter,value:"largerthan"},{label:e.conditionRange,
value:"range"},{label:e.conditionIsEmpty,value:"isempty"}]},"boolean":{valueBoxCls:{
dft:D},conditions:[{label:e.conditionIs,value:"equalto",selected:!0},{label:e.conditionIsEmpty,
value:"isempty"}]}}},setFilter:function(e,l){e=e||[],n.isArray(e)||(e=[e]);var o=function(){
if(e.length){this._savedCriterias=t.map(e,function(e){var t=e.type||this.defaultType;
return{type:t,column:String(e.column),condition:e.condition,value:e.value,colTxt:this.getColumnLabelByValue(String(e.column)),
condTxt:this.getConditionLabelByValue(t,e.condition),formattedVal:e.formattedVal||e.value
}},this),this._criteriasChanged=!0,("logicall"===l||"logicany"===l)&&(this._relOpCls=l);
var i=t.map(e,this.getExprForCriteria,this);i=this.builder.buildExpression(1==i.length?i[0]:{
op:this._relOpCls,data:i}),this.plugin.grid.layer("filter").filterDef(i),this.plugin.filterBar.toggleClearFilterBtn(!1);
}this._closeDlgAndUpdateGrid()};if(this._savedCriterias){this._clearWithoutRefresh=!0;
var s=i.connect(this,"clearFilter",this,function(){i.disconnect(s),this._clearWithoutRefresh=!1,
o.apply(this)});this.onClearFilter()}else o.apply(this)},getFilter:function(){return n.clone(this._savedCriterias)||[];
},getColumnLabelByValue:function(e){var t=this.plugin.nls;if("anycolumn"==e.toLowerCase())return t.anyColumnOption;
var i=this.plugin.grid.layout.cells[parseInt(e,10)];return i?i.name||i.field:""},
getConditionLabelByValue:function(e,t){for(var i=this._dataTypeMap[e].conditions,n=i.length-1;n>=0;--n){
var l=i[n];if(l.value==t.toLowerCase())return l.label}return""},addCriteriaBoxes:function(e){
if(!("number"!=typeof e||0>=e)){var t,i=this._cboxes,n=this.filterDefPane.cboxContainer,l=this.plugin.args.ruleCount,a=i.length;
for(l>0&&a+e>l&&(e=l-a);e>0;--e)t=new j({dlg:this}),i.push(t),n.addChild(t);if(n.startup(),
this._updatePane(),this._updateCBoxTitles(),n.selectChild(i[i.length-1]),this.filterDefPane.criteriaPane.scrollTop=1e6,
4===i.length)if(s("ie")<=6&&!this.__alreadyResizedForIE6){var r=o.position(n.domNode);
r.w-=S.getScrollbar().w,n.resize(r),this.__alreadyResizedForIE6=!0}else n.resize();
}},removeCriteriaBoxes:function(e,i){var l,o=this._cboxes,s=this.filterDefPane.cboxContainer,a=o.length,r=a-e,u=a-1,d=t.indexOf(o,s.selectedChildWidget.content);
if(n.isArray(e)){var h,c=e;for(c.sort(),e=c.length,h=a-1;h>=0&&t.indexOf(c,h)>=0;--h);
if(h>=0)for(h!=d&&s.selectChild(o[h]),h=e-1;h>=0;--h)c[h]>=0&&c[h]<a&&(s.removeChild(o[c[h]]),
o.splice(c[h],1));r=o.length}else{if(i===!0){if(!(e>=0&&a>e))return;r=u=e,e=1}else if(e instanceof j)l=e,
e=1,r=u=t.indexOf(o,l);else{if("number"!=typeof e||0>=e)return;e>=a&&(e=u,r=1)}if(r>u)return;
for(d>=r&&u>=d&&s.selectChild(o[r?r-1:u+1]);u>=r;--u)s.removeChild(o[u]);o.splice(r,e);
}this._updatePane(),this._updateCBoxTitles(),3===o.length&&s.resize()},getCriteria:function(e){
return"number"!=typeof e?this._savedCriterias?this._savedCriterias.length:0:this._savedCriterias&&this._savedCriterias[e]?n.mixin({
relation:"logicall"==this._relOpCls?this.plugin.nls.and:this.plugin.nls.or},this._savedCriterias[e]):null;
},getExprForCriteria:function(e){if("anycolumn"==e.column){var i=t.filter(this.plugin.grid.layout.cells,function(e){
return!(e.filterable===!1||e.hidden)});return{op:"logicany",data:t.map(i,function(t){
return this.getExprForColumn(e.value,t.index,e.type,e.condition)},this)}}return this.getExprForColumn(e.value,e.column,e.type,e.condition);
},getExprForColumn:function(e,t,i,l){t=parseInt(t,10);var o=this.plugin.grid.layout.cells[t],s=o.field||o.name,a={
datatype:i||this.getColumnType(t),args:o.dataTypeArgs,isColumn:!0},r=[n.mixin({data:this.plugin.args.isServerSide?s:o
},a)];return a.isColumn=!1,"range"==l?r.push(n.mixin({data:e.start},a),n.mixin({data:e.end
},a)):"isempty"!=l&&r.push(n.mixin({data:e},a)),{op:l,data:r}},getColumnType:function(e){
var t=this.plugin.grid.layout.cells[parseInt(e,10)];if(!t||!t.datatype)return this.defaultType;
var i=String(t.datatype).toLowerCase();return this._dataTypeMap[i]?i:this.defaultType;
},clearFilter:function(e){if(this._savedCriterias){this._savedCriterias=null,this.plugin.grid.layer("filter").filterDef(null);
try{this.plugin.filterBar.toggleClearFilterBtn(!0),this.filterDefPane._clearFilterBtn.set("disabled",!0),
this.removeCriteriaBoxes(this._cboxes.length-1),this._cboxes[0].load({})}catch(t){}
e?this.closeDialog():this._closeDlgAndUpdateGrid()}},showDialog:function(e){this._defPane.show(),
this.plugin.filterStatusTip.closeDialog(),this._prepareDialog(e)},closeDialog:function(){
this._defPane.open&&this._defPane.hide()},onFilter:function(e){this.canFilter()&&(this._defineFilter(),
this._closeDlgAndUpdateGrid(),this.plugin.filterBar.toggleClearFilterBtn(!1))},onClearFilter:function(e){
this._savedCriterias&&(this._savedCriterias.length>=this.plugin.ruleCountToConfirmClearFilter?this.plugin.clearFilterDialog.show():this.clearFilter(this._clearWithoutRefresh));
},onCancel:function(e){var i=this._savedCriterias,n=this._cboxes;i?(this.addCriteriaBoxes(i.length-n.length),
this.removeCriteriaBoxes(n.length-i.length),t.forEach(i,function(e,t){n[t].load(e);
})):(this.removeCriteriaBoxes(n.length-1),n[0].load({})),this.closeDialog()},onRendered:function(e){
if(s("ff")){var t=this._defPane;t._getFocusItems(t.domNode),T.focus(t._firstFocusItem);
}else{var i=F._getTabNavigable(o.byId(e.domNode));T.focus(i.lowest||i.first)}},_onSetFilter:function(e){
null===e&&this._savedCriterias&&this.clearFilter()},_prepareDialog:function(e){var n,l,o=this._savedCriterias,s=this._cboxes;
if(this.curColIdx=e,o){if(this._criteriasChanged){this.filterDefPane._relSelect.set("value","logicall"===this._relOpCls?"0":"1"),
this._criteriasChanged=!1;var a=o.length>s.length?o.length-s.length:0;for(this.addCriteriaBoxes(a),
this.removeCriteriaBoxes(s.length-o.length),this.filterDefPane._clearFilterBtn.set("disabled",!1),
n=0;n<s.length-a;++n)s[n].load(o[n]);if(a>0)var r=[],u=i.connect(this,"onRendered",function(e){
var n=t.indexOf(s,e);r[n]||(r[n]=!0,0===--a&&i.disconnect(u),e.load(o[n]))})}}else if(0===s.length)this.addCriteriaBoxes(1);else for(n=0;l=s[n];++n)l.changeCurrentColumn();
this.filterDefPane.cboxContainer.resize()},_defineFilter:function(){var e=this._cboxes,i=function(i){
return t.filter(t.map(e,function(e){return e[i]()}),function(e){return!!e})},n=i("getExpr");
this._savedCriterias=i("save"),n=1==n.length?n[0]:{op:this._relOpCls,data:n},n=this.builder.buildExpression(n),
this.plugin.grid.layer("filter").filterDef(n),this.filterDefPane._clearFilterBtn.set("disabled",!1);
},_updateCBoxTitles:function(){for(var e=this._cboxes,t=e.length;t>0;--t)e[t-1].updateRuleIndex(t),
e[t-1].setAriaInfo(t)},_updatePane:function(){var e=this._cboxes,t=this.filterDefPane;
t._addCBoxBtn.set("disabled",e.length==this.plugin.args.ruleCount),t._filterBtn.set("disabled",!this.canFilter());
},canFilter:function(){return t.filter(this._cboxes,function(e){return!e.isEmpty();
}).length>0},_closeDlgAndUpdateGrid:function(){this.closeDialog();var e=this.plugin.grid;
e.showMessage(e.loadingMessage),setTimeout(n.hitch(e,e._refresh),this._defPane.duration+10);
}});return E});