define("cde/components/ExportButtonComponent/ExportButtonComponent",["cdf/components/BaseComponent","cdf/dashboard/Utils","cdf/Logger","cdf/lib/jquery","css!./ExportButtonComponent"],function(e,t,o,n){
return e.extend({ph:void 0,tc:void 0,queryObjectNames:{queryState:null,query:null
},update:function(){var e=this;n.extend(e.options,e),e.ph=n("#"+e.htmlObject),e.ph.empty();
var r=n('<span class="exportButton"></span>').appendTo(e.ph),a=(0==e.componentName.indexOf("render_")?"":"render_")+e.componentName,p=e.dashboard.getComponentByName(a),i=t.propertiesArrayToObject(e.parameters);
r.text(e.label).click(function(){var t=!1;for(var n in e.queryObjectNames)if(p[n]){
p[n].exportData(e.outputType,i,e.getFilterSettings(p)),t=!0;break}t||o.log(e.name+": could not find a query object on "+e.compName);
})},getFilterSettings:function(e){var t={exportPage:this.exportPage};if("TableComponent"==e.type){
var o=e.ph.dataTableSettings[0];if(o.oFeatures.bFilter){var n=e.ph.find("input").filter("[type=search]");
if(n&&(t.dtFilter=n.val(),o.aoColumns)){for(var r=[],a=0;a<o.aoColumns.length;a++)o.aoColumns[a].bSearchable&&r.push(a);
t.dtSearchableColumns=r.join(",")}}}return t}})}),define("cde/components/ExportButtonComponent",["cde/components/ExportButtonComponent/ExportButtonComponent"],function(e){
return e});