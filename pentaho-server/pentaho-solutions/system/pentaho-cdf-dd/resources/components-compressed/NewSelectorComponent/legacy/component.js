var views=views||{};views.pagingSelector={};var models=models||{};models.pagingSelector={},
models.pagingSelector.SelectorModel=Backbone.Model.extend({defaults:{title:"",search:!0,
advancedSearch:!1,multiselect:!0,searchterm:"",collapsed:!0,values:null,pageStart:0,
pageSize:1/0,totalRecords:0},initialize:function(e){this.set("values",new Backbone.Collection);
var e=this.get("values");e.comparator=function(e){return e.get("idx")},e.model=models.pagingSelector.OptionModel,
e.on("change:selected",this.updateSelection,this),this.on("change:searchterm",this.updateSearch,this),
this.updateValues(e)},addPage:function(e){var t,i,s=this.get("values");for(t=0;t<e.length;t++){
var i=e[t],a=s.detect(function(e){return e.get("idx")==i.idx});a||s.add(e[t],{silent:!0
})}s.trigger("add")},nextPage:function(){var e=this.get("pageStart"),t=this.get("pageSize"),i=this.get("totalRecords"),s=e+t,a=i-i%t;
this.set("pageStart",Math.min(s,a))},prevPage:function(){var e=this.get("pageStart"),t=this.get("pageSize");
this.set("pageStart",Math.max(0,e-t))},firstPage:function(){this.set("pageStart",0);
},lastPage:function(){var e=this.get("totalRecords"),t=this.get("pageSize");this.set("pageStart",e-e%t);
},goToPage:function(e){var t=this.get("totalRecords"),i=this.get("pageSize"),s=e*i,a=t-t%i;
this.set("pageStart",Math.min(s,a))},updateValues:function(e){this.get("values").reset(e);
},updateSelection:function(e,t){t&&!this.get("multiselect")&&_(this.get("values").without(e)).each(function(e){
e.set("selected",!1)})},clearSelection:function(){this.get("values").each(function(e){
e.set("selected",!1)})},toggleCollapsed:function(){this.set("collapsed",!this.get("collapsed"));
},selectedValues:function(){return _(this.get("values").where({selected:!0})).map(function(e){
return e.get("value")})},updateSearch:function(){var e=this.get("searchterm"),t=new RegExp(e);
this.get("values").each(function(e){var i=t.test(e.get("label"))||this.get("advancedSearch")&&t.test(e.get("value"));
e.set("visible",i)},this)}}),models.pagingSelector.OptionModel=Backbone.Model.extend({
defaults:{idx:0,label:"",value:null,visible:!0,selected:!1,"new":!1},toggleSelected:function(){
this.set("selected",!this.get("selected"))}}),views.pagingSelector.SelectorView=Backbone.View.extend({
events:{"click .title":"toggleCollapsed","click .first":"firstPage","click .prev":"prevPage",
"click .next":"nextPage","click .last":"lastPage","click .pages span":"goToPage",
"change .search input":"updateSearch","keydown .search input":"testChange","click .validate":"toggleCollapsed"
},initialize:function(){this.initializeOptions(),this.configureListeners()},configureListeners:function(){
this.model.on("change",this.render,this),this.model.on("change:collapsed",this.updateCollapsed,this),
this.model.on("change:pageStart",this.renderPages,this);var e=this.model.get("values");
e.on("change:selected",this.toggleSelected,this),e.on("add remove reset",this.updateOptions,this);
},initializeOptions:function(){this._selectedViews=[],this._optionViews=[],this.model.get("values").each(function(e){
this._optionViews.push(new views.pagingSelector.OptionView({model:e})),e.get("selected")&&this._selectedViews.push(new views.pagingSelector.SelectionView({
model:e}))},this)},updateSearch:function(e){this.model.set("searchterm",e.target.value),
e.stopPropagation()},testChange:function(e){13==e.which&&this.updateSearch(e)},render:function(){
this.$el.html(Mustache.render(templates.pagingSelector.main,this.model.toJSON())),
this.updateCollapsed(),this.renderOptions(),this.renderPages()},renderPages:function(){
var e,t=this.model,i=Math.ceil(t.get("pageStart")/t.get("pageSize")),s=Math.ceil(t.get("totalRecords")/t.get("pageSize")),a=this.$el.find(".pages"),l=!1,n=!1;
for(a.empty(),e=0;s>e;e++)5>e||5>s-e||Math.abs(i-e)<2?a.append($("<span class='page'>"+(e+1)+"</span>").attr("data-page",e).addClass(e==i?"current":"")):!l&&i>e?(a.append("&hellip;"),
l=!0):!n&&e>i&&(a.append("&hellip;"),n=!0)},renderOptions:function(){var e=this.$el.find(".options").empty(),t=this.$el.find(".selection").empty(),i=this.model.get("pageStart"),s=this.model.get("pageStart")+this.model.get("pageSize");
_(this._optionViews).each(function(t){var a=t.model.get("idx");s>a&&a>=i&&e.append(t.render().el);
}),_(this._selectedViews).each(function(e){t.append(e.render().el)})},updateOptions:function(){
this.initializeOptions(),this.renderOptions()},toggleSelected:function(e,t){var i;
t?(i=new views.pagingSelector.SelectionView({model:e}),this.$el.find(".selection").append(i.render().el),
this._selectedViews.push(i)):(i=_(this._selectedViews).find(function(t){return t.model===e;
}),i.remove(),this._selectedViews=_(this._selectedViews).without(i))},toggleCollapsed:function(){
this.model.toggleCollapsed()},updateCollapsed:function(){if($(".selectorComponent").addClass("collapsed").removeClass("expanded"),
this.model.get("collapsed"))this.$el.find(".selectorComponent").addClass("collapsed").removeClass("expanded");else{
$(".datepicker-title").removeClass("datepicker-title-visible"),$(".datepicker-outerbox").hide(),
$(".manage-views.active").click(),this.$el.find(".selectorComponent").removeClass("collapsed").addClass("expanded");
var e=this.$el.find(".optionList"),t=10,i=e.offset().top,s=i+e.outerHeight(),a=$(window).scrollTop(),l=a+$(window).height(),n=l>=s?0:l-s-t;
n=i-n>=a?n:a-i+t,e.css("top",e.position().top+n+"px")}},nextPage:function(){this.model.nextPage();
},prevPage:function(){this.model.prevPage()},firstPage:function(){this.model.firstPage();
},lastPage:function(){this.model.lastPage()},goToPage:function(e){var t=$(e.target).attr("data-page");
this.model.goToPage(t)}}),views.pagingSelector.OptionView=Backbone.View.extend({tagName:"span",
events:{"click .target":"toggleSelection"},initialize:function(){this.model.on("change:selected",this.updateSelectionDisplay,this),
this.model.on("change:visible",this.updateVisibility,this)},render:function(){return this.$el.html(Mustache.render(templates.pagingSelector.option,this.model.toJSON())),
this.$el.addClass("item"),this.updateSelectionDisplay(),this.updateVisibility(),this.delegateEvents(),
this},toggleSelection:function(){this.model.toggleSelected()},updateVisibility:function(){
this.model.get("visible")?this.$el.show():this.$el.hide()},updateSelectionDisplay:function(){
this.model.get("selected")?this.$el.addClass("selected"):this.$el.removeClass("selected");
}}),views.pagingSelector.SelectionView=Backbone.View.extend({tagName:"li",events:{
"click .remove":"unselect"},render:function(){return this.$el.html(Mustache.render(templates.pagingSelector.picked,this.model.toJSON())),
this.$el.addClass("item"),this.delegateEvents(),this},unselect:function(){this.model.set("selected",!1);
}});var templates=templates||{};templates.pagingSelector={},templates.pagingSelector.main="<div class='selectorComponent'>  <div class='pulldown'>    <div class='title'>{{title}}</div>      <div class='optionList'>        <div class='search'>          <input type='text' placeholder='Search...' value='{{searchterm}}'/>          <div class='cancel'>&nbsp;</div>        </div>        <div class='options'></div>        <div class='paginationContainer'>          <div class='pagination'>            <div class='first paginateButton'><div class='arrow'>&nbsp;</div></div>            <div class='prev paginateButton'><div class='arrow'>&nbsp;</div></div>            <div class='pages'></div>            <div class='next paginateButton'><div class='arrow'>&nbsp;</div></div>            <div class='last paginateButton'><div class='arrow'>&nbsp;</div></div>          </div>          <div class='validate'><div class='image'>&nbsp;</div></div>        </div>      </div>  </div>  <div class='selection'></div></div>",
templates.pagingSelector.option="<div class='target'>  <span class='name' title='{{label}}'>{{label}}</span>  <span class='check'>&nbsp;</span>  {{#new}}<span class='new'>&nbsp;</span>{{/new}}</div>",
templates.pagingSelector.picked="<div class='target'>  <span class='name' title='{{label}}'>{{label}}</span>  <div class='remove'>&nbsp;</div></div>";