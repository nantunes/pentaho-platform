var ExportButtonComponent=BaseComponent.extend({ph:void 0,tc:void 0,queryObjectNames:{
queryState:null,query:null},update:function(){var e=this;$.extend(this.options,this),
e.ph=$("#"+e.htmlObject),e.ph.empty();var t=$('<span class="exportButton"></span>').appendTo(e.ph),a=(0==e.componentName.indexOf("render_")?"":"render_")+e.componentName,o=Dashboards.getComponentByName(a),r=Dashboards.propertiesArrayToObject(e.parameters);
t.text(e.label).click(function(){var t=!1;for(n in e.queryObjectNames)if(o[n]){o[n].exportData(e.outputType,r,e.getFilterSettings(o)),
t=!0;break}t||Dashboards.log(e.name+": could not find a query object on "+e.compName);
})},getFilterSettings:function(e){var t={exportPage:this.exportPage};if("Table"==e.type){
var a=e.ph.dataTableSettings[0];if(a.oFeatures.bFilter){var n=e.ph.find("input").filter("[type=search]");
if(n&&(t.dtFilter=n.val(),a.aoColumns)){for(var o=[],r=0;r<a.aoColumns.length;r++)a.aoColumns[r].bSearchable&&o.push(r);
t.dtSearchableColumns=o.join(",")}}}return t}});