define(["../Logger","../dashboard/Utils","amd!../lib/underscore","./UnmanagedComponent","../dashboard/Sprintf","../lib/jquery","amd!../lib/datatables","../addIns/colTypes","css!./TableComponent"],function(Logger,Utils,_,UnmanagedComponent,sprintf,$){
void 0!=$.fn.dataTableExt&&($.fn.dataTableExt.oApi.fnLengthChange=function(t,a){t._iDisplayLength=a,
t.oApi._fnCalculateEnd(t),t._iDisplayEnd==t.aiDisplay.length&&(t._iDisplayStart=t._iDisplayEnd-t._iDisplayLength,
t._iDisplayStart<0&&(t._iDisplayStart=0)),-1==t._iDisplayLength&&(t._iDisplayStart=0),
t.oApi._fnDraw(t),$("select",t.oFeatures.l).val(a)},$.extend($.fn.dataTableExt.oSort,{
"html-asc":function(t,a){var e=t.replace(/<.*?>/g,"").toLowerCase(),n=a.replace(/<.*?>/g,"").toLowerCase();
return n>e?-1:e>n?1:0},"html-desc":function(t,a){var e=t.replace(/<.*?>/g,"").toLowerCase(),n=a.replace(/<.*?>/g,"").toLowerCase();
return n>e?1:e>n?-1:0},"date-asc":function(t,a){var e=Date.parse(t),n=Date.parse(a);
return(isNaN(e)||""===e)&&(e=Date.parse("01/01/1970 00:00:00")),(isNaN(n)||""===n)&&(n=Date.parse("01/01/1970 00:00:00")),
e-n},"date-desc":function(t,a){var e=Date.parse(t),n=Date.parse(a);return(isNaN(e)||""===e)&&(e=Date.parse("01/01/1970 00:00:00")),
(isNaN(n)||""===n)&&(n=Date.parse("01/01/1970 00:00:00")),n-e},"numeric-asc":function(t,a){
return t="-"==t||""==t?0:$.isNumeric(t)?1*t:0,a="-"==a||""==a?0:$.isNumeric(a)?1*a:0,
a>t?-1:t>a?1:0},"numeric-desc":function(t,a){return t="-"==t||""==t?0:$.isNumeric(t)?1*t:0,
a="-"==a||""==a?0:$.isNumeric(a)?1*a:0,a>t?1:t>a?-1:0}})),void 0!=$.fn.DataTable&&void 0!=$.fn.DataTable.ext&&($.extend($.fn.DataTable.ext.classes,{
sNoFooter:"",sPagePrevEnabled:"paginate_enabled_previous",sPagePrevDisabled:"paginate_disabled_previous",
sPageNextEnabled:"paginate_enabled_next",sPageNextDisabled:"paginate_disabled_next"
}),$.extend($.fn.DataTable.ext.oJUIClasses,{sNoFooter:"",sSortable:"",sSortAsc:"",
sSortDesc:"",sSortColumn:"",sPagePrevEnabled:"fg-button ui-button ui-state-default ui-corner-left",
sPagePrevDisabled:"fg-button ui-button ui-state-default ui-corner-left ui-state-disabled",
sPageNextEnabled:"fg-button ui-button ui-state-default ui-corner-right",sPageNextDisabled:"fg-button ui-button ui-state-default ui-corner-right ui-state-disabled",
sPageJUINext:"ui-icon ui-icon-circle-arrow-e",sPageJUIPrev:"ui-icon ui-icon-circle-arrow-w"
}),$.extend($.fn.DataTable.ext.pager,{two_button:{fnInit:function(t,a,e){var n=(t.oLanguage.oPaginate,
t.oClasses,function(a){t.oApi._fnPageChange(t,a.data.action)&&e(t)}),o=t.bJUI?'<a class="'+t.oClasses.sPagePrevDisabled+'" tabindex="'+t.iTabIndex+'" role="button"><span class="'+t.oClasses.sPageJUIPrev+'"></span></a><a class="'+t.oClasses.sPageNextDisabled+'" tabindex="'+t.iTabIndex+'" role="button"><span class="'+t.oClasses.sPageJUINext+'"></span></a>':'<a class="'+t.oClasses.sPagePrevDisabled+'" tabindex="'+t.iTabIndex+'" role="button"></a><a class="'+t.oClasses.sPageNextDisabled+'" tabindex="'+t.iTabIndex+'" role="button"></a>';
$(a).append(o);var s=$("a",a),i=s[0],r=s[1];t.oApi._fnBindAction(i,{action:"previous"
},n),t.oApi._fnBindAction(r,{action:"next"},n),t.aanFeatures.p||(a.id=t.sTableId+"_paginate",
i.id=t.sTableId+"_previous",r.id=t.sTableId+"_next",i.setAttribute("aria-controls",t.sTableId),
r.setAttribute("aria-controls",t.sTableId))},fnUpdate:function(t,a){if(t.aanFeatures.p)for(var e,n=t.oClasses,o=t.aanFeatures.p,s=0,i=o.length;i>s;s++)e=o[s].firstChild,
e&&(e.className=0===t._iDisplayStart?n.sPagePrevDisabled:n.sPagePrevEnabled,e=e.nextSibling,
e.className=t.fnDisplayEnd()==t.fnRecordsDisplay()?n.sPageNextDisabled:n.sPageNextEnabled);
}}}));var TableComponent=UnmanagedComponent.extend({ph:void 0,update:function(){var t=this;
if(t.preExec()){if(!t.htmlObject)return t.error("TableComponent requires an htmlObject");
try{if(t.isSilent()||t.block(),t.setup(),t.chartDefinition.paginateServerside)t.paginatingUpdate();else{
var a=_.bind(function(a){t.rawData=a,t.processTableComponentResponse(a)},t),e=t.getSuccessHandler(a);
t.queryState.setAjaxOptions({async:!0});var n;void 0!=t.parameters?(n=$.extend(!0,[],t.parameters),
n=_.map(n,function(a){return a[1]=t.dashboard.getParameterValue(a[1]),a})):n=[],t.queryState.fetchData(n,e,t.failureCallback);
}}catch(o){Logger.exception(o),t.isSilent()||t.unblock()}}},paginatingUpdate:function(){
var t=this.chartDefinition;this.extraOptions=this.extraOptions||[],this.extraOptions.push(["bServerSide",!0]),
this.extraOptions.push(["bProcessing",!0]),this.queryState.setPageSize(parseInt(t.displayLength||10));
var a=_.bind(function(t){var a=void 0;"function"==typeof this.postFetch&&(a=this.postFetch(t)),
void 0!=a&&(t=a),this.processTableComponentResponse(t)},this);this.queryState.setCallback(a),
this.parameters&&this.queryState.setParameters(this.parameters),this.queryState.setAjaxOptions({
async:!0}),this.queryState.fetchData(this.parameters,a,this.failureCallback)},setup:function(){
var t=this.chartDefinition;if(void 0==t)return void Logger.log("Fatal - No chart definition passed","error");
"undefined"==typeof t.tableStyle&&(t.tableStyle="bootstrap"===this.dashboard.getWcdfSettings().rendererType?"bootstrap":"classic"),
t.tableId=this.htmlObject+"Table";var a=this;$(this.expandParameters).each(function(t,e){
a.dashboard.setParameter(e[1],"")}),this.ph=this.clearsBeforePreExecution?$("#"+this.htmlObject).empty():$("#"+this.htmlObject);
var e=$.extend({},t);e.drawCallback=void 0,this.queryState=this.dashboard.getQuery(e),
this.query=this.queryState;for(var n=this.chartDefinition.sortBy||[],o=[],s=0;s<n.length;s++){
var i=n[s][0],r=n[s][1];o.push(i+("asc"==r?"A":"D"))}this.queryState.setSortBy(o);
},pagingCallback:function(t,a,e,n,o,s){function i(t){for(var e=0,n=a.length;n>e;e++)if(a[e].name==t)return a[e].value;
return null}var r=i("order"),l=[];if(r&&r.length>0)for(var d=0;d<r.length;d++){var c=r[d].column,p=r[d].dir;
l.push(c+("asc"==p?"A":"D"))}var u=this.queryState,b=this;u.setSortBy(l.join(",")),
u.setPageSize(parseInt(i("length"))),u.setPageStartingAt(i("start")),u.setSearchPattern(i("search")?i("search").value:"");
var h=function(t){if(b.postFetch){var a=b.postFetch(t,n);"undefined"!=typeof a&&(t=a);
}var o;o=t.queryInfo?{iTotalRecords:t.queryInfo.totalRows,iTotalDisplayRecords:t.queryInfo.totalRows
}:{iTotalRecords:t.resultset.length,iTotalDisplayRecords:t.resultset.length},o.aaData=t.resultset,
o.sEcho=i("sEcho"),b.rawData=t,e(o)};s?(u.setCallback(h),h(o)):u.fetchData(h,this.failureCallback);
},fnDrawCallback:function(dataTableSettings){for(var dataTable=dataTableSettings.oInstance,cd=this.chartDefinition,myself=this,tableRows=this.ph.find("tbody tr"),k=0;k<tableRows.length;k++){
if(null==dataTable.fnGetPosition(tableRows[k]))return!0;for(var tableData=$(tableRows[k]).children("td"),i=0;i<tableData.length;i++){
var td=tableData[i],$td=$(td),position=dataTable.fnGetPosition(td);if(position&&"number"==typeof position[0]){
var rowIdx=position[0],colIdx=position[2],foundAddIn=myself.handleAddIns(dataTable,td,$td,rowIdx,colIdx);
if(!foundAddIn&&cd.colFormats){var format=cd.colFormats[colIdx],value=myself.rawData.resultset[rowIdx][colIdx];
format&&"undefined"!=typeof value&&null!==value&&$td.text(sprintf(format,value))}
}}}if(void 0!=cd.urlTemplate){var td=$("#"+myself.htmlObject+" td:nth-child(1)");td.addClass("cdfClickable"),
td.bind("click",function(e){var regex=new RegExp("{"+cd.parameterName+"}","g"),f=cd.urlTemplate.replace(regex,$(this).text());
eval(f)})}"function"==typeof cd.drawCallback&&cd.drawCallback.apply(myself,arguments);
},fnInitComplete:function(){this.postExec(),this.isSilent()||this.unblock()},handleAddIns:function(t,a,e,n,o){
var s=this.chartDefinition,i=s.colTypes[o],r={},l=e,d=this.rawData,c=this.getAddIn("colType",i);
if(!c)return!1;try{if(!l.parents("tbody").length)return;return"TD"!=l.get(0).tagName&&(l=l.closest("td")),
r.rawData=d,r.tableData=t.fnGetData(),r.colIdx=o,r.rowIdx=n,r.series=d.resultset[r.rowIdx][0],
r.category=d.metadata[r.colIdx].colName,r.value=d.resultset[r.rowIdx][r.colIdx],s.colFormats&&(r.colFormat=s.colFormats[r.colIdx]),
r.target=l,c.call(a,r,this.getAddInOptions("colType",c.getName())),!0}catch(p){return Logger.exception(p),
!1}},processTableComponentResponse:function(t){var a=this,e=a.chartDefinition,n={};
a.ph.trigger("cdfTableComponentProcessResponse"),("undefined"==typeof e.colHeaders||0==e.colHeaders.length)&&(e.colHeaders=t.metadata.map(function(t){
return t.colName})),("undefined"==typeof e.colTypes||0==e.colTypes.length)&&(e.colTypes=t.metadata.map(function(t){
return t.colType.toLowerCase()}));var o=TableComponent.getDataTableOptions(e);$.each(a.extraOptions?a.extraOptions:{},function(t,a){
n[a[0]]=a[1]});var s=$.extend(e.dataTableOptions,o,n);if(s.fnDrawCallback=_.bind(a.fnDrawCallback,a),
s.fnInitComplete=_.bind(a.fnInitComplete,a),s.bServerSide){var i=!0;s.fnServerData=function(e,n,o){
a.pagingCallback(e,n,o,this,t,i),i=!1},t.queryInfo||(s.iDisplayLength=t.resultset.length,
s.bLengthChange=!1,Logger.warn("Please use CDA queries to enable server-side pagination."));
}t&&(s.aaData=t.resultset);var r="bootstrap"==s.tableStyle?"table table-striped table-bordered form-inline table-responsive":"tableComponent compact";
a.ph.html("<table id='"+a.htmlObject+"Table' class='"+r+"' width='100%'></table>"),
a.dataTable=$("#"+a.htmlObject+"Table").dataTable(s),a.dataTable.anOpen=[],a.ph.find("table").bind("click",function(t){
if("function"==typeof e.clickAction||a.expandOnClick){var n={},o=$(t.target),s=a.rawData;
if(!o.parents("tbody").length)return;if("TD"!=o.get(0).tagName&&(o=o.closest("td")),
!a.dataTable.api(!0).cell(o.get(0)).index())return void Logger.warn("Click on invalid data detected.");
var i=a.dataTable.fnGetPosition(o.get(0));n.rawData=a.rawData,n.tableData=a.dataTable.fnGetData(),
n.colIdx=i[2],n.rowIdx=i[0],n.series=s.resultset[n.rowIdx][0],n.category=s.metadata[n.colIdx].colName,
n.value=s.resultset[n.rowIdx][n.colIdx],n.colFormat=e.colFormats[n.colIdx],n.target=o,
a.expandOnClick&&a.handleExpandOnClick(n),e.clickAction&&e.clickAction.call(a,n)}
}),a.ph.trigger("cdfTableComponentFinishRendering")},handleExpandOnClick:function(t){
var a=this,e=(a.expandContainerObject,"expandingClass");"undefined"==typeof e&&(e="activeRow");
var n=t.target.closest("tr"),o=t.target.closest("a");if(!o.hasClass("info")){var s=n.get(0),i=a.dataTable.anOpen,r=$.inArray(s,i);
if(n.hasClass(e))a.detachFromRow(s,r,e),$(a.expandParameters).each(function(t,e){
a.dashboard.setParameter(e[1],"")});else{for(var l=0;l<i.length;l++)a.detachFromRow(i[l],l,e);
n.addClass(e),a.attachToRow(s,e);var d=a.queryState.lastResults(),c=null;$(a.expandParameters).each(function(e,n){
c||a.dashboard.getParameterValue(n[1])===d.resultset[t.rowIdx][parseInt(n[0],10)]?a.dashboard.setParameter(n[1],d.resultset[t.rowIdx][parseInt(n[0],10)]):c=n;
}),null!==c&&a.dashboard.fireChange(c[1],d.resultset[t.rowIdx][parseInt(c[0],10)]);
}$("td.expandingClass").click(function(t){t.stopPropagation()})}},attachToRow:function(t,a){
this.dataTable.anOpen.push(t),this.dataTable.fnOpen(t,"",a);var e,n=$(t).next().children().empty();
if(this.expandClone)e=this.expandClone;else{var o="#"+this.expandContainerObject;e=$(o),
this.expandClone=e.clone(!0)}e.appendTo(n).show()},detachFromRow:function(t,a,e){
$(t).next().find("td."+e+" > *").remove(),$(t).removeClass(e),this.dataTable.fnClose(t),
this.dataTable.anOpen.splice(a,1),$(".dataTables_wrapper div.dataTables_paginate").off("click");
}},{getDataTableOptions:function(options){var dtData={};if("themeroller"==options.tableStyle&&(dtData.bJQueryUI=!0),
dtData.bInfo=options.info,dtData.iDisplayLength=options.displayLength,dtData.bLengthChange=options.lengthChange,
dtData.bPaginate=options.paginate,dtData.bSort=options.sort,dtData.bFilter=options.filter,
dtData.sPaginationType=options.paginationType,dtData.sDom=options.sDom,dtData.aaSorting=options.sortBy,
dtData.tableStyle=options.tableStyle,"string"==typeof options.oLanguage?dtData.oLanguage=eval("("+options.oLanguage+")"):dtData.oLanguage=options.oLanguage,
"string"==typeof options.language?dtData.language=eval("("+options.language+")"):dtData.language=options.language,
void 0!=options.colHeaders){dtData.aoColumns=new Array(options.colHeaders.length);
for(var i=0;i<options.colHeaders.length;i++)dtData.aoColumns[i]={},dtData.aoColumns[i].sClass="column"+i;
$.each(options.colHeaders,function(t,a){dtData.aoColumns[t].sTitle=Utils.escapeHtml(a),
""==a&&(dtData.aoColumns[t].bVisible=!1)}),0!=dtData.aoColumns.length&&void 0!=options.colTypes&&$.each(options.colTypes,function(t,a){
if(t>=dtData.aoColumns.length)return!1;var e=dtData.aoColumns[t];"hidden"==a&&(e.bVisible=!1),
e.sClass+=" "+a,e.sType=a}),void 0!=options.colFormats;var bAutoWidth=!0;0!=dtData.aoColumns.length&&void 0!=options.colWidths&&$.each(options.colWidths,function(t,a){
return t>=dtData.aoColumns.length?!1:void(null!=a&&(dtData.aoColumns[t].sWidth=a,
bAutoWidth=!1))}),dtData.bAutoWidth=bAutoWidth,0!=dtData.aoColumns.length&&void 0!=options.colSortable&&$.each(options.colSortable,function(t,a){
return t>=dtData.aoColumns.length?!1:void(null==a||a&&"false"!=a||(dtData.aoColumns[t].bSortable=!1));
}),0!=dtData.aoColumns.length&&void 0!=options.colSearchable&&$.each(options.colSearchable,function(t,a){
return t>=dtData.aoColumns.length?!1:void(null==a||a&&"false"!=a||(dtData.aoColumns[t].bSearchable=!1));
})}return dtData}});return TableComponent});