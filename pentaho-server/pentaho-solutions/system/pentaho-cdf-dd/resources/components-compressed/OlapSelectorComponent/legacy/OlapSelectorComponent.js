var OlapSelectorComponent=BaseComponent.extend({init:function(){var e=new wd.utils.OlapUtils({
url:Dashboards.getWebAppPath()+wd.helpers.olap.getServiceUrl(),catalog:this.catalog,
cube:this.cube,dimension:this.dimensionName}),t=this.catalog,a=_.find(e.getCatalogs(),function(e){
return e.schema.indexOf(t)>=0});a!==!1&&e.setCatalog(a.name),this.model=new OlapSelectorModel({
olapUtils:e,title:this.title,multiselect:this.multiSelect,parameters:this.getParamValues(this.parameters),
preselected:this.getPreSelValue(this.parameter)}),this.view=new OlapSelectorView({
model:this.model,el:$("#"+this.htmlObject).get(0)})},update:function(){this.isInitialized||(this.init(),
this.isInitialized=!0);var e=this;this.model.on("change:collapsed",function(t,a){
a&&Dashboards.processChange(e.name)}),this.view.render(),e.parameters=e.getParamValues(e.parameters),
e.model.set("parameters",e.parameters)},getValue:function(){return _(this.model.get("values").where({
selected:!0})).map(function(e){return e.get("qualifiedName")})},getParamValues:function(e){
return params=e instanceof Array?Dashboards.propertiesArrayToObject(e):e||{},paramValues={},
_.each(params,function(t,a){t=Dashboards.getParameterValue(t),_.isObject(t)&&(t=JSON.stringify(t)),
"function"==typeof t&&(t=t()),paramValues[a]=t,paramValues.length=e.length}),paramValues;
},getPreSelValue:function(e){var t=Dashboards.getParameterValue(e),a=[];return"undefined"!=typeof t&&t.length>0&&(a=JSON.parse(t),
this.multiSelect||(a=new Array(a[0]))),a}});