define("cde/components/OlapSelectorComponent/OlapSelectorView",["cdf/Logger","cdf/lib/jquery","amd!cdf/lib/backbone","amd!cdf/lib/underscore","cdf/lib/mustache"],function(e,t,i,l,s){
var a=i.View.extend({tagName:"span",template:null,events:{"click .target":"toggleSelection",
"click .drill-down-enabled":"drillDown"},initialize:function(){this.setTemplate(),
this.model.on("change:selected",this.updateSelectionDisplay,this)},setTemplate:function(){
this.template=c.olapSelector.option},drillDown:function(){var e=this.model.get("drill");
this.model.set("drill",!e)},render:function(){return this.$el.html(s.render(this.template,this.model.toJSON())),
this.$el.addClass("item"),this.updateSelectionDisplay(),this.delegateEvents(),this;
},toggleSelection:function(){this.model.toggleSelected(),this.model.trigger("select");
},updateSelectionDisplay:function(){this.model.get("selected")?this.$el.addClass("selected"):this.$el.removeClass("selected");
}}),n=a.extend({tagName:"span",template:null,setTemplate:function(){this.template=c.olapSelector.level;
}}),r=i.View.extend({tagName:"li",events:{"click .remove":"unselect"},render:function(){
return this.$el.html(s.render(c.olapSelector.picked,this.model.toJSON())),this.delegateEvents(),
this},unselect:function(){this.model.set("selected",!1),this.model.trigger("select");
}}),o=r.extend({unselect:function(){this.model.set("selected",!1),this.model.trigger("select"),
this.model.trigger("notify")}}),c=c||{};return c.olapSelector={},c.olapSelector.main="<div class='olapSelectorComponent'> <div class='pulldown'>   <div class='title'>{{title}}</div>     <div class='optionList'>       <div class='leftArea'>         <div class='header'>Select Level</div>         <div class='levels'></div>         <div class='selectionPanel'>           <div class='label'>Selected Filters</div>           <ul class='selection'></ul>         </div>       </div>       <div class='rightArea {{#paginate}}paginate{{/paginate}}'>         <div class='header'><div class='breadcrumb'>Breadcrumb &#x21FE; Content</div><div class='search'>             <input type='text' placeholder='Search...' value='{{searchterm}}'/>             <div class='cancel'>&nbsp;</div>           </div>         </div>         <div class='options'></div>         <div class='paginationContainer'>           <div class='pagination'>             <div class='prev paginateButton'>Previous Page<div class='arrow'>&nbsp;</div></div>             <div class='next paginateButton'>Next Page<div class='arrow'>&nbsp;</div></div>           </div>         </div>         <div class='footer'>           <div class='button cancel'>Cancel</div>           <div class='button validate'>Apply</div>         </div>       </div>     </div> </div> <div class='outsideArea'>   <ul class='selection'></ul> </div></div>",
c.olapSelector.option="<div class='target'> <span class='name' title='{{name}}'>{{name}}</span> <span class='check'>&nbsp;</span></div>{{#canDrillDown}}<div class='drill-down drill-down-enabled'>{{/canDrillDown}}{{^canDrillDown}}<div class='drill-down drill-down-disabled'>{{/canDrillDown}}<span class='label'>&nbsp;</span></div>",
c.olapSelector.picked="<div class='target'>  <span class='name' title='{{name}}'>{{name}}</span>  <div class='remove'>&nbsp;</div></div>",
c.olapSelector.levels="<div class='levelTitle'>Levels</div><div class='levels options'></div>",
c.olapSelector.level="<div class='target'>  <span class='name' title='{{label}}'>{{label}}</span></div>",
c.olapSelector.crumbtrail="<span class='level'>{{level}}</span><span class='separator'>&nbsp;</span><span class='name'>{{name}}</span>",
i.View.extend({events:{"click .title":"toggleCollapsed","click .first":"firstPage",
"click .prev":"prevPage","click .next":"nextPage","click .last":"lastPage","click .pages span":"goToPage",
"change .search input":"updateSearch","click .validate":"apply","click .cancel":"cancel",
"click .breadcrumb .name":"drillUp"},levelViews:[],renderLevels:function(){var e=this.$el.find(".levels").empty();
l(this.levelViews).each(function(t){e.append(t.render().el)})},initialize:function(){
this.initializeOptions(),this.configureListeners(),this.levelViews=[],this.model.get("levels").each(function(e){
this.levelViews.push(new n({model:e}))},this)},configureListeners:function(){this.model.on("change",this.render,this),
this.model.on("drill",this.renderCrumbtrail,this),this.model.on("change:collapsed",this.updateCollapsed,this),
this.model.on("page",this.renderPages,this);var e=this.model.get("values");e.on("add remove reset",this.updateOptions,this),
e.on("select",this.updateOptions,this),e.on("notify",this.notifyUpdate,this)},initializeOptions:function(){
this._selectedViews=[],this._selectedViewsOut=[],this._optionViews=[],this.model.get("values").each(function(e){
this._optionViews.push(new a({model:e})),e.get("selected")&&(this._selectedViews.push(new r({
model:e})),this._selectedViewsOut.push(new o({model:e})))},this)},updateSearch:function(e){
this.model.set("searchterm",e.target.value)},render:function(){this.$el.html(s.render(c.olapSelector.main,this.model.toJSON())),
this.renderLevels(),this.updateCollapsed(),this.renderLevels(),this.renderOptions(),
this.renderPages(),this.renderCrumbtrail(),this.delegateEvents()},renderCrumbtrail:function(){
var e=this.model.get("levels").where({selected:!0})[0].get("name"),t=this.model.get("breadcrumb");
if(t.length>0){var i=t[t.length-1];this.$el.find(".breadcrumb").html(s.render(c.olapSelector.crumbtrail,{
level:e,name:i.get("name")}))}else this.$el.find(".breadcrumb").empty()},renderPages:function(){
var e=this.model;this.$el.find(".pagination .next").toggleClass("disabled",!e.get("morePages")),
this.$el.find(".pagination .prev").toggleClass("disabled",!e.get("pageStart")),this.$el.find(".pagination .first").toggleClass("disabled",!e.get("pageStart"));
},renderOptions:function(){var e=this.$el.find(".rightArea .options").empty(),t=this.$el.find(".leftArea .selection").empty(),i=this.$el.find(".outsideArea .selection").empty(),s=this.model.get("pageStart"),a=this.model.get("pageStart")+this.model.get("pageSize");
l(this._optionViews).chain().filter(this.isVisible,this).slice(s,a).each(function(t){
e.append(t.render().el)},this),l(this._selectedViewsOut).each(function(e){i.append(e.render().el);
}),l(this._selectedViews).each(function(e){t.append(e.render().el)})},updateOptions:function(){
this.initializeOptions(),this.renderOptions(),this.highlightParents()},notifyUpdate:function(){
this.model.toggleCollapsed(!1),this.model.toggleCollapsed(!0)},isVisible:function(e){
var t=this.model,i=e.model,s=t.getSelectedLevels().at(0).get("id")==i.get("level"),a=t.get("searchterm"),n=null==a||RegExp(a,"i").test(i.get("name")),r=l.last(t.get("breadcrumb")),o=null==r||i.get("qualifiedName").indexOf(r.get("qualifiedName"))>-1;
return s&&n&&o},highlightParents:function(){var e=this.model,t=e.get("values").where({
selected:!0}).map(function(e){return e.get("qualifiedName")});l(this._optionViews).each(function(e){
var i=e.model.get("qualifiedName"),s=l(t).chain().without(e.model.get("qualifiedName")).filter(function(e){
return e.indexOf(i)>-1}).value();e.$el.toggleClass("highlight",s.length>0),s.length>0?e.$el.find(".drill-down .label").text(s.length):e.$el.find(".drill-down .label").html("&nbsp;");
},this)},toggleSelected:function(e,t){var i,s,a;if(t)i=new r({model:e}),this.$el.find(".leftArea .selection").append(i.render().el),
this._selectedViews.push(i),s=new o({model:e}),this.$el.find(".outsideArea .selection").append(s.render().el),
this._selectedViews.push(s);else{a=l(this._selectedViews).filter(function(t){return t.model===e;
});var n=this;l.each(a,function(e){e.remove(),n._selectedViews=l(n._selectedViews).without(e);
}),a=l(this._selectedViewsOut).filter(function(t){return t.model===e});var n=this;
l.each(a,function(e){e.remove(),n._selectedViewsOut=l(n._selectedViewsOut).without(e);
})}},drillUp:function(){this.model.trigger("drillUp")},cancel:function(){this.model.cancel();
},apply:function(){this.model.apply()},toggleCollapsed:function(){this.model.toggleCollapsed();
},updateCollapsed:function(){if(t(".olapSelectorComponent").addClass("collapsed").removeClass("expanded"),
this.model.get("collapsed"))this.$el.find(".olapSelectorComponent").addClass("collapsed").removeClass("expanded");else{
this.$el.find(".olapSelectorComponent").removeClass("collapsed").addClass("expanded");
var i=this.$el.find(".optionList"),l=10,s=i.offset().top,a=s+i.outerHeight(),n=t(window).scrollTop(),r=n+t(window).height(),o=r>=a?0:r-a-l;
o=s-o>=n?o:n-s+l,e.log("Offset is "+o+" after correction"),i.css("top",i.position().top+o+"px");
}},nextPage:function(){this.model.nextPage()},prevPage:function(){this.model.prevPage();
},firstPage:function(){this.model.firstPage()},lastPage:function(){this.model.lastPage();
},goToPage:function(e){var i=t(e.target).attr("data-page");this.model.goToPage(i);
}})}),define("cde/components/OlapSelectorComponent/OlapSelectorModel",["cdf/Logger","amd!cdf/lib/backbone","amd!cdf/lib/underscore"],function(e,t,i){
var l=t.Model.extend({defaults:{idx:0,name:"",value:null,level:null,drill:!1,selected:!1
},toggleSelected:function(){this.set("selected",!this.get("selected"))}}),s=l.extend({
defaults:{},initialize:function(t){this.on("change:qualifiedName change:name",function(t){
e.log("Detected changes"),this.set("id",t.get("qualifiedName")),this.set("label",t.get("name"));
}),this.set("id",this.get("qualifiedName")),this.set("label",this.get("name"))}});
return t.Model.extend({defaults:{title:"",search:!0,multiselect:!0,multilevelselect:!0,
deselectDescendants:!1,searchterm:"",collapsed:!0,values:null,level:"",paginate:!0,
pageStart:0,pageSize:42,morePages:!1,totalRecords:0,mode:"level",olapUtils:null,levels:null,
breadcrumb:[],preselected:[],parameters:[]},initialize:function(){var e=new t.Collection;
this.set("values",e),e.comparator=function(e,t){var i=e.get("level"),l=t.get("level"),s=e.get("name"),a=t.get("name"),n=i.localeCompare(l),r=s.localeCompare(a);
return 0!=n?n/Math.abs(n):0!=r?r/Math.abs(r):0},e.model=l,this.updateValues(),this.set("levels",new t.Collection);
var i=this.get("levels");i.model=s,this.updateLevels(),this.processLevelSelection(),
i.on("change:selected",this.processLevelSelection,this),this.setupEvents(),this.preSelectValues();
},preSelectValues:function(){for(var e=this,t=this.get("olapUtils"),i=e.get("preselected"),l=e.get("levels"),s=0;s<l.length;s++){
var a={pageSize:this.get("pageSize"),pageStart:this.get("pageStart"),searchTerm:this.get("searchterm"),
level:l.at(s).get("name")};t.getPaginatedLevelMembers(a,function(t){var l=e.processPreSelectValues(t.members,i);
e.addPreSelectValues(l,e)})}},processPreSelectValues:function(e,t){var i,l=[],s=this.getSelectedLevels().at(0).get("depth");
if(!t.length)return e;for(var a=0;a<e.length;a++){var n=e[a];i=n.qualifiedName.split(".").length-1;
for(var r=0;r<t.length;r++){if(n.qualifiedName===t[r]){n.selected=!0,l.push(n);break;
}if(s===i){l.push(n);break}}}return l},addPreSelectValues:function(e,t){for(var i,l,s=t.get("values"),a=this.get("levels").length-1,n=0;n<e.length;n++)i=e[n],
l=i.qualifiedName.match(/(\[[^\]]+]\.?)/g).length-2,i.level=t.get("levels").at(l).id,
i.canDrillDown=a>l,s.add(i,{silent:!0});s.trigger("add")},updateLevels:function(){
var e=this.get("olapUtils"),t=e.getHierarchy();if(t.hasAll){var i={name:t.defaultMember,
qualifiedName:t.defaultMemberQualifiedName,allMember:!0};this.get("levels").add(i);
}this.get("levels").add(e.getLevels(),{silent:!0})},processLevelSelection:function(e){
return 0==this.getSelectedLevels().length?void(null==e?this.get("levels").at(0).set({
selected:!0}):e.set({selected:!0})):this.getSelectedLevels().size()>1?(i(this.getSelectedLevels().without(e)).each(function(e){
e.set({selected:!1})}),void this.set("pageStart",0)):void 0},getSelectedLevels:function(){
return new t.Collection(this.get("levels").where({selected:!0}))},setupEvents:function(){
var e=this.get("values");e.on("change:selected",this.updateSelection,this),e.on("change:drill",this.drillDown,this),
this.on("page",this.fetchValues,this,this),this.on("change:collapsed",this.handleCollapse,this),
this.on("change:searchterm",this.updateSearch,this),this.on("drillUp",this.drillUp,this),
this.get("levels").on("select",this.changeLevel,this)},handleCollapse:function(e,t){
if(!t){var i=this.get("values").where({selected:!0}).map(function(e){return e.get("qualifiedName");
});this.set("oldValues",i)}},apply:function(){this.toggleCollapsed()},cancel:function(){
var e=this.get("oldValues");this.get("values").each(function(t){t.set("selected",e.indexOf(t.get("qualifiedName"))>-1);
}),this.get("values").trigger("select"),this.toggleCollapsed()},drillDown:function(e,t){
this.get("breadcrumb").push(e);var i,l=this.get("levels"),s=this.get("olapUtils"),a=s.getHierarchy().defaultMemberQualifiedName,n=l.where({
selected:!0})[0],r=n.get("qualifiedName"),o=l.indexOf(n);n.set("selected",!1),i=r==a,
i?l.at(o+2).set("selected",!0):l.at(o+1).set("selected",!0),this.set("pageStart",0,{
silent:!0}),this.trigger("drill"),this.fetchValues()},drillUp:function(){var e=this.get("breadcrumb");
if(e.length){e.pop();var t=this.get("levels"),i=t.where({selected:!0})[0],l=t.indexOf(i);
i.set("selected",!1),this.set("pageStart",0,{silent:!0}),t.at(l-1).set("selected",!0),
this.trigger("drill"),this.fetchValues()}},changeLevel:function(e,t){e&&t===!1||(this.set("breadcrumb",[]),
this.trigger("drill"),this.set("pageStart",0),this.fetchValues())},fetchValues:function(e,t){
var l,s=this.get("levels").where({selected:!0})[0],a=this.get("olapUtils"),n={pageSize:this.get("pageSize"),
pageStart:this.get("pageStart"),searchTerm:this.get("searchterm")},r=this.get("breadcrumb");
if(r&&r.length){var o=r.length-1;n.startMember=r[o].get("qualifiedName")}l=s?s.get("name"):"",
l&&l!=a.getHierarchy().defaultMember?n.level=l:n.level=a.getLevels()[0].name;var c=this.get("parameters");
if(c.length>0)for(var d=i.keys(c),u=0;u<c.length;u++)n[d[u]]=c[d[u]];var g=this;this.get("olapUtils").getPaginatedLevelMembers(n,function(e){
g.set("morePages",e.more),g.addPage(e.members)})},addPage:function(e){var t,i,l=(this.get("pageStart"),
this.get("values"));for(t=0;t<e.length;t++){var s,i=e[t];i.level=this.getSelectedLevels().at(0).get("qualifiedName"),
s=l.detect(function(e){return e.get("level")==i.level&&e.get("qualifiedName")==i.qualifiedName;
}),s||l.add(i,{silent:!0})}l.trigger("add")},nextPage:function(){if(this.get("morePages")){
var e=this.get("pageStart"),t=this.get("pageSize");this.set("pageStart",e+t),this.trigger("page");
}},prevPage:function(){if(0!=this.get("pageStart")){var e=this.get("pageStart"),t=this.get("pageSize");
this.set("pageStart",Math.max(0,e-t)),this.trigger("page")}},firstPage:function(){
0!=this.get("pageStart")&&(this.set("pageStart",0),this.trigger("page"))},lastPage:function(){
var e=this.get("totalRecords"),t=this.get("pageSize");this.set("pageStart",e-e%t),
this.trigger("page")},goToPage:function(e){var t=this.get("pageSize");this.set("pageStart",e*t),
this.trigger("page")},updateValues:function(e){this.get("values").reset(e)},updateSelection:function(e,t){
if(t){var l=this.get("multiselect"),s=this.get("deselectDescendants"),a=this.get("multilevelselect"),n=this.getSelectedLevels().at(0).get("qualifiedName"),r=e.get("qualifiedName");
i(this.get("values").without(e)).each(function(e){l||e.set("selected",!1),s&&e.get("qualifiedName").indexOf(r)>-1&&e.set("selected",!1),
a||n==e.get("level")||e.set("selected",!1)})}},clearSelection:function(){this.get("values").each(function(e){
e.set("selected",!1)})},toggleCollapsed:function(e){this.set("collapsed",i.isBoolean(e)?e:!this.get("collapsed"));
},selectedValues:function(){return i(this.get("values").where({selected:!0})).map(function(e){
return e.get("value")})},updateSearch:function(){this.get("searchterm");this.set("pageStart",0,{
silent:!0}),this.fetchValues()},notifyUpdate:function(){this.trigger("notify",this);
}})}),define("cde/components/OlapSelectorComponent/OlapSelectorComponent.ext",["pentaho/environment"],function(e){
return{getServiceUrl:function(){return e.server.root+"plugin/pentaho-cdf-dd/api/olap/";
},getCubesUrl:function(){return"getCubes"},getCubeStructureUrl:function(){return"getCubeStructure";
},getPaginatedLevelMembersUrl:function(){return"getPaginatedLevelMembers"},getLevelMembersStructureUrl:function(){
return"getLevelMembersStructure"}}}),define("cde/components/OlapSelectorComponent/lib/OlapUtils",["cdf/Logger","cdf/lib/jquery","amd!cdf/lib/underscore","../OlapSelectorComponent.ext"],function(e,t,i,l){
return function(s){var a={url:l.getServiceUrl(),extraParams:{}},n={};n.options=t.extend({},a,s);
var r=!1,o=(n.options.catalog,n.options.cube,[]),c={},d={GET_OLAP_CUBES:l.getCubesUrl(),
GET_CUBE_STRUCTURE:l.getCubeStructureUrl(),GET_PAGINATED_LEVEL_MEMBERS:l.getPaginatedLevelMembersUrl(),
GET_MEMBER_STRUCTURE:l.getLevelMembersStructureUrl()};return n.initialize=function(){
r||(n.initCatalogs(),r=!0)},n.setOptions=function(e){n.options=t.extend(n.options,e);
},n.setCatalog=function(e){n.catalog=e,n.options.catalog=e},n.initCatalogs=function(){
e.debug("Getting info from cube");var t=n.callOlapUtilsSync({operation:d.GET_OLAP_CUBES
});o=t.catalogs,e.info("[OlapUtils] Successfully got catalog information")},n.resetCubeStructure=function(e){
var t=n.getSelectedCatalogName(e),i=n.getSelectedCubeName(e),l=t+"::"+i;return l?delete c[l]:c={},
!0},n.getCatalogs=function(){return o},n.getCubes=function(e){var t=n.getSelectedCatalogName(e),l=i.find(o,function(e){
return e.schema.indexOf(t)>=0});return l?l.cubes:null},n.getCubeStructure=function(t){
var i=n.getSelectedCatalogName(t),l=n.getSelectedCubeName(t),s=i+"::"+l;if(!i||!l)return e.error("Catalog or Cube not specified"),
null;if(c[s])return c[s];var a={operation:d.GET_CUBE_STRUCTURE,catalog:i,cube:l},r=n.callOlapUtilsSync(a);
return c[s]=r,r},n.getCube=function(e){return n.getCubeStructure(e)},n.getDimensions=function(e){
var t=n.getCubeStructure(e);return null!=t?t.dimensions:null},n.getDimension=function(e){
var t=n.getSelectedDimensionName(e),l=n.getCubeStructure(e),s=i.find(l.dimensions,function(e){
return e.name==t});return s},n.getHierarchies=function(e){var t=n.getDimension(e);
return null!=t?t.hierarchies:null},n.getHierarchy=function(e){var t=n.getSelectedHierarchyName(e),l=i.find(n.getHierarchies(e),function(e){
return e.name==t});return l},n.getLevels=function(e){var t=n.getHierarchy(e);return null!=t?t.levels:null;
},n.getLevel=function(e){var t=n.getSelectedLevelName(e),l=i.find(n.getLevels(e),function(e){
return e.name==t});return l},n.getPaginatedLevelMembers=function(l,s){var a={operation:d.GET_PAGINATED_LEVEL_MEMBERS,
startMember:"",pageStart:0,pageSize:100,searchTerm:"",context:""},r=t.extend({},a,l);
r.catalog=n.getSelectedCatalogName(l),r.cube=n.getSelectedCubeName(l);var o=n.getLevel(l);
r.level=o.qualifiedName,n.callOlapUtils(r,function(t){var l=t.members;e.debug("Got results for paginatedLevelMembers: "+i(l).pluck("name").join(", ")),
s&&s(t)})},n.getOlapUtilsUrl=function(){return n.options.url},n.getSelectedCatalogName=function(e){
var i=t.extend({},n.options,e).catalog;return i},n.getSelectedCubeName=function(e){
return t.extend({},n.options,e).cube},n.getSelectedDimensionName=function(e){return t.extend({},n.options,e).dimension;
},n.getSelectedHierarchyName=function(i){var l=t.extend({},n.options,i).hierarchy;
return null==l&&(l=n.getHierarchies(i)[0].name,n.options.hierarchy=l,e.info("No hierarchy explicitly selected - setting the default one to '"+l+"'")),
l},n.getSelectedLevelName=function(e){return t.extend({},n.options,e).level},n.callOlapUtilsSync=function(e){
return n.callOlapUtils(e,void 0,void 0,!0)},n.callOlapUtils=function(e,i,l,s){var a,n=this;
return t.ajax({type:"GET",url:n.getOlapUtilsUrl()+e.operation,data:t.extend({},n.options.extraParams,e),
dataType:"json",success:function(e){return e&&"true"==e.status&&e.result?void(s?a=e.result:i(e.result)):("function"!=typeof l&&(l=alert),
l(e))},async:!s}),a},n.initialize(),e.info("OlapUtils initialized!"),n}}),define("cde/components/OlapSelectorComponent/OlapSelectorComponent",["cdf/components/BaseComponent","cdf/dashboard/Utils","cdf/lib/jquery","amd!cdf/lib/underscore","./OlapSelectorView","./OlapSelectorModel","./lib/OlapUtils","./OlapSelectorComponent.ext","css!./OlapSelectorComponent"],function(e,t,i,l,s,a,n,r){
return e.extend({init:function(){var e=new n({url:r.getServiceUrl(),catalog:this.catalog,
cube:this.cube,dimension:this.dimensionName}),t=this.catalog,o=l.find(e.getCatalogs(),function(e){
return e.schema.indexOf(t)>=0});o!==!1&&e.setCatalog(o.name),this.model=new a({olapUtils:e,
title:this.title,multiselect:this.multiSelect,parameters:this.getParamValues(this.parameters),
preselected:this.getPreSelValue(this.parameter)}),this.view=new s({model:this.model,
el:i("#"+this.htmlObject).get(0)})},update:function(){var e=this;e.isInitialized||(e.init(),
e.isInitialized=!0),e.model.on("change:collapsed",function(t,i){i&&e.dashboard.processChange(e.name);
}),e.view.render(),e.parameters=e.getParamValues(e.parameters),e.model.set("parameters",e.parameters);
},getValue:function(){return l(this.model.get("values").where({selected:!0})).map(function(e){
return e.get("qualifiedName")})},getParamValues:function(e){var i=e instanceof Array?t.propertiesArrayToObject(e):e||{},s={};
return l.each(i,function(t,i){t=this.dashboard.getParameterValue(t),l.isObject(t)&&(t=JSON.stringify(t)),
"function"==typeof t&&(t=t()),s[i]=t,s.length=e.length}),s},getPreSelValue:function(e){
var t=this.dashboard.getParameterValue(e),i=[];return"undefined"!=typeof t&&t.length>0&&(i=JSON.parse(t),
this.multiSelect||(i=new Array(i[0]))),i}})}),define("cde/components/OlapSelectorComponent",["cde/components/OlapSelectorComponent/OlapSelectorComponent"],function(e){
return e});