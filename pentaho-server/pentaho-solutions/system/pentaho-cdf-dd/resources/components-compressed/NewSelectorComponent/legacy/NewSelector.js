var NewSelectorComponent=UnmanagedComponent.extend({pageStart:0,pageSize:54,update:function(){
$.extend(this.options,this),this.ph=$("#"+this.htmlObject).empty();var e=_.bind(this.redraw,this);
if("undefined"!=typeof this.valuesArray&&this.valuesArray.length>0)this.synchronous(e,this.valuesArray);else{
var t=Dashboards.propertiesArrayToObject(this.parameters),s=this.selectorModel?this.selectorModel.get("searchterm"):"";
t[this.searchParam]="'"+s+"'",this.parameters=Dashboards.objectToPropertiesArray(t),
this.triggerQuery(this.chartDefinition,e,{pageSize:this.pageSize})}},values:function(e){
var t=e.resultset,s=e.queryInfo?e.queryInfo.pageStart:0,a=Dashboards.getParameterValue(this.parameter),i=this.chartDefinition.valueAsId,r=[];
return _.isArray(a)||(a=[a]),_.each(t,function(e){var t=e[i?1:0],o={idx:s++,value:t,
label:e[1],selected:!!(1+a.indexOf(t)),"new":!!e[2]};r.push(o)},this),r},redraw:function(e){
var t,s,a=this.values(e),i={title:this.title,pageSize:this.pageSize,pageStart:this.pageStart,
totalRecords:e.queryInfo?e.queryInfo.totalRows:0,multiselect:this.multiselect};t=_.pluck(a,"value"),
s=Dashboards.getParameterValue(this.parameter),s=_.filter(s,function(e){return _.include(t,e);
}),Dashboards.setParameter(this.parameter,s),this.selectorModel?this.selectorModel.set(i):this.selectorModel=new models.pagingSelector.SelectorModel(i),
this.selectorModel.updateValues(a),this.selectorView||(this.selectorView=new views.pagingSelector.SelectorView({
model:this.selectorModel,el:this.ph.get(0)})),this.selectorView.render(),this.selectorModel.off("change:searchterm",this.update),
this.selectorModel.on("change:searchterm",this.update,this),this.selectorModel.off("change:pageSize",this.pagingHandler),
this.selectorModel.on("change:pageSize",this.pagingHandler,this),this.selectorModel.off("change:pageStart",this.pagingHandler),
this.selectorModel.on("change:pageStart",this.pagingHandler,this),this.selectorModel.off("change:collapsed",this.handleCollapse),
this.selectorModel.on("change:collapsed",this.handleCollapse,this),this.timeout=0;
var a=this.selectorModel.get("values");a.off("change:selected",this.handleSelectionChange),
a.on("change:selected",this.handleSelectionChange,this)},handleCollapse:function(e){
e.changed.collapsed&&Dashboards.processChange(this.name)},handleSelectionChange:function(e){
if(!e.changed.selected&&this.selectorModel.get("collapsed")){0!==this.timeout&&clearTimeout(this.timetimeout);
var t=this;this.timeout=setTimeout(function(){Dashboards.processChange(t.name),timeout=0;
},1500)}},pagingHandler:function(){var e=this.getSuccessHandler(_.bind(function(e){
var t=this.values(e);this.selectorModel.addPage(t)},this));this.queryState.pageStartingAt(this.selectorModel.get("pageStart"),e);
},getValue:function(){return this.selectorModel.selectedValues()}});