define("cde/components/NewSelectorComponent/views",["cdf/lib/jquery","amd!cdf/lib/backbone","amd!cdf/lib/underscore","cdf/lib/mustache"],function(e,t,i,s){
var a=a||{};a.pagingSelector={},a.pagingSelector.SelectorView=t.View.extend({events:{
"click .title":"toggleCollapsed","click .first":"firstPage","click .prev":"prevPage",
"click .next":"nextPage","click .last":"lastPage","click .pages span":"goToPage",
"change .search input":"updateSearch","keydown .search input":"testChange","click .validate":"toggleCollapsed"
},initialize:function(){this.initializeOptions(),this.configureListeners()},configureListeners:function(){
this.model.on("change",this.render,this),this.model.on("change:collapsed",this.updateCollapsed,this),
this.model.on("change:pageStart",this.renderPages,this);var e=this.model.get("values");
e.on("change:selected",this.toggleSelected,this),e.on("add remove reset",this.updateOptions,this);
},initializeOptions:function(){this._selectedViews=[],this._optionViews=[],this.model.get("values").each(function(e){
this._optionViews.push(new a.pagingSelector.OptionView({model:e})),e.get("selected")&&this._selectedViews.push(new a.pagingSelector.SelectionView({
model:e}))},this)},updateSearch:function(e){this.model.set("searchterm",e.target.value),
e.stopPropagation()},testChange:function(e){13==e.which&&this.updateSearch(e)},render:function(){
this.$el.html(s.render(n.pagingSelector.main,this.model.toJSON())),this.updateCollapsed(),
this.renderOptions(),this.renderPages()},renderPages:function(){var t,i=this.model,s=Math.ceil(i.get("pageStart")/i.get("pageSize")),a=Math.ceil(i.get("totalRecords")/i.get("pageSize")),n=this.$el.find(".pages"),l=!1,o=!1;
for(n.empty(),t=0;a>t;t++)5>t||5>a-t||Math.abs(s-t)<2?n.append(e("<span class='page'>"+(t+1)+"</span>").attr("data-page",t).addClass(t==s?"current":"")):!l&&s>t?(n.append("&hellip;"),
l=!0):!o&&t>s&&(n.append("&hellip;"),o=!0)},renderOptions:function(){var e=this.$el.find(".options").empty(),t=this.$el.find(".selection").empty(),s=this.model.get("pageStart"),a=this.model.get("pageStart")+this.model.get("pageSize");
i(this._optionViews).each(function(t){var i=t.model.get("idx");a>i&&i>=s&&e.append(t.render().el);
}),i(this._selectedViews).each(function(e){t.append(e.render().el)})},updateOptions:function(){
this.initializeOptions(),this.renderOptions()},toggleSelected:function(e,t){var s;
t?(s=new a.pagingSelector.SelectionView({model:e}),this.$el.find(".selection").append(s.render().el),
this._selectedViews.push(s)):(s=i(this._selectedViews).find(function(t){return t.model===e;
}),s.remove(),this._selectedViews=i(this._selectedViews).without(s))},toggleCollapsed:function(){
this.model.toggleCollapsed()},updateCollapsed:function(){if(e(".selectorComponent").addClass("collapsed").removeClass("expanded"),
this.model.get("collapsed"))this.$el.find(".selectorComponent").addClass("collapsed").removeClass("expanded");else{
e(".datepicker-title").removeClass("datepicker-title-visible"),e(".datepicker-outerbox").hide(),
e(".manage-views.active").click(),this.$el.find(".selectorComponent").removeClass("collapsed").addClass("expanded");
var t=this.$el.find(".optionList"),i=10,s=t.offset().top,a=s+t.outerHeight(),n=e(window).scrollTop(),l=n+e(window).height(),o=l>=a?0:l-a-i;
o=s-o>=n?o:n-s+i,t.css("top",t.position().top+o+"px")}},nextPage:function(){this.model.nextPage();
},prevPage:function(){this.model.prevPage()},firstPage:function(){this.model.firstPage();
},lastPage:function(){this.model.lastPage()},goToPage:function(t){var i=e(t.target).attr("data-page");
this.model.goToPage(i)}}),a.pagingSelector.OptionView=t.View.extend({tagName:"span",
events:{"click .target":"toggleSelection"},initialize:function(){this.model.on("change:selected",this.updateSelectionDisplay,this),
this.model.on("change:visible",this.updateVisibility,this)},render:function(){return this.$el.html(s.render(n.pagingSelector.option,this.model.toJSON())),
this.$el.addClass("item"),this.updateSelectionDisplay(),this.updateVisibility(),this.delegateEvents(),
this},toggleSelection:function(){this.model.toggleSelected()},updateVisibility:function(){
this.model.get("visible")?this.$el.show():this.$el.hide()},updateSelectionDisplay:function(){
this.model.get("selected")?this.$el.addClass("selected"):this.$el.removeClass("selected");
}}),a.pagingSelector.SelectionView=t.View.extend({tagName:"li",events:{"click .remove":"unselect"
},render:function(){return this.$el.html(s.render(n.pagingSelector.picked,this.model.toJSON())),
this.$el.addClass("item"),this.delegateEvents(),this},unselect:function(){this.model.set("selected",!1);
}});var n=n||{};return n.pagingSelector={},n.pagingSelector.main="<div class='selectorComponent'>  <div class='pulldown'>    <div class='title'>{{title}}</div>      <div class='optionList'>        <div class='search'>          <input type='text' placeholder='Search...' value='{{searchterm}}'/>          <div class='cancel'>&nbsp;</div>        </div>        <div class='options'></div>        <div class='paginationContainer'>          <div class='pagination'>            <div class='first paginateButton'><div class='arrow'>&nbsp;</div></div>            <div class='prev paginateButton'><div class='arrow'>&nbsp;</div></div>            <div class='pages'></div>            <div class='next paginateButton'><div class='arrow'>&nbsp;</div></div>            <div class='last paginateButton'><div class='arrow'>&nbsp;</div></div>          </div>          <div class='validate'><div class='image'>&nbsp;</div></div>        </div>      </div>  </div>  <div class='selection'></div></div>",
n.pagingSelector.option="<div class='target'>  <span class='name' title='{{label}}'>{{label}}</span>  <span class='check'>&nbsp;</span>  {{#new}}<span class='new'>&nbsp;</span>{{/new}}</div>",
n.pagingSelector.picked="<div class='target'>  <span class='name' title='{{label}}'>{{label}}</span>  <div class='remove'>&nbsp;</div></div>",
a}),define("cde/components/NewSelectorComponent/models",["cdf/lib/jquery","amd!cdf/lib/backbone","amd!cdf/lib/underscore"],function(e,t,i){
var s=s||{};return s.pagingSelector={},s.pagingSelector.SelectorModel=t.Model.extend({
defaults:{title:"",search:!0,advancedSearch:!1,multiselect:!0,searchterm:"",collapsed:!0,
values:null,pageStart:0,pageSize:1/0,totalRecords:0},initialize:function(e){this.set("values",new t.Collection);
var e=this.get("values");e.comparator=function(e){return e.get("idx")},e.model=s.pagingSelector.OptionModel,
e.on("change:selected",this.updateSelection,this),this.on("change:searchterm",this.updateSearch,this),
this.updateValues(e)},addPage:function(e){var t,i,s=this.get("values");for(t=0;t<e.length;t++){
var i=e[t],a=s.detect(function(e){return e.get("idx")==i.idx});a||s.add(e[t],{silent:!0
})}s.trigger("add")},nextPage:function(){var e=this.get("pageStart"),t=this.get("pageSize"),i=this.get("totalRecords"),s=e+t,a=i-i%t;
this.set("pageStart",Math.min(s,a))},prevPage:function(){var e=this.get("pageStart"),t=this.get("pageSize");
this.set("pageStart",Math.max(0,e-t))},firstPage:function(){this.set("pageStart",0);
},lastPage:function(){var e=this.get("totalRecords"),t=this.get("pageSize");this.set("pageStart",e-e%t);
},goToPage:function(e){var t=this.get("totalRecords"),i=this.get("pageSize"),s=e*i,a=t-t%i;
this.set("pageStart",Math.min(s,a))},updateValues:function(e){this.get("values").reset(e);
},updateSelection:function(e,t){t&&!this.get("multiselect")&&i(this.get("values").without(e)).each(function(e){
e.set("selected",!1)})},clearSelection:function(){this.get("values").each(function(e){
e.set("selected",!1)})},toggleCollapsed:function(){this.set("collapsed",!this.get("collapsed"));
},selectedValues:function(){return i(this.get("values").where({selected:!0})).map(function(e){
return e.get("value")})},updateSearch:function(){var e=this.get("searchterm"),t=new RegExp(e);
this.get("values").each(function(e){var i=t.test(e.get("label"))||this.get("advancedSearch")&&t.test(e.get("value"));
e.set("visible",i)},this)}}),s.pagingSelector.OptionModel=t.Model.extend({defaults:{
idx:0,label:"",value:null,visible:!0,selected:!1,"new":!1},toggleSelected:function(){
this.set("selected",!this.get("selected"))}}),s}),define("cde/components/NewSelectorComponent/NewSelectorComponent",["cdf/components/UnmanagedComponent","cdf/dashboard/Utils","cdf/lib/jquery","amd!cdf/lib/underscore","./views","./models","css!./NewSelectorComponent"],function(e,t,i,s,a,n){
return e.extend({pageStart:0,pageSize:54,update:function(){i.extend(this.options,this),
this.ph=i("#"+this.htmlObject).empty();var e=s.bind(this.redraw,this);if("undefined"!=typeof this.valuesArray&&this.valuesArray.length>0)this.synchronous(e,this.valuesArray);else{
var a=t.propertiesArrayToObject(this.parameters),n=this.selectorModel?this.selectorModel.get("searchterm"):"";
a[this.searchParam]="'"+n+"'",this.parameters=t.objectToPropertiesArray(a),this.triggerQuery(this.chartDefinition,e,{
pageSize:this.pageSize})}},values:function(e){var t=e.resultset,i=e.queryInfo?e.queryInfo.pageStart:0,a=this.dashboard.getParameterValue(this.parameter),n=this.chartDefinition.valueAsId,l=[];
return s.isArray(a)||(a=[a]),s.each(t,function(e){var t=e[n?1:0],s={idx:i++,value:t,
label:e[1],selected:!!(1+a.indexOf(t)),"new":!!e[2]};l.push(s)},this),l},redraw:function(e){
var t,i,l=this.values(e),o={title:this.title,pageSize:this.pageSize,pageStart:this.pageStart,
totalRecords:e.queryInfo?e.queryInfo.totalRows:0,multiselect:this.multiselect};t=s.pluck(l,"value"),
i=this.dashboard.getParameterValue(this.parameter),i=s.filter(i,function(e){return s.include(t,e);
}),this.dashboard.setParameter(this.parameter,i),this.selectorModel?this.selectorModel.set(o):this.selectorModel=new n.pagingSelector.SelectorModel(o),
this.selectorModel.updateValues(l),this.selectorView||(this.selectorView=new a.pagingSelector.SelectorView({
model:this.selectorModel,el:this.ph.get(0)})),this.selectorView.render(),this.selectorModel.off("change:searchterm",this.update),
this.selectorModel.on("change:searchterm",this.update,this),this.selectorModel.off("change:pageSize",this.pagingHandler),
this.selectorModel.on("change:pageSize",this.pagingHandler,this),this.selectorModel.off("change:pageStart",this.pagingHandler),
this.selectorModel.on("change:pageStart",this.pagingHandler,this),this.selectorModel.off("change:collapsed",this.handleCollapse),
this.selectorModel.on("change:collapsed",this.handleCollapse,this),this.timeout=0;
var l=this.selectorModel.get("values");l.off("change:selected",this.handleSelectionChange),
l.on("change:selected",this.handleSelectionChange,this)},handleCollapse:function(e){
e.changed.collapsed&&this.dashboard.processChange(this.name)},handleSelectionChange:function(e){
var t=this;!e.changed.selected&&this.selectorModel.get("collapsed")&&(0!==t.timeout&&clearTimeout(this.timetimeout),
t.timeout=setTimeout(function(){t.dashboard.processChange(t.name),t.timeout=0},1500));
},pagingHandler:function(){var e=this.getSuccessHandler(s.bind(function(e){var t=this.values(e);
this.selectorModel.addPage(t)},this));this.queryState.pageStartingAt(this.selectorModel.get("pageStart"),e);
},getValue:function(){return this.selectorModel.selectedValues()}})}),define("cde/components/NewSelectorComponent",["cde/components/NewSelectorComponent/NewSelectorComponent"],function(e){
return e});