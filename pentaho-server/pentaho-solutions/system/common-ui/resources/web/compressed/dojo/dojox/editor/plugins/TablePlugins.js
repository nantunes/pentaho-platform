define(["dojo/_base/declare","dojo/_base/array","dojo/_base/Color","dojo/aspect","dojo/dom-attr","dojo/dom-style","dijit/_editor/_Plugin","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/Dialog","dijit/Menu","dijit/MenuItem","dijit/MenuSeparator","dijit/ColorPalette","dojox/widget/ColorPicker","dojo/text!./resources/insertTable.html","dojo/text!./resources/modifyTable.html","dojo/i18n!./nls/TableDialog","dijit/_base/popup","dijit/popup","dojo/_base/connect","dijit/TooltipDialog","dijit/form/Button","dijit/form/DropDownButton","dijit/form/TextBox","dijit/form/FilteringSelect"],function(t,e,i,o,n,s,a,l,r,d,h,c,u,b,f,g,m,p,v){
function C(t){return new j(t)}dojo.experimental("dojox.editor.plugins.TablePlugins");
var T=t(a,{tablesConnected:!1,currentlyAvailable:!1,alwaysAvailable:!1,availableCurrentlySet:!1,
initialized:!1,tableData:null,shiftKeyDown:!1,editorDomNode:null,undoEnabled:!0,refCount:0,
doMixins:function(){dojo.mixin(this.editor,{getAncestorElement:function(t){return this._sCall("getAncestorElement",[t]);
},hasAncestorElement:function(t){return this._sCall("hasAncestorElement",[t])},selectElement:function(t){
this._sCall("selectElement",[t])},byId:function(t){return dojo.byId(t,this.document);
},query:function(t,e,i){var o=dojo.query(t,e||this.document);return i?o[0]:o}})},
initialize:function(t){this.refCount++,t.customUndo=!0,this.initialized||(this.initialized=!0,
this.editor=t,this.editor._tablePluginHandler=this,t.onLoadDeferred.addCallback(dojo.hitch(this,function(){
this.editorDomNode=this.editor.editNode||this.editor.iframe.document.body.firstChild,
this._myListeners=[dojo.connect(this.editorDomNode,"mouseup",this.editor,"onClick"),dojo.connect(this.editor,"onDisplayChanged",this,"checkAvailable"),dojo.connect(this.editor,"onBlur",this,"checkAvailable"),dojo.connect(this.editor,"_saveSelection",this,function(){
this._savedTableInfo=this.getTableInfo()}),dojo.connect(this.editor,"_restoreSelection",this,function(){
delete this._savedTableInfo})],this.doMixins(),this.connectDraggable()})))},getTableInfo:function(t){
if(this._savedTableInfo)return this._savedTableInfo;if(t&&this._tempStoreTableData(!1),
this.tableData)return this.tableData;var e,i,o,n,s,a,l,r,d;return o=this.editor.getAncestorElement("td"),
o&&(e=o.parentNode),s=this.editor.getAncestorElement("table"),s?(n=dojo.query("td",s),
n.forEach(function(t,e){o==t&&(l=e)}),i=dojo.query("tr",s),i.forEach(function(t,i){
e==t&&(r=i)}),a=n.length/i.length,d={tbl:s,td:o,tr:e,trs:i,tds:n,rows:i.length,cols:a,
tdIndex:l,trIndex:r,colIndex:l%a}):d={},this.tableData=d,this._tempStoreTableData(500),
this.tableData},connectDraggable:function(){dojo.isIE&&(this.editorDomNode.ondragstart=dojo.hitch(this,"onDragStart"),
this.editorDomNode.ondragend=dojo.hitch(this,"onDragEnd"))},onDragStart:function(){
var t=window.event;t.srcElement.id||(t.srcElement.id="tbl_"+(new Date).getTime());
},onDragEnd:function(){var t=window.event,e=t.srcElement,i=e.id,o=this.editor.document;
"table"==e.tagName.toLowerCase()&&setTimeout(function(){var t=dojo.byId(i,o);dojo.removeAttr(t,"align");
},100)},checkAvailable:function(){return this.availableCurrentlySet?this.currentlyAvailable:this.editor?this.alwaysAvailable?!0:(this.currentlyAvailable=this.editor.focused&&(this._savedTableInfo?this._savedTableInfo.tbl:this.editor.hasAncestorElement("table")),
this.currentlyAvailable?this.connectTableKeys():this.disconnectTableKeys(),this._tempAvailability(500),
dojo.publish(this.editor.id+"_tablePlugins",[this.currentlyAvailable]),this.currentlyAvailable):!1;
},_prepareTable:function(t){var e=this.editor.query("td",t);return console.log("prep:",e,t),
e[0].id||e.forEach(function(t,e){t.id||(t.id="tdid"+e+this.getTimeStamp())},this),
e},getTimeStamp:function(){return(new Date).getTime()},_tempStoreTableData:function(t){
t===!0||(t===!1?this.tableData=null:void 0===t?console.warn("_tempStoreTableData must be passed an argument"):setTimeout(dojo.hitch(this,function(){
this.tableData=null}),t))},_tempAvailability:function(t){t===!0?this.availableCurrentlySet=!0:t===!1?this.availableCurrentlySet=!1:void 0===t?console.warn("_tempAvailability must be passed an argument"):(this.availableCurrentlySet=!0,
setTimeout(dojo.hitch(this,function(){this.availableCurrentlySet=!1}),t))},connectTableKeys:function(){
if(!this.tablesConnected){this.tablesConnected=!0;var t=this.editor.iframe?this.editor.document:this.editor.editNode;
this.cnKeyDn=dojo.connect(t,"onkeydown",this,"onKeyDown"),this.cnKeyUp=dojo.connect(t,"onkeyup",this,"onKeyUp"),
this._myListeners.push(dojo.connect(t,"onkeypress",this,"onKeyUp"))}},disconnectTableKeys:function(){
dojo.disconnect(this.cnKeyDn),dojo.disconnect(this.cnKeyUp),this.tablesConnected=!1;
},onKeyDown:function(t){var e=t.keyCode;if(16==e&&(this.shiftKeyDown=!0),9==e){var i=this.getTableInfo();
i.tdIndex=this.shiftKeyDown?i.tdIndex-1:tabTo=i.tdIndex+1,i.tdIndex>=0&&i.tdIndex<i.tds.length?(this.editor.selectElement(i.tds[i.tdIndex]),
this.currentlyAvailable=!0,this._tempAvailability(!0),this._tempStoreTableData(!0),
this.stopEvent=!0):(this.stopEvent=!1,this.onDisplayChanged()),this.stopEvent&&dojo.stopEvent(t);
}},onKeyUp:function(t){var e=t.keyCode;16==e&&(this.shiftKeyDown=!1),(37==e||38==e||39==e||40==e)&&this.onDisplayChanged(),
9==e&&this.stopEvent&&dojo.stopEvent(t)},onDisplayChanged:function(){this.currentlyAvailable=!1,
this._tempStoreTableData(!1),this._tempAvailability(!1),this.checkAvailable()},uninitialize:function(t){
this.editor==t&&(this.refCount--,!this.refCount&&this.initialized&&(this.tablesConnected&&this.disconnectTableKeys(),
this.initialized=!1,dojo.forEach(this._myListeners,function(t){dojo.disconnect(t);
}),delete this._myListeners,delete this.editor._tablePluginHandler,delete this.editor),
this.inherited(arguments))}}),j=t("dojox.editor.plugins.TablePlugins",a,{iconClassPrefix:"editorIcon",
useDefaultCommand:!1,buttonClass:dijit.form.Button,commandName:"",label:"",alwaysAvailable:!1,
undoEnabled:!0,onDisplayChanged:function(t){this.alwaysAvailable||(this.available=t,
this.button.set("disabled",!this.available))},setEditor:function(t){this.editor=t,
this.editor.customUndo=!0,this.inherited(arguments),this._availableTopic=dojo.subscribe(this.editor.id+"_tablePlugins",this,"onDisplayChanged"),
this.onEditorLoaded()},onEditorLoaded:function(){if(this.editor._tablePluginHandler)this.editor._tablePluginHandler.initialize(this.editor);else{
var t=new T;t.initialize(this.editor)}},selectTable:function(){var t=this.getTableInfo();
t&&t.tbl&&this.editor._sCall("selectElement",[t.tbl])},_initButton:function(){this.command=this.name,
this.label=this.editor.commands[this.command]=this._makeTitle(this.command),this.inherited(arguments),
delete this.command,this.connect(this.button,"onClick","modTable"),this.onDisplayChanged(!1);
},modTable:function(t,e){dojo.isIE&&this.editor.focus(),this.begEdit();var i,o,n,s=this.getTableInfo(),a=dojo.isString(t)?t:this.name,l=!1;
switch(a){case"insertTableRowBefore":for(i=s.tbl.insertRow(s.trIndex),n=0;n<s.cols;n++)o=i.insertCell(-1),
o.innerHTML="&nbsp;";break;case"insertTableRowAfter":for(i=s.tbl.insertRow(s.trIndex+1),
n=0;n<s.cols;n++)o=i.insertCell(-1),o.innerHTML="&nbsp;";break;case"insertTableColumnBefore":
s.trs.forEach(function(t){o=t.insertCell(s.colIndex),o.innerHTML="&nbsp;"}),l=!0;break;
case"insertTableColumnAfter":s.trs.forEach(function(t){o=t.insertCell(s.colIndex+1),
o.innerHTML="&nbsp;"}),l=!0;break;case"deleteTableRow":s.tbl.deleteRow(s.trIndex),
console.log("TableInfo:",this.getTableInfo());break;case"deleteTableColumn":s.trs.forEach(function(t){
t.deleteCell(s.colIndex)}),l=!0;break;case"modifyTable":break;case"insertTable":}
l&&this.makeColumnsEven(),this.endEdit()},begEdit:function(){this.editor._tablePluginHandler.undoEnabled&&(this.editor.customUndo?this.editor.beginEditing():this.valBeforeUndo=this.editor.getValue());
},endEdit:function(){if(this.editor._tablePluginHandler.undoEnabled){if(this.editor.customUndo)this.editor.endEditing();else{
var t=this.editor.getValue();this.editor.setValue(this.valBeforeUndo),this.editor.replaceValue(t);
}this.editor.onDisplayChanged()}},makeColumnsEven:function(){setTimeout(dojo.hitch(this,function(){
var t=this.getTableInfo(!0),e=Math.floor(100/t.cols);t.tds.forEach(function(t){dojo.attr(t,"width",e+"%");
})}),10)},getTableInfo:function(t){return this.editor._tablePluginHandler.getTableInfo(t);
},_makeTitle:function(t){this._strings=dojo.i18n.getLocalization("dojox.editor.plugins","TableDialog");
var e=this._strings[t+"Title"]||this._strings[t+"Label"]||t;return e},getSelectedCells:function(){
var t=[],e=this.getTableInfo().tbl;this.editor._tablePluginHandler._prepareTable(e);
var i=this.editor,o=i._sCall("getSelectedHtml",[null]),n=o.match(/id="*\w*"*/g);if(dojo.forEach(n,function(e){
var o=e.substring(3,e.length);'"'==o.charAt(0)&&'"'==o.charAt(o.length-1)&&(o=o.substring(1,o.length-1));
var n=i.byId(o);n&&"td"==n.tagName.toLowerCase()&&t.push(n)},this),!t.length){var s=dijit.range.getSelection(i.window);
if(s.rangeCount)for(var a=s.getRangeAt(0),l=a.startContainer;l&&l!=i.editNode&&l!=i.document;){
if(1===l.nodeType){var r=l.tagName?l.tagName.toLowerCase():"";if("td"===r)return[l];
}l=l.parentNode}}return t},updateState:function(){this.button&&(!this.available&&!this.alwaysAvailable||this.get("disabled")?this.button.set("disabled",!0):this.button.set("disabled",!1));
},destroy:function(){this.inherited(arguments),dojo.unsubscribe(this._availableTopic),
this.editor._tablePluginHandler.uninitialize(this.editor)}}),y=t(j,{constructor:function(){
this.connect(this,"setEditor",function(t){t.onLoadDeferred.addCallback(dojo.hitch(this,function(){
this._createContextMenu()})),this.button.domNode.style.display="none"})},destroy:function(){
this.menu&&(this.menu.destroyRecursive(),delete this.menu),this.inherited(arguments);
},_initButton:function(){this.inherited(arguments),"tableContextMenu"===this.name&&(this.button.domNode.display="none");
},_createContextMenu:function(){var t=new c({targetNodeIds:[this.editor.iframe]}),e=v;
t.addChild(new u({label:e.selectTableLabel,onClick:dojo.hitch(this,"selectTable")
})),t.addChild(new b),t.addChild(new u({label:e.insertTableRowBeforeLabel,onClick:dojo.hitch(this,"modTable","insertTableRowBefore")
})),t.addChild(new u({label:e.insertTableRowAfterLabel,onClick:dojo.hitch(this,"modTable","insertTableRowAfter")
})),t.addChild(new u({label:e.insertTableColumnBeforeLabel,onClick:dojo.hitch(this,"modTable","insertTableColumnBefore")
})),t.addChild(new u({label:e.insertTableColumnAfterLabel,onClick:dojo.hitch(this,"modTable","insertTableColumnAfter")
})),t.addChild(new b),t.addChild(new u({label:e.deleteTableRowLabel,onClick:dojo.hitch(this,"modTable","deleteTableRow")
})),t.addChild(new u({label:e.deleteTableColumnLabel,onClick:dojo.hitch(this,"modTable","deleteTableColumn")
})),this.menu=t}}),w=t("dojox.editor.plugins.EditorTableDialog",[h,r,d],{baseClass:"EditorTableDialog",
templateString:m,postMixInProperties:function(){dojo.mixin(this,v),this.inherited(arguments);
},postCreate:function(){dojo.addClass(this.domNode,this.baseClass),this.inherited(arguments);
},onInsert:function(){console.log("insert");for(var t=this.selectRow.get("value")||1,e=this.selectCol.get("value")||1,i=this.selectWidth.get("value"),o=this.selectWidthType.get("value"),n=this.selectBorder.get("value"),s=this.selectPad.get("value"),a=this.selectSpace.get("value"),l="tbl_"+(new Date).getTime(),r='<table id="'+l+'"width="'+i+("percent"==o?"%":"")+'" border="'+n+'" cellspacing="'+a+'" cellpadding="'+s+'">\n',d=0;t>d;d++){
r+="	<tr>\n";for(var h=0;e>h;h++)r+='		<td width="'+Math.floor(100/e)+'%">&nbsp;</td>\n';
r+="	</tr>\n"}r+="</table><br />";var c=dojo.connect(this,"onHide",function(){dojo.disconnect(c);
var t=this;setTimeout(function(){t.destroyRecursive()},10)});this.hide(),this.onBuildTable({
htmlText:r,id:l})},onCancel:function(){var t=dojo.connect(this,"onHide",function(){
dojo.disconnect(t);var e=this;setTimeout(function(){e.destroyRecursive()},10)})},
onBuildTable:function(t){}}),_=t("dojox.editor.plugins.InsertTable",j,{alwaysAvailable:!0,
modTable:function(){var t=new w({});t.show();var e=dojo.connect(t,"onBuildTable",this,function(t){
dojo.disconnect(e),this.editor.focus();this.editor.execCommand("inserthtml",t.htmlText);
})}}),k=t([h,r,d],{baseClass:"EditorTableDialog",table:null,tableAtts:{},templateString:p,
postMixInProperties:function(){dojo.mixin(this,v),this.inherited(arguments)},postCreate:function(){
dojo.addClass(this.domNode,this.baseClass),this.inherited(arguments);var t=new this.colorPicker({
params:this.params});this.connect(t,"onChange",function(e){this._started&&(dijit.popup.close(t),
this.setBrdColor(e))}),this.connect(t,"onBlur",function(){dijit.popup.close(t)}),
this.connect(this.borderCol,"click",function(){t.set("value",this.brdColor,!1),dijit.popup.open({
popup:t,around:this.borderCol}),t.focus()});var e=new this.colorPicker({params:this.params
});this.connect(e,"onChange",function(t){this._started&&(dijit.popup.close(e),this.setBkColor(t));
}),this.connect(e,"onBlur",function(){dijit.popup.close(e)}),this.connect(this.backgroundCol,"click",function(){
e.set("value",this.bkColor,!1),dijit.popup.open({popup:e,around:this.backgroundCol
}),e.focus()}),this.own(t,e),this.pickers=[t,e],this.setBrdColor(s.get(this.table,"borderColor")),
this.setBkColor(s.get(this.table,"backgroundColor"));var i=n.get(this.table,"width");
i||(i=this.table.style.width);var o="pixels";dojo.isString(i)&&i.indexOf("%")>-1&&(o="percent",
i=i.replace(/%/,"")),i?(this.selectWidth.set("value",i),this.selectWidthType.set("value",o)):(this.selectWidth.set("value",""),
this.selectWidthType.set("value","percent")),this.selectBorder.set("value",n.get(this.table,"border")),
this.selectPad.set("value",n.get(this.table,"cellPadding")),this.selectSpace.set("value",n.get(this.table,"cellSpacing")),
this.selectAlign.set("value",n.get(this.table,"align"))},startup:function(){e.forEach(this.pickers,function(t){
t.startup()}),this.inherited(arguments)},setBrdColor:function(t){this.brdColor=t,
s.set(this.borderCol,"backgroundColor",t)},setBkColor:function(t){this.bkColor=t,
s.set(this.backgroundCol,"backgroundColor",t)},onSet:function(){s.set(this.table,"borderColor",this.brdColor),
s.set(this.table,"backgroundColor",this.bkColor),this.selectWidth.get("value")&&(s.set(this.table,"width",""),
n.set(this.table,"width",this.selectWidth.get("value")+("pixels"==this.selectWidthType.get("value")?"":"%"))),
n.set(this.table,"border",this.selectBorder.get("value")),n.set(this.table,"cellPadding",this.selectPad.get("value")),
n.set(this.table,"cellSpacing",this.selectSpace.get("value")),n.set(this.table,"align",this.selectAlign.get("value"));
var t=dojo.connect(this,"onHide",function(){dojo.disconnect(t);var e=this;setTimeout(function(){
e.destroyRecursive()},10)});this.hide()},onCancel:function(){var t=dojo.connect(this,"onHide",function(){
dojo.disconnect(t);var e=this;setTimeout(function(){e.destroyRecursive()},10)})},
onSetTable:function(t){}}),D=t("dojox.editor.plugins.ModifyTable",j,{colorPicker:f,
modTable:function(){if(this.editor._tablePluginHandler.checkAvailable()){var t=this.getTableInfo(),e=new k({
table:t.tbl,colorPicker:"string"==typeof this.colorPicker?require(this.colorPicker):this.colorPicker,
params:this.params});e.show(),this.connect(e,"onSetTable",function(t){var e=this.getTableInfo();
s.set(e.td,"backgroundColor",t)})}}}),E=t([l,r,d],{colorPicker:g,templateString:"<div style='display: none; position: absolute; top: -10000; z-index: -10000'><div dojoType='dijit.TooltipDialog' dojoAttachPoint='dialog' class='dojoxEditorColorPicker'><div dojoAttachPoint='_colorPicker'></div><div style='margin: 0.5em 0em 0em 0em'><button dojoType='dijit.form.Button' type='submit' dojoAttachPoint='_setButton'>${buttonSet}</button>&nbsp;<button dojoType='dijit.form.Button' type='button' dojoAttachPoint='_cancelButton'>${buttonCancel}</button></div></div></div>",
widgetsInTemplate:!0,constructor:function(){dojo.mixin(this,v)},postCreate:function(){
var t="string"==typeof this.colorPicker?require(this.colorPicker):this.colorPicker;
this._colorPicker=new t({params:this.params},this._colorPicker)},startup:function(){
this._started||(this.inherited(arguments),this.connect(this.dialog,"execute",function(){
this.onChange(this.get("value"))}),this.connect(this._cancelButton,"onClick",function(){
dijit.popup.close(this.dialog)}),this.connect(this.dialog,"onCancel","onCancel"),
dojo.style(this.domNode,"display","block"))},_setValueAttr:function(t,e){this._colorPicker.set("value",t,e);
},_getValueAttr:function(){return this._colorPicker.get("value")},onChange:function(t){},
onCancel:function(){}}),x=t("dojox.editor.plugins.ColorTableCell",j,{colorPicker:g,
constructor:function(){this.closable=!0,this.buttonClass=dijit.form.DropDownButton;
var t,e=this,n={colorPicker:this.colorPicker,params:this.params};this.dropDown?(t=this.dropDown,
t.set(n)):(t=new E(n),t.startup(),this.dropDown=t.dialog),this.connect(t,"onChange",function(t){
this.editor.focus(),this.modTable(null,t)}),this.connect(t,"onCancel",function(){
this.editor.focus()}),o.before(this.dropDown,"onOpen",function(){var o=e.getTableInfo(),n=e.getSelectedCells(o.tbl);
if(n&&n.length>0){for(var s,a=n[0]===e.lastObject?n[0]:n[n.length-1];a&&a!==e.editor.document&&("transparent"===(s=dojo.style(a,"backgroundColor"))||0===s.indexOf("rgba"));)a=a.parentNode;
"transparent"!==s&&0!==s.indexOf("rgba")&&t.set("value",i.fromString(s).toHex())}
}),this.connect(this,"setEditor",function(t){t.onLoadDeferred.addCallback(dojo.hitch(this,function(){
this.connect(this.editor.editNode,"onmouseup",function(t){this.lastObject=t.target;
})}))})},_initButton:function(){this.command=this.name,this.label=this.editor.commands[this.command]=this._makeTitle(this.command),
this.inherited(arguments),delete this.command,this.onDisplayChanged(!1)},modTable:function(t,e){
this.begEdit();var i=this.getTableInfo(),o=this.getSelectedCells(i.tbl);dojo.forEach(o,function(t){
dojo.style(t,"backgroundColor",e)}),this.endEdit()}});return a.registry.insertTableRowBefore=C,
a.registry.insertTableRowAfter=C,a.registry.insertTableColumnBefore=C,a.registry.insertTableColumnAfter=C,
a.registry.deleteTableRow=C,a.registry.deleteTableColumn=C,a.registry.colorTableCell=function(t){
return new x(t)},a.registry.modifyTable=function(t){return new D(t)},a.registry.insertTable=function(t){
return new _(t)},a.registry.tableContextMenu=function(t){return new y(t)},j});