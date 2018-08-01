var wd=wd||{};wd.components=wd.components||{},wd.components.olapSelector=wd.components.olapSelector||{};
var OlapSelectorModel=Backbone.Model.extend({defaults:{title:"",search:!0,multiselect:!0,
multilevelselect:!0,deselectDescendants:!1,searchterm:"",collapsed:!0,values:null,
level:"",paginate:!0,pageStart:0,pageSize:42,morePages:!1,totalRecords:0,mode:"level",
olapUtils:null,levels:null,breadcrumb:[],preselected:[],parameters:[]},initialize:function(){
var e=new Backbone.Collection;this.set("values",e),e.comparator=function(e,t){var l=e.get("level"),i=t.get("level"),s=e.get("name"),a=t.get("name"),n=l.localeCompare(i),o=s.localeCompare(a);
return 0!=n?n/Math.abs(n):0!=o?o/Math.abs(o):0},e.model=OptionModel,this.updateValues(),
this.set("levels",new Backbone.Collection);var t=this.get("levels");t.model=LevelModel,
this.updateLevels(),this.processLevelSelection(),t.on("change:selected",this.processLevelSelection,this),
this.setupEvents(),this.preSelectValues()},preSelectValues:function(){for(var e=this,t=this.get("olapUtils"),l=e.get("preselected"),i=e.get("levels"),s=0;s<i.length;s++)options={
pageSize:this.get("pageSize"),pageStart:this.get("pageStart"),searchTerm:this.get("searchterm"),
level:i.at(s).get("name")},t.getPaginatedLevelMembers(options,function(t){var i=e.processPreSelectValues(t.members,l);
e.addPreSelectValues(i,e)})},processPreSelectValues:function(e,t){var l,i=[],s=this.getSelectedLevels().at(0).get("depth");
if(!t.length)return e;for(var a=0;a<e.length;a++){level=e[a],l=level.qualifiedName.split(".").length-1;
for(var n=0;n<t.length;n++){if(level.qualifiedName===t[n]){level.selected=!0,i.push(level);
break}if(s===l){i.push(level);break}}}return i},addPreSelectValues:function(e,t){
for(var l,i,s=t.get("values"),a=this.get("levels").length-1,n=0;n<e.length;n++)l=e[n],
i=l.qualifiedName.match(/(\[[^\]]+]\.?)/g).length-2,l.level=t.get("levels").at(i).id,
l.canDrillDown=a>i,s.add(l,{silent:!0});s.trigger("add")},updateLevels:function(){
var e=this.get("olapUtils"),t=e.getHierarchy();if(t.hasAll){var l={name:t.defaultMember,
qualifiedName:t.defaultMemberQualifiedName,allMember:!0};this.get("levels").add(l);
}this.get("levels").add(e.getLevels(),{silent:!0})},processLevelSelection:function(e){
return 0==this.getSelectedLevels().length?void(null==e?this.get("levels").at(0).set({
selected:!0}):e.set({selected:!0})):this.getSelectedLevels().size()>1?(_(this.getSelectedLevels().without(e)).each(function(e){
e.set({selected:!1})}),void this.set("pageStart",0)):void 0},getSelectedLevels:function(){
return new Backbone.Collection(this.get("levels").where({selected:!0}))},setupEvents:function(){
var e=this.get("values");e.on("change:selected",this.updateSelection,this),e.on("change:drill",this.drillDown,this),
this.on("page",this.fetchValues,this,this),this.on("change:collapsed",this.handleCollapse,this),
this.on("change:searchterm",this.updateSearch,this),this.on("drillUp",this.drillUp,this),
this.get("levels").on("select",this.changeLevel,this)},handleCollapse:function(e,t){
if(!t){var l=this.get("values").where({selected:!0}).map(function(e){return e.get("qualifiedName");
});this.set("oldValues",l)}},apply:function(){this.toggleCollapsed()},cancel:function(){
var e=this.get("oldValues");this.get("values").each(function(t){t.set("selected",e.indexOf(t.get("qualifiedName"))>-1);
}),this.get("values").trigger("select"),this.toggleCollapsed()},drillDown:function(e,t){
this.get("breadcrumb").push(e);var l,i=this.get("levels"),s=this.get("olapUtils"),a=s.getHierarchy().defaultMemberQualifiedName,n=i.where({
selected:!0})[0],o=n.get("qualifiedName"),d=i.indexOf(n);n.set("selected",!1),l=o==a,
l?i.at(d+2).set("selected",!0):i.at(d+1).set("selected",!0),this.set("pageStart",0,{
silent:!0}),this.trigger("drill"),this.fetchValues()},drillUp:function(){var e=this.get("breadcrumb");
if(e.length){e.pop();var t=this.get("levels"),l=t.where({selected:!0})[0],i=t.indexOf(l);
l.set("selected",!1),this.set("pageStart",0,{silent:!0}),t.at(i-1).set("selected",!0),
this.trigger("drill"),this.fetchValues()}},changeLevel:function(e,t){e&&t===!1||(this.set("breadcrumb",[]),
this.trigger("drill"),this.set("pageStart",0),this.fetchValues())},fetchValues:function(e,t){
var l,i=this.get("levels").where({selected:!0})[0],s=this.get("olapUtils"),a={pageSize:this.get("pageSize"),
pageStart:this.get("pageStart"),searchTerm:this.get("searchterm")},n=this.get("breadcrumb");
if(n&&n.length){var o=n.length-1;a.startMember=n[o].get("qualifiedName")}if(l=i?i.get("name"):"",
l&&l!=s.getHierarchy().defaultMember?a.level=l:a.level=s.getLevels()[0].name,paramArray=this.get("parameters"),
paramArray.length>0){var d=_.keys(paramArray);for(pos=0;pos<paramArray.length;pos++)a[d[pos]]=paramArray[d[pos]];
}var r=this;this.get("olapUtils").getPaginatedLevelMembers(a,function(e){r.set("morePages",e.more),
r.addPage(e.members)})},addPage:function(e){var t,l;this.get("pageStart");for(values=this.get("values"),
t=0;t<e.length;t++){var i,l=e[t];l.level=this.getSelectedLevels().at(0).get("qualifiedName"),
i=values.detect(function(e){return e.get("level")==l.level&&e.get("qualifiedName")==l.qualifiedName;
}),i||values.add(l,{silent:!0})}values.trigger("add")},nextPage:function(){if(this.get("morePages")){
var e=this.get("pageStart"),t=this.get("pageSize");this.set("pageStart",e+t),this.trigger("page");
}},prevPage:function(){if(0!=this.get("pageStart")){var e=this.get("pageStart"),t=this.get("pageSize");
this.set("pageStart",Math.max(0,e-t)),this.trigger("page")}},firstPage:function(){
0!=this.get("pageStart")&&(this.set("pageStart",0),this.trigger("page"))},lastPage:function(){
var e=this.get("totalRecords"),t=this.get("pageSize");this.set("pageStart",e-e%t),
this.trigger("page")},goToPage:function(e){var t=this.get("pageSize");this.set("pageStart",e*t),
this.trigger("page")},updateValues:function(e){this.get("values").reset(e)},updateSelection:function(e,t){
if(t){var l=this.get("multiselect"),i=this.get("deselectDescendants"),s=this.get("multilevelselect"),a=this.getSelectedLevels().at(0).get("qualifiedName"),n=e.get("qualifiedName");
_(this.get("values").without(e)).each(function(e){l||e.set("selected",!1),i&&e.get("qualifiedName").indexOf(n)>-1&&e.set("selected",!1),
s||a==e.get("level")||e.set("selected",!1)})}},clearSelection:function(){this.get("values").each(function(e){
e.set("selected",!1)})},toggleCollapsed:function(e){this.set("collapsed",_.isBoolean(e)?e:!this.get("collapsed"));
},selectedValues:function(){return _(this.get("values").where({selected:!0})).map(function(e){
return e.get("value")})},updateSearch:function(){this.get("searchterm");this.set("pageStart",0,{
silent:!0}),this.fetchValues()},notifyUpdate:function(){this.trigger("notify",this);
}}),OptionModel=Backbone.Model.extend({defaults:{idx:0,name:"",value:null,level:null,
drill:!1,selected:!1},toggleSelected:function(){this.set("selected",!this.get("selected"));
}}),LevelModel=OptionModel.extend({defaults:{},initialize:function(e){this.on("change:qualifiedName change:name",function(e){
Dashboards.log("Detected changes"),this.set("id",e.get("qualifiedName")),this.set("label",e.get("name"));
}),this.set("id",this.get("qualifiedName")),this.set("label",this.get("name"))}}),OlapSelectorView=Backbone.View.extend({
events:{"click .title":"toggleCollapsed","click .first":"firstPage","click .prev":"prevPage",
"click .next":"nextPage","click .last":"lastPage","click .pages span":"goToPage",
"change .search input":"updateSearch","click .validate":"apply","click .cancel":"cancel",
"click .breadcrumb .name":"drillUp"},levelViews:[],renderLevels:function(){var e=this.$el.find(".levels").empty();
_(this.levelViews).each(function(t){e.append(t.render().el)})},initialize:function(){
this.initializeOptions(),this.configureListeners(),this.levelViews=[],this.model.get("levels").each(function(e){
this.levelViews.push(new LevelView({model:e}))},this)},configureListeners:function(){
this.model.on("change",this.render,this),this.model.on("drill",this.renderCrumbtrail,this),
this.model.on("change:collapsed",this.updateCollapsed,this),this.model.on("page",this.renderPages,this);
var e=this.model.get("values");e.on("add remove reset",this.updateOptions,this),e.on("select",this.updateOptions,this),
e.on("notify",this.notifyUpdate,this)},initializeOptions:function(){this._selectedViews=[],
this._selectedViewsOut=[],this._optionViews=[],this.model.get("values").each(function(e){
this._optionViews.push(new OptionView({model:e})),e.get("selected")&&(this._selectedViews.push(new SelectionView({
model:e})),this._selectedViewsOut.push(new SelectionViewOut({model:e})))},this)},
updateSearch:function(e){this.model.set("searchterm",e.target.value)},render:function(){
this.$el.html(Mustache.render(templates.olapSelector.main,this.model.toJSON())),this.renderLevels(),
this.updateCollapsed(),this.renderLevels(),this.renderOptions(),this.renderPages(),
this.renderCrumbtrail(),this.delegateEvents()},renderCrumbtrail:function(){var e=this.model.get("levels").where({
selected:!0})[0].get("name"),t=this.model.get("breadcrumb");if(t.length>0){var l=t[t.length-1];
this.$el.find(".breadcrumb").html(Mustache.render(templates.olapSelector.crumbtrail,{
level:e,name:l.get("name")}))}else this.$el.find(".breadcrumb").empty()},renderPages:function(){
var e=this.model;this.$el.find(".pagination .next").toggleClass("disabled",!e.get("morePages")),
this.$el.find(".pagination .prev").toggleClass("disabled",!e.get("pageStart")),this.$el.find(".pagination .first").toggleClass("disabled",!e.get("pageStart"));
},renderOptions:function(){var e=this.$el.find(".rightArea .options").empty(),t=this.$el.find(".leftArea .selection").empty(),l=this.$el.find(".outsideArea .selection").empty(),i=this.model.get("pageStart"),s=this.model.get("pageStart")+this.model.get("pageSize");
_(this._optionViews).chain().filter(this.isVisible,this).slice(i,s).each(function(t){
e.append(t.render().el)},this),_(this._selectedViewsOut).each(function(e){l.append(e.render().el);
}),_(this._selectedViews).each(function(e){t.append(e.render().el)})},updateOptions:function(){
this.initializeOptions(),this.renderOptions(),this.highlightParents()},notifyUpdate:function(){
this.model.toggleCollapsed(!1),this.model.toggleCollapsed(!0)},isVisible:function(e){
var t=this.model,l=e.model,i=t.getSelectedLevels().at(0).get("id")==l.get("level"),s=t.get("searchterm"),a=null==s||RegExp(s,"i").test(l.get("name")),n=_.last(t.get("breadcrumb")),o=null==n||l.get("qualifiedName").indexOf(n.get("qualifiedName"))>-1;
return i&&a&&o},highlightParents:function(){var e=this.model,t=e.get("values").where({
selected:!0}).map(function(e){return e.get("qualifiedName")});_(this._optionViews).each(function(e){
var l=e.model.get("qualifiedName"),i=_(t).chain().without(e.model.get("qualifiedName")).filter(function(e){
return e.indexOf(l)>-1}).value();e.$el.toggleClass("highlight",i.length>0),i.length>0?e.$el.find(".drill-down .label").text(i.length):e.$el.find(".drill-down .label").html("&nbsp;");
},this)},toggleSelected:function(e,t){var l,i,s;if(t)l=new SelectionView({model:e
}),this.$el.find(".leftArea .selection").append(l.render().el),this._selectedViews.push(l),
i=new SelectionViewOut({model:e}),this.$el.find(".outsideArea .selection").append(i.render().el),
this._selectedViews.push(i);else{s=_(this._selectedViews).filter(function(t){return t.model===e;
});var a=this;_.each(s,function(e){e.remove(),a._selectedViews=_(a._selectedViews).without(e);
}),s=_(this._selectedViewsOut).filter(function(t){return t.model===e});var a=this;
_.each(s,function(e){e.remove(),a._selectedViewsOut=_(a._selectedViewsOut).without(e);
})}},drillUp:function(){this.model.trigger("drillUp")},cancel:function(){this.model.cancel();
},apply:function(){this.model.apply()},toggleCollapsed:function(){this.model.toggleCollapsed();
},updateCollapsed:function(){if($(".olapSelectorComponent").addClass("collapsed").removeClass("expanded"),
this.model.get("collapsed"))this.$el.find(".olapSelectorComponent").addClass("collapsed").removeClass("expanded");else{
this.$el.find(".olapSelectorComponent").removeClass("collapsed").addClass("expanded");
var e=this.$el.find(".optionList"),t=10,l=e.offset().top,i=l+e.outerHeight(),s=$(window).scrollTop(),a=s+$(window).height(),n=a>=i?0:a-i-t;
n=l-n>=s?n:s-l+t,e.css("top",e.position().top+n+"px")}},nextPage:function(){this.model.nextPage();
},prevPage:function(){this.model.prevPage()},firstPage:function(){this.model.firstPage();
},lastPage:function(){this.model.lastPage()},goToPage:function(e){var t=$(e.target).attr("data-page");
this.model.goToPage(t)}}),OptionView=Backbone.View.extend({tagName:"span",template:null,
events:{"click .target":"toggleSelection","click .drill-down-enabled":"drillDown"
},initialize:function(){this.setTemplate(),this.model.on("change:selected",this.updateSelectionDisplay,this);
},setTemplate:function(){this.template=templates.olapSelector.option},drillDown:function(){
var e=this.model.get("drill");this.model.set("drill",!e)},render:function(){return this.$el.html(Mustache.render(this.template,this.model.toJSON())),
this.$el.addClass("item"),this.updateSelectionDisplay(),this.delegateEvents(),this;
},toggleSelection:function(){this.model.toggleSelected(),this.model.trigger("select");
},updateSelectionDisplay:function(){this.model.get("selected")?this.$el.addClass("selected"):this.$el.removeClass("selected");
}}),LevelView=OptionView.extend({tagName:"span",template:null,setTemplate:function(){
this.template=templates.olapSelector.level}}),SelectionView=Backbone.View.extend({
tagName:"li",events:{"click .remove":"unselect"},render:function(){return this.$el.html(Mustache.render(templates.olapSelector.picked,this.model.toJSON())),
this.delegateEvents(),this},unselect:function(){this.model.set("selected",!1),this.model.trigger("select");
}}),SelectionViewOut=SelectionView.extend({unselect:function(){this.model.set("selected",!1),
this.model.trigger("select"),this.model.trigger("notify")}}),templates=templates||{};
templates.olapSelector={},templates.olapSelector.main="<div class='olapSelectorComponent'> <div class='pulldown'>   <div class='title'>{{title}}</div>     <div class='optionList'>       <div class='leftArea'>         <div class='header'>Select Level</div>         <div class='levels'></div>         <div class='selectionPanel'>           <div class='label'>Selected Filters</div>           <ul class='selection'></ul>         </div>       </div>       <div class='rightArea {{#paginate}}paginate{{/paginate}}'>         <div class='header'><div class='breadcrumb'>Breadcrumb &#x21FE; Content</div><div class='search'>             <input type='text' placeholder='Search...' value='{{searchterm}}'/>             <div class='cancel'>&nbsp;</div>           </div>         </div>         <div class='options'></div>         <div class='paginationContainer'>           <div class='pagination'>             <div class='prev paginateButton'>Previous Page<div class='arrow'>&nbsp;</div></div>             <div class='next paginateButton'>Next Page<div class='arrow'>&nbsp;</div></div>           </div>         </div>         <div class='footer'>           <div class='button cancel'>Cancel</div>           <div class='button validate'>Apply</div>         </div>       </div>     </div> </div> <div class='outsideArea'>   <ul class='selection'></ul> </div></div>",
templates.olapSelector.option="<div class='target'> <span class='name' title='{{name}}'>{{name}}</span> <span class='check'>&nbsp;</span></div>{{#canDrillDown}}<div class='drill-down drill-down-enabled'>{{/canDrillDown}}{{^canDrillDown}}<div class='drill-down drill-down-disabled'>{{/canDrillDown}}<span class='label'>&nbsp;</span></div>",
templates.olapSelector.picked="<div class='target'>  <span class='name' title='{{name}}'>{{name}}</span>  <div class='remove'>&nbsp;</div></div>",
templates.olapSelector.levels="<div class='levelTitle'>Levels</div><div class='levels options'></div>",
templates.olapSelector.level="<div class='target'>  <span class='name' title='{{label}}'>{{label}}</span></div>",
templates.olapSelector.crumbtrail="<span class='level'>{{level}}</span><span class='separator'>&nbsp;</span><span class='name'>{{name}}</span>";